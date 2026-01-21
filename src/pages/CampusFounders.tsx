import React, { useEffect, useRef } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import teamGroupImage from '@/assets/team/team-group.png';
import {
  Rocket,
  ArrowRight,
  FileText,
  Bot,
  Bell,
  Users,
  MapPin,
  Building2,
  Shield,
  Check,
  Award,
  UserCheck,
  Gift,
  Calendar,
  Mail
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import {
  useTracking,
  useSectionTracking,
  useScrollDepthTracking,
  useExitIntentTracking,
} from '@/hooks/useTracking';

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

const CampusFounders: React.FC = () => {
  const { trackButtonClick } = useTracking();

  useScrollDepthTracking('campus-founders');
  useExitIntentTracking({ page: 'campus-founders', form_started: false });

  const signupSectionRef = useSectionTracking('campus_founders_signup_section');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCTAClick = (location: string) => {
    trackButtonClick('campus_founders_cta', location);
    window.location.href = '/contact';
  };

  const features = [
    { icon: FileText, title: 'Guided Document Creation', desc: 'Records of Processing, TOMs, Privacy Policy – filled in step by step. No prior knowledge needed.' },
    { icon: Bot, title: 'Mars-AI Agent', desc: 'Your digital DPO for expert questions and autonomous task completion – available 24/7.' },
    { icon: Award, title: 'GDPR Audit & Certification', desc: 'System audit with DPO review and official Marsstein seal – build trust with customers & investors.' },
    { icon: Bell, title: 'Understand Legal Changes', desc: 'GDPR updates in plain language. What\'s changing? What do you need to do? Practical tips instead of legal jargon.' }
  ];

  return (
    <>
      <SEOHead
        title="Campus Founders Special: GDPR Professional Package for €29"
        description="Exclusive for Campus Founders members: The complete Marsstein Professional Package (worth €199) for only €29/month. Campus Founders Community Offer."
        canonical="/campus-founders"
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
                  Campus Founders
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
                      <span className="font-medium">GDPR Audit + Certificate</span>
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
                  <p className="mt-4 text-xs text-white/40">Exclusive for Campus Founders members</p>
                </div>
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

        {/* Case Study Program Section */}
        <AnimatedSection className="py-24 bg-gradient-to-br from-[#003366] to-[#001a33] relative overflow-hidden">
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-[#e24e1b]/10 rounded-full blur-[100px]"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-blue-400/10 rounded-full blur-[80px]"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          <div className="container px-4 mx-auto max-w-5xl relative z-10">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-[#e24e1b]/20 backdrop-blur-md border border-[#e24e1b]/30 rounded-full px-5 py-2 mb-6">
                <Gift className="w-5 h-5 text-[#e24e1b]" />
                <span className="text-white font-semibold text-sm">EXCLUSIVE: CASE STUDY PROGRAM</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                5 Free Spots for
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e24e1b] to-[#ff8c61]"> Your Success Story</span>
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                We're giving away <strong className="text-white">5 full Professional subscriptions</strong> as case studies.
                You become compliant for free – we tell your success story.
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left: What you get */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-6">What you get:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#e24e1b] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">12 months Professional access</strong> – completely free</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#e24e1b] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">Personal onboarding</strong> with our team</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#e24e1b] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">GDPR certificate</strong> for investors & customers</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#e24e1b] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white/90"><strong className="text-white">Priority support</strong> throughout the entire period</span>
                    </li>
                  </ul>

                  <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                    <p className="text-white/70 text-sm">
                      <strong className="text-white">Who we're looking for:</strong> Exciting startups with real compliance challenges – whether SaaS, HealthTech, FinTech, or B2B. You have a product that's growing and need GDPR security for the next step? That's exactly what we're here for.
                    </p>
                  </div>
                </div>

                {/* Right: CTA */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="text-center mb-6">
                    <div className="text-6xl font-bold text-white mb-2">5</div>
                    <p className="text-white/60 text-sm uppercase tracking-wider">Spots available</p>
                  </div>

                  <p className="text-white/80 text-center mb-8">
                    Apply now as a case study partner and become part of our success story in the Heilbronn startup ecosystem.
                  </p>

                  <div className="space-y-4">
                    <Button
                      size="lg"
                      className="w-full bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-xl font-bold text-lg px-8 py-6"
                      asChild
                    >
                      <a href="https://calendly.com/marsstein-info/marsstein-intro" target="_blank" rel="noopener noreferrer">
                        <Calendar className="mr-2 h-5 w-5" />Intro Call (15 Min) – Apply Now
                      </a>
                    </Button>
                    <Button
                      size="lg"
                      className="w-full bg-white text-[#003366] hover:bg-gray-100 font-semibold text-base px-6 py-6"
                      asChild
                    >
                      <a href="mailto:info@marsstein.ai?subject=Case%20Study%20Application%20-%20Campus%20Founders&body=Hi%20Marsstein%20Team%2C%0A%0AI%20would%20like%20to%20apply%20for%20the%20Case%20Study%20Program.%0A%0AStartup%3A%20%0AIndustry%3A%20%0ABrief%20Description%3A%20%0A%0ABest%20regards">
                        <Mail className="mr-2 h-5 w-5" />Apply via Email
                      </a>
                    </Button>
                  </div>

                  <p className="text-center text-white/40 text-xs mt-6">
                    Application deadline: While spots last
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection id="signup-form" className="py-24 bg-[#003366] relative overflow-hidden">
           {/* Decorative elements */}
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#e24e1b]/20 rounded-full blur-[100px] pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

          <div ref={signupSectionRef} className="container px-4 mx-auto max-w-xl relative z-10" data-section="signup">
            <div className="text-center">
              <Badge className="bg-[#e24e1b] hover:bg-[#e24e1b] text-white border-none mb-4 px-4 py-1 text-sm shadow-lg">
                Exclusive for Campus Founders
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-white/80 mb-8">
                Contact us to claim your exclusive Campus Founders offer.<br />
                €29/month instead of €199 – available only for Campus Founders members.
              </p>

              <Button
                size="lg"
                className="bg-[#e24e1b] hover:bg-[#c43e15] text-white text-lg px-12 py-7 shadow-[0_0_30px_rgba(226,78,27,0.4)] hover:shadow-[0_0_50px_rgba(226,78,27,0.6)] font-bold rounded-xl group transition-all duration-300"
                onClick={() => handleCTAClick('cta_section')}
              >
                <span className="mr-2">Contact Us</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <p className="text-center text-white/40 text-xs mt-6">
                €29/month plus VAT • Cancel monthly • No minimum term
              </p>
            </div>
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
                <AccordionTrigger>How does the GDPR Audit work?</AccordionTrigger>
                <AccordionContent>
                  Our System Audit includes four steps: (1) Kick-off & data collection in the first week, (2) Document review by our Data Protection Officer in the second week, (3) Feedback & remediation support over 3-5 days, and (4) Certification with official Marsstein seal. The entire process takes 2-3 weeks and results in a CERTIFIED seal you can display to customers and investors.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="faq-3">
                <AccordionTrigger>Who qualifies for this offer?</AccordionTrigger>
                <AccordionContent>
                  This offer is exclusively available to Campus Founders members. If you're part of the Campus Founders community in Heilbronn, you qualify for the special €29/month rate.
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

export default CampusFounders;
