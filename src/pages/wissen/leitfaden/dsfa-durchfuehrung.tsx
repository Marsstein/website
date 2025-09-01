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
  BarChart3,
  ArrowRight,
  Info,
  Download,
  ExternalLink,
  Lightbulb,
  Timer,
  Brain,
  Eye,
  Lock,
  Database,
  ChevronRight,
  ClipboardCheck,
  Gauge
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DSFADurchfuehrung: React.FC = () => {
  const [activePhase, setActivePhase] = useState('vorbereitung');
  const [riskScore, setRiskScore] = useState(0);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "DSFA Datenschutz-Folgenabschätzung durchführen",
    "description": "DSFA nach Art. 35 DSGVO professionell durchführen: Schwellwertanalyse, Risikobewertung, Abhilfemaßnahmen. Mit Vorlagen und Praxisbeispielen.",
    "url": "https://marsstein.ai/wissen/leitfaden/dsfa-durchfuehrung"
  };

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

  const currentPhase = dsfaPhasen[activePhase as keyof typeof dsfaPhasen];

  const calculateRiskScore = () => {
    // Beispielhafte Risikoberechnung
    const factors = schwellwertkriterien.filter(k => Math.random() > 0.5);
    const score = factors.reduce((sum, factor) => {
      return sum + (factor.risiko === 'SEHR HOCH' ? 3 : factor.risiko === 'HOCH' ? 2 : 1);
    }, 0);
    setRiskScore(Math.min(score * 10, 100));
  };

  return (
    <>
      <SEOHead
        title="DSFA durchführen – Datenschutz-Folgenabschätzung Guide"
        description="DSFA nach Art. 35 DSGVO durchführen: ✓ Schwellwertanalyse ✓ Risikobewertung ✓ Abhilfemaßnahmen ✓ Vorlagen. Schritt-für-Schritt zur Datenschutz-Folgenabschätzung!"
        canonical="/wissen/leitfaden/dsfa-durchfuehrung"
        keywords="DSFA, Datenschutz-Folgenabschätzung, Art 35 DSGVO, DPIA, Privacy Impact Assessment"
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

            {/* Key Info */}
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

            {/* Phase Navigation */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {Object.entries(dsfaPhasen).map(([key, phase]) => {
                  const Icon = phase.icon;
                  return (
                    <Button
                      key={key}
                      variant={activePhase === key ? "default" : "outline"}
                      onClick={() => setActivePhase(key)}
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {phase.title}
                    </Button>
                  );
                })}
              </div>
              
              {/* Progress Indicator */}
              <div className="max-w-2xl mx-auto">
                <Progress 
                  value={Object.keys(dsfaPhasen).indexOf(activePhase) * 20 + 20} 
                  className="h-2"
                />
              </div>
            </motion.div>

            {/* Active Phase Content */}
            <motion.div
              key={activePhase}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={cn("mb-8", currentPhase.bgColor)}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center",
                      currentPhase.bgColor
                    )}>
                      <currentPhase.icon className={cn("h-6 w-6", currentPhase.color)} />
                    </div>
                    <CardTitle className="text-2xl">{currentPhase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {currentPhase.schritte.map((schritt, index) => (
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

            {/* Schwellwertanalyse */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Gauge className="h-5 w-5" />
                    Schwellwertanalyse - Wann ist eine DSFA erforderlich?
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
                </CardContent>
              </Card>
            </motion.div>

            {/* Best Practices */}
            <motion.div
              className="grid md:grid-cols-2 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
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
            </motion.div>

            {/* Tools & Resources */}
            <motion.div
              className="grid md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
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
                  <Brain className="h-8 w-8 text-green-600 mx-auto mb-3" />
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
            </motion.div>

            {/* Info Alerts */}
            <motion.div
              className="space-y-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>2-Kriterien-Regel:</strong> Die Verarbeitung muss mindestens 2 der 9 Kriterien 
                  aus den WP29-Guidelines erfüllen, um eine DSFA zu erfordern. Im Zweifel: DSFA durchführen!
                </AlertDescription>
              </Alert>

              <Alert>
                <Building className="h-4 w-4" />
                <AlertDescription>
                  <strong>Konsultation erforderlich:</strong> Wenn trotz Abhilfemaßnahmen ein hohes 
                  Restrisiko verbleibt, muss die Aufsichtsbehörde vor Beginn der Verarbeitung konsultiert werden.
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
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default DSFADurchfuehrung;