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
  Shield,
  FileText,
  Users,
  Lock,
  Globe,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Clock,
  BookOpen,
  Scale,
  Database,
  Eye,
  UserCheck,
  FileCheck,
  Gavel,
  Server,
  Map,
  Building2,
  TrendingUp,
  Search,
  Download,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DSGVOWissen: React.FC = () => {
  const [activeTab, setActiveTab] = useState('grundlagen');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "name": "DSGVO Wissen - Umfassendes Kompendium",
    "description": "Umfassendes DSGVO-Wissen: Grundlagen, Betroffenenrechte, Verarbeitungsverzeichnis, TOMs, internationale Datentransfers. Praxisnah erklärt.",
    "url": "https://marsstein.ai/wissen/dsgvo"
  };

  const topics = {
    grundlagen: {
      title: 'DSGVO Grundlagen',
      icon: Shield,
      articles: [
        {
          title: 'Was ist die DSGVO?',
          description: 'Einführung in die Datenschutz-Grundverordnung und ihre Ziele',
          readTime: '5 Min',
          level: 'Einsteiger',
          link: '/wissen/dsgvo/was-ist-dsgvo'
        },
        {
          title: 'Die 7 Grundsätze der DSGVO',
          description: 'Rechtmäßigkeit, Transparenz, Zweckbindung und mehr verständlich erklärt',
          readTime: '8 Min',
          level: 'Einsteiger',
          link: '/wissen/dsgvo/grundsaetze'
        },
        {
          title: 'Rechtsgrundlagen der Verarbeitung',
          description: 'Art. 6 DSGVO: Einwilligung, Vertrag, berechtigtes Interesse im Detail',
          readTime: '10 Min',
          level: 'Fortgeschritten',
          link: '/wissen/dsgvo/rechtsgrundlagen'
        },
        {
          title: 'Verantwortlichkeiten nach DSGVO',
          description: 'Verantwortlicher, Auftragsverarbeiter, gemeinsame Verantwortlichkeit',
          readTime: '7 Min',
          level: 'Fortgeschritten',
          link: '/wissen/dsgvo/verantwortlichkeiten'
        },
        {
          title: 'Der Datenschutzbeauftragte',
          description: 'Pflichten, Aufgaben und Anforderungen an den DSB nach DSGVO',
          readTime: '15 Min',
          level: 'Praktisch',
          link: '/wissen/leitfaden/datenschutzbeauftragter'
        },
        {
          title: 'DSB Ausbildung & Qualifikation',
          description: 'Wie wird man Datenschutzbeauftragter? Anforderungen und Zertifizierungen',
          readTime: '12 Min',
          level: 'Praktisch',
          link: '/wissen/leitfaden/datenschutzbeauftragter-ausbildung'
        }
      ]
    },
    betroffenenrechte: {
      title: 'Betroffenenrechte',
      icon: Users,
      articles: [
        {
          title: 'Auskunftsrecht nach Art. 15',
          description: 'Wie Sie Auskunftsersuchen rechtssicher beantworten',
          readTime: '12 Min',
          level: 'Praktisch',
          link: '/wissen/dsgvo/auskunftsrecht'
        },
        {
          title: 'Recht auf Löschung',
          description: 'Wann und wie personenbezogene Daten gelöscht werden müssen',
          readTime: '10 Min',
          level: 'Praktisch',
          link: '/wissen/dsgvo/loeschung'
        },
        {
          title: 'Datenportabilität',
          description: 'Das Recht auf Datenübertragbarkeit praktisch umsetzen',
          readTime: '8 Min',
          level: 'Fortgeschritten',
          link: '/wissen/dsgvo/datenportabilitaet'
        },
        {
          title: 'Widerspruchsrecht',
          description: 'Umgang mit Widersprüchen gegen die Datenverarbeitung',
          readTime: '6 Min',
          level: 'Praktisch',
          link: '/wissen/dsgvo/widerspruchsrecht'
        }
      ]
    },
    dokumentation: {
      title: 'Dokumentation',
      icon: FileText,
      articles: [
        {
          title: 'Verarbeitungsverzeichnis erstellen',
          description: 'Schritt-für-Schritt Anleitung mit Vorlagen',
          readTime: '15 Min',
          level: 'Praktisch',
          link: '/wissen/dsgvo/verarbeitungsverzeichnis'
        },
        {
          title: 'Datenschutzerklärung',
          description: 'Rechtssichere Datenschutzerklärungen formulieren',
          readTime: '20 Min',
          level: 'Praktisch',
          link: '/wissen/dsgvo/datenschutzerklaerung'
        },
        {
          title: 'Auftragsverarbeitung (AVV)',
          description: 'Verträge zur Auftragsverarbeitung richtig gestalten',
          readTime: '12 Min',
          level: 'Fortgeschritten',
          link: '/wissen/dsgvo/auftragsverarbeitung'
        },
        {
          title: 'Datenschutz-Folgenabschätzung',
          description: 'DSFA durchführen und dokumentieren',
          readTime: '18 Min',
          level: 'Experte',
          link: '/wissen/dsgvo/dsfa'
        }
      ]
    },
    technisch: {
      title: 'Technische Maßnahmen',
      icon: Lock,
      articles: [
        {
          title: 'TOMs nach Art. 32',
          description: 'Technische und organisatorische Maßnahmen implementieren',
          readTime: '14 Min',
          level: 'Technisch',
          link: '/wissen/dsgvo/toms'
        },
        {
          title: 'Verschlüsselung',
          description: 'Verschlüsselungsanforderungen der DSGVO erfüllen',
          readTime: '10 Min',
          level: 'Technisch',
          link: '/wissen/dsgvo/verschluesselung'
        },
        {
          title: 'Privacy by Design',
          description: 'Datenschutz von Anfang an in Systeme integrieren',
          readTime: '12 Min',
          level: 'Fortgeschritten',
          link: '/wissen/dsgvo/privacy-by-design'
        },
        {
          title: 'Pseudonymisierung',
          description: 'Daten wirksam pseudonymisieren und anonymisieren',
          readTime: '9 Min',
          level: 'Technisch',
          link: '/wissen/dsgvo/pseudonymisierung'
        }
      ]
    },
    international: {
      title: 'Internationale Aspekte',
      icon: Globe,
      articles: [
        {
          title: 'Drittlandtransfers',
          description: 'Datenübermittlung in Länder außerhalb der EU',
          readTime: '16 Min',
          level: 'Experte',
          link: '/wissen/dsgvo/drittlandtransfers'
        },
        {
          title: 'Standardvertragsklauseln',
          description: 'SCCs für internationale Datentransfers nutzen',
          readTime: '14 Min',
          level: 'Experte',
          link: '/wissen/dsgvo/sccs'
        },
        {
          title: 'Angemessenheitsbeschlüsse',
          description: 'Welche Länder bieten angemessenes Datenschutzniveau?',
          readTime: '8 Min',
          level: 'Fortgeschritten',
          link: '/wissen/dsgvo/angemessenheit'
        },
        {
          title: 'Brexit und Datenschutz',
          description: 'Datentransfers nach UK post-Brexit',
          readTime: '10 Min',
          level: 'Praktisch',
          link: '/wissen/dsgvo/brexit'
        }
      ]
    }
  };

  const quickLinks = [
    {
      title: 'DSGVO Checkliste',
      description: 'Interaktive Checkliste für Ihre DSGVO-Compliance',
      icon: CheckCircle2,
      link: '/assessment-center/dsgvo-compliance-checklist',
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Muster & Vorlagen',
      description: 'Kostenlose DSGVO-Vorlagen zum Download',
      icon: Download,
      link: '/vorlagen/dsgvo',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'DSGVO in 30 Tagen',
      description: 'Express-Guide zur schnellen Compliance',
      icon: TrendingUp,
      link: '/wissen/leitfaden/dsgvo-30-tage',
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'FAQ',
      description: 'Häufige Fragen zur DSGVO beantwortet',
      icon: Search,
      link: '/faq/dsgvo',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <>
      <SEOHead
        title="DSGVO Wissen – Kompendium & Praxis-Guide"
        description="DSGVO-Wissen kompakt: Grundlagen, Betroffenenrechte, Verarbeitungsverzeichnis, TOMs. ✓ Praxisnahe Guides ✓ Vorlagen ✓ Aktuelle Rechtsprechung. Jetzt lernen!"
        canonical="/wissen/dsgvo"
        keywords="DSGVO Wissen, GDPR Guide, Datenschutz Kompendium, DSGVO Grundlagen, Betroffenenrechte"
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
              <li className="text-[#e24e1b] font-medium">DSGVO</li>
            </ol>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="bg-white border-b border-stone-200 pt-20 pb-16 px-4">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-[#e24e1b] rounded-xl shadow-sm">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-[#232323]">
                  DSGVO-Wissen kompakt
                </h1>
              </div>
              <p className="text-xl text-[#474747] mb-8 max-w-3xl mx-auto leading-relaxed">
                Von Grundlagen über Betroffenenrechte bis zu komplexen Themen –
                alles was Sie zur DSGVO wissen müssen
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                  <Shield className="h-4 w-4 mr-2" />
                  5 Themenbereiche
                </Badge>
                <Badge variant="outline" className="bg-blue-50 border-[#003366] text-[#003366]">
                  <BookOpen className="h-4 w-4 mr-2" />
                  20+ Artikel
                </Badge>
                <Badge variant="outline" className="bg-stone-100 border-stone-400 text-[#474747]">
                  <FileText className="h-4 w-4 mr-2" />
                  Mit Vorlagen
                </Badge>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="grid md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {quickLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <Link key={index} to={link.link}>
                    <Card className="h-full bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer">
                      <CardContent className="p-6">
                        <div className="w-12 h-12 rounded-lg bg-[#F5F6F8] flex items-center justify-center mb-4">
                          <Icon className="h-6 w-6 text-[#474747] group-hover:text-[#e24e1b] transition-colors" />
                        </div>
                        <h3 className="font-semibold text-[#232323] mb-2 group-hover:text-[#e24e1b] transition-colors">
                          {link.title}
                        </h3>
                        <p className="text-sm text-[#474747] leading-relaxed">
                          {link.description}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Topics Tabs */}
        <section className="container mx-auto max-w-7xl px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
                {Object.entries(topics).map(([key, topic]) => {
                  const Icon = topic.icon;
                  return (
                    <TabsTrigger key={key} value={key} className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{topic.title}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>

              {Object.entries(topics).map(([key, topic]) => (
                <TabsContent key={key} value={key}>
                  <div className="grid md:grid-cols-2 gap-6">
                    {topic.articles.map((article, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Card className="h-full bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                          <CardHeader>
                            <div className="flex items-start justify-between mb-2">
                              <CardTitle className="text-lg text-[#232323] group-hover:text-[#e24e1b] transition-colors">
                                {article.title}
                              </CardTitle>
                              <Badge className={cn(
                                article.level === 'Einsteiger' ? 'bg-green-50 text-green-700 border-green-200' :
                                article.level === 'Fortgeschritten' ? 'bg-orange-50 text-[#e24e1b] border-orange-200' :
                                article.level === 'Experte' ? 'bg-red-50 text-red-700 border-red-200' :
                                article.level === 'Praktisch' ? 'bg-blue-50 text-[#003366] border-blue-200' :
                                'bg-purple-50 text-purple-700 border-purple-200'
                              )}>{article.level}</Badge>
                            </div>
                            <CardDescription className="text-[#474747]">{article.description}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2 text-sm text-[#474747]">
                                <Clock className="h-4 w-4" />
                                {article.readTime}
                              </div>
                              <Link to={article.link}>
                                <Button variant="ghost" size="sm" className="text-[#e24e1b] hover:bg-orange-50">
                                  Lesen
                                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>

          {/* Key Facts */}
          <motion.div
            className="mt-16 grid md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="bg-white border-l-4 border-blue-500 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#232323]">Rechtliche Grundlage</h3>
                <p className="text-sm text-[#474747] leading-relaxed">
                  Die DSGVO ist seit dem 25. Mai 2018 in der gesamten EU unmittelbar anwendbar
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-red-500 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#232323]">Bußgelder</h3>
                <p className="text-sm text-[#474747] leading-relaxed">
                  Bis zu 20 Mio. EUR oder 4% des weltweiten Jahresumsatzes
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-l-4 border-green-500 shadow-sm">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-4">
                  <UserCheck className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-[#232323]">Betroffenenrechte</h3>
                <p className="text-sm text-[#474747] leading-relaxed">
                  8 zentrale Rechte stärken die Position der betroffenen Personen
                </p>
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
            <Card className="bg-white border-l-4 border-[#e24e1b] shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-[#232323]">
                Brauchen Sie Unterstützung bei der DSGVO-Umsetzung?
              </h2>
              <p className="text-lg mb-6 text-[#474747] leading-relaxed">
                Unsere Experten helfen Ihnen bei der praktischen Implementierung
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#e24e1b] hover:bg-[#f97316] text-white shadow-sm"
                >
                  Kostenlose Beratung
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b] hover:text-white"
                >
                  DSGVO-Check starten
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </Card>
          </motion.div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default DSGVOWissen;