import React, { useState } from 'react';
import SEOHead from '../../components/SEOHead';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { motion } from 'framer-motion';
import { Shield, Target, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DataProtectionAssessment } from '@/components/DataProtectionAssessment';

const DataProtectionTest = () => {
  const [showAssessment, setShowAssessment] = useState(false);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Assessment",
    "name": "DSGVO Datenschutz Test - Compliance Check 2025",
    "description": "Kostenloser DSGVO Datenschutz Test für Unternehmen. Prüfen Sie Ihre Datenschutz-Compliance in 5 Minuten mit unserem interaktiven Online-Test und erhalten Sie eine detaillierte Analyse.",
    "educationalLevel": "Professional",
    "url": "https://marsstein.ai/assessment-center/datenschutz-test",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein",
      "url": "https://marsstein.ai"
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="DSGVO Datenschutz Test 2025 - Kostenloser Compliance Check"
        description="Testen Sie Ihre DSGVO-Compliance kostenlos in 5 Minuten. Unser Datenschutz Test analysiert Ihre Sicherheits-Lücken und gibt personalisierte Handlungsempfehlungen für 2025."
        canonical="/assessment-center/datenschutz-test"
        structuredData={structuredData}
      />
      <Header />

      {!showAssessment ? (
        <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#e24e1b]/10 to-[#ea580c]/10 backdrop-blur-sm rounded-full mb-8 border border-[#e24e1b]/20"
              >
                <Shield className="h-5 w-5 text-[#e24e1b] animate-pulse" />
                <span className="text-sm font-semibold text-[#e24e1b]">INTELLIGENTES ASSESSMENT</span>
                <Target className="h-5 w-5 text-[#e24e1b] animate-pulse" style={{ animationDelay: '0.5s' }} />
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-[#232323] via-[#e24e1b] to-[#232323] bg-clip-text text-transparent bg-300% animate-gradient"
              >
                DSGVO Datenschutz Test
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg md:text-xl text-[#474747] max-w-3xl mx-auto leading-relaxed mb-12"
              >
                Testen Sie Ihre DSGVO-Compliance kostenlos! Unser interaktiver Datenschutz Test
                analysiert Ihre <span className="font-semibold text-[#e24e1b]">Datenschutz- und Sicherheits-Lücken</span> in
                nur 5 Minuten und zeigt Ihnen konkrete Handlungsempfehlungen für 2025.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="grid md:grid-cols-3 gap-6 mb-12"
              >
                {[
                  {
                    icon: Target,
                    title: 'Adaptive Fragen',
                    description: 'Fragen passen sich Ihrer Unternehmenssituation an'
                  },
                  {
                    icon: Shield,
                    title: 'Lücken-Analyse',
                    description: 'Identifiziert kritische Compliance-Risiken'
                  },
                  {
                    icon: CheckCircle2,
                    title: 'Paket-Empfehlung',
                    description: 'Personalisierte Lösung für Ihre Lücken'
                  }
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + idx * 0.1 }}
                    className="bg-gray-50 rounded-xl p-6 border border-gray-200"
                  >
                    <feature.icon className="h-10 w-10 text-[#e24e1b] mx-auto mb-4" />
                    <h3 className="text-lg font-bold text-[#232323] mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#474747]">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1 }}
              >
                <Button
                  onClick={() => setShowAssessment(true)}
                  size="lg"
                  className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white hover:shadow-2xl transition-all duration-300 px-12 py-6 text-lg font-bold group"
                >
                  <Sparkles className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                  Datenschutz Test jetzt starten
                  <Target className="h-5 w-5 ml-2 group-hover:rotate-90 transition-transform duration-300" />
                </Button>
                <p className="text-sm text-[#474747] mt-4">
                  ⏱️ Dauert nur ~5 Minuten • Kostenlos • Keine Anmeldung erforderlich
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border border-gray-200"
            >
              <h2 className="text-2xl font-bold text-[#232323] mb-6 text-center">
                Was Sie erwartet:
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-bold text-[#e24e1b] mb-3">
                    Phase 1: Kontext (4 Fragen)
                  </h3>
                  <ul className="space-y-2 text-sm text-[#474747]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      Unternehmensgröße & Mitarbeiter
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      Art der verarbeiteten Daten
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      Kerntätigkeit Datenverarbeitung
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      Dienstleister & Auftragsverarbeiter
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#e24e1b] mb-3">
                    Phase 2: Assessment (14-18 Fragen)
                  </h3>
                  <ul className="space-y-2 text-sm text-[#474747]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      DSGVO Pflichtdokumente
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      Datenschutzbeauftragter (wenn nötig)
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      Technische Sicherheitsmaßnahmen
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      Betroffenenrechte & Prozesse
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      Security Monitoring
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#39B37B] mt-0.5 flex-shrink-0" />
                      Dokumentation & Reviews
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-6 bg-white rounded-xl border border-[#e24e1b]/20">
                <h3 className="text-lg font-bold text-[#232323] mb-3 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-[#e24e1b]" />
                  Intelligente Anpassung
                </h3>
                <p className="text-sm text-[#474747]">
                  Die Fragen passen sich automatisch an Ihre Situation an. Sie werden <strong>nur</strong> zu
                  Themen gefragt, die für Ihr Unternehmen relevant sind. Zum Beispiel: DSB-Frage nur bei Pflicht,
                  AVV-Verträge nur wenn Dienstleister vorhanden, etc.
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      ) : (
        <section className="relative py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-5xl relative z-10">
            <DataProtectionAssessment />
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
};

export default DataProtectionTest;