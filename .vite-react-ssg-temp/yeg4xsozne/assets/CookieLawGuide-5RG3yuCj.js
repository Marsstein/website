import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { Home, ChevronRight, List, Cookie, Settings, Building2, CheckCircle2, ArrowLeft, Shield, Code, Target, Download, BarChart3, ArrowRight, Copy, Monitor, Zap, FileText, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
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
const CookieLawGuide = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [cookieExample, setCookieExample] = useState("essential");
  const [copySuccess, setCopySuccess] = useState("");
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  useEffect(() => {
    document.title = "Cookie Law Guide – DSGVO & ePrivacy konforme Lösungen";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Umfassender Cookie Compliance Guide: 4 Cookie-Kategorien, Einwilligungspflichten & praktische Umsetzung für DSGVO-Konformität. Jetzt informieren!");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Umfassender Cookie Compliance Guide: 4 Cookie-Kategorien, Einwilligungspflichten & praktische Umsetzung für DSGVO-Konformität. Jetzt informieren!";
      document.head.appendChild(meta);
    }
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", "https://marsstein.de/wissen/rechtsprechung/cookie-law-guide");
    } else {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://marsstein.de/wissen/rechtsprechung/cookie-law-guide";
      document.head.appendChild(link);
    }
    const ogTags = [
      { property: "og:title", content: "Cookie Law Guide – DSGVO & ePrivacy konforme Lösungen" },
      { property: "og:description", content: "Umfassender Cookie Compliance Guide: 4 Cookie-Kategorien, Einwilligungspflichten & praktische Umsetzung für DSGVO-Konformität." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://marsstein.de/wissen/rechtsprechung/cookie-law-guide" }
    ];
    ogTags.forEach((tag) => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (existingTag) {
        existingTag.setAttribute("content", tag.content);
      } else {
        const meta = document.createElement("meta");
        meta.setAttribute("property", tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: "Cookie Law Compliance Guide",
      description: "Rechtlicher Leitfaden für Cookie-Compliance nach DSGVO und ePrivacy-Richtlinie mit praktischen Beispielen.",
      datePublished: "2024-01-01",
      dateModified: (/* @__PURE__ */ new Date()).toISOString(),
      author: {
        "@type": "Organization",
        name: "MarsStein"
      },
      publisher: {
        "@type": "Organization",
        name: "MarsStein",
        logo: {
          "@type": "ImageObject",
          url: "https://marsstein.de/logo.png"
        }
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://marsstein.de/wissen/rechtsprechung/cookie-law-guide"
      }
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    return () => {
      const scriptTag = document.querySelector('script[type="application/ld+json"]');
      if (scriptTag) {
        scriptTag.remove();
      }
    };
  }, []);
  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(type);
      setTimeout(() => setCopySuccess(""), 2e3);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  const cookieCategories = [
    {
      id: "essential",
      name: "Erforderliche Cookies",
      description: "Technisch notwendige Cookies für Website-Funktionalität",
      icon: Shield,
      color: "from-green-500 to-emerald-500",
      consent: "Keine Einwilligung erforderlich",
      examples: [
        "Session-IDs",
        "CSRF-Tokens",
        "Login-Status",
        "Warenkorb-Inhalt",
        "Language Preferences"
      ],
      legalBasis: "Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO)",
      retention: "Session oder bis zu 1 Jahr",
      thirdParty: false
    },
    {
      id: "functional",
      name: "Funktionale Cookies",
      description: "Cookies für erweiterte Website-Funktionen und Personalisierung",
      icon: Settings,
      color: "from-blue-500 to-indigo-500",
      consent: "Einwilligung erforderlich",
      examples: [
        "Benutzereinstellungen",
        "Theme-Präferenzen",
        "Gespeicherte Formulardaten",
        "Chat-Funktionen",
        "Video-Player Einstellungen"
      ],
      legalBasis: "Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)",
      retention: "6 Monate bis 2 Jahre",
      thirdParty: false
    },
    {
      id: "analytics",
      name: "Analyse Cookies",
      description: "Cookies zur Analyse des Nutzerverhaltens und Website-Performance",
      icon: BarChart3,
      color: "from-purple-500 to-pink-500",
      consent: "Einwilligung erforderlich",
      examples: [
        "Google Analytics",
        "Matomo Tracking",
        "Heatmap-Tools",
        "A/B Testing",
        "Performance Monitoring"
      ],
      legalBasis: "Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)",
      retention: "13-26 Monate",
      thirdParty: true
    },
    {
      id: "marketing",
      name: "Marketing Cookies",
      description: "Cookies für Werbung, Tracking und personalisierte Inhalte",
      icon: Target,
      color: "from-orange-500 to-red-500",
      consent: "Einwilligung erforderlich",
      examples: [
        "Facebook Pixel",
        "Google Ads",
        "Retargeting Pixel",
        "Social Media Buttons",
        "Newsletter Tracking"
      ],
      legalBasis: "Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)",
      retention: "90 Tage bis 2 Jahre",
      thirdParty: true
    }
  ];
  const recentRulings = [
    {
      date: "2024",
      court: "EuGH",
      case: "Real Cookie Banner",
      ruling: "Voreingestellte Häkchen bei nicht-essentiellen Cookies sind unzulässig",
      impact: "HOCH",
      fineAmount: null,
      implications: [
        "Opt-in muss aktiv erfolgen",
        "Keine vorausgewählten Checkboxen",
        "Ablehnung muss so einfach sein wie Zustimmung",
        "Granulare Auswahl erforderlich"
      ]
    },
    {
      date: "2023",
      court: "BGH",
      case: "Cookie-Banner Urteil",
      ruling: "Cookie-Banner müssen alle Optionen gleichwertig darstellen",
      impact: "HOCH",
      fineAmount: null,
      implications: [
        "Gleiche Sichtbarkeit für Akzeptieren/Ablehnen",
        "Keine irreführenden Designs",
        "Klare Kategorisierung erforderlich",
        "Einfache Widerrufsmöglichkeit"
      ]
    },
    {
      date: "2023",
      court: "DSK",
      case: "E-Privacy Orientierungshilfe",
      ruling: "Neue Leitlinien für Cookie-Einwilligungen",
      impact: "MITTEL",
      fineAmount: null,
      implications: [
        "Spezifische Anforderungen an Consent Manager",
        "Dokumentationspflichten verschärft",
        "Cookie-Scanning obligatorisch",
        "Regelmäßige Aktualisierung erforderlich"
      ]
    },
    {
      date: "2022",
      court: "CNIL",
      case: "Google/Facebook Strafe",
      ruling: "€210 Mio. Strafe wegen Cookie-Verstößen",
      impact: "KRITISCH",
      fineAmount: "€210 Millionen",
      implications: [
        "Massive Strafen für Cookie-Verstöße möglich",
        "Internationale Verfolgung von Verstößen",
        "Consent-Management wird prioritär geprüft",
        "Dark Patterns führen zu hohen Strafen"
      ]
    }
  ];
  const implementationSteps = [
    {
      phase: "Vorbereitung & Analyse",
      duration: "1-2 Wochen",
      priority: "HOCH",
      color: "from-blue-500 to-indigo-500",
      tasks: [
        "Cookie-Audit der bestehenden Website durchführen",
        "Kategorisierung aller eingesetzten Cookies",
        "Rechtliche Grundlagen für jeden Cookie prüfen",
        "Drittanbieter-Services und deren Cookies identifizieren",
        "Datenflüsse dokumentieren"
      ]
    },
    {
      phase: "Consent Management System",
      duration: "2-3 Wochen",
      priority: "KRITISCH",
      color: "from-purple-500 to-pink-500",
      tasks: [
        "CMP-Anbieter auswählen (OneTrust, Cookiebot, etc.)",
        "Cookie-Banner rechtssicher konfigurieren",
        "Granulare Einwilligungsoptionen implementieren",
        "Widerrufsmöglichkeiten einrichten",
        "Mobile Optimierung sicherstellen"
      ]
    },
    {
      phase: "Technische Implementierung",
      duration: "1-2 Wochen",
      priority: "HOCH",
      color: "from-emerald-500 to-teal-500",
      tasks: [
        "Cookie-Scripts in CMP integrieren",
        "Tracking nur nach Einwilligung aktivieren",
        "Fallback-Lösungen für abgelehnte Cookies",
        "Performance-Optimierung durchführen",
        "Cross-Browser Kompatibilität testen"
      ]
    },
    {
      phase: "Dokumentation & Compliance",
      duration: "1 Woche",
      priority: "MITTEL",
      color: "from-orange-500 to-red-500",
      tasks: [
        "Cookie-Policy aktualisieren",
        "Datenschutzerklärung anpassen",
        "Verarbeitungsverzeichnis erweitern",
        "Schulungsunterlagen für Teams erstellen",
        "Compliance-Monitoring einrichten"
      ]
    },
    {
      phase: "Testing & Launch",
      duration: "1 Woche",
      priority: "KRITISCH",
      color: "from-red-500 to-pink-500",
      tasks: [
        "Umfassendes Testing auf allen Devices",
        "User Experience Optimierung",
        "Legal Review der finalen Implementierung",
        "Soft Launch mit ausgewählten Nutzern",
        "Full Rollout nach erfolgreichen Tests"
      ]
    }
  ];
  const codeExamples = {
    essential: {
      title: "Erforderliche Cookies - Implementierung",
      code: `<!-- Session Cookie (Server-side) -->
<?php
// Sichere Session-Konfiguration
ini_set('session.cookie_httponly', 1);
ini_set('session.cookie_secure', 1);
ini_set('session.cookie_samesite', 'Strict');
session_start();
?>

<!-- JavaScript für lokale Einstellungen -->
<script>
// Sichere localStorage Alternative
function setSecureSetting(key, value) {
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem('essential_' + key, value);
  }
}

// CSRF Token handling
function getCSRFToken() {
  let token = document.querySelector('meta[name="csrf-token"]');
  return token ? token.getAttribute('content') : null;
}
<\/script>`
    },
    functional: {
      title: "Funktionale Cookies - Mit Einwilligung",
      code: `<!-- Consent-abhängige Funktionen -->
<script>
function initFunctionalFeatures() {
  // Prüfe Einwilligung
  if (hasConsent('functional')) {
    // Theme Preference
    applyUserTheme();
    
    // Saved Form Data
    restoreFormData();
    
    // Chat Widget
    initChatWidget();
  }
}

function hasConsent(category) {
  // Integration mit Consent Management Platform
  return window.CookieConsent && 
         window.CookieConsent.hasConsent(category);
}

// Event Listener für Consent Changes
document.addEventListener('cookie_consent_update', function(e) {
  if (e.detail.functional) {
    initFunctionalFeatures();
  } else {
    removeFunctionalCookies();
  }
});
<\/script>`
    },
    analytics: {
      title: "Analytics Cookies - Google Analytics 4",
      code: `<!-- GA4 mit Consent Management -->
<script>
function initAnalytics() {
  if (hasConsent('analytics')) {
    // GA4 Configuration
    gtag('config', 'GA_MEASUREMENT_ID', {
      'anonymize_ip': true,
      'cookie_flags': 'SameSite=Strict;Secure',
      'cookie_expires': 63072000, // 2 Jahre
    });
    
    // Consent Mode V2
    gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  } else {
    // Analytics ohne Cookies
    gtag('config', 'GA_MEASUREMENT_ID', {
      'client_storage': 'none',
      'anonymize_ip': true
    });
  }
}

// Consent Default
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied'
});
<\/script>`
    },
    marketing: {
      title: "Marketing Cookies - Facebook Pixel",
      code: `<!-- Facebook Pixel mit Consent -->
<script>
function initMarketingPixels() {
  if (hasConsent('marketing')) {
    // Facebook Pixel Standard
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window,document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    
    fbq('init', 'YOUR_PIXEL_ID');
    fbq('track', 'PageView');
    
    // Retargeting Pixel
    initRetargetingPixel();
  }
}

function removeMarketingCookies() {
  // Alle Marketing Cookies löschen
  document.cookie.split(";").forEach(function(c) { 
    if (c.trim().startsWith('_fb') || 
        c.trim().startsWith('_gcl')) {
      document.cookie = c.replace(/^ +/, "").replace(/=.*/, 
        "=;expires=" + new Date().toUTCString() + ";path=/");
    }
  });
}
<\/script>`
    }
  };
  const bestPractices = [
    {
      category: "Banner Design",
      icon: Monitor,
      practices: [
        "Akzeptieren und Ablehnen gleich prominent darstellen",
        "Keine irreführenden Farben oder Buttons",
        "Mobile-first Design für alle Geräte",
        "Barrierefreie Bedienung sicherstellen",
        "Layer-by-layer Information bereitstellen"
      ]
    },
    {
      category: "Consent Management",
      icon: Settings,
      practices: [
        "Granulare Kontrolle über Cookie-Kategorien",
        "Einfache Widerrufsmöglichkeit",
        "Consent-Historie dokumentieren",
        "Regelmäßige Re-Consent Mechanismen",
        "Cross-Device Consent Synchronisation"
      ]
    },
    {
      category: "Performance",
      icon: Zap,
      practices: [
        "Asynchrones Laden von Tracking-Scripts",
        "Minimale Auswirkung auf Page Speed",
        "Fallback für geblockte Cookies",
        "Efficient Cookie Storage Management",
        "Reduced Third-Party Dependencies"
      ]
    },
    {
      category: "Dokumentation",
      icon: FileText,
      practices: [
        "Vollständige Cookie-Dokumentation",
        "Regelmäßige Cookie-Audits",
        "Versionierung der Cookie-Policy",
        "Compliance Monitoring Dashboard",
        "Audit Trail für alle Änderungen"
      ]
    }
  ];
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("nav", { className: "bg-slate-900/80 backdrop-blur-sm border-b border-slate-700/50 px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs("ol", { className: "flex items-center py-3 text-sm", children: [
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "text-slate-400 hover:text-blue-400 transition-colors flex items-center", children: [
        /* @__PURE__ */ jsx(Home, { className: "h-4 w-4 mr-1" }),
        "Home"
      ] }) }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 mx-2 text-slate-600" }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen", className: "text-slate-400 hover:text-blue-400 transition-colors", children: "Wissen" }) }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 mx-2 text-slate-600" }),
      /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/rechtsprechung", className: "text-slate-400 hover:text-blue-400 transition-colors", children: "Rechtsprechung" }) }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 mx-2 text-slate-600" }),
      /* @__PURE__ */ jsx("li", { className: "text-blue-400 font-semibold", children: "Cookie Law Guide" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8", children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/60 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
        /* @__PURE__ */ jsx(List, { className: "h-5 w-5 text-blue-400" }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold text-white", children: "Inhaltsverzeichnis" })
      ] }),
      /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#cookie-overview", className: "text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Cookie, { className: "h-4 w-4" }),
          "Cookie Kategorien Überblick"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#legal-requirements", className: "text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4" }),
          "Rechtliche Anforderungen"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#implementation-guide", className: "text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4" }),
          "Implementierungs-Leitfaden"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#case-law", className: "text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4" }),
          "Wichtige Urteile"
        ] }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#best-practices", className: "text-slate-300 hover:text-blue-400 transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }),
          "Best Practices"
        ] }) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-full blur-3xl animate-pulse" }),
      /* @__PURE__ */ jsx("div", { className: "absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse", style: { animationDelay: "2s" } }),
      /* @__PURE__ */ jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 rounded-full blur-3xl animate-spin-slow" })
    ] }),
    /* @__PURE__ */ jsx(
      motion.section,
      {
        id: "cookie-overview",
        ref: heroRef,
        style: { y, opacity },
        className: "relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-mt-24",
        children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl relative z-10", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.6 },
              className: "mb-8",
              children: /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "border-blue-500/30 text-blue-300 hover:bg-blue-500/10", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/rechtsprechung", className: "flex items-center gap-2", children: [
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
                    className: "inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20",
                    children: [
                      /* @__PURE__ */ jsx(Cookie, { className: "h-5 w-5 text-blue-400 animate-bounce" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-blue-300", children: "Cookie Law Guide" }),
                      /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-green-400" })
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
                      /* @__PURE__ */ jsx("span", { className: "text-white", children: "Cookie" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent", children: "Rechtsprechung" }),
                      /* @__PURE__ */ jsx("br", {}),
                      /* @__PURE__ */ jsx("span", { className: "text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-slate-400 to-slate-200 bg-clip-text text-transparent", children: "& Compliance" })
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
                      "Umfassender Leitfaden zur aktuellen Cookie-Rechtsprechung und",
                      /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-300", children: " rechtssicheren Implementierung" })
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
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-green-500/20 text-green-300 border-green-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }),
                        "Aktuelle Rechtsprechung"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Code, { className: "h-4 w-4 mr-2" }),
                        "Code-Beispiele"
                      ] }),
                      /* @__PURE__ */ jsxs(Badge, { className: "bg-purple-500/20 text-purple-300 border-purple-500/30 px-4 py-2", children: [
                        /* @__PURE__ */ jsx(Target, { className: "h-4 w-4 mr-2" }),
                        "Best Practices"
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
    /* @__PURE__ */ jsx("section", { id: "legal-requirements", className: "py-16 px-4 sm:px-6 lg:px-8 scroll-mt-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "mb-12",
          children: /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-6 bg-slate-800/60 backdrop-blur-sm p-2 rounded-xl", children: [
            /* @__PURE__ */ jsx(TabsTrigger, { value: "overview", className: "data-[state=active]:bg-blue-500 data-[state=active]:text-white", children: "Überblick" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "categories", className: "data-[state=active]:bg-blue-500 data-[state=active]:text-white", children: "Cookie-Arten" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "rulings", className: "data-[state=active]:bg-blue-500 data-[state=active]:text-white", children: "Rechtsprechung" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "implementation", className: "data-[state=active]:bg-blue-500 data-[state=active]:text-white", children: "Umsetzung" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "code", className: "data-[state=active]:bg-blue-500 data-[state=active]:text-white", children: "Code-Beispiele" }),
            /* @__PURE__ */ jsx(TabsTrigger, { value: "best-practices", className: "data-[state=active]:bg-blue-500 data-[state=active]:text-white", children: "Best Practices" })
          ] })
        }
      ),
      /* @__PURE__ */ jsx(TabsContent, { value: "overview", className: "space-y-8", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-blue-500/30", children: /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-6", children: "Cookie-Rechtsprechung Überblick" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4 text-slate-300 leading-relaxed", children: [
                /* @__PURE__ */ jsx("p", { children: "Die Cookie-Rechtsprechung hat sich in den letzten Jahren dramatisch entwickelt. Von der ursprünglich lockeren Handhabung hin zu strengen Einwilligungsanforderungen und hohen Bußgeldern für Verstöße." }),
                /* @__PURE__ */ jsx("p", { children: "Aktuelle Urteile vom EuGH, BGH und nationalen Datenschutzbehörden haben klare Standards gesetzt: Echte Einwilligung, granulare Kontrolle und transparente Information sind nicht mehr optional." }),
                /* @__PURE__ */ jsx("p", { children: "Dieser Leitfaden bietet Ihnen eine umfassende Übersicht über die aktuelle Rechtslage, praktische Implementierungshilfen und bewährte Methoden für Cookie-Compliance." })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl p-6", children: [
                /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-white mb-4", children: "Wichtige Fakten" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3 text-sm", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Letzte Updates:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "2024" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Höchste Strafe:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "€210 Mio." })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Betroffene Sites:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "95%+" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400", children: "Compliance Rate:" }),
                    /* @__PURE__ */ jsx("span", { className: "text-white font-semibold", children: "~30%" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-blue-500 to-indigo-500 text-white", children: [
                /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 mr-2" }),
                "Compliance Checkliste"
              ] }) })
            ] })
          ] }) }) })
        }
      ) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "categories", className: "space-y-8", children: /* @__PURE__ */ jsx("div", { className: "grid gap-8", children: cookieCategories.map((category, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          className: "group",
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300", children: /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-6", children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "p-4 rounded-2xl bg-gradient-to-r shadow-lg flex-shrink-0",
              category.color
            ), children: /* @__PURE__ */ jsx(category.icon, { className: "h-8 w-8 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: category.name }),
                /* @__PURE__ */ jsx(Badge, { className: cn(
                  "text-xs",
                  category.consent === "Keine Einwilligung erforderlich" ? "bg-green-500/20 text-green-300" : "bg-orange-500/20 text-orange-300"
                ), children: category.consent })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: category.description }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-3", children: "Beispiele:" }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: category.examples.map((example, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-blue-400 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: example })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400 text-sm", children: "Rechtsgrundlage:" }),
                    /* @__PURE__ */ jsx("p", { className: "text-white font-semibold", children: category.legalBasis })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400 text-sm", children: "Speicherdauer:" }),
                    /* @__PURE__ */ jsx("p", { className: "text-white font-semibold", children: category.retention })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "text-slate-400 text-sm", children: "Drittanbieter:" }),
                    /* @__PURE__ */ jsx("p", { className: cn(
                      "font-semibold",
                      category.thirdParty ? "text-orange-300" : "text-green-300"
                    ), children: category.thirdParty ? "Ja" : "Nein" })
                  ] })
                ] })
              ] })
            ] })
          ] }) }) })
        },
        category.id
      )) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "rulings", className: "space-y-8", children: /* @__PURE__ */ jsx("div", { id: "case-law", className: "scroll-mt-24", children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: recentRulings.map((ruling, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx(Badge, { className: "bg-blue-500/20 text-blue-300", children: ruling.date }),
                /* @__PURE__ */ jsx(Badge, { className: "bg-purple-500/20 text-purple-300", children: ruling.court }),
                /* @__PURE__ */ jsx(Badge, { className: cn(
                  "text-xs",
                  ruling.impact === "KRITISCH" ? "bg-red-500/20 text-red-300" : ruling.impact === "HOCH" ? "bg-orange-500/20 text-orange-300" : "bg-yellow-500/20 text-yellow-300"
                ), children: ruling.impact })
              ] }),
              ruling.fineAmount && /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm text-slate-400", children: "Strafe" }),
                /* @__PURE__ */ jsx("div", { className: "text-xl font-bold text-red-400", children: ruling.fineAmount })
              ] })
            ] }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-2", children: ruling.case }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: ruling.ruling }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "text-lg font-semibold text-white mb-3", children: "Praktische Auswirkungen:" }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-3", children: ruling.implications.map((implication, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: implication })
              ] }, idx)) })
            ] })
          ] }) })
        },
        index
      )) }) }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "implementation", className: "space-y-8", children: /* @__PURE__ */ jsxs("div", { id: "implementation-guide", className: "scroll-mt-24", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "mb-8",
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-blue-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white mb-6 text-center", children: "Cookie Compliance Roadmap" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 text-center", children: "Schritt-für-Schritt Plan zur rechtssicheren Cookie-Implementierung" })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "space-y-8", children: implementationSteps.map((step, index) => /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: index * 0.1, duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-6", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-400", children: String(index + 1).padStart(2, "0") }),
                /* @__PURE__ */ jsx("div", { className: cn(
                  "px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r text-white",
                  step.color
                ), children: step.priority }),
                /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-white", children: step.phase }),
                /* @__PURE__ */ jsx(Badge, { className: "bg-slate-600 text-slate-200 ml-auto", children: step.duration })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: step.tasks.map((task, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-4 bg-slate-700/30 rounded-lg", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-slate-300", children: task })
              ] }, idx)) })
            ] }) })
          },
          index
        )) })
      ] }) }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "code", className: "space-y-8", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            className: "mb-8",
            children: /* @__PURE__ */ jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsx("div", { className: "flex bg-slate-800/60 backdrop-blur-sm rounded-xl p-2", children: Object.entries(codeExamples).map(([key, example]) => {
              var _a;
              return /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => setCookieExample(key),
                  className: cn(
                    "px-4 py-2 rounded-lg font-semibold transition-all duration-300",
                    cookieExample === key ? "bg-blue-500 text-white" : "text-slate-300 hover:text-blue-300"
                  ),
                  children: (_a = cookieCategories.find((c) => c.id === key)) == null ? void 0 : _a.name
                },
                key
              );
            }) }) })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { duration: 0.6 },
            children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-blue-500/30", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0", children: [
              /* @__PURE__ */ jsx("div", { className: "p-6 border-b border-slate-700", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: codeExamples[cookieExample].title }),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "sm",
                    onClick: () => handleCopy(
                      codeExamples[cookieExample].code,
                      cookieExample
                    ),
                    className: "bg-blue-500 hover:bg-blue-600",
                    children: [
                      /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4 mr-2" }),
                      copySuccess === cookieExample ? "Kopiert!" : "Kopieren"
                    ]
                  }
                )
              ] }) }),
              /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsx("pre", { className: "bg-slate-900 rounded-lg p-6 overflow-x-auto", children: /* @__PURE__ */ jsx("code", { className: "text-slate-300 text-sm", children: codeExamples[cookieExample].code }) }) })
            ] }) })
          }
        )
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "best-practices", className: "space-y-8", children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-8", children: bestPractices.map((practice, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          className: "group",
          children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
              /* @__PURE__ */ jsx("div", { className: "p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500", children: /* @__PURE__ */ jsx(practice.icon, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white", children: practice.category })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: practice.practices.map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-blue-400 mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "text-slate-300 text-sm", children: item })
            ] }, idx)) })
          ] }) })
        },
        index
      )) }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { id: "best-practices", className: "py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 via-blue-900/30 to-slate-800/50 scroll-mt-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center mb-16",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent", children: "Tools & Ressourcen" }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-slate-300", children: "Praktische Hilfsmittel für Ihre Cookie-Compliance" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-8", children: [
        {
          title: "Cookie Scanner",
          description: "Automatische Analyse aller Cookies auf Ihrer Website",
          icon: Search,
          link: "/tools/cookie-scanner",
          color: "from-blue-500 to-indigo-500"
        },
        {
          title: "CMP Vergleich",
          description: "Detaillierter Vergleich von Consent Management Plattformen",
          icon: BarChart3,
          link: "/tools/cmp-comparison",
          color: "from-emerald-500 to-teal-500"
        },
        {
          title: "Compliance Checker",
          description: "Prüfung Ihrer Cookie-Implementierung auf Rechtssicherheit",
          icon: Shield,
          link: "/tools/compliance-checker",
          color: "from-orange-500 to-red-500"
        }
      ].map((tool, index) => /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { delay: index * 0.1, duration: 0.6 },
          whileHover: { y: -5 },
          className: "group",
          children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("div", { className: cn(
              "inline-flex p-3 rounded-xl bg-gradient-to-r mb-4",
              tool.color
            ), children: /* @__PURE__ */ jsx(tool.icon, { className: "h-6 w-6 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors", children: tool.title }),
            /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-6", children: tool.description }),
            /* @__PURE__ */ jsx(Button, { asChild: true, className: cn(
              "w-full bg-gradient-to-r text-white",
              tool.color
            ), children: /* @__PURE__ */ jsxs(Link, { to: tool.link, className: "flex items-center justify-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { children: "Tool öffnen" }),
              /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
            ] }) })
          ] }) })
        },
        index
      )) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.6 },
          className: "text-center mb-12",
          children: [
            /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "Verwandte" }),
              " ",
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent", children: "Themen" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-lg text-slate-300", children: "Weitere wichtige Datenschutz-Themen für Ihre Website" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: 0.1, duration: 0.6 },
            whileHover: { y: -5 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 mb-4", children: /* @__PURE__ */ jsx(Building2, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 text-white", children: "Planet49 Cookie-Urteil" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Wegweisendes EuGH-Urteil zu Cookie-Einwilligungen und Pre-Ticked Checkboxen." }),
              /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "w-full", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/rechtsprechung/planet49-cookie-case", children: [
                "Mehr erfahren",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: 0.2, duration: 0.6 },
            whileHover: { y: -5 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 mb-4", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 text-white", children: "DSGVO Grundlagen" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Umfassender Leitfaden zu den wichtigsten DSGVO-Anforderungen und Pflichten." }),
              /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "w-full", children: /* @__PURE__ */ jsxs(Link, { to: "/wissen/dsgvo-grundlagen", children: [
                "Mehr erfahren",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] }) })
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 30 },
            whileInView: { opacity: 1, y: 0 },
            transition: { delay: 0.3, duration: 0.6 },
            whileHover: { y: -5 },
            children: /* @__PURE__ */ jsx(Card, { className: "h-full bg-slate-800/60 backdrop-blur-sm border-slate-700/50 hover:shadow-xl transition-all duration-300", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
              /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 mb-4", children: /* @__PURE__ */ jsx(Cookie, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-2 text-white", children: "Cookie Management Tool" }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-300 mb-4", children: "Professionelle Lösung für rechtskonforme Cookie-Einwilligung auf Ihrer Website." }),
              /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", className: "w-full", children: /* @__PURE__ */ jsxs(Link, { to: "/cookie-management-tool", children: [
                "Mehr erfahren",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] }) })
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  CookieLawGuide as default
};
