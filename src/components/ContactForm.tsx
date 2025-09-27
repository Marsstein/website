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
import { getEmailJS } from '@/utils/lazyImports';
import { SimpleCalendlySection } from '@/components/SimpleCalendlySection';

interface ContactFormProps {
  isDemoRequest?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({ isDemoRequest = false }) => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    employees: '',
    message: isDemoRequest ? 'I would like to request a demo of your compliance management platform.' : '',
    newsletter: false,
    privacy: false,
    isDemoRequest: isDemoRequest
  });  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting: prevent multiple submissions within 30 seconds
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
      // EmailJS configuration - these values come from your .env.local file
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      // Development only logging
      if (import.meta.env.DEV) {
        console.log('EmailJS Config:', { serviceId, templateId, publicKey: publicKey ? 'Set' : 'Missing' });
      }

      if (!serviceId || !templateId || !publicKey) {
        if (import.meta.env.DEV) {
          console.error('EmailJS configuration missing:', { serviceId, templateId, publicKey });
        }
        throw new Error('EmailJS configuration is missing. Please check your .env.local file.');
      }

      // Lazy load and initialize EmailJS
      const emailjs = await getEmailJS();
      emailjs.init(publicKey);

      // Input sanitization and validation
      const sanitizedData = {
        firstName: formData.firstName.trim().slice(0, 50),
        lastName: formData.lastName.trim().slice(0, 50),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim().slice(0, 20),
        company: formData.company.trim().slice(0, 100),
        jobTitle: formData.jobTitle.trim().slice(0, 100),
        employees: formData.employees,
        message: formData.message.trim().slice(0, 2000),
        isDemoRequest: formData.isDemoRequest,
        newsletter: formData.newsletter
      };

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(sanitizedData.email)) {
        toast({
          title: t('contact_error'),
          description: 'Please enter a valid email address.',
          variant: "destructive",
        });
        return;
      }

      // Prepare the email template parameters with sanitized data
      const templateParams = {
        name: `${sanitizedData.firstName} ${sanitizedData.lastName}`,
        email: sanitizedData.email,
        message: `
Contact Details:
- Name: ${sanitizedData.firstName} ${sanitizedData.lastName}
- Email: ${sanitizedData.email}
- Phone: ${sanitizedData.phone}
- Company: ${sanitizedData.company}
- Job Title: ${sanitizedData.jobTitle}
- Employees: ${sanitizedData.employees}
- Demo Request: ${sanitizedData.isDemoRequest ? 'YES' : 'NO'}
- Newsletter: ${sanitizedData.newsletter ? 'YES' : 'NO'}

Message:
${sanitizedData.message}
        `,
      };

      // Send email using EmailJS
      if (import.meta.env.DEV) {
        console.log('Sending email with params:', templateParams);
      }
      const result = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      if (import.meta.env.DEV) {
        console.log('EmailJS result:', result);
      }

      toast({
        title: t('contact_success'),
        description: t('contact_success_message'),
      });

      // Update last submission time
      setLastSubmissionTime(Date.now());

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
        privacy: false,
        isDemoRequest: false
      });

      // Navigate to thank you page after successful submission
      setTimeout(() => {
        navigate('/thank-you');
      }, 1500); // Short delay to show the success toast

    } catch (error) {
      if (import.meta.env.DEV) {
        console.error('Full error details:', error);
        if (error && typeof error === 'object') {
          console.error('Error message:', (error as any).message);
          console.error('Error status:', (error as any).status);
          console.error('Error text:', (error as any).text);
        }
      }

      let errorMessage = 'Failed to send message. Please try again or contact us directly.';

      if (error && typeof error === 'object') {
        const err = error as any;
        if (err.status === 400) {
          errorMessage = 'Invalid template parameters. Please check the form data.';
        } else if (err.status === 401) {
          errorMessage = 'EmailJS authentication failed. Please check your public key.';
        } else if (err.status === 404) {
          errorMessage = 'EmailJS service or template not found. Please check your service ID and template ID.';
        } else if (err.text) {
          errorMessage = `EmailJS error: ${err.text}`;
        }
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

          {/* Free Consultation Section with Calendly */}
          {console.log('About to render SimpleCalendlySection')}
          <SimpleCalendlySection />
          {console.log('After SimpleCalendlySection render')}

          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <span>info@marsstein.ai</span>
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
                  placeholder="+49 XXX XXXXXXXX"
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
