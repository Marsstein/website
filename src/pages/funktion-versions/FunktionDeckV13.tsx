import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, CheckCircle2, FileCheck, Zap, Repeat, Lightbulb, FileWarning, CalendarClock, ShieldCheck, ArrowRight } from 'lucide-react';

const FunktionDeckV13: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col">
        <header className="text-center mb-6">
          <p className="font-semibold text-[#e24e1b]">Die Transformation</p>
          <h1 className="text-4xl font-bold text-[#232323]">Vom Problem zur Plattform</h1>
          <p className="text-lg text-[#474747] mt-2">Marsstein AI übersetzt die typischen Schmerzpunkte von DSBs direkt in intelligente Software-Lösungen.</p>
        </header>

        <div className="flex-grow grid grid-cols-[1fr_auto_1.5fr_auto_1fr] gap-4 items-stretch">
          
          {/* Column 1: The Problems */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-center text-red-500">Die Schmerzpunkte</h2>
            <Card className="bg-red-500/5 border-red-500/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-1"><FileWarning className="h-5 w-5 text-red-500" /> <p className="font-semibold">Excel-Chaos & Doku-Lücken</p></div>
                <p className="text-xs text-gray-600">Manuelle Listen, inkonsistente Versionen, hoher Suchaufwand.</p>
              </CardContent>
            </Card>
            <Card className="bg-red-500/5 border-red-500/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-1"><CalendarClock className="h-5 w-5 text-red-500" /> <p className="font-semibold">Verpasste Fristen & Updates</p></div>
                <p className="text-xs text-gray-600">Gesetzesänderungen und Löschfristen manuell im Blick behalten.</p>
              </CardContent>
            </Card>
            <Card className="bg-red-500/5 border-red-500/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-1"><Users className="h-5 w-5 text-red-500" /> <p className="font-semibold">Fehlende Expertise</p></div>
                <p className="text-xs text-gray-600">Interne DSBs stoßen bei komplexen Fragen an ihre Grenzen.</p>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex items-center justify-center"><ArrowRight className="h-8 w-8 text-gray-300"/></div>

          {/* Column 2: The Engine */}
          <Card className="bg-gradient-to-b from-[#232323] to-[#1a1a1a] flex flex-col items-center justify-center text-center shadow-2xl">
            <CardContent className="p-6">
              <div className="p-4 bg-[#e24e1b] rounded-2xl mb-3 inline-block">
                <Bot className="h-10 w-10 text-white" />
              </div>
              <p className="text-3xl font-bold text-white">Marsstein AI</p>
              <p className="text-sm text-gray-400 mb-4">Der Transformations-Motor</p>
              <p className="text-sm text-white bg-white/10 p-3 rounded-lg">Unsere KI analysiert die Probleme und generiert gezielte, automatisierte Lösungen.</p>
            </CardContent>
          </Card>
          
          <div className="flex items-center justify-center"><ArrowRight className="h-8 w-8 text-gray-300"/></div>

          {/* Column 3: The Solutions */}
           <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-center text-[#39B37B]">Die Plattform-Lösungen</h2>
            <Card className="bg-[#39B37B]/5 border-[#39B37B]/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-1"><CheckCircle2 className="h-5 w-5 text-green-600" /> <p className="font-semibold">Zentrales VVT- & TOM-Modul</p></div>
                <p className="text-xs text-gray-600">Ein Ort für alle Dokumente, immer aktuell, mit 1-Klick-Export.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#39B37B]/5 border-[#39B37B]/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-1"><CheckCircle2 className="h-5 w-5 text-green-600" /> <p className="font-semibold">Automatisiertes Fristen-Tracking</p></div>
                <p className="text-xs text-gray-600">Nie wieder eine Löschfrist oder Gesetzesänderung verpassen.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#39B37B]/5 border-[#39B37B]/20">
              <CardContent className="p-4">
                <div className="flex items-center gap-2 mb-1"><CheckCircle2 className="h-5 w-5 text-green-600" /> <p className="font-semibold">Lawyer-in-the-Loop</p></div>
                <p className="text-xs text-gray-600">Zugang zu einem Netzwerk geprüfter Experten bei Bedarf.</p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV13;
