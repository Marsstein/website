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
  Globe,
  Cookie,
  FileText,
  Mail,
  Shield,
  Eye,
  Lock,
  CheckCircle2,
  ArrowRight,
  Clock,
  AlertTriangle,
  Code,
  Database,
  UserCheck,
  Settings,
  ChevronRight,
  Download,
  ExternalLink,
  Lightbulb,
  Zap,
  Award,
  BarChart3,
  Search
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const WebsiteDSGVO: React.FC = () => {
  const [activeStep, setActiveStep] = useState('schritt1');

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "Website DSGVO-konform machen",
    "description": "Schritt-für-Schritt Anleitung: Website DSGVO-konform gestalten. Datenschutzerklärung, Cookie-Banner, Kontaktformulare, Analytics rechtssicher.",
    "url": "https://marsstein.ai/wissen/leitfaden/website-dsgvo"
  };

  const steps = {
    schritt1: {
      title: 'Datenschutzerklärung',
      icon: FileText,
      number: '1',
      content: {
        description: 'Eine rechtssichere Datenschutzerklärung ist Pflicht für jede Website.',
        requirements: [
          {
            title: 'Pflichtangaben',
            items: [
              'Name und Kontaktdaten des Verantwortlichen',
              'Kontaktdaten des Datenschutzbeauftragten (falls vorhanden)',
              'Zwecke und Rechtsgrundlagen der Verarbeitung',
              'Empfänger oder Kategorien von Empfängern',
              'Speicherdauer oder Kriterien für Festlegung',
              'Betroffenenrechte und Beschwerderecht',
              'Widerrufsrecht bei Einwilligung'
            ]
          },
          {
            title: 'Spezielle Verarbeitungen',
            items: [
              'Kontaktformular und E-Mail-Kontakt',
              'Newsletter-Versand',
              'Web-Analytics (Google Analytics, Matomo)',
              'Social Media Plugins',
              'Cookies und Tracking',
              'Drittland-Transfers',
              'Hosting und Content Delivery Networks'
            ]
          }
        ],
        checklist: [
          '1-Klick-Erreichbarkeit von jeder Seite',
          'Verständliche, klare Sprache',
          'Vollständigkeit aller Verarbeitungen',
          'Aktualität (bei Änderungen anpassen)',
          'Mobile Optimierung'
        ]
      }
    },
    schritt2: {
      title: 'Cookie-Banner',
      icon: Cookie,
      number: '2',
      content: {
        description: 'Cookies benötigen eine informierte Einwilligung, bevor sie gesetzt werden.',
        cookieTypes: [
          {
            type: 'Notwendige Cookies',
            consent: 'Nicht erforderlich',
            examples: ['Session-Cookies', 'Warenkorb', 'Login-Status'],
            color: 'green'
          },
          {
            type: 'Funktionale Cookies',
            consent: 'Einwilligung erforderlich',
            examples: ['Spracheinstellungen', 'Schriftgröße', 'Design-Präferenzen'],
            color: 'blue'
          },
          {
            type: 'Analyse-Cookies',
            consent: 'Einwilligung erforderlich',
            examples: ['Google Analytics', 'Matomo', 'Hotjar'],
            color: 'orange'
          },
          {
            type: 'Marketing-Cookies',
            consent: 'Einwilligung erforderlich',
            examples: ['Facebook Pixel', 'Google Ads', 'Retargeting'],
            color: 'red'
          }
        ],
        implementation: [
          'Cookie-Banner beim ersten Besuch anzeigen',
          'Granulare Auswahlmöglichkeiten bieten',
          'Opt-In statt Opt-Out (Checkboxen nicht vorauswählen)',
          'Ablehnen genauso einfach wie Akzeptieren',
          'Einstellungen jederzeit änderbar',
          'Consent-Verwaltung dokumentieren'
        ]
      }
    },
    schritt3: {
      title: 'Kontaktformulare',
      icon: Mail,
      number: '3',
      content: {
        description: 'Kontaktformulare sammeln personenbezogene Daten und müssen DSGVO-konform sein.',
        requirements: [
          {
            title: 'Technische Umsetzung',
            items: [
              'SSL-Verschlüsselung (HTTPS)',
              'Spam-Schutz ohne übermäßige Datensammlung',
              'Keine Vorauswahl von Marketing-Checkboxen',
              'Löschung nach Zweckerfüllung'
            ]
          },
          {
            title: 'Transparenz',
            items: [
              'Hinweis auf Datenschutzerklärung direkt am Formular',
              'Kurze Info über Zweck der Datenerhebung',
              'Bei Newsletter: Double-Opt-In Verfahren',
              'Keine Pflichtfelder für nicht notwendige Daten'
            ]
          }
        ],
        example: {
          title: 'Muster-Hinweistext',
          text: 'Mit dem Absenden des Formulars willigen Sie in die Verarbeitung Ihrer Daten zur Bearbeitung Ihrer Anfrage ein. Weitere Informationen und Widerrufshinweise finden Sie in unserer Datenschutzerklärung.'
        }
      }
    },
    schritt4: {
      title: 'Analytics & Tracking',
      icon: BarChart3,
      number: '4',
      content: {
        description: 'Web-Analytics Tools müssen datenschutzkonform konfiguriert werden.',
        googleAnalytics: {
          title: 'Google Analytics 4',
          requirements: [
            'Auftragsverarbeitungsvertrag mit Google',
            'IP-Anonymisierung aktivieren',
            'Keine Übertragung an Google für andere Zwecke',
            'Cookies nur nach Einwilligung',
            'Opt-Out Möglichkeit anbieten',
            'Speicherdauer begrenzen'
          ]
        },
        alternatives: [
          {
            name: 'Matomo',
            type: 'Self-Hosted',
            advantage: 'Volle Datenkontrolle'
          },
          {
            name: 'Plausible',
            type: 'Privacy-First',
            advantage: 'Keine Cookies nötig'
          },
          {
            name: 'Fathom',
            type: 'DSGVO-konform',
            advantage: 'EU-Server verfügbar'
          }
        ]
      }
    },
    schritt5: {
      title: 'Social Media',
      icon: Globe,
      number: '5',
      content: {
        description: 'Social Media Integrationen können Daten an Drittanbieter übertragen.',
        risks: [
          'Like-Buttons übertragen Daten schon beim Laden',
          'Eingebettete Posts tracken Besucher',
          'Drittland-Transfer problematisch (USA)',
          'Gemeinsame Verantwortlichkeit möglich'
        ],
        solutions: [
          {
            title: '2-Klick-Lösung',
            description: 'Inhalte erst nach Einwilligung laden',
            implementation: 'Shariff oder eigene Lösung'
          },
          {
            title: 'Statische Links',
            description: 'Einfache Links statt Plugins',
            implementation: 'Keine Datenübertragung beim Laden'
          },
          {
            title: 'Lokale Kopien',
            description: 'Vorschaubilder selbst hosten',
            implementation: 'Erst bei Klick zu Social Media'
          }
        ]
      }
    },
    schritt6: {
      title: 'Hosting & CDN',
      icon: Database,
      number: '6',
      content: {
        description: 'Auch Hosting und Content Delivery Networks verarbeiten personenbezogene Daten.',
        considerations: [
          {
            aspect: 'Server-Standort',
            importance: 'Hoch',
            details: 'EU-Server bevorzugen, bei Drittland AVV + SCCs'
          },
          {
            aspect: 'Auftragsverarbeitung',
            importance: 'Pflicht',
            details: 'AVV mit Hoster abschließen'
          },
          {
            aspect: 'Logs',
            importance: 'Mittel',
            details: 'IP-Adressen anonymisieren oder löschen'
          },
          {
            aspect: 'Backups',
            importance: 'Mittel',
            details: 'Löschkonzept auch für Backups'
          }
        ],
        cdnCheck: [
          'Standorte der CDN-Server prüfen',
          'Datenschutzvereinbarung vorhanden?',
          'Welche Daten werden verarbeitet?',
          'Alternative: Lokales Hosting von Assets'
        ]
      }
    },
    schritt7: {
      title: 'Prüfung & Updates',
      icon: CheckCircle2,
      number: '7',
      content: {
        description: 'DSGVO-Compliance ist ein kontinuierlicher Prozess.',
        regular: [
          'Monatlich: Cookie-Scan durchführen',
          'Quartalsweise: Datenschutzerklärung prüfen',
          'Jährlich: Komplette DSGVO-Prüfung',
          'Bei Änderungen: Sofort anpassen'
        ],
        tools: [
          {
            name: 'Cookie-Scanner',
            purpose: 'Findet alle Cookies auf der Website',
            frequency: 'Monatlich'
          },
          {
            name: 'Privacy-Check',
            purpose: 'Prüft Datenschutzerklärung',
            frequency: 'Quartalsweise'
          },
          {
            name: 'Third-Party-Audit',
            purpose: 'Externe Dienste prüfen',
            frequency: 'Halbjährlich'
          }
        ]
      }
    }
  };

  const commonMistakes = [
    {
      mistake: 'Google Fonts direkt einbinden',
      problem: 'Überträgt IP-Adressen an Google',
      solution: 'Fonts lokal hosten oder Einwilligung einholen'
    },
    {
      mistake: 'YouTube-Videos direkt einbetten',
      problem: 'Setzt Tracking-Cookies ohne Einwilligung',
      solution: 'Erweiterten Datenschutzmodus oder 2-Klick-Lösung'
    },
    {
      mistake: 'Veraltete Datenschutzerklärung',
      problem: 'Unvollständige oder falsche Informationen',
      solution: 'Regelmäßige Updates, Generator nutzen'
    },
    {
      mistake: 'Fehlende SSL-Verschlüsselung',
      problem: 'Unsichere Datenübertragung',
      solution: 'HTTPS für gesamte Website aktivieren'
    }
  ];

  return (
    <>
      <SEOHead
        title="Website DSGVO-konform – In 7 Schritten rechtssicher"
        description="Website DSGVO-konform machen: Datenschutzerklärung, Cookie-Banner, Kontaktformulare, Analytics. ✓ Schritt-für-Schritt ✓ Checklisten ✓ Vorlagen. Jetzt umsetzen!"
        canonical="/wissen/leitfaden/website-dsgvo"
        keywords="Website DSGVO, DSGVO Website, Cookie Banner DSGVO, Datenschutzerklärung Website, Website rechtssicher"
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
                <Globe className="h-3 w-3 mr-1" />
                Website Compliance Guide
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                Website DSGVO-konform machen
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                In 7 Schritten zur rechtssicheren Website - von Datenschutzerklärung 
                über Cookie-Banner bis zu Analytics
              </p>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              className="grid md:grid-cols-4 gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Card className="text-center">
                <CardContent className="p-4">
                  <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Umsetzung</div>
                  <div className="text-lg font-bold">2-4 Std</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Zap className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Schwierigkeit</div>
                  <div className="text-lg font-bold">Mittel</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Shield className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Priorität</div>
                  <div className="text-lg font-bold">Hoch</div>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="p-4">
                  <Award className="h-6 w-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-sm font-medium">Nutzen</div>
                  <div className="text-lg font-bold">Essentiell</div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Progress Steps */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center justify-between relative">
                <div className="absolute left-0 right-0 top-5 h-0.5 bg-gray-200 dark:bg-gray-700" />
                {Object.entries(steps).map(([key, step]) => {
                  const Icon = step.icon;
                  const isActive = key === activeStep;
                  const stepIndex = Object.keys(steps).indexOf(key);
                  const activeIndex = Object.keys(steps).indexOf(activeStep);
                  const isCompleted = stepIndex < activeIndex;
                  
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveStep(key)}
                      className="relative z-10 bg-white dark:bg-gray-900"
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center transition-all",
                        isActive ? "bg-blue-600 text-white ring-4 ring-blue-100" :
                        isCompleted ? "bg-green-600 text-white" :
                        "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                      )}>
                        {isCompleted ? (
                          <CheckCircle2 className="h-5 w-5" />
                        ) : (
                          <span className="text-sm font-bold">{step.number}</span>
                        )}
                      </div>
                      <div className="hidden md:block absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                        <span className={cn(
                          "text-xs",
                          isActive ? "text-blue-600 font-semibold" : "text-gray-500"
                        )}>
                          {step.title}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>

            {/* Step Content */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              {Object.entries(steps).map(([key, step]) => {
                if (key !== activeStep) return null;
                const Icon = step.icon;
                
                return (
                  <div key={key}>
                    <Card>
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        </div>
                        <CardTitle className="text-2xl">
                          Schritt {step.number}: {step.title}
                        </CardTitle>
                        <CardDescription className="text-base">
                          {step.content.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {'requirements' in step.content && (
                          <div className="space-y-4">
                            {step.content.requirements.map((req, idx) => (
                              <div key={idx}>
                                <h4 className="font-semibold mb-3">{req.title}</h4>
                                <div className="space-y-2">
                                  {req.items.map((item, itemIdx) => (
                                    <div key={itemIdx} className="flex items-start gap-2">
                                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-sm">{item}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        )}

                        {'checklist' in step.content && (
                          <Alert>
                            <CheckCircle2 className="h-4 w-4" />
                            <AlertDescription>
                              <div className="font-semibold mb-2">Checkliste:</div>
                              <div className="space-y-1">
                                {step.content.checklist.map((item, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </AlertDescription>
                          </Alert>
                        )}

                        {'cookieTypes' in step.content && (
                          <div className="grid md:grid-cols-2 gap-4">
                            {step.content.cookieTypes.map((type, idx) => (
                              <Card key={idx} className={cn(
                                "border-l-4",
                                type.color === 'green' && "border-green-500",
                                type.color === 'blue' && "border-blue-500",
                                type.color === 'orange' && "border-orange-500",
                                type.color === 'red' && "border-red-500"
                              )}>
                                <CardContent className="p-4">
                                  <h4 className="font-semibold mb-2">{type.type}</h4>
                                  <Badge variant={type.consent === 'Nicht erforderlich' ? 'secondary' : 'destructive'} className="mb-3">
                                    {type.consent}
                                  </Badge>
                                  <div className="space-y-1">
                                    {type.examples.map((example, exIdx) => (
                                      <div key={exIdx} className="text-sm text-gray-600 dark:text-gray-400">
                                        • {example}
                                      </div>
                                    ))}
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        )}

                        {'implementation' in step.content && (
                          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4">
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Settings className="h-5 w-5" />
                              Technische Umsetzung
                            </h4>
                            <div className="space-y-2">
                              {step.content.implementation.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <Code className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {'example' in step.content && (
                          <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4">
                            <h4 className="font-semibold mb-2">{step.content.example.title}</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                              "{step.content.example.text}"
                            </p>
                          </div>
                        )}

                        {'googleAnalytics' in step.content && (
                          <div>
                            <h4 className="font-semibold mb-3">{step.content.googleAnalytics.title}</h4>
                            <div className="space-y-2 mb-6">
                              {step.content.googleAnalytics.requirements.map((req, idx) => (
                                <div key={idx} className="flex items-start gap-2">
                                  <Shield className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <span className="text-sm">{req}</span>
                                </div>
                              ))}
                            </div>
                            <h4 className="font-semibold mb-3">Datenschutzfreundliche Alternativen</h4>
                            <div className="grid md:grid-cols-3 gap-4">
                              {step.content.alternatives.map((alt, idx) => (
                                <Card key={idx}>
                                  <CardContent className="p-4">
                                    <h5 className="font-semibold">{alt.name}</h5>
                                    <Badge variant="outline" className="my-2">{alt.type}</Badge>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                      {alt.advantage}
                                    </p>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        )}

                        {'solutions' in step.content && (
                          <div>
                            <Alert className="mb-4">
                              <AlertTriangle className="h-4 w-4" />
                              <AlertDescription>
                                <div className="font-semibold mb-2">Risiken:</div>
                                <ul className="space-y-1">
                                  {step.content.risks.map((risk, idx) => (
                                    <li key={idx} className="text-sm">• {risk}</li>
                                  ))}
                                </ul>
                              </AlertDescription>
                            </Alert>
                            <h4 className="font-semibold mb-3">Lösungsansätze</h4>
                            <div className="space-y-4">
                              {step.content.solutions.map((solution, idx) => (
                                <Card key={idx}>
                                  <CardContent className="p-4">
                                    <h5 className="font-semibold mb-1">{solution.title}</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                                      {solution.description}
                                    </p>
                                    <Badge variant="secondary">{solution.implementation}</Badge>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        )}

                        {'considerations' in step.content && (
                          <div>
                            <div className="overflow-x-auto mb-4">
                              <table className="w-full">
                                <thead>
                                  <tr className="border-b">
                                    <th className="text-left py-2 px-4">Aspekt</th>
                                    <th className="text-left py-2 px-4">Wichtigkeit</th>
                                    <th className="text-left py-2 px-4">Details</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {step.content.considerations.map((item, idx) => (
                                    <tr key={idx} className="border-b">
                                      <td className="py-2 px-4">{item.aspect}</td>
                                      <td className="py-2 px-4">
                                        <Badge variant={
                                          item.importance === 'Hoch' ? 'destructive' :
                                          item.importance === 'Pflicht' ? 'default' :
                                          'secondary'
                                        }>
                                          {item.importance}
                                        </Badge>
                                      </td>
                                      <td className="py-2 px-4 text-sm">{item.details}</td>
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                            <Alert>
                              <Globe className="h-4 w-4" />
                              <AlertDescription>
                                <div className="font-semibold mb-2">CDN-Checkliste:</div>
                                <div className="space-y-1">
                                  {step.content.cdnCheck.map((item, idx) => (
                                    <div key={idx} className="text-sm">• {item}</div>
                                  ))}
                                </div>
                              </AlertDescription>
                            </Alert>
                          </div>
                        )}

                        {'regular' in step.content && (
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3">Regelmäßige Aufgaben</h4>
                              <div className="space-y-2">
                                {step.content.regular.map((task, idx) => (
                                  <div key={idx} className="flex items-start gap-2">
                                    <Clock className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <span className="text-sm">{task}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-3">Empfohlene Tools</h4>
                              <div className="space-y-3">
                                {step.content.tools.map((tool, idx) => (
                                  <Card key={idx}>
                                    <CardContent className="p-3">
                                      <h5 className="font-medium text-sm">{tool.name}</h5>
                                      <p className="text-xs text-gray-600 dark:text-gray-400 my-1">
                                        {tool.purpose}
                                      </p>
                                      <Badge variant="outline" className="text-xs">
                                        {tool.frequency}
                                      </Badge>
                                    </CardContent>
                                  </Card>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    {/* Navigation */}
                    <div className="flex justify-between mt-6">
                      <Button
                        variant="outline"
                        onClick={() => {
                          const keys = Object.keys(steps);
                          const currentIndex = keys.indexOf(key);
                          if (currentIndex > 0) {
                            setActiveStep(keys[currentIndex - 1]);
                          }
                        }}
                        disabled={Object.keys(steps).indexOf(key) === 0}
                      >
                        <ArrowLeft className="h-4 w-4 mr-2" />
                        Zurück
                      </Button>
                      <Button
                        onClick={() => {
                          const keys = Object.keys(steps);
                          const currentIndex = keys.indexOf(key);
                          if (currentIndex < keys.length - 1) {
                            setActiveStep(keys[currentIndex + 1]);
                          }
                        }}
                        disabled={Object.keys(steps).indexOf(key) === Object.keys(steps).length - 1}
                      >
                        Weiter
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </motion.div>

            {/* Common Mistakes */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Häufige Fehler vermeiden
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {commonMistakes.map((mistake, index) => (
                  <Card key={index} className="border-l-4 border-red-500">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-red-700 dark:text-red-400">
                            {mistake.mistake}
                          </h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400 my-2">
                            Problem: {mistake.problem}
                          </p>
                          <div className="flex items-start gap-2">
                            <Lightbulb className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <p className="text-sm font-medium">
                              Lösung: {mistake.solution}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Tools & Resources */}
            <motion.div
              className="mt-12 grid md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="text-center">
                <CardContent className="p-6">
                  <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Cookie-Scanner</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Finden Sie alle Cookies auf Ihrer Website
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/tools/cookie-scanner">
                      Tool starten
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">DS-Generator</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Datenschutzerklärung generieren
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/tools/datenschutzerklaerung-generator">
                      Generator öffnen
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <CheckCircle2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Website-Check</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Komplette DSGVO-Prüfung
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/assessment-center/website-dsgvo-check">
                      Check starten
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
              transition={{ delay: 0.6 }}
            >
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Brauchen Sie Unterstützung?
                </h2>
                <p className="text-lg mb-6 opacity-90">
                  Unsere Experten helfen Ihnen bei der DSGVO-konformen Umsetzung Ihrer Website
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    variant="secondary"
                    className="bg-white text-blue-600 hover:bg-blue-50"
                  >
                    Website-Audit buchen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-blue-600"
                  >
                    PDF-Checkliste
                    <Download className="ml-2 h-5 w-5" />
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

export default WebsiteDSGVO;