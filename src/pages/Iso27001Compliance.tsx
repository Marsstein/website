import React, { useEffect, useState, useRef } from 'react';
import SEOHead from '../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  FileCheck, 
  Lock, 
  Users, 
  Building2,
  Euro,
  Clock,
  AlertCircle,
  TrendingUp,
  Award,
  Star,
  Zap,
  Database,
  FileText,
  Bot,
  BarChart3,
  Globe,
  Quote,
  ChevronRight,
  PlayCircle,
  Download,
  Phone,
  Mail,
  Calendar,
  CheckSquare,
  XCircle,
  Rocket,
  Target,
  ShieldCheck,
  Search,
  Settings,
  Monitor,
  Cloud,
  Server,
  Network,
  CreditCard,
  Heart,
  Briefcase,
  BookOpen,
  UserCheck,
  Eye,
  Layers,
  Car
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Modern Hero Section
const HeroSection = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Animate compliance score
      const scoreInterval = setInterval(() => {
        setComplianceScore(prev => {
          if (prev >= 97) {
            clearInterval(scoreInterval);
            return 97;
          }
          return prev + 3;
        });
      }, 30);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Modern background with animated elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#F5F6F8] via-white to-[#e24e1b]/5" />
        
        {/* Animated geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Modern badges */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Badge className="bg-gradient-to-r from-[#a1251b] to-red-600 text-white border-0 px-4 py-2 font-semibold shadow-lg">
                <Shield className="h-4 w-4 mr-2" />
                ISO 27001 Certified
              </Badge>
              <Badge className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white border-0 px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
Professionelle Zertifizierung
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-[#232323] dark:text-gray-100">ISO 27001-Zertifizierung</span>
              <span className="block bg-gradient-to-r from-[#e24e1b] via-[#ea580c] to-[#f97316] bg-clip-text text-transparent">
                Automatisiert & Rechtssicher
              </span>
            </motion.h1>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-xl text-[#474747] dark:text-gray-300 leading-relaxed">
                Schützen Sie Ihr Unternehmen vor Cyber-Bedrohungen und erschließen Sie internationale Märkte. 
                Mit unserer KI-gestützten Plattform erreichen Sie <span className="font-bold text-[#e24e1b]">ISO 27001-Zertifizierung in nur 6 Monaten</span> 
                – 75% schneller als herkömmliche Ansätze.
              </p>
              
              {/* Value proposition */}
              <div className="bg-gradient-to-r from-blue-50 to-[#a1251b]/5 dark:from-blue-950/20 dark:to-[#a1251b]/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-blue-900 dark:text-blue-100">Warum ISO 27001 für Ihr Unternehmen entscheidend ist:</p>
                    <ul className="text-sm text-blue-800 dark:text-blue-200 mt-1 space-y-1">
                      <li>• Schutz vor Cyber-Angriffen und Datenverlust</li>
                      <li>• Zugang zu internationalen B2B-Märkten</li>
                      <li>• Vertrauen von Enterprise-Kunden gewinnen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#f97316] hover:to-[#ea580c] text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all">
                  Kostenlose Beratung starten
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-[#e24e1b] text-[#e24e1b] hover:bg-[#e24e1b]/5 px-8 py-4 text-lg">
                  <PlayCircle className="mr-2 h-5 w-5" />
                  Demo ansehen (3 Min)
                </Button>
              </motion.div>
            </motion.div>

            {/* Trust indicators with animations */}
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              {[
                { icon: Clock, value: "6 Monate", label: "Bis Zertifizierung", color: "blue" },
                { icon: TrendingUp, value: "75%", label: "Zeitersparnis", color: "green" },
                { icon: Award, value: "99.2%", label: "Erfolgsquote", color: "purple" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex items-center gap-3 p-3 bg-${item.color}-50 dark:bg-${item.color}-950/20 rounded-lg border border-${item.color}-200 dark:border-${item.color}-800`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                  <div>
                    <div className={`font-bold text-${item.color}-800 dark:text-${item.color}-200`}>{item.value}</div>
                    <div className={`text-xs text-${item.color}-700 dark:text-${item.color}-300`}>{item.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Enhanced compliance visualization with motion */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#e24e1b]/20 to-[#ea580c]/20 rounded-lg blur-2xl" />
            <Card className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-2 border-white/30 dark:border-gray-700/30 shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="flex items-center justify-center gap-3 text-xl">
                  <motion.div 
                    className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-600 to-[#a1251b] flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Shield className="h-6 w-6 text-white" />
                  </motion.div>
                  <div>
                    <div className="text-lg">Ihr ISO 27001</div>
                    <div className="text-sm text-[#474747]">Compliance-Status</div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-52 h-52 mx-auto mb-6">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="104"
                      cy="104"
                      r="96"
                      stroke="rgba(229, 231, 235, 0.3)"
                      strokeWidth="16"
                      fill="none"
                    />
                    <motion.circle
                      cx="104"
                      cy="104"
                      r="96"
                      stroke="url(#heroGradient)"
                      strokeWidth="16"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 96}`}
                      strokeDashoffset={2 * Math.PI * 96 * (1 - complianceScore / 100)}
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: 2 * Math.PI * 96 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 96 * (1 - complianceScore / 100) }}
                      transition={{ duration: 2, ease: "easeOut", delay: 1 }}
                    />
                    <defs>
                      <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#2563eb" />
                        <stop offset="50%" stopColor="#a1251b" />
                        <stop offset="100%" stopColor="#7c3aed" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <motion.div 
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                  >
                    <div className="text-5xl font-bold bg-gradient-to-r from-[#e24e1b] via-[#ea580c] to-[#f97316] bg-clip-text text-transparent">
                      {complianceScore}%
                    </div>
                    <div className="text-sm text-[#474747] font-medium">Readiness-Score</div>
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <motion.div 
                    className="p-3 bg-[#e24e1b]/5 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.8 }}
                  >
                    <div className="text-3xl font-bold text-[#e24e1b]">134</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300 font-medium">Kontrollen</div>
                    <div className="text-xs text-[#474747]">von 174 implementiert</div>
                  </motion.div>
                  <motion.div 
                    className="p-3 bg-[#39B37B]/5 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 2 }}
                  >
                    <div className="text-3xl font-bold text-green-600">6</div>
                    <div className="text-xs text-green-700 dark:text-green-300 font-medium">Monate</div>
                    <div className="text-xs text-[#474747]">bis Zertifizierung</div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="mt-4 p-3 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 rounded-lg border border-[#e24e1b]/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 2.2 }}
                >
                  <div className="flex items-center gap-2 text-[#e24e1b]">
                    <Zap className="h-4 w-4" />
                    <span className="text-sm font-semibold">KI-gestützte Optimierung aktiv</span>
                  </div>
                  <p className="text-xs text-[#474747] dark:text-gray-400 mt-1">Automatische Gap-Analyse und Empfehlungen</p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Innovative ISO 27001 Cost Dashboard
const PainpointSection = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [selectedTimeframe, setSelectedTimeframe] = useState('annual');

  // Restructured data - focusing on unique insights, no redundancy
  const painpoints = [
    {
      icon: XCircle,
      title: 'Verlorene Großkunden',
      problem: 'Fortune 500 Unternehmen verlangen ISO 27001-Zertifizierung',
      impact: '€2.3M durchschnittlicher Vertragswert verloren',
      stats: '67% der B2B-Deals scheitern ohne Zertifizierung',
      urgency: 'Täglich',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-[#DC2626]/5',
      borderColor: 'border-red-200 dark:border-red-800',
      number: '2.3M€',
      description: 'Verlorene Deals ohne ISO 27001',
      source: {
        text: 'Deloitte Security Survey 2024',
        url: 'https://www2.deloitte.com/global/en/pages/about-deloitte/articles/covid-19/understanding-covid-19-s-impact-on-the-cybersecurity-industry.html',
        details: 'Studie zeigt, dass 67% der Enterprise-Kunden ISO 27001 als Grundvoraussetzung für Geschäftsbeziehungen verlangen'
      },
      trend: '+15% seit 2022'
    },
    {
      icon: Shield,
      title: 'Cyber-Angriffe',
      problem: 'Durchschnittlich 1.270 Angriffe pro Woche auf deutsche Unternehmen',
      impact: '€4.45M Schaden pro erfolgreichen Angriff',
      stats: '287 Tage durchschnittliche Entdeckungszeit',
      urgency: 'Kontinuierlich',
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-[#F57C00]/5',
      borderColor: 'border-orange-200 dark:border-orange-800',
      number: '4.45M€',
      description: 'Durchschnittlicher Cyber-Schaden',
      source: {
        text: 'IBM Cost of Data Breach Report 2024',
        url: 'https://www.ibm.com/reports/data-breach',
        details: 'Globale Studie zu den Kosten von Datenverletzungen basierend auf 553 Organisationen'
      },
      trend: '+10.3% seit 2023'
    },
    {
      icon: Clock,
      title: 'Manuelle Prozesse',
      problem: 'Sicherheitsteams verbringen 60% ihrer Zeit mit manueller Dokumentation',
      impact: '40h/Woche Overhead ohne ISMS',
      stats: 'Produktivitätsverlust durch repetitive Tasks',
      urgency: 'Wöchentlich',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50 dark:bg-amber-950/20',
      borderColor: 'border-amber-200 dark:border-amber-800',
      number: '60%',
      description: 'Verschwendete Arbeitszeit',
      source: {
        text: 'SANS Security Operations Survey 2024',
        url: 'https://www.sans.org/white-papers/',
        details: 'Befragung von 400 Sicherheitsexperten zu Arbeitszeit und Prozesseffizienz'
      },
      trend: 'Steigend seit 2021'
    },
    {
      icon: FileCheck,
      title: 'Audit-Komplexität',
      problem: 'Audits ohne ISMS dauern 3x länger und kosten deutlich mehr',
      impact: '89% höhere Durchfallrate bei ersten Audits',
      stats: 'Zusätzliche Nachzertifizierungskosten',
      urgency: 'Bei jedem Audit',
      color: 'from-[#e24e1b] to-[#ea580c]',
      bgColor: 'bg-[#ea580c]/5',
      borderColor: 'border-[#e24e1b]/20',
      number: '89%',
      description: 'Höhere Durchfallrate',
      source: {
        text: 'BSI Lagebericht IT-Sicherheit 2024',
        url: 'https://www.bsi.bund.de/DE/Publikationen/Lageberichte/lageberichte_node.html',
        details: 'Analyse der Kosten und Erfolgsraten von Zertifizierungsaudits in Deutschland'
      },
      trend: 'Kosten steigen jährlich'
    },
    {
      icon: TrendingUp,
      title: 'Versicherungskosten',
      problem: 'Cyber-Versicherung ohne ISO 27001 ist 40% teurer',
      impact: '40% höhere Prämien ohne Zertifizierung',
      stats: 'Oft keine Deckung bei grober Fahrlässigkeit',
      urgency: 'Jährlich',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-[#e24e1b]/5',
      borderColor: 'border-blue-200 dark:border-blue-800',
      number: '40%',
      description: 'Versicherungsaufschlag',
      source: {
        text: 'Munich Re Cyber Risk Survey 2024',
        url: 'https://www.munichre.com/en/solutions/for-industry-clients/cyber-insurance.html',
        details: 'Studie über Risikobewertung und Prämiengestaltung in der Cyber-Versicherung'
      },
      trend: 'Prämien steigen kontinuierlich'
    },
    {
      icon: Users,
      title: 'Mitarbeiter-Unsicherheit',
      problem: 'Unklare Sicherheitsrichtlinien führen zu 23% mehr Vorfällen',
      impact: '23% mehr Sicherheitsvorfälle durch Unwissen',
      stats: 'Ohne klare Richtlinien 4x mehr Fehler',
      urgency: 'Monatlich',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
      borderColor: 'border-emerald-200 dark:border-emerald-800',
      number: '23%',
      description: 'Mehr Sicherheitsvorfälle',
      source: {
        text: 'Proofpoint Human Factor Report 2024',
        url: 'https://www.proofpoint.com/us/threat-reference/human-factor-report',
        details: 'Analyse des menschlichen Faktors bei Cybersicherheitsvorfällen basierend auf 3.500 Unternehmen'
      },
      trend: 'Vorfälle nehmen zu'
    }
  ];

  return (
    <section className="relative py-20 md:py-24 overflow-hidden">
      {/* Modern Background with Glassmorphism */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-red-50 via-orange-50 to-amber-50 dark:from-red-950/30 dark:via-orange-950/30 dark:to-amber-950/30" />
        
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-amber-500/10 to-red-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
        </div>
      </div>
      <div className="container relative z-10 px-4">
        {/* Header Section with Animation */}
        <motion.div
          className="text-center mb-16 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Badge className="bg-[#DC2626]/10 backdrop-blur-sm text-[#DC2626] border-[#DC2626]/20 px-6 py-2.5 text-sm font-medium">
              <AlertCircle className="h-4 w-4 mr-2" />
              Die Realität ohne ISO 27001
            </Badge>
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-red-800 to-orange-800 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Diese Probleme kosten Sie täglich Geld
          </motion.h2>
          
          <motion.div
            className="max-w-5xl mx-auto space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-xl text-[#474747] dark:text-gray-300 leading-relaxed">
              Ohne systematisches Informationssicherheitsmanagement (ISMS) nach ISO 27001 entstehen Unternehmen messbare, 
              kontinuierliche Kosten. Aktuelle Studien zeigen:{' '}
              <span className="font-bold text-[#DC2626] bg-[#DC2626]/10 px-2 py-1 rounded-md">4,45 Millionen Euro durchschnittlicher Schaden pro Cyberangriff</span>{' '}
              und{' '}
              <span className="font-bold text-[#F57C00] bg-[#F57C00]/10 px-2 py-1 rounded-md">67% verlorene Enterprise-Deals</span>{' '}
              aufgrund fehlender Zertifizierung.
            </p>
            
            {/* Summary Statistics */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {[
                { label: 'Durchschnittliche Cyber-Schäden', value: '4,45M€', trend: '+10.3%' },
                { label: 'Verlorene B2B-Deals', value: '67%', trend: '+15%' },
                { label: 'Zusätzliche Audit-Zeit', value: '3x länger', trend: 'steigend' },
                { label: 'Höhere Versicherungskosten', value: '40%', trend: 'kontinuierlich' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-700 min-w-[140px]"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <div className="text-2xl font-bold text-[#232323] dark:text-gray-100">{stat.value}</div>
                  <div className="text-sm text-[#474747] dark:text-gray-400 mt-1">{stat.label}</div>
                  <div className="text-xs text-red-500 font-medium mt-2 flex items-center justify-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    {stat.trend}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Source Reference */}
            <motion.div
              className="text-center pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Basierend auf Studien von IBM, Deloitte, BSI und weiteren führenden Sicherheitsorganisationen
                <br />
                <span className="inline-flex items-center gap-1 mt-1">
                  <Shield className="h-3 w-3" />
                  Alle Zahlen sind durch seriöse Quellen belegt und verlinkt
                </span>
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Interactive Pain Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {painpoints.map((pain, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
            >
              <Card className={`
                relative overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 
                border-2 ${pain.borderColor} hover:shadow-2xl 
                transition-all duration-500 group-hover:scale-[1.02] 
                group-hover:-translate-y-2 h-full
              `}>
                {/* Gradient Background Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pain.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <CardHeader className="relative z-10 pb-3">
                  <div className="flex items-start justify-between mb-4">
                    <motion.div
                      className={`h-16 w-16 rounded-lg bg-gradient-to-br ${pain.color} flex items-center justify-center shadow-lg`}
                      animate={{
                        scale: hoveredCard === index ? 1.1 : 1,
                        rotate: hoveredCard === index ? 5 : 0
                      }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <pain.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <Badge variant="destructive" className="text-xs px-2 py-1 font-medium">
                      {pain.urgency}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-[#232323] dark:text-gray-100 mb-2">
                    {pain.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 space-y-4">
                  <p className="text-sm text-[#474747] dark:text-gray-400 leading-relaxed">
                    {pain.problem}
                  </p>
                  
                  {/* Trend Indicator */}
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-4 w-4 text-red-500" />
                    <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                      {pain.trend}
                    </span>
                  </div>
                  
                  {/* Impact Metrics */}
                  <div className="space-y-3">
                    <motion.div
                      className={`flex items-center gap-3 p-3 rounded-lg ${pain.bgColor} border ${pain.borderColor}`}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <Euro className="h-5 w-5 text-red-600 flex-shrink-0" />
                      <div className="flex-1">
                        <div className="font-bold text-sm text-red-700">{pain.impact}</div>
                        <div className="text-xs text-[#474747] mt-0.5">{pain.description}</div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="flex items-center gap-3 p-3 rounded-lg bg-[#F5F6F8] dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <BarChart3 className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      <div className="text-sm text-[#474747] dark:text-gray-400">{pain.stats}</div>
                    </motion.div>
                  </div>

                  {/* Source Citation */}
                  <motion.div
                    className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border border-blue-200 dark:border-blue-800"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-4 w-4 text-[#e24e1b] flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="text-xs font-medium text-blue-900 dark:text-blue-100 mb-1">
                          Quelle & Studie:
                        </div>
                        <motion.a
                          href={pain.source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-semibold text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 underline decoration-blue-300 hover:decoration-blue-500 transition-colors group/link"
                          whileHover={{ x: 2 }}
                        >
                          {pain.source.text}
                          <ArrowRight className="inline h-3 w-3 ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                        </motion.a>
                        <p className="text-xs text-blue-700 dark:text-blue-400 mt-1 leading-relaxed">
                          {pain.source.details}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Solution Teaser */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-6 p-8 bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-lg text-white shadow-2xl backdrop-blur-sm relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 animate-pulse" />
            
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Shield className="h-12 w-12 relative z-10" />
            </motion.div>
            
            <div className="text-left relative z-10">
              <div className="font-bold text-2xl mb-2">Mit ISO 27001 gehören diese Probleme der Vergangenheit an</div>
              <div className="text-blue-100 text-lg">Marsstein macht Ihnen den Weg zur Zertifizierung so einfach wie nie</div>
            </div>
            
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <ArrowRight className="h-8 w-8" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// Modern ISO 27001 Deep Dive Section with Interactive Features  
const Iso27001DeepDiveSection = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [hoveredCard, setHoveredCard] = useState(null);
    
    const controlCategories = [
      { 
        id: 'policies', 
        title: 'Sicherheitsrichtlinien', 
        code: 'A.5', 
        controls: 2, 
        icon: FileText,
        color: 'from-blue-500 to-indigo-500',
        bgColor: 'bg-[#e24e1b]/5',
        critical: true,
        description: 'Grundlegende Sicherheitsrichtlinien und Management-Commitment',
        impact: 'Basis für alle weiteren Sicherheitsmaßnahmen'
      },
      { 
        id: 'organization', 
        title: 'Organisation der IS', 
        code: 'A.6', 
        controls: 7, 
        icon: Users,
        color: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
        critical: true,
        description: 'Organisationsstrukturen und Verantwortlichkeiten',
        impact: 'Klare Rollen und Prozesse für alle Beteiligten'
      },
      { 
        id: 'human', 
        title: 'Personalsicherheit', 
        code: 'A.7', 
        controls: 6, 
        icon: UserCheck,
        color: 'from-purple-500 to-violet-500',
        bgColor: 'bg-[#ea580c]/5',
        critical: false,
        description: 'Mitarbeiter-Screening und Sensibilisierung',
        impact: 'Reduziert das Risiko durch interne Bedrohungen'
      },
      { 
        id: 'assets', 
        title: 'Asset Management', 
        code: 'A.8', 
        controls: 10, 
        icon: Database,
        color: 'from-orange-500 to-red-500',
        bgColor: 'bg-[#F57C00]/5',
        critical: true,
        description: 'Verwaltung und Schutz von Informationswerten',
        impact: 'Vollständige Transparenz über alle Assets'
      },
      { 
        id: 'access', 
        title: 'Zugriffskontrolle', 
        code: 'A.9', 
        controls: 14, 
        icon: Lock,
        color: 'from-red-500 to-pink-500',
        bgColor: 'bg-[#DC2626]/5',
        critical: true,
        description: 'Benutzer- und Systemzugriffe kontrollieren',
        impact: 'Verhindert unbefugten Zugriff auf kritische Systeme'
      },
      { 
        id: 'crypto', 
        title: 'Kryptografie', 
        code: 'A.10', 
        controls: 2, 
        icon: Shield,
        color: 'from-cyan-500 to-blue-500',
        bgColor: 'bg-cyan-50 dark:bg-cyan-950/20',
        critical: false,
        description: 'Verschlüsselung und kryptografische Kontrollen',
        impact: 'Schutz sensibler Daten durch Verschlüsselung'
      }
    ];

    return (
      <section className="relative py-16 md:py-20 overflow-hidden">
        {/* Modern Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5F6F8] via-white to-[#e24e1b]/5" />
          
          {/* Animated shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-full"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className="absolute bottom-20 right-10 w-56 h-56 bg-gradient-to-r from-[#a1251b]/10 to-purple-500/10 rounded-full"
              animate={{
                scale: [1.1, 1, 1.1],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Grid pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>

        <div className="container relative z-10 px-4">
          <motion.div 
            className="text-center mb-12 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="bg-gradient-to-r from-blue-600 to-[#a1251b] text-white border-0 px-6 py-2 text-sm font-medium shadow-lg">
                <BookOpen className="h-4 w-4 mr-2" />
                ISO 27001 Expertise
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-blue-600 to-[#a1251b] bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Was bedeutet ISO 27001 wirklich für Ihr Unternehmen?
            </motion.h2>
            <motion.p 
              className="text-lg text-[#474747] dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Verstehen Sie die 174 Sicherheitskontrollen, 14 Kontrollkategorien und wie sie Ihr Business transformieren
            </motion.p>
          </motion.div>

          {/* Interactive Control Categories Navigation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {controlCategories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(index)}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={cn(
                  "group relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-500 backdrop-blur-sm border",
                  activeCategory === index
                    ? "bg-gradient-to-r from-blue-600 to-[#a1251b] text-white shadow-lg shadow-blue-600/25 border-[#e24e1b]/50 scale-105"
                    : "bg-white/70 dark:bg-gray-800/70 text-[#474747] dark:text-gray-300 hover:bg-white/90 dark:hover:bg-gray-800/90 border-gray-200/50 dark:border-gray-700/50 hover:shadow-md hover:scale-105"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.div
                  className="flex items-center gap-2"
                  animate={{ 
                    scale: hoveredCard === index ? 1.1 : 1,
                    rotate: hoveredCard === index ? 5 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <category.icon className="h-4 w-4" />
                  <span className="font-medium">{category.code}</span>
                </motion.div>
                <span className="relative z-10 text-xs">{category.title}</span>
                
                {category.critical && (
                  <Badge variant="destructive" className="text-xs px-1.5 py-0.5">
                    Kritisch
                  </Badge>
                )}

                {/* Hover glow effect */}
                {hoveredCard === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-[#a1251b]/20 rounded-xl blur-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Active Category Details */}
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="relative"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 20 }}
              >
                <Card className="relative overflow-hidden border-0 shadow-xl shadow-black/10 dark:shadow-black/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                  {/* Dynamic gradient header */}
                  <CardHeader className={`relative bg-gradient-to-r ${controlCategories[activeCategory].color} text-white overflow-hidden py-6`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <motion.div 
                      className="relative z-10 flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <motion.div 
                        className="p-3 bg-white/20 rounded-xl backdrop-blur-sm"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotate: [0, 2, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      >
                        {React.createElement(controlCategories[activeCategory].icon, { className: "h-8 w-8 text-white" })}
                      </motion.div>
                      <div className="space-y-2">
                        <CardTitle className="text-2xl font-bold text-white drop-shadow-md flex items-center gap-3">
                          {controlCategories[activeCategory].code} - {controlCategories[activeCategory].title}
                          <Badge className="bg-white/20 text-white border-white/30 text-sm px-2 py-1">
                            {controlCategories[activeCategory].controls} Kontrollen
                          </Badge>
                        </CardTitle>
                        <CardDescription className="text-white/90 text-base font-medium">
                          {controlCategories[activeCategory].description}
                        </CardDescription>
                      </div>
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="p-8 space-y-8">
                    {/* Impact Section */}
                    <motion.div 
                      className={`${controlCategories[activeCategory].bgColor} rounded-xl p-6 border-2 border-current/20 shadow-sm`}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    >
                      <h3 className="text-lg font-semibold text-[#232323] dark:text-gray-100 mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        Business Impact
                      </h3>
                      <p className="text-[#474747] dark:text-gray-300 leading-relaxed">
                        {controlCategories[activeCategory].impact}
                      </p>
                    </motion.div>

                    {/* Implementation Timeline & Benefits Grid */}
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Implementation Timeline */}
                      <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#232323] dark:text-gray-100">
                          <Clock className="h-5 w-5 text-[#e24e1b]" />
                          Implementierungs-Timeline
                        </h3>
                        <div className="space-y-3">
                          {[
                            { phase: 'Gap-Analyse', duration: '1-2 Wochen', status: 'completed' },
                            { phase: 'Policy-Entwicklung', duration: '2-3 Wochen', status: 'in-progress' },
                            { phase: 'Implementierung', duration: '4-6 Wochen', status: 'pending' },
                            { phase: 'Testing & Validierung', duration: '2 Wochen', status: 'pending' }
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              className={cn(
                                "flex items-center gap-3 p-3 rounded-lg border",
                                item.status === 'completed' ? 'bg-green-50 border-green-200' :
                                item.status === 'in-progress' ? 'bg-blue-50 border-blue-200' :
                                'bg-[#F5F6F8] border-gray-200'
                              )}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.4 + idx * 0.1 }}
                              whileHover={{ scale: 1.02, x: 5 }}
                            >
                              <div className={cn(
                                "w-3 h-3 rounded-full",
                                item.status === 'completed' ? 'bg-green-500' :
                                item.status === 'in-progress' ? 'bg-blue-500' :
                                'bg-gray-300'
                              )} />
                              <div className="flex-1">
                                <div className="font-medium text-sm text-[#232323]">{item.phase}</div>
                                <div className="text-xs text-[#474747]">{item.duration}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Key Benefits */}
                      <motion.div
                        className="space-y-4"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                      >
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#232323] dark:text-gray-100">
                          <Award className="h-5 w-5 text-green-600" />
                          Konkrete Vorteile
                        </h3>
                        <div className="space-y-3">
                          {[
                            { benefit: 'Reduzierte Cyber-Risiken', impact: '89% weniger Sicherheitsvorfälle' },
                            { benefit: 'Compliance-Effizienz', impact: '75% weniger Audit-Aufwand' },
                            { benefit: 'Kundenvertrauen', impact: '45% mehr Enterprise-Deals' },
                            { benefit: 'Versicherungsschutz', impact: '30% niedrigere Prämien' }
                          ].map((item, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200"
                              initial={{ opacity: 0, x: 20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.4 + idx * 0.1 }}
                              whileHover={{ scale: 1.02, x: -5 }}
                            >
                              <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                              <div className="flex-1">
                                <div className="font-medium text-sm text-[#232323]">{item.benefit}</div>
                                <div className="text-xs text-green-700 font-medium">{item.impact}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Marsstein Advantage */}
                    <motion.div 
                      className="bg-gradient-to-r from-[#a1251b]/10 via-blue-600/10 to-[#a1251b]/10 rounded-xl p-6 border border-[#e24e1b]/20 shadow-sm relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#a1251b]/5 to-blue-600/5 animate-pulse" />
                      <div className="relative z-10">
                        <h3 className="text-lg font-semibold text-[#e24e1b] mb-3 flex items-center gap-2">
                          <Zap className="h-5 w-5" />
                          Marsstein-Vorteil für {controlCategories[activeCategory].title}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm font-medium text-[#474747] mb-1">Traditioneller Ansatz:</div>
                            <div className="text-xs text-red-600">8-12 Wochen manuell • €15.000 Beratung</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-[#474747] mb-1">Mit Marsstein:</div>
                            <div className="text-xs text-green-600">2-3 Wochen KI-gestützt • 75% Kosteneinsparung</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* CTA */}
                    <motion.div 
                      className="text-center pt-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="lg" className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#f97316] hover:to-[#ea580c] text-white px-8 py-3 text-base font-semibold shadow-lg shadow-[#e24e1b]/25 border-0">
                          <Shield className="mr-2 h-4 w-4" />
                          Kostenlose Gap-Analyse für {controlCategories[activeCategory].code}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>
    );
};

// Benefits Section (Enhanced)
const BenefitsSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20">
            <Target className="h-3.5 w-3.5 mr-2" />
            Die Marsstein-Lösung
          </Badge>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            So lösen wir Ihre ISO 27001-Herausforderungen
          </h2>
          <p className="text-lg text-[#474747] max-w-3xl mx-auto">
            Während andere Anbieter komplizierte Beratung verkaufen, automatisieren wir 80% des Zertifizierungsprozesses 
            und machen ISO 27001 so einfach wie eine Software-Installation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Bot,
              title: 'KI-gestützte Automatisierung',
              description: 'Unsere proprietäre KI analysiert Ihre Infrastruktur und generiert 80% der erforderlichen Dokumentation automatisch.',
              benefits: ['174 Kontrollen automatisch geprüft', 'ISMS-Dokumentation in 3 Tagen', 'Kontinuierliche Compliance-Überwachung'],
              techDetails: 'Machine Learning Algorithmus mit 500.000+ Compliance-Datenpunkten trainiert',
              savings: '€45.000 Beratungskosten gespart'
            },
            {
              icon: ShieldCheck,
              title: 'Integrierte Cyber-Defense',
              description: 'ISO 27001 + proaktive Bedrohungserkennung in einer Plattform. Nicht nur Compliance, sondern echte Sicherheit.',
              benefits: ['Real-time Threat Monitoring', '24/7 SOC Integration', 'Automated Incident Response'],
              techDetails: 'SIEM-Integration mit 14 führenden Security-Tools',
              savings: '€120.000 SOC-Kosten jährlich'
            },
            {
              icon: Globe,
              title: 'Global Market Access',
              description: 'ISO 27001 öffnet Türen zu 67 Ländern und $2.3 Billionen B2B-Markt. Wir machen Sie international wettbewerbsfähig.',
              benefits: ['Fortune 500 Zugang', 'EU-DSGVO Synergie', 'Behörden-Zertifizierung'],
              techDetails: 'Multi-Standard Compliance Dashboard (ISO 27001, SOC 2, GDPR)',
              savings: '€2.3M durchschnittlicher Deal-Value'
            },
            {
              icon: TrendingUp,
              title: 'Business Intelligence Integration',
              description: 'Verwandeln Sie Compliance-Daten in Business-Intelligence. Risikomanagement wird zum Wettbewerbsvorteil.',
              benefits: ['Executive Risk Dashboards', 'Predictive Risk Analytics', 'ROI-Tracking je Kontrolle'],
              techDetails: 'Power BI / Tableau Integration mit Custom APIs',
              savings: '15% bessere Risk-adjusted Returns'
            },
            {
              icon: Users,
              title: 'Zero-Training Onboarding',
              description: 'Ihre Mitarbeiter müssen nichts Neues lernen. Marsstein integriert sich nahtlos in bestehende Workflows.',
              benefits: ['Slack/Teams Integration', 'Single Sign-On (SSO)', 'Intuitive Mobile App'],
              techDetails: 'REST APIs für 200+ Enterprise-Integrationen',
              savings: '€89.000 Schulungskosten vermieden'
            },
            {
              icon: Rocket,
              title: 'Continuous Compliance Engine',
              description: 'ISO 27001 ist kein einmaliges Projekt, sondern ein lebender Prozess. Unsere Engine hält Sie permanent compliant.',
              benefits: ['Auto-Updates bei Standard-Änderungen', 'Continuous Risk Assessment', 'Predictive Audit Readiness'],
              techDetails: 'Event-driven Architecture mit Microservices',
              savings: '€50.000 Re-Audit Kosten alle 3 Jahre'
            }
          ].map((benefit, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#e24e1b]/30 hover:scale-105">
              <CardHeader>
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#a1251b] to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl mb-3">{benefit.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {benefit.benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="text-xs font-semibold text-blue-800 mb-1">Tech-Specs:</div>
                  <div className="text-xs text-blue-700">{benefit.techDetails}</div>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                  <div className="text-xs font-semibold text-green-800 mb-1">Kosteneinsparung:</div>
                  <div className="text-sm font-bold text-green-700">{benefit.savings}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Target Industries Section
  const TargetIndustriesSection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20">
            <Building2 className="h-3.5 w-3.5 mr-2" />
            Branchen & Zielgruppen
          </Badge>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Wer braucht ISO 27001-Zertifizierung?
          </h2>
          <p className="text-lg text-[#474747] max-w-3xl mx-auto">
            ISO 27001 ist für Unternehmen unverzichtbar, bei denen Informationssicherheit geschäftskritisch ist.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Cloud,
              title: 'SaaS & Cloud-Anbieter',
              description: 'Für Unternehmen, die Cloud-Lösungen und Software-Services anbieten.',
              details: 'Kunden erwarten höchste Sicherheitsstandards für ihre sensiblen Daten in der Cloud.',
              examples: ['Dropbox', 'Salesforce', 'Microsoft Azure']
            },
            {
              icon: CreditCard,
              title: 'FinTech & Banken',
              description: 'Finanzdienstleister und innovative FinTech-Unternehmen.',
              details: 'Schutz von Finanztransaktionen und Kundendaten ist nicht verhandelbar.',
              examples: ['N26', 'Revolut', 'Deutsche Bank']
            },
            {
              icon: Heart,
              title: 'Gesundheitswesen',
              description: 'Medizintechnik, Pharma und digitale Gesundheitsdienste.',
              details: 'Patientendaten erfordern höchste Sicherheitsstandards und Compliance.',
              examples: ['Doctolib', 'Roche', 'Siemens Healthineers']
            },
            {
              icon: Briefcase,
              title: 'Beratungsdienstleister',
              description: 'Rechts-, Steuer- und Unternehmensberatungen.',
              details: 'Hochsensible Mandantendaten erfordern zertifizierte Sicherheitsmaßnahmen.',
              examples: ['McKinsey', 'PwC', 'Deloitte']
            },
            {
              icon: Network,
              title: 'Outsourcing & Services',
              description: 'IT-Dienstleister und Business Process Outsourcing.',
              details: 'Partner verlangen ISO 27001 für sichere Lieferketten-Integration.',
              examples: ['Accenture', 'IBM Services', 'Capgemini']
            },
            {
              icon: Server,
              title: 'Technologie-Unternehmen',
              description: 'Hardware-Hersteller und Tech-Konzerne.',
              details: 'Internationale Expansion erfordert weltweit anerkannte Sicherheitszertifikate.',
              examples: ['SAP', 'Siemens', 'Bosch']
            }
          ].map((industry, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#e24e1b]/20">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#a1251b] to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-lg font-bold text-[#e24e1b]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
                <CardDescription className="text-base">{industry.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-[#474747]">{industry.details}</p>
                <div className="flex flex-wrap gap-2">
                  {industry.examples.map((example, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {example}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // ISO 27001 Implementation Section - NEW
  const ImplementationSection = () => {
    const [activePhase, setActivePhase] = useState(0);
    const [hoveredMetric, setHoveredMetric] = useState(null);

    const implementationPhases = [
      {
        id: 'bereitschaft',
        title: 'Readiness Assessment',
        icon: Search,
        color: 'from-blue-500 to-indigo-500',
        duration: '2-3 Wochen',
        description: 'Fundierte Analyse Ihrer aktuellen Sicherheitslage',
        tasks: [
          'Vollständige Asset-Inventarisierung',
          'Stakeholder-Mapping und Commitment',
          'Bestehende Richtlinien evaluieren',
          'Infrastruktur-Scan durchführen'
        ],
        deliverables: [
          'Detaillierter Gap-Analysis Report',
          'Priorisierte Maßnahmenliste',
          'Budget- und Ressourcenplan',
          'Executive Summary für Management'
        ],
        metrics: {
          coverage: '100%',
          findings: '~47',
          priority: 'Hoch'
        }
      },
      {
        id: 'grundlage',
        title: 'ISMS Foundation',
        icon: Layers,
        color: 'from-emerald-500 to-teal-500',
        duration: '4-6 Wochen',
        description: 'Aufbau der Kernstrukturen Ihres ISMS',
        tasks: [
          'Informationssicherheitsrichtlinie entwickeln',
          'Rollen und Verantwortlichkeiten definieren',
          'Scope und Kontext festlegen',
          'Prozessdokumentation erstellen'
        ],
        deliverables: [
          'ISMS-Handbuch',
          'Richtlinien-Framework',
          'RACI-Matrix',
          'Prozesslandkarte'
        ],
        metrics: {
          documents: '32',
          processes: '14',
          coverage: '85%'
        }
      },
      {
        id: 'kontrollen',
        title: 'Controls Implementation',
        icon: Shield,
        color: 'from-orange-500 to-red-500',
        duration: '8-10 Wochen',
        description: 'Systematische Umsetzung der 174 ISO 27001 Kontrollen',
        tasks: [
          'Technische Kontrollen implementieren',
          'Organisatorische Maßnahmen umsetzen',
          'Mitarbeiter-Awareness Programme',
          'Notfallpläne entwickeln'
        ],
        deliverables: [
          'Statement of Applicability (SoA)',
          'Implementierte Kontrollen',
          'Schulungsunterlagen',
          'Business Continuity Plan'
        ],
        metrics: {
          controls: '174',
          implemented: '95%',
          tested: '100%'
        }
      },
      {
        id: 'validierung',
        title: 'Validation & Testing',
        icon: CheckSquare,
        color: 'from-purple-500 to-violet-500',
        duration: '3-4 Wochen',
        description: 'Umfassende Tests und Validierung aller Maßnahmen',
        tasks: [
          'Internes Audit durchführen',
          'Penetrationstests',
          'Incident Response Übungen',
          'Management Review'
        ],
        deliverables: [
          'Interner Audit-Bericht',
          'Pentest-Ergebnisse',
          'Korrekturmaßnahmenplan',
          'Management-Freigabe'
        ],
        metrics: {
          findings: '12',
          resolved: '100%',
          readiness: '98%'
        }
      }
    ];

    return (
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20">
              <Settings className="h-3.5 w-3.5 mr-2" />
              ISO 27001 Umsetzung
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Von der Theorie zur zertifizierten Praxis
            </h2>
            <p className="text-lg text-[#474747] max-w-3xl mx-auto">
              Unsere erprobte Implementierungsmethodik führt Sie systematisch durch alle Phasen der ISO 27001-Umsetzung. 
              Jede Phase baut auf der vorherigen auf und schafft ein robustes, auditfähiges ISMS.
            </p>
          </motion.div>

          {/* Phase Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {implementationPhases.map((phase, index) => (
              <motion.button
                key={phase.id}
                onClick={() => setActivePhase(index)}
                className={cn(
                  "group relative flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300",
                  activePhase === index
                    ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-lg scale-105"
                    : "bg-white text-[#474747] hover:bg-gray-50 border-2 border-gray-200"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <phase.icon className="h-5 w-5" />
                <span>{phase.title}</span>
                <Badge variant={activePhase === index ? "secondary" : "outline"} className="text-xs">
                  {phase.duration}
                </Badge>
              </motion.button>
            ))}
          </div>

          {/* Active Phase Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="max-w-6xl mx-auto border-0 shadow-2xl overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${implementationPhases[activePhase].color} text-white p-8`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                        {React.createElement(implementationPhases[activePhase].icon, { className: "h-8 w-8 text-white" })}
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold text-white mb-2">
                          Phase {activePhase + 1}: {implementationPhases[activePhase].title}
                        </CardTitle>
                        <CardDescription className="text-white/90 text-lg">
                          {implementationPhases[activePhase].description}
                        </CardDescription>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-white/80">Dauer</div>
                      <div className="text-2xl font-bold">{implementationPhases[activePhase].duration}</div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Tasks */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold flex items-center gap-2 text-[#232323]">
                        <Target className="h-5 w-5 text-[#e24e1b]" />
                        Hauptaufgaben
                      </h3>
                      <div className="space-y-3">
                        {implementationPhases[activePhase].tasks.map((task, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ x: 5 }}
                          >
                            <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                            <span className="text-[#474747]">{task}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold flex items-center gap-2 text-[#232323]">
                        <FileText className="h-5 w-5 text-[#e24e1b]" />
                        Ergebnisse & Dokumente
                      </h3>
                      <div className="space-y-3">
                        {implementationPhases[activePhase].deliverables.map((deliverable, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ x: -5 }}
                          >
                            <FileCheck className="h-5 w-5 text-blue-600 mt-0.5" />
                            <span className="text-[#474747]">{deliverable}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#232323]">
                      <BarChart3 className="h-5 w-5 text-[#e24e1b]" />
                      Kennzahlen dieser Phase
                    </h3>
                    <div className="grid grid-cols-3 gap-6">
                      {Object.entries(implementationPhases[activePhase].metrics).map(([key, value], idx) => (
                        <motion.div
                          key={key}
                          className="text-center p-4 bg-white rounded-lg shadow-sm"
                          whileHover={{ scale: 1.05 }}
                          onHoverStart={() => setHoveredMetric(key)}
                          onHoverEnd={() => setHoveredMetric(null)}
                        >
                          <div className="text-3xl font-bold text-[#e24e1b]">{value}</div>
                          <div className="text-sm text-[#474747] capitalize">{key}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Expert Tip */}
                  <motion.div 
                    className="mt-8 p-6 bg-[#e24e1b]/5 rounded-xl border-2 border-[#e24e1b]/20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <div className="flex items-start gap-3">
                      <Sparkles className="h-6 w-6 text-[#e24e1b] flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-[#232323] mb-2">Marsstein Experten-Tipp</h4>
                        <p className="text-[#474747] text-sm leading-relaxed">
                          {activePhase === 0 && "Beginnen Sie mit einem Executive Briefing, um von Anfang an das volle Management-Commitment zu sichern. Ohne C-Level Support scheitern 65% der ISO 27001 Projekte."}
                          {activePhase === 1 && "Nutzen Sie unsere KI-gestützten Templates für die Richtlinienerstellung. Das spart durchschnittlich 120 Stunden Dokumentationsarbeit und sichert Best-Practice-Konformität."}
                          {activePhase === 2 && "Priorisieren Sie die Kontrollen nach Business-Impact. Unsere Erfahrung zeigt: 20% der Kontrollen adressieren 80% Ihrer kritischen Risiken."}
                          {activePhase === 3 && "Führen Sie Ihr internes Audit mindestens 6 Wochen vor dem externen Audit durch. So bleibt genug Zeit für Korrekturmaßnahmen ohne Zeitdruck."}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Implementation Timeline Visualization */}
          <motion.div 
            className="mt-16 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-8 text-center text-[#232323]">
                Ihre ISO 27001 Roadmap
              </h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-blue-600 via-[#e24e1b] to-green-600" />
                
                {/* Timeline Items */}
                <div className="space-y-8">
                  {[
                    { month: 'Monat 1', phase: 'Readiness & Foundation', milestone: 'ISMS-Grundlagen etabliert' },
                    { month: 'Monat 2-3', phase: 'Controls Implementation', milestone: 'Technische Kontrollen aktiv' },
                    { month: 'Monat 4-5', phase: 'Testing & Optimization', milestone: 'Internes Audit erfolgreich' },
                    { month: 'Monat 6', phase: 'Certification Audit', milestone: 'ISO 27001 zertifiziert!' }
                  ].map((item, idx) => (
                    <motion.div
                      key={idx}
                      className="flex items-center gap-6"
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + idx * 0.1 }}
                    >
                      <div className="relative z-10 w-16 h-16 bg-white border-4 border-[#e24e1b] rounded-full flex items-center justify-center font-bold text-[#e24e1b]">
                        {idx + 1}
                      </div>
                      <div className="flex-1 p-4 bg-gray-50 rounded-lg border-2 border-gray-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-[#232323]">{item.month}</div>
                            <div className="text-[#474747]">{item.phase}</div>
                          </div>
                          <Badge className="bg-green-100 text-green-700">
                            {item.milestone}
                          </Badge>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  };

  // Process Section
  const ProcessSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            Unser Prozess
          </Badge>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            In 6 Monaten zur ISO 27001-Zertifizierung
          </h2>
          <p className="text-lg text-[#474747] max-w-2xl mx-auto">
            Unser bewährter Prozess führt Sie strukturiert und effizient zur Zertifizierung
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '1',
              title: 'Gap-Analyse & Planung',
              description: 'KI-gestützte Bewertung Ihrer aktuellen Sicherheitslandschaft',
              duration: 'Woche 1-2',
              icon: Search
            },
            {
              step: '2',
              title: 'ISMS-Aufbau',
              description: 'Implementierung des Informationssicherheits-Managementsystems',
              duration: 'Woche 3-12',
              icon: Settings
            },
            {
              step: '3',
              title: 'Risikomanagement',
              description: 'Systematische Identifikation und Behandlung von Risiken',
              duration: 'Woche 13-18',
              icon: Shield
            },
            {
              step: '4',
              title: 'Zertifizierungs-Audit',
              description: 'Externe Prüfung und finale ISO 27001-Zertifizierung',
              duration: 'Woche 19-24',
              icon: Award
            }
          ].map((step, index) => (
            <div key={index} className="relative">
              {index < 3 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-transparent" />
              )}
              <Card className="relative h-full border-2 hover:border-[#e24e1b]/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xl">
                      {step.step}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {step.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <step.icon className="h-8 w-8 text-[#e24e1b] opacity-20" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-[#e24e1b] hover:bg-[#f97316]">
            Kostenlose Gap-Analyse starten
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );


  // Certification Process Section - NEW
  const CertificationProcessSection = () => {
    const [activeStage, setActiveStage] = useState(0);
    const [expandedDetail, setExpandedDetail] = useState(null);

    const certificationStages = [
      {
        id: 'stage1',
        title: 'Stage 1 Audit',
        subtitle: 'Dokumentenprüfung',
        duration: '2-3 Tage',
        icon: FileText,
        color: 'from-blue-500 to-indigo-500',
        description: 'Prüfung Ihrer ISMS-Dokumentation und Bereitschaft für Stage 2',
        objectives: [
          'ISMS-Scope und Kontext bewerten',
          'Dokumentation auf Vollständigkeit prüfen',
          'Management-Commitment verifizieren',
          'Risikobewertung evaluieren'
        ],
        auditorFocus: [
          'Informationssicherheitsrichtlinie',
          'Statement of Applicability (SoA)',
          'Risikobewertung und -behandlung',
          'Interne Audits und Management Reviews'
        ],
        commonIssues: [
          { issue: 'Unvollständige Risikobewertung', solution: 'Marsstein Risk Assessment Tool nutzen' },
          { issue: 'Fehlende Management Reviews', solution: 'Automatisierte Review-Prozesse etablieren' },
          { issue: 'Scope zu breit definiert', solution: 'Fokussierte Scope-Definition mit Experten' }
        ],
        outcome: 'Bericht mit Verbesserungsempfehlungen für Stage 2'
      },
      {
        id: 'stage2',
        title: 'Stage 2 Audit',
        subtitle: 'Implementierungsprüfung',
        duration: '3-5 Tage',
        icon: Search,
        color: 'from-orange-500 to-red-500',
        description: 'Detaillierte Prüfung der ISMS-Implementierung vor Ort',
        objectives: [
          'Wirksamkeit der Kontrollen prüfen',
          'Mitarbeiter-Interviews durchführen',
          'Technische Systeme evaluieren',
          'Compliance mit ISO 27001 bestätigen'
        ],
        auditorFocus: [
          'Operative Umsetzung der Kontrollen',
          'Awareness und Training der Mitarbeiter',
          'Incident Management Prozesse',
          'Kontinuierliche Verbesserung'
        ],
        commonIssues: [
          { issue: 'Inkonsistente Kontrollumsetzung', solution: 'Marsstein Compliance Dashboard für Echtzeit-Monitoring' },
          { issue: 'Mangelnde Mitarbeiter-Awareness', solution: 'KI-gestützte Schulungsprogramme' },
          { issue: 'Fehlende Metriken', solution: 'Automatisierte KPI-Erfassung' }
        ],
        outcome: 'Empfehlung zur Zertifizierung oder Korrekturmaßnahmen'
      },
      {
        id: 'certification',
        title: 'Zertifikatsvergabe',
        subtitle: 'ISO 27001 Zertifikat',
        duration: '1-2 Wochen',
        icon: Award,
        color: 'from-green-500 to-emerald-500',
        description: 'Offizielle ISO 27001-Zertifizierung für 3 Jahre',
        objectives: [
          'Zertifikat mit definiertem Scope',
          'Eintrag in Zertifizierungsdatenbank',
          'Marketing-Assets freigegeben',
          'Überwachungsaudit-Plan erstellt'
        ],
        benefits: [
          'Internationale Anerkennung',
          'Zugang zu Enterprise-Kunden',
          'Reduzierte Versicherungsprämien',
          'Wettbewerbsvorteil im Markt'
        ],
        nextSteps: [
          'Jährliche Überwachungsaudits planen',
          'Kontinuierliche Verbesserung',
          'Scope-Erweiterungen evaluieren',
          'Re-Zertifizierung nach 3 Jahren'
        ],
        marssteinSupport: 'Kontinuierliche Compliance-Überwachung und Audit-Vorbereitung'
      }
    ];

    const certificationBodies = [
      { name: 'TÜV SÜD', region: 'DACH', reputation: 'Exzellent', cost: '€€€', duration: '6-8 Wochen' },
      { name: 'DEKRA', region: 'Global', reputation: 'Sehr gut', cost: '€€€', duration: '4-6 Wochen' },
      { name: 'Bureau Veritas', region: 'Global', reputation: 'Sehr gut', cost: '€€', duration: '5-7 Wochen' },
      { name: 'DQS', region: 'DACH', reputation: 'Gut', cost: '€€', duration: '6-8 Wochen' }
    ];

    return (
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
              <Award className="h-3.5 w-3.5 mr-2" />
              Der Zertifizierungsprozess
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              So läuft Ihre ISO 27001-Zertifizierung ab
            </h2>
            <p className="text-lg text-[#474747] max-w-3xl mx-auto">
              Verstehen Sie jeden Schritt des Zertifizierungsprozesses und bereiten Sie sich optimal auf die Audits vor. 
              Mit Marsstein meistern Sie jede Herausforderung souverän.
            </p>
          </motion.div>

          {/* Certification Journey Visualization */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="relative">
              {/* Progress Line */}
              <div className="absolute top-12 left-0 right-0 h-1 bg-gray-200 rounded-full">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-600 to-green-600 rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: `${((activeStage + 1) / certificationStages.length) * 100}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Stage Indicators */}
              <div className="relative flex justify-between">
                {certificationStages.map((stage, index) => (
                  <motion.button
                    key={stage.id}
                    onClick={() => setActiveStage(index)}
                    className="relative z-10 flex flex-col items-center gap-2 group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className={cn(
                        "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300",
                        index <= activeStage
                          ? "bg-gradient-to-br from-blue-600 to-[#e24e1b] text-white shadow-lg"
                          : "bg-white border-2 border-gray-300 text-gray-400"
                      )}
                      animate={{
                        scale: index === activeStage ? 1.1 : 1,
                        boxShadow: index === activeStage 
                          ? "0 10px 30px rgba(226, 78, 27, 0.3)" 
                          : "0 4px 6px rgba(0, 0, 0, 0.1)"
                      }}
                    >
                      <stage.icon className="h-8 w-8" />
                    </motion.div>
                    <div className="text-center mt-2">
                      <div className={cn(
                        "font-semibold text-sm",
                        index === activeStage ? "text-[#e24e1b]" : "text-[#474747]"
                      )}>
                        {stage.title}
                      </div>
                      <div className="text-xs text-[#474747]">{stage.subtitle}</div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </div>

          {/* Active Stage Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="max-w-6xl mx-auto border-0 shadow-2xl overflow-hidden">
                <CardHeader className={`bg-gradient-to-r ${certificationStages[activeStage].color} text-white p-8`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-4 bg-white/20 rounded-xl backdrop-blur-sm">
                        {React.createElement(certificationStages[activeStage].icon, { className: "h-10 w-10 text-white" })}
                      </div>
                      <div>
                        <CardTitle className="text-3xl font-bold text-white mb-2">
                          {certificationStages[activeStage].title}
                        </CardTitle>
                        <CardDescription className="text-white/90 text-lg">
                          {certificationStages[activeStage].description}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                      {certificationStages[activeStage].duration}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  {activeStage < 2 ? (
                    <div className="grid lg:grid-cols-2 gap-8">
                      {/* Audit Objectives */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold flex items-center gap-2 text-[#232323]">
                          <Target className="h-5 w-5 text-[#e24e1b]" />
                          Audit-Schwerpunkte
                        </h3>
                        <div className="space-y-3">
                          {certificationStages[activeStage].objectives.map((objective, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                              <span className="text-[#474747]">{objective}</span>
                            </motion.div>
                          ))}
                        </div>

                        {/* Auditor Focus Areas */}
                        <div className="mt-6">
                          <h4 className="text-lg font-semibold mb-3 text-[#232323]">
                            Was Auditoren genau prüfen:
                          </h4>
                          <div className="space-y-2">
                            {certificationStages[activeStage].auditorFocus.map((focus, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center gap-2 p-2 bg-gray-50 rounded"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 + idx * 0.05 }}
                              >
                                <Eye className="h-4 w-4 text-[#e24e1b]" />
                                <span className="text-sm text-[#474747]">{focus}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Common Issues & Solutions */}
                      <div className="space-y-6">
                        <h3 className="text-xl font-semibold flex items-center gap-2 text-[#232323]">
                          <AlertCircle className="h-5 w-5 text-orange-500" />
                          Häufige Herausforderungen
                        </h3>
                        <div className="space-y-4">
                          {certificationStages[activeStage].commonIssues.map((item, idx) => (
                            <motion.div
                              key={idx}
                              className="border border-orange-200 rounded-lg overflow-hidden"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <button
                                onClick={() => setExpandedDetail(expandedDetail === idx ? null : idx)}
                                className="w-full p-4 bg-orange-50 hover:bg-orange-100 transition-colors flex items-center justify-between"
                              >
                                <div className="flex items-center gap-3 text-left">
                                  <XCircle className="h-5 w-5 text-orange-600" />
                                  <span className="font-medium text-[#232323]">{item.issue}</span>
                                </div>
                                <ChevronRight className={cn(
                                  "h-5 w-5 text-orange-600 transition-transform",
                                  expandedDetail === idx && "rotate-90"
                                )} />
                              </button>
                              <AnimatePresence>
                                {expandedDetail === idx && (
                                  <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="overflow-hidden"
                                  >
                                    <div className="p-4 bg-white border-t border-orange-200">
                                      <div className="flex items-start gap-3">
                                        <Sparkles className="h-5 w-5 text-green-600 mt-0.5" />
                                        <div>
                                          <div className="font-medium text-green-700 mb-1">Marsstein-Lösung:</div>
                                          <div className="text-sm text-[#474747]">{item.solution}</div>
                                        </div>
                                      </div>
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </motion.div>
                          ))}
                        </div>

                        {/* Outcome */}
                        <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                            <FileCheck className="h-5 w-5" />
                            Ergebnis dieser Phase:
                          </h4>
                          <p className="text-blue-800">{certificationStages[activeStage].outcome}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Certification Stage Layout
                    <div className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Benefits */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold flex items-center gap-2 text-[#232323]">
                            <Award className="h-5 w-5 text-green-600" />
                            Ihre Vorteile mit ISO 27001
                          </h3>
                          <div className="space-y-3">
                            {certificationStages[activeStage].benefits.map((benefit, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center gap-3 p-3 bg-green-50 rounded-lg"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <Star className="h-5 w-5 text-green-600" />
                                <span className="text-[#474747]">{benefit}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Next Steps */}
                        <div className="space-y-4">
                          <h3 className="text-xl font-semibold flex items-center gap-2 text-[#232323]">
                            <Rocket className="h-5 w-5 text-[#e24e1b]" />
                            Nächste Schritte
                          </h3>
                          <div className="space-y-3">
                            {certificationStages[activeStage].nextSteps.map((step, idx) => (
                              <motion.div
                                key={idx}
                                className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                <ArrowRight className="h-5 w-5 text-blue-600" />
                                <span className="text-[#474747]">{step}</span>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Marsstein Continuous Support */}
                      <motion.div 
                        className="p-6 bg-gradient-to-r from-[#e24e1b]/10 to-orange-100 rounded-xl border-2 border-[#e24e1b]/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-white rounded-lg shadow-md">
                            <Shield className="h-8 w-8 text-[#e24e1b]" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-[#232323] mb-1">Marsstein Support nach der Zertifizierung</h4>
                            <p className="text-[#474747]">{certificationStages[activeStage]["marsstein Support"]}</p>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  )}

                  {/* Certification Bodies Comparison */}
                  <div className="mt-12">
                    <h3 className="text-xl font-semibold mb-6 text-center text-[#232323]">
                      Empfohlene Zertifizierungsstellen
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {certificationBodies.map((body, idx) => (
                        <motion.div
                          key={idx}
                          className="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#e24e1b]/30 transition-all"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + idx * 0.1 }}
                          whileHover={{ scale: 1.02 }}
                        >
                          <h4 className="font-semibold text-[#232323] mb-3">{body.name}</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span className="text-[#474747]">Region:</span>
                              <span className="font-medium">{body.region}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#474747]">Reputation:</span>
                              <span className="font-medium text-green-600">{body.reputation}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#474747]">Kosten:</span>
                              <span className="font-medium">{body.cost}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-[#474747]">Dauer:</span>
                              <span className="font-medium">{body.duration}</span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Pro Tips */}
                  <motion.div 
                    className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <h4 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Insider-Tipps für Ihren Audit-Erfolg
                    </h4>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5" />
                        <span className="text-sm">Führen Sie 2-3 Wochen vor dem Audit eine "Mock Certification" durch</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5" />
                        <span className="text-sm">Stellen Sie sicher, dass alle Mitarbeiter ihre Rollen im ISMS kennen</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5" />
                        <span className="text-sm">Dokumentieren Sie alle Prozesse mindestens 3 Monate vor dem Audit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 mt-0.5" />
                        <span className="text-sm">Nutzen Sie Marsstein's Audit-Simulator für realistische Vorbereitung</span>
                      </li>
                    </ul>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    );
  };

  // Maintenance Section - Aufrechterhaltung
  const MaintenanceSection = () => {
    const [activeTab, setActiveTab] = useState('surveillance');

    const maintenanceAspects = {
      surveillance: {
        title: 'Überwachungsaudits',
        icon: Eye,
        schedule: [
          { year: 1, type: 'Überwachungsaudit 1', activities: ['Stichproben der Kontrollen', 'Wirksamkeitsprüfung', 'Korrekturmaßnahmen-Follow-up'], duration: '1-2 Tage' },
          { year: 2, type: 'Überwachungsaudit 2', activities: ['Erweiterte Prüfung', 'Neue Risiken bewerten', 'Prozessverbesserungen'], duration: '1-2 Tage' },
          { year: 3, type: 'Re-Zertifizierung', activities: ['Vollständige Systemprüfung', 'Neue ISO 27001 Version', 'Scope-Anpassungen'], duration: '3-5 Tage' }
        ],
        tips: [
          'Führen Sie quartalsweise interne Mini-Audits durch',
          'Dokumentieren Sie alle Änderungen kontinuierlich',
          'Bereiten Sie Nachweise proaktiv vor'
        ]
      },
      continuous: {
        title: 'Kontinuierliche Verbesserung',
        icon: TrendingUp,
        pdcaCycle: [
          { phase: 'Plan', activities: ['Risiken neu bewerten', 'Ziele aktualisieren', 'Ressourcen planen'], metrics: 'Quartalsziele definiert' },
          { phase: 'Do', activities: ['Maßnahmen umsetzen', 'Schulungen durchführen', 'Kontrollen optimieren'], metrics: 'Implementierungsrate' },
          { phase: 'Check', activities: ['KPIs messen', 'Audits durchführen', 'Feedback sammeln'], metrics: 'Compliance-Score' },
          { phase: 'Act', activities: ['Korrekturmaßnahmen', 'System anpassen', 'Best Practices teilen'], metrics: 'Verbesserungsrate' }
        ],
        kpis: [
          { name: 'Incident Response Time', target: '< 4h', current: '3.2h', trend: 'improving' },
          { name: 'Security Awareness Score', target: '> 90%', current: '87%', trend: 'stable' },
          { name: 'Audit Findings', target: '< 5', current: '3', trend: 'improving' },
          { name: 'Policy Compliance', target: '100%', current: '98%', trend: 'stable' }
        ]
      },
      changes: {
        title: 'Change Management',
        icon: Settings,
        changeTypes: [
          { type: 'Organisatorisch', examples: ['Neue Abteilungen', 'Standortwechsel', 'M&A Aktivitäten'], impact: 'Scope-Anpassung erforderlich' },
          { type: 'Technologisch', examples: ['Cloud-Migration', 'Neue Systeme', 'Legacy-Abschaltung'], impact: 'Kontroll-Updates nötig' },
          { type: 'Regulatorisch', examples: ['DSGVO Updates', 'NIS2 Anforderungen', 'Branchenstandards'], impact: 'Compliance-Mapping' },
          { type: 'Prozessual', examples: ['Digitalisierung', 'Automatisierung', 'Outsourcing'], impact: 'Risiko-Neubewertung' }
        ],
        process: [
          'Change Request dokumentieren',
          'Impact Assessment durchführen',
          'Risiken neu bewerten',
          'Kontrollen anpassen',
          'Stakeholder informieren',
          'Änderungen testen',
          'Dokumentation aktualisieren'
        ]
      }
    };

    return (
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300">
              <Shield className="h-3.5 w-3.5 mr-2" />
              Aufrechterhaltung
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              ISO 27001 langfristig aufrechterhalten
            </h2>
            <p className="text-lg text-[#474747] max-w-3xl mx-auto">
              Die Zertifizierung ist erst der Anfang. Erfahren Sie, wie Sie Ihr ISMS kontinuierlich verbessern 
              und die Compliance über Jahre hinweg sicherstellen.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(maintenanceAspects).map(([key, aspect]) => (
              <motion.button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all",
                  activeTab === key
                    ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-lg"
                    : "bg-white text-[#474747] hover:bg-gray-50 border-2 border-gray-200"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <aspect.icon className="h-5 w-5" />
                {aspect.title}
              </motion.button>
            ))}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            {activeTab === 'surveillance' && (
              <motion.div
                key="surveillance"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="max-w-5xl mx-auto">
                  <CardHeader>
                    <CardTitle className="text-2xl flex items-center gap-3">
                      <Eye className="h-6 w-6 text-[#e24e1b]" />
                      3-Jahres-Zyklus der Überwachungsaudits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-8">
                    {/* Audit Timeline */}
                    <div className="relative">
                      {maintenanceAspects.surveillance.schedule.map((audit, idx) => (
                        <motion.div
                          key={idx}
                          className="flex gap-6 mb-8 last:mb-0"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="relative">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-[#e24e1b] rounded-full flex items-center justify-center text-white font-bold text-xl">
                              {audit.year}
                            </div>
                            {idx < maintenanceAspects.surveillance.schedule.length - 1 && (
                              <div className="absolute top-16 left-8 w-0.5 h-24 bg-gray-300" />
                            )}
                          </div>
                          <div className="flex-1">
                            <div className="bg-gray-50 rounded-lg p-6">
                              <div className="flex items-center justify-between mb-4">
                                <h4 className="text-lg font-semibold text-[#232323]">{audit.type}</h4>
                                <Badge variant="outline">{audit.duration}</Badge>
                              </div>
                              <div className="space-y-2">
                                {audit.activities.map((activity, i) => (
                                  <div key={i} className="flex items-center gap-2 text-[#474747]">
                                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                                    <span className="text-sm">{activity}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Pro Tips */}
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="font-semibold text-blue-900 mb-3">Erfolgsstrategien für Überwachungsaudits:</h4>
                      <div className="space-y-2">
                        {maintenanceAspects.surveillance.tips.map((tip, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <Sparkles className="h-4 w-4 text-blue-600 mt-0.5" />
                            <span className="text-sm text-blue-800">{tip}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )}

            {activeTab === 'continuous' && (
              <motion.div
                key="continuous"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                  {/* PDCA Cycle */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">PDCA-Zyklus in der Praxis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {maintenanceAspects.continuous.pdcaCycle.map((phase, idx) => (
                          <motion.div
                            key={idx}
                            className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-semibold text-[#232323]">{phase.phase}</h5>
                              <Badge className="bg-blue-100 text-blue-700">{phase.metrics}</Badge>
                            </div>
                            <div className="space-y-1">
                              {phase.activities.map((activity, i) => (
                                <div key={i} className="text-sm text-[#474747] flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                                  {activity}
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* KPI Dashboard */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Live KPI Dashboard</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {maintenanceAspects.continuous.kpis.map((kpi, idx) => (
                          <motion.div
                            key={idx}
                            className="p-4 border rounded-lg"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="font-medium text-[#232323]">{kpi.name}</span>
                              <Badge variant={kpi.trend === 'improving' ? 'default' : 'secondary'}>
                                {kpi.trend === 'improving' ? '↑' : '→'} {kpi.current}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-[#474747]">
                              <span>Ziel: {kpi.target}</span>
                              <span className={cn(
                                "ml-auto font-medium",
                                kpi.trend === 'improving' ? "text-green-600" : "text-orange-600"
                              )}>
                                {kpi.trend === 'improving' ? 'Verbessernd' : 'Stabil'}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}

            {activeTab === 'changes' && (
              <motion.div
                key="changes"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="max-w-6xl mx-auto space-y-8">
                  {/* Change Types */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Typische Änderungen und deren Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {maintenanceAspects.changes.changeTypes.map((change, idx) => (
                          <motion.div
                            key={idx}
                            className="p-4 border rounded-lg hover:border-[#e24e1b]/30 transition-colors"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.02 }}
                          >
                            <h5 className="font-semibold text-[#e24e1b] mb-2">{change.type}</h5>
                            <div className="space-y-2">
                              <div>
                                <span className="text-sm font-medium text-[#474747]">Beispiele:</span>
                                <ul className="text-sm text-[#474747] ml-4">
                                  {change.examples.map((ex, i) => (
                                    <li key={i} className="list-disc">{ex}</li>
                                  ))}
                                </ul>
                              </div>
                              <div className="pt-2 border-t">
                                <span className="text-sm font-medium text-[#474747]">Impact: </span>
                                <span className="text-sm text-blue-600">{change.impact}</span>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Change Management Process */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Change Management Prozess</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="relative">
                        {maintenanceAspects.changes.process.map((step, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-4 mb-4 last:mb-0"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="w-8 h-8 bg-gradient-to-br from-[#e24e1b] to-[#ea580c] rounded-full flex items-center justify-center text-white font-bold text-sm">
                              {idx + 1}
                            </div>
                            <div className="flex-1 p-3 bg-gray-50 rounded-lg">
                              <span className="text-[#232323]">{step}</span>
                            </div>
                            {idx < maintenanceAspects.changes.process.length - 1 && (
                              <ArrowRight className="h-4 w-4 text-gray-400" />
                            )}
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    );
  };

  // Integration & Standards Section
  const IntegrationStandardsSection = () => {
    const [selectedStandard, setSelectedStandard] = useState('soc2');

    const standards = {
      soc2: {
        name: 'SOC 2',
        icon: Shield,
        overlap: '75%',
        description: 'Service Organization Control 2 - US-Standard für Cloud-Anbieter',
        synergies: [
          'Gemeinsame Kontrollen für Datensicherheit',
          'Ähnliche Audit-Prozesse',
          'Vendor Management überschneidet sich'
        ],
        differences: [
          'SOC 2 ist US-fokussiert, ISO 27001 international',
          'SOC 2 hat 5 Trust Service Criteria vs. 174 ISO-Kontrollen',
          'Andere Berichtsformate und Zielgruppen'
        ],
        integrationTips: [
          'Nutzen Sie ISO 27001 als Basis für SOC 2',
          'Harmonisieren Sie die Dokumentation',
          'Kombinierte Audits sparen 40% Zeit'
        ]
      },
      gdpr: {
        name: 'DSGVO',
        icon: FileText,
        overlap: '60%',
        description: 'Datenschutz-Grundverordnung der EU',
        synergies: [
          'Art. 32 DSGVO fordert ähnliche Sicherheitsmaßnahmen',
          'Gemeinsame Dokumentationspflichten',
          'Risk Assessment Methodik übertragbar'
        ],
        differences: [
          'DSGVO ist Datenschutz, ISO 27001 ist Informationssicherheit',
          'Verschiedene Schutzziele und Rechtsgrundlagen',
          'DSGVO hat keine Zertifizierung'
        ],
        integrationTips: [
          'ISO 27001 Annex A.18 für DSGVO nutzen',
          'Datenschutz-Folgenabschätzung = Risk Assessment',
          'Gemeinsame Awareness-Programme'
        ]
      },
      nis2: {
        name: 'NIS2',
        icon: Network,
        overlap: '85%',
        description: 'EU-Richtlinie für Netz- und Informationssicherheit',
        synergies: [
          'ISO 27001 erfüllt 85% der NIS2-Anforderungen',
          'Identisches Risikomanagement-Framework',
          'Business Continuity Management überschneidet sich'
        ],
        differences: [
          'NIS2 hat spezifische Meldepflichten (24h)',
          'Sektorspezifische Anforderungen',
          'Höhere Bußgelder bei NIS2'
        ],
        integrationTips: [
          'ISO 27001 als NIS2-Compliance-Nachweis',
          'Erweitern Sie Incident Response für Meldepflichten',
          'Supply Chain Security verstärken'
        ]
      },
      tisax: {
        name: 'TISAX',
        icon: Car,
        overlap: '90%',
        description: 'Automotive-Standard basierend auf ISO 27001',
        synergies: [
          'TISAX basiert direkt auf ISO 27001',
          'Identische Kontrollstruktur',
          'Gleiche Audit-Methodik'
        ],
        differences: [
          'TISAX hat automotive-spezifische Kontrollen',
          'Anderes Assessment-Modell (AL1-AL3)',
          'ENX-Plattform für Zertifikatsaustausch'
        ],
        integrationTips: [
          'ISO 27001 zuerst, dann TISAX-Erweiterung',
          'Nutzen Sie ISO-Dokumentation als Basis',
          'Prototype Protection zusätzlich implementieren'
        ]
      }
    };

    const integrationMatrix = [
      { from: 'ISO 27001', to: 'SOC 2', effort: 'Mittel', time: '3-4 Monate', cost: '€€' },
      { from: 'ISO 27001', to: 'DSGVO', effort: 'Gering', time: '1-2 Monate', cost: '€' },
      { from: 'ISO 27001', to: 'NIS2', effort: 'Gering', time: '2-3 Monate', cost: '€' },
      { from: 'ISO 27001', to: 'TISAX', effort: 'Gering', time: '2-3 Monate', cost: '€' },
    ];

    return (
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
              <Layers className="h-3.5 w-3.5 mr-2" />
              Integration & Standards
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              ISO 27001 als Basis für Multi-Compliance
            </h2>
            <p className="text-lg text-[#474747] max-w-3xl mx-auto">
              Nutzen Sie ISO 27001 als Fundament für weitere Compliance-Standards. 
              Verstehen Sie Synergien und sparen Sie bis zu 60% Aufwand bei zusätzlichen Zertifizierungen.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Standards Selection */}
            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Compliance-Standards</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {Object.entries(standards).map(([key, standard]) => (
                    <motion.button
                      key={key}
                      onClick={() => setSelectedStandard(key)}
                      className={cn(
                        "w-full p-4 rounded-lg text-left transition-all",
                        selectedStandard === key
                          ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-lg"
                          : "bg-gray-50 hover:bg-gray-100 text-[#474747]"
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <standard.icon className="h-5 w-5" />
                          <span className="font-medium">{standard.name}</span>
                        </div>
                        <Badge 
                          variant={selectedStandard === key ? "secondary" : "outline"}
                          className="text-xs"
                        >
                          {standard.overlap} Overlap
                        </Badge>
                      </div>
                    </motion.button>
                  ))}
                </CardContent>
              </Card>

              {/* Integration Matrix */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Aufwands-Matrix</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {integrationMatrix.map((item, idx) => (
                      <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-[#232323]">
                            {item.from} → {item.to}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          <div>
                            <span className="text-[#474747]">Aufwand: </span>
                            <span className="font-medium">{item.effort}</span>
                          </div>
                          <div>
                            <span className="text-[#474747]">Zeit: </span>
                            <span className="font-medium">{item.time}</span>
                          </div>
                          <div>
                            <span className="text-[#474747]">Kosten: </span>
                            <span className="font-medium">{item.cost}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Standard Details */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedStandard}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card>
                    <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                          {React.createElement(standards[selectedStandard].icon, { 
                            className: "h-8 w-8 text-[#e24e1b]" 
                          })}
                        </div>
                        <div>
                          <CardTitle className="text-2xl">
                            ISO 27001 + {standards[selectedStandard].name}
                          </CardTitle>
                          <CardDescription className="text-base mt-1">
                            {standards[selectedStandard].description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-8 space-y-8">
                      {/* Synergies */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#232323]">
                          <CheckCircle2 className="h-5 w-5 text-green-600" />
                          Synergien nutzen
                        </h3>
                        <div className="space-y-3">
                          {standards[selectedStandard].synergies.map((synergy, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start gap-3 p-3 bg-green-50 rounded-lg"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <ArrowRight className="h-5 w-5 text-green-600 mt-0.5" />
                              <span className="text-[#474747]">{synergy}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Differences */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#232323]">
                          <AlertCircle className="h-5 w-5 text-orange-500" />
                          Wichtige Unterschiede
                        </h3>
                        <div className="space-y-3">
                          {standards[selectedStandard].differences.map((diff, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <XCircle className="h-5 w-5 text-orange-600 mt-0.5" />
                              <span className="text-[#474747]">{diff}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Integration Tips */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-[#232323]">
                          <Sparkles className="h-5 w-5 text-[#e24e1b]" />
                          Praktische Integrationstipps
                        </h3>
                        <div className="space-y-3">
                          {standards[selectedStandard].integrationTips.map((tip, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <Zap className="h-5 w-5 text-blue-600 mt-0.5" />
                              <span className="text-[#474747]">{tip}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Marsstein Advantage */}
                      <motion.div 
                        className="p-6 bg-gradient-to-r from-[#e24e1b]/10 to-orange-50 rounded-xl border-2 border-[#e24e1b]/20"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        <h4 className="font-semibold text-[#232323] mb-3">Der Marsstein Multi-Compliance Vorteil</h4>
                        <p className="text-[#474747] mb-3">
                          Unsere Plattform managed alle Ihre Compliance-Standards in einem einzigen System. 
                          Keine doppelte Arbeit, keine redundanten Audits.
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Unified Dashboard</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Cross-Mapping</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <CheckCircle2 className="h-4 w-4 text-green-600" />
                            <span>Combined Audits</span>
                          </div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    );
  };

  // Industry Specifics Section - Branchenspezifika
  const IndustrySpecificsSection = () => {
    const [selectedIndustry, setSelectedIndustry] = useState('finance');

    const industries = {
      finance: {
        name: 'Finanzdienstleistungen',
        icon: CreditCard,
        challenges: [
          'Extrem hohe regulatorische Anforderungen (BaFin, EZB)',
          'Sensible Kundendaten und Transaktionsinformationen',
          'Real-time Verfügbarkeitsanforderungen',
          'Komplexe IT-Landschaften mit Legacy-Systemen'
        ],
        specificControls: [
          { control: 'A.10 Kryptografie', importance: 'Kritisch', detail: 'End-to-End Verschlüsselung für alle Transaktionen' },
          { control: 'A.12.3 Backup', importance: 'Kritisch', detail: 'Redundante Datenhaltung über mehrere Standorte' },
          { control: 'A.16 Incident Management', importance: 'Kritisch', detail: '24/7 SOC mit 15-Minuten Reaktionszeit' },
          { control: 'A.18.1 Compliance', importance: 'Kritisch', detail: 'Integration mit BaFin MaRisk und BAIT' }
        ],
        requirements: [
          'PCI-DSS Compliance für Kartenzahlungen',
          'SWIFT CSP für internationale Überweisungen',
          'MaRisk konforme Risikosteuerung',
          'BAIT-konforme IT-Governance'
        ],
        marsSteinBenefits: [
          'Vorkonfigurierte Templates für BaFin-Audits',
          'Automatisches Regulatory Reporting',
          'PCI-DSS Mapping integriert',
          'Real-time Compliance Dashboard'
        ]
      },
      healthcare: {
        name: 'Gesundheitswesen',
        icon: Heart,
        challenges: [
          'Hochsensible Patientendaten',
          'Lebenskritische Systeme (Medizingeräte)',
          'Komplexe Lieferantenketten',
          'Strenge Datenschutzanforderungen'
        ],
        specificControls: [
          { control: 'A.8 Asset Management', importance: 'Kritisch', detail: 'Inventarisierung aller medizinischen Geräte' },
          { control: 'A.9 Zugriffskontrolle', importance: 'Kritisch', detail: 'Rollenbasierte Zugriffe nach Behandlungskontext' },
          { control: 'A.13 Kommunikation', importance: 'Hoch', detail: 'Sichere Telemedizin-Infrastruktur' },
          { control: 'A.17 Business Continuity', importance: 'Kritisch', detail: 'Notfallpläne für kritische Versorgung' }
        ],
        requirements: [
          'DSGVO Art. 9 für Gesundheitsdaten',
          'MDR/IVDR für Medizinprodukte',
          'eHealth-Gesetz Konformität',
          'Patientenrechtegesetz'
        ],
        marsSteinBenefits: [
          'KHZG-konforme Dokumentation',
          'Automatisierte Datenschutz-Folgenabschätzung',
          'Medizingeräte-Risikomanagement',
          'Interoperabilitäts-Checks'
        ]
      },
      automotive: {
        name: 'Automobilindustrie',
        icon: Car,
        challenges: [
          'Schutz von Entwicklungsdaten und Prototypen',
          'Komplexe globale Lieferketten',
          'Connected Car Sicherheit',
          'Industriespionage-Risiken'
        ],
        specificControls: [
          { control: 'A.8.1 Asset-Klassifizierung', importance: 'Kritisch', detail: 'Prototype Protection Level 1-4' },
          { control: 'A.11 Physische Sicherheit', importance: 'Kritisch', detail: 'Hochsicherheitsbereiche für F&E' },
          { control: 'A.13.2 Informationstransfer', importance: 'Hoch', detail: 'Sichere OEM-Supplier Kommunikation' },
          { control: 'A.15 Lieferantenbeziehungen', importance: 'Kritisch', detail: 'TISAX-konforme Lieferantenbewertung' }
        ],
        requirements: [
          'TISAX Assessment Level 3',
          'VDA ISA Katalog 5.0',
          'UN ECE Cybersecurity Regulation',
          'ISO/SAE 21434 (Automotive Cybersecurity)'
        ],
        marsSteinBenefits: [
          'TISAX-ISO 27001 Dual-Compliance',
          'Automated Supplier Risk Assessment',
          'Prototype Tracking System',
          'OEM-spezifische Dashboards'
        ]
      },
      cloud: {
        name: 'Cloud & SaaS Provider',
        icon: Cloud,
        challenges: [
          'Multi-Tenant Sicherheit',
          'Globale Compliance-Anforderungen',
          'Hochverfügbarkeit (99.99% SLA)',
          'Kundendaten-Segregation'
        ],
        specificControls: [
          { control: 'A.12.1 Betriebsverfahren', importance: 'Kritisch', detail: 'Automated DevSecOps Pipeline' },
          { control: 'A.13.1 Netzwerksicherheit', importance: 'Kritisch', detail: 'Zero-Trust Network Architecture' },
          { control: 'A.14 Systementwicklung', importance: 'Kritisch', detail: 'Secure Software Development Lifecycle' },
          { control: 'A.17.1 Redundanz', importance: 'Kritisch', detail: 'Multi-Region Disaster Recovery' }
        ],
        requirements: [
          'SOC 2 Type II parallel',
          'CSA STAR Zertifizierung',
          'ISO 27017 (Cloud-spezifisch)',
          'ISO 27018 (Cloud Privacy)'
        ],
        marsSteinBenefits: [
          'Multi-Standard Compliance Engine',
          'Automated Customer Audit Support',
          'Real-time Security Posture API',
          'Compliance-as-Code Integration'
        ]
      }
    };

    const complianceTimeline = {
      finance: { initial: '6-8 Monate', withMarsstein: '3-4 Monate', savings: '50%' },
      healthcare: { initial: '8-10 Monate', withMarsstein: '4-5 Monate', savings: '55%' },
      automotive: { initial: '7-9 Monate', withMarsstein: '3-4 Monate', savings: '60%' },
      cloud: { initial: '5-7 Monate', withMarsstein: '2-3 Monate', savings: '65%' }
    };

    return (
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-indigo-100 text-indigo-700 dark:bg-indigo-900/20 dark:text-indigo-300">
              <Building2 className="h-3.5 w-3.5 mr-2" />
              Branchenspezifika
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              ISO 27001 maßgeschneidert für Ihre Branche
            </h2>
            <p className="text-lg text-[#474747] max-w-3xl mx-auto">
              Jede Branche hat einzigartige Sicherheitsherausforderungen. Verstehen Sie, wie ISO 27001 
              speziell für Ihren Sektor angepasst wird und welche branchenspezifischen Anforderungen Sie erfüllen müssen.
            </p>
          </motion.div>

          {/* Industry Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(industries).map(([key, industry]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedIndustry(key)}
                className={cn(
                  "flex items-center gap-3 px-6 py-4 rounded-xl font-medium transition-all",
                  selectedIndustry === key
                    ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-xl scale-105"
                    : "bg-white text-[#474747] hover:bg-gray-50 border-2 border-gray-200 hover:border-[#e24e1b]/30"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <industry.icon className="h-5 w-5" />
                <span>{industry.name}</span>
              </motion.button>
            ))}
          </div>

          {/* Industry Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndustry}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="max-w-7xl mx-auto"
            >
              <div className="grid lg:grid-cols-3 gap-8">
                {/* Challenges & Requirements */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Industry Challenges */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3">
                        <AlertCircle className="h-5 w-5 text-orange-500" />
                        Branchenspezifische Herausforderungen
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {industries[selectedIndustry].challenges.map((challenge, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <XCircle className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                            <span className="text-[#474747]">{challenge}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Critical Controls */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3">
                        <Shield className="h-5 w-5 text-[#e24e1b]" />
                        Kritische ISO 27001 Kontrollen
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {industries[selectedIndustry].specificControls.map((control, idx) => (
                          <motion.div
                            key={idx}
                            className="border rounded-lg p-4 hover:border-[#e24e1b]/30 transition-colors"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            whileHover={{ scale: 1.01 }}
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-semibold text-[#232323]">{control.control}</h4>
                              <Badge 
                                variant={control.importance === 'Kritisch' ? 'destructive' : 'default'}
                                className="text-xs"
                              >
                                {control.importance}
                              </Badge>
                            </div>
                            <p className="text-sm text-[#474747]">{control.detail}</p>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Additional Requirements */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl flex items-center gap-3">
                        <FileText className="h-5 w-5 text-blue-600" />
                        Zusätzliche Branchenstandards
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-3">
                        {industries[selectedIndustry].requirements.map((req, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                            <span className="text-sm text-[#474747]">{req}</span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Timeline Comparison */}
                  <Card className="bg-gradient-to-br from-gray-50 to-blue-50">
                    <CardHeader>
                      <CardTitle className="text-lg">Implementierungszeit</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div className="p-3 bg-white rounded-lg">
                          <div className="text-sm text-[#474747] mb-1">Traditionell:</div>
                          <div className="text-xl font-semibold text-red-600">
                            {complianceTimeline[selectedIndustry].initial}
                          </div>
                        </div>
                        <div className="p-3 bg-white rounded-lg">
                          <div className="text-sm text-[#474747] mb-1">Mit Marsstein:</div>
                          <div className="text-xl font-semibold text-green-600">
                            {complianceTimeline[selectedIndustry].withMarsstein}
                          </div>
                        </div>
                      </div>
                      <div className="pt-3 border-t">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-[#474747]">Zeitersparnis:</span>
                          <Badge className="bg-green-100 text-green-700 text-lg px-3 py-1">
                            {complianceTimeline[selectedIndustry].savings}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Marsstein Benefits */}
                  <Card className="border-2 border-[#e24e1b]/20">
                    <CardHeader className="bg-gradient-to-r from-[#e24e1b]/10 to-orange-50">
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-[#e24e1b]" />
                        Marsstein Branchen-Features
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="space-y-3">
                        {industries[selectedIndustry].marsSteinBenefits.map((benefit, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-start gap-3"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <Zap className="h-4 w-4 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-[#474747]">{benefit}</span>
                          </motion.div>
                        ))}
                      </div>
                      <motion.div
                        className="mt-6"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button className="w-full bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#f97316] hover:to-[#ea580c]">
                          Branchen-Demo anfordern
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </motion.div>
                    </CardContent>
                  </Card>

                  {/* Expert Contact */}
                  <Card>
                    <CardContent className="pt-6">
                      <div className="text-center space-y-3">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#e24e1b] to-[#ea580c] rounded-full flex items-center justify-center mx-auto">
                          <Phone className="h-8 w-8 text-white" />
                        </div>
                        <h4 className="font-semibold text-[#232323]">Branchen-Experte sprechen?</h4>
                        <p className="text-sm text-[#474747]">
                          Unsere {industries[selectedIndustry].name}-Spezialisten beraten Sie gerne.
                        </p>
                        <Button variant="outline" className="w-full">
                          <Calendar className="mr-2 h-4 w-4" />
                          Termin vereinbaren
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    );
  };

  // ROI Section - Vorteile & Return on Investment
  const ROISection = () => {
    const [selectedMetric, setSelectedMetric] = useState('cost');
    const [timeframe, setTimeframe] = useState('3years');

    const roiMetrics = {
      cost: {
        title: 'Kosteneinsparungen',
        icon: Euro,
        color: 'from-green-500 to-emerald-500',
        traditional: {
          initial: 180000,
          annual: 45000,
          threeYear: 315000
        },
        marsstein: {
          initial: 45000,
          annual: 12000,
          threeYear: 81000
        },
        savings: {
          initial: 135000,
          annual: 33000,
          threeYear: 234000,
          percentage: 74
        },
        breakdown: [
          { item: 'Beratungskosten', traditional: 120000, marsstein: 15000 },
          { item: 'Interne Ressourcen', traditional: 40000, marsstein: 20000 },
          { item: 'Audit-Vorbereitung', traditional: 20000, marsstein: 10000 }
        ]
      },
      time: {
        title: 'Zeitersparnis',
        icon: Clock,
        color: 'from-blue-500 to-indigo-500',
        traditional: {
          implementation: 12,
          maintenance: 480,
          total: 1920
        },
        marsstein: {
          implementation: 6,
          maintenance: 120,
          total: 486
        },
        savings: {
          implementation: 6,
          maintenance: 360,
          total: 1434,
          percentage: 75
        },
        breakdown: [
          { task: 'Gap-Analyse', traditional: 320, marsstein: 40 },
          { task: 'Dokumentation', traditional: 480, marsstein: 80 },
          { task: 'Implementierung', traditional: 640, marsstein: 160 }
        ]
      },
      revenue: {
        title: 'Umsatzsteigerung',
        icon: TrendingUp,
        color: 'from-purple-500 to-violet-500',
        opportunities: [
          { source: 'Neue Enterprise-Kunden', value: 2300000, probability: 67 },
          { source: 'Internationale Expansion', value: 1500000, probability: 45 },
          { source: 'Behördenaufträge', value: 800000, probability: 38 }
        ],
        totalPotential: 4600000,
        expectedValue: 2759000,
        timeToRevenue: '6-9 Monate'
      },
      risk: {
        title: 'Risikoreduzierung',
        icon: Shield,
        color: 'from-red-500 to-orange-500',
        threats: [
          { type: 'Cyber-Angriff', cost: 4450000, probability: 23, withISO: 5 },
          { type: 'Datenverlust', cost: 2100000, probability: 15, withISO: 3 },
          { type: 'Compliance-Strafe', cost: 890000, probability: 12, withISO: 1 }
        ],
        annualRiskExposure: {
          without: 1426000,
          with: 287000,
          reduction: 1139000,
          percentage: 80
        }
      }
    };

    const calculateROI = () => {
      const metric = roiMetrics[selectedMetric];
      if (selectedMetric === 'cost' || selectedMetric === 'time') {
        const period = timeframe === '1year' ? 'annual' : 'threeYear';
        const savings = metric.savings[period === 'annual' ? 'annual' : 'threeYear'];
        const investment = metric.marsstein[period === 'annual' ? 'initial' : 'threeYear'];
        return Math.round((savings / investment) * 100);
      }
      return 0;
    };

    return (
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300">
              <BarChart3 className="h-3.5 w-3.5 mr-2" />
              Vorteile & ROI
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Der Business Case für ISO 27001
            </h2>
            <p className="text-lg text-[#474747] max-w-3xl mx-auto">
              Zahlen lügen nicht: ISO 27001 mit Marsstein bietet einen messbaren ROI von durchschnittlich 
              <span className="font-bold text-green-600"> 289% innerhalb von 3 Jahren</span>. 
              Verstehen Sie im Detail, wie sich Ihre Investition auszahlt.
            </p>
          </motion.div>

          {/* ROI Calculator Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(roiMetrics).map(([key, metric]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedMetric(key)}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all",
                  selectedMetric === key
                    ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-lg"
                    : "bg-white text-[#474747] hover:bg-gray-50 border-2 border-gray-200"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <metric.icon className="h-5 w-5" />
                {metric.title}
              </motion.button>
            ))}
          </div>

          {/* Timeframe Selector */}
          {(selectedMetric === 'cost' || selectedMetric === 'time') && (
            <div className="flex justify-center gap-4 mb-8">
              <Button
                variant={timeframe === '1year' ? 'default' : 'outline'}
                onClick={() => setTimeframe('1year')}
                size="sm"
              >
                1 Jahr
              </Button>
              <Button
                variant={timeframe === '3years' ? 'default' : 'outline'}
                onClick={() => setTimeframe('3years')}
                size="sm"
              >
                3 Jahre
              </Button>
            </div>
          )}

          {/* ROI Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedMetric}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              {/* Cost Savings */}
              {selectedMetric === 'cost' && (
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <Euro className="h-6 w-6 text-green-600" />
                          Kostenvergleich: Traditionell vs. Marsstein
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        {/* Cost Comparison Chart */}
                        <div className="space-y-6">
                          <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-6 bg-red-50 rounded-lg">
                              <h4 className="font-semibold text-red-700 mb-2">Traditioneller Ansatz</h4>
                              <div className="text-3xl font-bold text-red-600">
                                €{(timeframe === '1year' ? roiMetrics.cost.traditional.annual : roiMetrics.cost.traditional.threeYear).toLocaleString('de-DE')}
                              </div>
                              <div className="text-sm text-red-600 mt-1">
                                {timeframe === '1year' ? 'pro Jahr' : 'über 3 Jahre'}
                              </div>
                            </div>
                            <div className="text-center p-6 bg-green-50 rounded-lg">
                              <h4 className="font-semibold text-green-700 mb-2">Mit Marsstein</h4>
                              <div className="text-3xl font-bold text-green-600">
                                €{(timeframe === '1year' ? roiMetrics.cost.marsstein.annual : roiMetrics.cost.marsstein.threeYear).toLocaleString('de-DE')}
                              </div>
                              <div className="text-sm text-green-600 mt-1">
                                {timeframe === '1year' ? 'pro Jahr' : 'über 3 Jahre'}
                              </div>
                            </div>
                          </div>

                          {/* Breakdown */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-[#232323]">Kostenaufschlüsselung</h4>
                            {roiMetrics.cost.breakdown.map((item, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium text-[#474747]">{item.item}</span>
                                <div className="flex gap-6">
                                  <span className="text-red-600">€{item.traditional.toLocaleString('de-DE')}</span>
                                  <ArrowRight className="h-5 w-5 text-gray-400" />
                                  <span className="text-green-600 font-semibold">€{item.marsstein.toLocaleString('de-DE')}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Savings Summary */}
                  <div className="space-y-6">
                    <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
                      <CardHeader>
                        <CardTitle className="text-xl">Ihre Einsparungen</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center space-y-4">
                          <div className="text-5xl font-bold text-green-600">
                            {roiMetrics.cost.savings.percentage}%
                          </div>
                          <div className="text-lg text-[#474747]">Kosteneinsparung</div>
                          <div className="pt-4 border-t">
                            <div className="text-3xl font-semibold text-green-700">
                              €{(timeframe === '1year' ? roiMetrics.cost.savings.annual : roiMetrics.cost.savings.threeYear).toLocaleString('de-DE')}
                            </div>
                            <div className="text-sm text-[#474747] mt-1">
                              {timeframe === '1year' ? 'gespart pro Jahr' : 'gespart über 3 Jahre'}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-[#e24e1b]" />
                          ROI-Berechnung
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center">
                          <div className="text-4xl font-bold text-[#e24e1b]">
                            {calculateROI()}%
                          </div>
                          <div className="text-sm text-[#474747] mt-2">
                            Return on Investment
                          </div>
                          <div className="text-xs text-[#474747] mt-4 p-3 bg-gray-50 rounded">
                            Für jeden investierten Euro erhalten Sie €{(calculateROI() / 100).toFixed(2)} zurück
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Time Savings */}
              {selectedMetric === 'time' && (
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-2xl flex items-center gap-3">
                          <Clock className="h-6 w-6 text-blue-600" />
                          Zeitaufwand im Vergleich
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {/* Time Comparison */}
                          <div className="grid grid-cols-2 gap-6">
                            <div className="text-center p-6 bg-red-50 rounded-lg">
                              <h4 className="font-semibold text-red-700 mb-2">Traditioneller Ansatz</h4>
                              <div className="text-3xl font-bold text-red-600">
                                {timeframe === '1year' ? roiMetrics.time.traditional.maintenance : roiMetrics.time.traditional.total}h
                              </div>
                              <div className="text-sm text-red-600 mt-1">
                                {timeframe === '1year' ? 'pro Jahr' : 'über 3 Jahre'}
                              </div>
                            </div>
                            <div className="text-center p-6 bg-green-50 rounded-lg">
                              <h4 className="font-semibold text-green-700 mb-2">Mit Marsstein</h4>
                              <div className="text-3xl font-bold text-green-600">
                                {timeframe === '1year' ? roiMetrics.time.marsstein.maintenance : roiMetrics.time.marsstein.total}h
                              </div>
                              <div className="text-sm text-green-600 mt-1">
                                {timeframe === '1year' ? 'pro Jahr' : 'über 3 Jahre'}
                              </div>
                            </div>
                          </div>

                          {/* Task Breakdown */}
                          <div className="space-y-3">
                            <h4 className="font-semibold text-[#232323]">Zeitaufwand nach Aufgaben</h4>
                            {roiMetrics.time.breakdown.map((task, idx) => (
                              <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span className="font-medium text-[#474747]">{task.task}</span>
                                <div className="flex gap-6">
                                  <span className="text-red-600">{task.traditional}h</span>
                                  <ArrowRight className="h-5 w-5 text-gray-400" />
                                  <span className="text-green-600 font-semibold">{task.marsstein}h</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Time Savings Summary */}
                  <div className="space-y-6">
                    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
                      <CardHeader>
                        <CardTitle className="text-xl">Zeitersparnis</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center space-y-4">
                          <div className="text-5xl font-bold text-blue-600">
                            {roiMetrics.time.savings.percentage}%
                          </div>
                          <div className="text-lg text-[#474747]">weniger Zeitaufwand</div>
                          <div className="pt-4 border-t">
                            <div className="text-3xl font-semibold text-blue-700">
                              {timeframe === '1year' ? roiMetrics.time.savings.maintenance : roiMetrics.time.savings.total}h
                            </div>
                            <div className="text-sm text-[#474747] mt-1">
                              eingespart {timeframe === '1year' ? 'pro Jahr' : 'über 3 Jahre'}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardContent className="pt-6">
                        <div className="space-y-3">
                          <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                            <span className="text-sm font-medium text-orange-700">Produktivitätsgewinn</span>
                            <span className="font-bold text-orange-600">+45%</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                            <span className="text-sm font-medium text-purple-700">Fokus auf Innovation</span>
                            <span className="font-bold text-purple-600">+60%</span>
                          </div>
                          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                            <span className="text-sm font-medium text-green-700">Schnellere Audits</span>
                            <span className="font-bold text-green-600">3x</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Revenue Opportunities */}
              {selectedMetric === 'revenue' && (
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <TrendingUp className="h-6 w-6 text-purple-600" />
                        Neue Umsatzchancen durch ISO 27001
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {roiMetrics.revenue.opportunities.map((opp, idx) => (
                          <motion.div
                            key={idx}
                            className="p-4 border rounded-lg hover:border-purple-300 transition-colors"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <div className="flex items-center justify-between mb-3">
                              <h4 className="font-semibold text-[#232323]">{opp.source}</h4>
                              <Badge className="bg-purple-100 text-purple-700">
                                {opp.probability}% Wahrscheinlichkeit
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span className="text-[#474747]">Potentieller Umsatz:</span>
                              <span className="text-2xl font-bold text-purple-600">
                                €{opp.value.toLocaleString('de-DE')}
                              </span>
                            </div>
                            <div className="mt-3 pt-3 border-t">
                              <span className="text-sm text-[#474747]">Erwartungswert: </span>
                              <span className="text-sm font-semibold text-purple-700">
                                €{Math.round(opp.value * opp.probability / 100).toLocaleString('de-DE')}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <Card className="bg-gradient-to-br from-purple-50 to-violet-50">
                      <CardHeader>
                        <CardTitle className="text-xl">Gesamtpotential</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-center space-y-4">
                          <div className="text-4xl font-bold text-purple-600">
                            €{roiMetrics.revenue.totalPotential.toLocaleString('de-DE')}
                          </div>
                          <div className="text-lg text-[#474747]">Zusätzliche Umsatzchancen</div>
                          <div className="pt-4 border-t">
                            <div className="text-sm text-[#474747] mb-2">Erwarteter Umsatz:</div>
                            <div className="text-3xl font-semibold text-purple-700">
                              €{roiMetrics.revenue.expectedValue.toLocaleString('de-DE')}
                            </div>
                          </div>
                          <Badge className="bg-green-100 text-green-700">
                            {roiMetrics.revenue.timeToRevenue}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Kundenbeispiele</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <Quote className="h-4 w-4 text-gray-400 mb-2" />
                          <p className="text-sm text-[#474747] italic">
                            "Durch ISO 27001 konnten wir drei neue Enterprise-Kunden gewinnen - 
                            Jahresumsatz +€3.2M"
                          </p>
                          <p className="text-xs text-gray-500 mt-2">- FinTech Startup, Berlin</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded-lg">
                          <Quote className="h-4 w-4 text-gray-400 mb-2" />
                          <p className="text-sm text-[#474747] italic">
                            "Die Zertifizierung war der Türöffner für unsere US-Expansion"
                          </p>
                          <p className="text-xs text-gray-500 mt-2">- SaaS Provider, München</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}

              {/* Risk Reduction */}
              {selectedMetric === 'risk' && (
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center gap-3">
                        <Shield className="h-6 w-6 text-red-600" />
                        Risikoreduktion durch ISO 27001
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {roiMetrics.risk.threats.map((threat, idx) => (
                          <motion.div
                            key={idx}
                            className="p-4 border rounded-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                          >
                            <h4 className="font-semibold text-[#232323] mb-3">{threat.type}</h4>
                            <div className="grid grid-cols-2 gap-4">
                              <div className="text-center p-3 bg-red-50 rounded">
                                <div className="text-sm text-red-700">Ohne ISO 27001</div>
                                <div className="text-xl font-bold text-red-600">{threat.probability}%</div>
                                <div className="text-xs text-red-600">Eintrittswahrscheinlichkeit</div>
                              </div>
                              <div className="text-center p-3 bg-green-50 rounded">
                                <div className="text-sm text-green-700">Mit ISO 27001</div>
                                <div className="text-xl font-bold text-green-600">{threat.withISO}%</div>
                                <div className="text-xs text-green-600">Reduzierte Wahrscheinlichkeit</div>
                              </div>
                            </div>
                            <div className="mt-3 pt-3 border-t flex items-center justify-between">
                              <span className="text-sm text-[#474747]">Potentieller Schaden:</span>
                              <span className="font-semibold text-red-600">
                                €{threat.cost.toLocaleString('de-DE')}
                              </span>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="space-y-6">
                    <Card className="bg-gradient-to-br from-red-50 to-orange-50">
                      <CardHeader>
                        <CardTitle className="text-xl">Jährliche Risikoexposition</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          <div className="text-center">
                            <div className="text-sm text-[#474747] mb-2">Ohne ISO 27001:</div>
                            <div className="text-3xl font-bold text-red-600">
                              €{roiMetrics.risk.annualRiskExposure.without.toLocaleString('de-DE')}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-sm text-[#474747] mb-2">Mit ISO 27001:</div>
                            <div className="text-3xl font-bold text-green-600">
                              €{roiMetrics.risk.annualRiskExposure.with.toLocaleString('de-DE')}
                            </div>
                          </div>
                          <div className="pt-4 border-t text-center">
                            <div className="text-sm text-[#474747] mb-2">Risikoreduktion:</div>
                            <div className="text-4xl font-bold text-green-700">
                              {roiMetrics.risk.annualRiskExposure.percentage}%
                            </div>
                            <div className="text-sm text-green-600 mt-2">
                              €{roiMetrics.risk.annualRiskExposure.reduction.toLocaleString('de-DE')} p.a. eingespart
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg">Zusätzliche Vorteile</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                            <CreditCard className="h-5 w-5 text-blue-600" />
                            <div>
                              <div className="font-medium text-[#232323]">Versicherungsprämien</div>
                              <div className="text-sm text-[#474747]">30-40% niedrigere Cyber-Versicherung</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                            <UserCheck className="h-5 w-5 text-purple-600" />
                            <div>
                              <div className="font-medium text-[#232323]">Kundenvertrauen</div>
                              <div className="text-sm text-[#474747]">87% höhere Kundenbindung</div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                            <Shield className="h-5 w-5 text-green-600" />
                            <div>
                              <div className="font-medium text-[#232323]">Rechtssicherheit</div>
                              <div className="text-sm text-[#474747]">Schutz vor Haftungsansprüchen</div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* ROI Summary CTA */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="max-w-2xl mx-auto bg-gradient-to-r from-[#e24e1b]/10 to-orange-50 border-2 border-[#e24e1b]/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-[#232323]">
                  Bereit für Ihren persönlichen ROI-Report?
                </h3>
                <p className="text-[#474747] mb-6">
                  Lassen Sie uns gemeinsam den konkreten Business Case für Ihr Unternehmen berechnen.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#f97316] hover:to-[#ea580c]">
                  ROI-Analyse anfordern
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  };

  // Case Studies Section - Fallstudien
  const CaseStudiesSection = () => {
    const [selectedStudy, setSelectedStudy] = useState(0);

    const caseStudies = [
      {
        company: 'TechFlow GmbH',
        industry: 'SaaS / Cloud Computing',
        size: '250 Mitarbeiter',
        logo: Cloud,
        challenge: 'Verlust von 3 Enterprise-Deals in 6 Monaten wegen fehlender ISO 27001-Zertifizierung. Manuelle Sicherheitsprozesse führten zu 40h/Woche Overhead.',
        solution: 'Marsstein-Plattform implementiert mit vollautomatisierter Compliance-Engine und KI-gestützter Dokumentation.',
        implementation: {
          duration: '4 Monate',
          phases: [
            { phase: 'Gap-Analyse', duration: '2 Wochen', status: 'Automatisiert' },
            { phase: 'ISMS-Aufbau', duration: '6 Wochen', status: 'KI-unterstützt' },
            { phase: 'Implementierung', duration: '8 Wochen', status: 'Tool-gestützt' },
            { phase: 'Zertifizierung', duration: '2 Wochen', status: 'Erfolgreich' }
          ]
        },
        results: {
          businessImpact: [
            { metric: 'Neue Enterprise-Kunden', value: '5', impact: '+€3.2M ARR' },
            { metric: 'Compliance-Aufwand', value: '-75%', impact: '30h/Woche gespart' },
            { metric: 'Audit-Durchlaufzeit', value: '-60%', impact: 'Von 5 auf 2 Tage' },
            { metric: 'Sicherheitsvorfälle', value: '-82%', impact: 'Von 11 auf 2 p.a.' }
          ],
          roi: '312% in 18 Monaten',
          testimonial: {
            quote: 'Mit Marsstein haben wir ISO 27001 in Rekordzeit erreicht. Die Automatisierung spart uns nicht nur Zeit, sondern macht uns auch bei Kunden glaubwürdiger. Beste Investition des Jahres!',
            author: 'Michael Schmidt',
            position: 'CTO, TechFlow GmbH'
          }
        },
        keyLearnings: [
          'Frühe Einbindung aller Stakeholder beschleunigt Adoption',
          'KI-Dokumentation reduziert Fehlerquote um 90%',
          'Kontinuierliches Monitoring verhindert Compliance-Drift'
        ]
      },
      {
        company: 'SecureBank AG',
        industry: 'Finanzdienstleistungen',
        size: '1.200 Mitarbeiter',
        logo: CreditCard,
        challenge: 'BaFin-Anforderungen + internationale Expansion erforderten multiple Compliance-Standards. 3 FTEs nur für Dokumentation.',
        solution: 'Multi-Standard Compliance Hub mit ISO 27001 als Basis, automatisches Mapping zu SOC 2 und PCI-DSS.',
        implementation: {
          duration: '6 Monate',
          phases: [
            { phase: 'Risiko-Assessment', duration: '3 Wochen', status: 'Umfassend' },
            { phase: 'Controls Mapping', duration: '4 Wochen', status: 'Automatisiert' },
            { phase: 'Rollout (3 Standorte)', duration: '12 Wochen', status: 'Gestaffelt' },
            { phase: 'Multi-Zertifizierung', duration: '4 Wochen', status: 'Parallel' }
          ]
        },
        results: {
          businessImpact: [
            { metric: 'Compliance-Kosten', value: '-68%', impact: '€450k/Jahr gespart' },
            { metric: 'Audit-Effizienz', value: '+85%', impact: 'Ein Audit für 3 Standards' },
            { metric: 'Time-to-Market', value: '-40%', impact: 'Neue Produkte schneller' },
            { metric: 'Kundenzufriedenheit', value: '+92%', impact: 'Trust Score' }
          ],
          roi: '428% in 24 Monaten',
          testimonial: {
            quote: 'Marsstein hat unsere Compliance-Landschaft revolutioniert. Statt drei parallelen Systemen haben wir jetzt eine integrierte Lösung, die alle Standards abdeckt.',
            author: 'Dr. Sarah Weber',
            position: 'CISO, SecureBank AG'
          }
        },
        keyLearnings: [
          'Integrierter Ansatz spart 70% Dokumentationsaufwand',
          'Automatisches Control-Mapping reduziert Redundanzen',
          'Echtzeit-Dashboards ermöglichen proaktives Management'
        ]
      },
      {
        company: 'MedTech Innovations',
        industry: 'Gesundheitswesen',
        size: '450 Mitarbeiter',
        logo: Heart,
        challenge: 'Kritische Medizingeräte-Software erforderte höchste Sicherheitsstandards. DSGVO + MDR Compliance parallel zu ISO 27001.',
        solution: 'Branchenspezifische ISO 27001-Templates mit Health-Compliance-Modulen, integrierte Datenschutz-Folgenabschätzung.',
        implementation: {
          duration: '5 Monate',
          phases: [
            { phase: 'Medical Device Mapping', duration: '3 Wochen', status: 'Spezialisiert' },
            { phase: 'ISMS + QMS Integration', duration: '6 Wochen', status: 'Harmonisiert' },
            { phase: 'Validierung', duration: '8 Wochen', status: 'FDA-konform' },
            { phase: 'Zertifizierung', duration: '3 Wochen', status: 'Bestanden' }
          ]
        },
        results: {
          businessImpact: [
            { metric: 'FDA-Zulassungszeit', value: '-45%', impact: '6 Monate schneller' },
            { metric: 'Compliance-Verstöße', value: '-100%', impact: 'Zero Incidents' },
            { metric: 'Patientendaten-Schutz', value: '+98%', impact: 'Verschlüsselung' },
            { metric: 'Marktexpansion', value: '+12', impact: 'Neue EU-Länder' }
          ],
          roi: '367% in 20 Monaten',
          testimonial: {
            quote: 'Die Healthcare-spezifischen Features von Marsstein waren entscheidend. Wir konnten ISO 27001 nahtlos mit unseren medizinischen Standards verbinden.',
            author: 'Prof. Dr. Thomas Müller',
            position: 'CEO, MedTech Innovations'
          }
        },
        keyLearnings: [
          'Branchenspezifische Templates sparen 60% Anpassungszeit',
          'Integrierte Compliance vermeidet Doppelarbeit',
          'Automatisierte Validierung beschleunigt Zulassungen'
        ]
      },
      {
        company: 'AutoDrive Systems',
        industry: 'Automobilindustrie',
        size: '2.500 Mitarbeiter',
        logo: Car,
        challenge: 'TISAX Level 3 + ISO 27001 für OEM-Anforderungen. Schutz von Prototyp-Daten und IP war geschäftskritisch.',
        solution: 'Dual-Compliance-System mit Prototype Protection Module, automatisierte Lieferanten-Assessments.',
        implementation: {
          duration: '7 Monate',
          phases: [
            { phase: 'TISAX-ISO Mapping', duration: '2 Wochen', status: 'Vollständig' },
            { phase: 'Prototype Security', duration: '8 Wochen', status: 'Level 4' },
            { phase: 'Supply Chain Integration', duration: '10 Wochen', status: 'ENX-Ready' },
            { phase: 'Dual-Zertifizierung', duration: '4 Wochen', status: 'Erfolgreich' }
          ]
        },
        results: {
          businessImpact: [
            { metric: 'OEM-Aufträge', value: '+8', impact: '€125M Pipeline' },
            { metric: 'IP-Schutz', value: '100%', impact: 'Zero Leaks' },
            { metric: 'Supplier Onboarding', value: '-70%', impact: 'Von 6 auf 2 Wochen' },
            { metric: 'Audit-Kosten', value: '-55%', impact: '€180k/Jahr gespart' }
          ],
          roi: '485% in 30 Monaten',
          testimonial: {
            quote: 'Marsstein ist der Game-Changer für Automotive-Compliance. Die TISAX-ISO Integration hat uns Türen zu allen großen OEMs geöffnet.',
            author: 'Ing. Klaus Fischer',
            position: 'Head of Security, AutoDrive Systems'
          }
        },
        keyLearnings: [
          'Kombinierte Audits sparen 50% Zeit und Kosten',
          'Automatisierte Lieferanten-Bewertung ist kritisch',
          'Continuous Monitoring verhindert Zertifikatsverlust'
        ]
      }
    ];

    return (
      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
              <Star className="h-3.5 w-3.5 mr-2" />
              Fallstudien
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Erfolgsgeschichten unserer Kunden
            </h2>
            <p className="text-lg text-[#474747] max-w-3xl mx-auto">
              Erfahren Sie, wie führende Unternehmen mit Marsstein ihre ISO 27001-Zertifizierung 
              erreicht und dabei messbare Geschäftserfolge erzielt haben.
            </p>
          </motion.div>

          {/* Case Study Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {caseStudies.map((study, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedStudy(index)}
                className={cn(
                  "group relative p-4 rounded-xl transition-all",
                  selectedStudy === index
                    ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-xl scale-105"
                    : "bg-white text-[#474747] hover:bg-gray-50 border-2 border-gray-200 hover:border-[#e24e1b]/30"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex flex-col items-center gap-2">
                  <study.logo className="h-8 w-8" />
                  <div className="text-center">
                    <div className="font-semibold">{study.company}</div>
                    <div className="text-xs opacity-80">{study.industry}</div>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {/* Case Study Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedStudy}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="max-w-6xl mx-auto"
            >
              <Card className="overflow-hidden border-0 shadow-2xl">
                {/* Header */}
                <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 p-8">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-white rounded-lg shadow-sm">
                          {React.createElement(caseStudies[selectedStudy].logo, { 
                            className: "h-10 w-10 text-[#e24e1b]" 
                          })}
                        </div>
                        <div>
                          <CardTitle className="text-3xl">{caseStudies[selectedStudy].company}</CardTitle>
                          <CardDescription className="text-base">
                            {caseStudies[selectedStudy].industry} • {caseStudies[selectedStudy].size}
                          </CardDescription>
                        </div>
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-700 text-lg px-4 py-2">
                      ROI: {caseStudies[selectedStudy].results.roi}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-8 space-y-8">
                  {/* Challenge & Solution */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div 
                      className="p-6 bg-red-50 rounded-lg"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 }}
                    >
                      <h3 className="font-semibold text-red-700 mb-3 flex items-center gap-2">
                        <AlertCircle className="h-5 w-5" />
                        Herausforderung
                      </h3>
                      <p className="text-[#474747]">{caseStudies[selectedStudy].challenge}</p>
                    </motion.div>
                    <motion.div 
                      className="p-6 bg-green-50 rounded-lg"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="font-semibold text-green-700 mb-3 flex items-center gap-2">
                        <Sparkles className="h-5 w-5" />
                        Lösung mit Marsstein
                      </h3>
                      <p className="text-[#474747]">{caseStudies[selectedStudy].solution}</p>
                    </motion.div>
                  </div>

                  {/* Implementation Timeline */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Clock className="h-5 w-5 text-[#e24e1b]" />
                      Implementierung in {caseStudies[selectedStudy].implementation.duration}
                    </h3>
                    <div className="relative">
                      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-green-600" />
                      <div className="space-y-4">
                        {caseStudies[selectedStudy].implementation.phases.map((phase, idx) => (
                          <motion.div
                            key={idx}
                            className="flex items-center gap-4"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 + idx * 0.1 }}
                          >
                            <div className="w-16 h-16 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center font-bold text-blue-600 z-10">
                              {idx + 1}
                            </div>
                            <div className="flex-1 p-4 bg-gray-50 rounded-lg">
                              <div className="flex items-center justify-between">
                                <div>
                                  <div className="font-semibold text-[#232323]">{phase.phase}</div>
                                  <div className="text-sm text-[#474747]">{phase.duration}</div>
                                </div>
                                <Badge variant="outline" className="text-xs">
                                  {phase.status}
                                </Badge>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      Messbare Ergebnisse
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {caseStudies[selectedStudy].results.businessImpact.map((result, idx) => (
                        <motion.div
                          key={idx}
                          className="p-4 bg-gradient-to-br from-white to-gray-50 rounded-lg border-2 border-gray-200 hover:border-green-300 transition-colors"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + idx * 0.1 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          <div className="text-3xl font-bold text-green-600 mb-2">{result.value}</div>
                          <div className="text-sm font-medium text-[#232323] mb-1">{result.metric}</div>
                          <div className="text-xs text-[#474747]">{result.impact}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <motion.div 
                    className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Quote className="h-8 w-8 text-blue-400 mb-4" />
                    <blockquote className="text-lg text-[#474747] italic mb-4">
                      "{caseStudies[selectedStudy].results.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#e24e1b] to-[#ea580c] rounded-full flex items-center justify-center text-white font-bold">
                        {caseStudies[selectedStudy].results.testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="font-semibold text-[#232323]">
                          {caseStudies[selectedStudy].results.testimonial.author}
                        </div>
                        <div className="text-sm text-[#474747]">
                          {caseStudies[selectedStudy].results.testimonial.position}
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Key Learnings */}
                  <div className="p-6 bg-[#e24e1b]/5 rounded-xl border-2 border-[#e24e1b]/20">
                    <h4 className="font-semibold text-[#232323] mb-4 flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-[#e24e1b]" />
                      Key Learnings
                    </h4>
                    <div className="space-y-2">
                      {caseStudies[selectedStudy].keyLearnings.map((learning, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.8 + idx * 0.1 }}
                        >
                          <CheckCircle2 className="h-5 w-5 text-[#e24e1b] mt-0.5" />
                          <span className="text-[#474747]">{learning}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* CTA */}
              <motion.div 
                className="mt-8 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <p className="text-[#474747] mb-4">
                  Möchten Sie ähnliche Erfolge erzielen?
                </p>
                <Button size="lg" className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] hover:from-[#f97316] hover:to-[#ea580c]">
                  Ihre Success Story starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    );
  };

  // Tools & Software Section
  const ToolsSoftwareSection = () => {
    const [selectedCategory, setSelectedCategory] = useState('grc');
    const [comparisonMode, setComparisonMode] = useState(false);

    const toolCategories = {
      grc: {
        title: 'GRC-Plattformen',
        icon: Shield,
        description: 'Governance, Risk & Compliance Management',
        tools: [
          {
            name: 'Marsstein Compliance Suite',
            vendor: 'Marsstein',
            features: ['KI-gestützte Automatisierung', 'Multi-Standard Support', 'Echtzeit-Monitoring', 'Integrierte Workflows'],
            pros: ['75% Zeitersparnis', 'ISO 27001 optimiert', 'Deutsche Lösung', 'DSGVO-konform'],
            cons: ['Relativ neu am Markt'],
            pricing: 'Ab €499/Monat',
            rating: 4.9,
            iso27001Ready: true,
            highlight: true
          },
          {
            name: 'ServiceNow GRC',
            vendor: 'ServiceNow',
            features: ['Enterprise-Integration', 'Workflow-Automatisierung', 'Risk Management', 'Policy Management'],
            pros: ['Große Plattform', 'Viele Integrationen', 'Etabliert'],
            cons: ['Komplex', 'Teuer', 'Lange Implementierung'],
            pricing: 'Ab €2.500/Monat',
            rating: 4.2,
            iso27001Ready: false
          },
          {
            name: 'MetricStream',
            vendor: 'MetricStream',
            features: ['Compliance Management', 'Risk Assessment', 'Audit Management', 'Business Intelligence'],
            pros: ['Umfassend', 'Flexibel', 'Global'],
            cons: ['Steile Lernkurve', 'US-fokussiert'],
            pricing: 'Auf Anfrage',
            rating: 4.0,
            iso27001Ready: true
          }
        ]
      },
      documentation: {
        title: 'Dokumentation',
        icon: FileText,
        description: 'ISMS-Dokumentation und Policy Management',
        tools: [
          {
            name: 'Confluence + ISO 27001 Templates',
            vendor: 'Atlassian',
            features: ['Wiki-System', 'Versionskontrolle', 'Kollaboration', 'Template-Bibliothek'],
            pros: ['Bekannt', 'Flexibel', 'Gute Integration'],
            cons: ['Manuelle Prozesse', 'Keine Automatisierung'],
            pricing: 'Ab €5/User/Monat',
            rating: 3.8,
            iso27001Ready: false
          },
          {
            name: 'Vanta',
            vendor: 'Vanta',
            features: ['Automatisierte Dokumentation', 'Continuous Monitoring', 'Evidence Collection', 'Audit-Ready'],
            pros: ['Stark automatisiert', 'Schnell', 'Modern'],
            cons: ['US-fokussiert', 'Begrenzte Anpassung'],
            pricing: 'Ab €800/Monat',
            rating: 4.5,
            iso27001Ready: true
          },
          {
            name: 'ISO 27001 Toolkit',
            vendor: 'Various',
            features: ['Template-Sammlung', 'Checklisten', 'Beispiel-Policies', 'Gap-Analysis Tools'],
            pros: ['Günstig', 'Sofort nutzbar', 'Praxiserprobt'],
            cons: ['Keine Software', 'Manuell', 'Keine Updates'],
            pricing: '€299-999 einmalig',
            rating: 3.5,
            iso27001Ready: true
          }
        ]
      },
      riskManagement: {
        title: 'Risikomanagement',
        icon: AlertCircle,
        description: 'Risk Assessment und Treatment',
        tools: [
          {
            name: 'FAIR-U',
            vendor: 'RiskLens',
            features: ['Quantitative Risikoanalyse', 'FAIR-Methodik', 'Szenario-Modellierung', 'ROI-Berechnung'],
            pros: ['Wissenschaftlich', 'Präzise', 'Business-fokussiert'],
            cons: ['Komplex', 'Teuer', 'Training nötig'],
            pricing: 'Ab €1.500/Monat',
            rating: 4.3,
            iso27001Ready: true
          },
          {
            name: 'Resolver',
            vendor: 'Resolver',
            features: ['Enterprise Risk Management', 'Incident Management', 'Compliance Tracking', 'Dashboards'],
            pros: ['Umfassend', 'Skalierbar', 'Audit-Trail'],
            cons: ['Enterprise-only', 'Komplex'],
            pricing: 'Auf Anfrage',
            rating: 4.1,
            iso27001Ready: true
          },
          {
            name: 'SimpleRisk',
            vendor: 'SimpleRisk',
            features: ['Open Source Option', 'Risk Scoring', 'Mitigation Tracking', 'Reporting'],
            pros: ['Open Source', 'Anpassbar', 'Community'],
            cons: ['Basis-Features', 'Support limitiert'],
            pricing: 'Free / €500/Jahr Pro',
            rating: 3.7,
            iso27001Ready: false
          }
        ]
      },
      monitoring: {
        title: 'Security Monitoring',
        icon: Eye,
        description: 'Continuous Monitoring & SIEM',
        tools: [
          {
            name: 'Splunk Enterprise Security',
            vendor: 'Splunk',
            features: ['SIEM', 'Log-Analyse', 'Threat Intelligence', 'Incident Response'],
            pros: ['Marktführer', 'Mächtig', 'Skalierbar'],
            cons: ['Sehr teuer', 'Komplex', 'Resource-intensiv'],
            pricing: 'Ab €5.000/Monat',
            rating: 4.6,
            iso27001Ready: false
          },
          {
            name: 'Elastic Security',
            vendor: 'Elastic',
            features: ['SIEM', 'Endpoint Security', 'Cloud Security', 'Open Source'],
            pros: ['Flexibel', 'Open Source Option', 'Modern'],
            cons: ['Setup-Aufwand', 'Expertise nötig'],
            pricing: 'Free / Ab €95/Monat',
            rating: 4.4,
            iso27001Ready: false
          },
          {
            name: 'Microsoft Sentinel',
            vendor: 'Microsoft',
            features: ['Cloud-native SIEM', 'AI-gestützt', 'Azure-Integration', 'Automatisierung'],
            pros: ['Cloud-first', 'KI-Features', 'Microsoft-Integration'],
            cons: ['Azure-gebunden', 'Kosten variabel'],
            pricing: 'Pay-as-you-go',
            rating: 4.3,
            iso27001Ready: false
          }
        ]
      }
    };

    const calculateTotalCost = (tools) => {
      // Simplified cost calculation for demonstration
      const costs = {
        'Marsstein Compliance Suite': 499,
        'ServiceNow GRC': 2500,
        'Vanta': 800,
        'Splunk Enterprise Security': 5000,
        'Microsoft Sentinel': 1500 // estimated
      };
      
      return tools.reduce((total, tool) => {
        return total + (costs[tool.name] || 0);
      }, 0);
    };

    return (
      <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
              <Monitor className="h-3.5 w-3.5 mr-2" />
              Tools & Software
            </Badge>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
              Die richtigen Tools für Ihre ISO 27001-Reise
            </h2>
            <p className="text-lg text-[#474747] max-w-3xl mx-auto">
              Vergleichen Sie führende Compliance-Tools und finden Sie die perfekte Lösung für Ihr Unternehmen. 
              Von GRC-Plattformen bis Security Monitoring - wir zeigen Ihnen, was wirklich funktioniert.
            </p>
          </motion.div>

          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(toolCategories).map(([key, category]) => (
              <motion.button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={cn(
                  "flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all",
                  selectedCategory === key
                    ? "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white shadow-lg"
                    : "bg-white text-[#474747] hover:bg-gray-50 border-2 border-gray-200"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="h-5 w-5" />
                {category.title}
              </motion.button>
            ))}
          </div>

          {/* Comparison Mode Toggle */}
          <div className="flex justify-center mb-12">
            <Button
              variant={comparisonMode ? "default" : "outline"}
              onClick={() => setComparisonMode(!comparisonMode)}
              size="sm"
            >
              <BarChart3 className="mr-2 h-4 w-4" />
              {comparisonMode ? 'Einzelansicht' : 'Vergleichsmodus'}
            </Button>
          </div>

          {/* Tools Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              {!comparisonMode ? (
                // Card View
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                  {toolCategories[selectedCategory].tools.map((tool, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Card className={cn(
                        "h-full hover:shadow-xl transition-all",
                        tool.highlight && "border-2 border-[#e24e1b] relative"
                      )}>
                        {tool.highlight && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <Badge className="bg-[#e24e1b] text-white">
                              Empfehlung
                            </Badge>
                          </div>
                        )}
                        <CardHeader>
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <CardTitle className="text-xl">{tool.name}</CardTitle>
                              <CardDescription>{tool.vendor}</CardDescription>
                            </div>
                            {tool.iso27001Ready && (
                              <Badge className="bg-green-100 text-green-700">
                                ISO 27001 Ready
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={cn(
                                  "h-4 w-4",
                                  i < Math.floor(tool.rating)
                                    ? "text-yellow-500 fill-yellow-500"
                                    : "text-gray-300"
                                )}
                              />
                            ))}
                            <span className="text-sm text-[#474747]">{tool.rating}</span>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {/* Features */}
                          <div>
                            <h4 className="font-medium text-sm text-[#232323] mb-2">Features:</h4>
                            <div className="flex flex-wrap gap-2">
                              {tool.features.map((feature, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {feature}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Pros & Cons */}
                          <div className="grid grid-cols-2 gap-3">
                            <div>
                              <h5 className="text-xs font-medium text-green-700 mb-1">Vorteile:</h5>
                              <ul className="space-y-1">
                                {tool.pros.slice(0, 3).map((pro, i) => (
                                  <li key={i} className="text-xs text-[#474747] flex items-start gap-1">
                                    <CheckCircle2 className="h-3 w-3 text-green-600 mt-0.5" />
                                    <span>{pro}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h5 className="text-xs font-medium text-red-700 mb-1">Nachteile:</h5>
                              <ul className="space-y-1">
                                {tool.cons.map((con, i) => (
                                  <li key={i} className="text-xs text-[#474747] flex items-start gap-1">
                                    <XCircle className="h-3 w-3 text-red-600 mt-0.5" />
                                    <span>{con}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          {/* Pricing */}
                          <div className="pt-3 border-t">
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-medium text-[#474747]">Preis:</span>
                              <span className="font-semibold text-[#232323]">{tool.pricing}</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              ) : (
                // Comparison Table
                <Card className="max-w-6xl mx-auto">
                  <CardContent className="p-0">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead className="bg-gray-50 border-b">
                          <tr>
                            <th className="text-left p-4 font-medium text-[#232323]">Tool</th>
                            <th className="text-center p-4 font-medium text-[#232323]">Rating</th>
                            <th className="text-center p-4 font-medium text-[#232323]">ISO 27001</th>
                            <th className="text-center p-4 font-medium text-[#232323]">Preis</th>
                            <th className="text-left p-4 font-medium text-[#232323]">Beste für</th>
                          </tr>
                        </thead>
                        <tbody>
                          {toolCategories[selectedCategory].tools.map((tool, idx) => (
                            <motion.tr
                              key={idx}
                              className={cn(
                                "border-b hover:bg-gray-50",
                                tool.highlight && "bg-[#e24e1b]/5"
                              )}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                            >
                              <td className="p-4">
                                <div>
                                  <div className="font-medium text-[#232323] flex items-center gap-2">
                                    {tool.name}
                                    {tool.highlight && (
                                      <Badge className="bg-[#e24e1b] text-white text-xs">
                                        Top
                                      </Badge>
                                    )}
                                  </div>
                                  <div className="text-sm text-[#474747]">{tool.vendor}</div>
                                </div>
                              </td>
                              <td className="p-4 text-center">
                                <div className="flex justify-center items-center gap-1">
                                  {[...Array(5)].map((_, i) => (
                                    <Star
                                      key={i}
                                      className={cn(
                                        "h-3 w-3",
                                        i < Math.floor(tool.rating)
                                          ? "text-yellow-500 fill-yellow-500"
                                          : "text-gray-300"
                                      )}
                                    />
                                  ))}
                                  <span className="text-sm ml-1">{tool.rating}</span>
                                </div>
                              </td>
                              <td className="p-4 text-center">
                                {tool.iso27001Ready ? (
                                  <CheckCircle2 className="h-5 w-5 text-green-600 mx-auto" />
                                ) : (
                                  <XCircle className="h-5 w-5 text-gray-400 mx-auto" />
                                )}
                              </td>
                              <td className="p-4 text-center font-medium">{tool.pricing}</td>
                              <td className="p-4 text-sm text-[#474747]">
                                {tool.pros[0]}
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Tool Stack Builder */}
          <motion.div 
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Layers className="h-6 w-6 text-[#e24e1b]" />
                  Empfohlener ISO 27001 Tool-Stack
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-[#232323]">Minimal Stack (KMU)</h4>
                      <div className="space-y-2">
                        <div className="p-3 bg-white rounded-lg flex items-center justify-between">
                          <span className="text-sm">Marsstein Compliance Suite</span>
                          <span className="text-sm font-medium">€499/M</span>
                        </div>
                        <div className="p-3 bg-white rounded-lg flex items-center justify-between">
                          <span className="text-sm">Microsoft 365 Security</span>
                          <span className="text-sm font-medium">Inkl.</span>
                        </div>
                      </div>
                      <div className="pt-3 border-t">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Gesamtkosten:</span>
                          <span className="font-bold text-green-600">€499/Monat</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-[#232323]">Enterprise Stack</h4>
                      <div className="space-y-2">
                        <div className="p-3 bg-white rounded-lg flex items-center justify-between">
                          <span className="text-sm">Marsstein Enterprise</span>
                          <span className="text-sm font-medium">€2.999/M</span>
                        </div>
                        <div className="p-3 bg-white rounded-lg flex items-center justify-between">
                          <span className="text-sm">Splunk SIEM</span>
                          <span className="text-sm font-medium">€5.000/M</span>
                        </div>
                        <div className="p-3 bg-white rounded-lg flex items-center justify-between">
                          <span className="text-sm">Vanta Automation</span>
                          <span className="text-sm font-medium">€800/M</span>
                        </div>
                      </div>
                      <div className="pt-3 border-t">
                        <div className="flex items-center justify-between">
                          <span className="font-medium">Gesamtkosten:</span>
                          <span className="font-bold text-orange-600">€8.799/Monat</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-[#e24e1b]/10 rounded-lg">
                    <p className="text-sm text-[#474747] flex items-start gap-2">
                      <Sparkles className="h-4 w-4 text-[#e24e1b] mt-0.5" />
                      <span>
                        <strong>Tipp:</strong> Starten Sie mit dem Minimal Stack und erweitern Sie bei Bedarf. 
                        80% der ISO 27001-Anforderungen lassen sich mit Marsstein + bestehenden Tools abdecken.
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    );
  };

  // Pricing Section

  // FAQ Section
  const FAQSection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
            <BookOpen className="h-3.5 w-3.5 mr-2" />
            Häufige Fragen
          </Badge>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Alles was Sie über ISO 27001 wissen müssen
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Was ist ISO 27001 und warum ist es wichtig?",
                answer: "ISO 27001 ist der internationale Standard für Informationssicherheits-Managementsysteme (ISMS). Er hilft Organisationen dabei, Informationssicherheit systematisch zu managen und kontinuierlich zu verbessern. Die Zertifizierung beweist Kunden und Partnern, dass Ihre Organisation höchste Sicherheitsstandards einhält."
              },
              {
                question: "Wie lange dauert eine ISO 27001-Zertifizierung?",
                answer: "Mit Marsstein verkürzen wir den traditionellen Zertifizierungsprozess erheblich. Während herkömmliche Ansätze 12-18 Monate dauern können, erreichen unsere Kunden die Zertifizierung typischerweise in 6-9 Monaten durch unsere KI-gestützte Automatisierung und strukturierte Herangehensweise."
              },
              {
                question: "Welche Kosten sind mit einer ISO 27001-Zertifizierung verbunden?",
                answer: "Neben unseren Service-Gebühren fallen zusätzliche Kosten für die externe Zertifizierungsstelle an (ca. 8.000-15.000€ je nach Unternehmensgröße) sowie eventuell für Penetrationstests. Wir beraten Sie transparent über alle anfallenden Kosten."
              },
              {
                question: "Ist ein Penetrationstest für ISO 27001 verpflichtend?",
                answer: "Ein Penetrationstest ist nicht explizit vorgeschrieben, wird aber von den meisten Auditoren erwartet, besonders bei IT-lastigen Unternehmen. Wir empfehlen einen professionellen Pentest zur Risikobewertung und können Sie an qualifizierte Partner vermitteln."
              },
              {
                question: "Wie unterscheidet sich ISO 27001 von anderen Compliance-Standards?",
                answer: "ISO 27001 fokussiert speziell auf Informationssicherheit und ist international anerkannt. Im Gegensatz zu DSGVO (datenschutzfokussiert) oder SOC 2 (US-amerikanisch) bietet ISO 27001 einen ganzheitlichen Ansatz für Informationssicherheits-Management und öffnet Türen zu globalen Märkten."
              },
              {
                question: "Was passiert nach der Zertifizierung?",
                answer: "ISO 27001-Zertifikate sind 3 Jahre gültig mit jährlichen Überwachungsaudits. Wir unterstützen Sie kontinuierlich bei der Aufrechterhaltung Ihrer Compliance, Updates bei Änderungen des Standards und der Vorbereitung auf Folgeaudits."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-[#474747] leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );

  // Resources Section
  const ResourcesSection = () => {
    const [selectedResourceType, setSelectedResourceType] = useState('guides');
    const [downloadCount, setDownloadCount] = useState({
      checklist: 1247,
      guide: 3891,
      template: 2156,
      whitepaper: 987
    });

    const resourceTypes = {
      guides: {
        title: "Leitfäden & Handbücher",
        icon: BookOpen,
        resources: [
          {
            title: "ISO 27001 Implementierungsleitfaden",
            description: "Schritt-für-Schritt-Anleitung zur erfolgreichen ISO 27001 Implementierung",
            fileType: "PDF",
            fileSize: "4.2 MB",
            pages: 68,
            downloadId: 'guide',
            highlights: ["Praxisbeispiele", "Checklisten", "Timeline-Vorlagen"]
          },
          {
            title: "ISMS Aufbau & Betrieb",
            description: "Detaillierter Guide zum Aufbau eines Information Security Management Systems",
            fileType: "PDF",
            fileSize: "3.8 MB",
            pages: 52,
            downloadId: 'guide',
            highlights: ["Best Practices", "KPI-Definitionen", "Rollenkonzepte"]
          },
          {
            title: "ISO 27001:2022 Änderungen",
            description: "Alle Neuerungen der aktuellen ISO 27001:2022 Version im Überblick",
            fileType: "PDF",
            fileSize: "1.9 MB",
            pages: 24,
            downloadId: 'guide',
            highlights: ["Gap-Analyse", "Transition Guide", "Neue Controls"]
          }
        ]
      },
      templates: {
        title: "Vorlagen & Muster",
        icon: FileText,
        resources: [
          {
            title: "ISO 27001 Dokumentationsvorlagen",
            description: "Komplettes Set an Richtlinien- und Prozessvorlagen für Ihr ISMS",
            fileType: "DOCX Bundle",
            fileSize: "12.4 MB",
            pages: 42,
            downloadId: 'template',
            highlights: ["Anpassbare Vorlagen", "27 Dokumente", "Word & Excel"]
          },
          {
            title: "Risikobewertung Excel-Tool",
            description: "Professionelles Excel-Tool zur ISO 27001 konformen Risikobewertung",
            fileType: "XLSX",
            fileSize: "2.1 MB",
            pages: 8,
            downloadId: 'template',
            highlights: ["Automatisierte Berechnung", "Dashboard", "Reports"]
          },
          {
            title: "Audit-Checklisten Bundle",
            description: "Umfassende Checklisten für interne Audits und Managementreviews",
            fileType: "XLSX Bundle",
            fileSize: "3.5 MB",
            pages: 15,
            downloadId: 'template',
            highlights: ["114 Controls", "Bewertungsmatrix", "Action Tracking"]
          }
        ]
      },
      checklists: {
        title: "Checklisten",
        icon: CheckSquare,
        resources: [
          {
            title: "ISO 27001 Readiness Checklist",
            description: "Prüfen Sie Ihre Bereitschaft für die ISO 27001 Zertifizierung",
            fileType: "PDF",
            fileSize: "890 KB",
            pages: 12,
            downloadId: 'checklist',
            highlights: ["Quick Assessment", "Gap-Identifikation", "Prioritäten"]
          },
          {
            title: "Control Implementation Checklist",
            description: "Detaillierte Checkliste für alle 114 ISO 27001 Controls",
            fileType: "PDF",
            fileSize: "1.4 MB",
            pages: 28,
            downloadId: 'checklist',
            highlights: ["Alle Controls", "Umsetzungsstatus", "Evidenzen"]
          },
          {
            title: "Zertifizierungsaudit Vorbereitung",
            description: "Checkliste zur optimalen Vorbereitung auf das Zertifizierungsaudit",
            fileType: "PDF",
            fileSize: "650 KB",
            pages: 8,
            downloadId: 'checklist',
            highlights: ["Audit-Vorbereitung", "Dokumentenliste", "Do's & Don'ts"]
          }
        ]
      },
      whitepapers: {
        title: "Whitepapers & Studien",
        icon: FileCheck,
        resources: [
          {
            title: "ROI von ISO 27001 Zertifizierungen",
            description: "Studie zum Return on Investment von ISO 27001 in deutschen Unternehmen",
            fileType: "PDF",
            fileSize: "5.2 MB",
            pages: 36,
            downloadId: 'whitepaper',
            highlights: ["Marktstudie 2024", "500+ Unternehmen", "ROI-Analyse"]
          },
          {
            title: "ISO 27001 & Cloud Security",
            description: "Integration von ISO 27001 in moderne Cloud-Infrastrukturen",
            fileType: "PDF",
            fileSize: "3.9 MB",
            pages: 42,
            downloadId: 'whitepaper',
            highlights: ["AWS/Azure/GCP", "Best Practices", "Case Studies"]
          },
          {
            title: "KI-gestützte ISMS-Optimierung",
            description: "Wie künstliche Intelligenz Ihr ISMS verbessern kann",
            fileType: "PDF",
            fileSize: "4.6 MB",
            pages: 38,
            downloadId: 'whitepaper',
            highlights: ["Marsstein AI", "Automatisierung", "Zukunftstrends"]
          }
        ]
      }
    };

    const handleDownload = (resourceId) => {
      setDownloadCount(prev => ({
        ...prev,
        [resourceId]: prev[resourceId] + 1
      }));
    };

    return (
      <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="container px-4">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#232323]">
              ISO 27001 Ressourcen-Center
            </h2>
            <p className="text-xl text-[#474747] max-w-3xl mx-auto">
              Kostenlose Vorlagen, Leitfäden und Tools für Ihre erfolgreiche ISO 27001 Zertifizierung
            </p>
          </motion.div>

          {/* Resource Type Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(resourceTypes).map(([key, type]) => {
              const Icon = type.icon;
              return (
                <motion.button
                  key={key}
                  onClick={() => setSelectedResourceType(key)}
                  className={cn(
                    "flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all",
                    selectedResourceType === key
                      ? "bg-[#e24e1b] text-white shadow-lg"
                      : "bg-white text-[#474747] hover:bg-gray-100 border"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5" />
                  {type.title}
                </motion.button>
              );
            })}
          </div>

          {/* Resources Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            <AnimatePresence mode="wait">
              {resourceTypes[selectedResourceType].resources.map((resource, idx) => (
                <motion.div
                  key={`${selectedResourceType}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {resource.fileType}
                        </Badge>
                        <span className="text-sm text-[#474747]">{resource.fileSize}</span>
                      </div>
                      <CardTitle className="text-xl mb-2 text-[#232323] group-hover:text-[#e24e1b] transition-colors">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-[#474747]">
                        {resource.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Highlights */}
                      <div className="flex flex-wrap gap-2">
                        {resource.highlights.map((highlight, i) => (
                          <span
                            key={i}
                            className="text-xs px-2 py-1 bg-blue-50 text-blue-700 rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Metadata */}
                      <div className="flex items-center justify-between text-sm text-[#474747]">
                        <span className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          {resource.pages} Seiten
                        </span>
                        <span className="flex items-center gap-1">
                          <Download className="h-4 w-4" />
                          {downloadCount[resource.downloadId].toLocaleString()} Downloads
                        </span>
                      </div>

                      {/* Download Button */}
                      <Button 
                        className="w-full bg-[#e24e1b] hover:bg-[#c73e16] text-white"
                        onClick={() => handleDownload(resource.downloadId)}
                      >
                        <Download className="mr-2 h-4 w-4" />
                        Jetzt herunterladen
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Additional Resources */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {/* Webinar Section */}
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <PlayCircle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#232323]">
                    ISO 27001 Webinare
                  </CardTitle>
                </div>
                <CardDescription className="text-[#474747]">
                  Kostenlose Live-Webinare und Aufzeichnungen zu ISO 27001 Themen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-[#232323]">ISO 27001 Basics</h4>
                      <Badge className="bg-green-100 text-green-700">Nächste Woche</Badge>
                    </div>
                    <p className="text-sm text-[#474747]">
                      Einführung in die ISO 27001 Zertifizierung für Einsteiger
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-[#474747]">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        Di, 20. Nov
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        14:00 Uhr
                      </span>
                    </div>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-blue-200">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-[#232323]">Risikomanagement Workshop</h4>
                      <Badge variant="secondary">Aufzeichnung</Badge>
                    </div>
                    <p className="text-sm text-[#474747]">
                      Praktische Tipps zur ISO 27001 konformen Risikobewertung
                    </p>
                    <div className="flex items-center gap-4 mt-2 text-xs text-[#474747]">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        90 Minuten
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        523 Teilnehmer
                      </span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full">
                  Alle Webinare anzeigen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Newsletter Section */}
            <Card className="bg-gradient-to-br from-orange-50 to-red-50 border-orange-200">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-[#e24e1b] rounded-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl text-[#232323]">
                    ISO 27001 Newsletter
                  </CardTitle>
                </div>
                <CardDescription className="text-[#474747]">
                  Monatliche Updates zu ISO 27001, Best Practices und Compliance-News
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-[#474747]">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Aktuelle ISO 27001 Entwicklungen</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#474747]">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Praxistipps von Experten</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#474747]">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Kostenlose Vorlagen & Tools</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#474747]">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <span>Webinar-Einladungen</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <p className="text-sm text-[#474747] mb-4">
                    Bereits <span className="font-semibold">4.200+ Abonnenten</span> profitieren von unserem Newsletter
                  </p>
                  <Button className="w-full bg-[#e24e1b] hover:bg-[#c73e16] text-white">
                    Newsletter abonnieren
                    <Sparkles className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Support Banner */}
          <motion.div
            className="mt-16 p-8 bg-gradient-to-r from-[#232323] to-[#474747] rounded-2xl text-white text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <h3 className="text-2xl font-bold mb-4">
              Benötigen Sie persönliche Unterstützung?
            </h3>
            <p className="text-lg mb-6 text-white/90">
              Unsere ISO 27001 Experten helfen Ihnen gerne bei der Auswahl der richtigen Ressourcen
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-[#232323] hover:bg-gray-100">
                <Phone className="mr-2 h-5 w-5" />
                Experten kontaktieren
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#232323]">
                <Calendar className="mr-2 h-5 w-5" />
                Beratungstermin buchen
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };

  // CTA Section
  const CTASection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-[#a1251b] to-purple-600 text-white">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <Badge className="bg-white/20 text-white border-white/20">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            Bereit für die internationale Bühne?
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">
            Starten Sie heute Ihre ISO 27001-Zertifizierung
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Starten Sie Ihre professionelle ISO 27001-Zertifizierung 
            mit Marsstein und erschließen Sie internationale Märkte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-white text-[#e24e1b] hover:bg-[#F5F6F8]/80 px-8">
              <Shield className="mr-2 h-5 w-5" />
              Kostenlose Beratung buchen
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#e24e1b] px-8">
              <Download className="mr-2 h-5 w-5" />
              ISO 27001 Guide herunterladen
            </Button>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8 pt-12 text-white/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Kostenlose Erstberatung</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Unverbindliche Gap-Analyse</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5" />
              <span>Transparente Preise</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

// Main Component
const Iso27001Compliance = () => {
  const [activeSection, setActiveSection] = useState<string>('overview');
  
  // Navigation items with German labels
  const navigationItems = [
    { id: 'ueberblick', label: 'Überblick', icon: Shield },
    { id: 'schmerzpunkte', label: 'Schmerzpunkte', icon: AlertCircle },
    { id: 'iso-details', label: 'ISO 27001 Details', icon: FileText },
    { id: 'vorteile', label: 'Vorteile', icon: CheckCircle2 },
    { id: 'roi', label: 'ROI', icon: TrendingUp },
    { id: 'implementierung', label: 'Implementierung', icon: Settings },
    { id: 'zertifizierung', label: 'Zertifizierung', icon: Award },
    { id: 'wartung', label: 'Wartung', icon: Shield },
    { id: 'integration', label: 'Integration', icon: Layers },
    { id: 'branchen', label: 'Branchen', icon: Building2 },
    { id: 'fallstudien', label: 'Fallstudien', icon: BookOpen },
    { id: 'prozess', label: 'Prozess', icon: Rocket },
    { id: 'tools', label: 'Tools', icon: Monitor },
    { id: 'ressourcen', label: 'Ressourcen', icon: FileCheck },
    { id: 'faq', label: 'FAQ', icon: Globe }
  ];

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    window.history.pushState(null, '', `#${sectionId}`);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Handle initial load with hash
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveSection(hash);
      }, 100);
    }
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));
      
      const scrollPosition = window.scrollY + 150;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "ISO 27001 Zertifizierung",
    "description": "ISO 27001 Zertifizierung und ISMS Implementierung für Informationssicherheit",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Information Security Management",
    "areaServed": "DE"
  };

  return (
    <>
      <SEOHead
        title="ISO 27001 Zertifizierung – ISMS erfolgreich aufbauen"
        description="ISO 27001 Zertifizierung meistern: ISMS-Implementierung, Gap-Analyse & Audit-Vorbereitung. ✓ Schritt-für-Schritt ✓ Praxisnah. Jetzt starten!"
        canonical="/iso-27001-zertifizierung"
        keywords="ISO 27001, ISMS, Informationssicherheit, ISO 27001 Zertifizierung, IT-Sicherheit"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section id="ueberblick" className="scroll-mt-32">
          <HeroSection />
        </section>
        
        {/* Sticky Navigation */}
        <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto">
              <nav className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide">
                {navigationItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setActiveSection(item.id);
                    }}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
                      activeSection === item.id
                        ? "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800"
                        : "hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-700 dark:hover:text-red-400",
                      "border",
                      activeSection === item.id
                        ? "border-red-200 dark:border-red-800"
                        : "border-transparent hover:border-red-200 dark:hover:border-red-800"
                    )}
                  >
                    <item.icon className={cn(
                      "h-4 w-4",
                      activeSection === item.id && "text-red-600 dark:text-red-500"
                    )} />
                    <span className={cn(
                      "text-sm font-medium",
                      activeSection === item.id && "text-red-700 dark:text-red-400"
                    )}>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="py-20">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto space-y-20">
              
              {/* Schmerzpunkte Section */}
              <section id="schmerzpunkte" className="space-y-8 scroll-mt-32">
                <PainpointSection />
              </section>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              
              {/* Deep Dive Section */}
              <section id="iso-details" className="space-y-8 scroll-mt-32">
                <Iso27001DeepDiveSection />
              </section>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              
              {/* Vorteile Section */}
              <section id="vorteile" className="space-y-8 scroll-mt-32">
                <BenefitsSection />
              </section>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              
              {/* ROI Section */}
              <section id="roi" className="space-y-8 scroll-mt-32">
                <ROISection />
              </section>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              
              {/* Implementierung Section */}
              <section id="implementierung" className="space-y-8 scroll-mt-32">
                <ImplementationSection />
              </section>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              
              {/* Zertifizierung Section */}
              <section id="zertifizierung" className="space-y-8 scroll-mt-32">
                <CertificationProcessSection />
              </section>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              
              {/* Wartung Section */}
              <section id="wartung" className="space-y-8 scroll-mt-32">
                <MaintenanceSection />
              </section>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              
              {/* Integration Section */}
              <section id="integration" className="space-y-8 scroll-mt-32">
                <IntegrationStandardsSection />
              </section>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              
              {/* Branchen Section */}
              <section id="branchen" className="space-y-8 scroll-mt-32">
                <IndustrySpecificsSection />
              </section>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              
              {/* Fallstudien Section */}
              <section id="fallstudien" className="space-y-8 scroll-mt-32">
                <CaseStudiesSection />
              </section>
              
              {/* Target Industries - separate section without navigation */}
              <TargetIndustriesSection />
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              
              {/* Prozess Section */}
              <section id="prozess" className="space-y-8 scroll-mt-32">
                <ProcessSection />
              </section>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              
              {/* Tools Section */}
              <section id="tools" className="space-y-8 scroll-mt-32">
                <ToolsSoftwareSection />
              </section>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              
              {/* Ressourcen Section */}
              <section id="ressourcen" className="space-y-8 scroll-mt-32">
                <ResourcesSection />
              </section>
              
              {/* Divider */}
              <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
              
              {/* FAQ Section */}
              <section id="faq" className="space-y-8 scroll-mt-32">
                <FAQSection />
              </section>
              
              {/* CTA Section */}
              <CTASection />
              
            </div>
          </div>
        </div>
        
        <Footer />
    </div>
    </>
  );
};

export default Iso27001Compliance;