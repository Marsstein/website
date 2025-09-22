import React, { useRef, useState, useEffect, useCallback } from 'react';
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

// ULTIMATE DIAGNOSTIC VERSION: Deep analysis of scroll behavior
export const ScrollTransformationUltimateDiagnostic: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [sessionData, setSessionData] = useState<any[]>([]);
  const [scrollEvents, setScrollEvents] = useState<any[]>([]);
  const [renderCount, setRenderCount] = useState(0);
  
  const sectionRef = useRef<HTMLDivElement>(null);
  const sessionId = useRef(0);
  const lastScrollDirection = useRef<'up' | 'down' | 'none'>('none');
  const lastScrollY = useRef(0);
  const scrollSession = useRef<any[]>([]);
  
  // Track complete scroll sessions and behavior patterns
  const trackScrollSession = useCallback((data: any) => {
    const now = Date.now();
    const direction = data.scrollY > lastScrollY.current ? 'down' : 
                     data.scrollY < lastScrollY.current ? 'up' : 'none';
    
    // Detect new scroll session (pause > 500ms or direction change)
    const isNewSession = (now - (scrollSession.current[scrollSession.current.length - 1]?.timestamp || 0)) > 500 ||
                         (direction !== 'none' && direction !== lastScrollDirection.current && lastScrollDirection.current !== 'none');
    
    if (isNewSession) {
      sessionId.current++;
      // Archive previous session
      if (scrollSession.current.length > 0) {
        setSessionData(prev => [...prev, {
          sessionId: sessionId.current - 1,
          events: [...scrollSession.current],
          summary: {
            direction: lastScrollDirection.current,
            startScrollY: scrollSession.current[0]?.scrollY || 0,
            endScrollY: scrollSession.current[scrollSession.current.length - 1]?.scrollY || 0,
            duration: (scrollSession.current[scrollSession.current.length - 1]?.timestamp || 0) - (scrollSession.current[0]?.timestamp || 0),
            stickyTransitions: scrollSession.current.filter(e => e.stickyTransition).length,
            progressRange: {
              min: Math.min(...scrollSession.current.map(e => e.progress)),
              max: Math.max(...scrollSession.current.map(e => e.progress))
            }
          }
        }]);
      }
      scrollSession.current = [];
    }
    
    const eventData = {
      ...data,
      timestamp: now,
      direction,
      sessionId: sessionId.current,
      stickyTransition: data.isSticky !== (scrollSession.current[scrollSession.current.length - 1]?.isSticky || false)
    };
    
    scrollSession.current.push(eventData);
    setScrollEvents(prev => [...prev.slice(-50), eventData]); // Keep last 50 events
    
    lastScrollDirection.current = direction;
    lastScrollY.current = data.scrollY;
  }, []);

  useEffect(() => {
    setRenderCount(prev => prev + 1);
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const startTime = performance.now();
      
      // Comprehensive measurements
      const scrollY = window.scrollY;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = sectionRef.current.offsetHeight;
      const headerHeight = 64;
      
      // Get all parent elements and their styles
      const parentChain = [];
      let currentElement = sectionRef.current.parentElement;
      let depth = 0;
      while (currentElement && depth < 10) {
        const style = window.getComputedStyle(currentElement);
        parentChain.push({
          tagName: currentElement.tagName,
          className: currentElement.className,
          position: style.position,
          overflow: style.overflow,
          overflowX: style.overflowX,
          overflowY: style.overflowY,
          transform: style.transform,
          zIndex: style.zIndex,
          height: style.height,
          maxHeight: style.maxHeight,
          offsetTop: currentElement.offsetTop,
          offsetHeight: currentElement.offsetHeight,
          clientHeight: currentElement.clientHeight,
          scrollTop: currentElement.scrollTop
        });
        currentElement = currentElement.parentElement;
        depth++;
      }
      
      // Multiple calculation methods for comparison
      const sectionTop = scrollY + rect.top;
      const sectionBottom = scrollY + rect.bottom;
      
      // Method 1: Rectangle-based (current approach)
      const method1_start = sectionTop - headerHeight;
      const method1_end = sectionTop + sectionHeight - windowHeight;
      const method1_sticky = rect.top <= headerHeight && rect.bottom > headerHeight;
      let method1_progress = 0;
      if (method1_sticky) {
        const scrolledPast = headerHeight - rect.top;
        const totalDistance = sectionHeight - windowHeight;
        method1_progress = totalDistance > 0 ? scrolledPast / totalDistance : 0;
      }
      
      // Method 2: Absolute position-based
      const method2_start = sectionRef.current.offsetTop - headerHeight;
      const method2_end = method2_start + sectionHeight - windowHeight;
      const method2_sticky = scrollY >= method2_start && scrollY <= method2_end;
      const method2_progress = method2_sticky ? (scrollY - method2_start) / (method2_end - method2_start) : 
                              scrollY > method2_end ? 1 : 0;
      
      // Method 3: Intersection-based
      const viewportTop = scrollY;
      const viewportBottom = scrollY + windowHeight;
      const method3_sticky = (sectionTop <= viewportTop + headerHeight) && (sectionBottom >= viewportBottom);
      const method3_progress = method3_sticky ? 
        Math.max(0, Math.min(1, (viewportTop + headerHeight - sectionTop) / (sectionHeight - windowHeight))) : 
        viewportTop + headerHeight > sectionBottom ? 1 : 0;
      
      // Method 4: getBoundingClientRect() relative
      const method4_sticky = rect.top <= headerHeight && rect.bottom >= windowHeight - headerHeight;
      const method4_progress = method4_sticky ? 
        Math.max(0, Math.min(1, (headerHeight - rect.top) / (sectionHeight - windowHeight))) : 
        rect.top < headerHeight - sectionHeight ? 1 : 0;
      
      // Use method 1 for state updates
      setIsSticky(method1_sticky);
      setScrollProgress(Math.max(0, Math.min(1, method1_progress)));
      
      const endTime = performance.now();
      
      // Comprehensive diagnostic data
      const diagnosticData = {
        // Basic measurements
        scrollY: Math.round(scrollY),
        windowHeight: Math.round(windowHeight),
        sectionHeight: Math.round(sectionHeight),
        sectionTop: Math.round(sectionTop),
        sectionBottom: Math.round(sectionBottom),
        rectTop: Math.round(rect.top),
        rectBottom: Math.round(rect.bottom),
        
        // Method comparisons
        method1: { sticky: method1_sticky, progress: Math.round(method1_progress * 100), start: Math.round(method1_start), end: Math.round(method1_end) },
        method2: { sticky: method2_sticky, progress: Math.round(method2_progress * 100), start: Math.round(method2_start), end: Math.round(method2_end) },
        method3: { sticky: method3_sticky, progress: Math.round(method3_progress * 100) },
        method4: { sticky: method4_sticky, progress: Math.round(method4_progress * 100) },
        
        // Performance
        calculationTime: Number((endTime - startTime).toFixed(2)),
        renderCount,
        
        // Element analysis
        elementData: {
          offsetTop: sectionRef.current.offsetTop,
          offsetLeft: sectionRef.current.offsetLeft,
          offsetWidth: sectionRef.current.offsetWidth,
          offsetHeight: sectionRef.current.offsetHeight,
          clientTop: sectionRef.current.clientTop,
          clientLeft: sectionRef.current.clientLeft,
          clientWidth: sectionRef.current.clientWidth,
          clientHeight: sectionRef.current.clientHeight,
          scrollTop: sectionRef.current.scrollTop,
          scrollLeft: sectionRef.current.scrollLeft,
          scrollWidth: sectionRef.current.scrollWidth,
          scrollHeight: sectionRef.current.scrollHeight
        },
        
        // CSS analysis
        computedStyle: {
          position: window.getComputedStyle(sectionRef.current).position,
          display: window.getComputedStyle(sectionRef.current).display,
          overflow: window.getComputedStyle(sectionRef.current).overflow,
          overflowX: window.getComputedStyle(sectionRef.current).overflowX,
          overflowY: window.getComputedStyle(sectionRef.current).overflowY,
          transform: window.getComputedStyle(sectionRef.current).transform,
          zIndex: window.getComputedStyle(sectionRef.current).zIndex,
          margin: window.getComputedStyle(sectionRef.current).margin,
          padding: window.getComputedStyle(sectionRef.current).padding,
          border: window.getComputedStyle(sectionRef.current).border,
          boxSizing: window.getComputedStyle(sectionRef.current).boxSizing
        },
        
        // Parent chain analysis
        parentChain,
        
        // State
        isSticky: method1_sticky,
        progress: Math.round(method1_progress * 100),
        
        // Disagreements
        stickyDisagreement: [method1_sticky, method2_sticky, method3_sticky, method4_sticky].filter((val, i, arr) => val !== arr[0]).length > 0,
        progressDisagreement: Math.max(
          Math.abs(method1_progress - method2_progress),
          Math.abs(method1_progress - method3_progress),
          Math.abs(method1_progress - method4_progress)
        ) > 0.1
      };
      
      trackScrollSession(diagnosticData);
    };

    // High-frequency tracking for detailed analysis
    let animationFrameId: number;
    const smoothScrollHandler = () => {
      handleScroll();
      animationFrameId = requestAnimationFrame(smoothScrollHandler);
    };
    
    smoothScrollHandler();
    
    window.addEventListener('resize', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleScroll);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [trackScrollSession, renderCount]);

  const latestEvent = scrollEvents[scrollEvents.length - 1];
  const latestSession = sessionData[sessionData.length - 1];

  return (
    <section 
      ref={sectionRef}
      className="relative"
      style={{ height: '300vh' }}
    >
      {/* Ultra-Comprehensive Debug Panel */}
      <div className="fixed top-4 left-4 z-50 bg-purple-900 text-white p-4 rounded text-xs max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="font-bold mb-3 text-lg">🔬 ULTIMATE DIAGNOSTIC</div>
        
        {/* Current State */}
        <div className="mb-4 p-3 bg-purple-800 rounded">
          <div className="font-semibold mb-2">Current State</div>
          {latestEvent && (
            <div className="grid grid-cols-3 gap-2">
              <div>ScrollY: {latestEvent.scrollY}</div>
              <div>Progress: {latestEvent.progress}%</div>
              <div>Sticky: {latestEvent.isSticky ? 'YES' : 'NO'}</div>
              <div>Direction: {latestEvent.direction}</div>
              <div>Session: #{latestEvent.sessionId}</div>
              <div>Renders: {renderCount}</div>
            </div>
          )}
        </div>
        
        {/* Method Comparison */}
        {latestEvent && (
          <div className="mb-4 p-3 bg-purple-800 rounded">
            <div className="font-semibold mb-2">Method Comparison</div>
            <div className="space-y-1">
              <div className="grid grid-cols-4 gap-2 text-xs">
                <div>Method</div>
                <div>Sticky</div>
                <div>Progress</div>
                <div>Range</div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div>Rect-based</div>
                <div className={latestEvent.method1.sticky ? 'text-green-300' : 'text-red-300'}>
                  {latestEvent.method1.sticky ? 'YES' : 'NO'}
                </div>
                <div>{latestEvent.method1.progress}%</div>
                <div>{latestEvent.method1.start}-{latestEvent.method1.end}</div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div>Absolute</div>
                <div className={latestEvent.method2.sticky ? 'text-green-300' : 'text-red-300'}>
                  {latestEvent.method2.sticky ? 'YES' : 'NO'}
                </div>
                <div>{latestEvent.method2.progress}%</div>
                <div>{latestEvent.method2.start}-{latestEvent.method2.end}</div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div>Intersection</div>
                <div className={latestEvent.method3.sticky ? 'text-green-300' : 'text-red-300'}>
                  {latestEvent.method3.sticky ? 'YES' : 'NO'}
                </div>
                <div>{latestEvent.method3.progress}%</div>
                <div>-</div>
              </div>
              <div className="grid grid-cols-4 gap-2">
                <div>Rect-relative</div>
                <div className={latestEvent.method4.sticky ? 'text-green-300' : 'text-red-300'}>
                  {latestEvent.method4.sticky ? 'YES' : 'NO'}
                </div>
                <div>{latestEvent.method4.progress}%</div>
                <div>-</div>
              </div>
            </div>
            {latestEvent.stickyDisagreement && (
              <div className="mt-2 text-red-300">🚨 STICKY METHODS DISAGREE!</div>
            )}
            {latestEvent.progressDisagreement && (
              <div className="mt-2 text-orange-300">⚠️ PROGRESS METHODS DIFFER SIGNIFICANTLY!</div>
            )}
          </div>
        )}
        
        {/* Element Analysis */}
        {latestEvent && (
          <div className="mb-4 p-3 bg-purple-800 rounded">
            <div className="font-semibold mb-2">Element Analysis</div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div>OffsetTop: {latestEvent.elementData.offsetTop}</div>
              <div>ClientHeight: {latestEvent.elementData.clientHeight}</div>
              <div>ScrollHeight: {latestEvent.elementData.scrollHeight}</div>
              <div>Position: {latestEvent.computedStyle.position}</div>
              <div>Overflow: {latestEvent.computedStyle.overflow}</div>
              <div>Transform: {latestEvent.computedStyle.transform !== 'none' ? 'YES' : 'NO'}</div>
            </div>
          </div>
        )}
        
        {/* Parent Chain Issues */}
        {latestEvent && latestEvent.parentChain && (
          <div className="mb-4 p-3 bg-purple-800 rounded">
            <div className="font-semibold mb-2">Parent Chain Issues</div>
            <div className="space-y-1 text-xs">
              {latestEvent.parentChain.slice(0, 5).map((parent: any, i: number) => (
                <div key={i} className={parent.overflow !== 'visible' ? 'text-yellow-300' : ''}>
                  {parent.tagName}: {parent.overflow !== 'visible' ? `overflow:${parent.overflow}` : 'OK'}
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Session Analysis */}
        <div className="mb-4 p-3 bg-purple-800 rounded">
          <div className="font-semibold mb-2">Session Analysis</div>
          <div className="space-y-2">
            <div>Total Sessions: {sessionData.length}</div>
            {latestSession && (
              <div className="space-y-1 text-xs">
                <div>Last: {latestSession.summary.direction} scroll</div>
                <div>Duration: {latestSession.summary.duration}ms</div>
                <div>Sticky Transitions: {latestSession.summary.stickyTransitions}</div>
                <div>Progress: {latestSession.summary.progressRange.min}%-{latestSession.summary.progressRange.max}%</div>
              </div>
            )}
          </div>
        </div>
        
        {/* Recent Events */}
        <div className="mb-4 p-3 bg-purple-800 rounded">
          <div className="font-semibold mb-2">Recent Events (Last 10)</div>
          <div className="space-y-1">
            {scrollEvents.slice(-10).map((event, i) => (
              <div key={i} className="text-xs grid grid-cols-5 gap-1">
                <div>{event.direction}</div>
                <div>{event.scrollY}</div>
                <div>{event.progress}%</div>
                <div className={event.isSticky ? 'text-green-300' : 'text-red-300'}>
                  {event.isSticky ? 'S' : 'N'}
                </div>
                <div>#{event.sessionId}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Performance */}
        {latestEvent && (
          <div className="p-3 bg-purple-800 rounded">
            <div className="font-semibold mb-2">Performance</div>
            <div className="text-xs">
              <div>Calc Time: {latestEvent.calculationTime}ms</div>
              <div>Render Count: {renderCount}</div>
              {latestEvent.calculationTime > 5 && (
                <div className="text-yellow-300">⚠️ Slow calculation!</div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="fixed top-4 right-4 z-50 bg-red-600 text-white px-3 py-1 rounded text-sm">
        🔬 ULTIMATE DIAGNOSTIC
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
                    ULTIMATE DIAGNOSTIC: Deep pattern analysis with method comparison, session tracking, and root cause detection
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