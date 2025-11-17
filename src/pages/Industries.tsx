import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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
  Heart,
  Building2,
  ShoppingCart,
  Cloud,
  Factory,
  Car,
  Zap,
  Apple,
  Truck,
  ArrowRight,
  Shield,
  BookOpen,
  Search,
  Star,
  AlertTriangle,
  Award,
  Code,
  AlertOctagon,
  Scale,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Industries: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Branchenspezifische Compliance-Lösungen",
    "description": "Compliance-Lösungen für verschiedene Branchen: Healthcare, FinTech, E-Commerce, SaaS und mehr",
    "numberOfItems": 9,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Gesundheitswesen",
        "url": "https://marsstein.ai/branchen/gesundheitswesen"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Finanzdienstleister",
        "url": "https://marsstein.ai/branchen/finanzdienstleister"
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'Alle Branchen', icon: Building2, count: 9 },
    { id: 'tech', name: 'Technologie', icon: Code, count: 3 },
    { id: 'regulated', name: 'Regulierte Branchen', icon: Scale, count: 4 },
    { id: 'manufacturing', name: 'Produktion', icon: Factory, count: 2 }
  ];

  const industries = [
    {
      id: 'gesundheitswesen',
      icon: Heart,
      title: 'Gesundheitswesen',
      subtitle: 'Medizinische Einrichtungen & MedTech',
      description: 'Spezialisierte Compliance-Lösungen für medizinische Einrichtungen, Praxen und MedTech-Unternehmen mit besonderem Fokus auf sensible Gesundheitsdaten.',
      challenges: ['Patientendaten Art. 9 DSGVO', 'KI-Diagnosesysteme', 'Medizintechnik-Compliance'],
      frameworks: ['DSGVO Art. 9', 'EU AI Act', 'ISO 27001', 'ISO 13485'],
      category: 'regulated',
      color: 'from-red-500 to-pink-600',
      link: '/branchen/gesundheitswesen',
      implementationTime: '6-9 Monate',
      difficulty: 'Experte',
      caseStudies: 12,
      popular: true
    },
    {
      id: 'finanzdienstleister',
      icon: Building2,
      title: 'Finanzdienstleister',
      subtitle: 'Banken, Versicherungen & FinTech',
      description: 'Umfassende Compliance-Frameworks für Banken, Versicherungen und FinTech-Unternehmen mit höchsten Sicherheitsanforderungen.',
      challenges: ['PCI DSS Compliance', 'KI-Kreditentscheidungen', 'Open Banking APIs'],
      frameworks: ['DSGVO', 'EU AI Act', 'ISO 27001', 'PCI DSS'],
      category: 'regulated',
      color: 'from-blue-500 to-indigo-600',
      link: '/branchen/finanzdienstleister',
      implementationTime: '9-12 Monate',
      difficulty: 'Experte',
      caseStudies: 18,
      featured: true
    },
    {
      id: 'e-commerce',
      icon: ShoppingCart,
      title: 'E-Commerce',
      subtitle: 'Online-Shops & Marktplätze',
      description: 'Optimierte Compliance-Strategien für Online-Shops und digitale Marktplätze mit Fokus auf Cookie-Management und Payment Security.',
      challenges: ['Cookie-Compliance', 'Personalisierungsalgorithmen', 'Payment Security'],
      frameworks: ['DSGVO', 'EU AI Act', 'PCI DSS', 'ePrivacy'],
      category: 'tech',
      color: 'from-green-500 to-emerald-600',
      link: '/branchen/e-commerce',
      implementationTime: '4-6 Monate',
      difficulty: 'Fortgeschritten',
      caseStudies: 15
    },
    {
      id: 'saas-unternehmen',
      icon: Cloud,
      title: 'SaaS-Unternehmen',
      subtitle: 'Software-as-a-Service Anbieter',
      description: 'Skalierbare Compliance-Infrastrukturen für moderne Software-as-a-Service Anbieter mit Multi-Tenant-Architekturen.',
      challenges: ['Multi-Tenant Privacy', 'API Security', 'KI-Integration Compliance'],
      frameworks: ['DSGVO', 'SOC2', 'ISO 27001', 'EU AI Act'],
      category: 'tech',
      color: 'from-purple-500 to-pink-600',
      link: '/branchen/saas-unternehmen',
      implementationTime: '5-8 Monate',
      difficulty: 'Fortgeschritten',
      caseStudies: 22,
      popular: true
    },
    {
      id: 'produktion',
      icon: Factory,
      title: 'Produktion & Fertigung',
      subtitle: 'Industrie 4.0 & Smart Manufacturing',
      description: 'Industrie 4.0 Compliance für intelligente Fertigung und vernetzte Produktionsanlagen mit OT/IT-Konvergenz.',
      challenges: ['OT/IT Security', 'Predictive Maintenance AI', 'Worker Privacy'],
      frameworks: ['ISO 27001', 'TISAX', 'DSGVO', 'NIS2'],
      category: 'manufacturing',
      color: 'from-orange-500 to-red-600',
      link: '/branchen/produktion',
      implementationTime: '8-12 Monate',
      difficulty: 'Experte',
      caseStudies: 8
    },
    {
      id: 'automotive',
      icon: Car,
      title: 'Automotive',
      subtitle: 'Connected Cars & Autonome Fahrzeuge',
      description: 'Connected Cars und autonome Fahrzeuge mit modernsten Compliance-Standards und KI-Sicherheitsanforderungen.',
      challenges: ['Autonome AI-Systeme', 'V2X Communication', 'Over-the-Air Updates'],
      frameworks: ['EU AI Act', 'ISO 27001', 'DSGVO', 'UN-R155'],
      category: 'manufacturing',
      color: 'from-blue-600 to-indigo-600',
      link: '/branchen/automotive',
      implementationTime: '10-14 Monate',
      difficulty: 'Experte',
      caseStudies: 6,
      urgent: true
    },
    {
      id: 'energie',
      icon: Zap,
      title: 'Energie & Utilities',
      subtitle: 'Kritische Infrastrukturen & Smart Grid',
      description: 'Kritische Infrastrukturen und Smart Grid Technologien mit NIS2-Compliance und höchsten Sicherheitsstandards.',
      challenges: ['Smart Grid AI Security', 'Critical Infrastructure Protection', 'Smart Meter Privacy'],
      frameworks: ['NIS2', 'ISO 27001', 'DSGVO', 'EU AI Act'],
      category: 'regulated',
      color: 'from-yellow-500 to-orange-600',
      link: '/branchen/energie',
      implementationTime: '12-18 Monate',
      difficulty: 'Experte',
      caseStudies: 4,
      featured: true
    },
    {
      id: 'lebensmittel',
      icon: Apple,
      title: 'Food & Beverage',
      subtitle: 'Farm-to-Fork Rückverfolgbarkeit',
      description: 'Farm-to-Fork Rückverfolgbarkeit und KI-gestützte Qualitätskontrolle mit Food Safety Standards und Consumer Trust.',
      challenges: ['AI Quality Control', 'Supply Chain Traceability', 'Food Safety Data'],
      frameworks: ['DSGVO', 'EU AI Act', 'ISO 22000', 'HACCP'],
      category: 'regulated',
      color: 'from-green-600 to-emerald-600',
      link: '/branchen/lebensmittel',
      implementationTime: '5-8 Monate',
      difficulty: 'Fortgeschritten',
      caseStudies: 7
    },
    {
      id: 'logistik',
      icon: Truck,
      title: 'Logistik & Transport',
      subtitle: 'Supply Chain & Fleet Management',
      description: 'Intelligente Supply Chain Management und KI-optimierte Transportlösungen mit grenzüberschreitenden Datenflüssen.',
      challenges: ['AI Route Optimization', 'Cross-Border Data Flows', 'Driver Privacy'],
      frameworks: ['DSGVO', 'EU AI Act', 'ISO 27001', 'TIC Council'],
      category: 'tech',
      color: 'from-indigo-600 to-purple-600',
      link: '/branchen/logistik',
      implementationTime: '4-7 Monate',
      difficulty: 'Fortgeschritten',
      caseStudies: 9
    }
  ];

  const filteredIndustries = industries.filter(industry => {
    const matchesCategory = selectedCategory === 'all' || industry.category === selectedCategory;
    const matchesSearch = searchQuery === '' ||
      industry.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      industry.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      industry.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyBadge = (difficulty: string) => {
    switch (difficulty) {
      case 'Einsteiger':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'Fortgeschritten':
        return 'bg-orange-50 text-[#e24e1b] border-orange-200';
      case 'Experte':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-stone-100 text-[#474747] border-stone-300';
    }
  };

  return (
    <>
      <SEOHead
        title="Branchen – Compliance-Lösungen für jede Industrie"
        description="Branchenspezifische Compliance: Healthcare, FinTech, E-Commerce & mehr. ✓ Maßgeschneidert ✓ Best Practices ✓ Expertenwissen. Jetzt entdecken!"
        canonical="/branchen"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-[#F5F6F8] via-orange-50/20 to-[#F5F6F8]">
        <Header />

        {/* Breadcrumb Navigation */}
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/" className="text-[#474747] hover:text-[#e24e1b] transition-colors">
                    Home
                  </Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-[#474747]" />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-[#e24e1b] font-medium">
                  Branchen
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
              {/* Icon + Title */}
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="p-3 bg-[#e24e1b] rounded-xl shadow-sm">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold text-[#232323]">
                  Branchen
                </h1>
              </div>

              {/* Description */}
              <p className="text-xl text-[#474747] mb-8 max-w-4xl mx-auto leading-relaxed">
                Spezialisierte Compliance-Lösungen für 9 Kernbranchen. Von Healthcare bis Automotive –
                branchenspezifisch optimiert und praxiserprobt.
              </p>

              {/* Stats Badges */}
              <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
                <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                  <Building2 className="h-4 w-4 mr-2" />
                  9 Branchen
                </Badge>
                <Badge variant="outline" className="bg-blue-50 border-[#003366] text-[#003366]">
                  <Shield className="h-4 w-4 mr-2" />
                  85+ Success Cases
                </Badge>
                <Badge variant="outline" className="bg-green-50 border-green-600 text-green-700">
                  <Award className="h-4 w-4 mr-2" />
                  98% Erfolgsrate
                </Badge>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Main Content */}
        <div className="container mx-auto max-w-7xl px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-24 space-y-6">
                {/* Search */}
                <Card className="bg-white border-stone-200 shadow-sm">
                  <CardContent className="p-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#474747]" />
                      <input
                        type="text"
                        placeholder="Branchen suchen..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-[#F5F6F8] border border-stone-300 rounded-lg text-[#232323] placeholder-[#474747] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:border-transparent"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Category Filter */}
                <Card className="bg-white border-stone-200 shadow-sm">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-[#232323] mb-4">Kategorien</h3>
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
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="lg:col-span-3">
              {/* Results Count */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#232323]">
                  {filteredIndustries.length} {filteredIndustries.length === 1 ? 'Branche' : 'Branchen'} gefunden
                </h2>
              </div>

              {/* Industries Grid */}
              {filteredIndustries.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredIndustries.map((industry, index) => {
                    const IconComponent = industry.icon;

                    return (
                      <motion.div
                        key={industry.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                      >
                        <Card className={cn(
                          "group relative overflow-hidden bg-white border-l-4 border-stone-200 hover:border-l-[#e24e1b] transition-all duration-300 hover:shadow-lg",
                          "hover:-translate-y-1 h-full"
                        )}>
                          <CardContent className="p-6">
                            {/* Header mit Icon + Status Badges */}
                            <div className="flex items-start justify-between mb-4">
                              <div className="flex items-center gap-3">
                                <div className={cn("p-3 rounded-xl bg-gradient-to-r", industry.color)}>
                                  <IconComponent className="h-6 w-6 text-white" />
                                </div>
                              </div>

                              {/* Status Badges (top right) */}
                              <div className="flex flex-col items-end gap-2">
                                {industry.popular && (
                                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                    <Star className="h-3 w-3 mr-1" />
                                    Beliebt
                                  </Badge>
                                )}
                                {industry.featured && (
                                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                                    <Award className="h-3 w-3 mr-1" />
                                    Featured
                                  </Badge>
                                )}
                                {industry.urgent && (
                                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                                    <AlertOctagon className="h-3 w-3 mr-1" />
                                    Urgent
                                  </Badge>
                                )}
                              </div>
                            </div>

                            {/* Title + Subtitle */}
                            <h3 className="text-xl font-bold text-[#232323] mb-1">{industry.title}</h3>
                            <p className="text-[#e24e1b] text-sm mb-3">{industry.subtitle}</p>

                            {/* Description */}
                            <p className="text-[#474747] leading-relaxed mb-4">
                              {industry.description}
                            </p>

                            {/* Implementation Time */}
                            <div className="bg-[#F5F6F8] border border-stone-200 rounded-lg p-3 mb-4">
                              <div className="flex items-center gap-2 mb-1">
                                <Target className="h-4 w-4 text-[#474747]" />
                                <span className="text-xs text-[#474747]">Umsetzungsdauer</span>
                              </div>
                              <span className="text-sm font-medium text-[#232323]">{industry.implementationTime}</span>
                            </div>

                            {/* Difficulty */}
                            <div className="mb-4">
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-[#474747]">Schwierigkeit</span>
                                <Badge variant="outline" className={getDifficultyBadge(industry.difficulty)}>
                                  {industry.difficulty}
                                </Badge>
                              </div>
                            </div>

                            {/* Challenges */}
                            <div className="mb-4">
                              <span className="text-sm text-[#474747] mb-2 block">Top Challenges:</span>
                              <div className="space-y-1">
                                {industry.challenges.slice(0, 2).map((challenge, idx) => (
                                  <div key={idx} className="flex items-center gap-2">
                                    <AlertTriangle className="h-3 w-3 text-orange-600 flex-shrink-0" />
                                    <span className="text-xs text-[#474747]">{challenge}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Frameworks Tags */}
                            <div className="mb-4">
                              <span className="text-sm text-[#474747] mb-2 block">Frameworks:</span>
                              <div className="flex flex-wrap gap-1">
                                {industry.frameworks.slice(0, 3).map((framework) => (
                                  <Badge
                                    key={framework}
                                    variant="outline"
                                    className="text-xs bg-stone-100 text-[#474747] border-stone-300"
                                  >
                                    {framework}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            {/* CTA Button */}
                            <Button
                              asChild
                              className="w-full bg-[#e24e1b] hover:bg-[#f97316] text-white shadow-sm"
                            >
                              <Link to={industry.link}>
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
              ) : (
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
                      setSelectedCategory('all');
                    }}
                    className="bg-[#e24e1b] hover:bg-[#f97316] text-white"
                  >
                    Filter zurücksetzen
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Industries;
