import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Truck,
  Shield, 
  FileText, 
  Users,
  Building2,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen,
  Euro,
  Calendar,
  Activity,
  Package,
  MapPin,
  Lock,
  Database,
  Eye,
  UserCheck,
  Clipboard,
  FileCheck,
  Zap,
  Settings,
  Globe,
  TrendingUp,
  Clock,
  Star,
  Target,
  Lightbulb,
  Smartphone,
  Wifi,
  Server,
  Code,
  Award,
  Scale,
  Fingerprint,
  Key,
  Monitor,
  Tablet,
  Headphones,
  Mail,
  Phone,
  Navigation,
  Route,
  PackageCheck,
  X,
  ChevronDown,
  ExternalLink,
  Gavel,
  AlertCircle,
  Timer,
  BarChart3,
  PieChart,
  LineChart,
  Layers,
  Network,
  ShieldCheck,
  FileX,
  UserX,
  Ban,
  CheckSquare,
  Square,
  Container,
  Plane,
  Ship,
  Train,
  Warehouse,
  QrCode,
  Scan,
  Radio,
  Gauge,
  PackageOpen,
  PackageX,
  TruckIcon,
  LocateFixed,
  Boxes,
  Factory,
  Share
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const LogisticsCompliance = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [selectedTransportMode, setSelectedTransportMode] = useState<string>('road');
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  
  // Add scroll-margin-top styles for sticky header and mobile optimizations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      h2[id], h3[id], section[id] {
        scroll-margin-top: 96px;
      }
      
      /* Mobile-optimierungen */
      @media (max-width: 768px) {
        body {
          font-size: 16px;
          line-height: 1.5;
        }
        
        .tap-target {
          min-height: 48px;
          min-width: 48px;
        }
        
        p, li {
          max-width: 45ch;
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  // Navigation items for sticky navigation
  const navigationItems = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'supply-chain', label: 'Supply Chain Compliance', icon: Network },
    { id: 'tracking', label: 'Tracking & Transparenz', icon: MapPin },
    { id: 'tom', label: 'TOM für Logistik', icon: Settings },
    { id: 'international', label: 'Internationale Transfers', icon: Globe },
    { id: 'implementation', label: 'Praxis-Implementation', icon: Code }
  ];
  
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

  const complianceStats = [
    { label: 'Supply Chain Transparenz', value: 94, color: 'text-red-600', trend: '+12%' },
    { label: 'DSGVO Compliance', value: 96, color: 'text-pink-600', trend: '+8%' },
    { label: 'Tracking Datenschutz', value: 91, color: 'text-rose-600', trend: '+15%' },
    { label: 'Internationale Transfers', value: 89, color: 'text-red-500', trend: '+7%' },
    { label: 'TOM Implementierung', value: 93, color: 'text-orange-500', trend: '+10%' },
    { label: 'Audit Readiness', value: 95, color: 'text-purple-600', trend: '+5%' }
  ];

  const supplyChainChallenges = [
    {
      title: 'Multi-Stakeholder Datenaustausch',
      description: 'Komplexe Datenflüsse zwischen Verladern, Spediteuren, Lagerbetreibern und Empfängern',
      challenges: ['Unterschiedliche IT-Systeme', 'Variierende Datenschutzstandards', 'Grenzüberschreitende Transfers', 'Subunternehmer-Management'],
      risk: 'Kritisch',
      fineExample: 'Bis zu 20 Mio. € oder 4% des Jahresumsatzes',
      solution: {
        title: '📦 Praxis-Lösung: Unified Data Governance',
        approach: 'Implementierung eines zentralen Daten-Governance-Frameworks für die gesamte Lieferkette',
        keyElements: [
          {
            element: 'Standardisierte Datenverarbeitung',
            description: 'Einheitliche APIs und Datenformate für alle Partner',
            implementation: 'REST APIs mit OAuth 2.0 Authentifizierung'
          },
          {
            element: 'Vertragsmanagement',
            description: 'Standardisierte Auftragsverarbeitungsverträge (AVV)',
            implementation: 'Template-basierte AVV-Generierung'
          },
          {
            element: 'Zugriffskontrollen',
            description: 'Rollenbasierte Zugriffskontrolle über alle Systeme',
            implementation: 'Zero-Trust Security Model'
          }
        ]
      }
    },
    {
      title: 'Real-Time Tracking & Datenschutz',
      description: 'Balance zwischen Transparenzanforderungen und Datenschutz bei Live-Tracking',
      challenges: ['GPS-Daten von Fahrern', 'Kundendaten in Tracking-Systemen', 'Öffentliche Tracking-Links', 'IoT-Sensordaten'],
      risk: 'Hoch',
      fineExample: 'Bußgelder von 100.000 € bis 5 Mio. €',
      solution: {
        title: '🚚 Praxis-Lösung: Privacy-by-Design Tracking',
        approach: 'Datenschutzfreundliches Tracking-System mit mehrstufiger Datentrennung',
        keyElements: [
          {
            element: 'Datentrennung',
            description: 'Trennung von Personen- und Sendungsdaten',
            implementation: 'Separate Datenbanken mit Token-Verknüpfung'
          },
          {
            element: 'Anonymisierung',
            description: 'Automatische Anonymisierung nach Zustellung',
            implementation: '30-Tage Retention, dann Pseudonymisierung'
          },
          {
            element: 'Granulare Rechte',
            description: 'Unterschiedliche Detailgrade je nach Nutzerrolle',
            implementation: 'API-basierte Rechteverwaltung'
          }
        ]
      }
    },
    {
      title: 'Internationale Datentransfers',
      description: 'Rechtskonforme Datenübertragung in Drittländer ohne Angemessenheitsbeschluss',
      challenges: ['USA-Transfers nach Schrems II', 'Asien-Pazifik Routen', 'Brexit-Auswirkungen', 'Schweiz als Transitland'],
      risk: 'Sehr hoch',
      fineExample: 'Bis zu 20 Mio. € plus Transferverbot',
      solution: {
        title: '🌍 Praxis-Lösung: Compliant Global Logistics',
        approach: 'Mehrstufiges System für internationale Datentransfers',
        keyElements: [
          {
            element: 'Transfer Impact Assessment',
            description: 'Bewertung jeder internationalen Route',
            implementation: 'Automatisierte TIA-Generierung'
          },
          {
            element: 'Standardvertragsklauseln',
            description: 'SCC-Implementierung mit zusätzlichen Garantien',
            implementation: 'Digitale SCC-Verwaltung'
          },
          {
            element: 'Lokale Datenhaltung',
            description: 'Edge Computing in kritischen Regionen',
            implementation: 'Regional Data Centers'
          }
        ]
      }
    }
  ];

  const transportModes = {
    road: {
      icon: Truck,
      name: 'Straßentransport',
      specificRequirements: [
        'Fahrer-Datenschutz (Arbeitszeiten, GPS)',
        'Digitaler Tachograph Compliance',
        'Mautdaten-Verarbeitung',
        'Dashcam-Aufnahmen'
      ]
    },
    air: {
      icon: Plane,
      name: 'Luftfracht',
      specificRequirements: [
        'Advance Cargo Information (ACI)',
        'Known Consignor Daten',
        'Passagierdaten bei Courier-Services',
        'Sicherheitsscreening-Daten'
      ]
    },
    sea: {
      icon: Ship,
      name: 'Seefracht',
      specificRequirements: [
        'Maritime Single Window Daten',
        'Container-Tracking',
        'Crew-Listen',
        'Hafenstaatkontrolle'
      ]
    },
    rail: {
      icon: Train,
      name: 'Schienentransport',
      specificRequirements: [
        'Grenzüberschreitende Frachtbriefe',
        'Gefahrgut-Dokumentation',
        'Intermodale Übergabepunkte',
        'Bahnhofs-CCTV Integration'
      ]
    }
  };

  const toggleCheckItem = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const trackingTechnologies = [
    {
      name: 'GPS/GNSS Tracking',
      privacy: 'Hoch',
      description: 'Echtzeitortung von Fahrzeugen und Sendungen',
      measures: ['Fahrer-Einwilligung', 'Privatsphäre-Modi', 'Datenminimierung']
    },
    {
      name: 'RFID/NFC Tags',
      privacy: 'Mittel',
      description: 'Kontaktlose Identifikation in Lagern',
      measures: ['Reichweitenbegrenzung', 'Verschlüsselung', 'Zugriffskontrolle']
    },
    {
      name: 'IoT Sensoren',
      privacy: 'Mittel-Hoch',
      description: 'Temperatur, Erschütterung, Feuchtigkeit',
      measures: ['Edge Processing', 'Aggregierte Daten', 'Need-to-know Prinzip']
    },
    {
      name: 'Blockchain',
      privacy: 'Niedrig',
      description: 'Unveränderliche Supply Chain Historie',
      measures: ['Pseudonymisierung', 'Private Chains', 'Selective Disclosure']
    }
  ];

  const implementationPhases = [
    { phase: 'Analyse & Assessment', completion: 100, duration: '2-3 Wochen' },
    { phase: 'Konzeptentwicklung', completion: 85, duration: '3-4 Wochen' },
    { phase: 'Pilotimplementierung', completion: 60, duration: '6-8 Wochen' },
    { phase: 'Rollout & Schulung', completion: 35, duration: '4-6 Wochen' },
    { phase: 'Monitoring & Optimierung', completion: 15, duration: 'Kontinuierlich' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      {/* Hero Section mit Parallax-Effekt */}
      <section ref={heroRef} className="relative py-20 md:py-28 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-rose-500/5 rounded-full blur-3xl animate-pulse delay-500" />
        </div>
        
        {/* Hero Content */}
        <motion.div 
          style={{ y, opacity }}
          className="container px-4 mx-auto relative z-10"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <Badge className="mb-4 px-4 py-1 text-sm bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-300">
                Supply Chain Excellence meets Data Privacy
              </Badge>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Logistics & Supply Chain
              <span className="block mt-2 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                DSGVO Compliance Guide
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Der umfassende Leitfaden für datenschutzkonforme Logistikprozesse.
              Von Real-Time Tracking bis zu internationalen Datentransfers.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white tap-target min-h-[48px]"
                onClick={() => scrollToSection('overview')}
              >
                Compliance-Guide starten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-400 tap-target min-h-[48px]"
              >
                <Download className="mr-2 h-4 w-4" />
                Logistics Checklist
              </Button>
            </motion.div>
          </div>
        </motion.div>
        
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 hidden lg:block"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <Truck className="h-8 w-8 text-red-600 mb-2" />
            <p className="text-sm font-semibold">Real-Time Tracking</p>
            <p className="text-xs text-gray-600">DSGVO-konform</p>
          </div>
        </motion.div>
        
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-32 right-10 hidden lg:block"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <Globe className="h-8 w-8 text-pink-600 mb-2" />
            <p className="text-sm font-semibold">Global Compliance</p>
            <p className="text-xs text-gray-600">100+ Länder</p>
          </div>
        </motion.div>
      </section>

      {/* Inhaltsverzeichnis für Mobile und Desktop */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <nav aria-label="Inhaltsverzeichnis" className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-red-600" />
                Inhaltsverzeichnis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left tap-target"
                  >
                    <item.icon className="h-5 w-5 text-red-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
              
              {/* Unterabschnitte */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">Weitere Themen</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                  <button onClick={() => scrollToSection('transport-modi')} className="text-left hover:text-red-600 dark:hover:text-red-400 py-1">
                    → Transportmodus-spezifische Anforderungen
                  </button>
                  <button onClick={() => scrollToSection('tracking-technologien')} className="text-left hover:text-red-600 dark:hover:text-red-400 py-1">
                    → Tracking-Technologien & Datenschutz
                  </button>
                  <button onClick={() => scrollToSection('laenderspezifische-anforderungen')} className="text-left hover:text-red-600 dark:hover:text-red-400 py-1">
                    → Länderspezifische Anforderungen
                  </button>
                  <button onClick={() => scrollToSection('implementation-roadmap')} className="text-left hover:text-red-600 dark:hover:text-red-400 py-1">
                    → Implementation Roadmap
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-start md:justify-center gap-2 py-4 overflow-x-auto scrollbar-hide">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all",
                  "text-sm font-medium",
                  activeSection === item.id
                    ? "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300"
                    : "text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-600"
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20">
        <div className="container px-4">
          <div className="max-w-7xl mx-auto space-y-20">
            
            {/* Overview Section */}
            <section id="overview" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  <Shield className="inline-block mr-3 h-8 w-8 text-red-600" />
                  Logistics Compliance Dashboard
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                  Überblick über Ihre Supply Chain Datenschutz-Performance
                </p>
              </motion.div>

              {/* Interactive Compliance Dashboard */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 shadow-2xl border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-white via-red-50/20 to-pink-50/20 dark:from-gray-900 dark:via-red-950/20 dark:to-pink-950/20">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {complianceStats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700"
                      >
                        <div className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                          {stat.label}
                        </div>
                        <div className={`text-2xl font-bold ${stat.color} mb-1`}>
                          {stat.value}%
                        </div>
                        <div className="text-xs text-green-600 dark:text-green-400 font-medium">
                          {stat.trend} vs. letztes Quartal
                        </div>
                        <Progress 
                          value={stat.value} 
                          className="mt-2 h-2"
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-sm font-semibold text-yellow-800 dark:text-yellow-200">
                          Aktuelle Herausforderung: Schrems II Compliance
                        </p>
                        <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                          89% Ihrer internationalen Routen benötigen zusätzliche Schutzmaßnahmen für USA-Transfers.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Key Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {[
                  {
                    icon: Package,
                    title: 'End-to-End Transparenz',
                    description: 'Lückenlose Nachverfolgung bei voller DSGVO-Compliance',
                    color: 'text-red-600'
                  },
                  {
                    icon: ShieldCheck,
                    title: 'Multi-Partner Security',
                    description: 'Sichere Datenverarbeitung über alle Lieferketten-Partner',
                    color: 'text-pink-600'
                  },
                  {
                    icon: Globe,
                    title: 'Global Compliant',
                    description: 'Internationale Standards und lokale Anforderungen vereint',
                    color: 'text-rose-600'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardContent className="p-6">
                        <benefit.icon className={`h-10 w-10 ${benefit.color} mb-4`} />
                        <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </section>

            {/* Supply Chain Compliance Section */}
            <section id="supply-chain" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  <Network className="inline-block mr-3 h-8 w-8 text-red-600" />
                  Supply Chain Compliance Herausforderungen
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                  Die größten Datenschutz-Herausforderungen in der modernen Logistik
                </p>
              </motion.div>

              {supplyChainChallenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-l-4 border-red-500 hover:shadow-xl transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <CardTitle className="text-xl">{challenge.title}</CardTitle>
                        <Badge 
                          variant={challenge.risk === 'Kritisch' ? 'destructive' : 
                                  challenge.risk === 'Sehr hoch' ? 'destructive' : 'secondary'}
                        >
                          {challenge.risk} Risiko
                        </Badge>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 mt-2">
                        {challenge.description}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Challenges List */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-500" />
                          Hauptherausforderungen
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {challenge.challenges.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2">
                              <ChevronDown className="h-3 w-3 text-red-500" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Fine Warning */}
                      <div className="bg-red-50 dark:bg-red-950/30 rounded-lg p-4 border border-red-200 dark:border-red-800">
                        <div className="flex items-center gap-2 text-red-700 dark:text-red-300">
                          <Euro className="h-4 w-4" />
                          <span className="font-semibold text-sm">Mögliches Bußgeld: {challenge.fineExample}</span>
                        </div>
                      </div>

                      {/* Solution */}
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl p-6">
                        <h3 className="text-xl font-bold mb-4">
                          {challenge.solution.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">
                          {challenge.solution.approach}
                        </p>
                        
                        <div className="space-y-4">
                          {challenge.solution.keyElements.map((element, idx) => (
                            <div key={idx} className="bg-white/80 dark:bg-gray-900/80 rounded-lg p-4">
                              <h4 className="font-semibold mb-2">{element.element}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                {element.description}
                              </p>
                              <div className="flex items-center gap-2 text-sm">
                                <Code className="h-4 w-4 text-green-600" />
                                <span className="text-green-700 dark:text-green-400 font-mono text-xs">
                                  {element.implementation}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </section>

            {/* Tracking & Transparency Section */}
            <section id="tracking" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  <MapPin className="inline-block mr-3 h-8 w-8 text-red-600" />
                  Tracking & Transparenz
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                  Datenschutzkonforme Implementierung von Tracking-Technologien
                </p>
              </motion.div>

              {/* Transport Mode Selector */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-4">Transportmodus-spezifische Anforderungen</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    {Object.entries(transportModes).map(([key, mode]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedTransportMode(key)}
                        className={cn(
                          "p-4 rounded-lg border-2 transition-all",
                          selectedTransportMode === key
                            ? "border-red-500 bg-red-50 dark:bg-red-950/30"
                            : "border-gray-200 dark:border-gray-700 hover:border-red-300"
                        )}
                      >
                        <mode.icon className={cn(
                          "h-8 w-8 mx-auto mb-2",
                          selectedTransportMode === key ? "text-red-600" : "text-gray-600"
                        )} />
                        <p className="text-sm font-medium">{mode.name}</p>
                      </button>
                    ))}
                  </div>
                  
                  <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <h4 className="font-semibold mb-3">
                      Spezifische Datenschutzanforderungen für {transportModes[selectedTransportMode].name}
                    </h4>
                    <div className="space-y-2">
                      {transportModes[selectedTransportMode].specificRequirements.map((req, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                          <span className="text-sm">{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Tracking Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Tracking-Technologien & Datenschutz</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {trackingTechnologies.map((tech, index) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <CardTitle className="text-lg">{tech.name}</CardTitle>
                            <Badge variant={
                              tech.privacy === 'Hoch' ? 'destructive' :
                              tech.privacy === 'Mittel-Hoch' ? 'secondary' :
                              tech.privacy === 'Mittel' ? 'secondary' : 'outline'
                            }>
                              Datenschutz: {tech.privacy}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {tech.description}
                          </p>
                          <div className="space-y-2">
                            <p className="text-sm font-semibold">Schutzmaßnahmen:</p>
                            {tech.measures.map((measure, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-sm">
                                <Shield className="h-3 w-3 text-green-600" />
                                <span>{measure}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Real-Time Tracking Scenario */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">
                    📍 Praxis-Szenario: DSGVO-konformes Sendungstracking
                  </h3>
                  <div className="space-y-4">
                    <div className="bg-white/80 dark:bg-gray-900/80 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">📋 Ausgangslage</h4>
                      <p className="text-sm">
                        Ein E-Commerce-Kunde möchte seine Bestellung in Echtzeit verfolgen. 
                        Die Sendung wird von einem Subunternehmer transportiert, der GPS-Tracking nutzt.
                      </p>
                    </div>
                    
                    <div className="bg-white/80 dark:bg-gray-900/80 rounded-lg p-4">
                      <h4 className="font-semibold mb-2">🔐 Datenschutz-Lösung</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <span className="font-semibold text-red-600">1.</span>
                          <div>
                            <p className="font-medium">Token-basiertes Tracking</p>
                            <p className="text-gray-600 dark:text-gray-400">
                              Eindeutiger Tracking-Link ohne Personenbezug, zeitlich begrenzte Gültigkeit
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-semibold text-red-600">2.</span>
                          <div>
                            <p className="font-medium">Granulare Positionsdaten</p>
                            <p className="text-gray-600 dark:text-gray-400">
                              Nur Stadtbezirk statt exakte GPS-Position für Endkunden
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="font-semibold text-red-600">3.</span>
                          <div>
                            <p className="font-medium">Automatische Löschung</p>
                            <p className="text-gray-600 dark:text-gray-400">
                              Tracking-Daten werden 30 Tage nach Zustellung automatisch gelöscht
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-950/30 rounded-lg p-4 border border-green-200 dark:border-green-800">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5" />
                        <div>
                          <p className="font-semibold text-green-800 dark:text-green-200">Ergebnis</p>
                          <p className="text-sm text-green-700 dark:text-green-300">
                            Volle Transparenz für Kunden bei gleichzeitigem Schutz der Fahrerdaten
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </section>

            {/* TOM für Logistik Section */}
            <section id="tom" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  <Settings className="inline-block mr-3 h-8 w-8 text-red-600" />
                  Technische und Organisatorische Maßnahmen
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                  Spezifische TOM für die Logistikbranche
                </p>
              </motion.div>

              {/* TOM Categories */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Zutrittskontrolle',
                    icon: Lock,
                    measures: [
                      'Biometrische Zugangssysteme für Lager',
                      'Elektronische Fahrzeugschlüssel mit Logging',
                      'Visitor Management System',
                      'Geofencing für sensible Bereiche'
                    ]
                  },
                  {
                    title: 'Zugangskontrolle',
                    icon: Key,
                    measures: [
                      'Multi-Faktor-Authentifizierung für TMS',
                      'Role-Based Access Control (RBAC)',
                      'API-Key Management für Partner',
                      'Single Sign-On (SSO) Integration'
                    ]
                  },
                  {
                    title: 'Zugriffskontrolle',
                    icon: UserCheck,
                    measures: [
                      'Granulare Berechtigungskonzepte',
                      'Audit-Logging aller Datenzugriffe',
                      'Automatische Rechtevergabe nach Jobrolle',
                      'Regelmäßige Berechtigungsreviews'
                    ]
                  },
                  {
                    title: 'Weitergabekontrolle',
                    icon: Share,
                    measures: [
                      'Ende-zu-Ende Verschlüsselung',
                      'Sichere EDI-Verbindungen',
                      'Verschlüsselte Container für Dokumente',
                      'Blockchain für Audit Trail'
                    ]
                  }
                ].map((category, index) => (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <category.icon className="h-5 w-5 text-red-600" />
                          {category.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {category.measures.map((measure, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckSquare className="h-4 w-4 text-green-600 mt-0.5" />
                              <span className="text-sm">{measure}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              {/* Special Logistics TOM */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 border-red-200 dark:border-red-800">
                  <CardHeader className="bg-red-50 dark:bg-red-950/30">
                    <CardTitle className="flex items-center gap-2">
                      <Truck className="h-6 w-6 text-red-600" />
                      Logistik-spezifische Sicherheitsmaßnahmen
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Package className="h-4 w-4 text-orange-600" />
                          Warensicherheit
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-red-600">•</span>
                            Tamper-evident Packaging mit QR-Codes
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600">•</span>
                            IoT-Sensoren für Temperatur & Erschütterung
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600">•</span>
                            Blockchain-basierte Chain of Custody
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                          <Radio className="h-4 w-4 text-blue-600" />
                          Kommunikationssicherheit
                        </h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-red-600">•</span>
                            Verschlüsselte Funk-Kommunikation
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600">•</span>
                            Secure Messaging für Fahrer
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600">•</span>
                            Anonymisierte Hotline-Systeme
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* International Transfers Section */}
            <section id="international" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  <Globe className="inline-block mr-3 h-8 w-8 text-red-600" />
                  Internationale Datentransfers
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                  Rechtskonforme Datenübermittlung in der globalen Lieferkette
                </p>
              </motion.div>

              {/* Transfer Impact Assessment Tool */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
                  <h3 className="text-xl font-bold mb-4">
                    🌍 Transfer Impact Assessment (TIA) Checkliste
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Identifikation aller Drittländer in der Lieferkette',
                      'Prüfung von Angemessenheitsbeschlüssen',
                      'Bewertung der Rechtslage im Zielland',
                      'Implementierung von Standardvertragsklauseln (SCC)',
                      'Zusätzliche technische Schutzmaßnahmen',
                      'Dokumentation der Risikobewertung',
                      'Regelmäßige Überprüfung (mind. jährlich)'
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                        onClick={() => toggleCheckItem(`tia-${index}`)}
                      >
                        {checkedItems.has(`tia-${index}`) ? (
                          <CheckSquare className="h-5 w-5 text-green-600" />
                        ) : (
                          <Square className="h-5 w-5 text-gray-400" />
                        )}
                        <span className={cn(
                          "text-sm",
                          checkedItems.has(`tia-${index}`) && "line-through text-gray-500"
                        )}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {checkedItems.size}/7 Schritte abgeschlossen
                    </p>
                    <Progress value={(checkedItems.size / 7) * 100} className="mt-2" />
                  </div>
                </Card>
              </motion.div>

              {/* Country-specific Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Länderspezifische Anforderungen</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      country: 'USA',
                      flag: '🇺🇸',
                      status: 'Kein Angemessenheitsbeschluss',
                      requirements: ['SCC erforderlich', 'Zusätzliche Garantien', 'CLOUD Act Risiko'],
                      risk: 'Hoch'
                    },
                    {
                      country: 'China',
                      flag: '🇨🇳',
                      status: 'Kein Angemessenheitsbeschluss',
                      requirements: ['SCC erforderlich', 'Lokale Datenspeicherung', 'Cybersecurity Law'],
                      risk: 'Sehr hoch'
                    },
                    {
                      country: 'UK',
                      flag: '🇬🇧',
                      status: 'Angemessenheitsbeschluss',
                      requirements: ['Direkte Übertragung möglich', 'UK GDPR beachten', 'Brexit-Klauseln'],
                      risk: 'Niedrig'
                    },
                    {
                      country: 'Schweiz',
                      flag: '🇨🇭',
                      status: 'Angemessenheitsbeschluss',
                      requirements: ['Direkte Übertragung möglich', 'nDSG Compliance', 'Transit-Regelungen'],
                      risk: 'Niedrig'
                    },
                    {
                      country: 'Indien',
                      flag: '🇮🇳',
                      status: 'Kein Angemessenheitsbeschluss',
                      requirements: ['SCC erforderlich', 'DPDP Act 2023', 'Lokalisierung prüfen'],
                      risk: 'Mittel'
                    },
                    {
                      country: 'Brasilien',
                      flag: '🇧🇷',
                      status: 'Kein Angemessenheitsbeschluss',
                      requirements: ['SCC erforderlich', 'LGPD Alignment', 'DPO erforderlich'],
                      risk: 'Mittel'
                    }
                  ].map((country, index) => (
                    <motion.div
                      key={country.country}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-3">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="text-2xl">{country.flag}</span>
                              <h4 className="font-semibold">{country.country}</h4>
                            </div>
                            <Badge variant={
                              country.risk === 'Sehr hoch' ? 'destructive' :
                              country.risk === 'Hoch' ? 'destructive' :
                              country.risk === 'Mittel' ? 'secondary' : 'outline'
                            }>
                              {country.risk}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                            {country.status}
                          </p>
                          <div className="space-y-1">
                            {country.requirements.map((req, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs">
                                <ChevronDown className="h-3 w-3 text-red-500" />
                                <span>{req}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Implementation Section */}
            <section id="implementation" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  <Code className="inline-block mr-3 h-8 w-8 text-red-600" />
                  Praxis-Implementation
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
                  Schritt-für-Schritt zur DSGVO-konformen Logistik
                </p>
              </motion.div>

              {/* Implementation Roadmap */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-6">
                  <h3 className="text-xl font-bold mb-6">Implementation Roadmap</h3>
                  <div className="space-y-4">
                    {implementationPhases.map((phase, index) => (
                      <div key={phase.phase} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold",
                              phase.completion === 100 ? "bg-green-600" :
                              phase.completion >= 50 ? "bg-orange-500" : "bg-gray-400"
                            )}>
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-semibold">{phase.phase}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">{phase.duration}</p>
                            </div>
                          </div>
                          <span className="text-sm font-medium">{phase.completion}%</span>
                        </div>
                        <Progress value={phase.completion} className="h-2" />
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Code Examples */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Beispiel: DSGVO-konformes Tracking API</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm">
                        <code>{`// DSGVO-konformes Tracking Endpoint
app.post('/api/tracking/create', async (req, res) => {
  const { shipmentId, customerId } = req.body;
  
  // Generiere anonymen Tracking-Token
  const trackingToken = crypto.randomBytes(32).toString('hex');
  
  // Speichere Verknüpfung mit Ablaufdatum
  await redis.setex(
    \`tracking:\${trackingToken}\`,
    30 * 24 * 60 * 60, // 30 Tage
    JSON.stringify({
      shipmentId,
      customerId: hash(customerId), // Pseudonymisiert
      created: new Date(),
      dataCategories: ['location', 'status'],
      legalBasis: 'contract',
      retentionDays: 30
    })
  );
  
  // Audit Log
  await auditLog.create({
    action: 'TRACKING_TOKEN_CREATED',
    shipmentId,
    timestamp: new Date(),
    purpose: 'Customer shipment tracking'
  });
  
  return res.json({
    trackingUrl: \`https://track.example.com/\${trackingToken}\`,
    expiresIn: '30 days',
    dataProcessed: ['Standort (Stadt-Ebene)', 'Sendungsstatus'],
    privacyPolicy: 'https://example.com/privacy'
  });
});`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Best Practices */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="border-green-200 dark:border-green-800">
                    <CardHeader className="bg-green-50 dark:bg-green-950/30">
                      <CardTitle className="flex items-center gap-2 text-green-800 dark:text-green-200">
                        <CheckCircle2 className="h-5 w-5" />
                        Do's
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Privacy by Design in allen Systemen</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Automatisierte Löschkonzepte implementieren</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Granulare Berechtigungskonzepte</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Regelmäßige Datenschutz-Audits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Transparente Kundeninformation</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="border-red-200 dark:border-red-800">
                    <CardHeader className="bg-red-50 dark:bg-red-950/30">
                      <CardTitle className="flex items-center gap-2 text-red-800 dark:text-red-200">
                        <X className="h-5 w-5" />
                        Don'ts
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4">
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5" />
                          <span>Unbegrenzte Datenspeicherung</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5" />
                          <span>Klartext-Speicherung von Kundendaten</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5" />
                          <span>Fehlende Auftragsverarbeitung mit Partnern</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5" />
                          <span>Intransparente Datenflüsse</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <X className="h-4 w-4 text-red-600 mt-0.5" />
                          <span>Ignorieren von Betroffenenrechten</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
              
              {/* Related Links Section for SEO */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mt-8"
              >
                <Card className="p-6 bg-gray-50 dark:bg-gray-800">
                  <h3 className="text-lg font-semibold mb-4">Verwandte Compliance-Themen</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link to="/wissen/branchen/datenschutz-pflege" className="group">
                      <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors">
                        <h4 className="font-medium text-red-600 dark:text-red-400 group-hover:underline">Datenschutz in der Pflege</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">DSGVO-Compliance für Pflegeeinrichtungen</p>
                      </div>
                    </Link>
                    <Link to="/wissen/branchen/datenschutz-arztpraxis" className="group">
                      <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors">
                        <h4 className="font-medium text-red-600 dark:text-red-400 group-hover:underline">Datenschutz Arztpraxis</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Patientendatenschutz nach DSGVO</p>
                      </div>
                    </Link>
                    <Link to="/wissen/dsgvo-compliance" className="group">
                      <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors">
                        <h4 className="font-medium text-red-600 dark:text-red-400 group-hover:underline">DSGVO Grundlagen</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Basiswissen zur EU-Datenschutzverordnung</p>
                      </div>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            </section>

            {/* Call to Action */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <Card className="bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white border-0">
                <CardContent className="p-8 md:p-12 text-center">
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Truck className="h-16 w-16 mx-auto mb-6" />
                  </motion.div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Starten Sie Ihre Logistics Compliance Journey
                  </h2>
                  <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                    Machen Sie Ihre Supply Chain DSGVO-konform. 
                    Wir begleiten Sie von der Analyse bis zur Implementation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      size="lg" 
                      className="bg-white text-red-600 hover:bg-gray-100"
                    >
                      <Package className="mr-2 h-5 w-5" />
                      Logistics Demo buchen
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="text-white border-white hover:bg-white/10"
                    >
                      <Download className="mr-2 h-5 w-5" />
                      Compliance Guide herunterladen
                    </Button>
                  </div>
                  
                  <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                    <div>
                      <p className="text-3xl font-bold">500+</p>
                      <p className="text-sm opacity-80">Logistik-Partner compliant</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">50M+</p>
                      <p className="text-sm opacity-80">Sendungen DSGVO-konform</p>
                    </div>
                    <div>
                      <p className="text-3xl font-bold">99.9%</p>
                      <p className="text-sm opacity-80">Audit Success Rate</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.section>

          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LogisticsCompliance;