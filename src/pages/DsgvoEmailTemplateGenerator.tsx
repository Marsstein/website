import React, { useState, useEffect, useRef } from 'react';
import SEOHead from '../components/SEOHead';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Trophy,
  AlertTriangle,
  Target,
  Clock,
  Users,
  Building2,
  Eye,
  Lock,
  Globe,
  Sparkles,
  PlayCircle,
  Download,
  Star,
  Rocket,
  Settings,
  BarChart3,
  Zap,
  Award,
  TrendingUp,
  ChevronRight,
  Phone,
  Calendar,
  Mail,
  Brain,
  Search,
  FileText,
  UserCheck,
  ShieldCheck,
  BadgeCheck,
  Gavel,
  AlertOctagon,
  TrendingDown,
  XCircle,
  DollarSign,
  Medal,
  Gamepad2,
  Crown,
  Gauge,
  Gem,
  PieChart,
  BarChart4,
  LineChart,
  CheckCircle,
  AlertCircle,
  Info,
  ArrowUp,
  ArrowDown,
  Scale,
  Euro,
  Percent,
  FileCheck,
  Activity,
  Edit3,
  Copy,
  Send,
  MessageCircle,
  BookOpen,
  Palette,
  Languages,
  Briefcase,
  Layers,
  RefreshCw,
  GitMerge,
  Database,
  Code,
  Terminal,
  Cpu,
  Wifi,
  Package,
  Folder,
  FolderOpen,
  File,
  PenTool,
  Type,
  Hash,
  AtSign,
  Link2,
  ExternalLink,
  Inbox,
  Archive,
  Trash2,
  Save,
  Plus,
  Minus,
  ChevronLeft,
  ChevronsLeft,
  ChevronsRight,
  MoreVertical,
  MoreHorizontal,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Star as StarIcon,
  Heart,
  ThumbsUp,
  MessageSquare,
  Share2,
  Bookmark,
  Flag,
  MapPin,
  Navigation,
  Compass,
  Map,
  Crosshair,
  Cast,
  Airplay,
  Tv,
  Radio,
  Film,
  Video,
  Image,
  Camera,
  Aperture,
  Feather,
  Pen,
  Tool,
  Wrench,
  Hammer,
  Scissors,
  Ruler,
  Eraser,
  Paintbrush,
  Pipette,
  Sliders,
  Filter,
  Crop,
  Move,
  Maximize,
  Minimize,
  ZoomIn,
  ZoomOut,
  Check,
  X,
  HelpCircle,
  Menu,
  Grid,
  List,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Layout,
  Sidebar,
  PanelLeft,
  PanelRight,
  Columns,
  SquareStack,
  Layers3,
  Package2,
  Box,
  Archive as ArchiveIcon,
  Inbox as InboxIcon,
  Component,
  Puzzle,
  Plug,
  Plug2,
  Unplug
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DsgvoEmailTemplateGenerator = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "DSGVO E-Mail Template Generator",
    "description": "Generator für DSGVO-konforme E-Mail-Vorlagen: Auskunftsersuchen, Löschanfragen, Betroffenenrechte",
    "applicationCategory": "Privacy Tool",
    "url": "https://marsstein.ai/tools/dsgvo-email-template-generator"
  };

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isGenerating, setIsGenerating] = useState(false);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.9]);

  // Template Categories with rich content
  const templateCategories = [
    {
      id: 'consent',
      name: 'Einwilligungen & Opt-ins',
      icon: UserCheck,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      borderColor: 'border-blue-200 dark:border-blue-900',
      templates: 42,
      popular: ['Newsletter Double-Opt-in', 'Marketing Consent', 'Cookie Banner Consent'],
      description: 'Rechtssichere Einwilligungen für alle Marketing-Aktivitäten',
      compliance: ['Art. 6 DSGVO', 'Art. 7 DSGVO', 'ePrivacy'],
      useCases: [
        { name: 'Newsletter Anmeldung', time: '2 min' },
        { name: 'Gewinnspiel Teilnahme', time: '3 min' },
        { name: 'Webinar Registration', time: '2 min' }
      ]
    },
    {
      id: 'rights',
      name: 'Betroffenenrechte',
      icon: Shield,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      borderColor: 'border-green-200 dark:border-green-900',
      templates: 38,
      popular: ['Auskunftsersuchen', 'Löschungsanfrage', 'Datenportabilität'],
      description: 'Professionelle Antworten auf Betroffenenanfragen',
      compliance: ['Art. 15-22 DSGVO', 'Art. 12 DSGVO'],
      useCases: [
        { name: 'Auskunft erteilen', time: '5 min' },
        { name: 'Löschung bestätigen', time: '2 min' },
        { name: 'Daten exportieren', time: '3 min' }
      ]
    },
    {
      id: 'breach',
      name: 'Datenschutzverletzungen',
      icon: AlertOctagon,
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-red-50 dark:bg-red-950/20',
      borderColor: 'border-red-200 dark:border-red-900',
      templates: 24,
      popular: ['Breach Notification', 'Aufsichtsbehörde Meldung', 'Betroffene Information'],
      description: 'Krisenkommunikation bei Datenschutzvorfällen',
      compliance: ['Art. 33 DSGVO', 'Art. 34 DSGVO'],
      useCases: [
        { name: 'Behördenmeldung', time: '10 min' },
        { name: 'Kundeninformation', time: '5 min' },
        { name: 'Interne Eskalation', time: '3 min' }
      ]
    },
    {
      id: 'vendor',
      name: 'Auftragsverarbeitung',
      icon: Briefcase,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-900',
      templates: 31,
      popular: ['AV-Vertrag Anfrage', 'TOM Dokumentation', 'Subunternehmer Info'],
      description: 'Kommunikation mit Dienstleistern und Partnern',
      compliance: ['Art. 28 DSGVO', 'Art. 32 DSGVO'],
      useCases: [
        { name: 'AV-Vertrag anfordern', time: '3 min' },
        { name: 'TOM nachfragen', time: '4 min' },
        { name: 'Audit ankündigen', time: '5 min' }
      ]
    },
    {
      id: 'hr',
      name: 'HR & Mitarbeiter',
      icon: Users,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
      borderColor: 'border-orange-200 dark:border-orange-900',
      templates: 28,
      popular: ['Mitarbeiter Datenschutz', 'Home Office DSGVO', 'Exit Prozess'],
      description: 'Datenschutzkonforme HR-Kommunikation',
      compliance: ['Art. 88 DSGVO', 'BDSG §26'],
      useCases: [
        { name: 'Onboarding Info', time: '4 min' },
        { name: 'Policy Updates', time: '2 min' },
        { name: 'Exit Checkliste', time: '3 min' }
      ]
    },
    {
      id: 'international',
      name: 'International & Drittländer',
      icon: Globe,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-indigo-50 dark:bg-indigo-950/20',
      borderColor: 'border-indigo-200 dark:border-indigo-900',
      templates: 19,
      popular: ['Drittland Transfer', 'SCC Information', 'Brexit Anpassung'],
      description: 'Grenzüberschreitende Datenübermittlung',
      compliance: ['Art. 44-49 DSGVO', 'Schrems II'],
      useCases: [
        { name: 'US-Transfer Info', time: '6 min' },
        { name: 'SCC Abschluss', time: '8 min' },
        { name: 'TIA durchführen', time: '10 min' }
      ]
    }
  ];

  // Template Examples with live preview
  const templateExamples = [
    {
      type: 'Double Opt-in Email',
      preview: `Sehr geehrte/r ${'{{{Vorname}}} {{{Nachname}}}'},

vielen Dank für Ihre Newsletter-Anmeldung bei ${'{{{Firmenname}}}'}.

Um Ihre Anmeldung abzuschließen und sicherzustellen, dass Sie tatsächlich Newsletter von uns erhalten möchten, bitten wir Sie, Ihre E-Mail-Adresse zu bestätigen.

[Anmeldung bestätigen]

Dieser Link ist 48 Stunden gültig. Falls Sie sich nicht angemeldet haben, ignorieren Sie diese E-Mail einfach.

Ihre Daten werden gemäß Art. 6 Abs. 1 lit. a DSGVO auf Basis Ihrer Einwilligung verarbeitet...`,
      variables: ['Vorname', 'Nachname', 'Firmenname', 'Bestätigungslink'],
      language: 'DE'
    },
    {
      type: 'Auskunftsersuchen Antwort',
      preview: `Sehr geehrte/r ${'{{{Antragsteller}}}'},

wir bestätigen den Eingang Ihres Auskunftsersuchens vom ${'{{{Datum}}}'} gemäß Art. 15 DSGVO.

Nach Prüfung unserer Systeme können wir Ihnen folgende Auskunft erteilen:

1. Verarbeitete personenbezogene Daten:
   - Name: ${'{{{Name}}}'}
   - E-Mail: ${'{{{Email}}}'}
   - Kundennummer: ${'{{{Kundennummer}}}'}

2. Verarbeitungszwecke:
   - Vertragserfüllung
   - Kundenkommunikation...`,
      variables: ['Antragsteller', 'Datum', 'Name', 'Email', 'Kundennummer'],
      language: 'DE'
    }
  ];

  // Live Template Generator Demo
  const [demoFormData, setDemoFormData] = useState({
    company: 'Marsstein GmbH',
    purpose: 'Newsletter-Versand',
    dataTypes: ['E-Mail', 'Name', 'Präferenzen'],
    retention: '24 Monate',
    legalBasis: 'Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)'
  });

  // Key Benefits
  const keyBenefits = [
    {
      icon: Clock,
      title: 'Zeit sparen',
      description: 'Erstellen Sie rechtssichere Templates in Minuten statt Stunden',
      benefit: 'Bis zu 90% Zeitersparnis',
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: Shield,
      title: 'Rechtssicherheit',
      description: 'Anwaltlich geprüfte Formulierungen für alle DSGVO-Szenarien',
      benefit: 'Minimiertes Abmahnrisiko',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Euro,
      title: 'Kosten senken',
      description: 'Keine teuren Rechtsberatungen für Standard-Templates mehr',
      benefit: 'ROI in wenigen Wochen',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  // Compliance Features
  const complianceFeatures = [
    {
      title: 'Automatische Rechts-Updates',
      description: 'Templates werden bei Gesetzesänderungen automatisch aktualisiert',
      icon: RefreshCw,
      updates: ['DSGVO Updates', 'ePrivacy Anpassungen', 'Rechtsprechung']
    },
    {
      title: 'Multi-Jurisdiktional',
      description: 'Berücksichtigung länderspezifischer Datenschutzgesetze',
      icon: Globe,
      updates: ['DACH Region', 'EU-27', 'UK GDPR', 'Schweizer DSG']
    },
    {
      title: 'Audit-Trail',
      description: 'Vollständige Dokumentation aller generierten Templates',
      icon: FileCheck,
      updates: ['Versionierung', 'Änderungshistorie', 'Export-Funktion']
    }
  ];

  // Template Types for ticker
  const [tickerTemplates] = useState([
    { type: 'Newsletter Double-Opt-in', category: 'Einwilligung', icon: Mail },
    { type: 'Auskunftsanfrage Antwort', category: 'Betroffenenrecht', icon: Shield },
    { type: 'Cookie Banner Text', category: 'Consent', icon: Globe },
    { type: 'Löschbestätigung', category: 'DSGVO Art. 17', icon: Trash2 },
    { type: 'Datenschutzverletzung Info', category: 'Breach Notification', icon: AlertOctagon },
    { type: 'AV-Vertrag Anfrage', category: 'B2B', icon: Briefcase }
  ]);

  return (
    <>
      <SEOHead
        title="DSGVO E-Mail Templates – Rechtssichere Vorlagen"
        description="DSGVO E-Mail Template Generator: Rechtssichere Vorlagen für Auskunftsersuchen, Löschanfragen, Betroffenenrechte. ✓ Anwaltlich geprüft ✓ Sofort einsetzbar. Jetzt generieren!"
        canonical="/tools/dsgvo-email-template-generator"
        keywords="DSGVO E-Mail Templates, Auskunftsersuchen, Löschanfragen, Betroffenenrechte, DSGVO Vorlagen"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
      
      {/* Hero Section - Dark themed like the three new pages */}
      <motion.section
        ref={heroRef}
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
        style={{ opacity: heroOpacity, scale: heroScale }}
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-indigo-600/20 to-purple-600/20" />
          <motion.div
            className="absolute top-0 left-0 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 rounded-full mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Sparkles className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium text-blue-300">KI-gestützte DSGVO Templates</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-white">Rechtssichere</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Email-Templates
              </span>
              <br />
              <span className="text-white">in Sekunden</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              KI-generierte, anwaltlich geprüfte Email-Vorlagen für jeden DSGVO-Anwendungsfall. 
              Sparen Sie 90% Zeit und 100% Rechtsrisiko.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Template Generator starten
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg rounded-xl"
              >
                <PlayCircle className="mr-2 h-5 w-5" />
                Live Demo ansehen
              </Button>
            </motion.div>

            {/* Key Features */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">
                  180+
                </div>
                <div className="text-sm text-gray-400">Template-Varianten</div>
                <div className="mt-2 flex items-center text-green-400 text-xs">
                  <FileText className="h-3 w-3 mr-1" />
                  Alle DSGVO-Szenarien
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">
                  5 Min
                </div>
                <div className="text-sm text-gray-400">Setup-Zeit</div>
                <div className="mt-2 flex items-center text-blue-400 text-xs">
                  <Zap className="h-3 w-3 mr-1" />
                  Sofort einsatzbereit
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">
                  KI
                </div>
                <div className="text-sm text-gray-400">Powered</div>
                <div className="mt-2 flex items-center text-purple-400 text-xs">
                  <Brain className="h-3 w-3 mr-1" />
                  Smart Generation
                </div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                <div className="text-3xl font-bold text-white mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-400">Updates</div>
                <div className="mt-2 flex items-center text-yellow-400 text-xs">
                  <RefreshCw className="h-3 w-3 mr-1" />
                  Immer aktuell
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Template Showcase Ticker */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 bg-black/20 backdrop-blur-sm border-t border-white/10 py-4 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <div className="flex items-center gap-12 animate-scroll-x">
            {[...tickerTemplates, ...tickerTemplates].map((template, index) => (
              <div key={index} className="flex items-center gap-3 text-sm whitespace-nowrap">
                <template.icon className="h-4 w-4 text-blue-400" />
                <span className="font-medium text-white">{template.type}</span>
                <Badge variant="outline" className="text-xs border-gray-600 text-gray-300">
                  {template.category}
                </Badge>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Template Categories Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              180+ rechtssichere Templates
            </h2>
            <p className="text-xl text-muted-foreground">
              Für jeden DSGVO-Anwendungsfall die perfekte Vorlage
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {templateCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={cn(
                  "group relative overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer",
                  category.borderColor,
                  selectedCategory === category.id && "ring-2 ring-primary"
                )}
                onClick={() => setSelectedCategory(category.id)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className={cn(
                        "p-3 rounded-xl bg-gradient-to-br",
                        category.color
                      )}>
                        <category.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge variant="secondary">
                        {category.templates} Templates
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{category.name}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-2">
                      {category.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Popular Templates */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Beliebte Templates:</h4>
                        <div className="space-y-1">
                          {category.popular.map((template, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="h-3 w-3 text-green-600" />
                              <span>{template}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Compliance */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Rechtsgrundlagen:</h4>
                        <div className="flex flex-wrap gap-2">
                          {category.compliance.map((law, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {law}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Use Cases */}
                      <div>
                        <h4 className="text-sm font-semibold mb-2">Zeiteinsparung:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {category.useCases.map((useCase, idx) => (
                            <div key={idx} className="flex items-center justify-between text-xs">
                              <span className="text-muted-foreground">{useCase.name}</span>
                              <span className="font-medium text-green-600">{useCase.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-sm font-medium text-primary">
                        Templates erkunden
                      </span>
                      <ArrowRight className="h-4 w-4 text-primary group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Template Generator Demo */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Live Template Generator
            </h2>
            <p className="text-xl text-gray-300">
              Sehen Sie, wie schnell Sie rechtssichere Templates erstellen
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Generator Form */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">Template konfigurieren</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">
                    Unternehmensname
                  </label>
                  <input
                    type="text"
                    value={demoFormData.company}
                    onChange={(e) => setDemoFormData({...demoFormData, company: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">
                    Verarbeitungszweck
                  </label>
                  <select
                    value={demoFormData.purpose}
                    onChange={(e) => setDemoFormData({...demoFormData, purpose: e.target.value})}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="Newsletter-Versand">Newsletter-Versand</option>
                    <option value="Kundenkommunikation">Kundenkommunikation</option>
                    <option value="Marketing-Kampagnen">Marketing-Kampagnen</option>
                    <option value="Vertragserfüllung">Vertragserfüllung</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">
                    Verarbeitete Daten
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {['E-Mail', 'Name', 'Telefon', 'Adresse', 'Präferenzen', 'Kaufhistorie'].map((dataType) => (
                      <label key={dataType} className="flex items-center gap-2 text-sm text-gray-300">
                        <input
                          type="checkbox"
                          checked={demoFormData.dataTypes.includes(dataType)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setDemoFormData({...demoFormData, dataTypes: [...demoFormData.dataTypes, dataType]});
                            } else {
                              setDemoFormData({...demoFormData, dataTypes: demoFormData.dataTypes.filter(t => t !== dataType)});
                            }
                          }}
                          className="rounded border-gray-600 bg-white/10"
                        />
                        {dataType}
                      </label>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={() => setIsGenerating(true)}
                  disabled={isGenerating}
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white"
                >
                  {isGenerating ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Template wird generiert...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-4 w-4" />
                      Template generieren
                    </>
                  )}
                </Button>
              </div>
            </motion.div>

            {/* Generated Template Preview */}
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Generiertes Template</h3>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="text-gray-300 border-gray-600">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button size="sm" variant="outline" className="text-gray-300 border-gray-600">
                    <Download className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-lg p-6 font-mono text-sm text-gray-300 leading-relaxed">
                <AnimatePresence mode="wait">
                  {isGenerating ? (
                    <motion.div
                      key="generating"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-3"
                    >
                      {[...Array(8)].map((_, i) => (
                        <div key={i} className="flex gap-2">
                          <div className={`h-4 bg-gray-700 rounded animate-pulse`} style={{ width: `${Math.random() * 60 + 40}%` }} />
                        </div>
                      ))}
                    </motion.div>
                  ) : (
                    <motion.div
                      key="template"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="whitespace-pre-wrap"
                    >
{`Betreff: Ihre Einwilligung für ${demoFormData.purpose} bei ${demoFormData.company}

Sehr geehrte/r Dateninhaber/in,

hiermit bitten wir Sie um Ihre Einwilligung zur Verarbeitung Ihrer personenbezogenen Daten für ${demoFormData.purpose}.

Verarbeitete Daten:
${demoFormData.dataTypes.map(type => `• ${type}`).join('\n')}

Rechtsgrundlage: ${demoFormData.legalBasis}
Speicherdauer: ${demoFormData.retention}

Sie können Ihre Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen...

[Einwilligung erteilen] [Ablehnen]

Mit freundlichen Grüßen
${demoFormData.company}`}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-400">100%</div>
                  <div className="text-xs text-gray-400">DSGVO-konform</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-400">2.3s</div>
                  <div className="text-xs text-gray-400">Generierungszeit</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-purple-400">A+</div>
                  <div className="text-xs text-gray-400">Compliance Score</div>
                </div>
              </div>
            </motion.div>
          </div>

          {useEffect(() => {
            if (isGenerating) {
              const timer = setTimeout(() => setIsGenerating(false), 2300);
              return () => clearTimeout(timer);
            }
          }, [isGenerating])}
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Ihre Vorteile auf einen Blick
            </h2>
            <p className="text-xl text-muted-foreground">
              So profitiert Ihr Unternehmen von automatisierten Templates
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={cn(
                  "absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl opacity-20",
                  "bg-gradient-to-br",
                  benefit.color
                )} />
                
                <div className="relative z-10">
                  <div className={cn(
                    "inline-flex p-4 rounded-xl mb-6 bg-gradient-to-br",
                    benefit.color
                  )}>
                    <benefit.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {benefit.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-medium">
                    <CheckCircle2 className="h-5 w-5 text-green-600" />
                    <span className={cn(
                      "bg-gradient-to-r bg-clip-text text-transparent",
                      benefit.color
                    )}>
                      {benefit.benefit}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Features */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Immer auf dem neuesten Stand
            </h2>
            <p className="text-xl text-muted-foreground">
              Automatische Updates bei Rechtsänderungen
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                </div>

                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {feature.description}
                </p>

                <div className="space-y-3">
                  {feature.updates.map((update, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <CheckCircle2 className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium">{update}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nie wieder unsichere Email-Texte
            </h2>
            <p className="text-xl text-blue-100 mb-12">
              Starten Sie jetzt mit rechtssicheren Templates und sparen Sie Zeit, Geld und Nerven.
              14 Tage kostenlos testen - keine Kreditkarte erforderlich.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <Rocket className="mr-2 h-5 w-5" />
                Kostenlos starten
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Demo vereinbaren
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
              <div className="flex items-center justify-center gap-2">
                <Shield className="h-5 w-5" />
                <span>100% DSGVO-konform</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-5 w-5" />
                <span>Setup in 5 Minuten</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Award className="h-5 w-5" />
                <span>Anwaltlich geprüft</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
};

export default DsgvoEmailTemplateGenerator;