import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Mail,
  Brain,
  TrendingUp,
  Bell,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  Calendar,
  Users,
  BookOpen,
  Shield
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useScrollAnimation';

interface NewsletterBenefit {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  gradient: string;
}

interface ContentPreview {
  id: string;
  type: 'insight' | 'update' | 'guide' | 'alert';
  title: string;
  description: string;
  frequency: string;
  icon: React.ComponentType<any>;
}

const benefits: NewsletterBenefit[] = [
  {
    id: 'ai-insights',
    icon: Brain,
    title: 'KI-Powered Insights',
    description: 'Personalisierte Compliance-Trends und Empfehlungen basierend auf Ihrer Branche.',
    gradient: 'from-purple-500/20 to-indigo-600/20'
  },
  {
    id: 'regulatory-updates',
    icon: Bell,
    title: 'Regulatorische Updates',
    description: 'Sofortige Benachrichtigungen über neue Gesetze und Änderungen in der EU.',
    gradient: 'from-blue-500/20 to-cyan-600/20'
  },
  {
    id: 'market-trends',
    icon: TrendingUp,
    title: 'Markt-Trends',
    description: 'Exklusive Analysen zu Compliance-Entwicklungen und Best Practices.',
    gradient: 'from-green-500/20 to-emerald-600/20'
  },
  {
    id: 'expert-content',
    icon: BookOpen,
    title: 'Experten-Content',
    description: 'Tiefgehende Guides und Tutorials von unseren Compliance-Experten.',
    gradient: 'from-amber-500/20 to-orange-600/20'
  }
];

const contentPreviews: ContentPreview[] = [
  {
    id: 'weekly-digest',
    type: 'insight',
    title: 'Wöchentlicher Compliance-Digest',
    description: 'Die wichtigsten Entwicklungen der Woche, kuratiert für Ihre Branche.',
    frequency: 'Jeden Montag',
    icon: Calendar
  },
  {
    id: 'regulatory-alerts',
    type: 'alert',
    title: 'Regulatory Flash Alerts',
    description: 'Sofortige Updates bei kritischen Gesetzesänderungen oder neuen Vorschriften.',
    frequency: 'Bei Bedarf',
    icon: Bell
  },
  {
    id: 'deep-dive',
    type: 'guide',
    title: 'Deep Dive Guides',
    description: 'Detaillierte Implementierungsleitfäden für neue Compliance-Anforderungen.',
    frequency: 'Monatlich',
    icon: BookOpen
  },
  {
    id: 'security-briefing',
    type: 'update',
    title: 'Security Briefings',
    description: 'Aktuelle Bedrohungen und Sicherheitsempfehlungen für Ihr Unternehmen.',
    frequency: '2x monatlich',
    icon: Shield
  }
];

const typeColors = {
  insight: { bg: 'bg-purple-500/10', text: 'text-purple-600', border: 'border-purple-500/20' },
  update: { bg: 'bg-blue-500/10', text: 'text-blue-600', border: 'border-blue-500/20' },
  guide: { bg: 'bg-green-500/10', text: 'text-green-600', border: 'border-green-500/20' },
  alert: { bg: 'bg-red-500/10', text: 'text-red-600', border: 'border-red-500/20' }
};

const typeLabels = {
  insight: 'Insights',
  update: 'Updates',
  guide: 'Guides',
  alert: 'Alerts'
};

