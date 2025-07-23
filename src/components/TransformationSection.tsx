import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp,
  Clock,
  Euro,
  Users,
  ArrowRight,
  Sparkles,
  Target
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const TransformationSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const transformations = [
    {
      before: {
        icon: Clock,
        title: 'Vorher',
        subtitle: 'Compliance-Chaos',
        stats: [
          { label: 'Audit-Vorbereitung', value: '120+ Stunden', color: 'text-red-600' },
          { label: 'Manuelle Prozesse', value: '85%', color: 'text-red-600' },
          { label: 'Fehlerrate', value: '23%', color: 'text-red-600' },
          { label: 'Stress-Level', value: 'Maximum', color: 'text-red-600' }
        ],
        bgColor: 'from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20',
        borderColor: 'border-red-200 dark:border-red-800'
      },
      after: {
        icon: Sparkles,
        title: 'Nachher',
        subtitle: 'Mit Marsstein',
        stats: [
          { label: 'Audit-Vorbereitung', value: '30 Minuten', color: 'text-green-600' },
          { label: 'Automatisierung', value: '95%', color: 'text-green-600' },
          { label: 'Fehlerrate', value: '<1%', color: 'text-green-600' },
          { label: 'Stress-Level', value: 'Minimal', color: 'text-green-600' }
        ],
        bgColor: 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20',
        borderColor: 'border-green-200 dark:border-green-800'
      }
    }
  ];

  const benefits = [
    {
      icon: TrendingUp,
      title: '400% Effizienzsteigerung',
      description: 'Automatisierte Prozesse steigern die Produktivität um das Vierfache',
      color: 'text-green-600'
    },
    {
      icon: Euro,
      title: '€50k+ Kostenoptimierung/Jahr',
      description: 'Reduzierte Personalkosten, minimierte Compliance-Risiken, weniger externe Beratung',
      color: 'text-blue-600'
    },
    {
      icon: Users,
      title: 'Strategischer Fokus',
      description: 'Mitarbeiter können sich auf wertschöpfende Tätigkeiten konzentrieren',
      color: 'text-purple-600'
    }
  ];

  const AnimatedNumber = ({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;
      
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      
      requestAnimationFrame(step);
    }, [end, duration, isVisible]);

    return <>{count}{suffix}</>;
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-red/5 to-green-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400">
              <Target className="h-4 w-4" />
              <span className="text-sm font-medium">Die Transformation</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ihr Unternehmen
              <span className="bg-gradient-to-r from-brand-red to-green-600 bg-clip-text text-transparent mx-2">
                vor und nach
              </span>
              Marsstein
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Sehen Sie, wie sich Ihr Arbeitsalltag dramatisch verbessert
            </p>
          </div>

          {/* Before/After Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Before */}
            <Card className={cn(
              "p-8 relative overflow-hidden transition-all duration-500 border-2",
              transformations[0].before.borderColor,
              "bg-gradient-to-br",
              transformations[0].before.bgColor
            )}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-red-100 dark:bg-red-900 rounded-full">
                    {React.createElement(transformations[0].before.icon, { className: "h-6 w-6 text-red-600" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {transformations[0].before.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {transformations[0].before.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {transformations[0].before.stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white dark:bg-gray-900 rounded-lg">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
                      <span className={cn("font-bold", stat.color)}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stress indicators */}
              <div className="absolute top-4 right-4 flex gap-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-100" />
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse delay-200" />
              </div>
            </Card>

            {/* After */}
            <Card className={cn(
              "p-8 relative overflow-hidden transition-all duration-500 border-2",
              transformations[0].after.borderColor,
              "bg-gradient-to-br",
              transformations[0].after.bgColor
            )}>
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full">
                    {React.createElement(transformations[0].after.icon, { className: "h-6 w-6 text-green-600" })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {transformations[0].after.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {transformations[0].after.subtitle}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {transformations[0].after.stats.map((stat, index) => (
                    <div key={index} className="flex justify-between items-center p-3 bg-white dark:bg-gray-900 rounded-lg">
                      <span className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</span>
                      <span className={cn("font-bold", stat.color)}>{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Success indicators */}
              <div className="absolute top-4 right-4 flex gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-100" />
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-200" />
              </div>
            </Card>
          </div>

          {/* Arrow between cards (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="p-4 bg-white dark:bg-gray-900 rounded-full shadow-xl border-2 border-gray-200 dark:border-gray-700">
              <ArrowRight className="h-8 w-8 text-brand-red animate-pulse" />
            </div>
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <Card 
                key={index}
                className={cn(
                  "p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105",
                  "animate-slide-up opacity-0"
                )}
                style={{ 
                  animationDelay: `${(index + 3) * 200}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className={cn(
                  "inline-flex p-4 rounded-full mb-4",
                  benefit.color.replace('text-', 'bg-') + '/10'
                )}>
                  <benefit.icon className={cn("h-8 w-8", benefit.color)} />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </Card>
            ))}
          </div>

          {/* ROI Calculator */}
          <Card className="p-8 bg-gradient-to-r from-brand-red/5 to-green-500/5 border-2 border-brand-red/20">
            <div className="text-center space-y-6">
              <h3 className="text-3xl font-bold">
                Return on Investment
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-brand-red">
                    {isVisible && <AnimatedNumber end={300} suffix="%" />}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">ROI im ersten Jahr</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-green-600">
                    €{isVisible && <AnimatedNumber end={75} />}k
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Durchschnittliche Ersparnis</p>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-blue-600">
                    {isVisible && <AnimatedNumber end={6} />} Monate
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Break-Even Point</p>
                </div>
              </div>

              <Link to="/contact?demo=true">
                <Button 
                  size="lg" 
                  className="bg-brand-red hover:bg-brand-red/90 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                >
                  <Target className="mr-2 h-5 w-5" />
                  ROI-Analyse anfordern
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};