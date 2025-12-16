import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import teamGroupImage from '@/assets/team/team-group.png';
import {
  Rocket,
  ArrowRight,
  FileText,
  Clock,
  Bot,
  Bell,
  Users,
  MapPin,
  Building2,
  Shield,
  Check,
  Lock,
  Award,
  UserCheck
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
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
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
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
    window.scrollTo(0, 0);
  }, []);

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
      setError('Please fill in all required fields.');
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
          offer: 'professional-29-heilbronn-special'
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Registration failed');
      }

      identifyUser(formData.email, {
        email: formData.email,
        name: formData.firstName,
        company: formData.company,
        signup_source: 'startup_heilbronn',
        offer: 'professional-29-heilbronn-special'
      });

      trackFormSubmit(true);
      navigate('/beta/thanks');
    } catch (err) {
      console.error('Startup Heilbronn registration error:', err);
      const errorMessage = 'There was an error during registration. Please try again.';
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

  const features = [
    { icon: FileText, title: 'Guided Document Creation', desc: 'Records of Processing, TOMs, Privacy Policy – filled in step by step. No prior knowledge needed.' },
    { icon: Bot, title: 'Mars-AI Agent', desc: 'Your autonomous compliance partner: completes tasks automatically and answers questions in real-time.' },
    { icon: Award, title: 'GDPR Audit & Certification', desc: 'Marsstein seal for demonstrable compliance – build trust with customers & investors.' },
    { icon: Bell, title: 'Understand Legal Changes', desc: 'GDPR updates in plain language. What\'s changing? What do you need to do? Practical tips instead of legal jargon.' }
  ];

  return (
    <>
      <SEOHead
        title="Heilbronn Startup Special: GDPR Professional Package for €29"
        description="Exclusive for Heilbronn founders: The complete Marsstein Professional Package (worth €199) for only €29/month. Campus Founders Community Offer."
        canonical="/startup-heilbronn"
      />
      <Header />

      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          id="hero-section"
          data-section="hero"
          className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#003366]"
        >
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid.svg')] opacity-10" />
            <motion.div
              className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#e24e1b]/20 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-0 left-1/3 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px]"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container relative px-4 mx-auto z-10">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 shadow-xl"
              >
                <MapPin className="w-4 h-4 text-[#e24e1b]" />
                <span className="text-white font-semibold tracking-wide text-sm">HEILBRONN FOUNDER SPECIAL</span>
                <div className="w-px h-4 bg-white/20 mx-2" />
                <span className="text-white/80 text-sm">Limited Offer</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              >
                Professional GDPR Protection for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e24e1b] to-[#ff8c61]">
                  Heilbronn Visionaries
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg md:text-2xl text-white/80 mb-10 max-w-3xl leading-relaxed"
              >
                The complete <strong>Professional Package</strong> (worth €199) exclusively for our ecosystem.
                So you can focus on your product, not on bureaucracy.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
              >
                <Button
                  size="lg"
                  className="bg-[#e24e1b] hover:bg-[#c43e15] text-white text-lg px-8 py-7 shadow-[0_0_30px_rgba(226,78,27,0.4)] hover:shadow-[0_0_50px_rgba(226,78,27,0.6)] font-bold rounded-xl w-full sm:w-auto group transition-all duration-300"
                  onClick={() => handleCTAClick('hero')}
                >
                  <span className="mr-2">Claim Offer</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <div className="flex flex-col items-start">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">€29</span>
                    <span className="text-white/60">/ month</span>
                  </div>
                  <span className="text-sm text-white/40 line-through">Regular €199</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-12 flex items-center justify-center gap-8 text-white/40 grayscale opacity-70"
              >
                <div className="flex flex-col items-center gap-1">
                  <Building2 className="w-8 h-8" />
                  <span className="text-xs font-semibold">STARTUP FRIENDLY</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col items-center gap-1">
                  <Shield className="w-8 h-8" />
                  <span className="text-xs font-semibold">GDPR VERIFIED</span>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="flex flex-col items-center gap-1">
                  <Rocket className="w-8 h-8" />
                  <span className="text-xs font-semibold">CAMPUS FOUNDERS PARTNER</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Value Proposition Grid */}
        <AnimatedSection className="py-24 bg-gray-50">
          <div className="container px-4 mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-[#003366] mb-6">
                Because big ideas shouldn't need big budgets
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Compliance isn't a nice-to-have – it determines investors, customers, and scalability.
                We believe in Heilbronn as a startup hub and give you the tools at cost price.
                No marketing gimmick, just our way of strengthening the ecosystem. You grow, we grow. Win-win.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:border-[#e24e1b]/30 hover:shadow-xl transition-all duration-300 group">
                  <div className="w-14 h-14 bg-[#003366]/5 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#e24e1b] transition-colors duration-300">
                    <feature.icon className="w-7 h-7 text-[#003366] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* The Offer Comparison - The "No-Brainer" Section */}
        <AnimatedSection className="py-24 bg-white overflow-hidden">
          <div className="container px-4 mx-auto max-w-5xl">
            <div className="relative">
              {/* Background gradient blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#e24e1b]/5 to-[#003366]/5 rounded-full blur-3xl -z-10" />

              <div className="text-center mb-12">
                <Badge className="bg-[#e24e1b] text-white px-4 py-1 mb-4">DEAL ANALYSIS</Badge>
                <h2 className="text-4xl font-bold text-gray-900">The Direct Comparison</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden border border-gray-200">
                {/* Standard Pricing */}
                <div className="bg-gray-50 p-8 md:p-12 flex flex-col items-center text-center opacity-70 grayscale-[0.5] scale-95 origin-right">
                  <h3 className="text-xl font-bold text-gray-500 mb-2">Standard Professional</h3>
                  <div className="text-4xl font-bold text-gray-400 mb-6 line-through decoration-red-500 decoration-2">
                    €199<span className="text-lg font-normal">/mo.</span>
                  </div>
                  <ul className="space-y-4 text-gray-500 text-sm mb-8">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4" /> Full Compliance Suite</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4" /> External DPO</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4" /> 1000 AI Queries</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4" /> API Access</li>
                  </ul>
                  <Button variant="outline" disabled className="w-full">Regular Price</Button>
                </div>

                {/* Heilbronn Special */}
                <div className="bg-[#003366] p-8 md:p-12 flex flex-col items-center text-center relative z-10 transform md:scale-105 shadow-2xl border-4 border-[#e24e1b]/20">
                  <div className="absolute top-0 right-0 bg-[#e24e1b] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                    SAVE 85%
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Heilbronn Special</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-6xl font-bold text-white">€29</span>
                    <span className="text-xl text-white/60">/mo.</span>
                  </div>
                  <p className="text-white/60 text-sm mb-6">For Campus Founders Members</p>

                  <ul className="space-y-4 text-white text-left mb-8 w-full">
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#e24e1b] flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">Identical Feature Set</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#e24e1b] flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">Includes External DPO (Digital)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#e24e1b] flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">Cancel Monthly</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#e24e1b] flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">Personal Onboarding Call</span>
                    </li>
                  </ul>

                  <Button
                    className="w-full bg-[#e24e1b] hover:bg-[#ff5e2b] text-white py-6 text-lg font-bold shadow-lg shadow-[#e24e1b]/20"
                    onClick={() => handleCTAClick('comparison_table')}
                  >
                    Claim Deal Now
                  </Button>
                  <p className="mt-4 text-xs text-white/40">Limited to 50 spots in 2025.</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Detailed Feature Matrix */}
        <AnimatedSection className="py-24 bg-white relative">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

          <div className="container px-4 mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#003366] mb-6 max-w-3xl mx-auto leading-tight">
                The Professional Package covers all GDPR requirements. <span className="text-[#e24e1b]">No hidden modules, no extra charges.</span>
              </h2>
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Table Header (Hidden on mobile) */}
              <div className="hidden md:grid grid-cols-12 gap-4 bg-gray-50/80 p-6 border-b border-gray-100 text-sm font-bold text-gray-500 uppercase tracking-wider">
                <div className="col-span-5">Feature</div>
                <div className="col-span-5">Details</div>
                <div className="col-span-2 text-center">Status</div>
              </div>

              {/* Table Rows */}
              <div className="divide-y divide-gray-100">
                {[
                  {
                    icon: FileText,
                    title: "Automated Documentation",
                    desc: "Records of Processing, TOMs, Deletion Concept & Risk Analyses automatically created.",
                    detail: "Fully complies with Art. 30 & 32 GDPR."
                  },
                  {
                    icon: Shield,
                    title: "Website Scanner & Protection",
                    desc: "Crawler finds trackers & updates privacy policy.",
                    detail: "Incl. Cookie Banner (CMP) & Legal Notice."
                  },
                  {
                    icon: Bot,
                    title: "Mars-AI Assistant",
                    desc: "Your digital DPO for all expert questions (1000 queries/month).",
                    detail: "Available 24/7, legally compliant answers."
                  },
                  {
                    icon: UserCheck,
                    title: "DPA & Vendor Management",
                    desc: "Management of all service providers (AWS, Google, etc.).",
                    detail: "Incl. risk assessment for US providers."
                  },
                  {
                    icon: Users,
                    title: "Employee Training",
                    desc: "Awareness training & confidentiality agreements.",
                    detail: "Demonstrable compliance for your team."
                  },
                  {
                    icon: Bell,
                    title: "Updates & Alerts",
                    desc: "Automatic notification of legal changes.",
                    detail: "Always up-to-date (e.g., AI Act, ePrivacy)."
                  }
                ].map((feature, idx) => (
                  <div key={idx} className="grid md:grid-cols-12 gap-4 p-6 items-center hover:bg-blue-50/30 transition-colors group">
                    {/* Icon & Title */}
                    <div className="col-span-12 md:col-span-5 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-[#003366]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#003366] group-hover:text-white transition-all duration-300">
                        <feature.icon className="w-5 h-5 text-[#003366] group-hover:text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{feature.title}</h3>
                        <p className="text-gray-500 text-sm md:hidden mt-1">{feature.desc}</p>
                      </div>
                    </div>

                    {/* Description (Desktop) */}
                    <div className="hidden md:block col-span-5">
                      <p className="text-gray-700 font-medium">{feature.desc}</p>
                      <p className="text-gray-400 text-sm mt-1">{feature.detail}</p>
                    </div>

                    {/* Status Badge */}
                    <div className="col-span-12 md:col-span-2 flex md:justify-center items-center mt-2 md:mt-0">
                      <div className="inline-flex items-center gap-1.5 bg-[#e24e1b]/10 text-[#e24e1b] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                        <Check className="w-3 h-3" />
                        Included
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Callout */}
              <div className="bg-gray-50 p-6 text-center border-t border-gray-100">
                <p className="text-sm text-gray-500">
                  Additionally, you get access to our <strong>Template Library</strong> and <strong>Email Support</strong>.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Team Mission Statement */}
        <AnimatedSection className="py-24 bg-white">
          <div className="container px-4 mx-auto max-w-6xl">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <div className="relative h-[600px] md:h-[500px]">
                <img
                  src={teamGroupImage}
                  alt="Marsstein Team"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#003366]/90 via-[#003366]/60 to-transparent"></div>
              </div>
              <div className="absolute inset-0 flex items-end">
                <div className="w-full p-8 md:p-12 lg:p-16">
                  <div className="max-w-4xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 mb-6">
                      <Users className="w-4 h-4 text-white" />
                      <span className="text-white font-semibold text-xs uppercase tracking-wider">Our Team</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                      The Marsstein team combines{' '}
                      <span className="text-[#e24e1b]">Product, Engineering, AI, and Growth</span>
                      {' '}into one clear mission.
                    </h3>

                    <p className="text-xl md:text-2xl text-white/90 font-light mb-8 leading-relaxed">
                      "Regulation becomes usable software — secure, audit-ready, and scalable."
                    </p>

                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 max-w-2xl">
                      <p className="text-white/80 text-sm md:text-base leading-relaxed">
                        We look forward to meeting you and being part of your startup journey.
                        Our goal is to grow with you and personally ensure that GDPR compliance
                        doesn't become a brake, but a quality mark. Our product grows with your requirements –
                        just like all of us. Let's get started together!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Signup Form Section */}
        <AnimatedSection id="signup-form" className="py-24 bg-[#003366] relative overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#e24e1b]/20 rounded-full blur-[100px] pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

          <div ref={signupSectionRef} className="container px-4 mx-auto max-w-xl relative z-10" data-section="signup">
            <div className="text-center mb-10">
              <Badge className="bg-[#e24e1b] hover:bg-[#e24e1b] text-white border-none mb-4 px-4 py-1 text-sm shadow-lg">
                Limited Time Only
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-4">
                Claim Your Offer
              </h2>
              <p className="text-white/80">
                Start your 14-day free trial now.<br />
                No credit card required. Trial ends automatically.
              </p>
            </div>

            <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-gray-700 font-medium">First Name</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange('firstName')}
                        onFocus={trackFormStart}
                        required
                        placeholder="Max"
                        className="bg-gray-50 border-gray-200 focus:border-[#003366] focus:ring-[#003366]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-gray-700 font-medium">Startup Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={handleInputChange('company')}
                        required
                        placeholder="Future GmbH"
                        className="bg-gray-50 border-gray-200 focus:border-[#003366] focus:ring-[#003366]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 font-medium">Business Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange('email')}
                      required
                      placeholder="max@startup.com"
                      className="bg-gray-50 border-gray-200 focus:border-[#003366] focus:ring-[#003366]"
                    />
                  </div>

                  <div className="bg-blue-50/50 p-4 rounded-lg border border-blue-100">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-600">Package: Professional (Heilbronn)</span>
                      <span className="text-sm font-bold text-[#e24e1b] line-through">€199</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-900">Your Price:</span>
                      <span className="text-xl font-bold text-[#003366]">€29 <span className="text-xs font-normal text-gray-500">/month</span></span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="consent"
                      checked={formData.consent}
                      onCheckedChange={(checked) => setFormData({ ...formData, consent: checked as boolean })}
                      required
                      className="mt-1 data-[state=checked]:bg-[#e24e1b] data-[state=checked]:border-[#e24e1b]"
                    />
                    <label htmlFor="consent" className="text-xs text-gray-500 leading-snug cursor-pointer">
                      I agree to the processing of my data according to the <a href="/privacy" className="text-[#003366] underline hover:text-[#e24e1b]">Privacy Policy</a>. I confirm that my startup is part of the Heilbronn startup ecosystem (e.g., Campus Founders).
                    </label>
                  </div>

                  {error && (
                    <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm flex items-center gap-2">
                      <Lock className="w-4 h-4" />
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    className="w-full bg-[#e24e1b] hover:bg-[#c43e15] text-white py-6 text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Clock className="mr-2 h-5 w-5 animate-spin" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Start 14-Day Free Trial
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            <p className="text-center text-white/40 text-xs mt-6">
              After trial: €29/month plus VAT • Cancel monthly • No minimum term
            </p>
          </div>
        </AnimatedSection>

        {/* FAQ Section */}
        <AnimatedSection className="py-20 bg-white">
          <div className="container px-4 mx-auto max-w-3xl">
             <h2 className="text-2xl font-bold text-center text-[#003366] mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible>
              <AccordionItem value="faq-1">
                <AccordionTrigger>Is this price permanent?</AccordionTrigger>
                <AccordionContent>
                  Yes, as long as your subscription is active, you keep the price of €29/month. Even if we raise our prices later.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-2">
                <AccordionTrigger>What happens after the 14 days?</AccordionTrigger>
                <AccordionContent>
                  Nothing happens automatically. We'll send you an email. If you want to continue, you enter your payment details then. If not, the trial ends automatically.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Who qualifies as a "Heilbronn Startup"?</AccordionTrigger>
                <AccordionContent>
                  We're not strict about this. If you founded in the Heilbronn area (including the district) or have a connection to the ecosystem (e.g., Campus Founders), you're welcome.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-4">
                <AccordionTrigger>Is a Data Protection Officer really included?</AccordionTrigger>
                <AccordionContent>
                  The Professional package provides you with the role of an external DPO digitally. For complex legal advice, we have partner lawyers at special rates. For 95% of startups, our digital solution is completely sufficient.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </AnimatedSection>

        <Footer />
      </div>
    </>
  );
};

export default StartupHeilbronn;
