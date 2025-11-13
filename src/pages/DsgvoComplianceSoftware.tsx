import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  Rocket,
  ArrowRight,
  FileText,
  Clock,
  Bot,
  Bell,
  Users,
  Sparkles,
  Copy,
  Search
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { TracingBeam } from '@/components/ui/tracing-beam';
import {
  useTracking,
  useSectionTracking,
  useScrollDepthTracking,
  useFormTracking,
  useExitIntentTracking,
  usePathTracking,
  useRageClickDetection
} from '@/hooks/useTracking';
import { identifyUser } from '@/lib/analytics';

const TypewriterText: React.FC<{ text: string; delay: number; isInView: boolean; speed?: number }> = ({
  text,
  delay,
  isInView,
  speed = 20
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!isInView) {
      setDisplayedText("");
      return;
    }

    const timeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayedText(text.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
          setShowCursor(false);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, isInView, speed]);

  return (
    <span className="relative font-mono">
      {displayedText}
      {showCursor && displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.5, repeat: Infinity }}
          className="inline-block w-0.5 h-4 bg-blue-600 ml-0.5"
        />
      )}
    </span>
  );
};

const Confetti: React.FC<{ trigger: boolean }> = ({ trigger }) => {
  const particles = Array.from({ length: 15 });

  return (
    <>
      {trigger && particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: 0,
            y: 0,
            opacity: 1,
            scale: 1
          }}
          animate={{
            x: (Math.random() - 0.5) * 100,
            y: -50 - Math.random() * 50,
            opacity: 0,
            scale: 0,
            rotate: Math.random() * 360
          }}
          transition={{
            duration: 0.8,
            delay: i * 0.02,
            ease: "easeOut"
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: ['#003366', '#39B37B', '#e24e1b', '#FFD700'][i % 4]
          }}
        />
      ))}
    </>
  );
};

const OnboardingAnimation: React.FC<{ isInView: boolean }> = ({ isInView }) => {
  const [activeField, setActiveField] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showAutofill, setShowAutofill] = useState(false);

  const fields = [
    { label: "Unternehmensname", text: "Musterfirma GmbH" },
    { label: "Adresse", text: "Musterstraße 123, 10115 Berlin" },
    { label: "Branche", text: "Software & IT" }
  ];

  useEffect(() => {
    if (!isInView) return;

    const timeline = [
      { delay: 100, action: () => setActiveField(0) },
      { delay: 800, action: () => setActiveField(1) },
      { delay: 1500, action: () => setActiveField(2) },
      { delay: 2200, action: () => setShowSuccess(true) },
      { delay: 2500, action: () => setShowAutofill(true) }
    ];

    const timeouts = timeline.map(({ delay, action }) =>
      setTimeout(action, delay)
    );

    return () => timeouts.forEach(clearTimeout);
  }, [isInView]);

  return (
    <div className="relative w-full rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-4 sm:p-6 md:p-8 border-2 border-blue-200 overflow-visible min-h-[350px] sm:min-h-[400px]">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#003366 1px, transparent 1px), linear-gradient(90deg, #003366 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>

      <div className="relative space-y-3 sm:space-y-4">
        {fields.map((field, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: i * 0.3, duration: 0.4 }}
            className="space-y-1.5"
          >
            <div className="text-xs font-medium text-blue-900">{field.label}</div>
            <div className={`h-10 bg-white rounded-lg border-2 transition-all duration-300 relative overflow-hidden ${
              activeField === i ? 'border-blue-500 shadow-lg shadow-blue-200' : 'border-blue-200'
            }`}>
              <div className="absolute inset-0 flex items-center px-3 text-sm text-blue-900">
                {activeField >= i && (
                  <TypewriterText
                    text={field.text}
                    delay={0}
                    isInView={isInView && activeField >= i}
                    speed={25}
                  />
                )}
              </div>
              {activeField === i && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500 origin-left"
                />
              )}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={showSuccess ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="pt-4 relative"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={showSuccess ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center gap-2 bg-green-50 border-2 border-green-500 rounded-lg px-4 py-2"
          >
            <motion.div
              animate={showSuccess ? { rotate: [0, 10, -10, 0] } : {}}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <CheckCircle2 className="w-5 h-5 text-green-600" />
            </motion.div>
            <span className="text-sm font-bold text-green-700">Grunddaten erfasst</span>
            <div className="absolute -top-2 -right-2">
              <Confetti trigger={showSuccess} />
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={showAutofill ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.5 }}
          className="mt-4"
        >
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-2 border-blue-200">
            <div className="flex items-start gap-3">
              <motion.div
                animate={showAutofill ? { rotate: 360 } : {}}
                transition={{ duration: 1, ease: "linear" }}
                className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0"
              >
                <Sparkles className="w-4 h-4 text-white" />
              </motion.div>
              <div className="flex-1">
                <div className="font-bold text-gray-900 text-sm mb-2">Automatisch vorbefüllt:</div>
                <div className="space-y-1">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={showAutofill ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.1 }}
                    className="flex items-center gap-2 text-xs text-gray-600"
                  >
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span>Verarbeitungsprozesse (12 erkannt)</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={showAutofill ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2 text-xs text-gray-600"
                  >
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span>IT-Systeme & Tools (8 identifiziert)</span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={showAutofill ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-2 text-xs text-gray-600"
                  >
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                    <span>Unternehmensinformationen vervollständigt</span>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

const ThinkingDots: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <div className="flex gap-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          animate={isActive ? {
            scale: [1, 1.3, 1],
            opacity: [0.3, 1, 0.3]
          } : {}}
          transition={{
            duration: 1,
            repeat: Infinity,
            delay: i * 0.2
          }}
          className="w-1.5 h-1.5 rounded-full bg-orange-600"
        />
      ))}
    </div>
  );
};

