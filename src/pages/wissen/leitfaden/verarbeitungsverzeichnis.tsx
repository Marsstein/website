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
  FileText,
  Database,
  Users,
  Shield,
  Clock,
  Globe,
  Building,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Info,
  Download,
  ExternalLink,
  Lightbulb,
  Target,
  Scale,
  Lock,
  UserCheck,
  Settings,
  ChevronRight,
  Calendar,
  Briefcase,
  Mail,
  Phone,
  CreditCard,
  BarChart3,
  Share2,
  List
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Verarbeitungsverzeichnis: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('verarbeitungsverzeichnis-grundlagen');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Verarbeitungsverzeichnis erstellen",
    "description": "Verarbeitungsverzeichnis nach Art. 30 DSGVO erstellen: Schritt-für-Schritt Anleitung mit Vorlagen. Alle Verarbeitungstätigkeiten rechtssicher dokumentieren.",
    "url": "https://marsstein.ai/wissen/leitfaden/verarbeitungsverzeichnis"
  };

  const sections = [
    { id: 'verarbeitungsverzeichnis-grundlagen', title: 'Grundlagen & Rechtsgrundlage', icon: FileText, readTime: '8 Min' },
    { id: 'verarbeitungsverzeichnis-pflichtangaben', title: 'Pflichtangaben', icon: List, readTime: '10 Min' },
    { id: 'verarbeitungsverzeichnis-beispiele', title: 'Praxisbeispiele', icon: Briefcase, readTime: '15 Min' },
    { id: 'verarbeitungsverzeichnis-erstellen', title: 'Schritt-für-Schritt Anleitung', icon: Target, readTime: '12 Min' },
    { id: 'verarbeitungsverzeichnis-tom', title: 'TOM Integration', icon: Shield, readTime: '10 Min' },
    { id: 'verarbeitungsverzeichnis-software', title: 'Software-Unterstützung', icon: Database, readTime: '5 Min' }
  ];

  const verarbeitungsBeispiele = [
    {
      category: 'Personal',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      verarbeitungen: [
        {
          name: 'Personalverwaltung',
          zweck: 'Durchführung des Beschäftigungsverhältnisses',
          rechtsgrundlage: 'Art. 6 Abs. 1 lit. b DSGVO (Vertrag)',
          kategorien: ['Stammdaten', 'Gehaltsdaten', 'Leistungsdaten'],
          empfaenger: ['Finanzamt', 'Sozialversicherung', 'Lohnabrechnung'],
          speicherdauer: '10 Jahre nach Ausscheiden'
        },
        {
          name: 'Bewerbermanagement',
          zweck: 'Auswahl geeigneter Kandidaten',
          rechtsgrundlage: 'Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)',
          kategorien: ['Bewerbungsdaten', 'Qualifikationen', 'Referenzen'],
          empfaenger: ['Fachabteilungen', 'ggf. Personalberater'],
          speicherdauer: '6 Monate nach Absage'
        },
        {
          name: 'Zeiterfassung',
          zweck: 'Arbeitszeitdokumentation, Vergütung',
          rechtsgrundlage: 'Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung)',
          kategorien: ['Arbeitszeiten', 'Pausenzeiten', 'Überstunden'],
          empfaenger: ['Lohnabrechnung', 'Controlling'],
          speicherdauer: '2 Jahre'
        }
      ]
    },
    {
      category: 'Kunden',
      icon: Briefcase,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      verarbeitungen: [
        {
          name: 'Kundenverwaltung',
          zweck: 'Vertragsabwicklung, Kundenservice',
          rechtsgrundlage: 'Art. 6 Abs. 1 lit. b DSGVO (Vertrag)',
          kategorien: ['Kontaktdaten', 'Vertragsdaten', 'Kommunikation'],
          empfaenger: ['Versanddienstleister', 'Support-Team'],
          speicherdauer: '10 Jahre nach Vertragsende'
        },
        {
          name: 'Newsletter-Versand',
          zweck: 'Informationen und Werbung',
          rechtsgrundlage: 'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)',
          kategorien: ['E-Mail-Adresse', 'Name', 'Präferenzen'],
          empfaenger: ['E-Mail-Marketing-Tool'],
          speicherdauer: 'Bis zum Widerruf'
        },
        {
          name: 'Rechnungsstellung',
          zweck: 'Abrechnung, Buchhaltung',
          rechtsgrundlage: 'Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung)',
          kategorien: ['Rechnungsdaten', 'Zahlungsdaten', 'Steuernummer'],
          empfaenger: ['Steuerberater', 'Finanzamt'],
          speicherdauer: '10 Jahre'
        }
      ]
    },
    {
      category: 'Website',
      icon: Globe,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      verarbeitungen: [
        {
          name: 'Website-Analytics',
          zweck: 'Optimierung der Website',
          rechtsgrundlage: 'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)',
          kategorien: ['IP-Adresse', 'Browser-Daten', 'Nutzungsverhalten'],
          empfaenger: ['Analytics-Anbieter'],
          speicherdauer: '26 Monate'
        },
        {
          name: 'Kontaktformular',
          zweck: 'Beantwortung von Anfragen',
          rechtsgrundlage: 'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)',
          kategorien: ['Name', 'E-Mail', 'Nachricht'],
          empfaenger: ['Kundenservice'],
          speicherdauer: '2 Jahre'
        },
        {
          name: 'Cookie-Einwilligungen',
          zweck: 'Nachweis der Einwilligung',
          rechtsgrundlage: 'Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung)',
          kategorien: ['Einwilligungsdaten', 'Zeitstempel', 'Cookie-IDs'],
          empfaenger: ['Keine'],
          speicherdauer: '3 Jahre'
        }
      ]
    },
    {
      category: 'IT & Sicherheit',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      verarbeitungen: [
        {
          name: 'Zutrittskontrolle',
          zweck: 'Gebäudesicherheit',
          rechtsgrundlage: 'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)',
          kategorien: ['Name', 'Zugangskarte', 'Zutrittszeiten'],
          empfaenger: ['Sicherheitsdienst'],
          speicherdauer: '3 Monate'
        },
        {
          name: 'Videoüberwachung',
          zweck: 'Schutz von Eigentum',
          rechtsgrundlage: 'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)',
          kategorien: ['Videoaufnahmen', 'Zeitstempel'],
          empfaenger: ['Bei Vorfällen: Polizei'],
          speicherdauer: '72 Stunden'
        },
        {
          name: 'IT-Protokollierung',
          zweck: 'IT-Sicherheit, Fehleranalyse',
          rechtsgrundlage: 'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)',
          kategorien: ['Log-Dateien', 'IP-Adressen', 'Zugriffsdaten'],
          empfaenger: ['IT-Abteilung'],
          speicherdauer: '30 Tage'
        }
      ]
    }
  ];

  const pflichtangaben = {
    verantwortlicher: [
      'Name und Kontaktdaten des Verantwortlichen',
      'Ggf. gemeinsam Verantwortliche',
      'Name und Kontaktdaten des Vertreters',
      'Name und Kontaktdaten des Datenschutzbeauftragten'
    ],
    verarbeitungstätigkeit: [
      'Zwecke der Verarbeitung',
      'Rechtsgrundlagen der Verarbeitung',
      'Kategorien betroffener Personen',
      'Kategorien personenbezogener Daten',
      'Kategorien von Empfängern',
      'Übermittlungen in Drittländer',
      'Löschfristen',
      'Technische und organisatorische Maßnahmen'
    ],
    auftragsverarbeiter: [
      'Name und Kontaktdaten',
      'Kategorien von Verarbeitungen',
      'Übermittlungen in Drittländer',
      'Technische und organisatorische Maßnahmen'
    ]
  };

  const erstellungsSchritte = [
    {
      schritt: 1,
      titel: 'Bestandsaufnahme',
      beschreibung: 'Alle Verarbeitungstätigkeiten identifizieren',
      tasks: [
        'Abteilungen befragen',
        'Prozesse analysieren',
        'IT-Systeme erfassen',
        'Dienstleister auflisten'
      ]
    },
    {
      schritt: 2,
      titel: 'Informationen sammeln',
      beschreibung: 'Details zu jeder Verarbeitung erfassen',
      tasks: [
        'Zwecke dokumentieren',
        'Rechtsgrundlagen prüfen',
        'Datenkategorien bestimmen',
        'Empfänger identifizieren'
      ]
    },
    {
      schritt: 3,
      titel: 'Dokumentation',
      beschreibung: 'Strukturiert erfassen und pflegen',
      tasks: [
        'Template verwenden',
        'Vollständigkeit prüfen',
        'Verantwortliche benennen',
        'Freigabe einholen'
      ]
    },
    {
      schritt: 4,
      titel: 'Wartung',
      beschreibung: 'Regelmäßig aktualisieren',
      tasks: [
        'Review-Prozess etablieren',
        'Änderungen nachführen',
        'Jährliche Überprüfung',
        'Schulungen durchführen'
      ]
    }
  ];

  const tomBeispiele = [
    {
      kategorie: 'Zutrittskontrolle',
      icon: Lock,
      massnahmen: [
        'Elektronische Zugangsausweise',
        'Besucherregistrierung',
        'Alarmanlage',
        'Videoüberwachung der Eingänge'
      ]
    },
    {
      kategorie: 'Zugangskontrolle',
      icon: UserCheck,
      massnahmen: [
        'Benutzerkonten mit individuellen Passwörtern',
        'Multi-Faktor-Authentifizierung',
        'Automatische Sperre nach Inaktivität',
        'Passwortrichtlinien (Komplexität, Wechsel)'
      ]
    },
    {
      kategorie: 'Zugriffskontrolle',
      icon: Shield,
      massnahmen: [
        'Rollenbasiertes Berechtigungskonzept',
        'Need-to-know Prinzip',
        'Regelmäßige Überprüfung der Berechtigungen',
        'Protokollierung von Zugriffen'
      ]
    },
    {
      kategorie: 'Weitergabekontrolle',
      icon: Share2,
      massnahmen: [
        'Verschlüsselte E-Mail-Kommunikation',
        'Sichere Datenträgervernichtung',
        'Verschwiegenheitserklärungen',
        'Protokollierung von Datenübermittlungen'
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
        title="Verarbeitungsverzeichnis erstellen – Art. 30 DSGVO Anleitung"
        description="Verarbeitungsverzeichnis nach Art. 30 DSGVO erstellen: ✓ Schritt-für-Schritt Anleitung ✓ Vorlagen ✓ Beispiele ✓ Pflichtangaben. Jetzt rechtssicher dokumentieren!"
        canonical="/wissen/leitfaden/verarbeitungsverzeichnis"
        keywords="verarbeitungsverzeichnis erstellen, verarbeitungsverzeichnis anleitung, art 30 dsgvo, verzeichnis verarbeitungstätigkeiten erstellen, dsgvo dokumentation anleitung, wie verarbeitungsverzeichnis erstellen"
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
                <FileText className="h-3 w-3 mr-1" />
                DSGVO Art. 30
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Verarbeitungsverzeichnis erstellen
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Schritt-für-Schritt Anleitung zur rechtssicheren Dokumentation
                aller Verarbeitungstätigkeiten nach Art. 30 DSGVO
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
                  <Scale className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Pflicht ab</div>
                  <div className="text-lg font-bold">250 Mitarbeiter</div>
                  <div className="text-xs text-gray-500">oder bei Risiko</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Aufwand</div>
                  <div className="text-lg font-bold">2-4 Wochen</div>
                  <div className="text-xs text-gray-500">Ersterstellung</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Bußgeld bis</div>
                  <div className="text-lg font-bold">10 Mio €</div>
                  <div className="text-xs text-gray-500">bei Verstößen</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Shield className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Nutzen</div>
                  <div className="text-lg font-bold">Transparenz</div>
                  <div className="text-xs text-gray-500">& Compliance</div>
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
                  <strong>Wichtig:</strong> Das Verarbeitungsverzeichnis muss vom <strong>Verantwortlichen</strong> geführt werden. Viele Unternehmen nutzen ihren <strong>Datenschutzbeauftragten (DSB)</strong> zur Unterstützung bei Erstellung und Pflege. → <Link to="/wissen/leitfaden/datenschutzbeauftragter" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold underline">Mehr über DSB-Aufgaben & Benennungspflicht</Link>
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
                <section id="verarbeitungsverzeichnis-grundlagen" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Grundlagen & Rechtsgrundlage
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Was ist ein Verarbeitungsverzeichnis?</p>
                      </div>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Was ist ein Verarbeitungsverzeichnis?</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          Das Verarbeitungsverzeichnis ist eine strukturierte Dokumentation aller
                          Verarbeitungstätigkeiten personenbezogener Daten in Ihrem Unternehmen.
                          Es dient als zentrales Nachweisdokument für die Datenschutz-Compliance.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500" />
                              Wer muss es führen?
                            </h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Unternehmen mit ≥ 250 Mitarbeitern</li>
                              <li>• Bei regelmäßiger Verarbeitung</li>
                              <li>• Bei Risiko für Betroffene</li>
                              <li>• Bei besonderen Datenkategorien</li>
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                              <Target className="h-5 w-5 text-blue-500" />
                              Zweck & Nutzen
                            </h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Transparenz schaffen</li>
                              <li>• Compliance nachweisen</li>
                              <li>• Prozesse optimieren</li>
                              <li>• Risiken identifizieren</li>
                            </ul>
                          </div>
                        </div>

                        <Alert>
                          <Lightbulb className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Tipp:</strong> Auch wenn Sie nicht verpflichtet sind, empfiehlt sich
                            ein Verarbeitungsverzeichnis als Best Practice für jeden Verantwortlichen.
                          </AlertDescription>
                        </Alert>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Rechtliche Grundlage</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                          <h4 className="font-semibold mb-2">Art. 30 DSGVO - Verzeichnis von Verarbeitungstätigkeiten</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            "Jeder Verantwortliche und gegebenenfalls sein Vertreter führen ein Verzeichnis
                            aller Verarbeitungstätigkeiten, die ihrer Zuständigkeit unterliegen."
                          </p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                            <div>
                              <h5 className="font-medium">Vorlage auf Anfrage</h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Das Verzeichnis muss der Aufsichtsbehörde auf Anfrage zur Verfügung gestellt werden.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <FileText className="h-5 w-5 text-green-500 mt-0.5" />
                            <div>
                              <h5 className="font-medium">Schriftliche Form</h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Das Verzeichnis ist schriftlich zu führen, auch in einem elektronischen Format.
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="verarbeitungsverzeichnis-pflichtangaben" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <List className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Pflichtangaben
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Was muss dokumentiert werden?</p>
                      </div>
                    </div>

                    {Object.entries(pflichtangaben).map(([key, angaben]) => (
                      <Card key={key}>
                        <CardHeader>
                          <CardTitle className="capitalize">
                            {key === 'verantwortlicher' ? 'Angaben zum Verantwortlichen' :
                             key === 'verarbeitungstätigkeit' ? 'Angaben zur Verarbeitungstätigkeit' :
                             'Angaben für Auftragsverarbeiter'}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-2 gap-4">
                            {angaben.map((angabe, index) => (
                              <div key={index} className="flex items-start gap-3">
                                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                                  <span className="text-sm font-semibold text-blue-600">{index + 1}</span>
                                </div>
                                <span className="text-sm">{angabe}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </motion.div>
                </section>

                <section id="verarbeitungsverzeichnis-beispiele" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Briefcase className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Praxisbeispiele
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Typische Verarbeitungstätigkeiten</p>
                      </div>
                    </div>

                    {verarbeitungsBeispiele.map((category, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-3">
                            <div className={cn(
                              "w-10 h-10 rounded-lg flex items-center justify-center",
                              category.bgColor
                            )}>
                              <category.icon className={cn("h-5 w-5", category.color)} />
                            </div>
                            {category.category}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {category.verarbeitungen.map((verarbeitung, vIndex) => (
                              <div key={vIndex} className="border rounded-lg p-4 space-y-3">
                                <h4 className="font-semibold text-lg">{verarbeitung.name}</h4>

                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <span className="font-medium text-gray-600 dark:text-gray-400">Zweck:</span>
                                    <p>{verarbeitung.zweck}</p>
                                  </div>
                                  <div>
                                    <span className="font-medium text-gray-600 dark:text-gray-400">Rechtsgrundlage:</span>
                                    <p>{verarbeitung.rechtsgrundlage}</p>
                                  </div>
                                  <div>
                                    <span className="font-medium text-gray-600 dark:text-gray-400">Datenkategorien:</span>
                                    <p>{verarbeitung.kategorien.join(', ')}</p>
                                  </div>
                                  <div>
                                    <span className="font-medium text-gray-600 dark:text-gray-400">Empfänger:</span>
                                    <p>{verarbeitung.empfaenger.join(', ')}</p>
                                  </div>
                                  <div className="md:col-span-2">
                                    <span className="font-medium text-gray-600 dark:text-gray-400">Speicherdauer:</span>
                                    <p>{verarbeitung.speicherdauer}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </motion.div>
                </section>

                <section id="verarbeitungsverzeichnis-erstellen" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                        <Target className="h-6 w-6 text-orange-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Schritt-für-Schritt Anleitung
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">So erstellen Sie Ihr Verzeichnis</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {erstellungsSchritte.map((step, index) => (
                        <Card key={index}>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center">
                                {step.schritt}
                              </div>
                              {step.titel}
                            </CardTitle>
                            <CardDescription>{step.beschreibung}</CardDescription>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-2">
                              {step.tasks.map((task, tIndex) => (
                                <div key={tIndex} className="flex items-center gap-2">
                                  <CheckCircle2 className="h-4 w-4 text-green-500" />
                                  <span className="text-sm">{task}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Wartung ist entscheidend:</strong> Ein Verarbeitungsverzeichnis ist nur dann
                        wertvoll, wenn es aktuell gehalten wird. Planen Sie regelmäßige Reviews ein!
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                </section>

                <section id="verarbeitungsverzeichnis-tom" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <Shield className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          TOM Integration
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Technische und organisatorische Maßnahmen</p>
                      </div>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Technische und organisatorische Maßnahmen (TOM)</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                          Für jede Verarbeitungstätigkeit müssen die getroffenen technischen und
                          organisatorischen Maßnahmen dokumentiert werden. Hier sind typische Beispiele:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                          {tomBeispiele.map((tom, index) => {
                            const IconComponent = tom.icon;
                            return (
                              <div key={index} className="border rounded-lg p-4 space-y-3">
                                <div className="flex items-center gap-3">
                                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                    <IconComponent className="h-5 w-5 text-blue-600" />
                                  </div>
                                  <h4 className="font-semibold">{tom.kategorie}</h4>
                                </div>
                                <ul className="space-y-2 text-sm">
                                  {tom.massnahmen.map((massnahme, mIndex) => (
                                    <li key={mIndex} className="flex items-start gap-2">
                                      <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span>{massnahme}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="verarbeitungsverzeichnis-software" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                        <Database className="h-6 w-6 text-cyan-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Software-Unterstützung
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Tools und Vorlagen</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="text-center">
                        <CardContent className="p-6">
                          <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                          <h3 className="font-semibold mb-2">Excel-Vorlage</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Strukturierte Vorlage für Ihr Verzeichnis
                          </p>
                          <Button variant="outline" className="w-full">
                            <Download className="h-4 w-4 mr-2" />
                            Vorlage herunterladen
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="text-center">
                        <CardContent className="p-6">
                          <Database className="h-12 w-12 text-green-600 mx-auto mb-4" />
                          <h3 className="font-semibold mb-2">Online-Tool</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Digitales Verarbeitungsverzeichnis
                          </p>
                          <Button variant="outline" className="w-full">
                            Tool starten
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </CardContent>
                      </Card>

                      <Card className="text-center">
                        <CardContent className="p-6">
                          <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                          <h3 className="font-semibold mb-2">Workshop</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Gemeinsam erstellen mit Experten
                          </p>
                          <Button variant="outline" className="w-full" asChild>
                            <Link to="/contact">
                              Workshop anfragen
                              <ExternalLink className="h-4 w-4 ml-2" />
                            </Link>
                          </Button>
                        </CardContent>
                      </Card>
                    </div>

                    <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center mt-8">
                      <h2 className="text-2xl font-bold mb-4">
                        Verarbeitungsverzeichnis professionell erstellen
                      </h2>
                      <p className="text-lg mb-6 opacity-90">
                        Sparen Sie Zeit und vermeiden Sie Fehler mit unserer Expertise
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          size="lg"
                          variant="secondary"
                          className="bg-white text-blue-600 hover:bg-blue-50"
                        >
                          Vorlage nutzen
                          <Download className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-blue-600"
                        >
                          Mit Experten erstellen
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                      </div>
                    </Card>

                    <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 mt-8">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#e24e1b] to-[#f97316] rounded-xl flex items-center justify-center">
                              <Database className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              Verarbeitungsverzeichnis automatisch erstellen
                            </h3>
                            <p className="text-gray-700 mb-4">
                              Erstellen und pflegen Sie Ihr ROPA/VVT ohne manuellen Aufwand.
                              Unsere DSGVO-Software automatisiert die Dokumentation,
                              Aktualisierung und Export-Vorbereitung für Behörden.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span>Automatische Vorbefüllung</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span>Multi-Entity-Support</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span>Immer aktuell</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <Button
                              size="lg"
                              className="bg-[#e24e1b] hover:bg-[#c43e15] text-white"
                              onClick={() => window.location.href = '/features#verarbeitungsverzeichnis-ropa'}
                            >
                              ROPA-Software ansehen
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

export default Verarbeitungsverzeichnis;
