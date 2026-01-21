import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, CheckCircle2, FileCheck, Zap, ArrowRight, ShieldCheck, AreaChart, FileCog, Repeat } from 'lucide-react';

const FunktionDeckV18: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col">
        <header className="text-center mb-8">
          <p className="font-semibold text-[#e24e1b]">Maßgeschneiderte Workflows</p>
          <h1 className="text-4xl font-bold text-[#232323]">Zwei Rollen, zwei Wege zum Erfolg – eine Plattform</h1>
          <p className="text-lg text-[#474747] mt-2">Jeder DSB-Typ hat eine eigene User Journey, die wir mit spezifischen Features unterstützen.</p>
        </header>

        <div className="flex-grow flex flex-col justify-center gap-8 relative">
          
          {/* Path 1: Internal DSB */}
          <div className="flex items-center gap-4">
            <div className="w-40 text-center">
              <div className="p-3 bg-[#e24e1b] rounded-xl inline-block mb-2">
                <Building2 className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold">Interner DSB</h3>
              <p className="text-xs text-gray-500">Ziel: Effizienz & Sicherheit</p>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-300 flex-shrink-0" />
            <Card className="flex-1 bg-gray-50/80"><CardContent className="p-3 text-center"><p className="font-semibold text-sm">1. VVT & TOMs automatisiert</p><p className="text-xs">mit <span className="font-bold text-[#e24e1b]">Marsstein AI</span></p></CardContent></Card>
            <ArrowRight className="h-6 w-6 text-gray-300 flex-shrink-0" />
            <Card className="flex-1 bg-gray-50/80"><CardContent className="p-3 text-center"><p className="font-semibold text-sm">2. Risiko-Analyse (DSFA)</p><p className="text-xs">geführt durchführen</p></CardContent></Card>
            <ArrowRight className="h-6 w-6 text-gray-300 flex-shrink-0" />
             <Card className="flex-1 bg-[#39B37B]/10 border-2 border-dashed border-[#39B37B]/30"><CardContent className="p-3 text-center"><p className="font-semibold text-sm text-[#39B37B]">3. Audit-Ready</p><p className="text-xs">Dokumentation exportieren</p></CardContent></Card>
          </div>

          {/* LITL Bridge */}
          <div className="absolute left-[60%] top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 rotate-90">
             <div className="flex items-center gap-2">
                <div className="w-16 h-px bg-gray-300"></div>
                <div className="p-2 bg-white border-2 border-[#39B37B]/30 rounded-full shadow-md">
                    <Zap className="h-5 w-5 text-[#39B37B]"/>
                </div>
                 <div className="w-16 h-px bg-gray-300"></div>
             </div>
             <p className="text-xs font-semibold text-[#39B37B] -rotate-90 whitespace-nowrap">Lawyer-in-the-Loop <span className="font-normal text-gray-500">(optional)</span></p>
          </div>

          {/* Path 2: External DSB */}
           <div className="flex items-center gap-4">
            <div className="w-40 text-center">
              <div className="p-3 bg-[#474747] rounded-xl inline-block mb-2">
                <Users className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-bold">Externer DSB</h3>
              <p className="text-xs text-gray-500">Ziel: Wachstum & Skalierung</p>
            </div>
            <ArrowRight className="h-6 w-6 text-gray-300 flex-shrink-0" />
            <Card className="flex-1 bg-gray-50/80"><CardContent className="p-3 text-center"><p className="font-semibold text-sm">1. Neue Mandanten</p><p className="text-xs">über <span className="font-bold text-[#474747]">Marsstein-Netzwerk</span> gewinnen</p></CardContent></Card>
            <ArrowRight className="h-6 w-6 text-gray-300 flex-shrink-0" />
            <Card className="flex-1 bg-gray-50/80"><CardContent className="p-3 text-center"><p className="font-semibold text-sm">2. Multi-Client Dashboard</p><p className="text-xs">alle Kunden zentral verwalten</p></CardContent></Card>
            <ArrowRight className="h-6 w-6 text-gray-300 flex-shrink-0" />
            <Card className="flex-1 bg-[#474747]/10 border-2 border-dashed border-[#474747]/30"><CardContent className="p-3 text-center"><p className="font-semibold text-sm text-[#474747]">3. Effizient Skalieren</p><p className="text-xs">mit White-Label Reports</p></CardContent></Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV18;
