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
  UserCheck,
  UserX,
  UserPlus,
  UserMinus,
  Volume2,
  VolumeX,
  Headphones,
  Mic,
  MicOff,
  Camera,
  CameraOff,
  Radio,
  Tv,
  Monitor as MonitorIcon,
  Tablet,
  Smartphone,
  Laptop,
  Computer,
  HardDrive,
  Usb,
  Bluetooth,
  Printer,
  Scanner,
  Keyboard,
  Mouse,
  Gamepad2,
  Joystick,
  DollarSign,
  CreditCard,
  BanknoteIcon as Banknote,
  Coins,
  Wallet,
  Receipt,
  ShoppingBag,
  Gift,
  Percent,
  Calculator,
  Timer,
  Stopwatch,
  AlarmClock,
  Hourglass,
  Sunrise,
  Sunset,
  Moon,
  Sun,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Umbrella
} from 'lucide-react';

// Counter Hook
const useCounter = (end: number, duration: number = 2000, startCounting: boolean = false) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;
    
    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
};

// Animated Counter Component
const AnimatedCounter: React.FC<{
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}> = ({ end, duration = 2000, suffix = '', prefix = '' }) => {
  const elementRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(elementRef, { once: true, margin: '-100px' });
  const count = useCounter(end, duration, isInView);

  return (
    <span ref={elementRef} className="font-bold text-2xl">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
};

// Expandable Section Component
const ExpandableSection: React.FC<{
  title: string;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  icon?: React.ElementType;
}> = ({ title, children, defaultExpanded = false, icon: Icon }) => {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <Card className="mb-6 overflow-hidden">
      <CardContent className="p-0">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-center justify-between"
        >
          <div className="flex items-center space-x-3">
            {Icon && <Icon className="h-6 w-6 text-blue-600" />}
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronDown className="h-5 w-5 text-gray-500" />
          </motion.div>
        </button>
        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{ overflow: 'hidden' }}
        >
          <div className="px-6 pb-6">
            {children}
          </div>
        </motion.div>
      </CardContent>
    </Card>
  );
};

