import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Check, Shield, Award, Users, TrendingUp, Lock, FileCheck, Clock, BarChart3, CheckCircle2, Sparkles, ChevronRight, Zap, Star } from 'lucide-react';

const HeroBanner = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Hero Banner Design Options</h1>
          <p className="text-gray-600">Professionelle, minimalistische Hero-Designs im Marsstein-Stil</p>
        </div>

        <div className="space-y-24">
          <OptionA />
          <div className="border-t border-gray-200"></div>
          <OptionB />
          <div className="border-t border-gray-200"></div>
          <OptionC />
          <div className="border-t border-gray-200"></div>
          <OptionD />
          <div className="border-t border-gray-200"></div>
          <OptionE />
          <div className="border-t border-gray-200"></div>
          <OptionF />
          <div className="border-t border-gray-200"></div>
          <OptionG />
          <div className="border-t border-gray-200"></div>
          <OptionH />
          <div className="border-t border-gray-200"></div>
          <OptionI />
        </div>
      </div>
    </div>
  );
};

const OptionA = () => {
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
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 lg:py-28 rounded-2xl">
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
                <span className="text-blue-600 font-semibold">{displayedText}</span>
                <span className="text-blue-600 animate-pulse">|</span>
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
              to="/preise"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              Kostenlos testen
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Demo vereinbaren
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Check className="text-blue-600" size={18} />
              <span>14 Tage kostenlos</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-blue-600" size={18} />
              <span>Keine Kreditkarte</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="text-blue-600" size={18} />
              <span>Setup in 2 Minuten</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-12">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Option A — Minimalistisch & Professionell</p>
      </div>
    </section>
  );
};

const OptionB = () => {
  return (
    <section className="bg-white rounded-2xl overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="px-6 lg:px-12 py-12 lg:py-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Marsstein
            </h1>
            <p className="text-xl text-gray-700 mb-8 font-medium">
              Compliance-Management neu gedacht
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Vertrauen Sie auf die gleiche Plattform, die über 200 Unternehmen
              dabei hilft, ihre Compliance-Anforderungen effizient zu erfüllen.
            </p>

            <div className="space-y-4 mb-10">
              {[
                { icon: Shield, text: 'DSGVO-konform in 48 Stunden' },
                { icon: TrendingUp, text: '80% weniger manueller Aufwand' },
                { icon: Award, text: 'Zertifizierungsbereit' },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mt-0.5">
                    <item.icon className="text-blue-600" size={20} />
                  </div>
                  <span className="text-gray-700 pt-2">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                to="/preise"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Jetzt starten
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Beratung buchen
              </Link>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3">Vertraut von führenden Unternehmen</p>
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 bg-gray-100 border-2 border-white rounded-full flex items-center justify-center">
                      <Users className="text-gray-400" size={16} />
                    </div>
                  ))}
                </div>
                <span className="text-sm text-gray-600 ml-2">200+ Unternehmen</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="relative px-6 lg:px-12 py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-gray-100">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 space-y-6">
              <div className="space-y-4">
                <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 space-y-2">
                  <div className="h-2 bg-blue-200 rounded w-2/3"></div>
                  <div className="h-6 bg-blue-300 rounded w-1/2"></div>
                </div>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 space-y-2">
                  <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                  <div className="h-6 bg-gray-300 rounded w-1/2"></div>
                </div>
              </div>

              <div className="space-y-3">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-100 rounded"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="absolute -top-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Live Demo
            </div>
          </motion.div>
        </div>
      </div>

      <div className="text-center pb-8">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Option B — Split-Screen mit Social Proof</p>
      </div>
    </section>
  );
};

const OptionC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-gray-900 rounded-2xl py-20 lg:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),rgba(0,0,0,0))]"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-6"
        style={{ y, opacity }}
      >
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-8">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
              KI-gestützte Compliance-Automatisierung
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
              Marsstein
            </h1>

            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Die zukunftssichere Compliance-Plattform für Unternehmen,
              die Compliance ernst nehmen – ohne den Overhead.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/preise"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all"
              >
                Plattform testen
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-300 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Persönliche Demo
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
              {[
                { number: '200+', label: 'Kunden', icon: Users },
                { number: '80%', label: 'Zeitersparnis', icon: TrendingUp },
                { number: '48h', label: 'Setup', icon: Shield },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-center p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm"
                >
                  <stat.icon className="text-blue-400 mx-auto mb-3" size={24} />
                  <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="text-center mt-12">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Option C — Dark Mode mit subtilen Effekten</p>
      </div>
    </section>
  );
};

