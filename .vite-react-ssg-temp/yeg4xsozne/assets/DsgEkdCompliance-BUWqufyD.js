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
import { Church, CheckCircle2, PlayCircle, ArrowRight, Download, Users, Heart, HandHeart, Building2, Scale, UserPlus, MessageSquare, Book, BookOpen, ShieldCheck, Calendar, Phone, Sparkles } from "lucide-react";
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
const DsgEkdCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      setComplianceScore(97);
    }, 1e3);
    return () => clearTimeout(timer);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DSG-EKD Kirchlicher Datenschutz",
    "description": "DSG-EKD Compliance: Datenschutzgesetz der Evangelischen Kirche in Deutschland für kirchliche Einrichtungen",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "Church Data Protection Certification",
    "areaServed": "DE"
  };
  const painPoints = [
    {
      icon: Church,
      title: "Kirchliche Besonderheiten im Datenschutz",
      description: "Spezifische Anforderungen für Gemeindedaten, Seelsorgegeheimnisse und kirchliche Amtshandlungen unter Berücksichtigung des kirchlichen Selbstbestimmungsrechts.",
      impact: "Kritisch",
      example: "Taufregister, Mitgliederdaten, Seelsorgeunterlagen, Gemeindebriefe"
    },
    {
      icon: HandHeart,
      title: "Sensible Daten in der Seelsorge",
      description: "Besonders schützenswerte Daten aus Seelsorge, Beratung und diakonischen Diensten erfordern höchste Vertraulichkeit und spezielle Schutzmaßnahmen.",
      impact: "Kritisch",
      example: "Beichtgeheimnisse, Beratungsprotokolle, Gesundheitsdaten in kirchlichen Einrichtungen"
    },
    {
      icon: Building2,
      title: "Komplexe Kirchenstrukturen",
      description: "Vielschichtige Organisationsstrukturen von Landeskirchen über Gemeinden bis zu diakonischen Werken erschweren einheitliche Datenschutzprozesse.",
      impact: "Hoch",
      example: "Landeskirchen, Kirchengemeinden, Diakonie, kirchliche Stiftungen"
    },
    {
      icon: Scale,
      title: "Balance zwischen Transparenz und Schutz",
      description: "Spannungsfeld zwischen kirchlicher Öffentlichkeitsarbeit, Gemeindearbeit und dem Schutz personenbezogener Daten der Gemeindemitglieder.",
      impact: "Hoch",
      example: "Gemeindebriefe, Jubiläumslisten, Fotorechte bei Veranstaltungen, Online-Gottesdienste"
    }
  ];
  const solutions = [
    {
      title: "Kirchliches Datenschutz-Management",
      description: "Maßgeschneiderte Datenschutzkonzepte für kirchliche Einrichtungen nach DSG-EKD",
      features: [
        "Kirchenspezifische Verfahrensverzeichnisse",
        "Seelsorge-Datenschutzkonzepte",
        "Gemeindedaten-Management",
        "Digitale Kirchenbuch-Sicherheit"
      ],
      icon: Church,
      color: "from-purple-500 to-violet-600"
    },
    {
      title: "Schulung & Sensibilisierung",
      description: "Praxisorientierte Schulungen für Haupt- und Ehrenamtliche in kirchlichen Einrichtungen",
      features: [
        "DSG-EKD Grundlagenschulungen",
        "Seelsorge & Datenschutz Workshops",
        "Ehrenamtlichen-Sensibilisierung",
        "Kirchenvorstands-Briefings"
      ],
      icon: BookOpen,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Technische & Organisatorische Maßnahmen",
      description: "Kirchengerechte TOM für den Schutz sensibler Gemeinde- und Seelsorgedaten",
      features: [
        "Sichere Gemeinde-Software",
        "Verschlüsselte Seelsorge-Kommunikation",
        "Kirchenbuch-Digitalisierung",
        "Backup-Konzepte für Gemeindedaten"
      ],
      icon: ShieldCheck,
      color: "from-green-500 to-emerald-600"
    }
  ];
  const useCases = [
    {
      title: "Landeskirche implementiert DSG-EKD",
      challenge: "Evangelische Landeskirche mit 500+ Gemeinden benötigt einheitliche DSG-EKD Umsetzung",
      solution: "Zentrales Datenschutzmanagement + Gemeinde-Templates + Schulungsprogramm",
      outcome: "Flächendeckende DSG-EKD Compliance in 18 Monaten, 95% Zufriedenheit",
      timeline: "18 Monate",
      complexity: "Hoch"
    },
    {
      title: "Diakonisches Werk digitalisiert Datenschutz",
      challenge: "Großes diakonisches Werk mit Gesundheits- und Sozialdaten benötigt moderne Datenschutzlösung",
      solution: "Integriertes DSG-EKD System + Gesundheitsdaten-Schutz + Mitarbeiterschulung",
      outcome: "Rechtssichere Digitalisierung, 60% Effizienzsteigerung bei Datenschutzprozessen",
      timeline: "12 Monate",
      complexity: "Hoch"
    },
    {
      title: "Kirchengemeinde meistert Online-Präsenz",
      challenge: "Mittelgroße Gemeinde möchte digitale Angebote DSG-EKD-konform gestalten",
      solution: "Website-Audit + Streaming-Konzept + Datenschutzerklärung + Cookie-Management",
      outcome: "Rechtssichere Online-Präsenz mit Live-Gottesdiensten und digitalem Gemeindeleben",
      timeline: "3 Monate",
      complexity: "Mittel"
    }
  ];
  const privacyControls = [
    {
      name: "Kirchliche Datenverarbeitung",
      description: "Spezifische Regelungen für Sakramente, Amtshandlungen und Gemeindeleben",
      coverage: 98,
      controls: ["Taufdaten", "Konfirmation", "Trauung", "Bestattung", "Mitgliederverwaltung"],
      icon: Church,
      detail: "Besondere Verfahren für kirchliche Amtshandlungen und deren lebenslange Dokumentation"
    },
    {
      name: "Seelsorgegeheimnis",
      description: "Absoluter Schutz seelsorgerlicher Kommunikation und Beratung",
      coverage: 100,
      controls: ["Beichtgeheimnis", "Seelsorgegespräche", "Vertrauliche Beratung"],
      icon: Heart,
      detail: "Höchste Vertraulichkeitsstufe für alle seelsorgerlichen Tätigkeiten"
    },
    {
      name: "Ehrenamtlichen-Datenschutz",
      description: "Datenschutz-Compliance für ehrenamtlich Tätige in der Kirche",
      coverage: 94,
      controls: ["Verpflichtungserklärungen", "Schulungen", "Zugriffskontrollen"],
      icon: UserPlus,
      detail: "Strukturierte Einbindung Ehrenamtlicher in kirchliche Datenschutzprozesse"
    },
    {
      name: "Gemeindekommunikation",
      description: "Datenschutzkonforme interne und externe Kommunikation",
      coverage: 92,
      controls: ["Gemeindebriefe", "Newsletter", "Soziale Medien", "Aushänge"],
      icon: MessageSquare,
      detail: "Balance zwischen lebendiger Gemeindekommunikation und Datenschutz"
    },
    {
      name: "Kirchenbuchführung",
      description: "Sichere Verwaltung historischer und aktueller Kirchenbücher",
      coverage: 96,
      controls: ["Digitalisierung", "Archivierung", "Zugriffskontrolle", "Langzeitspeicherung"],
      icon: Book,
      detail: "Jahrhundertealte Kirchenbücher sicher in die digitale Zukunft führen"
    }
  ];
  const benefits = [
    {
      title: "Kirchliche Autonomie",
      description: "Wahrung des kirchlichen Selbstbestimmungsrechts",
      metric: "100%",
      detail: "DSG-EKD-konform unter Beachtung kirchlicher Besonderheiten"
    },
    {
      title: "Vertrauensschutz",
      description: "Stärkung des Vertrauens in kirchliche Einrichtungen",
      metric: "95%",
      detail: "der Gemeindemitglieder vertrauen auf sicheren Datenschutz"
    },
    {
      title: "Prozesseffizienz",
      description: "Optimierte Verwaltungsabläufe durch klare Datenschutzregeln",
      metric: "40%",
      detail: "Zeitersparnis durch standardisierte Datenschutzprozesse"
    },
    {
      title: "Rechtssicherheit",
      description: "Schutz vor Bußgeldern und Reputationsschäden",
      metric: "€0",
      detail: "Bußgelder durch proaktive DSG-EKD Compliance"
    }
  ];
  const complianceAreas = [
    { name: "Seelsorgedaten-Schutz", coverage: 100, area: "Kernbereich" },
    { name: "Mitgliederverwaltung", coverage: 98, area: "Administration" },
    { name: "Ehrenamtlichen-Compliance", coverage: 94, area: "Personal" },
    { name: "Digitale Kirchendienste", coverage: 92, area: "Innovation" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "DSG-EKD – Kirchlicher Datenschutz der Evangelischen Kirche",
        description: "DSG-EKD Compliance für kirchliche Einrichtungen: Datenschutzgesetz der EKD umsetzen. ✓ Seelsorgegeheimnis ✓ Gemeindedaten ✓ Kirchliche Autonomie",
        canonical: "/compliance/dsg-ekd",
        keywords: "DSG-EKD, Kirchlicher Datenschutz, Evangelische Kirche, EKD Datenschutz, Kirchendatenschutz",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("main", { className: "overflow-hidden", children: [
        /* @__PURE__ */ jsxs("section", { className: "relative py-20 md:py-28", children: [
          /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
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
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400", children: [
                    /* @__PURE__ */ jsx(Church, { className: "h-4 w-4" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Kirchlicher Datenschutz" })
                  ] }),
                  /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight", children: [
                    "DSG-EKD Compliance",
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent block mt-2", children: "für Ihre Kirche" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300", children: "Datenschutzgesetz der Evangelischen Kirche rechtssicher umsetzen. Schützen Sie Gemeindedaten, wahren Sie das Seelsorgegeheimnis." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-purple-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Kirchenspezifische Datenschutzlösungen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-purple-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Seelsorgegeheimnis & Vertraulichkeit" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-purple-600 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Beratung durch kirchenerfahrene Experten" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 pt-4", children: [
                    /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&framework=dsg-ekd", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-purple-600 to-violet-600 text-white hover:opacity-90 group", children: [
                      /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-5 w-5" }),
                      "DSG-EKD Beratung",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
                    ] }) }),
                    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "DSG-EKD Leitfaden"
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
                  /* @__PURE__ */ jsx(Card, { className: "p-6 shadow-2xl border-2 border-purple-200 dark:border-purple-800", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Kirchlicher Datenschutz-Status" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-purple-100 text-purple-700", children: "DSG-EKD konform" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(Church, { className: "h-5 w-5 text-purple-600" }),
                          /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-purple-700", children: [
                            complianceScore,
                            "%"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Compliance Score" }),
                        /* @__PURE__ */ jsx("div", { className: "w-full bg-purple-200 rounded-full h-2 mt-2", children: /* @__PURE__ */ jsx(
                          motion.div,
                          {
                            className: "bg-purple-600 h-2 rounded-full",
                            initial: { width: 0 },
                            animate: { width: isVisible ? `${complianceScore}%` : 0 },
                            transition: { duration: 1.5, delay: 0.5 }
                          }
                        ) })
                      ] }),
                      /* @__PURE__ */ jsxs(Card, { className: "p-4 bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/20 dark:to-violet-900/20", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-violet-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-violet-700", children: "15k+" })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: "Geschützte Mitglieder" }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mt-2", children: [
                          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-green-600" }),
                          /* @__PURE__ */ jsx("span", { className: "text-xs text-violet-600", children: "Seelsorgegeheimnis" })
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
                          className: "bg-purple-600 h-2 rounded-full",
                          initial: { width: 0 },
                          animate: { width: isVisible ? `${area.coverage}%` : 0 },
                          transition: { duration: 1, delay: 0.3 + index * 0.1 }
                        }
                      ) })
                    ] }, index)) })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 bg-white dark:bg-gray-900 rounded-full px-4 py-2 shadow-xl border-2 border-purple-500 animate-bounce", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4 text-purple-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Vertrauensvoll" })
                  ] }) })
                ]
              }
            )
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gray-50 dark:bg-gray-900/50", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Herausforderungen im kirchlichen Datenschutz" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Besondere Anforderungen für Kirchen und kirchliche Einrichtungen" })
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
                  /* @__PURE__ */ jsx(point.icon, { className: "h-6 w-6 text-purple-600" }),
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "DSG-EKD Datenschutz-Kontrollen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Spezifische Schutzmaßnahmen für kirchliche Datenverarbeitung" })
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
                    /* @__PURE__ */ jsx("div", { className: "p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg", children: /* @__PURE__ */ jsx(control.icon, { className: "h-6 w-6 text-purple-600" }) }),
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
                    /* @__PURE__ */ jsxs("span", { className: "font-semibold text-purple-600", children: [
                      control.coverage,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 rounded-full h-3", children: /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      className: "bg-gradient-to-r from-purple-500 to-violet-600 h-3 rounded-full",
                      initial: { width: 0 },
                      whileInView: { width: `${control.coverage}%` },
                      transition: { duration: 1.2, delay: 0.3 },
                      viewport: { once: true }
                    }
                  ) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-100 text-purple-700 text-sm px-4 py-2", children: [
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
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "DSG-EKD Lösungsansätze" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Maßgeschneiderte Datenschutzkonzepte für Ihre kirchliche Einrichtung" })
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
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { children: feature })
                ] }, i)) })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "DSG-EKD in der Praxis" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Erfolgreiche Umsetzungen in kirchlichen Einrichtungen" })
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
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2 text-purple-700", children: useCase.title }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Herausforderung:" }),
                    " ",
                    useCase.challenge
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium text-purple-700", children: "Lösung:" }),
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
                /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-8 w-8 text-purple-600 mx-auto" }) })
              ] }) })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Vorteile der DSG-EKD Compliance" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Messbare Erfolge für Ihre kirchliche Einrichtung" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: benefits.map((benefit, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 50 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              viewport: { once: true },
              children: /* @__PURE__ */ jsxs(Card, { className: "p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105", children: [
                /* @__PURE__ */ jsx("div", { className: "text-3xl md:text-4xl font-bold text-purple-600 mb-2", children: benefit.metric }),
                /* @__PURE__ */ jsx("div", { className: "font-semibold mb-2", children: benefit.title }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: benefit.description }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-purple-600 font-medium", children: benefit.detail })
              ] })
            },
            index
          )) })
        ] }) }) }),
        /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-purple-600 to-violet-600", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto text-center text-white", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 50 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Kirchlicher Datenschutz mit Expertise" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-white/90", children: "Setzen Sie das DSG-EKD rechtssicher um. Schützen Sie Gemeindedaten und wahren Sie das Vertrauen Ihrer Mitglieder mit professioneller Unterstützung." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
                /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true&framework=dsg-ekd", children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-purple-600 hover:bg-gray-100 group",
                    children: [
                      /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
                      "DSG-EKD Beratungstermin",
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
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Spezialisiert auf kirchliche Datenschutzanforderungen seit 2018" })
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
  DsgEkdCompliance as default
};
