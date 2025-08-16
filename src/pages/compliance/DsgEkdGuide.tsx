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
  Network,
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
  Menu,
  Church
} from 'lucide-react';
import SEOHead from '../../components/SEOHead';

// Section definitions for DSG-EKD compliance guide
const sections = [
  { id: 'ueberblick', title: 'Überblick', readTime: '10 Min' },
  { id: 'geltungsbereich', title: 'Geltungsbereich', readTime: '12 Min' },
  { id: 'kirchliche-besonderheiten', title: 'Kirchliche Besonderheiten', readTime: '15 Min' },
  { id: 'seelsorgegeheimnis', title: 'Seelsorgegeheimnis', readTime: '18 Min' },
  { id: 'mitgliederdaten', title: 'Mitgliederdaten-Management', readTime: '25 Min' },
  { id: 'kirchenbuchfuehrung', title: 'Kirchenbuchführung', readTime: '22 Min' },
  { id: 'ehrenamtlichen-datenschutz', title: 'Ehrenamtlichen-Datenschutz', readTime: '20 Min' },
  { id: 'gemeindekommunikation', title: 'Gemeindekommunikation', readTime: '24 Min' },
  { id: 'datenschutzbeauftragte', title: 'Kirchliche Datenschutzbeauftragte', readTime: '20 Min' },
  { id: 'betroffenenrechte', title: 'Betroffenenrechte in der Kirche', readTime: '26 Min' },
  { id: 'technische-massnahmen', title: 'Technische und Organisatorische Maßnahmen', readTime: '22 Min' },
  { id: 'schulung-sensibilisierung', title: 'Schulung & Sensibilisierung', readTime: '18 Min' },
  { id: 'audit-bewertung', title: 'Audit & Compliance-Bewertung', readTime: '24 Min' },
  { id: 'implementierung', title: 'Implementierungsroadmap', readTime: '35 Min' },
  { id: 'compliance-ueberpruefung', title: 'Kontinuierliche Compliance-Überprüfung', readTime: '22 Min' }
];

