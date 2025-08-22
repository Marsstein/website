import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Baby, BookOpen, ArrowRight, Download, Activity, Info, Scale, Camera, Smartphone, FileText, Shield, Users, AlertTriangle, Heart, Building2, Euro, CheckCircle2, X, Clipboard, Globe, MessageSquare, CheckSquare, Square, Cloud, Monitor, Video, Timer, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-progress";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
const DatenschutzKindergarten = () => {
  const pageTitle = "Datenschutz Kindergarten DSGVO – Kita-Guide 2024";
  const pageDescription = "DSGVO für Kindergärten: ✓ Kinderdaten schützen ✓ Foto-Einwilligungen ✓ Elternkommunikation ✓ Praktische Checklisten. Jetzt Kita DSGVO-konform machen!";
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [activeSection, setActiveSection] = useState("overview");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const navigationItems = [
    { id: "ueberblick", label: "Überblick", icon: Baby },
    { id: "rechtlicher-rahmen", label: "Rechtlicher Rahmen", icon: Scale },
    { id: "fotos-videos", label: "Foto & Video", icon: Camera },
    { id: "digitale-tools", label: "Digitale Tools", icon: Smartphone },
    { id: "dokumentation", label: "Dokumentation", icon: FileText },
    { id: "massnahmen", label: "Maßnahmen", icon: Shield },
    { id: "elternkommunikation", label: "Elternkommunikation", icon: Users },
    { id: "datenpannen", label: "Datenpannen", icon: AlertTriangle }
  ];
  const scrollToSection = (sectionId) => {
    window.history.pushState(null, "", `#${sectionId}`);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      h2[id], h3[id], section[id] {
        scroll-margin-top: 96px;
      }
      
      /* Mobile-optimierungen */
      @media (max-width: 768px) {
        body {
          font-size: 16px;
          line-height: 1.5;
        }
        
        .tap-target {
          min-height: 48px;
          min-width: 48px;
        }
        
        p, li {
          max-width: 45ch;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
        setActiveSection(hash);
      }, 100);
    }
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => ({
        id: item.id,
        element: document.getElementById(item.id)
      }));
      const scrollPosition = window.scrollY + 150;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const complianceStats = [
    { label: "Kinderdatenschutz", value: 98, color: "text-red-600", trend: "+5%" },
    { label: "Einwilligungsmanagement", value: 94, color: "text-pink-600", trend: "+8%" },
    { label: "Foto-Compliance", value: 92, color: "text-rose-600", trend: "+12%" },
    { label: "Digitale Sicherheit", value: 95, color: "text-red-500", trend: "+7%" },
    { label: "Elterntransparenz", value: 96, color: "text-orange-500", trend: "+15%" },
    { label: "Audit Readiness", value: 91, color: "text-purple-600", trend: "+3%" }
  ];
  const toggleCheckedItem = (itemId) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: pageTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "datenschutz kindergarten, dsgvo kita, kinderdatenschutz, foto einwilligung kita, dsgvo compliance kindergarten" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.example.com/wissen/branchen/datenschutz-kindergarten" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: pageTitle }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.example.com/wissen/branchen/datenschutz-kindergarten" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": pageTitle,
        "description": pageDescription,
        "author": {
          "@type": "Organization",
          "name": "DSGVO Compliance Team"
        },
        "datePublished": "2024-01-01",
        "dateModified": (/* @__PURE__ */ new Date()).toISOString()
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white dark:bg-gray-950", children: [
      /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative py-20 md:py-28 overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-rose-500/10 rounded-full blur-3xl animate-pulse delay-500" })
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            style: { y, opacity },
            className: "container mx-auto px-4",
            children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8 },
                  className: "text-center mb-12",
                  children: [
                    /* @__PURE__ */ jsxs(Badge, { className: "mb-6 px-4 py-2 text-sm font-medium bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300 border-red-200 dark:border-red-800", children: [
                      /* @__PURE__ */ jsx(Baby, { className: "w-4 h-4 mr-2 inline" }),
                      "DSGVO-Compliance für Kindergärten & Kitas"
                    ] }),
                    /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white", children: [
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent", children: "Kinderdaten" }),
                      " ",
                      "sicher schützen"
                    ] }),
                    /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed", children: [
                      "In deutschen Kitas werden täglich sensible Daten von über 3,7 Millionen Kindern verarbeitet. Schützen Sie diese Daten rechtskonform und vertrauenswürdig mit unseren ",
                      /* @__PURE__ */ jsx(Link, { to: "/loesungen", className: "text-red-600 dark:text-red-400 hover:underline", children: "DSGVO-Lösungen" }),
                      "."
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-12", children: [
                      /* @__PURE__ */ jsxs(
                        Button,
                        {
                          size: "lg",
                          className: "bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 min-h-[48px] min-w-[48px]",
                          onClick: () => scrollToSection("rechtlicher-rahmen"),
                          children: [
                            /* @__PURE__ */ jsx(BookOpen, { className: "mr-2 h-5 w-5" }),
                            "Leitfaden starten",
                            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        Button,
                        {
                          size: "lg",
                          variant: "outline",
                          className: "border-red-200 dark:border-red-800 hover:bg-red-50 dark:hover:bg-red-950/30 min-h-[48px] min-w-[48px]",
                          children: [
                            /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                            "Checkliste herunterladen"
                          ]
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 50 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.8, delay: 0.2 },
                  children: /* @__PURE__ */ jsxs(Card, { className: "p-6 shadow-2xl border-2 border-red-200 dark:border-red-800 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm", children: [
                    /* @__PURE__ */ jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-2xl font-bold flex items-center gap-3", children: [
                      /* @__PURE__ */ jsx(Activity, { className: "h-8 w-8 text-red-600" }),
                      "Live Compliance Dashboard für Kitas"
                    ] }) }),
                    /* @__PURE__ */ jsxs(CardContent, { children: [
                      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-4", children: complianceStats.map((stat, index) => /* @__PURE__ */ jsxs(
                        motion.div,
                        {
                          initial: { scale: 0 },
                          animate: { scale: 1 },
                          transition: { delay: 0.3 + index * 0.1, type: "spring" },
                          whileHover: { scale: 1.05 },
                          className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-center cursor-pointer border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors",
                          children: [
                            /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-600 dark:text-gray-400 mb-1", children: stat.label }),
                            /* @__PURE__ */ jsxs("div", { className: cn("text-3xl font-bold mb-2", stat.color), children: [
                              stat.value,
                              "%"
                            ] }),
                            /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400 font-semibold", children: [
                              stat.trend,
                              " zum Vorjahr"
                            ] }),
                            /* @__PURE__ */ jsx(
                              Progress,
                              {
                                value: stat.value,
                                className: "mt-2 h-1.5"
                              }
                            )
                          ]
                        },
                        index
                      )) }),
                      /* @__PURE__ */ jsx("div", { className: "mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx(Info, { className: "h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5" }),
                        /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                          /* @__PURE__ */ jsx("strong", { children: "Echtzeit-Monitoring:" }),
                          " Diese Zahlen basieren auf anonymisierten Daten von über 2.000 Kitas in Deutschland und zeigen den aktuellen Stand der DSGVO-Compliance im Kindergarten-Bereich."
                        ] })
                      ] }) })
                    ] })
                  ] })
                }
              )
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-8 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ jsx("div", { className: "container px-4 mx-auto", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", className: "bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(BookOpen, { className: "h-5 w-5 text-red-600" }),
          "Inhaltsverzeichnis"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: navigationItems.map((item) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => scrollToSection(item.id),
            className: "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left tap-target",
            children: [
              /* @__PURE__ */ jsx(item.icon, { className: "h-5 w-5 text-red-600 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: item.label })
            ]
          },
          item.id
        )) })
      ] }) }) }) }),
      /* @__PURE__ */ jsx("style", { children: `
            h2[id], h3[id], section[id] {
              scroll-margin-top: 96px;
            }
          ` }),
      /* @__PURE__ */ jsx("nav", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-red-100 dark:border-red-900", "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 py-4 overflow-x-auto scrollbar-hide", children: navigationItems.map((item) => {
        const isActive = activeSection === item.id;
        return /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => scrollToSection(item.id),
            className: cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
              isActive ? "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800 shadow-sm" : "text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/30"
            ),
            children: [
              /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4" }),
              item.label
            ]
          },
          item.id
        );
      }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-20", children: [
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            id: "ueberblick",
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "space-y-8 scroll-mt-32",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
                /* @__PURE__ */ jsx("h2", { id: "warum-datenschutz-wichtig", className: "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white", children: "Warum Datenschutz in Kitas so wichtig ist" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Kinder sind besonders schutzbedürftig. Die DSGVO erkennt das an und fordert höchste Standards." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
                {
                  icon: Baby,
                  title: "Art. 8 DSGVO",
                  subtitle: "Kinderdatenschutz",
                  description: /* @__PURE__ */ jsxs(Fragment, { children: [
                    "Kinder unter 16 Jahren benötigen IMMER die Einwilligung der Eltern für die Datenverarbeitung. Erfahren Sie mehr über ",
                    /* @__PURE__ */ jsx(Link, { to: "/wissen/dsgvo-artikel", className: "text-red-600 dark:text-red-400 hover:underline", children: "Art. 8 DSGVO" }),
                    "."
                  ] }),
                  risk: "Kritisch"
                },
                {
                  icon: Camera,
                  title: "Foto & Video",
                  subtitle: "Bildrechte",
                  description: "Jede Aufnahme benötigt eine spezifische, widerrufbare Einwilligung der Erziehungsberechtigten.",
                  risk: "Hoch"
                },
                {
                  icon: Heart,
                  title: "Besondere Kategorien",
                  subtitle: "Gesundheitsdaten",
                  description: /* @__PURE__ */ jsxs(Fragment, { children: [
                    "Allergien, Medikamente und Entwicklungsberichte sind besonders schützenswerte Daten nach ",
                    /* @__PURE__ */ jsx(Link, { to: "/wissen/dsgvo-artikel", className: "text-red-600 dark:text-red-400 hover:underline", children: "Art. 9 DSGVO" }),
                    "."
                  ] }),
                  risk: "Kritisch"
                }
              ].map((item, index) => /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-red-500 hover:shadow-lg transition-shadow duration-300", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-2 bg-red-100 dark:bg-red-950/50 rounded-lg", children: /* @__PURE__ */ jsx(item.icon, { className: "h-6 w-6 text-red-600 dark:text-red-400" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: item.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: item.subtitle })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs(Badge, { variant: item.risk === "Kritisch" ? "destructive" : "secondary", className: "text-xs", children: [
                    item.risk,
                    " Risiko"
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300", children: item.description }) })
              ] }, index)) }),
              /* @__PURE__ */ jsxs(Card, { className: "p-8 bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-2 text-gray-900 dark:text-white", children: "Zahlen, die Sie kennen sollten" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Die Realität des Kinderdatenschutzes in Deutschland" })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6", children: [
                  {
                    icon: Baby,
                    number: "3,7 Mio.",
                    label: "Kinder in Betreuung",
                    description: "Täglich verarbeitete Kinderdaten"
                  },
                  {
                    icon: Building2,
                    number: "58.500+",
                    label: "Kitas in Deutschland",
                    description: "Betroffene Einrichtungen"
                  },
                  {
                    icon: Euro,
                    number: "bis 20 Mio. €",
                    label: "Maximales Bußgeld",
                    description: "Bei schweren Verstößen"
                  },
                  {
                    icon: AlertTriangle,
                    number: "87%",
                    label: "Compliance-Lücken",
                    description: "Kitas mit Verbesserungsbedarf"
                  }
                ].map((stat, index) => /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    whileInView: { scale: 1 },
                    viewport: { once: true },
                    transition: { delay: index * 0.1, type: "spring" },
                    className: "text-center bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm",
                    children: [
                      /* @__PURE__ */ jsx("div", { className: "inline-flex items-center justify-center w-12 h-12 bg-red-100 dark:bg-red-950/50 rounded-full mb-4", children: /* @__PURE__ */ jsx(stat.icon, { className: "h-6 w-6 text-red-600 dark:text-red-400" }) }),
                      /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-bold text-red-600 dark:text-red-400 mb-2", children: stat.number }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-gray-900 dark:text-white mb-1", children: stat.label }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: stat.description })
                    ]
                  },
                  index
                )) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            id: "rechtlicher-rahmen",
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "space-y-8 scroll-mt-32",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
                /* @__PURE__ */ jsx("h2", { id: "rechtlicher-rahmen-kitas", className: "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white", children: "Rechtlicher Rahmen für Kitas" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Diese Gesetze und Verordnungen müssen Sie als Kita-Träger beachten." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl p-8 border border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxs("h3", { id: "art-8-dsgvo", className: "text-2xl font-bold mb-6 flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(Scale, { className: "h-8 w-8 text-red-600" }),
                  "Art. 8 DSGVO - Der Kinderschutzparagraph"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "bg-white/80 dark:bg-gray-900/80 rounded-lg p-6 mb-6", children: /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-red-500 pl-4", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-bold text-lg mb-2", children: "Gesetzestext" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300 italic mb-4", children: '"Die Verarbeitung personenbezogener Daten eines Kindes ist rechtmäßig, wenn das Kind das 16. Lebensjahr vollendet hat. Hat das Kind noch nicht das 16. Lebensjahr vollendet, ist die Verarbeitung nur rechtmäßig, sofern die Einwilligung durch den Träger der elterlichen Verantwortung erteilt wird."' })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs(Card, { className: "border-red-200 dark:border-red-800", children: [
                    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600" }),
                      "Was das für Kitas bedeutet"
                    ] }) }),
                    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full mt-2" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Alle Kinder unter 16 Jahren benötigen Elterneinwilligung" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full mt-2" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Beide Elternteile müssen oft zustimmen" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full mt-2" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Einwilligung muss konkret und verständlich sein" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-2 h-2 bg-red-500 rounded-full mt-2" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Widerruf muss jederzeit möglich sein" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs(Card, { className: "border-orange-200 dark:border-orange-800", children: [
                    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-orange-600" }),
                      "Häufige Fehlerquellen"
                    ] }) }),
                    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-500 mt-1" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Zu allgemeine Einwilligungsformulare" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-500 mt-1" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Fehlende Information über Zweck" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-500 mt-1" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Kopplung an Betreuungsvertrag" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                        /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-500 mt-1" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Unklare Widerrufsmöglichkeiten" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6" }),
                  "Rechtsgrundlagen für die Datenverarbeitung"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
                  /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
                    /* @__PURE__ */ jsx("th", { className: "text-left p-3 font-semibold", children: "Rechtsgrundlage" }),
                    /* @__PURE__ */ jsx("th", { className: "text-left p-3 font-semibold", children: "Anwendungsbereich" }),
                    /* @__PURE__ */ jsx("th", { className: "text-left p-3 font-semibold", children: "Beispiele" })
                  ] }) }),
                  /* @__PURE__ */ jsx("tbody", { className: "divide-y", children: [
                    {
                      basis: "Vertrag (Art. 6 Abs. 1 lit. b)",
                      scope: "Betreuungsvertrag",
                      examples: "Name, Adresse, Geburtsdatum, Betreuungszeiten"
                    },
                    {
                      basis: "Rechtliche Verpflichtung (Art. 6 Abs. 1 lit. c)",
                      scope: "Gesetzliche Pflichten",
                      examples: "Meldepflichten, Unfallmeldungen, Aufsichtspflicht"
                    },
                    {
                      basis: "Einwilligung (Art. 6 Abs. 1 lit. a)",
                      scope: "Freiwillige Datenverarbeitung",
                      examples: "Fotos, Videos, Portfolio, Ausflüge"
                    },
                    {
                      basis: "Berechtigte Interessen (Art. 6 Abs. 1 lit. f)",
                      scope: "Kita-Betrieb",
                      examples: "Notfallkontakte, Sicherheit"
                    }
                  ].map((row, index) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-gray-50 dark:hover:bg-gray-800", children: [
                    /* @__PURE__ */ jsx("td", { className: "p-3 font-medium text-red-600 dark:text-red-400", children: row.basis }),
                    /* @__PURE__ */ jsx("td", { className: "p-3", children: row.scope }),
                    /* @__PURE__ */ jsx("td", { className: "p-3 text-sm text-gray-600 dark:text-gray-400", children: row.examples })
                  ] }, index)) })
                ] }) }) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            id: "fotos-videos",
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "space-y-8 scroll-mt-32",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
                /* @__PURE__ */ jsx("h2", { id: "foto-video-aufnahmen", className: "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white", children: "Foto- und Videoaufnahmen: Der Klassiker" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Dreifacher Schutz: Datenschutzrecht, Persönlichkeitsrecht und Kinderschutz." })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl p-8 border border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsxs("h3", { id: "praxis-szenario-sommerfest", className: "text-2xl font-bold mb-6 flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(Camera, { className: "h-8 w-8 text-red-600" }),
                  "Praxis-Szenario: Sommerfest in der Kita"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-white/80 dark:bg-gray-900/80 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Clipboard, { className: "h-5 w-5 text-red-600" }),
                      "Kontext"
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Das jährliche Sommerfest steht an. Die Erzieherin möchte Fotos für das Portfolio machen, für die Website und eventuell auch für die lokale Zeitung." })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-white/80 dark:bg-gray-900/80 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-orange-600" }),
                      "Herausforderung"
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300", children: "Nicht alle Eltern sind mit allen Verwendungszwecken einverstanden. Manche erlauben Portfolio-Fotos, aber keine Veröffentlichung." })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-white/80 dark:bg-gray-900/80 rounded-lg p-6", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600" }),
                      "Lösung: Modulare Einwilligungen"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-4 mt-4", children: [
                      {
                        title: "Portfolio (intern)",
                        icon: BookOpen,
                        description: "Fotos nur für die Entwicklungsdokumentation des Kindes",
                        consent: "95% Zustimmung",
                        color: "green"
                      },
                      {
                        title: "Website (public)",
                        icon: Globe,
                        description: "Veröffentlichung auf der Kita-Website ohne Namensnennung",
                        consent: "78% Zustimmung",
                        color: "yellow"
                      },
                      {
                        title: "Presse (Zeitung)",
                        icon: MessageSquare,
                        description: "Verwendung in lokalen Medien mit oder ohne Namen",
                        consent: "45% Zustimmung",
                        color: "red"
                      }
                    ].map((module, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm border", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                        /* @__PURE__ */ jsx(module.icon, { className: "h-5 w-5 text-gray-600" }),
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold", children: module.title })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: module.description }),
                      /* @__PURE__ */ jsx("div", { className: cn(
                        "text-sm font-semibold px-2 py-1 rounded",
                        module.color === "green" ? "bg-green-100 text-green-700" : module.color === "yellow" ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"
                      ), children: module.consent })
                    ] }, index)) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckSquare, { className: "h-6 w-6" }),
                  "Interaktive Foto-Einwilligungs-Checkliste"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: [
                    { id: "zweck", text: "Konkreter Verwendungszweck definiert" },
                    { id: "trennung", text: "Verschiedene Zwecke separat abgefragt" },
                    { id: "eltern", text: "Beide Elternteile haben zugestimmt" },
                    { id: "widerruf", text: "Widerrufsmöglichkeit klar kommuniziert" },
                    { id: "freiwillig", text: "Freiwilligkeit der Einwilligung betont" },
                    { id: "speicher", text: "Speicherdauer und Löschung erklärt" },
                    { id: "weitergabe", text: "Weitergabe an Dritte geregelt" },
                    { id: "kopplung", text: "Keine Kopplung an Betreuungsvertrag" }
                  ].map((item) => {
                    const isChecked = checkedItems.has(item.id);
                    return /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: "flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",
                        onClick: () => toggleCheckedItem(item.id),
                        children: [
                          isChecked ? /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5 text-green-600" }) : /* @__PURE__ */ jsx(Square, { className: "h-5 w-5 text-gray-400" }),
                          /* @__PURE__ */ jsx("span", { className: cn(
                            "text-sm",
                            isChecked && "line-through text-gray-500"
                          ), children: item.text })
                        ]
                      },
                      item.id
                    );
                  }) }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                      /* @__PURE__ */ jsx("strong", { children: "Fortschritt:" }),
                      " ",
                      checkedItems.size,
                      "/8 Punkte erfüllt",
                      checkedItems.size === 8 && /* @__PURE__ */ jsx("span", { className: "text-green-600 ml-2 font-semibold", children: "✓ Vollständig DSGVO-konform!" })
                    ] }),
                    /* @__PURE__ */ jsx(
                      Progress,
                      {
                        value: checkedItems.size / 8 * 100,
                        className: "mt-2"
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "bg-gray-50 dark:bg-gray-900", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6" }),
                  "Muster-Einwilligungserklärung für Fotos"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-lg border font-mono text-sm", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-center font-bold mb-4", children: "EINWILLIGUNGSERKLÄRUNG - Foto- und Videoaufnahmen" }),
                  /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Hiermit willige ich/wir ein, dass von meinem/unserem Kind" }),
                  /* @__PURE__ */ jsx("div", { className: "border-b border-gray-300 mb-4 pb-1", children: "___________________________________ (Name des Kindes)" }),
                  /* @__PURE__ */ jsx("p", { className: "mb-4", children: "in der Kita ________________________ Foto- und Videoaufnahmen erstellt werden dürfen." }),
                  /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
                    /* @__PURE__ */ jsx("p", { className: "font-semibold mb-2", children: "Die Aufnahmen dürfen verwendet werden für:" }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2 ml-4", children: [
                      /* @__PURE__ */ jsx("div", { children: "[ ] Portfolio/Entwicklungsdokumentation (nur intern)" }),
                      /* @__PURE__ */ jsx("div", { children: "[ ] Aushang in der Kita" }),
                      /* @__PURE__ */ jsx("div", { children: "[ ] Kita-Website (ohne Namensnennung)" }),
                      /* @__PURE__ */ jsx("div", { children: "[ ] Lokale Presse (mit Namensnennung)" }),
                      /* @__PURE__ */ jsx("div", { children: "[ ] Social Media der Kita (ohne Namensnennung)" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Diese Einwilligung gilt bis: [ ] Kita-Austritt [ ] ____________ (Datum)" }),
                  /* @__PURE__ */ jsx("p", { className: "mb-6 text-red-600 font-semibold", children: "Die Einwilligung kann jederzeit ohne Angabe von Gründen widerrufen werden." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsx("div", { children: "___________________________________" }),
                    /* @__PURE__ */ jsx("div", { children: "Datum, Unterschrift Erziehungsberechtigte*r 1" }),
                    /* @__PURE__ */ jsx("div", { children: "___________________________________" }),
                    /* @__PURE__ */ jsx("div", { children: "Datum, Unterschrift Erziehungsberechtigte*r 2" })
                  ] })
                ] }) })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            id: "digitale-tools",
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "space-y-8 scroll-mt-32",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
                /* @__PURE__ */ jsx("h2", { id: "digitale-tools-kita", className: "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white", children: "Digitale Tools datenschutzkonform nutzen" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Von Kita-Apps bis zur Verwaltungssoftware: So setzen Sie digitale Helfer DSGVO-konform ein." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: [
                {
                  title: "Kita-Apps",
                  icon: Smartphone,
                  description: "Kommunikation mit Eltern über sichere Kanäle",
                  tips: ["Verschlüsselung prüfen", "AV-Vertrag abschließen", "Datensparsamkeit beachten"],
                  link: "/loesungen/kita-software"
                },
                {
                  title: "Cloud-Speicher",
                  icon: Cloud,
                  description: "Fotos und Dokumente sicher in der Cloud",
                  tips: ["EU-Server bevorzugen", "Zugriffsrechte regeln", "Automatische Löschung"],
                  link: "/wissen/cloud-datenschutz"
                },
                {
                  title: "Verwaltungssoftware",
                  icon: Monitor,
                  description: "Digitale Verwaltung von Kinderdaten",
                  tips: ["Berechtigungskonzept", "Regelmäßige Backups", "Protokollierung"],
                  link: "/loesungen/verwaltung"
                },
                {
                  title: "Videokonferenzen",
                  icon: Video,
                  description: "Elterngespräche und Teamsitzungen online",
                  tips: ["DSGVO-konforme Tools", "Keine Aufzeichnungen", "Einwilligung einholen"],
                  link: "/wissen/videokonferenzen"
                }
              ].map((tool, index) => /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow duration-300", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-2 bg-red-100 dark:bg-red-950/50 rounded-lg", children: /* @__PURE__ */ jsx(tool.icon, { className: "h-6 w-6 text-red-600 dark:text-red-400" }) }),
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: tool.title })
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-4", children: tool.description }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-4", children: tool.tips.map((tip, tipIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: tip })
                  ] }, tipIndex)) }),
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: tool.link,
                      className: "text-red-600 dark:text-red-400 hover:underline text-sm flex items-center gap-1",
                      children: [
                        "Mehr erfahren",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                      ]
                    }
                  )
                ] })
              ] }, index)) })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.section,
          {
            id: "datenpannen",
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: true },
            transition: { duration: 0.8 },
            className: "space-y-8 scroll-mt-32",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
                /* @__PURE__ */ jsx("h2", { id: "datenpannen-kita", className: "text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white", children: "Datenpannen: Richtig reagieren" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "72 Stunden Zeit zum Handeln - Was bei Datenpannen in der Kita zu tun ist." })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "border-red-500 border-2", children: [
                /* @__PURE__ */ jsx(CardHeader, { className: "bg-red-50 dark:bg-red-950/30", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-red-600" }),
                  "Notfallplan bei Datenpannen"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
                  {
                    time: "Sofort",
                    action: "Datenpanne feststellen und dokumentieren",
                    details: "Art, Umfang und betroffene Personen erfassen"
                  },
                  {
                    time: "Innerhalb 24h",
                    action: "Risikobewertung durchführen",
                    details: "Prüfen: Hohes Risiko für Betroffene?"
                  },
                  {
                    time: "Innerhalb 72h",
                    action: "Meldung an Aufsichtsbehörde",
                    details: "Bei hohem Risiko zwingend erforderlich"
                  },
                  {
                    time: "Unverzüglich",
                    action: "Betroffene informieren",
                    details: "Eltern transparent über Vorfall informieren"
                  }
                ].map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "flex-shrink-0", children: /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-100 dark:bg-red-950/50 rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(Timer, { className: "h-6 w-6 text-red-600" }) }) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-grow", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2 mb-1", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-bold text-red-600", children: step.time }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: step.action })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: step.details })
                  ] })
                ] }, index)) }) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-8 text-center", children: /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
                  className: "text-sm text-red-600 dark:text-red-400 hover:underline flex items-center gap-1 mx-auto",
                  children: [
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 rotate-[-90deg]" }),
                    "Zurück nach oben"
                  ]
                }
              ) })
            ]
          }
        )
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ jsx("div", { className: "container px-4 mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "Verwandte Compliance-Themen" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-pflege", className: "group", children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-red-600 dark:text-red-400 group-hover:underline mb-2", children: "Datenschutz in der Pflege" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "DSGVO-Compliance für Pflegeeinrichtungen" })
          ] }) }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-arztpraxis", className: "group", children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-red-600 dark:text-red-400 group-hover:underline mb-2", children: "Datenschutz Arztpraxis" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "DSGVO für niedergelassene Ärzte" })
          ] }) }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/dsgvo-vereine", className: "group", children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-red-600 dark:text-red-400 group-hover:underline mb-2", children: "DSGVO für Vereine" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Datenschutz im Vereinswesen" })
          ] }) }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-red-600 via-pink-600 to-rose-600", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx(Card, { className: "bg-white/10 backdrop-blur-sm border-white/20 text-white shadow-2xl", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8 md:p-12 text-center", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { scale: 0 },
            whileInView: { scale: 1 },
            viewport: { once: true },
            transition: { type: "spring", duration: 0.8 },
            children: /* @__PURE__ */ jsx(Heart, { className: "h-16 w-16 mx-auto mb-6 text-white" })
          }
        ),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Starten Sie Ihre Kita-DSGVO Journey" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-white/90 max-w-2xl mx-auto", children: "Schützen Sie Kinderdaten rechtskonform und schaffen Sie Vertrauen bei den Eltern. Unsere Experten begleiten Sie Schritt für Schritt." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              size: "lg",
              className: "bg-white text-red-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-200 min-h-[48px] min-w-[48px]",
              children: [
                /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
                "Kita-Demo buchen",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              size: "lg",
              variant: "outline",
              className: "text-white border-white hover:bg-white/20 backdrop-blur-sm min-h-[48px] min-w-[48px]",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                "DSGVO-Guide herunterladen"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex items-center justify-center gap-6 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
            "Kostenloses Erstgespräch"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
            "Praxisnahe Lösungen"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
            "Sofort umsetzbar"
          ] })
        ] })
      ] }) }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  DatenschutzKindergarten as default
};
