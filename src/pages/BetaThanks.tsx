import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Monitor, ArrowRight, Home, Zap, Clock, Mail as MailIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '@/components/SEOHead';
import { motion } from 'framer-motion';
import jonasImage from '@/assets/team/jonas.png';

const ProgressIndicator: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-2 sm:gap-4 mb-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-600 flex items-center justify-center">
          <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
        <span className="text-sm sm:text-base font-semibold text-green-600">Anmeldung</span>
      </div>

      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-orange-400 flex items-center justify-center">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-orange-400"></div>
        </div>
        <span className="text-sm sm:text-base font-semibold text-orange-600">Termin buchen</span>
      </div>

      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" />

      <div className="flex items-center gap-2">
        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-gray-300 flex items-center justify-center">
          <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gray-300"></div>
        </div>
        <span className="text-sm sm:text-base font-medium text-gray-400">Beta-Zugang</span>
      </div>
    </div>
  );
};

const Confetti: React.FC = () => {
  const particles = Array.from({ length: 20 });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: '50%',
            y: '50%',
            opacity: 1,
            scale: 1
          }}
          animate={{
            x: `${50 + (Math.random() - 0.5) * 200}%`,
            y: `${50 + (Math.random() - 0.5) * 200}%`,
            opacity: 0,
            scale: 0,
            rotate: Math.random() * 360
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.05,
            ease: "easeOut"
          }}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: ['#003366', '#39B37B', '#e24e1b', '#FFD700'][i % 4]
          }}
        />
      ))}
    </div>
  );
};

