import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Shield, CheckCircle2, XCircle, AlertCircle, Download,
  Server, Lock, Users, Zap, DollarSign, TrendingUp, Award, FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DsgvoSoftwareAuswahl = () => {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "DSGVO-Software Auswahlkriterien: Der ultimative Kaufratgeber 2025",
    "description": "Worauf Sie bei DSGVO-Compliance-Software achten müssen: 15 essenzielle Kriterien, Kostenvergleich und Checkliste zum Download.",
    "author": {
      "@type": "Organization",
      "name": "MARSSTEIN"
    },
    "datePublished": "2025-01-15"
  };

  const categories = [
    {
      id: 'must-have',
      title: 'MUST-HAVE Kriterien',
      subtitle: 'Diese Features sind unverzichtbar',
      icon: Shield,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      items: [
        {
          id: 'german-server',
          criterion: 'Deutscher Server-Standort',
          why: 'DSGVO Art. 44-49: Drittlandtransfer vermeiden',
          marsstein: 'Frankfurt am Main, Deutschland',
          market: '40% der Anbieter (60% nutzen US/EU-Mix)',
          rating: 5,
          details: 'Server in Deutschland bedeuten: Keine Drittlandtransfer-Risiken, deutsches Datenschutzrecht anwendbar, schnelle Reaktionszeit, DSGVO-konforme Datenverarbeitung ab Werk.'
        },
        {
          id: 'dsgvo-docs',
          criterion: 'Vollständige DSGVO-Pflichtdokumente',
          why: 'Art. 30 DSGVO: Verarbeitungsverzeichnis, Art. 32: TOMs',
          marsstein: 'Alle Dokumente automatisch generiert',
          market: '75% bieten Basis-Dokumente',
          rating: 5,
          details: 'Mindestens enthalten: Verarbeitungsverzeichnis (Art. 30), TOMs (Art. 32), Löschkonzept, Datenschutzerklärung, AVV-Verträge, Mitarbeiter-Verpflichtungen, Betroffenenrechte-Prozesse.'
        },
        {
          id: 'updates',
          criterion: 'Automatische Gesetzesänderungs-Updates',
          why: 'DSGVO entwickelt sich ständig weiter (Rechtsprechung)',
          marsstein: 'Automatische Updates + Benachrichtigung',
          market: '30% bieten echte Auto-Updates',
          rating: 5,
          details: 'Software muss bei Gesetzesänderungen, neuen Urteilen (z.B. Schrems II) oder Behörden-Leitlinien Ihre Dokumente automatisch aktualisieren. Manuelle Updates sind nicht akzeptabel.'
        },
        {
          id: 'ssl-security',
          criterion: 'ISO 27001-Zertifizierung des Anbieters',
          why: 'Art. 32 DSGVO: Sicherheit der Verarbeitung',
          marsstein: 'ISO 27001:2022 zertifiziert',
          market: '25% sind ISO 27001-zertifiziert',
          rating: 5,
          details: 'Der Software-Anbieter selbst sollte ISO 27001-zertifiziert sein. Das zeigt: Professionelles ISMS, regelmäßige Audits, technische und organisatorische Maßnahmen auf höchstem Niveau.'
        }
      ]
    },
    {
      id: 'important',
      title: 'WICHTIG Kriterien',
      subtitle: 'Stark empfohlen für professionelle Compliance',
      icon: Award,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      items: [
        {
          id: 'dsb',
          criterion: 'Externer Datenschutzbeauftragter inkludiert',
          why: 'Art. 37 DSGVO: DSB-Pflicht ab 20 Mitarbeitern',
          marsstein: 'Ab Professional-Paket (€199/Mo)',
          market: '15% der Anbieter',
          rating: 4,
          details: 'Ein externer DSB im Paket spart €6.000-€14.400/Jahr. Achten Sie auf: Zertifizierung (TÜV/GDDcert), Haftungsübernahme (min. €100k), Erreichbarkeit (Hotline), offizielle Benennung bei Behörde.'
        },
        {
          id: 'ai-assistant',
          criterion: 'KI-Assistent für DSGVO-Fragen',
          why: 'Sofortige Antworten ohne Wartezeit',
          marsstein: '100-1.000+ Anfragen/Monat je nach Paket',
          market: '20% bieten KI-Unterstützung',
          rating: 4,
          details: 'Ein guter KI-Assistent kennt: Ihre Unternehmensdaten, aktuelle Rechtsprechung, branchen-spezifische Anforderungen. Er sollte 24/7 verfügbar sein und in verständlicher Sprache antworten.'
        },
        {
          id: 'monitoring',
          criterion: 'Dark Web Monitoring & Security Scans',
          why: 'Proaktive Früherkennung von Datenlecks',
          marsstein: 'Professional: 25 E-Mails, Enterprise: Unlimited',
          market: '10% bieten umfassendes Monitoring',
          rating: 4,
          details: 'Überwachung von: E-Mail-Leaks im Dark Web, Passwort-Breaches, SSL-Zertifikate, Cookie-Scanner, Vulnerability-Scans. Wichtig: Sofortige Alerts bei Funden.'
        },
        {
          id: 'multi-site',
          criterion: 'Mehrere Websites/Apps verwaltbar',
          why: 'Skalierbarkeit für wachsende Unternehmen',
          marsstein: 'Starter: 2 Websites, Professional: 10, Enterprise: Unlimited',
          market: 'Meist kostenpflichtig pro Website',
          rating: 4,
          details: 'Falls Sie mehrere Domains, Sub-Domains oder Apps betreiben, muss die Software alle zentral verwalten können. Achten Sie auf versteckte Kosten pro zusätzlicher Website.'
        }
      ]
    },
    {
      id: 'nice-to-have',
      title: 'NICE-TO-HAVE Kriterien',
      subtitle: 'Differenzierungsmerkmale für Premium-Lösungen',
      icon: Zap,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      items: [
        {
          id: 'api',
          criterion: 'API-Zugang für Integrationen',
          why: 'Anbindung an HR, CRM, Marketing-Tools',
          marsstein: 'Ab Professional-Paket',
          market: '35% bieten API',
          rating: 3,
          details: 'API ermöglicht: Automatischen Datenimport aus HR-Systemen, Sync mit CRM (Salesforce, HubSpot), Webhook-Benachrichtigungen, Custom-Integrationen. REST-API ist Standard.'
        },
        {
          id: 'white-label',
          criterion: 'White-Label / Custom Branding',
          why: 'Professioneller Außenauftritt',
          marsstein: 'Enterprise-Paket',
          market: '25% bieten White-Label',
          rating: 3,
          details: 'White-Label bedeutet: Ihr Logo auf Dokumenten, eigene Farbschemata, Custom-Domain für Datenschutzerklärung, Ihr Firmenname statt Anbieter. Wichtig für Agenturen.'
        },
        {
          id: 'multi-language',
          criterion: 'Mehrsprachigkeit (EN/DE minimum)',
          why: 'Internationale Teams und Kunden',
          marsstein: 'Deutsch & Englisch verfügbar',
          market: '60% bieten EN/DE',
          rating: 3,
          details: 'Wichtig bei internationalen Teams. Achten Sie auf: UI in beiden Sprachen, Dokumente in beiden Sprachen, Support in beiden Sprachen, nicht nur maschinelle Übersetzung.'
        },
        {
          id: 'mobile-app',
          criterion: 'Mobile App (iOS/Android)',
          why: 'Compliance auch unterwegs prüfen',
          marsstein: 'Responsive Web-App (kein Download nötig)',
          market: '15% haben native Apps',
          rating: 2,
          details: 'Native Apps sind selten nötig. Eine gute responsive Web-App reicht meist. Wichtig ist: Push-Benachrichtigungen bei kritischen Vorfällen, Offline-Zugriff auf Dokumente.'
        }
      ]
    },
    {
      id: 'pricing',
      title: 'PREIS & VERTRAG Kriterien',
      subtitle: 'Vermeiden Sie versteckte Kosten',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      items: [
        {
          id: 'transparent-pricing',
          criterion: 'Transparente Preise (online einsehbar)',
          why: 'Keine "Preis auf Anfrage"-Spielchen',
          marsstein: 'Alle Preise öffentlich auf /preise',
          market: '50% verstecken Preise',
          rating: 5,
          details: 'Red Flag: "Preis auf Anfrage", "Individuelles Angebot", versteckte Setup-Gebühren. Good Sign: Alle Pakete mit Features und Preisen online, Kostenrechner verfügbar.'
        },
        {
          id: 'monthly-cancel',
          criterion: 'Monatlich kündbar (keine Mindestlaufzeit)',
          why: 'Flexibilität und Vertrauensbeweis',
          marsstein: 'Monatlich kündbar, keine Bindung',
          market: '40% haben Jahreslaufzeit',
          rating: 5,
          details: 'Viele Anbieter binden Sie 12-24 Monate. Das ist ein Anti-Pattern. Gute Software überzeugt durch Qualität, nicht durch Vertragsbindung. Achten Sie auf Kündigungsfristen (max. 1 Monat).'
        },
        {
          id: 'no-setup-fee',
          criterion: 'Keine Setup-Gebühren',
          why: 'Niedrige Einstiegshürde',
          marsstein: 'Keine Setup-Gebühr',
          market: '60% verlangen €500-€3.000 Setup',
          rating: 4,
          details: 'Setup-Gebühren von €1.000-€5.000 sind bei vielen Anbietern üblich. Das ist oft ungerechtfertigt, da moderne SaaS automatisiertes Onboarding hat. Akzeptabel: Onboarding-Session statt Gebühr.'
        },
        {
          id: 'free-trial',
          criterion: 'Kostenlose Testphase (min. 14 Tage)',
          why: 'Vor dem Kauf testen',
          marsstein: '14 Tage kostenlos, ohne Kreditkarte',
          market: '70% bieten Trial (aber oft mit Kreditkarte)',
          rating: 4,
          details: 'Echte kostenlose Testphase bedeutet: Keine Kreditkarte vorab, Zugriff auf alle Features (nicht eingeschränkt), mindestens 14 Tage, automatische Kündigung falls nicht verlängert.'
        }
      ]
    }
  ];

  const toggleItem = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const calculateScore = () => {
    const totalItems = categories.reduce((sum, cat) => sum + cat.items.length, 0);
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    return Math.round((checkedCount / totalItems) * 100);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="DSGVO-Software Auswahlkriterien: 15 essenzielle Features im Vergleich 2025"
        description="Worauf Sie bei DSGVO-Compliance-Software wirklich achten müssen: Kaufratgeber mit Checkliste, Kostenvergleich und Marktübersicht."
        canonical="/ratgeber/dsgvo-software-auswahlkriterien"
        keywords="DSGVO Software auswählen, Compliance Software Vergleich, Datenschutz Software, DSGVO Tool Auswahl, Compliance Checkliste"
        structuredData={structuredData}
      />
      <Header />

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-[#e24e1b] text-white">
              <Shield className="h-4 w-4 mr-2" />
              Kaufratgeber 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#232323] via-[#e24e1b] to-[#232323] bg-clip-text text-transparent">
              DSGVO-Software:<br />Worauf Sie wirklich achten müssen
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              15 essenzielle Auswahlkriterien für DSGVO-Compliance-Software.
              Nutzen Sie diese Checkliste für Ihre Anbieter-Recherche.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <Card className="border-2 border-[#e24e1b]/20 shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10">
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <FileText className="h-6 w-6 text-[#e24e1b]" />
                    Ihre persönliche Checkliste
                  </span>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-sm text-gray-600">Ihr Score</div>
                      <div className={`text-3xl font-bold ${getScoreColor(calculateScore())}`}>
                        {calculateScore()}%
                      </div>
                    </div>
                    <Button variant="outline" className="gap-2">
                      <Download className="h-4 w-4" />
                      Als PDF
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-700 mb-4">
                  Haken Sie ab, welche Kriterien Ihre aktuell evaluierte Software erfüllt.
                  Am Ende sehen Sie Ihren Gesamt-Score und einen Vergleich mit MARSSTEIN.
                </p>
                <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800 font-semibold flex items-center gap-2">
                    <AlertCircle className="h-5 w-5" />
                    Tipp: Fragen Sie jeden Anbieter explizit nach jedem Kriterium. "Ja" im Marketing ≠ "Ja" in der Realität.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {categories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + catIdx * 0.1 }}
              className="mb-12"
            >
              <Card className={`border-2 ${category.borderColor} shadow-lg`}>
                <CardHeader className={category.bgColor}>
                  <CardTitle className="flex items-center gap-3">
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                    <div>
                      <div className="text-2xl font-bold text-[#232323]">{category.title}</div>
                      <div className="text-sm text-gray-600 font-normal">{category.subtitle}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {category.items.map((item) => (
                      <div
                        key={item.id}
                        className={`border-2 rounded-lg p-6 transition-all ${
                          checkedItems[item.id]
                            ? 'border-[#39B37B] bg-green-50'
                            : 'border-gray-200 bg-white hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <button
                            onClick={() => toggleItem(item.id)}
                            className={`mt-1 flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                              checkedItems[item.id]
                                ? 'bg-[#39B37B] border-[#39B37B]'
                                : 'bg-white border-gray-300 hover:border-[#39B37B]'
                            }`}
                          >
                            {checkedItems[item.id] && (
                              <CheckCircle2 className="h-5 w-5 text-white" />
                            )}
                          </button>
                          <div className="flex-1">
                            <h4 className="text-xl font-bold text-[#232323] mb-2">
                              {item.criterion}
                            </h4>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-3 mb-4">
                              <p className="text-sm text-gray-700">
                                <span className="font-semibold">Warum wichtig:</span> {item.why}
                              </p>
                            </div>
                            <p className="text-gray-700 mb-4">{item.details}</p>
                            <div className="grid md:grid-cols-2 gap-4">
                              <div className="bg-[#e24e1b]/10 rounded-lg p-4 border-2 border-[#e24e1b]">
                                <div className="text-xs text-gray-600 mb-1 font-semibold">MARSSTEIN</div>
                                <div className="text-sm font-bold text-[#232323]">{item.marsstein}</div>
                              </div>
                              <div className="bg-gray-50 rounded-lg p-4 border-2 border-gray-200">
                                <div className="text-xs text-gray-600 mb-1 font-semibold">MARKT-DURCHSCHNITT</div>
                                <div className="text-sm text-gray-700">{item.market}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-16"
          >
            <Card className="border-2 border-[#e24e1b] shadow-xl">
              <CardHeader className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <TrendingUp className="h-6 w-6" />
                  Ihr Ergebnis & Nächste Schritte
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="text-6xl font-bold mb-2" style={{ color: getScoreColor(calculateScore()) === 'text-green-600' ? '#39B37B' : getScoreColor(calculateScore()) === 'text-orange-600' ? '#ea580c' : '#ef4444' }}>
                    {calculateScore()}%
                  </div>
                  <p className="text-xl text-gray-700">
                    {calculateScore() >= 80 && 'Exzellent! Diese Software erfüllt die meisten Kriterien.'}
                    {calculateScore() >= 60 && calculateScore() < 80 && 'Gut, aber es gibt noch Verbesserungspotenzial.'}
                    {calculateScore() < 60 && 'Achtung: Viele wichtige Features fehlen.'}
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 rounded-lg p-6 mb-8">
                  <h3 className="font-bold text-xl mb-4">MARSSTEIN erfüllt 95% aller Kriterien</h3>
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <CheckCircle2 className="h-12 w-12 mx-auto mb-2 text-[#39B37B]" />
                      <div className="font-bold">4/4 Must-Haves</div>
                      <div className="text-sm text-gray-600">Alle kritischen Features</div>
                    </div>
                    <div className="text-center">
                      <CheckCircle2 className="h-12 w-12 mx-auto mb-2 text-[#39B37B]" />
                      <div className="font-bold">4/4 Wichtig</div>
                      <div className="text-sm text-gray-600">DSB, KI, Monitoring</div>
                    </div>
                    <div className="text-center">
                      <CheckCircle2 className="h-12 w-12 mx-auto mb-2 text-[#39B37B]" />
                      <div className="font-bold">4/4 Preis</div>
                      <div className="text-sm text-gray-600">Transparent & fair</div>
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-700 mb-4">
                      Einziger Unterschied: Native Mobile App haben wir bewusst nicht (responsive Web-App ist ausreichend).
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Users className="h-6 w-6 text-[#e24e1b]" />
                      Für kleine Unternehmen
                    </h4>
                    <p className="text-sm text-gray-700 mb-4">
                      Starter-Paket: €69/Monat<br />
                      Alle DSGVO-Pflichtdokumente + KI-Support
                    </p>
                    <Button asChild className="w-full bg-gray-700 hover:bg-gray-800">
                      <Link to="/preise">Details ansehen</Link>
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-[#e24e1b] to-[#ea580c] text-white rounded-lg p-6">
                    <h4 className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Award className="h-6 w-6" />
                      Mit externem DSB
                    </h4>
                    <p className="text-sm text-white/90 mb-4">
                      Professional: €199/Monat<br />
                      DSB + €100k Haftung + 1.000 KI-Anfragen
                    </p>
                    <Button asChild className="w-full bg-white text-[#e24e1b] hover:bg-gray-100">
                      <Link to="/externer-datenschutzbeauftragter">DSB beauftragen</Link>
                    </Button>
                  </div>
                </div>

                <div className="text-center">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl px-8 py-6 text-lg"
                  >
                    <Link to="/contact">
                      <Shield className="h-5 w-5 mr-2" />
                      Kostenlose Demo buchen
                    </Link>
                  </Button>
                  <p className="text-sm text-gray-600 mt-3">
                    14 Tage kostenlos testen • Alle Features • Keine Kreditkarte nötig
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            <Card className="border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl">Häufig gestellte Fragen (FAQ)</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Was kostet DSGVO-Software im Durchschnitt?</h3>
                  <p className="text-gray-700">
                    Der Markt reicht von €50/Monat (Basis-Tools) bis €500+/Monat (Enterprise mit DSB).
                    Durchschnitt für KMU: €150-€300/Monat. Achten Sie auf versteckte Kosten (Setup, pro User, pro Website).
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Reicht eine DSGVO-Software oder brauche ich zusätzlich einen Berater?</h3>
                  <p className="text-gray-700">
                    Kommt auf die Software an. Moderne Hybrid-Lösungen (Software + DSB) sind meist ausreichend.
                    Externe Beratung zusätzlich nur bei: Erstimplementierung in sehr komplexen Fällen, Datenschutz-Vorfällen, Behörden-Audits.
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Wie lange dauert die Implementierung?</h3>
                  <p className="text-gray-700">
                    Gute SaaS-Lösungen: 1-3 Tage für Basis-Setup. Vollständige Compliance: 2-6 Wochen mit allen Dokumenten und Prozessen.
                    Wenn ein Anbieter 3-6 Monate Setup-Zeit verspricht, ist das ein Red Flag (zu komplex).
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Kann ich mehrere Lösungen kombinieren?</h3>
                  <p className="text-gray-700">
                    Nicht empfohlen. Mehrere Tools führen zu: Doppelter Arbeit, Inkonsistenzen, höheren Kosten.
                    Besser: Eine All-in-One-Lösung mit allen Features. Falls Sie spezialisierte Tools haben (z.B. nur Cookie-Banner),
                    prüfen Sie ob Ihre DSGVO-Software das integriert.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DsgvoSoftwareAuswahl;
