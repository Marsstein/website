import { jsxs, jsx } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Plane, MapPin, Globe, Shield, ArrowRight, FileText, Calendar, CreditCard, Star, Database, Activity, CheckSquare, TrendingUp, CheckCircle, AlertTriangle, Lock, Building, Square, UserCheck, ChevronRight, ExternalLink } from "lucide-react";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { B as Breadcrumb, a as BreadcrumbList, b as BreadcrumbItem, c as BreadcrumbLink, d as BreadcrumbSeparator, e as BreadcrumbPage } from "./breadcrumb-DSl7nM0Z.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-progress";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const TravelComplianceGuide = () => {
  const heroRef = useRef(null);
  const [activeSection, setActiveSection] = useState("overview");
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [expandedScenarios, setExpandedScenarios] = useState(/* @__PURE__ */ new Set());
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const navigationItems = [
    { id: "overview", label: "Überblick", icon: Shield },
    { id: "booking-data", label: "Buchungsdaten", icon: Calendar },
    { id: "standortverfolgung", label: "Location Tracking", icon: MapPin },
    { id: "zahlungs-compliance", label: "Payment Compliance", icon: CreditCard },
    { id: "grenzueberschreitende-daten", label: "Cross-Border Data", icon: Globe },
    { id: "bewertungen", label: "Bewertungen", icon: Star },
    { id: "implementierung", label: "Implementierung", icon: Database },
    { id: "praxis-szenarien", label: "Praxis-Szenarien", icon: Activity },
    { id: "checkliste", label: "Checkliste", icon: CheckSquare },
    { id: "ressourcen", label: "Ressourcen", icon: FileText }
  ];
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 120;
      const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
      window.history.pushState(null, "", `#${sectionId}`);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      setShowScrollTop(window.scrollY > 500);
      for (const item of navigationItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          const adjustedTop = top + window.scrollY - 150;
          const adjustedBottom = bottom + window.scrollY - 150;
          if (scrollPosition >= adjustedTop && scrollPosition < adjustedBottom) {
            setActiveSection(item.id);
            const currentHash = window.location.hash.slice(1);
            if (currentHash !== item.id) {
              window.history.replaceState(null, "", `#${item.id}`);
            }
            break;
          }
        }
      }
    };
    const handleInitialHash = () => {
      const hash = window.location.hash.slice(1);
      if (hash && navigationItems.find((item) => item.id === hash)) {
        setTimeout(() => scrollToSection(hash), 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("hashchange", handleInitialHash);
    handleScroll();
    handleInitialHash();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleInitialHash);
    };
  }, []);
  const toggleCheckedItem = (itemId) => {
    setCheckedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };
  const toggleScenario = (scenarioId) => {
    setExpandedScenarios((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(scenarioId)) {
        newSet.delete(scenarioId);
      } else {
        newSet.add(scenarioId);
      }
      return newSet;
    });
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-white dark:bg-gray-950", children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Travel Compliance DSGVO - Datenschutz für Reiseplattformen",
        description: "DSGVO-konforme Lösungen für Travel & Tourism: ✓ Buchungsdaten ✓ Location Tracking ✓ Payment Compliance. Jetzt Guide lesen!",
        canonical: "/wissen/branchen/travel-compliance",
        keywords: "Travel Compliance, DSGVO Reisebranche, Tourism DSGVO, Buchungsplattform Datenschutz, Location Tracking DSGVO, Payment Compliance Travel, PCI DSS Tourism, Cross-Border Data Transfer",
        structuredData: {
          "@context": "https://schema.org",
          "@type": "Guide",
          "name": "DSGVO-Compliance Guide für Travel & Tourism Plattformen",
          "description": "Umfassender Guide zur DSGVO-Compliance in der Reise- und Tourismusbranche mit praktischen Implementierungsbeispielen.",
          "audience": {
            "@type": "Audience",
            "audienceType": "Travel Tech Companies, Booking Platforms, Tourism Operators"
          },
          "keywords": "Travel Compliance, DSGVO, Tourism, Datenschutz, Location Tracking, Payment Compliance",
          "publisher": {
            "@type": "Organization",
            "name": "Marsstein",
            "url": "https://marsstein.com"
          },
          "datePublished": "2024-01-15",
          "dateModified": (/* @__PURE__ */ new Date()).toISOString()
        }
      }
    ),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("div", { className: "container px-4 py-4", children: /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { href: "/", children: "Home" }) }),
      /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { href: "/wissen", children: "Wissen" }) }),
      /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { href: "/wissen/branchen", children: "Branchen" }) }),
      /* @__PURE__ */ jsx(BreadcrumbSeparator, {}),
      /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { children: "Travel Compliance" }) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative py-20 md:py-28 overflow-hidden", children: [
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 -z-10", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-teal-500/10 rounded-full blur-3xl animate-pulse" }),
        /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" })
      ] }),
      /* @__PURE__ */ jsx(motion.div, { style: { y, opacity }, className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-5xl mx-auto text-center", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsx(Badge, { className: "mb-4 bg-gradient-to-r from-teal-600 to-cyan-600 text-white", children: "Travel & Tourism Compliance" }),
            /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent", children: "DSGVO-Compliance für Travel & Tourism Plattformen" }),
            /* @__PURE__ */ jsx("p", { className: "text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed", children: "Von Buchungsplattformen bis Location-Based Services: Meistern Sie die Datenschutz-Herausforderungen der Reisebranche mit unseren praxiserprobten Lösungen." }),
            /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8", children: [
              { icon: Plane, label: "Booking Platforms", value: "2.5M+" },
              { icon: MapPin, label: "Location Data Points", value: "500M+" },
              { icon: Globe, label: "Länder Compliance", value: "195+" },
              { icon: Shield, label: "DSGVO konform", value: "100%" }
            ].map((stat, index) => /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: index * 0.1, duration: 0.5 },
                className: "bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-lg p-4 shadow-lg",
                children: [
                  /* @__PURE__ */ jsx(stat.icon, { className: "h-8 w-8 mx-auto mb-2 text-teal-600" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xl md:text-2xl font-bold text-gray-900 dark:text-white", children: stat.value }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs md:text-sm text-gray-600 dark:text-gray-400", children: stat.label })
                ]
              },
              index
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "lg",
                  className: "bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-base md:text-lg min-h-[48px] px-6",
                  onClick: () => scrollToSection("overview"),
                  "aria-label": "Zum Compliance Guide navigieren",
                  children: [
                    "Compliance Guide starten",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  className: "border-teal-600 text-teal-600 hover:bg-teal-50 dark:hover:bg-teal-950 text-base md:text-lg min-h-[48px] px-6",
                  "aria-label": "Travel Compliance Whitepaper herunterladen",
                  children: [
                    /* @__PURE__ */ jsx(FileText, { className: "mr-2 h-5 w-5" }),
                    "Whitepaper anfordern"
                  ]
                }
              )
            ] })
          ]
        }
      ) }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 py-2 overflow-x-auto scrollbar-hide", "aria-label": "Seitennavigation", children: navigationItems.map((item) => /* @__PURE__ */ jsxs(
      "button",
      {
        onClick: () => scrollToSection(item.id),
        className: cn(
          "flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-medium transition-all whitespace-nowrap min-h-[48px]",
          activeSection === item.id ? "bg-teal-100 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300" : "text-gray-600 dark:text-gray-400 hover:bg-teal-50 dark:hover:bg-teal-950/30"
        ),
        children: [
          /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4" }),
          item.label
        ]
      },
      item.id
    )) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-20", children: [
      /* @__PURE__ */ jsx("section", { className: "mb-12", children: /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-teal-600" }),
          "Inhaltsverzeichnis"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: navigationItems.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(
          "button",
          {
            onClick: () => scrollToSection(item.id),
            className: "flex items-center gap-2 text-gray-600 hover:text-teal-600 transition-colors py-2 w-full text-left min-h-[44px]",
            children: [
              /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4" }),
              /* @__PURE__ */ jsx("span", { children: item.label })
            ]
          }
        ) }, item.id)) }) }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "overview", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "Travel Compliance im Überblick" }),
            /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed", children: [
              "Die Reise- und Tourismusbranche verarbeitet täglich Millionen sensibler Daten: von Reisepässen über Zahlungsinformationen bis zu Standortdaten. Moderne Travel-Tech-Unternehmen müssen dabei höchste ",
              /* @__PURE__ */ jsx(Link, { to: "/dsgvo-compliance", className: "text-teal-600 hover:underline", children: "Datenschutzstandards" }),
              " erfüllen. Erfahren Sie mehr über ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/insurtech-compliance", className: "text-teal-600 hover:underline", children: "InsurTech Compliance" }),
              " oder ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/proptech-compliance", className: "text-teal-600 hover:underline", children: "PropTech Compliance" }),
              "."
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "p-6 shadow-2xl border-2 border-teal-200 dark:border-teal-800", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Activity, { className: "h-6 w-6 text-teal-600" }),
                "Travel Industry Compliance Dashboard"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4", children: [
                { label: "Booking Data Protection", value: 94, trend: "+12%", color: "text-green-600" },
                { label: "Payment PCI DSS", value: 98, trend: "+5%", color: "text-green-600" },
                { label: "Location Privacy", value: 87, trend: "+8%", color: "text-yellow-600" },
                { label: "Cross-Border Transfer", value: 91, trend: "+15%", color: "text-green-600" },
                { label: "Customer Consent", value: 96, trend: "+10%", color: "text-green-600" },
                { label: "Data Retention", value: 89, trend: "+7%", color: "text-yellow-600" },
                { label: "Third-Party Compliance", value: 85, trend: "+18%", color: "text-yellow-600" },
                { label: "Incident Response", value: 92, trend: "+9%", color: "text-green-600" }
              ].map((stat, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { scale: 1.05 },
                  className: "bg-white dark:bg-gray-900 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700",
                  children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-medium text-gray-600 dark:text-gray-400", children: stat.label }),
                    /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-teal-600 my-1", children: [
                      stat.value,
                      "%"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: cn("text-xs font-medium", stat.color), children: [
                      /* @__PURE__ */ jsx(TrendingUp, { className: "inline h-3 w-3 mr-1" }),
                      stat.trend
                    ] })
                  ]
                },
                index
              )) }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mt-8", children: [
              /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-teal-500", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-teal-600" }),
                  "Rechtliche Grundlagen"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm md:text-base", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Art. 6 & 9 DSGVO für Reisedaten" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "PSD2 für Zahlungsdienste" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "ePrivacy für Tracking" })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-cyan-500", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Database, { className: "h-5 w-5 text-cyan-600" }),
                  "Datentypen"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm md:text-base", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Reisepass & Ausweisdaten" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Zahlungs- & Kreditkarten" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Standort & Bewegungsdaten" })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-green-500", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Globe, { className: "h-5 w-5 text-green-600" }),
                  "Internationale Transfers"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm md:text-base", children: [
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "SCCs für Drittländer" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Adequacy Decisions" })
                  ] }),
                  /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-600 mt-0.5" }),
                    /* @__PURE__ */ jsx("span", { children: "Transfer Impact Assessment" })
                  ] })
                ] }) })
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "booking-data", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "Buchungsdaten & Personalisierung" }),
            /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed", children: [
              "Buchungsplattformen verarbeiten hochsensible Daten für Millionen von Reisenden. Von der initialen Suche bis zur Reiserückkehr müssen alle Datenflüsse ",
              /* @__PURE__ */ jsx(Link, { to: "/dsgvo-compliance", className: "text-teal-600 hover:underline", children: "DSGVO-konform" }),
              " gestaltet werden. Nutzen Sie unseren ",
              /* @__PURE__ */ jsx(Link, { to: "/tools/consent-generator", className: "text-teal-600 hover:underline", children: "Consent Generator" }),
              " für rechtssichere Einwilligungen."
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-xl p-6 mb-8", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg md:text-xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-6 w-6 text-teal-600" }),
                "Booking Journey Compliance Map"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                {
                  phase: "Search & Discovery",
                  requirements: ["Cookie Consent", "Anonymous Tracking", "Preference Storage"],
                  risk: "Mittel",
                  progress: 85
                },
                {
                  phase: "Booking Process",
                  requirements: ["Explicit Consent", "Data Minimization", "Purpose Limitation"],
                  risk: "Hoch",
                  progress: 92
                },
                {
                  phase: "Payment & Confirmation",
                  requirements: ["PCI DSS Compliance", "Secure Transmission", "Token Storage"],
                  risk: "Kritisch",
                  progress: 98
                },
                {
                  phase: "Travel Period",
                  requirements: ["Location Services", "Emergency Contacts", "Real-time Updates"],
                  risk: "Hoch",
                  progress: 87
                },
                {
                  phase: "Post-Travel",
                  requirements: ["Review Management", "Data Retention", "Marketing Consent"],
                  risk: "Niedrig",
                  progress: 90
                }
              ].map((phase, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white/80 dark:bg-gray-900/80 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: phase.phase }),
                  /* @__PURE__ */ jsxs(Badge, { variant: phase.risk === "Kritisch" ? "destructive" : phase.risk === "Hoch" ? "warning" : phase.risk === "Mittel" ? "secondary" : "default", children: [
                    phase.risk,
                    " Risiko"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: phase.requirements.map((req, i) => /* @__PURE__ */ jsx("span", { className: "text-xs bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-2 py-1 rounded", children: req }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ jsx("span", { children: "Compliance Status" }),
                    /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
                      phase.progress,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: phase.progress, className: "h-2" })
                ] })
              ] }, index)) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Technische Implementierung: Consent Management" }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `// Travel Booking Consent Manager
