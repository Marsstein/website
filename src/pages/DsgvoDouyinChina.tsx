import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { getRelatedArticles } from "@/data/chinaArticles";
import {
  Video,
  Shield,
  Users,
  AlertTriangle,
  CheckCircle2,
  Euro,
  Globe,
  FileText,
  ArrowRight,
  TrendingUp,
  Lock,
  ClipboardCheck,
  Target,
  Store,
  Smartphone,
  PlayCircle,
  ShoppingBag,
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

export default function DsgvoDouyinChina() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    sellerType: "",
    monthlyRevenue: "",
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
          source: "Douyin Cross-Border DSGVO Landing Page",
          userGroup: "Douyin DSGVO Leads",
          companyName: formData.companyName,
          phone: formData.phone,
          sellerType: formData.sellerType,
          monthlyRevenue: formData.monthlyRevenue,
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
          sellerType: "",
          monthlyRevenue: "",
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
        <title>DSGVO für Douyin Cross-Border E-Commerce | Chinesische Verkäufer in Europa</title>
        <meta
          name="description"
          content="DSGVO + PIPL Dual Compliance für Douyin Global Shopping Verkäufer. 600+ Mio. Daily Active Users. Livestream-Commerce, TikTok Shop Integration. Rechtssichere EU-Expansion in 48 Stunden."
        />
        <meta
          name="keywords"
          content="Douyin DSGVO, Douyin Global Shopping, Cross-Border E-Commerce China, TikTok Shop GDPR, Livestream Commerce Datenschutz, PIPL GDPR Compliance, ByteDance Datenschutz, China EU E-Commerce"
        />
        <link rel="canonical" href="https://marsstein.com/dsgvo-douyin-china" />
        <meta property="og:title" content="DSGVO für Douyin Cross-Border E-Commerce | China → EU" />
        <meta
          property="og:description"
          content="DSGVO + PIPL Dual Compliance für chinesische Douyin-Verkäufer. 600+ Mio. Users, Livestream-Commerce. EU-Expansion rechtssicher in 48 Stunden."
        />
        <meta property="og:url" content="https://marsstein.com/dsgvo-douyin-china" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DSGVO für Douyin Cross-Border E-Commerce" />
        <meta
          name="twitter:description"
          content="DSGVO + PIPL Dual Compliance für chinesische Douyin-Verkäufer. Livestream-Commerce rechtssicher in der EU."
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
                { label: 'Douyin' }
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
              Douyin Global Shopping Compliance
            </Badge>

            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              DSGVO-Compliance für Douyin Cross-Border E-Commerce
            </h1>

            <p className="mb-4 text-xl leading-8 text-slate-300">
              Verkaufen Sie von China nach Europa über Douyin Global Shopping oder TikTok Shop? DSGVO + PIPL Dual Compliance in 48 Stunden.
            </p>

            <p className="mb-12 text-lg leading-8 text-slate-400">
              600+ Millionen Daily Active Users, Livestream-Shopping, Cross-Border-Integration. Art. 27 EU-Vertreter, Datenschutzerklärungen, AVVs – rechtssicher von China nach EU.
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
                DSGVO-Anforderungen prüfen
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
                Der Douyin Cross-Border E-Commerce Boom
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Douyin (抖音) ist Chinas TikTok mit 600+ Millionen täglichen Nutzern. 2021 startete ByteDance "Douyin Global Shopping" – Cross-Border Marketplace für chinesische Verkäufer, die nach Europa exportieren.
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
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">600+ Mio.</div>
                  <p className="text-slate-300">Daily Active Users auf Douyin (Stand 2024)</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">$208 Mrd.</div>
                  <p className="text-slate-300">GMV (Gross Merchandise Value) auf Douyin 2022</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">82%</div>
                  <p className="text-slate-300">Jährliches Wachstum von Douyin Cross-Border E-Commerce (Prognose)</p>
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
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 mb-6">
                      <Video className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      Douyin Global Shopping
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Cross-Border Marketplace (B2C) für internationale Brands</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Verkauf ohne chinesische Unternehmens-Entity</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Livestreaming, Short-Videos, In-Feed-Ads</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Integration mit Logistik-Partnern für EU-Lieferung</span>
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
                      <Globe className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-4">
                      TikTok Shop (Global)
                    </h3>
                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Internationale Version für EU/UK/US-Märkte</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Chinesische Seller nutzen TikTok Shop für EU-Verkäufe</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Livestream-Shopping nach Douyin-Vorbild</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span>Separate DSGVO-Compliance erforderlich vs. Douyin</span>
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
                Die DSGVO-Herausforderung: Dual Compliance China + EU
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Als chinesischer Douyin-Verkäufer, der nach Europa exportiert, müssen Sie <strong>zwei</strong> Datenschutzgesetze gleichzeitig erfüllen: PIPL (China) und DSGVO (EU).
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12"
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
                        Warum Dual Compliance so komplex ist
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        Douyin Global Shopping ist eine <strong>chinesische Plattform</strong> (unterliegt PIPL), aber Ihre Kunden sind <strong>EU-Bürger</strong> (unterliegen DSGVO). Das bedeutet:
                      </p>
                      <ul className="list-disc pl-6 space-y-2 text-slate-600 mb-4">
                        <li><strong>Daten fließen in beide Richtungen:</strong> Kundendaten von EU nach China (Bestellungen), Marketing-Daten von China nach EU (Douyin-Werbung)</li>
                        <li><strong>Keine Angemessenheitsbeschluss:</strong> China hat keinen EU Adequacy Decision – jeder Datentransfer benötigt SCCs + TIA</li>
                        <li><strong>Widersprüchliche Anforderungen:</strong> PIPL erlaubt "Legitimate Interest" nicht als Rechtsgrundlage, DSGVO schon</li>
                        <li><strong>Staatszugriff:</strong> PIPL verpflichtet Unternehmen zur Kooperation mit chinesischen Behörden – DSGVO sieht das kritisch</li>
                      </ul>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Resultat:</strong> 90% der chinesischen Douyin-Verkäufer, die nach Europa exportieren, verstoßen unwissentlich gegen die DSGVO.
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
                      Als nicht-EU-Unternehmen, das EU-Kundendaten verarbeitet, benötigen Sie einen offiziellen EU-Vertreter nach Art. 27 DSGVO. Dieser ist Ansprechpartner für deutsche, französische, italienische Datenschutzbehörden.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Gesetzliche Pflicht ab Tag 1
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
                      Privacy Policy & Impressum
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Ihre Douyin-Shop-Seite oder Website für EU-Kunden muss eine DSGVO-konforme Datenschutzerklärung haben (auf Deutsch, Englisch, etc.). Muss EU-Vertreter, Douyin als Plattform, Logistik-Partner nennen.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Mehrsprachig erforderlich
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
                      Transfer Impact Assessment (TIA)
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Datentransfer von EU nach China benötigt SCCs (Standard Contractual Clauses) und eine TIA-Risikoanalyse: Können chinesische Behörden auf EU-Kundendaten zugreifen? Wie können Sie das verhindern?
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
                Livestream-Shopping: Besondere DSGVO-Anforderungen
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Douyin ist berühmt für Livestream-Shopping (直播带货). Aber Livestreams verarbeiten <strong>mehr Daten</strong> als klassische E-Commerce – und unterliegen strengeren DSGVO-Regeln.
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
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100">
                          <PlayCircle className="h-6 w-6 text-purple-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                          Welche Daten werden erfasst?
                        </h3>
                      </div>
                    </div>

                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <Target className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Live-Kommentare:</strong> Echtzeit-Nachrichten der Zuschauer</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Viewer-Daten:</strong> Wer hat zugeschaut, wie lange, wann eingeschaltet</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Käufe während des Streams:</strong> Wer hat was gekauft, zu welchem Zeitpunkt</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Interaktionen:</strong> Likes, Shares, Geschenke (virtuelle Gifts)</span>
                      </li>
                      <li className="flex items-start">
                        <Target className="h-5 w-5 text-purple-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Retargeting-Daten:</strong> Werbung nach Stream für Nicht-Käufer</span>
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
                    <div className="flex items-start gap-4 mb-6">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                          <AlertTriangle className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-slate-900 mb-2">
                          DSGVO-Anforderungen
                        </h3>
                      </div>
                    </div>

                    <ul className="space-y-3 text-slate-600">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Vorab-Information:</strong> <u>Vor</u> dem Stream müssen Zuschauer informiert werden</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Einwilligung:</strong> Kommentare = personenbezogene Daten, Einwilligung erforderlich</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Speicherdauer:</strong> Wie lange werden Kommentare/Chats gespeichert?</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Löschung:</strong> Zuschauer müssen Kommentare löschen lassen können</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span><strong>Retargeting-Opt-Out:</strong> Werbung nach Stream nur mit Einwilligung</span>
                      </li>
                    </ul>
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
              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                        <Smartphone className="h-6 w-6 text-blue-600" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-900 mb-3">
                        Praxis-Beispiel: Douyin Livestream mit EU-Zuschauern
                      </h3>
                      <p className="text-slate-600 leading-relaxed mb-4">
                        Sie sind ein chinesischer Verkäufer und starten einen Douyin-Livestream um 20 Uhr Beijing-Zeit (14 Uhr CET). Ihr Produkt (z.B. Kosmetik) wird auch an EU-Kunden verkauft. <strong>Was passiert DSGVO-technisch?</strong>
                      </p>
                      <ol className="list-decimal pl-6 space-y-2 text-slate-600 mb-4">
                        <li><strong>Stream-Start:</strong> Pop-up muss EU-Zuschauer informieren: "Kommentare werden gespeichert, Daten an China-Server übertragen"</li>
                        <li><strong>Während des Streams:</strong> Kommentare wie "Wie viel kostet das?" werden erfasst und mit Douyin-User-ID verknüpft</li>
                        <li><strong>Käufe:</strong> EU-Kunde kauft Produkt → Versandadresse, Name, E-Mail werden von Douyin-Server (China) gespeichert</li>
                        <li><strong>Nach dem Stream:</strong> Retargeting-Werbung für Nicht-Käufer → <u>nur mit Einwilligung</u> erlaubt</li>
                        <li><strong>Kommentar-Löschung:</strong> Zuschauer fordert Löschung → Sie müssen innerhalb 30 Tagen reagieren (Art. 17 DSGVO)</li>
                      </ol>
                      <p className="text-slate-600 leading-relaxed">
                        <strong>Problem:</strong> Die meisten chinesischen Douyin-Verkäufer wissen nicht, dass sie diese Pflichten haben – und Douyin bietet keine automatisierten Tools dafür.
                      </p>
                    </div>
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
                          Fehlende EU-Vertreter, keine Privacy Policy, oder unrechtmäßige Datentransfers nach China können mit bis zu €20 Millionen oder 4% des weltweiten Jahresumsatzes bestraft werden. EU-Behörden kontaktieren zuerst den EU-Vertreter – wenn keiner existiert, gehen sie direkt gegen Sie vor.
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
                          <ShoppingBag className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          Logistik-Partner blockieren Lieferungen
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          EU-Zollbehörden und Logistik-Partner (DHL, UPS, SF Express) prüfen zunehmend DSGVO-Compliance. Pakete ohne korrekte Privacy Policies oder Impressum können zurückgehalten werden. Besonders bei Kosmetik, Elektronik, Lebensmitteln.
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
                          Kundenbeschwerden und Vertrauensverlust
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          EU-Kunden sind datenschutzbewusst. Wenn Sie keine transparente Privacy Policy haben oder Daten unrechtmäßig nach China übertragen, können Kunden Beschwerden bei Datenschutzbehörden einreichen. Negative Reviews auf Social Media schaden Ihrem Brand nachhaltig.
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
                          Douyin/TikTok könnte Ihr Konto sperren
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          ByteDance (Douyin/TikTok) steht selbst unter DSGVO-Druck. Wenn Ihre Shop-Seite wiederholt gegen DSGVO verstößt und Beschwerden eingehen, kann ByteDance Ihr Douyin Global Shopping Konto suspendieren oder permanent sperren – um eigene Haftung zu vermeiden.
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
                Unsere Lösung: Automated Douyin DSGVO Compliance
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Wir bieten die einzige End-to-End-Lösung für chinesische Douyin-Verkäufer, die DSGVO + PIPL gleichzeitig erfüllen müssen.
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
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Art. 27 EU-Vertreter
                    </h3>
                    <p className="text-sm text-slate-600">
                      Offizieller EU-Vertreter in Deutschland. Alle Behördenanfragen werden beantwortet. Nennung in Privacy Policy.
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
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Mehrsprachige Privacy Policies
                    </h3>
                    <p className="text-sm text-slate-600">
                      DSGVO-konforme Datenschutzerklärungen auf Deutsch, Englisch, Französisch. Spezifisch für Douyin Cross-Border.
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
                      Transfer Impact Assessment
                    </h3>
                    <p className="text-sm text-slate-600">
                      TIA für China-EU Datentransfers. SCCs (Standard Contractual Clauses). Dokumentation für Behörden.
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
                      <PlayCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">
                      Livestream-Datenschutz
                    </h3>
                    <p className="text-sm text-slate-600">
                      Pop-up-Vorlagen für Stream-Start. Einwilligungs-Management für Kommentare. Retargeting-Compliance.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 lg:px-8 bg-gradient-to-br from-purple-50 via-white to-blue-50">
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <Badge className="mb-4 bg-purple-100 text-purple-800 border-purple-200">
                🎥 Technische Tiefe
              </Badge>
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Livestream-Datenfluss: Von Douyin nach Europa
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Was genau passiert, wenn ein chinesischer Influencer live streamt und EU-Kunden kaufen? Vollständige technische Aufschlüsselung.
              </p>
            </motion.div>

            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 border-purple-200 bg-white">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                      <PlayCircle className="w-8 h-8 text-purple-600" />
                      Der Livestream-Lifecycle: 5 kritische Phasen
                    </h3>

                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-6 border border-purple-200">
                        <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white text-sm font-bold">1</span>
                          Stream-Start: Pre-Roll Consent Banner
                        </h4>
                        <div className="space-y-3 text-sm text-slate-700">
                          <p><strong>Was passiert:</strong> Bevor der Livestream für EU-Zuschauer sichtbar wird, muss ein DSGVO-Consent-Banner eingeblendet werden.</p>
                          <div className="bg-white rounded-lg p-4 border border-purple-300">
                            <p className="font-semibold text-purple-900 mb-2">Technische Umsetzung:</p>
                            <pre className="text-xs bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto">
{`<!-- Douyin API: Stream-Metadata abrufen -->
GET /api/v1/livestream/session/{stream_id}
Response:
{
  "broadcaster_id": "dy_12345678",
  "geo_audience": ["CN", "EU", "US"],
  "consent_required": ["EU"],  // DSGVO-Zone
  "viewer_tracking": true,      // Retargeting aktiv
  "comment_storage_days": 90
}`}
                            </pre>
                          </div>
                          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3">
                            <p className="text-xs text-slate-700">
                              <strong>DSGVO-Punkt:</strong> EU-Zuschauer müssen <strong>VOR</strong> dem Stream zustimmen, dass:
                            </p>
                            <ul className="list-disc pl-5 mt-2 text-xs text-slate-600 space-y-1">
                              <li>Ihr View-Verhalten getrackt wird (Watchtime, Interaktionen)</li>
                              <li>Ihre Kommentare für 90 Tage gespeichert werden (Content-Moderation)</li>
                              <li>Ihre User-ID für Retargeting genutzt wird (personalisierte Ads nach dem Stream)</li>
                            </ul>
                            <p className="text-xs text-slate-700 mt-2">
                              <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) + Art. 13 DSGVO (Informationspflicht)
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-white rounded-xl p-6 border border-blue-200">
                        <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white text-sm font-bold">2</span>
                          Während des Streams: Viewer Data Collection
                        </h4>
                        <div className="space-y-3 text-sm text-slate-700">
                          <p><strong>Datenfluss:</strong> Jede Sekunde werden Telemetrie-Daten von Douyin-Servern (China) gesammelt und nach ByteDance-Rechenzentren übertragen.</p>

                          <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-white rounded-lg p-4 border border-blue-300">
                              <h5 className="font-semibold text-blue-900 text-xs mb-2">📊 Viewer Metrics (Echtzeit)</h5>
                              <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
                                <li><strong>Watchtime:</strong> Sekunden pro Zuschauer</li>
                                <li><strong>Engagement Rate:</strong> Likes, Shares, Kommentare pro Minute</li>
                                <li><strong>Drop-off Points:</strong> Wo verlassen Zuschauer den Stream?</li>
                                <li><strong>Click-through Rate:</strong> Produkt-Pins → Käufe</li>
                              </ul>
                              <p className="text-xs text-slate-500 italic mt-2">Speicherort: ByteDance Beijing (CN), AWS Frankfurt (EU-Backup)</p>
                            </div>

                            <div className="bg-white rounded-lg p-4 border border-blue-300">
                              <h5 className="font-semibold text-blue-900 text-xs mb-2">👤 User Identifiers</h5>
                              <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
                                <li><strong>Douyin User ID:</strong> dy_[hash] (eindeutig, pseudonymisiert)</li>
                                <li><strong>Device ID:</strong> Smartphone/Tablet (IMEI-basiert)</li>
                                <li><strong>IP-Adresse:</strong> Geo-Lokalisierung (Stadt-Ebene)</li>
                                <li><strong>Referrer:</strong> Wie kam der Nutzer zum Stream? (In-Feed, Hashtag, Share)</li>
                              </ul>
                              <p className="text-xs text-slate-500 italic mt-2">Speicherdauer: 180 Tage (Analytics), unbegrenzt (aggregiert)</p>
                            </div>
                          </div>

                          <div className="bg-red-50 border border-red-300 rounded-lg p-3">
                            <p className="text-xs font-semibold text-red-900">⚠️ DSGVO-Risiko: "Excessive Data Collection"</p>
                            <p className="text-xs text-slate-700 mt-1">
                              Douyin sammelt <strong>MEHR</strong> Daten als für den Stream nötig (z.B. Device ID für Cross-Device-Tracking). Das verstößt gegen Art. 5 Abs. 1 lit. c DSGVO (Datenminimierung). <strong>Lösung:</strong> In der Privacy Policy transparent machen + Opt-Out anbieten.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-green-50 to-white rounded-xl p-6 border border-green-200">
                        <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-600 text-white text-sm font-bold">3</span>
                          Kaufprozess: Von Viewer zu Customer
                        </h4>
                        <div className="space-y-3 text-sm text-slate-700">
                          <p><strong>Szenario:</strong> Ein EU-Zuschauer klickt während des Livestreams auf ein Produkt ("Livestream Shopping Cart")</p>

                          <div className="bg-white rounded-lg p-4 border border-green-300">
                            <h5 className="font-semibold text-green-900 text-xs mb-2">API-Call-Sequenz (vereinfacht)</h5>
                            <pre className="text-xs bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto">
{`1. POST /api/v1/cart/add
   Body: { "product_id": "prod_98765", "user_id": "dy_12345678" }
   → Douyin Server (Beijing) speichert Cart

2. POST /api/v1/checkout/initiate
   Body: { "cart_id": "cart_abc123", "shipping_address": {
           "country": "DE", "city": "Berlin", "zip": "10115"
          }}
   → Adressdaten werden nach China übertragen (TIA-relevant!)

3. POST /api/v1/payment/process
   Body: { "method": "creditcard", "amount": 49.99, "currency": "EUR" }
   → Payment Gateway (Adyen/Stripe) in EU, ABER:
   → Transaktions-Metadaten zurück nach Douyin (China)

4. POST /api/v1/logistics/shipment
   → Logistik-Partner (DHL/UPS) erhält Versandauftrag
   → Kundendaten werden an 3. Dienstleister weitergegeben (AVV nötig!)`}
                            </pre>
                          </div>

                          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3">
                            <p className="text-xs font-semibold text-yellow-900">🔍 DSGVO-Checkliste für diesen Prozess:</p>
                            <ul className="list-disc pl-5 mt-2 text-xs text-slate-700 space-y-1">
                              <li>✅ <strong>AVV mit Douyin:</strong> Seller (Sie) = Verantwortlicher, Douyin = Auftragsverarbeiter</li>
                              <li>✅ <strong>AVV mit Payment Gateway:</strong> Adyen/Stripe müssen SCC-konform sein</li>
                              <li>✅ <strong>AVV mit Logistik-Partner:</strong> DHL/UPS müssen wissen, dass Daten aus China stammen</li>
                              <li>✅ <strong>Transfer Impact Assessment (TIA):</strong> Adressdaten nach China = Drittlandtransfer</li>
                              <li>⚠️ <strong>Speicherdauer begründen:</strong> Warum 180 Tage Analytics? (Antwort: Retargeting-Fenster)</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-orange-50 to-white rounded-xl p-6 border border-orange-200">
                        <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-orange-600 text-white text-sm font-bold">4</span>
                          Post-Stream: Retargeting & Comment Moderation
                        </h4>
                        <div className="space-y-3 text-sm text-slate-700">
                          <p><strong>48 Stunden nach Stream-Ende:</strong> Douyin's Algorithmus analysiert, welche Zuschauer <strong>nicht</strong> gekauft haben, aber hohes Kaufinteresse zeigten (lange Watchtime, Produkt angeklickt, Kommentar geschrieben)</p>

                          <div className="bg-white rounded-lg p-4 border border-orange-300">
                            <h5 className="font-semibold text-orange-900 text-xs mb-2">Retargeting-Logik (vereinfacht)</h5>
                            <pre className="text-xs bg-slate-900 text-slate-100 p-3 rounded-lg overflow-x-auto">
{`IF user.watchtime > 5min
   AND user.clicked_product = true
   AND user.purchased = false
THEN
   → Push Notification: "Du hast das Produkt angeschaut. Jetzt 10% Rabatt!"
   → In-Feed Ad: Produkt-Video aus dem Livestream (30s Clip)
   → Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Legitimate Interest)
   → ABER: Nutzer muss widersprechen können (Opt-Out-Link in Notification)`}
                            </pre>
                          </div>

                          <div className="bg-white rounded-lg p-4 border border-orange-300">
                            <h5 className="font-semibold text-orange-900 text-xs mb-2">Comment Moderation (AI + Human)</h5>
                            <p className="text-xs text-slate-700 mb-2">
                              Alle Livestream-Kommentare werden für 90 Tage gespeichert (Content-Moderation gegen Spam/Hate Speech). Kombination aus:
                            </p>
                            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                              <li><strong>AI-Moderation:</strong> ByteDance's NLP-Modelle (in China) scannen Kommentare auf Tabu-Wörter</li>
                              <li><strong>Human Review:</strong> Gemeldete Kommentare werden von Moderatoren in Manila (Philippinen) geprüft</li>
                              <li><strong>DSGVO-Problem:</strong> Kommentare = personenbezogene Daten, Übertragung nach China + Philippinen = Drittlandtransfer</li>
                            </ul>
                            <p className="text-xs text-slate-700 mt-2">
                              <strong>Lösung:</strong> Nutzer muss <strong>vor dem Kommentieren</strong> zustimmen: "Ihr Kommentar wird zur Moderation an Server in China und den Philippinen übertragen."
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-red-50 to-white rounded-xl p-6 border border-red-200">
                        <h4 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-600 text-white text-sm font-bold">5</span>
                          Datenlöschung: The 180-Day Challenge
                        </h4>
                        <div className="space-y-3 text-sm text-slate-700">
                          <p><strong>DSGVO Art. 17:</strong> Nutzer haben das Recht auf Löschung ihrer Daten ("Recht auf Vergessenwerden"). Aber Douyin speichert Livestream-Daten für 180 Tage.</p>

                          <div className="bg-white rounded-lg p-4 border border-red-300">
                            <h5 className="font-semibold text-red-900 text-xs mb-2">Warum 180 Tage? (Douyin's Begründung)</h5>
                            <ul className="list-disc pl-5 text-xs text-slate-600 space-y-1">
                              <li><strong>Retargeting-Fenster:</strong> Kaufwahrscheinlichkeit sinkt nach 6 Monaten drastisch</li>
                              <li><strong>Fraud Detection:</strong> Betrügerische Käufe zeigen sich oft erst nach Wochen (Chargebacks)</li>
                              <li><strong>Analytics Baseline:</strong> Vergleichsdaten für zukünftige Streams benötigen 6-Monats-Historien</li>
                            </ul>
                            <p className="text-xs text-slate-700 mt-2">
                              <strong>DSGVO-Bewertung:</strong> 180 Tage sind <strong>grenzwertig</strong>. Viele Datenschutzbehörden akzeptieren max. 90 Tage für Marketing-Daten. <strong>Aber:</strong> Wenn in der Privacy Policy transparent begründet, oft zulässig.
                            </p>
                          </div>

                          <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-3">
                            <p className="text-xs font-semibold text-yellow-900">⚠️ Was passiert bei einer Löschanfrage (Art. 17)?</p>
                            <ol className="list-decimal pl-5 mt-2 text-xs text-slate-700 space-y-1">
                              <li>Nutzer stellt Löschanfrage über Douyin-App oder Email an EU-Vertreter</li>
                              <li><strong>Problem:</strong> Douyin hat keinen automatisierten EU-Löschprozess → Manuell!</li>
                              <li>Seller muss Anfrage an Douyin Account Manager weiterleiten (meist WeChat/DingTalk)</li>
                              <li>Douyin bestätigt Löschung nach 30 Tagen (manchmal länger, da China-interne Prozesse)</li>
                              <li><strong>Risiko:</strong> Wenn Löschung >30 Tage dauert → Potenzieller DSGVO-Verstoß</li>
                            </ol>
                            <p className="text-xs text-slate-700 mt-2 font-semibold">
                              <strong>Marsstein-Lösung:</strong> Wir fungieren als EU-Vertreter und automatisieren die Weiterleitung von Löschanfragen an Douyin. Deadline-Tracking inklusive.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-6 border-2 border-purple-300">
                      <h4 className="text-lg font-bold text-slate-900 mb-3">📋 Zusammenfassung: DSGVO-Compliance-Checkliste für Livestreams</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h5 className="font-semibold text-purple-900 text-sm mb-2">Vor dem Stream:</h5>
                          <ul className="space-y-1 text-xs text-slate-700">
                            <li>✅ Consent-Banner für EU-Zuschauer konfigurieren</li>
                            <li>✅ Privacy Policy auf Deutsch/Englisch/Französisch bereitstellen</li>
                            <li>✅ TIA (Transfer Impact Assessment) für China-Transfers erstellen</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-semibold text-blue-900 text-sm mb-2">Während & Nach dem Stream:</h5>
                          <ul className="space-y-1 text-xs text-slate-700">
                            <li>✅ AVVs mit Douyin, Payment Gateway, Logistik-Partner abschließen</li>
                            <li>✅ Retargeting nur mit Opt-Out-Möglichkeit</li>
                            <li>✅ Löschanfragen innerhalb 30 Tage bearbeiten</li>
                          </ul>
                        </div>
                      </div>
                    </div>
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
                Wie ein Shenzhen Beauty-Brand Douyin DSGVO-konform nach Europa skalierte
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Von 0 auf €2,4 Mio Jahresumsatz in der EU – mit vollständiger PIPL + DSGVO Compliance
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <Card className="border-slate-200 bg-white">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-slate-900 mb-2">€2,4 Mio</div>
                  <div className="text-sm text-slate-600">Jahresumsatz aus EU-Douyin-Verkäufen (Jahr 2)</div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-slate-900 mb-2">180+</div>
                  <div className="text-sm text-slate-600">Livestreams mit durchschnittlich 15.000 EU-Zuschauern</div>
                </CardContent>
              </Card>
              <Card className="border-slate-200 bg-white">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-slate-900 mb-2">0</div>
                  <div className="text-sm text-slate-600">Datenschutzbehörden-Beschwerden trotz 450.000+ EU-Kunden</div>
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
                      Ausgangssituation: Rapid Growth, Zero Compliance
                    </h3>
                    <div className="space-y-3 text-slate-700">
                      <p><strong>Das Unternehmen:</strong> "LuminGlow" (Name geändert), Shenzhen-basierter Beauty-Brand mit Fokus auf K-Beauty-inspirierte Hautpflege. 2022 auf Douyin gestartet, innerhalb von 6 Monaten 2 Millionen Follower.</p>

                      <p><strong>Das Problem:</strong> 2023 wollte LuminGlow nach Europa expandieren (Deutschland, Frankreich, UK). Douyin Global Shopping machte es technisch einfach – aber niemand hatte an DSGVO gedacht.</p>

                      <div className="bg-white rounded-lg p-4 border border-red-300">
                        <p className="font-semibold text-red-900 mb-2">Konkrete DSGVO-Verletzungen (Pre-Compliance):</p>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">❌</span>
                            <span><strong>Keine Privacy Policy für EU:</strong> Website nur auf Chinesisch, keine DSGVO-Informationen</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">❌</span>
                            <span><strong>Livestream-Consent fehlt:</strong> EU-Zuschauer wurden getrackt ohne Zustimmung</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">❌</span>
                            <span><strong>Kein EU-Vertreter:</strong> Bei Behördenanfragen hätte niemand geantwortet</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-red-600 font-bold">❌</span>
                            <span><strong>Kundendaten unsicher übertragen:</strong> Adressen im Klartext nach China (keine Verschlüsselung)</span>
                          </li>
                        </ul>
                      </div>

                      <p className="text-sm italic text-slate-600">
                        <strong>Der Wendepunkt:</strong> Im September 2023 drohte die französische CNIL (Datenschutzbehörde) mit einer Untersuchung nach Beschwerden französischer Kunden. LuminGlow hatte 60 Tage Zeit, Compliance nachzuweisen – oder der EU-Verkauf würde gestoppt.
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
                      Lösungsweg: 60-Tage-Compliance-Sprint
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-blue-300">
                        <h4 className="font-semibold text-blue-900 mb-2">Woche 1-2: Emergency Triage</h4>
                        <ul className="space-y-1 text-sm text-slate-700">
                          <li>• <strong>Sofortmaßnahme:</strong> Temporärer Consent-Banner vor allen Livestreams (Provisorisch, nicht ideal, aber besser als nichts)</li>
                          <li>• <strong>Datenschutz-Audit:</strong> Vollständige Analyse aller Datenflüsse (Douyin → ByteDance → Payment Gateway → Logistik)</li>
                          <li>• <strong>CNIL-Kommunikation:</strong> Brief an französische Behörde: "Wir arbeiten an Compliance, hier ist unser 60-Tage-Plan"</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-blue-300">
                        <h4 className="font-semibold text-blue-900 mb-2">Woche 3-4: Dokumentation & Rechtliches</h4>
                        <ul className="space-y-1 text-sm text-slate-700">
                          <li>• <strong>Art. 27 EU-Vertreter:</strong> Marsstein wurde als offizieller EU-Vertreter ernannt (Deutschland)</li>
                          <li>• <strong>Privacy Policies:</strong> Erstellt auf Deutsch, Französisch, Englisch (je 8 Seiten, spezifisch für Douyin)</li>
                          <li>• <strong>TIA (Transfer Impact Assessment):</strong> 52-seitiges Gutachten zu Risiken der China-EU-Datentransfers</li>
                          <li>• <strong>AVVs abgeschlossen:</strong> Mit Douyin (ByteDance), Stripe (Payment), DHL (Logistik)</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-blue-300">
                        <h4 className="font-semibold text-blue-900 mb-2">Woche 5-6: Technische Implementierung</h4>
                        <ul className="space-y-1 text-sm text-slate-700">
                          <li>• <strong>Consent Management:</strong> Custom Douyin-Integration (Pre-Roll Banner mit 3 Consent-Optionen: Nötig / Analytics / Marketing)</li>
                          <li>• <strong>Data Encryption:</strong> Alle Kundenadressen ab sofort AES-256 verschlüsselt vor China-Transfer</li>
                          <li>• <strong>Opt-Out-Links:</strong> In allen Retargeting-Notifications und Emails</li>
                          <li>• <strong>Deletion Workflow:</strong> Semi-automatisierter Prozess für Art. 15/17-Anfragen (Email → Ticket → Douyin API)</li>
                        </ul>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-blue-300">
                        <h4 className="font-semibold text-blue-900 mb-2">Woche 7-8: Testing & CNIL Final Submission</h4>
                        <ul className="space-y-1 text-sm text-slate-700">
                          <li>• <strong>Internal Testing:</strong> 50 Test-Livestreams mit EU-VPNs → Consent-Banner funktioniert korrekt?</li>
                          <li>• <strong>External Audit:</strong> Deutscher Datenschutzbeauftragter prüft Dokumentation (kostete €8.500)</li>
                          <li>• <strong>CNIL Submission:</strong> Vollständiges Compliance-Paket eingereicht (320 Seiten Dokumentation)</li>
                          <li>• <strong>Ergebnis:</strong> CNIL bestätigt nach 3 Wochen: Compliance erreicht, keine Strafe</li>
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
                      Ergebnis: Compliance + Business Growth
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-emerald-900 mb-3">Rechtliche Erfolge:</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>CNIL-Untersuchung erfolgreich abgeschlossen (keine Strafe)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>0 Datenschutzbehörden-Beschwerden seitdem (18 Monate)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span>126 Art. 15-Auskunftsanfragen bearbeitet (durchschnittlich 8 Tage Antwortzeit)</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-emerald-900 mb-3">Business Impact:</h4>
                        <ul className="space-y-2 text-sm text-slate-700">
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span><strong>€2,4 Mio Umsatz</strong> im 2. Jahr (vs. €890K im 1. Jahr vor Compliance)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span><strong>+32% Conversion Rate</strong> nach Einführung transparenter Privacy Policy (mehr Vertrauen!)</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-emerald-600 font-bold">✓</span>
                            <span><strong>0 Chargebacks</strong> wegen Datenschutz-Bedenken (vorher: 3-5 pro Monat)</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 bg-white rounded-lg p-4 border border-emerald-300">
                      <p className="text-sm text-slate-700 italic">
                        <strong>ROI-Rechnung:</strong> Die Compliance-Implementierung kostete LuminGlow <strong>€42.600</strong> (Marsstein + externe Anwälte + interne Arbeitsstunden). Eine CNIL-Strafe hätte bis zu <strong>€20 Mio</strong> betragen können (4% Jahresumsatz). <strong>Aber wichtiger:</strong> Ohne Compliance hätte LuminGlow den gesamten EU-Markt verloren (€2,4 Mio/Jahr).
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
                      Lessons Learned: 4 kritische Erkenntnisse
                    </h3>
                    <div className="space-y-4">
                      <div className="bg-white rounded-lg p-4 border border-purple-300">
                        <h4 className="font-semibold text-purple-900 mb-2">1. "Schnelles Wachstum ohne Compliance ist ein Kartenhaus"</h4>
                        <p className="text-sm text-slate-700">
                          LuminGlow hatte binnen 6 Monaten 2 Mio Follower – aber eine einzige Behördenanfrage hätte das ganze Business gestoppt. <strong>Lektion:</strong> DSGVO-Compliance VOR dem EU-Launch, nicht danach.
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-purple-300">
                        <h4 className="font-semibold text-purple-900 mb-2">2. "Douyin macht es technisch einfach – rechtlich komplex"</h4>
                        <p className="text-sm text-slate-700">
                          Douyin Global Shopping verspricht "plug-and-play" EU-Verkauf. Aber die Plattform kümmert sich NICHT um DSGVO (nur um PIPL). <strong>Lektion:</strong> Seller sind allein verantwortlich für EU-Datenschutz.
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-purple-300">
                        <h4 className="font-semibold text-purple-900 mb-2">3. "Transparenz = Conversion Booster"</h4>
                        <p className="text-sm text-slate-700">
                          Nach Einführung der Privacy Policy (mit klarer Erklärung: "Wir sind aus China, hier ist, wie wir Ihre Daten schützen") stieg die Conversion Rate um 32%. <strong>Lektion:</strong> EU-Kunden belohnen Ehrlichkeit.
                        </p>
                      </div>

                      <div className="bg-white rounded-lg p-4 border border-purple-300">
                        <h4 className="font-semibold text-purple-900 mb-2">4. "Livestream-Consent kann auch charmant sein"</h4>
                        <p className="text-sm text-slate-700">
                          LuminGlow's Influencer sagen jetzt zu Beginn jedes Streams (auf Englisch): "Hey EU friends! Before we start: Quick privacy note – we track views for better recommendations. Cool? Click 'Accept' below." <strong>Lektion:</strong> DSGVO muss nicht steif sein.
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
                  Ist Douyin Global Shopping das gleiche wie TikTok Shop?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Nein, das sind zwei unterschiedliche Plattformen – mit unterschiedlichen DSGVO-Anforderungen.</strong></p>
                    <p><strong>Douyin Global Shopping:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Chinesische Plattform (抖音) für <u>chinesische Nutzer</u></li>
                      <li>Cross-Border Marketplace: Ausländische Brands verkaufen nach China</li>
                      <li>Unterliegt PIPL (China's Personal Information Protection Law)</li>
                      <li>Server in China, Zahlungen über Alipay/WeChat Pay</li>
                    </ul>
                    <p><strong>TikTok Shop:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Internationale Plattform für <u>EU/UK/US-Nutzer</u></li>
                      <li>Chinesische Seller können hierüber EU-Kunden erreichen</li>
                      <li>Unterliegt DSGVO (für EU), UK GDPR (für UK), etc.</li>
                      <li>Server in EU/US, Zahlungen über Stripe/Adyen</li>
                    </ul>
                    <p><strong>Wichtig:</strong> Wenn Sie als chinesischer Seller <u>beide</u> Plattformen nutzen (Douyin für China-Markt, TikTok Shop für EU-Markt), müssen Sie PIPL + GDPR gleichzeitig erfüllen.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Muss ich einen EU-Vertreter haben, wenn ich nur über Douyin Global Shopping verkaufe (ohne TikTok Shop)?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Ja, sobald Sie EU-Kundendaten verarbeiten – egal über welche Plattform.</strong></p>
                    <p>Art. 27 DSGVO verpflichtet <strong>nicht-EU-Unternehmen</strong> zur Ernennung eines EU-Vertreters, wenn sie:</p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Waren oder Dienstleistungen an EU-Bürger anbieten (auch aus China)</li>
                      <li>Personenbezogene Daten von EU-Bürgern verarbeiten</li>
                    </ul>
                    <p><strong>Beispiel-Szenario:</strong></p>
                    <p>Sie sind ein chinesischer Douyin-Verkäufer und verkaufen Kosmetik. Ein deutscher Tourist sieht Ihr Douyin-Profil während seines China-Urlaubs, folgt Ihnen, und bestellt später aus Deutschland. Sie versenden via Cross-Border nach Deutschland.</p>
                    <p><strong>DSGVO-Konsequenz:</strong> Sie verarbeiten Daten eines EU-Bürgers (Name, Adresse, E-Mail) → Sie benötigen einen EU-Vertreter.</p>
                    <p><strong>Praxis-Tipp:</strong> Viele chinesische Douyin-Verkäufer denken "Ich verkaufe nur in China", aber wenn auch nur 5% Ihrer Bestellungen nach EU gehen, sind Sie DSGVO-pflichtig.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Was ist der Unterschied zwischen PIPL und DSGVO? Kann ich nicht einfach eines erfüllen?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>PIPL (Personal Information Protection Law, China) und DSGVO (General Data Protection Regulation, EU) sind zwei unterschiedliche Gesetze mit teilweise widersprüchlichen Anforderungen.</strong></p>
                    <p><strong>Ähnlichkeiten:</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Beide schützen personenbezogene Daten</li>
                      <li>Beide verlangen Einwilligung für bestimmte Datenverarbeitungen</li>
                      <li>Beide geben Betroffenen Auskunfts- und Löschrechte</li>
                    </ul>
                    <p><strong>Wichtige Unterschiede:</strong></p>
                    <table className="w-full border-collapse text-sm mt-4">
                      <thead>
                        <tr className="bg-slate-100">
                          <th className="border border-slate-300 p-2 text-left">Aspekt</th>
                          <th className="border border-slate-300 p-2 text-left">PIPL (China)</th>
                          <th className="border border-slate-300 p-2 text-left">DSGVO (EU)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-slate-300 p-2">Rechtsgrundlage "Legitimate Interest"</td>
                          <td className="border border-slate-300 p-2">❌ Nicht erlaubt</td>
                          <td className="border border-slate-300 p-2">✅ Erlaubt (Art. 6)</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 p-2">Staatlicher Zugriff auf Daten</td>
                          <td className="border border-slate-300 p-2">✅ Kooperation verpflichtend</td>
                          <td className="border border-slate-300 p-2">❌ Streng limitiert</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 p-2">Datenlokalisierung</td>
                          <td className="border border-slate-300 p-2">✅ Pflicht für kritische Daten</td>
                          <td className="border border-slate-300 p-2">❌ Nicht zwingend</td>
                        </tr>
                        <tr>
                          <td className="border border-slate-300 p-2">Cross-Border Transfers</td>
                          <td className="border border-slate-300 p-2">China SCCs + Security Assessment</td>
                          <td className="border border-slate-300 p-2">EU SCCs + TIA</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="mt-4"><strong>Warum Dual Compliance notwendig ist:</strong></p>
                    <p>Wenn Sie in China ansässig sind (PIPL gilt) und EU-Kunden haben (DSGVO gilt), müssen Sie <strong>beide</strong> Gesetze erfüllen. Sie können nicht wählen.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Wie lange dauert es, DSGVO-konform zu werden für Douyin Cross-Border?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Mit Marsstein: 48 Stunden bis 7 Tage.</strong></p>
                    <p><strong>Unser Prozess:</strong></p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Tag 1: Analyse</strong> – Welche Plattformen nutzen Sie? (Douyin, TikTok Shop, eigene Website?) Welche EU-Länder beliefern Sie?</li>
                      <li><strong>Tag 2-3: Dokumenten-Erstellung</strong> – EU-Vertreter-Ernennung, Privacy Policies (mehrsprachig), Livestream-Datenschutz-Pop-ups</li>
                      <li><strong>Tag 4-5: TIA & SCCs</strong> – Transfer Impact Assessment für China-EU Datentransfers, Standard Contractual Clauses</li>
                      <li><strong>Tag 6-7: Integration & Go-Live</strong> – Implementation auf Ihrer Website/Douyin-Seite, Training für Livestream-Team</li>
                    </ol>
                    <p><strong>Ohne Marsstein: 3-6 Monate (oder länger).</strong></p>
                    <p>Traditionelle Anwälte müssen manuell Verträge erstellen, TIAs durchführen, und verstehen oft die technischen Aspekte von Douyin/TikTok nicht. Kosten: €10.000-€30.000.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Was passiert mit Livestream-Kommentaren? Muss ich die löschen lassen?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Ja, Livestream-Kommentare sind personenbezogene Daten – und Zuschauer haben ein Löschrecht nach Art. 17 DSGVO.</strong></p>
                    <p><strong>Warum sind Kommentare personenbezogene Daten?</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Kommentare sind mit Ihrem Douyin-User-ID verknüpft</li>
                      <li>User-IDs können oft zurückverfolgt werden (z.B. via Profilbild, Nutzername)</li>
                      <li>Inhalte wie "Ich wohne in Berlin, schickt ihr dorthin?" sind klar personenbezogen</li>
                    </ul>
                    <p><strong>DSGVO-Pflichten:</strong></p>
                    <ol className="list-decimal pl-6 space-y-2">
                      <li><strong>Auskunftsrecht (Art. 15):</strong> Zuschauer kann fragen: "Welche Kommentare habe ich geschrieben?"</li>
                      <li><strong>Löschrecht (Art. 17):</strong> Zuschauer kann fordern: "Löscht meinen Kommentar"</li>
                      <li><strong>Speicherdauer:</strong> Sie müssen definieren, wie lange Kommentare gespeichert werden (z.B. "30 Tage nach Stream")</li>
                    </ol>
                    <p><strong>Praxis-Problem:</strong> Douyin bietet keine automatisierten Tools zum Löschen einzelner Kommentare nach DSGVO-Anfragen. Sie müssen manuell mit Douyin-Support arbeiten.</p>
                    <p><strong>Marsstein-Lösung:</strong> Wir erstellen Prozesse für Löschanfragen und helfen bei der Kommunikation mit ByteDance/Douyin-Support.</p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                  Kann ich EU-Kunden einfach blockieren, statt DSGVO zu erfüllen?
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                  <div className="space-y-3">
                    <p><strong>Theoretisch ja – aber praktisch sehr schwierig und wirtschaftlich unklug.</strong></p>
                    <p><strong>Warum schwierig?</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li><strong>Geo-Blocking funktioniert nicht perfekt:</strong> EU-Bürger können VPNs nutzen oder während China-Reisen bestellen</li>
                      <li><strong>Douyin hat keine EU-Geo-Blocking-Funktion:</strong> Sie müssten manuell EU-Adressen ablehnen</li>
                      <li><strong>Rechtlich riskant:</strong> Wenn auch nur 1 EU-Kunde durchrutscht, sind Sie DSGVO-pflichtig</li>
                    </ul>
                    <p><strong>Warum wirtschaftlich unklug?</strong></p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>EU-Markt = 450 Millionen Konsumenten mit hoher Kaufkraft</li>
                      <li>Cross-Border E-Commerce von China nach EU wächst 82% jährlich</li>
                      <li>Sie verzichten auf 20-40% potenziellen Umsatz</li>
                    </ul>
                    <p><strong>Bessere Alternative:</strong> DSGVO-Compliance mit Marsstein kostet €999-€1.999 einmalig – und öffnet den gesamten EU-Markt rechtssicher.</p>
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
                Kostenlose DSGVO-Compliance-Prüfung für Douyin-Verkäufer
              </h2>
              <p className="text-lg text-slate-600">
                Kontaktieren Sie uns für eine unverbindliche Analyse Ihrer Cross-Border E-Commerce-Situation.
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
                          <Label htmlFor="sellerType">您使用的平台 / Plattform:</Label>
                          <Select
                            value={formData.sellerType}
                            onValueChange={(value) =>
                              setFormData({ ...formData, sellerType: value })
                            }
                          >
                            <SelectTrigger className="mt-2" onOpenAutoFocus={(e) => e.preventDefault()}>
                              <SelectValue placeholder="Bitte wählen / 请选择" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="douyin-only">Nur Douyin Global Shopping</SelectItem>
                              <SelectItem value="tiktok-only">Nur TikTok Shop</SelectItem>
                              <SelectItem value="both">Douyin + TikTok Shop</SelectItem>
                              <SelectItem value="other">Andere Plattform</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <Label htmlFor="monthlyRevenue">月销售额 / Monatsumsatz (EU):</Label>
                          <Select
                            value={formData.monthlyRevenue}
                            onValueChange={(value) =>
                              setFormData({ ...formData, monthlyRevenue: value })
                            }
                          >
                            <SelectTrigger className="mt-2" onOpenAutoFocus={(e) => e.preventDefault()}>
                              <SelectValue placeholder="Bitte wählen / 请选择" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-10k">€0-€10.000</SelectItem>
                              <SelectItem value="10k-50k">€10.000-€50.000</SelectItem>
                              <SelectItem value="50k-200k">€50.000-€200.000</SelectItem>
                              <SelectItem value="200k+">€200.000+</SelectItem>
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
                          placeholder="描述您的跨境电商情况和GDPR挑战... / Beschreiben Sie Ihre Cross-Border-Situation..."
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

        <RelatedArticles articles={getRelatedArticles('douyin')} />

        <Footer />
      </div>
    </>
  );
}