export default function DsgEkdGuide() {
  const [activeSection, setActiveSection] = useState('ueberblick');
  const [completedTasks, setCompletedTasks] = useState<string[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  // Calculate total reading time
  const totalReadTime = sections.reduce((total, section) => {
    const time = parseInt(section.readTime.replace(' Min', ''));
    return total + time;
  }, 0);

  // Calculate reading progress based on active section
  useEffect(() => {
    const currentIndex = sections.findIndex(s => s.id === activeSection);
    const progress = ((currentIndex + 1) / sections.length) * 100;
    setReadingProgress(progress);
  }, [activeSection]);

  // Scroll spy effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const toggleTask = (taskId: string) => {
    setCompletedTasks(prev => 
      prev.includes(taskId) 
        ? prev.filter(id => id !== taskId)
        : [...prev, taskId]
    );
  };

  const TaskCard = ({ title, description, id, difficulty = 'medium' }: {
    title: string;
    description: string;
    id: string;
    difficulty?: 'easy' | 'medium' | 'hard';
  }) => {
    const isCompleted = completedTasks.includes(id);
    const difficultyColors = {
      easy: 'bg-green-100 text-green-800',
      medium: 'bg-yellow-100 text-yellow-800',
      hard: 'bg-red-100 text-red-800'
    };

    return (
      <Card className={`mb-4 transition-all ${isCompleted ? 'bg-green-50 border-green-200' : 'hover:shadow-md'}`}>
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <button 
              onClick={() => toggleTask(id)}
              className={`mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${
                isCompleted 
                  ? 'bg-green-500 border-green-500 text-white' 
                  : 'border-gray-300 hover:border-purple-500'
              }`}
            >
              {isCompleted && <Check className="w-4 h-4" />}
            </button>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <h4 className={`font-medium ${isCompleted ? 'line-through text-gray-500' : ''}`}>
                  {title}
                </h4>
                <Badge className={difficultyColors[difficulty]} variant="secondary">
                  {difficulty === 'easy' ? 'Einfach' : difficulty === 'medium' ? 'Mittel' : 'Schwer'}
                </Badge>
              </div>
              <p className={`text-sm text-gray-600 ${isCompleted ? 'line-through' : ''}`}>
                {description}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <>
      <SEOHead 
        title="DSG-EKD Implementierungsleitfaden"
        description="Vollständiger Leitfaden zur Implementierung des Datenschutzgesetzes der Evangelischen Kirche in Deutschland (DSG-EKD). Schritt-für-Schritt Anleitung für kirchliche Einrichtungen."
        keywords="DSG-EKD, Datenschutz, Evangelische Kirche, Kirchlicher Datenschutz, Seelsorgegeheimnis, Mitgliederdaten, Gemeindedaten"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "DSG-EKD Implementierungsleitfaden",
          "description": "Vollständiger Leitfaden zur Implementierung des Datenschutzgesetzes der Evangelischen Kirche in Deutschland",
          "author": {
            "@type": "Organization",
            "name": "MarsJonas"
          },
          "publisher": {
            "@type": "Organization",
            "name": "MarsJonas"
          },
          "datePublished": "2024-01-26",
          "dateModified": "2024-01-26"
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        {/* Progress bar */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-purple-500 z-50"
          style={{ scaleX }}
        />

        {/* Mobile menu button */}
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="lg:hidden fixed bottom-6 right-6 z-50 bg-purple-600 text-white p-3 rounded-full shadow-lg"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Sidebar */}
        <div className={`fixed left-0 top-0 h-full bg-white shadow-xl z-40 w-80 transform transition-transform lg:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}>
          <div className="p-6 border-b">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Church className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h2 className="font-bold text-lg">DSG-EKD Guide</h2>
                <p className="text-sm text-gray-600">Kirchlicher Datenschutz</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Clock className="w-4 h-4" />
              <span>{totalReadTime} Min Lesezeit</span>
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between text-sm text-gray-600 mb-1">
                <span>Fortschritt</span>
                <span>{Math.round(readingProgress)}%</span>
              </div>
              <Progress value={readingProgress} className="h-2" />
            </div>
          </div>

          <nav className="p-6 overflow-y-auto h-full pb-32">
            <ul className="space-y-2">
              {sections.map((section, index) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    onClick={() => setIsSidebarOpen(false)}
                    className={`flex items-center justify-between p-3 rounded-lg transition-colors ${
                      activeSection === section.id
                        ? 'bg-purple-100 text-purple-900'
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    <div>
                      <div className="font-medium">{section.title}</div>
                      <div className="text-sm text-gray-600">{section.readTime}</div>
                    </div>
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm ${
                      activeSection === section.id
                        ? 'border-purple-500 bg-purple-500 text-white'
                        : 'border-gray-300'
                    }`}>
                      {index + 1}
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Main content */}
        <div className="lg:ml-80 min-h-screen">
          <div className="max-w-4xl mx-auto px-6 py-12">
            
            {/* Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-100 rounded-xl">
                  <Church className="w-8 h-8 text-purple-600" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white mb-2">
                    DSG-EKD Implementierungsleitfaden
                  </h1>
                  <p className="text-xl text-purple-200">
                    Datenschutzgesetz der Evangelischen Kirche in Deutschland
                  </p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mb-6">
                <Badge className="bg-purple-100 text-purple-800">
                  <Church className="w-4 h-4 mr-2" />
                  Kirchlicher Datenschutz
                </Badge>
                <Badge className="bg-blue-100 text-blue-800">
                  <Clock className="w-4 h-4 mr-2" />
                  {totalReadTime} Min Lesezeit
                </Badge>
                <Badge className="bg-green-100 text-green-800">
                  <Target className="w-4 h-4 mr-2" />
                  15 Module
                </Badge>
              </div>
              
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <p className="text-white/90 leading-relaxed">
                    Dieser umfassende Leitfaden führt Sie durch alle Aspekte der DSG-EKD-Implementierung 
                    in kirchlichen Einrichtungen. Von den Grundlagen des Seelsorgegeheimnisses bis hin zu 
                    technischen Schutzmaßnahmen - hier finden Sie praxisnahe Anleitungen für die Umsetzung 
                    kirchlicher Datenschutzbestimmungen.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Overview Section */}
            <section id="ueberblick" ref={el => sectionRefs.current['ueberblick'] = el} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-purple-400" />
                  Überblick
                </h2>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-purple-600" />
                        Was ist DSG-EKD?
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Das Datenschutzgesetz der Evangelischen Kirche in Deutschland (DSG-EKD) ist das 
                        zentrale Datenschutzgesetz für evangelische Kirchengemeinden und kirchliche 
                        Einrichtungen in Deutschland.
                      </p>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Kirchliche Autonomie im Datenschutz
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Besonderer Schutz des Seelsorgegeheimnisses
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          Angepasst an kirchliche Strukturen
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-purple-600" />
                        Rechtliche Grundlage
                      </h3>
                      <p className="text-gray-600 mb-4">
                        DSG-EKD basiert auf dem kirchlichen Selbstbestimmungsrecht nach Art. 140 GG 
                        i.V.m. Art. 137 Abs. 3 WRV und orientiert sich an der DSGVO.
                      </p>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <p className="text-sm text-purple-800">
                          <strong>Inkrafttreten:</strong> 24. Mai 2018<br />
                          <strong>Geltungsbereich:</strong> Alle evangelischen Kirchengemeinden und 
                          kirchlichen Einrichtungen in Deutschland
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Church className="w-5 h-5 text-purple-600" />
                      Kirchliche Besonderheiten im Datenschutz
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <Lock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                        <h4 className="font-medium mb-2">Seelsorgegeheimnis</h4>
                        <p className="text-sm text-gray-600">
                          Absoluter Schutz seelsorgerlicher Kommunikation
                        </p>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                        <h4 className="font-medium mb-2">Mitgliederdaten</h4>
                        <p className="text-sm text-gray-600">
                          Besondere Regelungen für Kirchenmitgliedschaftsdaten
                        </p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <Heart className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <h4 className="font-medium mb-2">Ehrenamtliche</h4>
                        <p className="text-sm text-gray-600">
                          Spezielle Bestimmungen für ehrenamtliche Mitarbeiter
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <TaskCard
                  id="overview-assessment"
                  title="Erste Bestandsaufnahme durchführen"
                  description="Inventarisieren Sie alle Datenverarbeitungen in Ihrer Kirchengemeinde und identifizieren Sie kritische Bereiche."
                  difficulty="easy"
                />
              </motion.div>
            </section>

            {/* Scope Section */}
            <section id="geltungsbereich" ref={el => sectionRefs.current['geltungsbereich'] = el} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Globe className="w-8 h-8 text-purple-400" />
                  Geltungsbereich
                </h2>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Anwendungsbereich des DSG-EKD</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-green-600">✓ Erfasste Einrichtungen</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Evangelische Kirchengemeinden</li>
                          <li>• Kirchenkreise und Landeskirchen</li>
                          <li>• Diakonische Einrichtungen</li>
                          <li>• Kirchliche Stiftungen</li>
                          <li>• Evangelische Bildungseinrichtungen</li>
                          <li>• Kirchliche Krankenhäuser</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-red-600">✗ Nicht erfasste Bereiche</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Rein private Datenverarbeitung</li>
                          <li>• Staatliche Einrichtungen</li>
                          <li>• Nicht-kirchliche Organisationen</li>
                          <li>• Kommerzielle Unternehmen ohne Kirchenbezug</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Database className="w-5 h-5 text-purple-600" />
                        Erfasste Datenarten
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                          <Church className="w-5 h-5 text-purple-600" />
                          <div>
                            <p className="font-medium">Kirchliche Amtshandlungen</p>
                            <p className="text-sm text-gray-600">Taufe, Konfirmation, Trauung, Bestattung</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                          <Users className="w-5 h-5 text-blue-600" />
                          <div>
                            <p className="font-medium">Mitgliederdaten</p>
                            <p className="text-sm text-gray-600">Kontaktdaten, Kirchensteuerdaten</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                          <Heart className="w-5 h-5 text-green-600" />
                          <div>
                            <p className="font-medium">Seelsorgedaten</p>
                            <p className="text-sm text-gray-600">Besonders geschützte Daten</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Building className="w-5 h-5 text-purple-600" />
                        Organisationsstrukturen
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium mb-2">Gemeinde-Ebene</h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Direkte Anwendung des DSG-EKD auf alle Datenverarbeitungen
                          </p>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-gray-600">
                              Kirchenvorstand, Pfarramt, Gemeindehaus
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium mb-2">Übergeordnete Ebenen</h4>
                          <p className="text-sm text-gray-600 mb-2">
                            Kirchenkreise und Landeskirchen als Aufsichtsbehörden
                          </p>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="text-xs text-gray-600">
                              Superintendentur, Landeskirchenamt
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <TaskCard
                  id="scope-mapping"
                  title="Geltungsbereich definieren"
                  description="Erstellen Sie eine Übersicht aller von DSG-EKD erfassten Bereiche Ihrer Einrichtung."
                  difficulty="easy"
                />
              </motion.div>
            </section>

            {/* Church Specifics Section */}
            <section id="kirchliche-besonderheiten" ref={el => sectionRefs.current['kirchliche-besonderheiten'] = el} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Church className="w-8 h-8 text-purple-400" />
                  Kirchliche Besonderheiten
                </h2>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Unterschiede zur DSGVO</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b">
                            <th className="text-left p-3">Bereich</th>
                            <th className="text-left p-3">DSGVO</th>
                            <th className="text-left p-3">DSG-EKD</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="p-3 font-medium">Aufsichtsbehörde</td>
                            <td className="p-3">Staatliche Datenschutzbehörden</td>
                            <td className="p-3">Kirchliche Datenschutzbehörden</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3 font-medium">Besondere Kategorien</td>
                            <td className="p-3">Religiöse Überzeugungen geschützt</td>
                            <td className="p-3">Erweiterte Regelungen für Kirchendaten</td>
                          </tr>
                          <tr className="border-b">
                            <td className="p-3 font-medium">Rechtsgrundlagen</td>
                            <td className="p-3">Art. 6 DSGVO</td>
                            <td className="p-3">§ 6 DSG-EKD (kirchenspezifisch)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-medium">Sanktionen</td>
                            <td className="p-3">Bis zu 20 Mio. EUR</td>
                            <td className="p-3">Kirchliche Disziplinarmaßnahmen</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Scale className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="font-bold">Kirchliche Autonomie</h3>
                      </div>
                      <p className="text-sm text-gray-600 text-center">
                        Kirchen haben das Recht der Selbstbestimmung in ihren Angelegenheiten, 
                        einschließlich des Datenschutzes.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Eye className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="font-bold">Kirchliche Aufsicht</h3>
                      </div>
                      <p className="text-sm text-gray-600 text-center">
                        Datenschutzaufsicht erfolgt durch kirchliche Behörden, 
                        nicht durch staatliche Stellen.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Gavel className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="font-bold">Spezielle Regelungen</h3>
                      </div>
                      <p className="text-sm text-gray-600 text-center">
                        Besondere Bestimmungen für kirchliche Tätigkeiten 
                        und Seelsorge.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                <TaskCard
                  id="church-specifics-analysis"
                  title="Kirchliche Besonderheiten identifizieren"
                  description="Analysieren Sie, welche kirchenspezifischen Datenschutzanforderungen in Ihrer Einrichtung relevant sind."
                  difficulty="medium"
                />
              </motion.div>
            </section>

            {/* Member Data Management Section */}
            <section id="mitgliederdaten" ref={el => sectionRefs.current['mitgliederdaten'] = el} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Users className="w-8 h-8 text-purple-400" />
                  Mitgliederdaten-Management
                </h2>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Kategorien von Mitgliederdaten</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-blue-600">Grunddaten der Mitgliedschaft</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Name, Vorname, Geburtsdatum</li>
                          <li>• Anschrift und Kontaktdaten</li>
                          <li>• Datum der Aufnahme/Taufe</li>
                          <li>• Konfession und Kirchenzugehörigkeit</li>
                          <li>• Familienstand und Beziehungen</li>
                          <li>• Kirchensteuerpflicht</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-green-600">Erweiterte Mitgliederdaten</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Ehrenamtliche Tätigkeiten</li>
                          <li>• Spendenbeiträge und -historie</li>
                          <li>• Teilnahme an Gemeindeveranstaltungen</li>
                          <li>• Besondere Bedürfnisse oder Anliegen</li>
                          <li>• Kontakte zu Seelsorgern</li>
                          <li>• Kirchliche Ämter und Funktionen</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Database className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="font-bold">Datenerfassung</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">Rechtsgrundlage</p>
                          <p className="text-xs text-blue-700">§ 6 Abs. 1 lit. b DSG-EKD (Mitgliedschaftsverhältnis)</p>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">Zweckbindung</p>
                          <p className="text-xs text-gray-700">Verwaltung der Kirchenmitgliedschaft und Seelsorge</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Shield className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="font-bold">Datenschutz</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">Zugriffsbeschränkung</p>
                          <p className="text-xs text-green-700">Nur berechtigte Mitarbeiter der Gemeinde</p>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">Aufbewahrung</p>
                          <p className="text-xs text-yellow-700">Solange Mitgliedschaft besteht + 10 Jahre</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <div className="text-center mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                          <Eye className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="font-bold">Transparenz</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">Information</p>
                          <p className="text-xs text-purple-700">Mitglieder über Datenverwendung informieren</p>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">Betroffenenrechte</p>
                          <p className="text-xs text-orange-700">Auskunft, Berichtigung, Löschung</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Praktische Umsetzung im Mitgliederdaten-Management</h3>
                    
                    <Tabs defaultValue="erfassung" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="erfassung">Datenerfassung</TabsTrigger>
                        <TabsTrigger value="verwaltung">Verwaltung</TabsTrigger>
                        <TabsTrigger value="weitergabe">Weitergabe</TabsTrigger>
                        <TabsTrigger value="loeschung">Löschung</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="erfassung" className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3">Datenerfassung bei Neuaufnahmen</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Aufnahmeantrag mit Datenschutzhinweisen</li>
                            <li>• Einverständniserklärung für erweiterte Datennutzung</li>
                            <li>• Dokumentation der Rechtsgrundlage</li>
                            <li>• Aufklärung über Betroffenenrechte</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3">Datenaktualisierung</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Regelmäßige Überprüfung der Aktualität</li>
                            <li>• Melderegisterabgleich (soweit zulässig)</li>
                            <li>• Eigenverantwortliche Meldung von Änderungen</li>
                            <li>• Dokumentation aller Änderungen</li>
                          </ul>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="verwaltung" className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3">Interne Datenverwaltung</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Rollenbasierte Zugriffskontrolle</li>
                            <li>• Protokollierung aller Datenzugriffe</li>
                            <li>• Regelmäßige Datensicherung</li>
                            <li>• Verschlüsselung sensitiver Daten</li>
                          </ul>
                        </div>
                        <div className="bg-yellow-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3">Qualitätssicherung</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Plausibilitätsprüfungen</li>
                            <li>• Duplicate-Erkennung</li>
                            <li>• Konsistenzprüfungen</li>
                            <li>• Datenbereinigung</li>
                          </ul>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="weitergabe" className="space-y-4">
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3">Zulässige Datenweitergabe</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• An übergeordnete kirchliche Stellen</li>
                            <li>• Für statistische Zwecke (anonymisiert)</li>
                            <li>• Bei gesetzlichen Verpflichtungen</li>
                            <li>• Mit ausdrücklicher Einwilligung</li>
                          </ul>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3">Unzulässige Weitergabe</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• An Dritte ohne Rechtsgrundlage</li>
                            <li>• Für kommerzielle Zwecke</li>
                            <li>• Ohne Wissen der Betroffenen</li>
                            <li>• Über den Zweck hinausgehend</li>
                          </ul>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="loeschung" className="space-y-4">
                        <div className="bg-purple-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3">Löschfristen</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Grunddaten: 10 Jahre nach Austritt</li>
                            <li>• Spendendaten: Nach steuerrechtlichen Vorgaben</li>
                            <li>• Kommunikationsdaten: 2 Jahre</li>
                            <li>• Veranstaltungsdaten: 1 Jahr</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3">Löschverfahren</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Automatisierte Löschroutinen</li>
                            <li>• Manuelle Überprüfung vor Löschung</li>
                            <li>• Sichere Datenvernichtung</li>
                            <li>• Dokumentation der Löschung</li>
                          </ul>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <TaskCard
                  id="member-data-inventory"
                  title="Mitgliederdaten-Inventar erstellen"
                  description="Erstellen Sie eine vollständige Übersicht aller in Ihrer Gemeinde verarbeiteten Mitgliederdaten inkl. Rechtsgrundlagen und Löschfristen."
                  difficulty="medium"
                />

                <TaskCard
                  id="member-data-processes"
                  title="Datenschutzprozesse für Mitgliederverwaltung definieren"
                  description="Entwickeln Sie standardisierte Prozesse für Datenerfassung, -aktualisierung, -weitergabe und -löschung in der Mitgliederverwaltung."
                  difficulty="hard"
                />
              </motion.div>
            </section>

            {/* Church Records Section */}
            <section id="kirchenbuchfuehrung" ref={el => sectionRefs.current['kirchenbuchfuehrung'] = el} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <FileText className="w-8 h-8 text-purple-400" />
                  Kirchenbuchführung
                </h2>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Arten kirchlicher Aufzeichnungen</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-blue-600">Traditionelle Kirchenbücher</h4>
                        <div className="space-y-3">
                          <div className="bg-blue-50 p-3 rounded-lg">
                            <p className="font-medium text-sm">Taufbuch</p>
                            <p className="text-xs text-blue-700">Aufzeichnung aller Taufen mit Datum, Namen, Eltern, Taufpaten</p>
                          </div>
                          <div className="bg-green-50 p-3 rounded-lg">
                            <p className="font-medium text-sm">Traubuch</p>
                            <p className="text-xs text-green-700">Dokumentation kirchlicher Trauungen inkl. Zeugen</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <p className="font-medium text-sm">Bestattungsbuch</p>
                            <p className="text-xs text-gray-700">Verzeichnis aller kirchlichen Bestattungen</p>
                          </div>
                          <div className="bg-purple-50 p-3 rounded-lg">
                            <p className="font-medium text-sm">Konfirmandenbuch</p>
                            <p className="text-xs text-purple-700">Aufzeichnungen zur Konfirmation und Konfirmandenzeit</p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-orange-600">Moderne Dokumentationssysteme</h4>
                        <div className="space-y-3">
                          <div className="bg-orange-50 p-3 rounded-lg">
                            <p className="font-medium text-sm">Digitale Kirchenbücher</p>
                            <p className="text-xs text-orange-700">Elektronische Erfassung und Verwaltung kirchlicher Daten</p>
                          </div>
                          <div className="bg-yellow-50 p-3 rounded-lg">
                            <p className="font-medium text-sm">Mitgliederverwaltungssysteme</p>
                            <p className="text-xs text-yellow-700">Integrierte Software für Gemeindeverwaltung</p>
                          </div>
                          <div className="bg-red-50 p-3 rounded-lg">
                            <p className="font-medium text-sm">Archivierungssysteme</p>
                            <p className="text-xs text-red-700">Langzeitarchivierung wichtiger Dokumente</p>
                          </div>
                          <div className="bg-indigo-50 p-3 rounded-lg">
                            <p className="font-medium text-sm">Backup-Systeme</p>
                            <p className="text-xs text-indigo-700">Sichere Datenerhaltung für künftige Generationen</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-purple-600" />
                        Rechtliche Grundlagen
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">DSG-EKD Grundlage</p>
                          <p className="text-xs">§ 6 Abs. 1 lit. c - Erfüllung kirchlicher Aufgaben</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">Kirchenrecht</p>
                          <p className="text-xs">Verpflichtung zur ordnungsgemäßen Buchführung</p>
                        </div>
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">Historische Bedeutung</p>
                          <p className="text-xs">Kulturelle und genealogische Dokumentation</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-blue-600" />
                        Datenschutzanforderungen
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">Zugriffsbeschränkung</p>
                          <p className="text-xs">Nur autorisierte Personen</p>
                        </div>
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">Datenminimierung</p>
                          <p className="text-xs">Nur notwendige Angaben erfassen</p>
                        </div>
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">Archivierung</p>
                          <p className="text-xs">Dauerhafte, sichere Aufbewahrung</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Clock className="w-5 h-5 text-green-600" />
                        Aufbewahrungsfristen
                      </h3>
                      <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">Kirchenbücher</p>
                          <p className="text-xs">Dauerhaft (historischer Wert)</p>
                        </div>
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">Nebenregister</p>
                          <p className="text-xs">30 Jahre nach letztem Eintrag</p>
                        </div>
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <p className="text-sm font-medium mb-1">Arbeitskopien</p>
                          <p className="text-xs">Nach Zweckerfüllung löschen</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Digitalisierung der Kirchenbuchführung</h3>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-medium mb-3 text-green-600">Vorteile der Digitalisierung</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Bessere Lesbarkeit und Durchsuchbarkeit
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Schutz vor physischem Verlust
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Vereinfachte Datenauswertung
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Automatisierte Backup-Möglichkeiten
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Platzersparnis bei der Lagerung
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-orange-600">Herausforderungen beachten</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                            Technische Obsoleszenz verhindern
                          </li>
                          <li className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                            Datenschutz bei Digitalisierung beachten
                          </li>
                          <li className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                            Rechtssichere digitale Signaturen
                          </li>
                          <li className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                            Schulung der Mitarbeiter erforderlich
                          </li>
                          <li className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                            Hohe Anfangsinvestitionen
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Best Practices für digitale Kirchenbuchführung</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-sm">
                          <li>• Standardisierte Datenformate verwenden</li>
                          <li>• Regelmäßige Datensicherung auf verschiedene Medien</li>
                          <li>• Zugriffsrechte klar definieren und begrenzen</li>
                          <li>• Audit-Trail für alle Änderungen führen</li>
                        </ul>
                        <ul className="space-y-2 text-sm">
                          <li>• Originale parallel aufbewahren</li>
                          <li>• Verschlüsselung sensitiver Daten</li>
                          <li>• Regelmäßige Integritätsprüfungen</li>
                          <li>• Notfallplan für Systemausfälle</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <TaskCard
                  id="church-records-audit"
                  title="Kirchenbuch-Bestandsaufnahme durchführen"
                  description="Inventarisieren Sie alle kirchlichen Aufzeichnungen (analog und digital) und bewerten Sie den Datenschutz-Status."
                  difficulty="medium"
                />

                <TaskCard
                  id="digitization-strategy"
                  title="Digitalisierungsstrategie entwickeln"
                  description="Erstellen Sie einen Plan für die schrittweise Digitalisierung Ihrer Kirchenbücher unter Beachtung des Datenschutzes."
                  difficulty="hard"
                />
              </motion.div>
            </section>

            {/* Volunteer Data Protection Section */}
            <section id="ehrenamtlichen-datenschutz" ref={el => sectionRefs.current['ehrenamtlichen-datenschutz'] = el} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Heart className="w-8 h-8 text-purple-400" />
                  Ehrenamtlichen-Datenschutz
                </h2>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Besonderheiten beim Ehrenamtlichen-Datenschutz</h3>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                      <p className="text-blue-800 mb-2">
                        <strong>Wichtig:</strong> Ehrenamtliche Mitarbeiter haben oft Zugang zu sensiblen Gemeindedaten, 
                        ohne die gleiche Datenschutz-Ausbildung wie hauptamtliche Mitarbeiter zu haben.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-purple-600">Typische ehrenamtliche Rollen</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Kirchenvorstandsmitglieder</li>
                          <li>• Konfirmandenarbeit-Mitarbeiter</li>
                          <li>• Besuchsdienst-Teams</li>
                          <li>• Kinder- und Jugendgruppenleiter</li>
                          <li>• Chor- und Musikgruppenleiter</li>
                          <li>• Veranstaltungsorganisatoren</li>
                          <li>• Öffentlichkeitsarbeiter</li>
                          <li>• Kassierer und Schatzmeister</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-green-600">Datenschutz-Herausforderungen</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Verwendung privater Geräte und E-Mail-Adressen</li>
                          <li>• Ungeschützte Übertragung von Kontaktdaten</li>
                          <li>• Informelle Kommunikation über Gemeindemitglieder</li>
                          <li>• Unzureichende IT-Sicherheit im privaten Umfeld</li>
                          <li>• Fehlende Kenntnis über Betroffenenrechte</li>
                          <li>• Unklare Zuständigkeiten und Verantwortlichkeiten</li>
                          <li>• Schwierige Kontrolle von Datenzugriffen</li>
                          <li>• Hohe Fluktuation in ehrenamtlichen Positionen</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        Datenverarbeitung durch Ehrenamtliche
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Kontaktdaten-Management</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Teilnehmerlisten für Veranstaltungen</li>
                            <li>• Telefon- und E-Mail-Kontakte</li>
                            <li>• Notfallkontakte bei Kinder- und Jugendarbeit</li>
                            <li>• Anmeldedaten für Freizeiten</li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Dokumentation von Aktivitäten</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Foto- und Videoaufnahmen bei Veranstaltungen</li>
                            <li>• Teilnahmebescheinigungen und Zertifikate</li>
                            <li>• Feedback- und Evaluationsbögen</li>
                            <li>• Spendenaufstellungen und Belege</li>
                          </ul>
                        </div>
                        
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Kommunikation und Newsletter</h4>
                          <ul className="text-xs space-y-1">
                            <li>• E-Mail-Verteiler für Gruppen</li>
                            <li>• WhatsApp-Gruppen für Organisation</li>
                            <li>• Social Media-Beiträge mit Personenbezug</li>
                            <li>• Gemeindebrief-Beiträge</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Shield className="w-5 h-5 text-green-600" />
                        Schutzmaßnahmen implementieren
                      </h3>
                      
                      <div className="space-y-4">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Schulung und Sensibilisierung</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Regelmäßige Datenschutz-Workshops</li>
                            <li>• Einfache Leitfäden und Checklisten</li>
                            <li>• Ansprechpartner für Datenschutzfragen</li>
                            <li>• Jährliche Auffrischungsschulungen</li>
                          </ul>
                        </div>
                        
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Technische Sicherheit</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Sichere Kommunikationskanäle bereitstellen</li>
                            <li>• Verschlüsselte E-Mail-Accounts</li>
                            <li>• Cloud-Lösungen mit Datenschutz-Zertifikat</li>
                            <li>• Mobile Device Management (MDM)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Organisatorische Maßnahmen</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Klare Rollen- und Rechtevergabe</li>
                            <li>• Verpflichtung auf Datengeheimnis</li>
                            <li>• Regelmäßige Zugriffsrechte-Prüfung</li>
                            <li>• Dokumentierte Übergabeprozesse</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Praktischer Leitfaden für Ehrenamtliche</h3>
                    
                    <Tabs defaultValue="dos" className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        <TabsTrigger value="dos">Do's</TabsTrigger>
                        <TabsTrigger value="donts">Don'ts</TabsTrigger>
                        <TabsTrigger value="emergency">Im Notfall</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="dos" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-green-700">✓ Das sollten Sie tun</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Vor Fotoaufnahmen immer um Erlaubnis fragen</li>
                              <li>• Kontaktdaten nur für den vereinbarten Zweck nutzen</li>
                              <li>• Bei Unsicherheit den Datenschutzbeauftragten fragen</li>
                              <li>• Starke Passwörter für alle Accounts verwenden</li>
                              <li>• Regelmäßig Software-Updates durchführen</li>
                              <li>• Vertrauliche Gespräche nur im privaten Rahmen führen</li>
                              <li>• Datenschutzerklärungen bei Veranstaltungen aushändigen</li>
                              <li>• Nach Ende der Tätigkeit alle Daten löschen/zurückgeben</li>
                            </ul>
                          </div>
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-blue-700">💡 Hilfreiche Tipps</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Nutzen Sie die bereitgestellten Vorlagen</li>
                              <li>• Machen Sie sich mit den Gemeinde-Richtlinien vertraut</li>
                              <li>• Dokumentieren Sie wichtige Entscheidungen</li>
                              <li>• Sprechen Sie Probleme frühzeitig an</li>
                              <li>• Tauschen Sie sich mit anderen Ehrenamtlichen aus</li>
                              <li>• Nutzen Sie Schulungsangebote der Gemeinde</li>
                              <li>• Führen Sie eine Liste Ihrer Datenzugriffe</li>
                              <li>• Informieren Sie sich über neue Bestimmungen</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="donts" className="space-y-4">
                        <div className="bg-red-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3 text-red-700">✗ Das sollten Sie vermeiden</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm">
                              <li>• Keine Weitergabe von Kontaktdaten ohne Erlaubnis</li>
                              <li>• Keine Fotos ohne Einverständnis veröffentlichen</li>
                              <li>• Keine vertraulichen Informationen in sozialen Medien</li>
                              <li>• Keine Nutzung unsicherer Messenger für Gemeindedaten</li>
                              <li>• Keine Speicherung auf privaten Cloud-Diensten</li>
                              <li>• Keine Diskussion über Gemeindemitglieder in der Öffentlichkeit</li>
                            </ul>
                            <ul className="space-y-2 text-sm">
                              <li>• Keine Daten länger als nötig aufbewahren</li>
                              <li>• Keine unverschlüsselten E-Mails mit sensiblen Daten</li>
                              <li>• Keine Screenshots von internen Dokumenten</li>
                              <li>• Keine Weitergabe von Zugangsdaten</li>
                              <li>• Keine Verwendung privater Geräte ohne Genehmigung</li>
                              <li>• Keine nachträglichen Änderungen ohne Dokumentation</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="emergency" className="space-y-4">
                        <div className="bg-orange-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3 text-orange-700">🚨 Bei Datenschutz-Vorfällen</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <div>
                              <h5 className="font-medium mb-2">Sofortmaßnahmen</h5>
                              <ul className="space-y-1 text-sm">
                                <li>1. Ruhe bewahren und Schadensbegrenzung</li>
                                <li>2. Datenschutzbeauftragten sofort informieren</li>
                                <li>3. Vorfall dokumentieren (Was, Wann, Wer)</li>
                                <li>4. Weitere Datenverbreitung stoppen</li>
                                <li>5. Betroffene Personen informieren</li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-medium mb-2">Kontakte im Notfall</h5>
                              <div className="space-y-2 text-sm">
                                <div className="bg-white p-2 rounded border">
                                  <p className="font-medium">Datenschutzbeauftragter</p>
                                  <p>Tel: [Telefonnummer]</p>
                                  <p>E-Mail: [E-Mail-Adresse]</p>
                                </div>
                                <div className="bg-white p-2 rounded border">
                                  <p className="font-medium">Pfarramt</p>
                                  <p>Tel: [Telefonnummer]</p>
                                  <p>Notfall: [Notfallnummer]</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <TaskCard
                  id="volunteer-training-program"
                  title="Schulungsprogramm für Ehrenamtliche entwickeln"
                  description="Erstellen Sie ein strukturiertes Datenschutz-Schulungsprogramm speziell für ehrenamtliche Mitarbeiter in Ihrer Gemeinde."
                  difficulty="medium"
                />

                <TaskCard
                  id="volunteer-data-guidelines"
                  title="Datenschutz-Leitfaden für Ehrenamtliche"
                  description="Entwickeln Sie einen praxisnahen, verständlichen Leitfaden für den Umgang mit personenbezogenen Daten durch Ehrenamtliche."
                  difficulty="hard"
                />
              </motion.div>
            </section>

            {/* Church Communication Section */}
            <section id="gemeindekommunikation" ref={el => sectionRefs.current['gemeindekommunikation'] = el} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <MessageSquare className="w-8 h-8 text-purple-400" />
                  Gemeindekommunikation
                </h2>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Datenschutz in der Gemeindekommunikation</h3>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                      <p className="text-blue-800 mb-2">
                        <strong>Kernprinzip:</strong> Auch in der Gemeindekommunikation gelten alle Datenschutzgrundsätze. 
                        Besondere Aufmerksamkeit ist bei öffentlichen Kommunikationskanälen erforderlich.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-blue-600">Interne Kommunikation</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• E-Mail-Newsletter an Gemeindemitglieder</li>
                          <li>• WhatsApp-Gruppen für Arbeitskreise</li>
                          <li>• Intranet-Systeme für Mitarbeiter</li>
                          <li>• Telefon- und Adresslisten</li>
                          <li>• Interne Rundschreiben und Mitteilungen</li>
                          <li>• Sitzungsprotokolle von Gremien</li>
                          <li>• Mitarbeiterinformationen</li>
                          <li>• Veranstaltungsankündigungen</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-green-600">Öffentliche Kommunikation</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Website und Online-Auftritte</li>
                          <li>• Social Media-Kanäle (Facebook, Instagram)</li>
                          <li>• Gemeindebrief und Publikationen</li>
                          <li>• Pressemitteilungen</li>
                          <li>• Aushänge und Schaukästen</li>
                          <li>• Veranstaltungsflyer</li>
                          <li>• YouTube-Kanal für Gottesdienste</li>
                          <li>• Podcast und Audio-Aufnahmen</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Mail className="w-5 h-5 text-blue-600" />
                        E-Mail-Kommunikation
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Best Practices</h4>
                          <ul className="text-xs space-y-1">
                            <li>• BCC für Rundmails verwenden</li>
                            <li>• Opt-in-Verfahren für Newsletter</li>
                            <li>• Sichere E-Mail-Server nutzen</li>
                            <li>• Abmeldemöglichkeit anbieten</li>
                          </ul>
                        </div>
                        
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Zu vermeiden</h4>
                          <ul className="text-xs space-y-1">
                            <li>• CC bei Massenmails</li>
                            <li>• Sensible Daten unverschlüsselt</li>
                            <li>• Automatische Weiterleitung</li>
                            <li>• Veraltete Adresslisten</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-green-600" />
                        Website & Social Media
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Erforderlich</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Datenschutzerklärung</li>
                            <li>• Impressum</li>
                            <li>• Cookie-Banner</li>
                            <li>• Einwilligungen für Fotos</li>
                          </ul>
                        </div>
                        
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Aufmerksamkeit bei</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Tracking-Tools</li>
                            <li>• Eingebettete Inhalte</li>
                            <li>• Kontaktformulare</li>
                            <li>• Newsletter-Anmeldungen</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Video className="w-5 h-5 text-purple-600" />
                        Foto & Video
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Einwilligungen</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Vor Aufnahme einholen</li>
                            <li>• Zweck der Nutzung angeben</li>
                            <li>• Widerrufsmöglichkeit bieten</li>
                            <li>• Bei Kindern: Eltern fragen</li>
                          </ul>
                        </div>
                        
                        <div className="bg-red-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Besondere Vorsicht</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Live-Streaming</li>
                            <li>• Seelsorge-Situationen</li>
                            <li>• Krankenbesuche</li>
                            <li>• Private Gespräche</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Rechtskonforme Kommunikationstools</h3>
                    
                    <Tabs defaultValue="email" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="email">E-Mail-Systeme</TabsTrigger>
                        <TabsTrigger value="messenger">Messenger</TabsTrigger>
                        <TabsTrigger value="social">Social Media</TabsTrigger>
                        <TabsTrigger value="web">Web-Tools</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="email" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-green-700">✓ Empfohlene E-Mail-Lösungen</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Microsoft 365 (Business-Tarif)</li>
                              <li>• Google Workspace (mit BAA)</li>
                              <li>• Deutsche Anbieter (mailbox.org, posteo)</li>
                              <li>• Kirchliche IT-Dienstleister</li>
                              <li>• Eigene Exchange-Server</li>
                              <li>• Verschlüsselte E-Mail-Dienste</li>
                            </ul>
                          </div>
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-red-700">✗ Problematische Lösungen</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Private E-Mail-Accounts</li>
                              <li>• Kostenlose Anbieter ohne AV-Vertrag</li>
                              <li>• Unverschlüsselte Übertragung</li>
                              <li>• Server außerhalb der EU</li>
                              <li>• Anbieter ohne Datenschutz-Zertifikat</li>
                              <li>• Veraltete E-Mail-Systeme</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="messenger" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-green-700">✓ Datenschutzkonforme Messenger</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Signal (Ende-zu-Ende-Verschlüsselung)</li>
                              <li>• Threema (Schweizer Anbieter)</li>
                              <li>• Microsoft Teams (Business)</li>
                              <li>• Slack (mit BAA)</li>
                              <li>• Element/Matrix (dezentral)</li>
                              <li>• Wire (Unternehmenslösung)</li>
                            </ul>
                          </div>
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-yellow-700">⚠ Mit Vorsicht zu nutzen</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• WhatsApp (nur für unkritische Inhalte)</li>
                              <li>• Telegram (Cloud-basiert)</li>
                              <li>• Facebook Messenger</li>
                              <li>• Skype (Microsoft-Account erforderlich)</li>
                              <p className="text-xs mt-2 text-yellow-600">
                                Hinweis: Nur nach Aufklärung und mit Einwilligung verwenden
                              </p>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="social" className="space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3 text-blue-700">Social Media Datenschutz-Checklist</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm">
                              <li>• Datenschutzerklärung anpassen</li>
                              <li>• Einwilligungen für Foto-Veröffentlichungen</li>
                              <li>• Keine sensiblen Daten posten</li>
                              <li>• Moderations-Richtlinien etablieren</li>
                              <li>• Regelmäßige Datenschutz-Schulungen</li>
                            </ul>
                            <ul className="space-y-2 text-sm">
                              <li>• Privacy-Settings optimal konfigurieren</li>
                              <li>• Tracking minimieren</li>
                              <li>• Keine automatischen Cross-Postings</li>
                              <li>• Ansprechpartner für Datenschutz benennen</li>
                              <li>• Löschkonzept für alte Beiträge</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="web" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-green-700">Datenschutzkonforme Web-Tools</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Nextcloud (eigene Installation)</li>
                              <li>• Microsoft SharePoint</li>
                              <li>• Google Workspace (mit AV-Vertrag)</li>
                              <li>• Deutsche Cloud-Anbieter</li>
                              <li>• Kirchliche IT-Lösungen</li>
                              <li>• Open-Source-Alternativen</li>
                            </ul>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-orange-700">Website-Essentials</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• SSL-Verschlüsselung (HTTPS)</li>
                              <li>• Cookie-Consent-Management</li>
                              <li>• Datenschutzkonforme Analytics</li>
                              <li>• Kontaktformular-Verschlüsselung</li>
                              <li>• Regelmäßige Sicherheitsupdates</li>
                              <li>• Backup-Strategie</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <TaskCard
                  id="communication-audit"
                  title="Kommunikationskanäle-Audit durchführen"
                  description="Überprüfen Sie alle genutzten Kommunikationskanäle auf Datenschutz-Compliance und erstellen Sie Handlungsempfehlungen."
                  difficulty="medium"
                />

                <TaskCard
                  id="communication-guidelines"
                  title="Kommunikations-Leitfaden erstellen"
                  description="Entwickeln Sie klare Richtlinien für datenschutzkonforme Kommunikation in allen Kanälen Ihrer Gemeinde."
                  difficulty="hard"
                />
              </motion.div>
            </section>

            {/* Data Protection Officer Section */}
            <section id="datenschutzbeauftragte" ref={el => sectionRefs.current['datenschutzbeauftragte'] = el} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Shield className="w-8 h-8 text-purple-400" />
                  Kirchliche Datenschutzbeauftragte
                </h2>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Rolle und Aufgaben des kirchlichen Datenschutzbeauftragten</h3>
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
                      <p className="text-purple-800 mb-2">
                        <strong>Besonderheit:</strong> Nach DSG-EKD müssen kirchliche Stellen einen Datenschutzbeauftragten 
                        bestellen, der die Einhaltung des kirchlichen Datenschutzrechts überwacht.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-blue-600">Kernaufgaben</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Überwachung der Einhaltung des DSG-EKD</li>
                          <li>• Durchführung von Datenschutz-Folgenabschätzungen</li>
                          <li>• Beratung bei datenschutzrechtlichen Fragen</li>
                          <li>• Schulung und Sensibilisierung der Mitarbeiter</li>
                          <li>• Zusammenarbeit mit Aufsichtsbehörden</li>
                          <li>• Überwachung der Datenschutzdokumentation</li>
                          <li>• Bearbeitung von Betroffenenanfragen</li>
                          <li>• Meldung von Datenschutzverletzungen</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-green-600">Qualifikationsanforderungen</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Fachkundige Kenntnisse des Datenschutzrechts</li>
                          <li>• Verständnis für kirchliche Strukturen</li>
                          <li>• Kenntnis der technischen und organisatorischen Maßnahmen</li>
                          <li>• Regelmäßige Fortbildung</li>
                          <li>• Unabhängigkeit und Neutralität</li>
                          <li>• Verschwiegenheit und Vertraulichkeit</li>
                          <li>• Kommunikations- und Beratungsfähigkeiten</li>
                          <li>• Verständnis für Seelsorgegeheimnis</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        Bestellungsarten
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Interner DSB</h4>
                          <p className="text-xs text-blue-700 mb-2">Mitarbeiter der eigenen Kirchengemeinde</p>
                          <div className="text-xs">
                            <p className="text-green-600">+ Kennt interne Strukturen</p>
                            <p className="text-red-600">- Mögliche Interessenkonflikte</p>
                          </div>
                        </div>
                        
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Externer DSB</h4>
                          <p className="text-xs text-green-700 mb-2">Spezialisierte externe Fachkraft</p>
                          <div className="text-xs">
                            <p className="text-green-600">+ Hohe Fachkompetenz</p>
                            <p className="text-red-600">- Höhere Kosten</p>
                          </div>
                        </div>
                        
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Gemeinsamer DSB</h4>
                          <p className="text-xs text-yellow-700 mb-2">Für mehrere kleine Gemeinden</p>
                          <div className="text-xs">
                            <p className="text-green-600">+ Kosteneffizienz</p>
                            <p className="text-red-600">- Begrenzte Verfügbarkeit</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Scale className="w-5 h-5 text-green-600" />
                        Rechtliche Stellung
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Unabhängigkeit</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Keine Weisungsgebundenheit</li>
                            <li>• Direkter Zugang zur Leitungsebene</li>
                            <li>• Schutz vor Benachteiligung</li>
                            <li>• Kündigungsschutz</li>
                          </ul>
                        </div>
                        
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Befugnisse</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Zugang zu allen relevanten Informationen</li>
                            <li>• Teilnahme an relevanten Besprechungen</li>
                            <li>• Kontakt zu Aufsichtsbehörden</li>
                            <li>• Eingriffsrechte bei Verstößen</li>
                          </ul>
                        </div>
                        
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Pflichten</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Verschwiegenheit</li>
                            <li>• Fortbildungspflicht</li>
                            <li>• Dokumentationspflicht</li>
                            <li>• Berichtspflicht</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Target className="w-5 h-5 text-purple-600" />
                        Praktische Umsetzung
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Arbeitsorganisation</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Sprechstunden einrichten</li>
                            <li>• Kontaktdaten veröffentlichen</li>
                            <li>• Regelmäßige Berichte</li>
                            <li>• Jahresplanung erstellen</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Dokumentation</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Tätigkeitsberichte</li>
                            <li>• Beratungsdokumentation</li>
                            <li>• Schulungsnachweise</li>
                            <li>• Incident-Berichte</li>
                          </ul>
                        </div>
                        
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Netzwerk</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Kontakt zu anderen DSB</li>
                            <li>• Teilnahme an Fachtagungen</li>
                            <li>• Mitgliedschaft in Berufsverbänden</li>
                            <li>• Austausch mit Aufsichtsbehörden</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <TaskCard
                  id="dpo-selection"
                  title="Datenschutzbeauftragten bestellen"
                  description="Wählen Sie einen qualifizierten Datenschutzbeauftragten aus und regeln Sie dessen rechtliche Stellung in Ihrer Gemeinde."
                  difficulty="medium"
                />

                <TaskCard
                  id="dpo-procedures"
                  title="DSB-Arbeitsorganisation etablieren"
                  description="Schaffen Sie die organisatorischen Strukturen für die effektive Arbeit des Datenschutzbeauftragten."
                  difficulty="medium"
                />
              </motion.div>
            </section>

            {/* Data Subject Rights Section */}
            <section id="betroffenenrechte" ref={el => sectionRefs.current['betroffenenrechte'] = el} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Scale className="w-8 h-8 text-purple-400" />
                  Betroffenenrechte in der Kirche
                </h2>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Betroffenenrechte nach DSG-EKD</h3>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
                      <p className="text-blue-800 mb-2">
                        <strong>Grundsatz:</strong> Die DSG-EKD gewährt Betroffenen ähnliche Rechte wie die DSGVO, 
                        berücksichtigt aber kirchliche Besonderheiten wie das Seelsorgegeheimnis und kirchliche Autonomie.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-blue-600">Grundlegende Rechte</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Recht auf Information (Art. 12-14 DSG-EKD)</li>
                          <li>• Recht auf Auskunft (Art. 15 DSG-EKD)</li>
                          <li>• Recht auf Berichtigung (Art. 16 DSG-EKD)</li>
                          <li>• Recht auf Löschung (Art. 17 DSG-EKD)</li>
                          <li>• Recht auf Einschränkung (Art. 18 DSG-EKD)</li>
                          <li>• Recht auf Datenübertragbarkeit (Art. 20 DSG-EKD)</li>
                          <li>• Widerspruchsrecht (Art. 21 DSG-EKD)</li>
                          <li>• Recht auf Beschwerde (Art. 77 DSG-EKD)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-orange-600">Kirchliche Besonderheiten</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Beschränkungen bei Seelsorgedaten</li>
                          <li>• Kirchliche Interesse können Rechte begrenzen</li>
                          <li>• Beschwerde bei kirchlichen Aufsichtsbehörden</li>
                          <li>• Berücksichtigung kirchlicher Aufgaben</li>
                          <li>• Schutz der kirchlichen Autonomie</li>
                          <li>• Besondere Regelungen für Mitarbeiterdaten</li>
                          <li>• Einschränkungen bei historischen Daten</li>
                          <li>• Kollektive kirchliche Interessen</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Eye className="w-5 h-5 text-blue-600" />
                        Auskunftsrecht
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Umfang der Auskunft</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Welche Daten verarbeitet werden</li>
                            <li>• Zu welchen Zwecken</li>
                            <li>• Rechtsgrundlage der Verarbeitung</li>
                            <li>• Empfänger der Daten</li>
                            <li>• Speicherdauer</li>
                            <li>• Herkunft der Daten</li>
                          </ul>
                        </div>
                        
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Grenzen</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Seelsorgegeheimnis bleibt gewahrt</li>
                            <li>• Rechte Dritter schützen</li>
                            <li>• Unverhältnismäßiger Aufwand</li>
                            <li>• Kirchliche Interessen</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Edit3 className="w-5 h-5 text-green-600" />
                        Berichtigung & Löschung
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Berichtigung</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Unverzügliche Korrektur falscher Daten</li>
                            <li>• Vervollständigung unvollständiger Daten</li>
                            <li>• Information aller Empfänger</li>
                            <li>• Dokumentation der Änderung</li>
                          </ul>
                        </div>
                        
                        <div className="bg-red-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Löschung</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Bei Wegfall der Rechtsgrundlage</li>
                            <li>• Nach Zweckerreichung</li>
                            <li>• Bei unrechtmäßiger Verarbeitung</li>
                            <li>• Ausnahmen für Archivzwecke</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <AlertTriangle className="w-5 h-5 text-orange-600" />
                        Beschwerdeverfahren
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Kirchliche Aufsicht</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Beauftragter für den Datenschutz (EKD)</li>
                            <li>• Landeskirchenspezifische Behörden</li>
                            <li>• Kirchengerichte</li>
                            <li>• Schlichtungsstellen</li>
                          </ul>
                        </div>
                        
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Verfahrensablauf</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Schriftliche Beschwerde</li>
                            <li>• Prüfung durch Aufsichtsbehörde</li>
                            <li>• Stellungnahme der Kirchengemeinde</li>
                            <li>• Entscheidung und Maßnahmen</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Praktische Umsetzung der Betroffenenrechte</h3>
                    
                    <Tabs defaultValue="prozesse" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="prozesse">Prozesse</TabsTrigger>
                        <TabsTrigger value="formulare">Formulare</TabsTrigger>
                        <TabsTrigger value="fristen">Fristen</TabsTrigger>
                        <TabsTrigger value="dokumentation">Dokumentation</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="prozesse" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-blue-700">Eingangsbearbeitung</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Eindeutige Identifikation des Antragstellers</li>
                              <li>• Eingangsbestätigung innerhalb von 72h</li>
                              <li>• Zuständigkeitsprüfung</li>
                              <li>• Weiterleitungsverfahren bei externer Zuständigkeit</li>
                              <li>• Erfassung in Betroffenenrechte-Register</li>
                              <li>• Information des Datenschutzbeauftragten</li>
                            </ul>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-green-700">Bearbeitung & Antwort</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Sammlung aller relevanten Informationen</li>
                              <li>• Prüfung von Ausnahmen und Beschränkungen</li>
                              <li>• Rücksprache mit betroffenen Abteilungen</li>
                              <li>• Formulierung der Antwort</li>
                              <li>• Qualitätskontrolle durch DSB</li>
                              <li>• Versendung und Archivierung</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="formulare" className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-purple-700">Antragsformulare</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Auskunftsantrag</li>
                              <li>• Berichtigungsantrag</li>
                              <li>• Löschungsantrag</li>
                              <li>• Widerspruchsformular</li>
                              <li>• Beschwerdeformular</li>
                            </ul>
                          </div>
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-yellow-700">Interne Vorlagen</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Eingangsbestätigung</li>
                              <li>• Auskunftsvorlage</li>
                              <li>• Ablehnungsschreiben</li>
                              <li>• Nachfragevorlage</li>
                              <li>• Bearbeitungsprotokoll</li>
                            </ul>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-orange-700">Informationsmaterial</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Merkblatt Betroffenenrechte</li>
                              <li>• FAQ-Sammlung</li>
                              <li>• Kontaktinformationen</li>
                              <li>• Rechtshilfeinformationen</li>
                              <li>• Verfahrensablauf</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="fristen" className="space-y-4">
                        <div className="bg-red-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3 text-red-700">Gesetzliche Fristen beachten</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm">
                              <li><strong>Auskunft:</strong> 1 Monat (verlängerbar um 2 Monate)</li>
                              <li><strong>Berichtigung:</strong> Unverzüglich</li>
                              <li><strong>Löschung:</strong> Unverzüglich</li>
                              <li><strong>Einschränkung:</strong> Unverzüglich</li>
                            </ul>
                            <ul className="space-y-2 text-sm">
                              <li><strong>Information Dritter:</strong> Mit der Bearbeitung</li>
                              <li><strong>Datenübertragung:</strong> 1 Monat</li>
                              <li><strong>Eingangsbestätigung:</strong> 72 Stunden</li>
                              <li><strong>Fristverlängerung:</strong> Begründungspflichtig</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="dokumentation" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-indigo-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-indigo-700">Dokumentationspflicht</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Vollständige Antragshistorie</li>
                              <li>• Bearbeitungsvermerke</li>
                              <li>• Getroffene Maßnahmen</li>
                              <li>• Ablehnungsbegründungen</li>
                              <li>• Nachweise für Dritten-Information</li>
                              <li>• Aufbewahrung für 3 Jahre</li>
                            </ul>
                          </div>
                          <div className="bg-cyan-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-cyan-700">Qualitätssicherung</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Regelmäßige Prozessreviews</li>
                              <li>• Auswertung der Bearbeitungszeiten</li>
                              <li>• Feedback-Analyse</li>
                              <li>• Schulung der Bearbeiter</li>
                              <li>• Kontinuierliche Verbesserung</li>
                              <li>• Benchmarking mit anderen Gemeinden</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <TaskCard
                  id="data-subject-rights-procedures"
                  title="Betroffenenrechte-Verfahren etablieren"
                  description="Entwickeln Sie standardisierte Prozesse und Formulare für die Bearbeitung aller Betroffenenrechte in Ihrer Gemeinde."
                  difficulty="medium"
                />

                <TaskCard
                  id="rights-training"
                  title="Mitarbeiterschulung zu Betroffenenrechten"
                  description="Schulen Sie alle relevanten Mitarbeiter im Umgang mit Betroffenenrechten und kirchlichen Besonderheiten."
                  difficulty="medium"
                />
              </motion.div>
            </section>

            {/* Technical and Organizational Measures Section */}
            <section id="technische-massnahmen" ref={el => sectionRefs.current['technische-massnahmen'] = el} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Settings className="w-8 h-8 text-purple-400" />
                  Technische und Organisatorische Maßnahmen
                </h2>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">TOM nach DSG-EKD</h3>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                      <p className="text-green-800 mb-2">
                        <strong>Artikel 25 DSG-EKD:</strong> Technische und organisatorische Maßnahmen sind essenziell 
                        für den Schutz personenbezogener Daten in kirchlichen Einrichtungen. Sie müssen dem Stand der 
                        Technik entsprechen und angemessen sein.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-blue-600">Technische Maßnahmen</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Pseudonymisierung und Verschlüsselung</li>
                          <li>• Vertraulichkeit der IT-Systeme</li>
                          <li>• Integrität der Daten</li>
                          <li>• Verfügbarkeit und Belastbarkeit</li>
                          <li>• Verfahren zur Wiederherstellung</li>
                          <li>• Regelmäßige Überprüfung und Bewertung</li>
                          <li>• Zugriffskontrolle und Authentifizierung</li>
                          <li>• Sichere Übertragung und Speicherung</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-orange-600">Organisatorische Maßnahmen</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Datenschutz-Management-System</li>
                          <li>• Klare Rollen und Verantwortlichkeiten</li>
                          <li>• Schulungs- und Sensibilisierungsprogramme</li>
                          <li>• Incident-Response-Verfahren</li>
                          <li>• Regelmäßige Audits und Kontrollen</li>
                          <li>• Dokumentation und Nachweisführung</li>
                          <li>• Vertragsmanagement mit Dienstleistern</li>
                          <li>• Business Continuity Planning</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Lock className="w-5 h-5 text-blue-600" />
                        Zugriffskontrolle
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Zugangskontrolle</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Physische Zugangskontrollen</li>
                            <li>• Berechtigungskonzepte</li>
                            <li>• Besucherregistrierung</li>
                            <li>• Schlüsselverwaltung</li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Zugriffskontrolle</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Benutzerauthentifizierung</li>
                            <li>• Rollenbasierte Berechtigungen</li>
                            <li>• Multi-Faktor-Authentifizierung</li>
                            <li>• Session-Management</li>
                          </ul>
                        </div>
                        
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Zugriffsprotokolle</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Logging aller Zugriffe</li>
                            <li>• Monitoring verdächtiger Aktivitäten</li>
                            <li>• Regelmäßige Auswertung</li>
                            <li>• Incident-Detection</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Database className="w-5 h-5 text-green-600" />
                        Datensicherheit
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Verschlüsselung</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Datenverschlüsselung at rest</li>
                            <li>• Verschlüsselung in transit</li>
                            <li>• Schlüsselmanagement</li>
                            <li>• Ende-zu-Ende-Verschlüsselung</li>
                          </ul>
                        </div>
                        
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Backup & Recovery</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Regelmäßige Datensicherung</li>
                            <li>• Offsite-Backup-Lagerung</li>
                            <li>• Recovery-Testing</li>
                            <li>• RTO/RPO-Definitionen</li>
                          </ul>
                        </div>
                        
                        <div className="bg-red-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Datenintegrität</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Checksummen und Hashing</li>
                            <li>• Versionskontrolle</li>
                            <li>• Manipulationsschutz</li>
                            <li>• Audit-Trails</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Network className="w-5 h-5 text-orange-600" />
                        IT-Sicherheit
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Netzwerksicherheit</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Firewall-Konfiguration</li>
                            <li>• Netzwerksegmentierung</li>
                            <li>• VPN für Remote-Zugriff</li>
                            <li>• Intrusion Detection</li>
                          </ul>
                        </div>
                        
                        <div className="bg-indigo-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Endpoint Security</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Antivirus-Software</li>
                            <li>• Automatische Updates</li>
                            <li>• Device-Management</li>
                            <li>• Patch-Management</li>
                          </ul>
                        </div>
                        
                        <div className="bg-cyan-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Anwendungssicherheit</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Sichere Softwareentwicklung</li>
                            <li>• Regular Security Scans</li>
                            <li>• Penetration Testing</li>
                            <li>• Vulnerability Management</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">TOM-Implementierung für Kirchengemeinden</h3>
                    
                    <Tabs defaultValue="planung" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="planung">Planung</TabsTrigger>
                        <TabsTrigger value="umsetzung">Umsetzung</TabsTrigger>
                        <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
                        <TabsTrigger value="wartung">Wartung</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="planung" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-blue-700">1. Risikoanalyse</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Identifikation aller Datenverarbeitungen</li>
                              <li>• Bewertung der Eintrittswahrscheinlichkeit</li>
                              <li>• Abschätzung der Schadensfälle</li>
                              <li>• Priorisierung der Risiken</li>
                              <li>• Ableitung von Schutzbedarfen</li>
                              <li>• Dokumentation der Risikoakzeptanz</li>
                            </ul>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-green-700">2. Maßnahmenplanung</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Auswahl angemessener TOM</li>
                              <li>• Kosten-Nutzen-Bewertung</li>
                              <li>• Implementierungsreihenfolge</li>
                              <li>• Ressourcenplanung</li>
                              <li>• Zeitplan-Erstellung</li>
                              <li>• Verantwortlichkeiten definieren</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="umsetzung" className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-purple-700">Quick Wins</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Passwort-Richtlinien</li>
                              <li>• Bildschirmsperre</li>
                              <li>• Clean-Desk-Policy</li>
                              <li>• USB-Port-Blocking</li>
                              <li>• E-Mail-Verschlüsselung</li>
                            </ul>
                          </div>
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-yellow-700">Mittelfristig</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Berechtigungskonzept</li>
                              <li>• Backup-Automatisierung</li>
                              <li>• Incident-Response-Plan</li>
                              <li>• Monitoring-System</li>
                              <li>• Patch-Management</li>
                            </ul>
                          </div>
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-orange-700">Langfristig</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Identity Management</li>
                              <li>• SIEM-System</li>
                              <li>• Penetration Testing</li>
                              <li>• ISO 27001 Zertifizierung</li>
                              <li>• Security Awareness</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="monitoring" className="space-y-4">
                        <div className="bg-indigo-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3 text-indigo-700">Kontinuierliche Überwachung</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm">
                              <li>• KPI-Definition und -Messung</li>
                              <li>• Automatisierte Alerts</li>
                              <li>• Regelmäßige Penetration Tests</li>
                              <li>• Vulnerability Assessments</li>
                              <li>• Compliance-Checks</li>
                              <li>• Incident-Tracking</li>
                            </ul>
                            <ul className="space-y-2 text-sm">
                              <li>• Performance-Monitoring</li>
                              <li>• Log-Analyse</li>
                              <li>• Trend-Analyse</li>
                              <li>• Risk-Dashboard</li>
                              <li>• Management-Reporting</li>
                              <li>• Externe Audits</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="wartung" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-cyan-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-cyan-700">Regelmäßige Wartung</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Jährliche TOM-Review</li>
                              <li>• Aktualisierung der Risikoanalyse</li>
                              <li>• Update der Dokumentation</li>
                              <li>• Schulung der Mitarbeiter</li>
                              <li>• Test der Notfallpläne</li>
                              <li>• Überprüfung der Wirksamkeit</li>
                            </ul>
                          </div>
                          <div className="bg-teal-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-teal-700">Kontinuierliche Verbesserung</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Lessons Learned aus Incidents</li>
                              <li>• Benchmarking mit anderen Gemeinden</li>
                              <li>• Berücksichtigung neuer Bedrohungen</li>
                              <li>• Technologie-Updates</li>
                              <li>• Prozessoptimierung</li>
                              <li>• Feedback-Integration</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <TaskCard
                  id="tom-risk-assessment"
                  title="TOM-Risikoanalyse durchführen"
                  description="Führen Sie eine umfassende Risikoanalyse durch und leiten Sie angemessene technische und organisatorische Maßnahmen ab."
                  difficulty="hard"
                />

                <TaskCard
                  id="tom-implementation-plan"
                  title="TOM-Implementierungsplan erstellen"
                  description="Entwickeln Sie einen detaillierten Plan zur schrittweisen Umsetzung der erforderlichen Sicherheitsmaßnahmen."
                  difficulty="hard"
                />
              </motion.div>
            </section>

            {/* Training and Awareness Section */}
            <section id="schulung-sensibilisierung" ref={el => sectionRefs.current['schulung-sensibilisierung'] = el} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <GraduationCap className="w-8 h-8 text-purple-400" />
                  Schulung & Sensibilisierung
                </h2>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Datenschutz-Bildung in der Kirchengemeinde</h3>
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-4 mb-6">
                      <p className="text-purple-800 mb-2">
                        <strong>Erfolgsfaktor:</strong> Die beste Datenschutz-Technologie nützt nichts ohne geschulte und 
                        sensibilisierte Mitarbeiter. Regelmäßige Schulungen sind essentiell für effektiven Datenschutz.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-blue-600">Zielgruppen</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Hauptamtliche Mitarbeiter</li>
                          <li>• Ehrenamtliche Mitarbeiter</li>
                          <li>• Kirchenvorstände</li>
                          <li>• Jugendmitarbeiter</li>
                          <li>• Pfarrer und Seelsorger</li>
                          <li>• Verwaltungsmitarbeiter</li>
                          <li>• IT-Verantwortliche</li>
                          <li>• Externe Dienstleister</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-orange-600">Schulungsinhalte</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Grundlagen DSG-EKD vs. DSGVO</li>
                          <li>• Seelsorgegeheimnis und Datenschutz</li>
                          <li>• Betroffenenrechte und Anfragenbewältigung</li>
                          <li>• Sichere IT-Nutzung</li>
                          <li>• Incident Response</li>
                          <li>• Social Engineering Awareness</li>
                          <li>• Mobile Device Security</li>
                          <li>• Cloud-Services datenschutzkonform nutzen</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Users className="w-5 h-5 text-blue-600" />
                        Schulungsformate
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Präsenzschulungen</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Interaktive Workshops</li>
                            <li>• Rollenspiele</li>
                            <li>• Diskussionsrunden</li>
                            <li>• Praxisübungen</li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">E-Learning</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Online-Module</li>
                            <li>• Interaktive Tests</li>
                            <li>• Video-Tutorials</li>
                            <li>• Selbstlernkurse</li>
                          </ul>
                        </div>
                        
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Blended Learning</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Kombinierte Ansätze</li>
                            <li>• Flexible Zeiteinteilung</li>
                            <li>• Individuelle Lernpfade</li>
                            <li>• Nachbetreuung</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-green-600" />
                        Schulungsrhythmus
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Pflichtschulungen</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Grundschulung bei Eintritt</li>
                            <li>• Jährliche Auffrischung</li>
                            <li>• Bei Gesetzesänderungen</li>
                            <li>• Nach Sicherheitsvorfällen</li>
                          </ul>
                        </div>
                        
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Vertiefungsschulungen</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Rollenspezifische Inhalte</li>
                            <li>• Halbjährliche Updates</li>
                            <li>• Best Practice Sharing</li>
                            <li>• Praxisfälle besprechen</li>
                          </ul>
                        </div>
                        
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Kontinuierliche Sensibilisierung</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Monatliche Newsletter</li>
                            <li>• Phishing-Simulationen</li>
                            <li>• Datenschutz-Tipps</li>
                            <li>• Awareness-Kampagnen</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Award className="w-5 h-5 text-purple-600" />
                        Erfolgsmessung
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Wissenstests</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Pre- und Post-Tests</li>
                            <li>• Lernerfolgskontrolle</li>
                            <li>• Zertifikate ausstellen</li>
                            <li>• Wiederholungsschleifen</li>
                          </ul>
                        </div>
                        
                        <div className="bg-indigo-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Praktische Evaluierung</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Simulation von Phishing</li>
                            <li>• Mystery Shopping</li>
                            <li>• Verhaltensbeobachtung</li>
                            <li>• Incident-Rate-Tracking</li>
                          </ul>
                        </div>
                        
                        <div className="bg-cyan-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Feedback & Verbesserung</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Teilnehmerfeedback</li>
                            <li>• 360-Grad-Bewertungen</li>
                            <li>• Kontinuierliche Anpassung</li>
                            <li>• ROI-Messung</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Praxisorientierte Schulungsmodule</h3>
                    
                    <Tabs defaultValue="grundlagen" className="w-full">
                      <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="grundlagen">Grundlagen</TabsTrigger>
                        <TabsTrigger value="praxis">Praxis</TabsTrigger>
                        <TabsTrigger value="spezial">Spezialthemen</TabsTrigger>
                        <TabsTrigger value="incidents">Incident Response</TabsTrigger>
                      </TabsList>
                      
                      <TabsContent value="grundlagen" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-blue-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-blue-700">Modul 1: DSG-EKD Basics (2h)</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Geschichte und Entwicklung der DSG-EKD</li>
                              <li>• Unterschiede zur DSGVO</li>
                              <li>• Kirchliche Autonomie im Datenschutz</li>
                              <li>• Grundprinzipien der Datenverarbeitung</li>
                              <li>• Rechtsgrundlagen für kirchliche Verarbeitung</li>
                              <li>• Sanktionen und Aufsichtsbehörden</li>
                            </ul>
                          </div>
                          <div className="bg-green-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-green-700">Modul 2: Betroffenenrechte (1.5h)</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Übersicht aller Betroffenenrechte</li>
                              <li>• Fristen und Verfahrensabläufe</li>
                              <li>• Praktische Bearbeitung von Anfragen</li>
                              <li>• Grenzen und Ausnahmen</li>
                              <li>• Kirchliche Besonderheiten</li>
                              <li>• Musterformulare und -antworten</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="praxis" className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="bg-purple-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-purple-700">Modul 3: Sichere IT-Nutzung (2h)</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Passwort-Sicherheit und 2FA</li>
                              <li>• E-Mail-Sicherheit und Phishing</li>
                              <li>• Cloud-Services sicher nutzen</li>
                              <li>• Mobile Geräte absichern</li>
                              <li>• WLAN und Netzwerksicherheit</li>
                              <li>• Software-Updates und Downloads</li>
                            </ul>
                          </div>
                          <div className="bg-yellow-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-yellow-700">Modul 4: Kommunikation & Social Media (1.5h)</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Datenschutzkonforme Kommunikation</li>
                              <li>• Social Media Guidelines</li>
                              <li>• Foto- und Videorechte</li>
                              <li>• Newsletter und E-Mail-Marketing</li>
                              <li>• Website und Cookie-Management</li>
                              <li>• Live-Streaming und Online-Gottesdienste</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="spezial" className="space-y-4">
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-orange-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-orange-700">Seelsorge & Datenschutz</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Absoluter Schutz des Seelsorgegeheimnisses</li>
                              <li>• Dokumentation von Seelsorgegesprächen</li>
                              <li>• Digitale Seelsorge und Datenschutz</li>
                              <li>• Umgang mit besonderen Kategorien</li>
                            </ul>
                          </div>
                          <div className="bg-red-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-red-700">Kinder- & Jugendarbeit</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Einwilligungen von Minderjährigen</li>
                              <li>• Elternrechte und -pflichten</li>
                              <li>• Foto- und Videorechte bei Minderjährigen</li>
                              <li>• Datenschutz in der digitalen Jugendarbeit</li>
                            </ul>
                          </div>
                          <div className="bg-indigo-50 p-4 rounded-lg">
                            <h4 className="font-medium mb-3 text-indigo-700">Verwaltung & Finanzen</h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Spendenverwaltung und -nachweis</li>
                              <li>• Mitgliederverwaltung</li>
                              <li>• Personaldaten-Management</li>
                              <li>• Archivierung und Löschfristen</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                      
                      <TabsContent value="incidents" className="space-y-4">
                        <div className="bg-red-50 p-4 rounded-lg">
                          <h4 className="font-medium mb-3 text-red-700">Datenschutzvorfälle erkennen und melden</h4>
                          <div className="grid md:grid-cols-2 gap-4">
                            <ul className="space-y-2 text-sm">
                              <li>• Was ist ein Datenschutzvorfall?</li>
                              <li>• Typische Vorfälle in Kirchengemeinden</li>
                              <li>• Sofortmaßnahmen bei Datenpannen</li>
                              <li>• Meldepflichten und Fristen</li>
                              <li>• Kommunikation mit Betroffenen</li>
                            </ul>
                            <ul className="space-y-2 text-sm">
                              <li>• Eskalationswege und Zuständigkeiten</li>
                              <li>• Dokumentation von Vorfällen</li>
                              <li>• Lessons Learned und Prävention</li>
                              <li>• Umgang mit Medien und Öffentlichkeit</li>
                              <li>• Wiederherstellung nach Incidents</li>
                            </ul>
                          </div>
                        </div>
                      </TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>

                <TaskCard
                  id="training-curriculum"
                  title="Schulungskonzept entwickeln"
                  description="Erstellen Sie ein umfassendes Schulungskonzept mit modularen Inhalten für alle Zielgruppen in Ihrer Gemeinde."
                  difficulty="medium"
                />

                <TaskCard
                  id="awareness-campaign"
                  title="Datenschutz-Awareness-Kampagne starten"
                  description="Planen und implementieren Sie eine kontinuierliche Sensibilisierungskampagne für alle Mitarbeiter."
                  difficulty="medium"
                />
              </motion.div>
            </section>

            {/* Audit and Assessment Section */}
            <section id="audit-bewertung" ref={el => sectionRefs.current['audit-bewertung'] = el} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <BarChart3 className="w-8 h-8 text-purple-400" />
                  Audit & Compliance-Bewertung
                </h2>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Systematische Datenschutz-Prüfung</h3>
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-6">
                      <p className="text-green-800 mb-2">
                        <strong>Kontinuierliche Verbesserung:</strong> Regelmäßige Audits und Bewertungen sind essentiell, 
                        um die Wirksamkeit der Datenschutzmaßnahmen zu überprüfen und kontinuierlich zu verbessern.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-blue-600">Audit-Arten</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Interne Datenschutz-Audits</li>
                          <li>• Externe unabhängige Prüfungen</li>
                          <li>• Compliance-Assessments</li>
                          <li>• Risiko-Evaluierungen</li>
                          <li>• Prozess-Reviews</li>
                          <li>• IT-Sicherheitsprüfungen</li>
                          <li>• Penetration Tests</li>
                          <li>• Gap-Analysen</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-orange-600">Prüfungsbereiche</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Organisatorische Maßnahmen</li>
                          <li>• Technische Sicherheit</li>
                          <li>• Verarbeitungsverzeichnisse</li>
                          <li>• Betroffenenrechte-Verfahren</li>
                          <li>• Auftragsverarbeitung</li>
                          <li>• Datenschutz-Folgenabschätzungen</li>
                          <li>• Incident Response</li>
                          <li>• Schulungs- und Sensibilisierungsmaßnahmen</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-blue-600" />
                        Internes Audit
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Vorteile</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Kostengünstiger</li>
                            <li>• Interne Expertise nutzen</li>
                            <li>• Kontinuierliche Überwachung</li>
                            <li>• Vertraute Prozesse</li>
                          </ul>
                        </div>
                        
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Herausforderungen</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Objektivität sicherstellen</li>
                            <li>• Fachliche Kompetenz</li>
                            <li>• Zeitliche Ressourcen</li>
                            <li>• Interessenskonflikte</li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Best Practices</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Rotationsprinzip anwenden</li>
                            <li>• Externe Beratung hinzuziehen</li>
                            <li>• Standardisierte Checklisten</li>
                            <li>• Dokumentation sicherstellen</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <ExternalLink className="w-5 h-5 text-green-600" />
                        Externes Audit
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Vorteile</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Objektive Bewertung</li>
                            <li>• Spezialisierte Expertise</li>
                            <li>• Benchmarking möglich</li>
                            <li>• Glaubwürdigkeit nach außen</li>
                          </ul>
                        </div>
                        
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Herausforderungen</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Höhere Kosten</li>
                            <li>• Einarbeitung erforderlich</li>
                            <li>• Terminliche Koordination</li>
                            <li>• Vertraulichkeit sicherstellen</li>
                          </ul>
                        </div>
                        
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Auswahlkriterien</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Kirchlicher Hintergrund</li>
                            <li>• DSG-EKD Expertise</li>
                            <li>• Referenzen prüfen</li>
                            <li>• Zertifizierungen</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-purple-600" />
                        Kontinuierliches Monitoring
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">KPIs definieren</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Anzahl Datenschutzvorfälle</li>
                            <li>• Bearbeitungszeit Betroffenenanfragen</li>
                            <li>• Schulungsquote</li>
                            <li>• TOM-Compliance-Rate</li>
                          </ul>
                        </div>
                        
                        <div className="bg-indigo-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Monitoring-Tools</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Datenschutz-Dashboard</li>
                            <li>• Compliance-Tracking</li>
                            <li>• Risiko-Heatmaps</li>
                            <li>• Trend-Analysen</li>
                          </ul>
                        </div>
                        
                        <div className="bg-cyan-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Reporting</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Monatliche Statusberichte</li>
                            <li>• Quartalsweise Management-Reports</li>
                            <li>• Jährliche Compliance-Reviews</li>
                            <li>• Ad-hoc Incident-Reports</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <TaskCard
                  id="audit-framework"
                  title="Audit-Framework etablieren"
                  description="Entwickeln Sie ein systematisches Framework für interne und externe Datenschutz-Audits in Ihrer Gemeinde."
                  difficulty="hard"
                />

                <TaskCard
                  id="compliance-dashboard"
                  title="Compliance-Monitoring-System einrichten"
                  description="Implementieren Sie ein System zur kontinuierlichen Überwachung und Messung der Datenschutz-Compliance."
                  difficulty="medium"
                />
              </motion.div>
            </section>

            {/* Continuous Compliance Review Section */}
            <section id="compliance-ueberpruefung" ref={el => sectionRefs.current['compliance-ueberpruefung'] = el} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <RotateCcw className="w-8 h-8 text-purple-400" />
                  Kontinuierliche Compliance-Überprüfung
                </h2>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Lebendiger Datenschutz durch kontinuierliche Verbesserung</h3>
                    <div className="bg-cyan-50 border-l-4 border-cyan-500 p-4 mb-6">
                      <p className="text-cyan-800 mb-2">
                        <strong>Dynamischer Prozess:</strong> Datenschutz ist kein einmaliges Projekt, sondern ein 
                        kontinuierlicher Verbesserungsprozess. Regelmäßige Überprüfungen stellen sicher, dass 
                        Ihre DSG-EKD-Compliance aktuell und wirksam bleibt.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3 text-blue-600">Überprüfungszyklen</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Tägliche Routine-Checks</li>
                          <li>• Wöchentliche Status-Reviews</li>
                          <li>• Monatliche Compliance-Berichte</li>
                          <li>• Quartalsweise Management-Reviews</li>
                          <li>• Halbjährliche Risikobewertungen</li>
                          <li>• Jährliche Gesamt-Audits</li>
                          <li>• Anlassbezogene Sonderprüfungen</li>
                          <li>• Kontinuierliches Monitoring</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3 text-orange-600">Verbesserungsmaßnahmen</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Prozessoptimierung</li>
                          <li>• Technologie-Updates</li>
                          <li>• Schulungsanpassungen</li>
                          <li>• Richtlinien-Updates</li>
                          <li>• Neue Compliance-Tools</li>
                          <li>• Organisatorische Anpassungen</li>
                          <li>• Stakeholder-Feedback-Integration</li>
                          <li>• Best-Practice-Übernahme</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <Activity className="w-5 h-5 text-blue-600" />
                        Performance-Monitoring
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Key Performance Indicators</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Compliance-Score (0-100%)</li>
                            <li>• Incident-Response-Zeit</li>
                            <li>• Schulungsabschlussrate</li>
                            <li>• Betroffenenanfragen-Bearbeitungszeit</li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Qualitätsindikatoren</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Vollständigkeit der Dokumentation</li>
                            <li>• Aktualität der Verfahrensanweisungen</li>
                            <li>• Mitarbeiter-Zufriedenheit</li>
                            <li>• Stakeholder-Feedback</li>
                          </ul>
                        </div>
                        
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Risikoindikatoren</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Anzahl kritischer Findings</li>
                            <li>• Trend der Sicherheitsvorfälle</li>
                            <li>• Compliance-Gaps</li>
                            <li>• Externe Bedrohungslandschaft</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <PieChart className="w-5 h-5 text-green-600" />
                        Compliance-Dashboard
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Real-Time-Übersicht</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Aktuelle Compliance-Bewertung</li>
                            <li>• Offene Maßnahmen</li>
                            <li>• Anstehende Deadlines</li>
                            <li>• Status kritischer Kontrollen</li>
                          </ul>
                        </div>
                        
                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Trend-Analyse</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Entwicklung über Zeit</li>
                            <li>• Vergleich zu Zielvorgaben</li>
                            <li>• Benchmarking mit Branche</li>
                            <li>• Prognose-Modelle</li>
                          </ul>
                        </div>
                        
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Alarmierung</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Automatische Benachrichtigungen</li>
                            <li>• Eskalations-Workflows</li>
                            <li>• Deadline-Erinnerungen</li>
                            <li>• Critical-Issue-Alerts</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
                      <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                        <LineChart className="w-5 h-5 text-purple-600" />
                        Continuous Improvement
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">PDCA-Zyklus</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Plan: Ziele und Maßnahmen</li>
                            <li>• Do: Umsetzung der Maßnahmen</li>
                            <li>• Check: Überwachung und Messung</li>
                            <li>• Act: Verbesserung und Anpassung</li>
                          </ul>
                        </div>
                        
                        <div className="bg-indigo-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Innovation</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Neue Technologien evaluieren</li>
                            <li>• Best Practices recherchieren</li>
                            <li>• Pilot-Projekte durchführen</li>
                            <li>• Erfolgreiche Ansätze skalieren</li>
                          </ul>
                        </div>
                        
                        <div className="bg-cyan-50 p-3 rounded-lg">
                          <h4 className="font-medium text-sm mb-2">Feedback-Kultur</h4>
                          <ul className="text-xs space-y-1">
                            <li>• Mitarbeiter-Suggestions</li>
                            <li>• Externe Beratung</li>
                            <li>• Peer-Reviews</li>
                            <li>• Lessons-Learned-Sessions</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Jahreszyklusplanung für DSG-EKD Compliance</h3>
                    
                    <div className="grid md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-3 text-blue-700">Q1: Planung & Assessment</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Jahresplanung Datenschutz</li>
                          <li>• Budget-Freigabe</li>
                          <li>• Risikobewertung Update</li>
                          <li>• Zielvereinbarungen</li>
                          <li>• Externe Audit-Vorbereitung</li>
                          <li>• Schulungsplan 2024</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-3 text-green-700">Q2: Umsetzung & Schulung</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Hauptschulungsphase</li>
                          <li>• TOM-Updates implementieren</li>
                          <li>• Prozessoptimierungen</li>
                          <li>• Halbjahres-Review</li>
                          <li>• Vendor-Assessments</li>
                          <li>• Dokumentations-Updates</li>
                        </ul>
                      </div>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-3 text-yellow-700">Q3: Monitoring & Testing</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Internes Audit</li>
                          <li>• Penetration Testing</li>
                          <li>• Incident-Response-Übung</li>
                          <li>• Compliance-Check</li>
                          <li>• Mitarbeiter-Feedback</li>
                          <li>• Technology-Refresh</li>
                        </ul>
                      </div>
                      
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-3 text-orange-700">Q4: Review & Planning</h4>
                        <ul className="space-y-2 text-sm">
                          <li>• Jahresabschluss-Audit</li>
                          <li>• Lessons Learned</li>
                          <li>• Folgejahr-Planung</li>
                          <li>• Budget-Antrag</li>
                          <li>• Strategische Ausrichtung</li>
                          <li>• Stakeholder-Kommunikation</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-indigo-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-3">Kontinuierliche Aktivitäten (ganzjährig)</h4>
                      <div className="grid md:grid-cols-3 gap-4">
                        <ul className="space-y-2 text-sm">
                          <li>• Tägliches Monitoring</li>
                          <li>• Wöchentliche KPI-Reports</li>
                          <li>• Monatliche Compliance-Checks</li>
                          <li>• Quarterly Business Reviews</li>
                        </ul>
                        <ul className="space-y-2 text-sm">
                          <li>• Incident Response</li>
                          <li>• Betroffenenanfragen</li>
                          <li>• Vendor Management</li>
                          <li>• Change Management</li>
                        </ul>
                        <ul className="space-y-2 text-sm">
                          <li>• Awareness-Kampagnen</li>
                          <li>• Continuous Training</li>
                          <li>• Process Optimization</li>
                          <li>• Innovation & Research</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Governance und Verantwortlichkeiten</h3>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-3 text-blue-700">Steuerungsebene</h4>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Kirchenvorstand:</strong> Strategische Ausrichtung</li>
                          <li><strong>Pfarramt:</strong> Operative Leitung</li>
                          <li><strong>DSB:</strong> Fachliche Steuerung</li>
                          <li><strong>Compliance-Committee:</strong> Oversight</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-3 text-green-700">Operative Ebene</h4>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Verwaltung:</strong> Tägliche Umsetzung</li>
                          <li><strong>IT-Verantwortliche:</strong> Technische Maßnahmen</li>
                          <li><strong>Mitarbeiter:</strong> Compliance im Arbeitsalltag</li>
                          <li><strong>Ehrenamtliche:</strong> Bewusste Datenverarbeitung</li>
                        </ul>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-medium mb-3 text-purple-700">Kontrollbebene</h4>
                        <ul className="space-y-2 text-sm">
                          <li><strong>Interne Revision:</strong> Unabhängige Prüfung</li>
                          <li><strong>Externe Auditoren:</strong> Objektive Bewertung</li>
                          <li><strong>Aufsichtsbehörde:</strong> Regulatorische Oversight</li>
                          <li><strong>Betroffene:</strong> Stakeholder-Feedback</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <TaskCard
                  id="compliance-monitoring-system"
                  title="Kontinuierliches Monitoring-System etablieren"
                  description="Implementieren Sie ein umfassendes System zur kontinuierlichen Überwachung und Verbesserung Ihrer DSG-EKD-Compliance."
                  difficulty="hard"
                />

                <TaskCard
                  id="annual-compliance-cycle"
                  title="Jährlichen Compliance-Zyklus definieren"
                  description="Erstellen Sie einen strukturierten Jahresplan mit allen notwendigen Compliance-Aktivitäten und Meilensteinen."
                  difficulty="medium"
                />
              </motion.div>
            </section>
            
            {/* Pastoral Confidentiality Section */}
            <section id="seelsorgegeheimnis" ref={el => sectionRefs.current['seelsorgegeheimnis'] = el} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Lock className="w-8 h-8 text-purple-400" />
                  Seelsorgegeheimnis
                </h2>
                
                <Card className="mb-6">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-4">Absoluter Schutz seelsorgerlicher Kommunikation</h3>
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                      <p className="text-red-800 font-medium mb-2">Wichtiger Hinweis:</p>
                      <p className="text-red-700 text-sm">
                        Das Seelsorgegeheimnis genießt absoluten Schutz und ist von allen anderen 
                        datenschutzrechtlichen Bestimmungen ausgenommen.
                      </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Geschützte Bereiche</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Seelsorgerische Gespräche
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Beichtgespräche
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Seelsorgerliche Korrespondenz
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500" />
                            Notizen zu Seelsorgegesprächen
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-3">Praktische Umsetzung</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                            Separate Aufbewahrung
                          </li>
                          <li className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                            Verschlüsselte Speicherung
                          </li>
                          <li className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                            Beschränkter Zugriff
                          </li>
                          <li className="flex items-center gap-2">
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                            Sichere Vernichtung
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <TaskCard
                  id="pastoral-confidentiality-procedures"
                  title="Seelsorgegeheimnis-Verfahren etablieren"
                  description="Entwickeln Sie Verfahren zum Schutz des Seelsorgegeheimnisses in allen technischen und organisatorischen Prozessen."
                  difficulty="hard"
                />
              </motion.div>
            </section>

            {/* Implementation Section */}
            <section id="implementierung" ref={el => sectionRefs.current['implementierung'] = el} className="mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <TrendingUp className="w-8 h-8 text-purple-400" />
                  Implementierungsroadmap
                </h2>
                
                <div className="space-y-6">
                  {/* Phase 1 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold">
                          1
                        </div>
                        <h3 className="font-bold text-lg">Phase 1: Grundlagen (Wochen 1-4)</h3>
                        <Badge>4 Wochen</Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-3">Aufgaben</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Bestandsaufnahme aller Datenverarbeitungen</li>
                            <li>• Identifikation kritischer Datenschutzbereiche</li>
                            <li>• Ernennung des Datenschutzbeauftragten</li>
                            <li>• Erste Mitarbeiterschulung</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-3">Deliverables</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Datenverarbeitungs-Inventar</li>
                            <li>• Datenschutz-Organisationsstruktur</li>
                            <li>• Schulungsplan</li>
                            <li>• Projektplan für weitere Phasen</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phase 2 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                          2
                        </div>
                        <h3 className="font-bold text-lg">Phase 2: Dokumentation (Wochen 5-12)</h3>
                        <Badge>8 Wochen</Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-3">Aufgaben</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Verarbeitungsverzeichnis erstellen</li>
                            <li>• Datenschutzerklärungen verfassen</li>
                            <li>• Betroffenenrechte-Verfahren definieren</li>
                            <li>• Auftragsverarbeitungsverträge abschließen</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-3">Deliverables</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Vollständiges Verarbeitungsverzeichnis</li>
                            <li>• Datenschutzerklärungen</li>
                            <li>• Betroffenenrechte-Handbuch</li>
                            <li>• AV-Verträge</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phase 3 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                          3
                        </div>
                        <h3 className="font-bold text-lg">Phase 3: Technische Umsetzung (Wochen 13-20)</h3>
                        <Badge>8 Wochen</Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-3">Aufgaben</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Technische Schutzmaßnahmen implementieren</li>
                            <li>• Zugriffskontrollsystem einrichten</li>
                            <li>• Backup- und Verschlüsselungslösungen</li>
                            <li>• Incident-Response-Verfahren etablieren</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-3">Deliverables</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• TOM-Dokumentation</li>
                            <li>• Zugriffskontrollrichtlinien</li>
                            <li>• Backup-Konzept</li>
                            <li>• Incident-Response-Plan</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phase 4 */}
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                          4
                        </div>
                        <h3 className="font-bold text-lg">Phase 4: Monitoring & Optimierung (Wochen 21-24)</h3>
                        <Badge>4 Wochen</Badge>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium mb-3">Aufgaben</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Compliance-Monitoring einrichten</li>
                            <li>• Regelmäßige Audits planen</li>
                            <li>• Kontinuierliche Schulungen</li>
                            <li>• Verbesserungsprozesse etablieren</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium mb-3">Deliverables</h4>
                          <ul className="space-y-2 text-sm">
                            <li>• Monitoring-Dashboard</li>
                            <li>• Audit-Zeitplan</li>
                            <li>• Schulungsprogramm</li>
                            <li>• KVP-Verfahren</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8 p-6 bg-purple-50 rounded-lg">
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <Lightbulb className="w-5 h-5 text-purple-600" />
                    Erfolgsfaktoren für die Implementierung
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Klare Kommunikation der Datenschutzziele</li>
                      <li>• Einbindung aller Mitarbeiter und Ehrenamtlichen</li>
                      <li>• Regelmäßige Schulungen und Sensibilisierung</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>• Kontinuierliche Überprüfung und Anpassung</li>
                      <li>• Dokumentation aller Prozesse</li>
                      <li>• Externe Unterstützung bei Bedarf</li>
                    </ul>
                  </div>
                </div>

                <TaskCard
                  id="implementation-roadmap"
                  title="Individuelle Roadmap erstellen"
                  description="Passen Sie die Implementierungsroadmap an die spezifischen Bedürfnisse und Ressourcen Ihrer Kirchengemeinde an."
                  difficulty="hard"
                />
              </motion.div>
            </section>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-white/20">
              <Button variant="outline" className="text-white border-white/20 hover:bg-white/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zu Compliance
              </Button>
              
              <div className="flex gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Download className="w-4 h-4 mr-2" />
                  PDF herunterladen
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Beratung anfragen
                </Button>
              </div>
            </div>

            {/* Progress Summary */}
            <Card className="mt-8">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-lg">Ihr Fortschritt</h3>
                  <Badge className={completedTasks.length === 0 ? 'bg-gray-100' : 'bg-green-100 text-green-800'}>
                    {completedTasks.length} von {sections.length} Aufgaben
                  </Badge>
                </div>
                <Progress value={(completedTasks.length / sections.length) * 100} className="mb-4" />
                <p className="text-sm text-gray-600">
                  {completedTasks.length === sections.length 
                    ? "Herzlichen Glückwunsch! Sie haben alle Implementierungsaufgaben abgeschlossen."
                    : `Sie haben ${Math.round((completedTasks.length / sections.length) * 100)}% der DSG-EKD Implementierung abgeschlossen.`
                  }
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}