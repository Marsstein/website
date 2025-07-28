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
  Circle
} from 'lucide-react';

const Iso27017Guide = () => {
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
    { id: 'cloud-models', title: 'Cloud-Modelle', icon: Cloud, readTime: '12 Min' },
    { id: 'shared-responsibility', title: 'Shared Responsibility', icon: Users, readTime: '15 Min' },
    { id: 'cloud-controls', title: 'Cloud-Controls', icon: Settings, readTime: '25 Min' },
    { id: 'data-protection', title: 'Datenschutz in der Cloud', icon: Lock, readTime: '18 Min' },
    { id: 'incident-management', title: 'Incident Management', icon: AlertTriangle, readTime: '16 Min' },
    { id: 'risk-assessment', title: 'Risk Assessment', icon: BarChart3, readTime: '20 Min' },
    { id: 'compliance-monitoring', title: 'Compliance Monitoring', icon: Activity, readTime: '18 Min' },
    { id: 'vendor-management', title: 'Vendor Management', icon: Building2, readTime: '22 Min' },
    { id: 'business-continuity', title: 'Business Continuity', icon: RotateCcw, readTime: '18 Min' },
    { id: 'training-awareness', title: 'Training & Awareness', icon: GraduationCap, readTime: '16 Min' },
    { id: 'audit-assessment', title: 'Audit & Assessment', icon: Search, readTime: '20 Min' },
    { id: 'implementation', title: 'Implementierungsroadmap', icon: Route, readTime: '30 Min' },
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
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section.getAttribute('data-section'));
        }
      });

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const CounterAnimation = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const isInView = useInView(elementRef, { once: true });

    useEffect(() => {
      if (isInView) {
        let start = 0;
        const end = parseInt(value);
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900">
      <Header />
      
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-blue-500 z-50"
        style={{ scaleX }}
      />

      {/* Floating Sidebar Toggle */}
      <Button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-20 left-4 z-40 lg:hidden bg-sky-600 hover:bg-sky-700"
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
          <h2 className="text-xl font-bold text-white mb-6">ISO 27017 Leitfaden</h2>
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
                    ? 'bg-sky-600 text-white'
                    : 'text-gray-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-3">
                  <section.icon className="h-4 w-4" />
                  <div className="flex-1">
                    <div className="font-medium">{section.title}</div>
                    <div className="text-xs opacity-70">{section.readTime}</div>
                  </div>
                  {activeSection === section.id && (
                    <CheckCircle className="h-4 w-4 text-green-400" />
                  )}
                </div>
              </button>
            ))}
          </div>
          
          {/* Progress */}
          <div className="mt-6 p-4 bg-slate-700 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-300">Lesefortschritt</span>
              <span className="text-sm text-sky-400">{Math.round(readingProgress)}%</span>
            </div>
            <Progress value={readingProgress} className="h-2" />
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="lg:ml-80">
        <div className="container mx-auto px-6 py-8" ref={containerRef}>
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
            data-section="overview"
          >
            <div className="inline-flex items-center gap-2 bg-sky-600/20 text-sky-400 px-4 py-2 rounded-full mb-6">
              <Cloud className="h-4 w-4" />
              <span className="text-sm font-medium">ISO/IEC 27017:2015</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-sky-400 bg-clip-text text-transparent">
                ISO 27017
              </span>
              <br />
              <span className="text-white text-4xl md:text-5xl">Cloud Security Guide</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Umfassender Leitfaden zu ISO 27017 - Informationssicherheitskontrollen für 
              Cloud-Computing-Services basierend auf ISO 27002
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Badge className="bg-sky-600/20 text-sky-400 px-4 py-2">
                <Cloud className="h-4 w-4 mr-2" />
                Cloud Security Controls
              </Badge>
              <Badge className="bg-blue-600/20 text-blue-400 px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                37 Zusätzliche Controls
              </Badge>
              <Badge className="bg-purple-600/20 text-purple-400 px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                International Standard
              </Badge>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="text-3xl font-bold text-sky-400 mb-2">
                  <CounterAnimation value="37" />
                </div>
                <div className="text-gray-300">Cloud-spezifische Controls</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  <CounterAnimation value="7" />
                </div>
                <div className="text-gray-300">Neue Control-Familien</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="text-3xl font-bold text-purple-400 mb-2">
                  <CounterAnimation value="3" />
                </div>
                <div className="text-gray-300">Service-Modelle</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-slate-800/50 p-6 rounded-xl border border-slate-700"
              >
                <div className="text-3xl font-bold text-green-400 mb-2">
                  <CounterAnimation value="4" />
                </div>
                <div className="text-gray-300">Deployment-Modelle</div>
              </motion.div>
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
                  <div className="p-2 bg-sky-600/20 rounded-lg">
                    <Eye className="h-6 w-6 text-sky-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Überblick</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Was ist ISO 27017?</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      ISO/IEC 27017:2015 ist ein internationaler Standard, der Leitlinien für 
                      Informationssicherheitskontrollen speziell für Cloud-Computing-Services bereitstellt. 
                      Er erweitert ISO 27002 um cloud-spezifische Kontrollen.
                    </p>
                    
                    <h4 className="text-lg font-semibold text-white mb-3">Hauptziele:</h4>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        Cloud-spezifische Sicherheitskontrollen definieren
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        Shared Responsibility Model klären
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        Vertrauen in Cloud-Services stärken
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                        Compliance in Cloud-Umgebungen ermöglichen
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Beziehung zu anderen Standards</h3>
                    <div className="space-y-4">
                      <div className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-4 w-4 text-blue-400" />
                          <span className="font-semibold text-blue-400">ISO 27001/27002</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Baut auf den Grundlagen auf und erweitert diese um Cloud-Kontrollen
                        </p>
                      </div>
                      
                      <div className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Lock className="h-4 w-4 text-purple-400" />
                          <span className="font-semibold text-purple-400">ISO 27018</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Komplementär für Datenschutz in öffentlichen Cloud-Services
                        </p>
                      </div>
                      
                      <div className="p-4 bg-slate-700/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Globe className="h-4 w-4 text-green-400" />
                          <span className="font-semibold text-green-400">NIST Cybersecurity Framework</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Harmoniert mit US-amerikanischen Cloud-Sicherheitsstandards
                        </p>
                      </div>
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
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Target className="h-6 w-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Anwendungsbereich</h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Zielgruppen</h3>
                    <div className="space-y-4">
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Cloud className="h-4 w-4 text-blue-400" />
                          <span className="font-semibold text-blue-400">Cloud Service Provider</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          IaaS-, PaaS- und SaaS-Anbieter, die ihre Sicherheitskontrollen implementieren
                        </p>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Users className="h-4 w-4 text-green-400" />
                          <span className="font-semibold text-green-400">Cloud Service Customer</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Unternehmen, die Cloud-Services nutzen und ihre Verantwortlichkeiten verstehen müssen
                        </p>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Shield className="h-4 w-4 text-purple-400" />
                          <span className="font-semibold text-purple-400">Auditoren & Assessoren</span>
                        </div>
                        <p className="text-gray-300 text-sm">
                          Prüfer, die Cloud-Sicherheitskontrollen bewerten und zertifizieren
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Nicht im Scope</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-2 text-gray-300">
                        <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Technische Implementierungsdetails</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300">
                        <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Produkt- oder anbieterspezifische Lösungen</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300">
                        <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Business Continuity Management (separate Standards)</span>
                      </div>
                      <div className="flex items-start gap-2 text-gray-300">
                        <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Rechtliche und regulatorische Anforderungen</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                      <h4 className="font-semibold text-blue-400 mb-2">Wichtiger Hinweis</h4>
                      <p className="text-gray-300 text-sm">
                        ISO 27017 ist ein Leitfaden und keine zertifizierbare Norm. 
                        Zertifizierungen erfolgen gegen ISO 27001 mit ISO 27017 als Referenz.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cloud Models Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="cloud-models"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Cloud className="h-6 w-6 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Cloud-Modelle</h2>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Service-Modelle</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-slate-700/30 rounded-lg p-6 border border-slate-600"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-red-600/20 rounded-lg">
                          <Server className="h-5 w-5 text-red-400" />
                        </div>
                        <h4 className="font-semibold text-white">Infrastructure as a Service (IaaS)</h4>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4">
                        Bereitstellung von IT-Infrastruktur wie VMs, Storage, Netzwerke
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs text-red-400 font-medium">ANBIETER-VERANTWORTUNG:</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-1">
                            <li>• Physische Infrastruktur</li>
                            <li>• Hypervisor-Sicherheit</li>
                            <li>• Netzwerk-Isolierung</li>
                            <li>• Storage-Verschlüsselung</li>
                          </ul>
                        </div>
                        
                        <div>
                          <span className="text-xs text-blue-400 font-medium">KUNDEN-VERANTWORTUNG:</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-1">
                            <li>• Betriebssystem-Security</li>
                            <li>• Anwendungssicherheit</li>
                            <li>• Daten-Klassifizierung</li>
                            <li>• Access Management</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-slate-600">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">Beispiele:</span>
                          <div className="flex gap-1">
                            <Badge className="bg-red-500/20 text-red-300 text-xs">AWS EC2</Badge>
                            <Badge className="bg-red-500/20 text-red-300 text-xs">Azure VMs</Badge>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-slate-700/30 rounded-lg p-6 border border-slate-600"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-orange-600/20 rounded-lg">
                          <Settings className="h-5 w-5 text-orange-400" />
                        </div>
                        <h4 className="font-semibold text-white">Platform as a Service (PaaS)</h4>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4">
                        Entwicklungsplattformen und Runtime-Umgebungen
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs text-orange-400 font-medium">ANBIETER-VERANTWORTUNG:</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-1">
                            <li>• Runtime-Umgebung</li>
                            <li>• Middleware-Sicherheit</li>
                            <li>• Entwicklungstools</li>
                            <li>• Plattform-Updates</li>
                          </ul>
                        </div>
                        
                        <div>
                          <span className="text-xs text-blue-400 font-medium">KUNDEN-VERANTWORTUNG:</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-1">
                            <li>• Anwendungscode</li>
                            <li>• Daten-Management</li>
                            <li>• User Access Controls</li>
                            <li>• Konfigurationssicherheit</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-slate-600">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">Beispiele:</span>
                          <div className="flex gap-1">
                            <Badge className="bg-orange-500/20 text-orange-300 text-xs">Heroku</Badge>
                            <Badge className="bg-orange-500/20 text-orange-300 text-xs">Google App Engine</Badge>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-slate-700/30 rounded-lg p-6 border border-slate-600"
                    >
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-green-600/20 rounded-lg">
                          <Globe className="h-5 w-5 text-green-400" />
                        </div>
                        <h4 className="font-semibold text-white">Software as a Service (SaaS)</h4>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-4">
                        Vollständige Anwendungen als Service
                      </p>
                      
                      <div className="space-y-3">
                        <div>
                          <span className="text-xs text-green-400 font-medium">ANBIETER-VERANTWORTUNG:</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-1">
                            <li>• Gesamte Anwendung</li>
                            <li>• Daten-Residency</li>
                            <li>• Backup & Recovery</li>
                            <li>• Patch-Management</li>
                          </ul>
                        </div>
                        
                        <div>
                          <span className="text-xs text-blue-400 font-medium">KUNDEN-VERANTWORTUNG:</span>
                          <ul className="text-gray-300 text-xs mt-1 space-y-1">
                            <li>• User Account Management</li>
                            <li>• Zugriffskontrollen</li>
                            <li>• Daten-Eingabe</li>
                            <li>• Compliance-Konfiguration</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-slate-600">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-400">Beispiele:</span>
                          <div className="flex gap-1">
                            <Badge className="bg-green-500/20 text-green-300 text-xs">Office 365</Badge>
                            <Badge className="bg-green-500/20 text-green-300 text-xs">Salesforce</Badge>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Deployment-Modelle</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Globe className="h-5 w-5 text-blue-400" />
                        <h4 className="font-semibold text-white">Public Cloud</h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">
                        Öffentlich verfügbare Cloud-Services
                      </p>
                      <div className="space-y-2">
                        <div className="text-xs">
                          <span className="text-green-400">Vorteile:</span>
                          <ul className="text-gray-300 mt-1">
                            <li>• Kosteneffizient</li>
                            <li>• Hohe Skalierbarkeit</li>
                            <li>• Schnelle Bereitstellung</li>
                          </ul>
                        </div>
                        <div className="text-xs">
                          <span className="text-red-400">Risiken:</span>
                          <ul className="text-gray-300 mt-1">
                            <li>• Geteilte Ressourcen</li>
                            <li>• Compliance-Herausforderungen</li>
                            <li>• Vendor Lock-in</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Lock className="h-5 w-5 text-purple-400" />
                        <h4 className="font-semibold text-white">Private Cloud</h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">
                        Dedizierte Cloud-Infrastruktur
                      </p>
                      <div className="space-y-2">
                        <div className="text-xs">
                          <span className="text-green-400">Vorteile:</span>
                          <ul className="text-gray-300 mt-1">
                            <li>• Vollständige Kontrolle</li>
                            <li>• Höhere Sicherheit</li>
                            <li>• Compliance-konform</li>
                          </ul>
                        </div>
                        <div className="text-xs">
                          <span className="text-red-400">Nachteile:</span>
                          <ul className="text-gray-300 mt-1">
                            <li>• Höhere Kosten</li>
                            <li>• Begrenzte Skalierbarkeit</li>
                            <li>• Wartungsaufwand</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Network className="h-5 w-5 text-orange-400" />
                        <h4 className="font-semibold text-white">Hybrid Cloud</h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">
                        Kombination aus Public und Private
                      </p>
                      <div className="space-y-2">
                        <div className="text-xs">
                          <span className="text-green-400">Vorteile:</span>
                          <ul className="text-gray-300 mt-1">
                            <li>• Flexibilität</li>
                            <li>• Optimierte Kosten</li>
                            <li>• Risiko-Diversifizierung</li>
                          </ul>
                        </div>
                        <div className="text-xs">
                          <span className="text-red-400">Herausforderungen:</span>
                          <ul className="text-gray-300 mt-1">
                            <li>• Komplexe Integration</li>
                            <li>• Einheitliche Governance</li>
                            <li>• Daten-Synchronisation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="h-5 w-5 text-green-400" />
                        <h4 className="font-semibold text-white">Community Cloud</h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">
                        Geteilte Infrastruktur für spezifische Gruppen
                      </p>
                      <div className="space-y-2">
                        <div className="text-xs">
                          <span className="text-green-400">Anwendung:</span>
                          <ul className="text-gray-300 mt-1">
                            <li>• Behörden-Clouds</li>
                            <li>• Branchen-Clouds</li>
                            <li>• Forschungs-Clouds</li>
                          </ul>
                        </div>
                        <div className="text-xs">
                          <span className="text-blue-400">Charakteristika:</span>
                          <ul className="text-gray-300 mt-1">
                            <li>• Gemeinsame Compliance</li>
                            <li>• Ähnliche Sicherheitsanforderungen</li>
                            <li>• Kostenteilung</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Shared Responsibility Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="shared-responsibility"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Users className="h-6 w-6 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Shared Responsibility Model</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Das Shared Responsibility Model ist ein fundamentales Konzept in ISO 27017, das klar definiert, 
                    welche Sicherheitsverantwortlichkeiten beim Cloud-Anbieter liegen und welche beim Kunden verbleiben.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Cloud className="h-5 w-5 text-blue-400" />
                        Cloud Service Provider (CSP)
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-blue-400 mb-2">Kernverantwortlichkeiten:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Sicherheit der Cloud-Infrastruktur
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Physische Sicherheit der Rechenzentren
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Netzwerk- und Host-Level-Schutz
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Service-Verfügbarkeit und -Resilienz
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Compliance mit relevanten Standards
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h5 className="font-medium text-blue-400 mb-2">Transparenzpflicht:</h5>
                          <p className="text-gray-300 text-sm">
                            CSPs müssen ihre Sicherheitsmaßnahmen dokumentieren und dem Kunden 
                            zugänglich machen (Audit-Berichte, Zertifizierungen, SLAs).
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5 text-green-400" />
                        Cloud Service Customer (CSC)
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-green-400 mb-2">Kernverantwortlichkeiten:</h4>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Sicherheit in der Cloud (Daten, Anwendungen)
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Identity & Access Management
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Konfigurationssicherheit
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Datenklassifizierung und -schutz
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Incident Response und Business Continuity
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h5 className="font-medium text-green-400 mb-2">Due Diligence:</h5>
                          <p className="text-gray-300 text-sm">
                            Kunden müssen CSP-Sicherheitsmaßnahmen bewerten und ihre eigenen 
                            Schutzmaßnahmen entsprechend anpassen.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Verantwortungsmatrix nach Service-Modell</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-slate-600 rounded-lg overflow-hidden">
                      <thead className="bg-slate-700">
                        <tr>
                          <th className="p-4 text-left text-white font-medium border-b border-slate-600">Sicherheitsbereich</th>
                          <th className="p-4 text-center text-white font-medium border-b border-l border-slate-600">IaaS</th>
                          <th className="p-4 text-center text-white font-medium border-b border-l border-slate-600">PaaS</th>
                          <th className="p-4 text-center text-white font-medium border-b border-l border-slate-600">SaaS</th>
                        </tr>
                      </thead>
                      <tbody className="bg-slate-800/50">
                        <tr>
                          <td className="p-4 text-gray-300 border-b border-slate-600">Physische Sicherheit</td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-300 border-b border-slate-600">Netzwerk-Infrastruktur</td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-300 border-b border-slate-600">Host-Betriebssystem</td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-300 border-b border-slate-600">Hypervisor</td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-300 border-b border-slate-600">Gast-Betriebssystem</td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-green-500/20 text-green-300">CSC</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-300 border-b border-slate-600">Runtime-Umgebung</td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-green-500/20 text-green-300">CSC</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-300 border-b border-slate-600">Anwendungen</td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-green-500/20 text-green-300">CSC</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-green-500/20 text-green-300">CSC</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-300 border-b border-slate-600">Daten</td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-green-500/20 text-green-300">CSC</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-green-500/20 text-green-300">CSC</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-green-500/20 text-green-300">CSC</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-300 border-b border-slate-600">Identity & Access Management</td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-yellow-500/20 text-yellow-300">Geteilt</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-yellow-500/20 text-yellow-300">Geteilt</Badge>
                          </td>
                          <td className="p-4 text-center border-b border-l border-slate-600">
                            <Badge className="bg-yellow-500/20 text-yellow-300">Geteilt</Badge>
                          </td>
                        </tr>
                        <tr>
                          <td className="p-4 text-gray-300">Compliance & Governance</td>
                          <td className="p-4 text-center border-l border-slate-600">
                            <Badge className="bg-yellow-500/20 text-yellow-300">Geteilt</Badge>
                          </td>
                          <td className="p-4 text-center border-l border-slate-600">
                            <Badge className="bg-yellow-500/20 text-yellow-300">Geteilt</Badge>
                          </td>
                          <td className="p-4 text-center border-l border-slate-600">
                            <Badge className="bg-yellow-500/20 text-yellow-300">Geteilt</Badge>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4 flex gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-500/20 text-blue-300">CSP</Badge>
                      <span className="text-gray-300">Cloud Service Provider</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-500/20 text-green-300">CSC</Badge>
                      <span className="text-gray-300">Cloud Service Customer</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-yellow-500/20 text-yellow-300">Geteilt</Badge>
                      <span className="text-gray-300">Geteilte Verantwortung</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Praktische Umsetzung</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-400" />
                        Dokumentation & Kommunikation
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          Klare RACI-Matrix für alle Sicherheitsbereiche
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          Regelmäßige Reviews der Verantwortlichkeiten
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          Schnittstellen-Dokumentation für geteilte Bereiche
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" />
                          Incident-Eskalationsverfahren
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="font-semibold text-white mb-3 flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        Kontrolle & Überwachung
                      </h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Kontinuierliches Monitoring der Schnittstellen
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Regelmäßige Audits und Assessments
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          SLA-Monitoring und -Reporting
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                          Third-Party Risk Management
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg p-6 border border-orange-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-400" />
                    Häufige Missverständnisse
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-red-400 mb-2">❌ Falsche Annahmen:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• "Der CSP ist für alles verantwortlich"</li>
                        <li>• "Compliance wird automatisch übertragen"</li>
                        <li>• "Sicherheit ist nur CSP-Sache"</li>
                        <li>• "Geteilte Bereiche sind CSP-Verantwortung"</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-400 mb-2">✅ Korrekte Sichtweise:</h4>
                      <ul className="space-y-1 text-gray-300 text-sm">
                        <li>• Sicherheit ist eine gemeinsame Verantwortung</li>
                        <li>• Kunden müssen Due Diligence ausüben</li>
                        <li>• Klare Abgrenzung ist essentiell</li>
                        <li>• Kontinuierliche Kommunikation erforderlich</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Cloud Controls Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="cloud-controls"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-600/20 rounded-lg">
                    <Settings className="h-6 w-6 text-orange-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Cloud-Controls</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    ISO 27017 definiert 37 zusätzliche Sicherheitskontrollen, die spezifisch für Cloud-Computing-Umgebungen entwickelt wurden. 
                    Diese ergänzen die bestehenden ISO 27002 Controls um cloud-spezifische Anforderungen.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-orange-400 mb-2">37</div>
                      <div className="text-gray-300">Zusätzliche Controls</div>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-blue-400 mb-2">7</div>
                      <div className="text-gray-300">Neue Control-Familien</div>
                    </div>
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="text-3xl font-bold text-green-400 mb-2">14</div>
                      <div className="text-gray-300">Erweiterte Controls</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {/* Control Family 1: Information Security Policies */}
                  <div className="bg-slate-700/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-400" />
                      A.5 - Informationssicherheitsrichtlinien
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <h4 className="font-medium text-white mb-2">A.5.1.1 - Richtlinien für Cloud-Services</h4>
                        <p className="text-gray-300 text-sm mb-3">
                          Spezielle Sicherheitsrichtlinien für die Nutzung von Cloud-Computing-Services.
                        </p>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs text-blue-400 font-medium">IMPLEMENTATION:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Cloud-spezifische Sicherheitsrichtlinie entwickeln</li>
                              <li>• Rollenbasierte Zuständigkeiten definieren</li>
                              <li>• Regelmäßige Überprüfung und Aktualisierung</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Dokumentierte Cloud-Sicherheitsrichtlinie</li>
                              <li>• Genehmigungsprotokoll der Geschäftsleitung</li>
                              <li>• Schulungsnachweise für Mitarbeiter</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-slate-600">
                          <button
                            onClick={() => toggleTaskCompletion('A.5.1.1')}
                            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {completedTasks.has('A.5.1.1') ? (
                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                            ) : (
                              <Circle className="h-4 w-4" />
                            )}
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <h4 className="font-medium text-white mb-2">A.5.1.2 - Review Cloud-Service-Vereinbarungen</h4>
                        <p className="text-gray-300 text-sm mb-3">
                          Regelmäßige Überprüfung von Cloud-Service-Vereinbarungen auf Sicherheitsaspekte.
                        </p>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs text-blue-400 font-medium">IMPLEMENTATION:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• SLA-Review-Prozess etablieren</li>
                              <li>• Sicherheitsanforderungen validieren</li>
                              <li>• Vertragsänderungen bewerten</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Review-Protokolle</li>
                              <li>• Sicherheitsbewertungen</li>
                              <li>• Vertragsänderungsdokumentation</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-slate-600">
                          <button
                            onClick={() => toggleTaskCompletion('A.5.1.2')}
                            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {completedTasks.has('A.5.1.2') ? (
                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                            ) : (
                              <Circle className="h-4 w-4" />
                            )}
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Control Family 2: Access Control */}
                  <div className="bg-slate-700/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Lock className="h-5 w-5 text-purple-400" />
                      A.9 - Zugangssteuerung
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <h4 className="font-medium text-white mb-2">A.9.5.1 - Cloud-Service-Zugang</h4>
                        <p className="text-gray-300 text-sm mb-3">
                          Kontrolle und Überwachung des Zugangs zu Cloud-Services.
                        </p>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs text-purple-400 font-medium">IMPLEMENTATION:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Multi-Faktor-Authentifizierung implementieren</li>
                              <li>• Rollenbasierte Zugriffskontrollen einrichten</li>
                              <li>• Privileged Access Management (PAM)</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• IAM-Konfigurationsdokumentation</li>
                              <li>• MFA-Implementierungsnachweis</li>
                              <li>• Zugriffsprotokolle und Audits</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-slate-600">
                          <button
                            onClick={() => toggleTaskCompletion('A.9.5.1')}
                            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {completedTasks.has('A.9.5.1') ? (
                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                            ) : (
                              <Circle className="h-4 w-4" />
                            )}
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <h4 className="font-medium text-white mb-2">A.9.5.2 - Administrative Zugriffsrechte</h4>
                        <p className="text-gray-300 text-sm mb-3">
                          Verwaltung administrativer Zugriffsrechte in Cloud-Umgebungen.
                        </p>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs text-purple-400 font-medium">IMPLEMENTATION:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Prinzip der minimalen Berechtigung</li>
                              <li>• Just-in-Time Access Controls</li>
                              <li>• Regelmäßige Berechtigunsreviews</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Berechtigungsmatrix</li>
                              <li>• Review-Berichte</li>
                              <li>• Admin-Aktivitätsprotokolle</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-slate-600">
                          <button
                            onClick={() => toggleTaskCompletion('A.9.5.2')}
                            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {completedTasks.has('A.9.5.2') ? (
                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                            ) : (
                              <Circle className="h-4 w-4" />
                            )}
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Control Family 3: Cryptography */}
                  <div className="bg-slate-700/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-400" />
                      A.10 - Kryptographie
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <h4 className="font-medium text-white mb-2">A.10.1.1 - Kryptographische Controls</h4>
                        <p className="text-gray-300 text-sm mb-3">
                          Cloud-spezifische kryptographische Kontrollen und Schlüsselverwaltung.
                        </p>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs text-green-400 font-medium">IMPLEMENTATION:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• End-to-End-Verschlüsselung implementieren</li>
                              <li>• Cloud HSM für Schlüsselverwaltung</li>
                              <li>• Bring Your Own Key (BYOK) Strategien</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Verschlüsselungsrichtlinie</li>
                              <li>• Schlüsselverwaltungsdokumentation</li>
                              <li>• Encryption-at-Rest/in-Transit Nachweis</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-slate-600">
                          <button
                            onClick={() => toggleTaskCompletion('A.10.1.1')}
                            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {completedTasks.has('A.10.1.1') ? (
                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                            ) : (
                              <Circle className="h-4 w-4" />
                            )}
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <h4 className="font-medium text-white mb-2">A.10.1.2 - Schlüssel-Lebenszyklus</h4>
                        <p className="text-gray-300 text-sm mb-3">
                          Verwaltung des gesamten Lebenszyklus kryptographischer Schlüssel in der Cloud.
                        </p>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs text-green-400 font-medium">IMPLEMENTATION:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Automatisierte Schlüsselrotation</li>
                              <li>• Sichere Schlüsselverteilung</li>
                              <li>• Schlüssel-Backup und -Recovery</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Schlüssel-Lifecycle-Policy</li>
                              <li>• Rotationsprotokolle</li>
                              <li>• Backup-/Recovery-Tests</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-slate-600">
                          <button
                            onClick={() => toggleTaskCompletion('A.10.1.2')}
                            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {completedTasks.has('A.10.1.2') ? (
                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                            ) : (
                              <Circle className="h-4 w-4" />
                            )}
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Control Family 4: Operations Security */}
                  <div className="bg-slate-700/30 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Server className="h-5 w-5 text-red-400" />
                      A.12 - Betriebssicherheit
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <h4 className="font-medium text-white mb-2">A.12.1.1 - Cloud-Service-Management</h4>
                        <p className="text-gray-300 text-sm mb-3">
                          Operative Verwaltung und Überwachung von Cloud-Services.
                        </p>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs text-red-400 font-medium">IMPLEMENTATION:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• 24/7 Monitoring implementieren</li>
                              <li>• Automatisierte Alerting-Systeme</li>
                              <li>• Performance-Monitoring</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Monitoring-Dashboard</li>
                              <li>• Alert-Konfigurationsdokumentation</li>
                              <li>• Performance-Reports</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-slate-600">
                          <button
                            onClick={() => toggleTaskCompletion('A.12.1.1')}
                            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {completedTasks.has('A.12.1.1') ? (
                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                            ) : (
                              <Circle className="h-4 w-4" />
                            )}
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                      
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <h4 className="font-medium text-white mb-2">A.12.6.1 - Virtualisierungssicherheit</h4>
                        <p className="text-gray-300 text-sm mb-3">
                          Sicherheitsmaßnahmen für virtualisierte Umgebungen und Container.
                        </p>
                        <div className="space-y-2">
                          <div>
                            <span className="text-xs text-red-400 font-medium">IMPLEMENTATION:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• VM-Isolierung sicherstellen</li>
                              <li>• Container-Security implementieren</li>
                              <li>• Hypervisor-Härtung</li>
                            </ul>
                          </div>
                          <div>
                            <span className="text-xs text-green-400 font-medium">EVIDENCE:</span>
                            <ul className="text-gray-300 text-xs mt-1 space-y-1">
                              <li>• Virtualisierungs-Sicherheitsrichtlinie</li>
                              <li>• Hypervisor-Konfiguration</li>
                              <li>• Container-Scanning-Berichte</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-3 border-t border-slate-600">
                          <button
                            onClick={() => toggleTaskCompletion('A.12.6.1')}
                            className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                          >
                            {completedTasks.has('A.12.6.1') ? (
                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                            ) : (
                              <Circle className="h-4 w-4" />
                            )}
                            Als implementiert markieren
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Info className="h-5 w-5 text-blue-400" />
                    Vollständige Control-Liste
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Die obigen Beispiele zeigen einen Auszug der wichtigsten ISO 27017 Controls. 
                    Der vollständige Standard umfasst 37 spezifische Cloud-Controls in 14 Kategorien.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div className="text-gray-300">
                      <div className="font-medium text-white mb-1">A.5 - Policies</div>
                      <div>2 Controls</div>
                    </div>
                    <div className="text-gray-300">
                      <div className="font-medium text-white mb-1">A.6 - Organization</div>
                      <div>3 Controls</div>
                    </div>
                    <div className="text-gray-300">
                      <div className="font-medium text-white mb-1">A.8 - Asset Management</div>
                      <div>4 Controls</div>
                    </div>
                    <div className="text-gray-300">
                      <div className="font-medium text-white mb-1">A.9 - Access Control</div>
                      <div>6 Controls</div>
                    </div>
                    <div className="text-gray-300">
                      <div className="font-medium text-white mb-1">A.10 - Cryptography</div>
                      <div>3 Controls</div>
                    </div>
                    <div className="text-gray-300">
                      <div className="font-medium text-white mb-1">A.11 - Physical Security</div>
                      <div>2 Controls</div>
                    </div>
                    <div className="text-gray-300">
                      <div className="font-medium text-white mb-1">A.12 - Operations</div>
                      <div>8 Controls</div>
                    </div>
                    <div className="text-gray-300">
                      <div className="font-medium text-white mb-1">A.13-18 - Weitere</div>
                      <div>9 Controls</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Data Protection Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="data-protection"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Lock className="h-6 w-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Data Protection in der Cloud</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Datenschutz in Cloud-Umgebungen erfordert spezielle Schutzmaßnahmen, die über traditionelle 
                    Sicherheitskonzepte hinausgehen. ISO 27017 definiert umfassende Anforderungen für den Schutz 
                    von Daten während des gesamten Cloud-Lebenszyklus.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="space-y-6">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <Database className="h-5 w-5 text-blue-400" />
                          Datenklassifizierung
                        </h3>
                        <div className="space-y-4">
                          <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                            <h4 className="font-medium text-red-400 mb-2">Streng Vertraulich</h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                                Personenbezogene Daten besonderer Kategorien
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                                Geschäftsgeheimnisse und IP
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                                Regulierte Finanzdaten
                              </li>
                            </ul>
                          </div>
                          
                          <div className="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                            <h4 className="font-medium text-yellow-400 mb-2">Vertraulich</h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                              <li className="flex items-start gap-2">
                                <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                Interne Unternehmensdaten
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                Kundendaten ohne PII
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                Projektdokumentation
                              </li>
                            </ul>
                          </div>
                          
                          <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                            <h4 className="font-medium text-green-400 mb-2">Öffentlich</h4>
                            <ul className="text-gray-300 text-sm space-y-1">
                              <li className="flex items-start gap-2">
                                <Info className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                Marketing-Materialien
                              </li>
                              <li className="flex items-start gap-2">
                                <Info className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                Öffentliche Dokumentation
                              </li>
                              <li className="flex items-start gap-2">
                                <Info className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                Anonymisierte Statistiken
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <Shield className="h-5 w-5 text-purple-400" />
                          Schutzmaßnahmen nach Klassifizierung
                        </h3>
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-medium text-red-400 mb-2">Höchste Schutzklasse:</h4>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400" />
                                <span className="text-gray-300 text-sm">End-to-End-Verschlüsselung</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400" />
                                <span className="text-gray-300 text-sm">Hardware Security Modules</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400" />
                                <span className="text-gray-300 text-sm">Multi-Faktor-Authentifizierung</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400" />
                                <span className="text-gray-300 text-sm">Zero-Trust-Zugriff</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-yellow-400 mb-2">Mittlere Schutzklasse:</h4>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400" />
                                <span className="text-gray-300 text-sm">Standard-Verschlüsselung</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400" />
                                <span className="text-gray-300 text-sm">Rollenbasierte Zugriffskontrolle</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400" />
                                <span className="text-gray-300 text-sm">Audit-Logging</span>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-medium text-green-400 mb-2">Basis-Schutzklasse:</h4>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400" />
                                <span className="text-gray-300 text-sm">Basis-Authentifizierung</span>
                              </div>
                              <div className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400" />
                                <span className="text-gray-300 text-sm">Standard-Backups</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Data Protection Lifecycle</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Upload className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Erstellung/Import</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Datenklassifizierung</li>
                        <li>• Verschlüsselung at Rest</li>
                        <li>• Metadaten-Tagging</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Database className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Speicherung</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Geo-Redundanz</li>
                        <li>• Backup-Strategien</li>
                        <li>• Data Loss Prevention</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Share2 className="h-6 w-6 text-purple-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Übertragung</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Verschlüsselung in Transit</li>
                        <li>• VPN/Private Links</li>
                        <li>• Integritätsprüfung</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Trash2 className="h-6 w-6 text-red-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Löschung</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Sichere Löschung</li>
                        <li>• Kryptographische Löschung</li>
                        <li>• Retention Policies</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Spezielle Datenschutzanforderungen</h3>
                  <div className="space-y-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                        <Scale className="h-5 w-5 text-blue-400" />
                        DSGVO-Compliance in der Cloud
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-medium text-blue-400 mb-3">Rechtmäßigkeit der Verarbeitung:</h5>
                          <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Einwilligung dokumentieren
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Vertragserfüllung nachweisen
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Berechtigte Interessen bewerten
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Gesetzliche Verpflichtungen beachten
                            </li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-green-400 mb-3">Betroffenenrechte gewährleisten:</h5>
                          <ul className="space-y-2 text-gray-300 text-sm">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Auskunftsrecht (Art. 15)
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Berichtigungsrecht (Art. 16)
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Löschungsrecht (Art. 17)
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              Datenübertragbarkeit (Art. 20)
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                        <Globe className="h-5 w-5 text-purple-400" />
                        Internationale Datentransfers
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-medium text-blue-400 mb-3">Angemessenheitsbeschlüsse:</h5>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• EU-US Data Privacy Framework</li>
                            <li>• UK Extension to Adequacy</li>
                            <li>• Schweiz</li>
                            <li>• Kanada (kommerzielle Org.)</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-green-400 mb-3">Standardvertragsklauseln:</h5>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• EU SCCs 2021/914</li>
                            <li>• UK International Data Transfer Agreement</li>
                            <li>• Transfer Impact Assessment</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h5 className="font-medium text-purple-400 mb-3">Zusätzliche Schutzmaßnahmen:</h5>
                          <ul className="space-y-1 text-gray-300 text-sm">
                            <li>• Ende-zu-Ende-Verschlüsselung</li>
                            <li>• Pseudonymisierung</li>
                            <li>• Data Residency Controls</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-lg border border-green-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-400" />
                    Best Practices für Cloud Data Protection
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-green-400 mb-3">Technische Maßnahmen:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Zero-Knowledge-Architektur implementieren
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Client-seitige Verschlüsselung nutzen
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Data Loss Prevention (DLP) implementieren
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Continuous Data Discovery betreiben
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-400 mb-3">Organisatorische Maßnahmen:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Data Governance Framework etablieren
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Privacy by Design umsetzen
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Regelmäßige Privacy Impact Assessments
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Vendor Risk Management betreiben
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Incident Management Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="incident-management"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-red-600/20 rounded-lg">
                    <AlertTriangle className="h-6 w-6 text-red-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Incident Management in der Cloud</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Cloud-Incident-Management erfordert spezielle Verfahren und Koordination zwischen Cloud Service Provider 
                    und Kunde. ISO 27017 definiert klare Rollen, Verantwortlichkeiten und Prozesse für die effektive 
                    Behandlung von Sicherheitsvorfällen in Cloud-Umgebungen.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5 text-orange-400" />
                        Incident-Kategorien
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                          <h4 className="font-medium text-red-400 mb-2 flex items-center gap-2">
                            <AlertTriangle className="h-4 w-4" />
                            Kritische Sicherheitsvorfälle
                          </h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Datenverletzungen mit PII-Exposition</li>
                            <li>• Kompromittierung von Produktionssystemen</li>
                            <li>• Ransomware-Angriffe</li>
                            <li>• DDoS-Angriffe auf kritische Services</li>
                            <li>• Unbefugter Zugriff auf Kundendaten</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                          <h4 className="font-medium text-yellow-400 mb-2 flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            Mittlere Sicherheitsvorfälle
                          </h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Malware-Infektionen ohne Datenexposition</li>
                            <li>• Fehlkonfigurationen mit Sicherheitsrisiko</li>
                            <li>• Verdächtige Netzwerkaktivitäten</li>
                            <li>• Accounts mit kompromittierten Credentials</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2 flex items-center gap-2">
                            <Info className="h-4 w-4" />
                            Niedrige Sicherheitsvorfälle
                          </h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Policy-Verletzungen ohne Sicherheitsimpact</li>
                            <li>• Fehlgeschlagene Login-Versuche</li>
                            <li>• Spam oder Phishing-Versuche</li>
                            <li>• Nicht-kritische Compliance-Abweichungen</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-green-400" />
                        Response Time Objectives
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                          <h4 className="font-medium text-red-400 mb-2">Kritisch (P1)</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between text-gray-300">
                              <span>Erstreaktion:</span>
                              <span className="text-red-400 font-medium">15 Minuten</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                              <span>Status-Update:</span>
                              <span className="text-red-400 font-medium">1 Stunde</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                              <span>Eskalation:</span>
                              <span className="text-red-400 font-medium">30 Minuten</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                          <h4 className="font-medium text-yellow-400 mb-2">Hoch (P2)</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between text-gray-300">
                              <span>Erstreaktion:</span>
                              <span className="text-yellow-400 font-medium">1 Stunde</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                              <span>Status-Update:</span>
                              <span className="text-yellow-400 font-medium">4 Stunden</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Mittel/Niedrig (P3/P4)</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between text-gray-300">
                              <span>Erstreaktion:</span>
                              <span className="text-blue-400 font-medium">8 Stunden</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                              <span>Status-Update:</span>
                              <span className="text-blue-400 font-medium">24 Stunden</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Incident Response Lifecycle</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Search className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Detection</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• SIEM Alerts</li>
                        <li>• User Reports</li>
                        <li>• Automated Monitoring</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Eye className="h-6 w-6 text-yellow-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Analysis</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Impact Assessment</li>
                        <li>• Root Cause Analysis</li>
                        <li>• Evidence Collection</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="h-6 w-6 text-red-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Containment</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Isolate Systems</li>
                        <li>• Prevent Spread</li>
                        <li>• Preserve Evidence</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <RotateCcw className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Recovery</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• System Restoration</li>
                        <li>• Security Hardening</li>
                        <li>• Service Validation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FileText className="h-6 w-6 text-purple-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Lessons Learned</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Post-Incident Review</li>
                        <li>• Process Improvement</li>
                        <li>• Documentation Update</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Rollen und Verantwortlichkeiten</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <Cloud className="h-5 w-5 text-blue-400" />
                          Cloud Service Provider Verantwortlichkeiten
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-blue-400 mb-2">Infrastruktur-Incidents:</h5>
                            <ul className="space-y-1 text-gray-300 text-sm">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                Physische Sicherheitsvorfälle
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                Netzwerk-Infrastruktur-Angriffe
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                Hypervisor-Kompromittierungen
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                Platform-Service-Ausfälle
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-green-400 mb-2">Kommunikationspflichten:</h5>
                            <ul className="space-y-1 text-gray-300 text-sm">
                              <li className="flex items-start gap-2">
                                <Bell className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                Sofortige Benachrichtigung bei kritischen Incidents
                              </li>
                              <li className="flex items-start gap-2">
                                <Bell className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                Regelmäßige Status-Updates
                              </li>
                              <li className="flex items-start gap-2">
                                <Bell className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                                Incident-Abschlussbericht
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <Users className="h-5 w-5 text-green-400" />
                          Customer Verantwortlichkeiten
                        </h4>
                        <div className="space-y-4">
                          <div>
                            <h5 className="font-medium text-green-400 mb-2">Anwendungs-Incidents:</h5>
                            <ul className="space-y-1 text-gray-300 text-sm">
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                Applikationssicherheitsvorfälle
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                Datenbank-Kompromittierungen
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                IAM-Policy-Verletzungen
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                Data Loss Prevention
                              </li>
                            </ul>
                          </div>
                          
                          <div>
                            <h5 className="font-medium text-blue-400 mb-2">Kooperationspflichten:</h5>
                            <ul className="space-y-1 text-gray-300 text-sm">
                              <li className="flex items-start gap-2">
                                <Share2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                Logs und Forensic Data bereitstellen
                              </li>
                              <li className="flex items-start gap-2">
                                <Share2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                Koordinierte Response-Maßnahmen
                              </li>
                              <li className="flex items-start gap-2">
                                <Share2 className="h-4 w-4 text-purple-400 mt-0.5 flex-shrink-0" />
                                Joint Post-Incident Analysis
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Cloud-spezifische Herausforderungen</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-red-400" />
                        Technische Herausforderungen
                      </h4>
                      <ul className="space-y-3 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Eingeschränkte Forensik:</span>
                            <span className="block text-xs text-gray-400 mt-1">
                              Begrenzter Zugriff auf Low-Level-Systemlogs und Netzwerk-Traffic
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Multi-Tenancy-Komplexität:</span>
                            <span className="block text-xs text-gray-400 mt-1">
                              Isolierung von Incidents zwischen verschiedenen Mandanten
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Ephemere Infrastruktur:</span>
                            <span className="block text-xs text-gray-400 mt-1">
                              Container und VMs können automatisch gelöscht werden
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Geografische Verteilung:</span>
                            <span className="block text-xs text-gray-400 mt-1">
                              Koordination über mehrere Regionen und Rechenzentren
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                        <Scale className="h-5 w-5 text-blue-400" />
                        Rechtliche Herausforderungen
                      </h4>
                      <ul className="space-y-3 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Meldepflichten:</span>
                            <span className="block text-xs text-gray-400 mt-1">
                              DSGVO Art. 33 - 72h-Frist für Aufsichtsbehörden
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Jurisdiktionale Konflikte:</span>
                            <span className="block text-xs text-gray-400 mt-1">
                              Unterschiedliche Gesetze in verschiedenen Ländern
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Vertragliche Klarheit:</span>
                            <span className="block text-xs text-gray-400 mt-1">
                              Eindeutige SLA-Definition für Incident Response
                            </span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium">Dokumentationspflichten:</span>
                            <span className="block text-xs text-gray-400 mt-1">
                              Auditierbare Incident-Response-Dokumentation
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg border border-red-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-400" />
                    Best Practices für Cloud Incident Management
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-red-400 mb-3">Vorbereitung & Prevention:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Automatisierte Threat Detection implementieren
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Incident Response Playbooks entwickeln
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Regelmäßige Tabletop-Exercises durchführen
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Forensic Readiness sicherstellen
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-orange-400 mb-3">Koordination & Kommunikation:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Joint Incident Response Team etablieren
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Gemeinsame Kommunikationskanäle einrichten
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Eskalationsprozeduren definieren
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Post-Incident Review Process etablieren
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Risk Assessment Section */}
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
                  <div className="p-2 bg-yellow-600/20 rounded-lg">
                    <BarChart3 className="h-6 w-6 text-yellow-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Cloud Risk Assessment</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Cloud-Risikobewertung erfordert spezielle Methoden zur Identifikation, Analyse und Bewertung 
                    von Risiken in virtualisierten und geteilten Umgebungen. ISO 27017 definiert systematische 
                    Ansätze für umfassende Cloud-Risikoanalysen.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Target className="h-5 w-5 text-red-400" />
                        Cloud-spezifische Risikokategorien
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                          <h4 className="font-medium text-red-400 mb-2">Technische Risiken</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Multi-Tenancy-Isolation-Failures</li>
                            <li>• Hypervisor-Vulnerabilities</li>
                            <li>• API-Security-Schwachstellen</li>
                            <li>• Container-Escape-Szenarien</li>
                            <li>• Shared-Infrastructure-Angriffe</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                          <h4 className="font-medium text-yellow-400 mb-2">Compliance-Risiken</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Jurisdiktionale Datenschutzverletzungen</li>
                            <li>• Audit-Trail-Inkonsistenzen</li>
                            <li>• Regulatory-Reporting-Gaps</li>
                            <li>• Certification-Scope-Mismatches</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Betriebsrisiken</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Service-Provider-Lock-in</li>
                            <li>• Data-Portability-Limitations</li>
                            <li>• SLA-Performance-Degradation</li>
                            <li>• Disaster-Recovery-Failures</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <PieChart className="h-5 w-5 text-green-400" />
                        Risikobewertungsmatrix
                      </h3>
                      <div className="space-y-4">
                        <div className="overflow-hidden rounded-lg border border-slate-600">
                          <table className="w-full">
                            <thead className="bg-slate-700/50">
                              <tr>
                                <th className="p-3 text-left text-white text-sm font-medium">Wahrscheinlichkeit</th>
                                <th className="p-3 text-center text-white text-sm font-medium">Niedrig</th>
                                <th className="p-3 text-center text-white text-sm font-medium">Mittel</th>
                                <th className="p-3 text-center text-white text-sm font-medium">Hoch</th>
                              </tr>
                            </thead>
                            <tbody className="bg-slate-800/30">
                              <tr>
                                <td className="p-3 text-gray-300 text-sm font-medium">Hoch</td>
                                <td className="p-3 text-center">
                                  <Badge className="bg-yellow-500/20 text-yellow-300">Mittel</Badge>
                                </td>
                                <td className="p-3 text-center">
                                  <Badge className="bg-red-500/20 text-red-300">Hoch</Badge>
                                </td>
                                <td className="p-3 text-center">
                                  <Badge className="bg-red-500/30 text-red-200">Kritisch</Badge>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-3 text-gray-300 text-sm font-medium">Mittel</td>
                                <td className="p-3 text-center">
                                  <Badge className="bg-green-500/20 text-green-300">Niedrig</Badge>
                                </td>
                                <td className="p-3 text-center">
                                  <Badge className="bg-yellow-500/20 text-yellow-300">Mittel</Badge>
                                </td>
                                <td className="p-3 text-center">
                                  <Badge className="bg-red-500/20 text-red-300">Hoch</Badge>
                                </td>
                              </tr>
                              <tr>
                                <td className="p-3 text-gray-300 text-sm font-medium">Niedrig</td>
                                <td className="p-3 text-center">
                                  <Badge className="bg-green-500/20 text-green-300">Niedrig</Badge>
                                </td>
                                <td className="p-3 text-center">
                                  <Badge className="bg-green-500/20 text-green-300">Niedrig</Badge>
                                </td>
                                <td className="p-3 text-center">
                                  <Badge className="bg-yellow-500/20 text-yellow-300">Mittel</Badge>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <h5 className="font-medium text-green-400 mb-2">Akzeptabel (Niedrig):</h5>
                            <p className="text-gray-300 text-xs">Standardkontrollmaßnahmen ausreichend</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-yellow-400 mb-2">Überwacht (Mittel):</h5>
                            <p className="text-gray-300 text-xs">Zusätzliche Schutzmaßnahmen erforderlich</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-red-400 mb-2">Kritisch (Hoch):</h5>
                            <p className="text-gray-300 text-xs">Sofortige Risikominderung notwendig</p>
                          </div>
                          <div>
                            <h5 className="font-medium text-red-300 mb-2">Inakzeptabel:</h5>
                            <p className="text-gray-300 text-xs">Service-Nutzung überdenken</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Risk Assessment Methodology</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Search className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Identifikation</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Asset Discovery</li>
                        <li>• Threat Modeling</li>
                        <li>• Vulnerability Scanning</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <BarChart3 className="h-6 w-6 text-yellow-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Analyse</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Impact Assessment</li>
                        <li>• Likelihood Evaluation</li>
                        <li>• Risk Scoring</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Scale className="h-6 w-6 text-purple-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Bewertung</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Risk Prioritization</li>
                        <li>• Tolerance Mapping</li>
                        <li>• Treatment Planning</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Treatment</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Control Implementation</li>
                        <li>• Risk Transfer</li>
                        <li>• Acceptance Decisions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Compliance Monitoring Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="compliance-monitoring"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-purple-600/20 rounded-lg">
                    <Activity className="h-6 w-6 text-purple-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Compliance Monitoring</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Kontinuierliches Compliance-Monitoring in Cloud-Umgebungen erfordert automatisierte 
                    Überwachungssysteme und regelmäßige Bewertungen. ISO 27017 definiert Frameworks für 
                    die laufende Überwachung der Einhaltung von Sicherheitsstandards.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Monitor className="h-5 w-5 text-blue-400" />
                        Automatisierte Überwachung
                      </h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-900/20 border border-blue-700/50 rounded">
                          <h4 className="font-medium text-blue-400 mb-1">Configuration Drift Detection</h4>
                          <p className="text-gray-300 text-xs">Erkennung von Abweichungen von Security Baselines</p>
                        </div>
                        <div className="p-3 bg-green-900/20 border border-green-700/50 rounded">
                          <h4 className="font-medium text-green-400 mb-1">Policy Compliance Scanning</h4>
                          <p className="text-gray-300 text-xs">Kontinuierliche Überprüfung von Compliance-Regeln</p>
                        </div>
                        <div className="p-3 bg-purple-900/20 border border-purple-700/50 rounded">
                          <h4 className="font-medium text-purple-400 mb-1">Access Pattern Analysis</h4>
                          <p className="text-gray-300 text-xs">Überwachung von Zugriffmustern und Anomalien</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-green-400" />
                        Audit und Reporting
                      </h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded">
                          <h4 className="font-medium text-yellow-400 mb-1">Compliance Dashboards</h4>
                          <p className="text-gray-300 text-xs">Real-time Compliance-Status-Visualisierung</p>
                        </div>
                        <div className="p-3 bg-red-900/20 border border-red-700/50 rounded">
                          <h4 className="font-medium text-red-400 mb-1">Exception Reporting</h4>
                          <p className="text-gray-300 text-xs">Automatische Benachrichtigung bei Verstößen</p>
                        </div>
                        <div className="p-3 bg-blue-900/20 border border-blue-700/50 rounded">
                          <h4 className="font-medium text-blue-400 mb-1">Regulatory Reports</h4>
                          <p className="text-gray-300 text-xs">Automatisierte Compliance-Berichte für Auditoren</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-purple-400" />
                        KPIs und Metriken
                      </h3>
                      <div className="space-y-3">
                        <div className="text-center p-3 bg-slate-600/30 rounded">
                          <div className="text-2xl font-bold text-green-400">98.7%</div>
                          <div className="text-xs text-gray-300">Control Effectiveness</div>
                        </div>
                        <div className="text-center p-3 bg-slate-600/30 rounded">
                          <div className="text-2xl font-bold text-yellow-400">4.2h</div>
                          <div className="text-xs text-gray-300">MTTR Compliance Issues</div>
                        </div>
                        <div className="text-center p-3 bg-slate-600/30 rounded">
                          <div className="text-2xl font-bold text-blue-400">15</div>
                          <div className="text-xs text-gray-300">Open Findings</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Monitoring Framework</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-white mb-4">Technische Controls</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span className="text-gray-300 text-sm">Encryption at Rest</span>
                            <Badge className="bg-green-500/20 text-green-300">✓ Active</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span className="text-gray-300 text-sm">Network Segmentation</span>
                            <Badge className="bg-green-500/20 text-green-300">✓ Active</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span className="text-gray-300 text-sm">Multi-Factor Auth</span>
                            <Badge className="bg-yellow-500/20 text-yellow-300">⚠ Partial</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span className="text-gray-300 text-sm">Logging & Monitoring</span>
                            <Badge className="bg-green-500/20 text-green-300">✓ Active</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-white mb-4">Organisational Controls</h4>
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span className="text-gray-300 text-sm">Security Policies</span>
                            <Badge className="bg-green-500/20 text-green-300">✓ Current</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span className="text-gray-300 text-sm">Staff Training</span>
                            <Badge className="bg-green-500/20 text-green-300">✓ Complete</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span className="text-gray-300 text-sm">Incident Response</span>
                            <Badge className="bg-yellow-500/20 text-yellow-300">⚠ Review Due</Badge>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-slate-600/30 rounded">
                            <span className="text-gray-300 text-sm">Vendor Management</span>
                            <Badge className="bg-green-500/20 text-green-300">✓ Active</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Vendor Management Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="vendor-management"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-blue-600/20 rounded-lg">
                    <Building2 className="h-6 w-6 text-blue-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Cloud Vendor Management</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Effektives Cloud-Vendor-Management ist entscheidend für die Aufrechterhaltung der Sicherheit 
                    und Compliance. ISO 27017 definiert umfassende Anforderungen für die Bewertung, Auswahl 
                    und laufende Überwachung von Cloud Service Providern.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Search className="h-5 w-5 text-blue-400" />
                        Vendor Assessment Kriterien
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Sicherheitszertifizierungen</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• ISO 27001/27017/27018 Zertifizierung</li>
                            <li>• SOC 2 Type II Reports</li>
                            <li>• Cloud Security Alliance (CSA) STAR</li>
                            <li>• FedRAMP Authorization (für US-Dienste)</li>
                            <li>• Branchenspezifische Zertifizierungen</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">Datenschutz & Compliance</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• DSGVO-Compliance und Data Processing Agreements</li>
                            <li>• Data Residency und Transfer Mechanisms</li>
                            <li>• Privacy Impact Assessments</li>
                            <li>• Right to Audit Clauses</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 className="font-medium text-purple-400 mb-2">Technische Sicherheit</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Encryption Standards (at rest/in transit)</li>
                            <li>• Identity & Access Management</li>
                            <li>• Network Security Architecture</li>
                            <li>• Vulnerability Management</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Scale className="h-5 w-5 text-purple-400" />
                        Vendor Risk Scoring
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-green-400">Low Risk (1-3)</h4>
                            <Badge className="bg-green-500/20 text-green-300">Approved</Badge>
                          </div>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Vollständige Zertifizierungen</li>
                            <li>• Transparente Security Controls</li>
                            <li>• Etablierte Marktposition</li>
                            <li>• Umfassende SLAs</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-yellow-400">Medium Risk (4-6)</h4>
                            <Badge className="bg-yellow-500/20 text-yellow-300">Conditional</Badge>
                          </div>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Teilweise Zertifizierungen</li>
                            <li>• Zusätzliche Controls erforderlich</li>
                            <li>• Enhanced Monitoring notwendig</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-red-400">High Risk (7-10)</h4>
                            <Badge className="bg-red-500/20 text-red-300">Restricted</Badge>
                          </div>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Fehlende Zertifizierungen</li>
                            <li>• Unklare Security Practices</li>
                            <li>• Nur für nicht-kritische Workloads</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Vendor Lifecycle Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Search className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Due Diligence</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Security Assessment</li>
                        <li>• Financial Stability</li>
                        <li>• Reference Checks</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FileText className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Contracting</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• SLA Definition</li>
                        <li>• Data Processing Agreements</li>
                        <li>• Right to Audit</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Activity className="h-6 w-6 text-purple-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Monitoring</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Performance Tracking</li>
                        <li>• Security Incidents</li>
                        <li>• Compliance Status</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BarChart3 className="h-6 w-6 text-yellow-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Review</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Annual Assessments</li>
                        <li>• Risk Re-evaluation</li>
                        <li>• Contract Renewals</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <X className="h-6 w-6 text-red-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Termination</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Data Retrieval</li>
                        <li>• Secure Deletion</li>
                        <li>• Knowledge Transfer</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border border-blue-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-400" />
                    Best Practices für Cloud Vendor Management
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-400 mb-3">Strategische Aspekte:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Multi-Vendor-Strategie zur Risikominimierung
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Regelmäßige Vendor Risk Assessments
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Exit-Strategien und Data Portability
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Continuous Security Monitoring
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-purple-400 mb-3">Operative Umsetzung:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Automated Compliance Monitoring
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Vendor Performance Dashboards
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Incident Response Coordination
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Vendor Relationship Management
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Business Continuity Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="business-continuity"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <RotateCcw className="h-6 w-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Business Continuity in der Cloud</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Cloud-Business-Continuity erfordert spezielle Strategien für Disaster Recovery, Backup-Management 
                    und Service-Resilienz. ISO 27017 definiert umfassende Anforderungen für die Aufrechterhaltung 
                    kritischer Geschäftsprozesse in Cloud-Umgebungen.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Clock className="h-5 w-5 text-blue-400" />
                        Recovery Time Objectives (RTO)
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-red-900/20 border border-red-700/50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-red-400">Kritische Services</h4>
                            <Badge className="bg-red-500/20 text-red-300">Tier 1</Badge>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between text-gray-300">
                              <span>RTO:</span>
                              <span className="text-red-400 font-medium">&lt; 1 Stunde</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                              <span>RPO:</span>
                              <span className="text-red-400 font-medium">&lt; 15 Minuten</span>
                            </div>
                            <p className="text-gray-400 text-xs mt-2">
                              Mission-kritische Systeme, die sofortige Wiederherstellung erfordern
                            </p>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-yellow-400">Wichtige Services</h4>
                            <Badge className="bg-yellow-500/20 text-yellow-300">Tier 2</Badge>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between text-gray-300">
                              <span>RTO:</span>
                              <span className="text-yellow-400 font-medium">&lt; 4 Stunden</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                              <span>RPO:</span>
                              <span className="text-yellow-400 font-medium">&lt; 1 Stunde</span>
                            </div>
                            <p className="text-gray-400 text-xs mt-2">
                              Geschäftskritische Systeme mit moderater Toleranz
                            </p>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <h4 className="font-medium text-blue-400">Standard Services</h4>
                            <Badge className="bg-blue-500/20 text-blue-300">Tier 3</Badge>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between text-gray-300">
                              <span>RTO:</span>
                              <span className="text-blue-400 font-medium">&lt; 24 Stunden</span>
                            </div>
                            <div className="flex justify-between text-gray-300">
                              <span>RPO:</span>
                              <span className="text-blue-400 font-medium">&lt; 8 Stunden</span>
                            </div>
                            <p className="text-gray-400 text-xs mt-2">
                              Unterstützende Systeme mit höherer Toleranz
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Database className="h-5 w-5 text-green-400" />
                        Cloud-Backup-Strategien
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">3-2-1 Backup Rule</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              3 Kopien der Daten (Original + 2 Backups)
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              2 verschiedene Speichermedien
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                              1 Offsite/Cloud-Backup
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Multi-Region Replication</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Cross-Region Disaster Recovery</li>
                            <li>• Automated Failover Mechanisms</li>
                            <li>• Data Consistency Validation</li>
                            <li>• Network Latency Optimization</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 className="font-medium text-purple-400 mb-2">Immutable Backups</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Ransomware-Protection</li>
                            <li>• Legal Hold Capabilities</li>
                            <li>• Compliance Retention Periods</li>
                            <li>• Write-Once-Read-Many (WORM)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Disaster Recovery Planning</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="h-6 w-6 text-red-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Risk Assessment</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Threat Identification</li>
                        <li>• Impact Analysis</li>
                        <li>• Vulnerability Mapping</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FileText className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">DR Strategy</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Recovery Procedures</li>
                        <li>• Failover Automation</li>
                        <li>• Resource Allocation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Testing</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• DR Simulations</li>
                        <li>• Failover Tests</li>
                        <li>• Recovery Validation</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <RotateCcw className="h-6 w-6 text-purple-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Improvement</h4>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Lessons Learned</li>
                        <li>• Process Updates</li>
                        <li>• Continuous Enhancement</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Cloud-spezifische BC/DR Herausforderungen</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-red-400" />
                          Technische Herausforderungen
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-red-900/20 border border-red-700/50 rounded">
                            <h5 className="font-medium text-red-400 mb-1">Service Dependencies</h5>
                            <p className="text-gray-300 text-xs">
                              Komplexe Abhängigkeiten zwischen Cloud-Services erschweren koordinierte Recovery
                            </p>
                          </div>
                          <div className="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded">
                            <h5 className="font-medium text-yellow-400 mb-1">Data Consistency</h5>
                            <p className="text-gray-300 text-xs">
                              Gewährleistung der Datenkonsistenz bei Multi-Region-Deployments
                            </p>
                          </div>
                          <div className="p-3 bg-blue-900/20 border border-blue-700/50 rounded">
                            <h5 className="font-medium text-blue-400 mb-1">Network Connectivity</h5>
                            <p className="text-gray-300 text-xs">
                              Abhängigkeit von Internet-Konnektivität für Cloud-Zugriff
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <Scale className="h-5 w-5 text-blue-400" />
                          Organisatorische Herausforderungen
                        </h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-purple-900/20 border border-purple-700/50 rounded">
                            <h5 className="font-medium text-purple-400 mb-1">Shared Responsibility</h5>
                            <p className="text-gray-300 text-xs">
                              Klare Abgrenzung der BC/DR-Verantwortlichkeiten zwischen CSP und Kunde
                            </p>
                          </div>
                          <div className="p-3 bg-green-900/20 border border-green-700/50 rounded">
                            <h5 className="font-medium text-green-400 mb-1">SLA Coordination</h5>
                            <p className="text-gray-300 text-xs">
                              Abstimmung eigener RTO/RPO mit CSP-Service-Level-Agreements
                            </p>
                          </div>
                          <div className="p-3 bg-orange-900/20 border border-orange-700/50 rounded">
                            <h5 className="font-medium text-orange-400 mb-1">Testing Limitations</h5>
                            <p className="text-gray-300 text-xs">
                              Eingeschränkte Möglichkeiten für realistische DR-Tests in Cloud-Umgebungen
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Training & Awareness Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="training-awareness"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-orange-600/20 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-orange-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Cloud Security Training & Awareness</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Effektive Cloud-Sicherheit erfordert umfassende Schulungs- und Awareness-Programme für alle 
                    Stakeholder. ISO 27017 definiert strukturierte Ansätze für die Entwicklung von Cloud-Security-Kompetenzen 
                    und die Förderung des Sicherheitsbewusstseins.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Users className="h-5 w-5 text-blue-400" />
                        Zielgruppen-spezifische Programme
                      </h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-900/20 border border-blue-700/50 rounded">
                          <h4 className="font-medium text-blue-400 mb-1">IT-Administratoren</h4>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Cloud-Architektur-Sicherheit</li>
                            <li>• Identity & Access Management</li>
                            <li>• Security Monitoring Tools</li>
                            <li>• Incident Response Procedures</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 bg-green-900/20 border border-green-700/50 rounded">
                          <h4 className="font-medium text-green-400 mb-1">Entwickler</h4>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Secure Coding Practices</li>
                            <li>• API Security</li>
                            <li>• Container Security</li>
                            <li>• DevSecOps Integration</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 bg-purple-900/20 border border-purple-700/50 rounded">
                          <h4 className="font-medium text-purple-400 mb-1">Management</h4>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Cloud Risk Management</li>
                            <li>• Compliance Requirements</li>
                            <li>• Vendor Management</li>
                            <li>• Business Continuity</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 bg-yellow-900/20 border border-yellow-700/50 rounded">
                          <h4 className="font-medium text-yellow-400 mb-1">End Users</h4>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Cloud Service Usage</li>
                            <li>• Data Classification</li>
                            <li>• Phishing Awareness</li>
                            <li>• Incident Reporting</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-green-400" />
                        Trainingsmodule
                      </h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-slate-600/30 rounded">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-white text-sm">Cloud Fundamentals</h4>
                            <Badge className="bg-green-500/20 text-green-300 text-xs">8h</Badge>
                          </div>
                          <p className="text-gray-300 text-xs">Grundlagen der Cloud-Sicherheit und Shared Responsibility</p>
                        </div>
                        
                        <div className="p-3 bg-slate-600/30 rounded">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-white text-sm">Data Protection</h4>
                            <Badge className="bg-blue-500/20 text-blue-300 text-xs">6h</Badge>
                          </div>
                          <p className="text-gray-300 text-xs">Verschlüsselung, Klassifizierung und Datenschutz</p>
                        </div>
                        
                        <div className="p-3 bg-slate-600/30 rounded">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-white text-sm">Threat Landscape</h4>
                            <Badge className="bg-yellow-500/20 text-yellow-300 text-xs">4h</Badge>
                          </div>
                          <p className="text-gray-300 text-xs">Cloud-spezifische Bedrohungen und Angriffsvektoren</p>
                        </div>
                        
                        <div className="p-3 bg-slate-600/30 rounded">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-white text-sm">Compliance & Audit</h4>
                            <Badge className="bg-purple-500/20 text-purple-300 text-xs">5h</Badge>
                          </div>
                          <p className="text-gray-300 text-xs">Regulatory Requirements und Audit-Vorbereitung</p>
                        </div>
                        
                        <div className="p-3 bg-slate-600/30 rounded">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-white text-sm">Incident Response</h4>
                            <Badge className="bg-red-500/20 text-red-300 text-xs">6h</Badge>
                          </div>
                          <p className="text-gray-300 text-xs">Cloud-Incident-Management und Forensik</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-purple-400" />
                        Zertifizierungen & Skills
                      </h3>
                      <div className="space-y-3">
                        <div className="p-3 bg-blue-900/20 border border-blue-700/50 rounded">
                          <h4 className="font-medium text-blue-400 mb-1">Cloud Security</h4>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• CCSP (Certified Cloud Security Professional)</li>
                            <li>• AWS Certified Security - Specialty</li>
                            <li>• Azure Security Engineer Associate</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 bg-green-900/20 border border-green-700/50 rounded">
                          <h4 className="font-medium text-green-400 mb-1">Compliance & Risk</h4>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• CISA (Certified Information Systems Auditor)</li>
                            <li>• CRISC (Certified in Risk and Information Systems Control)</li>
                            <li>• ISO 27001 Lead Auditor</li>
                          </ul>
                        </div>
                        
                        <div className="p-3 bg-purple-900/20 border border-purple-700/50 rounded">
                          <h4 className="font-medium text-purple-400 mb-1">Technical Skills</h4>
                          <ul className="text-gray-300 text-xs space-y-1">
                            <li>• Container Security (CKS)</li>
                            <li>• DevSecOps Foundations</li>
                            <li>• Cloud Penetration Testing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Continuous Awareness Programme</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Mail className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Security Updates</h4>
                      <p className="text-gray-300 text-sm">Monatliche Newsletter mit aktuellen Cloud-Security-Trends</p>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <AlertTriangle className="h-6 w-6 text-red-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Phishing Simulations</h4>
                      <p className="text-gray-300 text-sm">Quartalweise Cloud-fokussierte Phishing-Tests</p>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Users className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Lunch & Learn</h4>
                      <p className="text-gray-300 text-sm">Wöchentliche kurze Sessions zu Cloud-Security-Topics</p>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6 text-center">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="h-6 w-6 text-purple-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Tabletop Exercises</h4>
                      <p className="text-gray-300 text-sm">Jährliche Cloud-Incident-Response-Simulationen</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Audit & Assessment Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
            data-section="audit-assessment"
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-indigo-600/20 rounded-lg">
                    <Search className="h-6 w-6 text-indigo-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Cloud Security Audit & Assessment</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Cloud-Security-Audits erfordern spezialisierte Methoden und Tools für die Bewertung von 
                    virtualisierten Umgebungen. ISO 27017 definiert umfassende Audit-Frameworks für die 
                    systematische Evaluation von Cloud-Sicherheitskontrollen.
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-blue-400" />
                        Audit-Kategorien
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-blue-900/20 border border-blue-700/50 rounded-lg">
                          <h4 className="font-medium text-blue-400 mb-2">Compliance Audits</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• ISO 27001/27017 Zertifizierungsaudits</li>
                            <li>• SOC 2 Type II Assessments</li>
                            <li>• DSGVO-Compliance-Bewertungen</li>
                            <li>• Branchenspezifische Audits (PCI DSS, HIPAA)</li>
                            <li>• Cloud Security Alliance (CSA) CAIQ</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-green-900/20 border border-green-700/50 rounded-lg">
                          <h4 className="font-medium text-green-400 mb-2">Technical Security Assessments</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Cloud Infrastructure Penetration Testing</li>
                            <li>• API Security Assessments</li>
                            <li>• Container Security Audits</li>
                            <li>• Identity & Access Management Reviews</li>
                            <li>• Data Encryption Validation</li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-purple-900/20 border border-purple-700/50 rounded-lg">
                          <h4 className="font-medium text-purple-400 mb-2">Operational Audits</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Change Management Processes</li>
                            <li>• Incident Response Capabilities</li>
                            <li>• Backup & Recovery Procedures</li>
                            <li>• Vendor Management Practices</li>
                            <li>• Security Monitoring Effectiveness</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                        <Settings className="h-5 w-5 text-green-400" />
                        Cloud-spezifische Audit-Tools
                      </h3>
                      <div className="space-y-4">
                        <div className="p-4 bg-slate-600/30 rounded-lg">
                          <h4 className="font-medium text-white mb-2">Automated Assessment Tools</h4>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="p-2 bg-blue-900/20 rounded text-center">
                              <div className="font-medium text-blue-400">AWS Config</div>
                              <div className="text-gray-400 text-xs">Compliance Monitoring</div>
                            </div>
                            <div className="p-2 bg-blue-900/20 rounded text-center">
                              <div className="font-medium text-blue-400">Azure Policy</div>
                              <div className="text-gray-400 text-xs">Governance & Compliance</div>
                            </div>
                            <div className="p-2 bg-green-900/20 rounded text-center">
                              <div className="font-medium text-green-400">Cloud Custodian</div>
                              <div className="text-gray-400 text-xs">Policy Engine</div>
                            </div>
                            <div className="p-2 bg-purple-900/20 rounded text-center">
                              <div className="font-medium text-purple-400">Prowler</div>
                              <div className="text-gray-400 text-xs">Security Assessment</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-slate-600/30 rounded-lg">
                          <h4 className="font-medium text-white mb-2">Cloud Security Posture Management</h4>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div className="p-2 bg-yellow-900/20 rounded text-center">
                              <div className="font-medium text-yellow-400">Prisma Cloud</div>
                              <div className="text-gray-400 text-xs">Multi-Cloud Security</div>
                            </div>
                            <div className="p-2 bg-red-900/20 rounded text-center">
                              <div className="font-medium text-red-400">Dome9</div>
                              <div className="text-gray-400 text-xs">Compliance Automation</div>
                            </div>
                            <div className="p-2 bg-indigo-900/20 rounded text-center">
                              <div className="font-medium text-indigo-400">CloudSploit</div>
                              <div className="text-gray-400 text-xs">Security Scanning</div>
                            </div>
                            <div className="p-2 bg-pink-900/20 rounded text-center">
                              <div className="font-medium text-pink-400">Lacework</div>
                              <div className="text-gray-400 text-xs">Cloud Workload Protection</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-4 bg-slate-600/30 rounded-lg">
                          <h4 className="font-medium text-white mb-2">Evidence Collection & Management</h4>
                          <ul className="text-gray-300 text-sm space-y-1">
                            <li>• Automated Screenshot & Log Collection</li>
                            <li>• Configuration Snapshots</li>
                            <li>• Audit Trail Preservation</li>
                            <li>• Chain of Custody Documentation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Audit Lifecycle Management</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Target className="h-6 w-6 text-blue-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Planning</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Scope Definition</li>
                        <li>• Risk Assessment</li>
                        <li>• Resource Planning</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Database className="h-6 w-6 text-green-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Execution</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Evidence Collection</li>
                        <li>• Control Testing</li>
                        <li>• Gap Analysis</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BarChart3 className="h-6 w-6 text-yellow-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Analysis</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Finding Assessment</li>
                        <li>• Risk Evaluation</li>
                        <li>• Impact Analysis</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FileText className="h-6 w-6 text-purple-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Reporting</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Executive Summary</li>
                        <li>• Detailed Findings</li>
                        <li>• Recommendations</li>
                      </ul>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-4 text-center">
                      <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-6 w-6 text-red-400" />
                      </div>
                      <h4 className="font-medium text-white mb-2">Follow-up</h4>
                      <ul className="text-gray-300 text-xs space-y-1">
                        <li>• Remediation Tracking</li>
                        <li>• Re-testing</li>
                        <li>• Closure Validation</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-indigo-900/20 to-purple-900/20 rounded-lg border border-indigo-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-400" />
                    Best Practices für Cloud Security Audits
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-indigo-400 mb-3">Audit Vorbereitung:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Kontinuierliche Audit-Readiness sicherstellen
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Automated Evidence Collection implementieren
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Clear Audit Trails etablieren
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Documentation Standards definieren
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-purple-400 mb-3">Audit Durchführung:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Risk-basierte Audit-Ansätze nutzen
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Cloud-native Tools einsetzen
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Shared Responsibility Model berücksichtigen
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Continuous Monitoring etablieren
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Implementation Section */}
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
                  <div className="p-2 bg-green-600/20 rounded-lg">
                    <Route className="h-6 w-6 text-green-400" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">ISO 27017 Implementierungsroadmap</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Die systematische Implementierung von ISO 27017 erfordert eine strukturierte Herangehensweise 
                    mit klaren Phasen, Meilensteinen und Erfolgsmessungen. Diese Roadmap bietet einen praktischen 
                    Leitfaden für die erfolgreiche Umsetzung.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-6">Implementierungsphasen</h3>
                    <div className="space-y-6">
                      <div className="relative">
                        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-green-500"></div>
                        
                        <div className="flex items-start gap-4 mb-8">
                          <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-blue-400 font-bold">1</span>
                          </div>
                          <div className="flex-1">
                            <div className="bg-slate-700/30 rounded-lg p-6">
                              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <Target className="h-5 w-5 text-blue-400" />
                                Vorbereitung und Planung (4-6 Wochen)
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="font-medium text-blue-400 mb-2">Hauptaktivitäten:</h5>
                                  <ul className="text-gray-300 text-sm space-y-1">
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Management-Commitment sicherstellen
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Project Team und Steering Committee bilden
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Cloud-Infrastruktur-Inventar erstellen
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Gap-Analysis durchführen
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-medium text-green-400 mb-2">Deliverables:</h5>
                                  <ul className="text-gray-300 text-sm space-y-1">
                                    <li>• Project Charter</li>
                                    <li>• Cloud Asset Inventory</li>
                                    <li>• Current State Assessment</li>
                                    <li>• Implementation Roadmap</li>
                                    <li>• Budget und Ressourcenplan</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4 mb-8">
                          <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-purple-400 font-bold">2</span>
                          </div>
                          <div className="flex-1">
                            <div className="bg-slate-700/30 rounded-lg p-6">
                              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <FileText className="h-5 w-5 text-purple-400" />
                                Policy und Governance (6-8 Wochen)
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="font-medium text-purple-400 mb-2">Hauptaktivitäten:</h5>
                                  <ul className="text-gray-300 text-sm space-y-1">
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Cloud Security Policy entwickeln
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Shared Responsibility Matrix definieren
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Vendor Management Framework
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Risk Management Prozesse
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-medium text-green-400 mb-2">Deliverables:</h5>
                                  <ul className="text-gray-300 text-sm space-y-1">
                                    <li>• Cloud Security Policy</li>
                                    <li>• Governance Framework</li>
                                    <li>• Risk Assessment Methodology</li>
                                    <li>• Vendor Assessment Criteria</li>
                                    <li>• Incident Response Plan</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4 mb-8">
                          <div className="w-12 h-12 bg-yellow-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-yellow-400 font-bold">3</span>
                          </div>
                          <div className="flex-1">
                            <div className="bg-slate-700/30 rounded-lg p-6">
                              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <Settings className="h-5 w-5 text-yellow-400" />
                                Technische Implementierung (12-16 Wochen)
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="font-medium text-yellow-400 mb-2">Hauptaktivitäten:</h5>
                                  <ul className="text-gray-300 text-sm space-y-1">
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Cloud Controls implementieren
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Security Monitoring aufbauen
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Identity & Access Management
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Data Protection Maßnahmen
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-medium text-green-400 mb-2">Deliverables:</h5>
                                  <ul className="text-gray-300 text-sm space-y-1">
                                    <li>• Implemented Security Controls</li>
                                    <li>• Monitoring & Logging System</li>
                                    <li>• IAM Configuration</li>
                                    <li>• Encryption Implementation</li>
                                    <li>• Backup & Recovery System</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4 mb-8">
                          <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-green-400 font-bold">4</span>
                          </div>
                          <div className="flex-1">
                            <div className="bg-slate-700/30 rounded-lg p-6">
                              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <GraduationCap className="h-5 w-5 text-green-400" />
                                Training und Awareness (4-6 Wochen)
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="font-medium text-green-400 mb-2">Hauptaktivitäten:</h5>
                                  <ul className="text-gray-300 text-sm space-y-1">
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Schulungsprogramme entwickeln
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Team-spezifische Trainings
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Awareness-Kampagnen starten
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Tabletop Exercises durchführen
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-medium text-green-400 mb-2">Deliverables:</h5>
                                  <ul className="text-gray-300 text-sm space-y-1">
                                    <li>• Training Materials</li>
                                    <li>• Awareness Programme</li>
                                    <li>• Competency Assessments</li>
                                    <li>• Exercise Documentation</li>
                                    <li>• Knowledge Base</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-red-400 font-bold">5</span>
                          </div>
                          <div className="flex-1">
                            <div className="bg-slate-700/30 rounded-lg p-6">
                              <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <Award className="h-5 w-5 text-red-400" />
                                Testing und Zertifizierung (8-12 Wochen)
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="font-medium text-red-400 mb-2">Hauptaktivitäten:</h5>
                                  <ul className="text-gray-300 text-sm space-y-1">
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Internal Audit durchführen
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Gap-Remediation
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Certification Audit vorbereiten
                                    </li>
                                    <li className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                                      Continuous Improvement etablieren
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="font-medium text-green-400 mb-2">Deliverables:</h5>
                                  <ul className="text-gray-300 text-sm space-y-1">
                                    <li>• Internal Audit Report</li>
                                    <li>• Corrective Action Plans</li>
                                    <li>• Evidence Documentation</li>
                                    <li>• Certification Readiness</li>
                                    <li>• Improvement Roadmap</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Kritische Erfolgsfaktoren</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <Star className="h-5 w-5 text-yellow-400" />
                          Organisatorische Faktoren
                        </h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Executive Sponsorship:</span>
                              <span className="block text-xs text-gray-400 mt-1">
                                Sichtbare Unterstützung und ausreichende Ressourcen vom Management
                              </span>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Cross-functional Team:</span>
                              <span className="block text-xs text-gray-400 mt-1">
                                Einbeziehung aller relevanten Stakeholder und Fachbereiche
                              </span>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Change Management:</span>
                              <span className="block text-xs text-gray-400 mt-1">
                                Strukturierte Begleitung der organisatorischen Veränderungen
                              </span>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Kompetenzaufbau:</span>
                              <span className="block text-xs text-gray-400 mt-1">
                                Kontinuierliche Weiterbildung und Skill-Entwicklung
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <Settings className="h-5 w-5 text-blue-400" />
                          Technische Faktoren
                        </h4>
                        <ul className="space-y-3 text-gray-300 text-sm">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Automation-First Ansatz:</span>
                              <span className="block text-xs text-gray-400 mt-1">
                                Maximale Automatisierung von Security Controls und Monitoring
                              </span>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Scalable Architecture:</span>
                              <span className="block text-xs text-gray-400 mt-1">
                                Skalierbare und zukunftsfähige Sicherheitsarchitektur
                              </span>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Integration Strategy:</span>
                              <span className="block text-xs text-gray-400 mt-1">
                                Nahtlose Integration in bestehende IT-Landschaft
                              </span>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-medium">Performance Monitoring:</span>
                              <span className="block text-xs text-gray-400 mt-1">
                                Kontinuierliche Überwachung und Optimierung der Performance
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certification Section */}
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
                  <h2 className="text-3xl font-bold text-white">ISO 27017 Zertifizierungsprozess</h2>
                </div>
                
                <div className="mb-8">
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Die ISO 27017 Zertifizierung ist ein strukturierter Prozess, der die Compliance mit Cloud-Security-Standards 
                    formal bestätigt. Diese Sektion führt durch den gesamten Zertifizierungsprozess von der Vorbereitung 
                    bis zur Aufrechterhaltung des Zertifikats.
                  </p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-6">Zertifizierungsphasen</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <div className="w-12 h-12 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <FileText className="h-6 w-6 text-blue-400" />
                        </div>
                        <h4 className="font-medium text-white text-center mb-3">Stage 1 Audit</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between text-gray-300">
                            <span>Dauer:</span>
                            <span className="text-blue-400">1-2 Tage</span>
                          </div>
                          <div className="flex justify-between text-gray-300">
                            <span>Typ:</span>
                            <span className="text-blue-400">Remote/Onsite</span>
                          </div>
                          <p className="text-gray-400 text-xs mt-3">
                            Dokumentenprüfung und Bewertung der Audit-Bereitschaft
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <div className="w-12 h-12 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Search className="h-6 w-6 text-green-400" />
                        </div>
                        <h4 className="font-medium text-white text-center mb-3">Stage 2 Audit</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between text-gray-300">
                            <span>Dauer:</span>
                            <span className="text-green-400">3-5 Tage</span>
                          </div>
                          <div className="flex justify-between text-gray-300">
                            <span>Typ:</span>
                            <span className="text-green-400">Onsite</span>
                          </div>
                          <p className="text-gray-400 text-xs mt-3">
                            Detaillierte Implementierungsprüfung und Control-Testing
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Award className="h-6 w-6 text-purple-400" />
                        </div>
                        <h4 className="font-medium text-white text-center mb-3">Zertifikat</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between text-gray-300">
                            <span>Gültigkeit:</span>
                            <span className="text-purple-400">3 Jahre</span>
                          </div>
                          <div className="flex justify-between text-gray-300">
                            <span>Surveillance:</span>
                            <span className="text-purple-400">Jährlich</span>
                          </div>
                          <p className="text-gray-400 text-xs mt-3">
                            Zertifikat-Ausstellung und jährliche Überwachungsaudits
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Audit-Vorbereitung Checkliste</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <FileText className="h-5 w-5 text-blue-400" />
                          Dokumentation
                        </h4>
                        <div className="space-y-3">
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span className="text-gray-300 text-sm">Information Security Policy aktualisiert</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span className="text-gray-300 text-sm">Cloud Security Procedures dokumentiert</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span className="text-gray-300 text-sm">Risk Assessment Reports vollständig</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span className="text-gray-300 text-sm">Vendor Management Documentation</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span className="text-gray-300 text-sm">Incident Response Plans aktuell</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span className="text-gray-300 text-sm">Business Continuity Plans getestet</span>
                          </label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-slate-700/30 rounded-lg p-6">
                        <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                          <Settings className="h-5 w-5 text-green-400" />
                          Technische Evidenz
                        </h4>
                        <div className="space-y-3">
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span className="text-gray-300 text-sm">Cloud Configuration Screenshots</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span className="text-gray-300 text-sm">Monitoring und Logging Berichte</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span className="text-gray-300 text-sm">Vulnerability Scan Results</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span className="text-gray-300 text-sm">Backup und Recovery Tests</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span className="text-gray-300 text-sm">Access Control Matrices</span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded" />
                            <span className="text-gray-300 text-sm">Encryption Implementation Proof</span>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Zertifizierungskosten und Timeline</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                        <Euro className="h-5 w-5 text-green-400" />
                        Kostenübersicht
                      </h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-slate-600/30 rounded">
                          <span className="text-gray-300">Stage 1 Audit</span>
                          <span className="text-green-400 font-medium">€5,000 - €8,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-600/30 rounded">
                          <span className="text-gray-300">Stage 2 Audit</span>
                          <span className="text-green-400 font-medium">€12,000 - €18,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-600/30 rounded">
                          <span className="text-gray-300">Jährliche Surveillance</span>
                          <span className="text-green-400 font-medium">€4,000 - €6,000</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-blue-900/20 border border-blue-700/50 rounded">
                          <span className="text-white font-medium">Gesamtkosten (3 Jahre)</span>
                          <span className="text-blue-400 font-bold">€29,000 - €44,000</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700/30 rounded-lg p-6">
                      <h4 className="text-lg font-medium text-white mb-4 flex items-center gap-2">
                        <Calendar className="h-5 w-5 text-blue-400" />
                        Timeline
                      </h4>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center p-3 bg-slate-600/30 rounded">
                          <span className="text-gray-300">Vorbereitung</span>
                          <span className="text-blue-400 font-medium">6-12 Monate</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-600/30 rounded">
                          <span className="text-gray-300">Stage 1 Audit</span>
                          <span className="text-blue-400 font-medium">2-4 Wochen</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-600/30 rounded">
                          <span className="text-gray-300">Gap Remediation</span>
                          <span className="text-blue-400 font-medium">4-8 Wochen</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-slate-600/30 rounded">
                          <span className="text-gray-300">Stage 2 Audit</span>
                          <span className="text-blue-400 font-medium">2-3 Wochen</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-green-900/20 border border-green-700/50 rounded">
                          <span className="text-white font-medium">Zertifikat-Ausstellung</span>
                          <span className="text-green-400 font-bold">4-6 Wochen</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-900/20 to-green-900/20 rounded-lg border border-yellow-700/50">
                  <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-400" />
                    Erfolgreiche Zertifizierung: Best Practices
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-yellow-400 mb-3">Vor dem Audit:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Mock-Audits mit internen oder externen Auditoren durchführen
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Alle Evidenzen zentral sammeln und organisieren
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Key Personnel für Interviews vorbereiten
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Audit-Timeline und Logistik detailliert planen
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-green-400 mb-3">Nach der Zertifizierung:</h4>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Continuous Monitoring System etablieren
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Regelmäßige interne Audits durchführen
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Management Review Meetings etablieren
                        </li>
                        <li className="flex items-start gap-2">
                          <Star className="h-4 w-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                          Kontinuierliche Verbesserungen umsetzen
                        </li>
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

export default Iso27017Guide;