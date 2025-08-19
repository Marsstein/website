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
    "@type": "HowToGuide",
    "name": "DSGVO Leitfäden - Praktische Anleitungen",
    "description": "Praktische DSGVO-Leitfäden: Schritt-für-Schritt-Anleitungen, Checklisten, Vorlagen für häufige Compliance-Herausforderungen. Bewährte Umsetzungsstrategien.",
    "url": "https://marsstein.com/wissen/dsgvo-leitfaeden"
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
        title="DSGVO Leitfäden – Praktische Anleitungen & How-Tos"
        description="DSGVO-Leitfäden für die Praxis: Schritt-für-Schritt-Anleitungen, Checklisten, Vorlagen. ✓ DSGVO in 30 Tagen ✓ Verarbeitungsverzeichnis ✓ TOMs. Jetzt umsetzen!"
        canonical="/wissen/dsgvo-leitfaeden"
        keywords="DSGVO Leitfäden, DSGVO Anleitung, DSGVO How-To, DSGVO Praxis, DSGVO Umsetzung"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="mb-4 px-4 py-1" variant="outline">
                <BookOpen className="h-3 w-3 mr-1" />
                DSGVO Praxis-Leitfäden
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                DSGVO praktisch umsetzen
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Schritt-für-Schritt-Anleitungen für häufige Compliance-Herausforderungen 
                mit bewährten Umsetzungsstrategien
              </p>
            </motion.div>

            {/* Featured Guide */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32" />
                <CardContent className="p-8 relative">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1">
                      <Badge className="mb-3 bg-white/20 text-white border-white/30">
                        Featured Guide
                      </Badge>
                      <h2 className="text-2xl font-bold mb-2">{featuredGuide.title}</h2>
                      <p className="text-blue-100 mb-4">{featuredGuide.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
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
                      <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                        Guide herunterladen
                        <Download className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Category Tabs */}
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
                      <p className="text-gray-600 dark:text-gray-400">
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
                              "h-full hover:shadow-lg transition-all group",
                              guide.urgent && "border-red-200 dark:border-red-800",
                              guide.popular && "border-blue-200 dark:border-blue-800"
                            )}>
                              <CardHeader>
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex items-start gap-3">
                                    <div className={cn(
                                      "w-10 h-10 rounded-lg flex items-center justify-center",
                                      guide.urgent ? "bg-red-100 dark:bg-red-900" : "bg-gray-100 dark:bg-gray-800"
                                    )}>
                                      <Icon className={cn(
                                        "h-5 w-5",
                                        guide.urgent ? "text-red-600 dark:text-red-400" : "text-gray-600 dark:text-gray-400"
                                      )} />
                                    </div>
                                    <div className="flex-1">
                                      <CardTitle className="text-lg group-hover:text-brand-red transition-colors">
                                        {guide.title}
                                      </CardTitle>
                                      {guide.popular && (
                                        <Badge variant="secondary" className="mt-1">
                                          Beliebt
                                        </Badge>
                                      )}
                                      {guide.tool && (
                                        <Badge variant="outline" className="mt-1">
                                          Interaktives Tool
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                  <Badge variant="outline">{guide.difficulty}</Badge>
                                </div>
                                <CardDescription>{guide.description}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="space-y-3">
                                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                                    <span className="flex items-center gap-1">
                                      <Clock className="h-4 w-4" />
                                      {guide.readTime}
                                    </span>
                                  </div>
                                  
                                  <div className="space-y-1">
                                    {guide.highlights.map((highlight, idx) => (
                                      <div key={idx} className="flex items-center gap-2 text-sm">
                                        <CheckCircle2 className="h-3 w-3 text-green-500 flex-shrink-0" />
                                        <span>{highlight}</span>
                                      </div>
                                    ))}
                                  </div>

                                  <Link to={guide.link}>
                                    <Button 
                                      variant="ghost" 
                                      className="w-full justify-between group-hover:text-brand-red mt-4"
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
            <motion.div
              className="mt-16 grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Vorlagen-Sammlung</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Über 50 DSGVO-Vorlagen zum Download
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/vorlagen/dsgvo">
                      Zu den Vorlagen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">DSGVO-Checkliste</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Interaktive Checkliste mit 100+ Punkten
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/assessment-center/dsgvo-compliance-checklist">
                      Checkliste starten
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Experten-Support</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Persönliche Beratung für komplexe Fälle
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      Beratung anfragen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-16 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 text-white p-8">
                <h2 className="text-2xl font-bold mb-4">
                  Brauchen Sie einen individuellen Leitfaden?
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Wir erstellen maßgeschneiderte DSGVO-Leitfäden für Ihre spezifischen Anforderungen
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Individuellen Leitfaden anfragen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-gray-900"
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