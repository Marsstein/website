import React, { useState } from 'react';
import SEOHead from '../../../components/SEOHead';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Calendar,
  CheckCircle2,
  Clock,
  Target,
  Zap,
  FileText,
  Shield,
  Users,
  Database,
  Lock,
  Settings,
  ArrowRight,
  AlertTriangle,
  BookOpen,
  Briefcase,
  Building,
  ChevronRight,
  Download,
  Info,
  Lightbulb,
  ListChecks,
  Rocket,
  Timer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DSGVO30Tage: React.FC = () => {
  const [selectedWeek, setSelectedWeek] = useState<number>(1);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "DSGVO in 30 Tagen umsetzen",
    "description": "DSGVO-Express: In 30 Tagen zur Basis-Compliance. Täglicher Aktionsplan mit priorisierten Aufgaben. Schnell und pragmatisch DSGVO-konform werden.",
    "url": "https://marsstein.com/wissen/leitfaden/dsgvo-30-tage"
  };

  const weeks = [
    {
      week: 1,
      title: 'Grundlagen & Bestandsaufnahme',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20',
      days: [
        {
          day: 1,
          title: 'Kick-off & Team',
          tasks: [
            'DSGVO-Verantwortlichen bestimmen',
            'Projektteam zusammenstellen',
            'Zeitplan kommunizieren',
            'Budget freigeben'
          ],
          priority: 'KRITISCH'
        },
        {
          day: 2,
          title: 'Datenflüsse erfassen',
          tasks: [
            'Abteilungen identifizieren',
            'Datenquellen auflisten',
            'Erste Übersicht erstellen',
            'Ansprechpartner benennen'
          ],
          priority: 'HOCH'
        },
        {
          day: 3,
          title: 'Website-Check',
          tasks: [
            'Datenschutzerklärung prüfen',
            'Cookie-Einsatz analysieren',
            'Kontaktformulare checken',
            'Analytics dokumentieren'
          ],
          priority: 'HOCH'
        },
        {
          day: 4,
          title: 'IT-Systeme',
          tasks: [
            'Software-Inventar erstellen',
            'Cloud-Dienste auflisten',
            'Zugriffsrechte prüfen',
            'Backup-Status checken'
          ],
          priority: 'HOCH'
        },
        {
          day: 5,
          title: 'Verträge sichten',
          tasks: [
            'Kundenverträge prüfen',
            'Lieferantenverträge checken',
            'Mitarbeiterverträge sammeln',
            'Dienstleister auflisten'
          ],
          priority: 'MITTEL'
        },
        {
          day: 6,
          title: 'Dokumentation',
          tasks: [
            'Bestandsaufnahme dokumentieren',
            'Erste Lücken identifizieren',
            'Prioritäten festlegen',
            'Wochenbericht erstellen'
          ],
          priority: 'MITTEL'
        },
        {
          day: 7,
          title: 'Review & Planung',
          tasks: [
            'Woche 1 auswerten',
            'Erkenntnisse sammeln',
            'Woche 2 vorbereiten',
            'Team-Meeting'
          ],
          priority: 'NIEDRIG'
        }
      ]
    },
    {
      week: 2,
      title: 'Rechtliche Grundlagen',
      icon: Scale,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900/20',
      days: [
        {
          day: 8,
          title: 'Rechtsgrundlagen',
          tasks: [
            'Einwilligungen prüfen',
            'Verträge als Rechtsgrundlage',
            'Berechtigte Interessen bewerten',
            'Dokumentation anlegen'
          ],
          priority: 'KRITISCH'
        },
        {
          day: 9,
          title: 'Datenschutzerklärung',
          tasks: [
            'Aktuelle Version prüfen',
            'Fehlende Punkte ergänzen',
            'Verständlichkeit optimieren',
            'Online stellen'
          ],
          priority: 'KRITISCH'
        },
        {
          day: 10,
          title: 'Einwilligungen',
          tasks: [
            'Newsletter-Anmeldung prüfen',
            'Cookie-Banner implementieren',
            'Opt-in Prozesse anpassen',
            'Widerruf ermöglichen'
          ],
          priority: 'HOCH'
        },
        {
          day: 11,
          title: 'Auftragsverarbeitung',
          tasks: [
            'AV-Verträge identifizieren',
            'Muster-AV erstellen',
            'Bestehende AVs prüfen',
            'Neue AVs abschließen'
          ],
          priority: 'HOCH'
        },
        {
          day: 12,
          title: 'Betroffenenrechte',
          tasks: [
            'Prozess für Auskunft',
            'Löschkonzept erstellen',
            'Fristen definieren',
            'Vorlagen erstellen'
          ],
          priority: 'HOCH'
        },
        {
          day: 13,
          title: 'Verarbeitungsverzeichnis',
          tasks: [
            'Template erstellen',
            'Erste Verarbeitungen erfassen',
            'Verantwortliche eintragen',
            'Löschfristen definieren'
          ],
          priority: 'MITTEL'
        },
        {
          day: 14,
          title: 'Wochenabschluss',
          tasks: [
            'Rechtsdokumente finalisieren',
            'Offene Punkte notieren',
            'Fortschritt dokumentieren',
            'Woche 3 planen'
          ],
          priority: 'NIEDRIG'
        }
      ]
    },
    {
      week: 3,
      title: 'Technische Maßnahmen',
      icon: Shield,
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900/20',
      days: [
        {
          day: 15,
          title: 'Sicherheitskonzept',
          tasks: [
            'IST-Zustand bewerten',
            'Schwachstellen identifizieren',
            'Maßnahmenplan erstellen',
            'Budget kalkulieren'
          ],
          priority: 'HOCH'
        },
        {
          day: 16,
          title: 'Zugangskontrollen',
          tasks: [
            'Passwort-Policy erstellen',
            '2FA wo möglich aktivieren',
            'Berechtigungen prüfen',
            'Admin-Rechte minimieren'
          ],
          priority: 'KRITISCH'
        },
        {
          day: 17,
          title: 'Verschlüsselung',
          tasks: [
            'SSL/TLS für Website',
            'E-Mail-Verschlüsselung',
            'Datenbank-Verschlüsselung',
            'Mobile Geräte sichern'
          ],
          priority: 'HOCH'
        },
        {
          day: 18,
          title: 'Backup & Recovery',
          tasks: [
            'Backup-Strategie prüfen',
            'Recovery-Tests durchführen',
            'Aufbewahrung definieren',
            'Dokumentation erstellen'
          ],
          priority: 'HOCH'
        },
        {
          day: 19,
          title: 'Monitoring',
          tasks: [
            'Log-Dateien konfigurieren',
            'Zugriffe überwachen',
            'Alerts einrichten',
            'Incident-Prozess definieren'
          ],
          priority: 'MITTEL'
        },
        {
          day: 20,
          title: 'TOMs dokumentieren',
          tasks: [
            'Alle Maßnahmen auflisten',
            'Wirksamkeit bewerten',
            'Lücken identifizieren',
            'Roadmap erstellen'
          ],
          priority: 'MITTEL'
        },
        {
          day: 21,
          title: 'Security Review',
          tasks: [
            'Penetration Test planen',
            'Schwachstellen priorisieren',
            'Quick Wins umsetzen',
            'Langfristplan erstellen'
          ],
          priority: 'NIEDRIG'
        }
      ]
    },
    {
      week: 4,
      title: 'Organisation & Abschluss',
      icon: Users,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900/20',
      days: [
        {
          day: 22,
          title: 'Mitarbeiterschulung',
          tasks: [
            'Schulungskonzept erstellen',
            'Erste Schulung durchführen',
            'Materialien bereitstellen',
            'Teilnahme dokumentieren'
          ],
          priority: 'HOCH'
        },
        {
          day: 23,
          title: 'Prozesse definieren',
          tasks: [
            'Datenpannen-Prozess',
            'Betroffenenanfragen-Prozess',
            'Löschprozess',
            'Update-Prozess'
          ],
          priority: 'HOCH'
        },
        {
          day: 24,
          title: 'Datenschutzbeauftragter',
          tasks: [
            'Benennungspflicht prüfen',
            'DSB benennen/bestellen',
            'Aufgaben definieren',
            'Kontakt veröffentlichen'
          ],
          priority: 'KRITISCH'
        },
        {
          day: 25,
          title: 'Dokumentation',
          tasks: [
            'Verarbeitungsverzeichnis fertig',
            'Alle Prozesse dokumentiert',
            'Nachweise gesammelt',
            'Ordnerstruktur erstellt'
          ],
          priority: 'HOCH'
        },
        {
          day: 26,
          title: 'Testing',
          tasks: [
            'Auskunftsprozess testen',
            'Löschung testen',
            'Cookie-Banner prüfen',
            'Notfallplan testen'
          ],
          priority: 'MITTEL'
        },
        {
          day: 27,
          title: 'Feinschliff',
          tasks: [
            'Letzte Lücken schließen',
            'Dokumente finalisieren',
            'Website final prüfen',
            'Team briefen'
          ],
          priority: 'MITTEL'
        },
        {
          day: 28,
          title: 'Go-Live Vorbereitung',
          tasks: [
            'Finale Checkliste',
            'Kommunikation vorbereiten',
            'Support einrichten',
            'Monitoring aktivieren'
          ],
          priority: 'HOCH'
        },
        {
          day: 29,
          title: 'Go-Live',
          tasks: [
            'Neue Prozesse aktivieren',
            'Mitarbeiter informieren',
            'Kunden informieren',
            'Monitoring starten'
          ],
          priority: 'KRITISCH'
        },
        {
          day: 30,
          title: 'Abschluss & Ausblick',
          tasks: [
            'Projekt-Review',
            'Lessons Learned',
            'Wartungsplan erstellen',
            'Erfolg feiern! 🎉'
          ],
          priority: 'NIEDRIG'
        }
      ]
    }
  ];

  const currentWeek = weeks[selectedWeek - 1];
  const totalTasks = weeks.reduce((sum, week) => sum + week.days.reduce((daySum, day) => daySum + day.tasks.length, 0), 0);
  const completedDays = (selectedWeek - 1) * 7;
  const progress = Math.round((completedDays / 30) * 100);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'KRITISCH': return 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300';
      case 'HOCH': return 'bg-orange-100 text-orange-800 dark:bg-orange-900/50 dark:text-orange-300';
      case 'MITTEL': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/50 dark:text-yellow-300';
      case 'NIEDRIG': return 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900/50 dark:text-gray-300';
    }
  };

  const quickWins = [
    'Datenschutzerklärung aktualisieren',
    'Cookie-Banner implementieren',
    'Mitarbeiter sensibilisieren',
    'AV-Verträge abschließen',
    'Verarbeitungsverzeichnis starten'
  ];

  return (
    <>
      <SEOHead
        title="DSGVO in 30 Tagen – Express-Guide zur Compliance"
        description="DSGVO-Express: In 30 Tagen zur Basis-Compliance. ✓ Täglicher Aktionsplan ✓ Priorisierte Aufgaben ✓ Quick Wins ✓ Pragmatisch. Jetzt DSGVO-konform werden!"
        canonical="/wissen/leitfaden/dsgvo-30-tage"
        keywords="DSGVO 30 Tage, DSGVO Express, DSGVO schnell umsetzen, DSGVO Aktionsplan, DSGVO Checkliste"
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
                <Rocket className="h-3 w-3 mr-1" />
                Express-Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                DSGVO in 30 Tagen
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Der pragmatische Weg zur DSGVO-Basis-Compliance - 
                mit täglichem Aktionsplan und priorisierten Aufgaben
              </p>
            </motion.div>

            {/* Progress Overview */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        30-Tage-Challenge Progress
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {totalTasks} Aufgaben in 4 Wochen
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{progress}%</div>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Tag {completedDays} von 30
                      </p>
                    </div>
                  </div>
                  <Progress value={progress} className="h-3 mb-4" />
                  <div className="grid grid-cols-4 gap-2">
                    {weeks.map((week) => (
                      <Button
                        key={week.week}
                        variant={selectedWeek === week.week ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedWeek(week.week)}
                        className="text-xs"
                      >
                        Woche {week.week}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Quick Start Alert */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Alert className="mb-8">
                <Zap className="h-4 w-4" />
                <AlertDescription>
                  <strong>Quick Wins für Tag 1:</strong> {quickWins.join(' • ')}
                </AlertDescription>
              </Alert>
            </motion.div>

            {/* Week Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className={cn(
                "rounded-lg p-6 mb-8",
                currentWeek.bgColor
              )}>
                <div className="flex items-center gap-3 mb-6">
                  <currentWeek.icon className={cn("h-8 w-8", currentWeek.color)} />
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Woche {currentWeek.week}: {currentWeek.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                      Tag {(currentWeek.week - 1) * 7 + 1} - Tag {Math.min(currentWeek.week * 7, 30)}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {currentWeek.days.map((day) => (
                    <Card key={day.day} className="h-full">
                      <CardHeader className="pb-3">
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">
                              Tag {day.day}
                            </CardTitle>
                            <CardDescription className="font-medium">
                              {day.title}
                            </CardDescription>
                          </div>
                          <Badge className={cn("text-xs", getPriorityColor(day.priority))}>
                            {day.priority}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {day.tasks.map((task, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm leading-tight">{task}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Important Tips */}
            <motion.div
              className="grid md:grid-cols-3 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Häufige Fehler
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Zu viel auf einmal wollen</li>
                    <li>• Dokumentation vernachlässigen</li>
                    <li>• Mitarbeiter nicht einbeziehen</li>
                    <li>• Technische Maßnahmen aufschieben</li>
                    <li>• Keine Tests durchführen</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-600" />
                    Erfolgs-Tipps
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Klein anfangen, stetig verbessern</li>
                    <li>• Quick Wins zuerst umsetzen</li>
                    <li>• Team früh einbinden</li>
                    <li>• Pragmatisch bleiben</li>
                    <li>• Fortschritt dokumentieren</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Target className="h-5 w-5 text-green-600" />
                    Nach 30 Tagen
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li>• Basis-Compliance erreicht</li>
                    <li>• Prozesse etabliert</li>
                    <li>• Team geschult</li>
                    <li>• Dokumentation vorhanden</li>
                    <li>• Wartungsplan erstellt</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            {/* Resources */}
            <motion.div
              className="grid md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Checkliste</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    30-Tage Plan als PDF
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <ListChecks className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Templates</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Vorlagen & Muster
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/vorlagen">
                      Zu den Vorlagen
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Timer className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Tracking Tool</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Fortschritt tracken
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Tool starten
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Support</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Experten-Hilfe
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/contact">
                      Beratung
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Next Steps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Nach den 30 Tagen:</strong> Die Basis steht! Jetzt geht es um kontinuierliche 
                  Verbesserung, regelmäßige Audits und die Anpassung an neue Anforderungen. 
                  Planen Sie monatliche Reviews ein.
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
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Bereit für die 30-Tage-Challenge?
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Starten Sie jetzt und erreichen Sie DSGVO-Basis-Compliance in nur einem Monat
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-blue-50"
                  >
                    Jetzt starten
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600"
                  >
                    Mit Experten starten
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

export default DSGVO30Tage;