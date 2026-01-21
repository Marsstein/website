import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, FileCheck, Zap, Repeat, Layers, ShieldCheck, Network } from 'lucide-react';

const FunktionDeckV14: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col">
        <header className="text-center mb-8">
          <p className="font-semibold text-[#e24e1b]">Das Geschäftsmodell</p>
          <h1 className="text-4xl font-bold text-[#232323]">Die Wertschöpfungs-Ebenen</h1>
          <p className="text-lg text-[#474747] mt-2">Marsstein ist mehr als eine Software – es ist eine umfassende Compliance-Lösung mit 3 aufbauenden Werten.</p>
        </header>

        <div className="flex-grow flex items-center justify-center">
          <div className="relative w-[800px] h-[400px]">
            
            {/* Layer 3: Ecosystem */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-full h-full border-4 border-dashed border-gray-300 rounded-[50px] flex items-center justify-center">
                <div className="w-[calc(100%-40px)] h-[calc(100%-40px)] bg-gray-100/80 rounded-[40px] p-5">
                  <div className="flex justify-between items-start h-full">
                    <div className="text-left w-64">
                      <p className="text-lg font-bold text-[#232323] flex items-center gap-2"><Network className="h-6 w-6 text-gray-500"/>Ebene 3: Das Ökosystem</p>
                      <p className="text-sm text-gray-600 mt-2">Die Plattform verbindet beide Nutzergruppen und schafft einen Netzwerk-Effekt, der für alle Seiten Wert generiert.</p>
                    </div>
                     <Card className="bg-white shadow-lg border-2 border-gray-200">
                        <CardContent className="p-4">
                           <div className="flex items-center gap-2 font-bold"><Repeat className="h-5 w-5 text-gray-500"/>Flywheel-Effekt</div>
                           <p className="text-xs text-gray-500 mt-1">Interne DSBs finden Experten. Externe DSBs gewinnen Mandanten.</p>
                        </CardContent>
                      </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Layer 2: Lawyer-in-the-Loop */}
            <div className="absolute inset-0 flex items-center justify-center z-20 p-20">
              <div className="w-full h-full border-4 border-dashed border-[#39B37B]/30 rounded-[40px] flex items-center justify-center">
                 <div className="w-[calc(100%-40px)] h-[calc(100%-40px)] bg-[#39B37B]/10 rounded-[30px] p-5">
                   <div className="flex justify-between items-start h-full">
                      <div className="text-left w-64">
                        <p className="text-lg font-bold text-[#232323] flex items-center gap-2"><ShieldCheck className="h-6 w-6 text-[#39B37B]"/>Ebene 2: Experten-Sicherheit</p>
                        <p className="text-sm text-gray-600 mt-2">Für kritische Fälle bietet die Plattform direkten Zugriff auf ein Netzwerk geprüfter Rechtsexperten.</p>
                      </div>
                       <Card className="bg-white shadow-lg border-2 border-[#39B37B]/20">
                        <CardContent className="p-4">
                           <div className="flex items-center gap-2 font-bold text-[#39B37B]"><Zap className="h-5 w-5"/>Lawyer-in-the-Loop</div>
                           <p className="text-xs text-gray-500 mt-1">Qualitätssicherung bei Bedarf durch zertifizierte Profis.</p>
                        </CardContent>
                      </Card>
                    </div>
                 </div>
              </div>
            </div>

            {/* Layer 1: AI Automation Core */}
            <div className="absolute inset-0 flex items-center justify-center z-30 p-40">
              <div className="w-full h-full bg-[#e24e1b]/10 rounded-[30px] p-5 shadow-2xl border-2 border-[#e24e1b]/20">
                  <div className="text-left">
                    <p className="text-lg font-bold text-[#232323] flex items-center gap-2"><Bot className="h-6 w-6 text-[#e24e1b]"/>Ebene 1: KI-Automatisierung</p>
                    <p className="text-sm text-gray-600 mt-2">Der Kern der Plattform. Die KI automatisiert 80% der repetitiven Compliance-Arbeit.</p>
                  </div>
                   <Card className="bg-white shadow-lg mt-4">
                    <CardContent className="p-4">
                       <div className="flex items-center gap-2 font-bold text-[#e24e1b]"><FileCheck className="h-5 w-5"/>Audit-Ready Output</div>
                       <p className="text-xs text-gray-500 mt-1">VVT, TOMs, DSARs, etc. in Minuten statt Stunden.</p>
                    </CardContent>
                  </Card>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV14;