export const BetaThanks: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Geschafft! Ihr Beta-Platz ist gesichert – Marsstein"
        description="Vielen Dank für Ihre Beta-Anmeldung. Buchen Sie jetzt Ihren Onboarding-Call und starten Sie in 24h."
        canonical="/beta/thanks"
        noIndex={true}
      />
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/20 flex items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto w-full"
        >
          <Card className="shadow-lg relative overflow-hidden">
            <Confetti />

            <CardHeader className="pb-6 text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4 relative"
              >
                <CheckCircle className="w-10 h-10 text-green-600" />
              </motion.div>

              <CardTitle className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                🎉 Geschafft! Ihr Beta-Platz ist gesichert
              </CardTitle>

              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
                Einer der letzten 13 Beta-Plätze ist jetzt Ihrer.<br />
                <span className="font-semibold text-foreground">Nächster Schritt: 15-Min-Call mit Jonas buchen</span>
              </p>
            </CardHeader>

            <CardContent className="space-y-6">
              <ProgressIndicator />

              <div className="border-t border-b py-6 space-y-6">
                <h3 className="text-xl font-bold text-foreground text-center mb-6">
                  Wählen Sie Ihren Weg:
                </h3>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-gradient-to-r from-[#e24e1b]/10 to-[#f97316]/10 border-2 border-[#e24e1b] rounded-xl p-6"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <Zap className="w-6 h-6 text-[#e24e1b] flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        Express-Weg <span className="text-sm font-normal text-muted-foreground">(90% wählen diesen)</span>
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Termin jetzt direkt buchen und in 24h durchstarten
                      </p>
                    </div>
                  </div>

                  <a href="https://calendly.com/marsstein-info/marsstein-intro" target="_blank" rel="noopener noreferrer" className="block">
                    <Button size="lg" className="w-full bg-[#e24e1b] hover:bg-[#c43e15] text-white font-bold text-base sm:text-lg py-6">
                      <Monitor className="w-5 h-5 mr-2" />
                      Onboarding-Call buchen (15 Min)
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>

                  <p className="text-xs text-center text-muted-foreground mt-3">
                    ↑ Gleicher Link wie in der E-Mail – Sie sparen sich das Warten
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="bg-muted/30 rounded-xl p-6"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Clock className="w-6 h-6 text-gray-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="text-lg font-bold text-foreground mb-1">
                        Klassischer Weg
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        E-Mail in 2-3 Min checken → Calendly-Link klicken → Termin wählen
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="bg-gradient-to-br from-blue-50/50 via-indigo-50/30 to-purple-50/50 rounded-2xl p-8 border-2 border-blue-200/60 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-6 text-center bg-gradient-to-r from-[#003366] to-[#004d99] bg-clip-text text-transparent">
                  Ihr 15-Minuten Onboarding-Call
                </h3>

                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <span className="text-xs font-semibold text-green-600">SCHRITT 1</span>
                    </div>
                    <h4 className="font-bold text-foreground mb-1">Live-Demo</h4>
                    <p className="text-sm text-muted-foreground">
                      Sehen Sie Marsstein in Aktion mit Ihren echten Anforderungen
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-orange-600" />
                      </div>
                      <span className="text-xs font-semibold text-orange-600">SCHRITT 2</span>
                    </div>
                    <h4 className="font-bold text-foreground mb-1">Q&A Session</h4>
                    <p className="text-sm text-muted-foreground">
                      Ihre brennendsten DSGVO-Fragen direkt beantwortet
                    </p>
                  </div>

                  <div className="bg-white rounded-xl p-4 shadow-sm border border-blue-100">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-purple-600" />
                      </div>
                      <span className="text-xs font-semibold text-purple-600">SCHRITT 3</span>
                    </div>
                    <h4 className="font-bold text-foreground mb-1">Sofort starten</h4>
                    <p className="text-sm text-muted-foreground">
                      Beta-Zugang aktiviert, erste Aufgaben direkt angelegt
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-md border-2 border-[#003366]/10">
                  <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-5">
                    <img
                      src={jonasImage}
                      alt="Jonas Krüger"
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-4 border-white shadow-lg flex-shrink-0 mx-auto sm:mx-0"
                    />
                    <div className="flex-1 w-full">
                      <div className="mb-3 text-center sm:text-left">
                        <h4 className="font-bold text-base sm:text-lg text-foreground mb-1">Jonas Krüger</h4>
                        <p className="text-xs sm:text-sm text-muted-foreground">Co-Founder & Chief Growth Officer</p>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 sm:p-4 border-l-4 border-[#003366]">
                        <p className="text-sm sm:text-base text-foreground leading-relaxed">
                          "Hey! 👋 Ich führe Sie persönlich durch Marsstein und zeige Ihnen, wie wir Ihre DSGVO-Compliance in 24h live bekommen.
                          Keine Verkaufspitch – nur ehrliche Antworten auf Ihre Fragen."
                        </p>
                      </div>
                      <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                          Verfügbar heute
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span>Antwortet innerhalb 2h</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-[#003366]/5 to-[#e24e1b]/5 border-2 border-[#e24e1b]/20 rounded-lg p-6">
                <h3 className="text-xl font-bold text-foreground mb-4 text-center">Ihre Beta-Vorteile</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-5 h-5 text-[#39B37B]" />
                    <span className="font-medium">Kostenlose Beta-Phase</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-5 h-5 text-[#39B37B]" />
                    <span className="font-medium">50% Lifetime-Rabatt</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-5 h-5 text-[#39B37B]" />
                    <span className="font-medium">Direkter Team-Support</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <CheckCircle className="w-5 h-5 text-[#39B37B]" />
                    <span className="font-medium">Feature-Mitgestaltung</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link to="/" className="flex-1 sm:flex-initial">
                  <Button variant="outline" size="lg" className="w-full">
                    <Home className="w-5 h-5 mr-2" />
                    Zur Startseite
                  </Button>
                </Link>
              </div>

              <div className="bg-primary/5 rounded-lg p-4 text-sm text-muted-foreground text-center">
                <p>
                  <strong>Benötigen Sie sofortige Hilfe?</strong><br />
                  📧 <a href="mailto:info@marsstein.ai" className="hover:underline font-medium">info@marsstein.ai</a>
                  {" • "}
                  📞 <a href="tel:+4917670560292" className="hover:underline font-medium">+49 176 70560292</a>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default BetaThanks;
