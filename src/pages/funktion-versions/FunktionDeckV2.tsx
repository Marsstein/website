import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Building2, ArrowRight, ArrowLeft, Zap, Bot, Scale, FileText, Clock, Bell, CheckCircle2 } from 'lucide-react';

const FunktionDeckV2: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col gap-6">
        <header>
          <p className="font-semibold text-[#e24e1b]">Produkt</p>
          <h1 className="text-4xl font-bold text-[#232323]">Marsstein für DSBs</h1>
        </header>

        <Card className="bg-[#F5F6F8] border-0 shadow-none">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-[#474747]">All-in-One DSGVO-Compliance-Plattform</p>
              <p className="text-3xl font-bold text-[#232323]">Für interne DSBs & externe Datenschutzbeauftragte</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 text-[#39B37B]">
                <CheckCircle2 className="h-8 w-8" />
                <span className="text-2xl font-semibold">Audit-Ready</span>
              </div>
              <p className="text-md text-[#474747] mt-1">
                Höchste Qualität durch Lawyer-in-the-Loop
              </p>
            </div>
          </CardContent>
        </Card>

        <main className="flex-grow grid grid-cols-[1fr_auto_1fr] gap-6 items-center">
          <Card className="h-full bg-[#F5F6F8] border-0 shadow-none flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Building2 className="h-8 w-8 text-[#e24e1b]" />
                <div>
                  <CardTitle className="text-2xl font-bold text-[#232323]">Interne DSBs</CardTitle>
                  <p className="text-lg font-semibold text-[#e24e1b]">Unternehmen mit eigenem DSB</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-around gap-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                  <p className="text-md text-[#474747]">Automatisches Verarbeitungsverzeichnis (VVT)</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                  <p className="text-md text-[#474747]">DSFA mit Risiko-Scoring</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                  <p className="text-md text-[#474747]">Betroffenenanfragen (DSAR)</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                  <p className="text-md text-[#474747]">AVV- & TOM-Generator</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-[#e24e1b]">
                <p className="text-sm font-semibold text-[#232323]">Vom Einzelkämpfer zum unterstützten Profi</p>
                <p className="text-xs text-[#474747] mt-1">KI-gestützt arbeiten, bei Bedarf Rechtsexperten hinzuziehen</p>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col items-center justify-center h-full text-center gap-4">
            <Card className="bg-[#e24e1b]/10 border-2 border-[#e24e1b]/30 shadow-none p-4">
              <div className="flex flex-col items-center gap-2">
                <Bot className="h-10 w-10 text-[#e24e1b]" />
                <p className="text-sm font-bold text-[#232323]">Marsstein AI</p>
              </div>
              <div className="mt-3 space-y-2 text-left">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#474747]" />
                  <p className="text-xs text-[#474747]">Unternehmensdaten</p>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-[#474747]" />
                  <p className="text-xs text-[#474747]">Gesetzestexte & Urteile</p>
                </div>
                <div className="flex items-center gap-2">
                  <Bell className="h-4 w-4 text-[#474747]" />
                  <p className="text-xs text-[#474747]">Fristenmanagement</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-[#474747]" />
                  <p className="text-xs text-[#474747]">Auto-Updates</p>
                </div>
              </div>
            </Card>

            <div className="flex items-center gap-2">
              <ArrowLeft className="h-8 w-8 text-[#474747]" />
              <div className="p-3 bg-[#39B37B]/10 rounded-full border border-[#39B37B]/30">
                <Zap className="h-6 w-6 text-[#39B37B]" />
              </div>
              <ArrowRight className="h-8 w-8 text-[#474747]" />
            </div>
            <p className="text-xs text-[#e24e1b] font-semibold">Lawyer-in-the-Loop</p>
            <p className="text-xs text-[#474747]">Optional: Expertenvalidierung</p>
          </div>

          <Card className="h-full bg-[#F5F6F8] border-0 shadow-none flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-[#474747]" />
                <div>
                  <CardTitle className="text-2xl font-bold text-[#232323]">Externe DSBs</CardTitle>
                  <p className="text-lg font-semibold text-[#474747]">Berater mit mehreren Mandanten</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-around gap-3">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                  <p className="text-md text-[#474747]">Multi-Client Dashboard</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                  <p className="text-md text-[#474747]">Mandanten-übergreifende Auswertungen</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                  <p className="text-md text-[#474747]">White-Label-Reporting</p>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />
                  <p className="text-md text-[#474747]">Effizientes Zeitmanagement</p>
                </div>
              </div>
              <div className="bg-white rounded-lg p-4 border-l-4 border-[#474747]">
                <p className="text-sm font-semibold text-[#232323]">Skalieren durch Automatisierung</p>
                <p className="text-xs text-[#474747] mt-1">Routine-Arbeit läuft automatisch – Sie konzentrieren sich auf Ihre Mandanten</p>
              </div>
            </CardContent>
          </Card>
        </main>

        <div className="grid grid-cols-4 gap-4">
          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-[#e24e1b]">2-5 Min</p>
              <p className="text-sm text-[#474747]">Dokumentengenerierung</p>
            </CardContent>
          </Card>
          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-[#e24e1b]">Echtzeit</p>
              <p className="text-sm text-[#474747]">Gesetzes-Updates</p>
            </CardContent>
          </Card>
          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-[#e24e1b]">Auto</p>
              <p className="text-sm text-[#474747]">Fristenerinnerungen</p>
            </CardContent>
          </Card>
          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardContent className="p-4 text-center">
              <p className="text-3xl font-bold text-[#e24e1b]">99,9%</p>
              <p className="text-sm text-[#474747]">Genauigkeit mit LITL</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV2;
