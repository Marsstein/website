import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Lock, 
  Shield, 
  FileText, 
  Users,
  Building2,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen,
  Globe,
  Euro,
  Calendar,
  Star,
  Clock,
  Target,
  Lightbulb,
  Scale,
  Eye,
  Gavel,
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
  Server
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DsgvoGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [activeNavSection, setActiveNavSection] = useState<string>('ueberblick');
  const [completedSections, setCompletedSections] = useState<string[]>([]);
  const [readingProgress, setReadingProgress] = useState(0);
  const [bookmarked, setBookmarked] = useState(false);
  const [expandedControls, setExpandedControls] = useState<{[key: string]: boolean}>({});
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});
  const [showQuickActions, setShowQuickActions] = useState(false);
  const [selectedTab, setSelectedTab] = useState('overview');
  
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });

  // Scroll to section function
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

  // Handle initial load with hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveNavSection(hash);
      }, 100);
    }
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));
      
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const section = sectionElements[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveNavSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSectionComplete = (sectionId: string) => {
    setCompletedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const toggleControlExpanded = (controlId: string) => {
    setExpandedControls(prev => ({
      ...prev,
      [controlId]: !prev[controlId]
    }));
  };

  const sections = [
    { id: 'ueberblick', title: 'Überblick', icon: Eye, readTime: '8 Min' },
    { id: 'geschichte', title: 'Geschichte & Evolution', icon: Calendar, readTime: '12 Min' },
    { id: 'grundlagen', title: 'DSGVO-Grundlagen', icon: BookOpen, readTime: '15 Min' },
    { id: 'rechtlicher-rahmen', title: 'Rechtlicher Rahmen', icon: Scale, readTime: '10 Min' },
    { id: 'grundprinzipien', title: 'Grundprinzipien', icon: CheckCircle2, readTime: '18 Min' },
    { id: 'betroffenenrechte', title: 'Betroffenenrechte', icon: Users, readTime: '25 Min' },
    { id: 'datenschutzfolgen', title: 'Datenschutz-Folgenabschätzung', icon: AlertTriangle, readTime: '20 Min' },
    { id: 'implementierung', title: 'Implementierung', icon: Settings, readTime: '30 Min' },
    { id: 'dokumentation', title: 'Dokumentation', icon: FileText, readTime: '18 Min' },
    { id: 'audit-bewertung', title: 'Audit & Bewertung', icon: Search, readTime: '22 Min' },
    { id: 'technische-massnahmen', title: 'Technische Maßnahmen', icon: Shield, readTime: '25 Min' },
    { id: 'organisatorische-massnahmen', title: 'Organisatorische Maßnahmen', icon: Building2, readTime: '20 Min' },
    { id: 'branchenspezifika', title: 'Branchenspezifika', icon: Factory, readTime: '16 Min' },
    { id: 'bussgelder-sanktionen', title: 'Bußgelder & Sanktionen', icon: Euro, readTime: '14 Min' },
    { id: 'vorteile-compliance', title: 'Vorteile & Compliance', icon: TrendingUp, readTime: '12 Min' },
    { id: 'fallstudien', title: 'Fallstudien', icon: BookOpen, readTime: '20 Min' },
    { id: 'tools-software', title: 'Tools & Software', icon: Database, readTime: '10 Min' },
    { id: 'ressourcen', title: 'Ressourcen', icon: Download, readTime: '8 Min' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Header />
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Hero Section */}
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent opacity-40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent opacity-40"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-20"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 text-emerald-400 mb-8 backdrop-blur-sm"
            >
              <Lock className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wider">DSGVO/GDPR Compliance Guide</span>
              <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">2024 Edition</Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white relative z-10"
            >
              <span className="block">Datenschutz-Grundverordnung</span>
              <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent block mt-4">
                DSGVO Excellence
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-slate-300 mb-10 max-w-4xl mx-auto leading-relaxed"
            >
              Der ultimative Leitfaden zur EU-Datenschutz-Grundverordnung mit praxisnahen Beispielen, 
              detaillierten Checklisten und bewährten Implementierungsstrategien für maximale Compliance.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <Link to="/regulierung/dsgvo">
                <Button size="lg" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 group px-8 py-4 text-lg shadow-lg hover:shadow-emerald-500/25 transition-all duration-300">
                  <BookOpen className="mr-3 h-5 w-5" />
                  DSGVO Produktseite
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-2 transition-transform" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="group border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-emerald-500/50 px-8 py-4 text-lg transition-all duration-300"
              >
                <Download className="mr-3 h-5 w-5 group-hover:text-emerald-400 transition-colors" />
                DSGVO-Checkliste (PDF)
              </Button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400"
            >
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400" />
                <span>18 detaillierte Abschnitte</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-400" />
                <span>Praktische Checklisten</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="h-4 w-4 text-blue-400" />
                <span>PDF-Export verfügbar</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-purple-400" />
                <span>~6h Lesezeit</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Main Content Container */}
      <main className="py-20" ref={contentRef}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-8">
            {/* Sidebar Navigation */}
            <div className="hidden lg:block w-64 flex-shrink-0">
              <div className="sticky top-32 bg-slate-800/50 backdrop-blur-sm rounded-xl p-6">
                <h3 className="text-lg font-bold text-white mb-4">Inhaltsverzeichnis</h3>
                <div className="space-y-2">
                  {sections.map((section) => {
                    const IconComponent = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => scrollToSection(section.id)}
                        className={cn(
                          "w-full text-left px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-3 group",
                          activeNavSection === section.id
                            ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                            : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                        )}
                      >
                        <div className={cn(
                          "p-1.5 rounded-lg",
                          activeNavSection === section.id
                            ? "bg-emerald-500/20"
                            : "bg-slate-700/50 group-hover:bg-slate-600/50"
                        )}>
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="truncate font-medium">{section.title}</div>
                          <div className="text-xs text-slate-500">{section.readTime}</div>
                        </div>
                        {completedSections.includes(section.id) && (
                          <CheckCircle className="h-4 w-4 text-emerald-400 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 lg:ml-8">
              <section id="ueberblick" className="space-y-8 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-white">DSGVO Überblick</h2>
                        <Button
                          onClick={() => handleSectionComplete('ueberblick')}
                          variant="outline"
                          size="sm"
                          className="border-slate-600 hover:border-emerald-500/50"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Als gelesen markieren
                        </Button>
                      </div>
                      
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {[
                          { 
                            value: '99', 
                            label: 'Artikel', 
                            sublabel: 'in 11 Kapiteln',
                            icon: FileText, 
                            color: 'from-blue-500 to-indigo-600'
                          },
                          { 
                            value: '20M€', 
                            label: 'Max. Bußgeld', 
                            sublabel: 'oder 4% des Jahresumsatzes',
                            icon: Euro, 
                            color: 'from-red-500 to-pink-600'
                          },
                          { 
                            value: '27+1', 
                            label: 'EU/EWR Länder', 
                            sublabel: 'Einheitliche Regelung',
                            icon: Globe, 
                            color: 'from-purple-500 to-violet-600'
                          },
                          { 
                            value: '72h', 
                            label: 'Meldepflicht', 
                            sublabel: 'bei Datenschutzverletzungen',
                            icon: Clock, 
                            color: 'from-orange-500 to-amber-600'
                          }
                        ].map((stat, index) => {
                          const IconComponent = stat.icon;
                          return (
                            <motion.div
                              key={stat.label}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                              className="bg-slate-900/50 rounded-lg p-4 hover:scale-[1.02] transition-transform"
                            >
                              <div className={cn(
                                "p-3 rounded-xl bg-gradient-to-r mb-3 w-fit",
                                stat.color
                              )}>
                                <IconComponent className="h-6 w-6 text-white" />
                              </div>
                              <div className="text-2xl font-bold text-emerald-400 mb-1">{stat.value}</div>
                              <div className="text-sm font-semibold text-slate-300 mb-1">{stat.label}</div>
                              <div className="text-xs text-slate-400">{stat.sublabel}</div>
                            </motion.div>
                          );
                        })}
                      </div>
                      
                      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                        <div className="flex items-start gap-3">
                          <Info className="h-5 w-5 text-emerald-400 mt-0.5" />
                          <div>
                            <h4 className="font-semibold text-white mb-2">Wichtige Information</h4>
                            <p className="text-slate-300">
                              Die DSGVO gilt für alle Organisationen, die personenbezogene Daten von EU-Bürgern verarbeiten, 
                              unabhängig vom Standort der Organisation. Eine umfassende Compliance-Strategie ist essentiell.
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </section>
              
              {/* Additional sections would continue here... */}
              
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DsgvoGuide;