import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap, Code, Clock, Shield, Cpu, Rocket, Brain, Atom, Mountain, Building, Crown, Lightbulb, Heart, Target, Flame, ShieldCheck, Moon, Briefcase } from 'lucide-react';

const DesignShowcase: React.FC = () => {
  const designs = [
    {
      id: 'mars-luxe',
      title: 'Mars Luxe',
      subtitle: 'Luxuriöses Mars-Design',
      description: 'Elegante, hochwertige Mars-Ästhetik mit Rot-Akzenten, Gold-Details und Premium-Feeling für C-Level und Enterprise-Entscheider.',
      features: ['Playfair Display Typography', 'Mars-Rot Farbpalette', 'Luxuriöse Gradienten', 'Premium Animationen'],
      icon: Sparkles,
      gradient: 'from-red-600 to-orange-600',
      path: '/designs/mars-luxe'
    },
    {
      id: 'minimal-pure',
      title: 'Minimal Pure',
      subtitle: 'Minimalistisches Corporate Design',
      description: 'Extreme Minimalismus mit Schwarz-Weiß-Basis, dezenten Rot-Akzenten und maximaler Reduktion für Tech-Professionals.',
      features: ['Inter + JetBrains Mono', 'Schwarz-Weiß mit Rot', 'Ultra-Clean Design', 'Keine Überladung'],
      icon: Zap,
      gradient: 'from-gray-900 to-gray-700',
      path: '/designs/minimal-pure'
    },
    {
      id: 'tech-premium',
      title: 'Tech Premium',
      subtitle: 'Moderne Tech-Ästhetik',
      description: 'Tech-orientiertes Design mit Blau-Basis, modernen Gradienten und Enterprise-Premium Appeal für CTOs und Tech-Teams.',
      features: ['Space Grotesk Font', 'Blau-Gradient System', 'Tech Grid Patterns', 'API-First Messaging'],
      icon: Code,
      gradient: 'from-blue-600 to-indigo-600',
      path: '/designs/tech-premium'
    },
    {
      id: 'swiss-precision',
      title: 'Swiss Precision',
      subtitle: 'Schweizer Präzisions-Engineering',
      description: 'Schweizer Uhrmacher-Präzision in der Compliance-Technologie. Helvetica Neue, echte Schweizer Zeit und Banking-Grade Standards.',
      features: ['Helvetica Neue Typography', 'Echtzeit Schweizer Uhr', 'Präzisions-Metriken', 'Banking Standards'],
      icon: Clock,
      gradient: 'from-red-700 to-red-500',
      path: '/designs/swiss-precision'
    },
    {
      id: 'digital-trust',
      title: 'Digital Trust',
      subtitle: 'Vertrauensbasierte Plattform',
      description: 'Vertrauen durch absolute Transparenz. Grün-basiertes Design mit Trust-Score, Sicherheitszertifikaten und ethischen Standards.',
      features: ['Inter Typography', 'Trust-Score System', 'Sicherheitsbadges', 'Transparenz-Fokus'],
      icon: Shield,
      gradient: 'from-green-600 to-emerald-600',
      path: '/designs/digital-trust'
    },
    {
      id: 'future-law',
      title: 'Future Law',
      subtitle: 'Futuristische Legal-Tech Vision',
      description: 'Quantencomputing, neuronale Netzwerke und Blockchain verschmelzen zur ultimativen Legal-Tech-Plattform der Zukunft.',
      features: ['SF Mono Typography', 'Quantum-Animationen', 'Neural Networks', 'Hologramm-Effekte'],
      icon: Cpu,
      gradient: 'from-blue-400 to-purple-600',
      path: '/designs/future-law'
    },
    {
      id: 'mars-quantum',
      title: 'Mars Quantum',
      subtitle: 'Future Law mit Mars-Rot Akzenten',
      description: 'Interplanetarische Quantentechnologie mit Mars-Verschränkung. Rote Planet-Power trifft auf Quantencomputing für galaktische Compliance.',
      features: ['Mars-Quantum Particles', 'Interplanetare KI', 'Mars-Rot Akzente', 'Quantum Hologramme'],
      icon: Rocket,
      gradient: 'from-red-600 to-blue-500',
      path: '/designs/mars-quantum'
    },
    {
      id: 'neural-mars',
      title: 'Neural Mars',
      subtitle: 'Future Law mit Mars-dominanten Farben',
      description: 'Planetarische Neuronetzwerke mit Mars-DNA. Kognitive Compliance mit der Intelligenz eines roten Planeten.',
      features: ['Mars Neural Engine', 'Synaptic Mars Grid', 'Mars-Dominante Farben', 'Cognitive Compliance'],
      icon: Brain,
      gradient: 'from-red-700 to-red-400',
      path: '/designs/neural-mars'
    },
    {
      id: 'quantum-mars',
      title: 'Quantum Mars',
      subtitle: 'Future Law mit Mars-Gradienten',
      description: 'Multidimensionale Quantenrealität mit Mars-Superposition. Compliance in allen möglichen Zuständen gleichzeitig.',
      features: ['Quantum Entanglement', 'Mars Superposition', 'Multidimensionale UI', 'Quantum Field Effects'],
      icon: Atom,
      gradient: 'from-red-800 via-red-500 to-black',
      path: '/designs/quantum-mars'
    },
    {
      id: 'alpine-resilience',
      title: 'Alpine Resilience',
      subtitle: 'Schweizer Zuverlässigkeit + KI',
      description: 'Schweizer Alpine Stärke trifft auf moderne KI-Integration. Glacier-Blau und Pine-Grün mit Bergspitzen-Logo für höchste Zuverlässigkeit.',
      features: ['Open Sans Typography', 'Glacier & Pine Farben', 'Bergspitzen Logo', 'KI-Integration'],
      icon: Mountain,
      gradient: 'from-blue-600 to-green-600',
      path: '/designs/alpine-resilience'
    },
    {
      id: 'modern-compliance',
      title: 'Modern Compliance',
      subtitle: 'Dunkelblaues Corporate Design',
      description: 'Professionelles Corporate Design mit dunkelblauen Grundtönen und Mars-Rot Akzenten. Shield-basiertes Logo für Vertrauen und Stabilität.',
      features: ['Montserrat Typography', 'Dunkelblau + Mars-Rot', 'Shield Logo Design', 'Corporate Standards'],
      icon: Building,
      gradient: 'from-blue-900 to-red-600',
      path: '/designs/modern-compliance'
    },
    {
      id: 'luxurious-trust',
      title: 'Luxurious Trust',
      subtitle: 'Navy/Gold Luxus-Design',
      description: 'Aristokratische Eleganz mit Navy-Blau und Gold-Akzenten. Crown-Motif mit Edelsteinen für Premium-Executive Service auf höchstem Niveau.',
      features: ['Garamond Serif Typography', 'Navy + Gold Palette', 'Crown + Gemstones', 'Executive Premium'],
      icon: Crown,
      gradient: 'from-blue-900 to-yellow-600',
      path: '/designs/luxurious-trust'
    },
    {
      id: 'tech-innovation',
      title: 'Tech Innovation',
      subtitle: 'Electric Blue Tech-Design',
      description: 'Hochmoderne Tech-Innovation mit Electric Blue Power. Futuristische API-Architektur und Tech-Patterns für maximale Innovation.',
      features: ['Futura Typography', 'Electric Blue Theme', 'Tech Patterns', 'API-First Design'],
      icon: Lightbulb,
      gradient: 'from-blue-500 to-cyan-400',
      path: '/designs/tech-innovation'
    },
    {
      id: 'apple-lifestyle',
      title: 'Apple Lifestyle',
      subtitle: 'Apple/Lifestyle-inspiriertes Design',
      description: 'Von Apple inspiriertes Lifestyle-Design. Menschlich-zentriert, elegant minimalistisch und emotional ansprechend für Premium-Erlebnisse.',
      features: ['SF Pro Display Typography', 'Human-Centered Design', 'Lifestyle Integration', 'Emotional Connection'],
      icon: Heart,
      gradient: 'from-green-400 via-blue-500 to-orange-400',
      path: '/designs/apple-lifestyle'
    },
    {
      id: 'mars-white',
      title: 'Mars White',
      subtitle: 'Mars-Rot + Weiß Design',
      description: 'Kristallklare Compliance-Perfektion mit Mars-Rot auf reinem Weiß. Präzision und Klarheit für höchste Standards ohne Kompromisse.',
      features: ['Roboto Typography', 'Mars-Rot + Pure White', 'Target Logo Design', 'Precision Focus'],
      icon: Target,
      gradient: 'from-red-600 to-white',
      path: '/designs/mars-white'
    },
    {
      id: 'mars-black',
      title: 'Mars Black',
      subtitle: 'Mars-Rot + Schwarz Design',
      description: 'Dunkle Compliance-Supremacy mit infernaler Mars-Power. Unbarmherzige Kontrolle und absolute Dominanz für totale Überlegenheit.',
      features: ['Bebas Neue Typography', 'Mars-Rot + Deep Black', 'Skull + Flames Logo', 'Dark Authority'],
      icon: Flame,
      gradient: 'from-red-600 to-black',
      path: '/designs/mars-black'
    },
    {
      id: 'marsstein-core',
      title: 'Marsstein Core',
      subtitle: 'Felsfeste Compliance-Sicherheit',
      description: 'Mars-Red (#E03A3E) + Basalt Grey (#1F1F24) + Granite Grey (#F5F6F8). Kraftvoller Schutz mit verlässlicher Basis für steinerne Compliance-Beständigkeit.',
      features: ['Inter Typography', 'Shield-based Logo', 'Geometric Patterns', 'Felsfeste Stabilität'],
      icon: ShieldCheck,
      gradient: 'from-red-600 via-gray-800 to-gray-200',
      path: '/designs/marsstein-core'
    },
    {
      id: 'marsstein-midnight',
      title: 'Marsstein Midnight',
      subtitle: 'Aurora Accent Intelligence',
      description: 'Midnight (#001B38) + Aurora (#00F0E4). Tiefste Nacht-Analytik mit Aurora-Beleuchtung und 3D Stein-Slice Navigation für nächtliche Compliance-Supremacy.',
      features: ['Mars Grotesk Typography', 'Orbit Key Visual', '3D Stein-Slice Elements', 'Aurora Illumination'],
      icon: Moon,
      gradient: 'from-blue-900 via-teal-400 to-cyan-300',
      path: '/designs/marsstein-midnight'
    },
    {
      id: 'marsstein-professional',
      title: 'Marsstein Professional',
      subtitle: 'Dunkelblau/Violett Royal Authority',
      description: 'Dunkelblau (#1A237E) + Violett (#6A1B9A). Professional Excellence mit Royal Authority und Crown-basiertem Logo für C-Level Executive Compliance.',
      features: ['Inter Typography', 'Crown-based Logo', 'Royal Color Palette', 'Executive Excellence'],
      icon: Briefcase,
      gradient: 'from-blue-800 via-purple-700 to-violet-600',
      path: '/designs/marsstein-professional'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Marsstein Corporate Design Konzepte
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Neunzehn verschiedene Design-Richtungen für die Marsstein-Marke. 
            Jedes Konzept mit eigenem Charakter, Zielgruppe und visueller Identität.
          </p>
        </div>

        {/* Design Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {designs.map((design) => {
            const Icon = design.icon;
            return (
              <Card key={design.id} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 group">
                {/* Gradient Header */}
                <div className={`h-48 bg-gradient-to-br ${design.gradient} relative`}>
                  <div className="absolute inset-0 bg-black/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon className="h-16 w-16 text-white/80 group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{design.title}</h2>
                  <p className="text-lg text-gray-600 mb-4">{design.subtitle}</p>
                  <p className="text-gray-700 mb-6 leading-relaxed">{design.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2 mb-8">
                    {design.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link to={design.path}>
                    <Button className="w-full group/btn">
                      Design ansehen
                      <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Corporate Identity Info */}
        <Card className="p-12 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Mar<span className="text-red-600">§</span>tein Corporate Identity
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              Alle Designs verwenden das charakteristische Paragraph-Symbol (§) anstelle des doppelten S, 
              um die rechtliche Expertise und Compliance-Fokussierung der Marke zu unterstreichen.
            </p>
            <p className="text-gray-600">
              Jedes Konzept interpretiert die Markenwerte unterschiedlich und spricht verschiedene 
              Zielgruppen an – von C-Level Executives über Tech-Professionals bis zu Enterprise-Teams.
            </p>
          </div>
        </Card>

        {/* Back to Main Site */}
        <div className="text-center mt-12">
          <Link to="/">
            <Button variant="outline" size="lg">
              Zurück zur Hauptseite
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesignShowcase;