import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { getRelatedArticles } from "@/data/chinaArticles";
import {
  Factory,
  Shield,
  Users,
  AlertTriangle,
  CheckCircle2,
  Euro,
  Globe,
  FileText,
  ArrowRight,
  Building2,
  Lock,
  ClipboardCheck,
  Target,
  PackageCheck,
  TrendingUp,
  Mail,
  Briefcase,
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

export default function DsgvoB2BHerstellerChina() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    platform: "",
    customerCount: "",
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
          source: "B2B Manufacturers DSGVO Landing Page",
          userGroup: "B2B Hersteller DSGVO Leads",
          companyName: formData.companyName,
          phone: formData.phone,
          platform: formData.platform,
          customerCount: formData.customerCount,
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
          platform: "",
          customerCount: "",
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
        <title>DSGVO für B2B-Hersteller aus China | Großhandelskunden in Europa</title>
        <meta
          name="description"
          content="DSGVO-Compliance für chinesische B2B-Hersteller mit europäischen Großhandelskunden. Alibaba, Made-in-China, Global Sources. Auch B2B-Daten unterliegen der DSGVO. Rechtssicher in 48 Stunden."
        />
        <meta
          name="keywords"
          content="B2B DSGVO China, Alibaba GDPR, Made-in-China Datenschutz, B2B Großhandel EU, chinesische Hersteller DSGVO, Wholesale Compliance, B2B Kundendaten, Lieferanten Datenschutz"
        />
        <link rel="canonical" href="https://marsstein.com/dsgvo-b2b-hersteller-china" />
        <meta property="og:title" content="DSGVO für B2B-Hersteller aus China | Wholesale Compliance" />
        <meta
          property="og:description"
          content="Auch B2B-Daten unterliegen der DSGVO. Alibaba, Made-in-China, Global Sources – EU-Vertreter, AVVs, Privacy Policies in 48 Stunden."
        />
        <meta property="og:url" content="https://marsstein.com/dsgvo-b2b-hersteller-china" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DSGVO für B2B-Hersteller aus China" />
        <meta
          name="twitter:description"
          content="B2B-Daten = DSGVO-pflichtig. Alibaba-Seller, Großhändler – rechtssichere EU-Expansion in 48 Stunden."
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
                { label: 'B2B Hersteller' }
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
              B2B Wholesale Compliance
            </Badge>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              DSGVO-Compliance für B2B-Hersteller aus China
            </h1>

            <p className="mb-4 text-xl leading-8 text-slate-300">
              Alibaba, Made-in-China, Global Sources: Auch B2B-Kundendaten unterliegen der DSGVO. EU-Ansprechpartner, Bestellhistorie, Vertragsdetails = personenbezogene Daten.
            </p>

            <p className="mb-12 text-lg leading-8 text-slate-400">
              Art. 27 EU-Vertreter, B2B Privacy Policies, AVVs für europäische Großhandelskunden – rechtssichere B2B-Compliance in 48 Stunden.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#e24e1b] text-white hover:bg-[#c93e0f] text-lg px-8 py-6"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Kostenlose B2B-Compliance-Prüfung
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6"
                onClick={() => document.getElementById("requirements")?.scrollIntoView({ behavior: "smooth" })}
              >
                B2B-DSGVO-Anforderungen prüfen
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
                Der chinesische B2B-Markt für Europa
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                China ist "die Fabrik der Welt". Millionen europäische B2B-Käufer beziehen Waren von chinesischen Herstellern über Alibaba, Made-in-China, Global Sources. Aber: <strong>B2B-Daten unterliegen der DSGVO</strong> – ein oft übersehenes Risiko.
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
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">26 Mio.</div>
                  <p className="text-slate-300">Aktive Lieferanten auf Alibaba.com</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">200+ Mio.</div>
                  <p className="text-slate-300">Registrierte B2B-Käufer weltweit (davon 40+ Mio. aus EU)</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">$15 Mrd.</div>
                  <p className="text-slate-300">Jährliches B2B-Handelsvolumen China → EU (2023)</p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors">
                  <CardContent className="p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-orange-600 mb-6">
                      <Factory className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      Alibaba.com
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>26+ Millionen Lieferanten weltweit (Mehrheit China)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>40+ Millionen B2B-Käufer aus EU</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Inquiry-System speichert Kundendaten (Name, E-Mail, Firma)</span>
                      </li>
                    </ul>
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
                  <CardContent className="p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 mb-6">
                      <Globe className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      Made-in-China
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>15+ Millionen Produkte von chinesischen Herstellern</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Fokus auf verarbeitendes Gewerbe (Maschinen, Elektronik)</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>RFQ-System (Request for Quotation) sammelt Käuferdaten</span>
                      </li>
                    </ul>
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
                  <CardContent className="p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 mb-6">
                      <PackageCheck className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      Global Sources
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Seit 1971, fokussiert auf geprüfte Lieferanten</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>1,5+ Millionen internationale B2B-Käufer</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Offline-Messen + Online-Sourcing kombiniert</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="requirements" className="py-16 px-6 lg:px-8 bg-slate-50">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Der Irrtum: "B2B ist DSGVO-frei"
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                <strong>90% der chinesischen B2B-Hersteller glauben fälschlicherweise, dass die DSGVO nur für B2C gilt.</strong> Das ist falsch – und kann teuer werden.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                        <AlertTriangle className="h-6 w-6 text-red-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        Warum auch B2B-Daten personenbezogen sind
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        Die DSGVO schützt <strong>alle personenbezogenen Daten</strong> – nicht nur Verbraucherdaten. Art. 4 Nr. 1 DSGVO definiert personenbezogene Daten als "Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen."
                      </p>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        <strong>Im B2B-Kontext sind das z.B.:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                        <li><strong>Name des Ansprechpartners:</strong> "Max Müller, Einkaufsleiter bei XYZ GmbH"</li>
                        <li><strong>E-Mail-Adresse:</strong> max.mueller@xyz-gmbh.de</li>
                        <li><strong>Telefonnummer:</strong> +49 30 12345678</li>
                        <li><strong>Bestellhistorie:</strong> "Max Müller hat am 15.01.2025 10.000 Einheiten bestellt"</li>
                        <li><strong>Zahlungsinformationen:</strong> Rechnungsadresse, Bankverbindung (falls direkt von Person)</li>
                        <li><strong>Kommunikation:</strong> E-Mails, Alibaba-Nachrichten, WeChat-Chats mit dem Ansprechpartner</li>
                      </ul>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Resultat:</strong> Auch wenn Sie "nur B2B" machen, verarbeiten Sie personenbezogene Daten Ihrer europäischen Geschäftskunden – und müssen die DSGVO einhalten.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Art. 27 EU-Vertreter
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Als chinesischer Hersteller mit EU-B2B-Kunden benötigen Sie einen offiziellen EU-Vertreter nach Art. 27 DSGVO. Dieser ist Ansprechpartner für Datenschutzbehörden und muss in Ihrer Privacy Policy genannt werden.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Gesetzliche Pflicht
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      B2B Privacy Policy
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Ihre Website, Alibaba-Profil oder Made-in-China-Shop braucht eine DSGVO-konforme Datenschutzerklärung. Muss erklären: Welche B2B-Kundendaten werden erfasst? Wie lange gespeichert? Wer hat Zugriff? Wo ist der EU-Vertreter?
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Auf Deutsch, Englisch, Französisch
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Datentransfer China ↔ EU
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      B2B-Kundendaten (E-Mails, Bestellungen) werden von EU nach China übertragen. Kein Angemessenheitsbeschluss für China → Sie benötigen SCCs (Standard Contractual Clauses) und eine TIA (Transfer Impact Assessment).
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Pflicht bei China-Transfers
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
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
                Typische B2B-Szenarien: Wo die DSGVO zuschlägt
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Viele chinesische Hersteller verstoßen unwissentlich gegen die DSGVO in alltäglichen B2B-Prozessen.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                          <Mail className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                          Szenario 1: Alibaba-Inquiries
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Situation:</strong> Ein deutscher Einkäufer sendet eine Inquiry über Alibaba: "Hallo, ich suche 10.000 Einheiten Widget. Können Sie liefern? Bitte kontaktieren Sie mich: max.mueller@xyz-gmbh.de, +49 30 12345678."
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Was Sie tun:</strong> Sie speichern die Inquiry in Ihrem CRM-System (oder Excel-Tabelle), antworten per E-Mail, und behalten die Kontaktdaten für zukünftige Angebote.
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>DSGVO-Problem:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-slate-600">
                        <li>Sie haben Name, E-Mail, Telefon ohne <u>explizite Einwilligung</u> gespeichert</li>
                        <li>Keine Privacy Policy auf Ihrem Alibaba-Profil</li>
                        <li>Daten werden nach China übertragen ohne SCCs</li>
                        <li>Kein EU-Vertreter in Ihrer Signatur genannt</li>
                      </ul>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Konsequenz:</strong> Der Einkäufer kann bei der deutschen Datenschutzbehörde Beschwerde einreichen → Bußgeld bis €20 Mio.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                          <Briefcase className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                          Szenario 2: Vertrags-Verhandlungen
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Situation:</strong> Sie verhandeln einen Liefervertrag mit einem französischen Großhändler. Über 6 Monate tauschen Sie E-Mails, WeChat-Nachrichten, PDF-Dokumente (mit Preisen, Mengen, Lieferbedingungen).
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Was Sie tun:</strong> Alle E-Mails und Dokumente werden auf Ihrem chinesischen Server gespeichert. WeChat-Chats laufen über Tencent-Server in China. Nach Vertragsabschluss behalten Sie alle Unterlagen für zukünftige Referenz.
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>DSGVO-Problem:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-slate-600">
                        <li>Vertragsdetails = personenbezogene Daten (Name des Unterzeichners, Unterschrift)</li>
                        <li>Keine Rechtsgrundlage für unbegrenzte Speicherung (DSGVO verlangt Speicherbegrenzung)</li>
                        <li>WeChat-Daten in China ohne TIA oder SCCs</li>
                        <li>Französischer Kunde fragt: "Löscht meine Daten nach 5 Jahren" → Sie ignorieren es</li>
                      </ul>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Konsequenz:</strong> Französische CNIL (Datenschutzbehörde) verhängt Bußgeld.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                          <Target className="h-6 w-6 text-green-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                          Szenario 3: Newsletter & Marketing
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Situation:</strong> Sie haben 2.000 EU-B2B-Kunden in Ihrer E-Mail-Liste. Jeden Monat senden Sie Newsletter über neue Produkte, Messe-Einladungen, Rabatt-Aktionen.
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Was Sie tun:</strong> Sie nutzen einen chinesischen E-Mail-Marketing-Service oder Alibaba's eigene Newsletter-Funktion. Keine Opt-in-Bestätigung, keine Unsubscribe-Funktion (oder schwer zu finden).
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>DSGVO-Problem:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-slate-600">
                        <li>Marketing-E-Mails benötigen <u>explizite Einwilligung</u> (Art. 6 Abs. 1 lit. a DSGVO)</li>
                        <li>"Ich habe vor 5 Jahren eine Anfrage gestellt" ≠ Einwilligung für Newsletter</li>
                        <li>Unsubscribe muss "mit einem Klick" möglich sein (nicht "E-Mail an uns senden")</li>
                        <li>E-Mail-Service in China = Datentransfer ohne SCCs</li>
                      </ul>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Konsequenz:</strong> Mehrere Kunden beschweren sich → Sammelklage oder Behörden-Investigation.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                          <Users className="h-6 w-6 text-orange-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                          Szenario 4: Messe-Teilnahme
                        </h3>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Situation:</strong> Sie nehmen an einer Fachmesse in Deutschland teil (z.B. Hannover Messe). 150 EU-Besucher hinterlassen ihre Visitenkarten an Ihrem Stand.
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Was Sie tun:</strong> Sie scannen alle Visitenkarten, speichern die Kontakte in Ihrem CRM, und senden 2 Wochen später Follow-up-E-Mails: "Vielen Dank für Ihren Besuch. Hier unser Produktkatalog."
                      </p>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>DSGVO-Problem:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-slate-600">
                        <li>Visitenkarte hinterlassen ≠ Einwilligung zur E-Mail-Kontaktaufnahme</li>
                        <li>Sie müssen am Messe-Stand eine Privacy Policy aushängen</li>
                        <li>Kontakte dürfen nicht automatisch in Newsletter-Liste aufgenommen werden</li>
                        <li>Nach 1 Jahr ohne Geschäftsbeziehung: Daten müssen gelöscht werden</li>
                      </ul>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Konsequenz:</strong> Ein Besucher beschwert sich beim Messeveranstalter → Sie werden von zukünftigen Messen ausgeschlossen.
                      </p>
                    </div>
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
                Risiken bei fehlender B2B-DSGVO-Compliance
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-red-200 hover:border-red-300 transition-colors bg-gradient-to-br from-red-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                          <Euro className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          Bußgelder bis €20 Mio. oder 4% Jahresumsatz
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Fehlende EU-Vertreter, keine Privacy Policy, unrechtmäßige Datenverarbeitung – die DSGVO gilt auch für B2B. Bußgelder bis zu €20 Millionen oder 4% des weltweiten Jahresumsatzes. Für große Alibaba-Seller im Milliardenbereich.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-red-200 hover:border-red-300 transition-colors bg-gradient-to-br from-red-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                          <Users className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          Verlust von EU-Großhandelskunden
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Professionelle EU-Einkäufer prüfen zunehmend DSGVO-Compliance ihrer Lieferanten. Fehlende Privacy Policies oder kein EU-Vertreter = Ausschluss aus Tender-Prozessen. Besonders bei öffentlichen Ausschreibungen und Großkonzernen.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-red-200 hover:border-red-300 transition-colors bg-gradient-to-br from-red-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                          <Factory className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          Alibaba/Made-in-China können Ihr Konto sperren
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Alibaba steht selbst unter DSGVO-Druck. Wenn wiederholt Beschwerden gegen Ihr Seller-Konto eingehen (z.B. unerlaubte Marketing-E-Mails), kann Alibaba Ihr Konto suspendieren oder permanent sperren – um eigene Haftung zu vermeiden.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-red-200 hover:border-red-300 transition-colors bg-gradient-to-br from-red-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                          <AlertTriangle className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          Rechtliche Auseinandersetzungen
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          EU-Kunden können Schadensersatz fordern (Art. 82 DSGVO) bei DSGVO-Verstößen. Beispiel: Wenn Sie Kundendaten nach China übertragen ohne SCCs, kann der Kunde €5.000+ Schmerzensgeld fordern – pro Person. Bei 100 Kunden = €500.000.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
                Unsere Lösung: Automatisierte B2B-DSGVO-Compliance
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Wir bieten die einzige End-to-End-Lösung speziell für chinesische B2B-Hersteller mit EU-Großhandelskunden.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Art. 27 EU-Vertreter
                    </h3>
                    <p className="text-sm text-slate-600">
                      Offizieller EU-Vertreter in Deutschland. Nennung auf Alibaba-Profil, Website, E-Mail-Signatur. Alle Behördenanfragen werden beantwortet.
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
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      B2B Privacy Policies
                    </h3>
                    <p className="text-sm text-slate-600">
                      DSGVO-konforme Datenschutzerklärungen für B2B-Kontext. Spezifisch für Alibaba, Made-in-China, Global Sources. Mehrsprachig.
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
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      SCCs & TIA für China-Transfers
                    </h3>
                    <p className="text-sm text-slate-600">
                      Standard Contractual Clauses und Transfer Impact Assessments für B2B-Datentransfers von EU nach China.
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
                      <ClipboardCheck className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Prozess-Dokumentation
                    </h3>
                    <p className="text-sm text-slate-600">
                      Vorlagen für Inquiry-Management, Newsletter-Einwilligungen, Löschanfragen, Auskunftsrechte. Audit-ready.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 lg:px-8 bg-slate-50">
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
                  Gilt die DSGVO wirklich auch für B2B-Daten? Ich dachte, das ist nur für Verbraucher.
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Ja, die DSGVO gilt auch für B2B-Daten – das ist einer der häufigsten Irrtümer.</strong></p>
                    <p>Art. 2 Abs. 1 DSGVO sagt: Die Verordnung gilt für die "Verarbeitung personenbezogener Daten". Nirgends steht "nur für Verbraucher".</p>
                    <p><strong>Art. 4 Nr. 1 DSGVO definiert personenbezogene Daten als:</strong></p>
                    <p>"Alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen."</p>
                    <p><strong>Im B2B-Kontext sind das:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Name des Ansprechpartners (z.B. "Max Müller, Einkaufsleiter")</li>
                      <li>E-Mail-Adresse (max.mueller@firma.de)</li>
                      <li>Telefonnummer</li>
                      <li>Geschäftskommunikation (E-Mails, Verträge)</li>
                    </ul>
                    <p><strong>Wichtig:</strong> "Max Müller" ist eine <u>natürliche Person</u> – auch wenn er im Namen einer Firma handelt. Die DSGVO schützt <u>Menschen</u>, nicht Unternehmen.</p>
                    <p><strong>Ausnahme:</strong> Wenn Sie nur generische Kontakte haben (z.B. "info@firma.de" ohne Namen), könnte argumentiert werden, dass das nicht personenbezogen ist. Aber sobald ein Name dabei ist → DSGVO gilt.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Muss ich für jede Alibaba-Inquiry um Einwilligung bitten?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Nicht unbedingt – aber Sie müssen eine Privacy Policy haben und die Inquiry-Speicherung rechtfertigen.</strong></p>
                    <p><strong>Rechtsgrundlagen für Alibaba-Inquiries:</strong></p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Vertragsanbahnung (Art. 6 Abs. 1 lit. b DSGVO):</strong> Wenn der Einkäufer eine Inquiry sendet mit dem Ziel, ein Angebot zu erhalten, ist das "Vertragsanbahnung". Sie dürfen die Daten speichern, um zu antworten und ein Angebot zu erstellen.</li>
                      <li><strong>Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO):</strong> Sie haben ein berechtigtes Interesse, Inquiries zu beantworten und potenzielle Kunden zu kontaktieren.</li>
                    </ol>
                    <p><strong>Aber:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Sie müssen eine Privacy Policy auf Ihrem Alibaba-Profil haben, die erklärt: "Wir verarbeiten Ihre Inquiry-Daten zur Angebotserstellung"</li>
                      <li>Daten dürfen nur so lange gespeichert werden, wie nötig (z.B. "3 Monate nach letzter Kommunikation")</li>
                      <li>Wenn kein Geschäft zustande kommt, müssen Daten gelöscht werden (außer Aufbewahrungspflichten)</li>
                    </ul>
                    <p><strong>Wann brauchen Sie Einwilligung?</strong></p>
                    <p>Wenn Sie die Inquiry-Daten für <strong>Marketing</strong> nutzen wollen (z.B. Newsletter, neue Produktankündigungen), benötigen Sie explizite Einwilligung. "Ich habe eine Inquiry gesendet" ≠ Einwilligung für Marketing.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Was passiert, wenn ein EU-Kunde sein "Recht auf Löschung" (Art. 17 DSGVO) geltend macht?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Sie müssen die Daten löschen – mit einigen Ausnahmen.</strong></p>
                    <p><strong>Art. 17 DSGVO ("Recht auf Vergessenwerden") sagt:</strong></p>
                    <p>Betroffene Personen haben das Recht, ihre Daten löschen zu lassen, wenn:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Die Daten nicht mehr notwendig sind</li>
                      <li>Die Einwilligung widerrufen wurde</li>
                      <li>Die Daten unrechtmäßig verarbeitet wurden</li>
                    </ul>
                    <p><strong>Praktisches Beispiel:</strong></p>
                    <p>Ein deutscher Einkäufer sendet Ihnen 2020 eine Inquiry. Kein Geschäft kam zustande. 2025 fordert er: "Löscht meine Daten." → Sie müssen löschen (außer Ausnahmen).</p>
                    <p><strong>Ausnahmen (wann Sie NICHT löschen müssen):</strong></p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Vertragserfüllung:</strong> Wenn der Kunde bestellt hat und der Vertrag noch läuft (z.B. Garantie), dürfen Sie Daten behalten.</li>
                      <li><strong>Rechtliche Aufbewahrungspflichten:</strong> Steuerrecht, Handelsrecht (z.B. 10 Jahre für Rechnungen).</li>
                      <li><strong>Rechtliche Ansprüche:</strong> Wenn Sie die Daten brauchen, um rechtliche Ansprüche zu verteidigen (z.B. offene Rechnung).</li>
                    </ol>
                    <p><strong>Best Practice:</strong> Antworten Sie innerhalb 30 Tagen. Wenn Sie nicht löschen können (Ausnahme), erklären Sie warum.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Wie kann ich B2B-Newsletter DSGVO-konform versenden?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>B2B-Newsletter benötigen explizite Einwilligung (Opt-in) – "Soft Opt-in" ist nur in engen Grenzen erlaubt.</strong></p>
                    <p><strong>Drei Wege für B2B-Newsletter:</strong></p>
                    <ol className="list-decimal pl-6 space-y-3">
                      <li><strong>Double-Opt-In (sicherste Methode):</strong>
                        <ul className="list-disc pl-6 mt-2">
                          <li>Kunde trägt sich in Newsletter-Formular ein</li>
                          <li>Sie senden Bestätigungs-E-Mail: "Klicken Sie hier, um Newsletter zu abonnieren"</li>
                          <li>Erst nach Klick: Newsletter-Versand erlaubt</li>
                          <li>Dokumentation: Wann, wo, welche IP-Adresse hat sich eingetragen</li>
                        </ul>
                      </li>
                      <li><strong>Soft Opt-in (nur bei bestehenden Kunden):</strong>
                        <ul className="list-disc pl-6 mt-2">
                          <li>Wenn der Kunde bereits bei Ihnen gekauft hat</li>
                          <li>Newsletter muss sich auf <u>ähnliche Produkte</u> beziehen (nicht komplett andere Produktkategorie)</li>
                          <li>Kunde muss bei Kauf informiert werden: "Sie erhalten unseren Newsletter, können sich jederzeit abmelden"</li>
                          <li>Unsubscribe-Link muss in jeder E-Mail sein</li>
                        </ul>
                      </li>
                      <li><strong>Berechtigtes Interesse (sehr restriktiv):</strong>
                        <ul className="list-disc pl-6 mt-2">
                          <li>Nur für "bestehende Geschäftsbeziehung" mit engem Produktbezug</li>
                          <li>Nicht für Cold-Emailing an neue Kontakte</li>
                          <li>Risiko: Kunde beschwert sich → Sie müssen "berechtigtes Interesse" beweisen</li>
                        </ul>
                      </li>
                    </ol>
                    <p><strong>Was Sie NICHT tun dürfen:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Alibaba-Inquiry-Kontakte automatisch in Newsletter-Liste aufnehmen</li>
                      <li>Visitenkarten von Messen ohne Einwilligung für Newsletter nutzen</li>
                      <li>Newsletter ohne Unsubscribe-Link</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Wie lange dauert es, B2B-DSGVO-konform zu werden?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Mit Marsstein: 48 Stunden bis 7 Tage.</strong></p>
                    <p><strong>Unser Prozess:</strong></p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Tag 1: Analyse</strong> – Welche B2B-Plattformen nutzen Sie? (Alibaba, Made-in-China, eigene Website?) Wie viele EU-Kunden haben Sie?</li>
                      <li><strong>Tag 2-3: Dokumenten-Erstellung</strong> – EU-Vertreter-Ernennung, B2B Privacy Policies (mehrsprachig), Newsletter-Einwilligungsformulare</li>
                      <li><strong>Tag 4-5: TIA & SCCs</strong> – Transfer Impact Assessment für China-EU Datentransfers, Standard Contractual Clauses</li>
                      <li><strong>Tag 6-7: Integration & Training</strong> – Implementation auf Alibaba-Profil/Website, Schulung Ihres Sales-Teams für DSGVO-Anfragen</li>
                    </ol>
                    <p><strong>Ohne Marsstein: 3-6 Monate (oder länger).</strong></p>
                    <p>Traditionelle Anwälte müssen B2B-spezifische Verträge manuell erstellen, verstehen oft die Alibaba/Made-in-China-Plattformen nicht, und TIAs kosten €5.000-€15.000.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Was kostet B2B-DSGVO-Compliance für chinesische Hersteller?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Marsstein Preise für B2B-Hersteller:</strong></p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li><strong>Starter-Paket (kleine Hersteller, <50 EU-Kunden):</strong> €999 einmalig
                        <ul className="list-disc pl-6 mt-2">
                          <li>Art. 27 EU-Vertreter (12 Monate)</li>
                          <li>B2B Privacy Policy (Deutsch/Englisch)</li>
                          <li>Alibaba-Profil-Text mit EU-Vertreter-Nennung</li>
                          <li>Newsletter-Einwilligungsvorlagen</li>
                        </ul>
                      </li>
                      <li><strong>Professional-Paket (mittlere Hersteller, 50-500 EU-Kunden):</strong> €2.499/Jahr
                        <ul className="list-disc pl-6 mt-2">
                          <li>Alles aus Starter</li>
                          <li>TIA (Transfer Impact Assessment) für China-Transfers</li>
                          <li>SCCs (Standard Contractual Clauses)</li>
                          <li>Prozess-Dokumentation für Auskunfts-/Löschanfragen</li>
                          <li>Mehrsprachige Privacy Policies (Deutsch, Englisch, Französisch, Italienisch)</li>
                        </ul>
                      </li>
                      <li><strong>Enterprise-Paket (große Hersteller, 500+ EU-Kunden):</strong> Individuelle Preisgestaltung
                        <ul className="list-disc pl-6 mt-2">
                          <li>Alles aus Professional</li>
                          <li>Dedicated Account Manager</li>
                          <li>Quartalsweise DSGVO-Audits</li>
                          <li>Sales-Team-Schulungen (online/offline)</li>
                        </ul>
                      </li>
                    </ul>
                    <p><strong>Vergleich: Traditionelle Anbieter</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>EU-Vertreter: €8.000-€15.000/Jahr</li>
                      <li>Rechtsanwälte für Privacy Policies: €3.000-€10.000</li>
                      <li>TIA + SCCs: €5.000-€15.000</li>
                      <li><strong>Gesamt: €16.000-€40.000</strong></li>
                    </ul>
                    <p><strong>Marsstein Vorteil:</strong> Automatisierte Dokumenten-Generierung + B2B-Plattform-Expertise senkt Kosten um 70-90%.</p>
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
                Kostenlose B2B-DSGVO-Compliance-Prüfung
              </h2>
              <p className="text-lg text-slate-600">
                Kontaktieren Sie uns für eine unverbindliche Analyse Ihrer B2B-Situation mit EU-Großhandelskunden.
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
                          <Label htmlFor="platform">您使用的平台 / B2B-Plattform:</Label>
                          <Select
                            value={formData.platform}
                            onValueChange={(value) =>
                              setFormData({ ...formData, platform: value })
                            }
                          >
                            <SelectTrigger className="mt-2" onOpenAutoFocus={(e) => e.preventDefault()}>
                              <SelectValue placeholder="Bitte wählen / 请选择" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="alibaba">Alibaba.com</SelectItem>
                              <SelectItem value="made-in-china">Made-in-China.com</SelectItem>
                              <SelectItem value="global-sources">Global Sources</SelectItem>
                              <SelectItem value="own-website">Eigene Website</SelectItem>
                              <SelectItem value="multiple">Mehrere Plattformen</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="customerCount">欧盟客户数量 / EU-Kunden:</Label>
                          <Select
                            value={formData.customerCount}
                            onValueChange={(value) =>
                              setFormData({ ...formData, customerCount: value })
                            }
                          >
                            <SelectTrigger className="mt-2" onOpenAutoFocus={(e) => e.preventDefault()}>
                              <SelectValue placeholder="Bitte wählen / 请选择" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-50">0-50 Kunden</SelectItem>
                              <SelectItem value="50-200">50-200 Kunden</SelectItem>
                              <SelectItem value="200-500">200-500 Kunden</SelectItem>
                              <SelectItem value="500+">500+ Kunden</SelectItem>
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
                          placeholder="描述您的B2B业务和GDPR挑战... / Beschreiben Sie Ihre B2B-Situation..."
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

        <RelatedArticles articles={getRelatedArticles('b2b-hersteller')} />

        <Footer />
      </div>
    </>
  );
}
