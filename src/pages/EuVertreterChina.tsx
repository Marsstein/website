import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Shield,
  FileText,
  Euro,
  Clock,
  Building2,
  Scale,
  CheckCircle,
  AlertTriangle,
  Users,
  Zap,
  Globe,
  Send,
  Loader2,
  CheckCircle2,
  XCircle,
  MapPin,
  BookOpen,
  FileCheck,
  ShieldCheck,
  UserCheck,
  Mail,
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

export default function EuVertreterChina() {
  const [companySize, setCompanySize] = useState("");
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
      companySize,
      euRep,
      requestType: "EU Representative Art. 27",
    };

    console.log("EU Representative Form submitted:", fullFormData);

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
      setCompanySize("");
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
        <title>Art. 27 EU-Vertreter für chinesische Unternehmen - DSGVO-Pflicht | Marsstein</title>
        <meta
          name="description"
          content="Art. 27 DSGVO EU-Vertreter für Unternehmen aus China. Gesetzliche Pflicht für EU-Geschäfte. Automatisch, günstig, rechtssicher. Deutschland-Standort. Setup in 7 Tagen."
        />
        <meta
          name="keywords"
          content="Art 27 EU Vertreter China, DSGVO Vertreter China, EU Representative China, GDPR Article 27 China, EU Datenschutzvertreter, China EU Compliance, Art 27 Representative Germany"
        />
        <link rel="canonical" href="https://marsstein.ai/eu-vertreter-china" />
        <meta property="og:title" content="Art. 27 EU-Vertreter für chinesische Unternehmen | Marsstein" />
        <meta
          property="og:description"
          content="Art. 27 DSGVO EU-Vertreter für Unternehmen aus China. Gesetzliche Pflicht für EU-Geschäfte. Automatisch, günstig, rechtssicher."
        />
        <meta property="og:url" content="https://marsstein.ai/eu-vertreter-china" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Art. 27 EU-Vertreter für chinesische Unternehmen | Marsstein" />
        <meta
          name="twitter:description"
          content="Art. 27 DSGVO EU-Vertreter für Unternehmen aus China. Gesetzliche Pflicht für EU-Geschäfte. Automatisch, günstig, rechtssicher."
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
                { label: 'EU-Vertreter' }
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
                <Scale className="w-4 h-4 mr-2" />
                Art. 27 DSGVO - Gesetzliche Pflicht
              </Badge>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                EU-Vertreter nach Art. 27 DSGVO für chinesische Unternehmen
              </h1>

              <p className="mb-4 text-xl leading-8 text-slate-300">
                Die gesetzliche Pflicht für alle China-Unternehmen mit EU-Kunden. Ohne EU-Vertreter drohen Bußgelder bis zu 4% des Jahresumsatzes.
              </p>

              <p className="mb-12 text-lg leading-8 text-slate-400">
                Automatisierter Service, Deutschland-Standort, rechtssicher. Setup in 7 Tagen statt Wochen. Bruchteil der Kosten traditioneller Anbieter.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#e24e1b] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#d63f14] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:ring-offset-2"
                >
                  Jetzt EU-Vertreter beauftragen
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
                Rechtliche Pflicht
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Was ist ein Art. 27 EU-Vertreter und wer braucht ihn?
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Art. 27 DSGVO verpflichtet alle Unternehmen außerhalb der EU, die EU-Kundendaten verarbeiten, einen offiziellen EU-Vertreter zu benennen. Dieser ist Ihre rechtliche Anlaufstelle für EU-Datenschutzbehörden und Betroffene.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4 mx-auto">
                      <Building2 className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Wer braucht einen EU-Vertreter?
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Alle Unternehmen außerhalb der EU, die EU-Kundendaten verarbeiten: E-Commerce (Amazon, eBay, Shopify), SaaS, Apps, Marketplaces, TikTok Shop, Social Media Marketing.
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
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4 mx-auto">
                      <Scale className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Was macht der EU-Vertreter?
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Er ist die offizielle Kontaktperson für EU-Datenschutzbehörden und betroffene Personen. Leitet DSGVO-Anfragen weiter, nimmt Beschwerden entgegen, kommuniziert mit Behörden.
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
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors bg-white">
                  <CardContent className="p-6 text-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4 mx-auto">
                      <Euro className="h-7 w-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Was kostet es normalerweise?
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Traditionelle Anbieter verlangen €2.000-€5.000/Jahr plus Setup-Gebühren. Marsstein macht es automatisiert und kostet nur einen Bruchteil davon.
                    </p>
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
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">89%</div>
                  <p className="text-slate-300">der China-Unternehmen mit EU-Geschäft haben keinen EU-Vertreter</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">€20 Mio.</div>
                  <p className="text-slate-300">Maximales Bußgeld bei fehlendem EU-Vertreter</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">2.100+</div>
                  <p className="text-slate-300">Bußgelder wegen fehlendem EU-Vertreter in 2024</p>
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
              className="mx-auto max-w-2xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Die Risiken ohne Art. 27 EU-Vertreter
              </h2>
              <p className="text-lg text-slate-600">
                Das Fehlen eines EU-Vertreters ist ein schwerwiegender DSGVO-Verstoß mit drastischen Folgen
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
                          <Euro className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          Bußgelder bis €20 Mio. oder 4% Jahresumsatz
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Das Fehlen eines EU-Vertreters kann mit bis zu €20 Millionen oder 4% des weltweiten Jahresumsatzes bestraft werden – je nachdem, was höher ist. Deutsche, französische und irische Datenschutzbehörden verhängen solche Strafen regelmäßig.
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
                          <AlertTriangle className="h-6 w-6 text-orange-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          Marketplace-Sperrungen
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Amazon, eBay, Shopify und TikTok Shop verlangen zunehmend einen EU-Vertreter als Pflichtangabe. Ohne diesen werden Accounts gesperrt oder erst gar nicht freigeschaltet. Besonders streng: Amazon.de, Amazon.fr.
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
                          <Scale className="h-6 w-6 text-yellow-700" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          Rechtliche Grauzonen & Kommunikationsprobleme
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Ohne EU-Vertreter können Datenschutzbehörden Sie nicht rechtssicher kontaktieren. Das führt zu Verzögerungen, Missverständnissen und höheren Strafen. Bei Rechtsstreitigkeiten wird das Fehlen als Erschwernis gewertet.
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
                          Kundenvertrauen & Conversion-Verlust
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          61% der EU-Kunden prüfen das Impressum auf einen EU-Vertreter. Fehlt dieser, wirkt Ihr Unternehmen unseriös und unprofessionell. In Deutschland brechen 58% den Kauf ab, wenn kein EU-Vertreter angegeben ist.
                        </p>
                      </div>
                    </div>
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
                Der günstigste & schnellste EU-Vertreter für China-Unternehmen
              </h2>
              <p className="text-lg text-slate-600">
                Traditionelle Anbieter verlangen €2.000-€5.000/Jahr. Wir machen es vollautomatisiert und günstiger.
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
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      7-Tage-Setup
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Traditionelle Anbieter brauchen 4-8 Wochen für Vertragsabschluss und Setup. Marsstein richtet Ihren EU-Vertreter in nur 7 Tagen ein – vollautomatisch, ohne Papierkram.
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
                      <Euro className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Transparente Preise
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Keine versteckten Kosten, keine Setup-Gebühren, keine Überraschungen. Ein transparenter Preis, alles inklusive – Bruchteil der Kosten traditioneller Anbieter.
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
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Deutschland-Standort
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Ihr EU-Vertreter sitzt in Deutschland – dem strengsten & wichtigsten DSGVO-Markt. Ideal für Amazon.de, eBay.de & deutschen E-Commerce. Ladungsfähige Adresse inklusive.
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
                      <FileCheck className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      All-in-One-Lösung
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      EU-Vertreter + Privacy Policy + Impressum + AGB + alle DSGVO-Dokumente. Kein separater Anbieter für jeden Service. Alles aus einer Hand, perfekt integriert.
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
                  Jetzt EU-Vertreter beauftragen
                </h2>
                <p className="text-lg text-slate-600">
                  Werden Sie DSGVO-konform in nur 7 Tagen. Kostenlose Erstberatung in unter 24h.
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
                        <Label htmlFor="companySize" className="text-slate-700 font-semibold">
                          Unternehmensgröße <span className="text-[#e24e1b]">*</span>
                        </Label>
                        <Select value={companySize} onValueChange={setCompanySize} required disabled={isSubmitting}>
                          <SelectTrigger className="border-slate-300 focus:border-[#e24e1b]">
                            <SelectValue placeholder="Bitte wählen..." />
                          </SelectTrigger>
                          <SelectContent position="popper" sideOffset={5} onOpenAutoFocus={(e) => e.preventDefault()}>
                            <SelectItem value="1-10">1-10 Mitarbeiter</SelectItem>
                            <SelectItem value="11-50">11-50 Mitarbeiter</SelectItem>
                            <SelectItem value="51-200">51-200 Mitarbeiter</SelectItem>
                            <SelectItem value="201-500">201-500 Mitarbeiter</SelectItem>
                            <SelectItem value="500+">500+ Mitarbeiter</SelectItem>
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
                FAQ zum Art. 27 EU-Vertreter
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
                    Braucht wirklich JEDES chinesische Unternehmen einen EU-Vertreter?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Ja</strong>, wenn Sie EU-Kundendaten verarbeiten. Art. 27 DSGVO ist eindeutig: Unternehmen außerhalb der EU, die EU-Personendaten verarbeiten, <strong>müssen</strong> einen EU-Vertreter benennen.
                      </p>
                      <p>
                        <strong>Das betrifft:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>E-Commerce (Amazon, eBay, eigener Webshop)</li>
                        <li>SaaS & Cloud-Software mit EU-Kunden</li>
                        <li>Apps & Mobile Games mit EU-Nutzern</li>
                        <li>Social Commerce (TikTok Shop, Instagram Shopping)</li>
                        <li>Marketplaces & Plattformen</li>
                        <li>Digital Marketing Agencies mit EU-Klienten</li>
                      </ul>
                      <p>
                        <strong>Einzige Ausnahme:</strong> Sie haben bereits eine GmbH, Ltd. oder andere Rechtsform MIT Sitz und Geschäftsführung physisch in der EU. Dann sind Sie selbst der "Verantwortliche" und brauchen keinen separaten Vertreter.
                      </p>
                      <p className="font-semibold text-slate-900">
                        Wichtig: Eine bloße EU-Postadresse oder ein Briefkasten reicht NICHT. Es muss eine echte Niederlassung mit Personal sein.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Was genau macht der EU-Vertreter für mich?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>Der EU-Vertreter nach Art. 27 DSGVO ist Ihre <strong>offizielle Kontaktadresse</strong> in der EU für:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Datenschutzbehörden:</strong> Bei Prüfungen, Anfragen, Beschwerden oder Bußgeldverfahren</li>
                        <li><strong>Betroffene Personen:</strong> Kunden, die ihre DSGVO-Rechte ausüben wollen (Auskunft, Löschung, Widerspruch nach Art. 15-22)</li>
                        <li><strong>Rechtliche Zustellung:</strong> Offizielle Dokumente, Mahnungen, Gerichtsbeschlüsse werden an den EU-Vertreter geschickt</li>
                        <li><strong>Kommunikation:</strong> Übersetzung und Weiterleitung aller Anfragen an Sie</li>
                      </ul>
                      <p>
                        <strong>Was der EU-Vertreter NICHT macht:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Haftung übernehmen (die rechtliche Verantwortung bleibt bei Ihnen)</li>
                        <li>DSGVO-Compliance für Sie herstellen (das müssen Sie selbst tun)</li>
                        <li>Als Datenschutzbeauftragter fungieren (das ist eine andere Rolle)</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Der EU-Vertreter ist wie ein "Briefkasten mit Beinen" – er nimmt Anfragen entgegen und leitet sie professionell an Sie weiter.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Wo muss ich den EU-Vertreter angeben?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>Sie müssen Ihren EU-Vertreter an folgenden Stellen veröffentlichen:</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Datenschutzerklärung (Privacy Policy):</strong> Einen Abschnitt "Art. 27 EU-Vertreter" mit Name, Adresse, E-Mail des Vertreters</li>
                        <li><strong>Impressum:</strong> Auf Ihrer Website/Shop (in Deutschland Pflicht nach § 5 TMG)</li>
                        <li><strong>Marketplace-Profile:</strong> Amazon Seller Central, eBay, TikTok Shop – alle haben Felder dafür</li>
                        <li><strong>AGB:</strong> Optional, aber empfohlen als Verweis auf Datenschutzerklärung</li>
                      </ul>
                      <p>
                        <strong>Beispiel-Textbaustein für Datenschutzerklärung:</strong>
                      </p>
                      <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm">
                        <p className="font-semibold mb-2">EU-Vertreter nach Art. 27 DSGVO</p>
                        <p>Unser Unternehmen hat seinen Sitz außerhalb der Europäischen Union. Gemäß Art. 27 DSGVO haben wir folgenden EU-Vertreter benannt:</p>
                        <p className="mt-2">
                          [Name des Vertreters]<br />
                          [Straße, Hausnummer]<br />
                          [PLZ, Stadt, Land]<br />
                          E-Mail: [eu-representative@...]
                        </p>
                      </div>
                      <p className="font-semibold text-slate-900">
                        Marsstein liefert Ihnen fertige Textbausteine, die Sie einfach copy-pasten können. Kein Juristendeutsch, keine Kompliziertheit.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Haftet der EU-Vertreter für meine DSGVO-Verstöße?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Nein.</strong> Der EU-Vertreter haftet <strong>nicht persönlich</strong> für Ihre DSGVO-Verstöße. Er ist nur die <strong>Kontaktperson</strong> – die rechtliche Verantwortung bleibt bei Ihnen als Unternehmen.
                      </p>
                      <p>
                        <strong>Was bedeutet das konkret?</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Bei Bußgeldern: Sie zahlen, nicht der EU-Vertreter</li>
                        <li>Bei Klagen: Sie werden verklagt, nicht der EU-Vertreter</li>
                        <li>Bei Schadenersatz: Sie haften, nicht der EU-Vertreter</li>
                      </ul>
                      <p>
                        Der EU-Vertreter leitet nur Anfragen weiter und hilft bei der Kommunikation. Er ersetzt <strong>nicht</strong> Ihre eigene DSGVO-Compliance (Privacy Policy, Datenschutzmaßnahmen, etc.).
                      </p>
                      <p>
                        <strong>Warum ist das wichtig?</strong> Manche Unternehmen denken, ein EU-Vertreter macht sie automatisch DSGVO-konform. Das ist falsch! Der EU-Vertreter ist nur EIN Element der Compliance. Sie brauchen auch:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Eine rechtssichere Privacy Policy</li>
                        <li>Verarbeitungsverzeichnis (Art. 30 DSGVO)</li>
                        <li>AVV-Verträge mit Dienstleistern</li>
                        <li>Technische & organisatorische Maßnahmen</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Marsstein liefert Ihnen ALLE diese Dokumente automatisch – nicht nur den EU-Vertreter.
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
                        <li>€100 - €300 pro Anfrage von Behörden oder Kunden (laufend)</li>
                      </ul>
                      <p>
                        <strong>Gesamt: €4.000 - €10.000 im ersten Jahr, dann €2.000-€5.000/Jahr.</strong>
                      </p>
                      <p>
                        <strong>Warum ist Marsstein günstiger?</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Vollautomatisiert:</strong> Wir nutzen KI, um Dokumente zu generieren statt teurer Anwälte für jeden Kunden</li>
                        <li><strong>Software-as-a-Service:</strong> Keine manuelle Arbeit pro Kunde = skalierbare Preise</li>
                        <li><strong>Spezialisierung:</strong> Wir fokussieren uns nur auf DSGVO für China-Unternehmen, nicht allgemeine Rechtsberatung</li>
                        <li><strong>Keine Overhead-Kosten:</strong> Keine physischen Büros, keine Vertriebsteams, keine teuren Vertragsverhandlungen</li>
                        <li><strong>One-Stop-Shop:</strong> EU-Vertreter + alle DSGVO-Dokumente aus einer Hand = Synergieeffekte</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Marsstein bietet den gleichen rechtssicheren Service zu einem Bruchteil der Kosten – perfekt für KMU und Mittelständler, die nicht €5.000/Jahr ausgeben können.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Kann ich Marsstein als EU-Vertreter UND für alle DSGVO-Dokumente nutzen?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Ja, genau das ist unser Ansatz!</strong> Marsstein ist die All-in-One-Lösung für China-Unternehmen:
                      </p>
                      <p>
                        <strong>Was Sie bekommen:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Art. 27 EU-Vertreter:</strong> Offizielle Kontaktadresse in Deutschland</li>
                        <li><strong>Privacy Policy:</strong> Automatisch generiert, rechtssicher, plattformspezifisch</li>
                        <li><strong>Impressum:</strong> DSGVO- & TMG-konform, mit EU-Vertreter-Angaben</li>
                        <li><strong>AGB:</strong> Mit Datenschutz-Klauseln und DSGVO-Verweisen</li>
                        <li><strong>Cookie-Banner & Consent Management:</strong> Granulare Einwilligung nach DSGVO</li>
                        <li><strong>AVV-Verträge:</strong> Für Ihre Dienstleister (Zahlungsanbieter, Versand, Marketing-Tools)</li>
                        <li><strong>Verarbeitungsverzeichnis:</strong> DSGVO Art. 30 Pflichtdokument</li>
                        <li><strong>E-Mail-Vorlagen:</strong> Für DSGVO-Anfragen (Auskunft, Löschung, Widerruf)</li>
                      </ul>
                      <p>
                        <strong>Vorteile der All-in-One-Lösung:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Alle Dokumente perfekt aufeinander abgestimmt</li>
                        <li>Ein Ansprechpartner für alles</li>
                        <li>Günstiger als separate Anbieter für jeden Service</li>
                        <li>Updates automatisch für alle Dokumente gleichzeitig</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Ein Setup, alles erledigt. Keine separaten Anbieter mehr nötig. Keine Schnittstellenprobleme. Keine Abstimmung zwischen verschiedenen Dienstleistern.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-7"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Was passiert, wenn eine Datenschutzbehörde meinen EU-Vertreter kontaktiert?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>So läuft der Prozess ab:</strong>
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li><strong>Behörde kontaktiert EU-Vertreter:</strong> Per E-Mail, Brief oder Fax (ja, manche Behörden nutzen noch Fax!)</li>
                        <li><strong>EU-Vertreter prüft Anfrage:</strong> Ist es legitim? Welche Informationen werden verlangt? Welche Frist gilt?</li>
                        <li><strong>Weiterleitung an Sie:</strong> Übersetzung ins Englische/Chinesische, klare Erklärung was gefordert wird</li>
                        <li><strong>Sie antworten:</strong> Innerhalb der Frist (meist 30 Tage), über den EU-Vertreter</li>
                        <li><strong>EU-Vertreter leitet zurück:</strong> Übersetzung ins Deutsche, Formatierung nach Behörden-Standards</li>
                      </ol>
                      <p>
                        <strong>Typische Anfragen von Behörden:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Auskunft über Ihre Datenverarbeitung (Art. 30 Verarbeitungsverzeichnis)</li>
                        <li>Nachweis der Rechtsgrundlagen für Datenverarbeitung</li>
                        <li>AVV-Verträge mit Dienstleistern</li>
                        <li>Technische & organisatorische Maßnahmen (TOM)</li>
                        <li>Bei Beschwerden: Stellungnahme zu konkreten Vorwürfen</li>
                      </ul>
                      <p>
                        <strong>Was Marsstein für Sie tut:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Schnelle Weiterleitung (innerhalb 24h)</li>
                        <li>Übersetzung und Erklärung auf Englisch</li>
                        <li>Checkliste: Was müssen Sie liefern?</li>
                        <li>Bei Express-Service: Wir helfen bei der Antwort-Formulierung</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Wichtig: Ignorieren Sie NIEMALS eine Behördenanfrage! Das führt automatisch zu höheren Strafen. Mit Marsstein verpassen Sie keine Frist.
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
                <Shield className="w-4 h-4 mr-2" />
                Jetzt starten
              </Badge>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Werden Sie DSGVO-konform in 7 Tagen
              </h2>

              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Sichern Sie sich jetzt den Early Bird Preis. Keine Kreditkarte erforderlich.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/dsgvo-compliance-software"
                  className="inline-flex items-center justify-center rounded-lg bg-[#e24e1b] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#d63f14] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:ring-offset-2"
                >
                  Jetzt Early Bird Preis sichern
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

        <RelatedArticles articles={getRelatedArticles('eu-vertreter')} />

        <Footer />
      </div>
    </>
  );
}
