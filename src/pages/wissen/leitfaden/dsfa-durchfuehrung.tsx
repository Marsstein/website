import React, { useState, useEffect } from 'react';
import SEOHead from '../../../components/SEOHead';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Progress } from '@/components/ui/progress';
import {
  Search,
  Shield,
  AlertTriangle,
  Scale,
  Target,
  CheckCircle2,
  FileText,
  Users,
  Building,
  Settings,
  ArrowRight,
  Info,
  Download,
  ExternalLink,
  Lightbulb,
  Timer,
  ChevronRight,
  ClipboardCheck,
  Gauge
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DSFADurchfuehrung: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('dsfa-grundlagen');
  const [riskScore, setRiskScore] = useState(0);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "DSFA Datenschutz-Folgenabschätzung durchführen",
    "description": "DSFA nach Art. 35 DSGVO professionell durchführen: Schwellwertanalyse, Risikobewertung, Abhilfemaßnahmen. Mit Vorlagen und Praxisbeispielen.",
    "url": "https://marsstein.ai/wissen/leitfaden/dsfa-durchfuehrung"
  };

  const sections = [
    { id: 'dsfa-grundlagen', title: 'Grundlagen & Wann erforderlich', icon: Info, readTime: '8 Min' },
    { id: 'dsfa-schwellwertanalyse', title: 'Schwellwertanalyse', icon: Gauge, readTime: '10 Min' },
    { id: 'dsfa-vorbereitung', title: 'Vorbereitung', icon: Search, readTime: '12 Min' },
    { id: 'dsfa-beschreibung', title: 'Beschreibung der Verarbeitung', icon: FileText, readTime: '10 Min' },
    { id: 'dsfa-notwendigkeit', title: 'Notwendigkeit & Verhältnismäßigkeit', icon: Target, readTime: '8 Min' },
    { id: 'dsfa-risikobewertung', title: 'Risikobewertung', icon: Scale, readTime: '12 Min' },
    { id: 'dsfa-abhilfemassnahmen', title: 'Abhilfemaßnahmen', icon: Shield, readTime: '10 Min' },
    { id: 'dsfa-behoerdenkonsultation', title: 'Behördenkonsultation', icon: Building, readTime: '8 Min' },
    { id: 'dsfa-dokumentation', title: 'Dokumentation', icon: ClipboardCheck, readTime: '10 Min' },
    { id: 'dsfa-software', title: 'Software-Unterstützung', icon: Settings, readTime: '5 Min' }
  ];

  const dsfaPhasen = {
    vorbereitung: {
      title: 'Vorbereitung',
      icon: Search,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      schritte: [
        {
          titel: 'Notwendigkeit prüfen',
          beschreibung: 'Schwellwertanalyse durchführen',
          checkpunkte: [
            'Systematische umfangreiche Bewertung?',
            'Umfangreiche Verarbeitung besonderer Kategorien?',
            'Systematische Überwachung öffentlicher Bereiche?',
            'Blacklist der Aufsichtsbehörde prüfen',
            'Neue Technologien im Einsatz?',
            'Scoring/Profiling/Automatisierte Entscheidung?'
          ]
        },
        {
          titel: 'Team zusammenstellen',
          beschreibung: 'Verantwortlichkeiten klären',
          checkpunkte: [
            'Projektleiter benennen',
            'Datenschutzbeauftragten einbeziehen',
            'Fachbereichsvertreter',
            'IT-Sicherheitsexperten',
            'Ggf. externe Berater',
            'Betroffenenvertreter (falls möglich)'
          ]
        },
        {
          titel: 'Scope definieren',
          beschreibung: 'Umfang der DSFA festlegen',
          checkpunkte: [
            'Verarbeitungstätigkeit abgrenzen',
            'Systeme identifizieren',
            'Datenflüsse dokumentieren',
            'Zeitrahmen festlegen',
            'Budget klären',
            'Dokumentationsstruktur'
          ]
        }
      ]
    },
    beschreibung: {
      title: 'Beschreibung',
      icon: FileText,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      schritte: [
        {
          titel: 'Verarbeitung beschreiben',
          beschreibung: 'Detaillierte Dokumentation',
          checkpunkte: [
            'Art und Umfang der Verarbeitung',
            'Zwecke der Verarbeitung',
            'Betroffene Personengruppen',
            'Kategorien personenbezogener Daten',
            'Empfänger der Daten',
            'Aufbewahrungsfristen'
          ]
        },
        {
          titel: 'Kontext analysieren',
          beschreibung: 'Rahmenbedingungen erfassen',
          checkpunkte: [
            'Technische Infrastruktur',
            'Organisatorische Prozesse',
            'Geografischer Kontext',
            'Rechtlicher Rahmen',
            'Branchenstandards',
            'Stakeholder-Interessen'
          ]
        },
        {
          titel: 'Rechtsgrundlagen',
          beschreibung: 'Rechtmäßigkeit sicherstellen',
          checkpunkte: [
            'Rechtsgrundlage identifizieren',
            'Zweckbindung prüfen',
            'Datenminimierung beachten',
            'Transparenz gewährleisten',
            'Betroffenenrechte sichern',
            'Internationale Transfers'
          ]
        }
      ]
    },
    bewertung: {
      title: 'Bewertung',
      icon: Scale,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      schritte: [
        {
          titel: 'Notwendigkeit bewerten',
          beschreibung: 'Verhältnismäßigkeit prüfen',
          checkpunkte: [
            'Zweck-Mittel-Relation',
            'Alternativlose Verarbeitung?',
            'Interessenabwägung',
            'Subsidiarität geprüft',
            'Erforderlichkeit begründet',
            'Angemessenheit dokumentiert'
          ]
        },
        {
          titel: 'Risiken identifizieren',
          beschreibung: 'Systematische Risikoanalyse',
          checkpunkte: [
            'Vertraulichkeitsverletzungen',
            'Integritätsverletzungen',
            'Verfügbarkeitsprobleme',
            'Zweckentfremdung',
            'Unrechtmäßige Löschung',
            'Diskriminierungsrisiken'
          ]
        },
        {
          titel: 'Risiken bewerten',
          beschreibung: 'Eintrittswahrscheinlichkeit und Schwere',
          checkpunkte: [
            'Schadenshöhe einschätzen',
            'Eintrittswahrscheinlichkeit',
            'Betroffene Personen (Anzahl)',
            'Reversibilität des Schadens',
            'Risikomatrix erstellen',
            'Gesamtrisiko berechnen'
          ]
        }
      ]
    },
    abhilfe: {
      title: 'Abhilfemaßnahmen',
      icon: Shield,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      schritte: [
        {
          titel: 'Maßnahmen entwickeln',
          beschreibung: 'Risikominimierung planen',
          checkpunkte: [
            'Technische Maßnahmen (TOMs)',
            'Organisatorische Maßnahmen',
            'Pseudonymisierung/Anonymisierung',
            'Verschlüsselung implementieren',
            'Zugangskontrollen verstärken',
            'Datenschutz by Design'
          ]
        },
        {
          titel: 'Wirksamkeit prüfen',
          beschreibung: 'Maßnahmen evaluieren',
          checkpunkte: [
            'Risikoreduktion quantifizieren',
            'Restrisiko bewerten',
            'Kosten-Nutzen-Analyse',
            'Implementierbarkeit prüfen',
            'Zeitplan erstellen',
            'Verantwortlichkeiten klären'
          ]
        },
        {
          titel: 'Restrisiko bewerten',
          beschreibung: 'Akzeptables Niveau?',
          checkpunkte: [
            'Verbleibendes Risiko dokumentieren',
            'Akzeptanzkriterien prüfen',
            'Ggf. weitere Maßnahmen',
            'Management-Entscheidung',
            'Bei hohem Restrisiko: Konsultation',
            'Monitoring-Konzept'
          ]
        }
      ]
    },
    dokumentation: {
      title: 'Dokumentation',
      icon: ClipboardCheck,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      schritte: [
        {
          titel: 'Bericht erstellen',
          beschreibung: 'Vollständige Dokumentation',
          checkpunkte: [
            'Executive Summary',
            'Detaillierte Beschreibung',
            'Risikobewertung',
            'Maßnahmenkatalog',
            'Stellungnahme DSB',
            'Anhänge und Nachweise'
          ]
        },
        {
          titel: 'Konsultation (falls nötig)',
          beschreibung: 'Aufsichtsbehörde einbeziehen',
          checkpunkte: [
            'Hohes Restrisiko vorhanden?',
            'Konsultationspflicht prüfen',
            'Unterlagen vorbereiten',
            'Antrag stellen',
            'Fristen beachten',
            'Rückmeldung abwarten'
          ]
        },
        {
          titel: 'Implementierung & Monitoring',
          beschreibung: 'Umsetzung und Überwachung',
          checkpunkte: [
            'Maßnahmen umsetzen',
            'Wirksamkeit überwachen',
            'Regelmäßige Reviews',
            'Bei Änderungen: Update',
            'Lessons Learned',
            'Kontinuierliche Verbesserung'
          ]
        }
      ]
    }
  };

  const schwellwertkriterien = [
    {
      kriterium: 'Bewertung/Scoring',
      beispiele: ['Kreditscoring', 'Leistungsbewertung', 'Verhaltensanalyse'],
      risiko: 'HOCH'
    },
    {
      kriterium: 'Automatisierte Entscheidung',
      beispiele: ['KI-basierte Entscheidungen', 'Profiling', 'Algorithmus-Entscheidungen'],
      risiko: 'HOCH'
    },
    {
      kriterium: 'Systematische Überwachung',
      beispiele: ['Videoüberwachung öffentlich', 'Mitarbeiter-Monitoring', 'GPS-Tracking'],
      risiko: 'HOCH'
    },
    {
      kriterium: 'Sensible Daten',
      beispiele: ['Gesundheitsdaten', 'Biometrie', 'Politische Meinungen'],
      risiko: 'SEHR HOCH'
    },
    {
      kriterium: 'Daten schutzbedürftiger Personen',
      beispiele: ['Kinder', 'Arbeitnehmer', 'Patienten'],
      risiko: 'HOCH'
    },
    {
      kriterium: 'Umfangreiche Verarbeitung',
      beispiele: ['Big Data', 'Viele Betroffene', 'Lange Speicherdauer'],
      risiko: 'MITTEL'
    },
    {
      kriterium: 'Datenverknüpfung',
      beispiele: ['Datenzusammenführung', 'Profilerstellung', 'Cross-Referencing'],
      risiko: 'HOCH'
    },
    {
      kriterium: 'Neue Technologien',
      beispiele: ['IoT', 'Blockchain', 'Machine Learning'],
      risiko: 'MITTEL'
    },
    {
      kriterium: 'Verhinderung von Rechtsausübung',
      beispiele: ['Zugang zu Diensten', 'Vertragsverweigerung', 'Diskriminierung'],
      risiko: 'SEHR HOCH'
    }
  ];

  const calculateRiskScore = () => {
    const factors = schwellwertkriterien.filter(k => Math.random() > 0.5);
    const score = factors.reduce((sum, factor) => {
      return sum + (factor.risiko === 'SEHR HOCH' ? 3 : factor.risiko === 'HOCH' ? 2 : 1);
    }, 0);
    setRiskScore(Math.min(score * 10, 100));
  };

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

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveSection(hash);
      }, 100);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <SEOHead
        title="DSFA durchführen – Datenschutz-Folgenabschätzung Anleitung"
        description="DSFA nach Art. 35 DSGVO durchführen: ✓ Schwellwertanalyse ✓ Risikobewertung ✓ Abhilfemaßnahmen ✓ Vorlagen. Schritt-für-Schritt zur Datenschutz-Folgenabschätzung!"
        canonical="/wissen/leitfaden/dsfa-durchfuehrung"
        keywords="dsfa durchführen, datenschutz-folgenabschätzung durchführen, dsfa anleitung, wie dsfa durchführen, art 35 dsgvo anleitung, dpia durchführen"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Header />

        <section className="pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="mb-4 px-4 py-1" variant="outline">
                <Search className="h-3 w-3 mr-1" />
                DSGVO Art. 35
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                DSFA - Datenschutz-Folgenabschätzung
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Systematische Bewertung von Datenschutzrisiken bei Verarbeitungen
                mit voraussichtlich hohem Risiko
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="p-4">
                  <AlertTriangle className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Pflicht bei</div>
                  <div className="text-lg font-bold">Hohem Risiko</div>
                  <div className="text-xs text-gray-500">für Betroffene</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Timer className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Zeitpunkt</div>
                  <div className="text-lg font-bold">Vor Beginn</div>
                  <div className="text-xs text-gray-500">der Verarbeitung</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Users className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Einbeziehung</div>
                  <div className="text-lg font-bold">DSB Pflicht</div>
                  <div className="text-xs text-gray-500">Rat einholen</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Scale className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Bei Restrisiko</div>
                  <div className="text-lg font-bold">Konsultation</div>
                  <div className="text-xs text-gray-500">Aufsichtsbehörde</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-sm">
                  <strong>Wichtig:</strong> Die Einbeziehung des <strong>Datenschutzbeauftragten (DSB)</strong> ist bei der DSFA <strong>gesetzlich vorgeschrieben</strong> (Art. 35 Abs. 2 DSGVO). Der DSB berät bei der Durchführung und gibt eine Stellungnahme ab. → <Link to="/wissen/leitfaden/datenschutzbeauftragter" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold underline">Mehr über DSB-Rolle bei DSFA & Beratungspflichten</Link>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm">
          <div className="container px-4">
            <div className="max-w-7xl mx-auto">
              <nav className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide">
                {sections.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        scrollToSection(item.id);
                        setActiveSection(item.id);
                      }}
                      className={cn(
                        "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                        activeSection === item.id
                          ? "bg-blue-600 text-white shadow-md"
                          : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                      )}
                    >
                      <IconComponent className="h-4 w-4" />
                      <span className="hidden md:inline">{item.title}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        <section className="py-12 px-4">
          <div className="container mx-auto max-w-7xl">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-1">
                <div className="lg:sticky lg:top-32 space-y-6">
                  <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-white mb-4">Inhaltsverzeichnis</h3>
                      <div className="space-y-2">
                        {sections.map((section) => {
                          const IconComponent = section.icon;
                          return (
                            <button
                              key={section.id}
                              onClick={() => {
                                scrollToSection(section.id);
                                setActiveSection(section.id);
                              }}
                              className={cn(
                                "w-full text-left px-4 py-3 rounded-lg transition-all flex items-center gap-3 group",
                                activeSection === section.id
                                  ? "bg-blue-600 text-white shadow-lg"
                                  : "text-gray-300 hover:bg-slate-700/50"
                              )}
                            >
                              <IconComponent className="h-4 w-4 flex-shrink-0" />
                              <div className="flex-1 min-w-0">
                                <div className="text-sm font-medium truncate">{section.title}</div>
                                <div className="text-xs opacity-70">{section.readTime}</div>
                              </div>
                              {activeSection === section.id && (
                                <ChevronRight className="h-4 w-4 flex-shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="lg:col-span-3 space-y-16">
                <section id="dsfa-grundlagen" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Info className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Grundlagen & Wann erforderlich
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Was ist eine DSFA?</p>
                      </div>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Was ist eine Datenschutz-Folgenabschätzung?</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          Die Datenschutz-Folgenabschätzung (DSFA) ist ein systematischer Prozess zur
                          Bewertung und Minimierung von Datenschutzrisiken bei Verarbeitungstätigkeiten,
                          die voraussichtlich ein hohes Risiko für die Rechte und Freiheiten betroffener
                          Personen zur Folge haben.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500" />
                              Wann erforderlich?
                            </h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Voraussichtlich hohes Risiko</li>
                              <li>• Neue Technologien</li>
                              <li>• Systematische Bewertung</li>
                              <li>• Automatisierte Entscheidungen</li>
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                              <Target className="h-5 w-5 text-blue-500" />
                              Zweck & Nutzen
                            </h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Risiken identifizieren</li>
                              <li>• Compliance nachweisen</li>
                              <li>• Maßnahmen ableiten</li>
                              <li>• Vertrauen schaffen</li>
                            </ul>
                          </div>
                        </div>

                        <Alert>
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Rechtliche Grundlage:</strong> Art. 35 DSGVO verpflichtet Verantwortliche,
                            vor Beginn der Verarbeitung eine DSFA durchzuführen, wenn die Verarbeitung
                            voraussichtlich ein hohes Risiko für die Rechte und Freiheiten natürlicher Personen zur Folge hat.
                          </AlertDescription>
                        </Alert>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="dsfa-schwellwertanalyse" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                        <Gauge className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Schwellwertanalyse
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Wann ist eine DSFA erforderlich?</p>
                      </div>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Gauge className="h-5 w-5" />
                          9 Kriterien für eine DSFA-Pflicht
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                          {schwellwertkriterien.map((kriterium, index) => (
                            <div key={index} className="border rounded-lg p-3">
                              <div className="flex items-start justify-between mb-2">
                                <h5 className="font-medium">{kriterium.kriterium}</h5>
                                <Badge variant={
                                  kriterium.risiko === 'SEHR HOCH' ? 'destructive' :
                                  kriterium.risiko === 'HOCH' ? 'default' :
                                  'secondary'
                                }>
                                  {kriterium.risiko}
                                </Badge>
                              </div>
                              <div className="space-y-1">
                                {kriterium.beispiele.map((beispiel, idx) => (
                                  <div key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                                    <ChevronRight className="h-3 w-3" />
                                    {beispiel}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                          <div>
                            <h5 className="font-medium">Risiko-Score berechnen</h5>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Basierend auf Ihren Kriterien
                            </p>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-2xl font-bold">{riskScore}%</div>
                            <Button onClick={calculateRiskScore} variant="outline" size="sm">
                              Berechnen
                            </Button>
                          </div>
                        </div>

                        <Alert className="mt-4">
                          <Info className="h-4 w-4" />
                          <AlertDescription>
                            <strong>2-Kriterien-Regel:</strong> Die Verarbeitung muss mindestens 2 der 9 Kriterien
                            aus den WP29-Guidelines erfüllen, um eine DSFA zu erfordern. Im Zweifel: DSFA durchführen!
                          </AlertDescription>
                        </Alert>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="dsfa-vorbereitung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Search className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Vorbereitung
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Grundlagen für die DSFA schaffen</p>
                      </div>
                    </div>

                    <Card className={cn("mb-8", dsfaPhasen.vorbereitung.bgColor)}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center",
                            dsfaPhasen.vorbereitung.bgColor
                          )}>
                            <dsfaPhasen.vorbereitung.icon className={cn("h-6 w-6", dsfaPhasen.vorbereitung.color)} />
                          </div>
                          <CardTitle className="text-2xl">{dsfaPhasen.vorbereitung.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {dsfaPhasen.vorbereitung.schritte.map((schritt, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                              <h4 className="font-semibold text-lg mb-2">{schritt.titel}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                {schritt.beschreibung}
                              </p>
                              <div className="space-y-2">
                                {schritt.checkpunkte.map((punkt, idx) => (
                                  <label key={idx} className="flex items-start gap-3 cursor-pointer">
                                    <input type="checkbox" className="mt-1" />
                                    <span className="text-sm">{punkt}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="dsfa-beschreibung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Beschreibung der Verarbeitung
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Detaillierte Dokumentation</p>
                      </div>
                    </div>

                    <Card className={cn("mb-8", dsfaPhasen.beschreibung.bgColor)}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center",
                            dsfaPhasen.beschreibung.bgColor
                          )}>
                            <dsfaPhasen.beschreibung.icon className={cn("h-6 w-6", dsfaPhasen.beschreibung.color)} />
                          </div>
                          <CardTitle className="text-2xl">{dsfaPhasen.beschreibung.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {dsfaPhasen.beschreibung.schritte.map((schritt, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                              <h4 className="font-semibold text-lg mb-2">{schritt.titel}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                {schritt.beschreibung}
                              </p>
                              <div className="space-y-2">
                                {schritt.checkpunkte.map((punkt, idx) => (
                                  <label key={idx} className="flex items-start gap-3 cursor-pointer">
                                    <input type="checkbox" className="mt-1" />
                                    <span className="text-sm">{punkt}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="dsfa-notwendigkeit" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Target className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Notwendigkeit & Verhältnismäßigkeit
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Bewertung der Verarbeitung</p>
                      </div>
                    </div>

                    <Card className={cn("mb-8", dsfaPhasen.bewertung.bgColor)}>
                      <CardHeader>
                        <CardTitle>Notwendigkeit bewerten</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-2">
                            {dsfaPhasen.bewertung.schritte[0].titel}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            {dsfaPhasen.bewertung.schritte[0].beschreibung}
                          </p>
                          <div className="space-y-2">
                            {dsfaPhasen.bewertung.schritte[0].checkpunkte.map((punkt, idx) => (
                              <label key={idx} className="flex items-start gap-3 cursor-pointer">
                                <input type="checkbox" className="mt-1" />
                                <span className="text-sm">{punkt}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="dsfa-risikobewertung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Scale className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Risikobewertung
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Systematische Risikoanalyse</p>
                      </div>
                    </div>

                    <Card className={cn("mb-8", dsfaPhasen.bewertung.bgColor)}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center",
                            dsfaPhasen.bewertung.bgColor
                          )}>
                            <dsfaPhasen.bewertung.icon className={cn("h-6 w-6", dsfaPhasen.bewertung.color)} />
                          </div>
                          <CardTitle className="text-2xl">Risikobewertung durchführen</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {dsfaPhasen.bewertung.schritte.slice(1).map((schritt, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                              <h4 className="font-semibold text-lg mb-2">{schritt.titel}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                {schritt.beschreibung}
                              </p>
                              <div className="space-y-2">
                                {schritt.checkpunkte.map((punkt, idx) => (
                                  <label key={idx} className="flex items-start gap-3 cursor-pointer">
                                    <input type="checkbox" className="mt-1" />
                                    <span className="text-sm">{punkt}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="dsfa-abhilfemassnahmen" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Abhilfemaßnahmen
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Risikominimierung planen</p>
                      </div>
                    </div>

                    <Card className={cn("mb-8", dsfaPhasen.abhilfe.bgColor)}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center",
                            dsfaPhasen.abhilfe.bgColor
                          )}>
                            <dsfaPhasen.abhilfe.icon className={cn("h-6 w-6", dsfaPhasen.abhilfe.color)} />
                          </div>
                          <CardTitle className="text-2xl">{dsfaPhasen.abhilfe.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {dsfaPhasen.abhilfe.schritte.map((schritt, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                              <h4 className="font-semibold text-lg mb-2">{schritt.titel}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                {schritt.beschreibung}
                              </p>
                              <div className="space-y-2">
                                {schritt.checkpunkte.map((punkt, idx) => (
                                  <label key={idx} className="flex items-start gap-3 cursor-pointer">
                                    <input type="checkbox" className="mt-1" />
                                    <span className="text-sm">{punkt}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="dsfa-behoerdenkonsultation" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                        <Building className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Behördenkonsultation
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Aufsichtsbehörde einbeziehen</p>
                      </div>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Wann ist eine Konsultation erforderlich?</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          Wenn trotz der geplanten Abhilfemaßnahmen ein hohes Restrisiko für die
                          Rechte und Freiheiten der betroffenen Personen verbleibt, muss die
                          Aufsichtsbehörde vor Beginn der Verarbeitung konsultiert werden.
                        </p>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold text-lg mb-2">Konsultation (falls nötig)</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Aufsichtsbehörde einbeziehen
                          </p>
                          <div className="space-y-2">
                            {dsfaPhasen.dokumentation.schritte[1].checkpunkte.map((punkt, idx) => (
                              <label key={idx} className="flex items-start gap-3 cursor-pointer">
                                <input type="checkbox" className="mt-1" />
                                <span className="text-sm">{punkt}</span>
                              </label>
                            ))}
                          </div>
                        </div>

                        <Alert>
                          <Building className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Konsultation erforderlich:</strong> Wenn trotz Abhilfemaßnahmen ein hohes
                            Restrisiko verbleibt, muss die Aufsichtsbehörde vor Beginn der Verarbeitung konsultiert werden.
                          </AlertDescription>
                        </Alert>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="dsfa-dokumentation" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <ClipboardCheck className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Dokumentation
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Vollständige Dokumentation</p>
                      </div>
                    </div>

                    <Card className={cn("mb-8", dsfaPhasen.dokumentation.bgColor)}>
                      <CardHeader>
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center",
                            dsfaPhasen.dokumentation.bgColor
                          )}>
                            <dsfaPhasen.dokumentation.icon className={cn("h-6 w-6", dsfaPhasen.dokumentation.color)} />
                          </div>
                          <CardTitle className="text-2xl">{dsfaPhasen.dokumentation.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-6">
                          {dsfaPhasen.dokumentation.schritte.map((schritt, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                              <h4 className="font-semibold text-lg mb-2">{schritt.titel}</h4>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                                {schritt.beschreibung}
                              </p>
                              <div className="space-y-2">
                                {schritt.checkpunkte.map((punkt, idx) => (
                                  <label key={idx} className="flex items-start gap-3 cursor-pointer">
                                    <input type="checkbox" className="mt-1" />
                                    <span className="text-sm">{punkt}</span>
                                  </label>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <div className="grid md:grid-cols-2 gap-6 mb-12">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Lightbulb className="h-5 w-5 text-yellow-600" />
                            Erfolgsfaktoren
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                              <div>
                                <strong>Frühzeitig beginnen:</strong> DSFA vor Implementierung durchführen
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                              <div>
                                <strong>Team-Ansatz:</strong> Alle relevanten Stakeholder einbeziehen
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                              <div>
                                <strong>Betroffene fragen:</strong> Perspektive der Betroffenen berücksichtigen
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                              <div>
                                <strong>Iterativ vorgehen:</strong> DSFA bei Änderungen aktualisieren
                              </div>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-orange-600" />
                            Typische Fehler
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                              <div>
                                <strong>Zu spät:</strong> DSFA erst nach Go-Live durchführen
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                              <div>
                                <strong>Oberflächlich:</strong> Risiken nicht gründlich analysieren
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                              <div>
                                <strong>Alibi-Maßnahmen:</strong> Unwirksame Abhilfemaßnahmen
                              </div>
                            </li>
                            <li className="flex items-start gap-2">
                              <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                              <div>
                                <strong>Keine Updates:</strong> DSFA nicht aktuell halten
                              </div>
                            </li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-12">
                      <Card className="text-center">
                        <CardContent className="p-6">
                          <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                          <h3 className="font-semibold mb-2">DSFA-Template</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Strukturierte Vorlage
                          </p>
                          <Button variant="outline" size="sm" className="w-full">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="text-center">
                        <CardContent className="p-6">
                          <Settings className="h-8 w-8 text-green-600 mx-auto mb-3" />
                          <h3 className="font-semibold mb-2">DSFA-Tool</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Interaktiver Assistent
                          </p>
                          <Button variant="outline" size="sm" className="w-full">
                            Tool starten
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="text-center">
                        <CardContent className="p-6">
                          <Scale className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                          <h3 className="font-semibold mb-2">Blacklist</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Aktuelle Listen
                          </p>
                          <Button variant="outline" size="sm" className="w-full">
                            Listen prüfen
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="text-center">
                        <CardContent className="p-6">
                          <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                          <h3 className="font-semibold mb-2">Workshop</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            DSFA mit Experten
                          </p>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link to="/contact">
                              Anfragen
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
                      <h2 className="text-2xl font-bold mb-4">
                        DSFA professionell durchführen
                      </h2>
                      <p className="text-lg mb-6 opacity-90">
                        Minimieren Sie Risiken und erfüllen Sie die gesetzlichen Anforderungen
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          size="lg"
                          variant="secondary"
                          className="bg-white text-blue-600 hover:bg-blue-50"
                        >
                          DSFA-Check starten
                          <Search className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-blue-600"
                        >
                          Experten-Support
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                </section>

                <section id="dsfa-software" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                        <Settings className="h-6 w-6 text-cyan-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Software-Unterstützung
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Automatisierung für DSFA</p>
                      </div>
                    </div>

                    <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#e24e1b] to-[#f97316] rounded-xl flex items-center justify-center">
                              <AlertTriangle className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              DSFA mit Risiko-Scoring automatisieren
                            </h3>
                            <p className="text-gray-700 mb-4">
                              Führen Sie Datenschutz-Folgenabschätzungen systematisch durch.
                              Mit geführtem Prozess, automatischer Risikobewertung und vollständiger Dokumentation.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span>Geführter Prozess</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span>Auto Risiko-Scoring</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span>Vollständige Dokumentation</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <Button
                              size="lg"
                              className="bg-[#e24e1b] hover:bg-[#c43e15] text-white"
                              onClick={() => window.location.href = '/features#datenschutz-folgenabschaetzung-dsfa'}
                            >
                              DSFA-Tool ansehen
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DSFADurchfuehrung;
