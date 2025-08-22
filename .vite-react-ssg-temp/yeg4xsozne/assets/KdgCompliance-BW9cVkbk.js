import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { c as cn } from "../main.mjs";
import { motion } from "framer-motion";
import { Cross, CheckCircle2, PlayCircle, ArrowRight, Download, Users, Landmark, Crown, HandHeart, Lock, Monitor, BookOpen, ShieldCheck, Calendar, Phone, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import "react-helmet-async";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
const KdgCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(96);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "KDG Katholischer Datenschutz",
    "description": "KDG Compliance: Gesetz über den Kirchlichen Datenschutz der Katholischen Kirche für kirchliche Einrichtungen",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Catholic Church Data Protection Certification",
    "areaServed": "DE"
  };
  const painPoints = [
    {
      icon: Landmark,
      title: "Diözesane Strukturen und Datenschutz",
      description: "Komplexe Hierarchien von Bistümern, Pfarreien und kirchlichen Einrichtungen erfordern differenzierte Datenschutzkonzepte mit klaren Verantwortlichkeiten.",
      impact: "Kritisch",
      example: "Bistumsverwaltung, Pfarreien, Caritas, Ordensgemeinschaften, katholische Schulen"
    },
    {
      icon: Cross,
      title: "Sakramentale Daten und Beichtgeheimnis",
      description: "Absoluter Schutz des Beichtgeheimnisses und besondere Sensibilität bei sakramentalen Daten wie Taufe, Firmung, Ehe und Krankensalbung.",
      impact: "Kritisch",
      example: "Matrikelbücher, Beichtgeheimnis, Eheakten, Firmungsregister, Krankensakramente"
    },
    {
      icon: Crown,
      title: "Kirchliches Eigenrecht und DSGVO",
      description: "Balance zwischen kirchlichem Selbstbestimmungsrecht, kanonischem Recht und staatlichen Datenschutzanforderungen bei gleichzeitiger DSGVO-Konformität.",
      impact: "Hoch",
      example: "Kanonisches Recht, Konkordate, Kirchensteuer, staatskirchenrechtliche Besonderheiten"
    },
    {
      icon: HandHeart,
      title: "Caritative und soziale Dienste",
      description: "Besondere Datenschutzanforderungen in caritativen Einrichtungen mit sensiblen Gesundheits- und Sozialdaten von Hilfsbedürftigen.",
      impact: "Hoch",
      example: "Caritas-Beratungsstellen, Krankenhäuser, Pflegeheime, Sozialstationen, Flüchtlingshilfe"
    }
  ];
  const solutions = [
    {
      title: "KDG-Datenschutzmanagement",
      description: "Spezialisierte Datenschutzlösungen für katholische Einrichtungen nach KDG",
      features: [
        "Diözesane Datenschutzkonzepte",
        "Matrikelbuch-Digitalisierung",
        "Beichtgeheimnis-Schutz",
        "Caritas-Datenschutz"
      ],
      icon: Landmark,
      color: "from-amber-500 to-yellow-600"
    },
    {
      title: "Schulung für kirchliche Mitarbeiter",
      description: "KDG-konforme Schulungen für Haupt- und Ehrenamtliche in der katholischen Kirche",
      features: [
        "KDG-Grundlagenschulungen",
        "Sakramentendaten-Schutz",
        "Pfarrbüro-Datenschutz",
        "Caritas-Mitarbeiterschulung"
      ],
      icon: BookOpen,
      color: "from-red-500 to-rose-600"
    },
    {
      title: "Technische Schutzmaßnahmen",
      description: "Kirchenspezifische IT-Sicherheit für sensible Gemeinde- und Sakramentendaten",
      features: [
        "Sichere Pfarrverwaltung",
        "Matrikelbuch-Sicherheit",
        "Verschlüsselte Kommunikation",
        "Diözesane IT-Standards"
      ],
      icon: ShieldCheck,
      color: "from-indigo-500 to-blue-600"
    }
  ];
  const useCases = [
    {
      title: "Bistum führt KDG flächendeckend ein",
      challenge: "Großes Bistum mit 300+ Pfarreien und diversen kirchlichen Einrichtungen benötigt einheitliche KDG-Umsetzung",
      solution: "Diözesanes Datenschutzkonzept + Pfarrei-Templates + Multiplikatorenschulung",
      outcome: "Vollständige KDG-Compliance in 24 Monaten, zentrale Unterstützungsstruktur etabliert",
      timeline: "24 Monate",
      complexity: "Hoch"
    },
    {
      title: "Caritas digitalisiert Klientenverwaltung",
      challenge: "Caritasverband möchte Beratungsdokumentation digitalisieren unter Wahrung höchster Datenschutzstandards",
      solution: "KDG-konforme Digitalisierung + Verschlüsselung + Zugriffskonzepte + Schulungen",
      outcome: "Sichere digitale Klientenverwaltung mit 50% Effizienzsteigerung bei voller KDG-Compliance",
      timeline: "9 Monate",
      complexity: "Hoch"
    },
    {
      title: "Pfarrgemeinde modernisiert Datenverwaltung",
      challenge: "Große Stadtpfarrei will Mitgliederverwaltung und Sakramentendokumentation KDG-konform modernisieren",
      solution: "Pfarrverwaltungssoftware + Matrikelbuch-Digitalisierung + Datenschutzkonzept",
      outcome: "Moderne, rechtssichere Verwaltung mit geschützten sakramentalen Daten",
      timeline: "6 Monate",
      complexity: "Mittel"
    }
  ];
  const privacyControls = [
    {
      name: "Sakramentale Datenverarbeitung",
      description: "Besonderer Schutz für Taufe, Firmung, Ehe, Weihe und Krankensalbung",
      coverage: 99,
      controls: ["Matrikelbücher", "Taufregister", "Eheakten", "Firmungsunterlagen", "Weihedaten"],
      icon: Cross,
      detail: "Unveränderliche Dokumentation sakramentaler Handlungen mit höchsten Schutzstandards"
    },
    {
      name: "Beichtgeheimnis und Forum Internum",
      description: "Absoluter Schutz des Beichtgeheimnisses und innerer Angelegenheiten",
      coverage: 100,
      controls: ["Beichtgeheimnis", "Gewissensforum", "Geistliche Begleitung"],
      icon: Lock,
      detail: "Unverbrüchlicher Schutz des sakramentalen Bekenntnisses nach kanonischem Recht"
    },
    {
      name: "Caritative Datenverwaltung",
      description: "Datenschutz in karitativen und sozialen Diensten der Kirche",
      coverage: 95,
      controls: ["Klientendaten", "Gesundheitsdaten", "Sozialberatung", "Hilfeleistungen"],
      icon: HandHeart,
      detail: "Sensibler Umgang mit Daten Hilfsbedürftiger in caritativen Einrichtungen"
    },
    {
      name: "Diözesane Verwaltung",
      description: "Datenschutzkonforme Verwaltung auf Bistums- und Pfarreiebene",
      coverage: 93,
      controls: ["Personalakten", "Kirchensteuer", "Vermögensverwaltung", "Gremienarbeit"],
      icon: Landmark,
      detail: "Strukturierte Datenverwaltung in der komplexen katholischen Hierarchie"
    },
    {
      name: "Digitale Seelsorge",
      description: "Datenschutz bei digitalen Angeboten und Online-Seelsorge",
      coverage: 91,
      controls: ["Online-Beratung", "Streaming", "Apps", "Soziale Medien"],
      icon: Monitor,
      detail: "Moderne Seelsorge unter Wahrung traditioneller Vertraulichkeitsstandards"
    }
  ];
  const benefits = [
    {
      title: "Kirchenrechtliche Konformität",
      description: "Einhaltung von KDG und kanonischem Recht",
      metric: "100%",
      detail: "Vollständige Übereinstimmung mit kirchlichen Vorgaben"
    },
    {
      title: "Gläubigenvertrauen",
      description: "Stärkung des Vertrauens durch transparenten Datenschutz",
      metric: "94%",
      detail: "der Gläubigen vertrauen auf sicheren Umgang mit ihren Daten"
    },
    {
      title: "Verwaltungseffizienz",
      description: "Optimierte Prozesse in Bistümern und Pfarreien",
      metric: "45%",
      detail: "Zeitersparnis durch standardisierte KDG-Prozesse"
    },
    {
      title: "Risikominimierung",
      description: "Schutz vor Datenschutzverletzungen und Imageschäden",
      metric: "€0",
      detail: "Bußgelder durch proaktive KDG-Umsetzung"
    }
  ];
  const complianceAreas = [
    { name: "Sakramentenschutz", coverage: 99, area: "Kernbereich" },
    { name: "Diözesanverwaltung", coverage: 96, area: "Administration" },
    { name: "Caritas-Datenschutz", coverage: 95, area: "Soziale Dienste" },
    { name: "Digitale Pastoral", coverage: 91, area: "Moderne Seelsorge" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "KDG – Kirchlicher Datenschutz der Katholischen Kirche",
        description: "KDG Compliance für katholische Einrichtungen: Kirchliches Datenschutzgesetz umsetzen. ✓ Beichtgeheimnis ✓ Sakramentenschutz ✓ Caritas-Datenschutz",
        canonical: "/kdg",
        keywords: "KDG, Katholischer Datenschutz, Katholische Kirche, Kirchendatenschutz, Bistum Datenschutz",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
                className: "space-y-6",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400", children: [
                    /* @__PURE__ */ jsx(Cross, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Katholischer Datenschutz" })
                  ] }),
                  /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight", children: [
                    "KDG Compliance",
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent block mt-2", children: "für Ihre Diözese" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Kirchliches Datenschutzgesetz der katholischen Kirche rechtssicher umsetzen. Schützen Sie sakramentale Daten und wahren Sie das Beichtgeheimnis." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-amber-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Diözesane Datenschutzkonzepte" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-amber-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Schutz sakramentaler Daten" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-amber-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Expertise im kanonischen Recht" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: [
                    /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&framework=kdg", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-amber-600 to-yellow-600 text-white hover:opacity-90 group", children: [
                      /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-5 w-5" }),
                      "KDG Beratung",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                    ] }) }),
                    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "KDG Leitfaden"
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: 50 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8, delay: 0.2 },
                className: "relative",
                children: [
                  /* @__PURE__ */ jsx(Card, { className: "p-6 shadow-2xl border-2 border-amber-200 dark:border-amber-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Katholischer Datenschutz-Status" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-amber-100 text-amber-700", children: "KDG konform" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/20 dark:to-amber-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(Cross, { className: "h-5 w-5 text-amber-600" }),
                          /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-amber-700", children: [
                            complianceScore,
                            "%"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Compliance Score" }),
                        /* @__PURE__ */ jsx("div", { className: "w-full bg-amber-200 rounded-full h-2 mt-2", children: /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            className: "bg-amber-600 h-2 rounded-full",
                            initial: { width: 0 },
                            animate: { width: isVisible ? `${complianceScore}%` : 0 },
                            transition: { duration: 1.5, delay: 0.5 }
                          }
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-950/20 dark:to-yellow-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-yellow-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-yellow-700", children: "12.1M" })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Katholiken geschützt" }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mt-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-yellow-600", children: "27 Bistümer" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-3", children: complianceAreas.map((area, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                        /* @__PURE__ */ jsx("span", { children: area.name }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: area.area }),
                          /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                            area.coverage,
                            "%"
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-2", children: /* @__PURE__ */ jsx(
                        motion.div,
                        {
                          className: "bg-amber-600 h-2 rounded-full",
                          initial: { width: 0 },
                          animate: { width: isVisible ? `${area.coverage}%` : 0 },
                          transition: { duration: 1, delay: 0.3 + index * 0.1 }
                        }
                      ) })
                    ] }, index)) })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-amber-500 animate-bounce", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Landmark, { className: "h-4 w-4 text-amber-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Bistums-Ready" })
                  ] }) })
                ]
              }
            )
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Herausforderungen im katholischen Datenschutz" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Spezifische Anforderungen für Bistümer, Pfarreien und kirchliche Einrichtungen" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: painPoints.map((point, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(point.icon, { className: "h-6 w-6 text-amber-600" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h3", { className: "font-bold", children: point.title }),
                    /* @__PURE__ */ jsx(
                      Badge,
                      {
                        variant: point.impact === "Kritisch" ? "destructive" : point.impact === "Hoch" ? "default" : "secondary",
                        className: "text-xs mt-1",
                        children: point.impact
                      }
                    )
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: point.description }),
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Beispiele:" }),
                  " ",
                  point.example
                ] }) })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "KDG Datenschutz-Kontrollen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Spezifische Schutzmaßnahmen für katholische Datenverarbeitung" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: privacyControls.map((control, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-8 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-6 items-center", children: [
                /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg", children: /* @__PURE__ */ jsx(control.icon, { className: "h-6 w-6 text-amber-600" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: control.name }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: control.description })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 leading-relaxed", children: control.detail })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: control.controls.map((controlItem, i) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: controlItem }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Umsetzung" }),
                    /* @__PURE__ */ jsxs("span", { className: "font-semibold text-amber-600", children: [
                      control.coverage,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-3", children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "bg-gradient-to-r from-amber-500 to-yellow-600 h-3 rounded-full",
                      initial: { width: 0 },
                      whileInView: { width: `${control.coverage}%` },
                      transition: { duration: 1.2, delay: 0.3 },
                      viewport: { once: true }
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(Badge, { className: "bg-amber-100 text-amber-700 text-sm px-4 py-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }),
                  "Aktiv"
                ] }) })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "KDG Lösungsansätze" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Maßgeschneiderte Datenschutzkonzepte für katholische Einrichtungen" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: solutions.map((solution, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "inline-flex p-3 rounded-xl bg-gradient-to-r text-white",
                  solution.color
                ), children: /* @__PURE__ */ jsx(solution.icon, { className: "h-6 w-6" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold", children: solution.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: solution.description }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3 pt-2", children: solution.features.map((feature, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 text-sm", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { children: feature })
                ] }, i)) })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "KDG in der Praxis" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Erfolgreiche Umsetzungen in katholischen Einrichtungen" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: useCases.map((useCase, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -50 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsx(Card, { className: "p-6 hover:shadow-lg transition-all duration-300", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-5 gap-6 items-center", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2 text-amber-700", children: useCase.title }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Herausforderung:" }),
                    " ",
                    useCase.challenge
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-amber-700", children: "Lösung:" }),
                  " ",
                  useCase.solution
                ] }) }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-green-700", children: useCase.outcome }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
                  /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: useCase.timeline }),
                  /* @__PURE__ */ jsx(
                    Badge,
                    {
                      variant: useCase.complexity === "Hoch" ? "destructive" : useCase.complexity === "Mittel" ? "default" : "secondary",
                      className: "text-xs",
                      children: useCase.complexity
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-8 w-8 text-amber-600 mx-auto" }) })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Vorteile der KDG Compliance" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Messbare Erfolge für Ihre katholische Einrichtung" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: benefits.map((benefit, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsxs(Card, { className: "p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105", children: [
                /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-bold text-amber-600 mb-2", children: benefit.metric }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2", children: benefit.title }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: benefit.description }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-amber-600 font-medium", children: benefit.detail })
              ] })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-amber-600 to-yellow-600", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto text-center text-white", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Katholischer Datenschutz mit Expertise" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-white/90", children: "Setzen Sie das KDG rechtssicher um. Schützen Sie sakramentale Daten und wahren Sie das Beichtgeheimnis mit professioneller Unterstützung." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&framework=kdg", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-amber-600 hover:bg-gray-100 group",
                    children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
                      "KDG Beratungstermin",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "bg-transparent text-white border-white hover:bg-white/10",
                    children: [
                      /* @__PURE__ */ jsx(Phone, { className: "mr-2 h-5 w-5" }),
                      "Kostenlose Erstberatung"
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-center gap-2 text-white/80", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Spezialisiert auf katholische Datenschutzanforderungen seit 2018" })
              ] })
            ]
          }
        ) }) }) })
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  KdgCompliance as default
};
