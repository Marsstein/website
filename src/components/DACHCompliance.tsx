import React, { useEffect, useRef, useState, useMemo, memo } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Flag,
  FileCheck,
  Shield,
  Users,
  ArrowRight,
  Sparkles,
  MapPin,
  Scale,
  Building,
  Globe,
  CheckCircle2,
  TrendingUp,
  Eye,
  Award,
  Activity,
  Target,
  Gauge,
  Database,
  Network,
  Brain,
  Layers,
  Lock,
  Zap,
  ExternalLink
} from 'lucide-react';
import { cn } from '@/lib/utils';
import CountUp from 'react-countup';
import { usePerformantAnimation, getOptimizedTransition, getGPUAcceleratedStyle } from '@/hooks/usePerformantAnimation';

interface CountryCompliance {
  id: string;
  country: string;
  flag: string;
  laws: string[];
  specialties: string[];
  coverage: string;
  recentUpdates: string;
  updateSource: string;
  updateUrl: string;
  updateDate: string;
  complianceScore: number;
  color: {
    from: string;
    to: string;
    bg: string;
    text: string;
    gradient: string;
  };
}

// Optimized features
const features = [
  {
    icon: Brain,
    title: 'KI-gestützte Automatisierung',
    description: 'Vollautomatische Dokumentation und kontinuierliche Überwachung',
    color: 'text-purple-600',
    bgColor: 'bg-purple-500/20'
  },
  {
    icon: Database,
    title: 'Zentralisierte Verwaltung',
    description: 'Alle Compliance-Dokumente und Nachweise in einer sicheren Plattform',
    color: 'text-blue-600',
    bgColor: 'bg-blue-500/20'
  },
  {
    icon: Network,
    title: 'Echtzeit-Überwachung',
    description: 'Live-Updates zu Gesetzesänderungen und Compliance-Status',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-500/20'
  },
  {
    icon: Layers,
    title: 'Multi-Standard Support',
    description: 'DSGVO, ISO 27001, NIS2, EU AI Act und weitere Standards',
    color: 'text-orange-600',
    bgColor: 'bg-orange-500/20'
  }
];

// Metrics with enhanced visuals
const metrics = [
  { 
    number: '99.8', 
    suffix: '%', 
    label: 'Compliance Rate', 
    icon: Target,
    color: 'text-emerald-600',
    description: 'Unserer Kunden erfüllen alle Standards'
  },
  { 
    number: '3', 
    label: 'DACH-Länder', 
    icon: MapPin,
    color: 'text-red-600',
    description: 'Deutschland, Österreich, Schweiz'
  },
  { 
    number: '18', 
    label: 'Gesetze abgedeckt', 
    icon: Scale,
    color: 'text-blue-600',
    description: 'Von DSGVO bis EU AI Act'
  },
  { 
    number: '24', 
    suffix: '/7', 
    label: 'Live Updates', 
    icon: Activity,
    color: 'text-purple-600',
    description: 'Kontinuierliche Überwachung'
  }
];

const dachCountries: CountryCompliance[] = [
  {
    id: 'deutschland',
    country: 'Deutschland',
    flag: '🇩🇪',
    laws: ['DSGVO', 'BDSG', 'GeschGehG', 'BSI-Gesetz', 'HinSchG', 'TTDSG'],
    specialties: ['Betriebsrat-Mitbestimmung', 'Bundesdatenschutzgesetz', 'IT-Sicherheitsgesetz'],
    coverage: '100% deutsche Rechtsprechung',
    recentUpdates: 'TTDSG-Novelle verschärft Cookie-Einwilligungen - Unternehmen müssen bis März 2025 compliant sein',
    updateSource: 'Bundesnetzagentur',
    updateUrl: 'https://www.bundesnetzagentur.de/SharedDocs/Pressemitteilungen/DE/2024/20241215_TTDSG.html',
    updateDate: '15.12.2024',
    complianceScore: 98,
    color: {
      from: 'from-red-500',
      to: 'to-yellow-500',
      bg: 'bg-red-500/10',
      text: 'text-red-600',
      gradient: 'from-red-500/20 to-yellow-500/20'
    }
  },
  {
    id: 'oesterreich',
    country: 'Österreich',
    flag: '🇦🇹',
    laws: ['DSGVO', 'DSG', 'TKG', 'ECG', 'MedienG', 'GlBG'],
    specialties: ['Österreichisches Datenschutzgesetz', 'Telekommunikationsgesetz', 'E-Commerce-Gesetz'],
    coverage: '100% österreichische Rechtsprechung',
    recentUpdates: 'Österreich verhängt Rekordstrafe von €18M gegen Meta wegen DSGVO-Verstößen bei WhatsApp',
    updateSource: 'Österreichische Datenschutzbehörde',
    updateUrl: 'https://www.dsb.gv.at/documents/dsb/Pressemitteilungen/Pressemitteilung_DSB_Meta_WhatsApp_2024.pdf',
    updateDate: '22.11.2024',
    complianceScore: 96,
    color: {
      from: 'from-red-600',
      to: 'to-red-400',
      bg: 'bg-red-600/10',
      text: 'text-red-700',
      gradient: 'from-red-600/20 to-red-400/20'
    }
  },
  {
    id: 'schweiz',
    country: 'Schweiz',
    flag: '🇨🇭',
    laws: ['nDSG', 'FMedG', 'FINMAG', 'BGÖ', 'StGB', 'OR'],
    specialties: ['Neues Datenschutzgesetz', 'Finanzmarktaufsicht', 'Öffentlichkeitsgesetz'],
    coverage: '100% schweizerische Rechtsprechung',
    recentUpdates: 'Schweizer Bundesrat beschließt verschärfte Bußgelder für nDSG-Verstöße ab Januar 2025',
    updateSource: 'Eidgenössischer Datenschutz- und Öffentlichkeitsbeauftragter (EDÖB)',
    updateUrl: 'https://www.edoeb.admin.ch/edoeb/de/home/dokumentation/medienmitteilungen/2024/mm_20241208.html',
    updateDate: '08.12.2024',
    complianceScore: 94,
    color: {
      from: 'from-red-500',
      to: 'to-white',
      bg: 'bg-red-500/10',
      text: 'text-red-600',
      gradient: 'from-red-500/20 to-slate-300/20'
    }
  }
];

