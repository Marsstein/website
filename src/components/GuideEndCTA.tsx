import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import {
  Shield,
  Award,
  ArrowRight,
  Sparkles,
  Lock,
  FileCheck,
  Bot,
  Users,
  Building2,
  Scale,
  AlertTriangle
} from 'lucide-react';
import { cn } from '@/lib/utils';

export type GuideType =
  | 'dsgvo'
  | 'iso27001'
  | 'soc2'
  | 'euaiact'
  | 'nis2'
  | 'tisax'
  | 'hinweisgeberschutz'
  | 'geldwaesche'
  | 'branche'
  | 'ki'
  | 'crisis'
  | 'legal';

interface GuideEndCTAProps {
  type: GuideType;
  variant?: 'default' | 'compact' | 'sidebar';
  className?: string;
}

const ctaConfigs = {
  dsgvo: {
    title: 'DSGVO-Compliance automatisieren',
    subtitle: 'Von der Theorie zur Praxis',
    description: 'Erfahren Sie, wie MARSSTEIN Sie bei der vollständigen DSGVO-Compliance unterstützt.',
    icon: Shield,
    gradient: 'from-[#e24e1b] to-[#ea580c]',
    bgPattern: 'from-[#e24e1b]/5 via-transparent to-[#ea580c]/5',
    link: '/dsgvo',
    ctaText: 'Mehr zur DSGVO-Lösung',
    badge: 'BELIEBTESTE LÖSUNG'
  },
  iso27001: {
    title: 'ISO 27001 Zertifizierung starten',
    subtitle: 'Der strukturierte Weg zur Zertifizierung',
    description: 'Erfahren Sie, wie MARSSTEIN Sie professionell durch den gesamten Zertifizierungsprozess begleitet.',
    icon: Award,
    gradient: 'from-[#003366] to-[#1F1F24]',
    bgPattern: 'from-[#003366]/5 via-transparent to-[#1F1F24]/5',
    link: '/iso-27001-zertifizierung',
    ctaText: 'Mehr zur ISO 27001 Lösung',
    badge: 'ENTERPRISE READY'
  },
  soc2: {
    title: 'SOC 2 Zertifizierung erreichen',
    subtitle: 'Trust Service Criteria erfüllen',
    description: 'Erfahren Sie, wie MARSSTEIN Sie bei der SOC 2 Compliance unterstützt.',
    icon: Lock,
    gradient: 'from-[#474747] to-[#232323]',
    bgPattern: 'from-[#474747]/5 via-transparent to-[#232323]/5',
    link: '/soc2-zertifizierung',
    ctaText: 'Mehr zur SOC 2 Lösung',
    badge: 'FÜR SAAS'
  },
  euaiact: {
    title: 'EU AI Act Compliance sicherstellen',
    subtitle: 'KI-Systeme rechtskonform betreiben',
    description: 'Erfahren Sie, wie MARSSTEIN Sie bei der EU AI Act Compliance unterstützt.',
    icon: Bot,
    gradient: 'from-[#e24e1b] via-[#ea580c] to-[#f97316]',
    bgPattern: 'from-[#e24e1b]/5 via-transparent to-[#f97316]/5',
    link: '/eu-ai-act',
    ctaText: 'Mehr zur EU AI Act Lösung',
    badge: 'ZUKUNFTSSICHER'
  },
  nis2: {
    title: 'NIS2-Compliance umsetzen',
    subtitle: 'Kritische Infrastrukturen schützen',
    description: 'Erfahren Sie, wie MARSSTEIN Sie bei der Erfüllung der NIS2-Anforderungen unterstützt.',
    icon: Shield,
    gradient: 'from-blue-500 to-cyan-500',
    bgPattern: 'from-blue-500/5 via-transparent to-cyan-500/5',
    link: '/nis2-compliance',
    ctaText: 'Mehr zur NIS2 Lösung',
    badge: 'KRITISCHE INFRASTRUKTUR'
  },
  branche: {
    title: 'Branchenspezifische Compliance',
    subtitle: 'Maßgeschneidert für Ihre Branche',
    description: 'Erfahren Sie, wie MARSSTEIN Sie mit branchenspezifischen Compliance-Lösungen unterstützt.',
    icon: Building2,
    gradient: 'from-emerald-500 to-teal-500',
    bgPattern: 'from-emerald-500/5 via-transparent to-teal-500/5',
    link: '/branchen',
    ctaText: 'Branchen-Lösung entdecken',
    badge: 'SPEZIALISIERT'
  },
  ki: {
    title: 'KI-Datenschutz implementieren',
    subtitle: 'Privacy-Preserving AI',
    description: 'Erfahren Sie, wie MARSSTEIN Sie bei datenschutzkonformer KI-Entwicklung unterstützt.',
    icon: Sparkles,
    gradient: 'from-purple-500 to-pink-500',
    bgPattern: 'from-purple-500/5 via-transparent to-pink-500/5',
    link: '/wissen/ki-datenschutz',
    ctaText: 'Mehr zum KI-Datenschutz',
    badge: 'INNOVATION'
  },
  crisis: {
    title: 'Krisenmanagement-Plan erstellen',
    subtitle: 'Vorbereitet sein im Ernstfall',
    description: 'Erfahren Sie, wie MARSSTEIN Sie beim Aufbau eines Krisenmanagement-Plans unterstützt.',
    icon: AlertTriangle,
    gradient: 'from-red-500 to-orange-500',
    bgPattern: 'from-red-500/5 via-transparent to-orange-500/5',
    link: '/wissen/krisenmanagement',
    ctaText: 'Mehr zum Krisenmanagement',
    badge: 'NOTFALL-BEREIT'
  },
  legal: {
    title: 'Compliance auf Basis aktueller Rechtsprechung',
    subtitle: 'Rechtssicher durch Updates bleiben',
    description: 'Erfahren Sie, wie MARSSTEIN Sie über aktuelle rechtliche Entwicklungen informiert.',
    icon: Scale,
    gradient: 'from-indigo-500 to-purple-500',
    bgPattern: 'from-indigo-500/5 via-transparent to-purple-500/5',
    link: '/wissen/rechtsprechung',
    ctaText: 'Mehr zur Rechtsprechung',
    badge: 'IMMER AKTUELL'
  },
  tisax: {
    title: 'TISAX Assessment bestehen',
    subtitle: 'Automotive-spezifische Security',
    description: 'Erfahren Sie, wie MARSSTEIN Sie bei der TISAX-Vorbereitung unterstützt.',
    icon: Award,
    gradient: 'from-slate-600 to-slate-800',
    bgPattern: 'from-slate-600/5 via-transparent to-slate-800/5',
    link: '/tisax-zertifizierung',
    ctaText: 'Mehr zur TISAX Lösung',
    badge: 'AUTOMOTIVE'
  },
  hinweisgeberschutz: {
    title: 'Hinweisgebersystem einrichten',
    subtitle: 'Whistleblowing-Richtlinie umsetzen',
    description: 'Erfahren Sie, wie MARSSTEIN Sie beim Aufbau eines rechtskonformen Hinweisgebersystems unterstützt.',
    icon: Users,
    gradient: 'from-cyan-500 to-blue-500',
    bgPattern: 'from-cyan-500/5 via-transparent to-blue-500/5',
    link: '/hinweisgeberschutzgesetz',
    ctaText: 'Mehr zum Hinweisgeberschutz',
    badge: 'PFLICHT AB 50 MA'
  },
  geldwaesche: {
    title: 'Geldwäscheprävention aufbauen',
    subtitle: 'GwG-Compliance sicherstellen',
    description: 'Erfahren Sie, wie MARSSTEIN Sie bei der Geldwäscheprävention unterstützt.',
    icon: FileCheck,
    gradient: 'from-amber-500 to-orange-500',
    bgPattern: 'from-amber-500/5 via-transparent to-orange-500/5',
    link: '/geldwaeschegesetz',
    ctaText: 'Mehr zur GwG-Lösung',
    badge: 'FINANZSEKTOR'
  }
};

