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

  const visionStats = [
    {
      icon: TrendingUp,
      value: 90,
      suffix: '%',
      label: 'Zeitersparnis',
      description: 'Unser Ziel bei Audits',
      color: 'text-green-600',
      bgColor: 'bg-green-100 dark:bg-green-900/20',
      badge: 'Ziel'
    },
    {
      icon: Clock,
      value: 24,
      suffix: '/7',
      label: 'Monitoring',
      description: 'Roadmap für 2025',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100 dark:bg-blue-900/20',
      badge: 'Geplant'
    },
    {
      icon: Shield,
      value: 100,
      suffix: '%',
      label: 'Standards-Support',
      description: 'Ziel: Umfassende Abdeckung',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100 dark:bg-purple-900/20',
      badge: 'Roadmap'
    },
    {
      icon: Users,
      value: 500,
      suffix: 'k+',
      label: 'Zielgruppe',
      description: 'EU-Unternehmen adressiert',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100 dark:bg-orange-900/20',
      badge: 'Potenzial'
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
              <span className="text-sm font-medium">🚧 Roadmap & Vision</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Das Potenzial für Ihr Unternehmen
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Unsere Vision: KI-gestützte Compliance-Automatisierung, die Zeit für strategische Arbeit schafft
            </p>
          </div>

          {/* Vision Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {visionStats.map((stat, index) => (
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
                  <div className="flex justify-between items-start mb-6">
                    <div className={cn(
                      "inline-flex p-4 rounded-2xl",
                      stat.bgColor
                    )}>
                      <stat.icon className={cn("h-8 w-8", stat.color)} />
                    </div>
                    <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                      {stat.badge}
                    </div>
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
                Werden Sie Early Adopter und gestalten Sie die Zukunft mit
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};