import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Clock,
  Shield,
  RefreshCw,
  Target,
  Sparkles,
  Users,
  Tag,
  CheckCircle2,
  AlertCircle,
  Building2,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const steps = [
  {
    id: "01",
    icon: AlertCircle,
    title: "Das Problem",
    subtitle: "DSGVO war ein Versprechen, das niemand halten konnte",
    color: "from-red-500/20 to-orange-500/20",
    borderColor: "border-red-500/30",
    iconColor: "text-red-500",
    content: [
      "Ein Moving Target, das immer schneller wegläuft",
      "Gefangen zwischen Angst und Bürokratie",
      "Verschwendete Lebenszeit an sinnlose Formulare"
    ],
    metrics: [
      { value: "120+", label: "Stunden pro Audit", icon: Clock },
      { value: "67%", label: "Unvollständige Docs", icon: AlertCircle },
      { value: "20M€", label: "Maximale Strafe", icon: Shield }
    ]
  },
  {
    id: "02",
    icon: Building2,
    title: "Das Fundament",
    subtitle: "Einmal das Fundament legen",
    color: "from-blue-500/20 to-indigo-500/20",
    borderColor: "border-blue-500/30",
    iconColor: "text-blue-500",
    content: [
      "Unternehmensdaten eingeben",
      "Marsstein baut das Compliance-Haus",
      "Stein auf Stein, automatisch"
    ],
    features: [
      { text: "Automatische Dokumentenerstellung", delay: 0 },
      { text: "KI-gestützte Compliance-Prüfung", delay: 0.1 },
      { text: "Echtzeit-Überwachung", delay: 0.2 },
      { text: "Zentrale Verwaltung", delay: 0.3 }
    ]
  },
  {
    id: "03",
    icon: Sparkles,
    title: "Die Zukunft",
    subtitle: "Ab jetzt läuft DSGVO wie die Buchhaltung",
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "border-emerald-500/30",
    iconColor: "text-emerald-500",
    content: [
      "Niemand denkt mehr daran",
      "Es ist einfach erledigt. Für immer",
      "Fokus auf das, was wirklich zählt"
    ],
    benefits: [
      { icon: Clock, text: "95% Zeitersparnis", value: "95%" },
      { icon: Shield, text: "100% Compliance", value: "100%" },
      { icon: RefreshCw, text: "Automatische Updates", value: "∞" },
      { icon: Target, text: "Fokus aufs Geschäft", value: "100%" }
    ]
  }
];

const AnimatedFeature = ({ text, delay, index }: { text: string; delay: number; index: number }) => {
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setIsComplete(true);
      }, (index + 1) * 1500 + 500);
      return () => clearTimeout(timer);
    }
  }, [isInView, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: delay + (isInView ? 0.5 : 0), duration: 0.5 }}
      className="flex items-center gap-3 py-2"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={isComplete ? { scale: 1 } : { scale: 0.8 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {isComplete ? (
          <CheckCircle2 className="w-5 h-5 text-emerald-500" />
        ) : (
          <div className="w-5 h-5 rounded-full border-2 border-blue-400 flex items-center justify-center">
            <motion.div
              className="w-2 h-2 bg-blue-400 rounded-full"
              animate={{ scale: [0.8, 1.2, 0.8] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </div>
        )}
      </motion.div>
      <span className={cn(
        "text-sm transition-colors duration-300",
        isComplete ? "text-gray-800 font-medium" : "text-gray-600"
      )}>
        {text}
      </span>
    </motion.div>
  );
};

export const ComplianceJourneyModern = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-100/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-100/20 via-transparent to-transparent rounded-full blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <Badge className="mb-4 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-700 border-blue-300/50 backdrop-blur-sm">
            ✓ Die Compliance-Revolution
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
            Von der Last zur Leichtigkeit
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Drei Schritte, die alles verändern. Von der Compliance-Hölle zum automatisierten Paradies.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="relative group"
            >
              {/* Glass Card */}
              <div className={cn(
                "relative h-full backdrop-blur-xl bg-white/60 rounded-2xl border overflow-hidden",
                "transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]",
                step.borderColor
              )}>
                {/* Gradient Background */}
                <div className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-50",
                  step.color
                )} />

                {/* Content */}
                <div className="relative p-8">
                  {/* Step Number & Icon */}
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-6xl font-bold text-gray-200/50">
                      {step.id}
                    </span>
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className={cn(
                        "p-3 rounded-xl bg-white/80 shadow-lg",
                        step.iconColor
                      )}
                    >
                      <step.icon className="w-6 h-6" />
                    </motion.div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-6">
                    {step.subtitle}
                  </p>

                  {/* Content Points */}
                  <div className="space-y-2 mb-6">
                    {step.content.map((point, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-2"
                      >
                        <div className={cn("w-1 h-1 rounded-full mt-2", step.iconColor.replace('text-', 'bg-'))} />
                        <span className="text-sm text-gray-700">{point}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Metrics */}
                  {step.metrics && (
                    <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gray-200/50">
                      {step.metrics.map((metric, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="text-center"
                        >
                          <metric.icon className={cn("w-4 h-4 mx-auto mb-1", step.iconColor)} />
                          <div className="text-lg font-bold text-gray-900">{metric.value}</div>
                          <div className="text-xs text-gray-500">{metric.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {/* Features with Animation */}
                  {step.features && (
                    <div className="space-y-1 pt-6 border-t border-gray-200/50">
                      {step.features.map((feature, i) => (
                        <AnimatedFeature
                          key={i}
                          text={feature.text}
                          delay={feature.delay}
                          index={i}
                        />
                      ))}
                    </div>
                  )}

                  {/* Benefits */}
                  {step.benefits && (
                    <div className="space-y-3 pt-6 border-t border-gray-200/50">
                      {step.benefits.map((benefit, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 * i }}
                          className="flex items-center justify-between p-3 rounded-lg bg-white/50 backdrop-blur-sm"
                        >
                          <div className="flex items-center gap-3">
                            <benefit.icon className={cn("w-4 h-4", step.iconColor)} />
                            <span className="text-sm text-gray-700">{benefit.text}</span>
                          </div>
                          <span className="text-lg font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                            {benefit.value}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Connecting Line (only for first two cards) */}
              {index < 2 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-gray-300 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="backdrop-blur-xl bg-gradient-to-r from-white/80 to-white/60 rounded-3xl border border-gray-200/50 p-8 lg:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 mb-4"
              >
                <Zap className="w-8 h-8 text-blue-600" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">
                Jetzt durchstarten
              </h3>
              <p className="text-gray-600">
                Gestalten Sie die Zukunft der Compliance mit uns
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200"
              >
                <Users className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700">Exklusive Community</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200"
              >
                <Tag className="w-4 h-4 text-green-600" />
                <span className="text-sm font-medium text-green-700">50% Rabatt nach Beta</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-50 border border-purple-200"
              >
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700">Kostenlos testen</span>
              </motion.div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/dsgvo-compliance-software"
                className="group relative inline-flex items-center justify-center px-8 py-4 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:scale-110" />
                <span className="relative flex items-center gap-2">
                  Jetzt Early Bird Preis sichern
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
              <Link
                to="/preise"
                className="inline-flex items-center justify-center px-8 py-4 text-gray-700 font-medium bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                Preise ansehen
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};