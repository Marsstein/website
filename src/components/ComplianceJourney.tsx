import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { TracingBeam } from '@/components/ui/tracing-beam';
import { InlineMultiStepLoader } from '@/components/ui/inline-multi-step-loader';
import {
  ArrowRight,
  Clock,
  Shield,
  RefreshCw,
  Target,
  Sparkles,
  Users,
  Tag
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const complianceContent = [
  {
    badge: "01",
    title: "Das Problem",
    subtitle: "DSGVO war ein Versprechen, das niemand halten konnte",
    description: (
      <>
        <p className="text-gray-600 mb-4">
          Ein Moving Target, das immer schneller wegläuft, als Sie hinterherkommen.
          Sie sind gefangen zwischen Angst vor Bußgeldern und der Lähmung durch Bürokratie.
          Zwischen dem, was sein sollte, und dem, was ist.
        </p>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <p className="font-medium text-gray-900">
            Das war der wahre Preis der DSGVO. Nicht die Bußgelder - die Lebenszeit.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Ihre Lebenszeit. Verschwendet an Formulare, die niemand lesen will.
            An Prozesse, die niemand versteht. An eine Bürokratie, die niemand braucht.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">120+</div>
            <div className="text-xs text-gray-500">Stunden pro Audit</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">67%</div>
            <div className="text-xs text-gray-500">Unvollständige Docs</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">20 Mio €</div>
            <div className="text-xs text-gray-500">Maximale Strafe</div>
          </div>
        </div>
      </>
    ),
  },
  {
    badge: "02",
    title: "Das Fundament",
    subtitle: "Einmal das Fundament legen",
    description: (
      <>
        <p className="text-gray-600 mb-4">
          Ihre Unternehmensdaten eingeben. Darauf baut Marsstein ein ganzes Compliance-Haus.
          Stockwerk für Stockwerk. Dokument für Dokument. Stein auf Stein.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="font-medium text-gray-900">
            Datenschutz ist wichtig. Die Bürokratie drumherum nicht.
          </p>
        </div>
      </>
    ),
    features: true,
  },
  {
    badge: "03",
    title: "Die Zukunft",
    subtitle: "Ab jetzt läuft DSGVO wie die Buchhaltung",
    description: (
      <>
        <p className="text-gray-600 mb-4">
          Einfach mit. Niemand denkt mehr daran. Niemand spricht mehr darüber.
          Es ist einfach erledigt. Für immer.
        </p>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
          <p className="font-medium text-gray-900">
            Ihre Teams atmen auf. Ihr Unternehmen erinnert sich wieder, warum es existiert.
          </p>
          <p className="text-sm text-gray-600 mt-2">
            Der neue Markt? Kein Compliance-Problem. Die KI-Features? Kein Datenschutz-Drama.
            Nicht für Formulare. Für die Zukunft.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-gray-700">95% Zeitersparnis</span>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-gray-700">100% Compliance</span>
          </div>
          <div className="flex items-center gap-3">
            <RefreshCw className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-gray-700">Automatische Updates</span>
          </div>
          <div className="flex items-center gap-3">
            <Target className="w-5 h-5 text-emerald-600 flex-shrink-0" />
            <span className="text-gray-700">Fokus aufs Geschäft</span>
          </div>
        </div>
      </>
    ),
    cta: true,
  },
];

const loadingStates = [
  {
    text: "Automatische Dokumentenerstellung",
  },
  {
    text: "KI-gestützte Compliance-Prüfung",
  },
  {
    text: "Echtzeit-Überwachung",
  },
  {
    text: "Zentrale Verwaltung",
  },
];

export const ComplianceJourney = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
              ✓ Die Compliance-Revolution
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Von der Last zur Leichtigkeit
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Drei Schritte, die alles verändern. Von der Compliance-Hölle zum automatisierten Paradies.
            </p>
          </motion.div>

          <TracingBeam className="px-6">
            <div className="max-w-2xl mx-auto antialiased pt-4 relative">
              {complianceContent.map((item, index) => (
                <motion.div
                  key={`content-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-16"
                >
                  <h2 className={cn(
                    "text-white rounded-full text-sm w-fit px-4 py-1 mb-4",
                    index === 0 && "bg-gradient-to-r from-red-500 to-orange-500",
                    index === 1 && "bg-gradient-to-r from-blue-500 to-indigo-500",
                    index === 2 && "bg-gradient-to-r from-emerald-500 to-teal-500"
                  )}>
                    {item.badge}
                  </h2>

                  <div className="mb-4">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-lg text-gray-600">
                      {item.subtitle}
                    </p>
                  </div>

                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    {item.description}
                    {item.features && (
                      <div className="mt-6">
                        <InlineMultiStepLoader
                          loadingStates={loadingStates}
                          duration={1500}
                        />
                      </div>
                    )}
                    {item.cta && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="mt-8 p-8 relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F5F6F8] via-white to-[#e24e1b]/5 border-2 border-[#e24e1b]/20 shadow-xl"
                      >
                        <div className="absolute top-0 right-0 w-40 h-40 bg-[#e24e1b]/10 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#39B37B]/10 rounded-full blur-3xl" />

                        <div className="relative z-10">
                          <div className="text-center mb-6">
                            <Badge className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0 mb-4">
                              <Sparkles className="w-3 h-3 mr-1" />
                              LIMITED BETA ACCESS
                            </Badge>
                            <h4 className="text-2xl font-bold bg-gradient-to-r from-[#232323] to-[#474747] bg-clip-text text-transparent mb-3">
                              Werden Sie Beta-Tester
                            </h4>
                            <p className="text-[#474747] text-lg">
                              Gestalten Sie die Zukunft der Compliance mit uns
                            </p>
                          </div>

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#e24e1b]/10 hover:border-[#e24e1b]/30 transition-all duration-300 hover:shadow-lg">
                              <Users className="w-5 h-5 text-[#e24e1b] mb-2" />
                              <span className="block text-sm font-semibold text-[#232323]">Exklusive Community</span>
                              <span className="text-xs text-[#474747]">Direkter Draht zum Team</span>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#39B37B]/20 hover:border-[#39B37B]/40 transition-all duration-300 hover:shadow-lg">
                              <Tag className="w-5 h-5 text-[#39B37B] mb-2" />
                              <span className="block text-sm font-semibold text-[#232323]">50% Rabatt</span>
                              <span className="text-xs text-[#474747]">Nach der Beta-Phase</span>
                            </div>
                            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-[#e24e1b]/10 hover:border-[#e24e1b]/30 transition-all duration-300 hover:shadow-lg">
                              <Sparkles className="w-5 h-5 text-[#e24e1b] mb-2" />
                              <span className="block text-sm font-semibold text-[#232323]">Kostenlos testen</span>
                              <span className="text-xs text-[#474747]">Keine Kreditkarte nötig</span>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                              to="/beta"
                              className="flex-1 inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#e24e1b] to-[#f97316] rounded-xl hover:from-[#d63f14] hover:to-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl group transform hover:scale-[1.02]"
                            >
                              Jetzt Beta-Zugang sichern
                              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                              to="/preise"
                              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-[#474747] bg-white/90 backdrop-blur-sm border-2 border-[#232323]/20 rounded-xl hover:bg-[#F5F6F8] hover:border-[#232323]/30 transition-all duration-300 shadow-md hover:shadow-lg"
                            >
                              Preise ansehen
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </TracingBeam>

      </div>
    </section>
  );
};