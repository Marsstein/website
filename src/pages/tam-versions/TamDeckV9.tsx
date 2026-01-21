import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Building, TrendingUp, ArrowRight, ArrowLeft, Zap } from 'lucide-react';

const TamDeckV9: React.FC = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value / 1000000) + ' Mio.';
  };

  // Interne DSB - 3 Segmente nach Komplexität
  const smeSimpleCount = 100000; // KMU einfach - nur Software (INTERN)
  const smeComplexCount = 50000; // KMU komplex - brauchen externen DSB (PROFESSIONAL)
  const enterpriseCount = 20000; // Großkonzerne (ENTERPRISE)
  const totalInternalCount = smeSimpleCount + smeComplexCount + enterpriseCount;

  // Externe DSB
  const agencyCount = 2000; // Agenturen/Kanzleien - Listflix-Datenbank, BvD-Mitglieder
  const freelancerCount = 8000; // Freelancer - Hochrechnung aus BvD
  const totalExternalCount = agencyCount + freelancerCount;

  // TAM Berechnung - Preise nach Paketen
  const smeSimplePrice = 49; // INTERN Paket
  const smeComplexPrice = 199; // PROFESSIONAL Paket
  const enterprisePrice = 449; // ENTERPRISE Paket
  const agencyPrice = 349;
  const freelancerPrice = 149;

  const smeSimpleTam = smeSimpleCount * smeSimplePrice * 12;
  const smeComplexTam = smeComplexCount * smeComplexPrice * 12;
  const enterpriseTam = enterpriseCount * enterprisePrice * 12;
  const totalInternalTam = smeSimpleTam + smeComplexTam + enterpriseTam;

  const agencyTam = agencyCount * agencyPrice * 12;
  const freelancerTam = freelancerCount * freelancerPrice * 12;
  const totalExternalTam = agencyTam + freelancerTam;

  const totalTam = totalInternalTam + totalExternalTam;

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div
        className="aspect-[16/9] w-full max-w-7xl bg-white p-12 flex flex-col gap-6"
      >
        <header>
          <p className="font-semibold text-[#e24e1b]">Marktpotenzial (TAM)</p>
          <h1 className="text-4xl font-bold text-[#232323]">Der deutsche Datenschutzmarkt: Eine Detailanalyse</h1>
        </header>

        {/* Top Section: Total TAM */}
        <Card className="bg-[#F5F6F8] border-0 shadow-none">
          <CardContent className="p-6 flex items-center justify-between">
            <div>
              <p className="text-lg font-semibold text-[#474747]">Gesamtmarktpotenzial (Jährlich)</p>
              <p className="text-7xl font-bold text-[#232323]">{formatCurrency(totalTam)}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end gap-2 text-[#39B37B]">
                <TrendingUp className="h-8 w-8" />
                <span className="text-2xl font-semibold">Hohes Wachstumspotenzial</span>
              </div>
              <p className="text-md text-[#474747] mt-1">
                Basierend auf {(totalInternalCount + totalExternalCount).toLocaleString('de-DE')} potenziellen Akteuren
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Section: Market Segments with Connection */}
        <main className="flex-grow grid grid-cols-[1fr_auto_1fr] gap-6 items-center">
          {/* Left Card: Interne DSB */}
          <Card className="h-full bg-[#F5F6F8] border-0 shadow-none flex flex-col">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <Building className="h-8 w-8 text-[#e24e1b]" />
                <div>
                  <CardTitle className="text-2xl font-bold text-[#232323]">Interne DSB</CardTitle>
                  <p className="text-lg font-semibold text-[#e24e1b]">{formatCurrency(totalInternalTam)}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-around gap-2">
              <div>
                <div className="flex justify-between items-baseline">
                  <p className="text-md font-semibold text-[#474747]">KMU (einfach)</p>
                  <p className="text-xs text-[#e24e1b] font-medium">INTERN · {smeSimplePrice}€/Mo</p>
                </div>
                <p className="text-xs text-gray-500">{smeSimpleCount.toLocaleString('de-DE')} Unternehmen</p>
                <div
                  className="h-6 bg-[#e24e1b] rounded mt-1 flex items-center justify-end pr-2"
                  style={{ width: `${(smeSimpleTam / totalInternalTam) * 100}%` }}
                >
                  <span className="text-xs text-white font-semibold whitespace-nowrap">{formatCurrency(smeSimpleTam)}</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <p className="text-md font-semibold text-[#474747]">KMU (komplex)</p>
                  <p className="text-xs text-[#e24e1b] font-medium">PROFESSIONAL · {smeComplexPrice}€/Mo</p>
                </div>
                <p className="text-xs text-gray-500">{smeComplexCount.toLocaleString('de-DE')} Unternehmen</p>
                <div
                  className="h-6 bg-[#e24e1b] rounded mt-1 flex items-center justify-end pr-2"
                  style={{ width: `${(smeComplexTam / totalInternalTam) * 100}%` }}
                >
                  <span className="text-xs text-white font-semibold whitespace-nowrap">{formatCurrency(smeComplexTam)}</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <p className="text-md font-semibold text-[#474747]">Großkonzerne</p>
                  <p className="text-xs text-[#e24e1b] font-medium">ENTERPRISE · {enterprisePrice}€/Mo</p>
                </div>
                <p className="text-xs text-gray-500">{enterpriseCount.toLocaleString('de-DE')} Unternehmen</p>
                <div
                  className="h-6 bg-[#e24e1b] rounded mt-1 flex items-center justify-end pr-2"
                  style={{ width: `${(enterpriseTam / totalInternalTam) * 100}%` }}
                >
                  <span className="text-xs text-white font-semibold whitespace-nowrap">{formatCurrency(enterpriseTam)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Center Connection */}
          <div className="flex flex-col items-center justify-center h-full text-center gap-3">
            <div className="flex flex-col items-center">
                <p className="text-xs text-gray-500 mb-1">Optional bei Bedarf</p>
                <ArrowRight className="h-10 w-10 text-gray-400" />
            </div>
            <div className="p-4 bg-[#F5F6F8] rounded-full border border-gray-200 z-10">
                <Zap className="h-8 w-8 text-[#e24e1b]" />
            </div>
            <div className="flex flex-col items-center">
                <p className="text-xs text-[#e24e1b] font-semibold">Lawyer-in-the-Loop</p>
                <ArrowLeft className="h-10 w-10 text-gray-400" />
                <p className="text-xs text-gray-500 mt-1">Neue Mandanten</p>
            </div>
          </div>

          {/* Right Card: Externe DSB */}
          <Card className="h-full bg-[#F5F6F8] border-0 shadow-none flex flex-col">
            <CardHeader className="pb-2">
               <div className="flex items-center gap-3">
                <Users className="h-8 w-8 text-[#474747]" />
                <div>
                  <CardTitle className="text-2xl font-bold text-[#232323]">Externe DSB</CardTitle>
                  <p className="text-lg font-semibold text-[#474747]">{formatCurrency(totalExternalTam)}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow flex flex-col justify-around gap-3">
              <div>
                <div className="flex justify-between items-baseline">
                  <p className="text-md font-semibold text-[#474747]">Agenturen/Kanzleien</p>
                  <p className="text-xs text-[#474747] font-medium">AGENCY · {agencyPrice}€/Mo</p>
                </div>
                <p className="text-xs text-gray-500">{agencyCount.toLocaleString('de-DE')} Unternehmen</p>
                <div
                  className="h-6 bg-[#474747] rounded mt-1 flex items-center justify-end pr-2"
                  style={{ width: `${(agencyTam / totalExternalTam) * 100}%` }}
                >
                  <span className="text-xs text-white font-semibold whitespace-nowrap">{formatCurrency(agencyTam)}</span>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <p className="text-md font-semibold text-[#474747]">Freelancer</p>
                  <p className="text-xs text-[#474747] font-medium">PROFESSIONAL · {freelancerPrice}€/Mo</p>
                </div>
                <p className="text-xs text-gray-500">{freelancerCount.toLocaleString('de-DE')} Einzelpersonen</p>
                <div
                  className="h-6 bg-[#474747] rounded mt-1 flex items-center justify-end pr-2"
                  style={{ width: `${(freelancerTam / totalExternalTam) * 100}%` }}
                >
                  <span className="text-xs text-white font-semibold whitespace-nowrap">{formatCurrency(freelancerTam)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  );
};

export default TamDeckV9;
