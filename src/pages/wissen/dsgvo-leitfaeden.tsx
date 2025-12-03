import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BookOpen,
  FileText,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  Shield,
  AlertTriangle,
  Zap,
  Target,
  Download,
  ExternalLink,
  ChevronRight,
  Lightbulb,
  Scale,
  Eye,
  Lock,
  Database,
  UserCheck,
  Settings,
  TrendingUp,
  Calendar,
  Briefcase,
  Globe,
  Building2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DSGVOLeitfaeden: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('quickstart');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "DSGVO Leitfäden 2024: Praktische Anleitungen",
    "description": "Umfassende Sammlung praktischer DSGVO-Leitfäden mit Schritt-für-Schritt-Anleitungen, Checklisten und Vorlagen für alle Compliance-Herausforderungen.",
    "url": "https://marsstein.ai/wissen/dsgvo-leitfaeden",
    "publisher": {
      "@type": "Organization",
      "name": "Marsstein",
      "logo": {
        "@type": "ImageObject",
        "url": "https://marsstein.ai/logo.png"
      }
    },
    "dateModified": new Date().toISOString(),
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Wissen",
          "item": "https://marsstein.ai/wissen"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "DSGVO Leitfäden",
          "item": "https://marsstein.ai/wissen/dsgvo-leitfaeden"
        }
      ]
    }
  };

  const categories = {
    quickstart: {
      title: 'Schnellstart',
      icon: Zap,
      description: 'Express-Guides für schnelle Compliance'
    },
    implementation: {
      title: 'Umsetzung',
      icon: Settings,
      description: 'Detaillierte Implementierungsanleitungen'
    },
    documentation: {
      title: 'Dokumentation',
      icon: FileText,
      description: 'Vorlagen und Dokumentationshilfen'
    },
    special: {
      title: 'Spezialthemen',
      icon: Lightbulb,
      description: 'Guides für besondere Anforderungen'
    }
  };

  const guides = {
    quickstart: [
      {
        title: 'DSGVO in 30 Tagen',
        description: 'Express-Guide zur DSGVO-Compliance in einem Monat mit täglichem Aktionsplan',
        icon: Calendar,
        readTime: '20 Min',
        difficulty: 'Einsteiger',
        link: '/wissen/leitfaden/dsgvo-30-tage',
        highlights: ['Tägliche Aufgaben', 'Priorisierter Plan', 'Quick Wins', 'Checklisten'],
        popular: true
      },
      {
        title: 'DSGVO für Startups',
        description: 'Schlanke Compliance für junge Unternehmen mit begrenzten Ressourcen',
        icon: TrendingUp,
        readTime: '15 Min',
        difficulty: 'Einsteiger',
        link: '/wissen/leitfaden/dsgvo-startups',
        highlights: ['Minimal Viable Compliance', 'Skalierbare Prozesse', 'Tool-Empfehlungen']
      },
      {
        title: 'Website DSGVO-konform',
        description: 'Ihre Website in 7 Schritten DSGVO-konform machen',
        icon: Globe,
        readTime: '12 Min',
        difficulty: 'Praktisch',
        link: '/wissen/leitfaden/website-dsgvo',
        highlights: ['Cookie-Banner', 'Datenschutzerklärung', 'Kontaktformulare', 'Analytics']
      },
      {
        title: 'DSGVO Notfall-Kit',
        description: 'Was tun bei Datenpannen, Abmahnungen oder Prüfungen?',
        icon: AlertTriangle,
        readTime: '10 Min',
        difficulty: 'Praktisch',
        link: '/wissen/leitfaden/dsgvo-notfall',
        highlights: ['72-Stunden-Frist', 'Meldewege', 'Schadensbegrenzung'],
        urgent: true
      }
    ],
    implementation: [
      {
        title: 'Verarbeitungsverzeichnis erstellen',
        description: 'Komplette Anleitung mit Vorlagen und Beispielen',
        icon: Database,
        readTime: '25 Min',
        difficulty: 'Fortgeschritten',
        link: '/wissen/leitfaden/verarbeitungsverzeichnis',
        highlights: ['Excel-Vorlage', 'Ausfüllhilfe', 'Praxisbeispiele', 'Automatisierung']
      },
      {
        title: 'Betroffenenrechte umsetzen',
        description: 'Prozesse für Auskunft, Löschung, Berichtigung etablieren',
        icon: UserCheck,
        readTime: '18 Min',
        difficulty: 'Fortgeschritten',
        link: '/wissen/leitfaden/betroffenenrechte',
        highlights: ['Prozess-Templates', 'Fristen-Management', 'Antwortvorlagen']
      },
      {
        title: 'TOMs implementieren',
        description: 'Technische und organisatorische Maßnahmen praktisch umsetzen',
        icon: Lock,
        readTime: '22 Min',
        difficulty: 'Technisch',
        link: '/wissen/leitfaden/tom-massnahmen',
        highlights: ['TOM-Katalog', 'Risikobewertung', 'Dokumentation', 'Audits']
      },
      {
        title: 'DSFA durchführen',
        description: 'Datenschutz-Folgenabschätzung Schritt für Schritt',
        icon: Scale,
        readTime: '30 Min',
        difficulty: 'Experte',
        link: '/wissen/leitfaden/dsfa-durchfuehrung',
        highlights: ['DSFA-Template', 'Schwellwertanalyse', 'Risikomatrix', 'Maßnahmen']
      }
    ],
    documentation: [
      {
        title: 'Datenschutzerklärung Generator',
        description: 'Rechtssichere Datenschutzerklärung in 10 Minuten',
        icon: FileText,
        readTime: '10 Min',
        difficulty: 'Einsteiger',
        link: '/wissen/leitfaden/datenschutzerklaerung-generator',
        highlights: ['Interaktiver Generator', 'Rechtskonform', 'Multi-Language'],
        tool: true
      },
      {
        title: 'AVV richtig gestalten',
        description: 'Auftragsverarbeitungsverträge rechtssicher formulieren',
        icon: Briefcase,
        readTime: '15 Min',
        difficulty: 'Fortgeschritten',
        link: '/wissen/leitfaden/avv-gestalten',
        highlights: ['AVV-Muster', 'Checkliste', 'Verhandlungstipps', 'Red Flags']
      },
      {
        title: 'Einwilligungen managen',
        description: 'Consent Management rechtssicher und nutzerfreundlich',
        icon: CheckCircle2,
        readTime: '14 Min',
        difficulty: 'Praktisch',
        link: '/wissen/leitfaden/einwilligungen',
        highlights: ['Consent-Formulare', 'Widerruf-Prozesse', 'Dokumentation']
      },
      {
        title: 'Mitarbeiterdatenschutz',
        description: 'Datenschutz im Arbeitsverhältnis richtig umsetzen',
        icon: Users,
        readTime: '16 Min',
        difficulty: 'Fortgeschritten',
        link: '/wissen/leitfaden/mitarbeiterdatenschutz',
        highlights: ['Betriebsvereinbarungen', 'Home-Office', 'Überwachung', 'Schulungen']
      }
    ],
    special: [
      {
        title: 'Internationale Datentransfers',
        description: 'Daten rechtssicher in Drittländer übermitteln',
        icon: Globe,
        readTime: '20 Min',
        difficulty: 'Experte',
        link: '/wissen/leitfaden/internationale-transfers',
        highlights: ['SCCs', 'Angemessenheit', 'Transfer Impact Assessment']
      },
      {
        title: 'DSGVO für B2B',
        description: 'Besonderheiten im Business-to-Business Bereich',
        icon: Building2,
        readTime: '12 Min',
        difficulty: 'Fortgeschritten',
        link: '/wissen/leitfaden/dsgvo-b2b',
        highlights: ['Geschäftskontakte', 'Lead-Generierung', 'CRM-Compliance']
      },
      {
        title: 'Joint Controller Agreement',
        description: 'Gemeinsame Verantwortlichkeit richtig regeln',
        icon: Shield,
        readTime: '18 Min',
        difficulty: 'Experte',
        link: '/wissen/leitfaden/joint-controller',
        highlights: ['Vertragsvorlage', 'Verantwortlichkeiten', 'Haftung']
      },
      {
        title: 'Privacy by Design',
        description: 'Datenschutz von Anfang an in Projekte integrieren',
        icon: Target,
        readTime: '15 Min',
        difficulty: 'Technisch',
        link: '/wissen/leitfaden/privacy-by-design',
        highlights: ['Entwicklungsprozess', 'Checklisten', 'Best Practices']
      }
    ]
  };

  const featuredGuide = {
    title: 'Der ultimative DSGVO-Starter Guide',
    description: 'Von Null auf DSGVO-konform: Der komplette Fahrplan für Einsteiger mit allen wichtigen Schritten, Vorlagen und Checklisten.',
    link: '/wissen/leitfaden/dsgvo-ultimate-guide',
    stats: {
      pages: 45,
      readTime: '2.5 Std',
      downloads: '12.5k',
      rating: 4.9
    }
  };

  return (
    <>
      <SEOHead
        title="DSGVO Leitfäden 2024: Praktische Anleitungen | Marsstein"
        description="Praktische DSGVO-Leitfäden mit Schritt-für-Schritt-Anleitungen. ✓ In 30 Tagen compliant ✓ Vorlagen & Checklisten ✓ Für Einsteiger bis Experten. Jetzt starten!"
        canonical="/wissen/dsgvo-leitfaeden"
        keywords="DSGVO Leitfäden, DSGVO Anleitung, DSGVO How-To, DSGVO Praxis, DSGVO Umsetzung, Datenschutz Leitfaden"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-[#F5F6F8] via-orange-50/20 to-[#F5F6F8]">
        <Header />

        {/* Breadcrumb */}
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm">
              <li><Link to="/wissen" className="text-[#474747] hover:text-[#e24e1b] transition-colors">Wissen</Link></li>
              <li><span className="mx-2 text-[#474747]">/</span></li>
              <li className="text-[#e24e1b] font-medium">DSGVO Leitfäden</li>
            </ol>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="bg-white border-b border-stone-200 pt-20 pb-16 px-4" aria-labelledby="main-heading">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-[#e24e1b] rounded-xl shadow-sm">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-[#232323]">
                  DSGVO Leitfäden
                </h1>
              </div>
              <p className="text-xl text-[#474747] mb-8 max-w-4xl mx-auto leading-relaxed">
                Über 20 praxiserprobte Schritt-für-Schritt-Anleitungen für Ihre DSGVO-Compliance.
                Von Einsteiger-Guides bis zu Experten-Themen – mit Vorlagen und Checklisten.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                  <BookOpen className="h-4 w-4 mr-2" />
                  20+ Praxis-Leitfäden
                </Badge>
                <Badge variant="outline" className="bg-blue-50 border-[#003366] text-[#003366]">
                  <CheckCircle2 className="h-4 w-4 mr-2" />
                  Mit Vorlagen & Checklisten
                </Badge>
                <Badge variant="outline" className="bg-stone-100 border-stone-400 text-[#474747]">
                  <Target className="h-4 w-4 mr-2" />
                  Für alle Levels
                </Badge>
              </div>
            </motion.div>

            {/* Featured Guide */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-white border-l-4 border-[#e24e1b] shadow-lg overflow-hidden">
                <CardContent className="p-8 relative">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                      <Badge className="mb-3 bg-orange-50 text-[#e24e1b] border-[#e24e1b]">
                        Featured Guide
                      </Badge>
                      <h2 className="text-2xl font-bold mb-2 text-[#232323]" id="main-heading">{featuredGuide.title}</h2>
                      <p className="text-[#474747] mb-4">{featuredGuide.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-[#474747]">
                        <span className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          {featuredGuide.stats.pages} Seiten
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {featuredGuide.stats.readTime}
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          {featuredGuide.stats.downloads}
                        </span>
                        <span className="flex items-center gap-1">
                          <CheckCircle2 className="h-4 w-4" />
                          {featuredGuide.stats.rating}/5
                        </span>
                      </div>
                    </div>
                    <Link to={featuredGuide.link}>
                      <Button size="lg" className="bg-[#e24e1b] hover:bg-[#f97316] text-white shadow-sm">
                        Guide herunterladen
                        <Download className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="container mx-auto max-w-7xl px-4 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                  {Object.entries(categories).map(([key, category]) => {
                    const Icon = category.icon;
                    return (
                      <TabsTrigger key={key} value={key} className="flex flex-col sm:flex-row items-center gap-2">
                        <Icon className="h-4 w-4" />
                        <span>{category.title}</span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {Object.entries(guides).map(([key, categoryGuides]) => (
                  <TabsContent key={key} value={key}>
                    <div className="mb-6">
                      <p className="text-[#474747]">
                        {categories[key as keyof typeof categories].description}
                      </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                      {categoryGuides.map((guide, index) => {
                        const Icon = guide.icon;
                        return (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                          >
                            <Card className={cn(
                              "h-full bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group",
                              guide.urgent && "border-l-red-500",
                              guide.popular && "border-l-[#e24e1b]"
                            )}>
                              <CardHeader>
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex items-start gap-3">
                                    <div className={cn(
                                      "w-10 h-10 rounded-lg flex items-center justify-center",
                                      guide.urgent ? "bg-red-50" : "bg-[#F5F6F8]"
                                    )}>
                                      <Icon className={cn(
                                        "h-5 w-5",
                                        guide.urgent ? "text-red-600" : "text-[#474747]"
                                      )} />
                                    </div>
                                    <div className="flex-1">
                                      <CardTitle className="text-lg text-[#232323] group-hover:text-[#e24e1b] transition-colors">
                                        {guide.title}
                                      </CardTitle>
                                      {guide.popular && (
                                        <Badge className="mt-1 bg-yellow-50 text-yellow-700 border-yellow-200">
                                          Beliebt
                                        </Badge>
                                      )}
                                      {guide.tool && (
                                        <Badge variant="outline" className="mt-1 border-[#e24e1b] text-[#e24e1b]">
                                          Interaktives Tool
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                  <Badge className={cn(
                                    guide.difficulty === 'Einsteiger' ? 'bg-green-50 text-green-700 border-green-200' :
                                    guide.difficulty === 'Fortgeschritten' ? 'bg-orange-50 text-[#e24e1b] border-orange-200' :
                                    'bg-red-50 text-red-700 border-red-200'
                                  )}>{guide.difficulty}</Badge>
                                </div>
                                <CardDescription className="text-[#474747]">{guide.description}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-3">
                                  <div className="flex items-center gap-4 text-sm text-[#474747]">
                                    <span className="flex items-center gap-1">
                                      <Clock className="h-4 w-4" />
                                      {guide.readTime}
                                    </span>
                                  </div>

                                  <div className="space-y-1">
                                    {guide.highlights.map((highlight, idx) => (
                                      <div key={idx} className="flex items-center gap-2 text-sm text-[#474747]">
                                        <CheckCircle2 className="h-3 w-3 text-green-600 flex-shrink-0" />
                                        <span>{highlight}</span>
                                      </div>
                                    ))}
                                  </div>

                                  <Link to={guide.link}>
                                    <Button
                                      className="w-full justify-between bg-[#e24e1b] hover:bg-[#f97316] text-white shadow-sm mt-4"
                                    >
                                      Leitfaden öffnen
                                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    </Button>
                                  </Link>
                                </div>
                              </CardContent>
                            </Card>
                          </motion.div>
                        );
                      })}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>

            {/* Quick Access */}
            <section aria-label="Weitere DSGVO-Ressourcen" className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8 text-[#232323]">
              Weitere hilfreiche DSGVO-Ressourcen
            </h2>
            <motion.div
              className="grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="text-center bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#F5F6F8] flex items-center justify-center mx-auto mb-4">
                    <FileText className="h-6 w-6 text-[#474747]" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg text-[#232323]">Vorlagen-Sammlung</h3>
                  <p className="text-sm text-[#474747] mb-4 leading-relaxed">
                    Über 50 DSGVO-Vorlagen zum Download
                  </p>
                  <Button variant="outline" className="border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white" asChild>
                    <Link to="/vorlagen/dsgvo">
                      Zu den Vorlagen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#F5F6F8] flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-6 w-6 text-[#474747]" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg text-[#232323]">DSGVO-Checkliste</h3>
                  <p className="text-sm text-[#474747] mb-4 leading-relaxed">
                    Interaktive Checkliste mit 100+ Punkten
                  </p>
                  <Button variant="outline" className="border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white" asChild>
                    <Link to="/assessment-center/dsgvo-compliance-checklist">
                      Checkliste starten
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-[#F5F6F8] flex items-center justify-center mx-auto mb-4">
                    <Users className="h-6 w-6 text-[#474747]" />
                  </div>
                  <h3 className="font-semibold mb-2 text-lg text-[#232323]">Experten-Support</h3>
                  <p className="text-sm text-[#474747] mb-4 leading-relaxed">
                    Persönliche Beratung für komplexe Fälle
                  </p>
                  <Button variant="outline" className="border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white" asChild>
                    <Link to="/contact">
                      Beratung anfragen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            </section>

            {/* CTA */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-white border-l-4 border-[#e24e1b] shadow-lg p-8">
                <h2 className="text-2xl font-bold mb-4 text-[#232323]">
                  Maßgeschneiderte DSGVO-Leitfäden für Ihr Unternehmen
                </h2>
                <p className="text-lg mb-6 text-[#474747] leading-relaxed">
                  Wir erstellen maßgeschneiderte DSGVO-Leitfäden für Ihre spezifischen Anforderungen
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-[#e24e1b] hover:bg-[#f97316] text-white shadow-sm"
                  >
                    Individuellen Leitfaden anfragen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white"
                  >
                    Workshop buchen
                    <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default DSGVOLeitfaeden;