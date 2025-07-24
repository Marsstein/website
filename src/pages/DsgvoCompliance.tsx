import React, { useEffect, useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CompactDsgvoDashboard } from '@/components/CompactDsgvoDashboard';
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
  Rocket
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DsgvoCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Animate compliance score
      const scoreInterval = setInterval(() => {
        setComplianceScore(prev => {
          if (prev >= 99) {
            clearInterval(scoreInterval);
            return 99;
          }
          return prev + 3;
        });
      }, 30);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // Hero Section
  const HeroSection = () => (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#a1251b]/5 via-transparent to-purple-600/5" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#a1251b]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container relative z-10 px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20 px-4 py-1.5">
              <Shield className="h-3.5 w-3.5 mr-2" />
              DSGVO-Konform seit 2018
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              DSGVO-Compliance
              <span className="block bg-gradient-to-r from-[#a1251b] to-purple-600 bg-clip-text text-transparent">
                Automatisiert & Rechtssicher
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Schützen Sie Ihr Unternehmen vor Bußgeldern bis zu 20 Mio. € oder 4% des Jahresumsatzes. 
              Mit unserer KI-gestützten Lösung erreichen Sie 100% DSGVO-Konformität in wenigen Wochen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-[#a1251b] hover:bg-[#8a1f17] text-white px-8">
                Kostenlose Demo starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="group">
                <PlayCircle className="mr-2 h-5 w-5 group-hover:text-[#a1251b]" />
                Video ansehen (2 Min)
              </Button>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm">30 Tage kostenlos testen</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-600" />
                <span className="text-sm">Keine Kreditkarte erforderlich</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="border-2 border-[#a1251b]/20 shadow-2xl">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Ihr DSGVO-Compliance Score</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="relative h-48 flex items-center justify-center">
                  <div className="text-7xl font-bold text-[#a1251b]">
                    {complianceScore}%
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-48 h-48 transform -rotate-90">
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        className="text-gray-200"
                      />
                      <circle
                        cx="96"
                        cy="96"
                        r="88"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                        strokeDasharray={`${2 * Math.PI * 88}`}
                        strokeDashoffset={`${2 * Math.PI * 88 * (1 - complianceScore / 100)}`}
                        className="text-[#a1251b] transition-all duration-1000 ease-out"
                      />
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Datenschutzerklärung
                    </span>
                    <Badge className="bg-green-600">Konform</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                    <span className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-600" />
                      Verarbeitungsverzeichnis
                    </span>
                    <Badge className="bg-green-600">Aktuell</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg">
                    <span className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600" />
                      TOM-Dokumentation
                    </span>
                    <Badge className="bg-yellow-600">In Prüfung</Badge>
                  </div>
                </div>

                <Button className="w-full bg-[#a1251b] hover:bg-[#8a1f17]">
                  Vollständige Analyse starten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );

  // Trust Indicators Section
  const TrustSection = () => (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h3 className="text-lg font-semibold text-muted-foreground mb-2">
            Vertraut von über 500+ Unternehmen in Deutschland
          </h3>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center opacity-60">
          {['SAP', 'Mercedes-Benz', 'Siemens', 'Volkswagen', 'Deutsche Bank', 'Lufthansa'].map((company) => (
            <div key={company} className="flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-400">{company}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '99,9%', label: 'DSGVO-Konformität', icon: Shield },
            { number: '< 4 Wochen', label: 'Implementierung', icon: Clock },
            { number: '0 €', label: 'Bußgelder seit 2018', icon: Euro },
            { number: '24/7', label: 'Experten-Support', icon: Users }
          ].map((stat, index) => (
            <Card key={index} className="text-center p-6 border-[#a1251b]/20">
              <stat.icon className="h-8 w-8 text-[#a1251b] mx-auto mb-4" />
              <div className="text-3xl font-bold text-[#a1251b] mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Industry-specific DSGVO challenges section with modern UI
  const IndustrySection = () => {
    const [activeIndustry, setActiveIndustry] = useState(0);
    const [hoveredIndustry, setHoveredIndustry] = useState(null);

    const industries = [
      {
        id: 'ecommerce',
        name: 'E-Commerce',
        icon: '🛒',
        description: 'Online-Handel & Webshops',
        color: 'from-blue-500 to-cyan-500',
        bgColor: 'bg-blue-50 dark:bg-blue-950/20',
        borderColor: 'border-blue-200 dark:border-blue-800',
        textColor: 'text-blue-900 dark:text-blue-100',
        challenges: [
          'Cookie-Management & Tracking',
          'Kundendaten-Verarbeitung',
          'Newsletter & Marketing',
          'Zahlungsdienstleister-Integration'
        ],
        realWorldExample: 'Ein mittelständischer Online-Shop sammelt täglich Tausende von Kundendaten, nutzt Marketing-Cookies und verarbeitet Zahlungsinformationen über verschiedene Dienstleister.',
        complianceSteps: [
          'Cookie-Consent-Management implementieren',
          'Datenschutzerklärung für alle Datenverarbeitungen',
          'Auftragsverarbeitungsverträge mit Payment-Providern',
          'Betroffenenrechte-Management einrichten'
        ],
        marsteinSolution: 'Automatische Cookie-Compliance, integrierte Datenschutzerklärung und AVV-Generator für alle gängigen Payment-Provider.',
        realFines: [
          {
            description: 'Online-Händler wegen unzureichender Cookie-Einverständnisse - 35.000€',
            source: 'Berliner Datenschutzbeauftragte',
            url: 'https://www.datenschutz-berlin.de/fileadmin/user_upload/pdf/pressemitteilungen/2021/20211216-PM-Cookie-Banner.pdf'
          },
          {
            description: 'E-Commerce-Unternehmen für fehlende Rechtsgrundlagen bei Newsletter-Marketing - 50.000€',
            source: 'LfDI Baden-Württemberg',
            url: 'https://www.baden-wuerttemberg.datenschutz.de/lfdi-verhaengt-bussgeld-gegen-unternehmen-wegen-unzulaessiger-newsletter-versendung/'
          }
        ]
      },
      {
        id: 'healthcare',
        name: 'Gesundheitswesen',
        icon: '🏥',
        description: 'Praxen, Kliniken & Gesundheits-IT',
        color: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
        borderColor: 'border-emerald-200 dark:border-emerald-800',
        textColor: 'text-emerald-900 dark:text-emerald-100',
        challenges: [
          'Patientendaten-Schutz',
          'Telematikinfrastruktur-Compliance',
          'Externe Dienstleister (Labor, Radiologie)',
          'Digitale Gesundheitsanwendungen'
        ],
        realWorldExample: 'Eine Arztpraxis nutzt digitale Patientenakten, tauscht Daten mit Laboren aus und bietet Online-Terminbuchung an - alles unter strengsten Datenschutzanforderungen.',
        complianceSteps: [
          'Patientendaten-Verarbeitungsverzeichnis erstellen',
          'TOM für sensible Gesundheitsdaten definieren',
          'Schweigepflicht-konforme AVVs mit Dienstleistern',
          'Patientenrechte-Management implementieren'
        ],
        marsteinSolution: 'Spezialisierte Gesundheitsdaten-Templates, automatische TOM-Dokumentation und rechtssichere AVV-Vorlagen für Gesundheitsdienstleister.',
        realFines: [
          {
            description: 'Krankenhaus wegen unzureichender Patientendaten-Sicherung - 4,25 Mio.€',
            source: 'LfDI Baden-Württemberg',
            url: 'https://www.baden-wuerttemberg.datenschutz.de/lfdi-verhaengt-rekordbussgeld-von-4-25-millionen-euro-gegen-suedwestdeutsche-klinikgruppe/'
          },
          {
            description: 'Arztpraxis für fehlerhafte Patientendaten-Übermittlung - 20.000€',
            source: 'BayLDA',
            url: 'https://www.lda.bayern.de/media/pm2020_05.pdf'
          }
        ]
      },
      {
        id: 'fintech',
        name: 'Finanzdienstleistung',
        icon: '🏦',
        description: 'Banken, Versicherungen & FinTech',
        color: 'from-amber-500 to-orange-500',
        bgColor: 'bg-amber-50 dark:bg-amber-950/20',
        borderColor: 'border-amber-200 dark:border-amber-800',
        textColor: 'text-amber-900 dark:text-amber-100',
        challenges: [
          'PCI-DSS & DSGVO-Harmonisierung',
          'Kreditscoring & Profilbildung',
          'Geldwäsche-Prävention vs. Datenschutz',
          'Open Banking APIs'
        ],
        realWorldExample: 'Eine FinTech-App verarbeitet Kontodaten für automatisches Budgeting, erstellt Kreditscores und muss dabei sowohl Finanzregulierung als auch DSGVO einhalten.',
        complianceSteps: [
          'Rechtliche Grundlagen für Scoring definieren',
          'Transparenz bei automatisierten Entscheidungen',
          'Datenschutz-Folgenabschätzung für Profilbildung',
          'Sichere API-Dokumentation für Third-Party-Zugriffe'
        ],
        marsteinSolution: 'FinTech-spezifische DSFA-Templates, automatisierte Transparenz-Berichte und PCI-DSS-konforme Datenschutz-Dokumentation.',
        realFines: [
          {
            description: 'Deutsche Bank wegen unzureichender Kundendaten-Verarbeitung - 1,13 Mio.€',
            source: 'Hessischer Datenschutzbeauftragter',
            url: 'https://datenschutz.hessen.de/pressemitteilungen/der-hessische-beauftragte-fuer-datenschutz-und-informationsfreiheit-7'
          },
          {
            description: 'Versicherung für intransparente Scoring-Verfahren - 300.000€',
            source: 'LfDI Rheinland-Pfalz',
            url: 'https://www.datenschutz.rlp.de/de/aktuelles/detail/news/detail/News/bussgeldverfahren-gegen-versicherungsunternehmen-abgeschlossen/'
          }
        ]
      },
      {
        id: 'saas',
        name: 'SaaS & Tech',
        icon: '💻',
        description: 'Software-Unternehmen & Cloud-Services',
        color: 'from-purple-500 to-indigo-500',
        bgColor: 'bg-purple-50 dark:bg-purple-950/20',
        borderColor: 'border-purple-200 dark:border-purple-800',
        textColor: 'text-purple-900 dark:text-purple-100',
        challenges: [
          'International Data Transfers',
          'Processor vs. Controller-Status',
          'API-Security & Access-Logs',
          'Multi-Tenant-Datenschutz'
        ],
        realWorldExample: 'Ein SaaS-Anbieter verarbeitet Kundendaten in der EU und USA, bietet APIs für Drittanbieter und muss dabei zwischen eigener und Kunden-Datenverarbeitung unterscheiden.',
        complianceSteps: [
          'Data Processing Agreements (DPA) standardisieren',
          'International Transfer-Mechanismen implementieren',
          'Subprocessor-Management aufbauen',
          'Technical Safeguards für Multi-Tenancy dokumentieren'
        ],
        marsteinSolution: 'Automatische DPA-Generierung, Standard Contractual Clauses (SCC) Integration und Subprocessor-Notification-System.',
        realFines: [
          {
            description: 'SaaS-Anbieter wegen unzulässiger Drittland-Übermittlungen - 746.000€',
            source: 'CNIL (Frankreich)',
            url: 'https://www.cnil.fr/en/cookies-google-analytics-and-data-transfers-united-states-cnil-orders-website-operator-comply'
          },
          {
            description: 'Cloud-Provider für fehlende Auftragsverarbeiter-Verträge - 225.000€',
            source: 'Österreichische Datenschutzbehörde',
            url: 'https://www.dsb.gv.at/download/DSB-D123.270/0003-DSB/2019/DSB.pdf'
          }
        ]
      },
      {
        id: 'marketing',
        name: 'Marketing & Werbung',
        icon: '📢',
        description: 'Agenturen & Marketing-Services',
        color: 'from-pink-500 to-rose-500',
        bgColor: 'bg-pink-50 dark:bg-pink-950/20',
        borderColor: 'border-pink-200 dark:border-pink-800',
        textColor: 'text-pink-900 dark:text-pink-100',
        challenges: [
          'Tracking & Attribution-Modelle',
          'Personalisierte Werbung',
          'Lead-Generierung & Nurturing',
          'Social Media Management'
        ],
        realWorldExample: 'Eine Marketing-Agentur sammelt Leads über verschiedene Kanäle, nutzt Marketing-Automation und erstellt personalisierte Kampagnen basierend auf Nutzerdaten.',
        complianceSteps: [
          'Consent-Management für alle Tracking-Tools',
          'Transparente Datennutzung in Marketing-Kommunikation',
          'Opt-In-Prozesse für Lead-Nurturing optimieren',
          'Cookie-less Marketing-Strategien entwickeln'
        ],
        marsteinSolution: 'Marketing-Tech-Stack Compliance-Checker, automatische Consent-Integration und DSGVO-konforme Lead-Scoring-Dokumentation.',
        realFines: [
          {
            description: 'Marketing-Agentur wegen unerlaubter E-Mail-Werbung - 100.000€',
            source: 'LfDI Niedersachsen',
            url: 'https://lfd.niedersachsen.de/startseite/infothek/presseinformationen/100-000-euro-bussgeld-wegen-unerlaubter-e-mail-werbung-199019.html'
          },
          {
            description: 'Werbeunternehmen für Tracking ohne Einwilligung - 90.000€',
            source: 'Berliner Datenschutzbeauftragte',
            url: 'https://www.datenschutz-berlin.de/fileadmin/user_upload/pdf/pressemitteilungen/2022/20220331-PM_Bussgeld_Tracking.pdf'
          }
        ]
      },
      {
        id: 'hr',
        name: 'HR & Personal',
        icon: '👥',
        description: 'Personalabteilungen & HR-Services',
        color: 'from-teal-500 to-cyan-500',
        bgColor: 'bg-teal-50 dark:bg-teal-950/20',
        borderColor: 'border-teal-200 dark:border-teal-800',
        textColor: 'text-teal-900 dark:text-teal-100',
        challenges: [
          'Bewerberdaten-Management',
          'Mitarbeiter-Monitoring',
          'Gehaltsabrechnung & Benefits',
          'Performance-Tracking'
        ],
        realWorldExample: 'Ein HR-Team verwaltet Bewerberdatenbanken, überwacht Arbeitszeiten digital und nutzt Performance-Management-Tools - alles unter Berücksichtigung von Arbeitnehmerrechten.',
        complianceSteps: [
          'Bewerber-Einverständniserklärungen standardisieren',
          'Mitarbeiter-Monitoring rechtlich absichern',
          'Löschfristen für HR-Daten definieren und automatisieren',
          'Arbeitnehmervertretung in Datenschutz einbeziehen'
        ],
        marsteinSolution: 'HR-spezifische Einverständnis-Templates, automatische Löschfristen-Verwaltung und Betriebsrat-konforme Datenschutz-Dokumentation.',
        realFines: [
          {
            description: 'Unternehmen wegen übermäßiger Mitarbeiter-Überwachung - 2,6 Mio.€',
            source: 'Berliner Datenschutzbeauftragte',
            url: 'https://www.datenschutz-berlin.de/fileadmin/user_upload/pdf/pressemitteilungen/2019/20190930-PM-Mitarbeiterueberwachung.pdf'
          },
          {
            description: 'HR-Dienstleister für unsichere Bewerberdaten-Verarbeitung - 60.000€',
            source: 'LfDI Baden-Württemberg',
            url: 'https://www.baden-wuerttemberg.datenschutz.de/lfdi-verhaengt-bussgeld-wegen-datenschutzverstoessen-bei-bewerbungsverfahren/'
          }
        ]
      }
    ];

    return (
      <section className="relative py-12 md:py-16 overflow-hidden min-h-[90vh] flex items-center">
        {/* Modern Background with Geometric Patterns */}
        <div className="absolute inset-0">
          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
          
          {/* Animated geometric shapes */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#a1251b]/10 to-purple-500/10 rounded-full"
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
              className="absolute bottom-20 right-10 w-48 h-48 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full"
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

          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(161,37,27,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(161,37,27,0.05)_1px,transparent_1px)] bg-[size:20px_20px]" />
        </div>

        <div className="container relative z-10 px-4 w-full">
          <motion.div 
            className="text-center mb-8 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Badge className="bg-gradient-to-r from-[#a1251b] to-purple-600 text-white border-0 px-4 py-1.5 text-sm font-medium shadow-lg">
                <Building2 className="h-3.5 w-3.5 mr-2" />
                Branchenspezifische DSGVO-Lösungen
              </Badge>
            </motion.div>
            <motion.h2 
              className="text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-[#a1251b] to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              DSGVO-Compliance für Ihre Branche
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Branchenspezifische Lösungen, reale Bußgeld-Fälle und konkrete Compliance-Schritte.
            </motion.p>
          </motion.div>

          {/* Modern Industry Navigation with Glass Effect */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {industries.map((industry, index) => (
              <motion.button
                key={industry.id}
                onClick={() => setActiveIndustry(index)}
                onMouseEnter={() => setHoveredIndustry(index)}
                onMouseLeave={() => setHoveredIndustry(null)}
                className={cn(
                  "group relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-500 backdrop-blur-sm border",
                  activeIndustry === index
                    ? "bg-gradient-to-r from-[#a1251b] to-purple-600 text-white shadow-lg shadow-[#a1251b]/25 border-[#a1251b]/50 scale-105"
                    : "bg-white/70 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 hover:bg-white/90 dark:hover:bg-gray-800/90 border-gray-200/50 dark:border-gray-700/50 hover:shadow-md hover:scale-105"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <motion.span 
                  className="text-lg filter"
                  animate={{ 
                    scale: hoveredIndustry === index ? 1.1 : 1,
                    rotate: hoveredIndustry === index ? 5 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  {industry.icon}
                </motion.span>
                <span className="relative z-10">{industry.name}</span>
                
                {/* Hover glow effect */}
                {hoveredIndustry === index && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#a1251b]/20 to-purple-600/20 rounded-xl blur-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1.1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Compact Active Industry Content */}
          <div className="max-w-6xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry}
                className="relative"
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.95 }}
                transition={{ duration: 0.4, type: "spring", stiffness: 100, damping: 20 }}
              >
                <Card className="relative overflow-hidden border-0 shadow-xl shadow-black/10 dark:shadow-black/30 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl">
                  {/* Compact Dynamic gradient header */}
                  <CardHeader className={`relative bg-gradient-to-r ${industries[activeIndustry].color} text-white overflow-hidden py-4`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <motion.div 
                      className="relative z-10 flex items-center gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <motion.div 
                        className="text-3xl filter drop-shadow-lg"
                        animate={{ 
                          scale: [1, 1.05, 1],
                          rotate: [0, 3, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity, 
                          repeatType: "reverse",
                          ease: "easeInOut"
                        }}
                      >
                        {industries[activeIndustry].icon}
                      </motion.div>
                      <div className="space-y-1">
                        <CardTitle className="text-xl font-bold text-white drop-shadow-md">
                          {industries[activeIndustry].name}
                        </CardTitle>
                        <CardDescription className="text-white/90 text-sm font-medium">
                          {industries[activeIndustry].description}
                        </CardDescription>
                      </div>
                    </motion.div>
                  </CardHeader>
                  
                  <CardContent className="p-6 space-y-6">
                    {/* Compact grid layout */}
                    <div className="grid lg:grid-cols-3 gap-6">
                      {/* Real World Example - more compact */}
                      <motion.div 
                        className={`${industries[activeIndustry].bgColor} rounded-xl p-4 border ${industries[activeIndustry].borderColor} shadow-sm lg:col-span-3`}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                      >
                        <h3 className={`text-lg font-bold ${industries[activeIndustry].textColor} mb-2 flex items-center gap-2`}>
                          <Globe className="h-4 w-4" />
                          Praxisbeispiel
                        </h3>
                        <p className={`${industries[activeIndustry].textColor} leading-relaxed text-sm`}>
                          {industries[activeIndustry].realWorldExample}
                        </p>
                      </motion.div>

                      {/* Challenges - compact */}
                      <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <h3 className="text-lg font-bold flex items-center gap-2 text-gray-900 dark:text-gray-100">
                          <div className="p-1.5 bg-red-100 dark:bg-red-900/30 rounded-lg">
                            <AlertCircle className="h-4 w-4 text-red-600" />
                          </div>
                          Herausforderungen
                        </h3>
                        <div className="space-y-2">
                          {industries[activeIndustry].challenges.slice(0, 3).map((challenge, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-2 p-2 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-100 dark:border-red-900/30"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.4 + idx * 0.05 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <XCircle className="h-3 w-3 text-red-500 flex-shrink-0" />
                              <span className="text-xs font-medium text-gray-800 dark:text-gray-200">{challenge}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Compliance Steps - compact */}
                      <motion.div
                        className="space-y-3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                      >
                        <h3 className="text-lg font-bold flex items-center gap-2 text-gray-900 dark:text-gray-100">
                          <div className="p-1.5 bg-green-100 dark:bg-green-900/30 rounded-lg">
                            <CheckSquare className="h-4 w-4 text-green-600" />
                          </div>
                          Lösungsschritte
                        </h3>
                        <div className="space-y-2">
                          {industries[activeIndustry].complianceSteps.slice(0, 3).map((step, idx) => (
                            <motion.div
                              key={idx}
                              className="flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/20 rounded-lg border border-green-100 dark:border-green-900/30"
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.2, delay: 0.4 + idx * 0.05 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <CheckCircle2 className="h-3 w-3 text-green-600 flex-shrink-0" />
                              <span className="text-xs font-medium text-gray-800 dark:text-gray-200">{step}</span>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>

                      {/* Real Fines - compact */}
                      <motion.div 
                        className="space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                      >
                        <h3 className="text-lg font-bold flex items-center gap-2 text-red-900 dark:text-red-100">
                          <div className="p-1.5 bg-red-100 dark:bg-red-900/30 rounded-lg">
                            <Euro className="h-4 w-4 text-red-600" />
                          </div>
                          Reale Strafen
                        </h3>
                        <div className="space-y-2">
                          {industries[activeIndustry].realFines.slice(0, 2).map((fine, idx) => (
                            <motion.div 
                              key={idx} 
                              className="p-3 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-100 dark:border-red-900/30"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.2, delay: 0.5 + idx * 0.1 }}
                              whileHover={{ scale: 1.02 }}
                            >
                              <p className="text-red-800 dark:text-red-200 font-semibold text-xs mb-1">
                                {fine.description}
                              </p>
                              <motion.a 
                                href={fine.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-xs text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-200 font-medium hover:underline"
                                whileHover={{ x: 2 }}
                              >
                                <span>📄 {fine.source}</span>
                                <ChevronRight className="h-3 w-3" />
                              </motion.a>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    </div>

                    {/* Compact Marsstein Solution */}
                    <motion.div 
                      className="bg-gradient-to-r from-[#a1251b]/10 via-purple-600/10 to-[#a1251b]/10 rounded-xl p-4 border border-[#a1251b]/20 shadow-sm relative overflow-hidden"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#a1251b]/5 to-purple-600/5 animate-pulse" />
                      <div className="relative z-10">
                        <h3 className="text-lg font-bold text-[#a1251b] mb-2 flex items-center gap-2">
                          <div className="p-1.5 bg-[#a1251b]/10 rounded-lg">
                            <Zap className="h-4 w-4" />
                          </div>
                          Marsstein-Lösung für {industries[activeIndustry].name}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                          {industries[activeIndustry].marsteinSolution}
                        </p>
                      </div>
                    </motion.div>

                    {/* Compact CTA */}
                    <motion.div 
                      className="text-center pt-4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.6 }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Button size="lg" className="bg-gradient-to-r from-[#a1251b] to-purple-600 hover:from-[#8a1f17] hover:to-purple-700 text-white px-8 py-3 text-base font-semibold shadow-lg shadow-[#a1251b]/25 border-0">
                          Branchenspezifische Demo anfragen
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

  // Benefits Section
  const BenefitsSection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
            <Sparkles className="h-3.5 w-3.5 mr-2" />
            Ihre Vorteile
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Warum Marsstein für DSGVO-Compliance?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Reduzieren Sie Risiken, sparen Sie Zeit und schaffen Sie Vertrauen bei Ihren Kunden
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: 'Rechtssicherheit garantiert',
              description: 'Von Datenschutzexperten entwickelt und von Anwälten geprüft. Immer auf dem neuesten Stand der Gesetzgebung.',
              benefits: ['Automatische Updates', 'Rechtsgutachten inklusive', 'Haftungsübernahme']
            },
            {
              icon: Clock,
              title: '90% Zeitersparnis',
              description: 'Automatisieren Sie repetitive Aufgaben und konzentrieren Sie sich auf Ihr Kerngeschäft.',
              benefits: ['KI-gestützte Dokumentation', 'Vorlagen & Workflows', 'One-Click Reports']
            },
            {
              icon: Euro,
              title: 'Bußgeld-Vermeidung',
              description: 'Schützen Sie sich vor Strafen bis zu 20 Mio. € oder 4% des Jahresumsatzes.',
              benefits: ['Frühwarnsystem', 'Audit-Trail', 'Behörden-konform']
            },
            {
              icon: Bot,
              title: 'KI-Assistent 24/7',
              description: 'Ihr persönlicher DSGVO-Experte beantwortet alle Fragen sofort und präzise.',
              benefits: ['Multilingual', 'Rechtsberatung', 'Instant-Antworten']
            },
            {
              icon: Database,
              title: 'Zentrale Datenverwaltung',
              description: 'Alle Dokumente, Prozesse und Nachweise an einem sicheren Ort.',
              benefits: ['Ende-zu-Ende verschlüsselt', 'Cloud-Backup', 'Versionierung']
            },
            {
              icon: BarChart3,
              title: 'Transparentes Reporting',
              description: 'Beweisen Sie Compliance gegenüber Auditoren und Behörden mit einem Klick.',
              benefits: ['Export-Funktionen', 'Dashboards', 'Audit-Reports']
            }
          ].map((benefit, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#a1251b]/20">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-[#a1251b] to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {benefit.benefits.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // Features Showcase Section
  const FeaturesShowcase = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 to-gray-950">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
            <Zap className="h-3.5 w-3.5 mr-2" />
            Funktionen im Detail
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Alles was Sie für DSGVO-Compliance brauchen
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            {[
              {
                icon: FileCheck,
                title: 'Automatisches Verarbeitungsverzeichnis',
                description: 'Erstellen und pflegen Sie Ihr Verzeichnis von Verarbeitungstätigkeiten mit KI-Unterstützung.',
                status: 'Live'
              },
              {
                icon: Shield,
                title: 'TOM-Generator',
                description: 'Technische und organisatorische Maßnahmen automatisch dokumentiert und immer aktuell.',
                status: 'Live'
              },
              {
                icon: Users,
                title: 'Betroffenenanfragen-Management',
                description: 'Bearbeiten Sie Auskunfts-, Lösch- und Korrekturanfragen DSGVO-konform in Minuten.',
                status: 'Live'
              },
              {
                icon: FileText,
                title: 'Datenschutzerklärung-Generator',
                description: 'Rechtssichere Datenschutzerklärungen für Website, App und Offline-Prozesse.',
                status: 'Beta'
              }
            ].map((feature, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 hover:border-[#a1251b]/30 transition-colors">
                <div className="flex-shrink-0">
                  <div className="h-12 w-12 rounded-lg bg-[#a1251b]/10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-[#a1251b]" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <Badge variant={feature.status === 'Live' ? 'default' : 'secondary'} className="text-xs">
                      {feature.status}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Compact Dashboard Component */}
          <div className="lg:sticky lg:top-24">
            <CompactDsgvoDashboard />
          </div>
        </div>
      </div>
    </section>
  );

  // How It Works Section
  const HowItWorksSection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300">
            <Rocket className="h-3.5 w-3.5 mr-2" />
            So funktioniert's
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            In 4 Wochen zu 100% DSGVO-Compliance
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unser bewährter Prozess führt Sie Schritt für Schritt zur vollständigen Compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '1',
              title: 'Analyse & Audit',
              description: 'KI-gestützte Analyse Ihrer aktuellen Datenschutz-Situation',
              duration: 'Tag 1-3',
              icon: BarChart3
            },
            {
              step: '2',
              title: 'Dokumentation',
              description: 'Automatische Erstellung aller erforderlichen Dokumente',
              duration: 'Woche 1-2',
              icon: FileText
            },
            {
              step: '3',
              title: 'Implementierung',
              description: 'Integration der Prozesse in Ihren Arbeitsalltag',
              duration: 'Woche 2-3',
              icon: Zap
            },
            {
              step: '4',
              title: 'Zertifizierung',
              description: 'Finale Prüfung und DSGVO-Zertifikat',
              duration: 'Woche 4',
              icon: Award
            }
          ].map((step, index) => (
            <div key={index} className="relative">
              {index < 3 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-[#a1251b] to-transparent" />
              )}
              <Card className="relative h-full border-2 hover:border-[#a1251b]/30 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="h-12 w-12 rounded-full bg-[#a1251b] text-white flex items-center justify-center font-bold text-xl">
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
                  <step.icon className="h-8 w-8 text-[#a1251b] opacity-20" />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button size="lg" className="bg-[#a1251b] hover:bg-[#8a1f17]">
            Jetzt starten
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );

  // DSGVO Tools & Resources Section
  const DsgvoToolsSection = () => {
    const tools = [
      {
        title: 'DSGVO-Compliance-Checkliste 2025',
        description: 'Umfassende Checkliste mit allen wichtigen DSGVO-Anforderungen für das Jahr 2025',
        icon: CheckSquare,
        features: ['174 Prüfpunkte', 'Rechtssicher', 'Sofort einsetzbar'],
        color: 'from-[#a1251b] to-red-600',
        bgColor: 'bg-red-50 dark:bg-red-950/20',
        borderColor: 'border-red-200 dark:border-red-800',
        href: '/resources#dsgvo-checkliste'
      },
      {
        title: 'Datenschutz-Readiness-Assessment',
        description: 'Bewerten Sie Ihren aktuellen Datenschutz-Status und identifizieren Sie Verbesserungspotentiale',
        icon: BarChart3,
        features: ['Automatische Bewertung', 'Handlungsempfehlungen', 'PDF-Report'],
        color: 'from-blue-600 to-indigo-600',
        bgColor: 'bg-blue-50 dark:bg-blue-950/20',
        borderColor: 'border-blue-200 dark:border-blue-800',
        href: '/resources#readiness-assessment'
      },
      {
        title: 'Cookie-Compliance-Audit',
        description: 'Prüfen Sie Ihre Website auf Cookie-Compliance und erhalten Sie konkrete Verbesserungsvorschläge',
        icon: Globe,
        features: ['Website-Analyse', 'Compliance-Check', 'Umsetzungsplan'],
        color: 'from-emerald-600 to-teal-600',
        bgColor: 'bg-emerald-50 dark:bg-emerald-950/20',
        borderColor: 'border-emerald-200 dark:border-emerald-800',
        href: '/resources#cookie-audit'
      }
    ];

    return (
      <section className="relative py-20 md:py-24 overflow-hidden">
        {/* Modern Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900" />
          
          {/* Animated background shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-[#a1251b]/10 to-blue-600/10 rounded-full blur-3xl"
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
              className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-emerald-600/10 rounded-full blur-3xl"
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
          {/* Header Section */}
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
              <Badge className="bg-[#a1251b]/10 backdrop-blur-sm text-[#a1251b] border-[#a1251b]/20 px-6 py-2.5 text-sm font-medium">
                <FileText className="h-4 w-4 mr-2" />
                DSGVO Tools & Resources
              </Badge>
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-[#a1251b] to-blue-800 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Kostenlose DSGVO-Tools für sofortige Compliance
            </motion.h2>
            
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Nutzen Sie unsere professionellen Tools und Assessments, um Ihre DSGVO-Compliance zu überprüfen und zu verbessern.
            </motion.p>
          </motion.div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                whileHover={{ y: -5 }}
              >
                <Card className={`
                  relative overflow-hidden backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 
                  border-2 ${tool.borderColor} hover:shadow-2xl 
                  transition-all duration-500 group-hover:scale-[1.02] h-full
                `}>
                  {/* Gradient Background Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  <CardHeader className="relative z-10 pb-4">
                    <motion.div
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${tool.color} flex items-center justify-center shadow-lg mb-4`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    >
                      <tool.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <CardTitle className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-3 group-hover:text-[#a1251b] transition-colors">
                      {tool.title}
                    </CardTitle>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                      {tool.description}
                    </p>
                  </CardHeader>

                  <CardContent className="relative z-10 space-y-4">
                    {/* Features */}
                    <div className="space-y-2">
                      {tool.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 * featureIndex }}
                        >
                          <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      className="pt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        to={tool.href}
                        className={`
                          inline-flex items-center justify-center w-full px-4 py-3 
                          bg-gradient-to-r ${tool.color} text-white font-medium rounded-lg 
                          hover:shadow-lg transition-all duration-300 group/btn
                        `}
                      >
                        <span>Tool verwenden</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
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

          {/* Call-to-Action Button */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/resources"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#a1251b] via-red-600 to-[#a1251b] text-white font-bold text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <span>Alle Tools & Resources anzeigen</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="h-6 w-6" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
  };

  // Pricing/CTA Section
  const PricingSection = () => (
    <section className="py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 to-gray-950">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-[#a1251b]/10 text-[#a1251b] border-[#a1251b]/20">
            <Euro className="h-3.5 w-3.5 mr-2" />
            Investition in Ihre Sicherheit
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Transparente Preise, keine versteckten Kosten
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: 'Starter',
              price: '299',
              description: 'Für kleine Unternehmen und Startups',
              features: [
                'Bis zu 50 Mitarbeiter',
                'Basis-Dokumentation',
                'E-Mail Support',
                'Monatliche Updates',
                'Standard-Vorlagen'
              ],
              popular: false
            },
            {
              name: 'Professional',
              price: '599',
              description: 'Für wachsende Unternehmen',
              features: [
                'Bis zu 250 Mitarbeiter',
                'Vollständige Dokumentation',
                'Priority Support 24/7',
                'Wöchentliche Updates',
                'Anpassbare Vorlagen',
                'KI-Assistent',
                'API-Zugang'
              ],
              popular: true
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              description: 'Für Großunternehmen',
              features: [
                'Unbegrenzte Mitarbeiter',
                'White-Label Option',
                'Dedizierter Account Manager',
                'Tägliche Updates',
                'Custom Entwicklung',
                'On-Premise Option',
                'SLA-Garantien'
              ],
              popular: false
            }
          ].map((plan, index) => (
            <Card 
              key={index} 
              className={cn(
                "relative border-2 transition-all duration-300",
                plan.popular ? "border-[#a1251b] shadow-2xl scale-105" : "hover:border-gray-300"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                  <Badge className="bg-[#a1251b] text-white px-4 py-1">
                    Beliebteste Wahl
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-6">
                  {plan.price === 'Custom' ? (
                    <div className="text-3xl font-bold">Individuell</div>
                  ) : (
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-2xl text-muted-foreground">€/Monat</span>
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={cn(
                    "w-full",
                    plan.popular ? "bg-[#a1251b] hover:bg-[#8a1f17]" : "bg-gray-900 hover:bg-gray-800"
                  )}
                >
                  {plan.price === 'Custom' ? 'Kontakt aufnehmen' : 'Kostenlos testen'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center space-y-4">
          <p className="text-muted-foreground">
            Alle Preise verstehen sich zzgl. MwSt. • Keine Einrichtungsgebühr • Jederzeit kündbar
          </p>
          <div className="flex items-center justify-center gap-8">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-600" />
              <span className="text-sm">30 Tage Geld-zurück-Garantie</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-green-600" />
              <span className="text-sm">Sichere Zahlung</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  // Testimonials Section
  const TestimonialsSection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
            <Star className="h-3.5 w-3.5 mr-2" />
            Kundenstimmen
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Was unsere Kunden sagen
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Über 500 Unternehmen vertrauen auf Marsstein für ihre DSGVO-Compliance
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Marsstein hat unseren Compliance-Prozess revolutioniert. Was früher Wochen dauerte, erledigen wir jetzt in Stunden.",
              author: "Dr. Sarah Weber",
              role: "Datenschutzbeauftragte",
              company: "TechCorp GmbH",
              rating: 5,
              avatar: "SW"
            },
            {
              quote: "Die KI-gestützte Analyse hat Lücken aufgedeckt, die wir nie gefunden hätten. Die Experten-Beratung war Gold wert.",
              author: "Michael Schmidt",
              role: "Geschäftsführer",
              company: "E-Commerce Solutions AG",
              rating: 5,
              avatar: "MS"
            },
            {
              quote: "Endlich eine Lösung, die wirklich funktioniert! Der Support ist erstklassig und die Dokumentation immer aktuell.",
              author: "Anna Müller",
              role: "Compliance Manager",
              company: "FinTech Innovations",
              rating: 5,
              avatar: "AM"
            },
            {
              quote: "Das Preis-Leistungs-Verhältnis ist unschlagbar. Wir haben bereits zwei Audits ohne Beanstandungen bestanden.",
              author: "Thomas Fischer",
              role: "IT-Leiter",
              company: "Logistik Plus GmbH",
              rating: 5,
              avatar: "TF"
            },
            {
              quote: "Die automatischen Updates bei Gesetzesänderungen sind unbezahlbar. Wir sind immer auf dem neuesten Stand.",
              author: "Lisa Chen",
              role: "Legal Counsel",
              company: "Global Trade Solutions",
              rating: 5,
              avatar: "LC"
            },
            {
              quote: "Von der Implementierung bis zum Support - alles läuft reibungslos. Absolute Empfehlung!",
              author: "Robert Wagner",
              role: "CEO",
              company: "Digital Marketing Pro",
              rating: 5,
              avatar: "RW"
            }
          ].map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden">
              <CardHeader>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-8 w-8 text-[#a1251b]/20 absolute top-4 right-4" />
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3 pt-4 border-t">
                  <div className="h-12 w-12 rounded-full bg-[#a1251b] text-white flex items-center justify-center font-semibold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );

  // FAQ Section
  const FAQSection = () => (
    <section className="py-20 md:py-32 bg-gray-50 dark:bg-gray-900/50">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-300">
            <HelpCircle className="h-3.5 w-3.5 mr-2" />
            Häufige Fragen
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            Fragen zu DSGVO-Compliance?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hier finden Sie Antworten auf die wichtigsten Fragen
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {[
              {
                question: "Wie schnell kann ich mit Marsstein DSGVO-konform werden?",
                answer: "Die meisten Unternehmen erreichen mit Marsstein innerhalb von 4 Wochen vollständige DSGVO-Compliance. Der genaue Zeitrahmen hängt von der Größe und Komplexität Ihres Unternehmens ab. Unsere KI-gestützte Analyse identifiziert sofort die wichtigsten Handlungsfelder, sodass Sie bereits ab Tag 1 Fortschritte machen."
              },
              {
                question: "Was passiert, wenn sich die DSGVO-Gesetze ändern?",
                answer: "Unser Team von Datenschutzexperten überwacht kontinuierlich alle Gesetzesänderungen. Sobald sich etwas ändert, werden Ihre Dokumente und Prozesse automatisch aktualisiert. Sie erhalten eine Benachrichtigung über die Änderungen und welche Maßnahmen erforderlich sind. So bleiben Sie immer compliant ohne zusätzlichen Aufwand."
              },
              {
                question: "Ist meine Unternehmensdaten bei Marsstein sicher?",
                answer: "Absolut. Wir verwenden Ende-zu-Ende-Verschlüsselung nach Militärstandard und speichern alle Daten in ISO 27001 zertifizierten Rechenzentren in Deutschland. Wir sind selbst DSGVO-konform und werden regelmäßig von unabhängigen Auditoren geprüft. Ihre Daten verlassen niemals die EU."
              },
              {
                question: "Kann ich Marsstein auch für internationale Compliance nutzen?",
                answer: "Ja! Während unser Fokus auf der DSGVO liegt, unterstützt Marsstein auch internationale Datenschutzgesetze wie CCPA (Kalifornien), LGPD (Brasilien) und weitere. Unsere Enterprise-Lösung kann an spezifische Anforderungen verschiedener Jurisdiktionen angepasst werden."
              },
              {
                question: "Was ist, wenn ich bereits einen Datenschutzbeauftragten habe?",
                answer: "Marsstein ist das perfekte Tool für Datenschutzbeauftragte! Es automatisiert zeitaufwändige Aufgaben, erstellt Reports auf Knopfdruck und hält alle Dokumentationen aktuell. Viele DSBs nutzen Marsstein, um ihre Effizienz zu steigern und sich auf strategische Aufgaben zu konzentrieren."
              },
              {
                question: "Gibt es eine Mindestvertragslaufzeit?",
                answer: "Nein, alle unsere Pläne sind monatlich kündbar. Wir glauben an die Qualität unserer Lösung und möchten, dass Sie aus Überzeugung bei uns bleiben, nicht aus vertraglichen Zwängen. Sie können jederzeit upgraden, downgraden oder kündigen."
              },
              {
                question: "Wie funktioniert der kostenlose Test?",
                answer: "Sie erhalten 30 Tage vollen Zugang zu allen Features des Professional-Plans - keine Kreditkarte erforderlich. Ein Onboarding-Spezialist hilft Ihnen bei der Einrichtung und Sie können sofort mit der Compliance-Analyse beginnen. Nach 30 Tagen entscheiden Sie, ob Sie weitermachen möchten."
              },
              {
                question: "Bieten Sie auch Schulungen für meine Mitarbeiter an?",
                answer: "Ja! Jeder Plan beinhaltet Zugang zu unserer DSGVO-Academy mit Video-Kursen, Webinaren und Zertifizierungen. Für Enterprise-Kunden bieten wir auch maßgeschneiderte Vor-Ort-Schulungen an. Alle Inhalte sind praxisnah und werden regelmäßig aktualisiert."
              }
            ].map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white dark:bg-gray-900 px-6 rounded-lg border-2">
                <AccordionTrigger className="text-left hover:text-[#a1251b]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">Noch Fragen? Wir sind für Sie da!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="group">
              <Phone className="mr-2 h-4 w-4 group-hover:text-[#a1251b]" />
              +49 30 12345678
            </Button>
            <Button variant="outline" className="group">
              <Mail className="mr-2 h-4 w-4 group-hover:text-[#a1251b]" />
              compliance@marsstein.de
            </Button>
            <Button variant="outline" className="group">
              <Calendar className="mr-2 h-4 w-4 group-hover:text-[#a1251b]" />
              Demo buchen
            </Button>
          </div>
        </div>
      </div>
    </section>
  );

  // Final CTA Section
  const FinalCTASection = () => (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <Card className="relative overflow-hidden border-2 border-[#a1251b]/20 bg-gradient-to-br from-[#a1251b]/5 to-purple-600/5">
          <div className="absolute inset-0 bg-grid-black/5 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          <CardContent className="relative z-10 p-12 md:p-20 text-center space-y-8">
            <Badge className="bg-[#a1251b] text-white px-6 py-2 text-base">
              <Sparkles className="h-4 w-4 mr-2" />
              Limitiertes Angebot: 50% Rabatt für die ersten 3 Monate
            </Badge>
            
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Schützen Sie Ihr Unternehmen
              <span className="block text-[#a1251b]">noch heute</span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Jeden Tag ohne vollständige DSGVO-Compliance ist ein Risiko. 
              Starten Sie jetzt und schlafen Sie ruhiger.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-[#a1251b] hover:bg-[#8a1f17] text-white px-10 py-6 text-lg">
                Jetzt kostenlos starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="px-10 py-6 text-lg group">
                <Phone className="mr-2 h-5 w-5 group-hover:text-[#a1251b]" />
                Experten-Beratung
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 max-w-3xl mx-auto">
              {[
                { icon: CheckCircle2, text: '30 Tage kostenlos testen' },
                { icon: XCircle, text: 'Keine Kreditkarte erforderlich' },
                { icon: Users, text: 'Persönlicher Onboarding-Support' }
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-center gap-3">
                  <item.icon className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );

  // Add missing import
  const HelpCircle = AlertCircle;

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <TrustSection />
        <IndustrySection />
        <BenefitsSection />
        <FeaturesShowcase />
        <HowItWorksSection />
        <DsgvoToolsSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
};

export default DsgvoCompliance;