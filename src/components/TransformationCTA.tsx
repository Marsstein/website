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
  Rocket,
  Eye
} from 'lucide-react';
import { cn } from '@/lib/utils';

export const TransformationCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Show CTA when section is 70% visible from top
      const shouldShow = rect.top <= windowHeight * 0.3;
      setIsVisible(shouldShow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-16 relative z-10"
      style={{ 
        marginTop: '50vh',
        backgroundColor: '#ffffff'
      }}
    >
      {/* Neural Network Synapses Background */}
      <div className="absolute inset-0 overflow-hidden bg-gradient-to-r from-transparent via-gray-50/30 to-transparent" style={{top: '-10%', height: '120%'}}>
        <svg className="w-full h-full" viewBox="0 0 1200 176" preserveAspectRatio="none">
          <defs>
            <radialGradient id="neuronGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.8"/>
              <stop offset="70%" stopColor="#ff6b3d" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
            </radialGradient>
            <linearGradient id="synapseGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.2"/>
              <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.2"/>
            </linearGradient>
          </defs>
          
          {/* Neural network connections */}
          <g stroke="url(#synapseGrad)" strokeWidth="1.5" fill="none" opacity="0.6">
            <path d="M100,88 Q200,60 300,88 Q400,116 500,88"/>
            <path d="M200,70 Q350,100 500,70 Q650,40 800,70"/>
            <path d="M300,106 Q450,80 600,106 Q750,132 900,106"/>
            <path d="M500,50 Q650,88 800,50 Q950,12 1100,50"/>
            <path d="M600,126 Q750,98 900,126 Q1050,154 1100,126"/>
          </g>
          
          {/* Neurons (main nodes) - simplified animations */}
          <g>
            <circle cx="100" cy="88" r="12" fill="url(#neuronGlow)" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.5s" repeatCount="indefinite"/>
            </circle>
            <circle cx="300" cy="88" r="10" fill="#e24e1b" opacity="0.7"/>
            <circle cx="500" cy="88" r="14" fill="url(#neuronGlow)" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="700" cy="88" r="10" fill="#e24e1b" opacity="0.7"/>
            <circle cx="900" cy="88" r="12" fill="url(#neuronGlow)" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.4;0.8" dur="2.2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="1100" cy="88" r="10" fill="#e24e1b" opacity="0.7"/>
          </g>
          
          {/* Synapse signals - simplified for mobile compatibility */}
          <g>
            <circle cx="150" cy="74" r="3" fill="#e24e1b" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2s" repeatCount="indefinite"/>
              <animate attributeName="cx" values="150;250;350;250;150" dur="4s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="74;60;74;88;74" dur="4s" repeatCount="indefinite"/>
            </circle>
            <circle cx="400" cy="100" r="3" fill="#ff6b3d" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.3;0.8" dur="2.5s" repeatCount="indefinite"/>
              <animate attributeName="cx" values="400;550;700;550;400" dur="5s" repeatCount="indefinite"/>
              <animate attributeName="cy" values="100;80;100;120;100" dur="5s" repeatCount="indefinite"/>
            </circle>
          </g>
          
        </svg>
      </div>

      
      <div className="container mx-auto max-w-4xl px-4 relative z-10">
        <div className="w-full max-w-2xl mx-auto">
          <div className={cn(
            "p-8 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl shadow-lg transition-all duration-1000",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}>
            <div className="text-center space-y-6">
              <Badge className="bg-emerald-600 text-white border-0 font-semibold mx-auto w-fit">
                <Sparkles className="w-4 h-4 mr-1" />
                Transformation starten
              </Badge>
              
              <h3 className="text-2xl font-bold text-gray-900">
                Bereit für die <span className="text-emerald-600">Compliance-Innovation?</span>
              </h3>
              
              <p className="text-lg text-gray-700 max-w-xl mx-auto">
                Lassen Sie uns Ihre Compliance-Herausforderungen in effiziente, automatisierte Lösungen verwandeln.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/contact?demo=true">
                  <Button className="bg-gradient-to-r from-brand-red to-orange-500 hover:from-brand-red/90 hover:to-orange-500/90 text-white px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto group hover:scale-105 transform relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Rocket className="mr-2 h-5 w-5 relative z-10" />
                    <span className="relative z-10">Kostenlose Demo</span>
                    <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                
                <Link to="/tools">
                  <Button variant="outline" className="px-8 py-3 text-base font-semibold border-2 border-brand-red/50 bg-white hover:bg-brand-red/10 hover:border-brand-red w-full sm:w-auto group hover:scale-105 transform relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-red/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <Eye className="mr-2 h-5 w-5 text-brand-red relative z-10" />
                    <span className="text-brand-red relative z-10">Tools entdecken</span>
                  </Button>
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Keine Kreditkarte</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Sofort einsatzbereit</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>DACH-optimiert</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};