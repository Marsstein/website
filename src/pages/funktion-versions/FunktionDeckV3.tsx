import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, Scale, Bell, CheckCircle2, Database, RefreshCw, FileCheck, Zap, ArrowDown, ArrowRight, ArrowLeft } from 'lucide-react';

const FunktionDeckV3: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col">
        <header className="text-center mb-4">
          <p className="font-semibold text-[#e24e1b]">Produkt</p>
          <h1 className="text-4xl font-bold text-[#232323]">Der KI-Kopilot für Datenschutzbeauftragte</h1>
        </header>

        {/* Vertical Flow Design with Flywheel */}
        <div className="flex-grow flex flex-col gap-3">
          {/* Top Row: Both ICPs with Flywheel Connection */}
          <div className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center">
            {/* Interne DSBs */}
            <Card className="bg-gradient-to-r from-[#e24e1b]/10 to-[#e24e1b]/5 border-0 shadow-none">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#e24e1b] rounded-xl">
                    <Building2 className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-lg font-bold text-[#232323]">Interne DSBs</p>
                    <p className="text-xs text-[#e24e1b]">Unternehmen mit eigenem DSB</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[#474747]">VVT, DSFA, DSAR</p>
                    <p className="text-xs text-[#474747]">AVV & TOM Generator</p>
                  </div>
                </div>
                <div className="mt-2 p-2 bg-white/70 rounded-lg border-l-4 border-[#e24e1b]">
                  <p className="text-xs font-semibold text-[#232323]">Vom Einzelkämpfer zum unterstützten Profi</p>
                </div>
              </CardContent>
            </Card>

            {/* Flywheel Connection */}
            <div className="flex flex-col items-center gap-1 px-4">
              <div className="flex items-center gap-3">
                <div className="flex flex-col items-center">
                  <p className="text-[9px] text-gray-500">Bei Bedarf</p>
                  <ArrowRight className="h-5 w-5 text-[#e24e1b]" />
                </div>
                <div className="p-2 bg-[#39B37B]/10 rounded-full border-2 border-[#39B37B]/30">
                  <Zap className="h-5 w-5 text-[#39B37B]" />
                </div>
                <div className="flex flex-col items-center">
                  <p className="text-[9px] text-gray-500">Neue Mandanten</p>
                  <ArrowLeft className="h-5 w-5 text-[#474747]" />
                </div>
              </div>
              <p className="text-xs font-semibold text-[#39B37B]">Lawyer-in-the-Loop</p>
            </div>

            {/* Externe DSBs */}
            <Card className="bg-gradient-to-r from-[#474747]/10 to-[#474747]/5 border-0 shadow-none">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[#474747] rounded-xl">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-grow">
                    <p className="text-lg font-bold text-[#232323]">Externe DSBs</p>
                    <p className="text-xs text-[#474747]">Berater mit Mandanten</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-[#474747]">Multi-Client Dashboard</p>
                    <p className="text-xs text-[#474747]">White-Label Reports</p>
                  </div>
                </div>
                <div className="mt-2 p-2 bg-white/70 rounded-lg border-l-4 border-[#474747]">
                  <p className="text-xs font-semibold text-[#232323]">Skalieren durch Automatisierung</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Arrows Down */}
          <div className="flex justify-center">
            <ArrowDown className="h-5 w-5 text-[#474747]" />
          </div>

          {/* Center: Marsstein AI Platform */}
          <Card className="bg-[#232323] border-0 shadow-lg">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#e24e1b] rounded-xl">
                    <Bot className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">Marsstein AI</p>
                    <p className="text-sm text-gray-400">KI-Kopilot für DSGVO-Compliance</p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-[#e24e1b]" />
                    <span className="text-sm text-white">Unternehmensdaten</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Scale className="h-5 w-5 text-[#e24e1b]" />
                    <span className="text-sm text-white">Rechtswissen</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell className="h-5 w-5 text-[#e24e1b]" />
                    <span className="text-sm text-white">Fristenmanagement</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5 text-[#e24e1b]" />
                    <span className="text-sm text-white">Auto-Updates</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Arrow Down */}
          <div className="flex justify-center">
            <ArrowDown className="h-5 w-5 text-[#39B37B]" />
          </div>

          {/* Bottom: Output */}
          <Card className="bg-gradient-to-r from-[#39B37B]/15 to-[#39B37B]/5 border-2 border-[#39B37B]/30 shadow-none">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-[#39B37B] rounded-xl">
                    <FileCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-[#232323]">Audit-Ready Output</p>
                    <p className="text-sm text-[#474747]">VVT, TOMs, AVVs, DSE, Löschkonzept – in Minuten generiert</p>
                  </div>
                </div>

                <div className="flex gap-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#e24e1b]">2-5 Min</p>
                    <p className="text-xs text-[#474747]">pro Dokument</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#e24e1b]">80%</p>
                    <p className="text-xs text-[#474747]">weniger Aufwand</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-[#e24e1b]">99,9%</p>
                    <p className="text-xs text-[#474747]">Genauigkeit</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV3;
