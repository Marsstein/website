import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, Scale, Bell, CheckCircle2, Database, RefreshCw, FileCheck, Zap, ArrowRight, ArrowLeft } from 'lucide-react';

const FunktionDeckV4: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col">
        <header className="text-center mb-6">
          <p className="font-semibold text-[#e24e1b]">Produkt</p>
          <h1 className="text-4xl font-bold text-[#232323]">Der KI-Kopilot für Datenschutzbeauftragte</h1>
        </header>

        {/* Hub & Spoke Design with Flywheel */}
        <div className="flex-grow grid grid-cols-[1fr_auto_1fr] gap-6 items-center">
          {/* Left: Interne DSBs */}
          <Card className="h-full bg-gradient-to-br from-[#e24e1b]/10 to-transparent border-0 shadow-none flex flex-col">
            <CardContent className="p-5 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-[#e24e1b] rounded-lg">
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#232323]">Interne DSBs</p>
                  <p className="text-xs text-[#e24e1b]">Unternehmen mit eigenem DSB</p>
                </div>
              </div>
              <div className="space-y-2 mb-4 flex-grow">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                  <span className="text-sm text-[#474747]">VVT, DSFA, DSAR</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                  <span className="text-sm text-[#474747]">AVV & TOM Generator</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                  <span className="text-sm text-[#474747]">Expertenvalidierung</span>
                </div>
              </div>
              <div className="p-3 bg-white rounded-lg border-l-4 border-[#e24e1b]">
                <p className="text-xs font-semibold text-[#232323]">Vom Einzelkämpfer zum Profi</p>
              </div>
            </CardContent>
          </Card>

          {/* Center: Marsstein AI Hub + Flywheel Connection */}
          <div className="flex flex-col items-center gap-4">
            {/* Marsstein AI */}
            <Card className="w-full bg-gradient-to-b from-[#232323] to-[#1a1a1a] border-0 shadow-xl">
              <CardContent className="p-5">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="p-3 bg-[#e24e1b] rounded-xl shadow-lg">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">Marsstein AI</p>
                    <p className="text-xs text-gray-400">KI-Kopilot für DSGVO-Compliance</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <div className="bg-white/10 rounded-lg p-2.5 text-center">
                    <Database className="h-4 w-4 text-[#e24e1b] mx-auto mb-1" />
                    <p className="text-[10px] text-white leading-tight">Unternehmens-daten</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2.5 text-center">
                    <Scale className="h-4 w-4 text-[#e24e1b] mx-auto mb-1" />
                    <p className="text-[10px] text-white leading-tight">Rechts-wissen</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2.5 text-center">
                    <Bell className="h-4 w-4 text-[#e24e1b] mx-auto mb-1" />
                    <p className="text-[10px] text-white leading-tight">Fristen-management</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2.5 text-center">
                    <RefreshCw className="h-4 w-4 text-[#e24e1b] mx-auto mb-1" />
                    <p className="text-[10px] text-white leading-tight">Auto-Updates</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Flywheel Connection - Like TamDeck */}
            <div className="flex flex-col items-center gap-2 py-2">
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  <p className="text-[10px] text-gray-500 mb-1">Bei Bedarf</p>
                  <ArrowRight className="h-6 w-6 text-[#e24e1b]" />
                </div>
                <div className="p-3 bg-[#39B37B]/10 rounded-full border-2 border-[#39B37B]/30">
                  <Zap className="h-6 w-6 text-[#39B37B]" />
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[10px] text-gray-500 mb-1">Neue Mandanten</p>
                  <ArrowLeft className="h-6 w-6 text-[#474747]" />
                </div>
              </div>
              <p className="text-xs font-semibold text-[#39B37B]">Lawyer-in-the-Loop</p>
              <p className="text-[10px] text-[#474747]">Externe DSBs validieren – Interne DSBs werden Kunden</p>
            </div>

            {/* Output Card */}
            <Card className="w-full bg-gradient-to-r from-[#39B37B]/15 to-[#39B37B]/5 border-2 border-[#39B37B]/30">
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#39B37B] rounded-lg">
                    <FileCheck className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#232323]">Audit-Ready Output</p>
                    <p className="text-xs text-[#474747]">VVT, TOMs, AVVs, DSE</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-lg font-bold text-[#e24e1b]">2-5 Min</p>
                    <p className="text-[10px] text-[#474747]">pro Dokument</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-[#e24e1b]">80%</p>
                    <p className="text-[10px] text-[#474747]">weniger Aufwand</p>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-[#e24e1b]">99,9%</p>
                    <p className="text-[10px] text-[#474747]">Genauigkeit</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right: Externe DSBs */}
          <Card className="h-full bg-gradient-to-bl from-[#474747]/10 to-transparent border-0 shadow-none flex flex-col">
            <CardContent className="p-5 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 bg-[#474747] rounded-lg">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-lg font-bold text-[#232323]">Externe DSBs</p>
                  <p className="text-xs text-[#474747]">Generiert neue Mandanten durch das Netzwerk</p>
                </div>
              </div>
              <div className="space-y-2 mb-4 flex-grow">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                  <span className="text-sm text-[#474747]">Multi-Client Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                  <span className="text-sm text-[#474747]">White-Label Reports</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#39B37B]" />
                  <span className="text-sm text-[#474747]">Mandantenvermittlung</span>
                </div>
              </div>
              <div className="p-3 bg-white rounded-lg border-l-4 border-[#474747]">
                <p className="text-xs font-semibold text-[#232323]">Skalieren durch Automatisierung</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV4;