export const GuideEndCTA: React.FC<GuideEndCTAProps> = ({
  type,
  variant = 'default',
  className
}) => {
  const config = ctaConfigs[type];
  const Icon = config.icon;

  if (variant === 'compact') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn("my-12", className)}
      >
        <Card className="border-2 border-[#e24e1b]/20 bg-gradient-to-br from-white to-[#F5F6F8] overflow-hidden">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <div className={cn(
                "flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center",
                config.gradient
              )}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#232323] mb-2">
                  {config.title}
                </h3>
                <p className="text-sm text-[#474747] mb-4">
                  {config.subtitle}
                </p>
                <Button
                  asChild
                  className={cn("w-full sm:w-auto bg-gradient-to-r text-white", config.gradient)}
                >
                  <Link to={config.link}>
                    {config.ctaText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  if (variant === 'sidebar') {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={cn("sticky top-24", className)}
      >
        <Card className="border-2 border-[#e24e1b]/20 overflow-hidden">
          <div className={cn("h-2 bg-gradient-to-r", config.gradient)} />
          <CardContent className="p-6">
            <div className="text-center mb-4">
              <div className={cn(
                "inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br items-center justify-center mb-4",
                config.gradient
              )}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#232323] mb-2">
                Vom Lesen zum Handeln
              </h3>
              <p className="text-sm text-[#474747] mb-4">
                {config.title}
              </p>
            </div>

            <Button
              asChild
              className={cn("w-full bg-gradient-to-r text-white", config.gradient)}
            >
              <Link to={config.link}>
                {config.ctaText}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </motion.div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("relative my-20 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden", className)}
    >
      <div className={cn("absolute inset-0 bg-gradient-to-br", config.bgPattern)} />

      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#e24e1b] rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#ea580c] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="border-2 border-[#e24e1b]/20 shadow-2xl bg-white/95 backdrop-blur-sm overflow-hidden">
            <div className={cn("h-1.5 bg-gradient-to-r", config.gradient)} />

            <CardContent className="p-8 sm:p-12">
              <div className="text-center">
                <Badge className={cn(
                  "mb-6 px-4 py-1.5 text-white border-0",
                  `bg-gradient-to-r ${config.gradient}`
                )}>
                  <Sparkles className="h-3.5 w-3.5 mr-2" />
                  {config.badge}
                </Badge>

                <div className="flex justify-center mb-6">
                  <div className={cn(
                    "w-20 h-20 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-xl",
                    config.gradient
                  )}>
                    <Icon className="h-10 w-10 text-white" />
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-bold text-[#232323] mb-4">
                  {config.title}
                </h2>

                <p className="text-lg text-[#e24e1b] font-semibold mb-4">
                  {config.subtitle}
                </p>

                <p className="text-base text-[#474747] max-w-2xl mx-auto mb-8">
                  {config.description}
                </p>

                <Button
                  asChild
                  size="lg"
                  className={cn(
                    "bg-gradient-to-r text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 group",
                    config.gradient
                  )}
                >
                  <Link to={config.link}>
                    {config.ctaText}
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
};
