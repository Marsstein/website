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
  Printer,
  Circle,
  UserCheck,
  PersonStanding
} from 'lucide-react';

const Iso27018Guide = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [completedTasks, setCompletedTasks] = useState(new Set());
  const [readingProgress, setReadingProgress] = useState(0);
  const [expandedSections, setExpandedSections] = useState(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const containerRef = useRef(null);

  const sections = [
    { id: 'overview', title: 'Überblick', icon: Eye, readTime: '8 Min' },
    { id: 'scope', title: 'Anwendungsbereich', icon: Target, readTime: '10 Min' },
    { id: 'pii-classification', title: 'PII-Klassifizierung', icon: Database, readTime: '15 Min' },
    { id: 'consent-management', title: 'Consent Management', icon: CheckCircle, readTime: '12 Min' },
    { id: 'data-processing', title: 'Datenverarbeitung', icon: Settings, readTime: '18 Min' },
    { id: 'transparency', title: 'Transparenz & Information', icon: Info, readTime: '14 Min' },
    { id: 'data-subject-rights', title: 'Betroffenenrechte', icon: Users, readTime: '16 Min' },
    { id: 'cross-border', title: 'Grenzüberschreitende Übertragung', icon: Globe, readTime: '20 Min' },
    { id: 'subprocessing', title: 'Unterauftragsverarbeitung', icon: Share2, readTime: '14 Min' },
    { id: 'incident-notification', title: 'Incident Notification', icon: AlertTriangle, readTime: '12 Min' },
    { id: 'audit-compliance', title: 'Audit & Compliance', icon: Search, readTime: '16 Min' },
    { id: 'technical-measures', title: 'Technische Maßnahmen', icon: Shield, readTime: '22 Min' },
    { id: 'risk-assessment', title: 'Privacy Risk Assessment', icon: BarChart3, readTime: '18 Min' },
    { id: 'implementation', title: 'Implementierungsroadmap', icon: Route, readTime: '25 Min' },
    { id: 'certification', title: 'Zertifizierungsprozess', icon: Award, readTime: '20 Min' }
  ];

  const toggleTaskCompletion = (taskId) => {
    setCompletedTasks(prev => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      return newSet;
    });
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => {
      const newSet = new Set(prev);
      if (newSet.has(sectionId)) {
        newSet.delete(sectionId);
      } else {
        newSet.add(sectionId);
      }
      return newSet;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('data-section');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      // Calculate reading progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const trackLength = documentHeight - windowHeight;
      const pctScrolled = Math.floor((scrollTop / trackLength) * 100);
      setReadingProgress(pctScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Counter Animation Component
  const CounterAnimation = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const isInView = useInView(elementRef, { once: true });

    useEffect(() => {
      if (isInView) {
        let startTime;
        const animateCount = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const progress = timestamp - startTime;
          const percentage = Math.min(progress / duration, 1);
          setCount(Math.floor(percentage * value));
          
          if (percentage < 1) {
            requestAnimationFrame(animateCount);
          }
        };
        requestAnimationFrame(animateCount);
      }
    }, [isInView, value, duration]);

    return <span ref={elementRef}>{count}</span>;
  };

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 z-50"
        style={{ scaleX }}
      />

      {/* Floating Sidebar Toggle */}
      <Button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-20 left-4 z-40 lg:hidden bg-purple-600 hover:bg-purple-700"
        size="sm"
      >
        <List className="h-4 w-4" />
      </Button>

      {/* Sidebar */}
      <motion.div
        className={`fixed left-0 top-16 h-screen w-80 bg-slate-800/95 backdrop-blur-sm border-r border-slate-700 z-30 overflow-y-auto ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 transition-transform duration-300`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-white mb-6">ISO 27018 Leitfaden</h2>
          <div className="space-y-2">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  scrollToSection(section.id);
                  setSidebarOpen(false);
                }}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 group ${
                  activeSection === section.id
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <section.icon className={`h-4 w-4 ${
                    activeSection === section.id ? 'text-white' : 'text-purple-400'
                  }`} />
                  <div className="flex-1">
                    <div className="font-medium text-sm">{section.title}</div>
                    <div className="text-xs opacity-70">{section.readTime}</div>
                  </div>
                </div>
              </button>
            ))}
          </div>
          
          <div className="mt-8 p-4 bg-purple-900/20 rounded-lg border border-purple-700/50">
            <h3 className="text-sm font-medium text-white mb-2">Lesefortschritt</h3>
            <Progress value={readingProgress} className="h-2" />
            <p className="text-xs text-gray-400 mt-1">{readingProgress}% abgeschlossen</p>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="lg:ml-80">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-purple-600/20 text-purple-300 px-4 py-2 rounded-full text-sm mb-6">
              <Lock className="h-4 w-4" />
              Privacy in Public Clouds
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              ISO 27018 Compliance Guide
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Umfassender Leitfaden für den Schutz personenbezogener Daten in Public Cloud Services. 
              Von der PII-Klassifizierung bis zur vollständigen Zertifizierung.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <div className="text-2xl font-bold text-purple-400 mb-2">
                  <CounterAnimation value={43} />
                </div>
                <div className="text-sm text-gray-300">PII Protection Controls</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <div className="text-2xl font-bold text-pink-400 mb-2">
                  <CounterAnimation value={15} />
                </div>
                <div className="text-sm text-gray-300">Detaillierte Kapitel</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <div className="text-2xl font-bold text-blue-400 mb-2">
                  <CounterAnimation value={7} />
                </div>
                <div className="text-sm text-gray-300">DSGVO-Synergien</div>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <div className="text-2xl font-bold text-green-400 mb-2">
                  <CounterAnimation value={98} />%
                </div>
                <div className="text-sm text-gray-300">Praxistauglichkeit</div>
              </div>
            </div>
          </motion.div>

          {/* Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="overview"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Eye className="h-6 w-6 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">ISO 27018 Überblick</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    ISO/IEC 27018:2019 ist der internationale Code of Practice für den Schutz personenbezogener 
                    Daten (PII) in Public Clouds. Als Ergänzung zu ISO 27002 und ISO 27017 definiert er spezifische 
                    Kontrollen und Leitlinien für Cloud Service Provider, die als PII-Auftragsverarbeiter fungieren.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5 text-purple-400" />
                        Kernziele von ISO 27018
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">PII-Schutz in Public Clouds:</span>
                            <span className="block text-sm text-gray-400 mt-1">
                              Spezifische Kontrollen für personenbezogene Daten in öffentlichen Cloud-Umgebungen
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Transparenz & Accountability:</span>
                            <span className="block text-sm text-gray-400 mt-1">
                              Klare Rechenschaftspflichten und Transparenzanforderungen für CSPs
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Consent Management:</span>
                            <span className="block text-sm text-gray-400 mt-1">
                              Strukturierte Verfahren für Einwilligungsmanagement und Betroffenenrechte
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Cross-Border Protection:</span>
                            <span className="block text-sm text-gray-400 mt-1">
                              Schutz bei grenzüberschreitenden Datenübertragungen und internationalen Deployments
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Scale className="h-5 w-5 text-blue-400" />
                        Beziehung zu anderen Standards
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">ISO 27001/27002</h4>
                          <p className="text-gray-300 text-sm">
                            Baut auf den Grundkontrollen von ISO 27002 auf und erweitert diese um PII-spezifische Anforderungen
                          </p>
                        </div>
                        
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 className="font-medium text-purple-400 mb-2">ISO 27017</h4>
                          <p className="text-gray-300 text-sm">
                            Ergänzt Cloud-Security-Kontrollen um spezifische Datenschutz- und Privacy-Aspekte
                          </p>
                        </div>
                        
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">DSGVO/GDPR</h4>
                          <p className="text-gray-300 text-sm">
                            Direkte Unterstützung bei der Umsetzung von DSGVO-Anforderungen in Cloud-Umgebungen
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Was macht ISO 27018 besonders?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <UserCheck className="h-6 w-6 text-purple-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">PII-Fokus</h4>
                      <p className="text-gray-300 text-sm">
                        Erster internationaler Standard speziell für den Schutz personenbezogener Daten in Public Clouds
                      </p>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Globe className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Global Anwendbar</h4>
                      <p className="text-gray-300 text-sm">
                        Harmonisiert verschiedene Datenschutzgesetze und ermöglicht globale Cloud-Deployments
                      </p>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Praxisorientiert</h4>
                      <p className="text-gray-300 text-sm">
                        Konkrete Implementierungsleitlinien und Best Practices für Cloud Service Provider
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-400" />
                    Wichtige Begriffe und Definitionen
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-purple-400 mb-3">PII (Personally Identifiable Information):</h4>
                      <p className="text-gray-300 text-sm mb-4">
                        Informationen, die zur Identifikation einer natürlichen Person verwendet werden können, 
                        einschließlich direkter und indirekter Identifikatoren.
                      </p>
                      
                      <h4 className="font-medium text-blue-400 mb-3">PII Principal:</h4>
                      <p className="text-gray-300 text-sm">
                        Die natürliche Person, auf die sich die personenbezogenen Daten beziehen 
                        (entspricht der "betroffenen Person" in der DSGVO).
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-green-400 mb-3">PII Controller:</h4>
                      <p className="text-gray-300 text-sm mb-4">
                        Die Organisation, die Zweck und Mittel der PII-Verarbeitung bestimmt 
                        (entspricht dem "Verantwortlichen" in der DSGVO).
                      </p>
                      
                      <h4 className="font-medium text-yellow-400 mb-3">PII Processor:</h4>
                      <p className="text-gray-300 text-sm">
                        Der Cloud Service Provider, der PII im Auftrag des Controllers verarbeitet 
                        (entspricht dem "Auftragsverarbeiter" in der DSGVO).
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Scope Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="scope"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Target className="h-6 w-6 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Anwendungsbereich</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    ISO 27018 gilt für Cloud Service Provider, die als PII-Auftragsverarbeiter fungieren und 
                    Public Cloud Services anbieten. Der Standard definiert klare Grenzen und Anwendungsbereiche 
                    für verschiedene Cloud-Deployment-Modelle und Service-Typen.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        Anwendbar auf
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-2">
                          <Cloud className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Public Cloud Services:</span>
                            <span className="block text-sm text-gray-400 mt-1">
                              IaaS, PaaS, SaaS und alle Hybrid-Modelle mit Public Cloud-Komponenten
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Building2 className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">PII-Auftragsverarbeiter:</span>
                            <span className="block text-sm text-gray-400 mt-1">
                              CSPs, die personenbezogene Daten im Auftrag von Kunden verarbeiten
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Globe className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Grenzüberschreitende Services:</span>
                            <span className="block text-sm text-gray-400 mt-1">
                              Cloud-Services mit internationaler Datenverarbeitung und -speicherung
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Users className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Multi-Tenant-Umgebungen:</span>
                            <span className="block text-sm text-gray-400 mt-1">
                              Geteilte Infrastrukturen mit mehreren Kunden und PII-Controllern
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <X className="h-5 w-5 text-red-400" />
                        Nicht anwendbar auf
                      </h3>
                      <ul className="space-y-3 text-gray-300">
                        <li className="flex items-start gap-2">
                          <Lock className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Private Clouds:</span>
                            <span className="block text-sm text-gray-400 mt-1">
                              Ausschließlich interne, nicht-öffentliche Cloud-Infrastrukturen
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Shield className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">On-Premises-Lösungen:</span>
                            <span className="block text-sm text-gray-400 mt-1">
                              Lokale Installationen ohne Cloud-Komponenten
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <UserCheck className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">PII-Controller:</span>
                            <span className="block text-sm text-gray-400 mt-1">
                              Organisationen, die selbst die Zwecke der Datenverarbeitung bestimmen
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <Database className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Nicht-PII-Daten:</span>
                            <span className="block text-sm text-gray-400 mt-1">
                              Reine Business-Daten ohne Personenbezug oder anonymisierte Daten
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Service-Modell-spezifische Anwendung</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-blue-900/20 border border-blue-700/50 rounded-lg p-6">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Server className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="font-medium text-white mb-3 text-center">Infrastructure as a Service</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Virtual Machines mit PII-Speicherung</li>
                        <li>• Block- und Object-Storage für PII</li>
                        <li>• Backup- und Disaster Recovery-Services</li>
                        <li>• Network-Services mit PII-Transit</li>
                      </ul>
                    </div>
                    
                    <div className="bg-purple-900/20 border border-purple-700/50 rounded-lg p-6">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Layers className="h-6 w-6 text-purple-400" />
                      </div>
                      <h4 className="font-medium text-white mb-3 text-center">Platform as a Service</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Datenbank-Services mit PII</li>
                        <li>• Application Runtime Environments</li>
                        <li>• Integration und API-Plattformen</li>
                        <li>• Development und Testing Environments</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-900/20 border border-green-700/50 rounded-lg p-6">
                      <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Monitor className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="font-medium text-white mb-3 text-center">Software as a Service</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• CRM und HR-Systeme</li>
                        <li>• Collaboration-Plattformen</li>
                        <li>• E-Mail und Communication Services</li>
                        <li>• Business Applications mit PII</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg border border-yellow-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-yellow-400" />
                    Wichtige Abgrenzungen und Besonderheiten
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-yellow-400 mb-3">Shared Responsibility Model:</h4>
                      <p className="text-gray-300 text-sm mb-4">
                        ISO 27018 erkennt das Shared Responsibility Model an und definiert klare 
                        Verantwortlichkeiten zwischen CSP und Kunden für verschiedene Service-Modelle.
                      </p>
                      
                      <h4 className="font-medium text-blue-400 mb-3">Multi-Jurisdictional Compliance:</h4>
                      <p className="text-gray-300 text-sm">
                        Besondere Beachtung grenzüberschreitender Datenverarbeitung und 
                        unterschiedlicher nationaler Datenschutzgesetze.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-green-400 mb-3">Sub-Processing:</h4>
                      <p className="text-gray-300 text-sm mb-4">
                        Explizite Regelungen für die Einbindung von Sub-Prozessoren und 
                        die Weitergabe von Verantwortlichkeiten in der Supply Chain.
                      </p>
                      
                      <h4 className="font-medium text-purple-400 mb-3">Incident Response:</h4>
                      <p className="text-gray-300 text-sm">
                        Spezifische Anforderungen für die Meldung von Privacy-Incidents 
                        und Datenschutzverletzungen in Cloud-Umgebungen.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* PII Classification Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="pii-classification"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Database className="h-6 w-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">PII-Klassifizierung</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Die korrekte Klassifizierung von personenbezogenen Daten ist fundamental für die 
                    Implementierung angemessener Schutzmaßnahmen. ISO 27018 definiert detaillierte 
                    Kategorien und Schutzlevel für verschiedene Arten von PII.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-400" />
                        Direkte Identifikatoren
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                          <h4 className="font-medium text-red-400 mb-2">Hochsensible PII</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Sozialversicherungsnummern</li>
                            <li>• Personalausweisnummern</li>
                            <li>• Reisepassnummern</li>
                            <li>• Führerscheinnummern</li>
                            <li>• Steuerliche Identifikationsnummern</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-orange-900/20 border border-orange-700/50 rounded-lg">
                          <h4 className="font-medium text-orange-400 mb-2">Sensible PII</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Vollständiger Name</li>
                            <li>• E-Mail-Adressen</li>
                            <li>• Telefonnummern</li>
                            <li>• Physische Adressen</li>
                            <li>• Geburtsdaten</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                          <h4 className="font-medium text-yellow-400 mb-2">Standard PII</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Benutzernamen</li>
                            <li>• Öffentliche Profile</li>
                            <li>• Arbeitgeberdaten</li>
                            <li>• Präferenzen</li>
                            <li>• Nicht-sensitive Kontaktdaten</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Activity className="h-5 w-5 text-purple-400" />
                        Indirekte Identifikatoren
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 className="font-medium text-purple-400 mb-2">Verhaltensdaten</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• IP-Adressen und Geolocation</li>
                            <li>• Browser Fingerprints</li>
                            <li>• Clickstream-Daten</li>
                            <li>• Session-Tokens</li>
                            <li>• Device-Identifikatoren</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Analytische Daten</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Nutzungsstatistiken</li>
                            <li>• Performance-Metriken</li>
                            <li>• Aggregierte Profile</li>
                            <li>• Machine Learning Features</li>
                            <li>• Inferenzen und Vorhersagen</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">Metadaten</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Zeitstempel</li>
                            <li>• Dateimetadaten</li>
                            <li>• System-Logs</li>
                            <li>• Netzwerk-Informationen</li>
                            <li>• Konfigurationsdaten</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Klassifizierungsmatrix und Schutzlevel</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-slate-600">
                          <th className="text-left p-4 text-gray-300 font-medium">PII-Kategorie</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Risiko-Level</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Verschlüsselung</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Zugriffskontrolle</th>
                          <th className="text-left p-4 text-gray-300 font-medium">Aufbewahrung</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300 text-sm">
                        <tr className="border-b border-slate-700">
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                              Hochsensible PII
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge className="bg-red-900/20 text-red-400 border-red-700/50">Kritisch</Badge>
                          </td>
                          <td className="p-4">AES-256 + HSM</td>
                          <td className="p-4">MFA + RBAC + Audit</td>
                          <td className="p-4">&lt; 2 Jahre</td>
                        </tr>
                        <tr className="border-b border-slate-700">
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                              Sensible PII
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge className="bg-orange-900/20 text-orange-400 border-orange-700/50">Hoch</Badge>
                          </td>
                          <td className="p-4">AES-256</td>
                          <td className="p-4">MFA + RBAC</td>
                          <td className="p-4">&lt; 5 Jahre</td>
                        </tr>
                        <tr className="border-b border-slate-700">
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                              Standard PII
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge className="bg-yellow-900/20 text-yellow-400 border-yellow-700/50">Mittel</Badge>
                          </td>
                          <td className="p-4">AES-128/256</td>
                          <td className="p-4">RBAC + Logging</td>
                          <td className="p-4">&lt; 7 Jahre</td>
                        </tr>
                        <tr>
                          <td className="p-4">
                            <div className="flex items-center gap-2">
                              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                              Indirekte PII
                            </div>
                          </td>
                          <td className="p-4">
                            <Badge className="bg-blue-900/20 text-blue-400 border-blue-700/50">Niedrig</Badge>
                          </td>
                          <td className="p-4">TLS + Optional</td>
                          <td className="p-4">Standard RBAC</td>
                          <td className="p-4">Nach Bedarf</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 rounded-lg border border-blue-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-cyan-400" />
                    Implementierungsleitfaden für PII-Klassifizierung
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-cyan-400 mb-3">Automatisierte Klassifizierung:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Data Loss Prevention (DLP) Tools</li>
                        <li>• Machine Learning-basierte Erkennung</li>
                        <li>• Regex-Pattern für Identifikatoren</li>
                        <li>• Content-Analyse und Metadaten-Scanning</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-green-400 mb-3">Governance und Prozesse:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Regelmäßige Klassifizierungs-Reviews</li>
                        <li>• Data Steward Rollen und Verantwortlichkeiten</li>
                        <li>• Ausnahmemanagement und Eskalation</li>
                        <li>• Training und Awareness Programme</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Consent Management Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="consent-management"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Consent Management</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    ISO 27018 definiert spezifische Anforderungen für das Management von Einwilligungen 
                    in Cloud-Umgebungen. Als PII-Processor müssen CSPs die Einwilligungsgrundlagen 
                    ihrer Kunden respektieren und entsprechende technische Mechanismen bereitstellen.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <UserCheck className="h-5 w-5 text-green-400" />
                        Consent-Prinzipien nach ISO 27018
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Informed Consent:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Kunden müssen vollständig über die Art der Datenverarbeitung, 
                              Zwecke und potenzielle Risiken informiert werden.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Specific Consent:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Einwilligungen müssen für spezifische Verarbeitungszwecke 
                              und -aktivitäten granular erfasst werden.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Revocable Consent:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Benutzer müssen jederzeit ihre Einwilligung widerrufen können, 
                              ohne negative Konsequenzen für den Service.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Demonstrable Consent:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              CSPs müssen nachweisen können, dass und wann 
                              Einwilligungen erteilt wurden.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Settings className="h-5 w-5 text-blue-400" />
                        Technische Implementierung
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Consent Management Platform</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Zentralisierte Consent-Datenbank</li>
                            <li>• API-basierte Consent-Prüfung</li>
                            <li>• Versionierung von Consent-Policies</li>
                            <li>• Real-time Consent-Updates</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">Privacy Preference Center</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Granulare Einstellungsmöglichkeiten</li>
                            <li>• Benutzerfreundliche Interfaces</li>
                            <li>• Multi-Channel Verfügbarkeit</li>
                            <li>• Consent-Historie und -Analytics</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 className="font-medium text-purple-400 mb-2">Enforcement Mechanisms</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Automatisierte Policy Enforcement</li>
                            <li>• Data Processing Gates</li>
                            <li>• Consent-basierte Access Controls</li>
                            <li>• Violation Detection und Alerting</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Consent-Lebenszyklus in der Cloud</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Plus className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">1. Erfassung</h4>
                      <p className="text-gray-300 text-sm">
                        Initial consent collection beim Service-Onboarding mit klarer Zweckbindung
                      </p>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Database className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">2. Speicherung</h4>
                      <p className="text-gray-300 text-sm">
                        Sichere, verschlüsselte Speicherung mit Versionierung und Audit-Trail
                      </p>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Activity className="h-6 w-6 text-purple-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">3. Durchsetzung</h4>
                      <p className="text-gray-300 text-sm">
                        Real-time enforcement bei jeder Datenverarbeitungsaktivität
                      </p>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <X className="h-6 w-6 text-red-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">4. Widerruf</h4>
                      <p className="text-gray-300 text-sm">
                        Sofortige Datenverarbeitungsstopps bei Consent-Widerruf
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-lg border border-green-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5 text-teal-400" />
                    Best Practices für Cloud-Consent-Management
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-teal-400 mb-3">Architektur:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Microservices-basierte Consent Services</li>
                        <li>• Event-driven Consent Propagation</li>
                        <li>• Multi-region Consent Synchronisation</li>
                        <li>• Fallback-Mechanismen bei Ausfällen</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-400 mb-3">Integration:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• SDK für Kundenanwendungen</li>
                        <li>• Webhook-basierte Notifications</li>
                        <li>• Standard-APIs (OpenAPI/REST)</li>
                        <li>• Third-party System Connectors</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-purple-400 mb-3">Monitoring:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Consent Compliance Dashboards</li>
                        <li>• Automated Consent Auditing</li>
                        <li>• Performance und Availability Metrics</li>
                        <li>• Regulatory Reporting Features</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Data Processing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="data-processing"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Settings className="h-6 w-6 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Datenverarbeitung</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    ISO 27018 definiert strenge Kontrollen für die Verarbeitung personenbezogener Daten 
                    in Cloud-Umgebungen. CSPs müssen sicherstellen, dass PII nur entsprechend den 
                    Anweisungen des Controllers und innerhalb der vereinbarten Zweckbindung verarbeitet wird.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Lock className="h-5 w-5 text-blue-400" />
                        Verarbeitungsgrundsätze
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Zweckbindung:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              PII darf nur für die explizit vereinbarten Zwecke verarbeitet werden. 
                              Keine sekundäre Nutzung ohne zusätzliche Einwilligung.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Datenminimierung:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Nur die für den Service notwendigen PII werden erfasst, 
                              verarbeitet und gespeichert.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Vertraulichkeit:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Umfassende technische und organisatorische Maßnahmen 
                              zum Schutz vor unbefugtem Zugriff.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Integrität:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Schutz vor unbefugter oder unbeabsichtigter Änderung, 
                              Löschung oder Zerstörung von PII.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-400" />
                        Verarbeitungskontrollen
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Zugriffskontrolle</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Role-based Access Control (RBAC)</li>
                            <li>• Attribute-based Access Control (ABAC)</li>
                            <li>• Multi-Factor Authentication</li>
                            <li>• Privileged Access Management</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">Verschlüsselung</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Encryption at Rest (AES-256)</li>
                            <li>• Encryption in Transit (TLS 1.3)</li>
                            <li>• Encryption in Use (Confidential Computing)</li>
                            <li>• Key Management und HSM Integration</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 className="font-medium text-purple-400 mb-2">Monitoring</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Real-time Data Access Monitoring</li>
                            <li>• Anomaly Detection</li>
                            <li>• Compliance Dashboards</li>
                            <li>• Automated Incident Response</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Verarbeitungsaktivitäten und Kontrollen</h3>
                  <div className="space-y-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Database className="h-5 w-5 text-blue-400" />
                        Datenerfassung und -eingabe
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h5 className="font-medium text-blue-400 mb-2">Input Validation</h5>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Schema-basierte Validierung</li>
                            <li>• Data Quality Checks</li>
                            <li>• Format und Type Validation</li>
                            <li>• Boundary Value Testing</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h5 className="font-medium text-green-400 mb-2">Data Sanitization</h5>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Input Sanitization</li>
                            <li>• XSS Prevention</li>
                            <li>• SQL Injection Protection</li>
                            <li>• NoSQL Injection Prevention</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h5 className="font-medium text-purple-400 mb-2">Audit Logging</h5>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Input Data Logging</li>
                            <li>• Source Attribution</li>
                            <li>• Timestamp Recording</li>
                            <li>• User Activity Tracking</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Activity className="h-5 w-5 text-green-400" />
                        Datenverarbeitung und -transformation
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-orange-900/20 border border-orange-700/50 rounded-lg">
                          <h5 className="font-medium text-orange-400 mb-2">Processing Controls</h5>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Business Logic Validation</li>
                            <li>• Data Transformation Rules</li>
                            <li>• Error Handling Procedures</li>
                            <li>• Rollback Mechanisms</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-teal-900/20 border border-teal-700/50 rounded-lg">
                          <h5 className="font-medium text-teal-400 mb-2">Privacy Preserving</h5>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Differential Privacy</li>
                            <li>• K-Anonymity</li>
                            <li>• Data Masking</li>
                            <li>• Pseudonymization</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                          <h5 className="font-medium text-red-400 mb-2">Quality Assurance</h5>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Data Lineage Tracking</li>
                            <li>• Processing Verification</li>
                            <li>• Output Quality Checks</li>
                            <li>• Consistency Validation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Share2 className="h-5 w-5 text-purple-400" />
                        Datenübertragung und -freigabe
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 bg-indigo-900/20 border border-indigo-700/50 rounded-lg">
                          <h5 className="font-medium text-indigo-400 mb-2">Transfer Security</h5>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• End-to-End Encryption</li>
                            <li>• Certificate Pinning</li>
                            <li>• Perfect Forward Secrecy</li>
                            <li>• Transfer Protocol Validation</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-pink-900/20 border border-pink-700/50 rounded-lg">
                          <h5 className="font-medium text-pink-400 mb-2">Authorization</h5>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Data Sharing Agreements</li>
                            <li>• Purpose Limitation Checks</li>
                            <li>• Recipient Validation</li>
                            <li>• Transfer Approval Workflows</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-emerald-900/20 border border-emerald-700/50 rounded-lg">
                          <h5 className="font-medium text-emerald-400 mb-2">Compliance</h5>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Cross-Border Transfer Rules</li>
                            <li>• Adequacy Decision Compliance</li>
                            <li>• Standard Contractual Clauses</li>
                            <li>• Transfer Impact Assessments</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg border border-purple-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-pink-400" />
                    Technische Implementierungsrichtlinien
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-pink-400 mb-3">API Design für Privacy:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Privacy-by-Design API Patterns</li>
                        <li>• Granulare Consent-Parameter</li>
                        <li>• Purpose-bound API Endpoints</li>
                        <li>• Data Minimization in Responses</li>
                        <li>• Automated Privacy Policy Enforcement</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-cyan-400 mb-3">Infrastructure Security:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Zero-Trust Network Architecture</li>
                        <li>• Micro-segmentation for PII workloads</li>
                        <li>• Container Security und Image Scanning</li>
                        <li>• Serverless Function Isolation</li>
                        <li>• Hardware Security Module Integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Transparency & Information Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="transparency"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-cyan-600/20 rounded-lg">
                    <Info className="h-6 w-6 text-cyan-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Transparenz & Information</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    ISO 27018 verlangt umfassende Transparenz über die Verarbeitung personenbezogener Daten 
                    in Cloud-Umgebungen. CSPs müssen ihre Kunden proaktiv und verständlich über alle 
                    relevanten Aspekte der PII-Verarbeitung informieren.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-cyan-400" />
                        Informationspflichten
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Verarbeitungszwecke:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Klare Dokumentation aller Zwecke, für die PII verarbeitet wird, 
                              einschließlich Service-Bereitstellung und Support-Aktivitäten.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Datenarten:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Vollständige Auflistung der verarbeiteten PII-Kategorien 
                              mit Klassifizierung und Sensitivitätslevel.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Speicherorte:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Geografische Angaben zu Rechenzentren und 
                              Backup-Standorten mit Jurisdiktionshinweisen.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Aufbewahrungszeiten:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Spezifische Retention-Richtlinien für verschiedene 
                              PII-Kategorien und Löschungsverfahren.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Globe className="h-5 w-5 text-blue-400" />
                        Transparenz-Mechanismen
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Privacy Dashboard</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Real-time Datenverarbeitungs-Übersicht</li>
                            <li>• Interaktive Privacy-Einstellungen</li>
                            <li>• Audit-Log für PII-Aktivitäten</li>
                            <li>• Compliance-Status-Anzeige</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">Automatisierte Benachrichtigungen</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Policy-Änderungsmitteilungen</li>
                            <li>• Datenverarbeitungs-Alerts</li>
                            <li>• Incident-Notifications</li>
                            <li>• Consent-Erinnerungen</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 className="font-medium text-purple-400 mb-2">Dokumentation & Reporting</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Maschinell lesbare Privacy-Policies</li>
                            <li>• Standardisierte Compliance-Reports</li>
                            <li>• Data Flow-Diagramme</li>
                            <li>• Third-party Audit-Berichte</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Privacy Notice Framework</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Eye className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="font-medium text-white mb-3 text-center">Layered Privacy Notice</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Kurze Übersichts-Notice</li>
                        <li>• Detaillierte Vollversion</li>
                        <li>• Kontextuelle Just-in-Time-Notices</li>
                        <li>• Multi-Language Support</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Settings className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="font-medium text-white mb-3 text-center">Machine-Readable Formats</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• JSON-LD Privacy Policies</li>
                        <li>• OpenAPI Privacy Specifications</li>
                        <li>• GDPR-XML Compliance Exports</li>
                        <li>• P3P Policy References</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-6 w-6 text-purple-400" />
                      </div>
                      <h4 className="font-medium text-white mb-3 text-center">Zielgruppen-spezifisch</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• B2B Customer Portals</li>
                        <li>• End-User Interfaces</li>
                        <li>• Regulatory Authority Views</li>
                        <li>• Developer Documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-lg border border-cyan-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-cyan-400" />
                    Implementierungsstrategien für maximale Transparenz
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-cyan-400 mb-3">Proaktive Kommunikation:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Automatisierte Privacy Impact Notifications</li>
                        <li>• Service-Update Transparency Reports</li>
                        <li>• Monthly Data Processing Summaries</li>
                        <li>• Breach Prevention Communication</li>
                        <li>• Regulatory Change Updates</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-400 mb-3">Self-Service Transparency:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• API-basierte Privacy-Queries</li>
                        <li>• Real-time Data Location Tracking</li>
                        <li>• Self-Service Compliance Reporting</li>
                        <li>• Interactive Privacy Policy Builder</li>
                        <li>• Audit Trail Self-Service Access</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Data Subject Rights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="data-subject-rights"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Users className="h-6 w-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Betroffenenrechte</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    ISO 27018 verpflichtet CSPs, umfassende technische und organisatorische Maßnahmen 
                    zur Unterstützung der Betroffenenrechte zu implementieren. Dies umfasst sowohl 
                    automatisierte Self-Service-Funktionen als auch strukturierte Prozesse für komplexe Anfragen.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Scale className="h-5 w-5 text-green-400" />
                        Kernrechte nach ISO 27018
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Recht auf Auskunft</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            Vollständige Informationen über gespeicherte PII, Verarbeitungszwecke und Empfänger.
                          </p>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Automatisierte Datenexporte</li>
                            <li>• Structured Data Formats (JSON, XML)</li>
                            <li>• &lt; 30 Tage Bearbeitungszeit</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">Recht auf Berichtigung</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            Korrektur unrichtiger oder unvollständiger personenbezogener Daten.
                          </p>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Self-Service Korrektur-Interfaces</li>
                            <li>• Automated Data Validation</li>
                            <li>• &lt; 72 Stunden Umsetzung</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                          <h4 className="font-medium text-red-400 mb-2">Recht auf Löschung</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            Vollständige und nachweisbare Entfernung von PII aus allen Systemen.
                          </p>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Cryptographic Erasure</li>
                            <li>• Multi-System Deletion Orchestration</li>
                            <li>• Deletion Verification Certificates</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 className="font-medium text-purple-400 mb-2">Recht auf Datenportabilität</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            Strukturierte Übertragung von PII an andere Service Provider.
                          </p>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Standardisierte Export-Formate</li>
                            <li>• API-to-API Direct Transfer</li>
                            <li>• Data Integrity Verification</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Settings className="h-5 w-5 text-blue-400" />
                        Technische Implementierung
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-indigo-900/20 border border-indigo-700/50 rounded-lg">
                          <h4 className="font-medium text-indigo-400 mb-2">Data Subject Request Platform</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Multi-Channel Request Interfaces</li>
                            <li>• Identity Verification Systems</li>
                            <li>• Automated Request Routing</li>
                            <li>• Progress Tracking Dashboards</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-teal-900/20 border border-teal-700/50 rounded-lg">
                          <h4 className="font-medium text-teal-400 mb-2">Privacy Rights Management</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Centralized Rights Database</li>
                            <li>• Cross-System Data Discovery</li>
                            <li>• Automated Impact Assessment</li>
                            <li>• Legal Basis Validation</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-orange-900/20 border border-orange-700/50 rounded-lg">
                          <h4 className="font-medium text-orange-400 mb-2">Process Automation</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Machine Learning Request Classification</li>
                            <li>• Workflow-based Processing</li>
                            <li>• SLA Monitoring und Alerting</li>
                            <li>• Quality Assurance Checks</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Rechte-Erfüllungsprozess</h3>
                  <div className="space-y-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Upload className="h-6 w-6 text-blue-400" />
                          </div>
                          <h4 className="font-medium text-white mb-2">1. Eingang</h4>
                          <p className="text-gray-300 text-xs">
                            Automatische Erfassung und Kategorisierung der Anfrage
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <UserCheck className="h-6 w-6 text-green-400" />
                          </div>
                          <h4 className="font-medium text-white mb-2">2. Verifikation</h4>
                          <p className="text-gray-300 text-xs">
                            Multi-Faktor Identitätsprüfung des Antragstellers
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Search className="h-6 w-6 text-purple-400" />
                          </div>
                          <h4 className="font-medium text-white mb-2">3. Discovery</h4>
                          <p className="text-gray-300 text-xs">
                            Systemweite Suche nach relevanten Daten
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <Settings className="h-6 w-6 text-yellow-400" />
                          </div>
                          <h4 className="font-medium text-white mb-2">4. Verarbeitung</h4>
                          <p className="text-gray-300 text-xs">
                            Automatisierte oder manuelle Ausführung der Anfrage
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                            <CheckCircle className="h-6 w-6 text-red-400" />
                          </div>
                          <h4 className="font-medium text-white mb-2">5. Abschluss</h4>
                          <p className="text-gray-300 text-xs">
                            Benachrichtigung und Dokumentation der Erledigung
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Clock className="h-5 w-5 text-blue-400" />
                          Service Level Agreements
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-3 bg-blue-900/20 rounded-lg">
                            <span className="text-gray-300 text-sm">Auskunftserteilung</span>
                            <Badge className="bg-blue-600/20 text-blue-400">30 Tage</Badge>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-green-900/20 rounded-lg">
                            <span className="text-gray-300 text-sm">Datenberichtigung</span>
                            <Badge className="bg-green-600/20 text-green-400">72 Stunden</Badge>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-red-900/20 rounded-lg">
                            <span className="text-gray-300 text-sm">Datenlöschung</span>
                            <Badge className="bg-red-600/20 text-red-400">7 Tage</Badge>
                          </div>
                          <div className="flex justify-between items-center p-3 bg-purple-900/20 rounded-lg">
                            <span className="text-gray-300 text-sm">Datenportabilität</span>
                            <Badge className="bg-purple-600/20 text-purple-400">14 Tage</Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-green-400" />
                          Qualitätssicherung
                        </h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <span>4-Augen-Prinzip bei sensiblen Anfragen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                            <span>Automated Completeness Verification</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                            <span>Customer Satisfaction Tracking</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <span>Regulatory Compliance Audits</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-emerald-900/20 rounded-lg border border-green-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-emerald-400" />
                    Advanced Privacy Rights Features
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-emerald-400 mb-3">AI-Powered Processing:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Natural Language Request Processing</li>
                        <li>• Intelligent Data Discovery</li>
                        <li>• Automated Legal Basis Assessment</li>
                        <li>• Predictive SLA Management</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-400 mb-3">Blockchain Integration:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Immutable Audit Trails</li>
                        <li>• Cryptographic Request Verification</li>
                        <li>• Decentralized Identity Verification</li>
                        <li>• Smart Contract Enforcement</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-purple-400 mb-3">Real-time Capabilities:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Live Data Processing Visualization</li>
                        <li>• Instant Consent Revocation</li>
                        <li>• Real-time Data Portability</li>
                        <li>• Dynamic Privacy Preferences</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cross-Border Transfer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="cross-border"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-600/20 rounded-lg">
                    <Globe className="h-6 w-6 text-orange-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Grenzüberschreitende Übertragung</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    ISO 27018 adressiert die komplexen rechtlichen und technischen Herausforderungen bei 
                    grenzüberschreitenden Datenübertragungen in Cloud-Umgebungen. CSPs müssen robuste 
                    Mechanismen implementieren, um verschiedene Datenschutzgesetze zu harmonisieren.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Scale className="h-5 w-5 text-orange-400" />
                        Rechtliche Transfermechanismen
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">Angemessenheitsbeschluss</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            Automatische Transfers in Länder mit anerkannt adäquatem Datenschutzniveau.
                          </p>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Dynamische Jurisdictional Mapping</li>
                            <li>• Automated Adequacy Decision Updates</li>
                            <li>• Real-time Compliance Monitoring</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Standardvertragsklauseln</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            EU-Kommission SCCs für Transfers in Drittländer ohne Angemessenheitsbeschluss.
                          </p>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Automated SCC Generation</li>
                            <li>• Multi-party Agreement Management</li>
                            <li>• Transfer Impact Assessments</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 className="font-medium text-purple-400 mb-2">Binding Corporate Rules</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            Interne Datenschutzregeln für konzerninterne Datenübertragungen.
                          </p>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Global Privacy Policy Frameworks</li>
                            <li>• Intra-group Transfer Automation</li>
                            <li>• Centralized BCR Compliance</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                          <h4 className="font-medium text-yellow-400 mb-2">Zusätzliche Schutzmaßnahmen</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            Technische und organisatorische Maßnahmen bei unzureichendem lokalen Schutz.
                          </p>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• End-to-End Encryption</li>
                            <li>• Data Localization Options</li>
                            <li>• Government Access Transparency</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Network className="h-5 w-5 text-blue-400" />
                        Technische Implementierung
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-indigo-900/20 border border-indigo-700/50 rounded-lg">
                          <h4 className="font-medium text-indigo-400 mb-2">Geolocation Engine</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Real-time Data Location Tracking</li>
                            <li>• Multi-region Compliance Routing</li>
                            <li>• Automated Jurisdiction Detection</li>
                            <li>• Cross-border Impact Assessment</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-teal-900/20 border border-teal-700/50 rounded-lg">
                          <h4 className="font-medium text-teal-400 mb-2">Policy Enforcement Engine</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Dynamic Transfer Rules</li>
                            <li>• Automated Compliance Checks</li>
                            <li>• Exception Handling Workflows</li>
                            <li>• Audit Trail Generation</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-orange-900/20 border border-orange-700/50 rounded-lg">
                          <h4 className="font-medium text-orange-400 mb-2">Encryption Gateway</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Border-Crossing Encryption</li>
                            <li>• Key Escrow Management</li>
                            <li>• Jurisdiction-specific Algorithms</li>
                            <li>• Quantum-safe Preparations</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Transfer Impact Assessment Framework</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="h-6 w-6 text-red-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">1. Risikobewertung</h4>
                      <p className="text-gray-300 text-sm">
                        Systematische Analyse von Datenschutzrisiken im Zielland
                      </p>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Settings className="h-6 w-6 text-yellow-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">2. Schutzmaßnahmen</h4>
                      <p className="text-gray-300 text-sm">
                        Definition zusätzlicher technischer und organisatorischer Maßnahmen
                      </p>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">3. Wirksamkeitstest</h4>
                      <p className="text-gray-300 text-sm">
                        Kontinuierliche Überprüfung der Schutzmaßnahmen-Effektivität
                      </p>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">4. Dokumentation</h4>
                      <p className="text-gray-300 text-sm">
                        Vollständige Dokumentation für Aufsichtsbehörden
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg border border-orange-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Globe className="h-5 w-5 text-orange-400" />
                    Emerging Challenges und Future-Proofing
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-400 mb-3">Regulatory Fragmentation:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Multi-jurisdictional Compliance Engines</li>
                        <li>• Dynamic Regulatory Change Management</li>
                        <li>• Automated Legal Basis Adaptation</li>
                        <li>• Cross-border Incident Coordination</li>
                        <li>• Sovereignty-aware Data Residency</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-red-400 mb-3">Technical Innovation:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Zero-Knowledge Transfer Protocols</li>
                        <li>• Homomorphic Encryption für Processing</li>
                        <li>• Federated Learning Architectures</li>
                        <li>• Quantum-safe Cryptographic Transitions</li>
                        <li>• Decentralized Identity Verification</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Subprocessing Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="subprocessing"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Share2 className="h-6 w-6 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Unterauftragsverarbeitung</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    ISO 27018 definiert strenge Kontrollen für die Einbindung von Subprozessoren in die 
                    PII-Verarbeitung. CSPs müssen umfassende Due Diligence, Vertragsmanagement und 
                    kontinuierliche Überwachung ihrer gesamten Supply Chain implementieren.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Shield className="h-5 w-5 text-purple-400" />
                        Subprozessor-Governance
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Due Diligence:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Umfassende Sicherheits- und Datenschutzbewertung vor Beauftragung, 
                              einschließlich Zertifizierungs- und Audit-Nachweise.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Vertragsgestaltung:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Bindende Datenschutzvereinbarungen mit denselben Schutzstandards 
                              wie der Hauptvertrag mit dem Controller.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Genehmigungsverfahren:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Strukturierte Prozesse für die Einholung von Controller-Genehmigungen 
                              bei neuen oder geänderten Subprozessor-Beziehungen.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Kontinuierliche Überwachung:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Regelmäßige Compliance-Assessments und Performance-Monitoring 
                              aller aktiven Subprozessor-Beziehungen.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Network className="h-5 w-5 text-blue-400" />
                        Supply Chain Management
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Vendor Management Platform</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Centralized Subprozessor Database</li>
                            <li>• Automated Compliance Tracking</li>
                            <li>• Contract Lifecycle Management</li>
                            <li>• Risk Scoring und Monitoring</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">Data Flow Mapping</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• End-to-End PII Flow Visualization</li>
                            <li>• Multi-tier Subprozessor Tracking</li>
                            <li>• Cross-border Transfer Mapping</li>
                            <li>• Purpose Limitation Enforcement</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 className="font-medium text-purple-400 mb-2">Compliance Automation</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Automated SLA Monitoring</li>
                            <li>• Compliance Dashboard Integration</li>
                            <li>• Exception Alerting Systems</li>
                            <li>• Regulatory Change Propagation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Subprozessor-Lebenszyklus</h3>
                  <div className="space-y-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                        <div className="text-center">
                          <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Search className="h-5 w-5 text-blue-400" />
                          </div>
                          <h4 className="font-medium text-white text-sm mb-1">Identifikation</h4>
                          <p className="text-gray-300 text-xs">
                            Vendor Discovery und Initial Assessment
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <FileText className="h-5 w-5 text-green-400" />
                          </div>
                          <h4 className="font-medium text-white text-sm mb-1">Bewertung</h4>
                          <p className="text-gray-300 text-xs">
                            Security & Privacy Due Diligence
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Gavel className="h-5 w-5 text-purple-400" />
                          </div>
                          <h4 className="font-medium text-white text-sm mb-1">Vertragsschluss</h4>
                          <p className="text-gray-300 text-xs">
                            DPA Negotiation & Execution
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-10 h-10 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <CheckCircle className="h-5 w-5 text-yellow-400" />
                          </div>
                          <h4 className="font-medium text-white text-sm mb-1">Genehmigung</h4>
                          <p className="text-gray-300 text-xs">
                            Controller Approval Process
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Activity className="h-5 w-5 text-orange-400" />
                          </div>
                          <h4 className="font-medium text-white text-sm mb-1">Betrieb</h4>
                          <p className="text-gray-300 text-xs">
                            Ongoing Monitoring & Management
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <X className="h-5 w-5 text-red-400" />
                          </div>
                          <h4 className="font-medium text-white text-sm mb-1">Beendigung</h4>
                          <p className="text-gray-300 text-xs">
                            Secure Data Return/Deletion
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-yellow-400" />
                          Risikomanagement
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-red-900/20 border border-red-700/50 rounded-lg">
                            <h5 className="font-medium text-red-400 text-sm mb-1">Hochrisiko-Faktoren</h5>
                            <ul className="text-gray-300 text-xs space-y-1">
                              <li>• Zugriff auf hochsensible PII</li>
                              <li>• Operations in Drittländern</li>
                              <li>• Neue oder ungetestete Anbieter</li>
                            </ul>
                          </div>
                          
                          <div className="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                            <h5 className="font-medium text-yellow-400 text-sm mb-1">Mittelrisiko-Faktoren</h5>
                            <ul className="text-gray-300 text-xs space-y-1">
                              <li>• Limitierter PII-Zugang</li>
                              <li>• Etablierte Compliance-History</li>
                              <li>• Standard-Zertifizierungen</li>
                            </ul>
                          </div>
                          
                          <div className="p-3 bg-green-900/20 border border-green-700/50 rounded-lg">
                            <h5 className="font-medium text-green-400 text-sm mb-1">Niedrigrisiko-Faktoren</h5>
                            <ul className="text-gray-300 text-xs space-y-1">
                              <li>• Kein direkter PII-Zugang</li>
                              <li>• Premium-Zertifizierungen</li>
                              <li>• Langfristige Partnerschaft</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Settings className="h-5 w-5 text-blue-400" />
                          Monitoring & KPIs
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-2 bg-blue-900/20 rounded">
                            <span className="text-gray-300 text-sm">SLA Compliance Rate</span>
                            <span className="text-blue-400 font-medium">99.8%</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-green-900/20 rounded">
                            <span className="text-gray-300 text-sm">Security Audit Score</span>
                            <span className="text-green-400 font-medium">A+</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-purple-900/20 rounded">
                            <span className="text-gray-300 text-sm">Contract Renewal Rate</span>
                            <span className="text-purple-400 font-medium">95%</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-900/20 rounded">
                            <span className="text-gray-300 text-sm">Incident Response Time</span>
                            <span className="text-yellow-400 font-medium">&lt; 2h</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-lg border border-purple-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-indigo-400" />
                    Advanced Subprozessor Management
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-indigo-400 mb-3">AI-Driven Insights:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Predictive Risk Assessment</li>
                        <li>• Automated Vendor Scoring</li>
                        <li>• Contract Optimization Recommendations</li>
                        <li>• Supply Chain Vulnerability Detection</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-purple-400 mb-3">Blockchain Integration:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Immutable Vendor Compliance Records</li>
                        <li>• Smart Contract Automation</li>
                        <li>• Decentralized Reputation Systems</li>
                        <li>• Cross-industry Vendor Sharing</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-400 mb-3">Zero Trust Architecture:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Continuous Vendor Verification</li>
                        <li>• Dynamic Access Controls</li>
                        <li>• Real-time Behavior Monitoring</li>
                        <li>• Automatic Incident Isolation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Incident Notification Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="incident-notification"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-600/20 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Incident Notification</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    ISO 27018 verlangt von CSPs die Implementierung robuster Incident Response-Mechanismen 
                    mit speziellem Fokus auf Privacy-Incidents. Dies umfasst sowohl technische 
                    Erkennungssysteme als auch strukturierte Kommunikationsprozesse.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-red-400" />
                        Privacy Incident Kategorien
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                          <h4 className="font-medium text-red-400 mb-2">Datenschutzverletzung</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            Unbefugter Zugriff, Offenlegung oder Verlust von personenbezogenen Daten.
                          </p>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Notification innerhalb 72 Stunden</li>
                            <li>• Betroffene Information bei hohem Risiko</li>
                            <li>• Umfassende Incident Documentation</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-orange-900/20 border border-orange-700/50 rounded-lg">
                          <h4 className="font-medium text-orange-400 mb-2">System Kompromittierung</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            Sicherheitsincidents mit potenziellem PII-Impact in Cloud-Infrastrukturen.
                          </p>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Sofortige Controller-Benachrichtigung</li>
                            <li>• Automated Impact Assessment</li>
                            <li>• Coordinated Response Planning</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                          <h4 className="font-medium text-yellow-400 mb-2">Compliance Violation</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            Verstöße gegen Datenschutzrichtlinien oder vertragliche Vereinbarungen.
                          </p>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Root Cause Analysis</li>
                            <li>• Corrective Action Implementation</li>
                            <li>• Process Improvement Documentation</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Service Disruption</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            Verfügbarkeitsincidents mit Auswirkungen auf PII-Verarbeitungssysteme.
                          </p>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Business Continuity Activation</li>
                            <li>• Alternative Processing Arrangements</li>
                            <li>• Recovery Time Communication</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Activity className="h-5 w-5 text-blue-400" />
                        Incident Response Architecture
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-indigo-900/20 border border-indigo-700/50 rounded-lg">
                          <h4 className="font-medium text-indigo-400 mb-2">Detection Systems</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• AI-powered Anomaly Detection</li>
                            <li>• Real-time PII Access Monitoring</li>
                            <li>• Behavioral Analytics Engine</li>
                            <li>• Multi-source Threat Intelligence</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-teal-900/20 border border-teal-700/50 rounded-lg">
                          <h4 className="font-medium text-teal-400 mb-2">Automated Response</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Immediate Containment Actions</li>
                            <li>• Automated Stakeholder Notification</li>
                            <li>• Evidence Collection Orchestration</li>
                            <li>• Recovery Process Initiation</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-emerald-900/20 border border-emerald-700/50 rounded-lg">
                          <h4 className="font-medium text-emerald-400 mb-2">Communication Hub</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Multi-channel Notification System</li>
                            <li>• Regulatory Authority Interfaces</li>
                            <li>• Customer Communication Portals</li>
                            <li>• Media Relations Coordination</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Incident Response Workflow</h3>
                  <div className="space-y-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertTriangle className="h-6 w-6 text-red-400" />
                          </div>
                          <h4 className="font-medium text-white mb-2">1. Detection</h4>
                          <p className="text-gray-300 text-sm">
                            Automatische Erkennung und Klassifizierung von Privacy-Incidents
                          </p>
                          <Badge className="bg-red-900/20 text-red-400 text-xs mt-2">&lt; 15 min</Badge>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-12 h-12 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Shield className="h-6 w-6 text-orange-400" />
                          </div>
                          <h4 className="font-medium text-white mb-2">2. Containment</h4>
                          <p className="text-gray-300 text-sm">
                            Sofortige Schutzmaßnahmen zur Schadensbegrenzung
                          </p>
                          <Badge className="bg-orange-900/20 text-orange-400 text-xs mt-2">&lt; 1 hour</Badge>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Bell className="h-6 w-6 text-blue-400" />
                          </div>
                          <h4 className="font-medium text-white mb-2">3. Notification</h4>
                          <p className="text-gray-300 text-sm">
                            Strukturierte Benachrichtigung aller relevanten Stakeholder
                          </p>
                          <Badge className="bg-blue-900/20 text-blue-400 text-xs mt-2">&lt; 72 hours</Badge>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Settings className="h-6 w-6 text-green-400" />
                          </div>
                          <h4 className="font-medium text-white mb-2">4. Recovery</h4>
                          <p className="text-gray-300 text-sm">
                            Wiederherstellung normaler Betriebszustände
                          </p>
                          <Badge className="bg-green-900/20 text-green-400 text-xs mt-2">Variable</Badge>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FileText className="h-6 w-6 text-purple-400" />
                          </div>
                          <h4 className="font-medium text-white mb-2">5. Lessons Learned</h4>
                          <p className="text-gray-300 text-sm">
                            Post-Incident-Analyse und Prozessverbesserungen
                          </p>
                          <Badge className="bg-purple-900/20 text-purple-400 text-xs mt-2">30 days</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Users className="h-5 w-5 text-green-400" />
                          Stakeholder Matrix
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                            <h5 className="font-medium text-blue-400 text-sm mb-1">Internal Teams</h5>
                            <p className="text-gray-300 text-xs">
                              Security Operations, Legal, Customer Support, Executive Management
                            </p>
                          </div>
                          
                          <div className="p-3 bg-green-900/20 border border-green-700/50 rounded-lg">
                            <h5 className="font-medium text-green-400 text-sm mb-1">Customers (Controllers)</h5>
                            <p className="text-gray-300 text-xs">
                              Primary contacts, DPOs, Technical teams, Legal departments
                            </p>
                          </div>
                          
                          <div className="p-3 bg-red-900/20 border border-red-700/50 rounded-lg">
                            <h5 className="font-medium text-red-400 text-sm mb-1">Regulatory Bodies</h5>
                            <p className="text-gray-300 text-xs">
                              Data Protection Authorities, Sector-specific regulators
                            </p>
                          </div>
                          
                          <div className="p-3 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                            <h5 className="font-medium text-purple-400 text-sm mb-1">Data Subjects</h5>
                            <p className="text-gray-300 text-xs">
                              Betroffene Personen bei high-risk Incidents
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <BarChart3 className="h-5 w-5 text-blue-400" />
                          Incident Metrics
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-2 bg-green-900/20 rounded">
                            <span className="text-gray-300 text-sm">Mean Time to Detection</span>
                            <span className="text-green-400 font-medium">8.5 min</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-blue-900/20 rounded">
                            <span className="text-gray-300 text-sm">Mean Time to Containment</span>
                            <span className="text-blue-400 font-medium">42 min</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-orange-900/20 rounded">
                            <span className="text-gray-300 text-sm">Mean Time to Notification</span>
                            <span className="text-orange-400 font-medium">4.2 hours</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-purple-900/20 rounded">
                            <span className="text-gray-300 text-sm">False Positive Rate</span>
                            <span className="text-purple-400 font-medium">2.3%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg border border-red-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-orange-400" />
                    Next-Generation Incident Response
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-400 mb-3">AI-Enhanced Detection:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Predictive Incident Modeling</li>
                        <li>• Natural Language Processing für Logs</li>
                        <li>• Cross-correlation Attack Pattern Recognition</li>
                        <li>• Automated Threat Hunting</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-red-400 mb-3">Orchestrated Response:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• SOAR Integration für Automation</li>
                        <li>• Dynamic Playbook Execution</li>
                        <li>• Cross-platform Response Coordination</li>
                        <li>• Intelligent Escalation Management</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-yellow-400 mb-3">Continuous Learning:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Machine Learning Feedback Loops</li>
                        <li>• Industry Threat Intelligence Sharing</li>
                        <li>• Behavioral Pattern Evolution</li>
                        <li>• Adaptive Response Strategies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Audit & Compliance Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="audit-compliance"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Search className="h-6 w-6 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Audit & Compliance</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    ISO 27018 verlangt regelmäßige und umfassende Audit-Aktivitäten zur Sicherstellung 
                    der kontinuierlichen Compliance. CSPs müssen sowohl interne als auch externe 
                    Prüfungsverfahren implementieren und eine lückenlose Nachweisführung gewährleisten.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-blue-400" />
                        Audit-Framework
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Kontinuierliche Überwachung:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Automatisierte Compliance-Monitoring-Systeme mit Real-time-Dashboards 
                              und proaktiven Alerting-Mechanismen.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Risiko-basierte Audits:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Fokussierte Prüfungen basierend auf Risikobewertungen, 
                              Incident-Historie und regulatorischen Änderungen.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Multi-Stakeholder-Ansatz:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Koordinierte Audits mit internen Teams, externen Prüfern 
                              und Aufsichtsbehörden für ganzheitliche Bewertungen.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Evidence-based Reporting:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Automatisierte Evidenz-Sammlung und -Aufbereitung 
                              für regulatorische und Compliance-Berichte.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Settings className="h-5 w-5 text-green-400" />
                        Compliance Management System
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Policy Engine</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Automated Policy Distribution</li>
                            <li>• Version Control und Change Management</li>
                            <li>• Compliance Rule Engine</li>
                            <li>• Exception Management Workflows</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">Control Assessment Platform</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Automated Control Testing</li>
                            <li>• Evidence Collection Automation</li>
                            <li>• Risk und Control Maturity Scoring</li>
                            <li>• Remediation Tracking</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 className="font-medium text-purple-400 mb-2">Reporting & Analytics</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Executive Compliance Dashboards</li>
                            <li>• Regulatory Report Generation</li>
                            <li>• Trend Analysis und Predictions</li>
                            <li>• Benchmark und Industry Comparisons</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Audit-Lifecycle Management</h3>
                  <div className="space-y-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                        <div className="text-center">
                          <div className="w-10 h-10 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Calendar className="h-5 w-5 text-blue-400" />
                          </div>
                          <h4 className="font-medium text-white text-sm mb-1">Planung</h4>
                          <p className="text-gray-300 text-xs">
                            Risk Assessment & Scope Definition
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-10 h-10 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <FileText className="h-5 w-5 text-green-400" />
                          </div>
                          <h4 className="font-medium text-white text-sm mb-1">Vorbereitung</h4>
                          <p className="text-gray-300 text-xs">
                            Evidence Collection & Documentation
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Search className="h-5 w-5 text-purple-400" />
                          </div>
                          <h4 className="font-medium text-white text-sm mb-1">Durchführung</h4>
                          <p className="text-gray-300 text-xs">
                            Control Testing & Assessment
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-10 h-10 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <AlertTriangle className="h-5 w-5 text-yellow-400" />
                          </div>
                          <h4 className="font-medium text-white text-sm mb-1">Bewertung</h4>
                          <p className="text-gray-300 text-xs">
                            Finding Analysis & Risk Rating
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-10 h-10 bg-orange-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <Settings className="h-5 w-5 text-orange-400" />
                          </div>
                          <h4 className="font-medium text-white text-sm mb-1">Remediation</h4>
                          <p className="text-gray-300 text-xs">
                            Corrective Action Implementation
                          </p>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-10 h-10 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-2">
                            <CheckCircle className="h-5 w-5 text-red-400" />
                          </div>
                          <h4 className="font-medium text-white text-sm mb-1">Follow-up</h4>
                          <p className="text-gray-300 text-xs">
                            Verification & Closure
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <BarChart3 className="h-5 w-5 text-blue-400" />
                          Compliance KPIs
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-2 bg-green-900/20 rounded">
                            <span className="text-gray-300 text-sm">Control Effectiveness</span>
                            <span className="text-green-400 font-medium">96.8%</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-blue-900/20 rounded">
                            <span className="text-gray-300 text-sm">Audit Coverage</span>
                            <span className="text-blue-400 font-medium">100%</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-purple-900/20 rounded">
                            <span className="text-gray-300 text-sm">Finding Closure Rate</span>
                            <span className="text-purple-400 font-medium">94.2%</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-900/20 rounded">
                            <span className="text-gray-300 text-sm">Time to Remediation</span>
                            <span className="text-yellow-400 font-medium">12 days</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Users className="h-5 w-5 text-green-400" />
                          Audit Teams
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                            <h5 className="font-medium text-blue-400 text-sm mb-1">Internal Audit</h5>
                            <p className="text-gray-300 text-xs">
                              Privacy Officers, Security Teams, Compliance Specialists
                            </p>
                          </div>
                          
                          <div className="p-3 bg-green-900/20 border border-green-700/50 rounded-lg">
                            <h5 className="font-medium text-green-400 text-sm mb-1">External Auditors</h5>
                            <p className="text-gray-300 text-xs">
                              Certified Public Accountants, ISO 27018 Specialists
                            </p>
                          </div>
                          
                          <div className="p-3 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                            <h5 className="font-medium text-purple-400 text-sm mb-1">Subject Matter Experts</h5>
                            <p className="text-gray-300 text-xs">
                              Legal Counsel, Technical Architects, Business Analysts
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Clock className="h-5 w-5 text-purple-400" />
                          Audit Schedule
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-red-900/20 border border-red-700/50 rounded-lg">
                            <h5 className="font-medium text-red-400 text-sm mb-1">Jährlich</h5>
                            <p className="text-gray-300 text-xs">
                              Comprehensive ISO 27018 Certification Audit
                            </p>
                          </div>
                          
                          <div className="p-3 bg-orange-900/20 border border-orange-700/50 rounded-lg">
                            <h5 className="font-medium text-orange-400 text-sm mb-1">Halbjährlich</h5>
                            <p className="text-gray-300 text-xs">
                              Privacy Controls Assessment & Risk Review
                            </p>
                          </div>
                          
                          <div className="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                            <h5 className="font-medium text-yellow-400 text-sm mb-1">Quartalsweise</h5>
                            <p className="text-gray-300 text-xs">
                              Process Audits & Compliance Validation
                            </p>
                          </div>
                          
                          <div className="p-3 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                            <h5 className="font-medium text-blue-400 text-sm mb-1">Kontinuierlich</h5>
                            <p className="text-gray-300 text-xs">
                              Automated Monitoring & Real-time Assessment
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-lg border border-blue-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-indigo-400" />
                    Advanced Audit Technologies
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-indigo-400 mb-3">AI-Powered Analytics:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Automated Anomaly Detection in Controls</li>
                        <li>• Natural Language Processing für Evidence</li>
                        <li>• Predictive Risk Modeling</li>
                        <li>• Intelligent Finding Correlation</li>
                        <li>• Machine Learning Control Optimization</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-400 mb-3">Continuous Auditing:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Real-time Control Monitoring</li>
                        <li>• Automated Testing Frameworks</li>
                        <li>• Event-driven Audit Triggers</li>
                        <li>• Dynamic Risk Assessment Updates</li>
                        <li>• Instantaneous Compliance Reporting</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-purple-400 mb-3">Blockchain Audit Trails:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Immutable Evidence Repository</li>
                        <li>• Cryptographic Audit Chain</li>
                        <li>• Decentralized Compliance Verification</li>
                        <li>• Smart Contract Audit Automation</li>
                        <li>• Cross-organizational Audit Sharing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Technical Measures Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="technical-measures"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Shield className="h-6 w-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Technische Maßnahmen</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    ISO 27018 definiert umfassende technische Schutzmaßnahmen für PII in Cloud-Umgebungen. 
                    CSPs müssen moderne Verschlüsselungs-, Zugriffskontroll- und Monitoring-Technologien 
                    implementieren, um höchste Sicherheitsstandards zu gewährleisten.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Lock className="h-5 w-5 text-green-400" />
                        Cryptographic Protection
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">Encryption at Rest</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            AES-256 Verschlüsselung für alle gespeicherten PII mit Hardware Security Modules.
                          </p>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Database-level Encryption (TDE)</li>
                            <li>• File System Encryption (LUKS/BitLocker)</li>
                            <li>• Application-level Field Encryption</li>
                            <li>• HSM-based Key Management</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Encryption in Transit</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            TLS 1.3+ für alle Datenübertragungen mit Perfect Forward Secrecy.
                          </p>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• API Gateway TLS Termination</li>
                            <li>• Inter-Service mTLS Communication</li>
                            <li>• VPN-encrypted Admin Access</li>
                            <li>• Certificate Pinning für Mobile Apps</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 className="font-medium text-purple-400 mb-2">Encryption in Use</h4>
                          <p className="text-gray-300 text-sm mb-2">
                            Confidential Computing für PII-Verarbeitung in verschlüsselten Enclaves.
                          </p>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Intel SGX Secure Enclaves</li>
                            <li>• AMD SEV Memory Protection</li>
                            <li>• Homomorphic Encryption für Analytics</li>
                            <li>• Secure Multi-party Computation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <UserCheck className="h-5 w-5 text-blue-400" />
                        Access Control Systems
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-indigo-900/20 border border-indigo-700/50 rounded-lg">
                          <h4 className="font-medium text-indigo-400 mb-2">Zero Trust Architecture</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Identity-centric Security Model</li>
                            <li>• Continuous Verification Principles</li>
                            <li>• Least Privilege Access Enforcement</li>
                            <li>• Micro-segmentation Implementation</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-teal-900/20 border border-teal-700/50 rounded-lg">
                          <h4 className="font-medium text-teal-400 mb-2">Multi-Factor Authentication</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Hardware Security Keys (FIDO2)</li>
                            <li>• Biometric Authentication</li>
                            <li>• Risk-based Adaptive MFA</li>
                            <li>• Certificate-based Authentication</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-orange-900/20 border border-orange-700/50 rounded-lg">
                          <h4 className="font-medium text-orange-400 mb-2">Privileged Access Management</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Just-in-Time Access Provisioning</li>
                            <li>• Session Recording und Monitoring</li>
                            <li>• Automated Access Reviews</li>
                            <li>• Break-glass Emergency Procedures</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Advanced Security Technologies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Activity className="h-6 w-6 text-red-400" />
                      </div>
                      <h4 className="font-medium text-white mb-3 text-center">Behavioral Analytics</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• User Entity Behavior Analytics (UEBA)</li>
                        <li>• Anomaly Detection Algorithms</li>
                        <li>• Risk Scoring Models</li>
                        <li>• Automated Threat Response</li>
                        <li>• Machine Learning Baselines</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Database className="h-6 w-6 text-yellow-400" />
                      </div>
                      <h4 className="font-medium text-white mb-3 text-center">Data Loss Prevention</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Content-aware DLP Policies</li>
                        <li>• Endpoint Protection Agents</li>
                        <li>• Network Traffic Analysis</li>
                        <li>• Cloud App Security Brokers</li>
                        <li>• Optical Character Recognition</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Network className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="font-medium text-white mb-3 text-center">Network Security</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Software-Defined Perimeters</li>
                        <li>• Next-Generation Firewalls</li>
                        <li>• Intrusion Detection Systems</li>
                        <li>• DNS Security und Filtering</li>
                        <li>• DDoS Protection Services</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Privacy-Enhancing Technologies</h3>
                  <div className="space-y-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Brain className="h-5 w-5 text-purple-400" />
                        Differential Privacy Implementation
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-purple-400 mb-3">Core Principles:</h5>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Mathematical Privacy Guarantees</li>
                            <li>• Noise Injection Algorithms</li>
                            <li>• Privacy Budget Management</li>
                            <li>• Composition Theorem Application</li>
                            <li>• Query Sensitivity Analysis</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-blue-400 mb-3">Implementation:</h5>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Laplace Mechanism für Numeric Queries</li>
                            <li>• Exponential Mechanism für Non-numeric</li>
                            <li>• Local vs. Global Privacy Models</li>
                            <li>• Privacy Accounting Frameworks</li>
                            <li>• Real-time Privacy Loss Monitoring</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Code className="h-5 w-5 text-green-400" />
                        Anonymization & Pseudonymization
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-medium text-green-400 mb-3">K-Anonymity:</h5>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Generalization Techniques</li>
                            <li>• Suppression Strategies</li>
                            <li>• Optimal K-value Selection</li>
                            <li>• Quality Metrics Assessment</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-blue-400 mb-3">L-Diversity:</h5>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Sensitive Attribute Protection</li>
                            <li>• Diversity Constraints</li>
                            <li>• Entropy-based Measures</li>
                            <li>• Recursive Partitioning</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-yellow-400 mb-3">T-Closeness:</h5>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Distribution Similarity</li>
                            <li>• Earth Mover's Distance</li>
                            <li>• Hierarchical Distance Metrics</li>
                            <li>• Semantic Closeness Models</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-lg border border-green-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-teal-400" />
                    Emerging Technologies & Future Trends
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-teal-400 mb-3">Quantum-Safe Cryptography:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Post-Quantum Cryptographic Algorithms</li>
                        <li>• Lattice-based Encryption Schemes</li>
                        <li>• Hash-based Digital Signatures</li>
                        <li>• Code-based und Multivariate Systems</li>
                        <li>• Hybrid Classical-Quantum Approaches</li>
                        <li>• Crypto-Agility Implementation Strategies</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-green-400 mb-3">AI-Powered Privacy:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Federated Learning für Distributed AI</li>
                        <li>• Secure Aggregation Protocols</li>
                        <li>• Privacy-Preserving Machine Learning</li>
                        <li>• Synthetic Data Generation Models</li>
                        <li>• Automated Privacy Policy Generation</li>
                        <li>• Intelligent Consent Management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Privacy Risk Assessment Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="risk-assessment"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-600/20 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-orange-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Privacy Risk Assessment</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    ISO 27018 verlangt systematische und kontinuierliche Privacy Risk Assessments. 
                    CSPs müssen strukturierte Risikobewertungsverfahren implementieren, die sowohl 
                    technische als auch rechtliche Aspekte des PII-Schutzes berücksichtigen.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-orange-400" />
                        Risk Assessment Framework
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Data Flow Analysis:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Umfassende Kartierung aller PII-Datenströme mit 
                              Identifikation von Verarbeitungspunkten und Risikozonen.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Threat Modeling:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Systematische Identifikation von Privacy-Bedrohungen 
                              basierend auf STRIDE und PASTA-Methodologien.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Impact Assessment:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Bewertung potenzieller Auswirkungen auf Betroffene 
                              bei Datenschutzverletzungen oder Compliance-Verstößen.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Residual Risk Evaluation:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Kontinuierliche Bewertung verbleibender Risiken 
                              nach Implementierung von Schutzmaßnahmen.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Settings className="h-5 w-5 text-blue-400" />
                        Risk Management Platform
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Automated Risk Detection</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• ML-based Pattern Recognition</li>
                            <li>• Anomaly Detection Engines</li>
                            <li>• Continuous Monitoring Systems</li>
                            <li>• Real-time Risk Scoring</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">Risk Quantification</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Monte Carlo Simulations</li>
                            <li>• Value at Risk (VaR) Models</li>
                            <li>• Expected Loss Calculations</li>
                            <li>• ROI Analysis für Maßnahmen</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 className="font-medium text-purple-400 mb-2">Risk Treatment Planning</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Automated Mitigation Recommendations</li>
                            <li>• Cost-Benefit Analysis</li>
                            <li>• Implementation Roadmaps</li>
                            <li>• Treatment Effectiveness Tracking</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Risk Assessment Methodology</h3>
                  <div className="space-y-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5 text-red-400" />
                        Privacy Risk Matrix
                      </h4>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b border-slate-600">
                              <th className="text-left p-3 text-gray-300 font-medium">Impact Level</th>
                              <th className="text-center p-3 text-gray-300 font-medium">Niedrig (1)</th>
                              <th className="text-center p-3 text-gray-300 font-medium">Mittel (2)</th>
                              <th className="text-center p-3 text-gray-300 font-medium">Hoch (3)</th>
                              <th className="text-center p-3 text-gray-300 font-medium">Kritisch (4)</th>
                            </tr>
                          </thead>
                          <tbody className="text-sm">
                            <tr className="border-b border-slate-700">
                              <td className="p-3 font-medium text-white">Sehr hoch (4)</td>
                              <td className="p-3 text-center">
                                <Badge className="bg-yellow-900/20 text-yellow-400 border-yellow-700/50">Mittel</Badge>
                              </td>
                              <td className="p-3 text-center">
                                <Badge className="bg-orange-900/20 text-orange-400 border-orange-700/50">Hoch</Badge>
                              </td>
                              <td className="p-3 text-center">
                                <Badge className="bg-red-900/20 text-red-400 border-red-700/50">Kritisch</Badge>
                              </td>
                              <td className="p-3 text-center">
                                <Badge className="bg-red-900/20 text-red-400 border-red-700/50">Kritisch</Badge>
                              </td>
                            </tr>
                            <tr className="border-b border-slate-700">
                              <td className="p-3 font-medium text-white">Hoch (3)</td>
                              <td className="p-3 text-center">
                                <Badge className="bg-green-900/20 text-green-400 border-green-700/50">Niedrig</Badge>
                              </td>
                              <td className="p-3 text-center">
                                <Badge className="bg-yellow-900/20 text-yellow-400 border-yellow-700/50">Mittel</Badge>
                              </td>
                              <td className="p-3 text-center">
                                <Badge className="bg-orange-900/20 text-orange-400 border-orange-700/50">Hoch</Badge>
                              </td>
                              <td className="p-3 text-center">
                                <Badge className="bg-red-900/20 text-red-400 border-red-700/50">Kritisch</Badge>
                              </td>
                            </tr>
                            <tr className="border-b border-slate-700">
                              <td className="p-3 font-medium text-white">Mittel (2)</td>
                              <td className="p-3 text-center">
                                <Badge className="bg-green-900/20 text-green-400 border-green-700/50">Niedrig</Badge>
                              </td>
                              <td className="p-3 text-center">
                                <Badge className="bg-green-900/20 text-green-400 border-green-700/50">Niedrig</Badge>
                              </td>
                              <td className="p-3 text-center">
                                <Badge className="bg-yellow-900/20 text-yellow-400 border-yellow-700/50">Mittel</Badge>
                              </td>
                              <td className="p-3 text-center">
                                <Badge className="bg-orange-900/20 text-orange-400 border-orange-700/50">Hoch</Badge>
                              </td>
                            </tr>
                            <tr>
                              <td className="p-3 font-medium text-white">Niedrig (1)</td>
                              <td className="p-3 text-center">
                                <Badge className="bg-green-900/20 text-green-400 border-green-700/50">Niedrig</Badge>
                              </td>
                              <td className="p-3 text-center">
                                <Badge className="bg-green-900/20 text-green-400 border-green-700/50">Niedrig</Badge>
                              </td>
                              <td className="p-3 text-center">
                                <Badge className="bg-green-900/20 text-green-400 border-green-700/50">Niedrig</Badge>
                              </td>
                              <td className="p-3 text-center">
                                <Badge className="bg-yellow-900/20 text-yellow-400 border-yellow-700/50">Mittel</Badge>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Database className="h-5 w-5 text-blue-400" />
                          Datenklassifizierung
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-red-900/20 border border-red-700/50 rounded-lg">
                            <h5 className="font-medium text-red-400 text-sm mb-1">Besonders sensible PII</h5>
                            <p className="text-gray-300 text-xs">
                              Gesundheitsdaten, biometrische Daten, Finanzdaten
                            </p>
                          </div>
                          
                          <div className="p-3 bg-orange-900/20 border border-orange-700/50 rounded-lg">
                            <h5 className="font-medium text-orange-400 text-sm mb-1">Sensible PII</h5>
                            <p className="text-gray-300 text-xs">
                              Ausweisnummern, Kontaktdaten, Standortdaten
                            </p>
                          </div>
                          
                          <div className="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                            <h5 className="font-medium text-yellow-400 text-sm mb-1">Standard PII</h5>
                            <p className="text-gray-300 text-xs">
                              Namen, E-Mail-Adressen, Präferenzen
                            </p>
                          </div>
                          
                          <div className="p-3 bg-green-900/20 border border-green-700/50 rounded-lg">
                            <h5 className="font-medium text-green-400 text-sm mb-1">Pseudonyme Daten</h5>
                            <p className="text-gray-300 text-xs">
                              Anonymisierte oder pseudonymisierte Datensätze
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-yellow-400" />
                          Bedrohungsquellen
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-red-900/20 border border-red-700/50 rounded-lg">
                            <h5 className="font-medium text-red-400 text-sm mb-1">Externe Angreifer</h5>
                            <p className="text-gray-300 text-xs">
                              Cyberkriminelle, Nationalstaaten, Hacktivisten
                            </p>
                          </div>
                          
                          <div className="p-3 bg-orange-900/20 border border-orange-700/50 rounded-lg">
                            <h5 className="font-medium text-orange-400 text-sm mb-1">Insider Threats</h5>
                            <p className="text-gray-300 text-xs">
                              Böswillige oder nachlässige Mitarbeiter
                            </p>
                          </div>
                          
                          <div className="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                            <h5 className="font-medium text-yellow-400 text-sm mb-1">Systemfehler</h5>
                            <p className="text-gray-300 text-xs">
                              Software-Bugs, Konfigurationsfehler
                            </p>
                          </div>
                          
                          <div className="p-3 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                            <h5 className="font-medium text-blue-400 text-sm mb-1">Externe Faktoren</h5>
                            <p className="text-gray-300 text-xs">
                              Naturkatastrophen, Infrastrukturausfälle
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-green-400" />
                          Risikoindikatoren
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between items-center p-2 bg-green-900/20 rounded">
                            <span className="text-gray-300 text-sm">Privacy Score</span>
                            <span className="text-green-400 font-medium">94/100</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-blue-900/20 rounded">
                            <span className="text-gray-300 text-sm">Kontrollen-Abdeckung</span>
                            <span className="text-blue-400 font-medium">98.5%</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-purple-900/20 rounded">
                            <span className="text-gray-300 text-sm">Incident-Rate</span>
                            <span className="text-purple-400 font-medium">0.02%</span>
                          </div>
                          <div className="flex justify-between items-center p-2 bg-yellow-900/20 rounded">
                            <span className="text-gray-300 text-sm">Compliance-Level</span>
                            <span className="text-yellow-400 font-medium">96.8%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg border border-orange-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Brain className="h-5 w-5 text-red-400" />
                    AI-Enhanced Risk Assessment
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-red-400 mb-3">Predictive Analytics:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Machine Learning Risk Models</li>
                        <li>• Threat Intelligence Integration</li>
                        <li>• Behavioral Pattern Analysis</li>
                        <li>• Emerging Risk Identification</li>
                        <li>• Dynamic Risk Scoring Updates</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-orange-400 mb-3">Automated Assessment:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Real-time Risk Calculation</li>
                        <li>• Continuous Control Monitoring</li>
                        <li>• Automated Compliance Checking</li>
                        <li>• Impact Simulation Models</li>
                        <li>• Self-healing Risk Mitigation</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-yellow-400 mb-3">Decision Support:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Risk Treatment Optimization</li>
                        <li>• Resource Allocation Guidance</li>
                        <li>• Investment Priority Ranking</li>
                        <li>• Scenario Planning Tools</li>
                        <li>• Executive Risk Dashboards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Implementation Roadmap Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="implementation"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Route className="h-6 w-6 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Implementierungsroadmap</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Die erfolgreiche Implementierung von ISO 27018 erfordert eine strukturierte, 
                    phasenweise Herangehensweise. Diese Roadmap bietet eine praxiserprobte 
                    Anleitung für die systematische Umsetzung aller Anforderungen.
                  </p>
                  
                  <div className="space-y-8">
                    {/* Phase 1 */}
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center">
                          <span className="text-blue-400 font-bold">1</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">Assessment & Planung</h3>
                          <p className="text-gray-400 text-sm">Dauer: 4-6 Wochen</p>
                        </div>
                        <Badge className="bg-blue-900/20 text-blue-400 border-blue-700/50 ml-auto">Foundation</Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-medium text-blue-400 mb-3">Gap Analysis:</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Current State Assessment</li>
                            <li>• ISO 27018 Requirements Mapping</li>
                            <li>• Compliance Gap Identification</li>
                            <li>• Resource Requirements Analysis</li>
                            <li>• Risk Assessment Baseline</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-green-400 mb-3">Project Setup:</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Stakeholder Identification</li>
                            <li>• Project Governance Structure</li>
                            <li>• Budget und Timeline Planning</li>
                            <li>• Communication Strategy</li>
                            <li>• Success Metrics Definition</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-purple-400 mb-3">Documentation:</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Data Flow Mapping</li>
                            <li>• Current Policy Review</li>
                            <li>• Asset Inventory Creation</li>
                            <li>• Process Documentation</li>
                            <li>• Baseline Metrics Collection</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center">
                          <span className="text-green-400 font-bold">2</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">Policy & Governance</h3>
                          <p className="text-gray-400 text-sm">Dauer: 6-8 Wochen</p>
                        </div>
                        <Badge className="bg-green-900/20 text-green-400 border-green-700/50 ml-auto">Framework</Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-medium text-green-400 mb-3">Policy Development:</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Privacy Policy Framework</li>
                            <li>• Data Processing Procedures</li>
                            <li>• Incident Response Playbooks</li>
                            <li>• Vendor Management Policies</li>
                            <li>• Employee Training Protocols</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-blue-400 mb-3">Governance Structure:</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Data Protection Officer Appointment</li>
                            <li>• Privacy Steering Committee</li>
                            <li>• Roles und Responsibilities Matrix</li>
                            <li>• Escalation Procedures</li>
                            <li>• Decision-Making Frameworks</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-yellow-400 mb-3">Compliance Framework:</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Control Catalog Development</li>
                            <li>• Monitoring Procedures</li>
                            <li>• Audit Planning Framework</li>
                            <li>• Exception Management Process</li>
                            <li>• Continuous Improvement Cycle</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center">
                          <span className="text-purple-400 font-bold">3</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">Technical Implementation</h3>
                          <p className="text-gray-400 text-sm">Dauer: 12-16 Wochen</p>
                        </div>
                        <Badge className="bg-purple-900/20 text-purple-400 border-purple-700/50 ml-auto">Technology</Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-medium text-purple-400 mb-3">Security Controls:</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Encryption Implementation</li>
                            <li>• Access Control Systems</li>
                            <li>• Network Security Measures</li>
                            <li>• Monitoring und Logging</li>
                            <li>• Backup und Recovery</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-orange-400 mb-3">Privacy Technologies:</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Data Classification Tools</li>
                            <li>• Anonymization Solutions</li>
                            <li>• Consent Management Platform</li>
                            <li>• Rights Management System</li>
                            <li>• Privacy-Enhancing Technologies</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-teal-400 mb-3">Integration & Testing:</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• System Integration Testing</li>
                            <li>• Security Testing Program</li>
                            <li>• Privacy Impact Assessments</li>
                            <li>• Performance Optimization</li>
                            <li>• User Acceptance Testing</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Phase 4 */}
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center">
                          <span className="text-yellow-400 font-bold">4</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">Training & Awareness</h3>
                          <p className="text-gray-400 text-sm">Dauer: 4-6 Wochen</p>
                        </div>
                        <Badge className="bg-yellow-900/20 text-yellow-400 border-yellow-700/50 ml-auto">People</Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-medium text-yellow-400 mb-3">Training Programme:</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• General Privacy Awareness</li>
                            <li>• Role-specific Training</li>
                            <li>• Technical Training Sessions</li>
                            <li>• Incident Response Drills</li>
                            <li>• Regular Refresher Courses</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-red-400 mb-3">Communication:</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Launch Communication Strategy</li>
                            <li>• Regular Updates und Newsletters</li>
                            <li>• Success Stories Sharing</li>
                            <li>• Feedback Collection Mechanisms</li>
                            <li>• Continuous Engagement Activities</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-blue-400 mb-3">Competency Building:</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Certification Programs</li>
                            <li>• Expert Network Development</li>
                            <li>• Knowledge Management Systems</li>
                            <li>• Communities of Practice</li>
                            <li>• External Training Partnerships</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Phase 5 */}
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                          <span className="text-red-400 font-bold">5</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">Monitoring & Optimization</h3>
                          <p className="text-gray-400 text-sm">Kontinuierlich</p>
                        </div>
                        <Badge className="bg-red-900/20 text-red-400 border-red-700/50 ml-auto">Operations</Badge>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-medium text-red-400 mb-3">Continuous Monitoring:</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Real-time Compliance Dashboards</li>
                            <li>• Automated Control Testing</li>
                            <li>• Performance Metrics Tracking</li>
                            <li>• Risk Indicator Monitoring</li>
                            <li>• Trend Analysis und Reporting</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-orange-400 mb-3">Process Optimization:</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Efficiency Improvement Initiatives</li>
                            <li>• Process Automation Opportunities</li>
                            <li>• Cost Optimization Measures</li>
                            <li>• Technology Upgrade Planning</li>
                            <li>• Best Practice Integration</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-green-400 mb-3">Continuous Improvement:</h4>
                          <ul className="text-gray-300 text-sm space-y-2">
                            <li>• Regular Assessment Cycles</li>
                            <li>• Feedback Integration Processes</li>
                            <li>• Innovation und R&D Programs</li>
                            <li>• Industry Benchmark Comparisons</li>
                            <li>• Strategic Planning Updates</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-lg border border-purple-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-indigo-400" />
                    Success Factors & Best Practices
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-indigo-400 mb-3">Critical Success Factors:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Executive Leadership und Commitment</li>
                        <li>• Cross-functional Team Collaboration</li>
                        <li>• Adequate Resource Allocation</li>
                        <li>• Clear Communication und Change Management</li>
                        <li>• Phased Implementation Approach</li>
                        <li>• Continuous Stakeholder Engagement</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-purple-400 mb-3">Common Pitfalls to Avoid:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Underestimating Implementation Complexity</li>
                        <li>• Insufficient Training und Awareness</li>
                        <li>• Lack of Integration with Existing Systems</li>
                        <li>• Inadequate Testing und Validation</li>
                        <li>• Poor Documentation und Knowledge Transfer</li>
                        <li>• Neglecting Continuous Improvement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certification Process Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="certification"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gold-600/20 rounded-lg">
                    <Award className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Zertifizierungsprozess</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Die ISO 27018-Zertifizierung ist ein formaler Nachweis der Compliance mit den 
                    internationalen Standards für PII-Schutz in Public Clouds. Der Zertifizierungsprozess 
                    erfordert umfassende Vorbereitung und professionelle Auditierung.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-yellow-400" />
                        Zertifizierungsvoraussetzungen
                      </h3>
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">ISO 27001 Basis-Zertifizierung:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Gültige ISO 27001-Zertifizierung als Grundlage für 
                              die ISO 27018-Erweiterung erforderlich.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Scope Definition:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Klare Abgrenzung der zu zertifizierenden 
                              Cloud-Services und PII-Verarbeitungsprozesse.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Dokumentationsreife:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Vollständige und aktuelle Dokumentation aller 
                              Privacy-Kontrollen und -Verfahren.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-white">Operational Readiness:</span>
                            <p className="text-gray-300 text-sm mt-1">
                              Nachweis der operativen Wirksamkeit aller 
                              implementierten Kontrollen über mindestens 3 Monate.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Search className="h-5 w-5 text-blue-400" />
                        Audit-Vorbereitung
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Pre-Assessment</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Gap Analysis durchführen</li>
                            <li>• Control Testing validieren</li>
                            <li>• Documentation Review</li>
                            <li>• Internal Audit abschließen</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">Evidence Collection</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Audit Evidence Repository</li>
                            <li>• Process Documentation</li>
                            <li>• Control Effectiveness Evidence</li>
                            <li>• Incident und Exception Records</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 className="font-medium text-purple-400 mb-2">Team Preparation</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Audit Response Team Training</li>
                            <li>• Interview Preparation</li>
                            <li>• Technical Demonstration Setup</li>
                            <li>• Communication Protocol</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Certification Audit Process</h3>
                  <div className="space-y-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FileText className="h-6 w-6 text-blue-400" />
                          </div>
                          <h4 className="font-medium text-white mb-2">Stage 1: Documentation Review</h4>
                          <p className="text-gray-300 text-sm mb-3">
                            Remote oder On-site Review der Dokumentation und Policies
                          </p>
                          <Badge className="bg-blue-900/20 text-blue-400 text-xs">2-3 Tage</Badge>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Search className="h-6 w-6 text-green-400" />
                          </div>
                          <h4 className="font-medium text-white mb-2">Stage 2: Implementation Audit</h4>
                          <p className="text-gray-300 text-sm mb-3">
                            Detailprüfung der implementierten Kontrollen und Prozesse
                          </p>
                          <Badge className="bg-green-900/20 text-green-400 text-xs">3-5 Tage</Badge>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertTriangle className="h-6 w-6 text-yellow-400" />
                          </div>
                          <h4 className="font-medium text-white mb-2">Finding Resolution</h4>
                          <p className="text-gray-300 text-sm mb-3">
                            Bearbeitung von Audit-Findings und Corrective Actions
                          </p>
                          <Badge className="bg-yellow-900/20 text-yellow-400 text-xs">2-4 Wochen</Badge>
                        </div>
                        
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Award className="h-6 w-6 text-purple-400" />
                          </div>
                          <h4 className="font-medium text-white mb-2">Certificate Issuance</h4>
                          <p className="text-gray-300 text-sm mb-3">
                            Finale Bewertung und Zertifikatsausstellung
                          </p>
                          <Badge className="bg-purple-900/20 text-purple-400 text-xs">1-2 Wochen</Badge>
                        </div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Users className="h-5 w-5 text-green-400" />
                          Accredited Bodies
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                            <h5 className="font-medium text-blue-400 text-sm mb-1">DEKRA</h5>
                            <p className="text-gray-300 text-xs">
                              Deutsche Akkreditierungsstelle für ISO 27018
                            </p>
                          </div>
                          
                          <div className="p-3 bg-green-900/20 border border-green-700/50 rounded-lg">
                            <h5 className="font-medium text-green-400 text-sm mb-1">TÜV</h5>
                            <p className="text-gray-300 text-xs">
                              Technischer Überwachungsverein für Cloud-Zertifizierungen
                            </p>
                          </div>
                          
                          <div className="p-3 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                            <h5 className="font-medium text-purple-400 text-sm mb-1">BSI</h5>
                            <p className="text-gray-300 text-xs">
                              Bundesamt für Sicherheit in der Informationstechnik
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Clock className="h-5 w-5 text-blue-400" />
                          Certificate Lifecycle
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-green-900/20 border border-green-700/50 rounded-lg">
                            <h5 className="font-medium text-green-400 text-sm mb-1">Initial Certificate</h5>
                            <p className="text-gray-300 text-xs">
                              3 Jahre Gültigkeit mit jährlichen Surveillance Audits
                            </p>
                          </div>
                          
                          <div className="p-3 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                            <h5 className="font-medium text-blue-400 text-sm mb-1">Surveillance Audits</h5>
                            <p className="text-gray-300 text-xs">
                              Jährliche Überprüfungen zur Aufrechterhaltung
                            </p>
                          </div>
                          
                          <div className="p-3 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                            <h5 className="font-medium text-purple-400 text-sm mb-1">Recertification</h5>
                            <p className="text-gray-300 text-xs">
                              Vollständige Re-Zertifizierung alle 3 Jahre
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Euro className="h-5 w-5 text-yellow-400" />
                          Investment & ROI
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-red-900/20 border border-red-700/50 rounded-lg">
                            <h5 className="font-medium text-red-400 text-sm mb-1">Initial Costs</h5>
                            <p className="text-gray-300 text-xs">
                              €50,000 - €200,000 für Implementierung und Zertifizierung
                            </p>
                          </div>
                          
                          <div className="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                            <h5 className="font-medium text-yellow-400 text-sm mb-1">Annual Maintenance</h5>
                            <p className="text-gray-300 text-xs">
                              €20,000 - €50,000 für Surveillance und Maintenance
                            </p>
                          </div>
                          
                          <div className="p-3 bg-green-900/20 border border-green-700/50 rounded-lg">
                            <h5 className="font-medium text-green-400 text-sm mb-1">Business Value</h5>
                            <p className="text-gray-300 text-xs">
                              Competitive Advantage, Trust, Compliance, Risk Mitigation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-lg border border-yellow-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-orange-400" />
                    Post-Certification Excellence
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-orange-400 mb-3">Continuous Compliance:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Automated Compliance Monitoring</li>
                        <li>• Regular Internal Assessments</li>
                        <li>• Proactive Risk Management</li>
                        <li>• Continuous Improvement Programs</li>
                        <li>• Industry Best Practice Integration</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-yellow-400 mb-3">Market Positioning:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Competitive Differentiation</li>
                        <li>• Customer Trust Enhancement</li>
                        <li>• Premium Service Positioning</li>
                        <li>• Global Market Access</li>
                        <li>• Partner Ecosystem Expansion</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-green-400 mb-3">Future Roadmap:</h4>
                      <ul className="text-gray-300 text-sm space-y-2">
                        <li>• Multi-Standard Integration (SOC 2, PCI DSS)</li>
                        <li>• Advanced Privacy Technologies</li>
                        <li>• AI und Machine Learning Integration</li>
                        <li>• Quantum-Safe Cryptography Preparation</li>
                        <li>• Sustainability und ESG Integration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Iso27018Guide;