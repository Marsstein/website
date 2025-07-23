import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/hooks/useLanguage';
import { useToast } from '@/hooks/use-toast';
import { Mail, Check } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate newsletter subscription
    setIsSubscribed(true);
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive the latest compliance updates.",
    });
    setEmail('');
  };

  return (
    <section className="py-20 md:py-32">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-6 mb-10">
            <div className="inline-flex p-3 rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              {t('newsletter_title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('newsletter_desc')}
            </p>
          </div>

          {/* Newsletter Form */}
          {!isSubscribed ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder={t('newsletter_placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="bg-gradient-primary hover:opacity-90">
                {t('newsletter_cta')}
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-green-600 font-medium">
              <Check className="h-5 w-5" />
              <span>Thank you for subscribing!</span>
            </div>
          )}

          {/* Trust indicators */}
          <div className="mt-8 text-sm text-muted-foreground">
            <p>📧 Weekly updates • 🔒 GDPR compliant • ✋ Unsubscribe anytime</p>
          </div>
        </div>
      </div>
    </section>
  );
};