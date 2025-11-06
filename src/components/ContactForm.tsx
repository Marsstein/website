import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock, Monitor, Shield } from 'lucide-react';
import { SimpleCalendlySection } from '@/components/SimpleCalendlySection';

interface ContactFormProps {
  isDemoRequest?: boolean;
}

const topicOptions = [
  { value: 'dsgvo-compliance', label: 'DSGVO-Compliance' },
  { value: 'datenschutzbeauftragter', label: 'Externer Datenschutzbeauftragter' },
  { value: 'datenschutz-audit', label: 'Datenschutz-Audit' },
  { value: 'data-breach', label: 'Data Breach Response' },
  { value: 'iso-27001', label: 'ISO 27001 Zertifizierung' },
  { value: 'soc2', label: 'SOC 2 Compliance' },
  { value: 'tisax', label: 'TISAX Zertifizierung' },
  { value: 'nis2', label: 'NIS2-Compliance' },
  { value: 'ai-governance', label: 'KI-Governance & EU AI Act' },
  { value: 'ai-risk', label: 'AI Risk Assessment' },
  { value: 'healthcare', label: 'Healthcare Compliance' },
  { value: 'fintech', label: 'FinTech Compliance' },
  { value: 'ecommerce', label: 'E-Commerce Datenschutz' },
  { value: 'saas', label: 'SaaS Compliance' },
  { value: 'compliance-platform', label: 'Compliance Management Platform' },
  { value: 'whistleblower', label: 'Whistleblower-System' },
  { value: 'cookie-management', label: 'Cookie-Management' },
  { value: 'consulting', label: 'Compliance-Beratung' },
  { value: 'training', label: 'Team-Schulungen' },
  { value: 'demo', label: 'Demo anfordern' },
  { value: 'partnership', label: 'Partnerschaft' },
  { value: 'other', label: 'Sonstiges' }
];

export const ContactForm: React.FC<ContactFormProps> = ({ isDemoRequest = false }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phone: '',
    company: '',
    topic: '',
    message: isDemoRequest ? 'I would like to request a demo of your compliance management platform.' : '',
    newsletter: false,
    privacy: false,
    isDemoRequest: isDemoRequest
  });  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const now = Date.now();
    if (lastSubmissionTime && now - lastSubmissionTime < 30000) {
      toast({
        title: t('contact_error'),
        description: 'Please wait 30 seconds before submitting again.',
        variant: "destructive",
      });
      return;
    }

    if (!formData.privacy) {
      toast({
        title: t('contact_error'),
        description: t('contact_privacy_required'),
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const sanitizedData = {
        firstName: formData.firstName.trim().slice(0, 50),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim().slice(0, 20),
        company: formData.company.trim().slice(0, 100),
        topic: formData.topic,
        message: formData.message.trim().slice(0, 2000),
        isDemoRequest: formData.isDemoRequest,
        newsletter: formData.newsletter
      };

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedData.email)) {
        toast({
          title: t('contact_error'),
          description: 'Please enter a valid email address.',
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      const response = await fetch('/api/contact-submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      toast({
        title: t('contact_success'),
        description: t('contact_success_message'),
      });

      setLastSubmissionTime(Date.now());

      setFormData({
        firstName: '',
        email: '',
        phone: '',
        company: '',
        topic: '',
        message: '',
        newsletter: false,
        privacy: false,
        isDemoRequest: false
      });

      setTimeout(() => {
        navigate('/thank-you');
      }, 1500);

    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Contact form error:', error);
      }

      let errorMessage = 'Failed to send message. Please try again or contact us directly.';

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      toast({
        title: t('contact_error'),
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Left Column - Info */}
        <div>
          {isDemoRequest && (
            <div className="mb-4 p-4 bg-primary/10 border border-primary/20 rounded-lg">
              <p className="text-primary font-medium flex items-center gap-2">
                <Monitor className="h-5 w-5" />
                Demo Request - Get a personalized demonstration of our platform
              </p>
            </div>
          )}
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {isDemoRequest ? 'Request Your Personal Demo' : t('contact_title')}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {isDemoRequest ? 'Fill out the form below and we\'ll schedule a personalized demo of our compliance management platform for you.' : t('contact_subtitle')}
          </p>

          <div className="space-y-6 mb-8">
            <h3 className="text-xl font-semibold text-primary mb-4">{t('contact_why_marsstein')}</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">{t('contact_benefit_1_title')}</p>
                  <p className="text-muted-foreground text-sm">{t('contact_benefit_1_desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">{t('contact_benefit_2_title')}</p>
                  <p className="text-muted-foreground text-sm">{t('contact_benefit_2_desc')}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">{t('contact_benefit_3_title')}</p>
                  <p className="text-muted-foreground text-sm">{t('contact_benefit_3_desc')}</p>
                </div>
              </div>
            </div>
          </div>

          <SimpleCalendlySection />

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <Mail className="h-5 w-5 text-primary" />
                <span className="font-semibold">E-Mail</span>
              </div>
              <div className="ml-8">
                <a href="mailto:info@marsstein.ai" className="hover:underline">info@marsstein.ai</a>
                <p className="text-sm text-muted-foreground">Antwort innerhalb von 24 Stunden</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-1">
                <Phone className="h-5 w-5 text-primary" />
                <span className="font-semibold">Telefon</span>
              </div>
              <div className="ml-8">
                <a href="tel:+4917670560292" className="hover:underline">+49 176 70560292</a>
                <p className="text-sm text-muted-foreground">Mo-Fr 9:00-18:00 Uhr</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">{t('contact_form_title')}</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Contact Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Ihre Kontaktdaten</h3>

              <div>
                <Label htmlFor="firstName" className="text-sm font-medium">
                  Vorname <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Max"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  E-Mail <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="max@company.com"
                  required
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="phone" className="text-sm font-medium">
                  Telefon
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+49 XXX XXXXXXXX"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Ihr Unternehmen</h3>

              <div>
                <Label htmlFor="company" className="text-sm font-medium">
                  Firma <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  placeholder="Musterfirma GmbH"
                  required
                  className="mt-1"
                />
              </div>
            </div>

            {/* Topic */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Ihr Anliegen</h3>

              <div>
                <Label htmlFor="topic" className="text-sm font-medium">
                  Thema/Interesse <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={formData.topic}
                  onValueChange={(value) => handleInputChange('topic', value)}
                  required
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Bitte wählen Sie ein Thema aus" />
                  </SelectTrigger>
                  <SelectContent>
                    {topicOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="message" className="text-sm font-medium">
                  Nachricht
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  placeholder="Ihre Nachricht an uns..."
                  className="mt-1 min-h-[100px]"
                />
              </div>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="newsletter"
                  checked={formData.newsletter}
                  onCheckedChange={(checked) => handleInputChange('newsletter', checked as boolean)}
                />
                <Label htmlFor="newsletter" className="text-sm leading-5">
                  {t('contact_newsletter')}
                </Label>
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox
                  id="privacy"
                  checked={formData.privacy}
                  onCheckedChange={(checked) => handleInputChange('privacy', checked as boolean)}
                  required
                />
                <Label htmlFor="privacy" className="text-sm leading-5">
                  {t('contact_privacy')} <span className="text-destructive">*</span>
                </Label>
              </div>
            </div>


            <Button
              type="submit"
              size="lg"
              className="w-full bg-gradient-primary hover:opacity-90"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : t('contact_submit')}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
};
