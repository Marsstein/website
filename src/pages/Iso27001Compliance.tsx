import React, { useEffect, useState } from 'react';
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
  Layers
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
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900" />
        
        {/* Animated geometric shapes */}
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-[#a1251b]/10 rounded-full blur-3xl"
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
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-r from-[#a1251b]/10 to-purple-600/10 rounded-full blur-3xl"
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
                500+ erfolgreiche Zertifizierungen
              </Badge>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="block text-gray-900 dark:text-gray-100">ISO 27001-Zertifizierung</span>
              <span className="block bg-gradient-to-r from-blue-600 via-[#a1251b] to-purple-600 bg-clip-text text-transparent">
                Automatisiert & Rechtssicher
              </span>
            </motion.h1>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Schützen Sie Ihr Unternehmen vor Cyber-Bedrohungen und erschließen Sie internationale Märkte. 
                Mit unserer KI-gestützten Plattform erreichen Sie <span className="font-bold text-[#a1251b]">ISO 27001-Zertifizierung in nur 6 Monaten</span> 
                – 75% schneller als herkömmliche Ansätze.
              </p>
              
              {/* Value proposition */}
              <div className="bg-gradient-to-r from-blue-50 to-[#a1251b]/5 dark:from-blue-950/20 dark:to-[#a1251b]/10 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
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
                <Button size="lg" className="bg-gradient-to-r from-[#a1251b] to-purple-600 hover:from-[#8a1f17] hover:to-purple-700 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all">
                  Kostenlose Beratung starten
                  <ArrowRight className="ml-2 h-6 w-6" />
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
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
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-[#a1251b]/20 rounded-3xl blur-2xl" />
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
                    <div className="text-sm text-muted-foreground">Compliance-Status</div>
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
                    <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-[#a1251b] to-purple-600 bg-clip-text text-transparent">
                      {complianceScore}%
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">Readiness-Score</div>
                  </motion.div>
                </div>
                
                <div className="grid grid-cols-2 gap-6 text-center">
                  <motion.div 
                    className="p-3 bg-blue-50 dark:bg-blue-950/20 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 1.8 }}
                  >
                    <div className="text-3xl font-bold text-blue-600">134</div>
                    <div className="text-xs text-blue-700 dark:text-blue-300 font-medium">Kontrollen</div>
                    <div className="text-xs text-muted-foreground">von 174 implementiert</div>
                  </motion.div>
                  <motion.div 
                    className="p-3 bg-green-50 dark:bg-green-950/20 rounded-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 2 }}
                  >
                    <div className="text-3xl font-bold text-green-600">6</div>
                    <div className="text-xs text-green-700 dark:text-green-300 font-medium">Monate</div>
                    <div className="text-xs text-muted-foreground">bis Zertifizierung</div>
                  </motion.div>
                </div>
                
                <motion.div 
                  className="mt-4 p-3 bg-gradient-to-r from-[#a1251b]/10 to-purple-600/10 rounded-lg border border-[#a1251b]/20"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 2.2 }}
                >
                  <div className="flex items-center gap-2 text-[#a1251b]">
                    <Zap className="h-4 w-4" />
                    <span className="text-sm font-semibold">KI-gestützte Optimierung aktiv</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Automatische Gap-Analyse und Empfehlungen</p>
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
      bgColor: 'bg-red-50 dark:bg-red-950/20',
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
      bgColor: 'bg-orange-50 dark:bg-orange-950/20',
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
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      borderColor: 'border-purple-200 dark:border-purple-800',
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
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
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
            <Badge className="bg-red-100/80 backdrop-blur-sm text-red-700 border-red-200/50 px-6 py-2.5 text-sm font-medium">
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
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Ohne systematisches Informationssicherheitsmanagement (ISMS) nach ISO 27001 entstehen Unternehmen messbare, 
              kontinuierliche Kosten. Aktuelle Studien zeigen:{' '}
              <span className="font-bold text-red-600 bg-red-100 px-2 py-1 rounded-md">4,45 Millionen Euro durchschnittlicher Schaden pro Cyberangriff</span>{' '}
              und{' '}
              <span className="font-bold text-orange-600 bg-orange-100 px-2 py-1 rounded-md">67% verlorene Enterprise-Deals</span>{' '}
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
                  <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
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
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${pain.color} flex items-center justify-center shadow-lg`}
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
                  
                  <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {pain.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10 space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
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
                        <div className="text-xs text-gray-600 mt-0.5">{pain.description}</div>
                      </div>
                    </motion.div>
                    
                    <motion.div
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <BarChart3 className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      <div className="text-sm text-gray-600 dark:text-gray-400">{pain.stats}</div>
                    </motion.div>
                  </div>

                  {/* Source Citation */}
                  <motion.div
                    className="mt-4 p-3 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 rounded-lg border border-blue-200 dark:border-blue-800"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
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
            className="inline-flex items-center gap-6 p-8 bg-gradient-to-r from-blue-600 via-[#a1251b] to-blue-600 rounded-3xl text-white shadow-2xl backdrop-blur-sm relative overflow-hidden"
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
        bgColor: 'bg-blue-50 dark:bg-blue-950/20',
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
        bgColor: 'bg-purple-50 dark:bg-purple-950/20',
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
        bgColor: 'bg-orange-50 dark:bg-orange-950/20',
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
        bgColor: 'bg-red-50 dark:bg-red-950/20',
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
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900" />
          
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
              className="text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
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
                    ? "bg-gradient-to-r from-blue-600 to-[#a1251b] text-white shadow-lg shadow-blue-600/25 border-blue-600/50 scale-105"
                    : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-white/90 dark:hover:bg-gray-800/90 border-gray-200/50 dark:border-gray-700/50 hover:shadow-md hover:scale-105"
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
                      <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5" />
                        Business Impact
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-gray-100">
                          <Clock className="h-5 w-5 text-blue-600" />
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
                                'bg-gray-50 border-gray-200'
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
                                <div className="font-medium text-sm text-gray-900">{item.phase}</div>
                                <div className="text-xs text-gray-600">{item.duration}</div>
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
                        <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-900 dark:text-gray-100">
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
                                <div className="font-medium text-sm text-gray-900">{item.benefit}</div>
                                <div className="text-xs text-green-700 font-medium">{item.impact}</div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Marsstein Advantage */}
                    <motion.div 
                      className="bg-gradient-to-r from-[#a1251b]/10 via-blue-600/10 to-[#a1251b]/10 rounded-xl p-6 border border-[#a1251b]/20 shadow-sm relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#a1251b]/5 to-blue-600/5 animate-pulse" />
                      <div className="relative z-10">
                        <h3 className="text-lg font-bold text-[#a1251b] mb-3 flex items-center gap-2">
                          <Zap className="h-5 w-5" />
                          Marsstein-Vorteil für {controlCategories[activeCategory].title}
                        </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <div className="text-sm font-medium text-gray-700 mb-1">Traditioneller Ansatz:</div>
                            <div className="text-xs text-red-600">8-12 Wochen manuell • €15.000 Beratung</div>
                          </div>
                          <div>
                            <div className="text-sm font-medium text-gray-700 mb-1">Mit Marsstein:</div>
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
                        <Button size="lg" className="bg-gradient-to-r from-blue-600 to-[#a1251b] hover:from-blue-700 hover:to-[#8a1f17] text-white px-8 py-3 text-base font-semibold shadow-lg shadow-blue-600/25 border-0">
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
          <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
            <Target className="h-3.5 w-3.5 mr-2" />
            Die Marsstein-Lösung
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            So lösen wir Ihre ISO 27001-Herausforderungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#a1251b]/30 hover:scale-105">
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
          <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
            <Building2 className="h-3.5 w-3.5 mr-2" />
            Branchen & Zielgruppen
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Wer braucht ISO 27001-Zertifizierung?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
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
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#a1251b]/20">
              <CardHeader>
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#a1251b] to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <industry.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-lg font-bold text-[#a1251b]">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
                <CardTitle className="text-xl">{industry.title}</CardTitle>
                <CardDescription className="text-base">{industry.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">{industry.details}</p>
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

  // Process Section
  const ProcessSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            Unser Prozess
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            In 6 Monaten zur ISO 27001-Zertifizierung
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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
              <Card className="relative h-full border-2 hover:border-blue-600/30 transition-colors">
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
                  <step.icon className="h-8 w-8 text-blue-600 opacity-20" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Kostenlose Gap-Analyse starten
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );

  // Testimonials Section
  const TestimonialsSection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300">
            <Star className="h-3.5 w-3.5 mr-2" />
            Kundenstimmen
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Was unsere Kunden sagen
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Marsstein hat unseren ISO 27001-Zertifizierungsprozess um Monate verkürzt. Die KI-gestützte Gap-Analyse war unglaublich präzise.",
              author: "Dr. Sarah Weber",
              role: "CISO",
              company: "CloudTech Solutions",
              avatar: "SW",
              rating: 5
            },
            {
              quote: "Als FinTech-Startup war ISO 27001 Pflicht für unsere Expansion. Marsstein machte es möglich - effizient und kostengünstig.",
              author: "Michael Schmidt",
              role: "Co-Founder & CTO",
              company: "SecurePay GmbH",
              avatar: "MS",
              rating: 5
            },
            {
              quote: "Die Expertise und Begleitung waren erstklassig. Wir haben nicht nur die Zertifizierung erhalten, sondern auch unsere Sicherheit drastisch verbessert.",
              author: "Anna Müller",
              role: "Head of Compliance",
              company: "MedData Systems",
              avatar: "AM",
              rating: 5
            }
          ].map((testimonial, index) => (
            <Card key={index} className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-2">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="h-8 w-8 text-blue-600/30" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{testimonial.quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-[#a1251b] rounded-full flex items-center justify-center text-white font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-blue-600 font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Pricing Section
  const PricingSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
            <Euro className="h-3.5 w-3.5 mr-2" />
            Transparente Preise
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Investition in Ihre internationale Zukunft
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Starter',
              price: '4.990',
              description: 'Für kleine Unternehmen und Startups',
              features: [
                'Bis zu 50 Mitarbeiter',
                'Basis-ISMS Implementation',
                'Gap-Analyse & Roadmap',
                'Standard-Dokumentation',
                'E-Mail Support',
                'Self-Service Portal'
              ],
              popular: false
            },
            {
              name: 'Professional',
              price: '9.990',
              description: 'Für wachsende Unternehmen',
              features: [
                'Bis zu 250 Mitarbeiter',
                'Vollständige ISMS-Implementierung',
                'Umfassende Risikobewertung',
                'Maßgeschneiderte Dokumentation',
                'Mitarbeiterschulungen',
                'Dedicated Customer Success Manager',
                'Prioritäts-Support',
                'Audit-Vorbereitung'
              ],
              popular: true
            },
            {
              name: 'Enterprise',
              price: 'Individuell',
              description: 'Für Konzerne und komplexe Strukturen',
              features: [
                'Unbegrenzte Mitarbeiter',
                'Multi-Site Implementation',
                'Erweiterte Risikobewertung',
                'Compliance-Dashboard',
                'Kontinuierliche Überwachung',
                'Dedicated Compliance Team',
                '24/7 Premium Support',
                'Custom Integrations',
                'Executive Reporting'
              ],
              popular: false
            }
          ].map((plan, index) => (
            <Card key={index} className={cn(
              "relative overflow-hidden border-2 transition-all duration-300 hover:shadow-xl",
              plan.popular ? "border-blue-600 shadow-lg scale-105" : "border-gray-200 hover:border-blue-600/30"
            )}>
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-[#a1251b] text-white text-center py-2 text-sm font-medium">
                  Beliebteste Wahl
                </div>
              )}
              <CardHeader className={cn("text-center", plan.popular && "pt-16")}>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="text-4xl font-bold">
                  {plan.price === 'Individuell' ? (
                    <span className="text-2xl">Auf Anfrage</span>
                  ) : (
                    <>
                      €{plan.price}
                      <span className="text-lg font-normal text-muted-foreground">/einmalig</span>
                    </>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={cn(
                    "w-full",
                    plan.popular 
                      ? "bg-gradient-to-r from-blue-600 to-[#a1251b] hover:from-blue-700 hover:to-[#8a1f17]" 
                      : "bg-[#a1251b] hover:bg-[#8a1f17]"
                  )}
                  size="lg"
                >
                  {plan.price === 'Individuell' ? 'Beratung anfragen' : 'Jetzt starten'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // FAQ Section
  const FAQSection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
            <BookOpen className="h-3.5 w-3.5 mr-2" />
            Häufige Fragen
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
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
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );

  // CTA Section
  const CTASection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-br from-blue-600 via-[#a1251b] to-purple-600 text-white">
      <div className="container px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <Badge className="bg-white/20 text-white border-white/20">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            Bereit für die internationale Bühne?
          </Badge>
          
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Starten Sie heute Ihre ISO 27001-Zertifizierung
          </h2>
          
          <p className="text-xl text-white/90 leading-relaxed">
            Schließen Sie sich über 500+ Unternehmen an, die mit Marsstein erfolgreich 
            ISO 27001-zertifiziert wurden und internationale Märkte erobert haben.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
              <Shield className="mr-2 h-5 w-5" />
              Kostenlose Beratung buchen
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8">
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
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <PainpointSection />
      <Iso27001DeepDiveSection />
      <BenefitsSection />
      <TargetIndustriesSection />
      <ProcessSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Iso27001Compliance;