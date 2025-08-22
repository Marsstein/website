import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { Home, CheckCircle, Laptop, Download, Shield, Scale, Lock, Monitor, Mail, Settings, CheckSquare, BookOpen, AlertTriangle, Eye, Cloud, Smartphone, FileText, Users, Euro, ChevronDown, ChevronRight, HardDrive, LockKeyhole, Key, Router, Wifi, Server, Archive, Clock, FileSearch, AlertCircle, Camera, MessageSquare, Target, Award, Activity, TrendingUp, Calendar, HeartHandshake, Phone, Square, Zap, HandshakeIcon } from "lucide-react";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { c as cn } from "../main.mjs";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import "class-variance-authority";
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
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
const DatenschutzHomeofficeComprehensive = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [expandedScenarios, setExpandedScenarios] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const navigationItems = [
    { id: "ueberblick", label: "Überblick", icon: Shield },
    { id: "rechtslage", label: "Rechtslage", icon: Scale },
    { id: "technische-sicherheit", label: "Technische Sicherheit", icon: Lock },
    { id: "arbeitsplatz", label: "Arbeitsplatz", icon: Monitor },
    { id: "kommunikation", label: "Kommunikation", icon: Mail },
    { id: "umsetzung", label: "Umsetzung", icon: Settings },
    { id: "checkliste", label: "Checkliste", icon: CheckSquare },
    { id: "ressourcen", label: "Ressourcen", icon: BookOpen }
  ];
  const complianceStats = [
    { label: "Homeoffice-Plätze", value: "25%", trend: "der Arbeitsplätze" },
    { label: "Datenpannen", value: "43%", trend: "durch Remote Work" },
    { label: "Bußgeldrisiko", value: "20M€", trend: "max. Strafe" }
  ];
  const scenarioTemplates = {
    homeOfficeSetup: `
// Homeoffice Arbeitsplatz DSGVO-konform einrichten
const homeOfficeSetup = {
  // Physische Sicherheit
  physicalSecurity: {
    workspace: "Separater, abschließbarer Bereich",
    screenPrivacy: "Blickschutzfilter bei geteilten Räumen",
    storage: "Verschließbarer Schrank für Dokumente",
    visitors: "Keine Einsichtnahme Dritter möglich"
  },
  
  // Technische Ausstattung
  technicalSetup: {
    laptop: "Vollverschlüsselung aktiviert",
    vpn: "Sichere VPN-Verbindung zum Unternehmen",
    firewall: "Router-Firewall konfiguriert",
    backups: "Automatisierte, verschlüsselte Backups"
  },
  
  // Datenschutz-Grundsätze
  dataProtection: {
    needToKnow: "Nur notwendige Daten im Homeoffice",
    minimization: "Regelmäßiges Löschen temporärer Dateien",
    transparency: "Mitarbeiter über Pflichten informiert"
  }
};`,
    videoConferencing: `
// Videokonferenzen datenschutzkonform durchführen
const videoConferencingPolicy = {
  // Plattform-Auswahl
  platformSelection: {
    dsgvoCompliance: "Europäische Anbieter bevorzugen",
    dataProcessingAgreement: "AVV mit Anbieter abschließen",
    serverLocation: "Datenverarbeitung in EU",
    encryption: "Ende-zu-Ende Verschlüsselung"
  },
  
  // Meeting-Durchführung
  meetingConduct: {
    recordingConsent: "Explizite Einwilligung für Aufzeichnungen",
    participantInfo: "Datenschutzhinweis vor Meeting",
    screenSharing: "Sensible Daten ausblenden",
    chatProtocol: "Chat-Verlauf kontrollieren"
  },
  
  // Nachbereitung
  postMeeting: {
    dataRetention: "Aufzeichnungen zeitnah löschen",
    chatCleanup: "Chat-Inhalte bereinigen",
    participantData: "Teilnehmerdaten minimieren",
    documentation: "Nur notwendige Protokolle speichern"
  }
};`,
    cloudStorageManagement: `
// Cloud-Speicher sicher für Homeoffice nutzen
const cloudStoragePolicy = {
  // Anbieter-Bewertung
  providerAssessment: {
    certification: "ISO 27001 und weitere Zertifikate",
    dataLocation: "Datenverarbeitung innerhalb EU/EWR",
    transparency: "Klare Datenschutzerklärung",
    contractual: "Auftragsverarbeitungsvertrag erforderlich"
  },
  
  // Technische Konfiguration
  technicalConfig: {
    encryption: "Daten verschlüsselt übertragen und speichern",
    accessControl: "Benutzerrechte granular verwalten",
    twoFactor: "Zwei-Faktor-Authentifizierung aktivieren",
    monitoring: "Zugriffe protokollieren und überwachen"
  },
  
  // Nutzungsrichtlinien
  usageGuidelines: {
    dataClassification: "Nur genehmigte Datentypen in Cloud",
    sharing: "Externe Freigaben kontrollieren",
    localBackup: "Wichtige Daten zusätzlich lokal sichern",
    regularReview: "Gespeicherte Daten regelmäßig prüfen"
  }
};`
  };
  const checklistCategories = [
    {
      title: "Rechtliche Grundlagen",
      items: [
        { id: "rl1", text: "Homeoffice-Vereinbarung mit Datenschutzklauseln", required: true },
        { id: "rl2", text: "Verarbeitungsverzeichnis um Homeoffice erweitern", required: true },
        { id: "rl3", text: "Auftragsverarbeitungsverträge für Cloud-Dienste", required: true },
        { id: "rl4", text: "DSFA für Homeoffice-Tätigkeiten durchführen", required: false },
        { id: "rl5", text: "Betriebsvereinbarung anpassen", required: false }
      ]
    },
    {
      title: "Technische Sicherheit",
      items: [
        { id: "ts1", text: "Vollverschlüsselung aller Endgeräte", required: true },
        { id: "ts2", text: "VPN-Zugang für alle Homeoffice-Mitarbeiter", required: true },
        { id: "ts3", text: "Sichere WLAN-Konfiguration prüfen", required: true },
        { id: "ts4", text: "Automatische Updates aktivieren", required: true },
        { id: "ts5", text: "Backup-Strategie für Homeoffice-Daten", required: true }
      ]
    },
    {
      title: "Arbeitsplatz-Sicherheit",
      items: [
        { id: "as1", text: "Arbeitsplatz vor Einblicken Dritter schützen", required: true },
        { id: "as2", text: "Bildschirmsperre bei Abwesenheit", required: true },
        { id: "as3", text: "Sichere Aufbewahrung von Dokumenten", required: true },
        { id: "as4", text: "Clean Desk Policy umsetzen", required: true },
        { id: "as5", text: "Besuchsregelungen definieren", required: false }
      ]
    },
    {
      title: "Kommunikation & Tools",
      items: [
        { id: "kt1", text: "Genehmigte Kommunikationstools definieren", required: true },
        { id: "kt2", text: "Videokonferenz-Richtlinien erstellen", required: true },
        { id: "kt3", text: "Cloud-Storage-Nutzung regeln", required: true },
        { id: "kt4", text: "Private Gerätenutzung (BYOD) regeln", required: false },
        { id: "kt5", text: "Incident-Response-Plan für Homeoffice", required: true }
      ]
    },
    {
      title: "Schulung & Kontrolle",
      items: [
        { id: "sk1", text: "Homeoffice-Datenschutz-Schulung durchführen", required: true },
        { id: "sk2", text: "Regelmäßige Sicherheitschecks etablieren", required: true },
        { id: "sk3", text: "Meldepflichten bei Datenpannen kommunizieren", required: true },
        { id: "sk4", text: "Datenschutz-Awareness kontinuierlich fördern", required: false },
        { id: "sk5", text: "Homeoffice-Audits durchführen", required: false }
      ]
    }
  ];
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
  const toggleScenario = (id) => {
    setExpandedScenarios(
      (prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  const toggleChecklistItem = (itemId) => {
    setCompletedItems(
      (prev) => prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]
    );
  };
  const calculateProgress = () => {
    const totalItems = checklistCategories.reduce(
      (sum, category) => sum + category.items.length,
      0
    );
    return Math.round(completedItems.length / totalItems * 100);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-950", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Datenschutz Homeoffice – DSGVO-konforme Remote Work Lösungen" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "DSGVO-konformes Homeoffice: Sichere Remote-Arbeit mit Datenschutz-Compliance. Technische & organisatorische Maßnahmen. Jetzt informieren!" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Datenschutz Homeoffice – DSGVO-konforme Remote Work Lösungen" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "DSGVO-konformes Homeoffice: Sichere Remote-Arbeit mit Datenschutz-Compliance. Technische & organisatorische Maßnahmen. Jetzt informieren!" }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://marsstein.de/wissen/branchen/datenschutz-homeoffice" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://marsstein.de/wissen/branchen/datenschutz-homeoffice" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Datenschutz Homeoffice – DSGVO-konforme Remote Work Lösungen",
        "description": "DSGVO-konformes Homeoffice: Sichere Remote-Arbeit mit Datenschutz-Compliance. Technische & organisatorische Maßnahmen",
        "author": {
          "@type": "Organization",
          "name": "Marsstein"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Marsstein"
        },
        "datePublished": "2024-01-01",
        "dateModified": "2024-12-01"
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Wissen",
            "item": "https://marsstein.de/wissen"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Branchen",
            "item": "https://marsstein.de/wissen/branchen"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Datenschutz Homeoffice",
            "item": "https://marsstein.de/wissen/branchen/datenschutz-homeoffice"
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("section", { className: "relative bg-gradient-to-br from-white via-gray-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/20 py-20 md:py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 },
              children: /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "mb-4 px-4 py-2 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800", children: [
                /* @__PURE__ */ jsx(Home, { className: "h-4 w-4 mr-2" }),
                "Datenschutz im Homeoffice"
              ] })
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.h1,
            {
              className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.1 },
              children: [
                /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent", children: "DSGVO-konformes" }),
                /* @__PURE__ */ jsx("br", {}),
                /* @__PURE__ */ jsx("span", { className: "text-gray-900 dark:text-white", children: "Homeoffice" })
              ]
            }
          ),
          /* @__PURE__ */ jsx(
            motion.p,
            {
              className: "text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.2 },
              children: "Sicheres Remote-Arbeiten ohne Datenschutz-Risiken. Schützen Sie Ihr Unternehmen und Ihre Mitarbeiter vor Bußgeldern und Datenpannen im Homeoffice."
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "flex flex-col md:flex-row gap-4 justify-center items-center mb-12",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.3 },
              children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-blue-600" }),
                  /* @__PURE__ */ jsx("span", { children: "Remote Work Security" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-blue-600" }),
                  /* @__PURE__ */ jsx("span", { children: "DSGVO-Compliance" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-blue-600" }),
                  /* @__PURE__ */ jsx("span", { children: "Praxiserprobte Lösungen" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay: 0.4 },
              children: [
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300",
                    children: [
                      /* @__PURE__ */ jsx(Laptop, { className: "h-5 w-5 mr-2" }),
                      "Homeoffice-Beratung starten"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-blue-950/30",
                    children: [
                      /* @__PURE__ */ jsx(Download, { className: "h-5 w-5 mr-2" }),
                      "Homeoffice-Leitfaden herunterladen"
                    ]
                  }
                )
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "mt-16 max-w-4xl mx-auto",
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.6, delay: 0.5 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl border-2 border-blue-200 dark:border-blue-800", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold mb-4 text-center text-gray-900 dark:text-white", children: "Homeoffice-Datenschutz: Aktuelle Herausforderungen" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: complianceStats.map((stat, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "text-center p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg",
                  whileHover: { scale: 1.05 },
                  transition: { type: "spring", stiffness: 300 },
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400", children: stat.value }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-700 dark:text-gray-300 mt-1", children: stat.label }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400 mt-1", children: stat.trend })
                  ]
                },
                index
              )) })
            ] }) })
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("nav", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm", "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "flex items-center justify-start md:justify-center gap-2 py-4 overflow-x-auto scrollbar-hide", children: navigationItems.map((item) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => scrollToSection(item.id),
        className: cn(
          "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
          activeSection === item.id ? "bg-blue-100 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300" : "text-gray-600 dark:text-gray-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 hover:text-blue-600 dark:hover:text-blue-400"
        ),
        children: [
          /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4" }),
          item.label
        ]
      },
      item.id
    )) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "py-20 bg-gray-50 dark:bg-gray-950", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-20", children: [
      /* @__PURE__ */ jsx("section", { id: "ueberblick", className: "space-y-8 scroll-mt-32", style: { scrollMarginTop: "96px" }, children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "Homeoffice & DSGVO - Die neue Realität" }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-blue-500 hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(Home, { className: "h-6 w-6 text-blue-600" }),
                  "Warum Homeoffice-Datenschutz kritisch ist"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-orange-600 mt-0.5" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Erweiterte Angriffsfläche" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Heimnetzwerke sind oft weniger sicher als Firmen-IT" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx(Eye, { className: "h-5 w-5 text-red-600 mt-0.5" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Fehlende physische Kontrolle" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Bildschirme können von Familienmitgliedern eingesehen werden" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx(Cloud, { className: "h-5 w-5 text-purple-600 mt-0.5" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Unkontrollierte Cloud-Nutzung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Private Tools werden ohne Freigabe verwendet" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                    /* @__PURE__ */ jsx(Smartphone, { className: "h-5 w-5 text-indigo-600 mt-0.5" }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "font-medium", children: "BYOD-Herausforderungen" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Private Geräte vermischen Berufs- und Privatleben" })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-indigo-500 hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-indigo-600" }),
                  "DSGVO-Anforderungen im Homeoffice"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-indigo-800 dark:text-indigo-200 mb-2", children: "Art. 32 DSGVO - Sicherheit der Verarbeitung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Angemessene technische und organisatorische Maßnahmen auch im Homeoffice" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800 dark:text-purple-200 mb-2", children: "Art. 5 DSGVO - Grundsätze" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Datenschutz durch Technik und datenschutzfreundliche Voreinstellungen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 dark:text-blue-200 mb-2", children: "Art. 33/34 DSGVO - Meldepflichten" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Datenpannen müssen auch aus dem Homeoffice gemeldet werden" })
                  ] })
                ] })
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "rechtslage", className: "space-y-8 scroll-mt-32", style: { scrollMarginTop: "96px" }, children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "Rechtliche Grundlagen & Verantwortlichkeiten" }),
            /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxs(Card, { className: "col-span-2", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(Scale, { className: "h-6 w-6 text-blue-600" }),
                  "Arbeitgeberpflichten im Homeoffice"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-blue-600" }),
                      "Homeoffice-Vereinbarung"
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Datenschutzbestimmungen explizit aufführen" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Technische Mindestanforderungen definieren" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Kontrollrechte des Arbeitgebers regeln" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Meldepflichten bei Sicherheitsvorfällen" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-4 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5" }),
                      "Haftungsrisiken minimieren"
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Trotz Homeoffice bleibt der Arbeitgeber für Datenschutzkonformität verantwortlich. Klare Regelungen und Schulungen sind essentiell." })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-indigo-600" }),
                      "Mitarbeiterverantwortung"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 text-sm", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 dark:bg-gray-800 rounded-lg p-3", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium mb-2", children: "Technische Pflichten" }),
                        /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• VPN-Nutzung obligatorisch" }),
                          /* @__PURE__ */ jsx("li", { children: "• Bildschirmsperre aktivieren" }),
                          /* @__PURE__ */ jsx("li", { children: "• Updates zeitnah installieren" }),
                          /* @__PURE__ */ jsx("li", { children: "• Sichere Passwörter verwenden" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-gray-100 dark:bg-gray-800 rounded-lg p-3", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium mb-2", children: "Organisatorische Pflichten" }),
                        /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
                          /* @__PURE__ */ jsx("li", { children: "• Clean Desk Policy beachten" }),
                          /* @__PURE__ */ jsx("li", { children: "• Vertraulichkeit wahren" }),
                          /* @__PURE__ */ jsx("li", { children: "• Vorfälle melden" }),
                          /* @__PURE__ */ jsx("li", { children: "• Schulungen absolvieren" })
                        ] })
                      ] })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(Euro, { className: "h-6 w-6 text-red-600" }),
                  "Bußgeldrisiken"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-50 dark:bg-red-950/30 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-800 dark:text-red-200 mb-1", children: "Bis zu 20 Mio. €" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "oder 4% des weltweiten Jahresumsatzes" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-3 bg-orange-50 dark:bg-orange-950/30 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-orange-800 dark:text-orange-200 mb-1", children: "Häufige Verstöße" }),
                    /* @__PURE__ */ jsxs("ul", { className: "text-xs text-gray-700 dark:text-gray-300 space-y-1", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Unzureichende TOMs" }),
                      /* @__PURE__ */ jsx("li", { children: "• Fehlende Schulungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Mangelhafte Kontrollen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Verspätete Meldungen" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-800 dark:text-blue-200 mb-1", children: "Schadensersatz" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Zusätzlich zu Bußgeldern bei materiellen oder immateriellen Schäden" })
                  ] })
                ] }) })
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "technische-sicherheit", className: "space-y-8 scroll-mt-32", style: { scrollMarginTop: "96px" }, children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "Technische Sicherheitsmaßnahmen" }),
            /* @__PURE__ */ jsxs(Card, { className: "border-2 border-blue-200 dark:border-blue-800", children: [
              /* @__PURE__ */ jsx(CardHeader, { className: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Lock, { className: "h-6 w-6 text-blue-600" }),
                "Homeoffice-Setup sicher konfigurieren"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", children: [
                /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "mb-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg cursor-pointer",
                    onClick: () => toggleScenario("homeOfficeSetup"),
                    children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 dark:text-blue-200", children: "Praxis-Guide: Sicherer Homeoffice-Arbeitsplatz" }),
                        expandedScenarios.includes("homeOfficeSetup") ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 text-blue-600" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-blue-600" })
                      ] }),
                      expandedScenarios.includes("homeOfficeSetup") && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: scenarioTemplates.homeOfficeSetup }) }) }) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 dark:bg-blue-950/30 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(HardDrive, { className: "h-5 w-5 text-blue-600" }),
                      "Gerätesicherheit"
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(LockKeyhole, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Vollverschlüsselung aktivieren" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Firewall konfigurieren" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Key, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Starke Authentifizierung" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 dark:bg-indigo-950/30 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Router, { className: "h-5 w-5 text-indigo-600" }),
                      "Netzwerksicherheit"
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Wifi, { className: "h-4 w-4 text-indigo-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "VPN-Verbindung obligatorisch" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-indigo-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "WLAN WPA3-Verschlüsselung" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Server, { className: "h-4 w-4 text-indigo-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Router-Firmware aktuell halten" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 dark:bg-purple-950/30 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Cloud, { className: "h-5 w-5 text-purple-600" }),
                      "Cloud & Backup"
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Genehmigte Cloud-Dienste nutzen" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Archive, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Automatische Backups" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Key, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Zwei-Faktor-Authentifizierung" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5" }),
                    "Kritische Sicherheitslücken vermeiden"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 text-sm", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium mb-1", children: "Häufige Fehler" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-700 dark:text-gray-300 space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Veraltete Software/Betriebssysteme" }),
                        /* @__PURE__ */ jsx("li", { children: "• Schwache Router-Passwörter" }),
                        /* @__PURE__ */ jsx("li", { children: "• Unverschlüsselte USB-Sticks" }),
                        /* @__PURE__ */ jsx("li", { children: "• Fehlende Bildschirmsperre" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-medium mb-1", children: "Sofortmaßnahmen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-gray-700 dark:text-gray-300 space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Alle Geräte auf neuesten Stand" }),
                        /* @__PURE__ */ jsx("li", { children: "• Passwort-Manager verwenden" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Sicherheitschecks" }),
                        /* @__PURE__ */ jsx("li", { children: "• Backup-Strategie testen" })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "arbeitsplatz", className: "space-y-8 scroll-mt-32", style: { scrollMarginTop: "96px" }, children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "Physische Arbeitsplatzsicherheit" }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(Eye, { className: "h-6 w-6 text-blue-600" }),
                  "Sichtschutz & Privatsphäre"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Clean Screen Policy" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Monitor, { className: "h-4 w-4 text-blue-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Bildschirm von öffentlichen Bereichen abwenden" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 text-blue-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Sichtschutzfolie bei geteilten Räumen" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-blue-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Automatische Bildschirmsperre nach 5 Min." })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Home, { className: "h-4 w-4 text-blue-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Separaten Arbeitsbereich einrichten" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Besucherregelungen" }),
                    /* @__PURE__ */ jsx("div", { className: "bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-3", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-yellow-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Familie/WG über Vertraulichkeit informieren" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-yellow-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Arbeitszeiten klar kommunizieren" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-yellow-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Unterlagen vor Fremdzugriff schützen" })
                      ] })
                    ] }) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-indigo-600" }),
                  "Dokumentensicherheit"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Clean Desk Policy" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Archive, { className: "h-4 w-4 text-indigo-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Papierunterlagen verschlossen aufbewahren" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-indigo-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Arbeitsplatz nach Feierabend aufräumen" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 text-indigo-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Vertrauliche Dokumente sofort wegschließen" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Sichere Entsorgung" }),
                    /* @__PURE__ */ jsx("div", { className: "bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-lg p-3", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(FileSearch, { className: "h-4 w-4 text-red-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Datenschutz-konforme Vernichtung" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(HardDrive, { className: "h-4 w-4 text-red-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Sichere Löschung digitaler Daten" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-red-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Keine sensiblen Daten in Hausmüll" })
                      ] })
                    ] }) })
                  ] })
                ] })
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "kommunikation", className: "space-y-8 scroll-mt-32", style: { scrollMarginTop: "96px" }, children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "Sichere Kommunikation & Collaboration" }),
            /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(Camera, { className: "h-6 w-6 text-blue-600" }),
                  "Videokonferenzen & Meetings"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "mb-6 p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg cursor-pointer",
                      onClick: () => toggleScenario("videoConferencing"),
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 dark:text-blue-200", children: "Best Practice: Sichere Videokonferenzen" }),
                          expandedScenarios.includes("videoConferencing") ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 text-blue-600" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-blue-600" })
                        ] }),
                        expandedScenarios.includes("videoConferencing") && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: scenarioTemplates.videoConferencing }) }) }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Sichere Meeting-Plattformen" }),
                      /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-600" }),
                          /* @__PURE__ */ jsx("span", { children: "Microsoft Teams (Business/Enterprise)" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-600" }),
                          /* @__PURE__ */ jsx("span", { children: "Zoom (mit BAA und EU-Rechenzentren)" })
                        ] }),
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 p-2 bg-green-50 dark:bg-green-950/30 rounded", children: [
                          /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-600" }),
                          /* @__PURE__ */ jsx("span", { children: "Cisco Webex (DSGVO-konform konfiguriert)" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-800 dark:text-yellow-200 mb-1", children: "Aufzeichnungen mit Bedacht" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700 dark:text-gray-300", children: "Meeting-Aufzeichnungen nur mit expliziter Einwilligung aller Teilnehmer. Automatische Transkription kritisch prüfen." })
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(Cloud, { className: "h-6 w-6 text-indigo-600" }),
                  "Cloud-Services & File Sharing"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "mb-6 p-4 bg-indigo-50 dark:bg-indigo-950/30 rounded-lg cursor-pointer",
                      onClick: () => toggleScenario("cloudStorageManagement"),
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-indigo-800 dark:text-indigo-200", children: "Anleitung: Sichere Cloud-Nutzung" }),
                          expandedScenarios.includes("cloudStorageManagement") ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 text-indigo-600" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-indigo-600" })
                        ] }),
                        expandedScenarios.includes("cloudStorageManagement") && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: scenarioTemplates.cloudStorageManagement }) }) }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Genehmigte Cloud-Services" }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-50 dark:bg-green-950/30 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-800 dark:text-green-200 mb-1", children: "Enterprise-Lösungen" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Microsoft 365, Google Workspace mit BAA" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-blue-800 dark:text-blue-200 mb-1", children: "Deutsche Anbieter" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "IONOS, Nextcloud, ownCloud" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "p-3 bg-red-50 dark:bg-red-950/30 rounded-lg", children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium text-red-800 dark:text-red-200 mb-1", children: "Nicht empfohlen" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Consumer-Versionen ohne AVV" })
                      ] })
                    ] })
                  ] }) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "mt-6", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(MessageSquare, { className: "h-6 w-6 text-purple-600" }),
                "Messenger & Instant Communication"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-50 dark:bg-green-950/30 rounded-lg", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-800 dark:text-green-200 mb-2", children: "Empfohlene Tools" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Microsoft Teams Chat" }),
                    /* @__PURE__ */ jsx("li", { children: "• Slack Enterprise Grid" }),
                    /* @__PURE__ */ jsx("li", { children: "• Threema Work" }),
                    /* @__PURE__ */ jsx("li", { children: "• Signal (Gruppen begrenzt)" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-yellow-800 dark:text-yellow-200 mb-2", children: "Mit Vorsicht" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
                    /* @__PURE__ */ jsx("li", { children: "• WhatsApp Business (AVV)" }),
                    /* @__PURE__ */ jsx("li", { children: "• Telegram (nur verschlüsselt)" }),
                    /* @__PURE__ */ jsx("li", { children: "• Discord (Firmen-Account)" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 dark:bg-red-950/30 rounded-lg", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-800 dark:text-red-200 mb-2", children: "Zu vermeiden" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Private WhatsApp" }),
                    /* @__PURE__ */ jsx("li", { children: "• WeChat" }),
                    /* @__PURE__ */ jsx("li", { children: "• Unverschlüsselte SMS" }),
                    /* @__PURE__ */ jsx("li", { children: "• Persönliche Social Media" })
                  ] })
                ] })
              ] }) })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "umsetzung", className: "space-y-8 scroll-mt-32", style: { scrollMarginTop: "96px" }, children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "Schritt-für-Schritt Umsetzung" }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-6", children: [
              /* @__PURE__ */ jsxs(Card, { className: "border-t-4 border-blue-500", children: [
                /* @__PURE__ */ jsxs(CardHeader, { children: [
                  /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
                    /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 rounded-full font-bold text-sm", children: "1" }),
                    "Planung"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Woche 1-2" })
                ] }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Homeoffice-Policy entwickeln" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Stakeholder einbeziehen" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Target, { className: "h-4 w-4 text-blue-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Ziele und KPIs definieren" })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "border-t-4 border-indigo-500", children: [
                /* @__PURE__ */ jsxs(CardHeader, { children: [
                  /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
                    /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center w-8 h-8 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-full font-bold text-sm", children: "2" }),
                    "Infrastruktur"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Woche 3-6" })
                ] }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Router, { className: "h-4 w-4 text-indigo-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "VPN-Infrastruktur ausbauen" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Cloud, { className: "h-4 w-4 text-indigo-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Cloud-Services evaluieren" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-indigo-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Security-Tools implementieren" })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "border-t-4 border-purple-500", children: [
                /* @__PURE__ */ jsxs(CardHeader, { children: [
                  /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
                    /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center w-8 h-8 bg-purple-100 dark:bg-purple-950 text-purple-700 dark:text-purple-300 rounded-full font-bold text-sm", children: "3" }),
                    "Schulung"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Woche 7-8" })
                ] }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Mitarbeiterschulungen" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Award, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Zertifizierungen" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-purple-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Leitfäden verteilen" })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "border-t-4 border-green-500", children: [
                /* @__PURE__ */ jsxs(CardHeader, { children: [
                  /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
                    /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center w-8 h-8 bg-green-100 dark:bg-green-950 text-green-700 dark:text-green-300 rounded-full font-bold text-sm", children: "4" }),
                    "Monitoring"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Laufend" })
                ] }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Kontinuierliche Überwachung" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "KPI-Tracking" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Kontinuierliche Verbesserung" })
                  ] })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "mt-8", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-6 w-6 text-blue-600" }),
                "Change Management für Homeoffice-Datenschutz"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Erfolgsfaktoren" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-blue-600" }),
                      /* @__PURE__ */ jsx("span", { children: "Top-Management Support sichern" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4 text-blue-600" }),
                      /* @__PURE__ */ jsx("span", { children: "Transparente Kommunikation" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Award, { className: "h-4 w-4 text-blue-600" }),
                      /* @__PURE__ */ jsx("span", { children: "Positive Anreizsysteme schaffen" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4 text-blue-600" }),
                      /* @__PURE__ */ jsx("span", { children: "Kontinuierliche Weiterbildung" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Widerstand überwinden" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Target, { className: "h-4 w-4 text-purple-600" }),
                      /* @__PURE__ */ jsx("span", { children: "Vorteile klar kommunizieren" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(HeartHandshake, { className: "h-4 w-4 text-purple-600" }),
                      /* @__PURE__ */ jsx("span", { children: "Mitarbeiter in Planung einbeziehen" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4 text-purple-600" }),
                      /* @__PURE__ */ jsx("span", { children: "Schrittweise Implementierung" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4 text-purple-600" }),
                      /* @__PURE__ */ jsx("span", { children: "Support-Hotline einrichten" })
                    ] })
                  ] })
                ] })
              ] }) })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "checkliste", className: "space-y-8 scroll-mt-32", style: { scrollMarginTop: "96px" }, children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "Homeoffice-Datenschutz Checkliste" }),
            /* @__PURE__ */ jsxs(Card, { className: "border-2 border-blue-200 dark:border-blue-800", children: [
              /* @__PURE__ */ jsx(CardHeader, { className: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(CheckSquare, { className: "h-6 w-6 text-blue-600" }),
                  "Umsetzungsfortschritt verfolgen"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-blue-600", children: [
                    calculateProgress(),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "abgeschlossen" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", children: [
                /* @__PURE__ */ jsx(
                  Progress,
                  {
                    value: calculateProgress(),
                    className: "mb-8 h-3"
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "space-y-6", children: checklistCategories.map((category) => /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-lg mb-3 text-gray-900 dark:text-white", children: category.title }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3", children: category.items.map((item) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: cn(
                        "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all",
                        completedItems.includes(item.id) ? "bg-blue-50 dark:bg-blue-950/30" : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                      ),
                      onClick: () => toggleChecklistItem(item.id),
                      children: [
                        completedItems.includes(item.id) ? /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5 text-blue-600 flex-shrink-0" }) : /* @__PURE__ */ jsx(Square, { className: "h-5 w-5 text-gray-400 flex-shrink-0" }),
                        /* @__PURE__ */ jsxs("span", { className: cn(
                          "text-sm",
                          completedItems.includes(item.id) && "line-through text-gray-500"
                        ), children: [
                          item.text,
                          item.required && /* @__PURE__ */ jsx("span", { className: "text-red-500 ml-1", children: "*" })
                        ] })
                      ]
                    },
                    item.id
                  )) })
                ] }, category.title)) }),
                /* @__PURE__ */ jsx("div", { className: "mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Hinweis:" }),
                  " Mit ",
                  /* @__PURE__ */ jsx("span", { className: "text-red-500", children: "*" }),
                  " markierte Punkte sind gesetzlich verpflichtend und sollten priorisiert werden."
                ] }) })
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "ressourcen", className: "space-y-8 scroll-mt-32", style: { scrollMarginTop: "96px" }, children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "Ressourcen & Tools" }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 text-lg", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-blue-600" }),
                  "Vorlagen & Dokumente"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-blue-50 dark:hover:bg-blue-950/30", children: [
                    /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                    "Homeoffice-Vereinbarung DSGVO"
                  ] }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-blue-50 dark:hover:bg-blue-950/30", children: [
                    /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                    "Technische Sicherheitsrichtlinie"
                  ] }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-blue-50 dark:hover:bg-blue-950/30", children: [
                    /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                    "Mitarbeiter-Leitfaden"
                  ] }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-blue-50 dark:hover:bg-blue-950/30", children: [
                    /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                    "Incident Response Plan"
                  ] }) })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 text-lg", children: [
                  /* @__PURE__ */ jsx(Zap, { className: "h-6 w-6 text-indigo-600" }),
                  "Security Tools"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-indigo-50 dark:hover:bg-indigo-950/30", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 mr-2" }),
                    "VPN-Konfigurationshilfe"
                  ] }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-indigo-50 dark:hover:bg-indigo-950/30", children: [
                    /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 mr-2" }),
                    "Verschlüsselungs-Guide"
                  ] }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-indigo-50 dark:hover:bg-indigo-950/30", children: [
                    /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 mr-2" }),
                    "Monitoring-Setup"
                  ] }) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-indigo-50 dark:hover:bg-indigo-950/30", children: [
                    /* @__PURE__ */ jsx(Archive, { className: "h-4 w-4 mr-2" }),
                    "Backup-Strategien"
                  ] }) })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 text-lg", children: [
                  /* @__PURE__ */ jsx(BookOpen, { className: "h-6 w-6 text-purple-600" }),
                  "Weiterführende Links"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/wissen/branchen/datenschutz-betriebsrat",
                      className: "flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300",
                      children: [
                        /* @__PURE__ */ jsx(HandshakeIcon, { className: "h-4 w-4" }),
                        "Datenschutz für Betriebsräte"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/wissen/it-sicherheit/verschluesselung",
                      className: "flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300",
                      children: [
                        /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4" }),
                        "Verschlüsselung & sichere Kommunikation"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/wissen/compliance/audit-management",
                      className: "flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300",
                      children: [
                        /* @__PURE__ */ jsx(Award, { className: "h-4 w-4" }),
                        "DSGVO-Audit Management"
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/wissen/recht/beschaeftigtendatenschutz",
                      className: "flex items-center gap-2 text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300",
                      children: [
                        /* @__PURE__ */ jsx(Users, { className: "h-4 w-4" }),
                        "Beschäftigtendatenschutz"
                      ]
                    }
                  ) })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "mt-8 border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 text-red-800 dark:text-red-200", children: [
                /* @__PURE__ */ jsx(AlertCircle, { className: "h-6 w-6" }),
                "Notfall: Homeoffice-Sicherheitsvorfall"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { children: [
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-red-700 dark:text-red-300 font-bold", children: "1" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-1", children: "Isolation" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: "Betroffenes Gerät vom Netz trennen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-red-700 dark:text-red-300 font-bold", children: "2" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-1", children: "Meldung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: "IT-Security sofort informieren" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-red-700 dark:text-red-300 font-bold", children: "3" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-1", children: "Dokumentation" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: "Vorfall detailliert protokollieren" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-red-700 dark:text-red-300 font-bold", children: "4" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-1", children: "Recovery" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: "Nur nach Freigabe weiterarbeiten" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "mt-4 p-3 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: [
                  /* @__PURE__ */ jsx("strong", { children: "24/7 Notfall-Hotline:" }),
                  " Bei kritischen Vorfällen sofortige Eskalation an den DSB und das Management erforderlich."
                ] }) })
              ] })
            ] })
          ]
        }
      ) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-20 bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900 dark:from-blue-950 dark:via-indigo-900 dark:to-purple-950 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-20 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container px-4 relative z-10", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          className: "max-w-4xl mx-auto text-center",
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          viewport: { once: true },
          children: [
            /* @__PURE__ */ jsx(Laptop, { className: "h-16 w-16 text-white mx-auto mb-6" }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-6", children: "Sicheres Homeoffice beginnt jetzt!" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-blue-100 mb-8 max-w-2xl mx-auto", children: "Schützen Sie Ihr Unternehmen vor Datenschutzverletzungen im Homeoffice. Wir unterstützen Sie bei der DSGVO-konformen Umsetzung." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-12", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "lg",
                  className: "bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300",
                  children: [
                    /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 mr-2" }),
                    "Homeoffice-Beratung starten"
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
                    /* @__PURE__ */ jsx(Download, { className: "h-5 w-5 mr-2" }),
                    "Kompletten Leitfaden herunterladen"
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mt-12", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300",
                  whileHover: { scale: 1.05 },
                  children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-10 w-10 text-blue-300 mx-auto mb-3" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: "100% DSGVO-konform" }),
                    /* @__PURE__ */ jsx("p", { className: "text-blue-100 text-sm", children: "Rechtssichere Homeoffice-Lösungen ohne Compliance-Risiken" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300",
                  whileHover: { scale: 1.05 },
                  children: [
                    /* @__PURE__ */ jsx(Zap, { className: "h-10 w-10 text-indigo-300 mx-auto mb-3" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: "Schnelle Umsetzung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-indigo-100 text-sm", children: "In wenigen Wochen zum sicheren Homeoffice-Setup" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  className: "bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300",
                  whileHover: { scale: 1.05 },
                  children: [
                    /* @__PURE__ */ jsx(Award, { className: "h-10 w-10 text-purple-300 mx-auto mb-3" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: "Expertenwissen" }),
                    /* @__PURE__ */ jsx("p", { className: "text-purple-100 text-sm", children: "Von zertifizierten Datenschutzbeauftragten entwickelt" })
                  ]
                }
              )
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  DatenschutzHomeofficeComprehensive as default
};