const OptionD = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28 rounded-2xl border border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-sm font-medium mb-6">
                <CheckCircle2 size={16} />
                Compliance-as-a-Service
              </div>

              <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Marsstein
              </h1>

              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Ihre zentrale Plattform für DSGVO, ISO 27001 und EU AI Act Compliance.
                Entwickelt für Unternehmen, die Wert auf Effizienz und Rechtssicherheit legen.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-10">
                {[
                  { icon: Lock, label: 'Datensicherheit', value: 'ISO 27001' },
                  { icon: FileCheck, label: 'DSGVO-Ready', value: '< 48h' },
                  { icon: Users, label: 'Kunden', value: '200+' },
                  { icon: Clock, label: 'Support', value: '24/7' },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-gray-600" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500">{item.label}</div>
                      <div className="text-lg font-semibold text-gray-900">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/preise"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Plattform testen
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Beratung anfragen
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <Shield className="text-blue-600 mx-auto mb-4" size={80} />
                  <div className="text-2xl font-bold text-gray-900 mb-2">Compliance</div>
                  <div className="text-gray-600">automatisiert</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Option D — Grid-basiert mit Fakten</p>
      </div>
    </section>
  );
};

const OptionE = () => {
  const stats = [
    { value: '10.000+', label: 'Automatisierte Compliance-Checks pro Monat' },
    { value: '200+', label: 'Unternehmen vertrauen auf Marsstein' },
    { value: '80%', label: 'Zeitersparnis bei Compliance-Aufgaben' },
    { value: '< 2h', label: 'Durchschnittliche Setup-Zeit' },
  ];

  return (
    <section className="bg-gray-50 py-20 lg:py-28 rounded-2xl">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Marsstein
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Compliance-Management, das sich an Ihrem Unternehmen orientiert
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Von der ersten DSGVO-Anforderung bis zur vollständigen ISO 27001 Zertifizierung –
              eine Plattform für alle Compliance-Bedürfnisse.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.2 }}
              className="bg-white rounded-xl p-6 text-center border border-gray-200"
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Link
            to="/preise"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
          >
            Kostenlos starten
            <ArrowRight className="ml-2" size={20} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            Live-Demo buchen
          </Link>
        </div>

        <div className="flex justify-center gap-8 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <Check className="text-blue-600" size={18} />
            <span>Keine Kreditkarte</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-blue-600" size={18} />
            <span>14 Tage testen</span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="text-blue-600" size={18} />
            <span>DSGVO-konform</span>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Option E — Daten & Statistiken fokussiert</p>
      </div>
    </section>
  );
};

const OptionF = () => {
  const steps = [
    { number: '1', title: 'Anmelden', desc: 'Kostenloses Konto in 2 Min.', icon: CheckCircle2 },
    { number: '2', title: 'Konfigurieren', desc: 'Compliance-Ziele festlegen', icon: BarChart3 },
    { number: '3', title: 'Automatisieren', desc: 'KI übernimmt die Arbeit', icon: Sparkles },
  ];

  return (
    <section className="relative bg-white py-20 lg:py-28 rounded-2xl">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
              Marsstein
            </h1>
            <p className="text-2xl text-gray-700 mb-4">
              In 3 Schritten zu automatisierter Compliance
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12">
              Keine komplexe Einrichtung. Keine wochenlangen Onboardings.
              Starten Sie heute und seien Sie morgen DSGVO-konform.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 + 0.2 }}
              className="relative"
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <step.icon className="text-blue-600 mx-auto mb-3" size={32} />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center">
          <p className="text-gray-700 mb-6 font-medium">
            Über 200 Unternehmen haben bereits den Schritt zu automatisierter Compliance gemacht
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/preise"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Jetzt starten
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-blue-700 bg-white border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Option F — Prozess & Timeline fokussiert</p>
      </div>
    </section>
  );
};

