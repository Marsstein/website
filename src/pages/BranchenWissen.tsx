import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  ArrowRight,
  Search,
  Star,
  Building2,
  Heart,
  CreditCard,
  Cpu,
  Factory,
  Briefcase,
  Brain,
  ShoppingCart,
  Cloud,
  GraduationCap,
  Stethoscope,
  Pill,
  Home,
  Plane,
  Truck,
  Shield,
  Hammer,
  Baby,
  Users,
  Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

const BranchenWissen: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedComplexity, setSelectedComplexity] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Branchen-spezifische Compliance Guides",
    "description": "Spezialisiertes DSGVO & Compliance-Wissen für verschiedene Branchen: Healthcare, FinTech, E-Commerce, Industrie 4.0 und mehr.",
    "url": "https://marsstein.ai/wissen/branchen"
  };

  const categories = [
    { id: 'all', name: 'Alle Branchen', icon: Building2, count: 24 },
    { id: 'healthcare', name: 'Gesundheitswesen', icon: Heart, count: 5 },
    { id: 'finance', name: 'Finanzsektor', icon: CreditCard, count: 3 },
    { id: 'technology', name: 'Technologie', icon: Cpu, count: 5 },
    { id: 'manufacturing', name: 'Produktion', icon: Factory, count: 3 },
    { id: 'services', name: 'Dienstleistungen', icon: Briefcase, count: 8 }
  ];

  const complexityLevels = [
    { id: 'all', name: 'Alle Level' },
    { id: 'basic', name: 'Grundlagen' },
    { id: 'intermediate', name: 'Fortgeschritten' },
    { id: 'expert', name: 'Experte' }
  ];

  const branchenWissen = [
    {
      id: 'healthcare-dsgvo',
      title: 'Gesundheitswesen DSGVO',
      subtitle: 'DSGVO-konforme Datenverarbeitung',
      description: 'Umfassender Leitfaden für DSGVO-konforme Datenverarbeitung in Kliniken, Praxen und MedTech mit speziellem Fokus auf Art. 9 DSGVO.',
      icon: Heart,
      category: 'healthcare',
      complexity: 'expert',
      color: 'from-red-500 to-pink-600',
      readTime: '45 Min',
      popular: true,
      link: '/wissen/branchen/gesundheitswesen-dsgvo',
      industries: ['Kliniken', 'Arztpraxen', 'MedTech'],
      tags: ['Patientendaten', 'Medizinprodukte', 'Telemedizin']
    },
    {
      id: 'healthcare-ai-compliance',
      title: 'Healthcare AI Compliance',
      subtitle: 'EU AI Act für medizinische KI',
      description: 'EU AI Act Compliance für medizinische KI-Systeme, Diagnosealgorithmen und algorithmische Fairness in der Gesundheitsbranche.',
      icon: Brain,
      category: 'healthcare',
      complexity: 'expert',
      color: 'from-blue-500 to-purple-600',
      readTime: '50 Min',
      popular: true,
      link: '/wissen/branchen/healthcare-ai-compliance',
      industries: ['Medical AI', 'Diagnostik', 'KI-Systeme'],
      tags: ['KI-Systeme', 'Bias', 'Medical AI']
    },
    {
      id: 'edtech-privacy',
      title: 'EdTech Privacy Compliance',
      subtitle: 'COPPA & FERPA für Bildung',
      description: 'COPPA und FERPA Compliance für Bildungsplattformen mit altersgerechtem Consent Management und Datenschutz für Schülerdaten.',
      icon: GraduationCap,
      category: 'services',
      complexity: 'expert',
      color: 'from-green-500 to-teal-600',
      readTime: '40 Min',
      popular: true,
      link: '/wissen/branchen/edtech-privacy',
      industries: ['EdTech', 'E-Learning', 'Schulen'],
      tags: ['Bildung', 'Kinderschutz', 'Consent']
    },
    {
      id: 'fintech-compliance',
      title: 'FinTech Compliance',
      subtitle: 'Digitale Finanzdienstleister',
      description: 'Strategische Compliance-Ansätze für FinTech-Startups, Payment Processing, Open Banking und Crypto-Asset Regulierung.',
      icon: CreditCard,
      category: 'finance',
      complexity: 'expert',
      color: 'from-blue-500 to-indigo-600',
      readTime: '60 Min',
      popular: true,
      link: '/wissen/branchen/fintech-compliance',
      industries: ['Payment', 'Banking', 'Crypto'],
      tags: ['Payment', 'Open Banking', 'KYC']
    },
    {
      id: 'insurtech-compliance',
      title: 'InsurTech Compliance',
      subtitle: 'Digitale Versicherungen',
      description: 'Digitale Transformation der Versicherungsbranche mit DSGVO, IDD und AI Act Compliance für moderne InsurTech-Lösungen.',
      icon: Shield,
      category: 'finance',
      complexity: 'expert',
      color: 'from-blue-600 to-indigo-600',
      readTime: '55 Min',
      link: '/wissen/branchen/insurtech-compliance',
      industries: ['Versicherung', 'Telematik', 'KI'],
      tags: ['Versicherung', 'Telematik', 'KI-Bewertung']
    },
    {
      id: 'ecommerce-privacy',
      title: 'E-Commerce Privacy',
      subtitle: 'Datenschutzfreundlicher Online-Handel',
      description: 'Best Practices für datenschutzfreundliches E-Commerce, Cookie-Management und DSGVO-konforme Produktempfehlungen.',
      icon: ShoppingCart,
      category: 'technology',
      complexity: 'intermediate',
      color: 'from-emerald-500 to-teal-600',
      readTime: '35 Min',
      link: '/wissen/branchen/ecommerce-privacy',
      industries: ['E-Commerce', 'Retail', 'Online-Shops'],
      tags: ['Cookies', 'Tracking', 'Personalisierung']
    },
    {
      id: 'saas-privacy-design',
      title: 'SaaS Privacy by Design',
      subtitle: 'Privacy-First SaaS Architektur',
      description: 'Implementierung von Privacy by Design Prinzipien in SaaS-Architekturen mit Multi-Tenant Datenisolation.',
      icon: Cloud,
      category: 'technology',
      complexity: 'expert',
      color: 'from-purple-500 to-pink-600',
      readTime: '50 Min',
      link: '/wissen/branchen/saas-privacy-design',
      industries: ['SaaS', 'Cloud', 'Software'],
      tags: ['Multi-Tenant', 'API', 'Cloud']
    },
    {
      id: 'manufacturing-iot',
      title: 'Industrie 4.0 Datenschutz',
      subtitle: 'IoT & vernetzte Produktion',
      description: 'Datenschutz und Cybersecurity für vernetzte Produktionsanlagen, IoT-Devices und Predictive Maintenance.',
      icon: Factory,
      category: 'manufacturing',
      complexity: 'expert',
      color: 'from-orange-500 to-red-600',
      readTime: '40 Min',
      link: '/wissen/branchen/industrie-40-datenschutz',
      industries: ['Industrie 4.0', 'IoT', 'Produktion'],
      tags: ['IoT', 'OT Security', 'Predictive Analytics']
    },
    {
      id: 'production-data-protection',
      title: 'Produktion & Datenschutz',
      subtitle: 'Klassische Fertigung',
      description: 'DSGVO-Compliance für Produktionsbetriebe, Maschinendatenerfassung und Qualitätssicherung in der Fertigung.',
      icon: Hammer,
      category: 'manufacturing',
      complexity: 'intermediate',
      color: 'from-gray-500 to-slate-600',
      readTime: '45 Min',
      link: '/wissen/branchen/produktion',
      industries: ['Fertigung', 'Produktion', 'MDE'],
      tags: ['Fertigung', 'MDE', 'Qualitätssicherung']
    },
    {
      id: 'automotive-connected',
      title: 'Connected Cars & Datenschutz',
      subtitle: 'Automotive Services',
      description: 'Datenschutz-Compliance für vernetzte Fahrzeuge, V2X Communication und Over-the-Air Updates.',
      icon: Factory,
      category: 'manufacturing',
      complexity: 'expert',
      color: 'from-blue-600 to-indigo-600',
      readTime: '45 Min',
      link: '/wissen/branchen/automotive-datenschutz',
      industries: ['Automotive', 'Connected Cars', 'V2X'],
      tags: ['Connected Cars', 'V2X', 'OTA']
    },
    {
      id: 'energy-smart-grid',
      title: 'Smart Grid Compliance',
      subtitle: 'Intelligente Energienetze',
      description: 'Datenschutz und Cybersecurity für intelligente Energienetze, Smart Meter und Critical Infrastructure.',
      icon: Zap,
      category: 'services',
      complexity: 'expert',
      color: 'from-yellow-500 to-orange-600',
      readTime: '40 Min',
      link: '/wissen/branchen/smart-grid-compliance',
      industries: ['Energie', 'Smart Grid', 'KRITIS'],
      tags: ['Smart Meter', 'Grid', 'KRITIS']
    },
    {
      id: 'pharma-clinical',
      title: 'Pharma & Clinical Research',
      subtitle: 'Klinische Studien & Forschung',
      description: 'Compliance-Framework für pharmazeutische Forschung, klinische Studien und Pharmacovigilance.',
      icon: Pill,
      category: 'healthcare',
      complexity: 'expert',
      color: 'from-indigo-500 to-purple-600',
      readTime: '50 Min',
      link: '/wissen/branchen/pharma-compliance',
      industries: ['Pharma', 'Clinical Trials', 'Forschung'],
      tags: ['Clinical Trials', 'Pharmacovigilance', 'GCP']
    },
    {
      id: 'proptech-compliance',
      title: 'PropTech & Smart Buildings',
      subtitle: 'Immobilien-Technologie',
      description: 'Compliance für Immobilien-Technologie, Smart Home Systeme und intelligente Gebäudeautomation.',
      icon: Home,
      category: 'technology',
      complexity: 'intermediate',
      color: 'from-cyan-500 to-blue-600',
      readTime: '35 Min',
      link: '/wissen/branchen/proptech-compliance',
      industries: ['PropTech', 'Smart Buildings', 'Immobilien'],
      tags: ['Smart Buildings', 'IoT', 'Tenant Data']
    },
    {
      id: 'travel-tourism',
      title: 'Travel & Tourism Tech',
      subtitle: 'Reise- und Tourismusplattformen',
      description: 'Datenschutz-Compliance für Reise- und Tourismusplattformen mit Booking-Systemen und Location Tracking.',
      icon: Plane,
      category: 'services',
      complexity: 'intermediate',
      color: 'from-teal-500 to-cyan-600',
      readTime: '30 Min',
      link: '/wissen/branchen/travel-compliance',
      industries: ['Travel', 'Tourism', 'Booking'],
      tags: ['Booking', 'Location', 'Travel Data']
    },
    {
      id: 'logistics-supply-chain',
      title: 'Smart Logistics & Supply Chain',
      subtitle: 'Intelligente Logistik',
      description: 'Compliance für intelligente Logistik, Fleet Management und Supply Chain Datenverarbeitung.',
      icon: Truck,
      category: 'services',
      complexity: 'intermediate',
      color: 'from-indigo-600 to-purple-600',
      readTime: '40 Min',
      link: '/wissen/branchen/logistics-compliance',
      industries: ['Logistik', 'Supply Chain', 'Fleet'],
      tags: ['Fleet Management', 'Route Optimization', 'Warehouse']
    },
    {
      id: 'datenschutz-pflege',
      title: 'Datenschutz Pflege',
      subtitle: 'Pflegeeinrichtungen & Ambulante Dienste',
      description: 'DSGVO-Compliance für Pflegeeinrichtungen, ambulante Pflegedienste und Pflegedokumentation.',
      icon: Heart,
      category: 'healthcare',
      complexity: 'intermediate',
      color: 'from-red-600 to-pink-600',
      readTime: '35 Min',
      link: '/wissen/branchen/datenschutz-pflege',
      industries: ['Pflege', 'Seniorenheime', 'Ambulante Dienste'],
      tags: ['Pflegedokumentation', 'Bewohnerdaten', 'Vitaldaten']
    },
    {
      id: 'datenschutz-arztpraxis',
      title: 'Datenschutz Arztpraxis',
      subtitle: 'Patientendaten in Arztpraxen',
      description: 'DSGVO-konforme Verarbeitung von Patientendaten in Arztpraxen mit ePA und Telemedizin.',
      icon: Stethoscope,
      category: 'healthcare',
      complexity: 'intermediate',
      color: 'from-blue-600 to-cyan-600',
      readTime: '40 Min',
      link: '/wissen/branchen/datenschutz-arztpraxis',
      industries: ['Arztpraxen', 'Ambulant', 'Telemedizin'],
      tags: ['Patientenakten', 'Telemedizin', 'Gesundheitsdaten']
    },
    {
      id: 'datenschutz-kindergarten',
      title: 'Datenschutz Kindergarten',
      subtitle: 'Kitas & Vorschulen',
      description: 'DSGVO-Compliance für Kindergärten, Kitas und Vorschulen mit Kinderdatenschutz und Eltern-Einwilligungen.',
      icon: Baby,
      category: 'services',
      complexity: 'basic',
      color: 'from-green-600 to-emerald-600',
      readTime: '25 Min',
      link: '/wissen/branchen/datenschutz-kindergarten',
      industries: ['Kindergarten', 'Kita', 'Vorschule'],
      tags: ['Kinderdaten', 'Eltern-Einwilligung', 'Fotos']
    },
    {
      id: 'dsgvo-vermieter',
      title: 'DSGVO für Vermieter',
      subtitle: 'Mieter- & Bewerberdaten',
      description: 'Rechtssichere Verarbeitung von Mieter- und Bewerberdaten mit DSGVO-konformem Bewerbungsverfahren.',
      icon: Home,
      category: 'services',
      complexity: 'basic',
      color: 'from-indigo-600 to-purple-600',
      readTime: '30 Min',
      link: '/wissen/branchen/dsgvo-vermieter',
      industries: ['Immobilien', 'Vermietung', 'Hausverwaltung'],
      tags: ['Mieterdaten', 'Bewerbungen', 'Videoüberwachung']
    },
    {
      id: 'dsgvo-vereine',
      title: 'DSGVO für Vereine',
      subtitle: 'Sportvereine & Ehrenamt',
      description: 'Datenschutz-Compliance für Sportvereine, ehrenamtliche Organisationen und Mitgliederdaten-Verwaltung.',
      icon: Users,
      category: 'services',
      complexity: 'basic',
      color: 'from-emerald-600 to-teal-600',
      readTime: '25 Min',
      link: '/wissen/branchen/dsgvo-vereine',
      industries: ['Sportvereine', 'Ehrenamt', 'NGOs'],
      tags: ['Mitgliederdaten', 'Vereinsregister', 'Fotos']
    },
    {
      id: 'datenschutz-betriebsrat',
      title: 'Datenschutz Betriebsrat',
      subtitle: 'Mitbestimmungsorgane',
      description: 'DSGVO-Compliance für Betriebsräte, Mitbestimmungsorgane und Betriebsvereinbarungen.',
      icon: Briefcase,
      category: 'services',
      complexity: 'intermediate',
      color: 'from-blue-600 to-indigo-600',
      readTime: '30 Min',
      link: '/wissen/branchen/datenschutz-betriebsrat',
      industries: ['Betriebsrat', 'Mitbestimmung', 'HR'],
      tags: ['Mitarbeiterdaten', 'Betriebsvereinbarung', 'Mitbestimmung']
    },
    {
      id: 'datenschutz-personalwesen',
      title: 'Datenschutz Personalwesen',
      subtitle: 'HR & Mitarbeiterdaten',
      description: 'DSGVO-konforme Personalverwaltung, Bewerbermanagement und Beschäftigtendatenschutz.',
      icon: Briefcase,
      category: 'services',
      complexity: 'intermediate',
      color: 'from-purple-600 to-pink-600',
      readTime: '35 Min',
      link: '/wissen/branchen/datenschutz-personalwesen',
      industries: ['HR', 'Personalwesen', 'Recruiting'],
      tags: ['Bewerberdaten', 'Mitarbeiterdaten', 'BDSG']
    },
    {
      id: 'datenschutz-homeoffice',
      title: 'Datenschutz Homeoffice',
      subtitle: 'Remote Work & BYOD',
      description: 'DSGVO-konforme Heimarbeit, sichere Homeoffice-Arbeitsplätze und BYOD-Politik.',
      icon: Home,
      category: 'technology',
      complexity: 'intermediate',
      color: 'from-purple-600 to-pink-600',
      readTime: '30 Min',
      link: '/wissen/branchen/datenschutz-homeoffice',
      industries: ['Remote Work', 'Homeoffice', 'Mobile'],
      tags: ['Homeoffice', 'VPN', 'BYOD']
    }
  ];

  const filteredGuides = branchenWissen.filter(guide => {
    const categoryMatch = selectedCategory === 'all' || guide.category === selectedCategory;
    const complexityMatch = selectedComplexity === 'all' || guide.complexity === selectedComplexity;
    const searchMatch = searchTerm === '' ||
      guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      guide.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return categoryMatch && complexityMatch && searchMatch;
  });

  const getDifficultyBadge = (complexity: string) => {
    switch (complexity) {
      case 'basic':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'intermediate':
        return 'bg-orange-50 text-[#e24e1b] border-orange-200';
      case 'expert':
        return 'bg-red-50 text-red-700 border-red-200';
      default:
        return 'bg-stone-100 text-[#474747] border-stone-300';
    }
  };

  const getDifficultyLabel = (complexity: string) => {
    switch (complexity) {
      case 'basic': return 'Grundlagen';
      case 'intermediate': return 'Fortgeschritten';
      case 'expert': return 'Experte';
      default: return complexity;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F5F6F8] via-orange-50/20 to-[#F5F6F8]">
      <SEOHead
        title="Branchen-Compliance Guides: DSGVO für Healthcare, FinTech, E-Commerce"
        description="Branchenspezifische DSGVO & Compliance-Leitfäden für Healthcare, FinTech, E-Commerce, Industrie 4.0, EdTech & mehr. ✓ Praxiserprobte Lösungen ✓ Expert Guides"
        canonical="/wissen/branchen"
        structuredData={structuredData}
      />
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
                Branchen
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

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
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-[#232323]">
                Branchen-Wissen
              </h1>
            </div>

            <p className="text-xl text-[#474747] mb-8 max-w-4xl mx-auto leading-relaxed">
              Spezialisierte DSGVO & Compliance-Leitfäden für Ihre Branche. Von Healthcare bis FinTech - praxiserprobte Lösungen für branchenspezifische Herausforderungen.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <BookOpen className="h-4 w-4 mr-2" />
                24 Branchen-Guides
              </Badge>
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <Building2 className="h-4 w-4 mr-2" />
                6 Hauptbranchen
              </Badge>
              <Badge variant="outline" className="bg-orange-50 border-[#e24e1b] text-[#e24e1b]">
                <Star className="h-4 w-4 mr-2" />
                Praxiserprobt
              </Badge>
            </div>
          </motion.div>
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
                      placeholder="Branchen durchsuchen..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-[#F5F6F8] border border-stone-300 rounded-lg text-[#232323] placeholder-[#474747] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:border-transparent"
                    />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-stone-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#232323] mb-4">Branche</h3>
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

              <Card className="bg-white border-stone-200 shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-[#232323] mb-4">Schwierigkeit</h3>
                  <div className="space-y-2">
                    {complexityLevels.map((level) => (
                      <button
                        key={level.id}
                        onClick={() => setSelectedComplexity(level.id)}
                        className={cn(
                          "w-full p-3 rounded-lg transition-all duration-200 text-sm font-medium",
                          selectedComplexity === level.id
                            ? "bg-orange-50 border border-[#e24e1b] text-[#e24e1b]"
                            : "border border-stone-200 text-[#474747] hover:bg-[#F5F6F8] hover:text-[#232323]"
                        )}
                      >
                        {level.name}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="lg:col-span-3">
            {filteredGuides.length === 0 ? (
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
                    setSelectedCategory('all');
                    setSelectedComplexity('all');
                    setSearchTerm('');
                  }}
                  className="bg-[#e24e1b] hover:bg-[#f97316] text-white"
                >
                  Filter zurücksetzen
                </Button>
              </motion.div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredGuides.map((guide, index) => {
                  const IconComponent = guide.icon;
                  return (
                    <motion.div
                      key={guide.id}
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
                              <div className={cn("p-3 rounded-xl bg-gradient-to-r", guide.color)}>
                                <IconComponent className="h-6 w-6 text-white" />
                              </div>
                            </div>

                            <div className="flex flex-col items-end gap-2">
                              {guide.popular && (
                                <Badge className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                  <Star className="h-3 w-3 mr-1" />
                                  Beliebt
                                </Badge>
                              )}
                            </div>
                          </div>

                          <h3 className="text-xl font-bold text-[#232323] mb-1">{guide.title}</h3>
                          <p className="text-[#e24e1b] text-sm mb-3">{guide.subtitle}</p>

                          <p className="text-[#474747] leading-relaxed mb-4 flex-grow">
                            {guide.description}
                          </p>

                          <div className="bg-[#F5F6F8] border border-stone-200 rounded-lg p-3 mb-4">
                            <div className="flex items-center gap-2 mb-1">
                              <BookOpen className="h-4 w-4 text-[#474747]" />
                              <span className="text-xs text-[#474747]">Lesezeit</span>
                            </div>
                            <span className="text-sm font-medium text-[#232323]">{guide.readTime}</span>
                          </div>

                          <div className="mb-4">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-[#474747]">Schwierigkeit</span>
                              <Badge variant="outline" className={getDifficultyBadge(guide.complexity)}>
                                {getDifficultyLabel(guide.complexity)}
                              </Badge>
                            </div>
                          </div>

                          <div className="mb-4">
                            <span className="text-sm text-[#474747] mb-2 block">Branchen:</span>
                            <div className="flex flex-wrap gap-1">
                              {guide.industries.slice(0, 3).map((industry) => (
                                <Badge
                                  key={industry}
                                  variant="outline"
                                  className="text-xs bg-stone-100 text-[#474747] border-stone-300"
                                >
                                  {industry}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <Button
                            asChild
                            className="w-full bg-[#e24e1b] hover:bg-[#f97316] text-white shadow-sm mt-auto"
                          >
                            <Link to={guide.link}>
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
  );
};

export default BranchenWissen;
