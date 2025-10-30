import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { getRelatedArticles } from "@/data/chinaArticles";
import {
  Scale,
  Shield,
  Globe,
  AlertTriangle,
  CheckCircle2,
  Euro,
  FileText,
  ArrowRight,
  Lock,
  ClipboardCheck,
  Target,
  TrendingUp,
  Building2,
  Users,
  Zap,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PiplGdprChina() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessModel: "",
    dataVolume: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://app.loops.so/api/v1/contacts/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_LOOPS_API_KEY}`,
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.contactPerson,
          lastName: "",
          source: "PIPL+GDPR Dual Compliance Landing Page",
          userGroup: "PIPL GDPR Dual Compliance Leads",
          companyName: formData.companyName,
          phone: formData.phone,
          businessModel: formData.businessModel,
          dataVolume: formData.dataVolume,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          companyName: "",
          contactPerson: "",
          email: "",
          phone: "",
          businessModel: "",
          dataVolume: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>PIPL + GDPR Dual Compliance | Chinesische Unternehmen in China & EU</title>
        <meta
          name="description"
          content="PIPL (China) + GDPR (EU) gleichzeitig erfüllen. Für chinesische Unternehmen mit EU-Kunden. Dual Compliance, SCCs, TIA, EU-Vertreter. Rechtssichere Expansion China ↔ EU in 7 Tagen."
        />
        <meta
          name="keywords"
          content="PIPL GDPR Compliance, China EU Datenschutz, Personal Information Protection Law, Dual Compliance China, Cross-Border Data Transfer, PIPL vs GDPR, China Datenschutz, EU China Business"
        />
        <link rel="canonical" href="https://marsstein.com/pipl-gdpr-china" />
        <meta property="og:title" content="PIPL + GDPR Dual Compliance | China & EU Datenschutz" />
        <meta
          property="og:description"
          content="PIPL (China) + GDPR (EU) gleichzeitig erfüllen. Dual Compliance für chinesische Unternehmen mit EU-Kunden. Rechtssicher in 7 Tagen."
        />
        <meta property="og:url" content="https://marsstein.com/pipl-gdpr-china" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PIPL + GDPR Dual Compliance für China-EU Business" />
        <meta
          name="twitter:description"
          content="PIPL + GDPR gleichzeitig erfüllen. SCCs, TIA, EU-Vertreter. Rechtssichere Expansion China ↔ EU."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />

        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-6 py-24 sm:py-32 lg:px-8">
          <div className="absolute inset-0 bg-grid-white/5"></div>
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: 'Wissen', href: '/wissen' },
                { label: 'China & DSGVO', href: '/wissen/china' },
                { label: 'PIPL vs GDPR' }
              ]}
              className="mb-8"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative mx-auto max-w-4xl text-center"
          >
            <Badge className="mb-6 bg-[#e24e1b] text-white hover:bg-[#c93e0f] text-sm px-4 py-2">
              PIPL + GDPR Dual Compliance
            </Badge>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              PIPL + GDPR: Dual Compliance für China-EU Business
            </h1>

            <p className="mb-4 text-xl leading-8 text-slate-300">
              Chinesische Unternehmen mit EU-Kunden müssen ZWEI Datenschutzgesetze erfüllen: PIPL (Personal Information Protection Law) in China + DSGVO in Europa.
            </p>

            <p className="mb-12 text-lg leading-8 text-slate-400">
              Widersprüchliche Anforderungen, kein Angemessenheitsbeschluss, State Access Risk. Wir automatisieren Ihre Dual Compliance in 7 Tagen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#e24e1b] text-white hover:bg-[#c93e0f] text-lg px-8 py-6"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Kostenlose Dual-Compliance-Prüfung
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6"
                onClick={() => document.getElementById("comparison")?.scrollIntoView({ behavior: "smooth" })}
              >
                PIPL vs. GDPR Vergleich
              </Button>
            </div>
          </motion.div>
        </section>

        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Die Dual-Compliance-Herausforderung
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Am 1. November 2021 trat Chinas PIPL (Personal Information Protection Law, 个人信息保护法) in Kraft – oft als "Chinas DSGVO" bezeichnet. Aber: PIPL ≠ GDPR. Widersprüchliche Anforderungen machen Dual Compliance komplex.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">2021</div>
                  <p className="text-slate-300">PIPL trat am 1. November 2021 in Kraft (DSGVO: Mai 2018)</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">1,4 Mrd.</div>
                  <p className="text-slate-300">Chinesische Bürger unterliegen PIPL + 450 Mio. EU-Bürger unter DSGVO</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">90%</div>
                  <p className="text-slate-300">Chinesische Unternehmen mit EU-Kunden verstoßen gegen PIPL oder GDPR (oder beide)</p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-red-200 hover:border-red-400 transition-colors bg-gradient-to-br from-red-50 to-white">
                  <CardContent className="p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-red-500 to-red-600 mb-6">
                      <Globe className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      PIPL (China)
                    </h3>
                    <p className="text-slate-600 mb-4">
                      <strong>Personal Information Protection Law (个人信息保护法)</strong> – Chinas Antwort auf die DSGVO.
                    </p>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Gilt für alle Unternehmen in China</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Fokus: Nationale Sicherheit + Datensouveränität</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Datenlokalisierung für "kritische Daten" verpflichtend</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Kooperation mit Behörden verpflichtend</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-blue-200 hover:border-blue-400 transition-colors bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 mb-6">
                      <Scale className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      GDPR (EU)
                    </h3>
                    <p className="text-slate-600 mb-4">
                      <strong>General Data Protection Regulation (DSGVO/GDPR)</strong> – EUs Gold-Standard für Datenschutz.
                    </p>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Gilt für alle Unternehmen mit EU-Kunden</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Fokus: Individuelle Rechte + Transparenz</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Datentransfers nur mit Angemessenheitsbeschluss oder SCCs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Staatlicher Zugriff streng limitiert</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="comparison" className="py-16 px-6 lg:px-8 bg-slate-50">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                PIPL vs. GDPR: Der detaillierte Vergleich
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Beide Gesetze schützen personenbezogene Daten – aber mit unterschiedlichen Prioritäten und teilweise widersprüchlichen Anforderungen.
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                  <tr>
                    <th className="p-4 text-left font-semibold">Aspekt</th>
                    <th className="p-4 text-left font-semibold">PIPL (China) 🇨🇳</th>
                    <th className="p-4 text-left font-semibold">GDPR (EU) 🇪🇺</th>
                    <th className="p-4 text-left font-semibold">Dual Compliance Challenge</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Rechtsgrundlage "Legitimate Interest"</td>
                    <td className="p-4 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Nicht erlaubt</strong> – nur Einwilligung oder gesetzliche Pflicht</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Erlaubt</strong> (Art. 6 Abs. 1 lit. f) – wichtige Rechtsgrundlage</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-orange-600">
                      ⚠️ Wenn Sie in China sind: KEINE Legitimate Interest → Einwilligung erforderlich
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Staatlicher Zugriff auf Daten</td>
                    <td className="p-4 text-slate-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Verpflichtend</strong> – Kooperation mit Behörden bei nationaler Sicherheit</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Streng limitiert</strong> – nur mit richterlichem Beschluss</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-red-600">
                      🚨 Größtes Problem: China kann EU-Daten anfordern → GDPR-Verstoß
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Datenlokalisierung</td>
                    <td className="p-4 text-slate-600">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Pflicht</strong> für "kritische Daten" (Infrastruktur, große Mengen)</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-600">
                      <div className="flex items-start gap-2">
                        <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <span><strong>Nicht zwingend</strong> – freier Datenfluss innerhalb EU</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-orange-600">
                      ⚠️ China verlangt Daten in China, EU erlaubt Daten außerhalb → Konflikt
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Cross-Border Data Transfers</td>
                    <td className="p-4 text-slate-600">
                      <div className="flex items-start gap-2">
                        <Lock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>China SCCs + Security Assessment für sensible Daten</span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-600">
                      <div className="flex items-start gap-2">
                        <Lock className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>EU SCCs + TIA (Transfer Impact Assessment)</span>
                      </div>
                    </td>
                    <td className="p-4 text-sm text-orange-600">
                      ⚠️ Unterschiedliche SCCs → zwei separate Verträge notwendig
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Bußgelder</td>
                    <td className="p-4 text-slate-600">
                      <Euro className="h-5 w-5 text-red-500 inline mr-2" />
                      Bis zu <strong>¥50 Mio. (≈€6,5 Mio.)</strong> oder 5% Jahresumsatz
                    </td>
                    <td className="p-4 text-slate-600">
                      <Euro className="h-5 w-5 text-red-500 inline mr-2" />
                      Bis zu <strong>€20 Mio.</strong> oder 4% Jahresumsatz
                    </td>
                    <td className="p-4 text-sm text-red-600">
                      🚨 Beide Behörden können gleichzeitig strafen → kumulative Bußgelder
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Einwilligungsanforderungen</td>
                    <td className="p-4 text-slate-600">
                      <span>Einwilligung muss <strong>"separat"</strong> eingeholt werden (nicht in AGB versteckt)</span>
                    </td>
                    <td className="p-4 text-slate-600">
                      <span>Einwilligung muss <strong>"eindeutig"</strong> sein (aber kann in Verträgen integriert werden)</span>
                    </td>
                    <td className="p-4 text-sm text-orange-600">
                      ⚠️ China-Standard ist strenger → separate Checkbox erforderlich
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Betroffenenrechte</td>
                    <td className="p-4 text-slate-600">
                      <span>Auskunft, Löschung, Berichtigung – ähnlich wie GDPR</span>
                    </td>
                    <td className="p-4 text-slate-600">
                      <span>Auskunft, Löschung, Berichtigung, Datenübertragbarkeit, Widerspruch</span>
                    </td>
                    <td className="p-4 text-sm text-green-600">
                      ✅ Weitgehend kompatibel – Prozesse können kombiniert werden
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-semibold text-slate-900">Meldepflicht bei Datenpannen</td>
                    <td className="p-4 text-slate-600">
                      <span><strong>Sofortige Meldung</strong> bei schweren Vorfällen (innerhalb Stunden)</span>
                    </td>
                    <td className="p-4 text-slate-600">
                      <span><strong>72 Stunden</strong> nach Kenntnis der Panne</span>
                    </td>
                    <td className="p-4 text-sm text-red-600">
                      🚨 China-Frist kürzer → China-Meldung zuerst, dann EU
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Die 5 größten Dual-Compliance-Fallstricke
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                90% der chinesischen Unternehmen mit EU-Kunden scheitern an diesen Punkten.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-red-200 hover:border-red-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 mb-4">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      1. Kein Angemessenheitsbeschluss für China
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Die EU hat <strong>keinen Adequacy Decision</strong> für China. Jeder Datentransfer EU → China benötigt SCCs + TIA. Ohne = GDPR-Verstoß. Umgekehrt: China → EU ebenfalls komplex.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-red-200 hover:border-red-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 mb-4">
                      <Lock className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      2. State Access Risk (Behördenzugriff)
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      PIPL verpflichtet zur Kooperation mit chinesischen Behörden. GDPR verbietet unrechtmäßigen Staatszugriff. <strong>Unlösbarer Konflikt?</strong> Nein – aber TIA muss Risiko dokumentieren.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-red-200 hover:border-red-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 mb-4">
                      <Target className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      3. "Legitimate Interest" funktioniert nicht
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      GDPR erlaubt "berechtigtes Interesse" als Rechtsgrundlage. PIPL nicht. Lösung: Einwilligung einholen für <u>alle</u> Datenverarbeitungen (auch wenn GDPR es nicht verlangt).
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-red-200 hover:border-red-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 mb-4">
                      <FileText className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      4. Zwei unterschiedliche SCC-Sets
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      China hat eigene SCCs (Standard Contractual Clauses), EU hat eigene. Sie benötigen <strong>zwei</strong> separate Verträge für bidirektionale Datentransfers. Nicht interkompatibel.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-red-200 hover:border-red-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100 mb-4">
                      <Building2 className="h-6 w-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      5. Fehlende EU-Vertreter & China-Vertreter
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      GDPR verlangt EU-Vertreter (Art. 27). PIPL verlangt China-Vertreter für ausländische Unternehmen. Bidirektionales Business → <strong>beide</strong> Vertreter notwendig.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-orange-200 hover:border-orange-400 transition-colors bg-gradient-to-br from-orange-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 mb-4">
                      <Zap className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      Bonus: Datenlokalisierungs-Pflicht vs. Datentransfer-Freiheit
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      PIPL: "Kritische Daten" müssen in China bleiben. GDPR: Daten dürfen überall hin (mit SCCs). Konflikt → Sie benötigen separate Server-Infrastruktur für China- vs. EU-Daten.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 lg:px-8 bg-slate-50">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Unsere Dual-Compliance-Lösung
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Die einzige automatisierte End-to-End-Lösung für PIPL + GDPR gleichzeitig.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <Scale className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Dual-Representative Service
                    </h3>
                    <p className="text-sm text-slate-600">
                      EU-Vertreter (Art. 27 GDPR) in Deutschland + China-Vertreter-Koordination für bidirektionales Geschäft.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      China SCCs + EU SCCs
                    </h3>
                    <p className="text-sm text-slate-600">
                      Zwei separate SCC-Sets für bidirektionale Datentransfers. China → EU und EU → China rechtssicher.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <ClipboardCheck className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Transfer Impact Assessment
                    </h3>
                    <p className="text-sm text-slate-600">
                      TIA für State Access Risk. Dokumentiert, wie Sie EU-Daten in China vor unrechtmäßigem Behördenzugriff schützen.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Dual Privacy Policies
                    </h3>
                    <p className="text-sm text-slate-600">
                      Separate Privacy Policies für China (PIPL-konform) und EU (GDPR-konform). Mehrsprachig (Chinesisch, Deutsch, Englisch).
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                        <TrendingUp className="h-6 w-6 text-green-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        Warum Marsstein einzigartig ist
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        Wir sind die <strong>einzige</strong> Compliance-Lösung, die sowohl PIPL als auch GDPR versteht – und die Widersprüche zwischen beiden automatisch auflöst.
                      </p>
                      <ul className="grid md:grid-cols-2 gap-4">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600">Team mit China- und EU-Rechtsexpertise</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600">Automatisierte Dokumenten-Generierung (Chinesisch + Deutsch)</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600">7 Tage Setup statt 6 Monate bei Anwälten</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-slate-600">70% günstiger als traditionelle Compliance-Dienstleister</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="py-16 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Häufig gestellte Fragen (FAQ)
              </h2>
            </motion.div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Kann ich nicht einfach GDPR erfüllen und PIPL ignorieren (oder umgekehrt)?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Nein – beide Gesetze gelten gleichzeitig.</strong></p>
                    <p><strong>Wenn Sie in China ansässig sind + EU-Kunden haben:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>PIPL gilt, weil Sie in China sind</li>
                      <li>GDPR gilt, weil Sie EU-Kundendaten verarbeiten</li>
                      <li>Sie können nicht "eins aussuchen"</li>
                    </ul>
                    <p><strong>Was passiert wenn Sie PIPL ignorieren?</strong></p>
                    <p>Chinesische Behörden (CAC - Cyberspace Administration of China) können Bußgelder bis ¥50 Mio. (≈€6,5 Mio.) verhängen oder Ihr Geschäft schließen.</p>
                    <p><strong>Was passiert wenn Sie GDPR ignorieren?</strong></p>
                    <p>EU-Datenschutzbehörden können Bußgelder bis €20 Mio. oder 4% Jahresumsatz verhängen.</p>
                    <p><strong>Resultat:</strong> Beide Behörden können Sie <u>gleichzeitig</u> bestrafen → kumulative Bußgelder bis €26,5 Mio.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Was ist der "State Access Risk" und wie löse ich ihn?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>State Access Risk = Risiko, dass chinesische Behörden auf EU-Kundendaten zugreifen.</strong></p>
                    <p><strong>Das Problem:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>PIPL verpflichtet chinesische Unternehmen, mit Behörden zu kooperieren bei "nationaler Sicherheit"</li>
                      <li>GDPR verbietet unrechtmäßigen Staatszugriff auf EU-Daten</li>
                      <li>Wenn China EU-Daten anfordert → Sie müssen liefern (PIPL) → aber das ist GDPR-Verstoß</li>
                    </ul>
                    <p><strong>Die Lösung (TIA + organisatorische Maßnahmen):</strong></p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Transfer Impact Assessment (TIA):</strong> Dokumentieren Sie das Risiko und Ihre Schutzmaßnahmen</li>
                      <li><strong>Datensegmentierung:</strong> EU-Kundendaten getrennt von China-Kundendaten speichern</li>
                      <li><strong>Verschlüsselung:</strong> EU-Daten verschlüsselt speichern mit Schlüssel außerhalb Chinas</li>
                      <li><strong>Rechtliche Zusicherungen:</strong> In EU-SCCs zusichern: "Wir werden Behördenanfragen widersprechen"</li>
                      <li><strong>Transparenz:</strong> In Privacy Policy offenlegen: "Daten in China gespeichert, potentieller Staatszugriff"</li>
                    </ol>
                    <p><strong>Realistisch gesagt:</strong> Sie können das Risiko nicht auf null reduzieren. Aber Sie können es dokumentieren + minimieren → GDPR-konform.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Brauche ich separate Server für China-Daten und EU-Daten?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Hängt davon ab, ob Ihre Daten als "kritisch" eingestuft werden nach PIPL.</strong></p>
                    <p><strong>PIPL-Datenlokalisierungspflicht gilt für:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Critical Information Infrastructure Operators (CIIOs):</strong> Telekommunikation, Energie, Transport, Finanzen</li>
                      <li><strong>Verarbeitung "großer Mengen" personenbezogener Daten:</strong> >1 Million Personen (unklare Schwelle)</li>
                      <li><strong>Sensible personenbezogene Daten:</strong> Gesundheit, Biometrie, Finanzinformationen</li>
                    </ul>
                    <p><strong>Wenn Sie NICHT unter Datenlokalisierungspflicht fallen:</strong></p>
                    <p>Sie können EU-Daten und China-Daten auf demselben Server speichern (z.B. AWS China Region) – <u>aber</u> Sie brauchen trotzdem SCCs + TIA für GDPR.</p>
                    <p><strong>Best Practice (auch ohne Pflicht):</strong></p>
                    <p>Separate Server reduzieren Compliance-Risiken:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>China-Server:</strong> Alibaba Cloud, Tencent Cloud (für China-Kundendaten)</li>
                      <li><strong>EU-Server:</strong> AWS Frankfurt, Azure EU (für EU-Kundendaten)</li>
                    </ul>
                    <p><strong>Kosten:</strong> Separate Server erhöhen Infrastrukturkosten um 20-40%, aber reduzieren Compliance-Risiken erheblich.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Was ist der Unterschied zwischen China SCCs und EU SCCs?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Beide sind Standard Contractual Clauses – aber mit unterschiedlichen Anforderungen.</strong></p>
                    <p><strong>EU SCCs (Standard Contractual Clauses):</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Vertragliche Garantien für Datentransfer aus EU in Drittländer (inkl. China)</li>
                      <li>Erlassen von der EU-Kommission (2021 modernisiert)</li>
                      <li>Vier Module: C-C, C-P, P-P, P-C (Controller/Processor)</li>
                      <li>Muss mit TIA (Transfer Impact Assessment) kombiniert werden</li>
                    </ul>
                    <p><strong>China SCCs (Personal Information Cross-Border Provision Contracts):</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Vertragliche Garantien für Datentransfer aus China ins Ausland (inkl. EU)</li>
                      <li>Erlassen vom CAC (Cyberspace Administration of China, 2023)</li>
                      <li>Keine Module – ein einheitlicher Vertrag</li>
                      <li>Muss mit Security Assessment kombiniert werden (wenn >1 Mio. Personen)</li>
                    </ul>
                    <p><strong>Wichtige Unterschiede:</strong></p>
                    <table className="w-full border-collapse text-sm mt-4">
                      <thead>
                        <tr className="bg-slate-100">
                          <th className="border border-slate-300 p-2 text-left">Aspekt</th>
                          <th className="border border-slate-300 p-2 text-left">EU SCCs</th>
                          <th className="border border-slate-300 p-2 text-left">China SCCs</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-slate-300 p-2">Fokus</td>
                          <td className="border border-slate-300 p-2">Schutz EU-Bürger</td>
                          <td className="border border-slate-300 p-2">Schutz chinesischer Bürger</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 p-2">Datentransfer-Richtung</td>
                          <td className="border border-slate-300 p-2">EU → Drittland</td>
                          <td className="border border-slate-300 p-2">China → Ausland</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 p-2">Filing Requirement</td>
                          <td className="border border-slate-300 p-2">Nein</td>
                          <td className="border border-slate-300 p-2">Ja (bei CAC innerhalb 10 Tagen)</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="mt-4"><strong>Für bidirektionales Business:</strong> Sie benötigen <u>beide</u> SCC-Sets. Einen für EU → China, einen für China → EU.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Wie lange dauert Dual Compliance (PIPL + GDPR)?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Mit Marsstein: 7-14 Tage.</strong></p>
                    <p><strong>Unser Prozess:</strong></p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Tag 1-2: Gap-Analyse</strong> – Wo sind Sie PIPL-konform? Wo GDPR-konform? Wo Lücken?</li>
                      <li><strong>Tag 3-5: Dokumenten-Erstellung</strong>
                        <ul className="list-disc pl-6 mt-2">
                          <li>EU-Vertreter-Ernennung (GDPR)</li>
                          <li>China-Vertreter-Koordination (falls benötigt)</li>
                          <li>Dual Privacy Policies (Chinesisch für China, Deutsch/Englisch für EU)</li>
                          <li>EU SCCs für EU → China</li>
                          <li>China SCCs für China → EU</li>
                        </ul>
                      </li>
                      <li><strong>Tag 6-8: TIA + Security Assessment</strong>
                        <ul className="list-disc pl-6 mt-2">
                          <li>Transfer Impact Assessment für State Access Risk (GDPR)</li>
                          <li>Security Assessment (wenn >1 Mio. Personen) (PIPL)</li>
                        </ul>
                      </li>
                      <li><strong>Tag 9-10: CAC Filing</strong> – China SCCs bei CAC einreichen (innerhalb 10 Tagen nach Vertragsschluss)</li>
                      <li><strong>Tag 11-14: Implementation & Training</strong> – Integration in Ihre Systeme, Schulung Ihres Teams</li>
                    </ol>
                    <p><strong>Ohne Marsstein: 6-12 Monate.</strong></p>
                    <p>Traditionelle Anwälte benötigen Monate für:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Manuelle Erstellung von zwei SCCs-Sets</li>
                      <li>Abstimmung zwischen China-Rechtsanwalt und EU-Rechtsanwalt</li>
                      <li>TIA + Security Assessment (jeweils €10.000-€30.000)</li>
                      <li>CAC Filing-Prozess (komplex ohne lokale Expertise)</li>
                    </ul>
                    <p><strong>Kosten-Vergleich:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Traditionell: €40.000-€80.000</li>
                      <li>Marsstein: €9.999 (einmalig) oder €19.999/Jahr (inkl. laufender Updates)</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Was kostet PIPL + GDPR Dual Compliance?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Marsstein Preise für Dual Compliance:</strong></p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li><strong>Starter-Paket (kleine Unternehmen, <100 Kunden):</strong> €4.999 einmalig
                        <ul className="list-disc pl-6 mt-2">
                          <li>EU-Vertreter (12 Monate)</li>
                          <li>Dual Privacy Policies (Chinesisch + Deutsch/Englisch)</li>
                          <li>EU SCCs (EU → China)</li>
                          <li>China SCCs (China → EU)</li>
                          <li>Basis-TIA</li>
                        </ul>
                      </li>
                      <li><strong>Professional-Paket (mittlere Unternehmen, 100-1.000 Kunden):</strong> €9.999 einmalig + €4.999/Jahr
                        <ul className="list-disc pl-6 mt-2">
                          <li>Alles aus Starter</li>
                          <li>Detaillierte TIA (Transfer Impact Assessment)</li>
                          <li>Security Assessment (PIPL)</li>
                          <li>CAC Filing-Unterstützung</li>
                          <li>China-Vertreter-Koordination</li>
                          <li>Quartalsweise Compliance-Reviews</li>
                        </ul>
                      </li>
                      <li><strong>Enterprise-Paket (große Unternehmen, 1.000+ Kunden):</strong> Individuelle Preisgestaltung
                        <ul className="list-disc pl-6 mt-2">
                          <li>Alles aus Professional</li>
                          <li>Dedicated Account Manager (Chinesisch/Deutsch/Englisch)</li>
                          <li>Separate Server-Infrastruktur-Beratung</li>
                          <li>On-Site-Training in China und/oder EU</li>
                          <li>Incident Response bei Datenpannen</li>
                        </ul>
                      </li>
                    </ul>
                    <p><strong>Vergleich: Traditionelle Anbieter</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>EU-Vertreter: €8.000-€15.000/Jahr</li>
                      <li>China-Rechtsanwalt für PIPL: €15.000-€30.000</li>
                      <li>EU-Rechtsanwalt für GDPR: €10.000-€25.000</li>
                      <li>TIA + Security Assessment: €20.000-€50.000</li>
                      <li>CAC Filing-Service: €5.000-€10.000</li>
                      <li><strong>Gesamt: €58.000-€130.000</strong></li>
                    </ul>
                    <p><strong>Marsstein Vorteil:</strong> Automatisierung + Dual-Expertise (China + EU) senkt Kosten um 70-90%.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        <section id="contact-form" className="py-16 px-6 lg:px-8 bg-white">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Kostenlose PIPL + GDPR Dual-Compliance-Prüfung
              </h2>
              <p className="text-lg text-slate-600">
                Kontaktieren Sie uns für eine unverbindliche Analyse Ihrer Dual-Compliance-Situation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-slate-200">
                <CardContent className="p-8">
                  {submitStatus === "success" ? (
                    <div className="text-center py-8">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mx-auto mb-4">
                        <CheckCircle2 className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                        谢谢！ Vielen Dank für Ihre Anfrage!
                      </h3>
                      <p className="text-slate-600">
                        Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="companyName">公司名称 / Firmenname *</Label>
                          <Input
                            id="companyName"
                            value={formData.companyName}
                            onChange={(e) =>
                              setFormData({ ...formData, companyName: e.target.value })
                            }
                            required
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="contactPerson">联系人 / Ansprechpartner *</Label>
                          <Input
                            id="contactPerson"
                            value={formData.contactPerson}
                            onChange={(e) =>
                              setFormData({ ...formData, contactPerson: e.target.value })
                            }
                            required
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="email">电子邮件 / E-Mail *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({ ...formData, email: e.target.value })
                            }
                            required
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="phone">电话 / Telefon</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({ ...formData, phone: e.target.value })
                            }
                            className="mt-2"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="businessModel">业务模式 / Geschäftsmodell:</Label>
                          <Select
                            value={formData.businessModel}
                            onValueChange={(value) =>
                              setFormData({ ...formData, businessModel: value })
                            }
                          >
                            <SelectTrigger className="mt-2" onOpenAutoFocus={(e) => e.preventDefault()}>
                              <SelectValue placeholder="Bitte wählen / 请选择" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="ecommerce">E-Commerce (China → EU)</SelectItem>
                              <SelectItem value="saas">SaaS/Software (bidirektional)</SelectItem>
                              <SelectItem value="b2b">B2B Manufacturing</SelectItem>
                              <SelectItem value="fintech">FinTech/Payment</SelectItem>
                              <SelectItem value="other">Sonstiges</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="dataVolume">数据量 / Datenvolumen:</Label>
                          <Select
                            value={formData.dataVolume}
                            onValueChange={(value) =>
                              setFormData({ ...formData, dataVolume: value })
                            }
                          >
                            <SelectTrigger className="mt-2" onOpenAutoFocus={(e) => e.preventDefault()}>
                              <SelectValue placeholder="Bitte wählen / 请选择" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="small"><100.000 Datensätze</SelectItem>
                              <SelectItem value="medium">100.000-1 Mio. Datensätze</SelectItem>
                              <SelectItem value="large">1 Mio.-10 Mio. Datensätze</SelectItem>
                              <SelectItem value="xlarge">>10 Mio. Datensätze (CIIO-relevant)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">您的信息 / Ihre Nachricht</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          rows={5}
                          className="mt-2"
                          placeholder="描述您的双重合规挑战... / Beschreiben Sie Ihre Dual-Compliance-Herausforderungen..."
                        />
                      </div>

                      {submitStatus === "error" && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-600 text-sm">
                            Es gab einen Fehler beim Absenden. Bitte versuchen Sie es erneut.
                          </p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#e24e1b] text-white hover:bg-[#c93e0f]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "发送中... / Wird gesendet..." : "免费咨询 / Kostenlose Prüfung anfragen"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <RelatedArticles articles={getRelatedArticles('pipl-gdpr')} />

        <Footer />
      </div>
    </>
  );
}
