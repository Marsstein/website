import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  AlertCircle,
  FileText,
  Euro,
  Users,
  ShoppingCart,
  CheckCircle,
  Clock,
  Zap,
  Globe,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
  ShieldCheck,
  BookOpen,
  Award,
  TrendingUp,
  Package,
  AlertTriangle,
  FileCheck,
  Scale,
  Building2,
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

export default function DsgvoAmazonSellersChina() {
  const [salesVolume, setSalesVolume] = useState("");
  const [euRep, setEuRep] = useState("no");
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
      salesVolume,
      euRep,
      platform: "Amazon",
    };

    console.log("Amazon Seller Form submitted:", fullFormData);

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
      setSalesVolume("");
      setEuRep("no");
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
        <title>DSGVO für Amazon Seller aus China - Vollständige Compliance-Lösung | Marsstein</title>
        <meta
          name="description"
          content="Komplette DSGVO-Lösung für chinesische Amazon-Verkäufer. Art. 27 EU-Vertreter, Datenschutzerklärung & alle Pflichtdokumente. Vermeide Account-Sperrungen auf Amazon.de, .fr, .it, .es. Automatisiert in 48h."
        />
        <meta
          name="keywords"
          content="Amazon Seller DSGVO, Amazon FBA Datenschutz, Amazon GDPR China, EU Vertreter Amazon, Art 27 Amazon Seller, Amazon Account Sperrung DSGVO, Amazon Seller Central Deutschland, Amazon Europe GDPR, Datenschutz Amazon China Verkäufer"
        />
        <link rel="canonical" href="https://marsstein.ai/dsgvo-amazon-sellers-china" />
        <meta property="og:title" content="DSGVO für Amazon Seller aus China | Marsstein" />
        <meta
          property="og:description"
          content="Komplette DSGVO-Lösung für chinesische Amazon-Verkäufer. Art. 27 EU-Vertreter & alle Pflichtdokumente in 48h."
        />
        <meta property="og:url" content="https://marsstein.ai/dsgvo-amazon-sellers-china" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DSGVO für Amazon Seller aus China | Marsstein" />
        <meta
          name="twitter:description"
          content="Komplette DSGVO-Lösung für chinesische Amazon-Verkäufer. Art. 27 EU-Vertreter & alle Pflichtdokumente in 48h."
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
                { label: 'Amazon Sellers' }
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
                <ShoppingCart className="w-4 h-4 mr-2" />
                Speziell für Amazon FBA & FBM Seller aus China
              </Badge>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                DSGVO-Compliance für chinesische Amazon-Verkäufer in der EU
              </h1>

              <p className="mb-4 text-xl leading-8 text-slate-300">
                Schützen Sie Ihren Amazon-Account vor DSGVO-bedingten Sperrungen. Komplette Datenschutz-Lösung in 48 Stunden.
              </p>

              <p className="mb-12 text-lg leading-8 text-slate-400">
                Art. 27 EU-Vertreter, Privacy Policy, AGB und alle Pflichtdokumente für Amazon Seller Central – automatisch generiert, rechtssicher, sofort einsetzbar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#e24e1b] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#d63f14] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:ring-offset-2"
                >
                  Jetzt Amazon-Account absichern
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
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Warum DSGVO für Amazon-Seller aus China existenziell wichtig ist
              </h2>
              <p className="text-lg text-slate-600">
                Seit 2023 verschärft Amazon die DSGVO-Kontrollen massiv. Accounts ohne vollständige Compliance-Dokumente werden gesperrt – oft ohne Vorwarnung.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
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
                          <AlertCircle className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          Account-Sperrung ohne Vorwarnung
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Amazon verlangt seit 2023 einen vollständigen DSGVO-Nachweis von allen Sellern, die EU-Kundendaten verarbeiten. Fehlt ein Art. 27 EU-Vertreter oder die Datenschutzerklärung ist unvollständig, wird Ihr Account innerhalb von 48h gesperrt – ohne Umsatz, ohne Zugriff auf Einnahmen.
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
                          <FileText className="h-6 w-6 text-orange-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          Komplexe Dokumenten-Anforderungen
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Amazon verlangt eine spezifische Kombination aus Dokumenten: Privacy Policy nach DSGVO Art. 13/14, Impressum mit EU-Vertreter nach Art. 27, AGB mit Datenschutz-Klauseln, Cookie-Banner-Einwilligung, Verarbeitungsverzeichnis nach Art. 30. Ein einziges fehlendes Element reicht für die Sperrung.
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
                          Bußgelder bis zu 20 Millionen Euro
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Die DSGVO sieht drastische Strafen vor: Bis zu 20 Mio. € oder 4% des weltweiten Jahresumsatzes – je nachdem, was höher ist. Deutsche und französische Datenschutzbehörden sind besonders aktiv und prüfen gezielt ausländische Online-Händler. Ein Verstoß kann Ihr gesamtes Geschäft vernichten.
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
                transition={{ delay: 0.4 }}
              >
                <Card className="h-full border-2 border-blue-200 hover:border-blue-300 transition-colors bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                          <Users className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          Vertrauensverlust bei EU-Kunden
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          67% der deutschen Amazon-Kunden prüfen aktiv, ob ein Seller DSGVO-konform ist. Fehlt das "Datenschutz"-Siegel oder die Privacy Policy ist fehlerhaft, brechen 73% den Kauf ab. In Frankreich und Skandinavien ist das Bewusstsein noch höher. Ohne saubere Compliance verlieren Sie massiv Conversions.
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
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">87%</div>
                  <p className="text-slate-300">der Amazon-Seller aus China haben keinen EU-Vertreter</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">3.200+</div>
                  <p className="text-slate-300">Account-Sperrungen wegen DSGVO-Verstößen in 2024</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">€15k</div>
                  <p className="text-slate-300">Durchschnittlicher Umsatzverlust pro Sperrung</p>
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
              <Badge className="mb-4 bg-slate-900 text-white border-0">
                Amazon-spezifische Anforderungen
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Diese DSGVO-Dokumente verlangt Amazon von EU-Sellern
              </h2>
              <p className="text-lg text-slate-600">
                Amazon Seller Central hat klare Dokumenten-Anforderungen. Jedes dieser Elemente wird automatisch geprüft.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <Scale className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Art. 27 EU-Vertreter
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Pflicht für alle Unternehmen außerhalb der EU. Amazon prüft die Adresse und verlangt einen Nachweis. Der Vertreter muss physisch in der EU ansässig sein und eine ladungsfähige Adresse haben.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Pflichtfeld in Seller Central
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
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <FileCheck className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Datenschutzerklärung (Privacy Policy)
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Muss die spezifischen Datenverarbeitungen von Amazon beschreiben: FBA-Logistik, Bewertungen, Kundenservice, Analytics. Amazon prüft automatisch auf Vollständigkeit nach Art. 13/14 DSGVO.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Automatische Prüfung
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
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Vollständiges Impressum
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Mit Firmierung, Handelsregisternummer, Geschäftsführer, ladungsfähiger Adresse und EU-Vertreter. Deutschland verlangt zusätzlich die Umsatzsteuer-ID. Frankreich prüft die SIRET-Nummer.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Länderspezifisch
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      AGB mit Datenschutz-Klauseln
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Die Allgemeinen Geschäftsbedingungen müssen explizit auf die Datenschutzerklärung verweisen und die Rechte nach DSGVO Art. 15-22 erwähnen (Auskunft, Löschung, Widerruf).
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Rechtstexte verlinken
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <ShieldCheck className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Cookie-Einwilligung & Banner
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Bei Verwendung von Amazon Attribution, Brand Analytics oder externer Tracking-Tools: Cookie-Banner mit granularer Einwilligung nach DSGVO und ePrivacy-Richtlinie. Ohne Consent keine Cookies.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Nur bei Tracking-Tools
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <BookOpen className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Verarbeitungsverzeichnis (Art. 30)
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Interne Dokumentation aller Datenverarbeitungsvorgänge: Kundendaten, Zahlungen, E-Mail-Marketing, FBA-Logistik. Muss bei Prüfungen vorgelegt werden können. Amazon verlangt dies bei Verdachtsfällen.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Interne Dokumentation
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
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
                Warum Marsstein?
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Die erste DSGVO-Lösung speziell für Amazon-Seller
              </h2>
              <p className="text-lg text-slate-600">
                Wir kennen die spezifischen Anforderungen von Amazon Seller Central und generieren alle Dokumente vollautomatisch.
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
                      <Package className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Amazon-spezifisch
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Dokumente exakt nach Amazon-Vorgaben: FBA-Datenschutz, Seller-Central-Integration, Marketplace-spezifische Klauseln für .de, .fr, .it, .es, .nl. Copy-Paste direkt in Seller Central.
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
                      <Clock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      48h Express-Setup
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Account gesperrt? Abmahnung erhalten? Unser Express-Service liefert alle DSGVO-Dokumente in 48 Stunden. Perfekt für akute Amazon-Sperrungen mit Deadline.
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
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Amazon-Updates automatisch
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Amazon ändert regelmäßig seine DSGVO-Anforderungen. Wir monitoren diese Änderungen und updaten Ihre Dokumente automatisch – Sie bleiben immer compliant.
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
                      <Globe className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Multi-Marketplace
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Ein Setup für alle EU-Amazon-Marktplätze: Deutschland, Frankreich, Italien, Spanien, Niederlande, Polen, Schweden. Länderspezifische Anpassungen inklusive.
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
                  Kostenloses Erstgespräch
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                  Schützen Sie Ihren Amazon-Account jetzt
                </h2>
                <p className="text-lg text-slate-600">
                  Lassen Sie uns gemeinsam Ihre Amazon DSGVO-Compliance aufsetzen. Kostenlose Erstberatung in unter 24h.
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
                        <Label htmlFor="salesVolume" className="text-slate-700 font-semibold">
                          Monatlicher EU-Umsatz auf Amazon <span className="text-[#e24e1b]">*</span>
                        </Label>
                        <Select value={salesVolume} onValueChange={setSalesVolume} required disabled={isSubmitting}>
                          <SelectTrigger className="border-slate-300 focus:border-[#e24e1b]">
                            <SelectValue placeholder="Bitte wählen..." />
                          </SelectTrigger>
                          <SelectContent position="popper" sideOffset={5} onOpenAutoFocus={(e) => e.preventDefault()}>
                            <SelectItem value="0-10k">€0 - €10.000</SelectItem>
                            <SelectItem value="10k-50k">€10.000 - €50.000</SelectItem>
                            <SelectItem value="50k-100k">€50.000 - €100.000</SelectItem>
                            <SelectItem value="100k-500k">€100.000 - €500.000</SelectItem>
                            <SelectItem value="500k+">€500.000+</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-3">
                        <Label className="text-slate-700 font-semibold">
                          Haben Sie bereits einen Art. 27 EU-Vertreter? <span className="text-[#e24e1b]">*</span>
                        </Label>
                        <RadioGroup value={euRep} onValueChange={setEuRep} disabled={isSubmitting}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="euRep-yes" />
                            <Label htmlFor="euRep-yes" className="font-normal cursor-pointer">
                              Ja, habe ich bereits
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="euRep-no" />
                            <Label htmlFor="euRep-no" className="font-normal cursor-pointer">
                              Nein, benötige ich noch
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="unsure" id="euRep-unsure" />
                            <Label htmlFor="euRep-unsure" className="font-normal cursor-pointer">
                              Nicht sicher
                            </Label>
                          </div>
                        </RadioGroup>
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
                          placeholder="Beschreiben Sie Ihre Situation (z.B. bereits Account-Sperrung erhalten?)"
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
                            Vielen Dank! Wir melden uns innerhalb von 24 Stunden bei Ihnen.
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
                            Jetzt kostenlose Beratung anfragen
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-slate-500 text-center">
                        Durch Absenden des Formulars stimmen Sie unserer Datenschutzerklärung zu.
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
                FAQ für Amazon-Seller aus China
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
                    Was passiert genau, wenn Amazon meinen Account wegen DSGVO sperrt?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        Amazon unterscheidet zwischen <strong>Soft-Block</strong> und <strong>Hard-Block</strong>:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Soft-Block:</strong> Sie erhalten eine E-Mail mit der Aufforderung, DSGVO-Dokumente nachzureichen. Frist: 7-14 Tage. In dieser Zeit können Sie noch verkaufen, aber keine neuen Produkte listen.</li>
                        <li><strong>Hard-Block:</strong> Sofortige Account-Sperrung. Kein Verkauf mehr möglich, Einnahmen werden eingefroren. Sie haben 30 Tage Zeit zur Behebung, danach droht permanente Sperrung.</li>
                      </ul>
                      <p>
                        Bei Hard-Block wird auch Ihr Zugang zu FBA-Lagerbeständen blockiert. Sie müssen die Ware auf eigene Kosten zurückholen – das kostet oft mehrere tausend Euro.
                      </p>
                      <p className="font-semibold text-slate-900">
                        Mit Marsstein können Sie innerhalb von 48h alle erforderlichen Dokumente nachreichen und die Sperrung aufheben lassen.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Welche Amazon-Seller brauchen wirklich einen EU-Vertreter nach Art. 27?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Kurze Antwort:</strong> Alle Seller, deren Unternehmen NICHT physisch in der EU ansässig ist.
                      </p>
                      <p>
                        <strong>Lange Antwort:</strong> Art. 27 DSGVO verpflichtet jedes Unternehmen außerhalb der EU, das EU-Personendaten verarbeitet, einen EU-Vertreter zu benennen. Das betrifft:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Alle Amazon-Seller aus China, Hong Kong, Taiwan</li>
                        <li>Seller aus UK (nach Brexit)</li>
                        <li>Seller aus USA, Kanada, Australien, etc.</li>
                        <li>Seller mit Firmensitz in China, auch wenn Sie eine EU-Tochter haben (die Tochter muss dann als Vertreter fungieren)</li>
                      </ul>
                      <p>
                        <strong>Ausnahme:</strong> Sie haben bereits eine GmbH, Ltd. oder andere Rechtsform MIT Sitz und Geschäftsführung physisch in der EU. Dann sind Sie selbst der "Verantwortliche" und brauchen keinen separaten Vertreter.
                      </p>
                      <p className="font-semibold text-slate-900">
                        Amazon prüft das automatisch anhand Ihrer Seller-Central-Adresse. Steht dort eine Nicht-EU-Adresse, MUSS ein EU-Vertreter angegeben werden.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Gilt die DSGVO-Pflicht auch für Amazon FBA oder nur für FBM?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Beide!</strong> Die DSGVO gilt unabhängig davon, wer die Logistik übernimmt. Der entscheidende Punkt ist: <strong>Wer verarbeitet EU-Kundendaten?</strong>
                      </p>
                      <p>
                        <strong>Bei FBA (Fulfillment by Amazon):</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Amazon übernimmt zwar Lagerung, Verpackung und Versand</li>
                        <li>ABER: Sie als Seller sind der "Verantwortliche" für die Kundendaten (Name, Adresse, Bestellhistorie)</li>
                        <li>Amazon ist nur "Auftragsverarbeiter" im Sinne der DSGVO</li>
                        <li>Sie müssen also trotzdem eine Privacy Policy haben, die FBA-spezifische Datenverarbeitungen beschreibt</li>
                      </ul>
                      <p>
                        <strong>Bei FBM (Fulfillment by Merchant):</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Sie verarbeiten die Kundendaten direkt</li>
                        <li>Höhere Anforderungen an Datensicherheit (Verschlüsselung, Zugriffskontrolle)</li>
                        <li>Sie brauchen zusätzlich AVV-Verträge mit Ihren Versanddienstleistern (DHL, UPS, etc.)</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Marsstein erstellt beide Varianten: FBA-optimierte und FBM-optimierte Datenschutzerklärungen.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Kann ich die Marsstein-Dokumente direkt bei Amazon Seller Central hochladen?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Ja, absolut!</strong> Unsere Dokumente sind speziell für Amazon formatiert.
                      </p>
                      <p>
                        <strong>So funktioniert die Integration:</strong>
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li><strong>Privacy Policy:</strong> Als PDF oder HTML in "Settings → Legal Entity → Privacy Policy" hochladen. Amazon prüft automatisch auf DSGVO-Vollständigkeit.</li>
                        <li><strong>Impressum:</strong> In "Settings → Account Info → Business Information" eintragen. Der EU-Vertreter MUSS dort aufgeführt sein.</li>
                        <li><strong>AGB:</strong> In "Settings → Legal Entity → Terms & Conditions" hochladen. Amazon verlinkt diese auf Ihrer Storefront.</li>
                        <li><strong>EU-Vertreter:</strong> In "Settings → Account Info → EU Representative (Art. 27 GDPR)" die Kontaktdaten eintragen. Amazon verifiziert die Adresse.</li>
                      </ol>
                      <p>
                        Marsstein liefert Ihnen die Dokumente in <strong>beiden Formaten</strong>: PDF für den Upload und HTML für Copy-Paste in Textfelder.
                      </p>
                      <p className="font-semibold text-slate-900">
                        Bonus: Wir geben Ihnen eine Step-by-Step-Anleitung mit Screenshots für die Einrichtung in Seller Central.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Was kostet ein EU-Vertreter normalerweise und warum ist Marsstein günstiger?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Traditionelle Anbieter verlangen:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>€2.000 - €5.000 pro Jahr für EU-Vertreter-Service</li>
                        <li>€800 - €2.000 Setup-Gebühr (einmalig)</li>
                        <li>€500 - €1.500 für Datenschutzerklärung (einmalig)</li>
                        <li>€300 - €800 für Impressum & AGB (einmalig)</li>
                        <li>Zusätzliche Gebühren bei Anfragen von Behörden oder Kunden</li>
                      </ul>
                      <p>
                        <strong>Gesamt: €4.000 - €10.000 im ersten Jahr.</strong>
                      </p>
                      <p>
                        <strong>Warum ist Marsstein günstiger?</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Vollautomatisiert:</strong> Wir nutzen KI, um Dokumente zu generieren statt teurer Anwälte</li>
                        <li><strong>Software-as-a-Service:</strong> Keine manuelle Arbeit pro Kunde = skalierbare Preise</li>
                        <li><strong>Spezialisierung:</strong> Wir fokussieren uns nur auf Amazon-Seller, nicht allgemeine DSGVO-Beratung</li>
                        <li><strong>Keine Overhead-Kosten:</strong> Keine physischen Büros, keine Vertriebsteams</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Marsstein bietet den gleichen rechtssicheren Service zu einem Bruchteil der Kosten – perfekt für KMU und Mittelständler.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Funktioniert Marsstein für alle EU-Amazon-Marktplätze (.de, .fr, .it, .es, etc.)?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Ja, für alle 8 EU-Amazon-Marktplätze:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Deutschland (amazon.de):</strong> Strengste DSGVO-Auslegung, zusätzlich Impressumspflicht nach § 5 TMG</li>
                        <li><strong>Frankreich (amazon.fr):</strong> CNIL-spezifische Anforderungen, Mention légales erforderlich</li>
                        <li><strong>Italien (amazon.it):</strong> Garante-Vorgaben, Informativa sulla privacy in Italien</li>
                        <li><strong>Spanien (amazon.es):</strong> AEPD-Richtlinien, Política de privacidad erforderlich</li>
                        <li><strong>Niederlande (amazon.nl):</strong> Autoriteit Persoonsgegevens-Vorgaben</li>
                        <li><strong>Polen (amazon.pl):</strong> UODO-Richtlinien</li>
                        <li><strong>Schweden (amazon.se):</strong> IMY-Vorgaben (Integritetsskyddsmyndigheten)</li>
                        <li><strong>Belgien (amazon.com.be):</strong> APD/GBA-Richtlinien</li>
                      </ul>
                      <p>
                        <strong>Was ist länderspezifisch?</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Sprache der Dokumente (wir generieren automatisch in Landessprache)</li>
                        <li>Format des Impressums (z.B. SIRET-Nummer in Frankreich, Handelsregisternummer in Deutschland)</li>
                        <li>Cookie-Banner-Text (länderspezifische Formulierungen)</li>
                        <li>Kontaktdaten der zuständigen Datenschutzbehörde</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Marsstein erstellt automatisch länderspezifische Dokumente für ALLE Ihre aktiven Amazon-Marktplätze. Ein Setup, alle Länder abgedeckt.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-7"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Was passiert bei einer Datenschutz-Prüfung oder Kundenanfrage nach DSGVO Art. 15-22?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        Kunden haben nach DSGVO folgende Rechte (Art. 15-22):
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Art. 15:</strong> Auskunftsrecht – "Welche Daten haben Sie über mich?"</li>
                        <li><strong>Art. 16:</strong> Berichtigung – "Korrigieren Sie meine falsche Adresse"</li>
                        <li><strong>Art. 17:</strong> Löschung ("Recht auf Vergessenwerden")</li>
                        <li><strong>Art. 18:</strong> Einschränkung der Verarbeitung</li>
                        <li><strong>Art. 20:</strong> Datenübertragbarkeit</li>
                        <li><strong>Art. 21:</strong> Widerspruch gegen Verarbeitung</li>
                      </ul>
                      <p>
                        <strong>Was müssen Sie tun, wenn eine solche Anfrage kommt?</strong>
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li>Anfrage innerhalb von 30 Tagen beantworten (DSGVO-Pflicht)</li>
                        <li>Identität des Anfragenden prüfen (Datenschutz!)</li>
                        <li>Bei Auskunftsrecht: Alle gespeicherten Daten zusammenstellen (Amazon-Bestellhistorie, E-Mails, etc.)</li>
                        <li>Bei Löschung: Daten unwiederbringlich löschen UND Amazon informieren</li>
                      </ol>
                      <p>
                        <strong>Marsstein hilft dabei:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Wir liefern E-Mail-Vorlagen für jede Art von Anfrage</li>
                        <li>Checklisten: Was muss bei Auskunft/Löschung gemacht werden?</li>
                        <li>Bei Express-Service: Wir übernehmen die Beantwortung für Sie</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Wichtig: Ignorieren Sie keine DSGVO-Anfragen! Das kann zu Beschwerden bei Behörden führen und Amazon sperrt dann Ihren Account.
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
                Bereit für DSGVO-konformen Amazon-Verkauf?
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

        <RelatedArticles articles={getRelatedArticles('amazon-sellers')} />

        <Footer />
      </div>
    </>
  );
}
