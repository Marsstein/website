import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { Menu, Church, Clock, Target, BookOpen, CheckCircle, Scale, Lock, Users, Heart, Globe, Database, Building, Eye, Gavel, Shield, FileText, AlertTriangle, MessageSquare, Mail, Video, Edit3, Settings, Network, GraduationCap, Calendar, Award, BarChart3, ExternalLink, TrendingUp, RotateCcw, Activity, PieChart, LineChart, Lightbulb, ArrowLeft, Download, Check } from "lucide-react";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "../main.mjs";
import "vite-react-ssg";
import "react-router-dom";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-progress";
import "@radix-ui/react-tabs";
const sections = [
  { id: "ueberblick", title: "Überblick", readTime: "10 Min" },
  { id: "geltungsbereich", title: "Geltungsbereich", readTime: "12 Min" },
  { id: "kirchliche-besonderheiten", title: "Kirchliche Besonderheiten", readTime: "15 Min" },
  { id: "seelsorgegeheimnis", title: "Seelsorgegeheimnis", readTime: "18 Min" },
  { id: "mitgliederdaten", title: "Mitgliederdaten-Management", readTime: "25 Min" },
  { id: "kirchenbuchfuehrung", title: "Kirchenbuchführung", readTime: "22 Min" },
  { id: "ehrenamtlichen-datenschutz", title: "Ehrenamtlichen-Datenschutz", readTime: "20 Min" },
  { id: "gemeindekommunikation", title: "Gemeindekommunikation", readTime: "24 Min" },
  { id: "datenschutzbeauftragte", title: "Kirchliche Datenschutzbeauftragte", readTime: "20 Min" },
  { id: "betroffenenrechte", title: "Betroffenenrechte in der Kirche", readTime: "26 Min" },
  { id: "technische-massnahmen", title: "Technische und Organisatorische Maßnahmen", readTime: "22 Min" },
  { id: "schulung-sensibilisierung", title: "Schulung & Sensibilisierung", readTime: "18 Min" },
  { id: "audit-bewertung", title: "Audit & Compliance-Bewertung", readTime: "24 Min" },
  { id: "implementierung", title: "Implementierungsroadmap", readTime: "35 Min" },
  { id: "compliance-ueberpruefung", title: "Kontinuierliche Compliance-Überprüfung", readTime: "22 Min" }
];
function DsgEkdGuide() {
  const [activeSection, setActiveSection] = useState("ueberblick");
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);
  const sectionRefs = useRef({});
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const totalReadTime = sections.reduce((total, section) => {
    const time = parseInt(section.readTime.replace(" Min", ""));
    return total + time;
  }, 0);
  useEffect(() => {
    const currentIndex = sections.findIndex((s) => s.id === activeSection);
    const progress = (currentIndex + 1) / sections.length * 100;
    setReadingProgress(progress);
  }, [activeSection]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);
  const toggleTask = (taskId) => {
    setCompletedTasks(
      (prev) => prev.includes(taskId) ? prev.filter((id) => id !== taskId) : [...prev, taskId]
    );
  };
  const TaskCard = ({ title, description, id, difficulty = "medium" }) => {
    const isCompleted = completedTasks.includes(id);
    const difficultyColors = {
      easy: "bg-green-100 text-green-800",
      medium: "bg-yellow-100 text-yellow-800",
      hard: "bg-red-100 text-red-800"
    };
    return /* @__PURE__ */ jsx(Card, { className: `mb-4 transition-all ${isCompleted ? "bg-green-50 border-green-200" : "hover:shadow-md"}`, children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => toggleTask(id),
          className: `mt-1 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${isCompleted ? "bg-green-500 border-green-500 text-white" : "border-gray-300 hover:border-purple-500"}`,
          children: isCompleted && /* @__PURE__ */ jsx(Check, { className: "w-4 h-4" })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
          /* @__PURE__ */ jsx("h4", { className: `font-medium ${isCompleted ? "line-through text-gray-500" : ""}`, children: title }),
          /* @__PURE__ */ jsx(Badge, { className: difficultyColors[difficulty], variant: "secondary", children: difficulty === "easy" ? "Einfach" : difficulty === "medium" ? "Mittel" : "Schwer" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: `text-sm text-gray-600 ${isCompleted ? "line-through" : ""}`, children: description })
      ] })
    ] }) }) });
  };
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "DSG-EKD Implementierungsleitfaden",
        description: "Vollständiger Leitfaden zur Implementierung des Datenschutzgesetzes der Evangelischen Kirche in Deutschland (DSG-EKD). Schritt-für-Schritt Anleitung für kirchliche Einrichtungen.",
        keywords: "DSG-EKD, Datenschutz, Evangelische Kirche, Kirchlicher Datenschutz, Seelsorgegeheimnis, Mitgliederdaten, Gemeindedaten",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "DSG-EKD Implementierungsleitfaden",
          "description": "Vollständiger Leitfaden zur Implementierung des Datenschutzgesetzes der Evangelischen Kirche in Deutschland",
          "author": {
            "@type": "Organization",
            "name": "MarsJonas"
          },
          "publisher": {
            "@type": "Organization",
            "name": "MarsJonas"
          },
          "datePublished": "2024-01-26",
          "dateModified": "2024-01-26"
        }
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "fixed top-0 left-0 right-0 h-1 bg-purple-500 z-50",
          style: { scaleX }
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setIsSidebarOpen(!isSidebarOpen),
          className: "lg:hidden fixed bottom-6 right-6 z-50 bg-purple-600 text-white p-3 rounded-full shadow-lg",
          children: /* @__PURE__ */ jsx(Menu, { className: "w-6 h-6" })
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: `fixed left-0 top-0 h-full bg-white shadow-xl z-40 w-80 transform transition-transform lg:translate-x-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`, children: [
        /* @__PURE__ */ jsxs("div", { className: "p-6 border-b", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 bg-purple-100 rounded-lg", children: /* @__PURE__ */ jsx(Church, { className: "w-6 h-6 text-purple-600" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "font-bold text-lg", children: "DSG-EKD Guide" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Kirchlicher Datenschutz" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600 mb-2", children: [
            /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
            /* @__PURE__ */ jsxs("span", { children: [
              totalReadTime,
              " Min Lesezeit"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm text-gray-600 mb-1", children: [
              /* @__PURE__ */ jsx("span", { children: "Fortschritt" }),
              /* @__PURE__ */ jsxs("span", { children: [
                Math.round(readingProgress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsx(Progress, { value: readingProgress, className: "h-2" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("nav", { className: "p-6 overflow-y-auto h-full pb-32", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: sections.map((section, index) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
          "a",
          {
            href: `#${section.id}`,
            onClick: () => setIsSidebarOpen(false),
            className: `flex items-center justify-between p-3 rounded-lg transition-colors ${activeSection === section.id ? "bg-purple-100 text-purple-900" : "hover:bg-gray-100"}`,
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium", children: section.title }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: section.readTime })
              ] }),
              /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm ${activeSection === section.id ? "border-purple-500 bg-purple-500 text-white" : "border-gray-300"}`, children: index + 1 })
            ]
          }
        ) }, section.id)) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:ml-80 min-h-screen", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto px-6 py-12", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            className: "mb-12",
            children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-purple-100 rounded-xl", children: /* @__PURE__ */ jsx(Church, { className: "w-8 h-8 text-purple-600" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h1", { className: "text-4xl font-bold text-white mb-2", children: "DSG-EKD Implementierungsleitfaden" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl text-purple-200", children: "Datenschutzgesetz der Evangelischen Kirche in Deutschland" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 mb-6", children: [
                /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-100 text-purple-800", children: [
                  /* @__PURE__ */ jsx(Church, { className: "w-4 h-4 mr-2" }),
                  "Kirchlicher Datenschutz"
                ] }),
                /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-100 text-blue-800", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 mr-2" }),
                  totalReadTime,
                  " Min Lesezeit"
                ] }),
                /* @__PURE__ */ jsxs(Badge, { className: "bg-green-100 text-green-800", children: [
                  /* @__PURE__ */ jsx(Target, { className: "w-4 h-4 mr-2" }),
                  "15 Module"
                ] })
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "bg-white/10 backdrop-blur-sm border-white/20", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsx("p", { className: "text-white/90 leading-relaxed", children: "Dieser umfassende Leitfaden führt Sie durch alle Aspekte der DSG-EKD-Implementierung in kirchlichen Einrichtungen. Von den Grundlagen des Seelsorgegeheimnisses bis hin zu technischen Schutzmaßnahmen - hier finden Sie praxisnahe Anleitungen für die Umsetzung kirchlicher Datenschutzbestimmungen." }) }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx("section", { id: "ueberblick", ref: (el) => sectionRefs.current["ueberblick"] = el, className: "mb-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(BookOpen, { className: "w-8 h-8 text-purple-400" }),
                "Überblick"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-8", children: [
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Target, { className: "w-5 h-5 text-purple-600" }),
                    "Was ist DSG-EKD?"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Das Datenschutzgesetz der Evangelischen Kirche in Deutschland (DSG-EKD) ist das zentrale Datenschutzgesetz für evangelische Kirchengemeinden und kirchliche Einrichtungen in Deutschland." }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-gray-600", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }),
                      "Kirchliche Autonomie im Datenschutz"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }),
                      "Besonderer Schutz des Seelsorgegeheimnisses"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }),
                      "Angepasst an kirchliche Strukturen"
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Scale, { className: "w-5 h-5 text-purple-600" }),
                    "Rechtliche Grundlage"
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "DSG-EKD basiert auf dem kirchlichen Selbstbestimmungsrecht nach Art. 140 GG i.V.m. Art. 137 Abs. 3 WRV und orientiert sich an der DSGVO." }),
                  /* @__PURE__ */ jsx("div", { className: "bg-purple-50 p-4 rounded-lg", children: /* @__PURE__ */ jsxs("p", { className: "text-sm text-purple-800", children: [
                    /* @__PURE__ */ jsx("strong", { children: "Inkrafttreten:" }),
                    " 24. Mai 2018",
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("strong", { children: "Geltungsbereich:" }),
                    " Alle evangelischen Kirchengemeinden und kirchlichen Einrichtungen in Deutschland"
                  ] }) })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Church, { className: "w-5 h-5 text-purple-600" }),
                  "Kirchliche Besonderheiten im Datenschutz"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-purple-50 rounded-lg", children: [
                    /* @__PURE__ */ jsx(Lock, { className: "w-8 h-8 text-purple-600 mx-auto mb-2" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Seelsorgegeheimnis" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Absoluter Schutz seelsorgerlicher Kommunikation" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-blue-50 rounded-lg", children: [
                    /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-blue-600 mx-auto mb-2" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Mitgliederdaten" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Besondere Regelungen für Kirchenmitgliedschaftsdaten" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-green-50 rounded-lg", children: [
                    /* @__PURE__ */ jsx(Heart, { className: "w-8 h-8 text-green-600 mx-auto mb-2" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Ehrenamtliche" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Spezielle Bestimmungen für ehrenamtliche Mitarbeiter" })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "overview-assessment",
                  title: "Erste Bestandsaufnahme durchführen",
                  description: "Inventarisieren Sie alle Datenverarbeitungen in Ihrer Kirchengemeinde und identifizieren Sie kritische Bereiche.",
                  difficulty: "easy"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "geltungsbereich", ref: (el) => sectionRefs.current["geltungsbereich"] = el, className: "mb-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Globe, { className: "w-8 h-8 text-purple-400" }),
                "Geltungsbereich"
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Anwendungsbereich des DSG-EKD" }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-green-600", children: "✓ Erfasste Einrichtungen" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Evangelische Kirchengemeinden" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kirchenkreise und Landeskirchen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Diakonische Einrichtungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kirchliche Stiftungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Evangelische Bildungseinrichtungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kirchliche Krankenhäuser" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-red-600", children: "✗ Nicht erfasste Bereiche" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Rein private Datenverarbeitung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Staatliche Einrichtungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Nicht-kirchliche Organisationen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kommerzielle Unternehmen ohne Kirchenbezug" })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Database, { className: "w-5 h-5 text-purple-600" }),
                    "Erfasste Datenarten"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-purple-50 rounded-lg", children: [
                      /* @__PURE__ */ jsx(Church, { className: "w-5 h-5 text-purple-600" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Kirchliche Amtshandlungen" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Taufe, Konfirmation, Trauung, Bestattung" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-blue-50 rounded-lg", children: [
                      /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-blue-600" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Mitgliederdaten" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Kontaktdaten, Kirchensteuerdaten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-green-50 rounded-lg", children: [
                      /* @__PURE__ */ jsx(Heart, { className: "w-5 h-5 text-green-600" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Seelsorgedaten" }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Besonders geschützte Daten" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Building, { className: "w-5 h-5 text-purple-600" }),
                    "Organisationsstrukturen"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Gemeinde-Ebene" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Direkte Anwendung des DSG-EKD auf alle Datenverarbeitungen" }),
                      /* @__PURE__ */ jsx("div", { className: "bg-gray-50 p-3 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Kirchenvorstand, Pfarramt, Gemeindehaus" }) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Übergeordnete Ebenen" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-2", children: "Kirchenkreise und Landeskirchen als Aufsichtsbehörden" }),
                      /* @__PURE__ */ jsx("div", { className: "bg-gray-50 p-3 rounded-lg", children: /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Superintendentur, Landeskirchenamt" }) })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "scope-mapping",
                  title: "Geltungsbereich definieren",
                  description: "Erstellen Sie eine Übersicht aller von DSG-EKD erfassten Bereiche Ihrer Einrichtung.",
                  difficulty: "easy"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "kirchliche-besonderheiten", ref: (el) => sectionRefs.current["kirchliche-besonderheiten"] = el, className: "mb-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Church, { className: "w-8 h-8 text-purple-400" }),
                "Kirchliche Besonderheiten"
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Unterschiede zur DSGVO" }),
                /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-sm", children: [
                  /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
                    /* @__PURE__ */ jsx("th", { className: "text-left p-3", children: "Bereich" }),
                    /* @__PURE__ */ jsx("th", { className: "text-left p-3", children: "DSGVO" }),
                    /* @__PURE__ */ jsx("th", { className: "text-left p-3", children: "DSG-EKD" })
                  ] }) }),
                  /* @__PURE__ */ jsxs("tbody", { children: [
                    /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-medium", children: "Aufsichtsbehörde" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3", children: "Staatliche Datenschutzbehörden" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3", children: "Kirchliche Datenschutzbehörden" })
                    ] }),
                    /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-medium", children: "Besondere Kategorien" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3", children: "Religiöse Überzeugungen geschützt" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3", children: "Erweiterte Regelungen für Kirchendaten" })
                    ] }),
                    /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-medium", children: "Rechtsgrundlagen" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3", children: "Art. 6 DSGVO" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3", children: "§ 6 DSG-EKD (kirchenspezifisch)" })
                    ] }),
                    /* @__PURE__ */ jsxs("tr", { children: [
                      /* @__PURE__ */ jsx("td", { className: "p-3 font-medium", children: "Sanktionen" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3", children: "Bis zu 20 Mio. EUR" }),
                      /* @__PURE__ */ jsx("td", { className: "p-3", children: "Kirchliche Disziplinarmaßnahmen" })
                    ] })
                  ] })
                ] }) })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-6", children: [
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Scale, { className: "w-6 h-6 text-purple-600" }) }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold", children: "Kirchliche Autonomie" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 text-center", children: "Kirchen haben das Recht der Selbstbestimmung in ihren Angelegenheiten, einschließlich des Datenschutzes." })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Eye, { className: "w-6 h-6 text-blue-600" }) }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold", children: "Kirchliche Aufsicht" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 text-center", children: "Datenschutzaufsicht erfolgt durch kirchliche Behörden, nicht durch staatliche Stellen." })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Gavel, { className: "w-6 h-6 text-green-600" }) }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold", children: "Spezielle Regelungen" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 text-center", children: "Besondere Bestimmungen für kirchliche Tätigkeiten und Seelsorge." })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "church-specifics-analysis",
                  title: "Kirchliche Besonderheiten identifizieren",
                  description: "Analysieren Sie, welche kirchenspezifischen Datenschutzanforderungen in Ihrer Einrichtung relevant sind.",
                  difficulty: "medium"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "mitgliederdaten", ref: (el) => sectionRefs.current["mitgliederdaten"] = el, className: "mb-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-purple-400" }),
                "Mitgliederdaten-Management"
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Kategorien von Mitgliederdaten" }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-600", children: "Grunddaten der Mitgliedschaft" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Name, Vorname, Geburtsdatum" }),
                      /* @__PURE__ */ jsx("li", { children: "• Anschrift und Kontaktdaten" }),
                      /* @__PURE__ */ jsx("li", { children: "• Datum der Aufnahme/Taufe" }),
                      /* @__PURE__ */ jsx("li", { children: "• Konfession und Kirchenzugehörigkeit" }),
                      /* @__PURE__ */ jsx("li", { children: "• Familienstand und Beziehungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kirchensteuerpflicht" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-green-600", children: "Erweiterte Mitgliederdaten" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Ehrenamtliche Tätigkeiten" }),
                      /* @__PURE__ */ jsx("li", { children: "• Spendenbeiträge und -historie" }),
                      /* @__PURE__ */ jsx("li", { children: "• Teilnahme an Gemeindeveranstaltungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Besondere Bedürfnisse oder Anliegen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kontakte zu Seelsorgern" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kirchliche Ämter und Funktionen" })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-6", children: [
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Database, { className: "w-6 h-6 text-blue-600" }) }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold", children: "Datenerfassung" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-1", children: "Rechtsgrundlage" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-700", children: "§ 6 Abs. 1 lit. b DSG-EKD (Mitgliedschaftsverhältnis)" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-1", children: "Zweckbindung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700", children: "Verwaltung der Kirchenmitgliedschaft und Seelsorge" })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Shield, { className: "w-6 h-6 text-green-600" }) }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold", children: "Datenschutz" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-1", children: "Zugriffsbeschränkung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-green-700", children: "Nur berechtigte Mitarbeiter der Gemeinde" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-1", children: "Aufbewahrung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-yellow-700", children: "Solange Mitgliedschaft besteht + 10 Jahre" })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(Eye, { className: "w-6 h-6 text-purple-600" }) }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold", children: "Transparenz" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-1", children: "Information" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-purple-700", children: "Mitglieder über Datenverwendung informieren" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-1", children: "Betroffenenrechte" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-orange-700", children: "Auskunft, Berichtigung, Löschung" })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Praktische Umsetzung im Mitgliederdaten-Management" }),
                /* @__PURE__ */ jsxs(Tabs, { defaultValue: "erfassung", className: "w-full", children: [
                  /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "erfassung", children: "Datenerfassung" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "verwaltung", children: "Verwaltung" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "weitergabe", children: "Weitergabe" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "loeschung", children: "Löschung" })
                  ] }),
                  /* @__PURE__ */ jsxs(TabsContent, { value: "erfassung", className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Datenerfassung bei Neuaufnahmen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Aufnahmeantrag mit Datenschutzhinweisen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Einverständniserklärung für erweiterte Datennutzung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Dokumentation der Rechtsgrundlage" }),
                        /* @__PURE__ */ jsx("li", { children: "• Aufklärung über Betroffenenrechte" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Datenaktualisierung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Überprüfung der Aktualität" }),
                        /* @__PURE__ */ jsx("li", { children: "• Melderegisterabgleich (soweit zulässig)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Eigenverantwortliche Meldung von Änderungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Dokumentation aller Änderungen" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs(TabsContent, { value: "verwaltung", className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Interne Datenverwaltung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Rollenbasierte Zugriffskontrolle" }),
                        /* @__PURE__ */ jsx("li", { children: "• Protokollierung aller Datenzugriffe" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Datensicherung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Verschlüsselung sensitiver Daten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Qualitätssicherung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Plausibilitätsprüfungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Duplicate-Erkennung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Konsistenzprüfungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Datenbereinigung" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs(TabsContent, { value: "weitergabe", className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Zulässige Datenweitergabe" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• An übergeordnete kirchliche Stellen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Für statistische Zwecke (anonymisiert)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Bei gesetzlichen Verpflichtungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Mit ausdrücklicher Einwilligung" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Unzulässige Weitergabe" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• An Dritte ohne Rechtsgrundlage" }),
                        /* @__PURE__ */ jsx("li", { children: "• Für kommerzielle Zwecke" }),
                        /* @__PURE__ */ jsx("li", { children: "• Ohne Wissen der Betroffenen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Über den Zweck hinausgehend" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs(TabsContent, { value: "loeschung", className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Löschfristen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Grunddaten: 10 Jahre nach Austritt" }),
                        /* @__PURE__ */ jsx("li", { children: "• Spendendaten: Nach steuerrechtlichen Vorgaben" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kommunikationsdaten: 2 Jahre" }),
                        /* @__PURE__ */ jsx("li", { children: "• Veranstaltungsdaten: 1 Jahr" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Löschverfahren" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Automatisierte Löschroutinen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Manuelle Überprüfung vor Löschung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Sichere Datenvernichtung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Dokumentation der Löschung" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "member-data-inventory",
                  title: "Mitgliederdaten-Inventar erstellen",
                  description: "Erstellen Sie eine vollständige Übersicht aller in Ihrer Gemeinde verarbeiteten Mitgliederdaten inkl. Rechtsgrundlagen und Löschfristen.",
                  difficulty: "medium"
                }
              ),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "member-data-processes",
                  title: "Datenschutzprozesse für Mitgliederverwaltung definieren",
                  description: "Entwickeln Sie standardisierte Prozesse für Datenerfassung, -aktualisierung, -weitergabe und -löschung in der Mitgliederverwaltung.",
                  difficulty: "hard"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "kirchenbuchfuehrung", ref: (el) => sectionRefs.current["kirchenbuchfuehrung"] = el, className: "mb-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(FileText, { className: "w-8 h-8 text-purple-400" }),
                "Kirchenbuchführung"
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Arten kirchlicher Aufzeichnungen" }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-600", children: "Traditionelle Kirchenbücher" }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: "Taufbuch" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-700", children: "Aufzeichnung aller Taufen mit Datum, Namen, Eltern, Taufpaten" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: "Traubuch" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-green-700", children: "Dokumentation kirchlicher Trauungen inkl. Zeugen" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-3 rounded-lg", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: "Bestattungsbuch" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700", children: "Verzeichnis aller kirchlichen Bestattungen" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: "Konfirmandenbuch" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-purple-700", children: "Aufzeichnungen zur Konfirmation und Konfirmandenzeit" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-orange-600", children: "Moderne Dokumentationssysteme" }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-3 rounded-lg", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: "Digitale Kirchenbücher" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-orange-700", children: "Elektronische Erfassung und Verwaltung kirchlicher Daten" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-3 rounded-lg", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: "Mitgliederverwaltungssysteme" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-yellow-700", children: "Integrierte Software für Gemeindeverwaltung" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-3 rounded-lg", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: "Archivierungssysteme" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-red-700", children: "Langzeitarchivierung wichtiger Dokumente" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-3 rounded-lg", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium text-sm", children: "Backup-Systeme" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-indigo-700", children: "Sichere Datenerhaltung für künftige Generationen" })
                      ] })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-6", children: [
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Scale, { className: "w-5 h-5 text-purple-600" }),
                    "Rechtliche Grundlagen"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-1", children: "DSG-EKD Grundlage" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs", children: "§ 6 Abs. 1 lit. c - Erfüllung kirchlicher Aufgaben" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-1", children: "Kirchenrecht" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Verpflichtung zur ordnungsgemäßen Buchführung" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-1", children: "Historische Bedeutung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Kulturelle und genealogische Dokumentation" })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Lock, { className: "w-5 h-5 text-blue-600" }),
                    "Datenschutzanforderungen"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-1", children: "Zugriffsbeschränkung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Nur autorisierte Personen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-1", children: "Datenminimierung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Nur notwendige Angaben erfassen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-1", children: "Archivierung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Dauerhafte, sichere Aufbewahrung" })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-green-600" }),
                    "Aufbewahrungsfristen"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-1", children: "Kirchenbücher" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Dauerhaft (historischer Wert)" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-1", children: "Nebenregister" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs", children: "30 Jahre nach letztem Eintrag" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium mb-1", children: "Arbeitskopien" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Nach Zweckerfüllung löschen" })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Digitalisierung der Kirchenbuchführung" }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-green-600", children: "Vorteile der Digitalisierung" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }),
                        "Bessere Lesbarkeit und Durchsuchbarkeit"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }),
                        "Schutz vor physischem Verlust"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }),
                        "Vereinfachte Datenauswertung"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }),
                        "Automatisierte Backup-Möglichkeiten"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }),
                        "Platzersparnis bei der Lagerung"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-orange-600", children: "Herausforderungen beachten" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500" }),
                        "Technische Obsoleszenz verhindern"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500" }),
                        "Datenschutz bei Digitalisierung beachten"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500" }),
                        "Rechtssichere digitale Signaturen"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500" }),
                        "Schulung der Mitarbeiter erforderlich"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500" }),
                        "Hohe Anfangsinvestitionen"
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Best Practices für digitale Kirchenbuchführung" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Standardisierte Datenformate verwenden" }),
                      /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Datensicherung auf verschiedene Medien" }),
                      /* @__PURE__ */ jsx("li", { children: "• Zugriffsrechte klar definieren und begrenzen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Audit-Trail für alle Änderungen führen" })
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Originale parallel aufbewahren" }),
                      /* @__PURE__ */ jsx("li", { children: "• Verschlüsselung sensitiver Daten" }),
                      /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Integritätsprüfungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Notfallplan für Systemausfälle" })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "church-records-audit",
                  title: "Kirchenbuch-Bestandsaufnahme durchführen",
                  description: "Inventarisieren Sie alle kirchlichen Aufzeichnungen (analog und digital) und bewerten Sie den Datenschutz-Status.",
                  difficulty: "medium"
                }
              ),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "digitization-strategy",
                  title: "Digitalisierungsstrategie entwickeln",
                  description: "Erstellen Sie einen Plan für die schrittweise Digitalisierung Ihrer Kirchenbücher unter Beachtung des Datenschutzes.",
                  difficulty: "hard"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "ehrenamtlichen-datenschutz", ref: (el) => sectionRefs.current["ehrenamtlichen-datenschutz"] = el, className: "mb-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Heart, { className: "w-8 h-8 text-purple-400" }),
                "Ehrenamtlichen-Datenschutz"
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Besonderheiten beim Ehrenamtlichen-Datenschutz" }),
                /* @__PURE__ */ jsx("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4 mb-6", children: /* @__PURE__ */ jsxs("p", { className: "text-blue-800 mb-2", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Wichtig:" }),
                  " Ehrenamtliche Mitarbeiter haben oft Zugang zu sensiblen Gemeindedaten, ohne die gleiche Datenschutz-Ausbildung wie hauptamtliche Mitarbeiter zu haben."
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-purple-600", children: "Typische ehrenamtliche Rollen" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Kirchenvorstandsmitglieder" }),
                      /* @__PURE__ */ jsx("li", { children: "• Konfirmandenarbeit-Mitarbeiter" }),
                      /* @__PURE__ */ jsx("li", { children: "• Besuchsdienst-Teams" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kinder- und Jugendgruppenleiter" }),
                      /* @__PURE__ */ jsx("li", { children: "• Chor- und Musikgruppenleiter" }),
                      /* @__PURE__ */ jsx("li", { children: "• Veranstaltungsorganisatoren" }),
                      /* @__PURE__ */ jsx("li", { children: "• Öffentlichkeitsarbeiter" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kassierer und Schatzmeister" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-green-600", children: "Datenschutz-Herausforderungen" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Verwendung privater Geräte und E-Mail-Adressen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Ungeschützte Übertragung von Kontaktdaten" }),
                      /* @__PURE__ */ jsx("li", { children: "• Informelle Kommunikation über Gemeindemitglieder" }),
                      /* @__PURE__ */ jsx("li", { children: "• Unzureichende IT-Sicherheit im privaten Umfeld" }),
                      /* @__PURE__ */ jsx("li", { children: "• Fehlende Kenntnis über Betroffenenrechte" }),
                      /* @__PURE__ */ jsx("li", { children: "• Unklare Zuständigkeiten und Verantwortlichkeiten" }),
                      /* @__PURE__ */ jsx("li", { children: "• Schwierige Kontrolle von Datenzugriffen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Hohe Fluktuation in ehrenamtlichen Positionen" })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-blue-600" }),
                    "Datenverarbeitung durch Ehrenamtliche"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Kontaktdaten-Management" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Teilnehmerlisten für Veranstaltungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Telefon- und E-Mail-Kontakte" }),
                        /* @__PURE__ */ jsx("li", { children: "• Notfallkontakte bei Kinder- und Jugendarbeit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Anmeldedaten für Freizeiten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Dokumentation von Aktivitäten" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Foto- und Videoaufnahmen bei Veranstaltungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Teilnahmebescheinigungen und Zertifikate" }),
                        /* @__PURE__ */ jsx("li", { children: "• Feedback- und Evaluationsbögen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Spendenaufstellungen und Belege" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Kommunikation und Newsletter" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• E-Mail-Verteiler für Gruppen" }),
                        /* @__PURE__ */ jsx("li", { children: "• WhatsApp-Gruppen für Organisation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Social Media-Beiträge mit Personenbezug" }),
                        /* @__PURE__ */ jsx("li", { children: "• Gemeindebrief-Beiträge" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-green-600" }),
                    "Schutzmaßnahmen implementieren"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Schulung und Sensibilisierung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Datenschutz-Workshops" }),
                        /* @__PURE__ */ jsx("li", { children: "• Einfache Leitfäden und Checklisten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Ansprechpartner für Datenschutzfragen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Jährliche Auffrischungsschulungen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Technische Sicherheit" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Sichere Kommunikationskanäle bereitstellen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Verschlüsselte E-Mail-Accounts" }),
                        /* @__PURE__ */ jsx("li", { children: "• Cloud-Lösungen mit Datenschutz-Zertifikat" }),
                        /* @__PURE__ */ jsx("li", { children: "• Mobile Device Management (MDM)" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Organisatorische Maßnahmen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Klare Rollen- und Rechtevergabe" }),
                        /* @__PURE__ */ jsx("li", { children: "• Verpflichtung auf Datengeheimnis" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Zugriffsrechte-Prüfung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Dokumentierte Übergabeprozesse" })
                      ] })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Praktischer Leitfaden für Ehrenamtliche" }),
                /* @__PURE__ */ jsxs(Tabs, { defaultValue: "dos", className: "w-full", children: [
                  /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-3", children: [
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "dos", children: "Do's" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "donts", children: "Don'ts" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "emergency", children: "Im Notfall" })
                  ] }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "dos", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-green-700", children: "✓ Das sollten Sie tun" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Vor Fotoaufnahmen immer um Erlaubnis fragen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kontaktdaten nur für den vereinbarten Zweck nutzen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Bei Unsicherheit den Datenschutzbeauftragten fragen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Starke Passwörter für alle Accounts verwenden" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regelmäßig Software-Updates durchführen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Vertrauliche Gespräche nur im privaten Rahmen führen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Datenschutzerklärungen bei Veranstaltungen aushändigen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Nach Ende der Tätigkeit alle Daten löschen/zurückgeben" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-700", children: "💡 Hilfreiche Tipps" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Nutzen Sie die bereitgestellten Vorlagen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Machen Sie sich mit den Gemeinde-Richtlinien vertraut" }),
                        /* @__PURE__ */ jsx("li", { children: "• Dokumentieren Sie wichtige Entscheidungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Sprechen Sie Probleme frühzeitig an" }),
                        /* @__PURE__ */ jsx("li", { children: "• Tauschen Sie sich mit anderen Ehrenamtlichen aus" }),
                        /* @__PURE__ */ jsx("li", { children: "• Nutzen Sie Schulungsangebote der Gemeinde" }),
                        /* @__PURE__ */ jsx("li", { children: "• Führen Sie eine Liste Ihrer Datenzugriffe" }),
                        /* @__PURE__ */ jsx("li", { children: "• Informieren Sie sich über neue Bestimmungen" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "donts", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-red-700", children: "✗ Das sollten Sie vermeiden" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Keine Weitergabe von Kontaktdaten ohne Erlaubnis" }),
                        /* @__PURE__ */ jsx("li", { children: "• Keine Fotos ohne Einverständnis veröffentlichen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Keine vertraulichen Informationen in sozialen Medien" }),
                        /* @__PURE__ */ jsx("li", { children: "• Keine Nutzung unsicherer Messenger für Gemeindedaten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Keine Speicherung auf privaten Cloud-Diensten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Keine Diskussion über Gemeindemitglieder in der Öffentlichkeit" })
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Keine Daten länger als nötig aufbewahren" }),
                        /* @__PURE__ */ jsx("li", { children: "• Keine unverschlüsselten E-Mails mit sensiblen Daten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Keine Screenshots von internen Dokumenten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Keine Weitergabe von Zugangsdaten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Keine Verwendung privater Geräte ohne Genehmigung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Keine nachträglichen Änderungen ohne Dokumentation" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "emergency", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-orange-700", children: "🚨 Bei Datenschutz-Vorfällen" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium mb-2", children: "Sofortmaßnahmen" }),
                        /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
                          /* @__PURE__ */ jsx("li", { children: "1. Ruhe bewahren und Schadensbegrenzung" }),
                          /* @__PURE__ */ jsx("li", { children: "2. Datenschutzbeauftragten sofort informieren" }),
                          /* @__PURE__ */ jsx("li", { children: "3. Vorfall dokumentieren (Was, Wann, Wer)" }),
                          /* @__PURE__ */ jsx("li", { children: "4. Weitere Datenverbreitung stoppen" }),
                          /* @__PURE__ */ jsx("li", { children: "5. Betroffene Personen informieren" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("h5", { className: "font-medium mb-2", children: "Kontakte im Notfall" }),
                        /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                          /* @__PURE__ */ jsxs("div", { className: "bg-white p-2 rounded border", children: [
                            /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Datenschutzbeauftragter" }),
                            /* @__PURE__ */ jsx("p", { children: "Tel: [Telefonnummer]" }),
                            /* @__PURE__ */ jsx("p", { children: "E-Mail: [E-Mail-Adresse]" })
                          ] }),
                          /* @__PURE__ */ jsxs("div", { className: "bg-white p-2 rounded border", children: [
                            /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Pfarramt" }),
                            /* @__PURE__ */ jsx("p", { children: "Tel: [Telefonnummer]" }),
                            /* @__PURE__ */ jsx("p", { children: "Notfall: [Notfallnummer]" })
                          ] })
                        ] })
                      ] })
                    ] })
                  ] }) })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "volunteer-training-program",
                  title: "Schulungsprogramm für Ehrenamtliche entwickeln",
                  description: "Erstellen Sie ein strukturiertes Datenschutz-Schulungsprogramm speziell für ehrenamtliche Mitarbeiter in Ihrer Gemeinde.",
                  difficulty: "medium"
                }
              ),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "volunteer-data-guidelines",
                  title: "Datenschutz-Leitfaden für Ehrenamtliche",
                  description: "Entwickeln Sie einen praxisnahen, verständlichen Leitfaden für den Umgang mit personenbezogenen Daten durch Ehrenamtliche.",
                  difficulty: "hard"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "gemeindekommunikation", ref: (el) => sectionRefs.current["gemeindekommunikation"] = el, className: "mb-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(MessageSquare, { className: "w-8 h-8 text-purple-400" }),
                "Gemeindekommunikation"
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Datenschutz in der Gemeindekommunikation" }),
                /* @__PURE__ */ jsx("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4 mb-6", children: /* @__PURE__ */ jsxs("p", { className: "text-blue-800 mb-2", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Kernprinzip:" }),
                  " Auch in der Gemeindekommunikation gelten alle Datenschutzgrundsätze. Besondere Aufmerksamkeit ist bei öffentlichen Kommunikationskanälen erforderlich."
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-600", children: "Interne Kommunikation" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• E-Mail-Newsletter an Gemeindemitglieder" }),
                      /* @__PURE__ */ jsx("li", { children: "• WhatsApp-Gruppen für Arbeitskreise" }),
                      /* @__PURE__ */ jsx("li", { children: "• Intranet-Systeme für Mitarbeiter" }),
                      /* @__PURE__ */ jsx("li", { children: "• Telefon- und Adresslisten" }),
                      /* @__PURE__ */ jsx("li", { children: "• Interne Rundschreiben und Mitteilungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Sitzungsprotokolle von Gremien" }),
                      /* @__PURE__ */ jsx("li", { children: "• Mitarbeiterinformationen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Veranstaltungsankündigungen" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-green-600", children: "Öffentliche Kommunikation" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Website und Online-Auftritte" }),
                      /* @__PURE__ */ jsx("li", { children: "• Social Media-Kanäle (Facebook, Instagram)" }),
                      /* @__PURE__ */ jsx("li", { children: "• Gemeindebrief und Publikationen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Pressemitteilungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Aushänge und Schaukästen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Veranstaltungsflyer" }),
                      /* @__PURE__ */ jsx("li", { children: "• YouTube-Kanal für Gottesdienste" }),
                      /* @__PURE__ */ jsx("li", { children: "• Podcast und Audio-Aufnahmen" })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-6", children: [
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Mail, { className: "w-5 h-5 text-blue-600" }),
                    "E-Mail-Kommunikation"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Best Practices" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• BCC für Rundmails verwenden" }),
                        /* @__PURE__ */ jsx("li", { children: "• Opt-in-Verfahren für Newsletter" }),
                        /* @__PURE__ */ jsx("li", { children: "• Sichere E-Mail-Server nutzen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Abmeldemöglichkeit anbieten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Zu vermeiden" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• CC bei Massenmails" }),
                        /* @__PURE__ */ jsx("li", { children: "• Sensible Daten unverschlüsselt" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automatische Weiterleitung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Veraltete Adresslisten" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Globe, { className: "w-5 h-5 text-green-600" }),
                    "Website & Social Media"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Erforderlich" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Datenschutzerklärung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Impressum" }),
                        /* @__PURE__ */ jsx("li", { children: "• Cookie-Banner" }),
                        /* @__PURE__ */ jsx("li", { children: "• Einwilligungen für Fotos" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Aufmerksamkeit bei" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Tracking-Tools" }),
                        /* @__PURE__ */ jsx("li", { children: "• Eingebettete Inhalte" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kontaktformulare" }),
                        /* @__PURE__ */ jsx("li", { children: "• Newsletter-Anmeldungen" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Video, { className: "w-5 h-5 text-purple-600" }),
                    "Foto & Video"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Einwilligungen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Vor Aufnahme einholen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Zweck der Nutzung angeben" }),
                        /* @__PURE__ */ jsx("li", { children: "• Widerrufsmöglichkeit bieten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Bei Kindern: Eltern fragen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Besondere Vorsicht" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Live-Streaming" }),
                        /* @__PURE__ */ jsx("li", { children: "• Seelsorge-Situationen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Krankenbesuche" }),
                        /* @__PURE__ */ jsx("li", { children: "• Private Gespräche" })
                      ] })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Rechtskonforme Kommunikationstools" }),
                /* @__PURE__ */ jsxs(Tabs, { defaultValue: "email", className: "w-full", children: [
                  /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "email", children: "E-Mail-Systeme" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "messenger", children: "Messenger" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "social", children: "Social Media" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "web", children: "Web-Tools" })
                  ] }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "email", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-green-700", children: "✓ Empfohlene E-Mail-Lösungen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Microsoft 365 (Business-Tarif)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Google Workspace (mit BAA)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Deutsche Anbieter (mailbox.org, posteo)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kirchliche IT-Dienstleister" }),
                        /* @__PURE__ */ jsx("li", { children: "• Eigene Exchange-Server" }),
                        /* @__PURE__ */ jsx("li", { children: "• Verschlüsselte E-Mail-Dienste" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-red-700", children: "✗ Problematische Lösungen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Private E-Mail-Accounts" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kostenlose Anbieter ohne AV-Vertrag" }),
                        /* @__PURE__ */ jsx("li", { children: "• Unverschlüsselte Übertragung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Server außerhalb der EU" }),
                        /* @__PURE__ */ jsx("li", { children: "• Anbieter ohne Datenschutz-Zertifikat" }),
                        /* @__PURE__ */ jsx("li", { children: "• Veraltete E-Mail-Systeme" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "messenger", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-green-700", children: "✓ Datenschutzkonforme Messenger" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Signal (Ende-zu-Ende-Verschlüsselung)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Threema (Schweizer Anbieter)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Microsoft Teams (Business)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Slack (mit BAA)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Element/Matrix (dezentral)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Wire (Unternehmenslösung)" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-yellow-700", children: "⚠ Mit Vorsicht zu nutzen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• WhatsApp (nur für unkritische Inhalte)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Telegram (Cloud-basiert)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Facebook Messenger" }),
                        /* @__PURE__ */ jsx("li", { children: "• Skype (Microsoft-Account erforderlich)" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs mt-2 text-yellow-600", children: "Hinweis: Nur nach Aufklärung und mit Einwilligung verwenden" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "social", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-700", children: "Social Media Datenschutz-Checklist" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Datenschutzerklärung anpassen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Einwilligungen für Foto-Veröffentlichungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Keine sensiblen Daten posten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Moderations-Richtlinien etablieren" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Datenschutz-Schulungen" })
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Privacy-Settings optimal konfigurieren" }),
                        /* @__PURE__ */ jsx("li", { children: "• Tracking minimieren" }),
                        /* @__PURE__ */ jsx("li", { children: "• Keine automatischen Cross-Postings" }),
                        /* @__PURE__ */ jsx("li", { children: "• Ansprechpartner für Datenschutz benennen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Löschkonzept für alte Beiträge" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "web", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-green-700", children: "Datenschutzkonforme Web-Tools" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Nextcloud (eigene Installation)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Microsoft SharePoint" }),
                        /* @__PURE__ */ jsx("li", { children: "• Google Workspace (mit AV-Vertrag)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Deutsche Cloud-Anbieter" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kirchliche IT-Lösungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Open-Source-Alternativen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-orange-700", children: "Website-Essentials" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• SSL-Verschlüsselung (HTTPS)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Cookie-Consent-Management" }),
                        /* @__PURE__ */ jsx("li", { children: "• Datenschutzkonforme Analytics" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kontaktformular-Verschlüsselung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Sicherheitsupdates" }),
                        /* @__PURE__ */ jsx("li", { children: "• Backup-Strategie" })
                      ] })
                    ] })
                  ] }) })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "communication-audit",
                  title: "Kommunikationskanäle-Audit durchführen",
                  description: "Überprüfen Sie alle genutzten Kommunikationskanäle auf Datenschutz-Compliance und erstellen Sie Handlungsempfehlungen.",
                  difficulty: "medium"
                }
              ),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "communication-guidelines",
                  title: "Kommunikations-Leitfaden erstellen",
                  description: "Entwickeln Sie klare Richtlinien für datenschutzkonforme Kommunikation in allen Kanälen Ihrer Gemeinde.",
                  difficulty: "hard"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "datenschutzbeauftragte", ref: (el) => sectionRefs.current["datenschutzbeauftragte"] = el, className: "mb-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-purple-400" }),
                "Kirchliche Datenschutzbeauftragte"
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Rolle und Aufgaben des kirchlichen Datenschutzbeauftragten" }),
                /* @__PURE__ */ jsx("div", { className: "bg-purple-50 border-l-4 border-purple-500 p-4 mb-6", children: /* @__PURE__ */ jsxs("p", { className: "text-purple-800 mb-2", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Besonderheit:" }),
                  " Nach DSG-EKD müssen kirchliche Stellen einen Datenschutzbeauftragten bestellen, der die Einhaltung des kirchlichen Datenschutzrechts überwacht."
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-600", children: "Kernaufgaben" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Überwachung der Einhaltung des DSG-EKD" }),
                      /* @__PURE__ */ jsx("li", { children: "• Durchführung von Datenschutz-Folgenabschätzungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Beratung bei datenschutzrechtlichen Fragen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Schulung und Sensibilisierung der Mitarbeiter" }),
                      /* @__PURE__ */ jsx("li", { children: "• Zusammenarbeit mit Aufsichtsbehörden" }),
                      /* @__PURE__ */ jsx("li", { children: "• Überwachung der Datenschutzdokumentation" }),
                      /* @__PURE__ */ jsx("li", { children: "• Bearbeitung von Betroffenenanfragen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Meldung von Datenschutzverletzungen" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-green-600", children: "Qualifikationsanforderungen" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Fachkundige Kenntnisse des Datenschutzrechts" }),
                      /* @__PURE__ */ jsx("li", { children: "• Verständnis für kirchliche Strukturen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kenntnis der technischen und organisatorischen Maßnahmen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Fortbildung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Unabhängigkeit und Neutralität" }),
                      /* @__PURE__ */ jsx("li", { children: "• Verschwiegenheit und Vertraulichkeit" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kommunikations- und Beratungsfähigkeiten" }),
                      /* @__PURE__ */ jsx("li", { children: "• Verständnis für Seelsorgegeheimnis" })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-6", children: [
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-blue-600" }),
                    "Bestellungsarten"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Interner DSB" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-700 mb-2", children: "Mitarbeiter der eigenen Kirchengemeinde" }),
                      /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
                        /* @__PURE__ */ jsx("p", { className: "text-green-600", children: "+ Kennt interne Strukturen" }),
                        /* @__PURE__ */ jsx("p", { className: "text-red-600", children: "- Mögliche Interessenkonflikte" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Externer DSB" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-green-700 mb-2", children: "Spezialisierte externe Fachkraft" }),
                      /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
                        /* @__PURE__ */ jsx("p", { className: "text-green-600", children: "+ Hohe Fachkompetenz" }),
                        /* @__PURE__ */ jsx("p", { className: "text-red-600", children: "- Höhere Kosten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Gemeinsamer DSB" }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-yellow-700 mb-2", children: "Für mehrere kleine Gemeinden" }),
                      /* @__PURE__ */ jsxs("div", { className: "text-xs", children: [
                        /* @__PURE__ */ jsx("p", { className: "text-green-600", children: "+ Kosteneffizienz" }),
                        /* @__PURE__ */ jsx("p", { className: "text-red-600", children: "- Begrenzte Verfügbarkeit" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Scale, { className: "w-5 h-5 text-green-600" }),
                    "Rechtliche Stellung"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Unabhängigkeit" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Keine Weisungsgebundenheit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Direkter Zugang zur Leitungsebene" }),
                        /* @__PURE__ */ jsx("li", { children: "• Schutz vor Benachteiligung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kündigungsschutz" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Befugnisse" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Zugang zu allen relevanten Informationen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Teilnahme an relevanten Besprechungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kontakt zu Aufsichtsbehörden" }),
                        /* @__PURE__ */ jsx("li", { children: "• Eingriffsrechte bei Verstößen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Pflichten" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Verschwiegenheit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Fortbildungspflicht" }),
                        /* @__PURE__ */ jsx("li", { children: "• Dokumentationspflicht" }),
                        /* @__PURE__ */ jsx("li", { children: "• Berichtspflicht" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Target, { className: "w-5 h-5 text-purple-600" }),
                    "Praktische Umsetzung"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Arbeitsorganisation" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Sprechstunden einrichten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kontaktdaten veröffentlichen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Berichte" }),
                        /* @__PURE__ */ jsx("li", { children: "• Jahresplanung erstellen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Dokumentation" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Tätigkeitsberichte" }),
                        /* @__PURE__ */ jsx("li", { children: "• Beratungsdokumentation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Schulungsnachweise" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident-Berichte" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Netzwerk" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Kontakt zu anderen DSB" }),
                        /* @__PURE__ */ jsx("li", { children: "• Teilnahme an Fachtagungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Mitgliedschaft in Berufsverbänden" }),
                        /* @__PURE__ */ jsx("li", { children: "• Austausch mit Aufsichtsbehörden" })
                      ] })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "dpo-selection",
                  title: "Datenschutzbeauftragten bestellen",
                  description: "Wählen Sie einen qualifizierten Datenschutzbeauftragten aus und regeln Sie dessen rechtliche Stellung in Ihrer Gemeinde.",
                  difficulty: "medium"
                }
              ),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "dpo-procedures",
                  title: "DSB-Arbeitsorganisation etablieren",
                  description: "Schaffen Sie die organisatorischen Strukturen für die effektive Arbeit des Datenschutzbeauftragten.",
                  difficulty: "medium"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "betroffenenrechte", ref: (el) => sectionRefs.current["betroffenenrechte"] = el, className: "mb-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Scale, { className: "w-8 h-8 text-purple-400" }),
                "Betroffenenrechte in der Kirche"
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Betroffenenrechte nach DSG-EKD" }),
                /* @__PURE__ */ jsx("div", { className: "bg-blue-50 border-l-4 border-blue-500 p-4 mb-6", children: /* @__PURE__ */ jsxs("p", { className: "text-blue-800 mb-2", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Grundsatz:" }),
                  " Die DSG-EKD gewährt Betroffenen ähnliche Rechte wie die DSGVO, berücksichtigt aber kirchliche Besonderheiten wie das Seelsorgegeheimnis und kirchliche Autonomie."
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-600", children: "Grundlegende Rechte" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Recht auf Information (Art. 12-14 DSG-EKD)" }),
                      /* @__PURE__ */ jsx("li", { children: "• Recht auf Auskunft (Art. 15 DSG-EKD)" }),
                      /* @__PURE__ */ jsx("li", { children: "• Recht auf Berichtigung (Art. 16 DSG-EKD)" }),
                      /* @__PURE__ */ jsx("li", { children: "• Recht auf Löschung (Art. 17 DSG-EKD)" }),
                      /* @__PURE__ */ jsx("li", { children: "• Recht auf Einschränkung (Art. 18 DSG-EKD)" }),
                      /* @__PURE__ */ jsx("li", { children: "• Recht auf Datenübertragbarkeit (Art. 20 DSG-EKD)" }),
                      /* @__PURE__ */ jsx("li", { children: "• Widerspruchsrecht (Art. 21 DSG-EKD)" }),
                      /* @__PURE__ */ jsx("li", { children: "• Recht auf Beschwerde (Art. 77 DSG-EKD)" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-orange-600", children: "Kirchliche Besonderheiten" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Beschränkungen bei Seelsorgedaten" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kirchliche Interesse können Rechte begrenzen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Beschwerde bei kirchlichen Aufsichtsbehörden" }),
                      /* @__PURE__ */ jsx("li", { children: "• Berücksichtigung kirchlicher Aufgaben" }),
                      /* @__PURE__ */ jsx("li", { children: "• Schutz der kirchlichen Autonomie" }),
                      /* @__PURE__ */ jsx("li", { children: "• Besondere Regelungen für Mitarbeiterdaten" }),
                      /* @__PURE__ */ jsx("li", { children: "• Einschränkungen bei historischen Daten" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kollektive kirchliche Interessen" })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-6", children: [
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5 text-blue-600" }),
                    "Auskunftsrecht"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Umfang der Auskunft" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Welche Daten verarbeitet werden" }),
                        /* @__PURE__ */ jsx("li", { children: "• Zu welchen Zwecken" }),
                        /* @__PURE__ */ jsx("li", { children: "• Rechtsgrundlage der Verarbeitung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Empfänger der Daten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Speicherdauer" }),
                        /* @__PURE__ */ jsx("li", { children: "• Herkunft der Daten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Grenzen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Seelsorgegeheimnis bleibt gewahrt" }),
                        /* @__PURE__ */ jsx("li", { children: "• Rechte Dritter schützen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Unverhältnismäßiger Aufwand" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kirchliche Interessen" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Edit3, { className: "w-5 h-5 text-green-600" }),
                    "Berichtigung & Löschung"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Berichtigung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Unverzügliche Korrektur falscher Daten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Vervollständigung unvollständiger Daten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Information aller Empfänger" }),
                        /* @__PURE__ */ jsx("li", { children: "• Dokumentation der Änderung" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Löschung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Bei Wegfall der Rechtsgrundlage" }),
                        /* @__PURE__ */ jsx("li", { children: "• Nach Zweckerreichung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Bei unrechtmäßiger Verarbeitung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Ausnahmen für Archivzwecke" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5 text-orange-600" }),
                    "Beschwerdeverfahren"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Kirchliche Aufsicht" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Beauftragter für den Datenschutz (EKD)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Landeskirchenspezifische Behörden" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kirchengerichte" }),
                        /* @__PURE__ */ jsx("li", { children: "• Schlichtungsstellen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Verfahrensablauf" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Schriftliche Beschwerde" }),
                        /* @__PURE__ */ jsx("li", { children: "• Prüfung durch Aufsichtsbehörde" }),
                        /* @__PURE__ */ jsx("li", { children: "• Stellungnahme der Kirchengemeinde" }),
                        /* @__PURE__ */ jsx("li", { children: "• Entscheidung und Maßnahmen" })
                      ] })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Praktische Umsetzung der Betroffenenrechte" }),
                /* @__PURE__ */ jsxs(Tabs, { defaultValue: "prozesse", className: "w-full", children: [
                  /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "prozesse", children: "Prozesse" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "formulare", children: "Formulare" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "fristen", children: "Fristen" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "dokumentation", children: "Dokumentation" })
                  ] }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "prozesse", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-700", children: "Eingangsbearbeitung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Eindeutige Identifikation des Antragstellers" }),
                        /* @__PURE__ */ jsx("li", { children: "• Eingangsbestätigung innerhalb von 72h" }),
                        /* @__PURE__ */ jsx("li", { children: "• Zuständigkeitsprüfung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Weiterleitungsverfahren bei externer Zuständigkeit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Erfassung in Betroffenenrechte-Register" }),
                        /* @__PURE__ */ jsx("li", { children: "• Information des Datenschutzbeauftragten" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-green-700", children: "Bearbeitung & Antwort" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Sammlung aller relevanten Informationen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Prüfung von Ausnahmen und Beschränkungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Rücksprache mit betroffenen Abteilungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Formulierung der Antwort" }),
                        /* @__PURE__ */ jsx("li", { children: "• Qualitätskontrolle durch DSB" }),
                        /* @__PURE__ */ jsx("li", { children: "• Versendung und Archivierung" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "formulare", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-purple-700", children: "Antragsformulare" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Auskunftsantrag" }),
                        /* @__PURE__ */ jsx("li", { children: "• Berichtigungsantrag" }),
                        /* @__PURE__ */ jsx("li", { children: "• Löschungsantrag" }),
                        /* @__PURE__ */ jsx("li", { children: "• Widerspruchsformular" }),
                        /* @__PURE__ */ jsx("li", { children: "• Beschwerdeformular" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-yellow-700", children: "Interne Vorlagen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Eingangsbestätigung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Auskunftsvorlage" }),
                        /* @__PURE__ */ jsx("li", { children: "• Ablehnungsschreiben" }),
                        /* @__PURE__ */ jsx("li", { children: "• Nachfragevorlage" }),
                        /* @__PURE__ */ jsx("li", { children: "• Bearbeitungsprotokoll" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-orange-700", children: "Informationsmaterial" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Merkblatt Betroffenenrechte" }),
                        /* @__PURE__ */ jsx("li", { children: "• FAQ-Sammlung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kontaktinformationen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Rechtshilfeinformationen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Verfahrensablauf" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "fristen", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-red-700", children: "Gesetzliche Fristen beachten" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "Auskunft:" }),
                          " 1 Monat (verlängerbar um 2 Monate)"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "Berichtigung:" }),
                          " Unverzüglich"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "Löschung:" }),
                          " Unverzüglich"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "Einschränkung:" }),
                          " Unverzüglich"
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsxs("li", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "Information Dritter:" }),
                          " Mit der Bearbeitung"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "Datenübertragung:" }),
                          " 1 Monat"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "Eingangsbestätigung:" }),
                          " 72 Stunden"
                        ] }),
                        /* @__PURE__ */ jsxs("li", { children: [
                          /* @__PURE__ */ jsx("strong", { children: "Fristverlängerung:" }),
                          " Begründungspflichtig"
                        ] })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "dokumentation", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-indigo-700", children: "Dokumentationspflicht" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Vollständige Antragshistorie" }),
                        /* @__PURE__ */ jsx("li", { children: "• Bearbeitungsvermerke" }),
                        /* @__PURE__ */ jsx("li", { children: "• Getroffene Maßnahmen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Ablehnungsbegründungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Nachweise für Dritten-Information" }),
                        /* @__PURE__ */ jsx("li", { children: "• Aufbewahrung für 3 Jahre" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-cyan-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-cyan-700", children: "Qualitätssicherung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Prozessreviews" }),
                        /* @__PURE__ */ jsx("li", { children: "• Auswertung der Bearbeitungszeiten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Feedback-Analyse" }),
                        /* @__PURE__ */ jsx("li", { children: "• Schulung der Bearbeiter" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Verbesserung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Benchmarking mit anderen Gemeinden" })
                      ] })
                    ] })
                  ] }) })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "data-subject-rights-procedures",
                  title: "Betroffenenrechte-Verfahren etablieren",
                  description: "Entwickeln Sie standardisierte Prozesse und Formulare für die Bearbeitung aller Betroffenenrechte in Ihrer Gemeinde.",
                  difficulty: "medium"
                }
              ),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "rights-training",
                  title: "Mitarbeiterschulung zu Betroffenenrechten",
                  description: "Schulen Sie alle relevanten Mitarbeiter im Umgang mit Betroffenenrechten und kirchlichen Besonderheiten.",
                  difficulty: "medium"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "technische-massnahmen", ref: (el) => sectionRefs.current["technische-massnahmen"] = el, className: "mb-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Settings, { className: "w-8 h-8 text-purple-400" }),
                "Technische und Organisatorische Maßnahmen"
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "TOM nach DSG-EKD" }),
                /* @__PURE__ */ jsx("div", { className: "bg-green-50 border-l-4 border-green-500 p-4 mb-6", children: /* @__PURE__ */ jsxs("p", { className: "text-green-800 mb-2", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Artikel 25 DSG-EKD:" }),
                  " Technische und organisatorische Maßnahmen sind essenziell für den Schutz personenbezogener Daten in kirchlichen Einrichtungen. Sie müssen dem Stand der Technik entsprechen und angemessen sein."
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-600", children: "Technische Maßnahmen" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Pseudonymisierung und Verschlüsselung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Vertraulichkeit der IT-Systeme" }),
                      /* @__PURE__ */ jsx("li", { children: "• Integrität der Daten" }),
                      /* @__PURE__ */ jsx("li", { children: "• Verfügbarkeit und Belastbarkeit" }),
                      /* @__PURE__ */ jsx("li", { children: "• Verfahren zur Wiederherstellung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Überprüfung und Bewertung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Zugriffskontrolle und Authentifizierung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Sichere Übertragung und Speicherung" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-orange-600", children: "Organisatorische Maßnahmen" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Datenschutz-Management-System" }),
                      /* @__PURE__ */ jsx("li", { children: "• Klare Rollen und Verantwortlichkeiten" }),
                      /* @__PURE__ */ jsx("li", { children: "• Schulungs- und Sensibilisierungsprogramme" }),
                      /* @__PURE__ */ jsx("li", { children: "• Incident-Response-Verfahren" }),
                      /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Audits und Kontrollen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Dokumentation und Nachweisführung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Vertragsmanagement mit Dienstleistern" }),
                      /* @__PURE__ */ jsx("li", { children: "• Business Continuity Planning" })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-6", children: [
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Lock, { className: "w-5 h-5 text-blue-600" }),
                    "Zugriffskontrolle"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Zugangskontrolle" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Physische Zugangskontrollen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Berechtigungskonzepte" }),
                        /* @__PURE__ */ jsx("li", { children: "• Besucherregistrierung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Schlüsselverwaltung" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Zugriffskontrolle" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Benutzerauthentifizierung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Rollenbasierte Berechtigungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Multi-Faktor-Authentifizierung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Session-Management" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Zugriffsprotokolle" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Logging aller Zugriffe" }),
                        /* @__PURE__ */ jsx("li", { children: "• Monitoring verdächtiger Aktivitäten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Auswertung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident-Detection" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Database, { className: "w-5 h-5 text-green-600" }),
                    "Datensicherheit"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Verschlüsselung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Datenverschlüsselung at rest" }),
                        /* @__PURE__ */ jsx("li", { children: "• Verschlüsselung in transit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Schlüsselmanagement" }),
                        /* @__PURE__ */ jsx("li", { children: "• Ende-zu-Ende-Verschlüsselung" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Backup & Recovery" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Datensicherung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Offsite-Backup-Lagerung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Recovery-Testing" }),
                        /* @__PURE__ */ jsx("li", { children: "• RTO/RPO-Definitionen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Datenintegrität" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Checksummen und Hashing" }),
                        /* @__PURE__ */ jsx("li", { children: "• Versionskontrolle" }),
                        /* @__PURE__ */ jsx("li", { children: "• Manipulationsschutz" }),
                        /* @__PURE__ */ jsx("li", { children: "• Audit-Trails" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Network, { className: "w-5 h-5 text-orange-600" }),
                    "IT-Sicherheit"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Netzwerksicherheit" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Firewall-Konfiguration" }),
                        /* @__PURE__ */ jsx("li", { children: "• Netzwerksegmentierung" }),
                        /* @__PURE__ */ jsx("li", { children: "• VPN für Remote-Zugriff" }),
                        /* @__PURE__ */ jsx("li", { children: "• Intrusion Detection" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Endpoint Security" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Antivirus-Software" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automatische Updates" }),
                        /* @__PURE__ */ jsx("li", { children: "• Device-Management" }),
                        /* @__PURE__ */ jsx("li", { children: "• Patch-Management" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-cyan-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Anwendungssicherheit" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Sichere Softwareentwicklung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regular Security Scans" }),
                        /* @__PURE__ */ jsx("li", { children: "• Penetration Testing" }),
                        /* @__PURE__ */ jsx("li", { children: "• Vulnerability Management" })
                      ] })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "TOM-Implementierung für Kirchengemeinden" }),
                /* @__PURE__ */ jsxs(Tabs, { defaultValue: "planung", className: "w-full", children: [
                  /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "planung", children: "Planung" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "umsetzung", children: "Umsetzung" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "monitoring", children: "Monitoring" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "wartung", children: "Wartung" })
                  ] }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "planung", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-700", children: "1. Risikoanalyse" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Identifikation aller Datenverarbeitungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Bewertung der Eintrittswahrscheinlichkeit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Abschätzung der Schadensfälle" }),
                        /* @__PURE__ */ jsx("li", { children: "• Priorisierung der Risiken" }),
                        /* @__PURE__ */ jsx("li", { children: "• Ableitung von Schutzbedarfen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Dokumentation der Risikoakzeptanz" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-green-700", children: "2. Maßnahmenplanung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Auswahl angemessener TOM" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kosten-Nutzen-Bewertung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Implementierungsreihenfolge" }),
                        /* @__PURE__ */ jsx("li", { children: "• Ressourcenplanung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Zeitplan-Erstellung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Verantwortlichkeiten definieren" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "umsetzung", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-purple-700", children: "Quick Wins" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Passwort-Richtlinien" }),
                        /* @__PURE__ */ jsx("li", { children: "• Bildschirmsperre" }),
                        /* @__PURE__ */ jsx("li", { children: "• Clean-Desk-Policy" }),
                        /* @__PURE__ */ jsx("li", { children: "• USB-Port-Blocking" }),
                        /* @__PURE__ */ jsx("li", { children: "• E-Mail-Verschlüsselung" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-yellow-700", children: "Mittelfristig" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Berechtigungskonzept" }),
                        /* @__PURE__ */ jsx("li", { children: "• Backup-Automatisierung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident-Response-Plan" }),
                        /* @__PURE__ */ jsx("li", { children: "• Monitoring-System" }),
                        /* @__PURE__ */ jsx("li", { children: "• Patch-Management" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-orange-700", children: "Langfristig" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Identity Management" }),
                        /* @__PURE__ */ jsx("li", { children: "• SIEM-System" }),
                        /* @__PURE__ */ jsx("li", { children: "• Penetration Testing" }),
                        /* @__PURE__ */ jsx("li", { children: "• ISO 27001 Zertifizierung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Security Awareness" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "monitoring", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-indigo-700", children: "Kontinuierliche Überwachung" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• KPI-Definition und -Messung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Automatisierte Alerts" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Penetration Tests" }),
                        /* @__PURE__ */ jsx("li", { children: "• Vulnerability Assessments" }),
                        /* @__PURE__ */ jsx("li", { children: "• Compliance-Checks" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident-Tracking" })
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Performance-Monitoring" }),
                        /* @__PURE__ */ jsx("li", { children: "• Log-Analyse" }),
                        /* @__PURE__ */ jsx("li", { children: "• Trend-Analyse" }),
                        /* @__PURE__ */ jsx("li", { children: "• Risk-Dashboard" }),
                        /* @__PURE__ */ jsx("li", { children: "• Management-Reporting" }),
                        /* @__PURE__ */ jsx("li", { children: "• Externe Audits" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "wartung", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-cyan-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-cyan-700", children: "Regelmäßige Wartung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Jährliche TOM-Review" }),
                        /* @__PURE__ */ jsx("li", { children: "• Aktualisierung der Risikoanalyse" }),
                        /* @__PURE__ */ jsx("li", { children: "• Update der Dokumentation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Schulung der Mitarbeiter" }),
                        /* @__PURE__ */ jsx("li", { children: "• Test der Notfallpläne" }),
                        /* @__PURE__ */ jsx("li", { children: "• Überprüfung der Wirksamkeit" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-teal-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-teal-700", children: "Kontinuierliche Verbesserung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Lessons Learned aus Incidents" }),
                        /* @__PURE__ */ jsx("li", { children: "• Benchmarking mit anderen Gemeinden" }),
                        /* @__PURE__ */ jsx("li", { children: "• Berücksichtigung neuer Bedrohungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Technologie-Updates" }),
                        /* @__PURE__ */ jsx("li", { children: "• Prozessoptimierung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Feedback-Integration" })
                      ] })
                    ] })
                  ] }) })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "tom-risk-assessment",
                  title: "TOM-Risikoanalyse durchführen",
                  description: "Führen Sie eine umfassende Risikoanalyse durch und leiten Sie angemessene technische und organisatorische Maßnahmen ab.",
                  difficulty: "hard"
                }
              ),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "tom-implementation-plan",
                  title: "TOM-Implementierungsplan erstellen",
                  description: "Entwickeln Sie einen detaillierten Plan zur schrittweisen Umsetzung der erforderlichen Sicherheitsmaßnahmen.",
                  difficulty: "hard"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "schulung-sensibilisierung", ref: (el) => sectionRefs.current["schulung-sensibilisierung"] = el, className: "mb-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(GraduationCap, { className: "w-8 h-8 text-purple-400" }),
                "Schulung & Sensibilisierung"
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Datenschutz-Bildung in der Kirchengemeinde" }),
                /* @__PURE__ */ jsx("div", { className: "bg-purple-50 border-l-4 border-purple-500 p-4 mb-6", children: /* @__PURE__ */ jsxs("p", { className: "text-purple-800 mb-2", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Erfolgsfaktor:" }),
                  " Die beste Datenschutz-Technologie nützt nichts ohne geschulte und sensibilisierte Mitarbeiter. Regelmäßige Schulungen sind essentiell für effektiven Datenschutz."
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-600", children: "Zielgruppen" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Hauptamtliche Mitarbeiter" }),
                      /* @__PURE__ */ jsx("li", { children: "• Ehrenamtliche Mitarbeiter" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kirchenvorstände" }),
                      /* @__PURE__ */ jsx("li", { children: "• Jugendmitarbeiter" }),
                      /* @__PURE__ */ jsx("li", { children: "• Pfarrer und Seelsorger" }),
                      /* @__PURE__ */ jsx("li", { children: "• Verwaltungsmitarbeiter" }),
                      /* @__PURE__ */ jsx("li", { children: "• IT-Verantwortliche" }),
                      /* @__PURE__ */ jsx("li", { children: "• Externe Dienstleister" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-orange-600", children: "Schulungsinhalte" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Grundlagen DSG-EKD vs. DSGVO" }),
                      /* @__PURE__ */ jsx("li", { children: "• Seelsorgegeheimnis und Datenschutz" }),
                      /* @__PURE__ */ jsx("li", { children: "• Betroffenenrechte und Anfragenbewältigung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Sichere IT-Nutzung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Incident Response" }),
                      /* @__PURE__ */ jsx("li", { children: "• Social Engineering Awareness" }),
                      /* @__PURE__ */ jsx("li", { children: "• Mobile Device Security" }),
                      /* @__PURE__ */ jsx("li", { children: "• Cloud-Services datenschutzkonform nutzen" })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-6", children: [
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-blue-600" }),
                    "Schulungsformate"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Präsenzschulungen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Interaktive Workshops" }),
                        /* @__PURE__ */ jsx("li", { children: "• Rollenspiele" }),
                        /* @__PURE__ */ jsx("li", { children: "• Diskussionsrunden" }),
                        /* @__PURE__ */ jsx("li", { children: "• Praxisübungen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "E-Learning" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Online-Module" }),
                        /* @__PURE__ */ jsx("li", { children: "• Interaktive Tests" }),
                        /* @__PURE__ */ jsx("li", { children: "• Video-Tutorials" }),
                        /* @__PURE__ */ jsx("li", { children: "• Selbstlernkurse" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Blended Learning" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Kombinierte Ansätze" }),
                        /* @__PURE__ */ jsx("li", { children: "• Flexible Zeiteinteilung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Individuelle Lernpfade" }),
                        /* @__PURE__ */ jsx("li", { children: "• Nachbetreuung" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "w-5 h-5 text-green-600" }),
                    "Schulungsrhythmus"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Pflichtschulungen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Grundschulung bei Eintritt" }),
                        /* @__PURE__ */ jsx("li", { children: "• Jährliche Auffrischung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Bei Gesetzesänderungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Nach Sicherheitsvorfällen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Vertiefungsschulungen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Rollenspezifische Inhalte" }),
                        /* @__PURE__ */ jsx("li", { children: "• Halbjährliche Updates" }),
                        /* @__PURE__ */ jsx("li", { children: "• Best Practice Sharing" }),
                        /* @__PURE__ */ jsx("li", { children: "• Praxisfälle besprechen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Kontinuierliche Sensibilisierung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Monatliche Newsletter" }),
                        /* @__PURE__ */ jsx("li", { children: "• Phishing-Simulationen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Datenschutz-Tipps" }),
                        /* @__PURE__ */ jsx("li", { children: "• Awareness-Kampagnen" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Award, { className: "w-5 h-5 text-purple-600" }),
                    "Erfolgsmessung"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Wissenstests" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Pre- und Post-Tests" }),
                        /* @__PURE__ */ jsx("li", { children: "• Lernerfolgskontrolle" }),
                        /* @__PURE__ */ jsx("li", { children: "• Zertifikate ausstellen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Wiederholungsschleifen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Praktische Evaluierung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Simulation von Phishing" }),
                        /* @__PURE__ */ jsx("li", { children: "• Mystery Shopping" }),
                        /* @__PURE__ */ jsx("li", { children: "• Verhaltensbeobachtung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident-Rate-Tracking" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-cyan-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Feedback & Verbesserung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Teilnehmerfeedback" }),
                        /* @__PURE__ */ jsx("li", { children: "• 360-Grad-Bewertungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Anpassung" }),
                        /* @__PURE__ */ jsx("li", { children: "• ROI-Messung" })
                      ] })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Praxisorientierte Schulungsmodule" }),
                /* @__PURE__ */ jsxs(Tabs, { defaultValue: "grundlagen", className: "w-full", children: [
                  /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "grundlagen", children: "Grundlagen" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "praxis", children: "Praxis" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "spezial", children: "Spezialthemen" }),
                    /* @__PURE__ */ jsx(TabsTrigger, { value: "incidents", children: "Incident Response" })
                  ] }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "grundlagen", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-700", children: "Modul 1: DSG-EKD Basics (2h)" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Geschichte und Entwicklung der DSG-EKD" }),
                        /* @__PURE__ */ jsx("li", { children: "• Unterschiede zur DSGVO" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kirchliche Autonomie im Datenschutz" }),
                        /* @__PURE__ */ jsx("li", { children: "• Grundprinzipien der Datenverarbeitung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Rechtsgrundlagen für kirchliche Verarbeitung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Sanktionen und Aufsichtsbehörden" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-green-700", children: "Modul 2: Betroffenenrechte (1.5h)" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Übersicht aller Betroffenenrechte" }),
                        /* @__PURE__ */ jsx("li", { children: "• Fristen und Verfahrensabläufe" }),
                        /* @__PURE__ */ jsx("li", { children: "• Praktische Bearbeitung von Anfragen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Grenzen und Ausnahmen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kirchliche Besonderheiten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Musterformulare und -antworten" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "praxis", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-purple-700", children: "Modul 3: Sichere IT-Nutzung (2h)" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Passwort-Sicherheit und 2FA" }),
                        /* @__PURE__ */ jsx("li", { children: "• E-Mail-Sicherheit und Phishing" }),
                        /* @__PURE__ */ jsx("li", { children: "• Cloud-Services sicher nutzen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Mobile Geräte absichern" }),
                        /* @__PURE__ */ jsx("li", { children: "• WLAN und Netzwerksicherheit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Software-Updates und Downloads" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-yellow-700", children: "Modul 4: Kommunikation & Social Media (1.5h)" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Datenschutzkonforme Kommunikation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Social Media Guidelines" }),
                        /* @__PURE__ */ jsx("li", { children: "• Foto- und Videorechte" }),
                        /* @__PURE__ */ jsx("li", { children: "• Newsletter und E-Mail-Marketing" }),
                        /* @__PURE__ */ jsx("li", { children: "• Website und Cookie-Management" }),
                        /* @__PURE__ */ jsx("li", { children: "• Live-Streaming und Online-Gottesdienste" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "spezial", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-orange-700", children: "Seelsorge & Datenschutz" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Absoluter Schutz des Seelsorgegeheimnisses" }),
                        /* @__PURE__ */ jsx("li", { children: "• Dokumentation von Seelsorgegesprächen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Digitale Seelsorge und Datenschutz" }),
                        /* @__PURE__ */ jsx("li", { children: "• Umgang mit besonderen Kategorien" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-red-700", children: "Kinder- & Jugendarbeit" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Einwilligungen von Minderjährigen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Elternrechte und -pflichten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Foto- und Videorechte bei Minderjährigen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Datenschutz in der digitalen Jugendarbeit" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-4 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-indigo-700", children: "Verwaltung & Finanzen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Spendenverwaltung und -nachweis" }),
                        /* @__PURE__ */ jsx("li", { children: "• Mitgliederverwaltung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Personaldaten-Management" }),
                        /* @__PURE__ */ jsx("li", { children: "• Archivierung und Löschfristen" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(TabsContent, { value: "incidents", className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-red-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-red-700", children: "Datenschutzvorfälle erkennen und melden" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Was ist ein Datenschutzvorfall?" }),
                        /* @__PURE__ */ jsx("li", { children: "• Typische Vorfälle in Kirchengemeinden" }),
                        /* @__PURE__ */ jsx("li", { children: "• Sofortmaßnahmen bei Datenpannen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Meldepflichten und Fristen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kommunikation mit Betroffenen" })
                      ] }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Eskalationswege und Zuständigkeiten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Dokumentation von Vorfällen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Lessons Learned und Prävention" }),
                        /* @__PURE__ */ jsx("li", { children: "• Umgang mit Medien und Öffentlichkeit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Wiederherstellung nach Incidents" })
                      ] })
                    ] })
                  ] }) })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "training-curriculum",
                  title: "Schulungskonzept entwickeln",
                  description: "Erstellen Sie ein umfassendes Schulungskonzept mit modularen Inhalten für alle Zielgruppen in Ihrer Gemeinde.",
                  difficulty: "medium"
                }
              ),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "awareness-campaign",
                  title: "Datenschutz-Awareness-Kampagne starten",
                  description: "Planen und implementieren Sie eine kontinuierliche Sensibilisierungskampagne für alle Mitarbeiter.",
                  difficulty: "medium"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "audit-bewertung", ref: (el) => sectionRefs.current["audit-bewertung"] = el, className: "mb-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(BarChart3, { className: "w-8 h-8 text-purple-400" }),
                "Audit & Compliance-Bewertung"
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Systematische Datenschutz-Prüfung" }),
                /* @__PURE__ */ jsx("div", { className: "bg-green-50 border-l-4 border-green-500 p-4 mb-6", children: /* @__PURE__ */ jsxs("p", { className: "text-green-800 mb-2", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Kontinuierliche Verbesserung:" }),
                  " Regelmäßige Audits und Bewertungen sind essentiell, um die Wirksamkeit der Datenschutzmaßnahmen zu überprüfen und kontinuierlich zu verbessern."
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-600", children: "Audit-Arten" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Interne Datenschutz-Audits" }),
                      /* @__PURE__ */ jsx("li", { children: "• Externe unabhängige Prüfungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Compliance-Assessments" }),
                      /* @__PURE__ */ jsx("li", { children: "• Risiko-Evaluierungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Prozess-Reviews" }),
                      /* @__PURE__ */ jsx("li", { children: "• IT-Sicherheitsprüfungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Penetration Tests" }),
                      /* @__PURE__ */ jsx("li", { children: "• Gap-Analysen" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-orange-600", children: "Prüfungsbereiche" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Organisatorische Maßnahmen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Technische Sicherheit" }),
                      /* @__PURE__ */ jsx("li", { children: "• Verarbeitungsverzeichnisse" }),
                      /* @__PURE__ */ jsx("li", { children: "• Betroffenenrechte-Verfahren" }),
                      /* @__PURE__ */ jsx("li", { children: "• Auftragsverarbeitung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Datenschutz-Folgenabschätzungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Incident Response" }),
                      /* @__PURE__ */ jsx("li", { children: "• Schulungs- und Sensibilisierungsmaßnahmen" })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-6", children: [
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "w-5 h-5 text-blue-600" }),
                    "Internes Audit"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Vorteile" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Kostengünstiger" }),
                        /* @__PURE__ */ jsx("li", { children: "• Interne Expertise nutzen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Überwachung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Vertraute Prozesse" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Herausforderungen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Objektivität sicherstellen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Fachliche Kompetenz" }),
                        /* @__PURE__ */ jsx("li", { children: "• Zeitliche Ressourcen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Interessenskonflikte" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Best Practices" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Rotationsprinzip anwenden" }),
                        /* @__PURE__ */ jsx("li", { children: "• Externe Beratung hinzuziehen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Standardisierte Checklisten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Dokumentation sicherstellen" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(ExternalLink, { className: "w-5 h-5 text-green-600" }),
                    "Externes Audit"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Vorteile" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Objektive Bewertung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Spezialisierte Expertise" }),
                        /* @__PURE__ */ jsx("li", { children: "• Benchmarking möglich" }),
                        /* @__PURE__ */ jsx("li", { children: "• Glaubwürdigkeit nach außen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Herausforderungen" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Höhere Kosten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Einarbeitung erforderlich" }),
                        /* @__PURE__ */ jsx("li", { children: "• Terminliche Koordination" }),
                        /* @__PURE__ */ jsx("li", { children: "• Vertraulichkeit sicherstellen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Auswahlkriterien" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Kirchlicher Hintergrund" }),
                        /* @__PURE__ */ jsx("li", { children: "• DSG-EKD Expertise" }),
                        /* @__PURE__ */ jsx("li", { children: "• Referenzen prüfen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Zertifizierungen" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 text-purple-600" }),
                    "Kontinuierliches Monitoring"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "KPIs definieren" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Anzahl Datenschutzvorfälle" }),
                        /* @__PURE__ */ jsx("li", { children: "• Bearbeitungszeit Betroffenenanfragen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Schulungsquote" }),
                        /* @__PURE__ */ jsx("li", { children: "• TOM-Compliance-Rate" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Monitoring-Tools" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Datenschutz-Dashboard" }),
                        /* @__PURE__ */ jsx("li", { children: "• Compliance-Tracking" }),
                        /* @__PURE__ */ jsx("li", { children: "• Risiko-Heatmaps" }),
                        /* @__PURE__ */ jsx("li", { children: "• Trend-Analysen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-cyan-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Reporting" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Monatliche Statusberichte" }),
                        /* @__PURE__ */ jsx("li", { children: "• Quartalsweise Management-Reports" }),
                        /* @__PURE__ */ jsx("li", { children: "• Jährliche Compliance-Reviews" }),
                        /* @__PURE__ */ jsx("li", { children: "• Ad-hoc Incident-Reports" })
                      ] })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "audit-framework",
                  title: "Audit-Framework etablieren",
                  description: "Entwickeln Sie ein systematisches Framework für interne und externe Datenschutz-Audits in Ihrer Gemeinde.",
                  difficulty: "hard"
                }
              ),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "compliance-dashboard",
                  title: "Compliance-Monitoring-System einrichten",
                  description: "Implementieren Sie ein System zur kontinuierlichen Überwachung und Messung der Datenschutz-Compliance.",
                  difficulty: "medium"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "compliance-ueberpruefung", ref: (el) => sectionRefs.current["compliance-ueberpruefung"] = el, className: "mb-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(RotateCcw, { className: "w-8 h-8 text-purple-400" }),
                "Kontinuierliche Compliance-Überprüfung"
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Lebendiger Datenschutz durch kontinuierliche Verbesserung" }),
                /* @__PURE__ */ jsx("div", { className: "bg-cyan-50 border-l-4 border-cyan-500 p-4 mb-6", children: /* @__PURE__ */ jsxs("p", { className: "text-cyan-800 mb-2", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Dynamischer Prozess:" }),
                  " Datenschutz ist kein einmaliges Projekt, sondern ein kontinuierlicher Verbesserungsprozess. Regelmäßige Überprüfungen stellen sicher, dass Ihre DSG-EKD-Compliance aktuell und wirksam bleibt."
                ] }) }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-600", children: "Überprüfungszyklen" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Tägliche Routine-Checks" }),
                      /* @__PURE__ */ jsx("li", { children: "• Wöchentliche Status-Reviews" }),
                      /* @__PURE__ */ jsx("li", { children: "• Monatliche Compliance-Berichte" }),
                      /* @__PURE__ */ jsx("li", { children: "• Quartalsweise Management-Reviews" }),
                      /* @__PURE__ */ jsx("li", { children: "• Halbjährliche Risikobewertungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Jährliche Gesamt-Audits" }),
                      /* @__PURE__ */ jsx("li", { children: "• Anlassbezogene Sonderprüfungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kontinuierliches Monitoring" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-orange-600", children: "Verbesserungsmaßnahmen" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Prozessoptimierung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Technologie-Updates" }),
                      /* @__PURE__ */ jsx("li", { children: "• Schulungsanpassungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Richtlinien-Updates" }),
                      /* @__PURE__ */ jsx("li", { children: "• Neue Compliance-Tools" }),
                      /* @__PURE__ */ jsx("li", { children: "• Organisatorische Anpassungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Stakeholder-Feedback-Integration" }),
                      /* @__PURE__ */ jsx("li", { children: "• Best-Practice-Übernahme" })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-6", children: [
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Activity, { className: "w-5 h-5 text-blue-600" }),
                    "Performance-Monitoring"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Key Performance Indicators" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Compliance-Score (0-100%)" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident-Response-Zeit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Schulungsabschlussrate" }),
                        /* @__PURE__ */ jsx("li", { children: "• Betroffenenanfragen-Bearbeitungszeit" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Qualitätsindikatoren" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Vollständigkeit der Dokumentation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Aktualität der Verfahrensanweisungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Mitarbeiter-Zufriedenheit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Stakeholder-Feedback" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Risikoindikatoren" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Anzahl kritischer Findings" }),
                        /* @__PURE__ */ jsx("li", { children: "• Trend der Sicherheitsvorfälle" }),
                        /* @__PURE__ */ jsx("li", { children: "• Compliance-Gaps" }),
                        /* @__PURE__ */ jsx("li", { children: "• Externe Bedrohungslandschaft" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(PieChart, { className: "w-5 h-5 text-green-600" }),
                    "Compliance-Dashboard"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Real-Time-Übersicht" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Aktuelle Compliance-Bewertung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Offene Maßnahmen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Anstehende Deadlines" }),
                        /* @__PURE__ */ jsx("li", { children: "• Status kritischer Kontrollen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Trend-Analyse" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Entwicklung über Zeit" }),
                        /* @__PURE__ */ jsx("li", { children: "• Vergleich zu Zielvorgaben" }),
                        /* @__PURE__ */ jsx("li", { children: "• Benchmarking mit Branche" }),
                        /* @__PURE__ */ jsx("li", { children: "• Prognose-Modelle" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Alarmierung" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Automatische Benachrichtigungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Eskalations-Workflows" }),
                        /* @__PURE__ */ jsx("li", { children: "• Deadline-Erinnerungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Critical-Issue-Alerts" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "font-bold text-lg mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(LineChart, { className: "w-5 h-5 text-purple-600" }),
                    "Continuous Improvement"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "PDCA-Zyklus" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Plan: Ziele und Maßnahmen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Do: Umsetzung der Maßnahmen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Check: Überwachung und Messung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Act: Verbesserung und Anpassung" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Innovation" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Neue Technologien evaluieren" }),
                        /* @__PURE__ */ jsx("li", { children: "• Best Practices recherchieren" }),
                        /* @__PURE__ */ jsx("li", { children: "• Pilot-Projekte durchführen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Erfolgreiche Ansätze skalieren" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-cyan-50 p-3 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-sm mb-2", children: "Feedback-Kultur" }),
                      /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Mitarbeiter-Suggestions" }),
                        /* @__PURE__ */ jsx("li", { children: "• Externe Beratung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Peer-Reviews" }),
                        /* @__PURE__ */ jsx("li", { children: "• Lessons-Learned-Sessions" })
                      ] })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Jahreszyklusplanung für DSG-EKD Compliance" }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-4 gap-4 mb-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-700", children: "Q1: Planung & Assessment" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Jahresplanung Datenschutz" }),
                      /* @__PURE__ */ jsx("li", { children: "• Budget-Freigabe" }),
                      /* @__PURE__ */ jsx("li", { children: "• Risikobewertung Update" }),
                      /* @__PURE__ */ jsx("li", { children: "• Zielvereinbarungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Externe Audit-Vorbereitung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Schulungsplan 2024" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-green-700", children: "Q2: Umsetzung & Schulung" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Hauptschulungsphase" }),
                      /* @__PURE__ */ jsx("li", { children: "• TOM-Updates implementieren" }),
                      /* @__PURE__ */ jsx("li", { children: "• Prozessoptimierungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Halbjahres-Review" }),
                      /* @__PURE__ */ jsx("li", { children: "• Vendor-Assessments" }),
                      /* @__PURE__ */ jsx("li", { children: "• Dokumentations-Updates" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-yellow-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-yellow-700", children: "Q3: Monitoring & Testing" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Internes Audit" }),
                      /* @__PURE__ */ jsx("li", { children: "• Penetration Testing" }),
                      /* @__PURE__ */ jsx("li", { children: "• Incident-Response-Übung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Compliance-Check" }),
                      /* @__PURE__ */ jsx("li", { children: "• Mitarbeiter-Feedback" }),
                      /* @__PURE__ */ jsx("li", { children: "• Technology-Refresh" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-orange-700", children: "Q4: Review & Planning" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Jahresabschluss-Audit" }),
                      /* @__PURE__ */ jsx("li", { children: "• Lessons Learned" }),
                      /* @__PURE__ */ jsx("li", { children: "• Folgejahr-Planung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Budget-Antrag" }),
                      /* @__PURE__ */ jsx("li", { children: "• Strategische Ausrichtung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Stakeholder-Kommunikation" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-indigo-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Kontinuierliche Aktivitäten (ganzjährig)" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Tägliches Monitoring" }),
                      /* @__PURE__ */ jsx("li", { children: "• Wöchentliche KPI-Reports" }),
                      /* @__PURE__ */ jsx("li", { children: "• Monatliche Compliance-Checks" }),
                      /* @__PURE__ */ jsx("li", { children: "• Quarterly Business Reviews" })
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Incident Response" }),
                      /* @__PURE__ */ jsx("li", { children: "• Betroffenenanfragen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Vendor Management" }),
                      /* @__PURE__ */ jsx("li", { children: "• Change Management" })
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Awareness-Kampagnen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Continuous Training" }),
                      /* @__PURE__ */ jsx("li", { children: "• Process Optimization" }),
                      /* @__PURE__ */ jsx("li", { children: "• Innovation & Research" })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Governance und Verantwortlichkeiten" }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-blue-700", children: "Steuerungsebene" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { children: [
                        /* @__PURE__ */ jsx("strong", { children: "Kirchenvorstand:" }),
                        " Strategische Ausrichtung"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { children: [
                        /* @__PURE__ */ jsx("strong", { children: "Pfarramt:" }),
                        " Operative Leitung"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { children: [
                        /* @__PURE__ */ jsx("strong", { children: "DSB:" }),
                        " Fachliche Steuerung"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { children: [
                        /* @__PURE__ */ jsx("strong", { children: "Compliance-Committee:" }),
                        " Oversight"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-green-700", children: "Operative Ebene" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { children: [
                        /* @__PURE__ */ jsx("strong", { children: "Verwaltung:" }),
                        " Tägliche Umsetzung"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { children: [
                        /* @__PURE__ */ jsx("strong", { children: "IT-Verantwortliche:" }),
                        " Technische Maßnahmen"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { children: [
                        /* @__PURE__ */ jsx("strong", { children: "Mitarbeiter:" }),
                        " Compliance im Arbeitsalltag"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { children: [
                        /* @__PURE__ */ jsx("strong", { children: "Ehrenamtliche:" }),
                        " Bewusste Datenverarbeitung"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3 text-purple-700", children: "Kontrollbebene" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { children: [
                        /* @__PURE__ */ jsx("strong", { children: "Interne Revision:" }),
                        " Unabhängige Prüfung"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { children: [
                        /* @__PURE__ */ jsx("strong", { children: "Externe Auditoren:" }),
                        " Objektive Bewertung"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { children: [
                        /* @__PURE__ */ jsx("strong", { children: "Aufsichtsbehörde:" }),
                        " Regulatorische Oversight"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { children: [
                        /* @__PURE__ */ jsx("strong", { children: "Betroffene:" }),
                        " Stakeholder-Feedback"
                      ] })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "compliance-monitoring-system",
                  title: "Kontinuierliches Monitoring-System etablieren",
                  description: "Implementieren Sie ein umfassendes System zur kontinuierlichen Überwachung und Verbesserung Ihrer DSG-EKD-Compliance.",
                  difficulty: "hard"
                }
              ),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "annual-compliance-cycle",
                  title: "Jährlichen Compliance-Zyklus definieren",
                  description: "Erstellen Sie einen strukturierten Jahresplan mit allen notwendigen Compliance-Aktivitäten und Meilensteinen.",
                  difficulty: "medium"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "seelsorgegeheimnis", ref: (el) => sectionRefs.current["seelsorgegeheimnis"] = el, className: "mb-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Lock, { className: "w-8 h-8 text-purple-400" }),
                "Seelsorgegeheimnis"
              ] }),
              /* @__PURE__ */ jsx(Card, { className: "mb-6", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-4", children: "Absoluter Schutz seelsorgerlicher Kommunikation" }),
                /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border-l-4 border-red-500 p-4 mb-4", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-red-800 font-medium mb-2", children: "Wichtiger Hinweis:" }),
                  /* @__PURE__ */ jsx("p", { className: "text-red-700 text-sm", children: "Das Seelsorgegeheimnis genießt absoluten Schutz und ist von allen anderen datenschutzrechtlichen Bestimmungen ausgenommen." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Geschützte Bereiche" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }),
                        "Seelsorgerische Gespräche"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }),
                        "Beichtgespräche"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }),
                        "Seelsorgerliche Korrespondenz"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "w-4 h-4 text-green-500" }),
                        "Notizen zu Seelsorgegesprächen"
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Praktische Umsetzung" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500" }),
                        "Separate Aufbewahrung"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500" }),
                        "Verschlüsselte Speicherung"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500" }),
                        "Beschränkter Zugriff"
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500" }),
                        "Sichere Vernichtung"
                      ] })
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "pastoral-confidentiality-procedures",
                  title: "Seelsorgegeheimnis-Verfahren etablieren",
                  description: "Entwickeln Sie Verfahren zum Schutz des Seelsorgegeheimnisses in allen technischen und organisatorischen Prozessen.",
                  difficulty: "hard"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsx("section", { id: "implementierung", ref: (el) => sectionRefs.current["implementierung"] = el, className: "mb-16", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            children: [
              /* @__PURE__ */ jsxs("h2", { className: "text-3xl font-bold text-white mb-8 flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "w-8 h-8 text-purple-400" }),
                "Implementierungsroadmap"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold", children: "1" }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Phase 1: Grundlagen (Wochen 1-4)" }),
                    /* @__PURE__ */ jsx(Badge, { children: "4 Wochen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Aufgaben" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Bestandsaufnahme aller Datenverarbeitungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Identifikation kritischer Datenschutzbereiche" }),
                        /* @__PURE__ */ jsx("li", { children: "• Ernennung des Datenschutzbeauftragten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Erste Mitarbeiterschulung" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Deliverables" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Datenverarbeitungs-Inventar" }),
                        /* @__PURE__ */ jsx("li", { children: "• Datenschutz-Organisationsstruktur" }),
                        /* @__PURE__ */ jsx("li", { children: "• Schulungsplan" }),
                        /* @__PURE__ */ jsx("li", { children: "• Projektplan für weitere Phasen" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold", children: "2" }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Phase 2: Dokumentation (Wochen 5-12)" }),
                    /* @__PURE__ */ jsx(Badge, { children: "8 Wochen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Aufgaben" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Verarbeitungsverzeichnis erstellen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Datenschutzerklärungen verfassen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Betroffenenrechte-Verfahren definieren" }),
                        /* @__PURE__ */ jsx("li", { children: "• Auftragsverarbeitungsverträge abschließen" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Deliverables" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Vollständiges Verarbeitungsverzeichnis" }),
                        /* @__PURE__ */ jsx("li", { children: "• Datenschutzerklärungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Betroffenenrechte-Handbuch" }),
                        /* @__PURE__ */ jsx("li", { children: "• AV-Verträge" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold", children: "3" }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Phase 3: Technische Umsetzung (Wochen 13-20)" }),
                    /* @__PURE__ */ jsx(Badge, { children: "8 Wochen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Aufgaben" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Technische Schutzmaßnahmen implementieren" }),
                        /* @__PURE__ */ jsx("li", { children: "• Zugriffskontrollsystem einrichten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Backup- und Verschlüsselungslösungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident-Response-Verfahren etablieren" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Deliverables" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• TOM-Dokumentation" }),
                        /* @__PURE__ */ jsx("li", { children: "• Zugriffskontrollrichtlinien" }),
                        /* @__PURE__ */ jsx("li", { children: "• Backup-Konzept" }),
                        /* @__PURE__ */ jsx("li", { children: "• Incident-Response-Plan" })
                      ] })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold", children: "4" }),
                    /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Phase 4: Monitoring & Optimierung (Wochen 21-24)" }),
                    /* @__PURE__ */ jsx(Badge, { children: "4 Wochen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Aufgaben" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Compliance-Monitoring einrichten" }),
                        /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Audits planen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Schulungen" }),
                        /* @__PURE__ */ jsx("li", { children: "• Verbesserungsprozesse etablieren" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium mb-3", children: "Deliverables" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Monitoring-Dashboard" }),
                        /* @__PURE__ */ jsx("li", { children: "• Audit-Zeitplan" }),
                        /* @__PURE__ */ jsx("li", { children: "• Schulungsprogramm" }),
                        /* @__PURE__ */ jsx("li", { children: "• KVP-Verfahren" })
                      ] })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-8 p-6 bg-purple-50 rounded-lg", children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-bold mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Lightbulb, { className: "w-5 h-5 text-purple-600" }),
                  "Erfolgsfaktoren für die Implementierung"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Klare Kommunikation der Datenschutzziele" }),
                    /* @__PURE__ */ jsx("li", { children: "• Einbindung aller Mitarbeiter und Ehrenamtlichen" }),
                    /* @__PURE__ */ jsx("li", { children: "• Regelmäßige Schulungen und Sensibilisierung" })
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Kontinuierliche Überprüfung und Anpassung" }),
                    /* @__PURE__ */ jsx("li", { children: "• Dokumentation aller Prozesse" }),
                    /* @__PURE__ */ jsx("li", { children: "• Externe Unterstützung bei Bedarf" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                TaskCard,
                {
                  id: "implementation-roadmap",
                  title: "Individuelle Roadmap erstellen",
                  description: "Passen Sie die Implementierungsroadmap an die spezifischen Bedürfnisse und Ressourcen Ihrer Kirchengemeinde an.",
                  difficulty: "hard"
                }
              )
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mt-12 pt-8 border-t border-white/20", children: [
          /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "text-white border-white/20 hover:bg-white/10", children: [
            /* @__PURE__ */ jsx(ArrowLeft, { className: "w-4 h-4 mr-2" }),
            "Zurück zu Compliance"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
            /* @__PURE__ */ jsxs(Button, { className: "bg-purple-600 hover:bg-purple-700", children: [
              /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
              "PDF herunterladen"
            ] }),
            /* @__PURE__ */ jsxs(Button, { className: "bg-blue-600 hover:bg-blue-700", children: [
              /* @__PURE__ */ jsx(MessageSquare, { className: "w-4 h-4 mr-2" }),
              "Beratung anfragen"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Card, { className: "mt-8", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg", children: "Ihr Fortschritt" }),
            /* @__PURE__ */ jsxs(Badge, { className: completedTasks.length === 0 ? "bg-gray-100" : "bg-green-100 text-green-800", children: [
              completedTasks.length,
              " von ",
              sections.length,
              " Aufgaben"
            ] })
          ] }),
          /* @__PURE__ */ jsx(Progress, { value: completedTasks.length / sections.length * 100, className: "mb-4" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: completedTasks.length === sections.length ? "Herzlichen Glückwunsch! Sie haben alle Implementierungsaufgaben abgeschlossen." : `Sie haben ${Math.round(completedTasks.length / sections.length * 100)}% der DSG-EKD Implementierung abgeschlossen.` })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
}
export {
  DsgEkdGuide as default
};
