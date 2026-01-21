import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, Scale, CheckCircle2, Database, RefreshCw, FileCheck, Zap, ArrowRight, ArrowLeft, Repeat, Cog } from 'lucide-react';

const FunktionDeckV9: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col">
        <header className="text-center mb-6">
          <p className="font-semibold text-[#e24e1b]">Geschäftsmodell</p>
          <h1 className="text-4xl font-bold text-[#232323]">Der Schwungrad-Motor unserer Plattform</h1>
          <p className="text-lg text-[#474747] mt-2">Unser Kernprozess (Motor) erzeugt Wert, der unser Netzwerk (Schwungrad) antreibt und beschleunigt.</p>
        </header>

        <div className="flex-grow flex items-center justify-center relative">
          {/* Flywheel Background Circle */}
          <div className="absolute w-[500px] h-[500px] border-[50px] border-gray-100 rounded-full z-0"></div>
          <div className="absolute w-[500px] h-[500px] border-4 border-dashed border-gray-300 rounded-full z-0 animate-spin-slow"></div>

          {/* Center: The Engine */}
          <Card className="bg-[#232323] border-0 shadow-2xl rounded-2xl w-80 z-10">
            <CardContent className="p-6 text-center">
              <div className="p-3 bg-[#e24e1b] rounded-xl mb-3 inline-block">
                <Cog className="h-8 w-8 text-white" />
              </div>
              <p className="text-2xl font-bold text-white">Der Motor</p>
              <p className="text-sm text-gray-400 mb-4">Wertschöpfungsprozess</p>
              <div className="text-left space-y-2 text-sm">
                <div className="flex items-center gap-2 text-white"><Database className="h-4 w-4 text-[#e24e1b]"/><span>Input: Unternehmensdaten</span></div>
                <div className="flex items-center gap-2 text-white"><Bot className="h-4 w-4 text-[#e24e1b]"/><span>Prozess: KI-Generierung</span></div>
                <div className="flex items-center gap-2 text-white"><FileCheck className="h-4 w-4 text-[#e24e1b]"/><span>Output: Audit-Ready Doku</span></div>
              </div>
            </CardContent>
          </Card>

          {/* Top: Interne DSBs */}
          <div className="absolute top-[-20px] left-1/2 -translate-x-1/2 z-10">
            <Card className="bg-white border-2 border-[#e24e1b]/50 shadow-lg w-72">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Building2 className="h-6 w-6 text-[#e24e1b]" />
                  <p className="font-bold text-lg">Interne DSBs</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">Brauchen Sicherheit & Effizienz, stoßen an Wissensgrenzen.</p>
              </CardContent>
            </Card>
          </div>

          {/* Bottom: Externe DSBs */}
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 z-10">
            <Card className="bg-white border-2 border-[#474747]/50 shadow-lg w-72">
              <CardContent className="p-4">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-[#474747]" />
                  <p className="font-bold text-lg">Externe DSBs</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">Suchen neue Mandanten und skalierbare Werkzeuge.</p>
              </CardContent>
            </Card>
          </div>

          {/* Right: Lawyer-in-the-Loop */}
          <div className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 text-center">
            <div className="p-3 bg-[#39B37B]/10 rounded-full inline-block border-2 border-[#39B37B]/30 mb-1">
              <Zap className="h-6 w-6 text-[#39B37B]" />
            </div>
            <p className="font-bold text-[#39B37B]">Lawyer-in-the-Loop</p>
            <p className="text-xs text-gray-500">Interne DSBs stellen Anfragen.</p>
            <ArrowLeft className="h-10 w-10 text-[#39B37B] mx-auto mt-2" />
          </div>

          {/* Left: Mandanten-Vermittlung */}
          <div className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 text-center">
             <div className="p-3 bg-[#474747]/10 rounded-full inline-block border-2 border-[#474747]/30 mb-1">
              <Repeat className="h-6 w-6 text-[#474747]" />
            </div>
            <p className="font-bold text-[#474747]">Mandanten-Vermittlung</p>
            <p className="text-xs text-gray-500">Externe DSBs gewinnen Kunden.</p>
            <ArrowRight className="h-10 w-10 text-[#474747] mx-auto mt-2" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV9;
