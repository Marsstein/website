import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Globe,
  CheckCircle,
  Users,
  TrendingUp,
  AlertCircle,
  Award,
  Clock,
  ArrowRight,
  Send,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Building2,
  Scale,
  HeartHandshake,
} from "lucide-react";
import teamGroupImage from "@/assets/team/team-group.png";

export default function CnGdpr() {
  const [salesChannel, setSalesChannel] = useState("");
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

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target?.getAttribute('role') === 'presentation' || target?.hasAttribute('data-radix-select-viewport')) {
        return;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
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
      salesChannel,
      euRep,
    };

    console.log("Form submitted:", fullFormData);

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
      setSalesChannel("");
      setEuRep("no");
    } catch (error) {
      setSubmitStatus("error");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>
          DSGVO China: Compliance für chinesische Unternehmen | Marsstein
        </title>
        <meta
          name="description"
          content="DSGVO-Lösungen für chinesische Unternehmen im EU-Markt. Art. 27 EU-Vertreter, Privacy Policy & SCCs automatisch. Auf Mandarin. ✓ Schnelle Implementierung"
        />
        <meta name="keywords" content="DSGVO China, GDPR China, EU Vertreter China, Art 27 DSGVO, chinesische Unternehmen DSGVO, Amazon Seller GDPR China, TikTok Shop DSGVO" />
        <link rel="canonical" href="https://marsstein.ai/dsgvo-china" />
        <meta property="og:title" content="DSGVO China: Compliance für chinesische Unternehmen" />
        <meta property="og:description" content="DSGVO-Lösungen für chinesische Unternehmen im EU-Markt. Art. 27 EU-Vertreter, Privacy Policy & SCCs automatisch." />
        <meta property="og:url" content="https://marsstein.ai/dsgvo-china" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DSGVO China: Compliance für chinesische Unternehmen" />
        <meta name="twitter:description" content="DSGVO-Lösungen für chinesische Unternehmen im EU-Markt. Automatisch auf Mandarin." />
      </Helmet>

      <Header />

      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-20 lg:py-32">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

          <div className="container relative mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-5xl text-center"
            >
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-8 border border-white/20">
                <Building2 className="h-5 w-5 text-[#e24e1b]" />
                <span className="text-sm font-semibold text-white">Ihr vertrauenswürdiger Partner in Deutschland</span>
              </div>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Ihr deutscher Datenschutzpartner für den chinesischen Markt
              </h1>
              <p className="mb-8 text-xl text-slate-300 lg:text-2xl leading-relaxed">
                Rechtssichere DSGVO-Beratung zwischen Deutschland und China. Mit TÜV-zertifiziertem Datenschutzbeauftragten, persönlicher Betreuung auf Mandarin und Art. 27 EU-Vertreter-Service.
              </p>

              <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button
                  size="lg"
                  className="bg-[#e24e1b] text-white hover:bg-[#c43d0f] shadow-xl"
                  asChild
                >
                  <a href="#contact">Kostenlose Erstberatung buchen</a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 backdrop-blur-sm" asChild>
                  <a href="#team">Unser Team kennenlernen</a>
                </Button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Building2 className="h-8 w-8 text-[#e24e1b] mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">Deutschland</div>
                  <div className="text-xs text-slate-300">Sitz in Konstanz</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Globe className="h-8 w-8 text-[#e24e1b] mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">Mandarin</div>
                  <div className="text-xs text-slate-300">Vollständige Betreuung</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <HeartHandshake className="h-8 w-8 text-[#e24e1b] mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">Persönlich</div>
                  <div className="text-xs text-slate-300">Direkte Betreuung</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <Scale className="h-8 w-8 text-[#e24e1b] mx-auto mb-2" />
                  <div className="text-sm font-semibold text-white">Rechtssicher</div>
                  <div className="text-xs text-slate-300">EU-konform</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="team" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-6xl"
            >
              <div className="relative rounded-3xl overflow-hidden mb-12 shadow-2xl">
                <div className="absolute inset-0">
                  <img
                    src={teamGroupImage}
                    alt="Marsstein Team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/60 to-slate-900/40"></div>
                </div>
                <div className="relative z-10">
                  <div className="w-full p-8 md:p-12">
                    <div className="max-w-4xl mx-auto">
                      <div className="inline-block mb-6">
                        <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30">
                          <Users className="w-5 h-5 text-white" />
                          <span className="text-white font-semibold text-sm">Unser Team</span>
                        </div>
                      </div>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Ihr{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e24e1b] to-[#f97316]">
                          deutsch-chinesisches Expertenteam
                        </span>
                        {' '}für DSGVO-Compliance
                      </h2>
                      <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                        Wir verbinden deutsches Datenschutzrecht mit chinesischer Geschäftskultur – persönlich, rechtssicher und auf Augenhöhe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 md:p-12 border-2 border-[#e24e1b]/20"
              >
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <div className="text-4xl font-bold text-[#e24e1b] mb-2">
                      <Award className="w-12 h-12 mx-auto" />
                    </div>
                    <div className="text-gray-700 font-medium">TÜV-zertifizierter Datenschutzbeauftragter</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#e24e1b] mb-2">5</div>
                    <div className="text-gray-700 font-medium">Experten im Team</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#e24e1b] mb-2">
                      <Users className="w-12 h-12 mx-auto" />
                    </div>
                    <div className="text-gray-700 font-medium">Deutsch-Chinesisches Team</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-[#e24e1b] mb-2">
                      <Building2 className="w-12 h-12 mx-auto" />
                    </div>
                    <div className="text-gray-700 font-medium">Sitz in Konstanz, Deutschland</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-6xl"
            >
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-[#e24e1b]/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-[#e24e1b]/20">
                  <Scale className="w-5 h-5 text-[#e24e1b]" />
                  <span className="text-sm font-semibold text-[#e24e1b]">Unsere Expertise</span>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-5xl">
                  Rechtsgebiete im <span className="text-[#e24e1b]">deutsch-chinesischen Datenschutz</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Wir beraten Sie zu allen relevanten Compliance-Anforderungen zwischen EU und China
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b] transition-all duration-300">
                    <CardContent className="pt-8 pb-8 px-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#e24e1b] to-[#f97316] flex-shrink-0">
                          <Scale className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">
                            EU-Datenschutzrecht (DSGVO)
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            Vollständige DSGVO-Compliance für chinesische Unternehmen im EU-Markt: Art. 27 EU-Vertreter, Datenschutzerklärung, Verarbeitungsverzeichnis, TOM, Löschkonzept und Betroffenenrechte.
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
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b] transition-all duration-300">
                    <CardContent className="pt-8 pb-8 px-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#e24e1b] to-[#f97316] flex-shrink-0">
                          <Globe className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">
                            EU AI Act Compliance
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            Beratung zur KI-Verordnung der EU: Risikoklassifizierung von KI-Systemen, Transparenzpflichten, Dokumentation und Konformitätsbewertung für KI-gestützte Produkte und Services.
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
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b] transition-all duration-300">
                    <CardContent className="pt-8 pb-8 px-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#e24e1b] to-[#f97316] flex-shrink-0">
                          <TrendingUp className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">
                            Internationaler Datentransfer
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            Standard Contractual Clauses (SCCs), Transfer Impact Assessment (TIA) und Binding Corporate Rules (BCRs) für rechtssichere Datentransfers zwischen China und EU.
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
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b] transition-all duration-300">
                    <CardContent className="pt-8 pb-8 px-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#e24e1b] to-[#f97316] flex-shrink-0">
                          <CheckCircle className="h-7 w-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-slate-900 mb-2">
                            E-Commerce Compliance
                          </h3>
                          <p className="text-sm text-slate-600 leading-relaxed">
                            Spezifische Beratung für Amazon, TikTok Shop, Temu und eigene Online-Shops: Marketplace-Richtlinien, Cookie-Banner, Bestellprozesse und Kundendatenmanagement.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-6xl"
            >
              <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-[#e24e1b]/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6 border border-[#e24e1b]/20">
                  <Award className="w-5 h-5 text-[#e24e1b]" />
                  <span className="text-sm font-semibold text-[#e24e1b]">Unser Angebot</span>
                </div>
                <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-5xl">
                  Ihr <span className="text-[#e24e1b]">Full-Service Partner</span> für DSGVO-Compliance
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Wir sind die Brücke zwischen China und Deutschland – mit persönlicher Betreuung auf Mandarin und vollständiger DSGVO-Umsetzung
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b] transition-all duration-300 hover:shadow-xl">
                    <CardContent className="pt-8 pb-8 px-6">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e24e1b] to-[#f97316]">
                        <Scale className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-slate-900">
                        Art. 27 EU-Vertreter
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Wir übernehmen die gesetzlich vorgeschriebene Vertretung Ihres Unternehmens in der EU. Mit Sitz in Deutschland sind wir Ihr offizieller Ansprechpartner für Behörden und Betroffene.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#e24e1b] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Gesetzeskonform nach Art. 27 DSGVO</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#e24e1b] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Direkte Kommunikation auf Mandarin</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#e24e1b] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Behördenkontakt & Dokumentation</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b] transition-all duration-300 hover:shadow-xl">
                    <CardContent className="pt-8 pb-8 px-6">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e24e1b] to-[#f97316]">
                        <CheckCircle className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-slate-900">
                        Vollständige DSGVO-Umsetzung
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Von der Erstberatung bis zur fertigen Dokumentation – wir setzen alle DSGVO-Anforderungen für Ihr Unternehmen um. Rechtssicher, praxisnah und verständlich erklärt.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#e24e1b] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Datenschutzerklärung (Privacy Policy)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#e24e1b] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Verarbeitungsverzeichnis (Art. 30)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#e24e1b] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">SCCs, TOM, Löschkonzept & mehr</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b] transition-all duration-300 hover:shadow-xl">
                    <CardContent className="pt-8 pb-8 px-6">
                      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#e24e1b] to-[#f97316]">
                        <HeartHandshake className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="mb-4 text-2xl font-bold text-slate-900">
                        Deutsch-Chinesisches Team
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Unser bikulturelles Team versteht beide Welten. Wir übersetzen nicht nur Sprache, sondern auch Geschäftspraktiken, Rechtssysteme und kulturelle Unterschiede.
                      </p>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#e24e1b] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Muttersprachler Deutsch & Mandarin</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#e24e1b] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">Verständnis für chinesische Geschäftskultur</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-[#e24e1b] flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-700">PIPL & DSGVO Expertise</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="mt-12 text-center"
              >
                <a href="#contact">
                  <Button size="lg" className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white hover:from-[#d63f14] hover:to-[#ea580c] shadow-lg hover:shadow-xl px-8">
                    Kostenlose Erstberatung buchen
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section id="solution" className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-5xl"
            >
              <div className="text-center mb-16">
                <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-5xl">
                  Von der Erstberatung zur vollständigen <span className="text-[#e24e1b]">DSGVO-Compliance</span>
                </h2>
                <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                  Transparent, persönlich und auf Mandarin – so begleiten wir Sie Schritt für Schritt
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center"
                >
                  <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#e24e1b] to-[#f97316] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Erstberatung
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Kostenlose 30-Minuten-Beratung auf Mandarin oder Deutsch. Wir analysieren Ihre Situation und erstellen einen maßgeschneiderten Plan.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center"
                >
                  <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#e24e1b] to-[#f97316] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Umsetzung
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Wir erstellen alle notwendigen Dokumente, übernehmen die EU-Vertretung und setzen alle DSGVO-Anforderungen vollständig um.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center"
                >
                  <div className="mb-6 mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#e24e1b] to-[#f97316] flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Laufende Betreuung
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Wir bleiben Ihr Ansprechpartner – für Updates, Fragen und neue Anforderungen. Direkt auf Mandarin erreichbar.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="contact" className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0 mb-4">
                <Send className="w-3 h-3 mr-1" />
                Kontakt
              </Badge>
              <h2 className="mb-4 text-3xl font-bold text-slate-900 lg:text-4xl">
                Der EU-Markt wartet nicht – starten Sie jetzt compliant und sicher.
              </h2>
              <p className="text-lg text-slate-600">
                Erhalten Sie innerhalb von 24 Stunden eine individuelle Einschätzung für Ihr Unternehmen
              </p>
            </div>

            <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <Card className="border-2 border-slate-200 shadow-lg">
                <CardContent className="pt-6">
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    {submitStatus === "success" && (
                      <div className="rounded-lg bg-green-50 border border-green-200 p-4 flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-green-900 mb-1">Vielen Dank für Ihre Anfrage!</h4>
                          <p className="text-sm text-green-700">
                            Wir haben Ihre Nachricht erhalten und werden uns innerhalb von 24 Stunden bei Ihnen melden.
                          </p>
                        </div>
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="rounded-lg bg-red-50 border border-red-200 p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-red-900 mb-1">Fehler beim Absenden</h4>
                          <p className="text-sm text-red-700">
                            Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt per E-Mail.
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="companyName" className="text-slate-700 font-semibold">
                          Firmenname <span className="text-[#e24e1b]">*</span>
                        </Label>
                        <Input
                          id="companyName"
                          value={formData.companyName}
                          onChange={handleInputChange}
                          placeholder="z.B. Ihre Firma GmbH"
                          required
                          disabled={isSubmitting}
                          className="border-slate-300 focus:border-[#e24e1b]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-slate-700 font-semibold">
                          E-Mail <span className="text-[#e24e1b]">*</span>
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="ihre@email.com"
                          required
                          disabled={isSubmitting}
                          className="border-slate-300 focus:border-[#e24e1b]"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-slate-700 font-semibold">
                        Telefon
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+86 xxx xxxx xxxx"
                        disabled={isSubmitting}
                        className="border-slate-300 focus:border-[#e24e1b]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="salesChannel" className="text-slate-700 font-semibold">
                        Wie verkaufen Sie in die EU? <span className="text-[#e24e1b]">*</span>
                      </Label>
                      <Select value={salesChannel} onValueChange={setSalesChannel} required disabled={isSubmitting}>
                        <SelectTrigger className="border-slate-300 focus:border-[#e24e1b]">
                          <SelectValue placeholder="Bitte wählen..." />
                        </SelectTrigger>
                        <SelectContent
                          position="popper"
                          sideOffset={5}
                          onOpenAutoFocus={(e) => e.preventDefault()}
                          onCloseAutoFocus={(e) => e.preventDefault()}
                        >
                          <SelectItem value="amazon">Amazon</SelectItem>
                          <SelectItem value="tiktok">TikTok Shop</SelectItem>
                          <SelectItem value="temu">Temu</SelectItem>
                          <SelectItem value="shopify">Shopify / Eigener Online-Shop</SelectItem>
                          <SelectItem value="b2b">B2B / Großhandel</SelectItem>
                          <SelectItem value="multiple">Mehrere Kanäle</SelectItem>
                          <SelectItem value="other">Andere</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-slate-700 font-semibold">
                        Haben Sie bereits einen Art. 27 EU-Vertreter? <span className="text-[#e24e1b]">*</span>
                      </Label>
                      <RadioGroup value={euRep} onValueChange={setEuRep} disabled={isSubmitting} className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="yes" id="rep-yes" disabled={isSubmitting} className="border-slate-300 text-[#e24e1b]" />
                          <Label htmlFor="rep-yes" className="font-normal cursor-pointer">
                            Ja, wir haben bereits einen EU-Vertreter
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="no" id="rep-no" disabled={isSubmitting} className="border-slate-300 text-[#e24e1b]" />
                          <Label htmlFor="rep-no" className="font-normal cursor-pointer">
                            Nein, wir benötigen einen
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="unknown" id="rep-unknown" disabled={isSubmitting} className="border-slate-300 text-[#e24e1b]" />
                          <Label htmlFor="rep-unknown" className="font-normal cursor-pointer">
                            Weiß nicht / Bin mir unsicher
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
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Beschreiben Sie Ihre aktuelle Situation oder stellen Sie Fragen..."
                        rows={4}
                        disabled={isSubmitting}
                        className="border-slate-300 focus:border-[#e24e1b] resize-none"
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="betaAccess"
                        checked={formData.betaAccess}
                        onCheckedChange={handleCheckboxChange}
                        disabled={isSubmitting}
                        className="mt-1 border-slate-300 data-[state=checked]:bg-[#e24e1b] data-[state=checked]:border-[#e24e1b]"
                      />
                      <Label htmlFor="betaAccess" className="font-normal text-sm cursor-pointer leading-relaxed">
                        Ich möchte den <strong>Beta-Zugang</strong> erhalten und die Plattform kostenlos testen
                      </Label>
                    </div>

                    <div className="pt-4">
                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white hover:from-[#d63f14] hover:to-[#ea580c] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Clock className="w-4 h-4 mr-2 animate-spin" />
                            Wird gesendet...
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Anfrage absenden
                          </>
                        )}
                      </Button>
                      <p className="text-xs text-slate-500 text-center mt-3">
                        Antwort innerhalb von 24 Stunden • Kostenlose Erstberatung • Keine Verpflichtung
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <Card className="border-2 border-slate-200 shadow-lg">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-6">Direkter Kontakt</h3>

                    <div className="space-y-6">
                      <div>
                        <div className="flex items-start gap-3 mb-2">
                          <Mail className="w-5 h-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-slate-900">E-Mail</div>
                            <a href="mailto:info@marsstein.ai" className="text-[#e24e1b] hover:underline">
                              info@marsstein.ai
                            </a>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 ml-8">Antwort innerhalb von 24 Stunden</p>
                      </div>

                      <div>
                        <div className="flex items-start gap-3 mb-2">
                          <Phone className="w-5 h-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-slate-900">Telefon</div>
                            <a href="tel:+4917670560292" className="text-[#e24e1b] hover:underline">
                              +49 176 70560292
                            </a>
                          </div>
                        </div>
                        <p className="text-sm text-slate-600 ml-8">Mo-Fr 9:00-18:00 Uhr</p>
                      </div>

                      <div>
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-slate-900 mb-1">Adresse</div>
                            <div className="text-slate-600 text-sm leading-relaxed">
                              Marsstein GmbH i.G.<br />
                              Bücklestraße 3<br />
                              78467 Konstanz<br />
                              Deutschland
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 border-[#e24e1b]/20 bg-gradient-to-br from-white to-[#e24e1b]/5 shadow-lg">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3 mb-4">
                      <Calendar className="w-6 h-6 text-[#e24e1b] mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-slate-900 text-lg mb-2">Kostenlose Erstberatung</h4>
                        <p className="text-slate-600 text-sm">
                          Vereinbaren Sie ein unverbindliches Beratungsgespräch mit unseren Compliance-Experten.
                        </p>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      <li className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        30 Minuten Expertengespräch
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        Individuelle Lösungsvorschläge
                      </li>
                      <li className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                        Unverbindlich & kostenlos
                      </li>
                    </ul>

                    <Button
                      className="w-full bg-[#e24e1b] text-white hover:bg-[#c43d0f]"
                      asChild
                    >
                      <a href="/beta">
                        <Calendar className="w-4 h-4 mr-2" />
                        Termin buchen
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-4xl"
            >
              <h2 className="mb-12 text-center text-3xl font-bold text-slate-900 lg:text-4xl">
                Häufig gestellte Fragen
              </h2>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1" className="border-b border-slate-200">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#e24e1b] py-6">
                    Brauche ich wirklich einen EU-Vertreter, wenn ich nur online verkaufe?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6">
                    Ja. Art. 27 DSGVO verlangt einen EU-Vertreter für alle Nicht-EU-Unternehmen, die personenbezogene Daten von EU-Bürgern verarbeiten (Name, Adresse, E-Mail bei Bestellung). Dies gilt auch für reine Online-Shops auf Amazon, TikTok Shop oder eigenen Websites. Ohne EU-Vertreter drohen Bußgelder bis €525.000 (Precedent-Fall).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-b border-slate-200">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#e24e1b] py-6">
                    Was sind Standard Contractual Clauses (SCCs)?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6">
                    SCCs sind von der EU-Kommission vorgegebene Vertragsklauseln für Datentransfers außerhalb der EU. Sie sind seit dem Schrems-II-Urteil (2020) die wichtigste Rechtsgrundlage für China ↔ EU Datenaustausch. Marsstein generiert diese automatisch für Sie.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-b border-slate-200">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#e24e1b] py-6">
                    Wie funktioniert die PIPL-GDPR-Synchronisation?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6">
                    Marsstein erstellt Ihre DSGVO-Dokumente so, dass sie gleichzeitig PIPL-konform sind. Beispiel: Wir dokumentieren sowohl 'separate consent' (PIPL) als auch transparente Verarbeitungszwecke (DSGVO) in einem Workflow. So erfüllen Sie beide Rechtssysteme ohne Widersprüche.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-b border-slate-200">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#e24e1b] py-6">
                    Ist die Plattform wirklich komplett auf Chinesisch?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6">
                    Ja. Das gesamte Interface, alle Fragen, Hilfe-Texte und der Support-Chat sind auf Mandarin verfügbar. Die generierten Dokumente erhalten Sie in drei Sprachen: Deutsch, Englisch und Chinesisch (vereinfacht).
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-b border-slate-200">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#e24e1b] py-6">
                    Was passiert, wenn sich die DSGVO ändert?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6">
                    Ihre Dokumente werden automatisch aktualisiert. Professional- und Enterprise-Kunden erhalten proaktive Benachrichtigungen über relevante Gesetzesänderungen auf Chinesisch. Sie müssen sich nicht selbst um Updates kümmern.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-b border-slate-200">
                  <AccordionTrigger className="text-left text-lg font-semibold text-slate-900 hover:text-[#e24e1b] py-6">
                    Wie lange dauert die Implementierung wirklich?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-6">
                    Onboarding: 30-60 Minuten | Dokumentenerstellung: 1-2 Tage | EU-Vertreter-Setup: 3-5 Tage. <strong>Gesamt: 7 Tage bis zur vollständigen DSGVO-Compliance.</strong> Im Notfall (z.B. drohende Account-Sperrung) können wir die wichtigsten Dokumente in 48 Stunden bereitstellen.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}
