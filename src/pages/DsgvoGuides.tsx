import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
  Shield,
  FileText,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  Star,
  Download,
  Eye,
  Calendar,
  Lightbulb,
  AlertTriangle,
  Target,
  Settings,
  Globe,
  Lock,
  Database,
  Scale,
  Gavel,
  UserCheck,
  Building2,
  Search,
  Filter,
  SortAsc,
  BookOpen,
  Award,
  TrendingUp,
  Bookmark,
  ExternalLink,
  Play,
  FileCheck,
  AlertOctagon,
  Zap,
  Brain,
  Rocket,
  Code,
  MonitorSpeaker,
  Sparkles,
  Calculator,
  Euro,
  XCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from '@/components/ui/breadcrumb';

const DsgvoGuides: React.FC = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const difficulties = [
    { id: 'all', name: 'Alle Level', count: 10 },
    { id: 'beginner', name: 'Einsteiger', count: 1 },
    { id: 'intermediate', name: 'Fortgeschritten', count: 7 },
    { id: 'expert', name: 'Experte', count: 2 }
  ];

  const topics = [
    { id: 'all', name: 'Alle Themen', icon: Shield },
    { id: 'basics', name: 'Grundlagen', icon: Lightbulb },
    { id: 'implementation', name: 'Implementierung', icon: Settings },
    { id: 'website', name: 'Website', icon: Globe },
    { id: 'crisis', name: 'Krisenmanagement', icon: AlertTriangle }
  ];

  const guides = [
    {
      id: 'dsgvo-grundlagen',
      title: 'DSGVO in 10 Minuten verstehen',
      subtitle: 'Die wichtigsten Prinzipien und Grundlagen',
      description: 'Ein kompakter Überblick über die DSGVO-Grundlagen, Rechtsgrundlagen und die wichtigsten Prinzipien für Einsteiger.',
      readTime: '10 Min',
      difficulty: 'beginner',
      topic: 'basics',
      popular: true,
      featured: true,
      completions: 2847,
      rating: 4.9,
      lastUpdated: '2024-01-15',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-green-900 to-slate-900',
      link: '/wissen/leitfaden/dsgvo-grundlagen',
      chapters: [
        'Was ist die DSGVO?',
        'Die 7 Grundprinzipien',
        'Rechtsgrundlagen Art. 6',
        'Betroffenenrechte',
        'Sanktionen & Bußgelder'
      ],
      keyTakeaways: [
        'Vollständiger DSGVO-Überblick',
        'Praktische Beispiele',
        'Sofort anwendbares Wissen'
      ],
      achievements: [
        'DSGVO-Grundverständnis aufbauen',
        'Rechtliche Risiken erkennen',
        'Erste Schritte zur Compliance'
      ]
    },
    {
      id: 'dsgvo-30-tage',
      title: 'DSGVO in 30 Tagen umsetzen',
      subtitle: 'Schritt-für-Schritt Implementation Plan',
      description: 'Ein detaillierter 30-Tage-Plan zur vollständigen DSGVO-Implementierung mit Checklisten, Templates und Zeitplänen.',
      readTime: '45 Min',
      difficulty: 'intermediate',
      topic: 'implementation',
      featured: true,
      completions: 1923,
      rating: 4.8,
      lastUpdated: '2024-01-20',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      link: '/wissen/leitfaden/dsgvo-30-tage',
      chapters: [
        'Woche 1: Bestandsaufnahme',
        'Woche 2: Rechtsgrundlagen',
        'Woche 3: TOM & Dokumentation',
        'Woche 4: Schulung & Testing'
      ],
      keyTakeaways: [
        'Strukturierter Implementierungsplan',
        'Praxiserprobte Templates',
        'Compliance in 30 Tagen'
      ],
      achievements: [
        'Vollständige DSGVO-Compliance',
        'Audit-sichere Dokumentation',
        'Prozesse rechtssicher aufsetzen'
      ]
    },
    {
      id: 'website-dsgvo',
      title: 'Website DSGVO-konform gestalten',
      subtitle: 'Cookie, Privacy Policy & Consent Management',
      description: 'Vollständige Anleitung zur DSGVO-konformen Gestaltung Ihrer Website inkl. Cookie-Banner, Datenschutzerklärung und Consent Management.',
      readTime: '35 Min',
      difficulty: 'intermediate',
      topic: 'website',
      popular: true,
      completions: 3156,
      rating: 4.7,
      lastUpdated: '2024-01-18',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      link: '/wissen/leitfaden/website-dsgvo',
      chapters: [
        'Cookie-Banner Design',
        'Datenschutzerklärung',
        'Consent Management',
        'Analytics & Tracking',
        'Drittanbieter-Tools'
      ],
      keyTakeaways: [
        'Rechtssichere Website',
        'DSGVO-konforme Tools',
        'Praktische Umsetzung'
      ],
      achievements: [
        'Cookie-Banner rechtssicher gestalten',
        'Datenschutzerklärung aktualisieren',
        'Tracking DSGVO-konform einrichten'
      ]
    },
    {
      id: 'data-breach-notfall',
      title: 'Data Breach Notfallplan',
      subtitle: '72-Stunden-Response-Guide',
      description: 'Kritischer Notfallplan für Datenschutzverletzungen mit Sofortmaßnahmen, Meldepflichten und Schadensbegrenzung.',
      readTime: '25 Min',
      difficulty: 'expert',
      topic: 'crisis',
      urgent: true,
      completions: 1456,
      rating: 4.9,
      lastUpdated: '2024-01-22',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-red-900 to-slate-900',
      link: '/wissen/leitfaden/data-breach-notfall',
      chapters: [
        'Erste 30 Minuten',
        'Behördenmeldung',
        'Betroffeneninformation',
        'Schadensbegrenzung',
        'Post-Incident Review'
      ],
      keyTakeaways: [
        '72h-Compliance garantiert',
        'Rechtssichere Kommunikation',
        'Schadenminimierung'
      ],
      achievements: [
        'Meldepflichten erfüllen',
        'Krisenkommunikation beherrschen',
        'Bußgelder vermeiden'
      ]
    },
    {
      id: 'verarbeitungsverzeichnis',
      title: 'Verarbeitungsverzeichnis erstellen',
      subtitle: 'Art. 30 DSGVO praktisch umsetzen',
      description: 'Detaillierte Anleitung zur Erstellung und Pflege eines DSGVO-konformen Verarbeitungsverzeichnisses mit Templates.',
      readTime: '30 Min',
      difficulty: 'intermediate',
      topic: 'implementation',
      completions: 2134,
      rating: 4.6,
      lastUpdated: '2024-01-16',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900',
      link: '/wissen/leitfaden/verarbeitungsverzeichnis',
      chapters: [
        'Was gehört ins VVT?',
        'Datenfluss-Mapping',
        'Template-Nutzung',
        'Kontinuierliche Pflege'
      ],
      keyTakeaways: [
        'DSGVO Art. 30 konform',
        'Praxiserprobte Templates',
        'Effiziente Umsetzung'
      ],
      achievements: [
        'VVT Art. 30 konform erstellen',
        'Datenflüsse dokumentieren',
        'Behörden-ready in 7 Tagen'
      ]
    },
    {
      id: 'betroffenenrechte',
      title: 'Betroffenenrechte umsetzen',
      subtitle: 'Art. 15-22 DSGVO in der Praxis',
      description: 'Komplette Anleitung zur Implementierung aller Betroffenenrechte mit Prozessen, Templates und Fristen.',
      readTime: '40 Min',
      difficulty: 'intermediate',
      topic: 'implementation',
      completions: 1789,
      rating: 4.7,
      lastUpdated: '2024-01-19',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900',
      link: '/wissen/leitfaden/betroffenenrechte',
      chapters: [
        'Auskunftsrecht Art. 15',
        'Löschung Art. 17',
        'Datenportabilität',
        'Widerspruchsrecht',
        'Automatisierte Entscheidungen'
      ],
      keyTakeaways: [
        'Alle Rechte abgedeckt',
        'Prozess-Templates',
        'Fristenmanagement'
      ],
      achievements: [
        'Anfragen rechtssicher beantworten',
        'Fristen automatisiert einhalten',
        'Prozesse dokumentieren'
      ]
    },
    {
      id: 'tom-technische-massnahmen',
      title: 'TOM - Technische & organisatorische Maßnahmen',
      subtitle: 'Art. 32 DSGVO Security Framework',
      description: 'Umfassender Guide zu technischen und organisatorischen Maßnahmen für angemessene Datensicherheit.',
      readTime: '50 Min',
      difficulty: 'expert',
      topic: 'implementation',
      completions: 1234,
      rating: 4.8,
      lastUpdated: '2024-01-21',
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900',
      link: '/wissen/leitfaden/tom-massnahmen',
      chapters: [
        'Technische Maßnahmen',
        'Organisatorische Maßnahmen',
        'Angemessenheit bewerten',
        'Dokumentation',
        'Kontinuierliche Verbesserung'
      ],
      keyTakeaways: [
        'Comprehensive Security',
        'Risk-based Approach',
        'Audit-ready Documentation'
      ],
      achievements: [
        'Sicherheitskonzept implementieren',
        'ISO 27001 Alignment',
        'Audit-Nachweis erbringen'
      ]
    },
    {
      id: 'verarbeitungsverzeichnis',
      title: 'Verarbeitungsverzeichnis erstellen',
      subtitle: 'Art. 30 DSGVO praktisch umsetzen',
      description: 'Detaillierte Anleitung zur Erstellung und Pflege eines DSGVO-konformen Verarbeitungsverzeichnisses mit Templates und Compliance-Checklisten.',
      readTime: '30 Min',
      difficulty: 'intermediate',
      topic: 'implementation',
      completions: 2134,
      rating: 4.6,
      lastUpdated: '2024-01-24',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900',
      link: '/wissen/leitfaden/verarbeitungsverzeichnis',
      chapters: [
        'Einführung & Rechtliche Grundlagen',
        'Pflichtangaben für Verantwortliche',
        'Praktische Umsetzung',
        'Häufige Fehler vermeiden',
        'Tools und Vorlagen'
      ],
      keyTakeaways: [
        'DSGVO Art. 30 konform',
        'Praxiserprobte Templates',
        'Effiziente Umsetzung'
      ],
      achievements: [
        'VVT Art. 30 konform erstellen',
        'Datenflüsse dokumentieren',
        'Behörden-ready in 7 Tagen'
      ]
    },
    {
      id: 'betroffenenrechte',
      title: 'Betroffenenrechte umsetzen',
      subtitle: 'Art. 15-22 DSGVO in der Praxis',
      description: 'Komplette Anleitung zur Implementierung aller 8 Betroffenenrechte mit Prozessen, Templates und Fristen-Management.',
      readTime: '40 Min',
      difficulty: 'intermediate',
      topic: 'implementation',
      completions: 1789,
      rating: 4.7,
      lastUpdated: '2024-01-24',
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900',
      link: '/wissen/leitfaden/betroffenenrechte',
      chapters: [
        'Übersicht & Grundlagen',
        'Informationsrecht Art. 13 & 14',
        'Auskunftsrecht Art. 15',
        'Löschung & Berichtigung',
        'Weitere Betroffenenrechte',
        'Praktische Umsetzung'
      ],
      keyTakeaways: [
        'Alle 8 Rechte abgedeckt',
        'Prozess-Templates',
        'Fristenmanagement'
      ]
    },
    {
      id: 'dsfa-durchfuehrung',
      title: 'Datenschutz-Folgenabschätzung (DSFA)',
      subtitle: 'Art. 35 DSGVO Step-by-Step',
      description: 'Detaillierte Anleitung zur Durchführung einer DSFA mit Kriterien, Methodik und praktischen Beispielen.',
      readTime: '55 Min',
      difficulty: 'expert',
      topic: 'implementation',
      completions: 987,
      rating: 4.9,
      lastUpdated: '2024-01-17',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900',
      link: '/wissen/leitfaden/dsfa-durchfuehrung',
      chapters: [
        'DSFA-Pflicht prüfen',
        'Risiko-Assessment',
        'Maßnahmen definieren',
        'Konsultation DPO',
        'Behörden-Konsultation'
      ],
      keyTakeaways: [
        'Strukturierte DSFA-Methodik',
        'Risiko-Management',
        'Behörden-konforme Dokumentation'
      ],
      achievements: [
        'Hochrisiko-Verarbeitung absichern',
        'DSFA professionell durchführen',
        'Behörden-Konsultation vorbereiten'
      ]
    }
  ];

  const filteredGuides = guides.filter(guide => {
    const difficultyMatch = selectedDifficulty === 'all' || guide.difficulty === selectedDifficulty;
    const topicMatch = selectedTopic === 'all' || guide.topic === selectedTopic;
    return difficultyMatch && topicMatch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'expert': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'Einsteiger';
      case 'intermediate': return 'Fortgeschritten';
      case 'expert': return 'Experte';
      default: return difficulty;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F6F8] via-orange-50/20 to-[#F5F6F8]">
      <SEOHead 
        title="DSGVO Leitfäden 2024 - Datenschutz richtig umsetzen"
        description="DSGVO Leitfäden & Guides 2024: Grundlagen ✓ Website-Compliance ✓ Verarbeitungsverzeichnis ✓ Datenpanne-Management. Praxisnah erklärt. Jetzt durchstarten!"
        canonical="/wissen/dsgvo"
        keywords="DSGVO Leitfaden, DSGVO Guide, Datenschutz Grundlagen, DSGVO Website, DSGVO Umsetzung, DSGVO 2024, Datenschutz Leitfaden"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "name": "DSGVO Leitfäden und Guides",
          "description": "Sammlung praktischer DSGVO-Leitfäden für verschiedene Anwendungsfälle und Schwierigkeitsgrade.",
          "audience": {
            "@type": "Audience",
            "audienceType": "Business Owners, Data Protection Officers, Legal Professionals"
          }
        }}
      />
      <Header />

      {/* Breadcrumb Navigation */}
      <div className="container px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList className="text-[#474747]">
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="hover:text-[#e24e1b] transition-colors">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-[#e24e1b]" />
            <BreadcrumbItem>
              <BreadcrumbLink href="/wissen" className="hover:text-[#e24e1b] transition-colors">Wissen</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-[#e24e1b]" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#232323] font-semibold">DSGVO Leitfäden</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#e24e1b]/5 to-[#f97316]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#f97316]/5 to-[#e24e1b]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#e24e1b]/3 to-[#f97316]/3 rounded-full blur-3xl animate-spin-slow" />
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y }}
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-[#e24e1b]/10 backdrop-blur-sm rounded-full mb-8 border border-[#e24e1b]/20"
            >
              <Shield className="h-5 w-5 text-[#e24e1b]" />
              <span className="text-sm font-semibold text-[#232323]">DSGVO-Leitfäden</span>
              <FileText className="h-5 w-5 text-[#f97316]" />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span className="text-[#232323]">DSGVO</span>
              <br />
              <span className="bg-gradient-to-r from-[#e24e1b] via-[#f97316] to-[#e24e1b] bg-clip-text text-transparent">
                Leitfäden
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-[#474747] max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Praxiserprobte <span className="font-semibold text-[#e24e1b]">Schritt-für-Schritt Anleitungen</span>
              für erfolgreiche DSGVO-Implementierung - von Grundlagen bis Expertenwissen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-[#e24e1b] hover:bg-[#f97316] text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300" asChild>
                  <Link to="/assessment-center/datenschutz-test">
                    <Target className="mr-2 h-5 w-5" />
                    Wo stehe ich aktuell? Jetzt testen
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-[#e24e1b] hover:border-[#f97316] text-[#232323] hover:bg-[#e24e1b]/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                  <Download className="mr-2 h-5 w-5" />
                  Alle PDFs herunterladen
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex justify-center max-w-5xl mx-auto"
          >
            {[
              { value: '10', label: 'Detaillierte Leitfäden', sublabel: 'Von Basics bis Expert', icon: FileText, color: 'from-[#e24e1b] to-[#f97316]' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-[#e24e1b]/20 hover:border-[#e24e1b] hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-[#232323] mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-[#232323] mb-1">{stat.label}</div>
                  <div className="text-xs text-[#474747]">{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Difficulty Filter */}
            <div>
              <h3 className="text-lg font-semibold text-[#232323] mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-[#e24e1b]" />
                Schwierigkeitsgrad
              </h3>
              <div className="flex flex-wrap gap-3">
                {difficulties.map((difficulty, index) => (
                  <motion.button
                    key={difficulty.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedDifficulty(difficulty.id)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border",
                      selectedDifficulty === difficulty.id
                        ? "bg-[#e24e1b] text-white border-[#e24e1b] shadow-lg"
                        : "bg-white text-[#474747] border-gray-200 hover:border-[#e24e1b] hover:text-[#e24e1b]"
                    )}
                  >
                    <span>{difficulty.name}</span>
                    <Badge className="bg-gray-100 text-[#474747] border-0 text-xs">
                      {difficulty.count}
                    </Badge>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Topic Filter */}
            <div>
              <h3 className="text-lg font-semibold text-[#232323] mb-4 flex items-center gap-2">
                <Filter className="h-5 w-5 text-[#e24e1b]" />
                Themenbereich
              </h3>
              <div className="flex flex-wrap gap-3">
                {topics.map((topic, index) => (
                  <motion.button
                    key={topic.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedTopic(topic.id)}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 backdrop-blur-sm border",
                      selectedTopic === topic.id
                        ? "bg-[#e24e1b] text-white border-[#e24e1b] shadow-lg"
                        : "bg-white text-[#474747] border-gray-200 hover:border-[#e24e1b] hover:text-[#e24e1b]"
                    )}
                  >
                    <topic.icon className="h-4 w-4" />
                    <span>{topic.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10 bg-[#e24e1b]/10 opacity-0 group-hover:opacity-30" />

                <Card className="relative h-full border-l-4 border-transparent hover:border-[#e24e1b] transition-all duration-500 hover:shadow-xl bg-white overflow-hidden">
                  
                  <CardContent className="relative p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-4">
                          {guide.featured && (
                            <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/30">
                              <Star className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                          {guide.popular && (
                            <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/30">
                              <TrendingUp className="h-3 w-3 mr-1" />
                              Beliebt
                            </Badge>
                          )}
                          {guide.urgent && (
                            <Badge className="bg-red-500/10 text-red-600 border-red-500/30 animate-pulse">
                              <AlertOctagon className="h-3 w-3 mr-1" />
                              Urgent
                            </Badge>
                          )}
                        </div>
                        <h3 className="text-2xl font-bold mb-2 text-[#232323] group-hover:text-[#e24e1b] transition-colors">{guide.title}</h3>
                        <p className="text-lg text-[#e24e1b] mb-3">{guide.subtitle}</p>
                        <p className="text-[#474747] leading-relaxed">
                          {guide.description}
                        </p>
                      </div>
                    </div>

                    {/* Was Sie erreichen */}
                    <div className="mb-6 p-4 bg-[#e24e1b]/5 rounded-xl border border-[#e24e1b]/20">
                      <h4 className="text-sm font-bold text-[#232323] mb-3 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#e24e1b]" />
                        Was Sie erreichen
                      </h4>
                      <div className="space-y-2">
                        {guide.achievements?.map((achievement, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-[#e24e1b] mt-1.5 flex-shrink-0"></div>
                            <p className="text-sm text-[#474747]">{achievement}</p>
                          </div>
                        )) || (
                          <>
                            <div className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#e24e1b] mt-1.5 flex-shrink-0"></div>
                              <p className="text-sm text-[#474747]">DSGVO-konforme Prozesse</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#e24e1b] mt-1.5 flex-shrink-0"></div>
                              <p className="text-sm text-[#474747]">Rechtssichere Dokumentation</p>
                            </div>
                            <div className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#e24e1b] mt-1.5 flex-shrink-0"></div>
                              <p className="text-sm text-[#474747]">Audit-ready in {guide.difficulty === 'beginner' ? '7 Tagen' : '30 Tagen'}</p>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Chapters Preview */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#232323] mb-3 flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-[#e24e1b]" />
                        Kapitel Übersicht:
                      </h4>
                      <div className="space-y-2">
                        {guide.chapters.slice(0, 3).map((chapter, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#e24e1b] flex-shrink-0" />
                            <span className="text-sm text-[#474747]">{chapter}</span>
                          </motion.div>
                        ))}
                        {guide.chapters.length > 3 && (
                          <div className="text-sm text-[#474747] ml-6">
                            +{guide.chapters.length - 3} weitere Kapitel
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Key Takeaways */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-[#232323] mb-3 flex items-center gap-2">
                        <Target className="h-4 w-4 text-[#e24e1b]" />
                        Key Takeaways:
                      </h4>
                      <div className="space-y-2">
                        {guide.keyTakeaways.map((takeaway, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            className="flex items-center gap-2"
                          >
                            <Zap className="w-4 h-4 text-[#e24e1b] flex-shrink-0" />
                            <span className="text-sm text-[#474747]">{takeaway}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Progress Bar for Popular Guides */}
                    {guide.popular && (
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-[#474747]">Community Progress</span>
                          <span className="text-sm text-[#e24e1b]">78% abgeschlossen</span>
                        </div>
                        <Progress value={78} className="h-2" />
                      </div>
                    )}

                    {/* CTA */}
                    <div className="mt-auto flex gap-3">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-grow"
                      >
                        <Button asChild className="w-full bg-[#e24e1b] hover:bg-[#f97316] text-white border-0 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                          <Link to={guide.link} className="flex items-center justify-center gap-2">
                            <span>Leitfaden lesen</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Link>
                        </Button>
                      </motion.div>

                      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <Button variant="outline" size="sm" className="px-3 border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b]/10">
                          <Bookmark className="h-4 w-4" />
                        </Button>
                      </motion.div>
                    </div>

                    {/* Last Updated */}
                    <div className="mt-4 text-xs text-[#474747] flex items-center gap-2">
                      <Calendar className="h-3 w-3" />
                      Zuletzt aktualisiert: {new Date(guide.lastUpdated).toLocaleDateString('de-DE')}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Resources Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-[#232323]">Weitere</span>
              <br />
              <span className="bg-gradient-to-r from-[#e24e1b] via-[#f97316] to-[#e24e1b] bg-clip-text text-transparent">
                Ressourcen
              </span>
            </h2>
            <p className="text-xl text-[#474747] max-w-3xl mx-auto">
              Ergänzende Tools und Artikel für fundierte DSGVO-Entscheidungen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <Card className="border-l-4 border-[#e24e1b] bg-white h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-[#e24e1b] to-[#f97316] rounded-xl">
                      <Euro className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#232323]">Kosten transparent machen</h3>
                  </div>
                  <div className="space-y-4">
                    <Link to="/wissen/kosten/dsgvo-compliance-kosten" className="block group">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#e24e1b]/5 transition-all">
                        <span className="text-[#474747] group-hover:text-[#232323]">Was kostet DSGVO-Compliance?</span>
                        <ArrowRight className="h-5 w-5 text-[#e24e1b] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                    <Link to="/wissen/kosten/externer-datenschutzbeauftragter-kosten" className="block group">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#e24e1b]/5 transition-all">
                        <span className="text-[#474747] group-hover:text-[#232323]">Externer DSB: Kosten-Vergleich</span>
                        <ArrowRight className="h-5 w-5 text-[#e24e1b] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                    <Link to="/assessment-center/dsgvo-kosten-rechner" className="block group">
                      <div className="flex items-center justify-between p-4 bg-[#e24e1b]/10 rounded-lg border border-[#e24e1b]/30 hover:border-[#e24e1b] transition-all">
                        <span className="text-[#232323] font-semibold flex items-center gap-2">
                          <Calculator className="h-4 w-4" />
                          Kostenrechner
                        </span>
                        <ArrowRight className="h-5 w-5 text-[#e24e1b] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Card className="border-l-4 border-[#e24e1b] bg-white h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-[#e24e1b] to-[#f97316] rounded-xl">
                      <AlertTriangle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#232323]">Häufige Probleme erkennen</h3>
                  </div>
                  <div className="space-y-4">
                    <Link to="/wissen/dsgvo-compliance-luecken" className="block group">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#e24e1b]/5 transition-all">
                        <span className="text-[#474747] group-hover:text-[#232323]">7 Anzeichen für DSGVO-Lücken</span>
                        <ArrowRight className="h-5 w-5 text-[#e24e1b] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                    <Link to="/wissen/interner-dsb-scheitert" className="block group">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#e24e1b]/5 transition-all">
                        <span className="text-[#474747] group-hover:text-[#232323]">Warum interne DSB scheitern</span>
                        <ArrowRight className="h-5 w-5 text-[#e24e1b] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                    <Link to="/wissen/dsgvo-software-vs-manuell" className="block group">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#e24e1b]/5 transition-all">
                        <span className="text-[#474747] group-hover:text-[#232323]">Software vs. manuelle Lösung</span>
                        <ArrowRight className="h-5 w-5 text-[#e24e1b] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Card className="border-l-4 border-[#e24e1b] bg-white h-full hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-gradient-to-r from-[#e24e1b] to-[#f97316] rounded-xl">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#232323]">Entscheidungshilfen</h3>
                  </div>
                  <div className="space-y-4">
                    <Link to="/ratgeber/datenschutzbeauftragter-auswahl" className="block group">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#e24e1b]/5 transition-all">
                        <span className="text-[#474747] group-hover:text-[#232323]">DSB-Modell Auswahlratgeber</span>
                        <ArrowRight className="h-5 w-5 text-[#e24e1b] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                    <Link to="/ratgeber/dsgvo-software-auswahlkriterien" className="block group">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#e24e1b]/5 transition-all">
                        <span className="text-[#474747] group-hover:text-[#232323]">Software-Auswahlkriterien</span>
                        <ArrowRight className="h-5 w-5 text-[#e24e1b] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                    <Link to="/ratgeber/sicherheitszertifizierung-auswahl" className="block group">
                      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-[#e24e1b]/5 transition-all">
                        <span className="text-[#474747] group-hover:text-[#232323]">Zertifizierung wählen</span>
                        <ArrowRight className="h-5 w-5 text-[#e24e1b] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#e24e1b]/5" />

        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-[#232323]">Bereit für</span>
              <br />
              <span className="bg-gradient-to-r from-[#e24e1b] via-[#f97316] to-[#e24e1b] bg-clip-text text-transparent">
                DSGVO-Exzellenz?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-[#474747] mb-12 max-w-3xl mx-auto leading-relaxed">
              Starten Sie mit unseren bewährten Leitfäden und werden Sie zum <span className="font-semibold text-[#e24e1b]">DSGVO-Experten</span>.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-[#e24e1b] hover:bg-[#f97316] text-white px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                  asChild
                >
                  <Link to="/wissen/leitfaden/dsgvo-grundlagen">
                    <Rocket className="mr-3 h-6 w-6" />
                    Jetzt starten mit Grundlagen
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Link>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-[#e24e1b] hover:border-[#f97316] text-[#232323] hover:bg-[#e24e1b]/10 px-10 py-4 text-lg font-bold backdrop-blur-sm">
                  <Download className="mr-3 h-6 w-6" />
                  PDF Bundle herunterladen
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DsgvoGuides;