import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Activity, 
  Database, 
  Network, 
  Users, 
  Code, 
  Zap, 
  Lock, 
  Eye, 
  CheckCircle2, 
  ChevronRight, 
  ArrowRight, 
  TrendingUp, 
  Building, 
  FileText, 
  Settings, 
  Smartphone, 
  Home, 
  Battery, 
  Monitor, 
  Cpu, 
  Radio,
  AlertTriangle,
  Globe,
  Clock,
  Target,
  BookOpen,
  Lightbulb,
  Download,
  ChevronDown,
  ExternalLink,
  Heart,
  ChevronUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export default function SmartGridComplianceGuide() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('ueberblick');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const navigationItems = [
    { id: 'ueberblick', label: 'Überblick', icon: Shield, href: '#smart-grid-datenschutz-ueberblick' },
    { id: 'smart-meter', label: 'Smart Meter', icon: Activity, href: '#smart-meter-datenschutz-dsgvo' },
    { id: 'energiedaten', label: 'Energiedaten', icon: Database, href: '#energiedaten-management-compliance' },
    { id: 'netzinfrastruktur', label: 'Netzinfrastruktur', icon: Network, href: '#netzinfrastruktur-cyber-security' },
    { id: 'verbraucherschutz', label: 'Verbraucherschutz', icon: Users, href: '#verbraucherschutz-transparenz-dsgvo' },
    { id: 'implementation', label: 'Umsetzung', icon: Code, href: '#praktische-umsetzung-smart-grid' }
  ];

  const complianceStats = [
    { label: 'Smart Meter DSGVO', value: 95, color: 'text-blue-600', trend: '+8%' },
    { label: 'Energiedaten-Schutz', value: 88, color: 'text-teal-600', trend: '+12%' },
    { label: 'Netz-Sicherheit', value: 92, color: 'text-green-600', trend: '+5%' },
    { label: 'Verbraucher-Privacy', value: 85, color: 'text-orange-600', trend: '+15%' },
    { label: 'Regulatorische Compliance', value: 90, color: 'text-purple-600', trend: '+7%' },
    { label: 'Cyber-Resilience', value: 87, color: 'text-red-600', trend: '+10%' }
  ];

  const smartGridFrameworks = [
    {
      name: 'DSGVO für Smart Grid',
      category: 'Data Protection',
      requirements: [
        'Energieverbrauchsdaten anonymisieren',
        'Einwilligungsmanagement für Smart Meter',
        'Recht auf Datenportabilität gewährleisten',
        'Privacy-by-Design implementieren'
      ],
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'BSI TR-03109',
      category: 'IT Security',
      requirements: [
        'Sichere Smart Meter Gateway Kommunikation',
        'Ende-zu-Ende Verschlüsselung',
        'Authentifizierung und Autorisierung',
        'Regelmäßige Sicherheitsupdates'
      ],
      color: 'bg-teal-50 border-teal-200'
    },
    {
      name: 'MsbG (Messstellenbetriebsgesetz)',
      category: 'Energy Law',
      requirements: [
        'Intelligente Messsysteme rechtskonform betreiben',
        'Datenschutz bei Messdatenübertragung',
        'Verbraucherrechte beim Smart Metering',
        'Technische Mindestanforderungen erfüllen'
      ],
      color: 'bg-green-50 border-green-200'
    }
  ];

  const smartGridChallenges = [
    {
      category: 'Smart Meter Privacy',
      icon: Activity,
      challenges: [
        'Hochfrequente Verbrauchsdaten ermöglichen Rückschlüsse auf Lebensgewohnheiten',
        'Anonymisierung bei kontinuierlicher Datensammlung schwierig',
        'Balance zwischen Datenschutz und Netzbetrieb finden',
        'Einwilligungsmanagement bei automatisierten Systemen'
      ]
    },
    {
      category: 'Energiedaten-Sicherheit',
      icon: Database,
      challenges: [
        'Schutz vor Cyber-Angriffen auf kritische Infrastruktur',
        'Sichere Übertragung von Millionen von Datenpunkten täglich',
        'Langzeitspeicherung von Energiedaten rechtskonform gestalten',
        'Zugriffskontrolle für verschiedene Stakeholder (Netzbetreiber, Energieversorger, Kunden)'
      ]
    },
    {
      category: 'Regulatorische Komplexität',
      icon: FileText,
      challenges: [
        'Verschiedene Gesetze (DSGVO, MsbG, EnWG) harmonisieren',
        'Compliance in föderaler Struktur mit Länderregelungen',
        'Internationale Standards mit nationalen Vorschriften abstimmen',
        'Regelmäßige Anpassungen an neue Technologien'
      ]
    }
  ];

  const implementationPhases = [
    {
      phase: 'Assessment & Planning',
      duration: '2-3 Monate',
      color: 'bg-blue-100 text-blue-800',
      tasks: [
        'Datenschutz-Folgenabschätzung für Smart Grid',
        'Technische Infrastruktur bewerten',
        'Rechtliche Anforderungen kartieren',
        'Stakeholder-Analyse durchführen'
      ],
      deliverables: ['DSFA-Bericht', 'Compliance-Roadmap', 'Risikoanalyse']
    },
    {
      phase: 'Technical Implementation',
      duration: '4-6 Monate',
      color: 'bg-teal-100 text-teal-800',
      tasks: [
        'Smart Meter Gateway sicher konfigurieren',
        'Verschlüsselung und Authentifizierung implementieren',
        'Datenminimierungsstrategien umsetzen',
        'Privacy-Dashboard entwickeln'
      ],
      deliverables: ['Sichere Infrastruktur', 'Privacy-Controls', 'Monitoring-System']
    },
    {
      phase: 'Privacy Controls',
      duration: '2-3 Monate',
      color: 'bg-green-100 text-green-800',
      tasks: [
        'Einwilligungsmanagement-System',
        'Betroffenenrechte automatisieren',
        'Datenschutz-Cockpit für Verbraucher',
        'Compliance-Monitoring einrichten'
      ],
      deliverables: ['Privacy-Management', 'Verbraucher-Portal', 'Audit-System']
    },
    {
      phase: 'Compliance & Optimization',
      duration: '1-2 Monate',
      color: 'bg-purple-100 text-purple-800',
      tasks: [
        'Regulatorische Prüfungen durchführen',
        'Penetrationstests und Sicherheitsaudits',
        'Mitarbeiterschulungen',
        'Kontinuierliche Verbesserung etablieren'
      ],
      deliverables: ['Compliance-Zertifikat', 'Sicherheitsnachweis', 'Schulungskonzept']
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map(item => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
      
      // Show back to top button when scrolled down
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <Helmet>
        <title>Smart Grid Datenschutz – Compliance für Energienetze</title>
        <meta name="description" content="Umfassender Leitfaden für Smart Grid Datenschutz. Smart Meter DSGVO-konform einsetzen, Energiedaten schützen & Cyber-Security für kritische Infrastruktur." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://datenschutz-assistent.de/wissen/branchen/smart-grid-compliance" />
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-teal-600/5" />
          <motion.div 
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 30, 0], 
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, -30, 0], 
              y: [0, 30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        <motion.div 
          style={{ y, opacity }}
          className="container relative px-4 mx-auto"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white border-0">
                  <Zap className="w-4 h-4 mr-2" />
                  Smart Grid Compliance
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                  Datenschutz im{' '}
                  <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                    Smart Grid
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Intelligente Stromnetze revolutionieren die Energiewirtschaft. Erfahren Sie, wie Sie Smart Grid-Technologien 
                  DSGVO-konform implementieren und dabei Verbraucherdaten optimal schützen.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-4"
              >
                {[
                  'Smart Meter Privacy-by-Design implementieren',
                  'Energiedaten rechtssicher verarbeiten',
                  'Cyber-Sicherheit für kritische Infrastruktur'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700"
                  asChild
                >
                  <a href="#smart-grid-datenschutz-ueberblick" onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('ueberblick');
                    if (element) {
                      const yOffset = -100;
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}>
                    Guide starten
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-gray-300"
                  asChild
                >
                  <Link to="/wissen/branchen">
                    Alle Branchen-Guides
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Card className="p-6 bg-white/80 backdrop-blur-sm border-gray-200">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center text-lg">
                    <Monitor className="w-5 h-5 mr-2 text-blue-600" />
                    Smart Grid Compliance Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {complianceStats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">{stat.label}</span>
                        <div className="flex items-center space-x-2">
                          <span className={`text-sm font-semibold ${stat.color}`}>{stat.value}%</span>
                          <Badge variant="secondary" className="text-xs px-2 py-0.5">
                            {stat.trend}
                          </Badge>
                        </div>
                      </div>
                      <Progress value={stat.value} className="h-2" />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-gray-600" />
                  Inhaltsverzeichnis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <nav aria-label="Inhaltsverzeichnis">
                  <ul className="grid md:grid-cols-2 gap-3">
                    {navigationItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <li key={item.id}>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              const element = document.getElementById(item.id);
                              if (element) {
                                const yOffset = -100;
                                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                                window.scrollTo({ top: y, behavior: 'smooth' });
                              }
                            }}
                            className="text-left w-full px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3 group"
                          >
                            <Icon className="h-5 w-5 text-gray-500 group-hover:text-blue-600" />
                            <span className="text-gray-700 group-hover:text-gray-900">
                              {item.label}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm">
        <div className="container px-4 mx-auto">
          <nav className="flex space-x-8 overflow-x-auto">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById(item.id);
                    if (element) {
                      const yOffset = -100; // Offset for sticky header
                      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                      window.scrollTo({ top: y, behavior: 'smooth' });
                    }
                  }}
                  className={cn(
                    "flex items-center space-x-2 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2",
                    activeSection === item.id
                      ? "text-blue-600 border-blue-600"
                      : "text-gray-600 border-transparent hover:text-gray-900"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 mx-auto py-16 space-y-16">
        
        {/* Überblick Section */}
        <section id="ueberblick" className="space-y-8" style={{ scrollMarginTop: '96px' }}>
          <div id="smart-grid-datenschutz-ueberblick" className="absolute -top-32" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center"
          >
            <Shield className="w-8 h-8 inline-block mr-3 text-blue-600" />
            Smart Grid Datenschutz Überblick
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lightbulb className="w-5 h-5 mr-2 text-yellow-600" />
                    Was ist ein Smart Grid?
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Smart Grids sind intelligente Stromnetze, die durch digitale Kommunikationstechnologie 
                    die Erzeugung, Verteilung und den Verbrauch von Elektrizität optimieren. Sie ermöglichen 
                    eine bidirektionale Kommunikation zwischen Energieversorgern und Verbrauchern.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Kernkomponenten:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />Smart Meter (intelligente Stromzähler)</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />Smart Meter Gateway (Kommunikationseinheit)</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />Netzsteuerungs- und Managementsysteme</li>
                      <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-green-600" />Energiemanagementsysteme beim Verbraucher</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2 text-orange-600" />
                    Datenschutz-Herausforderungen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Smart Grids sammeln detaillierte Energieverbrauchsdaten, die Rückschlüsse auf 
                    Lebensgewohnheiten, Anwesenheit und sogar verwendete Geräte ermöglichen. 
                    Dies erfordert besondere Datenschutzmaßnahmen.
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Kritische Bereiche:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li className="flex items-center"><AlertTriangle className="w-4 h-4 mr-2 text-orange-600" />Hochfrequente Verbrauchsdatenerfassung</li>
                      <li className="flex items-center"><AlertTriangle className="w-4 h-4 mr-2 text-orange-600" />Profilbildung und Verhaltensmuster</li>
                      <li className="flex items-center"><AlertTriangle className="w-4 h-4 mr-2 text-orange-600" />Datenweitergabe an Dritte</li>
                      <li className="flex items-center"><AlertTriangle className="w-4 h-4 mr-2 text-orange-600" />Langzeitspeicherung von Energiedaten</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-purple-600" />
                  Rechtliche Rahmenbedingungen
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {smartGridFrameworks.map((framework, index) => (
                    <motion.div
                      key={framework.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={cn("p-4 rounded-lg border", framework.color)}
                    >
                      <h4 className="font-semibold text-gray-900 mb-2">{framework.name}</h4>
                      <Badge variant="secondary" className="mb-3 text-xs">
                        {framework.category}
                      </Badge>
                      <ul className="space-y-1 text-sm text-gray-600">
                        {framework.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <CheckCircle2 className="w-3 h-3 mr-2 mt-0.5 text-green-600 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Smart Meter Section */}
        <section id="smart-meter" className="space-y-8" style={{ scrollMarginTop: '96px' }}>
          <div id="smart-meter-datenschutz-dsgvo" className="absolute -top-32" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center"
          >
            <Activity className="w-8 h-8 inline-block mr-3 text-teal-600" />
            Smart Meter Datenschutz
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Smartphone className="w-5 h-5 mr-2 text-blue-600" />
                    Smart Meter Funktionsweise
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Smart Meter erfassen Energieverbrauchsdaten in kurzen Intervallen (15 Minuten bis Echtzeit) 
                    und übertragen diese über das Smart Meter Gateway an autorisierte Marktteilnehmer.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Datenerfassung & -übertragung</h4>
                    <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`Messintervall: 15 Min → 1 Stunde → 1 Tag
Datenvolumen: ~35.000 Datenpunkte/Jahr/Haushalt
Übertragung: verschlüsselt über Smart Meter Gateway
Empfänger: Netzbetreiber, Messstellenbetreiber, 
          Energielieferant (mit Einwilligung)`}
                    </pre>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900">Übertragene Daten:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      <li>• Energieverbrauch (kWh) in definierten Intervallen</li>
                      <li>• Zeitstempel der Messung</li>
                      <li>• Zählerstand und Geräte-ID</li>
                      <li>• Status- und Diagnosedaten</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Lock className="w-5 h-5 mr-2 text-green-600" />
                    Privacy-by-Design Ansätze
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Implementierung von Datenschutzmaßnahmen bereits in der Systemarchitektur, 
                    um Privatsphäre von Beginn an zu gewährleisten.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-blue-100 text-blue-800 mt-1">1</Badge>
                      <div>
                        <h5 className="font-medium">Datenminimierung</h5>
                        <p className="text-sm text-gray-600">Nur notwendige Daten erfassen und übertragen</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-teal-100 text-teal-800 mt-1">2</Badge>
                      <div>
                        <h5 className="font-medium">Pseudonymisierung</h5>
                        <p className="text-sm text-gray-600">Verbrauchsdaten von Identitäten trennen</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-green-100 text-green-800 mt-1">3</Badge>
                      <div>
                        <h5 className="font-medium">Verschlüsselung</h5>
                        <p className="text-sm text-gray-600">Ende-zu-Ende Verschlüsselung der Datenübertragung</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-purple-100 text-purple-800 mt-1">4</Badge>
                      <div>
                        <h5 className="font-medium">Zugriffskontrolle</h5>
                        <p className="text-sm text-gray-600">Granulare Berechtigungen für Datennutzung</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Users className="w-5 h-5 mr-2 text-orange-600" />
                    Einwilligungsmanagement für Smart Meter
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedSection(expandedSection === 'consent' ? null : 'consent')}
                  >
                    <ChevronDown className={cn("w-4 h-4 transition-transform", 
                      expandedSection === 'consent' && "rotate-180")} />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Verbraucher müssen transparente Kontrolle über ihre Energiedaten haben. Ein effektives 
                  Einwilligungsmanagement ist Grundlage für DSGVO-konforme Smart Meter Implementierung.
                </p>
                
                {expandedSection === 'consent' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Einwilligungsebenen</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                            <h5 className="font-medium text-green-800">Basis-Datenübertragung</h5>
                            <p className="text-sm text-green-700">Gesetzlich erforderlich für Abrechnung</p>
                            <Badge className="mt-1 bg-green-600 text-white text-xs">Obligatorisch</Badge>
                          </div>
                          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <h5 className="font-medium text-blue-800">Erweiterte Analytics</h5>
                            <p className="text-sm text-blue-700">Verbrauchsoptimierung und Prognosen</p>
                            <Badge className="mt-1 bg-blue-600 text-white text-xs">Optional</Badge>
                          </div>
                          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                            <h5 className="font-medium text-purple-800">Drittanbieter-Services</h5>
                            <p className="text-sm text-purple-700">Energiemanagement-Apps und Services</p>
                            <Badge className="mt-1 bg-purple-600 text-white text-xs">Opt-in</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Technische Implementierung</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Consent Management API
interface SmartMeterConsent {
  customerId: string;
  meterGatewayId: string;
  consentLevels: {
    basicData: boolean;        // mandatory
    analytics: boolean;        // optional
    thirdParty: boolean[];     // granular
  };
  dataRetention: number;       // months
  withdrawalDate?: Date;
}

// Granulare Datenfreigabe
const consentConfig = {
  interval: '15min' | 'hourly' | 'daily',
  recipients: ['netzbetreiber', 'mssb', 'lieferant'],
  purposes: ['abrechnung', 'netzstabilität', 'prognose']
};`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Energiedaten Section */}
        <section id="energiedaten" className="space-y-8" style={{ scrollMarginTop: '96px' }}>
          <div id="energiedaten-management-compliance" className="absolute -top-32" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center"
          >
            <Database className="w-8 h-8 inline-block mr-3 text-green-600" />
            Energiedaten-Management
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {smartGridChallenges.map((challenge, index) => {
              const Icon = challenge.icon;
              return (
                <motion.div
                  key={challenge.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="flex items-center text-lg">
                        <Icon className="w-5 h-5 mr-2 text-blue-600" />
                        {challenge.category}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {challenge.challenges.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start space-x-2">
                            <AlertTriangle className="w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-blue-600" />
                    Datenschutz-Architektur für Energiedaten
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedSection(expandedSection === 'architecture' ? null : 'architecture')}
                  >
                    <ChevronDown className={cn("w-4 h-4 transition-transform", 
                      expandedSection === 'architecture' && "rotate-180")} />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Eine sichhere Datenschutz-Architektur für Smart Grids trennt personenbezogene Daten von 
                  Energieverbrauchsdaten und implementiert Sicherheitsmaßnahmen auf allen Ebenen.
                </p>
                
                {expandedSection === 'architecture' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Datenarchitektur-Ebenen</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <h5 className="font-medium text-blue-800">Device Layer</h5>
                            <p className="text-sm text-blue-700">Smart Meter, Sensoren, IoT-Geräte</p>
                            <Badge className="mt-1 bg-blue-600 text-white text-xs">Hardware-Verschlüsselung</Badge>
                          </div>
                          <div className="p-3 bg-teal-50 rounded-lg border border-teal-200">
                            <h5 className="font-medium text-teal-800">Gateway Layer</h5>
                            <p className="text-sm text-teal-700">Smart Meter Gateway, Protokoll-Translation</p>
                            <Badge className="mt-1 bg-teal-600 text-white text-xs">BSI TR-03109</Badge>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                            <h5 className="font-medium text-green-800">Data Processing Layer</h5>
                            <p className="text-sm text-green-700">Datenaufbereitung, Anonymisierung</p>
                            <Badge className="mt-1 bg-green-600 text-white text-xs">Privacy-Preserving</Badge>
                          </div>
                          <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                            <h5 className="font-medium text-purple-800">Application Layer</h5>
                            <p className="text-sm text-purple-700">Analytics, Dashboards, APIs</p>
                            <Badge className="mt-1 bg-purple-600 text-white text-xs">Zugriffskontrolle</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Privacy-Preserving Technologies</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Differential Privacy für Energiedaten
class EnergyDataPrivacy {
  addNoise(data: number[], epsilon: number): number[] {
    const noise = generateLaplaceNoise(epsilon);
    return data.map(value => value + noise);
  }
  
  // k-Anonymität für Verbrauchsgruppen
  anonymizeConsumption(groups: ConsumerGroup[]) {
    return groups.filter(group => group.size >= k)
                 .map(group => ({
                   ...group,
                   consumers: suppressQuasiIdentifiers(group.consumers)
                 }));
  }
  
  // Homomorphe Verschlüsselung für Aggregation
  aggregateEncrypted(encryptedValues: EncryptedValue[]): EncryptedSum {
    return encryptedValues.reduce((sum, value) => 
      homomorphicAdd(sum, value), 
      ENCRYPTED_ZERO
    );
  }
}`}
                          </pre>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium text-gray-900">Implementierte Technologien:</h5>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Differential Privacy für statistische Analysen</li>
                            <li>• k-Anonymität für Gruppierungen</li>
                            <li>• Homomorphe Verschlüsselung für Aggregationen</li>
                            <li>• Secure Multi-Party Computation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Netzinfrastruktur Section */}
        <section id="netzinfrastruktur" className="space-y-8" style={{ scrollMarginTop: '96px' }}>
          <div id="netzinfrastruktur-cyber-security" className="absolute -top-32" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center"
          >
            <Network className="w-8 h-8 inline-block mr-3 text-purple-600" />
            Netzinfrastruktur & Cyber-Security
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Radio className="w-5 h-5 mr-2 text-purple-600" />
                    Kommunikationsinfrastruktur
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Smart Grid Kommunikation erfolgt über verschiedene Technologien und Protokolle. 
                    Jede Kommunikationsebene erfordert spezifische Sicherheitsmaßnahmen.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div>
                        <h5 className="font-medium text-blue-800">Wide Area Network (WAN)</h5>
                        <p className="text-xs text-blue-600">Netzbetreiber ↔ Smart Meter Gateway</p>
                      </div>
                      <Badge className="bg-blue-600 text-white text-xs">TLS 1.3</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                      <div>
                        <h5 className="font-medium text-teal-800">Local Metrological Network (LMN)</h5>
                        <p className="text-xs text-teal-600">Gateway ↔ Smart Meter</p>
                      </div>
                      <Badge className="bg-teal-600 text-white text-xs">OMS</Badge>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div>
                        <h5 className="font-medium text-green-800">Home Area Network (HAN)</h5>
                        <p className="text-xs text-green-600">Gateway ↔ Verbrauchergeräte</p>
                      </div>
                      <Badge className="bg-green-600 text-white text-xs">CLS</Badge>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Sicherheitsprotokolle</h4>
                    <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`BSI TR-03109-1: Smart Meter Gateway Requirements
├── Public Key Infrastructure (PKI)
├── TLS 1.3 für WAN-Kommunikation
├── OMS-Standard für LMN
└── Controllable Local Systems (CLS) für HAN

Verschlüsselung:
- AES-256 für symmetrische Verschlüsselung
- RSA-4096/ECDSA für asymmetrische Verfahren
- SHA-256 für Hash-Funktionen`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-red-600" />
                    Cyber-Security Maßnahmen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Smart Grids sind kritische Infrastruktur und damit attraktive Ziele für Cyber-Angriffe. 
                    Mehrschichtige Sicherheitskonzepte sind essentiell.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                      <h5 className="font-medium text-red-800">Network Security</h5>
                      <ul className="text-xs text-red-700 mt-1 space-y-0.5">
                        <li>• Netzwerksegmentierung und Firewalls</li>
                        <li>• Intrusion Detection/Prevention Systems</li>
                        <li>• VPN für sichere Fernzugriffe</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <h5 className="font-medium text-orange-800">Device Security</h5>
                      <ul className="text-xs text-orange-700 mt-1 space-y-0.5">
                        <li>• Hardware Security Module (HSM)</li>
                        <li>• Secure Boot und Code Signing</li>
                        <li>• Over-the-Air Updates mit Signaturprüfung</li>
                      </ul>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h5 className="font-medium text-yellow-800">Operational Security</h5>
                      <ul className="text-xs text-yellow-700 mt-1 space-y-0.5">
                        <li>• 24/7 Security Operations Center</li>
                        <li>• Incident Response Prozesse</li>
                        <li>• Regelmäßige Penetrationstests</li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Threat Monitoring</h4>
                    <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// SIEM Integration für Smart Grid
const securityEvents = {
  anomalousConsumption: 'Ungewöhnliche Verbrauchsmuster',
  unauthorizedAccess: 'Unbefugte Gateway-Zugriffe',
  communicationFailure: 'Gestörte Kommunikation',
  firmwareManipulation: 'Firmware-Integritätsverletzung'
};

// Automated Response
if (threatLevel > CRITICAL) {
  isolateAffectedGateway();
  notifySecurityTeam();
  initiateIncidentResponse();
}`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Verbraucherschutz Section */}
        <section id="verbraucherschutz" className="space-y-8" style={{ scrollMarginTop: '96px' }}>
          <div id="verbraucherschutz-transparenz-dsgvo" className="absolute -top-32" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center"
          >
            <Users className="w-8 h-8 inline-block mr-3 text-orange-600" />
            Verbraucherschutz & Transparenz
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Eye className="w-5 h-5 mr-2 text-blue-600" />
                    Verbraucher-Dashboard & Transparenz
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setExpandedSection(expandedSection === 'dashboard' ? null : 'dashboard')}
                  >
                    <ChevronDown className={cn("w-4 h-4 transition-transform", 
                      expandedSection === 'dashboard' && "rotate-180")} />
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Verbraucher haben das Recht auf transparente Information über die Verarbeitung ihrer 
                  Energiedaten. Ein benutzerfreundliches Dashboard schafft Vertrauen und Kontrolle.
                </p>
                
                {expandedSection === 'dashboard' && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Dashboard-Funktionen</h4>
                        <div className="space-y-3">
                          <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                            <h5 className="font-medium text-blue-800 flex items-center">
                              <Activity className="w-4 h-4 mr-2" />
                              Energieverbrauch Monitoring
                            </h5>
                            <ul className="text-sm text-blue-700 mt-1 space-y-0.5">
                              <li>• Echzeit-Verbrauchsanzeige</li>
                              <li>• Historische Trends und Vergleiche</li>
                              <li>• Kostenaufschlüsselung nach Tarifen</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-teal-50 rounded-lg border border-teal-200">
                            <h5 className="font-medium text-teal-800 flex items-center">
                              <Settings className="w-4 h-4 mr-2" />
                              Datenschutz-Einstellungen
                            </h5>
                            <ul className="text-sm text-teal-700 mt-1 space-y-0.5">
                              <li>• Granulare Einwilligungsverwaltung</li>
                              <li>• Datenfreigabe an Dritte kontrollieren</li>
                              <li>• Löschfristen anpassen</li>
                            </ul>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                            <h5 className="font-medium text-green-800 flex items-center">
                              <Download className="w-4 h-4 mr-2" />
                              Datenexport & Portabilität
                            </h5>
                            <ul className="text-sm text-green-700 mt-1 space-y-0.5">
                              <li>• Vollständiger Datenexport (DSGVO Art. 20)</li>
                              <li>• Maschinenlesbare Formate (JSON, CSV)</li>
                              <li>• API-Zugang für Drittanbieter</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-semibold text-gray-900">Benutzerfreundliche Implementierung</h4>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// React Dashboard Component
const EnergyDashboard = () => {
  const [consents, setConsents] = useState({
    analytics: true,
    thirdParty: false,
    marketing: false
  });

  const [exportFormat, setExportFormat] = useState('json');
  
  return (
    <div className="space-y-6">
      <ConsentManager 
        consents={consents}
        onChange={setConsents}
        granular={true}
      />
      
      <EnergyChart 
        data={energyData}
        privacy={consents.analytics}
      />
      
      <DataExport 
        format={exportFormat}
        onExport={handleDataExport}
      />
    </div>
  );
};`}
                          </pre>
                        </div>
                        <div className="space-y-2">
                          <h5 className="font-medium text-gray-900">UX/UI Prinzipien:</h5>
                          <ul className="space-y-1 text-sm text-gray-600">
                            <li>• Klare, verständliche Sprache verwenden</li>
                            <li>• Komplexe Sachverhalte visuell aufbereiten</li>
                            <li>• Ein-Klick Zugang zu Datenschutzfunktionen</li>
                            <li>• Responsive Design für alle Endgeräte</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="w-5 h-5 mr-2 text-green-600" />
                    Betroffenenrechte umsetzen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Smart Grid Betreiber müssen alle DSGVO-Betroffenenrechte technisch und 
                    organisatorisch umsetzen können.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-blue-100 text-blue-800 mt-1 text-xs">Art. 15</Badge>
                      <div>
                        <h5 className="font-medium text-sm">Auskunftsrecht</h5>
                        <p className="text-xs text-gray-600">Vollständige Übersicht aller verarbeiteten Energiedaten</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-teal-100 text-teal-800 mt-1 text-xs">Art. 16</Badge>
                      <div>
                        <h5 className="font-medium text-sm">Berichtigungsrecht</h5>
                        <p className="text-xs text-gray-600">Korrektur fehlerhafter Verbrauchsdaten</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-green-100 text-green-800 mt-1 text-xs">Art. 17</Badge>
                      <div>
                        <h5 className="font-medium text-sm">Löschungsrecht</h5>
                        <p className="text-xs text-gray-600">Löschen nach Ablauf gesetzlicher Aufbewahrungsfristen</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-purple-100 text-purple-800 mt-1 text-xs">Art. 20</Badge>
                      <div>
                        <h5 className="font-medium text-sm">Datenportabilität</h5>
                        <p className="text-xs text-gray-600">Export in maschinenlesbaren Formaten</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Badge className="bg-orange-100 text-orange-800 mt-1 text-xs">Art. 21</Badge>
                      <div>
                        <h5 className="font-medium text-sm">Widerspruchsrecht</h5>
                        <p className="text-xs text-gray-600">Stopp der Datenverarbeitung für bestimmte Zwecke</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-purple-600" />
                    Incident Response & Meldepflichten
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Bei Datenschutzverletzungen in Smart Grid Systemen greifen besondere 
                    Meldepflichten für kritische Infrastruktur.
                  </p>
                  <div className="space-y-3">
                    <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                      <h5 className="font-medium text-red-800">DSGVO Meldepflicht</h5>
                      <div className="text-sm text-red-700 space-y-1">
                        <p><strong>72h</strong> - Meldung an Aufsichtsbehörde</p>
                        <p><strong>ohne Verzug</strong> - Information der Betroffenen</p>
                      </div>
                    </div>
                    <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                      <h5 className="font-medium text-orange-800">BSI Meldepflicht</h5>
                      <div className="text-sm text-orange-700 space-y-1">
                        <p><strong>KRITIS-Verordnung</strong> - Störungen kritischer IT</p>
                        <p><strong>ohne Verzug</strong> - Cyber-Sicherheitsvorfälle</p>
                      </div>
                    </div>
                    <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <h5 className="font-medium text-yellow-800">Regulierungsbehörde</h5>
                      <div className="text-sm text-yellow-700 space-y-1">
                        <p><strong>Bundesnetzagentur</strong> - Netzstörungen</p>
                        <p><strong>EnWG § 13b</strong> - Systemsicherheit</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm">Incident Response Workflow</h4>
                    <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`1. Detection & Assessment
   └── Automated monitoring alerts
   
2. Classification & Impact Analysis  
   ├── Data breach severity
   ├── Infrastructure impact
   └── Regulatory requirements
   
3. Notification Timeline
   ├── Internal escalation: 1h
   ├── BSI notification: 4h
   ├── DSGVO authority: 72h
   └── Customer notification: varies`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Implementation Section */}
        <section id="implementation" className="space-y-8" style={{ scrollMarginTop: '96px' }}>
          <div id="praktische-umsetzung-smart-grid" className="absolute -top-32" />
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-center"
          >
            <Code className="w-8 h-8 inline-block mr-3 text-blue-600" />
            Praktische Umsetzung
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-600" />
                  Implementation Roadmap
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {implementationPhases.map((phase, index) => (
                    <motion.div
                      key={phase.phase}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="space-y-4"
                    >
                      <div className="text-center">
                        <Badge className={cn("text-sm px-3 py-1", phase.color)}>
                          Phase {index + 1}
                        </Badge>
                        <h4 className="font-semibold mt-2">{phase.phase}</h4>
                        <p className="text-sm text-gray-600">{phase.duration}</p>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">Hauptaufgaben:</h5>
                        <ul className="space-y-1">
                          {phase.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="text-xs text-gray-600 flex items-start">
                              <CheckCircle2 className="w-3 h-3 mr-1 mt-0.5 text-green-600 flex-shrink-0" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="space-y-2">
                        <h5 className="font-medium text-sm">Deliverables:</h5>
                        <ul className="space-y-1">
                          {phase.deliverables.map((deliverable, delIndex) => (
                            <li key={delIndex} className="text-xs text-blue-600 flex items-start">
                              <ArrowRight className="w-3 h-3 mr-1 mt-0.5 flex-shrink-0" />
                              {deliverable}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cpu className="w-5 h-5 mr-2 text-blue-600" />
                    Technology Stack
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Bewährte Technologien und Standards für DSGVO-konforme Smart Grid Implementierung.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Infrastructure & Security</h5>
                      <div className="grid grid-cols-2 gap-2">
                        <Badge variant="outline" className="justify-center">BSI TR-03109</Badge>
                        <Badge variant="outline" className="justify-center">TLS 1.3</Badge>
                        <Badge variant="outline" className="justify-center">PKI</Badge>
                        <Badge variant="outline" className="justify-center">HSM</Badge>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Data Processing</h5>
                      <div className="grid grid-cols-2 gap-2">
                        <Badge variant="outline" className="justify-center">Apache Kafka</Badge>
                        <Badge variant="outline" className="justify-center">PostgreSQL</Badge>
                        <Badge variant="outline" className="justify-center">InfluxDB</Badge>
                        <Badge variant="outline" className="justify-center">Redis</Badge>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Privacy Tech</h5>
                      <div className="grid grid-cols-2 gap-2">
                        <Badge variant="outline" className="justify-center">Differential Privacy</Badge>
                        <Badge variant="outline" className="justify-center">Homomorphic Encryption</Badge>
                        <Badge variant="outline" className="justify-center">Secure MPC</Badge>
                        <Badge variant="outline" className="justify-center">Zero-Knowledge</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Architektur-Pattern</h4>
                    <pre className="text-xs bg-white p-3 rounded border overflow-x-auto">
{`// Microservices für Smart Grid
services:
  gateway-manager:
    - Smart Meter Gateway Verwaltung
    - Geräte-Authentifizierung
    
  data-processor:
    - Energiedaten Anonymisierung
    - Privacy-preserving Analytics
    
  consent-manager:
    - Einwilligungsverwaltung
    - Betroffenenrechte
    
  audit-service:
    - Compliance Monitoring
    - Incident Response`}
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
                    Deployment Checklist
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    Comprehensive Checklist für die produktive Einführung von Smart Grid 
                    Datenschutzmaßnahmen.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Vor der Implementierung</h5>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span>Datenschutz-Folgenabschätzung durchgeführt</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span>Rechtliche Grundlagen geprüft (DSGVO, MsbG)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span>BSI-Zertifizierung für Smart Meter Gateway</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span>Mitarbeiterschulungen durchgeführt</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Technische Umsetzung</h5>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span>Verschlüsselung End-to-End implementiert</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span>Consent Management System deployed</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span>Privacy Dashboard für Kunden</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span>Automated Privacy Controls</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Compliance & Monitoring</h5>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span>Audit-Logs und Monitoring aktiv</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span>Incident Response Verfahren getestet</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span>Betroffenenrechte-Workflow funktional</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input type="checkbox" className="rounded" />
                          <span>Regelmäßige Compliance-Reviews geplant</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto space-y-8"
          >
            <div className="flex justify-center">
              <Zap className="w-16 h-16 text-white/80" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Bereit für DSGVO-konforme Smart Grid Implementation?
            </h2>
            <p className="text-xl text-white/90">
              Nutzen Sie unsere Expertise für die sichere und rechtskonforme Digitalisierung 
              Ihrer Energieinfrastruktur. Privacy-by-Design von Anfang an.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                asChild
              >
                <Link to="/kontakt">
                  Kostenlose Beratung
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600"
                asChild
              >
                <Link to="/tools">
                  Compliance Tools entdecken
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center mb-8"
          >
            Verwandte Ressourcen
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Industrie 4.0 Datenschutz',
                description: 'Privacy in vernetzten Produktionsanlagen',
                link: '/wissen/branchen/industrie-40-datenschutz',
                icon: Building
              },
              {
                title: 'Fintech Compliance',
                description: 'Datenschutz in Finanzdienstleistungen',
                link: '/wissen/branchen/fintech-compliance',
                icon: TrendingUp
              },
              {
                title: 'Healthcare DSGVO',
                description: 'Patientendaten rechtssicher verarbeiten',
                link: '/wissen/branchen/healthcare-dsgvo',
                icon: Heart
              },
              {
                title: 'Privacy Tools',
                description: 'Praktische Werkzeuge für Compliance',
                link: '/tools',
                icon: BookOpen
              }
            ].map((resource, index) => {
              const Icon = resource.icon;
              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <Icon className="w-8 h-8 text-blue-600 mb-4" />
                      <h4 className="font-semibold mb-2">{resource.title}</h4>
                      <p className="text-sm text-gray-600 mb-4">{resource.description}</p>
                      <Button variant="outline" size="sm" asChild className="w-full">
                        <Link to={resource.link}>
                          Mehr erfahren
                          <ChevronRight className="w-4 h-4 ml-2" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all"
          aria-label="Zurück nach oben"
        >
          <ChevronUp className="h-5 w-5" />
        </button>
      )}
    </div>
  );
}