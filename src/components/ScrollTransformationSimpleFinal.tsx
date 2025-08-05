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
  Database,
  Rocket
} from 'lucide-react';
import { cn } from '@/lib/utils';

const transformationCards = [
  {
    id: 'fines',
    problem: {
      icon: Euro,
      title: 'Massive Bußgelder',
      description: 'DSGVO-Verstöße kosten bis zu 4% des weltweiten Jahresumsatzes oder 20 Millionen Euro - je nachdem, was höher ist. Deutsche Aufsichtsbehörden verhängen inzwischen regelmäßig Millionenstrafen. Bereits kleine Versäumnisse bei Datenschutzerklärungen, Cookie-Bannern oder Auftragsverarbeitungsverträgen können existenzbedrohende Folgen haben. Die Prüfungsdichte steigt jährlich um 30%.',
      impact: 'Bis zu 20 Mio. €',
      detail: '4% des weltweiten Jahresumsatzes',
      color: 'text-red-600',
      bgGradient: 'from-red-500/10 to-orange-500/10'
    },
    solution: {
      icon: Shield,
      title: 'KI-gestützte Automatisierung',
      description: 'Unsere KI-Plattform überwacht kontinuierlich alle datenschutzrelevanten Prozesse in Echtzeit. Intelligente Algorithmen erkennen Compliance-Lücken bevor sie zu Problemen werden. Automatische Dokumentation, präventive Warnungen und One-Click-Fixes sorgen dafür, dass Sie immer auf der sicheren Seite sind. Über 500 Unternehmen vertrauen bereits auf unseren Schutz.',
      benefit: '85% weniger Aufwand',
      detail: 'Garantiert bußgeldfrei',
      color: 'text-emerald-600',
      bgGradient: 'from-emerald-500/10 to-green-500/10'
    }
  },
  {
    id: 'audits',
    problem: {
      icon: Clock,
      title: 'Zeitaufwändige Prozesse',
      description: 'Ein einziges Compliance-Audit verschlingt durchschnittlich 120+ Arbeitsstunden. Ihre Experten sammeln wochenlang Dokumente, erstellen Reports und bereiten Nachweise vor - Zeit, die im operativen Geschäft fehlt. Bei mehreren Standards wie ISO 27001, SOC 2 und DSGVO multipliziert sich der Aufwand. Viele Unternehmen sind im Dauerstress zwischen verschiedenen Audits gefangen.',
      impact: '120+ Stunden pro Audit',
      detail: '3-6 Monate Vorbereitung',
      color: 'text-orange-600',
      bgGradient: 'from-orange-500/10 to-red-500/10'
    },
    solution: {
      icon: Zap,
      title: 'Proaktive Compliance',
      description: 'Mit unserer Plattform sind Sie permanent audit-ready. Alle erforderlichen Nachweise werden automatisch gesammelt, versioniert und in audit-gerechten Reports aufbereitet. Live-Dashboards zeigen Ihren Compliance-Status in Echtzeit. Was früher Monate dauerte, erledigen Sie jetzt per Knopfdruck. Prüfer erhalten sofort Zugang zu allen relevanten Dokumenten.',
      benefit: '95% Zeitersparnis',
      detail: 'Immer audit-ready',
      color: 'text-blue-600',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    }
  },
  {
    id: 'complexity',
    problem: {
      icon: TrendingUp,
      title: 'Regulatorische Komplexität',
      description: 'EU AI Act, NIS2, DORA - die Anzahl der Vorschriften wächst exponentiell. Unternehmen kämpfen damit, den Überblick über sich ständig ändernde Gesetze zu behalten. Jede neue Verordnung bringt zusätzliche Komplexität und Unsicherheit mit sich.',
      impact: '12+ neue Gesetze/Jahr',
      detail: 'Exponentiell steigend',
      color: 'text-amber-600',
      bgGradient: 'from-amber-500/10 to-orange-500/10'
    },
    solution: {
      icon: Brain,
      title: 'Kontinuierliche Verbesserung',
      description: 'Machine Learning optimiert Ihre Compliance-Prozesse kontinuierlich und lernt aus neuen Vorschriften automatisch. Das System passt sich selbständig an Gesetzesänderungen an und sorgt für zukunftssichere Compliance-Strategien.',
      benefit: '300% Effizienz',
      detail: 'Automatische Updates',
      color: 'text-purple-600',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    }
  },
  {
    id: 'documentation',
    problem: {
      icon: FileCheck,
      title: 'Inkonsistente Dokumentation',
      description: 'Veraltete Richtlinien und fehlende Nachweise erschweren Audits erheblich. Dokumente sind über verschiedene Systeme verstreut, Versionen sind inkonsistent und wichtige Compliance-Belege gehen im Chaos unter. Bei Prüfungen fehlen regelmäßig kritische Nachweise.',
      impact: '67% unvollständig',
      detail: 'Kritische Lücken',
      color: 'text-red-600',
      bgGradient: 'from-red-500/10 to-pink-500/10'
    },
    solution: {
      icon: Database,
      title: 'Multi-Standard Support',
      description: 'DSGVO, ISO 27001, SOC 2, EU AI Act - alles in einer zentralen Plattform vereint. Automatische Versionierung, intelligente Verknüpfungen und KI-gestützte Vollständigkeitsprüfungen sorgen für lückenlose und immer aktuelle Dokumentation.',
      benefit: '15+ Standards',
      detail: '100% Vollständigkeit',
      color: 'text-indigo-600',
      bgGradient: 'from-indigo-500/10 to-blue-500/10'
    }
  }
];


