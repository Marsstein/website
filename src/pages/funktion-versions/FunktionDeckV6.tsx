import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, Scale, CheckCircle2, Database, RefreshCw, FileCheck, Zap, ArrowRight, ArrowLeft, Repeat } from 'lucide-react';

const FunktionDeckV6: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col">
        <header className="text-center mb-6">
          <p className="font-semibold text-[#e24e1b]">Ökosystem</p>
          <h1 className="text-4xl font-bold text-[#232323]">Mehr als eine Software: Ein Compliance-Netzwerk</h1>
          <p className="text-lg text-[#474747] mt-2">Marsstein AI verbindet interne & externe Datenschutzbeauftragte und schafft einen sich selbst verstärkenden Kreislauf.</p>
        </header>

        <div className="flex-grow flex items-center justify-center">
          <div className="w-full grid grid-cols-[1fr_auto_1fr] items-center gap-6">
            
            {/* Left: Interne DSBs */}
            <Card className="h-full bg-gradient-to-br from-[#e24e1b]/10 to-transparent border-2 border-[#e24e1b]/20 shadow-lg">
              <CardContent className="p-6 text-center flex flex-col items-center">
                <div className="p-3 bg-[#e24e1b] rounded-xl mb-3">
                  <Building2 className="h-7 w-7 text-white" />
                </div>
                <p className="text-xl font-bold text-[#232323]">Interne DSBs</p>
                <p className="text-sm text-[#e24e1b] mb-4">Unternehmen</p>
                <div className="bg-white rounded-lg p-3 w-full border-l-4 border-[#e24e1b] text-left">
                  <p className="text-sm font-semibold text-[#232323]">Vom Einzelkämpfer zum Profi</p>
                  <p className="text-xs text-[#474747] mt-1">KI-gestützt arbeiten, bei Bedarf Rechtsexperten hinzuziehen.</p>
                </div>
              </CardContent>
            </Card>

            {/* Center: Flywheel & Marsstein AI */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center">
                <p className="text-xs font-semibold text-gray-500 mb-1">Experten-Bedarf</p>
                <div className="flex items-center">
                  <div className="w-16 h-0.5 bg-gradient-to-l from-[#e24e1b] to-transparent"></div>
                  <ArrowRight className="h-7 w-7 text-[#e24e1b] -ml-2" />
                </div>
              </div>

              <Card className="bg-[#232323] border-0 shadow-xl rounded-2xl w-64">
                <CardContent className="p-5 text-center">
                  <div className="p-3 bg-[#e24e1b] rounded-xl mb-2 inline-block">
                    <Bot className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-xl font-bold text-white">Marsstein AI</p>
                  <p className="text-xs text-gray-400 mb-3">Zentrale Plattform</p>
                  <div className="flex items-center justify-center gap-2 p-2 bg-[#39B37B]/20 rounded-lg border border-[#39B37B]/30">
                    <Zap className="h-4 w-4 text-[#39B37B]" />
                    <p className="text-xs font-semibold text-[#39B37B]">Lawyer-in-the-Loop</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex flex-col items-center">
                <div className="flex items-center">
                  <ArrowLeft className="h-7 w-7 text-[#474747] -mr-2" />
                  <div className="w-16 h-0.5 bg-gradient-to-r from-[#474747] to-transparent"></div>
                </div>
                <p className="text-xs font-semibold text-gray-500 mt-1">Neue Mandanten</p>
              </div>
            </div>

            {/* Right: Externe DSBs */}
            <Card className="h-full bg-gradient-to-bl from-[#474747]/10 to-transparent border-2 border-[#474747]/20 shadow-lg">
              <CardContent className="p-6 text-center flex flex-col items-center">
                <div className="p-3 bg-[#474747] rounded-xl mb-3">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <p className="text-xl font-bold text-[#232323]">Externe DSBs</p>
                <p className="text-sm text-[#474747] mb-4">Berater & Kanzleien</p>
                <div className="bg-white rounded-lg p-3 w-full border-l-4 border-[#474747] text-left">
                  <p className="text-sm font-semibold text-[#232323]">Skalieren durch Automatisierung</p>
                  <p className="text-xs text-[#474747] mt-1">Routine-Arbeit läuft automatisch, Sie konzentrieren sich auf Mandanten.</p>
                </div>
              </CardContent>
            </Card>
            
          </div>
          <div className="flex items-center justify-center text-center mt-6">
            <Repeat className="h-5 w-5 text-[#39B37B] mr-2"/>
            <p className="text-md text-[#474747]"><span className="font-bold text-[#232323]">Netzwerk-Effekt:</span> Jede Seite stärkt die andere und erhöht den Wert der gesamten Plattform.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV6;
