import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Sparkles,
  ArrowRight,
  BookOpen,
  MessageSquare,
  Brain,
  Zap
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useScrollAnimation';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'technical' | 'compliance' | 'security' | 'pricing';
  relatedLink?: { text: string; href: string };
  isPopular?: boolean;
}

interface FAQCategory {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  count: number;
}

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'Wie funktioniert die KI-gestützte Compliance-Automatisierung?',
    answer: 'Unsere KI analysiert kontinuierlich Ihre Datenflüsse, Prozesse und Dokumentation. Sie identifiziert automatisch Compliance-Lücken, schlägt Verbesserungen vor und erstellt rechtssichere Dokumentation. Der Machine Learning Algorithmus lernt dabei aus jeder Prüfung und wird kontinuierlich präziser.',
    category: 'technical',
    relatedLink: { text: 'KI-Technologie entdecken', href: '/tools/compliance-ai-assistant' },
    isPopular: true
  },
  {
    id: '2',
    question: 'Welche Compliance-Standards werden unterstützt?',
    answer: 'Marsstein unterstützt über 12 internationale Standards: DSGVO, EU AI Act, ISO 27001, SOC 2, TISAX, NIS2, DORA, und weitere. Die Plattform passt sich automatisch an lokale Gesetze in über 50 Ländern an und berücksichtigt branchenspezifische Anforderungen.',
    category: 'compliance',
    relatedLink: { text: 'Alle Standards ansehen', href: '/wissen/zertifizierungen' },
    isPopular: true
  },
  {
    id: '3',
    question: 'Wie sicher sind meine Daten bei Marsstein?',
    answer: 'Ihre Daten werden mit AES-256 Verschlüsselung geschützt und ausschließlich in europäischen Rechenzentren verarbeitet. Wir sind ISO 27001 und SOC 2 zertifiziert, verwenden Zero-Trust Architektur und bieten 24/7 Security Monitoring. Alle Mitarbeiter unterliegen strengsten Sicherheitsrichtlinien.',
    category: 'security',
    relatedLink: { text: 'Sicherheitsdetails', href: '/branchen' },
    isPopular: true
  },
  {
    id: '4',
    question: 'Wie lange dauert die Implementierung?',
    answer: 'Die Grundimplementierung erfolgt in 2-4 Wochen. Dank unserer KI-gestützten Datenanalyse und vorkonfigurierten Compliance-Templates können Sie bereits nach wenigen Tagen erste Audits durchführen. Für komplexe Enterprise-Szenarien bieten wir dedizierte Onboarding-Teams.',
    category: 'technical',
    relatedLink: { text: 'Implementierung planen', href: '/contact?demo=true' }
  },
  {
    id: '5',
    question: 'Welche Kostenersparnis kann ich erwarten?',
    answer: 'Unsere Kunden reduzieren ihre Compliance-Kosten um durchschnittlich 85%. Die Zeitersparnis bei Audits beträgt etwa 90%, während externe Beratungskosten um bis zu 70% sinken. Der ROI wird typischerweise bereits nach 3-6 Monaten erreicht.',
    category: 'pricing',
    relatedLink: { text: 'ROI Calculator', href: '/pricing' }
  },
  {
    id: '6',
    question: 'Unterstützt Marsstein Multi-Tenant Szenarien?',
    answer: 'Ja, Marsstein bietet vollständige Multi-Tenant Unterstützung mit granularer Rechteverwaltung. Konzerne können verschiedene Geschäftsbereiche, Tochtergesellschaften oder Kunden separat verwalten, während zentrale Compliance-Teams übergreifende Einblicke erhalten.',
    category: 'technical',
    relatedLink: { text: 'Enterprise Features', href: '/branchen' }
  },
  {
    id: '7',
    question: 'Wie aktuell sind die Compliance-Informationen?',
    answer: 'Unsere KI überwacht kontinuierlich Gesetzesänderungen und regulatorische Updates aus über 50 Ländern. Änderungen werden automatisch in die Plattform integriert und relevante Kunden werden proaktiv benachrichtigt. Unser Legal-Team validiert alle Updates vor der Implementierung.',
    category: 'compliance',
    relatedLink: { text: 'Rechtsprechung verfolgen', href: '/wissen/rechtsprechung' }
  },
  {
    id: '8',
    question: 'Gibt es eine mobile App?',
    answer: 'Ja, die Marsstein Mobile App ermöglicht Compliance-Management unterwegs. Sie können Audits durchführen, Benachrichtigungen erhalten, Dokumentation einsehen und kritische Workflows auch offline bearbeiten. Die App synchronisiert automatisch mit der Desktop-Plattform.',
    category: 'technical',
    relatedLink: { text: 'App herunterladen', href: '/tools' }
  }
];

