import React from 'react';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Shield, Award, CheckCircle, Mail, Phone, MapPin, FileText, ShieldCheck, Wrench, BookOpen, Building2 } from 'lucide-react';

// Shared data for all footer variants
const sharedData = {
  regulierungLinks: [
    { label: 'EU AI Act', href: '/eu-ai-act' },
    { label: 'DSGVO', href: '/dsgvo' },
    { label: 'NIS2 Compliance', href: '/nis2-compliance' }
  ],
  zertifizierungLinks: [
    { label: 'ISO 27001', href: '/iso-27001-zertifizierung' },
    { label: 'SOC2', href: '/soc2-zertifizierung' },
    { label: 'TISAX', href: '/tisax-zertifizierung' }
  ],
  toolsLinks: [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'AI Check', href: '/dashboard/ai-check' },
    { label: 'Cookie Management', href: '/tools/cookie-management' },
    { label: 'Assessment Center', href: '/assessment-center' }
  ],
  wissenLinks: [
    { label: 'DSGVO Leitfäden', href: '/wissen/dsgvo' },
    { label: 'KI Compliance', href: '/wissen/ki-datenschutz' },
    { label: 'Krisenmanagement', href: '/wissen/krisenmanagement' }
  ],
  branchenLinks: [
    { label: 'Gesundheitswesen', href: '/branchen/gesundheitswesen' },
    { label: 'Finanzdienstleister', href: '/branchen/finanzdienstleister' },
    { label: 'E-Commerce', href: '/branchen/e-commerce' }
  ],
  unternehmenLinks: [
    { label: 'Academy', href: '/academy' },
    { label: 'Pricing', href: '/pricing' }
  ],
  trustBadges: [
    { icon: Shield, label: 'GDPR Compliant' },
    { icon: Award, label: 'ISO 27001 Certified' },
    { icon: CheckCircle, label: 'EU AI Act Approved' }
  ]
};

