import React, { useState, useRef } from 'react';
import SEOHead from '../components/SEOHead';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
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
  Users,
  FileCheck,
  Search,
  Star,
  AlertTriangle,
  Award,
  Code,
  AlertOctagon,
  ExternalLink,
  Download,
  Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Industries: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

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
        "url": "https://marsstein.com/branchen/gesundheitswesen"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Finanzdienstleister",
        "url": "https://marsstein.com/branchen/finanzdienstleister"
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
      description: 'Spezialisierte Compliance-Lösungen für medizinische Einrichtungen, Praxen und MedTech-Unternehmen',
      challenges: ['Patientendaten Art. 9 DSGVO', 'KI-Diagnosesysteme', 'Medizintechnik-Compliance', 'FDA/CE-Kennzeichnung'],
      benefits: ['DSGVO Art. 9 konform', 'EU AI Act ready', 'Zertifizierte Sicherheit', 'HIPAA-kompatibel'],
      frameworks: ['DSGVO', 'EU AI Act', 'ISO 27001', 'ISO 13485'],
      category: 'regulated',
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-red-900 to-slate-900',
      link: '/branchen/gesundheitswesen',
      readTime: '25-40 Min',
      difficulty: 'Experte',
      complianceScore: 95,
      caseStudies: 12,
      popular: true
    },
    {
      id: 'finanzdienstleister',
      icon: Building2,
      title: 'Finanzdienstleister',
      description: 'Umfassende Compliance-Frameworks für Banken, Versicherungen und FinTech-Unternehmen',
      challenges: ['PCI DSS Compliance', 'KI-Kreditentscheidungen', 'Open Banking APIs', 'Cyber-Resilienz'],
      benefits: ['DSGVO-Konformität', 'KI-Transparenz', 'SOX-Compliance', 'NIS2-ready'],
      frameworks: ['DSGVO', 'EU AI Act', 'ISO 27001', 'PCI DSS'],
      category: 'regulated',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      link: '/branchen/finanzdienstleister',
      readTime: '30-50 Min',
      difficulty: 'Experte',
      complianceScore: 98,
      caseStudies: 18,
      featured: true
    },
    {
      id: 'e-commerce',
      icon: ShoppingCart,
      title: 'E-Commerce',
      description: 'Optimierte Compliance-Strategien für Online-Shops und digitale Marktplätze',
      challenges: ['Cookie-Compliance', 'Personalisierungsalgorithmen', 'Cross-Border Data Transfer', 'Payment Security'],
      benefits: ['Smart Consent Management', 'Transparente KI', 'PCI DSS Security', 'Global Privacy Ready'],
      frameworks: ['DSGVO', 'EU AI Act', 'PCI DSS', 'ePrivacy'],
      category: 'tech',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-green-900 to-slate-900',
      link: '/branchen/e-commerce',
      readTime: '20-35 Min',
      difficulty: 'Fortgeschritten',
      complianceScore: 92,
      caseStudies: 15
    },
    {
      id: 'saas-unternehmen',
      icon: Cloud,
      title: 'SaaS-Unternehmen',
      description: 'Skalierbare Compliance-Infrastrukturen für moderne Software-as-a-Service Anbieter',
      challenges: ['Multi-Tenant Privacy', 'API Security', 'KI-Integration Compliance', 'Global Data Residency'],
      benefits: ['Privacy by Design', 'SOC2 Type II ready', 'EU-US Data Transfers', 'Automated Compliance'],
      frameworks: ['DSGVO', 'SOC2', 'ISO 27001', 'EU AI Act'],
      category: 'tech',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      link: '/branchen/saas-unternehmen',
      readTime: '25-45 Min',
      difficulty: 'Fortgeschritten',
      complianceScore: 94,
      caseStudies: 22,
      popular: true
    },
    {
      id: 'produktion',
      icon: Factory,
      title: 'Produktion & Fertigung',
      description: 'Industrie 4.0 Compliance für intelligente Fertigung und vernetzte Produktionsanlagen',
      challenges: ['OT/IT Security', 'Predictive Maintenance AI', 'Supply Chain Transparency', 'Worker Privacy'],
      benefits: ['IIoT Data Governance', 'KI-Transparenz', 'TISAX-ready', 'Cyber-Physical Security'],
      frameworks: ['ISO 27001', 'TISAX', 'DSGVO', 'NIS2'],
      category: 'manufacturing',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900',
      link: '/branchen/produktion',
      readTime: '30-50 Min',
      difficulty: 'Experte',
      complianceScore: 89,
      caseStudies: 8
    },
    {
      id: 'automotive',
      icon: Car,
      title: 'Automotive',
      description: 'Connected Cars und autonome Fahrzeuge mit modernsten Compliance-Standards',
      challenges: ['Autonome AI-Systeme', 'V2X Communication Security', 'Biometric Data Processing', 'Over-the-Air Updates'],
      benefits: ['EU AI Act High-Risk konform', 'UN-R155/R156 ready', 'DSGVO Vehicle Privacy', 'CSMS Implementation'],
      frameworks: ['EU AI Act', 'ISO 27001', 'DSGVO', 'UN-R155'],
      category: 'manufacturing',
      color: 'from-blue-600 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      link: '/branchen/automotive',
      readTime: '35-55 Min',
      difficulty: 'Experte',
      complianceScore: 91,
      caseStudies: 6,
      urgent: true
    },
    {
      id: 'energie',
      icon: Zap,
      title: 'Energie & Utilities',
      description: 'Kritische Infrastrukturen und Smart Grid Technologien mit NIS2-Compliance',
      challenges: ['Smart Grid AI Security', 'Critical Infrastructure Protection', 'Smart Meter Privacy', 'Energy Trading Data'],
      benefits: ['NIS2 Compliance', 'Smart Grid AI Ready', 'KRITIS-Verordnung', 'Energy Data Governance'],
      frameworks: ['NIS2', 'ISO 27001', 'DSGVO', 'EU AI Act'],
      category: 'regulated',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900',
      link: '/branchen/energie',
      readTime: '40-60 Min',
      difficulty: 'Experte',
      complianceScore: 96,
      caseStudies: 4,
      featured: true
    },
    {
      id: 'lebensmittel',
      icon: Apple,
      title: 'Food & Beverage',
      description: 'Farm-to-Fork Rückverfolgbarkeit und KI-gestützte Qualitätskontrolle mit Food Safety Standards',
      challenges: ['AI Quality Control', 'Supply Chain Traceability', 'Food Safety Data Protection', 'Consumer Privacy'],
      benefits: ['EU Food Safety AI', 'HACCP Digital Integration', 'Blockchain Traceability', 'Consumer Trust'],
      frameworks: ['DSGVO', 'EU AI Act', 'ISO 22000', 'HACCP'],
      category: 'regulated',
      color: 'from-green-600 to-emerald-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-green-900 to-slate-900',
      link: '/branchen/lebensmittel',
      readTime: '25-40 Min',
      difficulty: 'Fortgeschritten',
      complianceScore: 88,
      caseStudies: 7
    },
    {
      id: 'logistik',
      icon: Truck,
      title: 'Logistik & Transport',
      description: 'Intelligente Supply Chain Management und KI-optimierte Transportlösungen',
      challenges: ['AI Route Optimization', 'Cross-Border Data Flows', 'Driver Privacy Rights', 'IoT Fleet Security'],
      benefits: ['Smart Logistics AI', 'Global Privacy Compliance', 'Supply Chain Transparency', 'Driver Data Protection'],
      frameworks: ['DSGVO', 'EU AI Act', 'ISO 27001', 'TIC Council'],
      category: 'tech',
      color: 'from-indigo-600 to-purple-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900',
      link: '/branchen/logistik',
      readTime: '20-35 Min',
      difficulty: 'Fortgeschritten',
      complianceScore: 90,
      caseStudies: 9
    }
  ];

  const filteredIndustries = selectedCategory === 'all' 
    ? industries 
    : industries.filter(industry => industry.category === selectedCategory);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Einsteiger': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'Fortgeschritten': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100';
      case 'Experte': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  const stats = [
    { value: '9', label: 'Kernbranchen', sublabel: 'Spezialisierte Lösungen', icon: Building2, color: 'from-blue-500 to-indigo-500' },
    { value: '85+', label: 'Compliance Cases', sublabel: 'Erfolgreiche Implementierungen', icon: FileCheck, color: 'from-indigo-500 to-purple-500' },
    { value: '98%', label: 'Erfolgsrate', sublabel: 'Bei Zertifizierungen', icon: Award, color: 'from-purple-500 to-pink-500' },
    { value: '24/7', label: 'Experten-Support', sublabel: 'Branchenspezifische Beratung', icon: Users, color: 'from-pink-500 to-red-500' }
  ];

  return (
    <>
      <SEOHead
        title="Branchen – Compliance-Lösungen für jede Industrie"
        description="Branchenspezifische Compliance: Healthcare, FinTech, E-Commerce & mehr. ✓ Maßgeschneidert ✓ Best Practices ✓ Expertenwissen. Jetzt entdecken!"
        canonical="/branchen"
        keywords="Branchenlösungen, Healthcare Compliance, FinTech Compliance, E-Commerce DSGVO, Industrie Compliance"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
        <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-teal-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      <main className="overflow-hidden">
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
                className="inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 backdrop-blur-sm rounded-full mb-8 border border-emerald-500/20"
              >
                <Building2 className="h-5 w-5 text-emerald-400 animate-pulse" />
                <span className="text-sm font-semibold text-emerald-300">Branchenlösungen</span>
                <Shield className="h-5 w-5 text-teal-400 animate-spin-slow" />
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
              >
                <span className="text-white">Branchenspezifische</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Compliance
                </span>
                <br />
                <span className="text-white">für</span>{' '}
                <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Profis
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
              >
                Spezialisierte <span className="font-semibold text-emerald-300">Compliance-Strategien</span> für 9 Kernbranchen. 
                Von der Implementierung bis zur Zertifizierung – <span className="font-semibold text-teal-300">branchenspezifisch optimiert</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                    <Building2 className="mr-2 h-5 w-5" />
                    Branchen entdecken
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-2 border-emerald-500/30 hover:border-emerald-400 text-emerald-300 hover:bg-emerald-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                    <Search className="mr-2 h-5 w-5" />
                    Case Studies
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Hero Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {stats.map((stat, index) => (
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border-2",
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-white border-emerald-500 shadow-xl"
                      : "bg-slate-800/60 text-slate-300 border-slate-700/50 hover:border-emerald-500/50 hover:text-emerald-300"
                  )}
                >
                  <category.icon className="h-5 w-5" />
                  <span>{category.name}</span>
                  <Badge className="bg-slate-700 text-slate-200 border-0 text-xs">
                    {category.count}
                  </Badge>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-7xl">
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredIndustries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="group relative"
                >
                  {/* Glow Effect */}
                  <div className={cn(
                    "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
                    `bg-gradient-to-r ${industry.color}`,
                    "opacity-0 group-hover:opacity-30"
                  )} />
                  
                  <Card className="relative h-full border-2 border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-600/50 overflow-hidden">
                    {/* Background Gradient */}
                    <div className={cn("absolute inset-0", industry.bgColor)} />
                    
                    <CardContent className="relative p-8 h-full flex flex-col">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-6">
                        <motion.div 
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          className={cn(
                            "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                            industry.color
                          )}
                        >
                          <industry.icon className="h-8 w-8 text-white" />
                        </motion.div>
                        <div className="flex flex-col gap-2 items-end">
                          {industry.popular && (
                            <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                              <Star className="h-3 w-3 mr-1" />
                              Beliebt
                            </Badge>
                          )}
                          {industry.featured && (
                            <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                              <Award className="h-3 w-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                          {industry.urgent && (
                            <Badge className="bg-red-500/20 text-red-300 border-red-500/30 animate-pulse">
                              <AlertOctagon className="h-3 w-3 mr-1" />
                              Urgent
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="mb-6 flex-grow">
                        <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-emerald-300 transition-colors">{industry.title}</h3>
                        <p className="text-slate-300 mb-6 leading-relaxed">
                          {industry.description}
                        </p>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-slate-800/60 rounded-xl backdrop-blur-sm">
                          <div className="text-center">
                            <div className="text-lg font-bold text-emerald-400">{industry.caseStudies}</div>
                            <div className="text-xs text-slate-400">Cases</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-teal-400">{industry.readTime}</div>
                            <div className="text-xs text-slate-400">Lesezeit</div>
                          </div>
                          <div className="text-center">
                            <Badge className={getDifficultyColor(industry.difficulty)}>
                              {industry.difficulty}
                            </Badge>
                          </div>
                        </div>

                        {/* Compliance Score */}
                        <div className="mb-6">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-semibold text-slate-300">Compliance Score</span>
                            <span className="text-sm font-bold text-emerald-400">{industry.complianceScore}%</span>
                          </div>
                          <div className="w-full bg-slate-700 rounded-full h-2">
                            <motion.div 
                              initial={{ width: 0 }}
                              whileInView={{ width: `${industry.complianceScore}%` }}
                              transition={{ duration: 1, delay: index * 0.1 }}
                              className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full"
                            />
                          </div>
                        </div>

                        {/* Frameworks */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-slate-300 mb-3">Frameworks:</h4>
                          <div className="flex flex-wrap gap-2">
                            {industry.frameworks.map((framework, idx) => (
                              <motion.div 
                                key={idx}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                              >
                                <Badge className="bg-slate-700/50 text-slate-200 border-slate-600">
                                  {framework}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Key Challenges Preview */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-slate-300 mb-3">Key Challenges:</h4>
                          <div className="space-y-2">
                            {industry.challenges.slice(0, 3).map((challenge, idx) => (
                              <motion.div 
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1, duration: 0.4 }}
                                className="flex items-center gap-2"
                              >
                                <AlertTriangle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                                <span className="text-sm text-slate-300">{challenge}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* CTA */}
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-auto"
                      >
                        <Button asChild className={cn(
                          "w-full bg-gradient-to-r text-white border-0 font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300",
                          industry.color
                        )}>
                          <Link to={industry.link} className="flex items-center justify-center gap-2">
                            <span>Branche erkunden</span>
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            <ExternalLink className="h-4 w-4 opacity-60" />
                          </Link>
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-emerald-900/30 to-slate-800/50" />
          
          <div className="container mx-auto max-w-7xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Top-Prioritäten
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-slate-300">
                Die kritischsten Compliance-Bereiche für den sofortigen Start
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Healthcare DSGVO",
                  description: "Art. 9 Compliance für sensible Gesundheitsdaten",
                  icon: Heart,
                  link: "/branchen/gesundheitswesen",
                  color: "from-red-500 to-pink-500",
                  urgency: "Kritisch",
                  framework: "DSGVO Art. 9"
                },
                {
                  title: "Financial AI Act",
                  description: "Hochrisiko-KI-Systeme in Finanzdienstleistungen",
                  icon: Building2,
                  link: "/branchen/finanzdienstleister",
                  color: "from-blue-500 to-indigo-500",
                  urgency: "Hoch",
                  framework: "EU AI Act"
                },
                {
                  title: "Energy NIS2",
                  description: "Kritische Infrastrukturen und Cybersecurity",
                  icon: Zap,
                  link: "/branchen/energie",
                  color: "from-yellow-500 to-orange-500",
                  urgency: "Urgent",
                  framework: "NIS2"
                }
              ].map((priority, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className={cn(
                        "inline-flex p-4 rounded-2xl bg-gradient-to-r mb-6 shadow-lg",
                        priority.color
                      )}>
                        <priority.icon className="h-8 w-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold mb-3 text-white">{priority.title}</h3>
                      <p className="text-slate-300 mb-6">{priority.description}</p>
                      
                      <div className="flex items-center gap-4 mb-6">
                        <Badge className={cn(
                          priority.urgency === 'Kritisch' ? 'bg-red-500/20 text-red-300 border-red-500/30 animate-pulse' :
                          priority.urgency === 'Urgent' ? 'bg-orange-500/20 text-orange-300 border-orange-500/30' :
                          'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
                        )}>
                          <AlertTriangle className="h-3 w-3 mr-1" />
                          {priority.urgency}
                        </Badge>
                        <Badge className="bg-slate-700 text-slate-200">
                          {priority.framework}
                        </Badge>
                      </div>
                      
                      <Button asChild className={cn(
                        "w-full bg-gradient-to-r text-white",
                        priority.color
                      )}>
                        <Link to={priority.link}>
                          Jetzt starten
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
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/20 via-teal-900/10 to-emerald-900/20" />
          
          <div className="container mx-auto max-w-5xl relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6">
                <span className="text-white">Ihre Branche.</span>
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Unsere Expertise.
                </span>
              </h2>
              
              <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                Von der ersten Beratung bis zur erfolgreichen Zertifizierung – wir begleiten Sie mit 
                <span className="font-semibold text-emerald-300"> branchenspezifischer Expertise</span>.
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
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                  >
                    <Building2 className="mr-3 h-6 w-6" />
                    Branch-Beratung buchen
                    <ArrowRight className="ml-3 h-6 w-6" />
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-2 border-emerald-500/30 hover:border-emerald-400 text-emerald-300 hover:bg-emerald-500/10 px-10 py-4 text-lg font-bold backdrop-blur-sm">
                    <Download className="mr-3 h-6 w-6" />
                    Branchen-Guide Download
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default Industries;