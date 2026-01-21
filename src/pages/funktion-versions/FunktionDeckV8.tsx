import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, Scale, Bell, CheckCircle2, Database, RefreshCw, FileCheck, Zap, ArrowRight, Package, HardHat, FileCog } from 'lucide-react';

const FunktionDeckV8: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col">
        <header className="text-center mb-6">
          <p className="font-semibold text-[#e24e1b]">Wertschöpfung</p>
          <h1 className="text-4xl font-bold text-[#232323]">Von rohen Daten zu rechtssicherer Compliance</h1>
          <p className="text-lg text-[#474747] mt-2">Unser Prozess verwandelt Komplexität in ein geprüftes, audit-fähiges Ergebnis.</p>
        </header>

        <div className="flex-grow flex items-center">
          <div className="w-full grid grid-cols-[1fr_auto_1.5fr_auto_1fr] gap-6 items-stretch">
            
            {/* Step 1: Input */}
            <Card className="h-full bg-gray-100/50 border-2 border-dashed border-gray-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 bg-gray-500 rounded-xl mb-3">
                  <Package className="h-7 w-7 text-white" />
                </div>
                <p className="text-xl font-bold text-[#232323]">1. Input</p>
                <p className="text-sm text-gray-500 mb-4">Die "Rohstoffe"</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2"><Database className="h-4 w-4 text-gray-600"/><span>Unternehmensdaten</span></div>
                  <div className="flex items-center gap-2"><Scale className="h-4 w-4 text-gray-600"/><span>Rechtsanforderungen</span></div>
                  <div className="flex items-center gap-2"><Bell className="h-4 w-4 text-gray-600"/><span>Deadlines & Fristen</span></div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center">
              <ArrowRight className="h-10 w-10 text-[#e24e1b]" />
            </div>

            {/* Step 2: Processing */}
            <Card className="h-full bg-[#e24e1b]/5 border-2 border-[#e24e1b]/20 shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 bg-[#e24e1b] rounded-xl mb-3">
                  <FileCog className="h-7 w-7 text-white" />
                </div>
                <p className="text-xl font-bold text-[#232323]">2. Verarbeitung</p>
                <p className="text-sm text-[#e24e1b] mb-4">Die Marsstein AI Engine</p>
                <div className="space-y-2 text-left bg-white p-3 rounded-lg w-full">
                  <div className="flex items-center gap-2"><Bot className="h-4 w-4 text-[#e24e1b]"/><span>KI-Analyse & Dokumenten-Generierung</span></div>
                  <div className="flex items-center gap-2"><RefreshCw className="h-4 w-4 text-[#e24e1b]"/><span>Automatische Updates bei Gesetzesänderungen</span></div>
                  <div className="flex items-center gap-2 text-[#39B37B]"><Zap className="h-4 w-4"/><strong>Lawyer-in-the-Loop Qualitätssicherung</strong></div>
                </div>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center">
              <ArrowRight className="h-10 w-10 text-[#39B37B]" />
            </div>

            {/* Step 3: Output */}
            <Card className="h-full bg-[#39B37B]/5 border-2 border-[#39B37B]/20 shadow-lg">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 bg-[#39B37B] rounded-xl mb-3">
                  <FileCheck className="h-7 w-7 text-white" />
                </div>
                <p className="text-xl font-bold text-[#232323]">3. Output</p>
                <p className="text-sm text-[#39B37B] mb-4">Das "fertige Produkt"</p>
                <div className="space-y-2 text-left">
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600"/><span>Audit-fähige Dokumentation</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600"/><span>Rechtssicherheit (99,9%)</span></div>
                  <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-green-600"/><span>80% Zeitersparnis</span></div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>

        <div className="mt-6 flex items-center justify-center p-4 bg-gray-100 rounded-2xl">
          <Building2 className="h-5 w-5 text-[#e24e1b]"/>
          <p className="mx-4 text-md text-center text-[#232323]">Für <span className="font-bold">Interne DSBs</span> bedeutet das Sicherheit & Effizienz.</p>
          <div className="h-6 w-px bg-gray-300"></div>
          <Users className="h-5 w-5 text-[#474747] ml-4"/>
          <p className="ml-2 text-md text-center text-[#232323]">Für <span className="font-bold">Externe DSBs</span> bedeutet das Skalierbarkeit & neue Mandanten.</p>
        </div>

      </div>
    </div>
  );
};

export default FunktionDeckV8;
