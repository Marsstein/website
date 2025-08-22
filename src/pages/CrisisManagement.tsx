import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  Clock,
  Users,
  Star,
  Download,
  BookOpen,
  Target,
  Lightbulb,
  FileText,
  Scale,
  Lock,
  Eye,
  Calendar,
  Share2,
  Bookmark,
  ExternalLink,
  Zap,
  Brain,
  Award,
  TrendingUp,
  Settings,
  Database,
  Building2,
  UserCheck,
  ShieldCheck,
  FileCheck,
  Timer,
  Rocket,
  Flag,
  MapPin,
  Globe,
  Phone,
  MessageSquare,
  Bell,
  Shield,
  Search,
  Filter,
  Activity,
  RefreshCw,
  Plus,
  List,
  ChevronRight,
  Home
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const CrisisManagement: React.FC = () => {
  const [selectedUrgency, setSelectedUrgency] = useState('all');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  useEffect(() => {
    // Title Tag
    document.title = 'Krisenmanagement Datenschutz – DSGVO Notfallpläne 72h';
    
    // Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'DSGVO-Notfallpläne für Datenschutzverletzungen: 72h Data Breach Response, Behördenprüfungen & Compliance-Krisen. Jetzt vorbereiten!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'DSGVO-Notfallpläne für Datenschutzverletzungen: 72h Data Breach Response, Behördenprüfungen & Compliance-Krisen. Jetzt vorbereiten!';
      document.head.appendChild(meta);
    }
    
    // Canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://marsstein.de/wissen/krisenmanagement');
    } else {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://marsstein.de/wissen/krisenmanagement';
      document.head.appendChild(link);
    }
    
    // Open Graph Tags
    const ogTags = [
      { property: 'og:title', content: 'Krisenmanagement Datenschutz – DSGVO Notfallpläne 72h' },
      { property: 'og:description', content: 'DSGVO-Notfallpläne für Datenschutzverletzungen: 72h Data Breach Response, Behördenprüfungen & Compliance-Krisen.' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://marsstein.de/wissen/krisenmanagement' }
    ];
    
    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute('content', tag.content);
      } else {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
    
    // JSON-LD Structured Data
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: 'Krisenmanagement im Datenschutz',
      description: 'Umfassende Notfallpläne und Krisenmanagement-Strategien für Datenschutzverletzungen und Compliance-Krisen.',
      datePublished: '2024-01-01',
      dateModified: new Date().toISOString(),
      author: {
        '@type': 'Organization',
        name: 'MarsStein'
      },
      publisher: {
        '@type': 'Organization',
        name: 'MarsStein',
        logo: {
          '@type': 'ImageObject',
          url: 'https://marsstein.de/logo.png'
        }
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': 'https://marsstein.de/wissen/krisenmanagement'
      }
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    
    return () => {
      // Cleanup
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (scriptTag) {
        scriptTag.remove();
      }
    };
  }, []);

  const urgencyCategories = [
    { id: 'all', name: 'Alle Situationen', icon: AlertTriangle, count: 8 },
    { id: 'critical', name: 'Kritisch (0-1h)', icon: Flag, count: 3 },
    { id: 'urgent', name: 'Dringend (1-24h)', icon: Timer, count: 3 },
    { id: 'important', name: 'Wichtig (1-7 Tage)', icon: Calendar, count: 2 }
  ];

  const crisisScenarios = [
    {
      id: 'data-breach-72h',
      title: '72h Data Breach Response',
      description: 'Sofortige Maßnahmen bei Datenschutzverletzungen nach DSGVO Artikel 33/34',
      icon: AlertTriangle,
      color: 'from-red-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-red-900 to-slate-900',
      urgency: 'critical',
      timeframe: '0-72 Stunden',
      difficulty: 'Kritisch',
      link: '/wissen/krisenmanagement/data-breach-72h',
      urgent: true,
      steps: 8,
      stakeholders: ['IT-Team', 'Datenschutzbeauftragte', 'Geschäftsführung', 'Rechtsabteilung'],
      featured: [
        'Sofortmaßnahmen (0-1h)',
        'Behördenmeldung (bis 72h)',
        'Betroffenen-Information',
        'Dokumentation & Analyse'
      ]
    },
    {
      id: 'security-incident',
      title: 'IT-Sicherheitsvorfall Management',
      description: 'Strukturierte Reaktion auf Cyberangriffe und Sicherheitsverletzungen',
      icon: Shield,
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900',
      urgency: 'critical',
      timeframe: '0-4 Stunden',
      difficulty: 'Kritisch',
      link: '/wissen/krisenmanagement/security-incident',
      urgent: true,
      steps: 6,
      stakeholders: ['CISO', 'IT-Security', 'Management', 'External Experts'],
      featured: [
        'Incident Detection & Analysis',
        'Containment Strategies',
        'Evidence Preservation',
        'Communication Protocol'
      ]
    },
    {
      id: 'compliance-audit-emergency',
      title: 'Compliance Audit Notfall',
      description: 'Schnelle Vorbereitung auf unangekündigte Behördenprüfungen',
      icon: FileCheck,
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900',
      urgency: 'urgent',
      timeframe: '1-24 Stunden',
      difficulty: 'Hoch',
      link: '/wissen/krisenmanagement/compliance-audit-emergency',
      steps: 5,
      stakeholders: ['Compliance Officer', 'Legal Team', 'IT-Team', 'HR'],
      featured: [
        'Dokumenten-Sammlung',
        'Team-Koordination',
        'Kommunikationsstrategie',
        'Rechte & Pflichten'
      ]
    },
    {
      id: 'media-crisis',
      title: 'Media Crisis Management',
      description: 'Professionelle Kommunikation bei öffentlicher Datenschutz-Krise',
      icon: MessageSquare,
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900',
      urgency: 'urgent',
      timeframe: '1-12 Stunden',
      difficulty: 'Hoch',
      link: '/wissen/krisenmanagement/media-crisis',
      steps: 7,
      stakeholders: ['PR-Team', 'Management', 'Legal', 'Communications'],
      featured: [
        'Erste Stellungnahme',
        'Stakeholder-Kommunikation',
        'Social Media Management',
        'Reputation Recovery'
      ]
    },
    {
      id: 'vendor-data-breach',
      title: 'Vendor Data Breach Response',
      description: 'Reaktion auf Datenverletzungen bei Dienstleistern und Lieferanten',
      icon: Building2,
      color: 'from-indigo-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900',
      urgency: 'urgent',
      timeframe: '2-48 Stunden',
      difficulty: 'Hoch',
      link: '/wissen/krisenmanagement/vendor-data-breach',
      steps: 6,
      stakeholders: ['Procurement', 'Legal', 'Data Protection', 'Vendor Management'],
      featured: [
        'Vendor Impact Assessment',
        'Contractual Rights Enforcement',
        'Customer Communication',
        'Recovery Planning'
      ]
    },
    {
      id: 'gdpr-fine-response',
      title: 'DSGVO-Bußgeld Verfahren',
      description: 'Strukturierte Reaktion auf Bußgeldverfahren und behördliche Sanktionen',
      icon: Scale,
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900',
      urgency: 'important',
      timeframe: '1-7 Tage',
      difficulty: 'Experte',
      link: '/wissen/krisenmanagement/gdpr-fine-response',
      steps: 8,
      stakeholders: ['Legal Counsel', 'Data Protection Officer', 'Management', 'External Lawyers'],
      featured: [
        'Rechtsmittel-Strategie',
        'Evidence Collection',
        'Defense Preparation',
        'Settlement Negotiation'
      ]
    },
    {
      id: 'business-continuity',
      title: 'Business Continuity Planning',
      description: 'Aufrechterhaltung des Geschäftsbetriebs während Compliance-Krisen',
      icon: Rocket,
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900',
      urgency: 'important',
      timeframe: '1-14 Tage',
      difficulty: 'Fortgeschritten',
      link: '/wissen/krisenmanagement/business-continuity',
      steps: 9,
      stakeholders: ['Operations', 'IT', 'Risk Management', 'Leadership'],
      featured: [
        'Risk Assessment Update',
        'Alternative Processes',
        'Stakeholder Management',
        'Recovery Roadmap'
      ]
    },
    {
      id: 'crisis-communication-templates',
      title: 'Krisenkommunikations-Vorlagen',
      description: 'Vorgefertigte Templates für verschiedene Krisensituationen',
      icon: FileText,
      color: 'from-teal-500 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900',
      urgency: 'all',
      timeframe: 'Sofort verfügbar',
      difficulty: 'Alle Level',
      link: '/wissen/krisenmanagement/communication-templates',
      popular: true,
      steps: 12,
      stakeholders: ['All Teams'],
      featured: [
        'Behörden-Meldungen',
        'Kunden-Information',
        'Mitarbeiter-Kommunikation',
        'Press Statements'
      ]
    }
  ];

  const filteredScenarios = selectedUrgency === 'all' 
    ? crisisScenarios 
    : crisisScenarios.filter(scenario => scenario.urgency === selectedUrgency);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'critical': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse';
      case 'urgent': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100';
      case 'important': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Alle Level': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'Fortgeschritten': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100';
      case 'Hoch': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100';
      case 'Experte': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100';
      case 'Kritisch': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <Header />
      
      {/* Breadcrumb Navigation */}
      <nav className="bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <ol className="flex items-center py-3 text-sm">
            <li>
              <Link to="/" className="text-slate-400 hover:text-red-400 transition-colors flex items-center">
                <Home className="h-4 w-4 mr-1" />
                Home
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 mx-2 text-slate-600" />
            <li>
              <Link to="/wissen" className="text-slate-400 hover:text-red-400 transition-colors">
                Wissen
              </Link>
            </li>
            <ChevronRight className="h-4 w-4 mx-2 text-slate-600" />
            <li className="text-red-400 font-semibold">Krisenmanagement</li>
          </ol>
        </div>
      </nav>
      
      {/* Table of Contents */}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        <Card className="bg-slate-800/60 backdrop-blur-sm border-slate-700/50">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <List className="h-5 w-5 text-red-400" />
              <h2 className="text-lg font-semibold text-white">Inhaltsverzeichnis</h2>
            </div>
            <nav aria-label="Inhaltsverzeichnis">
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#crisis-response-overview" className="text-slate-300 hover:text-red-400 transition-colors flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4" />
                    Krisenmanagement Überblick
                  </a>
                </li>
                <li>
                  <a href="#urgency-categories" className="text-slate-300 hover:text-red-400 transition-colors flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Dringlichkeitskategorien
                  </a>
                </li>
                <li>
                  <a href="#crisis-scenarios" className="text-slate-300 hover:text-red-400 transition-colors flex items-center gap-2">
                    <FileText className="h-4 w-4" />
                    Notfallszenarien
                  </a>
                </li>
                <li>
                  <a href="#emergency-support" className="text-slate-300 hover:text-red-400 transition-colors flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    Notfall-Unterstützung
                  </a>
                </li>
              </ul>
            </nav>
          </CardContent>
        </Card>
      </div>
      
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-red-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin-slow" />
      </div>

      {/* Hero Section */}
      <motion.section 
        id="crisis-response-overview"
        ref={heroRef}
        style={{ y, opacity }}
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24"
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 backdrop-blur-sm rounded-full mb-8 border border-red-500/20"
            >
              <AlertTriangle className="h-5 w-5 text-red-400 animate-pulse" />
              <span className="text-sm font-semibold text-red-300">Emergency Response</span>
              <Shield className="h-5 w-5 text-orange-400" />
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8"
            >
              <span className="text-white">Krisen</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                Management
              </span>
              <br />
              <span className="text-white">im</span>{' '}
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                Datenschutz
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12"
            >
              <span className="font-semibold text-red-300">Sofortmaßnahmen</span> und strukturierte Notfallpläne 
              für Datenschutzverletzungen, Behördenprüfungen und Compliance-Krisen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300">
                  <AlertTriangle className="mr-2 h-5 w-5" />
                  72h Data Breach Plan
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-red-500/30 hover:border-red-400 text-red-300 hover:bg-red-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm">
                  <Download className="mr-2 h-5 w-5" />
                  Notfall-Checklisten
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Crisis Response Stats */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
          >
            {[
              { value: '72h', label: 'DSGVO Meldefrist', sublabel: 'An Aufsichtsbehörden', icon: Clock, color: 'from-red-500 to-orange-500' },
              { value: '€20M', label: 'Max. DSGVO-Bußgeld', sublabel: 'Oder 4% Jahresumsatz', icon: Scale, color: 'from-orange-500 to-red-500' },
              { value: '24/7', label: 'Response Bereitschaft', sublabel: 'Für kritische Vorfälle', icon: Shield, color: 'from-red-500 to-pink-500' },
              { value: '8', label: 'Notfallszenarien', sublabel: 'Praxiserprobte Pläne', icon: FileText, color: 'from-pink-500 to-red-500' }
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

      {/* Urgency Filter */}
      <section id="urgency-categories" className="py-8 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {urgencyCategories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedUrgency(category.id)}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 backdrop-blur-sm border-2",
                  selectedUrgency === category.id
                    ? "bg-gradient-to-r from-red-500 to-orange-500 text-white border-red-500 shadow-xl"
                    : "bg-slate-800/60 text-slate-300 border-slate-700/50 hover:border-red-500/50 hover:text-red-300"
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

      {/* Crisis Scenarios Grid */}
      <section id="crisis-scenarios" className="py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filteredScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                {/* Glow Effect */}
                <div className={cn(
                  "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
                  `bg-gradient-to-r ${scenario.color}`,
                  "opacity-0 group-hover:opacity-30"
                )} />
                
                <Card className="relative h-full border-2 border-slate-700/50 transition-all duration-500 group-hover:shadow-2xl group-hover:border-slate-600/50 overflow-hidden">
                  {/* Background Gradient */}
                  <div className={cn("absolute inset-0", scenario.bgColor)} />
                  
                  <CardContent className="relative p-8 h-full flex flex-col">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-6">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={cn(
                          "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                          scenario.color
                        )}
                      >
                        <scenario.icon className="h-8 w-8 text-white" />
                      </motion.div>
                      <div className="flex flex-col gap-2 items-end">
                        {scenario.popular && (
                          <Badge className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                            <Star className="h-3 w-3 mr-1" />
                            Beliebt
                          </Badge>
                        )}
                        {scenario.urgent && (
                          <Badge className="bg-red-500/20 text-red-300 border-red-500/30 animate-pulse">
                            <AlertTriangle className="h-3 w-3 mr-1" />
                            Kritisch
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="mb-6 flex-grow">
                      <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-red-300 transition-colors">{scenario.title}</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">
                        {scenario.description}
                      </p>
                      
                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-800/60 rounded-xl backdrop-blur-sm">
                        <div className="text-center">
                          <div className="text-lg font-bold text-red-400">{scenario.steps}</div>
                          <div className="text-xs text-slate-400">Schritte</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-orange-400">{scenario.timeframe}</div>
                          <div className="text-xs text-slate-400">Zeitrahmen</div>
                        </div>
                      </div>

                      {/* Difficulty & Urgency */}
                      <div className="flex gap-2 mb-6">
                        <Badge className={getUrgencyColor(scenario.urgency)}>
                          {scenario.urgency === 'critical' ? 'Kritisch' : 
                           scenario.urgency === 'urgent' ? 'Dringend' : 'Wichtig'}
                        </Badge>
                        <Badge className={getDifficultyColor(scenario.difficulty)}>
                          {scenario.difficulty}
                        </Badge>
                      </div>

                      {/* Stakeholders */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-300 mb-3">Beteiligte Teams:</h4>
                        <div className="flex flex-wrap gap-1">
                          {scenario.stakeholders.map((stakeholder, idx) => (
                            <Badge key={idx} className="bg-slate-700 text-slate-200 text-xs">
                              {stakeholder}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Featured Steps Preview */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-300 mb-3">Wichtige Schritte:</h4>
                        <div className="space-y-2">
                          {scenario.featured.map((step, idx) => (
                            <motion.div 
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1, duration: 0.4 }}
                              className="flex items-center gap-2"
                            >
                              <CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0" />
                              <span className="text-sm text-slate-300">{step}</span>
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
                        scenario.color
                      )}>
                        <Link to={scenario.link} className="flex items-center justify-center gap-2">
                          <span>Notfallplan öffnen</span>
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

      {/* Emergency Contact Section */}
      <section id="emergency-support" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden scroll-mt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 via-red-900/30 to-slate-800/50" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                Notfall-Unterstützung
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-300">
              Professionelle Hilfe in kritischen Situationen
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "24/7 Hotline",
                description: "Sofortige Beratung bei kritischen Datenschutzvorfällen",
                icon: Phone,
                action: "Jetzt anrufen",
                color: "from-red-500 to-orange-500",
                urgent: true
              },
              {
                title: "Expert Consultation",
                description: "Schnelle Einschätzung durch Datenschutz-Experten",
                icon: Users,
                action: "Termin buchen",
                color: "from-orange-500 to-red-500"
              },
              {
                title: "Legal Support",
                description: "Rechtliche Unterstützung bei Bußgeldverfahren",
                icon: Scale,
                action: "Kontakt aufnehmen",
                color: "from-red-500 to-pink-500"
              }
            ].map((service, index) => (
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
                      service.color
                    )}>
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {service.urgent && (
                      <Badge className="bg-red-500/20 text-red-300 border-red-500/30 mb-4 animate-pulse">
                        <AlertTriangle className="h-3 w-3 mr-1" />
                        Verfügbar 24/7
                      </Badge>
                    )}
                    
                    <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                    <p className="text-slate-300 mb-6">{service.description}</p>
                    
                    <Button className={cn(
                      "w-full bg-gradient-to-r text-white",
                      service.color
                    )}>
                      {service.action}
                      <ArrowRight className="ml-2 h-4 w-4" />
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
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/10 to-red-900/20" />
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">
              <span className="text-white">Bereit für den</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                Ernstfall?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Laden Sie alle <span className="font-semibold text-red-300">Notfallpläne und Checklisten</span> herunter 
              und bereiten Sie sich optimal vor.
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
                  className="bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white px-10 py-4 text-lg font-bold shadow-2xl hover:shadow-3xl transition-all duration-300"
                >
                  <Download className="mr-3 h-6 w-6" />
                  Alle Notfallpläne laden
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-red-500/30 hover:border-red-400 text-red-300 hover:bg-red-500/10 px-10 py-4 text-lg font-bold backdrop-blur-sm">
                  <Phone className="mr-3 h-6 w-6" />
                  Notfall-Kontakt
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="container mx-auto max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-white">Verwandte</span>{' '}
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                Themen
              </span>
            </h2>
            <p className="text-lg text-slate-300">
              Weitere wichtige Datenschutz-Bereiche für Ihr Unternehmen
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">DSGVO Grundlagen</h3>
                  <p className="text-slate-300 mb-4">
                    Verstehen Sie die rechtlichen Anforderungen und Pflichten der DSGVO.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/wissen/dsgvo-grundlagen">
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 mb-4">
                    <FileCheck className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Audit Management</h3>
                  <p className="text-slate-300 mb-4">
                    Systematische Prüfung und Optimierung Ihrer Datenschutz-Compliance.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/wissen/audit-management">
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
                    <Lock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">Datensicherheit</h3>
                  <p className="text-slate-300 mb-4">
                    Technische und organisatorische Maßnahmen zum Schutz Ihrer Daten.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/wissen/technische-massnahmen/verschluesselung">
                      Mehr erfahren
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CrisisManagement;