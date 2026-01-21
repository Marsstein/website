import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, CheckCircle2, XCircle, ShieldCheck, AreaChart, FileCog, FileWarning, Minus } from 'lucide-react';

const FunktionDeckV17: React.FC = () => {
  const features = [
    {
      name: "VVT & TOMs erstellen",
      old_way: "Manuell in Word/Excel",
      icon: <FileWarning className="h-5 w-5 text-red-500" />,
      internal: "Automatisiert & geführt",
      external: "Mandanten-übergreifend"
    },
    {
      name: "Risikoanalysen (DSFA)",
      old_way: "Subjektive Schätzungen",
      icon: <XCircle className="h-5 w-5 text-red-500" />,
      internal: "KI-gestütztes Scoring",
      external: "Standardisierte Berichte"
    },
    {
      name: "Rechtsfragen klären",
      old_way: "Zeitintensive Recherche",
      icon: <XCircle className="h-5 w-5 text-red-500" />,
      internal: "Experten-Netzwerk (LITL)",
      external: "Als Experte auftreten"
    },
    {
      name: "Mandanten verwalten",
      old_way: "Excel-Listen & E-Mails",
      icon: <XCircle className="h-5 w-5 text-red-500" />,
      internal: null,
      external: "Zentrales Multi-Client Dashboard"
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col">
        <header className="text-center mb-6">
          <p className="font-semibold text-[#e24e1b]">Die Lösungs-Matrix</p>
          <h1 className="text-4xl font-bold text-[#232323]">Eine Plattform, die Kernaufgaben neu definiert</h1>
          <p className="text-lg text-[#474747] mt-2">Wir lösen die fundamentalen Probleme für beide DSB-Typen besser als der Status Quo.</p>
        </header>

        <div className="flex-grow">
          <table className="w-full h-full border-collapse">
            <thead>
              <tr className="text-left">
                <th className="p-4 font-bold text-lg w-[25%]">Kernaufgabe / Job-to-be-Done</th>
                <th className="p-4 font-bold text-lg text-center text-red-500 w-[20%]">Status Quo (Manuell)</th>
                <th className="p-4 font-bold text-lg text-center text-[#e24e1b] w-[27.5%]">Marsstein für Interne DSBs</th>
                <th className="p-4 font-bold text-lg text-center text-[#474747] w-[27.5%]">Marsstein für Externe DSBs</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-t-2 border-gray-100">
                  <td className="p-4 font-semibold text-gray-800 align-top">{feature.name}</td>
                  <td className="p-4 text-center align-top">
                    <div className="flex items-center justify-center gap-2 text-gray-500">
                      {feature.icon}
                      <span>{feature.old_way}</span>
                    </div>
                  </td>
                  <td className="p-4 align-top">
                    {feature.internal ? (
                      <Card className="bg-[#e24e1b]/5 border-[#e24e1b]/20 h-full">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2 font-semibold text-[#e24e1b]">
                            <CheckCircle2 className="h-5 w-5" />
                            <span>{feature.internal}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                       <div className="flex items-center justify-center h-full text-gray-400">
                         <Minus className="h-5 w-5"/>
                         <span className="ml-2 text-sm">Nicht relevant</span>
                       </div>
                    )}
                  </td>
                  <td className="p-4 align-top">
                     <Card className="bg-[#474747]/5 border-[#474747]/20 h-full">
                        <CardContent className="p-3">
                          <div className="flex items-center gap-2 font-semibold text-[#474747]">
                            <CheckCircle2 className="h-5 w-5" />
                            <span>{feature.external}</span>
                          </div>
                        </CardContent>
                      </Card>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FunktionDeckV17;
