import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Shield, 
  CheckCircle, 
  AlertTriangle, 
  Users, 
  Clock, 
  Download,
  FileText,
  Scale,
  Lock,
  Calendar,
  Camera,
  Mail,
  CreditCard,
  Award,
  UserCheck,
  Archive,
  Settings,
  MessageSquare,
  Heart,
  HandshakeIcon,
  Globe,
  ShieldCheck,
  Activity,
  Briefcase,
  Euro,
  ChevronRight,
  ChevronDown,
  CheckSquare,
  Square,
  TrendingUp,
  UserPlus,
  FileSearch,
  Database,
  Key,
  AlertCircle,
  BookOpen,
  Zap,
  Target,
  HeartHandshake,
  Phone
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const DsgvoVereineComprehensive: React.FC = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedScenarios, setExpandedScenarios] = useState<string[]>([]);
  const [completedItems, setCompletedItems] = useState<string[]>([]);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const navigationItems = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'member-data', label: 'Mitgliederdaten', icon: Users },
    { id: 'events', label: 'Veranstaltungen', icon: Calendar },
    { id: 'communication', label: 'Kommunikation', icon: Mail },
    { id: 'finances', label: 'Finanzen', icon: Euro },
    { id: 'implementation', label: 'Umsetzung', icon: Settings },
    { id: 'checklist', label: 'Checkliste', icon: CheckSquare },
    { id: 'resources', label: 'Ressourcen', icon: BookOpen }
  ];

  const complianceStats = [
    { label: 'Betroffene Vereine', value: '600.000+', trend: 'in Deutschland' },
    { label: 'Durchschn. Bußgeld', value: '12.500€', trend: 'bei Verstößen' },
    { label: 'Umsetzungszeit', value: '3-6', trend: 'Monate' }
  ];

  const scenarioTemplates = {
    memberRegistration: `
// Mitgliederregistrierung DSGVO-konform
const memberRegistration = {
  // Einwilligungserklärung
  consent: {
    dataProcessing: "Ich willige ein, dass meine Daten...",
    newsletter: "Ich möchte den Newsletter erhalten",
    photos: "Ich erlaube Fotos bei Veranstaltungen"
  },
  
  // Nur notwendige Daten erheben
  requiredData: {
    name: true,
    email: true,
    phone: false, // optional
    birthdate: true // für Jugendschutz
  },
  
  // Speicherdauer definieren
  retention: {
    activeMember: "Dauer der Mitgliedschaft",
    inactiveMember: "10 Jahre nach Austritt",
    newsletter: "Bis zum Widerruf"
  }
};`,
    
    eventPhotography: `
// Fotografie bei Vereinsveranstaltungen
const eventPhotoPolicy = {
  // Vor der Veranstaltung
  beforeEvent: {
    information: "Hinweis auf Fotoaufnahmen",
    optOut: "Widerspruchsmöglichkeit anbieten",
    badges: "Keine-Fotos-Buttons bereitstellen"
  },
  
  // Während der Veranstaltung
  duringEvent: {
    photographer: "Erkennbar machen",
    respect: "Keine-Fotos-Zonen einrichten",
    focus: "Übersichtsaufnahmen bevorzugen"
  },
  
  // Nach der Veranstaltung
  afterEvent: {
    review: "Bilder vor Veröffentlichung prüfen",
    consent: "Bei Porträts Einwilligung einholen",
    deletion: "Löschfristen beachten"
  }
};`,

    volunteerManagement: `
// Ehrenamtlichen-Verwaltung
const volunteerDataHandling = {
  // Datenerhebung
  collection: {
    purpose: "Nur für Vereinszwecke",
    necessity: "Datensparsamkeit beachten",
    transparency: "Klare Information über Nutzung"
  },
  
  // Zugriffskontrolle
  access: {
    needToKnow: "Nur relevante Personen",
    roles: "Klare Rechtevergabe",
    documentation: "Zugriffe protokollieren"
  },
  
  // Schulung
  training: {
    basics: "DSGVO-Grundlagen vermitteln",
    practice: "Praktische Beispiele zeigen",
    updates: "Regelmäßige Auffrischung"
  }
};`
  };

  const checklistCategories = [
    {
      title: 'Rechtliche Grundlagen',
      items: [
        { id: 'rl1', text: 'Datenschutzbeauftragten bestellen (bei Bedarf)', required: false },
        { id: 'rl2', text: 'Verzeichnis von Verarbeitungstätigkeiten erstellen', required: true },
        { id: 'rl3', text: 'Datenschutzerklärung für Website erstellen', required: true },
        { id: 'rl4', text: 'Impressum aktualisieren', required: true },
        { id: 'rl5', text: 'Auftragsverarbeitungsverträge abschließen', required: true }
      ]
    },
    {
      title: 'Mitgliederverwaltung',
      items: [
        { id: 'mv1', text: 'Einwilligungserklärungen einholen', required: true },
        { id: 'mv2', text: 'Mitgliederdatenbank sichern', required: true },
        { id: 'mv3', text: 'Löschkonzept entwickeln', required: true },
        { id: 'mv4', text: 'Auskunftsverfahren etablieren', required: true },
        { id: 'mv5', text: 'Datenportabilität gewährleisten', required: false }
      ]
    },
    {
      title: 'Kommunikation',
      items: [
        { id: 'ko1', text: 'Newsletter-Anmeldung Double-Opt-In', required: true },
        { id: 'ko2', text: 'Abmeldemöglichkeit in jedem Newsletter', required: true },
        { id: 'ko3', text: 'WhatsApp-Gruppen prüfen', required: false },
        { id: 'ko4', text: 'E-Mail-Verteiler verschlüsseln', required: false },
        { id: 'ko5', text: 'Social Media Richtlinien erstellen', required: false }
      ]
    },
    {
      title: 'Veranstaltungen',
      items: [
        { id: 've1', text: 'Fotohinweise bei Events aushängen', required: true },
        { id: 've2', text: 'Einwilligung für Bildaufnahmen', required: true },
        { id: 've3', text: 'Teilnehmerlisten sicher verwahren', required: true },
        { id: 've4', text: 'Anmeldeformulare DSGVO-konform', required: true },
        { id: 've5', text: 'Gästelisten nach Event löschen', required: true }
      ]
    },
    {
      title: 'Technische Maßnahmen',
      items: [
        { id: 'tm1', text: 'Sichere Passwörter einführen', required: true },
        { id: 'tm2', text: 'Regelmäßige Backups durchführen', required: true },
        { id: 'tm3', text: 'Verschlüsselung aktivieren', required: true },
        { id: 'tm4', text: 'Zugriffsrechte dokumentieren', required: true },
        { id: 'tm5', text: 'Alte Daten sicher löschen', required: true }
      ]
    }
  ];

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

  const toggleScenario = (id: string) => {
    setExpandedScenarios(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const toggleChecklistItem = (itemId: string) => {
    setCompletedItems(prev =>
      prev.includes(itemId)
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  const calculateProgress = () => {
    const totalItems = checklistCategories.reduce(
      (sum, category) => sum + category.items.length, 
      0
    );
    return Math.round((completedItems.length / totalItems) * 100);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <Header />
      
      {/* Hero Section mit Parallax */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-white via-gray-50 to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/20 py-20 md:py-28 overflow-hidden">
        {/* Animierte Hintergrund-Blobs */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" />
        </div>

        <motion.div 
          style={{ y, opacity }}
          className="container px-4"
        >
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge variant="outline" className="mb-4 px-4 py-2 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800">
                <Users className="h-4 w-4 mr-2" />
                DSGVO für Vereine & Verbände
              </Badge>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                DSGVO-Compliance
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">
                für Ihren Verein
              </span>
            </motion.h1>

            <motion.p 
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Schützen Sie Mitgliederdaten rechtssicher und vermeiden Sie Bußgelder. 
              Mit unserer Expertise machen wir DSGVO-Compliance für Vereine einfach und bezahlbar.
            </motion.p>

            <motion.div 
              className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                <span>Für alle Vereinsgrößen</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                <span>Praxiserprobte Lösungen</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CheckCircle className="h-5 w-5 text-emerald-600" />
                <span>Rechtssicher & aktuell</span>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <HeartHandshake className="h-5 w-5 mr-2" />
                Kostenlose Erstberatung
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950/30"
              >
                <Download className="h-5 w-5 mr-2" />
                DSGVO-Guide für Vereine
              </Button>
            </motion.div>
          </div>

          {/* Compliance Dashboard */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl border-2 border-emerald-200 dark:border-emerald-800">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4 text-center text-gray-900 dark:text-white">
                  Aktuelle Compliance-Statistiken für Vereine
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {complianceStats.map((stat, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                        {stat.value}
                      </div>
                      <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                        {stat.trend}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="container px-4">
          <nav className="flex items-center justify-start md:justify-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
                  activeSection === item.id
                    ? "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300"
                    : "text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto space-y-20">
            
            {/* Überblick Section */}
            <section id="overview" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  DSGVO im Vereinswesen - Was Sie wissen müssen
                </h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="border-l-4 border-emerald-500 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Shield className="h-6 w-6 text-emerald-600" />
                        Kernverpflichtungen für Vereine
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Rechtmäßige Datenverarbeitung</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Mitgliederdaten nur mit Rechtsgrundlage oder Einwilligung verarbeiten
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Transparenz & Information</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Mitglieder über Datenverarbeitung umfassend informieren
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Datensicherheit</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Angemessene technische und organisatorische Maßnahmen
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                          <div>
                            <p className="font-medium">Betroffenenrechte</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Auskunft, Löschung und Berichtigung ermöglichen
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-teal-500 hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <AlertTriangle className="h-6 w-6 text-orange-600" />
                        Besondere Herausforderungen
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2">
                          <AlertCircle className="h-5 w-5" />
                          Ehrenamtliche Strukturen
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Oft fehlen Ressourcen und Expertise für professionellen Datenschutz
                        </p>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
                          <Users className="h-5 w-5" />
                          Vielfältige Datenverarbeitung
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Mitglieder, Spender, Veranstaltungen, Newsletter - alles muss DSGVO-konform sein
                        </p>
                      </div>
                      <div className="bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4">
                        <h4 className="font-semibold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center gap-2">
                          <Target className="h-5 w-5" />
                          Die Lösung
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Praktische, vereinsspezifische Vorlagen und Prozesse etablieren
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </section>

            {/* Mitgliederdaten Section */}
            <section id="member-data" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Mitgliederdatenverwaltung DSGVO-konform
                </h2>

                <div className="grid lg:grid-cols-3 gap-6">
                  <Card className="col-span-2">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <UserCheck className="h-6 w-6 text-emerald-600" />
                        Rechtskonforme Mitgliederaufnahme
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div 
                        className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg cursor-pointer"
                        onClick={() => toggleScenario('memberRegistration')}
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-emerald-800 dark:text-emerald-200">
                            Praxis-Beispiel: Digitales Anmeldeformular
                          </h4>
                          {expandedScenarios.includes('memberRegistration') ? (
                            <ChevronDown className="h-5 w-5 text-emerald-600" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-emerald-600" />
                          )}
                        </div>
                        {expandedScenarios.includes('memberRegistration') && (
                          <div className="mt-4">
                            <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                              <pre className="text-sm">
                                <code>{scenarioTemplates.memberRegistration}</code>
                              </pre>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Notwendige Einwilligungen</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckSquare className="h-5 w-5 text-emerald-600 mt-0.5" />
                              <span className="text-sm">Grundlegende Datenverarbeitung für Vereinszwecke</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckSquare className="h-5 w-5 text-emerald-600 mt-0.5" />
                              <span className="text-sm">Newsletter-Versand (separates Opt-In)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckSquare className="h-5 w-5 text-emerald-600 mt-0.5" />
                              <span className="text-sm">Veröffentlichung von Fotos</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckSquare className="h-5 w-5 text-emerald-600 mt-0.5" />
                              <span className="text-sm">Weitergabe an Dachverbände</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Speicherfristen beachten</h4>
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-gray-600" />
                                <span><strong>Aktive Mitglieder:</strong> Dauer der Mitgliedschaft</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-gray-600" />
                                <span><strong>Ausgeschiedene:</strong> 10 Jahre (Aufbewahrungspflicht)</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-gray-600" />
                                <span><strong>Spendendaten:</strong> 10 Jahre (Steuerrecht)</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Clock className="h-4 w-4 text-gray-600" />
                                <span><strong>Newsletter:</strong> Bis zum Widerruf</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Database className="h-6 w-6 text-teal-600" />
                        Datenkategorien
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 bg-green-50 dark:bg-green-950/30 rounded-lg">
                          <h5 className="font-semibold text-green-800 dark:text-green-200 mb-1">
                            Stammdaten
                          </h5>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            Name, Adresse, Geburtsdatum, Eintrittsdatum
                          </p>
                        </div>
                        <div className="p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg">
                          <h5 className="font-semibold text-blue-800 dark:text-blue-200 mb-1">
                            Kontaktdaten
                          </h5>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            E-Mail, Telefon, Mobilnummer
                          </p>
                        </div>
                        <div className="p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg">
                          <h5 className="font-semibold text-purple-800 dark:text-purple-200 mb-1">
                            Vereinsdaten
                          </h5>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            Mitgliedsnummer, Beitragsgruppe, Funktionen
                          </p>
                        </div>
                        <div className="p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg">
                          <h5 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-1">
                            Besondere Kategorien
                          </h5>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            Gesundheitsdaten nur mit expliziter Einwilligung
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </section>

            {/* Veranstaltungen Section */}
            <section id="events" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Veranstaltungen & Fotografie
                </h2>

                <Card className="border-2 border-emerald-200 dark:border-emerald-800">
                  <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30">
                    <CardTitle className="flex items-center gap-3">
                      <Camera className="h-6 w-6 text-emerald-600" />
                      Rechtssichere Event-Fotografie
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div 
                      className="mb-6 p-4 bg-teal-50 dark:bg-teal-950/30 rounded-lg cursor-pointer"
                      onClick={() => toggleScenario('eventPhotography')}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-teal-800 dark:text-teal-200">
                          Implementierung: Foto-Policy für Vereinsveranstaltungen
                        </h4>
                        {expandedScenarios.includes('eventPhotography') ? (
                          <ChevronDown className="h-5 w-5 text-teal-600" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-teal-600" />
                        )}
                      </div>
                      {expandedScenarios.includes('eventPhotography') && (
                        <div className="mt-4">
                          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm">
                              <code>{scenarioTemplates.eventPhotography}</code>
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Calendar className="h-5 w-5 text-emerald-600" />
                          Vor der Veranstaltung
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-emerald-600 mt-0.5" />
                            <span>Foto-Hinweise in Einladung</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-emerald-600 mt-0.5" />
                            <span>Widerspruchsmöglichkeit anbieten</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-emerald-600 mt-0.5" />
                            <span>Keine-Fotos-Buttons vorbereiten</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-teal-50 dark:bg-teal-950/30 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <Activity className="h-5 w-5 text-teal-600" />
                          Während der Veranstaltung
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-teal-600 mt-0.5" />
                            <span>Sichtbare Hinweisschilder</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-teal-600 mt-0.5" />
                            <span>Fotograf erkennbar machen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-teal-600 mt-0.5" />
                            <span>Keine-Foto-Zonen einrichten</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-cyan-50 dark:bg-cyan-950/30 rounded-lg p-4">
                        <h4 className="font-semibold mb-2 flex items-center gap-2">
                          <FileSearch className="h-5 w-5 text-cyan-600" />
                          Nach der Veranstaltung
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-cyan-600 mt-0.5" />
                            <span>Bilder vor Veröffentlichung prüfen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-cyan-600 mt-0.5" />
                            <span>Bei Porträts nachfragen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-cyan-600 mt-0.5" />
                            <span>Löschfristen dokumentieren</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5" />
                        Wichtiger Hinweis: Minderjährige
                      </h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Bei Fotos von Kindern und Jugendlichen ist besondere Vorsicht geboten. 
                        Einwilligung beider Elternteile erforderlich, keine Einzelaufnahmen ohne explizite Erlaubnis.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Kommunikation Section */}
            <section id="communication" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Vereinskommunikation DSGVO-konform
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <Mail className="h-6 w-6 text-emerald-600" />
                        E-Mail & Newsletter
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                        <h4 className="font-semibold mb-2">Double-Opt-In Verfahren</h4>
                        <ol className="space-y-2 text-sm list-decimal list-inside">
                          <li>Anmeldung über Formular</li>
                          <li>Bestätigungs-E-Mail versenden</li>
                          <li>Klick auf Bestätigungslink</li>
                          <li>Dokumentation der Einwilligung</li>
                        </ol>
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="font-semibold">Newsletter-Pflichtangaben</h4>
                        <ul className="space-y-1 text-sm">
                          <li className="flex items-center gap-2">
                            <CheckSquare className="h-4 w-4 text-emerald-600" />
                            <span>Impressum mit vollständigen Angaben</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckSquare className="h-4 w-4 text-emerald-600" />
                            <span>Abmeldelink in jeder E-Mail</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckSquare className="h-4 w-4 text-emerald-600" />
                            <span>Datenschutzhinweis</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <CheckSquare className="h-4 w-4 text-emerald-600" />
                            <span>Keine Weitergabe von E-Mail-Adressen</span>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <MessageSquare className="h-6 w-6 text-teal-600" />
                        Messenger & Social Media
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="p-4 bg-red-50 dark:bg-red-950/30 rounded-lg">
                        <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5" />
                          WhatsApp-Gruppen
                        </h4>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                          Problematisch wegen Datenweitergabe an Facebook/Meta
                        </p>
                        <ul className="space-y-1 text-sm">
                          <li>• Einwilligung aller Teilnehmer erforderlich</li>
                          <li>• Alternative: Signal oder Threema</li>
                          <li>• Broadcast-Listen statt Gruppen nutzen</li>
                        </ul>
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-semibold">Social Media Richtlinien</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Globe className="h-4 w-4 text-teal-600 mt-0.5" />
                            <div>
                              <strong>Facebook/Instagram:</strong>
                              <span className="block text-gray-600 dark:text-gray-400">
                                Keine Mitgliederlisten veröffentlichen
                              </span>
                            </div>
                          </li>
                          <li className="flex items-start gap-2">
                            <Globe className="h-4 w-4 text-teal-600 mt-0.5" />
                            <div>
                              <strong>Vereinswebsite:</strong>
                              <span className="block text-gray-600 dark:text-gray-400">
                                Cookie-Banner und Datenschutzerklärung
                              </span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </section>

            {/* Finanzen Section */}
            <section id="finances" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Finanzdaten & Spendenverwaltung
                </h2>

                <Card className="border-2 border-emerald-200 dark:border-emerald-800">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-3">
                          <CreditCard className="h-8 w-8 text-emerald-600" />
                          <h3 className="text-xl font-semibold">Mitgliedsbeiträge</h3>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-emerald-600 mt-0.5" />
                            <span>SEPA-Mandate sicher aufbewahren</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-emerald-600 mt-0.5" />
                            <span>Bankdaten verschlüsselt speichern</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-emerald-600 mt-0.5" />
                            <span>Zugriff nur für Kassenwart</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Heart className="h-8 w-8 text-teal-600" />
                          <h3 className="text-xl font-semibold">Spenderdaten</h3>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <FileText className="h-4 w-4 text-teal-600 mt-0.5" />
                            <span>Spendenquittungen 10 Jahre</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <FileText className="h-4 w-4 text-teal-600 mt-0.5" />
                            <span>Separate Einwilligung für Dankesbriefe</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <FileText className="h-4 w-4 text-teal-600 mt-0.5" />
                            <span>Keine Veröffentlichung ohne Erlaubnis</span>
                          </li>
                        </ul>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3 mb-3">
                          <Euro className="h-8 w-8 text-cyan-600" />
                          <h3 className="text-xl font-semibold">Buchführung</h3>
                        </div>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <Archive className="h-4 w-4 text-cyan-600 mt-0.5" />
                            <span>Belege 10 Jahre aufbewahren</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Archive className="h-4 w-4 text-cyan-600 mt-0.5" />
                            <span>Personenbezogene Daten schwärzen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Archive className="h-4 w-4 text-cyan-600 mt-0.5" />
                            <span>Digitale Archivierung bevorzugen</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center gap-2">
                        <Key className="h-5 w-5 text-emerald-600" />
                        Zugriffsberechtigungen
                      </h4>
                      <div className="grid md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <strong>Vorstand:</strong> Vollzugriff auf alle Finanzdaten
                        </div>
                        <div>
                          <strong>Kassenwart:</strong> Buchführung und Zahlungsverkehr
                        </div>
                        <div>
                          <strong>Kassenprüfer:</strong> Lesezugriff zur Prüfung
                        </div>
                        <div>
                          <strong>Mitglieder:</strong> Nur eigene Beitragsdaten
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Implementierung Section */}
            <section id="implementation" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Umsetzungsfahrplan für Ihren Verein
                </h2>

                <div className="grid md:grid-cols-4 gap-6">
                  <Card className="border-t-4 border-emerald-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <span className="flex items-center justify-center w-8 h-8 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-full font-bold text-sm">
                          1
                        </span>
                        Bestandsaufnahme
                      </CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Woche 1-2
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                          <span>Datenflüsse dokumentieren</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                          <span>Verarbeitungen auflisten</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5" />
                          <span>Risiken identifizieren</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-teal-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <span className="flex items-center justify-center w-8 h-8 bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 rounded-full font-bold text-sm">
                          2
                        </span>
                        Dokumentation
                      </CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Woche 3-4
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <FileText className="h-4 w-4 text-teal-600 mt-0.5" />
                          <span>Verarbeitungsverzeichnis</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FileText className="h-4 w-4 text-teal-600 mt-0.5" />
                          <span>Datenschutzerklärung</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <FileText className="h-4 w-4 text-teal-600 mt-0.5" />
                          <span>Einwilligungsvorlagen</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-cyan-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <span className="flex items-center justify-center w-8 h-8 bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 rounded-full font-bold text-sm">
                          3
                        </span>
                        Implementierung
                      </CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Monat 2-3
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Settings className="h-4 w-4 text-cyan-600 mt-0.5" />
                          <span>Prozesse anpassen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Settings className="h-4 w-4 text-cyan-600 mt-0.5" />
                          <span>Systeme absichern</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Settings className="h-4 w-4 text-cyan-600 mt-0.5" />
                          <span>Schulungen durchführen</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-t-4 border-indigo-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <span className="flex items-center justify-center w-8 h-8 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-full font-bold text-sm">
                          4
                        </span>
                        Kontrolle
                      </CardTitle>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Laufend
                      </p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <Activity className="h-4 w-4 text-indigo-600 mt-0.5" />
                          <span>Regelmäßige Audits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Activity className="h-4 w-4 text-indigo-600 mt-0.5" />
                          <span>Prozesse optimieren</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Activity className="h-4 w-4 text-indigo-600 mt-0.5" />
                          <span>Dokumentation pflegen</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Ehrenamtlichen-Management */}
                <Card className="mt-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <HandshakeIcon className="h-6 w-6 text-emerald-600" />
                      Ehrenamtliche einbinden
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div 
                      className="mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg cursor-pointer"
                      onClick={() => toggleScenario('volunteerManagement')}
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-emerald-800 dark:text-emerald-200">
                          Best Practice: Ehrenamtlichen-Schulung
                        </h4>
                        {expandedScenarios.includes('volunteerManagement') ? (
                          <ChevronDown className="h-5 w-5 text-emerald-600" />
                        ) : (
                          <ChevronRight className="h-5 w-5 text-emerald-600" />
                        )}
                      </div>
                      {expandedScenarios.includes('volunteerManagement') && (
                        <div className="mt-4">
                          <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                            <pre className="text-sm">
                              <code>{scenarioTemplates.volunteerManagement}</code>
                            </pre>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Schulungsinhalte</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-emerald-600" />
                            <span>DSGVO-Grundlagen verständlich erklärt</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-emerald-600" />
                            <span>Praktische Beispiele aus dem Vereinsalltag</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-emerald-600" />
                            <span>Dos and Don'ts im Umgang mit Daten</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-emerald-600" />
                            <span>Notfallplan bei Datenpannen</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3">Unterstützung bieten</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-center gap-2">
                            <Heart className="h-4 w-4 text-teal-600" />
                            <span>Ansprechpartner benennen</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Heart className="h-4 w-4 text-teal-600" />
                            <span>Einfache Checklisten bereitstellen</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Heart className="h-4 w-4 text-teal-600" />
                            <span>Regelmäßige Auffrischungen</span>
                          </li>
                          <li className="flex items-center gap-2">
                            <Heart className="h-4 w-4 text-teal-600" />
                            <span>Positive Fehlerkultur etablieren</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Interaktive Checkliste */}
            <section id="checklist" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Ihre DSGVO-Checkliste für Vereine
                </h2>

                <Card className="border-2 border-emerald-200 dark:border-emerald-800">
                  <CardHeader className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30">
                    <div className="flex items-center justify-between">
                      <CardTitle className="flex items-center gap-3">
                        <CheckSquare className="h-6 w-6 text-emerald-600" />
                        Fortschritt verfolgen
                      </CardTitle>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-emerald-600">
                          {calculateProgress()}%
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          abgeschlossen
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <Progress 
                      value={calculateProgress()} 
                      className="mb-8 h-3"
                    />

                    <div className="space-y-6">
                      {checklistCategories.map((category) => (
                        <div key={category.title}>
                          <h3 className="font-semibold text-lg mb-3 text-gray-900 dark:text-white">
                            {category.title}
                          </h3>
                          <div className="grid md:grid-cols-2 gap-3">
                            {category.items.map((item) => (
                              <div
                                key={item.id}
                                className={cn(
                                  "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all",
                                  completedItems.includes(item.id)
                                    ? "bg-emerald-50 dark:bg-emerald-950/30"
                                    : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                                )}
                                onClick={() => toggleChecklistItem(item.id)}
                              >
                                {completedItems.includes(item.id) ? (
                                  <CheckSquare className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                                ) : (
                                  <Square className="h-5 w-5 text-gray-400 flex-shrink-0" />
                                )}
                                <span className={cn(
                                  "text-sm",
                                  completedItems.includes(item.id) && "line-through text-gray-500"
                                )}>
                                  {item.text}
                                  {item.required && (
                                    <span className="text-red-500 ml-1">*</span>
                                  )}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg">
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        <strong>Hinweis:</strong> Mit <span className="text-red-500">*</span> markierte Punkte sind 
                        gesetzlich verpflichtend und sollten priorisiert werden.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Ressourcen Section */}
            <section id="resources" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
                  Hilfreiche Ressourcen & Downloads
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <FileText className="h-6 w-6 text-emerald-600" />
                        Vorlagen & Muster
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
                            <Download className="h-4 w-4 mr-2" />
                            Einwilligungserklärung Mitglieder
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
                            <Download className="h-4 w-4 mr-2" />
                            Datenschutzerklärung Website
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
                            <Download className="h-4 w-4 mr-2" />
                            Verarbeitungsverzeichnis
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-emerald-50 dark:hover:bg-emerald-950/30">
                            <Download className="h-4 w-4 mr-2" />
                            Foto-Einwilligung Events
                          </Button>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <BookOpen className="h-6 w-6 text-teal-600" />
                        Leitfäden & Guides
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-teal-50 dark:hover:bg-teal-950/30">
                            <FileText className="h-4 w-4 mr-2" />
                            DSGVO-Basics für Vereine
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-teal-50 dark:hover:bg-teal-950/30">
                            <FileText className="h-4 w-4 mr-2" />
                            Newsletter rechtssicher
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-teal-50 dark:hover:bg-teal-950/30">
                            <FileText className="h-4 w-4 mr-2" />
                            Mitgliederverwaltung Guide
                          </Button>
                        </li>
                        <li>
                          <Button variant="ghost" className="w-full justify-start hover:bg-teal-50 dark:hover:bg-teal-950/30">
                            <FileText className="h-4 w-4 mr-2" />
                            Notfallplan Datenpanne
                          </Button>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-lg">
                        <Zap className="h-6 w-6 text-cyan-600" />
                        Quick Links
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li>
                          <Link 
                            to="/tools/dsgvo-check"
                            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                          >
                            <ShieldCheck className="h-4 w-4" />
                            DSGVO-Quick-Check
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/beratung"
                            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                          >
                            <HeartHandshake className="h-4 w-4" />
                            Kostenlose Erstberatung
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/schulungen"
                            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                          >
                            <Award className="h-4 w-4" />
                            Vereinsschulungen
                          </Link>
                        </li>
                        <li>
                          <Link 
                            to="/faq/vereine"
                            className="flex items-center gap-2 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300"
                          >
                            <MessageSquare className="h-4 w-4" />
                            Häufige Fragen
                          </Link>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                {/* Notfall-Box */}
                <Card className="mt-8 border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-red-800 dark:text-red-200">
                      <AlertCircle className="h-6 w-6" />
                      Notfall: Datenpanne - Was tun?
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-red-700 dark:text-red-300 font-bold">1</span>
                        </div>
                        <h4 className="font-semibold text-sm mb-1">Dokumentieren</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Art, Umfang und Zeitpunkt festhalten
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-red-700 dark:text-red-300 font-bold">2</span>
                        </div>
                        <h4 className="font-semibold text-sm mb-1">Sichern</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Weitere Schäden verhindern
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-red-700 dark:text-red-300 font-bold">3</span>
                        </div>
                        <h4 className="font-semibold text-sm mb-1">Melden</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          72h an Aufsichtsbehörde
                        </p>
                      </div>
                      <div className="text-center">
                        <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2">
                          <span className="text-red-700 dark:text-red-300 font-bold">4</span>
                        </div>
                        <h4 className="font-semibold text-sm mb-1">Informieren</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Betroffene benachrichtigen
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

          </div>
        </div>
      </div>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 dark:from-emerald-950 dark:via-teal-900 dark:to-cyan-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <div className="container px-4 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <HeartHandshake className="h-16 w-16 text-white mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Machen Sie Ihren Verein DSGVO-fit!
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
              Schützen Sie Ihren Verein vor Bußgeldern und schaffen Sie Vertrauen bei Ihren Mitgliedern. 
              Wir begleiten Sie Schritt für Schritt zur vollständigen DSGVO-Compliance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-emerald-700 hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Phone className="h-5 w-5 mr-2" />
                Kostenlose Erstberatung vereinbaren
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-white border-white hover:bg-white/10"
              >
                <Download className="h-5 w-5 mr-2" />
                Vereins-Starterpaket anfordern
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Euro className="h-10 w-10 text-emerald-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Faire Preise
                </h3>
                <p className="text-emerald-100 text-sm">
                  Spezielle Konditionen für gemeinnützige Vereine
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="h-10 w-10 text-teal-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Vereinserfahrung
                </h3>
                <p className="text-teal-100 text-sm">
                  Über 500 Vereine erfolgreich beraten
                </p>
              </motion.div>

              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <Award className="h-10 w-10 text-cyan-300 mx-auto mb-3" />
                <h3 className="text-lg font-semibold text-white mb-2">
                  Zertifizierte Expertise
                </h3>
                <p className="text-cyan-100 text-sm">
                  TÜV-geprüfte Datenschutzbeauftragte
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DsgvoVereineComprehensive;