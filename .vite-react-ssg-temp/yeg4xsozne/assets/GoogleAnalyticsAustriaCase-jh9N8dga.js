import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { ArrowLeft, BarChart3, AlertTriangle, X, Calendar, MapPin, Download, Settings, Globe, Server, Activity, CheckCircle2, Copy, Search, ArrowRight, Shield } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-tabs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const GoogleAnalyticsAustriaCase = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [copySuccess, setCopySuccess] = useState("");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(type);
      setTimeout(() => setCopySuccess(""), 2e3);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  const keyFindings = [
    {
      title: "Unzulässige Drittlandübertragung",
      description: "Übertragung von IP-Adressen und anderen Daten in die USA ohne angemessene Garantien",
      impact: "KRITISCH",
      details: "Verstoß gegen Art. 44 DSGVO - Allgemeine Grundsätze für Übermittlungen",
      technicalIssue: "Google Analytics sendet Daten automatisch an US-Server"
    },
    {
      title: "Unzureichende IP-Anonymisierung",
      description: "IP-Anonymisierung erfolgt erst auf Google-Servern in den USA",
      impact: "HOCH",
      details: "Vollständige IP-Adresse wird zunächst ungeschützt übertragen",
      technicalIssue: "Anonymisierung findet nach dem Drittlandtransfer statt"
    },
    {
      title: "Fehlende Zusatzmaßnahmen",
      description: "Keine ergänzenden technischen Schutzmaßnahmen implementiert",
      impact: "HOCH",
      details: "Standardvertragsklauseln allein reichen nicht aus",
      technicalIssue: "Keine End-to-End Verschlüsselung oder Pseudonymisierung"
    },
    {
      title: "Rechtsgrundlage unzureichend",
      description: "Berechtiges Interesse als Rechtsgrundlage für Analytics fragwürdig",
      impact: "MITTEL",
      details: "Interessenabwägung fällt zugunsten der Betroffenen aus",
      technicalIssue: "Tracking ohne explizite Einwilligung problematisch"
    }
  ];
  const technicalAnalysis = [
    {
      aspect: "Datenfluss",
      icon: Globe,
      color: "from-red-500 to-orange-500",
      current: [
        "Browser → Google Analytics Collect Server (USA)",
        "Vollständige IP-Adresse wird übertragen",
        "User-Agent und weitere Browser-Daten",
        "Zeitstempel und Session-Informationen"
      ],
      compliant: [
        "Browser → EU-basierter Proxy-Server",
        "IP-Anonymisierung vor Übertragung",
        "Datenminimierung auf erforderliche Parameter",
        "Verschlüsselung aller übertragenen Daten"
      ]
    },
    {
      aspect: "Datenspeicherung",
      icon: Server,
      color: "from-blue-500 to-indigo-500",
      current: [
        "Primäre Speicherung in US-Rechenzentren",
        "Backup-Systeme global verteilt",
        "Lange Aufbewahrungszeiten (26 Monate Standard)",
        "Zugriff durch US-Behörden möglich"
      ],
      compliant: [
        "Exklusive Speicherung in EU-Rechenzentren",
        "Geografische Datenlokalisierung",
        "Verkürzte Aufbewahrungszeiten",
        "Rechtssichere Zugriffskontrolle"
      ]
    },
    {
      aspect: "Verarbeitung",
      icon: Activity,
      color: "from-purple-500 to-pink-500",
      current: [
        "Automatisierte Profilerstellung",
        "Cross-Device Tracking",
        "Aggregation mit anderen Google-Diensten",
        "Machine Learning auf Nutzerdaten"
      ],
      compliant: [
        "Anonymisierte Aggregatdaten",
        "Opt-in für erweiterte Features",
        "Isolierte Verarbeitung ohne Verknüpfung",
        "Transparente Algorithmen"
      ]
    }
  ];
  const alternatives = [
    {
      name: "Matomo (On-Premise)",
      type: "Self-Hosted",
      privacy: "HOCH",
      features: "VOLLSTÄNDIG",
      complexity: "HOCH",
      cost: "NIEDRIG",
      description: "Vollständig selbst gehostete Analytics-Lösung mit kompletter Datenkontrolle",
      pros: [
        "100% Datenkontrolle",
        "DSGVO-compliant by design",
        "Keine Drittlandübertragungen",
        "Umfangreiche Features"
      ],
      cons: [
        "Hoher Wartungsaufwand",
        "Technisches Know-how erforderlich",
        "Keine automatischen Updates",
        "Server-Infrastruktur notwendig"
      ],
      implementation: [
        "Server-Installation und Konfiguration",
        "SSL-Zertifikat einrichten",
        "Tracking-Code implementieren",
        "Datenschutzerklärung anpassen"
      ]
    },
    {
      name: "Plausible Analytics",
      type: "EU-SaaS",
      privacy: "HOCH",
      features: "MITTEL",
      complexity: "NIEDRIG",
      cost: "MITTEL",
      description: "Einfache, datenschutzfreundliche Analytics ohne Cookies",
      pros: [
        "EU-basierte Server",
        "Keine Cookies erforderlich",
        "Einfache Implementierung",
        "Transparente Datenschutzpraktiken"
      ],
      cons: [
        "Begrenzte Funktionen im Vergleich zu GA",
        "Kostenpflichtig ab bestimmtem Traffic",
        "Weniger detaillierte Berichte",
        "Keine Integration mit Google-Ecosystem"
      ],
      implementation: [
        "Account bei EU-Anbieter erstellen",
        "Tracking-Script einbinden",
        "Goals und Events konfigurieren",
        "Dashboard-Zugriffe verwalten"
      ]
    },
    {
      name: "Google Analytics 4 (EU-Setup)",
      type: "Modifiziert",
      privacy: "MITTEL",
      features: "VOLLSTÄNDIG",
      complexity: "HOCH",
      cost: "NIEDRIG",
      description: "GA4 mit zusätzlichen Datenschutzmaßnahmen und EU-Lokalisierung",
      pros: [
        "Bekannte Benutzeroberfläche",
        "Vollständiger Funktionsumfang",
        "Kostenlos verfügbar",
        "Integration mit Google Ads"
      ],
      cons: [
        "Weiterhin rechtliche Unsicherheit",
        "Komplexe Compliance-Maßnahmen",
        "Abhängigkeit von Google-Updates",
        "Nicht vollständig DSGVO-konform"
      ],
      implementation: [
        "Server-side Tracking implementieren",
        "Consent Management optimieren",
        "IP-Anonymisierung konfigurieren",
        "Data Retention verkürzen"
      ]
    }
  ];
  const implementationGuide = [
    {
      phase: "Sofort-Maßnahmen (0-7 Tage)",
      urgency: "KRITISCH",
      color: "from-red-500 to-pink-500",
      tasks: [
        "Google Analytics vorübergehend deaktivieren",
        "Rechtliche Risikobewertung durchführen",
        "Stakeholder über Situation informieren",
        "Alternative Analytics-Lösung evaluieren",
        "Budget für Migration genehmigen lassen"
      ]
    },
    {
      phase: "Migration (1-4 Wochen)",
      urgency: "HOCH",
      color: "from-orange-500 to-red-500",
      tasks: [
        "DSGVO-konforme Analytics-Lösung auswählen",
        "Historische Daten exportieren und archivieren",
        "Neue Tracking-Implementierung entwickeln",
        "Datenschutzerklärung aktualisieren",
        "Team-Schulungen für neue Tools durchführen"
      ]
    },
    {
      phase: "Optimierung (1-3 Monate)",
      urgency: "MITTEL",
      color: "from-blue-500 to-indigo-500",
      tasks: [
        "Tracking-Performance optimieren",
        "Custom Dashboards erstellen",
        "Reporting-Prozesse anpassen",
        "Compliance-Monitoring einrichten",
        "Dokumentation und Prozesse finalisieren"
      ]
    }
  ];
  const euDecisions = [
    {
      country: "Österreich",
      date: "22. Dez 2021",
      authority: "Österreichische DSB",
      decision: "Google Analytics DSGVO-widrig",
      status: "Endgültig",
      impact: "Grundsatzentscheidung für EU"
    },
    {
      country: "Frankreich",
      date: "10. Feb 2022",
      authority: "CNIL",
      decision: "GA verstößt gegen DSGVO",
      status: "Bestätigt",
      impact: "Verschärfte Durchsetzung"
    },
    {
      country: "Italien",
      date: "23. Jun 2022",
      authority: "Garante",
      decision: "Unzulässige Drittlandübertragung",
      status: "Rechtskräftig",
      impact: "EU-weiter Trend"
    },
    {
      country: "Dänemark",
      date: "20. Jul 2022",
      authority: "Datatilsynet",
      decision: "GA4 ebenfalls betroffen",
      status: "Bestätigt",
      impact: "Auch neue Version problematisch"
    },
    {
      country: "Niederlande",
      date: "5. Sep 2022",
      authority: "AP",
      decision: "Behördliche Warnung ausgesprochen",
      status: "Ongoing",
      impact: "Verschärfte Kontrollen"
    }
  ];
  const serverSideSetup = `// Server-Side Google Analytics 4 Setup
// 1. Google Tag Manager Server Container

// gtag-config.js
const gtag_config = {
  // Erweiterte Anonymisierung
  anonymize_ip: true,
  allow_google_signals: false,
  allow_ad_personalization_signals: false,
  
  // EU-spezifische Einstellungen
  server_container_url: 'https://eu-gtm.yourdomain.com',
  transport_url: 'https://eu-analytics.yourdomain.com',
  
  // Datenminimierung
  custom_map: {
    'custom_parameter_1': 'anonymized_user_id'
  },
  
  // Consent Mode
  ads_data_redaction: true,
  url_passthrough: false
};

// 2. Server-Side Tagging Implementation
const serverConfig = {
  // EU-Server Konfiguration
  region: 'europe-west1',
  data_residency: 'EU',
  
  // Datenverarbeitung
  ip_anonymization: 'before_processing',
  user_data_encryption: true,
  
  // Compliance Features
  data_retention: '14_months',
  automatic_deletion: true,
  
  // Monitoring
  compliance_logging: true,
  audit_trail: true
};

// 3. Client-Side Implementation mit Consent
function initAnalytics(hasConsent) {
  if (hasConsent) {
    gtag('config', 'GA_MEASUREMENT_ID', gtag_config);
    
    // Consent Mode V2
    gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'denied'
    });
  } else {
    // Cookieless Tracking
    gtag('config', 'GA_MEASUREMENT_ID', {
      'client_storage': 'none',
      'anonymize_ip': true,
      'allow_google_signals': false
    });
  }
}`;
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Google Analytics Austria DSB – US-Tool-Verbot Entscheidung",
        description: "Google Analytics Austria DSB-Entscheidung: US-Tool-Verbot, Schrems II Auswirkungen, Analytics-Alternativen. ✓ Regulatory Decision ✓ Tool Assessment ✓ Compliance Strategy.",
        canonical: "/wissen/rechtsprechung/google-analytics-austria",
        keywords: "Google Analytics, Austria, DSB, Datenschutzbehörde, US-Tools, Schrems II, Analytics-Alternativen, DSGVO",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Google Analytics Austria DSB – US-Tool-Verbot Entscheidung",
          "description": "Österreichische Datenschutzbehörde verbietet Google Analytics wegen unzulässiger Datenübermittlung in die USA",
          "author": {
            "@type": "Organization",
            "name": "Marsstein"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Marsstein",
            "logo": {
              "@type": "ImageObject",
              "url": "https://marsstein.com/logo.png"
            }
          },
          "datePublished": "2022-01-13",
          "dateModified": "2024-01-15",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://marsstein.com/wissen/rechtsprechung/google-analytics-austria"
          }
        }
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-orange-500/5 to-red-500/5 rounded-full blur-3xl animate-spin-slow" })
    ] }),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        ref: heroRef,
        style: { y, opacity },
        className: "relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden",
        children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "mb-8",
              children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-orange-500/30 text-orange-300 hover:bg-orange-500/10", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/rechtsprechung", className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
                "Zurück zur Rechtsprechung"
              ] }) })
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "text-center mb-20",
              children: [
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { scale: 0 },
                    animate: { scale: 1 },
                    transition: { delay: 0.2, type: "spring", stiffness: 200 },
                    className: "inline-flex items-center gap-3 px-6 py-3 bg-orange-500/10 backdrop-blur-sm rounded-full mb-8 border border-orange-500/20",
                    children: [
                      /* @__PURE__ */ jsx(BarChart3, { className: "h-5 w-5 text-orange-400" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-orange-300", children: "Analytics Compliance" }),
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-400 animate-pulse" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.h1,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.4, duration: 0.8 },
                    className: "text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8",
                    children: [
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Google" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent", children: "Analytics" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent", children: "Austria DSB" })
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
                      "Die wegweisende Entscheidung der österreichischen Datenschutzbehörde gegen",
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-orange-300", children: " Google Analytics" }),
                      " und ihre EU-weiten Auswirkungen"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, y: 30 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: 0.8, duration: 0.8 },
                    className: "flex flex-wrap justify-center gap-4 mb-12",
                    children: [
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-red-500/20 text-red-300 border-red-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(X, { className: "h-4 w-4 mr-2" }),
                        "DSGVO-widrig"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-orange-500/20 text-orange-300 border-orange-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4 mr-2" }),
                        "22. Dez 2021"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(MapPin, { className: "h-4 w-4 mr-2" }),
                        "Österreich DSB"
                      ] })
                    ]
                  }
                )
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ jsx("section", { className: "py-8 px-4 sm:px-6 lg:px-8 bg-slate-800/20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        transition: { duration: 0.6 },
        className: "text-center mb-8",
        children: [
          /* @__PURE__ */ jsx("h2", { id: "inhaltsverzeichnis", className: "text-3xl font-bold text-white mb-6", style: { scrollMarginTop: "100px" }, children: "Inhaltsverzeichnis" }),
          /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 text-left", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("a", { href: "#entscheidungsuebersicht", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-orange-400 font-medium", children: "1." }),
                " Entscheidungsübersicht"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#kernurteile", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-orange-400 font-medium", children: "2." }),
                " Kernurteile & Begründung"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#technische-analyse", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-orange-400 font-medium", children: "3." }),
                " Technische Analyse"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("a", { href: "#alternativen", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-orange-400 font-medium", children: "4." }),
                " Analytics-Alternativen"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#compliance", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-orange-400 font-medium", children: "5." }),
                " Compliance-Umsetzung"
              ] }),
              /* @__PURE__ */ jsxs("a", { href: "#eu-auswirkungen", className: "block p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-slate-300 hover:text-white", children: [
                /* @__PURE__ */ jsx("span", { className: "text-orange-400 font-medium", children: "6." }),
                " EU-weite Auswirkungen"
              ] })
            ] })
          ] }) })
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "mb-12",
          children: /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2 md:grid-cols-6 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl gap-2 md:gap-0", children: [
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "overview", className: "data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Überblick" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Info" })
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "findings", className: "data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Kernurteile" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Urteil" })
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "technical", className: "data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Technische Analyse" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Tech" })
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "alternatives", className: "data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Alternativen" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Alt." })
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "implementation", className: "data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "Umsetzung" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "Guide" })
            ] }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "eu-impact", className: "data-[state=active]:bg-orange-500 data-[state=active]:text-white text-xs md:text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "hidden md:inline", children: "EU-Auswirkungen" }),
              /* @__PURE__ */ jsx("span", { className: "md:hidden", children: "EU" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(TabsContent, { value: "overview", className: "space-y-8", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-orange-500/30", children: /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsx("h3", { id: "entscheidungsuebersicht", className: "text-2xl font-bold text-white mb-6", style: { scrollMarginTop: "100px" }, children: "Entscheidungsübersicht" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-slate-300 leading-relaxed", children: [
                /* @__PURE__ */ jsx("p", { children: "Am 22. Dezember 2021 entschied die österreichische Datenschutzbehörde (DSB) in einem wegweisenden Verfahren, dass die Nutzung von Google Analytics gegen die DSGVO verstößt." }),
                /* @__PURE__ */ jsx("p", { children: "Die Entscheidung basiert auf der Übertragung personenbezogener Daten (IP-Adressen) in die USA ohne angemessene Schutzmaßnahmen. Trotz Standardvertragsklauseln bietet Google Analytics kein ausreichendes Schutzniveau für EU-Bürger." }),
                /* @__PURE__ */ jsx("p", { children: "Diese Entscheidung löste eine Kettenreaktion in der gesamten EU aus und führte zu ähnlichen Urteilen in Frankreich, Italien und anderen Mitgliedstaaten." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-4", children: "Verfahren Details" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Aktenzeichen:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "DSB-D155.027" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Datum:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "22.12.2021" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Behörde:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Österreichische DSB" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Betroffenes Tool:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "Google Analytics" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Status:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-red-300 font-semibold", children: "DSGVO-widrig" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-orange-500 to-red-500 text-white", children: [
                /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                "Entscheidung herunterladen"
              ] }) })
            ] })
          ] }) }) })
        }
      ) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "findings", className: "space-y-8", id: "kernurteile", children: /* @__PURE__ */ jsx("div", { className: "grid gap-6", children: keyFindings.map((finding, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: -30 },
          whileInView: { opacity: 1, x: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-orange-500/50 transition-colors", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "px-3 py-1 rounded-full text-xs font-bold",
              finding.impact === "KRITISCH" ? "bg-red-500/20 text-red-300" : finding.impact === "HOCH" ? "bg-orange-500/20 text-orange-300" : "bg-yellow-500/20 text-yellow-300"
            ), children: finding.impact }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: finding.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-3", children: finding.description }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-slate-400 mb-2", children: finding.details }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4 text-orange-400" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-orange-300", children: finding.technicalIssue })
              ] })
            ] })
          ] }) }) })
        },
        index
      )) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "technical", className: "space-y-8", id: "technische-analyse", children: /* @__PURE__ */ jsx("div", { className: "space-y-8", children: technicalAnalysis.map((analysis, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                analysis.color
              ), children: /* @__PURE__ */ jsx(analysis.icon, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: analysis.aspect })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-red-300 mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }),
                  "Aktueller Status (Problematisch)"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: analysis.current.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-red-500/10 rounded-lg", children: [
                  /* @__PURE__ */ jsx(X, { className: "h-4 w-4 text-red-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: item })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-semibold text-green-300 mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }),
                  "DSGVO-konforme Alternative"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: analysis.compliant.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-green-500/10 rounded-lg", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: item })
                ] }, idx)) })
              ] })
            ] })
          ] }) })
        },
        index
      )) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "alternatives", className: "space-y-8", id: "alternativen", children: /* @__PURE__ */ jsx("div", { className: "grid gap-8", children: alternatives.map((alternative, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-orange-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: alternative.name }),
                /* @__PURE__ */ jsx("p", { className: "text-slate-300", children: alternative.description })
              ] }),
              /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: alternative.type })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-slate-700/30 rounded-lg", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 mb-1", children: "Privacy" }),
                /* @__PURE__ */ jsx("div", { className: cn(
                  "text-lg font-bold",
                  alternative.privacy === "HOCH" ? "text-green-400" : alternative.privacy === "MITTEL" ? "text-yellow-400" : "text-red-400"
                ), children: alternative.privacy })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-slate-700/30 rounded-lg", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 mb-1", children: "Features" }),
                /* @__PURE__ */ jsx("div", { className: cn(
                  "text-lg font-bold",
                  alternative.features === "VOLLSTÄNDIG" ? "text-green-400" : alternative.features === "MITTEL" ? "text-yellow-400" : "text-red-400"
                ), children: alternative.features })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-slate-700/30 rounded-lg", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 mb-1", children: "Komplexität" }),
                /* @__PURE__ */ jsx("div", { className: cn(
                  "text-lg font-bold",
                  alternative.complexity === "NIEDRIG" ? "text-green-400" : alternative.complexity === "MITTEL" ? "text-yellow-400" : "text-red-400"
                ), children: alternative.complexity })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-slate-700/30 rounded-lg", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 mb-1", children: "Kosten" }),
                /* @__PURE__ */ jsx("div", { className: cn(
                  "text-lg font-bold",
                  alternative.cost === "NIEDRIG" ? "text-green-400" : alternative.cost === "MITTEL" ? "text-yellow-400" : "text-red-400"
                ), children: alternative.cost })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-green-300 mb-3", children: "Vorteile:" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: alternative.pros.map((pro, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: pro })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-orange-300 mb-3", children: "Nachteile:" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: alternative.cons.map((con, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-400 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: con })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-blue-300 mb-3", children: "Umsetzung:" }),
                /* @__PURE__ */ jsx("div", { className: "space-y-2", children: alternative.implementation.map((step, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-5 h-5 bg-blue-500 text-white text-xs rounded-full flex items-center justify-center mt-0.5", children: idx + 1 }),
                  /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: step })
                ] }, idx)) })
              ] })
            ] })
          ] }) })
        },
        index
      )) }) }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "implementation", className: "space-y-8", id: "compliance", children: [
        /* @__PURE__ */ jsx("div", { className: "space-y-8", children: implementationGuide.map((phase, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r text-white",
                  phase.color
                ), children: phase.urgency }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: phase.phase })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: phase.tasks.map((task, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: task })
              ] }, idx)) })
            ] }) })
          },
          index
        )) }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "mt-12",
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-orange-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0", children: [
              /* @__PURE__ */ jsx("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: "Server-Side Analytics Setup (Compliance-optimiert)" }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "sm",
                    onClick: () => handleCopy(serverSideSetup, "serverside"),
                    className: "bg-orange-500 hover:bg-orange-600",
                    children: [
                      /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4 mr-2" }),
                      copySuccess === "serverside" ? "Kopiert!" : "Kopieren"
                    ]
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("pre", { className: "bg-slate-900 rounded-lg p-6 overflow-x-auto", children: /* @__PURE__ */ jsx("code", { className: "text-slate-300 text-sm", children: serverSideSetup }) }) })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "eu-impact", className: "space-y-8", id: "eu-auswirkungen", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "mb-8",
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-orange-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-6 text-center", children: "EU-weite Auswirkungen der österreichischen Entscheidung" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-center", children: "Ähnliche Entscheidungen in allen EU-Mitgliedstaaten schaffen einheitliche Rechtssicherheit" })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid gap-6", children: euDecisions.map((decision, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-orange-500/50 transition-colors", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-8 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-sm flex items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "text-white text-xs font-bold", children: "EU" }) }),
                  /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: decision.country })
                ] }),
                /* @__PURE__ */ jsx(Badge, { className: cn(
                  "text-xs",
                  decision.status === "Endgültig" || decision.status === "Rechtskräftig" || decision.status === "Bestätigt" ? "bg-red-500/20 text-red-300" : "bg-yellow-500/20 text-yellow-300"
                ), children: decision.status })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 mb-1", children: "Datum" }),
                  /* @__PURE__ */ jsx("div", { className: "text-white font-semibold", children: decision.date })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 mb-1", children: "Behörde" }),
                  /* @__PURE__ */ jsx("div", { className: "text-white font-semibold", children: decision.authority })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 mb-1", children: "Auswirkung" }),
                  /* @__PURE__ */ jsx("div", { className: "text-orange-300 font-semibold", children: decision.impact })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-4 p-3 bg-slate-700/30 rounded-lg", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400 mb-1", children: "Entscheidung" }),
                /* @__PURE__ */ jsx("div", { className: "text-slate-300", children: decision.decision })
              ] })
            ] }) })
          },
          index
        )) })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 via-orange-900/30 to-slate-800/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent", children: "Analytics Migration starten" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300", children: "Wechseln Sie zu DSGVO-konformen Analytics-Lösungen" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
        {
          title: "Analytics Audit",
          description: "Bewertung Ihrer aktuellen Analytics-Implementierung",
          icon: Search,
          link: "/services/analytics-audit",
          color: "from-blue-500 to-indigo-500"
        },
        {
          title: "Migration Service",
          description: "Professionelle Migration zu DSGVO-konformen Tools",
          icon: ArrowRight,
          link: "/services/analytics-migration",
          color: "from-emerald-500 to-teal-500"
        },
        {
          title: "Compliance Monitoring",
          description: "Kontinuierliche Überwachung Ihrer Analytics-Compliance",
          icon: Shield,
          link: "/services/compliance-monitoring",
          color: "from-orange-500 to-red-500"
        }
      ].map((cta, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          whileHover: { y: -5 },
          className: "group",
          children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-orange-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
              cta.color
            ), children: /* @__PURE__ */ jsx(cta.icon, { className: "h-6 w-6 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3 group-hover:text-orange-300 transition-colors", children: cta.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: cta.description }),
            /* @__PURE__ */ jsx(Button, { asChild: true, className: cn(
              "w-full bg-gradient-to-r text-white",
              cta.color
            ), children: /* @__PURE__ */ jsxs(Link, { to: cta.link, className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { children: "Jetzt starten" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) })
          ] }) })
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  GoogleAnalyticsAustriaCase as default
};