class TravelConsentManager {
  constructor() {
    this.consents = {
      essential: true, // Immer aktiv
      analytics: false,
      marketing: false,
      personalization: false,
      locationServices: false
    };
  }

  async requestBookingConsent(travelData) {
    const requiredConsents = {
      passengerData: {
        purpose: 'Buchungsdurchführung',
        legalBasis: 'Vertragserfüllung',
        retention: '10 Jahre (Steuerrecht)',
        required: true
      },
      paymentData: {
        purpose: 'Zahlungsabwicklung',
        legalBasis: 'Vertragserfüllung',
        retention: 'PCI DSS konform',
        required: true
      },
      travelPreferences: {
        purpose: 'Personalisierung',
        legalBasis: 'Berechtigtes Interesse',
        retention: '2 Jahre',
        required: false
      },
      locationTracking: {
        purpose: 'Reiseassistenz',
        legalBasis: 'Einwilligung',
        retention: 'Reisedauer + 30 Tage',
        required: false
      }
    };

    return await this.showConsentDialog(requiredConsents);
  }

  async handleCrossBorderTransfer(destination) {
    const adequacyCountries = ['UK', 'CH', 'IL', 'NZ', 'JP'];
    
    if (!adequacyCountries.includes(destination)) {
      // SCCs erforderlich
      return {
        transferMechanism: 'Standard Contractual Clauses',
        additionalSafeguards: this.getTransferSafeguards(destination),
        tia: await this.performTransferImpactAssessment(destination)
      };
    }
    
    return { transferMechanism: 'Adequacy Decision' };
  }
}` }) }) }) })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "standortverfolgung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "Location Tracking & Privacy" }),
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed", children: "Standortbasierte Services sind essentiell für moderne Travel Apps, erfordern aber besondere Sorgfalt beim Datenschutz. Vom Check-in bis zu lokalen Empfehlungen müssen Nutzer die volle Kontrolle behalten." }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs(Card, { className: "border-2 border-teal-200 dark:border-teal-800", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-teal-600" }),
                  "Location Services Compliance"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 rounded-lg p-4", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-red-700 dark:text-red-300 mb-2", children: "⚠️ Kritische Anforderungen" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-sm", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Explizite Einwilligung für Standortzugriff" }),
                      /* @__PURE__ */ jsx("li", { children: "• Granulare Kontrolle (immer/nur bei Nutzung/nie)" }),
                      /* @__PURE__ */ jsx("li", { children: "• Transparenz über Datennutzung" }),
                      /* @__PURE__ */ jsx("li", { children: "• Opt-out jederzeit möglich" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Erlaubte Verwendungszwecke" }),
                    [
                      { use: "Hotel Check-in", allowed: true },
                      { use: "Lokale Empfehlungen", allowed: true },
                      { use: "Notfall-Assistance", allowed: true },
                      { use: "Bewegungsprofile erstellen", allowed: false },
                      { use: "Verkauf an Dritte", allowed: false }
                    ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-900 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: item.use }),
                      item.allowed ? /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-600" }) : /* @__PURE__ */ jsx(AlertTriangle, { className: "h-5 w-5 text-red-600" })
                    ] }, i))
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Privacy-by-Design Implementation" }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `// Privacy-First Location Service
class PrivacyLocationService {
  async requestLocation(purpose) {
    // Prüfe Zweckbindung
    const allowedPurposes = [
      'hotel_checkin',
      'emergency_assistance',
      'local_recommendations'
    ];
    
    if (!allowedPurposes.includes(purpose)) {
      throw new Error('Invalid purpose');
    }
    
    // Temporäre Genauigkeit
    const accuracy = {
      hotel_checkin: 'precise', // 10m
      emergency_assistance: 'precise',
      local_recommendations: 'coarse' // 1km
    };
    
    // Automatisches Löschen
    const retention = {
      hotel_checkin: '24h',
      emergency_assistance: '7d',
      local_recommendations: '0' // Nicht speichern
    };
    
    return {
      location: await this.getLocation(accuracy[purpose]),
      deleteAfter: retention[purpose]
    };
  }
}` }) }) }) })
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "zahlungs-compliance", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "Payment Compliance & PCI DSS" }),
            /* @__PURE__ */ jsxs("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed", children: [
              "Zahlungsdaten unterliegen besonders strengen Anforderungen. Die Kombination aus ",
              /* @__PURE__ */ jsx(Link, { to: "/dsgvo-compliance", className: "text-teal-600 hover:underline", children: "DSGVO" }),
              " und PCI DSS erfordert höchste Sicherheitsstandards. Lesen Sie auch unsere ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/cookie-banner-guide", className: "text-teal-600 hover:underline", children: "Cookie-Banner Best Practices" }),
              "."
            ] }),
            /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CreditCard, { className: "h-6 w-6 text-teal-600" }),
                "Payment Data Protection Matrix"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-3 gap-4", children: [
                {
                  title: "Tokenization",
                  description: "Ersetzen Sie Kartennummern durch sichere Tokens",
                  implementation: "99%",
                  icon: Lock
                },
                {
                  title: "Encryption",
                  description: "End-to-End Verschlüsselung aller Zahlungsdaten",
                  implementation: "100%",
                  icon: Shield
                },
                {
                  title: "Scope Reduction",
                  description: "Minimierung der PCI DSS Compliance-Anforderungen",
                  implementation: "95%",
                  icon: Database
                }
              ].map((item, index) => /* @__PURE__ */ jsxs(
                motion.div,
                {
                  whileHover: { scale: 1.05 },
                  className: "bg-white dark:bg-gray-900 rounded-lg p-4",
                  children: [
                    /* @__PURE__ */ jsx(item.icon, { className: "h-8 w-8 text-teal-600 mb-2" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-1", children: item.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: item.description }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Implementiert" }),
                      /* @__PURE__ */ jsx("span", { className: "font-bold text-teal-600", children: item.implementation })
                    ] })
                  ]
                },
                index
              )) }) })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "grenzueberschreitende-daten", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "Cross-Border Data Transfers" }),
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed", children: "Internationale Reisebuchungen erfordern oft Datentransfers in Drittländer. Nach Schrems II müssen diese Transfers besonders sorgfältig geprüft werden." }),
            /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-xl p-6", children: [
              /* @__PURE__ */ jsxs("h3", { className: "text-lg md:text-xl font-bold mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Globe, { className: "h-6 w-6 text-orange-600" }),
                "Transfer Impact Assessment (TIA) Framework"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                {
                  country: "USA",
                  mechanism: "Data Privacy Framework",
                  risk: "Mittel",
                  additionalMeasures: ["Verschlüsselung", "Pseudonymisierung", "Access Controls"]
                },
                {
                  country: "China",
                  mechanism: "Standard Contractual Clauses",
                  risk: "Hoch",
                  additionalMeasures: ["Verschlüsselung", "Schlüsselverwaltung in EU", "Minimale Daten"]
                },
                {
                  country: "Indien",
                  mechanism: "Standard Contractual Clauses",
                  risk: "Mittel",
                  additionalMeasures: ["Verschlüsselung", "Audit Rights", "Data Localization"]
                },
                {
                  country: "Schweiz",
                  mechanism: "Adequacy Decision",
                  risk: "Niedrig",
                  additionalMeasures: ["Standard Security"]
                }
              ].map((transfer, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white/80 dark:bg-gray-900/80 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Building, { className: "h-5 w-5 text-gray-600" }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: transfer.country })
                  ] }),
                  /* @__PURE__ */ jsxs(Badge, { variant: transfer.risk === "Hoch" ? "destructive" : transfer.risk === "Mittel" ? "warning" : "success", children: [
                    transfer.risk,
                    " Risiko"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-2", children: [
                  "Transfer Mechanism: ",
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: transfer.mechanism })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: transfer.additionalMeasures.map((measure, i) => /* @__PURE__ */ jsx("span", { className: "text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded", children: measure }, i)) })
              ] }, index)) })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "bewertungen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "Bewertungen & User Generated Content" }),
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed", children: "Kundenbewertungen sind essentiell für Travel Platforms, bergen aber datenschutzrechtliche Risiken. Vom Fake-Review-Management bis zur Moderation müssen klare Prozesse etabliert werden." }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Star, { className: "h-5 w-5 text-yellow-500" }),
                  "Review Compliance Checklist"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  { id: "review-1", text: "Verifizierung echter Buchungen", critical: true },
                  { id: "review-2", text: "Anonymisierung persönlicher Daten", critical: true },
                  { id: "review-3", text: "Moderation sensibler Inhalte", critical: false },
                  { id: "review-4", text: "Löschrecht für Reviewer", critical: true },
                  { id: "review-5", text: "Transparenz bei Bewertungsalgorithmen", critical: false },
                  { id: "review-6", text: "Schutz vor Fake Reviews", critical: false }
                ].map((item) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800",
                    onClick: () => toggleCheckedItem(item.id),
                    children: [
                      checkedItems.has(item.id) ? /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5 text-green-600" }) : /* @__PURE__ */ jsx(Square, { className: "h-5 w-5 text-gray-400" }),
                      /* @__PURE__ */ jsx("span", { className: cn(
                        "flex-1",
                        checkedItems.has(item.id) && "line-through text-gray-500"
                      ), children: item.text }),
                      item.critical && /* @__PURE__ */ jsx(Badge, { variant: "destructive", className: "text-xs", children: "Kritisch" })
                    ]
                  },
                  item.id
                )) }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Review Processing Pipeline" }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  { step: "Eingang", action: "Booking Verification", icon: UserCheck },
                  { step: "Analyse", action: "PII Detection & Removal", icon: Shield },
                  { step: "Moderation", action: "Content Compliance Check", icon: AlertTriangle },
                  { step: "Publishing", action: "Anonymization if needed", icon: Lock },
                  { step: "Monitoring", action: "Ongoing Compliance", icon: Activity }
                ].map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg", children: [
                  /* @__PURE__ */ jsx(step.icon, { className: "h-5 w-5 text-teal-600" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                    /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: step.step }),
                    /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: step.action })
                  ] }),
                  /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-gray-400" })
                ] }, index)) }) })
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "implementierung", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "Technische Implementierung" }),
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed", children: "Eine robuste technische Architektur ist die Basis für nachhaltige Compliance. Hier zeigen wir Best Practices für Travel Tech Platforms." }),
            /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Privacy-First Architecture für Travel Platforms" }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-sm", children: /* @__PURE__ */ jsx("code", { children: `// Travel Platform Privacy Architecture
