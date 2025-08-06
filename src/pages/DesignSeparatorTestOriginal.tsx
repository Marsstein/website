import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const DesignSeparatorTest: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-16">
            <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30 px-4 py-2 mb-4">
              Design Test
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Separator Design Vorschläge
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hier sind 5 verschiedene Separator-Designs für die Übergänge zwischen Homepage-Sektionen
            </p>
          </div>

          {/* Test Sections */}
          <div className="space-y-16">
            
            {/* Section 1 */}
            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sample Section A</h2>
              <p className="text-gray-600">
                Dies ist ein Beispiel-Abschnitt um die Separator-Designs zu demonstrieren. 
                Hier könnte beispielsweise der HeroSection-Inhalt stehen.
              </p>
            </Card>

            {/* Separator 1: Minimale Partikel-Trenner */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                1. Minimale Partikel-Trenner
              </h3>
              <div className="relative h-16 flex items-center justify-center">
                <div className="flex space-x-3">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-2 h-2 bg-brand-red/60 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sample Section B</h2>
              <p className="text-gray-600">
                Ein weiterer Beispiel-Abschnitt. Hier könnte die ScrollTransformation-Komponente sein.
              </p>
            </Card>

            {/* Separator 2: Geometrische Diamant-Linie */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                2. Geometrische Diamant-Linie
              </h3>
              <div className="relative h-20 flex items-center justify-center">
                <div className="flex items-center w-full max-w-md">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent to-brand-red/30"></div>
                  <div className="w-4 h-4 bg-brand-red transform rotate-45 mx-4"></div>
                  <div className="flex-1 h-px bg-gradient-to-l from-transparent to-brand-red/30"></div>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sample Section C</h2>
              <p className="text-gray-600">
                Dritter Beispiel-Abschnitt für DACHCompliance oder ähnliche Komponenten.
              </p>
            </Card>

            {/* Separator 3: Pulsierender Energie-Strich */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                3. Pulsierender Energie-Strich
              </h3>
              <div className="relative h-12 flex items-center justify-center">
                <div className="w-full max-w-lg h-px bg-gradient-to-r from-transparent via-brand-red/60 to-transparent relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/80 to-transparent animate-pulse"></div>
                </div>
                <div className="absolute w-3 h-3 bg-brand-red rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Section 4 */}
            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sample Section D</h2>
              <p className="text-gray-600">
                Vierter Beispiel-Abschnitt für ISO27001Section oder EUAIActSection.
              </p>
            </Card>

            {/* Separator 4: Subtiles Marsstein-Logo-Array */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                4. Subtiles Marsstein-Logo-Array
              </h3>
              <div className="relative h-24 flex items-center justify-center opacity-40">
                <div className="flex space-x-8">
                  {[...Array(3)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-6 h-6 opacity-60 hover:opacity-100 transition-opacity duration-300"
                      style={{
                        backgroundImage: 'url("/JLogoMarsstein.svg")',
                        backgroundSize: 'contain',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        filter: 'sepia(100%) saturate(200%) hue-rotate(15deg) brightness(0.8)',
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Section 5 */}
            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sample Section E</h2>
              <p className="text-gray-600">
                Fünfter Beispiel-Abschnitt für InteractiveShowcase oder TrustSecurity.
              </p>
            </Card>

            {/* Separator 5: Moderne Verlaufs-Bars (EMPFEHLUNG) */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                5. Moderne Verlaufs-Bars ⭐ (EMPFEHLUNG)
              </h3>
              <div className="relative h-16 flex items-center justify-center">
                <div className="w-full max-w-2xl">
                  <div className="flex space-x-2 items-center justify-center">
                    <div className="h-1 w-16 bg-gradient-to-r from-brand-red/60 to-orange-500/60 rounded-full"></div>
                    <div className="h-2 w-8 bg-brand-red rounded-full animate-pulse"></div>
                    <div className="h-1 w-16 bg-gradient-to-l from-brand-red/60 to-orange-500/60 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Section */}
            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sample Section F</h2>
              <p className="text-gray-600">
                Letzter Beispiel-Abschnitt um das Ende der Separatoren zu zeigen.
              </p>
            </Card>

            {/* Divider for new concepts */}
            <div className="mt-20 mb-16 text-center">
              <div className="inline-flex items-center space-x-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-red/30"></div>
                <Badge className="bg-purple-100 text-purple-800 border-purple-300 px-6 py-2">
                  Neue Übergangskonzepte (Advanced)
                </Badge>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-red/30"></div>
              </div>
            </div>

            {/* Section G */}
            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sample Section G</h2>
              <p className="text-gray-600">
                Neue Beispiel-Sektion für erweiterte Übergangskonzepte.
              </p>
            </Card>

            {/* Concept 6: Fließender Farbverlauf */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                6. Fließender Farbverlauf-Übergang 🌊
              </h3>
              <div className="relative h-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-white via-orange-50/40 via-orange-100/60 to-white animate-pulse"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-red/10 to-transparent"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="flex space-x-2">
                    <div className="w-1 h-8 bg-brand-red/40 rounded-full animate-pulse"></div>
                    <div className="w-1 h-12 bg-brand-red/60 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-1 h-8 bg-brand-red/40 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section H */}
            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sample Section H</h2>
              <p className="text-gray-600">
                Weitere Beispiel-Sektion mit unterschiedlicher Hintergrundfarbe.
              </p>
            </Card>

            {/* Concept 7: Interaktive Hover-Zone */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                7. Interaktive Hover-Zone ✨
              </h3>
              <div className="relative h-20 group cursor-pointer bg-gradient-to-r from-gray-50 via-orange-50/30 to-gray-50 rounded-lg transition-all duration-500 hover:from-orange-50/50 hover:via-brand-red/10 hover:to-orange-50/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center space-x-4 opacity-50 group-hover:opacity-100 transition-all duration-300">
                    <div className="w-8 h-8 border-2 border-brand-red/30 rounded-full group-hover:border-brand-red group-hover:scale-110 transition-all duration-300"></div>
                    <div className="text-sm text-gray-500 group-hover:text-brand-red transition-colors duration-300">
                      Hover für Interaktion
                    </div>
                    <div className="w-8 h-8 border-2 border-brand-red/30 rounded-full group-hover:border-brand-red group-hover:scale-110 transition-all duration-300"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section I */}
            <Card className="p-8 bg-gradient-to-r from-blue-50/30 to-purple-50/30 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sample Section I</h2>
              <p className="text-gray-600">
                Sektion mit subtilen Farbverläufen im Hintergrund.
              </p>
            </Card>

            {/* Concept 8: Morphende Geometrie */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                8. Morphende Geometrie 🔄
              </h3>
              <div className="relative h-24 flex items-center justify-center">
                <div className="relative">
                  <div className="w-6 h-6 bg-brand-red/20 transform rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
                  <div className="absolute top-0 left-0 w-6 h-6 bg-orange-500/30 rounded-full animate-ping"></div>
                  <div className="absolute -top-2 -left-2 w-10 h-10 border border-brand-red/20 rounded-full animate-pulse"></div>
                </div>
                <div className="absolute left-0 right-0 top-1/2 h-px bg-gradient-to-r from-transparent via-brand-red/30 to-transparent"></div>
              </div>
            </div>

            {/* Section J */}
            <Card className="p-8 bg-white border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sample Section J</h2>
              <p className="text-gray-600">
                Sektion mit erhöhtem Schatten für mehr Tiefe.
              </p>
            </Card>

            {/* Concept 9: Scroll-aktivierte Welle */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                9. Scroll-aktivierte Welle 🌊
              </h3>
              <div className="relative h-16 overflow-hidden bg-gradient-to-r from-gray-50 to-gray-50">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 400 60"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,30 Q100,10 200,30 T400,30"
                    stroke="url(#scrollGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                  <defs>
                    <linearGradient id="scrollGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-50/60 to-transparent animate-pulse"></div>
              </div>
            </div>

            {/* Section K */}
            <Card className="p-8 bg-gradient-to-br from-white to-orange-50/20 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sample Section K</h2>
              <p className="text-gray-600">
                Sektion mit diagonalem Verlauf für mehr Dynamik.
              </p>
            </Card>

            {/* Concept 10: Adaptive Partikel-Cloud */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                10. Adaptive Partikel-Cloud ⚡
              </h3>
              <div className="relative h-28 flex items-center justify-center overflow-hidden">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-radial from-brand-red/5 via-orange-500/5 to-transparent"></div>
                
                {/* Floating particles */}
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-brand-red/60 rounded-full animate-bounce"
                    style={{
                      left: `${10 + (i * 7)}%`,
                      top: `${30 + Math.sin(i) * 20}%`,
                      animationDelay: `${i * 0.1}s`,
                      animationDuration: `${2 + (i % 3)}s`
                    }}
                  />
                ))}
                
                {/* Central energy core */}
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-brand-red/80 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-orange-500/40 rounded-full animate-ping"></div>
                </div>
              </div>
            </div>

            {/* Final comparison section */}
            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sample Section L</h2>
              <p className="text-gray-600">
                Abschließende Beispiel-Sektion für das Ende der Übergangstests.
              </p>
            </Card>

            {/* Professional Bridge Concepts Section */}
            <div className="mt-20 mb-16 text-center">
              <div className="inline-flex items-center space-x-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-red/30"></div>
                <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30 px-6 py-2">
                  Professional Bridge Konzepte
                </Badge>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-red/30"></div>
              </div>
            </div>

            {/* Hero to Pain Points Section */}
            <Card className="p-8 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white border border-gray-700">
              <h2 className="text-2xl font-semibold mb-4">Hero Section</h2>
              <p className="text-gray-300">
                Beispiel Hero-Bereich mit dunklem Hintergrund für Tech-Look.
              </p>
            </Card>

            {/* Bridge 1: Tech-Grid mit Glassmorphism */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                11. Tech-Grid mit Glassmorphism-Übergang 🔷
              </h3>
              <div className="relative h-40 overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-white">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgba(226,78,27,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(226,78,27,0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                  }}></div>
                </div>
                
                {/* Glassmorphism Cards */}
                <div className="absolute inset-0 flex items-center justify-center space-x-4">
                  <div className="w-32 h-20 bg-white/10 backdrop-blur-md border border-brand-red/20 rounded-lg animate-pulse"></div>
                  <div className="w-32 h-24 bg-white/20 backdrop-blur-md border border-brand-red/30 rounded-lg animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-32 h-20 bg-white/10 backdrop-blur-md border border-brand-red/20 rounded-lg animate-pulse" style={{animationDelay: '1s'}}></div>
                </div>
                
                {/* Floating Tech Elements */}
                <div className="absolute top-4 left-8 w-2 h-2 bg-brand-red rounded-full animate-ping"></div>
                <div className="absolute bottom-8 right-12 w-2 h-2 bg-orange-500 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              </div>
            </div>

            {/* Pain Points Section */}
            <Card className="p-8 bg-white border border-red-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Pain Points Section</h2>
              <p className="text-gray-600">
                Compliance-Herausforderungen und Probleme.
              </p>
            </Card>

            {/* Bridge 2: Wellenform-Bridge mit pulsierender Akzentfarbe */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                12. Wellenform-Bridge mit pulsierender Akzentfarbe 🌊
              </h3>
              <div className="relative h-32 overflow-hidden">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  
                  {/* Multiple Wave Layers */}
                  <path d="M0,60 Q300,30 600,60 T1200,60" stroke="#e24e1b" strokeWidth="2" fill="none" opacity="0.3" className="animate-pulse" />
                  <path d="M0,60 Q300,20 600,60 T1200,60" stroke="#e24e1b" strokeWidth="3" fill="none" opacity="0.5" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                  <path d="M0,60 Q300,40 600,60 T1200,60" stroke="#ff6b3d" strokeWidth="1" fill="none" opacity="0.4" className="animate-pulse" style={{animationDelay: '1s'}} />
                  
                  {/* Filled Wave */}
                  <path d="M0,80 Q300,50 600,80 T1200,80 L1200,120 L0,120 Z" fill="url(#waveGradient)" opacity="0.5" className="animate-pulse" />
                </svg>
                
                {/* Pulsing Accent Dots */}
                <div className="absolute inset-0 flex items-center justify-center space-x-8">
                  <div className="w-3 h-3 bg-brand-red rounded-full animate-ping"></div>
                  <div className="w-4 h-4 bg-brand-red rounded-full animate-ping" style={{animationDelay: '0.5s'}}></div>
                  <div className="w-3 h-3 bg-brand-red rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>

            {/* Solution Section */}
            <Card className="p-8 bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Solution Section</h2>
              <p className="text-gray-600">
                KI-gestützte Lösungen und Automatisierung.
              </p>
            </Card>

            {/* Bridge 3: Feature-Connection-Bridge */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                13. Feature-Connection-Bridge 🔗
              </h3>
              <div className="relative h-36 overflow-hidden">
                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 140" preserveAspectRatio="none">
                  {/* Animated Connection Paths */}
                  <path d="M100,20 Q400,70 700,20" stroke="#e24e1b" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse" />
                  <path d="M100,120 Q400,70 700,120" stroke="#ff6b3d" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                  
                  {/* Feature Nodes */}
                  <circle cx="100" cy="20" r="8" fill="#e24e1b" className="animate-pulse" />
                  <circle cx="400" cy="70" r="10" fill="#e24e1b" className="animate-ping" />
                  <circle cx="700" cy="20" r="8" fill="#e24e1b" className="animate-pulse" />
                  <circle cx="100" cy="120" r="8" fill="#ff6b3d" className="animate-pulse" />
                  <circle cx="700" cy="120" r="8" fill="#ff6b3d" className="animate-pulse" />
                </svg>
                
                {/* Feature Icons */}
                <div className="absolute inset-0 flex items-center justify-around px-20">
                  <div className="w-12 h-12 bg-white/80 backdrop-blur-sm border-2 border-brand-red/30 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <div className="w-6 h-6 bg-brand-red/20 rounded"></div>
                  </div>
                  <div className="w-14 h-14 bg-white/90 backdrop-blur-sm border-2 border-brand-red/50 rounded-lg flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
                    <div className="w-8 h-8 bg-brand-red/30 rounded-full"></div>
                  </div>
                  <div className="w-12 h-12 bg-white/80 backdrop-blur-sm border-2 border-brand-red/30 rounded-lg flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <div className="w-6 h-6 bg-brand-red/20 rounded"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Section */}
            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Features Section</h2>
              <p className="text-gray-600">
                Hauptfunktionen und Capabilities.
              </p>
            </Card>

            {/* Bridge 4: Security-Trust-Bridge */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                14. Security-Trust-Bridge 🛡️
              </h3>
              <div className="relative h-32 overflow-hidden bg-gradient-to-r from-gray-50 via-blue-50/30 to-gray-50">
                {/* Shield Pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Central Shield */}
                    <div className="w-24 h-28 bg-gradient-to-b from-brand-red/20 to-brand-red/10 rounded-b-full border-2 border-brand-red/30 flex items-center justify-center">
                      <div className="w-16 h-20 bg-white/50 rounded-b-full border border-brand-red/20"></div>
                    </div>
                    
                    {/* Security Rings */}
                    <div className="absolute -inset-4 border-2 border-brand-red/10 rounded-full animate-ping"></div>
                    <div className="absolute -inset-8 border border-brand-red/5 rounded-full animate-pulse"></div>
                  </div>
                </div>
                
                {/* Trust Indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-8">
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>ISO 27001</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>SOC 2</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-gray-600">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>DSGVO</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Section */}
            <Card className="p-8 bg-gradient-to-r from-slate-50 to-blue-50 border border-blue-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Trust & Security Section</h2>
              <p className="text-gray-600">
                Sicherheit, Zertifizierungen und Vertrauen.
              </p>
            </Card>

            {/* Bridge 5: Action-Bridge mit Visualisierung */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                15. Action-Bridge mit Visualisierung 🚀
              </h3>
              <div className="relative h-40 overflow-hidden bg-gradient-to-b from-white via-brand-red/5 to-brand-red/10">
                {/* Animated Arrow Path */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="actionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                  
                  {/* Multiple Arrow Paths */}
                  <path d="M50,80 L650,80 L650,60 L750,90 L650,120 L650,100 L50,100" fill="url(#actionGradient)" opacity="0.3" className="animate-pulse" />
                  <path d="M100,80 L600,80" stroke="#e24e1b" strokeWidth="3" strokeDasharray="10,5" opacity="0.6">
                    <animate attributeName="stroke-dashoffset" values="0;15" dur="1s" repeatCount="indefinite" />
                  </path>
                </svg>
                
                {/* Action Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center space-x-8">
                    <div className="px-6 py-3 bg-white/90 backdrop-blur-sm border-2 border-brand-red/30 rounded-lg text-sm font-medium text-gray-700 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all duration-300 cursor-pointer">
                      Jetzt starten
                    </div>
                    <div className="w-12 h-12 bg-brand-red rounded-full flex items-center justify-center text-white animate-bounce">
                      →
                    </div>
                    <div className="px-6 py-3 bg-brand-red text-white rounded-lg text-sm font-medium shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer">
                      Demo anfordern
                    </div>
                  </div>
                </div>
                
                {/* Progress Visualization */}
                <div className="absolute bottom-4 left-0 right-0">
                  <div className="max-w-md mx-auto h-2 bg-white/50 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-red to-orange-500 rounded-full animate-pulse" style={{width: '70%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <Card className="p-8 bg-gradient-to-r from-brand-red/10 to-orange-500/10 border border-brand-red/30">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Call-to-Action Section</h2>
              <p className="text-gray-600">
                Finale Handlungsaufforderung mit Demo-Anfrage.
              </p>
            </Card>

            {/* Wave Variations Section */}
            <div className="mt-20 mb-16 text-center">
              <div className="inline-flex items-center space-x-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-red/30"></div>
                <Badge className="bg-orange-100 text-orange-800 border-orange-300 px-6 py-2">
                  Wellenform-Bridge Variationen
                </Badge>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-red/30"></div>
              </div>
            </div>

            {/* Test Section for Wave Variations */}
            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sektion für Wellen-Tests</h2>
              <p className="text-gray-600">
                Hier testen wir verschiedene Wellenform-Varianten mit der Akzentfarbe #e24e1b.
              </p>
            </Card>

            {/* Wave Variation 1: Sanfte Ozeanwelle */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                Variation 1: Sanfte Ozeanwelle 🌊
              </h3>
              <div className="relative h-32 overflow-visible">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="oceanGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  
                  {/* Smooth continuous wave */}
                  <path 
                    d="M-100,60 Q200,20 400,60 T800,60 T1200,60 T1600,60" 
                    stroke="#e24e1b" 
                    strokeWidth="3" 
                    fill="none" 
                    opacity="0.8" 
                    className="animate-pulse"
                  />
                  <path 
                    d="M-100,70 Q200,40 400,70 T800,70 T1200,70 T1600,70" 
                    stroke="#ff6b3d" 
                    strokeWidth="2" 
                    fill="none" 
                    opacity="0.6" 
                    className="animate-pulse" 
                    style={{animationDelay: '0.5s'}}
                  />
                  
                  {/* Filled wave area */}
                  <path 
                    d="M-100,80 Q200,50 400,80 T800,80 T1200,80 T1600,80 L1600,120 L-100,120 Z" 
                    fill="url(#oceanGradient1)" 
                    className="animate-pulse" 
                    style={{animationDelay: '1s'}}
                  />
                </svg>
                
                {/* Floating accent elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex space-x-16">
                    <div className="w-2 h-2 bg-brand-red rounded-full animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="w-3 h-3 bg-brand-red/80 rounded-full animate-bounce" style={{animationDelay: '0.3s'}}></div>
                    <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce" style={{animationDelay: '0.6s'}}></div>
                    <div className="w-3 h-3 bg-brand-red/80 rounded-full animate-bounce" style={{animationDelay: '0.9s'}}></div>
                    <div className="w-2 h-2 bg-brand-red rounded-full animate-bounce" style={{animationDelay: '1.2s'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-gray-50 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Zwischen-Sektion</h2>
              <p className="text-gray-600">Testbereich zwischen den Wellen-Varianten.</p>
            </Card>

            {/* Wave Variation 2: Dynamische Doppelwelle */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                Variation 2: Dynamische Doppelwelle 🌊
              </h3>
              <div className="relative h-36 overflow-visible">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 140" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="doubleWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  
                  {/* First wave layer */}
                  <path 
                    d="M-200,50 C100,10 300,90 600,50 C900,10 1100,90 1400,50" 
                    stroke="#e24e1b" 
                    strokeWidth="4" 
                    fill="none" 
                    opacity="0.7"
                  >
                    <animate attributeName="d" 
                      values="M-200,50 C100,10 300,90 600,50 C900,10 1100,90 1400,50;
                              M-200,50 C100,90 300,10 600,50 C900,90 1100,10 1400,50;
                              M-200,50 C100,10 300,90 600,50 C900,10 1100,90 1400,50"
                      dur="4s" 
                      repeatCount="indefinite" />
                  </path>
                  
                  {/* Second wave layer */}
                  <path 
                    d="M-200,90 C100,130 300,50 600,90 C900,130 1100,50 1400,90" 
                    stroke="#ff6b3d" 
                    strokeWidth="3" 
                    fill="none" 
                    opacity="0.5"
                  >
                    <animate attributeName="d" 
                      values="M-200,90 C100,130 300,50 600,90 C900,130 1100,50 1400,90;
                              M-200,90 C100,50 300,130 600,90 C900,50 1100,130 1400,90;
                              M-200,90 C100,130 300,50 600,90 C900,130 1100,50 1400,90"
                      dur="3s" 
                      repeatCount="indefinite" />
                  </path>
                  
                  {/* Gradient fill */}
                  <rect x="-200" y="0" width="1600" height="140" fill="url(#doubleWaveGrad)" opacity="0.3" />
                </svg>
                
                {/* Pulsing line accents */}
                <div className="absolute inset-0 flex items-center justify-evenly">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="h-16 w-px bg-gradient-to-b from-transparent via-brand-red/40 to-transparent animate-pulse" 
                         style={{animationDelay: `${i * 0.2}s`}}></div>
                  ))}
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Weitere Test-Sektion</h2>
              <p className="text-gray-600">Bereich für weitere Tests.</p>
            </Card>

            {/* Wave Variation 3: Energie-Puls-Welle */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                Variation 3: Energie-Puls-Welle ⚡
              </h3>
              <div className="relative h-32 overflow-visible bg-gradient-to-r from-gray-50/50 via-orange-50/30 to-gray-50/50">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="pulseGradient" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.1" />
                    </radialGradient>
                  </defs>
                  
                  {/* Energy wave with sharp peaks */}
                  <path 
                    d="M-100,60 L100,30 L200,60 L300,20 L400,60 L500,25 L600,60 L700,35 L800,60 L900,15 L1000,60 L1100,40 L1200,60 L1300,30" 
                    stroke="#e24e1b" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-pulse"
                  />
                  
                  {/* Secondary smooth wave */}
                  <path 
                    d="M-100,80 Q300,40 600,80 T1200,80 T1600,80" 
                    stroke="#ff6b3d" 
                    strokeWidth="2" 
                    fill="none" 
                    opacity="0.4" 
                    strokeDasharray="10,5"
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="15" dur="1s" repeatCount="indefinite" />
                  </path>
                  
                  {/* Energy nodes */}
                  <g>
                    <circle cx="200" cy="60" r="6" fill="#e24e1b" className="animate-ping" />
                    <circle cx="600" cy="60" r="6" fill="#e24e1b" className="animate-ping" style={{animationDelay: '0.5s'}} />
                    <circle cx="1000" cy="60" r="6" fill="#e24e1b" className="animate-ping" style={{animationDelay: '1s'}} />
                  </g>
                </svg>
                
                {/* Electric particles */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute w-1 h-1 bg-brand-red rounded-full animate-ping"
                      style={{
                        left: `${10 + i * 12}%`,
                        top: `${40 + Math.sin(i) * 20}%`,
                        animationDelay: `${i * 0.15}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-r from-blue-50/30 to-purple-50/30 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Farbige Test-Sektion</h2>
              <p className="text-gray-600">Sektion mit Farbverlauf.</p>
            </Card>

            {/* Wave Variation 4: Fließende Gradient-Welle */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                Variation 4: Fließende Gradient-Welle 🎨
              </h3>
              <div className="relative h-40 overflow-visible">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="flowGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.6">
                        <animate attributeName="stop-opacity" values="0.6;0.3;0.6" dur="3s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="50%" stopColor="#ff6b3d" stopOpacity="0.8">
                        <animate attributeName="stop-opacity" values="0.8;0.4;0.8" dur="3s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.6">
                        <animate attributeName="stop-opacity" values="0.6;0.3;0.6" dur="3s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                    
                    <linearGradient id="flowGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#ff6b3d" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>
                  
                  {/* Main flowing wave */}
                  <path 
                    d="M-200,80 Q0,40 200,80 T600,80 T1000,80 T1400,80" 
                    stroke="url(#flowGradient1)" 
                    strokeWidth="6" 
                    fill="none"
                  />
                  
                  {/* Secondary waves */}
                  <path 
                    d="M-200,60 Q0,30 200,60 T600,60 T1000,60 T1400,60" 
                    stroke="#e24e1b" 
                    strokeWidth="2" 
                    fill="none" 
                    opacity="0.3"
                  />
                  <path 
                    d="M-200,100 Q0,70 200,100 T600,100 T1000,100 T1400,100" 
                    stroke="#ff6b3d" 
                    strokeWidth="2" 
                    fill="none" 
                    opacity="0.3"
                  />
                  
                  {/* Gradient fill areas */}
                  <path 
                    d="M-200,120 Q0,80 200,120 T600,120 T1000,120 T1400,120 L1400,160 L-200,160 Z" 
                    fill="url(#flowGradient2)"
                  />
                </svg>
                
                {/* Flowing particles */}
                <div className="absolute inset-0 overflow-hidden">
                  <div className="absolute h-full w-full">
                    {[...Array(5)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute h-px bg-gradient-to-r from-transparent via-brand-red to-transparent"
                        style={{
                          width: '200px',
                          top: `${30 + i * 10}%`,
                          left: '-200px',
                          animation: `flowRight ${3 + i}s linear infinite`,
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
                
                <style jsx>{`
                  @keyframes flowRight {
                    from { transform: translateX(0); }
                    to { transform: translateX(1400px); }
                  }
                `}</style>
              </div>
            </div>

            <Card className="p-8 bg-white border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Premium Test-Sektion</h2>
              <p className="text-gray-600">Sektion mit Schatten-Effekt.</p>
            </Card>

            {/* Wave Variation 5: 3D Perspektiven-Welle */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center">
                Variation 5: 3D Perspektiven-Welle 🌊
              </h3>
              <div className="relative h-44 overflow-visible bg-gradient-to-b from-white via-orange-50/20 to-white">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 180" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="depthGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.05" />
                    </linearGradient>
                    
                    <filter id="blur">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="1" />
                    </filter>
                  </defs>
                  
                  {/* Background waves - far perspective */}
                  <path 
                    d="M-200,90 C100,85 300,95 600,90 C900,85 1100,95 1400,90" 
                    stroke="#e24e1b" 
                    strokeWidth="1" 
                    fill="none" 
                    opacity="0.2" 
                    filter="url(#blur)"
                  />
                  
                  {/* Middle waves */}
                  <path 
                    d="M-200,80 C100,60 300,100 600,80 C900,60 1100,100 1400,80" 
                    stroke="#e24e1b" 
                    strokeWidth="2" 
                    fill="none" 
                    opacity="0.4"
                  />
                  <path 
                    d="M-200,85 C100,70 300,100 600,85 C900,70 1100,100 1400,85" 
                    stroke="#ff6b3d" 
                    strokeWidth="2" 
                    fill="none" 
                    opacity="0.3"
                  />
                  
                  {/* Foreground wave - near perspective */}
                  <path 
                    d="M-200,70 C100,30 300,110 600,70 C900,30 1100,110 1400,70" 
                    stroke="#e24e1b" 
                    strokeWidth="4" 
                    fill="none" 
                    opacity="0.8"
                    className="animate-pulse"
                  />
                  
                  {/* 3D depth fill */}
                  <path 
                    d="M-200,120 C100,100 300,140 600,120 C900,100 1100,140 1400,120 L1400,180 L-200,180 Z" 
                    fill="url(#depthGradient)"
                  />
                  
                  {/* Perspective grid lines */}
                  <g opacity="0.1">
                    <line x1="0" y1="180" x2="600" y2="90" stroke="#e24e1b" strokeWidth="1" />
                    <line x1="200" y1="180" x2="600" y2="90" stroke="#e24e1b" strokeWidth="1" />
                    <line x1="400" y1="180" x2="600" y2="90" stroke="#e24e1b" strokeWidth="1" />
                    <line x1="800" y1="180" x2="600" y2="90" stroke="#e24e1b" strokeWidth="1" />
                    <line x1="1000" y1="180" x2="600" y2="90" stroke="#e24e1b" strokeWidth="1" />
                    <line x1="1200" y1="180" x2="600" y2="90" stroke="#e24e1b" strokeWidth="1" />
                  </g>
                </svg>
                
                {/* 3D floating elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-brand-red/60 rounded-full shadow-lg animate-bounce" style={{animationDelay: '0s'}}></div>
                    <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-brand-red/80 rounded-full shadow-xl animate-bounce" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-orange-500/70 rounded-full shadow-md animate-bounce" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 right-1/4 w-5 h-5 bg-brand-red/70 rounded-full shadow-lg animate-bounce" style={{animationDelay: '1.5s'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Abschluss-Sektion</h2>
              <p className="text-gray-600">Ende der Wellenform-Variationen.</p>
            </Card>

            {/* Double Wave Transitions Section */}
            <div className="mt-20 mb-16 text-center">
              <div className="inline-flex items-center space-x-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-red/30"></div>
                <Badge className="bg-red-100 text-red-800 border-red-300 px-6 py-2">
                  Symmetrische Doppelwellen-Übergänge
                </Badge>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-red/30"></div>
              </div>
            </div>

            {/* Section for Double Wave Tests */}
            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Startsektion</h2>
              <p className="text-gray-600">
                Hier beginnen die symmetrischen Doppelwellen-Übergänge.
              </p>
            </Card>

            {/* Double Wave 1: Sanfte Umarmung */}
            <div className="relative">
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center relative z-10">
                Design 1: Sanfte Umarmung 🤗
              </h3>
              <div className="relative h-48 -my-8">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="embraceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="20%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.1" />
                      <stop offset="80%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  
                  {/* Top wave */}
                  <path 
                    d="M0,50 Q300,80 600,50 T1200,50 L1200,0 L0,0 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M0,50 Q300,80 600,50 T1200,50" 
                    stroke="#e24e1b" 
                    strokeWidth="3" 
                    fill="none"
                    className="animate-pulse"
                  />
                  
                  {/* Bottom wave */}
                  <path 
                    d="M0,150 Q300,120 600,150 T1200,150 L1200,200 L0,200 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M0,150 Q300,120 600,150 T1200,150" 
                    stroke="#e24e1b" 
                    strokeWidth="3" 
                    fill="none"
                    className="animate-pulse"
                  />
                  
                  {/* Center gradient area */}
                  <rect x="0" y="50" width="1200" height="100" fill="url(#embraceGrad)" />
                  
                  {/* Floating accents */}
                  <circle cx="300" cy="100" r="4" fill="#e24e1b" opacity="0.6" className="animate-ping" />
                  <circle cx="600" cy="100" r="5" fill="#e24e1b" opacity="0.8" className="animate-ping" style={{animationDelay: '0.5s'}} />
                  <circle cx="900" cy="100" r="4" fill="#e24e1b" opacity="0.6" className="animate-ping" style={{animationDelay: '1s'}} />
                </svg>
              </div>
            </div>

            <Card className="p-8 bg-gray-50 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Zwischen-Sektion A</h2>
              <p className="text-gray-600">Die Wellen umschließen diesen Bereich elegant.</p>
            </Card>

            {/* Double Wave 2: Dynamischer Fluss */}
            <div className="relative">
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center relative z-10">
                Design 2: Dynamischer Fluss 🌊
              </h3>
              <div className="relative h-56 -my-12">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 220" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.05" />
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  
                  {/* Animated top wave */}
                  <path 
                    d="M0,40 C200,60 400,20 600,40 C800,60 1000,20 1200,40 L1200,0 L0,0 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M0,40 C200,60 400,20 600,40 C800,60 1000,20 1200,40" 
                    stroke="#e24e1b" 
                    strokeWidth="4" 
                    fill="none"
                  >
                    <animate attributeName="d" 
                      values="M0,40 C200,60 400,20 600,40 C800,60 1000,20 1200,40;
                              M0,40 C200,20 400,60 600,40 C800,20 1000,60 1200,40;
                              M0,40 C200,60 400,20 600,40 C800,60 1000,20 1200,40"
                      dur="6s" 
                      repeatCount="indefinite" />
                  </path>
                  
                  {/* Animated bottom wave */}
                  <path 
                    d="M0,180 C200,160 400,200 600,180 C800,160 1000,200 1200,180 L1200,220 L0,220 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M0,180 C200,160 400,200 600,180 C800,160 1000,200 1200,180" 
                    stroke="#e24e1b" 
                    strokeWidth="4" 
                    fill="none"
                  >
                    <animate attributeName="d" 
                      values="M0,180 C200,160 400,200 600,180 C800,160 1000,200 1200,180;
                              M0,180 C200,200 400,160 600,180 C800,200 1000,160 1200,180;
                              M0,180 C200,160 400,200 600,180 C800,160 1000,200 1200,180"
                      dur="6s" 
                      repeatCount="indefinite" />
                  </path>
                  
                  {/* Center flow area */}
                  <rect x="0" y="40" width="1200" height="140" fill="url(#flowGrad)" />
                  
                  {/* Flow lines */}
                  <path 
                    d="M-100,110 L1300,110" 
                    stroke="#e24e1b" 
                    strokeWidth="1" 
                    opacity="0.3"
                    strokeDasharray="20,10"
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="30" dur="2s" repeatCount="indefinite" />
                  </path>
                </svg>
                
                {/* Floating particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-brand-red/40 rounded-full"
                      style={{
                        top: '50%',
                        left: '-10px',
                        animation: `flowAcross ${4 + i}s linear infinite`,
                        animationDelay: `${i * 0.8}s`
                      }}
                    />
                  ))}
                </div>
                
                <style jsx>{`
                  @keyframes flowAcross {
                    from { transform: translateX(0) translateY(-20px); }
                    to { transform: translateX(1220px) translateY(20px); }
                  }
                `}</style>
              </div>
            </div>

            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Zwischen-Sektion B</h2>
              <p className="text-gray-600">Dynamischer Übergang mit fließender Bewegung.</p>
            </Card>

            {/* Double Wave 3: Energie-Burst */}
            <div className="relative">
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center relative z-10">
                Design 3: Energie-Burst ⚡
              </h3>
              <div className="relative h-52 -my-10">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 210" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="burstGrad" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#ff6b3d" stopOpacity="0.1" />
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  
                  {/* Top energy wave */}
                  <path 
                    d="M0,30 L150,50 L300,20 L450,55 L600,25 L750,50 L900,30 L1050,60 L1200,35 L1200,0 L0,0 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M0,30 L150,50 L300,20 L450,55 L600,25 L750,50 L900,30 L1050,60 L1200,35" 
                    stroke="#e24e1b" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                    className="animate-pulse"
                  />
                  
                  {/* Bottom energy wave */}
                  <path 
                    d="M0,180 L150,160 L300,190 L450,155 L600,185 L750,160 L900,180 L1050,150 L1200,175 L1200,210 L0,210 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M0,180 L150,160 L300,190 L450,155 L600,185 L750,160 L900,180 L1050,150 L1200,175" 
                    stroke="#e24e1b" 
                    strokeWidth="3" 
                    fill="none"
                    strokeLinecap="round"
                    className="animate-pulse"
                  />
                  
                  {/* Energy burst center */}
                  <ellipse cx="600" cy="105" rx="400" ry="80" fill="url(#burstGrad)" />
                  
                  {/* Energy bolts */}
                  <g className="animate-pulse">
                    <line x1="300" y1="105" x2="350" y2="105" stroke="#e24e1b" strokeWidth="2" opacity="0.8" />
                    <line x1="850" y1="105" x2="900" y2="105" stroke="#e24e1b" strokeWidth="2" opacity="0.8" />
                    <line x1="600" y1="70" x2="600" y2="90" stroke="#ff6b3d" strokeWidth="2" opacity="0.6" />
                    <line x1="600" y1="120" x2="600" y2="140" stroke="#ff6b3d" strokeWidth="2" opacity="0.6" />
                  </g>
                  
                  {/* Energy nodes */}
                  <circle cx="150" cy="50" r="4" fill="#e24e1b" className="animate-ping" />
                  <circle cx="450" cy="55" r="5" fill="#e24e1b" className="animate-ping" style={{animationDelay: '0.3s'}} />
                  <circle cx="750" cy="50" r="4" fill="#e24e1b" className="animate-ping" style={{animationDelay: '0.6s'}} />
                  <circle cx="1050" cy="60" r="5" fill="#e24e1b" className="animate-ping" style={{animationDelay: '0.9s'}} />
                </svg>
                
                {/* Electric sparks */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 bg-brand-red rounded-full animate-ping"></div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-r from-orange-50/30 to-red-50/30 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Zwischen-Sektion C</h2>
              <p className="text-gray-600">Energiegeladener Übergangsbereich.</p>
            </Card>

            {/* Double Wave 4: Organischer Flow */}
            <div className="relative">
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center relative z-10">
                Design 4: Organischer Flow 🍃
              </h3>
              <div className="relative h-60 -my-16">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 240" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="organicGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.1" />
                      <stop offset="50%" stopColor="#ff6b3d" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.1" />
                    </linearGradient>
                    <filter id="organicBlur">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
                    </filter>
                  </defs>
                  
                  {/* Organic top curves */}
                  <path 
                    d="M0,60 Q150,40 300,55 T600,50 Q750,35 900,60 T1200,55 L1200,0 L0,0 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M0,60 Q150,40 300,55 T600,50 Q750,35 900,60 T1200,55" 
                    stroke="#e24e1b" 
                    strokeWidth="3" 
                    fill="none"
                    opacity="0.8"
                  />
                  <path 
                    d="M0,40 Q200,25 400,35 T800,30 T1200,40" 
                    stroke="#ff6b3d" 
                    strokeWidth="2" 
                    fill="none"
                    opacity="0.4"
                    filter="url(#organicBlur)"
                  />
                  
                  {/* Organic bottom curves */}
                  <path 
                    d="M0,180 Q150,200 300,185 T600,190 Q750,205 900,180 T1200,185 L1200,240 L0,240 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M0,180 Q150,200 300,185 T600,190 Q750,205 900,180 T1200,185" 
                    stroke="#e24e1b" 
                    strokeWidth="3" 
                    fill="none"
                    opacity="0.8"
                  />
                  <path 
                    d="M0,200 Q200,215 400,205 T800,210 T1200,200" 
                    stroke="#ff6b3d" 
                    strokeWidth="2" 
                    fill="none"
                    opacity="0.4"
                    filter="url(#organicBlur)"
                  />
                  
                  {/* Organic center fill */}
                  <path 
                    d="M0,60 Q300,90 600,120 T1200,90 L1200,150 Q900,120 600,90 T0,120 Z" 
                    fill="url(#organicGrad1)"
                    opacity="0.5"
                  />
                  
                  {/* Organic elements */}
                  <circle cx="300" cy="90" r="20" fill="#e24e1b" opacity="0.1" filter="url(#organicBlur)" />
                  <circle cx="600" cy="120" r="30" fill="#ff6b3d" opacity="0.1" filter="url(#organicBlur)" />
                  <circle cx="900" cy="100" r="25" fill="#e24e1b" opacity="0.1" filter="url(#organicBlur)" />
                </svg>
                
                {/* Floating organic particles */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full bg-brand-red/20"
                      style={{
                        width: `${10 + i * 2}px`,
                        height: `${10 + i * 2}px`,
                        top: `${30 + Math.sin(i) * 20}%`,
                        left: `${10 + i * 11}%`,
                        animation: `floatOrganic ${5 + i}s ease-in-out infinite`,
                        animationDelay: `${i * 0.3}s`
                      }}
                    />
                  ))}
                </div>
                
                <style jsx>{`
                  @keyframes floatOrganic {
                    0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
                    50% { transform: translateY(-20px) scale(1.1); opacity: 0.4; }
                  }
                `}</style>
              </div>
            </div>

            <Card className="p-8 bg-white border border-gray-200 shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Zwischen-Sektion D</h2>
              <p className="text-gray-600">Organische Formen schaffen natürliche Übergänge.</p>
            </Card>

            {/* Double Wave 5: Premium Gradient */}
            <div className="relative">
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center relative z-10">
                Design 5: Premium Gradient 💎
              </h3>
              <div className="relative h-64 -my-16">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 260" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="premiumGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0">
                        <animate attributeName="stop-opacity" values="0;0.3;0" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="25%" stopColor="#ff6b3d" stopOpacity="0.2">
                        <animate attributeName="stop-opacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.3">
                        <animate attributeName="stop-opacity" values="0.3;0.5;0.3" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="75%" stopColor="#ff6b3d" stopOpacity="0.2">
                        <animate attributeName="stop-opacity" values="0.2;0.4;0.2" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0">
                        <animate attributeName="stop-opacity" values="0;0.3;0" dur="4s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                    
                    <linearGradient id="premiumGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                      <stop offset="30%" stopColor="#ffffff" stopOpacity="0.8" />
                      <stop offset="70%" stopColor="#ffffff" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
                    </linearGradient>
                  </defs>
                  
                  {/* Premium top wave */}
                  <path 
                    d="M-100,70 C200,50 400,65 600,55 C800,45 1000,60 1300,65 L1300,0 L-100,0 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-100,70 C200,50 400,65 600,55 C800,45 1000,60 1300,65" 
                    stroke="url(#premiumGrad1)" 
                    strokeWidth="6" 
                    fill="none"
                  />
                  <path 
                    d="M-100,50 C300,35 600,45 900,30 T1300,45" 
                    stroke="#e24e1b" 
                    strokeWidth="1" 
                    fill="none"
                    opacity="0.3"
                  />
                  
                  {/* Premium bottom wave */}
                  <path 
                    d="M-100,190 C200,210 400,195 600,205 C800,215 1000,200 1300,195 L1300,260 L-100,260 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-100,190 C200,210 400,195 600,205 C800,215 1000,200 1300,195" 
                    stroke="url(#premiumGrad1)" 
                    strokeWidth="6" 
                    fill="none"
                  />
                  <path 
                    d="M-100,210 C300,225 600,215 900,230 T1300,215" 
                    stroke="#e24e1b" 
                    strokeWidth="1" 
                    fill="none"
                    opacity="0.3"
                  />
                  
                  {/* Premium center area */}
                  <rect x="0" y="70" width="1200" height="120" fill="url(#premiumGrad1)" />
                  <rect x="0" y="70" width="1200" height="120" fill="url(#premiumGrad2)" />
                  
                  {/* Premium shine effect */}
                  <ellipse cx="600" cy="130" rx="300" ry="40" fill="#e24e1b" opacity="0.1" className="animate-pulse" />
                  
                  {/* Luxury dots */}
                  <g>
                    <circle cx="200" cy="130" r="2" fill="#e24e1b" opacity="0.6" />
                    <circle cx="400" cy="130" r="3" fill="#e24e1b" opacity="0.8" />
                    <circle cx="600" cy="130" r="4" fill="#e24e1b" opacity="1" />
                    <circle cx="800" cy="130" r="3" fill="#e24e1b" opacity="0.8" />
                    <circle cx="1000" cy="130" r="2" fill="#e24e1b" opacity="0.6" />
                  </g>
                </svg>
                
                {/* Premium particles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex space-x-8">
                    <div className="w-1 h-12 bg-gradient-to-b from-transparent via-brand-red/40 to-transparent animate-pulse"></div>
                    <div className="w-1 h-16 bg-gradient-to-b from-transparent via-brand-red/60 to-transparent animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="w-1 h-12 bg-gradient-to-b from-transparent via-brand-red/40 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Abschluss-Sektion</h2>
              <p className="text-gray-600">Premium-Übergang für gehobene Designansprüche.</p>
            </Card>

            {/* Flowing Gradient Double Waves Section */}
            <div className="mt-20 mb-16 text-center">
              <div className="inline-flex items-center space-x-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-brand-red/30"></div>
                <Badge className="bg-gradient-to-r from-brand-red/20 to-orange-500/20 text-brand-red border-brand-red/30 px-6 py-2">
                  Fließende Gradient-Doppelwellen
                </Badge>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-brand-red/30"></div>
              </div>
            </div>

            {/* Start Section */}
            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Anfangssektion</h2>
              <p className="text-gray-600">
                Fließende Gradient-Wellen mit pulsierenden Akzenten.
              </p>
            </Card>

            {/* Flowing Gradient 1: Aurora Flow */}
            <div className="relative">
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center relative z-10">
                Fließender Übergang 1: Aurora Flow 🌌
              </h3>
              <div className="relative h-56 -my-14">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 220" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="auroraGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.2">
                        <animate attributeName="stop-opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="33%" stopColor="#ff6b3d" stopOpacity="0.3">
                        <animate attributeName="stop-opacity" values="0.3;0.5;0.3" dur="3s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="66%" stopColor="#e24e1b" stopOpacity="0.4">
                        <animate attributeName="stop-opacity" values="0.4;0.6;0.4" dur="3s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#ff6b3d" stopOpacity="0.2">
                        <animate attributeName="stop-opacity" values="0.2;0.4;0.2" dur="3s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                  </defs>
                  
                  {/* Top flowing wave */}
                  <path 
                    d="M-100,60 Q100,30 300,60 T700,60 T1100,60 T1500,60 L1500,0 L-100,0 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-100,60 Q100,30 300,60 T700,60 T1100,60 T1500,60" 
                    stroke="url(#auroraGrad1)" 
                    strokeWidth="4" 
                    fill="none"
                    className="animate-pulse"
                  />
                  <path 
                    d="M-100,45 Q100,20 300,45 T700,45 T1100,45 T1500,45" 
                    stroke="#e24e1b" 
                    strokeWidth="2" 
                    fill="none"
                    opacity="0.3"
                    className="animate-pulse"
                    style={{animationDelay: '0.5s'}}
                  />
                  
                  {/* Bottom flowing wave */}
                  <path 
                    d="M-100,160 Q100,190 300,160 T700,160 T1100,160 T1500,160 L1500,220 L-100,220 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-100,160 Q100,190 300,160 T700,160 T1100,160 T1500,160" 
                    stroke="url(#auroraGrad1)" 
                    strokeWidth="4" 
                    fill="none"
                    className="animate-pulse"
                  />
                  <path 
                    d="M-100,175 Q100,200 300,175 T700,175 T1100,175 T1500,175" 
                    stroke="#ff6b3d" 
                    strokeWidth="2" 
                    fill="none"
                    opacity="0.3"
                    className="animate-pulse"
                    style={{animationDelay: '1s'}}
                  />
                  
                  {/* Center gradient flow */}
                  <rect x="0" y="60" width="1200" height="100" fill="url(#auroraGrad1)" opacity="0.3" />
                  
                  {/* Pulsing dots along waves */}
                  <g>
                    <circle cx="100" cy="60" r="3" fill="#e24e1b" className="animate-ping" />
                    <circle cx="300" cy="60" r="4" fill="#e24e1b" className="animate-ping" style={{animationDelay: '0.3s'}} />
                    <circle cx="500" cy="60" r="3" fill="#ff6b3d" className="animate-ping" style={{animationDelay: '0.6s'}} />
                    <circle cx="700" cy="60" r="4" fill="#e24e1b" className="animate-ping" style={{animationDelay: '0.9s'}} />
                    <circle cx="900" cy="60" r="3" fill="#ff6b3d" className="animate-ping" style={{animationDelay: '1.2s'}} />
                    <circle cx="1100" cy="60" r="4" fill="#e24e1b" className="animate-ping" style={{animationDelay: '1.5s'}} />
                  </g>
                </svg>
                
                {/* Flowing gradient lines */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(4)].map((_, i) => (
                    <div 
                      key={i}
                      className="absolute h-px bg-gradient-to-r from-transparent via-brand-red/60 to-transparent"
                      style={{
                        width: '300px',
                        top: `${35 + i * 15}%`,
                        left: '-300px',
                        animation: `flowRightSlow ${6 + i}s linear infinite`,
                        animationDelay: `${i * 1.5}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <Card className="p-8 bg-gray-50 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sektion A</h2>
              <p className="text-gray-600">Aurora-artiger Übergang mit fließenden Gradienten.</p>
            </Card>

            {/* Flowing Gradient 2: Liquid Metal */}
            <div className="relative">
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center relative z-10">
                Fließender Übergang 2: Liquid Metal 🔥
              </h3>
              <div className="relative h-60 -my-16">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 240" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="liquidGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b">
                        <animate attributeName="offset" values="0;0.2;0" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="50%" stopColor="#ff6b3d">
                        <animate attributeName="offset" values="0.5;0.7;0.5" dur="4s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#e24e1b">
                        <animate attributeName="offset" values="1;0.8;1" dur="4s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                  </defs>
                  
                  {/* Top liquid wave */}
                  <path 
                    d="M-100,50 C100,30 300,70 500,50 C700,30 900,70 1100,50 C1300,30 1500,50 L1500,0 L-100,0 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-100,50 C100,30 300,70 500,50 C700,30 900,70 1100,50 C1300,30 1500,50" 
                    stroke="url(#liquidGrad)" 
                    strokeWidth="6" 
                    fill="none"
                    opacity="0.8"
                  >
                    <animate attributeName="d" 
                      values="M-100,50 C100,30 300,70 500,50 C700,30 900,70 1100,50 C1300,30 1500,50;
                              M-100,50 C100,70 300,30 500,50 C700,70 900,30 1100,50 C1300,70 1500,50;
                              M-100,50 C100,30 300,70 500,50 C700,30 900,70 1100,50 C1300,30 1500,50"
                      dur="5s" 
                      repeatCount="indefinite" />
                  </path>
                  
                  {/* Bottom liquid wave */}
                  <path 
                    d="M-100,190 C100,210 300,170 500,190 C700,210 900,170 1100,190 C1300,210 1500,190 L1500,240 L-100,240 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-100,190 C100,210 300,170 500,190 C700,210 900,170 1100,190 C1300,210 1500,190" 
                    stroke="url(#liquidGrad)" 
                    strokeWidth="6" 
                    fill="none"
                    opacity="0.8"
                  >
                    <animate attributeName="d" 
                      values="M-100,190 C100,210 300,170 500,190 C700,210 900,170 1100,190 C1300,210 1500,190;
                              M-100,190 C100,170 300,210 500,190 C700,170 900,210 1100,190 C1300,170 1500,190;
                              M-100,190 C100,210 300,170 500,190 C700,210 900,170 1100,190 C1300,210 1500,190"
                      dur="5s" 
                      repeatCount="indefinite" />
                  </path>
                  
                  {/* Center liquid gradient */}
                  <rect x="0" y="50" width="1200" height="140" fill="url(#liquidGrad)" opacity="0.2" />
                  
                  {/* Liquid drops */}
                  <g>
                    <ellipse cx="200" cy="120" rx="15" ry="20" fill="#e24e1b" opacity="0.3" className="animate-pulse" />
                    <ellipse cx="600" cy="120" rx="20" ry="25" fill="#ff6b3d" opacity="0.4" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                    <ellipse cx="1000" cy="120" rx="15" ry="20" fill="#e24e1b" opacity="0.3" className="animate-pulse" style={{animationDelay: '1s'}} />
                  </g>
                </svg>
                
                {/* Metallic shine effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full relative">
                    <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-y-1/2 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sektion B</h2>
              <p className="text-gray-600">Liquid Metal Effekt mit morphenden Wellen.</p>
            </Card>

            {/* Flowing Gradient 3: Pulse Wave */}
            <div className="relative">
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center relative z-10">
                Fließender Übergang 3: Pulse Wave 💗
              </h3>
              <div className="relative h-52 -my-12">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 210" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="pulseRadial" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.6">
                        <animate attributeName="stop-opacity" values="0.6;0.9;0.6" dur="2s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0">
                        <animate attributeName="stop-opacity" values="0;0.3;0" dur="2s" repeatCount="indefinite" />
                      </stop>
                    </radialGradient>
                  </defs>
                  
                  {/* Multiple top wave layers */}
                  <path 
                    d="M-100,55 Q200,25 400,55 T800,55 T1200,55 T1600,55 L1600,0 L-100,0 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-100,55 Q200,25 400,55 T800,55 T1200,55 T1600,55" 
                    stroke="#e24e1b" 
                    strokeWidth="3" 
                    fill="none"
                    className="animate-pulse"
                  />
                  <path 
                    d="M-100,40 Q200,15 400,40 T800,40 T1200,40 T1600,40" 
                    stroke="#ff6b3d" 
                    strokeWidth="2" 
                    fill="none"
                    opacity="0.5"
                    className="animate-pulse"
                    style={{animationDelay: '0.3s'}}
                  />
                  <path 
                    d="M-100,65 Q200,40 400,65 T800,65 T1200,65 T1600,65" 
                    stroke="#e24e1b" 
                    strokeWidth="1" 
                    fill="none"
                    opacity="0.3"
                    className="animate-pulse"
                    style={{animationDelay: '0.6s'}}
                  />
                  
                  {/* Multiple bottom wave layers */}
                  <path 
                    d="M-100,155 Q200,185 400,155 T800,155 T1200,155 T1600,155 L1600,210 L-100,210 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-100,155 Q200,185 400,155 T800,155 T1200,155 T1600,155" 
                    stroke="#e24e1b" 
                    strokeWidth="3" 
                    fill="none"
                    className="animate-pulse"
                  />
                  <path 
                    d="M-100,170 Q200,195 400,170 T800,170 T1200,170 T1600,170" 
                    stroke="#ff6b3d" 
                    strokeWidth="2" 
                    fill="none"
                    opacity="0.5"
                    className="animate-pulse"
                    style={{animationDelay: '0.3s'}}
                  />
                  <path 
                    d="M-100,145 Q200,170 400,145 T800,145 T1200,145 T1600,145" 
                    stroke="#e24e1b" 
                    strokeWidth="1" 
                    fill="none"
                    opacity="0.3"
                    className="animate-pulse"
                    style={{animationDelay: '0.6s'}}
                  />
                  
                  {/* Center pulse effect */}
                  <ellipse cx="600" cy="105" rx="600" ry="50" fill="url(#pulseRadial)" />
                  
                  {/* Pulse circles */}
                  <circle cx="300" cy="105" r="30" fill="none" stroke="#e24e1b" strokeWidth="1" opacity="0.5" className="animate-ping" />
                  <circle cx="600" cy="105" r="40" fill="none" stroke="#e24e1b" strokeWidth="2" opacity="0.6" className="animate-ping" style={{animationDelay: '0.5s'}} />
                  <circle cx="900" cy="105" r="30" fill="none" stroke="#e24e1b" strokeWidth="1" opacity="0.5" className="animate-ping" style={{animationDelay: '1s'}} />
                </svg>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-r from-red-50/20 to-orange-50/20 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sektion C</h2>
              <p className="text-gray-600">Pulsierende Wellen mit Tiefeneffekt.</p>
            </Card>

            {/* Flowing Gradient 4: Silk Waves */}
            <div className="relative">
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center relative z-10">
                Fließender Übergang 4: Silk Waves 🎭
              </h3>
              <div className="relative h-64 -my-18">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 260" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="silkGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.1" />
                      <stop offset="25%" stopColor="#ff6b3d" stopOpacity="0.3" />
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.4" />
                      <stop offset="75%" stopColor="#ff6b3d" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.1" />
                    </linearGradient>
                    
                    <filter id="silkBlur">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
                    </filter>
                  </defs>
                  
                  {/* Silk top waves */}
                  <path 
                    d="M-100,70 S100,50 300,65 S500,45 700,60 S900,40 1100,55 S1300,35 1500,70 L1500,0 L-100,0 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-100,70 S100,50 300,65 S500,45 700,60 S900,40 1100,55 S1300,35 1500,70" 
                    stroke="url(#silkGrad1)" 
                    strokeWidth="8" 
                    fill="none"
                    filter="url(#silkBlur)"
                  />
                  <path 
                    d="M-100,55 S100,40 300,50 S500,35 700,45 S900,30 1100,40 S1300,25 1500,55" 
                    stroke="#e24e1b" 
                    strokeWidth="2" 
                    fill="none"
                    opacity="0.4"
                  />
                  
                  {/* Silk bottom waves */}
                  <path 
                    d="M-100,190 S100,210 300,195 S500,215 700,200 S900,220 1100,205 S1300,225 1500,190 L1500,260 L-100,260 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-100,190 S100,210 300,195 S500,215 700,200 S900,220 1100,205 S1300,225 1500,190" 
                    stroke="url(#silkGrad1)" 
                    strokeWidth="8" 
                    fill="none"
                    filter="url(#silkBlur)"
                  />
                  <path 
                    d="M-100,205 S100,220 300,210 S500,225 700,215 S900,230 1100,220 S1300,235 1500,205" 
                    stroke="#ff6b3d" 
                    strokeWidth="2" 
                    fill="none"
                    opacity="0.4"
                  />
                  
                  {/* Silk center gradient */}
                  <rect x="0" y="70" width="1200" height="120" fill="url(#silkGrad1)" />
                  
                  {/* Silk shimmer lines */}
                  <g opacity="0.3">
                    <line x1="0" y1="100" x2="1200" y2="120" stroke="#e24e1b" strokeWidth="1" className="animate-pulse" />
                    <line x1="0" y1="130" x2="1200" y2="110" stroke="#ff6b3d" strokeWidth="1" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                    <line x1="0" y1="160" x2="1200" y2="140" stroke="#e24e1b" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1s'}} />
                  </g>
                </svg>
                
                {/* Silk particles */}
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-3 h-3 bg-brand-red/30 rounded-full blur-sm"
                      style={{
                        top: `${40 + Math.random() * 20}%`,
                        left: `${10 + i * 15}%`,
                        animation: `floatSilk ${4 + i}s ease-in-out infinite`,
                        animationDelay: `${i * 0.5}s`
                      }}
                    />
                  ))}
                </div>
                
                <style jsx>{`
                  @keyframes floatSilk {
                    0%, 100% { transform: translateY(0) translateX(0); }
                    25% { transform: translateY(-15px) translateX(10px); }
                    50% { transform: translateY(0) translateX(20px); }
                    75% { transform: translateY(15px) translateX(10px); }
                  }
                `}</style>
              </div>
            </div>

            <Card className="p-8 bg-white border border-gray-200 shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sektion D</h2>
              <p className="text-gray-600">Seidige Wellenübergänge mit Schimmer-Effekt.</p>
            </Card>

            {/* Flowing Gradient 5: Neon Pulse */}
            <div className="relative">
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center relative z-10">
                Fließender Übergang 5: Neon Pulse ⚡
              </h3>
              <div className="relative h-56 -my-14">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 220" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="neonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.8" />
                      <stop offset="50%" stopColor="#ff6b3d" stopOpacity="1" />
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.8" />
                    </linearGradient>
                    
                    <filter id="neonGlow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Neon top wave */}
                  <path 
                    d="M-100,60 Q150,35 350,60 T750,60 T1150,60 T1550,60 L1550,0 L-100,0 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-100,60 Q150,35 350,60 T750,60 T1150,60 T1550,60" 
                    stroke="url(#neonGrad)" 
                    strokeWidth="3" 
                    fill="none"
                    filter="url(#neonGlow)"
                    className="animate-pulse"
                  />
                  <path 
                    d="M-100,60 Q150,35 350,60 T750,60 T1150,60 T1550,60" 
                    stroke="#e24e1b" 
                    strokeWidth="1" 
                    fill="none"
                  />
                  
                  {/* Neon bottom wave */}
                  <path 
                    d="M-100,160 Q150,185 350,160 T750,160 T1150,160 T1550,160 L1550,220 L-100,220 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-100,160 Q150,185 350,160 T750,160 T1150,160 T1550,160" 
                    stroke="url(#neonGrad)" 
                    strokeWidth="3" 
                    fill="none"
                    filter="url(#neonGlow)"
                    className="animate-pulse"
                  />
                  <path 
                    d="M-100,160 Q150,185 350,160 T750,160 T1150,160 T1550,160" 
                    stroke="#e24e1b" 
                    strokeWidth="1" 
                    fill="none"
                  />
                  
                  {/* Neon center glow */}
                  <rect x="0" y="60" width="1200" height="100" fill="url(#neonGrad)" opacity="0.1" />
                  
                  {/* Neon pulse lines */}
                  <g filter="url(#neonGlow)">
                    <line x1="-100" y1="110" x2="1300" y2="110" stroke="#e24e1b" strokeWidth="1" opacity="0.6" strokeDasharray="50,50">
                      <animate attributeName="stroke-dashoffset" from="0" to="100" dur="3s" repeatCount="indefinite" />
                    </line>
                  </g>
                </svg>
                
                {/* Neon particles */}
                <div className="absolute inset-0 flex items-center justify-evenly">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-2 h-2 bg-brand-red rounded-full shadow-glow animate-pulse"
                      style={{
                        boxShadow: '0 0 10px #e24e1b, 0 0 20px #e24e1b',
                        animationDelay: `${i * 0.2}s`
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-r from-gray-900/5 to-gray-800/5 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sektion E</h2>
              <p className="text-gray-600">Neon-Glow Effekt mit pulsierenden Wellen.</p>
            </Card>

            {/* Flowing Gradient 6: Ocean Breeze */}
            <div className="relative">
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center relative z-10">
                Fließender Übergang 6: Ocean Breeze 🌊
              </h3>
              <div className="relative h-60 -my-16">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 240" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="oceanBreezeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.3">
                        <animate attributeName="offset" values="0;0.1;0" dur="5s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="20%" stopColor="#ff6b3d" stopOpacity="0.4">
                        <animate attributeName="offset" values="0.2;0.3;0.2" dur="5s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="40%" stopColor="#e24e1b" stopOpacity="0.5">
                        <animate attributeName="offset" values="0.4;0.5;0.4" dur="5s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="60%" stopColor="#ff6b3d" stopOpacity="0.5">
                        <animate attributeName="offset" values="0.6;0.7;0.6" dur="5s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="80%" stopColor="#e24e1b" stopOpacity="0.4">
                        <animate attributeName="offset" values="0.8;0.9;0.8" dur="5s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#ff6b3d" stopOpacity="0.3">
                        <animate attributeName="offset" values="1;0.9;1" dur="5s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                  </defs>
                  
                  {/* Multiple ocean wave layers - top */}
                  <path 
                    d="M-200,65 Q0,45 200,65 T600,65 T1000,65 T1400,65 L1400,0 L-200,0 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-200,65 Q0,45 200,65 T600,65 T1000,65 T1400,65" 
                    stroke="url(#oceanBreezeGrad)" 
                    strokeWidth="5" 
                    fill="none"
                  />
                  <path 
                    d="M-200,50 Q0,35 200,50 T600,50 T1000,50 T1400,50" 
                    stroke="#e24e1b" 
                    strokeWidth="2" 
                    fill="none"
                    opacity="0.3"
                    className="animate-pulse"
                  />
                  <path 
                    d="M-200,75 Q0,60 200,75 T600,75 T1000,75 T1400,75" 
                    stroke="#ff6b3d" 
                    strokeWidth="1" 
                    fill="none"
                    opacity="0.2"
                    className="animate-pulse"
                    style={{animationDelay: '0.5s'}}
                  />
                  
                  {/* Multiple ocean wave layers - bottom */}
                  <path 
                    d="M-200,175 Q0,195 200,175 T600,175 T1000,175 T1400,175 L1400,240 L-200,240 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-200,175 Q0,195 200,175 T600,175 T1000,175 T1400,175" 
                    stroke="url(#oceanBreezeGrad)" 
                    strokeWidth="5" 
                    fill="none"
                  />
                  <path 
                    d="M-200,190 Q0,205 200,190 T600,190 T1000,190 T1400,190" 
                    stroke="#e24e1b" 
                    strokeWidth="2" 
                    fill="none"
                    opacity="0.3"
                    className="animate-pulse"
                  />
                  <path 
                    d="M-200,165 Q0,180 200,165 T600,165 T1000,165 T1400,165" 
                    stroke="#ff6b3d" 
                    strokeWidth="1" 
                    fill="none"
                    opacity="0.2"
                    className="animate-pulse"
                    style={{animationDelay: '0.5s'}}
                  />
                  
                  {/* Ocean breeze gradient fill */}
                  <rect x="0" y="65" width="1200" height="110" fill="url(#oceanBreezeGrad)" opacity="0.4" />
                  
                  {/* Floating bubbles */}
                  <g>
                    <circle cx="150" cy="120" r="6" fill="#e24e1b" opacity="0.2" className="animate-bounce" style={{animationDuration: '3s'}} />
                    <circle cx="350" cy="100" r="4" fill="#ff6b3d" opacity="0.3" className="animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}} />
                    <circle cx="550" cy="130" r="5" fill="#e24e1b" opacity="0.25" className="animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}} />
                    <circle cx="750" cy="110" r="7" fill="#ff6b3d" opacity="0.2" className="animate-bounce" style={{animationDuration: '3s', animationDelay: '1.5s'}} />
                    <circle cx="950" cy="125" r="4" fill="#e24e1b" opacity="0.3" className="animate-bounce" style={{animationDuration: '3.5s', animationDelay: '2s'}} />
                  </g>
                </svg>
              </div>
            </div>

            <Card className="p-8 bg-white border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sektion F</h2>
              <p className="text-gray-600">Ocean Breeze mit mehrschichtigen Wellen.</p>
            </Card>

            {/* Flowing Gradient 7: Cosmic Flow */}
            <div className="relative">
              <h3 className="text-lg font-medium text-gray-800 mb-4 text-center relative z-10">
                Fließender Übergang 7: Cosmic Flow 🌌
              </h3>
              <div className="relative h-64 -my-18">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 260" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="cosmicGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.4">
                        <animate attributeName="stop-color" values="#e24e1b;#ff6b3d;#e24e1b" dur="6s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="33%" stopColor="#ff6b3d" stopOpacity="0.6">
                        <animate attributeName="stop-color" values="#ff6b3d;#e24e1b;#ff6b3d" dur="6s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="66%" stopColor="#e24e1b" stopOpacity="0.5">
                        <animate attributeName="stop-color" values="#e24e1b;#ff6b3d;#e24e1b" dur="6s" repeatCount="indefinite" />
                      </stop>
                      <stop offset="100%" stopColor="#ff6b3d" stopOpacity="0.3">
                        <animate attributeName="stop-color" values="#ff6b3d;#e24e1b;#ff6b3d" dur="6s" repeatCount="indefinite" />
                      </stop>
                    </linearGradient>
                    
                    <radialGradient id="cosmicRadial" cx="50%" cy="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.4" />
                      <stop offset="50%" stopColor="#ff6b3d" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                  
                  {/* Cosmic top wave */}
                  <path 
                    d="M-100,70 C100,40 300,80 500,60 C700,40 900,70 1100,50 C1300,40 1500,70 L1500,0 L-100,0 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-100,70 C100,40 300,80 500,60 C700,40 900,70 1100,50 C1300,40 1500,70" 
                    stroke="url(#cosmicGrad1)" 
                    strokeWidth="6" 
                    fill="none"
                    className="animate-pulse"
                  />
                  <path 
                    d="M-100,55 C100,30 300,65 500,45 C700,30 900,55 1100,35 C1300,30 1500,55" 
                    stroke="#e24e1b" 
                    strokeWidth="2" 
                    fill="none"
                    opacity="0.3"
                    strokeDasharray="10,5"
                  />
                  
                  {/* Cosmic bottom wave */}
                  <path 
                    d="M-100,190 C100,220 300,180 500,200 C700,220 900,190 1100,210 C1300,220 1500,190 L1500,260 L-100,260 Z" 
                    fill="#ffffff"
                  />
                  <path 
                    d="M-100,190 C100,220 300,180 500,200 C700,220 900,190 1100,210 C1300,220 1500,190" 
                    stroke="url(#cosmicGrad1)" 
                    strokeWidth="6" 
                    fill="none"
                    className="animate-pulse"
                  />
                  <path 
                    d="M-100,205 C100,230 300,195 500,215 C700,230 900,205 1100,225 C1300,230 1500,205" 
                    stroke="#ff6b3d" 
                    strokeWidth="2" 
                    fill="none"
                    opacity="0.3"
                    strokeDasharray="10,5"
                  />
                  
                  {/* Cosmic center */}
                  <ellipse cx="600" cy="130" rx="500" ry="70" fill="url(#cosmicRadial)" />
                  
                  {/* Cosmic particles and stars */}
                  <g>
                    <circle cx="200" cy="100" r="2" fill="#e24e1b" className="animate-pulse" />
                    <circle cx="400" cy="130" r="3" fill="#ff6b3d" className="animate-pulse" style={{animationDelay: '0.3s'}} />
                    <circle cx="600" cy="90" r="2" fill="#e24e1b" className="animate-pulse" style={{animationDelay: '0.6s'}} />
                    <circle cx="800" cy="140" r="3" fill="#ff6b3d" className="animate-pulse" style={{animationDelay: '0.9s'}} />
                    <circle cx="1000" cy="110" r="2" fill="#e24e1b" className="animate-pulse" style={{animationDelay: '1.2s'}} />
                  </g>
                  
                  {/* Cosmic streaks */}
                  <g opacity="0.4">
                    <line x1="100" y1="80" x2="300" y2="120" stroke="#e24e1b" strokeWidth="1" className="animate-pulse" />
                    <line x1="500" y1="90" x2="700" y2="110" stroke="#ff6b3d" strokeWidth="1" className="animate-pulse" style={{animationDelay: '0.5s'}} />
                    <line x1="900" y1="100" x2="1100" y2="130" stroke="#e24e1b" strokeWidth="1" className="animate-pulse" style={{animationDelay: '1s'}} />
                  </g>
                </svg>
                
                {/* Cosmic floating orbs */}
                <div className="absolute inset-0">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full"
                      style={{
                        width: `${8 + i * 2}px`,
                        height: `${8 + i * 2}px`,
                        background: `radial-gradient(circle, ${i % 2 === 0 ? '#e24e1b' : '#ff6b3d'} 0%, transparent 70%)`,
                        top: `${30 + Math.sin(i * 0.5) * 30}%`,
                        left: `${5 + i * 13}%`,
                        animation: `floatCosmic ${6 + i}s ease-in-out infinite`,
                        animationDelay: `${i * 0.4}s`
                      }}
                    />
                  ))}
                </div>
                
                <style jsx>{`
                  @keyframes floatCosmic {
                    0%, 100% { transform: translateY(0) scale(1); opacity: 0.6; }
                    50% { transform: translateY(-30px) scale(1.2); opacity: 0.8; }
                  }
                  @keyframes flowRightSlow {
                    from { transform: translateX(0); }
                    to { transform: translateX(1500px); }
                  }
                `}</style>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-br from-white to-orange-50/10 border border-gray-200 shadow-md">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Abschluss-Sektion</h2>
              <p className="text-gray-600">Cosmic Flow mit animierten Farbverläufen.</p>
            </Card>

            {/* Extended Comparison Section */}
            <div className="mt-16 p-8 bg-gradient-to-r from-brand-red/5 to-orange-500/5 rounded-xl border border-brand-red/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Alle Übergangskonzepte - Finale Übersicht
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">🎨 Klassische Separatoren (1-5):</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong>Separator 5:</strong> Modern, elegant ⭐</li>
                    <li><strong>Separator 1:</strong> Minimal, subtil</li>
                    <li><strong>Separator 2:</strong> Strukturiert</li>
                    <li><em>Separator 3-4:</em> Spezielle Anwendungsfälle</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">🚀 Erweiterte Konzepte (6-10):</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong>Konzept 6:</strong> Fließende Übergänge ⭐</li>
                    <li><strong>Konzept 7:</strong> Interaktive Zonen</li>
                    <li><strong>Konzept 9:</strong> Scroll-Animationen</li>
                    <li><em>Konzept 8,10:</em> Experimentell</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-4">🔥 Professional Bridges (11-15):</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li><strong>Bridge 11:</strong> Tech-Grid Glassmorphism ⭐</li>
                    <li><strong>Bridge 12:</strong> Wellenform pulsierend ⭐</li>
                    <li><strong>Bridge 13:</strong> Feature-Connections</li>
                    <li><strong>Bridge 14:</strong> Security-Trust</li>
                    <li><strong>Bridge 15:</strong> Action-Visualisierung</li>
                  </ul>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-800 mb-4 text-center">🏆 Top Empfehlungen für Homepage-Integration:</h4>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300 mb-2">
                      Beste Balance
                    </Badge>
                    <p className="text-xs text-gray-600">Separator 5 & Bridge 12</p>
                  </div>
                  
                  <div className="text-center">
                    <Badge className="bg-blue-100 text-blue-800 border-blue-300 mb-2">
                      Tech-Look
                    </Badge>
                    <p className="text-xs text-gray-600">Bridge 11 (Tech-Grid)</p>
                  </div>
                  
                  <div className="text-center">
                    <Badge className="bg-purple-100 text-purple-800 border-purple-300 mb-2">
                      Interaktiv
                    </Badge>
                    <p className="text-xs text-gray-600">Konzept 7 & Bridge 15</p>
                  </div>
                  
                  <div className="text-center">
                    <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30 mb-2">
                      Akzentfarbe
                    </Badge>
                    <p className="text-xs text-gray-600">Alle mit #e24e1b</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Comparison Section */}
            <div className="mt-12 p-8 bg-gradient-to-r from-gray-50 to-gray-50 rounded-xl border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Ursprüngliche Separatoren - Vergleich & Empfehlung
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">✅ Empfohlene Separatoren:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Separator 5:</strong> Modern, elegant, markentreu</li>
                    <li><strong>Separator 1:</strong> Minimal, subtil, nicht aufdringlich</li>
                    <li><strong>Separator 2:</strong> Strukturiert, professionell</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">⚠️ Weniger geeignet:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Separator 3:</strong> Zu auffällig, lenkt ab</li>
                    <li><strong>Separator 4:</strong> Nur mit passendem Logo-Design</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">
                  Empfehlung: Separator 5 für beste Balance aus Ästhetik und Funktionalität
                </Badge>
              </div>
            </div>
          </div>

          {/* 10 New Innovative Transition Designs */}
          <div className="mt-32 space-y-24">
            <div className="text-center mb-16">
              <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30 px-4 py-2 mb-4">
                Neue Designs
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                10 Innovative Übergangs-Designs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Kreative und ansprechende Separator-Designs mit der Akzentfarbe #e24e1b
              </p>
            </div>

            {/* 1. Hexagon Network Transition */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                1. Hexagon Network Transition 🔗
              </h3>
              <div className="relative h-40 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
                  <defs>
                    <pattern id="hexGrid" x="0" y="0" width="60" height="52" patternUnits="userSpaceOnUse">
                      <polygon points="30,4 50,17 50,35 30,48 10,35 10,17" 
                               fill="none" 
                               stroke="#e24e1b" 
                               strokeWidth="1" 
                               opacity="0.3"/>
                    </pattern>
                    <radialGradient id="hexGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  
                  {/* Hexagon grid background */}
                  <rect width="1200" height="160" fill="url(#hexGrid)" opacity="0.4"/>
                  
                  {/* Animated connection lines */}
                  <g className="animate-pulse">
                    <line x1="100" y1="40" x2="300" y2="80" stroke="#e24e1b" strokeWidth="2" opacity="0.7"/>
                    <line x1="300" y1="80" x2="500" y2="60" stroke="#e24e1b" strokeWidth="2" opacity="0.7"/>
                    <line x1="500" y1="60" x2="700" y2="100" stroke="#e24e1b" strokeWidth="2" opacity="0.7"/>
                    <line x1="700" y1="100" x2="900" y2="70" stroke="#e24e1b" strokeWidth="2" opacity="0.7"/>
                    <line x1="900" y1="70" x2="1100" y2="90" stroke="#e24e1b" strokeWidth="2" opacity="0.7"/>
                  </g>
                  
                  {/* Glowing hexagon nodes */}
                  <g>
                    <circle cx="100" cy="40" r="8" fill="url(#hexGlow)" className="animate-ping"/>
                    <circle cx="300" cy="80" r="6" fill="#e24e1b" opacity="0.8"/>
                    <circle cx="500" cy="60" r="8" fill="url(#hexGlow)" className="animate-ping" style={{animationDelay: '0.5s'}}/>
                    <circle cx="700" cy="100" r="6" fill="#e24e1b" opacity="0.8"/>
                    <circle cx="900" cy="70" r="8" fill="url(#hexGlow)" className="animate-ping" style={{animationDelay: '1s'}}/>
                    <circle cx="1100" cy="90" r="6" fill="#e24e1b" opacity="0.8"/>
                  </g>
                </svg>
              </div>
            </div>

            {/* 2. DNA Helix Separator */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                2. DNA Helix Separator 🧬
              </h3>
              <div className="relative h-32">
                <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0"/>
                      <stop offset="25%" stopColor="#e24e1b" stopOpacity="0.8"/>
                      <stop offset="75%" stopColor="#ff6b3d" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  
                  {/* DNA double helix */}
                  <path d="M0,64 Q150,32 300,64 Q450,96 600,64 Q750,32 900,64 Q1050,96 1200,64" 
                        stroke="url(#dnaGradient)" 
                        strokeWidth="3" 
                        fill="none" 
                        className="animate-pulse"/>
                  
                  <path d="M0,64 Q150,96 300,64 Q450,32 600,64 Q750,96 900,64 Q1050,32 1200,64" 
                        stroke="url(#dnaGradient)" 
                        strokeWidth="3" 
                        fill="none" 
                        className="animate-pulse" 
                        style={{animationDelay: '0.5s'}}/>
                  
                  {/* Connection bars */}
                  <g className="animate-pulse" style={{animationDelay: '0.25s'}}>
                    <line x1="150" y1="48" x2="150" y2="80" stroke="#e24e1b" strokeWidth="2" opacity="0.6"/>
                    <line x1="300" y1="64" x2="300" y2="64" stroke="#e24e1b" strokeWidth="4" opacity="0.8"/>
                    <line x1="450" y1="80" x2="450" y2="48" stroke="#e24e1b" strokeWidth="2" opacity="0.6"/>
                    <line x1="600" y1="64" x2="600" y2="64" stroke="#e24e1b" strokeWidth="4" opacity="0.8"/>
                    <line x1="750" y1="48" x2="750" y2="80" stroke="#e24e1b" strokeWidth="2" opacity="0.6"/>
                    <line x1="900" y1="64" x2="900" y2="64" stroke="#e24e1b" strokeWidth="4" opacity="0.8"/>
                    <line x1="1050" y1="80" x2="1050" y2="48" stroke="#e24e1b" strokeWidth="2" opacity="0.6"/>
                  </g>
                </svg>
              </div>
            </div>

            {/* 3. Circuit Board Pattern */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                3. Circuit Board Pattern ⚡
              </h3>
              <div className="relative h-36 bg-gray-900/5 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                  {/* Circuit traces */}
                  <g stroke="#e24e1b" strokeWidth="2" fill="none" opacity="0.7">
                    <path d="M0,72 L200,72 L220,52 L280,52 L300,72 L500,72 L520,92 L580,92 L600,72 L800,72 L820,52 L880,52 L900,72 L1200,72"/>
                    <path d="M0,60 L180,60 L200,40 L260,40 L280,60 L480,60 L500,80 L560,80 L580,60 L780,60 L800,40 L860,40 L880,60 L1200,60"/>
                    <path d="M0,84 L180,84 L200,104 L260,104 L280,84 L480,84 L500,64 L560,64 L580,84 L780,84 L800,104 L860,104 L880,84 L1200,84"/>
                  </g>
                  
                  {/* Circuit nodes */}
                  <g fill="#e24e1b">
                    <circle cx="200" cy="72" r="4" className="animate-pulse"/>
                    <circle cx="280" cy="52" r="3"/>
                    <circle cx="500" cy="72" r="4" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                    <circle cx="580" cy="92" r="3"/>
                    <circle cx="800" cy="72" r="4" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                    <circle cx="880" cy="52" r="3"/>
                  </g>
                  
                  {/* Microchips */}
                  <g fill="#e24e1b" opacity="0.6">
                    <rect x="295" y="67" width="10" height="10" rx="1"/>
                    <rect x="595" y="67" width="10" height="10" rx="1"/>
                    <rect x="895" y="67" width="10" height="10" rx="1"/>
                  </g>
                </svg>
              </div>
            </div>

            {/* 4. Morphing Geometric Shapes */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                4. Morphing Geometric Shapes 🔺
              </h3>
              <div className="relative h-32">
                <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.2"/>
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.2"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Morphing shapes */}
                  <g className="animate-pulse">
                    <polygon points="100,64 80,84 120,84" fill="url(#morphGradient)" transform="rotate(0 100 74)">
                      <animateTransform attributeName="transform" type="rotate" values="0 100 74;360 100 74;0 100 74" dur="4s" repeatCount="indefinite"/>
                    </polygon>
                    
                    <circle cx="300" cy="64" r="16" fill="url(#morphGradient)" opacity="0.6">
                      <animate attributeName="r" values="16;24;16" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    
                    <rect x="484" y="48" width="32" height="32" fill="url(#morphGradient)" rx="4">
                      <animateTransform attributeName="transform" type="rotate" values="0 500 64;45 500 64;0 500 64" dur="3s" repeatCount="indefinite"/>
                    </rect>
                    
                    <polygon points="700,44 720,64 700,84 680,64" fill="url(#morphGradient)">
                      <animateTransform attributeName="transform" type="scale" values="1 1;1.3 1.3;1 1" dur="2.5s" repeatCount="indefinite"/>
                    </polygon>
                    
                    <path d="M900,64 L916,48 L932,64 L916,80 Z" fill="url(#morphGradient)">
                      <animateTransform attributeName="transform" type="rotate" values="0 916 64;-360 916 64;0 916 64" dur="5s" repeatCount="indefinite"/>
                    </path>
                    
                    <polygon points="1100,54 1110,44 1120,54 1110,84" fill="url(#morphGradient)">
                      <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite"/>
                    </polygon>
                  </g>
                </svg>
              </div>
            </div>

            {/* 5. Liquid Metal Flow */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                5. Liquid Metal Flow 💧
              </h3>
              <div className="relative h-28">
                <svg className="w-full h-full" viewBox="0 0 1200 112" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0"/>
                      <stop offset="20%" stopColor="#e24e1b" stopOpacity="0.3"/>
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="1"/>
                      <stop offset="80%" stopColor="#ff6b3d" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                      <animateTransform attributeName="gradientTransform" type="translate" values="-100 0;100 0;-100 0" dur="3s" repeatCount="indefinite"/>
                    </linearGradient>
                    <filter id="liquidBlur">
                      <feGaussianBlur in="SourceGraphic" stdDeviation="2"/>
                    </filter>
                  </defs>
                  
                  <path d="M0,56 Q150,36 300,56 Q450,76 600,56 Q750,36 900,56 Q1050,76 1200,56" 
                        stroke="url(#liquidGradient)" 
                        strokeWidth="8" 
                        fill="none" 
                        filter="url(#liquidBlur)"/>
                  
                  <path d="M0,56 Q150,36 300,56 Q450,76 600,56 Q750,36 900,56 Q1050,76 1200,56" 
                        stroke="#e24e1b" 
                        strokeWidth="4" 
                        fill="none" 
                        opacity="0.8"/>
                  
                  {/* Liquid droplets */}
                  <g>
                    <circle cx="200" cy="46" r="3" fill="#e24e1b" opacity="0.7" className="animate-bounce"/>
                    <circle cx="400" cy="66" r="2" fill="#e24e1b" opacity="0.5" className="animate-bounce" style={{animationDelay: '0.3s'}}/>
                    <circle cx="600" cy="46" r="4" fill="#e24e1b" opacity="0.8" className="animate-bounce" style={{animationDelay: '0.6s'}}/>
                    <circle cx="800" cy="66" r="2" fill="#e24e1b" opacity="0.5" className="animate-bounce" style={{animationDelay: '0.9s'}}/>
                    <circle cx="1000" cy="46" r="3" fill="#e24e1b" opacity="0.7" className="animate-bounce" style={{animationDelay: '1.2s'}}/>
                  </g>
                </svg>
              </div>
            </div>

            {/* 6. Energy Pulse Grid */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                6. Energy Pulse Grid ⚡
              </h3>
              <div className="relative h-40 bg-gradient-to-r from-transparent via-orange-50/30 to-transparent">
                <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="pulseGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="1"/>
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.5"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                      <animate attributeName="r" values="30%;60%;30%" dur="2s" repeatCount="indefinite"/>
                    </radialGradient>
                  </defs>
                  
                  {/* Grid lines */}
                  <g stroke="#e24e1b" strokeWidth="1" opacity="0.3">
                    <line x1="0" y1="40" x2="1200" y2="40"/>
                    <line x1="0" y1="80" x2="1200" y2="80"/>
                    <line x1="0" y1="120" x2="1200" y2="120"/>
                    <line x1="200" y1="0" x2="200" y2="160"/>
                    <line x1="400" y1="0" x2="400" y2="160"/>
                    <line x1="600" y1="0" x2="600" y2="160"/>
                    <line x1="800" y1="0" x2="800" y2="160"/>
                    <line x1="1000" y1="0" x2="1000" y2="160"/>
                  </g>
                  
                  {/* Energy pulses */}
                  <g>
                    <circle cx="200" cy="80" r="25" fill="url(#pulseGradient)" className="animate-ping"/>
                    <circle cx="600" cy="80" r="30" fill="url(#pulseGradient)" className="animate-ping" style={{animationDelay: '0.5s'}}/>
                    <circle cx="1000" cy="80" r="25" fill="url(#pulseGradient)" className="animate-ping" style={{animationDelay: '1s'}}/>
                  </g>
                  
                  {/* Energy connections */}
                  <g stroke="#e24e1b" strokeWidth="2" opacity="0.6" className="animate-pulse">
                    <line x1="200" y1="80" x2="600" y2="80"/>
                    <line x1="600" y1="80" x2="1000" y2="80"/>
                  </g>
                </svg>
              </div>
            </div>

            {/* 7. Origami Fold Transition */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                7. Origami Fold Transition 📄
              </h3>
              <div className="relative h-32 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="foldGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#ff6b3d" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.2"/>
                    </linearGradient>
                    <linearGradient id="foldGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.2"/>
                      <stop offset="50%" stopColor="#ff6b3d" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.8"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Origami folds */}
                  <g>
                    <polygon points="0,64 200,32 400,64 200,96" fill="url(#foldGradient1)" className="animate-pulse"/>
                    <polygon points="200,64 400,32 600,64 400,96" fill="url(#foldGradient2)" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
                    <polygon points="400,64 600,32 800,64 600,96" fill="url(#foldGradient1)" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                    <polygon points="600,64 800,32 1000,64 800,96" fill="url(#foldGradient2)" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                    <polygon points="800,64 1000,32 1200,64 1000,96" fill="url(#foldGradient1)" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
                  </g>
                  
                  {/* Fold lines */}
                  <g stroke="#e24e1b" strokeWidth="1" opacity="0.5">
                    <line x1="200" y1="32" x2="200" y2="96"/>
                    <line x1="400" y1="32" x2="400" y2="96"/>
                    <line x1="600" y1="32" x2="600" y2="96"/>
                    <line x1="800" y1="32" x2="800" y2="96"/>
                    <line x1="1000" y1="32" x2="1000" y2="96"/>
                  </g>
                </svg>
              </div>
            </div>

            {/* 8. Sound Wave Visualizer */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                8. Sound Wave Visualizer 🎵
              </h3>
              <div className="relative h-32 bg-gradient-to-r from-transparent via-red-50/20 to-transparent">
                <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                  {/* Sound wave bars */}
                  <g fill="#e24e1b">
                    <rect x="50" y="74" width="4" height="8" className="animate-pulse">
                      <animate attributeName="height" values="8;32;8" dur="0.8s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="74;58;74" dur="0.8s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="70" y="66" width="4" height="24" className="animate-pulse" style={{animationDelay: '0.1s'}}>
                      <animate attributeName="height" values="24;48;24" dur="1.2s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="66;54;66" dur="1.2s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="90" y="58" width="4" height="40" className="animate-pulse" style={{animationDelay: '0.2s'}}>
                      <animate attributeName="height" values="40;64;40" dur="0.9s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="58;46;58" dur="0.9s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="110" y="70" width="4" height="16" className="animate-pulse" style={{animationDelay: '0.3s'}}>
                      <animate attributeName="height" values="16;40;16" dur="1.1s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="70;58;70" dur="1.1s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="130" y="62" width="4" height="32" className="animate-pulse" style={{animationDelay: '0.4s'}}>
                      <animate attributeName="height" values="32;56;32" dur="0.7s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="62;50;62" dur="0.7s" repeatCount="indefinite"/>
                    </rect>
                  </g>
                  
                  {/* Repeated pattern across width */}
                  <g fill="#e24e1b" opacity="0.8">
                    <rect x="250" y="74" width="4" height="8" className="animate-pulse" style={{animationDelay: '0.5s'}}>
                      <animate attributeName="height" values="8;32;8" dur="0.8s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="74;58;74" dur="0.8s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="270" y="66" width="4" height="24" className="animate-pulse" style={{animationDelay: '0.6s'}}>
                      <animate attributeName="height" values="24;48;24" dur="1.2s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="66;54;66" dur="1.2s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="290" y="58" width="4" height="40" className="animate-pulse" style={{animationDelay: '0.7s'}}>
                      <animate attributeName="height" values="40;64;40" dur="0.9s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="58;46;58" dur="0.9s" repeatCount="indefinite"/>
                    </rect>
                  </g>
                  
                  {/* Center frequency visualization */}
                  <g fill="#e24e1b" opacity="0.6">
                    <rect x="590" y="44" width="6" height="72" className="animate-pulse">
                      <animate attributeName="height" values="72;96;72" dur="1.5s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="44;32;44" dur="1.5s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="606" y="54" width="6" height="52" className="animate-pulse" style={{animationDelay: '0.2s'}}>
                      <animate attributeName="height" values="52;76;52" dur="1.3s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="54;42;54" dur="1.3s" repeatCount="indefinite"/>
                    </rect>
                  </g>
                  
                  {/* Right side pattern */}
                  <g fill="#e24e1b" opacity="0.7">
                    <rect x="950" y="74" width="4" height="8" className="animate-pulse" style={{animationDelay: '1s'}}>
                      <animate attributeName="height" values="8;32;8" dur="0.8s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="74;58;74" dur="0.8s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="970" y="66" width="4" height="24" className="animate-pulse" style={{animationDelay: '1.1s'}}>
                      <animate attributeName="height" values="24;48;24" dur="1.2s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="66;54;66" dur="1.2s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="990" y="58" width="4" height="40" className="animate-pulse" style={{animationDelay: '1.2s'}}>
                      <animate attributeName="height" values="40;64;40" dur="0.9s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="58;46;58" dur="0.9s" repeatCount="indefinite"/>
                    </rect>
                  </g>
                </svg>
              </div>
            </div>

            {/* 9. Particle System */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                9. Particle System ✨
              </h3>
              <div className="relative h-36 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="particleGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  
                  {/* Floating particles */}
                  <g>
                    <circle cx="100" cy="72" r="2" fill="url(#particleGradient)" className="animate-bounce">
                      <animate attributeName="cy" values="72;52;72" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="150" cy="88" r="1.5" fill="url(#particleGradient)" className="animate-bounce" style={{animationDelay: '0.3s'}}>
                      <animate attributeName="cy" values="88;68;88" dur="2.3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="200" cy="64" r="3" fill="url(#particleGradient)" className="animate-bounce" style={{animationDelay: '0.6s'}}>
                      <animate attributeName="cy" values="64;44;64" dur="1.8s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="300" cy="96" r="2" fill="url(#particleGradient)" className="animate-bounce" style={{animationDelay: '0.9s'}}>
                      <animate attributeName="cy" values="96;76;96" dur="2.1s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="400" cy="56" r="2.5" fill="url(#particleGradient)" className="animate-bounce" style={{animationDelay: '1.2s'}}>
                      <animate attributeName="cy" values="56;36;56" dur="1.9s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="500" cy="104" r="1.5" fill="url(#particleGradient)" className="animate-bounce" style={{animationDelay: '1.5s'}}>
                      <animate attributeName="cy" values="104;84;104" dur="2.2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="600" cy="48" r="3" fill="url(#particleGradient)" className="animate-bounce" style={{animationDelay: '1.8s'}}>
                      <animate attributeName="cy" values="48;28;48" dur="1.7s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="700" cy="112" r="2" fill="url(#particleGradient)" className="animate-bounce" style={{animationDelay: '2.1s'}}>
                      <animate attributeName="cy" values="112;92;112" dur="2.4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="800" cy="80" r="2.5" fill="url(#particleGradient)" className="animate-bounce" style={{animationDelay: '2.4s'}}>
                      <animate attributeName="cy" values="80;60;80" dur="1.6s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="900" cy="40" r="1.5" fill="url(#particleGradient)" className="animate-bounce" style={{animationDelay: '2.7s'}}>
                      <animate attributeName="cy" values="40;20;40" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="1000" cy="120" r="3" fill="url(#particleGradient)" className="animate-bounce" style={{animationDelay: '3s'}}>
                      <animate attributeName="cy" values="120;100;120" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="1100" cy="68" r="2" fill="url(#particleGradient)" className="animate-bounce" style={{animationDelay: '3.3s'}}>
                      <animate attributeName="cy" values="68;48;68" dur="2.1s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                  
                  {/* Connection lines between particles */}
                  <g stroke="#e24e1b" strokeWidth="1" opacity="0.3" className="animate-pulse">
                    <line x1="100" y1="72" x2="200" y2="64"/>
                    <line x1="200" y1="64" x2="400" y2="56"/>
                    <line x1="400" y1="56" x2="600" y2="48"/>
                    <line x1="600" y1="48" x2="800" y2="80"/>
                    <line x1="800" y1="80" x2="1000" y2="120"/>
                    <line x1="1000" y1="120" x2="1100" y2="68"/>
                  </g>
                </svg>
              </div>
            </div>

            {/* 10. Magnetic Field Lines */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                10. Magnetic Field Lines 🧲
              </h3>
              <div className="relative h-40">
                <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="magneticGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.2"/>
                      <stop offset="25%" stopColor="#e24e1b" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#ff6b3d" stopOpacity="1"/>
                      <stop offset="75%" stopColor="#e24e1b" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.2"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Magnetic field lines */}
                  <g stroke="url(#magneticGradient)" strokeWidth="2" fill="none" className="animate-pulse">
                    <path d="M0,80 Q200,40 400,80 Q600,120 800,80 Q1000,40 1200,80"/>
                    <path d="M0,80 Q200,120 400,80 Q600,40 800,80 Q1000,120 1200,80" style={{animationDelay: '0.3s'}}/>
                    <path d="M100,80 Q250,60 400,80 Q550,100 700,80 Q850,60 1100,80" opacity="0.7"/>
                    <path d="M100,80 Q250,100 400,80 Q550,60 700,80 Q850,100 1100,80" opacity="0.7" style={{animationDelay: '0.6s'}}/>
                  </g>
                  
                  {/* Magnetic poles */}
                  <g>
                    <circle cx="200" cy="80" r="12" fill="#e24e1b" opacity="0.8" className="animate-ping">
                      <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <text x="200" y="85" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">N</text>
                    
                    <circle cx="1000" cy="80" r="12" fill="#e24e1b" opacity="0.8" className="animate-ping" style={{animationDelay: '1s'}}>
                      <animate attributeName="r" values="12;16;12" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <text x="1000" y="85" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">S</text>
                  </g>
                  
                  {/* Field strength indicators */}
                  <g fill="#e24e1b" opacity="0.6">
                    <circle cx="300" cy="60" r="2" className="animate-pulse"/>
                    <circle cx="500" cy="100" r="2" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
                    <circle cx="700" cy="60" r="2" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                    <circle cx="900" cy="100" r="2" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                  </g>
                </svg>
              </div>
            </div>

          </div>

          {/* 7 Additional Tech-Themed Transition Designs */}
          <div className="mt-32 space-y-24">
            <div className="text-center mb-16">
              <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30 px-4 py-2 mb-4">
                Tech-Fokussierte Designs
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                7 Compliance & IT-Security Designs
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Technische Übergänge inspiriert von Compliance, IT-Sicherheit und KI-Themen
              </p>
            </div>

            {/* 1. Neural Network Synapses */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                1. Neural Network Synapses 🧠
              </h3>
              <div className="relative h-44 overflow-hidden bg-gradient-to-r from-transparent via-gray-50/30 to-transparent">
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
                  <g stroke="url(#synapseGrad)" strokeWidth="1.5" fill="none" className="animate-pulse">
                    <path d="M100,88 Q200,60 300,88 Q400,116 500,88"/>
                    <path d="M200,70 Q350,100 500,70 Q650,40 800,70"/>
                    <path d="M300,106 Q450,80 600,106 Q750,132 900,106"/>
                    <path d="M500,50 Q650,88 800,50 Q950,12 1100,50"/>
                    <path d="M600,126 Q750,98 900,126 Q1050,154 1100,126"/>
                  </g>
                  
                  {/* Neurons (main nodes) */}
                  <g>
                    <circle cx="100" cy="88" r="12" fill="url(#neuronGlow)" className="animate-ping">
                      <animate attributeName="r" values="12;18;12" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="300" cy="88" r="10" fill="#e24e1b" opacity="0.7"/>
                    <circle cx="500" cy="88" r="14" fill="url(#neuronGlow)" className="animate-ping" style={{animationDelay: '0.8s'}}>
                      <animate attributeName="r" values="14;20;14" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="700" cy="88" r="10" fill="#e24e1b" opacity="0.7"/>
                    <circle cx="900" cy="88" r="12" fill="url(#neuronGlow)" className="animate-ping" style={{animationDelay: '1.6s'}}>
                      <animate attributeName="r" values="12;18;12" dur="2.2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="1100" cy="88" r="10" fill="#e24e1b" opacity="0.7"/>
                  </g>
                  
                  {/* Synapse signals */}
                  <g>
                    <circle cx="150" cy="74" r="2" fill="#e24e1b" className="animate-bounce">
                      <animateMotion dur="4s" repeatCount="indefinite">
                        <mpath href="#path1"/>
                      </animateMotion>
                    </circle>
                    <circle cx="400" cy="100" r="2" fill="#ff6b3d" className="animate-bounce" style={{animationDelay: '1s'}}>
                      <animateMotion dur="5s" repeatCount="indefinite">
                        <mpath href="#path2"/>
                      </animateMotion>
                    </circle>
                  </g>
                  
                  {/* Hidden paths for motion */}
                  <defs>
                    <path id="path1" d="M100,88 Q200,60 300,88 Q400,116 500,88" fill="none"/>
                    <path id="path2" d="M300,106 Q450,80 600,106 Q750,132 900,106" fill="none"/>
                  </defs>
                </svg>
              </div>
            </div>

            {/* 2. Blockchain Security Chain */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                2. Blockchain Security Chain 🔗
              </h3>
              <div className="relative h-36 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent">
                <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.3"/>
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Blockchain blocks */}
                  <g>
                    <rect x="50" y="62" width="40" height="20" rx="3" fill="url(#chainGrad)" className="animate-pulse"/>
                    <rect x="150" y="62" width="40" height="20" rx="3" fill="url(#chainGrad)" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                    <rect x="250" y="62" width="40" height="20" rx="3" fill="url(#chainGrad)" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                    <rect x="350" y="62" width="40" height="20" rx="3" fill="url(#chainGrad)" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
                    <rect x="450" y="62" width="40" height="20" rx="3" fill="url(#chainGrad)" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
                    <rect x="550" y="62" width="40" height="20" rx="3" fill="url(#chainGrad)" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
                    <rect x="650" y="62" width="40" height="20" rx="3" fill="url(#chainGrad)" className="animate-pulse" style={{animationDelay: '1.8s'}}/>
                    <rect x="750" y="62" width="40" height="20" rx="3" fill="url(#chainGrad)" className="animate-pulse" style={{animationDelay: '2.1s'}}/>
                    <rect x="850" y="62" width="40" height="20" rx="3" fill="url(#chainGrad)" className="animate-pulse" style={{animationDelay: '2.4s'}}/>
                    <rect x="950" y="62" width="40" height="20" rx="3" fill="url(#chainGrad)" className="animate-pulse" style={{animationDelay: '2.7s'}}/>
                    <rect x="1050" y="62" width="40" height="20" rx="3" fill="url(#chainGrad)" className="animate-pulse" style={{animationDelay: '3s'}}/>
                  </g>
                  
                  {/* Chain links */}
                  <g stroke="#e24e1b" strokeWidth="2" fill="none" opacity="0.6">
                    <line x1="90" y1="72" x2="150" y2="72" className="animate-pulse"/>
                    <line x1="190" y1="72" x2="250" y2="72" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
                    <line x1="290" y1="72" x2="350" y2="72" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                    <line x1="390" y1="72" x2="450" y2="72" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                    <line x1="490" y1="72" x2="550" y2="72" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
                    <line x1="590" y1="72" x2="650" y2="72" className="animate-pulse" style={{animationDelay: '1s'}}/>
                    <line x1="690" y1="72" x2="750" y2="72" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
                    <line x1="790" y1="72" x2="850" y2="72" className="animate-pulse" style={{animationDelay: '1.4s'}}/>
                    <line x1="890" y1="72" x2="950" y2="72" className="animate-pulse" style={{animationDelay: '1.6s'}}/>
                    <line x1="990" y1="72" x2="1050" y2="72" className="animate-pulse" style={{animationDelay: '1.8s'}}/>
                  </g>
                  
                  {/* Security locks */}
                  <g fill="#e24e1b" opacity="0.8">
                    <rect x="67" y="68" width="6" height="8" rx="1"/>
                    <rect x="267" y="68" width="6" height="8" rx="1"/>
                    <rect x="467" y="68" width="6" height="8" rx="1"/>
                    <rect x="667" y="68" width="6" height="8" rx="1"/>
                    <rect x="867" y="68" width="6" height="8" rx="1"/>
                    <rect x="1067" y="68" width="6" height="8" rx="1"/>
                  </g>
                  
                  {/* Hash indicators */}
                  <g fill="#e24e1b" opacity="0.4">
                    <text x="70" y="58" fontSize="6" textAnchor="middle">#A1B2</text>
                    <text x="170" y="58" fontSize="6" textAnchor="middle">#C3D4</text>
                    <text x="270" y="58" fontSize="6" textAnchor="middle">#E5F6</text>
                    <text x="370" y="58" fontSize="6" textAnchor="middle">#G7H8</text>
                    <text x="470" y="58" fontSize="6" textAnchor="middle">#I9J0</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* 3. Firewall Security Barrier */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                3. Firewall Security Barrier 🛡️
              </h3>
              <div className="relative h-40 bg-gradient-to-r from-transparent via-red-50/20 to-transparent">
                <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="firewallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#ff6b3d" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.8"/>
                    </linearGradient>
                    <filter id="firewallGlow">
                      <feGaussianBlur stdDeviation="3"/>
                    </filter>
                  </defs>
                  
                  {/* Firewall barriers */}
                  <g fill="url(#firewallGrad)">
                    <rect x="180" y="20" width="4" height="120" className="animate-pulse">
                      <animate attributeName="height" values="120;140;120" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="20;10;20" dur="2s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="200" y="30" width="4" height="100" className="animate-pulse" style={{animationDelay: '0.2s'}}>
                      <animate attributeName="height" values="100;130;100" dur="2.3s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="30;15;30" dur="2.3s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="220" y="25" width="4" height="110" className="animate-pulse" style={{animationDelay: '0.4s'}}>
                      <animate attributeName="height" values="110;135;110" dur="1.8s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="25;12;25" dur="1.8s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="240" y="35" width="4" height="90" className="animate-pulse" style={{animationDelay: '0.6s'}}>
                      <animate attributeName="height" values="90;125;90" dur="2.1s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="35;17;35" dur="2.1s" repeatCount="indefinite"/>
                    </rect>
                    
                    {/* Center stronger barrier */}
                    <rect x="590" y="10" width="6" height="140" fill="#e24e1b" opacity="0.9" className="animate-pulse">
                      <animate attributeName="height" values="140;160;140" dur="1.5s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="10;0;10" dur="1.5s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="600" y="15" width="6" height="130" fill="#e24e1b" opacity="0.7" className="animate-pulse" style={{animationDelay: '0.3s'}}>
                      <animate attributeName="height" values="130;150;130" dur="1.7s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="15;5;15" dur="1.7s" repeatCount="indefinite"/>
                    </rect>
                    
                    {/* Right side barriers */}
                    <rect x="960" y="25" width="4" height="110" className="animate-pulse" style={{animationDelay: '1s'}}>
                      <animate attributeName="height" values="110;135;110" dur="1.9s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="25;12;25" dur="1.9s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="980" y="30" width="4" height="100" className="animate-pulse" style={{animationDelay: '1.2s'}}>
                      <animate attributeName="height" values="100;130;100" dur="2.2s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="30;15;30" dur="2.2s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="1000" y="20" width="4" height="120" className="animate-pulse" style={{animationDelay: '1.4s'}}>
                      <animate attributeName="height" values="120;140;120" dur="2s" repeatCount="indefinite"/>
                      <animate attributeName="y" values="20;10;20" dur="2s" repeatCount="indefinite"/>
                    </rect>
                  </g>
                  
                  {/* Attack attempts (blocked) */}
                  <g fill="#e24e1b" opacity="0.3">
                    <circle cx="50" cy="80" r="3" className="animate-ping"/>
                    <circle cx="1150" cy="80" r="3" className="animate-ping" style={{animationDelay: '0.5s'}}/>
                  </g>
                  
                  {/* Security shield in center */}
                  <g transform="translate(580, 70)">
                    <path d="M20,10 L30,0 L40,10 L40,25 L30,35 L20,25 Z" fill="#e24e1b" opacity="0.6" className="animate-pulse"/>
                    <text x="30" y="20" fontSize="8" textAnchor="middle" fill="white">🛡️</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* 4. Data Encryption Matrix */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                4. Data Encryption Matrix 🔐
              </h3>
              <div className="relative h-38 bg-gradient-to-r from-transparent via-green-50/20 to-transparent overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 1200 152" preserveAspectRatio="none">
                  <defs>
                    <pattern id="binaryPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <text x="5" y="15" fontSize="8" fill="#e24e1b" opacity="0.3">1</text>
                      <text x="15" y="8" fontSize="6" fill="#e24e1b" opacity="0.2">0</text>
                    </pattern>
                  </defs>
                  
                  {/* Binary background */}
                  <rect width="1200" height="152" fill="url(#binaryPattern)" opacity="0.4"/>
                  
                  {/* Encryption keys floating */}
                  <g fill="#e24e1b">
                    <text x="100" y="50" fontSize="10" opacity="0.6" className="animate-pulse">AES-256</text>
                    <text x="300" y="70" fontSize="8" opacity="0.4" className="animate-pulse" style={{animationDelay: '0.5s'}}>RSA-2048</text>
                    <text x="500" y="40" fontSize="12" opacity="0.8" className="animate-pulse" style={{animationDelay: '1s'}}>SHA-512</text>
                    <text x="700" y="90" fontSize="9" opacity="0.5" className="animate-pulse" style={{animationDelay: '1.5s'}}>ECC-384</text>
                    <text x="900" y="60" fontSize="11" opacity="0.7" className="animate-pulse" style={{animationDelay: '2s'}}>PBKDF2</text>
                    <text x="1100" y="80" fontSize="8" opacity="0.4" className="animate-pulse" style={{animationDelay: '2.5s'}}>ChaCha20</text>
                  </g>
                  
                  {/* Data flow streams */}
                  <g stroke="#e24e1b" strokeWidth="1" fill="none" opacity="0.6">
                    <path d="M0,76 Q200,56 400,76 Q600,96 800,76 Q1000,56 1200,76" className="animate-pulse">
                      <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="4s" repeatCount="indefinite"/>
                    </path>
                    <path d="M0,76 Q200,96 400,76 Q600,56 800,76 Q1000,96 1200,76" className="animate-pulse" style={{animationDelay: '2s'}}>
                      <animate attributeName="stroke-dasharray" values="0,1000;1000,0" dur="4s" repeatCount="indefinite"/>
                    </path>
                  </g>
                  
                  {/* Encrypted data packets */}
                  <g>
                    <rect x="150" y="70" width="30" height="12" rx="2" fill="#e24e1b" opacity="0.5" className="animate-pulse">
                      <animateTransform attributeName="transform" type="translate" values="0,0;800,0;0,0" dur="6s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="400" y="70" width="25" height="12" rx="2" fill="#ff6b3d" opacity="0.6" className="animate-pulse" style={{animationDelay: '1s'}}>
                      <animateTransform attributeName="transform" type="translate" values="0,0;600,0;0,0" dur="5s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="650" y="70" width="35" height="12" rx="2" fill="#e24e1b" opacity="0.7" className="animate-pulse" style={{animationDelay: '2s'}}>
                      <animateTransform attributeName="transform" type="translate" values="0,0;400,0;0,0" dur="4s" repeatCount="indefinite"/>
                    </rect>
                  </g>
                  
                  {/* Lock symbols */}
                  <g fill="#e24e1b" opacity="0.8">
                    <text x="200" y="25" fontSize="12" textAnchor="middle">🔐</text>
                    <text x="600" y="25" fontSize="12" textAnchor="middle">🔐</text>
                    <text x="1000" y="25" fontSize="12" textAnchor="middle">🔐</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* 5. Compliance Audit Trail */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                5. Compliance Audit Trail 📋
              </h3>
              <div className="relative h-36 bg-gradient-to-r from-transparent via-blue-50/20 to-transparent">
                <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="auditGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.2"/>
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.2"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Audit checkpoints */}
                  <g>
                    <circle cx="150" cy="72" r="8" fill="url(#auditGrad)" className="animate-pulse"/>
                    <circle cx="300" cy="72" r="8" fill="url(#auditGrad)" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                    <circle cx="450" cy="72" r="8" fill="url(#auditGrad)" className="animate-pulse" style={{animationDelay: '1s'}}/>
                    <circle cx="600" cy="72" r="8" fill="url(#auditGrad)" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
                    <circle cx="750" cy="72" r="8" fill="url(#auditGrad)" className="animate-pulse" style={{animationDelay: '2s'}}/>
                    <circle cx="900" cy="72" r="8" fill="url(#auditGrad)" className="animate-pulse" style={{animationDelay: '2.5s'}}/>
                    <circle cx="1050" cy="72" r="8" fill="url(#auditGrad)" className="animate-pulse" style={{animationDelay: '3s'}}/>
                  </g>
                  
                  {/* Audit trail line */}
                  <path d="M150,72 L300,72 L450,72 L600,72 L750,72 L900,72 L1050,72" 
                        stroke="#e24e1b" 
                        strokeWidth="2" 
                        fill="none" 
                        opacity="0.6" 
                        className="animate-pulse"/>
                  
                  {/* Compliance checkmarks */}
                  <g fill="#e24e1b" opacity="0.8">
                    <text x="150" y="55" fontSize="8" textAnchor="middle">✓</text>
                    <text x="300" y="55" fontSize="8" textAnchor="middle">✓</text>
                    <text x="450" y="55" fontSize="8" textAnchor="middle">✓</text>
                    <text x="600" y="55" fontSize="8" textAnchor="middle">✓</text>
                    <text x="750" y="55" fontSize="8" textAnchor="middle">✓</text>
                    <text x="900" y="55" fontSize="8" textAnchor="middle">✓</text>
                    <text x="1050" y="55" fontSize="8" textAnchor="middle">?</text>
                  </g>
                  
                  {/* Regulation labels */}
                  <g fill="#e24e1b" opacity="0.6" fontSize="6">
                    <text x="150" y="95" textAnchor="middle">DSGVO</text>
                    <text x="300" y="95" textAnchor="middle">ISO27001</text>
                    <text x="450" y="95" textAnchor="middle">SOC2</text>
                    <text x="600" y="95" textAnchor="middle">EU-AI-Act</text>
                    <text x="750" y="95" textAnchor="middle">NIS2</text>
                    <text x="900" y="95" textAnchor="middle">TISAX</text>
                    <text x="1050" y="95" textAnchor="middle">DORA</text>
                  </g>
                  
                  {/* Progress indicator */}
                  <rect x="140" y="105" width="780" height="4" rx="2" fill="#e24e1b" opacity="0.2"/>
                  <rect x="140" y="105" width="620" height="4" rx="2" fill="#e24e1b" opacity="0.8" className="animate-pulse"/>
                  
                  {/* Document icons */}
                  <g fill="#e24e1b" opacity="0.4">
                    <rect x="147" y="108" width="6" height="8" rx="1"/>
                    <rect x="297" y="108" width="6" height="8" rx="1"/>
                    <rect x="447" y="108" width="6" height="8" rx="1"/>
                    <rect x="597" y="108" width="6" height="8" rx="1"/>
                    <rect x="747" y="108" width="6" height="8" rx="1"/>
                  </g>
                </svg>
              </div>
            </div>

            {/* 6. AI Algorithm Flow */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                6. AI Algorithm Flow 🤖
              </h3>
              <div className="relative h-42 bg-gradient-to-r from-transparent via-purple-50/20 to-transparent">
                <svg className="w-full h-full" viewBox="0 0 1200 168" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="aiNodeGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="1"/>
                      <stop offset="70%" stopColor="#ff6b3d" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  
                  {/* AI processing layers */}
                  <g stroke="#e24e1b" strokeWidth="1.5" fill="none" opacity="0.6">
                    {/* Input layer */}
                    <line x1="100" y1="40" x2="300" y2="60" className="animate-pulse"/>
                    <line x1="100" y1="84" x2="300" y2="84" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
                    <line x1="100" y1="128" x2="300" y2="108" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                    
                    {/* Hidden layers */}
                    <line x1="300" y1="60" x2="500" y2="50" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                    <line x1="300" y1="84" x2="500" y2="84" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
                    <line x1="300" y1="108" x2="500" y2="118" className="animate-pulse" style={{animationDelay: '1s'}}/>
                    
                    <line x1="500" y1="50" x2="700" y2="70" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
                    <line x1="500" y1="84" x2="700" y2="84" className="animate-pulse" style={{animationDelay: '1.4s'}}/>
                    <line x1="500" y1="118" x2="700" y2="98" className="animate-pulse" style={{animationDelay: '1.6s'}}/>
                    
                    {/* Output layer */}
                    <line x1="700" y1="70" x2="900" y2="84" className="animate-pulse" style={{animationDelay: '1.8s'}}/>
                    <line x1="700" y1="84" x2="900" y2="84" className="animate-pulse" style={{animationDelay: '2s'}}/>
                    <line x1="700" y1="98" x2="900" y2="84" className="animate-pulse" style={{animationDelay: '2.2s'}}/>
                  </g>
                  
                  {/* AI nodes */}
                  <g>
                    {/* Input nodes */}
                    <circle cx="100" cy="40" r="6" fill="url(#aiNodeGrad)" className="animate-ping"/>
                    <circle cx="100" cy="84" r="6" fill="url(#aiNodeGrad)" className="animate-ping" style={{animationDelay: '0.3s'}}/>
                    <circle cx="100" cy="128" r="6" fill="url(#aiNodeGrad)" className="animate-ping" style={{animationDelay: '0.6s'}}/>
                    
                    {/* Hidden layer 1 */}
                    <circle cx="300" cy="60" r="5" fill="#e24e1b" opacity="0.7"/>
                    <circle cx="300" cy="84" r="5" fill="#e24e1b" opacity="0.7"/>
                    <circle cx="300" cy="108" r="5" fill="#e24e1b" opacity="0.7"/>
                    
                    {/* Hidden layer 2 */}
                    <circle cx="500" cy="50" r="5" fill="#e24e1b" opacity="0.7"/>
                    <circle cx="500" cy="84" r="5" fill="#e24e1b" opacity="0.7"/>
                    <circle cx="500" cy="118" r="5" fill="#e24e1b" opacity="0.7"/>
                    
                    {/* Hidden layer 3 */}
                    <circle cx="700" cy="70" r="5" fill="#e24e1b" opacity="0.7"/>
                    <circle cx="700" cy="84" r="5" fill="#e24e1b" opacity="0.7"/>
                    <circle cx="700" cy="98" r="5" fill="#e24e1b" opacity="0.7"/>
                    
                    {/* Output node */}
                    <circle cx="900" cy="84" r="8" fill="url(#aiNodeGrad)" className="animate-ping" style={{animationDelay: '2.5s'}}/>
                  </g>
                  
                  {/* AI processing indicators */}
                  <g fill="#e24e1b" opacity="0.6">
                    <text x="100" y="25" fontSize="8" textAnchor="middle">Input</text>
                    <text x="300" y="25" fontSize="8" textAnchor="middle">Layer 1</text>
                    <text x="500" y="25" fontSize="8" textAnchor="middle">Layer 2</text>
                    <text x="700" y="25" fontSize="8" textAnchor="middle">Layer 3</text>
                    <text x="900" y="25" fontSize="8" textAnchor="middle">Output</text>
                  </g>
                  
                  {/* Data flow particles */}
                  <g>
                    <circle cx="150" cy="62" r="1.5" fill="#e24e1b" className="animate-bounce">
                      <animateMotion dur="3s" repeatCount="indefinite">
                        <mpath href="#dataFlow"/>
                      </animateMotion>
                    </circle>
                    <circle cx="200" cy="84" r="1.5" fill="#ff6b3d" className="animate-bounce" style={{animationDelay: '1s'}}>
                      <animateMotion dur="4s" repeatCount="indefinite">
                        <mpath href="#dataFlow2"/>
                      </animateMotion>
                    </circle>
                  </g>
                  
                  {/* Hidden paths for animation */}
                  <defs>
                    <path id="dataFlow" d="M100,40 L300,60 L500,50 L700,70 L900,84" fill="none"/>
                    <path id="dataFlow2" d="M100,128 L300,108 L500,118 L700,98 L900,84" fill="none"/>
                  </defs>
                  
                  {/* AI processing status */}
                  <g fill="#e24e1b" opacity="0.4">
                    <text x="1000" y="60" fontSize="8">Processing...</text>
                    <text x="1000" y="75" fontSize="8">Accuracy: 98.7%</text>
                    <text x="1000" y="90" fontSize="8">Compliance: ✓</text>
                    <text x="1000" y="105" fontSize="8">Bias Check: ✓</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* 7. Quantum Security Grid */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                7. Quantum Security Grid ⚛️
              </h3>
              <div className="relative h-44 bg-gradient-to-r from-transparent via-indigo-50/20 to-transparent overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 1200 176" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="quantumGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.9"/>
                      <stop offset="30%" stopColor="#ff6b3d" stopOpacity="0.6"/>
                      <stop offset="70%" stopColor="#e24e1b" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </radialGradient>
                    <pattern id="quantumGrid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                      <circle cx="40" cy="40" r="2" fill="#e24e1b" opacity="0.2"/>
                      <line x1="0" y1="40" x2="80" y2="40" stroke="#e24e1b" strokeWidth="0.5" opacity="0.1"/>
                      <line x1="40" y1="0" x2="40" y2="80" stroke="#e24e1b" strokeWidth="0.5" opacity="0.1"/>
                    </pattern>
                  </defs>
                  
                  {/* Quantum grid background */}
                  <rect width="1200" height="176" fill="url(#quantumGrid)" opacity="0.3"/>
                  
                  {/* Quantum entanglement connections */}
                  <g stroke="#e24e1b" strokeWidth="1" fill="none" opacity="0.6">
                    <path d="M200,88 Q400,50 600,88 Q800,126 1000,88" className="animate-pulse">
                      <animate attributeName="stroke-dasharray" values="5,5;10,10;5,5" dur="3s" repeatCount="indefinite"/>
                    </path>
                    <path d="M200,88 Q400,126 600,88 Q800,50 1000,88" className="animate-pulse" style={{animationDelay: '1s'}}>
                      <animate attributeName="stroke-dasharray" values="3,7;8,12;3,7" dur="4s" repeatCount="indefinite"/>
                    </path>
                  </g>
                  
                  {/* Quantum qubits */}
                  <g>
                    <circle cx="200" cy="88" r="12" fill="url(#quantumGlow)" className="animate-ping">
                      <animate attributeName="r" values="12;20;12" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="400" cy="88" r="10" fill="#e24e1b" opacity="0.6">
                      <animateTransform attributeName="transform" type="rotate" values="0 400 88;360 400 88" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="600" cy="88" r="14" fill="url(#quantumGlow)" className="animate-ping" style={{animationDelay: '1s'}}>
                      <animate attributeName="r" values="14;22;14" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="800" cy="88" r="10" fill="#e24e1b" opacity="0.6">
                      <animateTransform attributeName="transform" type="rotate" values="360 800 88;0 800 88" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="1000" cy="88" r="12" fill="url(#quantumGlow)" className="animate-ping" style={{animationDelay: '2s'}}>
                      <animate attributeName="r" values="12;18;12" dur="1.8s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                  
                  {/* Quantum states indicators */}
                  <g fill="#e24e1b" opacity="0.7">
                    <text x="200" y="65" fontSize="8" textAnchor="middle">|0⟩</text>
                    <text x="400" y="65" fontSize="8" textAnchor="middle">|1⟩</text>
                    <text x="600" y="65" fontSize="8" textAnchor="middle">|+⟩</text>
                    <text x="800" y="65" fontSize="8" textAnchor="middle">|−⟩</text>
                    <text x="1000" y="65" fontSize="8" textAnchor="middle">|ψ⟩</text>
                  </g>
                  
                  {/* Quantum security barriers */}
                  <g stroke="#e24e1b" strokeWidth="2" fill="none" opacity="0.4">
                    <circle cx="200" cy="88" r="25" className="animate-pulse">
                      <animate attributeName="r" values="25;35;25" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="600" cy="88" r="30" className="animate-pulse" style={{animationDelay: '1s'}}>
                      <animate attributeName="r" values="30;40;30" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="1000" cy="88" r="25" className="animate-pulse" style={{animationDelay: '2s'}}>
                      <animate attributeName="r" values="25;35;25" dur="3.5s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                  
                  {/* Quantum encryption keys */}
                  <g fill="#e24e1b" opacity="0.5">
                    <text x="100" y="40" fontSize="7">QKD-KEY-1</text>
                    <text x="300" y="130" fontSize="7">QKD-KEY-2</text>
                    <text x="500" y="35" fontSize="7">QKD-KEY-3</text>
                    <text x="700" y="135" fontSize="7">QKD-KEY-4</text>
                    <text x="900" y="40" fontSize="7">QKD-KEY-5</text>
                    <text x="1100" y="130" fontSize="7">QKD-KEY-6</text>
                  </g>
                  
                  {/* Entanglement visualization */}
                  <g stroke="#e24e1b" strokeWidth="1" fill="none" opacity="0.3">
                    <path d="M200,88 C300,50 500,126 600,88" className="animate-pulse">
                      <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2s" repeatCount="indefinite"/>
                    </path>
                    <path d="M600,88 C700,126 900,50 1000,88" className="animate-pulse" style={{animationDelay: '1s'}}>
                      <animate attributeName="stroke-opacity" values="0.3;0.8;0.3" dur="2.5s" repeatCount="indefinite"/>
                    </path>
                  </g>
                  
                  {/* Quantum security status */}
                  <g fill="#e24e1b" opacity="0.6">
                    <text x="50" y="30" fontSize="8">Quantum Secure</text>
                    <text x="50" y="45" fontSize="6">Entanglement: Active</text>
                    <text x="50" y="55" fontSize="6">Decoherence: 0.001%</text>
                  </g>
                </svg>
              </div>
            </div>

          </div>

          {/* Homepage Section Separators */}
          <div className="mt-32 space-y-32">
            <div className="text-center mb-16">
              <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30 px-4 py-2 mb-4">
                Homepage Übergänge
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Passende Separatoren für jeden Abschnitt
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Thematisch abgestimmte Übergänge zwischen den Homepage-Sektionen
              </p>
            </div>

            {/* Navigation → Hero Section: KI-Native Start */}
            <div>
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Navigation → Hero Section</h3>
                <p className="text-gray-600">Übergang von der Navigation zur "KI-native Compliance Platform"</p>
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                KI-Native Activation Network ⚡
              </h3>
              <div className="relative h-40 overflow-hidden bg-gradient-to-r from-transparent via-blue-50/30 to-transparent">
                <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="aiActivationGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.9"/>
                      <stop offset="50%" stopColor="#ff6b3d" stopOpacity="0.5"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="activationStream" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0"/>
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Activation streams */}
                  <g stroke="url(#activationStream)" strokeWidth="2" fill="none">
                    <path d="M0,80 Q300,50 600,80 Q900,110 1200,80" className="animate-pulse">
                      <animate attributeName="stroke-dasharray" values="0,800;400,400;800,0" dur="3s" repeatCount="indefinite"/>
                    </path>
                    <path d="M0,80 Q300,110 600,80 Q900,50 1200,80" className="animate-pulse" style={{animationDelay: '1.5s'}}>
                      <animate attributeName="stroke-dasharray" values="0,800;400,400;800,0" dur="3s" repeatCount="indefinite"/>
                    </path>
                  </g>
                  
                  {/* AI nodes */}
                  <g>
                    <circle cx="200" cy="80" r="12" fill="url(#aiActivationGlow)" className="animate-ping">
                      <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="600" cy="80" r="16" fill="url(#aiActivationGlow)" className="animate-ping" style={{animationDelay: '0.7s'}}>
                      <animate attributeName="r" values="16;24;16" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="1000" cy="80" r="12" fill="url(#aiActivationGlow)" className="animate-ping" style={{animationDelay: '1.4s'}}>
                      <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                  
                  {/* KI labels */}
                  <g fill="#e24e1b" opacity="0.7">
                    <text x="200" y="60" fontSize="8" textAnchor="middle">KI-Native</text>
                    <text x="600" y="60" fontSize="10" textAnchor="middle">Platform</text>
                    <text x="1000" y="60" fontSize="8" textAnchor="middle">Activation</text>
                  </g>
                  
                  {/* Activation particles */}
                  <g>
                    <circle cx="350" cy="65" r="2" fill="#e24e1b" className="animate-bounce">
                      <animateMotion dur="4s" repeatCount="indefinite">
                        <mpath href="#activationPath"/>
                      </animateMotion>
                    </circle>
                    <circle cx="750" cy="95" r="2" fill="#ff6b3d" className="animate-bounce" style={{animationDelay: '2s'}}>
                      <animateMotion dur="5s" repeatCount="indefinite">
                        <mpath href="#activationPath2"/>
                      </animateMotion>
                    </circle>
                  </g>
                  
                  <defs>
                    <path id="activationPath" d="M200,80 Q450,50 600,80 Q850,110 1000,80" fill="none"/>
                    <path id="activationPath2" d="M600,80 Q750,95 900,80 Q1050,65 1200,80" fill="none"/>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Hero → Live Dashboard: Data Flow */}
            <div>
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Hero Section → Live Dashboard</h3>
                <p className="text-gray-600">Übergang zu Live-Metriken und Dashboard-Anzeige</p>
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                Real-Time Data Stream 📊
              </h3>
              <div className="relative h-36 bg-gradient-to-r from-transparent via-green-50/20 to-transparent">
                <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="dataFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.3"/>
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Data packets */}
                  <g>
                    <rect x="100" y="65" width="20" height="14" rx="2" fill="url(#dataFlowGrad)" className="animate-pulse">
                      <animateTransform attributeName="transform" type="translate" values="0,0;1000,0;0,0" dur="6s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="200" y="65" width="15" height="14" rx="2" fill="url(#dataFlowGrad)" className="animate-pulse" style={{animationDelay: '1s'}}>
                      <animateTransform attributeName="transform" type="translate" values="0,0;800,0;0,0" dur="5s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="300" y="65" width="25" height="14" rx="2" fill="url(#dataFlowGrad)" className="animate-pulse" style={{animationDelay: '2s'}}>
                      <animateTransform attributeName="transform" type="translate" values="0,0;600,0;0,0" dur="4s" repeatCount="indefinite"/>
                    </rect>
                  </g>
                  
                  {/* Data flow line */}
                  <path d="M0,72 L1200,72" stroke="#e24e1b" strokeWidth="2" opacity="0.6" className="animate-pulse"/>
                  
                  {/* Metrics indicators */}
                  <g fill="#e24e1b" opacity="0.7">
                    <text x="150" y="50" fontSize="8" textAnchor="middle">98%</text>
                    <text x="400" y="50" fontSize="8" textAnchor="middle">500+</text>
                    <text x="650" y="50" fontSize="8" textAnchor="middle">10,000h</text>
                    <text x="900" y="50" fontSize="8" textAnchor="middle">99.9%</text>
                    <text x="1100" y="50" fontSize="8" textAnchor="middle">LIVE</text>
                  </g>
                  
                  {/* Live indicators */}
                  <g>
                    <circle cx="150" cy="95" r="3" fill="#e24e1b" className="animate-ping"/>
                    <circle cx="400" cy="95" r="3" fill="#e24e1b" className="animate-ping" style={{animationDelay: '0.5s'}}/>
                    <circle cx="650" cy="95" r="3" fill="#e24e1b" className="animate-ping" style={{animationDelay: '1s'}}/>
                    <circle cx="900" cy="95" r="3" fill="#e24e1b" className="animate-ping" style={{animationDelay: '1.5s'}}/>
                    <circle cx="1100" cy="95" r="3" fill="#e24e1b" className="animate-ping" style={{animationDelay: '2s'}}/>
                  </g>
                </svg>
              </div>
            </div>

            {/* Dashboard → Problem/Solution: Transformation Matrix */}
            <div>
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Dashboard → Problem/Solution</h3>
                <p className="text-gray-600">Übergang zur Problem-Lösungs-Transformation</p>
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                Problem-to-Solution Matrix 🔄
              </h3>
              <div className="relative h-44 bg-gradient-to-r from-red-50/20 via-transparent to-green-50/20">
                <svg className="w-full h-full" viewBox="0 0 1200 176" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="transformGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#dc2626" stopOpacity="0.6"/>
                      <stop offset="30%" stopColor="#e24e1b" stopOpacity="0.8"/>
                      <stop offset="70%" stopColor="#e24e1b" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#16a34a" stopOpacity="0.6"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Problem side */}
                  <g transform="translate(0,0)">
                    <rect x="100" y="60" width="40" height="30" rx="4" fill="#dc2626" opacity="0.3" className="animate-pulse"/>
                    <rect x="100" y="100" width="40" height="30" rx="4" fill="#dc2626" opacity="0.3" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                    <text x="120" y="78" fontSize="8" textAnchor="middle" fill="#dc2626" opacity="0.8">Problem</text>
                    <text x="120" y="118" fontSize="8" textAnchor="middle" fill="#dc2626" opacity="0.8">Chaos</text>
                  </g>
                  
                  {/* Transformation flow */}
                  <path d="M200,88 Q450,40 600,88 Q750,136 1000,88" 
                        stroke="url(#transformGrad)" 
                        strokeWidth="4" 
                        fill="none" 
                        className="animate-pulse">
                    <animate attributeName="stroke-dasharray" values="0,1000;500,500;1000,0" dur="4s" repeatCount="indefinite"/>
                  </path>
                  
                  {/* Solution side */}
                  <g transform="translate(0,0)">
                    <rect x="1060" y="60" width="40" height="30" rx="4" fill="#16a34a" opacity="0.3" className="animate-pulse" style={{animationDelay: '2s'}}/>
                    <rect x="1060" y="100" width="40" height="30" rx="4" fill="#16a34a" opacity="0.3" className="animate-pulse" style={{animationDelay: '2.5s'}}/>
                    <text x="1080" y="78" fontSize="8" textAnchor="middle" fill="#16a34a" opacity="0.8">Solution</text>
                    <text x="1080" y="118" fontSize="8" textAnchor="middle" fill="#16a34a" opacity="0.8">Efficiency</text>
                  </g>
                  
                  {/* AI transformation indicator */}
                  <g transform="translate(580,70)">
                    <circle cx="20" cy="18" r="15" fill="#e24e1b" opacity="0.2" className="animate-ping"/>
                    <text x="20" y="23" fontSize="10" textAnchor="middle" fill="#e24e1b">KI</text>
                  </g>
                  
                  {/* Process arrows */}
                  <g stroke="#e24e1b" strokeWidth="2" fill="none" opacity="0.6">
                    <path d="M180,75 L220,75" className="animate-pulse"/>
                    <path d="M180,115 L220,115" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                    <path d="M980,75 L1020,75" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
                    <path d="M980,115 L1020,115" className="animate-pulse" style={{animationDelay: '1.8s'}}/>
                  </g>
                </svg>
              </div>
            </div>

            {/* Problem/Solution → DACH: Regulatory Bridge */}
            <div>
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Problem/Solution → DACH Compliance</h3>
                <p className="text-gray-600">Übergang zu regionaler DACH-Compliance</p>
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                DACH Regulatory Bridge 🇩🇪🇦🇹🇨🇭
              </h3>
              <div className="relative h-40 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent">
                <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="dachGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.4"/>
                      <stop offset="33%" stopColor="#dc2626" stopOpacity="0.8"/>
                      <stop offset="66%" stopColor="#dc2626" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.4"/>
                    </linearGradient>
                  </defs>
                  
                  {/* DACH country pillars */}
                  <g>
                    <rect x="300" y="40" width="60" height="80" rx="6" fill="url(#dachGrad)" className="animate-pulse"/>
                    <rect x="500" y="40" width="60" height="80" rx="6" fill="url(#dachGrad)" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                    <rect x="700" y="40" width="60" height="80" rx="6" fill="url(#dachGrad)" className="animate-pulse" style={{animationDelay: '1s'}}/>
                  </g>
                  
                  {/* Country flags and labels */}
                  <g fill="#e24e1b" opacity="0.9">
                    <text x="330" y="65" fontSize="16" textAnchor="middle">🇩🇪</text>
                    <text x="330" y="85" fontSize="8" textAnchor="middle">Deutschland</text>
                    <text x="330" y="95" fontSize="6" textAnchor="middle">98% Score</text>
                    
                    <text x="530" y="65" fontSize="16" textAnchor="middle">🇦🇹</text>
                    <text x="530" y="85" fontSize="8" textAnchor="middle">Österreich</text>
                    <text x="530" y="95" fontSize="6" textAnchor="middle">96% Score</text>
                    
                    <text x="730" y="65" fontSize="16" textAnchor="middle">🇨🇭</text>
                    <text x="730" y="85" fontSize="8" textAnchor="middle">Schweiz</text>
                    <text x="730" y="95" fontSize="6" textAnchor="middle">94% Score</text>
                  </g>
                  
                  {/* Connecting bridges */}
                  <g stroke="#e24e1b" strokeWidth="3" fill="none" opacity="0.6">
                    <path d="M360,80 Q430,70 500,80" className="animate-pulse"/>
                    <path d="M560,80 Q630,70 700,80" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                  </g>
                  
                  {/* Regulation indicators */}
                  <g fill="#e24e1b" opacity="0.5">
                    <text x="330" y="130" fontSize="6" textAnchor="middle">DSGVO•BDSG</text>
                    <text x="530" y="130" fontSize="6" textAnchor="middle">DSGVO•DSG</text>
                    <text x="730" y="130" fontSize="6" textAnchor="middle">DSGVO•DSG</text>
                  </g>
                  
                  {/* Live update indicators */}
                  <g>
                    <circle cx="350" cy="50" r="2" fill="#16a34a" className="animate-ping"/>
                    <circle cx="550" cy="50" r="2" fill="#16a34a" className="animate-ping" style={{animationDelay: '0.3s'}}/>
                    <circle cx="750" cy="50" r="2" fill="#16a34a" className="animate-ping" style={{animationDelay: '0.6s'}}/>
                  </g>
                </svg>
              </div>
            </div>

            {/* DACH → ISO 27001: Security Standards */}
            <div>
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semiboldtext-gray-800 mb-2">DACH → ISO 27001</h3>
                <p className="text-gray-600">Übergang zu Sicherheitsstandards und Zertifizierungen</p>
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                Security Standards Matrix 🛡️
              </h3>
              <div className="relative h-42 bg-gradient-to-r from-transparent via-indigo-50/20 to-transparent">
                <svg className="w-full h-full" viewBox="0 0 1200 168" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="isoGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  
                  {/* ISO control domains */}
                  <g>
                    <circle cx="200" cy="84" r="20" fill="url(#isoGlow)" className="animate-ping" opacity="0.6"/>
                    <circle cx="400" cy="84" r="18" fill="url(#isoGlow)" className="animate-ping" opacity="0.6" style={{animationDelay: '0.3s'}}/>
                    <circle cx="600" cy="84" r="22" fill="url(#isoGlow)" className="animate-ping" opacity="0.6" style={{animationDelay: '0.6s'}}/>
                    <circle cx="800" cy="84" r="19" fill="url(#isoGlow)" className="animate-ping" opacity="0.6" style={{animationDelay: '0.9s'}}/>
                    <circle cx="1000" cy="84" r="21" fill="url(#isoGlow)" className="animate-ping" opacity="0.6" style={{animationDelay: '1.2s'}}/>
                  </g>
                  
                  {/* Control labels */}
                  <g fill="#e24e1b" opacity="0.8">
                    <text x="200" y="60" fontSize="8" textAnchor="middle">A.5</text>
                    <text x="200" y="88" fontSize="6" textAnchor="middle">Policies</text>
                    
                    <text x="400" y="60" fontSize="8" textAnchor="middle">A.8</text>
                    <text x="400" y="88" fontSize="6" textAnchor="middle">Assets</text>
                    
                    <text x="600" y="60" fontSize="8" textAnchor="middle">A.12</text>
                    <text x="600" y="88" fontSize="6" textAnchor="middle">Operations</text>
                    
                    <text x="800" y="60" fontSize="8" textAnchor="middle">A.13</text>
                    <text x="800" y="88" fontSize="6" textAnchor="middle">Network</text>
                    
                    <text x="1000" y="60" fontSize="8" textAnchor="middle">A.18</text>
                    <text x="1000" y="88" fontSize="6" textAnchor="middle">Compliance</text>
                  </g>
                  
                  {/* Security connections */}
                  <g stroke="#e24e1b" strokeWidth="1.5" fill="none" opacity="0.4">
                    <line x1="220" y1="84" x2="380" y2="84" className="animate-pulse"/>
                    <line x1="420" y1="84" x2="580" y2="84" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
                    <line x1="620" y1="84" x2="780" y2="84" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                    <line x1="820" y1="84" x2="980" y2="84" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                  </g>
                  
                  {/* Control counts */}
                  <g fill="#e24e1b" opacity="0.6">
                    <text x="200" y="110" fontSize="6" textAnchor="middle">2 Controls</text>
                    <text x="400" y="110" fontSize="6" textAnchor="middle">10 Controls</text>
                    <text x="600" y="110" fontSize="6" textAnchor="middle">14 Controls</text>
                    <text x="800" y="110" fontSize="6" textAnchor="middle">7 Controls</text>
                    <text x="1000" y="110" fontSize="6" textAnchor="middle">7 Controls</text>
                  </g>
                  
                  {/* Certification badge */}
                  <g transform="translate(580, 120)">
                    <rect x="0" y="0" width="40" height="20" rx="4" fill="#e24e1b" opacity="0.2"/>
                    <text x="20" y="13" fontSize="8" textAnchor="middle" fill="#e24e1b">ISO 27001</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* ISO → EU AI Act: AI Compliance */}
            <div>
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">ISO 27001 → EU AI Act</h3>
                <p className="text-gray-600">Übergang zu KI-Compliance und Risikobewertung</p>
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                AI Risk Classification Network 🤖
              </h3>
              <div className="relative h-48 bg-gradient-to-r from-transparent via-purple-50/20 to-transparent">
                <svg className="w-full h-full" viewBox="0 0 1200 192" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="riskGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#dc2626" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#dc2626" stopOpacity="0.3"/>
                    </linearGradient>
                    <linearGradient id="riskGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#ea580c" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#ea580c" stopOpacity="0.3"/>
                    </linearGradient>
                    <linearGradient id="riskGrad3" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.3"/>
                    </linearGradient>
                    <linearGradient id="riskGrad4" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#16a34a" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#16a34a" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Risk level bars */}
                  <g>
                    <rect x="150" y="40" width="200" height="25" rx="4" fill="url(#riskGrad1)" className="animate-pulse"/>
                    <rect x="150" y="75" width="170" height="25" rx="4" fill="url(#riskGrad2)" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                    <rect x="150" y="110" width="90" height="25" rx="4" fill="url(#riskGrad3)" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                    <rect x="150" y="145" width="30" height="25" rx="4" fill="url(#riskGrad4)" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
                  </g>
                  
                  {/* Risk labels */}
                  <g fill="#374151" opacity="0.9">
                    <text x="250" y="58" fontSize="10" textAnchor="middle">Unannehmbares Risiko - 100%</text>
                    <text x="235" y="93" fontSize="10" textAnchor="middle">Hohes Risiko - 85%</text>
                    <text x="195" y="128" fontSize="10" textAnchor="middle">Begrenztes Risiko - 45%</text>
                    <text x="165" y="163" fontSize="10" textAnchor="middle">Minimal - 15%</text>
                  </g>
                  
                  {/* AI classification nodes */}
                  <g>
                    <circle cx="400" cy="52" r="8" fill="#dc2626" className="animate-ping"/>
                    <circle cx="370" cy="87" r="8" fill="#ea580c" className="animate-ping" style={{animationDelay: '0.3s'}}/>
                    <circle cx="290" cy="122" r="8" fill="#e24e1b" className="animate-ping" style={{animationDelay: '0.6s'}}/>
                    <circle cx="230" cy="157" r="8" fill="#16a34a" className="animate-ping" style={{animationDelay: '0.9s'}}/>
                  </g>
                  
                  {/* EU AI Act timeline */}
                  <g transform="translate(500, 60)">
                    <line x1="0" y1="50" x2="600" y2="50" stroke="#e24e1b" strokeWidth="2" opacity="0.6"/>
                    <circle cx="100" cy="50" r="6" fill="#e24e1b" className="animate-pulse"/>
                    <circle cx="300" cy="50" r="6" fill="#e24e1b" className="animate-pulse" style={{animationDelay: '0.7s'}}/>
                    <circle cx="500" cy="50" r="6" fill="#e24e1b" className="animate-pulse" style={{animationDelay: '1.4s'}}/>
                    
                    <text x="100" y="35" fontSize="8" textAnchor="middle">Feb 2025</text>
                    <text x="300" y="35" fontSize="8" textAnchor="middle">Aug 2026</text>
                    <text x="500" y="35" fontSize="8" textAnchor="middle">Aug 2027</text>
                    
                    <text x="100" y="70" fontSize="6" textAnchor="middle">Verbotene KI</text>
                    <text x="300" y="70" fontSize="6" textAnchor="middle">Hochrisiko KI</text>
                    <text x="500" y="70" fontSize="6" textAnchor="middle">Vollständig</text>
                  </g>
                  
                  {/* Compliance indicators */}
                  <g fill="#e24e1b" opacity="0.6">
                    <text x="700" y="130" fontSize="8">✓ Automatische Klassifizierung</text>
                    <text x="700" y="145" fontSize="8">✓ Compliance-Monitoring</text>
                    <text x="700" y="160" fontSize="8">✓ Dokumentation</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* AI Act → Live Dashboard: Interactive Features */}
            <div>
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">EU AI Act → Interactive Dashboard</h3>
                <p className="text-gray-600">Übergang zu interaktiven Features und Live-Demo</p>
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                Interactive Feature Activation 🎛️
              </h3>
              <div className="relative h-40 bg-gradient-to-r from-transparent via-cyan-50/20 to-transparent">
                <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="interactiveGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="1"/>
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  
                  {/* Interactive elements */}
                  <g>
                    <rect x="150" y="60" width="80" height="40" rx="8" fill="url(#interactiveGlow)" opacity="0.3" className="animate-pulse"/>
                    <rect x="300" y="60" width="80" height="40" rx="8" fill="url(#interactiveGlow)" opacity="0.3" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                    <rect x="450" y="60" width="80" height="40" rx="8" fill="url(#interactiveGlow)" opacity="0.3" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                    <rect x="600" y="60" width="80" height="40" rx="8" fill="url(#interactiveGlow)" opacity="0.3" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
                    <rect x="750" y="60" width="80" height="40" rx="8" fill="url(#interactiveGlow)" opacity="0.3" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
                  </g>
                  
                  {/* Feature labels */}
                  <g fill="#e24e1b" opacity="0.8">
                    <text x="190" y="75" fontSize="8" textAnchor="middle">+12.3%</text>
                    <text x="190" y="88" fontSize="6" textAnchor="middle">Compliance</text>
                    
                    <text x="340" y="75" fontSize="8" textAnchor="middle">+45.2%</text>
                    <text x="340" y="88" fontSize="6" textAnchor="middle">Automation</text>
                    
                    <text x="490" y="75" fontSize="8" textAnchor="middle">+23.1%</text>
                    <text x="490" y="88" fontSize="6" textAnchor="middle">Users</text>
                    
                    <text x="640" y="75" fontSize="8" textAnchor="middle">+67.8%</text>
                    <text x="640" y="88" fontSize="6" textAnchor="middle">Efficiency</text>
                    
                    <text x="790" y="75" fontSize="8" textAnchor="middle">LIVE</text>
                    <text x="790" y="88" fontSize="6" textAnchor="middle">Demo</text>
                  </g>
                  
                  {/* Connection lines */}
                  <g stroke="#e24e1b" strokeWidth="1.5" fill="none" opacity="0.4">
                    <path d="M190,110 Q240,120 290,110" className="animate-pulse"/>
                    <path d="M340,110 Q390,120 440,110" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                    <path d="M490,110 Q540,120 590,110" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                    <path d="M640,110 Q690,120 740,110" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
                  </g>
                  
                  {/* Interaction indicators */}
                  <g>
                    <circle cx="190" cy="130" r="3" fill="#06b6d4" className="animate-ping"/>
                    <circle cx="340" cy="130" r="3" fill="#06b6d4" className="animate-ping" style={{animationDelay: '0.3s'}}/>
                    <circle cx="490" cy="130" r="3" fill="#06b6d4" className="animate-ping" style={{animationDelay: '0.6s'}}/>
                    <circle cx="640" cy="130" r="3" fill="#06b6d4" className="animate-ping" style={{animationDelay: '0.9s'}}/>
                    <circle cx="790" cy="130" r="3" fill="#06b6d4" className="animate-ping" style={{animationDelay: '1.2s'}}/>
                  </g>
                </svg>
              </div>
            </div>

            {/* Dashboard → Security/Trust: Trust Network */}
            <div>
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Interactive Dashboard → Security & Trust</h3>
                <p className="text-gray-600">Übergang zu Sicherheitsfeatures und Vertrauen</p>
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                Trust & Security Network 🔐
              </h3>
              <div className="relative h-44 bg-gradient-to-r from-transparent via-emerald-50/20 to-transparent">
                <svg className="w-full h-full" viewBox="0 0 1200 176" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="trustGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.9"/>
                      <stop offset="30%" stopColor="#16a34a" stopOpacity="0.6"/>
                      <stop offset="70%" stopColor="#16a34a" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  
                  {/* Security pillars */}
                  <g>
                    <circle cx="200" cy="88" r="20" fill="url(#trustGlow)" className="animate-ping"/>
                    <circle cx="400" cy="88" r="18" fill="url(#trustGlow)" className="animate-ping" style={{animationDelay: '0.4s'}}/>
                    <circle cx="600" cy="88" r="22" fill="url(#trustGlow)" className="animate-ping" style={{animationDelay: '0.8s'}}/>
                    <circle cx="800" cy="88" r="19" fill="url(#trustGlow)" className="animate-ping" style={{animationDelay: '1.2s'}}/>
                    <circle cx="1000" cy="88" r="21" fill="url(#trustGlow)" className="animate-ping" style={{animationDelay: '1.6s'}}/>
                  </g>
                  
                  {/* Security labels */}
                  <g fill="#16a34a" opacity="0.9">
                    <text x="200" y="65" fontSize="8" textAnchor="middle">🔐</text>
                    <text x="200" y="110" fontSize="7" textAnchor="middle">AES-256</text>
                    
                    <text x="400" y="65" fontSize="8" textAnchor="middle">🇪🇺</text>
                    <text x="400" y="110" fontSize="7" textAnchor="middle">EU-DSGVO</text>
                    
                    <text x="600" y="65" fontSize="8" textAnchor="middle">👁️</text>
                    <text x="600" y="110" fontSize="7" textAnchor="middle">24/7 Monitor</text>
                    
                    <text x="800" y="65" fontSize="8" textAnchor="middle">🛡️</text>
                    <text x="800" y="110" fontSize="7" textAnchor="middle">Zero-Trust</text>
                    
                    <text x="1000" y="65" fontSize="8" textAnchor="middle">✓</text>
                    <text x="1000" y="110" fontSize="7" textAnchor="middle">ISO 27001</text>
                  </g>
                  
                  {/* Trust connections */}
                  <g stroke="#16a34a" strokeWidth="2" fill="none" opacity="0.5">
                    <path d="M220,88 Q310,70 380,88" className="animate-pulse"/>
                    <path d="M420,88 Q510,70 580,88" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                    <path d="M620,88 Q710,70 780,88" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                    <path d="M820,88 Q910,70 980,88" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
                  </g>
                  
                  {/* Security metrics */}
                  <g fill="#e24e1b" opacity="0.7">
                    <text x="200" y="130" fontSize="6" textAnchor="middle">99.99% Uptime</text>
                    <text x="400" y="130" fontSize="6" textAnchor="middle">5 EU Centers</text>
                    <text x="600" y="130" fontSize="6" textAnchor="middle">1.2M+ Blocked</text>
                    <text x="800" y="130" fontSize="6" textAnchor="middle">MFA Enabled</text>
                    <text x="1000" y="130" fontSize="6" textAnchor="middle">Certified</text>
                  </g>
                  
                  {/* Trust score indicator */}
                  <g transform="translate(500, 150)">
                    <rect x="0" y="0" width="200" height="15" rx="8" fill="#16a34a" opacity="0.2"/>
                    <rect x="0" y="0" width="180" height="15" rx="8" fill="#16a34a" opacity="0.8" className="animate-pulse"/>
                    <text x="100" y="10" fontSize="8" textAnchor="middle" fill="white">Trust Score: 100%</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* Security → FAQ: Knowledge Bridge */}
            <div>
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Security & Trust → FAQ</h3>
                <p className="text-gray-600">Übergang zu Wissensbereich und häufigen Fragen</p>
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                Knowledge Flow Network 💡
              </h3>
              <div className="relative h-40 bg-gradient-to-r from-transparent via-yellow-50/20 to-transparent">
                <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="knowledgeGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  
                  {/* Knowledge nodes */}
                  <g>
                    <circle cx="150" cy="80" r="15" fill="url(#knowledgeGlow)" className="animate-ping"/>
                    <circle cx="350" cy="80" r="12" fill="url(#knowledgeGlow)" className="animate-ping" style={{animationDelay: '0.5s'}}/>
                    <circle cx="550" cy="80" r="18" fill="url(#knowledgeGlow)" className="animate-ping" style={{animationDelay: '1s'}}/>
                    <circle cx="750" cy="80" r="14" fill="url(#knowledgeGlow)" className="animate-ping" style={{animationDelay: '1.5s'}}/>
                    <circle cx="950" cy="80" r="16" fill="url(#knowledgeGlow)" className="animate-ping" style={{animationDelay: '2s'}}/>
                  </g>
                  
                  {/* Knowledge categories */}
                  <g fill="#fbbf24" opacity="0.9">
                    <text x="150" y="60" fontSize="8" textAnchor="middle">💡</text>
                    <text x="150" y="100" fontSize="7" textAnchor="middle">Technisch</text>
                    
                    <text x="350" y="60" fontSize="8" textAnchor="middle">📋</text>
                    <text x="350" y="100" fontSize="7" textAnchor="middle">Compliance</text>
                    
                    <text x="550" y="60" fontSize="8" textAnchor="middle">🔒</text>
                    <text x="550" y="100" fontSize="7" textAnchor="middle">Sicherheit</text>
                    
                    <text x="750" y="60" fontSize="8" textAnchor="middle">💰</text>
                    <text x="750" y="100" fontSize="7" textAnchor="middle">Preise</text>
                    
                    <text x="950" y="60" fontSize="8" textAnchor="middle">❓</text>
                    <text x="950" y="100" fontSize="7" textAnchor="middle">FAQ</text>
                  </g>
                  
                  {/* Knowledge flow */}
                  <g stroke="#fbbf24" strokeWidth="1.5" fill="none" opacity="0.6">
                    <path d="M165,80 Q250,60 335,80" className="animate-pulse"/>
                    <path d="M365,80 Q450,60 535,80" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                    <path d="M565,80 Q650,60 735,80" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                    <path d="M765,80 Q850,60 935,80" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
                  </g>
                  
                  {/* FAQ counts */}
                  <g fill="#e24e1b" opacity="0.6">
                    <text x="150" y="120" fontSize="6" textAnchor="middle">4 Fragen</text>
                    <text x="350" y="120" fontSize="6" textAnchor="middle">2 Fragen</text>
                    <text x="550" y="120" fontSize="6" textAnchor="middle">1 Frage</text>
                    <text x="750" y="120" fontSize="6" textAnchor="middle">1 Frage</text>
                    <text x="950" y="120" fontSize="6" textAnchor="middle">8 Total</text>
                  </g>
                  
                  {/* 24/7 Support indicator */}
                  <g transform="translate(1050, 70)">
                    <circle cx="20" cy="20" r="15" fill="#16a34a" opacity="0.3" className="animate-ping"/>
                    <text x="20" y="25" fontSize="8" textAnchor="middle" fill="#16a34a">24/7</text>
                  </g>
                </svg>
              </div>
            </div>

            {/* FAQ → Newsletter: Engagement Bridge */}
            <div>
              <div className="mb-8 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">FAQ → Newsletter</h3>
                <p className="text-gray-600">Übergang zu Newsletter und Engagement</p>
              </div>
              
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                Smart Content Delivery 📧
              </h3>
              <div className="relative h-36 bg-gradient-to-r from-transparent via-purple-50/20 to-transparent">
                <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="contentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.3"/>
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Content streams */}
                  <g>
                    <rect x="150" y="50" width="60" height="15" rx="3" fill="url(#contentGrad)" className="animate-pulse">
                      <animateTransform attributeName="transform" type="translate" values="0,0;800,0;0,0" dur="8s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="150" y="75" width="50" height="15" rx="3" fill="url(#contentGrad)" className="animate-pulse" style={{animationDelay: '2s'}}>
                      <animateTransform attributeName="transform" type="translate" values="0,0;700,0;0,0" dur="7s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="150" y="100" width="70" height="15" rx="3" fill="url(#contentGrad)" className="animate-pulse" style={{animationDelay: '4s'}}>
                      <animateTransform attributeName="transform" type="translate" values="0,0;600,0;0,0" dur="6s" repeatCount="indefinite"/>
                    </rect>
                  </g>
                  
                  {/* Content type labels */}
                  <g fill="#8b5cf6" opacity="0.8">
                    <text x="50" y="60" fontSize="8">Insights</text>
                    <text x="50" y="85" fontSize="8">Alerts</text>
                    <text x="50" y="110" fontSize="8">Guides</text>
                  </g>
                  
                  {/* Delivery schedule */}
                  <g fill="#e24e1b" opacity="0.7">
                    <text x="1050" y="60" fontSize="7">Montags</text>
                    <text x="1050" y="85" fontSize="7">Bei Bedarf</text>
                    <text x="1050" y="110" fontSize="7">Monatlich</text>
                  </g>
                  
                  {/* AI personalization indicator */}
                  <g transform="translate(580, 50)">
                    <circle cx="20" cy="22" r="18" fill="#8b5cf6" opacity="0.2" className="animate-ping"/>
                    <text x="20" y="27" fontSize="8" textAnchor="middle" fill="#8b5cf6">KI</text>
                    <text x="20" y="40" fontSize="6" textAnchor="middle" fill="#8b5cf6">Powered</text>
                  </g>
                  
                  {/* DSGVO compliance */}
                  <g transform="translate(50, 125)">
                    <text fontSize="6" fill="#16a34a">DSGVO-konform • Jederzeit abmeldbar • Keine Weitergabe</text>
                  </g>
                </svg>
              </div>
            </div>

          </div>

          {/* Abstract Visual Separators - No Text */}
          <div className="mt-32 space-y-24">
            <div className="text-center mb-16">
              <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30 px-4 py-2 mb-4">
                Abstrakte Übergänge
              </Badge>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Rein Visuelle Separatoren
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Abstrakte, textfreie Übergänge basierend auf Formen, Animationen und Farbverläufen
              </p>
            </div>

            {/* 1. Abstract KI-Activation (Navigation → Hero) */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                1. Abstract KI-Activation ⚡
              </h3>
              <div className="relative h-32 overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="abstractActivation" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="1"/>
                      <stop offset="70%" stopColor="#ff6b3d" stopOpacity="0.4"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </radialGradient>
                    <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0"/>
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Abstract flowing lines */}
                  <g stroke="url(#flowGradient)" strokeWidth="3" fill="none">
                    <path d="M0,64 Q300,30 600,64 Q900,98 1200,64" className="animate-pulse">
                      <animate attributeName="stroke-dasharray" values="0,600;300,300;600,0" dur="4s" repeatCount="indefinite"/>
                    </path>
                    <path d="M0,64 Q300,98 600,64 Q900,30 1200,64" className="animate-pulse" style={{animationDelay: '2s'}}>
                      <animate attributeName="stroke-dasharray" values="0,600;300,300;600,0" dur="4s" repeatCount="indefinite"/>
                    </path>
                  </g>
                  
                  {/* Abstract energy nodes */}
                  <g>
                    <circle cx="200" cy="64" r="12" fill="url(#abstractActivation)" className="animate-ping">
                      <animate attributeName="r" values="12;20;12" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="600" cy="64" r="16" fill="url(#abstractActivation)" className="animate-ping" style={{animationDelay: '1s'}}>
                      <animate attributeName="r" values="16;24;16" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="1000" cy="64" r="12" fill="url(#abstractActivation)" className="animate-ping" style={{animationDelay: '2s'}}>
                      <animate attributeName="r" values="12;20;12" dur="3s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                  
                  {/* Floating particles */}
                  <g fill="#e24e1b" opacity="0.6">
                    <circle cx="350" cy="50" r="2" className="animate-bounce">
                      <animateMotion dur="6s" repeatCount="indefinite">
                        <mpath href="#abstractPath1"/>
                      </animateMotion>
                    </circle>
                    <circle cx="750" cy="78" r="3" className="animate-bounce" style={{animationDelay: '3s'}}>
                      <animateMotion dur="8s" repeatCount="indefinite">
                        <mpath href="#abstractPath2"/>
                      </animateMotion>
                    </circle>
                  </g>
                  
                  <defs>
                    <path id="abstractPath1" d="M200,64 Q450,30 600,64 Q850,98 1000,64" fill="none"/>
                    <path id="abstractPath2" d="M600,64 Q750,78 900,64 Q1050,50 1200,64" fill="none"/>
                  </defs>
                </svg>
              </div>
            </div>

            {/* 2. Abstract Data Flow (Hero → Dashboard) */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                2. Abstract Data Flow 📊
              </h3>
              <div className="relative h-28">
                <svg className="w-full h-full" viewBox="0 0 1200 112" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.2"/>
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.2"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Abstract data stream */}
                  <path d="M0,56 L1200,56" stroke="url(#dataGradient)" strokeWidth="4" opacity="0.6" className="animate-pulse"/>
                  
                  {/* Moving data blocks */}
                  <g>
                    <rect x="100" y="50" width="30" height="12" rx="6" fill="url(#dataGradient)" className="animate-pulse">
                      <animateTransform attributeName="transform" type="translate" values="0,0;1000,0;0,0" dur="8s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="200" y="50" width="20" height="12" rx="6" fill="url(#dataGradient)" className="animate-pulse" style={{animationDelay: '1.5s'}}>
                      <animateTransform attributeName="transform" type="translate" values="0,0;800,0;0,0" dur="6s" repeatCount="indefinite"/>
                    </rect>
                    <rect x="300" y="50" width="40" height="12" rx="6" fill="url(#dataGradient)" className="animate-pulse" style={{animationDelay: '3s'}}>
                      <animateTransform attributeName="transform" type="translate" values="0,0;600,0;0,0" dur="5s" repeatCount="indefinite"/>
                    </rect>
                  </g>
                  
                  {/* Abstract pulse points */}
                  <g>
                    <circle cx="200" cy="80" r="4" fill="#e24e1b" className="animate-ping"/>
                    <circle cx="500" cy="80" r="4" fill="#e24e1b" className="animate-ping" style={{animationDelay: '0.7s'}}/>
                    <circle cx="800" cy="80" r="4" fill="#e24e1b" className="animate-ping" style={{animationDelay: '1.4s'}}/>
                    <circle cx="1100" cy="80" r="4" fill="#e24e1b" className="animate-ping" style={{animationDelay: '2.1s'}}/>
                  </g>
                </svg>
              </div>
            </div>

            {/* 3. Abstract Transformation (Dashboard → Problem/Solution) */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                3. Abstract Transformation 🔄
              </h3>
              <div className="relative h-36">
                <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="transformGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#dc2626" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#16a34a" stopOpacity="0.8"/>
                    </linearGradient>
                    <radialGradient id="transformCenter" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.9"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  
                  {/* Abstract transformation wave */}
                  <path d="M0,72 Q300,40 600,72 Q900,104 1200,72" 
                        stroke="url(#transformGradient)" 
                        strokeWidth="6" 
                        fill="none" 
                        className="animate-pulse">
                    <animate attributeName="stroke-dasharray" values="0,800;400,400;800,0" dur="5s" repeatCount="indefinite"/>
                  </path>
                  
                  {/* Central transformation vortex */}
                  <circle cx="600" cy="72" r="25" fill="url(#transformCenter)" className="animate-ping">
                    <animate attributeName="r" values="25;35;25" dur="4s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Problem/solution indicators */}
                  <g>
                    <polygon points="150,72 130,52 130,92" fill="#dc2626" opacity="0.6" className="animate-pulse"/>
                    <polygon points="1050,72 1070,52 1070,92" fill="#16a34a" opacity="0.6" className="animate-pulse" style={{animationDelay: '2.5s'}}/>
                  </g>
                  
                  {/* Transformation particles */}
                  <g>
                    <circle cx="300" cy="56" r="2" fill="#dc2626" className="animate-bounce">
                      <animateMotion dur="4s" repeatCount="indefinite">
                        <mpath href="#transformPath"/>
                      </animateMotion>
                      <animate attributeName="fill" values="#dc2626;#e24e1b;#16a34a" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="900" cy="88" r="3" fill="#dc2626" className="animate-bounce" style={{animationDelay: '2s'}}>
                      <animateMotion dur="3s" repeatCount="indefinite">
                        <mpath href="#transformPath2"/>
                      </animateMotion>
                      <animate attributeName="fill" values="#dc2626;#e24e1b;#16a34a" dur="3s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                  
                  <defs>
                    <path id="transformPath" d="M150,72 Q375,40 600,72 Q825,104 1050,72" fill="none"/>
                    <path id="transformPath2" d="M600,72 Q750,88 900,72 Q1025,56 1050,72" fill="none"/>
                  </defs>
                </svg>
              </div>
            </div>

            {/* 4. Abstract Regulatory Bridge (Problem/Solution → DACH) */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                4. Abstract Regulatory Bridge 🌉
              </h3>
              <div className="relative h-32">
                <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="bridgeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.4"/>
                      <stop offset="33%" stopColor="#dc2626" stopOpacity="0.8"/>
                      <stop offset="66%" stopColor="#dc2626" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.4"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Bridge pillars */}
                  <g>
                    <rect x="350" y="30" width="12" height="68" rx="6" fill="url(#bridgeGradient)" className="animate-pulse"/>
                    <rect x="594" y="30" width="12" height="68" rx="6" fill="url(#bridgeGradient)" className="animate-pulse" style={{animationDelay: '0.7s'}}/>
                    <rect x="838" y="30" width="12" height="68" rx="6" fill="url(#bridgeGradient)" className="animate-pulse" style={{animationDelay: '1.4s'}}/>
                  </g>
                  
                  {/* Bridge connections */}
                  <g stroke="#e24e1b" strokeWidth="4" fill="none" opacity="0.6">
                    <path d="M362,64 Q478,54 594,64" className="animate-pulse"/>
                    <path d="M606,64 Q722,54 838,64" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                  </g>
                  
                  {/* Abstract regulatory symbols */}
                  <g fill="#e24e1b" opacity="0.8">
                    <circle cx="356" cy="20" r="6" className="animate-ping"/>
                    <circle cx="600" cy="20" r="6" className="animate-ping" style={{animationDelay: '0.7s'}}/>
                    <circle cx="844" cy="20" r="6" fill="#e24e1b" className="animate-ping" style={{animationDelay: '1.4s'}}/>
                  </g>
                  
                  {/* Connection flow */}
                  <g>
                    <circle cx="400" cy="64" r="2" fill="#dc2626" className="animate-bounce">
                      <animateMotion dur="6s" repeatCount="indefinite">
                        <mpath href="#bridgePath"/>
                      </animateMotion>
                    </circle>
                  </g>
                  
                  <defs>
                    <path id="bridgePath" d="M356,64 Q478,54 600,64 Q722,54 844,64" fill="none"/>
                  </defs>
                </svg>
              </div>
            </div>

            {/* 5. Abstract Security Matrix (DACH → ISO) */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                5. Abstract Security Matrix 🔒
              </h3>
              <div className="relative h-36">
                <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="securityGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="1"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </radialGradient>
                    <pattern id="securityGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                      <circle cx="20" cy="20" r="1" fill="#e24e1b" opacity="0.3"/>
                    </pattern>
                  </defs>
                  
                  {/* Security grid background */}
                  <rect width="1200" height="144" fill="url(#securityGrid)" opacity="0.4"/>
                  
                  {/* Security nodes */}
                  <g>
                    <circle cx="240" cy="72" r="18" fill="url(#securityGlow)" opacity="0.7" className="animate-ping"/>
                    <circle cx="480" cy="72" r="16" fill="url(#securityGlow)" opacity="0.7" className="animate-ping" style={{animationDelay: '0.4s'}}/>
                    <circle cx="720" cy="72" r="20" fill="url(#securityGlow)" opacity="0.7" className="animate-ping" style={{animationDelay: '0.8s'}}/>
                    <circle cx="960" cy="72" r="17" fill="url(#securityGlow)" opacity="0.7" className="animate-ping" style={{animationDelay: '1.2s'}}/>
                  </g>
                  
                  {/* Security connections */}
                  <g stroke="#e24e1b" strokeWidth="2" fill="none" opacity="0.5">
                    <line x1="258" y1="72" x2="462" y2="72" className="animate-pulse"/>
                    <line x1="498" y1="72" x2="702" y2="72" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                    <line x1="738" y1="72" x2="942" y2="72" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                  </g>
                  
                  {/* Abstract security barriers */}
                  <g stroke="#e24e1b" strokeWidth="1" fill="none" opacity="0.3">
                    <circle cx="240" cy="72" r="35" className="animate-pulse">
                      <animate attributeName="r" values="35;45;35" dur="3s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="720" cy="72" r="40" className="animate-pulse" style={{animationDelay: '1s'}}>
                      <animate attributeName="r" values="40;50;40" dur="2.5s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                </svg>
              </div>
            </div>

            {/* 6. Abstract AI Risk Spectrum (ISO → AI Act) */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                6. Abstract AI Risk Spectrum 🌈
              </h3>
              <div className="relative h-40">
                <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="riskSpectrum" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#dc2626" stopOpacity="0.9"/>
                      <stop offset="25%" stopColor="#ea580c" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.7"/>
                      <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#16a34a" stopOpacity="0.5"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Risk spectrum wave */}
                  <path d="M0,80 Q300,40 600,80 Q900,120 1200,80" 
                        stroke="url(#riskSpectrum)" 
                        strokeWidth="8" 
                        fill="none" 
                        className="animate-pulse"/>
                  
                  {/* Risk level indicators */}
                  <g>
                    <rect x="100" y="60" width="180" height="40" rx="20" fill="#dc2626" opacity="0.3" className="animate-pulse"/>
                    <rect x="320" y="65" width="140" height="30" rx="15" fill="#ea580c" opacity="0.3" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                    <rect x="500" y="70" width="100" height="20" rx="10" fill="#e24e1b" opacity="0.3" className="animate-pulse" style={{animationDelay: '1s'}}/>
                    <rect x="640" y="75" width="60" height="10" rx="5" fill="#16a34a" opacity="0.3" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
                  </g>
                  
                  {/* Abstract AI nodes */}
                  <g>
                    <circle cx="190" cy="80" r="8" fill="#dc2626" className="animate-ping"/>
                    <circle cx="390" cy="80" r="6" fill="#ea580c" className="animate-ping" style={{animationDelay: '0.3s'}}/>
                    <circle cx="550" cy="80" r="7" fill="#e24e1b" className="animate-ping" style={{animationDelay: '0.6s'}}/>
                    <circle cx="670" cy="80" r="5" fill="#16a34a" className="animate-ping" style={{animationDelay: '0.9s'}}/>
                  </g>
                  
                  {/* Timeline markers */}
                  <g fill="#e24e1b" opacity="0.6">
                    <rect x="898" y="120" width="2" height="20" className="animate-pulse"/>
                    <rect x="998" y="120" width="2" height="20" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                    <rect x="1098" y="120" width="2" height="20" className="animate-pulse" style={{animationDelay: '1s'}}/>
                  </g>
                </svg>
              </div>
            </div>

            {/* 7. Abstract Interactive Pulse (AI Act → Dashboard) */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                7. Abstract Interactive Pulse 🎛️
              </h3>
              <div className="relative h-32">
                <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="interactivePulse" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="1"/>
                      <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  
                  {/* Interactive elements */}
                  <g>
                    <rect x="180" y="54" width="60" height="20" rx="10" fill="url(#interactivePulse)" opacity="0.4" className="animate-pulse"/>
                    <rect x="320" y="54" width="60" height="20" rx="10" fill="url(#interactivePulse)" opacity="0.4" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                    <rect x="460" y="54" width="60" height="20" rx="10" fill="url(#interactivePulse)" opacity="0.4" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
                    <rect x="600" y="54" width="60" height="20" rx="10" fill="url(#interactivePulse)" opacity="0.4" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
                    <rect x="740" y="54" width="60" height="20" rx="10" fill="url(#interactivePulse)" opacity="0.4" className="animate-pulse" style={{animationDelay: '1.6s'}}/>
                  </g>
                  
                  {/* Connection waves */}
                  <g stroke="#06b6d4" strokeWidth="1.5" fill="none" opacity="0.5">
                    <path d="M210,84 Q265,94 320,84" className="animate-pulse"/>
                    <path d="M350,84 Q405,94 460,84" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                    <path d="M490,84 Q545,94 600,84" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                    <path d="M630,84 Q685,94 740,84" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
                  </g>
                  
                  {/* Interactive indicators */}
                  <g>
                    <circle cx="210" cy="100" r="3" fill="#06b6d4" className="animate-ping"/>
                    <circle cx="350" cy="100" r="3" fill="#06b6d4" className="animate-ping" style={{animationDelay: '0.4s'}}/>
                    <circle cx="490" cy="100" r="3" fill="#06b6d4" className="animate-ping" style={{animationDelay: '0.8s'}}/>
                    <circle cx="630" cy="100" r="3" fill="#06b6d4" className="animate-ping" style={{animationDelay: '1.2s'}}/>
                    <circle cx="770" cy="100" r="3" fill="#06b6d4" className="animate-ping" style={{animationDelay: '1.6s'}}/>
                  </g>
                </svg>
              </div>
            </div>

            {/* 8. Abstract Trust Network (Dashboard → Security) */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                8. Abstract Trust Network 🔐
              </h3>
              <div className="relative h-36">
                <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="trustNetwork" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.9"/>
                      <stop offset="30%" stopColor="#16a34a" stopOpacity="0.6"/>
                      <stop offset="70%" stopColor="#16a34a" stopOpacity="0.3"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  
                  {/* Trust nodes */}
                  <g>
                    <circle cx="200" cy="72" r="18" fill="url(#trustNetwork)" className="animate-ping"/>
                    <circle cx="400" cy="72" r="16" fill="url(#trustNetwork)" className="animate-ping" style={{animationDelay: '0.5s'}}/>
                    <circle cx="600" cy="72" r="20" fill="url(#trustNetwork)" className="animate-ping" style={{animationDelay: '1s'}}/>
                    <circle cx="800" cy="72" r="17" fill="url(#trustNetwork)" className="animate-ping" style={{animationDelay: '1.5s'}}/>
                    <circle cx="1000" cy="72" r="19" fill="url(#trustNetwork)" className="animate-ping" style={{animationDelay: '2s'}}/>
                  </g>
                  
                  {/* Trust connections */}
                  <g stroke="#16a34a" strokeWidth="2.5" fill="none" opacity="0.6">
                    <path d="M218,72 Q309,55 384,72" className="animate-pulse"/>
                    <path d="M416,72 Q508,55 584,72" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                    <path d="M620,72 Q710,55 783,72" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
                    <path d="M817,72 Q908,55 981,72" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
                  </g>
                  
                  {/* Security barriers */}
                  <g stroke="#16a34a" strokeWidth="1" fill="none" opacity="0.3">
                    <circle cx="200" cy="72" r="30" className="animate-pulse">
                      <animate attributeName="r" values="30;40;30" dur="4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="600" cy="72" r="35" className="animate-pulse" style={{animationDelay: '1.3s'}}>
                      <animate attributeName="r" values="35;45;35" dur="3.5s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="1000" cy="72" r="32" className="animate-pulse" style={{animationDelay: '2.6s'}}>
                      <animate attributeName="r" values="32;42;32" dur="4.2s" repeatCount="indefinite"/>
                    </circle>
                  </g>
                  
                  {/* Trust score bar */}
                  <rect x="450" y="120" width="300" height="8" rx="4" fill="#16a34a" opacity="0.3"/>
                  <rect x="450" y="120" width="270" height="8" rx="4" fill="#16a34a" opacity="0.8" className="animate-pulse"/>
                </svg>
              </div>
            </div>

            {/* 9. Abstract Knowledge Web (Security → FAQ) */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                9. Abstract Knowledge Web 🕸️
              </h3>
              <div className="relative h-32">
                <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                  <defs>
                    <radialGradient id="knowledgeWeb" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.8"/>
                      <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.6"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                    </radialGradient>
                  </defs>
                  
                  {/* Knowledge nodes */}
                  <g>
                    <circle cx="200" cy="64" r="12" fill="url(#knowledgeWeb)" className="animate-ping"/>
                    <circle cx="400" cy="64" r="10" fill="url(#knowledgeWeb)" className="animate-ping" style={{animationDelay: '0.6s'}}/>
                    <circle cx="600" cy="64" r="14" fill="url(#knowledgeWeb)" className="animate-ping" style={{animationDelay: '1.2s'}}/>
                    <circle cx="800" cy="64" r="11" fill="url(#knowledgeWeb)" className="animate-ping" style={{animationDelay: '1.8s'}}/>
                    <circle cx="1000" cy="64" r="13" fill="url(#knowledgeWeb)" className="animate-ping" style={{animationDelay: '2.4s'}}/>
                  </g>
                  
                  {/* Knowledge web connections */}
                  <g stroke="#fbbf24" strokeWidth="1.5" fill="none" opacity="0.6">
                    <path d="M212,64 Q306,50 388,64" className="animate-pulse"/>
                    <path d="M412,64 Q506,50 586,64" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                    <path d="M614,64 Q707,50 789,64" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
                    <path d="M811,64 Q905,50 987,64" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
                  </g>
                  
                  {/* Abstract knowledge indicators */}
                  <g fill="#fbbf24" opacity="0.4">
                    <polygon points="200,45 195,35 205,35" className="animate-pulse"/>
                    <polygon points="400,45 395,35 405,35" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                    <polygon points="600,45 595,35 605,35" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
                    <polygon points="800,45 795,35 805,35" className="animate-pulse" style={{animationDelay: '1.8s'}}/>
                    <polygon points="1000,45 995,35 1005,35" className="animate-pulse" style={{animationDelay: '2.4s'}}/>
                  </g>
                  
                  {/* 24/7 support indicator */}
                  <circle cx="1100" cy="64" r="20" fill="#16a34a" opacity="0.2" className="animate-ping" style={{animationDelay: '3s'}}/>
                </svg>
              </div>
            </div>

            {/* 10. Abstract Content Flow (FAQ → Newsletter) */}
            <div>
              <h3 className="text-xl font-medium text-gray-800 mb-6 text-center">
                10. Abstract Content Flow 🌊
              </h3>
              <div className="relative h-28">
                <svg className="w-full h-full" viewBox="0 0 1200 112" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="contentFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.3"/>
                      <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                      <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.3"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Content streams */}
                  <g>
                    <ellipse cx="200" cy="30" rx="40" ry="8" fill="url(#contentFlow)" className="animate-pulse">
                      <animateTransform attributeName="transform" type="translate" values="0,0;800,0;0,0" dur="10s" repeatCount="indefinite"/>
                    </ellipse>
                    <ellipse cx="200" cy="56" rx="35" ry="8" fill="url(#contentFlow)" className="animate-pulse" style={{animationDelay: '2s'}}>
                      <animateTransform attributeName="transform" type="translate" values="0,0;700,0;0,0" dur="8s" repeatCount="indefinite"/>
                    </ellipse>
                    <ellipse cx="200" cy="82" rx="45" ry="8" fill="url(#contentFlow)" className="animate-pulse" style={{animationDelay: '4s'}}>
                      <animateTransform attributeName="transform" type="translate" values="0,0;600,0;0,0" dur="7s" repeatCount="indefinite"/>
                    </ellipse>
                  </g>
                  
                  {/* AI personalization center */}
                  <circle cx="600" cy="56" r="25" fill="#8b5cf6" opacity="0.3" className="animate-ping">
                    <animate attributeName="r" values="25;35;25" dur="6s" repeatCount="indefinite"/>
                  </circle>
                  
                  {/* Delivery endpoints */}
                  <g fill="#e24e1b" opacity="0.6">
                    <rect x="1050" y="25" width="8" height="8" rx="2" className="animate-pulse"/>
                    <rect x="1050" y="51" width="8" height="8" rx="2" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                    <rect x="1050" y="77" width="8" height="8" rx="2" className="animate-pulse" style={{animationDelay: '1s'}}/>
                  </g>
                  
                  {/* GDPR compliance line */}
                  <line x1="100" y1="100" x2="1100" y2="100" stroke="#16a34a" strokeWidth="2" opacity="0.4" className="animate-pulse"/>
                </svg>
              </div>
            </div>

            {/* Abstract Separator Variations */}
            <div className="mt-32 border-t-4 border-brand-red/20 pt-16">
              <div className="text-center mb-16">
                <Badge className="bg-brand-red/20 text-brand-red border-brand-red/30 px-4 py-2 mb-4">
                  Separator Variationen
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Alternative Abstrakte Separatoren
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  3 Variationen für jeden der 10 abstrakten Übergänge - ohne Text, fokussiert auf visuelle Elemente
                </p>
              </div>

              {/* Variations for Abstract KI-Activation */}
              <div className="mb-24">
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  Variationen: KI-Activation ⚡
                </h3>
                
                {/* Variation 1: Neural Burst */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 1: Neural Burst
                  </h4>
                  <div className="relative h-32 overflow-hidden bg-gradient-to-r from-transparent via-orange-50/20 to-transparent">
                    <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                      <defs>
                        <radialGradient id="neuralBurst" cx="50%" cy="50%" r="40%">
                          <stop offset="0%" stopColor="#e24e1b" stopOpacity="1">
                            <animate attributeName="stopOpacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
                          </stop>
                          <stop offset="100%" stopColor="#ff6b3d" stopOpacity="0"/>
                        </radialGradient>
                      </defs>
                      
                      {/* Bursting neural connections */}
                      <g stroke="#e24e1b" strokeWidth="2" fill="none" opacity="0.6">
                        <path d="M600,64 L400,30 M600,64 L800,30 M600,64 L350,64 M600,64 L850,64 M600,64 L400,98 M600,64 L800,98" className="animate-pulse"/>
                      </g>
                      
                      {/* Central burst */}
                      <circle cx="600" cy="64" r="20" fill="url(#neuralBurst)" className="animate-ping"/>
                      
                      {/* Satellite nodes */}
                      <g fill="#e24e1b" opacity="0.8">
                        <circle cx="400" cy="30" r="6" className="animate-pulse"/>
                        <circle cx="800" cy="30" r="6" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                        <circle cx="350" cy="64" r="6" className="animate-pulse" style={{animationDelay: '1s'}}/>
                        <circle cx="850" cy="64" r="6" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
                        <circle cx="400" cy="98" r="6" className="animate-pulse" style={{animationDelay: '2s'}}/>
                        <circle cx="800" cy="98" r="6" className="animate-pulse" style={{animationDelay: '2.5s'}}/>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 2: Quantum Wave */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 2: Quantum Wave
                  </h4>
                  <div className="relative h-32 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="quantumGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#e24e1b" stopOpacity="0">
                            <animate attributeName="offset" values="0;0.2;0" dur="4s" repeatCount="indefinite"/>
                          </stop>
                          <stop offset="50%" stopColor="#e24e1b" stopOpacity="1">
                            <animate attributeName="offset" values="0.5;0.7;0.5" dur="4s" repeatCount="indefinite"/>
                          </stop>
                          <stop offset="100%" stopColor="#e24e1b" stopOpacity="0">
                            <animate attributeName="offset" values="1;0.8;1" dur="4s" repeatCount="indefinite"/>
                          </stop>
                        </linearGradient>
                      </defs>
                      
                      {/* Quantum interference pattern */}
                      <g opacity="0.6">
                        <ellipse cx="600" cy="64" rx="600" ry="30" fill="none" stroke="url(#quantumGrad)" strokeWidth="2" className="animate-pulse"/>
                        <ellipse cx="600" cy="64" rx="400" ry="20" fill="none" stroke="url(#quantumGrad)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                        <ellipse cx="600" cy="64" rx="200" ry="10" fill="none" stroke="url(#quantumGrad)" strokeWidth="2" className="animate-pulse" style={{animationDelay: '1s'}}/>
                      </g>
                      
                      {/* Quantum particles */}
                      <g fill="#e24e1b">
                        <circle cx="200" cy="64" r="2" opacity="0.8">
                          <animate attributeName="cy" values="64;44;64;84;64" dur="3s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="400" cy="64" r="2" opacity="0.8">
                          <animate attributeName="cy" values="64;84;64;44;64" dur="3s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="800" cy="64" r="2" opacity="0.8">
                          <animate attributeName="cy" values="64;44;64;84;64" dur="3s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="1000" cy="64" r="2" opacity="0.8">
                          <animate attributeName="cy" values="64;84;64;44;64" dur="3s" repeatCount="indefinite"/>
                        </circle>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 3: Synaptic Lightning */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 3: Synaptic Lightning
                  </h4>
                  <div className="relative h-32 overflow-hidden bg-gradient-to-r from-gray-900/5 to-gray-900/5">
                    <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                      <defs>
                        <filter id="lightningGlow">
                          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Lightning paths */}
                      <g stroke="#e24e1b" strokeWidth="1.5" fill="none" filter="url(#lightningGlow)">
                        <path d="M100,64 L250,44 L400,84 L550,54 L700,74 L850,44 L1000,64 L1100,54" opacity="0.8" className="animate-pulse">
                          <animate attributeName="stroke-width" values="1.5;3;1.5" dur="0.5s" repeatCount="indefinite"/>
                        </path>
                        <path d="M150,64 L300,84 L450,44 L600,74 L750,54 L900,84 L1050,64" opacity="0.6" className="animate-pulse" style={{animationDelay: '0.25s'}}>
                          <animate attributeName="stroke-width" values="1.5;3;1.5" dur="0.5s" repeatCount="indefinite"/>
                        </path>
                      </g>
                      
                      {/* Energy nodes */}
                      <g fill="#e24e1b">
                        <circle cx="250" cy="44" r="4" opacity="0.9" className="animate-ping"/>
                        <circle cx="550" cy="54" r="4" opacity="0.9" className="animate-ping" style={{animationDelay: '0.3s'}}/>
                        <circle cx="850" cy="44" r="4" opacity="0.9" className="animate-ping" style={{animationDelay: '0.6s'}}/>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Variations for Abstract Data Flow */}
              <div className="mb-24">
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  Variationen: Data Flow 📊
                </h3>
                
                {/* Variation 1: Binary Stream */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 1: Binary Stream
                  </h4>
                  <div className="relative h-28 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 112" preserveAspectRatio="none">
                      <defs>
                        <pattern id="binaryPattern" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                          <text x="0" y="15" fill="#e24e1b" opacity="0.3" fontSize="12" fontFamily="monospace">10110</text>
                        </pattern>
                      </defs>
                      
                      {/* Binary background */}
                      <rect width="1200" height="112" fill="url(#binaryPattern)" opacity="0.2"/>
                      
                      {/* Data packets */}
                      <g>
                        <rect x="50" y="46" width="60" height="20" rx="10" fill="#e24e1b" opacity="0.8">
                          <animateTransform attributeName="transform" type="translate" values="0,0;1100,0" dur="6s" repeatCount="indefinite"/>
                        </rect>
                        <rect x="50" y="46" width="40" height="20" rx="10" fill="#ff6b3d" opacity="0.6">
                          <animateTransform attributeName="transform" type="translate" values="0,0;1100,0" dur="5s" repeatCount="indefinite" begin="1s"/>
                        </rect>
                        <rect x="50" y="46" width="80" height="20" rx="10" fill="#e24e1b" opacity="0.7">
                          <animateTransform attributeName="transform" type="translate" values="0,0;1100,0" dur="7s" repeatCount="indefinite" begin="2s"/>
                        </rect>
                      </g>
                      
                      {/* Processing nodes */}
                      <g fill="#e24e1b" opacity="0.9">
                        <circle cx="300" cy="56" r="8" className="animate-pulse"/>
                        <circle cx="600" cy="56" r="8" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                        <circle cx="900" cy="56" r="8" className="animate-pulse" style={{animationDelay: '1s'}}/>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 2: Particle Pipeline */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 2: Particle Pipeline
                  </h4>
                  <div className="relative h-28 overflow-hidden bg-gradient-to-r from-transparent via-blue-50/10 to-transparent">
                    <svg className="w-full h-full" viewBox="0 0 1200 112" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="pipelineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.1"/>
                          <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.6"/>
                          <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.1"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Pipeline tubes */}
                      <rect x="0" y="41" width="1200" height="30" rx="15" fill="url(#pipelineGrad)" opacity="0.3"/>
                      <rect x="0" y="46" width="1200" height="20" rx="10" fill="none" stroke="#e24e1b" strokeWidth="2" opacity="0.4"/>
                      
                      {/* Flowing particles */}
                      <g>
                        {[...Array(8)].map((_, i) => (
                          <circle key={i} cx={150 * i} cy="56" r="3" fill="#e24e1b" opacity="0.8">
                            <animateTransform 
                              attributeName="transform" 
                              type="translate" 
                              values="0,0;150,0" 
                              dur="1s" 
                              repeatCount="indefinite"
                              begin={`${i * 0.125}s`}
                            />
                          </circle>
                        ))}
                      </g>
                      
                      {/* Processing indicators */}
                      <g stroke="#e24e1b" strokeWidth="2" fill="none" opacity="0.6">
                        <circle cx="400" cy="56" r="12" strokeDasharray="4,2" className="animate-pulse"/>
                        <circle cx="800" cy="56" r="12" strokeDasharray="4,2" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 3: Data Matrix */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 3: Data Matrix
                  </h4>
                  <div className="relative h-28 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 112" preserveAspectRatio="none">
                      <defs>
                        <pattern id="matrixGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <rect x="0" y="0" width="1" height="20" fill="#e24e1b" opacity="0.2"/>
                          <rect x="0" y="0" width="20" height="1" fill="#e24e1b" opacity="0.2"/>
                        </pattern>
                      </defs>
                      
                      {/* Matrix background */}
                      <rect width="1200" height="112" fill="url(#matrixGrid)"/>
                      
                      {/* Data cells */}
                      <g>
                        {[...Array(12)].map((_, i) => (
                          <rect 
                            key={i}
                            x={100 * i}
                            y="36"
                            width="40"
                            height="40"
                            rx="4"
                            fill="#e24e1b"
                            opacity="0"
                            className="animate-pulse"
                            style={{animationDelay: `${i * 0.2}s`, animationDuration: '2.4s'}}
                          >
                            <animate attributeName="opacity" values="0;0.6;0" dur="2.4s" repeatCount="indefinite" begin={`${i * 0.2}s`}/>
                          </rect>
                        ))}
                      </g>
                      
                      {/* Connection lines */}
                      <g stroke="#e24e1b" strokeWidth="1" fill="none" opacity="0.4">
                        <path d="M0,56 L1200,56" strokeDasharray="5,5">
                          <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
                        </path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Variations for Abstract Transformation */}
              <div className="mb-24">
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  Variationen: Transformation 🔄
                </h3>
                
                {/* Variation 1: Metamorphosis Wave */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 1: Metamorphosis Wave
                  </h4>
                  <div className="relative h-36 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="metamorphGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#dc2626" stopOpacity="0.8">
                            <animate attributeName="stopColor" values="#dc2626;#e24e1b;#dc2626" dur="4s" repeatCount="indefinite"/>
                          </stop>
                          <stop offset="50%" stopColor="#e24e1b" stopOpacity="1"/>
                          <stop offset="100%" stopColor="#16a34a" stopOpacity="0.8">
                            <animate attributeName="stopColor" values="#16a34a;#22c55e;#16a34a" dur="4s" repeatCount="indefinite"/>
                          </stop>
                        </linearGradient>
                      </defs>
                      
                      {/* Morphing shape */}
                      <path d="M0,72 Q300,30 600,72 Q900,114 1200,72" fill="none" stroke="url(#metamorphGrad)" strokeWidth="4">
                        <animate attributeName="d" 
                          values="M0,72 Q300,30 600,72 Q900,114 1200,72;
                                  M0,72 Q300,114 600,72 Q900,30 1200,72;
                                  M0,72 Q300,30 600,72 Q900,114 1200,72"
                          dur="6s" repeatCount="indefinite"/>
                      </path>
                      
                      {/* Transformation particles */}
                      <g>
                        <circle cx="150" cy="72" r="4" fill="#dc2626">
                          <animate attributeName="fill" values="#dc2626;#e24e1b;#16a34a;#e24e1b;#dc2626" dur="4s" repeatCount="indefinite"/>
                          <animateMotion dur="4s" repeatCount="indefinite">
                            <mpath href="#morphPath"/>
                          </animateMotion>
                        </circle>
                        <circle cx="450" cy="72" r="4" fill="#e24e1b">
                          <animate attributeName="fill" values="#e24e1b;#16a34a;#e24e1b;#dc2626;#e24e1b" dur="4s" repeatCount="indefinite"/>
                          <animateMotion dur="4s" repeatCount="indefinite" begin="1s">
                            <mpath href="#morphPath"/>
                          </animateMotion>
                        </circle>
                        <circle cx="750" cy="72" r="4" fill="#16a34a">
                          <animate attributeName="fill" values="#16a34a;#e24e1b;#dc2626;#e24e1b;#16a34a" dur="4s" repeatCount="indefinite"/>
                          <animateMotion dur="4s" repeatCount="indefinite" begin="2s">
                            <mpath href="#morphPath"/>
                          </animateMotion>
                        </circle>
                      </g>
                      
                      <defs>
                        <path id="morphPath" d="M0,72 Q300,30 600,72 Q900,114 1200,72" fill="none"/>
                      </defs>
                    </svg>
                  </div>
                </div>

                {/* Variation 2: Phase Shift */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 2: Phase Shift
                  </h4>
                  <div className="relative h-36 overflow-hidden bg-gradient-to-r from-red-50/10 via-transparent to-green-50/10">
                    <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                      <defs>
                        <clipPath id="phaseClip">
                          <rect x="0" y="0" width="600" height="144"/>
                        </clipPath>
                      </defs>
                      
                      {/* Phase 1 - Problem */}
                      <g clipPath="url(#phaseClip)">
                        <rect x="0" y="0" width="600" height="144" fill="#dc2626" opacity="0.1"/>
                        <circle cx="300" cy="72" r="60" fill="none" stroke="#dc2626" strokeWidth="2" opacity="0.6" className="animate-ping"/>
                      </g>
                      
                      {/* Phase 2 - Solution */}
                      <g>
                        <rect x="600" y="0" width="600" height="144" fill="#16a34a" opacity="0.1"/>
                        <circle cx="900" cy="72" r="60" fill="none" stroke="#16a34a" strokeWidth="2" opacity="0.6" className="animate-ping" style={{animationDelay: '1s'}}/>
                      </g>
                      
                      {/* Phase transition */}
                      <rect x="590" y="0" width="20" height="144" fill="url(#metamorphGrad)" opacity="0.8" className="animate-pulse"/>
                      
                      {/* Shifting elements */}
                      <g>
                        <polygon points="300,72 280,52 280,92" fill="#dc2626" opacity="0.8">
                          <animateTransform attributeName="transform" type="translate" values="0,0;600,0;0,0" dur="8s" repeatCount="indefinite"/>
                          <animate attributeName="fill" values="#dc2626;#e24e1b;#16a34a" dur="8s" repeatCount="indefinite"/>
                        </polygon>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 3: Conversion Spiral */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 3: Conversion Spiral
                  </h4>
                  <div className="relative h-36 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                      <defs>
                        <radialGradient id="spiralGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#e24e1b" stopOpacity="1"/>
                          <stop offset="50%" stopColor="#ff6b3d" stopOpacity="0.6"/>
                          <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                        </radialGradient>
                      </defs>
                      
                      {/* Spiral center */}
                      <circle cx="600" cy="72" r="30" fill="url(#spiralGrad)" opacity="0.6" className="animate-pulse"/>
                      
                      {/* Spiral arms */}
                      <g stroke="#e24e1b" strokeWidth="2" fill="none" opacity="0.8">
                        <path d="M600,72 Q650,50 700,72 Q750,94 800,72 Q850,50 900,72">
                          <animateTransform attributeName="transform" type="rotate" from="0 600 72" to="360 600 72" dur="8s" repeatCount="indefinite"/>
                        </path>
                        <path d="M600,72 Q550,94 500,72 Q450,50 400,72 Q350,94 300,72">
                          <animateTransform attributeName="transform" type="rotate" from="0 600 72" to="-360 600 72" dur="8s" repeatCount="indefinite"/>
                        </path>
                      </g>
                      
                      {/* Orbiting elements */}
                      <g>
                        <circle cx="650" cy="72" r="5" fill="#dc2626" opacity="0.8">
                          <animateTransform attributeName="transform" type="rotate" from="0 600 72" to="360 600 72" dur="4s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="550" cy="72" r="5" fill="#16a34a" opacity="0.8">
                          <animateTransform attributeName="transform" type="rotate" from="180 600 72" to="540 600 72" dur="4s" repeatCount="indefinite"/>
                        </circle>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Variations for Abstract Regulatory Bridge */}
              <div className="mb-24">
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  Variationen: Regulatory Bridge 🌉
                </h3>
                
                {/* Variation 1: Compliance Arch */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 1: Compliance Arch
                  </h4>
                  <div className="relative h-32 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="archGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.2"/>
                          <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.8"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Arch structure */}
                      <path d="M200,100 Q600,20 1000,100" fill="none" stroke="url(#archGrad)" strokeWidth="6" opacity="0.8"/>
                      <path d="M250,100 Q600,40 950,100" fill="none" stroke="#e24e1b" strokeWidth="3" opacity="0.4"/>
                      
                      {/* Support pillars */}
                      <g fill="url(#archGrad)">
                        <rect x="195" y="80" width="10" height="20" rx="5"/>
                        <rect x="595" y="20" width="10" height="80" rx="5"/>
                        <rect x="995" y="80" width="10" height="20" rx="5"/>
                      </g>
                      
                      {/* Flag markers */}
                      <g fill="#dc2626" opacity="0.8">
                        <polygon points="200,75 195,65 205,65" className="animate-pulse"/>
                        <polygon points="600,15 595,5 605,5" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                        <polygon points="1000,75 995,65 1005,65" className="animate-pulse" style={{animationDelay: '1s'}}/>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 2: Legal Gateway */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 2: Legal Gateway
                  </h4>
                  <div className="relative h-32 overflow-hidden bg-gradient-to-r from-transparent via-red-50/10 to-transparent">
                    <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                      <defs>
                        <pattern id="legalPattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                          <circle cx="10" cy="10" r="1" fill="#e24e1b" opacity="0.3"/>
                        </pattern>
                      </defs>
                      
                      {/* Gateway frame */}
                      <rect x="500" y="20" width="200" height="88" rx="10" fill="none" stroke="#e24e1b" strokeWidth="3" opacity="0.6"/>
                      <rect x="510" y="30" width="180" height="68" rx="5" fill="url(#legalPattern)" opacity="0.3"/>
                      
                      {/* Gateway doors */}
                      <rect x="540" y="40" width="50" height="48" rx="5" fill="#e24e1b" opacity="0.4" className="animate-pulse"/>
                      <rect x="610" y="40" width="50" height="48" rx="5" fill="#e24e1b" opacity="0.4" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                      
                      {/* Approaching elements */}
                      <g>
                        <circle cx="100" cy="64" r="4" fill="#dc2626" opacity="0.8">
                          <animateTransform attributeName="transform" type="translate" values="0,0;400,0;0,0" dur="6s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="1100" cy="64" r="4" fill="#16a34a" opacity="0.8">
                          <animateTransform attributeName="transform" type="translate" values="0,0;-400,0;0,0" dur="6s" repeatCount="indefinite"/>
                        </circle>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 3: Regulatory Network */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 3: Regulatory Network
                  </h4>
                  <div className="relative h-32 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                      <defs>
                        <radialGradient id="networkNode" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#e24e1b" stopOpacity="1"/>
                          <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
                        </radialGradient>
                      </defs>
                      
                      {/* Network connections */}
                      <g stroke="#e24e1b" strokeWidth="1.5" fill="none" opacity="0.4">
                        <path d="M200,64 L400,64 M400,64 L600,44 M400,64 L600,84 M600,44 L800,64 M600,84 L800,64 M800,64 L1000,64"/>
                      </g>
                      
                      {/* Network nodes */}
                      <g>
                        <circle cx="200" cy="64" r="12" fill="url(#networkNode)" opacity="0.8" className="animate-pulse"/>
                        <circle cx="400" cy="64" r="14" fill="url(#networkNode)" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                        <circle cx="600" cy="44" r="10" fill="url(#networkNode)" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                        <circle cx="600" cy="84" r="10" fill="url(#networkNode)" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
                        <circle cx="800" cy="64" r="14" fill="url(#networkNode)" opacity="0.8" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
                        <circle cx="1000" cy="64" r="12" fill="url(#networkNode)" opacity="0.8" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
                      </g>
                      
                      {/* Data flow */}
                      <g fill="#e24e1b" opacity="0.6">
                        <circle cx="300" cy="64" r="2">
                          <animate attributeName="cx" values="200;400;200" dur="4s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="700" cy="64" r="2">
                          <animate attributeName="cx" values="600;800;600" dur="4s" repeatCount="indefinite" begin="2s"/>
                        </circle>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Variations for Abstract Security Matrix */}
              <div className="mb-24">
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  Variationen: Security Matrix 🔒
                </h3>
                
                {/* Variation 1: Firewall Grid */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 1: Firewall Grid
                  </h4>
                  <div className="relative h-36 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                      <defs>
                        <pattern id="firewallGrid" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                          <rect x="0" y="0" width="60" height="60" fill="none" stroke="#e24e1b" strokeWidth="1" opacity="0.2"/>
                          <rect x="10" y="10" width="40" height="40" fill="#e24e1b" opacity="0.1" className="animate-pulse"/>
                        </pattern>
                      </defs>
                      
                      {/* Grid background */}
                      <rect width="1200" height="144" fill="url(#firewallGrid)"/>
                      
                      {/* Active firewall zones */}
                      <g>
                        <rect x="240" y="42" width="120" height="60" rx="5" fill="none" stroke="#e24e1b" strokeWidth="2" opacity="0.8" className="animate-pulse"/>
                        <rect x="540" y="42" width="120" height="60" rx="5" fill="none" stroke="#e24e1b" strokeWidth="2" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                        <rect x="840" y="42" width="120" height="60" rx="5" fill="none" stroke="#e24e1b" strokeWidth="2" opacity="0.8" className="animate-pulse" style={{animationDelay: '1s'}}/>
                      </g>
                      
                      {/* Scanning beams */}
                      <g stroke="#e24e1b" strokeWidth="2" opacity="0.6">
                        <line x1="0" y1="72" x2="40" y2="72">
                          <animate attributeName="x1" values="0;1160;0" dur="8s" repeatCount="indefinite"/>
                          <animate attributeName="x2" values="40;1200;40" dur="8s" repeatCount="indefinite"/>
                        </line>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 2: Shield Array */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 2: Shield Array
                  </h4>
                  <div className="relative h-36 overflow-hidden bg-gradient-to-r from-transparent via-green-50/10 to-transparent">
                    <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="#16a34a" stopOpacity="0.4"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Shield shapes */}
                      <g>
                        <path d="M300,52 L280,72 L300,92 L320,72 Z" fill="url(#shieldGrad)" className="animate-pulse"/>
                        <path d="M500,52 L480,72 L500,92 L520,72 Z" fill="url(#shieldGrad)" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                        <path d="M700,52 L680,72 L700,92 L720,72 Z" fill="url(#shieldGrad)" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
                        <path d="M900,52 L880,72 L900,92 L920,72 Z" fill="url(#shieldGrad)" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
                      </g>
                      
                      {/* Protection waves */}
                      <g fill="none" stroke="#16a34a" strokeWidth="1" opacity="0.4">
                        <circle cx="300" cy="72" r="30" className="animate-ping"/>
                        <circle cx="500" cy="72" r="30" className="animate-ping" style={{animationDelay: '0.4s'}}/>
                        <circle cx="700" cy="72" r="30" className="animate-ping" style={{animationDelay: '0.8s'}}/>
                        <circle cx="900" cy="72" r="30" className="animate-ping" style={{animationDelay: '1.2s'}}/>
                      </g>
                      
                      {/* Connection lines */}
                      <g stroke="#e24e1b" strokeWidth="1" fill="none" opacity="0.6" strokeDasharray="5,5">
                        <path d="M320,72 L480,72 M520,72 L680,72 M720,72 L880,72"/>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 3: Encryption Lattice */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 3: Encryption Lattice
                  </h4>
                  <div className="relative h-36 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                      <defs>
                        <pattern id="latticePattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                          <path d="M20,0 L40,20 L20,40 L0,20 Z" fill="none" stroke="#e24e1b" strokeWidth="0.5" opacity="0.3"/>
                        </pattern>
                      </defs>
                      
                      {/* Lattice background */}
                      <rect width="1200" height="144" fill="url(#latticePattern)"/>
                      
                      {/* Encryption nodes */}
                      <g>
                        <g transform="translate(300,72)">
                          <rect x="-20" y="-20" width="40" height="40" fill="#e24e1b" opacity="0.3" transform="rotate(45)" className="animate-pulse"/>
                          <circle cx="0" cy="0" r="8" fill="#e24e1b" opacity="0.8"/>
                        </g>
                        <g transform="translate(600,72)">
                          <rect x="-20" y="-20" width="40" height="40" fill="#e24e1b" opacity="0.3" transform="rotate(45)" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                          <circle cx="0" cy="0" r="8" fill="#e24e1b" opacity="0.8"/>
                        </g>
                        <g transform="translate(900,72)">
                          <rect x="-20" y="-20" width="40" height="40" fill="#e24e1b" opacity="0.3" transform="rotate(45)" className="animate-pulse" style={{animationDelay: '1s'}}/>
                          <circle cx="0" cy="0" r="8" fill="#e24e1b" opacity="0.8"/>
                        </g>
                      </g>
                      
                      {/* Data encryption flow */}
                      <g stroke="#e24e1b" strokeWidth="2" fill="none" opacity="0.6">
                        <path d="M300,72 L600,72 L900,72" strokeDasharray="10,5">
                          <animate attributeName="stroke-dashoffset" from="0" to="15" dur="1s" repeatCount="indefinite"/>
                        </path>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Variations for Abstract AI Risk Spectrum */}
              <div className="mb-24">
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  Variationen: AI Risk Spectrum 🌈
                </h3>
                
                {/* Variation 1: Risk Gradient Bar */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 1: Risk Gradient Bar
                  </h4>
                  <div className="relative h-40 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="riskBar" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#dc2626" stopOpacity="1"/>
                          <stop offset="33%" stopColor="#ea580c" stopOpacity="0.9"/>
                          <stop offset="66%" stopColor="#f59e0b" stopOpacity="0.7"/>
                          <stop offset="100%" stopColor="#16a34a" stopOpacity="0.6"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Main risk bar */}
                      <rect x="100" y="60" width="1000" height="40" rx="20" fill="url(#riskBar)" opacity="0.8"/>
                      
                      {/* Risk indicators */}
                      <g>
                        <rect x="150" y="50" width="4" height="60" rx="2" fill="#dc2626" className="animate-pulse"/>
                        <rect x="400" y="50" width="4" height="60" rx="2" fill="#ea580c" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                        <rect x="700" y="50" width="4" height="60" rx="2" fill="#f59e0b" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                        <rect x="1000" y="50" width="4" height="60" rx="2" fill="#16a34a" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
                      </g>
                      
                      {/* Moving scanner */}
                      <rect x="100" y="55" width="2" height="50" fill="#fff" opacity="0.8">
                        <animate attributeName="x" values="100;1100;100" dur="6s" repeatCount="indefinite"/>
                      </rect>
                      
                      {/* Risk level markers */}
                      <g fill="#e24e1b" opacity="0.6">
                        <circle cx="250" cy="130" r="3" className="animate-ping"/>
                        <circle cx="550" cy="130" r="3" className="animate-ping" style={{animationDelay: '0.5s'}}/>
                        <circle cx="850" cy="130" r="3" className="animate-ping" style={{animationDelay: '1s'}}/>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 2: Risk Radar */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 2: Risk Radar
                  </h4>
                  <div className="relative h-40 overflow-hidden bg-gradient-to-r from-transparent via-orange-50/10 to-transparent">
                    <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
                      <defs>
                        <radialGradient id="radarGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.3"/>
                          <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.5"/>
                          <stop offset="100%" stopColor="#dc2626" stopOpacity="0.8"/>
                        </radialGradient>
                      </defs>
                      
                      {/* Radar circles */}
                      <g transform="translate(600,80)">
                        <circle cx="0" cy="0" r="60" fill="none" stroke="#e24e1b" strokeWidth="1" opacity="0.3"/>
                        <circle cx="0" cy="0" r="40" fill="none" stroke="#e24e1b" strokeWidth="1" opacity="0.5"/>
                        <circle cx="0" cy="0" r="20" fill="none" stroke="#e24e1b" strokeWidth="1" opacity="0.7"/>
                        
                        {/* Radar sweep */}
                        <line x1="0" y1="0" x2="60" y2="0" stroke="#e24e1b" strokeWidth="2" opacity="0.8">
                          <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="4s" repeatCount="indefinite"/>
                        </line>
                        
                        {/* Risk blips */}
                        <circle cx="30" cy="-15" r="4" fill="#dc2626" opacity="0.8" className="animate-ping"/>
                        <circle cx="-25" cy="20" r="3" fill="#f59e0b" opacity="0.7" className="animate-ping" style={{animationDelay: '1s'}}/>
                        <circle cx="15" cy="10" r="2" fill="#16a34a" opacity="0.6" className="animate-ping" style={{animationDelay: '2s'}}/>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 3: Risk Wave Analysis */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 3: Risk Wave Analysis
                  </h4>
                  <div className="relative h-40 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="waveRisk" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#dc2626" stopOpacity="0.8"/>
                          <stop offset="50%" stopColor="#e24e1b" stopOpacity="1"/>
                          <stop offset="100%" stopColor="#16a34a" stopOpacity="0.6"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Risk wave */}
                      <path d="M0,80 Q150,40 300,80 T600,80 Q750,120 900,80 T1200,80" 
                            stroke="url(#waveRisk)" 
                            strokeWidth="4" 
                            fill="none"
                            className="animate-pulse">
                        <animate attributeName="d" 
                          values="M0,80 Q150,40 300,80 T600,80 Q750,120 900,80 T1200,80;
                                  M0,80 Q150,120 300,80 T600,80 Q750,40 900,80 T1200,80;
                                  M0,80 Q150,40 300,80 T600,80 Q750,120 900,80 T1200,80"
                          dur="6s" repeatCount="indefinite"/>
                      </path>
                      
                      {/* Risk threshold lines */}
                      <g stroke="#e24e1b" strokeWidth="1" opacity="0.3" strokeDasharray="10,5">
                        <line x1="0" y1="40" x2="1200" y2="40"/>
                        <line x1="0" y1="80" x2="1200" y2="80"/>
                        <line x1="0" y1="120" x2="1200" y2="120"/>
                      </g>
                      
                      {/* Analysis points */}
                      <g fill="#e24e1b">
                        <circle cx="300" cy="80" r="6" opacity="0.8" className="animate-pulse"/>
                        <circle cx="600" cy="80" r="6" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                        <circle cx="900" cy="80" r="6" opacity="0.8" className="animate-pulse" style={{animationDelay: '1s'}}/>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Variations for Abstract Interactive Pulse */}
              <div className="mb-24">
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  Variationen: Interactive Pulse 🎛️
                </h3>
                
                {/* Variation 1: Control Panel */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 1: Control Panel
                  </h4>
                  <div className="relative h-32 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="controlGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.4"/>
                          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.4"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Control sliders */}
                      <g>
                        <rect x="200" y="55" width="100" height="18" rx="9" fill="#e24e1b" opacity="0.2"/>
                        <rect x="200" y="55" width="70" height="18" rx="9" fill="url(#controlGrad)" className="animate-pulse"/>
                        
                        <rect x="350" y="55" width="100" height="18" rx="9" fill="#e24e1b" opacity="0.2"/>
                        <rect x="350" y="55" width="40" height="18" rx="9" fill="url(#controlGrad)" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                        
                        <rect x="500" y="55" width="100" height="18" rx="9" fill="#e24e1b" opacity="0.2"/>
                        <rect x="500" y="55" width="85" height="18" rx="9" fill="url(#controlGrad)" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                        
                        <rect x="650" y="55" width="100" height="18" rx="9" fill="#e24e1b" opacity="0.2"/>
                        <rect x="650" y="55" width="55" height="18" rx="9" fill="url(#controlGrad)" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
                        
                        <rect x="800" y="55" width="100" height="18" rx="9" fill="#e24e1b" opacity="0.2"/>
                        <rect x="800" y="55" width="90" height="18" rx="9" fill="url(#controlGrad)" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
                      </g>
                      
                      {/* Control knobs */}
                      <g fill="#06b6d4">
                        <circle cx="270" cy="64" r="6" className="animate-bounce" style={{animationDuration: '2s'}}/>
                        <circle cx="390" cy="64" r="6" className="animate-bounce" style={{animationDuration: '2s', animationDelay: '0.3s'}}/>
                        <circle cx="585" cy="64" r="6" className="animate-bounce" style={{animationDuration: '2s', animationDelay: '0.6s'}}/>
                        <circle cx="705" cy="64" r="6" className="animate-bounce" style={{animationDuration: '2s', animationDelay: '0.9s'}}/>
                        <circle cx="890" cy="64" r="6" className="animate-bounce" style={{animationDuration: '2s', animationDelay: '1.2s'}}/>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 2: Touch Interface */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 2: Touch Interface
                  </h4>
                  <div className="relative h-32 overflow-hidden bg-gradient-to-r from-transparent via-cyan-50/10 to-transparent">
                    <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                      <defs>
                        <radialGradient id="touchGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
                        </radialGradient>
                      </defs>
                      
                      {/* Touch points */}
                      <g>
                        <circle cx="240" cy="64" r="20" fill="url(#touchGrad)" className="animate-ping"/>
                        <circle cx="240" cy="64" r="8" fill="#06b6d4" opacity="0.8"/>
                        
                        <circle cx="480" cy="64" r="20" fill="url(#touchGrad)" className="animate-ping" style={{animationDelay: '0.4s'}}/>
                        <circle cx="480" cy="64" r="8" fill="#06b6d4" opacity="0.8"/>
                        
                        <circle cx="720" cy="64" r="20" fill="url(#touchGrad)" className="animate-ping" style={{animationDelay: '0.8s'}}/>
                        <circle cx="720" cy="64" r="8" fill="#06b6d4" opacity="0.8"/>
                        
                        <circle cx="960" cy="64" r="20" fill="url(#touchGrad)" className="animate-ping" style={{animationDelay: '1.2s'}}/>
                        <circle cx="960" cy="64" r="8" fill="#06b6d4" opacity="0.8"/>
                      </g>
                      
                      {/* Connection ripples */}
                      <g stroke="#06b6d4" strokeWidth="1" fill="none" opacity="0.4">
                        <path d="M240,64 Q360,54 480,64" className="animate-pulse"/>
                        <path d="M480,64 Q600,54 720,64" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                        <path d="M720,64 Q840,54 960,64" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 3: Gesture Flow */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 3: Gesture Flow
                  </h4>
                  <div className="relative h-32 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="gestureGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#06b6d4" stopOpacity="0"/>
                          <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Gesture paths */}
                      <g stroke="url(#gestureGrad)" strokeWidth="3" fill="none">
                        <path d="M100,64 Q300,44 500,64 Q700,84 900,64 Q1050,44 1100,64">
                          <animate attributeName="stroke-dasharray" values="0,1200;600,600;1200,0" dur="4s" repeatCount="indefinite"/>
                        </path>
                      </g>
                      
                      {/* Gesture indicators */}
                      <g>
                        <circle cx="100" cy="64" r="4" fill="#06b6d4" opacity="0.8">
                          <animateMotion dur="4s" repeatCount="indefinite">
                            <mpath href="#gesturePath"/>
                          </animateMotion>
                        </circle>
                        <circle cx="300" cy="44" r="3" fill="#e24e1b" opacity="0.6">
                          <animateMotion dur="4s" repeatCount="indefinite" begin="1s">
                            <mpath href="#gesturePath"/>
                          </animateMotion>
                        </circle>
                        <circle cx="700" cy="84" r="3" fill="#06b6d4" opacity="0.6">
                          <animateMotion dur="4s" repeatCount="indefinite" begin="2s">
                            <mpath href="#gesturePath"/>
                          </animateMotion>
                        </circle>
                      </g>
                      
                      <defs>
                        <path id="gesturePath" d="M100,64 Q300,44 500,64 Q700,84 900,64 Q1050,44 1100,64" fill="none"/>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Variations for Abstract Trust Network */}
              <div className="mb-24">
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  Variationen: Trust Network 🔐
                </h3>
                
                {/* Variation 1: Trust Chain */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 1: Trust Chain
                  </h4>
                  <div className="relative h-36 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="trustChainGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.3"/>
                          <stop offset="50%" stopColor="#16a34a" stopOpacity="0.9"/>
                          <stop offset="100%" stopColor="#16a34a" stopOpacity="0.3"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Chain links */}
                      <g stroke="url(#trustChainGrad)" strokeWidth="3" fill="none">
                        <ellipse cx="200" cy="72" rx="40" ry="25" className="animate-pulse"/>
                        <ellipse cx="280" cy="72" rx="40" ry="25" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
                        <ellipse cx="440" cy="72" rx="40" ry="25" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                        <ellipse cx="520" cy="72" rx="40" ry="25" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                        <ellipse cx="680" cy="72" rx="40" ry="25" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
                        <ellipse cx="760" cy="72" rx="40" ry="25" className="animate-pulse" style={{animationDelay: '1s'}}/>
                        <ellipse cx="920" cy="72" rx="40" ry="25" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
                        <ellipse cx="1000" cy="72" rx="40" ry="25" className="animate-pulse" style={{animationDelay: '1.4s'}}/>
                      </g>
                      
                      {/* Trust nodes */}
                      <g fill="#16a34a" opacity="0.8">
                        <circle cx="240" cy="72" r="8" className="animate-ping"/>
                        <circle cx="480" cy="72" r="8" className="animate-ping" style={{animationDelay: '0.5s'}}/>
                        <circle cx="720" cy="72" r="8" className="animate-ping" style={{animationDelay: '1s'}}/>
                        <circle cx="960" cy="72" r="8" className="animate-ping" style={{animationDelay: '1.5s'}}/>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 2: Trust Shield Network */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 2: Trust Shield Network
                  </h4>
                  <div className="relative h-36 overflow-hidden bg-gradient-to-r from-transparent via-green-50/10 to-transparent">
                    <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                      <defs>
                        <radialGradient id="shieldTrust" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#16a34a" stopOpacity="0.9"/>
                          <stop offset="70%" stopColor="#16a34a" stopOpacity="0.4"/>
                          <stop offset="100%" stopColor="#16a34a" stopOpacity="0"/>
                        </radialGradient>
                      </defs>
                      
                      {/* Shield hexagons */}
                      <g fill="url(#shieldTrust)" stroke="#16a34a" strokeWidth="1" opacity="0.6">
                        <polygon points="250,52 270,72 250,92 210,92 190,72 210,52" className="animate-pulse"/>
                        <polygon points="450,52 470,72 450,92 410,92 390,72 410,52" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                        <polygon points="650,52 670,72 650,92 610,92 590,72 610,52" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                        <polygon points="850,52 870,72 850,92 810,92 790,72 810,52" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
                      </g>
                      
                      {/* Trust connections */}
                      <g stroke="#16a34a" strokeWidth="2" fill="none" opacity="0.4">
                        <path d="M270,72 L390,72 M470,72 L590,72 M670,72 L790,72"/>
                      </g>
                      
                      {/* Trust indicators */}
                      <g fill="#16a34a">
                        <circle cx="230" cy="72" r="4" opacity="0.9" className="animate-ping"/>
                        <circle cx="430" cy="72" r="4" opacity="0.9" className="animate-ping" style={{animationDelay: '0.5s'}}/>
                        <circle cx="630" cy="72" r="4" opacity="0.9" className="animate-ping" style={{animationDelay: '1s'}}/>
                        <circle cx="830" cy="72" r="4" opacity="0.9" className="animate-ping" style={{animationDelay: '1.5s'}}/>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 3: Trust Verification Flow */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 3: Trust Verification Flow
                  </h4>
                  <div className="relative h-36 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="verifyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.6"/>
                          <stop offset="100%" stopColor="#16a34a" stopOpacity="0.9"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Verification pipeline */}
                      <rect x="100" y="62" width="1000" height="20" rx="10" fill="url(#verifyGrad)" opacity="0.3"/>
                      
                      {/* Verification stages */}
                      <g>
                        <circle cx="200" cy="72" r="16" fill="#e24e1b" opacity="0.4" className="animate-pulse"/>
                        <circle cx="200" cy="72" r="8" fill="#e24e1b" opacity="0.8"/>
                        
                        <circle cx="450" cy="72" r="16" fill="#f59e0b" opacity="0.4" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                        <circle cx="450" cy="72" r="8" fill="#f59e0b" opacity="0.8"/>
                        
                        <circle cx="700" cy="72" r="16" fill="#eab308" opacity="0.4" className="animate-pulse" style={{animationDelay: '1s'}}/>
                        <circle cx="700" cy="72" r="8" fill="#eab308" opacity="0.8"/>
                        
                        <circle cx="950" cy="72" r="16" fill="#16a34a" opacity="0.4" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
                        <circle cx="950" cy="72" r="8" fill="#16a34a" opacity="0.8"/>
                      </g>
                      
                      {/* Verification flow */}
                      <g>
                        <circle cx="150" cy="72" r="3" fill="#fff" opacity="0.8">
                          <animateTransform attributeName="transform" type="translate" values="0,0;800,0;0,0" dur="6s" repeatCount="indefinite"/>
                        </circle>
                      </g>
                      
                      {/* Trust score increase */}
                      <rect x="500" y="120" width="200" height="6" rx="3" fill="#16a34a" opacity="0.3"/>
                      <rect x="500" y="120" width="0" height="6" rx="3" fill="#16a34a" opacity="0.8">
                        <animate attributeName="width" values="0;200;0" dur="6s" repeatCount="indefinite"/>
                      </rect>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Variations for Abstract Knowledge Web */}
              <div className="mb-24">
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  Variationen: Knowledge Web 🕸️
                </h3>
                
                {/* Variation 1: Neural Knowledge Map */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 1: Neural Knowledge Map
                  </h4>
                  <div className="relative h-32 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                      <defs>
                        <radialGradient id="knowledgeNode" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#fbbf24" stopOpacity="1"/>
                          <stop offset="100%" stopColor="#fbbf24" stopOpacity="0"/>
                        </radialGradient>
                      </defs>
                      
                      {/* Knowledge connections */}
                      <g stroke="#fbbf24" strokeWidth="1" fill="none" opacity="0.4">
                        <path d="M200,64 L350,40 M200,64 L350,88 M350,40 L500,64 M350,88 L500,64 M500,64 L650,30 M500,64 L650,98 M650,30 L800,64 M650,98 L800,64 M800,64 L950,50 M800,64 L950,78"/>
                      </g>
                      
                      {/* Primary knowledge nodes */}
                      <g>
                        <circle cx="200" cy="64" r="12" fill="url(#knowledgeNode)" opacity="0.8" className="animate-pulse"/>
                        <circle cx="500" cy="64" r="14" fill="url(#knowledgeNode)" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                        <circle cx="800" cy="64" r="12" fill="url(#knowledgeNode)" opacity="0.8" className="animate-pulse" style={{animationDelay: '1s'}}/>
                      </g>
                      
                      {/* Secondary knowledge nodes */}
                      <g fill="#fbbf24" opacity="0.6">
                        <circle cx="350" cy="40" r="6" className="animate-ping" style={{animationDelay: '0.2s'}}/>
                        <circle cx="350" cy="88" r="6" className="animate-ping" style={{animationDelay: '0.4s'}}/>
                        <circle cx="650" cy="30" r="6" className="animate-ping" style={{animationDelay: '0.6s'}}/>
                        <circle cx="650" cy="98" r="6" className="animate-ping" style={{animationDelay: '0.8s'}}/>
                        <circle cx="950" cy="50" r="6" className="animate-ping" style={{animationDelay: '1s'}}/>
                        <circle cx="950" cy="78" r="6" className="animate-ping" style={{animationDelay: '1.2s'}}/>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 2: Knowledge Constellation */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 2: Knowledge Constellation
                  </h4>
                  <div className="relative h-32 overflow-hidden bg-gradient-to-r from-transparent via-amber-50/10 to-transparent">
                    <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                      <defs>
                        <filter id="starGlow">
                          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
                          <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                          </feMerge>
                        </filter>
                      </defs>
                      
                      {/* Constellation connections */}
                      <g stroke="#fbbf24" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="2,4">
                        <path d="M150,80 L280,50 L400,70 L520,40 L650,65 L780,45 L900,75 L1050,55"/>
                      </g>
                      
                      {/* Knowledge stars */}
                      <g fill="#fbbf24" filter="url(#starGlow)">
                        <circle cx="150" cy="80" r="3" opacity="0.9" className="animate-pulse"/>
                        <circle cx="280" cy="50" r="4" opacity="1" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
                        <circle cx="400" cy="70" r="3" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
                        <circle cx="520" cy="40" r="5" opacity="1" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                        <circle cx="650" cy="65" r="3" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
                        <circle cx="780" cy="45" r="4" opacity="0.9" className="animate-pulse" style={{animationDelay: '1s'}}/>
                        <circle cx="900" cy="75" r="3" opacity="0.8" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
                        <circle cx="1050" cy="55" r="4" opacity="0.9" className="animate-pulse" style={{animationDelay: '1.4s'}}/>
                      </g>
                      
                      {/* Twinkling effect */}
                      <g fill="#fff" opacity="0.8">
                        <circle cx="520" cy="40" r="1">
                          <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="780" cy="45" r="1">
                          <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite" begin="1s"/>
                        </circle>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 3: Knowledge Mesh */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 3: Knowledge Mesh
                  </h4>
                  <div className="relative h-32 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
                      <defs>
                        <pattern id="meshPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                          <polygon points="30,0 60,30 30,60 0,30" fill="none" stroke="#fbbf24" strokeWidth="0.5" opacity="0.3"/>
                        </pattern>
                      </defs>
                      
                      {/* Mesh background */}
                      <rect width="1200" height="128" fill="url(#meshPattern)"/>
                      
                      {/* Active knowledge zones */}
                      <g>
                        <ellipse cx="300" cy="64" rx="80" ry="40" fill="#fbbf24" opacity="0.2" className="animate-pulse"/>
                        <ellipse cx="600" cy="64" rx="100" ry="50" fill="#fbbf24" opacity="0.15" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                        <ellipse cx="900" cy="64" rx="80" ry="40" fill="#fbbf24" opacity="0.2" className="animate-pulse" style={{animationDelay: '1s'}}/>
                      </g>
                      
                      {/* Knowledge points */}
                      <g fill="#fbbf24">
                        <circle cx="300" cy="64" r="6" opacity="0.9" className="animate-ping"/>
                        <circle cx="600" cy="64" r="8" opacity="0.9" className="animate-ping" style={{animationDelay: '0.5s'}}/>
                        <circle cx="900" cy="64" r="6" opacity="0.9" className="animate-ping" style={{animationDelay: '1s'}}/>
                      </g>
                      
                      {/* 24/7 indicator */}
                      <g transform="translate(1050,64)">
                        <circle cx="0" cy="0" r="20" fill="#16a34a" opacity="0.2" className="animate-pulse"/>
                        <circle cx="0" cy="0" r="8" fill="#16a34a" opacity="0.8"/>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Variations for Abstract Content Flow */}
              <div className="mb-24">
                <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
                  Variationen: Content Flow 🌊
                </h3>
                
                {/* Variation 1: Content Stream Matrix */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 1: Content Stream Matrix
                  </h4>
                  <div className="relative h-28 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 112" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="streamMatrix" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.2"/>
                          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                          <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.2"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Stream channels */}
                      <g opacity="0.3">
                        <rect x="0" y="20" width="1200" height="2" fill="url(#streamMatrix)"/>
                        <rect x="0" y="40" width="1200" height="2" fill="url(#streamMatrix)"/>
                        <rect x="0" y="60" width="1200" height="2" fill="url(#streamMatrix)"/>
                        <rect x="0" y="80" width="1200" height="2" fill="url(#streamMatrix)"/>
                      </g>
                      
                      {/* Content packets */}
                      <g>
                        <rect x="100" y="18" width="40" height="6" rx="3" fill="#8b5cf6" opacity="0.8">
                          <animateTransform attributeName="transform" type="translate" values="0,0;1000,0" dur="5s" repeatCount="indefinite"/>
                        </rect>
                        <rect x="50" y="38" width="60" height="6" rx="3" fill="#8b5cf6" opacity="0.8">
                          <animateTransform attributeName="transform" type="translate" values="0,0;1050,0" dur="6s" repeatCount="indefinite"/>
                        </rect>
                        <rect x="150" y="58" width="30" height="6" rx="3" fill="#8b5cf6" opacity="0.8">
                          <animateTransform attributeName="transform" type="translate" values="0,0;950,0" dur="4s" repeatCount="indefinite"/>
                        </rect>
                        <rect x="80" y="78" width="50" height="6" rx="3" fill="#8b5cf6" opacity="0.8">
                          <animateTransform attributeName="transform" type="translate" values="0,0;1020,0" dur="5.5s" repeatCount="indefinite"/>
                        </rect>
                      </g>
                      
                      {/* Processing hub */}
                      <circle cx="600" cy="56" r="20" fill="#8b5cf6" opacity="0.3" className="animate-pulse"/>
                      <circle cx="600" cy="56" r="8" fill="#8b5cf6" opacity="0.8"/>
                    </svg>
                  </div>
                </div>

                {/* Variation 2: Content Vortex */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 2: Content Vortex
                  </h4>
                  <div className="relative h-28 overflow-hidden bg-gradient-to-r from-transparent via-purple-50/10 to-transparent">
                    <svg className="w-full h-full" viewBox="0 0 1200 112" preserveAspectRatio="none">
                      <defs>
                        <radialGradient id="vortexGrad" cx="50%" cy="50%" r="50%">
                          <stop offset="0%" stopColor="#8b5cf6" stopOpacity="1"/>
                          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.5"/>
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
                        </radialGradient>
                      </defs>
                      
                      {/* Vortex center */}
                      <circle cx="600" cy="56" r="40" fill="url(#vortexGrad)" opacity="0.4" className="animate-pulse"/>
                      
                      {/* Spiraling content */}
                      <g>
                        <circle cx="650" cy="56" r="3" fill="#8b5cf6" opacity="0.8">
                          <animateTransform attributeName="transform" type="rotate" from="0 600 56" to="360 600 56" dur="3s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="680" cy="56" r="4" fill="#e24e1b" opacity="0.7">
                          <animateTransform attributeName="transform" type="rotate" from="60 600 56" to="420 600 56" dur="4s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="550" cy="56" r="3" fill="#8b5cf6" opacity="0.8">
                          <animateTransform attributeName="transform" type="rotate" from="120 600 56" to="480 600 56" dur="3.5s" repeatCount="indefinite"/>
                        </circle>
                        <circle cx="520" cy="56" r="4" fill="#e24e1b" opacity="0.7">
                          <animateTransform attributeName="transform" type="rotate" from="180 600 56" to="540 600 56" dur="4.5s" repeatCount="indefinite"/>
                        </circle>
                      </g>
                      
                      {/* Output streams */}
                      <g stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.6">
                        <path d="M640,56 L1100,30" strokeDasharray="10,5" className="animate-pulse"/>
                        <path d="M640,56 L1100,56" strokeDasharray="10,5" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
                        <path d="M640,56 L1100,82" strokeDasharray="10,5" className="animate-pulse" style={{animationDelay: '1s'}}/>
                      </g>
                    </svg>
                  </div>
                </div>

                {/* Variation 3: Content Distribution Network */}
                <div className="mb-8">
                  <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
                    Variation 3: Content Distribution Network
                  </h4>
                  <div className="relative h-28 overflow-hidden">
                    <svg className="w-full h-full" viewBox="0 0 1200 112" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="distroGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.6"/>
                          <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.8"/>
                        </linearGradient>
                      </defs>
                      
                      {/* Distribution paths */}
                      <g stroke="url(#distroGrad)" strokeWidth="2" fill="none" opacity="0.4">
                        <path d="M100,56 Q300,30 500,56"/>
                        <path d="M100,56 Q300,56 500,56"/>
                        <path d="M100,56 Q300,82 500,56"/>
                      </g>
                      
                      {/* Central AI hub */}
                      <g transform="translate(600,56)">
                        <circle cx="0" cy="0" r="25" fill="#8b5cf6" opacity="0.3" className="animate-pulse"/>
                        <circle cx="0" cy="0" r="12" fill="#8b5cf6" opacity="0.8"/>
                        <polygon points="0,-8 8,8 -8,8" fill="#fff" opacity="0.8"/>
                      </g>
                      
                      {/* Personalized outputs */}
                      <g stroke="#8b5cf6" strokeWidth="2" fill="none" opacity="0.6">
                        <path d="M625,56 Q800,35 1000,35"/>
                        <path d="M625,56 Q800,56 1000,56"/>
                        <path d="M625,56 Q800,77 1000,77"/>
                      </g>
                      
                      {/* User endpoints */}
                      <g fill="#e24e1b" opacity="0.8">
                        <rect x="1000" y="31" width="12" height="8" rx="2" className="animate-pulse"/>
                        <rect x="1000" y="52" width="12" height="8" rx="2" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
                        <rect x="1000" y="73" width="12" height="8" rx="2" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
                      </g>
                      
                      {/* GDPR compliance indicator */}
                      <g transform="translate(1100,56)">
                        <circle cx="0" cy="0" r="15" fill="#16a34a" opacity="0.2" className="animate-pulse"/>
                        <path d="M-5,0 L-2,-3 L5,4" fill="none" stroke="#16a34a" strokeWidth="2" opacity="0.8"/>
                      </g>
                    </svg>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DesignSeparatorTest;