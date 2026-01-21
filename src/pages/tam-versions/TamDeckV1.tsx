import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building, TrendingUp, Target } from 'lucide-react';

const TamDeckV1: React.FC = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value / 1000000) + 'M';
  };

  const internalDpoCount = 170000;
  const externalDpoProCount = 8000;
  const externalDpoAgencyCount = 2000;

  const internalDpoTam = internalDpoCount * 49 * 12;
  const externalDpoProTam = externalDpoProCount * 149 * 12;
  const externalDpoAgencyTam = externalDpoAgencyCount * 349 * 12;
  const externalDpoTotalTam = externalDpoProTam + externalDpoAgencyTam;
  const totalTam = internalDpoTam + externalDpoTotalTam;

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F6F8] p-4 font-sans">
      <div
        className="aspect-[16/9] w-full max-w-7xl bg-white rounded-2xl shadow-large p-12 flex flex-col"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <header className="flex items-center justify-between pb-6 border-b border-gray-200">
          <div>
            <p className="text-sm font-semibold text-[#e24e1b]">Total Addressable Market (TAM)</p>
            <h1 className="text-4xl font-bold text-[#232323]">German DPO Market Potential</h1>
          </div>
          <img src="/JLogoMarsstein.svg" alt="Marsstein Logo" className="h-12" />
        </header>

        <main className="flex-grow flex items-center justify-around gap-12 py-8">
          <Card className="w-1/2 bg-transparent border-none shadow-none">
            <CardContent className="text-center p-0">
              <Building className="h-16 w-16 mx-auto text-[#474747]" />
              <h2 className="text-2xl font-semibold text-[#232323] mt-4">Internal DPOs</h2>
              <p className="text-lg text-[#474747]">~{internalDpoCount.toLocaleString('de-DE')} DPOs</p>
              <p className="text-6xl font-bold text-[#232323] mt-6">{formatCurrency(internalDpoTam)}</p>
              <p className="text-md text-[#474747]">@ €49/mo</p>
            </CardContent>
          </Card>

          <div className="w-px h-48 bg-gray-200" />

          <Card className="w-1/2 bg-transparent border-none shadow-none">
            <CardContent className="text-center p-0">
              <Users className="h-16 w-16 mx-auto text-[#474747]" />
              <h2 className="text-2xl font-semibold text-[#232323] mt-4">External DPOs</h2>
              <p className="text-lg text-[#474747]">~{externalDpoProCount.toLocaleString('de-DE')} Pros & {externalDpoAgencyCount.toLocaleString('de-DE')} Agencies</p>
              <p className="text-6xl font-bold text-[#232323] mt-6">{formatCurrency(externalDpoTotalTam)}</p>
              <p className="text-md text-[#474747]">@ €149-€349/mo</p>
            </CardContent>
          </Card>
        </main>

        <footer className="mt-auto pt-8 border-t-2 border-[#e24e1b]">
          <div className="flex items-center justify-center gap-6 text-center">
            <TrendingUp className="h-12 w-12 text-[#e24e1b]" />
            <div>
              <p className="text-xl font-semibold text-[#474747]">Total Estimated Annual Market</p>
              <p className="text-6xl font-bold text-[#e24e1b]">{formatCurrency(totalTam)}</p>
            </div>
            <Target className="h-12 w-12 text-[#e24e1b]" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default TamDeckV1;
