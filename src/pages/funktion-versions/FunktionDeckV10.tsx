import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, CheckCircle2, FileCheck, Zap, ArrowRight, Layers, FileCog, UserCheck, Network } from 'lucide-react';

const FunktionDeckV10: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col">
        <header className="text-center mb-6">
          <p className="font-semibold text-[#e24e1b]">Geschäftsmodell</p>
          <h1 className="text-4xl font-bold text-[#232323]">Das Zwei-Kreislauf-System</h1>
          <p className="text-lg text-[#474747] mt-2">Ein interner Produkt-Kreislauf schafft den Wert, der einen externen Netzwerk-Kreislauf antreibt.</p>
        </header>

        <div className="flex-grow flex items-center justify-center relative">
          {/* Outer Ring: Network Loop */}
          <div className="absolute w-[600px] h-[600px] border-8 border-dashed border-gray-200 rounded-full flex items-center justify-center">
             <div className="w-full h-full rounded-full relative">
                <div className="absolute top-1/2 left-[-40px] -translate-y-1/2 text-center">
                  <Card className="bg-white border-2 border-[#e24e1b]/40 shadow-lg">
                    <CardContent className="p-4">
                      <Building2 className="h-6 w-6 text-[#e24e1b] mx-auto mb-1"/>
                      <p className="font-bold">Interne DSBs</p>
                      <p className="text-xs">erhalten Sicherheit</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute top-1/2 right-[-40px] -translate-y-1/2 text-center">
                   <Card className="bg-white border-2 border-[#474747]/40 shadow-lg">
                    <CardContent className="p-4">
                      <Users className="h-6 w-6 text-[#474747] mx-auto mb-1"/>
                      <p className="font-bold">Externe DSBs</p>
                      <p className="text-xs">gewinnen Mandanten</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="absolute top-[-40px] left-1/2 -translate-x-1/2 text-center">
                   <Card className="bg-white border-2 border-[#39B37B]/40 shadow-lg">
                    <CardContent className="p-4">
                      <Zap className="h-6 w-6 text-[#39B37B] mx-auto mb-1"/>
                      <p className="font-bold">Lawyer-in-the-Loop</p>
                      <p className="text-xs">Verbindung</p>
                    </CardContent>
                  </Card>
                </div>
             </div>
          </div>

           {/* Center: Inner Ring - Product Loop */}
          <div className="w-[350px] h-[350px] bg-white border-8 border-gray-100 rounded-full flex items-center justify-center z-10">
            <div className="w-full h-full rounded-full relative flex items-center justify-center text-center">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-2 bg-white rounded-full"><FileCog className="h-6 w-6 text-gray-500"/></div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 p-2 bg-white rounded-full"><UserCheck className="h-6 w-6 text-gray-500"/></div>
              <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 p-2 bg-white rounded-full"><Bot className="h-6 w-6 text-gray-500"/></div>

              <div className="max-w-[180px]">
                <p className="text-xl font-bold text-[#232323]">Produkt-Kreislauf</p>
                <p className="text-sm text-gray-500 mb-2">(Wertschöpfung)</p>
                <p className="text-xs bg-gray-100 p-2 rounded-md">
                  <strong>1. Input:</strong> Daten & Bedarf <br/>
                  <span className="font-mono">↓</span><br/>
                  <strong>2. Prozess:</strong> Marsstein AI <br/>
                  <span className="font-mono">↓</span><br/>
                  <strong>3. Output:</strong> Compliance
                </p>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-10">
            <div className="flex items-center gap-4 p-3 bg-white shadow-md rounded-full border">
                <div className="flex items-center gap-2">
                    <Layers className="h-5 w-5 text-[#e24e1b]"/>
                    <p className="font-semibold text-[#232323]">Innerer Kreislauf:</p>
                    <p className="text-sm text-gray-600">Produkt liefert Wert</p>
                </div>
                <div className="h-6 w-px bg-gray-200"></div>
                <div className="flex items-center gap-2">
                    <Network className="h-5 w-5 text-[#39B37B]"/>
                    <p className="font-semibold text-[#39B37B]">Äußerer Kreislauf:</p>
                    <p className="text-sm text-gray-600">Netzwerk skaliert Wert</p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV10;
