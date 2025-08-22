import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Gauge,
  AlertTriangle, 
  Shield, 
  FileText, 
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen,
  Euro,
  Calendar,
  Activity,
  Brain,
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
  Search,
  Package,
  Truck,
  AlertCircle,
  Cookie,
  MousePointer,
  BarChart,
  MessageSquare,
  Layers,
  GitBranch,
  RefreshCw,
  Upload,
  HardDrive,
  Network,
  Cpu,
  MemoryStick,
  Webhook,
  Terminal,
  Boxes,
  Construction,
  Wrench,
  Bot,
  CircuitBoard,
  Sparkles,
  Ban,
  CheckSquare,
  X,
  ChevronDown,
  ExternalLink,
  Timer,
  PieChart,
  LineChart,
  BarChart3,
  ShieldCheck,
  FileX,
  UserX,
  Square
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const KiRisikoklassifizierung = () => {
  // SEO Meta Information
  useEffect(() => {
    // Set document title
    document.title = 'KI-Risikoklassifizierung nach EU AI Act – Compliance Guide';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Verstehen Sie die 4 Risikokategorien des EU AI Acts. Praktischer Guide für Compliance-Anforderungen Ihres KI-Systems.');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = 'Verstehen Sie die 4 Risikokategorien des EU AI Acts. Praktischer Guide für Compliance-Anforderungen Ihres KI-Systems.';
      document.head.appendChild(newMeta);
    }

    // Set viewport meta tag
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const newViewport = document.createElement('meta');
      newViewport.name = 'viewport';
      newViewport.content = 'width=device-width, initial-scale=1';
      document.head.appendChild(newViewport);
    }

    return () => {
      // Cleanup function if needed
    };
  }, []);

  const [activeTab, setActiveTab] = useState('overview');
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const tabs = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'categories', label: 'Risikokategorien', icon: Gauge },
    { id: 'assessment', label: 'Bewertungsmethodik', icon: BarChart3 },
    { id: 'compliance', label: 'Compliance-Pflichten', icon: FileCheck },
    { id: 'examples', label: 'Praxisbeispiele', icon: Bot },
    { id: 'implementation', label: 'Implementation', icon: Code }
  ];

  const riskCategories = [
    {
      level: 'Unannehmbares Risiko',
      color: 'from-red-600 to-red-500',
      borderColor: 'border-red-500',
      bgColor: 'bg-red-50',
      textColor: 'text-red-900',
      percentage: 5,
      description: 'KI-Systeme, die eine klare Bedrohung für Sicherheit, Existenzgrundlagen und Rechte darstellen',
      examples: [
        'Biometrische Echtzeit-Fernidentifikation in öffentlichen Räumen',
        'Social Scoring durch öffentliche Behörden',
        'Manipulation des menschlichen Verhaltens (Dark Patterns)',
        'Ausnutzung von Schwächen bestimmter Gruppen'
      ],
      prohibitions: [
        'Vollständiges Verbot der Inverkehrbringung',
        'Keine Ausnahmen für Forschung oder Entwicklung',
        'Sofortige Einstellung bei laufenden Systemen',
        'Hohe Bußgelder bei Verstößen (bis zu 35 Mio. € oder 7% des Jahresumsatzes)'
      ],
      icon: Ban
    },
    {
      level: 'Hohes Risiko',
      color: 'from-orange-600 to-orange-500',
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-50',
      textColor: 'text-orange-900',
      percentage: 15,
      description: 'KI-Systeme in kritischen Bereichen mit hohem Risiko für Grundrechte',
      examples: [
        'Biometrische Identifikation und Kategorisierung',
        'Kritische Infrastrukturen (Verkehr, Energie)',
        'Bildung und Berufsausbildung',
        'Beschäftigung, Personalmanagement',
        'Wesentliche private und öffentliche Dienstleistungen',
        'Strafverfolgung und Rechtspflege',
        'Migration, Asyl und Grenzkontrolle',
        'Demokratie-relevante Prozesse'
      ],
      requirements: [
        'Konfromitätsbewertung vor Inverkehrbringung',
        'CE-Kennzeichnung erforderlich',
        'Risikomanagements- und Qualitätsmanagementsysteme',
        'Umfassende Dokumentation und Aufzeichnungen',
        'Transparenz und Bereitstellung von Informationen',
        'Menschliche Aufsicht während des gesamten Lebenszyklus',
        'Robustheit, Genauigkeit und Cybersecurity',
        'Registrierung in EU-Datenbank'
      ],
      icon: AlertTriangle
    },
    {
      level: 'Begrenztes Risiko',
      color: 'from-yellow-600 to-yellow-500',
      borderColor: 'border-yellow-500',
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-900',
      percentage: 25,
      description: 'KI-Systeme mit spezifischen Transparenzrisiken',
      examples: [
        'Chatbots und virtuelle Assistenten',
        'Emotionserkennungssysteme',
        'Biometrische Kategorisierung',
        'KI-generierte Inhalte (Deep Fakes)',
        'KI-Systeme zur Interaktion mit natürlichen Personen'
      ],
      requirements: [
        'Transparenzpflichten gegenüber Nutzern',
        'Kennzeichnung von KI-generierten Inhalten',
        'Information über KI-Interaktion',
        'Erkennbarkeit von Deep Fakes',
        'Aufklärung über Emotionserkennung'
      ],
      icon: Eye
    },
    {
      level: 'Minimales Risiko',
      color: 'from-green-600 to-green-500',
      borderColor: 'border-green-500',
      bgColor: 'bg-green-50',
      textColor: 'text-green-900',
      percentage: 55,
      description: 'KI-Systeme mit geringem Risiko für Grundrechte und Sicherheit',
      examples: [
        'Spam-Filter und E-Mail-Sortierung',
        'Videoempfehlungssysteme',
        'Einfache Chatbots ohne kritische Entscheidungen',
        'Inventarverwaltung und Logistik',
        'Wettervorhersagen und -analysen'
      ],
      requirements: [
        'Keine besonderen rechtlichen Verpflichtungen',
        'Freiwillige Anwendung von Verhaltenskodizes',
        'Empfohlene Best Practices',
        'Selbstregulierung durch Branche'
      ],
      icon: CheckCircle2
    }
  ];

  const assessmentMethodology = [
    {
      phase: 'Systemanalyse',
      description: 'Identifikation und Charakterisierung des KI-Systems',
      steps: [
        'Zweck und beabsichtigte Verwendung definieren',
        'Eingabedaten und Datenverarbeitungslogik analysieren',
        'Ausgaben und Entscheidungslogik verstehen',
        'Einsatzbereich und Zielgruppen identifizieren'
      ],
      deliverables: ['Systemspezifikation', 'Use-Case-Dokumentation'],
      icon: Search
    },
    {
      phase: 'Risikobewertung',
      description: 'Bewertung potenzieller Risiken und Auswirkungen',
      steps: [
        'Betroffene Grundrechte identifizieren',
        'Wahrscheinlichkeit von Schäden bewerten',
        'Schwere potenzieller Auswirkungen einschätzen',
        'Vulnerable Gruppen identifizieren'
      ],
      deliverables: ['Risikoregister', 'Impact Assessment'],
      icon: BarChart3
    },
    {
      phase: 'Kategorisierung',
      description: 'Zuordnung zu Risikokategorie nach EU AI Act',
      steps: [
        'Abgleich mit Anhang I-III der Verordnung',
        'Prüfung auf Verbotstatbestände',
        'Bewertung der Anwendungsdomäne',
        'Finale Klassifizierung dokumentieren'
      ],
      deliverables: ['Klassifizierungsreport', 'Compliance-Matrix'],
      icon: Gauge
    },
    {
      phase: 'Maßnahmenplanung',
      description: 'Ableitung erforderlicher Compliance-Maßnahmen',
      steps: [
        'Rechtliche Anforderungen ableiten',
        'Technische Schutzmaßnahmen definieren',
        'Organisatorische Prozesse etablieren',
        'Monitoring und Review-Zyklen planen'
      ],
      deliverables: ['Compliance-Plan', 'Implementierungsroadmap'],
      icon: Target
    }
  ];

  const complianceMatrix = [
    {
      requirement: 'Risikomanagement',
      minimal: false,
      limited: false,
      high: true,
      unacceptable: false,
      description: 'Kontinuierlicher Prozess zur Identifikation, Analyse und Minderung von Risiken'
    },
    {
      requirement: 'Datenqualität',
      minimal: false,
      limited: false,
      high: true,
      unacceptable: false,
      description: 'Sicherstellung repräsentativer, fehlerfreier und vollständiger Trainingsdaten'
    },
    {
      requirement: 'Dokumentation',
      minimal: false,
      limited: false,
      high: true,
      unacceptable: false,
      description: 'Umfassende technische Dokumentation und Nachvollziehbarkeit'
    },
    {
      requirement: 'Transparenz',
      minimal: false,
      limited: true,
      high: true,
      unacceptable: false,
      description: 'Aufklärung der Nutzer über KI-Einsatz und Funktionsweise'
    },
    {
      requirement: 'Menschliche Aufsicht',
      minimal: false,
      limited: false,
      high: true,
      unacceptable: false,
      description: 'Sinnvolle menschliche Kontrolle über KI-Entscheidungen'
    },
    {
      requirement: 'Genauigkeit',
      minimal: false,
      limited: false,
      high: true,
      unacceptable: false,
      description: 'Robustheit und Zuverlässigkeit des Systems'
    },
    {
      requirement: 'Cybersecurity',
      minimal: false,
      limited: false,
      high: true,
      unacceptable: false,
      description: 'Schutz vor Cyberangriffen und Manipulation'
    }
  ];

  const practicalExamples = [
    {
      title: 'Bewerbungsmanagement-KI',
      sector: 'HR Technology',
      classification: 'Hohes Risiko',
      reasoning: 'Beschäftigung und Personalmanagement (Anhang III)',
      requirements: [
        'Konformitätsbewertung durchführen',
        'Risikomanagement implementieren',
        'Bias-Detection und -Mitigation',
        'Menschliche Überprüfung bei Ablehnungen',
        'Dokumentation aller Entscheidungskriterien'
      ],
      icon: Users,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Kunden-Chatbot',
      sector: 'Customer Service',
      classification: 'Begrenztes Risiko',
      reasoning: 'Interaktion mit natürlichen Personen',
      requirements: [
        'Transparenz über KI-Nutzung',
        'Kennzeichnung als Chatbot',
        'Möglichkeit zur menschlichen Übernahme',
        'Keine kritischen Entscheidungen automatisiert'
      ],
      icon: MessageSquare,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Kreditscoring-System',
      sector: 'Financial Services',
      classification: 'Hohes Risiko',
      reasoning: 'Wesentliche private Dienstleistungen',
      requirements: [
        'Algorithmic Impact Assessment',
        'Diskriminierungsfreie Modellierung',
        'Erklärbarkeit der Kreditentscheidungen',
        'Regelmäßige Modellvalidierung',
        'Beschwerdemechanismen'
      ],
      icon: Euro,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Produktempfehlungen',
      sector: 'E-Commerce',
      classification: 'Minimales Risiko',
      reasoning: 'Keine kritischen Entscheidungen oder Grundrechtseingriffe',
      requirements: [
        'Freiwillige Best Practices',
        'Transparenz über Personalisierung',
        'Datenminimierung beachten',
        'Nutzerrechte gemäß DSGVO'
      ],
      icon: Package,
      color: 'from-green-500 to-blue-500'
    }
  ];

  const toggleExpanded = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const toggleChecked = (itemId: string) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" style={{
      fontSize: '16px',
      lineHeight: '1.6'
    }}>
      <Header />
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
        <motion.div 
          style={{ y, opacity }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" />
        </motion.div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl">
                <Gauge className="w-16 h-16 text-white" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold text-white mb-6">
              KI-Risikoklassifizierung nach EU AI Act
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Verstehen Sie die vier Risikokategorien des EU AI Acts und deren 
              spezifische Compliance-Anforderungen für Ihr KI-System. Praktischer Guide mit Templates und Checklisten.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <Sparkles className="w-4 h-4 mr-2" />
                EU AI Act 2024
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <Shield className="w-4 h-4 mr-2" />
                4 Risikokategorien
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-white border-white/30 bg-white/10">
                <BarChart3 className="w-4 h-4 mr-2" />
                Praxis-Templates
              </Badge>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Table of Contents */}
      <nav aria-label="Inhaltsverzeichnis" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-6 border">
          <button 
            onClick={() => toggleExpanded('toc')}
            className="flex items-center gap-2 w-full text-left md:cursor-default"
          >
            <h2 id="inhaltsverzeichnis" className="text-2xl font-bold flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-blue-600" />
              Inhaltsverzeichnis
            </h2>
            <ChevronDown className={cn(
              "w-5 h-5 text-gray-500 transition-transform md:hidden",
              expandedSection === 'toc' && "rotate-180"
            )} />
          </button>
          <div className={cn(
            "mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3",
            "md:block", // Always show on desktop
            expandedSection === 'toc' ? "block" : "hidden md:grid" // Collapsible on mobile
          )}>
            <a href="#risikoklassifizierung-ueberblick" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]">
              <Shield className="w-4 h-4 text-blue-500 flex-shrink-0" />
              Überblick Risikoklassifizierung
            </a>
            <a href="#vier-risikokategorien" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]">
              <Gauge className="w-4 h-4 text-orange-500 flex-shrink-0" />
              Vier Risikokategorien
            </a>
            <a href="#bewertungsmethodik" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]">
              <BarChart3 className="w-4 h-4 text-green-500 flex-shrink-0" />
              Bewertungsmethodik
            </a>
            <a href="#compliance-pflichten" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]">
              <FileCheck className="w-4 h-4 text-purple-500 flex-shrink-0" />
              Compliance-Pflichten
            </a>
            <a href="#praxisbeispiele" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]">
              <Bot className="w-4 h-4 text-red-500 flex-shrink-0" />
              Praxisbeispiele
            </a>
            <a href="#implementation" className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-white transition-colors text-sm min-h-[48px]">
              <Code className="w-4 h-4 text-indigo-500 flex-shrink-0" />
              Implementation
            </a>
          </div>
        </div>
      </nav>

      {/* Navigation Tabs */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b" style={{scrollMarginTop: '96px'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 h-auto p-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <TabsTrigger
                    key={tab.id}
                    value={tab.id}
                    className="flex flex-col items-center gap-2 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium hidden sm:inline">
                      {tab.label}
                    </span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          
          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div id="risikoklassifizierung-ueberblick" className="text-center mb-12" style={{scrollMarginTop: '96px'}}>
              <h2 className="text-3xl font-bold mb-4">EU AI Act Risikoklassifizierung</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Der EU AI Act kategorisiert KI-Systeme in vier Risikostufen, die jeweils 
                unterschiedliche rechtliche Anforderungen und Compliance-Pflichten mit sich bringen.
              </p>
            </div>

            {/* Risk Distribution Chart */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5" />
                  Verteilung der KI-Systeme nach Risikokategorien
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {riskCategories.map((category) => (
                    <div key={category.level} className="text-center">
                      <div className={cn("rounded-full w-20 h-20 mx-auto mb-3 flex items-center justify-center", category.bgColor)}>
                        <span className={cn("text-2xl font-bold", category.textColor)}>
                          {category.percentage}%
                        </span>
                      </div>
                      <h3 className="font-semibold text-sm">{category.level}</h3>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Key Principles */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    Risikoorientiert
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Regulierung richtet sich nach dem Risiko für Grundrechte und Sicherheit, 
                    nicht nach der Technologie selbst. Für eine detaillierte Bewertung nutzen Sie unser <Link to="/wissen/ki-datenschutz/algorithmic-impact-assessment" className="text-blue-600 hover:underline">Algorithmic Impact Assessment</Link>.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-500" />
                    Anwendungsbezogen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Klassifizierung erfolgt nach dem Verwendungszweck und Einsatzbereich, 
                    nicht nach der zugrundeliegenden KI-Technologie. Implementierung mit <Link to="/wissen/ki-datenschutz/privacy-preserving-ai" className="text-green-600 hover:underline">Privacy-Preserving AI Technologien</Link> empfohlen.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-purple-500" />
                    Verhältnismäßig
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Compliance-Anforderungen steigen proportional zum Risiko. 
                    Low-Risk Systeme bleiben weitgehend unreguliert.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Back to Top */}
            <div className="text-center mt-8">
              <a href="#inhaltsverzeichnis" className="inline-flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-blue-600 transition-colors">
                <ArrowRight className="w-4 h-4 rotate-[-90deg]" />
                Zurück zum Inhaltsverzeichnis
              </a>
            </div>
          </TabsContent>

          {/* Risk Categories Tab */}
          <TabsContent value="categories" className="space-y-6">
            <div id="vier-risikokategorien" style={{scrollMarginTop: '96px'}}></div>
            {riskCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.level}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className={cn("border-2", category.borderColor)}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={cn("p-3 rounded-xl bg-gradient-to-br", category.color)}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-2xl">{category.level}</CardTitle>
                            <p className="text-gray-600 mt-1">{category.description}</p>
                          </div>
                        </div>
                        <Badge className={cn("text-lg px-4 py-2", category.color)}>
                          {category.percentage}%
                        </Badge>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <FileText className="w-4 h-4" />
                            Beispielanwendungen
                          </h4>
                          <ul className="space-y-2">
                            {category.examples.map((example, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{example}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <CheckSquare className="w-4 h-4" />
                            {category.level === 'Unannehmbares Risiko' ? 'Verbote' : 
                             category.level === 'Hohes Risiko' ? 'Anforderungen' : 'Pflichten'}
                          </h4>
                          <ul className="space-y-2">
                            {(category.prohibitions || category.requirements).map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </TabsContent>

          {/* Assessment Methodology Tab */}
          <TabsContent value="assessment" className="space-y-6">
            <div id="bewertungsmethodik" className="text-center mb-8" style={{scrollMarginTop: '96px'}}>
              <h2 className="text-3xl font-bold mb-4">Bewertungsmethodik</h2>
              <p className="text-lg text-gray-600">
                Systematischer Ansatz zur Klassifizierung Ihres KI-Systems
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {assessmentMethodology.map((phase, index) => {
                const Icon = phase.icon;
                return (
                  <Card key={phase.phase} className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-100 rounded-lg">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <Badge variant="outline" className="mb-2">
                            Phase {index + 1}
                          </Badge>
                          <CardTitle>{phase.phase}</CardTitle>
                        </div>
                      </div>
                      <p className="text-gray-600">{phase.description}</p>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Schritte:</h4>
                          <ul className="space-y-1">
                            {phase.steps.map((step, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0" />
                                {step}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Deliverables:</h4>
                          <div className="flex flex-wrap gap-2">
                            {phase.deliverables.map((deliverable, idx) => (
                              <Badge key={idx} variant="secondary">
                                {deliverable}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Assessment Template */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Assessment Template
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Nutzen Sie unsere strukturierte Vorlage für die Risikoklassifizierung Ihres KI-Systems. Für umfassendere Bewertungen empfehlen wir unser <Link to="/wissen/ki-datenschutz/algorithmic-impact-assessment" className="text-blue-600 hover:underline">Algorithmic Impact Assessment</Link>.
                </p>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600">
                  <Download className="w-4 h-4 mr-2" />
                  Template herunterladen
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance Requirements Tab */}
          <TabsContent value="compliance" className="space-y-6">
            <div id="compliance-pflichten" className="text-center mb-8" style={{scrollMarginTop: '96px'}}>
              <h2 className="text-3xl font-bold mb-4">Compliance-Pflichten Matrix</h2>
              <p className="text-lg text-gray-600">
                Überblick über Anforderungen je Risikokategorie
              </p>
            </div>

            <Card>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-gray-50">
                        <th className="text-left p-4 font-semibold">Anforderung</th>
                        <th className="text-center p-4 font-semibold text-green-700">Minimal</th>
                        <th className="text-center p-4 font-semibold text-yellow-700">Begrenzt</th>
                        <th className="text-center p-4 font-semibold text-orange-700">Hoch</th>
                        <th className="text-center p-4 font-semibold text-red-700">Unerlaubt</th>
                      </tr>
                    </thead>
                    <tbody>
                      {complianceMatrix.map((row, index) => (
                        <tr key={row.requirement} className="border-b hover:bg-gray-50">
                          <td className="p-4">
                            <div>
                              <div className="font-medium">{row.requirement}</div>
                              <div className="text-sm text-gray-600">{row.description}</div>
                            </div>
                          </td>
                          <td className="text-center p-4">
                            {row.minimal ? (
                              <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )}
                          </td>
                          <td className="text-center p-4">
                            {row.limited ? (
                              <CheckCircle2 className="w-5 h-5 text-yellow-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )}
                          </td>
                          <td className="text-center p-4">
                            {row.high ? (
                              <CheckCircle2 className="w-5 h-5 text-orange-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-gray-300 mx-auto" />
                            )}
                          </td>
                          <td className="text-center p-4">
                            {row.unacceptable ? (
                              <CheckCircle2 className="w-5 h-5 text-red-500 mx-auto" />
                            ) : (
                              <Ban className="w-5 h-5 text-red-500 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Practical Examples Tab */}
          <TabsContent value="examples" className="space-y-6">
            <div id="praxisbeispiele" className="text-center mb-8" style={{scrollMarginTop: '96px'}}>
              <h2 className="text-3xl font-bold mb-4">Praxisbeispiele</h2>
              <p className="text-lg text-gray-600">
                Konkrete Klassifizierungen realer KI-Systeme
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {practicalExamples.map((example, index) => {
                const Icon = example.icon;
                return (
                  <Card key={example.title} className="h-full">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div className={cn("p-3 rounded-xl bg-gradient-to-br", example.color)}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="outline">
                          {example.sector}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-xl">{example.title}</CardTitle>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Gauge className="w-4 h-4 text-gray-500" />
                          <span className="text-sm font-medium">{example.classification}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <FileText className="w-4 h-4 text-gray-500 mt-0.5" />
                          <span className="text-sm text-gray-600">{example.reasoning}</span>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <h4 className="font-semibold mb-3">Erforderliche Maßnahmen:</h4>
                      <ul className="space-y-2">
                        {example.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          {/* Implementation Tab */}
          <TabsContent value="implementation" className="space-y-6">
            <div id="implementation" className="text-center mb-8" style={{scrollMarginTop: '96px'}}>
              <h2 className="text-3xl font-bold mb-4">Implementation Roadmap</h2>
              <p className="text-lg text-gray-600">
                Schrittweise Umsetzung der Compliance-Anforderungen
              </p>
            </div>

            {/* Implementation Checklist */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckSquare className="w-5 h-5" />
                  Implementierungs-Checkliste
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    'Initiale Systemanalyse durchführen',
                    'Risikobewertung nach EU AI Act',
                    'Compliance-Gap-Analyse erstellen',
                    'Implementierungsplan entwickeln',
                    'Technische Maßnahmen umsetzen',
                    'Organisatorische Prozesse etablieren',
                    'Dokumentation vervollständigen',
                    'Internes Audit durchführen',
                    'Externe Zertifizierung beantragen',
                    'Kontinuierliches Monitoring einrichten'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <button
                        onClick={() => toggleChecked(`impl-${index}`)}
                        className="flex-shrink-0"
                      >
                        {checkedItems.has(`impl-${index}`) ? (
                          <CheckSquare className="w-5 h-5 text-green-500" />
                        ) : (
                          <Square className="w-5 h-5 text-gray-400" />
                        )}
                      </button>
                      <span className={cn(
                        "text-sm",
                        checkedItems.has(`impl-${index}`) ? "line-through text-gray-500" : ""
                      )}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Progress Tracking */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Fortschritt
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Compliance-Implementierung</span>
                      <span>{Math.round((checkedItems.size / 10) * 100)}%</span>
                    </div>
                    <Progress value={(checkedItems.size / 10) * 100} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <Footer />
    </div>
  );
};

export default KiRisikoklassifizierung;