export const IntelligentNewsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activePreview, setActivePreview] = useState(0);
  const [visibleElements, setVisibleElements] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);
  const { isVisible } = useIntersectionObserver(sectionRef, { threshold: 0.1 });

  useEffect(() => {
    if (isVisible) {
      // Show all benefits immediately
      const allIds = benefits.map(b => b.id);
      setVisibleElements(new Set(allIds));
      
      // Auto-rotate content previews
      const interval = setInterval(() => {
        setActivePreview(prev => (prev + 1) % contentPreviews.length);
      }, 4000);
      
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubscribed(true);
    setIsLoading(false);
  };

  if (isSubscribed) {
    return (
      <section className="py-24 bg-gradient-to-b from-[#E6F2FF] to-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Card className="inline-flex items-center p-12 neomorphism bg-gradient-to-r from-card to-muted/30 hover-lift max-w-2xl">
              <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="p-4 rounded-full bg-secondary/10 animate-bounce-in">
                    <CheckCircle2 className="h-12 w-12 text-secondary" />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-card-foreground">
                  Willkommen im Marsstein Newsletter!
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Vielen Dank für Ihr Interesse. Sie erhalten in Kürze eine 
                  Bestätigungs-E-Mail und dann wöchentlich die neuesten 
                  Compliance-Insights direkt in Ihr Postfach.
                </p>
                
                <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    KI-Powered Insights
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    Jederzeit abmeldbar
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-secondary" />
                    DSGVO-konform
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#E6F2FF] to-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-aurora" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float-gentle" />
        
        {/* Email pattern */}
        <div className="absolute inset-0 opacity-[0.01]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23003366' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M20 5c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15S28.284 5 20 5zm-5 12h10l-5 4-5-4z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Newsletter Benefits */}
          <div className="space-y-8">
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary border-primary/20 animate-pulse">
                <Brain className="w-3 h-3 mr-1" />
                KI-Newsletter
              </Badge>
              
              <h2 className={cn(
                "text-4xl md:text-5xl font-bold text-foreground",
                isVisible && "animate-text-reveal"
              )}>
                Smarte Compliance-
                <span className="block animate-gradient-flow bg-clip-text text-transparent">
                  Insights für Sie
                </span>
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Erhalten Sie personalisierte Compliance-Updates, KI-gestützte 
                Analysen und exklusive Einblicke direkt in Ihr Postfach.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                const isBenefitVisible = visibleElements.has(benefit.id);
                
                return (
                  <Card
                    key={benefit.id}
                    className="p-6 neomorphism card-hover relative overflow-hidden"
                  >
                    {/* Gradient overlay */}
                    <div className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 hover:opacity-50 transition-opacity duration-200",
                      benefit.gradient
                    )} />
                    
                    <div className="relative z-10 space-y-3">
                      <div className="p-3 rounded-xl bg-primary/10 w-fit">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      
                      <h4 className="text-lg font-semibold text-card-foreground">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>

          </div>

          {/* Right: Newsletter Signup & Preview */}
          <div className="space-y-8">
            
            {/* Signup Form */}
            <Card className="p-8 neomorphism bg-gradient-to-br from-card to-muted/30 relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 animate-gradient-wave opacity-50" />
              
              <div className="relative z-10 space-y-6">
                <div className="text-center space-y-4">
                  <div className="flex items-center justify-center gap-3">
                    <div className="p-3 rounded-xl bg-primary/10">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <Badge className="bg-secondary/10 text-secondary border-secondary/20">
                      Kostenlos
                    </Badge>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-card-foreground">
                    Newsletter abonnieren
                  </h3>
                  <p className="text-muted-foreground">
                    Verpassen Sie keine wichtigen Compliance-Updates mehr.
                  </p>
                </div>
                
                <form onSubmit={handleSubscribe} className="space-y-4">
                  <div className="relative">
                    <Input
                      type="email"
                      placeholder="Ihre E-Mail-Adresse"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pr-12 h-12 text-lg interactive-border"
                      required
                    />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  </div>
                  
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground btn-modern text-lg"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Wird abonniert...
                      </div>
                    ) : (
                      <>
                        <Sparkles className="mr-2 h-5 w-5" />
                        Jetzt abonnieren
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    DSGVO-konform • Jederzeit abmeldbar • Keine Weitergabe
                  </p>
                </form>
              </div>
            </Card>

            {/* Content Preview */}
            <Card className="p-6 neomorphism card-hover">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-card-foreground">
                    Newsletter Preview
                  </h4>
                  <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
                    Live Content
                  </Badge>
                </div>
                
                {/* Rotating content preview */}
                <div className="space-y-4">
                  {contentPreviews.map((preview, index) => {
                    const Icon = preview.icon;
                    const isActive = activePreview === index;
                    const typeStyle = typeColors[preview.type];
                    
                    return (
                      <div
                        key={preview.id}
                        className={cn(
                          "transition-all duration-500 transform",
                          isActive 
                            ? "opacity-100 scale-100 translate-x-0" 
                            : "opacity-0 scale-95 translate-x-4 absolute"
                        )}
                      >
                        <div className="p-4 rounded-lg bg-muted/30 space-y-3">
                          <div className="flex items-start justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 rounded-lg bg-primary/10">
                                <Icon className="h-5 w-5 text-primary" />
                              </div>
                              <Badge 
                                className={cn(
                                  "text-xs",
                                  typeStyle.bg,
                                  typeStyle.text,
                                  typeStyle.border
                                )}
                              >
                                {typeLabels[preview.type]}
                              </Badge>
                            </div>
                            <span className="text-xs text-muted-foreground">
                              {preview.frequency}
                            </span>
                          </div>
                          
                          <div>
                            <h5 className="font-semibold text-card-foreground mb-1">
                              {preview.title}
                            </h5>
                            <p className="text-sm text-muted-foreground">
                              {preview.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Preview dots */}
                <div className="flex justify-center gap-2">
                  {contentPreviews.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActivePreview(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        activePreview === index 
                          ? "bg-primary w-6" 
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                      )}
                    />
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};