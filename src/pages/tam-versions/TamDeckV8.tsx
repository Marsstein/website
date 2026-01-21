import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building, TrendingUp, Plus, ChevronsRight } from 'lucide-react';

const TamDeckV8: React.FC = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4 font-sans">
      <div
        className="aspect-[16/9] w-full max-w-7xl bg-white rounded-2xl shadow-large p-12 flex flex-col justify-center"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#232323]">Aufschlüsselung des TAM: Der deutsche DSB-Markt</h1>
          <p className="text-lg text-[#474747]">Vom Einzel-DSB zum Gesamtmarktpotenzial</p>
        </header>

        <main className="flex items-center justify-center w-full">
          <motion.div custom={1} variants={itemVariants} initial="hidden" animate="visible" className="flex flex-col items-center">
            <Card className="bg-[#F5F6F8] border-gray-200 w-80 text-center p-6">
              <CardContent className="p-0">
                <Building className="h-12 w-12 mx-auto text-[#e24e1b]" />
                <h2 className="text-xl font-bold text-[#232323] mt-4">Interne DSB</h2>
                <p className="text-lg text-[#474747]">{internalDpoCount.toLocaleString('de-DE')}</p>
                <p className="text-4xl font-bold text-[#e24e1b] mt-4">{formatCurrency(internalDpoTam)}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div custom={2} variants={itemVariants} initial="hidden" animate="visible">
            <Plus className="h-12 w-12 text-gray-300 mx-8" />
          </motion.div>

          <motion.div custom={3} variants={itemVariants} initial="hidden" animate="visible" className="flex flex-col items-center">
            <Card className="bg-[#F5F6F8] border-gray-200 w-80 text-center p-6">
              <CardContent className="p-0">
                <Users className="h-12 w-12 mx-auto text-[#474747]" />
                <h2 className="text-xl font-bold text-[#232323] mt-4">Externe DSB</h2>
                <p className="text-lg text-[#474747]">{ (externalDpoProCount + externalDpoAgencyCount).toLocaleString('de-DE')}</p>
                <p className="text-4xl font-bold text-[#474747] mt-4">{formatCurrency(externalDpoTotalTam)}</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div custom={4} variants={itemVariants} initial="hidden" animate="visible">
            <ChevronsRight className="h-12 w-12 text-gray-300 mx-8" />
          </motion.div>

          <motion.div custom={5} variants={itemVariants} initial="hidden" animate="visible" className="flex flex-col items-center text-center">
             <div className="w-64 h-64 rounded-full bg-gradient-to-br from-[#e24e1b] to-[#f97316] flex flex-col items-center justify-center text-white shadow-extra p-4">
                 <TrendingUp className="h-12 w-12" />
                 <h2 className="text-xl font-bold mt-2">Gesamt-TAM</h2>
                 <p className="text-5xl font-bold mt-2">{formatCurrency(totalTam)}</p>
             </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default TamDeckV8;
