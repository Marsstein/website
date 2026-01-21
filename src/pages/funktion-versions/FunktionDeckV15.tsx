import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, CheckCircle2, FileCheck, Zap, ArrowRight, Rocket, Brain, CalendarOff, Repeat } from 'lucide-react';

const FunktionDeckV15: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-gray-50/50 p-12 flex flex-col rounded-2xl border">
        <header className="text-center mb-6">
          <p className="font-semibold text-[#e24e1b]">Das Produkt</p>
          <h1 className="text-4xl font-bold text-[#232323]">Der DSB Co-Pilot: Von Routine zu Strategie</h1>
          <p className="text-lg text-[#474747] mt-2">Unsere Plattform automatisiert die Routine, damit Sie sich auf das Wesentliche konzentrieren können.</p>
        </header>

        <div className="flex-grow flex flex-col justify-between gap-6">
          {/* Main Workflow */}
          <div className="grid grid-cols-[1fr_auto_1.8fr_auto_1fr] items-stretch gap-5">
            
            {/* 1. Input: The DSB's Reality */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-sm">
              <CardContent className="p-5 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <Rocket className="h-7 w-7 text-[#e24e1b]" />
                  <p className="text-xl font-bold">Ihr Co-Pilot Sitz</p>
                </div>
                <p className="text-sm text-gray-600 mb-3">Ihre täglichen Herausforderungen:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2"><CalendarOff className="h-4 w-4 text-red-500 mt-0.5"/><span>Repetitive Dokumentation</span></div>
                  <div className="flex items-start gap-2"><Brain className="h-4 w-4 text-red-500 mt-0.5"/><span>Unsicherheit bei Rechtsfragen</span></div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center"><ArrowRight className="h-10 w-10 text-gray-300"/></div>

            {/* 2. Process: The Marsstein AI Hub */}
            <Card className="bg-gradient-to-b from-[#232323] to-[#1a1a1a] shadow-2xl border-0">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-[#e24e1b] rounded-xl"><Bot className="h-8 w-8 text-white"/></div>
                  <div>
                    <p className="text-2xl font-bold text-white">Marsstein AI Hub</p>
                    <p className="text-sm text-[#e24e1b] font-semibold">Automatisiert Routine & Dokumente</p>
                  </div>
                </div>
                <p className="text-sm text-gray-300">Unsere KI verarbeitet Ihre Unternehmensdaten mit aktuellem Rechtswissen und generiert automatisch alle notwendigen DSGVO-Dokumente.</p>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center"><ArrowRight className="h-10 w-10 text-gray-300"/></div>

            {/* 3. Output: The Value */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-sm">
              <CardContent className="p-5 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3">
                  <FileCheck className="h-7 w-7 text-[#39B37B]" />
                  <p className="text-xl font-bold">Ihr Ergebnis</p>
                </div>
                <p className="text-sm text-gray-600 mb-3">Sie erhalten:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5"/><span className="font-semibold">Audit-fähige Dokumentation</span></div>
                  <div className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5"/><span className="font-semibold">Zeit für strategische Beratung</span></div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Optional Layer: Lawyer-in-the-Loop & Ecosystem */}
          <div className="relative text-center">
            <hr className="border-dashed"/>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-50/50 px-4 text-sm font-semibold text-gray-500">Optionales Sicherheitsnetz & Ökosystem</span>
          </div>
          
          <div className="grid grid-cols-12 gap-5 items-center">
            <Card className="col-span-5 bg-white border-2 border-gray-200/80">
              <CardContent className="p-4">
                <p className="font-bold flex items-center gap-2"><Building2 className="h-5 w-5 text-[#e24e1b]"/>Interne DSBs erhalten...</p>
                <p className="text-sm text-gray-600 mt-1">...per Klick rechtliche Validierung von geprüften Experten für komplexe Fälle.</p>
              </CardContent>
            </Card>
            <div className="col-span-2 text-center">
               <div className="flex items-center justify-center gap-2">
                 <ArrowRight className="h-6 w-6 text-gray-400"/>
                 <div className="p-3 bg-[#39B37B]/10 rounded-full border-2 border-[#39B37B]/30">
                   <Zap className="h-6 w-6 text-[#39B37B]"/>
                 </div>
                 <ArrowRight className="h-6 w-6 text-gray-400 -scale-x-100"/>
               </div>
               <p className="text-xs font-bold text-[#39B37B] mt-1">Lawyer-in-the-Loop</p>
            </div>
             <Card className="col-span-5 bg-white border-2 border-gray-200/80">
              <CardContent className="p-4">
                <p className="font-bold flex items-center gap-2"><Users className="h-5 w-5 text-[#474747]"/>Externe DSBs erhalten...</p>
                <p className="text-sm text-gray-600 mt-1">...neue, qualifizierte Mandanten-Anfragen direkt über die Plattform.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV15;
