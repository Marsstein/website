import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Check, ChevronRight, ChevronLeft, Sparkles, Users, Building2,
  Shield, FileCheck, Database, Briefcase, Target, TrendingUp, Rocket, Heart, UserCheck
} from 'lucide-react';
import { cn } from '@/lib/utils';

type Answer = string | null;

interface Question {
  id: string;
  question: string;
  subtitle?: string;
  icon: React.ElementType;
  options: {
    label: string;
    sublabel?: string;
    value: string;
    icon?: React.ElementType;
    color?: string;
  }[];
}

interface PackageRecommendation {
  package: 'klein-starter' | 'starter' | 'professional' | 'enterprise' | 'neugruender' | 'gemeinnuetzig';
  score: number;
  reasons: string[];
}

const questions: Question[] = [
  {
    id: 'size',
    question: 'Wie viele Mitarbeiter hat Ihr Unternehmen?',
    subtitle: 'Inklusive Geschäftsführung und Teilzeitkräfte',
    icon: Users,
    options: [
      { label: '1-5 Personen', sublabel: 'Kleinstunternehmen', value: 'small', icon: Users, color: 'from-blue-500 to-blue-600' },
      { label: '6-50 Personen', sublabel: 'Mittelstand', value: 'medium', icon: Building2, color: 'from-purple-500 to-purple-600' },
      { label: '50+ Personen', sublabel: 'Großunternehmen', value: 'large', icon: TrendingUp, color: 'from-orange-500 to-red-600' }
    ]
  },
  {
    id: 'special',
    question: 'Trifft eine dieser Kategorien auf Sie zu?',
    subtitle: 'Wir haben spezielle Angebote für bestimmte Unternehmenstypen',
    icon: Sparkles,
    options: [
      { label: 'Kleinunternehmer', sublabel: '§19 UStG - Umsatz <€22.000', value: 'kleinunternehmer', icon: Shield, color: 'from-green-500 to-emerald-600' },
      { label: 'Neugründung', sublabel: 'Gegründet vor weniger als 2 Jahren', value: 'neugruender', icon: Rocket, color: 'from-orange-500 to-red-600' },
      { label: 'Gemeinnützig', sublabel: 'e.V., NGO mit Freistellungsbescheid', value: 'gemeinnuetzig', icon: Heart, color: 'from-pink-500 to-rose-600' },
      { label: 'Reguläres Unternehmen', sublabel: 'Keine der obigen trifft zu', value: 'regular', icon: Building2, color: 'from-gray-500 to-gray-600' }
    ]
  },
  {
    id: 'dsb',
    question: 'Benötigen Sie einen Datenschutzbeauftragten?',
    subtitle: 'Pflicht ab 20 Personen oder bei Kerntätigkeit Datenverarbeitung',
    icon: UserCheck,
    options: [
      { label: 'Ja, definitiv', sublabel: 'Wir brauchen einen externen DSB', value: 'yes', icon: Check, color: 'from-red-500 to-red-600' },
      { label: 'Unsicher', sublabel: 'Ich bin mir nicht sicher', value: 'unsure', icon: FileCheck, color: 'from-yellow-500 to-orange-500' },
      { label: 'Nein', sublabel: 'Keine DSB-Pflicht', value: 'no', icon: Shield, color: 'from-green-500 to-emerald-600' }
    ]
  },
  {
    id: 'datatype',
    question: 'Welche Art von Daten verarbeiten Sie?',
    subtitle: 'Wählen Sie die sensitivste Kategorie',
    icon: Database,
    options: [
      { label: 'Kontaktdaten', sublabel: 'Namen, E-Mail, Telefon, Website-Besucher', value: 'contact', icon: FileCheck, color: 'from-blue-500 to-blue-600' },
      { label: 'Kundendaten + E-Commerce', sublabel: 'Bestellungen, Zahlungsdaten, Kundendatenbank', value: 'commerce', icon: Briefcase, color: 'from-purple-500 to-purple-600' },
      { label: 'Sensible Daten', sublabel: 'Gesundheit, Finanzen, biometrische Daten', value: 'sensitive', icon: Shield, color: 'from-red-500 to-red-600' }
    ]
  },
  {
    id: 'b2b',
    question: 'Arbeiten Sie mit Geschäftskunden?',
    subtitle: 'B2B-Kunden prüfen oft Ihre Datenschutz-Compliance',
    icon: Briefcase,
    options: [
      { label: 'Nein, hauptsächlich B2C', sublabel: 'Privatkunden, Endverbraucher', value: 'b2c', icon: Users, color: 'from-blue-500 to-blue-600' },
      { label: 'Ja, kleine bis mittlere Unternehmen', sublabel: 'KMU, Startups, Agenturen', value: 'kmu', icon: Building2, color: 'from-purple-500 to-purple-600' },
      { label: 'Ja, Konzerne/Behörden', sublabel: 'Ausschreibungen, Enterprise-Kunden', value: 'enterprise', icon: Target, color: 'from-orange-500 to-red-600' }
    ]
  }
];

