import React, { useRef, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Home, Shield, AlertTriangle, CheckCircle2, ArrowRight, 
  Users, FileText, Camera, Key, TrendingUp, Scale, ClipboardCheck,
  Euro, Calendar, Lock, Mail, AlertOctagon, Building, Database,
  BookOpen, Smartphone, Cloud, Video, Clock, Download, ExternalLink,
  MessageSquare, HelpCircle, Award, ChevronRight, Info, XCircle,
  FileCode, Settings, Laptop, UserCheck, Brain, Rocket, Target
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const DsgvoVermieter: React.FC = () => {
  // SEO Meta-Tags - optimiert gemäß SEO-Checkliste
  const pageTitle = "DSGVO Vermieter – Datenschutz Immobilien Guide 2024";
  const pageDescription = "DSGVO für Vermieter: ✓ Mieterdaten sicher verwalten ✓ Datenschutzerklärung ✓ TOM-Checklisten ✓ Bußgelder vermeiden. Jetzt DSGVO-konform vermieten!";
  // Mobile font settings
  const baseFontSize = typeof window !== 'undefined' && window.innerWidth < 640 ? 16 : 16;
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<string>('ueberblick');
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Navigation Items mit deutschen Hash-IDs
  const navigationItems = [
    { id: 'ueberblick', label: 'Überblick', icon: Home },
    { id: 'rechtlicher-rahmen', label: 'Rechtlicher Rahmen', icon: Scale },
    { id: 'datenverarbeitung', label: 'Datenverarbeitung', icon: Database },
    { id: 'technische-massnahmen', label: 'TOM für Vermieter', icon: Shield },
    { id: 'digitale-tools', label: 'Digitale Tools', icon: Laptop },
    { id: 'herausforderungen', label: 'Herausforderungen', icon: AlertTriangle },
    { id: 'vorlagen', label: 'Vorlagen', icon: FileText },
    { id: 'datenpannen', label: 'Datenpannen', icon: AlertOctagon },
    { id: 'bussgeld', label: 'Bußgeldrisiken', icon: Euro },
    { id: 'aktionsplan', label: '10-Punkte-Plan', icon: Target },
    { id: 'best-practices', label: 'Best Practices', icon: Award },
    { id: 'zukunft', label: 'Zukunftstrends', icon: TrendingUp }
  ];

  // Scroll to section with offset and update URL
  const scrollToSection = (sectionId: string) => {
    // Update URL with hash
    window.history.pushState(null, '', `#${sectionId}`);
    
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Offset for sticky navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };
  
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
      
      const scrollPosition = window.scrollY + 150; // Offset for sticky nav
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          // Update URL hash automatically when scrolling
          if (window.location.hash.slice(1) !== section.id) {
            window.history.replaceState(null, '', `#${section.id}`);
          }
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="dsgvo vermieter, datenschutz vermieter, dsgvo immobilien, dsgvo hausverwaltung, dsgvo compliance vermieter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://www.example.com/wissen/branchen/dsgvo-vermieter" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://www.example.com/wissen/branchen/dsgvo-vermieter" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": pageTitle,
            "description": pageDescription,
            "author": {
              "@type": "Organization",
              "name": "DSGVO Compliance Team"
            },
            "datePublished": "2024-01-01",
            "dateModified": new Date().toISOString()
          })}
        </script>
      </Helmet>
      <div ref={containerRef} className="min-h-screen bg-background">
        <Header />
      
      <main className="relative overflow-hidden">
        {/* Hero Section */}
      <motion.section 
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-16"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-background to-purple-900/20" />
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="mb-4 px-4 py-1" variant="secondary">
              DSGVO für Vermieter & Hausverwaltungen
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                DSGVO für Vermieter
              </span>
              <br />
              <span className="text-3xl md:text-4xl">
                Der komplette Praxisleitfaden 2025
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Die Datenschutz-Grundverordnung hat die Immobilienbranche fundamental verändert. 
              Ein Verstoß kann bis zu 20 Millionen Euro oder 4% des Jahresumsatzes kosten. Erfahren Sie mehr über <Link to="/wissen/dsgvo-artikel" className="text-indigo-600 dark:text-indigo-400 hover:underline">DSGVO-Regelungen</Link>.
            </p>

            <Button 
              size="lg" 
              className="bg-gradient-to-r from-indigo-600 to-purple-600 mb-12 min-h-[48px] min-w-[48px]"
              onClick={() => scrollToSection('ueberblick')}
            >
              Leitfaden starten
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                { icon: AlertOctagon, label: 'Compliance', value: '87%', desc: 'nicht konform 2024' },
                { icon: Euro, label: 'Bußgeld Ø', value: '42.000€', desc: 'in Immobilienbranche' },
                { icon: Clock, label: 'Auskunft', value: '15 Min', desc: 'Bearbeitungszeit' },
                { icon: TrendingUp, label: 'Beschwerden', value: '+300%', desc: 'seit 2018' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="bg-card/50 backdrop-blur-sm rounded-lg p-4 border"
                >
                  <stat.icon className="h-8 w-8 text-indigo-500 mb-2 mx-auto" />
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Inhaltsverzeichnis für Mobile und Desktop */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <nav aria-label="Inhaltsverzeichnis" className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-indigo-600" />
                Inhaltsverzeichnis
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left tap-target"
                  >
                    <item.icon className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </section>

      {/* Sticky Navigation mit scroll-margin-top */}
      <style>
        {`
          h2[id], h3[id], section[id] {
            scroll-margin-top: 96px;
          }
        `}
      </style>
      <nav className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm" aria-label="Inhaltsverzeichnis">
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-start md:justify-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {navigationItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setActiveSection(item.id);
                  }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium",
                    "transition-all duration-200 whitespace-nowrap",
                    isActive
                      ? "bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-950/50 dark:to-purple-950/50 text-indigo-700 dark:text-indigo-300 shadow-sm border border-indigo-200 dark:border-indigo-800"
                      : "hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-50 dark:hover:from-gray-800 dark:hover:to-gray-800/50 text-gray-600 dark:text-gray-400 border border-transparent hover:border-gray-200 dark:hover:border-gray-700"
                  )}
                >
                  <item.icon className={cn(
                    "h-4 w-4",
                    isActive ? "text-indigo-600 dark:text-indigo-400" : ""
                  )} />
                  <span className="hidden sm:inline">{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 space-y-24">
        {/* Mobile-optimierte Inhaltsverzeichnis-Box */}
        <div className="lg:hidden mb-8">
          <Card className="border-indigo-200 dark:border-indigo-800">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-4 flex items-center justify-between">
                <span>Schnellnavigation</span>
                <ChevronRight className="h-5 w-5 rotate-90" />
              </h3>
              <nav aria-label="Inhaltsverzeichnis Mobil">
                <ul className="space-y-2">
                  {navigationItems.map((item) => (
                    <li key={item.id}>
                      <button
                        onClick={() => scrollToSection(item.id)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-950/30 flex items-center gap-2 text-sm"
                      >
                        <item.icon className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                        {item.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </Card>
        </div>
        {/* Warum ist Datenschutz kritisch Section */}
        <section id="ueberblick" className="scroll-mt-32">
          <div className="max-w-4xl mx-auto">
            <h2 id="warum-datenschutz-kritisch" className="text-4xl font-bold mb-8 text-center">
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Warum ist Datenschutz für Vermieter so kritisch?
              </span>
            </h2>
            
            <Card className="p-8 mb-8 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border-amber-200 dark:border-amber-800">
              <h3 id="besonderheiten-branche" className="text-2xl font-bold mb-4 flex items-center gap-2">
                <AlertOctagon className="h-6 w-6 text-amber-600" />
                Die Besonderheiten Ihrer Branche
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: Database,
                    title: 'Hochsensible Daten',
                    items: ['Einkommensnachweise', 'Schufa-Auskünfte', 'Bankdaten', 'Gesundheitsdaten']
                  },
                  {
                    icon: Calendar,
                    title: 'Lange Speicherfristen',
                    items: ['Mietverträge', 'Nebenkostenabrechnungen', 'Zahlungsbelege', 'Korrespondenz']
                  },
                  {
                    icon: Users,
                    title: 'Viele Beteiligte',
                    items: ['Mieter', 'Interessenten', 'Handwerker', 'Behörden']
                  },
                  {
                    icon: Smartphone,
                    title: 'Digitale Transformation',
                    items: ['Online-Bewerbungen', 'Cloud-Speicher', 'Verwaltungssoftware', 'Smart Home']
                  }
                ].map((item, index) => (
                  <div key={index} className="space-y-3">
                    <div className="flex items-center gap-2">
                      <item.icon className="h-5 w-5 text-amber-600" />
                      <div className="font-semibold text-lg">{item.title}</div>
                    </div>
                    <ul className="space-y-1 ml-7">
                      {item.items.map((point, idx) => (
                        <li key={idx} className="text-sm flex items-start gap-2">
                          <ChevronRight className="h-4 w-4 text-amber-500 mt-0.5 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Rechtlicher Rahmen Section */}
        <section id="rechtlicher-rahmen" className="max-w-6xl mx-auto scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8">Rechtlicher Rahmen: Was Sie wissen müssen</h2>
          
          {/* DSGVO Artikel Tabelle */}
          <Card className="p-6 mb-8 overflow-x-auto">
            <h3 className="text-2xl font-semibold mb-6">Relevante DSGVO-Artikel für Vermieter</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-3">Artikel</th>
                    <th className="text-left p-3">Inhalt</th>
                    <th className="text-left p-3">Bedeutung für Sie</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { artikel: 'Art. 6', inhalt: 'Rechtmäßigkeit der Verarbeitung', bedeutung: <>Basis für jede Datenverarbeitung. Mehr zu <Link to="/wissen/dsgvo-artikel" className="text-indigo-600 dark:text-indigo-400 hover:underline">Art. 6 DSGVO</Link></> },
                    { artikel: 'Art. 9', inhalt: 'Besondere Datenkategorien', bedeutung: <>Gesundheitsdaten bei barrierefreiem Wohnen. Siehe <Link to="/wissen/dsgvo-artikel" className="text-indigo-600 dark:text-indigo-400 hover:underline">Art. 9 DSGVO</Link></> },
                    { artikel: 'Art. 13/14', inhalt: 'Informationspflichten', bedeutung: 'Transparenz bei Datenerhebung' },
                    { artikel: 'Art. 17', inhalt: 'Recht auf Löschung', bedeutung: 'Löschkonzept erforderlich' },
                    { artikel: 'Art. 32', inhalt: 'Sicherheit der Verarbeitung', bedeutung: 'Technische Schutzmaßnahmen' }
                  ].map((row, index) => (
                    <tr key={index} className="border-b hover:bg-muted/50">
                      <td className="p-3 font-medium">{row.artikel}</td>
                      <td className="p-3">{row.inhalt}</td>
                      <td className="p-3">{row.bedeutung}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Rechtliche Grundlagen */}
          <Card className="p-6 mb-8">
            <h3 id="rechtliche-grundlagen-daten" className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Scale className="h-6 w-6 text-indigo-600" />
              Rechtliche Grundlagen für Datenverarbeitung
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Vertragserfüllung',
                  artikel: 'Art. 6 Abs. 1 lit. b DSGVO',
                  desc: 'Hauptgrundlage für Mietvertragsdaten',
                  icon: FileText
                },
                {
                  title: 'Berechtigtes Interesse',
                  artikel: 'Art. 6 Abs. 1 lit. f DSGVO',
                  desc: 'Bonitätsprüfung, Videoüberwachung',
                  icon: Shield
                },
                {
                  title: 'Rechtliche Verpflichtung',
                  artikel: 'Art. 6 Abs. 1 lit. c DSGVO',
                  desc: 'Aufbewahrung für Finanzbehörden',
                  icon: Building
                },
                {
                  title: 'Einwilligung',
                  artikel: 'Art. 6 Abs. 1 lit. a DSGVO',
                  desc: 'Zusätzliche Services, Newsletter',
                  icon: UserCheck
                }
              ].map((item, index) => (
                <Card key={index} className="p-4 border bg-muted/20">
                  <div className="flex items-start gap-3">
                    <item.icon className="h-5 w-5 text-indigo-600 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{item.artikel}</p>
                      <p className="text-sm">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </section>

        {/* Datenverarbeitung im Vermietungsalltag */}
        <section id="datenverarbeitung" className="max-w-6xl mx-auto scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8">Typische Datenverarbeitungen im Vermietungsalltag</h2>
          
          {/* Bewerbungsphase */}
          <Card className="p-6 mb-6">
            <h3 className="text-2xl font-semibold mb-6">1. Bewerbungsphase</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-green-600">
                  <CheckCircle2 className="h-5 w-5" />
                  Erlaubte Daten
                </h4>
                <ul className="space-y-2">
                  {[
                    'Name, Anschrift, Geburtsdatum',
                    'Beruf und Arbeitgeber',
                    'Einkommensnachweise (letzte 3 Monate)',
                    'Schufa-Auskunft (Mieter-Bonitätsauskunft)',
                    'Mietschuldenfreiheitsbescheinigung'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4 flex items-center gap-2 text-red-600">
                  <XCircle className="h-5 w-5" />
                  Verbotene Daten
                </h4>
                <ul className="space-y-2">
                  {[
                    'Religionszugehörigkeit',
                    'Sexuelle Orientierung',
                    'Parteizugehörigkeit',
                    'Gesundheitsdaten (Ausnahme: barrierefreies Wohnen)',
                    'Schwangerschaft'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <XCircle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>

          {/* Mietverhältnis */}
          <Card className="p-6 mb-6">
            <h3 className="text-2xl font-semibold mb-6">2. Mietverhältnis</h3>
            <div className="bg-muted/30 rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-3">Notwendige Dokumentation:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Mietvertrag und Zusatzvereinbarungen',
                  'Übergabeprotokolle',
                  'Nebenkostenabrechnungen',
                  'Korrespondenz zu Mängeln',
                  'Zahlungseingänge',
                  'Mahnungen (falls vorhanden)'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-indigo-500" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Aufbewahrungsfristen */}
          <Card className="p-6 mb-6">
            <h3 className="text-2xl font-semibold mb-6">3. Nach Vertragsende - Aufbewahrungsfristen</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-3">Dokument</th>
                    <th className="text-left p-3">Aufbewahrungsfrist</th>
                    <th className="text-left p-3">Rechtsgrundlage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { dok: 'Mietvertrag', frist: '3 Jahre nach Ende', grund: 'BGB Verjährung' },
                    { dok: 'Nebenkostenabrechnungen', frist: '10 Jahre', grund: 'Steuerrecht' },
                    { dok: 'Zahlungsbelege', frist: '10 Jahre', grund: 'AO, HGB' },
                    { dok: 'Bewerbungsunterlagen (abgelehnt)', frist: '6 Monate', grund: 'AGG' }
                  ].map((row, index) => (
                    <tr key={index} className="border-b hover:bg-muted/30">
                      <td className="p-3">{row.dok}</td>
                      <td className="p-3 font-medium">{row.frist}</td>
                      <td className="p-3 text-muted-foreground">{row.grund}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </section>

        {/* Technische und organisatorische Maßnahmen */}
        <section id="technische-massnahmen" className="max-w-6xl mx-auto scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8">Technische und organisatorische Maßnahmen (TOMs)</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Technische Sicherheit */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Lock className="h-5 w-5 text-indigo-600" />
                Technische Sicherheit
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Zugangskontrolle:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Sichere Passwörter (min. 12 Zeichen)</li>
                    <li>• 2-Faktor-Authentifizierung</li>
                    <li>• Regelmäßige Passwortänderungen</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Zugriffskontrolle:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• Berechtigungskonzept</li>
                    <li>• Rollenbasierte Zugriffe</li>
                    <li>• Protokollierung von Zugriffen</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Verschlüsselung:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground ml-4">
                    <li>• E-Mail-Verschlüsselung für sensible Daten</li>
                    <li>• Verschlüsselte Datenbanken</li>
                    <li>• Sichere Cloud-Speicher</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Organisatorische Maßnahmen */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Settings className="h-5 w-5 text-indigo-600" />
                Organisatorische Maßnahmen
              </h3>
              <div className="space-y-3">
                {[
                  { text: 'Datenschutzbeauftragter (ab 20 Mitarbeitern)', done: false },
                  { text: 'Verarbeitungsverzeichnis führen', done: false },
                  { text: 'Mitarbeiterschulungen (jährlich)', done: false },
                  { text: 'Datenschutz-Folgenabschätzung', done: false },
                  { text: 'Auftragsverarbeitungsverträge', done: false },
                  { text: 'Löschkonzept implementiert', done: false }
                ].map((item, idx) => (
                  <label key={idx} className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 p-2 rounded">
                    <input type="checkbox" className="h-4 w-4 text-indigo-600" />
                    <span className="text-sm">{item.text}</span>
                  </label>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Digitale Tools und Datenschutz */}
        <section id="digitale-tools" className="max-w-6xl mx-auto scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8">Digitale Tools und Datenschutz</h2>
          
          <Card className="p-6 mb-6">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Laptop className="h-6 w-6 text-indigo-600" />
              Immobilienverwaltungssoftware
            </h3>
            <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 mb-4">
              <h4 className="font-semibold mb-3">Anforderungen an DSGVO-konforme Software:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { label: 'Serverstandort', value: 'Idealerweise in Deutschland/EU' },
                  { label: 'Zertifizierungen', value: 'ISO 27001, BSI-Grundschutz' },
                  { label: 'Auftragsverarbeitungsvertrag', value: 'Muss vorhanden sein' },
                  { label: 'Datentrennung', value: 'Mandantenfähigkeit' },
                  { label: 'Exportfunktion', value: 'Für Datenportabilität' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <ChevronRight className="h-4 w-4 text-indigo-600 mt-0.5" />
                    <div>
                      <span className="font-medium text-sm">{item.label}:</span>
                      <span className="text-sm text-muted-foreground ml-1">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
              <h4 className="font-semibold mb-3 flex items-center gap-2 text-red-600">
                <AlertOctagon className="h-5 w-5" />
                Vorsicht bei:
              </h4>
              <ul className="space-y-2">
                {[
                  'WhatsApp für Mieterkommunikation',
                  'Private E-Mail-Accounts',
                  'Unverschlüsselte Cloud-Speicher',
                  'Automatische Backups auf US-Server'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <XCircle className="h-4 w-4 text-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </section>

        {/* Besondere Herausforderungen */}
        <section id="herausforderungen" className="max-w-6xl mx-auto scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8">Besondere Herausforderungen</h2>
          
          {/* Videoüberwachung */}
          <Card className="p-6 mb-6">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Video className="h-6 w-6 text-indigo-600" />
              Videoüberwachung
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-green-700 dark:text-green-400">Zulässig wenn:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Berechtigtes Interesse überwiegt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Kennzeichnung vorhanden</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Nur öffentlich zugängliche Bereiche</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5" />
                    <span>Löschung nach 72 Stunden</span>
                  </li>
                </ul>
              </div>
              <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                <h4 className="font-semibold mb-3 text-red-700 dark:text-red-400">Verboten:</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5" />
                    <span>Überwachung von Mietwohnungen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5" />
                    <span>Dauerhafte Speicherung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5" />
                    <span>Verdeckte Kameras</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <XCircle className="h-4 w-4 text-red-600 mt-0.5" />
                    <span>Tonaufzeichnungen</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Wohnungsbesichtigungen */}
          <Card className="p-6 mb-6">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Home className="h-6 w-6 text-indigo-600" />
              Wohnungsbesichtigungen
            </h3>
            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Best Practices:</h4>
              <ul className="space-y-2">
                {[
                  'Interessentenbogen mit Datenschutzhinweis',
                  'Keine Kopien von Ausweisen anfertigen',
                  'Gruppentermine anonymisiert durchführen',
                  'Daten nach 6 Monaten löschen'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-blue-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </section>
        {/* Muster und Vorlagen */}
        <section id="vorlagen" className="max-w-6xl mx-auto scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8">Muster und Vorlagen</h2>
          
          {/* Datenschutzerklärung */}
          <Card className="p-6 mb-6">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-6 w-6 text-indigo-600" />
              Datenschutzerklärung für Mietinteressenten
            </h3>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 font-mono text-sm">
              <pre className="whitespace-pre-wrap">{`Information zur Datenverarbeitung gemäß Art. 13 DSGVO

1. Verantwortlicher:
   [Ihr Name/Firma]
   [Adresse]
   [Kontaktdaten]

2. Zweck der Datenverarbeitung:
   - Prüfung Ihrer Bewerbung
   - Bonitätsprüfung
   - Vertragsanbahnung

3. Rechtsgrundlage:
   Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung)

4. Speicherdauer:
   - Bei Vertragsabschluss: Dauer des Mietverhältnisses + gesetzliche Fristen
   - Bei Ablehnung: 6 Monate (AGG)

5. Ihre Rechte:
   - Auskunft (Art. 15 DSGVO)
   - Berichtigung (Art. 16 DSGVO)
   - Löschung (Art. 17 DSGVO)
   - Beschwerderecht bei Aufsichtsbehörde`}</pre>
            </div>
            <div className="mt-4 flex gap-2">
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Als Word herunterladen
              </Button>
              <Button variant="outline" size="sm">
                <FileCode className="h-4 w-4 mr-2" />
                Als PDF speichern
              </Button>
            </div>
          </Card>

          {/* Einwilligung Schufa */}
          <Card className="p-6 mb-6">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <ClipboardCheck className="h-6 w-6 text-indigo-600" />
              Einwilligung Schufa-Auskunft
            </h3>
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 font-mono text-sm">
              <pre className="whitespace-pre-wrap">{`Einwilligungserklärung Bonitätsprüfung

Hiermit willige ich ein, dass [Vermieter] zum Zweck der Bonitätsprüfung
eine Schufa-Auskunft über mich einholt.

Diese Einwilligung erfolgt freiwillig und kann jederzeit widerrufen werden.
Ein Widerruf berührt nicht die Rechtmäßigkeit der bis dahin erfolgten
Verarbeitung.

_______________________     _______________________
Ort, Datum                  Unterschrift`}</pre>
            </div>
          </Card>
        </section>

        {/* Datenpannen */}
        <section id="datenpannen" className="max-w-6xl mx-auto scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8">Datenpannen richtig handhaben</h2>
          
          <Card className="p-6 mb-6">
            <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-amber-600" />
              Sofortmaßnahmen bei Datenverlust
            </h3>
            
            {/* Prozessdiagramm */}
            <div className="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-6 mb-6">
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Datenpanne erkannt', action: 'Dokumentieren Sie den Vorfall sofort' },
                  { step: '2', title: 'Risikobewertung', action: 'Prüfen Sie das Risiko für Betroffene' },
                  { step: '3', title: 'Bei hohem Risiko', action: 'Binnen 72h an Behörde melden' },
                  { step: '4', title: 'Betroffene informieren', action: 'Unverzüglich bei hohem Risiko' },
                  { step: '5', title: 'Maßnahmen ergreifen', action: 'Schaden begrenzen und Wiederholung verhindern' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Meldepflichtige Vorfälle:</h4>
              <ul className="space-y-2">
                {[
                  'Einbruch mit Aktendiebstahl',
                  'Hack der Verwaltungssoftware',
                  'Versehentlicher E-Mail-Verteiler',
                  'Verlust von USB-Stick mit Mieterdaten',
                  'Unrechtmäßige Datenweitergabe'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm">
                    <AlertOctagon className="h-4 w-4 text-amber-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </section>

        {/* Bußgeldrisiken */}
        <section id="bussgeld" className="max-w-6xl mx-auto scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8">Bußgeldrisiken und Vermeidung</h2>
          
          {/* Bußgeldtabelle */}
          <Card className="p-6 mb-6">
            <h3 className="text-2xl font-semibold mb-6">Häufige Bußgeldgründe</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b bg-muted/50">
                    <th className="text-left p-3">Verstoß</th>
                    <th className="text-left p-3">Bußgeldrahmen</th>
                    <th className="text-left p-3">Prävention</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { verstoss: 'Fehlende Datenschutzerklärung', rahmen: '5.000-50.000€', praevention: 'Vorlagen nutzen' },
                    { verstoss: 'Unrechtmäßige Videoüberwachung', rahmen: '10.000-100.000€', praevention: 'Rechtsberatung' },
                    { verstoss: 'Keine Löschung nach Fristende', rahmen: '5.000-30.000€', praevention: 'Löschkonzept' },
                    { verstoss: 'Auskunft verweigert', rahmen: '5.000-20.000€', praevention: 'Prozess etablieren' },
                    { verstoss: 'Datenpanne nicht gemeldet', rahmen: '10.000-200.000€', praevention: 'Notfallplan' }
                  ].map((row, index) => (
                    <tr key={index} className="border-b hover:bg-muted/30">
                      <td className="p-3">{row.verstoss}</td>
                      <td className="p-3 font-medium text-red-600">{row.rahmen}</td>
                      <td className="p-3 text-muted-foreground">{row.praevention}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>

          {/* Reale Bußgeldfälle */}
          <Card className="p-6 mb-6">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              Reale Bußgeldfälle aus der Immobilienbranche
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: 'Fall 1: Großvermieter (2023)',
                  verstoss: 'Videoüberwachung ohne Rechtsgrundlage',
                  bussgeld: '125.000€',
                  details: 'Kameras in Hausfluren ohne Hinweisschilder',
                  loesung: 'Rechtliche Prüfung, Kennzeichnung, Löschkonzept'
                },
                {
                  title: 'Fall 2: Hausverwaltung (2024)',
                  verstoss: 'Massenmail mit sichtbaren E-Mail-Adressen',
                  bussgeld: '15.000€',
                  details: 'CC statt BCC bei Mieterinformation',
                  loesung: 'BCC verwenden, Mitarbeiterschulung'
                },
                {
                  title: 'Fall 3: Immobilienmakler (2023)',
                  verstoss: 'Bewerberdaten zu lange gespeichert',
                  bussgeld: '35.000€',
                  details: 'Interessentendaten 3 Jahre aufbewahrt',
                  loesung: 'Automatische Löschung nach 6 Monaten'
                },
                {
                  title: 'Fall 4: Wohnungsgenossenschaft (2024)',
                  verstoss: 'Datenpanne nicht gemeldet',
                  bussgeld: '200.000€',
                  details: 'Hackerangriff erst nach 6 Wochen gemeldet',
                  loesung: 'Schnelle Meldekette, IT-Sicherheitskonzept'
                }
              ].map((fall, idx) => (
                <Card key={idx} className="p-4 bg-red-50 dark:bg-red-900/20 border-red-200">
                  <h4 className="font-semibold mb-2">{fall.title}</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>Verstoß:</strong> {fall.verstoss}</p>
                    <p className="text-red-600 font-semibold">Bußgeld: {fall.bussgeld}</p>
                    <p><strong>Details:</strong> {fall.details}</p>
                    <p className="text-green-600"><strong>Lösung:</strong> {fall.loesung}</p>
                  </div>
                </Card>
              ))}
            </div>
          </Card>
        </section>

        {/* 10-Punkte-Aktionsplan */}
        <section id="aktionsplan" className="max-w-6xl mx-auto scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8">10-Punkte-Aktionsplan für Vermieter</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Sofort umsetzen */}
            <Card className="p-6 border-green-200 dark:border-green-800">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-green-600">
                <Target className="h-5 w-5" />
                Sofort umsetzen
              </h3>
              <div className="space-y-3">
                {[
                  '1. Bestandsaufnahme: Welche Daten verarbeiten Sie?',
                  '2. Rechtsgrundlagen prüfen: Für jede Verarbeitung',
                  '3. Datenschutzerklärung: Erstellen und aushändigen',
                  '4. Verarbeitungsverzeichnis: Anlegen und pflegen',
                  '5. Technische Sicherheit: Passwörter, Verschlüsselung'
                ].map((item, idx) => (
                  <label key={idx} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="h-4 w-4 text-green-600 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </Card>

            {/* Binnen 30 Tagen */}
            <Card className="p-6 border-amber-200 dark:border-amber-800">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-amber-600">
                <Calendar className="h-5 w-5" />
                Binnen 30 Tagen
              </h3>
              <div className="space-y-3">
                {[
                  '6. Auftragsverarbeiter: Verträge prüfen/abschließen',
                  '7. Löschkonzept: Fristen definieren und umsetzen',
                  '8. Mitarbeiterschulung: Sensibilisierung durchführen'
                ].map((item, idx) => (
                  <label key={idx} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="h-4 w-4 text-amber-600 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </Card>

            {/* Binnen 90 Tagen */}
            <Card className="p-6 border-blue-200 dark:border-blue-800">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 text-blue-600">
                <Clock className="h-5 w-5" />
                Binnen 90 Tagen
              </h3>
              <div className="space-y-3">
                {[
                  '9. Prozesse dokumentieren: Handbuch erstellen',
                  '10. Notfallplan: Für Datenpannen vorbereiten'
                ].map((item, idx) => (
                  <label key={idx} className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="h-4 w-4 text-blue-600 mt-0.5" />
                    <span className="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </Card>
          </div>
        </section>

        {/* Best Practices */}
        <section id="best-practices" className="max-w-6xl mx-auto scroll-mt-32">
          <h2 className="text-4xl font-bold mb-8">Best Practices erfolgreicher Vermieter</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Brain,
                title: 'Automatisierung mit Datenschutz',
                items: [
                  'Digitale Selbstauskunft mit integrierter Einwilligung',
                  'Automatische Löschung nach Fristen',
                  'Verschlüsselte Kommunikationsportale'
                ]
              },
              {
                icon: Award,
                title: 'Transparenz als Wettbewerbsvorteil',
                items: [
                  'Datenschutz-Siegel auf Website',
                  'Klare Kommunikation der Datenverarbeitung',
                  'Schnelle Auskunftserteilung (< 48h)'
                ]
              },
              {
                icon: Rocket,
                title: 'Effizienz durch Standardisierung',
                items: [
                  'Einheitliche Formulare',
                  'Checklisten für Mitarbeiter',
                  'Digitale Unterschriften'
                ]
              }
            ].map((practice, idx) => (
              <Card key={idx} className="p-6">
                <practice.icon className="h-8 w-8 text-indigo-600 mb-3" />
                <div className="text-lg font-semibold mb-3">{practice.title}</div>
                <ul className="space-y-2">
                  {practice.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* Zukunftstrends */}
        <section id="zukunft" className="max-w-6xl mx-auto scroll-mt-32">
          <h2 id="zukunftstrends-vorbereitung" className="text-4xl font-bold mb-8">Zukunftstrends und Vorbereitung</h2>
          
          <Card className="p-6 mb-6">
            <h3 id="was-kommt-auf-vermieter" className="text-2xl font-semibold mb-4">Was kommt auf Vermieter zu?</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="font-semibold mb-3 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                  Neue Technologien
                </div>
                <ul className="space-y-2">
                  {[
                    'KI-basierte Mieterauswahl: Neue Datenschutzanforderungen',
                    'Smart Home Daten: Klare Regelungen erforderlich',
                    'Blockchain-Mietverträge: Unveränderbarkeit vs. Löschpflicht',
                    'Automatisierte Bonitätsprüfung: Transparenzpflichten'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <ChevronRight className="h-4 w-4 text-indigo-500 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="font-semibold mb-3 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-indigo-600" />
                  Zeitplan
                </div>
                <div className="space-y-3">
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded p-3">
                    <p className="font-semibold text-sm">2025:</p>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• ePrivacy-Verordnung beachten</li>
                      <li>• KI-Verordnung implementieren</li>
                      <li>• Digitale Identitäten integrieren</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded p-3">
                    <p className="font-semibold text-sm">2026:</p>
                    <ul className="text-sm mt-1 space-y-1">
                      <li>• Volldigitale Mietprozesse</li>
                      <li>• Automatisierte Compliance</li>
                      <li>• Predictive Analytics (datenschutzkonform)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* Related Links Section for SEO */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Verwandte Compliance-Themen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link to="/wissen/branchen/datenschutz-kindergarten" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline mb-2">Datenschutz Kindergarten</h3>
                  <p className="text-sm text-muted-foreground">DSGVO-Compliance für Kitas</p>
                </div>
              </Card>
            </Link>
            <Link to="/wissen/branchen/dsgvo-vereine" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline mb-2">DSGVO für Vereine</h3>
                  <p className="text-sm text-muted-foreground">Datenschutz im Vereinswesen</p>
                </div>
              </Card>
            </Link>
            <Link to="/wissen/branchen/datenschutz-pflege" className="group">
              <Card className="h-full hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="font-semibold text-indigo-600 dark:text-indigo-400 group-hover:underline mb-2">Datenschutz in der Pflege</h3>
                  <p className="text-sm text-muted-foreground">DSGVO für Pflegeeinrichtungen</p>
                </div>
              </Card>
            </Link>
          </div>
        </section>

        {/* CTA */}
        <Card className="p-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <h3 id="ihr-weg-compliance" className="text-3xl font-bold mb-4">
            Ihr Weg zur DSGVO-Compliance
          </h3>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Die DSGVO ist kein Hindernis, sondern eine Chance für professionelles Immobilienmanagement. 
            Mit den richtigen Prozessen und Tools wird Datenschutz zum Wettbewerbsvorteil.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="min-h-[48px] min-w-[48px]">
              Kostenlose Vermieter-Beratung
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20 min-h-[48px] min-w-[48px]">
              DSGVO-Audit anfordern
            </Button>
          </div>
        </Card>

        {/* Weiterführende Informationen */}
        <section className="max-w-6xl mx-auto mt-12">
          <h2 id="weiterfuehrende-ressourcen" className="text-4xl font-bold mb-8 text-center">Weiterführende Ressourcen</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Building className="h-5 w-5 text-indigo-600" />
                Aufsichtsbehörden
              </h3>
              <ul className="space-y-2">
                {[
                  { name: 'Bayern', behorde: 'BayLDA', website: 'datenschutz-bayern.de' },
                  { name: 'NRW', behorde: 'LDI NRW', website: 'ldi.nrw.de' },
                  { name: 'Baden-Württemberg', behorde: 'LfDI BW', website: 'baden-wuerttemberg.datenschutz.de' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center justify-between text-sm">
                    <span><strong>{item.name}:</strong> {item.behorde}</span>
                    <a href={`https://${item.website}`} className="text-indigo-600 hover:underline flex items-center gap-1">
                      <ExternalLink className="h-3 w-3" />
                      Website
                    </a>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-indigo-600" />
                Empfohlene Tools
              </h3>
              <div className="space-y-3">
                <div>
                  <div className="font-medium text-sm mb-1">Immobilienverwaltung:</div>
                  <p className="text-sm text-muted-foreground">Haufe Axera, DOMUS, objego</p>
                </div>
                <div>
                  <div className="font-medium text-sm mb-1">Kommunikation:</div>
                  <p className="text-sm text-muted-foreground">Element/Matrix, Threema Work</p>
                </div>
                <div>
                  <div className="font-medium text-sm mb-1">E-Mail-Verschlüsselung:</div>
                  <p className="text-sm text-muted-foreground">ProtonMail, Tutanota, GPG4Win</p>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </div>
      </main>
      
      <Footer />
    </div>
    </>
  );
};

export default DsgvoVermieter;