import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import { DACHCompliance } from '@/components/DACHCompliance';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  TestTube,
  Target,
  MousePointer,
  ScrollText,
  GitBranch,
  Settings,
  Info
} from 'lucide-react';

const TestIndex: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12 space-y-6">
            <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20 text-sm">
              <TestTube className="w-4 h-4 mr-1" />
              Scroll Animation Tests
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              ComplianceTransformation <span className="text-blue-600">Test Suite</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Teste verschiedene Ansätze für die Scroll-Animation der ComplianceTransformation Sektion. 
              Jede Version implementiert eine andere Lösung für das bidirektionale Scroll-Verhalten.
            </p>
          </div>

          {/* Test Cards */}
          <div className="grid gap-8 mb-12">
            {/* Test 1 */}
            <Card className="p-8 border-2 border-blue-200 hover:border-blue-300 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="p-3 rounded-full bg-blue-500/10 shrink-0">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Test 1: Einheitliche Trigger-Points
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Verwendet den gleichen Trigger-Point (headerHeight = 64px) für sowohl Sticky-Logik als auch Progress-Berechnung. 
                      Diese Lösung soll die Inkonsistenz zwischen Up- und Down-Scrolling beheben.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-xs">
                      Einheitliche Trigger
                    </Badge>
                    <Badge className="bg-orange-500/10 text-orange-600 border-orange-500/20 text-xs">
                      Simplified Logic
                    </Badge>
                  </div>
                  
                  <Link to="/test1">
                    <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 font-semibold shadow hover:shadow-lg transition-all">
                      Test 1 starten
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Test 2 */}
            <Card className="p-8 border-2 border-orange-200 hover:border-orange-300 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="p-3 rounded-full bg-orange-500/10 shrink-0">
                  <MousePointer className="h-8 w-8 text-orange-600" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Test 2: Scroll-Richtungs-Detection
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Erkennt die Scrollrichtung (up/down) und wendet unterschiedliche Logik für Sticky-Position und Progress-Berechnung an. 
                      Ziel ist es, das Verhalten beim Runterscrollen dem beim Hochscrollen anzugleichen.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-purple-500/10 text-purple-600 border-purple-500/20 text-xs">
                      Direction Detection
                    </Badge>
                    <Badge className="bg-blue-500/10 text-blue-600 border-blue-500/20 text-xs">
                      Dynamic Logic
                    </Badge>
                  </div>
                  
                  <Link to="/test2">
                    <Button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 py-3 font-semibold shadow hover:shadow-lg transition-all">
                      Test 2 starten
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            {/* Test 3 */}
            <Card className="p-8 border-2 border-purple-200 hover:border-purple-300 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-6">
                <div className="p-3 rounded-full bg-purple-500/10 shrink-0">
                  <ScrollText className="h-8 w-8 text-purple-600" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Test 3: Absolute Scroll Position
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                      Berechnet absolute Scroll-Positionen beim Laden der Seite und verwendet diese für Sticky- und Progress-Logik. 
                      Diese Methode soll unabhängig von der Scrollrichtung funktionieren.
                    </p>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-indigo-500/10 text-indigo-600 border-indigo-500/20 text-xs">
                      Absolute Positioning
                    </Badge>
                    <Badge className="bg-cyan-500/10 text-cyan-600 border-cyan-500/20 text-xs">
                      Pre-calculated
                    </Badge>
                  </div>
                  
                  <Link to="/test3">
                    <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 font-semibold shadow hover:shadow-lg transition-all">
                      Test 3 starten
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>

          {/* Info Section */}
          <Card className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-gray-200">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded bg-blue-500/10 shrink-0">
                <Info className="h-5 w-5 text-blue-600" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900">
                  Test-Hinweise
                </h3>
                <div className="text-sm text-gray-600 space-y-2">
                  <p>
                    • Jeder Test zeigt ein Debug-Banner oben links mit der aktuellen Test-Nummer
                  </p>
                  <p>
                    • Achte besonders auf das Verhalten beim Wechsel zwischen Up- und Down-Scrolling
                  </p>
                  <p>
                    • Der "Progress" und "Sticky" Status wird unter dem Header angezeigt
                  </p>
                  <p>
                    • Teste verschiedene Scroll-Geschwindigkeiten und -richtungen
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Back to Main */}
          <div className="text-center mt-12">
            <Link to="/">
              <Button variant="outline" className="px-6 py-3 font-semibold border-2">
                <GitBranch className="mr-2 h-4 w-4" />
                Zurück zur Hauptseite
              </Button>
            </Link>
          </div>
        </div>
        </section>
        <DACHCompliance />
      </main>
      <Footer />
    </div>
  );
};

export default TestIndex;