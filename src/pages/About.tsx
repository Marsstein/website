import React, { useEffect, useRef, useState } from 'react';
import '../styles/about.css';
import { Helmet } from 'react-helmet-async';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Zap, 
  Target, 
  Users,
  CheckCircle,
  Globe,
  ArrowRight,
  Linkedin,
  Mail,
  Clock,
  Award,
  BookOpen,
  Sparkles,
  Rocket,
  Brain,
  Code2,
  Database,
  Lock,
  TrendingUp,
  Heart,
  Coffee,
  Lightbulb
} from 'lucide-react';

const About: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

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

  const teamMembers = [
    {
      name: "Jayson Chen",
      role: "Gründer & CEO",
      description: "Zertifizierter Datenschutzbeauftragter mit 10 Jahren Erfahrung (u. a. ZF Group). Baut aus Deep-Tech praxisnahe Compliance-Lösungen.",
      linkedin: "#",
      email: "jayson@marsstein.ai"
    },
    {
      name: "Jonas Krüger",
      role: "Chief Growth Officer (CGO)",
      description: "Unternehmer & Datenschutzexperte, 8+ Jahre B2B-Growth & SEO. Bringt komplexe Regulierung in klare, messbare Journeys.",
      linkedin: "#",
      email: "jonas@marsstein.ai"
    },
    {
      name: "Javier Ponzo",
      role: "Full-Stack Developer",
      description: "Rails & React. Baut robuste SaaS-Automationen mit Security-Fokus.",
      linkedin: "#",
      email: "javier@marsstein.ai"
    },
    {
      name: "Manuel Szedlak",
      role: "Chief Technology Officer (CTO)",
      description: "Software-Ingenieur und Gründer von Implyt, mit Erfahrung bei Porsche, Ascon und Steinbeis. Experte in Full-Stack-Entwicklung, Automatisierung und skalierbaren KI-gesteuerten Systemen für industrielle Anwendungen.",
      linkedin: "#",
      email: "manuel@marsstein.ai"
    },
    {
      name: "Niklas Steppan",
      role: "KI-Ingenieur",
      description: "Hintergrund in Automotive-Mechatronik, jetzt fokussiert auf Robotik, KI und Raumfahrttechnologien an der HTWG Konstanz.",
      linkedin: "#",
      email: "niklas@marsstein.ai"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Über uns - Marsstein | Life's too short for regs.</title>
        <meta 
          name="description" 
          content="Lernen Sie das Marsstein-Team kennen. Wir machen EU-Compliance so einfach wie das Speichern einer Datei – mit KI-gestützter GDPR-, ISO 27001- und AI Act-Unterstützung."
        />
        <meta name="keywords" content="Marsstein Team, Compliance Experten, GDPR Automatisierung, EU AI Act, Datenschutz Software" />
        <link rel="canonical" href="https://marsstein.ai/ueber-uns" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/src/assets/hero-about.png" 
              alt="Marsstein Header" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#e24e1b]/20 to-[#f97316]/20"></div>
          </div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center text-white">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/30">
                <Target className="w-4 h-4" />
                Über Marsstein
              </div>
              
              {/* Main Headline */}
              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                Life's too short
                <br />
                <span className="text-yellow-200">for regs.</span>
              </h1>
              
              {/* Subtitle */}
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-95">
                Wir machen Compliance so <span className="font-bold underline">selbstverständlich</span> 
                wie das Speichern einer Datei – schnell, sicher, erklärbar.
              </p>
              
              {/* Description */}
              <p className="text-lg mb-10 max-w-3xl mx-auto opacity-90">
                Marsstein ist die KI-gestützte Plattform, die GDPR, ISO 27001 und den EU-AI-Act 
                in einen klaren Workflow übersetzt.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/beta">
                  <Button
                    size="lg"
                    className="bg-white text-[#e24e1b] hover:bg-gray-100 px-8 py-3 font-semibold"
                  >
                    Demo buchen
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-white bg-white/10 text-white hover:bg-white hover:text-[#e24e1b] px-8 py-3 font-semibold backdrop-blur-sm"
                  >
                    Team kennenlernen
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <AnimatedCard className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Warum wir <span className="text-[#e24e1b]">Marsstein</span> bauen
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#e24e1b] to-[#f97316] mx-auto rounded-full"></div>
            </AnimatedCard>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <AnimatedCard delay={200}>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center h-full">
                  <div className="w-16 h-16 bg-[#e24e1b] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Komplexität raus, Klarheit rein
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Europaweite Regulierungen (GDPR, AI Act, ISO 27001) sind wichtig – 
                    aber unnötig kompliziert. Wir übersetzen sie in verständliche Workflows.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={400}>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center h-full">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    SMBs zuerst
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Mittelständische Unternehmen tragen den größten Aufwand bei knappsten Ressourcen. 
                    Deshalb bauen wir für euch – nicht für Konzerne.
                  </p>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={600}>
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center h-full">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <TrendingUp className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Von Wochen zu Tagen
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Automatisierte Dokumente, Kontrollen & Audit-Vorbereitung – 
                    mit Expert·innen im Loop für maximale Qualität.
                  </p>
                </div>
              </AnimatedCard>
            </div>

            {/* Vision & Mission */}
            <AnimatedCard delay={800}>
              <div className="bg-white rounded-2xl p-12 shadow-lg">
                <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Unsere Vision & Mission
                </h3>
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#e24e1b] to-[#f97316] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-[#e24e1b] mb-4">Vision</h4>
                    <p className="text-xl text-gray-700 italic">
                      „Compliance, die sich einfach erledigt."
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Rocket className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-blue-600 mb-4">Mission</h4>
                    <p className="text-lg text-gray-700">
                      Eine EU-/CH-gehostete, KI-native Plattform, die Richtlinien analysiert, 
                      Lücken erklärt und Teams sicher zur Zertifizierung führt – 
                      mit lückenloser Audit-Spur.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedCard className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Was wir konkret <span className="text-[#e24e1b]">tun</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
                In 30 Sekunden erklärt – so funktioniert Marsstein
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#e24e1b] to-[#f97316] mx-auto rounded-full"></div>
            </AnimatedCard>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedCard delay={200}>
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Dokument-Generator
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Policies, DPIA, TOM, SCCs – strukturiert, prüfbar und rechtssicher generiert.
                  </p>
                  <div className="text-sm text-blue-600 font-medium">
                    Automatisiert
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={400}>
                <div className="bg-green-50 p-8 rounded-2xl border border-green-100 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Kontrollen & Tasks
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Maßnahmen planen, zuweisen, verfolgen – mit lückenloser Dokumentation.
                  </p>
                  <div className="text-sm text-green-600 font-medium">
                    Nachverfolgbar
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={600}>
                <div className="bg-purple-50 p-8 rounded-2xl border border-purple-100 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Audit-Vorbereitung
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Evidenzen sammeln, Prüfschritte leiten – Export für Auditor·innen inklusive.
                  </p>
                  <div className="text-sm text-purple-600 font-medium">
                    Audit-Ready
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={800}>
                <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100 text-center h-full hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 bg-[#e24e1b] rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Globe className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Multi-Framework
                  </h3>
                  <p className="text-gray-600 mb-4">
                    GDPR, AI-Act & ISO 27001 – ein Konto, ein Workflow, alle Standards.
                  </p>
                  <div className="text-sm text-[#e24e1b] font-medium">
                    All-in-One
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <AnimatedCard className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Das <span className="text-[#e24e1b]">Team</span> hinter Marsstein
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-6">
                Fünf Gründer mit über 50 Jahren kombinierter Erfahrung aus 
                Deep-Tech, Compliance und Enterprise-Growth
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-[#e24e1b] to-[#f97316] mx-auto rounded-full"></div>
            </AnimatedCard>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {teamMembers.map((member, index) => (
                <AnimatedCard key={index} delay={index * 200}>
                  <div className="bg-white p-8 rounded-2xl shadow-lg text-center h-full">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#e24e1b] to-[#f97316] rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <span className="text-white font-bold text-xl">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#e24e1b] font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {member.description}
                    </p>
                    <div className="flex justify-center gap-3">
                      <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                        <Linkedin className="w-4 h-4 text-blue-600" />
                      </Button>
                      <Button variant="ghost" size="sm" className="h-10 w-10 p-0">
                        <Mail className="w-4 h-4 text-gray-600" />
                      </Button>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            {/* Team Stats */}
            <AnimatedCard delay={1200}>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-3xl font-bold text-[#e24e1b] mb-2">50+</div>
                    <div className="text-gray-600 font-medium">Jahre Erfahrung</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                    <div className="text-gray-600 font-medium">Gründer</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                    <div className="text-gray-600 font-medium">Remote-Ready</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600 mb-2">∞</div>
                    <div className="text-gray-600 font-medium">Leidenschaft</div>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <AnimatedCard className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Stimmen unserer <span className="text-[#e24e1b]">Kund:innen</span>
              </h2>
            </AnimatedCard>

            <div className="grid md:grid-cols-2 gap-12">
              <AnimatedCard delay={200}>
                <div className="bg-orange-50 p-8 rounded-2xl border border-orange-100">
                  <div className="flex text-orange-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-lg mb-6">
                    "€80.000 für GDPR-Beratung – langsam und schmerzhaft. Mit Marsstein schaffen wir es in 30 Tagen für €3.600."
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-bold text-gray-900">CEO</div>
                    <div className="text-gray-600">Klein Automotive GmbH</div>
                  </div>
                </div>
              </AnimatedCard>

              <AnimatedCard delay={400}>
                <div className="bg-blue-50 p-8 rounded-2xl border border-blue-100">
                  <div className="flex text-blue-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <blockquote className="text-gray-700 text-lg mb-6">
                    "Die KI-Erklärungen sind klarer als Juristen-Texte. Spart uns jede Woche 10+ Stunden."
                  </blockquote>
                  <div className="text-sm">
                    <div className="font-bold text-gray-900">Compliance Officer</div>
                    <div className="text-gray-600">ATTC</div>
                  </div>
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-[#e24e1b] to-[#f97316]">
          <div className="container mx-auto max-w-4xl text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Arbeiten bei Marsstein
            </h2>
            <p className="text-xl mb-8 opacity-95">
              Wir verbinden Impact (gesellschaftlich relevante Compliance) mit klarem Produktfokus.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div>
                <h3 className="font-bold text-lg mb-2">Remote-first in Europa</h3>
                <p className="opacity-90">Regelmäßige Offsites für direkten Austausch</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Saubere Code-Basen</h3>
                <p className="opacity-90">Kleine Teams mit viel Ownership</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Meaningful Impact</h3>
                <p className="opacity-90">Compliance für Millionen vereinfachen</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="bg-white text-[#e24e1b] hover:bg-gray-100 px-8 py-3 font-semibold"
              >
                Offene Rollen ansehen
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-[#e24e1b] px-8 py-3 font-semibold"
              >
                Initiativ bewerben
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default About;