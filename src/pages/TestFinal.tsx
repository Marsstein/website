import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ScrollTransformationFinal } from '@/components/ScrollTransformationFinal';
import { DACHCompliance } from '@/components/DACHCompliance';

const TestFinal: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <ScrollTransformationFinal />
        <DACHCompliance />
      </main>
      <Footer />
    </div>
  );
};

export default TestFinal;