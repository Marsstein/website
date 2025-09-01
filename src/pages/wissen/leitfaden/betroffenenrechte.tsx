import React, { useState } from 'react';
import SEOHead from '../../../components/SEOHead';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
  const [activeRight, setActiveRight] = useState('auskunft');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Betroffenenrechte DSGVO umsetzen",
    "description": "Betroffenenrechte nach DSGVO professionell umsetzen: Auskunft, Löschung, Berichtigung, Datenportabilität. Prozesse, Fristen und Vorlagen für alle Anfragen.",
    "url": "https://marsstein.ai/wissen/leitfaden/betroffenenrechte"
  };

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

  const currentRight = betroffenenrechte[activeRight as keyof typeof betroffenenrechte];

  return (
    <>
      <SEOHead
        title="Betroffenenrechte DSGVO – Prozesse & Vorlagen"
        description="Betroffenenrechte nach DSGVO umsetzen: ✓ Auskunft ✓ Löschung ✓ Berichtigung ✓ Datenportabilität. Prozesse, Fristen, Vorlagen. Jetzt DSGVO-konform handeln!"
        canonical="/wissen/leitfaden/betroffenenrechte"
        keywords="Betroffenenrechte DSGVO, Auskunftsrecht, Löschungsrecht, Recht auf Vergessenwerden, Datenportabilität"
        structuredData={structuredData}
      />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <Header />
        
        {/* Hero Section */}
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

            {/* Key Metrics */}
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

            {/* Rights Overview */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-wrap gap-2 justify-center">
                {Object.entries(betroffenenrechte).map(([key, right]) => {
                  const Icon = right.icon;
                  return (
                    <Button
                      key={key}
                      variant={activeRight === key ? "default" : "outline"}
                      onClick={() => setActiveRight(key)}
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {right.title}
                    </Button>
                  );
                })}
              </div>
            </motion.div>

            {/* Selected Right Details */}
            <motion.div
              key={activeRight}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={cn("mb-8", currentRight.bgColor)}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center",
                        currentRight.bgColor
                      )}>
                        <currentRight.icon className={cn("h-6 w-6", currentRight.color)} />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{currentRight.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">{currentRight.artikel}</Badge>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {currentRight.beschreibung}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="umfang" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="umfang">Umfang</TabsTrigger>
                      <TabsTrigger value="prozess">Prozess</TabsTrigger>
                      <TabsTrigger value="ausnahmen">Ausnahmen</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="umfang" className="mt-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Was umfasst dieses Recht?</h4>
                        <div className="space-y-2">
                          {currentRight.inhalt.umfang.map((punkt, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{punkt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="prozess" className="mt-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Wie ist der Ablauf?</h4>
                        <div className="space-y-3">
                          {currentRight.inhalt.prozess.map((schritt, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs flex-shrink-0">
                                {index + 1}
                              </div>
                              <span className="text-sm">{schritt}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="ausnahmen" className="mt-4">
                      <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
                        <h4 className="font-semibold mb-3">Wann gilt das Recht nicht?</h4>
                        <div className="space-y-2">
                          {currentRight.inhalt.ausnahmen.map((ausnahme, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{ausnahme}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </motion.div>

            {/* Process Timeline */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Standard-Prozessablauf
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
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
            </motion.div>

            {/* Important Alerts */}
            <motion.div
              className="space-y-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
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
            </motion.div>

            {/* Tools & Templates */}
            <motion.div
              className="grid md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
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
            </motion.div>

            {/* Best Practices */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">✅ Do's</CardTitle>
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
                  <CardTitle className="text-lg">❌ Don'ts</CardTitle>
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
                  <CardTitle className="text-lg">💡 Tipps</CardTitle>
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
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
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
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default Betroffenenrechte;