const AIWritingText: React.FC<{ text: string; delay: number; isInView: boolean }> = ({
  text,
  delay,
  isInView
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isWriting, setIsWriting] = useState(false);

  useEffect(() => {
    if (!isInView) {
      setDisplayedText("");
      return;
    }

    const timeout = setTimeout(() => {
      setIsWriting(true);
      let i = 0;
      const interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayedText(text.slice(0, i));
          i++;
        } else {
          clearInterval(interval);
          setIsWriting(false);
        }
      }, 15);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, delay, isInView]);

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-orange-700">{displayedText}</span>
      {isWriting && <ThinkingDots isActive={true} />}
    </div>
  );
};

const ScanningLine: React.FC<{ isActive: boolean }> = ({ isActive }) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={isActive ? { y: [0, 200, 0] } : { y: 0 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-orange-400 to-transparent opacity-50"
      style={{ boxShadow: '0 0 10px rgba(226, 78, 27, 0.5)' }}
    />
  );
};

const GenerationAnimation: React.FC<{ isInView: boolean }> = ({ isInView }) => {
  const [stage, setStage] = useState(0);

  const sections = [
    { title: "§1 Gegenstand und Dauer", content: "Der Auftraggeber beauftragt den Auftragnehmer...", delay: 0 },
    { title: "§2 Art und Zweck", content: "Verarbeitung personenbezogener Daten für...", delay: 800 },
    { title: "§3 Technische Maßnahmen", content: "Verschlüsselung, Zugriffskontrolle, Logging...", delay: 1600 }
  ];

  useEffect(() => {
    if (!isInView) {
      setStage(0);
      return;
    }

    const timers = sections.map(({ delay }, i) =>
      setTimeout(() => setStage(i + 1), delay)
    );

    return () => timers.forEach(clearTimeout);
  }, [isInView]);

  return (
    <div className="relative w-full rounded-xl bg-gradient-to-br from-orange-50 to-orange-100 p-4 sm:p-6 md:p-8 border-2 border-orange-200 overflow-visible min-h-[450px] sm:min-h-[500px]">
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 flex items-center gap-1.5 sm:gap-2 bg-white/80 backdrop-blur-sm px-2 py-1.5 sm:px-3 sm:py-2 rounded-lg border border-orange-300">
        <motion.div
          animate={{
            rotate: 360
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        >
          <Bot className="w-5 h-5 text-orange-600" />
        </motion.div>
        <div className="flex flex-col">
          <span className="text-xs font-bold text-orange-900">KI arbeitet</span>
          <ThinkingDots isActive={stage < 3} />
        </div>
      </div>

      <ScanningLine isActive={isInView && stage < 3} />

      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm font-bold text-orange-900 mb-4 flex items-center gap-2"
        >
          <FileText className="w-4 h-4" />
          Auftragsverarbeitungsvertrag
        </motion.div>

        {sections.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={stage > i ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-lg p-3 border-2 border-orange-200 relative overflow-hidden"
          >
            {stage > i && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 1.5, delay: 0.2 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-300/30 to-transparent"
              />
            )}

            <div className="relative space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-orange-900">{item.title}</span>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={stage > i ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <Badge className="bg-green-600 text-white text-xs">
                    ✓ Generiert
                  </Badge>
                </motion.div>
              </div>

              {stage > i && (
                <AIWritingText
                  text={item.content}
                  delay={300}
                  isInView={isInView}
                />
              )}

              {stage > i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="flex gap-1 pt-1"
                >
                  {Array.from({ length: 8 }).map((_, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.6 + idx * 0.03 }}
                      className="h-1 flex-1 bg-orange-200 rounded origin-left"
                    />
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={stage === 3 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ type: "spring" }}
          className="mt-4 p-3 bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-lg relative overflow-hidden"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={stage === 3 ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            className="flex items-start gap-2"
          >
            <motion.div
              animate={stage === 3 ? {
                rotate: [0, 10, -10, 0],
                scale: [1, 1.2, 1]
              } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0" />
            </motion.div>
            <div>
              <p className="text-xs font-bold text-amber-900">Dokument generiert!</p>
              <p className="text-xs text-amber-700 mt-0.5">
                Sofort einsatzbereit
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

const AuditAnimation: React.FC<{ isInView: boolean }> = ({ isInView }) => {
  const [stage, setStage] = useState(0);

  const documents = [
    {
      name: "Verarbeitungsverzeichnis",
      article: "Art. 30 DSGVO",
      lastUpdate: "Heute, 14:32"
    },
    {
      name: "TOM-Dokumentation",
      article: "Art. 32 DSGVO",
      lastUpdate: "Heute, 14:32"
    },
    {
      name: "Datenschutzerklärung",
      article: "Art. 13/14 DSGVO",
      lastUpdate: "Heute, 14:32"
    },
    {
      name: "Löschkonzept",
      article: "Art. 17 DSGVO",
      lastUpdate: "Heute, 14:32"
    }
  ];

  useEffect(() => {
    if (!isInView) {
      setStage(0);
      return;
    }

    setTimeout(() => setStage(1), 100);
    setTimeout(() => setStage(2), 300);
    setTimeout(() => setStage(3), 500);
    setTimeout(() => setStage(4), 700);
  }, [isInView]);

  return (
    <div className="relative w-full rounded-xl bg-gradient-to-br from-green-50 to-green-100 p-4 sm:p-6 md:p-8 border-2 border-green-200 overflow-visible min-h-[450px] sm:min-h-[500px]">
      <div className="mb-4 sm:mb-6">
        <div className="flex items-center gap-2 mb-2">
          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
          <h4 className="text-base sm:text-lg font-bold text-gray-900">Vollständige Dokumentation</h4>
        </div>
        <p className="text-xs sm:text-sm text-gray-600">Automatisch aktuell gehalten • Jederzeit audit-ready</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-4 sm:mb-6">
        {documents.map((doc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={stage > i ? {
              opacity: 1,
              y: 0,
              scale: 1
            } : {
              opacity: 0,
              y: 20,
              scale: 0.95
            }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 200 }}
            className="bg-white rounded-lg p-4 border-2 border-green-200 relative overflow-hidden hover:border-green-400 transition-colors"
          >
            {stage > i && (
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ delay: i * 0.2 + 0.2, duration: 0.6 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-green-300/20 to-transparent"
              />
            )}

            <div className="relative">
              <div className="flex items-start justify-between mb-2">
                <FileText className="w-5 h-5 text-green-600" />
                <motion.div
                  initial={{ scale: 0 }}
                  animate={stage > i ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                  className="flex items-center gap-1 bg-green-100 px-2 py-0.5 rounded-full"
                >
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span className="text-xs font-bold text-green-700">Live</span>
                </motion.div>
              </div>
              <div className="text-sm font-bold text-gray-900 mb-1">{doc.name}</div>
              <div className="text-xs text-gray-500 mb-2">{doc.article}</div>

              {stage > i && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.2 + 0.4 }}
                  className="flex items-center justify-between text-xs"
                >
                  <span className="text-gray-400">{doc.lastUpdate}</span>
                  <CheckCircle2 className="w-3 h-3 text-green-600" />
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={stage >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ delay: 0.9 }}
        className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-4 border-2 border-blue-200"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Bot className="w-5 h-5 text-white" />
            </motion.div>
          </div>
          <div className="flex-1">
            <div className="font-bold text-gray-900 text-sm mb-1">Automatische Aktualisierung</div>
            <div className="text-xs text-gray-600 leading-relaxed">
              Gesetzesänderungen werden automatisch erkannt und in Ihre Dokumentation integriert.
              Sie werden sofort benachrichtigt, wenn Handlungsbedarf besteht.
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TracingBeamStep: React.FC<{ step: any; index: number }> = ({ step, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="mb-20">
      <Badge
        className="text-white rounded-full text-sm w-fit px-4 py-1 mb-4"
        style={{ backgroundColor: step.color }}
      >
        Schritt {index + 1}
      </Badge>

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 mb-2"
      >
        {step.title}
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-lg text-gray-600 mb-6"
      >
        {step.subtitle}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {step.animationType === 'onboarding' && <OnboardingAnimation isInView={isInView} />}
        {step.animationType === 'generation' && <GenerationAnimation isInView={isInView} />}
        {step.animationType === 'audit' && <AuditAnimation isInView={isInView} />}
      </motion.div>
    </div>
  );
};

const WorkflowSection: React.FC<{ sectionRef?: React.RefObject<HTMLDivElement> }> = ({ sectionRef }) => {
  const steps = [
    {
      title: "Onboarding",
      subtitle: "Unternehmensdaten einmal erfassen – der Rest wird automatisch vorbefüllt",
      color: "#003366",
      animationType: "onboarding"
    },
    {
      title: "Automatische Generierung",
      subtitle: "Experten-Vorlagen werden automatisch befüllt – sofort einsatzbereit",
      color: "#e24e1b",
      animationType: "generation"
    },
    {
      title: "Vollständige Dokumentation",
      subtitle: "Jederzeit audit-ready",
      color: "#39B37B",
      animationType: "audit"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-gray-50 to-white" data-section="workflow">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
            So einfach geht DSGVO Compliance mit Marsstein
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            In drei einfachen Schritten zur vollständigen DSGVO-Compliance
          </p>
        </div>

        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {steps.map((step, index) => (
              <TracingBeamStep key={index} step={step} index={index} />
            ))}
          </div>
        </TracingBeam>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto mt-16 px-4"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 lg:p-12 border-2 border-blue-200 shadow-xl text-center">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 break-words">
              So einfach will ich auch arbeiten
            </h3>
            <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg break-words">
              Sichern Sie sich jetzt den Early Bird Preis und starten Sie noch heute.
            </p>
            <Button
              size="lg"
              onClick={() => handleCTAClick('workflow')}
              className="bg-[#003366] hover:bg-[#004d99] text-white text-base sm:text-lg font-bold px-6 sm:px-8 py-4 sm:py-6 shadow-2xl w-full sm:w-auto whitespace-normal min-h-[56px] flex items-center justify-center mx-auto"
            >
              <span className="break-words text-center">Jetzt Early Bird Preis sichern</span>
              <Rocket className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
            </Button>
            <div className="mt-6 flex items-center justify-center gap-4 sm:gap-6 flex-wrap text-xs sm:text-sm text-gray-600">
              <span className="flex items-center gap-2 whitespace-nowrap">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                Kostenlose Testphase
              </span>
              <span className="flex items-center gap-2 whitespace-nowrap">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                Keine Kreditkarte
              </span>
              <span className="flex items-center gap-2 whitespace-nowrap">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                Jederzeit kündbar
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const AnimatedSection = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const DsgvoComplianceSoftware: React.FC = () => {
  const navigate = useNavigate();
  const { trackButtonClick } = useTracking();
  const { trackFormStart, trackFieldCompletion, trackFormSubmit } = useFormTracking('earlybird_signup');
  const { trackSectionTransition } = usePathTracking();
  const { detectRageClick } = useRageClickDetection();

  useScrollDepthTracking('dsgvo-compliance-software');
  useExitIntentTracking({ page: 'dsgvo-compliance-software', form_started: false });

  const problemSectionRef = useSectionTracking('earlybird_problem_section');
  const workflowSectionRef = useSectionTracking('earlybird_workflow_section');
  const featuresSectionRef = useSectionTracking('earlybird_features_section');
  const signupSectionRef = useSectionTracking('earlybird_signup_section');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
              trackSectionTransition(sectionId);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [trackSectionTransition]);

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    company: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.email || !formData.firstName || !formData.company || !formData.consent) {
      setError('Bitte füllen Sie alle Pflichtfelder aus.');
      trackFormSubmit(false, 'missing_required_fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Anmeldung fehlgeschlagen');
      }

      identifyUser(formData.email, {
        email: formData.email,
        name: formData.firstName,
        company: formData.company,
        signup_source: 'beta_page',
      });

      trackFormSubmit(true);
      navigate('/beta/thanks');
    } catch (err) {
      console.error('Beta registration error:', err);
      const errorMessage = 'Es gab einen Fehler bei der Anmeldung. Bitte versuchen Sie es erneut.';
      setError(errorMessage);
      trackFormSubmit(false, errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = useCallback((field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    trackFieldCompletion(field, value);
  }, [trackFieldCompletion]);

  const handleCTAClick = (location: string) => {
    trackButtonClick('earlybird_cta', location);
    document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEOHead
        title="DSGVO Compliance Software – Automatisiert & KI-gestützt | Marsstein"
        description="Die KI-gestützte DSGVO-Compliance-Software für Datenschutzbeauftragte. Dokumentation automatisiert, Mandanten übersichtlich, Fristen im Blick. Jetzt Early Bird Preis sichern."
        canonical="/dsgvo-compliance-software"
      />
      <Header />



      <div className="min-h-screen bg-background">
        <section
          id="hero-section"
          data-section="hero"
          className="relative overflow-hidden bg-gradient-to-br from-[#e24e1b] via-[#f97316] to-[#e24e1b]"
        >
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#003366]/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <div className="container relative px-4 mx-auto py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <Rocket className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-semibold">EARLY BIRD LAUNCH</span>
                <Badge className="bg-[#e24e1b] text-white border-none ml-2">
                  Launch-Angebot
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 px-2 break-words">
                Automatisierte DSGVO-Compliance-Software für Datenschutzbeauftragte
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 break-words">
                Dokumentation automatisiert. Mandanten übersichtlich. Fristen im Blick.{' '}
                Ihre Expertise bleibt unersetzlich – die Routine verschwindet.
              </p>

              <div className="flex flex-col items-center gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4 w-full max-w-md mx-auto">
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-[#e24e1b] text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-2xl shadow-black/20 font-bold w-full sm:w-auto whitespace-normal min-h-[56px] flex items-center justify-center"
                  onClick={() => {
                    handleCTAClick('hero');
                    detectRageClick('hero-cta', 'Hero CTA Button');
                  }}
                  data-ph-capture="earlybird-hero-cta"
                >
                  <span className="break-words text-center">Jetzt als DSB kostenlos testen</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                </Button>
                <p className="text-xs sm:text-sm text-white/80 text-center break-words">
                  Kostenlose Testphase • Early Bird Preis
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/90 px-4 max-w-2xl mx-auto">
                <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>Keine Kreditkarte</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>24h Onboarding</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>Jederzeit kündbar</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <AnimatedSection className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div ref={problemSectionRef} className="container px-4 mx-auto max-w-6xl" data-section="problem">
            <div id="problem-section" className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
                Das Problem
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-8 sm:mb-12 max-w-4xl mx-auto leading-tight px-4 break-words">
                Gute DSBs sind rar. Ihre Zeit ist zu wertvoll für <span className="text-[#e24e1b] break-words">Copy-Paste und Excel-Akrobatik</span>.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div id="problem-1">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center h-full hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Copy className="w-7 h-7 sm:w-8 sm:h-8 text-[#e24e1b]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
                    80% Ihrer Arbeit ist Wiederholung
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    Gleiches VVT, gleiche TOMs, gleiche Formulierungen – nur für jeden Mandanten neu getippt. Warum gibt es dafür kein System?
                  </p>
                </div>
              </div>

              <div id="problem-2">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center h-full hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Search className="w-7 h-7 sm:w-8 sm:h-8 text-[#e24e1b]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
                    Wissen verstreut: Gesetze, Urteile, Best Practices
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    Sie wissen, dass es eine Antwort gibt – aber war es in der DSK-Leitlinie, einem Blog oder einem Webinar? 30 Minuten Recherche für eine 2-Minuten-Antwort.
                  </p>
                </div>
              </div>

              <div id="problem-3">
                <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center h-full hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Users className="w-7 h-7 sm:w-8 sm:h-8 text-[#e24e1b]" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 break-words">
                    Multi-Client-Chaos bei externen DSBs
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed break-words">
                    15 Mandanten, 15 Excel-Sheets, 200 E-Mails pro Woche. Welcher Kunde hatte nochmal welche TOM-Anforderung?
                  </p>
                </div>
              </div>
            </div>

            <div id="problem-impact">
              <div className="text-center px-4">
                <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight mb-12 break-words">
                  Ihr Fachwissen ist unersetzlich. Die <span className="text-[#e24e1b] break-words">Routine-Arbeit</span> nicht.
                </p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="max-w-2xl mx-auto"
                >
                  <div className="bg-gradient-to-br from-[#e24e1b] to-[#f97316] rounded-2xl p-6 sm:p-8 shadow-2xl">
                    <Button
                      size="lg"
                      onClick={() => handleCTAClick('problem')}
                      className="w-full bg-white hover:bg-gray-100 text-[#e24e1b] text-base sm:text-lg font-bold py-4 sm:py-6 shadow-xl whitespace-normal min-h-[56px] flex items-center justify-center"
                    >
                      <span className="break-words text-center">Routine-Arbeit automatisieren – jetzt kostenlos testen</span>
                      <ArrowRight className="ml-2 h-5 w-5 flex-shrink-0" />
                    </Button>
                    <p className="text-white/90 text-xs sm:text-sm mt-4 flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
                      <span className="flex items-center gap-1.5 whitespace-nowrap">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        3 Minuten Setup
                      </span>
                      <span className="flex items-center gap-1.5 whitespace-nowrap">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        Keine Kreditkarte
                      </span>
                      <span className="flex items-center gap-1.5 whitespace-nowrap">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        Early Bird Preis
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <WorkflowSection sectionRef={workflowSectionRef} />

        <AnimatedSection className="pt-8 pb-20 bg-white">
          <div ref={featuresSectionRef} className="container px-4 mx-auto max-w-6xl" data-section="features">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-[#e24e1b]/10 backdrop-blur-sm border border-[#e24e1b]/20 rounded-full px-4 py-2 mb-4">
                <span className="text-[#e24e1b] text-sm font-semibold">Warum Marsstein?</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#232323] mb-4">
                Der intelligente Assistent für Datenschutzbeauftragte
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <FileText className="w-8 h-8" />,
                  title: "Geführte Dokumentenerstellung",
                  description: "VVT, TOMs, Datenschutzerklärung – Schritt für Schritt ausgefüllt. Sie werden durch jeden Prozess geführt, kein Vorwissen nötig."
                },
                {
                  icon: <Bell className="w-8 h-8" />,
                  title: "Fristen, die Sie nie vergessen",
                  description: "Löschfristen, AVV-Verlängerungen, Audit-Termine – automatische Erinnerungen halten Sie auf Kurs. Nie wieder etwas übersehen."
                },
                {
                  icon: <Sparkles className="w-8 h-8" />,
                  title: "Gesetzesänderungen, die Sie verstehen",
                  description: "DSGVO-Updates in klarer Sprache. Was ändert sich? Was müssen Sie tun? Praxis-Tipps statt Paragrafen-Wirrwarr."
                },
                {
                  icon: <CheckCircle2 className="w-8 h-8" />,
                  title: "Audit-Ready ohne Panik",
                  description: "Vollständige Dokumentation, jederzeit prüfbar. Behörde kündigt sich an? Export mit einem Klick."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-[#e24e1b] transition-all h-full">
                    <CardContent className="pt-6">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 rounded-xl bg-gradient-to-br from-[#e24e1b] to-[#f97316] flex items-center justify-center text-white flex-shrink-0">
                        {feature.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#232323] mb-2 break-words">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-gray-600 break-words">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="signup-form" className="py-20 bg-gradient-to-br from-[#e24e1b] via-[#f97316] to-[#e24e1b]">
          <div ref={signupSectionRef} className="container px-4 mx-auto max-w-2xl" data-section="signup">
            <div className="text-center mb-8">
              <Badge className="bg-white/20 text-white border-white/30 mb-4 text-sm px-4 py-2">
                Launch-Angebot
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Jetzt durchstarten
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Sichern Sie sich den Early Bird Preis
              </p>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-white text-xs sm:text-sm border border-white/20 whitespace-nowrap">
                  <Users className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Exklusive Community</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-white text-xs sm:text-sm border border-white/20 whitespace-nowrap">
                  <Rocket className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Early Bird Preis</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-white text-xs sm:text-sm border border-white/20 whitespace-nowrap">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Kostenlos testen</span>
                </div>
              </div>
            </div>

            <Card className="border-2 border-white/20">
                  <CardHeader>
                    <CardTitle>Jetzt kostenlos starten</CardTitle>
                    <CardDescription>
                      Setup in 24 Stunden
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">Vorname *</Label>
                        <Input
                          id="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange('firstName')}
                          onFocus={trackFormStart}
                          required
                          placeholder="Max"
                          autoFocus
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange('email')}
                          required
                          placeholder="max@firma.de"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Unternehmen *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={handleInputChange('company')}
                          required
                          placeholder="Musterfirma GmbH"
                        />
                      </div>

                      <div className="flex items-start gap-2 bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
                        <Checkbox
                          id="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                          required
                          className="flex-shrink-0 mt-0.5"
                        />
                        <label htmlFor="consent" className="text-xs sm:text-sm cursor-pointer leading-tight break-words">
                          Ich stimme der Verarbeitung meiner Daten gemäß der <a href="/datenschutz" className="text-[#e24e1b] underline break-words">Datenschutzerklärung</a> zu.
                        </label>
                      </div>

                      {error && (
                        <div className="bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-400 p-4 rounded-lg text-sm border border-red-200 dark:border-red-800">
                          {error}
                        </div>
                      )}

                      <Button
                        type="submit"
                        className="w-full bg-[#e24e1b] hover:bg-[#c43e15] text-white py-3 sm:py-4 text-base sm:text-lg font-bold whitespace-normal min-h-[48px] flex items-center justify-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Clock className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin flex-shrink-0" />
                            <span className="break-words text-center">Wird gesendet...</span>
                          </>
                        ) : (
                          <>
                            <span className="break-words text-center">Jetzt Early Bird Preis sichern</span>
                            <Rocket className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-center text-gray-500">
                        Keine Kreditkarte erforderlich • Jederzeit kündbar
                      </p>
                    </form>
                  </CardContent>
                </Card>

              <div className="mt-6 sm:mt-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-2xl mx-auto">
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-[#e24e1b] font-bold text-base sm:text-lg">1</span>
                    </div>
                    <span className="text-white font-semibold text-xs sm:text-sm text-center break-words px-2">E-Mail Bestätigung</span>
                  </div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white hidden sm:block flex-shrink-0" />
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-[#e24e1b] font-bold text-base sm:text-lg">2</span>
                    </div>
                    <span className="text-white font-semibold text-xs sm:text-sm text-center break-words px-2">Call (24h)</span>
                  </div>
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white hidden sm:block flex-shrink-0" />
                  <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg flex-shrink-0">
                      <span className="text-[#e24e1b] font-bold text-base sm:text-lg">3</span>
                    </div>
                    <span className="text-white font-semibold text-xs sm:text-sm text-center break-words px-2">Zugang</span>
                  </div>
                </div>
              </div>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </>
  );
};

export default DsgvoComplianceSoftware;
