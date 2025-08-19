import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Plane, Shield, Lock, Users, AlertTriangle, CheckCircle, 
  Globe, MapPin, CreditCard, Star, Calendar, Camera,
  Smartphone, Cloud, Database, FileText, TrendingUp, 
  Activity, CheckSquare, Square, ExternalLink, ArrowRight,
  UserCheck, Navigation, Wifi, Building, Clock, ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const TravelComplianceGuide = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('overview');
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const [expandedScenarios, setExpandedScenarios] = useState<Set<string>>(new Set());

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const navigationItems = [
    { id: 'overview', label: 'Überblick', icon: Shield },
    { id: 'booking-data', label: 'Buchungsdaten', icon: Calendar },
    { id: 'standortverfolgung', label: 'Location Tracking', icon: MapPin },
    { id: 'zahlungs-compliance', label: 'Payment Compliance', icon: CreditCard },
    { id: 'grenzueberschreitende-daten', label: 'Cross-Border Data', icon: Globe },
    { id: 'bewertungen', label: 'Bewertungen', icon: Star },
    { id: 'implementierung', label: 'Implementierung', icon: Database },
    { id: 'praxis-szenarien', label: 'Praxis-Szenarien', icon: Activity },
    { id: 'checkliste', label: 'Checkliste', icon: CheckSquare },
    { id: 'ressourcen', label: 'Ressourcen', icon: FileText }
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 120;
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
      
      // Update URL hash for SEO and bookmarking
      window.history.pushState(null, '', `#${sectionId}`);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      
      for (const item of navigationItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const adjustedTop = top + window.scrollY - 150;
          const adjustedBottom = bottom + window.scrollY - 150;
          
          if (scrollPosition >= adjustedTop && scrollPosition < adjustedBottom) {
            setActiveSection(item.id);
            // Update URL hash during scroll for SEO
            const currentHash = window.location.hash.slice(1);
            if (currentHash !== item.id) {
              window.history.replaceState(null, '', `#${item.id}`);
            }
            break;
          }
        }
      }
    };

    // Handle initial hash on page load
    const handleInitialHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash && navigationItems.find(item => item.id === hash)) {
        setTimeout(() => scrollToSection(hash), 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleInitialHash);
    handleScroll();
    handleInitialHash();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleInitialHash);
    };
  }, []);

  const toggleCheckedItem = (itemId: string) => {
    setCheckedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  const toggleScenario = (scenarioId: string) => {
    setExpandedScenarios(prev => {
      const newSet = new Set(prev);
      if (newSet.has(scenarioId)) {
        newSet.delete(scenarioId);
      } else {
        newSet.add(scenarioId);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>
        
        <motion.div style={{ y, opacity }} className="container px-4">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
                Travel & Tourism Compliance
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                DSGVO-Compliance für Travel & Tourism Plattformen
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
                Von Buchungsplattformen bis Location-Based Services: Meistern Sie die Datenschutz-Herausforderungen der Reisebranche mit unseren praxiserprobten Lösungen.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                {[
                  { icon: Plane, label: 'Booking Platforms', value: '2.5M+' },
                  { icon: MapPin, label: 'Location Data Points', value: '500M+' },
                  { icon: Globe, label: 'Länder Compliance', value: '195+' },
                  { icon: Shield, label: 'DSGVO konform', value: '100%' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 shadow-lg"
                  >
                    <stat.icon className="h-8 w-8 mx-auto mb-2 text-teal-600" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700"
                  onClick={() => scrollToSection('overview')}
                >
                  Compliance Guide starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  Whitepaper anfordern
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
        <div className="container px-4">
          <nav className="flex items-center justify-start md:justify-center gap-2 py-2 overflow-x-auto scrollbar-hide">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all whitespace-nowrap",
                  activeSection === item.id
                    ? "bg-teal-100 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300"
                    : "text-gray-600 dark:text-gray-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
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
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-4">Travel Compliance im Überblick</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Die Reise- und Tourismusbranche verarbeitet täglich Millionen sensibler Daten: von Reisepässen über Zahlungsinformationen bis zu Standortdaten. Moderne Travel-Tech-Unternehmen müssen dabei höchste Datenschutzstandards erfüllen.
                </p>

                {/* Compliance Dashboard */}
                <Card className="p-6 shadow-2xl border-2 border-teal-200 dark:border-teal-800">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Activity className="h-6 w-6 text-teal-600" />
                      Travel Industry Compliance Dashboard
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {[
                        { label: 'Booking Data Protection', value: 94, trend: '+12%', color: 'text-green-600' },
                        { label: 'Payment PCI DSS', value: 98, trend: '+5%', color: 'text-green-600' },
                        { label: 'Location Privacy', value: 87, trend: '+8%', color: 'text-yellow-600' },
                        { label: 'Cross-Border Transfer', value: 91, trend: '+15%', color: 'text-green-600' },
                        { label: 'Customer Consent', value: 96, trend: '+10%', color: 'text-green-600' },
                        { label: 'Data Retention', value: 89, trend: '+7%', color: 'text-yellow-600' },
                        { label: 'Third-Party Compliance', value: 85, trend: '+18%', color: 'text-yellow-600' },
                        { label: 'Incident Response', value: 92, trend: '+9%', color: 'text-green-600' }
                      ].map((stat, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700"
                        >
                          <div className="text-sm font-medium text-gray-600 dark:text-gray-400">{stat.label}</div>
                          <div className="text-2xl font-bold text-teal-600 my-1">{stat.value}%</div>
                          <div className={cn("text-xs font-medium", stat.color)}>
                            <TrendingUp className="inline h-3 w-3 mr-1" />
                            {stat.trend}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Key Requirements */}
                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <Card className="border-l-4 border-teal-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-teal-600" />
                        Rechtliche Grundlagen
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Art. 6 & 9 DSGVO für Reisedaten</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>PSD2 für Zahlungsdienste</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>ePrivacy für Tracking</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-cyan-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Database className="h-5 w-5 text-cyan-600" />
                        Datentypen
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span>Reisepass & Ausweisdaten</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span>Zahlungs- & Kreditkarten</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertTriangle className="h-4 w-4 text-orange-600 mt-0.5" />
                          <span>Standort & Bewegungsdaten</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-l-4 border-green-500">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Globe className="h-5 w-5 text-green-600" />
                        Internationale Transfers
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>SCCs für Drittländer</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Adequacy Decisions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                          <span>Transfer Impact Assessment</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </section>

            {/* Booking Data Section */}
            <section id="booking-data" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-4">Buchungsdaten & Personalisierung</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Buchungsplattformen verarbeiten hochsensible Daten für Millionen von Reisenden. Von der initialen Suche bis zur Reiserückkehr müssen alle Datenflüsse DSGVO-konform gestaltet werden.
                </p>

                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Calendar className="h-6 w-6 text-teal-600" />
                    Booking Journey Compliance Map
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      {
                        phase: 'Search & Discovery',
                        requirements: ['Cookie Consent', 'Anonymous Tracking', 'Preference Storage'],
                        risk: 'Mittel',
                        progress: 85
                      },
                      {
                        phase: 'Booking Process',
                        requirements: ['Explicit Consent', 'Data Minimization', 'Purpose Limitation'],
                        risk: 'Hoch',
                        progress: 92
                      },
                      {
                        phase: 'Payment & Confirmation',
                        requirements: ['PCI DSS Compliance', 'Secure Transmission', 'Token Storage'],
                        risk: 'Kritisch',
                        progress: 98
                      },
                      {
                        phase: 'Travel Period',
                        requirements: ['Location Services', 'Emergency Contacts', 'Real-time Updates'],
                        risk: 'Hoch',
                        progress: 87
                      },
                      {
                        phase: 'Post-Travel',
                        requirements: ['Review Management', 'Data Retention', 'Marketing Consent'],
                        risk: 'Niedrig',
                        progress: 90
                      }
                    ].map((phase, index) => (
                      <div key={index} className="bg-white/80 dark:bg-gray-900/80 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{phase.phase}</h4>
                          <Badge variant={
                            phase.risk === 'Kritisch' ? 'destructive' : 
                            phase.risk === 'Hoch' ? 'warning' : 
                            phase.risk === 'Mittel' ? 'secondary' : 'default'
                          }>
                            {phase.risk} Risiko
                          </Badge>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {phase.requirements.map((req, i) => (
                            <span key={i} className="text-xs bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-2 py-1 rounded">
                              {req}
                            </span>
                          ))}
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Compliance Status</span>
                            <span className="font-medium">{phase.progress}%</span>
                          </div>
                          <Progress value={phase.progress} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Implementation */}
                <Card>
                  <CardHeader>
                    <CardTitle>Technische Implementierung: Consent Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm">
                        <code>{`// Travel Booking Consent Manager
class TravelConsentManager {
  constructor() {
    this.consents = {
      essential: true, // Immer aktiv
      analytics: false,
      marketing: false,
      personalization: false,
      locationServices: false
    };
  }

  async requestBookingConsent(travelData) {
    const requiredConsents = {
      passengerData: {
        purpose: 'Buchungsdurchführung',
        legalBasis: 'Vertragserfüllung',
        retention: '10 Jahre (Steuerrecht)',
        required: true
      },
      paymentData: {
        purpose: 'Zahlungsabwicklung',
        legalBasis: 'Vertragserfüllung',
        retention: 'PCI DSS konform',
        required: true
      },
      travelPreferences: {
        purpose: 'Personalisierung',
        legalBasis: 'Berechtigtes Interesse',
        retention: '2 Jahre',
        required: false
      },
      locationTracking: {
        purpose: 'Reiseassistenz',
        legalBasis: 'Einwilligung',
        retention: 'Reisedauer + 30 Tage',
        required: false
      }
    };

    return await this.showConsentDialog(requiredConsents);
  }

  async handleCrossBorderTransfer(destination) {
    const adequacyCountries = ['UK', 'CH', 'IL', 'NZ', 'JP'];
    
    if (!adequacyCountries.includes(destination)) {
      // SCCs erforderlich
      return {
        transferMechanism: 'Standard Contractual Clauses',
        additionalSafeguards: this.getTransferSafeguards(destination),
        tia: await this.performTransferImpactAssessment(destination)
      };
    }
    
    return { transferMechanism: 'Adequacy Decision' };
  }
}`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Location Tracking Section */}
            <section id="standortverfolgung" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-4">Location Tracking & Privacy</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Standortbasierte Services sind essentiell für moderne Travel Apps, erfordern aber besondere Sorgfalt beim Datenschutz. Vom Check-in bis zu lokalen Empfehlungen müssen Nutzer die volle Kontrolle behalten.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="border-2 border-teal-200 dark:border-teal-800">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-teal-600" />
                        Location Services Compliance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
                          <h4 className="font-semibold text-red-700 dark:text-red-300 mb-2">
                            ⚠️ Kritische Anforderungen
                          </h4>
                          <ul className="space-y-1 text-sm">
                            <li>• Explizite Einwilligung für Standortzugriff</li>
                            <li>• Granulare Kontrolle (immer/nur bei Nutzung/nie)</li>
                            <li>• Transparenz über Datennutzung</li>
                            <li>• Opt-out jederzeit möglich</li>
                          </ul>
                        </div>

                        <div className="space-y-3">
                          <h4 className="font-semibold">Erlaubte Verwendungszwecke</h4>
                          {[
                            { use: 'Hotel Check-in', allowed: true },
                            { use: 'Lokale Empfehlungen', allowed: true },
                            { use: 'Notfall-Assistance', allowed: true },
                            { use: 'Bewegungsprofile erstellen', allowed: false },
                            { use: 'Verkauf an Dritte', allowed: false }
                          ].map((item, i) => (
                            <div key={i} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-900 rounded">
                              <span className="text-sm">{item.use}</span>
                              {item.allowed ? (
                                <CheckCircle className="h-5 w-5 text-green-600" />
                              ) : (
                                <AlertTriangle className="h-5 w-5 text-red-600" />
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Privacy-by-Design Implementation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-sm">
                          <code>{`// Privacy-First Location Service
class PrivacyLocationService {
  async requestLocation(purpose) {
    // Prüfe Zweckbindung
    const allowedPurposes = [
      'hotel_checkin',
      'emergency_assistance',
      'local_recommendations'
    ];
    
    if (!allowedPurposes.includes(purpose)) {
      throw new Error('Invalid purpose');
    }
    
    // Temporäre Genauigkeit
    const accuracy = {
      hotel_checkin: 'precise', // 10m
      emergency_assistance: 'precise',
      local_recommendations: 'coarse' // 1km
    };
    
    // Automatisches Löschen
    const retention = {
      hotel_checkin: '24h',
      emergency_assistance: '7d',
      local_recommendations: '0' // Nicht speichern
    };
    
    return {
      location: await this.getLocation(accuracy[purpose]),
      deleteAfter: retention[purpose]
    };
  }
}`}</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </section>

            {/* Payment Compliance Section */}
            <section id="zahlungs-compliance" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-4">Payment Compliance & PCI DSS</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Zahlungsdaten unterliegen besonders strengen Anforderungen. Die Kombination aus DSGVO und PCI DSS erfordert höchste Sicherheitsstandards.
                </p>

                <Card className="bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-6 w-6 text-teal-600" />
                      Payment Data Protection Matrix
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        {
                          title: 'Tokenization',
                          description: 'Ersetzen Sie Kartennummern durch sichere Tokens',
                          implementation: '99%',
                          icon: Lock
                        },
                        {
                          title: 'Encryption',
                          description: 'End-to-End Verschlüsselung aller Zahlungsdaten',
                          implementation: '100%',
                          icon: Shield
                        },
                        {
                          title: 'Scope Reduction',
                          description: 'Minimierung der PCI DSS Compliance-Anforderungen',
                          implementation: '95%',
                          icon: Database
                        }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.05 }}
                          className="bg-white dark:bg-gray-900 rounded-lg p-4"
                        >
                          <item.icon className="h-8 w-8 text-teal-600 mb-2" />
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            {item.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm">Implementiert</span>
                            <span className="font-bold text-teal-600">{item.implementation}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

            {/* Cross-Border Data Section */}
            <section id="grenzueberschreitende-daten" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-4">Cross-Border Data Transfers</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Internationale Reisebuchungen erfordern oft Datentransfers in Drittländer. Nach Schrems II müssen diese Transfers besonders sorgfältig geprüft werden.
                </p>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Globe className="h-6 w-6 text-orange-600" />
                    Transfer Impact Assessment (TIA) Framework
                  </h3>
                  
                  <div className="space-y-4">
                    {[
                      {
                        country: 'USA',
                        mechanism: 'Data Privacy Framework',
                        risk: 'Mittel',
                        additionalMeasures: ['Verschlüsselung', 'Pseudonymisierung', 'Access Controls']
                      },
                      {
                        country: 'China',
                        mechanism: 'Standard Contractual Clauses',
                        risk: 'Hoch',
                        additionalMeasures: ['Verschlüsselung', 'Schlüsselverwaltung in EU', 'Minimale Daten']
                      },
                      {
                        country: 'Indien',
                        mechanism: 'Standard Contractual Clauses',
                        risk: 'Mittel',
                        additionalMeasures: ['Verschlüsselung', 'Audit Rights', 'Data Localization']
                      },
                      {
                        country: 'Schweiz',
                        mechanism: 'Adequacy Decision',
                        risk: 'Niedrig',
                        additionalMeasures: ['Standard Security']
                      }
                    ].map((transfer, index) => (
                      <div key={index} className="bg-white/80 dark:bg-gray-900/80 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Building className="h-5 w-5 text-gray-600" />
                            <h4 className="font-semibold">{transfer.country}</h4>
                          </div>
                          <Badge variant={
                            transfer.risk === 'Hoch' ? 'destructive' : 
                            transfer.risk === 'Mittel' ? 'warning' : 'success'
                          }>
                            {transfer.risk} Risiko
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Transfer Mechanism: <span className="font-medium">{transfer.mechanism}</span>
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {transfer.additionalMeasures.map((measure, i) => (
                            <span key={i} className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                              {measure}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Reviews Section */}
            <section id="bewertungen" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-4">Bewertungen & User Generated Content</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Kundenbewertungen sind essentiell für Travel Platforms, bergen aber datenschutzrechtliche Risiken. Vom Fake-Review-Management bis zur Moderation müssen klare Prozesse etabliert werden.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        Review Compliance Checklist
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { id: 'review-1', text: 'Verifizierung echter Buchungen', critical: true },
                          { id: 'review-2', text: 'Anonymisierung persönlicher Daten', critical: true },
                          { id: 'review-3', text: 'Moderation sensibler Inhalte', critical: false },
                          { id: 'review-4', text: 'Löschrecht für Reviewer', critical: true },
                          { id: 'review-5', text: 'Transparenz bei Bewertungsalgorithmen', critical: false },
                          { id: 'review-6', text: 'Schutz vor Fake Reviews', critical: false }
                        ].map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => toggleCheckedItem(item.id)}
                          >
                            {checkedItems.has(item.id) ? (
                              <CheckSquare className="h-5 w-5 text-green-600" />
                            ) : (
                              <Square className="h-5 w-5 text-gray-400" />
                            )}
                            <span className={cn(
                              "flex-1",
                              checkedItems.has(item.id) && "line-through text-gray-500"
                            )}>
                              {item.text}
                            </span>
                            {item.critical && (
                              <Badge variant="destructive" className="text-xs">Kritisch</Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Review Processing Pipeline</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { step: 'Eingang', action: 'Booking Verification', icon: UserCheck },
                          { step: 'Analyse', action: 'PII Detection & Removal', icon: Shield },
                          { step: 'Moderation', action: 'Content Compliance Check', icon: AlertTriangle },
                          { step: 'Publishing', action: 'Anonymization if needed', icon: Lock },
                          { step: 'Monitoring', action: 'Ongoing Compliance', icon: Activity }
                        ].map((step, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                            <step.icon className="h-5 w-5 text-teal-600" />
                            <div className="flex-1">
                              <div className="font-medium text-sm">{step.step}</div>
                              <div className="text-xs text-gray-600 dark:text-gray-400">{step.action}</div>
                            </div>
                            <ChevronRight className="h-4 w-4 text-gray-400" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </section>

            {/* Implementation Section */}
            <section id="implementierung" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-4">Technische Implementierung</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Eine robuste technische Architektur ist die Basis für nachhaltige Compliance. Hier zeigen wir Best Practices für Travel Tech Platforms.
                </p>

                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Privacy-First Architecture für Travel Platforms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm">
                        <code>{`// Travel Platform Privacy Architecture
import { DataProtectionService } from '@travel/privacy';

class TravelPlatformPrivacy {
  constructor() {
    this.dataCategories = {
      booking: {
        fields: ['name', 'email', 'phone', 'passport'],
        retention: '10 years', // Tax law
        encryption: 'AES-256-GCM',
        access: ['booking-service', 'customer-service']
      },
      payment: {
        fields: ['card_token', 'billing_address'],
        retention: 'PCI DSS compliant',
        encryption: 'RSA-4096 + AES-256',
        access: ['payment-service']
      },
      location: {
        fields: ['coordinates', 'timestamp'],
        retention: '30 days',
        encryption: 'AES-256-GCM',
        access: ['location-service'],
        anonymization: true
      },
      preferences: {
        fields: ['seat_pref', 'meal_pref', 'hotel_pref'],
        retention: '2 years',
        encryption: 'AES-256-GCM',
        access: ['recommendation-service']
      }
    };
  }

  async processBooking(bookingData) {
    // 1. Data Minimization
    const minimalData = this.minimizeData(bookingData);
    
    // 2. Purpose Validation
    const purposes = await this.validatePurposes(minimalData);
    
    // 3. Consent Check
    const consents = await this.checkConsents(purposes);
    
    // 4. Encryption
    const encrypted = await this.encryptSensitiveData(minimalData);
    
    // 5. Audit Log
    await this.logDataProcessing({
      action: 'booking_created',
      dataCategories: Object.keys(minimalData),
      purposes: purposes,
      timestamp: new Date().toISOString()
    });
    
    return encrypted;
  }

  async handleDataRequest(userId, requestType) {
    switch(requestType) {
      case 'access':
        return await this.exportUserData(userId);
      case 'deletion':
        return await this.deleteUserData(userId);
      case 'portability':
        return await this.exportPortableData(userId);
      case 'rectification':
        return await this.updateUserData(userId);
    }
  }

  async performPrivacyImpactAssessment() {
    return {
      dataFlows: this.mapDataFlows(),
      risks: this.identifyRisks(),
      mitigations: this.proposeMitigations(),
      residualRisk: this.calculateResidualRisk()
    };
  }
}`}</code>
                      </pre>
                    </div>
                  </CardContent>
                </Card>

                {/* Implementation Roadmap */}
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-4">Implementation Roadmap</h3>
                  <div className="space-y-4">
                    {[
                      {
                        phase: 'Phase 1: Assessment',
                        duration: '2-3 Wochen',
                        tasks: ['Data Mapping', 'Risk Assessment', 'Gap Analysis'],
                        completion: 100
                      },
                      {
                        phase: 'Phase 2: Design',
                        duration: '3-4 Wochen',
                        tasks: ['Privacy Architecture', 'Consent Flows', 'Security Controls'],
                        completion: 85
                      },
                      {
                        phase: 'Phase 3: Implementation',
                        duration: '6-8 Wochen',
                        tasks: ['Core Privacy Features', 'Consent Management', 'Data Protection'],
                        completion: 60
                      },
                      {
                        phase: 'Phase 4: Testing',
                        duration: '2-3 Wochen',
                        tasks: ['Security Testing', 'Compliance Validation', 'User Acceptance'],
                        completion: 20
                      },
                      {
                        phase: 'Phase 5: Go-Live',
                        duration: '1-2 Wochen',
                        tasks: ['Deployment', 'Monitoring', 'Documentation'],
                        completion: 0
                      }
                    ].map((phase, index) => (
                      <div key={index} className="bg-white/80 dark:bg-gray-900/80 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{phase.phase}</h4>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{phase.duration}</span>
                        </div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {phase.tasks.map((task, i) => (
                            <span key={i} className="text-xs bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-2 py-1 rounded">
                              {task}
                            </span>
                          ))}
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Fortschritt</span>
                            <span className="font-medium">{phase.completion}%</span>
                          </div>
                          <Progress value={phase.completion} className="h-2" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </section>

            {/* Scenarios Section */}
            <section id="praxis-szenarien" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-4">Praxis-Szenarien</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Reale Compliance-Herausforderungen aus der Travel-Branche und wie Sie diese DSGVO-konform lösen.
                </p>

                <div className="space-y-6">
                  {[
                    {
                      id: 'scenario-1',
                      title: 'Multi-Stop Reise mit verschiedenen Airlines',
                      context: 'Ein Kunde bucht eine komplexe Reise mit 5 Stopps über 3 Airlines und 4 Hotels.',
                      challenge: 'Datenweitergabe an multiple Partner in verschiedenen Ländern',
                      solution: 'Data Processing Agreements mit allen Partnern, minimale Datenweitergabe, zentrale Consent-Verwaltung',
                      risk: 'Hoch'
                    },
                    {
                      id: 'scenario-2',
                      title: 'Reisestornierung wegen Pandemie',
                      context: 'Massenhafte Stornierungen erfordern Datenspeicherung für Erstattungen.',
                      challenge: 'Verlängerte Aufbewahrung vs. Löschpflichten',
                      solution: 'Dokumentierte Rechtsgrundlage für verlängerte Speicherung, transparente Kommunikation, automatisches Löschen nach Erstattung',
                      risk: 'Mittel'
                    },
                    {
                      id: 'scenario-3',
                      title: 'Minderjährige Alleinreisende',
                      context: 'Buchung und Tracking für unbegleitete Minderjährige.',
                      challenge: 'Besonderer Schutz für Kinderdaten, Einwilligung der Eltern',
                      solution: 'Verifizierte Eltern-Einwilligung, minimale Datenerhebung, verschärfte Sicherheitsmaßnahmen, begrenzte Datenweitergabe',
                      risk: 'Kritisch'
                    },
                    {
                      id: 'scenario-4',
                      title: 'Loyalty Program mit Partnern',
                      context: 'Meilenprogramm über Airlines, Hotels und Mietwagen.',
                      challenge: 'Profilbildung über multiple Services',
                      solution: 'Explizite Einwilligung für Profiling, Opt-out Optionen, Datentrennung zwischen Services, Purpose Limitation',
                      risk: 'Hoch'
                    }
                  ].map((scenario) => (
                    <Card key={scenario.id} className="border-l-4 border-teal-500">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="flex items-center gap-2">
                            <Activity className="h-5 w-5 text-teal-600" />
                            {scenario.title}
                          </CardTitle>
                          <Badge variant={
                            scenario.risk === 'Kritisch' ? 'destructive' : 
                            scenario.risk === 'Hoch' ? 'warning' : 'secondary'
                          }>
                            {scenario.risk} Risiko
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-semibold text-sm mb-1">📋 Kontext</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{scenario.context}</p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-sm mb-1">⚡ Herausforderung</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{scenario.challenge}</p>
                          </div>

                          <button
                            onClick={() => toggleScenario(scenario.id)}
                            className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm"
                          >
                            {expandedScenarios.has(scenario.id) ? 'Lösung ausblenden' : 'Lösung anzeigen'}
                            <ChevronRight className={cn(
                              "h-4 w-4 transition-transform",
                              expandedScenarios.has(scenario.id) && "rotate-90"
                            )} />
                          </button>

                          {expandedScenarios.has(scenario.id) && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="bg-teal-50 dark:bg-teal-950/20 rounded-lg p-4 mt-3"
                            >
                              <h4 className="font-semibold text-sm mb-2">✅ DSGVO-konforme Lösung</h4>
                              <p className="text-sm">{scenario.solution}</p>
                            </motion.div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </section>

            {/* Checklist Section */}
            <section id="checkliste" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-4">Travel Compliance Checkliste</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Überprüfen Sie Ihre Travel Platform auf vollständige DSGVO-Compliance mit unserer umfassenden Checkliste.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Rechtliche Anforderungen</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { id: 'legal-1', text: 'Datenschutzerklärung für alle Touchpoints' },
                          { id: 'legal-2', text: 'Cookie-Banner mit Granular Consent' },
                          { id: 'legal-3', text: 'Verarbeitungsverzeichnis aktuell' },
                          { id: 'legal-4', text: 'DSFAs für Hochrisiko-Verarbeitung' },
                          { id: 'legal-5', text: 'Auftragsverarbeitungsverträge mit Partnern' },
                          { id: 'legal-6', text: 'Datenschutzbeauftragter benannt' }
                        ].map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => toggleCheckedItem(item.id)}
                          >
                            {checkedItems.has(item.id) ? (
                              <CheckSquare className="h-5 w-5 text-green-600" />
                            ) : (
                              <Square className="h-5 w-5 text-gray-400" />
                            )}
                            <span className={cn(
                              checkedItems.has(item.id) && "line-through text-gray-500"
                            )}>
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Technische Maßnahmen</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {[
                          { id: 'tech-1', text: 'End-to-End Verschlüsselung implementiert' },
                          { id: 'tech-2', text: 'Access Controls und Logging aktiv' },
                          { id: 'tech-3', text: 'Automatische Datenlöschung konfiguriert' },
                          { id: 'tech-4', text: 'Privacy-by-Design Architecture' },
                          { id: 'tech-5', text: 'Incident Response Plan etabliert' },
                          { id: 'tech-6', text: 'Regular Security Audits' }
                        ].map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                            onClick={() => toggleCheckedItem(item.id)}
                          >
                            {checkedItems.has(item.id) ? (
                              <CheckSquare className="h-5 w-5 text-green-600" />
                            ) : (
                              <Square className="h-5 w-5 text-gray-400" />
                            )}
                            <span className={cn(
                              checkedItems.has(item.id) && "line-through text-gray-500"
                            )}>
                              {item.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">Compliance Status</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {checkedItems.size} von 12 Punkten erfüllt
                      </p>
                    </div>
                    <div className="text-3xl font-bold text-teal-600">
                      {Math.round((checkedItems.size / 12) * 100)}%
                    </div>
                  </div>
                  <Progress value={(checkedItems.size / 12) * 100} className="mt-2" />
                </div>
              </motion.div>
            </section>

            {/* Resources Section */}
            <section id="ressourcen" className="space-y-8 scroll-mt-32">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-bold mb-4">Ressourcen & Tools</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                  Praktische Ressourcen und Tools für Ihre Travel Compliance Journey.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <FileText className="h-5 w-5 text-teal-600" />
                        Travel DSGVO Guide
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Umfassender Leitfaden für Datenschutz in der Reisebranche mit praktischen Beispielen.
                      </p>
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Download PDF
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-teal-600" />
                        Consent Templates
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Vorgefertigte Consent-Flows und Datenschutzerklärungen für Travel Platforms.
                      </p>
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Templates ansehen
                      </Button>
                    </CardContent>
                  </Card>

                  <Card className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Database className="h-5 w-5 text-teal-600" />
                        Privacy Tools
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        Technische Tools für Privacy-by-Design Implementation in Travel Tech.
                      </p>
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        GitHub Repository
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            </section>

            {/* CTA Section */}
            <section className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white">
                  <CardContent className="p-8 md:p-12 text-center">
                    <Plane className="h-16 w-16 mx-auto mb-6 text-white/90" />
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Starten Sie Ihre Travel Compliance Journey
                    </h2>
                    <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                      Lassen Sie uns gemeinsam Ihre Travel Platform DSGVO-konform gestalten. Von Booking bis Review Management.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button 
                        size="lg" 
                        className="bg-white text-teal-600 hover:bg-gray-100"
                      >
                        <Calendar className="mr-2 h-5 w-5" />
                        Travel Compliance Demo buchen
                      </Button>
                      <Button 
                        size="lg" 
                        variant="outline" 
                        className="text-white border-white hover:bg-white/10"
                      >
                        <FileText className="mr-2 h-5 w-5" />
                        Whitepaper herunterladen
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </section>

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TravelComplianceGuide;