import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { ArrowRight, Download, Truck, Globe, BookOpen, Shield, Network, MapPin, Settings, Code, AlertTriangle, Package, ShieldCheck, ChevronDown, Euro, Train, Ship, Plane, CheckCircle2, Lock, Key, UserCheck, Share, CheckSquare, Radio, Square, X } from "lucide-react";
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
import "react-helmet-async";
const LogisticsCompliance = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [activeSection, setActiveSection] = useState("overview");
  const [selectedTransportMode, setSelectedTransportMode] = useState("road");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
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
  const navigationItems = [
    { id: "overview", label: "Überblick", icon: Shield },
    { id: "supply-chain", label: "Supply Chain Compliance", icon: Network },
    { id: "tracking", label: "Tracking & Transparenz", icon: MapPin },
    { id: "tom", label: "TOM für Logistik", icon: Settings },
    { id: "international", label: "Internationale Transfers", icon: Globe },
    { id: "implementation", label: "Praxis-Implementation", icon: Code }
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
    { label: "Supply Chain Transparenz", value: 94, color: "text-red-600", trend: "+12%" },
    { label: "DSGVO Compliance", value: 96, color: "text-pink-600", trend: "+8%" },
    { label: "Tracking Datenschutz", value: 91, color: "text-rose-600", trend: "+15%" },
    { label: "Internationale Transfers", value: 89, color: "text-red-500", trend: "+7%" },
    { label: "TOM Implementierung", value: 93, color: "text-orange-500", trend: "+10%" },
    { label: "Audit Readiness", value: 95, color: "text-purple-600", trend: "+5%" }
  ];
  const supplyChainChallenges = [
    {
      title: "Multi-Stakeholder Datenaustausch",
      description: "Komplexe Datenflüsse zwischen Verladern, Spediteuren, Lagerbetreibern und Empfängern",
      challenges: ["Unterschiedliche IT-Systeme", "Variierende Datenschutzstandards", "Grenzüberschreitende Transfers", "Subunternehmer-Management"],
      risk: "Kritisch",
      fineExample: "Bis zu 20 Mio. € oder 4% des Jahresumsatzes",
      solution: {
        title: "📦 Praxis-Lösung: Unified Data Governance",
        approach: "Implementierung eines zentralen Daten-Governance-Frameworks für die gesamte Lieferkette",
        keyElements: [
          {
            element: "Standardisierte Datenverarbeitung",
            description: "Einheitliche APIs und Datenformate für alle Partner",
            implementation: "REST APIs mit OAuth 2.0 Authentifizierung"
          },
          {
            element: "Vertragsmanagement",
            description: "Standardisierte Auftragsverarbeitungsverträge (AVV)",
            implementation: "Template-basierte AVV-Generierung"
          },
          {
            element: "Zugriffskontrollen",
            description: "Rollenbasierte Zugriffskontrolle über alle Systeme",
            implementation: "Zero-Trust Security Model"
          }
        ]
      }
    },
    {
      title: "Real-Time Tracking & Datenschutz",
      description: "Balance zwischen Transparenzanforderungen und Datenschutz bei Live-Tracking",
      challenges: ["GPS-Daten von Fahrern", "Kundendaten in Tracking-Systemen", "Öffentliche Tracking-Links", "IoT-Sensordaten"],
      risk: "Hoch",
      fineExample: "Bußgelder von 100.000 € bis 5 Mio. €",
      solution: {
        title: "🚚 Praxis-Lösung: Privacy-by-Design Tracking",
        approach: "Datenschutzfreundliches Tracking-System mit mehrstufiger Datentrennung",
        keyElements: [
          {
            element: "Datentrennung",
            description: "Trennung von Personen- und Sendungsdaten",
            implementation: "Separate Datenbanken mit Token-Verknüpfung"
          },
          {
            element: "Anonymisierung",
            description: "Automatische Anonymisierung nach Zustellung",
            implementation: "30-Tage Retention, dann Pseudonymisierung"
          },
          {
            element: "Granulare Rechte",
            description: "Unterschiedliche Detailgrade je nach Nutzerrolle",
            implementation: "API-basierte Rechteverwaltung"
          }
        ]
      }
    },
    {
      title: "Internationale Datentransfers",
      description: "Rechtskonforme Datenübertragung in Drittländer ohne Angemessenheitsbeschluss",
      challenges: ["USA-Transfers nach Schrems II", "Asien-Pazifik Routen", "Brexit-Auswirkungen", "Schweiz als Transitland"],
      risk: "Sehr hoch",
      fineExample: "Bis zu 20 Mio. € plus Transferverbot",
      solution: {
        title: "🌍 Praxis-Lösung: Compliant Global Logistics",
        approach: "Mehrstufiges System für internationale Datentransfers",
        keyElements: [
          {
            element: "Transfer Impact Assessment",
            description: "Bewertung jeder internationalen Route",
            implementation: "Automatisierte TIA-Generierung"
          },
          {
            element: "Standardvertragsklauseln",
            description: "SCC-Implementierung mit zusätzlichen Garantien",
            implementation: "Digitale SCC-Verwaltung"
          },
          {
            element: "Lokale Datenhaltung",
            description: "Edge Computing in kritischen Regionen",
            implementation: "Regional Data Centers"
          }
        ]
      }
    }
  ];
  const transportModes = {
    road: {
      icon: Truck,
      name: "Straßentransport",
      specificRequirements: [
        "Fahrer-Datenschutz (Arbeitszeiten, GPS)",
        "Digitaler Tachograph Compliance",
        "Mautdaten-Verarbeitung",
        "Dashcam-Aufnahmen"
      ]
    },
    air: {
      icon: Plane,
      name: "Luftfracht",
      specificRequirements: [
        "Advance Cargo Information (ACI)",
        "Known Consignor Daten",
        "Passagierdaten bei Courier-Services",
        "Sicherheitsscreening-Daten"
      ]
    },
    sea: {
      icon: Ship,
      name: "Seefracht",
      specificRequirements: [
        "Maritime Single Window Daten",
        "Container-Tracking",
        "Crew-Listen",
        "Hafenstaatkontrolle"
      ]
    },
    rail: {
      icon: Train,
      name: "Schienentransport",
      specificRequirements: [
        "Grenzüberschreitende Frachtbriefe",
        "Gefahrgut-Dokumentation",
        "Intermodale Übergabepunkte",
        "Bahnhofs-CCTV Integration"
      ]
    }
  };
  const toggleCheckItem = (itemId) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };
  const trackingTechnologies = [
    {
      name: "GPS/GNSS Tracking",
      privacy: "Hoch",
      description: "Echtzeitortung von Fahrzeugen und Sendungen",
      measures: ["Fahrer-Einwilligung", "Privatsphäre-Modi", "Datenminimierung"]
    },
    {
      name: "RFID/NFC Tags",
      privacy: "Mittel",
      description: "Kontaktlose Identifikation in Lagern",
      measures: ["Reichweitenbegrenzung", "Verschlüsselung", "Zugriffskontrolle"]
    },
    {
      name: "IoT Sensoren",
      privacy: "Mittel-Hoch",
      description: "Temperatur, Erschütterung, Feuchtigkeit",
      measures: ["Edge Processing", "Aggregierte Daten", "Need-to-know Prinzip"]
    },
    {
      name: "Blockchain",
      privacy: "Niedrig",
      description: "Unveränderliche Supply Chain Historie",
      measures: ["Pseudonymisierung", "Private Chains", "Selective Disclosure"]
    }
  ];
  const implementationPhases = [
    { phase: "Analyse & Assessment", completion: 100, duration: "2-3 Wochen" },
    { phase: "Konzeptentwicklung", completion: 85, duration: "3-4 Wochen" },
    { phase: "Pilotimplementierung", completion: 60, duration: "6-8 Wochen" },
    { phase: "Rollout & Schulung", completion: 35, duration: "4-6 Wochen" },
    { phase: "Monitoring & Optimierung", completion: 15, duration: "Kontinuierlich" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative py-20 md:py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-red-500/10 rounded-full blur-3xl animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-rose-500/5 rounded-full blur-3xl animate-pulse delay-500" })
      ] }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          style: { y, opacity },
          className: "container px-4 mx-auto relative z-10",
          children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                className: "mb-6",
                children: /* @__PURE__ */ jsx(Badge, { className: "mb-4 px-4 py-1 text-sm bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-300", children: "Supply Chain Excellence meets Data Privacy" })
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.h1,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.1 },
                className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6",
                children: [
                  "Logistics & Supply Chain",
                  /* @__PURE__ */ jsx("span", { className: "block mt-2 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent", children: "DSGVO Compliance Guide" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              motion.p,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.2 },
                className: "text-xl text-gray-600 dark:text-gray-300 mb-8",
                children: "Der umfassende Leitfaden für datenschutzkonforme Logistikprozesse. Von Real-Time Tracking bis zu internationalen Datentransfers."
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8, delay: 0.3 },
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                children: [
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      size: "lg",
                      className: "bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white tap-target min-h-[48px]",
                      onClick: () => scrollToSection("overview"),
                      children: [
                        "Compliance-Guide starten",
                        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      size: "lg",
                      variant: "outline",
                      className: "border-red-600 text-red-600 hover:bg-red-50 dark:border-red-400 dark:text-red-400 tap-target min-h-[48px]",
                      children: [
                        /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
                        "Logistics Checklist"
                      ]
                    }
                  )
                ]
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: { y: [0, -10, 0] },
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
          className: "absolute bottom-10 left-10 hidden lg:block",
          children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4", children: [
            /* @__PURE__ */ jsx(Truck, { className: "h-8 w-8 text-red-600 mb-2" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "Real-Time Tracking" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "DSGVO-konform" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: { y: [0, 10, 0] },
          transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 },
          className: "absolute top-32 right-10 hidden lg:block",
          children: /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4", children: [
            /* @__PURE__ */ jsx(Globe, { className: "h-8 w-8 text-pink-600 mb-2" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "Global Compliance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "100+ Länder" })
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ jsx("div", { className: "container px-4 mx-auto", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-6", children: [
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
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 pt-4 border-t border-gray-200 dark:border-gray-700", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2", children: "Weitere Themen" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2 text-sm", children: [
          /* @__PURE__ */ jsx("button", { onClick: () => scrollToSection("transport-modi"), className: "text-left hover:text-red-600 dark:hover:text-red-400 py-1", children: "→ Transportmodus-spezifische Anforderungen" }),
          /* @__PURE__ */ jsx("button", { onClick: () => scrollToSection("tracking-technologien"), className: "text-left hover:text-red-600 dark:hover:text-red-400 py-1", children: "→ Tracking-Technologien & Datenschutz" }),
          /* @__PURE__ */ jsx("button", { onClick: () => scrollToSection("laenderspezifische-anforderungen"), className: "text-left hover:text-red-600 dark:hover:text-red-400 py-1", children: "→ Länderspezifische Anforderungen" }),
          /* @__PURE__ */ jsx("button", { onClick: () => scrollToSection("implementation-roadmap"), className: "text-left hover:text-red-600 dark:hover:text-red-400 py-1", children: "→ Implementation Roadmap" })
        ] })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 py-4 overflow-x-auto scrollbar-hide", children: navigationItems.map((item) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => scrollToSection(item.id),
        className: cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all",
          "text-sm font-medium",
          activeSection === item.id ? "bg-red-100 dark:bg-red-950/50 text-red-700 dark:text-red-300" : "text-gray-600 dark:text-gray-400 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-600"
        ),
        children: [
          /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4" }),
          item.label
        ]
      },
      item.id
    )) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-20", children: [
      /* @__PURE__ */ jsxs("section", { id: "overview", className: "space-y-8 scroll-mt-32", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold mb-4 text-gray-900 dark:text-white", children: [
                /* @__PURE__ */ jsx(Shield, { className: "inline-block mr-3 h-8 w-8 text-red-600" }),
                "Logistics Compliance Dashboard"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-300 text-lg mb-8", children: "Überblick über Ihre Supply Chain Datenschutz-Performance" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxs(Card, { className: "p-6 shadow-2xl border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-white via-red-50/20 to-pink-50/20 dark:from-gray-900 dark:via-red-950/20 dark:to-pink-950/20", children: [
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 gap-3", children: complianceStats.map((stat, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  animate: { opacity: 1, scale: 1 },
                  transition: { delay: index * 0.1 },
                  whileHover: { scale: 1.05 },
                  className: "bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-600 dark:text-gray-400 mb-1", children: stat.label }),
                    /* @__PURE__ */ jsxs("div", { className: `text-2xl font-bold ${stat.color} mb-1`, children: [
                      stat.value,
                      "%"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-green-600 dark:text-green-400 font-medium", children: [
                      stat.trend,
                      " vs. letztes Quartal"
                    ] }),
                    /* @__PURE__ */ jsx(
                      Progress,
                      {
                        value: stat.value,
                        className: "mt-2 h-2"
                      }
                    )
                  ]
                },
                stat.label
              )) }),
              /* @__PURE__ */ jsx("div", { className: "mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg border border-yellow-200 dark:border-yellow-800", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-yellow-600 mt-0.5" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-yellow-800 dark:text-yellow-200", children: "Aktuelle Herausforderung: Schrems II Compliance" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700 dark:text-yellow-300 mt-1", children: "89% Ihrer internationalen Routen benötigen zusätzliche Schutzmaßnahmen für USA-Transfers." })
                ] })
              ] }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            className: "grid grid-cols-1 md:grid-cols-3 gap-6",
            children: [
              {
                icon: Package,
                title: "End-to-End Transparenz",
                description: "Lückenlose Nachverfolgung bei voller DSGVO-Compliance",
                color: "text-red-600"
              },
              {
                icon: ShieldCheck,
                title: "Multi-Partner Security",
                description: "Sichere Datenverarbeitung über alle Lieferketten-Partner",
                color: "text-pink-600"
              },
              {
                icon: Globe,
                title: "Global Compliant",
                description: "Internationale Standards und lokale Anforderungen vereint",
                color: "text-rose-600"
              }
            ].map((benefit, index) => /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: index * 0.1 },
                viewport: { once: true },
                children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsx(benefit.icon, { className: `h-10 w-10 ${benefit.color} mb-4` }),
                  /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-2", children: benefit.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: benefit.description })
                ] }) })
              },
              benefit.title
            ))
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "supply-chain", className: "space-y-8 scroll-mt-32", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold mb-4 text-gray-900 dark:text-white", children: [
                /* @__PURE__ */ jsx(Network, { className: "inline-block mr-3 h-8 w-8 text-red-600" }),
                "Supply Chain Compliance Herausforderungen"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-300 text-lg mb-8", children: "Die größten Datenschutz-Herausforderungen in der modernen Logistik" })
            ]
          }
        ),
        supplyChainChallenges.map((challenge, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: index * 0.1 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-red-500 hover:shadow-xl transition-shadow", children: [
              /* @__PURE__ */ jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: challenge.title }),
                  /* @__PURE__ */ jsxs(
                    Badge,
                    {
                      variant: challenge.risk === "Kritisch" ? "destructive" : challenge.risk === "Sehr hoch" ? "destructive" : "secondary",
                      children: [
                        challenge.risk,
                        " Risiko"
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mt-2", children: challenge.description })
              ] }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-500" }),
                    "Hauptherausforderungen"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: challenge.challenges.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(ChevronDown, { className: "h-3 w-3 text-red-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "bg-red-50 dark:bg-red-950/30 rounded-lg p-4 border border-red-200 dark:border-red-800", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-red-700 dark:text-red-300", children: [
                  /* @__PURE__ */ jsx(Euro, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsxs("span", { className: "font-semibold text-sm", children: [
                    "Mögliches Bußgeld: ",
                    challenge.fineExample
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl p-6", children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: challenge.solution.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-700 dark:text-gray-300 mb-4", children: challenge.solution.approach }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-4", children: challenge.solution.keyElements.map((element, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-white/80 dark:bg-gray-900/80 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: element.element }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-2", children: element.description }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(Code, { className: "h-4 w-4 text-green-600" }),
                      /* @__PURE__ */ jsx("span", { className: "text-green-700 dark:text-green-400 font-mono text-xs", children: element.implementation })
                    ] })
                  ] }, idx)) })
                ] })
              ] })
            ] })
          },
          challenge.title
        ))
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "tracking", className: "space-y-8 scroll-mt-32", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold mb-4 text-gray-900 dark:text-white", children: [
                /* @__PURE__ */ jsx(MapPin, { className: "inline-block mr-3 h-8 w-8 text-red-600" }),
                "Tracking & Transparenz"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-300 text-lg mb-8", children: "Datenschutzkonforme Implementierung von Tracking-Technologien" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Transportmodus-spezifische Anforderungen" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-6", children: Object.entries(transportModes).map(([key, mode]) => /* @__PURE__ */ jsxs(
                "button",
                {
                  onClick: () => setSelectedTransportMode(key),
                  className: cn(
                    "p-4 rounded-lg border-2 transition-all",
                    selectedTransportMode === key ? "border-red-500 bg-red-50 dark:bg-red-950/30" : "border-gray-200 dark:border-gray-700 hover:border-red-300"
                  ),
                  children: [
                    /* @__PURE__ */ jsx(mode.icon, { className: cn(
                      "h-8 w-8 mx-auto mb-2",
                      selectedTransportMode === key ? "text-red-600" : "text-gray-600"
                    ) }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium", children: mode.name })
                  ]
                },
                key
              )) }),
              /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 dark:bg-gray-800 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3", children: [
                  "Spezifische Datenschutzanforderungen für ",
                  transportModes[selectedTransportMode].name
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: transportModes[selectedTransportMode].specificRequirements.map((req, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: req })
                ] }, idx)) })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-6", children: "Tracking-Technologien & Datenschutz" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: trackingTechnologies.map((tech, index) => /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, x: index % 2 === 0 ? -20 : 20 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { duration: 0.5, delay: index * 0.1 },
                  viewport: { once: true },
                  children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow", children: [
                    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: tech.name }),
                      /* @__PURE__ */ jsxs(Badge, { variant: tech.privacy === "Hoch" ? "destructive" : tech.privacy === "Mittel-Hoch" ? "secondary" : tech.privacy === "Mittel" ? "secondary" : "outline", children: [
                        "Datenschutz: ",
                        tech.privacy
                      ] })
                    ] }) }),
                    /* @__PURE__ */ jsxs(CardContent, { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: tech.description }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold", children: "Schutzmaßnahmen:" }),
                        tech.measures.map((measure, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                          /* @__PURE__ */ jsx(Shield, { className: "h-3 w-3 text-green-600" }),
                          /* @__PURE__ */ jsx("span", { children: measure })
                        ] }, idx))
                      ] })
                    ] })
                  ] })
                },
                tech.name
              )) })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-xl p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "📍 Praxis-Szenario: DSGVO-konformes Sendungstracking" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-white/80 dark:bg-gray-900/80 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "📋 Ausgangslage" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm", children: "Ein E-Commerce-Kunde möchte seine Bestellung in Echtzeit verfolgen. Die Sendung wird von einem Subunternehmer transportiert, der GPS-Tracking nutzt." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-white/80 dark:bg-gray-900/80 rounded-lg p-4", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "🔐 Datenschutz-Lösung" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-600", children: "1." }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Token-basiertes Tracking" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Eindeutiger Tracking-Link ohne Personenbezug, zeitlich begrenzte Gültigkeit" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-600", children: "2." }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Granulare Positionsdaten" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Nur Stadtbezirk statt exakte GPS-Position für Endkunden" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-600", children: "3." }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Automatische Löschung" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400", children: "Tracking-Daten werden 30 Tage nach Zustellung automatisch gelöscht" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "bg-green-50 dark:bg-green-950/30 rounded-lg p-4 border border-green-200 dark:border-green-800", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-600 mt-0.5" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "font-semibold text-green-800 dark:text-green-200", children: "Ergebnis" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700 dark:text-green-300", children: "Volle Transparenz für Kunden bei gleichzeitigem Schutz der Fahrerdaten" })
                  ] })
                ] }) })
              ] })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "tom", className: "space-y-8 scroll-mt-32", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold mb-4 text-gray-900 dark:text-white", children: [
                /* @__PURE__ */ jsx(Settings, { className: "inline-block mr-3 h-8 w-8 text-red-600" }),
                "Technische und Organisatorische Maßnahmen"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-300 text-lg mb-8", children: "Spezifische TOM für die Logistikbranche" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          {
            title: "Zutrittskontrolle",
            icon: Lock,
            measures: [
              "Biometrische Zugangssysteme für Lager",
              "Elektronische Fahrzeugschlüssel mit Logging",
              "Visitor Management System",
              "Geofencing für sensible Bereiche"
            ]
          },
          {
            title: "Zugangskontrolle",
            icon: Key,
            measures: [
              "Multi-Faktor-Authentifizierung für TMS",
              "Role-Based Access Control (RBAC)",
              "API-Key Management für Partner",
              "Single Sign-On (SSO) Integration"
            ]
          },
          {
            title: "Zugriffskontrolle",
            icon: UserCheck,
            measures: [
              "Granulare Berechtigungskonzepte",
              "Audit-Logging aller Datenzugriffe",
              "Automatische Rechtevergabe nach Jobrolle",
              "Regelmäßige Berechtigungsreviews"
            ]
          },
          {
            title: "Weitergabekontrolle",
            icon: Share,
            measures: [
              "Ende-zu-Ende Verschlüsselung",
              "Sichere EDI-Verbindungen",
              "Verschlüsselte Container für Dokumente",
              "Blockchain für Audit Trail"
            ]
          }
        ].map((category, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: index * 0.1 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(category.icon, { className: "h-5 w-5 text-red-600" }),
                category.title
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: category.measures.map((measure, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: measure })
              ] }, idx)) }) })
            ] })
          },
          category.title
        )) }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxs(Card, { className: "border-2 border-red-200 dark:border-red-800", children: [
              /* @__PURE__ */ jsx(CardHeader, { className: "bg-red-50 dark:bg-red-950/30", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Truck, { className: "h-6 w-6 text-red-600" }),
                "Logistik-spezifische Sicherheitsmaßnahmen"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Package, { className: "h-4 w-4 text-orange-600" }),
                    "Warensicherheit"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-red-600", children: "•" }),
                      "Tamper-evident Packaging mit QR-Codes"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-red-600", children: "•" }),
                      "IoT-Sensoren für Temperatur & Erschütterung"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-red-600", children: "•" }),
                      "Blockchain-basierte Chain of Custody"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Radio, { className: "h-4 w-4 text-blue-600" }),
                    "Kommunikationssicherheit"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-red-600", children: "•" }),
                      "Verschlüsselte Funk-Kommunikation"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-red-600", children: "•" }),
                      "Secure Messaging für Fahrer"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-red-600", children: "•" }),
                      "Anonymisierte Hotline-Systeme"
                    ] })
                  ] })
                ] })
              ] }) })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "international", className: "space-y-8 scroll-mt-32", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold mb-4 text-gray-900 dark:text-white", children: [
                /* @__PURE__ */ jsx(Globe, { className: "inline-block mr-3 h-8 w-8 text-red-600" }),
                "Internationale Datentransfers"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-300 text-lg mb-8", children: "Rechtskonforme Datenübermittlung in der globalen Lieferkette" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxs(Card, { className: "p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "🌍 Transfer Impact Assessment (TIA) Checkliste" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                "Identifikation aller Drittländer in der Lieferkette",
                "Prüfung von Angemessenheitsbeschlüssen",
                "Bewertung der Rechtslage im Zielland",
                "Implementierung von Standardvertragsklauseln (SCC)",
                "Zusätzliche technische Schutzmaßnahmen",
                "Dokumentation der Risikobewertung",
                "Regelmäßige Überprüfung (mind. jährlich)"
              ].map((item, index) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "flex items-center gap-3 p-3 bg-white dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800",
                  onClick: () => toggleCheckItem(`tia-${index}`),
                  children: [
                    checkedItems.has(`tia-${index}`) ? /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5 text-green-600" }) : /* @__PURE__ */ jsx(Square, { className: "h-5 w-5 text-gray-400" }),
                    /* @__PURE__ */ jsx("span", { className: cn(
                      "text-sm",
                      checkedItems.has(`tia-${index}`) && "line-through text-gray-500"
                    ), children: item })
                  ]
                },
                index
              )) }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 text-center", children: [
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                  checkedItems.size,
                  "/7 Schritte abgeschlossen"
                ] }),
                /* @__PURE__ */ jsx(Progress, { value: checkedItems.size / 7 * 100, className: "mt-2" })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-6", children: "Länderspezifische Anforderungen" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
                {
                  country: "USA",
                  flag: "🇺🇸",
                  status: "Kein Angemessenheitsbeschluss",
                  requirements: ["SCC erforderlich", "Zusätzliche Garantien", "CLOUD Act Risiko"],
                  risk: "Hoch"
                },
                {
                  country: "China",
                  flag: "🇨🇳",
                  status: "Kein Angemessenheitsbeschluss",
                  requirements: ["SCC erforderlich", "Lokale Datenspeicherung", "Cybersecurity Law"],
                  risk: "Sehr hoch"
                },
                {
                  country: "UK",
                  flag: "🇬🇧",
                  status: "Angemessenheitsbeschluss",
                  requirements: ["Direkte Übertragung möglich", "UK GDPR beachten", "Brexit-Klauseln"],
                  risk: "Niedrig"
                },
                {
                  country: "Schweiz",
                  flag: "🇨🇭",
                  status: "Angemessenheitsbeschluss",
                  requirements: ["Direkte Übertragung möglich", "nDSG Compliance", "Transit-Regelungen"],
                  risk: "Niedrig"
                },
                {
                  country: "Indien",
                  flag: "🇮🇳",
                  status: "Kein Angemessenheitsbeschluss",
                  requirements: ["SCC erforderlich", "DPDP Act 2023", "Lokalisierung prüfen"],
                  risk: "Mittel"
                },
                {
                  country: "Brasilien",
                  flag: "🇧🇷",
                  status: "Kein Angemessenheitsbeschluss",
                  requirements: ["SCC erforderlich", "LGPD Alignment", "DPO erforderlich"],
                  risk: "Mittel"
                }
              ].map((country, index) => /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { opacity: 0, scale: 0.9 },
                  whileInView: { opacity: 1, scale: 1 },
                  transition: { duration: 0.5, delay: index * 0.05 },
                  viewport: { once: true },
                  children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow", children: [
                    /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-2xl", children: country.flag }),
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: country.country })
                      ] }),
                      /* @__PURE__ */ jsx(Badge, { variant: country.risk === "Sehr hoch" ? "destructive" : country.risk === "Hoch" ? "destructive" : country.risk === "Mittel" ? "secondary" : "outline", children: country.risk })
                    ] }) }),
                    /* @__PURE__ */ jsxs(CardContent, { children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400 mb-3", children: country.status }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-1", children: country.requirements.map((req, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs", children: [
                        /* @__PURE__ */ jsx(ChevronDown, { className: "h-3 w-3 text-red-500" }),
                        /* @__PURE__ */ jsx("span", { children: req })
                      ] }, idx)) })
                    ] })
                  ] })
                },
                country.country
              )) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("section", { id: "implementation", className: "space-y-8 scroll-mt-32", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold mb-4 text-gray-900 dark:text-white", children: [
                /* @__PURE__ */ jsx(Code, { className: "inline-block mr-3 h-8 w-8 text-red-600" }),
                "Praxis-Implementation"
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-300 text-lg mb-8", children: "Schritt-für-Schritt zur DSGVO-konformen Logistik" })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-6", children: "Implementation Roadmap" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-4", children: implementationPhases.map((phase, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx("div", { className: cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold",
                      phase.completion === 100 ? "bg-green-600" : phase.completion >= 50 ? "bg-orange-500" : "bg-gray-400"
                    ), children: index + 1 }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "font-semibold", children: phase.phase }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: phase.duration })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
                    phase.completion,
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsx(Progress, { value: phase.completion, className: "h-2" })
              ] }, phase.phase)) })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Beispiel: DSGVO-konformes Tracking API" }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `// DSGVO-konformes Tracking Endpoint
