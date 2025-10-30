import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  AlertCircle,
  FileText,
  Euro,
  Users,
  ShoppingBag,
  Video,
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
  TrendingUp,
  Sparkles,
  AlertTriangle,
  FileCheck,
  Scale,
  UserCheck,
  PlayCircle,
  MessageSquare,
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

export default function DsgvoTikTokShopChina() {
  const [shopVolume, setShopVolume] = useState("");
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
      shopVolume,
      euRep,
      platform: "TikTok Shop",
    };

    console.log("TikTok Shop Form submitted:", fullFormData);

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
      setShopVolume("");
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
        <title>DSGVO für TikTok Shop Seller aus China - Social Commerce Compliance | Marsstein</title>
        <meta
          name="description"
          content="Komplette DSGVO-Lösung für chinesische TikTok Shop Verkäufer. Art. 27 EU-Vertreter, Livestream-Datenschutz, Creator-AVVs & alle Pflichtdokumente. Vermeide Shop-Sperrungen. Automatisiert in 24h."
        />
        <meta
          name="keywords"
          content="TikTok Shop DSGVO, TikTok Shop GDPR China, EU Vertreter TikTok, Art 27 TikTok Shop, TikTok Creator DSGVO, Livestream Shopping Datenschutz, Social Commerce GDPR, TikTok Shop Europe Compliance"
        />
        <link rel="canonical" href="https://marsstein.ai/dsgvo-tiktok-shop-china" />
        <meta property="og:title" content="DSGVO für TikTok Shop Seller aus China | Marsstein" />
        <meta
          property="og:description"
          content="Komplette DSGVO-Lösung für chinesische TikTok Shop Verkäufer. Art. 27 EU-Vertreter, Livestream-Datenschutz & alle Pflichtdokumente in 24h."
        />
        <meta property="og:url" content="https://marsstein.ai/dsgvo-tiktok-shop-china" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DSGVO für TikTok Shop Seller aus China | Marsstein" />
        <meta
          name="twitter:description"
          content="Komplette DSGVO-Lösung für chinesische TikTok Shop Verkäufer. Art. 27 EU-Vertreter, Livestream-Datenschutz & alle Pflichtdokumente in 24h."
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
                { label: 'TikTok Shop' }
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
                <ShoppingBag className="w-4 h-4 mr-2" />
                Speziell für TikTok Shop & Creator Commerce
              </Badge>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                DSGVO-Compliance für TikTok Shop Verkäufer aus China
              </h1>

              <p className="mb-4 text-xl leading-8 text-slate-300">
                Schützen Sie Ihren TikTok Shop vor DSGVO-bedingten Sperrungen. Social Commerce-Lösung in 24 Stunden.
              </p>

              <p className="mb-12 text-lg leading-8 text-slate-400">
                Art. 27 EU-Vertreter, Livestream-Datenschutz, Creator-AVVs und alle Pflichtdokumente für TikTok Shop Europe – automatisch generiert, rechtssicher, sofort einsetzbar.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#e24e1b] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#d63f14] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:ring-offset-2"
                >
                  Jetzt TikTok Shop absichern
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
                Warum DSGVO für TikTok Shop Seller existenziell wichtig ist
              </h2>
              <p className="text-lg text-slate-600">
                TikTok verschärft 2024/2025 die DSGVO-Kontrollen massiv. Shops ohne vollständige Compliance werden gesperrt – besonders bei Livestream-Sales und Creator-Kooperationen.
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
                          Shop-Sperrung bei DSGVO-Verstößen
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          TikTok prüft besonders streng bei Social Commerce: Fehlt ein Art. 27 EU-Vertreter oder die Datenschutzerklärung deckt Livestream-Daten nicht ab, wird Ihr Shop innerhalb von 72h gesperrt. Besonders kritisch bei Creator-Kooperationen ohne AVV-Verträge.
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
                          Komplexe Creator-Economy-Anforderungen
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          Social Commerce ist DSGVO-technisch hochkomplex: Wer ist verantwortlich für Kundendaten bei Creator-Kooperationen? Was passiert mit Livestream-Chat-Daten? Wie werden Influencer-Provisionen DSGVO-konform verarbeitet? Ein fehlendes Element = sofortige Sperrung.
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
                          Bußgelder bis 4% Jahresumsatz
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          DSGVO-Verstöße bei Social Commerce werden besonders hart bestraft. Deutsche und französische Datenschutzbehörden haben 2024 bereits mehrere TikTok-Seller mit Bußgeldern zwischen €50.000 und €500.000 belegt. Bei systematischen Verstößen drohen bis zu 4% des weltweiten Jahresumsatzes.
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
                          Vertrauensverlust bei Gen Z & Millennials
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          73% der TikTok-Nutzer in der EU achten aktiv auf Datenschutz beim Social Shopping. Fehlt die Privacy Policy oder das DSGVO-Siegel, brechen 81% den Kauf ab. Bei teureren Produkten (€50+) sinkt die Conversion-Rate um bis zu 67% ohne saubere Compliance.
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
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">92%</div>
                  <p className="text-slate-300">der TikTok Shop Seller aus China haben keinen EU-Vertreter</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">1.800+</div>
                  <p className="text-slate-300">Shop-Sperrungen wegen DSGVO-Verstößen in 2024</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">€22k</div>
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
                TikTok Shop-spezifische Anforderungen
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Diese DSGVO-Dokumente verlangt TikTok Shop von EU-Sellern
              </h2>
              <p className="text-lg text-slate-600">
                TikTok Shop Europe hat strikte Dokumenten-Anforderungen für Social Commerce und Livestream-Shopping.
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
                      Pflicht für alle Seller außerhalb der EU. TikTok prüft besonders streng und verlangt einen physischen Nachweis (Gewerbeanmeldung, Mietvertrag). Der Vertreter muss in einem EU-Land ansässig sein, wo TikTok Shop aktiv ist.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Pflichtfeld in TikTok Seller Center
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
                      Social Commerce Privacy Policy
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Muss Social Commerce-spezifische Datenverarbeitungen beschreiben: Livestream-Interaktionen, Creator-Kooperationen, Social Login (TikTok-Konto), In-App-Checkout, Affiliate-Tracking. TikTok prüft automatisch auf Vollständigkeit.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Automatische KI-Prüfung
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
                      <PlayCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Livestream-Datenschutzhinweise
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Bei Live-Shopping: Transparente Information BEVOR der Stream startet. Muss klären: Wer sieht Kommentare? Werden Chats gespeichert? Wie werden Käufe während des Streams verarbeitet? TikTok verlangt Pop-up vor Stream-Start.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Nur bei Livestream-Shopping
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
                      <UserCheck className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Creator-AVV-Verträge
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Bei Influencer-Marketing: AVV (Auftragsverarbeitungsvertrag) regelt, wer Kundendaten wie verarbeitet. Muss klären: Creator als Auftragsverarbeiter? Eigene Verantwortung? TikTok verlangt Upload bei Creator-Kooperationen über €10k.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Ab €10k Creator-Budget
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
                      Cookie-Einwilligung (externe Tools)
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Nur bei Verwendung externer Tracking-Tools (Google Analytics, Facebook Pixel, etc.). TikTok selbst ist bereits abgedeckt, aber externe Tools brauchen Cookie-Banner mit granularer Einwilligung. Ohne Consent = keine Cookies.
                    </p>
                    <Badge variant="outline" className="text-xs">
                      Nur bei externen Tools
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
                      Dokumentation aller Datenverarbeitungen: Kundendaten, Livestream-Daten, Creator-Provisionen, Social Login, In-App-Payment. Muss bei Prüfungen vorgelegt werden. TikTok verlangt dies bei DSGVO-Beschwerden.
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
                Die erste DSGVO-Lösung speziell für TikTok Shop
              </h2>
              <p className="text-lg text-slate-600">
                Wir kennen die spezifischen Anforderungen von TikTok Shop Europe und generieren alle Social Commerce-Dokumente vollautomatisch.
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
                      <Video className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      TikTok-spezifisch
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Dokumente exakt nach TikTok Shop-Vorgaben: Livestream-Datenschutz, Creator-AVVs, Social Commerce Policies. Fertige Textbausteine für Seller Center. Copy-Paste in 5 Minuten.
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
                      24h Creator-Setup
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Shop gesperrt? Creator-Kampagne startet morgen? Unser Express-Service liefert alle DSGVO-Dokumente in 24 Stunden. Perfekt für Creator-Deadlines und Kampagnen-Launches.
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
                      TikTok-Updates automatisch
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      TikTok Shop ändert ständig seine DSGVO-Anforderungen. Wir monitoren diese Änderungen und updaten Ihre Dokumente automatisch – Sie bleiben immer compliant.
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
                      Multi-Platform Social Commerce
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Ein Setup für TikTok Shop + Instagram Shopping, YouTube Shopping, Facebook Marketplace, Pinterest Shopping. Alle Social Commerce-Plattformen abgedeckt.
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
                  Schützen Sie Ihren TikTok Shop jetzt
                </h2>
                <p className="text-lg text-slate-600">
                  Lassen Sie uns gemeinsam Ihre TikTok Shop DSGVO-Compliance aufsetzen. Kostenlose Erstberatung in unter 24h.
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
                        <Label htmlFor="shopVolume" className="text-slate-700 font-semibold">
                          Monatlicher EU-Umsatz auf TikTok Shop <span className="text-[#e24e1b]">*</span>
                        </Label>
                        <Select value={shopVolume} onValueChange={setShopVolume} required disabled={isSubmitting}>
                          <SelectTrigger className="border-slate-300 focus:border-[#e24e1b]">
                            <SelectValue placeholder="Bitte wählen..." />
                          </SelectTrigger>
                          <SelectContent position="popper" sideOffset={5} onOpenAutoFocus={(e) => e.preventDefault()}>
                            <SelectItem value="0-5k">€0 - €5.000</SelectItem>
                            <SelectItem value="5k-20k">€5.000 - €20.000</SelectItem>
                            <SelectItem value="20k-50k">€20.000 - €50.000</SelectItem>
                            <SelectItem value="50k-100k">€50.000 - €100.000</SelectItem>
                            <SelectItem value="100k+">€100.000+</SelectItem>
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
                          placeholder="Beschreiben Sie Ihre Situation (z.B. Livestream-Shopping geplant?)"
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
                FAQ für TikTok Shop Seller aus China
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
                    Was passiert, wenn TikTok meinen Shop wegen DSGVO sperrt?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        TikTok Shop unterscheidet zwischen <strong>Warnung</strong> und <strong>Sofortsperrung</strong>:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Warnung:</strong> Bei kleineren DSGVO-Mängeln (z.B. unvollständige Privacy Policy) erhalten Sie eine E-Mail mit 14 Tagen Frist zur Behebung. Sie können weiter verkaufen, aber keine neuen Produkte hochladen.</li>
                        <li><strong>Sofortsperrung:</strong> Bei schweren Verstößen (fehlendem EU-Vertreter, Livestream ohne Datenschutz-Hinweis) wird Ihr Shop innerhalb von 72h gesperrt. Kein Verkauf, keine Auszahlung, kein Zugriff auf Creator-Kampagnen.</li>
                      </ul>
                      <p>
                        Bei Sofortsperrung werden auch laufende Livestream-Sessions abgebrochen und Creator-Kooperationen pausiert. Das kann besonders bei großen Kampagnen zu massiven Umsatzverlusten führen.
                      </p>
                      <p className="font-semibold text-slate-900">
                        Mit Marsstein können Sie innerhalb von 24h alle erforderlichen Dokumente nachreichen und die Sperrung aufheben lassen.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Wie funktioniert DSGVO bei Creator-Kooperationen und Influencer-Marketing?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        Bei Influencer-Marketing auf TikTok Shop wird es DSGVO-technisch komplex:
                      </p>
                      <p>
                        <strong>Das Kernproblem:</strong> Wer ist verantwortlich für Kundendaten, die während einer Creator-Kampagne erfasst werden?
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Sie als Seller:</strong> Sind immer der "Verantwortliche" für Käufe über Ihren Shop</li>
                        <li><strong>Der Creator:</strong> Kann "Auftragsverarbeiter" sein (wenn er Zugriff auf Kundendaten hat) ODER "gemeinsam Verantwortlicher" (wenn er eigene Daten sammelt)</li>
                        <li><strong>TikTok:</strong> Ist "Auftragsverarbeiter" für die Plattform-Infrastruktur</li>
                      </ul>
                      <p>
                        <strong>Was Sie brauchen:</strong>
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li><strong>AVV-Vertrag mit Creator:</strong> Regelt, dass der Creator nur in Ihrem Auftrag Daten verarbeitet</li>
                        <li><strong>Creator-Datenschutz-Klausel:</strong> In Ihrem Influencer-Vertrag muss stehen, wie Daten gehandhabt werden</li>
                        <li><strong>Privacy Policy-Update:</strong> Ihre Datenschutzerklärung muss Creator-Kooperationen erwähnen</li>
                      </ol>
                      <p className="font-semibold text-slate-900">
                        Marsstein erstellt automatisch rechtssichere Creator-AVVs und die passenden Privacy-Policy-Klauseln für TikTok Shop.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Gilt DSGVO auch für Livestream-Shopping auf TikTok?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Ja, und zwar besonders streng!</strong> Livestream-Shopping ist DSGVO-technisch hochsensibel.
                      </p>
                      <p>
                        <strong>Welche Daten werden erfasst?</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Echtzeit-Kommentare und Chat-Nachrichten</li>
                        <li>Kaufverhalten während des Streams (wer kauft was wann)</li>
                        <li>Interaktionen (Likes, Shares, Screenshots)</li>
                        <li>Profildaten der Teilnehmer (Name, Avatar, Follower-Count)</li>
                        <li>Geolocation (um zu sehen, aus welchem Land Zuschauer kommen)</li>
                      </ul>
                      <p>
                        <strong>Was verlangt die DSGVO?</strong>
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li><strong>Information BEVOR der Stream startet:</strong> Pop-up oder Overlay muss klären, welche Daten erfasst werden</li>
                        <li><strong>Einwilligung für Chat-Aufzeichnung:</strong> Wenn Sie Kommentare speichern wollen (z.B. für Moderation), brauchen Sie explizite Einwilligung</li>
                        <li><strong>Recht auf Löschung:</strong> Zuschauer können nach dem Stream verlangen, dass ihre Kommentare gelöscht werden</li>
                        <li><strong>Speicherfrist:</strong> TikTok speichert Livestream-Daten 30 Tage. Danach müssen Sie alles löschen, was Sie selbst erfasst haben</li>
                      </ol>
                      <p className="font-semibold text-slate-900">
                        Marsstein erstellt automatisch Livestream-Datenschutzhinweise, die Sie vor jedem Live-Event einblenden können – rechtssicher und TikTok-konform.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Kann ich die Marsstein-Dokumente direkt bei TikTok Seller Center hochladen?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Ja, absolut!</strong> Unsere Dokumente sind speziell für TikTok Shop formatiert.
                      </p>
                      <p>
                        <strong>So funktioniert die Integration:</strong>
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li><strong>Privacy Policy:</strong> In "Seller Center → Settings → Business Information → Privacy Policy" als Link oder PDF hochladen. TikTok prüft automatisch auf DSGVO-Vollständigkeit.</li>
                        <li><strong>EU-Vertreter:</strong> In "Settings → Business Information → EU Representative (GDPR Art. 27)" die Kontaktdaten eintragen. TikTok verifiziert die Adresse via E-Mail.</li>
                        <li><strong>Livestream-Hinweise:</strong> Als Overlay-Text in "Livestream Studio → Settings → Privacy Notice" hinterlegen. Wird automatisch vor Stream-Start angezeigt.</li>
                        <li><strong>Creator-AVVs:</strong> Bei Creator-Kampagnen über €10k in "Creator Marketplace → Contracts → Upload" hochladen.</li>
                      </ol>
                      <p>
                        Marsstein liefert Ihnen die Dokumente in <strong>mehreren Formaten</strong>: PDF, HTML, TXT für Copy-Paste, und sogar fertige Overlay-Grafiken für Livestreams.
                      </p>
                      <p className="font-semibold text-slate-900">
                        Bonus: Wir geben Ihnen eine Step-by-Step-Video-Anleitung für die Einrichtung in TikTok Seller Center.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Funktioniert Marsstein auch für Instagram Shopping, YouTube Shopping, etc.?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Ja, für alle großen Social Commerce-Plattformen:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>TikTok Shop:</strong> Volle Integration mit Livestream-Support und Creator-AVVs</li>
                        <li><strong>Instagram Shopping:</strong> Privacy Policy für Instagram Checkout, Reels Shopping, Story Shopping</li>
                        <li><strong>Facebook Marketplace:</strong> DSGVO-Dokumente für Facebook Shop und Marketplace-Verkäufe</li>
                        <li><strong>YouTube Shopping:</strong> Livestream-Datenschutz für YouTube Live Shopping und Shorts Shopping</li>
                        <li><strong>Pinterest Shopping:</strong> Datenschutz für Pinterest Product Pins und Katalog-Integration</li>
                      </ul>
                      <p>
                        <strong>Was ist plattformspezifisch?</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>API-Datenverarbeitungen (jede Plattform hat andere APIs)</li>
                        <li>Social Login-Integration (TikTok-Konto, Facebook-Konto, etc.)</li>
                        <li>Affiliate-Tracking und Creator-Provisionen</li>
                        <li>In-App-Payment vs. externe Zahlungsabwicklung</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Marsstein erstellt automatisch plattformspezifische Dokumente für ALLE Ihre aktiven Social Commerce-Kanäle. Ein Setup, alle Plattformen abgedeckt.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-6"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Was mache ich, wenn ein Kunde während eines Livestreams Datenschutz-Fragen stellt?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Das passiert häufiger als man denkt!</strong> Besonders in Deutschland und Frankreich sind Kunden sensibel.
                      </p>
                      <p>
                        <strong>Typische Fragen während Livestreams:</strong>
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>"Werden meine Kommentare gespeichert?"</li>
                        <li>"Wer sieht meine Daten, wenn ich jetzt kaufe?"</li>
                        <li>"Kann ich meine Daten nach dem Stream löschen lassen?"</li>
                        <li>"Wird der Stream aufgezeichnet?"</li>
                      </ul>
                      <p>
                        <strong>Was Sie tun sollten:</strong>
                      </p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li><strong>Vorbereitet sein:</strong> Haben Sie fertige Antworten parat (wir liefern Ihnen Textbausteine)</li>
                        <li><strong>Transparent antworten:</strong> "Ja, TikTok speichert Kommentare für 30 Tage. Sie können danach Löschung beantragen."</li>
                        <li><strong>Auf Privacy Policy verweisen:</strong> "Alle Details finden Sie in unserer Datenschutzerklärung [Link]"</li>
                        <li><strong>Moderator einsetzen:</strong> Lassen Sie einen Moderator im Chat Datenschutz-Fragen beantworten, damit Sie sich auf das Verkaufen konzentrieren können</li>
                      </ol>
                      <p className="font-semibold text-slate-900">
                        Marsstein liefert Ihnen fertige Chat-Antworten für die 15 häufigsten Datenschutz-Fragen während Livestreams. Einfach copy-pasten.
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
                Bereit für DSGVO-konformen TikTok Shop?
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

        <RelatedArticles articles={getRelatedArticles('tiktok-shop')} />

        <Footer />
      </div>
    </>
  );
}
