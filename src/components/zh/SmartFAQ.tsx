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
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  color: string;
  count: number;
}

const faqs: FAQ[] = [
  {
    id: '1',
    question: 'AI驱动的合规自动化将如何工作？',
    answer: '我们的愿景：分析数据流和流程的AI。目标是自动识别合规差距并提供符合标准的建议。状态：与选定合作伙伴进行Beta阶段，开发机器学习算法。',
    category: 'technical',
    relatedLink: { text: '探索AI路线图', href: '/zh/gongju/heguixing-ai-zhushou' },
    isPopular: true
  },
  {
    id: '2',
    question: '将支持哪些合规标准？',
    answer: '路线图：为GDPR、欧盟AI法案、ISO 27001、SOC 2等标准开发。MVP从GDPR基础开始。愿景：自动适应当地法律和行业特定要求。时间表：2025年逐步扩展。',
    category: 'compliance',
    relatedLink: { text: '查看标准路线图', href: '/zh/zhishi/renzheng' },
    isPopular: true
  },
  {
    id: '3',
    question: '我的数据在Marsstein有多安全？',
    answer: '安全概念：AES-256加密和专用欧洲数据中心。目标：ISO 27001和SOC 2合规，采用零信任架构。路线图：持续安全监控。所有开发流程遵循最高安全标准。',
    category: 'security',
    relatedLink: { text: '安全概念', href: '/zh/hangye' },
    isPopular: true
  },
  {
    id: '4',
    question: 'Wie soll die Implementierung ablaufen?',
    answer: 'Geplante Implementierung: 2-4 Wochen für MVP-Features. Vision: KI-gestützte Datenanalyse und vorkonfigurierte Templates für schnelle erste Audits. Early Bird Angebot: Erprobung mit ausgewählten Partnern. Enterprise-Roadmap: Dedizierte Onboarding-Unterstützung.',
    category: 'technical',
    relatedLink: { text: 'Early Bird Zugang anfragen', href: '/contact?demo=true' }
  },
  {
    id: '5',
    question: 'Welche Kostenersparnis ist das Ziel?',
    answer: 'Vision: Signifikante Kostenreduktion bei Compliance-Prozessen durch Automatisierung. Ziel: Deutliche Zeitersparnis bei Routine-Audits. Potenzial: Reduzierte externe Beratungskosten. Status: Konzeptstudien in Vorbereitung.',
    category: 'pricing',
    relatedLink: { text: 'Potenzial-Rechner', href: '/preise' }
  },
  {
    id: '6',
    question: 'Wird Marsstein Multi-Tenant Szenarien unterstützen?',
    answer: 'Roadmap: Vollständige Multi-Tenant Architektur mit granularer Rechteverwaltung. Ziel: Separate Verwaltung für Geschäftsbereiche und Tochtergesellschaften. Vision: Zentrale Compliance-Übersicht für Konzerne. Status: Entwicklung für Enterprise-Features.',
    category: 'technical',
    relatedLink: { text: 'Enterprise-Roadmap', href: '/branchen' }
  },
  {
    id: '7',
    question: 'Wie aktuell werden die Compliance-Informationen sein?',
    answer: 'Vision: KI-Überwachung von Gesetzesänderungen aus europäischen Ländern. Ziel: Automatische Integration regulatorischer Updates. Geplant: Proaktive Benachrichtigungen für relevante Änderungen. Status: Legal-Team Aufbau für Update-Validierung.',
    category: 'compliance',
    relatedLink: { text: 'Legal-Roadmap', href: '/wissen/rechtsprechung' }
  },
  {
    id: '8',
    question: 'Wird es eine mobile App geben?',
    answer: 'Roadmap: Mobile App für Compliance-Management unterwegs. Geplante Features: Audit-Durchführung, Benachrichtigungen und Dokumentation. Vision: Offline-Workflows mit automatischer Synchronisation. Timeline: Mobile App-Entwicklung nach MVP-Launch.',
    category: 'technical',
    relatedLink: { text: 'Mobile Roadmap', href: '/tools' }
  }
];

const categories: FAQCategory[] = [
  { id: 'all', name: '全部', icon: HelpCircle, color: 'text-primary', count: faqs.length },
  { id: 'technical', name: '技术', icon: Zap, color: 'text-blue-600', count: faqs.filter(f => f.category === 'technical').length },
  { id: 'compliance', name: '合规', icon: BookOpen, color: 'text-green-600', count: faqs.filter(f => f.category === 'compliance').length },
  { id: 'security', name: '安全', icon: Brain, color: 'text-purple-600', count: faqs.filter(f => f.category === 'security').length },
  { id: 'pricing', name: '价格', icon: MessageSquare, color: 'text-orange-600', count: faqs.filter(f => f.category === 'pricing').length }
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
            常见问题
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            您<span className="text-primary">最重要问题</span>的答案
          </h2>

          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            您需要了解的关于Marsstein的一切——从技术细节
            到合规要求。
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
                  Beta Support
                </Badge>
              </div>
              
              <h3 className="text-xl font-bold text-card-foreground">
                Ihre Frage nicht dabei?
              </h3>
              <p className="text-sm text-muted-foreground max-w-lg mx-auto">
                Unser Entwicklungsteam hilft Ihnen gerne weiter. Kontaktieren Sie uns 
                für eine persönliche Beta-Beratung oder Roadmap-Demo.
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