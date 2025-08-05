import React, { useRef, useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Shield,
  TrendingUp,
  Brain,
  Zap,
  Clock,
  Euro,
  AlertTriangle,
  FileCheck,
  Eye,
  Database,
  Rocket
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface TransformationCard {
  id: string;
  problem: {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    impact: string;
    color: string;
    bgGradient: string;
  };
  solution: {
    icon: React.ComponentType<any>;
    title: string;
    description: string;
    benefit: string;
    color: string;
    bgGradient: string;
  };
}

const transformationCards: TransformationCard[] = [
  {
    id: 'fines',
    problem: {
      icon: Euro,
      title: 'Massive Bußgelder',
      description: 'DSGVO-Verstöße können bis zu 4% des Jahresumsatzes oder 20 Millionen Euro kosten.',
      impact: 'Bis zu 20 Mio. €',
      color: 'text-red-600',
      bgGradient: 'from-red-500/10 to-orange-500/10'
    },
    solution: {
      icon: Shield,
      title: 'KI-gestützte Automatisierung',
      description: 'Vollautomatische Compliance-Überwachung und Dokumentation',
      benefit: '85% Zeitersparnis',
      color: 'text-emerald-600',
      bgGradient: 'from-emerald-500/10 to-green-500/10'
    }
  },
  {
    id: 'time',
    problem: {
      icon: Clock,
      title: 'Zeitaufwändige Prozesse',
      description: 'Manuelle Compliance-Vorbereitung verschwendet wertvolle Arbeitszeit und Ressourcen.',
      impact: '120+ Stunden/Audit',
      color: 'text-orange-600',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    },
    solution: {
      icon: Zap,
      title: 'Proaktive Compliance',
      description: 'Frühzeitige Warnung vor Verstößen und automatische Korrekturmaßnahmen',
      benefit: '99% Abdeckung',
      color: 'text-blue-600',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    }
  },
  {
    id: 'complexity',
    problem: {
      icon: TrendingUp,
      title: 'Regulatorische Komplexität',
      description: 'EU AI Act, NIS2, DORA - die Anzahl der Vorschriften wächst exponentiell.',
      impact: '12+ neue Gesetze/Jahr',
      color: 'text-amber-600',
      bgGradient: 'from-amber-500/10 to-orange-500/10'
    },
    solution: {
      icon: Brain,
      title: 'Kontinuierliche Verbesserung',
      description: 'Machine Learning optimiert Ihre Compliance-Prozesse kontinuierlich',
      benefit: '300% Effizienz',
      color: 'text-purple-600',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    }
  },
  {
    id: 'documentation',
    problem: {
      icon: FileCheck,
      title: 'Inkonsistente Dokumentation',
      description: 'Veraltete Richtlinien und fehlende Nachweise erschweren Audits erheblich.',
      impact: '67% unvollständig',
      color: 'text-red-600',
      bgGradient: 'from-red-500/10 to-pink-500/10'
    },
    solution: {
      icon: Database,
      title: 'Multi-Standard Support',
      description: 'DSGVO, ISO 27001, SOC 2, EU AI Act - alles in einer Plattform',
      benefit: '15+ Standards',
      color: 'text-indigo-600',
      bgGradient: 'from-indigo-500/10 to-blue-500/10'
    }
  }
];

export const ScrollTransformation: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      
      const headerHeight = 64; // Header height
      
      // Start sticky earlier - when we can see the header content
      const shouldBeSticky = rect.top <= headerHeight && rect.bottom > headerHeight;
      setIsSticky(shouldBeSticky);

      // Only start animation when section is properly in view and we've scrolled significantly
      let progress = 0;
      
      if (shouldBeSticky && rect.bottom > headerHeight) {
        // Calculate how far we've scrolled into the sticky section
        const scrolledIntoSection = headerHeight - rect.top;
        const availableScrollDistance = sectionHeight - windowHeight;
        
        // Only start progress after we've scrolled 20% into the section
        const animationStartPoint = availableScrollDistance * 0.2;
        const animationDistance = availableScrollDistance * 0.75; // Animation runs for 75% of the scroll distance
        
        if (scrolledIntoSection > animationStartPoint) {
          const adjustedScroll = scrolledIntoSection - animationStartPoint;
          progress = Math.max(0, Math.min(1, adjustedScroll / animationDistance));
        }
      }
      
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative"
      style={{ height: '200vh' }}
    >
      <div className={cn(
        "w-full transition-all duration-300",
        isSticky ? "fixed top-16 left-0 right-0 h-[calc(100vh-4rem)]" : "relative h-screen"
      )}>
        <div className="w-full h-full bg-white">
          <div className="container mx-auto max-w-6xl px-4 py-8">
            {/* Header Section */}
            <div className="text-center mb-6 space-y-3">
              <Badge className={cn(
                "transition-all duration-500 text-sm",
                scrollProgress > 0.5 ? "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" : "bg-red-500/10 text-red-600 border-red-500/20"
              )}>
                <AlertTriangle className="w-4 h-4 mr-1" />
                {scrollProgress > 0.5 ? "Lösungen verfügbar" : "Compliance Herausforderungen"}
              </Badge>
              
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                {scrollProgress < 0.5 ? (
                  <>Compliance kostet deutsche Unternehmen <span className="text-red-600">Milliarden</span></>
                ) : (
                  <>KI-Revolution für <span className="text-emerald-600">Compliance</span></>
                )}
              </h2>
              
              <p className="text-base text-gray-600 max-w-2xl mx-auto">
                {scrollProgress < 0.5 
                  ? "Manuelle Prozesse, zeitaufwändige Audits und Regulierungs-Chaos verschlingen jährlich Milliardenbeträge"
                  : "Automatisierte Lösungen verwandeln Compliance-Herausforderungen in Wettbewerbsvorteile"
                }
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full mb-6 max-w-md mx-auto">
              <div 
                className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 rounded-full transition-all duration-300"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
              {transformationCards.map((card, cardIndex) => {
                // Spread cards evenly across the entire animation with bigger gaps
                const cardStartProgress = cardIndex * 0.2 + 0.1; // Start at 10%, 30%, 50%, 70%
                const cardEndProgress = cardStartProgress + 0.25; // Each card animation lasts 25% of total progress
                
                let cardProgress = 0;
                if (scrollProgress > cardStartProgress) {
                  cardProgress = Math.max(0, Math.min(1, (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress)));
                }
                
                const showSolution = cardProgress > 0.4; // Switch at 40% of card progress
                const morphProgress = Math.max(0, Math.min(1, (cardProgress - 0.2) / 0.4)); // Morph between 20%-60%
                
                return (
                  <div key={card.id} className="relative h-[140px]">
                    {/* Problem Card */}
                    <div
                      className="absolute inset-0 transition-all duration-700"
                      style={{
                        opacity: showSolution ? 0 : 1,
                        transform: `scale(${showSolution ? 0.95 : 1}) translateY(${morphProgress * -10}px)`,
                        pointerEvents: showSolution ? 'none' : 'auto'
                      }}
                    >
                      <Card className={cn(
                        "w-full h-full p-3 border-2 flex flex-col",
                        `bg-gradient-to-br ${card.problem.bgGradient}`,
                        "border-red-200 hover:border-red-300 shadow-md hover:shadow-lg transition-all duration-300"
                      )}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-1.5 rounded bg-red-500/20 shrink-0">
                            <card.problem.icon className={cn("h-4 w-4", card.problem.color)} />
                          </div>
                          <Badge className="bg-red-500/10 text-red-600 border-red-500/20 text-xs">
                            Problem
                          </Badge>
                        </div>
                        
                        <h3 className="text-sm font-bold text-gray-900 mb-1">
                          {card.problem.title}
                        </h3>
                        
                        <p className="text-xs text-gray-600 flex-1 line-clamp-2">
                          {card.problem.description}
                        </p>
                        
                        <div className="mt-2 pt-2 border-t border-red-200">
                          <div className="text-sm font-bold text-red-600">
                            {card.problem.impact}
                          </div>
                        </div>
                      </Card>
                    </div>

                    {/* Solution Card */}
                    <div
                      className="absolute inset-0 transition-all duration-700"
                      style={{
                        opacity: showSolution ? 1 : 0,
                        transform: `scale(${showSolution ? 1 : 0.95}) translateY(${showSolution ? 0 : morphProgress * 10}px)`,
                        pointerEvents: showSolution ? 'auto' : 'none'
                      }}
                    >
                      <Card className={cn(
                        "w-full h-full p-3 border-2 flex flex-col",
                        `bg-gradient-to-br ${card.solution.bgGradient}`,
                        "border-emerald-200 hover:border-emerald-300 shadow-md hover:shadow-lg transition-all duration-300"
                      )}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="p-1.5 rounded bg-emerald-500/20 shrink-0">
                            <card.solution.icon className={cn("h-4 w-4", card.solution.color)} />
                          </div>
                          <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-xs">
                            Lösung
                          </Badge>
                        </div>
                        
                        <h3 className="text-sm font-bold text-gray-900 mb-1">
                          {card.solution.title}
                        </h3>
                        
                        <p className="text-xs text-gray-600 flex-1 line-clamp-2">
                          {card.solution.description}
                        </p>
                        
                        <div className="mt-2 pt-2 border-t border-emerald-200">
                          <div className="text-sm font-bold text-emerald-600">
                            {card.solution.benefit}
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Status Indicator */}
            <div className="text-center mb-6">
              <div
                className={cn(
                  "inline-flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-500",
                  scrollProgress > 0.5 
                    ? "bg-emerald-500/10 text-emerald-600 border border-emerald-500/20" 
                    : "bg-red-500/10 text-red-600 border border-red-500/20"
                )}
              >
                {scrollProgress > 0.5 ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-sm font-semibold">Probleme gelöst mit Marsstein</span>
                  </>
                ) : (
                  <>
                    <AlertTriangle className="h-4 w-4" />
                    <span className="text-sm font-semibold">Typische DACH-Probleme</span>
                  </>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};