import { DataProtectionService } from '@travel/privacy';

class TravelPlatformPrivacy {
  constructor() {
    this.dataCategories = {
      booking: {
        fields: ['name', 'email', 'phone', 'passport'],
        retention: '10 years', // Tax law
        encryption: 'AES-256-GCM',
        access: ['booking-service', 'customer-service']
      },
      payment: {
        fields: ['card_token', 'billing_address'],
        retention: 'PCI DSS compliant',
        encryption: 'RSA-4096 + AES-256',
        access: ['payment-service']
      },
      location: {
        fields: ['coordinates', 'timestamp'],
        retention: '30 days',
        encryption: 'AES-256-GCM',
        access: ['location-service'],
        anonymization: true
      },
      preferences: {
        fields: ['seat_pref', 'meal_pref', 'hotel_pref'],
        retention: '2 years',
        encryption: 'AES-256-GCM',
        access: ['recommendation-service']
      }
    };
  }

  async processBooking(bookingData) {
    // 1. Data Minimization
    const minimalData = this.minimizeData(bookingData);
    
    // 2. Purpose Validation
    const purposes = await this.validatePurposes(minimalData);
    
    // 3. Consent Check
    const consents = await this.checkConsents(purposes);
    
    // 4. Encryption
    const encrypted = await this.encryptSensitiveData(minimalData);
    
    // 5. Audit Log
    await this.logDataProcessing({
      action: 'booking_created',
      dataCategories: Object.keys(minimalData),
      purposes: purposes,
      timestamp: new Date().toISOString()
    });
    
    return encrypted;
  }