export const PackageFinder: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, Answer>>({});
  const [showResult, setShowResult] = useState(false);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });

    if (currentStep < questions.length - 1) {
      setDirection('forward');
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    } else {
      setTimeout(() => setShowResult(true), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setDirection('backward');
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
    setDirection('forward');
  };

  const calculateRecommendation = (): PackageRecommendation => {
    const reasons: string[] = [];
    let scores = {
      'klein-starter': 0,
      'starter': 0,
      'professional': 0,
      'enterprise': 0,
      'neugruender': 0,
      'gemeinnuetzig': 0
    };

    if (answers.special === 'kleinunternehmer') {
      scores['klein-starter'] = 100;
      reasons.push('Spezieller Kleinunternehmer-Tarif verfügbar');
      return { package: 'klein-starter', score: 100, reasons };
    }

    if (answers.special === 'neugruender') {
      scores['neugruender'] = 100;
      reasons.push('50% Neugründer-Rabatt für 2 Jahre');
      return { package: 'neugruender', score: 100, reasons };
    }

    if (answers.special === 'gemeinnuetzig') {
      scores['gemeinnuetzig'] = 100;
      reasons.push('78% Vereinsrabatt dauerhaft');
      return { package: 'gemeinnuetzig', score: 100, reasons };
    }

    if (answers.size === 'small') {
      scores.starter += 30;
      scores.professional += 10;
    } else if (answers.size === 'medium') {
      scores.professional += 30;
      scores.enterprise += 10;
    } else if (answers.size === 'large') {
      scores.enterprise += 40;
      reasons.push('Ihre Unternehmensgröße erfordert professionelle Lösungen');
    }

    if (answers.dsb === 'yes') {
      scores.professional += 40;
      scores.enterprise += 40;
      reasons.push('Externer Datenschutzbeauftragter inklusive');
    } else if (answers.dsb === 'unsure') {
      scores.professional += 30;
      reasons.push('Professional-Paket bietet DSB als Sicherheit');
    } else {
      scores.starter += 20;
    }

    if (answers.datatype === 'sensitive') {
      scores.enterprise += 40;
      scores.professional += 20;
      reasons.push('Sensible Daten erfordern höchste Sicherheitsstandards');
    } else if (answers.datatype === 'commerce') {
      scores.professional += 30;
      scores.enterprise += 10;
      reasons.push('E-Commerce braucht erweiterten Schutz');
    } else {
      scores.starter += 20;
    }

    if (answers.b2b === 'enterprise') {
      scores.enterprise += 40;
      reasons.push('Enterprise-Kunden erwarten Excellence-Siegel und Audits');
    } else if (answers.b2b === 'kmu') {
      scores.professional += 30;
      reasons.push('B2B-Kunden prüfen Ihre Compliance-Nachweise');
    } else {
      scores.starter += 10;
    }

    const sortedPackages = Object.entries(scores).sort((a, b) => b[1] - a[1]) as [keyof typeof scores, number][];
    const recommended = sortedPackages[0];

    if (recommended[0] === 'starter') {
      reasons.unshift('Alle DSGVO-Pflichtdokumente und Grundschutz');
    } else if (recommended[0] === 'professional') {
      reasons.unshift('Externer DSB mit €100.000 Haftung inklusive');
    } else if (recommended[0] === 'enterprise') {
      reasons.unshift('24/7 DSB-Hotline und höchste Sicherheitsstandards');
    }

    return {
      package: recommended[0],
      score: recommended[1],
      reasons: reasons.slice(0, 4)
    };
  };

  const getPackageDetails = (packageType: PackageRecommendation['package']) => {
    const details = {
      'klein-starter': {
        name: 'KLEINUNTERNEHMER-SPECIAL',
        tagline: 'KLEIN-STARTER',
        price: '€29',
        color: 'from-[#39B37B] to-[#2d8f5f]',
        icon: Shield,
        features: [
          'Alle DSGVO-Pflichtdokumente',
          '50 KI-Anfragen/Monat',
          'DSGVO-Siegel VERIFIED',
          'Live Compliance-Score'
        ]
      },
      'starter': {
        name: 'STARTER',
        tagline: 'Perfekt für den Einstieg',
        price: '€69',
        color: 'from-[#474747] to-[#232323]',
        icon: Shield,
        features: [
          'Alle DSGVO-Pflichtdokumente',
          '100 KI-Anfragen/Monat',
          'DSGVO-Siegel VERIFIED',
          'Live Compliance-Score'
        ]
      },
      'professional': {
        name: 'PROFESSIONAL',
        tagline: 'Meistgewählt',
        price: '€199',
        color: 'from-[#e24e1b] to-[#ea580c]',
        icon: Sparkles,
        features: [
          'Externer Datenschutzbeauftragter',
          '€100.000 DSB-Haftung',
          '1.000 KI-Anfragen/Monat',
          'API-Integration',
          'DSGVO-Siegel CERTIFIED'
        ]
      },
      'enterprise': {
        name: 'ENTERPRISE',
        tagline: 'Maximale Sicherheit',
        price: '€449',
        color: 'from-[#003366] to-[#1F1F24]',
        icon: Target,
        features: [
          '24/7 DSB-Hotline',
          '€250.000 DSB-Haftung',
          'Unbegrenzte KI-Anfragen',
          'Dedizierter Success Manager',
          'DSGVO-Siegel EXCELLENCE'
        ]
      },
      'neugruender': {
        name: 'NEUGRÜNDER-SPECIAL',
        tagline: 'PROFESSIONAL zum halben Preis',
        price: '€99',
        priceNote: 'statt €199 für 2 Jahre',
        color: 'from-[#e24e1b] to-[#ea580c]',
        icon: Rocket,
        features: [
          'Externer Datenschutzbeauftragter',
          '€100.000 DSB-Haftung',
          '1.000 KI-Anfragen/Monat',
          'API-Integration',
          '50% Gründerrabatt für 2 Jahre'
        ]
      },
      'gemeinnuetzig': {
        name: 'GEMEINNÜTZIG-SPECIAL',
        tagline: 'Für Vereine & NGOs',
        price: '€15',
        priceNote: 'statt €69 dauerhaft',
        color: 'from-[#e24e1b] to-[#ea580c]',
        icon: Heart,
        features: [
          'Alle DSGVO-Pflichtdokumente',
          '100 KI-Anfragen/Monat',
          'DSGVO-Siegel VERIFIED',
          'Speziell für gemeinnützige Organisationen',
          '78% Vereinsrabatt dauerhaft'
        ]
      }
    };

    return details[packageType];
  };

  const slideVariants = {
    enter: (direction: 'forward' | 'backward') => ({
      x: direction === 'forward' ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: 'forward' | 'backward') => ({
      zIndex: 0,
      x: direction === 'forward' ? -1000 : 1000,
      opacity: 0
    })
  };

  if (showResult) {
    const recommendation = calculateRecommendation();
    const packageDetails = getPackageDetails(recommendation.package);
    const Icon = packageDetails.icon;

    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-2xl mx-auto"
      >
        <Card className="border-2 border-[#e24e1b] shadow-xl overflow-hidden">
          <CardContent className="p-4 sm:p-6">
            <div className="text-center mb-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 rounded-full mb-3"
              >
                <Check className="h-4 w-4 text-[#39B37B]" />
                <span className="text-xs font-bold text-[#e24e1b]">EMPFEHLUNG</span>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className={cn(
                  "inline-block px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-gradient-to-r text-white mb-2 shadow-lg",
                  packageDetails.color
                )}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  <span className="text-2xl sm:text-3xl font-bold">{packageDetails.price}</span>
                  <span className="text-sm">/Monat</span>
                </div>
                <div className="text-base sm:text-lg font-bold">{packageDetails.name}</div>
                {packageDetails.priceNote && (
                  <div className="text-xs opacity-90">{packageDetails.priceNote}</div>
                )}
              </motion.div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 sm:p-4 mb-3">
              <h3 className="text-sm font-bold text-[#232323] mb-2 flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-[#e24e1b]" />
                Passt zu Ihnen, weil:
              </h3>
              <ul className="space-y-1.5">
                {recommendation.reasons.slice(0, 3).map((reason, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + idx * 0.1 }}
                    className="flex items-start gap-2"
                  >
                    <Check className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                    <span className="text-xs sm:text-sm text-[#232323]">{reason}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 mb-2">
              <Button
                onClick={handleRestart}
                variant="outline"
                size="sm"
                className="border-2 border-gray-300 hover:bg-gray-50"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Erneut
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl transition-all"
              >
                Paket wählen
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>

            <p className="text-center text-xs text-[#474747]">
              14 Tage kostenlos testen • Jederzeit kündbar
            </p>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  const QuestionIcon = currentQuestion.icon;

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs sm:text-sm font-semibold text-[#474747]">
            {currentStep + 1}/{questions.length}
          </span>
          <span className="text-xs sm:text-sm font-semibold text-[#e24e1b]">
            {Math.round(progress)}%
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#e24e1b] to-[#ea580c]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentStep}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
        >
          <Card className="border-2 border-gray-200 shadow-lg overflow-hidden">
            <CardContent className="p-4 sm:p-6">
              <div className="text-center mb-4 sm:mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-[#e24e1b] to-[#ea580c] mb-3 sm:mb-4"
                >
                  <QuestionIcon className="h-6 w-6 sm:h-7 sm:w-7 text-white" />
                </motion.div>

                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#232323] mb-2">
                  {currentQuestion.question}
                </h2>
                {currentQuestion.subtitle && (
                  <p className="text-xs sm:text-sm text-[#474747]">
                    {currentQuestion.subtitle}
                  </p>
                )}
              </div>

              <div className="space-y-2 sm:space-y-3">
                {currentQuestion.options.map((option, idx) => {
                  const OptionIcon = option.icon || Shield;
                  const isSelected = answers[currentQuestion.id] === option.value;

                  return (
                    <motion.button
                      key={option.value}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 + idx * 0.1 }}
                      onClick={() => handleAnswer(option.value)}
                      className={cn(
                        "w-full p-3 sm:p-4 rounded-lg border-2 transition-all duration-300 text-left group hover:shadow-md",
                        isSelected
                          ? "border-[#e24e1b] bg-[#e24e1b]/5"
                          : "border-gray-200 hover:border-[#e24e1b]/50"
                      )}
                    >
                      <div className="flex items-start gap-2 sm:gap-3">
                        <div className={cn(
                          "flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center bg-gradient-to-br transition-transform group-hover:scale-110",
                          option.color || "from-gray-400 to-gray-500"
                        )}>
                          <OptionIcon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-[#232323] text-sm sm:text-base mb-0.5">
                            {option.label}
                          </div>
                          {option.sublabel && (
                            <div className="text-xs sm:text-sm text-[#474747]">
                              {option.sublabel}
                            </div>
                          )}
                        </div>
                        {isSelected && (
                          <Check className="h-5 w-5 text-[#e24e1b] flex-shrink-0" />
                        )}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {currentStep > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-4"
                >
                  <Button
                    onClick={handleBack}
                    variant="outline"
                    size="sm"
                    className="border-2 border-gray-300 hover:bg-gray-50"
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Zurück
                  </Button>
                </motion.div>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};