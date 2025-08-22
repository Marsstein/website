import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { List, Eye, Calendar, Target, Building, Building2, Shield, AlertTriangle, Bell, Users, Network, RotateCcw, Lock, Search, Clock, Route, Gavel, Award, CheckCircle, Euro, TrendingUp, Zap, Car, Heart, Waves, Factory, Server, Radio, Satellite, Package, Settings, Globe, Mail, Trash2, Scale, FileText, Info, CheckCircle2, Circle, Play, Star, Database, Cloud } from "lucide-react";
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
const Nis2Guide = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [completedTasks, setCompletedTasks] = useState(/* @__PURE__ */ new Set());
  const [readingProgress, setReadingProgress] = useState(0);
  const [expandedSections, setExpandedSections] = useState(/* @__PURE__ */ new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const containerRef = useRef(null);
  const sections = [
    { id: "overview", title: "Überblick", icon: Eye, readTime: "8 Min" },
    { id: "history", title: "Geschichte & Entwicklung", icon: Calendar, readTime: "12 Min" },
    { id: "scope", title: "Anwendungsbereich", icon: Target, readTime: "15 Min" },
    { id: "essential-entities", title: "Wesentliche Einrichtungen", icon: Building, readTime: "18 Min" },
    { id: "important-entities", title: "Wichtige Einrichtungen", icon: Building2, readTime: "16 Min" },
    { id: "cybersecurity-measures", title: "Cybersicherheitsmaßnahmen", icon: Shield, readTime: "25 Min" },
    { id: "risk-management", title: "Risikomanagement", icon: AlertTriangle, readTime: "20 Min" },
    { id: "incident-reporting", title: "Meldepflichten", icon: Bell, readTime: "22 Min" },
    { id: "governance", title: "Governance & Leadership", icon: Users, readTime: "18 Min" },
    { id: "supply-chain", title: "Lieferkettenmanagement", icon: Network, readTime: "20 Min" },
    { id: "business-continuity", title: "Business Continuity", icon: RotateCcw, readTime: "16 Min" },
    { id: "encryption", title: "Verschlüsselung", icon: Lock, readTime: "14 Min" },
    { id: "vulnerability-management", title: "Vulnerability Management", icon: Search, readTime: "18 Min" },
    { id: "penetration-testing", title: "Penetrationstests", icon: Target, readTime: "15 Min" },
    { id: "compliance-timeline", title: "Compliance Timeline", icon: Clock, readTime: "12 Min" },
    { id: "implementation", title: "Umsetzungsroadmap", icon: Route, readTime: "30 Min" },
    { id: "enforcement", title: "Durchsetzung & Sanktionen", icon: Gavel, readTime: "14 Min" },
    { id: "best-practices", title: "Best Practices", icon: Award, readTime: "20 Min" }
  ];
  const nis2Sectors = [
    {
      category: "Energie",
      icon: Zap,
      sectors: [
        "Elektrizität",
        "Fernwärme",
        "Erdöl",
        "Erdgas",
        "Wasserstoff"
      ],
      threshold: "250+ Mitarbeiter oder 50 Mio. € Umsatz",
      criticality: "Hoch"
    },
    {
      category: "Verkehr",
      icon: Car,
      sectors: [
        "Luftfahrt",
        "Schienenverkehr",
        "Schifffahrt",
        "Straßenverkehr"
      ],
      threshold: "250+ Mitarbeiter oder 50 Mio. € Umsatz",
      criticality: "Hoch"
    },
    {
      category: "Bankwesen",
      icon: Building,
      sectors: [
        "Kreditinstitute",
        "Finanzmarktinfrastrukturen"
      ],
      threshold: "Alle regulierten Einrichtungen",
      criticality: "Sehr hoch"
    },
    {
      category: "Finanzmarktinfrastrukturen",
      icon: TrendingUp,
      sectors: [
        "Betreiber von Handelsplätzen",
        "Zentrale Gegenparteien"
      ],
      threshold: "Alle regulierten Einrichtungen",
      criticality: "Sehr hoch"
    },
    {
      category: "Gesundheitswesen",
      icon: Heart,
      sectors: [
        "Gesundheitsdienstleister",
        "EU-Referenzlabore"
      ],
      threshold: "250+ Mitarbeiter oder 50 Mio. € Umsatz",
      criticality: "Sehr hoch"
    },
    {
      category: "Trinkwasser",
      icon: Waves,
      sectors: [
        "Lieferanten",
        "Vertreiber"
      ],
      threshold: "250+ Mitarbeiter oder 50 Mio. € Umsatz",
      criticality: "Hoch"
    },
    {
      category: "Abwasser",
      icon: Factory,
      sectors: [
        "Abwasserentsorgungsunternehmen"
      ],
      threshold: "250+ Mitarbeiter oder 50 Mio. € Umsatz",
      criticality: "Mittel"
    },
    {
      category: "Digitale Infrastruktur",
      icon: Server,
      sectors: [
        "IXP (Internet Exchange Points)",
        "DNS-Diensteanbieter",
        "TLD-Namensregister",
        "Cloud-Computing-Dienste",
        "Rechenzentren"
      ],
      threshold: "250+ Mitarbeiter oder 50 Mio. € Umsatz",
      criticality: "Sehr hoch"
    },
    {
      category: "ICT-Dienstmanagement",
      icon: Network,
      sectors: [
        "Verwaltete IT-Dienste",
        "Verwaltete Sicherheitsdienste"
      ],
      threshold: "250+ Mitarbeiter oder 50 Mio. € Umsatz",
      criticality: "Hoch"
    },
    {
      category: "Elektronische Kommunikation",
      icon: Radio,
      sectors: [
        "Öffentliche elektronische Kommunikationsdienste",
        "Öffentliche Kommunikationsnetze"
      ],
      threshold: "Alle Anbieter",
      criticality: "Sehr hoch"
    },
    {
      category: "Weltraum",
      icon: Satellite,
      sectors: [
        "Betreiber von Bodeninfrastrukturen"
      ],
      threshold: "250+ Mitarbeiter oder 50 Mio. € Umsatz",
      criticality: "Hoch"
    },
    {
      category: "Öffentliche Verwaltung",
      icon: Building2,
      sectors: [
        "Zentrale Regierungsebene",
        "Regionale Verwaltungsebene"
      ],
      threshold: "Alle öffentlichen Stellen",
      criticality: "Sehr hoch"
    },
    {
      category: "Lebensmittel",
      icon: Package,
      sectors: [
        "Lebensmittelhersteller",
        "Verarbeitung und Herstellung",
        "Vertrieb"
      ],
      threshold: "250+ Mitarbeiter oder 50 Mio. € Umsatz",
      criticality: "Mittel"
    },
    {
      category: "Verarbeitendes Gewerbe",
      icon: Settings,
      sectors: [
        "Herstellung von Medizinprodukten",
        "Computern und elektronischen Erzeugnissen",
        "Kraftfahrzeugen",
        "Maschinen und Ausrüstungen",
        "Chemischen Erzeugnissen"
      ],
      threshold: "250+ Mitarbeiter oder 50 Mio. € Umsatz",
      criticality: "Mittel"
    },
    {
      category: "Digitale Anbieter",
      icon: Globe,
      sectors: [
        "Online-Marktplätze",
        "Online-Suchmaschinen",
        "Soziale Netzwerke"
      ],
      threshold: "45+ Mio. aktive Nutzer pro Monat in der EU",
      criticality: "Hoch"
    },
    {
      category: "Postdienste",
      icon: Mail,
      sectors: [
        "Postdiensteanbieter"
      ],
      threshold: "250+ Mitarbeiter oder 50 Mio. € Umsatz",
      criticality: "Mittel"
    },
    {
      category: "Abfallwirtschaft",
      icon: Trash2,
      sectors: [
        "Abfallbewirtschaftungsunternehmen"
      ],
      threshold: "250+ Mitarbeiter oder 50 Mio. € Umsatz",
      criticality: "Mittel"
    }
  ];
  const cybersecurityMeasures = [
    {
      category: "Technische Maßnahmen",
      icon: Settings,
      measures: [
        {
          title: "Asset Management",
          description: "Vollständige Inventarisierung aller IT-Assets",
          implementation: "Automatisierte Discovery-Tools, CMDB-Integration",
          evidence: "Asset-Register, Inventarisierungsberichte"
        },
        {
          title: "Netzwerksegmentierung",
          description: "Logische Trennung kritischer Systeme",
          implementation: "VLAN-Konfiguration, Mikrosegmentierung",
          evidence: "Netzwerkdiagramme, Firewall-Regeln"
        },
        {
          title: "Verschlüsselung",
          description: "Ende-zu-Ende-Verschlüsselung für Daten in Ruhe und Transit",
          implementation: "AES-256, TLS 1.3, Zertifikatsverwaltung",
          evidence: "Verschlüsselungsrichtlinien, Schlüsselmanagement"
        },
        {
          title: "Multi-Faktor-Authentifizierung",
          description: "Obligatorisch für alle privilegierten Zugriffe",
          implementation: "Hardware-Token, biometrische Verfahren",
          evidence: "MFA-Konfiguration, Authentifizierungslogs"
        }
      ]
    },
    {
      category: "Organisatorische Maßnahmen",
      icon: Users,
      measures: [
        {
          title: "Incident Response Plan",
          description: "Strukturierte Verfahren für Cybersicherheitsvorfälle",
          implementation: "NIST-Framework, 24/7-SOC, Eskalationsverfahren",
          evidence: "IRP-Dokumentation, Incident-Logs, Übungsberichte"
        },
        {
          title: "Security Awareness Training",
          description: "Regelmäßige Schulungen für alle Mitarbeiter",
          implementation: "Phishing-Simulationen, E-Learning-Module",
          evidence: "Schulungsnachweise, Awareness-Tests"
        },
        {
          title: "Privileged Access Management",
          description: "Kontrolle und Überwachung privilegierter Zugriffe",
          implementation: "Just-in-Time-Access, Session Recording",
          evidence: "PAM-Logs, Zugriffsprotokolle"
        },
        {
          title: "Backup & Recovery",
          description: "Regelmäßige Backups mit Wiederherstellungstests",
          implementation: "3-2-1-Regel, Air-Gapped Backups",
          evidence: "Backup-Logs, Recovery-Tests"
        }
      ]
    },
    {
      category: "Physische Maßnahmen",
      icon: Lock,
      measures: [
        {
          title: "Zutrittskontrolle",
          description: "Kontrolle des physischen Zugangs zu kritischen Bereichen",
          implementation: "Biometrische Scanner, Mantrap-Systeme",
          evidence: "Zutrittsprotokoll, Besucherlogs"
        },
        {
          title: "Überwachung",
          description: "24/7-Videoüberwachung kritischer Infrastrukturen",
          implementation: "IP-Kameras, Motion Detection, Alarmsysteme",
          evidence: "Überwachungsaufzeichnungen, Alarmprotokolle"
        },
        {
          title: "Umgebungsschutz",
          description: "Schutz vor Umwelteinflüssen und Naturkatastrophen",
          implementation: "Brandschutz, Klimaüberwachung, USV-Systeme",
          evidence: "Umweltmonitoring, Wartungsprotokolle"
        }
      ]
    }
  ];
  const incidentTypes = [
    {
      type: "Erheblich",
      description: "Sofortige Meldung binnen 24 Stunden",
      criteria: [
        "Erhebliche operative Störungen",
        "Verlust der Integrität, Verfügbarkeit oder Vertraulichkeit",
        "Erheblicher materieller Schaden",
        "Beeinträchtigung der öffentlichen Sicherheit"
      ],
      reportingFlow: [
        "Erkennung des Vorfalls",
        "Erste Bewertung (< 4 Stunden)",
        "Meldung an CSIRT (< 24 Stunden)",
        "Vorläufiger Bericht (< 72 Stunden)",
        "Abschlussbericht (< 1 Monat)"
      ],
      icon: AlertTriangle,
      urgency: "Kritisch"
    },
    {
      type: "Nicht erheblich",
      description: "Interne Dokumentation ausreichend",
      criteria: [
        "Geringe operative Auswirkungen",
        "Keine Beeinträchtigung der Dienstverfügbarkeit",
        "Minimaler oder kein materieller Schaden",
        "Keine Auswirkungen auf andere Einrichtungen"
      ],
      reportingFlow: [
        "Dokumentation im internen System",
        "Kategorisierung und Bewertung",
        "Trend-Analyse für präventive Maßnahmen"
      ],
      icon: Info,
      urgency: "Niedrig"
    }
  ];
  const complianceTimeline = [
    {
      date: "16. Januar 2023",
      milestone: "NIS2-Richtlinie in Kraft getreten",
      description: "Veröffentlichung im EU-Amtsblatt",
      status: "completed",
      icon: Gavel
    },
    {
      date: "17. Oktober 2024",
      milestone: "Umsetzungsfrist für Mitgliedstaaten",
      description: "Nationale Gesetze müssen verabschiedet sein",
      status: "completed",
      icon: Scale
    },
    {
      date: "18. Oktober 2024",
      milestone: "Anwendungsbeginn",
      description: "NIS2-Verpflichtungen werden wirksam",
      status: "current",
      icon: Play
    },
    {
      date: "17. April 2025",
      milestone: "Erste Compliance-Bewertungen",
      description: "Aufsichtsbehörden beginnen mit Prüfungen",
      status: "upcoming",
      icon: Search
    },
    {
      date: "17. Oktober 2025",
      milestone: "Vollständige Durchsetzung",
      description: "Alle Sanktionsmöglichkeiten aktiviert",
      status: "upcoming",
      icon: AlertTriangle
    }
  ];
  const implementationPhases = [
    {
      phase: 1,
      title: "Bewertung & Klassifizierung",
      duration: "2-3 Monate",
      tasks: [
        "Anwendbarkeit von NIS2 prüfen",
        "Klassifizierung als wesentliche oder wichtige Einrichtung",
        "Gap-Analyse der aktuellen Cybersicherheitsmaßnahmen",
        "Risikobewertung der kritischen Assets",
        "Compliance-Roadmap entwickeln"
      ],
      deliverables: [
        "NIS2-Anwendbarkeitsbericht",
        "Asset-Inventar",
        "Gap-Analyse-Bericht",
        "Risikobewertung",
        "Umsetzungsplan"
      ],
      icon: Target,
      color: "blue"
    },
    {
      phase: 2,
      title: "Governance & Organisation",
      duration: "1-2 Monate",
      tasks: [
        "CISO-Rolle definieren und besetzen",
        "Cybersicherheitskomitee einrichten",
        "Richtlinien und Verfahren entwickeln",
        "Berichtswege und Verantwortlichkeiten festlegen",
        "Schulungsprogramm initiieren"
      ],
      deliverables: [
        "Organisationsstruktur",
        "Rollenbeschreibungen",
        "Cybersicherheitsrichtlinien",
        "Schulungskonzept",
        "Governance-Framework"
      ],
      icon: Users,
      color: "green"
    },
    {
      phase: 3,
      title: "Technische Implementierung",
      duration: "6-9 Monate",
      tasks: [
        "Netzwerksegmentierung implementieren",
        "Monitoring und Detection einrichten",
        "Verschlüsselung ausrollen",
        "Multi-Faktor-Authentifizierung einführen",
        "Backup- und Recovery-Systeme optimieren"
      ],
      deliverables: [
        "Segmentierte Netzwerkarchitektur",
        "SOC/SIEM-System",
        "Verschlüsselungsinfrastruktur",
        "MFA-Lösung",
        "Backup-Strategie"
      ],
      icon: Settings,
      color: "orange"
    },
    {
      phase: 4,
      title: "Incident Response",
      duration: "2-3 Monate",
      tasks: [
        "Incident Response Plan entwickeln",
        "CSIRT aufbauen und schulen",
        "Meldeverfahren etablieren",
        "Kommunikationspläne erstellen",
        "Übungen und Tests durchführen"
      ],
      deliverables: [
        "Incident Response Plan",
        "CSIRT-Handbuch",
        "Meldevorlagen",
        "Kommunikationsmatrix",
        "Übungsberichte"
      ],
      icon: AlertTriangle,
      color: "red"
    },
    {
      phase: 5,
      title: "Supply Chain Security",
      duration: "3-4 Monate",
      tasks: [
        "Lieferantenbewertung durchführen",
        "Vertragsklauseln anpassen",
        "Third-Party Risk Management einführen",
        "Monitoring der Lieferkette implementieren",
        "Kontinuierliche Bewertung etablieren"
      ],
      deliverables: [
        "Supplier Security Assessment",
        "Vertragsvorlagen",
        "TPRM-Framework",
        "Supply Chain Monitoring",
        "Bewertungszyklen"
      ],
      icon: Network,
      color: "purple"
    },
    {
      phase: 6,
      title: "Kontinuierliche Verbesserung",
      duration: "Laufend",
      tasks: [
        "Regelmäßige Penetrationstests",
        "Vulnerability Management",
        "Compliance-Monitoring",
        "Schulungen und Awareness",
        "Aktualisierung der Maßnahmen"
      ],
      deliverables: [
        "Penetrationstest-Berichte",
        "Vulnerability Scans",
        "Compliance-Dashboard",
        "Schulungsnachweise",
        "Verbesserungsmaßnahmen"
      ],
      icon: TrendingUp,
      color: "teal"
    }
  ];
  const toggleTaskCompletion = (taskId) => {
    setCompletedTasks((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(taskId)) {
        newSet.delete(taskId);
      } else {
        newSet.add(taskId);
      }
      return newSet;
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      const sections2 = document.querySelectorAll("[data-section]");
      const scrollPosition = window.scrollY + 100;
      sections2.forEach((section) => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        if (scrollPosition >= top && scrollPosition < bottom) {
          setActiveSection(section.getAttribute("data-section"));
        }
      });
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight * 100;
      setReadingProgress(Math.min(progress, 100));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const CounterAnimation = ({ value, duration = 2e3 }) => {
    const [count, setCount] = useState(0);
    const elementRef = useRef(null);
    const isInView = useInView(elementRef, { once: true });
    useEffect(() => {
      if (isInView) {
        let start = 0;
        const end = parseInt(value);
        const increment = end / (duration / 16);
        const timer = setInterval(() => {
          start += increment;
          if (start >= end) {
            setCount(end);
            clearInterval(timer);
          } else {
            setCount(Math.floor(start));
          }
        }, 16);
        return () => clearInterval(timer);
      }
    }, [isInView, value, duration]);
    return /* @__PURE__ */ jsx("span", { ref: elementRef, children: count });
  };
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: "fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 z-50",
        style: { scaleX }
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        onClick: () => setSidebarOpen(!sidebarOpen),
        className: "fixed top-20 left-4 z-40 lg:hidden bg-blue-600 hover:bg-blue-700",
        size: "sm",
        children: /* @__PURE__ */ jsx(List, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ jsx(
      motion.div,
      {
        className: `fixed left-0 top-16 h-screen w-80 bg-slate-800/95 backdrop-blur-sm border-r border-slate-700 z-30 overflow-y-auto ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 transition-transform duration-300`,
        children: /* @__PURE__ */ jsxs("div", { className: "p-6", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-white mb-6", children: "NIS2-Leitfaden" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: sections.map((section) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => {
                scrollToSection(section.id);
                setSidebarOpen(false);
              },
              className: `w-full text-left p-3 rounded-lg transition-all duration-200 group ${activeSection === section.id ? "bg-blue-600 text-white" : "text-gray-300 hover:bg-slate-700 hover:text-white"}`,
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(section.icon, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium", children: section.title }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs opacity-70", children: section.readTime })
                ] }),
                activeSection === section.id && /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400" })
              ] })
            },
            section.id
          )) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-slate-700 rounded-lg", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-300", children: "Lesefortschritt" }),
              /* @__PURE__ */ jsxs("span", { className: "text-sm text-blue-400", children: [
                Math.round(readingProgress),
                "%"
              ] })
            ] }),
            /* @__PURE__ */ jsx(Progress, { value: readingProgress, className: "h-2" })
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "lg:ml-80", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 py-8", ref: containerRef, children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          "data-section": "overview",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full mb-6", children: [
              /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "NIS2-Richtlinie 2022/2555" })
            ] }),
            /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-bold mb-6", children: [
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent", children: "NIS2" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-white text-4xl md:text-5xl", children: "Compliance Leitfaden" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed", children: "Umfassender Leitfaden zur Network and Information Security Directive 2 - Von der Anwendbarkeit bis zur vollständigen Compliance-Implementierung" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: [
              /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-600/20 text-blue-400 px-4 py-2", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
                "Gültig ab 18.10.2024"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-600/20 text-purple-400 px-4 py-2", children: [
                /* @__PURE__ */ jsx(Building, { className: "h-4 w-4 mr-2" }),
                "17 Sektoren"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { className: "bg-green-600/20 text-green-400 px-4 py-2", children: [
                /* @__PURE__ */ jsx(Euro, { className: "h-4 w-4 mr-2" }),
                "Bis zu 2% des Jahresumsatzes"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto", children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { scale: 1.05 },
                  className: "bg-slate-800/50 p-6 rounded-xl border border-slate-700",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-blue-400 mb-2", children: /* @__PURE__ */ jsx(CounterAnimation, { value: "27" }) }),
                    /* @__PURE__ */ jsx("div", { className: "text-gray-300", children: "EU-Mitgliedstaaten" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { scale: 1.05 },
                  className: "bg-slate-800/50 p-6 rounded-xl border border-slate-700",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-purple-400 mb-2", children: [
                      /* @__PURE__ */ jsx(CounterAnimation, { value: "160000" }),
                      "+"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-gray-300", children: "Betroffene Unternehmen" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { scale: 1.05 },
                  className: "bg-slate-800/50 p-6 rounded-xl border border-slate-700",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-green-400 mb-2", children: [
                      /* @__PURE__ */ jsx(CounterAnimation, { value: "24" }),
                      "h"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-gray-300", children: "Meldefrist" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { scale: 1.05 },
                  className: "bg-slate-800/50 p-6 rounded-xl border border-slate-700",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-orange-400 mb-2", children: [
                      /* @__PURE__ */ jsx(CounterAnimation, { value: "10" }),
                      "M€"
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "text-gray-300", children: "Max. Geldbuße" })
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
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "overview",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Eye, { className: "h-6 w-6 text-blue-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Überblick" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Was ist NIS2?" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: "Die NIS2-Richtlinie (Network and Information Security Directive 2) ist eine EU-Verordnung, die am 16. Januar 2023 in Kraft getreten ist. Sie ersetzt die ursprüngliche NIS-Richtlinie und erweitert den Anwendungsbereich erheblich." }),
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-3", children: "Hauptziele:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                    "Erhöhung der Cybersicherheit in kritischen Sektoren"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                    "Harmonisierung der Cybersicherheitsanforderungen in der EU"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                    "Verbesserung der Incident-Response-Kapazitäten"
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" }),
                    "Stärkung der grenzüberschreitenden Zusammenarbeit"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Wichtige Änderungen zu NIS1" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-700/50 rounded-lg", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-green-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-green-400", children: "Erweitert" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Anwendungsbereich von 7 auf 17 Sektoren erweitert" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-700/50 rounded-lg", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-orange-400", children: "Verschärft" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Härtere Sanktionen: bis zu 10 Mio. € oder 2% des Jahresumsatzes" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-700/50 rounded-lg", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-blue-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-400", children: "Beschleunigt" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Meldefrist für erhebliche Vorfälle: 24 Stunden (statt 72h)" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "p-4 bg-slate-700/50 rounded-lg", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-purple-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-400", children: "Konkretisiert" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Persönliche Haftung der Geschäftsführung" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "history",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-purple-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Calendar, { className: "h-6 w-6 text-purple-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Geschichte & Entwicklung" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
                /* @__PURE__ */ jsxs("div", { className: "relative flex items-start gap-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute left-6 w-4 h-4 bg-purple-500 rounded-full border-4 border-slate-900" }),
                  /* @__PURE__ */ jsxs("div", { className: "ml-16", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-purple-400 font-semibold mb-2", children: "2016" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "NIS1-Richtlinie verabschiedet" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Die ursprüngliche Network and Information Security Directive tritt in Kraft. Abdeckung von 7 Sektoren mit grundlegenden Cybersicherheitsanforderungen." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative flex items-start gap-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute left-6 w-4 h-4 bg-blue-500 rounded-full border-4 border-slate-900" }),
                  /* @__PURE__ */ jsxs("div", { className: "ml-16", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-blue-400 font-semibold mb-2", children: "2020" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "EU Cybersicherheitsstrategie" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Veröffentlichung der neuen EU-Cybersicherheitsstrategie mit Fokus auf Resilienz und strategische Autonomie. Ankündigung der NIS2-Revision." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative flex items-start gap-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute left-6 w-4 h-4 bg-green-500 rounded-full border-4 border-slate-900" }),
                  /* @__PURE__ */ jsxs("div", { className: "ml-16", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-green-400 font-semibold mb-2", children: "Dezember 2020" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "NIS2-Vorschlag der Kommission" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Die Europäische Kommission veröffentlicht den Vorschlag für eine überarbeitete NIS-Richtlinie mit erweiterten Anforderungen." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative flex items-start gap-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute left-6 w-4 h-4 bg-orange-500 rounded-full border-4 border-slate-900" }),
                  /* @__PURE__ */ jsxs("div", { className: "ml-16", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-orange-400 font-semibold mb-2", children: "2021-2022" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Verhandlungen & Trilog" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Intensive Verhandlungen zwischen Europäischem Parlament, Rat und Kommission. Finalisierung der endgültigen Fassung der NIS2-Richtlinie." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative flex items-start gap-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute left-6 w-4 h-4 bg-red-500 rounded-full border-4 border-slate-900" }),
                  /* @__PURE__ */ jsxs("div", { className: "ml-16", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-red-400 font-semibold mb-2", children: "16. Januar 2023" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "NIS2 tritt in Kraft" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "Offizielle Veröffentlichung im EU-Amtsblatt. Start der 21-monatigen Umsetzungsfrist für die Mitgliedstaaten." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "relative flex items-start gap-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute left-6 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900" }),
                  /* @__PURE__ */ jsxs("div", { className: "ml-16", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-cyan-400 font-semibold mb-2", children: "17. Oktober 2024" }),
                    /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: "Anwendungsbeginn" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: "NIS2-Verpflichtungen werden in allen EU-Mitgliedstaaten wirksam. Beginn der Enforcement-Phase." })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "scope",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Target, { className: "h-6 w-6 text-green-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Anwendungsbereich" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "17 Betroffene Sektoren" }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: nis2Sectors.map((sector, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: index * 0.1 },
                  className: "bg-slate-700/50 rounded-lg p-6 border border-slate-600 hover:border-blue-500/50 transition-colors",
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                      /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-600/20 rounded-lg", children: /* @__PURE__ */ jsx(sector.icon, { className: "h-5 w-5 text-blue-400" }) }),
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: sector.category })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-3 mb-4", children: sector.sectors.map((subsector) => /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-300 bg-slate-800/50 px-3 py-2 rounded", children: subsector }, subsector)) }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-gray-400" }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Schwellenwert:" })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "text-sm text-white font-medium", children: sector.threshold }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mt-3", children: [
                        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-400" }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-400", children: "Kritikalität:" }),
                        /* @__PURE__ */ jsx(Badge, { className: `text-xs ${sector.criticality === "Sehr hoch" ? "bg-red-500/20 text-red-300" : sector.criticality === "Hoch" ? "bg-orange-500/20 text-orange-300" : "bg-yellow-500/20 text-yellow-300"}`, children: sector.criticality })
                      ] })
                    ] })
                  ]
                },
                sector.category
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Größenschwellen" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-2", children: "Allgemeine Schwelle" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-300", children: [
                    /* @__PURE__ */ jsx("li", { children: "• 250+ Mitarbeiter ODER" }),
                    /* @__PURE__ */ jsx("li", { children: "• 50 Mio. € Jahresumsatz" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-2", children: "Besondere Regelungen" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-gray-300", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Digitale Dienste: 45 Mio. aktive Nutzer/Monat" }),
                    /* @__PURE__ */ jsx("li", { children: "• Öffentliche Verwaltung: Alle Ebenen" }),
                    /* @__PURE__ */ jsx("li", { children: "• Banken: Alle regulierten Institute" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "essential-entities",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-red-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Building, { className: "h-6 w-6 text-red-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Wesentliche Einrichtungen" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Definition & Kriterien" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6", children: "Wesentliche Einrichtungen sind Organisationen in kritischen Sektoren, deren Störung erhebliche Auswirkungen auf die Wirtschaft oder Gesellschaft hätte." }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-red-900/20 border border-red-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-400", children: "Hohe Kritikalität" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Störungen können schwerwiegende grenzüberschreitende Auswirkungen haben" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-orange-900/20 border border-orange-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4 text-orange-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-orange-400", children: "Strengere Aufsicht" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Unterliegen verstärkter behördlicher Überwachung und Kontrolle" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Betroffene Sektoren" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  { name: "Energie", icon: Zap, color: "text-yellow-400" },
                  { name: "Verkehr", icon: Car, color: "text-blue-400" },
                  { name: "Bankwesen", icon: Building, color: "text-green-400" },
                  { name: "Finanzmarktinfrastrukturen", icon: TrendingUp, color: "text-purple-400" },
                  { name: "Gesundheitswesen", icon: Heart, color: "text-red-400" },
                  { name: "Trinkwasser", icon: Waves, color: "text-cyan-400" },
                  { name: "Abwasser", icon: Factory, color: "text-gray-400" },
                  { name: "Digitale Infrastruktur", icon: Server, color: "text-indigo-400" },
                  { name: "Elektronische Kommunikation", icon: Radio, color: "text-pink-400" },
                  { name: "Weltraum", icon: Satellite, color: "text-orange-400" },
                  { name: "Öffentliche Verwaltung", icon: Building2, color: "text-emerald-400" }
                ].map((sector) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg", children: [
                  /* @__PURE__ */ jsx(sector.icon, { className: `h-5 w-5 ${sector.color}` }),
                  /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: sector.name })
                ] }, sector.name)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Zusätzliche Verpflichtungen" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-600/20 rounded-lg w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-red-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Erweiterte Berichtspflichten" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Detailliertere Incident-Reports und regelmäßige Compliance-Berichte" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-orange-600/20 rounded-lg w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(Search, { className: "h-6 w-6 text-orange-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Regelmäßige Audits" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Mindestens alle 2 Jahre umfassende Cybersicherheits-Audits" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-yellow-600/20 rounded-lg w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(Award, { className: "h-6 w-6 text-yellow-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Zertifizierungen" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Nachweis anerkannter Cybersicherheits-Zertifizierungen empfohlen" })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "important-entities",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-orange-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Building2, { className: "h-6 w-6 text-orange-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Wichtige Einrichtungen" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Definition & Abgrenzung" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6", children: "Wichtige Einrichtungen sind Unternehmen, die nicht als wesentlich eingestuft werden, aber dennoch kritische Dienste erbringen und den Größenschwellen unterliegen." }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-orange-900/20 border border-orange-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-orange-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-orange-400", children: "Moderate Aufsicht" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Weniger intensive behördliche Überwachung als wesentliche Einrichtungen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-blue-900/20 border border-blue-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-blue-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-400", children: "Selbstdeklaration" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Unternehmen müssen selbst prüfen, ob sie unter NIS2 fallen" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Zusätzliche Sektoren" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  { name: "ICT-Dienstmanagement", icon: Network, color: "text-blue-400" },
                  { name: "Lebensmittel", icon: Package, color: "text-green-400" },
                  { name: "Verarbeitendes Gewerbe", icon: Settings, color: "text-gray-400" },
                  { name: "Digitale Anbieter", icon: Globe, color: "text-purple-400" },
                  { name: "Postdienste", icon: Mail, color: "text-yellow-400" },
                  { name: "Abfallwirtschaft", icon: Trash2, color: "text-orange-400" }
                ].map((sector) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-700/30 rounded-lg", children: [
                  /* @__PURE__ */ jsx(sector.icon, { className: `h-5 w-5 ${sector.color}` }),
                  /* @__PURE__ */ jsx("span", { className: "text-white font-medium", children: sector.name })
                ] }, sector.name)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-orange-900/20 to-yellow-900/20 rounded-lg p-6 border border-orange-700/50", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Unterschiede zu wesentlichen Einrichtungen" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-orange-400" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white", children: "Aufsichtsfrequenz" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Weniger häufige behördliche Kontrollen und Prüfungen" })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsx(Euro, { className: "h-5 w-5 text-orange-400" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white", children: "Sanktionen" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Gleiche Höchststrafen, aber geringere Wahrscheinlichkeit von Prüfungen" })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-orange-400" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-medium text-white", children: "Berichtspflichten" })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Gleiche Incident-Reporting-Anforderungen wie wesentliche Einrichtungen" })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "cybersecurity-measures",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-blue-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Cybersicherheitsmaßnahmen" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-8", children: cybersecurityMeasures.map((category, categoryIndex) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-600/20 rounded-lg", children: /* @__PURE__ */ jsx(category.icon, { className: "h-5 w-5 text-blue-400" }) }),
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white", children: category.category })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: category.measures.map((measure, measureIndex) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 20 },
                  whileInView: { opacity: 1, y: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: (categoryIndex * 4 + measureIndex) * 0.1 },
                  className: "bg-slate-800/50 rounded-lg p-6 border border-slate-600",
                  children: [
                    /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-3", children: measure.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4 text-sm", children: measure.description }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-blue-400 font-medium", children: "UMSETZUNG:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: measure.implementation })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-green-400 font-medium", children: "NACHWEIS:" }),
                        /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm mt-1", children: measure.evidence })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-4 pt-4 border-t border-slate-600", children: /* @__PURE__ */ jsxs(
                      "button",
                      {
                        onClick: () => toggleTaskCompletion(`${category.category}-${measure.title}`),
                        className: "flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors",
                        children: [
                          completedTasks.has(`${category.category}-${measure.title}`) ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400" }) : /* @__PURE__ */ jsx(Circle, { className: "h-4 w-4" }),
                          "Als implementiert markieren"
                        ]
                      }
                    ) })
                  ]
                },
                measure.title
              )) })
            ] }, category.category)) })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "risk-management",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-red-600/20 rounded-lg", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-red-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Risikomanagement" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Risikobewertungsansatz" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6", children: "NIS2 verlangt einen systematischen Ansatz zur Identifikation, Bewertung und Behandlung von Cybersicherheitsrisiken basierend auf dem aktuellen Bedrohungsumfeld." }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-red-900/20 border border-red-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-400 mb-2", children: "1. Identifikation" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Erkennung aller relevanten Cyber-Bedrohungen und Schwachstellen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-orange-900/20 border border-orange-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-400 mb-2", children: "2. Bewertung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Analyse der Eintrittswahrscheinlichkeit und Auswirkungen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-yellow-400 mb-2", children: "3. Behandlung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Implementierung angemessener Schutzmaßnahmen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-green-900/20 border border-green-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-400 mb-2", children: "4. Überwachung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Kontinuierliche Überprüfung und Anpassung der Maßnahmen" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Risikokategorien" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4 text-yellow-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-yellow-400", children: "Operationelle Risiken" })
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Ausfall kritischer IT-Systeme" }),
                      /* @__PURE__ */ jsx("li", { children: "• Datenverlust oder -korruption" }),
                      /* @__PURE__ */ jsx("li", { children: "• Unterbrechung der Geschäftsprozesse" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-blue-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-400", children: "Menschliche Risiken" })
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Social Engineering" }),
                      /* @__PURE__ */ jsx("li", { children: "• Insider-Bedrohungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Unbeabsichtigte Fehler" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Network, { className: "h-4 w-4 text-purple-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-400", children: "Technische Risiken" })
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Malware und Ransomware" }),
                      /* @__PURE__ */ jsx("li", { children: "• Netzwerkeinbrüche" }),
                      /* @__PURE__ */ jsx("li", { children: "• Zero-Day-Exploits" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Building, { className: "h-4 w-4 text-green-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-green-400", children: "Lieferkettenrisiken" })
                    ] }),
                    /* @__PURE__ */ jsxs("ul", { className: "text-gray-300 text-sm space-y-1", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Kompromittierte Zulieferer" }),
                      /* @__PURE__ */ jsx("li", { children: "• Software Supply Chain Attacks" }),
                      /* @__PURE__ */ jsx("li", { children: "• Hardware-Manipulation" })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Risikomatrix & Bewertung" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-blue-400 mb-3", children: "Wahrscheinlichkeit" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-2 bg-green-900/20 rounded", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-green-500 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-green-400 font-medium", children: "Niedrig (1-2)" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Sehr unwahrscheinlich" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-2 bg-yellow-900/20 rounded", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-yellow-500 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-yellow-400 font-medium", children: "Mittel (3)" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Möglich" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-2 bg-red-900/20 rounded", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-red-500 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-red-400 font-medium", children: "Hoch (4-5)" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Sehr wahrscheinlich" })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-purple-400 mb-3", children: "Auswirkung" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-2 bg-green-900/20 rounded", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-green-500 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-green-400 font-medium", children: "Gering (1-2)" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Minimale Auswirkung" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-2 bg-yellow-900/20 rounded", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-yellow-500 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-yellow-400 font-medium", children: "Moderat (3)" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Erhebliche Auswirkung" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-2 bg-red-900/20 rounded", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-red-500 rounded" }),
                      /* @__PURE__ */ jsx("span", { className: "text-red-400 font-medium", children: "Schwerwiegend (4-5)" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-400 text-sm", children: "Kritische Auswirkung" })
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "incident-reporting",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-orange-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Bell, { className: "h-6 w-6 text-orange-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Meldepflichten" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: incidentTypes.map((incidentType, index) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: index * 0.2 },
                className: "bg-slate-700/30 rounded-lg p-6 border border-slate-600",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: `p-2 rounded-lg ${incidentType.urgency === "Kritisch" ? "bg-red-600/20" : "bg-blue-600/20"}`, children: /* @__PURE__ */ jsx(incidentType.icon, { className: `h-5 w-5 ${incidentType.urgency === "Kritisch" ? "text-red-400" : "text-blue-400"}` }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-xl font-semibold text-white", children: [
                        incidentType.type,
                        " Vorfälle"
                      ] }),
                      /* @__PURE__ */ jsx(Badge, { className: `mt-1 ${incidentType.urgency === "Kritisch" ? "bg-red-500/20 text-red-300" : "bg-blue-500/20 text-blue-300"}`, children: incidentType.urgency })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-4", children: incidentType.description }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Kriterien:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: incidentType.criteria.map((criterion, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-gray-300 text-sm", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                        criterion
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Meldeprozess:" }),
                      /* @__PURE__ */ jsx("ol", { className: "space-y-2", children: incidentType.reportingFlow.map((step, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-gray-300 text-sm", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-medium mt-0.5 flex-shrink-0", children: idx + 1 }),
                        step
                      ] }, idx)) })
                    ] })
                  ] })
                ]
              },
              incidentType.type
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-orange-900/20 to-red-900/20 rounded-lg p-6 border border-orange-700/50", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "24-Stunden-Meldefrist" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-red-600/20 rounded-lg w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(Clock, { className: "h-6 w-6 text-red-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Sofortmeldung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Erste Meldung binnen 24 Stunden nach Erkennung" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-orange-600/20 rounded-lg w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-orange-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Zwischenbericht" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Detaillierter Bericht binnen 72 Stunden" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-3 bg-yellow-600/20 rounded-lg w-fit mx-auto mb-3", children: /* @__PURE__ */ jsx(Award, { className: "h-6 w-6 text-yellow-400" }) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Abschlussbericht" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Finaler Bericht binnen 1 Monat" })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "compliance-timeline",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Clock, { className: "h-6 w-6 text-green-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Compliance Timeline" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "relative", children: [
              /* @__PURE__ */ jsx("div", { className: "absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 to-red-500" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-8", children: complianceTimeline.map((milestone, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.5, delay: index * 0.1 },
                  className: "relative flex items-start gap-6",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: `absolute left-6 w-4 h-4 rounded-full border-4 border-slate-900 ${milestone.status === "completed" ? "bg-green-500" : milestone.status === "current" ? "bg-blue-500" : "bg-gray-500"}` }),
                    /* @__PURE__ */ jsxs("div", { className: "ml-16 bg-slate-700/30 rounded-lg p-6 flex-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                        /* @__PURE__ */ jsx(milestone.icon, { className: `h-5 w-5 ${milestone.status === "completed" ? "text-green-400" : milestone.status === "current" ? "text-blue-400" : "text-gray-400"}` }),
                        /* @__PURE__ */ jsx(Badge, { className: `${milestone.status === "completed" ? "bg-green-500/20 text-green-300" : milestone.status === "current" ? "bg-blue-500/20 text-blue-300" : "bg-gray-500/20 text-gray-300"}`, children: milestone.date })
                      ] }),
                      /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: milestone.milestone }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-300", children: milestone.description })
                    ] })
                  ]
                },
                milestone.date
              )) })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "implementation",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-purple-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Route, { className: "h-6 w-6 text-purple-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Umsetzungsroadmap" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: implementationPhases.map((phase, index) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 20 },
                whileInView: { opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 0.5, delay: index * 0.1 },
                className: `bg-slate-700/30 rounded-lg p-6 border border-slate-600 hover:border-${phase.color}-500/50 transition-colors`,
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                    /* @__PURE__ */ jsx("div", { className: `p-2 bg-${phase.color}-600/20 rounded-lg`, children: /* @__PURE__ */ jsx(phase.icon, { className: `h-5 w-5 text-${phase.color}-400` }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs(Badge, { className: `bg-${phase.color}-500/20 text-${phase.color}-300 mb-2`, children: [
                        "Phase ",
                        phase.phase
                      ] }),
                      /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white", children: phase.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-400 text-sm", children: phase.duration })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Aufgaben:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: phase.tasks.map((task, taskIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-gray-300 text-sm", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0" }),
                        task
                      ] }, taskIndex)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-medium text-white mb-2", children: "Ergebnisse:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: phase.deliverables.map((deliverable, delIndex) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-gray-300 text-sm", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                        deliverable
                      ] }, delIndex)) })
                    ] })
                  ] })
                ]
              },
              phase.phase
            )) })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "governance",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-purple-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Users, { className: "h-6 w-6 text-purple-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Governance & Leadership" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Führungsverantwortung" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6", children: 'NIS2 betont die persönliche Verantwortung der Geschäftsführung für Cybersicherheit und verlangt eine "Tone from the Top"-Kultur.' }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-red-900/20 border border-red-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-400 mb-2", children: "Persönliche Haftung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Geschäftsführer können persönlich für Compliance-Verstöße haftbar gemacht werden" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-orange-900/20 border border-orange-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-400 mb-2", children: "Aufsichtspflicht" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Aktive Überwachung und Steuerung der Cybersicherheitsmaßnahmen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-blue-900/20 border border-blue-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-400 mb-2", children: "Schulungspflicht" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Regelmäßige Cybersicherheitsschulungen für die Führungsebene" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Organisationsstruktur" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-yellow-400", children: "CISO/Chief Security Officer" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Verantwortlich für strategische Cybersicherheit und Compliance" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-blue-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-400", children: "Security Committee" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Interdisziplinäres Gremium für Cybersicherheitsentscheidungen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-green-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-green-400", children: "Security Champions" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Dezentrale Sicherheitsverantwortliche in allen Geschäftsbereichen" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "supply-chain",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Network, { className: "h-6 w-6 text-green-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Lieferkettenmanagement" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Supply Chain Security" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6", children: "NIS2 verlangt umfassende Bewertung und Überwachung der Cybersicherheitsrisiken in der gesamten Lieferkette." }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-blue-900/20 border border-blue-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-400 mb-2", children: "Vendor Assessment" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Systematische Bewertung der Cybersicherheitsreife aller Zulieferer" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-purple-900/20 border border-purple-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-400 mb-2", children: "Vertragsklauseln" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Cybersicherheitsanforderungen in allen Lieferantenverträgen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-green-900/20 border border-green-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-400 mb-2", children: "Kontinuierliches Monitoring" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Laufende Überwachung der Sicherheitslage bei kritischen Lieferanten" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Kritische Lieferanten" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Server, { className: "h-4 w-4 text-blue-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-400", children: "IT-Dienstleister" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Cloud-Provider, Managed Services, Software-Anbieter" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-red-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-400", children: "Kritische Infrastruktur" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Energieversorger, Telekommunikation, Logistikpartner" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4 text-orange-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-orange-400", children: "Technologie-Lieferanten" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Hardware-Hersteller, Software-Entwickler, OEM-Partner" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "business-continuity",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-cyan-600/20 rounded-lg", children: /* @__PURE__ */ jsx(RotateCcw, { className: "h-6 w-6 text-cyan-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Business Continuity" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Disaster Recovery" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6", children: "Strukturierte Pläne zur schnellen Wiederherstellung kritischer Geschäftsprozesse nach Cybersicherheitsvorfällen." }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-red-900/20 border border-red-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-400 mb-2", children: "RTO (Recovery Time Objective)" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Maximale akzeptable Ausfallzeit für kritische Systeme" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-orange-900/20 border border-orange-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-400 mb-2", children: "RPO (Recovery Point Objective)" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Maximaler akzeptabler Datenverlust bei System-Recovery" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Backup-Strategien" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Database, { className: "h-4 w-4 text-blue-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-400", children: "3-2-1 Regel" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "3 Kopien, 2 verschiedene Medien, 1 Offsite-Backup" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Cloud, { className: "h-4 w-4 text-purple-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-400", children: "Air-Gapped Backups" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Physisch getrennte Backups gegen Ransomware-Angriffe" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "encryption",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-indigo-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Lock, { className: "h-6 w-6 text-indigo-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Verschlüsselung" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Verschlüsselungsstandards" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6", children: "NIS2 verlangt starke Verschlüsselung für alle sensiblen Daten sowohl in Ruhe als auch bei der Übertragung." }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-blue-900/20 border border-blue-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-400 mb-2", children: "Data at Rest" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "AES-256 Verschlüsselung für gespeicherte Daten und Datenbanken" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-green-900/20 border border-green-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-400 mb-2", children: "Data in Transit" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "TLS 1.3 für alle Datenübertragungen und API-Kommunikation" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-purple-900/20 border border-purple-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-400 mb-2", children: "Key Management" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Hardware Security Modules (HSM) für Schlüsselverwaltung" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Implementierung" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4 text-orange-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-orange-400", children: "End-to-End Encryption" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Vollständige Verschlüsselung vom Sender zum Empfänger" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-red-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-red-400", children: "Zero-Knowledge Architecture" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Service-Provider haben keinen Zugriff auf Kundendaten" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Award, { className: "h-4 w-4 text-yellow-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-yellow-400", children: "Quantum-Safe Cryptography" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Vorbereitung auf Post-Quantum-Kryptographie" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "vulnerability-management",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-yellow-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Search, { className: "h-6 w-6 text-yellow-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Vulnerability Management" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Schwachstellenmanagement" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6", children: "Systematische Identifikation, Bewertung und Behebung von Sicherheitslücken in der gesamten IT-Infrastruktur." }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-red-900/20 border border-red-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-400 mb-2", children: "Kritisch (CVSS 9.0-10.0)" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Sofortige Behebung binnen 24 Stunden" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-orange-900/20 border border-orange-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-400 mb-2", children: "Hoch (CVSS 7.0-8.9)" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Patches binnen 72 Stunden implementieren" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-yellow-400 mb-2", children: "Mittel (CVSS 4.0-6.9)" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Reguläre Patch-Zyklen (14 Tage)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Automatisierung" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Zap, { className: "h-4 w-4 text-blue-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-400", children: "Automated Scanning" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Kontinuierliche Vulnerability Scans aller Systeme" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(TrendingUp, { className: "h-4 w-4 text-green-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-green-400", children: "Risk Scoring" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Automatische Risikobewertung und Priorisierung" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4 text-purple-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-400", children: "Patch Management" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Automatisierte Patch-Deployment mit Rollback-Funktionen" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "penetration-testing",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-red-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Target, { className: "h-6 w-6 text-red-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Penetrationstests" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Pentest-Strategie" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6", children: "Regelmäßige Penetrationstests zur Bewertung der praktischen Wirksamkeit implementierter Sicherheitsmaßnahmen." }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-red-900/20 border border-red-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-400 mb-2", children: "Black Box Testing" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Externe Sicht ohne Vorwissen über interne Systeme" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-orange-900/20 border border-orange-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-400 mb-2", children: "White Box Testing" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Vollständiger Zugang zu Systemdokumentation und Code" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-yellow-400 mb-2", children: "Red Team Exercises" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Realistische Angriffssimulationen über längere Zeiträume" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Test-Bereiche" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Network, { className: "h-4 w-4 text-blue-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-400", children: "Netzwerk-Penetration" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Externe und interne Netzwerk-Infrastruktur" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 text-green-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-green-400", children: "Web Application Testing" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "OWASP Top 10 und branchenspezifische Schwachstellen" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 text-purple-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-400", children: "Social Engineering" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Phishing-Kampagnen und Mitarbeiter-Awareness-Tests" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "enforcement",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-red-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Gavel, { className: "h-6 w-6 text-red-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Durchsetzung & Sanktionen" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Sanktionsmöglichkeiten" }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-300 mb-6", children: "NIS2 sieht erheblich härtere Sanktionen vor als die ursprüngliche NIS-Richtlinie, einschließlich persönlicher Haftung der Führungskräfte." }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-red-900/20 border border-red-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-400 mb-2", children: "Geldstrafen" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Bis zu 10 Mio. € oder 2% des weltweiten Jahresumsatzes" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-orange-900/20 border border-orange-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-400 mb-2", children: "Betriebsverbote" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Temporäre oder dauerhafte Untersagung des Geschäftsbetriebs" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-yellow-900/20 border border-yellow-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-yellow-400 mb-2", children: "Persönliche Haftung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Führungskräfte können persönlich zur Verantwortung gezogen werden" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Aufsichtsbehörden" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Building, { className: "h-4 w-4 text-blue-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-400", children: "Nationale Behörden" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "BSI, BNetzA und andere sektorspezifische Aufsichtsbehörden" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Globe, { className: "h-4 w-4 text-green-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-green-400", children: "EU-Koordination" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "ENISA koordiniert grenzüberschreitende Durchsetzung" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                      /* @__PURE__ */ jsx(Search, { className: "h-4 w-4 text-purple-400" }),
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-purple-400", children: "Prüfungsbefugnisse" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-300 text-sm", children: "Umfassende Audit- und Untersuchungsrechte der Behörden" })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          className: "mb-16",
          "data-section": "best-practices",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/50 border-slate-700", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-yellow-600/20 rounded-lg", children: /* @__PURE__ */ jsx(Award, { className: "h-6 w-6 text-yellow-400" }) }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white", children: "Best Practices" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-blue-400" }),
                    "Proaktive Sicherheit"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Regelmäßige Threat Intelligence Updates"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Automatisierte Vulnerability Scans"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Zero Trust Architecture"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Continuous Security Monitoring"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-purple-400" }),
                    "Organisatorische Exzellenz"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Security Champions Programm"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Regelmäßige Tabletop-Übungen"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Cross-funktionale Security Teams"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Kontinuierliche Schulungen"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5 text-green-400" }),
                    "Compliance Excellence"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Automatisierte Compliance-Berichte"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Dashboard für Führungskräfte"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Proaktive Kommunikation mit Behörden"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Kontinuierliche Verbesserung"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/30 rounded-lg p-6", children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Network, { className: "h-5 w-5 text-orange-400" }),
                    "Technologische Innovation"
                  ] }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-gray-300", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "KI-basierte Bedrohungserkennung"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "Cloud-native Security Tools"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "DevSecOps Integration"
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                      "API Security Management"
                    ] })
                  ] })
                ] })
              ] })
            ] })
          ] }) })
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  Nis2Guide as default
};
