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
  AlertTriangle,
  Shield,
  Clock,
  FileText,
  Target,
  Search,
  ArrowRight,
  BookOpen,
  Star,
  CheckCircle2,
  Timer,
  Calendar,
  Users,
  Download,
  Building2,
  Scale,
  MessageSquare,
  Lightbulb,
  Flag,
  Phone,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Krisenmanagement: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "name": "Krisenmanagement Datenschutz – DSGVO Notfallpläne 72h",
    "description": "DSGVO-Notfallpläne für Datenschutzverletzungen: 72h Data Breach Response, Behördenprüfungen & Compliance-Krisen. Jetzt vorbereiten!",
    "url": "https://marsstein.ai/wissen/krisenmanagement",
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
    }
  };

  const categories = [
    { id: 'all', name: 'Alle Szenarien', icon: AlertTriangle, count: 8 },
    { id: 'critical', name: 'Kritisch (0-1h)', icon: Flag, count: 2 },
    { id: 'urgent', name: 'Dringend (1-24h)', icon: Timer, count: 3 },
    { id: 'important', name: 'Wichtig (1-7 Tage)', icon: Calendar, count: 2 },
    { id: 'templates', name: 'Vorlagen', icon: FileText, count: 1 }
  ];

  const crisisScenarios = [
    {
      id: 'data-breach-72h',
      title: '72h Data Breach Response',
      subtitle: 'DSGVO Art. 33/34 Meldepflicht',
      description: 'Sofortige Maßnahmen bei Datenschutzverletzungen. Behördenmeldung innerhalb von 72 Stunden und strukturierte Betroffeneninformation nach DSGVO.',
      category: 'critical',
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-500',
      urgency: 'Kritisch',
      timeframe: '0-72 Stunden',
      readTime: '15 Min',
      link: '/wissen/krisenmanagement/data-breach-72h',
      urgent: true,
      popular: true,
      steps: ['Sofortmaßnahmen (0-1h)', 'Behördenmeldung (72h)', 'Betroffenen-Info', 'Dokumentation'],
      stakeholders: ['IT', 'DSB', 'Geschäftsführung', 'Legal'],
      tags: ['DSGVO', 'Meldepflicht', 'Art. 33', 'Data Breach']
    },
    {
      id: 'security-incident',
      title: 'IT-Sicherheitsvorfall',
      subtitle: 'Cyberangriff & Breach',
      description: 'Strukturierte Reaktion auf Cyberangriffe und Sicherheitsverletzungen. Von der Incident Detection bis zur vollständigen Recovery.',
      category: 'critical',
      icon: Shield,
      color: 'from-orange-500 to-red-500',
      urgency: 'Kritisch',
      timeframe: '0-4 Stunden',
      readTime: '12 Min',
      link: '/wissen/krisenmanagement/security-incident',
      urgent: true,
      steps: ['Detection & Analysis', 'Containment', 'Evidence Preservation', 'Communication'],
      stakeholders: ['CISO', 'IT-Security', 'Management', 'Externe'],
      tags: ['Cyberangriff', 'Incident Response', 'Security', 'Forensik']
    },
    {
      id: 'compliance-audit',
      title: 'Compliance Audit Notfall',
      subtitle: 'Behördenprüfung vorbereiten',
      description: 'Schnelle Vorbereitung auf unangekündigte Behördenprüfungen. Dokumenten-Sammlung, Team-Koordination und Kommunikationsstrategie.',
      category: 'urgent',
      icon: Eye,
      color: 'from-yellow-500 to-orange-500',
      urgency: 'Dringend',
      timeframe: '1-24 Stunden',
      readTime: '10 Min',
      link: '/wissen/krisenmanagement/compliance-audit-emergency',
      steps: ['Dokumenten-Sammlung', 'Team-Koordination', 'Kommunikation', 'Rechte & Pflichten'],
      stakeholders: ['Compliance', 'Legal', 'IT', 'HR'],
      tags: ['Audit', 'Behörde', 'Prüfung', 'Vorbereitung']
    },
    {
      id: 'media-crisis',
      title: 'Media Crisis Management',
      subtitle: 'Öffentliche Datenschutz-Krise',
      description: 'Professionelle Kommunikation bei öffentlicher Datenschutz-Krise. Erste Stellungnahme, Stakeholder-Kommunikation und Reputation Recovery.',
      category: 'urgent',
      icon: MessageSquare,
      color: 'from-purple-500 to-pink-500',
      urgency: 'Dringend',
      timeframe: '1-12 Stunden',
      readTime: '14 Min',
      link: '/wissen/krisenmanagement/media-crisis',
      steps: ['Erste Stellungnahme', 'Stakeholder-Info', 'Social Media', 'Reputation Recovery'],
      stakeholders: ['PR', 'Management', 'Legal', 'Communications'],
      tags: ['PR', 'Krise', 'Medien', 'Kommunikation']
    },
    {
      id: 'vendor-breach',
      title: 'Vendor Data Breach',
      subtitle: 'Dienstleister-Datenpanne',
      description: 'Reaktion auf Datenverletzungen bei Dienstleistern und Lieferanten. Vendor Impact Assessment und vertragliche Durchsetzung.',
      category: 'urgent',
      icon: Building2,
      color: 'from-indigo-500 to-purple-500',
      urgency: 'Dringend',
      timeframe: '2-48 Stunden',
      readTime: '11 Min',
      link: '/wissen/krisenmanagement/vendor-data-breach',
      steps: ['Vendor Assessment', 'Vertragsrechte', 'Kunden-Info', 'Recovery Plan'],
      stakeholders: ['Procurement', 'Legal', 'DSB', 'Vendor Mgmt'],
      tags: ['Vendor', 'Lieferant', 'Third-Party', 'Supply Chain']
    },
    {
      id: 'gdpr-fine',
      title: 'DSGVO-Bußgeld Verfahren',
      subtitle: 'Behördliche Sanktionen',
      description: 'Strukturierte Reaktion auf Bußgeldverfahren. Rechtsmittel-Strategie, Evidence Collection und Defense Preparation.',
      category: 'important',
      icon: Scale,
      color: 'from-blue-500 to-indigo-500',
      urgency: 'Wichtig',
      timeframe: '1-7 Tage',
      readTime: '18 Min',
      link: '/wissen/krisenmanagement/gdpr-fine-response',
      certification: true,
      steps: ['Rechtsmittel-Strategie', 'Evidence Collection', 'Defense Prep', 'Settlement'],
      stakeholders: ['Legal Counsel', 'DSB', 'Management', 'Externe Anwälte'],
      tags: ['Bußgeld', 'Sanktion', 'Rechtsmittel', 'Verteidigung']
    },
    {
      id: 'business-continuity',
      title: 'Business Continuity Planning',
      subtitle: 'Geschäftsbetrieb aufrechterhalten',
      description: 'Aufrechterhaltung des Geschäftsbetriebs während Compliance-Krisen. Risk Assessment Update und Alternative Processes.',
      category: 'important',
      icon: Target,
      color: 'from-emerald-500 to-teal-500',
      urgency: 'Wichtig',
      timeframe: '1-14 Tage',
      readTime: '16 Min',
      link: '/wissen/krisenmanagement/business-continuity',
      steps: ['Risk Assessment', 'Alternative Prozesse', 'Stakeholder Mgmt', 'Recovery Roadmap'],
      stakeholders: ['Operations', 'IT', 'Risk Mgmt', 'Leadership'],
      tags: ['BCP', 'Continuity', 'Recovery', 'Resilience']
    },
    {
      id: 'communication-templates',
      title: 'Krisenkommunikations-Vorlagen',
      subtitle: 'Templates für alle Situationen',
      description: 'Vorgefertigte Templates für verschiedene Krisensituationen. Behörden-Meldungen, Kunden-Information und Press Statements.',
      category: 'templates',
      icon: FileText,
      color: 'from-teal-500 to-cyan-500',
      urgency: 'Alle Level',
      timeframe: 'Sofort verfügbar',
      readTime: '5 Min',
      link: '/wissen/krisenmanagement/communication-templates',
      popular: true,
      steps: ['Behörden-Meldungen', 'Kunden-Info', 'Mitarbeiter-Komm', 'Press Statements'],
      stakeholders: ['Alle Teams'],
      tags: ['Templates', 'Vorlagen', 'Kommunikation', 'Download']
    }
  ];

  const filteredScenarios = crisisScenarios.filter(scenario => {
    const matchesCategory = activeCategory === 'all' || scenario.category === activeCategory;
    const matchesSearch = scenario.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scenario.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         scenario.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'Kritisch':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'Dringend':
        return 'bg-orange-50 text-[#e24e1b] border-orange-200';
      case 'Wichtig':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      default:
        return 'bg-green-50 text-green-700 border-green-200';
    }
  };

  return (
    <>
      <SEOHead
        title="Krisenmanagement Datenschutz – DSGVO Notfallpläne 72h"
        description="DSGVO-Notfallpläne für Datenschutzverletzungen: 72h Data Breach Response, Behördenprüfungen & Compliance-Krisen. Jetzt vorbereiten!"
        canonical="/wissen/krisenmanagement"
        ogType="article"
        structuredData={[
          structuredData,
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
                "name": "Krisenmanagement",
                "item": "https://marsstein.ai/wissen/krisenmanagement"
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
                  Krisenmanagement
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
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#232323]">
                Krisenmanagement
              </h1>
            </div>

            <p className="text-xl text-[#474747] mb-8 max-w-4xl mx-auto leading-relaxed">
              Sofortmaßnahmen und strukturierte Notfallpläne für Datenschutzverletzungen,
              Behördenprüfungen und Compliance-Krisen. Seien Sie vorbereitet!
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <Clock className="h-4 w-4 mr-2" />
                72h DSGVO-Meldefrist
              </Badge>
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <FileText className="h-4 w-4 mr-2" />
                8 Notfallszenarien
              </Badge>
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <Users className="h-4 w-4 mr-2" />
                Für Krisenteams
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
                    <h3 className="text-lg font-semibold text-[#232323] mb-4">Dringlichkeit</h3>
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

                <Card className="bg-gradient-to-br from-red-500 to-[#e24e1b] text-white border-0 shadow-lg">
                  <CardContent className="p-6">
                    <AlertTriangle className="h-8 w-8 mb-3 animate-pulse" />
                    <h3 className="text-lg font-semibold mb-2">24/7 Notfall-Hotline</h3>
                    <p className="text-sm text-white/90 mb-4">
                      Sofortiger Support bei kritischen Datenschutzvorfällen
                    </p>
                    <Button
                      asChild
                      className="w-full bg-white text-[#e24e1b] hover:bg-white/90"
                    >
                      <Link to="/kontakt">
                        <Phone className="h-4 w-4 mr-2" />
                        Kontakt
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-3">
              {filteredScenarios.length === 0 ? (
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
                  {filteredScenarios.map((scenario, index) => {
                    const Icon = scenario.icon;
                    return (
                      <motion.div
                        key={scenario.id}
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
                                <div className={cn("p-3 rounded-xl bg-gradient-to-r", scenario.color)}>
                                  <Icon className="h-6 w-6 text-white" />
                                </div>
                              </div>

                              <div className="flex flex-col items-end gap-2">
                                {scenario.popular && (
                                  <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                    <Star className="h-3 w-3 mr-1" />
                                    Beliebt
                                  </Badge>
                                )}
                                {scenario.urgent && (
                                  <Badge className="bg-red-50 text-red-700 border-red-200 animate-pulse">
                                    <AlertTriangle className="h-3 w-3 mr-1" />
                                    Kritisch
                                  </Badge>
                                )}
                                {scenario.certification && (
                                  <Badge className="bg-green-50 text-green-700 border-green-200">
                                    <CheckCircle2 className="h-3 w-3 mr-1" />
                                    Experte
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <h3 className="text-xl font-bold text-[#232323] mb-1">{scenario.title}</h3>
                            <p className="text-[#e24e1b] text-sm mb-3">{scenario.subtitle}</p>

                            <p className="text-[#474747] leading-relaxed mb-4 flex-grow">
                              {scenario.description}
                            </p>

                            <div className="bg-[#F5F6F8] border border-stone-200 rounded-lg p-3 mb-4">
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-[#474747]" />
                                  <span className="text-sm font-medium text-[#232323]">{scenario.timeframe}</span>
                                </div>
                                <Badge className={getUrgencyColor(scenario.urgency)}>
                                  {scenario.urgency}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-2">
                                <Timer className="h-4 w-4 text-[#474747]" />
                                <span className="text-sm text-[#474747]">Lesezeit: {scenario.readTime}</span>
                              </div>
                            </div>

                            <div className="mb-4">
                              <span className="text-sm text-[#474747] mb-2 block">Wichtige Schritte:</span>
                              <div className="space-y-1">
                                {scenario.steps.slice(0, 3).map((step, idx) => (
                                  <div key={idx} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-3 w-3 text-[#e24e1b] flex-shrink-0" />
                                    <span className="text-xs text-[#474747]">{step}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            <div className="mb-4">
                              <div className="flex flex-wrap gap-1">
                                {scenario.tags.slice(0, 3).map((tag) => (
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
                              <Link to={scenario.link}>
                                <BookOpen className="h-4 w-4 mr-2" />
                                Notfallplan öffnen
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

export default Krisenmanagement;
