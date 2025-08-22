import { jsxs, jsx } from "react/jsx-runtime";
import React__default, { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { ChevronDown, FileCheck, Scale, Timer, Download, AlertOctagon, Database, UserCheck, Shield, FileText, Briefcase, Trash2, AlertTriangle, FolderOpen, Search, ClipboardList, TrendingUp, Clock, Target, ChevronRight, CheckCircle2, RefreshCw, Archive, Circle, Users, MessageSquare, CheckCircle, Check, X, Calendar, Brain, Award, Star, Lightbulb, Info, BookOpen, Phone, ArrowRight, ArrowLeft } from "lucide-react";
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
const ComplianceAuditEmergencyGuide = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      h2, h3, h4 { scroll-margin-top: 96px; }
      section[id] { scroll-margin-top: 80px; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const [currentPhase, setCurrentPhase] = useState(0);
  const [completedItems, setCompletedItems] = useState([]);
  const [expandedSections, setExpandedSections] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(24 * 60 * 60);
  const [documentStatus, setDocumentStatus] = useState({});
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const auditPhases = [
    {
      id: 0,
      title: "Sofort-Reaktion & Koordination",
      timeframe: "0-2 Stunden",
      priority: "KRITISCH",
      icon: AlertTriangle,
      color: "from-red-500 to-orange-500",
      description: "Aktivierung des Audit-Response Teams und erste Koordination",
      keyActivities: [
        "Audit-Ankündigung analysieren und Scope verstehen",
        "Crisis Response Team zusammenstellen",
        "Interne Kommunikation aktivieren",
        "Ressourcen und Verantwortlichkeiten zuweisen",
        "Erste Lagebeurteilung durchführen"
      ],
      criticalDocuments: [
        {
          id: "audit-notice",
          name: "Behördliche Ankündigung",
          category: "Legal",
          status: "required",
          location: "Email/Post"
        },
        {
          id: "dpa-appointment",
          name: "DSB-Benennung",
          category: "Governance",
          status: "required",
          location: "HR/Legal"
        },
        {
          id: "processing-register",
          name: "Verarbeitungsverzeichnis",
          category: "Documentation",
          status: "required",
          location: "DPO Office"
        }
      ],
      checklist: [
        {
          id: "team-activation",
          task: "Audit Response Team aktiviert",
          responsible: "C-Level",
          priority: "critical"
        },
        {
          id: "scope-analysis",
          task: "Audit-Scope und Timeline verstanden",
          responsible: "Legal/DPO",
          priority: "critical"
        },
        {
          id: "resource-allocation",
          task: "Ressourcen zugewiesen",
          responsible: "Management",
          priority: "high"
        },
        {
          id: "communication-setup",
          task: "Kommunikationskanäle etabliert",
          responsible: "IT/Comms",
          priority: "high"
        }
      ],
      tips: [
        "Keine Panik - strukturiertes Vorgehen ist entscheidend",
        "Vollständige Kooperation signalisieren",
        "Keine voreiligen Aussagen oder Zugeständnisse",
        "Externe Berater frühzeitig einbinden"
      ]
    },
    {
      id: 1,
      title: "Dokumenten-Sammlung & Vorbereitung",
      timeframe: "2-8 Stunden",
      priority: "KRITISCH",
      icon: FolderOpen,
      color: "from-orange-500 to-red-500",
      description: "Systematische Sammlung aller erforderlichen Dokumente und Nachweise",
      keyActivities: [
        "Zentrale Dokumentensammlung einrichten",
        "Alle DSGVO-relevanten Dokumente identifizieren",
        "Fehlende Dokumente priorisieren",
        "Quick-Wins identifizieren und umsetzen",
        "Dokumenten-Tracking System aufsetzen"
      ],
      documentCategories: [
        {
          category: "Datenschutz-Grundlagen",
          priority: "KRITISCH",
          documents: [
            "Datenschutzerklärung (aktuell)",
            "Cookie-Policy",
            "Verarbeitungsverzeichnis",
            "DSB-Benennung",
            "Datenschutz-Folgenabschätzungen",
            "TOM-Dokumentation"
          ]
        },
        {
          category: "Verträge & Vereinbarungen",
          priority: "HOCH",
          documents: [
            "Auftragsverarbeitungsverträge (AVV)",
            "Joint Controller Agreements",
            "Standardvertragsklauseln (SCCs)",
            "Binding Corporate Rules (BCRs)",
            "Mitarbeiter-Verpflichtungen"
          ]
        },
        {
          category: "Prozesse & Policies",
          priority: "HOCH",
          documents: [
            "Incident Response Plan",
            "Betroffenenrechte-Prozess",
            "Löschkonzept",
            "Datenschutz-Managementsystem",
            "Schulungsunterlagen",
            "Awareness-Nachweise"
          ]
        },
        {
          category: "Technische Dokumentation",
          priority: "MITTEL",
          documents: [
            "IT-Sicherheitskonzept",
            "Netzwerk-Diagramme",
            "System-Inventar",
            "Backup-Konzept",
            "Verschlüsselungs-Policies",
            "Access Control Matrix"
          ]
        }
      ],
      documentTracker: {
        totalRequired: 35,
        categories: 4,
        criticalMissing: 0
      },
      tips: [
        "Dokumenten-Verantwortliche klar benennen",
        "Versionskontrolle sicherstellen",
        "Lücken ehrlich dokumentieren",
        "Nachreichungen vorbereiten"
      ]
    },
    {
      id: 2,
      title: "Gap-Analyse & Quick Fixes",
      timeframe: "8-16 Stunden",
      priority: "HOCH",
      icon: Search,
      color: "from-yellow-500 to-orange-500",
      description: "Identifikation von Lücken und sofortige Behebung kritischer Mängel",
      keyActivities: [
        "Systematische Gap-Analyse durchführen",
        "Kritische Compliance-Lücken identifizieren",
        "Quick-Fix Maßnahmen priorisieren",
        "Sofort-Implementierungen starten",
        "Fortschritt dokumentieren"
      ],
      gapCategories: [
        {
          area: "Rechtsgrundlagen",
          gaps: [
            {
              issue: "Fehlende Einwilligungen",
              severity: "KRITISCH",
              quickFix: "Consent-Banner Update",
              timeToFix: "2-4h"
            },
            {
              issue: "Veraltete Datenschutzerklärung",
              severity: "HOCH",
              quickFix: "Template anpassen & publizieren",
              timeToFix: "1-2h"
            },
            {
              issue: "Fehlende AVVs",
              severity: "HOCH",
              quickFix: "Standard-AVV versenden",
              timeToFix: "4-6h"
            }
          ]
        },
        {
          area: "Technische Maßnahmen",
          gaps: [
            {
              issue: "Unverschlüsselte Datenübertragung",
              severity: "KRITISCH",
              quickFix: "SSL/TLS aktivieren",
              timeToFix: "1-2h"
            },
            {
              issue: "Fehlende Zugriffskontrollen",
              severity: "HOCH",
              quickFix: "2FA aktivieren",
              timeToFix: "2-4h"
            },
            {
              issue: "Keine Log-Aufzeichnung",
              severity: "MITTEL",
              quickFix: "Audit Logs aktivieren",
              timeToFix: "2-3h"
            }
          ]
        },
        {
          area: "Organisatorische Maßnahmen",
          gaps: [
            {
              issue: "Fehlende Schulungsnachweise",
              severity: "MITTEL",
              quickFix: "Online-Schulung durchführen",
              timeToFix: "4-8h"
            },
            {
              issue: "Kein Löschkonzept",
              severity: "HOCH",
              quickFix: "Template adaptieren",
              timeToFix: "3-4h"
            },
            {
              issue: "Unvollständiges VVT",
              severity: "KRITISCH",
              quickFix: "Prozesse dokumentieren",
              timeToFix: "6-8h"
            }
          ]
        }
      ],
      priorityMatrix: {
        immediate: ["Einwilligungen", "Verschlüsselung", "VVT"],
        urgent: ["AVVs", "Datenschutzerklärung", "Zugriffskontrollen"],
        important: ["Schulungen", "Dokumentation", "Policies"]
      }
    },
    {
      id: 3,
      title: "Audit-Vorbereitung & Briefing",
      timeframe: "16-20 Stunden",
      priority: "HOCH",
      icon: Briefcase,
      color: "from-blue-500 to-indigo-500",
      description: "Finale Vorbereitung des Teams und der Audit-Unterlagen",
      keyActivities: [
        "Audit-Raum vorbereiten",
        "Team-Briefing durchführen",
        "Dokumentation finalisieren",
        "Kommunikationsstrategie festlegen",
        "Eskalationspfade definieren"
      ],
      auditPreparation: {
        physical: [
          "Dedizierter Audit-Raum mit IT-Ausstattung",
          "Dokumenten-Ordner systematisch sortiert",
          "Zugang zu allen relevanten Systemen",
          "Backup-Kopien kritischer Dokumente",
          "Notfall-Kontaktliste"
        ],
        team: [
          {
            role: "Lead Auditor Interface",
            person: "DPO/Legal Lead",
            responsibilities: ["Hauptansprechpartner", "Dokumentenübergabe", "Eskalation"]
          },
          {
            role: "Technical Expert",
            person: "IT Security Lead",
            responsibilities: ["Technische Fragen", "System-Demonstrationen", "TOM-Erklärungen"]
          },
          {
            role: "Process Owner",
            person: "Operations Lead",
            responsibilities: ["Prozess-Erklärungen", "Praktische Umsetzung", "Mitarbeiter-Themen"]
          },
          {
            role: "Documentation Manager",
            person: "Compliance Officer",
            responsibilities: ["Dokumenten-Tracking", "Nachreichungen", "Protokollierung"]
          }
        ],
        communication: {
          dos: [
            "Höflich und kooperativ sein",
            "Präzise und wahrheitsgemäß antworten",
            "Bei Unsicherheit Rücksprache halten",
            "Alles schriftlich dokumentieren"
          ],
          donts: [
            "Spekulationen oder Vermutungen äußern",
            "Ungefragt zusätzliche Informationen geben",
            "Andere Abteilungen beschuldigen",
            "Dokumente ohne Protokoll übergeben"
          ]
        }
      },
      finalChecklist: [
        "Alle kritischen Dokumente verfügbar?",
        "Team gebrieft und vorbereitet?",
        "Audit-Raum eingerichtet?",
        "IT-Systeme zugänglich?",
        "Eskalationskette klar?",
        "Externe Berater standby?"
      ]
    },
    {
      id: 4,
      title: "Audit-Durchführung & Management",
      timeframe: "Tag der Prüfung",
      priority: "KRITISCH",
      icon: ClipboardList,
      color: "from-indigo-500 to-purple-500",
      description: "Professionelle Begleitung während der Audit-Durchführung",
      keyActivities: [
        "Auditor-Empfang und Einführung",
        "Strukturierte Dokumentenübergabe",
        "Aktive Audit-Begleitung",
        "Kontinuierliche Dokumentation",
        "Tägliche Team-Abstimmungen"
      ],
      auditDayProtocol: {
        morning: [
          "08:00 - Team-Briefing und letzte Vorbereitungen",
          "09:00 - Auditor-Empfang und Begrüßung",
          "09:30 - Agenda-Abstimmung und Zeitplan",
          "10:00 - Unternehmenspräsentation und DSGVO-Overview",
          "11:00 - Erste Dokumentenprüfung"
        ],
        ongoing: [
          "Kontinuierliche Verfügbarkeit des Kernteams",
          "Protokollierung aller Anfragen und Antworten",
          "Regelmäßige interne Abstimmungen",
          "Sofortige Eskalation bei kritischen Themen",
          "Nachreichung fehlender Dokumente"
        ],
        daily: [
          "17:00 - Tagesabschluss mit Auditor",
          "17:30 - Internes Debriefing",
          "18:00 - Vorbereitung Folgetag",
          "18:30 - Management Update"
        ]
      },
      responseStrategies: {
        questions: {
          technical: "IT-Experte hinzuziehen, praktische Demonstration anbieten",
          legal: "Rechtsgrundlage erläutern, Dokumentation zeigen",
          process: "Prozess live demonstrieren, Mitarbeiter einbeziehen",
          missing: "Ehrlich kommunizieren, Nachreichung anbieten"
        },
        findings: {
          minor: "Sofortige Korrektur zusagen, Timeline nennen",
          major: "Verständnis zeigen, Lösungsansatz präsentieren",
          critical: "Management einbeziehen, Sofortmaßnahmen diskutieren"
        }
      },
      documentation: [
        "Audit-Protokoll führen",
        "Alle übergebenen Dokumente notieren",
        "Zusagen und Timelines festhalten",
        "Findings sofort dokumentieren",
        "Follow-up Actions definieren"
      ]
    },
    {
      id: 5,
      title: "Post-Audit & Follow-Up",
      timeframe: "1-4 Wochen",
      priority: "WICHTIG",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      description: "Nachbereitung, Maßnahmenumsetzung und Relationship Management",
      keyActivities: [
        "Audit-Bericht analysieren",
        "Maßnahmenplan erstellen",
        "Umsetzung initiieren",
        "Regelmäßige Updates an Behörde",
        "Lessons Learned dokumentieren"
      ],
      postAuditActions: {
        immediate: [
          "Thank You Note an Auditor",
          "Internes Debriefing mit allen Beteiligten",
          "Quick Wins sofort umsetzen",
          "Kritische Findings priorisieren"
        ],
        shortTerm: [
          "Detaillierten Maßnahmenplan erstellen",
          "Ressourcen für Umsetzung allokieren",
          "Regelmäßige Fortschritts-Updates",
          "Dokumentation vervollständigen"
        ],
        longTerm: [
          "DSGVO-Managementsystem verbessern",
          "Regelmäßige interne Audits etablieren",
          "Kontinuierliche Schulungen",
          "Proaktive Behördenkommunikation"
        ]
      },
      communicationPlan: {
        internal: [
          "Management Report mit Findings und Actions",
          "Team Appreciation und Feedback",
          "Lessons Learned Workshop",
          "Process Improvements"
        ],
        external: [
          "Formelle Antwort auf Audit-Bericht",
          "Regelmäßige Status-Updates",
          "Nachweis der Umsetzung",
          "Proaktive Kommunikation"
        ]
      },
      successMetrics: [
        "Alle kritischen Findings adressiert",
        "Maßnahmenplan akzeptiert",
        "Positive Behördenbeziehung",
        "Verbesserte Compliance-Kultur",
        "Reduziertes Bußgeldrisiko"
      ]
    }
  ];
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining((prev) => Math.max(0, prev - 1));
    }, 1e3);
    return () => clearInterval(timer);
  }, []);
  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    return `${hours}h ${minutes}m`;
  };
  const toggleSection = (sectionId) => {
    setExpandedSections(
      (prev) => prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId]
    );
  };
  const updateDocumentStatus = (docId, status) => {
    setDocumentStatus((prev) => ({ ...prev, [docId]: status }));
  };
  const getStatusColor = (status) => {
    switch (status) {
      case "verified":
        return "text-green-500";
      case "collected":
        return "text-yellow-500";
      default:
        return "text-red-500";
    }
  };
  const getStatusIcon = (status) => {
    switch (status) {
      case "verified":
        return CheckCircle;
      case "collected":
        return Clock;
      default:
        return AlertOctagon;
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Compliance Audit Emergency – Aufsichtsbehörden Response" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Compliance Audit Emergency: Aufsichtsbehörden-Anfragen, Dokumentenvorbereitung, rechtliche Verteidigung. ✓ Regulatory Response ✓ Document Preparation ✓ Legal Strategy." }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://marsstein.ai/wissen/krisenmanagement/compliance-audit-emergency" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Compliance Audit Emergency – Aufsichtsbehörden Response" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Compliance Audit Emergency: Aufsichtsbehörden-Anfragen, Dokumentenvorbereitung, rechtliche Verteidigung. ✓ Regulatory Response ✓ Document Preparation ✓ Legal Strategy." }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://marsstein.ai/wissen/krisenmanagement/compliance-audit-emergency" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Compliance Audit Emergency Response Guide",
        "description": "Strukturierte Vorbereitung auf unangekündigte Behördenprüfungen in nur 24 Stunden",
        "author": {
          "@type": "Organization",
          "name": "Marsstein"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Marsstein",
          "logo": {
            "@type": "ImageObject",
            "url": "https://marsstein.ai/logo.png"
          }
        },
        "datePublished": (/* @__PURE__ */ new Date()).toISOString(),
        "dateModified": (/* @__PURE__ */ new Date()).toISOString()
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", className: "lg:hidden sticky top-16 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800", children: /* @__PURE__ */ jsxs("details", { className: "container mx-auto max-w-7xl px-4", children: [
      /* @__PURE__ */ jsxs("summary", { className: "py-3 cursor-pointer font-semibold text-yellow-400 flex items-center justify-between", children: [
        "Inhaltsverzeichnis",
        /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "pb-4 space-y-2", children: [
        /* @__PURE__ */ jsx("a", { href: "#audit-phasen", className: "block text-sm text-slate-300 hover:text-yellow-400 pl-4", children: "Audit-Phasen" }),
        /* @__PURE__ */ jsx("a", { href: "#sofort-reaktion", className: "block text-sm text-slate-300 hover:text-yellow-400 pl-4", children: "1. Sofort-Reaktion" }),
        /* @__PURE__ */ jsx("a", { href: "#dokumenten-sammlung", className: "block text-sm text-slate-300 hover:text-yellow-400 pl-4", children: "2. Dokumenten-Sammlung" }),
        /* @__PURE__ */ jsx("a", { href: "#gap-analyse", className: "block text-sm text-slate-300 hover:text-yellow-400 pl-4", children: "3. Gap-Analyse" }),
        /* @__PURE__ */ jsx("a", { href: "#audit-vorbereitung", className: "block text-sm text-slate-300 hover:text-yellow-400 pl-4", children: "4. Audit-Vorbereitung" }),
        /* @__PURE__ */ jsx("a", { href: "#audit-durchfuehrung", className: "block text-sm text-slate-300 hover:text-yellow-400 pl-4", children: "5. Audit-Durchführung" }),
        /* @__PURE__ */ jsx("a", { href: "#post-audit", className: "block text-sm text-slate-300 hover:text-yellow-400 pl-4", children: "6. Post-Audit" }),
        /* @__PURE__ */ jsx("a", { href: "#ressourcen", className: "block text-sm text-slate-300 hover:text-yellow-400 pl-4", children: "Sofort-Ressourcen" })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "fixed top-16 left-0 right-0 z-50 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsx(FileCheck, { className: "h-5 w-5 text-yellow-400" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-slate-300", children: "Compliance Audit Emergency Response" }),
        /* @__PURE__ */ jsxs(Badge, { className: cn(
          "text-xs",
          timeRemaining < 3600 ? "bg-red-500/20 text-red-300 border-red-500/30 animate-pulse" : timeRemaining < 7200 ? "bg-orange-500/20 text-orange-300 border-orange-500/30" : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
        ), children: [
          formatTime(timeRemaining),
          " verbleibend"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs(Badge, { className: "bg-slate-700 text-slate-200", children: [
          "Phase ",
          currentPhase + 1,
          "/6"
        ] }),
        /* @__PURE__ */ jsx(Progress, { value: completedItems.length / 25 * 100, className: "w-32 h-2" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        ref: heroRef,
        style: { y },
        className: "relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden",
        children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl relative z-10", children: /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: { delay: 0.2, type: "spring", stiffness: 200 },
                  className: "inline-flex items-center gap-3 px-6 py-3 bg-yellow-500/10 backdrop-blur-sm rounded-full mb-8 border border-yellow-500/20",
                  children: [
                    /* @__PURE__ */ jsx(FileCheck, { className: "h-5 w-5 text-yellow-400" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-yellow-300", children: "Unangekündigte Prüfung" }),
                    /* @__PURE__ */ jsx(Scale, { className: "h-5 w-5 text-orange-400 animate-pulse" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.h1,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4, duration: 0.8 },
                  className: "text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white", children: "Compliance" }),
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent", children: "Audit" }),
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", { className: "text-white", children: "Emergency" })
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
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-yellow-300", children: "Strukturierte Vorbereitung" }),
                    " auf unangekündigte Behördenprüfungen in nur 24 Stunden. Ergänzt unsere ",
                    /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement", className: "text-yellow-400 hover:text-yellow-300 underline", children: "Krisenmanagement-Guides" }),
                    "und ",
                    /* @__PURE__ */ jsx(Link, { to: "/dsgvo/dokumentation", className: "text-yellow-400 hover:text-yellow-300 underline", children: "DSGVO-Dokumentation" }),
                    "."
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.8, duration: 0.8 },
                  className: "flex flex-col sm:flex-row gap-4 justify-center items-center",
                  children: [
                    /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
                      /* @__PURE__ */ jsx(Timer, { className: "mr-2 h-5 w-5" }),
                      "Emergency Response starten"
                    ] }) }),
                    /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-2 border-yellow-500/30 hover:border-yellow-400 text-yellow-300 hover:bg-yellow-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm", children: /* @__PURE__ */ jsxs(Link, { to: "/dsgvo/dokumentation/vorlagen", children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "Audit-Checkliste"
                    ] }) })
                  ]
                }
              )
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        className: "bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-2 border-yellow-500/30 rounded-2xl p-8 backdrop-blur-sm",
        children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx(AlertOctagon, { className: "h-8 w-8 text-yellow-400 animate-pulse flex-shrink-0 mt-1" }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-white mb-4", children: "Kritische Erst-Dokumente" }),
            /* @__PURE__ */ jsxs("p", { className: "text-slate-300 mb-6", children: [
              "Diese Dokumente werden mit hoher Wahrscheinlichkeit als erstes angefordert. Nutzen Sie unsere ",
              /* @__PURE__ */ jsx(Link, { to: "/dsgvo/dokumentation/vorlagen", className: "text-yellow-400 hover:text-yellow-300 underline", children: "DSGVO-Vorlagen" }),
              " für schnelle Dokumentenerstellung."
            ] }),
            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-6", children: [
              {
                doc: "Verarbeitungsverzeichnis",
                location: "DPO/Legal",
                status: "MUST HAVE",
                icon: Database
              },
              {
                doc: "DSB-Benennung",
                location: "HR/Legal",
                status: "MUST HAVE",
                icon: UserCheck
              },
              {
                doc: "TOM-Dokumentation",
                location: "IT Security",
                status: "MUST HAVE",
                icon: Shield
              },
              {
                doc: "Datenschutzerklärung",
                location: "Website/Legal",
                status: "KRITISCH",
                icon: FileText
              },
              {
                doc: "AVV-Übersicht",
                location: "Procurement/Legal",
                status: "KRITISCH",
                icon: Briefcase
              },
              {
                doc: "Löschkonzept",
                location: "IT/DPO",
                status: "KRITISCH",
                icon: Trash2
              }
            ].map((item, index) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { delay: index * 0.1 },
                className: "bg-slate-800/60 rounded-xl p-4 border border-slate-700",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                    /* @__PURE__ */ jsx(item.icon, { className: "h-6 w-6 text-yellow-400" }),
                    /* @__PURE__ */ jsx(Badge, { className: cn(
                      "text-xs",
                      item.status === "MUST HAVE" ? "bg-red-500/20 text-red-300 border-red-500/30" : "bg-orange-500/20 text-orange-300 border-orange-500/30"
                    ), children: item.status })
                  ] }),
                  /* @__PURE__ */ jsx("h3", { className: "font-semibold text-white mb-1", children: item.doc }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400", children: [
                    "📍 ",
                    item.location
                  ] })
                ]
              },
              index
            )) })
          ] })
        ] })
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", id: "audit-phasen", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", className: "hidden lg:block mb-12 bg-slate-800/50 rounded-2xl p-6 border border-slate-700", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-yellow-400 mb-4", children: "Inhaltsverzeichnis" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#sofort-reaktion", className: "text-slate-300 hover:text-yellow-400", children: "1. Sofort-Reaktion & Koordination" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#dokumenten-sammlung", className: "text-slate-300 hover:text-yellow-400", children: "2. Dokumenten-Sammlung & Vorbereitung" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#gap-analyse", className: "text-slate-300 hover:text-yellow-400", children: "3. Gap-Analyse & Quick Fixes" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#audit-vorbereitung", className: "text-slate-300 hover:text-yellow-400", children: "4. Audit-Vorbereitung & Briefing" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#audit-durchfuehrung", className: "text-slate-300 hover:text-yellow-400", children: "5. Audit-Durchführung & Management" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#post-audit", className: "text-slate-300 hover:text-yellow-400", children: "6. Post-Audit & Follow-Up" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#ressourcen", className: "text-slate-300 hover:text-yellow-400", children: "7. Sofort-Ressourcen" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-8", children: auditPhases.map((phase, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          className: cn(
            "relative group",
            currentPhase === phase.id && "ring-2 ring-yellow-500/50"
          ),
          id: phase.id === 0 ? "sofort-reaktion" : phase.id === 1 ? "dokumenten-sammlung" : phase.id === 2 ? "gap-analyse" : phase.id === 3 ? "audit-vorbereitung" : phase.id === 4 ? "audit-durchfuehrung" : "post-audit",
          children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "absolute inset-0 rounded-3xl blur-2xl transition-opacity duration-500 -z-10",
              `bg-gradient-to-r ${phase.color}`,
              "opacity-0 group-hover:opacity-20"
            ) }),
            /* @__PURE__ */ jsx(Card, { className: "border-2 border-slate-700/50 bg-slate-800/80 transition-all duration-500 group-hover:shadow-2xl overflow-hidden", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsx(
                    motion.div,
                    {
                      whileHover: { scale: 1.1 },
                      className: cn(
                        "p-4 rounded-2xl bg-gradient-to-r shadow-lg",
                        phase.color
                      ),
                      children: /* @__PURE__ */ jsx(phase.icon, { className: "h-8 w-8 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: phase.title }),
                      /* @__PURE__ */ jsx(Badge, { className: cn(
                        phase.priority === "KRITISCH" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse" : phase.priority === "HOCH" ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100" : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                      ), children: phase.priority })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-2", children: phase.description }),
                    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 text-sm text-slate-400", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
                      phase.timeframe
                    ] }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    onClick: () => setCurrentPhase(phase.id),
                    size: "sm",
                    variant: currentPhase === phase.id ? "default" : "outline",
                    className: cn(
                      "transition-all duration-300",
                      currentPhase === phase.id ? "bg-yellow-600 hover:bg-yellow-700 text-white" : "border-slate-600 text-slate-300"
                    ),
                    children: currentPhase === phase.id ? "Aktiv" : "Aktivieren"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: () => toggleSection(`activities-${phase.id}`),
                    variant: "ghost",
                    className: "w-full justify-between p-0 h-auto hover:bg-transparent",
                    children: [
                      /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-yellow-400" }),
                        "Schlüsselaktivitäten"
                      ] }),
                      expandedSections.includes(`activities-${phase.id}`) ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 text-slate-400" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-slate-400" })
                    ]
                  }
                ),
                expandedSections.includes(`activities-${phase.id}`) && /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    className: "mt-4 space-y-3",
                    children: phase.keyActivities.map((activity, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-yellow-400 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: activity })
                    ] }, idx))
                  }
                )
              ] }),
              phase.id === 0 && phase.criticalDocuments && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-blue-400" }),
                  "Kritische Dokumente"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: phase.criticalDocuments.map((doc) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-slate-700/50 rounded-xl", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    React__default.createElement(
                      getStatusIcon(documentStatus[doc.id] || "pending"),
                      { className: cn("h-5 w-5", getStatusColor(documentStatus[doc.id] || "pending")) }
                    ),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("p", { className: "font-semibold text-white", children: doc.name }),
                      /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400", children: [
                        doc.category,
                        " • ",
                        doc.location
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Badge, { className: cn(
                      "text-xs",
                      doc.status === "required" ? "bg-red-500/20 text-red-300 border-red-500/30" : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                    ), children: doc.status }),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        size: "sm",
                        variant: "ghost",
                        onClick: () => {
                          const statuses = ["pending", "collected", "verified"];
                          const currentStatus = documentStatus[doc.id] || "pending";
                          const currentIndex = statuses.indexOf(currentStatus);
                          const nextStatus = statuses[(currentIndex + 1) % statuses.length];
                          updateDocumentStatus(doc.id, nextStatus);
                        },
                        children: /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4" })
                      }
                    )
                  ] })
                ] }, doc.id)) })
              ] }),
              phase.id === 1 && phase.documentCategories && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Archive, { className: "h-5 w-5 text-green-400" }),
                  "Dokumenten-Kategorien"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: phase.documentCategories.map((category, idx) => /* @__PURE__ */ jsxs("div", { className: "border border-slate-700/50 rounded-xl p-4 bg-slate-800/40", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white", children: category.category }),
                    /* @__PURE__ */ jsx(Badge, { className: cn(
                      "text-xs",
                      category.priority === "KRITISCH" ? "bg-red-500/20 text-red-300 border-red-500/30" : category.priority === "HOCH" ? "bg-orange-500/20 text-orange-300 border-orange-500/30" : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                    ), children: category.priority })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 gap-2", children: category.documents.map((doc, docIdx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(Circle, { className: "h-3 w-3 text-slate-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: doc })
                  ] }, docIdx)) })
                ] }, idx)) })
              ] }),
              phase.id === 2 && phase.gapCategories && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-orange-400" }),
                  "Gap-Analyse & Quick Fixes"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: phase.gapCategories.map((category, idx) => /* @__PURE__ */ jsxs("div", { className: "border border-slate-700/50 rounded-xl p-4 bg-slate-800/40", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-3", children: category.area }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3", children: category.gaps.map((gap, gapIdx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-slate-700/50 rounded-lg", children: [
                    /* @__PURE__ */ jsx(AlertOctagon, { className: cn(
                      "h-5 w-5 flex-shrink-0 mt-0.5",
                      gap.severity === "KRITISCH" ? "text-red-400" : gap.severity === "HOCH" ? "text-orange-400" : "text-yellow-400"
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
                        /* @__PURE__ */ jsx("p", { className: "font-semibold text-white", children: gap.issue }),
                        /* @__PURE__ */ jsx(Badge, { className: cn(
                          "text-xs",
                          gap.severity === "KRITISCH" ? "bg-red-500/20 text-red-300 border-red-500/30" : gap.severity === "HOCH" ? "bg-orange-500/20 text-orange-300 border-orange-500/30" : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                        ), children: gap.severity })
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-300 mb-1", children: [
                        "Quick Fix: ",
                        gap.quickFix
                      ] }),
                      /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-400", children: [
                        "⏱ ",
                        gap.timeToFix
                      ] })
                    ] })
                  ] }, gapIdx)) })
                ] }, idx)) })
              ] }),
              phase.id === 3 && phase.auditPreparation && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-purple-400" }),
                    "Audit Team & Rollen"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: phase.auditPreparation.team.map((member, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white", children: member.role }),
                      /* @__PURE__ */ jsx(UserCheck, { className: "h-5 w-5 text-purple-400" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-2", children: member.person }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-1", children: member.responsibilities.map((resp, respIdx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-slate-400", children: [
                      /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2" }),
                      /* @__PURE__ */ jsx("span", { children: resp })
                    ] }, respIdx)) })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(MessageSquare, { className: "h-5 w-5 text-blue-400" }),
                    "Kommunikations-Leitlinien"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-500/10 border border-green-500/30 rounded-xl p-4", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-300 mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5" }),
                        "DO's"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: phase.auditPreparation.communication.dos.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Check, { className: "h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: item })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-red-500/10 border border-red-500/30 rounded-xl p-4", children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-red-300 mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }),
                        "DON'Ts"
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: phase.auditPreparation.communication.donts.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" }),
                        /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: item })
                      ] }, idx)) })
                    ] })
                  ] })
                ] })
              ] }),
              phase.id === 4 && phase.auditDayProtocol && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "h-5 w-5 text-indigo-400" }),
                    "Audit-Tag Protokoll"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-4", children: Object.entries(phase.auditDayProtocol).map(([timeOfDay, activities]) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white capitalize mb-3", children: timeOfDay === "morning" ? "Vormittag" : timeOfDay === "ongoing" ? "Laufend" : "Tagesabschluss" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: activities.map((activity, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-indigo-400 flex-shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: activity })
                    ] }, idx)) })
                  ] }, timeOfDay)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Brain, { className: "h-5 w-5 text-pink-400" }),
                    "Response-Strategien"
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-3", children: "Fragen-Handling" }),
                      Object.entries(phase.responseStrategies.questions).map(([type, strategy]) => /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
                        /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-slate-300 capitalize", children: [
                          type,
                          ":"
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: strategy })
                      ] }, type))
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-3", children: "Finding-Management" }),
                      Object.entries(phase.responseStrategies.findings).map(([severity, response]) => /* @__PURE__ */ jsxs("div", { className: "mb-2", children: [
                        /* @__PURE__ */ jsxs("p", { className: "text-sm font-semibold text-slate-300 capitalize", children: [
                          severity,
                          ":"
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400", children: response })
                      ] }, severity))
                    ] })
                  ] })
                ] })
              ] }),
              phase.id === 5 && phase.postAuditActions && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5 text-green-400" }),
                    "Post-Audit Maßnahmen"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-3 gap-4", children: Object.entries(phase.postAuditActions).map(([timing, actions]) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white mb-3 capitalize", children: timing === "immediate" ? "Sofort" : timing === "shortTerm" ? "Kurzfristig" : "Langfristig" }),
                    /* @__PURE__ */ jsx("div", { className: "space-y-2", children: actions.map((action, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400 flex-shrink-0 mt-0.5" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: action })
                    ] }, idx)) })
                  ] }, timing)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-white mb-4 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-yellow-400" }),
                    "Erfolgs-Metriken"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-3", children: phase.successMetrics.map((metric, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-700/50 rounded-lg", children: [
                    /* @__PURE__ */ jsx(Star, { className: "h-5 w-5 text-yellow-400 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: metric })
                  ] }, idx)) })
                ] })
              ] }),
              phase.tips && /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-6 border-t border-slate-700/50", children: [
                /* @__PURE__ */ jsxs("h3", { className: "text-sm font-semibold text-slate-300 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4 text-yellow-400" }),
                  "Praktische Tipps"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3", children: phase.tips.map((tip, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-blue-400 flex-shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400", children: tip })
                ] }, idx)) })
              ] })
            ] }) })
          ]
        },
        phase.id
      )) })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden", id: "ressourcen", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-slate-800/50 via-yellow-900/30 to-slate-800/50" }),
      /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.8 },
            className: "text-center mb-16",
            children: [
              /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent", children: "Sofort-Ressourcen" }) }),
              /* @__PURE__ */ jsx("p", { className: "text-xl md:text-2xl text-slate-300", children: "Downloads und Tools für die schnelle Audit-Vorbereitung" })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-4 gap-6", children: [
          {
            title: "Master-Checkliste",
            description: "Vollständige Audit-Vorbereitung Checkliste",
            icon: ClipboardList,
            action: "Download PDF",
            color: "from-yellow-500 to-orange-500",
            badge: "MUST HAVE"
          },
          {
            title: "Dokumenten-Tracker",
            description: "Excel-Template für Dokumentenverwaltung",
            icon: FileText,
            action: "Excel laden",
            color: "from-orange-500 to-red-500",
            badge: "EMPFOHLEN"
          },
          {
            title: "Audit-Protokoll",
            description: "Vorlage für Audit-Dokumentation",
            icon: BookOpen,
            action: "Template öffnen",
            color: "from-red-500 to-pink-500",
            badge: "HILFREICH"
          },
          {
            title: "Emergency Contacts",
            description: "Wichtige Kontakte für Audit-Notfälle",
            icon: Phone,
            action: "Kontakte anzeigen",
            color: "from-pink-500 to-purple-500",
            badge: "24/7"
          }
        ].map((resource, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            whileHover: { y: -5 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "inline-flex p-3 rounded-2xl bg-gradient-to-r shadow-lg",
                  resource.color
                ), children: /* @__PURE__ */ jsx(resource.icon, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsx(Badge, { className: cn(
                  "text-xs",
                  resource.badge === "MUST HAVE" ? "bg-red-500/20 text-red-300 border-red-500/30" : resource.badge === "24/7" ? "bg-green-500/20 text-green-300 border-green-500/30" : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                ), children: resource.badge })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold mb-2 text-white", children: resource.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-300 mb-4", children: resource.description }),
              /* @__PURE__ */ jsx(Button, { asChild: true, className: cn(
                "w-full bg-gradient-to-r text-white text-sm",
                resource.color
              ), children: /* @__PURE__ */ jsxs(Link, { to: resource.title === "Master-Checkliste" ? "/dsgvo/dokumentation/vorlagen" : resource.title === "Dokumenten-Tracker" ? "/tools/compliance-score" : resource.title === "Audit-Protokoll" ? "/dsgvo/dokumentation" : "/contact", children: [
                resource.action,
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] }) })
          },
          index
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-slate-700 text-slate-300 hover:bg-slate-800", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/krisenmanagement/security-incident", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        "Security Incident Guide"
      ] }) }),
      /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-gradient-to-r from-yellow-500 to-orange-500 text-white", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/krisenmanagement/media-crisis", children: [
        "Media Crisis Management",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  ComplianceAuditEmergencyGuide as default
};
