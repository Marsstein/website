import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { 
  ArrowRight,
  Sparkles,
  AlertCircle,
  TrendingDown,
  TrendingUp,
  Clock,
  Euro,
  Shield,
  CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [currentProblem, setCurrentProblem] = useState(0);
  const [complianceScore, setComplianceScore] = useState(0);
  const [timesSaved, setTimesSaved] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const problems = [
    { text: "DSGVO-Bußgelder", icon: Euro, color: "text-red-600" },
    { text: "Audit-Aufwand", icon: AlertCircle, color: "text-orange-600" },
    { text: "Zeitverlust", icon: Clock, color: "text-purple-600" },
    { text: "Datenlecks", icon: TrendingDown, color: "text-red-700" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProblem((prev) => (prev + 1) % problems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Start animations after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
      
      // Animate compliance score
      const scoreInterval = setInterval(() => {
        setComplianceScore(prev => {
          if (prev >= 98) {
            clearInterval(scoreInterval);
            return 98;
          }
          return prev + 2;
        });
      }, 50);
      
      // Animate time saved
      const timeInterval = setInterval(() => {
        setTimesSaved(prev => {
          if (prev >= 127) {
            clearInterval(timeInterval);
            return 127;
          }
          return prev + 3;
        });
      }, 40);
      
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-20 md:pt-28 md:pb-28 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-red/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-red/5 to-transparent rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="container px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Problem rotator */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900">
                <AlertCircle className="h-5 w-5 text-brand-red animate-pulse" />
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  Schluss mit
                </span>
                <div className="relative h-6 w-32 overflow-hidden">
                  {problems.map((problem, index) => {
                    const Icon = problem.icon;
                    return (
                      <div
                        key={index}
                        className={cn(
                          "absolute inset-0 flex items-center gap-2 transition-all duration-500",
                          currentProblem === index 
                            ? "translate-y-0 opacity-100" 
                            : index < currentProblem 
                              ? "-translate-y-full opacity-0"
                              : "translate-y-full opacity-0"
                        )}
                      >
                        <Icon className={cn("h-4 w-4", problem.color)} />
                        <span className={cn("font-semibold", problem.color)}>
                          {problem.text}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Main headline */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                  <span className="text-gray-900 dark:text-white">
                    Compliance
                  </span>
                  <br />
                  <span className="relative">
                    <span className="bg-gradient-to-r from-brand-red via-red-600 to-brand-red bg-clip-text text-transparent animate-gradient bg-300%">
                      automatisiert
                    </span>
                    <Sparkles className="absolute -top-4 -right-4 lg:-top-6 lg:-right-6 h-6 w-6 lg:h-8 lg:w-8 text-brand-red animate-pulse" />
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Die KI-gestützte Compliance-Plattform für europäische Unternehmen. 
                  Transformieren Sie <span className="font-semibold text-gray-900 dark:text-white">komplexe Prozesse</span> in 
                  effiziente, automatisierte Workflows.
                </p>
              </div>

              {/* Trust points */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">100% DSGVO-konform</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">EU AI Act ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700 dark:text-gray-300">ISO 27001 zertifiziert</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
                <Link to="/contact?demo=true">
                  <Button 
                    size="lg" 
                    className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                  >
                    <Sparkles className="mr-2 h-5 w-5 animate-pulse" />
                    Demo anfordern
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="#pain-points">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="group px-8 py-6 text-lg border-2 border-gray-300 hover:border-brand-red hover:text-brand-red transition-all duration-300"
                  >
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Dashboard */}
            <div className="relative animate-slide-in-right">
              <Card className="relative overflow-hidden shadow-2xl border-2 border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-red via-red-500 to-brand-red animate-gradient bg-300%" />
                
                {/* Simulated dashboard */}
                <div className="p-6 lg:p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Compliance Score */}
                    <Card className={cn(
                      "p-4 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900 border-green-200 dark:border-green-800 transition-all duration-500 hover:scale-105 hover:shadow-lg",
                      isVisible && "animate-bounce-in"
                    )} style={{ animationDelay: '100ms' }}>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Compliance Score</span>
                          <Shield className="h-4 w-4 text-green-600 animate-pulse" />
                        </div>
                        <div className={cn(
                          "text-2xl font-bold text-green-700 dark:text-green-400 transition-all duration-300",
                          isVisible && "animate-count-up"
                        )}>
                          {complianceScore}%
                        </div>
                        <div className="text-xs text-green-600 flex items-center gap-1">
                          <TrendingUp className="h-3 w-3" />
                          +12% diese Woche
                        </div>
                      </div>
                    </Card>

                    {/* Offene Audits */}
                    <Card className={cn(
                      "p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950 dark:to-amber-900 border-amber-200 dark:border-amber-800 transition-all duration-500 hover:scale-105 hover:shadow-lg",
                      isVisible && "animate-bounce-in"
                    )} style={{ animationDelay: '200ms' }}>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Offene Audits</span>
                          <AlertCircle className="h-4 w-4 text-amber-600 animate-pulse" />
                        </div>
                        <div className="text-2xl font-bold text-amber-700 dark:text-amber-400">3</div>
                        <div className="text-xs text-amber-600 flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Nächstes in 2 Tagen
                        </div>
                      </div>
                    </Card>

                    {/* Zeit gespart */}
                    <Card className={cn(
                      "p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 border-purple-200 dark:border-purple-800 transition-all duration-500 hover:scale-105 hover:shadow-lg",
                      isVisible && "animate-bounce-in"
                    )} style={{ animationDelay: '300ms' }}>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-medium text-gray-600 dark:text-gray-400">Zeit gespart</span>
                          <Clock className="h-4 w-4 text-purple-600 animate-pulse" />
                        </div>
                        <div className={cn(
                          "text-2xl font-bold text-purple-700 dark:text-purple-400 transition-all duration-300",
                          isVisible && "animate-count-up"
                        )}>
                          {timesSaved}h
                        </div>
                        <div className="text-xs text-purple-600 flex items-center gap-1">
                          <Sparkles className="h-3 w-3" />
                          Diesen Monat
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Live activity feed */}
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 animate-slide-up">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        DSGVO-Audit erfolgreich abgeschlossen
                      </span>
                      <span className="text-xs text-gray-500 ml-auto">vor 2 Min.</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 animate-slide-up" style={{ animationDelay: '200ms' }}>
                      <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        Neue Datenschutzrichtlinie hochgeladen
                      </span>
                      <span className="text-xs text-gray-500 ml-auto">vor 5 Min.</span>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-brand-red animate-float">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Live-Monitoring aktiv</span>
                </div>
              </div>

              {/* Additional floating elements */}
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-brand-red to-red-600 rounded-full p-3 shadow-xl animate-float" style={{ animationDelay: '1s' }}>
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};