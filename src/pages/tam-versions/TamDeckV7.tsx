import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Building, TrendingUp, PieChart } from 'lucide-react';

const TamDeckV7: React.FC = () => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('de-DE', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    }).format(value / 1000000) + ' Mio.';
  };

  const internalDpoCount = 170000;
  const externalDpoProCount = 8000;
  const externalDpoAgencyCount = 2000;

  const internalDpoTam = internalDpoCount * 49 * 12;
  const externalDpoTotalTam = (externalDpoProCount * 149 * 12) + (externalDpoAgencyCount * 349 * 12);
  const totalTam = internalDpoTam + externalDpoTotalTam;
  const internalPercentage = (internalDpoTam / totalTam) * 100;

  return (
    <div className="flex items-center justify-center min-h-screen bg-black p-4 font-sans">
      <div
        className="aspect-[16/9] w-full max-w-7xl bg-[#1A1A1A] rounded-2xl shadow-extra p-12 flex flex-col gap-8"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <header>
          <h1 className="text-4xl font-bold text-white">Strategische Marktanalyse (TAM)</h1>
          <p className="text-lg text-gray-400">Potenzial im deutschen Datenschutzmarkt</p>
        </header>

        <main className="flex-grow grid grid-cols-2 grid-rows-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
            <Card className="h-full bg-gradient-to-br from-[#232323] to-[#1A1A1A] border-white/10 flex flex-col justify-center">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-400">Gesamtmarktpotenzial</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-8xl font-bold bg-gradient-accent bg-clip-text text-transparent">
                  {formatCurrency(totalTam)}
                </p>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}>
            <Card className="h-full bg-[#232323] border-white/10 flex flex-col justify-center items-center">
                 <div className="relative w-40 h-40">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                    <path
                        className="text-white/10"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                    />
                    <motion.path
                        className="text-[#e24e1b]"
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        initial={{ strokeDasharray: "0, 100" }}
                        animate={{ strokeDasharray: `${internalPercentage}, 100`, transition: { duration: 1, delay: 0.5, ease: "easeOut" } }}
                    />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-4xl font-bold text-white">{Math.round(internalPercentage)}%</span>
                        <span className="text-md text-gray-400">Intern</span>
                    </div>
                </div>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } }}>
            <Card className="h-full bg-[#232323] border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-semibold text-gray-300">Interne DSB</CardTitle>
                <Building className="h-6 w-6 text-gray-500" />
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-bold text-white">{formatCurrency(internalDpoTam)}</p>
                <p className="text-md text-gray-400">{internalDpoCount.toLocaleString('de-DE')} DPOs</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } }}>
            <Card className="h-full bg-[#232323] border-white/10">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl font-semibold text-gray-300">Externe DSB</CardTitle>
                <Users className="h-6 w-6 text-gray-500" />
              </CardHeader>
              <CardContent>
                <p className="text-5xl font-bold text-white">{formatCurrency(externalDpoTotalTam)}</p>
                <p className="text-md text-gray-400">{(externalDpoProCount + externalDpoAgencyCount).toLocaleString('de-DE')} Agenturen & Freelancer</p>
              </CardContent>
            </Card>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default TamDeckV7;
