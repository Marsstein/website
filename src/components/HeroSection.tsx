import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const rotatingTexts = ['DSGVO', 'ISO 27001', 'EU AI Act', 'NIS2'];

  useEffect(() => {
    const currentWord = rotatingTexts[currentText];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText.length < currentWord.length) {
          setDisplayedText(currentWord.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentText((prev) => (prev + 1) % rotatingTexts.length);
        } else {
          setDisplayedText(displayedText.slice(0, -1));
        }
      }
    }, isDeleting ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentText]);

  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
              Marsstein
            </h1>
            <div className="h-16 flex items-center justify-center">
              <p className="text-2xl sm:text-3xl text-gray-700">
                <span className="text-[#e24e1b] font-semibold">{displayedText}</span>
                <span className="text-[#e24e1b] animate-pulse">|</span>
                <span className="ml-2 text-gray-600">Compliance automatisiert</span>
              </p>
            </div>
          </div>

          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Die intelligente Compliance-Plattform für moderne Unternehmen.
            Automatisieren Sie Ihre Compliance-Prozesse und konzentrieren Sie sich auf Ihr Kerngeschäft.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/dsgvo-compliance-software"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-[#e24e1b] rounded-lg hover:bg-[#d44519] transition-colors shadow-sm"
            >
              Kostenlos testen
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/preise"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Preise
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="text-[#e24e1b]" size={18} />
              <span>14 Tage kostenlos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-[#e24e1b]" size={18} />
              <span>Keine Kreditkarte</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-[#e24e1b]" size={18} />
              <span>Setup in 2 Minuten</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
