import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  BookOpen,
  FileText,
  CheckCircle2,
  ArrowRight,
  Search,
  Filter,
  Clock,
  Users,
  Star,
  Download,
  Eye,
  Calendar,
  Shield,
  Zap,
  Target,
  AlertTriangle,
  Lightbulb,
  Bookmark,
  TrendingUp,
  Award,
  Brain,
  Scale,
  Lock,
  Database,
  Globe,
  Settings,
  Code,
  Building2,
  UserCheck,
  FileCheck,
  Gavel,
  AlertOctagon,
  ExternalLink,
  Calculator,
  Euro
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Knowledge: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

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
    { id: 'all', name: 'Alle Bereiche', icon: BookOpen, count: 31 },
    { id: 'dsgvo', name: 'DSGVO & Datenschutz', icon: Shield, count: 12 },
    { id: 'implementation', name: 'Implementierung', icon: Settings, count: 8 },
    { id: 'crisis', name: 'Krisenmanagement', icon: AlertTriangle, count: 4 },
    { id: 'planning', name: 'Kosten & Planung', icon: Calculator, count: 7 }
  ];

  const knowledgeAreas = [
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
      case 'Alle Level': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'Mittel': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      case 'Fortgeschritten': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100';
      case 'Experte': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
      case 'Kritisch': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse';
      case 'Praktisch': return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  return (
    <>
      <SEOHead
        title="Compliance Wissen – DSGVO-Leitfäden & Rechtsprechung 2024"
        description="Kostenlose Compliance-Leitfäden für DSGVO, ISO 27001, SOC2 & EU AI Act. ✓ 24+ praxiserprobte Guides ✓ Aktuelle Rechtsprechung ✓ Schritt-für-Schritt Anleitungen."
        canonical="/wissen"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <Header />
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

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
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20"
            >
              <BookOpen className="h-5 w-5 text-blue-400 animate-spin-slow" />
              <span className="text-sm font-semibold text-blue-300">Compliance Wissen</span>
              <Brain className="h-5 w-5 text-indigo-400 animate-pulse" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8">
              <motion.span
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent"
              >
                Compliance Wissen für Experten
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              Praxiserprobte Leitfäden, aktuelle Rechtsprechung und <span className="font-semibold text-blue-300">Schritt-für-Schritt Anleitungen</span> 
              für erfolgreiche Compliance-Implementierung.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  <BookOpen className="mr-2 h-5 w-5" />
                  DSGVO-Leitfäden entdecken
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-blue-500/30 hover:border-blue-400 text-blue-300 hover:bg-blue-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                  <Search className="mr-2 h-5 w-5" />
                  Wissen durchsuchen
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto"
          >
            {[
              { value: '24+', label: 'Leitfäden', sublabel: 'Praxiserprobte Guides', icon: FileText, color: 'from-blue-500 to-indigo-500' },
              { value: '98%', label: 'Erfolgsrate', sublabel: 'Bei Implementierung', icon: Target, color: 'from-purple-500 to-pink-500' }
            ].map((stat, index) => (
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
                    ? "bg-gradient-to-r from-blue-500 to-indigo-500 text-white border-blue-500 shadow-xl"
                    : "bg-slate-800/60 text-slate-300 border-slate-700/50 hover:border-blue-500/50 hover:text-blue-300"
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

      {/* Knowledge Areas Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={cn(
                  "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
                  `bg-gradient-to-r ${area.color}`,
                  "opacity-0 group-hover:opacity-30"
                )} />
                
                <Card className="relative h-full border-2 border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-600/50 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={cn("absolute inset-0", area.bgColor)} />
                  
                  <CardContent className="relative p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={cn(
                          "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                          area.color
                        )}
                      >
                        <area.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="flex flex-col gap-2 items-end">
                        {area.popular && (
                          <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                            <Star className="h-3 w-3 mr-1" />
                            Beliebt
                          </Badge>
                        )}
                        {area.urgent && (
                          <Badge className="bg-red-500/20 text-red-300 border-red-500/30 animate-pulse">
                            <AlertOctagon className="h-3 w-3 mr-1" />
                            Urgent
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-6 flex-grow">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-300 transition-colors">{area.title}</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {area.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-800/60 rounded-xl backdrop-blur-sm">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-400">{area.guides}</div>
                          <div className="text-xs text-slate-400">Guides</div>
                        </div>
                        <div className="text-center">
                          <Badge className={getDifficultyColor(area.difficulty)}>
                            {area.difficulty}
                          </Badge>
                        </div>
                      </div>

                      {/* Featured Guides Preview */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-300 mb-3">Featured Guides:</h4>
                        <div className="space-y-2">
                          {area.featured.map((guide, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1, duration: 0.4 }}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                              <span className="text-sm text-slate-300">{guide}</span>
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
                        area.color
                      )}>
                        <Link to={area.link} className="flex items-center justify-center gap-2">
                          <span>Bereich erkunden</span>
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-blue-900/30 to-slate-800/50" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Schnellzugriff
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300">
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
                level: "Einsteiger"
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
                      guide.color
                    )}>
                      <guide.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{guide.title}</h3>
                    <p className="text-slate-300 mb-6">{guide.description}</p>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <Badge className="bg-slate-700 text-slate-200">
                        <Clock className="h-3 w-3 mr-1" />
                        {guide.time}
                      </Badge>
                      <Badge className={getDifficultyColor(guide.level)}>
                        {guide.level}
                      </Badge>
                    </div>
                    
                    <Button asChild className={cn(
                      "w-full bg-gradient-to-r text-white",
                      guide.color
                    )}>
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
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-indigo-900/10 to-blue-900/20" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Bereit für</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Compliance-Exzellenz?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Nutzen Sie unser gesamtes Wissen für Ihre <span className="font-semibold text-blue-300">erfolgreiche Compliance-Transformation</span>.
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
                  className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  <BookOpen className="mr-3 h-6 w-6" />
                  Alle Leitfäden erkunden
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-blue-500/30 hover:border-blue-400 text-blue-300 hover:bg-blue-500/10 px-10 py-4 text-lg font-bold backdrop-blur-sm">
                  <Download className="mr-3 h-6 w-6" />
                  PDF Downloads
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

        <Footer />
      </div>
    </>
  );
};

export default Knowledge;