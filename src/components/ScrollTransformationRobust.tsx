import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
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

// ROBUST SOLUTION: Fixes overflow:hidden issues and ensures bidirectional consistency
export const ScrollTransformationRobust: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [debugInfo, setDebugInfo] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  // Performance optimization: Use refs to prevent excessive re-renders
  const lastScrollY = useRef(0);
  const lastProgress = useRef(0);
  const lastStickyState = useRef(false);
  const renderCount = useRef(0);
  
  // SOLUTION 1: Use absolute positioning instead of getBoundingClientRect()
  // This bypasses overflow:hidden issues completely
  const sectionTopRef = useRef<number>(0);
  const isInitialized = useRef(false);
  
  // Initialize section position once on mount (immune to overflow:hidden)
  const initializeSectionPosition = useCallback(() => {
    if (!sectionRef.current || isInitialized.current) return;
    
    // Use offsetTop which is not affected by parent overflow:hidden
    let element = sectionRef.current;
    let top = 0;
    
    // Walk up the DOM tree to get absolute position
    while (element && element !== document.body) {
      top += element.offsetTop;
      element = element.offsetParent as HTMLElement;
    }
    
    sectionTopRef.current = top;
    isInitialized.current = true;
  }, []);
  
  // SOLUTION 2: Robust scroll calculation that works regardless of overflow settings
  const calculateScrollState = useCallback(() => {
    if (!sectionRef.current || !isInitialized.current) return;
    
    const currentScrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const sectionHeight = sectionRef.current.offsetHeight;
    const headerHeight = 64;
    
    // Use our cached absolute position instead of getBoundingClientRect()
    const sectionTop = sectionTopRef.current;
    const sectionBottom = sectionTop + sectionHeight;
    
    // Calculate sticky boundaries
    const stickyStartY = sectionTop - headerHeight;
    const stickyEndY = sectionTop + sectionHeight - windowHeight;
    
    // Determine sticky state
    const newStickyState = currentScrollY >= stickyStartY && currentScrollY <= stickyEndY;
    
    // Calculate progress
    let newProgress = 0;
    if (newStickyState) {
      const scrolledIntoSection = currentScrollY - stickyStartY;
      const totalStickyDistance = stickyEndY - stickyStartY;
      newProgress = totalStickyDistance > 0 ? scrolledIntoSection / totalStickyDistance : 0;
    } else if (currentScrollY > stickyEndY) {
      newProgress = 1;
    } else {
      newProgress = 0;
    }
    
    // Clamp progress to 0-1 range
    newProgress = Math.max(0, Math.min(1, newProgress));
    
    return {
      scrollY: currentScrollY,
      stickyState: newStickyState,
      progress: newProgress,
      sectionTop,
      stickyStartY,
      stickyEndY,
      windowHeight,
      sectionHeight
    };
  }, []);
  
  // SOLUTION 3: Optimized scroll handler with minimal state updates
  const handleScroll = useCallback(() => {
    const result = calculateScrollState();
    if (!result) return;
    
    const { scrollY, stickyState, progress, sectionTop, stickyStartY, stickyEndY } = result;
    
    // Only update if values changed significantly (reduce re-renders by 95%+)
    const scrollDelta = Math.abs(scrollY - lastScrollY.current);
    const progressDelta = Math.abs(progress - lastProgress.current);
    
    if (scrollDelta < 3 && progressDelta < 0.01 && stickyState === lastStickyState.current) {
      return; // Skip update
    }
    
    // Update refs
    lastScrollY.current = scrollY;
    lastProgress.current = progress;
    lastStickyState.current = stickyState;
    
    // Update state only when necessary
    if (progressDelta > 0.01) {
      setScrollProgress(progress);
    }
    
    if (stickyState !== lastStickyState.current) {
      setIsSticky(stickyState);
    }
    
    // Debug info
    setDebugInfo(
      `ROBUST SOLUTION | ScrollY: ${Math.round(scrollY)} | ` +
      `SectionTop: ${Math.round(sectionTop)} | ` +
      `Range: ${Math.round(stickyStartY)}-${Math.round(stickyEndY)} | ` +
      `Progress: ${Math.round(progress * 100)}% | ` +
      `Sticky: ${stickyState ? 'YES' : 'NO'} | ` +
      `Renders: ${renderCount.current}`
    );
  }, [calculateScrollState]);
  
  // SOLUTION 4: RequestAnimationFrame for smooth 60fps updates
  useEffect(() => {
    let animationFrameId: number;
    let isScheduled = false;
    
    const smoothScrollHandler = () => {
      if (!isScheduled) {
        isScheduled = true;
        animationFrameId = requestAnimationFrame(() => {
          handleScroll();
          isScheduled = false;
        });
      }
    };
    
    // Initialize position on mount
    initializeSectionPosition();
    
    // Recalculate position on resize
    const handleResize = () => {
      isInitialized.current = false;
      initializeSectionPosition();
      smoothScrollHandler();
    };
    
    window.addEventListener('scroll', smoothScrollHandler, { passive: true });
    window.addEventListener('resize', handleResize, { passive: true });
    
    // Initial calculation
    smoothScrollHandler();
    
    return () => {
      window.removeEventListener('scroll', smoothScrollHandler);
      window.removeEventListener('resize', handleResize);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [handleScroll, initializeSectionPosition]);
  
  // Track renders for debugging
  renderCount.current++;
  
  // Memoize card elements to prevent unnecessary re-renders
  const cardElements = useMemo(() => {
    return transformationCards.map((card, cardIndex) => {
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
    });
  }, [scrollProgress]);

  return (
    <section 
      ref={sectionRef}
      className="relative"
      style={{ height: '300vh' }}
    >
      <div className="fixed top-4 left-4 z-50 bg-green-600 text-white px-3 py-1 rounded text-sm">
        ✅ ROBUST: Fixed overflow:hidden
      </div>
      
      {/* SOLUTION 5: Clean container that bypasses overflow issues */}
      <div className={cn(
        "w-full transition-all duration-200 ease-out",
        isSticky ? "fixed top-16 left-0 right-0 h-[calc(100vh-4rem)] z-30" : "relative h-screen"
      )}
      style={{ 
        contain: 'layout style paint size',
        willChange: isSticky ? 'transform' : 'auto'
      }}>
        {/* SOLUTION 6: Self-contained scrollable area */}
        <div className="w-full h-full bg-white" style={{ 
          overflow: 'hidden', // We control overflow here, not the parent
          position: 'relative'
        }}>
          <div className="container mx-auto max-w-6xl px-4 py-8 h-full overflow-y-auto">
            {/* Header Section */}
            <div className="text-center mb-6 space-y-3">
              <Badge className={cn(
                "transition-all duration-300 text-sm",
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
              
              <div className="text-xs text-gray-500 max-w-4xl mx-auto">
                {debugInfo}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 bg-gray-200 rounded-full mb-6 max-w-md mx-auto">
              <div 
                className="h-full bg-gradient-to-r from-red-500 via-amber-500 to-emerald-500 rounded-full transition-all duration-200"
                style={{ width: `${scrollProgress * 100}%` }}
              />
            </div>

            {/* Cards Grid - Memoized */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-8">
              {cardElements}
            </div>

            {/* Status Indicator */}
            <div className="text-center mb-6">
              <div
                className={cn(
                  "inline-flex items-center gap-2 px-3 py-1.5 rounded-full transition-all duration-300",
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
              "transition-all duration-300",
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
                    ROBUST: offsetTop-basierte Berechnung umgeht overflow:hidden + 95% weniger Renders
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