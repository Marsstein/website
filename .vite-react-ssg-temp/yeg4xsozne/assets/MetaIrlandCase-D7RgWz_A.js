import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { ArrowLeft, Euro, AlertTriangle, Calendar, Building2, Download, CheckCircle2, Eye, Database, Users, MessageCircle, BarChart3, Settings, Lightbulb, Search, Target, Bell, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
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
const MetaIrlandCase = () => {
  useEffect(() => {
    document.title = "Meta Irland 2024 – Facebook DSGVO-Entscheidung";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Meta Irland 2024: Facebook-Datenverarbeitung, Rechtsgrundlagen, Plattform-Compliance. ✓ DPC Decision ✓ Legal Basis Analysis ✓ Social Media Compliance.");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Meta Irland 2024: Facebook-Datenverarbeitung, Rechtsgrundlagen, Plattform-Compliance. ✓ DPC Decision ✓ Legal Basis Analysis ✓ Social Media Compliance.";
      document.head.appendChild(meta);
    }
    const viewport = document.querySelector('meta[name="viewport"]');
    if (!viewport) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1";
      document.head.appendChild(meta);
    }
  }, []);
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      h1, h2[id], h3[id] { 
        scroll-margin-top: 96px; 
      }
      @media (max-width: 768px) {
        h1, h2[id], h3[id] { 
          scroll-margin-top: 80px; 
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [activeTab, setActiveTab] = useState("overview");
  const [copySuccess, setCopySuccess] = useState("");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const fineBreakdown = [
    {
      violation: "Unerlaubte Datenverarbeitung für Werbezwecke",
      amount: "€390 Millionen",
      percentage: 32.5,
      description: "Verarbeitung personenbezogener Daten ohne gültige Rechtsgrundlage",
      severity: "KRITISCH"
    },
    {
      violation: "Mangelnde Transparenz bei Datenverarbeitung",
      amount: "€310 Millionen",
      percentage: 25.8,
      description: "Unzureichende Information über Verarbeitungszwecke",
      severity: "HOCH"
    },
    {
      violation: "Verletzung der Betroffenenrechte",
      amount: "€180 Millionen",
      percentage: 15,
      description: "Erschwerter Zugang zu Daten und Widerspruchsrechten",
      severity: "HOCH"
    },
    {
      violation: "Unzureichende Datenschutz-Folgenabschätzung",
      amount: "€120 Millionen",
      percentage: 10,
      description: "Fehlende DSFA für risikoreiche Verarbeitungen",
      severity: "MITTEL"
    },
    {
      violation: "Sonstige Verstöße",
      amount: "€200 Millionen",
      percentage: 16.7,
      description: "Weitere technische und organisatorische Mängel",
      severity: "MITTEL"
    }
  ];
  const keyChanges = [
    {
      area: "Einwilligungsmanagement",
      icon: CheckCircle2,
      color: "from-green-500 to-emerald-500",
      changes: [
        "Granulare Einwilligungsoptionen erforderlich",
        "Opt-out muss so einfach sein wie Opt-in",
        "Separate Einwilligung für jeden Verarbeitungszweck",
        "Regelmäßige Bestätigung der Einwilligung"
      ]
    },
    {
      area: "Transparenz und Information",
      icon: Eye,
      color: "from-blue-500 to-indigo-500",
      changes: [
        "Klarere Datenschutzerklärungen in einfacher Sprache",
        "Detaillierte Informationen über Datenverwendung",
        "Einfach zugängliche Privatsphäre-Einstellungen",
        "Proaktive Benachrichtigung bei Änderungen"
      ]
    },
    {
      area: "Datenminimierung",
      icon: Database,
      color: "from-purple-500 to-pink-500",
      changes: [
        "Beschränkung auf notwendige Daten",
        "Automatische Löschung nach Zweckerfüllung",
        "Weniger invasive Tracking-Methoden",
        "Opt-in für erweiterte Datensammlung"
      ]
    },
    {
      area: "Betroffenenrechte",
      icon: Users,
      color: "from-orange-500 to-red-500",
      changes: [
        "Vereinfachte Datenauskunft und -übertragung",
        "Effektivere Löschungsverfahren",
        "Verbesserte Widerspruchsmöglichkeiten",
        "Schnellere Bearbeitung von Anfragen"
      ]
    }
  ];
  const businessImpact = [
    {
      category: "Social Media Marketing",
      icon: MessageCircle,
      urgency: "HOCH",
      impacts: [
        "Überprüfung aller Facebook/Instagram Kampagnen",
        "Neue Einwilligungsverfahren für Pixel-Tracking",
        "Alternative Tracking-Methoden implementieren",
        "Compliance für Custom Audiences sicherstellen"
      ]
    },
    {
      category: "Datenanalyse & Insights",
      icon: BarChart3,
      urgency: "HOCH",
      impacts: [
        "First-Party Data Strategien verstärken",
        "Consent Management Plattformen einführen",
        "Anonymisierung und Pseudonymisierung",
        "Privacy-konforme Analytics Tools"
      ]
    },
    {
      category: "Kundenkommunikation",
      icon: Users,
      urgency: "MITTEL",
      impacts: [
        "Transparentere Datenschutzkommunikation",
        "Vereinfachte Privatsphäre-Einstellungen",
        "Proaktive Kundeninformation über Datennutzung",
        "Verbesserte Beschwerdemechanismen"
      ]
    },
    {
      category: "Technische Infrastruktur",
      icon: Settings,
      urgency: "HOCH",
      impacts: [
        "Consent Management Systeme upgraden",
        "Datenminimierung in bestehenden Systemen",
        "Automatisierte Löschprozesse implementieren",
        "Privacy-by-Design für neue Features"
      ]
    }
  ];
  const complianceSteps = [
    {
      phase: "Sofortige Maßnahmen (0-30 Tage)",
      priority: "KRITISCH",
      color: "from-red-500 to-pink-500",
      steps: [
        "Audit aller Social Media Datenverarbeitungen",
        "Überprüfung bestehender Einwilligungen",
        "Risikobewertung für ähnliche Verstöße",
        "Schulung der Marketing- und Legal-Teams"
      ]
    },
    {
      phase: "Kurzzeitmaßnahmen (1-3 Monate)",
      priority: "HOCH",
      color: "from-orange-500 to-red-500",
      steps: [
        "Implementierung granularer Consent-Mechanismen",
        "Überarbeitung der Datenschutzerklärungen",
        "Verbesserung der Betroffenenrechte-Verfahren",
        "First-Party Data Strategie entwickeln"
      ]
    },
    {
      phase: "Mittelfristige Strategie (3-12 Monate)",
      priority: "MITTEL",
      color: "from-blue-500 to-indigo-500",
      steps: [
        "Privacy-by-Design in alle Prozesse integrieren",
        "Kontinuierliches Compliance Monitoring",
        "Mitarbeiterschulungen und Zertifizierungen",
        "Regelmäßige Audits und Bewertungen"
      ]
    }
  ];
  const industryLessons = [
    {
      industry: "E-Commerce",
      lessons: [
        "Produkt-Tracking ohne explizite Einwilligung überdenken",
        "Personalisierte Werbung rechtssicher gestalten",
        "Customer Journey Analytics DSGVO-konform ausrichten"
      ]
    },
    {
      industry: "SaaS/Tech",
      lessons: [
        "User Onboarding mit Privacy-first Ansatz",
        "Feature-Tracking nur mit Nutzereinwilligung",
        "Third-Party Integrationen sorgfältig prüfen"
      ]
    },
    {
      industry: "Medien/Publishing",
      lessons: [
        "Reichweitenmessung ohne invasives Tracking",
        "Programmatic Advertising überdenken",
        "Newsletter-Marketing compliance optimieren"
      ]
    },
    {
      industry: "Healthcare/Fintech",
      lessons: [
        "Besonders strenge Anforderungen bei sensiblen Daten",
        "Proaktive Compliance-Strategien implementieren",
        "Regelmäßige Rechtsprechungs-Updates verfolgen"
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-spin-slow" })
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
              children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-orange-500/30 text-orange-300 hover:bg-orange-500/10", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/rechtsprechung", className: "flex items-center gap-2", children: [
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
                    className: "inline-flex items-center gap-3 px-6 py-3 bg-orange-500/10 backdrop-blur-sm rounded-full mb-8 border border-orange-500/20",
                    children: [
                      /* @__PURE__ */ jsx(Euro, { className: "h-5 w-5 text-orange-400" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-orange-300", children: "€1.2 Milliarden Strafe" }),
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-400 animate-pulse" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("h1", { className: "text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8", children: /* @__PURE__ */ jsxs(
                  motion.span,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.4, duration: 0.8 },
                    className: "block",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Meta" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent", children: "Ireland" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent", children: "DPC Case 2024" })
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsxs(
                  motion.p,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.6, duration: 0.8 },
                    className: "text-xl md:text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12",
                    children: [
                      "Die bisher höchste DSGVO-Strafe gegen",
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-orange-300", children: " Meta Ireland Limited" }),
                      " und ihre Auswirkungen auf Social Media Marketing"
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
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-red-500/20 text-red-300 border-red-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Euro, { className: "h-4 w-4 mr-2" }),
                        "€1.2 Mrd. Strafe"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-orange-500/20 text-orange-300 border-orange-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
                        "Mai 2024"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4 mr-2" }),
                        "Irish DPC"
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
    /* @__PURE__ */ jsx("section", { className: "py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", className: "bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 lg:p-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-white mb-4", children: "Inhaltsverzeichnis" }),
      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm lg:text-base", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#overview", className: "text-orange-300 hover:text-orange-400 transition-colors", children: "1. Verfahrensübersicht" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#fine", className: "text-orange-300 hover:text-orange-400 transition-colors", children: "2. Bußgeld-Aufschlüsselung" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#changes", className: "text-orange-300 hover:text-orange-400 transition-colors", children: "3. Erforderliche Änderungen" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#business", className: "text-orange-300 hover:text-orange-400 transition-colors", children: "4. Business Impact & Action Plan" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#lessons", className: "text-orange-300 hover:text-orange-400 transition-colors", children: "5. Branchenspezifische Learnings" }) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", id: "content", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "mb-12",
          children: /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-5 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl", children: [
            /* @__PURE__ */ jsx(TabsTrigger, { value: "overview", className: "data-[state=active]:bg-orange-500 data-[state=active]:text-white", children: "Überblick" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "fine", className: "data-[state=active]:bg-orange-500 data-[state=active]:text-white", children: "Bußgeld-Aufschlüsselung" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "changes", className: "data-[state=active]:bg-orange-500 data-[state=active]:text-white", children: "Änderungen" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "business", className: "data-[state=active]:bg-orange-500 data-[state=active]:text-white", children: "Business Impact" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "lessons", className: "data-[state=active]:bg-orange-500 data-[state=active]:text-white", children: "Branchenlearnings" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(TabsContent, { value: "overview", className: "space-y-8", id: "overview", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-orange-500/30", children: /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Verfahrensübersicht" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-slate-300 leading-relaxed", children: [
                /* @__PURE__ */ jsx("p", { children: "Im Mai 2024 verhängte die irische Datenschutzkommission (DPC) eine Rekordstrafe von 1.2 Milliarden Euro gegen Meta Ireland Limited wegen schwerwiegender DSGVO-Verstöße bei der Verarbeitung von Nutzerdaten auf Facebook und Instagram." }),
                /* @__PURE__ */ jsx("p", { children: "Das Verfahren konzentrierte sich auf die unrechtmäßige Verarbeitung personenbezogener Daten für Werbezwecke ohne angemessene Rechtsgrundlage und mangelnde Transparenz bei den Verarbeitungszwecken." }),
                /* @__PURE__ */ jsxs("p", { children: [
                  "Diese Entscheidung setzt neue Standards für ",
                  /* @__PURE__ */ jsx(Link, { to: "/services/social-media-compliance", className: "text-orange-300 hover:text-orange-400 underline", children: "Social Media Plattformen" }),
                  " und hat weitreichende Auswirkungen auf das gesamte ",
                  /* @__PURE__ */ jsx(Link, { to: "/services/marketing-compliance", className: "text-orange-300 hover:text-orange-400 underline", children: "Digital Marketing Ökosystem" }),
                  "."
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white mb-4", children: "Verfahren Details" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Behörde:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Irish DPC" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Datum:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Mai 2024" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Betroffene:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Meta Ireland Ltd." })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Bußgeld:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "€1.2 Mrd." })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Status:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Rechtskräftig" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-orange-500 to-red-500 text-white", children: [
                /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                "Entscheidung herunterladen"
              ] }) })
            ] })
          ] }) }) })
        }
      ) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "fine", className: "space-y-8", id: "fine", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-orange-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-8 text-center", children: "Bußgeld-Aufschlüsselung: €1.2 Milliarden" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-6", children: fineBreakdown.map((item, index) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, x: -30 },
                whileInView: { opacity: 1, x: 0 },
                transition: { delay: index * 0.1, duration: 0.6 },
                className: "bg-slate-700/50 rounded-lg p-6",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold text-white", children: item.violation }),
                        /* @__PURE__ */ jsx(Badge, { className: cn(
                          "text-xs",
                          item.severity === "KRITISCH" ? "bg-red-500/20 text-red-300" : item.severity === "HOCH" ? "bg-orange-500/20 text-orange-300" : "bg-yellow-500/20 text-yellow-300"
                        ), children: item.severity })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-sm mb-3", children: item.description })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-right ml-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-orange-400", children: item.amount }),
                      /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-400", children: [
                        item.percentage,
                        "% der Gesamtsumme"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "w-full bg-slate-600 rounded-full h-2", children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full",
                      style: { width: `${item.percentage}%` }
                    }
                  ) })
                ]
              },
              index
            )) })
          ] }) })
        }
      ) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "changes", className: "space-y-8", id: "changes", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: keyChanges.map((area, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          className: "group",
          children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-orange-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                area.color
              ), children: /* @__PURE__ */ jsx(area.icon, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: area.area })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: area.changes.map((change, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: change })
            ] }, idx)) })
          ] }) })
        },
        index
      )) }) }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "business", className: "space-y-8", id: "business", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-8", children: businessImpact.map((category, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500", children: /* @__PURE__ */ jsx(category.icon, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: category.category }),
                /* @__PURE__ */ jsx(Badge, { className: cn(
                  "px-3 py-1",
                  category.urgency === "HOCH" ? "bg-red-500/20 text-red-300" : "bg-yellow-500/20 text-yellow-300"
                ), children: category.urgency })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: category.impacts.map((impact, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: impact })
              ] }, idx)) })
            ] }) })
          },
          index
        )) }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "mt-12",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-8 text-center", children: "Compliance Action Plan" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-8", children: complianceSteps.map((phase, index) => /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: cn(
                    "px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r text-white",
                    phase.color
                  ), children: phase.priority }),
                  /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-white", children: phase.phase })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: phase.steps.map((step, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: step })
                ] }, idx)) })
              ] }) }, index)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "lessons", className: "space-y-8", id: "lessons", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-orange-500/30 mb-8", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-6 text-center", children: "Branchenspezifische Learnings" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-center mb-8", children: "Das Meta Ireland Urteil hat weitreichende Auswirkungen auf verschiedene Industrien. Hier sind die wichtigsten Erkenntnisse für Ihr Geschäftsfeld:" })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: industryLessons.map((industry, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            className: "group",
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-orange-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500", children: /* @__PURE__ */ jsx(Building2, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: industry.industry })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: industry.lessons.map((lesson, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: lesson })
              ] }, idx)) })
            ] }) })
          },
          index
        )) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 via-orange-900/30 to-slate-800/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent", children: "Ihre nächsten Schritte" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300", children: "Vermeiden Sie ähnliche Bußgelder durch proaktive Compliance" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
        {
          title: "Compliance Audit",
          description: "Sofortige Bewertung Ihrer aktuellen Social Media Praktiken",
          icon: Search,
          link: "/services/compliance-audit",
          color: "from-blue-500 to-indigo-500"
        },
        {
          title: "DSGVO Action Plan",
          description: "Schritt-für-Schritt Plan zur Risikominimierung",
          icon: Target,
          link: "/wissen/leitfaden/dsgvo-action-plan",
          color: "from-emerald-500 to-teal-500"
        },
        {
          title: "Legal Updates",
          description: "Bleiben Sie über neue Rechtsprechung auf dem Laufenden",
          icon: Bell,
          link: "/wissen/rechtsprechung",
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
          children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-orange-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
              cta.color
            ), children: /* @__PURE__ */ jsx(cta.icon, { className: "h-6 w-6 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors", children: cta.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: cta.description }),
            /* @__PURE__ */ jsx(Button, { asChild: true, className: cn(
              "w-full bg-gradient-to-r text-white",
              cta.color
            ), children: /* @__PURE__ */ jsxs(Link, { to: cta.link, className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { children: "Jetzt starten" }),
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
  MetaIrlandCase as default
};
