import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { 
  TrendingUp,
  Clock,
  Shield,
  Users,
  BarChart3,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const StatsSection: React.FC = () => {
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

  const stats = [
    {
      icon: TrendingUp,
      value: 90,
      suffix: '%',
      label: 'Schnellere Audits',
      description: 'Reduzierte Audit-Zeit',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20'
    },
    {
      icon: Clock,
      value: 24,
      suffix: '/7',
      label: 'Monitoring',
      description: 'Rund um die Uhr aktiv',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20'
    },
    {
      icon: Shield,
      value: 100,
      suffix: '%',
      label: 'Compliance',
      description: 'DSGVO & EU AI Act',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20'
    },
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Unternehmen',
      description: 'Vertrauen Marsstein',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20'
    }
  ];

  const Counter = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
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

    return <>{count}</>;
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background relative">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5" />
      </div>

      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <BarChart3 className="h-4 w-4" />
              <span className="text-sm font-medium">Zahlen & Fakten</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Messbare Ergebnisse für Ihr Unternehmen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unsere KI-gestützte Plattform liefert konkrete Verbesserungen in allen Compliance-Bereichen
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card 
                key={index}
                className={cn(
                  "relative overflow-hidden group hover:shadow-xl transition-all duration-500",
                  "hover:scale-105 cursor-pointer",
                  isVisible && "animate-slide-up opacity-0"
                )}
                style={{ 
                  animationDelay: `${index * 150}ms`,
                  animationFillMode: 'forwards'
                }}
              >
                <div className="p-8">
                  <div className={cn(
                    "inline-flex p-4 rounded-2xl mb-6",
                    stat.bgColor
                  )}>
                    <stat.icon className={cn("h-8 w-8", stat.color)} />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-5xl font-bold tracking-tight">
                        {isVisible && <Counter end={stat.value} />}
                      </span>
                      <span className="text-2xl font-semibold text-muted-foreground">
                        {stat.suffix}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold">
                      {stat.label}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {stat.description}
                    </p>
                  </div>

                  {/* Animated background decoration */}
                  <div className={cn(
                    "absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10",
                    stat.bgColor.replace('100', '500').replace('900/20', '500'),
                    "group-hover:scale-150 transition-transform duration-700"
                  )} />
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20">
              <Zap className="h-5 w-5 text-primary animate-pulse" />
              <span className="text-lg font-medium">
                Starten Sie noch heute und erleben Sie den Unterschied
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};