// Variante A1: Light Glassmorphism
const FooterVariantA1: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-white to-[#F5F6F8] overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#e24e1b]/20 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-[#e24e1b]/10 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 border border-[#e24e1b]/15 rounded-full"></div>
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="py-16">
          {/* Logo Section */}
          <div className="mb-12 text-center">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/JLogoMarsstein.svg" 
                alt="Marsstein Logo" 
                className="h-10 w-auto filter drop-shadow-[0_4px_20px_rgba(228,78,27,0.3)] hover:drop-shadow-[0_6px_30px_rgba(228,78,27,0.4)] transition-all duration-300"
              />
            </Link>
            <p className="text-xl font-light tracking-wide text-[#232323]">
              Compliance made simple
            </p>
          </div>

          {/* Glassmorphism Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'REGULIERUNGEN', links: sharedData.regulierungLinks, icon: FileText },
              { title: 'ZERTIFIZIERUNGEN', links: sharedData.zertifizierungLinks, icon: ShieldCheck },
              { title: 'TOOLS & SERVICES', links: sharedData.toolsLinks, icon: Wrench },
              { title: 'WISSEN & GUIDES', links: sharedData.wissenLinks, icon: BookOpen }
            ].map((section, index) => (
              <div key={index} className="backdrop-blur-sm bg-white/70 border border-[#e24e1b]/20 rounded-xl p-6 hover:bg-white/80 hover:backdrop-blur-md transition-all duration-300 hover:border-[#e24e1b]/40 shadow-lg hover:shadow-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#e24e1b]/10 rounded-lg">
                    <section.icon className="h-5 w-5 text-[#e24e1b]" />
                  </div>
                  <h3 className="font-semibold text-sm tracking-wider text-[#232323]">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.href} 
                        className="text-sm text-[#474747] hover:text-[#e24e1b] transition-colors block py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Card */}
          <div className="backdrop-blur-sm bg-white/70 border border-[#e24e1b]/20 rounded-xl p-6 text-center shadow-lg">
            <h3 className="font-semibold text-[#232323] mb-4">KONTAKT & SUPPORT</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#e24e1b]" />
                <a href="mailto:jayson.chen@marsstein.ai" className="text-[#474747] hover:text-[#e24e1b] transition-colors text-sm">
                  jayson.chen@marsstein.ai
                </a>
              </div>
              <Link 
                to="/contact" 
                className="bg-[#e24e1b] hover:bg-[#f97316] px-6 py-2 rounded-lg text-white font-medium transition-colors text-sm shadow-md hover:shadow-lg"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#e24e1b]/20 py-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-[#474747]">
              © 2025 Marsstein • Compliance made simple
            </div>
            <div className="flex items-center gap-4">
              {sharedData.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-1">
                  <badge.icon className="h-3 w-3 text-[#e24e1b]" />
                  <span className="text-[#474747] text-xs">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Variante A2: White Glassmorphism with Subtle Shadows
const FooterVariantA2: React.FC = () => {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Very Subtle Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-16 left-16 w-40 h-40 bg-gradient-to-br from-[#e24e1b]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-24 w-24 h-24 bg-gradient-to-br from-[#f97316]/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-1/4 w-32 h-32 bg-gradient-to-br from-[#e24e1b]/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="py-16">
          {/* Logo Section */}
          <div className="mb-12 text-center">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/JLogoMarsstein.svg" 
                alt="Marsstein Logo" 
                className="h-10 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-xl font-light tracking-wide text-[#232323]">
              Compliance made simple
            </p>
          </div>

          {/* Frosted Glass Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'REGULIERUNGEN', links: sharedData.regulierungLinks, icon: FileText },
              { title: 'ZERTIFIZIERUNGEN', links: sharedData.zertifizierungLinks, icon: ShieldCheck },
              { title: 'TOOLS & SERVICES', links: sharedData.toolsLinks, icon: Wrench },
              { title: 'WISSEN & GUIDES', links: sharedData.wissenLinks, icon: BookOpen }
            ].map((section, index) => (
              <div key={index} className="group backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-6 hover:bg-white/80 transition-all duration-500 shadow-[0_8px_32px_rgba(228,78,27,0.1)] hover:shadow-[0_16px_48px_rgba(228,78,27,0.15)] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 bg-gradient-to-br from-[#e24e1b]/20 to-[#f97316]/10 rounded-xl group-hover:from-[#e24e1b]/30 group-hover:to-[#f97316]/20 transition-all duration-300">
                    <section.icon className="h-5 w-5 text-[#e24e1b]" />
                  </div>
                  <h3 className="font-semibold text-sm tracking-wider text-[#232323]">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.href} 
                        className="text-sm text-[#474747] hover:text-[#e24e1b] transition-all duration-200 block py-1 hover:translate-x-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Premium Contact Card */}
          <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-8 text-center shadow-[0_8px_32px_rgba(228,78,27,0.1)]">
            <h3 className="font-semibold text-[#232323] mb-6 text-lg">KONTAKT & SUPPORT</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#e24e1b]/10 rounded-lg">
                  <Mail className="h-5 w-5 text-[#e24e1b]" />
                </div>
                <a href="mailto:jayson.chen@marsstein.ai" className="text-[#474747] hover:text-[#e24e1b] transition-colors">
                  jayson.chen@marsstein.ai
                </a>
              </div>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] hover:from-[#f97316] hover:to-[#e24e1b] px-8 py-3 rounded-xl text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>

        {/* Elegant Bottom */}
        <div className="border-t border-[#e24e1b]/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-[#474747]">
              © 2025 Marsstein • Compliance made simple
            </div>
            <div className="flex items-center gap-6">
              {sharedData.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                  <badge.icon className="h-4 w-4 text-[#e24e1b]" />
                  <span className="text-[#474747] text-xs">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Variante A3: Minimal White with Orange Accent Glassmorphism
const FooterVariantA3: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-b from-white via-[#FAFBFC] to-[#F5F6F8] overflow-hidden">
      {/* Floating Orange Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-12 right-12 w-2 h-2 bg-[#e24e1b] rounded-full opacity-60"></div>
        <div className="absolute top-32 left-20 w-1 h-1 bg-[#f97316] rounded-full opacity-40"></div>
        <div className="absolute bottom-32 right-32 w-1.5 h-1.5 bg-[#e24e1b] rounded-full opacity-50"></div>
        <div className="absolute bottom-16 left-16 w-1 h-1 bg-[#f97316] rounded-full opacity-30"></div>
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="py-20">
          {/* Minimalist Logo Section */}
          <div className="mb-16 text-center">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/JLogoMarsstein.svg" 
                alt="Marsstein Logo" 
                className="h-12 w-auto hover:scale-105 transition-transform duration-300"
              />
            </Link>
            <p className="text-2xl font-light tracking-wide text-[#232323] mb-2">
              Compliance made simple
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#e24e1b] to-transparent mx-auto"></div>
          </div>

          {/* Ultra-Clean Glass Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { title: 'Regulierungen', links: sharedData.regulierungLinks, icon: FileText, gradient: 'from-[#e24e1b]/5 to-[#f97316]/5' },
              { title: 'Zertifizierungen', links: sharedData.zertifizierungLinks, icon: ShieldCheck, gradient: 'from-[#f97316]/5 to-[#ea580c]/5' },
              { title: 'Tools & Services', links: sharedData.toolsLinks, icon: Wrench, gradient: 'from-[#ea580c]/5 to-[#e24e1b]/5' },
              { title: 'Wissen & Guides', links: sharedData.wissenLinks, icon: BookOpen, gradient: 'from-[#e24e1b]/5 to-[#f97316]/5' }
            ].map((section, index) => (
              <div key={index} className={`group relative overflow-hidden backdrop-blur-2xl bg-gradient-to-br ${section.gradient} border border-white/30 rounded-3xl p-8 hover:bg-white/50 transition-all duration-700 shadow-[0_4px_24px_rgba(228,78,27,0.05)] hover:shadow-[0_12px_40px_rgba(228,78,27,0.1)] hover:-translate-y-2`}>
                {/* Floating Icon */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#e24e1b]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-white/60 rounded-2xl mb-4 group-hover:bg-white/80 transition-all duration-300">
                    <section.icon className="h-6 w-6 text-[#e24e1b]" />
                  </div>
                  <h3 className="font-light text-lg text-[#232323] tracking-wide">
                    {section.title}
                  </h3>
                </div>
                
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.href} 
                        className="text-sm text-[#474747] hover:text-[#e24e1b] transition-all duration-300 block py-1 font-light hover:font-normal group-hover:translate-x-2"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Floating Contact Section */}
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e24e1b]/10 to-[#f97316]/10 rounded-3xl blur-xl transform scale-110"></div>
              <div className="relative backdrop-blur-2xl bg-white/60 border border-white/40 rounded-3xl p-10 shadow-[0_8px_32px_rgba(228,78,27,0.08)]">
                <h3 className="font-light text-2xl text-[#232323] mb-8 tracking-wide">
                  Lassen Sie uns sprechen
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <a 
                    href="mailto:jayson.chen@marsstein.ai" 
                    className="flex items-center gap-3 text-[#474747] hover:text-[#e24e1b] transition-all duration-300 font-light hover:font-normal"
                  >
                    <div className="p-2 bg-[#e24e1b]/10 rounded-xl">
                      <Mail className="h-5 w-5 text-[#e24e1b]" />
                    </div>
                    jayson.chen@marsstein.ai
                  </a>
                  <div className="w-px h-8 bg-[#e24e1b]/20 hidden sm:block"></div>
                  <Link 
                    to="/contact" 
                    className="group relative overflow-hidden bg-gradient-to-r from-[#e24e1b] to-[#f97316] px-10 py-4 rounded-2xl text-white font-light tracking-wide hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <span className="relative z-10">Beratung starten</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#f97316] to-[#ea580c] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="backdrop-blur-2xl bg-white/40 border border-white/30 rounded-3xl p-8">
              <h3 className="font-light text-lg text-[#232323] mb-6 tracking-wide">Branchen</h3>
              <ul className="space-y-3">
                {sharedData.branchenLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-[#474747] hover:text-[#e24e1b] transition-colors font-light hover:font-normal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="backdrop-blur-2xl bg-white/40 border border-white/30 rounded-3xl p-8">
              <h3 className="font-light text-lg text-[#232323] mb-6 tracking-wide">Unternehmen</h3>
              <ul className="space-y-3">
                {sharedData.unternehmenLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-[#474747] hover:text-[#e24e1b] transition-colors font-light hover:font-normal"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Ultra-Minimal Bottom */}
        <div className="border-t border-[#e24e1b]/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm font-light">
            <div className="text-[#474747]">
              © 2025 Marsstein • Compliance made simple
            </div>
            <div className="flex items-center gap-8">
              {sharedData.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity">
                  <badge.icon className="h-3 w-3 text-[#e24e1b]" />
                  <span className="text-[#474747] text-xs">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Variante A5: Hybrid aus A1 Logo + A2 Rest
const FooterVariantA5: React.FC = () => {
  return (
    <footer className="relative bg-white overflow-hidden">
      {/* Very Subtle Background Elements from A2 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-16 left-16 w-40 h-40 bg-gradient-to-br from-[#e24e1b]/5 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-24 w-24 h-24 bg-gradient-to-br from-[#f97316]/5 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-24 left-1/4 w-32 h-32 bg-gradient-to-br from-[#e24e1b]/5 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="py-16">
          {/* Logo Section from A1 */}
          <div className="mb-12 text-center">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/JLogoMarsstein.svg" 
                alt="Marsstein Logo" 
                className="h-10 w-auto filter drop-shadow-[0_4px_20px_rgba(228,78,27,0.3)] hover:drop-shadow-[0_6px_30px_rgba(228,78,27,0.4)] transition-all duration-300"
              />
            </Link>
            <p className="text-xl font-light tracking-wide text-[#232323]">
              Compliance made simple
            </p>
          </div>

          {/* Frosted Glass Cards Grid from A2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'REGULIERUNGEN', links: sharedData.regulierungLinks, icon: FileText },
              { title: 'ZERTIFIZIERUNGEN', links: sharedData.zertifizierungLinks, icon: ShieldCheck },
              { title: 'TOOLS & SERVICES', links: sharedData.toolsLinks, icon: Wrench },
              { title: 'WISSEN & GUIDES', links: sharedData.wissenLinks, icon: BookOpen }
            ].map((section, index) => (
              <div key={index} className="group backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-6 hover:bg-white/80 transition-all duration-500 shadow-[0_8px_32px_rgba(228,78,27,0.1)] hover:shadow-[0_16px_48px_rgba(228,78,27,0.15)] hover:-translate-y-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-3 bg-gradient-to-br from-[#e24e1b]/20 to-[#f97316]/10 rounded-xl group-hover:from-[#e24e1b]/30 group-hover:to-[#f97316]/20 transition-all duration-300">
                    <section.icon className="h-5 w-5 text-[#e24e1b]" />
                  </div>
                  <h3 className="font-semibold text-sm tracking-wider text-[#232323]">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.href} 
                        className="text-sm text-[#474747] hover:text-[#e24e1b] transition-all duration-200 block py-1 hover:translate-x-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Premium Contact Card from A2 */}
          <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-8 text-center shadow-[0_8px_32px_rgba(228,78,27,0.1)]">
            <h3 className="font-semibold text-[#232323] mb-6 text-lg">KONTAKT & SUPPORT</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#e24e1b]/10 rounded-lg">
                  <Mail className="h-5 w-5 text-[#e24e1b]" />
                </div>
                <a href="mailto:jayson.chen@marsstein.ai" className="text-[#474747] hover:text-[#e24e1b] transition-colors">
                  jayson.chen@marsstein.ai
                </a>
              </div>
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] hover:from-[#f97316] hover:to-[#e24e1b] px-8 py-3 rounded-xl text-white font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>

        {/* Elegant Bottom from A2 */}
        <div className="border-t border-[#e24e1b]/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-[#474747]">
              © 2025 Marsstein • Compliance made simple
            </div>
            <div className="flex items-center gap-6">
              {sharedData.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                  <badge.icon className="h-4 w-4 text-[#e24e1b]" />
                  <span className="text-[#474747] text-xs">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Original dark variant becomes A4
const FooterVariantA4: React.FC = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#232323] to-[#474747] text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-[#e24e1b]/30 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-[#e24e1b]/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/3 w-24 h-24 border border-[#e24e1b]/20 rounded-full"></div>
      </div>
      
      <div className="container px-4 relative z-10">
        <div className="py-12">
          {/* Logo with Glow */}
          <div className="mb-8 text-center">
            <Link to="/" className="inline-block mb-4">
              <img 
                src="/JLogoMarsstein.svg" 
                alt="Marsstein Logo" 
                className="h-10 w-auto filter drop-shadow-[0_0_20px_rgba(228,78,27,0.4)] hover:drop-shadow-[0_0_30px_rgba(228,78,27,0.6)] transition-all duration-300"
              />
            </Link>
            <p className="text-xl font-light tracking-wide text-white/90">
              Compliance made simple
            </p>
          </div>

          {/* Glassmorphism Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'REGULIERUNGEN', links: sharedData.regulierungLinks, icon: FileText },
              { title: 'ZERTIFIZIERUNGEN', links: sharedData.zertifizierungLinks, icon: ShieldCheck },
              { title: 'TOOLS & SERVICES', links: sharedData.toolsLinks, icon: Wrench },
              { title: 'WISSEN & GUIDES', links: sharedData.wissenLinks, icon: BookOpen }
            ].map((section, index) => (
              <div key={index} className="backdrop-blur-lg bg-white/10 border border-[#e24e1b]/30 rounded-xl p-6 hover:bg-white/15 transition-all duration-300 hover:border-[#e24e1b]/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-[#e24e1b]/20 rounded-lg">
                    <section.icon className="h-5 w-5 text-[#e24e1b]" />
                  </div>
                  <h3 className="font-semibold text-sm tracking-wider text-white/90">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.href} 
                        className="text-sm text-white/70 hover:text-[#e24e1b] transition-colors block py-1"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Card */}
          <div className="backdrop-blur-lg bg-white/10 border border-[#e24e1b]/30 rounded-xl p-6 text-center">
            <h3 className="font-semibold text-white mb-4">KONTAKT & SUPPORT</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#e24e1b]" />
                <a href="mailto:jayson.chen@marsstein.ai" className="text-white/70 hover:text-[#e24e1b] transition-colors text-sm">
                  jayson.chen@marsstein.ai
                </a>
              </div>
              <Link 
                to="/contact" 
                className="bg-[#e24e1b] hover:bg-[#f97316] px-6 py-2 rounded-lg text-white font-medium transition-colors text-sm"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 py-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-white/60">
              © 2025 Marsstein • Compliance made simple
            </div>
            <div className="flex items-center gap-4">
              {sharedData.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-1">
                  <badge.icon className="h-3 w-3 text-[#e24e1b]" />
                  <span className="text-white/60 text-xs">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Variante B: Card System with Hover Animations
const FooterVariantB: React.FC = () => {
  return (
    <footer className="bg-[#F5F6F8] py-16">
      <div className="container px-4">
        {/* Logo */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-block mb-4">
            <img 
              src="/JLogoMarsstein.svg" 
              alt="Marsstein Logo" 
              className="h-8 w-auto hover:scale-105 transition-transform duration-300"
            />
          </Link>
          <p className="text-lg font-semibold text-[#232323]">
            Compliance made simple
          </p>
        </div>

        {/* Interactive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {[
            { title: 'Regulierungen', links: sharedData.regulierungLinks, icon: FileText, color: 'bg-gradient-to-br from-[#e24e1b] to-[#f97316]' },
            { title: 'Zertifizierungen', links: sharedData.zertifizierungLinks, icon: ShieldCheck, color: 'bg-gradient-to-br from-[#e24e1b] to-[#ea580c]' },
            { title: 'Tools & Services', links: sharedData.toolsLinks, icon: Wrench, color: 'bg-gradient-to-br from-[#f97316] to-[#e24e1b]' },
            { title: 'Wissen & Guides', links: sharedData.wissenLinks, icon: BookOpen, color: 'bg-gradient-to-br from-[#ea580c] to-[#e24e1b]' },
            { title: 'Branchen', links: sharedData.branchenLinks, icon: Building2, color: 'bg-gradient-to-br from-[#e24e1b] to-[#f97316]' },
            { title: 'Unternehmen', links: sharedData.unternehmenLinks, icon: Award, color: 'bg-gradient-to-br from-[#f97316] to-[#ea580c]' }
          ].map((section, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border-t-4 border-[#e24e1b]"
            >
              {/* Header with Gradient */}
              <div className={`${section.color} p-6 text-white`}>
                <div className="flex items-center gap-3">
                  <section.icon className="h-6 w-6" />
                  <h3 className="font-bold text-lg">{section.title}</h3>
                </div>
              </div>
              
              {/* Links */}
              <div className="p-6">
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.href} 
                        className="text-[#474747] hover:text-[#e24e1b] transition-colors flex items-center gap-2 group-hover:translate-x-1 duration-300"
                      >
                        <span className="w-1 h-1 bg-[#e24e1b] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA Card */}
        <div className="bg-gradient-to-r from-[#232323] to-[#474747] rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Bereit für Compliance Excellence?</h3>
          <p className="text-white/80 mb-6">Lassen Sie uns gemeinsam Ihre Compliance-Herausforderungen lösen.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:jayson.chen@marsstein.ai" className="flex items-center gap-2 text-white/80 hover:text-white transition-colors">
              <Mail className="h-4 w-4" />
              jayson.chen@marsstein.ai
            </a>
            <Link 
              to="/contact" 
              className="bg-[#e24e1b] hover:bg-[#f97316] px-8 py-3 rounded-lg font-semibold transition-colors hover:scale-105 duration-200"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <Separator className="my-8" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#474747]">
          <div>© 2025 Marsstein • Impressum • Datenschutz • AGB</div>
          <div className="flex items-center gap-4">
            {sharedData.trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-1">
                <badge.icon className="h-3 w-3 text-[#e24e1b]" />
                <span className="text-xs">{badge.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// Variante C: Geometric Mars-Shield Inspired
const FooterVariantC: React.FC = () => {
  return (
    <footer className="relative bg-[#232323] text-white overflow-hidden">
      {/* Geometric Background */}
      <div className="absolute inset-0">
        <svg className="absolute top-0 left-0 w-full h-full opacity-10" viewBox="0 0 1000 400">
          <defs>
            <linearGradient id="marsGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{stopColor: '#e24e1b', stopOpacity: 0.3}} />
              <stop offset="100%" style={{stopColor: '#f97316', stopOpacity: 0.1}} />
            </linearGradient>
          </defs>
          <polygon points="0,0 300,0 250,400 0,400" fill="url(#marsGradient)" />
          <polygon points="700,0 1000,0 1000,400 750,400" fill="url(#marsGradient)" />
          <polygon points="400,100 600,100 580,300 420,300" fill="url(#marsGradient)" />
        </svg>
      </div>

      <div className="container px-4 relative z-10">
        <div className="py-16">
          {/* Shield-Inspired Logo Section */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <div className="absolute -inset-8 bg-gradient-to-r from-[#e24e1b]/20 to-[#f97316]/20 rounded-full blur-xl"></div>
              <Link to="/" className="relative block">
                <img 
                  src="/JLogoMarsstein.svg" 
                  alt="Marsstein Logo" 
                  className="h-12 w-auto mx-auto mb-4"
                />
              </Link>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-[#e24e1b] to-[#f97316] bg-clip-text text-transparent mb-2">
              Marsstein
            </h2>
            <p className="text-xl text-white/80 font-light">
              Compliance made simple
            </p>
          </div>

          {/* Geometric Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {[
              {
                title: 'Compliance Solutions',
                sections: [
                  { name: 'Regulierungen', links: sharedData.regulierungLinks, icon: FileText },
                  { name: 'Zertifizierungen', links: sharedData.zertifizierungLinks, icon: ShieldCheck }
                ]
              },
              {
                title: 'Tools & Knowledge',
                sections: [
                  { name: 'Tools & Services', links: sharedData.toolsLinks, icon: Wrench },
                  { name: 'Wissen & Guides', links: sharedData.wissenLinks, icon: BookOpen }
                ]
              }
            ].map((group, groupIndex) => (
              <div key={groupIndex} className="relative">
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-[#e24e1b] transform rotate-45"></div>
                <div className="border-l-4 border-[#e24e1b] pl-8">
                  <h3 className="text-2xl font-bold mb-8 text-white">{group.title}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {group.sections.map((section, sectionIndex) => (
                      <div key={sectionIndex}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="p-2 bg-gradient-to-br from-[#e24e1b] to-[#f97316] rounded-lg">
                            <section.icon className="h-4 w-4 text-white" />
                          </div>
                          <h4 className="font-semibold text-white/90 uppercase tracking-wide text-sm">
                            {section.name}
                          </h4>
                        </div>
                        <ul className="space-y-2 ml-6">
                          {section.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                              <Link 
                                to={link.href} 
                                className="text-sm text-white/70 hover:text-[#e24e1b] transition-colors block py-1 hover:translate-x-1 duration-200"
                              >
                                ▸ {link.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Shield */}
          <div className="text-center">
            <div className="inline-block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#e24e1b] to-[#f97316] rounded-lg transform -rotate-1"></div>
              <div className="relative bg-[#232323] border-2 border-[#e24e1b] rounded-lg p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-[#e24e1b]" />
                    <a href="mailto:jayson.chen@marsstein.ai" className="text-white hover:text-[#e24e1b] transition-colors">
                      jayson.chen@marsstein.ai
                    </a>
                  </div>
                  <Link 
                    to="/contact" 
                    className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] px-6 py-3 rounded-lg text-white font-semibold hover:from-[#f97316] hover:to-[#e24e1b] transition-all duration-300 transform hover:scale-105"
                  >
                    Mission starten
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#e24e1b]/30 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-white/60">
              © 2025 Marsstein • Securing the digital frontier
            </div>
            <div className="flex items-center gap-6">
              {sharedData.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-white/60">
                  <badge.icon className="h-4 w-4 text-[#e24e1b]" />
                  <span className="text-xs">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Variante D: Minimalist Premium
const FooterVariantD: React.FC = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-[#F5F6F8]">
      <div className="container px-4">
        <div className="py-20">
          {/* Minimalist Header */}
          <div className="text-center mb-16">
            <Link to="/" className="inline-block mb-6">
              <img 
                src="/JLogoMarsstein.svg" 
                alt="Marsstein Logo" 
                className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </Link>
            <h2 className="text-4xl font-light text-[#232323] mb-4 tracking-wide">
              Compliance made simple
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#e24e1b] to-transparent mx-auto"></div>
          </div>

          {/* Clean Grid */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
              {[
                { title: 'Regulierungen', links: sharedData.regulierungLinks },
                { title: 'Zertifizierungen', links: sharedData.zertifizierungLinks },
                { title: 'Tools & Services', links: sharedData.toolsLinks },
                { title: 'Wissen & Guides', links: sharedData.wissenLinks }
              ].map((section, index) => (
                <div key={index} className="group">
                  <div className="border-l-2 border-[#e24e1b] pl-6 mb-6">
                    <h3 className="text-[#232323] font-light text-lg tracking-[2px] uppercase">
                      {section.title}
                    </h3>
                  </div>
                  <ul className="space-y-4">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link 
                          to={link.href} 
                          className="text-[#474747] hover:text-[#e24e1b] transition-colors duration-300 text-sm font-light hover:font-normal leading-relaxed block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Minimal Contact */}
            <div className="text-center mb-16">
              <div className="max-w-2xl mx-auto">
                <h3 className="text-2xl font-light text-[#232323] mb-8 tracking-wide">
                  Lassen Sie uns sprechen
                </h3>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                  <a 
                    href="mailto:jayson.chen@marsstein.ai" 
                    className="flex items-center gap-3 text-[#474747] hover:text-[#e24e1b] transition-colors duration-300 font-light"
                  >
                    <Mail className="h-5 w-5" />
                    jayson.chen@marsstein.ai
                  </a>
                  <div className="w-px h-6 bg-[#e24e1b]/30 hidden sm:block"></div>
                  <Link 
                    to="/contact" 
                    className="group relative overflow-hidden bg-[#e24e1b] text-white px-8 py-3 font-light tracking-wide hover:bg-[#232323] transition-all duration-300"
                  >
                    <span className="relative z-10">Beratung starten</span>
                    <div className="absolute inset-0 bg-[#232323] transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                  </Link>
                </div>
              </div>
            </div>

            {/* Branches & Company */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <div className="border-l-2 border-[#e24e1b]/50 pl-6 mb-6">
                  <h3 className="text-[#232323] font-light text-lg tracking-[2px] uppercase">
                    Branchen
                  </h3>
                </div>
                <ul className="space-y-3">
                  {sharedData.branchenLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href} 
                        className="text-[#474747] hover:text-[#e24e1b] transition-colors duration-300 text-sm font-light hover:font-normal leading-relaxed"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="border-l-2 border-[#e24e1b]/50 pl-6 mb-6">
                  <h3 className="text-[#232323] font-light text-lg tracking-[2px] uppercase">
                    Unternehmen
                  </h3>
                </div>
                <ul className="space-y-3">
                  {sharedData.unternehmenLinks.map((link, index) => (
                    <li key={index}>
                      <Link 
                        to={link.href} 
                        className="text-[#474747] hover:text-[#e24e1b] transition-colors duration-300 text-sm font-light hover:font-normal leading-relaxed"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra Minimal Bottom */}
        <div className="border-t border-[#e24e1b]/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-[#474747] font-light">
            <div className="flex items-center gap-6">
              <span>© 2025 Marsstein</span>
              <div className="flex items-center gap-4">
                <Link to="#" className="hover:text-[#e24e1b] transition-colors">Impressum</Link>
                <span>•</span>
                <Link to="#" className="hover:text-[#e24e1b] transition-colors">Datenschutz</Link>
                <span>•</span>
                <Link to="#" className="hover:text-[#e24e1b] transition-colors">AGB</Link>
              </div>
            </div>
            <div className="flex items-center gap-6">
              {sharedData.trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                  <badge.icon className="h-3 w-3 text-[#e24e1b]" />
                  <span className="text-xs">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterTest: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-[#232323] text-white py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Footer Design Varianten</h1>
        <p className="text-white/80">Verschiedene Design-Ansätze für den Marsstein Footer</p>
      </div>

      {/* Variant A1 */}
      <section id="variant-a1" className="mb-16">
        <div className="bg-[#F5F6F8] py-8 text-center">
          <h2 className="text-2xl font-bold text-[#232323] mb-2">Variante A1: Light Glassmorphism</h2>
          <p className="text-[#474747]">Weißer Hintergrund mit subtilen Glassmorphism-Karten und sanften Schatten</p>
        </div>
        <FooterVariantA1 />
      </section>

      {/* Variant A2 */}
      <section id="variant-a2" className="mb-16">
        <div className="bg-[#232323] text-white py-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Variante A2: White Frosted Glass</h2>
          <p className="text-white/80">Premium Glassmorphism mit stärkeren Blur-Effekten und Hover-Animationen</p>
        </div>
        <FooterVariantA2 />
      </section>

      {/* Variant A3 */}
      <section id="variant-a3" className="mb-16">
        <div className="bg-[#F5F6F8] py-8 text-center">
          <h2 className="text-2xl font-bold text-[#232323] mb-2">Variante A3: Minimal Glass Premium</h2>
          <p className="text-[#474747]">Ultra-minimalistisch mit floating Orange-Elementen und Premium-Ästhetik</p>
        </div>
        <FooterVariantA3 />
      </section>

      {/* Variant A4 */}
      <section id="variant-a4" className="mb-16">
        <div className="bg-[#232323] text-white py-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Variante A4: Original Dark Glassmorphism</h2>
          <p className="text-white/80">Dunkler Hintergrund mit Glassmorphism-Effekten (Original-Variante)</p>
        </div>
        <FooterVariantA4 />
      </section>

      {/* Variant A5 - Hybrid */}
      <section id="variant-a5" className="mb-16">
        <div className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white py-8 text-center">
          <h2 className="text-2xl font-bold mb-2">✨ Variante A5: Hybrid (A1 Logo + A2 Design)</h2>
          <p className="text-white/90">Perfekte Kombination: A1 Logo-Bereich mit A2 Premium Glassmorphism</p>
        </div>
        <FooterVariantA5 />
      </section>

      {/* Variant B */}
      <section id="variant-b" className="mb-16">
        <div className="bg-[#232323] text-white py-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Variante B: Interactive Card System</h2>
          <p className="text-white/80">Interaktive Karten mit Hover-Animationen und Gradient-Headern</p>
        </div>
        <FooterVariantB />
      </section>

      {/* Variant C */}
      <section id="variant-c" className="mb-16">
        <div className="bg-[#F5F6F8] py-8 text-center">
          <h2 className="text-2xl font-bold text-[#232323] mb-2">Variante C: Geometric Mars-Shield</h2>
          <p className="text-[#474747]">Mars-inspiriertes Design mit geometrischen Elementen und Shield-Motiven</p>
        </div>
        <FooterVariantC />
      </section>

      {/* Variant D */}
      <section id="variant-d" className="mb-16">
        <div className="bg-[#232323] text-white py-8 text-center">
          <h2 className="text-2xl font-bold mb-2">Variante D: Minimalist Premium</h2>
          <p className="text-white/80">Clean, spacious Design mit subtilen Akzenten und Premium-Look</p>
        </div>
        <FooterVariantD />
      </section>

      {/* Navigation */}
      <div className="fixed top-4 right-4 z-50">
        <div className="bg-white shadow-lg rounded-lg p-4 text-sm max-w-48">
          <div className="font-semibold text-[#232323] mb-3">Design-Varianten:</div>
          <div className="space-y-1">
            <a href="#variant-a1" className="block text-[#474747] hover:text-[#e24e1b] transition-colors">A1: Light Glass</a>
            <a href="#variant-a2" className="block text-[#474747] hover:text-[#e24e1b] transition-colors">A2: Frosted Glass</a>
            <a href="#variant-a3" className="block text-[#474747] hover:text-[#e24e1b] transition-colors">A3: Minimal Premium</a>
            <a href="#variant-a4" className="block text-[#474747] hover:text-[#e24e1b] transition-colors">A4: Dark Glass</a>
            <a href="#variant-a5" className="block text-[#e24e1b] font-semibold hover:text-[#f97316] transition-colors">✨ A5: Hybrid</a>
            <div className="border-t pt-2 mt-2">
              <a href="#variant-b" className="block text-[#474747] hover:text-[#e24e1b] transition-colors">B: Card System</a>
              <a href="#variant-c" className="block text-[#474747] hover:text-[#e24e1b] transition-colors">C: Geometric</a>
              <a href="#variant-d" className="block text-[#474747] hover:text-[#e24e1b] transition-colors">D: Minimalist</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTest;