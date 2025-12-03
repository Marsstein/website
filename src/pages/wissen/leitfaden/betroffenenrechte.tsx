import React, { useState, useEffect } from 'react';
import SEOHead from '../../../components/SEOHead';
import { motion, useScroll } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Users,
  Eye,
  Edit,
  Trash2,
  Lock,
  Download,
  Ban,
  Bot,
  Clock,
  AlertTriangle,
  CheckCircle2,
  Info,
  FileText,
  FileSearch,
  Mail,
  Shield,
  ArrowRight,
  Calendar,
  ChevronRight,
  ExternalLink,
  Lightbulb,
  Timer,
  UserCheck,
  Settings,
  Scale,
  Building
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Betroffenenrechte: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('betroffenenrechte-ueberblick');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Betroffenenrechte DSGVO umsetzen",
    "description": "Betroffenenrechte nach DSGVO professionell umsetzen: Auskunft, Löschung, Berichtigung, Datenportabilität. Prozesse, Fristen und Vorlagen für alle Anfragen.",
    "url": "https://marsstein.ai/wissen/leitfaden/betroffenenrechte"
  };

  const sections = [
    { id: 'betroffenenrechte-ueberblick', title: 'Überblick über alle Rechte', icon: Users, readTime: '5 Min' },
    { id: 'betroffenenrechte-auskunft', title: 'Auskunftsrecht (Art. 15)', icon: Eye, readTime: '8 Min' },
    { id: 'betroffenenrechte-berichtigung', title: 'Berichtigung (Art. 16)', icon: Edit, readTime: '6 Min' },
    { id: 'betroffenenrechte-loeschung', title: 'Löschung (Art. 17)', icon: Trash2, readTime: '10 Min' },
    { id: 'betroffenenrechte-einschraenkung', title: 'Einschränkung (Art. 18)', icon: Lock, readTime: '7 Min' },
    { id: 'betroffenenrechte-datenportabilitaet', title: 'Datenübertragbarkeit (Art. 20)', icon: Download, readTime: '8 Min' },
    { id: 'betroffenenrechte-widerspruch', title: 'Widerspruch (Art. 21)', icon: Ban, readTime: '7 Min' },
    { id: 'betroffenenrechte-automatisierung', title: 'Automatisierte Entscheidung (Art. 22)', icon: Bot, readTime: '6 Min' },
    { id: 'betroffenenrechte-prozess', title: 'Umsetzungsprozess', icon: Settings, readTime: '10 Min' },
    { id: 'betroffenenrechte-software', title: 'Software-Unterstützung', icon: FileSearch, readTime: '5 Min' }
  ];

  const betroffenenrechte = {
    auskunft: {
      title: 'Auskunftsrecht',
      artikel: 'Art. 15 DSGVO',
      icon: Eye,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      beschreibung: 'Betroffene haben das Recht zu erfahren, ob und welche Daten über sie verarbeitet werden.',
      inhalt: {
        umfang: [
          'Verarbeitungszwecke',
          'Kategorien personenbezogener Daten',
          'Empfänger oder Kategorien von Empfängern',
          'Geplante Speicherdauer',
          'Herkunft der Daten',
          'Bestehen automatisierter Entscheidungsfindung',
          'Bei Drittlandtransfer: Garantien'
        ],
        prozess: [
          'Identität des Anfragenden prüfen',
          'Alle relevanten Daten zusammenstellen',
          'Verständliche Aufbereitung',
          'Kostenlose erste Kopie bereitstellen',
          'Innerhalb eines Monats antworten'
        ],
        ausnahmen: [
          'Rechte und Freiheiten anderer Personen',
          'Geschäftsgeheimnisse (soweit möglich)',
          'Offensichtlich unbegründete/exzessive Anfragen'
        ]
      }
    },
    berichtigung: {
      title: 'Berichtigungsrecht',
      artikel: 'Art. 16 DSGVO',
      icon: Edit,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      beschreibung: 'Betroffene können die Berichtigung unrichtiger oder die Vervollständigung unvollständiger Daten verlangen.',
      inhalt: {
        umfang: [
          'Korrektur falscher Daten',
          'Ergänzung unvollständiger Daten',
          'Aktualisierung veralteter Daten',
          'Ergänzende Erklärung hinzufügen'
        ],
        prozess: [
          'Unrichtigkeit prüfen',
          'Daten in allen Systemen korrigieren',
          'Empfänger informieren',
          'Änderung dokumentieren',
          'Betroffenen informieren'
        ],
        ausnahmen: [
          'Meinungsfreiheit',
          'Rechtliche Verpflichtungen',
          'Öffentliches Interesse',
          'Rechtsansprüche'
        ]
      }
    },
    loeschung: {
      title: 'Löschungsrecht',
      artikel: 'Art. 17 DSGVO',
      icon: Trash2,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      beschreibung: 'Das "Recht auf Vergessenwerden" - Betroffene können unter bestimmten Voraussetzungen die Löschung ihrer Daten verlangen.',
      inhalt: {
        umfang: [
          'Zweck der Verarbeitung entfallen',
          'Einwilligung widerrufen',
          'Widerspruch gegen Verarbeitung',
          'Unrechtmäßige Verarbeitung',
          'Rechtliche Löschpflicht',
          'Daten von Kindern'
        ],
        prozess: [
          'Löschgrund prüfen',
          'Ausnahmen checken',
          'Daten identifizieren',
          'Löschung durchführen',
          'Empfänger informieren',
          'Löschung bestätigen'
        ],
        ausnahmen: [
          'Meinungs- und Informationsfreiheit',
          'Rechtliche Verpflichtungen',
          'Öffentliches Interesse',
          'Rechtsansprüche',
          'Archivzwecke'
        ]
      }
    },
    einschraenkung: {
      title: 'Einschränkungsrecht',
      artikel: 'Art. 18 DSGVO',
      icon: Lock,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      beschreibung: 'Betroffene können die Einschränkung der Verarbeitung verlangen, wenn bestimmte Voraussetzungen vorliegen.',
      inhalt: {
        umfang: [
          'Richtigkeit wird bestritten',
          'Unrechtmäßige Verarbeitung',
          'Daten für Rechtsansprüche benötigt',
          'Widerspruch eingelegt'
        ],
        prozess: [
          'Grund prüfen',
          'Verarbeitung sperren',
          'Kennzeichnung anbringen',
          'Nur noch Speicherung',
          'Vor Aufhebung informieren'
        ],
        ausnahmen: [
          'Mit Einwilligung',
          'Rechtsansprüche',
          'Schutz anderer',
          'Wichtige öffentliche Interessen'
        ]
      }
    },
    datenportabilitaet: {
      title: 'Datenübertragbarkeit',
      artikel: 'Art. 20 DSGVO',
      icon: Download,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      beschreibung: 'Betroffene haben das Recht, ihre Daten in einem strukturierten, maschinenlesbaren Format zu erhalten.',
      inhalt: {
        umfang: [
          'Bereitgestellte Daten',
          'Auf Einwilligung/Vertrag basierend',
          'Automatisierte Verarbeitung',
          'Strukturiertes Format',
          'Direkte Übertragung möglich'
        ],
        prozess: [
          'Anwendbarkeit prüfen',
          'Daten identifizieren',
          'Format festlegen (JSON/CSV)',
          'Daten exportieren',
          'Sicher übermitteln'
        ],
        ausnahmen: [
          'Nicht bei anderen Rechtsgrundlagen',
          'Rechte anderer',
          'Öffentliche Aufgaben',
          'Nur "bereitgestellte" Daten'
        ]
      }
    },
    widerspruch: {
      title: 'Widerspruchsrecht',
      artikel: 'Art. 21 DSGVO',
      icon: Ban,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      beschreibung: 'Betroffene können der Verarbeitung ihrer Daten widersprechen, insbesondere bei Direktmarketing.',
      inhalt: {
        umfang: [
          'Berechtigtes Interesse',
          'Öffentliche Aufgabe',
          'Direktmarketing (absolut)',
          'Profiling',
          'Besondere persönliche Situation'
        ],
        prozess: [
          'Widerspruch prüfen',
          'Bei Direktmarketing: sofort stoppen',
          'Sonst: Interessenabwägung',
          'Verarbeitung einstellen',
          'Betroffenen informieren'
        ],
        ausnahmen: [
          'Zwingende schutzwürdige Gründe',
          'Rechtsansprüche',
          'Bei Direktmarketing: keine!'
        ]
      }
    },
    automatisierung: {
      title: 'Keine automatisierte Entscheidung',
      artikel: 'Art. 22 DSGVO',
      icon: Bot,
      color: 'text-gray-600',
      bgColor: 'bg-gray-50',
      beschreibung: 'Betroffene haben das Recht, nicht einer ausschließlich automatisierten Entscheidung unterworfen zu werden.',
      inhalt: {
        umfang: [
          'Ausschließlich automatisiert',
          'Rechtliche Wirkung',
          'Erhebliche Beeinträchtigung',
          'Einschließlich Profiling'
        ],
        prozess: [
          'Automatisierung identifizieren',
          'Ausnahmen prüfen',
          'Menschliche Überprüfung',
          'Standpunkt darlegen lassen',
          'Entscheidung anfechten'
        ],
        ausnahmen: [
          'Vertragserfüllung',
          'Gesetzliche Erlaubnis',
          'Ausdrückliche Einwilligung',
          'Mit besonderen Schutzmaßnahmen'
        ]
      }
    }
  };

  const prozessablauf = [
    {
      phase: 'Eingang',
      dauer: '0-2 Tage',
      icon: Mail,
      aufgaben: [
        'Anfrage erfassen',
        'Eingangsbestätigung senden',
        'Zuständigkeit klären',
        'Frist beginnt'
      ]
    },
    {
      phase: 'Prüfung',
      dauer: '3-7 Tage',
      icon: UserCheck,
      aufgaben: [
        'Identität verifizieren',
        'Berechtigung prüfen',
        'Umfang bestimmen',
        'Ausnahmen checken'
      ]
    },
    {
      phase: 'Bearbeitung',
      dauer: '8-20 Tage',
      icon: Settings,
      aufgaben: [
        'Daten zusammenstellen',
        'Maßnahmen durchführen',
        'Dokumentation erstellen',
        'Qualität sichern'
      ]
    },
    {
      phase: 'Antwort',
      dauer: '21-30 Tage',
      icon: CheckCircle2,
      aufgaben: [
        'Antwort formulieren',
        'Freigabe einholen',
        'Sicher übermitteln',
        'Vorgang dokumentieren'
      ]
    }
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
        title="Betroffenenrechte erfüllen – DSGVO Praxisleitfaden"
        description="Betroffenenrechte nach DSGVO umsetzen: ✓ Auskunft ✓ Löschung ✓ Berichtigung ✓ Datenportabilität. Prozesse, Fristen, Vorlagen. Jetzt DSGVO-konform handeln!"
        canonical="/wissen/leitfaden/betroffenenrechte"
        keywords="betroffenenrechte erfüllen, betroffenenrechte umsetzen, auskunftsrecht erfüllen, löschungsrecht umsetzen, dsgvo betroffenenrechte anleitung, wie betroffenenrechte erfüllen"
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
                <Users className="h-3 w-3 mr-1" />
                DSGVO Kapitel III
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Betroffenenrechte umsetzen
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Professioneller Umgang mit Auskunfts-, Löschungs- und anderen
                Betroffenenanfragen - Prozesse, Fristen und Vorlagen
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
                  <Clock className="h-6 w-6 text-red-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Antwortfrist</div>
                  <div className="text-lg font-bold">1 Monat</div>
                  <div className="text-xs text-gray-500">verlängerbar auf 3</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <FileText className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Rechte</div>
                  <div className="text-lg font-bold">8 Arten</div>
                  <div className="text-xs text-gray-500">Art. 15-22 DSGVO</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Bußgeld bis</div>
                  <div className="text-lg font-bold">20 Mio €</div>
                  <div className="text-xs text-gray-500">oder 4% Umsatz</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Shield className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Kosten</div>
                  <div className="text-lg font-bold">Kostenlos</div>
                  <div className="text-xs text-gray-500">erste Auskunft</div>
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
                  <strong>Praxis-Tipp:</strong> Die Bearbeitung von Betroffenenanfragen gehört zu den <strong>Kernaufgaben des Datenschutzbeauftragten</strong>. Ein DSB hilft bei der Einrichtung professioneller Prozesse und stellt die fristgerechte Bearbeitung sicher. → <Link to="/wissen/leitfaden/datenschutzbeauftragter" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold underline">Mehr über DSB-Aufgaben & Verantwortlichkeiten</Link>
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
                <section id="betroffenenrechte-ueberblick" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Users className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Überblick über alle Rechte
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Die 8 Betroffenenrechte nach DSGVO</p>
                      </div>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Alle Betroffenenrechte im Überblick</CardTitle>
                        <CardDescription>
                          Die DSGVO gewährt betroffenen Personen umfassende Rechte zur Kontrolle ihrer personenbezogenen Daten.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          {Object.entries(betroffenenrechte).map(([key, right]) => {
                            const Icon = right.icon;
                            return (
                              <div
                                key={key}
                                className={cn(
                                  "border rounded-lg p-4 cursor-pointer hover:shadow-md transition-shadow",
                                  right.bgColor
                                )}
                                onClick={() => scrollToSection(`betroffenenrechte-${key}`)}
                              >
                                <div className="flex items-start gap-3">
                                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                                    <Icon className={cn("h-5 w-5", right.color)} />
                                  </div>
                                  <div>
                                    <div className="font-semibold mb-1">{right.title}</div>
                                    <Badge variant="outline" className="text-xs mb-2">{right.artikel}</Badge>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">{right.beschreibung}</p>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Wichtig:</strong> Die erste Beantwortung einer Auskunftsanfrage muss kostenlos erfolgen.
                        Bei offensichtlich unbegründeten oder exzessiven Anfragen können Sie ein angemessenes Entgelt verlangen.
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                </section>

                <section id="betroffenenrechte-auskunft" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Eye className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Auskunftsrecht (Art. 15)
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Das wichtigste Betroffenenrecht</p>
                      </div>
                    </div>

                    <Card className={cn(betroffenenrechte.auskunft.bgColor)}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center",
                              betroffenenrechte.auskunft.bgColor
                            )}>
                              <Eye className={cn("h-6 w-6", betroffenenrechte.auskunft.color)} />
                            </div>
                            <div>
                              <CardTitle className="text-2xl">{betroffenenrechte.auskunft.title}</CardTitle>
                              <Badge variant="outline" className="mt-1">{betroffenenrechte.auskunft.artikel}</Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-base mt-4">
                          {betroffenenrechte.auskunft.beschreibung}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Was umfasst dieses Recht?</h4>
                          <div className="space-y-2">
                            {betroffenenrechte.auskunft.inhalt.umfang.map((punkt, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{punkt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Wie ist der Ablauf?</h4>
                          <div className="space-y-3">
                            {betroffenenrechte.auskunft.inhalt.prozess.map((schritt, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs flex-shrink-0">
                                  {index + 1}
                                </div>
                                <span className="text-sm">{schritt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Wann gilt das Recht nicht?</h4>
                          <div className="space-y-2">
                            {betroffenenrechte.auskunft.inhalt.ausnahmen.map((ausnahme, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{ausnahme}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="betroffenenrechte-berichtigung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Edit className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Recht auf Berichtigung (Art. 16)
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Korrektur falscher Daten</p>
                      </div>
                    </div>

                    <Card className={cn(betroffenenrechte.berichtigung.bgColor)}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center",
                              betroffenenrechte.berichtigung.bgColor
                            )}>
                              <Edit className={cn("h-6 w-6", betroffenenrechte.berichtigung.color)} />
                            </div>
                            <div>
                              <CardTitle className="text-2xl">{betroffenenrechte.berichtigung.title}</CardTitle>
                              <Badge variant="outline" className="mt-1">{betroffenenrechte.berichtigung.artikel}</Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-base mt-4">
                          {betroffenenrechte.berichtigung.beschreibung}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Was umfasst dieses Recht?</h4>
                          <div className="space-y-2">
                            {betroffenenrechte.berichtigung.inhalt.umfang.map((punkt, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{punkt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Wie ist der Ablauf?</h4>
                          <div className="space-y-3">
                            {betroffenenrechte.berichtigung.inhalt.prozess.map((schritt, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs flex-shrink-0">
                                  {index + 1}
                                </div>
                                <span className="text-sm">{schritt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Wann gilt das Recht nicht?</h4>
                          <div className="space-y-2">
                            {betroffenenrechte.berichtigung.inhalt.ausnahmen.map((ausnahme, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{ausnahme}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="betroffenenrechte-loeschung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <Trash2 className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Recht auf Löschung (Art. 17)
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Das "Recht auf Vergessenwerden"</p>
                      </div>
                    </div>

                    <Card className={cn(betroffenenrechte.loeschung.bgColor)}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center",
                              betroffenenrechte.loeschung.bgColor
                            )}>
                              <Trash2 className={cn("h-6 w-6", betroffenenrechte.loeschung.color)} />
                            </div>
                            <div>
                              <CardTitle className="text-2xl">{betroffenenrechte.loeschung.title}</CardTitle>
                              <Badge variant="outline" className="mt-1">{betroffenenrechte.loeschung.artikel}</Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-base mt-4">
                          {betroffenenrechte.loeschung.beschreibung}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Was umfasst dieses Recht?</h4>
                          <div className="space-y-2">
                            {betroffenenrechte.loeschung.inhalt.umfang.map((punkt, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{punkt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Wie ist der Ablauf?</h4>
                          <div className="space-y-3">
                            {betroffenenrechte.loeschung.inhalt.prozess.map((schritt, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs flex-shrink-0">
                                  {index + 1}
                                </div>
                                <span className="text-sm">{schritt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Wann gilt das Recht nicht?</h4>
                          <div className="space-y-2">
                            {betroffenenrechte.loeschung.inhalt.ausnahmen.map((ausnahme, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{ausnahme}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="betroffenenrechte-einschraenkung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Lock className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Recht auf Einschränkung (Art. 18)
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Verarbeitung einschränken statt löschen</p>
                      </div>
                    </div>

                    <Card className={cn(betroffenenrechte.einschraenkung.bgColor)}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center",
                              betroffenenrechte.einschraenkung.bgColor
                            )}>
                              <Lock className={cn("h-6 w-6", betroffenenrechte.einschraenkung.color)} />
                            </div>
                            <div>
                              <CardTitle className="text-2xl">{betroffenenrechte.einschraenkung.title}</CardTitle>
                              <Badge variant="outline" className="mt-1">{betroffenenrechte.einschraenkung.artikel}</Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-base mt-4">
                          {betroffenenrechte.einschraenkung.beschreibung}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Was umfasst dieses Recht?</h4>
                          <div className="space-y-2">
                            {betroffenenrechte.einschraenkung.inhalt.umfang.map((punkt, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{punkt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Wie ist der Ablauf?</h4>
                          <div className="space-y-3">
                            {betroffenenrechte.einschraenkung.inhalt.prozess.map((schritt, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-purple-600 text-white flex items-center justify-center text-xs flex-shrink-0">
                                  {index + 1}
                                </div>
                                <span className="text-sm">{schritt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Wann gilt das Recht nicht?</h4>
                          <div className="space-y-2">
                            {betroffenenrechte.einschraenkung.inhalt.ausnahmen.map((ausnahme, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{ausnahme}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="betroffenenrechte-datenportabilitaet" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                        <Download className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Recht auf Datenübertragbarkeit (Art. 20)
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Daten in strukturiertem Format erhalten</p>
                      </div>
                    </div>

                    <Card className={cn(betroffenenrechte.datenportabilitaet.bgColor)}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center",
                              betroffenenrechte.datenportabilitaet.bgColor
                            )}>
                              <Download className={cn("h-6 w-6", betroffenenrechte.datenportabilitaet.color)} />
                            </div>
                            <div>
                              <CardTitle className="text-2xl">{betroffenenrechte.datenportabilitaet.title}</CardTitle>
                              <Badge variant="outline" className="mt-1">{betroffenenrechte.datenportabilitaet.artikel}</Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-base mt-4">
                          {betroffenenrechte.datenportabilitaet.beschreibung}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Was umfasst dieses Recht?</h4>
                          <div className="space-y-2">
                            {betroffenenrechte.datenportabilitaet.inhalt.umfang.map((punkt, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{punkt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Wie ist der Ablauf?</h4>
                          <div className="space-y-3">
                            {betroffenenrechte.datenportabilitaet.inhalt.prozess.map((schritt, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xs flex-shrink-0">
                                  {index + 1}
                                </div>
                                <span className="text-sm">{schritt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Wann gilt das Recht nicht?</h4>
                          <div className="space-y-2">
                            {betroffenenrechte.datenportabilitaet.inhalt.ausnahmen.map((ausnahme, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{ausnahme}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="betroffenenrechte-widerspruch" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                        <Ban className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Widerspruchsrecht (Art. 21)
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Besonders stark bei Direktmarketing</p>
                      </div>
                    </div>

                    <Card className={cn(betroffenenrechte.widerspruch.bgColor)}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center",
                              betroffenenrechte.widerspruch.bgColor
                            )}>
                              <Ban className={cn("h-6 w-6", betroffenenrechte.widerspruch.color)} />
                            </div>
                            <div>
                              <CardTitle className="text-2xl">{betroffenenrechte.widerspruch.title}</CardTitle>
                              <Badge variant="outline" className="mt-1">{betroffenenrechte.widerspruch.artikel}</Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-base mt-4">
                          {betroffenenrechte.widerspruch.beschreibung}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Was umfasst dieses Recht?</h4>
                          <div className="space-y-2">
                            {betroffenenrechte.widerspruch.inhalt.umfang.map((punkt, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{punkt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Wie ist der Ablauf?</h4>
                          <div className="space-y-3">
                            {betroffenenrechte.widerspruch.inhalt.prozess.map((schritt, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-orange-600 text-white flex items-center justify-center text-xs flex-shrink-0">
                                  {index + 1}
                                </div>
                                <span className="text-sm">{schritt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Wann gilt das Recht nicht?</h4>
                          <div className="space-y-2">
                            {betroffenenrechte.widerspruch.inhalt.ausnahmen.map((ausnahme, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{ausnahme}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="betroffenenrechte-automatisierung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-900/30 flex items-center justify-center">
                        <Bot className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Keine automatisierte Entscheidung (Art. 22)
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Schutz vor reiner KI-Entscheidung</p>
                      </div>
                    </div>

                    <Card className={cn(betroffenenrechte.automatisierung.bgColor)}>
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center",
                              betroffenenrechte.automatisierung.bgColor
                            )}>
                              <Bot className={cn("h-6 w-6", betroffenenrechte.automatisierung.color)} />
                            </div>
                            <div>
                              <CardTitle className="text-2xl">{betroffenenrechte.automatisierung.title}</CardTitle>
                              <Badge variant="outline" className="mt-1">{betroffenenrechte.automatisierung.artikel}</Badge>
                            </div>
                          </div>
                        </div>
                        <CardDescription className="text-base mt-4">
                          {betroffenenrechte.automatisierung.beschreibung}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Was umfasst dieses Recht?</h4>
                          <div className="space-y-2">
                            {betroffenenrechte.automatisierung.inhalt.umfang.map((punkt, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{punkt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Wie ist der Ablauf?</h4>
                          <div className="space-y-3">
                            {betroffenenrechte.automatisierung.inhalt.prozess.map((schritt, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-gray-600 text-white flex items-center justify-center text-xs flex-shrink-0">
                                  {index + 1}
                                </div>
                                <span className="text-sm">{schritt}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                          <h4 className="font-semibold mb-3">Wann gilt das Recht nicht?</h4>
                          <div className="space-y-2">
                            {betroffenenrechte.automatisierung.inhalt.ausnahmen.map((ausnahme, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{ausnahme}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="betroffenenrechte-prozess" className="space-y-8 scroll-mt-32">
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
                          Umsetzungsprozess
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Standard-Ablauf für Betroffenenanfragen</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mb-8">
                      {prozessablauf.map((phase, index) => {
                        const Icon = phase.icon;
                        return (
                          <Card key={index} className="relative">
                            {index < prozessablauf.length - 1 && (
                              <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gray-300 dark:bg-gray-600 z-10" />
                            )}
                            <CardHeader className="pb-3">
                              <div className="flex items-center justify-between mb-2">
                                <Icon className="h-8 w-8 text-blue-600" />
                                <Badge variant="outline">{phase.dauer}</Badge>
                              </div>
                              <CardTitle className="text-lg">{phase.phase}</CardTitle>
                            </CardHeader>
                            <CardContent>
                              <div className="space-y-1">
                                {phase.aufgaben.map((aufgabe, idx) => (
                                  <div key={idx} className="flex items-center gap-2">
                                    <ChevronRight className="h-3 w-3 text-gray-400" />
                                    <span className="text-sm">{aufgabe}</span>
                                  </div>
                                ))}
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>

                    <div className="space-y-4">
                      <Alert>
                        <Timer className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Fristbeginn:</strong> Die Monatsfrist beginnt mit dem Eingang der Anfrage,
                          nicht erst nach erfolgreicher Identitätsprüfung. Planen Sie Puffer ein!
                        </AlertDescription>
                      </Alert>

                      <Alert>
                        <Scale className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Interessenabwägung:</strong> Bei Widerspruch und Löschung müssen Sie oft
                          eine Interessenabwägung durchführen. Dokumentieren Sie diese sorgfältig.
                        </AlertDescription>
                      </Alert>

                      <Alert>
                        <Lightbulb className="h-4 w-4" />
                        <AlertDescription>
                          <strong>Proaktiv informieren:</strong> Bei Verzögerungen informieren Sie den Betroffenen
                          rechtzeitig über die Gründe und die voraussichtliche Bearbeitungsdauer.
                        </AlertDescription>
                      </Alert>
                    </div>

                    <div className="grid md:grid-cols-4 gap-4 mt-8">
                      <Card className="text-center">
                        <CardContent className="p-6">
                          <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                          <h3 className="font-semibold mb-2">Antwort-Vorlagen</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Für alle Betroffenenrechte
                          </p>
                          <Button variant="outline" size="sm" className="w-full">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="text-center">
                        <CardContent className="p-6">
                          <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                          <h3 className="font-semibold mb-2">Frist-Tracker</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Nie wieder Fristen verpassen
                          </p>
                          <Button variant="outline" size="sm" className="w-full">
                            Tool öffnen
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="text-center">
                        <CardContent className="p-6">
                          <UserCheck className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                          <h3 className="font-semibold mb-2">ID-Check</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Identität sicher prüfen
                          </p>
                          <Button variant="outline" size="sm" className="w-full">
                            Checkliste
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="text-center">
                        <CardContent className="p-6">
                          <Building className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                          <h3 className="font-semibold mb-2">Schulung</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Team trainieren
                          </p>
                          <Button variant="outline" size="sm" className="w-full" asChild>
                            <Link to="/academy">
                              Zur Academy
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Do's</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li>• Eingangsbestätigung senden</li>
                            <li>• Identität sorgfältig prüfen</li>
                            <li>• Verständlich antworten</li>
                            <li>• Fristen einhalten</li>
                            <li>• Alles dokumentieren</li>
                            <li>• Proaktiv kommunizieren</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Don'ts</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li>• Anfragen ignorieren</li>
                            <li>• Ohne ID-Check handeln</li>
                            <li>• Pauschal ablehnen</li>
                            <li>• Fristen versäumen</li>
                            <li>• Kosten verlangen (1. Anfrage)</li>
                            <li>• Zu viel herausgeben</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Tipps</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2 text-sm">
                            <li>• Prozess automatisieren</li>
                            <li>• Templates verwenden</li>
                            <li>• Team schulen</li>
                            <li>• FAQ bereithalten</li>
                            <li>• Eskalation definieren</li>
                            <li>• Regelmäßig üben</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center mt-8">
                      <h2 className="text-2xl font-bold mb-4">
                        Betroffenenrechte-Management optimieren
                      </h2>
                      <p className="text-lg mb-6 opacity-90">
                        Implementieren Sie effiziente Prozesse für alle Betroffenenanfragen
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          size="lg"
                          variant="secondary"
                          className="bg-white text-blue-600 hover:bg-blue-50"
                        >
                          Prozess-Check starten
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-blue-600"
                        >
                          Workshop buchen
                          <Users className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </Card>
                  </motion.div>
                </section>

                <section id="betroffenenrechte-software" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                        <FileSearch className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Software-Unterstützung
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Automatisierung für Betroffenenanfragen</p>
                      </div>
                    </div>

                    <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#e24e1b] to-[#f97316] rounded-xl flex items-center justify-center">
                              <FileSearch className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              Betroffenenanfragen automatisch verwalten
                            </h3>
                            <p className="text-gray-700 mb-4">
                              Verwalten Sie Auskunftsanfragen, Löschanträge und alle Betroffenenrechte systematisch.
                              Mit automatischem Fristenmanagement, rechtssicheren Vorlagen und vollständiger Dokumentation.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span>Automatisches Tracking</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span>Fristen-Management</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span>Rechtssichere Vorlagen</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <Button
                              size="lg"
                              className="bg-[#e24e1b] hover:bg-[#c43e15] text-white"
                              onClick={() => window.location.href = '/features#betroffenenanfragen-dsar'}
                            >
                              DSAR-Tool ansehen
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

export default Betroffenenrechte;
