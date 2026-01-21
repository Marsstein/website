import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, CheckCircle2, FileCheck, Zap, XCircle, Clock, FileWarning, BrainCircuit, Sparkles } from 'lucide-react';

const FunktionDeckV7: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col">
        <header className="text-center mb-4">
          <p className="font-semibold text-[#e24e1b]">Problem & Lösung</p>
          <h1 className="text-4xl font-bold text-[#232323]">Vom DSGVO-Chaos zur Compliance auf Autopilot</h1>
        </header>

        <div className="flex-grow grid grid-cols-2 gap-8 items-stretch">

          {/* Left: Before */}
          <div className="flex flex-col">
            <h2 className="text-center text-2xl font-bold text-red-500 mb-4">Die alte Welt: Manuelle Compliance</h2>
            <div className="flex-grow p-6 bg-red-500/5 rounded-2xl border-2 border-dashed border-red-500/20">
              <div className="grid grid-cols-2 gap-4">
                
                <Card className="bg-white/50 border-red-500/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="h-6 w-6 text-red-500" />
                      <p className="font-bold text-gray-700">Interne DSBs</p>
                    </div>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-400 mt-0.5"/><span>Rechtsunsicherheit</span></div>
                      <div className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-400 mt-0.5"/><span>Hoher Zeitaufwand</span></div>
                      <div className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-400 mt-0.5"/><span>Fehlende Expertise</span></div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/50 border-red-500/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="h-6 w-6 text-red-500" />
                      <p className="font-bold text-gray-700">Externe DSBs</p>
                    </div>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-400 mt-0.5"/><span>Excel-Chaos</span></div>
                      <div className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-400 mt-0.5"/><span>Nicht skalierbar</span></div>
                      <div className="flex items-start gap-2"><XCircle className="h-4 w-4 text-red-400 mt-0.5"/><span>Repetitive Arbeit</span></div>
                    </div>
                  </CardContent>
                </Card>

                <div className="col-span-2 text-center p-4 bg-white rounded-lg border border-red-500/20">
                   <p className="font-bold text-red-500">Ergebnis</p>
                   <div className="flex items-center justify-center gap-4 mt-2">
                      <div className="flex items-center gap-1.5"><Clock className="h-4 w-4"/><span>Lange Prozesse</span></div>
                      <div className="flex items-center gap-1.5"><FileWarning className="h-4 w-4"/><span>Inkonsistente Doku</span></div>
                   </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: After */}
          <div className="flex flex-col">
            <h2 className="text-center text-2xl font-bold text-[#39B37B] mb-4">Die neue Welt: Marsstein AI</h2>
            <div className="flex-grow p-6 bg-[#39B37B]/5 rounded-2xl border-2 border-[#39B37B]/20">
              <div className="grid grid-cols-2 gap-4">
                
                <Card className="bg-white/50 border-[#39B37B]/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="h-6 w-6 text-[#39B37B]" />
                      <p className="font-bold text-gray-700">Interne DSBs</p>
                    </div>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5"/><span>KI-gestützte Sicherheit</span></div>
                      <div className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5"/><span>80% Zeitersparnis</span></div>
                      <div className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5"/><span>Experten on-demand</span></div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white/50 border-[#39B37B]/20">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <Users className="h-6 w-6 text-[#39B37B]" />
                      <p className="font-bold text-gray-700">Externe DSBs</p>
                    </div>
                    <div className="space-y-1.5 text-sm">
                      <div className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5"/><span>Zentrales Dashboard</span></div>
                      <div className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5"/><span>Effizient skalieren</span></div>
                      <div className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5"/><span>Routine automatisiert</span></div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="col-span-2 text-center p-4 bg-white rounded-lg border border-[#39B37B]/20">
                   <p className="font-bold text-[#39B37B]">Ergebnis</p>
                   <div className="flex items-center justify-center gap-4 mt-2">
                      <div className="flex items-center gap-1.5"><Sparkles className="h-4 w-4"/><span>Audit-ready in Min.</span></div>
                      <div className="flex items-center gap-1.5"><FileCheck className="h-4 w-4"/><span>99,9% Genauigkeit</span></div>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center p-4 bg-gradient-to-r from-transparent via-[#e24e1b]/10 to-transparent rounded-2xl">
          <BrainCircuit className="h-6 w-6 text-[#e24e1b]"/>
          <p className="ml-3 text-lg text-center text-[#232323]"><span className="font-bold">Das Herzstück:</span> Ein KI-Kopilot, der Routine automatisiert und mit dem <span className="text-[#39B37B] font-semibold">Lawyer-in-the-Loop</span>-Netzwerk für Expertenwissen sorgt.</p>
        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV7;
