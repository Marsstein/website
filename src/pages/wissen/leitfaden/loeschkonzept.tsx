import React, { useState, useEffect } from 'react';
import SEOHead from '../../../components/SEOHead';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  Trash2,
  FileText,
  Database,
  Clock,
  Shield,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Info,
  Download,
  Target,
  Calendar,
  Lock,
  List,
  Filter,
  Archive,
  Users,
  Building,
  Globe,
  ChevronRight,
  Lightbulb,
  Scale,
  FileCheck,
  ClipboardList
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Loeschkonzept: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('loeschkonzept-grundlagen');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Löschkonzept erstellen nach DSGVO",
    "description": "Löschkonzept DSGVO: Vollständige Anleitung zur Erstellung eines rechtssicheren Löschkonzepts mit Muster, Vorlage und Beispielen. Speicherfristen richtig umsetzen.",
    "url": "https://marsstein.ai/wissen/leitfaden/loeschkonzept"
  };

  const sections = [
    { id: 'loeschkonzept-grundlagen', title: 'Grundlagen & Pflichten', icon: FileText, readTime: '8 Min' },
    { id: 'loeschkonzept-rechtsgrundlagen', title: 'Rechtsgrundlagen', icon: Scale, readTime: '6 Min' },
    { id: 'loeschkonzept-loeschfristen', title: 'Löschfristen & Aufbewahrungsfristen', icon: Calendar, readTime: '12 Min' },
    { id: 'loeschkonzept-erstellen', title: 'Schritt-für-Schritt Anleitung', icon: Target, readTime: '10 Min' },
    { id: 'loeschkonzept-praxis', title: 'Praxisbeispiele', icon: Building, readTime: '15 Min' },
    { id: 'loeschkonzept-umsetzung', title: 'Technische Umsetzung', icon: Database, readTime: '10 Min' },
    { id: 'loeschkonzept-muster', title: 'Vorlage & Muster', icon: FileCheck, readTime: '5 Min' }
  ];

  const loeschfristenBeispiele = [
    {
      category: 'Personal & Beschäftigte',
      icon: Users,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      fristen: [
        {
          datenart: 'Bewerbungsunterlagen (Absage)',
          loeschfrist: '6 Monate nach Absage',
          rechtsgrundlage: 'AGG-Schutz, Nachweispflicht',
          ausnahme: 'Mit Einwilligung: Talent-Pool bis zu 2 Jahre'
        },
        {
          datenart: 'Personalakten',
          loeschfrist: '10 Jahre nach Ausscheiden',
          rechtsgrundlage: 'Aufbewahrungspflicht § 257 HGB',
          ausnahme: 'Lohnunterlagen: 6 Jahre'
        },
        {
          datenart: 'Arbeitszeitnachweise',
          loeschfrist: '2 Jahre',
          rechtsgrundlage: 'ArbZG § 16 Abs. 2',
          ausnahme: 'Bei Streitigkeiten: bis zur Klärung'
        },
        {
          datenart: 'Gehaltsabrechnungen',
          loeschfrist: '10 Jahre',
          rechtsgrundlage: '§ 147 AO, § 257 HGB',
          ausnahme: 'Keine'
        }
      ]
    },
    {
      category: 'Kunden & Verträge',
      icon: Building,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      fristen: [
        {
          datenart: 'Kundenverträge',
          loeschfrist: '10 Jahre nach Vertragsende',
          rechtsgrundlage: '§ 257 HGB, § 147 AO',
          ausnahme: 'Gewährleistungsfristen beachten'
        },
        {
          datenart: 'Rechnungen (eingehend/ausgehend)',
          loeschfrist: '10 Jahre',
          rechtsgrundlage: '§ 147 AO, § 257 HGB',
          ausnahme: 'Keine'
        },
        {
          datenart: 'Angebote (nicht angenommen)',
          loeschfrist: '3-6 Monate',
          rechtsgrundlage: 'Berechtigtes Interesse endet',
          ausnahme: 'Keine gesetzliche Verpflichtung'
        },
        {
          datenart: 'Kundenkommunikation (E-Mails)',
          loeschfrist: '1-3 Jahre nach Vertragsende',
          rechtsgrundlage: 'Nachweis-/Dokumentationspflicht',
          ausnahme: 'Vertragsrelevante E-Mails: 10 Jahre'
        }
      ]
    },
    {
      category: 'Marketing & Newsletter',
      icon: Globe,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      fristen: [
        {
          datenart: 'Newsletter-Abonnenten',
          loeschfrist: 'Bei Abmeldung sofort',
          rechtsgrundlage: 'Widerruf der Einwilligung',
          ausnahme: 'Nachweis der Einwilligung: 3 Jahre'
        },
        {
          datenart: 'Einwilligungsnachweise (Consent)',
          loeschfrist: '3 Jahre',
          rechtsgrundlage: 'Nachweispflicht DSGVO',
          ausnahme: 'Keine'
        },
        {
          datenart: 'Website-Analytics Daten',
          loeschfrist: '14-26 Monate',
          rechtsgrundlage: 'Interessenabwägung',
          ausnahme: 'IP-Anonymisierung nach 7 Tagen'
        },
        {
          datenart: 'Cookie-Daten',
          loeschfrist: '12 Monate (max. 26 Monate)',
          rechtsgrundlage: 'TTDSG, ePrivacy',
          ausnahme: 'Technisch notwendige Cookies: Session'
        }
      ]
    },
    {
      category: 'IT & Sicherheit',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      fristen: [
        {
          datenart: 'Server-Logfiles',
          loeschfrist: '7-30 Tage',
          rechtsgrundlage: 'IT-Sicherheit, berechtigtes Interesse',
          ausnahme: 'Bei Sicherheitsvorfällen: bis zur Klärung'
        },
        {
          datenart: 'Videoüberwachung',
          loeschfrist: '72 Stunden',
          rechtsgrundlage: 'DSK-Orientierungshilfe',
          ausnahme: 'Bei konkretem Vorfall: bis zur Klärung'
        },
        {
          datenart: 'Zutrittsprotokolle',
          loeschfrist: '3-6 Monate',
          rechtsgrundlage: 'Berechtigtes Interesse',
          ausnahme: 'Keine'
        },
        {
          datenart: 'Backups',
          loeschfrist: 'Entsprechend Produktivdaten',
          rechtsgrundlage: 'Art. 17 Abs. 1 DSGVO',
          ausnahme: 'Backup-Zyklen beachten, dokumentieren'
        }
      ]
    }
  ];

  const erstellungsSchritte = [
    {
      schritt: 1,
      titel: 'Bestandsaufnahme',
      beschreibung: 'Alle Datenverarbeitungen identifizieren',
      icon: ClipboardList,
      tasks: [
        'Verarbeitungsverzeichnis als Basis nutzen',
        'Alle Datenkategorien auflisten',
        'Speicherorte dokumentieren',
        'Verantwortliche benennen'
      ]
    },
    {
      schritt: 2,
      titel: 'Löschfristen festlegen',
      beschreibung: 'Rechtliche und technische Fristen definieren',
      icon: Calendar,
      tasks: [
        'Gesetzliche Aufbewahrungsfristen prüfen',
        'Vertragliche Verpflichtungen beachten',
        'Zweckbindung evaluieren',
        'Fristen dokumentieren'
      ]
    },
    {
      schritt: 3,
      titel: 'Löschprozess definieren',
      beschreibung: 'Technische und organisatorische Abläufe festlegen',
      icon: Target,
      tasks: [
        'Löschroutinen etablieren',
        'Verantwortlichkeiten zuweisen',
        'Technische Umsetzung planen',
        'Ausnahmen definieren'
      ]
    },
    {
      schritt: 4,
      titel: 'Dokumentation & Wartung',
      beschreibung: 'Löschkonzept pflegen und aktualisieren',
      icon: FileCheck,
      tasks: [
        'Löschkonzept schriftlich fixieren',
        'Regelmäßige Reviews durchführen',
        'Mitarbeiter schulen',
        'Löschungen protokollieren'
      ]
    }
  ];

  const technischeUmsetzung = [
    {
      kategorie: 'Automatisierte Löschung',
      icon: Database,
      massnahmen: [
        'Datenbank-Trigger für automatische Löschung',
        'Cronjobs für regelmäßige Löschläufe',
        'Retention Policies in Cloud-Systemen',
        'Automatische Archivierung vor Löschung'
      ]
    },
    {
      kategorie: 'Manuelle Prozesse',
      icon: Users,
      massnahmen: [
        'Regelmäßige Überprüfung durch Verantwortliche',
        'Checklisten für Löschvorgänge',
        'Vier-Augen-Prinzip bei kritischen Daten',
        'Eskalationsprozess bei Unsicherheiten'
      ]
    },
    {
      kategorie: 'Dokumentation',
      icon: FileText,
      massnahmen: [
        'Löschprotokolle führen',
        'Zeitstempel der Löschungen',
        'Begründung für Ausnahmen',
        'Nachweis der ordnungsgemäßen Löschung'
      ]
    },
    {
      kategorie: 'Technische Löschung',
      icon: Lock,
      massnahmen: [
        'Sichere Datenträgervernichtung',
        'Mehrfaches Überschreiben bei HDDs',
        'Crypto-Shredding bei verschlüsselten Daten',
        'Physische Vernichtung bei sensiblen Daten'
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
        title="Löschkonzept DSGVO erstellen – Muster, Vorlage & Anleitung"
        description="Löschkonzept DSGVO: ✓ Schritt-für-Schritt Anleitung ✓ Muster & Vorlagen ✓ Löschfristen-Tabelle ✓ Praxisbeispiele. Jetzt rechtssicheres Datenschutz-Löschkonzept erstellen!"
        canonical="/wissen/leitfaden/loeschkonzept"
        keywords="löschkonzept, löschkonzept dsgvo, löschkonzept dsgvo muster, dsgvo löschkonzept, löschkonzept muster, löschkonzept datenschutz, löschkonzept vorlage, datenschutz löschkonzept, löschkonzept erstellen"
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
                <Trash2 className="h-3 w-3 mr-1" />
                DSGVO Art. 17 & Art. 5
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Löschkonzept DSGVO erstellen
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Vollständige Anleitung zur Erstellung eines rechtssicheren Löschkonzepts
                mit Muster, Vorlagen und Praxisbeispielen
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
                  <div className="text-sm font-medium">Pflicht für</div>
                  <div className="text-lg font-bold">Alle Unternehmen</div>
                  <div className="text-xs text-gray-500">nach DSGVO</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Clock className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Aufwand</div>
                  <div className="text-lg font-bold">1-3 Wochen</div>
                  <div className="text-xs text-gray-500">Ersterstellung</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <AlertTriangle className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Bußgeld bis</div>
                  <div className="text-lg font-bold">20 Mio €</div>
                  <div className="text-xs text-gray-500">bei Verstößen</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Shield className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Nutzen</div>
                  <div className="text-lg font-bold">Compliance</div>
                  <div className="text-xs text-gray-500">& Risikominimierung</div>
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
                  <strong>Wichtig:</strong> Ein Löschkonzept ist integraler Bestandteil der DSGVO-Compliance. Es dokumentiert, wann und wie personenbezogene Daten gelöscht werden, um den <strong>Grundsatz der Speicherbegrenzung (Art. 5 Abs. 1 lit. e DSGVO)</strong> einzuhalten. → <Link to="/wissen/leitfaden/verarbeitungsverzeichnis" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold underline">Verarbeitungsverzeichnis als Basis nutzen</Link>
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
                <section id="loeschkonzept-grundlagen" className="space-y-8 scroll-mt-32">
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
                          Grundlagen & Pflichten
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Was ist ein Löschkonzept?</p>
                      </div>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Was ist ein Löschkonzept?</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p className="text-gray-600 dark:text-gray-400">
                          Ein Löschkonzept ist ein systematischer Plan, der festlegt, wann und wie personenbezogene
                          Daten gelöscht werden. Es dokumentiert Löschfristen, Verantwortlichkeiten und technische
                          Prozesse zur Umsetzung der Löschpflicht nach DSGVO.
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500" />
                              Warum ist es Pflicht?
                            </h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Grundsatz der Speicherbegrenzung (Art. 5 DSGVO)</li>
                              <li>• Recht auf Löschung (Art. 17 DSGVO)</li>
                              <li>• Rechenschaftspflicht (Art. 5 Abs. 2 DSGVO)</li>
                              <li>• Anforderung der Aufsichtsbehörden</li>
                            </ul>
                          </div>

                          <div className="space-y-3">
                            <h4 className="font-semibold flex items-center gap-2">
                              <Target className="h-5 w-5 text-blue-500" />
                              Zweck & Nutzen
                            </h4>
                            <ul className="space-y-2 text-sm">
                              <li>• Compliance nachweisen</li>
                              <li>• Datensparsamkeit umsetzen</li>
                              <li>• Risiken minimieren</li>
                              <li>• Prozesse standardisieren</li>
                            </ul>
                          </div>
                        </div>

                        <Alert>
                          <Lightbulb className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Tipp:</strong> Ein gutes Löschkonzept basiert auf dem Verarbeitungsverzeichnis
                            und definiert für jede Verarbeitungstätigkeit konkrete Löschfristen.
                          </AlertDescription>
                        </Alert>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Wer braucht ein Löschkonzept?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <p className="text-gray-600 dark:text-gray-400">
                            Jedes Unternehmen und jede Organisation, die personenbezogene Daten verarbeitet,
                            benötigt ein Löschkonzept – unabhängig von Größe oder Branche.
                          </p>

                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                              <Building className="h-8 w-8 text-blue-600 mb-2" />
                              <h5 className="font-semibold mb-1">Unternehmen</h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Alle Größen, B2B & B2C
                              </p>
                            </div>
                            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                              <Users className="h-8 w-8 text-green-600 mb-2" />
                              <h5 className="font-semibold mb-1">Vereine</h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Mitgliederverwaltung
                              </p>
                            </div>
                            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                              <Shield className="h-8 w-8 text-purple-600 mb-2" />
                              <h5 className="font-semibold mb-1">Behörden</h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                Öffentliche Stellen
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="loeschkonzept-rechtsgrundlagen" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Scale className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Rechtsgrundlagen
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">DSGVO und weitere Gesetze</p>
                      </div>
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Art. 5 Abs. 1 lit. e DSGVO – Speicherbegrenzung</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            "Personenbezogene Daten müssen in einer Form gespeichert werden, die die Identifizierung
                            der betroffenen Personen nur so lange ermöglicht, wie es für die Zwecke, für die sie
                            verarbeitet werden, erforderlich ist."
                          </p>
                        </div>
                        <p className="text-sm">
                          Dies bedeutet: Sobald der Zweck der Verarbeitung entfällt, müssen die Daten gelöscht werden –
                          es sei denn, es bestehen gesetzliche Aufbewahrungspflichten.
                        </p>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Art. 17 DSGVO – Recht auf Löschung</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Betroffene Personen haben das Recht auf Löschung ihrer Daten, wenn:
                          </p>
                          <div className="grid md:grid-cols-2 gap-3">
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">Die Daten nicht mehr notwendig sind</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">Die Einwilligung widerrufen wurde</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">Die Daten unrechtmäßig verarbeitet wurden</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">Es besteht eine rechtliche Verpflichtung</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Aufbewahrungspflichten vs. Löschpflicht</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          <Alert>
                            <Info className="h-4 w-4" />
                            <AlertDescription>
                              <strong>Konflikt:</strong> Steuerliche und handelsrechtliche Aufbewahrungspflichten
                              gehen der Löschpflicht vor (Art. 17 Abs. 3 lit. b DSGVO).
                            </AlertDescription>
                          </Alert>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="border rounded-lg p-4">
                              <h5 className="font-semibold mb-2 flex items-center gap-2">
                                <FileText className="h-5 w-5 text-blue-500" />
                                § 147 AO (Abgabenordnung)
                              </h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                6 Jahre Aufbewahrungspflicht:
                              </p>
                              <ul className="text-xs space-y-1">
                                <li>• Lohnunterlagen</li>
                                <li>• Geschäftsbriefe</li>
                                <li>• Sonstige Unterlagen</li>
                              </ul>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 mt-3">
                                10 Jahre Aufbewahrungspflicht:
                              </p>
                              <ul className="text-xs space-y-1">
                                <li>• Bücher und Aufzeichnungen</li>
                                <li>• Inventare</li>
                                <li>• Jahresabschlüsse</li>
                                <li>• Rechnungen</li>
                              </ul>
                            </div>

                            <div className="border rounded-lg p-4">
                              <h5 className="font-semibold mb-2 flex items-center gap-2">
                                <Building className="h-5 w-5 text-green-500" />
                                § 257 HGB (Handelsgesetzbuch)
                              </h5>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                6 Jahre Aufbewahrungspflicht:
                              </p>
                              <ul className="text-xs space-y-1">
                                <li>• Empfangene Handelsbriefe</li>
                                <li>• Kopien der versandten Handelsbriefe</li>
                              </ul>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 mt-3">
                                10 Jahre Aufbewahrungspflicht:
                              </p>
                              <ul className="text-xs space-y-1">
                                <li>• Handelsbücher</li>
                                <li>• Inventare</li>
                                <li>• Eröffnungsbilanz</li>
                                <li>• Jahresabschlüsse</li>
                                <li>• Buchungsbelege</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="loeschkonzept-loeschfristen" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Calendar className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Löschfristen & Aufbewahrungsfristen
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Übersicht nach Datenkategorien</p>
                      </div>
                    </div>

                    {loeschfristenBeispiele.map((category, index) => (
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
                            {category.fristen.map((frist, fIndex) => (
                              <div key={fIndex} className="border rounded-lg p-4 space-y-3">
                                <div className="flex items-start justify-between">
                                  <h4 className="font-semibold text-lg">{frist.datenart}</h4>
                                  <Badge variant="outline" className="ml-2">
                                    <Clock className="h-3 w-3 mr-1" />
                                    {frist.loeschfrist}
                                  </Badge>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4 text-sm">
                                  <div>
                                    <span className="font-medium text-gray-600 dark:text-gray-400">Rechtsgrundlage:</span>
                                    <p>{frist.rechtsgrundlage}</p>
                                  </div>
                                  <div>
                                    <span className="font-medium text-gray-600 dark:text-gray-400">Ausnahme:</span>
                                    <p>{frist.ausnahme}</p>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}

                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Wichtig:</strong> Die angegebenen Fristen sind Richtwerte. Prüfen Sie immer die
                        spezifischen gesetzlichen Anforderungen für Ihre Branche und Ihre Verarbeitungstätigkeiten.
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                </section>

                <section id="loeschkonzept-erstellen" className="space-y-8 scroll-mt-32">
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
                        <p className="text-gray-600 dark:text-gray-400">So erstellen Sie Ihr Löschkonzept</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {erstellungsSchritte.map((step, index) => {
                        const IconComponent = step.icon;
                        return (
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
                              <div className="space-y-3 mb-4">
                                {step.tasks.map((task, tIndex) => (
                                  <div key={tIndex} className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                                    <span className="text-sm">{task}</span>
                                  </div>
                                ))}
                              </div>
                              <div className="flex items-center justify-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                                <IconComponent className="h-12 w-12 text-blue-600" />
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>

                    <Alert>
                      <Info className="h-4 w-4" />
                      <AlertDescription>
                        <strong>Best Practice:</strong> Integrieren Sie das Löschkonzept in Ihre bestehende
                        Datenschutz-Dokumentation und verknüpfen Sie es mit dem Verarbeitungsverzeichnis.
                      </AlertDescription>
                    </Alert>
                  </motion.div>
                </section>

                <section id="loeschkonzept-praxis" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center">
                        <Building className="h-6 w-6 text-cyan-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Praxisbeispiele
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Löschkonzept in verschiedenen Szenarien</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Users className="h-5 w-5 text-blue-600" />
                            Bewerbermanagement
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2">Szenario</h5>
                            <p className="text-sm">
                              Ein Bewerber wird abgelehnt. Die Bewerbungsunterlagen müssen nach
                              6 Monaten gelöscht werden.
                            </p>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Automatischer Lösch-Trigger nach 6 Monaten</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>E-Mail-Benachrichtigung an HR 2 Wochen vorher</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Ausnahme: Mit Einwilligung Talent-Pool (24 Monate)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Löschprotokoll mit Zeitstempel</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Globe className="h-5 w-5 text-green-600" />
                            Newsletter-Abmeldung
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2">Szenario</h5>
                            <p className="text-sm">
                              Ein Abonnent meldet sich vom Newsletter ab. Die Daten müssen
                              sofort gelöscht werden.
                            </p>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Sofortige Löschung aus Verteiler</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Einwilligungsnachweis 3 Jahre aufbewahren</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Automatische Bestätigung an Abonnenten</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Löschung aus allen verbundenen Systemen</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Building className="h-5 w-5 text-purple-600" />
                            Kundenvertrag endet
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2">Szenario</h5>
                            <p className="text-sm">
                              Ein Kundenvertrag endet. Aufbewahrungspflichten von 10 Jahren
                              müssen beachtet werden.
                            </p>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Archivierung der Vertragsdaten (10 Jahre)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Löschung von Marketing-Daten (sofort)</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Zugriffsbeschränkung auf Archiv</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Automatische Löschung nach Ablauf der Frist</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Shield className="h-5 w-5 text-red-600" />
                            Videoüberwachung
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                            <h5 className="font-semibold text-sm mb-2">Szenario</h5>
                            <p className="text-sm">
                              Videoaufnahmen zur Gebäudesicherheit müssen nach 72 Stunden
                              gelöscht werden.
                            </p>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Automatisches Überschreiben nach 72h</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Bei Vorfall: Sicherung und separate Dokumentation</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Zugriffsprotokoll für alle Einsichtnahmen</span>
                            </div>
                            <div className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>Technische Umsetzung: Ring-Speicher-System</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </motion.div>
                </section>

                <section id="loeschkonzept-umsetzung" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <Database className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Technische Umsetzung
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Prozesse und Maßnahmen</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {technischeUmsetzung.map((bereich, index) => {
                        const IconComponent = bereich.icon;
                        return (
                          <Card key={index}>
                            <CardHeader>
                              <CardTitle className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                  <IconComponent className="h-5 w-5 text-blue-600" />
                                </div>
                                {bereich.kategorie}
                              </CardTitle>
                            </CardHeader>
                            <CardContent>
                              <ul className="space-y-3">
                                {bereich.massnahmen.map((massnahme, mIndex) => (
                                  <li key={mIndex} className="flex items-start gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{massnahme}</span>
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>

                    <Card>
                      <CardHeader>
                        <CardTitle>Backup-Problematik</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <Alert>
                          <AlertTriangle className="h-4 w-4" />
                          <AlertDescription>
                            <strong>Herausforderung:</strong> Daten in Backups können technisch oft nicht sofort
                            gelöscht werden. Dies ist aber DSGVO-konform möglich, wenn:
                          </AlertDescription>
                        </Alert>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h5 className="font-semibold text-sm">✓ Zulässige Ansätze</h5>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Löschung im Produktivsystem dokumentieren</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Backup-Zyklen definieren und dokumentieren</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Automatische Löschung beim nächsten Backup-Zyklus</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Restore-Prozess mit Lösch-Check</span>
                              </li>
                            </ul>
                          </div>

                          <div className="space-y-2">
                            <h5 className="font-semibold text-sm">✗ Problematische Ansätze</h5>
                            <ul className="space-y-2 text-sm">
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>Unbegrenzte Backup-Aufbewahrung</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>Keine Dokumentation der Backup-Fristen</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>Kein Prozess für Löschung bei Restore</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <AlertTriangle className="h-4 w-4 text-red-500 mt-0.5 flex-shrink-0" />
                                <span>Fehlende Überwachung der Backup-Löschung</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </section>

                <section id="loeschkonzept-muster" className="space-y-8 scroll-mt-32">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                        <FileCheck className="h-6 w-6 text-indigo-600" />
                      </div>
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                          Vorlage & Muster
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Löschkonzept-Vorlage zum Download</p>
                      </div>
                    </div>

                    <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50">
                      <CardContent className="p-8">
                        <div className="text-center mb-6">
                          <FileCheck className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                          <h3 className="text-2xl font-bold mb-2">Löschkonzept Muster PDF</h3>
                          <p className="text-gray-600 mb-6">
                            Professionelle Vorlage mit allen Pflichtangaben, Beispielen und Checklisten
                          </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                          <div className="text-center p-4 bg-white rounded-lg">
                            <FileText className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                            <div className="font-semibold">Vollständig</div>
                            <div className="text-sm text-gray-600">Alle Pflichtangaben</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg">
                            <List className="h-8 w-8 text-green-600 mx-auto mb-2" />
                            <div className="font-semibold">Praxisnah</div>
                            <div className="text-sm text-gray-600">Mit Beispielen</div>
                          </div>
                          <div className="text-center p-4 bg-white rounded-lg">
                            <Download className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                            <div className="font-semibold">Sofort nutzbar</div>
                            <div className="text-sm text-gray-600">Word & Excel</div>
                          </div>
                        </div>

                        <div className="flex justify-center gap-4">
                          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                            <Download className="mr-2 h-5 w-5" />
                            Muster herunterladen
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
                      <CardContent className="p-8">
                        <div className="flex flex-col md:flex-row items-center gap-6">
                          <div className="flex-shrink-0">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#e24e1b] to-[#f97316] rounded-xl flex items-center justify-center">
                              <Database className="w-8 h-8 text-white" />
                            </div>
                          </div>
                          <div className="flex-1 text-center md:text-left">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              Löschkonzept automatisch umsetzen
                            </h3>
                            <p className="text-gray-700 mb-4">
                              Automatisieren Sie Ihr Löschkonzept mit unserer DSGVO-Software.
                              Definieren Sie Löschfristen einmal und lassen Sie die Software
                              die Umsetzung, Überwachung und Dokumentation übernehmen.
                            </p>
                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span>Automatische Löschläufe</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span>Lösch-Protokollierung</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <CheckCircle2 className="w-4 h-4 text-green-600" />
                                <span>Erinnerungen & Alerts</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex-shrink-0">
                            <Button
                              size="lg"
                              className="bg-[#e24e1b] hover:bg-[#c43e15] text-white"
                              onClick={() => window.location.href = '/features#loeschkonzept-automatisierung'}
                            >
                              Löschkonzept-Software ansehen
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle>Checkliste: Ist Ihr Löschkonzept vollständig?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-3">
                            <h5 className="font-semibold">Dokumentation</h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>Alle Verarbeitungstätigkeiten erfasst?</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>Löschfristen für jede Kategorie definiert?</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>Rechtsgrundlagen dokumentiert?</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                                <span>Ausnahmen und Aufbewahrungspflichten benannt?</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <h5 className="font-semibold">Prozesse</h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Löschprozesse definiert?</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Verantwortlichkeiten zugewiesen?</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Technische Umsetzung geregelt?</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>Löschprotokollierung implementiert?</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <h5 className="font-semibold">Wartung</h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span>Regelmäßige Reviews eingeplant?</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span>Mitarbeiter geschult?</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span>Aktualisierungsprozess etabliert?</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                                <span>Backup-Problematik adressiert?</span>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-3">
                            <h5 className="font-semibold">Compliance</h5>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span>Mit Verarbeitungsverzeichnis verknüpft?</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span>Betroffenenrechte berücksichtigt?</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span>Aufsichtsbehörde-konform?</span>
                              </div>
                              <div className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-orange-500 mt-0.5 flex-shrink-0" />
                                <span>Nachweise für Audits vorhanden?</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg text-white text-center">
                      <h3 className="text-2xl font-bold mb-3">
                        Professionelle Unterstützung benötigt?
                      </h3>
                      <p className="text-lg mb-6 opacity-90">
                        Unsere Datenschutz-Experten helfen Ihnen bei der Erstellung und Umsetzung Ihres Löschkonzepts
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                          size="lg"
                          variant="secondary"
                          className="bg-white text-blue-600 hover:bg-blue-50"
                          asChild
                        >
                          <Link to="/contact">
                            Beratung anfragen
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                        <Button
                          size="lg"
                          variant="outline"
                          className="border-white text-white hover:bg-white hover:text-blue-600"
                          asChild
                        >
                          <Link to="/features">
                            Software-Demo buchen
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </Link>
                        </Button>
                      </div>
                    </div>
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

export default Loeschkonzept;
