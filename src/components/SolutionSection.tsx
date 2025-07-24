import React, { useState, useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Brain,
  Clock,
  Target,
  TrendingUp,
  RefreshCw,
  Euro,
  Users,
  Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const SolutionSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;

      const timelineElement = timelineRef.current;
      const rect = timelineElement.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate when timeline is in view
      const timelineTop = rect.top;
      const timelineHeight = rect.height;

      // Start progress when timeline enters viewport, complete when it leaves
      const startPoint = windowHeight;
      const endPoint = -timelineHeight;

      if (timelineTop <= startPoint && timelineTop >= endPoint) {
        const progress = Math.max(0, Math.min(100,
          ((startPoint - timelineTop) / (startPoint - endPoint)) * 100
        ));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      number: '1',
      title: 'KI-gestützte Analyse',
      description: 'Automatisierte Dokumentenanalyse identifiziert Compliance-Lücken und generiert präzise Handlungsempfehlungen.',
      icon: Brain,
      color: 'from-blue-500 to-purple-600'
    },
    {
      number: '2',
      title: 'Integrierte Workflow-Automation',
      description: 'Nahtlose Automatisierung von der Dokumentenerstellung bis zur Audit-Berichterstattung.',
      icon: Zap,
      color: 'from-purple-500 to-pink-600'
    },
    {
      number: '3',
      title: 'Kontinuierliches Monitoring',
      description: 'Proaktive Überwachung gewährleistet kontinuierliche Compliance-Konformität.',
      icon: Shield,
      color: 'from-green-500 to-teal-600'
    },
    {
      number: '4',
      title: 'Erweiterte Berichterstattung',
      description: 'Detaillierte Berichte und Analysen für fundierte Entscheidungen.',
      icon: Eye,
      color: 'from-orange-500 to-yellow-600'
    }
  ];

  return (
    <section className="py-20 md:py-28 relative bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-brand-red/3 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-transparent to-green-500/3 rounded-full blur-3xl" />
      </div>

      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-medium">Die Lösung</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Intelligente Compliance-Lösung
              <br />
              <span className="bg-gradient-to-r from-brand-red to-red-600 bg-clip-text text-transparent">
                für moderne Unternehmen
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Marsstein automatisiert komplexe Compliance-Prozesse durch KI-gestützte
              Technologie und ermöglicht effiziente, skalierbare Workflows.
            </p>
          </div>

          {/* Slides Section */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <step.icon className="h-8 w-8 text-brand-red" aria-hidden="true" />
                </div>
                <h4 className="text-lg font-semibold">{step.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modern Vertical Timeline Process */}
      <div className="relative max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 mt-14">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-red/10 to-orange-500/10 border border-brand-red/20 mb-6">
            <Target className="h-5 w-5 text-brand-red" />
            <span className="text-sm font-semibold text-brand-red">Intelligenter Prozess</span>
          </div>
          <h3 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Marsstein Compliance-Plattform:
            <span className="bg-gradient-to-r from-brand-red via-red-600 to-orange-500 bg-clip-text text-transparent block"> 
              Automatisiert und effizient
            </span>
          </h3>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Drei intelligente Schritte transformieren Ihre manuelle Compliance in ein automatisiertes System.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="w-full h-full bg-gradient-to-b from-brand-red via-purple-500 to-green-500 rounded-full opacity-20"></div>
            <div 
              className="absolute top-0 w-full bg-gradient-to-b from-brand-red via-purple-500 to-green-500 rounded-full transition-all duration-300" 
              style={{ height: `${scrollProgress}%` }}
            ></div>
          </div>

          {/* Timeline Steps */}
          <div className="space-y-24 md:space-y-12">
            {steps.map((step, index) => (
              <div key={index} className={cn(
                "relative flex flex-col md:flex-row items-center",
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              )}>
                {/* Content Card */}
                <div className={cn(
                  "w-full md:w-5/12 relative group",
                  index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                )}>
                  <Card className="p-8 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-2 hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group-hover:border-brand-red/30">
                    <div className="space-y-6">
                      {/* Step Header */}
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110",
                          step.color
                        )}>
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className="bg-brand-red/10 text-brand-red border-brand-red/20">
                              Schritt {step.number}
                            </Badge>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {index + 1}/3
                            </div>
                          </div>
                          <h4 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-brand-red transition-colors">
                            {step.title}
                          </h4>
                        </div>
                      </div>

                      {/* Step Description */}
                      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        {step.description}
                      </p>

                      {/* Interactive Progress Bar */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-500 dark:text-gray-400">Fortschritt</span>
                          <span className="font-semibold text-brand-red">{Math.round((index + 1) / 3 * 100)}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={cn(
                              "h-full bg-gradient-to-r transition-all duration-1000 ease-out rounded-full",
                              step.color
                            )}
                            style={{ 
                              width: `${(index + 1) * 33.33}%`,
                              boxShadow: `0 0 10px ${index === 0 ? '#3b82f6' : index === 1 ? '#8b5cf6' : '#10b981'}40`
                            }}
                          />
                        </div>
                      </div>

                      {/* Enhanced Key Benefits */}
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { label: index === 0 ? "Zeitersparnis" : index === 1 ? "Automation" : index === 2 ? "Überwachung" : "Berichterstattung", 
                            value: index === 0 ? "85%" : index === 1 ? "24/7" : index === 2 ? "Real-time" : "Detailliert",
                            color: index === 0 ? "from-blue-500 to-purple-600" : index === 1 ? "from-purple-500 to-pink-600" : index === 2 ? "from-green-500 to-teal-600" : "from-orange-500 to-yellow-600",
                            icon: index === 0 ? Clock : index === 1 ? RefreshCw : index === 2 ? Shield : Eye },
                          { label: index === 0 ? "Genauigkeit" : index === 1 ? "Integration" : index === 2 ? "Alerts" : "Flexibilität", 
                            value: index === 0 ? "99%" : index === 1 ? "Nahtlos" : index === 2 ? "Sofort" : "Hoch",
                            color: index === 0 ? "from-emerald-500 to-cyan-600" : index === 1 ? "from-orange-500 to-red-600" : index === 2 ? "from-yellow-500 to-orange-600" : "from-red-500 to-pink-600",
                            icon: index === 0 ? Target : index === 1 ? Zap : index === 2 ? TrendingUp : CheckCircle }
                        ].map((benefit, i) => (
                          <div key={i} className="group relative overflow-hidden">
                            <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border-2 border-gray-100 dark:border-gray-800 hover:border-transparent transition-all duration-500 hover:scale-105 hover:shadow-xl relative z-10">
                              {/* Animated background gradient */}
                              <div className={cn(
                                "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-xl",
                                benefit.color
                              )} />
                              
                              {/* Icon */}
                              <div className={cn(
                                "w-8 h-8 rounded-lg bg-gradient-to-br flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300",
                                benefit.color
                              )}>
                                <benefit.icon className="h-4 w-4 text-white" />
                              </div>
                              
                              {/* Value with counter animation */}
                              <div className="text-center relative">
                                <div className={cn(
                                  "text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent mb-1 group-hover:scale-110 transition-transform duration-300",
                                  benefit.color
                                )}>
                                  {benefit.value}
                                </div>
                                <div className="text-xs font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                                  {benefit.label}
                                </div>
                              </div>
                              
                              {/* Animated border glow */}
                              <div className={cn(
                                "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r p-[2px] -z-10",
                                benefit.color
                              )}>
                                <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl" />
                              </div>
                            </div>
                            
                            {/* Floating particles */}
                            <div className={cn(
                              "absolute -top-1 -right-1 w-3 h-3 rounded-full opacity-0 group-hover:opacity-60 group-hover:animate-bounce transition-all duration-500",
                              `bg-gradient-to-r ${benefit.color.split(' ')[0]} ${benefit.color.split(' ')[1]}`
                            )} />
                            <div className={cn(
                              "absolute -bottom-1 -left-1 w-2 h-2 rounded-full opacity-0 group-hover:opacity-40 group-hover:animate-pulse transition-all duration-700",
                              `bg-gradient-to-r ${benefit.color.split(' ')[0]} ${benefit.color.split(' ')[1]}`
                            )} />
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Floating decoration */}
                    <div className={cn(
                      "absolute -top-4 w-8 h-8 rounded-full opacity-20 group-hover:opacity-40 transition-opacity animate-pulse",
                      index % 2 === 0 ? "-right-4" : "-left-4",
                      index === 0 ? "bg-gradient-to-br from-blue-500 to-purple-500" : 
                      index === 1 ? "bg-gradient-to-br from-purple-500 to-pink-500" : 
                      index === 2 ? "bg-gradient-to-br from-green-500 to-teal-500" :
                      "bg-gradient-to-br from-orange-500 to-yellow-500"
                    )} />
                  </Card>

                  {/* Connection Arrow */}
                  <div className={cn(
                    "absolute top-1/2 transform -translate-y-1/2 w-8 h-8 bg-white dark:bg-gray-900 border-2 border-brand-red rounded-full flex items-center justify-center shadow-lg z-10",
                    index % 2 === 0 ? "-right-4" : "-left-4"
                  )}>
                    <ArrowRight className={cn(
                      "h-4 w-4 text-brand-red",
                      index % 2 !== 0 && "rotate-180"
                    )} />
                  </div>
                </div>

                {/* Central Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-brand-red to-red-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-20 animate-pulse">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-red to-red-600 rounded-full animate-ping opacity-30"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
