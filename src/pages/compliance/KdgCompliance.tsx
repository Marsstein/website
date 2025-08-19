import React, { useEffect, useState } from 'react';
import SEOHead from '../../components/SEOHead';
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
  ChevronRight,
  PlayCircle,
  Download,
  Phone,
  Mail,
  Calendar,
  CheckSquare,
  XCircle,
  Rocket,
  Eye,
  Server,
  Settings,
  AlertTriangle,
  Activity,
  Cloud,
  UserCheck,
  Monitor,
  Fingerprint,
  Key,
  ShieldCheck,
  Church,
  Heart,
  Book,
  Scale,
  Gavel,
  HandHeart,
  Home,
  UserPlus,
  MessageSquare,
  BookOpen,
  Cross,
  Crown,
  Landmark
} from 'lucide-react';
import { Link } from 'react-router-dom';

const KdgCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(96);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "KDG Katholischer Datenschutz",
    "description": "KDG Compliance: Gesetz über den Kirchlichen Datenschutz der Katholischen Kirche für kirchliche Einrichtungen",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Catholic Church Data Protection Certification",
    "areaServed": "DE"
  };

  const painPoints = [
    {
      icon: Landmark,
      title: 'Diözesane Strukturen und Datenschutz',
      description: 'Komplexe Hierarchien von Bistümern, Pfarreien und kirchlichen Einrichtungen erfordern differenzierte Datenschutzkonzepte mit klaren Verantwortlichkeiten.',
      impact: 'Kritisch',
      example: 'Bistumsverwaltung, Pfarreien, Caritas, Ordensgemeinschaften, katholische Schulen'
    },
    {
      icon: Cross,
      title: 'Sakramentale Daten und Beichtgeheimnis',
      description: 'Absoluter Schutz des Beichtgeheimnisses und besondere Sensibilität bei sakramentalen Daten wie Taufe, Firmung, Ehe und Krankensalbung.',
      impact: 'Kritisch',
      example: 'Matrikelbücher, Beichtgeheimnis, Eheakten, Firmungsregister, Krankensakramente'
    },
    {
      icon: Crown,
      title: 'Kirchliches Eigenrecht und DSGVO',
      description: 'Balance zwischen kirchlichem Selbstbestimmungsrecht, kanonischem Recht und staatlichen Datenschutzanforderungen bei gleichzeitiger DSGVO-Konformität.',
      impact: 'Hoch',
      example: 'Kanonisches Recht, Konkordate, Kirchensteuer, staatskirchenrechtliche Besonderheiten'
    },
    {
      icon: HandHeart,
      title: 'Caritative und soziale Dienste',
      description: 'Besondere Datenschutzanforderungen in caritativen Einrichtungen mit sensiblen Gesundheits- und Sozialdaten von Hilfsbedürftigen.',
      impact: 'Hoch',
      example: 'Caritas-Beratungsstellen, Krankenhäuser, Pflegeheime, Sozialstationen, Flüchtlingshilfe'
    }
  ];

  const solutions = [
    {
      title: 'KDG-Datenschutzmanagement',
      description: 'Spezialisierte Datenschutzlösungen für katholische Einrichtungen nach KDG',
      features: [
        'Diözesane Datenschutzkonzepte',
        'Matrikelbuch-Digitalisierung',
        'Beichtgeheimnis-Schutz',
        'Caritas-Datenschutz'
      ],
      icon: Landmark,
      color: 'from-amber-500 to-yellow-600'
    },
    {
      title: 'Schulung für kirchliche Mitarbeiter',
      description: 'KDG-konforme Schulungen für Haupt- und Ehrenamtliche in der katholischen Kirche',
      features: [
        'KDG-Grundlagenschulungen',
        'Sakramentendaten-Schutz',
        'Pfarrbüro-Datenschutz',
        'Caritas-Mitarbeiterschulung'
      ],
      icon: BookOpen,
      color: 'from-red-500 to-rose-600'
    },
    {
      title: 'Technische Schutzmaßnahmen',
      description: 'Kirchenspezifische IT-Sicherheit für sensible Gemeinde- und Sakramentendaten',
      features: [
        'Sichere Pfarrverwaltung',
        'Matrikelbuch-Sicherheit',
        'Verschlüsselte Kommunikation',
        'Diözesane IT-Standards'
      ],
      icon: ShieldCheck,
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const useCases = [
    {
      title: 'Bistum führt KDG flächendeckend ein',
      challenge: 'Großes Bistum mit 300+ Pfarreien und diversen kirchlichen Einrichtungen benötigt einheitliche KDG-Umsetzung',
      solution: 'Diözesanes Datenschutzkonzept + Pfarrei-Templates + Multiplikatorenschulung',
      outcome: 'Vollständige KDG-Compliance in 24 Monaten, zentrale Unterstützungsstruktur etabliert',
      timeline: '24 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Caritas digitalisiert Klientenverwaltung',
      challenge: 'Caritasverband möchte Beratungsdokumentation digitalisieren unter Wahrung höchster Datenschutzstandards',
      solution: 'KDG-konforme Digitalisierung + Verschlüsselung + Zugriffskonzepte + Schulungen',
      outcome: 'Sichere digitale Klientenverwaltung mit 50% Effizienzsteigerung bei voller KDG-Compliance',
      timeline: '9 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Pfarrgemeinde modernisiert Datenverwaltung',
      challenge: 'Große Stadtpfarrei will Mitgliederverwaltung und Sakramentendokumentation KDG-konform modernisieren',
      solution: 'Pfarrverwaltungssoftware + Matrikelbuch-Digitalisierung + Datenschutzkonzept',
      outcome: 'Moderne, rechtssichere Verwaltung mit geschützten sakramentalen Daten',
      timeline: '6 Monate',
      complexity: 'Mittel'
    }
  ];

  const privacyControls = [
    {
      name: 'Sakramentale Datenverarbeitung',
      description: 'Besonderer Schutz für Taufe, Firmung, Ehe, Weihe und Krankensalbung',
      coverage: 99,
      controls: ['Matrikelbücher', 'Taufregister', 'Eheakten', 'Firmungsunterlagen', 'Weihedaten'],
      icon: Cross,
      detail: 'Unveränderliche Dokumentation sakramentaler Handlungen mit höchsten Schutzstandards'
    },
    {
      name: 'Beichtgeheimnis und Forum Internum',
      description: 'Absoluter Schutz des Beichtgeheimnisses und innerer Angelegenheiten',
      coverage: 100,
      controls: ['Beichtgeheimnis', 'Gewissensforum', 'Geistliche Begleitung'],
      icon: Lock,
      detail: 'Unverbrüchlicher Schutz des sakramentalen Bekenntnisses nach kanonischem Recht'
    },
    {
      name: 'Caritative Datenverwaltung',
      description: 'Datenschutz in karitativen und sozialen Diensten der Kirche',
      coverage: 95,
      controls: ['Klientendaten', 'Gesundheitsdaten', 'Sozialberatung', 'Hilfeleistungen'],
      icon: HandHeart,
      detail: 'Sensibler Umgang mit Daten Hilfsbedürftiger in caritativen Einrichtungen'
    },
    {
      name: 'Diözesane Verwaltung',
      description: 'Datenschutzkonforme Verwaltung auf Bistums- und Pfarreiebene',
      coverage: 93,
      controls: ['Personalakten', 'Kirchensteuer', 'Vermögensverwaltung', 'Gremienarbeit'],
      icon: Landmark,
      detail: 'Strukturierte Datenverwaltung in der komplexen katholischen Hierarchie'
    },
    {
      name: 'Digitale Seelsorge',
      description: 'Datenschutz bei digitalen Angeboten und Online-Seelsorge',
      coverage: 91,
      controls: ['Online-Beratung', 'Streaming', 'Apps', 'Soziale Medien'],
      icon: Monitor,
      detail: 'Moderne Seelsorge unter Wahrung traditioneller Vertraulichkeitsstandards'
    }
  ];

  const benefits = [
    {
      title: 'Kirchenrechtliche Konformität',
      description: 'Einhaltung von KDG und kanonischem Recht',
      metric: '100%',
      detail: 'Vollständige Übereinstimmung mit kirchlichen Vorgaben'
    },
    {
      title: 'Gläubigenvertrauen',
      description: 'Stärkung des Vertrauens durch transparenten Datenschutz',
      metric: '94%',
      detail: 'der Gläubigen vertrauen auf sicheren Umgang mit ihren Daten'
    },
    {
      title: 'Verwaltungseffizienz',
      description: 'Optimierte Prozesse in Bistümern und Pfarreien',
      metric: '45%',
      detail: 'Zeitersparnis durch standardisierte KDG-Prozesse'
    },
    {
      title: 'Risikominimierung',
      description: 'Schutz vor Datenschutzverletzungen und Imageschäden',
      metric: '€0',
      detail: 'Bußgelder durch proaktive KDG-Umsetzung'
    }
  ];

  const complianceAreas = [
    { name: 'Sakramentenschutz', coverage: 99, area: 'Kernbereich' },
    { name: 'Diözesanverwaltung', coverage: 96, area: 'Administration' },
    { name: 'Caritas-Datenschutz', coverage: 95, area: 'Soziale Dienste' },
    { name: 'Digitale Pastoral', coverage: 91, area: 'Moderne Seelsorge' }
  ];

  return (
    <>
      <SEOHead
        title="KDG – Kirchlicher Datenschutz der Katholischen Kirche"
        description="KDG Compliance für katholische Einrichtungen: Kirchliches Datenschutzgesetz umsetzen. ✓ Beichtgeheimnis ✓ Sakramentenschutz ✓ Caritas-Datenschutz"
        canonical="/kdg"
        keywords="KDG, Katholischer Datenschutz, Katholische Kirche, Kirchendatenschutz, Bistum Datenschutz"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <div className="container px-4">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <motion.div 
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400">
                    <Cross className="h-4 w-4" />
                    <span className="text-sm font-medium">Katholischer Datenschutz</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    KDG Compliance
                    <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent block mt-2">
                      für Ihre Diözese
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Kirchliches Datenschutzgesetz der katholischen Kirche rechtssicher umsetzen. 
                    Schützen Sie sakramentale Daten und wahren Sie das Beichtgeheimnis.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                      <span>Diözesane Datenschutzkonzepte</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                      <span>Schutz sakramentaler Daten</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-amber-600 flex-shrink-0" />
                      <span>Expertise im kanonischen Recht</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/contact?demo=true&framework=kdg">
                      <Button size="lg" className="bg-gradient-to-r from-amber-600 to-yellow-600 text-white hover:opacity-90 group">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        KDG Beratung
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <Download className="mr-2 h-5 w-5" />
                      KDG Leitfaden
                    </Button>
                  </div>
                </motion.div>

                {/* KDG Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <Card className="p-6 shadow-2xl border-2 border-amber-200 dark:border-amber-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Katholischer Datenschutz-Status</h3>
                        <Badge className="bg-amber-100 text-amber-700">KDG konform</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Card className="p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <Cross className="h-5 w-5 text-amber-600" />
                            <span className="text-2xl font-bold text-amber-700">{complianceScore}%</span>
                          </div>
                          <p className="text-sm font-medium">Compliance Score</p>
                          <div className="w-full bg-amber-200 rounded-full h-2 mt-2">
                            <motion.div 
                              className="bg-amber-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: isVisible ? `${complianceScore}%` : 0 }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                            />
                          </div>
                        </Card>

                        <Card className="p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/20 dark:to-yellow-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <Users className="h-5 w-5 text-yellow-600" />
                            <span className="text-2xl font-bold text-yellow-700">12.1M</span>
                          </div>
                          <p className="text-sm font-medium">Katholiken geschützt</p>
                          <div className="flex items-center gap-1 mt-2">
                            <CheckCircle2 className="h-3 w-3 text-green-600" />
                            <span className="text-xs text-yellow-600">27 Bistümer</span>
                          </div>
                        </Card>
                      </div>

                      <div className="space-y-3">
                        {complianceAreas.map((area, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span>{area.name}</span>
                              <div className="flex items-center gap-2">
                                <Badge variant="outline" className="text-xs">{area.area}</Badge>
                                <span className="font-semibold">{area.coverage}%</span>
                              </div>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <motion.div 
                                className="bg-amber-600 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: isVisible ? `${area.coverage}%` : 0 }}
                                transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>

                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-amber-500 animate-bounce">
                    <div className="flex items-center gap-2">
                      <Landmark className="h-4 w-4 text-amber-500" />
                      <span className="text-sm font-medium">Bistums-Ready</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Herausforderungen im katholischen Datenschutz
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Spezifische Anforderungen für Bistümer, Pfarreien und kirchliche Einrichtungen
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {painPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <point.icon className="h-6 w-6 text-amber-600" />
                            <div>
                              <h3 className="font-bold">{point.title}</h3>
                              <Badge 
                                variant={point.impact === 'Kritisch' ? 'destructive' : point.impact === 'Hoch' ? 'default' : 'secondary'}
                                className="text-xs mt-1"
                              >
                                {point.impact}
                              </Badge>
                            </div>
                          </div>
                        </div>
                        
                        <p className="text-gray-600 dark:text-gray-400">
                          {point.description}
                        </p>
                        
                        <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Beispiele:</span> {point.example}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Privacy Controls Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  KDG Datenschutz-Kontrollen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Spezifische Schutzmaßnahmen für katholische Datenverarbeitung
                </p>
              </div>

              <div className="space-y-8">
                {privacyControls.map((control, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-8 hover:shadow-xl transition-all duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                        <div className="lg:col-span-2">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                              <control.icon className="h-6 w-6 text-amber-600" />
                            </div>
                            <div>
                              <h3 className="text-xl font-bold">{control.name}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {control.description}
                              </p>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                            {control.detail}
                          </p>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                          {control.controls.map((controlItem, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {controlItem}
                            </Badge>
                          ))}
                        </div>
                        
                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">Umsetzung</span>
                            <span className="font-semibold text-amber-600">{control.coverage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <motion.div 
                              className="bg-gradient-to-r from-amber-500 to-yellow-600 h-3 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${control.coverage}%` }}
                              transition={{ duration: 1.2, delay: 0.3 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <Badge className="bg-amber-100 text-amber-700 text-sm px-4 py-2">
                            <CheckCircle2 className="h-4 w-4 mr-2" />
                            Aktiv
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Section */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  KDG Lösungsansätze
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Maßgeschneiderte Datenschutzkonzepte für katholische Einrichtungen
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {solutions.map((solution, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full">
                      <div className="space-y-4">
                        <div className={cn(
                          "inline-flex p-3 rounded-xl bg-gradient-to-r text-white",
                          solution.color
                        )}>
                          <solution.icon className="h-6 w-6" />
                        </div>

                        <h3 className="text-xl font-bold">{solution.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          {solution.description}
                        </p>

                        <div className="space-y-3 pt-2">
                          {solution.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-3 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  KDG in der Praxis
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Erfolgreiche Umsetzungen in katholischen Einrichtungen
                </p>
              </div>

              <div className="space-y-6">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300">
                      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                        <div>
                          <h3 className="text-lg font-bold mb-2 text-amber-700">{useCase.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Herausforderung:</span> {useCase.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm">
                            <span className="font-medium text-amber-700">Lösung:</span> {useCase.solution}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-green-700">
                            {useCase.outcome}
                          </p>
                        </div>
                        
                        <div className="flex flex-col gap-2">
                          <Badge variant="outline" className="text-xs">
                            {useCase.timeline}
                          </Badge>
                          <Badge 
                            variant={useCase.complexity === 'Hoch' ? 'destructive' : useCase.complexity === 'Mittel' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {useCase.complexity}
                          </Badge>
                        </div>
                        
                        <div className="text-center">
                          <CheckCircle2 className="h-8 w-8 text-amber-600 mx-auto" />
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Vorteile der KDG Compliance
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Messbare Erfolge für Ihre katholische Einrichtung
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105">
                      <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                        {benefit.metric}
                      </div>
                      <div className="font-semibold mb-2">{benefit.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {benefit.description}
                      </div>
                      <div className="text-xs text-amber-600 font-medium">
                        {benefit.detail}
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-amber-600 to-yellow-600">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Katholischer Datenschutz mit Expertise
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Setzen Sie das KDG rechtssicher um. Schützen Sie sakramentale Daten und 
                  wahren Sie das Beichtgeheimnis mit professioneller Unterstützung.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact?demo=true&framework=kdg">
                    <Button 
                      size="lg" 
                      className="bg-white text-amber-600 hover:bg-gray-100 group"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      KDG Beratungstermin
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="bg-transparent text-white border-white hover:bg-white/10"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Kostenlose Erstberatung
                  </Button>
                </div>

                <div className="mt-8 flex items-center justify-center gap-2 text-white/80">
                  <Sparkles className="h-4 w-4" />
                  <span className="text-sm">
                    Spezialisiert auf katholische Datenschutzanforderungen seit 2018
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
    </>
  );
};

export default KdgCompliance;