export const DACHCompliance: React.FC = memo(() => {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const currentCountry = dachCountries[selectedCountry];
  const [currentText, setCurrentText] = useState('');
  const [showSource, setShowSource] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  // Optimized animation config using useMemo
  const animationConfig = useMemo(() => ({
    duration: 800,
    complexity: 'medium' as const,
    enableFor: 'all' as const
  }), []);

  const complexAnimationConfig = useMemo(() => ({
    duration: 3000,
    complexity: 'high' as const,
    enableFor: 'high-performance-only' as const
  }), []);

  const mainAnimConfig = usePerformantAnimation(animationConfig);
  const complexAnimConfig = usePerformantAnimation(complexAnimationConfig);

  const gpuStyles = getGPUAcceleratedStyle(mainAnimConfig);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Optimized typewriter effect
  useEffect(() => {
    if (!isVisible) return;
    
    setCurrentText('');
    setShowSource(false);
    setTypingComplete(false);
    
    const text = currentCountry.recentUpdates;
    let index = 0;
    
    const timer = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (index < text.length) {
          setCurrentText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
          setTypingComplete(true);
          setTimeout(() => setShowSource(true), 300);
        }
      }, 30);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [selectedCountry, isVisible, currentCountry.recentUpdates]);

  return (
    <section 
      ref={sectionRef}
      className="py-20 pb-32 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(226,78,27,0.05)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(239,68,68,0.05)_0%,transparent_50%),radial-gradient(circle_at_50%_20%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Header */}
        <div className="text-center mb-16 space-y-6">
          <motion.div 
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/60 backdrop-blur-sm border border-gray-200/50"
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <MapPin className="w-5 h-5 text-[#e24e1b]" />
            <span className="font-semibold text-gray-800">DACH-Spezialist</span>
            <Badge className="bg-gradient-to-r from-[#e24e1b] to-orange-500 text-white border-0 px-3">
              Regional
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900"
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="block">DSGVO Compliance für den</span>
            <span className="block bg-gradient-to-r from-[#e24e1b] via-red-500 to-[#e24e1b] bg-clip-text text-transparent">
              DACH-Raum
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Maßgeschneiderte Compliance-Lösungen für 
            <span className="font-bold text-gray-900"> Deutschland, Österreich und die Schweiz.</span>
            <br className="hidden md:block" />
            Mit lokalen Rechtsexperten und automatischen Updates zu nationalen Gesetzen.
          </motion.p>
        </div>

        {/* Enhanced Metrics Grid */}
        <motion.div 
          className="mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ y: 30, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8 + (index * 0.1),
                  ease: "easeOut"
                }}
                onMouseEnter={() => setHoveredMetric(index)}
                onMouseLeave={() => setHoveredMetric(null)}
              >
                <Card className="p-4 md:p-6 h-full text-center bg-white/60 backdrop-blur-sm border-white/60 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-[#e24e1b]/30">
                  {/* Icon */}
                  <motion.div 
                    className={cn(
                      "mx-auto p-3 rounded-xl w-fit transition-all duration-300 mb-3",
                      hoveredMetric === index 
                        ? "bg-gradient-to-br from-[#e24e1b]/20 to-orange-500/20 scale-110" 
                        : "bg-gray-100/50 group-hover:bg-[#e24e1b]/10"
                    )}
                  >
                    <metric.icon className={cn("h-6 w-6 transition-colors duration-300", metric.color)} />
                  </motion.div>

                  {/* Value */}
                  <motion.div 
                    className="text-2xl md:text-3xl font-black text-gray-900 mb-1"
                    animate={hoveredMetric === index ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {isVisible && <CountUp end={Number(metric.number)} duration={2} />}
                    {metric.suffix && <span className="text-lg">{metric.suffix}</span>}
                  </motion.div>

                  {/* Label */}
                  <p className="text-sm font-medium text-gray-900 mb-1">
                    {metric.label}
                  </p>
                  
                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-tight">
                    {metric.description}
                  </p>

                  {/* Hover Effect Indicator */}
                  <motion.div 
                    className="h-1 bg-gradient-to-r from-[#e24e1b] to-orange-500 rounded-full mx-auto transition-all duration-300 mt-3"
                    style={{ 
                      width: hoveredMetric === index ? '100%' : '0%'
                    }}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Features Grid */}
        <motion.div 
          className="mb-20"
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ihre Vorteile mit Marsstein
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Moderne Technologie trifft auf regulatorische Expertise für 
              umfassende DACH-Compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ y: 30, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 1.2 + (index * 0.1),
                  ease: "easeOut"
                }}
                onMouseEnter={() => setHoveredFeature(index)}
                onMouseLeave={() => setHoveredFeature(null)}
              >
                <Card className="p-6 h-full bg-white/60 backdrop-blur-sm border-white/60 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-[#e24e1b]/30 relative overflow-hidden">
                  {/* Background Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-[#e24e1b]/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  
                  <div className="relative">
                    {/* Icon */}
                    <motion.div 
                      className={cn(
                        "p-3 rounded-xl w-fit mb-4 transition-all duration-300",
                        hoveredFeature === index 
                          ? `${feature.bgColor} scale-110` 
                          : "bg-gray-100/50 group-hover:bg-[#e24e1b]/10"
                      )}
                    >
                      <feature.icon className={cn("h-6 w-6 transition-colors duration-300", feature.color)} />
                    </motion.div>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h4>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover Effect Indicator */}
                    <motion.div 
                      className="h-1 bg-gradient-to-r from-[#e24e1b] to-orange-500 rounded-full transition-all duration-300 mt-4"
                      style={{ 
                        width: hoveredFeature === index ? '100%' : '0%'
                      }}
                    />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Country Selector */}
        <motion.div 
          className="flex justify-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
        >
          <Card className="p-2 bg-white/60 backdrop-blur-sm border-white/60 w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row rounded-lg gap-2 sm:gap-0">
              {dachCountries.map((country, index) => (
                <motion.button
                  key={country.id}
                  onClick={() => setSelectedCountry(index)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-4 rounded-lg transition-all duration-300 text-lg font-semibold relative overflow-hidden flex-1 justify-center sm:justify-start",
                    selectedCountry === index
                      ? "bg-gradient-to-r from-[#e24e1b]/10 to-orange-500/10 text-gray-900 shadow-lg"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {selectedCountry === index && (
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-[#e24e1b]/5 to-orange-500/5 rounded-lg"
                      layoutId="activeCountry"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <motion.span 
                    className="text-2xl relative z-10"
                    animate={selectedCountry === index ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {country.flag}
                  </motion.span>
                  <span className="relative z-10">{country.country}</span>
                  {selectedCountry === index && (
                    <motion.div 
                      className="w-2 h-2 bg-[#e24e1b] rounded-full relative z-10"
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Country Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* Left: Country Overview */}
          <motion.div 
            className="space-y-6"
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
          >
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-white/60 relative overflow-hidden">
              
              <div className="relative space-y-6">
                {/* Country Header */}
                <div className="flex items-center gap-4">
                  <div className="text-5xl">
                    {currentCountry.flag}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {currentCountry.country}
                    </h3>
                    <p className="text-gray-600">Rechtsprechung & Compliance</p>
                  </div>
                </div>

                {/* Compliance Score */}
                <div className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-emerald-500" />
                    <span className="font-semibold text-gray-900">Compliance Score</span>
                  </div>
                  <motion.div 
                    className="text-3xl font-black text-emerald-500"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ delay: 1.8, type: "spring", bounce: 0.5 }}
                  >
                    {isVisible && <CountUp end={currentCountry.complianceScore} duration={2} />}%
                  </motion.div>
                </div>

                {/* Coverage */}
                <div className="p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">
                      {currentCountry.coverage}
                    </span>
                  </div>
                </div>

                {/* Recent Updates */}
                <div className="space-y-3">
                  <div 
                    className="p-4 rounded-lg bg-white border border-gray-300 shadow-sm"
                    style={{
                      fontFamily: '"Courier New", "Liberation Mono", "Consolas", monospace'
                    }}
                  >
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                        <div className="flex items-center gap-2">
                          <Activity className="h-4 w-4 text-blue-500" />
                          <span className="font-bold text-gray-900 uppercase tracking-wide text-sm">
                            Aktuelle Updates
                          </span>
                        </div>
                        <div className="text-xs text-gray-600 font-mono">
                          {currentCountry.updateDate}
                        </div>
                      </div>
                      
                      {/* Typewriter Text */}
                      <div className="min-h-[3rem] flex items-start">
                        <div className="text-sm text-black leading-relaxed font-mono">
                          {currentText}
                          {!typingComplete && (
                            <motion.span 
                              className="inline-block w-0.5 h-4 bg-black ml-1"
                              animate={{ opacity: [1, 0] }}
                              transition={{ duration: 0.8, repeat: Infinity }}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Source Link */}
                  {showSource && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <a 
                        href={currentCountry.updateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs text-blue-700 hover:text-blue-900 transition-colors font-mono underline"
                      >
                        <span>Quelle: {currentCountry.updateSource}</span>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </motion.div>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Right: Laws & Regulations */}
          <motion.div 
            className="space-y-6"
            initial={{ x: 50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.8, ease: "easeOut" }}
          >
            <Card className="p-6 bg-white/60 backdrop-blur-sm border-white/60">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#e24e1b] to-orange-500 text-white">
                    <Scale className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Relevante Gesetze & Vorschriften
                  </h3>
                </div>

                {/* Laws Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {currentCountry.laws.map((law, index) => (
                    <motion.div 
                      key={index}
                      className="group p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-gray-200 hover:border-[#e24e1b]/30 cursor-pointer transition-all duration-300"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 2.0 + (index * 0.1),
                        type: "spring",
                        bounce: 0.3
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <div className="p-1 rounded bg-gray-100 group-hover:bg-[#e24e1b]/10 transition-all duration-300">
                          <FileCheck className="h-3 w-3 text-gray-600 group-hover:text-[#e24e1b] transition-colors" />
                        </div>
                        <span className="font-semibold text-gray-900 text-sm">{law}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Specialties */}
                <motion.div 
                  className="pt-6 border-t border-gray-200"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 2.4 }}
                >
                  <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#e24e1b]" />
                    Besonderheiten
                  </h4>
                  <div className="space-y-3">
                    {currentCountry.specialties.map((specialty, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-3 p-3 rounded-lg bg-white/60 backdrop-blur-sm border border-gray-200"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: 2.6 + (index * 0.2),
                          ease: "easeOut"
                        }}
                        whileHover={{ x: 5 }}
                      >
                        <div className="w-2 h-2 rounded-full bg-[#e24e1b] mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{specialty}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Enhanced CTA */}
        <motion.div 
          className="text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 2.8, ease: "easeOut" }}
        >
          <Card className="inline-block p-8 md:p-12 bg-white/60 backdrop-blur-sm border-white/60 relative overflow-hidden group max-w-4xl">
            <div className="relative space-y-8">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-[#e24e1b] to-orange-500 text-white border-0 px-4 py-1">
                  <Sparkles className="w-4 h-4 mr-2" />
                  DACH-Spezialist
                </Badge>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                  Bereit für <span className="bg-gradient-to-r from-[#e24e1b] to-orange-500 bg-clip-text text-transparent">DACH-Compliance?</span>
                </h3>
                
                <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                  Lassen Sie uns Ihre spezifischen Anforderungen für Deutschland, Österreich oder die Schweiz 
                  <span className="font-semibold text-gray-900"> in einem persönlichen Gespräch besprechen.</span>
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link to="/contact?region=dach">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button className="bg-gradient-to-r from-[#e24e1b] to-orange-500 hover:from-[#e24e1b]/90 hover:to-orange-500/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
                      <Users className="mr-2 h-5 w-5" />
                      DACH-Beratung anfragen
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </Link>
                
                <Link to="/compliance">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Button variant="outline" className="px-8 py-4 text-lg font-semibold border-2 border-[#e24e1b]/30 hover:bg-[#e24e1b]/5 hover:border-[#e24e1b] transition-all duration-300">
                      <Eye className="mr-2 h-5 w-5" />
                      Compliance-Lösungen
                    </Button>
                  </motion.div>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-8 pt-6 border-t border-gray-200 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>DSGVO-konform</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-blue-500" />
                  <span>ISO 27001 zertifiziert</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#e24e1b]" />
                  <span>Enterprise-Grade Security</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
});

DACHCompliance.displayName = 'DACHCompliance';