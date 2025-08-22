import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Zap, CheckCircle2, ArrowRight, ExternalLink, Monitor, FileText, Shield, Activity, Database, Network, Users, Code, Lightbulb, AlertTriangle, Smartphone, Lock, ChevronDown, Radio, Eye, Settings, Download, Clock, Target, Cpu, Building, TrendingUp, Heart, BookOpen, ChevronRight, ChevronUp } from "lucide-react";
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
function SmartGridComplianceGuide() {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeSection, setActiveSection] = useState("ueberblick");
  const [showBackToTop, setShowBackToTop] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const navigationItems = [
    { id: "ueberblick", label: "Überblick", icon: Shield, href: "#smart-grid-datenschutz-ueberblick" },
    { id: "smart-meter", label: "Smart Meter", icon: Activity, href: "#smart-meter-datenschutz-dsgvo" },
    { id: "energiedaten", label: "Energiedaten", icon: Database, href: "#energiedaten-management-compliance" },
    { id: "netzinfrastruktur", label: "Netzinfrastruktur", icon: Network, href: "#netzinfrastruktur-cyber-security" },
    { id: "verbraucherschutz", label: "Verbraucherschutz", icon: Users, href: "#verbraucherschutz-transparenz-dsgvo" },
    { id: "implementation", label: "Umsetzung", icon: Code, href: "#praktische-umsetzung-smart-grid" }
  ];
  const complianceStats = [
    { label: "Smart Meter DSGVO", value: 95, color: "text-blue-600", trend: "+8%" },
    { label: "Energiedaten-Schutz", value: 88, color: "text-teal-600", trend: "+12%" },
    { label: "Netz-Sicherheit", value: 92, color: "text-green-600", trend: "+5%" },
    { label: "Verbraucher-Privacy", value: 85, color: "text-orange-600", trend: "+15%" },
    { label: "Regulatorische Compliance", value: 90, color: "text-purple-600", trend: "+7%" },
    { label: "Cyber-Resilience", value: 87, color: "text-red-600", trend: "+10%" }
  ];
  const smartGridFrameworks = [
    {
      name: "DSGVO für Smart Grid",
      category: "Data Protection",
      requirements: [
        "Energieverbrauchsdaten anonymisieren",
        "Einwilligungsmanagement für Smart Meter",
        "Recht auf Datenportabilität gewährleisten",
        "Privacy-by-Design implementieren"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "BSI TR-03109",
      category: "IT Security",
      requirements: [
        "Sichere Smart Meter Gateway Kommunikation",
        "Ende-zu-Ende Verschlüsselung",
        "Authentifizierung und Autorisierung",
        "Regelmäßige Sicherheitsupdates"
      ],
      color: "bg-teal-50 border-teal-200"
    },
    {
      name: "MsbG (Messstellenbetriebsgesetz)",
      category: "Energy Law",
      requirements: [
        "Intelligente Messsysteme rechtskonform betreiben",
        "Datenschutz bei Messdatenübertragung",
        "Verbraucherrechte beim Smart Metering",
        "Technische Mindestanforderungen erfüllen"
      ],
      color: "bg-green-50 border-green-200"
    }
  ];
  const smartGridChallenges = [
    {
      category: "Smart Meter Privacy",
      icon: Activity,
      challenges: [
        "Hochfrequente Verbrauchsdaten ermöglichen Rückschlüsse auf Lebensgewohnheiten",
        "Anonymisierung bei kontinuierlicher Datensammlung schwierig",
        "Balance zwischen Datenschutz und Netzbetrieb finden",
        "Einwilligungsmanagement bei automatisierten Systemen"
      ]
    },
    {
      category: "Energiedaten-Sicherheit",
      icon: Database,
      challenges: [
        "Schutz vor Cyber-Angriffen auf kritische Infrastruktur",
        "Sichere Übertragung von Millionen von Datenpunkten täglich",
        "Langzeitspeicherung von Energiedaten rechtskonform gestalten",
        "Zugriffskontrolle für verschiedene Stakeholder (Netzbetreiber, Energieversorger, Kunden)"
      ]
    },
    {
      category: "Regulatorische Komplexität",
      icon: FileText,
      challenges: [
        "Verschiedene Gesetze (DSGVO, MsbG, EnWG) harmonisieren",
        "Compliance in föderaler Struktur mit Länderregelungen",
        "Internationale Standards mit nationalen Vorschriften abstimmen",
        "Regelmäßige Anpassungen an neue Technologien"
      ]
    }
  ];
  const implementationPhases = [
    {
      phase: "Assessment & Planning",
      duration: "2-3 Monate",
      color: "bg-blue-100 text-blue-800",
      tasks: [
        "Datenschutz-Folgenabschätzung für Smart Grid",
        "Technische Infrastruktur bewerten",
        "Rechtliche Anforderungen kartieren",
        "Stakeholder-Analyse durchführen"
      ],
      deliverables: ["DSFA-Bericht", "Compliance-Roadmap", "Risikoanalyse"]
    },
    {
      phase: "Technical Implementation",
      duration: "4-6 Monate",
      color: "bg-teal-100 text-teal-800",
      tasks: [
        "Smart Meter Gateway sicher konfigurieren",
        "Verschlüsselung und Authentifizierung implementieren",
        "Datenminimierungsstrategien umsetzen",
        "Privacy-Dashboard entwickeln"
      ],
      deliverables: ["Sichere Infrastruktur", "Privacy-Controls", "Monitoring-System"]
    },
    {
      phase: "Privacy Controls",
      duration: "2-3 Monate",
      color: "bg-green-100 text-green-800",
      tasks: [
        "Einwilligungsmanagement-System",
        "Betroffenenrechte automatisieren",
        "Datenschutz-Cockpit für Verbraucher",
        "Compliance-Monitoring einrichten"
      ],
      deliverables: ["Privacy-Management", "Verbraucher-Portal", "Audit-System"]
    },
    {
      phase: "Compliance & Optimization",
      duration: "1-2 Monate",
      color: "bg-purple-100 text-purple-800",
      tasks: [
        "Regulatorische Prüfungen durchführen",
        "Penetrationstests und Sicherheitsaudits",
        "Mitarbeiterschulungen",
        "Kontinuierliche Verbesserung etablieren"
      ],
      deliverables: ["Compliance-Zertifikat", "Sicherheitsnachweis", "Schulungskonzept"]
    }
  ];
  useEffect(() => {
    const handleScroll = () => {
      const sections = navigationItems.map((item) => document.getElementById(item.id));
      const scrollPos = window.scrollY + 100;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navigationItems[i].id);
          break;
        }
      }
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-blue-50 to-teal-50", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Smart Grid Datenschutz – Compliance für Energienetze" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Umfassender Leitfaden für Smart Grid Datenschutz. Smart Meter DSGVO-konform einsetzen, Energiedaten schützen & Cyber-Security für kritische Infrastruktur." }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://datenschutz-assistent.de/wissen/branchen/smart-grid-compliance" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative py-20 md:py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-blue-600/5 to-teal-600/5" }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl",
            animate: {
              x: [0, 30, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1]
            },
            transition: { duration: 8, repeat: Infinity }
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl",
            animate: {
              x: [0, -30, 0],
              y: [0, 30, 0],
              scale: [1, 1.2, 1]
            },
            transition: { duration: 10, repeat: Infinity }
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          style: { y, opacity },
          className: "container relative px-4 mx-auto",
          children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6 },
                  children: [
                    /* @__PURE__ */ jsxs(Badge, { className: "mb-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white border-0", children: [
                      /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 mr-2" }),
                      "Smart Grid Compliance"
                    ] }),
                    /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 leading-tight", children: [
                      "Datenschutz im",
                      " ",
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent", children: "Smart Grid" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 leading-relaxed", children: "Intelligente Stromnetze revolutionieren die Energiewirtschaft. Erfahren Sie, wie Sie Smart Grid-Technologien DSGVO-konform implementieren und dabei Verbraucherdaten optimal schützen." })
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.2 },
                  className: "space-y-4",
                  children: [
                    "Smart Meter Privacy-by-Design implementieren",
                    "Energiedaten rechtssicher verarbeiten",
                    "Cyber-Sicherheit für kritische Infrastruktur"
                  ].map((feature, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-green-600 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: feature })
                  ] }, index))
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0 },
                  transition: { duration: 0.6, delay: 0.4 },
                  className: "flex flex-col sm:flex-row gap-4",
                  children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        size: "lg",
                        className: "bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700",
                        asChild: true,
                        children: /* @__PURE__ */ jsxs("a", { href: "#smart-grid-datenschutz-ueberblick", onClick: (e) => {
                          e.preventDefault();
                          const element = document.getElementById("ueberblick");
                          if (element) {
                            const yOffset = -100;
                            const y2 = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                            window.scrollTo({ top: y2, behavior: "smooth" });
                          }
                        }, children: [
                          "Guide starten",
                          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        size: "lg",
                        variant: "outline",
                        className: "border-gray-300",
                        asChild: true,
                        children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/branchen", children: [
                          "Alle Branchen-Guides",
                          /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4 ml-2" })
                        ] })
                      }
                    )
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, x: 30 },
                animate: { opacity: 1, x: 0 },
                transition: { duration: 0.8, delay: 0.2 },
                className: "relative",
                children: /* @__PURE__ */ jsxs(Card, { className: "p-6 bg-white/80 backdrop-blur-sm border-gray-200", children: [
                  /* @__PURE__ */ jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center text-lg", children: [
                    /* @__PURE__ */ jsx(Monitor, { className: "w-5 h-5 mr-2 text-blue-600" }),
                    "Smart Grid Compliance Dashboard"
                  ] }) }),
                  /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: complianceStats.map((stat, index) => /* @__PURE__ */ jsxs(
                    motion.div,
                    {
                      initial: { opacity: 0, x: 20 },
                      animate: { opacity: 1, x: 0 },
                      transition: { duration: 0.5, delay: 0.3 + index * 0.1 },
                      className: "space-y-2",
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700", children: stat.label }),
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                            /* @__PURE__ */ jsxs("span", { className: `text-sm font-semibold ${stat.color}`, children: [
                              stat.value,
                              "%"
                            ] }),
                            /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs px-2 py-0.5", children: stat.trend })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx(Progress, { value: stat.value, className: "h-2" })
                      ]
                    },
                    stat.label
                  )) })
                ] })
              }
            )
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-12 bg-white", children: /* @__PURE__ */ jsx("div", { className: "container px-4 mx-auto", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-gray-600" }),
        "Inhaltsverzeichnis"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsx("ul", { className: "grid md:grid-cols-2 gap-3", children: navigationItems.map((item) => {
        const Icon = item.icon;
        return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: (e) => {
              e.preventDefault();
              const element = document.getElementById(item.id);
              if (element) {
                const yOffset = -100;
                const y2 = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({ top: y2, behavior: "smooth" });
              }
            },
            className: "text-left w-full px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-3 group",
            children: [
              /* @__PURE__ */ jsx(Icon, { className: "h-5 w-5 text-gray-500 group-hover:text-blue-600" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 group-hover:text-gray-900", children: item.label })
            ]
          }
        ) }, item.id);
      }) }) }) })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-white border-b border-gray-200 shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "container px-4 mx-auto", children: /* @__PURE__ */ jsx("nav", { className: "flex space-x-8 overflow-x-auto", children: navigationItems.map((item) => {
      const Icon = item.icon;
      return /* @__PURE__ */ jsxs(
        "a",
        {
          href: item.href,
          onClick: (e) => {
            e.preventDefault();
            const element = document.getElementById(item.id);
            if (element) {
              const yOffset = -100;
              const y2 = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y2, behavior: "smooth" });
            }
          },
          className: cn(
            "flex items-center space-x-2 py-4 text-sm font-medium whitespace-nowrap transition-colors border-b-2",
            activeSection === item.id ? "text-blue-600 border-blue-600" : "text-gray-600 border-transparent hover:text-gray-900"
          ),
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsx("span", { children: item.label })
          ]
        },
        item.id
      );
    }) }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "container px-4 mx-auto py-16 space-y-16", children: [
      /* @__PURE__ */ jsxs("section", { id: "ueberblick", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
        /* @__PURE__ */ jsx("div", { id: "smart-grid-datenschutz-ueberblick", className: "absolute -top-32" }),
        /* @__PURE__ */ jsxs(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "text-3xl font-bold text-center",
            children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 inline-block mr-3 text-blue-600" }),
              "Smart Grid Datenschutz Überblick"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(Lightbulb, { className: "w-5 h-5 mr-2 text-yellow-600" }),
                  "Was ist ein Smart Grid?"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Smart Grids sind intelligente Stromnetze, die durch digitale Kommunikationstechnologie die Erzeugung, Verteilung und den Verbrauch von Elektrizität optimieren. Sie ermöglichen eine bidirektionale Kommunikation zwischen Energieversorgern und Verbrauchern." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: "Kernkomponenten:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-gray-600", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 mr-2 text-green-600" }),
                        "Smart Meter (intelligente Stromzähler)"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 mr-2 text-green-600" }),
                        "Smart Meter Gateway (Kommunikationseinheit)"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 mr-2 text-green-600" }),
                        "Netzsteuerungs- und Managementsysteme"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 mr-2 text-green-600" }),
                        "Energiemanagementsysteme beim Verbraucher"
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.2 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5 mr-2 text-orange-600" }),
                  "Datenschutz-Herausforderungen"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Smart Grids sammeln detaillierte Energieverbrauchsdaten, die Rückschlüsse auf Lebensgewohnheiten, Anwesenheit und sogar verwendete Geräte ermöglichen. Dies erfordert besondere Datenschutzmaßnahmen." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: "Kritische Bereiche:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-gray-600", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 mr-2 text-orange-600" }),
                        "Hochfrequente Verbrauchsdatenerfassung"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 mr-2 text-orange-600" }),
                        "Profilbildung und Verhaltensmuster"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 mr-2 text-orange-600" }),
                        "Datenweitergabe an Dritte"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 mr-2 text-orange-600" }),
                        "Langzeitspeicherung von Energiedaten"
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.3 },
            children: /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 mr-2 text-purple-600" }),
                "Rechtliche Rahmenbedingungen"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: smartGridFrameworks.map((framework, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: index * 0.1 },
                  className: cn("p-4 rounded-lg border", framework.color),
                  children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 mb-2", children: framework.name }),
                    /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "mb-3 text-xs", children: framework.category }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-sm text-gray-600", children: framework.requirements.map((req, reqIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 mr-2 mt-0.5 text-green-600 flex-shrink-0" }),
                      req
                    ] }, reqIndex)) })
                  ]
                },
                framework.name
              )) }) })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "smart-meter", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
        /* @__PURE__ */ jsx("div", { id: "smart-meter-datenschutz-dsgvo", className: "absolute -top-32" }),
        /* @__PURE__ */ jsxs(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "text-3xl font-bold text-center",
            children: [
              /* @__PURE__ */ jsx(Activity, { className: "w-8 h-8 inline-block mr-3 text-teal-600" }),
              "Smart Meter Datenschutz"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(Smartphone, { className: "w-5 h-5 mr-2 text-blue-600" }),
                  "Smart Meter Funktionsweise"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Smart Meter erfassen Energieverbrauchsdaten in kurzen Intervallen (15 Minuten bis Echtzeit) und übertragen diese über das Smart Meter Gateway an autorisierte Marktteilnehmer." }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Datenerfassung & -übertragung" }),
                    /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `Messintervall: 15 Min → 1 Stunde → 1 Tag
Datenvolumen: ~35.000 Datenpunkte/Jahr/Haushalt
Übertragung: verschlüsselt über Smart Meter Gateway
Empfänger: Netzbetreiber, Messstellenbetreiber, 
          Energielieferant (mit Einwilligung)` })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: "Übertragene Daten:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-gray-600", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Energieverbrauch (kWh) in definierten Intervallen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Zeitstempel der Messung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Zählerstand und Geräte-ID" }),
                      /* @__PURE__ */ jsx("li", { children: "• Status- und Diagnosedaten" })
                    ] })
                  ] })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.2 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(Lock, { className: "w-5 h-5 mr-2 text-green-600" }),
                  "Privacy-by-Design Ansätze"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Implementierung von Datenschutzmaßnahmen bereits in der Systemarchitektur, um Privatsphäre von Beginn an zu gewährleisten." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                      /* @__PURE__ */ jsx(Badge, { className: "bg-blue-100 text-blue-800 mt-1", children: "1" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium", children: "Datenminimierung" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Nur notwendige Daten erfassen und übertragen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                      /* @__PURE__ */ jsx(Badge, { className: "bg-teal-100 text-teal-800 mt-1", children: "2" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium", children: "Pseudonymisierung" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Verbrauchsdaten von Identitäten trennen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-800 mt-1", children: "3" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium", children: "Verschlüsselung" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Ende-zu-Ende Verschlüsselung der Datenübertragung" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                      /* @__PURE__ */ jsx(Badge, { className: "bg-purple-100 text-purple-800 mt-1", children: "4" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium", children: "Zugriffskontrolle" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Granulare Berechtigungen für Datennutzung" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.3 },
            children: /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 mr-2 text-orange-600" }),
                  "Einwilligungsmanagement für Smart Meter"
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: () => setExpandedSection(expandedSection === "consent" ? null : "consent"),
                    children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                      "w-4 h-4 transition-transform",
                      expandedSection === "consent" && "rotate-180"
                    ) })
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Verbraucher müssen transparente Kontrolle über ihre Energiedaten haben. Ein effektives Einwilligungsmanagement ist Grundlage für DSGVO-konforme Smart Meter Implementierung." }),
                expandedSection === "consent" && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    transition: { duration: 0.3 },
                    className: "space-y-4",
                    children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: "Einwilligungsebenen" }),
                        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-50 rounded-lg border border-green-200", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-800", children: "Basis-Datenübertragung" }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700", children: "Gesetzlich erforderlich für Abrechnung" }),
                            /* @__PURE__ */ jsx(Badge, { className: "mt-1 bg-green-600 text-white text-xs", children: "Obligatorisch" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 rounded-lg border border-blue-200", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-800", children: "Erweiterte Analytics" }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700", children: "Verbrauchsoptimierung und Prognosen" }),
                            /* @__PURE__ */ jsx(Badge, { className: "mt-1 bg-blue-600 text-white text-xs", children: "Optional" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-medium text-purple-800", children: "Drittanbieter-Services" }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700", children: "Energiemanagement-Apps und Services" }),
                            /* @__PURE__ */ jsx(Badge, { className: "mt-1 bg-purple-600 text-white text-xs", children: "Opt-in" })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: "Technische Implementierung" }),
                        /* @__PURE__ */ jsx("div", { className: "bg-gray-50 p-4 rounded-lg", children: /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// Consent Management API
interface SmartMeterConsent {
  customerId: string;
  meterGatewayId: string;
  consentLevels: {
    basicData: boolean;        // mandatory
    analytics: boolean;        // optional
    thirdParty: boolean[];     // granular
  };
  dataRetention: number;       // months
  withdrawalDate?: Date;
}

// Granulare Datenfreigabe
const consentConfig = {
  interval: '15min' | 'hourly' | 'daily',
  recipients: ['netzbetreiber', 'mssb', 'lieferant'],
  purposes: ['abrechnung', 'netzstabilität', 'prognose']
};` }) })
                      ] })
                    ] })
                  }
                )
              ] })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "energiedaten", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
        /* @__PURE__ */ jsx("div", { id: "energiedaten-management-compliance", className: "absolute -top-32" }),
        /* @__PURE__ */ jsxs(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "text-3xl font-bold text-center",
            children: [
              /* @__PURE__ */ jsx(Database, { className: "w-8 h-8 inline-block mr-3 text-green-600" }),
              "Energiedaten-Management"
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: smartGridChallenges.map((challenge, index) => {
          const Icon = challenge.icon;
          return /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              transition: { duration: 0.6, delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center text-lg", children: [
                  /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 mr-2 text-blue-600" }),
                  challenge.category
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: challenge.challenges.map((item, itemIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start space-x-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 mt-0.5 text-orange-500 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600", children: item })
                ] }, itemIndex)) }) })
              ] })
            },
            challenge.category
          );
        }) }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.4 },
            children: /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 mr-2 text-blue-600" }),
                  "Datenschutz-Architektur für Energiedaten"
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: () => setExpandedSection(expandedSection === "architecture" ? null : "architecture"),
                    children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                      "w-4 h-4 transition-transform",
                      expandedSection === "architecture" && "rotate-180"
                    ) })
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Eine sichhere Datenschutz-Architektur für Smart Grids trennt personenbezogene Daten von Energieverbrauchsdaten und implementiert Sicherheitsmaßnahmen auf allen Ebenen." }),
                expandedSection === "architecture" && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    transition: { duration: 0.3 },
                    className: "space-y-6",
                    children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: "Datenarchitektur-Ebenen" }),
                        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 rounded-lg border border-blue-200", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-800", children: "Device Layer" }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700", children: "Smart Meter, Sensoren, IoT-Geräte" }),
                            /* @__PURE__ */ jsx(Badge, { className: "mt-1 bg-blue-600 text-white text-xs", children: "Hardware-Verschlüsselung" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-teal-50 rounded-lg border border-teal-200", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-medium text-teal-800", children: "Gateway Layer" }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-teal-700", children: "Smart Meter Gateway, Protokoll-Translation" }),
                            /* @__PURE__ */ jsx(Badge, { className: "mt-1 bg-teal-600 text-white text-xs", children: "BSI TR-03109" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-50 rounded-lg border border-green-200", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-800", children: "Data Processing Layer" }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700", children: "Datenaufbereitung, Anonymisierung" }),
                            /* @__PURE__ */ jsx(Badge, { className: "mt-1 bg-green-600 text-white text-xs", children: "Privacy-Preserving" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
                            /* @__PURE__ */ jsx("h5", { className: "font-medium text-purple-800", children: "Application Layer" }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700", children: "Analytics, Dashboards, APIs" }),
                            /* @__PURE__ */ jsx(Badge, { className: "mt-1 bg-purple-600 text-white text-xs", children: "Zugriffskontrolle" })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: "Privacy-Preserving Technologies" }),
                        /* @__PURE__ */ jsx("div", { className: "bg-gray-50 p-4 rounded-lg", children: /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// Differential Privacy für Energiedaten
class EnergyDataPrivacy {
  addNoise(data: number[], epsilon: number): number[] {
    const noise = generateLaplaceNoise(epsilon);
    return data.map(value => value + noise);
  }
  
  // k-Anonymität für Verbrauchsgruppen
  anonymizeConsumption(groups: ConsumerGroup[]) {
    return groups.filter(group => group.size >= k)
                 .map(group => ({
                   ...group,
                   consumers: suppressQuasiIdentifiers(group.consumers)
                 }));
  }
  
  // Homomorphe Verschlüsselung für Aggregation
  aggregateEncrypted(encryptedValues: EncryptedValue[]): EncryptedSum {
    return encryptedValues.reduce((sum, value) => 
      homomorphicAdd(sum, value), 
      ENCRYPTED_ZERO
    );
  }
}` }) }),
                        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900", children: "Implementierte Technologien:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-gray-600", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Differential Privacy für statistische Analysen" }),
                            /* @__PURE__ */ jsx("li", { children: "• k-Anonymität für Gruppierungen" }),
                            /* @__PURE__ */ jsx("li", { children: "• Homomorphe Verschlüsselung für Aggregationen" }),
                            /* @__PURE__ */ jsx("li", { children: "• Secure Multi-Party Computation" })
                          ] })
                        ] })
                      ] })
                    ] })
                  }
                )
              ] })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "netzinfrastruktur", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
        /* @__PURE__ */ jsx("div", { id: "netzinfrastruktur-cyber-security", className: "absolute -top-32" }),
        /* @__PURE__ */ jsxs(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "text-3xl font-bold text-center",
            children: [
              /* @__PURE__ */ jsx(Network, { className: "w-8 h-8 inline-block mr-3 text-purple-600" }),
              "Netzinfrastruktur & Cyber-Security"
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(Radio, { className: "w-5 h-5 mr-2 text-purple-600" }),
                  "Kommunikationsinfrastruktur"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Smart Grid Kommunikation erfolgt über verschiedene Technologien und Protokolle. Jede Kommunikationsebene erfordert spezifische Sicherheitsmaßnahmen." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-blue-50 rounded-lg", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-800", children: "Wide Area Network (WAN)" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-600", children: "Netzbetreiber ↔ Smart Meter Gateway" })
                      ] }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-blue-600 text-white text-xs", children: "TLS 1.3" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-teal-50 rounded-lg", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-teal-800", children: "Local Metrological Network (LMN)" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-teal-600", children: "Gateway ↔ Smart Meter" })
                      ] }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-teal-600 text-white text-xs", children: "OMS" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-green-50 rounded-lg", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-800", children: "Home Area Network (HAN)" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-green-600", children: "Gateway ↔ Verbrauchergeräte" })
                      ] }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-600 text-white text-xs", children: "CLS" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Sicherheitsprotokolle" }),
                    /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `BSI TR-03109-1: Smart Meter Gateway Requirements
├── Public Key Infrastructure (PKI)
├── TLS 1.3 für WAN-Kommunikation
├── OMS-Standard für LMN
└── Controllable Local Systems (CLS) für HAN

Verschlüsselung:
- AES-256 für symmetrische Verschlüsselung
- RSA-4096/ECDSA für asymmetrische Verfahren
- SHA-256 für Hash-Funktionen` })
                  ] })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.2 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 mr-2 text-red-600" }),
                  "Cyber-Security Maßnahmen"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Smart Grids sind kritische Infrastruktur und damit attraktive Ziele für Cyber-Angriffe. Mehrschichtige Sicherheitskonzepte sind essentiell." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-50 rounded-lg border border-red-200", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-red-800", children: "Network Security" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs text-red-700 mt-1 space-y-0.5", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Netzwerksegmentierung und Firewalls" }),
                        /* @__PURE__ */ jsx("li", { children: "• Intrusion Detection/Prevention Systems" }),
                        /* @__PURE__ */ jsx("li", { children: "• VPN für sichere Fernzugriffe" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-orange-50 rounded-lg border border-orange-200", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-orange-800", children: "Device Security" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs text-orange-700 mt-1 space-y-0.5", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Hardware Security Module (HSM)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Secure Boot und Code Signing" }),
                        /* @__PURE__ */ jsx("li", { children: "• Over-the-Air Updates mit Signaturprüfung" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-yellow-50 rounded-lg border border-yellow-200", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-yellow-800", children: "Operational Security" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs text-yellow-700 mt-1 space-y-0.5", children: [
                        /* @__PURE__ */ jsx("li", { children: "• 24/7 Security Operations Center" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident Response Prozesse" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Penetrationstests" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Threat Monitoring" }),
                    /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// SIEM Integration für Smart Grid
const securityEvents = {
  anomalousConsumption: 'Ungewöhnliche Verbrauchsmuster',
  unauthorizedAccess: 'Unbefugte Gateway-Zugriffe',
  communicationFailure: 'Gestörte Kommunikation',
  firmwareManipulation: 'Firmware-Integritätsverletzung'
};

// Automated Response
if (threatLevel > CRITICAL) {
  isolateAffectedGateway();
  notifySecurityTeam();
  initiateIncidentResponse();
}` })
                  ] })
                ] })
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "verbraucherschutz", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
        /* @__PURE__ */ jsx("div", { id: "verbraucherschutz-transparenz-dsgvo", className: "absolute -top-32" }),
        /* @__PURE__ */ jsxs(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "text-3xl font-bold text-center",
            children: [
              /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 inline-block mr-3 text-orange-600" }),
              "Verbraucherschutz & Transparenz"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.1 },
            children: /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("span", { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5 mr-2 text-blue-600" }),
                  "Verbraucher-Dashboard & Transparenz"
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "sm",
                    onClick: () => setExpandedSection(expandedSection === "dashboard" ? null : "dashboard"),
                    children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                      "w-4 h-4 transition-transform",
                      expandedSection === "dashboard" && "rotate-180"
                    ) })
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Verbraucher haben das Recht auf transparente Information über die Verarbeitung ihrer Energiedaten. Ein benutzerfreundliches Dashboard schafft Vertrauen und Kontrolle." }),
                expandedSection === "dashboard" && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    transition: { duration: 0.3 },
                    className: "space-y-6",
                    children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: "Dashboard-Funktionen" }),
                        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 rounded-lg border border-blue-200", children: [
                            /* @__PURE__ */ jsxs("h5", { className: "font-medium text-blue-800 flex items-center", children: [
                              /* @__PURE__ */ jsx(Activity, { className: "w-4 h-4 mr-2" }),
                              "Energieverbrauch Monitoring"
                            ] }),
                            /* @__PURE__ */ jsxs("ul", { className: "text-sm text-blue-700 mt-1 space-y-0.5", children: [
                              /* @__PURE__ */ jsx("li", { children: "• Echzeit-Verbrauchsanzeige" }),
                              /* @__PURE__ */ jsx("li", { children: "• Historische Trends und Vergleiche" }),
                              /* @__PURE__ */ jsx("li", { children: "• Kostenaufschlüsselung nach Tarifen" })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-teal-50 rounded-lg border border-teal-200", children: [
                            /* @__PURE__ */ jsxs("h5", { className: "font-medium text-teal-800 flex items-center", children: [
                              /* @__PURE__ */ jsx(Settings, { className: "w-4 h-4 mr-2" }),
                              "Datenschutz-Einstellungen"
                            ] }),
                            /* @__PURE__ */ jsxs("ul", { className: "text-sm text-teal-700 mt-1 space-y-0.5", children: [
                              /* @__PURE__ */ jsx("li", { children: "• Granulare Einwilligungsverwaltung" }),
                              /* @__PURE__ */ jsx("li", { children: "• Datenfreigabe an Dritte kontrollieren" }),
                              /* @__PURE__ */ jsx("li", { children: "• Löschfristen anpassen" })
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-50 rounded-lg border border-green-200", children: [
                            /* @__PURE__ */ jsxs("h5", { className: "font-medium text-green-800 flex items-center", children: [
                              /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
                              "Datenexport & Portabilität"
                            ] }),
                            /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-1 space-y-0.5", children: [
                              /* @__PURE__ */ jsx("li", { children: "• Vollständiger Datenexport (DSGVO Art. 20)" }),
                              /* @__PURE__ */ jsx("li", { children: "• Maschinenlesbare Formate (JSON, CSV)" }),
                              /* @__PURE__ */ jsx("li", { children: "• API-Zugang für Drittanbieter" })
                            ] })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900", children: "Benutzerfreundliche Implementierung" }),
                        /* @__PURE__ */ jsx("div", { className: "bg-gray-50 p-4 rounded-lg", children: /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// React Dashboard Component
const EnergyDashboard = () => {
  const [consents, setConsents] = useState({
    analytics: true,
    thirdParty: false,
    marketing: false
  });

  const [exportFormat, setExportFormat] = useState('json');
  
  return (
    <div className="space-y-6">
      <ConsentManager 
        consents={consents}
        onChange={setConsents}
        granular={true}
      />
      
      <EnergyChart 
        data={energyData}
        privacy={consents.analytics}
      />
      
      <DataExport 
        format={exportFormat}
        onExport={handleDataExport}
      />
    </div>
  );
};` }) }),
                        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                          /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900", children: "UX/UI Prinzipien:" }),
                          /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm text-gray-600", children: [
                            /* @__PURE__ */ jsx("li", { children: "• Klare, verständliche Sprache verwenden" }),
                            /* @__PURE__ */ jsx("li", { children: "• Komplexe Sachverhalte visuell aufbereiten" }),
                            /* @__PURE__ */ jsx("li", { children: "• Ein-Klick Zugang zu Datenschutzfunktionen" }),
                            /* @__PURE__ */ jsx("li", { children: "• Responsive Design für alle Endgeräte" })
                          ] })
                        ] })
                      ] })
                    ] })
                  }
                )
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.2 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 mr-2 text-green-600" }),
                  "Betroffenenrechte umsetzen"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Smart Grid Betreiber müssen alle DSGVO-Betroffenenrechte technisch und organisatorisch umsetzen können." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                      /* @__PURE__ */ jsx(Badge, { className: "bg-blue-100 text-blue-800 mt-1 text-xs", children: "Art. 15" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-sm", children: "Auskunftsrecht" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Vollständige Übersicht aller verarbeiteten Energiedaten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                      /* @__PURE__ */ jsx(Badge, { className: "bg-teal-100 text-teal-800 mt-1 text-xs", children: "Art. 16" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-sm", children: "Berichtigungsrecht" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Korrektur fehlerhafter Verbrauchsdaten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-800 mt-1 text-xs", children: "Art. 17" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-sm", children: "Löschungsrecht" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Löschen nach Ablauf gesetzlicher Aufbewahrungsfristen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                      /* @__PURE__ */ jsx(Badge, { className: "bg-purple-100 text-purple-800 mt-1 text-xs", children: "Art. 20" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-sm", children: "Datenportabilität" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Export in maschinenlesbaren Formaten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start space-x-3", children: [
                      /* @__PURE__ */ jsx(Badge, { className: "bg-orange-100 text-orange-800 mt-1 text-xs", children: "Art. 21" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-sm", children: "Widerspruchsrecht" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Stopp der Datenverarbeitung für bestimmte Zwecke" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.3 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 mr-2 text-purple-600" }),
                  "Incident Response & Meldepflichten"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Bei Datenschutzverletzungen in Smart Grid Systemen greifen besondere Meldepflichten für kritische Infrastruktur." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-50 rounded-lg border border-red-200", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-red-800", children: "DSGVO Meldepflicht" }),
                      /* @__PURE__ */ jsxs("div", { className: "text-sm text-red-700 space-y-1", children: [
                        /* @__PURE__ */ jsxs("p", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "72h" }),
                          " - Meldung an Aufsichtsbehörde"
                        ] }),
                        /* @__PURE__ */ jsxs("p", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "ohne Verzug" }),
                          " - Information der Betroffenen"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-orange-50 rounded-lg border border-orange-200", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-orange-800", children: "BSI Meldepflicht" }),
                      /* @__PURE__ */ jsxs("div", { className: "text-sm text-orange-700 space-y-1", children: [
                        /* @__PURE__ */ jsxs("p", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "KRITIS-Verordnung" }),
                          " - Störungen kritischer IT"
                        ] }),
                        /* @__PURE__ */ jsxs("p", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "ohne Verzug" }),
                          " - Cyber-Sicherheitsvorfälle"
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-yellow-50 rounded-lg border border-yellow-200", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-yellow-800", children: "Regulierungsbehörde" }),
                      /* @__PURE__ */ jsxs("div", { className: "text-sm text-yellow-700 space-y-1", children: [
                        /* @__PURE__ */ jsxs("p", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "Bundesnetzagentur" }),
                          " - Netzstörungen"
                        ] }),
                        /* @__PURE__ */ jsxs("p", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "EnWG § 13b" }),
                          " - Systemsicherheit"
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Incident Response Workflow" }),
                    /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `1. Detection & Assessment
   └── Automated monitoring alerts
   
2. Classification & Impact Analysis  
   ├── Data breach severity
   ├── Infrastructure impact
   └── Regulatory requirements
   
3. Notification Timeline
   ├── Internal escalation: 1h
   ├── BSI notification: 4h
   ├── DSGVO authority: 72h
   └── Customer notification: varies` })
                  ] })
                ] })
              ] })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "implementation", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
        /* @__PURE__ */ jsx("div", { id: "praktische-umsetzung-smart-grid", className: "absolute -top-32" }),
        /* @__PURE__ */ jsxs(
          motion.h2,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "text-3xl font-bold text-center",
            children: [
              /* @__PURE__ */ jsx(Code, { className: "w-8 h-8 inline-block mr-3 text-blue-600" }),
              "Praktische Umsetzung"
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.1 },
            children: /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                /* @__PURE__ */ jsx(Target, { className: "w-5 h-5 mr-2 text-green-600" }),
                "Implementation Roadmap"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: implementationPhases.map((phase, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  transition: { duration: 0.5, delay: index * 0.1 },
                  className: "space-y-4",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                      /* @__PURE__ */ jsxs(Badge, { className: cn("text-sm px-3 py-1", phase.color), children: [
                        "Phase ",
                        index + 1
                      ] }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold mt-2", children: phase.phase }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: phase.duration })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-sm", children: "Hauptaufgaben:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: phase.tasks.map((task, taskIndex) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-gray-600 flex items-start", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 mr-1 mt-0.5 text-green-600 flex-shrink-0" }),
                        task
                      ] }, taskIndex)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-sm", children: "Deliverables:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: phase.deliverables.map((deliverable, delIndex) => /* @__PURE__ */ jsxs("li", { className: "text-xs text-blue-600 flex items-start", children: [
                        /* @__PURE__ */ jsx(ArrowRight, { className: "w-3 h-3 mr-1 mt-0.5 flex-shrink-0" }),
                        deliverable
                      ] }, delIndex)) })
                    ] })
                  ]
                },
                phase.phase
              )) }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.2 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(Cpu, { className: "w-5 h-5 mr-2 text-blue-600" }),
                  "Technology Stack"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Bewährte Technologien und Standards für DSGVO-konforme Smart Grid Implementierung." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900 mb-2", children: "Infrastructure & Security" }),
                      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "justify-center", children: "BSI TR-03109" }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "justify-center", children: "TLS 1.3" }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "justify-center", children: "PKI" }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "justify-center", children: "HSM" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900 mb-2", children: "Data Processing" }),
                      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "justify-center", children: "Apache Kafka" }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "justify-center", children: "PostgreSQL" }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "justify-center", children: "InfluxDB" }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "justify-center", children: "Redis" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900 mb-2", children: "Privacy Tech" }),
                      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "justify-center", children: "Differential Privacy" }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "justify-center", children: "Homomorphic Encryption" }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "justify-center", children: "Secure MPC" }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "justify-center", children: "Zero-Knowledge" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Architektur-Pattern" }),
                    /* @__PURE__ */ jsx("pre", { className: "text-xs bg-white p-3 rounded border overflow-x-auto", children: `// Microservices für Smart Grid
services:
  gateway-manager:
    - Smart Meter Gateway Verwaltung
    - Geräte-Authentifizierung
    
  data-processor:
    - Energiedaten Anonymisierung
    - Privacy-preserving Analytics
    
  consent-manager:
    - Einwilligungsverwaltung
    - Betroffenenrechte
    
  audit-service:
    - Compliance Monitoring
    - Incident Response` })
                  ] })
                ] })
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: 20 },
              whileInView: { opacity: 1, x: 0 },
              transition: { duration: 0.6, delay: 0.3 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 mr-2 text-green-600" }),
                  "Deployment Checklist"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Comprehensive Checklist für die produktive Einführung von Smart Grid Datenschutzmaßnahmen." }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900 mb-2", children: "Vor der Implementierung" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                          /* @__PURE__ */ jsx("span", { children: "Datenschutz-Folgenabschätzung durchgeführt" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                          /* @__PURE__ */ jsx("span", { children: "Rechtliche Grundlagen geprüft (DSGVO, MsbG)" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                          /* @__PURE__ */ jsx("span", { children: "BSI-Zertifizierung für Smart Meter Gateway" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                          /* @__PURE__ */ jsx("span", { children: "Mitarbeiterschulungen durchgeführt" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900 mb-2", children: "Technische Umsetzung" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                          /* @__PURE__ */ jsx("span", { children: "Verschlüsselung End-to-End implementiert" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                          /* @__PURE__ */ jsx("span", { children: "Consent Management System deployed" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                          /* @__PURE__ */ jsx("span", { children: "Privacy Dashboard für Kunden" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                          /* @__PURE__ */ jsx("span", { children: "Automated Privacy Controls" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900 mb-2", children: "Compliance & Monitoring" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                          /* @__PURE__ */ jsx("span", { children: "Audit-Logs und Monitoring aktiv" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                          /* @__PURE__ */ jsx("span", { children: "Incident Response Verfahren getestet" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                          /* @__PURE__ */ jsx("span", { children: "Betroffenenrechte-Workflow funktional" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-2", children: [
                          /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                          /* @__PURE__ */ jsx("span", { children: "Regelmäßige Compliance-Reviews geplant" })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            }
          )
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-20 bg-gradient-to-r from-blue-600 to-teal-600 text-white", children: /* @__PURE__ */ jsx("div", { className: "container px-4 mx-auto text-center", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "max-w-3xl mx-auto space-y-8",
        children: [
          /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx(Zap, { className: "w-16 h-16 text-white/80" }) }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold", children: "Bereit für DSGVO-konforme Smart Grid Implementation?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-white/90", children: "Nutzen Sie unsere Expertise für die sichere und rechtskonforme Digitalisierung Ihrer Energieinfrastruktur. Privacy-by-Design von Anfang an." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "lg",
                className: "bg-white text-blue-600 hover:bg-gray-100",
                asChild: true,
                children: /* @__PURE__ */ jsxs(Link, { to: "/kontakt", children: [
                  "Kostenlose Beratung",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                size: "lg",
                variant: "outline",
                className: "border-white text-white hover:bg-white hover:text-blue-600",
                asChild: true,
                children: /* @__PURE__ */ jsxs(Link, { to: "/tools", children: [
                  "Compliance Tools entdecken",
                  /* @__PURE__ */ jsx(ExternalLink, { className: "w-4 h-4 ml-2" })
                ] })
              }
            )
          ] })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container px-4 mx-auto", children: [
      /* @__PURE__ */ jsx(
        motion.h3,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-2xl font-bold text-center mb-8",
          children: "Verwandte Ressourcen"
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
        {
          title: "Industrie 4.0 Datenschutz",
          description: "Privacy in vernetzten Produktionsanlagen",
          link: "/wissen/branchen/industrie-40-datenschutz",
          icon: Building
        },
        {
          title: "Fintech Compliance",
          description: "Datenschutz in Finanzdienstleistungen",
          link: "/wissen/branchen/fintech-compliance",
          icon: TrendingUp
        },
        {
          title: "Healthcare DSGVO",
          description: "Patientendaten rechtssicher verarbeiten",
          link: "/wissen/branchen/healthcare-dsgvo",
          icon: Heart
        },
        {
          title: "Privacy Tools",
          description: "Praktische Werkzeuge für Compliance",
          link: "/tools",
          icon: BookOpen
        }
      ].map((resource, index) => {
        const Icon = resource.icon;
        return /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: index * 0.1 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8 text-blue-600 mb-4" }),
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: resource.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: resource.description }),
              /* @__PURE__ */ jsx(Button, { variant: "outline", size: "sm", asChild: true, className: "w-full", children: /* @__PURE__ */ jsxs(Link, { to: resource.link, children: [
                "Mehr erfahren",
                /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4 ml-2" })
              ] }) })
            ] }) })
          },
          resource.title
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {}),
    showBackToTop && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: "fixed bottom-8 right-8 z-50 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-all",
        "aria-label": "Zurück nach oben",
        children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-5 w-5" })
      }
    )
  ] });
}
export {
  SmartGridComplianceGuide as default
};
