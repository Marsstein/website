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
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
    impact: string;
    color: string;
    bgGradient: string;
  };
  solution: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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

// DIAGNOSTIC VERSION: Aufdeckung des echten Problems
export const ScrollTransformationDiagnostic: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [diagnostics, setDiagnostics] = useState<Record<string, unknown>>({});
  const [renderCount, setRenderCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastRenderTime = useRef(Date.now());

  // Track render performance
  useEffect(() => {
    setRenderCount(prev => prev + 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
    const now = Date.now();
    const timeSinceLastRender = now - lastRenderTime.current;
    lastRenderTime.current = now;
    
    if (timeSinceLastRender > 50) {
      console.warn(`Slow render detected: ${timeSinceLastRender}ms`);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const startTime = performance.now();
      
      // Collect comprehensive diagnostics
      const scrollY = window.scrollY;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      const headerHeight = 64;
      
      // Check for layout issues
      const computedStyle = window.getComputedStyle(sectionRef.current);
      const parentElement = sectionRef.current.parentElement;
      const parentStyle = parentElement ? window.getComputedStyle(parentElement) : null;
      
      // Multiple calculations for comparison
      const method1_sticky = rect.top <= headerHeight && rect.bottom > windowHeight;
      const method2_sticky = scrollY >= (scrollY + rect.top - headerHeight) && rect.bottom > windowHeight;
      
      // Progress calculations
      const sectionTop = scrollY + rect.top;
      const stickyStart = sectionTop - headerHeight;
      const stickyEnd = stickyStart + (sectionHeight - windowHeight);
      
      let progress1 = 0; // Based on rect.top
      if (rect.top <= headerHeight && rect.bottom > headerHeight) {
        const scrolledPast = headerHeight - rect.top;
        const totalDistance = sectionHeight - windowHeight;
        progress1 = totalDistance > 0 ? scrolledPast / totalDistance : 0;
      }
      
      let progress2 = 0; // Based on absolute positions
      if (scrollY >= stickyStart && scrollY <= stickyEnd) {
        progress2 = (scrollY - stickyStart) / (stickyEnd - stickyStart);
      } else if (scrollY > stickyEnd) {
        progress2 = 1;
      }
      
      // Use method 1 for now
      setIsSticky(method1_sticky);
      setScrollProgress(Math.max(0, Math.min(1, progress1)));
      
      const endTime = performance.now();
      const calculationTime = endTime - startTime;
      
      // Comprehensive diagnostics
      setDiagnostics({
        scrollY: Math.round(scrollY),
        sectionTop: Math.round(rect.top),
        sectionBottom: Math.round(rect.bottom),
        sectionHeight: Math.round(sectionHeight),
        windowHeight: Math.round(windowHeight),
        method1_sticky,
        method2_sticky,
        progress1: Math.round(progress1 * 100),
        progress2: Math.round(progress2 * 100),
        stickyStart: Math.round(stickyStart),
        stickyEnd: Math.round(stickyEnd),
        calculationTime: calculationTime.toFixed(2),
        renderCount,
        // CSS diagnostics
        position: computedStyle.position,
        zIndex: computedStyle.zIndex,
        transform: computedStyle.transform,
        overflow: computedStyle.overflow,
        parentOverflow: parentStyle?.overflow || 'unknown',
        // Layout diagnostics
        offsetTop: sectionRef.current.offsetTop,
        offsetLeft: sectionRef.current.offsetLeft,
        clientHeight: sectionRef.current.clientHeight,
        scrollHeight: sectionRef.current.scrollHeight
      });
    };

    // Use both scroll and resize listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [renderCount]);

  return (
    <section 
      ref={sectionRef}
      className="relative"
      style={{ height: '300vh' }}
    >
      {/* Comprehensive Debug Panel */}
      <div className="fixed top-4 left-4 z-50 bg-red-700 text-white p-4 rounded text-xs max-w-md">
        <div className="font-bold mb-2">🔍 DIAGNOSTIC MODE</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>ScrollY: {diagnostics.scrollY}</div>
          <div>SectionTop: {diagnostics.sectionTop}</div>
          <div>SectionBottom: {diagnostics.sectionBottom}</div>
          <div>WindowHeight: {diagnostics.windowHeight}</div>
          <div>Method1 Sticky: {diagnostics.method1_sticky ? 'YES' : 'NO'}</div>
          <div>Method2 Sticky: {diagnostics.method2_sticky ? 'YES' : 'NO'}</div>
          <div>Progress1: {diagnostics.progress1}%</div>
          <div>Progress2: {diagnostics.progress2}%</div>
          <div>StickyStart: {diagnostics.stickyStart}</div>
          <div>StickyEnd: {diagnostics.stickyEnd}</div>
          <div>CalcTime: {diagnostics.calculationTime}ms</div>
          <div>Renders: {diagnostics.renderCount}</div>
          <div>Position: {diagnostics.position}</div>
          <div>ZIndex: {diagnostics.zIndex}</div>
          <div>Overflow: {diagnostics.overflow}</div>
          <div>ParentOverflow: {diagnostics.parentOverflow}</div>
          <div>OffsetTop: {diagnostics.offsetTop}</div>
          <div>ClientHeight: {diagnostics.clientHeight}</div>
        </div>
        {diagnostics.calculationTime > 5 && (
          <div className="mt-2 text-yellow-300">⚠️ Slow calculation detected!</div>
        )}
        {diagnostics.method1_sticky !== diagnostics.method2_sticky && (
          <div className="mt-2 text-red-300">🚨 Sticky methods disagree!</div>
        )}
        {Math.abs(diagnostics.progress1 - diagnostics.progress2) > 10 && (
          <div className="mt-2 text-orange-300">⚠️ Progress methods differ!</div>
        )}
      </div>
      
      <div className={cn(
        "w-full transition-all duration-300",
        isSticky ? "fixed top-16 left-0 right-0 h-[calc(100vh-4rem)] z-30" : "relative h-screen"
      )}>
        <div className="w-full h-full bg-white overflow-y-auto">
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
                const cardStartProgress = cardIndex / transformationCards.length;
                const cardEndProgress = (cardIndex + 1) / transformationCards.length;
                const cardProgress = Math.max(0, Math.min(1, (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress)));
                const showSolution = cardProgress > 0.3;
                
                return (
                  <div key={card.id} className="relative h-[140px]">
                    {/* Problem Card */}
                    <div
                      className={cn(
                        "absolute inset-0 transition-all duration-500",
                        showSolution ? "opacity-0 scale-95 pointer-events-none" : "opacity-100 scale-100"
                      )}
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
                      className={cn(
                        "absolute inset-0 transition-all duration-500",
                        showSolution ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                      )}
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

            {/* CTA Section */}
            <div className={cn(
              "transition-all duration-500",
              scrollProgress > 0.7 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            )}>
              <Card className="p-6 bg-gradient-to-r from-emerald-50 to-blue-50 border-2 border-emerald-200 shadow-lg">
                <div className="text-center space-y-4">
                  <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Transformation starten
                  </Badge>
                  
                  <h3 className="text-xl font-bold text-gray-900">
                    Bereit für die <span className="text-emerald-600">Compliance-Revolution?</span>
                  </h3>
                  
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    DIAGNOSTIC: Deep Root Cause Analysis with comprehensive metrics
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <Link to="/contact?demo=true">
                      <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-2 text-sm font-semibold shadow hover:shadow-lg transition-all">
                        <Rocket className="mr-2 h-4 w-4" />
                        Kostenlose Demo
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};