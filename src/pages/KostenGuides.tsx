import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Calculator,
  Euro,
  FileText,
  CheckCircle2,
  ArrowRight,
  Clock,
  Star,
  Eye,
  Lightbulb,
  AlertTriangle,
  Settings,
  Shield,
  Search,
  Filter,
  BookOpen,
  Award,
  TrendingUp,
  ExternalLink,
  Target,
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

const KostenGuides: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const categories = [
    { id: 'all', name: 'Alle Ressourcen', count: 7 },
    { id: 'costs', name: 'Kosten transparent', count: 3 },
    { id: 'problems', name: 'Probleme erkennen', count: 3 },
    { id: 'decisions', name: 'Entscheidungshilfen', count: 3 },
    { id: 'tools', name: 'Interaktive Tools', count: 1 }
  ];

  const resources = [
    {
      id: 'dsgvo-kosten',
      title: 'DSGVO Compliance Kosten 2025',
      subtitle: 'Transparente Kostenübersicht',
      description: 'Vollständiger Kostenüberblick für DSGVO-Compliance: Personal, Beratung, Software, Zertifizierung. Mit realen Beispielen und Einsparpotenzial.',
      readTime: '12 Min',
      category: 'costs',
      popular: true,
      featured: true,
      views: 3421,
      rating: 4.8,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-green-900 to-slate-900',
      link: '/wissen/kosten/dsgvo-compliance-kosten',
      highlights: [
        'Detaillierte Kostentabellen',
        'Firmengrößen-spezifisch',
        'ROI-Kalkulation'
      ]
    },
    {
      id: 'externer-dsb-kosten',
      title: 'Externer DSB: Kosten-Vergleich 2025',
      subtitle: 'Was kostet ein externer Datenschutzbeauftragter?',
      description: 'Reale Preise für externe DSBs: Freiberufler vs. Kanzlei, versteckte Kosten, Vergleichsrechner. Sparen Sie bis zu 40% durch informierte Entscheidungen.',
      readTime: '10 Min',
      category: 'costs',
      popular: true,
      views: 2876,
      rating: 4.7,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      link: '/wissen/kosten/externer-datenschutzbeauftragter-kosten',
      highlights: [
        'Preis-Benchmarks 2025',
        'Freiberufler vs. Kanzlei',
        'Versteckte Kosten aufgedeckt'
      ]
    },
    {
      id: 'iso27001-kosten',
      title: 'ISO 27001 Zertifizierung: Budget-Planung',
      subtitle: 'Von Beratung bis Audit',
      description: 'Realistische Budget-Planung für ISO 27001: Beraterkosten, Audit-Gebühren, Tools, Personalaufwand. Mit Finanzierungsoptionen und Förderprogrammen.',
      readTime: '15 Min',
      category: 'costs',
      views: 1923,
      rating: 4.6,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      link: '/wissen/kosten/iso-27001-zertifizierung-kosten',
      highlights: [
        'Phasen-spezifische Kosten',
        'Zertifizierungsstellen-Vergleich',
        'Förderprogramme'
      ]
    },
    {
      id: 'compliance-luecken',
      title: 'Die 7 häufigsten DSGVO Compliance-Lücken',
      subtitle: 'Risiken frühzeitig erkennen',
      description: 'Kritische DSGVO-Fehler, die 78% der Unternehmen übersehen: Vendor Management, Betroffenenrechte, TOM-Dokumentation. Inklusive Selbst-Check.',
      readTime: '8 Min',
      category: 'problems',
      featured: true,
      views: 4102,
      rating: 4.9,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900',
      link: '/wissen/dsgvo-compliance-luecken',
      highlights: [
        'Top 7 Compliance-Lücken',
        'Risiko-Assessment',
        'Sofort-Maßnahmen'
      ]
    },
    {
      id: 'interner-dsb-scheitert',
      title: 'Warum interne DSBs scheitern',
      subtitle: '5 Warnsignale erkennen',
      description: 'Die häufigsten Gründe für das Scheitern interner Datenschutzbeauftragter: Ressourcenmangel, Interessenkonflikte, fehlendes Know-how. Mit Lösungsstrategien.',
      readTime: '10 Min',
      category: 'problems',
      popular: true,
      views: 2341,
      rating: 4.7,
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900',
      link: '/wissen/interner-dsb-scheitert',
      highlights: [
        '5 kritische Warnsignale',
        'Kostenanalyse: Intern vs. Extern',
        'Handlungsempfehlungen'
      ]
    },
    {
      id: 'software-vs-manuell',
      title: 'DSGVO Software vs. manuelle Prozesse',
      subtitle: 'Wann lohnt sich Automatisierung?',
      description: 'ROI-Analyse: Ab wann rechnet sich DSGVO-Software? Break-even-Szenarien, TCO-Vergleich, Effizienzgewinne. Für 10-500 Mitarbeiter.',
      readTime: '12 Min',
      category: 'problems',
      views: 2789,
      rating: 4.8,
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900',
      link: '/wissen/dsgvo-software-vs-manuell',
      highlights: [
        'ROI-Kalkulation',
        'Break-even-Analyse',
        'Skalierungs-Szenarien'
      ]
    },
    {
      id: 'dsgvo-kosten-rechner',
      title: 'Interaktiver DSGVO-Kostenrechner',
      subtitle: 'Individuelles Compliance-Budget',
      description: 'Berechnen Sie Ihr individuelles DSGVO-Budget basierend auf Firmengröße, Branche und Reifegrad. Inklusive Vergleich intern vs. extern.',
      readTime: '5 Min',
      category: 'tools',
      popular: true,
      featured: true,
      views: 5234,
      rating: 4.9,
      color: 'from-cyan-500 to-blue-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900',
      link: '/assessment-center/dsgvo-kosten-rechner',
      highlights: [
        'Personalisierte Kalkulation',
        'Sofort-Ergebnis',
        'PDF-Export'
      ]
    }
  ];

  const filteredResources = selectedCategory === 'all'
    ? resources
    : resources.filter(resource => resource.category === selectedCategory);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Kosten & Entscheidungshilfen für DSGVO & Compliance",
    "description": "Transparente Kostenübersichten, Problem-Analysen und interaktive Tools für fundierte Compliance-Entscheidungen",
    "url": "https://marsstein.ai/wissen/kosten"
  };

  return (
    <>
      <SEOHead
        title="Kosten & Entscheidungshilfen: DSGVO, DSB, ISO 27001 | Marsstein"
        description="Transparente Kostenübersichten für DSGVO-Compliance, externe DSBs und ISO 27001. Interaktive Tools und fundierte Entscheidungshilfen für Ihr Compliance-Budget."
        canonical="/wissen/kosten"
        keywords="DSGVO Kosten, Datenschutzbeauftragter Kosten, ISO 27001 Kosten, Compliance Budget, DSGVO Rechner, DSB Vergleich"
        structuredData={structuredData}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        <Header />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-slate-400 hover:text-white transition-colors">Home</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/wissen" className="text-slate-400 hover:text-white transition-colors">Wissen</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-white">Kosten & Entscheidungshilfen</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        {/* Hero Section */}
        <section ref={heroRef} className="relative px-4 sm:px-6 lg:px-8 pb-24">
          <div className="container mx-auto max-w-7xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="p-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl"
                >
                  <Calculator className="h-10 w-10 text-white" />
                </motion.div>
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="p-4 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl"
                >
                  <Euro className="h-10 w-10 text-white" />
                </motion.div>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6">
                <span className="text-white">Kosten &</span>
                <br />
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Entscheidungshilfen
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Transparente Kostenübersichten und interaktive Tools für fundierte Compliance-Entscheidungen
              </p>

              <div className="flex flex-wrap gap-4 justify-center mb-12">
                <Badge className="px-4 py-2 text-sm bg-green-500/20 text-green-300 border-green-500/30">
                  <Calculator className="h-4 w-4 mr-2" />
                  7 Ressourcen
                </Badge>
                <Badge className="px-4 py-2 text-sm bg-blue-500/20 text-blue-300 border-blue-500/30">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Kostenrechner inklusive
                </Badge>
                <Badge className="px-4 py-2 text-sm bg-purple-500/20 text-purple-300 border-purple-500/30">
                  <Target className="h-4 w-4 mr-2" />
                  Praxiserprobt
                </Badge>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "transition-all duration-300",
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-green-500 to-teal-600 text-white border-0 shadow-lg shadow-green-500/30"
                      : "border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white"
                  )}
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category.name}
                  <Badge className="ml-2 bg-white/20">{category.count}</Badge>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource, index) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  <div className={cn(
                    "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
                    `bg-gradient-to-r ${resource.color}`,
                    "opacity-0 group-hover:opacity-30"
                  )} />

                  <Card className="relative h-full border-2 border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-600/50 overflow-hidden">
                    <div className={cn("absolute inset-0", resource.bgColor)} />

                    <CardContent className="relative p-8 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          {resource.popular && (
                            <Badge className="mb-3 bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                              <Star className="h-3 w-3 mr-1" />
                              Beliebt
                            </Badge>
                          )}
                          {resource.featured && !resource.popular && (
                            <Badge className="mb-3 bg-blue-500/20 text-blue-300 border-blue-500/30">
                              <Award className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mb-6 flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-green-400 group-hover:to-blue-400 transition-all duration-300">
                          {resource.title}
                        </h3>
                        <p className="text-sm text-slate-400 mb-4 font-medium">{resource.subtitle}</p>
                        <p className="text-slate-300 leading-relaxed mb-6">{resource.description}</p>

                        {/* Highlights */}
                        <div className="space-y-2 mb-6">
                          {resource.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0" />
                              <span className="text-sm text-slate-300">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Meta */}
                      <div className="flex items-center gap-4 text-sm text-slate-400 mb-6 pt-4 border-t border-slate-700/50">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{resource.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{resource.views.toLocaleString()}</span>
                        </div>
                        {resource.rating && (
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span>{resource.rating}</span>
                          </div>
                        )}
                      </div>

                      {/* CTA */}
                      <Button asChild className={cn(
                        "w-full bg-gradient-to-r text-white border-0 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300",
                        resource.color
                      )}>
                        <Link to={resource.link} className="flex items-center justify-center gap-2">
                          <span>{resource.category === 'tools' ? 'Tool öffnen' : 'Ressource lesen'}</span>
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-green-500/30 bg-gradient-to-br from-slate-900 via-green-900/20 to-slate-900 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10" />
              <CardContent className="relative p-12 text-center">
                <Calculator className="h-16 w-16 text-green-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Brauchen Sie eine individuelle Beratung?
                </h2>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Lassen Sie uns gemeinsam Ihr optimales Compliance-Budget und die beste Strategie für Ihr Unternehmen entwickeln.
                </p>
                <Button asChild size="lg" className="bg-gradient-to-r from-green-500 to-teal-600 text-white text-lg px-8 py-6 shadow-lg hover:shadow-xl">
                  <Link to="/contact">
                    Kostenlose Erstberatung
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default KostenGuides;
