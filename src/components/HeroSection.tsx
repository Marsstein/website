import React, { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import {
  ArrowRight,
  Sparkles,
  Shield,
  CheckCircle2,
  Clock,
  Building2,
  Activity,
  Brain,
  Globe,
  Award,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import CountUp from 'react-countup';

export const HeroSection: React.FC = () => {
  const { t } = useLanguage();
  const [activeMetric, setActiveMetric] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const metrics = [
    { value: 98, label: "Compliance Rate", icon: Shield, color: "text-emerald-400", bgColor: "bg-emerald-500/20", borderColor: "border-emerald-500/30" },
    { value: 500, label: "Companies", icon: Building2, color: "text-blue-400", bgColor: "bg-blue-500/20", borderColor: "border-blue-500/30" },
    { value: 10000, label: "Hours Saved", icon: Clock, color: "text-brand-red", bgColor: "bg-brand-red/20", borderColor: "border-brand-red/30" },
    { value: 99.9, label: "Uptime", icon: Activity, color: "text-purple-400", bgColor: "bg-purple-500/20", borderColor: "border-purple-500/30" }
  ];

  const features = [
    { icon: Brain, title: "KI-gestützte Analyse", desc: "Automatische Compliance-Bewertung" },
    { icon: Shield, title: "DSGVO Ready", desc: "100% EU-konform" },
    { icon: Globe, title: "Multi-Regional", desc: "DACH & EU-weit" },
    { icon: Award, title: "Zertifiziert", desc: "ISO 27001 & SOC 2" }
  ];

  // Intersection observer for fade-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Auto-rotate metrics
  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveMetric(prev => (prev + 1) % metrics.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible, metrics.length]);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden"
    >
      {/* Dark Blue Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/30 to-indigo-600/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-cyan-600/20 to-blue-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-red/15 to-orange-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }} />
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(147,197,253,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,197,253,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          
          {/* Left Column: Content */}
          <div className={cn(
            "space-y-8 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            
            {/* Badge */}
            <div className="inline-flex">
              <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                KI-native Compliance Platform
              </Badge>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                Compliance{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-brand-red to-orange-500 bg-clip-text text-transparent">
                    Revolutioniert
                  </span>
                  <div className="absolute -top-2 -right-2 lg:-top-3 lg:-right-3">
                    <Sparkles className="h-6 w-6 lg:h-8 lg:w-8 text-brand-red animate-pulse" />
                  </div>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                Die erste KI-native Compliance-Plattform für das digitale Zeitalter. 
                Automatisieren Sie Ihre Compliance-Prozesse und sparen Sie bis zu 85% Zeit.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/contact?demo=true">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-brand-red to-brand-red/90 hover:from-brand-red/90 hover:to-brand-red/80 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 group hover:scale-105 transform relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Play className="mr-2 h-5 w-5 relative z-10" />
                  <span className="relative z-10">Kostenlose Demo</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                </Button>
              </Link>
              
              <Link to="/pricing">
                <Button 
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-lg border-2 border-gray-600 text-gray-300 hover:bg-brand-red/10 hover:border-brand-red/50 hover:text-white transition-all duration-300 group hover:scale-105 transform relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Preise ansehen</span>
                </Button>
              </Link>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={cn(
                      "flex items-start space-x-3 p-4 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-brand-red/30 transition-all duration-500 hover:bg-white/20 hover:shadow-lg hover:border-brand-red/50 hover-lift group",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                    style={{ 
                      transitionDelay: `${(index + 2) * 150}ms`
                    }}
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg bg-brand-red/30 group-hover:bg-brand-red/40 transition-colors duration-300">
                      <Icon className="h-5 w-5 text-brand-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-sm group-hover:text-orange-100 transition-colors duration-300">{feature.title}</h3>
                      <p className="text-gray-300 text-xs group-hover:text-gray-200 transition-colors duration-300">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Dashboard */}
          <div className={cn(
            "space-y-6 transition-all duration-1000 ease-out",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )} style={{ transitionDelay: '300ms' }}>
            
            {/* Main Dashboard Card */}
            <Card className="p-6 bg-slate-900/60 backdrop-blur-sm border-blue-500/20 shadow-2xl">
              <div className="space-y-6">
                
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-white">Live Dashboard</h3>
                    <p className="text-sm text-gray-300">Compliance Metrics in Echtzeit</p>
                  </div>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                    <Activity className="w-3 h-3 mr-1" />
                    Live
                  </Badge>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon;
                    const isActive = activeMetric === index;
                    
                    return (
                      <div
                        key={metric.label}
                        className={cn(
                          "p-4 rounded-lg border-2 transition-all duration-500 cursor-pointer",
                          isActive 
                            ? `${metric.bgColor} ${metric.borderColor} shadow-lg scale-105` 
                            : "bg-slate-800/40 border-blue-500/20 hover:bg-slate-800/60"
                        )}
                        onClick={() => setActiveMetric(index)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <Icon className={cn("h-5 w-5", isActive ? metric.color : "text-gray-400")} />
                          {metric.label === "Compliance Rate" && (
                            <span className="text-xs text-green-400 font-medium">+5.2%</span>
                          )}
                        </div>
                        
                        <div className="space-y-1">
                          <div className="text-2xl font-bold text-white">
                            {isVisible ? (
                              <>
                                <CountUp
                                  end={metric.value}
                                  duration={2.5}
                                  delay={index * 0.2}
                                  decimals={metric.label === "Uptime" ? 1 : 0}
                                />
                                {metric.label === "Compliance Rate" || metric.label === "Uptime" ? "%" : ""}
                                {metric.label === "Hours Saved" ? "h" : ""}
                                {metric.label === "Companies" ? "+" : ""}
                              </>
                            ) : (
                              "0"
                            )}
                          </div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Progress Indicator */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Compliance Score</span>
                    <span className="font-semibold text-white">98.7%</span>
                  </div>
                  <div className="w-full bg-slate-700/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-emerald-500 to-green-600 h-2 rounded-full transition-all duration-2000 ease-out"
                      style={{ 
                        width: isVisible ? '98.7%' : '0%',
                        transitionDelay: '1s'
                      }}
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-slate-800/40 backdrop-blur-sm border-blue-500/20 text-center">
                <CheckCircle2 className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <div className="text-sm font-semibold text-white">DSGVO</div>
                <div className="text-xs text-gray-300">100% Konform</div>
              </Card>
              
              <Card className="p-4 bg-slate-800/40 backdrop-blur-sm border-blue-500/20 text-center">
                <Shield className="h-6 w-6 text-blue-400 mx-auto mb-2" />
                <div className="text-sm font-semibold text-white">ISO 27001</div>
                <div className="text-xs text-gray-300">Zertifiziert</div>
              </Card>
            </div>

            {/* Social Proof */}
            <div className="text-center">
              <p className="text-sm text-gray-300 mb-2">
                Vertrauen von über <strong className="text-white">500+ Unternehmen</strong>
              </p>
              <div className="flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-brand-red rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};