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
  Shield,
  Lock,
  Key,
  Eye,
  Database,
  Server,
  Users,
  Settings,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  Info,
  Download,
  ExternalLink,
  Lightbulb,
  Target,
  Building,
  UserCheck,
  FileText,
  Monitor,
  HardDrive,
  Globe,
  Zap,
  ShieldCheck,
  Clock,
  BarChart3,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const TOMMassnahmen: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('zutrittskontrolle');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "TOM - Technische und organisatorische Maßnahmen",
    "description": "TOM nach Art. 32 DSGVO umsetzen: Technische und organisatorische Maßnahmen für Datenschutz. Verschlüsselung, Zugangskontrollen, Pseudonymisierung. Mit Checkliste!",
    "url": "https://marsstein.ai/wissen/leitfaden/tom-massnahmen"
  };

  const tomKategorien = {
    zutrittskontrolle: {
      title: 'Zutrittskontrolle',
      icon: Building,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      beschreibung: 'Unbefugten den Zutritt zu Datenverarbeitungsanlagen verwehren',
      massnahmen: [
        {
          titel: 'Physische Sicherheit',
          items: [
            'Schließsysteme und Schlüsselverwaltung',
            'Elektronische Zugangskarten',
            'Biometrische Systeme',
            'Sicherheitspersonal',
            'Besuchermanagement',
            'Zutrittsprotokollierung'
          ],
          prioritaet: 'HOCH'
        },
        {
          titel: 'Gebäudesicherheit',
          items: [
            'Alarmanlage',
            'Videoüberwachung (DSGVO-konform)',
            'Sicherheitszonen definieren',
            'Serverraum-Sicherung',
            'Clean-Desk-Policy',
            'Sichere Entsorgung'
          ],
          prioritaet: 'MITTEL'
        }
      ],
      checkpunkte: [
        'Sind alle Zugänge gesichert?',
        'Gibt es ein Besuchermanagement?',
        'Werden Zutrittsberechtigungen regelmäßig überprüft?',
        'Sind sensible Bereiche extra geschützt?'
      ]
    },
    zugangskontrolle: {
      title: 'Zugangskontrolle',
      icon: Key,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      beschreibung: 'Verhindern, dass Datenverarbeitungssysteme von Unbefugten genutzt werden',
      massnahmen: [
        {
          titel: 'Authentifizierung',
          items: [
            'Starke Passwort-Richtlinien',
            'Multi-Faktor-Authentifizierung (MFA)',
            'Single Sign-On (SSO)',
            'Passwort-Manager',
            'Regelmäßiger Passwortwechsel',
            'Account-Sperrung bei Fehlversuchen'
          ],
          prioritaet: 'KRITISCH'
        },
        {
          titel: 'Benutzerverwaltung',
          items: [
            'Identity & Access Management (IAM)',
            'Rollenbasierte Zugriffsrechte (RBAC)',
            'Privileged Access Management (PAM)',
            'Regelmäßige Berechtigungsreviews',
            'Automatische Deaktivierung',
            'Logging aller Zugriffe'
          ],
          prioritaet: 'HOCH'
        }
      ],
      checkpunkte: [
        'Ist MFA für kritische Systeme aktiviert?',
        'Werden Passwort-Richtlinien durchgesetzt?',
        'Gibt es einen Prozess für ausscheidende Mitarbeiter?',
        'Werden Berechtigungen nach Need-to-Know vergeben?'
      ]
    },
    zugriffskontrolle: {
      title: 'Zugriffskontrolle',
      icon: UserCheck,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      beschreibung: 'Gewährleisten, dass Berechtigte nur auf ihre Daten zugreifen können',
      massnahmen: [
        {
          titel: 'Berechtigungskonzept',
          items: [
            'Least-Privilege-Prinzip',
            'Datentrennung nach Mandanten',
            'Funktionstrennung',
            'Vier-Augen-Prinzip',
            'Berechtigungsmatrix',
            'Regelmäßige Rezertifizierung'
          ],
          prioritaet: 'HOCH'
        },
        {
          titel: 'Datenzugriff',
          items: [
            'Verschlüsselte Datenbanken',
            'Row-Level-Security',
            'Feldverschlüsselung',
            'Pseudonymisierung',
            'Anonymisierung',
            'Data Loss Prevention (DLP)'
          ],
          prioritaet: 'HOCH'
        }
      ],
      checkpunkte: [
        'Sind Daten nach Schutzbedarf klassifiziert?',
        'Gibt es eine aktuelle Berechtigungsmatrix?',
        'Werden Zugriffe protokolliert und überwacht?',
        'Ist Datentrennung implementiert?'
      ]
    },
    weitergabekontrolle: {
      title: 'Weitergabekontrolle',
      icon: Globe,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      beschreibung: 'Verhindern, dass Daten unbefugt gelesen, kopiert oder verändert werden',
      massnahmen: [
        {
          titel: 'Übertragungssicherheit',
          items: [
            'Ende-zu-Ende-Verschlüsselung',
            'VPN für Remote-Zugriffe',
            'Sichere E-Mail (S/MIME, PGP)',
            'SFTP statt FTP',
            'API-Verschlüsselung',
            'Transportverschlüsselung (TLS)'
          ],
          prioritaet: 'KRITISCH'
        },
        {
          titel: 'Datentransfer',
          items: [
            'Whitelisting erlaubter Empfänger',
            'Data Loss Prevention',
            'USB-Port-Kontrolle',
            'E-Mail-Verschlüsselung',
            'Wasserzeichen',
            'Rechteverwaltung (DRM)'
          ],
          prioritaet: 'HOCH'
        }
      ],
      checkpunkte: [
        'Ist die Kommunikation verschlüsselt?',
        'Gibt es Kontrollen für Datenexporte?',
        'Werden USB-Ports kontrolliert?',
        'Ist E-Mail-Verschlüsselung verfügbar?'
      ]
    },
    eingabekontrolle: {
      title: 'Eingabekontrolle',
      icon: FileText,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      beschreibung: 'Nachvollziehen, ob und von wem Daten eingegeben oder verändert wurden',
      massnahmen: [
        {
          titel: 'Protokollierung',
          items: [
            'Audit-Logs für alle Änderungen',
            'Unveränderbare Protokolle',
            'Zeitstempel und Benutzer-ID',
            'Versionierung von Dokumenten',
            'Change-Tracking in Datenbanken',
            'Log-Management-System'
          ],
          prioritaet: 'HOCH'
        },
        {
          titel: 'Nachvollziehbarkeit',
          items: [
            'Digitale Signaturen',
            'Vier-Augen-Prinzip',
            'Freigabe-Workflows',
            'Dokumentenmanagement',
            'Revisionssichere Archivierung',
            'Chain of Custody'
          ],
          prioritaet: 'MITTEL'
        }
      ],
      checkpunkte: [
        'Werden alle Änderungen protokolliert?',
        'Sind Logs manipulationssicher?',
        'Gibt es eine Log-Retention-Policy?',
        'Können Änderungen nachvollzogen werden?'
      ]
    },
    verfuegbarkeitskontrolle: {
      title: 'Verfügbarkeitskontrolle',
      icon: Server,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      beschreibung: 'Schutz gegen zufällige Zerstörung oder Verlust',
      massnahmen: [
        {
          titel: 'Backup & Recovery',
          items: [
            '3-2-1 Backup-Strategie',
            'Automatisierte Backups',
            'Offsite-Backups',
            'Regelmäßige Recovery-Tests',
            'Disaster Recovery Plan',
            'Business Continuity Management'
          ],
          prioritaet: 'KRITISCH'
        },
        {
          titel: 'Systemstabilität',
          items: [
            'Redundante Systeme',
            'USV (Unterbrechungsfreie Stromversorgung)',
            'Klimatisierung',
            'Monitoring & Alerting',
            'Wartungsverträge',
            'Notfallhandbuch'
          ],
          prioritaet: 'HOCH'
        }
      ],
      checkpunkte: [
        'Gibt es ein aktuelles Backup-Konzept?',
        'Werden Recovery-Tests durchgeführt?',
        'Sind kritische Systeme redundant?',
        'Existiert ein Notfallplan?'
      ]
    },
    trennbarkeit: {
      title: 'Trennbarkeit',
      icon: Database,
      color: 'text-teal-600',
      bgColor: 'bg-teal-50',
      beschreibung: 'Getrennte Verarbeitung zu unterschiedlichen Zwecken',
      massnahmen: [
        {
          titel: 'Datentrennung',
          items: [
            'Mandantentrennung',
            'Zweckbindung beachten',
            'Separate Datenbanken',
            'Logische Trennung',
            'Separate Verarbeitungssysteme',
            'Gekapselte Microservices'
          ],
          prioritaet: 'HOCH'
        },
        {
          titel: 'Systemtrennung',
          items: [
            'Test/Produktion trennen',
            'Entwicklungsumgebungen',
            'Sandbox-Systeme',
            'Netzwerksegmentierung',
            'Container-Isolierung',
            'Virtuelle Maschinen'
          ],
          prioritaet: 'MITTEL'
        }
      ],
      checkpunkte: [
        'Sind Daten nach Zweck getrennt?',
        'Gibt es Mandantentrennung?',
        'Sind Test und Produktion getrennt?',
        'Wird Zweckbindung eingehalten?'
      ]
    }
  };

  const implementierungsSchritte = [
    {
      phase: 'Analyse',
      dauer: '1-2 Wochen',
      icon: Target,
      aufgaben: [
        'Ist-Zustand erfassen',
        'Risikobewertung durchführen',
        'Schutzbedarf ermitteln',
        'Lücken identifizieren'
      ]
    },
    {
      phase: 'Planung',
      dauer: '2-3 Wochen',
      icon: Settings,
      aufgaben: [
        'Maßnahmenkatalog erstellen',
        'Prioritäten festlegen',
        'Budget kalkulieren',
        'Zeitplan entwickeln'
      ]
    },
    {
      phase: 'Umsetzung',
      dauer: '2-6 Monate',
      icon: Zap,
      aufgaben: [
        'Quick Wins umsetzen',
        'Technische Maßnahmen',
        'Prozesse etablieren',
        'Mitarbeiter schulen'
      ]
    },
    {
      phase: 'Kontrolle',
      dauer: 'Kontinuierlich',
      icon: BarChart3,
      aufgaben: [
        'Wirksamkeit prüfen',
        'Audits durchführen',
        'Nachbessern',
        'Dokumentieren'
      ]
    }
  ];

  const currentCategory = tomKategorien[activeCategory as keyof typeof tomKategorien];

  return (
    <>
      <SEOHead
        title="TOM Maßnahmen – Technische & organisatorische Sicherheit"
        description="TOM nach Art. 32 DSGVO: Technische und organisatorische Maßnahmen umsetzen. ✓ Verschlüsselung ✓ Zugangskontrollen ✓ Pseudonymisierung ✓ Checkliste. Jetzt absichern!"
        canonical="/wissen/leitfaden/tom-massnahmen"
        keywords="TOM Maßnahmen, Art 32 DSGVO, Technische organisatorische Maßnahmen, TOMs, Datensicherheit"
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
                <Shield className="h-3 w-3 mr-1" />
                DSGVO Art. 32
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                TOM - Technische und organisatorische Maßnahmen
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Implementieren Sie wirksame Schutzmaßnahmen für personenbezogene Daten - 
                von Verschlüsselung bis Zutrittskontrolle
              </p>
            </motion.div>

            {/* Key Requirements */}
            <motion.div
              className="grid md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="p-4">
                  <Lock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Grundsatz</div>
                  <div className="text-lg font-bold">Angemessen</div>
                  <div className="text-xs text-gray-500">zum Risiko</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <ShieldCheck className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Stand</div>
                  <div className="text-lg font-bold">Technik</div>
                  <div className="text-xs text-gray-500">aktuell halten</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Clock className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Prüfung</div>
                  <div className="text-lg font-bold">Regelmäßig</div>
                  <div className="text-xs text-gray-500">evaluieren</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <FileText className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Nachweis</div>
                  <div className="text-lg font-bold">Dokumentiert</div>
                  <div className="text-xs text-gray-500">lückenlos</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Category Navigation */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex flex-wrap gap-2 justify-center">
                {Object.entries(tomKategorien).map(([key, category]) => {
                  const Icon = category.icon;
                  return (
                    <Button
                      key={key}
                      variant={activeCategory === key ? "default" : "outline"}
                      onClick={() => setActiveCategory(key)}
                      className="flex items-center gap-2"
                    >
                      <Icon className="h-4 w-4" />
                      {category.title}
                    </Button>
                  );
                })}
              </div>
            </motion.div>

            {/* Selected Category Details */}
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Card className={cn("mb-8", currentCategory.bgColor)}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "w-12 h-12 rounded-lg bg-white dark:bg-gray-800 flex items-center justify-center",
                      currentCategory.bgColor
                    )}>
                      <currentCategory.icon className={cn("h-6 w-6", currentCategory.color)} />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{currentCategory.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {currentCategory.beschreibung}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {currentCategory.massnahmen.map((gruppe, index) => (
                      <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold text-lg">{gruppe.titel}</h4>
                          <Badge variant={
                            gruppe.prioritaet === 'KRITISCH' ? 'destructive' :
                            gruppe.prioritaet === 'HOCH' ? 'default' :
                            'secondary'
                          }>
                            {gruppe.prioritaet}
                          </Badge>
                        </div>
                        <div className="grid md:grid-cols-2 gap-2">
                          {gruppe.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}

                    {/* Checkpunkte */}
                    <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        Prüfpunkte
                      </h4>
                      <div className="space-y-2">
                        {currentCategory.checkpunkte.map((punkt, index) => (
                          <label key={index} className="flex items-start gap-3 cursor-pointer">
                            <input type="checkbox" className="mt-1" />
                            <span className="text-sm">{punkt}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Core Requirements Alert */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Alert className="mb-8">
                <Shield className="h-4 w-4" />
                <AlertDescription>
                  <strong>Art. 32 DSGVO Kernforderungen:</strong> Die Maßnahmen müssen ein dem Risiko 
                  angemessenes Schutzniveau gewährleisten. Dabei sind der Stand der Technik, 
                  Implementierungskosten und Art, Umfang, Umstände sowie Zwecke der Verarbeitung zu berücksichtigen.
                </AlertDescription>
              </Alert>
            </motion.div>

            {/* Implementation Process */}
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Implementierungsprozess
              </h2>
              <div className="grid md:grid-cols-4 gap-4">
                {implementierungsSchritte.map((schritt, index) => {
                  const Icon = schritt.icon;
                  return (
                    <Card key={index} className="relative">
                      {index < implementierungsSchritte.length - 1 && (
                        <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gray-300 dark:bg-gray-600 z-10" />
                      )}
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between mb-2">
                          <Icon className="h-8 w-8 text-blue-600" />
                          <Badge variant="outline">{schritt.dauer}</Badge>
                        </div>
                        <CardTitle className="text-lg">{schritt.phase}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-1">
                          {schritt.aufgaben.map((aufgabe, idx) => (
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

            {/* Best Practices */}
            <motion.div
              className="grid md:grid-cols-2 gap-6 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-yellow-600" />
                    Best Practices
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Risiko-basierter Ansatz:</strong> Maßnahmen nach Schutzbedarf priorisieren
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Defense in Depth:</strong> Mehrschichtige Sicherheit implementieren
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Kontinuierliche Verbesserung:</strong> Regelmäßig evaluieren und anpassen
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <strong>Awareness schaffen:</strong> Mitarbeiter sind der wichtigste Sicherheitsfaktor
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    Häufige Fehler
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <div>
                        <strong>Überdimensionierung:</strong> Unverhältnismäßig teure Maßnahmen
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <div>
                        <strong>Lückenhaft:</strong> Wichtige Bereiche vergessen
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <div>
                        <strong>Nicht aktuell:</strong> Veraltete Maßnahmen nicht angepasst
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertTriangle className="h-5 w-5 text-orange-500 mt-0.5" />
                      <div>
                        <strong>Nicht dokumentiert:</strong> Nachweis fehlt im Ernstfall
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
              transition={{ delay: 0.6 }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <FileText className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">TOM-Katalog</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Vollständige Maßnahmen-Liste
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Target className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Reifegrad-Check</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Testen Sie Ihr TOM-Level
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Test starten
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Monitor className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Audit-Vorlage</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    Für interne Prüfungen
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Vorlage nutzen
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Users className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Beratung</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                    TOM-Experten fragen
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link to="/contact">
                      Termin buchen
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Info Alert */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <Alert>
                <Info className="h-4 w-4" />
                <AlertDescription>
                  <strong>Tipp:</strong> Die hier genannten Kategorien basieren auf dem alten BDSG. 
                  Die DSGVO nennt explizit: Pseudonymisierung, Verschlüsselung, Belastbarkeit der 
                  Systeme und Verfahren zur regelmäßigen Überprüfung. Die alten Kategorien sind 
                  aber weiterhin ein bewährtes Strukturierungsmodell.
                </AlertDescription>
              </Alert>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  TOM professionell implementieren
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Lassen Sie uns gemeinsam Ihre technischen und organisatorischen Maßnahmen optimieren
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-blue-50"
                  >
                    TOM-Analyse starten
                    <Shield className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600"
                  >
                    Security-Workshop
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

export default TOMMassnahmen;