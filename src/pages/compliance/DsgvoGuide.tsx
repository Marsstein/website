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
  Smartphone,
  Circle,
  Server,
  XCircle,
  CheckSquare,
  FileCheck
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
              
              {/* Geschichte & Evolution Section */}
              <section id="geschichte" className="mt-16 space-y-8 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-white">Geschichte & Evolution der DSGVO</h2>
                        <Button
                          onClick={() => handleSectionComplete('geschichte')}
                          variant="outline"
                          size="sm"
                          className="border-slate-600 hover:border-emerald-500/50"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Als gelesen markieren
                        </Button>
                      </div>

                      {/* Timeline */}
                      <div className="mb-12">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                          <Calendar className="h-5 w-5" />
                          Chronologie der Datenschutzentwicklung
                        </h3>
                        
                        <div className="space-y-6">
                          {[
                            {
                              year: '1995',
                              title: 'EU-Datenschutzrichtlinie 95/46/EG',
                              description: 'Erste einheitliche Datenschutzrichtlinie der EU, die jedoch noch von jedem Mitgliedstaat individuell umgesetzt werden musste.',
                              highlights: ['Grundstein des EU-Datenschutzes', 'Nationale Umsetzung erforderlich', 'Erste grenzüberschreitende Standards']
                            },
                            {
                              year: '2012',
                              title: 'DSGVO-Entwurf vorgestellt',
                              description: 'Die EU-Kommission präsentiert den ersten Entwurf der DSGVO als direkten Nachfolger der Datenschutzrichtlinie.',
                              highlights: ['Vereinheitlichung geplant', 'Modernisierung für digitales Zeitalter', 'Stärkung der Betroffenenrechte']
                            },
                            {
                              year: '2016',
                              title: 'DSGVO verabschiedet',
                              description: 'Nach 4 Jahren intensiver Verhandlungen wird die DSGVO am 25. Mai 2016 offiziell verabschiedet.',
                              highlights: ['Zweijährige Übergangsfrist', 'Unmittelbare Geltung in allen EU-Staaten', 'Größte Datenschutzreform der EU']
                            },
                            {
                              year: '2018',
                              title: 'DSGVO tritt in Kraft',
                              description: 'Am 25. Mai 2018 wird die DSGVO in allen EU-Mitgliedstaaten wirksam und ersetzt nationale Datenschutzgesetze.',
                              highlights: ['Vollständige Anwendbarkeit', 'Erste Bußgelder verhängt', 'Globale Auswirkungen spürbar']
                            },
                            {
                              year: '2020-2024',
                              title: 'Weiterentwicklung & Präzedenzfälle',
                              description: 'Wichtige Gerichtsurteile prägen die Auslegung, während neue Technologien wie KI zusätzliche Herausforderungen schaffen.',
                              highlights: ['Schrems II-Urteil', 'Cookie-Banner-Evolution', 'KI-Regulierung im Fokus']
                            }
                          ].map((item, index) => (
                            <motion.div
                              key={item.year}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="flex gap-4"
                            >
                              <div className="flex-shrink-0 w-24">
                                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-bold rounded-lg px-3 py-2 text-center">
                                  {item.year}
                                </div>
                              </div>
                              <div className="flex-1 bg-slate-900/50 rounded-lg p-6 border-l-4 border-emerald-500">
                                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                                <p className="text-slate-300 mb-3">{item.description}</p>
                                <div className="flex flex-wrap gap-2">
                                  {item.highlights.map((highlight) => (
                                    <Badge 
                                      key={highlight} 
                                      variant="secondary" 
                                      className="bg-slate-700/50 text-slate-300 border-slate-600"
                                    >
                                      {highlight}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Global Impact */}
                      <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                          <Globe className="h-5 w-5" />
                          Globale Auswirkungen der DSGVO
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-white mb-3">Internationale Standards</h4>
                            <ul className="space-y-2 text-slate-300">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5" />
                                <span>Vorbild für Datenschutzgesetze weltweit (z.B. CCPA in Kalifornien)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5" />
                                <span>Anpassung globaler Tech-Konzerne an DSGVO-Standards</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-emerald-400 mt-0.5" />
                                <span>Entstehung des "Brüssel-Effekts" im Datenschutz</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-3">Paradigmenwechsel</h4>
                            <ul className="space-y-2 text-slate-300">
                              <li className="flex items-start gap-2">
                                <ArrowRight className="h-5 w-5 text-teal-400 mt-0.5" />
                                <span>Von Opt-Out zu Opt-In bei der Datenverarbeitung</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ArrowRight className="h-5 w-5 text-teal-400 mt-0.5" />
                                <span>Privacy by Design als Grundprinzip</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ArrowRight className="h-5 w-5 text-teal-400 mt-0.5" />
                                <span>Rechenschaftspflicht und Dokumentation</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </section>

              {/* DSGVO Grundlagen Section */}
              <section id="grundlagen" className="mt-16 space-y-8 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-white">DSGVO-Grundlagen verstehen</h2>
                        <Button
                          onClick={() => handleSectionComplete('grundlagen')}
                          variant="outline"
                          size="sm"
                          className="border-slate-600 hover:border-emerald-500/50"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Als gelesen markieren
                        </Button>
                      </div>

                      {/* Core Concepts */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                          <BookOpen className="h-5 w-5" />
                          Kernkonzepte der DSGVO
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {[
                            {
                              title: 'Personenbezogene Daten',
                              icon: Database,
                              description: 'Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.',
                              examples: ['Name, Adresse, E-Mail', 'IP-Adressen', 'Standortdaten', 'Online-Kennungen', 'Genetische & biometrische Daten'],
                              critical: true
                            },
                            {
                              title: 'Verarbeitung',
                              icon: Cpu,
                              description: 'Jeder Vorgang im Zusammenhang mit personenbezogenen Daten, ob automatisiert oder nicht.',
                              examples: ['Erhebung & Erfassung', 'Speicherung & Organisation', 'Veränderung & Verwendung', 'Übermittlung & Löschung'],
                              critical: true
                            },
                            {
                              title: 'Verantwortlicher',
                              icon: Building2,
                              description: 'Die Stelle, die über Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.',
                              examples: ['Unternehmen als Ganzes', 'Einzelunternehmer', 'Behörden & Vereine', 'Gemeinsame Verantwortlichkeit möglich'],
                              critical: false
                            },
                            {
                              title: 'Auftragsverarbeiter',
                              icon: Briefcase,
                              description: 'Verarbeitet personenbezogene Daten im Auftrag des Verantwortlichen.',
                              examples: ['Cloud-Anbieter', 'Lohnbuchhaltung', 'Marketing-Agenturen', 'IT-Dienstleister'],
                              critical: false
                            }
                          ].map((concept) => {
                            const IconComponent = concept.icon;
                            return (
                              <motion.div
                                key={concept.title}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-colors"
                              >
                                <div className="flex items-start gap-4">
                                  <div className={cn(
                                    "p-3 rounded-lg",
                                    concept.critical 
                                      ? "bg-gradient-to-r from-red-500/20 to-orange-500/20 text-orange-400" 
                                      : "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-400"
                                  )}>
                                    <IconComponent className="h-6 w-6" />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="text-lg font-semibold text-white mb-2">{concept.title}</h4>
                                    <p className="text-slate-300 mb-3">{concept.description}</p>
                                    <div className="space-y-1">
                                      <p className="text-sm font-medium text-slate-400 mb-2">Beispiele:</p>
                                      {concept.examples.map((example) => (
                                        <div key={example} className="flex items-center gap-2 text-sm text-slate-400">
                                          <ChevronRight className="h-3 w-3" />
                                          <span>{example}</span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Anwendungsbereich */}
                      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-xl p-6 mb-8">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          Anwendungsbereich der DSGVO
                        </h3>
                        
                        <Tabs defaultValue="territorial" className="w-full">
                          <TabsList className="grid w-full grid-cols-3 bg-slate-800">
                            <TabsTrigger value="territorial">Räumlich</TabsTrigger>
                            <TabsTrigger value="material">Sachlich</TabsTrigger>
                            <TabsTrigger value="personal">Persönlich</TabsTrigger>
                          </TabsList>
                          
                          <TabsContent value="territorial" className="mt-4 space-y-3">
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-emerald-500/20">
                              <h4 className="font-semibold text-white mb-2">Niederlassungsprinzip (Art. 3 Abs. 1)</h4>
                              <p className="text-slate-300">Gilt für alle Verarbeitungen im Rahmen der Tätigkeiten einer Niederlassung in der EU, unabhängig vom Ort der Verarbeitung.</p>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-emerald-500/20">
                              <h4 className="font-semibold text-white mb-2">Marktortprinzip (Art. 3 Abs. 2)</h4>
                              <p className="text-slate-300">Gilt auch für Nicht-EU-Unternehmen, die Waren/Dienstleistungen in der EU anbieten oder das Verhalten von EU-Bürgern beobachten.</p>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="material" className="mt-4 space-y-3">
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-teal-500/20">
                              <h4 className="font-semibold text-white mb-2">Erfasste Verarbeitungen</h4>
                              <ul className="space-y-2 text-slate-300">
                                <li className="flex items-start gap-2">
                                  <Check className="h-4 w-4 text-emerald-400 mt-0.5" />
                                  <span>Ganz oder teilweise automatisierte Verarbeitung</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <Check className="h-4 w-4 text-emerald-400 mt-0.5" />
                                  <span>Nichtautomatisierte Verarbeitung in Dateisystemen</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-red-500/20">
                              <h4 className="font-semibold text-white mb-2">Ausnahmen</h4>
                              <ul className="space-y-2 text-slate-300">
                                <li className="flex items-start gap-2">
                                  <X className="h-4 w-4 text-red-400 mt-0.5" />
                                  <span>Rein persönliche oder familiäre Tätigkeiten</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <X className="h-4 w-4 text-red-400 mt-0.5" />
                                  <span>Tätigkeiten außerhalb des EU-Rechts</span>
                                </li>
                              </ul>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="personal" className="mt-4">
                            <div className="bg-slate-800/50 rounded-lg p-4 border border-purple-500/20">
                              <h4 className="font-semibold text-white mb-3">Geschützte Personen</h4>
                              <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded">
                                  <span className="text-slate-300">Natürliche Personen</span>
                                  <Badge className="bg-emerald-500/20 text-emerald-400">Geschützt</Badge>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded">
                                  <span className="text-slate-300">Juristische Personen (GmbH, AG)</span>
                                  <Badge className="bg-red-500/20 text-red-400">Nicht geschützt</Badge>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded">
                                  <span className="text-slate-300">Verstorbene Personen</span>
                                  <Badge className="bg-slate-500/20 text-slate-400">Nationale Regelung</Badge>
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </div>

                      {/* Quick Reference */}
                      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Lightbulb className="h-5 w-5 text-emerald-400" />
                          Praxis-Tipp: Die 3 wichtigsten Fragen
                        </h3>
                        <div className="space-y-3 text-slate-300">
                          <div className="flex items-start gap-3">
                            <div className="bg-emerald-500/20 text-emerald-400 rounded-full p-1 mt-0.5">
                              <span className="block w-6 h-6 text-center text-sm font-bold">1</span>
                            </div>
                            <div>
                              <p className="font-medium text-white">Verarbeiten wir personenbezogene Daten?</p>
                              <p className="text-sm">Wenn ja → DSGVO ist anwendbar</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-emerald-500/20 text-emerald-400 rounded-full p-1 mt-0.5">
                              <span className="block w-6 h-6 text-center text-sm font-bold">2</span>
                            </div>
                            <div>
                              <p className="font-medium text-white">Haben wir eine Rechtsgrundlage?</p>
                              <p className="text-sm">Art. 6 DSGVO prüfen (Einwilligung, Vertrag, berechtigtes Interesse etc.)</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <div className="bg-emerald-500/20 text-emerald-400 rounded-full p-1 mt-0.5">
                              <span className="block w-6 h-6 text-center text-sm font-bold">3</span>
                            </div>
                            <div>
                              <p className="font-medium text-white">Informieren wir transparent?</p>
                              <p className="text-sm">Datenschutzhinweise nach Art. 13/14 DSGVO bereitstellen</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </section>

              {/* Rechtlicher Rahmen Section */}
              <section id="rechtlicher-rahmen" className="mt-16 space-y-8 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-white">Rechtlicher Rahmen</h2>
                        <Button
                          onClick={() => handleSectionComplete('rechtlicher-rahmen')}
                          variant="outline"
                          size="sm"
                          className="border-slate-600 hover:border-emerald-500/50"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Als gelesen markieren
                        </Button>
                      </div>

                      {/* Rechtsgrundlagen */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                          <Scale className="h-5 w-5" />
                          Die 6 Rechtsgrundlagen nach Art. 6 DSGVO
                        </h3>
                        
                        <div className="space-y-4">
                          {[
                            {
                              letter: 'a',
                              title: 'Einwilligung',
                              description: 'Die betroffene Person hat ihre Einwilligung zur Verarbeitung ihrer personenbezogenen Daten gegeben.',
                              requirements: ['Freiwillig', 'Informiert', 'Eindeutig', 'Widerrufbar'],
                              examples: ['Newsletter-Anmeldung', 'Cookie-Consent', 'Marketingaktionen'],
                              icon: CheckCircle2,
                              color: 'emerald'
                            },
                            {
                              letter: 'b',
                              title: 'Vertrag',
                              description: 'Die Verarbeitung ist für die Erfüllung eines Vertrags erforderlich.',
                              requirements: ['Vertragserfüllung', 'Vorvertragliche Maßnahmen', 'Auf Anfrage der Person'],
                              examples: ['Kundenbestellungen', 'Mitarbeiterverträge', 'Serviceerbringung'],
                              icon: FileText,
                              color: 'blue'
                            },
                            {
                              letter: 'c',
                              title: 'Rechtliche Verpflichtung',
                              description: 'Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich.',
                              requirements: ['Gesetzliche Pflicht', 'EU- oder Mitgliedstaatenrecht', 'Eindeutige Rechtsgrundlage'],
                              examples: ['Steueraufbewahrung', 'Sozialversicherung', 'Geldwäscheprävention'],
                              icon: Gavel,
                              color: 'purple'
                            },
                            {
                              letter: 'd',
                              title: 'Lebenswichtige Interessen',
                              description: 'Schutz lebenswichtiger Interessen der betroffenen oder einer anderen Person.',
                              requirements: ['Lebensbedrohliche Situation', 'Keine andere Rechtsgrundlage', 'Subsidiarität'],
                              examples: ['Medizinische Notfälle', 'Katastrophenschutz', 'Pandemie-Kontaktverfolgung'],
                              icon: Heart,
                              color: 'red'
                            },
                            {
                              letter: 'e',
                              title: 'Öffentliche Aufgaben',
                              description: 'Wahrnehmung einer Aufgabe im öffentlichen Interesse oder in Ausübung öffentlicher Gewalt.',
                              requirements: ['Öffentliche Stelle', 'Gesetzliche Aufgabe', 'Verhältnismäßigkeit'],
                              examples: ['Behördliche Register', 'Polizeiarbeit', 'Bildungseinrichtungen'],
                              icon: Building2,
                              color: 'orange'
                            },
                            {
                              letter: 'f',
                              title: 'Berechtigte Interessen',
                              description: 'Wahrung berechtigter Interessen des Verantwortlichen oder Dritter.',
                              requirements: ['Interessenabwägung', 'Dokumentation', 'Keine überwiegenden Interessen der Betroffenen'],
                              examples: ['Direktmarketing', 'IT-Sicherheit', 'Betrugsprävention'],
                              icon: Target,
                              color: 'teal'
                            }
                          ].map((ground) => {
                            const IconComponent = ground.icon;
                            return (
                              <motion.div
                                key={ground.letter}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-all"
                              >
                                <div className="flex items-start gap-4">
                                  <div className={cn(
                                    "p-3 rounded-xl flex-shrink-0",
                                    ground.color === 'emerald' && "bg-emerald-500/20 text-emerald-400",
                                    ground.color === 'blue' && "bg-blue-500/20 text-blue-400",
                                    ground.color === 'purple' && "bg-purple-500/20 text-purple-400",
                                    ground.color === 'red' && "bg-red-500/20 text-red-400",
                                    ground.color === 'orange' && "bg-orange-500/20 text-orange-400",
                                    ground.color === 'teal' && "bg-teal-500/20 text-teal-400"
                                  )}>
                                    <IconComponent className="h-6 w-6" />
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-2">
                                      <Badge className="bg-slate-700 text-slate-300">Art. 6 Abs. 1 lit. {ground.letter}</Badge>
                                      <h4 className="text-lg font-semibold text-white">{ground.title}</h4>
                                    </div>
                                    <p className="text-slate-300 mb-4">{ground.description}</p>
                                    
                                    <div className="grid md:grid-cols-2 gap-4">
                                      <div>
                                        <p className="text-sm font-medium text-slate-400 mb-2">Voraussetzungen:</p>
                                        <ul className="space-y-1">
                                          {ground.requirements.map((req) => (
                                            <li key={req} className="flex items-center gap-2 text-sm text-slate-400">
                                              <Check className="h-3 w-3 text-emerald-400" />
                                              <span>{req}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <p className="text-sm font-medium text-slate-400 mb-2">Praxisbeispiele:</p>
                                        <ul className="space-y-1">
                                          {ground.examples.map((example) => (
                                            <li key={example} className="flex items-center gap-2 text-sm text-slate-400">
                                              <CircleDot className="h-3 w-3" />
                                              <span>{example}</span>
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

                      {/* Besondere Kategorien */}
                      <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-6 mb-8 border border-red-500/20">
                        <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Besondere Kategorien personenbezogener Daten (Art. 9 DSGVO)
                        </h3>
                        
                        <div className="mb-4">
                          <p className="text-slate-300 mb-4">
                            Die Verarbeitung besonderer Kategorien personenbezogener Daten ist grundsätzlich verboten, 
                            außer es liegt eine der folgenden Ausnahmen vor:
                          </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-white mb-3">Verbotene Datenkategorien:</h4>
                            <div className="space-y-2">
                              {[
                                'Rassische/ethnische Herkunft',
                                'Politische Meinungen',
                                'Religiöse/weltanschauliche Überzeugungen',
                                'Gewerkschaftszugehörigkeit',
                                'Genetische Daten',
                                'Biometrische Daten zur Identifizierung',
                                'Gesundheitsdaten',
                                'Sexualleben/sexuelle Orientierung'
                              ].map((category) => (
                                <div key={category} className="flex items-center gap-2 text-sm">
                                  <AlertCircle className="h-4 w-4 text-red-400" />
                                  <span className="text-slate-300">{category}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-3">Wichtigste Ausnahmen:</h4>
                            <div className="space-y-2">
                              {[
                                'Ausdrückliche Einwilligung',
                                'Arbeitsrecht & Sozialschutz',
                                'Lebenswichtige Interessen',
                                'Offensichtlich öffentlich gemacht',
                                'Rechtsansprüche',
                                'Erhebliches öffentliches Interesse',
                                'Gesundheitsvorsorge',
                                'Öffentliche Gesundheit'
                              ].map((exception) => (
                                <div key={exception} className="flex items-center gap-2 text-sm">
                                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                                  <span className="text-slate-300">{exception}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Verhältnis zu anderen Gesetzen */}
                      <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                          <Network className="h-5 w-5" />
                          Verhältnis zu anderen Rechtsvorschriften
                        </h3>
                        
                        <div className="space-y-4">
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <h4 className="font-semibold text-white mb-2">Nationales Recht</h4>
                            <p className="text-slate-300 mb-2">Die DSGVO lässt Raum für nationale Regelungen durch Öffnungsklauseln:</p>
                            <ul className="space-y-1 text-sm text-slate-400">
                              <li className="flex items-start gap-2">
                                <ChevronRight className="h-4 w-4 mt-0.5" />
                                <span><strong>Deutschland:</strong> BDSG (Bundesdatenschutzgesetz)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight className="h-4 w-4 mt-0.5" />
                                <span><strong>Beschäftigtendatenschutz:</strong> § 26 BDSG</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ChevronRight className="h-4 w-4 mt-0.5" />
                                <span><strong>Videoüberwachung:</strong> § 4 BDSG</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <h4 className="font-semibold text-white mb-2">Sektorspezifische Regelungen</h4>
                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                              <div>
                                <p className="text-sm font-medium text-slate-400 mb-2">Telekommunikation:</p>
                                <Badge className="bg-blue-500/20 text-blue-400">TTDSG</Badge>
                              </div>
                              <div>
                                <p className="text-sm font-medium text-slate-400 mb-2">Kirchen:</p>
                                <Badge className="bg-purple-500/20 text-purple-400">DSG-EKD / KDG</Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </section>

              {/* Grundprinzipien Section */}
              <section id="grundprinzipien" className="mt-16 space-y-8 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-white">Die 7 Grundprinzipien der DSGVO</h2>
                        <Button
                          onClick={() => handleSectionComplete('grundprinzipien')}
                          variant="outline"
                          size="sm"
                          className="border-slate-600 hover:border-emerald-500/50"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Als gelesen markieren
                        </Button>
                      </div>

                      <div className="mb-6">
                        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                          <p className="text-slate-300 flex items-start gap-3">
                            <Info className="h-5 w-5 text-emerald-400 mt-0.5" />
                            <span>Die Grundprinzipien nach Art. 5 DSGVO bilden das Fundament des europäischen Datenschutzrechts. 
                            Jede Datenverarbeitung muss diese Prinzipien einhalten.</span>
                          </p>
                        </div>
                      </div>

                      {/* Die 7 Prinzipien */}
                      <div className="space-y-6">
                        {[
                          {
                            number: 1,
                            title: 'Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz',
                            article: 'Art. 5 Abs. 1 lit. a',
                            icon: Scale,
                            description: 'Datenverarbeitung muss rechtmäßig, fair und für die betroffene Person nachvollziehbar sein.',
                            requirements: [
                              'Rechtsgrundlage nach Art. 6 oder 9 DSGVO',
                              'Faire Verarbeitung ohne Täuschung',
                              'Transparente Information der Betroffenen'
                            ],
                            examples: [
                              'Klare Datenschutzerklärungen',
                              'Verständliche Cookie-Banner',
                              'Offene Kommunikation über Datennutzung'
                            ],
                            violations: [
                              'Versteckte Datensammlung',
                              'Irreführende Einwilligungen',
                              'Intransparente Verarbeitung'
                            ]
                          },
                          {
                            number: 2,
                            title: 'Zweckbindung',
                            article: 'Art. 5 Abs. 1 lit. b',
                            icon: Target,
                            description: 'Personenbezogene Daten dürfen nur für festgelegte, eindeutige und legitime Zwecke erhoben werden.',
                            requirements: [
                              'Zwecke vor Erhebung festlegen',
                              'Keine Weiterverarbeitung für unvereinbare Zwecke',
                              'Ausnahmen für Archiv-, Forschungs- und Statistikzwecke'
                            ],
                            examples: [
                              'Kundendaten nur für Vertragsabwicklung',
                              'Bewerberdaten nur für Auswahlverfahren',
                              'Newsletter-Daten nur für E-Mail-Versand'
                            ],
                            violations: [
                              'Zweckentfremdung von Kundendaten',
                              'Verkauf von Daten ohne Erlaubnis',
                              'Nutzung für nicht angekündigte Zwecke'
                            ]
                          },
                          {
                            number: 3,
                            title: 'Datenminimierung',
                            article: 'Art. 5 Abs. 1 lit. c',
                            icon: Minus,
                            description: 'Die Verarbeitung muss dem Zweck angemessen und auf das notwendige Maß beschränkt sein.',
                            requirements: [
                              'Nur erforderliche Daten erheben',
                              'Regelmäßige Überprüfung der Notwendigkeit',
                              'Löschung nicht mehr benötigter Daten'
                            ],
                            examples: [
                              'Geburtsjahr statt vollständiges Datum',
                              'PLZ statt vollständige Adresse',
                              'Verzicht auf optionale Felder'
                            ],
                            violations: [
                              'Sammlung "auf Vorrat"',
                              'Pflichtfelder ohne Notwendigkeit',
                              'Übermäßige Datenabfragen'
                            ]
                          },
                          {
                            number: 4,
                            title: 'Richtigkeit',
                            article: 'Art. 5 Abs. 1 lit. d',
                            icon: CheckCircle,
                            description: 'Personenbezogene Daten müssen sachlich richtig und auf dem neuesten Stand sein.',
                            requirements: [
                              'Sicherstellung der Datenrichtigkeit',
                              'Unverzügliche Berichtigung unrichtiger Daten',
                              'Prozesse zur Aktualisierung'
                            ],
                            examples: [
                              'Regelmäßige Datenabgleiche',
                              'Self-Service-Portale für Updates',
                              'Validierung bei Dateneingabe'
                            ],
                            violations: [
                              'Veraltete Kontaktdaten',
                              'Fehlerhafte Stammdaten',
                              'Keine Aktualisierungsmöglichkeit'
                            ]
                          },
                          {
                            number: 5,
                            title: 'Speicherbegrenzung',
                            article: 'Art. 5 Abs. 1 lit. e',
                            icon: Clock,
                            description: 'Daten dürfen nur so lange gespeichert werden, wie es für die Verarbeitungszwecke erforderlich ist.',
                            requirements: [
                              'Festlegung von Löschfristen',
                              'Automatisierte Löschprozesse',
                              'Dokumentation der Aufbewahrungsfristen'
                            ],
                            examples: [
                              'Bewerberdaten: 6 Monate nach Absage',
                              'Buchhaltung: 10 Jahre gesetzlich',
                              'Cookies: Nach Session-Ende'
                            ],
                            violations: [
                              'Unbegrenzte Speicherung',
                              'Keine definierten Löschfristen',
                              'Speicherung ohne Rechtsgrund'
                            ]
                          },
                          {
                            number: 6,
                            title: 'Integrität und Vertraulichkeit',
                            article: 'Art. 5 Abs. 1 lit. f',
                            icon: Shield,
                            description: 'Gewährleistung angemessener Sicherheit durch technische und organisatorische Maßnahmen.',
                            requirements: [
                              'Schutz vor unbefugter Verarbeitung',
                              'Schutz vor Verlust oder Schädigung',
                              'Angemessene Sicherheitsmaßnahmen'
                            ],
                            examples: [
                              'Verschlüsselung sensibler Daten',
                              'Zugangskontrolle und Berechtigungen',
                              'Regelmäßige Backups'
                            ],
                            violations: [
                              'Unverschlüsselte Übertragung',
                              'Fehlende Zugangskontrollen',
                              'Keine Datensicherung'
                            ]
                          },
                          {
                            number: 7,
                            title: 'Rechenschaftspflicht',
                            article: 'Art. 5 Abs. 2',
                            icon: FileText,
                            description: 'Der Verantwortliche muss die Einhaltung aller Grundsätze nachweisen können.',
                            requirements: [
                              'Dokumentation aller Verarbeitungen',
                              'Nachweis der Compliance',
                              'Verarbeitungsverzeichnis führen'
                            ],
                            examples: [
                              'Datenschutz-Folgenabschätzungen',
                              'Verarbeitungsverzeichnis',
                              'Audit-Logs und Protokolle'
                            ],
                            violations: [
                              'Fehlende Dokumentation',
                              'Keine Nachweise vorhanden',
                              'Unvollständige Verzeichnisse'
                            ]
                          }
                        ].map((principle) => {
                          const IconComponent = principle.icon;
                          return (
                            <motion.div
                              key={principle.number}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: principle.number * 0.1 }}
                              className="bg-slate-900/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-emerald-500/30 transition-all"
                            >
                              <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4 flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">
                                    {principle.number}
                                  </div>
                                  <h3 className="text-lg font-semibold text-white">{principle.title}</h3>
                                </div>
                                <Badge className="bg-slate-600 text-slate-300">{principle.article}</Badge>
                              </div>
                              
                              <div className="p-6">
                                <div className="flex items-start gap-4 mb-6">
                                  <div className="p-3 bg-emerald-500/20 rounded-lg">
                                    <IconComponent className="h-6 w-6 text-emerald-400" />
                                  </div>
                                  <p className="text-slate-300 flex-1">{principle.description}</p>
                                </div>
                                
                                <div className="grid md:grid-cols-3 gap-4">
                                  <div className="bg-slate-800/50 rounded-lg p-4">
                                    <h4 className="font-medium text-emerald-400 mb-3 text-sm">Anforderungen</h4>
                                    <ul className="space-y-2">
                                      {principle.requirements.map((req) => (
                                        <li key={req} className="flex items-start gap-2 text-sm text-slate-400">
                                          <Check className="h-3 w-3 text-emerald-400 mt-0.5" />
                                          <span>{req}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div className="bg-emerald-500/10 rounded-lg p-4">
                                    <h4 className="font-medium text-emerald-400 mb-3 text-sm">Gute Beispiele</h4>
                                    <ul className="space-y-2">
                                      {principle.examples.map((example) => (
                                        <li key={example} className="flex items-start gap-2 text-sm text-slate-300">
                                          <CheckCircle className="h-3 w-3 text-emerald-400 mt-0.5" />
                                          <span>{example}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div className="bg-red-500/10 rounded-lg p-4">
                                    <h4 className="font-medium text-red-400 mb-3 text-sm">Typische Verstöße</h4>
                                    <ul className="space-y-2">
                                      {principle.violations.map((violation) => (
                                        <li key={violation} className="flex items-start gap-2 text-sm text-slate-300">
                                          <X className="h-3 w-3 text-red-400 mt-0.5" />
                                          <span>{violation}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Best Practice Box */}
                      <div className="mt-8 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                          <Award className="h-5 w-5 text-emerald-400" />
                          Best Practice: Privacy by Design
                        </h3>
                        <p className="text-slate-300 mb-4">
                          Integrieren Sie die Grundprinzipien von Anfang an in Ihre Prozesse und Systeme:
                        </p>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <h4 className="font-medium text-emerald-400 mb-2">Technisch</h4>
                            <ul className="space-y-1 text-sm text-slate-300">
                              <li>• Datenschutzfreundliche Voreinstellungen</li>
                              <li>• Ende-zu-Ende-Verschlüsselung</li>
                              <li>• Pseudonymisierung wo möglich</li>
                              <li>• Automatische Löschroutinen</li>
                            </ul>
                          </div>
                          <div className="bg-slate-800/50 rounded-lg p-4">
                            <h4 className="font-medium text-emerald-400 mb-2">Organisatorisch</h4>
                            <ul className="space-y-1 text-sm text-slate-300">
                              <li>• Datenschutz-Schulungen</li>
                              <li>• Klare Verantwortlichkeiten</li>
                              <li>• Regelmäßige Audits</li>
                              <li>• Dokumentierte Prozesse</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </section>

              {/* Betroffenenrechte Section */}
              <section id="betroffenenrechte" className="mt-16 space-y-8 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-white">Betroffenenrechte nach DSGVO</h2>
                        <Button
                          onClick={() => handleSectionComplete('betroffenenrechte')}
                          variant="outline"
                          size="sm"
                          className="border-slate-600 hover:border-emerald-500/50"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Als gelesen markieren
                        </Button>
                      </div>

                      <div className="mb-8">
                        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                          <p className="text-slate-300 flex items-start gap-3">
                            <Users className="h-5 w-5 text-blue-400 mt-0.5" />
                            <span>Die DSGVO stärkt die Rechte betroffener Personen erheblich. Als Verantwortlicher müssen Sie diese Rechte 
                            gewährleisten und Anfragen innerhalb eines Monats beantworten.</span>
                          </p>
                        </div>
                      </div>

                      {/* Die 8 Hauptrechte */}
                      <div className="space-y-6">
                        {[
                          {
                            title: 'Recht auf Auskunft',
                            article: 'Art. 15 DSGVO',
                            icon: Eye,
                            color: 'blue',
                            description: 'Betroffene können Auskunft darüber verlangen, ob und welche personenbezogenen Daten verarbeitet werden.',
                            includes: [
                              'Verarbeitungszwecke',
                              'Kategorien personenbezogener Daten',
                              'Empfänger oder Empfängerkategorien',
                              'Speicherdauer',
                              'Herkunft der Daten',
                              'Automatisierte Entscheidungsfindung'
                            ],
                            process: {
                              timeline: '1 Monat (verlängerbar um 2 Monate bei Komplexität)',
                              format: 'Schriftlich oder elektronisch',
                              cost: 'Grundsätzlich kostenlos'
                            },
                            tips: [
                              'Standardisierte Auskunftsverfahren etablieren',
                              'Identität des Anfragenden verifizieren',
                              'Vollständige Datenkopie bereitstellen'
                            ]
                          },
                          {
                            title: 'Recht auf Berichtigung',
                            article: 'Art. 16 DSGVO',
                            icon: Edit3,
                            color: 'emerald',
                            description: 'Betroffene können die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten verlangen.',
                            includes: [
                              'Korrektur falscher Daten',
                              'Vervollständigung unvollständiger Daten',
                              'Ergänzende Erklärungen'
                            ],
                            process: {
                              timeline: 'Unverzüglich',
                              format: 'Formlos möglich',
                              cost: 'Kostenlos'
                            },
                            tips: [
                              'Berichtigungsprozesse automatisieren',
                              'Alle Empfänger informieren',
                              'Änderungen dokumentieren'
                            ]
                          },
                          {
                            title: 'Recht auf Löschung ("Recht auf Vergessenwerden")',
                            article: 'Art. 17 DSGVO',
                            icon: Trash2,
                            color: 'red',
                            description: 'Betroffene können unter bestimmten Voraussetzungen die Löschung ihrer personenbezogenen Daten verlangen.',
                            includes: [
                              'Zweck entfallen',
                              'Einwilligung widerrufen',
                              'Unrechtmäßige Verarbeitung',
                              'Gesetzliche Löschpflicht',
                              'Daten von Kindern',
                              'Widerspruch nach Art. 21'
                            ],
                            process: {
                              timeline: 'Unverzüglich',
                              format: 'Schriftlich empfohlen',
                              cost: 'Kostenlos'
                            },
                            exceptions: [
                              'Meinungsfreiheit',
                              'Gesetzliche Aufbewahrungspflichten',
                              'Öffentliches Interesse',
                              'Rechtsansprüche'
                            ],
                            tips: [
                              'Löschkonzept erstellen',
                              'Backup-Strategien anpassen',
                              'Löschung bei allen Empfängern'
                            ]
                          },
                          {
                            title: 'Recht auf Einschränkung der Verarbeitung',
                            article: 'Art. 18 DSGVO',
                            icon: Lock,
                            color: 'orange',
                            description: 'Betroffene können die Einschränkung der Verarbeitung ihrer Daten verlangen (Sperrung statt Löschung).',
                            includes: [
                              'Richtigkeit wird bestritten',
                              'Unrechtmäßige Verarbeitung',
                              'Daten für Rechtsansprüche benötigt',
                              'Widerspruch nach Art. 21 anhängig'
                            ],
                            process: {
                              timeline: 'Unverzüglich',
                              format: 'Formlos möglich',
                              cost: 'Kostenlos'
                            },
                            tips: [
                              'Technische Sperrverfahren',
                              'Kennzeichnung eingeschränkter Daten',
                              'Nur noch Speicherung erlaubt'
                            ]
                          },
                          {
                            title: 'Recht auf Datenübertragbarkeit',
                            article: 'Art. 20 DSGVO',
                            icon: Download,
                            color: 'purple',
                            description: 'Betroffene können ihre Daten in einem strukturierten, maschinenlesbaren Format erhalten oder direkt übertragen lassen.',
                            includes: [
                              'Bereitgestellte Daten',
                              'Auf Einwilligung/Vertrag basierend',
                              'Automatisierte Verarbeitung',
                              'Strukturiertes Format (JSON, XML, CSV)'
                            ],
                            process: {
                              timeline: '1 Monat',
                              format: 'Elektronisch',
                              cost: 'Kostenlos'
                            },
                            limitations: [
                              'Nur eigene bereitgestellte Daten',
                              'Keine abgeleiteten Daten',
                              'Rechte Dritter beachten'
                            ],
                            tips: [
                              'Export-Funktionen bereitstellen',
                              'API für Direktübertragung',
                              'Gängige Formate nutzen'
                            ]
                          },
                          {
                            title: 'Widerspruchsrecht',
                            article: 'Art. 21 DSGVO',
                            icon: XCircle,
                            color: 'teal',
                            description: 'Betroffene können der Verarbeitung ihrer Daten widersprechen, insbesondere bei Direktwerbung.',
                            includes: [
                              'Direktwerbung (absolutes Recht)',
                              'Berechtigte Interessen',
                              'Öffentliche Aufgaben',
                              'Profilbildung',
                              'Forschungszwecke'
                            ],
                            process: {
                              timeline: 'Unverzüglich',
                              format: 'Formlos möglich',
                              cost: 'Kostenlos'
                            },
                            special: {
                              direktwerbung: 'Bei Direktwerbung: Absolute Wirkung, keine Abwägung',
                              andere: 'Sonst: Interessenabwägung erforderlich'
                            },
                            tips: [
                              'Widerspruch bei Erstkontakt mitteilen',
                              'Opt-Out-Mechanismen implementieren',
                              'Widerspruchslisten führen'
                            ]
                          },
                          {
                            title: 'Recht auf menschliche Überprüfung automatisierter Entscheidungen',
                            article: 'Art. 22 DSGVO',
                            icon: Brain,
                            color: 'indigo',
                            description: 'Betroffene haben das Recht, nicht einer ausschließlich automatisierten Entscheidung unterworfen zu werden.',
                            includes: [
                              'Automatisierte Einzelentscheidungen',
                              'Rechtliche Wirkung',
                              'Erhebliche Beeinträchtigung',
                              'Profilbildung'
                            ],
                            exceptions: [
                              'Vertragserfüllung notwendig',
                              'Ausdrückliche Einwilligung',
                              'Gesetzliche Erlaubnis'
                            ],
                            safeguards: [
                              'Menschliche Intervention ermöglichen',
                              'Eigenen Standpunkt darlegen',
                              'Entscheidung anfechten'
                            ],
                            tips: [
                              'Transparenz über Algorithmen',
                              'Überprüfungsprozesse etablieren',
                              'Dokumentation der Logik'
                            ]
                          },
                          {
                            title: 'Recht auf Information',
                            article: 'Art. 13/14 DSGVO',
                            icon: Info,
                            color: 'cyan',
                            description: 'Betroffene müssen transparent über die Datenverarbeitung informiert werden.',
                            includes: [
                              'Identität des Verantwortlichen',
                              'Zwecke der Verarbeitung',
                              'Rechtsgrundlagen',
                              'Berechtigte Interessen',
                              'Empfänger der Daten',
                              'Speicherdauer',
                              'Betroffenenrechte',
                              'Beschwerderecht bei Aufsichtsbehörde'
                            ],
                            timing: {
                              direkterhebung: 'Bei Erhebung (Art. 13)',
                              dritterhebung: 'Innerhalb 1 Monat (Art. 14)'
                            },
                            tips: [
                              'Datenschutzerklärung aktuell halten',
                              'Layered Notice Approach',
                              'Icons für bessere Verständlichkeit'
                            ]
                          }
                        ].map((right, index) => {
                          const IconComponent = right.icon;
                          return (
                            <motion.div
                              key={right.title}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              className="bg-slate-900/50 rounded-xl border border-slate-700/50 overflow-hidden hover:border-emerald-500/30 transition-all"
                            >
                              <div className={cn(
                                "px-6 py-4 flex items-center justify-between",
                                right.color === 'blue' && "bg-gradient-to-r from-blue-900/50 to-blue-800/50",
                                right.color === 'emerald' && "bg-gradient-to-r from-emerald-900/50 to-emerald-800/50",
                                right.color === 'red' && "bg-gradient-to-r from-red-900/50 to-red-800/50",
                                right.color === 'orange' && "bg-gradient-to-r from-orange-900/50 to-orange-800/50",
                                right.color === 'purple' && "bg-gradient-to-r from-purple-900/50 to-purple-800/50",
                                right.color === 'teal' && "bg-gradient-to-r from-teal-900/50 to-teal-800/50",
                                right.color === 'indigo' && "bg-gradient-to-r from-indigo-900/50 to-indigo-800/50",
                                right.color === 'cyan' && "bg-gradient-to-r from-cyan-900/50 to-cyan-800/50"
                              )}>
                                <div className="flex items-center gap-3">
                                  <IconComponent className="h-6 w-6 text-white" />
                                  <h3 className="text-lg font-semibold text-white">{right.title}</h3>
                                </div>
                                <Badge className="bg-slate-700 text-slate-300">{right.article}</Badge>
                              </div>
                              
                              <div className="p-6">
                                <p className="text-slate-300 mb-4">{right.description}</p>
                                
                                <div className="grid md:grid-cols-2 gap-4 mb-4">
                                  <div>
                                    <h4 className="font-medium text-emerald-400 mb-2 text-sm">Umfasst:</h4>
                                    <ul className="space-y-1">
                                      {right.includes.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                                          <CheckCircle2 className="h-3 w-3 text-emerald-400 mt-0.5" />
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  {right.process && (
                                    <div>
                                      <h4 className="font-medium text-blue-400 mb-2 text-sm">Verfahren:</h4>
                                      <div className="space-y-2 text-sm text-slate-400">
                                        <div className="flex items-center gap-2">
                                          <Clock className="h-3 w-3" />
                                          <span>Frist: {right.process.timeline}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <FileText className="h-3 w-3" />
                                          <span>Form: {right.process.format}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                          <Euro className="h-3 w-3" />
                                          <span>Kosten: {right.process.cost}</span>
                                        </div>
                                      </div>

                                      {right.exceptions && (
                                        <div className="mt-3">
                                          <h4 className="font-medium text-red-400 mb-2 text-sm">Ausnahmen:</h4>
                                          <ul className="space-y-1">
                                            {right.exceptions.map((exception) => (
                                              <li key={exception} className="flex items-start gap-2 text-sm text-slate-400">
                                                <X className="h-3 w-3 text-red-400 mt-0.5" />
                                                <span>{exception}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                                
                                {right.special && (
                                  <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                                    <h4 className="font-medium text-yellow-400 mb-2 text-sm">Besonderheiten:</h4>
                                    <div className="space-y-2 text-sm text-slate-300">
                                      <div>
                                        <span className="font-medium">Direktwerbung:</span> {right.special.direktwerbung}
                                      </div>
                                      <div>
                                        <span className="font-medium">Andere Fälle:</span> {right.special.andere}
                                      </div>
                                    </div>
                                  </div>
                                )}
                                
                                {right.safeguards && (
                                  <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                                    <h4 className="font-medium text-emerald-400 mb-2 text-sm">Schutzmaßnahmen:</h4>
                                    <ul className="space-y-1">
                                      {right.safeguards.map((safeguard) => (
                                        <li key={safeguard} className="flex items-start gap-2 text-sm text-slate-300">
                                          <Shield className="h-3 w-3 text-emerald-400 mt-0.5" />
                                          <span>{safeguard}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                
                                {right.limitations && (
                                  <div className="bg-orange-500/10 rounded-lg p-4 mb-4">
                                    <h4 className="font-medium text-orange-400 mb-2 text-sm">Einschränkungen:</h4>
                                    <ul className="space-y-1">
                                      {right.limitations.map((limit) => (
                                        <li key={limit} className="flex items-start gap-2 text-sm text-slate-300">
                                          <AlertCircle className="h-3 w-3 text-orange-400 mt-0.5" />
                                          <span>{limit}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                )}
                                
                                {right.timing && (
                                  <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                                    <h4 className="font-medium text-blue-400 mb-2 text-sm">Zeitpunkt der Information:</h4>
                                    <div className="space-y-1 text-sm text-slate-300">
                                      <div>
                                        <span className="font-medium">Direkterhebung:</span> {right.timing.direkterhebung}
                                      </div>
                                      <div>
                                        <span className="font-medium">Dritterhebung:</span> {right.timing.dritterhebung}
                                      </div>
                                    </div>
                                  </div>
                                )}
                                
                                <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg p-4 border border-emerald-500/20">
                                  <h4 className="font-medium text-emerald-400 mb-2 text-sm flex items-center gap-2">
                                    <Lightbulb className="h-4 w-4" />
                                    Praxis-Tipps:
                                  </h4>
                                  <ul className="space-y-1">
                                    {right.tips.map((tip) => (
                                      <li key={tip} className="flex items-start gap-2 text-sm text-slate-300">
                                        <ArrowRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                        <span>{tip}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>

                      {/* Prozess-Übersicht */}
                      <div className="mt-8 bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                          <Settings className="h-5 w-5" />
                          Prozess zur Bearbeitung von Betroffenenanfragen
                        </h3>
                        
                        <div className="space-y-4">
                          {[
                            {
                              step: 1,
                              title: 'Eingang & Identifikation',
                              tasks: [
                                'Anfrage dokumentieren (Datum, Art, Inhalt)',
                                'Identität des Anfragenden verifizieren',
                                'Art des Rechts identifizieren',
                                'Zuständigkeit prüfen'
                              ]
                            },
                            {
                              step: 2,
                              title: 'Prüfung & Bewertung',
                              tasks: [
                                'Rechtmäßigkeit der Anfrage prüfen',
                                'Ausnahmen/Einschränkungen prüfen',
                                'Betroffene Daten identifizieren',
                                'Drittbetroffenheit prüfen'
                              ]
                            },
                            {
                              step: 3,
                              title: 'Umsetzung',
                              tasks: [
                                'Maßnahmen durchführen',
                                'Empfänger informieren (bei Berichtigung/Löschung)',
                                'Dokumentation aktualisieren',
                                'Technische Umsetzung'
                              ]
                            },
                            {
                              step: 4,
                              title: 'Antwort & Dokumentation',
                              tasks: [
                                'Fristgerechte Antwort (max. 1 Monat)',
                                'Begründung bei Ablehnung',
                                'Hinweis auf Beschwerderecht',
                                'Vorgang dokumentieren'
                              ]
                            }
                          ].map((phase) => (
                            <div key={phase.step} className="flex gap-4">
                              <div className="flex-shrink-0">
                                <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                                  {phase.step}
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-white mb-2">{phase.title}</h4>
                                <ul className="space-y-1">
                                  {phase.tasks.map((task) => (
                                    <li key={task} className="flex items-center gap-2 text-sm text-slate-400">
                                      <CheckSquare className="h-3 w-3 text-emerald-400" />
                                      <span>{task}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </section>

              {/* Datenschutz-Folgenabschätzung Section */}
              <section id="datenschutzfolgen" className="mt-16 space-y-8 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-white">Datenschutz-Folgenabschätzung (DSFA)</h2>
                        <Button
                          onClick={() => handleSectionComplete('datenschutzfolgen')}
                          variant="outline"
                          size="sm"
                          className="border-slate-600 hover:border-emerald-500/50"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Als gelesen markieren
                        </Button>
                      </div>

                      <div className="mb-8">
                        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
                          <p className="text-slate-300 flex items-start gap-3">
                            <AlertTriangle className="h-5 w-5 text-red-400 mt-0.5" />
                            <span>Eine DSFA ist bei Verarbeitungen erforderlich, die voraussichtlich ein hohes Risiko für die Rechte und 
                            Freiheiten natürlicher Personen zur Folge haben (Art. 35 DSGVO).</span>
                          </p>
                        </div>
                      </div>

                      {/* Wann ist eine DSFA erforderlich? */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                          <Search className="h-5 w-5" />
                          Wann ist eine DSFA erforderlich?
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-red-500/10 rounded-xl p-6 border border-red-500/20">
                            <h4 className="font-semibold text-red-400 mb-4 flex items-center gap-2">
                              <AlertCircle className="h-5 w-5" />
                              Pflichtfälle (Art. 35 Abs. 3)
                            </h4>
                            <ul className="space-y-3">
                              <li className="flex items-start gap-3">
                                <div className="bg-red-500/20 text-red-400 rounded-full p-1 mt-0.5">
                                  <span className="block w-6 h-6 text-center text-sm font-bold">1</span>
                                </div>
                                <div>
                                  <p className="font-medium text-white">Profiling mit Rechtsfolge</p>
                                  <p className="text-sm text-slate-400">Systematische umfangreiche Bewertung persönlicher Aspekte mit automatisierter Verarbeitung</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-3">
                                <div className="bg-red-500/20 text-red-400 rounded-full p-1 mt-0.5">
                                  <span className="block w-6 h-6 text-center text-sm font-bold">2</span>
                                </div>
                                <div>
                                  <p className="font-medium text-white">Besondere Kategorien</p>
                                  <p className="text-sm text-slate-400">Umfangreiche Verarbeitung besonderer Kategorien (Art. 9) oder Straftaten (Art. 10)</p>
                                </div>
                              </li>
                              <li className="flex items-start gap-3">
                                <div className="bg-red-500/20 text-red-400 rounded-full p-1 mt-0.5">
                                  <span className="block w-6 h-6 text-center text-sm font-bold">3</span>
                                </div>
                                <div>
                                  <p className="font-medium text-white">Öffentliche Überwachung</p>
                                  <p className="text-sm text-slate-400">Systematische umfangreiche Überwachung öffentlich zugänglicher Bereiche</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-orange-500/10 rounded-xl p-6 border border-orange-500/20">
                            <h4 className="font-semibold text-orange-400 mb-4 flex items-center gap-2">
                              <AlertTriangle className="h-5 w-5" />
                              Weitere Risikofälle
                            </h4>
                            <ul className="space-y-2">
                              <li className="flex items-center gap-2 text-slate-300">
                                <ChevronRight className="h-4 w-4 text-orange-400" />
                                <span>Neue Technologien (KI, Biometrie)</span>
                              </li>
                              <li className="flex items-center gap-2 text-slate-300">
                                <ChevronRight className="h-4 w-4 text-orange-400" />
                                <span>Scoring / Bonitätsprüfungen</span>
                              </li>
                              <li className="flex items-center gap-2 text-slate-300">
                                <ChevronRight className="h-4 w-4 text-orange-400" />
                                <span>Gesundheitsdaten in großem Umfang</span>
                              </li>
                              <li className="flex items-center gap-2 text-slate-300">
                                <ChevronRight className="h-4 w-4 text-orange-400" />
                                <span>Datenverarbeitung vulnerabler Gruppen</span>
                              </li>
                              <li className="flex items-center gap-2 text-slate-300">
                                <ChevronRight className="h-4 w-4 text-orange-400" />
                                <span>Innovative Nutzung/Anwendung</span>
                              </li>
                              <li className="flex items-center gap-2 text-slate-300">
                                <ChevronRight className="h-4 w-4 text-orange-400" />
                                <span>Verhindert Ausübung von Rechten</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="mt-6 bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                          <h4 className="font-semibold text-emerald-400 mb-3">Blacklists der Aufsichtsbehörden</h4>
                          <p className="text-slate-300 mb-3">
                            Die deutschen Datenschutzaufsichtsbehörden haben eine gemeinsame Liste von Verarbeitungsvorgängen veröffentlicht, 
                            für die eine DSFA durchzuführen ist:
                          </p>
                          <div className="grid md:grid-cols-2 gap-3 text-sm">
                            <Badge className="bg-slate-700 text-slate-300 p-2">Mitarbeiterüberwachung</Badge>
                            <Badge className="bg-slate-700 text-slate-300 p-2">Kredit-/Bonitätsbewertung</Badge>
                            <Badge className="bg-slate-700 text-slate-300 p-2">Versicherungsrisikobewertung</Badge>
                            <Badge className="bg-slate-700 text-slate-300 p-2">Genetische Datenverarbeitung</Badge>
                            <Badge className="bg-slate-700 text-slate-300 p-2">Tracking-/Lokalisierungsdaten</Badge>
                            <Badge className="bg-slate-700 text-slate-300 p-2">Biometrische Identifikation</Badge>
                          </div>
                        </div>
                      </div>

                      {/* DSFA Prozess */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                          <BarChart3 className="h-5 w-5" />
                          Der DSFA-Prozess in 7 Schritten
                        </h3>
                        
                        <div className="space-y-4">
                          {[
                            {
                              step: 1,
                              title: 'Systematische Beschreibung',
                              icon: FileText,
                              tasks: [
                                'Verarbeitungszwecke definieren',
                                'Art, Umfang und Umstände beschreiben',
                                'Datenflüsse dokumentieren',
                                'Eingesetzte Technologien'
                              ],
                              output: 'Detaillierte Prozessbeschreibung'
                            },
                            {
                              step: 2,
                              title: 'Notwendigkeit & Verhältnismäßigkeit',
                              icon: Scale,
                              tasks: [
                                'Zweck-Mittel-Relation prüfen',
                                'Alternative Methoden bewerten',
                                'Datenminimierung sicherstellen',
                                'Speicherdauer festlegen'
                              ],
                              output: 'Bewertung der Erforderlichkeit'
                            },
                            {
                              step: 3,
                              title: 'Risikoidentifikation',
                              icon: Search,
                              tasks: [
                                'Bedrohungen identifizieren',
                                'Schwachstellen analysieren',
                                'Mögliche Schäden bewerten',
                                'Eintrittswahrscheinlichkeit'
                              ],
                              output: 'Risikokatalog'
                            },
                            {
                              step: 4,
                              title: 'Risikobewertung',
                              icon: AlertTriangle,
                              tasks: [
                                'Schwere der Auswirkungen',
                                'Eintrittswahrscheinlichkeit',
                                'Risikomatrix erstellen',
                                'Gesamtrisiko bestimmen'
                              ],
                              output: 'Risikobewertungsmatrix'
                            },
                            {
                              step: 5,
                              title: 'Abhilfemaßnahmen',
                              icon: Shield,
                              tasks: [
                                'Technische Maßnahmen (TOM)',
                                'Organisatorische Maßnahmen',
                                'Restrisiko bewerten',
                                'Umsetzungsplan erstellen'
                              ],
                              output: 'Maßnahmenkatalog'
                            },
                            {
                              step: 6,
                              title: 'Konsultation',
                              icon: Users,
                              tasks: [
                                'Datenschutzbeauftragten einbeziehen',
                                'Betroffene konsultieren (wenn möglich)',
                                'Bei hohem Restrisiko: Aufsichtsbehörde',
                                'Feedback dokumentieren'
                              ],
                              output: 'Konsultationsergebnisse'
                            },
                            {
                              step: 7,
                              title: 'Dokumentation & Monitoring',
                              icon: FileCheck,
                              tasks: [
                                'DSFA-Bericht erstellen',
                                'Maßnahmen implementieren',
                                'Regelmäßige Überprüfung',
                                'Aktualisierung bei Änderungen'
                              ],
                              output: 'Finaler DSFA-Bericht'
                            }
                          ].map((phase) => {
                            const IconComponent = phase.icon;
                            return (
                              <motion.div
                                key={phase.step}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: phase.step * 0.1 }}
                                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-all"
                              >
                                <div className="flex items-start gap-4">
                                  <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                                      {phase.step}
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                      <IconComponent className="h-5 w-5 text-emerald-400" />
                                      <h4 className="text-lg font-semibold text-white">{phase.title}</h4>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-4">
                                      <div>
                                        <p className="text-sm font-medium text-slate-400 mb-2">Aufgaben:</p>
                                        <ul className="space-y-1">
                                          {phase.tasks.map((task) => (
                                            <li key={task} className="flex items-start gap-2 text-sm text-slate-400">
                                              <Check className="h-3 w-3 text-emerald-400 mt-0.5" />
                                              <span>{task}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div className="bg-emerald-500/10 rounded-lg p-4">
                                        <p className="text-sm font-medium text-emerald-400 mb-1">Ergebnis:</p>
                                        <p className="text-sm text-slate-300">{phase.output}</p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Risikobewertung Matrix */}
                      <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                          <Grid className="h-5 w-5" />
                          Risikobewertungsmatrix
                        </h3>
                        
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm">
                            <thead>
                              <tr>
                                <th className="p-2 text-left text-slate-400">Eintrittswahrscheinlichkeit</th>
                                <th className="p-2 text-center text-slate-400">Gering</th>
                                <th className="p-2 text-center text-slate-400">Mittel</th>
                                <th className="p-2 text-center text-slate-400">Hoch</th>
                                <th className="p-2 text-center text-slate-400">Sehr hoch</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="p-2 text-slate-400 font-medium">Sehr hoch</td>
                                <td className="p-2 text-center"><Badge className="bg-yellow-500/20 text-yellow-400">Mittel</Badge></td>
                                <td className="p-2 text-center"><Badge className="bg-orange-500/20 text-orange-400">Hoch</Badge></td>
                                <td className="p-2 text-center"><Badge className="bg-red-500/20 text-red-400">Sehr hoch</Badge></td>
                                <td className="p-2 text-center"><Badge className="bg-red-600/20 text-red-500">Kritisch</Badge></td>
                              </tr>
                              <tr>
                                <td className="p-2 text-slate-400 font-medium">Hoch</td>
                                <td className="p-2 text-center"><Badge className="bg-green-500/20 text-green-400">Niedrig</Badge></td>
                                <td className="p-2 text-center"><Badge className="bg-yellow-500/20 text-yellow-400">Mittel</Badge></td>
                                <td className="p-2 text-center"><Badge className="bg-orange-500/20 text-orange-400">Hoch</Badge></td>
                                <td className="p-2 text-center"><Badge className="bg-red-500/20 text-red-400">Sehr hoch</Badge></td>
                              </tr>
                              <tr>
                                <td className="p-2 text-slate-400 font-medium">Mittel</td>
                                <td className="p-2 text-center"><Badge className="bg-green-500/20 text-green-400">Niedrig</Badge></td>
                                <td className="p-2 text-center"><Badge className="bg-green-500/20 text-green-400">Niedrig</Badge></td>
                                <td className="p-2 text-center"><Badge className="bg-yellow-500/20 text-yellow-400">Mittel</Badge></td>
                                <td className="p-2 text-center"><Badge className="bg-orange-500/20 text-orange-400">Hoch</Badge></td>
                              </tr>
                              <tr>
                                <td className="p-2 text-slate-400 font-medium">Gering</td>
                                <td className="p-2 text-center"><Badge className="bg-green-500/20 text-green-400">Niedrig</Badge></td>
                                <td className="p-2 text-center"><Badge className="bg-green-500/20 text-green-400">Niedrig</Badge></td>
                                <td className="p-2 text-center"><Badge className="bg-green-500/20 text-green-400">Niedrig</Badge></td>
                                <td className="p-2 text-center"><Badge className="bg-yellow-500/20 text-yellow-400">Mittel</Badge></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        
                        <div className="mt-4 text-sm text-slate-400">
                          <p className="font-medium mb-2">Handlungsempfehlungen:</p>
                          <ul className="space-y-1">
                            <li className="flex items-center gap-2">
                              <Badge className="bg-red-500/20 text-red-400 text-xs">Kritisch/Sehr hoch</Badge>
                              <span>→ Konsultation der Aufsichtsbehörde erforderlich</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Badge className="bg-orange-500/20 text-orange-400 text-xs">Hoch</Badge>
                              <span>→ Umfangreiche Schutzmaßnahmen implementieren</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Badge className="bg-yellow-500/20 text-yellow-400 text-xs">Mittel</Badge>
                              <span>→ Standard-Schutzmaßnahmen ausreichend</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Badge className="bg-green-500/20 text-green-400 text-xs">Niedrig</Badge>
                              <span>→ Basis-Schutzmaßnahmen genügen</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </section>

              {/* Implementierung Section */}
              <section id="implementierung" className="mt-16 space-y-8 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-white">DSGVO-Implementierung im Unternehmen</h2>
                        <Button
                          onClick={() => handleSectionComplete('implementierung')}
                          variant="outline"
                          size="sm"
                          className="border-slate-600 hover:border-emerald-500/50"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Als gelesen markieren
                        </Button>
                      </div>

                      <div className="mb-8">
                        <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                          <p className="text-slate-300 flex items-start gap-3">
                            <Rocket className="h-5 w-5 text-emerald-400 mt-0.5" />
                            <span>Eine erfolgreiche DSGVO-Implementierung erfordert einen strukturierten Ansatz, der technische, 
                            organisatorische und rechtliche Aspekte vereint. Der Prozess sollte als kontinuierliche Verbesserung verstanden werden.</span>
                          </p>
                        </div>
                      </div>

                      {/* Implementierungs-Roadmap */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                          <Route className="h-5 w-5" />
                          DSGVO-Implementierungs-Roadmap
                        </h3>
                        
                        <div className="space-y-6">
                          {[
                            {
                              phase: 'Phase 1: Analyse & Bestandsaufnahme',
                              duration: '4-6 Wochen',
                              icon: Search,
                              color: 'blue',
                              tasks: [
                                {
                                  title: 'Datenschutz-Audit',
                                  items: [
                                    'Ist-Zustand erfassen',
                                    'Datenflüsse identifizieren',
                                    'Verarbeitungstätigkeiten dokumentieren',
                                    'Rechtsgrundlagen prüfen'
                                  ]
                                },
                                {
                                  title: 'Gap-Analyse',
                                  items: [
                                    'Compliance-Lücken identifizieren',
                                    'Risikobewertung durchführen',
                                    'Prioritäten festlegen',
                                    'Ressourcenbedarf ermitteln'
                                  ]
                                }
                              ]
                            },
                            {
                              phase: 'Phase 2: Planung & Konzeption',
                              duration: '3-4 Wochen',
                              icon: Lightbulb,
                              color: 'purple',
                              tasks: [
                                {
                                  title: 'Strategieentwicklung',
                                  items: [
                                    'Datenschutzstrategie definieren',
                                    'Governance-Struktur aufbauen',
                                    'Verantwortlichkeiten zuweisen',
                                    'Budget- und Zeitplanung'
                                  ]
                                },
                                {
                                  title: 'Maßnahmenplanung',
                                  items: [
                                    'Technische Maßnahmen planen',
                                    'Prozesse neu gestalten',
                                    'Schulungskonzept entwickeln',
                                    'Kommunikationsstrategie'
                                  ]
                                }
                              ]
                            },
                            {
                              phase: 'Phase 3: Umsetzung & Implementierung',
                              duration: '8-12 Wochen',
                              icon: Settings,
                              color: 'emerald',
                              tasks: [
                                {
                                  title: 'Technische Umsetzung',
                                  items: [
                                    'Datenschutz by Design',
                                    'Sicherheitsmaßnahmen implementieren',
                                    'Löschkonzepte umsetzen',
                                    'Berechtigungsmanagement'
                                  ]
                                },
                                {
                                  title: 'Organisatorische Umsetzung',
                                  items: [
                                    'Prozesse implementieren',
                                    'Dokumentation erstellen',
                                    'Mitarbeiter schulen',
                                    'Datenschutzbeauftragten benennen'
                                  ]
                                }
                              ]
                            },
                            {
                              phase: 'Phase 4: Monitoring & Optimierung',
                              duration: 'Kontinuierlich',
                              icon: TrendingUp,
                              color: 'orange',
                              tasks: [
                                {
                                  title: 'Überwachung',
                                  items: [
                                    'KPIs definieren und messen',
                                    'Regelmäßige Audits',
                                    'Incident-Monitoring',
                                    'Compliance-Reporting'
                                  ]
                                },
                                {
                                  title: 'Kontinuierliche Verbesserung',
                                  items: [
                                    'Lessons Learned',
                                    'Prozessoptimierung',
                                    'Update bei Gesetzesänderungen',
                                    'Technologie-Updates'
                                  ]
                                }
                              ]
                            }
                          ].map((phase, phaseIndex) => {
                            const IconComponent = phase.icon;
                            return (
                              <motion.div
                                key={phase.phase}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: phaseIndex * 0.1 }}
                                className="bg-slate-900/50 rounded-xl border border-slate-700/50 overflow-hidden"
                              >
                                <div className={cn(
                                  "px-6 py-4 flex items-center justify-between",
                                  phase.color === 'blue' && "bg-gradient-to-r from-blue-900/50 to-blue-800/50",
                                  phase.color === 'purple' && "bg-gradient-to-r from-purple-900/50 to-purple-800/50",
                                  phase.color === 'emerald' && "bg-gradient-to-r from-emerald-900/50 to-emerald-800/50",
                                  phase.color === 'orange' && "bg-gradient-to-r from-orange-900/50 to-orange-800/50"
                                )}>
                                  <div className="flex items-center gap-3">
                                    <IconComponent className="h-6 w-6 text-white" />
                                    <h4 className="text-lg font-semibold text-white">{phase.phase}</h4>
                                  </div>
                                  <Badge className="bg-white/20 text-white border-white/30">
                                    {phase.duration}
                                  </Badge>
                                </div>
                                
                                <div className="p-6">
                                  <div className="grid md:grid-cols-2 gap-6">
                                    {phase.tasks.map((task) => (
                                      <div key={task.title} className="bg-slate-800/50 rounded-lg p-4">
                                        <h5 className="font-semibold text-emerald-400 mb-3 flex items-center gap-2">
                                          <ChevronRight className="h-4 w-4" />
                                          {task.title}
                                        </h5>
                                        <ul className="space-y-2">
                                          {task.items.map((item) => (
                                            <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                                              <CheckCircle2 className="h-3 w-3 text-emerald-400 mt-0.5" />
                                              <span>{item}</span>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Kritische Erfolgsfaktoren */}
                      <div className="mb-8 bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                          <Star className="h-5 w-5" />
                          Kritische Erfolgsfaktoren
                        </h3>
                        
                        <div className="grid md:grid-cols-3 gap-6">
                          {[
                            {
                              factor: 'Management-Commitment',
                              icon: Users,
                              description: 'Unterstützung der Führungsebene ist essentiell',
                              actions: [
                                'C-Level Sponsorship sichern',
                                'Budget bereitstellen',
                                'Datenschutz als Unternehmenswert',
                                'Vorbildfunktion wahrnehmen'
                              ]
                            },
                            {
                              factor: 'Organisationskultur',
                              icon: Building2,
                              description: 'Datenschutz muss in der Unternehmenskultur verankert werden',
                              actions: [
                                'Awareness schaffen',
                                'Positive Fehlerkultur',
                                'Kontinuierliche Schulungen',
                                'Anreizsysteme schaffen'
                              ]
                            },
                            {
                              factor: 'Technologie & Prozesse',
                              icon: Cpu,
                              description: 'Moderne Technologie und effiziente Prozesse',
                              actions: [
                                'Privacy by Design',
                                'Automatisierung nutzen',
                                'Tools und Software',
                                'Prozessintegration'
                              ]
                            }
                          ].map((factor) => {
                            const IconComponent = factor.icon;
                            return (
                              <div key={factor.factor} className="bg-slate-800/50 rounded-lg p-6">
                                <div className="flex items-center gap-3 mb-4">
                                  <div className="p-3 bg-emerald-500/20 rounded-lg">
                                    <IconComponent className="h-6 w-6 text-emerald-400" />
                                  </div>
                                  <h4 className="font-semibold text-white">{factor.factor}</h4>
                                </div>
                                <p className="text-sm text-slate-400 mb-4">{factor.description}</p>
                                <ul className="space-y-2">
                                  {factor.actions.map((action) => (
                                    <li key={action} className="flex items-start gap-2 text-sm text-slate-300">
                                      <ArrowRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                      <span>{action}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Typische Herausforderungen */}
                      <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-xl p-6 border border-red-500/20">
                        <h3 className="text-xl font-semibold text-red-400 mb-4 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          Typische Herausforderungen & Lösungsansätze
                        </h3>
                        
                        <div className="space-y-4">
                          {[
                            {
                              challenge: 'Widerstand der Mitarbeiter',
                              solution: 'Change Management, Schulungen, Benefits kommunizieren'
                            },
                            {
                              challenge: 'Komplexität der Anforderungen',
                              solution: 'Schritt-für-Schritt-Ansatz, externe Expertise, Priorisierung'
                            },
                            {
                              challenge: 'Technische Altlasten',
                              solution: 'Migrationsstrategie, Privacy by Design bei Neuimplementierung'
                            },
                            {
                              challenge: 'Internationale Datenflüsse',
                              solution: 'SCCs, Angemessenheitsbeschlüsse, lokale Datenhaltung'
                            },
                            {
                              challenge: 'Ressourcenmangel',
                              solution: 'Priorisierung nach Risiko, Tools zur Automatisierung, Outsourcing'
                            }
                          ].map((item) => (
                            <div key={item.challenge} className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg">
                              <XCircle className="h-5 w-5 text-red-400 mt-0.5" />
                              <div className="flex-1">
                                <p className="font-medium text-white mb-1">{item.challenge}</p>
                                <p className="text-sm text-slate-400">
                                  <span className="text-emerald-400 font-medium">Lösung:</span> {item.solution}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </section>

              {/* Dokumentation Section */}
              <section id="dokumentation" className="mt-16 space-y-8 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-white">Dokumentation & Nachweispflichten</h2>
                        <Button
                          onClick={() => handleSectionComplete('dokumentation')}
                          variant="outline"
                          size="sm"
                          className="border-slate-600 hover:border-emerald-500/50"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Als gelesen markieren
                        </Button>
                      </div>

                      <div className="mb-8">
                        <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                          <p className="text-slate-300 flex items-start gap-3">
                            <FileText className="h-5 w-5 text-blue-400 mt-0.5" />
                            <span>Die Rechenschaftspflicht (Art. 5 Abs. 2 DSGVO) verlangt, dass Sie die Einhaltung der 
                            Datenschutzgrundsätze nachweisen können. Eine vollständige Dokumentation ist daher unverzichtbar.</span>
                          </p>
                        </div>
                      </div>

                      {/* Pflichtdokumentation */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                          <FileCheck className="h-5 w-5" />
                          Pflichtdokumentation nach DSGVO
                        </h3>
                        
                        <div className="space-y-6">
                          {[
                            {
                              document: 'Verarbeitungsverzeichnis',
                              article: 'Art. 30 DSGVO',
                              mandatory: 'Immer (mit Ausnahmen für KMU)',
                              icon: Database,
                              content: [
                                'Name und Kontaktdaten des Verantwortlichen',
                                'Zwecke der Verarbeitung',
                                'Kategorien betroffener Personen und Daten',
                                'Kategorien von Empfängern',
                                'Drittlandübermittlungen',
                                'Löschfristen',
                                'Technische und organisatorische Maßnahmen'
                              ],
                              template: true,
                              updateFrequency: 'Bei jeder Änderung'
                            },
                            {
                              document: 'Datenschutzerklärung',
                              article: 'Art. 13/14 DSGVO',
                              mandatory: 'Immer',
                              icon: Globe,
                              content: [
                                'Identität des Verantwortlichen',
                                'Kontaktdaten DSB',
                                'Verarbeitungszwecke und Rechtsgrundlagen',
                                'Berechtigte Interessen',
                                'Empfänger/Empfängerkategorien',
                                'Speicherdauer',
                                'Betroffenenrechte',
                                'Beschwerderecht'
                              ],
                              template: true,
                              updateFrequency: 'Bei Änderungen der Verarbeitung'
                            },
                            {
                              document: 'Auftragsverarbeitungsverträge',
                              article: 'Art. 28 DSGVO',
                              mandatory: 'Bei Auftragsverarbeitung',
                              icon: FileText,
                              content: [
                                'Gegenstand und Dauer der Verarbeitung',
                                'Art und Zweck der Verarbeitung',
                                'Art der personenbezogenen Daten',
                                'Kategorien betroffener Personen',
                                'Pflichten des Auftragsverarbeiters',
                                'Unterstützungspflichten',
                                'Löschung nach Beendigung'
                              ],
                              template: true,
                              updateFrequency: 'Bei neuen Dienstleistern'
                            },
                            {
                              document: 'TOM-Dokumentation',
                              article: 'Art. 32 DSGVO',
                              mandatory: 'Immer',
                              icon: Shield,
                              content: [
                                'Pseudonymisierung und Verschlüsselung',
                                'Vertraulichkeit, Integrität, Verfügbarkeit',
                                'Belastbarkeit der Systeme',
                                'Wiederherstellbarkeit',
                                'Verfahren zur Überprüfung',
                                'Physische Sicherheit',
                                'Zugangskontrolle'
                              ],
                              template: true,
                              updateFrequency: 'Jährlich oder bei Änderungen'
                            },
                            {
                              document: 'Datenschutz-Folgenabschätzung',
                              article: 'Art. 35 DSGVO',
                              mandatory: 'Bei hohem Risiko',
                              icon: AlertTriangle,
                              content: [
                                'Systematische Beschreibung',
                                'Notwendigkeit und Verhältnismäßigkeit',
                                'Risikobewertung',
                                'Abhilfemaßnahmen',
                                'Stellungnahme DSB',
                                'Ggf. Konsultation Aufsichtsbehörde'
                              ],
                              template: true,
                              updateFrequency: 'Bei wesentlichen Änderungen'
                            },
                            {
                              document: 'Einwilligungsnachweise',
                              article: 'Art. 7 DSGVO',
                              mandatory: 'Bei Einwilligung als Rechtsgrundlage',
                              icon: CheckSquare,
                              content: [
                                'Identität der einwilligenden Person',
                                'Zeitpunkt der Einwilligung',
                                'Umfang der Einwilligung',
                                'Art der Einholung',
                                'Informationen bei Einholung',
                                'Widerrufsmöglichkeit'
                              ],
                              template: false,
                              updateFrequency: 'Fortlaufend'
                            }
                          ].map((doc, index) => {
                            const IconComponent = doc.icon;
                            return (
                              <motion.div
                                key={doc.document}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-slate-900/50 rounded-xl border border-slate-700/50 overflow-hidden hover:border-emerald-500/30 transition-all"
                              >
                                <div className="bg-gradient-to-r from-slate-800 to-slate-700 px-6 py-4">
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                      <IconComponent className="h-6 w-6 text-emerald-400" />
                                      <h4 className="text-lg font-semibold text-white">{doc.document}</h4>
                                    </div>
                                    <div className="flex items-center gap-2">
                                      <Badge className="bg-slate-600 text-slate-300">{doc.article}</Badge>
                                      {doc.template && (
                                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                                          Vorlage verfügbar
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="p-6">
                                  <div className="flex items-center gap-2 mb-4 text-sm">
                                    <span className="font-medium text-slate-400">Pflicht:</span>
                                    <span className="text-slate-300">{doc.mandatory}</span>
                                    <span className="text-slate-500">|</span>
                                    <span className="font-medium text-slate-400">Update:</span>
                                    <span className="text-slate-300">{doc.updateFrequency}</span>
                                  </div>
                                  
                                  <div className="bg-slate-800/50 rounded-lg p-4">
                                    <h5 className="font-medium text-emerald-400 mb-3 text-sm">Inhalt/Anforderungen:</h5>
                                    <ul className="space-y-1">
                                      {doc.content.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
                                          <Check className="h-3 w-3 text-emerald-400 mt-0.5" />
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Best Practices für Dokumentation */}
                      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-6 border border-emerald-500/20">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                          <Award className="h-5 w-5" />
                          Best Practices für DSGVO-Dokumentation
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-white mb-2">Strukturierung</h4>
                              <ul className="space-y-1 text-sm text-slate-300">
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Zentrale Dokumentenablage</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Einheitliche Namenskonvention</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Versionskontrolle</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Zugriffsberechtigungen</span>
                                </li>
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-medium text-white mb-2">Automatisierung</h4>
                              <ul className="space-y-1 text-sm text-slate-300">
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Template-basierte Erstellung</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Workflow-Integration</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Automatische Erinnerungen</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Audit-Trail</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium text-white mb-2">Qualitätssicherung</h4>
                              <ul className="space-y-1 text-sm text-slate-300">
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Regelmäßige Reviews</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Vier-Augen-Prinzip</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Vollständigkeitsprüfungen</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Aktualitätskontrolle</span>
                                </li>
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-medium text-white mb-2">Notfallvorbereitung</h4>
                              <ul className="space-y-1 text-sm text-slate-300">
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Backup-Strategie</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Offline-Kopien wichtiger Dokumente</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Schneller Zugriff bei Prüfungen</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <ChevronRight className="h-3 w-3 text-emerald-400 mt-0.5" />
                                  <span>Export-Funktionen</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Dokumentations-Checkliste */}
                      <div className="mt-8 bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                          <CheckSquare className="h-5 w-5" />
                          Quick-Check: Ist Ihre Dokumentation vollständig?
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-4">
                          {[
                            'Verarbeitungsverzeichnis aktuell?',
                            'Datenschutzerklärung auf Website?',
                            'Alle AVV unterschrieben?',
                            'TOM dokumentiert?',
                            'DSFAs wo nötig durchgeführt?',
                            'Einwilligungen archiviert?',
                            'Löschkonzept vorhanden?',
                            'Betroffenenanfragen dokumentiert?',
                            'Datenpannen-Register?',
                            'Schulungsnachweise?'
                          ].map((item, index) => (
                            <div
                              key={item}
                              className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-lg hover:bg-slate-800/70 transition-colors cursor-pointer"
                              onClick={() => setCheckedItems(prev => ({...prev, [index]: !prev[index]}))}
                            >
                              <div className={cn(
                                "w-5 h-5 rounded border-2 flex items-center justify-center transition-colors",
                                checkedItems[index] 
                                  ? "bg-emerald-500 border-emerald-500" 
                                  : "border-slate-600"
                              )}>
                                {checkedItems[index] && <Check className="h-3 w-3 text-white" />}
                              </div>
                              <span className="text-slate-300">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </section>

              {/* Audit & Bewertung Section */}
              <section id="audit-bewertung" className="mt-16 space-y-8 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-white">Audit & Bewertung</h2>
                        <Button
                          onClick={() => handleSectionComplete('audit-bewertung')}
                          variant="outline"
                          size="sm"
                          className="border-slate-600 hover:border-emerald-500/50"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Als gelesen markieren
                        </Button>
                      </div>

                      <div className="mb-8">
                        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                          <p className="text-slate-300 flex items-start gap-3">
                            <Search className="h-5 w-5 text-purple-400 mt-0.5" />
                            <span>Regelmäßige Audits sind essentiell, um die Wirksamkeit Ihrer Datenschutzmaßnahmen zu überprüfen 
                            und kontinuierliche Verbesserungen sicherzustellen.</span>
                          </p>
                        </div>
                      </div>

                      {/* Audit-Arten */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                          <BarChart3 className="h-5 w-5" />
                          Arten von Datenschutz-Audits
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {[
                            {
                              type: 'Internes Audit',
                              icon: Building2,
                              frequency: 'Halbjährlich',
                              description: 'Selbstbewertung durch interne Teams',
                              scope: [
                                'Prozesskonformität prüfen',
                                'Dokumentation reviewen',
                                'Mitarbeiter-Compliance',
                                'Technische Maßnahmen'
                              ],
                              advantages: ['Kosteneffizient', 'Schnelle Umsetzung', 'Internes Know-how'],
                              disadvantages: ['Betriebsblindheit', 'Begrenzte Objektivität']
                            },
                            {
                              type: 'Externes Audit',
                              icon: Shield,
                              frequency: 'Jährlich',
                              description: 'Unabhängige Prüfung durch Dritte',
                              scope: [
                                'Vollständige DSGVO-Prüfung',
                                'Zertifizierungsvorbereitung',
                                'Benchmarking',
                                'Risikobewertung'
                              ],
                              advantages: ['Objektive Bewertung', 'Externe Expertise', 'Glaubwürdigkeit'],
                              disadvantages: ['Höhere Kosten', 'Zeitaufwand']
                            },
                            {
                              type: 'Behördliches Audit',
                              icon: Gavel,
                              frequency: 'Anlassbezogen',
                              description: 'Prüfung durch Aufsichtsbehörde',
                              scope: [
                                'Beschwerdebearbeitung',
                                'Stichprobenkontrollen',
                                'Datenpannen-Nachprüfung',
                                'Branchenprüfungen'
                              ],
                              advantages: ['Rechtssicherheit', 'Verbindliche Klärung'],
                              disadvantages: ['Bußgeldrisiko', 'Öffentlichkeitswirkung']
                            },
                            {
                              type: 'Kontinuierliches Monitoring',
                              icon: Activity,
                              frequency: 'Laufend',
                              description: 'Automatisierte Überwachung',
                              scope: [
                                'KPI-Tracking',
                                'Incident-Monitoring',
                                'Compliance-Dashboards',
                                'Echtzeit-Alarme'
                              ],
                              advantages: ['Früherkennung', 'Automatisierung', 'Trend-Analysen'],
                              disadvantages: ['Tool-Abhängigkeit', 'Setup-Aufwand']
                            }
                          ].map((audit) => {
                            const IconComponent = audit.icon;
                            return (
                              <motion.div
                                key={audit.type}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-all"
                              >
                                <div className="flex items-center justify-between mb-4">
                                  <div className="flex items-center gap-3">
                                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg">
                                      <IconComponent className="h-6 w-6 text-purple-400" />
                                    </div>
                                    <div>
                                      <h4 className="text-lg font-semibold text-white">{audit.type}</h4>
                                      <p className="text-sm text-slate-400">{audit.description}</p>
                                    </div>
                                  </div>
                                  <Badge className="bg-slate-700 text-slate-300">{audit.frequency}</Badge>
                                </div>
                                
                                <div className="space-y-4">
                                  <div>
                                    <h5 className="font-medium text-emerald-400 mb-2 text-sm">Prüfumfang:</h5>
                                    <ul className="space-y-1">
                                      {audit.scope.map((item) => (
                                        <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                                          <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                  
                                  <div className="grid grid-cols-2 gap-3 text-xs">
                                    <div className="bg-green-500/10 rounded p-2">
                                      <p className="font-medium text-green-400 mb-1">Vorteile:</p>
                                      <ul className="space-y-0.5 text-slate-400">
                                        {audit.advantages.map((adv) => (
                                          <li key={adv}>• {adv}</li>
                                        ))}
                                      </ul>
                                    </div>
                                    <div className="bg-red-500/10 rounded p-2">
                                      <p className="font-medium text-red-400 mb-1">Nachteile:</p>
                                      <ul className="space-y-0.5 text-slate-400">
                                        {audit.disadvantages.map((dis) => (
                                          <li key={dis}>• {dis}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Audit-Prozess */}
                      <div className="mb-8 bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                          <Settings className="h-5 w-5" />
                          Der Audit-Prozess im Detail
                        </h3>
                        
                        <div className="space-y-1">
                          {[
                            {
                              phase: 'Vorbereitung',
                              tasks: ['Scope definieren', 'Team zusammenstellen', 'Dokumente sammeln', 'Zeitplan erstellen']
                            },
                            {
                              phase: 'Durchführung',
                              tasks: ['Interviews führen', 'Prozesse prüfen', 'Systeme testen', 'Stichproben ziehen']
                            },
                            {
                              phase: 'Analyse',
                              tasks: ['Findings bewerten', 'Risiken klassifizieren', 'Ursachen identifizieren', 'Empfehlungen entwickeln']
                            },
                            {
                              phase: 'Berichterstattung',
                              tasks: ['Audit-Bericht erstellen', 'Management-Summary', 'Präsentation vorbereiten', 'Maßnahmenplan']
                            },
                            {
                              phase: 'Follow-up',
                              tasks: ['Umsetzung überwachen', 'Wirksamkeit prüfen', 'Lessons Learned', 'Nächstes Audit planen']
                            }
                          ].map((phase, index) => (
                            <div key={phase.phase} className="flex items-start gap-4 p-4 hover:bg-slate-800/50 rounded-lg transition-colors">
                              <div className="flex-shrink-0 w-32">
                                <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                                  Phase {index + 1}
                                </Badge>
                              </div>
                              <div className="flex-1">
                                <h4 className="font-semibold text-white mb-2">{phase.phase}</h4>
                                <div className="flex flex-wrap gap-2">
                                  {phase.tasks.map((task) => (
                                    <span key={task} className="text-xs bg-slate-700/50 px-2 py-1 rounded text-slate-300">
                                      {task}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* KPIs und Metriken */}
                      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-xl p-6 border border-emerald-500/20">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                          <PieChart className="h-5 w-5" />
                          Wichtige KPIs für Datenschutz-Compliance
                        </h3>
                        
                        <div className="grid md:grid-cols-3 gap-4">
                          {[
                            {
                              category: 'Prozess-KPIs',
                              metrics: [
                                'Bearbeitungszeit Betroffenenanfragen',
                                'Anzahl durchgeführter DSFAs',
                                'Schulungsquote Mitarbeiter',
                                'Dokumentations-Vollständigkeit'
                              ]
                            },
                            {
                              category: 'Risiko-KPIs',
                              metrics: [
                                'Anzahl Datenpannen',
                                'Schwere der Vorfälle',
                                'Time-to-Detect',
                                'Time-to-Respond'
                              ]
                            },
                            {
                              category: 'Compliance-KPIs',
                              metrics: [
                                'Audit-Findings',
                                'Behördliche Anfragen',
                                'Beschwerden',
                                'Bußgelder'
                              ]
                            }
                          ].map((kpi) => (
                            <div key={kpi.category} className="bg-slate-800/50 rounded-lg p-4">
                              <h4 className="font-medium text-white mb-3">{kpi.category}</h4>
                              <ul className="space-y-2">
                                {kpi.metrics.map((metric) => (
                                  <li key={metric} className="flex items-center gap-2 text-sm text-slate-300">
                                    <BarChart3 className="h-3 w-3 text-emerald-400" />
                                    <span>{metric}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </section>

              {/* Technische Maßnahmen Section */}
              <section id="technische-massnahmen" className="mt-16 space-y-8 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-white">Technische Maßnahmen</h2>
                        <Button
                          onClick={() => handleSectionComplete('technische-massnahmen')}
                          variant="outline"
                          size="sm"
                          className="border-slate-600 hover:border-emerald-500/50"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Als gelesen markieren
                        </Button>
                      </div>

                      <div className="mb-8">
                        <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
                          <p className="text-slate-300 flex items-start gap-3">
                            <Shield className="h-5 w-5 text-blue-400 mt-0.5" />
                            <span>Technische und organisatorische Maßnahmen (TOM) sind das Herzstück des praktischen Datenschutzes. 
                            Sie stellen sicher, dass personenbezogene Daten angemessen geschützt werden.</span>
                          </p>
                        </div>
                      </div>

                      {/* Verschlüsselung */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                          <Lock className="h-5 w-5" />
                          Verschlüsselung & Kryptografie
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                              <Database className="h-4 w-4 text-emerald-400" />
                              Daten in Ruhe (Data at Rest)
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5" />
                                <span>AES-256 für Datenbankenverschlüsselung</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5" />
                                <span>Vollständige Festplattenverschlüsselung (FDE)</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5" />
                                <span>Verschlüsselte Backups mit separater Schlüsselverwaltung</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5" />
                                <span>Hardware Security Modules (HSM) für kritische Daten</span>
                              </li>
                            </ul>
                          </div>
                          
                          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                            <h4 className="font-semibold text-white mb-4 flex items-center gap-2">
                              <Wifi className="h-4 w-4 text-emerald-400" />
                              Daten in Bewegung (Data in Transit)
                            </h4>
                            <ul className="space-y-2 text-sm text-slate-300">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5" />
                                <span>TLS 1.3 für alle Webverbindungen</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5" />
                                <span>VPN für Remote-Zugriffe</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5" />
                                <span>End-to-End-Verschlüsselung für Messaging</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 mt-0.5" />
                                <span>SFTP/SCP für Dateitransfers</span>
                              </li>
                            </ul>
                          </div>
                        </div>

                        <div className="bg-amber-500/10 border border-amber-500/20 rounded-lg p-4">
                          <p className="text-sm text-amber-200 flex items-start gap-2">
                            <AlertCircle className="h-4 w-4 mt-0.5" />
                            <span><strong>Wichtig:</strong> Verschlüsselung ist nur so stark wie Ihre Schlüsselverwaltung. 
                            Implementieren Sie ein robustes Key Management System (KMS).</span>
                          </p>
                        </div>
                      </div>

                      {/* Zugriffskontrolle */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                          <Users className="h-5 w-5" />
                          Zugriffskontrolle & Authentifizierung
                        </h3>
                        
                        <div className="space-y-6">
                          {/* Multi-Faktor-Authentifizierung */}
                          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                            <h4 className="font-semibold text-white mb-4">Multi-Faktor-Authentifizierung (MFA)</h4>
                            <div className="grid md:grid-cols-3 gap-4">
                              {[
                                { factor: 'Wissen', examples: ['Passwort', 'PIN', 'Sicherheitsfrage'], icon: Brain },
                                { factor: 'Besitz', examples: ['Smartphone', 'Token', 'Smartcard'], icon: Smartphone },
                                { factor: 'Biometrie', examples: ['Fingerabdruck', 'Gesichtserkennung', 'Iris-Scan'], icon: Eye }
                              ].map((mfa) => {
                                const IconComponent = mfa.icon;
                                return (
                                  <div key={mfa.factor} className="bg-slate-800/50 rounded-lg p-4">
                                    <div className="flex items-center gap-2 mb-3">
                                      <IconComponent className="h-5 w-5 text-emerald-400" />
                                      <h5 className="font-medium text-white">{mfa.factor}</h5>
                                    </div>
                                    <ul className="space-y-1 text-sm text-slate-400">
                                      {mfa.examples.map((ex) => (
                                        <li key={ex}>• {ex}</li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })}
                            </div>
                          </div>

                          {/* Least Privilege Principle */}
                          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                            <h4 className="font-semibold text-white mb-4">Prinzip der minimalen Rechte</h4>
                            <div className="space-y-4">
                              <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                  <h5 className="text-emerald-400 font-medium mb-2">Role-Based Access Control (RBAC)</h5>
                                  <ul className="space-y-1 text-sm text-slate-300">
                                    <li>• Rollen definieren statt Einzelberechtigungen</li>
                                    <li>• Regelmäßige Überprüfung der Rollenzuweisungen</li>
                                    <li>• Trennung von Test- und Produktivumgebung</li>
                                  </ul>
                                </div>
                                <div>
                                  <h5 className="text-emerald-400 font-medium mb-2">Just-in-Time Access</h5>
                                  <ul className="space-y-1 text-sm text-slate-300">
                                    <li>• Zeitlich begrenzte Berechtigungen</li>
                                    <li>• Automatisches Entfernen nach Ablauf</li>
                                    <li>• Approval-Workflows für kritische Zugriffe</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Netzwerksicherheit */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                          <Network className="h-5 w-5" />
                          Netzwerk- & Systemsicherheit
                        </h3>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {[
                            {
                              title: 'Firewall & IDS/IPS',
                              measures: [
                                'Web Application Firewall (WAF)',
                                'Intrusion Detection System',
                                'DDoS-Schutz',
                                'Geo-Blocking bei Bedarf'
                              ]
                            },
                            {
                              title: 'Netzwerksegmentierung',
                              measures: [
                                'DMZ für öffentliche Services',
                                'VLAN-Trennung',
                                'Micro-Segmentation',
                                'Zero Trust Architecture'
                              ]
                            },
                            {
                              title: 'Monitoring & Logging',
                              measures: [
                                'SIEM-System',
                                'Log-Aggregation',
                                'Anomalie-Erkennung',
                                'Incident Response Plan'
                              ]
                            },
                            {
                              title: 'Patch Management',
                              measures: [
                                'Automatische Updates',
                                'Vulnerability Scanning',
                                'Patch-Test-Prozess',
                                'Emergency Patches'
                              ]
                            },
                            {
                              title: 'Endpoint Security',
                              measures: [
                                'Antivirus/Anti-Malware',
                                'Device Encryption',
                                'Mobile Device Management',
                                'USB-Port-Kontrolle'
                              ]
                            },
                            {
                              title: 'Backup & Recovery',
                              measures: [
                                '3-2-1 Backup-Regel',
                                'Regelmäßige Restore-Tests',
                                'Offline-Backups',
                                'Disaster Recovery Plan'
                              ]
                            }
                          ].map((category) => (
                            <div key={category.title} className="bg-slate-900/50 rounded-lg p-4 border border-slate-700/50">
                              <h4 className="font-medium text-white mb-3">{category.title}</h4>
                              <ul className="space-y-1">
                                {category.measures.map((measure) => (
                                  <li key={measure} className="flex items-center gap-2 text-sm text-slate-300">
                                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                                    <span>{measure}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Privacy by Design */}
                      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                          <Zap className="h-5 w-5" />
                          Privacy by Design & Default
                        </h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-white mb-3">Privacy by Design Prinzipien:</h4>
                            <ul className="space-y-2 text-sm text-slate-300">
                              <li className="flex items-start gap-2">
                                <Badge className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 mt-0.5">1</Badge>
                                <span>Proaktiv statt reaktiv</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Badge className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 mt-0.5">2</Badge>
                                <span>Datenschutz als Standard</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Badge className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 mt-0.5">3</Badge>
                                <span>Volle Funktionalität</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <Badge className="bg-emerald-500/20 text-emerald-400 px-2 py-0.5 mt-0.5">4</Badge>
                                <span>End-to-End-Sicherheit</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-white mb-3">Praktische Umsetzung:</h4>
                            <ul className="space-y-2 text-sm text-slate-300">
                              <li className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 text-emerald-400 mt-0.5" />
                                <span>Datenminimierung in allen Prozessen</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 text-emerald-400 mt-0.5" />
                                <span>Pseudonymisierung wo möglich</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 text-emerald-400 mt-0.5" />
                                <span>Automatische Datenlöschung</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <ArrowRight className="h-4 w-4 text-emerald-400 mt-0.5" />
                                <span>Privacy-freundliche Defaults</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </section>

              {/* Organisatorische Maßnahmen Section */}
              <section id="organisatorische-massnahmen" className="mt-16 space-y-8 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h2 className="text-3xl font-bold text-white">Organisatorische Maßnahmen</h2>
                        <Button
                          onClick={() => handleSectionComplete('organisatorische-massnahmen')}
                          variant="outline"
                          size="sm"
                          className="border-slate-600 hover:border-emerald-500/50"
                        >
                          <CheckCircle2 className="h-4 w-4 mr-2" />
                          Als gelesen markieren
                        </Button>
                      </div>

                      <div className="mb-8">
                        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
                          <p className="text-slate-300 flex items-start gap-3">
                            <Users className="h-5 w-5 text-purple-400 mt-0.5" />
                            <span>Organisatorische Maßnahmen bilden das Fundament für eine gelebte Datenschutzkultur 
                            im Unternehmen und stellen sicher, dass technische Maßnahmen effektiv umgesetzt werden.</span>
                          </p>
                        </div>
                      </div>

                      {/* Datenschutzorganisation */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                          <Building2 className="h-5 w-5" />
                          Datenschutzorganisation
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                            <h4 className="font-semibold text-white mb-4">Rollen & Verantwortlichkeiten</h4>
                            <div className="space-y-4">
                              <div className="border-l-4 border-emerald-500 pl-4">
                                <h5 className="font-medium text-emerald-400">Geschäftsführung</h5>
                                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                  <li>• Gesamtverantwortung für Datenschutz</li>
                                  <li>• Bereitstellung von Ressourcen</li>
                                  <li>• Strategische Entscheidungen</li>
                                </ul>
                              </div>
                              <div className="border-l-4 border-blue-500 pl-4">
                                <h5 className="font-medium text-blue-400">Datenschutzbeauftragter</h5>
                                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                  <li>• Überwachung der Compliance</li>
                                  <li>• Beratung und Schulung</li>
                                  <li>• Ansprechpartner für Behörden</li>
                                </ul>
                              </div>
                              <div className="border-l-4 border-purple-500 pl-4">
                                <h5 className="font-medium text-purple-400">Fachbereiche</h5>
                                <ul className="mt-2 space-y-1 text-sm text-slate-300">
                                  <li>• Umsetzung im Tagesgeschäft</li>
                                  <li>• Meldung von Vorfällen</li>
                                  <li>• Teilnahme an Schulungen</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                            <h4 className="font-semibold text-white mb-4">Datenschutz-Management-System</h4>
                            <div className="space-y-3">
                              {[
                                { phase: 'Plan', tasks: ['Risikoanalyse', 'Ziele definieren', 'Maßnahmen planen'] },
                                { phase: 'Do', tasks: ['Prozesse implementieren', 'Schulungen durchführen', 'Dokumentieren'] },
                                { phase: 'Check', tasks: ['Audits', 'KPI-Monitoring', 'Bewertung'] },
                                { phase: 'Act', tasks: ['Verbesserungen', 'Korrekturmaßnahmen', 'Updates'] }
                              ].map((pdca, index) => (
                                <div key={pdca.phase} className="flex items-start gap-3">
                                  <div className="w-12 h-12 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full flex items-center justify-center">
                                    <span className="text-emerald-400 font-bold">{pdca.phase[0]}</span>
                                  </div>
                                  <div className="flex-1">
                                    <h5 className="font-medium text-white">{pdca.phase}</h5>
                                    <p className="text-sm text-slate-400">{pdca.tasks.join(' • ')}</p>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Mitarbeiterschulung */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                          <GraduationCap className="h-5 w-5" />
                          Schulung & Sensibilisierung
                        </h3>
                        
                        <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50">
                          <div className="grid md:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                                <Users className="h-4 w-4 text-emerald-400" />
                                Zielgruppen
                              </h4>
                              <ul className="space-y-2 text-sm">
                                <li className="flex items-center justify-between">
                                  <span className="text-slate-300">Neue Mitarbeiter</span>
                                  <Badge className="bg-red-500/20 text-red-400">Pflicht</Badge>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span className="text-slate-300">IT-Personal</span>
                                  <Badge className="bg-orange-500/20 text-orange-400">Vertieft</Badge>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span className="text-slate-300">Führungskräfte</span>
                                  <Badge className="bg-blue-500/20 text-blue-400">Strategisch</Badge>
                                </li>
                                <li className="flex items-center justify-between">
                                  <span className="text-slate-300">HR-Abteilung</span>
                                  <Badge className="bg-purple-500/20 text-purple-400">Spezialisiert</Badge>
                                </li>
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                                <BookOpen className="h-4 w-4 text-emerald-400" />
                                Schulungsinhalte
                              </h4>
                              <ul className="space-y-2 text-sm text-slate-300">
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                                  <span>DSGVO-Grundlagen</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                                  <span>Betroffenenrechte</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                                  <span>Datenpannen erkennen</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                                  <span>Sichere Kommunikation</span>
                                </li>
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-medium text-white mb-3 flex items-center gap-2">
                                <Calendar className="h-4 w-4 text-emerald-400" />
                                Schulungsrhythmus
                              </h4>
                              <div className="space-y-3">
                                <div className="bg-slate-800/50 rounded p-3">
                                  <p className="text-xs text-emerald-400 font-medium">Onboarding</p>
                                  <p className="text-sm text-slate-300">Innerhalb 4 Wochen</p>
                                </div>
                                <div className="bg-slate-800/50 rounded p-3">
                                  <p className="text-xs text-emerald-400 font-medium">Auffrischung</p>
                                  <p className="text-sm text-slate-300">Jährlich</p>
                                </div>
                                <div className="bg-slate-800/50 rounded p-3">
                                  <p className="text-xs text-emerald-400 font-medium">Updates</p>
                                  <p className="text-sm text-slate-300">Bei Änderungen</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Prozesse & Verfahren */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-6 flex items-center gap-2">
                          <FileText className="h-5 w-5" />
                          Prozesse & Verfahren
                        </h3>
                        
                        <div className="grid md:grid-cols-2 gap-6">
                          {[
                            {
                              title: 'Incident Response',
                              icon: AlertTriangle,
                              steps: [
                                'Erkennung & Meldung',
                                'Bewertung & Klassifizierung',
                                'Eindämmung & Behebung',
                                'Benachrichtigung (72h)',
                                'Dokumentation & Lessons Learned'
                              ],
                              critical: true
                            },
                            {
                              title: 'Betroffenenanfragen',
                              icon: Users,
                              steps: [
                                'Eingang & Identitätsprüfung',
                                'Fristenkontrolle (1 Monat)',
                                'Datensammlung',
                                'Prüfung & Freigabe',
                                'Antwort & Dokumentation'
                              ],
                              critical: false
                            },
                            {
                              title: 'Auftragsverarbeitung',
                              icon: FileCheck,
                              steps: [
                                'Prüfung des Dienstleisters',
                                'Vertragserstellung (AVV)',
                                'Technische Prüfung',
                                'Freigabe & Unterzeichnung',
                                'Regelmäßige Kontrolle'
                              ],
                              critical: false
                            },
                            {
                              title: 'Löschkonzept',
                              icon: Trash2,
                              steps: [
                                'Löschfristen definieren',
                                'Automatisierung prüfen',
                                'Ausnahmen dokumentieren',
                                'Regelmäßige Durchführung',
                                'Löschprotokoll führen'
                              ],
                              critical: true
                            }
                          ].map((process) => {
                            const IconComponent = process.icon;
                            return (
                              <div key={process.title} className="bg-slate-900/50 rounded-xl p-6 border border-slate-700/50 hover:border-emerald-500/30 transition-colors">
                                <div className="flex items-center justify-between mb-4">
                                  <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg ${process.critical ? 'bg-red-500/20' : 'bg-emerald-500/20'}`}>
                                      <IconComponent className={`h-5 w-5 ${process.critical ? 'text-red-400' : 'text-emerald-400'}`} />
                                    </div>
                                    <h4 className="font-semibold text-white">{process.title}</h4>
                                  </div>
                                  {process.critical && (
                                    <Badge className="bg-red-500/20 text-red-400">Kritisch</Badge>
                                  )}
                                </div>
                                <ol className="space-y-2">
                                  {process.steps.map((step, index) => (
                                    <li key={step} className="flex items-start gap-2 text-sm text-slate-300">
                                      <span className="text-emerald-400 font-medium">{index + 1}.</span>
                                      <span>{step}</span>
                                    </li>
                                  ))}
                                </ol>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Best Practices */}
                      <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-emerald-400 mb-4 flex items-center gap-2">
                          <Award className="h-5 w-5" />
                          Best Practices für organisatorische Maßnahmen
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h4 className="font-medium text-white mb-2">Do's</h4>
                            <ul className="space-y-1 text-sm text-slate-300">
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-3 w-3 text-green-400" />
                                <span>Klare Verantwortlichkeiten definieren</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-3 w-3 text-green-400" />
                                <span>Regelmäßige Schulungen durchführen</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-3 w-3 text-green-400" />
                                <span>Prozesse dokumentieren und leben</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle2 className="h-3 w-3 text-green-400" />
                                <span>Kontinuierliche Verbesserung</span>
                              </li>
                            </ul>
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-medium text-white mb-2">Don'ts</h4>
                            <ul className="space-y-1 text-sm text-slate-300">
                              <li className="flex items-center gap-2">
                                <XCircle className="h-3 w-3 text-red-400" />
                                <span>Datenschutz als IT-Thema abtun</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <XCircle className="h-3 w-3 text-red-400" />
                                <span>Einmal-Aktionen statt Kontinuität</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <XCircle className="h-3 w-3 text-red-400" />
                                <span>Mitarbeiter nicht einbeziehen</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <XCircle className="h-3 w-3 text-red-400" />
                                <span>Dokumentation vernachlässigen</span>
                              </li>
                            </ul>
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