import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, XCircle, Minus, Users, Zap, Target, Euro } from 'lucide-react';

const CompetitionDeckV1: React.FC = () => {
  const competitors = [
    {
      name: 'Marsstein',
      highlight: true,
      target: 'KMU & DSBs',
      price: '€€',
      priceNote: 'ab 29€/Mo',
      selfService: true,
      lawyerInLoop: true,
      kmuTauglich: true,
      germanMarket: true,
      noConsulting: true,
    },
    {
      name: 'Kertos',
      highlight: false,
      target: 'Startups & Mittelstand',
      price: '€€€',
      priceNote: 'auf Anfrage',
      selfService: true,
      lawyerInLoop: false,
      kmuTauglich: false,
      germanMarket: true,
      noConsulting: false,
    },
    {
      name: 'OneTrust',
      highlight: false,
      target: 'Enterprise',
      price: '€€€€€',
      priceNote: 'ab 10k+/Jahr',
      selfService: false,
      lawyerInLoop: false,
      kmuTauglich: false,
      germanMarket: false,
      noConsulting: false,
    },
    {
      name: 'Vanta',
      highlight: false,
      target: 'Startups & Enterprise',
      price: '€€€€',
      priceNote: 'ab 5k+/Jahr',
      selfService: true,
      lawyerInLoop: false,
      kmuTauglich: false,
      germanMarket: false,
      noConsulting: false,
    },
    {
      name: 'caralegal',
      highlight: false,
      target: 'Mittelstand & Enterprise',
      price: '€€€',
      priceNote: 'auf Anfrage',
      selfService: true,
      lawyerInLoop: false,
      kmuTauglich: false,
      germanMarket: true,
      noConsulting: false,
    },
    {
      name: 'Proliance 360',
      highlight: false,
      target: 'Mittelstand',
      price: '€€€',
      priceNote: 'auf Anfrage',
      selfService: true,
      lawyerInLoop: false,
      kmuTauglich: false,
      germanMarket: true,
      noConsulting: false,
    },
  ];

  const renderCheck = (value: boolean) => {
    if (value) {
      return <CheckCircle2 className="h-5 w-5 text-[#39B37B]" />;
    }
    return <XCircle className="h-5 w-5 text-red-400" />;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col gap-5">
        <header>
          <p className="font-semibold text-[#e24e1b]">Wettbewerb</p>
          <h1 className="text-4xl font-bold text-[#232323]">Unsere Positionierung im Markt</h1>
        </header>

        <Card className="bg-[#F5F6F8] border-0 shadow-none">
          <CardContent className="p-5 flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-[#474747]">Unser Differenzierungsmerkmal</p>
              <p className="text-2xl font-bold text-[#232323]">Lawyer-in-the-Loop: Software + Expertenunterstützung bei Bedarf</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 text-[#e24e1b]">
                <Zap className="h-7 w-7" />
                <span className="text-xl font-semibold">Einzigartiges Modell</span>
              </div>
              <p className="text-base text-[#474747] mt-1">
                Kein Wettbewerber bietet On-Demand Rechtsexpertise
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="flex-grow overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 px-4 text-sm font-semibold text-[#474747]">Anbieter</th>
                <th className="text-center py-3 px-2 text-sm font-semibold text-[#474747]">
                  <div className="flex items-center justify-center gap-1">
                    <Target className="h-4 w-4" />
                    <span>Zielgruppe</span>
                  </div>
                </th>
                <th className="text-center py-3 px-2 text-sm font-semibold text-[#474747]">
                  <div className="flex items-center justify-center gap-1">
                    <Euro className="h-4 w-4" />
                    <span>Preis</span>
                  </div>
                </th>
                <th className="text-center py-3 px-2 text-sm font-semibold text-[#474747]">Self-Service</th>
                <th className="text-center py-3 px-2 text-sm font-semibold text-[#e24e1b]">Lawyer-in-Loop</th>
                <th className="text-center py-3 px-2 text-sm font-semibold text-[#474747]">KMU-tauglich</th>
                <th className="text-center py-3 px-2 text-sm font-semibold text-[#474747]">DE-Markt</th>
                <th className="text-center py-3 px-2 text-sm font-semibold text-[#474747]">Ohne Consulting</th>
              </tr>
            </thead>
            <tbody>
              {competitors.map((comp) => (
                <tr
                  key={comp.name}
                  className={`border-b border-gray-100 ${comp.highlight ? 'bg-[#e24e1b]/5' : ''}`}
                >
                  <td className="py-3 px-4">
                    <p className={`text-base font-semibold ${comp.highlight ? 'text-[#e24e1b]' : 'text-[#232323]'}`}>
                      {comp.name}
                    </p>
                  </td>
                  <td className="text-center py-3 px-2">
                    <p className="text-sm text-[#474747]">{comp.target}</p>
                  </td>
                  <td className="text-center py-3 px-2">
                    <p className={`text-sm font-semibold ${comp.highlight ? 'text-[#e24e1b]' : 'text-[#474747]'}`}>
                      {comp.price}
                    </p>
                    <p className="text-xs text-gray-400">{comp.priceNote}</p>
                  </td>
                  <td className="text-center py-3 px-2">
                    <div className="flex justify-center">{renderCheck(comp.selfService)}</div>
                  </td>
                  <td className="text-center py-3 px-2 bg-[#e24e1b]/5">
                    <div className="flex justify-center">{renderCheck(comp.lawyerInLoop)}</div>
                  </td>
                  <td className="text-center py-3 px-2">
                    <div className="flex justify-center">{renderCheck(comp.kmuTauglich)}</div>
                  </td>
                  <td className="text-center py-3 px-2">
                    <div className="flex justify-center">{renderCheck(comp.germanMarket)}</div>
                  </td>
                  <td className="text-center py-3 px-2">
                    <div className="flex justify-center">{renderCheck(comp.noConsulting)}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-2">
          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Euro className="h-5 w-5 text-[#e24e1b]" />
                <p className="text-sm font-semibold text-[#232323]">Preisführer im KMU-Segment</p>
              </div>
              <p className="text-sm text-[#474747]">
                Ab 29€/Mo vs. 5.000€+ bei Enterprise-Lösungen – demokratisiert Datenschutz für kleine Unternehmen
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#e24e1b]/5 border-0 shadow-none">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Users className="h-5 w-5 text-[#e24e1b]" />
                <p className="text-sm font-semibold text-[#232323]">Einziger Lawyer-in-the-Loop</p>
              </div>
              <p className="text-sm text-[#474747]">
                Alle anderen: Entweder nur Software oder teures Consulting. Wir: Beides kombiniert, on-demand.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-[#F5F6F8] border-0 shadow-none">
            <CardContent className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <Target className="h-5 w-5 text-[#e24e1b]" />
                <p className="text-sm font-semibold text-[#232323]">Echte KMU-Tauglichkeit</p>
              </div>
              <p className="text-sm text-[#474747]">
                Keine komplexen Enterprise-Features – sofort nutzbar ohne Implementierungsprojekt oder Schulung
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CompetitionDeckV1;
