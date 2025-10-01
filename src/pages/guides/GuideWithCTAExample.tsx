import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { GuideEndCTA } from '@/components/GuideEndCTA';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, BookOpen, Clock, Users } from 'lucide-react';

const GuideWithCTAExample: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="DSGVO Guide Beispiel mit CTAs"
        description="Beispiel-Integration von Guide-End-CTAs"
        canonical="/examples/guide-with-cta"
      />
      <Header />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Guide Header */}
              <div className="mb-12">
                <Badge className="mb-4 bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20">
                  <Shield className="h-3.5 w-3.5 mr-2" />
                  DSGVO Grundlagen
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-[#232323] mb-6">
                  DSGVO in 10 Minuten verstehen
                </h1>
                <div className="flex items-center gap-6 text-sm text-[#474747]">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    10 Min Lesezeit
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Anfänger
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    12.453 Leser
                  </div>
                </div>
              </div>

              {/* Guide Content */}
              <Card className="border-2 border-gray-100 mb-8">
                <CardContent className="p-8">
                  <div className="prose prose-lg max-w-none">
                    <h2 className="text-2xl font-bold text-[#232323] mb-4">
                      Was ist die DSGVO?
                    </h2>
                    <p className="text-[#474747] leading-relaxed mb-6">
                      Die Datenschutz-Grundverordnung (DSGVO) ist seit dem 25. Mai 2018 in allen
                      EU-Mitgliedsstaaten unmittelbar geltendes Recht. Sie regelt die Verarbeitung
                      personenbezogener Daten durch private Unternehmen und öffentliche Stellen.
                    </p>

                    <h3 className="text-xl font-bold text-[#232323] mb-3 mt-8">
                      Wichtigste Grundsätze
                    </h3>
                    <ul className="space-y-2 mb-6">
                      <li className="text-[#474747]">
                        <strong>Rechtmäßigkeit, Verarbeitung nach Treu und Glauben, Transparenz</strong> -
                        Datenverarbeitung muss legal, fair und transparent sein
                      </li>
                      <li className="text-[#474747]">
                        <strong>Zweckbindung</strong> - Daten nur für festgelegte Zwecke erheben
                      </li>
                      <li className="text-[#474747]">
                        <strong>Datenminimierung</strong> - Nur notwendige Daten erheben
                      </li>
                      <li className="text-[#474747]">
                        <strong>Richtigkeit</strong> - Daten müssen aktuell und korrekt sein
                      </li>
                      <li className="text-[#474747]">
                        <strong>Speicherbegrenzung</strong> - Daten nicht länger als nötig aufbewahren
                      </li>
                    </ul>

                    <div className="bg-[#e24e1b]/10 border-l-4 border-[#e24e1b] p-6 rounded-r-lg mb-6">
                      <h4 className="text-lg font-bold text-[#232323] mb-2">
                        💡 Praxis-Tipp
                      </h4>
                      <p className="text-[#474747]">
                        Dokumentieren Sie alle Datenverarbeitungsvorgänge in Ihrem Verarbeitungsverzeichnis.
                        Dies ist nicht nur Pflicht, sondern hilft auch beim systematischen Aufbau Ihrer
                        Compliance-Struktur.
                      </p>
                    </div>

                    <h3 className="text-xl font-bold text-[#232323] mb-3 mt-8">
                      Pflichten für Unternehmen
                    </h3>
                    <p className="text-[#474747] leading-relaxed mb-4">
                      Jedes Unternehmen, das personenbezogene Daten verarbeitet, muss:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 mb-6 text-[#474747]">
                      <li>Ein Verarbeitungsverzeichnis führen (Art. 30 DSGVO)</li>
                      <li>Technische und organisatorische Maßnahmen (TOMs) implementieren</li>
                      <li>Eine Datenschutzerklärung bereitstellen</li>
                      <li>Betroffenenrechte gewährleisten</li>
                      <li>Datenschutzvorfälle melden (72h-Frist)</li>
                    </ol>

                    <h3 className="text-xl font-bold text-[#232323] mb-3 mt-8">
                      Sanktionen bei Verstößen
                    </h3>
                    <p className="text-[#474747] leading-relaxed mb-6">
                      Bei Verstößen gegen die DSGVO drohen Bußgelder von bis zu 20 Millionen Euro oder
                      4% des weltweiten Jahresumsatzes - je nachdem, welcher Betrag höher ist.
                      Zusätzlich können zivilrechtliche Schadensersatzansprüche geltend gemacht werden.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* VARIANT 1: Default Full-Width CTA */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-[#232323] mb-4">
                  Beispiel 1: Standard Full-Width CTA
                </h2>
                <GuideEndCTA type="dsgvo" />
              </div>

              {/* VARIANT 2: Compact CTA */}
              <div className="mb-16">
                <h2 className="text-2xl font-bold text-[#232323] mb-4">
                  Beispiel 2: Compact CTA (zwischen Abschnitten)
                </h2>
                <GuideEndCTA type="dsgvo" variant="compact" />
              </div>

              {/* More Guide Content */}
              <Card className="border-2 border-gray-100 mb-8">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#232323] mb-4">
                    Nächste Schritte
                  </h3>
                  <p className="text-[#474747] leading-relaxed">
                    Nachdem Sie nun die Grundlagen der DSGVO verstanden haben, sollten Sie mit der
                    praktischen Umsetzung beginnen. Starten Sie mit einer Bestandsaufnahme Ihrer
                    aktuellen Datenverarbeitungen und erstellen Sie ein Verarbeitungsverzeichnis.
                  </p>
                </CardContent>
              </Card>

              {/* OTHER GUIDE TYPES EXAMPLES */}
              <div className="space-y-16 mt-20">
                <div>
                  <h2 className="text-2xl font-bold text-[#232323] mb-4">
                    Beispiel 3: ISO 27001 Guide CTA
                  </h2>
                  <GuideEndCTA type="iso27001" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#232323] mb-4">
                    Beispiel 4: EU AI Act Guide CTA
                  </h2>
                  <GuideEndCTA type="euaiact" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#232323] mb-4">
                    Beispiel 5: Branchen-spezifischer CTA
                  </h2>
                  <GuideEndCTA type="branche" variant="compact" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#232323] mb-4">
                    Beispiel 6: Krisenmanagement CTA
                  </h2>
                  <GuideEndCTA type="crisis" />
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-[#232323] mb-4">
                    Beispiel 7: KI-Datenschutz CTA
                  </h2>
                  <GuideEndCTA type="ki" variant="compact" />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                <h2 className="text-xl font-bold text-[#232323] mb-4">
                  Beispiel 8: Sidebar CTA
                </h2>
                <GuideEndCTA type="dsgvo" variant="sidebar" />

                <Card className="border-2 border-gray-100">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-[#232323] mb-4">
                      Inhaltsverzeichnis
                    </h3>
                    <ul className="space-y-2 text-sm">
                      <li className="text-[#474747]">Was ist die DSGVO?</li>
                      <li className="text-[#474747]">Wichtigste Grundsätze</li>
                      <li className="text-[#474747]">Pflichten für Unternehmen</li>
                      <li className="text-[#474747]">Sanktionen bei Verstößen</li>
                      <li className="text-[#474747]">Nächste Schritte</li>
                    </ul>
                  </CardContent>
                </Card>

                <h2 className="text-xl font-bold text-[#232323] mb-4 mt-8">
                  Andere Varianten:
                </h2>

                <GuideEndCTA type="iso27001" variant="sidebar" />
                <GuideEndCTA type="euaiact" variant="sidebar" />
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GuideWithCTAExample;
