import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  AlertTriangle,
  Shield,
  FileText,
  Users,
  Database,
  Lock,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Target,
  TrendingUp
} from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';

const DsgvoComplianceLuecken: React.FC = () => {
  const warningSignsData = [
    {
      sign: 'Verarbeitungsverzeichnis fehlt oder ist veraltet',
      why: 'Art. 30 DSGVO-Pflicht',
      risk: 'Kritisch',
      bussgeld: 'Bis 10 Mio. € oder 2% Umsatz',
      icon: FileText,
      color: 'from-red-500 to-pink-500',
      symptoms: [
        'VVT wurde seit über 6 Monaten nicht aktualisiert',
        'Neue Tools/Software nicht dokumentiert',
        'Kein Prozess zur Pflege etabliert'
      ],
      quickCheck: 'Wann wurde Ihr VVT zuletzt aktualisiert? Sind alle Tools der letzten 12 Monate erfasst?'
    },
    {
      sign: 'Keine TOM-Dokumentation vorhanden',
      why: 'Art. 32 DSGVO-Pflicht',
      risk: 'Kritisch',
      bussgeld: 'Bis 20 Mio. € oder 4% Umsatz',
      icon: Lock,
      color: 'from-orange-500 to-red-500',
      symptoms: [
        'Keine schriftliche Übersicht der Sicherheitsmaßnahmen',
        'Keine Risikobewertung durchgeführt',
        'Keine regelmäßige Überprüfung der Maßnahmen'
      ],
      quickCheck: 'Können Sie auf Anfrage sofort zeigen, welche technischen & organisatorischen Maßnahmen Sie haben?'
    },
    {
      sign: 'AVV mit Dienstleistern fehlen oder unvollständig',
      why: 'Art. 28 DSGVO-Pflicht',
      risk: 'Hoch',
      bussgeld: 'Bis 20 Mio. € oder 4% Umsatz',
      icon: Users,
      color: 'from-purple-500 to-pink-500',
      symptoms: [
        'Keine AVV mit Cloud-Anbietern (AWS, Google, etc.)',
        'Standard-AVV ohne Anpassung an eigene Prozesse',
        'Keine Übersicht über alle Auftragsverarbeiter'
      ],
      quickCheck: 'Haben Sie mit ALLEN Dienstleistern, die Kundendaten verarbeiten, eine gültige AVV?'
    },
    {
      sign: 'Betroffenenrechte können nicht binnen 30 Tagen erfüllt werden',
      why: 'Art. 12-22 DSGVO-Pflicht',
      risk: 'Hoch',
      bussgeld: 'Bis 20 Mio. € oder 4% Umsatz',
      icon: Database,
      color: 'from-blue-500 to-indigo-500',
      symptoms: [
        'Kein Prozess für Auskunftsanfragen definiert',
        'Daten sind über viele Systeme verstreut',
        'Keine Verantwortlichkeiten festgelegt'
      ],
      quickCheck: 'Könnten Sie heute alle Daten einer Person aus allen Systemen innerhalb von 4 Wochen liefern?'
    },
    {
      sign: 'Kein Datenschutz-Notfallplan bei Datenpannen',
      why: 'Art. 33/34 DSGVO - 72h Meldepflicht',
      risk: 'Kritisch',
      bussgeld: 'Bis 20 Mio. € + Reputationsschaden',
      icon: AlertTriangle,
      color: 'from-red-500 to-orange-500',
      symptoms: [
        'Keine definierten Rollen bei Data Breach',
        'Keine Templates für Behördenmeldung',
        'Team kennt 72h-Frist nicht'
      ],
      quickCheck: 'Haben Sie einen schriftlichen Plan, was bei einem Datenleck in den ersten 72 Stunden passiert?'
    },
    {
      sign: 'Mitarbeiter wurden über 2 Jahre nicht geschult',
      why: 'Art. 32 & 39 DSGVO - Awareness-Pflicht',
      risk: 'Mittel',
      bussgeld: 'Indirekt: Erhöht Risiko für Verstöße',
      icon: Users,
      color: 'from-yellow-500 to-orange-500',
      symptoms: [
        'Mitarbeiter kennen DSGVO-Grundsätze nicht',
        'Keine regelmäßigen Updates zu Datenschutz',
        'Letzte Schulung vor über 24 Monaten'
      ],
      quickCheck: 'Wann hat Ihr Team zuletzt eine Datenschutz-Schulung erhalten? Kennen alle die 7 DSGVO-Grundsätze?'
    },
    {
      sign: 'Website-Compliance: Cookie-Banner oder Datenschutzerklärung fehlerhaft',
      why: 'Art. 13 DSGVO + ePrivacy',
      risk: 'Hoch',
      bussgeld: 'Bis 20 Mio. € + Abmahnrisiko',
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      symptoms: [
        'Cookie-Banner setzt Cookies vor Consent',
        'Google Analytics ohne Consent Management',
        'Datenschutzerklärung seit 2+ Jahren unverändert'
      ],
      quickCheck: 'Werden auf Ihrer Website Tracking-Cookies VOR User-Zustimmung gesetzt?'
    }
  ];

  const complianceGaps = [
    {
      category: 'Dokumentation',
      issues: [
        'Verarbeitungsverzeichnis fehlt oder unvollständig',
        'TOM nicht schriftlich dokumentiert',
        'Datenschutzrichtlinien fehlen'
      ],
      prevalence: '60%',
      avgFine: '5.000 - 50.000€'
    },
    {
      category: 'Verträge',
      issues: [
        'Keine AVV mit Dienstleistern',
        'Standard-DPA ohne Anpassung',
        'Keine Übersicht über Subunternehmer'
      ],
      prevalence: '55%',
      avgFine: '10.000 - 100.000€'
    },
    {
      category: 'Prozesse',
      issues: [
        'Kein Betroffenenrechte-Management',
        'Keine DSFA bei Hochrisiko-Verarbeitung',
        'Kein Data Breach Response Plan'
      ],
      prevalence: '70%',
      avgFine: '20.000 - 200.000€'
    },
    {
      category: 'Website',
      issues: [
        'Cookie-Banner nicht compliant',
        'Datenschutzerklärung unvollständig',
        'Tracking ohne Consent'
      ],
      prevalence: '45%',
      avgFine: '5.000 - 50.000€ + Abmahnungen'
    }
  ];

  const actionSteps = [
    {
      step: '1. Compliance-Quick-Check durchführen',
      duration: '30 Minuten',
      action: 'Nutzen Sie unseren kostenlosen Datenschutz-Test',
      link: '/assessment-center/datenschutz-test',
      icon: Target
    },
    {
      step: '2. Prioritäten setzen: Kritische Lücken zuerst',
      duration: '1 Tag',
      action: 'Erstellen Sie eine Prioritätsliste nach Risiko & Aufwand',
      link: '/wissen/dsgvo',
      icon: TrendingUp
    },
    {
      step: '3. Sofortmaßnahmen umsetzen',
      duration: '1-2 Wochen',
      action: 'Schließen Sie die Top 3 kritischen Lücken',
      link: '/wissen/leitfaden/dsgvo-30-tage',
      icon: CheckCircle2
    },
    {
      step: '4. Langfristige Compliance etablieren',
      duration: 'Laufend',
      action: 'Implementieren Sie Prozesse für kontinuierliche Compliance',
      link: '/preise',
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900 to-slate-900">
      <SEOHead
        title="7 Anzeichen dass Ihre DSGVO-Compliance unvollständig ist"
        description="Erkennen Sie kritische DSGVO-Lücken: Fehlendes VVT, keine TOM, fehlende AVV. 70% der Unternehmen haben diese Compliance-Gaps. Jetzt prüfen!"
        canonical="/wissen/dsgvo-compliance-luecken"
        keywords="DSGVO Lücken, Compliance Gaps, DSGVO unvollständig, Datenschutz Risiken, DSGVO Fehler"
      />
      <Header />

      <div className="container px-4 py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/wissen">Wissen</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>DSGVO Compliance Lücken</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="py-24 px-4 sm:px-6 lg:px-8"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-red-500/10 backdrop-blur-sm rounded-full mb-8 border border-red-500/20"
            >
              <AlertTriangle className="h-5 w-5 text-red-400 animate-pulse" />
              <span className="text-sm font-semibold text-red-300">Compliance-Warnung</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-white">7 Anzeichen für</span>
              <br />
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
                DSGVO-Lücken
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              70% aller Unternehmen haben kritische Compliance-Gaps, die bei Prüfungen zu Bußgeldern führen können.
              Prüfen Sie, ob Sie betroffen sind.
            </p>

            <Card className="border-2 border-orange-500/30 bg-slate-800/40 backdrop-blur-sm inline-block">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <AlertTriangle className="h-12 w-12 text-orange-400" />
                  <div className="text-left">
                    <div className="text-3xl font-black text-white mb-1">5-20 Mio. €</div>
                    <div className="text-sm text-slate-400">Durchschnittliches DSGVO-Bußgeld 2024</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 mb-16">
            {warningSignsData.map((sign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="border-2 border-slate-700/50 bg-slate-800/40 backdrop-blur-sm hover:border-red-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`p-4 bg-gradient-to-r ${sign.color} rounded-xl flex-shrink-0`}>
                        <sign.icon className="h-8 w-8 text-white" />
                      </div>

                      <div className="flex-grow">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                              #{index + 1}: {sign.sign}
                            </h3>
                            <div className="flex items-center gap-3 mb-3">
                              <Badge variant="outline" className="border-red-500/50 text-red-300">
                                Risiko: {sign.risk}
                              </Badge>
                              <span className="text-slate-400 text-sm">{sign.why}</span>
                            </div>
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6 mb-6">
                          <div>
                            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                              <XCircle className="h-4 w-4 text-red-400" />
                              Typische Symptome:
                            </h4>
                            <ul className="space-y-2">
                              {sign.symptoms.map((symptom, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                                  <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                                  <span>{symptom}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-sm font-semibold text-white mb-3 flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-green-400" />
                              Quick-Check:
                            </h4>
                            <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                              <p className="text-slate-300 text-sm italic">"{sign.quickCheck}"</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 bg-gradient-to-r from-orange-500/10 to-red-500/10 rounded-lg border border-orange-500/30">
                          <div className="flex items-center gap-2">
                            <AlertTriangle className="h-5 w-5 text-orange-400 flex-shrink-0" />
                            <div>
                              <span className="text-white font-semibold">Mögliches Bußgeld: </span>
                              <span className="text-orange-300">{sign.bussgeld}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-8 text-center">
              Die häufigsten Compliance-Lücken im Überblick
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {complianceGaps.map((gap, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-white">{gap.category}</h3>
                        <Badge className="bg-red-500/20 text-red-300 border-red-500/30">
                          {gap.prevalence} betroffen
                        </Badge>
                      </div>

                      <ul className="space-y-2 mb-6">
                        {gap.issues.map((issue, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                            <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                            <span>{issue}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-slate-700">
                        <div className="text-sm text-slate-400 mb-1">Durchschnittliche Bußgelder:</div>
                        <div className="text-lg font-bold text-orange-400">{gap.avgFine}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-4 text-center">
              <Shield className="inline-block mr-3 text-green-400" />
              4 Schritte zur Lücken-Schließung
            </h2>
            <p className="text-slate-300 text-center mb-12 text-lg">
              So gehen Sie systematisch vor, um kritische Compliance-Lücken zu beheben:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {actionSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex-shrink-0">
                          <step.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-lg font-bold text-white mb-2">{step.step}</h4>
                          <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 mb-3">
                            {step.duration}
                          </Badge>
                          <p className="text-slate-300 text-sm mb-4">{step.action}</p>
                          <Button size="sm" variant="outline" className="border-green-500/50 text-green-300 hover:bg-green-500/10" asChild>
                            <Link to={step.link}>
                              Mehr erfahren
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="border-2 border-green-500/30 bg-gradient-to-br from-slate-800/60 to-green-900/20 backdrop-blur-sm">
              <CardContent className="p-12">
                <Target className="h-16 w-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-3xl font-black text-white mb-4">
                  Prüfen Sie Ihre Compliance-Situation
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Machen Sie jetzt unseren kostenlosen Datenschutz-Test und erhalten Sie eine präzise Einschätzung Ihrer Compliance-Lücken.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold" asChild>
                  <Link to="/assessment-center/datenschutz-test">
                    <Shield className="mr-2 h-5 w-5" />
                    Kostenloser Compliance-Check
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default DsgvoComplianceLuecken;
