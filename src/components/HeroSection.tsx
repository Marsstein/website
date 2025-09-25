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
    { label: "Datenschutzerklärung", value: 95, status: "Automatisch generiert", icon: Shield },
    { label: "Verarbeitungsverzeichnis", value: 88, status: "KI-optimiert", icon: Building2 },
    { label: "TOM-Dokumentation", value: 92, status: "Audit-ready", icon: Clock },
    { label: "Betroffenenanfragen", value: 100, status: "Vollautomatisiert", icon: Activity }
  ];

  const features = [
    { icon: Brain, title: "KI-gestützte Analyse", desc: "Automatische Compliance-Bewertung", badge: "Beta" },
    { icon: Shield, title: "DSGVO Ready", desc: "EU-konform nach aktuellen Standards", badge: "Ready" },
    { icon: Globe, title: "Multi-Regional", desc: "DACH & EU-weit", badge: "Roadmap" },
    { icon: Award, title: "ISO 27001 Ready", desc: "Zertifizierung in Planung", badge: "Q3 2025" }
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
            <div className="flex gap-2">
              <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30 px-4 py-2 text-sm font-medium backdrop-blur-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                KI-native Compliance Platform
              </Badge>
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30 px-3 py-2 text-xs font-medium backdrop-blur-sm">
                Beta Preview
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
                Automatisieren Sie Ihre Compliance-Prozesse mit modernster Technologie.
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className={cn(
                      "flex items-start space-x-3 p-3 sm:p-4 rounded-lg bg-white/10 backdrop-blur-sm border-2 border-brand-red/30 transition-all duration-500 hover:bg-white/20 hover:shadow-lg hover:border-brand-red/50 hover-lift group",
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                    )}
                    style={{ 
                      transitionDelay: `${(index + 2) * 150}ms`
                    }}
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg bg-brand-red/30 group-hover:bg-brand-red/40 transition-colors duration-300">
                      <Icon className="h-5 w-5 text-brand-red group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="flex-1 min-w-0 overflow-hidden">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="font-semibold text-white text-sm group-hover:text-orange-100 transition-colors duration-300 break-words">{feature.title}</h3>
                        {feature.badge && (
                          <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs px-1.5 py-0.5 flex-shrink-0">
                            {feature.badge}
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-300 text-xs group-hover:text-gray-200 transition-colors duration-300 break-words">{feature.desc}</p>
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
            <Card className="p-6 bg-white/95 backdrop-blur-sm border-2 border-[#e24e1b]/20 hover:border-[#e24e1b]/40 shadow-2xl transition-all duration-300">
              <div className="space-y-6">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">DSGVO Compliance Suite</h3>
                    <p className="text-sm text-gray-600">Ihre Echtzeit-Compliance in Aktion</p>
                  </div>
                  <Badge className="bg-[#e24e1b] text-white border-0">
                    <Activity className="w-3 h-3 mr-1" />
                    Live System
                  </Badge>
                </div>

                {/* DSGVO Progress Metrics */}
                <div className="space-y-4">
                  {metrics.map((metric, index) => {
                    const Icon = metric.icon;
                    const isComplete = metric.value === 100;

                    return (
                      <div
                        key={metric.label}
                        className="group hover:scale-[1.02] transition-all duration-300"
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className={cn(
                              "p-1.5 rounded-lg transition-all",
                              isComplete ? "bg-[#39B37B]/10" : "bg-[#e24e1b]/10"
                            )}>
                              <Icon className={cn(
                                "h-4 w-4",
                                isComplete ? "text-[#39B37B]" : "text-[#e24e1b]"
                              )} />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900">{metric.label}</p>
                              <p className="text-xs text-gray-500">{metric.status}</p>
                            </div>
                          </div>
                          <span className={cn(
                            "text-sm font-bold",
                            isComplete ? "text-[#39B37B]" : "text-[#e24e1b]"
                          )}>
                            {metric.value}%
                          </span>
                        </div>
                        <div className="relative w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className={cn(
                              "h-full rounded-full transition-all duration-2000 ease-out",
                              isComplete
                                ? "bg-gradient-to-r from-[#39B37B] to-[#39B37B]/80"
                                : "bg-gradient-to-r from-[#e24e1b] to-[#f97316]"
                            )}
                            style={{
                              width: isVisible ? `${metric.value}%` : '0%',
                              transitionDelay: `${1000 + index * 200}ms`
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Overall Status */}
                <div className="pt-4 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wider">Gesamtstatus</p>
                      <p className="text-lg font-bold text-[#e24e1b]">94% DSGVO-konform</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-[#39B37B]/10 text-[#39B37B] border-[#39B37B]/20">
                        <CheckCircle2 className="w-3 h-3 mr-1" />
                        Audit-Ready
                      </Badge>
                      <Badge className="bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20">
                        <Brain className="w-3 h-3 mr-1" />
                        KI-Powered
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-white border-2 border-[#39B37B]/30 text-center relative hover:border-[#39B37B]/50 transition-all hover:shadow-lg">
                <CheckCircle2 className="h-6 w-6 text-[#39B37B] mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">DSGVO</div>
                <div className="text-xs text-gray-600">100% konform</div>
                <Badge className="absolute -top-2 -right-2 bg-[#39B37B] text-white text-xs px-2 py-0.5">
                  Aktiv
                </Badge>
              </Card>

              <Card className="p-4 bg-white border-2 border-[#e24e1b]/30 text-center relative hover:border-[#e24e1b]/50 transition-all hover:shadow-lg">
                <Shield className="h-6 w-6 text-[#e24e1b] mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">EU AI Act</div>
                <div className="text-xs text-gray-600">KI-Governance</div>
                <Badge className="absolute -top-2 -right-2 bg-[#e24e1b] text-white text-xs px-2 py-0.5">
                  2025
                </Badge>
              </Card>
            </div>

            {/* Market Focus */}
            <div className="text-center">
              <p className="text-sm text-gray-300 mb-2">
                Entwickelt für <strong className="text-white">EU-Unternehmen</strong>
              </p>
              <div className="flex justify-center items-center space-x-2">
                <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 text-xs px-2 py-1">
                  Beta-Programm
                </Badge>
                <div className="flex space-x-1">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 bg-brand-red rounded-full animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};