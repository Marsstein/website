import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { ArrowLeft, Users, Scale, Calendar, Gavel, Download, Clock, Settings, MessageCircle, ShieldCheck, X, CheckCircle2, Target, UserCheck, Eye, Building2, Heart, AlertTriangle, Search, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-tabs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const FacebookFanpageCase = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [copySuccess, setCopySuccess] = useState("");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const keyFindings = [
    {
      title: "Joint Controller Status",
      description: "Fanpage-Betreiber sind gemeinsam mit Facebook für die Datenverarbeitung verantwortlich",
      impact: "KRITISCH",
      details: "Auch ohne direkten Zugriff auf die Verarbeitungsvorgänge besteht Mitverantwortung",
      legalBasis: "Art. 26 DSGVO - Gemeinsame Verantwortlichkeit"
    },
    {
      title: "Behördliche Durchsetzung",
      description: "Datenschutzbehörden können direkt gegen Fanpage-Betreiber vorgehen",
      impact: "HOCH",
      details: "Keine Notwendigkeit, zuerst Facebook zu kontaktieren",
      legalBasis: "Art. 58 DSGVO - Befugnisse der Aufsichtsbehörden"
    },
    {
      title: "Page Insights Verantwortung",
      description: "Nutzung von Facebook Page Insights begründet Mitverantwortlichkeit",
      impact: "HOCH",
      details: "Statistiken werden durch Cookie-Verarbeitung generiert",
      legalBasis: "Art. 6 DSGVO - Rechtmäßigkeit der Verarbeitung"
    },
    {
      title: "Joint Controller Agreement",
      description: "Schriftliche Vereinbarung zwischen Fanpage-Betreiber und Facebook erforderlich",
      impact: "MITTEL",
      details: "Aufgabenverteilung und Verantwortlichkeiten müssen klar definiert sein",
      legalBasis: "Art. 26 Abs. 1 DSGVO"
    }
  ];
  const practicalImpacts = [
    {
      category: "Rechtliche Verantwortung",
      icon: Scale,
      color: "from-red-500 to-orange-500",
      risks: [
        "Direkte Haftung für DSGVO-Verstöße",
        "Bußgelder bis 4% des Jahresumsatzes",
        "Abmahnungen und Schadensersatzforderungen",
        "Behördliche Anordnungen zur Fanpage-Stilllegung"
      ],
      mitigations: [
        "Joint Controller Agreement abschließen",
        "Datenschutzerklärung für Fanpage erstellen",
        "Privacy Policy regelmäßig aktualisieren",
        "Rechtsberatung für Social Media einholen"
      ]
    },
    {
      category: "Operative Auswirkungen",
      icon: Settings,
      color: "from-blue-500 to-indigo-500",
      risks: [
        "Komplexere Datenschutz-Compliance",
        "Zusätzliche Dokumentationspflichten",
        "Erschwerte Nutzung von Page Insights",
        "Aufwand für Betroffenenanfragen"
      ],
      mitigations: [
        "Klare Social Media Guidelines",
        "Schulung der Community Manager",
        "Dokumentation aller Verarbeitungen",
        "Alternative Analytics-Tools evaluieren"
      ]
    },
    {
      category: "Marketing & Communication",
      icon: MessageCircle,
      color: "from-purple-500 to-pink-500",
      risks: [
        "Eingeschränkte Nutzung von Targeting",
        "Reduzierte Reichweiten-Analyse",
        "Komplexere Consent-Mechanismen",
        "Möglicher Verzicht auf Fanpages"
      ],
      mitigations: [
        "Transparente Kommunikation mit Followern",
        "First-Party Data Strategien entwickeln",
        "Multi-Channel Ansatz implementieren",
        "Owned Media Kanäle stärken"
      ]
    },
    {
      category: "Compliance Management",
      icon: ShieldCheck,
      color: "from-emerald-500 to-teal-500",
      risks: [
        "Unklare Verantwortungsverteilung",
        "Schwierige Betroffenenrechte-Erfüllung",
        "Komplexe Datenschutz-Folgenabschätzung",
        "Internationale Compliance-Herausforderungen"
      ],
      mitigations: [
        "Klare Prozesse für Betroffenenanfragen",
        "Regelmäßige Compliance-Audits",
        "Data Protection Impact Assessments",
        "Kontinuierliche Rechtsprechungsbeobachtung"
      ]
    }
  ];
  const complianceSteps = [
    {
      phase: "Sofortmaßnahmen (0-30 Tage)",
      urgency: "KRITISCH",
      color: "from-red-500 to-pink-500",
      tasks: [
        "Bestandsaufnahme aller Facebook-Fanpages",
        "Aktueller Status des Joint Controller Agreements prüfen",
        "Bestehende Datenschutzerklärungen auf Fanpage-Bezug überprüfen",
        "Page Insights Nutzung dokumentieren",
        "Rechtliche Risikobewertung durchführen",
        "Notfallplan für Behördenanfragen erstellen"
      ]
    },
    {
      phase: "Kurzzeitmaßnahmen (1-3 Monate)",
      urgency: "HOCH",
      color: "from-orange-500 to-red-500",
      tasks: [
        "Joint Controller Agreement mit Meta aktualisieren",
        "Fanpage-spezifische Datenschutzerklärung erstellen",
        "Prozesse für Betroffenenanfragen implementieren",
        "Community Management Guidelines anpassen",
        "Mitarbeiterschulungen für Social Media Compliance",
        "Alternative Analytics-Tools evaluieren"
      ]
    },
    {
      phase: "Mittelfristige Strategie (3-12 Monate)",
      urgency: "MITTEL",
      color: "from-blue-500 to-indigo-500",
      tasks: [
        "Kontinuierliches Monitoring der Rechtsprechung",
        "Regelmäßige Compliance-Audits einführen",
        "First-Party Data Strategien entwickeln",
        "Owned Media Kanäle aufbauen",
        "Social Media Governance Framework implementieren",
        "Notfallpläne für Plattform-Änderungen"
      ]
    }
  ];
  const jcaRequirements = [
    {
      section: "Zwecke und Mittel",
      icon: Target,
      requirements: [
        "Klar definierte Verarbeitungszwecke für Page Insights",
        "Bestimmung der Verarbeitungsmittel und -methoden",
        "Abgrenzung zwischen Facebook und Fanpage-Betreiber",
        "Dokumentation der technischen Verarbeitungsvorgänge"
      ]
    },
    {
      section: "Verantwortlichkeiten",
      icon: Users,
      requirements: [
        "Aufgabenverteilung zwischen den Verantwortlichen",
        "Federführung bei Betroffenenanfragen definieren",
        "Meldepflichten bei Data Breaches festlegen",
        "Zuständigkeiten für Compliance-Monitoring"
      ]
    },
    {
      section: "Betroffenenrechte",
      icon: UserCheck,
      requirements: [
        "Verfahren für Auskunftsersuchen etablieren",
        "Löschungsverfahren und -zuständigkeiten",
        "Widerspruchsrechte und deren Umsetzung",
        "Datenportabilität und Übertragungsverfahren"
      ]
    },
    {
      section: "Transparenz",
      icon: Eye,
      requirements: [
        "Information der Betroffenen über Joint Controllership",
        "Kontaktdaten beider Verantwortlicher bereitstellen",
        "Wesentliche Inhalte der Vereinbarung veröffentlichen",
        "Verständliche Datenschutzinformationen"
      ]
    }
  ];
  const industryImpacts = [
    {
      sector: "E-Commerce",
      icon: Building2,
      challenges: [
        "Produktwerbung über Fanpages rechtlich absichern",
        "Customer Service über Facebook Messenger",
        "Retargeting-Kampagnen compliance-konform gestalten",
        "Social Commerce Features rechtssicher nutzen"
      ],
      solutions: [
        "Separate Consent-Mechanismen für verschiedene Zwecke",
        "Klare Trennung zwischen organischen und bezahlten Inhalten",
        "Alternative Kundenservice-Kanäle aufbauen",
        "First-Party Data für Personalisierung nutzen"
      ]
    },
    {
      sector: "B2B Services",
      icon: UserCheck,
      challenges: [
        "Lead-Generierung über Facebook Forms",
        "Professional Networking und Business Development",
        "Veranstaltungsmarketing und Event-Promotion",
        "Thought Leadership Content und Reichweite"
      ],
      solutions: [
        "LinkedIn als Alternative für B2B Networking",
        "Eigene Landing Pages für Lead-Generierung",
        "Email-Marketing für direkte Kommunikation",
        "Corporate Blog für Content Marketing"
      ]
    },
    {
      sector: "Non-Profit",
      icon: Heart,
      challenges: [
        "Spendenwerbung und Fundraising-Kampagnen",
        "Freiwilligen-Rekrutierung über Social Media",
        "Awareness-Kampagnen für gesellschaftliche Themen",
        "Community Building und Engagement"
      ],
      solutions: [
        "Transparente Kommunikation über Datennutzung",
        "Opt-in Mechanismen für Spender-Kommunikation",
        "Multi-Channel Fundraising-Strategien",
        "Fokus auf organische Reichweite und Engagement"
      ]
    },
    {
      sector: "Healthcare",
      icon: ShieldCheck,
      challenges: [
        "Besonders sensible Daten und strenge Compliance",
        "Patientenaufklärung und Gesundheitsinformationen",
        "Medizinische Werbung und Arzneimittel-Marketing",
        "Vertrauen und Reputation in sensiblen Bereichen"
      ],
      solutions: [
        "Minimale Datenverarbeitung auf Social Media",
        "Eigene Plattformen für Patientenkommunikation",
        "Strikte Trennung von Marketing und medizinischer Beratung",
        "Regelmäßige Compliance-Audits und Schulungen"
      ]
    }
  ];
  const timeline = [
    {
      date: "5. Juni 2018",
      event: "EuGH Urteil Fanpage",
      description: "Grundsatzentscheidung zur gemeinsamen Verantwortlichkeit",
      type: "critical"
    },
    {
      date: "September 2018",
      event: "Facebook aktualisiert Page Terms",
      description: "Erste Anpassungen der Nutzungsbedingungen",
      type: "important"
    },
    {
      date: "Mai 2019",
      event: "Joint Controller Addendum",
      description: "Facebook veröffentlicht Standard-JCA für Fanpages",
      type: "update"
    },
    {
      date: "2020-2021",
      event: "Erste Bußgelder",
      description: "Behörden verhängen Strafen gegen Fanpage-Betreiber",
      type: "enforcement"
    },
    {
      date: "2022-2024",
      event: "Verschärfte Durchsetzung",
      description: "Verstärkte Kontrollen und höhere Bußgelder",
      type: "ongoing"
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Facebook Fanpage EuGH C-210/16 – Gemeinsame Verantwortlichkeit",
        description: "Facebook Fanpage EuGH-Urteil: Gemeinsame Verantwortlichkeit, Page Insights, Social Media Compliance. ✓ Joint Controllership ✓ Liability ✓ Practical Implications.",
        canonical: "/wissen/rechtsprechung/facebook-fanpage",
        keywords: "Facebook Fanpage, EuGH, gemeinsame Verantwortlichkeit, Joint Controller, DSGVO, Page Insights, Social Media Compliance",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Facebook Fanpage EuGH C-210/16 – Gemeinsame Verantwortlichkeit",
          "description": "Das grundlegende Urteil zur gemeinsamen Verantwortlichkeit von Fanpage-Betreibern und Facebook",
          "author": {
            "@type": "Organization",
            "name": "Marsstein"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Marsstein",
            "logo": {
              "@type": "ImageObject",
              "url": "https://marsstein.com/logo.png"
            }
          },
          "datePublished": "2018-06-05",
          "dateModified": "2024-01-15",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://marsstein.com/wissen/rechtsprechung/facebook-fanpage"
          }
        }
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-spin-slow" })
    ] }),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        ref: heroRef,
        style: { y, opacity },
        className: "relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden",
        children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "mb-8",
              children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-blue-500/30 text-blue-300 hover:bg-blue-500/10", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/rechtsprechung", className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
                "Zurück zur Rechtsprechung"
              ] }) })
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "text-center mb-20",
              children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { delay: 0.2, type: "spring", stiffness: 200 },
                    className: "inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20",
                    children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-blue-400" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-blue-300", children: "Joint Controller" }),
                      /* @__PURE__ */ jsx(Scale, { className: "h-5 w-5 text-purple-400 animate-pulse" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.h1,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.4, duration: 0.8 },
                    className: "text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Facebook" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent", children: "Fanpage" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent", children: "EuGH C-210/16" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.p,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.6, duration: 0.8 },
                    className: "text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12",
                    children: [
                      "Das grundlegende Urteil zur",
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-300", children: " gemeinsamen Verantwortlichkeit" }),
                      " von Fanpage-Betreibern und Facebook"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.8, duration: 0.8 },
                    className: "flex flex-wrap justify-center gap-4 mb-12",
                    children: [
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 mr-2" }),
                        "Joint Controller"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
                        "5. Juni 2018"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Gavel, { className: "h-4 w-4 mr-2" }),
                        "EuGH"
                      ] })
                    ]
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "text-center mb-8",
        children: [
          /* @__PURE__ */ jsx("h2", { id: "inhaltsverzeichnis", className: "text-3xl font-bold text-white mb-6", style: { scrollMarginTop: "100px" }, children: "Inhaltsverzeichnis" }),
          /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 text-left", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("a", { href: "#urteilsuebersicht", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "1." }),
                " Urteilsübersicht"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#timeline", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "2." }),
                " Entwicklung Timeline"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#jca-anforderungen", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "3." }),
                " Joint Controller Agreement"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("a", { href: "#kernurteile", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "4." }),
                " Kernurteile & Auswirkungen"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#compliance", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "5." }),
                " Compliance-Leitfaden"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#branchen", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-400 font-medium", children: "6." }),
                " Branchenspezifische Aspekte"
              ] })
            ] })
          ] }) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "mb-12",
          children: /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2 md:grid-cols-6 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl gap-2 md:gap-0", children: [
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "overview", className: "data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Überblick" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Info" })
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "findings", className: "data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Kernurteile" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Urteil" })
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "impact", className: "data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Auswirkungen" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Impact" })
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "compliance", className: "data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Compliance" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Guide" })
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "jca", className: "data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "JCA Details" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "JCA" })
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "industry", className: "data-[state=active]:bg-blue-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Branchen" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Sektor" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsxs(TabsContent, { value: "overview", className: "space-y-8", id: "overview", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-blue-500/30", children: /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
                /* @__PURE__ */ jsx("h3", { id: "urteilsuebersicht", className: "text-2xl font-bold text-white mb-6", style: { scrollMarginTop: "100px" }, children: "Urteilsübersicht" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-slate-300 leading-relaxed", children: [
                  /* @__PURE__ */ jsx("p", { children: "Am 5. Juni 2018 entschied der Europäische Gerichtshof in der Rechtssache C-210/16 (Wirtschaftsakademie Schleswig-Holstein), dass Betreiber von Facebook-Fanpages gemeinsam mit Facebook Ireland für die Verarbeitung personenbezogener Daten verantwortlich sind." }),
                  /* @__PURE__ */ jsx("p", { children: 'Diese Grundsatzentscheidung revolutionierte die rechtliche Bewertung von Social Media Marketing und etablierte das Konzept der "gemeinsamen Verantwortlichkeit" auch bei begrenzten Einflussmöglichkeiten.' }),
                  /* @__PURE__ */ jsx("p", { children: "Das Urteil hat weitreichende Konsequenzen für alle Unternehmen und Organisationen, die Facebook-Fanpages betreiben oder andere Social Media Plattformen für Marketingzwecke nutzen." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-4", children: "Verfahren Details" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Aktenzeichen:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "C-210/16" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Datum:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "5. Juni 2018" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Gericht:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "EuGH" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Kläger:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "ULD Schleswig-Holstein" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Beklagte:" }),
                      /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Wirtschaftsakademie" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-blue-500 to-indigo-500 text-white", children: [
                  /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                  "Volltext herunterladen"
                ] }) })
              ] })
            ] }) }) })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: 0.2, duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-blue-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("h3", { id: "timeline", className: "text-2xl font-bold text-white mb-8 text-center", style: { scrollMarginTop: "100px" }, children: "Entwicklung Timeline" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-6", children: timeline.map((event, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -30 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { delay: index * 0.1, duration: 0.6 },
                  className: "flex gap-6 relative",
                  children: [
                    index < timeline.length - 1 && /* @__PURE__ */ jsx("div", { className: "absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-blue-500 to-transparent" }),
                    /* @__PURE__ */ jsx("div", { className: cn(
                      "w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0",
                      event.type === "critical" ? "bg-red-500" : event.type === "important" ? "bg-orange-500" : event.type === "update" ? "bg-blue-500" : event.type === "enforcement" ? "bg-purple-500" : "bg-green-500"
                    ), children: /* @__PURE__ */ jsx(Clock, { className: "h-6 w-6 text-white" }) }),
                    /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                        /* @__PURE__ */ jsx(Badge, { className: "bg-slate-600 text-slate-200", children: event.date }),
                        /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white", children: event.event })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: event.description })
                    ] }) })
                  ]
                },
                index
              )) })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "findings", className: "space-y-8", id: "kernurteile", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6", children: keyFindings.map((finding, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-colors", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "px-3 py-1 rounded-full text-xs font-bold",
              finding.impact === "KRITISCH" ? "bg-red-500/20 text-red-300" : finding.impact === "HOCH" ? "bg-orange-500/20 text-orange-300" : "bg-yellow-500/20 text-yellow-300"
            ), children: finding.impact }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: finding.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-3", children: finding.description }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-2", children: finding.details }),
              /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300 text-xs", children: finding.legalBasis })
            ] })
          ] }) }) })
        },
        index
      )) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "impact", className: "space-y-8", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: practicalImpacts.map((impact, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          className: "group",
          children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                impact.color
              ), children: /* @__PURE__ */ jsx(impact.icon, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: impact.category })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-red-300 mb-3", children: "Risiken:" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: impact.risks.map((risk, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: risk })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold text-green-300 mb-3", children: "Lösungsansätze:" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: impact.mitigations.map((mitigation, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: mitigation })
                ] }, idx)) })
              ] })
            ] })
          ] }) })
        },
        index
      )) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "compliance", className: "space-y-8", id: "compliance", children: /* @__PURE__ */ jsx("div", { className: "space-y-8", children: complianceSteps.map((step, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r text-white",
                step.color
              ), children: step.urgency }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: step.phase })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: step.tasks.map((task, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: task })
            ] }, idx)) })
          ] }) })
        },
        index
      )) }) }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "jca", className: "space-y-8", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "mb-8",
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-blue-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("h3", { id: "jca-anforderungen", className: "text-2xl font-bold text-white mb-6 text-center", style: { scrollMarginTop: "100px" }, children: "Joint Controller Agreement Anforderungen" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-center", children: "Wesentliche Elemente für rechtssichere Joint Controller Agreements nach Art. 26 DSGVO" })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: jcaRequirements.map((section, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            className: "group",
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500", children: /* @__PURE__ */ jsx(section.icon, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: section.section })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: section.requirements.map((requirement, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: requirement })
              ] }, idx)) })
            ] }) })
          },
          index
        )) })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "industry", className: "space-y-8", id: "branchen", children: /* @__PURE__ */ jsx("div", { className: "space-y-8", children: industryImpacts.map((industry, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500", children: /* @__PURE__ */ jsx(industry.icon, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: industry.sector })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-orange-300 mb-4", children: "Herausforderungen:" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: industry.challenges.map((challenge, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-orange-500/10 rounded-lg", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: challenge })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-300 mb-4", children: "Lösungsansätze:" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: industry.solutions.map((solution, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-green-500/10 rounded-lg", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: solution })
                ] }, idx)) })
              ] })
            ] })
          ] }) })
        },
        index
      )) }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 via-blue-900/30 to-slate-800/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent", children: "Ihre nächsten Schritte" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300", children: "Sichern Sie Ihre Social Media Aktivitäten rechtlich ab" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
        {
          title: "Fanpage Compliance Audit",
          description: "Umfassende Prüfung Ihrer Facebook-Aktivitäten",
          icon: Search,
          link: "/services/fanpage-audit",
          color: "from-blue-500 to-indigo-500"
        },
        {
          title: "JCA Template",
          description: "Vorlage für Joint Controller Agreements",
          icon: FileText,
          link: "/resources/jca-template",
          color: "from-emerald-500 to-teal-500"
        },
        {
          title: "Social Media Guidelines",
          description: "Rechtssichere Richtlinien für Ihr Team",
          icon: Users,
          link: "/resources/social-media-guidelines",
          color: "from-orange-500 to-red-500"
        }
      ].map((cta, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          whileHover: { y: -5 },
          className: "group",
          children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
              cta.color
            ), children: /* @__PURE__ */ jsx(cta.icon, { className: "h-6 w-6 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors", children: cta.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: cta.description }),
            /* @__PURE__ */ jsx(Button, { asChild: true, className: cn(
              "w-full bg-gradient-to-r text-white",
              cta.color
            ), children: /* @__PURE__ */ jsxs(Link, { to: cta.link, className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { children: "Jetzt nutzen" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) })
          ] }) })
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  FacebookFanpageCase as default
};