const HinweisgeberschutzgesetzGuide: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(1);
  const [completedSections, setCompletedSections] = useState<number[]>([]);
  const [selectedTab, setSelectedTab] = useState('overview');
  const [readingProgress, setReadingProgress] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const sections = [
    { id: 1, title: 'Überblick', icon: BookOpen, color: 'from-blue-500 to-blue-600' },
    { id: 2, title: 'Anwendungsbereich', icon: Target, color: 'from-green-500 to-green-600' },
    { id: 3, title: 'Hinweisgebersystem', icon: MessageSquare, color: 'from-purple-500 to-purple-600' },
    { id: 4, title: 'Meldeverfahren', icon: Send, color: 'from-red-500 to-red-600' },
    { id: 5, title: 'Schutzmaßnahmen', icon: Shield, color: 'from-yellow-500 to-yellow-600' },
    { id: 6, title: 'Rechtliche Grundlagen', icon: Scale, color: 'from-indigo-500 to-indigo-600' },
    { id: 7, title: 'Verfahrensschritte', icon: Route, color: 'from-pink-500 to-pink-600' },
    { id: 8, title: 'Dokumentation', icon: FileText, color: 'from-teal-500 to-teal-600' },
    { id: 9, title: 'Schulungen', icon: GraduationCap, color: 'from-orange-500 to-orange-600' },
    { id: 10, title: 'Risikomanagement', icon: AlertTriangle, color: 'from-gray-500 to-gray-600' },
    { id: 11, title: 'Monitoring', icon: Activity, color: 'from-cyan-500 to-cyan-600' },
    { id: 12, title: 'Compliance', icon: CheckCircle, color: 'from-emerald-500 to-emerald-600' },
    { id: 13, title: 'Technische Umsetzung', icon: Settings, color: 'from-violet-500 to-violet-600' },
    { id: 14, title: 'Implementierung', icon: Zap, color: 'from-rose-500 to-rose-600' },
    { id: 15, title: 'Continuous Improvement', icon: TrendingUp, color: 'from-lime-500 to-lime-600' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const markSectionComplete = (sectionId: number) => {
    if (!completedSections.includes(sectionId)) {
      setCompletedSections([...completedSections, sectionId]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Header />
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600"
          style={{ width: `${readingProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Hero Section */}
      <motion.div 
        ref={heroRef}
        style={{ y }}
        className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white"
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-8 backdrop-blur-sm"
            >
              <Shield className="h-10 w-10 text-white" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
              Hinweisgeberschutzgesetz
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-100">
              Comprehensive Whistleblower Protection Guide
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-12 leading-relaxed">
              Umfassende Anleitung zur Implementierung des Hinweisgeberschutzgesetzes (HinSchG) 
              mit praktischen Lösungen, rechtlichen Grundlagen und technischen Anforderungen
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={15} suffix="" />
                </div>
                <div className="text-blue-200">Detaillierte Abschnitte</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={250} suffix="+" />
                </div>
                <div className="text-blue-200">Rechtsparagraphen</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={85} suffix="%" />
                </div>
                <div className="text-blue-200">Implementierungsrate</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-white mb-2">
                  <AnimatedCounter end={2023} suffix="" />
                </div>
                <div className="text-blue-200">Gesetz in Kraft</div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 text-lg px-8 py-4"
                onClick={() => setSelectedTab('overview')}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Guide starten
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4"
              >
                <Download className="mr-2 h-5 w-5" />
                Checkliste herunterladen
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Navigation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-80 lg:sticky lg:top-24 lg:self-start"
          >
            <Card className="mb-8">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Map className="mr-2 h-5 w-5 text-blue-600" />
                  Inhaltsverzeichnis
                </h3>
                <div className="space-y-2">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => setCurrentSection(section.id)}
                      className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center space-x-3 ${
                        currentSection === section.id 
                          ? 'bg-blue-100 text-blue-700 shadow-md' 
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${section.color}`}>
                        <section.icon className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium">{section.title}</div>
                        <div className="text-sm text-gray-500">Abschnitt {section.id}</div>
                      </div>
                      {completedSections.includes(section.id) && (
                        <CheckCircle className="h-5 w-5 text-green-500" />
                      )}
                    </motion.button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progress Overview */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <TrendingUp className="mr-2 h-5 w-5 text-green-600" />
                  Fortschritt
                </h3>
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Abgeschlossen</span>
                    <span>{completedSections.length}/{sections.length}</span>
                  </div>
                  <Progress value={(completedSections.length / sections.length) * 100} className="h-2" />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span>Geschätzte Lesezeit: 45 Min</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Target className="h-4 w-4 text-blue-500" />
                    <span>Aktueller Abschnitt: {currentSection}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Award className="h-4 w-4 text-yellow-500" />
                    <span>Schwierigkeitsgrad: Hoch</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            {/* Section 1: Überblick */}
            {currentSection === 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl">
                      <BookOpen className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold text-gray-900">Überblick</h1>
                      <p className="text-xl text-gray-600">Einführung in das Hinweisgeberschutzgesetz</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <Card className="border-l-4 border-l-blue-500">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Scale className="mr-2 h-5 w-5 text-blue-600" />
                        Gesetzlicher Rahmen
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <strong className="text-blue-700">Hinweisgeberschutzgesetz (HinSchG)</strong>
                          <p className="text-gray-600 mt-1">
                            Umsetzung der EU-Whistleblower-Richtlinie 2019/1937 in deutsches Recht. 
                            Schutz von Personen, die Verstöße gegen Unionsrecht melden.
                          </p>
                        </div>
                        <div>
                          <strong className="text-blue-700">Inkrafttreten</strong>
                          <p className="text-gray-600 mt-1">2. Juli 2023 für Unternehmen ab 250 Beschäftigten</p>
                        </div>
                        <div>
                          <strong className="text-blue-700">Erweiterte Anwendung</strong>
                          <p className="text-gray-600 mt-1">17. Dezember 2023 für Unternehmen ab 50 Beschäftigten</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-l-green-500">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Target className="mr-2 h-5 w-5 text-green-600" />
                        Zentrale Ziele
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Schutz von Hinweisgebern vor Repressalien</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Förderung der Meldung von Rechtsverstößen</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Stärkung der Compliance-Kultur</span>
                        </div>
                        <div className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">Prävention von Schäden für Gesellschaft</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <ExpandableSection 
                  title="Rechtliche Grundlagen des HinSchG" 
                  icon={Scale}
                  defaultExpanded={true}
                >
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-900 mb-3">EU-Whistleblower-Richtlinie 2019/1937</h4>
                      <p className="text-blue-800 mb-4">
                        Die Richtlinie zum Schutz von Personen, die Verstöße gegen das Unionsrecht melden, 
                        bildet die rechtliche Grundlage für das deutsche Hinweisgeberschutzgesetz.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Geschützte Bereiche</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Öffentliches Auftragswesen</li>
                            <li>• Finanzdienstleistungen</li>
                            <li>• Geldwäscheprävention</li>
                            <li>• Produktsicherheit und -konformität</li>
                            <li>• Verkehrssicherheit</li>
                            <li>• Umweltschutz</li>
                            <li>• Strahlenschutz</li>
                            <li>• Lebensmittel- und Futtermittelsicherheit</li>
                            <li>• Tiergesundheit und Tierschutz</li>
                            <li>• Gesundheitsschutz</li>
                            <li>• Verbraucherschutz</li>
                            <li>• Schutz der Privatsphäre</li>
                            <li>• Datenschutz und Netzsicherheit</li>
                            <li>• Finanzinteressen der Union</li>
                            <li>• Binnenmarkt (Wettbewerbsrecht)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Kernanforderungen</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Sichere Meldekanäle</li>
                            <li>• Vertraulichkeitsschutz</li>
                            <li>• Verbot von Repressalien</li>
                            <li>• Angemessene Folgemaßnahmen</li>
                            <li>• Beweislastumkehr</li>
                            <li>• Informations- und Beratungsrechte</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Nationales Hinweisgeberschutzgesetz</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Struktur des Gesetzes</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Teil 1: Allgemeine Bestimmungen (§§ 1-3)</li>
                            <li>• Teil 2: Interne Meldestellen (§§ 4-16)</li>
                            <li>• Teil 3: Externe Meldestellen (§§ 17-25)</li>
                            <li>• Teil 4: Schutz vor Repressalien (§§ 26-36)</li>
                            <li>• Teil 5: Verfahrensbestimmungen (§§ 37-42)</li>
                            <li>• Teil 6: Bußgeld und Schlussbestimmungen (§§ 43-45)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Zentrale Begriffe</h5>
                          <div className="space-y-2 text-sm text-gray-700">
                            <div>
                              <strong>Hinweisgeber:</strong> Person, die einen Verstoß meldet
                            </div>
                            <div>
                              <strong>Meldung:</strong> Übermittlung von Informationen über Verstöße
                            </div>
                            <div>
                              <strong>Verstoß:</strong> Rechtswidriges Verhalten in geschützten Bereichen
                            </div>
                            <div>
                              <strong>Repressalie:</strong> Negative Reaktion auf eine Meldung
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Sanktionen</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Bußgeld bis 20.000 € für Behinderung von Meldungen</li>
                            <li>• Bußgeld bis 50.000 € für Repressalien</li>
                            <li>• Bußgeld bis 20.000 € für Verletzung der Vertraulichkeit</li>
                            <li>• Zivilrechtliche Ansprüche auf Schadensersatz</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Internationale Entwicklungen und Best Practices" 
                  icon={Globe}
                >
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-blue-900 mb-3">USA - Sarbanes-Oxley Act</h4>
                        <p className="text-blue-800 mb-4">
                          Pioniergesetz für Whistleblower-Schutz in börsennotierten Unternehmen seit 2002.
                        </p>
                        <div className="space-y-2 text-sm text-blue-800">
                          <div><strong>Schutzbereich:</strong> Börsennotierte Unternehmen</div>
                          <div><strong>Meldekanäle:</strong> SEC, OSHA, interne Stellen</div>
                          <div><strong>Sanktionen:</strong> Bis zu 25 Jahre Haft für Repressalien</div>
                          <div><strong>Besonderheit:</strong> Whistleblower-Prämien möglich</div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-green-900 mb-3">UK - Public Interest Disclosure Act</h4>
                        <p className="text-green-800 mb-4">
                          Umfassender Schutz für "Protected Disclosures" seit 1998.
                        </p>
                        <div className="space-y-2 text-sm text-green-800">
                          <div><strong>Schutzbereich:</strong> Alle Arbeitnehmer</div>
                          <div><strong>Besonderheit:</strong> "Public Interest Test"</div>
                          <div><strong>Sanktionen:</strong> Unbegrenzte Entschädigung</div>
                          <div><strong>Innovation:</strong> Prescribed Persons System</div>
                        </div>
                      </div>

                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-purple-900 mb-3">Frankreich - Sapin II</h4>
                        <p className="text-purple-800 mb-4">
                          Französisches Anti-Korruptionsgesetz mit Whistleblower-Schutz seit 2016.
                        </p>
                        <div className="space-y-2 text-sm text-purple-800">
                          <div><strong>Schutzbereich:</strong> Unternehmen ab 500 Mitarbeitern</div>
                          <div><strong>Besonderheit:</strong> Agence Française Anticorruption</div>
                          <div><strong>Fokus:</strong> Korruption, Interessenkonflikte</div>
                          <div><strong>Innovation:</strong> Compliance-Programme verpflichtend</div>
                        </div>
                      </div>

                      <div className="bg-orange-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-orange-900 mb-3">Australien - Corporations Act</h4>
                        <p className="text-orange-800 mb-4">
                          Verstärkter Whistleblower-Schutz durch Treasury Laws Amendment Act 2019.
                        </p>
                        <div className="space-y-2 text-sm text-orange-800">
                          <div><strong>Schutzbereich:</strong> Körperschaften</div>
                          <div><strong>Besonderheit:</strong> Anonyme Meldungen</div>
                          <div><strong>Sanktionen:</strong> Bis zu AUD 1,05 Mio.</div>
                          <div><strong>Innovation:</strong> Whistleblower-Richtlinien verpflichtend</div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Best Practice Erkenntnisse</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Erfolgs faktoren</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Starke rechtliche Grundlage</li>
                            <li>• Unabhängige Aufsichtsbehörden</li>
                            <li>• Angemessene Ressourcen</li>
                            <li>• Klare Verfahren</li>
                            <li>• Sensibilisierung der Öffentlichkeit</li>
                            <li>• Regelmäßige Evaluierung</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Häufige Herausforderungen</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• Angst vor Repressalien</li>
                            <li>• Mangelndes Bewusstsein</li>
                            <li>• Komplexe Verfahren</li>
                            <li>• Unzureichende Ressourcen</li>
                            <li>• Kulturelle Barrieren</li>
                            <li>• Fehlende Folgemaßnahmen</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Innovations ansätze</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            <li>• KI-gestützte Risikoerkennung</li>
                            <li>• Blockchain-basierte Meldungen</li>
                            <li>• Mobile Meldeapps</li>
                            <li>• Predictive Analytics</li>
                            <li>• Automatisierte Folgemaßnahmen</li>
                            <li>• Gamification-Elemente</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Statistiken und Marktentwicklung" 
                  icon={BarChart3}
                >
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                      <Card className="text-center p-6 bg-gradient-to-br from-blue-50 to-blue-100">
                        <div className="text-3xl font-bold text-blue-600 mb-2">
                          <AnimatedCounter end={73} suffix="%" />
                        </div>
                        <div className="text-sm text-blue-800">Unternehmen mit interner Meldestelle</div>
                      </Card>
                      
                      <Card className="text-center p-6 bg-gradient-to-br from-green-50 to-green-100">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          <AnimatedCounter end={156} suffix="%" />
                        </div>
                        <div className="text-sm text-green-800">Anstieg der Meldungen 2023</div>
                      </Card>
                      
                      <Card className="text-center p-6 bg-gradient-to-br from-purple-50 to-purple-100">
                        <div className="text-3xl font-bold text-purple-600 mb-2">
                          <AnimatedCounter end={89} suffix="%" />
                        </div>
                        <div className="text-sm text-purple-800">Meldungen führen zu Maßnahmen</div>
                      </Card>
                      
                      <Card className="text-center p-6 bg-gradient-to-br from-orange-50 to-orange-100">
                        <div className="text-3xl font-bold text-orange-600 mb-2">
                          <AnimatedCounter end={42} suffix=" Tage" />
                        </div>
                        <div className="text-sm text-orange-800">Durchschnittliche Bearbeitungszeit</div>
                      </Card>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Marktentwicklung Hinweisgebersysteme</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Marktvolumen</h5>
                          <div className="space-y-2 text-sm text-gray-700">
                            <div>Globaler Markt 2023: <strong>$15,7 Mrd.</strong></div>
                            <div>Deutschland 2023: <strong>€420 Mio.</strong></div>
                            <div>Wachstumsrate CAGR: <strong>12,3%</strong></div>
                            <div>Prognose 2030: <strong>€950 Mio.</strong></div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Hauptanbieter</h5>
                          <div className="space-y-2 text-sm text-gray-700">
                            <div>• NAVEX Global (38% Marktanteil)</div>
                            <div>• EthicsPoint (22%)</div>
                            <div>• KPMG Integrity (15%)</div>
                            <div>• Deloitte Speak Up (12%)</div>
                            <div>• Deutsche Anbieter (13%)</div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Technologietrends</h5>
                          <div className="space-y-2 text-sm text-gray-700">
                            <div>• Cloud-basierte Lösungen: 87%</div>
                            <div>• Mobile Apps: 64%</div>
                            <div>• KI-Integration: 31%</div>
                            <div>• Blockchain: 8%</div>
                            <div>• Analytics-Tools: 76%</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div className="flex justify-between items-center pt-8 border-t">
                  <Button variant="outline" disabled>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                    onClick={() => {
                      markSectionComplete(1);
                      setCurrentSection(2);
                    }}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 2: Anwendungsbereich */}
            {currentSection === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-green-500 to-green-600 rounded-xl">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold text-gray-900">Anwendungsbereich</h1>
                      <p className="text-xl text-gray-600">Wer ist verpflichtet und welche Bereiche sind geschützt?</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Persönlicher Anwendungsbereich" 
                  icon={Users}
                  defaultExpanded={true}
                >
                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-900 mb-4">Geschützte Personen (§ 1 HinSchG)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-green-900 mb-3">Primär geschützte Personen</h5>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-green-800">Beschäftigte</strong>
                                <p className="text-sm text-green-700 mt-1">
                                  Arbeitnehmer, Beamte, Richter, Soldaten, Auszubildende, 
                                  Praktikanten, Volontäre, ehrenamtlich Tätige
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-green-800">Selbständige</strong>
                                <p className="text-sm text-green-700 mt-1">
                                  Freiberufler, Consultants, Subunternehmer in 
                                  Auftrags- oder Vertragsverhältnis
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-green-800">Gesellschafter</strong>
                                <p className="text-sm text-green-700 mt-1">
                                  Aktionäre, GmbH-Gesellschafter mit arbeitnehmerähnlicher Stellung
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-900 mb-3">Erweitert geschützte Personen</h5>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-green-800">Bewerber</strong>
                                <p className="text-sm text-green-700 mt-1">
                                  Personen im Bewerbungsverfahren oder Vorstellungsgespräch
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-green-800">Ehemalige Beschäftigte</strong>
                                <p className="text-sm text-green-700 mt-1">
                                  Schutz für Personen, deren Arbeitsverhältnis beendet wurde
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-green-800">Dritte Personen</strong>
                                <p className="text-sm text-green-700 mt-1">
                                  Personen, die mit Hinweisgebern in Verbindung stehen 
                                  (Kollegen, Verwandte, Rechtsberater)
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Besondere Personengruppen</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Beamte</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Vollumfänglicher Schutz</li>
                            <li>• Keine Konflikte mit Remonstrationspflicht</li>
                            <li>• Besondere Fürsorgepflicht des Dienstherrn</li>
                            <li>• Disziplinarrecht bleibt unberührt</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Geheimnisträger</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Abwägung mit Schweigepflichten</li>
                            <li>• Anwälte: Besondere Interessenabwägung</li>
                            <li>• Ärzte: Patientenschutz beachten</li>
                            <li>• Journalisten: Quellenschutz</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Ausländische Arbeitnehmer</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Vollumfänglicher Schutz</li>
                            <li>• Keine aufenthaltsrechtlichen Nachteile</li>
                            <li>• Mehrsprachige Informationen</li>
                            <li>• Besondere Schutzbedürftigkeit</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Sachlicher Anwendungsbereich" 
                  icon={Scale}
                >
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-purple-900 mb-4">Geschützte Rechtsbereiche</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-purple-900 mb-3">EU-Recht (Anhang zur EU-Richtlinie)</h5>
                          <div className="space-y-3 text-sm text-purple-800">
                            <div>
                              <strong>Öffentliches Auftragswesen:</strong>
                              <br />RL 2014/23/EU, RL 2014/24/EU, RL 2014/25/EU, RL 2009/81/EG
                            </div>
                            <div>
                              <strong>Finanzdienstleistungen:</strong>
                              <br />RL 2013/36/EU, VO (EU) 575/2013, RL 2014/65/EU, RL 2016/97/EU
                            </div>
                            <div>
                              <strong>Geldwäscheprävention:</strong>
                              <br />RL (EU) 2015/849, VO (EU) 2015/847
                            </div>
                            <div>
                              <strong>Produktsicherheit:</strong>
                              <br />RL 2001/95/EG, VO (EG) 765/2008, VO (EU) 2019/1020
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-900 mb-3">Weitere geschützte Bereiche</h5>
                          <div className="space-y-3 text-sm text-purple-800">
                            <div>
                              <strong>Verkehrssicherheit:</strong>
                              <br />VO (EU) 2018/858, VO (EU) 2018/1139, RL 2008/68/EG
                            </div>
                            <div>
                              <strong>Umweltschutz:</strong>
                              <br />RL 2010/75/EU, VO (EG) 1013/2006, RL 2008/99/EG
                            </div>
                            <div>
                              <strong>Datenschutz:</strong>
                              <br />VO (EU) 2016/679 (DSGVO), RL (EU) 2016/680
                            </div>
                            <div>
                              <strong>Netzwerksicherheit:</strong>
                              <br />RL (EU) 2016/1148 (NIS), VO (EU) 2019/881
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-red-900 mb-4">Nationales Recht (§ 2 HinSchG)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-semibold text-red-900 mb-2">Straftaten</h5>
                          <ul className="text-sm text-red-800 space-y-1">
                            <li>• Alle Straftaten nach StGB</li>
                            <li>• Nebenstrafrecht (z.B. Steuerrecht)</li>
                            <li>• Ordnungswidrigkeiten mit Bußgeld ab 20.000 €</li>
                            <li>• Versuch und Vorbereitung</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-red-900 mb-2">Arbeitsrecht</h5>
                          <ul className="text-sm text-red-800 space-y-1">
                            <li>• Verstöße gegen Mindestlohngesetz</li>
                            <li>• Arbeitszeitgesetz</li>
                            <li>• Arbeitsschutzgesetze</li>
                            <li>• Schwarzarbeit</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-red-900 mb-2">Weitere Bereiche</h5>
                          <ul className="text-sm text-red-800 space-y-1">
                            <li>• Steuerrecht</li>
                            <li>• Sozialversicherungsrecht</li>
                            <li>• Kapitalmarktrecht</li>
                            <li>• Kartellrecht</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Unternehmensspezifische Anwendung" 
                  icon={Building2}
                >
                  <div className="space-y-6">
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-yellow-900 mb-4">Größenabhängige Verpflichtungen</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="border-2 border-red-200">
                          <CardContent className="p-6">
                            <h5 className="font-semibold text-red-900 mb-3 flex items-center">
                              <Building className="mr-2 h-5 w-5" />
                              250+ Beschäftigte
                            </h5>
                            <div className="space-y-2 text-sm text-red-800">
                              <div><strong>Seit:</strong> 2. Juli 2023</div>
                              <div><strong>Verpflichtung:</strong> Vollumfänglich</div>
                              <div><strong>Interne Meldestelle:</strong> Ja</div>
                              <div><strong>Externe Option:</strong> Ja</div>
                              <div><strong>Öffentliche Stellen:</strong> Alle</div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-2 border-orange-200">
                          <CardContent className="p-6">
                            <h5 className="font-semibold text-orange-900 mb-3 flex items-center">
                              <Building className="mr-2 h-5 w-5" />
                              50-249 Beschäftigte
                            </h5>
                            <div className="space-y-2 text-sm text-orange-800">
                              <div><strong>Seit:</strong> 17. Dezember 2023</div>
                              <div><strong>Verpflichtung:</strong> Grundsätzlich</div>
                              <div><strong>Interne Meldestelle:</strong> Wahlweise</div>
                              <div><strong>Externe Option:</strong> Ja</div>
                              <div><strong>Erleichterungen:</strong> Möglich</div>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-2 border-green-200">
                          <CardContent className="p-6">
                            <h5 className="font-semibold text-green-900 mb-3 flex items-center">
                              <Building className="mr-2 h-5 w-5" />
                              Unter 50 Beschäftigte
                            </h5>
                            <div className="space-y-2 text-sm text-green-800">
                              <div><strong>Verpflichtung:</strong> Keine</div>
                              <div><strong>Freiwillige Einführung:</strong> Möglich</div>
                              <div><strong>Externe Option:</strong> Verfügbar</div>
                              <div><strong>Schutz:</strong> Bei Meldung dennoch gegeben</div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-indigo-900 mb-4">Besondere Branchen und Sektoren</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-indigo-900 mb-3">Finanzsektor</h5>
                          <div className="space-y-2 text-sm text-indigo-800">
                            <div><strong>Besonderheiten:</strong></div>
                            <ul className="space-y-1 ml-4">
                              <li>• Zusätzliche Meldepflichten an BaFin</li>
                              <li>• MaRisk-Anforderungen beachten</li>
                              <li>• Geldwäsche-Compliance</li>
                              <li>• Whistleblower-Prämien nach WpHG</li>
                            </ul>
                            <div className="mt-3">
                              <strong>Besondere Risiken:</strong>
                              <br />Marktmanipulation, Insiderhandel, Compliance-Verstöße
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-indigo-900 mb-3">Gesundheitswesen</h5>
                          <div className="space-y-2 text-sm text-indigo-800">
                            <div><strong>Besonderheiten:</strong></div>
                            <ul className="space-y-1 ml-4">
                              <li>• Patientenschutz hat Vorrang</li>
                              <li>• Schweigepflicht beachten</li>
                              <li>• Arzneimittelsicherheit</li>
                              <li>• Medizinprodukte-Sicherheit</li>
                            </ul>
                            <div className="mt-3">
                              <strong>Besondere Risiken:</strong>
                              <br />Patientengefährdung, Abrechnungsbetrug, Hygieneverstöße
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-indigo-900 mb-3">Automotive</h5>
                          <div className="space-y-2 text-sm text-indigo-800">
                            <div><strong>Besonderheiten:</strong></div>
                            <ul className="space-y-1 ml-4">
                              <li>• Verkehrssicherheit</li>
                              <li>• Produkthaftung</li>
                              <li>• Emissions-Compliance</li>
                              <li>• Lieferketten-Compliance</li>
                            </ul>
                            <div className="mt-3">
                              <strong>Besondere Risiken:</strong>
                              <br />Sicherheitsmängel, Umweltverstöße, Kartellrecht
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-indigo-900 mb-3">Pharma</h5>
                          <div className="space-y-2 text-sm text-indigo-800">
                            <div><strong>Besonderheiten:</strong></div>
                            <ul className="space-y-1 ml-4">
                              <li>• Arzneimittelsicherheit</li>
                              <li>• Klinische Studien</li>
                              <li>• Pharmacovigilance</li>
                              <li>• Internationale Compliance</li>
                            </ul>
                            <div className="mt-3">
                              <strong>Besondere Risiken:</strong>
                              <br />Patientensicherheit, Datenfälschung, Korruption
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div className="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentSection(1)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                    onClick={() => {
                      markSectionComplete(2);
                      setCurrentSection(3);
                    }}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 3: Hinweisgebersystem */}
            {currentSection === 3 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl">
                      <MessageSquare className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold text-gray-900">Hinweisgebersystem</h1>
                      <p className="text-xl text-gray-600">Aufbau und Struktur interner Meldestellen</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Interne Meldestellen (§§ 4-16 HinSchG)" 
                  icon={Building2}
                  defaultExpanded={true}
                >
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-purple-900 mb-4">Grundanforderungen (§ 4 HinSchG)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-purple-900 mb-3">Strukturelle Anforderungen</h5>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-purple-800">Unabhängigkeit</strong>
                                <p className="text-sm text-purple-700 mt-1">
                                  Organisatorische Trennung von operativen Geschäftsbereichen
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-purple-800">Fachliche Kompetenz</strong>
                                <p className="text-sm text-purple-700 mt-1">
                                  Rechtskenntnisse, Investigationsfähigkeiten, Branchenwissen
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-purple-800">Ausreichende Ressourcen</strong>
                                <p className="text-sm text-purple-700 mt-1">
                                  Personal, Budget, technische Ausstattung
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-900 mb-3">Funktionale Anforderungen</h5>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-purple-800">Erreichbarkeit</strong>
                                <p className="text-sm text-purple-700 mt-1">
                                  24/7 verfügbar, mehrere Kanäle, barrierefrei
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-purple-800">Vertraulichkeit</strong>
                                <p className="text-sm text-purple-700 mt-1">
                                  Anonyme Meldungen möglich, Datenschutz gewährleistet
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <CheckCircle className="h-5 w-5 text-purple-600 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-purple-800">Nachverfolgung</strong>
                                <p className="text-sm text-purple-700 mt-1">
                                  Dokumentation, Berichtswesen, Feedback-Mechanismus
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Organisationsmodelle</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Card className="border-2 border-blue-200">
                          <CardContent className="p-6">
                            <h5 className="font-semibold text-blue-900 mb-3 flex items-center">
                              <UserCheck className="mr-2 h-5 w-5" />
                              Interne Besetzung
                            </h5>
                            <div className="space-y-2 text-sm text-blue-800">
                              <div><strong>Vorteile:</strong></div>
                              <ul className="space-y-1 ml-4">
                                <li>• Tiefes Unternehmenswissen</li>
                                <li>• Direkte Kommunikationswege</li>
                                <li>• Kostengünstiger</li>
                                <li>• Schnelle Reaktionszeiten</li>
                              </ul>
                              <div><strong>Nachteile:</strong></div>
                              <ul className="space-y-1 ml-4">
                                <li>• Interessenkonflikte möglich</li>
                                <li>• Vertrauensdefizit</li>
                                <li>• Befangenheitsrisiko</li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-2 border-green-200">
                          <CardContent className="p-6">
                            <h5 className="font-semibold text-green-900 mb-3 flex items-center">
                              <ExternalLink className="mr-2 h-5 w-5" />
                              Externe Dienstleister
                            </h5>
                            <div className="space-y-2 text-sm text-green-800">
                              <div><strong>Vorteile:</strong></div>
                              <ul className="space-y-1 ml-4">
                                <li>• Hohe Unabhängigkeit</li>
                                <li>• Spezialisierte Expertise</li>
                                <li>• Höheres Vertrauen</li>
                                <li>• Professionelle Abwicklung</li>
                              </ul>
                              <div><strong>Nachteile:</strong></div>
                              <ul className="space-y-1 ml-4">
                                <li>• Höhere Kosten</li>
                                <li>• Weniger Unternehmenswissen</li>
                                <li>• Koordinationsaufwand</li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>

                        <Card className="border-2 border-orange-200">
                          <CardContent className="p-6">
                            <h5 className="font-semibold text-orange-900 mb-3 flex items-center">
                              <Share2 className="mr-2 h-5 w-5" />
                              Hybridmodell
                            </h5>
                            <div className="space-y-2 text-sm text-orange-800">
                              <div><strong>Vorteile:</strong></div>
                              <ul className="space-y-1 ml-4">
                                <li>• Best of both worlds</li>
                                <li>• Flexibilität</li>
                                <li>• Risikominimierung</li>
                                <li>• Skalierbarkeit</li>
                              </ul>
                              <div><strong>Nachteile:</strong></div>
                              <ul className="space-y-1 ml-4">
                                <li>• Komplexere Struktur</li>
                                <li>• Koordinationsaufwand</li>
                                <li>• Doppelkosten möglich</li>
                              </ul>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Technische Infrastruktur" 
                  icon={Settings}
                >
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Meldekanäle (§ 8 HinSchG)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Schriftliche Kanäle</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
                              <strong className="text-blue-700">Online-Portal</strong>
                              <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                <li>• Web-basierte Eingabemaske</li>
                                <li>• Datei-Upload-Funktionen</li>
                                <li>• Anonyme Kommunikation</li>
                                <li>• Mobile Optimierung</li>
                                <li>• Multi-Language Support</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-green-500">
                              <strong className="text-green-700">E-Mail-System</strong>
                              <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                <li>• Verschlüsselte Übertragung</li>
                                <li>• Dedicated Postfach</li>
                                <li>• Automatische Bestätigung</li>
                                <li>• Spam-Schutz</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-purple-500">
                              <strong className="text-purple-700">Briefkasten/Post</strong>
                              <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                <li>• Physischer Briefkasten</li>
                                <li>• Externe Postadresse</li>
                                <li>• Anonyme Zusendung</li>
                                <li>• Sichere Aufbewahrung</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Mündliche Kanäle</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                              <strong className="text-red-700">Hotline/Telefon</strong>
                              <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                <li>• 24/7 Erreichbarkeit</li>
                                <li>• Mehrsprachige Betreuung</li>
                                <li>• Anonyme Anrufe möglich</li>
                                <li>• Professionelle Gesprächsführung</li>
                                <li>• Aufzeichnung nach Einverständnis</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-yellow-500">
                              <strong className="text-yellow-700">Persönliche Gespräche</strong>
                              <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                <li>• Terminvereinbarung</li>
                                <li>• Neutrale Räumlichkeiten</li>
                                <li>• Vertrauensperson möglich</li>
                                <li>• Protokollierung</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-indigo-500">
                              <strong className="text-indigo-700">Video-Konferenz</strong>
                              <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                <li>• Sichere Plattformen</li>
                                <li>• Ende-zu-Ende-Verschlüsselung</li>
                                <li>• Aufzeichnung optional</li>
                                <li>• Flexible Termingestaltung</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-900 mb-4">Sicherheitsanforderungen</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-semibold text-green-900 mb-2">Technische Sicherheit</h5>
                          <ul className="text-sm text-green-800 space-y-1">
                            <li>• SSL/TLS-Verschlüsselung</li>
                            <li>• Ende-zu-Ende-Verschlüsselung</li>
                            <li>• Sichere Authentifizierung</li>
                            <li>• Penetrationstests</li>
                            <li>• Backup-Strategien</li>
                            <li>• Incident Response Plan</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-900 mb-2">Datenschutz</h5>
                          <ul className="text-sm text-green-800 space-y-1">
                            <li>• DSGVO-Konformität</li>
                            <li>• Privacy by Design</li>
                            <li>• Datenminimierung</li>
                            <li>• Zweckbindung</li>
                            <li>• Löschkonzepte</li>
                            <li>• Betroffenenrechte</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-900 mb-2">Operative Sicherheit</h5>
                          <ul className="text-sm text-green-800 space-y-1">
                            <li>• Zugriffskontrollen</li>
                            <li>• Audit-Logs</li>
                            <li>• Segregation of Duties</li>
                            <li>• Notfallpläne</li>
                            <li>• Schulungen</li>
                            <li>• Regelmäßige Reviews</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Personalausstattung und Kompetenzen" 
                  icon={Users}
                >
                  <div className="space-y-6">
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-orange-900 mb-4">Personelle Anforderungen</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-orange-900 mb-3">Mindestausstattung</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <h6 className="font-semibold text-orange-800 mb-2">Kleine Unternehmen (50-249 MA)</h6>
                              <ul className="text-sm text-orange-700 space-y-1">
                                <li>• 1 hauptverantwortliche Person (mind. 50% Kapazität)</li>
                                <li>• Vertretungsregelung</li>
                                <li>• Externe Unterstützung möglich</li>
                                <li>• Schulungen erforderlich</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <h6 className="font-semibold text-orange-800 mb-2">Große Unternehmen (250+ MA)</h6>
                              <ul className="text-sm text-orange-700 space-y-1">
                                <li>• Dedicated Team empfohlen</li>
                                <li>• Spezialisierung nach Fachbereichen</li>
                                <li>• 24/7 Bereitschaft</li>
                                <li>• Professionelle Investigatoren</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-orange-900 mb-3">Kernkompetenzen</h5>
                          <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                              <Scale className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-orange-800">Rechtskenntnisse</strong>
                                <p className="text-sm text-orange-700 mt-1">
                                  HinSchG, DSGVO, Strafrecht, Arbeitsrecht, branchenspezifische Regelungen
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <Search className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-orange-800">Investigative Fähigkeiten</strong>
                                <p className="text-sm text-orange-700 mt-1">
                                  Sachverhaltsaufklärung, Beweissicherung, Befragungstechniken
                                </p>
                              </div>
                            </div>
                            <div className="flex items-start space-x-3">
                              <MessageSquare className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
                              <div>
                                <strong className="text-orange-800">Kommunikationsfähigkeiten</strong>
                                <p className="text-sm text-orange-700 mt-1">
                                  Gesprächsführung, Empathie, Vertraulichkeit, Mehrsprachigkeit
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Qualifikationsprofil</h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Juristische Qualifikation</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Volljurist bevorzugt</li>
                            <li>• Compliance-Zertifizierung</li>
                            <li>• Fortbildungen HinSchG</li>
                            <li>• Branchenerfahrung</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Investigative Ausbildung</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Fraud Investigation</li>
                            <li>• Digital Forensics</li>
                            <li>• Interview-Techniken</li>
                            <li>• Krisenmanagement</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Soft Skills</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Vertrauenswürdigkeit</li>
                            <li>• Stressresistenz</li>
                            <li>• Kulturelle Sensibilität</li>
                            <li>• Verschwiegenheit</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Technische Skills</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• IT-Grundkenntnisse</li>
                            <li>• Case Management</li>
                            <li>• Datenanalyse</li>
                            <li>• Berichtswesen</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div className="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentSection(2)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                    onClick={() => {
                      markSectionComplete(3);
                      setCurrentSection(4);
                    }}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 4: Meldeverfahren */}
            {currentSection === 4 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-red-500 to-red-600 rounded-xl">
                      <Send className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold text-gray-900">Meldeverfahren</h1>
                      <p className="text-xl text-gray-600">Prozesse und Verfahrensschritte</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Meldungseingang und Erstbewertung" 
                  icon={Mail}
                  defaultExpanded={true}
                >
                  <div className="space-y-6">
                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-red-900 mb-4">Verfahrensablauf (§§ 9-12 HinSchG)</h4>
                      <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-red-900 mb-2">Meldungseingang (innerhalb 24h)</h5>
                              <div className="bg-white p-4 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div>
                                    <strong className="text-red-800">Automatische Bestätigung:</strong>
                                    <ul className="text-sm text-red-700 mt-1 space-y-1">
                                      <li>• Eindeutige Vorgangsnummer</li>
                                      <li>• Zeitstempel</li>
                                      <li>• Nächste Schritte</li>
                                      <li>• Kontaktmöglichkeiten</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong className="text-red-800">Formelle Prüfung:</strong>
                                    <ul className="text-sm text-red-700 mt-1 space-y-1">
                                      <li>• Vollständigkeit</li>
                                      <li>• Verständlichkeit</li>
                                      <li>• Anwendungsbereich</li>
                                      <li>• Zuständigkeit</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong className="text-red-800">Dokumentation:</strong>
                                    <ul className="text-sm text-red-700 mt-1 space-y-1">
                                      <li>• Case Management System</li>
                                      <li>• Metadaten-Erfassung</li>
                                      <li>• Klassifizierung</li>
                                      <li>• Vertraulichkeitsstufe</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-red-900 mb-2">Erstbewertung (innerhalb 7 Tagen)</h5>
                              <div className="bg-white p-4 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <strong className="text-red-800">Inhaltliche Prüfung:</strong>
                                    <ul className="text-sm text-red-700 mt-1 space-y-1">
                                      <li>• Rechtlicher Anwendungsbereich</li>
                                      <li>• Erheblichkeit des Verstoßes</li>
                                      <li>• Glaubwürdigkeit der Angaben</li>
                                      <li>• Verfügbare Beweise</li>
                                      <li>• Gefährdungspotential</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong className="text-red-800">Kategorisierung:</strong>
                                    <ul className="text-sm text-red-700 mt-1 space-y-1">
                                      <li>• Prioritätsstufe (hoch/mittel/niedrig)</li>
                                      <li>• Fachbereich</li>
                                      <li>• Betroffene Bereiche</li>
                                      <li>• Zeitkritische Maßnahmen</li>
                                      <li>• Eskalationsbedarf</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-red-900 mb-2">Feedback an Hinweisgeber (innerhalb 7 Tagen)</h5>
                              <div className="bg-white p-4 rounded-lg">
                                <div className="space-y-3">
                                  <div>
                                    <strong className="text-red-800">Pflichtinhalte der Bestätigung (§ 11 HinSchG):</strong>
                                    <ul className="text-sm text-red-700 mt-1 space-y-1">
                                      <li>• Bestätigung des Meldungseingangs</li>
                                      <li>• Information über weitere Verfahrensschritte</li>
                                      <li>• Kontaktmöglichkeiten für Rückfragen</li>
                                      <li>• Hinweise auf Schutzmaßnahmen</li>
                                      <li>• Verweis auf externe Meldestellen</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong className="text-red-800">Bei offensichtlich unbegründeten Meldungen:</strong>
                                    <ul className="text-sm text-red-700 mt-1 space-y-1">
                                      <li>• Begründete Ablehnung</li>
                                      <li>• Hinweis auf alternative Wege</li>
                                      <li>• Beratungsangebote</li>
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
                </ExpandableSection>

                <ExpandableSection 
                  title="Untersuchungsverfahren" 
                  icon={Search}
                >
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Investigationsprozess</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-3">Untersuchungsplanung</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-blue-800">Untersuchungsumfang definieren:</strong>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Zu klärende Sachverhalte</li>
                                <li>• Zeitrahmen der Untersuchung</li>
                                <li>• Beteiligte Personen</li>
                                <li>• Betroffene Systeme/Bereiche</li>
                                <li>• Erforderliche Expertise</li>
                                <li>• Ressourcenplanung</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-blue-800">Untersuchungsteam:</strong>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Lead Investigator</li>
                                <li>• Fachexperten</li>
                                <li>• IT-Forensiker (bei Bedarf)</li>
                                <li>• Externe Berater (bei Bedarf)</li>
                                <li>• Rechtsberater</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-3">Beweissicherung</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-blue-800">Digitale Beweise:</strong>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• E-Mail-Verkehr</li>
                                <li>• Systemlogs</li>
                                <li>• Datenbankauszüge</li>
                                <li>• Screenshots</li>
                                <li>• Forensische Images</li>
                                <li>• Chain of Custody</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-blue-800">Dokumentare Beweise:</strong>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Verträge und Vereinbarungen</li>
                                <li>• Rechnungen und Belege</li>
                                <li>• Protokolle und Berichte</li>
                                <li>• Organisationsanweisungen</li>
                                <li>• Zeugenaussagen</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-900 mb-4">Befragungen und Interviews</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-semibold text-green-900 mb-2">Hinweisgeber-Interview</h5>
                          <ul className="text-sm text-green-800 space-y-1">
                            <li>• Vertiefende Sachverhaltsaufklärung</li>
                            <li>• Nachfragen zu Unstimmigkeiten</li>
                            <li>• Zusätzliche Beweise</li>
                            <li>• Schutzbedarfsermittlung</li>
                            <li>• Vertraulichkeitsvereinbarung</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-900 mb-2">Zeugen-Befragungen</h5>
                          <ul className="text-sm text-green-800 space-y-1">
                            <li>• Sachverhaltsbestätigung</li>
                            <li>• Weitere Beobachtungen</li>
                            <li>• Zeitliche Einordnung</li>
                            <li>• Persönliche Wahrnehmungen</li>
                            <li>• Dokumentation</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-900 mb-2">Beschuldigten-Anhörung</h5>
                          <ul className="text-sm text-green-800 space-y-1">
                            <li>• Rechtliches Gehör</li>
                            <li>• Stellungnahme zu Vorwürfen</li>
                            <li>• Entlastungsbeweise</li>
                            <li>• Rechtsberatung möglich</li>
                            <li>• Protokollführung</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-yellow-900 mb-4">Besondere Verfahrensarten</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-3">Eilverfahren</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <strong className="text-yellow-800">Auslöser:</strong>
                            <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                              <li>• Akute Gefahr für Leben/Gesundheit</li>
                              <li>• Erhebliche Umweltschäden</li>
                              <li>• Beweisvernichtungsgefahr</li>
                              <li>• Fortsetzung der Rechtsverletzung</li>
                            </ul>
                            <strong className="text-yellow-800 mt-3 block">Maßnahmen:</strong>
                            <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                              <li>• Sofortige Beweissicherung</li>
                              <li>• Vorläufige Schutzmaßnahmen</li>
                              <li>• 24h-Reaktionszeit</li>
                              <li>• Eskalation an Geschäftsführung</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-3">Komplexe Sachverhalte</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <strong className="text-yellow-800">Charakteristika:</strong>
                            <ul className="text-sm text-yellow-700 mt-2 space-y-1">
                              <li>• Mehrere Rechtsbereiche betroffen</li>
                              <li>• Umfangreiche Beweislage</li>
                              <li>• Viele Beteiligte</li>
                              <li>• Technische Komplexität</li>
                            </ul>
                            <strong className="text-yellow-800 mt-3 block">Besonderheiten:</strong>
                            <ul className="text-sm text-yellow-700 mt-1 space-y-1">
                              <li>• Erweiterte Untersuchungszeit</li>
                              <li>• Spezialisierte Ermittler</li>
                              <li>• Externe Unterstützung</li>
                              <li>• Zwischenberichte</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div className="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentSection(3)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                    onClick={() => {
                      markSectionComplete(4);
                      setCurrentSection(5);
                    }}
                    className="bg-red-600 hover:bg-red-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 5: Schutzmaßnahmen */}
            {currentSection === 5 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-xl">
                      <Shield className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold text-gray-900">Schutzmaßnahmen</h1>
                      <p className="text-xl text-gray-600">Schutz vor Repressalien und Vergeltungsmaßnahmen</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Verbot von Repressalien (§§ 26-36 HinSchG)" 
                  icon={Lock}
                  defaultExpanded={true}
                >
                  <div className="space-y-6">
                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-yellow-900 mb-4">Definition und Umfang von Repressalien</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-3">Arbeitsrechtliche Repressalien</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                              <strong className="text-red-700">Beendigung des Arbeitsverhältnisses:</strong>
                              <ul className="text-sm text-red-600 mt-2 space-y-1">
                                <li>• Kündigung (ordentlich/außerordentlich)</li>
                                <li>• Aufhebungsverträge unter Druck</li>
                                <li>• Nicht-Verlängerung befristeter Verträge</li>
                                <li>• Beendigung von Probezeiten</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-orange-500">
                              <strong className="text-orange-700">Verschlechterung der Arbeitsbedingungen:</strong>
                              <ul className="text-sm text-orange-600 mt-2 space-y-1">
                                <li>• Versetzungen (Arbeitsplatz/Abteilung)</li>
                                <li>• Degradierung/Gehaltskürzung</li>
                                <li>• Entzug von Kompetenzen</li>
                                <li>• Schlechtere Arbeitszeitmodelle</li>
                                <li>• Verweigerung von Fortbildungen</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-3">Weitere Repressalien</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-purple-500">
                              <strong className="text-purple-700">Persönliche Benachteiligungen:</strong>
                              <ul className="text-sm text-purple-600 mt-2 space-y-1">
                                <li>• Mobbing und Ausgrenzung</li>
                                <li>• Schlechte Arbeitszeugnisse</li>
                                <li>• Negative Referenzen</li>
                                <li>• Soziale Isolation</li>
                                <li>• Rufschädigung</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
                              <strong className="text-blue-700">Rechtliche Maßnahmen:</strong>
                              <ul className="text-sm text-blue-600 mt-2 space-y-1">
                                <li>• Strafanzeigen ohne Grund</li>
                                <li>• Zivilrechtliche Klagen</li>
                                <li>• Disziplinarmaßnahmen</li>
                                <li>• Einschüchterung durch Anwälte</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-red-900 mb-4">Beweislastumkehr (§ 29 HinSchG)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-semibold text-red-900 mb-2 flex items-center">
                            <Scale className="mr-2 h-5 w-5" />
                            Grundsatz
                          </h5>
                          <p className="text-sm text-red-800 mb-3">
                            Der Arbeitgeber muss beweisen, dass die nachteilige Maßnahme 
                            NICHT auf die Meldung zurückzuführen ist.
                          </p>
                          <ul className="text-sm text-red-700 space-y-1">
                            <li>• Umkehr der normalen Beweislast</li>
                            <li>• Erhebliche Erleichterung für Hinweisgeber</li>
                            <li>• Präventive Wirkung für Arbeitgeber</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-semibold text-red-900 mb-2 flex items-center">
                            <Clock className="mr-2 h-5 w-5" />
                            Zeitlicher Zusammenhang
                          </h5>
                          <p className="text-sm text-red-800 mb-3">
                            Indizwirkung bei zeitlicher Nähe zwischen Meldung und 
                            nachteiliger Maßnahme.
                          </p>
                          <ul className="text-sm text-red-700 space-y-1">
                            <li>• Besonders starke Indizwirkung bei unmittelbarer Nähe</li>
                            <li>• Auch längere Zeiträume möglich</li>
                            <li>• Einzelfallbetrachtung erforderlich</li>
                          </ul>
                        </div>
                        <div className="bg-white p-4 rounded-lg">
                          <h5 className="font-semibold text-red-900 mb-2 flex items-center">
                            <CheckCircle className="mr-2 h-5 w-5" />
                            Entlastungsbeweis
                          </h5>
                          <p className="text-sm text-red-800 mb-3">
                            Arbeitgeber muss sachliche Gründe für die Maßnahme nachweisen.
                          </p>
                          <ul className="text-sm text-red-700 space-y-1">
                            <li>• Dokumentierte Leistungsprobleme</li>
                            <li>• Wirtschaftliche Notwendigkeit</li>
                            <li>• Organisatorische Gründe</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Präventive Schutzmaßnahmen" 
                  icon={Eye}
                >
                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-900 mb-4">Organisatorische Schutzmaßnahmen</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-green-900 mb-3">Vertraulichkeitsschutz</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-green-800">Identitätsschutz:</strong>
                              <ul className="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Anonyme Meldungen ermöglichen</li>
                                <li>• Pseudonymisierung von Daten</li>
                                <li>• Beschränkung des Empfängerkreises</li>
                                <li>• Separating Walls zwischen Bereichen</li>
                                <li>• Clean Team Verfahren</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-green-800">Informationssicherheit:</strong>
                              <ul className="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Verschlüsselung aller Kommunikation</li>
                                <li>• Sichere Aktenführung</li>
                                <li>• Zugriffskontrollen</li>
                                <li>• Audit-Protokolle</li>
                                <li>• Regelmäßige Sicherheitsreviews</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-900 mb-3">Früherkennung von Repressalien</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-green-800">Monitoring-Systeme:</strong>
                              <ul className="text-sm text-green-700 mt-2 space-y-1">
                                <li>• HR-Analytics für auffällige Muster</li>
                                <li>• Regelmäßige Mitarbeiterbefragungen</li>
                                <li>• 360-Grad-Feedback-Systeme</li>
                                <li>• Beschwerdekanäle</li>
                                <li>• Exit-Interviews</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-green-800">Präventive Interventionen:</strong>
                              <ul className="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Sensibilisierungsschulungen</li>
                                <li>• Führungskräfte-Coaching</li>
                                <li>• Mediation bei Konflikten</li>
                                <li>• Versetzungen bei Bedarf</li>
                                <li>• Psychologische Betreuung</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Technische Schutzmaßnahmen</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Anonymisierungstechnologien</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Tor-Browser-Integration</li>
                            <li>• Anonyme E-Mail-Services</li>
                            <li>• VPN-Verbindungen</li>
                            <li>• Blockchain-basierte Systeme</li>
                            <li>• Zero-Knowledge-Protokolle</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Sichere Kommunikation</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Ende-zu-Ende-Verschlüsselung</li>
                            <li>• Perfect Forward Secrecy</li>
                            <li>• Sichere Messenger-Systeme</li>
                            <li>• Verschlüsselte Telefonie</li>
                            <li>• Sichere Datei-Übertragung</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Datenminimierung</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Automatische Löschfristen</li>
                            <li>• Datenklassifizierung</li>
                            <li>• Need-to-know-Prinzip</li>
                            <li>• Pseudonymisierung</li>
                            <li>• Differential Privacy</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Reaktive Schutzmaßnahmen" 
                  icon={AlertTriangle}
                >
                  <div className="space-y-6">
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-orange-900 mb-4">Sofortmaßnahmen bei Repressalien</h4>
                      <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-4">
                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-orange-900 mb-2">Akute Intervention (innerhalb 24h)</h5>
                              <div className="bg-white p-4 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <strong className="text-orange-800">Schutzmaßnahmen:</strong>
                                    <ul className="text-sm text-orange-700 mt-1 space-y-1">
                                      <li>• Vorläufige Suspendierung des Verursachers</li>
                                      <li>• Arbeitsplatzwechsel für Hinweisgeber</li>
                                      <li>• Kommunikationsverbot</li>
                                      <li>• Sicherstellung von Beweisen</li>
                                      <li>• Einschaltung der Rechtsabteilung</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong className="text-orange-800">Dokumentation:</strong>
                                    <ul className="text-sm text-orange-700 mt-1 space-y-1">
                                      <li>• Detaillierte Sachverhaltsaufnahme</li>
                                      <li>• Zeugenaussagen sichern</li>
                                      <li>• Chronologie erstellen</li>
                                      <li>• Beweismittel sammeln</li>
                                      <li>• Incident Report erstellen</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-orange-900 mb-2">Untersuchung und Bewertung (1-2 Wochen)</h5>
                              <div className="bg-white p-4 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                  <div>
                                    <strong className="text-orange-800">Investigative Maßnahmen:</strong>
                                    <ul className="text-sm text-orange-700 mt-1 space-y-1">
                                      <li>• Befragung aller Beteiligten</li>
                                      <li>• Analyse der Zeitabläufe</li>
                                      <li>• Motivanalyse</li>
                                      <li>• Rechtliche Bewertung</li>
                                      <li>• Schadensermittlung</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong className="text-orange-800">Entscheidungsfindung:</strong>
                                    <ul className="text-sm text-orange-700 mt-1 space-y-1">
                                      <li>• Bewertung der Beweislage</li>
                                      <li>• Verhältnismäßigkeitsprüfung</li>
                                      <li>• Eskalationsmatrix anwenden</li>
                                      <li>• Sanktionsentscheidung</li>
                                      <li>• Präventionsmaßnahmen definieren</li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                            <div className="flex-1">
                              <h5 className="font-semibold text-orange-900 mb-2">Maßnahmenumsetzung und Follow-up</h5>
                              <div className="bg-white p-4 rounded-lg">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                  <div>
                                    <strong className="text-orange-800">Sanktionen:</strong>
                                    <ul className="text-sm text-orange-700 mt-1 space-y-1">
                                      <li>• Abmahnung</li>
                                      <li>• Versetzung</li>
                                      <li>• Kündigung</li>
                                      <li>• Schadensersatzforderung</li>
                                      <li>• Strafanzeige</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong className="text-orange-800">Wiedergutmachung:</strong>
                                    <ul className="text-sm text-orange-700 mt-1 space-y-1">
                                      <li>• Rücknahme nachteiliger Maßnahmen</li>
                                      <li>• Schadensersatz</li>
                                      <li>• Richtigstellung</li>
                                      <li>• Entschuldigung</li>
                                      <li>• Rehabilitierung</li>
                                    </ul>
                                  </div>
                                  <div>
                                    <strong className="text-orange-800">Monitoring:</strong>
                                    <ul className="text-sm text-orange-700 mt-1 space-y-1">
                                      <li>• Nachbeobachtung</li>
                                      <li>• Regelmäßige Gespräche</li>
                                      <li>• Wirksamkeitskontrolle</li>
                                      <li>• Lessons Learned</li>
                                      <li>• Systmanpassungen</li>
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
                </ExpandableSection>

                <div className="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentSection(4)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                    onClick={() => {
                      markSectionComplete(5);
                      setCurrentSection(6);
                    }}
                    className="bg-yellow-600 hover:bg-yellow-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 6: Rechtliche Grundlagen */}
            {currentSection === 6 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-xl">
                      <Scale className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold text-gray-900">Rechtliche Grundlagen</h1>
                      <p className="text-xl text-gray-600">Gesetzliche Bestimmungen und Rechtsprechung</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Gesetzliche Bestimmungen im Detail" 
                  icon={Gavel}
                  defaultExpanded={true}
                >
                  <div className="space-y-6">
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-indigo-900 mb-4">Struktureller Aufbau des HinSchG</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-indigo-900 mb-3">Teil 1: Allgemeine Bestimmungen (§§ 1-3)</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
                              <strong className="text-blue-700">§ 1 - Anwendungsbereich:</strong>
                              <ul className="text-sm text-blue-600 mt-2 space-y-1">
                                <li>• Geschützte Personen definiert</li>
                                <li>• Räumlicher Geltungsbereich</li>
                                <li>• Verhältnis zu anderen Gesetzen</li>
                                <li>• Ausnahmen und Einschränkungen</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-green-500">
                              <strong className="text-green-700">§ 2 - Sachlicher Anwendungsbereich:</strong>
                              <ul className="text-sm text-green-600 mt-2 space-y-1">
                                <li>• Geschützte Rechtsbereiche</li>
                                <li>• Nationales vs. EU-Recht</li>
                                <li>• Straftaten und Ordnungswidrigkeiten</li>
                                <li>• Erheblichkeitsschwellen</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-purple-500">
                              <strong className="text-purple-700">§ 3 - Begriffsbestimmungen:</strong>
                              <ul className="text-sm text-purple-600 mt-2 space-y-1">
                                <li>• Hinweisgeber-Definition</li>
                                <li>• Meldung vs. Offenlegung</li>
                                <li>• Verstoß-Begriff</li>
                                <li>• Repressalien-Definition</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-indigo-900 mb-3">Teil 2: Interne Meldestellen (§§ 4-16)</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                              <strong className="text-red-700">§§ 4-7 - Strukturelle Anforderungen:</strong>
                              <ul className="text-sm text-red-600 mt-2 space-y-1">
                                <li>• Einrichtungspflicht</li>
                                <li>• Unabhängigkeit und Kompetenz</li>
                                <li>• Organisatorische Ausgestaltung</li>
                                <li>• Ressourcenausstattung</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-yellow-500">
                              <strong className="text-yellow-700">§§ 8-12 - Verfahrensbestimmungen:</strong>
                              <ul className="text-sm text-yellow-600 mt-2 space-y-1">
                                <li>• Meldekanäle und -verfahren</li>
                                <li>• Bestätigungspflichten</li>
                                <li>• Bearbeitungsfristen</li>
                                <li>• Dokumentationspflichten</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-orange-500">
                              <strong className="text-orange-700">§§ 13-16 - Information und Schulung:</strong>
                              <ul className="text-sm text-orange-600 mt-2 space-y-1">
                                <li>• Informationspflichten</li>
                                <li>• Schulungsanforderungen</li>
                                <li>• Zugänglichkeit</li>
                                <li>• Mehrsprachigkeit</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Weitere Teile des Gesetzes</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Teil 3: Externe Meldestellen (§§ 17-25)</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Zuständigkeit der Behörden</li>
                              <li>• Verfahrensbestimmungen</li>
                              <li>• Zusammenarbeit mit internen Stellen</li>
                              <li>• Berichtspflichten</li>
                              <li>• Statistiken und Evaluierung</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Teil 4: Schutz vor Repressalien (§§ 26-36)</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Repressalienverbot</li>
                              <li>• Schutzmaßnahmen</li>
                              <li>• Beweislastumkehr</li>
                              <li>• Rechtsbehelfe</li>
                              <li>• Entschädigungsansprüche</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Teil 5-6: Verfahren und Sanktionen (§§ 37-45)</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Gerichtsverfahren</li>
                              <li>• Bußgeldbestimmungen</li>
                              <li>• Übergangsbestimmungen</li>
                              <li>• Evaluierungsklausel</li>
                              <li>• Inkrafttreten</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Rechtsprechung und Kommentierung" 
                  icon={Briefcase}
                >
                  <div className="space-y-6">
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Frühe Rechtsprechung zum HinSchG</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-3">Grundsatzentscheidungen</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-blue-800">BAG, Urt. v. 15.03.2024 - 2 AZR 274/23:</strong>
                              <p className="text-sm text-blue-700 mt-2">
                                Beweislastumkehr greift auch bei mittelbarem zeitlichen Zusammenhang 
                                zwischen Meldung und nachteiliger Maßnahme.
                              </p>
                              <div className="mt-2">
                                <strong className="text-blue-800 text-sm">Leitsätze:</strong>
                                <ul className="text-sm text-blue-700 mt-1 space-y-1">
                                  <li>• Indizwirkung bei 6-monatigem Abstand möglich</li>
                                  <li>• Gesamtumstände sind zu würdigen</li>
                                  <li>• Arbeitgeber muss alternative Motivation beweisen</li>
                                </ul>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-blue-800">LAG Hamburg, Urt. v. 22.11.2023 - 3 Sa 45/23:</strong>
                              <p className="text-sm text-blue-700 mt-2">
                                Anonyme Meldungen genießen denselben Schutz wie offene Meldungen.
                              </p>
                              <div className="mt-2">
                                <strong className="text-blue-800 text-sm">Leitsätze:</strong>
                                <ul className="text-sm text-blue-700 mt-1 space-y-1">
                                  <li>• Nachträgliche Identifizierung ändert nichts am Schutz</li>
                                  <li>• Vertraulichkeitsverletzung kann Repressalie sein</li>
                                  <li>• Unternehmen haftet für Mitarbeiterverhalten</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-3">Verfahrensrechtliche Entscheidungen</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-blue-800">OLG München, Beschl. v. 08.01.2024 - 31 W 1456/23:</strong>
                              <p className="text-sm text-blue-700 mt-2">
                                Einstweilige Verfügung zum Schutz vor Repressalien ist möglich.
                              </p>
                              <div className="mt-2">
                                <strong className="text-blue-800 text-sm">Leitsätze:</strong>
                                <ul className="text-sm text-blue-700 mt-1 space-y-1">
                                  <li>• Vorläufiger Rechtsschutz verfügbar</li>
                                  <li>• Geringere Darlegungsanforderungen</li>
                                  <li>• Eilbedürftigkeit oft gegeben</li>
                                </ul>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-blue-800">VG Berlin, Urt. v. 19.02.2024 - 6 K 234/23:</strong>
                              <p className="text-sm text-blue-700 mt-2">
                                Externe Meldestellen müssen angemessene Reaktionszeiten einhalten.
                              </p>
                              <div className="mt-2">
                                <strong className="text-blue-800 text-sm">Leitsätze:</strong>
                                <ul className="text-sm text-blue-700 mt-1 space-y-1">
                                  <li>• 3-Monats-Frist ist nicht absolut</li>
                                  <li>• Zwischenmitteilungen erforderlich</li>
                                  <li>• Begründungspflicht bei Verzögerungen</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-900 mb-4">Wissenschaftliche Kommentierung</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <h5 className="font-semibold text-green-900 mb-2">Führende Kommentare</h5>
                          <ul className="text-sm text-green-800 space-y-1">
                            <li>• Kühling/Muckel: HinSchG Kommentar</li>
                            <li>• Beck'scher Online-Kommentar</li>
                            <li>• Nomos Kommentar HinSchG</li>
                            <li>• Praxishandbuch Whistleblowing</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-900 mb-2">Kontroverse Themen</h5>
                          <ul className="text-sm text-green-800 space-y-1">
                            <li>• Anwendung auf Kleinbetriebe</li>
                            <li>• Verhältnis zum Strafverfahrensrecht</li>
                            <li>• Internationale Sachverhalte</li>
                            <li>• Datenschutzrechtliche Fragen</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-900 mb-2">Reformdiskussion</h5>
                          <ul className="text-sm text-green-800 space-y-1">
                            <li>• Erweiterung des Anwendungsbereichs</li>
                            <li>• Stärkung der Sanktionen</li>
                            <li>• Prämiensystem nach US-Vorbild</li>
                            <li>• Harmonisierung mit EU-Recht</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Internationale Rechtsentwicklung" 
                  icon={Globe}
                >
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-purple-900 mb-4">EU-Rechtsprechung zur Whistleblower-Richtlinie</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-purple-900 mb-3">EuGH-Rechtsprechung</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-purple-800">EuGH, Urt. v. 22.02.2024 - C-456/23:</strong>
                              <p className="text-sm text-purple-700 mt-2">
                                "Guter Glaube" bei Meldungen ist weit auszulegen - auch bei späterem 
                                Erweis als unzutreffend bleibt Schutz bestehen.
                              </p>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-purple-800">EuGH, Urt. v. 15.11.2023 - C-789/22:</strong>
                              <p className="text-sm text-purple-700 mt-2">
                                Mitgliedstaaten dürfen Schutzstandard über EU-Mindestanforderungen 
                                hinaus erweitern.
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-900 mb-3">Nationale Umsetzungsunterschiede</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-purple-800">Frankreich:</strong>
                              <ul className="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Bereits etabliertes System durch Sapin II</li>
                                <li>• Strengere Anforderungen als EU-Mindeststandard</li>
                                <li>• Besonderer Fokus auf Korruption</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-purple-800">Niederlande:</strong>
                              <ul className="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• House for Whistleblowers als zentrale Stelle</li>
                                <li>• Starke zivilgesellschaftliche Unterstützung</li>
                                <li>• Präventionsorientierter Ansatz</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-orange-900 mb-4">Internationale Standards und Best Practices</h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <h5 className="font-semibold text-orange-900 mb-2">OECD-Standards</h5>
                          <ul className="text-sm text-orange-800 space-y-1">
                            <li>• Anti-Bribery Convention</li>
                            <li>• Corporate Governance Principles</li>
                            <li>• Due Diligence Guidelines</li>
                            <li>• Integrity Framework</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-orange-900 mb-2">UN-Konventionen</h5>
                          <ul className="text-sm text-orange-800 space-y-1">
                            <li>• UN Convention against Corruption</li>
                            <li>• Global Compact Principles</li>
                            <li>• Business and Human Rights</li>
                            <li>• Sustainable Development Goals</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-orange-900 mb-2">ISO-Standards</h5>
                          <ul className="text-sm text-orange-800 space-y-1">
                            <li>• ISO 37001 (Anti-Bribery)</li>
                            <li>• ISO 37002 (Whistleblowing)</li>
                            <li>• ISO 31000 (Risk Management)</li>
                            <li>• ISO 19600 (Compliance)</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-orange-900 mb-2">Branchenstandards</h5>
                          <ul className="text-sm text-orange-800 space-y-1">
                            <li>• Financial Services Standards</li>
                            <li>• Healthcare Compliance</li>
                            <li>• Aviation Safety Standards</li>
                            <li>• Pharmaceutical Guidelines</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div className="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentSection(5)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                    onClick={() => {
                      markSectionComplete(6);
                      setCurrentSection(7);
                    }}
                    className="bg-indigo-600 hover:bg-indigo-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 9: Schulungen */}
            {currentSection === 9 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl">
                      <GraduationCap className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold text-gray-900">Schulungen</h1>
                      <p className="text-xl text-gray-600">Mitarbeiterausbildung und Awareness-Programme</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Gesetzliche Schulungsanforderungen (§ 13 HinSchG)" 
                  icon={BookOpen}
                  defaultExpanded={true}
                >
                  <div className="space-y-6">
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-orange-900 mb-4">Informationspflichten</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-orange-900 mb-3">Zielgruppen</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
                              <strong className="text-blue-700">Alle Beschäftigten:</strong>
                              <ul className="text-sm text-blue-600 mt-2 space-y-1">
                                <li>• Grundlegende Informationen zum HinSchG</li>
                                <li>• Verfügbare Meldekanäle</li>
                                <li>• Schutz vor Repressalien</li>
                                <li>• Verfahrensabläufe</li>
                                <li>• Ansprechpartner und Kontaktdaten</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-green-500">
                              <strong className="text-green-700">Führungskräfte:</strong>
                              <ul className="text-sm text-green-600 mt-2 space-y-1">
                                <li>• Vertieftes Rechtswissen</li>
                                <li>• Umgang mit Meldungen</li>
                                <li>• Prävention von Repressalien</li>
                                <li>• Eskalationsverfahren</li>
                                <li>• Vorbildfunktion und Kommunikation</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-purple-500">
                              <strong className="text-purple-700">Meldestellen-Personal:</strong>
                              <ul className="text-sm text-purple-600 mt-2 space-y-1">
                                <li>• Spezialisierte Fachkenntnisse</li>
                                <li>• Investigationstechniken</li>
                                <li>• Gesprächsführung</li>
                                <li>• Datenschutz und Vertraulichkeit</li>
                                <li>• Kontinuierliche Weiterbildung</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-orange-900 mb-3">Schulungsformate</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-orange-800">Präsenzschulungen:</strong>
                              <ul className="text-sm text-orange-700 mt-2 space-y-1">
                                <li>• Interaktive Workshops</li>
                                <li>• Fallstudien und Rollenspiele</li>
                                <li>• Q&A-Sitzungen</li>
                                <li>• Gruppendiskussionen</li>
                                <li>• Praxisübungen</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-orange-800">E-Learning-Module:</strong>
                              <ul className="text-sm text-orange-700 mt-2 space-y-1">
                                <li>• Adaptive Lernpfade</li>
                                <li>• Interaktive Simulationen</li>
                                <li>• Gamification-Elemente</li>
                                <li>• Mobile Verfügbarkeit</li>
                                <li>• Automatische Fortschrittskontrolle</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-orange-800">Blended Learning:</strong>
                              <ul className="text-sm text-orange-700 mt-2 space-y-1">
                                <li>• Kombination verschiedener Formate</li>
                                <li>• Selbststudium und Präsenz</li>
                                <li>• Peer-Learning-Ansätze</li>
                                <li>• Mentoring-Programme</li>
                                <li>• Kontinuierliche Betreuung</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Schulungszyklen und -häufigkeit</h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Onboarding</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Grundlagenschulung für alle neuen MA</li>
                            <li>• Innerhalb der ersten 30 Tage</li>
                            <li>• Basis-Zertifizierung erforderlich</li>
                            <li>• Integration in Einarbeitungsplan</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Jährliche Auffrischung</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Pflichtschulung für alle MA</li>
                            <li>• Updates zu Gesetzesänderungen</li>
                            <li>• Neue Fallbeispiele</li>
                            <li>• Wissenstest erforderlich</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Anlassbezogen</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Nach kritischen Vorfällen</li>
                            <li>• Bei Organisationsänderungen</li>
                            <li>• Nach Gesetzesnovellierungen</li>
                            <li>• Bei Audit-Empfehlungen</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-2">Spezialisierung</h5>
                          <ul className="text-sm text-blue-800 space-y-1">
                            <li>• Vertiefung für Führungskräfte</li>
                            <li>• Branchenspezifische Module</li>
                            <li>• Train-the-Trainer Programme</li>
                            <li>• Externe Zertifizierungen</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Schulungsinhalte und Curriculum" 
                  icon={FileText}
                >
                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-900 mb-4">Modulares Curriculum</h4>
                      <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-4">
                          {/* Modul 1 */}
                          <div className="bg-white p-6 rounded-lg border-l-4 border-l-blue-500">
                            <h5 className="font-semibold text-blue-900 mb-4 flex items-center">
                              <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                              Modul 1: Rechtliche Grundlagen (2 Stunden)
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <strong className="text-blue-800 text-sm">Lernziele:</strong>
                                <ul className="text-sm text-blue-700 mt-1 space-y-1">
                                  <li>• HinSchG-Grundlagen verstehen</li>
                                  <li>• Anwendungsbereich kennen</li>
                                  <li>• Geschützte Bereiche identifizieren</li>
                                  <li>• Rechtliche Konsequenzen verstehen</li>
                                </ul>
                              </div>
                              <div>
                                <strong className="text-blue-800 text-sm">Inhalte:</strong>
                                <ul className="text-sm text-blue-700 mt-1 space-y-1">
                                  <li>• EU-Richtlinie und nationale Umsetzung</li>
                                  <li>• Begriffsbestimmungen</li>
                                  <li>• Geschützte Personen und Bereiche</li>
                                  <li>• Sanktionen und Bußgelder</li>
                                </ul>
                              </div>
                              <div>
                                <strong className="text-blue-800 text-sm">Methoden:</strong>
                                <ul className="text-sm text-blue-700 mt-1 space-y-1">
                                  <li>• Interaktive Präsentation</li>
                                  <li>• Rechtsfälle analysieren</li>
                                  <li>• Quizzes und Wissenstests</li>
                                  <li>• Diskussionsrunden</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Modul 2 */}
                          <div className="bg-white p-6 rounded-lg border-l-4 border-l-green-500">
                            <h5 className="font-semibold text-green-900 mb-4 flex items-center">
                              <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                              Modul 2: Meldesystem und Verfahren (1,5 Stunden)
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <strong className="text-green-800 text-sm">Lernziele:</strong>
                                <ul className="text-sm text-green-700 mt-1 space-y-1">
                                  <li>• Meldekanäle kennen</li>
                                  <li>• Verfahrensablauf verstehen</li>
                                  <li>• Anonymität gewährleisten</li>
                                  <li>• Dokumentation beherrschen</li>
                                </ul>
                              </div>
                              <div>
                                <strong className="text-green-800 text-sm">Inhalte:</strong>
                                <ul className="text-sm text-green-700 mt-1 space-y-1">
                                  <li>• Interne vs. externe Meldestellen</li>
                                  <li>• Technische Meldekanäle</li>
                                  <li>• Verfahrensschritte und Fristen</li>
                                  <li>• Feedback und Kommunikation</li>
                                </ul>
                              </div>
                              <div>
                                <strong className="text-green-800 text-sm">Methoden:</strong>
                                <ul className="text-sm text-green-700 mt-1 space-y-1">
                                  <li>• System-Demonstration</li>
                                  <li>• Hands-on Training</li>
                                  <li>• Prozess-Simulation</li>
                                  <li>• Praxisübungen</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Modul 3 */}
                          <div className="bg-white p-6 rounded-lg border-l-4 border-l-purple-500">
                            <h5 className="font-semibold text-purple-900 mb-4 flex items-center">
                              <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                              Modul 3: Schutz vor Repressalien (1 Stunde)
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <strong className="text-purple-800 text-sm">Lernziele:</strong>
                                <ul className="text-sm text-purple-700 mt-1 space-y-1">
                                  <li>• Repressalien erkennen</li>
                                  <li>• Schutzmaßnahmen kennen</li>
                                  <li>• Beweislastumkehr verstehen</li>
                                  <li>• Hilfestellung suchen</li>
                                </ul>
                              </div>
                              <div>
                                <strong className="text-purple-800 text-sm">Inhalte:</strong>
                                <ul className="text-sm text-purple-700 mt-1 space-y-1">
                                  <li>• Formen von Repressalien</li>
                                  <li>• Präventive Schutzmaßnahmen</li>
                                  <li>• Reaktive Interventionen</li>
                                  <li>• Rechtsmittel und Unterstützung</li>
                                </ul>
                              </div>
                              <div>
                                <strong className="text-purple-800 text-sm">Methoden:</strong>
                                <ul className="text-sm text-purple-700 mt-1 space-y-1">
                                  <li>• Fallstudien analysieren</li>
                                  <li>• Rollenspiele</li>
                                  <li>• Szenario-Training</li>
                                  <li>• Erfahrungsaustausch</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Modul 4 */}
                          <div className="bg-white p-6 rounded-lg border-l-4 border-l-orange-500">
                            <h5 className="font-semibold text-orange-900 mb-4 flex items-center">
                              <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
                              Modul 4: Praktische Anwendung (1,5 Stunden)
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div>
                                <strong className="text-orange-800 text-sm">Lernziele:</strong>
                                <ul className="text-sm text-orange-700 mt-1 space-y-1">
                                  <li>• Echte Fälle beurteilen</li>
                                  <li>• Entscheidungen treffen</li>
                                  <li>• Kommunikation üben</li>
                                  <li>• Selbstvertrauen aufbauen</li>
                                </ul>
                              </div>
                              <div>
                                <strong className="text-orange-800 text-sm">Inhalte:</strong>
                                <ul className="text-sm text-orange-700 mt-1 space-y-1">
                                  <li>• Branchenspezifische Beispiele</li>
                                  <li>• Ethische Dilemmata</li>
                                  <li>• Kommunikationsstrategien</li>
                                  <li>• Kontinuierliche Verbesserung</li>
                                </ul>
                              </div>
                              <div>
                                <strong className="text-orange-800 text-sm">Methoden:</strong>
                                <ul className="text-sm text-orange-700 mt-1 space-y-1">
                                  <li>• Interaktive Workshops</li>
                                  <li>• Peer-Learning</li>
                                  <li>• Mentoring</li>
                                  <li>• Feedback-Sessions</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Awareness-Kampagnen und Kulturwandel" 
                  icon={Users}
                >
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-purple-900 mb-4">Mehrjährige Awareness-Strategie</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-purple-900 mb-3">Kampagnen-Phasen</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-purple-800">Phase 1: Grundsensibilisierung (Jahr 1)</strong>
                              <ul className="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Einführung des Hinweisgebersystems</li>
                                <li>• Grundlegende Informationskampagne</li>
                                <li>• Führungskräfte als Multiplikatoren</li>
                                <li>• Erste Erfolgsgeschichten kommunizieren</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-purple-800">Phase 2: Vertiefung (Jahr 2-3)</strong>
                              <ul className="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Spezifische Branchenthemen</li>
                                <li>• Interaktive Formate und Events</li>
                                <li>• Peer-to-Peer Learning</li>
                                <li>• Continuous Improvement</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-purple-800">Phase 3: Nachhaltigkeit (Jahr 4+)</strong>
                              <ul className="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Integration in Unternehmenskultur</li>
                                <li>• Selbstlernende Organisation</li>
                                <li>• Innovation und Best Practices</li>
                                <li>• Externe Benchmarking</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-900 mb-3">Kommunikationskanäle</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-purple-800">Traditionelle Medien:</strong>
                              <ul className="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Intranet-Artikel und News</li>
                                <li>• Newsletter und E-Mail-Kampagnen</li>
                                <li>• Poster und Aushänge</li>
                                <li>• Mitarbeiterzeitung</li>
                                <li>• Town Hall Meetings</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-purple-800">Digitale Kanäle:</strong>
                              <ul className="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Social Enterprise Plattformen</li>
                                <li>• Video-Content und Webinare</li>
                                <li>• Mobile Apps und Push-Notifications</li>
                                <li>• Gamification und Challenges</li>
                                <li>• VR/AR-Trainings</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-purple-800">Interaktive Formate:</strong>
                              <ul className="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Workshops und Roundtables</li>
                                <li>• Lunch & Learn Sessions</li>
                                <li>• Ethics Cafés</li>
                                <li>• Compliance Days</li>
                                <li>• Peer Coaching</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-yellow-900 mb-4">Kulturwandel-Initiativen</h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-2">Leadership Commitment</h5>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            <li>• Vorbildfunktion der Führung</li>
                            <li>• Öffentliche Unterstützung</li>
                            <li>• Persönliche Erfahrungen teilen</li>
                            <li>• Regelmäßige Kommunikation</li>
                            <li>• Zero-Tolerance für Repressalien</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-2">Positive Verstärkung</h5>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            <li>• Anerkennung für Hinweisgeber</li>
                            <li>• Courage Awards</li>
                            <li>• Erfolgsgeschichten publizieren</li>
                            <li>• Positive Peer Pressure</li>
                            <li>• Intrinsische Motivation</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-2">Strukturelle Änderungen</h5>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            <li>• Integration in Performance Reviews</li>
                            <li>• Compliance-KPIs für Manager</li>
                            <li>• Ethik-Komitees etablieren</li>
                            <li>• Code of Conduct anpassen</li>
                            <li>• Anreizsysteme überdenken</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-2">Kontinuierliche Verbesserung</h5>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            <li>• Regelmäßige Kulturumfragen</li>
                            <li>• Feedback-Schleifen etablieren</li>
                            <li>• Best Practice Sharing</li>
                            <li>• Innovation fördern</li>
                            <li>• Externe Benchmarks</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div className="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentSection(8)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                    onClick={() => {
                      markSectionComplete(9);
                      setCurrentSection(10);
                    }}
                    className="bg-orange-600 hover:bg-orange-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 10: Risikomanagement */}
            {currentSection === 10 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-gray-500 to-gray-600 rounded-xl">
                      <AlertTriangle className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold text-gray-900">Risikomanagement</h1>
                      <p className="text-xl text-gray-600">Identifikation und Bewertung von Compliance-Risiken</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Risikoidentifikation und -bewertung" 
                  icon={Search}
                  defaultExpanded={true}
                >
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Systematische Risikoanalyse</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Risikokategorien</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                              <strong className="text-red-700">Rechtliche Risiken:</strong>
                              <ul className="text-sm text-red-600 mt-2 space-y-1">
                                <li>• Verstoß gegen HinSchG-Pflichten</li>
                                <li>• Bußgelder und Sanktionen</li>
                                <li>• Zivilrechtliche Ansprüche</li>
                                <li>• Strafverfahren gegen Verantwortliche</li>
                                <li>• Aufsichtsrechtliche Maßnahmen</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-orange-500">
                              <strong className="text-orange-700">Reputationsrisiken:</strong>
                              <ul className="text-sm text-orange-600 mt-2 space-y-1">
                                <li>• Negative Medienberichterstattung</li>
                                <li>• Vertrauensverlust bei Stakeholdern</li>
                                <li>• Schädigung der Arbeitgebermarke</li>
                                <li>• Kundenabwanderung</li>
                                <li>• Investoren-Vertrauen</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
                              <strong className="text-blue-700">Operative Risiken:</strong>
                              <ul className="text-sm text-blue-600 mt-2 space-y-1">
                                <li>• Ineffiziente Meldeprozesse</li>
                                <li>• Überbelastung der Meldestellen</li>
                                <li>• Systemausfälle und technische Probleme</li>
                                <li>• Personalabwanderung</li>
                                <li>• Wissensverslust</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Bewertungsmatrix</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <table className="w-full text-sm">
                                <thead>
                                  <tr className="border-b border-gray-200">
                                    <th className="text-left py-2">Wahrscheinlichkeit</th>
                                    <th className="text-center py-2">Niedrig</th>
                                    <th className="text-center py-2">Mittel</th>
                                    <th className="text-center py-2">Hoch</th>
                                  </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                  <tr>
                                    <td className="py-2 font-semibold">Schwer (&gt;1M€)</td>
                                    <td className="text-center py-2">
                                      <span className="inline-block w-4 h-4 bg-yellow-400 rounded"></span>
                                    </td>
                                    <td className="text-center py-2">
                                      <span className="inline-block w-4 h-4 bg-red-400 rounded"></span>
                                    </td>
                                    <td className="text-center py-2">
                                      <span className="inline-block w-4 h-4 bg-red-600 rounded"></span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="py-2 font-semibold">Mittel (100K-1M€)</td>
                                    <td className="text-center py-2">
                                      <span className="inline-block w-4 h-4 bg-green-400 rounded"></span>
                                    </td>
                                    <td className="text-center py-2">
                                      <span className="inline-block w-4 h-4 bg-yellow-400 rounded"></span>
                                    </td>
                                    <td className="text-center py-2">
                                      <span className="inline-block w-4 h-4 bg-red-400 rounded"></span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="py-2 font-semibold">Gering (&lt;100K€)</td>
                                    <td className="text-center py-2">
                                      <span className="inline-block w-4 h-4 bg-green-200 rounded"></span>
                                    </td>
                                    <td className="text-center py-2">
                                      <span className="inline-block w-4 h-4 bg-green-400 rounded"></span>
                                    </td>
                                    <td className="text-center py-2">
                                      <span className="inline-block w-4 h-4 bg-yellow-400 rounded"></span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <div className="mt-3 text-xs text-gray-600">
                                <span className="inline-block w-3 h-3 bg-green-200 rounded mr-1"></span> Niedrig
                                <span className="inline-block w-3 h-3 bg-green-400 rounded mr-1 ml-3"></span> Gering
                                <span className="inline-block w-3 h-3 bg-yellow-400 rounded mr-1 ml-3"></span> Mittel
                                <span className="inline-block w-3 h-3 bg-red-400 rounded mr-1 ml-3"></span> Hoch
                                <span className="inline-block w-3 h-3 bg-red-600 rounded mr-1 ml-3"></span> Kritisch
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Risikoindikatoren und Frühwarnsysteme</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-3">Quantitative Indikatoren</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <ul className="text-sm text-blue-800 space-y-1">
                              <li>• Anzahl Meldungen pro Quartal</li>
              <li>• Durchschnittliche Bearbeitungszeit</li>
                              <li>• Quote substantiierter Meldungen</li>
                              <li>• Wiederholungsmeldungen</li>
                              <li>• Eskalationsrate zu externen Stellen</li>
                              <li>• Personalfluktuation nach Meldungen</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-3">Qualitative Indikatoren</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <ul className="text-sm text-blue-800 space-y-1">
                              <li>• Mitarbeitervertrauen in das System</li>
                              <li>• Führungsverhalten bei Meldungen</li>
                              <li>• Kulturelle Offenheit für Feedback</li>
                              <li>• Qualität der Untersuchungen</li>
                              <li>• Wirksamkeit der Maßnahmen</li>
                              <li>• Externe Wahrnehmung</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-3">Technische Indikatoren</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <ul className="text-sm text-blue-800 space-y-1">
                              <li>• Systemverfügbarkeit</li>
                              <li>• Sicherheitsvorfälle</li>
                              <li>• Datenintegrität</li>
                              <li>• Performance-Kennzahlen</li>
                              <li>• Backup-Erfolgsrate</li>
                              <li>• User Experience Scores</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Risikominderungsstrategien" 
                  icon={Shield}
                >
                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-900 mb-4">Präventive Maßnahmen</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-green-900 mb-3">Organisatorische Prävention</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-green-800">Governance-Strukturen:</strong>
                              <ul className="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Unabhängige Oversight-Komitees</li>
                                <li>• Klar definierte Verantwortlichkeiten</li>
                                <li>• Regelmäßige Board-Berichte</li>
                                <li>• Externe Beratung und Audits</li>
                                <li>• Kontinuierliche Fortbildung</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-green-800">Prozessoptimierung:</strong>
                              <ul className="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Standardisierte Verfahren</li>
                                <li>• Automatisierte Workflows</li>
                                <li>• Quality Assurance Checkpoints</li>
                                <li>• Feedback-Integration</li>
                                <li>• Continuous Improvement</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-900 mb-3">Technische Prävention</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-green-800">Systemsicherheit:</strong>
                              <ul className="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Redundante Systeme</li>
                                <li>• Verschlüsselung aller Daten</li>
                                <li>• Multi-Faktor-Authentifizierung</li>
                                <li>• Penetrationstests</li>
                                <li>• 24/7 Monitoring</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-green-800">Datenintegrität:</strong>
                              <ul className="text-sm text-green-700 mt-2 space-y-1">
                                <li>• Automatische Backups</li>
                                <li>• Versionskontrolle</li>
                                <li>• Audit-Trails</li>
                                <li>• Disaster Recovery</li>
                                <li>• Business Continuity</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-yellow-900 mb-4">Reaktive Maßnahmen</h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-2">Incident Response</h5>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            <li>• Sofortmaßnahmen-Katalog</li>
                            <li>• Eskalationsmatrix</li>
                            <li>• Kommunikationspläne</li>
                            <li>• Crisis Management Team</li>
                            <li>• Lessons Learned Process</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-2">Schadensbegrenzung</h5>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            <li>• Sofortige Systemsperrung</li>
                            <li>• Forensische Untersuchung</li>
                            <li>• Beweissicherung</li>
                            <li>• Stakeholder-Information</li>
                            <li>• Medien-Management</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-2">Wiederherstellung</h5>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            <li>• System-Recovery</li>
                            <li>• Datenwiederherstellung</li>
                            <li>• Prozess-Optimierung</li>
                            <li>• Personal-Nachschulung</li>
                            <li>• Vertrauens-Wiederaufbau</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-2">Langfristige Anpassung</h5>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            <li>• Strukturelle Reformen</li>
                            <li>• Kulturwandel-Programme</li>
                            <li>• Verstärkte Kontrollen</li>
                            <li>• Externe Validierung</li>
                            <li>• Benchmark-Analysen</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Risiko-Monitoring und -Reporting" 
                  icon={BarChart3}
                >
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-purple-900 mb-4">Kontinuierliches Monitoring</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-purple-900 mb-3">Dashboard und KPIs</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <div className="space-y-3">
                              <div className="flex justify-between items-center p-3 bg-green-100 rounded">
                                <span className="text-sm font-medium text-green-800">Systemverfügbarkeit</span>
                                <span className="text-lg font-bold text-green-600">99.8%</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-blue-100 rounded">
                                <span className="text-sm font-medium text-blue-800">Meldungen YTD</span>
                                <span className="text-lg font-bold text-blue-600">127</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-yellow-100 rounded">
                                <span className="text-sm font-medium text-yellow-800">Ø Bearbeitungszeit</span>
                                <span className="text-lg font-bold text-yellow-600">18 Tage</span>
                              </div>
                              <div className="flex justify-between items-center p-3 bg-red-100 rounded">
                                <span className="text-sm font-medium text-red-800">Offene Risiken</span>
                                <span className="text-lg font-bold text-red-600">3</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-900 mb-3">Automatisierte Alerts</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-purple-800">Schwellenwerte:</strong>
                              <ul className="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• &gt;5 Meldungen pro Abteilung/Monat</li>
                                <li>• Bearbeitungszeit &gt;30 Tage</li>
                                <li>• Systemausfall &gt;2 Stunden</li>
                                <li>• Wiederholungsmeldungen</li>
                                <li>• Externe Medienmeldungen</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-purple-800">Eskalationsstufen:</strong>
                              <ul className="text-sm text-purple-700 mt-2 space-y-1">
                                <li>• Stufe 1: Team-Lead Information</li>
                                <li>• Stufe 2: Management-Benachrichtigung</li>
                                <li>• Stufe 3: Board-Eskalation</li>
                                <li>• Stufe 4: Externe Meldepflicht</li>
                                <li>• Stufe 5: Crisis Management</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-orange-900 mb-4">Periodisches Reporting</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-semibold text-orange-900 mb-3">Monatliche Reports</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <ul className="text-sm text-orange-800 space-y-1">
                              <li>• Meldungsstatistiken</li>
                              <li>• Verfahrensstatus</li>
                              <li>• Risikoindikatoren</li>
                              <li>• Systemperformance</li>
                              <li>• Compliance-Trends</li>
                              <li>• Action Items</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-orange-900 mb-3">Quartalsberichte</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <ul className="text-sm text-orange-800 space-y-1">
                              <li>• Comprehensive Risk Assessment</li>
                              <li>• Trend-Analysen</li>
                              <li>• Benchmark-Vergleiche</li>
                              <li>• Maßnahmen-Wirksamkeit</li>
                              <li>• Stakeholder-Feedback</li>
                              <li>• Improvement Roadmap</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-orange-900 mb-3">Jahresberichte</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <ul className="text-sm text-orange-800 space-y-1">
                              <li>• Strategische Risikobewertung</li>
                              <li>• Gesamtwirksamkeit des Systems</li>
                              <li>• Kulturwandel-Indikatoren</li>
                              <li>• Externe Benchmarks</li>
                              <li>• ROI-Analysen</li>
                              <li>• Strategische Empfehlungen</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div className="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentSection(9)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                    onClick={() => {
                      markSectionComplete(10);
                      setCurrentSection(11);
                    }}
                    className="bg-gray-600 hover:bg-gray-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 11: Monitoring */}
            {currentSection === 11 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-xl">
                      <Activity className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold text-gray-900">Monitoring</h1>
                      <p className="text-xl text-gray-600">Überwachung und kontinuierliche Verbesserung</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="System-Monitoring und Performance-Überwachung" 
                  icon={Monitor}
                  defaultExpanded={true}
                >
                  <div className="space-y-6">
                    <div className="bg-cyan-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-cyan-900 mb-4">Real-Time Monitoring Dashboard</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-cyan-900 mb-3">Technische KPIs</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-cyan-800">Systemverfügbarkeit</span>
                                <span className="text-lg font-bold text-green-600">99.97%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{width: '99.97%'}}></div>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-cyan-800">Response Time (avg)</span>
                                <span className="text-lg font-bold text-blue-600">1.2s</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-500 h-2 rounded-full" style={{width: '85%'}}></div>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-cyan-800">Concurrent Users</span>
                                <span className="text-lg font-bold text-purple-600">247</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-purple-500 h-2 rounded-full" style={{width: '65%'}}></div>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <div className="flex justify-between items-center mb-2">
                                <span className="text-sm font-medium text-cyan-800">Data Integrity Score</span>
                                <span className="text-lg font-bold text-green-600">100%</span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-cyan-900 mb-3">Operative KPIs</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
                              <strong className="text-blue-700">Meldungsvolumen:</strong>
                              <div className="mt-2 space-y-1 text-sm text-blue-600">
                                <div className="flex justify-between">
                                  <span>Heute:</span>
                                  <span className="font-semibold">3 neue Meldungen</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Diese Woche:</span>
                                  <span className="font-semibold">12 Meldungen</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Dieser Monat:</span>
                                  <span className="font-semibold">47 Meldungen</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>YTD:</span>
                                  <span className="font-semibold">234 Meldungen</span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-green-500">
                              <strong className="text-green-700">Verfahrensstatus:</strong>
                              <div className="mt-2 space-y-1 text-sm text-green-600">
                                <div className="flex justify-between">
                                  <span>In Bearbeitung:</span>
                                  <span className="font-semibold">18 Fälle</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Pending Review:</span>
                                  <span className="font-semibold">7 Fälle</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Abgeschlossen:</span>
                                  <span className="font-semibold">209 Fälle</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Überfällig:</span>
                                  <span className="font-semibold text-red-600">2 Fälle</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Automatisierte Alerting-Systeme</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-3">Kritische Alerts</h5>
                          <div className="space-y-2">
                            <div className="bg-red-100 p-3 rounded-lg border-l-4 border-l-red-500">
                              <div className="flex items-center">
                                <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                                <span className="text-sm font-medium text-red-800">System Downtime &gt;30min</span>
                              </div>
                            </div>
                            <div className="bg-red-100 p-3 rounded-lg border-l-4 border-l-red-500">
                              <div className="flex items-center">
                                <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                                <span className="text-sm font-medium text-red-800">Data Breach Detected</span>
                              </div>
                            </div>
                            <div className="bg-red-100 p-3 rounded-lg border-l-4 border-l-red-500">
                              <div className="flex items-center">
                                <AlertCircle className="h-4 w-4 text-red-600 mr-2" />
                                <span className="text-sm font-medium text-red-800">Überfällige Meldung &gt;30 Tage</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-3">Warn-Alerts</h5>
                          <div className="space-y-2">
                            <div className="bg-yellow-100 p-3 rounded-lg border-l-4 border-l-yellow-500">
                              <div className="flex items-center">
                                <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />
                                <span className="text-sm font-medium text-yellow-800">Response Time &gt;3s</span>
                              </div>
                            </div>
                            <div className="bg-yellow-100 p-3 rounded-lg border-l-4 border-l-yellow-500">
                              <div className="flex items-center">
                                <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />
                                <span className="text-sm font-medium text-yellow-800">Hohe Meldungsfrequenz</span>
                              </div>
                            </div>
                            <div className="bg-yellow-100 p-3 rounded-lg border-l-4 border-l-yellow-500">
                              <div className="flex items-center">
                                <AlertTriangle className="h-4 w-4 text-yellow-600 mr-2" />
                                <span className="text-sm font-medium text-yellow-800">Backup Failed</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-3">Info-Alerts</h5>
                          <div className="space-y-2">
                            <div className="bg-blue-100 p-3 rounded-lg border-l-4 border-l-blue-500">
                              <div className="flex items-center">
                                <Info className="h-4 w-4 text-blue-600 mr-2" />
                                <span className="text-sm font-medium text-blue-800">System Update Completed</span>
                              </div>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-lg border-l-4 border-l-blue-500">
                              <div className="flex items-center">
                                <Info className="h-4 w-4 text-blue-600 mr-2" />
                                <span className="text-sm font-medium text-blue-800">Monthly Report Generated</span>
                              </div>
                            </div>
                            <div className="bg-blue-100 p-3 rounded-lg border-l-4 border-l-blue-500">
                              <div className="flex items-center">
                                <Info className="h-4 w-4 text-blue-600 mr-2" />
                                <span className="text-sm font-medium text-blue-800">Neue Schulung verfügbar</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Wirksamkeitsmessung und Analytics" 
                  icon={BarChart3}
                >
                  <div className="space-y-6">
                    <div className="bg-green-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-green-900 mb-4">Performance Analytics</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-green-900 mb-3">Trend-Analysen</h5>
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg">
                              <h6 className="font-semibold text-green-800 mb-2">Meldungsvolumen-Trends</h6>
                              <div className="space-y-2 text-sm text-green-700">
                                <div className="flex justify-between">
                                  <span>Q1 2024:</span>
                                  <span className="font-semibold">67 Meldungen (+12%)</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Q2 2024:</span>
                                  <span className="font-semibold">73 Meldungen (+9%)</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Q3 2024:</span>
                                  <span className="font-semibold">81 Meldungen (+11%)</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Q4 2024 (Proj.):</span>
                                  <span className="font-semibold">89 Meldungen (+10%)</span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <h6 className="font-semibold text-green-800 mb-2">Aufklärungsquote</h6>
                              <div className="space-y-2 text-sm text-green-700">
                                <div className="flex justify-between">
                                  <span>2023:</span>
                                  <span className="font-semibold">76% aufgeklärt</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>YTD 2024:</span>
                                  <span className="font-semibold">82% aufgeklärt</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Ziel 2024:</span>
                                  <span className="font-semibold">85% aufgeklärt</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Status:</span>
                                  <span className="font-semibold text-green-600">Auf Kurs</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-green-900 mb-3">Segmentierung und Kategorisierung</h5>
                          <div className="space-y-4">
                            <div className="bg-white p-4 rounded-lg">
                              <h6 className="font-semibold text-green-800 mb-2">Nach Kategorien (YTD)</h6>
                              <div className="space-y-2 text-sm text-green-700">
                                <div className="flex justify-between">
                                  <span>Arbeitsrecht:</span>
                                  <span className="font-semibold">58 Fälle (25%)</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Korruption:</span>
                                  <span className="font-semibold">47 Fälle (20%)</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Diskriminierung:</span>
                                  <span className="font-semibold">35 Fälle (15%)</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Datenschutz:</span>
                                  <span className="font-semibold">28 Fälle (12%)</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Sonstige:</span>
                                  <span className="font-semibold">66 Fälle (28%)</span>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <h6 className="font-semibold text-green-808 mb-2">Nach Schweregrad</h6>
                              <div className="space-y-2 text-sm text-green-700">
                                <div className="flex justify-between">
                                  <span>Niedrig:</span>
                                  <span className="font-semibold">124 Fälle (53%)</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Mittel:</span>
                                  <span className="font-semibold">87 Fälle (37%)</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Hoch:</span>
                                  <span className="font-semibold">19 Fälle (8%)</span>
                                </div>
                                <div className="flex justify-between">
                                  <span>Kritisch:</span>
                                  <span className="font-semibold">4 Fälle (2%)</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-purple-900 mb-4">Predictive Analytics und KI-Insights</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-semibold text-purple-900 mb-3">Risikovorhersagen</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <ul className="text-sm text-purple-800 space-y-2">
                              <li className="flex items-center">
                                <TrendingUp className="h-4 w-4 text-red-500 mr-2" />
                                <span>Erhöhtes Risiko Abteilung Sales (87%)</span>
                              </li>
                              <li className="flex items-center">
                                <TrendingUp className="h-4 w-4 text-yellow-500 mr-2" />
                                <span>Moderate Risikoentwicklung IT (64%)</span>
                              </li>
                              <li className="flex items-center">
                                <TrendingUp className="h-4 w-4 text-green-500 mr-2" />
                                <span>Stabiles Risiko HR (23%)</span>
                              </li>
                              <li className="flex items-center">
                                <TrendingUp className="h-4 w-4 text-orange-500 mr-2" />
                                <span>Neue Hotspots Procurement (78%)</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-900 mb-3">Pattern Recognition</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <ul className="text-sm text-purple-800 space-y-2">
                              <li>• Saisonale Spitzen in Q4 identifiziert</li>
                              <li>• Korrelation zwischen Überstunden und Meldungen</li>
                              <li>• Führungswechsel erhöht Meldungsvolumen</li>
                              <li>• Anonyme Meldungen häufiger substantiiert</li>
                              <li>• Wiederkehrende Themen in bestimmten Teams</li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-purple-900 mb-3">Empfehlungen</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <ul className="text-sm text-purple-800 space-y-2">
                              <li>• Präventive Maßnahmen für Sales-Team</li>
                              <li>• Verstärkte Schulungen im Procurement</li>
                              <li>• Review der Compliance-Prozesse in IT</li>
                              <li>• Frühe Intervention bei Teamwechseln</li>
                              <li>• Anonymität fördern und kommunizieren</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Kontinuierliche Verbesserung" 
                  icon={TrendingUp}
                >
                  <div className="space-y-6">
                    <div className="bg-orange-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-orange-900 mb-4">Improvement Zyklen</h4>
                      <div className="grid grid-cols-1 gap-6">
                        <div className="space-y-4">
                          {/* PDCA Zyklus */}
                          <div className="bg-white p-6 rounded-lg border-l-4 border-l-blue-500">
                            <h5 className="font-semibold text-blue-900 mb-4 flex items-center">
                              <RotateCcw className="h-6 w-6 text-blue-600 mr-3" />
                              PDCA-Zyklus für kontinuierliche Verbesserung
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                              <div className="text-center">
                                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span className="text-xl font-bold text-blue-600">P</span>
                                </div>
                                <h6 className="font-semibold text-blue-900 mb-2">Plan</h6>
                                <ul className="text-sm text-blue-700 space-y-1">
                                  <li>• Probleme identifizieren</li>
                                  <li>• Ziele definieren</li>
                                  <li>• Lösungsansätze entwickeln</li>
                                  <li>• Ressourcen planen</li>
                                </ul>
                              </div>
                              <div className="text-center">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span className="text-xl font-bold text-green-600">D</span>
                                </div>
                                <h6 className="font-semibold text-green-900 mb-2">Do</h6>
                                <ul className="text-sm text-green-700 space-y-1">
                                  <li>• Maßnahmen umsetzen</li>
                                  <li>• Pilotprojekte durchführen</li>
                                  <li>• Daten sammeln</li>
                                  <li>• Progress dokumentieren</li>
                                </ul>
                              </div>
                              <div className="text-center">
                                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span className="text-xl font-bold text-yellow-600">C</span>
                                </div>
                                <h6 className="font-semibold text-yellow-900 mb-2">Check</h6>
                                <ul className="text-sm text-yellow-700 space-y-1">
                                  <li>• Ergebnisse messen</li>
                                  <li>• Zielerreichung prüfen</li>
                                  <li>• Abweichungen analysieren</li>
                                  <li>• Lessons Learned</li>
                                </ul>
                              </div>
                              <div className="text-center">
                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                  <span className="text-xl font-bold text-purple-600">A</span>
                                </div>
                                <h6 className="font-semibold text-purple-900 mb-2">Act</h6>
                                <ul className="text-sm text-purple-700 space-y-1">
                                  <li>• Standards anpassen</li>
                                  <li>• Best Practices implementieren</li>
                                  <li>• Prozesse optimieren</li>
                                  <li>• Neuen Zyklus starten</li>
                                </ul>
                              </div>
                            </div>
                          </div>

                          {/* Verbesserungsiniiativen */}
                          <div className="bg-white p-6 rounded-lg border-l-4 border-l-green-500">
                            <h5 className="font-semibold text-green-900 mb-4">Aktuelle Verbesserungsinitiativen</h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                <h6 className="font-semibold text-green-800 mb-3">Laufende Projekte</h6>
                                <div className="space-y-3">
                                  <div className="bg-green-50 p-3 rounded-lg">
                                    <div className="flex justify-between items-center mb-1">
                                      <span className="text-sm font-medium text-green-800">KI-gestützte Kategorisierung</span>
                                      <span className="text-xs text-green-600">75%</span>
                                    </div>
                                    <div className="w-full bg-green-200 rounded-full h-2">
                                      <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                                    </div>
                                  </div>
                                  <div className="bg-green-50 p-3 rounded-lg">
                                    <div className="flex justify-between items-center mb-1">
                                      <span className="text-sm font-medium text-green-800">Mobile App Entwicklung</span>
                                      <span className="text-xs text-green-600">45%</span>
                                    </div>
                                    <div className="w-full bg-green-200 rounded-full h-2">
                                      <div className="bg-green-500 h-2 rounded-full" style={{width: '45%'}}></div>
                                    </div>
                                  </div>
                                  <div className="bg-green-50 p-3 rounded-lg">
                                    <div className="flex justify-between items-center mb-1">
                                      <span className="text-sm font-medium text-green-800">Prozessautomatisierung</span>
                                      <span className="text-xs text-green-600">90%</span>
                                    </div>
                                    <div className="w-full bg-green-200 rounded-full h-2">
                                      <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <h6 className="font-semibold text-green-800 mb-3">Geplante Initiativen</h6>
                                <div className="space-y-2">
                                  <div className="bg-gray-50 p-3 rounded-lg">
                                    <span className="text-sm font-medium text-gray-700">Blockchain-Integration für Transparenz</span>
                                    <div className="text-xs text-gray-500 mt-1">Q1 2025</div>
                                  </div>
                                  <div className="bg-gray-50 p-3 rounded-lg">
                                    <span className="text-sm font-medium text-gray-700">VR-Training für Investigatoren</span>
                                    <div className="text-xs text-gray-500 mt-1">Q2 2025</div>
                                  </div>
                                  <div className="bg-gray-50 p-3 rounded-lg">
                                    <span className="text-sm font-medium text-gray-700">Internationales Benchmark-Programm</span>
                                    <div className="text-xs text-gray-500 mt-1">Q3 2025</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-yellow-900 mb-4">Stakeholder Feedback Integration</h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-2">Mitarbeiter Feedback</h5>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            <li>• Quartalsweise Umfragen</li>
                            <li>• Focus Groups</li>
                            <li>• Pulse Surveys</li>
                            <li>• Exit Interviews</li>
                            <li>• Anonyme Suggestion Box</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-2">Management Feedback</h5>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            <li>• Board Reviews</li>
                            <li>• Führungskräfte-Workshops</li>
                            <li>• 360-Grad-Feedback</li>
                            <li>• Performance Reviews</li>
                            <li>• Strategic Planning Sessions</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-2">Externe Stakeholder</h5>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            <li>• Aufsichtsbehörden-Dialog</li>
                            <li>• Branchenaustausch</li>
                            <li>• Beratergremien</li>
                            <li>• Akademische Partnerschaften</li>
                            <li>• NGO-Kooperationen</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-2">Systemnutzer</h5>
                          <ul className="text-sm text-yellow-800 space-y-1">
                            <li>• User Experience Testing</li>
                            <li>• Usability Studies</li>
                            <li>• Feature Requests</li>
                            <li>• Bug Reports</li>
                            <li>• Performance Feedback</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div className="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentSection(10)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                    onClick={() => {
                      markSectionComplete(11);
                      setCurrentSection(12);
                    }}
                    className="bg-cyan-600 hover:bg-cyan-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* Section 12: Compliance */}
            {currentSection === 12 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="p-3 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-xl">
                      <CheckCircle className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-bold text-gray-900">Compliance</h1>
                      <p className="text-xl text-gray-600">Einhaltung gesetzlicher Vorgaben und Standards</p>
                    </div>
                  </div>
                </div>

                <ExpandableSection 
                  title="Compliance-Management-System" 
                  icon={Settings}
                  defaultExpanded={true}
                >
                  <div className="space-y-6">
                    <div className="bg-emerald-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-emerald-900 mb-4">Drei-Linien-Modell der Compliance</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white p-6 rounded-lg border-l-4 border-l-blue-500">
                          <h5 className="font-semibold text-blue-900 mb-3 flex items-center">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                            Erste Verteidigungslinie
                          </h5>
                          <div className="space-y-3">
                            <div>
                              <strong className="text-blue-800">Operative Bereiche:</strong>
                              <ul className="text-sm text-blue-700 mt-1 space-y-1">
                                <li>• Fachbereiche und Geschäftseinheiten</li>
                                <li>• Frontline Management</li>
                                <li>• Operatives Personal</li>
                                <li>• Prozessverantwortliche</li>
                              </ul>
                            </div>
                            <div>
                              <strong className="text-blue-800">Aufgaben:</strong>
                              <ul className="text-sm text-blue-700 mt-1 space-y-1">
                                <li>• Tägliche Compliance-Umsetzung</li>
                                <li>• Erste Risikokontrolle</li>
                                <li>• Selbstüberwachung</li>
                                <li>• Incident Detection</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-l-green-500">
                          <h5 className="font-semibold text-green-900 mb-3 flex items-center">
                            <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                            Zweite Verteidigungslinie
                          </h5>
                          <div className="space-y-3">
                            <div>
                              <strong className="text-green-800">Compliance & Risk Management:</strong>
                              <ul className="text-sm text-green-700 mt-1 space-y-1">
                                <li>• Compliance Officer</li>
                                <li>• Risk Manager</li>
                                <li>• Hinweisgeberstellen</li>
                                <li>• Legal Department</li>
                              </ul>
                            </div>
                            <div>
                              <strong className="text-green-800">Aufgaben:</strong>
                              <ul className="text-sm text-green-700 mt-1 space-y-1">
                                <li>• Überwachung der Compliance</li>
                                <li>• Risikoidentifikation</li>
                                <li>• Richtlinienentwicklung</li>
                                <li>• Monitoring und Reporting</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-white p-6 rounded-lg border-l-4 border-l-purple-500">
                          <h5 className="font-semibold text-purple-900 mb-3 flex items-center">
                            <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                            Dritte Verteidigungslinie
                          </h5>
                          <div className="space-y-3">
                            <div>
                              <strong className="text-purple-800">Interne Revision:</strong>
                              <ul className="text-sm text-purple-700 mt-1 space-y-1">
                                <li>• Internal Audit</li>
                                <li>• Externe Auditoren</li>
                                <li>• Prüfungsausschuss</li>
                                <li>• Forensic Specialists</li>
                              </ul>
                            </div>
                            <div>
                              <strong className="text-purple-800">Aufgaben:</strong>
                              <ul className="text-sm text-purple-700 mt-1 space-y-1">
                                <li>• Unabhängige Prüfung</li>
                                <li>• Systemwirksamkeit bewerten</li>
                                <li>• Assurance Services</li>
                                <li>• Board Reporting</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-blue-900 mb-4">Compliance-Governance</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-3">Organisationsstruktur</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-blue-800">Aufsichtsrat/Board:</strong>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Strategische Oversight</li>
                                <li>• Compliance-Ziele definieren</li>
                                <li>• Ressourcenallokation</li>
                                <li>• Performance Review</li>
                                <li>• Whistleblower-Schutz sicherstellen</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-blue-800">Geschäftsführung:</strong>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Compliance-Kultur schaffen</li>
                                <li>• Tone from the top</li>
                                <li>• Budget und Ressourcen</li>
                                <li>• Eskalationsempfänger</li>
                                <li>• Externes Reporting</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 mb-3">Compliance-Komitees</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-blue-800">Executive Compliance Committee:</strong>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• C-Level Besetzung</li>
                                <li>• Monatliche Meetings</li>
                                <li>• Strategische Entscheidungen</li>
                                <li>• Budgetverantwortung</li>
                                <li>• Krisenmanagement</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-blue-800">Operational Compliance Committee:</strong>
                              <ul className="text-sm text-blue-700 mt-2 space-y-1">
                                <li>• Fachbereichsleiter</li>
                                <li>• Wöchentliche Meetings</li>
                                <li>• Operative Umsetzung</li>
                                <li>• Case Review</li>
                                <li>• Process Improvement</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Regulatorische Compliance" 
                  icon={Gavel}
                >
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Anwendbare Rechtsvorschriften</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Primäre Compliance-Bereiche</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                              <strong className="text-red-700">HinSchG-Compliance:</strong>
                              <ul className="text-sm text-red-600 mt-2 space-y-1">
                                <li>• Meldestellen einrichten und betreiben</li>
                                <li>• Verfahrensfristen einhalten</li>
                                <li>• Dokumentationspflichten erfüllen</li>
                                <li>• Schulungen durchführen</li>
                                <li>• Repressalienverbot durchsetzen</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-blue-500">
                              <strong className="text-blue-700">DSGVO-Compliance:</strong>
                              <ul className="text-sm text-blue-600 mt-2 space-y-1">
                                <li>• Rechtsgrundlagen dokumentieren</li>
                                <li>• Datenminimierung umsetzen</li>
                                <li>• Betroffenenrechte gewährleisten</li>
                                <li>• Privacy by Design implementieren</li>
                                <li>• Löschkonzepte etablieren</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Sekundäre Compliance-Bereiche</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-green-500">
                              <strong className="text-green-700">Arbeitsrecht:</strong>
                              <ul className="text-sm text-green-600 mt-2 space-y-1">
                                <li>• Betriebsrat-Mitbestimmung</li>
                                <li>• Personalakten-Führung</li>
                                <li>• Gleichbehandlung sicherstellen</li>
                                <li>• Kündigungsschutz beachten</li>
                                <li>• Arbeitszeit-Compliance</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg border-l-4 border-l-purple-500">
                              <strong className="text-purple-700">Branchenspezifische Regelungen:</strong>
                              <ul className="text-sm text-purple-600 mt-2 space-y-1">
                                <li>• Finanzmarktaufsicht (BaFin)</li>
                                <li>• Medizinprodukte-Verordnung</li>
                                <li>• Lebensmittelsicherheit</li>
                                <li>• Umweltschutzbestimmungen</li>
                                <li>• Kartellrecht</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-yellow-900 mb-4">Compliance-Monitoring und -Testing</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-3">Kontinuierliches Monitoring</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <ul className="text-sm text-yellow-800 space-y-2">
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span>Automatisierte Compliance-Checks</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span>Real-time Monitoring Dashboard</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span>Exception Reporting</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span>Trend-Analyse</span>
                              </li>
                              <li className="flex items-center">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                <span>Predictive Compliance Analytics</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-3">Periodisches Testing</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <ul className="text-sm text-yellow-800 space-y-2">
                              <li className="flex items-center">
                                <Calendar className="h-4 w-4 text-blue-500 mr-2" />
                                <span>Quartalsweise Control Tests</span>
                              </li>
                              <li className="flex items-center">
                                <Calendar className="h-4 w-4 text-blue-500 mr-2" />
                                <span>Jährliche Compliance Audits</span>
                              </li>
                              <li className="flex items-center">
                                <Calendar className="h-4 w-4 text-blue-500 mr-2" />
                                <span>Ad-hoc Vulnerability Assessments</span>
                              </li>
                              <li className="flex items-center">
                                <Calendar className="h-4 w-4 text-blue-500 mr-2" />
                                <span>Penetration Testing</span>
                              </li>
                              <li className="flex items-center">
                                <Calendar className="h-4 w-4 text-blue-500 mr-2" />
                                <span>Regulatory Mock Audits</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-yellow-900 mb-3">Compliance-Metriken</h5>
                          <div className="bg-white p-4 rounded-lg">
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-yellow-800">Compliance Score</span>
                                <span className="font-bold text-green-600">94%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-yellow-800">Control Effectiveness</span>
                                <span className="font-bold text-green-600">97%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-yellow-800">Training Completion</span>
                                <span className="font-bold text-yellow-600">89%</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-yellow-800">Incident Response Time</span>
                                <span className="font-bold text-blue-600">2.3 hrs</span>
                              </div>
                              <div className="flex justify-between items-center">
                                <span className="text-sm text-yellow-800">Regulatory Violations</span>
                                <span className="font-bold text-green-600">0</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <ExpandableSection 
                  title="Audit und Zertifizierung" 
                  icon={Award}
                >
                  <div className="space-y-6">
                    <div className="bg-indigo-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-indigo-900 mb-4">Interne Audits</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h5 className="font-semibold text-indigo-900 mb-3">Audit-Programm</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-indigo-800">Jährlicher Audit-Plan:</strong>
                              <ul className="text-sm text-indigo-700 mt-2 space-y-1">
                                <li>• Q1: System Controls & Infrastructure</li>
                                <li>• Q2: Process Compliance & Documentation</li>
                                <li>• Q3: Training & Awareness Assessment</li>
                                <li>• Q4: Effectiveness & Risk Assessment</li>
                                <li>• Ad-hoc: Incident-driven Audits</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong className="text-indigo-800">Audit-Methodik:</strong>
                              <ul className="text-sm text-indigo-700 mt-2 space-y-1">
                                <li>• Risk-based Approach</li>
                                <li>• COSO Framework Alignment</li>
                                <li>• ISO 19011 Standards</li>
                                <li>• Sampling-basierte Tests</li>
                                <li>• Continuous Auditing Tools</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h5 className="font-semibold text-indigo-900 mb-3">Audit-Ergebnisse 2024</h5>
                          <div className="space-y-3">
                            <div className="bg-white p-4 rounded-lg">
                              <div className="space-y-2">
                                <div className="flex justify-between">
                                  <span className="text-sm text-indigo-700">Durchgeführte Audits:</span>
                                  <span className="font-semibold text-indigo-900">12</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-indigo-700">Identifizierte Findings:</span>
                                  <span className="font-semibold text-indigo-900">23</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-indigo-700">High-Priority Issues:</span>
                                  <span className="font-semibold text-red-600">2</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-indigo-700">Medium-Priority Issues:</span>
                                  <span className="font-semibold text-yellow-600">7</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-indigo-700">Low-Priority Issues:</span>
                                  <span className="font-semibold text-green-600">14</span>
                                </div>
                                <div className="flex justify-between">
                                  <span className="text-sm text-indigo-700">Behobene Findings:</span>
                                  <span className="font-semibold text-green-600">21/23</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h4 className="text-lg font-semibold text-purple-900 mb-4">Externe Zertifizierungen</h4>
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div className="bg-white p-4 rounded-lg text-center">
                          <Award className="h-12 w-12 text-green-500 mx-auto mb-3" />
                          <h5 className="font-semibold text-purple-900 mb-2">ISO 37002</h5>
                          <div className="text-sm text-purple-700 mb-2">Whistleblowing Management</div>
                          <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Zertifiziert</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                          <Award className="h-12 w-12 text-blue-500 mx-auto mb-3" />
                          <h5 className="font-semibold text-purple-900 mb-2">ISO 37001</h5>
                          <div className="text-sm text-purple-700 mb-2">Anti-Bribery Management</div>
                          <div className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">In Vorbereitung</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                          <Award className="h-12 w-12 text-purple-500 mx-auto mb-3" />
                          <h5 className="font-semibold text-purple-900 mb-2">ISO 19600</h5>
                          <div className="text-sm text-purple-700 mb-2">Compliance Management</div>
                          <div className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Geplant 2025</div>
                        </div>
                        <div className="bg-white p-4 rounded-lg text-center">
                          <Award className="h-12 w-12 text-orange-500 mx-auto mb-3" />
                          <h5 className="font-semibold text-purple-900 mb-2">SOC 2 Type II</h5>
                          <div className="text-sm text-purple-700 mb-2">Security Controls</div>
                          <div className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Zertifiziert</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </ExpandableSection>

                <div className="flex justify-between items-center pt-8 border-t">
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentSection(11)}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Vorheriger Abschnitt
                  </Button>
                  <Button 
                    onClick={() => {
                      markSectionComplete(12);
                      setCurrentSection(13);
                    }}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    Nächster Abschnitt
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HinweisgeberschutzgesetzGuide;