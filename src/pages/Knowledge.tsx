import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import {
  BookOpen,
  FileText,
  CheckCircle2,
  ArrowRight,
  Clock,
  Star,
  Calendar,
  Shield,
  Target,
  AlertTriangle,
  Lightbulb,
  Award,
  Brain,
  Scale,
  Globe,
  Settings,
  Building2,
  AlertOctagon,
  Calculator
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Knowledge: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": "Compliance Wissen & Leitfäden",
      "description": "Umfassende Sammlung von Compliance-Leitfäden, DSGVO-Guides und Rechtsprechungsanalysen für Datenschutzbeauftragte und Compliance Manager",
      "url": "https://marsstein.ai/wissen",
      "provider": {
        "@type": "Organization",
        "name": "Marsstein",
        "url": "https://marsstein.ai"
      },
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": 24,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Course",
              "name": "DSGVO-Leitfäden",
              "description": "Umfassende Schritt-für-Schritt Anleitungen für die DSGVO-Implementierung"
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Course",
              "name": "Compliance Frameworks",
              "description": "Detaillierte Guides zu ISO 27001, SOC2, EU AI Act und anderen Standards"
            }
          }
        ]
      }
    },
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
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Welche Compliance-Themen werden abgedeckt?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unser Wissenscenter umfasst DSGVO-Leitfäden, ISO 27001, SOC2, EU AI Act, Rechtsprechung, Risk Management und branchenspezifische Compliance-Lösungen."
          }
        },
        {
          "@type": "Question",
          "name": "Für wen sind die Leitfäden geeignet?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Die Leitfäden richten sich an Datenschutzbeauftragte, Compliance Manager, IT-Sicherheitsbeauftragte und alle, die Compliance-Anforderungen umsetzen müssen."
          }
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', name: 'Alle Bereiche', icon: BookOpen, count: 32 },
    { id: 'dsgvo', name: 'DSGVO & Datenschutz', icon: Shield, count: 12 },
    { id: 'implementation', name: 'Implementierung', icon: Settings, count: 8 },
    { id: 'crisis', name: 'Krisenmanagement', icon: AlertTriangle, count: 4 },
    { id: 'planning', name: 'Kosten & Planung', icon: Calculator, count: 7 }
  ];

  const knowledgeAreas = [
    {
      id: 'china-dsgvo',
      title: 'China & DSGVO',
      description: '13 Praxisartikel für DSGVO-Compliance im China-Geschäft: E-Commerce, Social Media, Recht und Investment',
      icon: Globe,
      color: 'from-red-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-red-900 to-slate-900',
      category: 'dsgvo',
      guides: 13,
      difficulty: 'Alle Level',
      link: '/wissen/china',
      popular: true,
      featured: [
        'Amazon Sellers & DSGVO',
        'TikTok Shop China',
        'DeepSeek AI Datenschutz',
        'EU-Vertreter für China'
      ]
    },
    {
      id: 'dsgvo-guides',
      title: 'DSGVO-Leitfäden',
      description: 'Umfassende Schritt-für-Schritt Anleitungen für die DSGVO-Implementierung',
      icon: Shield,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      category: 'dsgvo',
      guides: 8,
      difficulty: 'Alle Level',
      link: '/wissen/dsgvo',
      popular: true,
      featured: [
        'DSGVO in 10 Minuten verstehen',
        'DSGVO in 30 Tagen umsetzen',
        'Website DSGVO-konform gestalten',
        'Data Breach Notfallplan'
      ]
    },
    {
      id: 'compliance-frameworks',
      title: 'Compliance Frameworks',
      description: 'Detaillierte Guides zu ISO 27001, SOC2, EU AI Act und anderen Standards',
      icon: Award,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900',
      category: 'implementation',
      guides: 6,
      difficulty: 'Fortgeschritten',
      link: '/wissen/compliance-frameworks',
      featured: [
        'ISO 27001 Zertifizierung',
        'SOC2 Type II Audit',
        'EU AI Act Compliance',
        'TISAX Assessment'
      ]
    },
    {
      id: 'legal-updates',
      title: 'Rechtsprechung & Updates',
      description: 'Aktuelle Gerichtsurteile, neue Regelungen und deren praktische Auswirkungen',
      icon: Scale,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      category: 'dsgvo',
      guides: 5,
      difficulty: 'Experte',
      link: '/wissen/rechtsprechung',
      featured: [
        'Schrems II Urteil Analyse',
        'Neue EDSA Guidelines',
        'Bußgeld-Trends 2024',
        'Cookie-Banner Rechtsprechung'
      ]
    },
    {
      id: 'risk-management',
      title: 'Risk Management',
      description: 'Tools und Methoden für Risikoanalyse und Compliance-Monitoring',
      icon: Target,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900',
      category: 'implementation',
      guides: 4,
      difficulty: 'Fortgeschritten',
      link: '/wissen/risk-management',
      featured: [
        'DSFA durchführen',
        'TOM bewerten',
        'Vendor Risk Assessment',
        'Incident Response Plan'
      ]
    },
    {
      id: 'industry-specific',
      title: 'Branchenspezifische Guides',
      description: 'Maßgeschneiderte Compliance-Lösungen für verschiedene Industrien',
      icon: Building2,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900',
      category: 'dsgvo',
      guides: 7,
      difficulty: 'Mittel',
      link: '/wissen/branchen',
      featured: [
        'Fintech Compliance',
        'Healthcare DSGVO',
        'E-Commerce Privacy',
        'SaaS Data Protection'
      ]
    },
    {
      id: 'crisis-management',
      title: 'Krisenmanagement',
      description: 'Notfallpläne und Sofortmaßnahmen bei Datenschutzverletzungen',
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-red-900 to-slate-900',
      category: 'crisis',
      guides: 4,
      difficulty: 'Kritisch',
      link: '/wissen/krisenmanagement',
      urgent: true,
      featured: [
        '72h Data Breach Response',
        'Behörden-Kommunikation',
        'Media Crisis Management',
        'Legal Damage Control'
      ]
    },
    {
      id: 'cost-transparency',
      title: 'Kosten & Entscheidungshilfen',
      description: 'Transparente Kostenübersichten und interaktive Tools für fundierte Compliance-Entscheidungen',
      icon: Calculator,
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-green-900 to-slate-900',
      category: 'planning',
      guides: 7,
      difficulty: 'Praktisch',
      link: '/wissen/kosten',
      popular: true,
      featured: [
        'DSGVO Compliance Kosten',
        'Externer DSB Kosten-Vergleich',
        'ISO 27001 Budget-Planung',
        'Interaktiver Kostenrechner'
      ]
    }
  ];

  const filteredAreas = selectedCategory === 'all' 
    ? knowledgeAreas 
    : knowledgeAreas.filter(area => area.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Alle Level': return 'bg-green-50 text-green-700 border-green-200';
      case 'Mittel': return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      case 'Fortgeschritten': return 'bg-orange-50 text-[#e24e1b] border-orange-200';
      case 'Experte': return 'bg-red-50 text-red-700 border-red-200';
      case 'Kritisch': return 'bg-red-50 text-red-700 border-red-200 animate-pulse';
      case 'Praktisch': return 'bg-emerald-50 text-emerald-700 border-emerald-200';
      default: return 'bg-stone-100 text-[#474747] border-stone-300';
    }
  };

  return (
    <>
      <SEOHead
        title="Compliance Wissen – DSGVO-Leitfäden & Rechtsprechung 2024"
        description="Kostenlose Compliance-Leitfäden für DSGVO, ISO 27001, SOC2 & EU AI Act. ✓ 24+ praxiserprobte Guides ✓ Aktuelle Rechtsprechung ✓ Schritt-für-Schritt Anleitungen."
        canonical="/wissen"
        structuredData={structuredData[0] as Record<string, unknown>}
      />
      <div className="min-h-screen bg-gradient-to-br from-[#F5F6F8] via-orange-50/20 to-[#F5F6F8]">
        <Header />

      {/* Breadcrumb */}
      <div className="container px-4 py-4 max-w-7xl mx-auto">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/" className="text-[#474747] hover:text-[#e24e1b]">
                  Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="text-[#474747]" />
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[#e24e1b] font-medium">
                Wissen
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
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#232323]">
                Compliance Wissen
              </h1>
            </div>

            <p className="text-xl text-[#474747] mb-8 max-w-4xl mx-auto leading-relaxed">
              Praxiserprobte Leitfäden, aktuelle Rechtsprechung und <span className="font-semibold text-[#e24e1b]">Schritt-für-Schritt Anleitungen</span>
              für erfolgreiche Compliance-Implementierung.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <FileText className="h-4 w-4 mr-2" />
                24+ Leitfäden
              </Badge>
              <Badge variant="outline" className="bg-green-50 border-green-200 text-green-700">
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Praxiserprobt
              </Badge>
              <Badge variant="outline" className="bg-blue-50 border-blue-200 text-blue-700">
                <Brain className="h-4 w-4 mr-2" />
                Expertenwissen
              </Badge>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-lg font-semibold transition-all duration-200 border",
                  selectedCategory === category.id
                    ? "bg-orange-50 border-[#e24e1b] text-[#e24e1b]"
                    : "bg-white border-stone-200 text-[#474747] hover:bg-[#F5F6F8] hover:text-[#232323]"
                )}
              >
                <category.icon className="h-5 w-5" />
                <span>{category.name}</span>
                <Badge variant="outline" className="text-xs border-current">
                  {category.count}
                </Badge>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Knowledge Areas Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card className={cn(
                  "group relative overflow-hidden bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg",
                  "hover:-translate-y-1 h-full"
                )}>
                  <CardContent className="p-6 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={cn("p-3 rounded-xl bg-gradient-to-r", area.color)}>
                          <area.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        {area.popular && (
                          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                            <Star className="h-3 w-3 mr-1" />
                            Beliebt
                          </Badge>
                        )}
                        {area.urgent && (
                          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200 animate-pulse">
                            <AlertOctagon className="h-3 w-3 mr-1" />
                            Urgent
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Title + Description */}
                    <h3 className="text-xl font-bold text-[#232323] mb-3">{area.title}</h3>
                    <p className="text-[#474747] leading-relaxed mb-4">
                      {area.description}
                    </p>

                    {/* Stats Box */}
                    <div className="bg-[#F5F6F8] border border-stone-200 rounded-lg p-3 mb-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <FileText className="h-4 w-4 text-[#474747]" />
                            <span className="text-xs text-[#474747]">Guides verfügbar</span>
                          </div>
                          <span className="text-sm font-medium text-[#232323]">{area.guides} Leitfäden</span>
                        </div>
                        <Badge variant="outline" className={getDifficultyColor(area.difficulty)}>
                          {area.difficulty}
                        </Badge>
                      </div>
                    </div>

                    {/* Featured Guides Preview */}
                    <div className="mb-4 flex-grow">
                      <span className="text-sm text-[#474747] mb-2 block">Featured Guides:</span>
                      <div className="space-y-2">
                        {area.featured.slice(0, 3).map((guide, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#e24e1b] flex-shrink-0" />
                            <span className="text-sm text-[#474747]">{guide}</span>
                          </div>
                        ))}
                        {area.featured.length > 3 && (
                          <span className="text-xs text-[#474747] italic">
                            +{area.featured.length - 3} weitere
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA */}
                    <Button
                      asChild
                      className="w-full bg-[#e24e1b] hover:bg-[#f97316] text-white shadow-sm mt-auto"
                    >
                      <Link to={area.link} className="flex items-center justify-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>Bereich erkunden</span>
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

      {/* Quick Access Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-stone-200">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#232323]">
              Schnellzugriff
            </h2>
            <p className="text-xl md:text-2xl text-[#474747] leading-relaxed">
              Die wichtigsten Guides für den sofortigen Einstieg
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "DSGVO Grundlagen",
                description: "In 10 Minuten die wichtigsten Prinzipien verstehen",
                icon: Lightbulb,
                link: "/wissen/leitfaden/dsgvo-grundlagen",
                color: "from-green-500 to-emerald-500",
                time: "10 Min",
                level: "Alle Level"
              },
              {
                title: "30-Tage Implementation",
                description: "Komplette DSGVO-Umsetzung in einem Monat",
                icon: Calendar,
                link: "/wissen/leitfaden/dsgvo-30-tage",
                color: "from-blue-500 to-indigo-500",
                time: "45 Min",
                level: "Fortgeschritten"
              },
              {
                title: "Data Breach Notfall",
                description: "72h-Notfallplan bei Datenschutzverletzungen",
                icon: AlertTriangle,
                link: "/wissen/leitfaden/data-breach-notfall",
                color: "from-red-500 to-pink-500",
                time: "20 Min",
                level: "Kritisch"
              }
            ].map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <Card className="h-full bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardContent className="p-8">
                    <div className={cn(
                      "inline-flex p-4 rounded-2xl bg-gradient-to-r mb-6 shadow-sm",
                      guide.color
                    )}>
                      <guide.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-[#232323]">{guide.title}</h3>
                    <p className="text-[#474747] mb-6 leading-relaxed">{guide.description}</p>

                    <div className="flex items-center gap-4 mb-6">
                      <Badge variant="outline" className="bg-stone-100 text-[#474747] border-stone-300">
                        <Clock className="h-3 w-3 mr-1" />
                        {guide.time}
                      </Badge>
                      <Badge variant="outline" className={getDifficultyColor(guide.level)}>
                        {guide.level}
                      </Badge>
                    </div>

                    <Button asChild className="w-full bg-[#e24e1b] hover:bg-[#f97316] text-white">
                      <Link to={guide.link}>
                        Jetzt lesen
                        <ArrowRight className="ml-2 h-4 w-4" />
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50/30 via-white to-orange-50/30 border-t border-stone-200">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#232323]">
              Bereit für Compliance-Exzellenz?
            </h2>

            <p className="text-xl md:text-2xl text-[#474747] mb-12 max-w-3xl mx-auto leading-relaxed">
              Nutzen Sie unser gesamtes Wissen für Ihre <span className="font-semibold text-[#e24e1b]">erfolgreiche Compliance-Transformation</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                className="bg-[#e24e1b] hover:bg-[#f97316] text-white px-10 py-4 text-lg font-bold shadow-lg hover:shadow-xl transition-all duration-300"
                asChild
              >
                <Link to="/wissen/dsgvo">
                  <BookOpen className="mr-3 h-6 w-6" />
                  Alle Leitfäden erkunden
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#e24e1b] text-[#e24e1b] hover:bg-orange-50 px-10 py-4 text-lg font-bold"
                asChild
              >
                <Link to="/pricing">
                  <Target className="mr-3 h-6 w-6" />
                  Kostenlos starten
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

        <Footer />
      </div>
    </>
  );
};

export default Knowledge;