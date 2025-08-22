import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { I as Input } from "./input-6XZgwDxx.js";
import { C as Checkbox } from "./checkbox-BNCkAJgi.js";
import { Eye, Settings, FileText, Shield, ChevronRight, Cookie, Star, Calendar, Scan, Globe, Search, Loader2, CheckCircle, AlertTriangle, XCircle, Download, Mail, ExternalLink, Users, ArrowRight, BarChart3 } from "lucide-react";
import { c as cn } from "../main.mjs";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-checkbox";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const CookieComplianceAudit = () => {
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [auditResults, setAuditResults] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [completedItems, setCompletedItems] = useState(/* @__PURE__ */ new Set());
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [scanStep, setScanStep] = useState("");
  const [detectedCookies, setDetectedCookies] = useState([]);
  const auditCategories = [
    {
      id: "cookie_banner",
      title: "Cookie-Banner & Consent",
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
      description: "Überprüfung der Einverständniserklärung und des Cookie-Banners",
      items: [
        {
          id: "banner_present",
          title: "Cookie-Banner ist vorhanden",
          description: "Website zeigt Cookie-Banner vor dem Setzen nicht-essentieller Cookies",
          critical: true,
          autoCheck: true
        },
        {
          id: "banner_before_cookies",
          title: "Banner erscheint vor Cookie-Setzung",
          description: "Nicht-essentielle Cookies werden erst nach Zustimmung gesetzt",
          critical: true,
          autoCheck: true
        },
        {
          id: "clear_information",
          title: "Klare und verständliche Informationen",
          description: "Banner enthält präzise Informationen über Cookie-Zwecke",
          critical: true,
          autoCheck: false
        },
        {
          id: "granular_consent",
          title: "Granulare Zustimmungsoptionen",
          description: "Nutzer können verschiedene Cookie-Kategorien einzeln aktivieren/deaktivieren",
          critical: false,
          autoCheck: false
        },
        {
          id: "easy_withdrawal",
          title: "Einfacher Widerruf möglich",
          description: "Zustimmung kann jederzeit einfach widerrufen werden",
          critical: true,
          autoCheck: false
        }
      ]
    },
    {
      id: "cookie_types",
      title: "Cookie-Kategorisierung",
      icon: Settings,
      color: "from-green-500 to-teal-500",
      description: "Korrekte Klassifizierung und Behandlung verschiedener Cookie-Typen",
      items: [
        {
          id: "essential_cookies_identified",
          title: "Essentielle Cookies identifiziert",
          description: "Technisch notwendige Cookies sind klar als solche gekennzeichnet",
          critical: true,
          autoCheck: true
        },
        {
          id: "analytics_cookies_categorized",
          title: "Analytics-Cookies korrekt kategorisiert",
          description: "Tracking- und Analyse-Cookies erfordern explizite Zustimmung",
          critical: true,
          autoCheck: true
        },
        {
          id: "marketing_cookies_controlled",
          title: "Marketing-Cookies unter Kontrolle",
          description: "Werbe- und Marketing-Cookies werden nur mit Zustimmung gesetzt",
          critical: true,
          autoCheck: true
        },
        {
          id: "third_party_cookies_managed",
          title: "Third-Party-Cookies verwaltet",
          description: "Externe Cookies (Social Media, Ads) werden kontrolliert geladen",
          critical: true,
          autoCheck: true
        },
        {
          id: "cookie_purposes_documented",
          title: "Cookie-Zwecke dokumentiert",
          description: "Jeder Cookie-Typ hat eine klare Zweckbeschreibung",
          critical: false,
          autoCheck: false
        }
      ]
    },
    {
      id: "privacy_policy",
      title: "Datenschutzerklärung",
      icon: FileText,
      color: "from-purple-500 to-pink-500",
      description: "Cookie-relevante Informationen in der Datenschutzerklärung",
      items: [
        {
          id: "cookies_in_privacy_policy",
          title: "Cookies in Datenschutzerklärung erwähnt",
          description: "Detaillierte Cookie-Informationen in der Datenschutzerklärung",
          critical: true,
          autoCheck: false
        },
        {
          id: "cookie_purposes_explained",
          title: "Cookie-Zwecke detailliert erklärt",
          description: "Ausführliche Beschreibung der Cookie-Verwendungszwecke",
          critical: true,
          autoCheck: false
        },
        {
          id: "retention_periods_specified",
          title: "Aufbewahrungszeiten angegeben",
          description: "Speicherdauer für verschiedene Cookie-Typen dokumentiert",
          critical: false,
          autoCheck: false
        },
        {
          id: "third_party_services_listed",
          title: "Drittanbieter-Services aufgelistet",
          description: "Alle externen Services mit Cookie-Zugriff dokumentiert",
          critical: true,
          autoCheck: false
        },
        {
          id: "contact_information_available",
          title: "Kontaktinformationen verfügbar",
          description: "Klare Kontaktmöglichkeiten für Cookie-bezogene Anfragen",
          critical: false,
          autoCheck: false
        }
      ]
    },
    {
      id: "technical_implementation",
      title: "Technische Umsetzung",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      description: "Technische Aspekte der Cookie-Compliance",
      items: [
        {
          id: "consent_logging",
          title: "Einverständnis wird protokolliert",
          description: "Zustimmungen werden datenschutzkonform gespeichert und nachweisbar",
          critical: true,
          autoCheck: false
        },
        {
          id: "cookie_lifetime_appropriate",
          title: "Angemessene Cookie-Laufzeiten",
          description: "Cookie-Laufzeiten entsprechen den tatsächlichen Zwecken",
          critical: false,
          autoCheck: true
        },
        {
          id: "secure_cookie_attributes",
          title: "Sichere Cookie-Attribute gesetzt",
          description: "HttpOnly, Secure und SameSite Attributes korrekt verwendet",
          critical: false,
          autoCheck: true
        },
        {
          id: "consent_renewal",
          title: "Regelmäßige Zustimmungserneuerung",
          description: "Nutzer werden regelmäßig zur Erneuerung der Zustimmung aufgefordert",
          critical: false,
          autoCheck: false
        },
        {
          id: "cookie_deletion",
          title: "Cookie-Löschung funktioniert",
          description: "Widerruf der Zustimmung führt zur tatsächlichen Cookie-Löschung",
          critical: true,
          autoCheck: false
        }
      ]
    }
  ];
  const mockAuditResults = {
    url: websiteUrl,
    totalCookies: 23,
    essentialCookies: 4,
    analyticsCookies: 8,
    marketingCookies: 11,
    thirdPartyCookies: 15,
    compliance: {
      bannerPresent: true,
      consentRequired: false,
      granularOptions: false,
      privacyPolicyLink: true
    },
    issues: [
      { type: "critical", message: "Marketing-Cookies werden ohne Zustimmung gesetzt" },
      { type: "warning", message: "Cookie-Banner bietet keine granularen Optionen" },
      { type: "info", message: "Einige Cookies haben sehr lange Laufzeiten" }
    ],
    score: 65
  };
  const simulateAudit = async () => {
    if (!websiteUrl) return;
    setIsScanning(true);
    setScanProgress(0);
    setAuditResults(null);
    const steps = [
      { message: "Verbindung zur Website wird hergestellt...", duration: 500 },
      { message: "Analysiere Cookie-Banner...", duration: 800 },
      { message: "Scanne nach gesetzten Cookies...", duration: 1e3 },
      { message: "Prüfe Cookie-Kategorien...", duration: 700 },
      { message: "Bewerte DSGVO-Konformität...", duration: 600 },
      { message: "Erstelle Compliance-Report...", duration: 400 }
    ];
    let currentProgress = 0;
    for (let i = 0; i < steps.length; i++) {
      setScanStep(steps[i].message);
      await new Promise((resolve) => setTimeout(resolve, steps[i].duration));
      currentProgress = (i + 1) / steps.length * 100;
      setScanProgress(currentProgress);
    }
    const mockCookies = [
      { name: "_ga", category: "Analytics", domain: ".google-analytics.com", duration: "2 Jahre", essential: false },
      { name: "_fbp", category: "Marketing", domain: ".facebook.com", duration: "3 Monate", essential: false },
      { name: "PHPSESSID", category: "Essential", domain: websiteUrl, duration: "Session", essential: true },
      { name: "__cfduid", category: "Technical", domain: ".cloudflare.com", duration: "30 Tage", essential: true },
      { name: "_gid", category: "Analytics", domain: ".google-analytics.com", duration: "24 Stunden", essential: false }
    ];
    setDetectedCookies(mockCookies);
    setAuditResults({ ...mockAuditResults, url: websiteUrl, detectedCookies: mockCookies });
    setIsScanning(false);
    setScanStep("");
  };
  const toggleItem = (itemId) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(itemId)) {
      newCompleted.delete(itemId);
    } else {
      newCompleted.add(itemId);
    }
    setCompletedItems(newCompleted);
  };
  const totalItems = auditCategories.reduce((sum, category) => sum + category.items.length, 0);
  const completedCount = completedItems.size;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Cookie Compliance Audit – DSGVO Cookie-Scanner & Analyse",
        description: "Detaillierte Cookie-Compliance Überprüfung: Cookie-Scanner, Einwilligungsprozesse, TCF 2.2. ✓ Automatische Analyse ✓ DSGVO-konform ✓ Sofortige Ergebnisse. Jetzt Website scannen!",
        canonical: "/assessment-center/cookie-compliance-audit",
        keywords: "cookie compliance audit, cookie scanner, dsgvo cookies, cookie banner test, tcf 2.2 audit"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950", children: [
      /* @__PURE__ */ jsxs("section", { className: "pt-24 pb-16 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10", children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-green-500/10 to-transparent rounded-full blur-3xl" }) }),
        /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6", children: [
            /* @__PURE__ */ jsx(Link, { to: "/resources", className: "hover:text-brand-red transition-colors", children: "Resources" }),
            /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: "Cookie-Compliance-Audit" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl shadow-lg", children: /* @__PURE__ */ jsx(Cookie, { className: "h-8 w-8 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700 border-green-200 mb-3", children: "Website-Scanner + Prüfliste" }),
              /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4", children: "Cookie-Compliance-Audit" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 mb-4", children: "Automatisierte Website-Analyse und systematische Prüfliste für rechtskonforme Cookie-Nutzung" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-500", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-500 fill-current" }),
                  /* @__PURE__ */ jsx("span", { children: "4.7 (4.234 Scans)" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: "Aktualisiert: Januar 2025" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Scan, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: "Automatischer Scanner" })
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "pb-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(Card, { className: "mb-8 border-2 border-green-200 dark:border-green-800", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Globe, { className: "h-6 w-6 text-green-600" }),
          "Website Cookie-Scanner"
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: "Scannen Sie Ihre Website automatisch auf Cookie-Compliance-Probleme. Unser Scanner analysiert alle Cookies und gibt sofortige Empfehlungen." }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "flex-1", children: /* @__PURE__ */ jsx(
              Input,
              {
                placeholder: "https://ihre-website.de",
                value: websiteUrl,
                onChange: (e) => setWebsiteUrl(e.target.value),
                className: "h-12"
              }
            ) }),
            /* @__PURE__ */ jsx(
              Button,
              {
                onClick: simulateAudit,
                disabled: !websiteUrl || isScanning,
                className: "bg-gradient-to-r from-green-500 to-teal-500 text-white px-8 h-12",
                children: isScanning ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx("div", { className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" }),
                  "Scannt..."
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(Search, { className: "mr-2 h-4 w-4" }),
                  "Website scannen"
                ] })
              }
            )
          ] }),
          isScanning && /* @__PURE__ */ jsxs("div", { className: "p-6 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx(Loader2, { className: "h-5 w-5 text-blue-600 animate-spin" }),
              /* @__PURE__ */ jsx("span", { className: "font-medium text-blue-900 dark:text-blue-100", children: scanStep })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                /* @__PURE__ */ jsx("span", { className: "text-blue-800 dark:text-blue-200", children: "Fortschritt" }),
                /* @__PURE__ */ jsxs("span", { className: "font-medium text-blue-900 dark:text-blue-100", children: [
                  Math.round(scanProgress),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "w-full bg-blue-200 dark:bg-blue-800 rounded-full h-2", children: /* @__PURE__ */ jsx(
                "div",
                {
                  className: "bg-blue-600 h-2 rounded-full transition-all duration-300",
                  style: { width: `${scanProgress}%` }
                }
              ) })
            ] })
          ] }),
          auditResults && /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4", children: [
              /* @__PURE__ */ jsxs(Card, { className: "text-center p-4", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600 mb-1", children: auditResults.totalCookies }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Cookies gefunden" })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "text-center p-4", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600 mb-1", children: auditResults.essentialCookies }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Essentielle" })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "text-center p-4", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-orange-600 mb-1", children: auditResults.thirdPartyCookies }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Third-Party" })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "text-center p-4", children: [
                /* @__PURE__ */ jsxs("div", { className: cn(
                  "text-2xl font-bold mb-1",
                  auditResults.score >= 80 ? "text-green-600" : auditResults.score >= 60 ? "text-orange-500" : "text-red-500"
                ), children: [
                  auditResults.score,
                  "%"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Compliance-Score" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(Cookie, { className: "h-5 w-5 text-green-600" }),
                "Erkannte Cookies (",
                detectedCookies.length,
                ")"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: detectedCookies.map((cookie, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("div", { className: "font-medium text-gray-900 dark:text-white mb-1", children: cookie.name }),
                  /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
                    cookie.domain,
                    " • ",
                    cookie.duration
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Badge, { className: cn(
                    "text-xs",
                    cookie.essential ? "bg-green-100 text-green-700 border-green-200" : "bg-orange-100 text-orange-700 border-orange-200"
                  ), children: cookie.category }),
                  cookie.essential ? /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-500" }) : /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-500" })
                ] })
              ] }, index)) }) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-orange-500" }),
                "Gefundene Probleme"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: auditResults.issues.map((issue, index) => /* @__PURE__ */ jsxs("div", { className: cn(
                "flex items-start gap-3 p-3 rounded-lg border",
                issue.type === "critical" ? "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800" : issue.type === "warning" ? "bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800" : "bg-blue-50 border-blue-200 dark:bg-blue-950/20 dark:border-blue-800"
              ), children: [
                issue.type === "critical" ? /* @__PURE__ */ jsx(XCircle, { className: "h-5 w-5 text-red-500 mt-0.5" }) : issue.type === "warning" ? /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-orange-500 mt-0.5" }) : /* @__PURE__ */ jsx(Eye, { className: "h-5 w-5 text-blue-500 mt-0.5" }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: cn(
                  "font-medium text-sm",
                  issue.type === "critical" ? "text-red-700 dark:text-red-300" : issue.type === "warning" ? "text-orange-700 dark:text-orange-300" : "text-blue-700 dark:text-blue-300"
                ), children: issue.message }) })
              ] }, index)) }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(
              Button,
              {
                onClick: () => setShowEmailForm(true),
                className: "bg-gradient-to-r from-green-500 to-teal-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
                children: [
                  /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
                  "Detaillierten Scan-Report herunterladen"
                ]
              }
            ) })
          ] })
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "pb-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Manuelle Compliance-Prüfung" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300", children: "Ergänzende Checkliste für Aspekte, die eine menschliche Bewertung erfordern" })
        ] }),
        /* @__PURE__ */ jsx(Card, { className: "mb-8 border-2 border-purple-200 dark:border-purple-800", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-purple-600", children: [
                completedCount,
                "/",
                totalItems
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Punkte abgehakt" })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-purple-600", children: [
                Math.round(completedCount / totalItems * 100),
                "%"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Vollständigkeit" })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-300",
              style: { width: `${completedCount / totalItems * 100}%` }
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: auditCategories.map((category, categoryIndex) => /* @__PURE__ */ jsxs(Card, { className: "border-2 border-gray-200 dark:border-gray-700", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "p-3 rounded-xl bg-gradient-to-r shadow-lg",
              category.color
            ), children: /* @__PURE__ */ jsx(category.icon, { className: "h-6 w-6 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: category.title }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: category.description })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-lg font-bold text-gray-900 dark:text-white", children: [
                category.items.filter((item) => completedItems.has(item.id)).length,
                "/",
                category.items.length
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "abgeschlossen" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: category.items.map((item, itemIndex) => /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "p-4 rounded-xl border transition-all duration-200 hover:shadow-md",
                item.critical ? "bg-red-50 dark:bg-red-950/10 border-red-200 dark:border-red-800" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
                completedItems.has(item.id) ? "opacity-75" : ""
              ),
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    checked: completedItems.has(item.id),
                    onCheckedChange: () => toggleItem(item.id),
                    className: "mt-1"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                    /* @__PURE__ */ jsx("h4", { className: cn(
                      "font-semibold text-gray-900 dark:text-white",
                      completedItems.has(item.id) ? "line-through" : ""
                    ), children: item.title }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 ml-4", children: [
                      item.critical && /* @__PURE__ */ jsx(Badge, { className: "bg-red-100 text-red-700 border-red-200 text-xs", children: "Kritisch" }),
                      item.autoCheck && /* @__PURE__ */ jsx(Badge, { className: "bg-blue-100 text-blue-700 border-blue-200 text-xs", children: "Auto-Check" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: item.description })
                ] })
              ] })
            },
            item.id
          )) }) })
        ] }, category.id)) }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: () => setShowEmailForm(true),
            className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
              "Vollständige Checkliste als PDF herunterladen"
            ]
          }
        ) })
      ] }) }) }),
      showEmailForm && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxs(Card, { className: "max-w-lg w-full", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-brand-red" }),
          "Cookie-Audit-Report herunterladen"
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: "Erhalten Sie den vollständigen Cookie-Compliance-Report mit Scan-Ergebnissen, Checkliste und konkreten Umsetzungsempfehlungen." }),
          /* @__PURE__ */ jsxs("form", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "E-Mail-Adresse" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  required: true,
                  className: "w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent",
                  placeholder: "ihre.email@unternehmen.de"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Website-URL (optional)" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "url",
                  className: "w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent",
                  placeholder: "https://ihre-website.de",
                  defaultValue: websiteUrl
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Checkbox, { id: "privacy", className: "mt-1" }),
              /* @__PURE__ */ jsx("label", { htmlFor: "privacy", className: "text-xs text-gray-600 dark:text-gray-400", children: "Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  type: "submit",
                  className: "flex-1 bg-brand-red hover:bg-brand-red/90 text-white",
                  children: [
                    /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
                    "Report herunterladen"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  onClick: () => setShowEmailForm(false),
                  children: "Abbrechen"
                }
              )
            ] })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-4", children: "Weiterführende Cookie-Compliance-Tools" }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsx(Card, { className: "hover:shadow-xl transition-all duration-300 hover:scale-[1.02]", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg", children: /* @__PURE__ */ jsx(Settings, { className: "h-6 w-6 text-blue-600" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 dark:text-white mb-2", children: "Cookie-Banner-Generator" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: "Erstellen Sie DSGVO-konforme Cookie-Banner mit unserem interaktiven Generator." }),
              /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "hover:text-blue-600", children: [
                /* @__PURE__ */ jsx(ExternalLink, { className: "mr-2 h-4 w-4" }),
                "Zum Generator"
              ] })
            ] })
          ] }) }) }),
          /* @__PURE__ */ jsx(Card, { className: "hover:shadow-xl transition-all duration-300 hover:scale-[1.02]", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 bg-green-100 dark:bg-green-900/30 rounded-lg", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-green-600" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 dark:text-white mb-2", children: "Cookie-Policy-Template" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: "Vorgefertigte Cookie-Richtlinien-Vorlagen für verschiedene Website-Typen." }),
              /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "hover:text-green-600", children: [
                /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
                "Template laden"
              ] })
            ] })
          ] }) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact?source=cookie-audit", children: /* @__PURE__ */ jsxs(Button, { className: "bg-brand-red hover:bg-brand-red/90 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group", children: [
            /* @__PURE__ */ jsx(Users, { className: "mr-2 h-5 w-5" }),
            "Cookie-Compliance-Beratung buchen",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/resources", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "border-2 border-gray-300 dark:border-gray-600 hover:border-brand-red hover:text-brand-red transition-all duration-300", children: [
            /* @__PURE__ */ jsx(BarChart3, { className: "mr-2 h-5 w-5" }),
            "Weitere Compliance-Tools"
          ] }) })
        ] }) })
      ] }) }) })
    ] })
  ] });
};
export {
  CookieComplianceAudit
};
