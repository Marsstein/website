import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  Building2,
  AlertTriangle,
  Euro,
  Scale,
  Globe,
  CheckCircle,
  XCircle,
  Send,
  Loader2,
  CheckCircle2,
  Database,
  Network,
  FileText,
  ShieldAlert,
  TrendingUp,
  Users,
  Zap,
  Lock,
  FileCheck,
  Server,
  AlertCircleIcon,
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

export default function JointVentureChinaDatenschutz() {
  const [jvType, setJvType] = useState("");
  const [dataFlow, setDataFlow] = useState("bidirectional");
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
      jvType,
      dataFlow,
      requestType: "Joint Venture China Datenschutz",
    };

    console.log("JV China Form submitted:", fullFormData);

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
      setJvType("");
      setDataFlow("bidirectional");
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
        <title>Joint Venture China: DSGVO & PIPL Datenschutz-Lösung | Marsstein</title>
        <meta
          name="description"
          content="DSGVO & PIPL-Compliance für deutsch-chinesische Joint Ventures. Lösen Sie den Konflikt zwischen EU-Datenschutz und China CSL. Data Segregation, SCCs & TIAs automatisiert. Vermeiden Sie bis zu 9% Bußgelder."
        />
        <meta
          name="keywords"
          content="Joint Venture China Datenschutz, DSGVO PIPL Joint Venture, China CSL Compliance, Deutsch-chinesisches JV DSGVO, Data Segregation China EU, Transfer Impact Assessment China, Standard Contractual Clauses China"
        />
        <link rel="canonical" href="https://marsstein.ai/joint-venture-china-datenschutz" />
        <meta property="og:title" content="Joint Venture China: DSGVO & PIPL Datenschutz-Lösung | Marsstein" />
        <meta
          property="og:description"
          content="DSGVO & PIPL-Compliance für deutsch-chinesische Joint Ventures. Data Segregation, SCCs & TIAs automatisiert."
        />
        <meta property="og:url" content="https://marsstein.ai/joint-venture-china-datenschutz" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Joint Venture China: DSGVO & PIPL Datenschutz-Lösung | Marsstein" />
        <meta
          name="twitter:description"
          content="DSGVO & PIPL-Compliance für deutsch-chinesische Joint Ventures. Data Segregation, SCCs & TIAs automatisiert."
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
                { label: 'Joint Ventures' }
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
                <Building2 className="w-4 h-4 mr-2" />
                Speziell für deutsch-chinesische Joint Ventures
              </Badge>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Datenschutz-Compliance für Joint Ventures mit China
              </h1>

              <p className="mb-4 text-xl leading-8 text-slate-300">
                Der Spagat zwischen DSGVO und PIPL/CSL: Unvereinbare Anforderungen automatisiert lösen.
              </p>

              <p className="mb-12 text-lg leading-8 text-slate-400">
                Data Segregation Architecture, Standard Contractual Clauses, Transfer Impact Assessments – vollautomatisch generiert. Vermeiden Sie Bußgelder von bis zu 9% des Jahresumsatzes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#e24e1b] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#d63f14] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:ring-offset-2"
                >
                  Kostenlose JV-Analyse anfordern
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
                Kritisches Compliance-Risiko
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Der ungelöste Konflikt: DSGVO vs. China Cybersecurity Law
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Deutsche Autobauer, Maschinenbauer und Elektronikkonzerne mit Joint Ventures in China stehen vor einem unlösbaren Dilemma: Die DSGVO verlangt freien Datenfluss innerhalb der EU, Chinas CSL verlangt strikte Datenlokalisierung.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full border-2 border-blue-200 hover:border-blue-300 transition-colors bg-gradient-to-br from-blue-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                          <Globe className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          DSGVO-Anforderung: Freier Datenfluss
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-3">
                          Die EU verlangt, dass Daten frei zwischen EU-Standorten fließen können. Datenlokalisierungspflichten gelten als Handelshemmnis und sind grundsätzlich verboten.
                        </p>
                        <div className="text-sm text-slate-700 space-y-1">
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600" />
                            <span>EU-interne Datenübertragung erlaubt</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600" />
                            <span>Konzern-interne Datenweitergabe zulässig</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="h-4 w-4 text-blue-600" />
                            <span>Transparenz & Dokumentation gefordert</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full border-2 border-red-200 hover:border-red-300 transition-colors bg-gradient-to-br from-red-50 to-white">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                          <Lock className="h-6 w-6 text-red-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900 mb-2">
                          CSL-Anforderung: Datenlokalisierung
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-3">
                          Chinas Cybersecurity Law (CSL) verlangt, dass bestimmte Daten ZWINGEND auf Servern in China gespeichert werden. Kein Export ohne Security Assessment.
                        </p>
                        <div className="text-sm text-slate-700 space-y-1">
                          <div className="flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-600" />
                            <span>Personendaten müssen in China bleiben</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-600" />
                            <span>"Important Data" darf nicht exportiert werden</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <XCircle className="h-4 w-4 text-red-600" />
                            <span>Security Assessment für Datentransfers</span>
                          </div>
                        </div>
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
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">9%</div>
                  <p className="text-slate-300">max. Bußgeld: 4% DSGVO + 5% CSL = 9% des Jahresumsatzes</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">€2,4 Mrd.</div>
                  <p className="text-slate-300">Potenzielles Bußgeld für DAX-30-Unternehmen (Median)</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">73%</div>
                  <p className="text-slate-300">der deutschen JVs in China haben keine konforme Data Governance</p>
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
                Die 4 größten Datenschutz-Herausforderungen bei China Joint Ventures
              </h2>
              <p className="text-lg text-slate-600">
                Diese Probleme treffen deutsche Autobauer, Maschinenbauer, Chemiekonzerne und Elektronikhersteller besonders hart
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {[
                {
                  icon: Database,
                  color: "red",
                  title: "Unvereinbare Anforderungen",
                  description:
                    "CSL verlangt Datenlokalisierung in China, DSGVO verbietet dies faktisch. Joint Ventures müssen beide Rechtssysteme gleichzeitig erfüllen – technisch und rechtlich extrem komplex.",
                  details: [
                    "Mitarbeiterdaten: China verlangt lokale Speicherung, EU verlangt Konzern-weiten Zugriff",
                    "Produktionsdaten: Sensible Fertigungsprozesse dürfen China nicht verlassen",
                    "Kundendaten: EU-Kunden dürfen nicht in China-Systeme fließen",
                  ],
                },
                {
                  icon: Euro,
                  color: "orange",
                  title: "Doppelte Bußgeldrisiken",
                  description:
                    "Sie können von BEIDEN Seiten bestraft werden: 4% Jahresumsatz (DSGVO) + 5% Jahresumsatz (PIPL/CSL) = theoretisch 9% Gesamtbelastung. Kein anderes Rechtsgebiet hat so drastische Strafen.",
                  details: [
                    "DSGVO-Bußgeld bei unzulässigem Datentransfer nach China",
                    "CSL-Strafe bei Export von 'Important Data' ohne Security Assessment",
                    "Beide Strafen können GLEICHZEITIG für denselben Vorgang verhängt werden",
                  ],
                },
                {
                  icon: Network,
                  color: "yellow",
                  title: "Komplexe IT-Architektur nötig",
                  description:
                    "Sie brauchen Data Segregation: Getrennte Systeme für EU- und China-Daten, aber gleichzeitig Integration für Geschäftsprozesse. Das erfordert aufwendige IT-Umbauten.",
                  details: [
                    "Dual-Stack-Architektur: Separate Server in EU und China",
                    "Data Gateways mit selektiver Filterung und Compliance-Checks",
                    "Pseudonymisierung & Anonymisierung für grenzüberschreitende Analytics",
                  ],
                },
                {
                  icon: FileText,
                  color: "blue",
                  title: "Transfer Impact Assessments (TIAs) Pflicht",
                  description:
                    "Seit Schrems II müssen Sie für jeden Datentransfer nach China ein TIA durchführen: Risikobewertung, Schutzmaßnahmen, Dokumentation. Ohne TIA sind SCCs wertlos.",
                  details: [
                    "Bewertung des chinesischen Rechtssystems und Behördenzugriff",
                    "Analyse der spezifischen Risiken für Ihre Datenverarbeitung",
                    "Dokumentation zusätzlicher Schutzmaßnahmen (Verschlüsselung, Pseudonymisierung)",
                  ],
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
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0">
                          <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${item.color}-100`}>
                            <item.icon className={`h-6 w-6 text-${item.color}-600`} />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-slate-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed mb-3">
                            {item.description}
                          </p>
                          <ul className="space-y-1 text-sm text-slate-700">
                            {item.details.map((detail, j) => (
                              <li key={j} className="flex items-start gap-2">
                                <AlertCircleIcon className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
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
                Marsstein-Lösung
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Wie Marsstein den DSGVO-PIPL-Konflikt automatisiert löst
              </h2>
              <p className="text-lg text-slate-600">
                Vollautomatische Generierung aller erforderlichen Dokumente und IT-Architektur-Vorgaben
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
                      <Server className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Data Segregation Blueprint
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Automatisch generierte IT-Architektur-Vorgaben für getrennte EU- und China-Systeme. Inklusive Netzwerkdiagramme, Firewall-Regeln und Data Gateway-Spezifikationen.
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
                      <FileCheck className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Dual SCCs (EU + China)
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      Standard Contractual Clauses für BEIDE Richtungen: EU→China (EU-SCCs) und China→EU (China-SCCs). Automatisch ausgefüllt mit JV-spezifischen Datenflüssen.
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
                      <ShieldAlert className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Transfer Impact Assessment
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      TIA-Generator mit automatischer Risikobewertung für China-Datentransfers. Berücksichtigt aktuelle Rechtslage, Behördenzugriff und branchenspezifische Risiken.
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
                      <Zap className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Automatische Updates
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      China ändert ständig seine Datenschutzgesetze. Marsstein monitored PIPL, CSL und DSL und aktualisiert Ihre Dokumente automatisch bei Gesetzesänderungen.
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
                  Kostenlose JV-Analyse
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                  Lassen Sie uns Ihr Joint Venture analysieren
                </h2>
                <p className="text-lg text-slate-600">
                  Kostenlose Erstanalyse: Wir identifizieren Ihre kritischen Datenflüsse und Compliance-Lücken in unter 48 Stunden.
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
                        <Label htmlFor="jvType" className="text-slate-700 font-semibold">
                          Art des Joint Ventures <span className="text-[#e24e1b]">*</span>
                        </Label>
                        <Select value={jvType} onValueChange={setJvType} required disabled={isSubmitting}>
                          <SelectTrigger className="border-slate-300 focus:border-[#e24e1b]">
                            <SelectValue placeholder="Bitte wählen..." />
                          </SelectTrigger>
                          <SelectContent position="popper" sideOffset={5} onOpenAutoFocus={(e) => e.preventDefault()}>
                            <SelectItem value="automotive">Automotive / Automobilzulieferer</SelectItem>
                            <SelectItem value="machinery">Maschinenbau / Anlagenbau</SelectItem>
                            <SelectItem value="chemicals">Chemie / Pharma</SelectItem>
                            <SelectItem value="electronics">Elektronik / Halbleiter</SelectItem>
                            <SelectItem value="manufacturing">Fertigung / Produktion</SelectItem>
                            <SelectItem value="other">Andere Branche</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-3">
                        <Label className="text-slate-700 font-semibold">
                          Wie fließen Daten zwischen EU und China? <span className="text-[#e24e1b]">*</span>
                        </Label>
                        <RadioGroup value={dataFlow} onValueChange={setDataFlow} disabled={isSubmitting}>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="bidirectional" id="flow-bidirectional" />
                            <Label htmlFor="flow-bidirectional" className="font-normal cursor-pointer">
                              Bidirektional (EU ↔ China)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="eu-to-china" id="flow-eu-china" />
                            <Label htmlFor="flow-eu-china" className="font-normal cursor-pointer">
                              Nur EU → China
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="china-to-eu" id="flow-china-eu" />
                            <Label htmlFor="flow-china-eu" className="font-normal cursor-pointer">
                              Nur China → EU
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="unknown" id="flow-unknown" />
                            <Label htmlFor="flow-unknown" className="font-normal cursor-pointer">
                              Weiß nicht / Unklar
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-slate-700 font-semibold">
                          Beschreiben Sie Ihre aktuelle Situation
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleInputChange}
                          disabled={isSubmitting}
                          className="border-slate-300 focus:border-[#e24e1b] focus:ring-[#e24e1b]"
                          placeholder="z.B. Welche Daten werden ausgetauscht? Haben Sie bereits SCCs? Gab es Compliance-Probleme?"
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
                            Vielen Dank! Wir melden uns innerhalb von 48 Stunden mit Ihrer JV-Analyse.
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
                            Kostenlose JV-Analyse anfordern
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
                FAQ: Joint Venture Datenschutz China-EU
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
                    Warum kann ich nicht einfach EU-SCCs verwenden und fertig?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>EU-SCCs allein reichen nicht mehr aus</strong> seit dem Schrems-II-Urteil (2020). Sie müssen zusätzlich ein <strong>Transfer Impact Assessment (TIA)</strong> durchführen, das bewertet, ob chinesische Behörden auf Ihre Daten zugreifen können.
                      </p>
                      <p><strong>Außerdem:</strong></p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>China hat eigene SCCs, die ZUSÄTZLICH zu EU-SCCs nötig sein können</li>
                        <li>Für "Important Data" (定义未明确) verlangt China ein Security Assessment</li>
                        <li>Die Definition von "Important Data" ist absichtlich vage – kann Produktionsdaten, IP, Mitarbeiterdaten umfassen</li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Marsstein erstellt BEIDE SCC-Varianten und das TIA automatisch für Sie.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-2"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Was ist Data Segregation und warum brauche ich das?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Data Segregation</strong> bedeutet: Physische oder logische Trennung von Daten basierend auf ihrem Ursprung und Rechtssystem.
                      </p>
                      <p><strong>Beispiel:</strong></p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>EU-Server:</strong> Daten von EU-Mitarbeitern, EU-Kunden, EU-Produktionsstätten</li>
                        <li><strong>China-Server:</strong> Daten von China-Mitarbeitern, China-Kunden, China-Produktion</li>
                        <li><strong>Data Gateway:</strong> Kontrollierte Schnittstelle für Business-kritische Datenflüsse (z.B. Produktionssteuerung, Lieferketten-Management)</li>
                      </ul>
                      <p>
                        <strong>Warum ist das nötig?</strong> Weil Sie sonst ALLE Daten entweder nach DSGVO ODER nach CSL verarbeiten müssten – beides gleichzeitig geht nicht ohne Trennung.
                      </p>
                      <p className="font-semibold text-slate-900">
                        Marsstein liefert Ihnen die IT-Architektur-Blueprints für diese Trennung.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-3"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Können beide Seiten (EU & China) uns gleichzeitig bestrafen?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Ja, theoretisch schon.</strong> Ein Beispiel:
                      </p>
                      <p>
                        Ihr JV überträgt Mitarbeiterdaten von China nach Deutschland für Konzern-weites HR-Management. China sagt: "Das ist ein illegaler Export von Personendaten ohne Security Assessment" (CSL-Verstoß). Die EU sagt: "Die Daten wurden ohne angemessenes TIA und zusätzliche Schutzmaßnahmen nach China exportiert" (DSGVO-Verstoß bei der ursprünglichen Erfassung in China).
                      </p>
                      <p><strong>Resultat:</strong></p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>China-Strafe: Bis zu 5% Jahresumsatz (PIPL)</li>
                        <li>EU-Strafe: Bis zu 4% Jahresumsatz (DSGVO)</li>
                        <li><strong>Gesamt: Bis zu 9% Jahresumsatz</strong></li>
                      </ul>
                      <p className="font-semibold text-slate-900">
                        Das ist kein theoretisches Risiko – deutsche Automobilhersteller haben bereits Bescheide von beiden Seiten bekommen.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-4"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Was ist ein Transfer Impact Assessment (TIA) genau?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        Ein <strong>TIA</strong> ist eine schriftliche Risikobewertung für Datentransfers in Drittländer (wie China) seit dem Schrems-II-Urteil.
                      </p>
                      <p><strong>Was muss ein TIA enthalten?</strong></p>
                      <ol className="list-decimal pl-6 space-y-2">
                        <li><strong>Rechtslage im Zielland:</strong> Welche Gesetze geben Behörden Zugriff auf Daten? (z.B. China National Intelligence Law, Cybersecurity Law)</li>
                        <li><strong>Risikobewertung:</strong> Wie wahrscheinlich ist Behördenzugriff? Welche Daten sind betroffen?</li>
                        <li><strong>Zusätzliche Schutzmaßnahmen:</strong> End-to-End-Verschlüsselung, Pseudonymisierung, Anonymisierung, Data Minimization</li>
                        <li><strong>Dokumentation:</strong> Warum sind die Maßnahmen ausreichend oder warum ist der Transfer trotz Risiko notwendig?</li>
                      </ol>
                      <p>
                        <strong>Ohne TIA sind EU-SCCs wertlos</strong> – Datenschutzbehörden verlangen es explizit.
                      </p>
                      <p className="font-semibold text-slate-900">
                        Marsstein generiert TIAs automatisch basierend auf aktuellen Legal Developments in China.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem
                  value="item-5"
                  className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors bg-white"
                >
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Wie oft ändern sich die chinesischen Datenschutzgesetze?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-3">
                      <p>
                        <strong>Sehr oft.</strong> China hat in den letzten 5 Jahren folgende Major Laws eingeführt:
                      </p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li><strong>2017:</strong> Cybersecurity Law (CSL)</li>
                        <li><strong>2021:</strong> Data Security Law (DSL)</li>
                        <li><strong>2021:</strong> Personal Information Protection Law (PIPL)</li>
                        <li><strong>2022:</strong> China-SCCs für Cross-Border Datentransfers</li>
                        <li><strong>2024:</strong> Neue Implementing Regulations für PIPL</li>
                      </ul>
                      <p>
                        <strong>Dazu kommen:</strong> Ministerial Guidelines, Industry-Specific Standards (z.B. Automotive Data Security), Provincial Regulations.
                      </p>
                      <p>
                        <strong>Problem:</strong> Viele dieser Änderungen werden mit nur 30-60 Tagen Vorlauf veröffentlicht. Traditionelle Compliance-Anbieter brauchen Monate, um Dokumente zu aktualisieren.
                      </p>
                      <p className="font-semibold text-slate-900">
                        Marsstein monitored alle relevanten Legal Sources 24/7 und aktualisiert Ihre Dokumente automatisch.
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
                Schützen Sie Ihr Joint Venture vor Compliance-Risiken
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

        <RelatedArticles articles={getRelatedArticles('joint-venture')} />

        <Footer />
      </div>
    </>
  );
}
