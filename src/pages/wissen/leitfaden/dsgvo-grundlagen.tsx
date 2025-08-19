import React from 'react';
import SEOHead from '../../../components/SEOHead';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Shield,
  FileText,
  Users,
  Lock,
  Scale,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Info,
  Target,
  Database,
  Eye,
  UserCheck,
  Building2,
  ChevronRight,
  Download,
  ExternalLink,
  Lightbulb,
  HelpCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DSGVOGrundlagen: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "name": "DSGVO Grundlagen - Basiswissen verständlich erklärt",
    "description": "DSGVO-Grundlagen für Einsteiger: Prinzipien, Rechtsgrundlagen, Verantwortlichkeiten. Verständlich erklärt mit praktischen Beispielen.",
    "url": "https://marsstein.com/wissen/leitfaden/dsgvo-grundlagen"
  };

  const tableOfContents = [
    { id: 'einfuehrung', title: 'Einführung in die DSGVO', level: 1 },
    { id: 'was-ist-dsgvo', title: 'Was ist die DSGVO?', level: 2 },
    { id: 'warum-dsgvo', title: 'Warum gibt es die DSGVO?', level: 2 },
    { id: 'grundsaetze', title: 'Die 7 DSGVO-Grundsätze', level: 1 },
    { id: 'rechtsgrundlagen', title: 'Rechtsgrundlagen der Datenverarbeitung', level: 1 },
    { id: 'verantwortlichkeiten', title: 'Rollen und Verantwortlichkeiten', level: 1 },
    { id: 'betroffenenrechte', title: 'Betroffenenrechte im Überblick', level: 1 },
    { id: 'umsetzung', title: 'Praktische Umsetzungstipps', level: 1 }
  ];

  return (
    <>
      <SEOHead
        title="DSGVO Grundlagen – Basiswissen verständlich erklärt"
        description="DSGVO-Grundlagen für Einsteiger: 7 Grundsätze, Rechtsgrundlagen, Verantwortlichkeiten, Betroffenenrechte. ✓ Verständlich ✓ Praxisnah ✓ Mit Beispielen. Jetzt lernen!"
        canonical="/wissen/leitfaden/dsgvo-grundlagen"
        keywords="DSGVO Grundlagen, DSGVO Basiswissen, DSGVO für Einsteiger, DSGVO verstehen, DSGVO Prinzipien"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="container mx-auto max-w-5xl">
            <motion.div
              className="text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="mb-4 px-4 py-1" variant="outline">
                <BookOpen className="h-3 w-3 mr-1" />
                DSGVO Leitfaden
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                DSGVO Grundlagen verstehen
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Fundamentales DSGVO-Basiswissen verständlich erklärt - 
                von Prinzipien über Rechtsgrundlagen bis zu Verantwortlichkeiten
              </p>
            </motion.div>

            {/* Table of Contents */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5" />
                    Inhaltsverzeichnis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`block py-2 px-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
                          item.level === 1 ? 'font-semibold text-gray-900 dark:text-white' : 'ml-4 text-gray-600 dark:text-gray-400'
                        }`}
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </motion.div>

            {/* Main Content */}
            <motion.div
              className="space-y-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {/* Einführung */}
              <section id="einfuehrung" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <BookOpen className="h-8 w-8 text-blue-600" />
                  Einführung in die DSGVO
                </h2>
                
                <div className="space-y-6">
                  <Card id="was-ist-dsgvo" className="scroll-mt-24">
                    <CardHeader>
                      <CardTitle className="text-2xl">Was ist die DSGVO?</CardTitle>
                      <CardDescription className="text-base">
                        Die Datenschutz-Grundverordnung (DSGVO) ist eine EU-Verordnung, die seit dem 25. Mai 2018 den Datenschutz EU-weit einheitlich regelt.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Gilt in allen 27 EU-Mitgliedstaaten</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Direkt anwendbar ohne nationale Umsetzung</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Ersetzt die Datenschutzrichtlinie 95/46/EG</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Stärkt Betroffenenrechte erheblich</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card id="warum-dsgvo" className="scroll-mt-24">
                    <CardHeader>
                      <CardTitle className="text-2xl">Warum gibt es die DSGVO?</CardTitle>
                      <CardDescription className="text-base">
                        Die DSGVO wurde geschaffen, um den Datenschutz in der digitalen Welt zu modernisieren und zu harmonisieren.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Anpassung an digitale Transformation</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Einheitlicher Rechtsrahmen in der EU</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Stärkung der Kontrolle über eigene Daten</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>Förderung des digitalen Binnenmarkts</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Die 7 Grundsätze */}
              <section id="grundsaetze" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <Scale className="h-8 w-8 text-blue-600" />
                  Die 7 DSGVO-Grundsätze
                </h2>
                
                <Alert className="mb-6">
                  <Lightbulb className="h-4 w-4" />
                  <AlertDescription>
                    Die 7 Grundsätze sind das Fundament der DSGVO. Jede Datenverarbeitung muss alle Grundsätze erfüllen!
                  </AlertDescription>
                </Alert>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">1. Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz</CardTitle>
                      <CardDescription className="text-base">
                        Datenverarbeitung muss rechtmäßig, fair und für Betroffene nachvollziehbar sein.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm mb-1">Beispiel:</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Klare Datenschutzerklärung mit verständlicher Sprache
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">2. Zweckbindung</CardTitle>
                      <CardDescription className="text-base">
                        Daten dürfen nur für festgelegte, eindeutige und legitime Zwecke erhoben werden.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm mb-1">Beispiel:</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              E-Mail für Newsletter darf nicht für Werbeanrufe genutzt werden
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">3. Datenminimierung</CardTitle>
                      <CardDescription className="text-base">
                        Nur Daten erheben, die für den Zweck notwendig sind.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm mb-1">Beispiel:</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Für Newsletter nur E-Mail, nicht Geburtsdatum erfragen
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">4. Richtigkeit</CardTitle>
                      <CardDescription className="text-base">
                        Daten müssen sachlich richtig und aktuell sein.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm mb-1">Beispiel:</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Regelmäßige Aktualisierung von Kundendaten
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">5. Speicherbegrenzung</CardTitle>
                      <CardDescription className="text-base">
                        Daten nur so lange speichern wie nötig.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm mb-1">Beispiel:</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Bewerberdaten nach 6 Monaten löschen
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">6. Integrität und Vertraulichkeit</CardTitle>
                      <CardDescription className="text-base">
                        Angemessene Sicherheit der Daten gewährleisten.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm mb-1">Beispiel:</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Verschlüsselung, Zugangskontrollen, Backups
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">7. Rechenschaftspflicht</CardTitle>
                      <CardDescription className="text-base">
                        Einhaltung nachweisen können.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm mb-1">Beispiel:</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Dokumentation aller Datenschutzmaßnahmen
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Rechtsgrundlagen */}
              <section id="rechtsgrundlagen" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <FileText className="h-8 w-8 text-blue-600" />
                  Rechtsgrundlagen der Datenverarbeitung
                </h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Einwilligung (Art. 6 Abs. 1 lit. a)</CardTitle>
                      <CardDescription className="text-base">
                        Freiwillige, informierte und eindeutige Willensbekundung
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Voraussetzungen:</h4>
                        <div className="space-y-1">
                          <div className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Freiwillig (keine Kopplung)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Informiert (klare Information)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Eindeutig (aktive Handlung)</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Widerrufbar</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm mb-1">Beispiel:</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Newsletter-Anmeldung mit Double-Opt-In
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Vertrag (Art. 6 Abs. 1 lit. b)</CardTitle>
                      <CardDescription className="text-base">
                        Notwendig für Vertragserfüllung oder vorvertragliche Maßnahmen
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Voraussetzungen:</h4>
                        <div className="space-y-1">
                          <div className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Bestehender oder angebahnter Vertrag</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Verarbeitung für Vertrag erforderlich</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Kein milderes Mittel verfügbar</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm mb-1">Beispiel:</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Adresse für Warenversand speichern
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c)</CardTitle>
                      <CardDescription className="text-base">
                        Gesetzliche Pflicht zur Datenverarbeitung
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Voraussetzungen:</h4>
                        <div className="space-y-1">
                          <div className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Konkrete gesetzliche Grundlage</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">EU- oder nationales Recht</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Verarbeitung zwingend erforderlich</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm mb-1">Beispiel:</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Aufbewahrung von Rechnungen für Finanzamt
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Berechtigtes Interesse (Art. 6 Abs. 1 lit. f)</CardTitle>
                      <CardDescription className="text-base">
                        Interessen des Verantwortlichen oder Dritter
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Voraussetzungen:</h4>
                        <div className="space-y-1">
                          <div className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Berechtigtes Interesse vorhanden</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Verarbeitung erforderlich</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Interessenabwägung positiv</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Keine überwiegenden Betroffeneninteressen</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm mb-1">Beispiel:</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Videoüberwachung zum Eigentumsschutz
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Verantwortlichkeiten */}
              <section id="verantwortlichkeiten" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <Building2 className="h-8 w-8 text-blue-600" />
                  Rollen und Verantwortlichkeiten
                </h2>
                
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Verantwortlicher</CardTitle>
                      <CardDescription className="text-base">
                        Bestimmt Zwecke und Mittel der Verarbeitung
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Pflichten:</h4>
                        <div className="space-y-1">
                          <div className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Einhaltung der DSGVO sicherstellen</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Betroffenenrechte gewährleisten</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Datenschutz-Dokumentation führen</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Bei Verstößen haften</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm mb-1">Beispiel:</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Unternehmen, das Kundendaten verarbeitet
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Auftragsverarbeiter</CardTitle>
                      <CardDescription className="text-base">
                        Verarbeitet Daten im Auftrag des Verantwortlichen
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Pflichten:</h4>
                        <div className="space-y-1">
                          <div className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Nur auf Weisung verarbeiten</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Eigene TOMs implementieren</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Unterstützung bei Betroffenenrechten</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Löschung nach Auftragsende</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm mb-1">Beispiel:</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Cloud-Anbieter, Lohnabrechnung
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Gemeinsame Verantwortlichkeit</CardTitle>
                      <CardDescription className="text-base">
                        Mehrere bestimmen gemeinsam Zwecke und Mittel
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Pflichten:</h4>
                        <div className="space-y-1">
                          <div className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Vereinbarung über Aufgabenteilung</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Transparenz für Betroffene</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Gemeinsame Kontaktstelle</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <Shield className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">Solidarische Haftung</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                        <div className="flex items-start gap-2">
                          <Lightbulb className="h-5 w-5 text-blue-600 flex-shrink-0" />
                          <div>
                            <div className="font-medium text-sm mb-1">Beispiel:</div>
                            <div className="text-sm text-gray-600 dark:text-gray-400">
                              Facebook-Fanpage-Betreiber
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </section>

              {/* Betroffenenrechte */}
              <section id="betroffenenrechte" className="scroll-mt-24">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                  <Users className="h-8 w-8 text-blue-600" />
                  Betroffenenrechte im Überblick
                </h2>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <Info className="h-5 w-5 text-blue-600 mt-0.5" />
                        Informationsrecht (Art. 13/14)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Recht auf transparente Information über Datenverarbeitung
                      </p>
                      <Badge variant="outline">
                        Frist: Bei Erhebung
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <Eye className="h-5 w-5 text-blue-600 mt-0.5" />
                        Auskunftsrecht (Art. 15)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Recht zu erfahren, welche Daten verarbeitet werden
                      </p>
                      <Badge variant="outline">
                        Frist: 1 Monat
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 mt-0.5" />
                        Berichtigungsrecht (Art. 16)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Recht auf Korrektur falscher Daten
                      </p>
                      <Badge variant="outline">
                        Frist: 1 Monat
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <UserCheck className="h-5 w-5 text-blue-600 mt-0.5" />
                        Löschungsrecht (Art. 17)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Recht auf Löschung ("Recht auf Vergessenwerden")
                      </p>
                      <Badge variant="outline">
                        Frist: 1 Monat
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <Lock className="h-5 w-5 text-blue-600 mt-0.5" />
                        Einschränkungsrecht (Art. 18)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Recht auf Sperrung der Verarbeitung
                      </p>
                      <Badge variant="outline">
                        Frist: 1 Monat
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <Database className="h-5 w-5 text-blue-600 mt-0.5" />
                        Datenübertragbarkeit (Art. 20)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Recht auf Herausgabe in strukturiertem Format
                      </p>
                      <Badge variant="outline">
                        Frist: 1 Monat
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-blue-600 mt-0.5" />
                        Widerspruchsrecht (Art. 21)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Recht auf Widerspruch gegen Verarbeitung
                      </p>
                      <Badge variant="outline">
                        Frist: Unverzüglich
                      </Badge>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-3">
                        <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
                        Automatisierte Entscheidungen (Art. 22)
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Schutz vor rein automatisierten Entscheidungen
                      </p>
                      <Badge variant="outline">
                        Frist: Präventiv
                      </Badge>
                    </CardContent>
                  </Card>
                </div>
              </section>
            </motion.div>

            {/* Practical Tips */}
            <motion.section
              id="umsetzung"
              className="mt-16 scroll-mt-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
                <Target className="h-8 w-8 text-blue-600" />
                Praktische Umsetzungstipps
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Datenschutzerklärung</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Leicht auffindbar (1-Klick-Regel)</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Verständliche Sprache verwenden</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Alle Verarbeitungen aufführen</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Kontaktdaten des DSB angeben</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Verarbeitungsverzeichnis</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Alle Verarbeitungstätigkeiten dokumentieren</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Regelmäßig aktualisieren</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Löschfristen festlegen</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">TOMs beschreiben</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Mitarbeiterschulung</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Bei Einstellung schulen</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Jährliche Auffrischung</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Dokumentation der Schulungen</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">Praktische Beispiele verwenden</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.section>

            {/* Next Steps */}
            <motion.div
              className="mt-16 grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">DSGVO-Checkliste</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Prüfen Sie Ihre DSGVO-Compliance
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/assessment-center/dsgvo-compliance-checklist">
                      Zur Checkliste
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Download className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">PDF-Download</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Dieser Leitfaden als PDF
                  </p>
                  <Button variant="outline">
                    PDF herunterladen
                    <Download className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <HelpCircle className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Beratung</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Individuelle DSGVO-Beratung
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      Experten fragen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Bereit für den nächsten Schritt?
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Vertiefen Sie Ihr DSGVO-Wissen mit unseren Praxis-Leitfäden
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-blue-50"
                    asChild
                  >
                    <Link to="/wissen/leitfaden/website-dsgvo">
                      Website DSGVO-konform
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600"
                    asChild
                  >
                    <Link to="/wissen/dsgvo-leitfaeden">
                      Alle Leitfäden
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default DSGVOGrundlagen;