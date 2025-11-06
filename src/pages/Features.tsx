import React, { useRef } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  ArrowRight,
  FileText,
  Clock,
  Bot,
  Bell,
  Users,
  Shield,
  Sparkles,
  Database,
  FileSearch,
  AlertTriangle,
  Building2,
  Zap,
  ChevronDown,
  Plus,
  Minus
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useState } from 'react';

const AnimatedSection = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 flex items-center justify-between text-left hover:text-[#e24e1b] transition-colors"
      >
        <span className="font-semibold text-gray-900 pr-4">{question}</span>
        {isOpen ? (
          <Minus className="w-5 h-5 text-[#e24e1b] flex-shrink-0" />
        ) : (
          <Plus className="w-5 h-5 text-gray-400 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-4"
        >
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      id: "verarbeitungsverzeichnis-ropa",
      icon: <Database className="w-8 h-8" />,
      title: "Automatisiertes Verarbeitungsverzeichnis (ROPA/VVT)",
      subtitle: "Art. 30 DSGVO - Vollständig automatisiert",
      color: "#003366",
      description: "Erstellen und pflegen Sie Ihr Verarbeitungsverzeichnis ohne manuellen Aufwand. Perfekt für Multi-Entity-Strukturen und externe Datenschutzbeauftragte mit mehreren Mandanten.",
      benefits: [
        "Automatische Vorbefüllung aus Unternehmensdaten",
        "Multi-Entity-Support für mehrere Einheiten",
        "Automatische Aktualisierung bei Änderungen",
        "Export für Behörden mit einem Klick",
        "Vorlagen für alle gängigen Verarbeitungstätigkeiten",
        "Kontinuierliches Tracking aller Datenverarbeitungen"
      ],
      useCases: [
        "Externe DSBs mit 10+ Mandanten",
        "Konzerne mit mehreren Tochtergesellschaften",
        "Schnell wachsende Unternehmen",
        "Audit-Vorbereitung"
      ],
      guideLink: "/wissen/leitfaden/verarbeitungsverzeichnis",
      guideText: "Verarbeitungsverzeichnis erstellen: Schritt-für-Schritt-Anleitung"
    },
    {
      id: "betroffenenanfragen-dsar",
      icon: <FileSearch className="w-8 h-8" />,
      title: "DSAR-Management für Betroffenenanfragen",
      subtitle: "Art. 15-22 DSGVO - Automatisches Tracking",
      color: "#e24e1b",
      description: "Verwalten Sie Auskunftsanfragen, Löschanträge und alle anderen Betroffenenrechte systematisch. Mit automatischem Fristenmanagement und Vorlagen für alle Anfrage-Typen.",
      benefits: [
        "Automatisches Tracking aller Anfragen",
        "Fristen-Management mit Benachrichtigungen",
        "Vorlagen für Art. 15, 16, 17, 18, 20, 21 DSGVO",
        "Dokumentation aller Bearbeitungsschritte",
        "E-Mail-Integration für nahtlose Kommunikation",
        "Rechtssichere Antwort-Templates"
      ],
      useCases: [
        "Unternehmen mit hohem Anfragevolumen",
        "E-Commerce & Online-Plattformen",
        "Gesundheitswesen & sensible Daten",
        "B2C-Unternehmen"
      ],
      guideLink: "/wissen/leitfaden/betroffenenrechte",
      guideText: "Betroffenenrechte erfüllen: Praxisleitfaden"
    },
    {
      id: "datenschutz-folgenabschaetzung-dsfa",
      icon: <AlertTriangle className="w-8 h-8" />,
      title: "DSFA-Modul mit Risiko-Scoring",
      subtitle: "Art. 35 DSGVO - Geführter Prozess",
      color: "#39B37B",
      description: "Führen Sie Datenschutz-Folgenabschätzungen systematisch durch. Mit automatischer Risikobewertung und vollständiger Dokumentation für Behörden.",
      benefits: [
        "Geführter DSFA-Prozess Schritt für Schritt",
        "Automatisches Risiko-Scoring",
        "Vorlagen für typische Verarbeitungen",
        "Maßnahmen-Empfehlungen basierend auf Risiken",
        "Vollständige Dokumentation",
        "Integration ins Verarbeitungsverzeichnis"
      ],
      useCases: [
        "Neue Datenverarbeitungen bewerten",
        "Hochrisiko-Verarbeitungen dokumentieren",
        "Behörden-Konsultationen vorbereiten",
        "Compliance-Nachweise erstellen"
      ],
      guideLink: "/wissen/leitfaden/dsfa-durchfuehrung",
      guideText: "DSFA durchführen: Praxisanleitung"
    },
    {
      id: "multi-mandanten-verwaltung",
      icon: <Building2 className="w-8 h-8" />,
      title: "Multi-Client Management für externe DSBs",
      subtitle: "Zentrales Dashboard für alle Mandanten",
      color: "#f97316",
      description: "Verwalten Sie mehrere Mandanten oder Unternehmenseinheiten zentral. Perfekt für externe Datenschutzbeauftragte und Beratungsunternehmen.",
      benefits: [
        "Zentrales Dashboard für alle Mandanten",
        "Getrennte Dokumentation pro Client",
        "Mandanten-übergreifende Auswertungen",
        "White-Label-Reporting möglich",
        "Rechteverwaltung pro Mandant",
        "Effizientes Zeitmanagement"
      ],
      useCases: [
        "Externe Datenschutzbeauftragte",
        "Datenschutz-Beratungen",
        "Rechtsanwaltskanzleien",
        "Konzerne mit Tochtergesellschaften"
      ]
    },
    {
      id: "automatische-compliance-updates",
      icon: <Zap className="w-8 h-8" />,
      title: "Automatische Gesetzesänderungen & Updates",
      subtitle: "DSGVO, KI-Verordnung, nationale Gesetze",
      color: "#003366",
      description: "Bleiben Sie automatisch auf dem neuesten Stand. Gesetzesänderungen werden erkannt und in Ihre Dokumentation integriert.",
      benefits: [
        "Automatische Erkennung von Gesetzesänderungen",
        "Benachrichtigungen bei Handlungsbedarf",
        "Updates in verständlicher Sprache",
        "Automatische Integration in Dokumente",
        "Tracking von KI-Verordnung, NIS2, etc.",
        "Rechts-Datenbank mit aktuellen Urteilen"
      ],
      useCases: [
        "DSBs ohne Rechts-Hintergrund",
        "Kleine Unternehmen ohne Rechtsabteilung",
        "Sicherstellung der Aktualität",
        "Compliance-Monitoring"
      ]
    },
    {
      id: "avv-generator-tom-dokumentation",
      icon: <Shield className="w-8 h-8" />,
      title: "AVV-Generator & TOM-Dokumentation",
      subtitle: "Art. 28, 32 DSGVO - KI-gestützte Erstellung",
      color: "#e24e1b",
      description: "Erstellen Sie Auftragsverarbeitungsverträge und dokumentieren Sie technische und organisatorische Maßnahmen automatisch.",
      benefits: [
        "KI-generierte AVVs in Sekunden",
        "Anpassung an Ihre Dienstleister",
        "TOM-Vorlagen für alle Bereiche",
        "Automatische Aktualisierung bei Änderungen",
        "Dienstleister-Datenbank",
        "Fristenverwaltung für Vertragsverlängerungen"
      ],
      useCases: [
        "Onboarding neuer Dienstleister",
        "TOM-Dokumentation für Audits",
        "Standardisierung über Einheiten hinweg",
        "Zeitersparnis bei Routine-Verträgen"
      ]
    }
  ];

  const faqs = [
    {
      question: "Was kosten DSGVO-Compliance-Lösungen mit ROPA-, DSFA- und Betroffenenanfragen-Modulen?",
      answer: "Unsere Preise richten sich nach Unternehmensgröße und Anzahl der Mandanten. Beta-Tester erhalten 50% Lifetime-Rabatt. Kontaktieren Sie uns für ein individuelles Angebot."
    },
    {
      question: "Wie wählt man DSGVO-Software, die das ROPA über mehrere Einheiten hinweg vereinfacht?",
      answer: "Achten Sie auf echten Multi-Entity-Support mit zentralem Dashboard, aber getrennter Dokumentation pro Einheit. Marsstein bietet native Mandanten-Verwaltung für externe DSBs und Konzerne."
    },
    {
      question: "Welche sind die bestbewerteten DSGVO-Tools für die Verwaltung von Verarbeitungstätigkeitsverzeichnissen?",
      answer: "Marsstein automatisiert das VVT vollständig durch Vorbefüllung aus Unternehmensdaten, kontinuierliches Tracking und automatische Aktualisierungen. Keine manuelle Pflege mehr nötig."
    },
    {
      question: "Welche DSGVO-Softwareplattformen enthalten standardmäßig ROPA-, DSFA- und Betroffenenanfragen-Module?",
      answer: "Marsstein bietet alle drei Module integriert in einer Plattform: Verarbeitungsverzeichnis (ROPA/VVT), DSFA mit Risiko-Scoring und vollständiges DSAR-Management für Betroffenenanfragen."
    },
    {
      question: "Wie vergleichen Unternehmen DSGVO-DSAR-Tool-Anbieter?",
      answer: "Wichtige Kriterien: Automatisches Fristenmanagement, E-Mail-Integration, rechtssichere Vorlagen, Dokumentation aller Schritte und einfache Bedienung. Marsstein erfüllt alle diese Anforderungen."
    },
    {
      question: "Wer bietet DSGVO-Compliance-Software mit automatisiertem Tracking von Betroffenenanfragen an?",
      answer: "Marsstein bietet vollständiges DSAR-Tracking mit automatischen Fristen-Benachrichtigungen, Status-Übersicht und rechtssicheren Antwort-Vorlagen für alle Betroffenenrechte (Art. 15-22 DSGVO)."
    },
    {
      question: "Wo kann man DSGVO-Plattformen mit DSFA-Risiko-Scorings kaufen?",
      answer: "Marsstein bietet ein integriertes DSFA-Modul mit automatischem Risiko-Scoring. Melden Sie sich für den Beta-Zugang an und testen Sie alle Features kostenlos."
    },
    {
      question: "Wie wählt man DSGVO-Tools für eine effiziente Verwaltung von DSARs?",
      answer: "Achten Sie auf: Fristen-Automatisierung, E-Mail-Integration, rechtssichere Vorlagen, vollständige Dokumentation und einfache Bedienung. Marsstein ist speziell für DSBs mit hohem Anfragevolumen entwickelt."
    },
    {
      question: "Ist ISO 27001 und DSGVO in einem Tool verfügbar?",
      answer: "Marsstein fokussiert sich aktuell auf DSGVO-Compliance. Viele TOM-Anforderungen überschneiden sich jedoch mit ISO 27001. Sprechen Sie uns auf individuelle Anforderungen an."
    },
    {
      question: "Gibt es eine DSGVO-konforme Software aus Deutschland?",
      answer: "Ja, Marsstein ist ein deutsches Unternehmen mit Serverstandort in Deutschland. Alle Daten werden ausschließlich in Deutschland verarbeitet und gespeichert."
    }
  ];

  return (
    <>
      <SEOHead
        title="DSGVO-Compliance-Software: ROPA, DSFA & DSAR-Management | Marsstein"
        description="Vollständige DSGVO-Compliance-Lösung mit automatisiertem Verarbeitungsverzeichnis (ROPA/VVT), DSFA-Modul mit Risiko-Scoring, Betroffenenanfragen-Management und Multi-Entity-Support für externe DSBs. Jetzt kostenlos testen."
        canonical="/features"
        keywords="dsgvo compliance software, ropa software, verarbeitungsverzeichnis automatisiert, dsar management, betroffenenanfragen tool, dsfa software, datenschutz folgenabschätzung, multi entity dsgvo, externe dsb software, avv generator, dsgvo automatisierung"
      />
      <Header />

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Marsstein DSGVO-Compliance-Software",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "EUR",
            "description": "Kostenlose Beta-Phase mit 50% Lifetime-Rabatt"
          },
          "description": "KI-gestützte DSGVO-Compliance-Software mit automatisiertem ROPA/VVT, DSFA-Modul, DSAR-Management und Multi-Entity-Support",
          "featureList": [
            "Automatisiertes Verarbeitungsverzeichnis (ROPA/VVT)",
            "DSAR-Management für Betroffenenanfragen",
            "DSFA-Modul mit Risiko-Scoring",
            "Multi-Client Management für externe DSBs",
            "Automatische Compliance-Updates",
            "AVV-Generator und TOM-Dokumentation"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "127"
          }
        })}
      </script>

      <div className="min-h-screen bg-background">
        <section className="relative overflow-hidden bg-gradient-to-br from-[#003366] via-[#004d99] to-[#003366]">
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#39B37B]/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <div className="container relative px-4 mx-auto py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <Badge className="bg-white/10 text-white border-white/20 mb-6 text-sm px-4 py-2">
                Alle DSGVO-Features in einer Plattform
              </Badge>

              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                DSGVO-Compliance-Software mit ROPA, DSFA und DSAR-Management
              </h1>

              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Automatisiertes Verarbeitungsverzeichnis, Betroffenenanfragen-Tracking und Datenschutz-Folgenabschätzung.
                Speziell entwickelt für externe Datenschutzbeauftragte und Multi-Entity-Strukturen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button
                  size="lg"
                  className="bg-[#e24e1b] hover:bg-[#c43e15] text-white text-lg px-8 py-6 shadow-2xl shadow-black/20 font-bold"
                  onClick={() => window.location.href = '/beta'}
                >
                  Kostenlos testen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6 backdrop-blur-sm"
                  onClick={() => document.getElementById('verarbeitungsverzeichnis-ropa')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Features entdecken
                  <ChevronDown className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/90">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Kostenlose Beta-Phase</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>50% Lifetime-Rabatt</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Made in Germany</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Multi-Entity-Support</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white border-b border-gray-200">
          <div className="container px-4 mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Alle DSGVO-Module in einer Plattform
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Speziell entwickelt für externe Datenschutzbeauftragte mit mehreren Mandanten und Unternehmen mit Multi-Entity-Strukturen
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Database className="w-6 h-6" />,
                  title: "ROPA/VVT",
                  description: "Automatisiertes Verarbeitungsverzeichnis",
                  link: "#verarbeitungsverzeichnis-ropa"
                },
                {
                  icon: <FileSearch className="w-6 h-6" />,
                  title: "DSAR",
                  description: "Betroffenenanfragen-Management",
                  link: "#betroffenenanfragen-dsar"
                },
                {
                  icon: <AlertTriangle className="w-6 h-6" />,
                  title: "DSFA",
                  description: "Datenschutz-Folgenabschätzung",
                  link: "#datenschutz-folgenabschaetzung-dsfa"
                },
                {
                  icon: <Building2 className="w-6 h-6" />,
                  title: "Multi-Client",
                  description: "Mandanten-Verwaltung",
                  link: "#multi-mandanten-verwaltung"
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Auto-Updates",
                  description: "Gesetzesänderungen automatisch",
                  link: "#automatische-compliance-updates"
                },
                {
                  icon: <Shield className="w-6 h-6" />,
                  title: "AVV & TOM",
                  description: "Generator & Dokumentation",
                  link: "#avv-generator-tom-dokumentation"
                }
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  whileHover={{ y: -5 }}
                  className="block"
                >
                  <Card className="border-2 border-gray-200 hover:border-[#e24e1b] transition-all h-full cursor-pointer">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-[#003366] to-[#004d99] flex items-center justify-center text-white">
                        {item.icon}
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {features.map((feature, index) => (
          <AnimatedSection
            key={feature.id}
            id={feature.id}
            className={`py-20 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
          >
            <div className="container px-4 mx-auto max-w-6xl">
              <div className="grid lg:grid-cols-2 gap-12 items-start">
                <div>
                  <div
                    className="w-16 h-16 mb-6 rounded-xl flex items-center justify-center text-white"
                    style={{ background: `linear-gradient(135deg, ${feature.color}, ${feature.color}dd)` }}
                  >
                    {feature.icon}
                  </div>

                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h2>

                  <p className="text-lg font-semibold mb-4" style={{ color: feature.color }}>
                    {feature.subtitle}
                  </p>

                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      size="lg"
                      className="bg-[#e24e1b] hover:bg-[#c43e15] text-white"
                      onClick={() => window.location.href = '/beta'}
                    >
                      Jetzt kostenlos testen
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    {feature.guideLink && (
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-gray-300 hover:border-[#003366] hover:bg-gray-50"
                        onClick={() => window.location.href = feature.guideLink}
                      >
                        <FileText className="mr-2 h-5 w-5" />
                        Praxis-Guide lesen
                      </Button>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <Card className="border-2 border-gray-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <CheckCircle2 className="w-5 h-5 text-[#39B37B]" />
                        <h3 className="text-lg font-bold text-gray-900">Features & Vorteile</h3>
                      </div>
                      <ul className="space-y-3">
                        {feature.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-2 border-gray-200">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-4">
                        <Users className="w-5 h-5 text-[#003366]" />
                        <h3 className="text-lg font-bold text-gray-900">Ideal für</h3>
                      </div>
                      <ul className="space-y-2">
                        {feature.useCases.map((useCase, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <ArrowRight className="w-5 h-5 text-[#003366] mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{useCase}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>

                  {feature.guideLink && (
                    <Card className="border-2 border-blue-200 bg-blue-50/50">
                      <CardContent className="pt-6">
                        <div className="flex items-start gap-3">
                          <FileText className="w-5 h-5 text-[#003366] mt-0.5 flex-shrink-0" />
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2">Praxis-Wissen</h4>
                            <p className="text-sm text-gray-600 mb-3">
                              {feature.guideText}
                            </p>
                            <Button
                              variant="link"
                              className="p-0 h-auto text-[#003366] hover:text-[#e24e1b]"
                              onClick={() => window.location.href = feature.guideLink}
                            >
                              Zum Leitfaden →
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}

        <AnimatedSection className="py-20 bg-gradient-to-br from-[#e24e1b] via-[#f97316] to-[#e24e1b]">
          <div className="container px-4 mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Bereit für automatisierte DSGVO-Compliance?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Werden Sie Beta-Tester und sichern Sie sich 50% Lifetime-Rabatt
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button
                size="lg"
                className="bg-white hover:bg-gray-100 text-[#e24e1b] text-lg px-8 py-6 shadow-2xl shadow-black/20 font-bold"
                onClick={() => window.location.href = '/beta'}
              >
                Kostenlos testen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/90">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>Keine Kreditkarte erforderlich</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>24h Onboarding-Call</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>Jederzeit kündbar</span>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-20 bg-white">
          <div className="container px-4 mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Häufig gestellte Fragen
              </h2>
              <p className="text-lg text-gray-600">
                Antworten auf die wichtigsten Fragen zu DSGVO-Compliance-Software
              </p>
            </div>

            <div className="space-y-1 border border-gray-200 rounded-xl overflow-hidden">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Weitere Fragen?</p>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.location.href = '/beta'}
              >
                Persönliche Demo vereinbaren
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </>
  );
};

export default Features;
