import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Brain,
  AlertTriangle,
  Eye,
  Shield,
  Globe,
  Lock,
  CheckCircle,
  XCircle,
  Send,
  Loader2,
  CheckCircle2,
  FileText,
  Database,
  Users,
  Sparkles,
  Server,
  GitBranch,
  Scale,
  Ban,
  Euro,
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

export default function DeepseekDsgvo() {
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

    console.log("DeepSeek GDPR Form submitted:", formData);

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

  const complianceComparison = [
    {
      provider: "DeepSeek",
      country: "China",
      euServer: "❌ Nein",
      gdprCompliance: "⚠️ Unklar",
      dataProcessingAgreement: "❌ Nicht verfügbar",
      transparencyReport: "❌ Nein",
      governmentAccess: "⚠️ Möglich (chin. Recht)",
      risk: "Hoch"
    },
    {
      provider: "ChatGPT (OpenAI)",
      country: "USA",
      euServer: "✅ Ja (Azure EU)",
      gdprCompliance: "✅ GDPR-konform",
      dataProcessingAgreement: "✅ DPA verfügbar",
      transparencyReport: "✅ Ja",
      governmentAccess: "⚠️ CLOUD Act (USA)",
      risk: "Mittel"
    },
    {
      provider: "Claude (Anthropic)",
      country: "USA",
      euServer: "✅ Ja (AWS EU)",
      gdprCompliance: "✅ GDPR-konform",
      dataProcessingAgreement: "✅ DPA verfügbar",
      transparencyReport: "✅ Ja",
      governmentAccess: "⚠️ CLOUD Act (USA)",
      risk: "Mittel"
    },
    {
      provider: "Mistral AI",
      country: "Frankreich (EU)",
      euServer: "✅ Ja",
      gdprCompliance: "✅ Voll konform",
      dataProcessingAgreement: "✅ DPA verfügbar",
      transparencyReport: "✅ Ja",
      governmentAccess: "✅ EU-Recht",
      risk: "Niedrig"
    }
  ];

  return (
    <>
      <Helmet>
        <title>DeepSeek DSGVO: Chinesische KI unter EU-Datenschutz-Beobachtung 2025 | Marsstein</title>
        <meta
          name="description"
          content="DeepSeek AI GDPR Compliance-Risiken. Chinesische KI-Modelle vs. ChatGPT/Claude Datenschutz. Art. 22, 35 DSGVO für AI. EU-Mirror-Deployment Lösungen für China AI-Firmen."
        />
        <meta
          name="keywords"
          content="DeepSeek GDPR, DeepSeek DSGVO, chinesische KI GDPR, AI DSGVO China, Art 22 automatisierte Entscheidungen, DSFA KI, China AI EU Datenschutz, AI compliance China"
        />
        <link rel="canonical" href="https://marsstein.ai/deepseek-dsgvo" />
        <meta property="og:title" content="DeepSeek DSGVO: Chinesische KI unter Beobachtung" />
        <meta
          property="og:description"
          content="DeepSeek & chinesische AI-Modelle: GDPR-Risiken, Compliance-Anforderungen und Lösungen für EU-Markt."
        />
        <meta property="og:url" content="https://marsstein.ai/deepseek-dsgvo" />
        <meta property="og:type" content="website" />
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
                { label: 'DeepSeek DSGVO' }
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
                <Brain className="w-4 h-4 mr-2" />
                Chinesische AI-Modelle unter EU-Beobachtung
              </Badge>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                DeepSeek DSGVO: Chinesische KI unter Datenschutz-Beobachtung 2025
              </h1>

              <p className="mb-4 text-xl leading-8 text-slate-300">
                DeepSeek und andere chinesische AI-Modelle stehen unter Beobachtung europäischer Datenschutzbehörden. Unklare Datenschutzrichtlinien, fehlende DPAs und möglicher Behördenzugriff.
              </p>

              <p className="mb-12 text-lg leading-8 text-slate-400">
                DSGVO-Compliance für AI ist komplex: Art. 22 (automatisierte Entscheidungen), Art. 35 (DSFA für KI), Art. 13/14 (Transparenz). Marsstein automatisiert AI-Compliance für chinesische Tech-Firmen.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#e24e1b] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#d63f14] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:ring-offset-2"
                >
                  AI-DSGVO Compliance aufsetzen
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
                GDPR-Risiken
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Die 6 kritischsten DSGVO-Probleme chinesischer AI-Modelle
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                DeepSeek, Baidu ERNIE, Alibaba Qwen und andere chinesische AI-Systeme kämpfen mit fundamentalen EU-Datenschutz-Hürden
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Eye,
                  title: "Fehlende Transparenz (Art. 13/14)",
                  description: "DeepSeek veröffentlicht keine Details über Trainings-Daten, Verarbeitungszwecke oder Speicherorte. DSGVO verlangt vollständige Transparenz.",
                  color: "red"
                },
                {
                  icon: Database,
                  title: "Training ohne Consent?",
                  description: "Wurden EU-Nutzerdaten ohne Einwilligung für Model-Training verwendet? Verstoß gegen Art. 6 DSGVO (Rechtsgrundlage).",
                  color: "orange"
                },
                {
                  icon: Lock,
                  title: "Fehlende Data Processing Agreements",
                  description: "Keine DPAs, keine SCCs, keine GDPR-Garantien für Geschäftskunden. B2B-Nutzung ist Grauzone.",
                  color: "yellow"
                },
                {
                  icon: Server,
                  title: "Server-Standort unklar",
                  description: "Wo laufen DeepSeek-Modelle? In China? US? EU? Fehlende Angaben zu Datenlokalisierung.",
                  color: "blue"
                },
                {
                  icon: Ban,
                  title: "Art. 22: Automatisierte Entscheidungen",
                  description: "AI-basierte Entscheidungen ohne menschliche Kontrolle sind nur mit expliziter Einwilligung erlaubt. DeepSeek hat keine Compliance-Mechanismen.",
                  color: "purple"
                },
                {
                  icon: Scale,
                  title: "Möglicher Behördenzugriff",
                  description: "Chinas Datenschutzgesetz erlaubt staatlichen Zugriff auf Daten. Schrems-II-Problem wie bei Facebook/USA.",
                  color: "red"
                }
              ].map((issue, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`h-full border-2 border-${issue.color}-200 hover:border-${issue.color}-300 transition-colors bg-gradient-to-br from-${issue.color}-50 to-white`}>
                    <CardContent className="p-6">
                      <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${issue.color}-100 mb-4`}>
                        <issue.icon className={`h-6 w-6 text-${issue.color}-600`} />
                      </div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-3">
                        {issue.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {issue.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 mt-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">2025</div>
                  <p className="text-slate-300">EU-Datenschutzbehörden beobachten DeepSeek aktiv</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">€20 Mio.</div>
                  <p className="text-slate-300">Maximales Bußgeld für AI-DSGVO-Verstöße</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">6+</div>
                  <p className="text-slate-300">Kritische GDPR-Artikel für AI-Compliance</p>
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
                GDPR-Compliance-Vergleich: DeepSeek vs. ChatGPT vs. Claude vs. Mistral
              </h2>
              <p className="text-lg text-slate-600">
                Wie schneidet DeepSeek im Vergleich zu westlichen AI-Modellen ab?
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-slate-900 to-slate-800">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Provider</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Land</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">EU Server</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">GDPR-Status</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">DPA</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Transparency</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Behördenzugriff</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-white">Risiko</th>
                  </tr>
                </thead>
                <tbody>
                  {complianceComparison.map((provider, index) => (
                    <tr key={index} className={`border-b border-slate-200 ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900">{provider.provider}</td>
                      <td className="px-6 py-4 text-sm text-slate-600">{provider.country}</td>
                      <td className="px-6 py-4 text-sm">{provider.euServer}</td>
                      <td className="px-6 py-4 text-sm">{provider.gdprCompliance}</td>
                      <td className="px-6 py-4 text-sm">{provider.dataProcessingAgreement}</td>
                      <td className="px-6 py-4 text-sm">{provider.transparencyReport}</td>
                      <td className="px-6 py-4 text-sm">{provider.governmentAccess}</td>
                      <td className="px-6 py-4">
                        <Badge variant="outline" className={`text-xs ${
                          provider.risk === 'Hoch' ? 'border-red-300 text-red-700' :
                          provider.risk === 'Mittel' ? 'border-yellow-300 text-yellow-700' :
                          'border-green-300 text-green-700'
                        }`}>
                          {provider.risk}
                        </Badge>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
              className="mx-auto max-w-3xl text-center mb-16"
            >
              <Badge className="mb-4 bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0">
                <Sparkles className="w-4 h-4 mr-2" />
                Lösung
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                EU-Mirror-Deployment: Die Lösung für chinesische AI-Firmen
              </h2>
              <p className="text-lg text-slate-600">
                So machen Sie Ihre KI DSGVO-konform ohne Ihr Geschäftsmodell zu gefährden
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  icon: Server,
                  title: "EU-Server für EU-Kunden",
                  description: "Deployment Ihrer AI-Modelle auf EU-Servern (AWS Frankfurt, Azure Netherlands). Alle EU-Kundendaten bleiben in der EU. China-Server für China-Kunden.",
                  steps: ["AWS EU / Azure EU Setup", "Geo-IP-basiertes Routing", "Separate Daten-Silos"]
                },
                {
                  icon: GitBranch,
                  title: "Lokales Fine-Tuning",
                  description: "Training Ihrer Modelle mit EU-Daten nur auf EU-Infrastruktur. China-Trainings-Daten bleiben in China. Keine Cross-Border-Transfers von Trainings-Daten.",
                  steps: ["EU Training Pipeline", "Separate Model Weights", "Federated Learning"]
                },
                {
                  icon: FileText,
                  title: "DSGVO-Dokumentation",
                  description: "Vollständige Dokumentation: Verarbeitungsverzeichnis für AI, DSFA (Art. 35), Transparenz über Training & Inferenz, DPAs für B2B-Kunden.",
                  steps: ["AI-spezifisches RoPA", "DSFA Template", "DPA Generator"]
                },
                {
                  icon: Users,
                  title: "User Rights Management",
                  description: "Automatisierte Prozesse für Art. 15-22 DSGVO-Anfragen: Auskunft (welche Daten wurden für Training verwendet?), Löschung, Widerspruch gegen AI-Verarbeitung.",
                  steps: ["Request Portal", "Data Lineage Tracking", "Automated Response"]
                }
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors bg-white">
                    <CardContent className="p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                        <solution.icon className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        {solution.description}
                      </p>
                      <div className="space-y-2">
                        {solution.steps.map((step, stepIndex) => (
                          <div key={stepIndex} className="flex items-center gap-2 text-sm text-slate-600">
                            <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                            <span>{step}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <Card className="border-2 border-[#e24e1b] bg-gradient-to-br from-orange-50 to-white shadow-xl max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Brain className="w-8 h-8 text-[#e24e1b]" />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Marsstein macht AI DSGVO-konform – automatisch
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Unsere Plattform generiert automatisch alle DSGVO-Dokumente für AI-Systeme: DSFA, Verarbeitungsverzeichnis, DPAs, User Rights Management. Spezialisiert auf chinesische AI-Firmen im EU-Markt.
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] hover:from-[#d63f14] hover:to-[#ea580c] text-white"
                    asChild
                  >
                    <a href="#contact">
                      Jetzt AI-DSGVO Compliance aufsetzen
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
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
                  Kostenlose AI-DSGVO Beratung
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                  DSGVO-Compliance für Ihre AI-Produkte
                </h2>
                <p className="text-lg text-slate-600">
                  Spezialisiert auf chinesische AI-Firmen. Antwort in 24h.
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
                            placeholder="+86 ..."
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
                          placeholder="Beschreiben Sie Ihr AI-Produkt und EU-Markt-Pläne..."
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

        <RelatedArticles articles={getRelatedArticles('deepseek')} />

        <Footer />
      </div>
    </>
  );
}
