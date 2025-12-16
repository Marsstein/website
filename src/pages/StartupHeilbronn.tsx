import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle2,
  Rocket,
  ArrowRight,
  FileText,
  Clock,
  Bot,
  Bell,
  Users,
  Sparkles,
  MapPin,
  Building2,
  Shield,
  Zap
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import {
  useTracking,
  useSectionTracking,
  useScrollDepthTracking,
  useFormTracking,
  useExitIntentTracking,
  usePathTracking,
} from '@/hooks/useTracking';
import { identifyUser } from '@/lib/analytics';

const AnimatedSection = ({ children, className = "", id }: { children: React.ReactNode, className?: string, id?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const StartupHeilbronn: React.FC = () => {
  const navigate = useNavigate();
  const { trackButtonClick } = useTracking();
  const { trackFormStart, trackFieldCompletion, trackFormSubmit } = useFormTracking('startup_heilbronn_signup');
  const { trackSectionTransition } = usePathTracking();

  useScrollDepthTracking('startup-heilbronn');
  useExitIntentTracking({ page: 'startup-heilbronn', form_started: false });

  const signupSectionRef = useSectionTracking('startup_heilbronn_signup_section');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            if (sectionId) {
              trackSectionTransition(sectionId);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [trackSectionTransition]);

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    company: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!formData.email || !formData.firstName || !formData.company || !formData.consent) {
      setError('Bitte füllen Sie alle Pflichtfelder aus.');
      trackFormSubmit(false, 'missing_required_fields');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source: 'startup-heilbronn',
          offer: 'professional-29'
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Anmeldung fehlgeschlagen');
      }

      identifyUser(formData.email, {
        email: formData.email,
        name: formData.firstName,
        company: formData.company,
        signup_source: 'startup_heilbronn',
        offer: 'professional-29'
      });

      trackFormSubmit(true);
      navigate('/beta/thanks');
    } catch (err) {
      console.error('Startup Heilbronn registration error:', err);
      const errorMessage = 'Es gab einen Fehler bei der Anmeldung. Bitte versuchen Sie es erneut.';
      setError(errorMessage);
      trackFormSubmit(false, errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = useCallback((field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData(prev => ({ ...prev, [field]: value }));
    trackFieldCompletion(field, value);
  }, [trackFieldCompletion]);

  const handleCTAClick = (location: string) => {
    trackButtonClick('startup_heilbronn_cta', location);
    document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const professionalFeatures = [
    'Vollständiges Verarbeitungsverzeichnis (VVT)',
    'TOM-Dokumentation nach Art. 32 DSGVO',
    'Datenschutzerklärung Generator',
    'AVV-Vorlagen für Auftragsverarbeiter',
    'Löschkonzept & Aufbewahrungsfristen',
    'Betroffenenrechte-Management',
    'Automatische Fristenerinnerungen',
    'KI-gestützte Dokumentenerstellung',
    'Export für Behördenanfragen',
    'E-Mail Support'
  ];

  return (
    <>
      <SEOHead
        title="DSGVO für Startups Heilbronn – 29€/Monat | Marsstein"
        description="Exklusives Startup-Angebot für Heilbronn: Komplette DSGVO-Compliance für nur 29€/Monat. Professional-Paket zum Startup-Preis. Jetzt sichern!"
        canonical="/startup-heilbronn"
      />
      <Header />

      <div className="min-h-screen bg-background">
        <section
          id="hero-section"
          data-section="hero"
          className="relative overflow-hidden bg-gradient-to-br from-[#003366] via-[#004d99] to-[#003366]"
        >
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#e24e1b]/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            />
          </div>

          <div className="container relative px-4 mx-auto py-20 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-white text-sm font-semibold">EXKLUSIV FÜR HEILBRONN</span>
                <Badge className="bg-[#e24e1b] text-white border-none ml-2">
                  Startup-Angebot
                </Badge>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-4 sm:mb-6 px-2">
                DSGVO-Compliance für Startups
                <span className="block text-[#e24e1b] mt-2">nur 29€/Monat</span>
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                Das komplette Professional-Paket zum Startup-Preis.
                Speziell für Gründer aus der Region Heilbronn.
              </p>

              <div className="flex flex-col items-center gap-3 sm:gap-4 justify-center mb-6 sm:mb-8 px-4 w-full max-w-md mx-auto">
                <Button
                  size="lg"
                  className="bg-[#e24e1b] hover:bg-[#c43e15] text-white text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 shadow-2xl shadow-black/20 font-bold w-full sm:w-auto whitespace-normal min-h-[56px] flex items-center justify-center"
                  onClick={() => handleCTAClick('hero')}
                >
                  <span>Jetzt für 29€/Monat starten</span>
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                </Button>
                <p className="text-xs sm:text-sm text-white/80 text-center">
                  Statt 99€/Monat • Limitiertes Angebot
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-white/90 px-4 max-w-2xl mx-auto">
                <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>Keine Kreditkarte</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>14 Tage kostenlos</span>
                </div>
                <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap">
                  <CheckCircle2 className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                  <span>Jederzeit kündbar</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <AnimatedSection className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container px-4 mx-auto max-w-6xl">
            <div className="text-center mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-[#003366]/10 rounded-full px-4 py-2 mb-4">
                <Building2 className="w-4 h-4 text-[#003366]" />
                <span className="text-[#003366] text-sm font-semibold">Für Startups gemacht</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Warum DSGVO gerade für Startups wichtig ist
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center h-full hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-[#e24e1b]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Investoren erwarten Compliance
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Bei der Due Diligence ist DSGVO-Compliance Pflicht. Ohne saubere Dokumentation kein Investment.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center h-full hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-[#e24e1b]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  Bußgelder bis zu 20 Mio. €
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  DSGVO-Verstöße können für Startups existenzbedrohend sein. Besser von Anfang an richtig machen.
                </p>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg text-center h-full hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 text-[#003366]" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  B2B-Kunden verlangen es
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Enterprise-Kunden prüfen Datenschutz vor Vertragsabschluss. Compliance öffnet Türen.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-12 sm:py-16 md:py-20 bg-white">
          <div className="container px-4 mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="bg-[#e24e1b] text-white mb-4">
                  70% Rabatt
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Das Professional-Paket
                  <span className="block text-[#e24e1b]">für nur 29€/Monat</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Alles was Sie für vollständige DSGVO-Compliance brauchen –
                  normalerweise 99€/Monat, für Heilbronner Startups exklusiv reduziert.
                </p>

                <div className="space-y-3 mb-8">
                  {professionalFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-[#39B37B] flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <Button
                  size="lg"
                  onClick={() => handleCTAClick('features')}
                  className="bg-[#e24e1b] hover:bg-[#c43e15] text-white font-bold px-8 py-6"
                >
                  Jetzt Angebot sichern
                  <Rocket className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="relative">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200">
                  <div className="text-center mb-6">
                    <p className="text-gray-500 line-through text-lg">99€/Monat</p>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-5xl font-bold text-[#003366]">29€</span>
                      <span className="text-gray-600">/Monat</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">zzgl. MwSt. • Jährliche Abrechnung</p>
                  </div>

                  <div className="bg-[#e24e1b]/10 border border-[#e24e1b]/20 rounded-lg p-4 mb-6">
                    <div className="flex items-center gap-2 text-[#e24e1b] font-semibold">
                      <Sparkles className="w-5 h-5" />
                      <span>Sie sparen 840€ im Jahr</span>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#39B37B]" />
                      <span>14 Tage kostenlos testen</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#39B37B]" />
                      <span>Keine Kreditkarte erforderlich</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#39B37B]" />
                      <span>Monatlich kündbar nach dem ersten Jahr</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-4 -right-4 bg-[#e24e1b] text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  -70%
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-12 sm:py-16 md:py-20 bg-gray-50">
          <div className="container px-4 mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#003366]/10 rounded-full px-4 py-2 mb-4">
                <MapPin className="w-4 h-4 text-[#003366]" />
                <span className="text-[#003366] text-sm font-semibold">Heilbronn Startup-Ökosystem</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Warum dieses Angebot für Heilbronn?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Heilbronn entwickelt sich zu einem der wichtigsten Startup-Hubs in Deutschland.
                Wir möchten dieses Wachstum unterstützen.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-4">
                  <Building2 className="w-6 h-6 text-[#003366]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Campus Founders & Startup-Campus</h3>
                <p className="text-gray-600 text-sm">
                  Die lebendige Gründerszene rund um die Campus Founders verdient professionelle Tools.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-[#003366]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Schnell wachsende Startups</h3>
                <p className="text-gray-600 text-sm">
                  Wenn Ihr Startup wächst, wächst Marsstein mit – ohne dass Sie alles neu aufsetzen müssen.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-[#003366]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Netzwerk-Effekt</h3>
                <p className="text-gray-600 text-sm">
                  Je mehr Heilbronner Startups dabei sind, desto besser können wir das Produkt für Ihre Bedürfnisse optimieren.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="w-12 h-12 bg-[#003366]/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-[#003366]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">Von Gründern für Gründer</h3>
                <p className="text-gray-600 text-sm">
                  Wir verstehen die Herausforderungen von Startups – deshalb dieses faire Angebot.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="signup-form" className="py-20 bg-gradient-to-br from-[#003366] via-[#004d99] to-[#003366]">
          <div ref={signupSectionRef} className="container px-4 mx-auto max-w-2xl" data-section="signup">
            <div className="text-center mb-8">
              <Badge className="bg-[#e24e1b] text-white border-none mb-4 text-sm px-4 py-2">
                Limitiertes Angebot
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Jetzt für 29€/Monat starten
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Sichern Sie sich das Startup-Angebot für Heilbronn
              </p>

              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 px-4">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-white text-xs sm:text-sm border border-white/20 whitespace-nowrap">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">14 Tage kostenlos</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-white text-xs sm:text-sm border border-white/20 whitespace-nowrap">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">70% Rabatt</span>
                </div>
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-white text-xs sm:text-sm border border-white/20 whitespace-nowrap">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  <span className="font-medium">Keine Kreditkarte</span>
                </div>
              </div>
            </div>

            <Card className="border-2 border-white/20">
              <CardHeader>
                <CardTitle>Startup-Angebot sichern</CardTitle>
                <CardDescription>
                  Professional-Paket für nur 29€/Monat
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Vorname *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange('firstName')}
                      onFocus={trackFormStart}
                      required
                      placeholder="Max"
                      autoFocus
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      required
                      placeholder="max@startup.de"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Startup-Name *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={handleInputChange('company')}
                      required
                      placeholder="Mein Startup GmbH"
                    />
                  </div>

                  <div className="flex items-start gap-2 bg-gray-50 dark:bg-gray-800 p-3 sm:p-4 rounded-lg">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                      required
                      className="flex-shrink-0 mt-0.5"
                    />
                    <label htmlFor="consent" className="text-xs sm:text-sm cursor-pointer leading-tight">
                      Ich stimme der Verarbeitung meiner Daten gemäß der <a href="/datenschutz" className="text-[#003366] underline">Datenschutzerklärung</a> zu.
                    </label>
                  </div>

                  {error && (
                    <div className="bg-red-50 dark:bg-red-950/50 text-red-700 dark:text-red-400 p-4 rounded-lg text-sm border border-red-200 dark:border-red-800">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-[#e24e1b] hover:bg-[#c43e15] text-white py-3 sm:py-4 text-base sm:text-lg font-bold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="mr-2 h-4 w-4 sm:h-5 sm:w-5 animate-spin flex-shrink-0" />
                        <span>Wird gesendet...</span>
                      </>
                    ) : (
                      <>
                        <span>Jetzt 14 Tage kostenlos testen</span>
                        <Rocket className="ml-2 h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-center text-gray-500">
                    Nach der Testphase nur 29€/Monat • Jederzeit kündbar
                  </p>
                </form>
              </CardContent>
            </Card>

            <div className="mt-6 sm:mt-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 max-w-2xl mx-auto">
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-[#003366] font-bold text-base sm:text-lg">1</span>
                  </div>
                  <span className="text-white font-semibold text-xs sm:text-sm text-center">Account erstellen</span>
                </div>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white hidden sm:block flex-shrink-0" />
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-[#003366] font-bold text-base sm:text-lg">2</span>
                  </div>
                  <span className="text-white font-semibold text-xs sm:text-sm text-center">14 Tage testen</span>
                </div>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white hidden sm:block flex-shrink-0" />
                <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center shadow-lg flex-shrink-0">
                    <span className="text-[#003366] font-bold text-base sm:text-lg">3</span>
                  </div>
                  <span className="text-white font-semibold text-xs sm:text-sm text-center">29€/Monat zahlen</span>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="py-12 sm:py-16 bg-white">
          <div className="container px-4 mx-auto max-w-4xl text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Fragen zum Angebot?
            </h2>
            <p className="text-gray-600 mb-6">
              Schreiben Sie uns – wir antworten innerhalb von 24 Stunden.
            </p>
            <a href="mailto:hello@marsstein.ai" className="text-[#003366] font-semibold hover:underline">
              hello@marsstein.ai
            </a>
          </div>
        </AnimatedSection>
      </div>

      <Footer />
    </>
  );
};

export default StartupHeilbronn;
