import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  Target,
  Shield,
  AlertTriangle,
  TrendingUp,
  Activity,
  BarChart3,
  CheckCircle2,
  ArrowRight,
  Clock,
  FileText,
  Scale,
  Eye,
  Brain,
  Settings,
  Gauge,
  ShieldCheck,
  AlertOctagon,
  ChevronRight,
  Download,
  ExternalLink,
  Lightbulb,
  Database,
  Users,
  Building2,
  Zap,
  LineChart,
  Calendar,
  Search,
  Star,
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const RiskManagement: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "name": "Risk Management für Compliance - ISO 31000 & DSFA Anleitung",
    "description": "Systematisches Risikomanagement: Identifikation, Bewertung und Behandlung von Compliance-Risiken nach ISO 31000. Mit DSFA-Vorlagen und KPI-Dashboards.",
    "url": "https://marsstein.ai/wissen/risk-management",
    "datePublished": "2024-01-01",
    "dateModified": "2025-01-15",
    "author": {
      "@type": "Organization",
      "name": "Marsstein"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Marsstein",
      "logo": {
        "@type": "ImageObject",
        "url": "https://marsstein.ai/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://marsstein.ai/wissen/risk-management"
    }
  };

  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was ist Risk Management im Compliance-Kontext?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Risk Management ist der systematische Prozess zur Identifikation, Bewertung und Behandlung von Compliance-Risiken. Es umfasst die kontinuierliche Überwachung von Datenschutz-, Sicherheits- und regulatorischen Risiken nach Standards wie ISO 31000."
        }
      },
      {
        "@type": "Question",
        "name": "Wann ist eine DSFA (Datenschutz-Folgenabschätzung) erforderlich?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Eine DSFA ist nach Art. 35 DSGVO erforderlich, wenn eine Datenverarbeitung voraussichtlich ein hohes Risiko für die Rechte und Freiheiten natürlicher Personen zur Folge hat. Dies betrifft insbesondere neue Technologien, umfangreiche Verarbeitungen oder systematische Überwachung."
        }
      },
      {
        "@type": "Question",
        "name": "Wie oft sollte ein Risk Assessment durchgeführt werden?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Risk Assessments sollten mindestens jährlich sowie bei wesentlichen Änderungen durchgeführt werden. Bei kritischen Systemen oder hohen Risiken empfiehlt sich eine quartalsweise oder sogar kontinuierliche Bewertung."
        }
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'Alle Themen', icon: Target, count: 24 },
    { id: 'identification', name: 'Identifikation', icon: Search, count: 4 },
    { id: 'assessment', name: 'Bewertung', icon: BarChart3, count: 4 },
    { id: 'treatment', name: 'Behandlung', icon: Shield, count: 4 },
    { id: 'monitoring', name: 'Monitoring', icon: Activity, count: 4 },
    { id: 'compliance', name: 'Compliance', icon: Scale, count: 4 },
    { id: 'tools', name: 'Tools', icon: Settings, count: 4 }
  ];

  const riskArticles = [
    {
      id: 'risk-assessment',
      title: 'Risk Assessment Grundlagen',
      subtitle: 'Systematische Risikoidentifikation',
      description: 'Lernen Sie, wie Sie Compliance-Risiken systematisch identifizieren und dokumentieren. Mit praktischen Methoden und Templates für Ihr Risk Register.',
      category: 'identification',
      icon: Search,
      color: 'from-orange-500 to-red-500',
      difficulty: 'Einsteiger',
      readTime: '10 Min',
      link: '/wissen/leitfaden/risk-assessment',
      popular: true,
      tags: ['ISO 31000', 'Risk Register', 'Compliance']
    },
    {
      id: 'threat-modeling',
      title: 'Bedrohungsmodellierung',
      subtitle: 'STRIDE & DREAD Methoden',
      description: 'Professionelle Threat Modeling Ansätze für systematische Bedrohungsanalyse. Inkl. STRIDE, DREAD und Attack Trees.',
      category: 'identification',
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-500',
      difficulty: 'Fortgeschritten',
      readTime: '14 Min',
      link: '/wissen/risk-management/threat-modeling',
      tags: ['STRIDE', 'DREAD', 'Security']
    },
    {
      id: 'vulnerability-scanning',
      title: 'Vulnerability Scanning',
      subtitle: 'Schwachstellen identifizieren',
      description: 'Technische und organisatorische Schwachstellen systematisch aufdecken und priorisieren. Mit Tool-Empfehlungen.',
      category: 'identification',
      icon: Eye,
      color: 'from-blue-500 to-indigo-500',
      difficulty: 'Technisch',
      readTime: '12 Min',
      link: '/wissen/risk-management/vulnerability-scanning',
      tags: ['Security', 'Testing', 'Tools']
    },
    {
      id: 'risk-register',
      title: 'Risk Register aufbauen',
      subtitle: 'Zentrale Risikodokumentation',
      description: 'Erstellen und pflegen Sie ein zentrales Risk Register. Mit Excel-Templates und Best Practices aus der Praxis.',
      category: 'identification',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      difficulty: 'Praktisch',
      readTime: '8 Min',
      link: '/wissen/risk-management/risk-register',
      tags: ['Dokumentation', 'Templates', 'Praxis']
    },
    {
      id: 'risikomatrix',
      title: 'Risikomatrix erstellen',
      subtitle: 'Wahrscheinlichkeit vs. Impact',
      description: 'Bewerten Sie Risiken nach Eintrittswahrscheinlichkeit und Schadenshöhe. Mit praktischen Bewertungsskalen.',
      category: 'assessment',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      difficulty: 'Fortgeschritten',
      readTime: '10 Min',
      link: '/wissen/risk-management/risikomatrix',
      popular: true,
      tags: ['Bewertung', 'Matrix', 'Methodik']
    },
    {
      id: 'quantitative-analyse',
      title: 'Quantitative Risikoanalyse',
      subtitle: 'Monetäre Risikobewertung',
      description: 'Berechnen Sie ALE, SLE und ARO für fundierte Business Cases. Mit Excel-Rechner und Beispielen.',
      category: 'assessment',
      icon: TrendingUp,
      color: 'from-blue-500 to-cyan-500',
      difficulty: 'Experte',
      readTime: '16 Min',
      link: '/wissen/risk-management/quantitative-analyse',
      tags: ['ALE', 'ROI', 'Business Case']
    },
    {
      id: 'qualitative-bewertung',
      title: 'Qualitative Bewertung',
      subtitle: 'Risiken ohne Zahlen',
      description: 'Sinnvolle Risikobewertung auch ohne exakte Zahlen. Methoden für schnelle und pragmatische Einschätzungen.',
      category: 'assessment',
      icon: Scale,
      color: 'from-purple-500 to-pink-500',
      difficulty: 'Praktisch',
      readTime: '8 Min',
      link: '/wissen/risk-management/qualitative-bewertung',
      tags: ['Methodik', 'Quick Assessment', 'Praxis']
    },
    {
      id: 'risk-scoring',
      title: 'Risk Scoring Modelle',
      subtitle: 'CVSS, FAIR & Co.',
      description: 'Standardisierte Scoring-Systeme für objektive Risikobewertung. Von CVSS bis FAIR Framework.',
      category: 'assessment',
      icon: Gauge,
      color: 'from-green-500 to-teal-500',
      difficulty: 'Fortgeschritten',
      readTime: '12 Min',
      link: '/wissen/risk-management/risk-scoring',
      tags: ['CVSS', 'FAIR', 'Standards']
    },
    {
      id: 'risikostrategie',
      title: 'Risikostrategie wählen',
      subtitle: 'Die 4 Behandlungsoptionen',
      description: 'Vermeiden, Mindern, Transferieren oder Akzeptieren - wählen Sie die richtige Strategie für jedes Risiko.',
      category: 'treatment',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      difficulty: 'Fortgeschritten',
      readTime: '10 Min',
      link: '/wissen/risk-management/risikostrategie',
      popular: true,
      tags: ['Strategie', 'Entscheidung', 'Methodik']
    },
    {
      id: 'controls',
      title: 'Controls implementieren',
      subtitle: 'Wirksame Schutzmaßnahmen',
      description: 'Von präventiven bis zu detektiven Controls - implementieren Sie effektive Risikominderungsmaßnahmen.',
      category: 'treatment',
      icon: Shield,
      color: 'from-blue-500 to-indigo-500',
      difficulty: 'Praktisch',
      readTime: '14 Min',
      link: '/wissen/risk-management/controls',
      tags: ['TOM', 'Security', 'Implementation']
    },
    {
      id: 'versicherungen',
      title: 'Cyber-Versicherungen',
      subtitle: 'Risikotransfer nutzen',
      description: 'Cyber-Versicherungen richtig nutzen. Was wird abgedeckt, was nicht und wie Sie die beste Police finden.',
      category: 'treatment',
      icon: Building2,
      color: 'from-purple-500 to-pink-500',
      difficulty: 'Fortgeschritten',
      readTime: '12 Min',
      link: '/wissen/risk-management/versicherungen',
      tags: ['Versicherung', 'Transfer', 'Cyber']
    },
    {
      id: 'restrisiko',
      title: 'Restrisiko managen',
      subtitle: 'Verbleibendes Risiko',
      description: 'Professioneller Umgang mit Restrisiko. Dokumentation, Akzeptanz und kontinuierliche Überwachung.',
      category: 'treatment',
      icon: AlertOctagon,
      color: 'from-red-500 to-orange-500',
      difficulty: 'Praktisch',
      readTime: '8 Min',
      link: '/wissen/risk-management/restrisiko',
      tags: ['Restrisiko', 'Akzeptanz', 'Dokumentation']
    },
    {
      id: 'risk-kpis',
      title: 'Risk KPIs definieren',
      subtitle: 'Key Risk Indicators',
      description: 'Die wichtigsten KPIs für kontinuierliches Risk Monitoring. Mit Dashboard-Templates und Metriken.',
      category: 'monitoring',
      icon: Activity,
      color: 'from-green-500 to-emerald-500',
      difficulty: 'Fortgeschritten',
      readTime: '12 Min',
      link: '/wissen/risk-management/risk-kpis',
      popular: true,
      tags: ['KPI', 'Metrics', 'Dashboard']
    },
    {
      id: 'risk-dashboard',
      title: 'Risk Dashboard aufbauen',
      subtitle: 'Echtzeit-Visualisierung',
      description: 'Erstellen Sie ein aussagekräftiges Risk Dashboard. Mit Tool-Empfehlungen und Best Practices.',
      category: 'monitoring',
      icon: LineChart,
      color: 'from-blue-500 to-cyan-500',
      difficulty: 'Technisch',
      readTime: '10 Min',
      link: '/wissen/risk-management/risk-dashboard',
      tags: ['Dashboard', 'Visualisierung', 'Tools']
    },
    {
      id: 'fruehwarnung',
      title: 'Frühwarnsysteme',
      subtitle: 'Proaktive Risikoerkennung',
      description: 'Implementieren Sie effektive Frühwarnsysteme für proaktives Risk Management. Mit Beispielen und Patterns.',
      category: 'monitoring',
      icon: AlertTriangle,
      color: 'from-orange-500 to-red-500',
      difficulty: 'Experte',
      readTime: '14 Min',
      link: '/wissen/risk-management/fruehwarnung',
      tags: ['Early Warning', 'Automation', 'Monitoring']
    },
    {
      id: 'reporting',
      title: 'Risk Reporting',
      subtitle: 'Management-Kommunikation',
      description: 'Effektive Risikokommunikation an Management und Stakeholder. Mit Report-Templates.',
      category: 'monitoring',
      icon: FileText,
      color: 'from-purple-500 to-pink-500',
      difficulty: 'Praktisch',
      readTime: '8 Min',
      link: '/wissen/risk-management/reporting',
      tags: ['Reporting', 'Communication', 'Management']
    },
    {
      id: 'dsfa',
      title: 'DSFA durchführen',
      subtitle: 'Datenschutz-Folgenabschätzung',
      description: 'Vollständiger Leitfaden zur DSFA nach Art. 35 DSGVO. Mit Vorlagen, Checklisten und Praxisbeispielen.',
      category: 'compliance',
      icon: ShieldCheck,
      color: 'from-blue-500 to-indigo-500',
      difficulty: 'Experte',
      readTime: '18 Min',
      link: '/wissen/leitfaden/dsfa-durchfuehrung',
      popular: true,
      certification: true,
      tags: ['DSGVO', 'DSFA', 'Art. 35']
    },
    {
      id: 'iso31000',
      title: 'ISO 31000 umsetzen',
      subtitle: 'Internationaler Standard',
      description: 'ISO 31000 Risikomanagement-Standard in der Praxis. Von der Planung bis zur Zertifizierung.',
      category: 'compliance',
      icon: CheckCircle2,
      color: 'from-green-500 to-teal-500',
      difficulty: 'Fortgeschritten',
      readTime: '15 Min',
      link: '/wissen/risk-management/iso31000',
      certification: true,
      tags: ['ISO 31000', 'Standard', 'Zertifizierung']
    },
    {
      id: 'compliance-risk',
      title: 'Compliance Risk Assessment',
      subtitle: 'Rechtliche Risiken',
      description: 'Bewertung von rechtlichen und regulatorischen Risiken. Mit Compliance-Matrix und Legal-Checklisten.',
      category: 'compliance',
      icon: Scale,
      color: 'from-purple-500 to-pink-500',
      difficulty: 'Fortgeschritten',
      readTime: '12 Min',
      link: '/wissen/risk-management/compliance-risk',
      tags: ['Legal', 'Regulatory', 'Compliance']
    },
    {
      id: 'third-party',
      title: 'Third-Party Risk',
      subtitle: 'Lieferanten & Partner',
      description: 'Systematisches Third-Party Risk Management. Von der Bewertung bis zur laufenden Überwachung.',
      category: 'compliance',
      icon: Users,
      color: 'from-orange-500 to-red-500',
      difficulty: 'Praktisch',
      readTime: '10 Min',
      link: '/wissen/risk-management/third-party',
      tags: ['Vendor', 'Third-Party', 'Supply Chain']
    },
    {
      id: 'risk-assessment-tool',
      title: 'Risk Assessment Tool',
      subtitle: 'Interaktive Risikoanalyse',
      description: 'Nutzen Sie unser kostenloses Online-Tool für professionelle Risk Assessments. Mit automatischer Report-Generierung.',
      category: 'tools',
      icon: Gauge,
      color: 'from-red-500 to-pink-500',
      difficulty: 'Praktisch',
      readTime: '5 Min',
      link: '/tools/risk-assessment',
      tags: ['Tool', 'Online', 'Kostenlos']
    },
    {
      id: 'dsfa-generator',
      title: 'DSFA Generator',
      subtitle: 'Automatisierte DSFA',
      description: 'Erstellen Sie vollständige Datenschutz-Folgenabschätzungen mit unserem interaktiven Generator.',
      category: 'tools',
      icon: Zap,
      color: 'from-blue-500 to-cyan-500',
      difficulty: 'Praktisch',
      readTime: '5 Min',
      link: '/tools/dsfa-generator',
      tags: ['DSFA', 'Generator', 'Automation']
    },
    {
      id: 'risk-templates',
      title: 'Risk Templates',
      subtitle: 'Vorlagen & Checklisten',
      description: 'Professionelle Excel- und Word-Vorlagen für Risk Register, Reports und Assessments.',
      category: 'tools',
      icon: Download,
      color: 'from-green-500 to-emerald-500',
      difficulty: 'Praktisch',
      readTime: '3 Min',
      link: '/vorlagen/risk-management',
      tags: ['Templates', 'Download', 'Excel']
    },
    {
      id: 'compliance-check',
      title: 'Compliance Risk Check',
      subtitle: 'Kostenlose Analyse',
      description: 'Prüfen Sie Ihre Compliance-Risiken mit unserem kostenlosen Online-Assessment in nur 10 Minuten.',
      category: 'tools',
      icon: ShieldCheck,
      color: 'from-purple-500 to-pink-500',
      difficulty: 'Einsteiger',
      readTime: '10 Min',
      link: '/assessment-center/compliance-risk-check',
      popular: true,
      tags: ['Assessment', 'Kostenlos', 'Quick Check']
    }
  ];

  const filteredArticles = riskArticles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Einsteiger':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'Praktisch':
        return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Fortgeschritten':
        return 'bg-orange-50 text-[#e24e1b] border-orange-200';
      case 'Experte':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'Technisch':
        return 'bg-purple-50 text-purple-700 border-purple-200';
      default:
        return 'bg-stone-100 text-[#474747] border-stone-300';
    }
  };

  return (
    <>
      <SEOHead
        title="Risk Management für Compliance - ISO 31000 & DSFA Anleitung 2025"
        description="Risk Management systematisch umsetzen: Risiken identifizieren, bewerten & behandeln nach ISO 31000. ✓ DSFA-Vorlagen ✓ KPI-Dashboard ✓ Praxis-Tools"
        canonical="/wissen/risk-management"
        ogType="article"
        structuredData={[
          structuredData,
          faqStructuredData,
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://marsstein.ai"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Wissen",
                "item": "https://marsstein.ai/wissen"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "Risk Management",
                "item": "https://marsstein.ai/wissen/risk-management"
              }
            ]
          }
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-[#F5F6F8] via-orange-50/20 to-[#F5F6F8]">
        <Header />

        <div className="container px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/" className="text-[#474747] hover:text-[#e24e1b]">
                  Home
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-[#474747]" />
              <BreadcrumbItem>
                <BreadcrumbLink href="/wissen" className="text-[#474747] hover:text-[#e24e1b]">
                  Wissen
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-[#474747]" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#e24e1b] font-medium">
                  Risk Management
                </BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <motion.section
          className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white border-b border-stone-200"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative container mx-auto max-w-7xl text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-[#e24e1b] rounded-xl shadow-sm">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#232323]">
                Risk Management
              </h1>
            </div>

            <p className="text-xl text-[#474747] mb-8 max-w-4xl mx-auto leading-relaxed">
              Systematische Identifikation, Bewertung und Behandlung von Compliance-Risiken
              nach ISO 31000. Mit praktischen Vorlagen, Tools und KPI-Dashboards.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <FileText className="h-4 w-4 mr-2" />
                24 Leitfäden
              </Badge>
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <Users className="h-4 w-4 mr-2" />
                Für Risk Manager
              </Badge>
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <Calendar className="h-4 w-4 mr-2" />
                Januar 2025
              </Badge>
            </div>
          </div>
        </motion.section>

        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                <Card className="bg-white border-stone-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#474747]" />
                      <input
                        type="text"
                        placeholder="Suchen..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-[#F5F6F8] border border-stone-300 rounded-lg text-[#232323] placeholder-[#474747] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:border-transparent"
                      />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white border-stone-200 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#232323] mb-4">Kategorien</h3>
                    <div className="space-y-2">
                      {categories.map((category) => {
                        const Icon = category.icon;
                        const isSelected = activeCategory === category.id;
                        return (
                          <button
                            key={category.id}
                            onClick={() => setActiveCategory(category.id)}
                            className={cn(
                              "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200",
                              isSelected
                                ? "bg-orange-50 border border-[#e24e1b] text-[#e24e1b]"
                                : "border border-stone-200 text-[#474747] hover:bg-[#F5F6F8] hover:text-[#232323]"
                            )}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="h-4 w-4" />
                              <span className="text-sm font-medium">{category.name}</span>
                            </div>
                            <Badge variant="outline" className="text-xs border-current">
                              {category.count}
                            </Badge>
                          </button>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-[#e24e1b] to-[#f97316] text-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <Lightbulb className="h-8 w-8 mb-3" />
                    <h3 className="text-lg font-semibold mb-2">Quick Start</h3>
                    <p className="text-sm text-white/90 mb-4">
                      Starten Sie mit unserem kostenlosen Risk Assessment Tool
                    </p>
                    <Button
                      asChild
                      className="w-full bg-white text-[#e24e1b] hover:bg-white/90"
                    >
                      <Link to="/tools/risk-assessment">
                        Tool starten
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-3">
              {filteredArticles.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-16"
                >
                  <div className="p-4 bg-orange-50 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Search className="h-6 w-6 text-[#e24e1b]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#232323] mb-2">
                    Keine Ergebnisse gefunden
                  </h3>
                  <p className="text-[#474747] mb-4">
                    Versuchen Sie andere Suchbegriffe oder Filter.
                  </p>
                  <Button
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="bg-[#e24e1b] hover:bg-[#f97316] text-white"
                  >
                    Filter zurücksetzen
                  </Button>
                </motion.div>
              ) : (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredArticles.map((article, index) => {
                    const Icon = article.icon;
                    return (
                      <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className={cn(
                          "group relative overflow-hidden bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg",
                          "hover:-translate-y-1 h-full"
                        )}>
                          <CardContent className="p-6 flex flex-col h-full">
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className={cn("p-3 rounded-xl bg-gradient-to-r", article.color)}>
                                  <Icon className="h-6 w-6 text-white" />
                                </div>
                              </div>

                              <div className="flex flex-col items-end gap-2">
                                {article.popular && (
                                  <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                    <Star className="h-3 w-3 mr-1" />
                                    Beliebt
                                  </Badge>
                                )}
                                {article.certification && (
                                  <Badge className="bg-green-50 text-green-700 border-green-200">
                                    <CheckCircle2 className="h-3 w-3 mr-1" />
                                    Standard
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <h3 className="text-xl font-bold text-[#232323] mb-1">{article.title}</h3>
                            <p className="text-[#e24e1b] text-sm mb-3">{article.subtitle}</p>

                            <p className="text-[#474747] leading-relaxed mb-4 flex-grow">
                              {article.description}
                            </p>

                            <div className="bg-[#F5F6F8] border border-stone-200 rounded-lg p-3 mb-4">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-[#474747]" />
                                  <span className="text-sm font-medium text-[#232323]">{article.readTime}</span>
                                </div>
                                <Badge className={getDifficultyColor(article.difficulty)}>
                                  {article.difficulty}
                                </Badge>
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="flex flex-wrap gap-1">
                                {article.tags.slice(0, 3).map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="outline"
                                    className="text-xs bg-stone-100 text-[#474747] border-stone-300"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <Button
                              asChild
                              className="w-full bg-[#e24e1b] hover:bg-[#f97316] text-white shadow-sm mt-auto"
                            >
                              <Link to={article.link}>
                                <BookOpen className="h-4 w-4 mr-2" />
                                Details ansehen
                                <ArrowRight className="h-4 w-4 ml-2" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default RiskManagement;
