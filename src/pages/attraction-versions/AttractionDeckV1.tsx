import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Car, Sparkles, Users, CheckCircle2, Scale, MessageSquare, Truck, FileCheck, Briefcase } from 'lucide-react';

const AttractionDeckV1: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col gap-5">
        <header>
          <p className="font-semibold text-[#e24e1b]">Traction</p>
          <h1 className="text-4xl font-bold text-[#232323]">Unsere Kunden & Erfolgsgeschichten</h1>
        </header>

        <Card className="bg-[#F5F6F8] border-0 shadow-none">
          <CardContent className="p-5 flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-[#474747]">Validiertes Geschäftsmodell</p>
              <p className="text-2xl font-bold text-[#232323]">Pilotkunden, KMUs, Enterprise-Pipeline & DSB-Netzwerk</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 text-[#39B37B]">
                <CheckCircle2 className="h-7 w-7" />
                <span className="text-xl font-semibold">Product-Market Fit</span>
              </div>
              <p className="text-base text-[#474747] mt-1">
                Lawyer-in-the-Loop Konzept erfolgreich validiert
              </p>
            </div>
          </CardContent>
        </Card>

        <main className="flex-grow grid grid-cols-3 gap-5">
          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardHeader className="pb-2 pt-5 px-5">
              <div className="flex items-center gap-3">
                <Building2 className="h-7 w-7 text-[#e24e1b]" />
                <CardTitle className="text-xl font-bold text-[#232323]">Behördenkonflikt gelöst*</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 px-5 pb-5">
              <div className="flex items-start gap-2">
                <Scale className="h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#474747]">
                  Konflikt mit Aufsichtsbehörde erfolgreich gelöst
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#474747]">
                  <span className="font-semibold">Lawyer-in-the-Loop:</span> Datenschutzanwalt hinzugezogen
                </p>
              </div>
              <p className="text-xs text-gray-400">*Anonymisiert</p>
            </CardContent>
          </Card>

          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardHeader className="pb-2 pt-5 px-5">
              <div className="flex items-center gap-3">
                <Car className="h-7 w-7 text-[#474747]" />
                <CardTitle className="text-xl font-bold text-[#232323]">Automotive-Zulieferer*</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 px-5 pb-5">
              <div className="flex items-start gap-2">
                <Users className="h-5 w-5 text-[#474747] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#474747]">
                  DSB mit Branchenexpertise aus der Automotive-Industrie
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#474747]">
                  SaaS + Lawyer-in-the-Loop erfolgreich eingesetzt
                </p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-400">*Anonymisiert</p>
                <div className="flex gap-3">
                  <span className="text-sm font-semibold text-[#e24e1b]">~3.000€ p.a.</span>
                  <span className="text-sm font-semibold text-[#39B37B]">+6 Pipeline</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardHeader className="pb-2 pt-5 px-5">
              <div className="flex items-center gap-3">
                <Truck className="h-7 w-7 text-[#474747]" />
                <CardTitle className="text-xl font-bold text-[#232323]">Logistik-Konzern*</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 px-5 pb-5">
              <div className="flex items-start gap-2">
                <Building2 className="h-5 w-5 text-[#474747] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#474747]">
                  Internationaler Logistik-Dienstleister mit 20+ Lagerhäusern weltweit
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#474747]">
                  DSGVO-Compliance für EU-Geschäft
                </p>
              </div>
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-400">*Anonymisiert</p>
                <div className="flex gap-3">
                  <span className="text-sm font-semibold text-[#e24e1b]">~2.150€ p.a.</span>
                  <span className="text-sm font-semibold text-[#39B37B]">+2 Pipeline</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardHeader className="pb-2 pt-5 px-5">
              <div className="flex items-center gap-3">
                <Sparkles className="h-7 w-7 text-[#e24e1b]" />
                <CardTitle className="text-xl font-bold text-[#232323]">KMU-Segment</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 px-5 pb-5">
              <div className="flex gap-3">
                <div className="flex-1 bg-white rounded-lg p-3 border-l-4 border-[#e24e1b]">
                  <p className="text-sm font-semibold text-[#232323]">SlideCoach AI</p>
                  <p className="text-xs text-[#e24e1b]">~350€ p.a.</p>
                </div>
                <div className="flex-1 bg-white rounded-lg p-3 border-l-4 border-[#e24e1b]">
                  <p className="text-sm font-semibold text-[#232323]">Start2Fix</p>
                  <p className="text-xs text-[#e24e1b]">~350€ p.a.</p>
                </div>
              </div>
              <p className="text-sm text-[#474747]">
                Diese zwei KI-Startups beweisen: Mit dem richtigen Tool brauchen kleine Unternehmen kein teures Consulting. Unsere Plattform führt sie Schritt für Schritt zur Compliance – automatisiert und verständlich.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardHeader className="pb-2 pt-5 px-5">
              <div className="flex items-center gap-3">
                <Briefcase className="h-7 w-7 text-[#e24e1b]" />
                <CardTitle className="text-xl font-bold text-[#232323]">Enterprise-Pipeline</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 px-5 pb-5">
              <div className="flex items-start gap-2">
                <FileCheck className="h-5 w-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#474747]">
                  Öffentliche Ausschreibung bei chinesischem Automobilhersteller
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-[#39B37B] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#474747]">
                  <span className="font-semibold">Engere Auswahl</span> – Auftragsvolumen im mittleren 5-stelligen Bereich
                </p>
              </div>
              <div className="flex items-start gap-2">
                <Users className="h-5 w-5 text-[#474747] mt-0.5 flex-shrink-0" />
                <p className="text-sm text-[#474747]">
                  Mit Anwalt im Team – Expertise für öffentliche Ausschreibungen
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardHeader className="pb-2 pt-5 px-5">
              <div className="flex items-center gap-3">
                <MessageSquare className="h-7 w-7 text-[#474747]" />
                <CardTitle className="text-xl font-bold text-[#232323]">DSB-Netzwerk</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 px-5 pb-5">
              <div className="flex items-center gap-4">
                <div className="text-center">
                  <p className="text-4xl font-bold text-[#e24e1b]">~200</p>
                  <p className="text-xs text-[#474747]">Kontaktiert</p>
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                    <p className="text-sm text-[#474747]">Hohe Kooperationsbereitschaft</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                    <p className="text-sm text-[#474747]">Dauerhafter Kontakt</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                    <p className="text-sm text-[#474747]">Produkt-Feedback & Pain Points</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default AttractionDeckV1;
