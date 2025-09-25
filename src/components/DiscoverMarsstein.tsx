import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PointerHighlight } from '@/components/ui/pointer-highlight';
import {
  BookOpen,
  Shield,
  Building2,
  Users,
  Compass,
  ArrowRight,
  Sparkles,
  FileText,
  Scale,
  MessageCircle,
  Phone
} from 'lucide-react';

const features = [
  {
    title: 'Compliance Frameworks',
    subtitle: 'Alle Rahmenwerke im Überblick',
    description: 'Von DSGVO über ISO 27001 bis zu branchenspezifischen Standards – verstehen und implementieren Sie jedes Framework mit Leichtigkeit.',
    link: '/wissen/compliance-frameworks',
    icon: Shield,
    iconBg: 'bg-[#e24e1b]/10',
    iconColor: 'text-[#e24e1b]',
    hoverBg: 'hover:bg-[#e24e1b]/5',
    highlight: 'DSGVO • ISO 27001 • SOC2'
  },
  {
    title: 'DSGVO Meisterkurs',
    subtitle: 'Datenschutz verständlich gemacht',
    description: 'Praktische Leitfäden, Checklisten und Schritt-für-Schritt Anleitungen die Ihre DSGVO-Compliance zum Kinderspiel machen.',
    link: '/wissen/dsgvo',
    icon: Scale,
    iconBg: 'bg-[#e24e1b]/10',
    iconColor: 'text-[#e24e1b]',
    hoverBg: 'hover:bg-[#e24e1b]/5',
    highlight: 'Leitfäden • Vorlagen • Praxis'
  },
  {
    title: 'Branchenlösungen',
    subtitle: 'Maßgeschneidert für Sie',
    description: 'Ob E-Commerce, SaaS oder Gesundheitswesen – entdecken Sie spezifische Compliance-Lösungen für Ihre Branche.',
    link: '/wissen/branchen',
    icon: Building2,
    iconBg: 'bg-[#e24e1b]/10',
    iconColor: 'text-[#e24e1b]',
    hoverBg: 'hover:bg-[#e24e1b]/5',
    highlight: 'E-Commerce • SaaS • Healthcare'
  },
  {
    title: 'Unsere Mission',
    subtitle: 'Das Team hinter Marsstein',
    description: 'Erfahren Sie, warum wir Marsstein entwickelt haben und wie unsere Vision Compliance für immer verändern wird.',
    link: '/ueber-uns',
    icon: Users,
    iconBg: 'bg-[#e24e1b]/10',
    iconColor: 'text-[#e24e1b]',
    hoverBg: 'hover:bg-[#e24e1b]/5',
    highlight: 'Team • Vision • Werte'
  },
  {
    title: 'Wissenszentrum',
    subtitle: 'Ihr Compliance-Kompass',
    description: 'Aktuelle Rechtsprechung, Best Practices und alles was Sie für erfolgreiche Compliance-Implementierung brauchen.',
    link: '/wissen',
    icon: BookOpen,
    iconBg: 'bg-[#e24e1b]/10',
    iconColor: 'text-[#e24e1b]',
    hoverBg: 'hover:bg-[#e24e1b]/5',
    highlight: 'Guides • Updates • Ressourcen'
  },
  {
    title: 'Kontakt aufnehmen',
    subtitle: 'Wir sind für Sie da',
    description: 'Haben Sie Fragen? Unser Expertenteam hilft Ihnen gerne bei allen Compliance-Herausforderungen und findet die perfekte Lösung für Ihr Unternehmen.',
    link: '/contact',
    icon: MessageCircle,
    iconBg: 'bg-gradient-to-br from-[#e24e1b]/10 to-[#f97316]/10',
    iconColor: 'text-[#e24e1b]',
    hoverBg: 'hover:bg-gradient-to-br hover:from-[#e24e1b]/5 hover:to-[#f97316]/5',
    highlight: 'Support • Beratung • Demo',
    isSpecial: true
  }
];

export const DiscoverMarsstein = () => {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with PointerHighlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Entdecken Sie die Welt von
            <PointerHighlight>
              <span>Marsstein</span>
            </PointerHighlight>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ihr Kompass durch die Compliance-Landschaft – von praktischen Leitfäden
            bis zu branchenspezifischen Lösungen.
          </p>
        </motion.div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.link}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={feature.link}
                className="block h-full group"
              >
                <div className={`
                  relative h-full p-6 rounded-xl backdrop-blur-sm
                  shadow-sm transition-all duration-300
                  hover:shadow-xl hover:-translate-y-1
                  ${feature.isSpecial
                    ? 'bg-gradient-to-br from-[#e24e1b]/5 via-white to-[#39B37B]/5 border-2 border-[#e24e1b]/30 hover:border-[#e24e1b]/50'
                    : 'bg-white border border-gray-200 hover:border-gray-300'
                  }
                  ${feature.hoverBg}
                `}>

                  {/* Content */}
                  <div className="relative">
                    {/* Icon */}
                    <div className={`
                      inline-flex items-center justify-center w-12 h-12 rounded-lg mb-5
                      ${feature.iconBg} ${feature.iconColor}
                      transition-transform duration-300 group-hover:scale-110
                    `}>
                      <feature.icon className="w-6 h-6" />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#e24e1b] transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mb-4">
                      {feature.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-gray-600 mb-5 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Highlight tags */}
                    <div className="mb-5">
                      <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                        {feature.highlight}
                      </span>
                    </div>

                    {/* CTA with arrow */}
                    <div className="flex items-center gap-2 text-sm font-semibold text-[#e24e1b] group-hover:text-[#d63f14] transition-colors">
                      <span>{feature.isSpecial ? 'Jetzt kontaktieren' : 'Mehr erfahren'}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>

                    {/* Special badge for contact card */}
                    {feature.isSpecial && (
                      <div className="absolute -top-2 -right-2">
                        <div className="bg-gradient-to-r from-[#e24e1b] to-[#39B37B] text-white text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          <span>Persönlich</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};