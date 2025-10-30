import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { getRelatedArticles } from "@/data/chinaArticles";
import {
  CreditCard,
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
  Store,
  Smartphone,
  Briefcase,
  Scale,
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

export default function DsgvoWeChatAlipayChina() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    paymentProvider: "",
    monthlyTransactions: "",
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
          source: "WeChat Pay/Alipay DSGVO Landing Page",
          userGroup: "WeChat Pay/Alipay DSGVO Leads",
          companyName: formData.companyName,
          phone: formData.phone,
          paymentProvider: formData.paymentProvider,
          monthlyTransactions: formData.monthlyTransactions,
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
          paymentProvider: "",
          monthlyTransactions: "",
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
        <title>DSGVO-Compliance für WeChat Pay & Alipay | Chinesische Payment-Anbieter in Europa</title>
        <meta
          name="description"
          content="DSGVO-konforme Integration von WeChat Pay und Alipay für europäische Händler. 30+ Mio. chinesische Touristen, €26 Mrd. Ausgaben. PCI-DSS + GDPR Compliance für chinesische Payment Provider."
        />
        <meta
          name="keywords"
          content="WeChat Pay DSGVO, Alipay GDPR, chinesische Payment Provider, PCI-DSS Compliance, EU-Vertreter Payment, chinesische Touristen Europa, Zahlungsdienstleister China, Finanzdaten DSGVO, Payment Compliance"
        />
        <link rel="canonical" href="https://marsstein.com/dsgvo-wechat-alipay-china" />
        <meta property="og:title" content="DSGVO-Compliance für WeChat Pay & Alipay in Europa" />
        <meta
          property="og:description"
          content="PCI-DSS + GDPR Compliance für chinesische Payment Provider. 30+ Mio. chinesische Touristen, €26 Mrd. Ausgaben. Rechtssichere Integration in 48 Stunden."
        />
        <meta property="og:url" content="https://marsstein.com/dsgvo-wechat-alipay-china" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DSGVO-Compliance für WeChat Pay & Alipay" />
        <meta
          name="twitter:description"
          content="PCI-DSS + GDPR Compliance für chinesische Payment Provider. Rechtssichere Integration für europäische Händler."
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
                { label: 'WeChat & Alipay' }
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
              Payment Provider Compliance
            </Badge>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              DSGVO-Compliance für WeChat Pay & Alipay in Europa
            </h1>

            <p className="mb-4 text-xl leading-8 text-slate-300">
              PCI-DSS + GDPR-konforme Integration chinesischer Payment-Systeme. 30+ Millionen chinesische Touristen mit €26 Milliarden Kaufkraft.
            </p>

            <p className="mb-12 text-lg leading-8 text-slate-400">
              Art. 27 EU-Vertreter, Datenschutzvereinbarungen, Finanzdaten-Compliance – rechtssichere Payment-Integration in 48 Stunden für Händler und Payment Provider.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#e24e1b] text-white hover:bg-[#c93e0f] text-lg px-8 py-6"
                onClick={() => document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" })}
              >
                Kostenlose Compliance-Prüfung
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-slate-900 text-lg px-8 py-6"
                onClick={() => document.getElementById("requirements")?.scrollIntoView({ behavior: "smooth" })}
              >
                Payment-Anforderungen prüfen
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
                Der chinesische Zahlungsmarkt in Europa
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                WeChat Pay und Alipay dominieren den chinesischen Markt mit über 1,5 Milliarden Nutzern. In Europa sind sie unverzichtbar für Händler, die chinesische Touristen bedienen wollen.
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
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">30+ Mio.</div>
                  <p className="text-slate-300">Chinesische Touristen jährlich in Europa (vor COVID-19 Peak)</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">€26 Mrd.</div>
                  <p className="text-slate-300">Ausgaben durch chinesische Touristen weltweit (Sommer 2019)</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">110.000+</div>
                  <p className="text-slate-300">Akzeptanzstellen für Alipay in Europa (vor Pandemie)</p>
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
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors">
                  <CardContent className="p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600 mb-6">
                      <Smartphone className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      WeChat Pay
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>1+ Milliarde aktive Nutzer in China</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Integration über Worldline in der Schweiz</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>QR-Code basierte Zahlungen in Echtzeit</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Teil des WeChat-Ökosystems (Tencent)</span>
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
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors">
                  <CardContent className="p-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 mb-6">
                      <CreditCard className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      Alipay
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>1,3+ Milliarden aktive Nutzer weltweit</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Partnerschaften mit Adyen und Ingenico in Europa</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>110.000+ Akzeptanzstellen in 20 Ländern</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Teil der Alibaba-Gruppe (Ant Group)</span>
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
                DSGVO-Anforderungen für Payment Provider
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Die Verarbeitung von Finanzdaten unterliegt strengen Compliance-Anforderungen. WeChat Pay und Alipay müssen sowohl PCI-DSS als auch DSGVO erfüllen.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
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
                      WeChat Pay und Alipay als nicht-EU-Unternehmen benötigen einen offiziellen EU-Vertreter nach Art. 27 DSGVO. Dieser ist Ansprechpartner für Datenschutzbehörden und muss in Privacy Policies genannt werden.
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
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      PCI-DSS Compliance
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Payment Card Industry Data Security Standard (PCI-DSS) ist zusätzlich zur DSGVO erforderlich. Finanzdaten müssen verschlüsselt übertragen und gespeichert werden. PCI Level 1-4 Zertifizierung notwendig.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Payment Security Standard
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
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Auftragsverarbeitungsverträge (AVV)
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Europäische Händler, die WeChat Pay/Alipay nutzen, müssen AVVs mit Payment Service Providern (Adyen, Ingenico, Worldline) abschließen. Diese regeln Datenweitergabe und Verantwortlichkeiten.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Art. 28 DSGVO
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                        <AlertTriangle className="h-6 w-6 text-orange-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        Wer ist verantwortlich für die Daten? Die Verantwortlichkeitskette
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        Die DSGVO-Compliance bei WeChat Pay/Alipay-Zahlungen ist komplex, weil <strong>mehrere Parteien</strong> involviert sind:
                      </p>
                      <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-4">
                        <li><strong>Der Händler (Sie):</strong> Verantwortlicher für Kundendaten. Sie entscheiden, welche Zahlungsmethoden angeboten werden.</li>
                        <li><strong>Payment Service Provider (PSP):</strong> Adyen, Ingenico, Worldline – <strong>Auftragsverarbeiter</strong> des Händlers. Sie verarbeiten Zahlungen im Auftrag.</li>
                        <li><strong>WeChat Pay / Alipay:</strong> <strong>Auftragsverarbeiter des PSP</strong> (oder direkt des Händlers). Verarbeitet Transaktionsdaten.</li>
                        <li><strong>EU-Vertreter:</strong> Ansprechpartner für Datenschutzbehörden für WeChat Pay/Alipay in Europa.</li>
                      </ol>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Problem:</strong> Wenn WeChat Pay oder Alipay keinen EU-Vertreter haben oder AVVs fehlen, haften <strong>Sie als Händler</strong> für DSGVO-Verstöße – auch wenn der Fehler beim Payment Provider liegt.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
                Zwei Zielgruppen: Händler vs. Payment Provider
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Die DSGVO-Anforderungen unterscheiden sich je nachdem, ob Sie Händler oder Payment Provider sind.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-blue-200 hover:border-blue-400 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                          <Store className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                          Für Händler
                        </h3>
                        <p className="text-sm text-slate-600">
                          Hotels, Luxus-Boutiquen, Flughäfen, Touristenattraktionen
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                          <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2" />
                          Was Sie brauchen:
                        </h4>
                        <ul className="space-y-2 text-slate-600 pl-7">
                          <li>• Aktualisierte Privacy Policy (Nennung von WeChat Pay/Alipay)</li>
                          <li>• AVV mit Ihrem PSP (Adyen, Ingenico, Worldline)</li>
                          <li>• Datenschutz-Hinweise am Point of Sale</li>
                          <li>• Verzeichnis von Verarbeitungstätigkeiten (VVT)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                          <Target className="h-5 w-5 text-blue-500 mr-2" />
                          Typische Fehler:
                        </h4>
                        <ul className="space-y-2 text-slate-600 pl-7">
                          <li>• WeChat Pay/Alipay nicht in Privacy Policy erwähnt</li>
                          <li>• Kein AVV mit PSP unterschrieben</li>
                          <li>• Annahme: "Der PSP kümmert sich um alles"</li>
                        </ul>
                      </div>
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
                <Card className="h-full border-2 border-purple-200 hover:border-purple-400 transition-colors">
                  <CardContent className="p-8">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                          <Briefcase className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                          Für Payment Provider
                        </h3>
                        <p className="text-sm text-slate-600">
                          WeChat Pay, Alipay, PSPs (Adyen, Ingenico, etc.)
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                          <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2" />
                          Was Sie brauchen:
                        </h4>
                        <ul className="space-y-2 text-slate-600 pl-7">
                          <li>• Art. 27 EU-Vertreter (gesetzliche Pflicht)</li>
                          <li>• PCI-DSS Level 1 Zertifizierung</li>
                          <li>• Standard-AVV-Vorlagen für Händler</li>
                          <li>• DSGVO-konforme Server-Infrastruktur in EU</li>
                          <li>• Data Processing Agreement (DPA)</li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                          <Target className="h-5 w-5 text-purple-500 mr-2" />
                          Typische Fehler:
                        </h4>
                        <ul className="space-y-2 text-slate-600 pl-7">
                          <li>• Kein EU-Vertreter ernannt</li>
                          <li>• Transaktionsdaten werden nach China übertragen</li>
                          <li>• AVV-Vorlagen nicht DSGVO-konform</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-white">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Technische Integration: So funktioniert WeChat Pay/Alipay in Europa
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Verstehen Sie den technischen Zahlungsfluss und wo DSGVO-Compliance-Punkte liegen.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl mb-4">
                      1
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      QR-Code generieren
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      <strong>Händler-Seite:</strong> POS-System oder Payment-Terminal generiert QR-Code über PSP-API (Adyen, Ingenico, Worldline).
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      <strong>DSGVO-Punkt:</strong> QR-Code enthält: Händler-ID, Transaktions-ID, Betrag. Keine personenbezogenen Daten im QR selbst, aber Transaktions-ID wird in Datenbank gespeichert.
                    </p>
                    <p className="text-xs text-slate-500 italic">
                      API-Endpunkt: POST /v1/payments/qr/generate
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
                <Card className="h-full border-2 border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-600 font-bold text-xl mb-4">
                      2
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      Kunde scannt & autorisiert
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      <strong>Kunden-Seite:</strong> Chinesischer Tourist scannt QR mit WeChat/Alipay App, sieht Betrag, autorisiert mit Passwort/Fingerprint/FaceID.
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      <strong>DSGVO-Punkt:</strong> WeChat/Alipay sendet Anfrage an Server in China mit: User-ID, Transaktions-ID, Biometrische Daten (Face/Fingerprint Hash). <u>Datentransfer EU → China</u> beginnt hier.
                    </p>
                    <p className="text-xs text-slate-500 italic">
                      Rechtsgrundlage: Art. 6 Abs. 1 lit. b (Vertragserfüllung)
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
                <Card className="h-full border-2 border-slate-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 font-bold text-xl mb-4">
                      3
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">
                      Zahlung & Bestätigung
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      <strong>Backend:</strong> WeChat/Alipay-Server (China) prüft Guthaben, bucht ab, sendet Webhook an PSP (EU). PSP leitet Bestätigung an Händler-POS.
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed mb-3">
                      <strong>DSGVO-Punkt:</strong> Webhook enthält: Transaktions-ID, Status (success/failed), Timestamp. PSP speichert für Buchhaltung (gesetzliche Aufbewahrungspflicht: 10 Jahre Deutschland, 7 Jahre Frankreich).
                    </p>
                    <p className="text-xs text-slate-500 italic">
                      Webhook: POST /merchant/webhook/payment-status
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-slate-900 mb-4 flex items-center">
                    <Lock className="h-6 w-6 text-purple-600 mr-3" />
                    DSGVO-kritische Datenpunkte im Zahlungsfluss
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Im PSP-System gespeichert:</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>✓ Transaktions-ID (pseudonymisiert)</li>
                        <li>✓ Betrag & Währung</li>
                        <li>✓ Timestamp & Händler-ID</li>
                        <li>✓ IP-Adresse des POS-Terminals (nicht des Kunden!)</li>
                        <li>✓ Webhook-Logs (erfolgreiche/fehlgeschlagene Zustellungen)</li>
                      </ul>
                      <p className="text-xs text-slate-500 mt-3">
                        <strong>Speicherdauer:</strong> 10 Jahre (Buchhaltungspflicht Deutschland)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">In WeChat/Alipay-System (China):</h4>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li>✓ User-ID (WeChat OpenID / Alipay User ID)</li>
                        <li>✓ Biometrische Authentifizierungs-Hash</li>
                        <li>✓ Geolocation (GPS-Koordinaten des Scans)</li>
                        <li>✓ Device-Informationen (Smartphone-Modell, OS-Version)</li>
                        <li>✓ Transaktionshistorie (für Fraud Detection)</li>
                      </ul>
                      <p className="text-xs text-red-500 mt-3">
                        <strong>Problem:</strong> Speicherdauer unklar, vermutlich unbegrenzt
                      </p>
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <p className="text-sm text-slate-700 leading-relaxed">
                      <strong>Compliance-Anforderung:</strong> In Ihrer Privacy Policy müssen Sie offenlegen: "Bei Nutzung von WeChat Pay/Alipay werden Transaktionsdaten (User-ID, Geolocation, Device-Info) an Server in China übertragen. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung). Übertragungsmechanismus: Standard Contractual Clauses zwischen PSP und WeChat/Alipay."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
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
                Risiken bei fehlender DSGVO-Compliance
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
                          Fehlende AVVs, kein EU-Vertreter, oder unzureichende Privacy Policies können mit bis zu €20 Millionen oder 4% des weltweiten Jahresumsatzes bestraft werden. Für Payment Provider wie WeChat Pay/Alipay im Milliardenbereich.
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
                          <Scale className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          Haftung des Händlers
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Als Händler sind Sie "Verantwortlicher" im Sinne der DSGVO. Wenn Ihr PSP oder WeChat Pay/Alipay DSGVO-Verstöße begeht, haften <strong>Sie</strong> – es sei denn, Sie haben sorgfältig geprüft und AVVs abgeschlossen.
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
                          <Users className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          Verlust chinesischer Kunden
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Wenn WeChat Pay/Alipay aufgrund DSGVO-Problemen in Europa nicht mehr verfügbar sind, verlieren Händler Zugang zum lukrativsten Touristensegment. Chinesische Touristen geben durchschnittlich 3x mehr aus als andere Nationalitäten.
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
                          Reputationsschaden
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Datenschutz-Skandale bei Payment-Anbietern erhalten massive Medienaufmerksamkeit. Ein einziger DSGVO-Verstoß kann das Vertrauen von Millionen Kunden zerstören und jahrelang nachhallen.
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
                Unsere Lösung: Automatisierte Payment-Compliance
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Wir bieten DSGVO-Compliance für beide Zielgruppen: Händler und chinesische Payment Provider.
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
                      Offizieller EU-Vertreter in Deutschland für WeChat Pay, Alipay oder PSPs. Alle Anfragen von Datenschutzbehörden werden beantwortet.
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
                      AVV-Vorlagen
                    </h3>
                    <p className="text-sm text-slate-600">
                      DSGVO-konforme Muster-AVVs für Händler und PSPs. Anpassbar an Ihre spezifischen Zahlungs-Workflows.
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
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Privacy Policies
                    </h3>
                    <p className="text-sm text-slate-600">
                      Aktualisierte Datenschutzerklärungen mit korrekter Nennung von WeChat Pay/Alipay, PSPs und EU-Vertreter.
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
                      PCI-DSS Beratung
                    </h3>
                    <p className="text-sm text-slate-600">
                      Unterstützung bei PCI-DSS Level 1-4 Zertifizierung. Gap-Analyse und Implementierungs-Roadmap für Payment Security.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
          <div className="mx-auto max-w-6xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-emerald-100 text-emerald-800 border-emerald-200">
                📊 Praxis-Fallstudie
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Wie das KaDeWe Berlin WeChat Pay & Alipay DSGVO-konform integrierte
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Von der Zahlungsakzeptanz ohne Compliance zur vollständigen DSGVO-Konformität in 8 Wochen
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="border-slate-200 bg-white">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-slate-900 mb-2">€8,2 Mio</div>
                  <div className="text-sm text-slate-600">Jährliches Transaktionsvolumen von chinesischen Touristen</div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-slate-900 mb-2">47.000</div>
                  <div className="text-sm text-slate-600">WeChat Pay/Alipay-Transaktionen pro Jahr</div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-slate-900 mb-2">8 Wochen</div>
                  <div className="text-sm text-slate-600">Von Compliance-Lücke zu vollständiger DSGVO-Konformität</div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 border-red-200 bg-red-50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">🚨</span>
                      Ausgangssituation: Compliance-Blackbox
                    </h3>
                    <div className="space-y-3 text-slate-700">
                      <p><strong>Das Problem:</strong> Das KaDeWe akzeptierte seit 2019 WeChat Pay und Alipay über einen deutschen PSP (Computop). Niemand hatte sich je gefragt: Wohin fließen die Kundendaten?</p>

                      <div className="bg-white rounded-lg p-4 border border-red-300">
                        <p className="font-semibold text-red-900 mb-2">Konkrete DSGVO-Verletzungen:</p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">❌</span>
                            <span><strong>Keine Privacy Policy:</strong> Weder auf der Website noch an den POS-Terminals wurde erwähnt, dass WeChat Pay/Alipay Daten nach China übertragen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">❌</span>
                            <span><strong>Kein AVV mit Tencent/Ant Group:</strong> Nur mit dem deutschen PSP – aber nicht mit den eigentlichen Datenempfängern in China</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">❌</span>
                            <span><strong>Keine Transfer Impact Assessment (TIA):</strong> Niemand hatte je geprüft, ob der Datentransfer nach China zulässig ist</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">❌</span>
                            <span><strong>Keine Standard Contractual Clauses (SCCs):</strong> Mit Tencent/Ant Group existierte kein rechtsgültiger Vertrag</span>
                          </li>
                        </ul>
                      </div>

                      <p className="text-sm italic text-slate-600">
                        <strong>Der Auslöser:</strong> Ein Berliner Datenschutzaktivist stellte eine DSGVO-Auskunftsanfrage (Art. 15) und drohte mit einer Beschwerde bei der Berliner Datenschutzbehörde. Das KaDeWe hatte 30 Tage Zeit zu antworten – und keine Antworten.
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
                <Card className="border-2 border-blue-200 bg-blue-50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">🔧</span>
                      Lösungsweg: 8-Wochen-Compliance-Sprint
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-blue-300">
                        <h4 className="font-semibold text-blue-900 mb-2">Woche 1-2: Datenfluss-Analyse</h4>
                        <ul className="space-y-1 text-sm text-slate-700">
                          <li>• Mapping des kompletten Zahlungsflusses: KaDeWe → Computop → Tencent/Ant Group (China) → Zurück</li>
                          <li>• Identifikation ALLER übertragenen Datenfelder (siehe Technische Integration oben)</li>
                          <li>• Ermittlung der Speicherdauer: PSP 10 Jahre (Deutschland), Tencent/Ant unbegrenzt (China)</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-blue-300">
                        <h4 className="font-semibold text-blue-900 mb-2">Woche 3-4: Rechtliche Basis schaffen</h4>
                        <ul className="space-y-1 text-sm text-slate-700">
                          <li>• <strong>Transfer Impact Assessment (TIA):</strong> 47-seitiges Gutachten zu Risiken des Datentransfers nach China (PIPL-Konflikt, staatlicher Zugriff)</li>
                          <li>• <strong>Verhandlung mit Computop:</strong> PSP musste nachweisen, dass Tencent/Ant Group EU-SCCs unterschrieben haben</li>
                          <li>• <strong>Ergebnis:</strong> Tencent hatte KEINE SCCs. Ant Group hatte SCCs, aber veraltet (2010-Version statt EU-SCC 2021)</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-blue-300">
                        <h4 className="font-semibold text-blue-900 mb-2">Woche 5-6: Dokumentation & Privacy Updates</h4>
                        <ul className="space-y-1 text-sm text-slate-700">
                          <li>• Privacy Policy komplett neu geschrieben (Abschnitt "Zahlungsabwicklung" mit 8 Unterabschnitten)</li>
                          <li>• POS-Terminal-Bildschirme bekamen neue Hinweise: "Mit WeChat Pay/Alipay werden Daten an Tencent (China) / Ant Group (China) übertragen"</li>
                          <li>• Verzeichnis von Verarbeitungstätigkeiten (VVT) aktualisiert</li>
                          <li>• Interne Schulung: 120 Kassierer*innen zu DSGVO-konformer Zahlungsabwicklung</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-blue-300">
                        <h4 className="font-semibold text-blue-900 mb-2">Woche 7-8: Monitoring & Final Testing</h4>
                        <ul className="space-y-1 text-sm text-slate-700">
                          <li>• Implementierung eines monatlichen DSGVO-Compliance-Checks (Automatisiert über Marsstein)</li>
                          <li>• Einrichtung eines Prozesses für Art. 15-Auskunftsanfragen (Template + Workflow)</li>
                          <li>• Finale Antwort an den Datenschutzaktivisten mit vollständiger Dokumentation</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 border-emerald-200 bg-emerald-50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">✅</span>
                      Ergebnis: Compliance erreicht, Umsatz gesichert
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-emerald-900 mb-3">Rechtliche Erfolge:</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>Keine Beschwerde bei der Datenschutzbehörde</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>Privacy Policy zu 100% DSGVO-konform</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>AVV-Kette lückenlos dokumentiert</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>TIA bestätigt: Datentransfer zulässig unter Auflagen</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-emerald-900 mb-3">Business Impact:</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span><strong>€8,2 Mio Umsatz</strong> gesichert (keine Abschaltung nötig)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span><strong>0 € Bußgeld</strong> (hätte bis zu €500.000 betragen können)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span><strong>15% Steigerung</strong> der Alipay-Nutzung nach Compliance-Update (mehr Vertrauen)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 bg-white rounded-lg p-4 border border-emerald-300">
                      <p className="text-sm text-slate-700 italic">
                        <strong>Kosten-Nutzen-Rechnung:</strong> Die Compliance-Maßnahmen kosteten insgesamt <strong>€28.400</strong> (externe Anwälte + Marsstein + Schulungen). Eine einzige DSGVO-Beschwerde hätte bis zu <strong>€500.000</strong> Bußgeld bedeuten können. Plus: Der Reputationsschaden bei chinesischen Kunden wäre irreparabel gewesen.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 border-purple-200 bg-purple-50">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">💡</span>
                      Lessons Learned: 3 kritische Erkenntnisse
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-purple-300">
                        <h4 className="font-semibold text-purple-900 mb-2">1. "Nur weil der PSP deutsch ist, heißt das nicht, dass die Daten in Deutschland bleiben"</h4>
                        <p className="text-sm text-slate-700">
                          Viele Händler glaubten, mit Computop einen "deutschen, DSGVO-konformen Partner" zu haben. Aber Computop ist nur der Vermittler – die echte Verarbeitung findet bei Tencent/Ant Group in China statt. <strong>DSGVO-Verantwortung endet nicht beim PSP.</strong>
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-purple-300">
                        <h4 className="font-semibold text-purple-900 mb-2">2. "POS-Terminals sind DSGVO-Informationspflicht-Zonen"</h4>
                        <p className="text-sm text-slate-700">
                          Art. 13 DSGVO verlangt Transparenz <strong>zum Zeitpunkt der Datenerhebung</strong>. Ein Link zur Privacy Policy auf der Website reicht nicht – der Kunde muss <strong>am POS-Terminal</strong> sehen, dass seine Daten nach China gehen. Das KaDeWe löste es mit einem kleinen Bildschirm-Popup vor dem QR-Code-Scan.
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-purple-300">
                        <h4 className="font-semibold text-purple-900 mb-2">3. "WeChat Pay ≠ Alipay bei DSGVO"</h4>
                        <p className="text-sm text-slate-700">
                          Obwohl beide chinesisch sind, haben sie unterschiedliche Compliance-Level. Ant Group (Alipay) hatte immerhin veraltete SCCs – Tencent (WeChat Pay) hatte GAR NICHTS. Das KaDeWe musste zwei separate Compliance-Prozesse aufsetzen. <strong>Nie beide Systeme über einen Kamm scheren.</strong>
                        </p>
                      </div>
                    </div>
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
                  Braucht jeder Händler, der WeChat Pay/Alipay akzeptiert, einen EU-Vertreter?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Nein, nicht der Händler – sondern WeChat Pay und Alipay selbst.</strong></p>
                    <p>Art. 27 DSGVO verpflichtet <strong>nicht-EU-Unternehmen</strong>, die personenbezogene Daten von EU-Bürgern verarbeiten, einen EU-Vertreter zu ernennen. Das trifft auf WeChat Pay (Tencent, China) und Alipay (Ant Group, China) zu.</p>
                    <p><strong>Der Händler</strong> benötigt keinen eigenen EU-Vertreter (außer er ist selbst ein nicht-EU-Unternehmen). Aber der Händler muss:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Einen AVV mit dem Payment Service Provider (PSP) abschließen</li>
                      <li>In seiner Privacy Policy offenlegen, dass WeChat Pay/Alipay genutzt wird</li>
                      <li>Den EU-Vertreter von WeChat Pay/Alipay (falls vorhanden) in der Privacy Policy nennen</li>
                    </ul>
                    <p><strong>Problem:</strong> Viele Händler wissen nicht, ob WeChat Pay/Alipay einen EU-Vertreter haben – und können ihn deshalb nicht korrekt angeben.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Was ist der Unterschied zwischen PSP, WeChat Pay/Alipay und dem Händler?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p>Die Verantwortlichkeitskette ist komplex:</p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Der Händler (z.B. Luxus-Boutique in Paris):</strong> Ist "Verantwortlicher" (Data Controller) im Sinne der DSGVO. Entscheidet, welche Zahlungsmethoden angeboten werden.</li>
                      <li><strong>Payment Service Provider (PSP) – z.B. Adyen, Ingenico, Worldline:</strong> Ist "Auftragsverarbeiter" (Data Processor) des Händlers. Verarbeitet Zahlungen im Auftrag des Händlers und leitet Transaktionen an WeChat Pay/Alipay weiter.</li>
                      <li><strong>WeChat Pay / Alipay:</strong> Ist "Unter-Auftragsverarbeiter" (Sub-Processor) des PSP. Führt die eigentliche Transaktion im chinesischen Payment-Netzwerk aus.</li>
                    </ol>
                    <p><strong>DSGVO-Anforderungen:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Händler ↔ PSP: AVV erforderlich (Art. 28 DSGVO)</li>
                      <li>PSP ↔ WeChat Pay/Alipay: AVV erforderlich (Art. 28 DSGVO)</li>
                      <li>WeChat Pay/Alipay: EU-Vertreter erforderlich (Art. 27 DSGVO)</li>
                    </ul>
                    <p>Wenn <strong>eine</strong> dieser Anforderungen fehlt, ist die gesamte Kette nicht DSGVO-konform.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Haben WeChat Pay und Alipay bereits EU-Vertreter in Europa?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Stand 2025: Nicht öffentlich bekannt oder unzureichend dokumentiert.</strong></p>
                    <p>Nach öffentlich verfügbaren Informationen haben weder WeChat Pay (Tencent) noch Alipay (Ant Group) transparent einen Art. 27 EU-Vertreter benannt, der in ihren europäischen Privacy Policies klar ersichtlich ist.</p>
                    <p><strong>Was wir wissen:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Alipay</strong> arbeitet über Partnerschaften mit Adyen und Ingenico in Europa. Diese PSPs übernehmen teilweise die DSGVO-Compliance, aber ob Alipay selbst einen dedizierten EU-Vertreter hat, ist unklar.</li>
                      <li><strong>WeChat Pay</strong> arbeitet über Worldline in der Schweiz und andere PSPs. Die DSGVO-Compliance wird oft "implizit" über die PSP-Infrastruktur sichergestellt, aber ein offizieller EU-Vertreter ist nicht öffentlich genannt.</li>
                    </ul>
                    <p><strong>Problem für Händler:</strong> Wenn WeChat Pay/Alipay keinen EU-Vertreter haben und Sie als Händler WeChat Pay/Alipay in Ihrer Privacy Policy erwähnen, können Sie den EU-Vertreter nicht korrekt angeben – ein potenzieller DSGVO-Verstoß.</p>
                    <p><strong>Lösung:</strong> Marsstein kann als EU-Vertreter für WeChat Pay/Alipay fungieren oder Händler bei der korrekten Dokumentation unterstützen.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Was passiert mit den Transaktionsdaten? Werden sie nach China übertragen?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Ja, Transaktionsdaten werden nach China übertragen – das ist technisch unvermeidbar.</strong></p>
                    <p>WeChat Pay und Alipay sind chinesische Payment-Netzwerke. Um eine Zahlung zu autorisieren, müssen Transaktionsdaten (Name, Betrag, Händler-ID, ggf. Telefonnummer) an Server in China gesendet werden.</p>
                    <p><strong>DSGVO-Problem: Kein Angemessenheitsbeschluss für China.</strong></p>
                    <p>Die EU hat <strong>keinen Angemessenheitsbeschluss</strong> (Adequacy Decision) für China erlassen. Das bedeutet: China bietet kein ausreichendes Datenschutzniveau nach DSGVO-Standards.</p>
                    <p><strong>Wie können Daten dann legal übertragen werden?</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Standard Contractual Clauses (SCCs):</strong> Vertragliche Garantien zwischen EU und China-Entität</li>
                      <li><strong>Transfer Impact Assessment (TIA):</strong> Risikoanalyse, ob chinesische Behörden auf Daten zugreifen könnten</li>
                      <li><strong>Minimierung der Datenübertragung:</strong> Nur transaktionsrelevante Daten übertragen, keine zusätzlichen Marketing-Daten</li>
                    </ul>
                    <p><strong>Best Practice:</strong> In der Privacy Policy transparent offenlegen: "Bei Nutzung von WeChat Pay/Alipay werden Transaktionsdaten an Server in China übertragen. Rechtsgrundlage: Art. 49 Abs. 1 lit. b DSGVO (Vertragserfüllung)."</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Reicht PCI-DSS Compliance aus, oder brauche ich zusätzlich DSGVO-Compliance?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>PCI-DSS und DSGVO sind zwei unterschiedliche Anforderungen – beide sind notwendig.</strong></p>
                    <p><strong>PCI-DSS (Payment Card Industry Data Security Standard):</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fokus: Sicherheit von Kreditkarten- und Zahlungsdaten</li>
                      <li>Zertifizierung durch unabhängige Assessoren (QSA)</li>
                      <li>4 Compliance-Level (Level 1 = höchste Anforderungen)</li>
                      <li>Technische Anforderungen: Verschlüsselung, Firewalls, Zugriffskontrollen</li>
                    </ul>
                    <p><strong>DSGVO (General Data Protection Regulation):</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Fokus: Schutz aller personenbezogenen Daten (nicht nur Payment-Daten)</li>
                      <li>Rechtliche Anforderungen: AVVs, EU-Vertreter, Privacy Policies, Auskunftsrechte</li>
                      <li>Bußgelder bei Verstößen: bis zu €20 Mio. oder 4% Jahresumsatz</li>
                    </ul>
                    <p><strong>Warum beide notwendig sind:</strong></p>
                    <p>PCI-DSS deckt die <strong>technische Sicherheit</strong> der Zahlungsdaten ab (z.B. Verschlüsselung bei Übertragung). DSGVO deckt die <strong>rechtliche Compliance</strong> ab (z.B. wer darf Daten verarbeiten, wie lange werden sie gespeichert, wer ist verantwortlich).</p>
                    <p><strong>Beispiel:</strong> Ein PSP kann PCI-DSS Level 1 zertifiziert sein (technisch sicher), aber trotzdem DSGVO-Verstöße begehen, wenn er keinen AVV mit Händlern abschließt oder Daten unrechtmäßig nach China überträgt.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Wie lange dauert die Implementierung einer DSGVO-konformen WeChat Pay/Alipay-Integration?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Mit Marsstein: 48 Stunden bis 7 Tage.</strong></p>
                    <p><strong>Unser Prozess:</strong></p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Tag 1: Analyse</strong>
                        <ul className="list-disc pl-6 mt-2">
                          <li>Welcher PSP wird genutzt? (Adyen, Ingenico, Worldline, etc.)</li>
                          <li>Ist ein AVV mit dem PSP vorhanden?</li>
                          <li>Wie ist die aktuelle Privacy Policy formuliert?</li>
                        </ul>
                      </li>
                      <li><strong>Tag 2-3: Dokumenten-Erstellung</strong>
                        <ul className="list-disc pl-6 mt-2">
                          <li>AVV-Vorlage für Händler ↔ PSP (falls fehlend)</li>
                          <li>Aktualisierte Privacy Policy mit WeChat Pay/Alipay-Nennung</li>
                          <li>Datenschutz-Hinweise für Point of Sale</li>
                          <li>EU-Vertreter-Ernennung (falls Payment Provider selbst)</li>
                        </ul>
                      </li>
                      <li><strong>Tag 4-5: Review & Anpassung</strong>
                        <ul className="list-disc pl-6 mt-2">
                          <li>Abstimmung mit Ihrem Legal-Team oder PSP</li>
                          <li>Feinabstimmung der Dokumente</li>
                        </ul>
                      </li>
                      <li><strong>Tag 6-7: Go-Live</strong>
                        <ul className="list-disc pl-6 mt-2">
                          <li>Veröffentlichung der aktualisierten Privacy Policy</li>
                          <li>Schulung Ihres Point-of-Sale-Personals</li>
                          <li>DSGVO-konform ab dem ersten Tag</li>
                        </ul>
                      </li>
                    </ol>
                    <p><strong>Ohne Marsstein: 3-6 Monate.</strong></p>
                    <p>Traditionelle Rechtsanwälte benötigen Wochen für Vertrags-Verhandlungen mit PSPs, manuelle Erstellung von AVVs, und komplexe TIAs für China-Datentransfers.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Was kostet DSGVO-Compliance für WeChat Pay/Alipay?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Marsstein Preise:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Für Händler (Basis-Paket):</strong> €499 einmalig
                        <ul className="list-disc pl-6 mt-2">
                          <li>AVV-Vorlage für PSP-Vertrag</li>
                          <li>Aktualisierte Privacy Policy</li>
                          <li>Point-of-Sale Datenschutz-Hinweise</li>
                        </ul>
                      </li>
                      <li><strong>Für Payment Provider (Vollständiges Paket):</strong> €4.999/Jahr
                        <ul className="list-disc pl-6 mt-2">
                          <li>Art. 27 EU-Vertreter (12 Monate)</li>
                          <li>Standard-AVV-Vorlagen für Händler</li>
                          <li>DSGVO-konforme Privacy Policy</li>
                          <li>TIA (Transfer Impact Assessment) für China-Transfers</li>
                          <li>PCI-DSS Gap-Analyse und Beratung</li>
                        </ul>
                      </li>
                    </ul>
                    <p><strong>Vergleich: Traditionelle Anbieter</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>EU-Vertreter: €8.000-€15.000/Jahr</li>
                      <li>Rechtsanwälte für AVV-Erstellung: €3.000-€10.000</li>
                      <li>PCI-DSS Zertifizierung: €20.000-€100.000 (je nach Level)</li>
                    </ul>
                    <p><strong>Marsstein Vorteil:</strong> Automatisierte Dokumenten-Generierung senkt Kosten um 60-80%.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Welche Daten sammeln WeChat Pay und Alipay ZUSÄTZLICH zur Transaktion?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Mehr als Sie denken – und das ist das Problem.</strong></p>

                    <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mb-4">
                      <p className="font-semibold text-yellow-900 mb-2">ACHTUNG: "Unsichtbare" Datensammlung</p>
                      <p className="text-sm text-slate-700">
                        Viele Händler glauben, WeChat Pay/Alipay sammeln nur Transaktionsdaten. Tatsächlich fließen aber DEUTLICH mehr Datenpunkte – oft ohne explizite Nennung in Händler-AVVs.
                      </p>
                    </div>

                    <p><strong>Bekannte Transaktionsdaten (im AVV meist genannt):</strong></p>
                    <ul className="list-disc pl-6 space-y-1 text-sm">
                      <li>Transaktions-ID, Betrag, Währung</li>
                      <li>Händler-ID und Merchant Category Code (MCC)</li>
                      <li>Zeitstempel der Transaktion</li>
                      <li>Erfolgs-/Fehlerstatus</li>
                    </ul>

                    <p><strong>ZUSÄTZLICHE Daten, die übertragen werden (oft nicht dokumentiert):</strong></p>

                    <div className="space-y-3">
                      <div className="bg-white border border-slate-300 rounded-lg p-3">
                        <h4 className="font-semibold text-slate-900 text-sm mb-2">🌍 Geolocation-Daten</h4>
                        <p className="text-sm text-slate-700">
                          <strong>Was:</strong> GPS-Koordinaten des Smartphones zum Zeitpunkt des QR-Code-Scans<br />
                          <strong>Zweck:</strong> Betrugsprävention (Ist der Nutzer wirklich im Geschäft?)<br />
                          <strong>DSGVO-Problem:</strong> Präzise Standortdaten = besonders schützenswert (Art. 9 DSGVO-nah)
                        </p>
                      </div>

                      <div className="bg-white border border-slate-300 rounded-lg p-3">
                        <h4 className="font-semibold text-slate-900 text-sm mb-2">📱 Device Fingerprinting</h4>
                        <p className="text-sm text-slate-700">
                          <strong>Was:</strong> Smartphone-Modell, OS-Version, App-Version, einzigartige Device-ID<br />
                          <strong>Zweck:</strong> Geräte-Tracking über Transaktionen hinweg<br />
                          <strong>DSGVO-Problem:</strong> Ermöglicht Profiling ohne explizite Zustimmung
                        </p>
                      </div>

                      <div className="bg-white border border-slate-300 rounded-lg p-3">
                        <h4 className="font-semibold text-slate-900 text-sm mb-2">👤 Biometrische Authentifizierungs-Hashes</h4>
                        <p className="text-sm text-slate-700">
                          <strong>Was:</strong> Hash-Wert der Gesichtserkennung/Fingerabdruck (nicht der Rohdaten, aber trotzdem personenbezogen)<br />
                          <strong>Zweck:</strong> Bestätigung, dass der rechtmäßige Kontoinhaber zahlt<br />
                          <strong>DSGVO-Problem:</strong> Biometrische Daten = Art. 9 DSGVO (besondere Kategorie, höchste Schutzstufe!)
                        </p>
                      </div>

                      <div className="bg-white border border-slate-300 rounded-lg p-3">
                        <h4 className="font-semibold text-slate-900 text-sm mb-2">🛍️ Kaufverhalten-Metadaten</h4>
                        <p className="text-sm text-slate-700">
                          <strong>Was:</strong> Merchant Category Code (MCC) + Transaktionshäufigkeit → Profil "Luxury Shopper"<br />
                          <strong>Zweck:</strong> Personalisierte Werbung in der WeChat/Alipay-App<br />
                          <strong>DSGVO-Problem:</strong> Profiling ohne explizite Zustimmung (Art. 22 DSGVO)
                        </p>
                      </div>

                      <div className="bg-white border border-slate-300 rounded-lg p-3">
                        <h4 className="font-semibold text-slate-900 text-sm mb-2">🔗 Verknüpfung mit WeChat/Alipay-Profil</h4>
                        <p className="text-sm text-slate-700">
                          <strong>Was:</strong> Die Zahlung wird mit dem gesamten WeChat/Alipay-Account verknüpft (Chatverläufe, Kontakte, Mini-Program-Nutzung)<br />
                          <strong>DSGVO-Problem:</strong> Datenverknüpfung über Zwecke hinaus (nicht nur Payment, sondern Gesamtprofil)
                        </p>
                      </div>
                    </div>

                    <p className="mt-4"><strong>Was bedeutet das für Händler?</strong></p>
                    <p className="text-sm">
                      Ihre Privacy Policy MUSS alle diese Datenpunkte erwähnen – nicht nur "Transaktionsdaten". Wenn WeChat Pay/Alipay Geolocation und Device Fingerprinting sammeln, müssen Sie das transparent machen (Art. 13 DSGVO).
                    </p>

                    <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 mt-4">
                      <p className="text-sm text-slate-700">
                        <strong>Marsstein-Lösung:</strong> Wir analysieren die tatsächlich übertragenen Datenfelder (via API-Dokumentation + Netzwerk-Monitoring) und erstellen eine vollständige, DSGVO-konforme Auflistung für Ihre Privacy Policy. Keine "Überraschungen" bei der nächsten Datenschutzbehörden-Prüfung.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Was passiert bei einer DSGVO-Auskunftsanfrage (Art. 15) von einem WeChat Pay/Alipay-Nutzer?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Szenario: Ein chinesischer Tourist, der in Ihrem Geschäft bezahlt hat, stellt eine DSGVO-Auskunftsanfrage. Sie haben 30 Tage Zeit zu antworten.</strong></p>

                    <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-4">
                      <p className="font-semibold text-red-900 mb-2">Häufigste Fehler:</p>
                      <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">❌</span>
                          <span>"Wir haben keine Daten von Ihnen" – <strong>FALSCH.</strong> Der PSP speichert Transaktionsdaten, WeChat/Alipay in China auch.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">❌</span>
                          <span>"Wenden Sie sich an WeChat Pay/Alipay direkt" – <strong>UNZUREICHEND.</strong> Sie als Händler sind Verantwortlicher und müssen aktiv werden.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-red-600 font-bold">❌</span>
                          <span>"Wir können keine Daten aus China abrufen" – <strong>KEINE AUSREDE.</strong> Sie müssen Prozesse mit WeChat/Alipay etabliert haben.</span>
                        </li>
                      </ul>
                    </div>

                    <p><strong>Korrekte Antwort auf Art. 15 DSGVO-Anfrage – 5-Schritt-Prozess:</strong></p>

                    <ol className="list-decimal pl-6 space-y-3">
                      <li>
                        <strong>Schritt 1: Identität verifizieren (1-2 Tage)</strong>
                        <ul className="list-disc pl-6 mt-2 text-sm">
                          <li>Nutzer muss sich ausweisen (Kopie Personalausweis/Pass + Nachweis der WeChat/Alipay-Transaktion)</li>
                          <li>Ohne Verifikation keine Auskunft (Datenschutz des echten Kontoinhabers)</li>
                        </ul>
                      </li>

                      <li>
                        <strong>Schritt 2: Daten beim PSP abrufen (3-5 Tage)</strong>
                        <ul className="list-disc pl-6 mt-2 text-sm">
                          <li>Anfrage an PSP (Adyen/Ingenico/Worldline): "Bitte alle Transaktionsdaten für WeChat User ID / Alipay User ID im Zeitraum X"</li>
                          <li>PSP muss laut AVV innerhalb von 5 Werktagen antworten</li>
                          <li>Typische Daten: Transaktions-ID, Betrag, Zeitstempel, IP-Adresse des POS-Terminals</li>
                        </ul>
                      </li>

                      <li>
                        <strong>Schritt 3: Daten bei WeChat Pay/Alipay abrufen (10-15 Tage!)</strong>
                        <ul className="list-disc pl-6 mt-2 text-sm">
                          <li>Anfrage an Tencent/Ant Group (über PSP oder direkt, falls EU-Vertreter vorhanden)</li>
                          <li><strong>Problem:</strong> Chinesische Unternehmen antworten oft langsam oder unvollständig auf DSGVO-Anfragen</li>
                          <li>Typische Daten: WeChat OpenID, Geolocation, Device Fingerprint, Biometric Hash</li>
                        </ul>
                      </li>

                      <li>
                        <strong>Schritt 4: Daten aufbereiten & konsolidieren (2-3 Tage)</strong>
                        <ul className="list-disc pl-6 mt-2 text-sm">
                          <li>Alle Daten aus PSP + WeChat/Alipay in einem verständlichen Dokument zusammenführen</li>
                          <li>DSGVO verlangt "in präziser, transparenter, verständlicher und leicht zugänglicher Form" (Art. 12 Abs. 1)</li>
                          <li>Nicht einfach technische API-Logs schicken, sondern lesbare Tabelle/PDF</li>
                        </ul>
                      </li>

                      <li>
                        <strong>Schritt 5: Antwort senden (innerhalb 30 Tage Gesamtfrist)</strong>
                        <ul className="list-disc pl-6 mt-2 text-sm">
                          <li>Vollständige Auskunft + Informationen über Empfänger (PSP, Tencent/Ant Group)</li>
                          <li>Speicherdauer (z.B. "10 Jahre Deutschland, unbegrenzt China")</li>
                          <li>Hinweis auf Rechte (Löschung, Widerspruch, Beschwerde bei Datenschutzbehörde)</li>
                        </ul>
                      </li>
                    </ol>

                    <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4 mt-4">
                      <p className="font-semibold text-yellow-900 mb-2">⚠️ Zeitproblem: China-Anfragen dauern länger</p>
                      <p className="text-sm text-slate-700">
                        Die 30-Tage-Frist der DSGVO ist knapp, wenn WeChat/Alipay 10-15 Tage für die Antwort brauchen. <strong>Lösung:</strong> Sie können die Frist um weitere 2 Monate verlängern (Art. 12 Abs. 3 DSGVO), ABER Sie müssen den Nutzer innerhalb der ersten 30 Tage darüber informieren + begründen, warum es länger dauert.
                      </p>
                    </div>

                    <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 mt-4">
                      <p className="text-sm text-slate-700">
                        <strong>Marsstein-Lösung:</strong> Wir stellen einen vorgefertigten Art. 15-Prozess bereit:
                      </p>
                      <ul className="list-disc pl-6 mt-2 text-sm text-slate-700">
                        <li>E-Mail-Templates für Anfragen an PSP + WeChat/Alipay</li>
                        <li>Checkliste: Welche Daten müssen abgefragt werden?</li>
                        <li>Automatische Konsolidierung in DSGVO-konformes PDF</li>
                        <li>Tracking: Wann wurde Anfrage gestellt? Wann ist Deadline?</li>
                      </ul>
                      <p className="text-sm text-slate-700 mt-2">
                        <strong>Ergebnis:</strong> Art. 15-Anfragen in 7-10 Tagen statt 25-30 Tagen beantwortet → Puffer für Verzögerungen aus China.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Können chinesische Behörden auf WeChat Pay/Alipay-Transaktionsdaten zugreifen?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Ja – und das ist der Kern des DSGVO-Problems mit China-Datentransfers.</strong></p>

                    <div className="bg-red-50 border border-red-300 rounded-lg p-4 mb-4">
                      <p className="font-semibold text-red-900 mb-2">Die rechtliche Realität:</p>
                      <p className="text-sm text-slate-700">
                        Chinas Gesetze (National Security Law, National Intelligence Law, Cybersecurity Law) verpflichten <strong>alle</strong> chinesischen Unternehmen – einschließlich Tencent (WeChat Pay) und Ant Group (Alipay) – zur Kooperation mit staatlichen Behörden. Es gibt <strong>keine</strong> vergleichbaren rechtsstaatlichen Schutzmechanismen wie in der EU.
                      </p>
                    </div>

                    <p><strong>Konkrete Zugriffsszenarien:</strong></p>

                    <div className="space-y-3">
                      <div className="bg-white border border-slate-300 rounded-lg p-3">
                        <h4 className="font-semibold text-slate-900 text-sm mb-2">🚨 Szenario 1: "Person of Interest"</h4>
                        <p className="text-sm text-slate-700">
                          Ein chinesischer Staatsbürger, der in Europa mit Alipay bezahlt, steht unter Beobachtung (z.B. politische Aktivist*in). Chinas Behörden können von Ant Group verlangen:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-xs text-slate-600">
                          <li>Alle Transaktionen in Europa (wo, wann, wie viel)</li>
                          <li>Geolocation-Daten (präzise Bewegungsprofile)</li>
                          <li>Verknüpfung mit anderen Alipay-Aktivitäten (Inlandszahlungen, Kontakte)</li>
                        </ul>
                        <p className="text-xs text-slate-600 mt-2 italic">
                          <strong>DSGVO-Konflikt:</strong> Der Nutzer hat KEIN Recht auf Widerspruch gegen staatlichen Zugriff in China (anders als in der EU, wo richterliche Anordnung + Rechtsweg nötig wäre).
                        </p>
                      </div>

                      <div className="bg-white border border-slate-300 rounded-lg p-3">
                        <h4 className="font-semibold text-slate-900 text-sm mb-2">🕵️ Szenario 2: Massenüberwachung ("Dragnet Surveillance")</h4>
                        <p className="text-sm text-slate-700">
                          Chinas Behörden können auch OHNE konkreten Verdacht Zugriff auf aggregierte Transaktionsdaten verlangen:
                        </p>
                        <ul className="list-disc pl-6 mt-2 text-xs text-slate-600">
                          <li>"Alle WeChat Pay-Transaktionen in Paris im letzten Quartal"</li>
                          <li>"Alle Alipay-Nutzer, die in Luxusgeschäften in München eingekauft haben"</li>
                        </ul>
                        <p className="text-xs text-slate-600 mt-2 italic">
                          <strong>DSGVO-Konflikt:</strong> Art. 44-49 DSGVO verbieten Datentransfers in Länder, wo systematische Massenüberwachung möglich ist (vgl. Schrems II-Urteil zu USA – gilt analog für China).
                        </p>
                      </div>

                      <div className="bg-white border border-slate-300 rounded-lg p-3">
                        <h4 className="font-semibold text-slate-900 text-sm mb-2">🔒 Szenario 3: Datenlokalisierung (PIPL-Konflikt)</h4>
                        <p className="text-sm text-slate-700">
                          Chinas PIPL (Personal Information Protection Law) verlangt, dass Daten chinesischer Bürger in China gespeichert werden. Aber DSGVO verlangt, dass Daten von EU-Bürgern NICHT nach China übertragen werden (ohne Schutzmechanismen).
                        </p>
                        <p className="text-xs text-slate-600 mt-2">
                          <strong>Problem:</strong> Ein chinesischer Tourist in Europa ist BEIDE: Chinesischer Bürger (PIPL) UND in EU ansässig (DSGVO). WeChat/Alipay können nicht beide Gesetze gleichzeitig einhalten.
                        </p>
                      </div>
                    </div>

                    <p className="mt-4"><strong>Was bedeutet das für Händler?</strong></p>

                    <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-4">
                      <p className="font-semibold text-yellow-900 mb-2">⚠️ Transfer Impact Assessment (TIA) ist PFLICHT</p>
                      <p className="text-sm text-slate-700">
                        Die DSGVO verlangt (Art. 44 + Schrems II), dass Sie bei Datentransfers nach China eine TIA durchführen:
                      </p>
                      <ul className="list-disc pl-6 mt-2 text-sm text-slate-700">
                        <li>Risikoanalyse: Wie wahrscheinlich ist staatlicher Zugriff auf IHRE Kundendaten?</li>
                        <li>Schutzmaßnahmen: Welche technischen/vertraglichen Maßnahmen mindern das Risiko?</li>
                        <li>Abwägung: Ist der Datentransfer trotz Risiken zulässig?</li>
                      </ul>
                    </div>

                    <p className="mt-4"><strong>Praktische Schutzmaßnahmen (auch wenn nicht perfekt):</strong></p>
                    <ul className="list-disc pl-6 space-y-2 text-sm">
                      <li><strong>Dateminimierung:</strong> Nur transaktionsrelevante Daten übertragen (keine Marketing-Daten, keine unnötigen Metadaten)</li>
                      <li><strong>Pseudonymisierung:</strong> Keine Klarnamen/E-Mail-Adressen übertragen (nur Transaktions-IDs)</li>
                      <li><strong>Verschlüsselung:</strong> End-to-End-Verschlüsselung (aber: Tencent/Ant Group haben trotzdem Zugriff, da sie die Transaktion verarbeiten)</li>
                      <li><strong>Vertragliche Klauseln:</strong> SCCs + Zusatzvereinbarung "Keine Datenweitergabe an Behörden ohne vorherige Information des EU-Händlers" (rechtlich schwer durchsetzbar, aber zeigt Good Faith)</li>
                    </ul>

                    <div className="bg-blue-50 border border-blue-300 rounded-lg p-4 mt-4">
                      <p className="text-sm text-slate-700">
                        <strong>Marsstein-Lösung: Risikobewertung + Dokumentation</strong>
                      </p>
                      <p className="text-sm text-slate-700 mt-2">
                        Wir erstellen eine maßgeschneiderte TIA für Ihre WeChat Pay/Alipay-Integration:
                      </p>
                      <ul className="list-disc pl-6 mt-2 text-xs text-slate-700">
                        <li>Bewertung: Wie hoch ist das Risiko für IHRE spezifischen Kunden? (Touristenzahlungen = niedrigeres Risiko als B2B-Großbestellungen)</li>
                        <li>Dokumentation: DSGVO-konforme Begründung, warum der Transfer trotz China-Risiko zulässig ist (Art. 49 Abs. 1 lit. b: Vertragserfüllung)</li>
                        <li>Transparenz: Privacy Policy-Text, der Nutzer klar informiert ("Daten werden nach China übertragen, chinesische Behörden könnten theoretisch zugreifen")</li>
                      </ul>
                      <p className="text-sm text-slate-700 mt-2 font-semibold">
                        Ergebnis: Sie können WeChat Pay/Alipay weiter nutzen – aber mit sauberer rechtlicher Dokumentation, die bei Datenschutzbehörden-Prüfungen standhält.
                      </p>
                    </div>
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
                Kostenlose DSGVO-Compliance-Prüfung
              </h2>
              <p className="text-lg text-slate-600">
                Kontaktieren Sie uns für eine unverbindliche Analyse Ihrer WeChat Pay/Alipay-Integration.
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
                        Vielen Dank für Ihre Anfrage!
                      </h3>
                      <p className="text-slate-600">
                        Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="companyName">Firmenname *</Label>
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
                          <Label htmlFor="contactPerson">Ansprechpartner *</Label>
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
                          <Label htmlFor="email">E-Mail *</Label>
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
                          <Label htmlFor="phone">Telefon</Label>
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
                          <Label htmlFor="paymentProvider">Sie sind:</Label>
                          <Select
                            value={formData.paymentProvider}
                            onValueChange={(value) =>
                              setFormData({ ...formData, paymentProvider: value })
                            }
                          >
                            <SelectTrigger className="mt-2" onOpenAutoFocus={(e) => e.preventDefault()}>
                              <SelectValue placeholder="Bitte wählen" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="merchant">Händler (nutzt WeChat Pay/Alipay)</SelectItem>
                              <SelectItem value="psp">Payment Service Provider (PSP)</SelectItem>
                              <SelectItem value="wechat-alipay">WeChat Pay / Alipay selbst</SelectItem>
                              <SelectItem value="other">Sonstiges</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="monthlyTransactions">Monatliche Transaktionen</Label>
                          <Select
                            value={formData.monthlyTransactions}
                            onValueChange={(value) =>
                              setFormData({ ...formData, monthlyTransactions: value })
                            }
                          >
                            <SelectTrigger className="mt-2" onOpenAutoFocus={(e) => e.preventDefault()}>
                              <SelectValue placeholder="Bitte wählen" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-100">0-100 Transaktionen</SelectItem>
                              <SelectItem value="100-1000">100-1.000 Transaktionen</SelectItem>
                              <SelectItem value="1000-10000">1.000-10.000 Transaktionen</SelectItem>
                              <SelectItem value="10000+">10.000+ Transaktionen</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="message">Ihre Nachricht</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({ ...formData, message: e.target.value })
                          }
                          rows={5}
                          className="mt-2"
                          placeholder="Beschreiben Sie Ihre aktuelle Payment-Integration und DSGVO-Herausforderungen..."
                        />
                      </div>

                      {submitStatus === "error" && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-600 text-sm">
                            Es gab einen Fehler beim Absenden. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.
                          </p>
                        </div>
                      )}

                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#e24e1b] text-white hover:bg-[#c93e0f]"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Wird gesendet..." : "Kostenlose Prüfung anfragen"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <RelatedArticles articles={getRelatedArticles('wechat-alipay')} />

        <Footer />
      </div>
    </>
  );
}
