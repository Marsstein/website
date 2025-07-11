import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Separator } from '@/components/ui/separator';
import { Shield, Award, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const productLinks = [
    { label: 'Privacy Audit', href: '#' },
    { label: 'Document Vault', href: '#' },
    { label: 'Compliance Academy', href: '#' },
    { label: 'Expert Reports', href: '#' },
    { label: 'Team Management', href: '#' },
    { label: 'API Access', href: '#' }
  ];

  const companyLinks = [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Partners', href: '#' },
    { label: 'News', href: '#' },
    { label: 'Case Studies', href: '#' },
    { label: 'Blog', href: '#' }
  ];

  const supportLinks = [
    { label: 'Help Center', href: '#' },
    { label: 'Documentation', href: '#' },
    { label: 'Status Page', href: '#' },
    { label: 'Contact Support', href: '#' },
    { label: 'Training', href: '#' },
    { label: 'Webinars', href: '#' }
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Data Processing Agreement', href: '#' },
    { label: 'Cookie Policy', href: '#' },
    { label: 'Imprint', href: '#' },
    { label: 'GDPR Compliance', href: '#' }
  ];

  const trustBadges = [
    { icon: Shield, label: 'GDPR\nCompliant' },
    { icon: Award, label: 'ISO 27001\nCertified' },
    { icon: CheckCircle, label: 'Swiss DPA\nApproved' }
  ];

  return (
    <footer className="bg-muted/50 border-t">
      <div className="container px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Logo */}
              <div className="flex items-center space-x-2">
                <img
                  src="/logo.jpeg"
                  alt="Marsstein Logo"
                  className="h-8 w-auto"
                />
                <span className="text-xl font-bold text-foreground">Marsstein</span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                Your trusted partner for GDPR, ISO27001, and privacy compliance across Germany, Switzerland, and Europe.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>contact@marsstein.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+41 44 123 45 67</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4" />
                  <span>Konstanz, Germany</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">{t('footer_product')}</h3>
              <ul className="space-y-3">
                {productLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">{t('footer_company')}</h3>
              <ul className="space-y-3">
                {companyLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">{t('footer_support')}</h3>
              <ul className="space-y-3">
                {supportLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">{t('footer_legal')}</h3>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-sm text-muted-foreground">
              © 2024 Marsstein. All rights reserved.
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <badge.icon className="h-4 w-4" />
                  <span className="whitespace-pre-line text-center leading-tight">{badge.label}</span>
                </div>
              ))}
            </div>

            {/* Language/Region */}
            <div className="text-sm text-muted-foreground">
              🇪🇺 Europe • 🇨🇭 Switzerland • 🇩🇪 Germany
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
