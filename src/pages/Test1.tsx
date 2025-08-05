import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ScrollTransformationTest1 } from '@/components/ScrollTransformationTest1';
import { DACHCompliance } from '@/components/DACHCompliance';

const Test1: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <ScrollTransformationTest1 />
        <DACHCompliance />
      </main>
      <Footer />
    </div>
  );
};

export default Test1;