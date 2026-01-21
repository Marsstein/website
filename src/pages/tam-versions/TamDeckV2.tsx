import React from 'react';
import { motion } from 'framer-motion';
import { Users, Building, TrendingUp, Target } from 'lucide-react';

const TamDeckV2: React.FC = () => {
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
  
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#111] p-4 font-sans">
      <div
        className="aspect-[16/9] w-full max-w-7xl bg-gradient-hero rounded-3xl shadow-extra p-12 flex flex-col relative overflow-hidden"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-5" />

        <header className="flex items-center justify-between z-10">
          <div>
            <h1 className="text-4xl font-bold text-white">Total Addressable Market</h1>
            <p className="text-lg text-gray-400">German DPO Sector Analysis</p>
          </div>
          <motion.div
            animate={{ rotate: 360, transition: { duration: 20, loop: Infinity, ease: 'linear' } }}
            className="absolute top-[-50px] right-[-50px] w-48 h-48 bg-gradient-to-br from-[#e24e1b]/20 to-transparent rounded-full"
          />
        </header>

        <main className="flex-grow flex items-center justify-center gap-8 z-10">
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="w-1/3 h-3/4 bg-white/5 backdrop-filter backdrop-blur-md rounded-2xl border border-white/10 p-8 flex flex-col justify-center items-center text-center shadow-medium transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <Building className="h-12 w-12 text-[#e24e1b]" />
            <h2 className="text-2xl font-semibold text-white mt-4">Internal DPOs</h2>
            <p className="text-5xl font-bold text-white mt-4">{formatCurrency(internalDpoTam)}</p>
            <p className="text-md text-gray-400 mt-2">~{internalDpoCount.toLocaleString('de-DE')} DPOs @ €49/mo</p>
          </motion.div>

          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            className="w-1/3 h-3/4 bg-white/5 backdrop-filter backdrop-blur-md rounded-2xl border border-white/10 p-8 flex flex-col justify-center items-center text-center shadow-medium transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <Users className="h-12 w-12 text-[#e24e1b]" />
            <h2 className="text-2xl font-semibold text-white mt-4">External DPOs</h2>
            <p className="text-5xl font-bold text-white mt-4">{formatCurrency(externalDpoTotalTam)}</p>
            <p className="text-md text-gray-400 mt-2">~{externalDpoProCount.toLocaleString('de-DE')} Pros & {externalDpoAgencyCount.toLocaleString('de-DE')} Agencies @ €149+/mo</p>
          </motion.div>
        </main>

        <footer className="z-10 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.5, duration: 0.8 } }}
                className="inline-block bg-gradient-primary p-4 rounded-xl"
            >
                <div className="flex items-center gap-4">
                    <TrendingUp className="h-10 w-10 text-white" />
                    <div>
                        <p className="text-lg text-white/80">Total Annual TAM</p>
                        <p className="text-5xl font-bold text-white">{formatCurrency(totalTam)}</p>
                    </div>
                </div>
            </motion.div>
        </footer>
      </div>
    </div>
  );
};

export default TamDeckV2;

// Add this CSS to your global stylesheet for the grid pattern
/*
.bg-grid-pattern {
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px);
  background-size: 40px 40px;
}
*/
