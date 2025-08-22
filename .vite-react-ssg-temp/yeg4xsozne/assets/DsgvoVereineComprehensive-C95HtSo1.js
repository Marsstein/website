import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useScroll, useTransform, motion } from "framer-motion";
import { Users, CheckCircle, HeartHandshake, Download, BookOpen, Shield, Calendar, Mail, Euro, Settings, CheckSquare, AlertTriangle, AlertCircle, Target, UserCheck, ChevronDown, ChevronRight, Clock, Database, Camera, Activity, FileSearch, MessageSquare, Globe, CreditCard, Heart, FileText, Archive, Key, HandshakeIcon, Square, Zap, ShieldCheck, Award, Phone } from "lucide-react";
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
const DsgvoVereineComprehensive = () => {
  const pageTitle = "DSGVO Vereine – Datenschutz im Vereinswesen 2024";
  const pageDescription = "DSGVO für Vereine: ✓ Mitgliederdaten verwalten ✓ Newsletter rechtssicher ✓ Veranstaltungsfotos ✓ Praktische Checklisten. Jetzt Verein DSGVO-konform machen!";
  const [activeSection, setActiveSection] = useState("overview");
  const [expandedScenarios, setExpandedScenarios] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, -50]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const navigationItems = [
    { id: "ueberblick", label: "Überblick", icon: Shield },
    { id: "mitgliederdaten", label: "Mitgliederdaten", icon: Users },
    { id: "veranstaltungen", label: "Veranstaltungen", icon: Calendar },
    { id: "kommunikation", label: "Kommunikation", icon: Mail },
    { id: "finanzen", label: "Finanzen", icon: Euro },
    { id: "umsetzung", label: "Umsetzung", icon: Settings },
    { id: "checkliste", label: "Checkliste", icon: CheckSquare },
    { id: "ressourcen", label: "Ressourcen", icon: BookOpen }
  ];
  const complianceStats = [
    { label: "Betroffene Vereine", value: "600.000+", trend: "in Deutschland" },
    { label: "Durchschn. Bußgeld", value: "12.500€", trend: "bei Verstößen" },
    { label: "Umsetzungszeit", value: "3-6", trend: "Monate" }
  ];
  const scenarioTemplates = {
    memberRegistration: `
// Mitgliederregistrierung DSGVO-konform
const memberRegistration = {
  // Einwilligungserklärung
  consent: {
    dataProcessing: "Ich willige ein, dass meine Daten...",
    newsletter: "Ich möchte den Newsletter erhalten",
    photos: "Ich erlaube Fotos bei Veranstaltungen"
  },
  
  // Nur notwendige Daten erheben
  requiredData: {
    name: true,
    email: true,
    phone: false, // optional
    birthdate: true // für Jugendschutz
  },
  
  // Speicherdauer definieren
  retention: {
    activeMember: "Dauer der Mitgliedschaft",
    inactiveMember: "10 Jahre nach Austritt",
    newsletter: "Bis zum Widerruf"
  }
};`,
    eventPhotography: `
// Fotografie bei Vereinsveranstaltungen
const eventPhotoPolicy = {
  // Vor der Veranstaltung
  beforeEvent: {
    information: "Hinweis auf Fotoaufnahmen",
    optOut: "Widerspruchsmöglichkeit anbieten",
    badges: "Keine-Fotos-Buttons bereitstellen"
  },
  
  // Während der Veranstaltung
  duringEvent: {
    photographer: "Erkennbar machen",
    respect: "Keine-Fotos-Zonen einrichten",
    focus: "Übersichtsaufnahmen bevorzugen"
  },
  
  // Nach der Veranstaltung
  afterEvent: {
    review: "Bilder vor Veröffentlichung prüfen",
    consent: "Bei Porträts Einwilligung einholen",
    deletion: "Löschfristen beachten"
  }
};`,
    volunteerManagement: `
// Ehrenamtlichen-Verwaltung
const volunteerDataHandling = {
  // Datenerhebung
  collection: {
    purpose: "Nur für Vereinszwecke",
    necessity: "Datensparsamkeit beachten",
    transparency: "Klare Information über Nutzung"
  },
  
  // Zugriffskontrolle
  access: {
    needToKnow: "Nur relevante Personen",
    roles: "Klare Rechtevergabe",
    documentation: "Zugriffe protokollieren"
  },
  
  // Schulung
  training: {
    basics: "DSGVO-Grundlagen vermitteln",
    practice: "Praktische Beispiele zeigen",
    updates: "Regelmäßige Auffrischung"
  }
};`
  };
  const checklistCategories = [
    {
      title: "Rechtliche Grundlagen",
      items: [
        { id: "rl1", text: "Datenschutzbeauftragten bestellen (bei Bedarf)", required: false },
        { id: "rl2", text: "Verzeichnis von Verarbeitungstätigkeiten erstellen", required: true },
        { id: "rl3", text: "Datenschutzerklärung für Website erstellen", required: true },
        { id: "rl4", text: "Impressum aktualisieren", required: true },
        { id: "rl5", text: "Auftragsverarbeitungsverträge abschließen", required: true }
      ]
    },
    {
      title: "Mitgliederverwaltung",
      items: [
        { id: "mv1", text: "Einwilligungserklärungen einholen", required: true },
        { id: "mv2", text: "Mitgliederdatenbank sichern", required: true },
        { id: "mv3", text: "Löschkonzept entwickeln", required: true },
        { id: "mv4", text: "Auskunftsverfahren etablieren", required: true },
        { id: "mv5", text: "Datenportabilität gewährleisten", required: false }
      ]
    },
    {
      title: "Kommunikation",
      items: [
        { id: "ko1", text: "Newsletter-Anmeldung Double-Opt-In", required: true },
        { id: "ko2", text: "Abmeldemöglichkeit in jedem Newsletter", required: true },
        { id: "ko3", text: "WhatsApp-Gruppen prüfen", required: false },
        { id: "ko4", text: "E-Mail-Verteiler verschlüsseln", required: false },
        { id: "ko5", text: "Social Media Richtlinien erstellen", required: false }
      ]
    },
    {
      title: "Veranstaltungen",
      items: [
        { id: "ve1", text: "Fotohinweise bei Events aushängen", required: true },
        { id: "ve2", text: "Einwilligung für Bildaufnahmen", required: true },
        { id: "ve3", text: "Teilnehmerlisten sicher verwahren", required: true },
        { id: "ve4", text: "Anmeldeformulare DSGVO-konform", required: true },
        { id: "ve5", text: "Gästelisten nach Event löschen", required: true }
      ]
    },
    {
      title: "Technische Maßnahmen",
      items: [
        { id: "tm1", text: "Sichere Passwörter einführen", required: true },
        { id: "tm2", text: "Regelmäßige Backups durchführen", required: true },
        { id: "tm3", text: "Verschlüsselung aktivieren", required: true },
        { id: "tm4", text: "Zugriffsrechte dokumentieren", required: true },
        { id: "tm5", text: "Alte Daten sicher löschen", required: true }
      ]
    }
  ];
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: pageTitle }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "dsgvo vereine, datenschutz vereine, dsgvo vereinsrecht, datenschutz ehrenamt, dsgvo compliance vereine" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://www.example.com/wissen/branchen/dsgvo-vereine" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: pageTitle }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: pageDescription }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://www.example.com/wissen/branchen/dsgvo-vereine" }),
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
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50 dark:bg-gray-950", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative bg-gradient-to-br from-white via-gray-50 to-emerald-50 dark:from-gray-950 dark:via-gray-900 dark:to-emerald-950/20 py-20 md:py-28 overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" }),
          /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000" })
        ] }),
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            style: { y, opacity },
            className: "container px-4",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [
                /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, y: -20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.5 },
                    children: /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "mb-4 px-4 py-2 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 mr-2" }),
                      "DSGVO für Vereine & Verbände"
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
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent", children: "DSGVO-Compliance" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-900 dark:text-white", children: "für Ihren Verein" })
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
                    children: "Schützen Sie Mitgliederdaten rechtssicher und vermeiden Sie Bußgelder. Mit unserer Expertise machen wir DSGVO-Compliance für Vereine einfach und bezahlbar."
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
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-emerald-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Für alle Vereinsgrößen" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-700 dark:text-gray-300", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-emerald-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Praxiserprobte Lösungen" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-gray-700 dark:text-gray-300", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-emerald-600" }),
                        /* @__PURE__ */ jsx("span", { children: "Rechtssicher & aktuell" })
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
                          className: "bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] min-w-[48px]",
                          children: [
                            /* @__PURE__ */ jsx(HeartHandshake, { className: "h-5 w-5 mr-2" }),
                            "Kostenlose Erstberatung"
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxs(
                        Button,
                        {
                          size: "lg",
                          variant: "outline",
                          className: "border-emerald-600 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950/30 min-h-[48px] min-w-[48px]",
                          children: [
                            /* @__PURE__ */ jsx(Download, { className: "h-5 w-5 mr-2" }),
                            "DSGVO-Guide für Vereine"
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
                  children: /* @__PURE__ */ jsx(Card, { className: "bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-2xl border-2 border-emerald-200 dark:border-emerald-800", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsx("h3", { id: "compliance-statistiken", className: "text-lg font-semibold mb-4 text-center text-gray-900 dark:text-white", children: "Aktuelle Compliance-Statistiken für Vereine" }),
                    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: complianceStats.map((stat, index) => /* @__PURE__ */ jsxs(
                      motion.div,
                      {
                        className: "text-center p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg",
                        whileHover: { scale: 1.05 },
                        transition: { type: "spring", stiffness: 300 },
                        children: [
                          /* @__PURE__ */ jsx("div", { className: "text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400", children: stat.value }),
                          /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-700 dark:text-gray-300 mt-1", children: stat.label }),
                          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500 dark:text-gray-400 mt-1", children: stat.trend })
                        ]
                      },
                      index
                    )) })
                  ] }) })
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-8 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ jsx("div", { className: "container px-4 mx-auto", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", className: "bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md", children: [
        /* @__PURE__ */ jsxs("h2", { className: "text-lg font-semibold mb-4 flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(BookOpen, { className: "h-5 w-5 text-emerald-600" }),
          "Inhaltsverzeichnis"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: navigationItems.map((item) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => scrollToSection(item.id),
            className: "flex items-center gap-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-left tap-target",
            children: [
              /* @__PURE__ */ jsx(item.icon, { className: "h-5 w-5 text-emerald-600 flex-shrink-0" }),
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
      /* @__PURE__ */ jsx("nav", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm", "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 py-4 overflow-x-auto scrollbar-hide", children: navigationItems.map((item) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => scrollToSection(item.id),
          className: cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap",
            activeSection === item.id ? "bg-emerald-100 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300" : "text-gray-600 dark:text-gray-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 hover:text-emerald-600 dark:hover:text-emerald-400"
          ),
          children: [
            /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4" }),
            item.label
          ]
        },
        item.id
      )) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "py-20 bg-gray-50 dark:bg-gray-950", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-20", children: [
        /* @__PURE__ */ jsx("section", { id: "ueberblick", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { id: "dsgvo-vereinswesen", className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "DSGVO im Vereinswesen - Was Sie wissen müssen" }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
                /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-emerald-500 hover:shadow-lg transition-shadow", children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-emerald-600" }),
                    "Kernverpflichtungen für Vereine"
                  ] }) }),
                  /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-emerald-600 mt-0.5" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Rechtmäßige Datenverarbeitung" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Mitgliederdaten nur mit Rechtsgrundlage oder Einwilligung verarbeiten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-emerald-600 mt-0.5" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Transparenz & Information" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Mitglieder über Datenverarbeitung umfassend informieren" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-emerald-600 mt-0.5" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Datensicherheit" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Angemessene technische und organisatorische Maßnahmen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-emerald-600 mt-0.5" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Betroffenenrechte" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Auskunft, Löschung und Berichtigung ermöglichen" })
                      ] })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-teal-500 hover:shadow-lg transition-shadow", children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-orange-600" }),
                    "Besondere Herausforderungen"
                  ] }) }),
                  /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-orange-800 dark:text-orange-200 mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5" }),
                        "Ehrenamtliche Strukturen"
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Oft fehlen Ressourcen und Expertise für professionellen Datenschutz" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Users, { className: "h-5 w-5" }),
                        "Vielfältige Datenverarbeitung"
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Mitglieder, Spender, Veranstaltungen, Newsletter - alles muss DSGVO-konform sein" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-emerald-800 dark:text-emerald-200 mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Target, { className: "h-5 w-5" }),
                        "Die Lösung"
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Praktische, vereinsspezifische Vorlagen und Prozesse etablieren" })
                    ] })
                  ] })
                ] })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "mitgliederdaten", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "Mitgliederdatenverwaltung DSGVO-konform" }),
              /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs(Card, { className: "col-span-2", children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(UserCheck, { className: "h-6 w-6 text-emerald-600" }),
                    "Rechtskonforme Mitgliederaufnahme"
                  ] }) }),
                  /* @__PURE__ */ jsxs(CardContent, { children: [
                    /* @__PURE__ */ jsxs(
                      "div",
                      {
                        className: "mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg cursor-pointer",
                        onClick: () => toggleScenario("memberRegistration"),
                        children: [
                          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-emerald-800 dark:text-emerald-200", children: "Praxis-Beispiel: Digitales Anmeldeformular" }),
                            expandedScenarios.includes("memberRegistration") ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 text-emerald-600" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-emerald-600" })
                          ] }),
                          expandedScenarios.includes("memberRegistration") && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: scenarioTemplates.memberRegistration }) }) }) })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Notwendige Einwilligungen" }),
                        /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5 text-emerald-600 mt-0.5" }),
                            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Grundlegende Datenverarbeitung für Vereinszwecke" })
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5 text-emerald-600 mt-0.5" }),
                            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Newsletter-Versand (separates Opt-In)" })
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5 text-emerald-600 mt-0.5" }),
                            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Veröffentlichung von Fotos" })
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                            /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5 text-emerald-600 mt-0.5" }),
                            /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Weitergabe an Dachverbände" })
                          ] })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Speicherfristen beachten" }),
                        /* @__PURE__ */ jsx("div", { className: "bg-gray-100 dark:bg-gray-800 rounded-lg p-4", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-gray-600" }),
                            /* @__PURE__ */ jsxs("span", { children: [
                              /* @__PURE__ */ jsx("strong", { children: "Aktive Mitglieder:" }),
                              " Dauer der Mitgliedschaft"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-gray-600" }),
                            /* @__PURE__ */ jsxs("span", { children: [
                              /* @__PURE__ */ jsx("strong", { children: "Ausgeschiedene:" }),
                              " 10 Jahre (Aufbewahrungspflicht)"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-gray-600" }),
                            /* @__PURE__ */ jsxs("span", { children: [
                              /* @__PURE__ */ jsx("strong", { children: "Spendendaten:" }),
                              " 10 Jahre (Steuerrecht)"
                            ] })
                          ] }),
                          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-gray-600" }),
                            /* @__PURE__ */ jsxs("span", { children: [
                              /* @__PURE__ */ jsx("strong", { children: "Newsletter:" }),
                              " Bis zum Widerruf"
                            ] })
                          ] })
                        ] }) })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(Database, { className: "h-6 w-6 text-teal-600" }),
                    "Datenkategorien"
                  ] }) }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-50 dark:bg-green-950/30 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-semibold text-green-800 dark:text-green-200 mb-1", children: "Stammdaten" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Name, Adresse, Geburtsdatum, Eintrittsdatum" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-blue-50 dark:bg-blue-950/30 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-800 dark:text-blue-200 mb-1", children: "Kontaktdaten" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "E-Mail, Telefon, Mobilnummer" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 dark:bg-purple-950/30 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-semibold text-purple-800 dark:text-purple-200 mb-1", children: "Vereinsdaten" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Mitgliedsnummer, Beitragsgruppe, Funktionen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-3 bg-yellow-50 dark:bg-yellow-950/30 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-800 dark:text-yellow-200 mb-1", children: "Besondere Kategorien" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Gesundheitsdaten nur mit expliziter Einwilligung" })
                    ] })
                  ] }) })
                ] })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "veranstaltungen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "Veranstaltungen & Fotografie" }),
              /* @__PURE__ */ jsxs(Card, { className: "border-2 border-emerald-200 dark:border-emerald-800", children: [
                /* @__PURE__ */ jsx(CardHeader, { className: "bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(Camera, { className: "h-6 w-6 text-emerald-600" }),
                  "Rechtssichere Event-Fotografie"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", children: [
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "mb-6 p-4 bg-teal-50 dark:bg-teal-950/30 rounded-lg cursor-pointer",
                      onClick: () => toggleScenario("eventPhotography"),
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-teal-800 dark:text-teal-200", children: "Implementierung: Foto-Policy für Vereinsveranstaltungen" }),
                          expandedScenarios.includes("eventPhotography") ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 text-teal-600" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-teal-600" })
                        ] }),
                        expandedScenarios.includes("eventPhotography") && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: scenarioTemplates.eventPhotography }) }) }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-emerald-50 dark:bg-emerald-950/30 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Calendar, { className: "h-5 w-5 text-emerald-600" }),
                        "Vor der Veranstaltung"
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-emerald-600 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { children: "Foto-Hinweise in Einladung" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-emerald-600 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { children: "Widerspruchsmöglichkeit anbieten" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-emerald-600 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { children: "Keine-Fotos-Buttons vorbereiten" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-teal-50 dark:bg-teal-950/30 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Activity, { className: "h-5 w-5 text-teal-600" }),
                        "Während der Veranstaltung"
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-teal-600 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { children: "Sichtbare Hinweisschilder" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-teal-600 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { children: "Fotograf erkennbar machen" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-teal-600 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { children: "Keine-Foto-Zonen einrichten" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-cyan-50 dark:bg-cyan-950/30 rounded-lg p-4", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(FileSearch, { className: "h-5 w-5 text-cyan-600" }),
                        "Nach der Veranstaltung"
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-cyan-600 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { children: "Bilder vor Veröffentlichung prüfen" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-cyan-600 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { children: "Bei Porträts nachfragen" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-cyan-600 mt-0.5" }),
                          /* @__PURE__ */ jsx("span", { children: "Löschfristen dokumentieren" })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/30 border border-yellow-200 dark:border-yellow-800 rounded-lg", children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5" }),
                      "Wichtiger Hinweis: Minderjährige"
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300", children: "Bei Fotos von Kindern und Jugendlichen ist besondere Vorsicht geboten. Einwilligung beider Elternteile erforderlich, keine Einzelaufnahmen ohne explizite Erlaubnis." })
                  ] })
                ] })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "kommunikation", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "Vereinskommunikation DSGVO-konform" }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs(Card, { children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-emerald-600" }),
                    "E-Mail & Newsletter"
                  ] }) }),
                  /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Double-Opt-In Verfahren" }),
                      /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-sm list-decimal list-inside", children: [
                        /* @__PURE__ */ jsx("li", { children: "Anmeldung über Formular" }),
                        /* @__PURE__ */ jsx("li", { children: "Bestätigungs-E-Mail versenden" }),
                        /* @__PURE__ */ jsx("li", { children: "Klick auf Bestätigungslink" }),
                        /* @__PURE__ */ jsx("li", { children: "Dokumentation der Einwilligung" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Newsletter-Pflichtangaben" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 text-emerald-600" }),
                          /* @__PURE__ */ jsx("span", { children: "Impressum mit vollständigen Angaben" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 text-emerald-600" }),
                          /* @__PURE__ */ jsx("span", { children: "Abmeldelink in jeder E-Mail" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 text-emerald-600" }),
                          /* @__PURE__ */ jsx("span", { children: "Datenschutzhinweis" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 text-emerald-600" }),
                          /* @__PURE__ */ jsx("span", { children: "Keine Weitergabe von E-Mail-Adressen" })
                        ] })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs(Card, { children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(MessageSquare, { className: "h-6 w-6 text-teal-600" }),
                    "Messenger & Social Media"
                  ] }) }),
                  /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 dark:bg-red-950/30 rounded-lg", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5" }),
                        "WhatsApp-Gruppen"
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-700 dark:text-gray-300 mb-2", children: "Problematisch wegen Datenweitergabe an Facebook/Meta" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Einwilligung aller Teilnehmer erforderlich" }),
                        /* @__PURE__ */ jsx("li", { children: "• Alternative: Signal oder Threema" }),
                        /* @__PURE__ */ jsx("li", { children: "• Broadcast-Listen statt Gruppen nutzen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Social Media Richtlinien" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 text-teal-600 mt-0.5" }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("strong", { children: "Facebook/Instagram:" }),
                            /* @__PURE__ */ jsx("span", { className: "block text-gray-600 dark:text-gray-400", children: "Keine Mitgliederlisten veröffentlichen" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                          /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 text-teal-600 mt-0.5" }),
                          /* @__PURE__ */ jsxs("div", { children: [
                            /* @__PURE__ */ jsx("strong", { children: "Vereinswebsite:" }),
                            /* @__PURE__ */ jsx("span", { className: "block text-gray-600 dark:text-gray-400", children: "Cookie-Banner und Datenschutzerklärung" })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "finanzen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "Finanzdaten & Spendenverwaltung" }),
              /* @__PURE__ */ jsx(Card, { className: "border-2 border-emerald-200 dark:border-emerald-800", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                      /* @__PURE__ */ jsx(CreditCard, { className: "h-8 w-8 text-emerald-600" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Mitgliedsbeiträge" })
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-emerald-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "SEPA-Mandate sicher aufbewahren" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-emerald-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Bankdaten verschlüsselt speichern" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-emerald-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Zugriff nur für Kassenwart" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                      /* @__PURE__ */ jsx(Heart, { className: "h-8 w-8 text-teal-600" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Spenderdaten" })
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-teal-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Spendenquittungen 10 Jahre" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-teal-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Separate Einwilligung für Dankesbriefe" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-teal-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Keine Veröffentlichung ohne Erlaubnis" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                      /* @__PURE__ */ jsx(Euro, { className: "h-8 w-8 text-cyan-600" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold", children: "Buchführung" })
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Archive, { className: "h-4 w-4 text-cyan-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Belege 10 Jahre aufbewahren" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Archive, { className: "h-4 w-4 text-cyan-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Personenbezogene Daten schwärzen" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Archive, { className: "h-4 w-4 text-cyan-600 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { children: "Digitale Archivierung bevorzugen" })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg", children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-2 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Key, { className: "h-5 w-5 text-emerald-600" }),
                    "Zugriffsberechtigungen"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 text-sm", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Vorstand:" }),
                      " Vollzugriff auf alle Finanzdaten"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Kassenwart:" }),
                      " Buchführung und Zahlungsverkehr"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Kassenprüfer:" }),
                      " Lesezugriff zur Prüfung"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("strong", { children: "Mitglieder:" }),
                      " Nur eigene Beitragsdaten"
                    ] })
                  ] })
                ] })
              ] }) })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "umsetzung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "Umsetzungsfahrplan für Ihren Verein" }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-6", children: [
                /* @__PURE__ */ jsxs(Card, { className: "border-t-4 border-emerald-500", children: [
                  /* @__PURE__ */ jsxs(CardHeader, { children: [
                    /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
                      /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center w-8 h-8 bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 rounded-full font-bold text-sm", children: "1" }),
                      "Bestandsaufnahme"
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Woche 1-2" })
                  ] }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Datenflüsse dokumentieren" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Verarbeitungen auflisten" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-emerald-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Risiken identifizieren" })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs(Card, { className: "border-t-4 border-teal-500", children: [
                  /* @__PURE__ */ jsxs(CardHeader, { children: [
                    /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
                      /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center w-8 h-8 bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300 rounded-full font-bold text-sm", children: "2" }),
                      "Dokumentation"
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Woche 3-4" })
                  ] }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-teal-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Verarbeitungsverzeichnis" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-teal-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Datenschutzerklärung" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-teal-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Einwilligungsvorlagen" })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs(Card, { className: "border-t-4 border-cyan-500", children: [
                  /* @__PURE__ */ jsxs(CardHeader, { children: [
                    /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
                      /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center w-8 h-8 bg-cyan-100 dark:bg-cyan-950 text-cyan-700 dark:text-cyan-300 rounded-full font-bold text-sm", children: "3" }),
                      "Implementierung"
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Monat 2-3" })
                  ] }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4 text-cyan-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Prozesse anpassen" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4 text-cyan-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Systeme absichern" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4 text-cyan-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Schulungen durchführen" })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs(Card, { className: "border-t-4 border-indigo-500", children: [
                  /* @__PURE__ */ jsxs(CardHeader, { children: [
                    /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
                      /* @__PURE__ */ jsx("span", { className: "flex items-center justify-center w-8 h-8 bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 rounded-full font-bold text-sm", children: "4" }),
                      "Kontrolle"
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Laufend" })
                  ] }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-indigo-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Regelmäßige Audits" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-indigo-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Prozesse optimieren" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 text-indigo-600 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { children: "Dokumentation pflegen" })
                    ] })
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "mt-8", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx(HandshakeIcon, { className: "h-6 w-6 text-emerald-600" }),
                  "Ehrenamtliche einbinden"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "mb-6 p-4 bg-emerald-50 dark:bg-emerald-950/30 rounded-lg cursor-pointer",
                      onClick: () => toggleScenario("volunteerManagement"),
                      children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-emerald-800 dark:text-emerald-200", children: "Best Practice: Ehrenamtlichen-Schulung" }),
                          expandedScenarios.includes("volunteerManagement") ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 text-emerald-600" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-emerald-600" })
                        ] }),
                        expandedScenarios.includes("volunteerManagement") && /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: scenarioTemplates.volunteerManagement }) }) }) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Schulungsinhalte" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4 text-emerald-600" }),
                          /* @__PURE__ */ jsx("span", { children: "DSGVO-Grundlagen verständlich erklärt" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4 text-emerald-600" }),
                          /* @__PURE__ */ jsx("span", { children: "Praktische Beispiele aus dem Vereinsalltag" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4 text-emerald-600" }),
                          /* @__PURE__ */ jsx("span", { children: "Dos and Don'ts im Umgang mit Daten" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(BookOpen, { className: "h-4 w-4 text-emerald-600" }),
                          /* @__PURE__ */ jsx("span", { children: "Notfallplan bei Datenpannen" })
                        ] })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Unterstützung bieten" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4 text-teal-600" }),
                          /* @__PURE__ */ jsx("span", { children: "Ansprechpartner benennen" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4 text-teal-600" }),
                          /* @__PURE__ */ jsx("span", { children: "Einfache Checklisten bereitstellen" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4 text-teal-600" }),
                          /* @__PURE__ */ jsx("span", { children: "Regelmäßige Auffrischungen" })
                        ] }),
                        /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                          /* @__PURE__ */ jsx(Heart, { className: "h-4 w-4 text-teal-600" }),
                          /* @__PURE__ */ jsx("span", { children: "Positive Fehlerkultur etablieren" })
                        ] })
                      ] })
                    ] })
                  ] })
                ] })
              ] })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "checkliste", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "Ihre DSGVO-Checkliste für Vereine" }),
              /* @__PURE__ */ jsxs(Card, { className: "border-2 border-emerald-200 dark:border-emerald-800", children: [
                /* @__PURE__ */ jsx(CardHeader, { className: "bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(CheckSquare, { className: "h-6 w-6 text-emerald-600" }),
                    "Fortschritt verfolgen"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-emerald-600", children: [
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
                          completedItems.includes(item.id) ? "bg-emerald-50 dark:bg-emerald-950/30" : "bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                        ),
                        onClick: () => toggleChecklistItem(item.id),
                        children: [
                          completedItems.includes(item.id) ? /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5 text-emerald-600 flex-shrink-0" }) : /* @__PURE__ */ jsx(Square, { className: "h-5 w-5 text-gray-400 flex-shrink-0" }),
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
        /* @__PURE__ */ jsx("section", { id: "ressourcen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-gray-900 dark:text-white", children: "Hilfreiche Ressourcen & Downloads" }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 text-lg", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-emerald-600" }),
                    "Vorlagen & Muster"
                  ] }) }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-emerald-50 dark:hover:bg-emerald-950/30", children: [
                      /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                      "Einwilligungserklärung Mitglieder"
                    ] }) }),
                    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-emerald-50 dark:hover:bg-emerald-950/30", children: [
                      /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                      "Datenschutzerklärung Website"
                    ] }) }),
                    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-emerald-50 dark:hover:bg-emerald-950/30", children: [
                      /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                      "Verarbeitungsverzeichnis"
                    ] }) }),
                    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-emerald-50 dark:hover:bg-emerald-950/30", children: [
                      /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                      "Foto-Einwilligung Events"
                    ] }) })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 text-lg", children: [
                    /* @__PURE__ */ jsx(BookOpen, { className: "h-6 w-6 text-teal-600" }),
                    "Leitfäden & Guides"
                  ] }) }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-teal-50 dark:hover:bg-teal-950/30", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-2" }),
                      "DSGVO-Basics für Vereine"
                    ] }) }),
                    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-teal-50 dark:hover:bg-teal-950/30", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-2" }),
                      "Newsletter rechtssicher"
                    ] }) }),
                    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-teal-50 dark:hover:bg-teal-950/30", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-2" }),
                      "Mitgliederverwaltung Guide"
                    ] }) }),
                    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "w-full justify-start hover:bg-teal-50 dark:hover:bg-teal-950/30", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 mr-2" }),
                      "Notfallplan Datenpanne"
                    ] }) })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 text-lg", children: [
                    /* @__PURE__ */ jsx(Zap, { className: "h-6 w-6 text-cyan-600" }),
                    "Quick Links"
                  ] }) }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: "/tools/dsgvo-check",
                        className: "flex items-center gap-2 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300",
                        children: [
                          /* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4" }),
                          "DSGVO-Quick-Check"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: "/beratung",
                        className: "flex items-center gap-2 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300",
                        children: [
                          /* @__PURE__ */ jsx(HeartHandshake, { className: "h-4 w-4" }),
                          "Kostenlose Erstberatung"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: "/schulungen",
                        className: "flex items-center gap-2 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300",
                        children: [
                          /* @__PURE__ */ jsx(Award, { className: "h-4 w-4" }),
                          "Vereinsschulungen"
                        ]
                      }
                    ) }),
                    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: "/faq/vereine",
                        className: "flex items-center gap-2 text-cyan-600 hover:text-cyan-700 dark:text-cyan-400 dark:hover:text-cyan-300",
                        children: [
                          /* @__PURE__ */ jsx(MessageSquare, { className: "h-4 w-4" }),
                          "Häufige Fragen"
                        ]
                      }
                    ) })
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "mt-8 border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-950/30", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 text-red-800 dark:text-red-200", children: [
                  /* @__PURE__ */ jsx(AlertCircle, { className: "h-6 w-6" }),
                  "Notfall: Datenpanne - Was tun?"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-red-700 dark:text-red-300 font-bold", children: "1" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-1", children: "Dokumentieren" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: "Art, Umfang und Zeitpunkt festhalten" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-red-700 dark:text-red-300 font-bold", children: "2" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-1", children: "Sichern" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: "Weitere Schäden verhindern" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-red-700 dark:text-red-300 font-bold", children: "3" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-1", children: "Melden" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: "72h an Aufsichtsbehörde" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-red-700 dark:text-red-300 font-bold", children: "4" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-1", children: "Informieren" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: "Betroffene benachrichtigen" })
                  ] })
                ] }) })
              ] })
            ]
          }
        ) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-12 bg-white dark:bg-gray-900", children: /* @__PURE__ */ jsx("div", { className: "container px-4 mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "Verwandte Compliance-Themen" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-kindergarten", className: "group", children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-emerald-600 dark:text-emerald-400 group-hover:underline mb-2", children: "Datenschutz Kindergarten" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "DSGVO-Compliance für Kitas" })
          ] }) }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/dsgvo-vermieter", className: "group", children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-emerald-600 dark:text-emerald-400 group-hover:underline mb-2", children: "DSGVO für Vermieter" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Datenschutz in der Immobilienverwaltung" })
          ] }) }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-arztpraxis", className: "group", children: /* @__PURE__ */ jsx(Card, { className: "h-full hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-emerald-600 dark:text-emerald-400 group-hover:underline mb-2", children: "Datenschutz Arztpraxis" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: "DSGVO für niedergelassene Ärzte" })
          ] }) }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxs("section", { className: "py-20 bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 dark:from-emerald-950 dark:via-teal-900 dark:to-cyan-950 relative overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" }),
          /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-20 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse delay-1000" })
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
              /* @__PURE__ */ jsx(HeartHandshake, { className: "h-16 w-16 text-white mx-auto mb-6" }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-6", children: "Machen Sie Ihren Verein DSGVO-fit!" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-emerald-100 mb-8 max-w-2xl mx-auto", children: "Schützen Sie Ihren Verein vor Bußgeldern und schaffen Sie Vertrauen bei Ihren Mitgliedern. Wir begleiten Sie Schritt für Schritt zur vollständigen DSGVO-Compliance." }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-12", children: [
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-white text-emerald-700 hover:bg-emerald-50 shadow-lg hover:shadow-xl transition-all duration-300",
                    children: [
                      /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 mr-2" }),
                      "Kostenlose Erstberatung vereinbaren"
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
                      "Vereins-Starterpaket anfordern"
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
                      /* @__PURE__ */ jsx(Euro, { className: "h-10 w-10 text-emerald-300 mx-auto mb-3" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: "Faire Preise" }),
                      /* @__PURE__ */ jsx("p", { className: "text-emerald-100 text-sm", children: "Spezielle Konditionen für gemeinnützige Vereine" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300",
                    whileHover: { scale: 1.05 },
                    children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-10 w-10 text-teal-300 mx-auto mb-3" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: "Vereinserfahrung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-teal-100 text-sm", children: "Über 500 Vereine erfolgreich beraten" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    className: "bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300",
                    whileHover: { scale: 1.05 },
                    children: [
                      /* @__PURE__ */ jsx(Award, { className: "h-10 w-10 text-cyan-300 mx-auto mb-3" }),
                      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: "Zertifizierte Expertise" }),
                      /* @__PURE__ */ jsx("p", { className: "text-cyan-100 text-sm", children: "TÜV-geprüfte Datenschutzbeauftragte" })
                    ]
                  }
                )
              ] })
            ]
          }
        ) })
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  DsgvoVereineComprehensive as default
};