export const ScrollTransformationSimpleFinal: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);
  const [debugData, setDebugData] = useState<any>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) {
        return;
      }

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on how much of the section is visible
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      let progress = 0;
      
      if (sectionTop <= 0 && sectionTop + sectionHeight > 0) {
        // Section is in view, calculate progress
        const visibleHeight = Math.min(windowHeight, sectionTop + sectionHeight);
        const scrolledDistance = -sectionTop;
        const maxScrollDistance = sectionHeight;
        progress = Math.max(0, Math.min(1, scrolledDistance / maxScrollDistance));
      } else if (sectionTop < 0) {
        // Section has passed completely
        progress = 1;
      }
      
      setScrollProgress(progress);
      setIsSticky(false); // No longer using sticky behavior
      
      setDebugData({
        scrollY: Math.round(window.scrollY),
        rectTop: Math.round(sectionTop),
        rectBottom: Math.round(rect.bottom),
        windowHeight: Math.round(windowHeight),
        sectionHeight: Math.round(sectionHeight),
        progress: Math.round(progress * 100),
        renderCount: renderCount.current
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial call
    handleScroll();
    
    // Also call after a short delay to ensure everything is loaded
    const timeout = setTimeout(handleScroll, 100);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen"
    >
      <div className="fixed top-4 right-4 z-50 bg-black text-green-400 p-4 rounded-lg font-mono text-sm max-w-md">
        <div className="text-yellow-400 font-bold mb-2">🔧 SCROLL DEBUG</div>
        <div className="space-y-1">
          <div>ScrollY: <span className="text-white">{debugData.scrollY || 0}</span></div>
          <div>RectTop: <span className="text-white">{debugData.rectTop || 0}</span></div>
          <div>RectBottom: <span className="text-white">{debugData.rectBottom || 0}</span></div>
          <div>SectionH: <span className="text-white">{debugData.sectionHeight || 0}</span></div>
          <div>Progress: <span className="text-white">{debugData.progress || 0}%</span></div>
          <div>Renders: <span className="text-white">{debugData.renderCount || 0}</span></div>
        </div>
      </div>

      <div className="fixed top-4 left-4 z-50 bg-blue-600 text-white px-3 py-1 rounded text-sm">
        🔧 FINAL: Simple & Robust
      </div>
      
      <div className="w-full h-screen relative">
        <div className="w-full h-full bg-gradient-to-b from-white to-gray-50 relative flex flex-col">
          <div className="container mx-auto max-w-6xl px-4 py-6 flex-1 flex flex-col justify-center">
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto mb-8">
              {transformationCards.map((card, cardIndex) => {
                const cardStartProgress = cardIndex / transformationCards.length;
                const cardEndProgress = (cardIndex + 1) / transformationCards.length;
                const cardProgress = Math.max(0, Math.min(1, (scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress)));
                const showSolution = cardProgress > 0.4;
                const morphProgress = Math.max(0, Math.min(1, (cardProgress - 0.2) / 0.4));
                
                return (
                  <div key={card.id} className="h-[280px]">
                    <div 
                      className={cn(
                        "group relative w-full h-full flex flex-col transition-all duration-700 overflow-hidden cursor-pointer",
                        // Multi-Layer Glass Effect
                        "backdrop-blur-[45px] backdrop-saturate-[200%]",
                        // Dynamic Background with smooth color transition
                        "bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_0%,rgba(255,255,255,0.05)_50%,rgba(255,255,255,0.02)_100%)]",
                        // Apple-Style Border mit sanfter Farb-Transition
                        "border-[0.5px] rounded-3xl transition-all duration-700",
                        // Dynamic Shadow und Border
                        !showSolution 
                          ? "border-red-200/30 shadow-[0_20px_40px_rgba(239,68,68,0.1),inset_0_1px_0_rgba(255,255,255,0.3)]"
                          : "border-emerald-200/40 shadow-[0_25px_50px_rgba(34,197,94,0.15),inset_0_1px_0_rgba(255,255,255,0.4)]",
                        // Subtle Hover Effects
                        "hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)]"
                      )}
                      style={{
                        // Minimalistische Transformation: nur sanfte Skalierung und Glow
                        transform: `scale(${1 + morphProgress * 0.02})`,
                        filter: `brightness(${1 + morphProgress * 0.1}) saturate(${1 + morphProgress * 0.2})`,
                        backgroundImage: `
                          radial-gradient(circle at 30% 70%, rgba(255,255,255,0.12) 0%, transparent 50%),
                          radial-gradient(circle at 70% 30%, rgba(255,255,255,0.08) 0%, transparent 50%),
                          ${!showSolution 
                            ? `radial-gradient(circle at 50% 50%, rgba(239,68,68,0.02) 0%, transparent 70%)`
                            : `radial-gradient(circle at 50% 50%, rgba(34,197,94,0.03) 0%, transparent 70%)`
                          },
                          url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.015'/%3E%3C/svg%3E")`
                      }}
                    >
                      {/* Subtle Glow Overlay */}
                      <div className={cn(
                        "absolute inset-0 opacity-20 transition-all duration-700 pointer-events-none",
                        !showSolution 
                          ? "bg-gradient-to-br from-red-500/5 via-transparent to-red-500/5"
                          : "bg-gradient-to-br from-emerald-500/8 via-transparent to-emerald-500/8"
                      )} />

                      {/* Content with enhanced styling */}
                      <div className="relative z-10 p-6 h-full flex flex-col">
                        {/* Icon and Header with smooth morphing */}
                        <div className="flex items-start gap-3 mb-4">
                          <div className={cn(
                            "p-2.5 rounded-2xl backdrop-blur-[25px] border transition-all duration-700 shrink-0 shadow-lg",
                            !showSolution 
                              ? "bg-gradient-to-br from-red-500/20 to-red-600/30 border-red-500/25"
                              : "bg-gradient-to-br from-emerald-500/20 to-emerald-600/30 border-emerald-500/25"
                          )}>
                            <div className="relative w-5 h-5">
                              {/* Problem Icon */}
                              <card.problem.icon 
                                className={cn(
                                  "absolute inset-0 h-5 w-5 transition-all duration-700",
                                  card.problem.color,
                                  showSolution ? "opacity-0 scale-75" : "opacity-100 scale-100"
                                )} 
                              />
                              {/* Solution Icon */}
                              <card.solution.icon 
                                className={cn(
                                  "absolute inset-0 h-5 w-5 transition-all duration-700",
                                  card.solution.color,
                                  showSolution ? "opacity-100 scale-100" : "opacity-0 scale-75"
                                )} 
                              />
                            </div>
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="relative h-8 overflow-hidden">
                              {/* Problem Title */}
                              <h3 className={cn(
                                "absolute inset-0 text-sm font-bold text-gray-900 leading-tight drop-shadow-sm transition-all duration-700",
                                showSolution ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                              )}>
                                {card.problem.title}
                              </h3>
                              {/* Solution Title */}
                              <h3 className={cn(
                                "absolute inset-0 text-sm font-bold text-gray-900 leading-tight drop-shadow-sm transition-all duration-700",
                                showSolution ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                              )}>
                                {card.solution.title}
                              </h3>
                            </div>
                          </div>
                        </div>

                        {/* Description with smooth text transition */}
                        <div className="flex-1 mb-5 relative overflow-hidden">
                          <p className={cn(
                            "text-sm text-gray-700/90 leading-relaxed transition-all duration-700 absolute inset-0",
                            showSolution ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                          )}>
                            {card.problem.description}
                          </p>
                          <p className={cn(
                            "text-sm text-gray-700/90 leading-relaxed transition-all duration-700 absolute inset-0",
                            showSolution ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                          )}>
                            {card.solution.description}
                          </p>
                        </div>

                        {/* Impact/Benefit Tags with smooth transition */}
                        <div className="space-y-2 mt-auto">
                          <div className={cn(
                            "text-xs font-bold px-3 py-2 rounded-xl backdrop-blur-sm border transition-all duration-700",
                            !showSolution 
                              ? "text-red-700 bg-red-50/70 border-red-200/40"
                              : "text-emerald-700 bg-emerald-50/70 border-emerald-200/40"
                          )}>
                            {!showSolution ? card.problem.impact : card.solution.benefit}
                          </div>
                          <div className={cn(
                            "text-xs font-medium opacity-75 transition-all duration-700",
                            !showSolution ? "text-red-600" : "text-emerald-600"
                          )}>
                            {!showSolution ? card.problem.detail : card.solution.detail}
                          </div>
                        </div>
                      </div>

                      {/* Glassmorphism Enhancement Overlays */}
                      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                      <div className={cn(
                        "absolute inset-0 rounded-3xl pointer-events-none transition-all duration-1000",
                        !showSolution 
                          ? "bg-gradient-to-br from-red-500/[0.02] via-orange-500/[0.01] to-red-500/[0.005]"
                          : "bg-gradient-to-br from-emerald-500/[0.03] via-green-500/[0.02] to-emerald-500/[0.01]"
                      )} />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="text-center">
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

      {/* CTA Separator Section */}
      <div className="relative bg-[#e24e1b] py-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-black/20" />
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%),
                linear-gradient(45deg, transparent 48%, rgba(255,255,255,0.03) 49%, rgba(255,255,255,0.03) 51%, transparent 52%)
              `,
              backgroundSize: '200px 200px, 200px 200px, 40px 40px'
            }}
          />
        </div>

        <div className="container mx-auto max-w-4xl px-6 relative z-10">
          <div className="text-center space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <Badge className="bg-white/20 text-white border-white/30 backdrop-blur-sm font-semibold text-sm">
                <Rocket className="w-4 h-4 mr-2" />
                Compliance-Revolution
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Bereit für die Compliance-Revolution?
              </h2>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Lassen Sie uns Ihre Compliance-Herausforderungen in effiziente, automatisierte Lösungen verwandeln.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <Link to="/contact?demo=true" className="w-full sm:w-auto">
                <Button className="bg-white text-[#e24e1b] hover:bg-gray-50 px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl transition-all w-full border-0 rounded-2xl">
                  <Rocket className="mr-3 h-5 w-5" />
                  Kostenlose Demo
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </Link>
              
              <Link to="/tools" className="w-full sm:w-auto">
                <Button variant="outline" className="border-2 border-white/40 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm transition-all w-full rounded-2xl">
                  <Brain className="mr-3 h-5 w-5" />
                  Tools entdecken
                </Button>
              </Link>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/20">
              <div className="text-center space-y-2">
                <CheckCircle2 className="h-6 w-6 text-white mx-auto" />
                <p className="text-white/90 font-semibold text-sm">Keine Kreditkarte</p>
              </div>
              <div className="text-center space-y-2">
                <Zap className="h-6 w-6 text-white mx-auto" />
                <p className="text-white/90 font-semibold text-sm">Sofort einsatzbereit</p>
              </div>
              <div className="text-center space-y-2">
                <Shield className="h-6 w-6 text-white mx-auto" />
                <p className="text-white/90 font-semibold text-sm">DACH-optimiert</p>
              </div>
              <div className="text-center space-y-2">
                <TrendingUp className="h-6 w-6 text-white mx-auto" />
                <p className="text-white/90 font-semibold text-sm">Garantiert bußgeldfrei</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl" />
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-white/10 to-transparent rounded-full blur-xl" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* DACH-Spezialist Section */}
      <div className="fixed top-32 right-6 z-40 w-full max-w-xs mb-4">
        <div className={cn(
          "relative p-6 overflow-hidden transition-all duration-500",
          // Multi-Layer Glass Effect
          "backdrop-blur-[50px] backdrop-saturate-[200%]",
          // Frosted Glass Background
          "bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.05)_100%)]",
          // Apple-Style Border und Shadow
          "border-[0.5px] border-white/40 rounded-2xl",
          "shadow-[0_20px_40px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.6)]",
          // Color Overlay
          "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/[0.06] before:via-indigo-500/[0.04] before:to-blue-500/[0.03] before:rounded-2xl before:pointer-events-none",
          // Inner Highlight
          "after:absolute after:top-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent after:rounded-t-2xl"
        )}
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 70%, rgba(255,255,255,0.15) 0%, transparent 60%),
            radial-gradient(circle at 70% 30%, rgba(255,255,255,0.12) 0%, transparent 60%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.015'/%3E%3C/svg%3E")`
        }}>
          <div className="relative z-10 text-center space-y-3">
            <Badge className="bg-blue-500/15 text-blue-700 border-blue-500/30 backdrop-blur-sm font-semibold">
              <Shield className="w-3 h-3 mr-1" />
              Regional
            </Badge>
            
            <h3 className="text-sm font-bold text-gray-900 leading-tight">
              <span className="text-blue-600">DACH-Spezialist</span>
            </h3>
            
            <p className="text-xs text-gray-700">
              DSGVO Compliance für den DACH-Raum
            </p>
          </div>
        </div>
      </div>

      {/* Transformation starten - Fixed CTA rechts */}
      <div className="fixed top-60 right-6 z-40 w-full max-w-xs">
        <div className={cn(
          "relative p-6 overflow-hidden transition-all duration-500",
          // Multi-Layer Glass Effect
          "backdrop-blur-[50px] backdrop-saturate-[200%]",
          // Frosted Glass Background mit stärkerem Gradient
          "bg-[linear-gradient(135deg,rgba(255,255,255,0.15)_0%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.05)_100%)]",
          // Apple-Style Border und Shadow
          "border-[0.5px] border-white/40 rounded-2xl",
          "shadow-[0_20px_40px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.6)]",
          // Color Overlay
          "before:absolute before:inset-0 before:bg-gradient-to-br before:from-emerald-500/[0.06] before:via-blue-500/[0.04] before:to-emerald-500/[0.03] before:rounded-2xl before:pointer-events-none",
          // Inner Highlight
          "after:absolute after:top-0 after:left-0 after:right-0 after:h-px after:bg-gradient-to-r after:from-transparent after:via-white/50 after:to-transparent after:rounded-t-2xl"
        )}
        style={{
          backgroundImage: `
            radial-gradient(circle at 30% 70%, rgba(255,255,255,0.15) 0%, transparent 60%),
            radial-gradient(circle at 70% 30%, rgba(255,255,255,0.12) 0%, transparent 60%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.015'/%3E%3C/svg%3E")`
        }}>
          <div className="relative z-10 text-center space-y-4">
            <Badge className="bg-emerald-500/15 text-emerald-700 border-emerald-500/30 backdrop-blur-sm font-semibold">
              <Sparkles className="w-3 h-3 mr-1" />
              Revolution
            </Badge>
            
            <h3 className="text-lg font-bold text-gray-900 leading-tight">
              Bereit für <span className="text-emerald-600">KI-Compliance?</span>
            </h3>

            <div className="pt-2">
              <Link to="/contact?demo=true">
                <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-6 py-2.5 text-sm font-semibold shadow-lg hover:shadow-xl transition-all w-full">
                  <Rocket className="mr-2 h-4 w-4" />
                  Kostenlose Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};