const categories: FAQCategory[] = [
  { id: 'all', name: 'Alle', icon: HelpCircle, color: 'text-primary', count: faqs.length },
  { id: 'technical', name: 'Technisch', icon: Zap, color: 'text-blue-600', count: faqs.filter(f => f.category === 'technical').length },
  { id: 'compliance', name: 'Compliance', icon: BookOpen, color: 'text-green-600', count: faqs.filter(f => f.category === 'compliance').length },
  { id: 'security', name: 'Sicherheit', icon: Brain, color: 'text-purple-600', count: faqs.filter(f => f.category === 'security').length },
  { id: 'pricing', name: 'Preise', icon: MessageSquare, color: 'text-orange-600', count: faqs.filter(f => f.category === 'pricing').length }
];

export const SmartFAQ: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);
  const [visibleFAQs, setVisibleFAQs] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  const filteredFAQs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  useEffect(() => {
    if (isVisible) {
      filteredFAQs.forEach((faq, index) => {
        setTimeout(() => {
          setVisibleFAQs(prev => new Set([...prev, faq.id]));
        }, index * 100);
      });
    }
  }, [isVisible, filteredFAQs]);

  const toggleFAQ = (faqId: string) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <section 
      ref={sectionRef}
      className="py-12 bg-gradient-to-b from-white via-[#E6F2FF]/10 to-white relative overflow-hidden"
    >
      {/* Simplified Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.02)_0%,transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4">
        {/* Compact Header */}
        <div className="text-center mb-8 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20">
            <HelpCircle className="w-4 h-4 mr-1" />
            Häufige Fragen
          </Badge>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Antworten auf Ihre <span className="text-primary">wichtigsten Fragen</span>
          </h2>
          
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Alles was Sie über Marsstein wissen müssen - von technischen Details 
            bis hin zu Compliance-Anforderungen.
          </p>
        </div>

        {/* Compact Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            
            return (
              <Button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                variant={isActive ? "default" : "outline"}
                size="sm"
                className={cn(
                  "transition-all duration-200",
                  isActive 
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-sm" 
                    : "border-gray-300 hover:border-primary hover:text-primary"
                )}
              >
                <Icon className="w-3 h-3 mr-1" />
                {category.name}
                <Badge 
                  variant="secondary" 
                  className="ml-1 text-xs px-1.5 py-0.5"
                >
                  {category.count}
                </Badge>
              </Button>
            );
          })}
        </div>

        {/* Compact FAQ List */}
        <div className="max-w-4xl mx-auto space-y-3 mb-8">
          {filteredFAQs.map((faq, index) => {
            const isOpen = openFAQ === faq.id;
            const isFAQVisible = visibleFAQs.has(faq.id);
            
            return (
              <Card
                key={faq.id}
                className={cn(
                  "bg-white/70 backdrop-blur-sm border-white/60 shadow-sm transition-all duration-200 overflow-hidden hover:shadow-md",
                  isOpen && "ring-2 ring-primary/50"
                )}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full p-4 text-left focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-lg"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 pr-4">
                      <div className="flex items-center gap-2 mb-1">
                        {faq.isPopular && (
                          <Badge className="bg-secondary/10 text-secondary border-secondary/20 text-xs px-2 py-0.5">
                            <Sparkles className="w-2 h-2 mr-1" />
                            Beliebt
                          </Badge>
                        )}
                        <span className="text-xs text-muted-foreground uppercase font-medium">
                          {categories.find(c => c.id === faq.category)?.name}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-card-foreground">
                        {faq.question}
                      </h3>
                    </div>
                    
                    <div className={cn(
                      "p-1.5 rounded-full bg-primary/10 transition-all duration-200",
                      isOpen && "bg-primary text-primary-foreground rotate-180"
                    )}>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                </button>

                {/* Compact answer */}
                <div className={cn(
                  "overflow-hidden transition-all duration-300 ease-in-out",
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="px-4 pb-4 space-y-3">
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                    
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                    
                    {faq.relatedLink && (
                      <Link 
                        to={faq.relatedLink.href}
                        className="inline-flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium group"
                      >
                        {faq.relatedLink.text}
                        <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Compact Help CTA */}
        <div className="text-center">
          <Card className="inline-block p-6 bg-white/70 backdrop-blur-sm border-white/60 shadow-sm max-w-2xl hover:shadow-md transition-all duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <Badge className="bg-secondary/10 text-secondary border-secondary/20 text-xs px-2 py-0.5">
                  24/7 Support
                </Badge>
              </div>
              
              <h3 className="text-xl font-bold text-card-foreground">
                Ihre Frage nicht dabei?
              </h3>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                Unser Expertenteam hilft Ihnen gerne weiter. Kontaktieren Sie uns 
                für eine persönliche Beratung oder eine maßgeschneiderte Demo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link to="/contact">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:scale-[1.02]">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    Frage stellen
                  </Button>
                </Link>
                <Link to="/contact?demo=true">
                  <Button variant="outline" className="px-6 py-2 font-semibold border border-gray-300 hover:bg-white hover:border-primary hover:text-primary transition-all duration-200">
                    Persönliche Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};