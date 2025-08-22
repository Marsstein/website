import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { Rocket, TrendingUp, Download, ChevronDown, Activity, AlertTriangle, RefreshCw, Users, BarChart3, Clock, CheckCircle2, Circle, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
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
const BusinessContinuityGuide = () => {
  const [currentPhase, setCurrentPhase] = useState(0);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [isTocOpen, setIsTocOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const currentUrl = "https://marsstein.com/wissen/krisenmanagement/business-continuity";
  const continuityPhases = [
    {
      id: 0,
      title: "Crisis Impact Assessment",
      timeframe: "0-4 Stunden",
      priority: "KRITISCH",
      icon: AlertTriangle,
      color: "from-red-500 to-orange-500",
      description: "Bewertung der Auswirkungen der Compliance-Krise auf Geschäftsprozesse",
      assessmentAreas: [
        "Kritische Geschäftsprozesse identifizieren",
        "Abhängigkeiten und Risiken bewerten",
        "Compliance-Ausfälle kategorisieren",
        "Zeitkritische Entscheidungen treffen",
        "Stakeholder-Prioritäten festlegen"
      ],
      impactMatrix: [
        { process: "Kundenservice", impact: "HOCH", mitigation: "Alternative Kanäle" },
        { process: "Datenverarbeitung", impact: "KRITISCH", mitigation: "Manual Backup" },
        { process: "Zahlungsabwicklung", impact: "KRITISCH", mitigation: "Notfall-Provider" },
        { process: "Reporting", impact: "MITTEL", mitigation: "Verzögerung akzeptabel" }
      ]
    },
    {
      id: 1,
      title: "Alternative Process Activation",
      timeframe: "2-12 Stunden",
      priority: "KRITISCH",
      icon: RefreshCw,
      color: "from-orange-500 to-red-500",
      description: "Aktivierung alternativer Prozesse und Notfallsysteme",
      alternativeStrategies: [
        "Manual Workarounds implementieren",
        "Backup-Systeme aktivieren",
        "Notfall-Dienstleister einschalten",
        "Prozess-Vereinfachungen umsetzen",
        "Temporäre Lösungen etablieren"
      ],
      activationSteps: [
        "Backup-Systeme Status prüfen",
        "Notfall-Zugänge aktivieren",
        "Teams über Prozessänderungen informieren",
        "Monitoring für alternative Prozesse",
        "Performance-Tracking etablieren"
      ]
    },
    {
      id: 2,
      title: "Stakeholder Communication & Management",
      timeframe: "Ongoing",
      priority: "HOCH",
      icon: Users,
      color: "from-yellow-500 to-orange-500",
      description: "Kontinuierliche Kommunikation mit allen Stakeholder-Gruppen",
      stakeholderGroups: [
        {
          group: "Kunden",
          frequency: "Stündlich",
          channels: ["Email", "Website", "Support"],
          messaging: "Service-Updates, Alternative, ETA"
        },
        {
          group: "Mitarbeiter",
          frequency: "Alle 4h",
          channels: ["Intranet", "Meetings", "Slack"],
          messaging: "Prozessänderungen, Prioritäten, Support"
        },
        {
          group: "Partner",
          frequency: "Täglich",
          channels: ["Direct Contact", "Portal"],
          messaging: "Impact, Workarounds, Timeline"
        },
        {
          group: "Regulatoren",
          frequency: "Nach Bedarf",
          channels: ["Official Channels"],
          messaging: "Compliance-Status, Maßnahmen"
        }
      ]
    },
    {
      id: 3,
      title: "Resource Reallocation & Scaling",
      timeframe: "6-48 Stunden",
      priority: "HOCH",
      icon: Users,
      color: "from-blue-500 to-indigo-500",
      description: "Umverteilung von Ressourcen für kritische Prozesse",
      resourceTypes: [
        {
          type: "Personal",
          actions: ["Cross-Training aktivieren", "Externe Unterstützung", "Prioritäten neu setzen"],
          timeline: "Sofort"
        },
        {
          type: "Technologie",
          actions: ["Cloud-Scaling", "Backup-Systeme", "Manual Tools"],
          timeline: "2-6h"
        },
        {
          type: "Finanzen",
          actions: ["Notfall-Budget", "Beschaffung beschleunigen", "Externe Services"],
          timeline: "4-12h"
        },
        {
          type: "Infrastruktur",
          actions: ["Alternative Standorte", "Remote-Arbeit", "Externe Kapazitäten"],
          timeline: "12-24h"
        }
      ]
    },
    {
      id: 4,
      title: "Performance Monitoring & Optimization",
      timeframe: "Ongoing",
      priority: "MITTEL",
      icon: BarChart3,
      color: "from-indigo-500 to-purple-500",
      description: "Überwachung und Optimierung der Notfall-Prozesse",
      monitoringMetrics: [
        {
          category: "Service Level",
          metrics: ["Response Time", "Availability", "Quality Score"],
          targets: ["<2x Normal", ">95%", ">80% Normal"],
          frequency: "Real-time"
        },
        {
          category: "Customer Impact",
          metrics: ["Satisfaction", "Complaints", "Churn Rate"],
          targets: [">3.5/5", "<2x Normal", "<5% Extra"],
          frequency: "Daily"
        },
        {
          category: "Operational",
          metrics: ["Cost", "Efficiency", "Error Rate"],
          targets: ["Budget+50%", ">60% Normal", "<10%"],
          frequency: "Daily"
        },
        {
          category: "Compliance",
          metrics: ["Regulatory Status", "Risk Level", "Audit Readiness"],
          targets: ["Green", "Medium", "Prepared"],
          frequency: "Weekly"
        }
      ]
    },
    {
      id: 5,
      title: "Recovery Planning & Implementation",
      timeframe: "1-4 Wochen",
      priority: "WICHTIG",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
      description: "Planung und Umsetzung der vollständigen Wiederherstellung",
      recoveryPhases: [
        {
          phase: "Stabilisierung",
          timeline: "Woche 1",
          focus: "Notfall-Prozesse optimieren",
          success: "Stabile Service-Level"
        },
        {
          phase: "Normalisierung",
          timeline: "Woche 2-3",
          focus: "Schrittweise Rückkehr zu Standard-Prozessen",
          success: "80% normale Kapazität"
        },
        {
          phase: "Verbesserung",
          timeline: "Woche 4+",
          focus: "Lessons Learned implementieren",
          success: "Resilience gestärkt"
        }
      ],
      successCriteria: [
        "Alle kritischen Services wiederhergestellt",
        "Compliance-Status vollständig",
        "Customer Satisfaction normalisiert",
        "Team-Moral und -Produktivität stabil",
        "Finanzielle Auswirkungen minimiert"
      ]
    }
  ];
  const businessProcesses = [
    { process: "Customer Onboarding", criticality: "HOCH", rto: "4h", backup: "Manual Processing" },
    { process: "Payment Processing", criticality: "KRITISCH", rto: "1h", backup: "Alternative PSP" },
    { process: "Data Analytics", criticality: "MITTEL", rto: "24h", backup: "Delayed Reporting" },
    { process: "Support Ticketing", criticality: "HOCH", rto: "2h", backup: "Email + Phone" },
    { process: "Compliance Reporting", criticality: "HOCH", rto: "8h", backup: "Manual Reports" }
  ];
  const riskCategories = [
    { risk: "Service Disruption", probability: "Hoch", impact: "Hoch", mitigation: "Redundancy" },
    { risk: "Data Loss", probability: "Mittel", impact: "Kritisch", mitigation: "Backups" },
    { risk: "Regulatory Fine", probability: "Hoch", impact: "Hoch", mitigation: "Legal Support" },
    { risk: "Customer Churn", probability: "Mittel", impact: "Hoch", mitigation: "Communication" }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Business Continuity in Compliance-Krisen – BCP Strategien" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Geschäftskontinuität während Compliance-Krisen sichern. Notfallpläne & Alternative Prozesse für Unternehmen. Jetzt Resilienz stärken!" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: currentUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "Business Continuity in Compliance-Krisen – BCP Strategien" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Geschäftskontinuität während Compliance-Krisen sichern. Notfallpläne & Alternative Prozesse für Unternehmen. Jetzt Resilienz stärken!" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: currentUrl }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Business Continuity Planning Guide",
        "description": "Geschäftskontinuität während Compliance-Krisen sicherstellen",
        "url": currentUrl,
        "publisher": {
          "@type": "Organization",
          "name": "MarsStein"
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": currentUrl
        }
      }) }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Wissen",
            "item": "https://marsstein.com/wissen"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Krisenmanagement",
            "item": "https://marsstein.com/wissen/krisenmanagement"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Business Continuity",
            "item": currentUrl
          }
        ]
      }) })
    ] }),
    /* @__PURE__ */ jsx("style", { children: `
        h2, h3, h4 { scroll-margin-top: 96px; }
        
        @media (max-width: 768px) {
          .toc-mobile-toggle {
            display: flex;
          }
          .toc-desktop {
            display: none;
          }
        }
        
        @media (min-width: 768px) {
          .toc-mobile-toggle {
            display: none;
          }
          .toc-desktop {
            display: block;
          }
        }
      ` }),
    /* @__PURE__ */ jsx(Header, {}),
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
                  className: "inline-flex items-center gap-3 px-6 py-3 bg-emerald-500/10 backdrop-blur-sm rounded-full mb-8 border border-emerald-500/20",
                  children: [
                    /* @__PURE__ */ jsx(Rocket, { className: "h-5 w-5 text-emerald-400" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-emerald-300", children: "Business Resilience" }),
                    /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5 text-green-400" })
                  ]
                }
              ),
              /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-8", children: /* @__PURE__ */ jsxs(
                motion.span,
                {
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                  transition: { delay: 0.4, duration: 0.8 },
                  className: "block",
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white", children: "Business Continuity" }),
                    /* @__PURE__ */ jsx("br", {}),
                    /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent", children: "in Compliance-Krisen" })
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
                    /* @__PURE__ */ jsx("span", { className: "font-semibold text-emerald-300", children: "Geschäftskontinuität" }),
                    " während Compliance-Krisen sicherstellen."
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
                    /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-8 py-4 text-lg font-semibold", children: [
                      /* @__PURE__ */ jsx(Rocket, { className: "mr-2 h-5 w-5" }),
                      "Continuity Plan starten"
                    ] }),
                    /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-emerald-500/30 hover:border-emerald-400 text-emerald-300 hover:bg-emerald-500/10 px-8 py-4 text-lg font-semibold backdrop-blur-sm", children: [
                      /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                      "BCP Templates"
                    ] })
                  ]
                }
              )
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsx("div", { className: "toc-mobile-toggle mb-6", children: /* @__PURE__ */ jsx(
        Button,
        {
          onClick: () => setIsTocOpen(!isTocOpen),
          variant: "outline",
          className: "w-full border-emerald-500/30 hover:border-emerald-400 text-emerald-300 hover:bg-emerald-500/10",
          children: /* @__PURE__ */ jsxs("span", { className: "flex items-center justify-center gap-2", children: [
            "Inhaltsverzeichnis",
            /* @__PURE__ */ jsx(ChevronDown, { className: cn("h-4 w-4 transition-transform", isTocOpen && "rotate-180") })
          ] })
        }
      ) }),
      /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", className: "toc-desktop bg-slate-800/60 rounded-xl p-6 mb-8 border border-slate-700/50", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-white mb-4", children: "Inhaltsverzeichnis" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-slate-300", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#kritische-prozesse", className: "hover:text-emerald-400 transition-colors", children: "1. Kritische Geschäftsprozesse" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#impact-assessment", className: "hover:text-emerald-400 transition-colors", children: "2. Crisis Impact Assessment" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#alternative-prozesse", className: "hover:text-emerald-400 transition-colors", children: "3. Alternative Prozesse" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#stakeholder-kommunikation", className: "hover:text-emerald-400 transition-colors", children: "4. Stakeholder Management" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#ressourcen-management", className: "hover:text-emerald-400 transition-colors", children: "5. Ressourcen-Reallokation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#monitoring", className: "hover:text-emerald-400 transition-colors", children: "6. Performance Monitoring" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#recovery", className: "hover:text-emerald-400 transition-colors", children: "7. Recovery Planning" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#risk-assessment", className: "hover:text-emerald-400 transition-colors", children: "8. Risk Assessment Matrix" }) })
        ] })
      ] }),
      isTocOpen && /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", className: "md:hidden bg-slate-800/60 rounded-xl p-6 mb-8 border border-slate-700/50", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-xl font-bold text-white mb-4", children: "Inhaltsverzeichnis" }),
        /* @__PURE__ */ jsxs("ol", { className: "space-y-2 text-slate-300", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#kritische-prozesse", className: "hover:text-emerald-400 transition-colors", onClick: () => setIsTocOpen(false), children: "1. Kritische Geschäftsprozesse" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#impact-assessment", className: "hover:text-emerald-400 transition-colors", onClick: () => setIsTocOpen(false), children: "2. Crisis Impact Assessment" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#alternative-prozesse", className: "hover:text-emerald-400 transition-colors", onClick: () => setIsTocOpen(false), children: "3. Alternative Prozesse" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#stakeholder-kommunikation", className: "hover:text-emerald-400 transition-colors", onClick: () => setIsTocOpen(false), children: "4. Stakeholder Management" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#ressourcen-management", className: "hover:text-emerald-400 transition-colors", onClick: () => setIsTocOpen(false), children: "5. Ressourcen-Reallokation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#monitoring", className: "hover:text-emerald-400 transition-colors", onClick: () => setIsTocOpen(false), children: "6. Performance Monitoring" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#recovery", className: "hover:text-emerald-400 transition-colors", onClick: () => setIsTocOpen(false), children: "7. Recovery Planning" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#risk-assessment", className: "hover:text-emerald-400 transition-colors", onClick: () => setIsTocOpen(false), children: "8. Risk Assessment Matrix" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { id: "kritische-prozesse", className: "py-8 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        className: "bg-gradient-to-r from-emerald-500/10 to-green-500/10 border-2 border-emerald-500/30 rounded-2xl p-8 backdrop-blur-sm",
        children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-2xl font-bold text-white mb-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Activity, { className: "h-6 w-6 text-emerald-400" }),
            "Kritische Geschäftsprozesse"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full", children: [
            /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-700", children: [
              /* @__PURE__ */ jsx("th", { className: "text-left text-slate-300 pb-3", children: "Prozess" }),
              /* @__PURE__ */ jsx("th", { className: "text-left text-slate-300 pb-3", children: "Kritikalität" }),
              /* @__PURE__ */ jsx("th", { className: "text-left text-slate-300 pb-3", children: "RTO" }),
              /* @__PURE__ */ jsx("th", { className: "text-left text-slate-300 pb-3", children: "Backup-Lösung" })
            ] }) }),
            /* @__PURE__ */ jsx("tbody", { children: businessProcesses.map((process, index) => /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-800", children: [
              /* @__PURE__ */ jsx("td", { className: "py-3 text-white font-semibold", children: process.process }),
              /* @__PURE__ */ jsx("td", { className: "py-3", children: /* @__PURE__ */ jsx(Badge, { className: cn(
                "text-xs",
                process.criticality === "KRITISCH" ? "bg-red-500/20 text-red-300 border-red-500/30" : process.criticality === "HOCH" ? "bg-orange-500/20 text-orange-300 border-orange-500/30" : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
              ), children: process.criticality }) }),
              /* @__PURE__ */ jsx("td", { className: "py-3 text-slate-300", children: process.rto }),
              /* @__PURE__ */ jsx("td", { className: "py-3 text-slate-400", children: process.backup })
            ] }, index)) })
          ] }) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsx("div", { className: "space-y-8", children: continuityPhases.map((phase, index) => /* @__PURE__ */ jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { delay: index * 0.1, duration: 0.6 },
        children: /* @__PURE__ */ jsx(Card, { className: "border-2 border-slate-700/50 bg-slate-800/80 transition-all duration-500 hover:shadow-2xl overflow-hidden", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
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
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                /* @__PURE__ */ jsx("h3", { id: phase.id === 0 ? "impact-assessment" : phase.id === 1 ? "alternative-prozesse" : phase.id === 2 ? "stakeholder-kommunikation" : phase.id === 3 ? "ressourcen-management" : phase.id === 4 ? "monitoring" : "recovery", className: "text-2xl font-bold text-white", children: phase.title }),
                /* @__PURE__ */ jsx(Badge, { className: cn(
                  phase.priority === "KRITISCH" ? "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 animate-pulse" : phase.priority === "HOCH" ? "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100" : phase.priority === "MITTEL" ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100" : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                ), children: phase.priority })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-2", children: phase.description }),
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 text-sm text-slate-400", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
                phase.timeframe
              ] }) })
            ] })
          ] }),
          phase.assessmentAreas && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Assessment Bereiche" }),
            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3", children: phase.assessmentAreas.map((area, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-slate-700/50 rounded-xl", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-5 h-5 text-emerald-400 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: area === "Compliance-Ausfälle kategorisieren" ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement/compliance-audit-emergency", className: "text-emerald-400 hover:text-emerald-300 underline", children: "Compliance-Ausfälle" }),
                " kategorisieren"
              ] }) : area })
            ] }, idx)) })
          ] }),
          phase.impactMatrix && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Impact Matrix" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: phase.impactMatrix.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-4 bg-slate-700/50 rounded-xl", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-white", children: item.process === "Datenverarbeitung" ? /* @__PURE__ */ jsx(Link, { to: "/wissen/verschluesselung", className: "text-white hover:text-emerald-300 underline", children: "Datenverarbeitung" }) : item.process }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-400", children: [
                  "Mitigation: ",
                  item.mitigation
                ] })
              ] }),
              /* @__PURE__ */ jsx(Badge, { className: cn(
                "text-xs",
                item.impact === "KRITISCH" ? "bg-red-500/20 text-red-300 border-red-500/30" : item.impact === "HOCH" ? "bg-orange-500/20 text-orange-300 border-orange-500/30" : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
              ), children: item.impact })
            ] }, idx)) })
          ] }),
          phase.stakeholderGroups && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Stakeholder Kommunikation" }),
            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: phase.stakeholderGroups.map((stakeholder, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
              /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white mb-2", children: stakeholder.group === "Mitarbeiter" ? /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/datenschutz-betriebsrat", className: "text-white hover:text-emerald-300 underline", children: "Mitarbeiter" }) : stakeholder.group }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-1 text-sm", children: [
                /* @__PURE__ */ jsxs("p", { className: "text-slate-300", children: [
                  "Frequenz: ",
                  stakeholder.frequency
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-slate-300", children: [
                  "Kanäle: ",
                  stakeholder.channels.join(", ")
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-400", children: stakeholder.messaging })
              ] })
            ] }, idx)) })
          ] }),
          phase.resourceTypes && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Ressourcen-Reallokation" }),
            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: phase.resourceTypes.map((resource, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white", children: resource.type }),
                /* @__PURE__ */ jsx(Badge, { className: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs", children: resource.timeline })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2", children: resource.actions.map((action, actionIdx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Circle, { className: "h-3 w-3 text-emerald-400" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-slate-300", children: action })
              ] }, actionIdx)) })
            ] }, idx)) })
          ] }),
          phase.monitoringMetrics && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Monitoring Metriken" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-4", children: phase.monitoringMetrics.map((metric, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white", children: metric.category }),
                /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30 text-xs", children: metric.frequency })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4 text-sm", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-1", children: "Metriken:" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-1", children: metric.metrics.map((m, mIdx) => /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: m }, mIdx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-1", children: "Ziele:" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-1", children: metric.targets.map((t, tIdx) => /* @__PURE__ */ jsx("p", { className: "text-emerald-300", children: t }, tIdx)) })
                ] })
              ] })
            ] }, idx)) })
          ] }),
          phase.recoveryPhases && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Recovery Phasen" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: phase.recoveryPhases.map((recovery, idx) => /* @__PURE__ */ jsxs("div", { className: "bg-slate-700/50 rounded-xl p-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsx("h5", { className: "font-semibold text-white", children: recovery.phase }),
                /* @__PURE__ */ jsx(Badge, { className: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30 text-xs", children: recovery.timeline })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 text-sm", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-slate-400", children: "Focus:" }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: recovery.focus })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-slate-400", children: "Success:" }),
                  /* @__PURE__ */ jsx("p", { className: "text-emerald-300", children: recovery.success })
                ] })
              ] })
            ] }, idx)) })
          ] })
        ] }) })
      },
      phase.id
    )) }) }) }),
    /* @__PURE__ */ jsx("section", { id: "risk-assessment", className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 bg-clip-text text-transparent", children: "Risk Assessment Matrix" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300", children: "Bewertung und Mitigation kritischer Geschäftsrisiken" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid lg:grid-cols-2 gap-8", children: riskCategories.map((risk, index) => /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1 },
          className: "bg-slate-800/60 rounded-xl p-6 border border-slate-700/50",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: risk.risk === "Data Loss" ? /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement/vendor-data-breach", className: "text-white hover:text-emerald-300 underline", children: "Data Loss" }) : risk.risk === "Regulatory Fine" ? /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement/gdpr-fine-response", className: "text-white hover:text-emerald-300 underline", children: "Regulatory Fine" }) : risk.risk }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-1", children: "Wahrscheinlichkeit:" }),
                /* @__PURE__ */ jsx(Badge, { className: cn(
                  "text-xs",
                  risk.probability === "Hoch" ? "bg-red-500/20 text-red-300 border-red-500/30" : "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                ), children: risk.probability })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-1", children: "Impact:" }),
                /* @__PURE__ */ jsx(Badge, { className: cn(
                  "text-xs",
                  risk.impact === "Kritisch" ? "bg-red-500/20 text-red-300 border-red-500/30" : "bg-orange-500/20 text-orange-300 border-orange-500/30"
                ), children: risk.impact })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "text-slate-400 mb-1", children: "Mitigation:" }),
                /* @__PURE__ */ jsx("p", { className: "text-emerald-300", children: risk.mitigation })
              ] })
            ] })
          ]
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-slate-700 text-slate-300 hover:bg-slate-800", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/krisenmanagement/gdpr-fine-response", children: [
        /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "GDPR Fine Response" }),
        /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Zurück" })
      ] }) }),
      /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-gradient-to-r from-emerald-500 to-green-500 text-white", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/krisenmanagement", children: [
        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Zurück zur Übersicht" }),
        /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: "Weiter" }),
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  BusinessContinuityGuide as default
};
