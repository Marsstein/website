import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building, TrendingUp } from 'lucide-react';

const TamDeckV4: React.FC = () => {
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
    <div className="flex items-center justify-center min-h-screen bg-black p-4 font-sans">
      <div
        className="aspect-[16/9] w-full max-w-7xl bg-[#1A1A1A] rounded-2xl p-12 flex flex-col justify-between"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <header>
          <h1 className="text-6xl font-bold text-white leading-tight">
            The German DPO Market is a <span className="text-[#e24e1b]">{formatCurrency(totalTam)}</span> Opportunity.
          </h1>
        </header>

        <main className="grid grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } }}
          >
            <div className="flex items-center gap-4">
              <Building className="h-10 w-10 text-white" />
              <h2 className="text-3xl font-semibold text-white">Internal DPOs</h2>
            </div>
            <p className="text-8xl font-bold text-white mt-4">{formatCurrency(internalDpoTam)}</p>
            <p className="text-2xl text-gray-400">from {internalDpoCount.toLocaleString('de-DE')} DPOs</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } }}
          >
            <div className="flex items-center gap-4">
              <Users className="h-10 w-10 text-white" />
              <h2 className="text-3xl font-semibold text-white">External DPOs</h2>
            </div>
            <p className="text-8xl font-bold text-white mt-4">{formatCurrency(externalDpoTotalTam)}</p>
            <p className="text-2xl text-gray-400">from {externalDpoProCount.toLocaleString('de-DE')} Pros & {externalDpoAgencyCount.toLocaleString('de-DE')} Agencies</p>
          </motion.div>
        </main>

        <footer className="border-t-4 border-[#e24e1b] pt-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.4 } }}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
                <TrendingUp className="h-12 w-12 text-[#e24e1b]" />
                <p className="text-3xl font-bold text-white">Total Addressable Market</p>
            </div>
            <p className="text-8xl font-bold text-[#e24e1b]">{formatCurrency(totalTam)}</p>
          </motion.div>
        </footer>
      </div>
    </div>
  );
};


export default TamDeckV4;