app.post('/api/tracking/create', async (req, res) => {
  const { shipmentId, customerId } = req.body;
  
  // Generiere anonymen Tracking-Token
  const trackingToken = crypto.randomBytes(32).toString('hex');
  
  // Speichere Verknüpfung mit Ablaufdatum
  await redis.setex(
    \`tracking:\${trackingToken}\`,
    30 * 24 * 60 * 60, // 30 Tage
    JSON.stringify({
      shipmentId,
      customerId: hash(customerId), // Pseudonymisiert
      created: new Date(),
      dataCategories: ['location', 'status'],
      legalBasis: 'contract',
      retentionDays: 30
    })
  );
  
  // Audit Log
  await auditLog.create({
    action: 'TRACKING_TOKEN_CREATED',
    shipmentId,
    timestamp: new Date(),
    purpose: 'Customer shipment tracking'
  });
  
  return res.json({
    trackingUrl: \`https://track.example.com/\${trackingToken}\`,
    expiresIn: '30 days',
    dataProcessed: ['Standort (Stadt-Ebene)', 'Sendungsstatus'],
    privacyPolicy: 'https://example.com/privacy'
  });
});` }) }) }) })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs(Card, { className: "border-green-200 dark:border-green-800", children: [
                /* @__PURE__ */ jsx(CardHeader, { className: "bg-green-50 dark:bg-green-950/30", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-green-800 dark:text-green-200", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }),
                  "Do's"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { className: "pt-4", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Privacy by Design in allen Systemen" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Automatisierte Löschkonzepte implementieren" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Granulare Berechtigungskonzepte" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Regelmäßige Datenschutz-Audits" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Transparente Kundeninformation" })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "border-red-200 dark:border-red-800", children: [
                /* @__PURE__ */ jsx(CardHeader, { className: "bg-red-50 dark:bg-red-950/30", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-red-800 dark:text-red-200", children: [
                  /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }),
                  "Don'ts"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { className: "pt-4", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Unbegrenzte Datenspeicherung" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Klartext-Speicherung von Kundendaten" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Fehlende Auftragsverarbeitung mit Partnern" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Intransparente Datenflüsse" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Ignorieren von Betroffenenrechten" })
                  ] })
                ] }) })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            className: "mt-8",
            children: /* @__PURE__ */ jsxs(Card, { className: "p-6 bg-gray-50 dark:bg-gray-800", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4", children: "Verwandte Compliance-Themen" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-pflege", className: "group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-600 dark:text-red-400 group-hover:underline", children: "Datenschutz in der Pflege" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: "DSGVO-Compliance für Pflegeeinrichtungen" })
                ] }) }),
                /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-arztpraxis", className: "group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-600 dark:text-red-400 group-hover:underline", children: "Datenschutz Arztpraxis" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: "Patientendatenschutz nach DSGVO" })
                ] }) }),
                /* @__PURE__ */ jsx(Link, { to: "/wissen/dsgvo-compliance", className: "group", children: /* @__PURE__ */ jsxs("div", { className: "p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-red-300 dark:hover:border-red-700 transition-colors", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-red-600 dark:text-red-400 group-hover:underline", children: "DSGVO Grundlagen" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: "Basiswissen zur EU-Datenschutzverordnung" })
                ] }) })
              ] })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(
        motion.section,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          className: "mt-20",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-gradient-to-r from-red-600 via-pink-600 to-rose-600 text-white border-0", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8 md:p-12 text-center", children: [
            /* @__PURE__ */ jsx(
              motion.div,
              {
                animate: { y: [0, -10, 0] },
                transition: { duration: 2, repeat: Infinity },
                children: /* @__PURE__ */ jsx(Truck, { className: "h-16 w-16 mx-auto mb-6" })
              }
            ),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Starten Sie Ihre Logistics Compliance Journey" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 opacity-90 max-w-2xl mx-auto", children: "Machen Sie Ihre Supply Chain DSGVO-konform. Wir begleiten Sie von der Analyse bis zur Implementation." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "lg",
                  className: "bg-white text-red-600 hover:bg-gray-100",
                  children: [
                    /* @__PURE__ */ jsx(Package, { className: "mr-2 h-5 w-5" }),
                    "Logistics Demo buchen"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  className: "text-white border-white hover:bg-white/10",
                  children: [
                    /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                    "Compliance Guide herunterladen"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold", children: "500+" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm opacity-80", children: "Logistik-Partner compliant" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold", children: "50M+" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm opacity-80", children: "Sendungen DSGVO-konform" })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-3xl font-bold", children: "99.9%" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm opacity-80", children: "Audit Success Rate" })
              ] })
            ] })
          ] }) })
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  LogisticsCompliance as default
};