const OptionG = () => {
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null);

  const benefits = [
    { text: 'Keine Kreditkarte erforderlich' },
    { text: '14 Tage kostenlos testen' },
    { text: 'Jederzeit kündbar' },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white py-24 lg:py-32 rounded-2xl">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.03),transparent_50%)]"></div>

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-full text-sm text-gray-700 mb-8">
            <Star className="text-blue-600" size={16} fill="currentColor" />
            <span>Über 200 Unternehmen vertrauen auf Marsstein</span>
          </div>

          <h1 className="text-6xl sm:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Marsstein
          </h1>

          <p className="text-2xl sm:text-3xl text-gray-800 mb-4 font-light">
            Compliance ohne Kompromisse
          </p>

          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Die intelligente Plattform für DSGVO, ISO 27001 und EU AI Act.
            Weniger Aufwand, mehr Sicherheit, absolute Rechtssicherheit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/preise"
              className="group inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Kostenlos starten
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-medium text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all"
            >
              Beratungsgespräch
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-gray-600"
                onHoverStart={() => setHoveredBenefit(index)}
                onHoverEnd={() => setHoveredBenefit(null)}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  animate={{
                    scale: hoveredBenefit === index ? 1.2 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 500 }}
                >
                  <Check
                    className={hoveredBenefit === index ? "text-blue-600" : "text-gray-400"}
                    size={20}
                  />
                </motion.div>
                <span className="text-sm">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-16">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Option G — Clean & Zentriert mit Micro-Interactions</p>
      </div>
    </section>
  );
};

const OptionH = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <section
      className="relative overflow-hidden bg-white py-20 lg:py-28 rounded-2xl border border-gray-100"
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6">
                <div className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-md mb-4">
                  COMPLIANCE AUTOMATION
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-4">
                  Marsstein
                </h1>
              </div>

              <p className="text-2xl text-gray-700 mb-6 font-medium">
                Compliance, die mit Ihrem Business wächst
              </p>

              <p className="text-lg text-gray-600 mb-10 leading-relaxed max-w-xl">
                Von Startup bis Enterprise – unsere Plattform skaliert mit Ihren Anforderungen.
                DSGVO, ISO 27001, EU AI Act und mehr, in einer zentralen Lösung.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'Automatisierte Compliance-Checks rund um die Uhr',
                  'Intelligente Vorlagen für alle Anforderungen',
                  'Echtzeit-Monitoring Ihrer Compliance-Status',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5 flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                      <Check className="text-blue-600 group-hover:text-white" size={14} />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/preise"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
                >
                  Jetzt kostenlos testen
                  <ArrowRight className="ml-2" size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Live-Demo ansehen
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              style={{
                rotateY: mousePosition.x,
                rotateX: -mousePosition.y,
              }}
              transition={{ type: "spring", stiffness: 100 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-50 to-gray-100 rounded-2xl p-12 shadow-lg">
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <Check className="text-green-600" size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">DSGVO</div>
                        <div className="text-xs text-gray-500">Vollständig konform</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Shield className="text-blue-600" size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">ISO 27001</div>
                        <div className="text-xs text-gray-500">Zertifizierungsbereit</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Sparkles className="text-purple-600" size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-900">EU AI Act</div>
                        <div className="text-xs text-gray-500">KI-Compliance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="text-center mt-16">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Option H — Asymmetrisch mit 3D-Tilt Effekt</p>
      </div>
    </section>
  );
};

const OptionI = () => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['automatisiert', 'vereinfacht', 'skaliert', 'optimiert'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 lg:py-32 rounded-2xl">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 mb-8 tracking-tight">
            Marsstein
          </h1>

          <div className="h-20 mb-8 flex items-center justify-center">
            <p className="text-3xl sm:text-4xl text-gray-700">
              Compliance{' '}
              <motion.span
                key={currentWord}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-blue-600 font-semibold inline-block"
              >
                {words[currentWord]}
              </motion.span>
            </p>
          </div>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Ihre All-in-One Plattform für DSGVO, ISO 27001 und EU AI Act Compliance.
            Entwickelt für Teams, die keine Zeit für manuelle Prozesse verschwenden wollen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/preise"
              className="group relative inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white bg-blue-600 rounded-xl overflow-hidden transition-all hover:shadow-lg"
            >
              <span className="relative z-10 flex items-center">
                Plattform testen
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </span>
              <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all"
            >
              Persönliche Demo
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { icon: Zap, value: '< 48h', label: 'DSGVO-konform' },
              { icon: Shield, value: '200+', label: 'Unternehmen' },
              { icon: TrendingUp, value: '80%', label: 'Zeitersparnis' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-all cursor-default"
              >
                <stat.icon className="text-blue-600 mx-auto mb-3" size={28} />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="text-center mt-16">
        <p className="text-xs font-medium text-gray-500 uppercase tracking-wide">Option I — Minimal mit Wort-Animation & Stats</p>
      </div>
    </section>
  );
};

export default HeroBanner;
