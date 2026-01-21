import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, Scale, Bell, CheckCircle2, Database, RefreshCw, FileCheck, Zap, ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react';

const FunktionDeckV5: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col">
        <header className="text-center mb-4">
          <p className="font-semibold text-[#e24e1b]">Produkt</p>
          <h1 className="text-4xl font-bold text-[#232323]">Der KI-Kopilot für Datenschutzbeauftragte</h1>
        </header>

        {/* Pipeline/Conveyor Belt Design with Flywheel */}
        <div className="flex-grow flex flex-col justify-center gap-5">

          {/* Main Pipeline */}
          <div className="relative">
            {/* Pipeline Background */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-28 bg-gradient-to-r from-[#e24e1b]/5 via-[#232323]/5 to-[#39B37B]/5 rounded-full -z-10"></div>

            <div className="grid grid-cols-[1.2fr_0.2fr_1.6fr_0.2fr_1.2fr] items-center">
              {/* Input: ICPs with Flywheel between them */}
              <div className="space-y-2">
                <Card className="bg-white border-2 border-[#e24e1b]/30 shadow-sm">
                  <CardContent className="p-3 flex items-center gap-3">
                    <div className="p-2 bg-[#e24e1b] rounded-lg">
                      <Building2 className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#232323]">Interne DSBs</p>
                      <p className="text-xs text-[#474747]">Unternehmen mit eigenem DSB</p>
                    </div>
                  </CardContent>
                </Card>

                {/* Flywheel Connection */}
                <div className="flex items-center justify-center gap-2 py-1">
                  <div className="flex flex-col items-center">
                    <ArrowRight className="h-4 w-4 text-[#e24e1b]" />
                    <p className="text-[8px] text-gray-500">Bei Bedarf</p>
                  </div>
                  <div className="p-1.5 bg-[#39B37B]/10 rounded-full border border-[#39B37B]/30">
                    <Zap className="h-4 w-4 text-[#39B37B]" />
                  </div>
                  <div className="flex flex-col items-center">
                    <ArrowLeft className="h-4 w-4 text-[#474747]" />
                    <p className="text-[8px] text-gray-500">Neue Kunden</p>
                  </div>
                </div>

                <Card className="bg-white border-2 border-[#474747]/30 shadow-sm">
                  <CardContent className="p-3 flex items-center gap-3">
                    <div className="p-2 bg-[#474747] rounded-lg">
                      <Users className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#232323]">Externe DSBs</p>
                      <p className="text-xs text-[#474747]">Berater mit Mandanten</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="flex items-center">
                  <div className="w-6 h-1 bg-[#e24e1b]"></div>
                  <ChevronRight className="h-7 w-7 text-[#e24e1b] -ml-2" />
                </div>
              </div>

              {/* Center: Marsstein AI */}
              <Card className="bg-[#232323] border-0 shadow-xl">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#e24e1b] rounded-xl">
                      <Bot className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-white">Marsstein AI</p>
                      <p className="text-xs text-gray-400">KI-Kopilot für DSGVO-Compliance</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 mb-3">
                    <div className="bg-white/10 rounded-lg p-2 text-center">
                      <Database className="h-4 w-4 text-[#e24e1b] mx-auto mb-1" />
                      <p className="text-[9px] text-white leading-tight">Unternehmens-daten</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 text-center">
                      <Scale className="h-4 w-4 text-[#e24e1b] mx-auto mb-1" />
                      <p className="text-[9px] text-white leading-tight">Rechts-wissen</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 text-center">
                      <Bell className="h-4 w-4 text-[#e24e1b] mx-auto mb-1" />
                      <p className="text-[9px] text-white leading-tight">Fristen-management</p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-2 text-center">
                      <RefreshCw className="h-4 w-4 text-[#e24e1b] mx-auto mb-1" />
                      <p className="text-[9px] text-white leading-tight">Auto-Updates</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 p-2 bg-[#39B37B]/20 rounded-lg border border-[#39B37B]/30">
                    <Zap className="h-4 w-4 text-[#39B37B]" />
                    <span className="text-xs font-semibold text-[#39B37B]">Lawyer-in-the-Loop</span>
                    <span className="text-[10px] text-gray-400">– Expertenvalidierung</span>
                  </div>
                </CardContent>
              </Card>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="flex items-center">
                  <div className="w-6 h-1 bg-[#39B37B]"></div>
                  <ChevronRight className="h-7 w-7 text-[#39B37B] -ml-2" />
                </div>
              </div>

              {/* Output */}
              <Card className="bg-gradient-to-br from-[#39B37B]/15 to-[#39B37B]/5 border-2 border-[#39B37B]/30">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 bg-[#39B37B] rounded-lg">
                      <FileCheck className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#232323]">Audit-Ready</p>
                      <p className="text-xs text-[#474747]">Output</p>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#39B37B]" />
                      <span className="text-xs text-[#474747]">VVT & TOMs</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#39B37B]" />
                      <span className="text-xs text-[#474747]">AVVs & DSE</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#39B37B]" />
                      <span className="text-xs text-[#474747]">Löschkonzept</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom: Value Props & Stats */}
          <div className="grid grid-cols-5 gap-4 mt-2">
            {/* ICP Value Props */}
            <Card className="bg-[#e24e1b]/5 border-0 shadow-none">
              <CardContent className="p-4">
                <p className="text-xs font-semibold text-[#e24e1b] mb-1">Interne DSBs</p>
                <p className="text-sm font-bold text-[#232323]">Vom Einzelkämpfer zum Profi</p>
                <div className="mt-2 space-y-1">
                  <p className="text-xs text-[#474747]">• VVT, DSFA, DSAR</p>
                  <p className="text-xs text-[#474747]">• AVV & TOM Generator</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#474747]/5 border-0 shadow-none">
              <CardContent className="p-4">
                <p className="text-xs font-semibold text-[#474747] mb-1">Externe DSBs</p>
                <p className="text-sm font-bold text-[#232323]">Skalieren durch Automatisierung</p>
                <div className="mt-2 space-y-1">
                  <p className="text-xs text-[#474747]">• Multi-Client Dashboard</p>
                  <p className="text-xs text-[#474747]">• Mandantenvermittlung</p>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="bg-[#F5F6F8] border-0 shadow-none">
              <CardContent className="p-4 text-center flex flex-col justify-center h-full">
                <p className="text-2xl font-bold text-[#e24e1b]">2-5 Min</p>
                <p className="text-xs text-[#474747]">pro Dokument</p>
              </CardContent>
            </Card>
            <Card className="bg-[#F5F6F8] border-0 shadow-none">
              <CardContent className="p-4 text-center flex flex-col justify-center h-full">
                <p className="text-2xl font-bold text-[#e24e1b]">80%</p>
                <p className="text-xs text-[#474747]">weniger Aufwand</p>
              </CardContent>
            </Card>
            <Card className="bg-[#F5F6F8] border-0 shadow-none">
              <CardContent className="p-4 text-center flex flex-col justify-center h-full">
                <p className="text-2xl font-bold text-[#e24e1b]">99,9%</p>
                <p className="text-xs text-[#474747]">Genauigkeit</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV5;
