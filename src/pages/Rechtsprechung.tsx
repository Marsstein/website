import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Scale, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Clock,
  Star,
  Download,
  BookOpen,
  Target,
  Lightbulb,
  FileText,
  Users,
  Lock,
  Eye,
  Gavel,
  Euro,
  Calendar,
  Share2,
  Bookmark,
  ExternalLink,
  Zap,
  Brain,
  Award,
  TrendingUp,
  Settings,
  Database,
  Building2,
  UserCheck,
  ShieldCheck,
  FileCheck,
  Timer,
  Flag,
  MapPin,
  Globe,
  Phone,
  MessageSquare,
  Bell,
  Shield,
  Search,
  Filter,
  Activity,
  RefreshCw,
  Plus,
  Minus,
  X,
  Check,
  Edit3,
  Copy,
  Save,
  AlertTriangle,
  Info,
  HelpCircle,
  ChevronRight,
  ChevronDown,
  Hash,
  AtSign,
  Send,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Heart,
  Repeat2,
  MoreVertical,
  BarChart3,
  PieChart,
  LineChart,
  TrendingDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Rechtsprechung: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCourt, setSelectedCourt] = useState('all');
  const [expandedCase, setExpandedCase] = useState<string | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  const categories = [
    { id: 'all', name: 'Alle Bereiche', icon: Scale, count: 28 },
    { id: 'dsgvo', name: 'DSGVO & Datenschutz', icon: Shield, count: 18 },
    { id: 'cookies', name: 'Cookie-Rechtsprechung', icon: Database, count: 6 },
    { id: 'bussgeld', name: 'Bußgeld-Verfahren', icon: Euro, count: 4 }
  ];

  const courts = [
    { id: 'all', name: 'Alle Gerichte', count: 28 },
    { id: 'eugh', name: 'EuGH', count: 8 },
    { id: 'bgh', name: 'BGH', count: 5 },
    { id: 'vg', name: 'Verwaltungsgerichte', count: 7 },
    { id: 'lg', name: 'Landgerichte', count: 8 }
  ];

  const years = ['2024', '2023', '2022', '2021'];

  const landmarkCases = [
    {
      id: 'schrems-ii',
      title: 'Schrems II (EuGH)',
      subtitle: 'Privacy Shield für ungültig erklärt',
      date: '16. Juli 2020',
      court: 'EuGH',
      caseNumber: 'C-311/18',
      category: 'dsgvo',
      impact: 'SEHR HOCH',
      relevance: 'Fundamental',
      icon: Globe,
      color: 'from-red-500 to-orange-500',
      description: 'Der EuGH hat das Privacy Shield-Abkommen für ungültig erklärt und strengere Anforderungen für Datenübertragungen in die USA gestellt.',
      keyFindings: [
        'Privacy Shield bietet kein angemessenes Schutzniveau',
        'Standardvertragsklauseln bleiben gültig, aber mit Auflagen',
        'Einzelfallprüfung bei Drittlandtransfers erforderlich',
        'US-Überwachungsgesetze problematisch für EU-Bürger'
      ],
      practicalImpact: [
        'Stopp aller Privacy Shield-basierten Transfers',
        'Neubewertung aller US-Dienstleister erforderlich',
        'Verstärkte Due Diligence bei SCCs',
        'Mögliche Lokalisierung von Daten in EU'
      ],
      affectedCompanies: ['Facebook', 'Google', 'Microsoft', 'Amazon', 'Alle US-Cloud-Provider'],
      complianceActions: [
        'Transfer Impact Assessment durchführen',
        'Standardvertragsklauseln implementieren',
        'Zusätzliche Schutzmaßnahmen evaluieren',
        'Lokale Alternativen prüfen'
      ],
      timeline: [
        { date: '2020-07-16', event: 'EuGH Urteil verkündet' },
        { date: '2020-08-24', event: 'Irish DPC beginnt Facebook-Untersuchung' },
        { date: '2021-06-04', event: 'Neue Standard-Vertragsklauseln' },
        { date: '2022-09-12', event: 'Irish DPC stoppt Meta-Transfers' }
      ],
      relatedCases: ['Facebook Ireland vs DPC', 'Google Analytics Entscheidungen'],
      downloadLinks: [
        { title: 'Volltext Urteil (DE)', url: '#' },
        { title: 'Transfer Impact Assessment Tool', url: '#' },
        { title: 'SCC Implementation Guide', url: '#' }
      ]
    },
    {
      id: 'facebook-fanpage',
      title: 'Facebook Fanpage (EuGH)',
      subtitle: 'Gemeinsame Verantwortlichkeit bei Fanpages',
      date: '5. Juni 2018',
      court: 'EuGH',
      caseNumber: 'C-210/16',
      category: 'dsgvo',
      impact: 'HOCH',
      relevance: 'Grundlegend',
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      description: 'Fanpage-Betreiber sind gemeinsam mit Facebook für die Datenverarbeitung verantwortlich.',
      keyFindings: [
        'Fanpage-Betreiber sind Joint Controller',
        'Mitverantwortung trotz begrenzter Einflussmöglichkeiten',
        'Behörden können Fanpage-Betreiber direkt belangen',
        'Joint Controller Agreement erforderlich'
      ],
      practicalImpact: [
        'Alle Fanpage-Betreiber rechtlich verantwortlich',
        'Joint Controller Agreements notwendig',
        'Erweiterte Informationspflichten',
        'Mögliche Bußgelder für Fanpage-Betreiber'
      ],
      affectedCompanies: ['Alle Unternehmen mit Facebook Fanpages'],
      complianceActions: [
        'Joint Controller Agreement abschließen',
        'Datenschutzerklärung anpassen',
        'Page Insights Nutzung dokumentieren',
        'Alternative Kanäle evaluieren'
      ]
    },
    {
      id: 'google-analytics-austria',
      title: 'Google Analytics (Österreich)',
      subtitle: 'GA4 verstößt gegen DSGVO',
      date: '22. Dezember 2021',
      court: 'Österreichische DSB',
      caseNumber: 'DSB-D155.027',
      category: 'dsgvo',
      impact: 'HOCH',
      relevance: 'Aktuell',
      icon: BarChart3,
      color: 'from-purple-500 to-pink-500',
      description: 'Österreichische Datenschutzbehörde erklärt Google Analytics für DSGVO-widrig.',
      keyFindings: [
        'Datenübertragung in USA unzulässig',
        'IP-Anonymisierung unzureichend',
        'Keine angemessenen Schutzmaßnahmen',
        'Verstoß gegen DSGVO Art. 44 ff.'
      ],
      practicalImpact: [
        'Google Analytics Nutzung risikobehaftet',
        'Ähnliche Entscheidungen in anderen EU-Ländern',
        'Notwendigkeit für EU-Alternativen',
        'Verstärkte Behördenprüfungen'
      ],
      affectedCompanies: ['Alle GA-Nutzer in der EU'],
      complianceActions: [
        'Risk Assessment für GA durchführen',
        'EU-basierte Alternativen evaluieren',
        'Server-side Tracking implementieren',
        'Consent Management verstärken'
      ]
    }
  ];

  const recentDecisions = [
    {
      id: 'meta-irland-2024',
      title: 'Meta Irland - €1.2 Mrd Bußgeld',
      date: '22. Mai 2023',
      court: 'Irish DPC',
      amount: '€1.2 Milliarden',
      category: 'bussgeld',
      severity: 'KRITISCH',
      description: 'Höchstes DSGVO-Bußgeld der Geschichte für rechtswidrige Datenübertragungen in die USA.',
      violations: ['Art. 46 DSGVO - Rechtswidrige Drittlandübertragung'],
      impact: 'Präzedenzfall für US-Transfers',
      link: '/wissen/rechtsprechung/meta-irland-2024'
    },
    {
      id: 'amazon-luxemburg-2021',
      title: 'Amazon - €746 Mio Bußgeld',
      date: '30. Juli 2021',
      court: 'CNPD Luxemburg',
      amount: '€746 Millionen',
      category: 'bussgeld',
      severity: 'KRITISCH',
      description: 'Bußgeld wegen Verstößen bei der Verarbeitung personenbezogener Daten für Werbezwecke.',
      violations: ['Art. 6 DSGVO - Rechtsgrundlage für Werbung'],
      impact: 'Verschärfte Regeln für Targeted Advertising',
      link: '/wissen/rechtsprechung/amazon-luxemburg-2021'
    },
    {
      id: 'whatsapp-irland-2021',
      title: 'WhatsApp - €225 Mio Bußgeld',
      date: '2. September 2021',
      court: 'Irish DPC',
      amount: '€225 Millionen',
      category: 'bussgeld',
      severity: 'HOCH',
      description: 'Bußgeld wegen mangelnder Transparenz bei der Datenverarbeitung.',
      violations: ['Art. 12-14 DSGVO - Informationspflichten'],
      impact: 'Strengere Anforderungen an Transparenz',
      link: '/wissen/rechtsprechung/whatsapp-irland-2021'
    }
  ];

  const cookieDecisions = [
    {
      id: 'planet49-eugh',
      title: 'Planet49 - Cookie Consent',
      date: '1. Oktober 2019',
      court: 'EuGH',
      caseNumber: 'C-673/17',
      impact: 'Fundamental für Cookie-Rechtsprechung',
      description: 'Voreingestellte Checkboxen für Cookies sind unzulässig - aktive Einwilligung erforderlich.',
      requirements: [
        'Aktive Einwilligung ohne vorausgefüllte Checkboxen',
        'Spezifische Information über Cookie-Zwecke',
        'Unterscheidung zwischen technisch notwendigen und anderen Cookies',
        'Widerrufsmöglichkeit der Einwilligung'
      ],
      practicalChanges: [
        'Redesign aller Cookie-Banner',
        'Granulare Einwilligungsoptionen',
        'Verbesserte Cookie-Dokumentation',
        'Regelmäßige Consent-Audits'
      ]
    },
    {
      id: 'google-fonts-lg-muenchen',
      title: 'Google Fonts - LG München',
      date: '20. Januar 2022',
      court: 'LG München I',
      caseNumber: '3 O 17493/20',
      impact: 'Praxisrelevant für Webentwicklung',
      description: 'Einbindung von Google Fonts ohne Einwilligung verstößt gegen DSGVO.',
      technicalIssues: [
        'Automatische IP-Übertragung an Google',
        'Keine Einwilligung der Website-Besucher',
        'Drittlandtransfer ohne angemessene Garantien',
        'Verstoß gegen Prinzip der Datenminimierung'
      ],
      solutions: [
        'Lokale Hosting von Webfonts',
        'Self-hosted Font-Lösungen',
        'Consent-Management für externe Fonts',
        'Privacy-by-Design Webentwicklung'
      ]
    }
  ];

  const trendAnalysis = {
    2024: {
      totalFines: '€2.1 Milliarden',
      casesCount: 847,
      avgFine: '€2.5 Millionen',
      trends: [
        'Verstärkte Verfolgung von US-Transfers',
        'Höhere Bußgelder bei Wiederholungstätern',
        'Fokus auf Cookie-Compliance',
        'KI/AI-Regulierung beginnt'
      ],
      topViolations: [
        { violation: 'Drittlandtransfers', percentage: 35, cases: 296 },
        { violation: 'Mangelnde Transparenz', percentage: 28, cases: 237 },
        { violation: 'Fehlende Rechtsgrundlage', percentage: 22, cases: 186 },
        { violation: 'Unzureichende TOM', percentage: 15, cases: 127 }
      ]
    }
  };

  const upcomingCases = [
    {
      title: 'Google vs. CNIL (Frankreich)',
      expectedDate: 'Q2 2024',
      court: 'EuGH',
      topic: 'Right to be Forgotten global scope',
      description: 'Entscheidung über weltweite Gültigkeit des Rechts auf Vergessenwerden',
      implications: 'Global vs. EU-only delisting'
    },
    {
      title: 'Meta AI Training Case',
      expectedDate: 'Q3 2024', 
      court: 'Irish DPC',
      topic: 'AI Training ohne Consent',
      description: 'Rechtmäßigkeit von KI-Training mit User-Generated Content',
      implications: 'Grundlagen für AI/DSGVO Compliance'
    }
  ];

  const filteredCases = landmarkCases.filter(case_ => {
    const categoryMatch = selectedCategory === 'all' || case_.category === selectedCategory;
    const courtMatch = selectedCourt === 'all' || case_.court.toLowerCase().includes(selectedCourt);
    return categoryMatch && courtMatch;
  });

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'SEHR HOCH': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
      case 'HOCH': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100';
      case 'MITTEL': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'NIEDRIG': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'KRITISCH': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse';
      case 'HOCH': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100';
      case 'MITTEL': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  const toggleCaseExpansion = (caseId: string) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        style={{ y, opacity }}
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20"
            >
              <Scale className="h-5 w-5 text-purple-400 animate-spin-slow" />
              <span className="text-sm font-semibold text-purple-300">Legal Intelligence</span>
              <Gavel className="h-5 w-5 text-pink-400 animate-pulse" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span className="text-white">Rechtsprechung</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                & Updates
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Aktuelle <span className="font-semibold text-purple-300">Gerichtsurteile</span>, neue Regelungen und deren 
              <span className="font-semibold text-pink-300"> praktische Auswirkungen</span> für Ihr Unternehmen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  <Scale className="mr-2 h-5 w-5" />
                  Aktuelle Urteile entdecken
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                  <TrendingUp className="mr-2 h-5 w-5" />
                  Trend-Analyse ansehen
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Legal Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: '€2.1B', label: 'Bußgelder 2024', sublabel: 'DSGVO Gesamt', icon: Euro, color: 'from-red-500 to-orange-500' },
              { value: '847', label: 'Neue Fälle', sublabel: 'EU-weit 2024', icon: FileText, color: 'from-orange-500 to-yellow-500' },
              { value: '28', label: 'Landmark Cases', sublabel: 'Fundamental wichtig', icon: Star, color: 'from-yellow-500 to-green-500' },
              { value: '96%', label: 'Erfolgsquote', sublabel: 'Bei Umsetzung', icon: Target, color: 'from-green-500 to-blue-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1, duration: 0.6 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-300`} />
                <div className="relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:transform hover:scale-105 transition-all duration-300">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${stat.color} mb-4`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm font-semibold text-slate-200 mb-1">{stat.label}</div>
                  <div className="text-xs text-slate-400">{stat.sublabel}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-3">Rechtsgebiet</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <motion.button
                      key={category.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCategory(category.id)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300",
                        selectedCategory === category.id
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                          : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
                      )}
                    >
                      <category.icon className="h-4 w-4" />
                      <span className="text-sm">{category.name}</span>
                      <Badge className="bg-slate-600 text-slate-200 border-0 text-xs">
                        {category.count}
                      </Badge>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Court Filter */}
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-3">Gericht</h3>
                <div className="flex flex-wrap gap-2">
                  {courts.map((court) => (
                    <motion.button
                      key={court.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedCourt(court.id)}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300",
                        selectedCourt === court.id
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                          : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
                      )}
                    >
                      <span className="text-sm">{court.name}</span>
                      <Badge className="bg-slate-600 text-slate-200 border-0 text-xs">
                        {court.count}
                      </Badge>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Year Filter */}
              <div>
                <h3 className="text-sm font-semibold text-slate-300 mb-3">Jahr</h3>
                <div className="flex flex-wrap gap-2">
                  {years.map((year) => (
                    <motion.button
                      key={year}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedYear(year)}
                      className={cn(
                        "px-4 py-2 rounded-lg font-medium transition-all duration-300",
                        selectedYear === year
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                          : "bg-slate-700/50 text-slate-300 hover:bg-slate-600/50"
                      )}
                    >
                      <span className="text-sm">{year}</span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="landmark" className="space-y-8">
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 bg-slate-800/60 p-1 rounded-xl">
              <TabsTrigger value="landmark" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500">
                <Star className="h-4 w-4 mr-2" />
                Landmark Cases
              </TabsTrigger>
              <TabsTrigger value="recent" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500">
                <Clock className="h-4 w-4 mr-2" />
                Aktuelle Urteile
              </TabsTrigger>
              <TabsTrigger value="trends" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500">
                <TrendingUp className="h-4 w-4 mr-2" />
                Trend-Analyse
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500">
                <Calendar className="h-4 w-4 mr-2" />
                Anstehende Fälle
              </TabsTrigger>
            </TabsList>

            {/* Landmark Cases */}
            <TabsContent value="landmark" className="space-y-8">
              <div className="space-y-8">
                {filteredCases.map((case_, index) => (
                  <motion.div
                    key={case_.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    className="group relative"
                  >
                    {/* Glow Effect */}
                    <div className={cn(
                      "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
                      `bg-gradient-to-r ${case_.color}`,
                      "opacity-0 group-hover:opacity-20"
                    )} />
                    
                    <Card className="border-2 border-slate-700/50 bg-slate-800/80 transition-all duration-500 group-hover:shadow-2xl overflow-hidden">
                      <CardContent className="p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-start gap-4">
                            <motion.div 
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              className={cn(
                                "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                                case_.color
                              )}
                            >
                              <case_.icon className="h-8 w-8 text-white" />
                            </motion.div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                  {case_.title}
                                </h3>
                                <Badge className={getImpactColor(case_.impact)}>
                                  {case_.impact}
                                </Badge>
                              </div>
                              <p className="text-lg text-purple-300 font-semibold mb-2">{case_.subtitle}</p>
                              <div className="flex items-center gap-4 text-sm text-slate-400">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  {case_.date}
                                </div>
                                <div className="flex items-center gap-1">
                                  <Scale className="h-4 w-4" />
                                  {case_.court}
                                </div>
                                <div className="flex items-center gap-1">
                                  <FileText className="h-4 w-4" />
                                  {case_.caseNumber}
                                </div>
                              </div>
                            </div>
                          </div>
                          <Button
                            onClick={() => toggleCaseExpansion(case_.id)}
                            variant="ghost"
                            size="sm"
                            className="text-slate-400 hover:text-white"
                          >
                            {expandedCase === case_.id ? (
                              <ChevronDown className="h-5 w-5" />
                            ) : (
                              <ChevronRight className="h-5 w-5" />
                            )}
                          </Button>
                        </div>

                        {/* Description */}
                        <p className="text-slate-300 mb-6 leading-relaxed">
                          {case_.description}
                        </p>

                        {/* Key Findings */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Lightbulb className="h-5 w-5 text-yellow-400" />
                            Zentrale Erkenntnisse
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {case_.keyFindings.map((finding, idx) => (
                              <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                                className="flex items-start gap-3 p-3 bg-slate-700/50 rounded-xl"
                              >
                                <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-300">{finding}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Practical Impact */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                            <Target className="h-5 w-5 text-red-400" />
                            Praktische Auswirkungen
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {case_.practicalImpact.map((impact, idx) => (
                              <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                                className="flex items-start gap-3 p-3 bg-red-500/10 rounded-xl border border-red-500/30"
                              >
                                <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-slate-300">{impact}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedCase === case_.id && (
                          <motion.div 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-6 pt-6 border-t border-slate-700"
                          >
                            {/* Compliance Actions */}
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                <Shield className="h-5 w-5 text-green-400" />
                                Compliance-Maßnahmen
                              </h4>
                              <div className="grid md:grid-cols-2 gap-3">
                                {case_.complianceActions.map((action, idx) => (
                                  <div key={idx} className="flex items-start gap-3 p-3 bg-green-500/10 rounded-xl border border-green-500/30">
                                    <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-slate-300">{action}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Timeline */}
                            {case_.timeline && (
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                  <Clock className="h-5 w-5 text-blue-400" />
                                  Timeline
                                </h4>
                                <div className="space-y-3">
                                  {case_.timeline.map((event, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-3 bg-slate-700/50 rounded-xl">
                                      <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs">
                                        {event.date}
                                      </Badge>
                                      <span className="text-sm text-slate-300">{event.event}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Download Links */}
                            {case_.downloadLinks && (
                              <div>
                                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                  <Download className="h-5 w-5 text-purple-400" />
                                  Dokumente & Ressourcen
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                  {case_.downloadLinks.map((link, idx) => (
                                    <Button key={idx} variant="outline" size="sm" className="border-purple-500/30 text-purple-300">
                                      <Download className="h-4 w-4 mr-2" />
                                      {link.title}
                                    </Button>
                                  ))}
                                </div>
                              </div>
                            )}
                          </motion.div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex gap-3 mt-6 pt-6 border-t border-slate-700">
                          <Button 
                            asChild
                            className={cn(
                              "bg-gradient-to-r text-white border-0 font-semibold",
                              case_.color
                            )}
                          >
                            <Link to={`/wissen/rechtsprechung/${case_.id}`}>
                              <BookOpen className="mr-2 h-4 w-4" />
                              Detailanalyse lesen
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                            <Share2 className="h-4 w-4 mr-2" />
                            Teilen
                          </Button>
                          <Button variant="outline" size="sm" className="border-slate-600 text-slate-300">
                            <Bookmark className="h-4 w-4 mr-2" />
                            Merken
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Recent Decisions */}
            <TabsContent value="recent" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {recentDecisions.map((decision, index) => (
                  <motion.div
                    key={decision.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-bold text-white">{decision.title}</h3>
                              <Badge className={getSeverityColor(decision.severity)}>
                                {decision.severity}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                              <span>{decision.date}</span>
                              <span>{decision.court}</span>
                            </div>
                            <div className="text-2xl font-bold text-red-400 mb-3">{decision.amount}</div>
                          </div>
                        </div>
                        
                        <p className="text-slate-300 mb-4">{decision.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-slate-300 mb-2">Verstöße:</h4>
                          <div className="space-y-1">
                            {decision.violations.map((violation, idx) => (
                              <div key={idx} className="text-xs text-red-300 bg-red-500/10 px-2 py-1 rounded">
                                {violation}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-slate-300 mb-2">Auswirkungen:</h4>
                          <p className="text-sm text-slate-400">{decision.impact}</p>
                        </div>
                        
                        <Button asChild className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                          <Link to={decision.link}>
                            Vollständige Analyse
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            {/* Trend Analysis */}
            <TabsContent value="trends" className="space-y-8">
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Stats Overview */}
                <Card className="bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <BarChart3 className="h-6 w-6 text-purple-400" />
                      DSGVO Trends 2024
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Gesamt-Bußgelder:</span>
                        <span className="text-2xl font-bold text-red-400">{trendAnalysis[2024].totalFines}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Anzahl Fälle:</span>
                        <span className="text-xl font-bold text-white">{trendAnalysis[2024].casesCount}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-slate-300">Ø Bußgeld:</span>
                        <span className="text-xl font-bold text-orange-400">{trendAnalysis[2024].avgFine}</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Haupt-Trends</h4>
                      <div className="space-y-3">
                        {trendAnalysis[2024].trends.map((trend, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl">
                            <TrendingUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                            <span className="text-sm text-slate-300">{trend}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Top Violations */}
                <Card className="bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                      <PieChart className="h-6 w-6 text-red-400" />
                      Häufigste Verstöße
                    </h3>
                    
                    <div className="space-y-4">
                      {trendAnalysis[2024].topViolations.map((violation, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-slate-300 font-medium">{violation.violation}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-white font-bold">{violation.percentage}%</span>
                              <Badge className="bg-slate-700 text-slate-200 text-xs">
                                {violation.cases} Fälle
                              </Badge>
                            </div>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <motion.div 
                              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${violation.percentage}%` }}
                              transition={{ duration: 1, delay: idx * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Upcoming Cases */}
            <TabsContent value="upcoming" className="space-y-8">
              <div className="space-y-6">
                {upcomingCases.map((case_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                  >
                    <Card className="bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-white mb-2">{case_.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-slate-400 mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {case_.expectedDate}
                              </div>
                              <div className="flex items-center gap-1">
                                <Scale className="h-4 w-4" />
                                {case_.court}
                              </div>
                            </div>
                            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30 mb-3">
                              {case_.topic}
                            </Badge>
                          </div>
                          <Flag className="h-6 w-6 text-yellow-400" />
                        </div>
                        
                        <p className="text-slate-300 mb-4">{case_.description}</p>
                        
                        <div className="bg-slate-700/50 rounded-xl p-4">
                          <h4 className="text-sm font-semibold text-slate-300 mb-2">Mögliche Auswirkungen:</h4>
                          <p className="text-sm text-slate-400">{case_.implications}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Cookie Law Special Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-purple-900/30 to-slate-800/50" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Cookie-Rechtsprechung
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300">
              Wichtige Urteile zur Website-Compliance
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {cookieDecisions.map((decision, index) => (
              <motion.div
                key={decision.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Database className="h-8 w-8 text-purple-400" />
                      <div>
                        <h3 className="text-xl font-bold text-white">{decision.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-slate-400">
                          <span>{decision.date}</span>
                          <span>{decision.court}</span>
                        </div>
                      </div>
                    </div>
                    
                    <Badge className="bg-purple-500/20 text-purple-300 border-purple-500/30 mb-4">
                      {decision.impact}
                    </Badge>
                    
                    <p className="text-slate-300 mb-6">{decision.description}</p>
                    
                    {decision.requirements && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Anforderungen:</h4>
                        <div className="space-y-2">
                          {decision.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-300">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {decision.technicalIssues && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Technische Probleme:</h4>
                        <div className="space-y-2">
                          {decision.technicalIssues.map((issue, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-slate-300">{issue}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Lösungsansätze:</h4>
                      <div className="space-y-2">
                        {(decision.practicalChanges || decision.solutions).map((solution, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-300">{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Detailanalyse lesen
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-purple-900/20" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Immer</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                rechtsicher
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Bleiben Sie <span className="font-semibold text-purple-300">immer auf dem neuesten Stand</span> 
              der Rechtsprechung und setzen Sie Urteile proaktiv um.
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
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  <Bell className="mr-3 h-6 w-6" />
                  Legal Updates abonnieren
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 px-10 py-4 text-lg font-bold backdrop-blur-sm">
                  <Download className="mr-3 h-6 w-6" />
                  Urteilssammlung
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

export default Rechtsprechung;