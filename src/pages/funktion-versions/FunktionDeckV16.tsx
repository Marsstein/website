import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, Database, FileCheck, Zap, ArrowRight, ArrowLeft, ShieldCheck, AreaChart, FileCog, LayoutDashboard, Cog, Scale, RefreshCw, ArrowDown } from 'lucide-react';

const FunktionDeckV16: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-gray-50/50 p-12 flex flex-col rounded-2xl border">
        <header className="text-center mb-6">
          <p className="font-semibold text-[#e24e1b]">Zwei Seiten einer Plattform</p>
          <h1 className="text-4xl font-bold text-[#232323]">Eine intelligente Lösung, zwei maßgeschneiderte Erlebnisse</h1>
        </header>

        <div className="flex-grow grid grid-cols-[1fr_auto_1fr] gap-6 items-stretch">

          {/* Left Side: Internal DSB */}
          <div className="flex flex-col gap-4 bg-white/60 p-6 rounded-xl border">
            <div className="text-center">
              <div className="p-3 bg-[#e24e1b] rounded-xl inline-block mb-2">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Für Interne DSBs</h2>
              <p className="text-md text-[#e24e1b]">Fokus: Sicherheit & Effizienz</p>
            </div>
            <div className="text-sm text-gray-600 space-y-2">
              <p><strong>Herausforderung:</strong> Einzelkämpfer mit hohem Dokumentationsaufwand und Unsicherheit bei komplexen Rechtsfragen.</p>
            </div>
            <Card className="mt-auto bg-gray-50">
              <CardContent className="p-4">
                <p className="font-bold mb-2 text-gray-700">Ihre Co-Pilot Features:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><FileCog className="h-5 w-5 text-[#e24e1b]"/><span>Automatisches VVT & TOMs</span></div>
                  <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5 text-[#e24e1b]"/><span>Geführte Risikoanalysen (DSFA)</span></div>
                  <div className="flex items-center gap-2"><Scale className="h-5 w-5 text-[#e24e1b]"/><span>Aktuelle Gesetzestexte & Urteile</span></div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-[#e24e1b]/10 border-[#e24e1b]/20">
              <CardContent className="p-4 text-center">
                <p className="font-bold text-[#e24e1b]">Ergebnis: Vom Einzelkämpfer zum Profi</p>
              </CardContent>
            </Card>
          </div>

          {/* Center: Combined Motor + Flywheel */}
          <div className="flex flex-col items-center justify-center gap-3">
            {/* Experten-Bedarf Arrow */}
            <div className="flex flex-col items-center">
              <p className="text-xs font-semibold text-gray-500 mb-1">Experten-Bedarf</p>
              <div className="flex items-center">
                <div className="w-12 h-0.5 bg-gradient-to-l from-[#e24e1b] to-transparent"></div>
                <ArrowRight className="h-5 w-5 text-[#e24e1b] -ml-1" />
              </div>
            </div>

            {/* Marsstein AI - Der Motor */}
            <Card className="bg-[#232323] shadow-2xl border-0 rounded-2xl w-72">
              <CardContent className="p-5 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <div className="p-2.5 bg-[#e24e1b] rounded-xl">
                    <Cog className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-lg font-bold text-white">Marsstein AI</p>
                    <p className="text-[10px] text-gray-400">Zentrale Plattform</p>
                  </div>
                </div>

                {/* Wertschöpfungsprozess als Workflow */}
                <div className="text-xs bg-white/10 rounded-lg p-3">
                  <p className="text-[10px] text-gray-400 font-semibold mb-2 text-center">Wertschöpfungsprozess</p>

                  {/* Step 1: Input */}
                  <div className="flex items-center gap-2 text-white bg-white/5 rounded p-1.5">
                    <Database className="h-3.5 w-3.5 text-[#e24e1b]"/>
                    <span>Input: Unternehmensdaten</span>
                  </div>

                  <ArrowDown className="h-3 w-3 text-gray-500 mx-auto my-1" />

                  {/* Step 2: KI-Generierung */}
                  <div className="flex items-center gap-2 text-white bg-white/5 rounded p-1.5">
                    <Bot className="h-3.5 w-3.5 text-[#e24e1b]"/>
                    <span>Prozess: KI-Generierung</span>
                  </div>

                  <ArrowDown className="h-3 w-3 text-gray-500 mx-auto my-1" />

                  {/* Step 3: Optional Lawyer-in-the-Loop */}
                  <div className="flex items-center justify-center gap-2 p-1.5 bg-[#39B37B]/20 rounded border border-[#39B37B]/30">
                    <Zap className="h-3.5 w-3.5 text-[#39B37B]" />
                    <span className="text-[#39B37B] font-semibold">Optional: Lawyer-in-the-Loop</span>
                  </div>

                  <ArrowDown className="h-3 w-3 text-gray-500 mx-auto my-1" />

                  {/* Step 4: Output */}
                  <div className="flex items-center gap-2 text-white bg-white/5 rounded p-1.5">
                    <FileCheck className="h-3.5 w-3.5 text-[#e24e1b]"/>
                    <span>Output: Audit-Ready Doku</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Neue Mandanten Arrow */}
            <div className="flex flex-col items-center">
              <div className="flex items-center">
                <ArrowLeft className="h-5 w-5 text-[#474747] -mr-1" />
                <div className="w-12 h-0.5 bg-gradient-to-r from-[#474747] to-transparent"></div>
              </div>
              <p className="text-xs font-semibold text-gray-500 mt-1">Neue Mandanten</p>
            </div>
          </div>

          {/* Right Side: External DSB */}
          <div className="flex flex-col gap-4 bg-white/60 p-6 rounded-xl border">
            <div className="text-center">
              <div className="p-3 bg-[#474747] rounded-xl inline-block mb-2">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold">Für Externe DSBs</h2>
              <p className="text-md text-[#474747]">Fokus: Skalierbarkeit & Wachstum</p>
            </div>
             <div className="text-sm text-gray-600 space-y-2">
              <p><strong>Herausforderung:</strong> Verwaltungsaufwand durch viele Mandanten, Excel-Chaos und die Notwendigkeit, neue Kunden zu akquirieren.</p>
            </div>
            <Card className="mt-auto bg-gray-50">
              <CardContent className="p-4">
                <p className="font-bold mb-2 text-gray-700">Ihre Skalierungs-Features:</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2"><RefreshCw className="h-5 w-5 text-[#474747]"/><span>Routinearbeit automatisiert</span></div>
                  <div className="flex items-center gap-2"><LayoutDashboard className="h-5 w-5 text-[#474747]"/><span>Multi-Client Dashboard</span></div>
                  <div className="flex items-center gap-2"><AreaChart className="h-5 w-5 text-[#474747]"/><span>White-Label Reports & Analysen</span></div>
                </div>
              </CardContent>
            </Card>
             <Card className="bg-[#474747]/10 border-[#474747]/20">
              <CardContent className="p-4 text-center">
                <p className="font-bold text-[#474747]">Ergebnis: Mehr Mandanten, weniger Aufwand</p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV16;