  async handleDataRequest(userId, requestType) {
    switch(requestType) {
      case 'access':
        return await this.exportUserData(userId);
      case 'deletion':
        return await this.deleteUserData(userId);
      case 'portability':
        return await this.exportPortableData(userId);
      case 'rectification':
        return await this.updateUserData(userId);
    }
  }

  async performPrivacyImpactAssessment() {
    return {
      dataFlows: this.mapDataFlows(),
      risks: this.identifyRisks(),
      mitigations: this.proposeMitigations(),
      residualRisk: this.calculateResidualRisk()
    };
  }
}` }) }) }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 rounded-xl p-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold mb-4", children: "Implementation Roadmap" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-4", children: [
                {
                  phase: "Phase 1: Assessment",
                  duration: "2-3 Wochen",
                  tasks: ["Data Mapping", "Risk Assessment", "Gap Analysis"],
                  completion: 100
                },
                {
                  phase: "Phase 2: Design",
                  duration: "3-4 Wochen",
                  tasks: ["Privacy Architecture", "Consent Flows", "Security Controls"],
                  completion: 85
                },
                {
                  phase: "Phase 3: Implementation",
                  duration: "6-8 Wochen",
                  tasks: ["Core Privacy Features", "Consent Management", "Data Protection"],
                  completion: 60
                },
                {
                  phase: "Phase 4: Testing",
                  duration: "2-3 Wochen",
                  tasks: ["Security Testing", "Compliance Validation", "User Acceptance"],
                  completion: 20
                },
                {
                  phase: "Phase 5: Go-Live",
                  duration: "1-2 Wochen",
                  tasks: ["Deployment", "Monitoring", "Documentation"],
                  completion: 0
                }
              ].map((phase, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white/80 dark:bg-gray-900/80 rounded-lg p-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: phase.phase }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-600 dark:text-gray-400", children: phase.duration })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-3", children: phase.tasks.map((task, i) => /* @__PURE__ */ jsx("span", { className: "text-xs bg-teal-100 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 px-2 py-1 rounded", children: task }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-1", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
                    /* @__PURE__ */ jsx("span", { children: "Fortschritt" }),
                    /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
                      phase.completion,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: phase.completion, className: "h-2" })
                ] })
              ] }, index)) })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "praxis-szenarien", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "Praxis-Szenarien" }),
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed", children: "Reale Compliance-Herausforderungen aus der Travel-Branche und wie Sie diese DSGVO-konform lösen." }),
            /* @__PURE__ */ jsx("div", { className: "space-y-6", children: [
              {
                id: "scenario-1",
                title: "Multi-Stop Reise mit verschiedenen Airlines",
                context: "Ein Kunde bucht eine komplexe Reise mit 5 Stopps über 3 Airlines und 4 Hotels.",
                challenge: "Datenweitergabe an multiple Partner in verschiedenen Ländern",
                solution: "Data Processing Agreements mit allen Partnern, minimale Datenweitergabe, zentrale Consent-Verwaltung",
                risk: "Hoch"
              },
              {
                id: "scenario-2",
                title: "Reisestornierung wegen Pandemie",
                context: "Massenhafte Stornierungen erfordern Datenspeicherung für Erstattungen.",
                challenge: "Verlängerte Aufbewahrung vs. Löschpflichten",
                solution: "Dokumentierte Rechtsgrundlage für verlängerte Speicherung, transparente Kommunikation, automatisches Löschen nach Erstattung",
                risk: "Mittel"
              },
              {
                id: "scenario-3",
                title: "Minderjährige Alleinreisende",
                context: "Buchung und Tracking für unbegleitete Minderjährige.",
                challenge: "Besonderer Schutz für Kinderdaten, Einwilligung der Eltern",
                solution: "Verifizierte Eltern-Einwilligung, minimale Datenerhebung, verschärfte Sicherheitsmaßnahmen, begrenzte Datenweitergabe",
                risk: "Kritisch"
              },
              {
                id: "scenario-4",
                title: "Loyalty Program mit Partnern",
                context: "Meilenprogramm über Airlines, Hotels und Mietwagen.",
                challenge: "Profilbildung über multiple Services",
                solution: "Explizite Einwilligung für Profiling, Opt-out Optionen, Datentrennung zwischen Services, Purpose Limitation",
                risk: "Hoch"
              }
            ].map((scenario) => /* @__PURE__ */ jsxs(Card, { className: "border-l-4 border-teal-500", children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Activity, { className: "h-5 w-5 text-teal-600" }),
                  scenario.title
                ] }),
                /* @__PURE__ */ jsxs(Badge, { variant: scenario.risk === "Kritisch" ? "destructive" : scenario.risk === "Hoch" ? "warning" : "secondary", children: [
                  scenario.risk,
                  " Risiko"
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-1", children: "📋 Kontext" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: scenario.context })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-1", children: "⚡ Herausforderung" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: scenario.challenge })
                ] }),
                /* @__PURE__ */ jsxs(
                  "button",
                  {
                    onClick: () => toggleScenario(scenario.id),
                    className: "flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium text-sm",
                    children: [
                      expandedScenarios.has(scenario.id) ? "Lösung ausblenden" : "Lösung anzeigen",
                      /* @__PURE__ */ jsx(ChevronRight, { className: cn(
                        "h-4 w-4 transition-transform",
                        expandedScenarios.has(scenario.id) && "rotate-90"
                      ) })
                    ]
                  }
                ),
                expandedScenarios.has(scenario.id) && /* @__PURE__ */ jsxs(
                  motion.div,
                  {
                    initial: { opacity: 0, height: 0 },
                    animate: { opacity: 1, height: "auto" },
                    exit: { opacity: 0, height: 0 },
                    className: "bg-teal-50 dark:bg-teal-950/20 rounded-lg p-4 mt-3",
                    children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold text-sm mb-2", children: "✅ DSGVO-konforme Lösung" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm", children: scenario.solution })
                    ]
                  }
                )
              ] }) })
            ] }, scenario.id)) })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "checkliste", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "Travel Compliance Checkliste" }),
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed", children: "Überprüfen Sie Ihre Travel Platform auf vollständige DSGVO-Compliance mit unserer umfassenden Checkliste." }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Rechtliche Anforderungen" }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  { id: "legal-1", text: "Datenschutzerklärung für alle Touchpoints" },
                  { id: "legal-2", text: "Cookie-Banner mit Granular Consent" },
                  { id: "legal-3", text: "Verarbeitungsverzeichnis aktuell" },
                  { id: "legal-4", text: "DSFAs für Hochrisiko-Verarbeitung" },
                  { id: "legal-5", text: "Auftragsverarbeitungsverträge mit Partnern" },
                  { id: "legal-6", text: "Datenschutzbeauftragter benannt" }
                ].map((item) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800",
                    onClick: () => toggleCheckedItem(item.id),
                    children: [
                      checkedItems.has(item.id) ? /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5 text-green-600" }) : /* @__PURE__ */ jsx(Square, { className: "h-5 w-5 text-gray-400" }),
                      /* @__PURE__ */ jsx("span", { className: cn(
                        checkedItems.has(item.id) && "line-through text-gray-500"
                      ), children: item.text })
                    ]
                  },
                  item.id
                )) }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Technische Maßnahmen" }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  { id: "tech-1", text: "End-to-End Verschlüsselung implementiert" },
                  { id: "tech-2", text: "Access Controls und Logging aktiv" },
                  { id: "tech-3", text: "Automatische Datenlöschung konfiguriert" },
                  { id: "tech-4", text: "Privacy-by-Design Architecture" },
                  { id: "tech-5", text: "Incident Response Plan etabliert" },
                  { id: "tech-6", text: "Regular Security Audits" }
                ].map((item) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800",
                    onClick: () => toggleCheckedItem(item.id),
                    children: [
                      checkedItems.has(item.id) ? /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5 text-green-600" }) : /* @__PURE__ */ jsx(Square, { className: "h-5 w-5 text-gray-400" }),
                      /* @__PURE__ */ jsx("span", { className: cn(
                        checkedItems.has(item.id) && "line-through text-gray-500"
                      ), children: item.text })
                    ]
                  },
                  item.id
                )) }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 p-4 bg-teal-50 dark:bg-teal-950/20 rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: "Compliance Status" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                    checkedItems.size,
                    " von 12 Punkten erfüllt"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-teal-600", children: [
                  Math.round(checkedItems.size / 12 * 100),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsx(Progress, { value: checkedItems.size / 12 * 100, className: "mt-2" })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { id: "ressourcen", className: "space-y-8 scroll-mt-32", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "Ressourcen & Tools" }),
            /* @__PURE__ */ jsx("p", { className: "text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed", children: "Praktische Ressourcen und Tools für Ihre Travel Compliance Journey." }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-teal-600" }),
                  "Travel DSGVO Guide"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "Umfassender Leitfaden für Datenschutz in der Reisebranche mit praktischen Beispielen." }),
                  /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full min-h-[48px]", children: [
                    /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 mr-2" }),
                    "Download PDF"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-teal-600" }),
                  "Consent Templates"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "Vorgefertigte Consent-Flows und Datenschutzerklärungen für Travel Platforms." }),
                  /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full min-h-[48px]", children: [
                    /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 mr-2" }),
                    "Templates ansehen"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Database, { className: "h-5 w-5 text-teal-600" }),
                  "Privacy Tools"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "Technische Tools für Privacy-by-Design Implementation in Travel Tech." }),
                  /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full min-h-[48px]", children: [
                    /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 mr-2" }),
                    "GitHub Repository"
                  ] })
                ] })
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("section", { className: "space-y-8", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.8 },
          children: /* @__PURE__ */ jsx(Card, { className: "bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-8 md:p-12 text-center", children: [
            /* @__PURE__ */ jsx(Plane, { className: "h-16 w-16 mx-auto mb-6 text-white/90" }),
            /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Starten Sie Ihre Travel Compliance Journey" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 text-white/90 max-w-2xl mx-auto", children: "Lassen Sie uns gemeinsam Ihre Travel Platform DSGVO-konform gestalten. Von Booking bis Review Management." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "lg",
                  className: "bg-white text-teal-600 hover:bg-gray-100 text-base md:text-lg min-h-[48px] px-6",
                  "aria-label": "Travel Compliance Demo vereinbaren",
                  children: [
                    /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
                    "Travel Compliance Demo buchen"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "lg",
                  variant: "outline",
                  className: "text-white border-white hover:bg-white/10 text-base md:text-lg min-h-[48px] px-6",
                  "aria-label": "Travel Compliance Whitepaper Download",
                  children: [
                    /* @__PURE__ */ jsx(FileText, { className: "mr-2 h-5 w-5" }),
                    "Whitepaper herunterladen"
                  ]
                }
              )
            ] })
          ] }) })
        }
      ) }),
      /* @__PURE__ */ jsxs("section", { className: "mt-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6", children: "Verwandte Compliance-Guides" }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Building, { className: "h-5 w-5 text-teal-600" }),
              "InsurTech Compliance"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "DSGVO-Compliance für Versicherungstechnologie." }),
              /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/insurtech-compliance", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", children: [
                "Zum Guide ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Building, { className: "h-5 w-5 text-teal-600" }),
              "PropTech Compliance"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "DSGVO-Compliance für Immobilientechnologie." }),
              /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen/proptech-compliance", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", children: [
                "Zum Guide ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-teal-600" }),
              "DSGVO Compliance Guide"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-4", children: "Umfassender DSGVO-Leitfaden für alle Branchen." }),
              /* @__PURE__ */ jsx(Link, { to: "/dsgvo-compliance", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", children: [
                "Zum Guide ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
              ] }) })
            ] })
          ] })
        ] })
      ] })
    ] }) }) }),
    showScrollTop && /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: "fixed bottom-8 right-8 p-3 bg-teal-600 text-white rounded-full shadow-lg hover:bg-teal-700 transition-colors z-50",
        "aria-label": "Nach oben scrollen",
        children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 rotate-[-90deg]" })
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  TravelComplianceGuide as default
};
