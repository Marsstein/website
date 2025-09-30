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
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
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
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-8">

          {/* Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Compliance Newsletter
            </h2>
            <p className="text-lg text-gray-600">
              Wöchentliche Insights • Sofort-Alerts bei kritischen Änderungen • Experten-Guides
            </p>
          </div>

          {/* Signup Form */}
          <Card className="p-8 shadow-lg">
            <form onSubmit={handleSubscribe} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12"
                  required
                />
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-12 px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Lädt...
                    </div>
                  ) : (
                    'Abonnieren'
                  )}
                </Button>
              </div>

              <p className="text-sm text-gray-500">
                Kostenlos • DSGVO-konform • Jederzeit abmeldbar
              </p>
            </form>
          </Card>

        </div>
      </div>
    </section>
  );
};