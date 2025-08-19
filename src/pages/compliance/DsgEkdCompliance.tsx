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
  BookOpen
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DsgEkdCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(97);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DSG-EKD Kirchlicher Datenschutz",
    "description": "DSG-EKD Compliance: Datenschutzgesetz der Evangelischen Kirche in Deutschland für kirchliche Einrichtungen",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Church Data Protection Certification",
    "areaServed": "DE"
  };

  const painPoints = [
    {
      icon: Church,
      title: 'Kirchliche Besonderheiten im Datenschutz',
      description: 'Spezifische Anforderungen für Gemeindedaten, Seelsorgegeheimnisse und kirchliche Amtshandlungen unter Berücksichtigung des kirchlichen Selbstbestimmungsrechts.',
      impact: 'Kritisch',
      example: 'Taufregister, Mitgliederdaten, Seelsorgeunterlagen, Gemeindebriefe'
    },
    {
      icon: HandHeart,
      title: 'Sensible Daten in der Seelsorge',
      description: 'Besonders schützenswerte Daten aus Seelsorge, Beratung und diakonischen Diensten erfordern höchste Vertraulichkeit und spezielle Schutzmaßnahmen.',
      impact: 'Kritisch',
      example: 'Beichtgeheimnisse, Beratungsprotokolle, Gesundheitsdaten in kirchlichen Einrichtungen'
    },
    {
      icon: Building2,
      title: 'Komplexe Kirchenstrukturen',
      description: 'Vielschichtige Organisationsstrukturen von Landeskirchen über Gemeinden bis zu diakonischen Werken erschweren einheitliche Datenschutzprozesse.',
      impact: 'Hoch',
      example: 'Landeskirchen, Kirchengemeinden, Diakonie, kirchliche Stiftungen'
    },
    {
      icon: Scale,
      title: 'Balance zwischen Transparenz und Schutz',
      description: 'Spannungsfeld zwischen kirchlicher Öffentlichkeitsarbeit, Gemeindearbeit und dem Schutz personenbezogener Daten der Gemeindemitglieder.',
      impact: 'Hoch',
      example: 'Gemeindebriefe, Jubiläumslisten, Fotorechte bei Veranstaltungen, Online-Gottesdienste'
    }
  ];

  const solutions = [
    {
      title: 'Kirchliches Datenschutz-Management',
      description: 'Maßgeschneiderte Datenschutzkonzepte für kirchliche Einrichtungen nach DSG-EKD',
      features: [
        'Kirchenspezifische Verfahrensverzeichnisse',
        'Seelsorge-Datenschutzkonzepte',
        'Gemeindedaten-Management',
        'Digitale Kirchenbuch-Sicherheit'
      ],
      icon: Church,
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Schulung & Sensibilisierung',
      description: 'Praxisorientierte Schulungen für Haupt- und Ehrenamtliche in kirchlichen Einrichtungen',
      features: [
        'DSG-EKD Grundlagenschulungen',
        'Seelsorge & Datenschutz Workshops',
        'Ehrenamtlichen-Sensibilisierung',
        'Kirchenvorstands-Briefings'
      ],
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Technische & Organisatorische Maßnahmen',
      description: 'Kirchengerechte TOM für den Schutz sensibler Gemeinde- und Seelsorgedaten',
      features: [
        'Sichere Gemeinde-Software',
        'Verschlüsselte Seelsorge-Kommunikation',
        'Kirchenbuch-Digitalisierung',
        'Backup-Konzepte für Gemeindedaten'
      ],
      icon: ShieldCheck,
      color: 'from-green-500 to-emerald-600'
    }
  ];

  const useCases = [
    {
      title: 'Landeskirche implementiert DSG-EKD',
      challenge: 'Evangelische Landeskirche mit 500+ Gemeinden benötigt einheitliche DSG-EKD Umsetzung',
      solution: 'Zentrales Datenschutzmanagement + Gemeinde-Templates + Schulungsprogramm',
      outcome: 'Flächendeckende DSG-EKD Compliance in 18 Monaten, 95% Zufriedenheit',
      timeline: '18 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Diakonisches Werk digitalisiert Datenschutz',
      challenge: 'Großes diakonisches Werk mit Gesundheits- und Sozialdaten benötigt moderne Datenschutzlösung',
      solution: 'Integriertes DSG-EKD System + Gesundheitsdaten-Schutz + Mitarbeiterschulung',
      outcome: 'Rechtssichere Digitalisierung, 60% Effizienzsteigerung bei Datenschutzprozessen',
      timeline: '12 Monate',
      complexity: 'Hoch'
    },
    {
      title: 'Kirchengemeinde meistert Online-Präsenz',
      challenge: 'Mittelgroße Gemeinde möchte digitale Angebote DSG-EKD-konform gestalten',
      solution: 'Website-Audit + Streaming-Konzept + Datenschutzerklärung + Cookie-Management',
      outcome: 'Rechtssichere Online-Präsenz mit Live-Gottesdiensten und digitalem Gemeindeleben',
      timeline: '3 Monate',
      complexity: 'Mittel'
    }
  ];

  const privacyControls = [
    {
      name: 'Kirchliche Datenverarbeitung',
      description: 'Spezifische Regelungen für Sakramente, Amtshandlungen und Gemeindeleben',
      coverage: 98,
      controls: ['Taufdaten', 'Konfirmation', 'Trauung', 'Bestattung', 'Mitgliederverwaltung'],
      icon: Church,
      detail: 'Besondere Verfahren für kirchliche Amtshandlungen und deren lebenslange Dokumentation'
    },
    {
      name: 'Seelsorgegeheimnis',
      description: 'Absoluter Schutz seelsorgerlicher Kommunikation und Beratung',
      coverage: 100,
      controls: ['Beichtgeheimnis', 'Seelsorgegespräche', 'Vertrauliche Beratung'],
      icon: Heart,
      detail: 'Höchste Vertraulichkeitsstufe für alle seelsorgerlichen Tätigkeiten'
    },
    {
      name: 'Ehrenamtlichen-Datenschutz',
      description: 'Datenschutz-Compliance für ehrenamtlich Tätige in der Kirche',
      coverage: 94,
      controls: ['Verpflichtungserklärungen', 'Schulungen', 'Zugriffskontrollen'],
      icon: UserPlus,
      detail: 'Strukturierte Einbindung Ehrenamtlicher in kirchliche Datenschutzprozesse'
    },
    {
      name: 'Gemeindekommunikation',
      description: 'Datenschutzkonforme interne und externe Kommunikation',
      coverage: 92,
      controls: ['Gemeindebriefe', 'Newsletter', 'Soziale Medien', 'Aushänge'],
      icon: MessageSquare,
      detail: 'Balance zwischen lebendiger Gemeindekommunikation und Datenschutz'
    },
    {
      name: 'Kirchenbuchführung',
      description: 'Sichere Verwaltung historischer und aktueller Kirchenbücher',
      coverage: 96,
      controls: ['Digitalisierung', 'Archivierung', 'Zugriffskontrolle', 'Langzeitspeicherung'],
      icon: Book,
      detail: 'Jahrhundertealte Kirchenbücher sicher in die digitale Zukunft führen'
    }
  ];

  const benefits = [
    {
      title: 'Kirchliche Autonomie',
      description: 'Wahrung des kirchlichen Selbstbestimmungsrechts',
      metric: '100%',
      detail: 'DSG-EKD-konform unter Beachtung kirchlicher Besonderheiten'
    },
    {
      title: 'Vertrauensschutz',
      description: 'Stärkung des Vertrauens in kirchliche Einrichtungen',
      metric: '95%',
      detail: 'der Gemeindemitglieder vertrauen auf sicheren Datenschutz'
    },
    {
      title: 'Prozesseffizienz',
      description: 'Optimierte Verwaltungsabläufe durch klare Datenschutzregeln',
      metric: '40%',
      detail: 'Zeitersparnis durch standardisierte Datenschutzprozesse'
    },
    {
      title: 'Rechtssicherheit',
      description: 'Schutz vor Bußgeldern und Reputationsschäden',
      metric: '€0',
      detail: 'Bußgelder durch proaktive DSG-EKD Compliance'
    }
  ];

  const complianceAreas = [
    { name: 'Seelsorgedaten-Schutz', coverage: 100, area: 'Kernbereich' },
    { name: 'Mitgliederverwaltung', coverage: 98, area: 'Administration' },
    { name: 'Ehrenamtlichen-Compliance', coverage: 94, area: 'Personal' },
    { name: 'Digitale Kirchendienste', coverage: 92, area: 'Innovation' }
  ];

  return (
    <>
      <SEOHead
        title="DSG-EKD – Kirchlicher Datenschutz der Evangelischen Kirche"
        description="DSG-EKD Compliance für kirchliche Einrichtungen: Datenschutzgesetz der EKD umsetzen. ✓ Seelsorgegeheimnis ✓ Gemeindedaten ✓ Kirchliche Autonomie"
        canonical="/compliance/dsg-ekd"
        keywords="DSG-EKD, Kirchlicher Datenschutz, Evangelische Kirche, EKD Datenschutz, Kirchendatenschutz"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
        <Header />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
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
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400">
                    <Church className="h-4 w-4" />
                    <span className="text-sm font-medium">Kirchlicher Datenschutz</span>
                  </div>
                  
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    DSG-EKD Compliance
                    <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent block mt-2">
                      für Ihre Kirche
                    </span>
                  </h1>
                  
                  <p className="text-xl text-gray-600 dark:text-gray-300">
                    Datenschutzgesetz der Evangelischen Kirche rechtssicher umsetzen. 
                    Schützen Sie Gemeindedaten, wahren Sie das Seelsorgegeheimnis.
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span>Kirchenspezifische Datenschutzlösungen</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span>Seelsorgegeheimnis & Vertraulichkeit</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 flex-shrink-0" />
                      <span>Beratung durch kirchenerfahrene Experten</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/contact?demo=true&framework=dsg-ekd">
                      <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:opacity-90 group">
                        <PlayCircle className="mr-2 h-5 w-5" />
                        DSG-EKD Beratung
                        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Button size="lg" variant="outline" className="group">
                      <Download className="mr-2 h-5 w-5" />
                      DSG-EKD Leitfaden
                    </Button>
                  </div>
                </motion.div>

                {/* DSG-EKD Dashboard */}
                <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative"
                >
                  <Card className="p-6 shadow-2xl border-2 border-purple-200 dark:border-purple-800">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-bold text-lg">Kirchlicher Datenschutz-Status</h3>
                        <Badge className="bg-purple-100 text-purple-700">DSG-EKD konform</Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Card className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <Church className="h-5 w-5 text-purple-600" />
                            <span className="text-2xl font-bold text-purple-700">{complianceScore}%</span>
                          </div>
                          <p className="text-sm font-medium">Compliance Score</p>
                          <div className="w-full bg-purple-200 rounded-full h-2 mt-2">
                            <motion.div 
                              className="bg-purple-600 h-2 rounded-full"
                              initial={{ width: 0 }}
                              animate={{ width: isVisible ? `${complianceScore}%` : 0 }}
                              transition={{ duration: 1.5, delay: 0.5 }}
                            />
                          </div>
                        </Card>

                        <Card className="p-4 bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/20 dark:to-violet-900/20">
                          <div className="flex items-center justify-between mb-2">
                            <Users className="h-5 w-5 text-violet-600" />
                            <span className="text-2xl font-bold text-violet-700">15k+</span>
                          </div>
                          <p className="text-sm font-medium">Geschützte Mitglieder</p>
                          <div className="flex items-center gap-1 mt-2">
                            <CheckCircle2 className="h-3 w-3 text-green-600" />
                            <span className="text-xs text-violet-600">Seelsorgegeheimnis</span>
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
                                className="bg-purple-600 h-2 rounded-full"
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

                  <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-purple-500 animate-bounce">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-purple-500" />
                      <span className="text-sm font-medium">Vertrauensvoll</span>
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
                  Herausforderungen im kirchlichen Datenschutz
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Besondere Anforderungen für Kirchen und kirchliche Einrichtungen
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
                            <point.icon className="h-6 w-6 text-purple-600" />
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
                  DSG-EKD Datenschutz-Kontrollen
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Spezifische Schutzmaßnahmen für kirchliche Datenverarbeitung
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
                            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                              <control.icon className="h-6 w-6 text-purple-600" />
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
                            <span className="font-semibold text-purple-600">{control.coverage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <motion.div 
                              className="bg-gradient-to-r from-purple-500 to-violet-600 h-3 rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${control.coverage}%` }}
                              transition={{ duration: 1.2, delay: 0.3 }}
                              viewport={{ once: true }}
                            />
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <Badge className="bg-purple-100 text-purple-700 text-sm px-4 py-2">
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
                  DSG-EKD Lösungsansätze
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Maßgeschneiderte Datenschutzkonzepte für Ihre kirchliche Einrichtung
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
                              <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
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
                  DSG-EKD in der Praxis
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Erfolgreiche Umsetzungen in kirchlichen Einrichtungen
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
                          <h3 className="text-lg font-bold mb-2 text-purple-700">{useCase.title}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Herausforderung:</span> {useCase.challenge}
                          </p>
                        </div>
                        
                        <div>
                          <p className="text-sm">
                            <span className="font-medium text-purple-700">Lösung:</span> {useCase.solution}
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
                          <CheckCircle2 className="h-8 w-8 text-purple-600 mx-auto" />
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
        <section className="py-20 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20">
          <div className="container px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Vorteile der DSG-EKD Compliance
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Messbare Erfolge für Ihre kirchliche Einrichtung
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
                      <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                        {benefit.metric}
                      </div>
                      <div className="font-semibold mb-2">{benefit.title}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {benefit.description}
                      </div>
                      <div className="text-xs text-purple-600 font-medium">
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
        <section className="py-20 bg-gradient-to-r from-purple-600 to-violet-600">
          <div className="container px-4">
            <div className="max-w-4xl mx-auto text-center text-white">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Kirchlicher Datenschutz mit Expertise
                </h2>
                <p className="text-xl mb-8 text-white/90">
                  Setzen Sie das DSG-EKD rechtssicher um. Schützen Sie Gemeindedaten und 
                  wahren Sie das Vertrauen Ihrer Mitglieder mit professioneller Unterstützung.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact?demo=true&framework=dsg-ekd">
                    <Button 
                      size="lg" 
                      className="bg-white text-purple-600 hover:bg-gray-100 group"
                    >
                      <Calendar className="mr-2 h-5 w-5" />
                      DSG-EKD Beratungstermin
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
                    Spezialisiert auf kirchliche Datenschutzanforderungen seit 2018
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

export default DsgEkdCompliance;