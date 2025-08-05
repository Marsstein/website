import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { ScrollTransformationOptimized } from '@/components/ScrollTransformationOptimized';
import { DACHCompliance } from '@/components/DACHCompliance';

const TestOptimized: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <ScrollTransformationOptimized />
        <DACHCompliance />
      </main>
      <Footer />
    </div>
  );
};

export default TestOptimized;