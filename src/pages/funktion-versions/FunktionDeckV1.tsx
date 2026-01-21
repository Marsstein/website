import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ArrowDown, Bot, Scale, FileText, Clock, Bell, CheckCircle2, Building2, Database, RefreshCw, FileCheck } from 'lucide-react';

const FunktionDeckV1: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col gap-5">
        <header>
          <p className="font-semibold text-[#e24e1b]">Produkt</p>
          <h1 className="text-4xl font-bold text-[#232323]">So funktioniert Marsstein</h1>
        </header>

        <Card className="bg-[#F5F6F8] border-0 shadow-none">
          <CardContent className="p-5 flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-[#474747]">Automatisierte DSGVO-Compliance</p>
              <p className="text-2xl font-bold text-[#232323]">Dokumentation automatisiert. Fristen im Blick. Immer audit-ready.</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 text-[#39B37B]">
                <CheckCircle2 className="h-7 w-7" />
                <span className="text-xl font-semibold">3 Minuten Setup</span>
              </div>
              <p className="text-base text-[#474747] mt-1">
                Ihre Expertise bleibt – die Routine verschwindet
              </p>
            </div>
          </CardContent>
        </Card>

        <main className="flex-grow grid grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 items-stretch">
          <Card className="bg-gradient-to-br from-[#e24e1b]/10 to-[#e24e1b]/5 border-0 shadow-none relative">
            <div className="absolute -top-3 left-4 bg-[#e24e1b] text-white text-xs font-bold px-3 py-1 rounded">
              SCHRITT 1
            </div>
            <CardHeader className="pb-2 pt-6 px-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#e24e1b] rounded-lg">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#232323]">Onboarding</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-5 pb-5 space-y-3">
              <p className="text-sm text-[#474747]">
                Unternehmensdaten einmal erfassen – der Rest wird automatisch vorbefüllt
              </p>
              <div className="bg-white/70 rounded-lg p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                  <span className="text-xs text-[#474747]">Verarbeitungsprozesse erkannt</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                  <span className="text-xs text-[#474747]">IT-Systeme identifiziert</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                  <span className="text-xs text-[#474747]">Branchenspezifisch vorbefüllt</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center">
            <ArrowRight className="h-8 w-8 text-[#e24e1b]" />
          </div>

          <Card className="bg-gradient-to-br from-[#474747]/10 to-[#474747]/5 border-0 shadow-none relative">
            <div className="absolute -top-3 left-4 bg-[#474747] text-white text-xs font-bold px-3 py-1 rounded">
              SCHRITT 2
            </div>
            <CardHeader className="pb-2 pt-6 px-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#474747] rounded-lg">
                  <Bot className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#232323]">KI-Generierung</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-5 pb-5 space-y-3">
              <p className="text-sm text-[#474747]">
                Experten-Vorlagen werden automatisch befüllt – sofort einsatzbereit
              </p>
              <div className="bg-white/70 rounded-lg p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-[#474747]" />
                  <span className="text-xs text-[#474747]">Unternehmensdaten</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="h-4 w-4 text-[#474747]" />
                  <span className="text-xs text-[#474747]">Gesetzestexte & Urteile</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-[#474747]" />
                  <span className="text-xs text-[#474747]">Best Practices & DSK-Leitlinien</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center">
            <ArrowRight className="h-8 w-8 text-[#474747]" />
          </div>

          <Card className="bg-gradient-to-br from-[#39B37B]/10 to-[#39B37B]/5 border-2 border-[#39B37B]/30 shadow-none relative">
            <div className="absolute -top-3 left-4 bg-[#39B37B] text-white text-xs font-bold px-3 py-1 rounded">
              ERGEBNIS
            </div>
            <CardHeader className="pb-2 pt-6 px-5">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#39B37B] rounded-lg">
                  <FileCheck className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-[#232323]">Audit-Ready</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="px-5 pb-5 space-y-3">
              <p className="text-sm text-[#474747]">
                Vollständige Dokumentation – automatisch aktuell gehalten
              </p>
              <div className="bg-white/70 rounded-lg p-3 space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                  <span className="text-xs text-[#474747]">VVT (Art. 30 DSGVO)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                  <span className="text-xs text-[#474747]">TOMs (Art. 32 DSGVO)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                  <span className="text-xs text-[#474747]">AVVs, DSE, Löschkonzept</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>

        <div className="grid grid-cols-4 gap-4">
          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 bg-[#e24e1b]/10 rounded-lg">
                <Bot className="h-6 w-6 text-[#e24e1b]" />
              </div>
              <div>
                <p className="text-lg font-bold text-[#232323]">Geführte Erstellung</p>
                <p className="text-sm text-[#474747]">Schritt für Schritt, kein Vorwissen nötig</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 bg-[#e24e1b]/10 rounded-lg">
                <Bell className="h-6 w-6 text-[#e24e1b]" />
              </div>
              <div>
                <p className="text-lg font-bold text-[#232323]">Fristenmanagement</p>
                <p className="text-sm text-[#474747]">Löschfristen, AVVs, Audit-Termine</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 bg-[#e24e1b]/10 rounded-lg">
                <RefreshCw className="h-6 w-6 text-[#e24e1b]" />
              </div>
              <div>
                <p className="text-lg font-bold text-[#232323]">Auto-Updates</p>
                <p className="text-sm text-[#474747]">Gesetzesänderungen in klarer Sprache</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardContent className="p-4 flex items-center gap-4">
              <div className="p-2 bg-[#e24e1b]/10 rounded-lg">
                <FileCheck className="h-6 w-6 text-[#e24e1b]" />
              </div>
              <div>
                <p className="text-lg font-bold text-[#232323]">Export mit 1 Klick</p>
                <p className="text-sm text-[#474747]">Behörde kündigt sich an? Kein Problem.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV1;
