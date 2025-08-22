import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { Car, Download, Phone, FileText, Wifi, Database, Navigation, Smartphone, Shield, CircuitBoard, Euro, TrendingUp, Calendar, ExternalLink, Gauge, BrainCircuit, ChevronUp, Code, AlertCircle, CheckCircle2, AlertTriangle, MapPin, Users, Camera, Building2, Package, Wrench, Eye, Cloud, Server, Globe, Radio, Waves, Satellite, Lock, Key, ShieldCheck, Fingerprint, Settings, User, Cpu, Network, Clock, UserCheck, X, Mic, HardDrive, CheckSquare, Truck, Lightbulb, Scale, FileCheck, Search, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import { motion } from "framer-motion";
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
const AutomotiveDatenschutz = () => {
  const [activeSection, setActiveSection] = useState("ueberblick");
  const [expandedSection, setExpandedSection] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigationItems = [
    { id: "ueberblick", label: "Überblick", icon: Car },
    { id: "connected-car", label: "Connected Car", icon: Wifi },
    { id: "fahrzeugdaten", label: "Fahrzeugdaten", icon: Database },
    { id: "telematik", label: "Telematik & GPS", icon: Navigation },
    { id: "infotainment", label: "Infotainment", icon: Smartphone },
    { id: "compliance", label: "Compliance", icon: Shield }
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
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const automotiveDataTypes = [
    {
      category: "Fahrzeugdaten",
      icon: Gauge,
      data: [
        "Geschwindigkeit & Beschleunigung",
        "Motor- und Getriebedaten",
        "Kraftstoffverbrauch & Emissionen",
        "Wartungsintervalle & Fehlercodes",
        "Fahrstil & Fahrverhalten"
      ],
      risk: "high"
    },
    {
      category: "Standortdaten",
      icon: MapPin,
      data: [
        "GPS-Position in Echtzeit",
        "Bewegungsprofile & Routen",
        "Parkplätze & Aufenthaltsorte",
        "Geschwindigkeitsüberschreitungen",
        "Grenzübertritte"
      ],
      risk: "critical"
    },
    {
      category: "Personendaten",
      icon: Users,
      data: [
        "Fahrer-Identifikation",
        "Kontakte & Anruflisten",
        "Musikpräferenzen",
        "Sprachaufzeichnungen",
        "Biometrische Daten"
      ],
      risk: "high"
    },
    {
      category: "Umgebungsdaten",
      icon: Camera,
      data: [
        "Kamera-Aufnahmen (360°)",
        "Radar- & LIDAR-Daten",
        "Verkehrssituation",
        "Wetterbedingungen",
        "Straßenzustand"
      ],
      risk: "medium"
    }
  ];
  const connectedCarFeatures = [
    {
      feature: "Over-the-Air Updates",
      description: "Software-Updates ohne Werkstattbesuch",
      privacy: "Übertragung von Fahrzeugdaten an Hersteller",
      icon: Download
    },
    {
      feature: "Remote Services",
      description: "Fahrzeugsteuerung per App",
      privacy: "Standortzugriff und Fahrzeugstatus",
      icon: Smartphone
    },
    {
      feature: "Predictive Maintenance",
      description: "Vorhersage von Wartungsbedarf",
      privacy: "Analyse von Fahrverhalten und Nutzung",
      icon: Wrench
    },
    {
      feature: "Emergency Call (eCall)",
      description: "Automatischer Notruf bei Unfall",
      privacy: "Übertragung von Standort und Fahrzeugdaten",
      icon: Phone
    }
  ];
  const complianceRequirements = [
    {
      regulation: "DSGVO / GDPR",
      requirements: [
        "Transparenz über Datenverarbeitung",
        "Einwilligung für nicht-notwendige Datenerhebung",
        "Recht auf Löschung (soweit technisch möglich)",
        "Datenportabilität für persönliche Daten"
      ],
      deadline: "Seit Mai 2018"
    },
    {
      regulation: "UN-R 155/156 (Cybersecurity)",
      requirements: [
        "Cybersecurity Management System",
        "Software Update Management System",
        "Risk Assessment für Fahrzeugsysteme",
        "Incident Response Prozesse"
      ],
      deadline: "Ab Juli 2024 für neue Fahrzeugtypen"
    },
    {
      regulation: "Data Act (geplant)",
      requirements: [
        "Zugang zu Fahrzeugdaten für Nutzer",
        "Datenportabilität zwischen Diensten",
        "Faire Datennutzungsverträge",
        "B2B & B2G Datenaustausch"
      ],
      deadline: "Voraussichtlich 2025"
    }
  ];
  const renderOverview = () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-2 lg:grid-cols-4", children: [
      { label: "Datenvolumen/Fahrzeug", value: "25 GB/Stunde", icon: Database, trend: "+150%" },
      { label: "Sensoren/Fahrzeug", value: "100-200", icon: CircuitBoard, trend: "+40%" },
      { label: "Software-Codezeilen", value: "100+ Mio.", icon: Code, trend: "+200%" },
      { label: "Connected Cars 2025", value: "75%", icon: Wifi, trend: "Prognose" }
    ].map((stat, index) => /* @__PURE__ */ jsxs(Card, { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx(stat.icon, { className: "h-8 w-8 text-blue-600" }),
        /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: stat.trend })
      ] }) }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold", children: stat.value }),
        /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: stat.label })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent pointer-events-none" })
    ] }, index)) }),
    /* @__PURE__ */ jsxs(Card, { className: "border-blue-200 bg-blue-50/50", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5 text-blue-600" }),
        "Datenschutz-Herausforderungen in der Automobilindustrie"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Car, { className: "h-4 w-4" }),
            "Technische Komplexität"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Über 100 ECUs (Electronic Control Units) pro Fahrzeug" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Heterogene Systemlandschaft verschiedener Zulieferer" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Lange Produktlebenszyklen (10-15 Jahre)" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }),
            "Regulatorische Anforderungen"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-600 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Konflikt zwischen Funktionalität und Privacy" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-600 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Internationale Datentransfers bei globalen Herstellern" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-600 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Unklare Verantwortlichkeiten in der Lieferkette" })
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Datenerhebung im Fahrzeug" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: automotiveDataTypes.map((type, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx("div", { className: cn(
            "p-2 rounded-lg",
            type.risk === "critical" && "bg-red-100",
            type.risk === "high" && "bg-orange-100",
            type.risk === "medium" && "bg-yellow-100"
          ), children: /* @__PURE__ */ jsx(type.icon, { className: cn(
            "h-5 w-5",
            type.risk === "critical" && "text-red-600",
            type.risk === "high" && "text-orange-600",
            type.risk === "medium" && "text-yellow-600"
          ) }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: type.category }),
              /* @__PURE__ */ jsx(Badge, { variant: type.risk === "critical" ? "destructive" : type.risk === "high" ? "destructive" : "secondary", className: "text-xs", children: type.risk === "critical" ? "Kritisch" : type.risk === "high" ? "Hoch" : "Mittel" })
            ] }),
            /* @__PURE__ */ jsx("ul", { className: "text-sm text-muted-foreground space-y-1", children: type.data.map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "text-xs", children: "•" }),
              item
            ] }, idx)) })
          ] })
        ] }, index)) }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Stakeholder im Automotive-Ökosystem" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
          { name: "OEM (Fahrzeughersteller)", role: "Hauptverantwortlicher für Datenverarbeitung", icon: Building2 },
          { name: "Tier-1/2 Zulieferer", role: "Komponenten mit eigener Datenverarbeitung", icon: Package },
          { name: "Werkstätten", role: "Zugriff auf Diagnose- und Wartungsdaten", icon: Wrench },
          { name: "Versicherungen", role: "Telematik-Tarife und Schadensanalyse", icon: Shield },
          { name: "Behörden", role: "Zugriff bei Unfällen oder Ermittlungen", icon: Building2 },
          { name: "App-Entwickler", role: "Third-Party Services und Infotainment", icon: Smartphone }
        ].map((stakeholder, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50", children: [
          /* @__PURE__ */ jsx(stakeholder.icon, { className: "h-5 w-5 text-blue-600" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: stakeholder.name }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: stakeholder.role })
          ] })
        ] }, index)) }) })
      ] })
    ] })
  ] });
  const renderConnectedCar = () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Card, { className: "border-green-200", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "bg-green-50", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Wifi, { className: "h-5 w-5 text-green-600" }),
        "Connected Car Services & Datenschutz"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsx("div", { className: "grid gap-4 md:grid-cols-2", children: connectedCarFeatures.map((feature, index) => /* @__PURE__ */ jsx("div", { className: "border rounded-lg p-4 hover:shadow-md transition-shadow", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-100 rounded-lg", children: /* @__PURE__ */ jsx(feature.icon, { className: "h-5 w-5 text-green-600" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-1", children: feature.feature }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground mb-2", children: feature.description }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 text-orange-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { className: "text-orange-700 dark:text-orange-400", children: feature.privacy })
          ] })
        ] })
      ] }) }, index)) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Cloud, { className: "h-5 w-5" }),
          "Backend-Infrastruktur"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Server, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Zentrale Datenplattformen der Hersteller" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Globale Datenspeicherung und -verarbeitung" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Security Operations Center (SOC)" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Database, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Big Data Analytics für Produktverbesserung" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Radio, { className: "h-5 w-5" }),
          "Kommunikationstechnologien"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Wifi, { className: "h-4 w-4 text-green-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "4G/5G Mobilfunk für Echtzeitdaten" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Waves, { className: "h-4 w-4 text-green-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "V2X (Vehicle-to-Everything)" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Satellite, { className: "h-4 w-4 text-green-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Satellitennavigation (GPS, Galileo)" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Radio, { className: "h-4 w-4 text-green-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Bluetooth/WiFi für lokale Dienste" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Lock, { className: "h-5 w-5" }),
          "Sicherheitsmaßnahmen"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Key, { className: "h-4 w-4 text-red-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Ende-zu-Ende Verschlüsselung" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4 text-red-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Secure Boot & Code Signing" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Fingerprint, { className: "h-4 w-4 text-red-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Authentifizierung & Autorisierung" })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-red-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Intrusion Detection Systems" })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Datenschutz by Design für Connected Services" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 rounded-lg", children: [
        /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4" }),
          "Technische Maßnahmen"
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-3 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
              /* @__PURE__ */ jsx("span", { children: "Datenminimierung durch Edge Computing" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
              /* @__PURE__ */ jsx("span", { children: "Anonymisierung von Bewegungsprofilen" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
              /* @__PURE__ */ jsx("span", { children: "Pseudonymisierung von Nutzeridentitäten" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
              /* @__PURE__ */ jsx("span", { children: "Lokale Datenverarbeitung wo möglich" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
              /* @__PURE__ */ jsx("span", { children: "Automatische Datenlöschung nach Zweckerfüllung" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600" }),
              /* @__PURE__ */ jsx("span", { children: "Granulare Einwilligungsoptionen" })
            ] })
          ] })
        ] })
      ] }) }) })
    ] })
  ] });
  const renderFahrzeugdaten = () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Card, { className: "border-orange-200", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "bg-orange-50", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Database, { className: "h-5 w-5 text-orange-600" }),
        "Kategorisierung von Fahrzeugdaten"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 border rounded-lg", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(User, { className: "h-4 w-4" }),
              "Personenbezogene Daten"
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
              /* @__PURE__ */ jsx("li", { children: "• Fahrername & Kontaktdaten" }),
              /* @__PURE__ */ jsx("li", { children: "• Fahrzeug-ID verknüpft mit Halter" }),
              /* @__PURE__ */ jsx("li", { children: "• Zahlungsinformationen" }),
              /* @__PURE__ */ jsx("li", { children: "• Biometrische Daten (Stimme, Gesicht)" }),
              /* @__PURE__ */ jsx("li", { children: "• Smartphone-Kontakte" })
            ] }),
            /* @__PURE__ */ jsx(Badge, { className: "mt-2", variant: "destructive", children: "DSGVO relevant" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border rounded-lg", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4" }),
              "Standortbezogene Daten"
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
              /* @__PURE__ */ jsx("li", { children: "• GPS-Koordinaten" }),
              /* @__PURE__ */ jsx("li", { children: "• Fahrtrouten & Ziele" }),
              /* @__PURE__ */ jsx("li", { children: "• Parkplätze & Aufenthaltsdauer" }),
              /* @__PURE__ */ jsx("li", { children: "• Geschwindigkeit je Streckenabschnitt" }),
              /* @__PURE__ */ jsx("li", { children: "• Grenzübergänge" })
            ] }),
            /* @__PURE__ */ jsx(Badge, { className: "mt-2", variant: "destructive", children: "Besonders sensibel" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border rounded-lg", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Gauge, { className: "h-4 w-4" }),
              "Technische Daten"
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
              /* @__PURE__ */ jsx("li", { children: "• Motordaten & Diagnose" }),
              /* @__PURE__ */ jsx("li", { children: "• Verschleißzustand" }),
              /* @__PURE__ */ jsx("li", { children: "• Fehlercodes" }),
              /* @__PURE__ */ jsx("li", { children: "• Kraftstoffverbrauch" }),
              /* @__PURE__ */ jsx("li", { children: "• Reifendruck & Temperatur" })
            ] }),
            /* @__PURE__ */ jsx(Badge, { className: "mt-2", variant: "secondary", children: "Meist anonymisierbar" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-yellow-50 rounded-lg border border-yellow-200", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-yellow-600" }),
            "Besondere Risiken bei Fahrzeugdaten"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-3 md:grid-cols-2 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Profilbildung:" }),
              /* @__PURE__ */ jsxs("ul", { className: "mt-1 space-y-1 ml-4", children: [
                /* @__PURE__ */ jsx("li", { children: "• Fahrverhalten & Persönlichkeit" }),
                /* @__PURE__ */ jsx("li", { children: "• Wirtschaftliche Situation" }),
                /* @__PURE__ */ jsx("li", { children: "• Soziale Kontakte & Beziehungen" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("strong", { children: "Missbrauchspotential:" }),
              /* @__PURE__ */ jsxs("ul", { className: "mt-1 space-y-1 ml-4", children: [
                /* @__PURE__ */ jsx("li", { children: "• Überwachung & Stalking" }),
                /* @__PURE__ */ jsx("li", { children: "• Diskriminierung bei Versicherungen" }),
                /* @__PURE__ */ jsx("li", { children: "• Manipulation von Beweismitteln" })
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Datenflüsse im Fahrzeug" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-5 top-8 bottom-0 w-0.5 bg-gray-300" }),
          [
            { title: "Sensoren", desc: "Erfassung von Rohdaten", icon: CircuitBoard },
            { title: "ECUs", desc: "Verarbeitung & Aggregation", icon: Cpu },
            { title: "Gateway", desc: "Zentrale Kommunikation", icon: Network },
            { title: "Backend", desc: "Cloud-Speicherung & Analyse", icon: Cloud }
          ].map((step, index) => /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-4 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "z-10 p-2 bg-white border-2 border-gray-300 rounded-full", children: /* @__PURE__ */ jsx(step.icon, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1 p-3 bg-gray-50 rounded-lg", children: [
              /* @__PURE__ */ jsx("h5", { className: "font-semibold", children: step.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: step.desc })
            ] })
          ] }, index))
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Zugriffsrechte verwalten" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
          { entity: "Fahrzeughalter", access: "Vollzugriff auf eigene Daten", level: "full" },
          { entity: "Werkstatt", access: "Diagnosedaten bei Wartung", level: "limited" },
          { entity: "Hersteller", access: "Aggregierte & anonymisierte Daten", level: "restricted" },
          { entity: "Versicherung", access: "Nach expliziter Einwilligung", level: "consent" },
          { entity: "Behörden", access: "Bei rechtlicher Grundlage", level: "legal" }
        ].map((access, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 border rounded-lg", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: access.entity }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: access.access })
          ] }),
          /* @__PURE__ */ jsx(Badge, { variant: access.level === "full" ? "default" : access.level === "limited" ? "secondary" : access.level === "restricted" ? "outline" : access.level === "consent" ? "outline" : "destructive", children: access.level === "full" ? "Vollzugriff" : access.level === "limited" ? "Begrenzt" : access.level === "restricted" ? "Eingeschränkt" : access.level === "consent" ? "Mit Einwilligung" : "Rechtliche Basis" })
        ] }, index)) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Best Practices für Datenmanagement" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Database, { className: "h-4 w-4" }),
            "Datenspeicherung"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Klare Trennung von personen- und fahrzeugbezogenen Daten" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Verschlüsselung at rest und in transit" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Regelmäßige Löschung nach definierten Fristen" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }),
            "Datenschutzkonzepte"
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Privacy Dashboard im Fahrzeug" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Opt-in/Opt-out für nicht-kritische Services" })
            ] }),
            /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
              /* @__PURE__ */ jsx("span", { children: "Transparente Datenschutzerklärungen" })
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
  const renderTelematik = () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Card, { className: "border-purple-200", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "bg-purple-50", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Navigation, { className: "h-5 w-5 text-purple-600" }),
        "Telematik & GPS-Systeme"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "eCall-System (Pflicht seit 2018)" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-50 rounded-lg", children: [
              /* @__PURE__ */ jsx("strong", { className: "text-red-700", children: "Automatische Datenübertragung bei:" }),
              /* @__PURE__ */ jsxs("ul", { className: "mt-1 space-y-1 ml-4", children: [
                /* @__PURE__ */ jsx("li", { children: "• Schweren Unfällen (Airbag-Auslösung)" }),
                /* @__PURE__ */ jsx("li", { children: "• Manueller Aktivierung (SOS-Taste)" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 rounded-lg", children: [
              /* @__PURE__ */ jsx("strong", { className: "text-blue-700", children: "Übertragene Daten:" }),
              /* @__PURE__ */ jsxs("ul", { className: "mt-1 space-y-1 ml-4", children: [
                /* @__PURE__ */ jsx("li", { children: "• GPS-Position des Unfalls" }),
                /* @__PURE__ */ jsx("li", { children: "• Fahrtrichtung" }),
                /* @__PURE__ */ jsx("li", { children: "• Fahrzeugtyp & Antriebsart" }),
                /* @__PURE__ */ jsx("li", { children: "• Anzahl der Insassen" }),
                /* @__PURE__ */ jsx("li", { children: "• Zeitstempel" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Kommerzielle Telematik-Dienste" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
            { service: "Pay-as-you-drive Versicherung", data: "Fahrverhalten, Strecken, Zeiten" },
            { service: "Flottenmanagement", data: "Echtzeit-Tracking, Fahreridentifikation" },
            { service: "Stolen Vehicle Tracking", data: "Permanente Standortüberwachung" },
            { service: "Predictive Maintenance", data: "Fahrzeugzustand, Nutzungsmuster" }
          ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "p-3 border rounded-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: item.service }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: [
              /* @__PURE__ */ jsx(Eye, { className: "inline h-3 w-3 mr-1" }),
              item.data
            ] })
          ] }, index)) })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5" }),
          "Standortgenauigkeit"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "GPS Standard" }),
            /* @__PURE__ */ jsx(Badge, { children: "~5-10m" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "GPS + GLONASS" }),
            /* @__PURE__ */ jsx(Badge, { children: "~3-5m" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "RTK/DGPS" }),
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "~1-2cm" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 p-3 bg-orange-50 rounded-lg text-sm", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "inline h-4 w-4 text-orange-600 mr-1" }),
            "Höhere Genauigkeit = Größeres Datenschutzrisiko"
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5" }),
          "Datenaufbewahrung"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-50 rounded-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-sm mb-1", children: "eCall-Daten" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "13 Stunden nach Notruf" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-50 rounded-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-sm mb-1", children: "Telematik-Versicherung" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "3-10 Jahre (vertragsabhängig)" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-50 rounded-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-sm mb-1", children: "Hersteller-Backend" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Oft unbegrenzt (anonymisiert)" })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(UserCheck, { className: "h-5 w-5" }),
          "Nutzerrechte"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Deaktivierung kommerzieller Dienste" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "eCall nicht deaktivierbar (gesetzlich)" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Auskunft über gespeicherte Daten" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-orange-600 mt-0.5" }),
            /* @__PURE__ */ jsx("span", { children: "Löschung nur teilweise möglich" })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Datenschutzkonformer Einsatz von Telematik" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 border rounded-lg", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-green-600" }),
              "Technische Schutzmaßnahmen"
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Verschlüsselung der GPS-Daten" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Pseudonymisierung von Bewegungsprofilen" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Geofencing für sensible Bereiche" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-green-600", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Automatisches Löschen alter Standortdaten" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 border rounded-lg", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-blue-600" }),
              "Organisatorische Maßnahmen"
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Klare Zweckbindung definieren" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Transparente Nutzerinformation" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Einwilligung für kommerzielle Nutzung" })
              ] }),
              /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "✓" }),
                /* @__PURE__ */ jsx("span", { children: "Regelmäßige Datenschutz-Audits" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 bg-yellow-50 rounded-lg", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-yellow-600" }),
            "Besondere Vorsicht bei"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2 md:grid-cols-2 text-sm", children: [
            /* @__PURE__ */ jsx("div", { children: "• Firmenwagen mit Privatnutzung" }),
            /* @__PURE__ */ jsx("div", { children: "• Grenzüberschreitenden Fahrten" }),
            /* @__PURE__ */ jsx("div", { children: "• Weitergabe an Dritte (z.B. Versicherungen)" }),
            /* @__PURE__ */ jsx("div", { children: "• Langzeitspeicherung von Bewegungsprofilen" })
          ] })
        ] })
      ] }) })
    ] })
  ] });
  const renderInfotainment = () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Card, { className: "border-indigo-200", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "bg-indigo-50", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Smartphone, { className: "h-5 w-5 text-indigo-600" }),
        "Infotainment & Connectivity"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Smartphone-Integration" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 border rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsx(Smartphone, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Apple CarPlay / Android Auto" })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "text-xs text-muted-foreground space-y-1 ml-6", children: [
                /* @__PURE__ */ jsx("li", { children: "• Zugriff auf Kontakte & Anrufliste" }),
                /* @__PURE__ */ jsx("li", { children: "• Nachrichten & Benachrichtigungen" }),
                /* @__PURE__ */ jsx("li", { children: "• Standort & Navigation" }),
                /* @__PURE__ */ jsx("li", { children: "• Musik & Medienbibliothek" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 border rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsx(Wifi, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Bluetooth & WiFi" })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "text-xs text-muted-foreground space-y-1 ml-6", children: [
                /* @__PURE__ */ jsx("li", { children: "• Automatische Gerätekopplung" }),
                /* @__PURE__ */ jsx("li", { children: "• Kontaktsynchronisation" }),
                /* @__PURE__ */ jsx("li", { children: "• Hotspot-Funktionalität" }),
                /* @__PURE__ */ jsx("li", { children: "• App-Datenübertragung" })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Sprachassistenten" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-orange-50 rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsx(Mic, { className: "h-4 w-4 text-orange-600" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Datenerfassung" })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Sprachbefehle & Aktivierungswort" }),
                /* @__PURE__ */ jsx("li", { children: "• Umgebungsgeräusche" }),
                /* @__PURE__ */ jsx("li", { children: "• Stimmprofile der Nutzer" }),
                /* @__PURE__ */ jsx("li", { children: "• Kontext der Anfragen" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-50 rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-red-600" }),
                /* @__PURE__ */ jsx("span", { className: "font-medium text-sm", children: "Risiken" })
              ] }),
              /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Dauerhafte Mikrofonaktivierung" }),
                /* @__PURE__ */ jsx("li", { children: "• Cloud-Verarbeitung der Sprache" }),
                /* @__PURE__ */ jsx("li", { children: "• Profilbildung über Anfragen" }),
                /* @__PURE__ */ jsx("li", { children: "• Mithören durch Dritte" })
              ] })
            ] })
          ] })
        ] }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Camera, { className: "h-5 w-5" }),
          "Kamera-Systeme"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: "Innenraumkameras" }),
          /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: "• Fahrerüberwachung (Müdigkeit)" }),
            /* @__PURE__ */ jsx("li", { children: "• Gesichtserkennung" }),
            /* @__PURE__ */ jsx("li", { children: "• Videotelefonie" }),
            /* @__PURE__ */ jsx("li", { children: "• Unfallaufzeichnung" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "font-medium text-sm mt-3", children: "Außenkameras" }),
          /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1 text-muted-foreground", children: [
            /* @__PURE__ */ jsx("li", { children: "• 360° Rundumsicht" }),
            /* @__PURE__ */ jsx("li", { children: "• Dashcam-Funktion" }),
            /* @__PURE__ */ jsx("li", { children: "• Verkehrszeichenerkennung" }),
            /* @__PURE__ */ jsx("li", { children: "• Fußgängererkennung" })
          ] }),
          /* @__PURE__ */ jsx(Badge, { variant: "destructive", className: "mt-2 text-xs", children: "Hohe Datenschutzrelevanz" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(HardDrive, { className: "h-5 w-5" }),
          "Lokale Datenspeicherung"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-50 rounded-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: "Nutzerprofile" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Sitzposition, Klimaeinstellungen, Favoriten" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-50 rounded-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: "Navigationsverlauf" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Letzte Ziele, Heimatadresse, POIs" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-50 rounded-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: "Mediendaten" }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Gekoppelte Geräte, Wiedergabelisten" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-orange-600 mt-2", children: [
            /* @__PURE__ */ jsx(AlertTriangle, { className: "inline h-3 w-3 mr-1" }),
            "Daten bleiben oft nach Fahrzeugverkauf"
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Cloud, { className: "h-5 w-5" }),
          "Cloud-Services"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Online-Dienste" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Wetter, News, Verkehr" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 text-green-600 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "App-Store" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Third-Party Apps" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
            /* @__PURE__ */ jsx(Server, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Backup & Sync" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Einstellungen, Favoriten" })
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Datenschutz-Checkliste für Infotainment" }) }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(UserCheck, { className: "h-4 w-4" }),
              "Vor der Nutzung"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2", children: [
              "Datenschutzerklärung des Systems prüfen",
              "Nur notwendige Berechtigungen erteilen",
              "Automatische Synchronisation deaktivieren",
              "Sprachassistent-Einstellungen anpassen"
            ].map((item, index) => /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 text-gray-400" }),
              /* @__PURE__ */ jsx("span", { children: item })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Truck, { className: "h-4 w-4" }),
              "Vor Fahrzeugweitergabe"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-2", children: [
              "Alle persönlichen Daten löschen",
              "Bluetooth-Kopplungen entfernen",
              "Navigationsverlauf zurücksetzen",
              "Auf Werkseinstellungen zurücksetzen"
            ].map((item, index) => /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2 text-sm", children: [
              /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 text-gray-400" }),
              /* @__PURE__ */ jsx("span", { children: item })
            ] }, index)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-blue-50 rounded-lg", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4 text-blue-600" }),
            "Empfehlungen"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-2 md:grid-cols-2 text-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "Gastmodus für temporäre Nutzer verwenden" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "Regelmäßige Privacy-Einstellungen überprüfen" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "Kritische Apps nicht mit Fahrzeug verbinden" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "•" }),
              /* @__PURE__ */ jsx("span", { children: "Offline-Alternativen bevorzugen" })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] });
  const renderCompliance = () => /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Card, { className: "border-red-200", children: [
      /* @__PURE__ */ jsx(CardHeader, { className: "bg-red-50", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Scale, { className: "h-5 w-5 text-red-600" }),
        "Regulatorische Anforderungen"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: complianceRequirements.map((reg, index) => /* @__PURE__ */ jsxs("div", { className: "border rounded-lg p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-lg", children: reg.regulation }),
          /* @__PURE__ */ jsx(Badge, { variant: "outline", children: reg.deadline })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid gap-2", children: reg.requirements.map((req, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { children: req })
        ] }, idx)) })
      ] }, index)) }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-6 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Verantwortlichkeiten nach DSGVO" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-3 border rounded-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4 text-blue-600" }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Fahrzeughersteller (OEM)" })
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "text-sm space-y-1 text-muted-foreground", children: [
              /* @__PURE__ */ jsx("li", { children: "• Hauptverantwortlicher für Fahrzeugsysteme" }),
              /* @__PURE__ */ jsx("li", { children: "• Privacy by Design bei Entwicklung" }),
              /* @__PURE__ */ jsx("li", { children: "• Datenschutz-Folgenabschätzung" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-3 border rounded-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsx(Package, { className: "h-4 w-4 text-green-600" }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Zulieferer" })
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "text-sm space-y-1 text-muted-foreground", children: [
              /* @__PURE__ */ jsx("li", { children: "• Auftragsverarbeiter für OEM" }),
              /* @__PURE__ */ jsx("li", { children: "• Eigene Verantwortung bei eigenen Services" }),
              /* @__PURE__ */ jsx("li", { children: "• Technische Sicherheitsmaßnahmen" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-3 border rounded-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-purple-600" }),
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Händler & Werkstätten" })
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "text-sm space-y-1 text-muted-foreground", children: [
              /* @__PURE__ */ jsx("li", { children: "• Verantwortlich für Kundendaten" }),
              /* @__PURE__ */ jsx("li", { children: "• Löschung bei Fahrzeugweitergabe" }),
              /* @__PURE__ */ jsx("li", { children: "• Schulung des Personals" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Technische & Organisatorische Maßnahmen" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-sm flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }),
              "Security by Design"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pl-6 space-y-1 text-sm", children: [
              /* @__PURE__ */ jsx("div", { children: "• Secure Boot & Code Signing" }),
              /* @__PURE__ */ jsx("div", { children: "• Hardware Security Module (HSM)" }),
              /* @__PURE__ */ jsx("div", { children: "• Intrusion Detection System" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-sm flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4" }),
              "Zugriffskontrolle"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pl-6 space-y-1 text-sm", children: [
              /* @__PURE__ */ jsx("div", { children: "• Role-Based Access Control" }),
              /* @__PURE__ */ jsx("div", { children: "• Multi-Faktor-Authentifizierung" }),
              /* @__PURE__ */ jsx("div", { children: "• Audit-Logging" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-sm flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileCheck, { className: "h-4 w-4" }),
              "Dokumentation"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "pl-6 space-y-1 text-sm", children: [
              /* @__PURE__ */ jsx("div", { children: "• Verzeichnis von Verarbeitungstätigkeiten" }),
              /* @__PURE__ */ jsx("div", { children: "• Datenschutz-Folgenabschätzung" }),
              /* @__PURE__ */ jsx("div", { children: "• Incident Response Plan" })
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Umsetzungsfahrplan für Automotive-Unternehmen" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300" }),
          [
            {
              phase: "Assessment Phase",
              duration: "2-3 Monate",
              tasks: [
                "Bestandsaufnahme aller Datenflüsse",
                "Identifikation von Risiken",
                "Gap-Analyse zu Anforderungen"
              ],
              icon: Search,
              color: "blue"
            },
            {
              phase: "Design Phase",
              duration: "3-4 Monate",
              tasks: [
                "Privacy by Design Konzepte",
                "Technische Architektur",
                "Prozessdefinition"
              ],
              icon: Lightbulb,
              color: "green"
            },
            {
              phase: "Implementation",
              duration: "6-12 Monate",
              tasks: [
                "Technische Umsetzung",
                "Schulung der Mitarbeiter",
                "Pilotprojekte"
              ],
              icon: Settings,
              color: "orange"
            },
            {
              phase: "Validation",
              duration: "Kontinuierlich",
              tasks: [
                "Audits & Zertifizierung",
                "Monitoring & Verbesserung",
                "Incident Management"
              ],
              icon: CheckCircle2,
              color: "purple"
            }
          ].map((phase, index) => /* @__PURE__ */ jsxs("div", { className: "relative flex items-start gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "z-10 p-3 rounded-full border-4 border-white",
              phase.color === "blue" && "bg-blue-100",
              phase.color === "green" && "bg-green-100",
              phase.color === "orange" && "bg-orange-100",
              phase.color === "purple" && "bg-purple-100"
            ), children: /* @__PURE__ */ jsx(phase.icon, { className: cn(
              "h-5 w-5",
              phase.color === "blue" && "text-blue-600",
              phase.color === "green" && "text-green-600",
              phase.color === "orange" && "text-orange-600",
              phase.color === "purple" && "text-purple-600"
            ) }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: phase.phase }),
                /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: phase.duration })
              ] }),
              /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: phase.tasks.map((task, idx) => /* @__PURE__ */ jsxs("li", { className: "text-sm text-muted-foreground flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("span", { className: "w-1 h-1 bg-gray-400 rounded-full" }),
                task
              ] }, idx)) })
            ] })
          ] }, index))
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-50 rounded-lg", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-green-600" }),
              "Vorteile der Compliance"
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
              /* @__PURE__ */ jsx("li", { children: "• Wettbewerbsvorteil durch Vertrauen" }),
              /* @__PURE__ */ jsx("li", { children: "• Vermeidung von Bußgeldern" }),
              /* @__PURE__ */ jsx("li", { children: "• Internationale Marktfähigkeit" }),
              /* @__PURE__ */ jsx("li", { children: "• Innovation durch Privacy by Design" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-50 rounded-lg", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Target, { className: "h-4 w-4 text-orange-600" }),
              "Key Success Factors"
            ] }),
            /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
              /* @__PURE__ */ jsx("li", { children: "• Management Commitment" }),
              /* @__PURE__ */ jsx("li", { children: "• Cross-funktionale Teams" }),
              /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Verbesserung" }),
              /* @__PURE__ */ jsx("li", { children: "• Transparente Kommunikation" })
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-900", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Automotive Datenschutz – Connected Cars DSGVO-konform" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Datenschutz-Leitfaden für die Automobilindustrie. Connected Cars, Telematik & Infotainment DSGVO-konform gestalten. Compliance für OEMs & Zulieferer." }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://datenschutz-assistent.de/wissen/branchen/automotive-datenschutz" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "flex-grow", children: [
      /* @__PURE__ */ jsx("section", { className: "bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white", children: /* @__PURE__ */ jsx("div", { className: "container px-4 py-20", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-6", children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-white/10 backdrop-blur-sm rounded-2xl", children: /* @__PURE__ */ jsx(Car, { className: "h-16 w-16 text-white" }) }) }),
            /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Datenschutz in der Automobilindustrie" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-blue-100", children: "Von Connected Cars bis Autonomous Driving: Navigieren Sie sicher durch die komplexen Datenschutzanforderungen der modernen Mobilität" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
              /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-white text-blue-900 hover:bg-blue-50", children: [
                /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                "Automotive DSGVO-Guide"
              ] }),
              /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white/10", children: [
                /* @__PURE__ */ jsx(Phone, { className: "mr-2 h-5 w-5" }),
                "Beratung anfragen"
              ] })
            ] })
          ]
        }
      ) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 bg-gray-50 dark:bg-gray-800", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-gray-600" }),
          "Inhaltsverzeichnis"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsx("ul", { className: "grid md:grid-cols-2 gap-3", children: navigationItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => scrollToSection(item.id),
            className: "text-left w-full px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors flex items-center gap-3 group",
            children: [
              /* @__PURE__ */ jsx(item.icon, { className: "h-5 w-5 text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-400" }),
              /* @__PURE__ */ jsx("span", { className: "text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100", children: item.label })
            ]
          }
        ) }, item.id)) }) }) })
      ] }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 bg-white dark:bg-gray-800 border-b", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: [
        { label: "Daten pro Fahrzeug/Tag", value: "25 GB", icon: Database },
        { label: "Sensoren im Fahrzeug", value: "100+", icon: CircuitBoard },
        { label: "DSGVO-Bußgeldrisiko", value: "4% Umsatz", icon: Euro },
        { label: "Compliance-Aufwand", value: "+40%", icon: TrendingUp }
      ].map((stat, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay: index * 0.1 },
          className: "text-center",
          children: [
            /* @__PURE__ */ jsx(stat.icon, { className: "h-8 w-8 mx-auto mb-2 text-blue-600" }),
            /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: stat.value }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: stat.label })
          ]
        },
        index
      )) }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide", children: navigationItems.map((item) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            scrollToSection(item.id);
            setActiveSection(item.id);
          },
          className: cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
            activeSection === item.id ? "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800" : "hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-700 dark:hover:text-blue-400",
            "border",
            activeSection === item.id ? "border-blue-200 dark:border-blue-800" : "border-transparent hover:border-blue-200 dark:hover:border-blue-800"
          ),
          children: [
            /* @__PURE__ */ jsx(item.icon, { className: cn(
              "h-4 w-4",
              activeSection === item.id && "text-blue-600 dark:text-blue-500"
            ) }),
            /* @__PURE__ */ jsx("span", { className: cn(
              "text-sm font-medium",
              activeSection === item.id && "text-blue-700 dark:text-blue-400"
            ), children: item.label })
          ]
        },
        item.id
      )) }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-20", children: [
          /* @__PURE__ */ jsxs("section", { id: "ueberblick", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Die Datenrevolution im Automobil"
              }
            ),
            renderOverview()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "connected-car", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Connected Car Services"
              }
            ),
            renderConnectedCar()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "fahrzeugdaten", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Fahrzeugdaten & Datenkategorien"
              }
            ),
            renderFahrzeugdaten()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "telematik", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Telematik & GPS-Systeme"
              }
            ),
            renderTelematik()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "infotainment", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Infotainment & Connectivity"
              }
            ),
            renderInfotainment()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "compliance", className: "space-y-8", style: { scrollMarginTop: "96px" }, children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Compliance & Umsetzung"
              }
            ),
            renderCompliance()
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-20", children: /* @__PURE__ */ jsx(Card, { className: "bg-gradient-to-br from-blue-600 to-indigo-700 text-white border-0", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-12 text-center", children: [
          /* @__PURE__ */ jsx(Car, { className: "h-16 w-16 mx-auto mb-6 text-white/90" }),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Bereit für die Zukunft der Mobilität?" }),
          /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-blue-100 max-w-2xl mx-auto", children: "Lassen Sie uns gemeinsam Ihre Datenschutz-Strategie für Connected und Autonomous Vehicles entwickeln." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
            /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-white text-blue-700 hover:bg-blue-50", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
              "Beratungstermin vereinbaren"
            ] }),
            /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white/10", children: [
              /* @__PURE__ */ jsx(FileText, { className: "mr-2 h-5 w-5" }),
              "Whitepaper anfordern"
            ] })
          ] })
        ] }) }) }),
        /* @__PURE__ */ jsxs(Card, { className: "mt-12", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ExternalLink, { className: "h-5 w-5 text-blue-600" }),
            "Weiterführende Ressourcen"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/industrie-40-datenschutz", className: "block", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors", children: [
              /* @__PURE__ */ jsx(Gauge, { className: "h-5 w-5 text-orange-600 mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Industrie 4.0" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Smart Factory & IoT" })
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/smart-grid-compliance", className: "block", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-50 rounded-lg border border-green-200 hover:border-green-300 transition-colors", children: [
              /* @__PURE__ */ jsx(Wifi, { className: "h-5 w-5 text-green-600 mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Smart Grid" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Energie & Datenschutz" })
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/wissen/compliance/dsgvo", className: "block", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors", children: [
              /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-purple-600 mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "DSGVO Guide" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Compliance Leitfaden" })
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/wissen/technologie/ki", className: "block", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors", children: [
              /* @__PURE__ */ jsx(BrainCircuit, { className: "h-5 w-5 text-red-600 mb-2" }),
              /* @__PURE__ */ jsx("div", { className: "font-medium", children: "KI & Datenschutz" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "AI Act & DSGVO" })
            ] }) })
          ] }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    showBackToTop && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: "fixed bottom-8 right-8 z-50 p-3 bg-blue-600 dark:bg-blue-700 text-white rounded-full shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-all",
        "aria-label": "Zurück nach oben",
        children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-5 w-5" })
      }
    )
  ] });
};
export {
  AutomotiveDatenschutz as default
};
