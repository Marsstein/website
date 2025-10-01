import React from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  UserX,
  Clock,
  Euro,
  TrendingDown,
  AlertCircle,
  CheckCircle2,
  Users,
  Shield,
  ArrowRight,
  Briefcase,
  Scale,
  Target
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

const InternerDsbScheitert: React.FC = () => {
  const failureReasons = [
    {
      reason: 'Zeitkonflikte: DSB-Aufgaben vs. Haupttätigkeit',
      realityCheck: '80% der internen DSB haben DSB nicht als Haupttätigkeit',
      problem: 'DSB-Aufgaben erfordern 20-40% Zeitinvestment, werden aber "nebenbei" erledigt',
      consequence: 'Compliance-Lücken, veraltete Dokumentation, verzögerte Response bei Anfragen',
      icon: Clock,
      color: 'from-orange-500 to-red-500',
      examples: [
        'IT-Leiter soll zusätzlich DSB sein → keine Zeit für Updates',
        'HR-Manager als DSB → Interessenkonflikte bei Mitarbeiterdaten',
        'Geschäftsführer als DSB → keine Unabhängigkeit bei Prüfungen'
      ]
    },
    {
      reason: 'Fehlende Unabhängigkeit & Interessenkonflikte',
      realityCheck: 'Art. 38 Abs. 6 DSGVO verlangt Unabhängigkeit',
      problem: 'Interner DSB kann nicht objektiv prüfen, wenn er selbst Prozesse verantwortet',
      consequence: 'DSGVO-Verstoß durch mangelnde Unabhängigkeit, Haftungsrisiko',
      icon: Scale,
      color: 'from-red-500 to-pink-500',
      examples: [
        'IT-Leiter als DSB kann eigene IT-Security-Entscheidungen nicht neutral prüfen',
        'Marketing-Manager als DSB hat Interessenkonflikt bei Tracking-Maßnahmen',
        'Reporting an Geschäftsführer → keine echte Unabhängigkeit'
      ]
    },
    {
      reason: 'Überforderung durch Komplexität & ständige Updates',
      realityCheck: 'DSGVO-Rechtsprechung ändert sich wöchentlich',
      problem: 'Ohne kontinuierliche Weiterbildung fehlt aktuelles Know-how',
      consequence: 'Fehlerhafte Rechtsberatung, veraltete Prozesse, Haftungsrisiko',
      icon: TrendingDown,
      color: 'from-purple-500 to-pink-500',
      examples: [
        'Neue EuGH-Urteile zu Drittlandtransfers nicht bekannt',
        'Änderungen bei Cookie-Consent nicht umgesetzt',
        'Keine Zeit für Fortbildungen & Fachzeitschriften'
      ]
    },
    {
      reason: 'Versteckte Kosten höher als externer DSB',
      realityCheck: 'Interner DSB kostet 60.000-100.000€/Jahr + versteckte Kosten',
      problem: 'Gehalt + Weiterbildung + Opportunitätskosten + Haftungsrisiko',
      consequence: 'Teurer als externe Lösung bei geringerer Qualität',
      icon: Euro,
      color: 'from-yellow-500 to-orange-500',
      examples: [
        'Gehalt DSB: 60.000€/Jahr',
        'Fortbildungen: 3.000-8.000€/Jahr',
        'Opportunitätskosten: 20.000-40.000€/Jahr (Zeit für Haupttätigkeit fehlt)',
        'Compliance-Software: 5.000€/Jahr',
        'Gesamt: 88.000-113.000€/Jahr'
      ]
    },
    {
      reason: 'Fehlendes Backup bei Urlaub/Krankheit/Kündigung',
      realityCheck: '72h-Frist bei Data Breach gilt auch im Urlaub',
      problem: 'Kein Vertretungs-DSB → Compliance-Risiko bei Abwesenheit',
      consequence: 'Bei Datenpanne im Urlaub droht Fristversäumnis & Bußgeld',
      icon: UserX,
      color: 'from-blue-500 to-indigo-500',
      examples: [
        'DSB im 3-wöchigen Urlaub → Data Breach → keine 72h-Meldung möglich',
        'DSB kündigt → 3 Monate Vakanz → keine Compliance-Überwachung',
        'DSB langzeitkrank → keine Vertretung etabliert'
      ]
    },
    {
      reason: 'Mangelnde Durchsetzungsfähigkeit bei Konflikten',
      realityCheck: 'DSB muss auch gegen Geschäftsführung Position beziehen können',
      problem: 'Interner Mitarbeiter kann nicht gegen eigenen Chef argumentieren',
      consequence: 'Compliance-Verstöße werden nicht adressiert aus Angst vor Konsequenzen',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      examples: [
        'Marketing will nicht-DSGVO-konforme Tracking-Lösung → DSB traut sich nicht zu widersprechen',
        'Geschäftsführer verlangt Zugriff auf Personaldaten → DSB kann nicht ablehnen',
        'Budget für Compliance-Maßnahmen wird gekürzt → DSB kann nicht eskalieren'
      ]
    }
  ];

  const whenInternalWorks = [
    {
      criterion: 'Unternehmensgröße',
      minimum: '200+ Mitarbeiter',
      why: 'Nur dann rechtfertigt sich ein Vollzeit-DSB wirtschaftlich'
    },
    {
      criterion: 'Spezialisierung',
      minimum: '100% DSB-Tätigkeit',
      why: 'Keine Nebentätigkeit, die zu Interessenkonflikten führt'
    },
    {
      criterion: 'Qualifikation',
      minimum: 'Zertifizierter DSB + laufende Fortbildung',
      why: 'Komplexität erfordert Vollzeit-Expertise'
    },
    {
      criterion: 'Unabhängigkeit',
      minimum: 'Direkte Berichtslinie an Geschäftsführung',
      why: 'Keine Weisungsbefugnis durch andere Abteilungsleiter'
    },
    {
      criterion: 'Vertretung',
      minimum: 'Dedizierter Stellvertreter',
      why: 'Compliance muss auch bei Urlaub/Krankheit gewährleistet sein'
    },
    {
      criterion: 'Budget',
      minimum: '70.000-120.000€/Jahr Vollkosten',
      why: 'Gehalt + Weiterbildung + Tools + Vertretung'
    }
  ];

  const alternatives = [
    {
      model: 'Externer Freiberufler',
      cost: '4.800-14.400€/Jahr',
      pros: ['Spezialisiertes Know-how', 'Keine Interessenkonflikte', 'Flexible Skalierung'],
      cons: ['Begrenzte Verfügbarkeit', 'Keine physische Präsenz', 'Abhängigkeit von einer Person'],
      bestFor: '1-20 Mitarbeiter'
    },
    {
      model: 'Datenschutz-Kanzlei',
      cost: '9.600-30.000€/Jahr',
      pros: ['Team-Backup', 'Juristische Absicherung', 'Breite Expertise'],
      cons: ['Höhere Kosten', 'Weniger persönliche Betreuung', 'Oft reaktiv statt proaktiv'],
      bestFor: '50-200 Mitarbeiter'
    },
    {
      model: 'Hybrid-Lösung (z.B. MARSSTEIN)',
      cost: '3.588-10.788€/Jahr',
      pros: ['Software + Experte kombiniert', 'Kosteneffizient', '24/7 Monitoring', 'Skalierbar'],
      cons: ['Weniger Vor-Ort Präsenz', 'Digitale Affinität erforderlich'],
      bestFor: 'Alle Größen, moderne Unternehmen'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900">
      <SEOHead
        title="Warum interne DSB scheitern - 6 Gründe & Alternativen"
        description="80% der internen DSB scheitern an Zeitkonflikten, Interessenkonflikten und Überforderung. Kosten: 88.000-113.000€/Jahr. Alternativen im Vergleich."
        canonical="/wissen/interner-dsb-scheitert"
        keywords="Interner DSB Probleme, Datenschutzbeauftragter Nachteile, DSB Interessenkonflikt, DSB Kosten intern"
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
              <BreadcrumbPage>Interner DSB scheitert</BreadcrumbPage>
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
              className="inline-flex items-center gap-3 px-6 py-3 bg-orange-500/10 backdrop-blur-sm rounded-full mb-8 border border-orange-500/20"
            >
              <UserX className="h-5 w-5 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300">DSB-Realitätscheck</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6">
              <span className="text-white">Warum interne DSB</span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                oft scheitern
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              80% der internen Datenschutzbeauftragten scheitern an strukturellen Problemen.
              Hier sind die 6 Hauptgründe - und bessere Alternativen.
            </p>

            <Card className="border-2 border-red-500/30 bg-slate-800/40 backdrop-blur-sm inline-block">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <AlertCircle className="h-12 w-12 text-red-400" />
                  <div className="text-left">
                    <div className="text-3xl font-black text-white mb-1">88.000-113.000€</div>
                    <div className="text-sm text-slate-400">Wahre Kosten eines internen DSB/Jahr</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8 mb-16">
            {failureReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="border-2 border-slate-700/50 bg-slate-800/40 backdrop-blur-sm hover:border-orange-500/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className={`p-4 bg-gradient-to-r ${reason.color} rounded-xl flex-shrink-0`}>
                        <reason.icon className="h-8 w-8 text-white" />
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-white mb-3">
                          #{index + 1}: {reason.reason}
                        </h3>

                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                          <div>
                            <h4 className="text-sm font-semibold text-orange-300 mb-2">Reality Check:</h4>
                            <p className="text-slate-300 text-sm">{reason.realityCheck}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-red-300 mb-2">Das Problem:</h4>
                            <p className="text-slate-300 text-sm">{reason.problem}</p>
                          </div>
                          <div>
                            <h4 className="text-sm font-semibold text-pink-300 mb-2">Konsequenz:</h4>
                            <p className="text-slate-300 text-sm">{reason.consequence}</p>
                          </div>
                        </div>

                        <div className="p-4 bg-slate-900/50 rounded-lg border border-slate-700/50">
                          <h4 className="text-sm font-semibold text-white mb-3">Praxis-Beispiele:</h4>
                          <ul className="space-y-2">
                            {reason.examples.map((example, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                                <AlertCircle className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
                                <span>{example}</span>
                              </li>
                            ))}
                          </ul>
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
            <h2 className="text-4xl font-black text-white mb-4 text-center">
              <CheckCircle2 className="inline-block mr-3 text-green-400" />
              Wann funktioniert ein interner DSB?
            </h2>
            <p className="text-slate-300 text-center mb-12 text-lg">
              Ein interner DSB ist nur unter diesen Bedingungen sinnvoll:
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {whenInternalWorks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold text-white">{item.criterion}</h4>
                        <CheckCircle2 className="h-5 w-5 text-green-400" />
                      </div>
                      <div className="p-3 bg-green-500/10 rounded-lg border border-green-500/30 mb-3">
                        <div className="text-green-300 font-bold text-sm mb-1">Mindestanforderung:</div>
                        <div className="text-white font-semibold">{item.minimum}</div>
                      </div>
                      <p className="text-slate-300 text-sm">{item.why}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <Card className="border-2 border-orange-500/30 bg-slate-800/40 backdrop-blur-sm mt-8">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <Target className="h-8 w-8 text-orange-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">Fazit: Interner DSB lohnt sich nur für...</h4>
                    <p className="text-slate-300 text-lg">
                      Unternehmen mit <strong className="text-white">200+ Mitarbeitern</strong>, die einen
                      <strong className="text-white"> Vollzeit-DSB</strong> (kein Nebenamt) mit
                      <strong className="text-white"> 70.000-120.000€/Jahr Budget</strong> finanzieren können und wollen.
                    </p>
                    <p className="text-orange-300 mt-4 font-semibold">
                      Für alle anderen: Externe Lösungen sind günstiger, flexibler und rechtssicherer.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black text-white mb-8 text-center">
              Die 3 besseren Alternativen
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {alternatives.map((alt, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Card className="border border-slate-700/50 bg-slate-800/40 backdrop-blur-sm h-full flex flex-col">
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-bold text-white mb-3">{alt.model}</h3>
                      <div className="text-3xl font-black text-green-400 mb-4">{alt.cost}</div>

                      <div className="mb-4 flex-grow">
                        <h4 className="text-sm font-semibold text-green-300 mb-2">Vorteile:</h4>
                        <ul className="space-y-1 mb-4">
                          {alt.pros.map((pro, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-300 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" />
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>

                        <h4 className="text-sm font-semibold text-orange-300 mb-2">Nachteile:</h4>
                        <ul className="space-y-1">
                          {alt.cons.map((con, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-slate-400 text-sm">
                              <AlertCircle className="h-4 w-4 text-orange-400 flex-shrink-0 mt-0.5" />
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="pt-4 border-t border-slate-700 mt-auto">
                        <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                          {alt.bestFor}
                        </Badge>
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
                <Users className="h-16 w-16 text-green-400 mx-auto mb-6" />
                <h3 className="text-3xl font-black text-white mb-4">
                  Finden Sie Ihre optimale DSB-Lösung
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  Nutzen Sie unseren interaktiven Auswahlratgeber und vergleichen Sie alle DSB-Modelle basierend auf Ihrer Unternehmensgröße und Anforderungen.
                </p>
                <Button size="lg" className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 text-lg font-semibold" asChild>
                  <Link to="/ratgeber/datenschutzbeauftragter-auswahl">
                    <Briefcase className="mr-2 h-5 w-5" />
                    Zum DSB-Auswahlratgeber
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

export default InternerDsbScheitert;
