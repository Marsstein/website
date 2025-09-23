import React, { useEffect, useRef, useState } from 'react';
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

// Removed old useTypewriter hook - using inline effect instead

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

const complianceStats = [
  { label: 'DACH-Länder', value: 3, icon: Flag, color: 'text-[#e24e1b]' },
  { label: 'Gesetze abgedeckt', value: 18, icon: FileCheck, color: 'text-blue-500' },
  { label: 'Compliance Rate', value: 99, icon: Target, color: 'text-emerald-500' },
  { label: 'Live Updates', value: 24, suffix: '/7', icon: Activity, color: 'text-purple-500' }
];

export const DACHCompliance: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [updateTyped, setUpdateTyped] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const currentCountry = dachCountries[selectedCountry];
  const [currentText, setCurrentText] = useState('');
  const [showSource, setShowSource] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);

  // Performance optimizations
  const mainAnimConfig = usePerformantAnimation({
    duration: 800,
    complexity: 'medium',
    enableFor: 'all'
  });
  
  const complexAnimConfig = usePerformantAnimation({
    duration: 3000,
    complexity: 'high',
    enableFor: 'high-performance-only'
  });

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

  // Removed auto-switching for better user control
  
  // Typewriter effect for current country
  useEffect(() => {
    if (!isVisible) return;
    
    // Reset states when country changes
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
        
        {/* Animated Elements */}
        {complexAnimConfig.shouldAnimate && (
          <>
            <motion.div 
              className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-[#e24e1b]/8 to-red-500/8 rounded-full blur-3xl"
              style={gpuStyles}
              animate={complexAnimConfig.reducedComplexity ? 
                { opacity: [0.8, 1, 0.8] } : 
                { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }
              }
              transition={getOptimizedTransition({
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }, complexAnimConfig)}
            />
            <motion.div 
              className="absolute bottom-20 left-20 w-[500px] h-[500px] bg-gradient-to-r from-blue-500/8 to-purple-500/8 rounded-full blur-3xl"
              style={gpuStyles}
              animate={complexAnimConfig.reducedComplexity ? 
                { opacity: [0.7, 1, 0.7] } : 
                { y: [-10, 10, -10], scale: [1, 1.1, 1] }
              }
              transition={getOptimizedTransition({
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }, complexAnimConfig)}
            />
          </>
        )}
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Flag Icons Background */}
        {complexAnimConfig.shouldAnimate && (
          <>
            <motion.div 
              className="absolute top-1/4 left-1/4 text-6xl opacity-5"
              style={gpuStyles}
              animate={complexAnimConfig.reducedComplexity ? 
                { opacity: [0.3, 0.7, 0.3] } : 
                { y: [-10, 10, -10], rotate: [0, 5, -5, 0] }
              }
              transition={getOptimizedTransition({
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }, complexAnimConfig)}
            >
              🇩🇪
            </motion.div>
            <motion.div 
              className="absolute top-1/3 right-1/3 text-5xl opacity-5"
              style={gpuStyles}
              animate={complexAnimConfig.reducedComplexity ? 
                { opacity: [0.3, 0.7, 0.3] } : 
                { y: [10, -10, 10], rotate: [0, -5, 5, 0] }
              }
              transition={getOptimizedTransition({
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }, complexAnimConfig)}
            >
              🇦🇹
            </motion.div>
            <motion.div 
              className="absolute bottom-1/3 left-1/3 text-7xl opacity-5"
              style={gpuStyles}
              animate={complexAnimConfig.reducedComplexity ? 
                { opacity: [0.3, 0.7, 0.3] } : 
                { y: [-15, 15, -15], scale: [1, 1.1, 1] }
              }
              transition={getOptimizedTransition({
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }, complexAnimConfig)}
            >
              🇨🇭
            </motion.div>
          </>
        )}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Header */}
        <div className="text-center mb-16 space-y-6">
          <motion.div 
            className="inline-flex items-center gap-4 px-8 py-4 rounded-full glassmorphism border border-[#e24e1b]/20"
            style={gpuStyles}
            initial={{ y: 20, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={getOptimizedTransition({ duration: 0.6, ease: "easeOut" }, mainAnimConfig)}
          >
            <div className="relative">
              {complexAnimConfig.shouldAnimate && (
                <motion.div
                  style={gpuStyles}
                  animate={complexAnimConfig.reducedComplexity ? 
                    { rotate: [0, 360] } : 
                    { scale: [1, 1.2, 1], rotate: [0, 180, 360] }
                  }
                  transition={getOptimizedTransition({
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }, complexAnimConfig)}
                >
                  <MapPin className="w-5 h-5 text-[#e24e1b]" />
                </motion.div>
              )}
              {!complexAnimConfig.shouldAnimate && (
                <MapPin className="w-5 h-5 text-[#e24e1b]" />
              )}
              {complexAnimConfig.shouldAnimate && (
                <motion.div 
                  className="absolute inset-0 bg-[#e24e1b] rounded-full opacity-30"
                  style={gpuStyles}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={getOptimizedTransition({
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }, complexAnimConfig)}
                />
              )}
            </div>
            <span className="font-semibold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              DACH-Spezialist
            </span>
            <Badge className="bg-gradient-to-r from-[#e24e1b] to-orange-500 text-white border-0 px-3">
              Regional
            </Badge>
          </motion.div>
          
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
            style={gpuStyles}
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={getOptimizedTransition({ duration: 0.8, delay: 0.2, ease: "easeOut" }, mainAnimConfig)}
          >
            <span className="block text-gray-900">
              <span className="block sm:hidden">DSGVO für</span>
              <span className="hidden sm:block">DSGVO Compliance für den</span>
            </span>
            <motion.span 
              className="block bg-gradient-to-r from-[#e24e1b] via-red-500 to-[#e24e1b] bg-clip-text text-transparent"
              style={{
                backgroundSize: '300% 300%'
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              DACH-Raum
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ y: 30, opacity: 0 }}
            animate={isVisible ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <span className="block sm:hidden">
              Compliance-Lösungen für 
              <span className="font-bold text-gray-900"> Deutschland, Österreich und die Schweiz.</span>
            </span>
            <span className="hidden sm:block">
              Maßgeschneiderte Compliance-Lösungen für 
              <span className="font-bold text-gray-900"> Deutschland, Österreich und die Schweiz.</span>
              <br />
              Mit lokalen Rechtsexperten und automatischen Updates zu nationalen Gesetzen.
            </span>
          </motion.p>
        </div>

        {/* Enhanced Country Selector */}
        <motion.div 
          className="flex justify-center mb-12 px-4"
          initial={{ y: 30, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <Card className="p-2 glassmorphism-card border-white/30 w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row rounded-lg gap-2 sm:gap-0">
              {dachCountries.map((country, index) => (
                <motion.button
                  key={country.id}
                  onClick={() => setSelectedCountry(index)}
                  className={cn(
                    "flex items-center gap-2 sm:gap-4 px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 text-base sm:text-lg font-semibold relative overflow-hidden flex-1 justify-center sm:justify-start",
                    selectedCountry === index
                      ? "bg-gradient-to-r from-[#e24e1b]/10 to-orange-500/10 text-gray-900 shadow-lg scale-105"
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
                    className="text-xl sm:text-2xl relative z-10"
                    animate={selectedCountry === index ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {country.flag}
                  </motion.span>
                  <span className="relative z-10 hidden sm:inline">{country.country}</span>
                  <span className="relative z-10 sm:hidden text-sm">{country.country}</span>
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

        {/* Enhanced Country Details */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-12 px-4">
          
          {/* Left: Country Overview */}
          <motion.div 
            className="space-y-4"
            initial={{ x: -50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <Card className="p-4 glassmorphism-card border-white/30 relative overflow-hidden group">
              {/* Background Gradient */}
              <motion.div 
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-50 transition-opacity duration-500",
                  currentCountry.color.gradient
                )}
                animate={{
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              
              <div className="relative space-y-4">
                {/* Country Header */}
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className="text-4xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    {currentCountry.flag}
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      {currentCountry.country}
                    </h3>
                    <p className="text-sm text-gray-600">Rechtsprechung & Compliance</p>
                  </div>
                </div>

                {/* Compliance Score */}
                <motion.div 
                  className="flex items-center justify-between p-3 rounded-lg glassmorphism border border-white/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", bounce: 0.3 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <Target className="h-5 w-5 text-emerald-500" />
                    </motion.div>
                    <span className="font-semibold text-gray-900 text-sm">Compliance Score</span>
                  </div>
                  <motion.div 
                    className="text-2xl font-black text-emerald-500"
                    initial={{ scale: 0 }}
                    animate={isVisible ? { scale: 1 } : {}}
                    transition={{ delay: 1, type: "spring", bounce: 0.5 }}
                  >
                    {isVisible && <CountUp end={currentCountry.complianceScore} duration={2} />}%
                  </motion.div>
                </motion.div>

                {/* Coverage */}
                <motion.div 
                  className="p-3 rounded-lg bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", bounce: 0.3 }}
                >
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Shield className="h-4 w-4 text-emerald-600" />
                    </motion.div>
                    <span className="font-semibold text-emerald-800 text-sm">
                      {currentCountry.coverage}
                    </span>
                  </div>
                </motion.div>

                {/* Recent Updates with Typewriter */}
                <div className="space-y-2">
                  <motion.div 
                    className="p-4 rounded-lg bg-white border border-gray-300 shadow-sm relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", bounce: 0.3 }}
                    style={{
                      fontFamily: '"Courier New", "Liberation Mono", "Consolas", monospace'
                    }}
                  >
                    <div className="space-y-3">
                      {/* Header with Date */}
                      <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{ 
                              scale: [1, 1.3, 1],
                              opacity: [1, 0.5, 1]
                            }}
                            transition={{
                              duration: 1.5,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            <Activity className="h-4 w-4 text-blue-500" />
                          </motion.div>
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
                  </motion.div>
                  
                  {/* Source Link - Below the card */}
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
            className="space-y-4"
            initial={{ x: 50, opacity: 0 }}
            animate={isVisible ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          >
            <Card className="p-4 glassmorphism-card border-white/30">
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <motion.div 
                    className="p-2 rounded-lg bg-gradient-to-br from-[#e24e1b] to-orange-500 text-white"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -10, 10, 0] 
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Scale className="h-4 w-4" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Relevante Gesetze & Vorschriften
                  </h3>
                </div>

                {/* Laws Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {currentCountry.laws.map((law, index) => (
                    <motion.div 
                      key={index}
                      className="group p-2 sm:p-3 rounded-lg glassmorphism border border-white/20 hover:border-[#e24e1b]/30 cursor-pointer"
                      whileHover={{ 
                        scale: 1.05,
                        y: -2
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isVisible ? { opacity: 1, y: 0 } : {}}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1.2 + (index * 0.1),
                        type: "spring",
                        bounce: 0.3
                      }}
                    >
                      <div className="flex items-center gap-1 sm:gap-2">
                        <motion.div 
                          className="p-1 rounded bg-gradient-to-br from-gray-100 to-gray-50 group-hover:from-[#e24e1b]/10 group-hover:to-orange-500/10 transition-all duration-300 flex-shrink-0"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <FileCheck className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-gray-600 group-hover:text-[#e24e1b] transition-colors" />
                        </motion.div>
                        <span className="font-semibold text-gray-900 text-xs sm:text-sm truncate">{law}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Specialties */}
                <motion.div 
                  className="pt-4 border-t border-gray-200/50"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2 text-sm">
                    <motion.div
                      animate={{ 
                        rotate: [0, 180, 360],
                        scale: [1, 1.2, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Sparkles className="h-4 w-4 text-[#e24e1b]" />
                    </motion.div>
                    Besonderheiten
                  </h4>
                  <div className="space-y-2">
                    {currentCountry.specialties.map((specialty, index) => (
                      <motion.div 
                        key={index} 
                        className="flex items-start gap-2 p-2 rounded glassmorphism border border-white/10"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isVisible ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: 2.0 + (index * 0.2),
                          ease: "easeOut"
                        }}
                        whileHover={{ x: 5 }}
                      >
                        <motion.div 
                          className="w-1.5 h-1.5 rounded-full bg-[#e24e1b] mt-1.5 flex-shrink-0"
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [1, 0.5, 1]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.3
                          }}
                        />
                        <span className="text-gray-700 text-sm">{specialty}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Enhanced Stats Section */}
        <motion.div 
          className="mb-12 px-4 sm:px-6 lg:px-8 flex justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 1.4, ease: "easeOut" }}
        >
          <Card className="p-4 sm:p-6 glassmorphism-premium border-white/30 relative overflow-hidden w-full max-w-4xl mx-auto">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#e24e1b]/5 via-transparent to-red-500/5"
              animate={{
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative">
              <motion.div 
                className="text-center mb-4"
                initial={{ y: 10, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <h3 className="text-sm sm:text-base font-semibold text-gray-800 mb-1">
                  DACH-Compliance in Zahlen
                </h3>
                <p className="text-xs sm:text-sm text-gray-500">
                  Vollständige Abdeckung aller relevanten Gesetze und Vorschriften
                </p>
              </motion.div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-1">
                {complianceStats.map((stat, index) => {
                  const Icon = stat.icon;
                  const isHovered = hoveredStat === index;
                  
                  return (
                    <motion.div 
                      key={index} 
                      className="text-center group cursor-pointer"
                      onMouseEnter={() => setHoveredStat(index)}
                      onMouseLeave={() => setHoveredStat(null)}
                      initial={{ y: 15, opacity: 0 }}
                      animate={isVisible ? { y: 0, opacity: 1 } : {}}
                      transition={{ 
                        duration: 0.6, 
                        delay: 1.8 + (index * 0.1),
                        ease: "easeOut"
                      }}
                      whileHover={{ y: -2 }}
                    >
                      <div className="space-y-0.5">
                        <motion.div 
                          className={cn(
                            "inline-flex p-1 rounded-md transition-all duration-300",
                            isHovered 
                              ? "bg-gradient-to-br from-[#e24e1b]/10 to-orange-500/10 scale-105" 
                              : "bg-gradient-to-br from-gray-100 to-gray-50"
                          )}
                          whileHover={{
                            rotate: [0, -5, 5, 0],
                            scale: 1.05
                          }}
                          transition={{ duration: 0.5 }}
                        >
                          <Icon className={cn("h-2.5 w-2.5 transition-colors duration-300", stat.color)} />
                        </motion.div>
                        
                        <motion.div 
                          className={cn("text-lg sm:text-xl font-bold transition-all duration-300", stat.color)}
                          initial={{ scale: 0 }}
                          animate={isVisible ? { scale: 1 } : {}}
                          transition={{ 
                            delay: 2.0 + (index * 0.1), 
                            type: "spring", 
                            bounce: 0.6 
                          }}
                        >
                          {isVisible && (
                            <CountUp 
                              end={stat.value} 
                              duration={2.5}
                              suffix={stat.suffix || (index === 0 ? '' : index === 1 ? '+' : '%')}
                            />
                          )}
                        </motion.div>
                        
                        <div className="text-xs sm:text-sm font-medium text-gray-600">
                          {stat.label}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center px-4 sm:px-6 lg:px-8"
          initial={{ y: 50, opacity: 0 }}
          animate={isVisible ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 2.2, ease: "easeOut" }}
        >
          <Card className="inline-block p-6 sm:p-8 md:p-12 glassmorphism-premium border-white/30 shadow-2xl w-full max-w-4xl relative overflow-hidden group">
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#e24e1b]/5 via-red-500/5 to-[#e24e1b]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <div className="relative space-y-8">
              <div className="space-y-4">
                <motion.div 
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-[#e24e1b]/10 to-red-500/10 border border-[#e24e1b]/20"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", bounce: 0.3 }}
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.5, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Eye className="h-5 w-5 text-[#e24e1b]" />
                  </motion.div>
                  <span className="font-semibold text-[#e24e1b]">DACH-Analyse verfügbar</span>
                  <Badge className="bg-gradient-to-r from-[#e24e1b] to-red-500 text-white border-0">
                    Kostenlos
                  </Badge>
                </motion.div>
                
                <motion.h3 
                  className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isVisible ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 2.4 }}
                >
                  Bereit für DACH-Compliance?
                </motion.h3>
                
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto"
                  initial={{ y: 20, opacity: 0 }}
                  animate={isVisible ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 2.6 }}
                >
                  Starten Sie mit einer kostenlosen Analyse Ihrer aktuellen 
                  <span className="font-semibold text-gray-900"> Compliance-Situation im DACH-Raum.</span>
                </motion.p>
              </div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ y: 30, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 2.8 }}
              >
                <Link to="/contact?demo=true" className="w-full sm:w-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg"
                      className="w-full sm:w-auto bg-gradient-to-r from-[#e24e1b] via-red-500 to-[#e24e1b] hover:from-[#e24e1b]/90 hover:via-red-500/90 hover:to-[#e24e1b]/90 text-white px-6 sm:px-8 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '200%' }}
                        transition={{ duration: 0.8 }}
                      />
                      <MapPin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      DACH-Analyse anfordern
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </Link>
                
                <Link to="/branchen" className="w-full sm:w-auto">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg"
                      variant="outline" 
                      className="w-full sm:w-auto px-6 sm:px-8 md:px-12 py-3 sm:py-4 text-sm sm:text-base md:text-lg font-semibold border-2 glassmorphism hover:bg-white/50 hover:border-[#e24e1b] hover:text-[#e24e1b] transition-all duration-300"
                    >
                      <Globe className="mr-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      Branchen erkunden
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                      >
                        <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </motion.div>
                    </Button>
                  </motion.div>
                </Link>
              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-6 text-xs sm:text-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={isVisible ? { y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 3.0 }}
              >
                <div className="flex items-center gap-2 text-gray-600">
                  <motion.div 
                    className="p-1 rounded-full bg-emerald-500/10"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  </motion.div>
                  <span>Kostenlose Analyse</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <motion.div 
                    className="p-1 rounded-full bg-emerald-500/10"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                  >
                    <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  </motion.div>
                  <span>DACH-Expertenwissen</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <motion.div 
                    className="p-1 rounded-full bg-emerald-500/10"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
                  >
                    <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4" />
                  </motion.div>
                  <span>Live-Updates</span>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};