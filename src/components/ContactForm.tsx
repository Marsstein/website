import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    employees: '',
    message: '',
    newsletter: false,
    privacy: false
  });  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
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
      // EmailJS configuration - these values come from your .env.local file
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your .env.local file.');
      }

      // Prepare the email template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        job_title: formData.jobTitle,
        employees: formData.employees,
        message: formData.message,
        newsletter: formData.newsletter ? 'Yes' : 'No',
        to_email: 'info@marsstein.com', // Your email where you want to receive messages
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: t('contact_success'),
        description: t('contact_success_message'),
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
        employees: '',
        message: '',
        newsletter: false,
        privacy: false
      });

    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: t('contact_error'),
        description: 'Failed to send message. Please try again or contact us directly.',
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            {t('contact_title')}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {t('contact_subtitle')}
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

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>jayson.chen@marsstein.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <span>{t('contact_address')}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <span>{t('contact_hours')}</span>
            </div>
          </div>
        </div>

        {/* Right Column - Form */}
        <Card className="p-8">
          <h2 className="text-2xl font-bold mb-6">{t('contact_form_title')}</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Info */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium">
                  {t('contact_first_name')} <span className="text-destructive">*</span>
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
                <Label htmlFor="lastName" className="text-sm font-medium">
                  {t('contact_last_name')} <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Mustermann"
                  required
                  className="mt-1"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-sm font-medium">
                  {t('contact_email')} <span className="text-destructive">*</span>
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
                  {t('contact_phone')}
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+41 XX XXX XX XX"
                  className="mt-1"
                />
              </div>
            </div>

            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">{t('contact_company_info')}</h3>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company" className="text-sm font-medium">
                    {t('contact_company')} <span className="text-destructive">*</span>
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
                <div>
                  <Label htmlFor="jobTitle" className="text-sm font-medium">
                    {t('contact_job_title')}
                  </Label>
                  <Input
                    id="jobTitle"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    placeholder="Geschäftsführer"
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="employees" className="text-sm font-medium">
                  {t('contact_employees')}
                </Label>
                <Select onValueChange={(value) => handleInputChange('employees', value)}>
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder={t('contact_employees_placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-10">1-10</SelectItem>
                    <SelectItem value="11-50">11-50</SelectItem>
                    <SelectItem value="51-200">51-200</SelectItem>
                    <SelectItem value="201-500">201-500</SelectItem>
                    <SelectItem value="500+">500+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Message */}
            <div>
              <Label htmlFor="message" className="text-sm font-medium">
                {t('contact_message')}
              </Label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                placeholder={t('contact_message_placeholder')}
                className="mt-1 min-h-[100px]"
              />
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
