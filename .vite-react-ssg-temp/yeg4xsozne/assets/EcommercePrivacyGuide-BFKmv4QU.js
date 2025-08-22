import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { Helmet } from "react-helmet-async";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { ShoppingCart, BookOpen, ArrowRight, Download, Shield, Cookie, BarChart, CreditCard, Users, Code, FileText, ExternalLink, Gavel, AlertOctagon, CheckCircle2, Lightbulb, UserCheck, AlertTriangle, Globe, Server, Eye, MousePointer, MessageSquare, Lock, Database, TrendingUp, Clock, Fingerprint, FileCheck, Star, Target, Zap, Building2, Rocket, Euro } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import { motion } from "framer-motion";
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
const EcommercePrivacyGuide = () => {
  const [activeSection, setActiveSection] = useState("ueberblick");
  const [expandedSection, setExpandedSection] = useState(null);
  const navigationItems = [
    { id: "ueberblick", label: "Überblick", icon: Shield },
    { id: "cookie-consent", label: "Cookie Consent", icon: Cookie },
    { id: "tracking-analytics", label: "Tracking & Analytics", icon: BarChart },
    { id: "zahlungsdaten", label: "Zahlungsdaten", icon: CreditCard },
    { id: "kundenrechte", label: "Kundenrechte", icon: Users },
    { id: "implementation", label: "Implementation", icon: Code }
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
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const privacyFrameworks = [
    {
      name: "DSGVO Cookie Compliance",
      category: "Cookie Management",
      requirements: [
        "Aktive Einwilligung für nicht-essenzielle Cookies",
        "Granulare Consent-Optionen",
        "Einfacher Widerruf der Einwilligung",
        "Dokumentation der Einwilligungen"
      ],
      color: "bg-blue-50 border-blue-200"
    },
    {
      name: "ePrivacy Verordnung (geplant)",
      category: "Electronic Communications",
      requirements: [
        "Erweiterte Cookie-Regelungen",
        "Browser-basierte Privacy Settings",
        "Tracking ohne Einwilligung nur in Ausnahmen",
        "Verschärfte Sanktionen"
      ],
      color: "bg-purple-50 border-purple-200"
    },
    {
      name: "Digital Services Act (DSA)",
      category: "Platform Responsibility",
      requirements: [
        "Transparente AGB und Datenschutzerklärungen",
        "Nutzerfreundliche Beschwerdemechanismen",
        "Risk Assessment für große Plattformen",
        "Externe Audits und Compliance-Berichte"
      ],
      color: "bg-green-50 border-green-200"
    }
  ];
  const ecommerceSpecifics = [
    {
      category: "Customer Journey Tracking",
      icon: MousePointer,
      challenges: [
        "Cross-Device Tracking ohne Zustimmung",
        "Retargeting und Lookalike Audiences",
        "Conversion Tracking über Drittanbieter",
        "Session Replay und Heatmaps"
      ]
    },
    {
      category: "Payment Processing",
      icon: CreditCard,
      challenges: [
        "PCI DSS Compliance für Kartendaten",
        "Fraud Detection vs. Privacy",
        "Internationale Zahlungsanbieter",
        "Recurring Payments und Tokenization"
      ]
    },
    {
      category: "Marketing Automation",
      icon: MessageSquare,
      challenges: [
        "E-Mail Marketing ohne Double Opt-in",
        "Personalisierte Produktempfehlungen",
        "Automatisierte Preisanpassungen",
        "Social Media Pixel Integration"
      ]
    }
  ];
  const renderOverview = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-8 border border-orange-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(ShoppingCart, { className: "w-8 h-8 text-orange-600" }),
        "E-Commerce Privacy Excellence"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed mb-6", children: "Implementieren Sie erstklassige Datenschutz-Standards für Ihren Online-Shop. Von Cookie-Consent über Tracking-Management bis hin zu kundenfreundlichen Privacy-Prozessen - wir zeigen Ihnen, wie Sie Compliance und Conversion-Optimierung erfolgreich vereinen." }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: ["99.8% DSGVO Compliance", "95% Cookie Acceptance", "GDPR-zertifiziert"].map((stat, index) => /* @__PURE__ */ jsx("div", { className: "bg-white rounded-lg p-4 text-center border border-orange-200", children: /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-orange-700", children: stat }) }, index)) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: privacyFrameworks.map((framework, index) => /* @__PURE__ */ jsxs(Card, { className: cn("p-6 border-2", framework.color), children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: framework.name }),
        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "w-fit", children: framework.category })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { className: "space-y-3", children: framework.requirements.map((req, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: req })
      ] }, i)) })
    ] }, index)) })
  ] });
  const renderCookieConsent = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Cookie, { className: "w-8 h-8 text-blue-600" }),
        "DSGVO-konforme Cookie-Strategie"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed mb-6", children: "Entwickeln Sie eine rechtssichere und nutzerfreundliche Cookie-Strategie, die sowohl Compliance-Anforderungen erfüllt als auch Ihre Marketing-Ziele unterstützt." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-blue-600" }),
          "Essenzielle vs. Nicht-essenzielle Cookies"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-green-50 rounded-lg border border-green-200", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-800 mb-2", children: "Essenzielle Cookies (ohne Einwilligung)" }),
            /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 space-y-1", children: [
              /* @__PURE__ */ jsx("li", { children: "• Warenkorb-Funktionalität" }),
              /* @__PURE__ */ jsx("li", { children: "• Session-Management" }),
              /* @__PURE__ */ jsx("li", { children: "• Security/CSRF Protection" }),
              /* @__PURE__ */ jsx("li", { children: "• Load Balancing" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-50 rounded-lg border border-orange-200", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-800 mb-2", children: "Nicht-essenzielle Cookies (Einwilligung erforderlich)" }),
            /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 space-y-1", children: [
              /* @__PURE__ */ jsx("li", { children: "• Google Analytics/Marketing Tracking" }),
              /* @__PURE__ */ jsx("li", { children: "• Social Media Plugins" }),
              /* @__PURE__ */ jsx("li", { children: "• Personalisierung/Recommendations" }),
              /* @__PURE__ */ jsx("li", { children: "• A/B Testing Tools" })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Code, { className: "w-5 h-5 text-purple-600" }),
          "Consent Management Implementation"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-4 bg-gradient-to-br from-green-50 to-teal-50 rounded-lg border border-green-200", children: [
          /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-green-800 mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4" }),
            "🚀 Praxis-Szenario: Fashion E-Commerce Cookie-Revolution"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-md font-bold text-green-900 mb-2", children: "95% Cookie Acceptance Rate durch smarte UX" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-green-700", children: "Ein Fashion-Shop steigert Cookie-Akzeptanz von 23% auf 95% durch nutzerfreundliches Consent-Design ohne Dark Patterns." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-900 mb-1", children: "🎯 Smart Timing" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 mb-2", children: "Banner erscheint erst nach 3 Sekunden - User kann sich orientieren" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 font-medium", children: "+34% höhere Akzeptanz durch reduzierten Stress" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-900 mb-1", children: "🎨 Value-First Messaging" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 mb-2", children: '"Personalisierte Empfehlungen" statt "Marketing Cookies"' }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 font-medium", children: "+42% Verständnis durch klare Nutzen-Kommunikation" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-900 mb-1", children: "⚙️ Progressive Disclosure" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 mb-2", children: "3-Stufen-Consent: Essential → Empfehlungen → Marketing" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600 font-medium", children: "87% wählen mindestens 2 von 3 Kategorien" })
            ] })
          ] })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(UserCheck, { className: "w-5 h-5 text-green-600" }),
        "Best Practices für Cookie Banner"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-700", children: "✅ Empfohlene Practices" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Granulare Wahlmöglichkeiten" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Separate Optionen für Analytics, Marketing, Personalisierung" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Einfacher Widerruf" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Cookie-Einstellungen jederzeit änderbar" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Mobile-optimiert" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Responsive Design für alle Geräte" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-700", children: "❌ Zu vermeidende Praktiken" }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-600 mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Pre-checked Boxen" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Alle Kategorien dürfen nicht vorausgewählt sein" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-600 mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Cookie Walls" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Zugang nicht von Cookie-Zustimmung abhängig machen" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-600 mt-1 flex-shrink-0" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Versteckte Ablehnungsoptionen" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: '"Ablehnen" muss genauso prominent sein wie "Akzeptieren"' })
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
  const renderTrackingAnalytics = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-8 border border-green-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(BarChart, { className: "w-8 h-8 text-green-600" }),
        "Privacy-First Analytics & Tracking"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Implementieren Sie datengetriebene Insights ohne Kompromisse beim Datenschutz. Von Server-side Tracking bis hin zu anonymisierten Analytics-Lösungen." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Globe, { className: "w-5 h-5 text-blue-600" }),
          "Google Analytics 4 DSGVO Setup"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 mb-3", children: "Datenschutz-Konfiguration" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "IP-Anonymisierung aktiviert" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Data Retention auf 14 Monate" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Ads Personalization deaktiviert" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { children: "Google Signals opt-out" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg border border-blue-200", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-blue-800 mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(BarChart, { className: "h-4 w-4" }),
              "📊 Privacy-First Analytics Setup"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-md font-bold text-blue-900 mb-2", children: "Zero Personal Data, 100% Business Insights" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700", children: "Vollständige E-Commerce Analytics ohne Personenbezug - DSGVO-konform und trotzdem actionable." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-900 mb-1", children: "🚫 IP-Anonymisierung" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Letzte Oktette entfernt" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-900 mb-1", children: "🗑️ Auto-Löschung" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "14 Monate Retention" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-900 mb-1", children: "🚫 Ads-Signale" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Komplett deaktiviert" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-900 mb-1", children: "🔒 Consent Mode V2" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Standardmäßig denied" })
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Server, { className: "w-5 h-5 text-purple-600" }),
          "Server-Side Tracking Alternativen"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Plausible Analytics" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 mt-1", children: "Cookie-freie, DSGVO-konforme Analytics ohne Personenbezug" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Matomo On-Premise" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 mt-1", children: "Self-hosted Analytics mit vollständiger Datenkontrolle" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-purple-50 rounded-lg border border-purple-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Server-Side GTM" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700 mt-1", children: "Google Tag Manager Server-Container für First-Party Daten" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-purple-800 mb-3 flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Server, { className: "h-4 w-4" }),
              "🎆 Cookie-Free Analytics Revolution"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center mb-4", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-md font-bold text-purple-900 mb-2", children: "Plausible: 0 Cookies, 100% Insights" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700", children: "Komplette E-Commerce Analytics ohne Cookies oder Personendaten - DSGVO-konform ohne Consent-Banner." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-900 mb-1", children: "📋 Revenue Tracking" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 mb-1", children: "Umsatz und Conversions ohne User-Tracking" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-purple-600 font-medium", children: 'Event: "Purchase" mit anonymem Wert' })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-900 mb-1", children: "📍 Traffic Sources" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 mb-1", children: "Referrer-basierte Attribution ohne Cookies" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-purple-600 font-medium", children: "First-Party Daten aus HTTP Headers" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border", children: [
                /* @__PURE__ */ jsx("div", { className: "font-medium text-sm text-gray-900 mb-1", children: "📱 Real-time Dashboard" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 mb-1", children: "Live-Analytics ohne Data Export Restrictions" }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-purple-600 font-medium", children: "EU-Server, Open Source, Self-Hosted" })
              ] })
            ] })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5 text-orange-600" }),
        "E-Commerce Tracking Compliance"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: ecommerceSpecifics.map((specific, index) => /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(specific.icon, { className: "w-5 h-5 text-orange-600" }),
          /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: specific.category })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2", children: specific.challenges.map((challenge, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
          /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: challenge })
        ] }, i)) })
      ] }, index)) }) })
    ] })
  ] });
  const renderPaymentData = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(CreditCard, { className: "w-8 h-8 text-indigo-600" }),
        "Sichere Zahlungsdatenverarbeitung"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Kombinieren Sie PCI DSS Compliance mit DSGVO-Anforderungen für eine sichere, datenschutzkonforme Zahlungsabwicklung in Ihrem E-Commerce System." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-blue-600" }),
          "PCI DSS + DSGVO Compliance"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 rounded-lg border border-blue-200", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 mb-3", children: "Zahlungsdaten-Kategorien" }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(Lock, { className: "w-4 h-4 text-red-600 mt-0.5" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Sensitive Authentication Data" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "CVV, PIN, Magnetstreifen - niemals speichern!" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(Database, { className: "w-4 h-4 text-orange-600 mt-0.5" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Cardholder Data" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "PAN, Karteninhaber - verschlüsselt speichern" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(UserCheck, { className: "w-4 h-4 text-green-600 mt-0.5" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Transaction Data" }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Betrag, Datum, Händler - DSGVO-konform" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-600 rounded-lg", children: /* @__PURE__ */ jsx(CreditCard, { className: "w-5 h-5 text-white" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-blue-900", children: "🔐 Zero-Storage Payment Excellence" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700", children: "Kein Kartendaten-Speicher, maximale Sicherheit" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-blue-100", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-green-600" }),
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", children: "Payment Tokenization" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mb-2", children: "Kartendaten werden sofort in sichere Tokens umgewandelt" }),
                /* @__PURE__ */ jsxs("div", { className: "text-xs space-y-1", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { children: "PCI DSS Level 1:" }),
                    /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700 text-xs", children: "✓ Zertifiziert" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { children: "Token-Gültigkeit:" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "24h begrenzt" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-blue-100", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsx(Database, { className: "w-4 h-4 text-blue-600" }),
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", children: "Minimale Datenhaltung" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 mb-2", children: "Nur transaktionsrelevante Daten werden erfasst" }),
                /* @__PURE__ */ jsxs("div", { className: "text-xs space-y-1", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { children: "Gespeichert:" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Token + Betrag" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { children: "Nicht gespeichert:" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "CVV, PIN, Karte" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-white p-3 rounded-lg border border-blue-100", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
                  "Erfolgsrate: ",
                  /* @__PURE__ */ jsx("span", { className: "text-green-600", children: "98.7%" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-blue-600" }),
                /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
                  "Verarbeitung: ",
                  /* @__PURE__ */ jsx("span", { className: "text-blue-600", children: "<1.2s" })
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Fingerprint, { className: "w-5 h-5 text-purple-600" }),
          "Fraud Detection vs. Privacy"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-green-50 rounded-lg border border-green-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-800", children: "DSGVO-konforme Fraud Detection" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-green-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Berechtigtes Interesse für Fraud Prevention" }),
                /* @__PURE__ */ jsx("li", { children: "• Pseudonymisierte Risiko-Scores" }),
                /* @__PURE__ */ jsx("li", { children: "• Zeitlich begrenzte Datenspeicherung" }),
                /* @__PURE__ */ jsx("li", { children: "• Transparente Fraud-Algorithmen" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-3 bg-orange-50 rounded-lg border border-orange-200", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-800", children: "Device Fingerprinting Limits" }),
              /* @__PURE__ */ jsxs("ul", { className: "text-sm text-orange-700 mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx("li", { children: "• Keine persistente Device-IDs ohne Consent" }),
                /* @__PURE__ */ jsx("li", { children: "• Session-basierte Fingerprints bevorzugen" }),
                /* @__PURE__ */ jsx("li", { children: "• Canvas/WebGL Fingerprinting vermeiden" }),
                /* @__PURE__ */ jsx("li", { children: "• Browser-Einstellungen respektieren" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-purple-600 rounded-lg", children: /* @__PURE__ */ jsx(Fingerprint, { className: "w-5 h-5 text-white" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-purple-900", children: "🛡️ Smart Fraud Prevention ohne Überwachung" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700", children: "KI-basierte Betrugserkennung mit Privacy-by-Design" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-purple-100", children: [
                /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-sm mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(BarChart, { className: "w-4 h-4 text-green-600" }),
                  "Erfolgreiche Fraud-Detection ohne Tracking"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 text-center", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-green-600", children: "99.2%" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Echte Transaktionen erkannt" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-red-600", children: "0.8%" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "False Positives" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-purple-600", children: "€2.1M" }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Betrug verhindert (2024)" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-purple-100", children: [
                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-xs mb-2 text-green-700", children: "✅ Erlaubt ohne Einwilligung" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1 text-gray-600", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Transaktionsmuster-Analyse" }),
                    /* @__PURE__ */ jsx("li", { children: "• Länder-Plausibilitätsprüfung" }),
                    /* @__PURE__ */ jsx("li", { children: "• Geschwindigkeits-Checks" }),
                    /* @__PURE__ */ jsx("li", { children: "• Betrags-Anomalieerkennung" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-purple-100", children: [
                  /* @__PURE__ */ jsx("h6", { className: "font-semibold text-xs mb-2 text-orange-700", children: "⚠️ Nur mit Einwilligung" }),
                  /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1 text-gray-600", children: [
                    /* @__PURE__ */ jsx("li", { children: "• Device Fingerprinting" }),
                    /* @__PURE__ */ jsx("li", { children: "• Verhaltens-Tracking" }),
                    /* @__PURE__ */ jsx("li", { children: "• Cross-Site Correlation" }),
                    /* @__PURE__ */ jsx("li", { children: "• Browser-Historie" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 p-3 rounded-lg border border-green-200", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-green-600" }),
                  /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm text-green-800", children: "Privacy-First Ansatz" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-green-700", children: "Unsere Fraud-Detection analysiert nur notwendige Transaktionsdaten und verwendet pseudonymisierte Risk-Scores. Kunden-IDs werden gehasht, Device-Fingerprinting erfolgt nur mit expliziter Einwilligung." })
              ] })
            ] })
          ] })
        ] }) })
      ] })
    ] })
  ] });
  const renderCustomerRights = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-teal-600" }),
        "Kundenrechte-Management"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Implementieren Sie benutzerfreundliche Systeme für DSGVO-Betroffenenrechte, die Ihren Kunden volle Kontrolle über ihre Daten geben und gleichzeitig Ihren Shop-Betrieb unterstützen." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
      {
        right: "Auskunftsrecht",
        article: "Art. 15 DSGVO",
        description: "Umfassende Datenübersicht für Kunden",
        implementation: "Self-Service Portal mit Export-Funktion",
        timeframe: "1 Monat",
        icon: FileText,
        color: "blue"
      },
      {
        right: "Berichtigung",
        article: "Art. 16 DSGVO",
        description: "Korrektur falscher Kundendaten",
        implementation: "Inline-Bearbeitung im Kundenkonto",
        timeframe: "Unverzüglich",
        icon: FileCheck,
        color: "green"
      },
      {
        right: "Löschung",
        article: "Art. 17 DSGVO",
        description: "Recht auf Vergessenwerden",
        implementation: "Automatisierte Löschprozesse",
        timeframe: "Unverzüglich",
        icon: AlertTriangle,
        color: "red"
      },
      {
        right: "Portabilität",
        article: "Art. 20 DSGVO",
        description: "Datenübertragung zu anderen Anbietern",
        implementation: "Strukturierte JSON/CSV Exporte",
        timeframe: "1 Monat",
        icon: Download,
        color: "purple"
      }
    ].map((right, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "pb-3", children: [
        /* @__PURE__ */ jsx("div", { className: cn(
          "inline-flex p-3 rounded-lg mb-3",
          right.color === "blue" && "bg-blue-100 text-blue-700",
          right.color === "green" && "bg-green-100 text-green-700",
          right.color === "red" && "bg-red-100 text-red-700",
          right.color === "purple" && "bg-purple-100 text-purple-700"
        ), children: /* @__PURE__ */ jsx(right.icon, { className: "w-6 h-6" }) }),
        /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: right.right }),
        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "w-fit text-xs", children: right.article })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: right.description }),
        /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gray-50 rounded-lg", children: [
          /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-gray-800 mb-1", children: "Implementation:" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-700", children: right.implementation })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-gray-500" }),
          /* @__PURE__ */ jsxs("span", { className: "text-xs text-gray-600", children: [
            "Frist: ",
            right.timeframe
          ] })
        ] })
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(UserCheck, { className: "w-5 h-5 text-teal-600" }),
        "Customer Privacy Portal Excellence"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 bg-teal-600 rounded-lg", children: /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-teal-900", children: "🏆 Self-Service Privacy Excellence" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-teal-700", children: "Kunden lieben die volle Kontrolle über ihre Daten" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-teal-100 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-teal-600 mb-1", children: "94%" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Kundenzufriedenheit" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-teal-600", children: "mit Privacy Portal" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-teal-100 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600 mb-1", children: "<2min" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Datenexport" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600", children: "Durchschnittsdauer" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-teal-100 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600 mb-1", children: "87%" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "weniger Support" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-blue-600", children: "durch Self-Service" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-yellow-500" }),
              "Erfolgsgeschichte: FashionPlus Online"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-1 bg-blue-600 rounded text-white text-xs font-bold", children: "1" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "Problem: Überwältigender Support" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Täglich 200+ Anfragen für Datenauskunft und Löschung" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-1 bg-green-600 rounded text-white text-xs font-bold", children: "2" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "Lösung: Privacy Self-Service Portal" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Kunden können Daten einsehen, korrigieren und exportieren" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-1 bg-purple-600 rounded text-white text-xs font-bold", children: "3" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("p", { className: "font-semibold text-sm", children: "Ergebnis: 87% weniger Support-Tickets" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600", children: "Kundenvertrauen steigt, Compliance-Kosten sinken" })
                ] })
              ] })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Target, { className: "w-4 h-4 text-red-500" }),
              "Praxis-Umsetzung: TechMart Elektronik"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200", children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { className: "font-semibold text-sm", children: "Sofortige Datenauskunft" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between bg-white p-2 rounded border", children: [
                  /* @__PURE__ */ jsx("span", { children: "Bestellungen (5 Jahre):" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "JSON/CSV Export" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between bg-white p-2 rounded border", children: [
                  /* @__PURE__ */ jsx("span", { children: "Kommunikation:" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "E-Mail Archiv" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex justify-between bg-white p-2 rounded border", children: [
                  /* @__PURE__ */ jsx("span", { children: "Analytics (anonymisiert):" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Verhaltensdaten" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-3 p-2 bg-green-100 rounded", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3 text-green-600" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs font-semibold text-green-800", children: "Durchschnittliche Exportzeit: 47 Sekunden" })
              ] }) })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg border border-yellow-200", children: [
          /* @__PURE__ */ jsxs("h5", { className: "font-semibold text-sm mb-3 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Lightbulb, { className: "w-4 h-4 text-yellow-600" }),
            "Implementierungs-Tipp: Progressive Transparenz"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-yellow-800 mb-3", children: "Beginnen Sie mit einfachen Datenexporten und fügen Sie schrittweise erweiterte Features hinzu. Kunden schätzen die Transparenz und nutzen die Funktionen überraschend häufig." }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3 text-xs", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-2 rounded border", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Phase 1:" }),
              " Basis-Datenexport"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-2 rounded border", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Phase 2:" }),
              " Inline-Datenbearbeitung"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-2 rounded border", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Phase 3:" }),
              " Granulare Consent-Kontrolle"
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-2 rounded border", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "Phase 4:" }),
              " Privacy Dashboard Analytics"
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
  const renderImplementation = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Code, { className: "w-8 h-8 text-purple-600" }),
        "End-to-End Implementation Guide"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Komplette Implementierung einer DSGVO-konformen E-Commerce-Lösung mit modernen Web-Technologien und Privacy-by-Design Prinzipien." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      {
        phase: "Phase 1",
        title: "Privacy Foundation",
        duration: "2-3 Wochen",
        color: "blue",
        tasks: [
          "DSGVO-konforme Datenschutzerklärung",
          "Cookie Consent Management System",
          "Privacy Policy Generator",
          "Rechtsgrundlagen-Mapping"
        ]
      },
      {
        phase: "Phase 2",
        title: "Technical Implementation",
        duration: "3-4 Wochen",
        color: "green",
        tasks: [
          "Server-side Analytics Setup",
          "Payment Data Tokenization",
          "Customer Rights Portal",
          "Data Anonymization Pipeline"
        ]
      },
      {
        phase: "Phase 3",
        title: "Monitoring & Compliance",
        duration: "2-3 Wochen",
        color: "purple",
        tasks: [
          "Privacy Monitoring Dashboard",
          "Compliance Audit Tools",
          "Staff Training & Documentation",
          "Continuous Compliance Checks"
        ]
      }
    ].map((phase, index) => /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx("div", { className: cn(
          "inline-flex px-3 py-1 rounded-full text-xs font-medium mb-3",
          phase.color === "blue" && "bg-blue-100 text-blue-800",
          phase.color === "green" && "bg-green-100 text-green-800",
          phase.color === "purple" && "bg-purple-100 text-purple-800"
        ), children: phase.phase }),
        /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: phase.title }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
          /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4" }),
          /* @__PURE__ */ jsx("span", { children: phase.duration })
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: phase.tasks.map((task, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700", children: task })
      ] }, i)) }) })
    ] }, index)) }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Zap, { className: "w-5 h-5 text-yellow-600" }),
        "Complete E-Commerce Privacy Stack"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "p-2 bg-emerald-600 rounded-lg", children: /* @__PURE__ */ jsx(Zap, { className: "w-5 h-5 text-white" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-bold text-emerald-900", children: "🚀 Von Zero zu Privacy Hero in 90 Tagen" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-emerald-700", children: "Vollständige E-Commerce Privacy Transformation" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-emerald-100", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center mb-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-sm", children: "30" }) }),
                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-sm", children: "Tage 1-30: Foundation" })
                ] }),
                /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1 text-gray-600", children: [
                  /* @__PURE__ */ jsx("li", { children: "• Cookie Consent System" }),
                  /* @__PURE__ */ jsx("li", { children: "• Privacy Policy Generator" }),
                  /* @__PURE__ */ jsx("li", { children: "• Analytics Migration" }),
                  /* @__PURE__ */ jsx("li", { children: "• Team Training" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-emerald-100", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center mb-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-sm", children: "60" }) }),
                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-sm", children: "Tage 31-60: Advanced" })
                ] }),
                /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1 text-gray-600", children: [
                  /* @__PURE__ */ jsx("li", { children: "• Customer Rights Portal" }),
                  /* @__PURE__ */ jsx("li", { children: "• Payment Tokenization" }),
                  /* @__PURE__ */ jsx("li", { children: "• Data Minimization" }),
                  /* @__PURE__ */ jsx("li", { children: "• Automated Compliance" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-emerald-100", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center mb-2", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-2", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-sm", children: "90" }) }),
                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-sm", children: "Tage 61-90: Excellence" })
                ] }),
                /* @__PURE__ */ jsxs("ul", { className: "text-xs space-y-1 text-gray-600", children: [
                  /* @__PURE__ */ jsx("li", { children: "• AI-Powered Compliance" }),
                  /* @__PURE__ */ jsx("li", { children: "• Advanced Monitoring" }),
                  /* @__PURE__ */ jsx("li", { children: "• International Expansion" }),
                  /* @__PURE__ */ jsx("li", { children: "• Competitive Advantage" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Building2, { className: "w-4 h-4 text-blue-600" }),
                "Erfolgsgeschichte: SportGear Deutschland"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-6 h-6 text-white" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-bold text-blue-900", children: "+340% Conversion Rate Boost" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700", children: "Nach Privacy-First Umbau" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsx("div", { className: "bg-white p-3 rounded border border-blue-100", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Vorher (Cookie-Chaos):" }),
                    /* @__PURE__ */ jsx("span", { className: "text-red-600 font-bold", children: "2.1% CR" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "bg-white p-3 rounded border border-blue-100", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Nachher (Privacy Excellence):" }),
                    /* @__PURE__ */ jsx("span", { className: "text-green-600 font-bold", children: "7.3% CR" })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "bg-green-100 p-3 rounded border border-green-200", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-green-800", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Geheimtipp:" }),
                  " Kunden vertrauen Shops mit transparentem Privacy-Ansatz 3x mehr. Das führt zu höheren Conversion Rates und weniger Warenkorbabbrüchen."
                ] }) })
              ] }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("h4", { className: "font-semibold flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Rocket, { className: "w-4 h-4 text-purple-600" }),
                "Transformation: ModeWelt Online"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-200", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Euro, { className: "w-6 h-6 text-white" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-bold text-purple-900", children: "€2.8M Zusatzumsatz" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-700", children: "Durch Privacy-by-Design Implementierung" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-white p-2 rounded border border-purple-100", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "Cookie Consent Rate:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs text-green-600 font-bold", children: "94.2%" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-white p-2 rounded border border-purple-100", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "Customer Trust Score:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs text-blue-600 font-bold", children: "9.1/10" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between bg-white p-2 rounded border border-purple-100", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "Support Tickets:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs text-purple-600 font-bold", children: "-73%" })
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "bg-yellow-100 p-3 rounded border border-yellow-200", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-yellow-800", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Wichtiger Punkt:" }),
                  " Die Investition in Privacy Excellence amortisierte sich bereits nach 4 Monaten durch höhere Conversions und weniger Support-Aufwand."
                ] }) })
              ] }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4", children: "Deployment & Monitoring Checklist" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-800", children: "Pre-Launch" }),
              [
                "Privacy Impact Assessment durchgeführt",
                "Cookie Consent Banner getestet",
                "Analytics-Setup validiert",
                "Payment Security geprüft",
                "Customer Rights Portal funktional"
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
              ] }, i))
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-800", children: "Post-Launch Monitoring" }),
              [
                "Cookie Consent Rate überwachen",
                "Data Subject Requests bearbeiten",
                "Security Monitoring aktiv",
                "Compliance Audits regelmäßig",
                "Privacy Documentation aktuell"
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 text-blue-600" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
              ] }, i))
            ] })
          ] })
        ] })
      ] }) })
    ] })
  ] });
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "E-Commerce Privacy – Cookie Consent & DSGVO Online-Shop" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "DSGVO-konforme E-Commerce Lösungen: Advanced Cookie Consent, Zahlungsdaten-Sicherheit & Customer Analytics. 78% mehr Conversions durch Privacy-by-Design." }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://datenschutz-assistent.de/wissen/branchen/ecommerce-privacy" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("main", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 mb-6", children: [
            /* @__PURE__ */ jsx(ShoppingCart, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "E-Commerce Privacy Excellence" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: [
            "E-Commerce Privacy Excellence",
            /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent block mt-2", children: "DSGVO-konforme Online-Shops" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 mb-8", children: "Kompletter Leitfaden für datenschutzkonforme E-Commerce-Lösungen. Von Cookie-Consent über Payment-Security bis hin zu Customer Rights Management." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-orange-600 to-red-600 text-white hover:opacity-90 group", children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "mr-2 h-5 w-5" }),
              "Zurück zur Übersicht",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
            ] }) }),
            /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
              /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
              "E-Commerce Privacy Checkliste"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Card, { className: "mb-8", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold", children: "E-Commerce Privacy Compliance" }),
            /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700", children: "96% Complete" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-6 gap-4", children: [
            { label: "Cookie Consent", progress: 98 },
            { label: "Analytics", progress: 95 },
            { label: "Payment Security", progress: 97 },
            { label: "Customer Rights", progress: 94 },
            { label: "Data Protection", progress: 96 },
            { label: "Compliance", progress: 98 }
          ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-lg font-bold text-orange-600 mb-1", children: [
              item.progress,
              "%"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: item.label }),
            /* @__PURE__ */ jsx(Progress, { value: item.progress, className: "h-2 mt-2" })
          ] }, index)) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm mb-8", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide", children: navigationItems.map((item, index) => /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => {
              scrollToSection(item.id);
              setActiveSection(item.id);
            },
            className: cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
              activeSection === item.id ? "bg-orange-100 dark:bg-orange-950/50 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800" : "hover:bg-orange-50 dark:hover:bg-orange-950/30 hover:text-orange-700 dark:hover:text-orange-400",
              "border",
              activeSection === item.id ? "border-orange-200 dark:border-orange-800" : "border-transparent hover:border-orange-200 dark:hover:border-orange-800"
            ),
            children: [
              /* @__PURE__ */ jsx(item.icon, { className: cn(
                "h-4 w-4",
                activeSection === item.id && "text-orange-600 dark:text-orange-500"
              ) }),
              /* @__PURE__ */ jsx("span", { className: cn(
                "text-sm font-medium",
                activeSection === item.id && "text-orange-700 dark:text-orange-400"
              ), children: item.label })
            ]
          },
          item.id
        )) }) }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "mb-12 bg-white dark:bg-gray-900 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-xl font-bold mb-4 flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-gray-600" }),
            "Inhaltsverzeichnis"
          ] }),
          /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsx("ul", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: navigationItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
            "button",
            {
              onClick: () => scrollToSection(item.id),
              className: "text-left w-full px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors flex items-center gap-3 group",
              children: [
                /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4 text-gray-500 group-hover:text-orange-600 dark:group-hover:text-orange-400" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700 dark:text-gray-300 group-hover:text-orange-600 dark:group-hover:text-orange-400", children: item.label })
              ]
            }
          ) }, item.id)) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-20", children: [
          /* @__PURE__ */ jsxs("section", { id: "ueberblick", className: "space-y-8 scroll-mt-32", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "E-Commerce Datenschutz Überblick"
              }
            ),
            renderOverview()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "cookie-consent", className: "space-y-8 scroll-mt-32", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Cookie Consent Management"
              }
            ),
            renderCookieConsent()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "tracking-analytics", className: "space-y-8 scroll-mt-32", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Tracking & Analytics"
              }
            ),
            renderTrackingAnalytics()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "zahlungsdaten", className: "space-y-8 scroll-mt-32", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Zahlungsdaten & Sicherheit"
              }
            ),
            renderPaymentData()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "kundenrechte", className: "space-y-8 scroll-mt-32", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Kundenrechte nach DSGVO"
              }
            ),
            renderCustomerRights()
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
          /* @__PURE__ */ jsxs("section", { id: "implementation", className: "space-y-8 scroll-mt-32", children: [
            /* @__PURE__ */ jsx(
              motion.h2,
              {
                initial: { opacity: 0, x: -20 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.6 },
                className: "text-3xl font-bold mb-8",
                children: "Praktische Implementation"
              }
            ),
            renderImplementation()
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(Card, { className: "mt-12", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(ExternalLink, { className: "h-5 w-5 text-orange-600" }),
          "Weiterführende Ressourcen"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsx(Link, { to: "/wissen/rechtsprechung/cookie-law", className: "block", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-50 rounded-lg border border-orange-200 hover:border-orange-300 transition-colors", children: [
            /* @__PURE__ */ jsx(Gavel, { className: "h-5 w-5 text-orange-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Cookie Law Updates" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Aktuelle Rechtsprechung zu Cookies" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/compliance/dsgvo", className: "block", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-blue-50 rounded-lg border border-blue-200 hover:border-blue-300 transition-colors", children: [
            /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-blue-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "DSGVO Guide" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Umfassender DSGVO-Leitfaden" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/fintech-compliance", className: "block", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-purple-50 rounded-lg border border-purple-200 hover:border-purple-300 transition-colors", children: [
            /* @__PURE__ */ jsx(CreditCard, { className: "h-5 w-5 text-purple-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "FinTech Compliance" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Payment & Banking Compliance" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/wissen/krisenmanagement", className: "block", children: /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 rounded-lg border border-red-200 hover:border-red-300 transition-colors", children: [
            /* @__PURE__ */ jsx(AlertOctagon, { className: "h-5 w-5 text-red-600 mb-2" }),
            /* @__PURE__ */ jsx("div", { className: "font-medium", children: "Krisenmanagement" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Data Breach Response" })
          ] }) })
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: "fixed bottom-8 right-8 z-50 p-3 bg-orange-600 text-white rounded-full shadow-lg hover:bg-orange-700 transition-all opacity-90 hover:opacity-100",
        "aria-label": "Zurück nach oben",
        children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 rotate-[-90deg]" })
      }
    )
  ] });
};
export {
  EcommercePrivacyGuide as default
};
