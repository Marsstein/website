import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, Scale, Bell, CheckCircle2, FileCheck, Zap, Repeat, LayoutDashboard, FileText, CalendarClock, ShieldCheck, Database } from 'lucide-react';

const FunktionDeckV12: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-gray-50/50 p-12 flex flex-col rounded-2xl border">
        <header className="text-center mb-6">
          <p className="font-semibold text-[#e24e1b]">Das Produkt</p>
          <h1 className="text-4xl font-bold text-[#232323]">Das KI-Cockpit für moderne DSBs</h1>
          <p className="text-lg text-[#474747] mt-2">Alle Compliance-Aufgaben in einer zentralen, intelligenten Kommandozentrale.</p>
        </header>

        <div className="flex-grow grid grid-cols-12 gap-6">
          
          {/* Left Sidebar: Navigation/Modules */}
          <div className="col-span-3">
            <Card className="h-full bg-white/80 backdrop-blur-sm border-gray-200 shadow-sm">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-4">
                  <LayoutDashboard className="h-6 w-6 text-[#e24e1b]" />
                  <p className="text-lg font-bold">Marsstein Cockpit</p>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold text-gray-800 bg-gray-100 p-2 rounded-md">Haupt-Module</p>
                  <div className="flex items-center gap-2 p-2"><FileText className="h-5 w-5 text-gray-600"/><span>Verarbeitungsverzeichnis</span></div>
                  <div className="flex items-center gap-2 p-2"><ShieldCheck className="h-5 w-5 text-gray-600"/><span>Risikobewertung (DSFA)</span></div>
                  <div className="flex items-center gap-2 p-2"><Users className="h-5 w-5 text-gray-600"/><span>Betroffenenanfragen</span></div>
                  <div className="flex items-center gap-2 p-2"><CalendarClock className="h-5 w-5 text-gray-600"/><span>Fristen & Aufgaben</span></div>
                </div>
                 <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="font-semibold text-gray-800 p-2">Mandanten</p>
                  <div className="flex items-center gap-2 p-2 bg-[#e24e1b]/10 rounded-md text-[#e24e1b] font-semibold"><Building2 className="h-5 w-5"/><span>Musterfirma GmbH</span></div>
                  <div className="flex items-center gap-2 p-2 text-gray-600"><span>TechCorp AG</span></div>
                 </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="col-span-9 flex flex-col gap-6">
            
            {/* Top Row: Core Workflow */}
            <div className="grid grid-cols-3 gap-6">
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-sm">
                <CardContent className="p-4 text-center">
                  <p className="text-sm font-semibold text-gray-500 mb-2">Schritt 1: Input</p>
                  <Database className="h-8 w-8 text-[#e24e1b] mx-auto mb-2"/>
                  <p className="font-bold">Unternehmensdaten & Anforderungen</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-sm">
                 <CardContent className="p-4 text-center">
                  <p className="text-sm font-semibold text-gray-500 mb-2">Schritt 2: KI-Analyse</p>
                  <Bot className="h-8 w-8 text-[#e24e1b] mx-auto mb-2"/>
                  <p className="font-bold">Autom. Dokumenten-erstellung</p>
                </CardContent>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-sm">
                 <CardContent className="p-4 text-center">
                  <p className="text-sm font-semibold text-gray-500 mb-2">Schritt 3: Output</p>
                  <FileCheck className="h-8 w-8 text-[#39B37B] mx-auto mb-2"/>
                  <p className="font-bold text-[#39B37B]">Audit-fähige Compliance</p>
                </CardContent>
              </Card>
            </div>

            {/* Bottom Row: Flywheel/Ecosystem Integration */}
            <div className="flex-grow grid grid-cols-2 gap-6">
               <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-sm">
                <CardContent className="p-5">
                   <div className="flex items-center gap-3 mb-2">
                      <Zap className="h-6 w-6 text-[#39B37B]" />
                      <p className="text-lg font-bold text-[#232323]">Lawyer-in-the-Loop</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Komplexe Rechtsfrage? Holen Sie sich mit einem Klick Experten-Feedback von einem externen DSB aus unserem Netzwerk.</p>
                    <div className="p-2 bg-[#39B37B]/10 text-center rounded-md font-semibold text-sm text-[#39B37B]">Anfrage starten</div>
                </CardContent>
              </Card>
               <Card className="bg-white/80 backdrop-blur-sm border-gray-200 shadow-sm">
                <CardContent className="p-5">
                   <div className="flex items-center gap-3 mb-2">
                      <Repeat className="h-6 w-6 text-[#474747]" />
                      <p className="text-lg font-bold text-[#232323]">DSB-Ökosystem</p>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Als externer DSB erhalten Sie neue Mandanten-Anfragen von Unternehmen, die Experten-Unterstützung benötigen.</p>
                    <div className="p-2 bg-gray-100 text-center rounded-md font-semibold text-sm text-gray-700">Profil anzeigen</div>
                </CardContent>
              </Card>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV12;
