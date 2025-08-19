import React, { useState } from 'react';
import SEOHead from '../../../components/SEOHead';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  AlertTriangle,
  Shield,
  Clock,
  Users,
  FileText,
  Phone,
  Mail,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Timer,
  AlertOctagon,
  Building,
  UserCheck,
  Database,
  Lock,
  Info,
  ChevronRight,
  Download,
  ExternalLink,
  Lightbulb,
  Zap,
  ListChecks,
  MessageSquare,
  Scale,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DataBreachNotfall: React.FC = () => {
  const [activePhase, setActivePhase] = useState<number>(1);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Data Breach Notfallplan",
    "description": "Schritt-für-Schritt Notfallplan bei Datenpannen. 72-Stunden-Frist, Meldepflichten, Sofortmaßnahmen, Kommunikation. DSGVO-konform handeln.",
    "url": "https://marsstein.com/wissen/leitfaden/data-breach-notfall"
  };

  const emergencyPhases = [
    {
      phase: 1,
      title: 'Sofortmaßnahmen',
      timeframe: '0-4 Stunden',
      icon: AlertOctagon,
      color: 'text-red-600',
      bgColor: 'bg-red-50 dark:bg-red-900/20',
      actions: [
        {
          title: 'Incident Response Team aktivieren',
          description: 'Krisenstab zusammenstellen und Verantwortlichkeiten klären',
          priority: 'KRITISCH',
          checklist: [
            'Datenschutzbeauftragten informieren',
            'IT-Sicherheitsteam alarmieren',
            'Geschäftsführung einbeziehen',
            'Rechtsabteilung/Anwalt kontaktieren'
          ]
        },
        {
          title: 'Datenpanne eindämmen',
          description: 'Weitere Schäden verhindern und Systeme sichern',
          priority: 'KRITISCH',
          checklist: [
            'Betroffene Systeme isolieren',
            'Zugänge sperren/Passwörter ändern',
            'Backup-Status prüfen',
            'Forensische Beweise sichern'
          ]
        },
        {
          title: 'Erste Dokumentation',
          description: 'Alle bekannten Fakten sofort festhalten',
          priority: 'HOCH',
          checklist: [
            'Zeitpunkt der Entdeckung',
            'Art der Datenpanne',
            'Erste Einschätzung des Umfangs',
            'Bereits ergriffene Maßnahmen'
          ]
        }
      ]
    },
    {
      phase: 2,
      title: 'Bewertung & Analyse',
      timeframe: '4-24 Stunden',
      icon: Target,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      actions: [
        {
          title: 'Umfang ermitteln',
          description: 'Detaillierte Analyse der betroffenen Daten und Personen',
          priority: 'HOCH',
          checklist: [
            'Anzahl betroffener Personen',
            'Kategorien personenbezogener Daten',
            'Besondere Kategorien (Art. 9 DSGVO)?',
            'Zeitraum der Exposition'
          ]
        },
        {
          title: 'Risikobewertung',
          description: 'Schwere des Risikos für Betroffene einschätzen',
          priority: 'HOCH',
          checklist: [
            'Sensitivität der Daten bewerten',
            'Mögliche Schäden für Betroffene',
            'Wahrscheinlichkeit des Schadenseintritts',
            'Vorhandene Schutzmaßnahmen (z.B. Verschlüsselung)'
          ]
        },
        {
          title: 'Meldepflicht prüfen',
          description: 'Entscheidung über Meldung an Behörde und Betroffene',
          priority: 'HOCH',
          checklist: [
            'Risiko für Rechte und Freiheiten?',
            'Hohes Risiko → Betroffene informieren',
            'Ausnahmen von Meldepflicht prüfen',
            'Grenzüberschreitende Verarbeitung?'
          ]
        }
      ]
    },
    {
      phase: 3,
      title: 'Meldung & Kommunikation',
      timeframe: '24-72 Stunden',
      icon: MessageSquare,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      actions: [
        {
          title: 'Behördenmeldung',
          description: 'Meldung an zuständige Aufsichtsbehörde',
          priority: 'KRITISCH',
          checklist: [
            'Meldung innerhalb 72 Stunden',
            'Formular der Behörde nutzen',
            'Alle Pflichtangaben vollständig',
            'Verzögerung begründen falls > 72h'
          ]
        },
        {
          title: 'Betroffene informieren',
          description: 'Bei hohem Risiko unverzüglich informieren',
          priority: 'HOCH',
          checklist: [
            'Klare, verständliche Sprache',
            'Art der Verletzung beschreiben',
            'Mögliche Folgen erläutern',
            'Empfohlene Maßnahmen mitteilen'
          ]
        },
        {
          title: 'Interne Kommunikation',
          description: 'Stakeholder und Teams informieren',
          priority: 'MITTEL',
          checklist: [
            'Mitarbeiter instruieren',
            'Kommunikationsrichtlinien ausgeben',
            'Support-Team vorbereiten',
            'FAQ für Anfragen erstellen'
          ]
        }
      ]
    },
    {
      phase: 4,
      title: 'Nachbereitung',
      timeframe: 'Ab 72 Stunden',
      icon: CheckCircle2,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      actions: [
        {
          title: 'Maßnahmen umsetzen',
          description: 'Langfristige Sicherheitsverbesserungen',
          priority: 'MITTEL',
          checklist: [
            'Sicherheitslücken schließen',
            'Prozesse verbessern',
            'Schulungen durchführen',
            'Technische Maßnahmen verstärken'
          ]
        },
        {
          title: 'Dokumentation vervollständigen',
          description: 'Compliance-Nachweis sicherstellen',
          priority: 'MITTEL',
          checklist: [
            'Vollständiger Incident Report',
            'Lessons Learned dokumentieren',
            'Verarbeitungsverzeichnis aktualisieren',
            'Risikoregister anpassen'
          ]
        },
        {
          title: 'Follow-up',
          description: 'Kontinuierliche Überwachung und Verbesserung',
          priority: 'NIEDRIG',
          checklist: [
            'Wirksamkeit der Maßnahmen prüfen',
            'Regelmäßige Updates an Behörde',
            'Betroffene über Fortschritte informieren',
            'Präventivmaßnahmen evaluieren'
          ]
        }
      ]
    }
  ];

  const meldepflichtCheckliste = {
    anBehörde: {
      title: 'Meldung an Aufsichtsbehörde',
      frist: '72 Stunden',
      pflichtangaben: [
        'Art der Verletzung des Schutzes',
        'Kategorien betroffener Daten und Personen',
        'Ungefähre Zahl der Betroffenen',
        'Name/Kontakt des Datenschutzbeauftragten',
        'Wahrscheinliche Folgen',
        'Ergriffene oder vorgeschlagene Maßnahmen'
      ]
    },
    anBetroffene: {
      title: 'Benachrichtigung der Betroffenen',
      frist: 'Unverzüglich',
      pflichtangaben: [
        'Name und Kontakt des Verantwortlichen',
        'Kontakt des Datenschutzbeauftragten',
        'Beschreibung der Datenpanne',
        'Wahrscheinliche Folgen',
        'Empfohlene Maßnahmen für Betroffene',
        'Ergriffene Maßnahmen des Verantwortlichen'
      ]
    }
  };

  const risikoMatrix = [
    {
      niveau: 'Niedriges Risiko',
      beispiele: ['Verschlüsselte Daten', 'Anonymisierte Daten', 'Öffentlich verfügbare Daten'],
      meldung: 'Nur an Behörde',
      color: 'text-green-600 bg-green-50'
    },
    {
      niveau: 'Mittleres Risiko',
      beispiele: ['Kontaktdaten', 'Nicht-sensible Geschäftsdaten', 'Geringe Anzahl Betroffener'],
      meldung: 'An Behörde, ggf. Betroffene',
      color: 'text-yellow-600 bg-yellow-50'
    },
    {
      niveau: 'Hohes Risiko',
      beispiele: ['Gesundheitsdaten', 'Finanzdaten', 'Zugangsdaten', 'Große Anzahl Betroffener'],
      meldung: 'An Behörde UND Betroffene',
      color: 'text-red-600 bg-red-50'
    }
  ];

  return (
    <>
      <SEOHead
        title="Data Breach Notfallplan – 72-Stunden Leitfaden DSGVO"
        description="Data Breach Notfallplan: Schritt-für-Schritt bei Datenpannen. ✓ 72-Stunden-Frist ✓ Meldepflichten ✓ Sofortmaßnahmen ✓ Kommunikation. DSGVO-konform handeln!"
        canonical="/wissen/leitfaden/data-breach-notfall"
        keywords="Data Breach, Datenpanne, DSGVO Meldepflicht, 72 Stunden, Notfallplan"
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
              <Badge className="mb-4 px-4 py-1" variant="destructive">
                <AlertTriangle className="h-3 w-3 mr-1" />
                Notfallplan
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Data Breach Notfallplan
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Ihr Schritt-für-Schritt Leitfaden für den Ernstfall - 
                DSGVO-konform handeln innerhalb der 72-Stunden-Frist
              </p>
            </motion.div>

            {/* Critical Timer Alert */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Alert className="border-red-500 bg-red-50 dark:bg-red-900/20 mb-8">
                <Timer className="h-5 w-5 text-red-600" />
                <AlertDescription className="text-base">
                  <strong className="text-red-600">72-Stunden-Frist läuft!</strong> Die Meldung an die 
                  Aufsichtsbehörde muss innerhalb von 72 Stunden nach Bekanntwerden erfolgen. 
                  Bei hohem Risiko müssen auch die Betroffenen unverzüglich informiert werden.
                </AlertDescription>
              </Alert>
            </motion.div>

            {/* Emergency Phases */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  Notfall-Phasen
                </h2>
                <div className="flex gap-2">
                  {emergencyPhases.map((phase) => (
                    <Button
                      key={phase.phase}
                      variant={activePhase === phase.phase ? "default" : "outline"}
                      size="sm"
                      onClick={() => setActivePhase(phase.phase)}
                      className={cn(
                        "transition-all",
                        activePhase === phase.phase && "shadow-lg"
                      )}
                    >
                      Phase {phase.phase}
                    </Button>
                  ))}
                </div>
              </div>

              {emergencyPhases.map((phase) => (
                <motion.div
                  key={phase.phase}
                  className={cn(
                    "rounded-lg border-2 p-6 mb-8",
                    phase.bgColor,
                    activePhase === phase.phase ? "block border-current" : "hidden"
                  )}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className={cn(
                      "w-12 h-12 rounded-full flex items-center justify-center",
                      phase.bgColor
                    )}>
                      <phase.icon className={cn("h-6 w-6", phase.color)} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        Phase {phase.phase}: {phase.title}
                      </h3>
                      <Badge variant="outline" className={phase.color}>
                        {phase.timeframe}
                      </Badge>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {phase.actions.map((action, index) => (
                      <Card key={index} className="h-full">
                        <CardHeader>
                          <div className="flex items-start justify-between mb-2">
                            <CardTitle className="text-lg">{action.title}</CardTitle>
                            <Badge 
                              variant={
                                action.priority === 'KRITISCH' ? 'destructive' : 
                                action.priority === 'HOCH' ? 'default' : 
                                'secondary'
                              }
                            >
                              {action.priority}
                            </Badge>
                          </div>
                          <CardDescription>{action.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            {action.checklist.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                <span className="text-sm">{item}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Meldepflicht Details */}
            <motion.div
              className="grid md:grid-cols-2 gap-8 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {Object.entries(meldepflichtCheckliste).map(([key, checklist]) => (
                <Card key={key} className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-2">
                      <FileText className="h-5 w-5" />
                      {checklist.title}
                    </CardTitle>
                    <Badge variant="destructive" className="w-fit">
                      Frist: {checklist.frist}
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-3">Pflichtangaben:</h4>
                    <div className="space-y-2">
                      {checklist.pflichtangaben.map((angabe, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <div className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-semibold text-blue-600">{index + 1}</span>
                          </div>
                          <span className="text-sm">{angabe}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </motion.div>

            {/* Risk Assessment Matrix */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Scale className="h-5 w-5" />
                    Risikobewertung & Meldepflicht
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {risikoMatrix.map((level, index) => (
                      <div key={index} className="grid md:grid-cols-3 gap-4 p-4 rounded-lg border">
                        <div>
                          <Badge className={level.color}>
                            {level.niveau}
                          </Badge>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Beispiele:</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {level.beispiele.join(', ')}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-medium mb-1">Meldepflicht:</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {level.meldung}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              className="grid md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Notfall-Hotline</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    24/7 Experten-Support
                  </p>
                  <Button variant="destructive" size="sm" className="w-full">
                    Jetzt anrufen
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Meldeformular</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Behördenmeldung vorbereiten
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Template öffnen
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <ListChecks className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Checkliste</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Druckbare Notfall-Checkliste
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    PDF Download
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Expertenberatung</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Individuelle Unterstützung
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/contact">
                      Beratung anfordern
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Important Notes */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Dokumentation ist Pflicht:</strong> Auch wenn keine Meldung erforderlich ist, 
                  müssen Sie den Vorfall dokumentieren und nachweisen können, warum keine Meldung erfolgte.
                </AlertDescription>
              </Alert>

              <Alert>
                <Lightbulb className="h-4 w-4" />
                <AlertDescription>
                  <strong>Prävention:</strong> Nach jedem Vorfall sollten Sie Ihre Sicherheitsmaßnahmen 
                  überprüfen und verbessern. Ein Data Breach Response Plan sollte regelmäßig getestet werden.
                </AlertDescription>
              </Alert>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Card className="bg-gradient-to-r from-red-600 to-red-700 text-white p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Bereiten Sie sich auf den Ernstfall vor
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Entwickeln Sie mit uns einen maßgeschneiderten Data Breach Response Plan
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-red-600 hover:bg-red-50"
                  >
                    Notfallplan erstellen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-red-600"
                  >
                    Incident Response Training
                    <ExternalLink className="ml-2 h-5 w-5" />
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

export default DataBreachNotfall;