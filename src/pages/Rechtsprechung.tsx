import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  Scale,
  CheckCircle2,
  ArrowRight,
  Clock,
  Star,
  Download,
  BookOpen,
  Target,
  Lightbulb,
  FileText,
  Users,
  Gavel,
  Euro,
  Calendar,
  Share2,
  Bookmark,
  TrendingUp,
  Database,
  Flag,
  Globe,
  Bell,
  Shield,
  Search,
  Filter,
  Check,
  AlertTriangle,
  ChevronRight,
  ChevronDown,
  BarChart3,
  PieChart
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Rechtsprechung: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedCourt, setSelectedCourt] = useState('all');
  const [expandedCase, setExpandedCase] = useState<string | null>(null);

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
      case 'SEHR HOCH': return 'bg-red-50 text-red-700 border-red-200';
      case 'HOCH': return 'bg-orange-50 text-[#e24e1b] border-orange-200';
      case 'MITTEL': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'NIEDRIG': return 'bg-green-50 text-green-700 border-green-200';
      default: return 'bg-stone-100 text-[#474747] border-stone-300';
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'KRITISCH': return 'bg-red-50 text-red-700 border-red-200';
      case 'HOCH': return 'bg-orange-50 text-[#e24e1b] border-orange-200';
      case 'MITTEL': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      default: return 'bg-stone-100 text-[#474747] border-stone-300';
    }
  };

  const toggleCaseExpansion = (caseId: string) => {
    setExpandedCase(expandedCase === caseId ? null : caseId);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F6F8] via-orange-50/20 to-[#F5F6F8]">
      <Header />

      {/* Breadcrumb Navigation */}
      <div className="container mx-auto max-w-7xl px-4 py-4">
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
                Rechtsprechung
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Hero Section */}
      <motion.section
        className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white border-b border-stone-200"
      >
        <div className="relative container mx-auto max-w-7xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-[#e24e1b] rounded-xl shadow-sm">
                <Scale className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#232323]">
                Rechtsprechung & Updates
              </h1>
            </div>

            <p className="text-xl text-[#474747] mb-8 max-w-4xl mx-auto leading-relaxed">
              Aktuelle Gerichtsurteile, neue Regelungen und deren praktische Auswirkungen für Ihr Unternehmen.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <FileText className="h-4 w-4 mr-2" />
                28 Landmark Cases
              </Badge>
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <Calendar className="h-4 w-4 mr-2" />
                Laufend aktualisiert
              </Badge>
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <Target className="h-4 w-4 mr-2" />
                Praxisnah aufbereitet
              </Badge>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Filter Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <Card className="bg-white border-stone-200 shadow-sm">
            <CardContent className="p-6">
              <div className="grid lg:grid-cols-3 gap-6">
                {/* Category Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-[#232323] mb-4">Rechtsgebiet</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={cn(
                          "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200",
                          selectedCategory === category.id
                            ? "bg-orange-50 border border-[#e24e1b] text-[#e24e1b]"
                            : "border border-stone-200 text-[#474747] hover:bg-[#F5F6F8] hover:text-[#232323]"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <category.icon className="h-4 w-4" />
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                        <Badge variant="outline" className="text-xs border-current">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Court Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-[#232323] mb-4">Gericht</h3>
                  <div className="space-y-2">
                    {courts.map((court) => (
                      <button
                        key={court.id}
                        onClick={() => setSelectedCourt(court.id)}
                        className={cn(
                          "w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200",
                          selectedCourt === court.id
                            ? "bg-orange-50 border border-[#e24e1b] text-[#e24e1b]"
                            : "border border-stone-200 text-[#474747] hover:bg-[#F5F6F8] hover:text-[#232323]"
                        )}
                      >
                        <span className="text-sm font-medium">{court.name}</span>
                        <Badge variant="outline" className="text-xs border-current">
                          {court.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Year Filter */}
                <div>
                  <h3 className="text-lg font-semibold text-[#232323] mb-4">Jahr</h3>
                  <div className="space-y-2">
                    {years.map((year) => (
                      <button
                        key={year}
                        onClick={() => setSelectedYear(year)}
                        className={cn(
                          "w-full p-3 rounded-lg font-medium transition-all duration-200",
                          selectedYear === year
                            ? "bg-orange-50 border border-[#e24e1b] text-[#e24e1b]"
                            : "border border-stone-200 text-[#474747] hover:bg-[#F5F6F8] hover:text-[#232323]"
                        )}
                      >
                        <span className="text-sm">{year}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Main Content Tabs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <Tabs defaultValue="landmark" className="space-y-8">
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 bg-white border border-stone-200 p-1 rounded-xl">
              <TabsTrigger value="landmark" className="data-[state=active]:bg-[#e24e1b] data-[state=active]:text-white">
                <Star className="h-4 w-4 mr-2" />
                Landmark Cases
              </TabsTrigger>
              <TabsTrigger value="recent" className="data-[state=active]:bg-[#e24e1b] data-[state=active]:text-white">
                <Clock className="h-4 w-4 mr-2" />
                Aktuelle Urteile
              </TabsTrigger>
              <TabsTrigger value="trends" className="data-[state=active]:bg-[#e24e1b] data-[state=active]:text-white">
                <TrendingUp className="h-4 w-4 mr-2" />
                Trend-Analyse
              </TabsTrigger>
              <TabsTrigger value="upcoming" className="data-[state=active]:bg-[#e24e1b] data-[state=active]:text-white">
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className={cn(
                      "group relative overflow-hidden bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg",
                      "hover:-translate-y-1"
                    )}>
                      <CardContent className="p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-start gap-4">
                            <div className={cn("p-3 rounded-xl bg-gradient-to-r", case_.color)}>
                              <case_.icon className="h-6 w-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2 flex-wrap">
                                <h3 className="text-xl font-bold text-[#232323]">
                                  {case_.title}
                                </h3>
                                <Badge variant="outline" className={getImpactColor(case_.impact)}>
                                  {case_.impact}
                                </Badge>
                              </div>
                              <p className="text-sm text-[#e24e1b] mb-2">{case_.subtitle}</p>
                              <div className="flex items-center gap-4 text-sm text-[#474747]">
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
                            className="text-[#474747] hover:text-[#e24e1b]"
                          >
                            {expandedCase === case_.id ? (
                              <ChevronDown className="h-5 w-5" />
                            ) : (
                              <ChevronRight className="h-5 w-5" />
                            )}
                          </Button>
                        </div>

                        {/* Description */}
                        <p className="text-[#474747] mb-6 leading-relaxed">
                          {case_.description}
                        </p>

                        {/* Key Findings */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-[#232323] mb-4 flex items-center gap-2">
                            <Lightbulb className="h-5 w-5 text-[#e24e1b]" />
                            Zentrale Erkenntnisse
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {case_.keyFindings.map((finding, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-3 p-3 bg-[#F5F6F8] border border-stone-200 rounded-lg"
                              >
                                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-[#474747]">{finding}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Practical Impact */}
                        <div className="mb-6">
                          <h4 className="text-lg font-semibold text-[#232323] mb-4 flex items-center gap-2">
                            <Target className="h-5 w-5 text-[#e24e1b]" />
                            Praktische Auswirkungen
                          </h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {case_.practicalImpact.map((impact, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg border border-orange-200"
                              >
                                <AlertTriangle className="w-5 h-5 text-[#e24e1b] flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-[#474747]">{impact}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Expanded Content */}
                        {expandedCase === case_.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="space-y-6 pt-6 border-t border-stone-200"
                          >
                            {/* Compliance Actions */}
                            <div>
                              <h4 className="text-lg font-semibold text-[#232323] mb-4 flex items-center gap-2">
                                <Shield className="h-5 w-5 text-green-600" />
                                Compliance-Maßnahmen
                              </h4>
                              <div className="grid md:grid-cols-2 gap-3">
                                {case_.complianceActions.map((action, idx) => (
                                  <div key={idx} className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-[#474747]">{action}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Timeline */}
                            {case_.timeline && (
                              <div>
                                <h4 className="text-lg font-semibold text-[#232323] mb-4 flex items-center gap-2">
                                  <Clock className="h-5 w-5 text-[#e24e1b]" />
                                  Timeline
                                </h4>
                                <div className="space-y-3">
                                  {case_.timeline.map((event, idx) => (
                                    <div key={idx} className="flex items-start gap-4 p-3 bg-[#F5F6F8] border border-stone-200 rounded-lg">
                                      <Badge variant="outline" className="bg-orange-50 text-[#e24e1b] border-orange-200 text-xs">
                                        {event.date}
                                      </Badge>
                                      <span className="text-sm text-[#474747]">{event.event}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Download Links */}
                            {case_.downloadLinks && (
                              <div>
                                <h4 className="text-lg font-semibold text-[#232323] mb-4 flex items-center gap-2">
                                  <Download className="h-5 w-5 text-[#e24e1b]" />
                                  Dokumente & Ressourcen
                                </h4>
                                <div className="flex flex-wrap gap-3">
                                  {case_.downloadLinks.map((link, idx) => (
                                    <Button key={idx} variant="outline" size="sm" className="border-stone-300 text-[#474747] hover:bg-[#F5F6F8]">
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
                        <div className="flex gap-3 mt-6 pt-6 border-t border-stone-200">
                          <Button
                            asChild
                            className="bg-[#e24e1b] hover:bg-[#f97316] text-white shadow-sm"
                          >
                            <Link to={`/wissen/rechtsprechung/${case_.id}`}>
                              <BookOpen className="mr-2 h-4 w-4" />
                              Detailanalyse lesen
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" className="border-stone-300 text-[#474747] hover:bg-[#F5F6F8]">
                            <Share2 className="h-4 w-4 mr-2" />
                            Teilen
                          </Button>
                          <Button variant="outline" size="sm" className="border-stone-300 text-[#474747] hover:bg-[#F5F6F8]">
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="h-full bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2 flex-wrap">
                              <h3 className="text-lg font-bold text-[#232323]">{decision.title}</h3>
                              <Badge variant="outline" className={getSeverityColor(decision.severity)}>
                                {decision.severity}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-[#474747] mb-3">
                              <span>{decision.date}</span>
                              <span>{decision.court}</span>
                            </div>
                            <div className="text-2xl font-bold text-[#e24e1b] mb-3">{decision.amount}</div>
                          </div>
                        </div>

                        <p className="text-[#474747] mb-4 leading-relaxed">{decision.description}</p>

                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-[#232323] mb-2">Verstöße:</h4>
                          <div className="space-y-1">
                            {decision.violations.map((violation, idx) => (
                              <div key={idx} className="text-xs text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded">
                                {violation}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-[#232323] mb-2">Auswirkungen:</h4>
                          <p className="text-sm text-[#474747]">{decision.impact}</p>
                        </div>

                        <Button asChild className="w-full bg-[#e24e1b] hover:bg-[#f97316] text-white shadow-sm">
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
                <Card className="bg-white border-stone-200 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#232323] mb-6 flex items-center gap-2">
                      <BarChart3 className="h-6 w-6 text-[#e24e1b]" />
                      DSGVO Trends 2024
                    </h3>

                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-[#F5F6F8] rounded-lg">
                        <span className="text-[#474747]">Gesamt-Bußgelder:</span>
                        <span className="text-2xl font-bold text-[#e24e1b]">{trendAnalysis[2024].totalFines}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-[#F5F6F8] rounded-lg">
                        <span className="text-[#474747]">Anzahl Fälle:</span>
                        <span className="text-xl font-bold text-[#232323]">{trendAnalysis[2024].casesCount}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-[#F5F6F8] rounded-lg">
                        <span className="text-[#474747]">Ø Bußgeld:</span>
                        <span className="text-xl font-bold text-[#e24e1b]">{trendAnalysis[2024].avgFine}</span>
                      </div>
                    </div>

                    <div className="mt-6">
                      <h4 className="text-lg font-semibold text-[#232323] mb-4">Haupt-Trends</h4>
                      <div className="space-y-3">
                        {trendAnalysis[2024].trends.map((trend, idx) => (
                          <div key={idx} className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                            <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0" />
                            <span className="text-sm text-[#474747]">{trend}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Top Violations */}
                <Card className="bg-white border-stone-200 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-[#232323] mb-6 flex items-center gap-2">
                      <PieChart className="h-6 w-6 text-[#e24e1b]" />
                      Häufigste Verstöße
                    </h3>

                    <div className="space-y-4">
                      {trendAnalysis[2024].topViolations.map((violation, idx) => (
                        <div key={idx} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-[#232323] font-medium">{violation.violation}</span>
                            <div className="flex items-center gap-2">
                              <span className="text-[#232323] font-bold">{violation.percentage}%</span>
                              <Badge variant="outline" className="bg-stone-100 text-[#474747] border-stone-300 text-xs">
                                {violation.cases} Fälle
                              </Badge>
                            </div>
                          </div>
                          <div className="w-full bg-stone-200 rounded-full h-2">
                            <motion.div
                              className="bg-[#e24e1b] h-2 rounded-full"
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
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <Card className="bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-[#232323] mb-2">{case_.title}</h3>
                            <div className="flex items-center gap-4 text-sm text-[#474747] mb-3">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {case_.expectedDate}
                              </div>
                              <div className="flex items-center gap-1">
                                <Scale className="h-4 w-4" />
                                {case_.court}
                              </div>
                            </div>
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200 mb-3">
                              {case_.topic}
                            </Badge>
                          </div>
                          <Flag className="h-6 w-6 text-[#e24e1b]" />
                        </div>

                        <p className="text-[#474747] mb-4 leading-relaxed">{case_.description}</p>

                        <div className="bg-[#F5F6F8] border border-stone-200 rounded-lg p-4">
                          <h4 className="text-sm font-semibold text-[#232323] mb-2">Mögliche Auswirkungen:</h4>
                          <p className="text-sm text-[#474747]">{case_.implications}</p>
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#232323] mb-6">
              Cookie-Rechtsprechung
            </h2>
            <p className="text-xl md:text-2xl text-[#474747]">
              Wichtige Urteile zur Website-Compliance
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {cookieDecisions.map((decision, index) => (
              <motion.div
                key={decision.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card className="h-full bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Database className="h-8 w-8 text-[#e24e1b]" />
                      <div>
                        <h3 className="text-xl font-bold text-[#232323]">{decision.title}</h3>
                        <div className="flex items-center gap-4 text-sm text-[#474747]">
                          <span>{decision.date}</span>
                          <span>{decision.court}</span>
                        </div>
                      </div>
                    </div>

                    <Badge variant="outline" className="bg-orange-50 text-[#e24e1b] border-orange-200 mb-4">
                      {decision.impact}
                    </Badge>

                    <p className="text-[#474747] mb-6 leading-relaxed">{decision.description}</p>

                    {decision.requirements && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-[#232323] mb-3">Anforderungen:</h4>
                        <div className="space-y-2">
                          {decision.requirements.map((req, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-[#474747]">{req}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {decision.technicalIssues && (
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-[#232323] mb-3">Technische Probleme:</h4>
                        <div className="space-y-2">
                          {decision.technicalIssues.map((issue, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <AlertTriangle className="h-4 w-4 text-[#e24e1b] flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-[#474747]">{issue}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#232323] mb-3">Lösungsansätze:</h4>
                      <div className="space-y-2">
                        {(decision.practicalChanges || decision.solutions).map((solution, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-[#474747]">{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button className="w-full bg-[#e24e1b] hover:bg-[#f97316] text-white shadow-sm">
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F5F6F8]">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-[#232323] mb-6">
              Immer rechtsicher
            </h2>

            <p className="text-xl md:text-2xl text-[#474747] mb-12 max-w-3xl mx-auto leading-relaxed">
              Bleiben Sie immer auf dem neuesten Stand der Rechtsprechung und setzen Sie Urteile proaktiv um.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#e24e1b] hover:bg-[#f97316] text-white px-10 py-4 text-lg font-bold shadow-lg transition-all duration-300"
              >
                <Bell className="mr-3 h-6 w-6" />
                Legal Updates abonnieren
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>

              <Button size="lg" variant="outline" className="border-2 border-stone-300 hover:bg-white text-[#474747] px-10 py-4 text-lg font-bold">
                <Download className="mr-3 h-6 w-6" />
                Urteilssammlung
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rechtsprechung;