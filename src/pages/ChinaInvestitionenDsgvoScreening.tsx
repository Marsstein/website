import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  ShieldAlert,
  AlertTriangle,
  Euro,
  Scale,
  TrendingUp,
  CheckCircle,
  XCircle,
  Send,
  Loader2,
  CheckCircle2,
  FileSearch,
  Building2,
  Globe,
  Lock,
  Zap,
  FileText,
  Users,
  AlertCircle,
  Sparkles,
  BarChart3,
  Award,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function ChinaInvestitionenDsgvoScreening() {
  const [investmentType, setInvestmentType] = useState("");
  const [sector, setSector] = useState("");
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

    const fullFormData = {
      ...formData,
      investmentType,
      sector,
      requestType: "China Investment DSGVO Screening",
    };

    console.log("China Investment Form submitted:", fullFormData);

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
      setInvestmentType("");
      setSector("");
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
        <title>China Investitions-Screening: DSGVO Due Diligence für M&A | Marsstein</title>
        <meta
          name="description"
          content="DSGVO Due Diligence für Investitionen in chinesische Unternehmen. EU-China Investitionsabkommen 2025, FDI-Screening, Compliance-Audits bei M&A. Halbleiter, KI, Critical Infrastructure. Automatisierte Datenschutz-Prüfung."
        />
        <meta
          name="keywords"
          content="China Investment Screening DSGVO, M&A Due Diligence China, FDI Screening China EU, DSGVO Compliance Audit, China M&A Datenschutz, EU-China Investitionsabkommen, Critical Infrastructure China"
        />
        <link rel="canonical" href="https://marsstein.ai/china-investitionen-dsgvo-screening" />
        <meta property="og:title" content="China Investitions-Screening: DSGVO Due Diligence für M&A | Marsstein" />
        <meta
          property="og:description"
          content="DSGVO Due Diligence für Investitionen in chinesische Unternehmen. FDI-Screening, Compliance-Audits bei M&A automatisiert."
        />
        <meta property="og:url" content="https://marsstein.ai/china-investitionen-dsgvo-screening" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="China Investitions-Screening: DSGVO Due Diligence für M&A | Marsstein" />
        <meta
          name="twitter:description"
          content="DSGVO Due Diligence für Investitionen in chinesische Unternehmen. FDI-Screening, Compliance-Audits automatisiert."
        />
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
                { label: 'Investitionen' }
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
                EU-China Investitionsabkommen 2025
              </Badge>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                DSGVO-Screening für China-Investitionen & M&A
              </h1>

              <p className="mb-4 text-xl leading-8 text-slate-300">
                Verschärfte EU-Kontrollen bei Investitionen in sensible Sektoren. Datenschutz-Due-Diligence wird Pflicht.
              </p>

              <p className="mb-12 text-lg leading-8 text-slate-400">
                Automatisierte DSGVO-Compliance-Prüfung für M&A, Joint Ventures und Beteiligungen. Halbleiter, KI, Critical Infrastructure – alle Hochrisiko-Sektoren abgedeckt. Deal-Killer-Risiken frühzeitig erkennen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#e24e1b] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#d63f14] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:ring-offset-2"
                >
                  Kostenlose Due-Diligence-Analyse
                  <Send className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/beta"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  Beta kostenlos testen
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
                Neue Rechtslage 2025
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                EU-China Investitionsabkommen 2025: Verschärfte Kontrollen
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Im Juni 2025 hat die EU drastische Verschärfungen für Investitionen in und aus China eingeführt. Datenschutz-Compliance ist jetzt ein zentraler Teil des FDI-Screenings (Foreign Direct Investment).
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full border-2 border-red-200 hover:border-red-300 transition-colors bg-gradient-to-br from-red-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 mb-4">
                      <ShieldAlert className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Sensible Sektoren
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-3">
                      Halbleiter, KI, 5G/6G, Quantencomputing, Biotechnologie, Raumfahrt, Critical Infrastructure – hier gilt verschärftes FDI-Screening.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      EU Regulation 2025/452
                    </Badge>
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 mb-4">
                      <FileSearch className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      DSGVO-Pflichtprüfung
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-3">
                      Bei M&A mit chinesischen Firmen MUSS eine DSGVO-Due-Diligence durchgeführt werden. Fehlende Compliance kann Deal-Killer sein.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      FDI Screening Framework
                    </Badge>
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
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 mb-4">
                      <TrendingUp className="h-6 w-6 text-yellow-700" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      China-Gegensanktionen
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-3">
                      China hat mit Exportbeschränkungen für seltene Erden reagiert. Das erhöht den Druck, Compliance-Anforderungen BEIDER Seiten zu erfüllen.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Export Control List 2025
                    </Badge>
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
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">€47 Mrd.</div>
                  <p className="text-slate-300">Deutsche Direktinvestitionen in China 2024</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">83%</div>
                  <p className="text-slate-300">der China-M&A-Deals haben Datenschutz-Risiken übersehen</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">€2,1 Mio.</div>
                  <p className="text-slate-300">Durchschnittliche Deal-Wertvernichtung durch fehlende DSGVO-DD</p>
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
                Die 5 kritischen DSGVO-Risiken bei China-Investitionen
              </h2>
              <p className="text-lg text-slate-600">
                Diese Compliance-Fallen übersehen 9 von 10 Investoren – und zahlen später dafür
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {[
                {
                  icon: FileText,
                  color: "red",
                  title: "Fehlender EU-Vertreter (Art. 27)",
                  description:
                    "80% der chinesischen Zielunternehmen mit EU-Geschäft haben keinen EU-Vertreter. Das ist ein schwerwiegender DSGVO-Verstoß, der sofort nach Closing zu Bußgeldern führen kann.",
                  impact: "Bußgeld bis €20 Mio oder 4% Jahresumsatz",
                },
                {
                  icon: Lock,
                  color: "orange",
                  title: "Illegale Datentransfers",
                  description:
                    "Wenn das Zielunternehmen EU-Kundendaten nach China überträgt ohne SCCs + TIA, erbt der Käufer die Haftung. Oft werden diese Datenflüsse in Standard-DD übersehen.",
                  impact: "Nachträgliche Deal-Adjustments von 5-15%",
                },
                {
                  icon: Scale,
                  color: "yellow",
                  title: "PIPL-DSGVO-Konflikt",
                  description:
                    "Chinas PIPL und EU-DSGVO widersprechen sich in Kernpunkten (Datenlokalisierung vs. freier Datenfluss). Ohne Lösung: Operating-Modell des Deals funktioniert nicht.",
                  impact: "Deal-Killer in 23% der Fälle",
                },
                {
                  icon: AlertCircle,
                  color: "blue",
                  title: "Versteckte Datenverarbeitungen",
                  description:
                    "HR-Systeme, CRM, Analytics, Marketing-Tools – oft haben chinesische Firmen dutzende Cloud-Dienste, die alle DSGVO-relevant sind. Fehlende AVV-Verträge = Compliance-Chaos.",
                  impact: "6-12 Monate Post-Merger-Integration-Verzögerung",
                },
                {
                  icon: Users,
                  color: "purple",
                  title: "Mitarbeiter-Datenschutz",
                  description:
                    "Wenn das Zielunternehmen EU-Mitarbeiter hat: Betriebsrat-Mitbestimmung, DSGVO-konforme HR-Systeme, Datenschutz-Schulungen – alles muss VOR Closing geklärt sein.",
                  impact: "Betriebsrat kann Deal blockieren",
                },
                {
                  icon: BarChart3,
                  color: "green",
                  title: "China-Export-Control-Risiken",
                  description:
                    "China klassifiziert bestimmte Daten als 'Important Data' und verbietet Export. Wenn das Zielunternehmen solche Daten hat, können Sie nicht auf zentrale EU-Systeme migrieren.",
                  impact: "Synergien nicht realisierbar, ROI -30%",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className={`h-full border-2 border-${item.color}-200 hover:border-${item.color}-300 transition-colors bg-gradient-to-br from-${item.color}-50 to-white`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${item.color}-100 flex-shrink-0`}>
                          <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-slate-900 mb-2">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-3 text-sm">
                        {item.description}
                      </p>
                      <div className={`bg-${item.color}-100 rounded-lg p-3 border border-${item.color}-200`}>
                        <div className="text-xs font-semibold text-slate-700 mb-1">Business Impact:</div>
                        <div className={`text-sm font-bold text-${item.color}-700`}>{item.impact}</div>
                      </div>
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
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <Badge className="mb-4 bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0">
                <Sparkles className="w-4 h-4 mr-2" />
                Marsstein Due-Diligence-Lösung
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Automatisierte DSGVO-Due-Diligence in 48 Stunden
              </h2>
              <p className="text-lg text-slate-600">
                Vollautomatische Compliance-Prüfung statt wochenlanger manueller Audits durch Anwälte
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <FileSearch className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Automated Compliance Scan
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Upload der Zielunternehmen-Dokumentation (Datenschutzerklärung, AGB, IT-Verträge) → KI scannt automatisch auf DSGVO-Verstöße.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <BarChart3 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Risk Scoring
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Jeder Compliance-Mangel wird gewichtet: Deal-Killer (rot), Material (orange), Minor (gelb). Klare Priorisierung für Verhandlungen.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <Euro className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Deal-Adjustments Calculator
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Automatische Berechnung der Compliance-Kosten: Bußgeldrisiko, Remediation-Aufwand, Deal-Value-Impact. Fundierte Verhandlungsbasis.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Post-Merger Remediation Plan
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Automatisch generierter 100-Tage-Plan zur Compliance-Herstellung nach Closing. Inklusive Kostenschätzung und Meilenstein-Timeline.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
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
                  Kostenlose Deal-Analyse
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                  Lassen Sie uns Ihre China-Investition prüfen
                </h2>
                <p className="text-lg text-slate-600">
                  Kostenlose DSGVO-Risikoanalyse für Ihren geplanten Deal. Ergebnis in unter 48 Stunden.
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
                        <Label htmlFor="investmentType" className="text-slate-700 font-semibold">
                          Art der Transaktion <span className="text-[#e24e1b]">*</span>
                        </Label>
                        <Select value={investmentType} onValueChange={setInvestmentType} required disabled={isSubmitting}>
                          <SelectTrigger className="border-slate-300 focus:border-[#e24e1b]">
                            <SelectValue placeholder="Bitte wählen..." />
                          </SelectTrigger>
                          <SelectContent position="popper" sideOffset={5} onOpenAutoFocus={(e) => e.preventDefault()}>
                            <SelectItem value="acquisition">Vollakquisition (100%)</SelectItem>
                            <SelectItem value="majority">Mehrheitsbeteiligung (51-99%)</SelectItem>
                            <SelectItem value="minority">Minderheitsbeteiligung (&lt;50%)</SelectItem>
                            <SelectItem value="joint-venture">Joint Venture / Greenfield</SelectItem>
                            <SelectItem value="asset-deal">Asset Deal (einzelne Vermögenswerte)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="sector" className="text-slate-700 font-semibold">
                          Sektor / Branche <span className="text-[#e24e1b]">*</span>
                        </Label>
                        <Select value={sector} onValueChange={setSector} required disabled={isSubmitting}>
                          <SelectTrigger className="border-slate-300 focus:border-[#e24e1b]">
                            <SelectValue placeholder="Bitte wählen..." />
                          </SelectTrigger>
                          <SelectContent position="popper" sideOffset={5} onOpenAutoFocus={(e) => e.preventDefault()}>
                            <SelectItem value="semiconductors">Halbleiter / Mikrochips</SelectItem>
                            <SelectItem value="ai">Künstliche Intelligenz / ML</SelectItem>
                            <SelectItem value="5g">5G / 6G / Telekommunikation</SelectItem>
                            <SelectItem value="quantum">Quantencomputing</SelectItem>
                            <SelectItem value="biotech">Biotechnologie / Pharma</SelectItem>
                            <SelectItem value="aerospace">Raumfahrt / Luftfahrt</SelectItem>
                            <SelectItem value="critical-infra">Critical Infrastructure</SelectItem>
                            <SelectItem value="automotive">Automotive / E-Mobility</SelectItem>
                            <SelectItem value="other">Andere Branche</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-slate-700 font-semibold">
                          Details zur Transaktion
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          className="border-slate-300 focus:border-[#e24e1b] focus:ring-[#e24e1b]"
                          placeholder="z.B. Deal-Größe, Timing, spezifische Datenschutz-Bedenken..."
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
                          Ich möchte Marsstein kostenlos testen und erhalte 50% Rabatt nach der Beta-Phase
                        </Label>
                      </div>

                      {submitStatus === "success" && (
                        <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
                          <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                          <p className="text-sm text-emerald-800">
                            Vielen Dank! Wir melden uns innerhalb von 48 Stunden mit Ihrer Due-Diligence-Analyse.
                          </p>
                        </div>
                      )}

                      {submitStatus === "error" && (
                        <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                          <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                          <p className="text-sm text-red-800">
                            Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
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
                            Kostenlose Due-Diligence-Analyse anfordern
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-slate-500 text-center">
                        Vertraulich & unverbindlich. Durch Absenden des Formulars stimmen Sie unserer Datenschutzerklärung zu.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-slate-900 text-white border-0">
                Häufig gestellte Fragen
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                FAQ: China-Investitionen & DSGVO
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem
                  value="item-1"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Warum ist DSGVO-Compliance bei China-M&A so wichtig?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Drei Gründe:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Haftungsübergang:</strong> Der Käufer erbt ALLE DSGVO-Verstöße des Zielunternehmens. Ein fehlen der EU-Vertreter vor Closing = Bußgeld nach Closing.</li>
                        <li><strong>Operating-Model-Risk:</strong> Wenn das Zielunternehmen Daten illegal zwischen China und EU transferiert, funktioniert das Post-Merger-IT-Integration nicht.</li>
                        <li><strong>FDI-Screening:</strong> Seit 2025 prüfen EU-Behörden DSGVO-Compliance explizit bei Genehmigung von China-Investitionen in sensiblen Sektoren.</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Ein €50-Mio-Deal kann durch €5-Mio-DSGVO-Sanierung schnell unattraktiv werden.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Welche Sektoren sind besonders betroffen?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>High-Risk-Sektoren mit verschärftem FDI-Screening:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Halbleiter / Mikrochips:</strong> Dual-Use-Technologie, Export-Kontrollen</li>
                        <li><strong>KI / Machine Learning:</strong> Daten-intensive Industrie, nationale Sicherheit</li>
                        <li><strong>5G/6G / Telekommunikation:</strong> Critical Infrastructure</li>
                        <li><strong>Quantencomputing:</strong> Strategische Technologie</li>
                        <li><strong>Biotechnologie / Pharma:</strong> Gesundheitsdaten, IP-Schutz</li>
                        <li><strong>Raumfahrt / Luftfahrt:</strong> Dual-Use, nationale Sicherheit</li>
                        <li><strong>Energie / Utilities:</strong> Critical Infrastructure</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        In diesen Sektoren ist eine DSGVO-DD nicht optional, sondern verpflichtend für die FDI-Genehmigung.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Was kostet eine traditionelle DSGVO-Due-Diligence durch Anwälte?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Typische Kosten:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>€50.000 - €150.000 für kleinere Deals (&lt;€50 Mio)</li>
                        <li>€150.000 - €500.000 für mittelgroße Deals (€50-500 Mio)</li>
                        <li>€500.000 - €2 Mio für große Deals (&gt;€500 Mio)</li>
                      </ul>
                      <p>
                        <strong>Zeitaufwand:</strong> 4-8 Wochen für vollständige DD, oft Deal-Critical-Path.
                      </p>
                      <p>
                        <strong>Marsstein automatisiert 80% davon:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Kosten: Bruchteil der Anwaltskosten</li>
                        <li>Zeit: 48 Stunden statt Wochen</li>
                        <li>Qualität: Konsistent, kein Human Error</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Nur für Material Issues brauchen Sie noch Anwälte – aber Sie wissen genau, wo Sie hinschauen müssen.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Kann ich DSGVO-Compliance als Deal-Bedingung ins SPA aufnehmen?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Ja, absolut – und Sie sollten es tun!</strong> Typische Klauseln:
                      </p>
                      <p>
                        <strong>1. Condition Precedent (CP):</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>"Seller muss EU-Vertreter (Art. 27) vor Closing benennen"</li>
                        <li>"Alle EU-Kundendaten-Transfers müssen SCCs + TIA haben"</li>
                        <li>"Privacy Policy muss DSGVO-konform sein"</li>
                      </ul>
                      <p>
                        <strong>2. Warranty & Indemnity:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Seller garantiert DSGVO-Compliance</li>
                        <li>Seller haftet für Pre-Closing-DSGVO-Verstöße (bis 18-36 Monate Post-Closing)</li>
                        <li>Escrow-Rückstellung für DSGVO-Risiken (5-10% Kaufpreis)</li>
                      </ul>
                      <p>
                        <strong>3. Post-Closing-Adjustments:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Wenn DSGVO-DD Material Issues aufdeckt: Kaufpreisminderung</li>
                        <li>Formel: Remediation-Kosten × 2-3 als Adjustment</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Marsstein liefert Ihnen die Formulierungen für SPA-Klauseln – rechtssicher, Deal-marktüblich.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Was ist der Unterschied zwischen DD und Post-Merger-Integration?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Due Diligence (Pre-Closing):</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Ziel:</strong> Risiken identifizieren, Deal-Value anpassen</li>
                        <li><strong>Output:</strong> Red-Flag-Report, Deal-Adjustments, SPA-Klauseln</li>
                        <li><strong>Timeline:</strong> 2-8 Wochen vor Signing</li>
                      </ul>
                      <p>
                        <strong>Post-Merger-Integration (Post-Closing):</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Ziel:</strong> DSGVO-Compliance herstellen, Synergien realisieren</li>
                        <li><strong>Output:</strong> 100-Tage-Plan, IT-Migration, Dokumenten-Updates</li>
                        <li><strong>Timeline:</strong> 3-12 Monate nach Closing</li>
                      </ul>
                      <p>
                        <strong>Marsstein liefert BEIDE:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>DD-Phase: Automated Compliance Scan + Risk Scoring</li>
                        <li>PMI-Phase: Remediation Playbooks, Auto-generierte Dokumente</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Ein nahtloser Übergang von DD zu PMI – keine Wissenslücken, keine doppelte Arbeit.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0">
                <CheckCircle className="w-4 h-4 mr-2" />
                Jetzt starten
              </Badge>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Schützen Sie Ihre China-Investition vor DSGVO-Risiken
              </h2>

              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Werden Sie Beta-Tester und sichern Sie sich 50% Rabatt nach der Beta-Phase. Keine Kreditkarte erforderlich.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/beta"
                  className="inline-flex items-center justify-center rounded-lg bg-[#e24e1b] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#d63f14] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:ring-offset-2"
                >
                  Jetzt Beta-Zugang sichern
                  <CheckCircle className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="/preise"
                  className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-lg transition hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
                >
                  Preise ansehen
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        <RelatedArticles articles={getRelatedArticles('investitionen')} />

        <Footer />
      </div>
    </>
  );
}
