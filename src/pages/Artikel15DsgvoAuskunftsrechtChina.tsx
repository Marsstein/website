import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FileSearch,
  AlertTriangle,
  Euro,
  Clock,
  Shield,
  Ban,
  CheckCircle,
  XCircle,
  FileText,
  Send,
  Loader2,
  CheckCircle2,
  Users,
  Mail,
  Download,
  Eye,
  Trash2,
  Edit3,
  Database,
  Globe,
  Scale,
  Calendar,
  FileCheck,
  Search,
  UserCheck,
  BookOpen,
  ArrowRight,
  Code,
  Lock,
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { getRelatedArticles } from "@/data/chinaArticles";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Artikel15DsgvoAuskunftsrechtChina() {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    phone: "",
    message: "",
    betaAccess: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData((prev) => ({ ...prev, betaAccess: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    console.log("Article 15 Form submitted:", formData);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");

      setFormData({
        companyName: "",
        email: "",
        phone: "",
        message: "",
        betaAccess: false,
      });
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Art. 15 DSGVO Auskunftsrecht: Chinas Tech-Riesen versagen systematisch | Marsstein</title>
        <meta
          name="description"
          content="TikTok, WeChat, AliExpress ignorieren DSGVO Auskunftsrechte. Noyb klagt gegen 6 chinesische Firmen. Art. 15 GDPR-Compliance für China-Unternehmen. Automatisiert mit Marsstein."
        />
        <meta
          name="keywords"
          content="Art 15 DSGVO China, Auskunftsrecht GDPR, TikTok GDPR Violation, WeChat Datenschutz, AliExpress DSGVO, Noyb China complaints, GDPR access request China, Article 15 compliance"
        />
        <link rel="canonical" href="https://marsstein.ai/artikel-15-dsgvo-auskunftsrecht-china" />
        <meta property="og:title" content="Art. 15 DSGVO: Chinas Tech-Riesen versagen systematisch" />
        <meta
          property="og:description"
          content="TikTok, WeChat, AliExpress ignorieren DSGVO Auskunftsrechte. So vermeiden Sie Strafen bis 4% Jahresumsatz."
        />
        <meta property="og:url" content="https://marsstein.ai/artikel-15-dsgvo-auskunftsrecht-china" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />

        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 sm:py-32">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Wissen', href: '/wissen' },
                { label: 'China & DSGVO', href: '/wissen/china' },
                { label: 'Artikel 15 Auskunftsrecht' }
              ]}
              className="mb-8"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-4xl text-center"
            >
              <Badge className="mb-6 bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0">
                <FileSearch className="w-4 h-4 mr-2" />
                Noyb vs. TikTok, WeChat, Xiaomi, AliExpress, Shein, Temu
              </Badge>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Art. 15 DSGVO Auskunftsrecht: Chinas Tech-Riesen versagen systematisch
              </h1>

              <p className="mb-4 text-xl leading-8 text-slate-300">
                Januar 2025: Noyb verklagt 6 chinesische Firmen wegen Verletzung des DSGVO-Auskunftsrechts. Wie chinesische Unternehmen Art. 15 GDPR richtig umsetzen.
              </p>

              <p className="mb-12 text-lg leading-8 text-slate-400">
                TikTok, WeChat & Co. ignorieren Nutzeranfragen komplett. Drohendes Bußgeld: bis zu 4% des weltweiten Jahresumsatzes. Marsstein automatisiert vollständige Art. 15-Compliance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#e24e1b] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#d63f14] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:ring-offset-2"
                >
                  Jetzt Art. 15 Compliance aufsetzen
                  <Send className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/dsgvo-compliance-software"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  Kostenlos testen
                </a>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e24e1b] to-transparent"></div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center mb-16"
            >
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Breaking News: Januar 2025
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Noyb verklagt 6 chinesische Tech-Riesen wegen systematischer Art. 15 DSGVO-Verstöße
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Die europäische Datenschutz-NGO noyb (None of Your Business) hat im Januar 2025 DSGVO-Beschwerden gegen TikTok, AliExpress, Shein, Temu, WeChat und Xiaomi eingereicht. Der Vorwurf: Systematische Verletzung des Auskunftsrechts nach Art. 15 DSGVO.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full border-2 border-red-200 hover:border-red-300 transition-colors bg-gradient-to-br from-red-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                          <Ban className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          WeChat: Komplette Ignoranz
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          WeChat ignorierte Auskunftsanfragen vollständig. Keine Reaktion, keine Antwort, kein Versuch zur Compliance. Verstoß gegen Art. 12 & 15 DSGVO.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full border-2 border-orange-200 hover:border-orange-300 transition-colors bg-gradient-to-br from-orange-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                          <XCircle className="h-6 w-6 text-orange-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          AliExpress: Unbrauchbare Datei
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          AliExpress lieferte eine korrupte Datei, die nur einmal geöffnet werden konnte. Danach war sie unlesbar. Technische Manipulation zur Verschleierung.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Card className="h-full border-2 border-yellow-200 hover:border-yellow-300 transition-colors bg-gradient-to-br from-yellow-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100">
                          <Euro className="h-6 w-6 text-yellow-700" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          Bußgelder bis zu 4% Umsatz
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Potenzielle Strafen: TikTok mehrere Milliarden €, Temu bis $1,35 Mrd., Xiaomi bis $1,75 Mrd. Datenschutzbehörden prüfen alle 6 Fälle aktiv.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">6</div>
                  <p className="text-slate-300">Chinesische Tech-Konzerne verklagt (Jan 2025)</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">30 Tage</div>
                  <p className="text-slate-300">Gesetzliche Frist für Auskunft (meist ignoriert)</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">€20 Mio.</div>
                  <p className="text-slate-300">Maximales Bußgeld oder 4% Jahresumsatz</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Was ist Art. 15 DSGVO und welche Rechte haben Nutzer?
              </h2>
              <p className="text-lg text-slate-600">
                Das Auskunftsrecht ist eines der wichtigsten DSGVO-Rechte – und wird von chinesischen Firmen am häufigsten verletzt
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Eye,
                  title: "Art. 15: Auskunftsrecht",
                  description: "Nutzer können jederzeit fragen: Welche Daten haben Sie über mich? Wo speichern Sie diese? Für welche Zwecke nutzen Sie sie? Antwortfrist: 30 Tage.",
                  color: "blue"
                },
                {
                  icon: Edit3,
                  title: "Art. 16: Berichtigung",
                  description: "Recht auf Korrektur falscher Daten. Beispiel: Falsche Adresse muss innerhalb 30 Tagen korrigiert werden.",
                  color: "green"
                },
                {
                  icon: Trash2,
                  title: "Art. 17: Löschung ('Recht auf Vergessenwerden')",
                  description: "Nutzer können Löschung aller personenbezogenen Daten verlangen. Ausnahmen nur bei gesetzlichen Aufbewahrungspflichten.",
                  color: "red"
                },
                {
                  icon: Download,
                  title: "Art. 20: Datenübertragbarkeit",
                  description: "Nutzer können ihre Daten in einem maschinenlesbaren Format (z.B. JSON, CSV) erhalten und zu einem anderen Anbieter übertragen.",
                  color: "purple"
                }
              ].map((right, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`h-full border-2 border-${right.color}-200 hover:border-${right.color}-300 transition-colors bg-gradient-to-br from-${right.color}-50 to-white`}>
                    <CardContent className="p-6">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${right.color}-100 mb-4`}>
                        <right.icon className={`h-6 w-6 text-${right.color}-600`} />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        {right.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {right.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center mb-16"
            >
              <Badge className="mb-4 bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0">
                <Calendar className="w-4 h-4 mr-2" />
                Timeline der Verstöße
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                So laufen die noyb-Beschwerden ab
              </h2>
              <p className="text-lg text-slate-600">
                Detaillierte Chronologie der DSGVO-Verstöße und behördlichen Schritte
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  date: "Dezember 2024",
                  company: "TikTok",
                  title: "Auskunftsanfrage gestellt",
                  description: "Noyb fordert vollständige Auskunft nach Art. 15 DSGVO über alle gespeicherten personenbezogenen Daten, Verarbeitungszwecke und Empfänger. TikTok antwortete nur teilweise – wichtige Kategorien wie Algorithmus-Profile und Tracking-Daten fehlten komplett.",
                  status: "violation",
                  icon: FileSearch,
                },
                {
                  date: "Januar 2025",
                  company: "WeChat (Tencent)",
                  title: "Komplette Ignoranz dokumentiert",
                  description: "WeChat reagierte überhaupt nicht auf die Auskunftsanfrage. Keine Bestätigung des Eingangs, keine Fristverlängerung, kein Versuch zur Compliance. Dies verstößt gegen Art. 12 Abs. 3 (30-Tage-Frist) und Art. 15 DSGVO.",
                  status: "critical",
                  icon: Ban,
                },
                {
                  date: "Januar 2025",
                  company: "AliExpress (Alibaba)",
                  title: "Technische Manipulation entdeckt",
                  description: "AliExpress lieferte eine ZIP-Datei, die nur einmal geöffnet werden konnte. Nach dem ersten Öffnen wurde die Datei unlesbar – vermutlich durch DRM-ähnliche Mechanismen. Dies macht die Auskunft faktisch wertlos und verstößt gegen Art. 15 Abs. 3 (Kopie in zugänglichem Format).",
                  status: "critical",
                  icon: XCircle,
                },
                {
                  date: "Januar 2025",
                  company: "Xiaomi, Shein, Temu",
                  title: "Unvollständige oder verzögerte Antworten",
                  description: "Xiaomi: Nur App-Daten geliefert, keine Cloud- und IoT-Gerätedaten. Shein: Antwort nach 47 Tagen (17 Tage zu spät). Temu: Tracking-Daten und Personalisierungsprofile fehlen komplett.",
                  status: "violation",
                  icon: Clock,
                },
                {
                  date: "Januar 2025",
                  company: "Alle 6 Firmen",
                  title: "Offizielle DSGVO-Beschwerden eingereicht",
                  description: "Noyb reichte formelle Beschwerden bei den zuständigen Datenschutzbehörden (IE, NL, BE) ein. Die Behörden haben 3 Monate Zeit für eine erste Stellungnahme und können Bußgelder bis zu 4% des weltweiten Jahresumsatzes verhängen.",
                  status: "active",
                  icon: Scale,
                },
                {
                  date: "2025-2026 (erwartet)",
                  company: "Datenschutzbehörden",
                  title: "Untersuchungen und potenzielle Bußgelder",
                  description: "Basierend auf früheren Fällen (Meta €1,2 Mrd., Amazon €746 Mio.) sind hohe Strafen wahrscheinlich. TikTok: potenziell mehrere Milliarden €. Xiaomi: bis zu $1,75 Mrd. (4% von $43,9 Mrd. Umsatz). Temu: bis zu $1,35 Mrd.",
                  status: "pending",
                  icon: Euro,
                },
              ].map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`border-2 ${
                    event.status === 'critical' ? 'border-red-300 bg-gradient-to-r from-red-50 to-white' :
                    event.status === 'violation' ? 'border-orange-300 bg-gradient-to-r from-orange-50 to-white' :
                    event.status === 'active' ? 'border-blue-300 bg-gradient-to-r from-blue-50 to-white' :
                    'border-slate-300 bg-gradient-to-r from-slate-50 to-white'
                  }`}>
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${
                            event.status === 'critical' ? 'bg-red-100' :
                            event.status === 'violation' ? 'bg-orange-100' :
                            event.status === 'active' ? 'bg-blue-100' :
                            'bg-slate-100'
                          }`}>
                            <event.icon className={`h-6 w-6 ${
                              event.status === 'critical' ? 'text-red-600' :
                              event.status === 'violation' ? 'text-orange-600' :
                              event.status === 'active' ? 'text-blue-600' :
                              'text-slate-600'
                            }`} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <Badge variant="outline" className="text-xs">
                              {event.date}
                            </Badge>
                            <Badge className={`text-xs ${
                              event.status === 'critical' ? 'bg-red-600' :
                              event.status === 'violation' ? 'bg-orange-600' :
                              event.status === 'active' ? 'bg-blue-600' :
                              'bg-slate-600'
                            }`}>
                              {event.company}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold text-slate-900 mb-2">
                            {event.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center mb-16"
            >
              <Badge className="mb-4 bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0">
                <ArrowRight className="w-4 h-4 mr-2" />
                30-Tage-Compliance-Roadmap
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                So beantworten Sie Art. 15 Anfragen richtig
              </h2>
              <p className="text-lg text-slate-600">
                Schritt-für-Schritt-Prozess zur DSGVO-konformen Bearbeitung von Auskunftsanfragen
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#e24e1b] to-[#f97316]"></div>

                {[
                  {
                    day: "Tag 1",
                    title: "Anfrage erhalten & registrieren",
                    icon: Mail,
                    steps: [
                      "E-Mail, Brief oder Online-Formular als Eingang dokumentieren",
                      "Eindeutige Ticket-Nummer vergeben (z.B. ART15-2025-001)",
                      "Eingangsbestätigung innerhalb von 24h senden",
                      "Anfrage im DSGVO-Ticketsystem erfassen mit Frist-Countdown"
                    ],
                    template: "Betreff: Bestätigung Ihrer Auskunftsanfrage (Art. 15 DSGVO)\n\nSehr geehrte/r [Name],\n\nwir bestätigen den Eingang Ihrer Anfrage auf Auskunft nach Art. 15 DSGVO vom [Datum]. Ihre Anfrage wurde unter der Nummer ART15-2025-001 registriert.\n\nWir werden Ihre Anfrage innerhalb der gesetzlichen Frist von 30 Tagen bearbeiten (Frist: [Datum + 30 Tage]).\n\nMit freundlichen Grüßen"
                  },
                  {
                    day: "Tag 1-3",
                    title: "Identität verifizieren",
                    icon: UserCheck,
                    steps: [
                      "Ausweiskopie anfordern (nur wenn Identität nicht eindeutig ist)",
                      "E-Mail-Adresse mit Account abgleichen",
                      "Bei Zweifeln: Zusätzliche Sicherheitsfragen stellen",
                      "Wichtig: Keine Auskunft an unverified Personen (Datenschutzverstoß!)"
                    ],
                    warning: "Häufiger Fehler: Zu hohe Hürden bei Identitätsprüfung. Die DSGVO erlaubt nur 'reasonable measures'. Ein einfacher Login-Nachweis reicht oft."
                  },
                  {
                    day: "Tag 4-20",
                    title: "Daten sammeln aus allen Systemen",
                    icon: Database,
                    steps: [
                      "1. Primärsysteme: CRM, ERP, Datenbank-Exporte",
                      "2. Cloud-Dienste: AWS S3, Google Cloud, Azure Storage",
                      "3. Analytics: Google Analytics, Mixpanel, Amplitude User-IDs",
                      "4. Logs: Server-Logs, Backup-Systeme (oft vergessen!)",
                      "5. Drittanbieter: Anfragen an Subprozessoren (z.B. Payment-Provider)",
                      "6. Offline-Daten: Papierunterlagen, Verträge, Notizen scannen"
                    ],
                    technical: "SQL-Query-Beispiel:\nSELECT * FROM users u\nLEFT JOIN orders o ON u.id = o.user_id\nLEFT JOIN tracking t ON u.id = t.user_id\nWHERE u.email = 'user@example.com'"
                  },
                  {
                    day: "Tag 21-28",
                    title: "Auskunft strukturiert aufbereiten",
                    icon: FileCheck,
                    steps: [
                      "Format: JSON oder CSV (maschinenlesbar nach Art. 20)",
                      "Kategorien strukturieren: Stammdaten, Verhaltensdaten, Metadaten",
                      "Verarbeitungszwecke dokumentieren (Art. 15 Abs. 1 lit. a)",
                      "Empfänger auflisten: Alle Drittanbieter und deren Länder",
                      "Speicherdauer angeben: Konkrete Fristen, nicht nur 'gesetzliche Aufbewahrungspflicht'",
                      "Quelle der Daten: Wenn nicht vom Nutzer selbst (Art. 14)"
                    ],
                    structure: "Mindest-Inhalte nach Art. 15 Abs. 1:\n✓ Verarbeitungszwecke\n✓ Datenkategorien\n✓ Empfänger / Empfängerkategorien\n✓ Speicherdauer\n✓ Rechte (Berichtigung, Löschung, Einschränkung, Widerspruch)\n✓ Beschwerderecht bei Aufsichtsbehörde\n✓ Quelle der Daten (falls nicht vom Betroffenen)"
                  },
                  {
                    day: "Tag 28-30",
                    title: "Rechtliche Prüfung & Versand",
                    icon: Shield,
                    steps: [
                      "Datenschutzbeauftragten einbeziehen (interne Review)",
                      "Prüfen: Keine Daten Dritter in der Auskunft (häufiger Fehler!)",
                      "Format testen: Ist die Datei wirklich lesbar? (siehe AliExpress-Fall)",
                      "Sichere Übermittlung: Verschlüsselte E-Mail oder Portal-Download",
                      "Dokumentation: Auskunft und Versandzeitpunkt archivieren (Nachweis)"
                    ],
                    bestPractice: "Best Practice: Zusätzlich zur maschinenlesbaren Datei ein PDF mit Erklärungen beilegen. Beispiel: 'Ihr Verhaltensprofil' → Erklärung was Tracking-Events bedeuten."
                  },
                  {
                    day: "Nach Versand",
                    title: "Nachverfolgung & Dokumentation",
                    icon: BookOpen,
                    steps: [
                      "Versandbestätigung dokumentieren (E-Mail-Zustellung, Portal-Download)",
                      "Follow-up nach 7 Tagen: 'Haben Sie die Auskunft erhalten?'",
                      "Verzeichnis von Verarbeitungstätigkeiten aktualisieren (Art. 30)",
                      "Wenn Anfrage abgelehnt: Begründung schriftlich + Hinweis auf Beschwerderecht"
                    ],
                    retention: "Aufbewahrungspflicht: Art. 15 Anfragen und Antworten mindestens 3 Jahre archivieren (Nachweispflicht bei Audits)."
                  }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative mb-12 last:mb-0"
                  >
                    <div className="flex gap-6">
                      <div className="flex-shrink-0 z-10">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#e24e1b] to-[#f97316] shadow-lg">
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <div className="flex-1 pb-8">
                        <Badge className="mb-3 bg-slate-900 text-white">
                          {step.day}
                        </Badge>
                        <h3 className="text-2xl font-bold text-slate-900 mb-4">
                          {step.title}
                        </h3>
                        <Card className="border-2 border-slate-200">
                          <CardContent className="p-6 space-y-4">
                            <ul className="space-y-3">
                              {step.steps.map((substep, subIndex) => (
                                <li key={subIndex} className="flex items-start gap-3">
                                  <CheckCircle2 className="h-5 w-5 text-[#e24e1b] flex-shrink-0 mt-0.5" />
                                  <span className="text-slate-700">{substep}</span>
                                </li>
                              ))}
                            </ul>

                            {step.template && (
                              <div className="mt-6 p-4 bg-slate-50 rounded-lg border border-slate-200">
                                <div className="flex items-center gap-2 mb-3">
                                  <Code className="h-4 w-4 text-[#e24e1b]" />
                                  <span className="text-sm font-semibold text-slate-900">E-Mail-Template</span>
                                </div>
                                <pre className="text-xs text-slate-700 whitespace-pre-wrap font-mono">
                                  {step.template}
                                </pre>
                              </div>
                            )}

                            {step.technical && (
                              <div className="mt-6 p-4 bg-slate-900 rounded-lg border border-slate-700">
                                <div className="flex items-center gap-2 mb-3">
                                  <Code className="h-4 w-4 text-[#e24e1b]" />
                                  <span className="text-sm font-semibold text-white">Technische Umsetzung</span>
                                </div>
                                <pre className="text-xs text-slate-300 whitespace-pre-wrap font-mono">
                                  {step.technical}
                                </pre>
                              </div>
                            )}

                            {step.structure && (
                              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-center gap-2 mb-3">
                                  <FileText className="h-4 w-4 text-blue-600" />
                                  <span className="text-sm font-semibold text-blue-900">Pflichtangaben</span>
                                </div>
                                <pre className="text-sm text-blue-900 whitespace-pre-wrap">
                                  {step.structure}
                                </pre>
                              </div>
                            )}

                            {step.warning && (
                              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <div className="flex items-start gap-3">
                                  <AlertTriangle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <span className="text-sm font-semibold text-yellow-900 block mb-1">Achtung</span>
                                    <span className="text-sm text-yellow-800">{step.warning}</span>
                                  </div>
                                </div>
                              </div>
                            )}

                            {step.bestPractice && (
                              <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                                <div className="flex items-start gap-3">
                                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <span className="text-sm font-semibold text-emerald-900 block mb-1">Best Practice</span>
                                    <span className="text-sm text-emerald-800">{step.bestPractice}</span>
                                  </div>
                                </div>
                              </div>
                            )}

                            {step.retention && (
                              <div className="mt-6 p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <div className="flex items-start gap-3">
                                  <Lock className="h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <span className="text-sm font-semibold text-purple-900 block mb-1">Aufbewahrung</span>
                                    <span className="text-sm text-purple-800">{step.retention}</span>
                                  </div>
                                </div>
                              </div>
                            )}
                          </CardContent>
                        </Card>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Häufig gestellte Fragen zu Art. 15 DSGVO
              </h2>
              <p className="text-lg text-slate-600">
                Antworten auf die wichtigsten Fragen zur Umsetzung des Auskunftsrechts
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Braucht wirklich JEDES chinesische Unternehmen einen Art. 15 Prozess?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p><strong>Ja</strong>, wenn Sie EU-Kundendaten verarbeiten. Die DSGVO gilt nicht nur für Unternehmen MIT Niederlassung in der EU (Art. 3 Abs. 1), sondern auch für Unternehmen OHNE EU-Präsenz, wenn sie:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Waren/Dienstleistungen an EU-Bürger anbieten</strong> (Art. 3 Abs. 2 lit. a) → z.B. AliExpress, Shein, Temu mit EU-Kunden</li>
                        <li><strong>Verhalten von EU-Bürgern beobachten</strong> (Art. 3 Abs. 2 lit. b) → z.B. TikTok, WeChat mit Tracking/Profiling</li>
                      </ul>
                      <p className="mt-4"><strong>Beispiel TikTok</strong>: Obwohl ByteDance in China sitzt, gilt die DSGVO, weil TikTok:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>EU-Nutzer gezielt anspricht (App in EU-Stores)</li>
                        <li>Verhalten trackt (Watch-Time, Likes, Scroll-Verhalten)</li>
                        <li>Profile für Werbung erstellt</li>
                      </ul>
                      <p className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <strong className="text-red-900">⚠️ Häufiger Irrtum:</strong> "Wir haben keinen EU-Vertreter, also gilt die DSGVO nicht." → Falsch! Art. 3 Abs. 2 DSGVO gilt unabhängig davon. Ein fehlender EU-Vertreter (Art. 27) ist ein <em>zusätzlicher</em> Verstoß, befreit aber nicht von Art. 15.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Welche Daten muss ich GENAU auskunften? Reicht eine Datenbank-Export?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-4">
                      <p><strong>Nein, ein simpler DB-Export reicht nicht.</strong> Art. 15 Abs. 1 DSGVO verlangt Auskunft über:</p>

                      <div className="space-y-4">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h4 className="font-semibold text-blue-900 mb-2">1. Die personenbezogenen Daten selbst (Art. 15 Abs. 3)</h4>
                          <ul className="list-disc pl-6 space-y-1 text-blue-900">
                            <li>Stammdaten: Name, E-Mail, Adresse, Telefon</li>
                            <li>Verhaltensdaten: Klicks, Käufe, Seitenaufrufe, Scroll-Tiefe</li>
                            <li>Abgeleitete Daten: Profile, Scores, Segmente (z.B. "Wahrscheinlichkeit für Kauf: 73%")</li>
                            <li>Metadaten: IP-Adressen, Geräte-IDs, Cookies, Session-IDs</li>
                            <li>Kommunikation: Chat-Verläufe, Support-Tickets, E-Mails</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                          <h4 className="font-semibold text-emerald-900 mb-2">2. Verarbeitungszwecke (Art. 15 Abs. 1 lit. a)</h4>
                          <p className="text-emerald-900 mb-2">Nicht nur "Marketing", sondern spezifisch:</p>
                          <ul className="list-disc pl-6 space-y-1 text-emerald-900">
                            <li>"Personalisierte Produktempfehlungen basierend auf Kaufhistorie"</li>
                            <li>"Betrugserkennungssystem zur Risikoanalyse bei Bestellungen"</li>
                            <li>"Retargeting-Werbung auf Facebook und Google Ads"</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                          <h4 className="font-semibold text-purple-900 mb-2">3. Empfänger/Empfängerkategorien (Art. 15 Abs. 1 lit. c)</h4>
                          <p className="text-purple-900 mb-2">Alle Drittanbieter mit Name und Land:</p>
                          <ul className="list-disc pl-6 space-y-1 text-purple-900">
                            <li>"Google Analytics (USA) – Webanalyse"</li>
                            <li>"Stripe (USA) – Zahlungsabwicklung"</li>
                            <li>"AWS (Irland/USA) – Cloud-Hosting"</li>
                            <li>"Salesforce (USA) – CRM-System"</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                          <h4 className="font-semibold text-orange-900 mb-2">4. Speicherdauer (Art. 15 Abs. 1 lit. d)</h4>
                          <p className="text-orange-900">Konkrete Fristen, z.B.:</p>
                          <ul className="list-disc pl-6 space-y-1 text-orange-900">
                            <li>"Kaufdaten: 10 Jahre (Steuerrecht)"</li>
                            <li>"Analytics-Daten: 14 Monate (Cookie-Consent)"</li>
                            <li>"Chat-Verläufe: 3 Jahre (Kundenservice)"</li>
                          </ul>
                        </div>

                        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                          <h4 className="font-semibold text-yellow-900 mb-2">5. Quelle der Daten (Art. 14 Abs. 2 lit. f)</h4>
                          <p className="text-yellow-900">Wenn Daten NICHT vom Nutzer kommen:</p>
                          <ul className="list-disc pl-6 space-y-1 text-yellow-900">
                            <li>"E-Mail-Adresse: Vom Nutzer bei Registrierung angegeben"</li>
                            <li>"Zahlungsdaten: Von Payment-Provider Stripe übermittelt"</li>
                            <li>"Kreditwürdigkeit: Von Schufa (Deutschland) abgefragt"</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-600">
                        <p className="text-red-900 font-semibold mb-2">❌ Häufige Fehler chinesischer Firmen:</p>
                        <ul className="list-disc pl-6 space-y-1 text-red-900">
                          <li><strong>TikTok</strong>: Fehlende Algorithmus-Profile ("For You"-Feed-Daten)</li>
                          <li><strong>Xiaomi</strong>: Nur App-Daten, keine IoT-Gerätedaten (Saugroboter, Smart-Home)</li>
                          <li><strong>Shein</strong>: Keine Tracking-Daten von Marketing-Partnern</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Was passiert, wenn ich nicht innerhalb 30 Tagen antworte?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-4">
                      <p className="font-semibold text-slate-900">Kurzfristige Folgen (Tag 31-90):</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Automatische Beschwerde möglich</strong>: Nutzer können sofort bei der Datenschutzbehörde Beschwerde einreichen (Art. 77 DSGVO). NGOs wie noyb machen das systematisch.</li>
                        <li><strong>Fristverlängerung um 2 Monate</strong> nur wenn: (1) Anfrage komplex ist UND (2) Sie innerhalb der ersten 30 Tage eine Begründung senden (Art. 12 Abs. 3). Beispiel: "Ihre Anfrage betrifft Daten aus 15 Systemen, wir benötigen weitere 60 Tage."</li>
                        <li><strong>Keine Antwort = keine Fristverlängerung</strong>: WeChat schwieg komplett → automatisch im Verstoß ab Tag 31.</li>
                      </ul>

                      <div className="mt-6 p-4 bg-slate-900 rounded-lg text-white">
                        <p className="font-semibold mb-3">📊 Statistik aus noyb-Beschwerden (Jan 2025):</p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div>
                            <div className="text-2xl font-bold text-[#e24e1b]">47 Tage</div>
                            <div className="text-slate-300">Shein Antwortzeit (17 Tage zu spät)</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-[#e24e1b]">∞ Tage</div>
                            <div className="text-slate-300">WeChat (keine Antwort überhaupt)</div>
                          </div>
                          <div>
                            <div className="text-2xl font-bold text-[#e24e1b]">1× lesbar</div>
                            <div className="text-slate-300">AliExpress Datei-Manipulation</div>
                          </div>
                        </div>
                      </div>

                      <p className="font-semibold text-slate-900 mt-6">Langfristige Folgen (3-12 Monate):</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Bußgeldverfahren</strong>: Datenschutzbehörden haben 3 Monate Reaktionszeit. Danach formelles Verfahren mit Anhörung.</li>
                        <li><strong>Bußgeldhöhe</strong>: Bis zu €20 Mio. oder 4% des weltweiten Jahresumsatzes (Art. 83 Abs. 5 lit. b)
                          <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                            <li>TikTok (Umsatz ~$80 Mrd.): Potentiell $3,2 Mrd.</li>
                            <li>Xiaomi (Umsatz $43,9 Mrd.): Potentiell $1,75 Mrd.</li>
                            <li>Temu (Umsatz ~$34 Mrd.): Potentiell $1,35 Mrd.</li>
                          </ul>
                        </li>
                        <li><strong>Reputationsschaden</strong>: Noyb-Pressemitteilungen werden weltweit aufgegriffen (Jan 2025: 200+ Medienberichte)</li>
                        <li><strong>Sammelklagen</strong>: Nach DSGVO-Verstoß können Verbraucherschutz-Verbände Sammelklagen einreichen (Art. 80 Abs. 2)</li>
                      </ul>

                      <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                        <p className="font-semibold text-emerald-900 mb-2">✅ So vermeiden Sie Verstöße:</p>
                        <ul className="list-disc pl-6 space-y-1 text-emerald-900">
                          <li>Tag 1: Eingangsbestätigung automatisch senden</li>
                          <li>Tag 7: Reminder an internes Team (23 Tage verbleibend)</li>
                          <li>Tag 20: Finale Prüfung + Datenschutzbeauftragter Review</li>
                          <li>Tag 25: Notfall-Plan aktivieren falls Verzögerung (Fristverlängerung beantragen)</li>
                          <li>Tag 28: Auskunft versenden (2 Tage Puffer für technische Probleme)</li>
                        </ul>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Kann ich Anfragen als "offensichtlich unbegründet" ablehnen?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-4">
                      <p><strong>Ja, aber nur in sehr seltenen Ausnahmefällen</strong> (Art. 12 Abs. 5 DSGVO). Die Hürden sind extrem hoch:</p>

                      <div className="p-4 bg-red-50 border-l-4 border-red-600 rounded">
                        <p className="font-semibold text-red-900 mb-2">❌ Sie können NICHT ablehnen, wenn:</p>
                        <ul className="list-disc pl-6 space-y-2 text-red-900">
                          <li><strong>"Die Anfrage ist zu aufwändig"</strong> → Irrelevant. Die DSGVO schützt Nutzerrechte, nicht Ihre Ressourcen.</li>
                          <li><strong>"Der Nutzer fragt zu oft"</strong> → Nur wenn Anfragen identisch und exzessiv sind (z.B. 50× die gleiche Anfrage in 30 Tagen). 1× pro Monat = OK.</li>
                          <li><strong>"Wir haben die Daten gelöscht"</strong> → Dann müssen Sie das nachweisen und dokumentieren wann/wie gelöscht.</li>
                          <li><strong>"Der Nutzer hat schon 2022 eine Auskunft bekommen"</strong> → Nutzer können jederzeit neue Anfragen stellen, wenn sich Daten geändert haben.</li>
                        </ul>
                      </div>

                      <div className="p-4 bg-green-50 border-l-4 border-green-600 rounded mt-4">
                        <p className="font-semibold text-green-900 mb-2">✅ Sie können ablehnen, wenn:</p>
                        <ul className="list-disc pl-6 space-y-2 text-green-900">
                          <li><strong>Identität nicht nachweisbar</strong>: Nach 3 Versuchen keine Ausweiskopie → Ablehnung mit Begründung. Wichtig: Sie müssen "reasonable measures" zur Identifikation anbieten (Art. 12 Abs. 6).</li>
                          <li><strong>Exzessive Wiederholung</strong>: Gleiche Anfrage 10× in 2 Wochen ohne neue Informationen → "offensichtlich unbegründet". Aber: Sie müssen nachweisen, dass die Anfragen identisch sind.</li>
                          <li><strong>Missbrauch nachweisbar</strong>: Z.B. automatisierte Bot-Anfragen oder Erpressungsversuch ("Zahlen Sie €10.000 oder ich beschwere mich"). Sehr selten.</li>
                        </ul>
                      </div>

                      <div className="mt-6 space-y-3">
                        <p className="font-semibold text-slate-900">Wenn Sie ablehnen müssen:</p>
                        <ol className="list-decimal pl-6 space-y-2">
                          <li><strong>Begründung schriftlich</strong>: "Wir können Ihre Anfrage nicht bearbeiten, weil [spezifischer Grund nach Art. 12 Abs. 5]"</li>
                          <li><strong>Hinweis auf Rechte</strong>:
                            <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                              <li>Beschwerderecht bei Datenschutzbehörde (Name + Adresse nennen)</li>
                              <li>Recht auf gerichtliche Überprüfung (Art. 79 DSGVO)</li>
                            </ul>
                          </li>
                          <li><strong>Dokumentation</strong>: Ablehnung + Begründung archivieren (Beweispflicht liegt bei Ihnen!)</li>
                        </ol>
                      </div>

                      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="font-semibold text-yellow-900 mb-2">⚠️ Praxis-Warnung:</p>
                        <p className="text-yellow-900">Von 10.000 Art. 15 Anfragen sind vielleicht 5 tatsächlich "offensichtlich unbegründet". Datenschutzbehörden prüfen Ablehnungen sehr kritisch. Im Zweifel: Lieber beantworten als ablehnen.</p>
                      </div>

                      <div className="mt-6 p-4 bg-slate-900 rounded-lg text-white">
                        <p className="font-semibold mb-2">💡 Realbeispiel WeChat:</p>
                        <p className="text-slate-300">WeChat hätte die noyb-Anfrage nicht als "unbegründet" ablehnen können, weil:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-slate-300 text-sm">
                          <li>Identität nachweisbar (Login-Daten vorhanden)</li>
                          <li>Erste Anfrage (keine Wiederholung)</li>
                          <li>Legitimes Interesse an Auskunft (Standard-Fall)</li>
                        </ul>
                        <p className="text-slate-300 mt-3">→ WeChat schwieg trotzdem komplett = klarer DSGVO-Verstoß.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Wie dokumentiere ich Art. 15 Anfragen DSGVO-konform?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-4">
                      <p>Die DSGVO verlangt keine spezifische Dokumentationspflicht für Art. 15, aber <strong>Art. 5 Abs. 2 (Rechenschaftspflicht)</strong> bedeutet: Sie müssen <em>nachweisen</em> können, dass Sie compliant sind.</p>

                      <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                        <p className="font-semibold text-blue-900 mb-3">📋 Minimale Dokumentation (Pflicht):</p>
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                              <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">1</div>
                            </div>
                            <div>
                              <p className="font-semibold text-blue-900">Eingangslog</p>
                              <p className="text-blue-800 text-sm">Datum, Uhrzeit, Kanal (E-Mail/Brief/Formular), Ticket-ID</p>
                              <p className="text-blue-700 text-xs mt-1 font-mono bg-blue-100 p-2 rounded">2025-01-15 14:23 UTC | E-Mail | ART15-2025-001 | user@example.com</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                              <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">2</div>
                            </div>
                            <div>
                              <p className="font-semibold text-blue-900">Bearbeitungslog</p>
                              <p className="text-blue-800 text-sm">Wer hat wann welche Systeme abgefragt? Welche Daten wurden exportiert?</p>
                              <p className="text-blue-700 text-xs mt-1 font-mono bg-blue-100 p-2 rounded">2025-01-18 | J.Chen | CRM-Export (245 rows) + Analytics (12 months)</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                              <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">3</div>
                            </div>
                            <div>
                              <p className="font-semibold text-blue-900">Versandnachweis</p>
                              <p className="text-blue-800 text-sm">Datum, Methode (E-Mail verschlüsselt/Portal-Download), Empfangsbestätigung</p>
                              <p className="text-blue-700 text-xs mt-1 font-mono bg-blue-100 p-2 rounded">2025-02-10 | E-Mail (PGP encrypted) | Read-Receipt confirmed</p>
                            </div>
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 mt-1">
                              <div className="h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">4</div>
                            </div>
                            <div>
                              <p className="font-semibold text-blue-900">Kopie der Auskunft</p>
                              <p className="text-blue-800 text-sm">Exakte Kopie der gesendeten Daten archivieren (3 Jahre Aufbewahrung empfohlen)</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg mt-6">
                        <p className="font-semibold text-emerald-900 mb-3">✅ Best-Practice Dokumentation (empfohlen):</p>
                        <ul className="space-y-2 text-emerald-900">
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                            <span><strong>Verzeichnis von Verarbeitungstätigkeiten (Art. 30)</strong> aktualisieren: "Art. 15 Anfragen" als eigene Verarbeitungstätigkeit führen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                            <span><strong>Statistiken führen</strong>: Anzahl Anfragen/Monat, Durchschnittliche Bearbeitungszeit, Ablehnungsquote</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                            <span><strong>Incident-Log bei Verstößen</strong>: "Frist um 2 Tage überschritten → Ursache: DB-Ausfall → Maßnahmen: Backup-Prozess implementiert"</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                            <span><strong>Audit-Trail</strong>: Jede Aktion im Ticketsystem protokollieren (wer, wann, was geändert)</span>
                          </li>
                        </ul>
                      </div>

                      <div className="mt-6 p-4 bg-slate-900 rounded-lg text-white">
                        <p className="font-semibold mb-2">🛠️ Tool-Empfehlungen:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                          <div>
                            <p className="text-sm font-semibold text-[#e24e1b]">Ticketsystem:</p>
                            <ul className="text-sm text-slate-300 space-y-1 mt-1">
                              <li>• Zendesk (DSGVO-Modus)</li>
                              <li>• Jira Service Management</li>
                              <li>• Freshdesk (EU-Server)</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#e24e1b]">Automatisierung:</p>
                            <ul className="text-sm text-slate-300 space-y-1 mt-1">
                              <li>• Marsstein (spezialisiert)</li>
                              <li>• OneTrust Subject Rights</li>
                              <li>• DataGrail</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="font-semibold text-yellow-900 mb-2">⚠️ Häufiger Fehler:</p>
                        <p className="text-yellow-900">"Wir haben die E-Mail beantwortet, das reicht doch?" → Nein! Bei einem Audit oder Beschwerde müssen Sie nachweisen:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-yellow-900 text-sm">
                          <li>Dass die Anfrage vollständig bearbeitet wurde (alle Systeme abgefragt?)</li>
                          <li>Dass alle Pflichtangaben nach Art. 15 enthalten waren</li>
                          <li>Dass die Frist eingehalten wurde</li>
                        </ul>
                        <p className="text-yellow-900 mt-2">→ Ohne Dokumentation = keine Nachweismöglichkeit = Verstoß gegen Art. 5 Abs. 2</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Was ist der Unterschied zwischen Art. 15 (Auskunft) und Art. 20 (Portabilität)?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-4">
                      <p>Beide Artikel geben Nutzern das Recht auf Datenkopien, aber mit unterschiedlichen Zwecken und Anforderungen:</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-blue-50 border-2 border-blue-300 rounded-lg">
                          <div className="flex items-center gap-2 mb-3">
                            <Eye className="h-5 w-5 text-blue-600" />
                            <h4 className="font-bold text-blue-900">Art. 15: Auskunftsrecht</h4>
                          </div>
                          <p className="text-sm text-blue-900 mb-3"><strong>Zweck:</strong> Transparenz & Kontrolle über die eigene Datenverarbeitung</p>

                          <p className="text-xs font-semibold text-blue-900 mb-2">Umfang:</p>
                          <ul className="text-xs text-blue-800 space-y-1 list-disc pl-4">
                            <li>ALLE personenbezogenen Daten</li>
                            <li>+ Verarbeitungszwecke</li>
                            <li>+ Empfänger</li>
                            <li>+ Speicherdauer</li>
                            <li>+ Quelle der Daten</li>
                            <li>+ Info über Profiling/automatisierte Entscheidungen</li>
                          </ul>

                          <p className="text-xs font-semibold text-blue-900 mt-3 mb-2">Format:</p>
                          <p className="text-xs text-blue-800">Beliebig (PDF, Word, Excel OK) – hauptsache lesbar</p>

                          <p className="text-xs font-semibold text-blue-900 mt-3 mb-2">Rechtsgrundlage:</p>
                          <p className="text-xs text-blue-800">Immer anwendbar (keine Einschränkungen)</p>
                        </div>

                        <div className="p-4 bg-purple-50 border-2 border-purple-300 rounded-lg">
                          <div className="flex items-center gap-2 mb-3">
                            <Download className="h-5 w-5 text-purple-600" />
                            <h4 className="font-bold text-purple-900">Art. 20: Datenübertragbarkeit</h4>
                          </div>
                          <p className="text-sm text-purple-900 mb-3"><strong>Zweck:</strong> Anbieterwechsel erleichtern (Wettbewerb fördern)</p>

                          <p className="text-xs font-semibold text-purple-900 mb-2">Umfang:</p>
                          <ul className="text-xs text-purple-800 space-y-1 list-disc pl-4">
                            <li>Nur Daten die der Nutzer <em>bereitgestellt</em> hat</li>
                            <li>Nur bei Einwilligung (Art. 6 Abs. 1 lit. a) oder Vertrag (lit. b)</li>
                            <li>Keine abgeleiteten Daten (z.B. Algorithmus-Scores)</li>
                            <li>Keine Metadaten (z.B. IP-Adressen, Logs)</li>
                          </ul>

                          <p className="text-xs font-semibold text-purple-900 mt-3 mb-2">Format:</p>
                          <p className="text-xs text-purple-800"><strong>Maschinenlesbar</strong> (JSON, CSV, XML) – zum automatischen Import bei anderem Anbieter</p>

                          <p className="text-xs font-semibold text-purple-900 mt-3 mb-2">Rechtsgrundlage:</p>
                          <p className="text-xs text-purple-800">Nur bei Einwilligung oder Vertragserfüllung (nicht bei berechtigtem Interesse!)</p>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-slate-900 rounded-lg text-white">
                        <p className="font-semibold mb-3">💡 Praktisches Beispiel TikTok-Nutzer:</p>
                        <div className="space-y-3 text-sm">
                          <div>
                            <p className="font-semibold text-[#e24e1b]">Art. 15 Anfrage würde enthalten:</p>
                            <ul className="list-disc pl-6 text-slate-300 space-y-1 mt-1">
                              <li>Videos die ich hochgeladen habe (vom Nutzer bereitgestellt)</li>
                              <li>Likes, Kommentare, Follower (vom Nutzer bereitgestellt)</li>
                              <li>Watch-Time-Daten, Scroll-Verhalten (von TikTok erfasst)</li>
                              <li>"For You"-Algorithmus-Profil (von TikTok berechnet)</li>
                              <li>IP-Adressen, Geräte-IDs, Location-Daten (Metadaten)</li>
                              <li>+ Verarbeitungszwecke, Empfänger, Speicherdauer usw.</li>
                            </ul>
                          </div>

                          <div className="mt-4">
                            <p className="font-semibold text-[#e24e1b]">Art. 20 Anfrage würde nur enthalten:</p>
                            <ul className="list-disc pl-6 text-slate-300 space-y-1 mt-1">
                              <li>Videos die ich hochgeladen habe (maschinenlesbar)</li>
                              <li>Meine Likes, Kommentare, Follower-Liste (CSV-Export)</li>
                              <li>Profil-Infos: Name, Bio, Profilbild (JSON)</li>
                            </ul>
                            <p className="text-slate-300 mt-2"><strong>Nicht enthalten:</strong> Algorithmus-Profile, Watch-Time, Tracking-Daten (nicht vom Nutzer bereitgestellt)</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <p className="font-semibold text-yellow-900 mb-2">⚠️ Häufiger Fehler chinesischer Firmen:</p>
                        <p className="text-yellow-900">"Wir haben einen JSON-Export nach Art. 20 geliefert, das reicht für Art. 15" → <strong>Falsch!</strong></p>
                        <p className="text-yellow-900 mt-2">Art. 20 ist eine <em>Teilmenge</em> von Art. 15. Ein Art. 20-Export reicht nicht für Art. 15, weil:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-1 text-yellow-900 text-sm">
                          <li>Verarbeitungszwecke fehlen</li>
                          <li>Empfänger fehlen</li>
                          <li>Abgeleitete Daten fehlen (z.B. Profiling-Scores)</li>
                          <li>Metadaten fehlen (z.B. IP-Adressen, Logs)</li>
                        </ul>
                      </div>

                      <div className="mt-6 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                        <p className="font-semibold text-emerald-900 mb-2">✅ Best Practice:</p>
                        <p className="text-emerald-900">Bieten Sie beide Optionen an:</p>
                        <ol className="list-decimal pl-6 mt-2 space-y-2 text-emerald-900 text-sm">
                          <li><strong>"Vollständige DSGVO-Auskunft" (Art. 15)</strong> → PDF mit allen Daten + Kontext (Zwecke, Empfänger, etc.)</li>
                          <li><strong>"Datenexport für Anbieterwechsel" (Art. 20)</strong> → JSON/CSV nur mit nutzerbereitgestellten Daten</li>
                        </ol>
                        <p className="text-emerald-900 mt-2">→ Macht Anfragen für beide Seiten einfacher und vermeidet Missverständnisse</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <Badge className="mb-4 bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0">
                  Automatisierte Lösung
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                  Vermeiden Sie Art. 15 Verstöße mit Marsstein
                </h2>
                <p className="text-lg text-slate-600">
                  Automatisierte Prozesse für DSGVO-Auskunftsanfragen. Kostenlose Erstberatung in 24h.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="border-2 border-slate-200 shadow-xl">
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="text-slate-700 font-semibold">
                          Firmenname <span className="text-[#e24e1b]">*</span>
                        </Label>
                        <Input
                          id="companyName"
                          name="companyName"
                          type="text"
                          required
                          value={formData.companyName}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          className="border-slate-300 focus:border-[#e24e1b] focus:ring-[#e24e1b]"
                          placeholder="Ihre Firma"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-slate-700 font-semibold">
                            E-Mail <span className="text-[#e24e1b]">*</span>
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            className="border-slate-300 focus:border-[#e24e1b] focus:ring-[#e24e1b]"
                            placeholder="ihre@email.com"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-slate-700 font-semibold">
                            Telefon
                          </Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleInputChange}
                            disabled={isSubmitting}
                            className="border-slate-300 focus:border-[#e24e1b] focus:ring-[#e24e1b]"
                            placeholder="+49 ..."
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-slate-700 font-semibold">
                          Ihre Nachricht
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          className="border-slate-300 focus:border-[#e24e1b] focus:ring-[#e24e1b]"
                          placeholder="Beschreiben Sie Ihre Situation..."
                        />
                      </div>

                      <div className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg border border-slate-200">
                        <Checkbox
                          id="betaAccess"
                          checked={formData.betaAccess}
                          onCheckedChange={handleCheckboxChange}
                          disabled={isSubmitting}
                          className="mt-1"
                        />
                        <Label
                          htmlFor="betaAccess"
                          className="text-sm text-slate-700 cursor-pointer leading-relaxed"
                        >
                          Ich möchte Marsstein kostenlos testen und vom Early Bird Preis profitieren
                        </Label>
                      </div>

                      {submitStatus === "success" && (
                        <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                          <p className="text-sm text-emerald-800">
                            Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.
                          </p>
                        </div>
                      )}

                      {submitStatus === "error" && (
                        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                          <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                          <p className="text-sm text-red-800">
                            Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
                          </p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#e24e1b] to-[#f97316] hover:from-[#d63f14] hover:to-[#ea580c] text-white font-semibold py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Wird gesendet...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Jetzt kostenlose Beratung anfragen
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <RelatedArticles articles={getRelatedArticles('artikel-15')} />

        <Footer />
      </div>
    </>
  );
}
