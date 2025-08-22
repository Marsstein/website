import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { Shield, Download, Users, Star, TrendingUp, CheckSquare, BarChart3, AlertTriangle, Cookie, Target, Settings, Brain, Award, Eye, Lock, Database, Layers, ChevronRight, ArrowRight, Zap, FileText, Clock } from "lucide-react";
import { c as cn } from "../main.mjs";
import { H as Header } from "./Header-DH34VBbs.js";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-dropdown-menu";
const Resources = () => {
  const assessmentCategories = [
    {
      id: "dsgvo",
      title: "DSGVO & Datenschutz",
      subtitle: "Europäische Datenschutz-Grundverordnung",
      description: "Umfassende Assessments für DSGVO-Compliance und Datenschutz-Management",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      assessments: [
        {
          id: "dsgvo-compliance-checklist",
          icon: CheckSquare,
          title: "DSGVO-Compliance-Checkliste 2025",
          description: "47-Punkte Selbstaudit für vollständige DSGVO-Konformität",
          features: ["47 Prüfpunkte", "Sofort-Bewertung", "Handlungsempfehlungen", "Excel & PDF"]
        },
        {
          id: "datenschutz-readiness-assessment",
          icon: BarChart3,
          title: "Datenschutz-Readiness-Assessment",
          description: "Interaktiver Score mit personalisierten Empfehlungen",
          features: ["Interaktiver Test", "Sofort-Score", "Roadmap-Erstellung", "Benchmarking"]
        },
        {
          id: "breach-response-checklist",
          icon: AlertTriangle,
          title: "Breach-Response-Checklist",
          description: "72h-Notfallplan bei Datenpannen und Sicherheitsvorfällen",
          features: ["72h-Timeline", "Meldepflichten", "Kommunikation", "Dokumentation"]
        },
        {
          id: "cookie-compliance-audit",
          icon: Cookie,
          title: "Cookie-Compliance-Audit",
          description: "Website-Prüfliste für rechtskonforme Cookie-Nutzung",
          features: ["Cookie-Scanner", "Consent-Check", "Banner-Optimierung", "Rechtssicherheit"]
        }
      ]
    },
    {
      id: "ai-act",
      title: "EU AI Act",
      subtitle: "Europäische KI-Verordnung",
      description: "Spezialisierte Assessments für KI-Systeme und AI Act Compliance",
      icon: Brain,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      assessments: [
        {
          id: "ai-risk-assessment",
          icon: Target,
          title: "AI Risk Assessment",
          description: "Klassifizierung Ihrer KI-Systeme nach EU AI Act Risikoebenen",
          features: ["Risikoklassifizierung", "Compliance-Check", "Mitigation-Plan", "Dokumentation"]
        },
        {
          id: "algorithmic-impact-assessment",
          icon: BarChart3,
          title: "Algorithmic Impact Assessment",
          description: "Bewertung gesellschaftlicher Auswirkungen Ihrer KI-Algorithmen",
          features: ["Impact-Analyse", "Bias-Detection", "Fairness-Metrics", "Reporting"]
        },
        {
          id: "ai-governance-check",
          icon: Settings,
          title: "AI Governance Check",
          description: "Überprüfung Ihrer AI Governance-Strukturen und -Prozesse",
          features: ["Governance-Framework", "Verantwortlichkeiten", "Kontrollmechanismen", "Audit-Trail"]
        }
      ]
    },
    {
      id: "iso27001",
      title: "ISO 27001",
      subtitle: "Informationssicherheits-Management",
      description: "Assessments für ISO 27001 Zertifizierung und Informationssicherheit",
      icon: Lock,
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800",
      assessments: [
        {
          id: "iso27001-readiness-check",
          icon: CheckSquare,
          title: "ISO 27001 Readiness Check",
          description: "Bewertung Ihrer Bereitschaft für ISO 27001 Zertifizierung",
          features: ["Gap-Analyse", "Roadmap", "Control-Assessment", "Zeitplanung"]
        },
        {
          id: "isms-maturity-assessment",
          icon: Award,
          title: "ISMS Maturity Assessment",
          description: "Reifegrad-Bewertung Ihres Informationssicherheits-Management-Systems",
          features: ["Maturity-Level", "Verbesserungspotentiale", "Benchmarking", "Action-Plan"]
        },
        {
          id: "security-controls-audit",
          icon: Eye,
          title: "Security Controls Audit",
          description: "Systematische Überprüfung aller ISO 27001 Sicherheitskontrollen",
          features: ["140+ Controls", "Compliance-Status", "Schwachstellen", "Remediation"]
        }
      ]
    },
    {
      id: "other-frameworks",
      title: "Weitere Frameworks",
      subtitle: "SOC2, NIS2, TISAX & mehr",
      description: "Assessments für zusätzliche Compliance-Frameworks und Zertifizierungen",
      icon: Layers,
      color: "from-amber-500 to-orange-500",
      bgColor: "bg-amber-50 dark:bg-amber-950/20",
      borderColor: "border-amber-200 dark:border-amber-800",
      assessments: [
        {
          id: "soc2-readiness-assessment",
          icon: Database,
          title: "SOC 2 Readiness Assessment",
          description: "Vorbereitung auf SOC 2 Type I/II Audits",
          features: ["Trust Services", "Control-Design", "Evidence-Collection", "Audit-Prep"]
        },
        {
          id: "nis2-compliance-check",
          icon: Shield,
          title: "NIS2 Compliance Check",
          description: "Bewertung für NIS2-Richtlinie Cybersicherheit",
          features: ["Scope-Assessment", "Risk-Management", "Incident-Response", "Reporting"]
        },
        {
          id: "vendor-assessment-template",
          icon: Users,
          title: "Vendor Assessment Template",
          description: "Bewertung und Auswahl DSGVO-konformer Auftragsverarbeiter",
          features: ["Bewertungsmatrix", "Vertragsprüfung", "Risk-Assessment", "Monitoring-Plan"]
        }
      ]
    }
  ];
  const stats = [
    { label: "Assessment-Tools", value: "15", icon: Download },
    { label: "Kategorien", value: "4", icon: Users },
    { label: "Frameworks", value: "8+", icon: Star },
    { label: "Updates", value: "2025", icon: TrendingUp }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("section", { className: "pt-24 pb-16 relative overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-transparent to-purple-500/10 rounded-full blur-3xl" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 mb-6 animate-fade-in", children: [
          /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Assessment-Center" })
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 animate-slide-up", style: { animationDelay: "0.1s" }, children: [
          "Assessment-Tools für",
          /* @__PURE__ */ jsx("br", {}),
          /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-brand-red via-red-600 to-orange-500 bg-clip-text text-transparent", children: "professionelle Compliance" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 animate-slide-up", style: { animationDelay: "0.2s" }, children: "Umfassende Assessment-Tools für alle wichtigen Compliance-Frameworks. Kategorisiert nach DSGVO, EU AI Act, ISO 27001 und weiteren Standards." }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 animate-fade-in", style: { animationDelay: "0.3s" }, children: stats.map((stat, index) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 rounded-full bg-gray-100 dark:bg-gray-800 mb-2", children: /* @__PURE__ */ jsx(stat.icon, { className: "h-6 w-6 text-brand-red" }) }),
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: stat.value }),
          /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: stat.label })
        ] }, index)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4", children: "Assessment-Tools nach Kategorien" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Spezialisierte Assessment-Tools für jeden Compliance-Bereich. Von DSGVO über EU AI Act bis ISO 27001 - alle wichtigen Frameworks abgedeckt." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "space-y-16", children: assessmentCategories.map((category, categoryIndex) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: cn(
          "flex items-center gap-4 mb-8 p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg",
          category.bgColor,
          category.borderColor
        ), children: [
          /* @__PURE__ */ jsx("div", { className: cn(
            "p-4 rounded-xl bg-gradient-to-r shadow-lg",
            category.color
          ), children: /* @__PURE__ */ jsx(category.icon, { className: "h-8 w-8 text-white" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-1", children: category.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-gray-600 dark:text-gray-400 mb-2", children: category.subtitle }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-300", children: category.description })
          ] }),
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-6 w-6 text-gray-400" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-8", children: category.assessments.map((assessment, assessmentIndex) => /* @__PURE__ */ jsx(
          Card,
          {
            className: "group relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 border border-gray-200 dark:border-gray-700",
            children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-4", children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "p-3 rounded-lg bg-gradient-to-r shadow-md",
                  category.color
                ), children: /* @__PURE__ */ jsx(assessment.icon, { className: "h-5 w-5 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-brand-red transition-colors", children: assessment.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 leading-relaxed", children: assessment.description })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-2 mb-6", children: assessment.features.map((feature, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "w-1.5 h-1.5 rounded-full bg-gradient-to-r",
                  category.color
                ) }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-gray-600 dark:text-gray-400", children: feature })
              ] }, i)) }),
              /* @__PURE__ */ jsx(Link, { to: `/assessment-center/${assessment.id}`, children: /* @__PURE__ */ jsxs(
                Button,
                {
                  className: cn(
                    "w-full bg-gradient-to-r text-white shadow-md hover:shadow-lg transition-all duration-300",
                    category.color
                  ),
                  size: "sm",
                  children: [
                    /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
                    "Assessment starten",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" })
                  ]
                }
              ) })
            ] })
          },
          assessment.id
        )) })
      ] }, category.id)) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-20 relative", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(Card, { className: "relative overflow-hidden bg-gradient-to-r from-brand-red/5 via-orange-500/5 to-red-600/5 border-2 border-brand-red/20", children: [
      /* @__PURE__ */ jsxs(CardContent, { className: "p-12 text-center relative z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-flex p-4 rounded-full bg-brand-red/10 mb-6", children: /* @__PURE__ */ jsx(Zap, { className: "h-8 w-8 text-brand-red" }) }),
        /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Benötigen Sie maßgeschneiderte Assessments?" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto", children: "Unsere Compliance-Experten entwickeln individuelle Assessment-Tools speziell für Ihre Branche und Compliance-Anforderungen." }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true", children: /* @__PURE__ */ jsxs(
            Button,
            {
              size: "lg",
              className: "bg-brand-red hover:bg-brand-red/90 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group",
              children: [
                /* @__PURE__ */ jsx(FileText, { className: "mr-2 h-5 w-5" }),
                "Individuelles Assessment anfragen",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx(Link, { to: "/demo", children: /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "lg",
              className: "border-2 border-gray-300 dark:border-gray-600 hover:border-brand-red hover:text-brand-red transition-all duration-300",
              children: [
                /* @__PURE__ */ jsx(Clock, { className: "mr-2 h-5 w-5" }),
                "Live-Demo ansehen"
              ]
            }
          ) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-red/20 to-orange-500/20 rounded-full blur-2xl opacity-60" }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-br from-red-600/20 to-brand-red/20 rounded-full blur-xl opacity-40" })
    ] }) }) }) })
  ] });
};
export {
  Resources
};
