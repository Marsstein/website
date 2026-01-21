import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building, Plus, ChevronsRight, Target } from 'lucide-react';

const TamDeckV5: React.FC = () => {
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
        className="aspect-[16/9] w-full max-w-7xl bg-white rounded-2xl shadow-large p-12 flex flex-col justify-between"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <header className="text-center">
          <h1 className="text-4xl font-bold text-[#232323]">Unlocking the German DPO Market</h1>
          <p className="text-lg text-[#474747]">A Story of Market Opportunity</p>
        </header>

        <main className="flex items-center justify-center">
            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.5 } }} className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-[#F5F6F8] rounded-full flex items-center justify-center">
                    <Building className="h-16 w-16 text-[#e24e1b]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#232323] mt-4">{internalDpoCount.toLocaleString('de-DE')} DPOs</h2>
                <p className="text-lg text-[#474747]">Internal DPOs</p>
                <p className="text-4xl font-bold text-[#e24e1b] mt-2">{formatCurrency(internalDpoTam)}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.6, duration: 0.5 } }} className="mx-8">
                <Plus className="h-12 w-12 text-gray-300" />
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1, transition: { delay: 0.4, duration: 0.5 } }} className="flex flex-col items-center text-center">
                <div className="w-32 h-32 bg-[#F5F6F8] rounded-full flex items-center justify-center">
                    <Users className="h-16 w-16 text-[#474747]" />
                </div>
                <h2 className="text-2xl font-semibold text-[#232323] mt-4">{externalDpoProCount.toLocaleString('de-DE')} Pros & {externalDpoAgencyCount.toLocaleString('de-DE')} Agencies</h2>
                <p className="text-lg text-[#474747]">External DPOs</p>
                <p className="text-4xl font-bold text-[#474747] mt-2">{formatCurrency(externalDpoTotalTam)}</p>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.5 } }} className="mx-8">
                <ChevronsRight className="h-12 w-12 text-gray-300" />
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 1.2 }} animate={{ opacity: 1, scale: 1, transition: { delay: 1, duration: 0.5 } }} className="flex flex-col items-center text-center">
                <div className="w-48 h-48 bg-gradient-to-br from-[#e24e1b] to-[#ff6b3d] rounded-full flex flex-col items-center justify-center text-white shadow-large">
                    <Target className="h-16 w-16" />
                </div>
                <h2 className="text-3xl font-bold text-[#232323] mt-4">Total Addressable Market</h2>
                <p className="text-7xl font-bold bg-gradient-to-r from-[#e24e1b] to-[#ff6b3d] bg-clip-text text-transparent mt-2">{formatCurrency(totalTam)}</p>
            </motion.div>
        </main>
        
        <footer className="text-center">
            <p className="text-sm text-gray-400">
                TAM is calculated based on estimated company counts and Marsstein's pricing tiers for Internal and External DPO software.
            </p>
        </footer>
      </div>
    </div>
  );
};

export default TamDeckV5;
