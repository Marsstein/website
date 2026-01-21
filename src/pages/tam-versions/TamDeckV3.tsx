import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Users, Building, TrendingUp, PieChart } from 'lucide-react';

const TamDeckV3: React.FC = () => {
  const formatCurrency = (value: number, compact = false) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      notation: compact ? 'compact' : 'standard',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value);
  };

  const internalDpoCount = 170000;
  const externalDpoProCount = 8000;
  const externalDpoAgencyCount = 2000;

  const internalDpoTam = internalDpoCount * 49 * 12;
  const externalDpoProTam = externalDpoProCount * 149 * 12;
  const externalDpoAgencyTam = externalDpoAgencyCount * 349 * 12;
  const externalDpoTotalTam = externalDpoProTam + externalDpoAgencyTam;
  const totalTam = internalDpoTam + externalDpoTotalTam;
  const internalPercentage = (internalDpoTam / totalTam) * 100;
  const externalPercentage = 100 - internalPercentage;

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#F5F6F8] p-4 font-sans">
      <div
        className="aspect-[16/9] w-full max-w-7xl bg-white rounded-2xl shadow-large p-12 flex flex-col"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <header className="pb-6">
          <h1 className="text-4xl font-bold text-[#232323]">TAM Analysis: German DPO Market</h1>
          <p className="text-lg text-[#474747]">Data-driven projection of market potential.</p>
        </header>

        <main className="flex-grow grid grid-cols-3 grid-rows-2 gap-8">
          <Card className="col-span-2 row-span-1 bg-gradient-to-br from-[#232323] to-[#474747] text-white flex flex-col justify-center">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl text-white/80">
                <TrendingUp />
                Total Addressable Market (Annual)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-7xl font-bold text-white">{formatCurrency(totalTam, true)}</p>
              <p className="text-lg text-white/60">~€122.6 Million Projected Value</p>
            </CardContent>
          </Card>

          <Card className="col-span-1 row-span-2 flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-xl text-[#232323]">
                <PieChart />
                Market Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-center items-center gap-6">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 36 36">
                  <path
                    className="text-gray-200"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="text-[#e24e1b]"
                    strokeDasharray={`${internalPercentage}, 100`}
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold text-[#232323]">{Math.round(internalPercentage)}%</span>
                    <span className="text-sm text-[#474747]">Internal</span>
                </div>
              </div>
              <div className="w-full space-y-4">
                <div className="text-left">
                  <div className="flex justify-between mb-1">
                    <span className="text-md font-medium text-[#e24e1b]">Internal DPOs</span>
                    <span className="text-md font-medium text-[#e24e1b]">{Math.round(internalPercentage)}%</span>
                  </div>
                  <Progress value={internalPercentage} className="h-2 bg-red-100" />
                </div>
                <div className="text-left">
                  <div className="flex justify-between mb-1">
                    <span className="text-md font-medium text-[#474747]">External DPOs</span>
                    <span className="text-md font-medium text-[#474747]">{Math.round(externalPercentage)}%</span>
                  </div>
                  <Progress value={externalPercentage} className="h-2 bg-gray-300" indicatorClassName="bg-gray-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-1 row-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg text-[#232323]">
                <Building />
                Internal DPOs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-[#232323]">{formatCurrency(internalDpoTam, true)}</p>
              <p className="text-md text-[#474747]">{internalDpoCount.toLocaleString('de-DE')} DPOs</p>
            </CardContent>
          </Card>

          <Card className="col-span-1 row-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-lg text-[#232323]">
                <Users />
                External DPOs
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-[#232323]">{formatCurrency(externalDpoTotalTam, true)}</p>
              <p className="text-md text-[#474747]">{externalDpoProCount.toLocaleString('de-DE')} Pros & {externalDpoAgencyCount.toLocaleString('de-DE')} Agencies</p>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default TamDeckV3;
