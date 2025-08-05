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
      {/* Schwebende Logo Background Pattern - Mehr Logos mit höherer Deckkraft */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Logo 1 - Oben links */}
        <div 
          className="absolute opacity-70 w-20 h-20"
          style={{
            top: '8%',
            left: '4%',
            backgroundImage: 'url("/Logo Marsstein.svg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'floatSlow 20s ease-in-out infinite'
          }}
        />
        
        {/* Logo 2 - Oben mitte */}
        <div 
          className="absolute opacity-55 w-16 h-16"
          style={{
            top: '5%',
            left: '45%',
            backgroundImage: 'url("/Logo Marsstein.svg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'floatMedium 24s ease-in-out infinite'
          }}
        />
        
        {/* Logo 3 - Oben rechts */}
        <div 
          className="absolute opacity-65 w-18 h-18"
          style={{
            top: '12%',
            right: '6%',
            width: '72px',
            height: '72px',
            backgroundImage: 'url("/Logo Marsstein.svg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'floatFast 18s ease-in-out infinite reverse'
          }}
        />
        
        {/* Logo 4 - Mitte links oben */}
        <div 
          className="absolute opacity-60 w-14 h-14"
          style={{
            top: '30%',
            left: '8%',
            backgroundImage: 'url("/Logo Marsstein.svg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'floatSlow 22s ease-in-out infinite reverse'
          }}
        />
        
        {/* Logo 5 - Mitte links */}
        <div 
          className="absolute opacity-75 w-24 h-24"
          style={{
            top: '45%',
            left: '2%',
            backgroundImage: 'url("/Logo Marsstein.svg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'floatMedium 16s ease-in-out infinite'
          }}
        />
        
        {/* Logo 6 - Mitte rechts oben */}
        <div 
          className="absolute opacity-55 w-16 h-16"
          style={{
            top: '35%',
            right: '12%',
            backgroundImage: 'url("/Logo Marsstein.svg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'floatFast 21s ease-in-out infinite'
          }}
        />
        
        {/* Logo 7 - Mitte rechts */}
        <div 
          className="absolute opacity-70 w-20 h-20"
          style={{
            top: '55%',
            right: '4%',
            backgroundImage: 'url("/Logo Marsstein.svg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'floatSlow 19s ease-in-out infinite reverse'
          }}
        />
        
        {/* Logo 8 - Unten links oben */}
        <div 
          className="absolute opacity-60 w-14 h-14"
          style={{
            bottom: '35%',
            left: '10%',
            backgroundImage: 'url("/Logo Marsstein.svg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'floatMedium 23s ease-in-out infinite'
          }}
        />
        
        {/* Logo 9 - Unten links */}
        <div 
          className="absolute opacity-65 w-18 h-18"
          style={{
            bottom: '15%',
            left: '6%',
            width: '72px',
            height: '72px',
            backgroundImage: 'url("/Logo Marsstein.svg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'floatFast 17s ease-in-out infinite reverse'
          }}
        />
        
        {/* Logo 10 - Unten mitte */}
        <div 
          className="absolute opacity-55 w-16 h-16"
          style={{
            bottom: '8%',
            left: '42%',
            backgroundImage: 'url("/Logo Marsstein.svg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'floatSlow 25s ease-in-out infinite'
          }}
        />
        
        {/* Logo 11 - Unten rechts */}
        <div 
          className="absolute opacity-70 w-20 h-20"
          style={{
            bottom: '12%',
            right: '8%',
            backgroundImage: 'url("/Logo Marsstein.svg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'floatMedium 20s ease-in-out infinite reverse'
          }}
        />
        
        {/* Logo 12 - Unten rechts oben */}
        <div 
          className="absolute opacity-60 w-14 h-14"
          style={{
            bottom: '30%',
            right: '10%',
            backgroundImage: 'url("/Logo Marsstein.svg")',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            animation: 'floatFast 18s ease-in-out infinite'
          }}
        />
      </div>

      {/* CSS Animationen */}
      <style jsx>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-10px) translateX(5px);
          }
        }
        
        @keyframes floatMedium {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-8px) translateX(-3px);
          }
          66% {
            transform: translateY(6px) translateX(8px);
          }
        }
        
        @keyframes floatFast {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-6px) translateX(4px);
          }
          50% {
            transform: translateY(8px) translateX(-6px);
          }
          75% {
            transform: translateY(-4px) translateX(7px);
          }
        }
      `}</style>
      
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
                Bereit für die <span className="text-emerald-600">Compliance-Revolution?</span>
              </h3>
              
              <p className="text-lg text-gray-700 max-w-xl mx-auto">
                Lassen Sie uns Ihre Compliance-Herausforderungen in effiziente, automatisierte Lösungen verwandeln.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/contact?demo=true">
                  <Button className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white px-8 py-3 text-base font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto">
                    <Rocket className="mr-2 h-5 w-5" />
                    Kostenlose Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                
                <Link to="/tools">
                  <Button variant="outline" className="px-8 py-3 text-base font-semibold border-2 border-gray-300 bg-white hover:bg-gray-50 w-full sm:w-auto">
                    <Eye className="mr-2 h-5 w-5" />
                    Tools entdecken
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