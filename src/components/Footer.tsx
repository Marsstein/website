import React, { useState } from 'react';
import { useLanguage } from '@/hooks/useLanguage';
import { Separator } from '@/components/ui/separator';
import { Mail, FileText, ShieldCheck, Wrench, BookOpen, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubscribed(true);
    setIsLoading(false);

    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  // Echte existierende Links basierend auf Projekt-Analyse
  const regulierungLinks = [
    { label: 'EU AI Act', href: '/eu-ai-act' },
    { label: 'DSGVO', href: '/dsgvo' },
    { label: 'Externer Datenschutzbeauftragter', href: '/externer-datenschutzbeauftragter' },
    { label: 'NIS2 Compliance', href: '/nis2-compliance' }
  ];

  const zertifizierungLinks = [
    { label: 'ISO 27001', href: '/iso-27001-zertifizierung' },
    { label: 'SOC2', href: '/soc2-zertifizierung' },
    { label: 'TISAX', href: '/tisax-zertifizierung' }
  ];

  const toolsLinks = [
    { label: 'Alle Tools', href: '/tools' },
    { label: 'DSGVO Test', href: '/assessment-center/datenschutz-test' },
    { label: 'Cookie Management', href: '/tools/cookie-management' },
    { label: 'Assessment Center', href: '/assessment-center' }
  ];

  const wissenLinks = [
    { label: 'DSGVO Leitfäden', href: '/wissen/dsgvo' },
    { label: 'KI Compliance', href: '/wissen/ki-datenschutz' },
    { label: 'Krisenmanagement', href: '/wissen/krisenmanagement' }
  ];


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
          {/* Newsletter Section */}
          <div className="backdrop-blur-xl bg-white/60 border border-white/40 rounded-2xl p-8 text-center shadow-[0_8px_32px_rgba(228,78,27,0.1)] mb-12">
            {isSubscribed ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-2 text-green-600">
                  <CheckCircle className="h-6 w-6" />
                  <p className="font-semibold text-lg">Erfolgreich abonniert!</p>
                </div>
                <p className="text-sm text-[#474747]">Sie erhalten in Kürze eine Bestätigungs-E-Mail.</p>
              </div>
            ) : (
              <>
                <h3 className="font-semibold text-[#232323] mb-3 text-lg">COMPLIANCE NEWSLETTER</h3>
                <p className="text-sm text-[#474747] mb-6">
                  Wöchentliche Insights • Sofort-Alerts bei kritischen Änderungen • Experten-Guides
                </p>
                <form onSubmit={handleSubscribe} className="max-w-2xl mx-auto">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Input
                      type="email"
                      placeholder="Ihre E-Mail-Adresse"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-11"
                      required
                    />
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] hover:from-[#f97316] hover:to-[#e24e1b] px-8 h-11 text-white font-medium transition-all duration-300"
                    >
                      {isLoading ? 'Lädt...' : 'Abonnieren'}
                    </Button>
                  </div>
                  <p className="text-xs text-[#474747] mt-3">
                    Kostenlos • DSGVO-konform • Jederzeit abmeldbar
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Logo Section from A1 */}
          <div className="mb-12 text-center">
            <Link to="/" className="inline-block mb-4">
              <img
                src="/JLogoMarsstein.svg"
                alt="Marsstein Logo"
                className="h-10 w-auto filter drop-shadow-[0_4px_20px_rgba(228,78,27,0.3)] hover:drop-shadow-[0_6px_30px_rgba(228,78,27,0.4)] transition-all duration-300"
              />
            </Link>
            <p className="text-xl font-light tracking-wide text-[#232323] mb-4">
              Compliance made simple
            </p>

            <div className="flex items-center justify-center gap-4">
              <a
                href="https://www.linkedin.com/company/marsstein"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-[#e24e1b]/10 to-[#f97316]/5 rounded-xl hover:from-[#e24e1b]/20 hover:to-[#f97316]/10 transition-all duration-300 hover:-translate-y-1 group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-[#e24e1b] group-hover:text-[#f97316] transition-colors" />
              </a>
              <a
                href="https://instagram.com/marsstein.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gradient-to-br from-[#e24e1b]/10 to-[#f97316]/5 rounded-xl hover:from-[#e24e1b]/20 hover:to-[#f97316]/10 transition-all duration-300 hover:-translate-y-1 group"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-[#e24e1b] group-hover:text-[#f97316] transition-colors" />
              </a>
            </div>
          </div>

          {/* Frosted Glass Cards Grid from A2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { title: 'REGULIERUNGEN', links: regulierungLinks, icon: FileText },
              { title: 'ZERTIFIZIERUNGEN', links: zertifizierungLinks, icon: ShieldCheck },
              { title: 'TOOLS & SERVICES', links: toolsLinks, icon: Wrench },
              { title: 'WISSEN & GUIDES', links: wissenLinks, icon: BookOpen }
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
                <a href="mailto:info@marsstein.ai" className="text-[#474747] hover:text-[#e24e1b] transition-colors">
                  info@marsstein.ai
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

        {/* Elegant Bottom with Legal Links */}
        <div className="border-t border-[#e24e1b]/10 py-8">
          <div className="flex flex-col items-center justify-center gap-4 text-sm">
            <div className="text-[#474747]">
              © 2025 Marsstein • Compliance made simple
            </div>
            <div className="flex items-center gap-2">
              <Link to="/agb" className="text-[#474747] hover:text-[#e24e1b] transition-colors">
                AGB
              </Link>
              <span className="text-[#474747]">•</span>
              <Link to="/impressum" className="text-[#474747] hover:text-[#e24e1b] transition-colors">
                Impressum
              </Link>
              <span className="text-[#474747]">•</span>
              <Link to="/datenschutz" className="text-[#474747] hover:text-[#e24e1b] transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};