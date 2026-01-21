import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, CheckCircle2, FileCheck, Zap, ArrowRight, RefreshCw, UserCheck, Network, Sparkles } from 'lucide-react';

const FunktionDeckV11: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col">
        <header className="text-center mb-6">
          <p className="font-semibold text-[#e24e1b]">Geschäftsmodell</p>
          <h1 className="text-4xl font-bold text-[#232323]">Der Wertschöpfungszyklus</h1>
          <p className="text-lg text-[#474747] mt-2">Compliance ist kein Projekt, sondern ein kontinuierlicher Prozess. Unsere Plattform bildet diesen Zyklus ab.</p>
        </header>

        <div className="flex-grow flex items-center justify-center">
          <div className="w-full grid grid-cols-4 items-center gap-4 relative">
            
            {/* Arrows forming a circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-[600px] h-[300px] border-4 border-dashed border-gray-200 rounded-full animate-spin-slow"></div>
            </div>

            {/* Step 1: Automatisierung */}
            <div className="z-10 text-center">
              <Card className="bg-white border-2 border-[#e24e1b]/30 shadow-lg">
                <CardContent className="p-5">
                  <div className="p-3 bg-[#e24e1b] rounded-xl mb-3 inline-block">
                    <Bot className="h-7 w-7 text-white" />
                  </div>
                  <p className="text-lg font-bold">1. Automatisierung</p>
                  <p className="text-xs text-gray-500 h-10">Ein interner DSB nutzt die KI zur Erstellung von Dokumenten (VVT, TOMs).</p>
                </CardContent>
              </Card>
            </div>

            {/* Step 2: Validierung */}
            <div className="z-10 text-center">
              <Card className="bg-white border-2 border-[#39B37B]/30 shadow-lg">
                <CardContent className="p-5">
                  <div className="p-3 bg-[#39B37B] rounded-xl mb-3 inline-block">
                    <UserCheck className="h-7 w-7 text-white" />
                  </div>
                  <p className="text-lg font-bold">2. Validierung</p>
                  <p className="text-xs text-gray-500 h-10">Über den <span className="font-bold text-[#39B37B]">Lawyer-in-the-Loop</span> wird ein externer DSB zur Prüfung hinzugezogen.</p>
                </CardContent>
              </Card>
            </div>

            {/* Step 3: Skalierung */}
            <div className="z-10 text-center">
              <Card className="bg-white border-2 border-[#474747]/30 shadow-lg">
                <CardContent className="p-5">
                   <div className="p-3 bg-[#474747] rounded-xl mb-3 inline-block">
                    <Network className="h-7 w-7 text-white" />
                  </div>
                  <p className="text-lg font-bold">3. Skalierung</p>
                  <p className="text-xs text-gray-500 h-10">Der externe DSB gewinnt einen neuen Mandanten und verwaltet diesen effizient in seinem Dashboard.</p>
                </CardContent>
              </Card>
            </div>

            {/* Step 4: Optimierung */}
            <div className="z-10 text-center">
              <Card className="bg-white border-2 border-gray-400/30 shadow-lg">
                <CardContent className="p-5">
                  <div className="p-3 bg-gray-400 rounded-xl mb-3 inline-block">
                    <Sparkles className="h-7 w-7 text-white" />
                  </div>
                  <p className="text-lg font-bold">4. Optimierung</p>
                  <p className="text-xs text-gray-500 h-10">Die Plattform hält alle Dokumente durch Auto-Updates aktuell und der Zyklus beginnt von Neuem.</p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
         <div className="mt-6 flex items-center justify-center text-center p-4 bg-gray-100 rounded-2xl">
              <p className="text-md text-[#232323]"><strong className="text-[#e24e1b]">Der Zyklus schafft Mehrwert:</strong> Interne DSBs erhalten geprüfte Sicherheit, externe DSBs gewinnen Kunden und skalieren ihr Geschäft. Ein Win-Win-Modell.</p>
        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV11;
