import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { 
  Target, 
  Rocket,
  Zap,
  Lock,
  Brain,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const TestUns: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeTab, setActiveTab] = useState<'vision' | 'mission'>('vision');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-animate]');
    sections.forEach(section => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  const AnimatedCard = ({ children, className = '', delay = 0, id }: { 
    children: React.ReactNode; 
    className?: string; 
    delay?: number;
    id?: string;
  }) => {
    const isVisible = id ? visibleSections.has(id) : true;
    return (
      <div 
        id={id}
        data-animate
        className={`transform transition-all duration-1000 ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-8 opacity-0'
        } ${className}`}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </div>
    );
  };

  return (
    <>
      <Helmet>
        <title>Vision & Mission Test - Marsstein</title>
        <meta name="description" content="Test verschiedener Designs für Vision & Mission" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#e24e1b] to-[#f97316]">
          <div className="container mx-auto max-w-6xl text-center text-white">
            <h1 className="text-4xl md:text-6xl font-black mb-6">
              Vision & Mission Design Tests
            </h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              4 verschiedene visuelle Ansätze für unsere Vision und Mission
            </p>
          </div>
        </section>

        {/* Alternative 1: Split-Screen mit Gradient-Hintergründen */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Alternative 1: <span className="text-[#e24e1b]">Split-Screen mit Gradients</span>
              </h2>
              <p className="text-gray-600">Dramatische Farbkontraste mit Orange und Schwarz</p>
            </div>

            <AnimatedCard delay={200} id="alt1">
              <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                {/* Vision Side - Enhanced with dramatic effects */}
                <div className="bg-gradient-to-br from-[#e24e1b] via-[#f97316] to-[#ea580c] p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/15 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-yellow-300/10 rounded-full blur-2xl"></div>
                  <div className="absolute -top-10 -left-10 w-60 h-60 bg-red-500/5 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-white/25 rounded-3xl flex items-center justify-center mb-8 shadow-2xl animate-bounce">
                      <Target className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    <h4 className="text-4xl font-black mb-8 tracking-wider drop-shadow-lg">VISION</h4>
                    <div className="h-2 w-20 bg-white/60 mb-8 rounded-full shadow-lg"></div>
                    <blockquote className="text-3xl font-light italic leading-relaxed drop-shadow-md">
                      „Compliance, die sich <span className="font-black underline decoration-4 decoration-yellow-300 text-yellow-100">einfach erledigt</span>."
                    </blockquote>
                  </div>
                </div>
                
                {/* Mission Side - Enhanced with dramatic dark theme */}
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-12 text-white relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-36 h-36 bg-blue-500/15 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-28 h-28 bg-purple-500/15 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mb-8 shadow-2xl animate-pulse">
                      <Rocket className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    <h4 className="text-4xl font-black mb-8 tracking-wider bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">MISSION</h4>
                    <div className="h-2 w-20 bg-gradient-to-r from-blue-400 to-purple-400 mb-8 rounded-full shadow-lg"></div>
                    <p className="text-xl leading-relaxed text-gray-100 drop-shadow-sm">
                      Eine <span className="text-blue-300 font-bold bg-blue-900/30 px-2 py-1 rounded-lg border border-blue-500/30">EU-/CH-gehostete, KI-native Plattform</span>, 
                      die Richtlinien analysiert, Lücken erklärt und Teams sicher zur Zertifizierung führt – 
                      mit <span className="text-purple-300 font-bold bg-purple-900/30 px-2 py-1 rounded-lg border border-purple-500/30">lückenloser Audit-Spur</span>.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Alternative 2: Glassmorphism Cards */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Alternative 2: <span className="text-[#e24e1b]">Glassmorphism Cards</span>
              </h2>
              <p className="text-gray-600">Schwebende Karten mit Backdrop-Blur-Effekten</p>
            </div>

            <AnimatedCard delay={400} id="alt2">
              <div className="relative">
                {/* Enhanced Background Shapes - More prominent */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-blue-50 to-purple-50 rounded-3xl"></div>
                <div className="absolute top-5 left-5 w-48 h-48 bg-gradient-to-r from-[#e24e1b]/30 to-[#f97316]/30 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-5 right-5 w-56 h-56 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                
                <div className="relative z-10 grid md:grid-cols-2 gap-8 p-12">
                  {/* Vision Card - Enhanced glassmorphism */}
                  <div className="bg-white/60 backdrop-blur-2xl border-2 border-white/40 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:bg-white/70 group">
                    <div className="text-center mb-8">
                      <div className="w-24 h-24 bg-gradient-to-r from-[#e24e1b] to-[#f97316] rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:animate-spin transition-all duration-300">
                        <Target className="w-12 h-12 text-white drop-shadow-lg" />
                      </div>
                      <h4 className="text-3xl font-black text-gray-900 tracking-widest drop-shadow-sm">VISION</h4>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-transparent via-[#e24e1b] to-transparent mb-8 rounded-full"></div>
                    <blockquote className="text-2xl text-gray-800 text-center italic font-medium leading-relaxed drop-shadow-sm">
                      „Compliance, die sich <br/>
                      <span className="text-3xl font-black text-[#e24e1b] not-italic bg-gradient-to-r from-orange-200 to-red-200 px-4 py-2 rounded-xl mx-2 shadow-lg">
                        einfach erledigt
                      </span>."
                    </blockquote>
                  </div>
                  
                  {/* Mission Card - Enhanced glassmorphism */}
                  <div className="bg-white/60 backdrop-blur-2xl border-2 border-white/40 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-110 hover:bg-white/70 group">
                    <div className="text-center mb-8">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:animate-bounce transition-all duration-300">
                        <Rocket className="w-12 h-12 text-white drop-shadow-lg" />
                      </div>
                      <h4 className="text-3xl font-black text-gray-900 tracking-widest drop-shadow-sm">MISSION</h4>
                    </div>
                    <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8 rounded-full"></div>
                    <p className="text-lg text-gray-700 leading-relaxed text-center drop-shadow-sm">
                      Eine <span className="font-black text-blue-600 bg-blue-100 px-3 py-2 rounded-xl shadow-lg border-2 border-blue-200">EU-/CH-gehostete, KI-native Plattform</span>, 
                      die Richtlinien analysiert, Lücken erklärt und Teams sicher zur Zertifizierung führt – 
                      mit <span className="font-black text-purple-600 bg-purple-100 px-3 py-2 rounded-xl shadow-lg border-2 border-purple-200">lückenloser Audit-Spur</span>.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Alternative 3: Asymmetrisches Layout */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Alternative 3: <span className="text-[#e24e1b]">Asymmetrisches Layout</span>
              </h2>
              <p className="text-gray-600">Große Vision-Karte mit kompakter Mission-Übersicht</p>
            </div>

            <AnimatedCard delay={600} id="alt3">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Vision - Massively Enhanced Large Card */}
                <div className="lg:col-span-2 bg-gradient-to-br from-[#e24e1b] via-[#f97316] to-[#ea580c] rounded-3xl p-16 text-white relative overflow-hidden transform hover:scale-105 transition-all duration-700 shadow-2xl hover:shadow-orange-500/25">
                  <div className="absolute top-0 right-0 w-80 h-80 opacity-15">
                    <svg viewBox="0 0 100 100" className="w-full h-full animate-spin" style={{animationDuration: '20s'}}>
                      <path d="M50 10 L90 90 L10 90 Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <div className="absolute -top-20 -left-20 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 right-0 w-72 h-72 bg-red-500/10 rounded-full blur-3xl"></div>
                  <div className="relative z-10">
                    <div className="flex items-center gap-6 mb-12">
                      <div className="w-16 h-16 bg-white/25 rounded-2xl flex items-center justify-center shadow-2xl animate-pulse">
                        <Target className="w-8 h-8 text-white drop-shadow-lg" />
                      </div>
                      <span className="text-lg font-bold tracking-widest opacity-90 drop-shadow-md">UNSERE VISION</span>
                    </div>
                    <h3 className="text-6xl md:text-8xl font-black leading-tight mb-12 drop-shadow-2xl">
                      Compliance,<br/>
                      die sich<br/>
                      <span className="text-yellow-100 drop-shadow-lg animate-pulse">einfach</span><br/>
                      <span className="text-yellow-100 drop-shadow-lg animate-pulse" style={{animationDelay: '0.5s'}}>erledigt</span>
                    </h3>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-1 bg-white/60 rounded-full shadow-lg"></div>
                      <span className="text-xl font-medium opacity-90 drop-shadow-md">Das ist unser Ziel</span>
                    </div>
                  </div>
                </div>
                
                {/* Mission - Compact Card with Enhanced Design */}
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-10 shadow-2xl border-2 border-gray-200 hover:shadow-3xl hover:border-blue-300 transition-all duration-500 transform hover:scale-105">
                  <div className="text-center mb-8">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl animate-bounce">
                      <Rocket className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    <h4 className="text-2xl font-black text-gray-900 tracking-widest drop-shadow-sm">MISSION</h4>
                  </div>
                  <div className="space-y-6 text-base text-gray-700 leading-relaxed">
                    <div className="flex items-start gap-4 p-3 bg-blue-50 rounded-xl border border-blue-200 hover:bg-blue-100 transition-colors">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                      <span>EU-/CH-gehostete, <strong className="text-blue-700">KI-native Plattform</strong></span>
                    </div>
                    <div className="flex items-start gap-4 p-3 bg-green-50 rounded-xl border border-green-200 hover:bg-green-100 transition-colors">
                      <div className="w-3 h-3 bg-green-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                      <span>Richtlinien <strong className="text-green-700">analysieren & erklären</strong></span>
                    </div>
                    <div className="flex items-start gap-4 p-3 bg-purple-50 rounded-xl border border-purple-200 hover:bg-purple-100 transition-colors">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                      <span>Teams sicher zur <strong className="text-purple-700">Zertifizierung führen</strong></span>
                    </div>
                    <div className="flex items-start gap-4 p-3 bg-orange-50 rounded-xl border border-orange-200 hover:bg-orange-100 transition-colors">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mt-2 flex-shrink-0 shadow-lg"></div>
                      <span>Mit <strong className="text-orange-700">lückenloser Audit-Spur</strong></span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Alternative 4: Interactive Tab-Cards */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Alternative 4: <span className="text-[#e24e1b]">Interactive Tab-Cards</span>
              </h2>
              <p className="text-gray-600">Wechselbare Ansicht mit Tab-Navigation</p>
            </div>

            <AnimatedCard delay={800} id="alt4">
              <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="flex border-b border-gray-200">
                  <button 
                    onClick={() => setActiveTab('vision')}
                    className={`flex-1 px-8 py-6 font-bold text-lg transition-all ${
                      activeTab === 'vision' 
                        ? 'bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white' 
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Target className="w-6 h-6" />
                      VISION
                    </div>
                  </button>
                  <button 
                    onClick={() => setActiveTab('mission')}
                    className={`flex-1 px-8 py-6 font-bold text-lg transition-all ${
                      activeTab === 'mission' 
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-center gap-3">
                      <Rocket className="w-6 h-6" />
                      MISSION
                    </div>
                  </button>
                </div>
                
                <div className="p-16">
                  {/* Vision Content - Massively Enhanced */}
                  {activeTab === 'vision' && (
                    <div className="text-center animate-fade-in">
                      <div className="mb-12">
                        <div className="w-32 h-32 bg-gradient-to-r from-[#e24e1b] to-[#f97316] rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse transform hover:scale-110 transition-all duration-300">
                          <Target className="w-16 h-16 text-white drop-shadow-lg" />
                        </div>
                        <h3 className="text-6xl font-black text-gray-900 mb-6 drop-shadow-lg bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Unsere Vision</h3>
                      </div>
                      
                      <div className="max-w-4xl mx-auto">
                        <blockquote className="text-4xl font-light text-gray-800 mb-12 leading-relaxed drop-shadow-md">
                          <span className="text-8xl text-[#e24e1b] font-serif leading-none drop-shadow-xl animate-pulse">"</span>
                          Compliance, die sich 
                          <span className="font-black text-[#e24e1b] bg-gradient-to-r from-orange-200 via-yellow-200 to-red-200 px-6 py-3 rounded-2xl mx-3 shadow-2xl border-2 border-orange-300 animate-pulse">
                            einfach erledigt
                          </span>
                          <span className="text-8xl text-[#e24e1b] font-serif leading-none drop-shadow-xl animate-pulse" style={{animationDelay: '0.5s'}}>"</span>
                        </blockquote>
                        
                        <div className="grid grid-cols-3 gap-8 mt-12">
                          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-orange-200">
                            <Zap className="w-12 h-12 text-[#e24e1b] mx-auto mb-4 drop-shadow-lg animate-bounce" />
                            <span className="text-lg font-bold text-gray-700">Schnell</span>
                          </div>
                          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-orange-200">
                            <Lock className="w-12 h-12 text-[#e24e1b] mx-auto mb-4 drop-shadow-lg animate-bounce" style={{animationDelay: '0.2s'}} />
                            <span className="text-lg font-bold text-gray-700">Sicher</span>
                          </div>
                          <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 border-2 border-orange-200">
                            <Brain className="w-12 h-12 text-[#e24e1b] mx-auto mb-4 drop-shadow-lg animate-bounce" style={{animationDelay: '0.4s'}} />
                            <span className="text-lg font-bold text-gray-700">Erklärbar</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Mission Content - Massively Enhanced */}
                  {activeTab === 'mission' && (
                    <div className="text-center animate-fade-in">
                      <div className="mb-12">
                        <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse transform hover:scale-110 transition-all duration-300">
                          <Rocket className="w-16 h-16 text-white drop-shadow-lg" />
                        </div>
                        <h3 className="text-6xl font-black text-gray-900 mb-6 drop-shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Unsere Mission</h3>
                      </div>
                      
                      <div className="max-w-4xl mx-auto">
                        <p className="text-2xl text-gray-700 leading-relaxed mb-12 drop-shadow-sm">
                          Eine <span className="font-black text-blue-600 bg-gradient-to-r from-blue-100 to-blue-200 px-4 py-2 rounded-xl shadow-lg border-2 border-blue-300">EU-/CH-gehostete, KI-native Plattform</span>, 
                          die Richtlinien analysiert, Lücken erklärt und Teams sicher zur Zertifizierung führt – 
                          mit <span className="font-black text-purple-600 bg-gradient-to-r from-purple-100 to-purple-200 px-4 py-2 rounded-xl shadow-lg border-2 border-purple-300">lückenloser Audit-Spur</span>.
                        </p>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-blue-200">
                            <h4 className="font-black text-blue-600 mb-4 text-xl">EU/CH-Hosted</h4>
                            <p className="text-base text-gray-600">Datenschutz by Design mit europäischen Standards</p>
                          </div>
                          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-purple-200">
                            <h4 className="font-black text-purple-600 mb-4 text-xl">KI-Native</h4>
                            <p className="text-base text-gray-600">Intelligente Automatisierung mit Human-in-the-Loop</p>
                          </div>
                          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-green-200">
                            <h4 className="font-black text-green-600 mb-4 text-xl">Analyse & Erklärung</h4>
                            <p className="text-base text-gray-600">Komplexe Regulierungen verständlich aufbereitet</p>
                          </div>
                          <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 border-orange-200">
                            <h4 className="font-black text-orange-600 mb-4 text-xl">Audit-Ready</h4>
                            <p className="text-base text-gray-600">Lückenlose Dokumentation für Zertifizierungen</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Fazit */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#e24e1b] to-[#f97316]">
          <div className="container mx-auto max-w-4xl text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Welches Design gefällt am besten?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Jede Alternative hat ihren eigenen visuellen Charakter und Einsatzbereich
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <h3 className="font-bold mb-2">Alternative 1</h3>
                <p className="opacity-90">Dramatisch & Kontrastreich</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <h3 className="font-bold mb-2">Alternative 2</h3>
                <p className="opacity-90">Modern & Schwebend</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <h3 className="font-bold mb-2">Alternative 3</h3>
                <p className="opacity-90">Asymmetrisch & Fokussiert</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                <h3 className="font-bold mb-2">Alternative 4</h3>
                <p className="opacity-90">Interaktiv & Detailliert</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default TestUns;