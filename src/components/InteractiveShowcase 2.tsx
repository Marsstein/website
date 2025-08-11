import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Shield,
  Zap,
  Users,
  TrendingUp,
  Clock,
  CheckCircle2,
  ArrowRight,
  Play,
  Sparkles,
  BarChart3
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ShowcaseData {
  metric: string;
  value: string;
  change: string;
  icon: React.ComponentType<any>;
  color: string;
}

const showcaseData: ShowcaseData[] = [
  {
    metric: 'Compliance Score',
    value: '98.7%',
    change: '+12.3%',
    icon: Shield,
    color: 'text-green-600'
  },
  {
    metric: 'Automatisierung',
    value: '89%',
    change: '+45.2%',
    icon: Zap,
    color: 'text-blue-600'
  },
  {
    metric: 'Active Users',
    value: '12.4K',
    change: '+23.1%',
    icon: Users,
    color: 'text-purple-600'
  },
  {
    metric: 'Zeit Ersparnis',
    value: '127h',
    change: '+67.8%',
    icon: Clock,
    color: 'text-orange-600'
  }
];

const benefits = [
  {
    title: 'KI-gestützte Automatisierung',
    description: 'Intelligente Workflows reduzieren manuelle Arbeit um bis zu 85%',
    href: '/tools/compliance-ai-assistant'
  },
  {
    title: 'Echtzeit-Monitoring',
    description: '24/7 Überwachung mit sofortigen Benachrichtigungen bei Anomalien',
    href: '/dashboard'
  },
  {
    title: 'Multi-Framework Support',
    description: 'DSGVO, ISO 27001, SOC 2, TISAX und weitere in einer Plattform',
    href: '/wissen/zertifizierungen'
  },
  {
    title: 'Europäische Datensicherheit',
    description: 'DSGVO-konforme Datenverarbeitung in europäischen Rechenzentren',
    href: '/branchen'
  }
];

export const InteractiveShowcase: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const [counters, setCounters] = useState<Record<string, number>>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            startCounterAnimations();
            startMetricRotation();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const startCounterAnimations = () => {
    showcaseData.forEach((item, index) => {
      const numericValue = parseFloat(item.value.replace(/[^\d.]/g, ''));
      let currentValue = 0;
      const increment = numericValue / 50;
      
      const counter = setInterval(() => {
        currentValue += increment;
        if (currentValue >= numericValue) {
          currentValue = numericValue;
          clearInterval(counter);
        }
        
        setCounters(prev => ({
          ...prev,
          [item.metric]: currentValue
        }));
      }, 40);
    });
  };

  const startMetricRotation = () => {
    intervalRef.current = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % showcaseData.length);
    }, 3000);
  };

  const formatValue = (metric: string, value: number): string => {
    const originalValue = showcaseData.find(item => item.metric === metric)?.value || '';
    
    if (originalValue.includes('%')) {
      return `${value.toFixed(1)}%`;
    } else if (originalValue.includes('K')) {
      return `${(value / 1000).toFixed(1)}K`;
    } else if (originalValue.includes('h')) {
      return `${Math.round(value)}h`;
    }
    return Math.round(value).toString();
  };

  return (
    <section 
      ref={sectionRef}
      className="py-12 bg-gradient-to-b from-white via-[#E6F2FF]/20 to-white relative overflow-hidden"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.02)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Left Side: Interactive Dashboard */}
          <div className="space-y-6">
            <div className="space-y-3">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <BarChart3 className="w-4 h-4 mr-1" />
                Live Dashboard
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Compliance in <span className="text-primary">Echtzeit</span> verfolgen
              </h2>
              
              <p className="text-base text-muted-foreground">
                Behalten Sie den Überblick über alle Compliance-Metriken mit unserem 
                interaktiven Dashboard und KI-gestützten Insights.
              </p>
            </div>

            {/* Compact Metrics */}
            <div className="grid grid-cols-2 gap-3">
              {showcaseData.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeMetric === index;
                const currentValue = counters[item.metric] || 0;
                
                return (
                  <Card
                    key={item.metric}
                    className={cn(
                      "p-3 bg-white/60 backdrop-blur-sm border-white/60 shadow-sm cursor-pointer transition-all duration-300 relative overflow-hidden hover:shadow-md",
                      isActive && "ring-2 ring-primary/50 scale-102"
                    )}
                    onClick={() => setActiveMetric(index)}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Icon className={cn("h-4 w-4", item.color)} />
                        <span className="text-xs text-green-600 font-medium">
                          {item.change}
                        </span>
                      </div>
                      
                      <div className="text-xl font-bold text-card-foreground">
                        {isVisible ? formatValue(item.metric, currentValue) : '0'}
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        {item.metric}
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Compact CTA */}
            <div className="pt-2">
              <Link to="/dashboard">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]">
                  <Play className="mr-2 h-4 w-4" />
                  Live Demo ansehen
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Compact Benefits */}
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className="p-4 bg-white/60 backdrop-blur-sm border-white/60 shadow-sm group cursor-pointer hover:shadow-md transition-all duration-200"
              >
                <Link to={benefit.href} className="block">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                      <CheckCircle2 className="h-4 w-4 text-primary" />
                    </div>
                    
                    <div className="flex-1 space-y-1">
                      <h3 className="text-base font-semibold text-card-foreground group-hover:text-primary transition-colors duration-200">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {benefit.description}
                      </p>
                    </div>
                    
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  </div>
                </Link>
              </Card>
            ))}

            {/* Compact Stats */}
            <Card className="p-4 bg-primary/5 border-primary/20 mt-4">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center space-x-2">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-muted-foreground">
                    Professionelle Compliance-Lösungen
                  </span>
                </div>
                <div className="text-lg font-bold text-primary">
                  Werden Sie Teil der Compliance-Revolution
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};