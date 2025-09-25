import React from 'react';
import { cn } from '@/lib/utils';
import {
  IconShieldCheck,
  IconAlertTriangle,
  IconCertificate,
  IconClipboardCheck,
  IconUsers,
  IconRobot,
} from '@tabler/icons-react';

export function TrustPlatformFeatures() {
  const features = [
    {
      title: "Automatisierte Compliance",
      description: "DSGVO-konform werden und bleiben – ganz ohne Excel-Chaos.",
      icon: <IconShieldCheck className="w-8 h-8" />,
    },
    {
      title: "Risikomanagement",
      description: "Alle Risiken zentral verwalten und im Blick behalten.",
      icon: <IconAlertTriangle className="w-8 h-8" />,
    },
    {
      title: "Trust Center",
      description: "Beweisen Sie Vertrauen – bevor Sie danach gefragt werden.",
      icon: <IconCertificate className="w-8 h-8" />,
    },
    {
      title: "Optimierte Audits",
      description: "Automatisch audit-ready – jederzeit und ohne Stress.",
      icon: <IconClipboardCheck className="w-8 h-8" />,
    },
    {
      title: "Vendor Risk Management",
      description: "Lieferantenrisiken mit KI-Unterstützung im Voraus erkennen.",
      icon: <IconUsers className="w-8 h-8" />,
    },
    {
      title: "Fragebogen-Automatisierung",
      description: "Schnellere Deals durch KI-gestützte Security-Reviews.",
      icon: <IconRobot className="w-8 h-8" />,
    },
  ];

  return (
    <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Die KI-gestützte Trust Management Plattform
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Egal wie groß Ihr Unternehmen ist – Marsstein automatisiert Compliance,
            verwaltet Risiken und schafft kontinuierliches Vertrauen. Alles aus einer einzigen, KI-gestützten Plattform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative z-10">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col py-10 px-8 relative group/feature transition-all duration-300",
        "border-b border-gray-200",
        index % 3 !== 2 && "lg:border-r",
        index < 3 && "lg:border-b",
        index >= 3 && "lg:border-b-0"
      )}
    >
      <div className="opacity-0 group-hover/feature:opacity-100 transition duration-300 absolute inset-0 h-full w-full bg-gradient-to-b from-[#e24e1b]/5 to-transparent pointer-events-none" />

      <div className="mb-4 relative z-10 text-[#e24e1b] group-hover/feature:text-[#d63f14] transition-colors duration-300">
        {icon}
      </div>

      <div className="text-lg font-bold mb-2 relative z-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/feature:bg-[#e24e1b] transition-all duration-300 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-300 inline-block text-gray-900 pl-4">
          {title}
        </span>
      </div>

      <p className="text-sm text-gray-600 relative z-10 pl-4 group-hover/feature:text-gray-700 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};