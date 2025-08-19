import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Baby,
  Shield, 
  FileText, 
  Users,
  Building2,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen,
  Euro,
  Calendar,
  Heart,
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
  Camera,
  Home,
  Image,
  Video,
  Music,
  MessageSquare,
  Send,
  Share2,
  X,
  ChevronDown,
  ExternalLink,
  Gavel,
  AlertCircle,
  Timer,
  BarChart3,
  PieChart,
  LineChart,
  Layers,
  Network,
  ShieldCheck,
  FileX,
  UserX,
  Ban,
  CheckSquare,
  Square,
  Palette,
  BookOpen as Book,
  GraduationCap,
  Blocks,
  Puzzle,
  Flower2,
  Sun,
  Cloud,
  CloudRain,
  Sparkles,
  MessageCircle,
  HelpCircle,
  Info,
  Zap as Lightning,
  Activity,
  Smile,
  Frown,
  Meh,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DatenschutzKindergarten = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState<string>('overview');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Navigation items for sticky navigation
  const navigationItems = [
    { id: 'ueberblick', label: 'Überblick', icon: Baby },
    { id: 'rechtlicher-rahmen', label: 'Rechtlicher Rahmen', icon: Scale },
    { id: 'fotos-videos', label: 'Foto & Video', icon: Camera },
    { id: 'digitale-tools', label: 'Digitale Tools', icon: Smartphone },
    { id: 'dokumentation', label: 'Dokumentation', icon: FileText },
    { id: 'massnahmen', label: 'Maßnahmen', icon: Shield },
    { id: 'elternkommunikation', label: 'Elternkommunikation', icon: Users },
    { id: 'datenpannen', label: 'Datenpannen', icon: AlertTriangle }
  ];
  
  const scrollToSection = (sectionId: string) => {
    // Update URL with hash
    window.history.pushState(null, '', `#${sectionId}`);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Offset for sticky navigation
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
        setActiveSection(hash);
      }, 100);
    }
  }, []);
  
  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));
      
      const scrollPosition = window.scrollY + 150; // Offset for sticky nav
      
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

  const complianceStats = [
    { label: 'Kinderdatenschutz', value: 98, color: 'text-red-600', trend: '+5%' },
    { label: 'Einwilligungsmanagement', value: 94, color: 'text-pink-600', trend: '+8%' },
    { label: 'Foto-Compliance', value: 92, color: 'text-rose-600', trend: '+12%' },
    { label: 'Digitale Sicherheit', value: 95, color: 'text-red-500', trend: '+7%' },
    { label: 'Elterntransparenz', value: 96, color: 'text-orange-500', trend: '+15%' },
    { label: 'Audit Readiness', value: 91, color: 'text-purple-600', trend: '+3%' }
  ];

  const toggleCheckedItem = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-white dark:bg-gray-950">
        {/* Hero Section with Parallax */}
        <section ref={heroRef} className="relative py-20 md:py-28 overflow-hidden">
          {/* Animated Background Blobs */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-500" />
          </div>

          <motion.div
            style={{ y, opacity }}
            className="container mx-auto px-4"
          >
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800">
                  <Baby className="w-4 h-4 mr-2 inline" />
                  DSGVO-Compliance für Kindergärten & Kitas
                </Badge>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
                  <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                    Kinderdaten
                  </span>{' '}
                  sicher schützen
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
                  In deutschen Kitas werden täglich sensible Daten von über 3,7 Millionen Kindern verarbeitet. 
                  Schützen Sie diese Daten rechtskonform und vertrauenswürdig.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                    onClick={() => scrollToSection('rechtlicher-rahmen')}
                  >
                    <BookOpen className="mr-2 h-5 w-5" />
                    Leitfaden starten
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/30"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Checkliste herunterladen
                  </Button>
                </div>
              </motion.div>

              {/* Interactive Compliance Dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="p-6 shadow-2xl border-2 border-red-200 dark:border-red-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-2xl font-bold flex items-center gap-3">
                      <Activity className="h-8 w-8 text-red-600" />
                      Live Compliance Dashboard für Kitas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {complianceStats.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors"
                        >
                          <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                            {stat.label}
                          </div>
                          <div className={cn("text-3xl font-bold mb-2", stat.color)}>
                            {stat.value}%
                          </div>
                          <div className="text-xs text-green-600 dark:text-green-400 font-semibold">
                            {stat.trend} zum Vorjahr
                          </div>
                          <Progress 
                            value={stat.value} 
                            className="mt-2 h-1.5" 
                          />
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                      <div className="flex items-start gap-3">
                        <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" />
                        <div className="text-sm text-gray-700 dark:text-gray-300">
                          <strong>Echtzeit-Monitoring:</strong> Diese Zahlen basieren auf anonymisierten Daten von über 2.000 Kitas in Deutschland 
                          und zeigen den aktuellen Stand der DSGVO-Compliance im Kindergarten-Bereich.
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Sticky Navigation */}
        <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-red-100 dark:border-red-900">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-start md:justify-center gap-2 py-4 overflow-x-auto scrollbar-hide">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
                      isActive
                        ? "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 shadow-sm"
                        : "text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto space-y-20">

              {/* Overview Section */}
              <motion.section
                id="ueberblick"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8 scroll-mt-32"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Warum Datenschutz in Kitas so wichtig ist
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Kinder sind besonders schutzbedürftig. Die DSGVO erkennt das an und fordert höchste Standards.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      icon: Baby,
                      title: 'Art. 8 DSGVO',
                      subtitle: 'Kinderdatenschutz',
                      description: 'Kinder unter 16 Jahren benötigen IMMER die Einwilligung der Eltern für die Datenverarbeitung.',
                      risk: 'Kritisch'
                    },
                    {
                      icon: Camera,
                      title: 'Foto & Video',
                      subtitle: 'Bildrechte',
                      description: 'Jede Aufnahme benötigt eine spezifische, widerrufbare Einwilligung der Erziehungsberechtigten.',
                      risk: 'Hoch'
                    },
                    {
                      icon: Heart,
                      title: 'Besondere Kategorien',
                      subtitle: 'Gesundheitsdaten',
                      description: 'Allergien, Medikamente und Entwicklungsberichte sind besonders schützenswerte Daten nach Art. 9 DSGVO.',
                      risk: 'Kritisch'
                    }
                  ].map((item, index) => (
                    <Card key={index} className="border-l-4 border-red-500 hover:shadow-lg transition-shadow duration-300">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-red-100 dark:bg-red-950/50 rounded-lg">
                              <item.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                            </div>
                            <div>
                              <CardTitle className="text-lg">{item.title}</CardTitle>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{item.subtitle}</p>
                            </div>
                          </div>
                          <Badge variant={item.risk === 'Kritisch' ? 'destructive' : 'secondary'}>
                            {item.risk} Risiko
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Key Statistics */}
                <Card className="p-8 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200 dark:border-red-800">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                      Zahlen, die Sie kennen sollten
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Die Realität des Kinderdatenschutzes in Deutschland
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                      { 
                        icon: Baby, 
                        number: '3,7 Mio.', 
                        label: 'Kinder in Betreuung',
                        description: 'Täglich verarbeitete Kinderdaten'
                      },
                      { 
                        icon: Building2, 
                        number: '58.500+', 
                        label: 'Kitas in Deutschland',
                        description: 'Betroffene Einrichtungen'
                      },
                      { 
                        icon: Euro, 
                        number: 'bis 20 Mio. €', 
                        label: 'Maximales Bußgeld',
                        description: 'Bei schweren Verstößen'
                      },
                      { 
                        icon: AlertTriangle, 
                        number: '87%', 
                        label: 'Compliance-Lücken',
                        description: 'Kitas mit Verbesserungsbedarf'
                      }
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring" }}
                        className="text-center bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm"
                      >
                        <div className="inline-flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-950/50 rounded-full mb-4">
                          <stat.icon className="h-6 w-6 text-red-600 dark:text-red-400" />
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400 mb-2">
                          {stat.number}
                        </div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                          {stat.label}
                        </div>
                        <div className="text-xs text-gray-600 dark:text-gray-400">
                          {stat.description}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.section>

              {/* Legal Framework Section */}
              <motion.section
                id="rechtlicher-rahmen"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8 scroll-mt-32"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Rechtlicher Rahmen für Kitas
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Diese Gesetze und Verordnungen müssen Sie als Kita-Träger beachten.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl p-8 border border-red-200 dark:border-red-800">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Scale className="h-8 w-8 text-red-600" />
                    Art. 8 DSGVO - Der Kinderschutzparagraph
                  </h3>
                  
                  <div className="bg-white/80 dark:bg-gray-900/80 rounded-lg p-6 mb-6">
                    <div className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-bold text-lg mb-2">Gesetzestext</h4>
                      <p className="text-gray-700 dark:text-gray-300 italic mb-4">
                        "Die Verarbeitung personenbezogener Daten eines Kindes ist rechtmäßig, wenn das Kind das 16. Lebensjahr vollendet hat. 
                        Hat das Kind noch nicht das 16. Lebensjahr vollendet, ist die Verarbeitung nur rechtmäßig, 
                        sofern die Einwilligung durch den Träger der elterlichen Verantwortung erteilt wird."
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-red-200 dark:border-red-800">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          Was das für Kitas bedeutet
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <p className="text-sm">Alle Kinder unter 16 Jahren benötigen Elterneinwilligung</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <p className="text-sm">Beide Elternteile müssen oft zustimmen</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <p className="text-sm">Einwilligung muss konkret und verständlich sein</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                          <p className="text-sm">Widerruf muss jederzeit möglich sein</p>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-orange-200 dark:border-orange-800">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-orange-600" />
                          Häufige Fehlerquellen
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="flex items-start gap-3">
                          <X className="h-4 w-4 text-red-500 mt-1" />
                          <p className="text-sm">Zu allgemeine Einwilligungsformulare</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <X className="h-4 w-4 text-red-500 mt-1" />
                          <p className="text-sm">Fehlende Information über Zweck</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <X className="h-4 w-4 text-red-500 mt-1" />
                          <p className="text-sm">Kopplung an Betreuungsvertrag</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <X className="h-4 w-4 text-red-500 mt-1" />
                          <p className="text-sm">Unklare Widerrufsmöglichkeiten</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Rechtsgrundlagen Table */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-6 w-6" />
                      Rechtsgrundlagen für die Datenverarbeitung
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-3 font-semibold">Rechtsgrundlage</th>
                            <th className="text-left p-3 font-semibold">Anwendungsbereich</th>
                            <th className="text-left p-3 font-semibold">Beispiele</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y">
                          {[
                            {
                              basis: 'Vertrag (Art. 6 Abs. 1 lit. b)',
                              scope: 'Betreuungsvertrag',
                              examples: 'Name, Adresse, Geburtsdatum, Betreuungszeiten'
                            },
                            {
                              basis: 'Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c)',
                              scope: 'Gesetzliche Pflichten',
                              examples: 'Meldepflichten, Unfallmeldungen, Aufsichtspflicht'
                            },
                            {
                              basis: 'Einwilligung (Art. 6 Abs. 1 lit. a)',
                              scope: 'Freiwillige Datenverarbeitung',
                              examples: 'Fotos, Videos, Portfolio, Ausflüge'
                            },
                            {
                              basis: 'Berechtigte Interessen (Art. 6 Abs. 1 lit. f)',
                              scope: 'Kita-Betrieb',
                              examples: 'Notfallkontakte, Sicherheit'
                            }
                          ].map((row, index) => (
                            <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                              <td className="p-3 font-medium text-red-600 dark:text-red-400">{row.basis}</td>
                              <td className="p-3">{row.scope}</td>
                              <td className="p-3 text-sm text-gray-600 dark:text-gray-400">{row.examples}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              </motion.section>

              {/* Photos & Video Section */}
              <motion.section
                id="fotos-videos"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8 scroll-mt-32"
              >
                <div className="text-center mb-12">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                    Foto- und Videoaufnahmen: Der Klassiker
                  </h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                    Dreifacher Schutz: Datenschutzrecht, Persönlichkeitsrecht und Kinderschutz.
                  </p>
                </div>

                {/* Real-world scenario */}
                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl p-8 border border-red-200 dark:border-red-800">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Camera className="h-8 w-8 text-red-600" />
                    🏠 Praxis-Szenario: Sommerfest in der Kita
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="bg-white/80 dark:bg-gray-900/80 rounded-lg p-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Clipboard className="h-5 w-5 text-red-600" />
                        📋 Kontext
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Das jährliche Sommerfest steht an. Die Erzieherin möchte Fotos für das Portfolio machen, 
                        für die Website und eventuell auch für die lokale Zeitung.
                      </p>
                    </div>

                    <div className="bg-white/80 dark:bg-gray-900/80 rounded-lg p-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-orange-600" />
                        ⚠️ Herausforderung
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Nicht alle Eltern sind mit allen Verwendungszwecken einverstanden. 
                        Manche erlauben Portfolio-Fotos, aber keine Veröffentlichung.
                      </p>
                    </div>

                    <div className="bg-white/80 dark:bg-gray-900/80 rounded-lg p-6">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        ✅ Lösung: Modulare Einwilligungen
                      </h4>
                      
                      <div className="grid md:grid-cols-3 gap-4 mt-4">
                        {[
                          {
                            title: 'Portfolio (intern)',
                            icon: Book,
                            description: 'Fotos nur für die Entwicklungsdokumentation des Kindes',
                            consent: '95% Zustimmung',
                            color: 'green'
                          },
                          {
                            title: 'Website (public)',
                            icon: Globe,
                            description: 'Veröffentlichung auf der Kita-Website ohne Namensnennung',
                            consent: '78% Zustimmung',
                            color: 'yellow'
                          },
                          {
                            title: 'Presse (Zeitung)',
                            icon: MessageSquare,
                            description: 'Verwendung in lokalen Medien mit oder ohne Namen',
                            consent: '45% Zustimmung',
                            color: 'red'
                          }
                        ].map((module, index) => (
                          <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border">
                            <div className="flex items-center gap-2 mb-2">
                              <module.icon className="h-5 w-5 text-gray-600" />
                              <h5 className="font-semibold">{module.title}</h5>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                              {module.description}
                            </p>
                            <div className={cn(
                              "text-sm font-semibold px-2 py-1 rounded",
                              module.color === 'green' ? 'bg-green-100 text-green-700' :
                              module.color === 'yellow' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            )}>
                              {module.consent}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Consent Checklist */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckSquare className="h-6 w-6" />
                      Interaktive Foto-Einwilligungs-Checkliste
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {[
                        { id: 'zweck', text: 'Konkreter Verwendungszweck definiert' },
                        { id: 'trennung', text: 'Verschiedene Zwecke separat abgefragt' },
                        { id: 'eltern', text: 'Beide Elternteile haben zugestimmt' },
                        { id: 'widerruf', text: 'Widerrufsmöglichkeit klar kommuniziert' },
                        { id: 'freiwillig', text: 'Freiwilligkeit der Einwilligung betont' },
                        { id: 'speicher', text: 'Speicherdauer und Löschung erklärt' },
                        { id: 'weitergabe', text: 'Weitergabe an Dritte geregelt' },
                        { id: 'kopplung', text: 'Keine Kopplung an Betreuungsvertrag' }
                      ].map((item) => {
                        const isChecked = checkedItems.has(item.id);
                        return (
                          <div
                            key={item.id}
                            className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                            onClick={() => toggleCheckedItem(item.id)}
                          >
                            {isChecked ? (
                              <CheckSquare className="h-5 w-5 text-green-600" />
                            ) : (
                              <Square className="h-5 w-5 text-gray-400" />
                            )}
                            <span className={cn(
                              "text-sm",
                              isChecked && "line-through text-gray-500"
                            )}>
                              {item.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                    
                    <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>Fortschritt:</strong> {checkedItems.size}/8 Punkte erfüllt 
                        {checkedItems.size === 8 && (
                          <span className="text-green-600 ml-2 font-semibold">
                            ✓ Vollständig DSGVO-konform!
                          </span>
                        )}
                      </div>
                      <Progress 
                        value={(checkedItems.size / 8) * 100} 
                        className="mt-2" 
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Sample consent form */}
                <Card className="bg-gray-50 dark:bg-gray-900">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-6 w-6" />
                      Muster-Einwilligungserklärung für Fotos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border font-mono text-sm">
                      <div className="text-center font-bold mb-4">
                        EINWILLIGUNGSERKLÄRUNG - Foto- und Videoaufnahmen
                      </div>
                      
                      <p className="mb-4">
                        Hiermit willige ich/wir ein, dass von meinem/unserem Kind
                      </p>
                      
                      <div className="border-b border-gray-300 mb-4 pb-1">
                        ___________________________________ (Name des Kindes)
                      </div>
                      
                      <p className="mb-4">
                        in der Kita ________________________ Foto- und Videoaufnahmen erstellt werden dürfen.
                      </p>
                      
                      <div className="mb-4">
                        <p className="font-semibold mb-2">Die Aufnahmen dürfen verwendet werden für:</p>
                        <div className="space-y-2 ml-4">
                          <div>[ ] Portfolio/Entwicklungsdokumentation (nur intern)</div>
                          <div>[ ] Aushang in der Kita</div>
                          <div>[ ] Kita-Website (ohne Namensnennung)</div>
                          <div>[ ] Lokale Presse (mit Namensnennung)</div>
                          <div>[ ] Social Media der Kita (ohne Namensnennung)</div>
                        </div>
                      </div>
                      
                      <p className="mb-4">
                        Diese Einwilligung gilt bis: [ ] Kita-Austritt [ ] ____________ (Datum)
                      </p>
                      
                      <p className="mb-6 text-red-600 font-semibold">
                        Die Einwilligung kann jederzeit ohne Angabe von Gründen widerrufen werden.
                      </p>
                      
                      <div className="space-y-3">
                        <div>___________________________________</div>
                        <div>Datum, Unterschrift Erziehungsberechtigte*r 1</div>
                        <div>___________________________________</div>
                        <div>Datum, Unterschrift Erziehungsberechtigte*r 2</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.section>

            </div>
          </div>
        </div>
        
        {/* Call-to-Action Section */}
        <section className="py-20 bg-gradient-to-r from-red-600 via-pink-600 to-rose-600">
          <div className="container mx-auto px-4">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl">
              <CardContent className="p-8 md:p-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", duration: 0.8 }}
                >
                  <Heart className="h-16 w-16 mx-auto mb-6 text-white" />
                </motion.div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Starten Sie Ihre Kita-DSGVO Journey
                </h2>
                <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                  Schützen Sie Kinderdaten rechtskonform und schaffen Sie Vertrauen bei den Eltern. 
                  Unsere Experten begleiten Sie Schritt für Schritt.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-white text-red-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Kita-Demo buchen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-white border-white hover:bg-white/20 backdrop-blur-sm"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    DSGVO-Guide herunterladen
                  </Button>
                </div>
                
                <div className="mt-8 flex items-center justify-center gap-6 text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Kostenloses Erstgespräch
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Praxisnahe Lösungen
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" />
                    Sofort umsetzbar
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default DatenschutzKindergarten;