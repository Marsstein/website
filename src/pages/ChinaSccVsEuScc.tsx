import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  FileText,
  AlertTriangle,
  Scale,
  Globe,
  ArrowLeftRight,
  CheckCircle,
  XCircle,
  Send,
  Loader2,
  CheckCircle2,
  Shield,
  Lock,
  Users,
  Building2,
  FileCheck,
  AlertCircle,
  Database,
  Gavel,
  TrendingUp,
  ShoppingCart,
  Factory,
  Truck,
  Target,
  Zap,
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

export default function ChinaSccVsEuScc() {
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

    console.log("SCC Comparison Form submitted:", formData);

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

  const comparisonData = [
    {
      aspect: "Governing Law (Rechtsgrundlage)",
      chinaSCC: "Nur chinesisches Recht. Keine Wahlfreiheit.",
      euSCC: "Freie Wahl des Rechts durch Parteien (meist EU-Recht)",
      conflict: true,
      icon: Gavel,
    },
    {
      aspect: "Gerichtsstand (Dispute Resolution)",
      chinaSCC: "Ausschließlich chinesische Gerichte oder CAC-genehmigte Tribunale",
      euSCC: "EU-Gerichte oder Schiedsverfahren nach Wahl",
      conflict: true,
      icon: Building2,
    },
    {
      aspect: "Consent Requirements",
      chinaSCC: "Explizite separate Einwilligung für Transfers (PIPL-Pflicht)",
      euSCC: "Nicht zwingend bei adequate safeguards (Art. 46 DSGVO)",
      conflict: true,
      icon: Users,
    },
    {
      aspect: "Security Assessment",
      chinaSCC: "Pflicht ab 1 Mio. Personen oder 10.000 sensible Daten (CAC-Prüfung)",
      euSCC: "Keine festen Schwellenwerte, nur Transfer Impact Assessment (TIA)",
      conflict: true,
      icon: Shield,
    },
    {
      aspect: "Onward Transfers (Weitergabe)",
      chinaSCC: "Strikte Informationspflicht über alle Details der Weitergabe",
      euSCC: "Moderate Dokumentationspflicht",
      conflict: false,
      icon: ArrowLeftRight,
    },
    {
      aspect: "Data Subject Rights",
      chinaSCC: "Direkte Klagemöglichkeit gegen ausländischen Empfänger in China",
      euSCC: "Klagemöglichkeit in EU gegen Empfänger",
      conflict: true,
      icon: Scale,
    },
    {
      aspect: "Template Flexibility",
      chinaSCC: "Keine Änderungen erlaubt. Nur Anhänge möglich.",
      euSCC: "4 verschiedene Module (C2C, C2P, P2P, P2C) wählbar",
      conflict: false,
      icon: FileText,
    },
    {
      aspect: "Filing Requirements",
      chinaSCC: "Meldepflicht bei CAC für alle Cross-Border-Transfers",
      euSCC: "Keine generelle Meldepflicht (nur bei Breach)",
      conflict: true,
      icon: Database,
    },
  ];

  return (
    <>
      <Helmet>
        <title>China SCCs vs. EU SCCs: Kritische Unterschiede bei Standard Contractual Clauses | Marsstein</title>
        <meta
          name="description"
          content="China Standard Contract (2023) vs. EU Standard Contractual Clauses (2021). 8 konfliktträchtige Unterschiede für bidirektionale Datentransfers EU↔China. Framework Agreement Lösung."
        />
        <meta
          name="keywords"
          content="China SCC, EU SCC, Standard Contractual Clauses China, PIPL vs GDPR, Cross-Border Data Transfer, China Standard Contract, CAC Security Assessment, Dual Transfer China EU"
        />
        <link rel="canonical" href="https://marsstein.ai/china-scc-vs-eu-scc" />
        <meta property="og:title" content="China SCCs vs. EU SCCs: Die kritischen Unterschiede" />
        <meta
          property="og:description"
          content="Vergleich China Standard Contract vs. EU SCCs. So managen Sie bidirektionale Datentransfers EU↔China konfliktfrei."
        />
        <meta property="og:url" content="https://marsstein.ai/china-scc-vs-eu-scc" />
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
                { label: 'SCC Vergleich' }
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
                <ArrowLeftRight className="w-4 h-4 mr-2" />
                Cross-Border Data Transfers EU ↔ China
              </Badge>

              <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                China SCCs vs. EU SCCs: Die 8 kritischsten Unterschiede
              </h1>

              <p className="mb-4 text-xl leading-8 text-slate-300">
                China Standard Contract (2023) kollidiert mit EU Standard Contractual Clauses (2021). So lösen Sie Konflikte bei bidirektionalen Datentransfers.
              </p>

              <p className="mb-12 text-lg leading-8 text-slate-400">
                Unternehmen mit Datenfluss in beide Richtungen (EU↔China) benötigen BEIDE SCC-Sets. Ohne Framework Agreement riskieren Sie rechtliche Grauzonen und Compliance-Verstöße.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg bg-[#e24e1b] px-8 py-4 text-base font-semibold text-white shadow-lg transition hover:bg-[#d63f14] focus:outline-none focus:ring-2 focus:ring-[#e24e1b] focus:ring-offset-2"
                >
                  Jetzt SCC-Lösung erhalten
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
                Detaillierter Vergleich: 8 kritische Unterschiede
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Diese Tabelle zeigt die wichtigsten Konfliktpunkte zwischen China Standard Contract und EU Standard Contractual Clauses
              </p>
            </motion.div>

            <div className="space-y-4 max-w-6xl mx-auto">
              {comparisonData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card className={`border-2 ${item.conflict ? 'border-red-200 bg-gradient-to-br from-red-50 to-white' : 'border-slate-200 bg-white'} hover:shadow-lg transition-all`}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-lg flex-shrink-0 ${item.conflict ? 'bg-red-100' : 'bg-blue-100'}`}>
                          <item.icon className={`h-6 w-6 ${item.conflict ? 'text-red-600' : 'text-blue-600'}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-3">
                            <h3 className="text-xl font-semibold text-slate-900">
                              {item.aspect}
                            </h3>
                            {item.conflict && (
                              <Badge variant="outline" className="text-xs border-red-300 text-red-700">
                                ⚠️ Konflikt
                              </Badge>
                            )}
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                              <div className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                <Globe className="w-4 h-4 text-red-600" />
                                China Standard Contract
                              </div>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {item.chinaSCC}
                              </p>
                            </div>
                            <div className="space-y-2">
                              <div className="text-sm font-semibold text-slate-700 flex items-center gap-2">
                                <Shield className="w-4 h-4 text-blue-600" />
                                EU Standard Contractual Clauses
                              </div>
                              <p className="text-sm text-slate-600 leading-relaxed">
                                {item.euSCC}
                              </p>
                            </div>
                          </div>
                        </div>
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
              className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 mt-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">2023</div>
                  <p className="text-slate-300">China Standard Contract veröffentlicht (Feb 2023)</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">2021</div>
                  <p className="text-slate-300">EU SCCs aktualisiert (Juni 2021)</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#e24e1b] mb-2">5+</div>
                  <p className="text-slate-300">Fundamentale Rechtskonflikte zwischen beiden</p>
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
              <Badge className="mb-4 bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0">
                Lösung
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Framework Agreement: Die Lösung für Dual-Transfers
              </h2>
              <p className="text-lg text-slate-600">
                Unternehmen mit bidirektionalen Datentransfers brauchen eine übergeordnete Vertragsstruktur
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors bg-white">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <FileCheck className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Scope Definition (Anwendungsbereich)
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Framework Agreement definiert klar: Welche SCCs gelten für welche Datenflüsse? China→EU = EU SCCs. EU→China = China Standard Contract.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Eindeutige Zuordnung pro Datenfluss-Richtung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Keine Überlappung der Anwendungsbereiche</span>
                      </li>
                    </ul>
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
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <AlertCircle className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Conflict Resolution Clause
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Explizite Regelung: Was passiert bei Widersprüchen? Welches Recht hat Vorrang? Wie werden Streitigkeiten gelöst?
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Hierarchie der Vertragsbestandteile</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Eskalationsmechanismus bei Konflikten</span>
                      </li>
                    </ul>
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
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Data Mapping & Classification
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Detaillierte Dokumentation: Welche Datentypen fließen wohin? Welche SCCs gelten für welche Datenkategorien?
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Vollständiges Data Inventory</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>SCC-Zuordnung pro Datenkategorie</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card className="h-full border-2 border-slate-200 hover:border-[#e24e1b] transition-colors bg-white">
                  <CardContent className="p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#e24e1b] to-[#f97316] mb-4">
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-3">
                      Supplementary Measures
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Zusätzliche technische & organisatorische Maßnahmen zum Schutz beider Datentransfer-Richtungen.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>End-to-End-Verschlüsselung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <span>Data Minimization & Pseudonymisierung</span>
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
              className="mt-12 text-center"
            >
              <Card className="border-2 border-[#e24e1b] bg-gradient-to-br from-orange-50 to-white shadow-xl max-w-4xl mx-auto">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <Shield className="w-8 h-8 text-[#e24e1b]" />
                    <h3 className="text-2xl font-bold text-slate-900">
                      Marsstein erstellt Framework Agreements automatisch
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-6">
                    Unsere KI analysiert Ihre Datenflüsse und erstellt automatisch ein maßgeschneidertes Framework Agreement mit beiden SCC-Sets, Konfliktklauseln und vollständigem Data Mapping.
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-[#e24e1b] to-[#f97316] hover:from-[#d63f14] hover:to-[#ea580c] text-white"
                    asChild
                  >
                    <a href="#contact">
                      Jetzt Framework Agreement erstellen lassen
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center mb-16"
            >
              <Badge className="mb-4 bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0">
                <Target className="w-4 h-4 mr-2" />
                Praxis-Szenarien
              </Badge>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Realistische Anwendungsfälle: So lösen Unternehmen SCC-Konflikte
              </h2>
              <p className="text-lg text-slate-600">
                3 detaillierte Szenarien aus E-Commerce, Manufacturing und SaaS mit konkreten Lösungswegen
              </p>
            </motion.div>

            <div className="space-y-12 max-w-6xl mx-auto">
              {[
                {
                  icon: ShoppingCart,
                  title: "Szenario 1: E-Commerce Platform (EU ↔ China bidirektional)",
                  company: "Deutsche Fashion-Plattform mit chinesischen Herstellern",
                  challenge: "Datenfluss-Problem",
                  challengeDetails: [
                    "EU→China: Bestelldaten (Name, Adresse, Produkt) an Hersteller in Shenzhen",
                    "China→EU: Tracking-Daten (Versandstatus, Qualitätskontrolle) zurück an EU-Plattform",
                    "Problem: Beide Transfers brauchen SCCs, aber welche?"
                  ],
                  solution: "Framework Agreement Lösung",
                  solutionSteps: [
                    {
                      step: "1. Data Flow Mapping",
                      detail: "EU→China: 'Order Processing Data' (Name, Address, Order Items) → China Standard Contract Annex 1. China→EU: 'Fulfillment Data' (Tracking IDs, QC Reports) → EU SCCs Module 2 (Controller-to-Processor)"
                    },
                    {
                      step: "2. Governing Law Conflict Resolution",
                      detail: "Framework Agreement Clause 4.2: 'EU→China transfers governed by Chinese law (PIPL). China→EU transfers governed by Irish law (GDPR). In case of conflict, stricter protection applies.'"
                    },
                    {
                      step: "3. Consent Management",
                      detail: "Nutzer-Einwilligung beim Checkout: 'Ihre Daten werden an unseren Hersteller in China übertragen (China Standard Contract) und Tracking-Daten fließen zurück (EU SCCs). Details: [Link zu Datenschutzerklärung]'"
                    },
                    {
                      step: "4. Security Assessment",
                      detail: "China-SCC: Schwellenwert-Prüfung (>1 Mio. Personen? Nein → keine CAC-Meldung). EU-SCC: Transfer Impact Assessment durchgeführt (Schrems II-konform)"
                    }
                  ],
                  result: "Vollständige Compliance für beide Richtungen. Durchschnittliche Implementierungszeit: 6 Wochen mit Marsstein.",
                  color: "blue"
                },
                {
                  icon: Factory,
                  title: "Szenario 2: Joint Venture Manufacturing (komplexer Datenfluss)",
                  company: "Deutsches Automotive-Unternehmen + chinesisches Joint Venture",
                  challenge: "Multi-direktionale Datenflüsse",
                  challengeDetails: [
                    "EU→China: Engineering-Daten (CAD, Spezifikationen) + HR-Daten (Expatriates)",
                    "China→EU: Produktionsdaten (Qualitätsmetriken, Maschinen-Logs) + HR-Daten (lokale Mitarbeiter)",
                    "Problem: CAD-Daten sind Geschäftsgeheimnisse, HR-Daten sind DSGVO-relevant"
                  ],
                  solution: "Hybrid Framework mit separaten Annexen",
                  solutionSteps: [
                    {
                      step: "1. Data Classification",
                      detail: "Tier 1 (DSGVO-relevant): HR-Daten → SCCs erforderlich. Tier 2 (Geschäftsgeheimnisse): CAD-Daten → NDA + Verschlüsselung (keine SCCs nötig, da keine personenbezogenen Daten)"
                    },
                    {
                      step: "2. Dual-SCC-Setup für HR-Daten",
                      detail: "EU→China Expatriates: China Standard Contract (PIPL-konform). China→EU lokale Mitarbeiter: EU SCCs (DSGVO Art. 46)"
                    },
                    {
                      step: "3. Gerichtsstand-Lösung",
                      detail: "Framework Agreement Clause 6: 'HR-Disputes: EU-Mitarbeiter → EU-Gerichte. China-Mitarbeiter → China-Gerichte. Business Data Disputes → Schiedsgericht Singapur (neutral)'"
                    },
                    {
                      step: "4. Supplementary Measures",
                      detail: "End-to-End-Verschlüsselung für CAD-Daten (AES-256). Pseudonymisierung für HR-Daten (Employee IDs statt Namen in Logs). Data Localization: China-HR-Daten bleiben in China, nur aggregierte Reports nach EU"
                    }
                  ],
                  result: "JV-Vertra erfolgreich  2023 abgeschlossen. CAC Security Assessment bestanden (März 2024).",
                  color: "purple"
                },
                {
                  icon: TrendingUp,
                  title: "Szenario 3: SaaS Platform mit globalem Kundenstamm",
                  company: "EU-basierter CRM-Anbieter mit China-Rechenzentrum",
                  challenge: "Cloud-Infrastruktur-Konflikt",
                  challengeDetails: [
                    "EU→China: EU-Kundendaten werden in China-Cloud repliziert (Latency-Optimierung)",
                    "China→EU: China-Kundendaten werden in EU-Cloud repliziert (DSGVO-Compliance)",
                    "Problem: Alibaba Cloud (China) ist Subprozessor. Braucht eigenes SCC-Set."
                  ],
                  solution: "Tri-Party Framework Agreement",
                  solutionSteps: [
                    {
                      step: "1. Three-Party-Setup",
                      detail: "Party A: CRM-Anbieter (EU, Controller). Party B: EU-Kunde (EU, Data Subject). Party C: Alibaba Cloud (China, Processor). Party D: China-Kunde (China, Data Subject)"
                    },
                    {
                      step: "2. SCC-Cascade",
                      detail: "Layer 1: CRM↔EU-Kunde: EU SCCs Module 1 (Controller-to-Controller). Layer 2: CRM→Alibaba Cloud: China Standard Contract (für China-Daten) + EU SCCs Module 2 (für EU-Daten). Layer 3: Alibaba Cloud darf keine Onward Transfers ohne Approval"
                    },
                    {
                      step: "3. Data Residency Rules",
                      detail: "EU-Kundendaten: Primary storage in EU (AWS Frankfurt). Replika in China nur encrypted + pseudonymized (DSGVO Art. 32). China-Kundendaten: Primary storage in China (Alibaba Cloud Hangzhou). Replika in EU nur für EU-relevante Funktionen"
                    },
                    {
                      step: "4. Consent & Transparency",
                      detail: "EU-Kunde sieht beim Login: 'Ihre Daten werden in der EU gespeichert. Zur Performance-Optimierung werden pseudonymisierte Replikas in China vorgehalten (Details: [SCC-Link])'. China-Kunde: Explizite separate Einwilligung nach PIPL Art. 39"
                    }
                  ],
                  result: "10.000+ Enterprise-Kunden migriert. Zero DSGVO-Beschwerden seit Go-Live (Q4 2023).",
                  color: "green"
                }
              ].map((scenario, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="border-2 border-slate-200 hover:border-[#e24e1b] transition-colors">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-${scenario.color}-500 to-${scenario.color}-600 flex-shrink-0`}>
                          <scenario.icon className="h-7 w-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            {scenario.title}
                          </h3>
                          <p className="text-lg text-slate-600 italic">
                            {scenario.company}
                          </p>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div className="p-5 bg-red-50 rounded-lg border-l-4 border-red-600">
                          <div className="flex items-center gap-2 mb-3">
                            <AlertTriangle className="h-5 w-5 text-red-600" />
                            <h4 className="font-bold text-red-900">{scenario.challenge}</h4>
                          </div>
                          <ul className="space-y-2 text-sm text-red-900">
                            {scenario.challengeDetails.map((detail, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-red-600 font-bold mt-0.5">•</span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="p-5 bg-green-50 rounded-lg border-l-4 border-green-600">
                          <div className="flex items-center gap-2 mb-4">
                            <CheckCircle className="h-5 w-5 text-green-600" />
                            <h4 className="font-bold text-green-900">{scenario.solution}</h4>
                          </div>
                          <div className="space-y-4">
                            {scenario.solutionSteps.map((step, i) => (
                              <div key={i} className="bg-white p-4 rounded-lg border border-green-200">
                                <p className="font-semibold text-green-900 mb-2">{step.step}</p>
                                <p className="text-sm text-slate-700 leading-relaxed">{step.detail}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="p-5 bg-blue-50 rounded-lg border-l-4 border-blue-600">
                          <div className="flex items-center gap-2 mb-2">
                            <Zap className="h-5 w-5 text-blue-600" />
                            <h4 className="font-bold text-blue-900">Ergebnis</h4>
                          </div>
                          <p className="text-blue-900">{scenario.result}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mx-auto max-w-3xl text-center mb-16"
            >
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                Häufig gestellte Fragen zu China SCC vs. EU SCC
              </h2>
              <p className="text-lg text-slate-600">
                Detaillierte Antworten auf die wichtigsten Fragen zur Umsetzung von bidirektionalen Datentransfers
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-4">
                <AccordionItem value="item-1" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Brauche ich wirklich BEIDE SCC-Sets, wenn Daten in beide Richtungen fließen?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-4">
                      <p><strong>Ja, absolut.</strong> Jede Datentransfer-Richtung unterliegt dem Recht des <em>Ziellandes</em>:</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <p className="font-semibold text-blue-900 mb-2">EU→China Transfer</p>
                          <ul className="space-y-2 text-sm text-blue-900">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span><strong>Unterliegt:</strong> China PIPL (Personal Information Protection Law)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span><strong>Erfordert:</strong> China Standard Contract (2023)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                              <span><strong>Zusätzlich:</strong> CAC Security Assessment (ab Schwellenwert)</span>
                            </li>
                          </ul>
                        </div>

                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                          <p className="font-semibold text-purple-900 mb-2">China→EU Transfer</p>
                          <ul className="space-y-2 text-sm text-purple-900">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                              <span><strong>Unterliegt:</strong> EU DSGVO (General Data Protection Regulation)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                              <span><strong>Erfordert:</strong> EU Standard Contractual Clauses (2021)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                              <span><strong>Zusätzlich:</strong> Transfer Impact Assessment (TIA nach Schrems II)</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-600 rounded">
                        <p className="font-semibold text-yellow-900 mb-2">⚠️ Häufiger Fehler:</p>
                        <p className="text-yellow-900">"Wir haben EU SCCs unterschrieben, das reicht doch für beide Richtungen?" → <strong>Nein!</strong></p>
                        <p className="text-yellow-900 mt-2">Die EU SCCs regeln nur China→EU. Für EU→China brauchen Sie zusätzlich den China Standard Contract, sonst verstoßen Sie gegen PIPL Art. 38 (Strafe: bis zu RMB 50 Mio. oder 5% Jahresumsatz).</p>
                      </div>

                      <div className="p-4 bg-slate-900 rounded-lg text-white">
                        <p className="font-semibold mb-3">💡 Realbeispiel Alibaba-Seller:</p>
                        <div className="space-y-2 text-sm text-slate-300">
                          <p><strong>Datenfluss:</strong></p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>EU→China: Bestelldaten (Name, Adresse, Produkt) an Alibaba-Händler</li>
                            <li>China→EU: Tracking-Updates + Produktempfehlungen zurück</li>
                          </ul>
                          <p className="mt-3"><strong>Rechtliche Anforderung:</strong></p>
                          <ul className="list-disc pl-6 space-y-1">
                            <li>EU→China: China Standard Contract + PIPL-Einwilligung + CAC-Meldung (falls >1 Mio. Nutzer)</li>
                            <li>China→EU: EU SCCs Module 2 (C2P) + Transfer Impact Assessment</li>
                          </ul>
                          <p className="mt-3 text-[#e24e1b] font-semibold">→ Ohne beide SCCs: Compliance-Lücke in mindestens einer Richtung!</p>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Was passiert bei Widersprüchen zwischen China SCC und EU SCC?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-4">
                      <p>Es gibt <strong>5 fundamentale Konflikte</strong>, die Sie im Framework Agreement explizit regeln müssen:</p>

                      <div className="space-y-4">
                        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                          <h4 className="font-bold text-red-900 mb-3">1. Governing Law Konflikt</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div>
                              <p className="text-sm font-semibold text-red-800">China SCC:</p>
                              <p className="text-xs text-red-900">"Ausschließlich chinesisches Recht. Keine Wahlfreiheit."</p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-red-800">EU SCC:</p>
                              <p className="text-xs text-red-900">"Freie Rechtswahl (meist EU-Recht)."</p>
                            </div>
                          </div>
                          <div className="p-3 bg-white rounded border border-red-300">
                            <p className="text-sm font-semibold text-emerald-900 mb-1">✅ Framework Agreement Lösung:</p>
                            <p className="text-xs text-slate-700">"Clause 4.2: EU→China transfers governed by Chinese law. China→EU transfers governed by [Irish/German/French] law. Each party accepts jurisdiction of courts in the importing country."</p>
                          </div>
                        </div>

                        <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                          <h4 className="font-bold text-orange-900 mb-3">2. Gerichtsstand-Konflikt</h4>
                          <p className="text-sm text-orange-900 mb-3">China SCC fordert chinesische Gerichte, EU SCC erlaubt EU-Gerichte. Problem: Wer entscheidet bei Streit?</p>
                          <div className="p-3 bg-white rounded border border-orange-300">
                            <p className="text-sm font-semibold text-emerald-900 mb-1">✅ Framework Agreement Lösung:</p>
                            <p className="text-xs text-slate-700 mb-2">"Clause 6: Dispute resolution follows the direction of disputed transfer:"</p>
                            <ul className="text-xs text-slate-700 space-y-1 list-disc pl-4">
                              <li>EU→China dispute → Chinese courts (Beijing Internet Court preferred)</li>
                              <li>China→EU dispute → EU courts (Irish DPC jurisdiction preferred)</li>
                              <li>Neutral Option: Singapore International Arbitration Centre (SIAC)</li>
                            </ul>
                          </div>
                        </div>

                        <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                          <h4 className="font-bold text-yellow-900 mb-3">3. Consent Requirements-Konflikt</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                            <div>
                              <p className="text-sm font-semibold text-yellow-800">China PIPL Art. 39:</p>
                              <p className="text-xs text-yellow-900">"Separate, explicit consent required for each cross-border transfer."</p>
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-yellow-800">EU DSGVO Art. 46:</p>
                              <p className="text-xs text-yellow-900">"SCCs provide 'adequate safeguards' → keine separate Einwilligung nötig (außer sensitive Daten)."</p>
                            </div>
                          </div>
                          <div className="p-3 bg-white rounded border border-yellow-300">
                            <p className="text-sm font-semibold text-emerald-900 mb-1">✅ Framework Agreement Lösung:</p>
                            <p className="text-xs text-slate-700">"Clause 3: For EU→China transfers, separate consent obtained per PIPL Art. 39. For China→EU transfers, consent handled per GDPR Art. 6 (legitimate interest or consent as applicable). Consent mechanisms documented in Annex C."</p>
                          </div>
                        </div>

                        <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                          <h4 className="font-bold text-purple-900 mb-3">4. Security Assessment-Konflikt</h4>
                          <div className="space-y-2 text-sm text-purple-900 mb-3">
                            <p><strong>China:</strong> Schwellenwert-basiert (1 Mio. Personen ODER 10.000 sensible Daten → CAC Security Assessment Pflicht)</p>
                            <p><strong>EU:</strong> Risikobasiert (Transfer Impact Assessment für ALLE Drittlandtransfers nach Schrems II)</p>
                          </div>
                          <div className="p-3 bg-white rounded border border-purple-300">
                            <p className="text-sm font-semibold text-emerald-900 mb-1">✅ Framework Agreement Lösung:</p>
                            <p className="text-xs text-slate-700">"Clause 5: Both assessments conducted independently. EU TIA findings inform China Security Assessment (and vice versa). Results cross-referenced in Annex D. Re-assessment triggered every 12 months or when thresholds exceeded."</p>
                          </div>
                        </div>

                        <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                          <h4 className="font-bold text-blue-900 mb-3">5. Data Subject Rights-Konflikt</h4>
                          <div className="space-y-2 text-sm text-blue-900 mb-3">
                            <p><strong>China SCC:</strong> "Data subjects can sue foreign recipient in China courts."</p>
                            <p><strong>EU SCC:</strong> "Data subjects can sue Chinese exporter in EU courts."</p>
                            <p><strong>Problem:</strong> EU-Nutzer könnte sowohl in China ALS AUCH in EU klagen (Forum Shopping)</p>
                          </div>
                          <div className="p-3 bg-white rounded border border-blue-300">
                            <p className="text-sm font-semibold text-emerald-900 mb-1">✅ Framework Agreement Lösung:</p>
                            <p className="text-xs text-slate-700">"Clause 7: Data subjects elect jurisdiction at time of complaint. Once elected, exclusive jurisdiction applies (no parallel proceedings). Judgments mutually recognized per Hague Convention."</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-slate-900 rounded-lg text-white">
                        <p className="font-semibold mb-2">🎯 Golden Rule:</p>
                        <p className="text-slate-300 text-sm">"When in conflict, apply the <strong>stricter protection</strong> for the data subject. Document the choice in your Framework Agreement and DPIA/Security Assessment."</p>
                        <p className="text-[#e24e1b] mt-3 font-semibold">→ Marsstein's AI automatically identifies conflicts and generates compliant resolution clauses.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Wann brauche ich ein CAC Security Assessment vs. Transfer Impact Assessment?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-4">
                      <p>Beide Assessments sind unterschiedlich und <strong>müssen parallel durchgeführt werden</strong>:</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-5 bg-red-50 rounded-lg border-2 border-red-300">
                          <div className="flex items-center gap-2 mb-3">
                            <Globe className="h-5 w-5 text-red-600" />
                            <h4 className="font-bold text-red-900">CAC Security Assessment (China)</h4>
                          </div>

                          <div className="space-y-3 text-sm">
                            <div>
                              <p className="font-semibold text-red-800 mb-1">Wann erforderlich?</p>
                              <ul className="list-disc pl-5 space-y-1 text-red-900">
                                <li>Daten von ≥1.000.000 Personen (kumulativ seit 1.1. des Jahres)</li>
                                <li>ODER Daten von ≥100.000 "sensitive personal information" (biometrische Daten, Gesundheitsdaten, Finanz, Kinder <14)</li>
                                <li>ODER Critical Information Infrastructure Operators (CIIO)</li>
                              </ul>
                            </div>

                            <div>
                              <p className="font-semibold text-red-800 mb-1">Durchführung:</p>
                              <ul className="list-disc pl-5 space-y-1 text-red-900">
                                <li>Antrag bei CAC (Cyberspace Administration of China)</li>
                                <li>Externe akkreditierte Assessment-Firma beauftragen</li>
                                <li>Dauer: 45-60 Arbeitstage</li>
                                <li>Kosten: RMB 100.000-500.000 (~€13K-€65K)</li>
                              </ul>
                            </div>

                            <div>
                              <p className="font-semibold text-red-800 mb-1">Inhalt:</p>
                              <ul className="text-xs text-red-900 space-y-1 list-disc pl-4">
                                <li>Legitimität & Notwendigkeit des Transfers</li>
                                <li>Umfang, Art, Sensitivität der Daten</li>
                                <li>Sicherheitsmaßnahmen des ausländischen Empfängers</li>
                                <li>Risiken für nationale Sicherheit</li>
                                <li>Rechtsbehelf-Möglichkeiten für Data Subjects</li>
                                <li>CAC kann Transfer verbieten bei "security risks"</li>
                              </ul>
                            </div>

                            <div className="p-3 bg-white rounded border border-red-400">
                              <p className="text-xs text-red-900"><strong>Wichtig:</strong> Assessment muss VOR dem ersten Transfer abgeschlossen sein. Transfers ohne Assessment = PIPL-Verstoß (Bußgeld bis RMB 50 Mio.)</p>
                            </div>
                          </div>
                        </div>

                        <div className="p-5 bg-blue-50 rounded-lg border-2 border-blue-300">
                          <div className="flex items-center gap-2 mb-3">
                            <Shield className="h-5 w-5 text-blue-600" />
                            <h4 className="font-bold text-blue-900">Transfer Impact Assessment (EU)</h4>
                          </div>

                          <div className="space-y-3 text-sm">
                            <div>
                              <p className="font-semibold text-blue-800 mb-1">Wann erforderlich?</p>
                              <ul className="list-disc pl-5 space-y-1 text-blue-900">
                                <li>ALLE Drittlandtransfers (inkl. China) nach Schrems II-Urteil</li>
                                <li>Keine Schwellenwerte oder Ausnahmen</li>
                                <li>Auch bei SCCs, BCRs oder Adequacy Decisions</li>
                              </ul>
                            </div>

                            <div>
                              <p className="font-semibold text-blue-800 mb-1">Durchführung:</p>
                              <ul className="list-disc pl-5 space-y-1 text-blue-900">
                                <li>Intern durchgeführt (Datenschutzbeauftragter)</li>
                                <li>Keine Genehmigung durch Behörde nötig</li>
                                <li>Dauer: 2-4 Wochen (je nach Komplexität)</li>
                                <li>Kosten: Interne Ressourcen oder €5K-€20K (externe Berater)</li>
                              </ul>
                            </div>

                            <div>
                              <p className="font-semibold text-blue-800 mb-1">Inhalt nach EDPB:</p>
                              <ul className="text-xs text-blue-900 space-y-1 list-disc pl-4">
                                <li>Gesetzliche Lage im Drittland (China PIPL, National Security Law)</li>
                                <li>Praktische Risiken (Government Access, Art. 177 PIPL)</li>
                                <li>Supplementary Measures (Verschlüsselung, Pseudonymisierung)</li>
                                <li>Können diese Measures DSGVO-Niveau herstellen?</li>
                                <li>Wenn Nein: Transfer nicht erlaubt (Alternative suchen)</li>
                              </ul>
                            </div>

                            <div className="p-3 bg-white rounded border border-blue-400">
                              <p className="text-xs text-blue-900"><strong>Wichtig:</strong> TIA muss dokumentiert und auf Anfrage der DPA vorgelegt werden. Fehlende TIA = DSGVO-Verstoß (Bußgeld Art. 83 Abs. 5: bis €20 Mio. oder 4% Umsatz)</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-600 rounded">
                        <p className="font-semibold text-yellow-900 mb-2">⚠️ Häufiger Fehler:</p>
                        <p className="text-yellow-900">"Wir haben ein CAC Security Assessment gemacht, das reicht doch als TIA?" → <strong>Nein!</strong></p>
                        <p className="text-yellow-900 mt-2">CAC Assessment prüft chinesische nationale Sicherheitsrisiken. TIA prüft EU-DSGVO-Schutzlevel im Drittland. Komplett unterschiedliche Perspektiven!</p>
                      </div>

                      <div className="mt-6 p-4 bg-slate-900 rounded-lg text-white">
                        <p className="font-semibold mb-3">📋 Praxis-Checkliste:</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm font-semibold text-[#e24e1b] mb-2">EU→China Transfer:</p>
                            <ul className="text-xs text-slate-300 space-y-1">
                              <li>☑ China Standard Contract unterschreiben</li>
                              <li>☑ CAC Security Assessment (falls Schwellenwert)</li>
                              <li>☑ PIPL-konforme Einwilligung einholen</li>
                              <li>☑ Transfer Impact Assessment (EU-Seite)</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-[#e24e1b] mb-2">China→EU Transfer:</p>
                            <ul className="text-xs text-slate-300 space-y-1">
                              <li>☑ EU Standard Contractual Clauses unterschreiben</li>
                              <li>☑ Transfer Impact Assessment durchführen</li>
                              <li>☑ Supplementary Measures implementieren</li>
                              <li>☑ DSGVO Art. 13/14 Informationspflichten erfüllen</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-2 border-slate-200 rounded-lg px-6 hover:border-[#e24e1b] transition-colors">
                  <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-[#e24e1b] py-5">
                    Kann ich statt SCCs nicht einfach BCRs (Binding Corporate Rules) nutzen?
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-5 leading-relaxed">
                    <div className="space-y-4">
                      <p><strong>BCRs funktionieren nur für intra-konzernliche Transfers innerhalb einer Unternehmensgruppe.</strong> Sie sind KEINE Lösung für externe Partner oder Kunden. Außerdem:</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                          <h4 className="font-bold text-green-900 mb-3">✅ Wann BCRs sinnvoll sind:</h4>
                          <ul className="space-y-2 text-sm text-green-900">
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>Große Konzerne mit vielen Tochtergesellschaften weltweit (z.B. Siemens, VW)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>Nur für <strong>intra-group transfers</strong> (EU-Muttergesellschaft ↔ China-Tochter)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>Wenn Sie häufige, standardisierte Transfers haben (z.B. HR-Daten, Buchhaltung)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                              <span>Langfristige Investition (BCRs gelten unbegrenzt, SCCs müssen alle 2-3 Jahre aktualisiert werden)</span>
                            </li>
                          </ul>
                        </div>

                        <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                          <h4 className="font-bold text-red-900 mb-3">❌ Wann BCRs NICHT funktionieren:</h4>
                          <ul className="space-y-2 text-sm text-red-900">
                            <li className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>Transfers zu <strong>externen Partnern</strong> (Supplier, Kunden, Joint Ventures)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>China erkennt BCRs NICHT an (PIPL kennt BCRs nicht als Transfermechanismus)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>Approval-Prozess dauert 12-18 Monate bei EU-Datenschutzbehörden</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                              <span>Kosten: €100K-€500K für Erstellung + jährliche Audits (€50K+)</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="p-4 bg-yellow-50 border-l-4 border-yellow-600 rounded">
                        <p className="font-semibold text-yellow-900 mb-2">⚠️ China PIPL Problem mit BCRs:</p>
                        <p className="text-yellow-900">China PIPL Art. 38 erlaubt nur 3 Transfer-Mechanismen:</p>
                        <ol className="list-decimal pl-6 mt-2 space-y-1 text-yellow-900 text-sm">
                          <li><strong>CAC Security Assessment</strong> (für große Transfers)</li>
                          <li><strong>China Standard Contract</strong> (für kleinere Transfers)</li>
                          <li><strong>CAC-certified certification</strong> (noch nicht verfügbar)</li>
                        </ol>
                        <p className="text-yellow-900 mt-3">→ BCRs sind <strong>nicht auf dieser Liste</strong>. Selbst wenn Sie EU-genehmigte BCRs haben, müssen Sie für EU→China-Transfers zusätzlich den China Standard Contract nutzen!</p>
                      </div>

                      <div className="mt-6 p-4 bg-slate-900 rounded-lg text-white">
                        <p className="font-semibold mb-3">📊 Kostenvergleich (für 3-Jahres-Periode):</p>
                        <div className="space-y-3 text-sm">
                          <div className="p-3 bg-slate-800 rounded">
                            <p className="font-semibold text-[#e24e1b] mb-1">SCCs (Standard Contractual Clauses):</p>
                            <ul className="text-slate-300 space-y-1 text-xs">
                              <li>• Einrichtung: €5K-€15K (Rechtsberatung)</li>
                              <li>• Transfer Impact Assessment: €5K-€10K</li>
                              <li>• CAC Security Assessment (falls nötig): €13K-€65K (einmalig)</li>
                              <li>• Jährliche Wartung: €2K-€5K</li>
                            </ul>
                            <p className="mt-2 text-green-400 font-semibold">Total: €25K-€120K über 3 Jahre</p>
                          </div>

                          <div className="p-3 bg-slate-800 rounded">
                            <p className="font-semibold text-[#e24e1b] mb-1">BCRs (Binding Corporate Rules):</p>
                            <ul className="text-slate-300 space-y-1 text-xs">
                              <li>• Erstellung & Approval: €100K-€300K (12-18 Monate)</li>
                              <li>• Lead DPA Gebühren: €10K-€30K</li>
                              <li>• Jährliche Audits: €50K-€100K/Jahr</li>
                              <li>• China Standard Contract zusätzlich: €10K-€20K (PIPL-Anforderung!)</li>
                            </ul>
                            <p className="mt-2 text-red-400 font-semibold">Total: €300K-€650K über 3 Jahre</p>
                          </div>
                        </div>

                        <p className="text-[#e24e1b] font-semibold mt-4">→ SCCs sind für 95% der Unternehmen die bessere Wahl. BCRs nur sinnvoll für große Konzerne mit 20+ Tochtergesellschaften.</p>
                      </div>

                      <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                        <p className="font-semibold text-blue-900 mb-2">✅ Marsstein-Empfehlung:</p>
                        <p className="text-blue-900">Beginnen Sie mit <strong>SCCs (Framework Agreement mit beiden Sets)</strong>. Wenn Ihr Unternehmen in den nächsten 2-3 Jahren massiv wächst (10+ neue Länder, 50+ neue Tochtergesellschaften), dann erwägen Sie BCRs als Upgrade. Aber nicht andersherum – BCRs als Einstieg sind oversized und zu teuer für die meisten Fälle.</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <Badge className="mb-4 bg-gradient-to-r from-[#e24e1b] to-[#f97316] text-white border-0">
                  Kostenlose Erstberatung
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                  Lösen Sie Ihre SCC-Konflikte mit Marsstein
                </h2>
                <p className="text-lg text-slate-600">
                  Framework Agreement + beide SCC-Sets automatisch. Antwort in 24h.
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
                          placeholder="Beschreiben Sie Ihre Datentransfer-Situation..."
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

        <RelatedArticles articles={getRelatedArticles('scc')} />

        <Footer />
      </div>
    </>
  );
}
