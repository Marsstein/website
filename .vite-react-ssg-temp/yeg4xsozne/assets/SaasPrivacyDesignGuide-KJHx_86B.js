import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { motion } from "framer-motion";
import { c as cn } from "../main.mjs";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Helmet } from "react-helmet-async";
import { Cloud, BookOpen, ArrowRight, Download, Shield, Layers, Database, UserCheck, Lock, Code, FileText, Eye, FileCheck, CheckCircle2, Truck, Key, AlertTriangle, Construction, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
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
import "@radix-ui/react-progress";
const SaasPrivacyDesignGuide = () => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [activeSection, setActiveSection] = useState("overview");
  const navigationItems = [
    { id: "overview", label: "Überblick", icon: Shield },
    { id: "architecture", label: "Privacy Architecture", icon: Layers },
    { id: "data-minimization", label: "Data Minimization", icon: Database },
    { id: "user-control", label: "User Control", icon: UserCheck },
    { id: "security-design", label: "Security by Design", icon: Lock },
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
  const renderOverview = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-cyan-600" }),
        "SaaS Privacy by Design Framework"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Ein umfassendes Framework für die Entwicklung DSGVO-konformer SaaS-Anwendungen mit eingebautem Datenschutz von der ersten Zeile Code an." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
      {
        title: "Privacy by Default",
        icon: Shield,
        color: "text-blue-600",
        description: "Datenschutzfreundlichste Einstellungen als Standard"
      },
      {
        title: "Data Minimization",
        icon: Database,
        color: "text-green-600",
        description: "Nur notwendige Daten sammeln und verarbeiten"
      },
      {
        title: "User Control",
        icon: UserCheck,
        color: "text-purple-600",
        description: "Vollständige Kontrolle über persönliche Daten"
      },
      {
        title: "Security by Design",
        icon: Lock,
        color: "text-red-600",
        description: "Sicherheit als fundamentales Architekturprinzip"
      },
      {
        title: "Transparency",
        icon: Eye,
        color: "text-orange-600",
        description: "Transparente Datenverarbeitung und -nutzung"
      },
      {
        title: "Compliance",
        icon: FileCheck,
        color: "text-indigo-600",
        description: "DSGVO-, CCPA- und weitere Compliance-Standards"
      }
    ].map((principle, index) => /* @__PURE__ */ jsx(Card, { className: "hover:shadow-lg transition-shadow", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
        /* @__PURE__ */ jsx(principle.icon, { className: `w-6 h-6 ${principle.color}` }),
        /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: principle.title })
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: principle.description })
    ] }) }, index)) })
  ] });
  const renderArchitecture = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Layers, { className: "w-8 h-8 text-purple-600" }),
        "Privacy-First Architecture"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Architektur-Patterns und Best Practices für SaaS-Anwendungen mit eingebautem Datenschutz." })
    ] }),
    /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Microservices Privacy Architecture" }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
        /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4", children: "Core Services" }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          { name: "User Service", purpose: "Benutzerverwaltung mit Privacy Controls" },
          { name: "Consent Service", purpose: "Einverständnisverwaltung und -tracking" },
          { name: "Data Service", purpose: "Datenverarbeitung mit Minimierung" },
          { name: "Audit Service", purpose: "Compliance und Audit-Logs" }
        ].map((service, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded border", children: [
          /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-900", children: service.name }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mt-1", children: service.purpose })
        ] }, index)) })
      ] }) }) })
    ] })
  ] });
  const renderDataMinimization = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Database, { className: "w-8 h-8 text-green-600" }),
        "Data Minimization Strategies"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Techniken zur Minimierung der Datensammlung und -verarbeitung in SaaS-Anwendungen." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Collection Minimization" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-medium", children: "Frontend Validation" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-50 p-3 rounded", children: /* @__PURE__ */ jsx("code", { className: "text-sm", children: `// Nur erforderliche Felder sammeln
const requiredFields = ['email', 'name'];
const optionalFields = ['phone', 'company'];` }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-medium", children: "Progressive Disclosure" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Daten nur sammeln, wenn sie für die aktuelle Funktionalität benötigt werden." })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { children: "Processing Minimization" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-medium", children: "Purpose Binding" }),
            /* @__PURE__ */ jsx("div", { className: "bg-gray-50 p-3 rounded", children: /* @__PURE__ */ jsx("code", { className: "text-sm", children: `// Datenverarbeitung nur für definierten Zweck
const processingPurpose = 'user_authentication';
if (purpose !== processingPurpose) return false;` }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-medium", children: "Retention Limits" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Automatische Löschung nach Ablauf der Aufbewahrungsfristen." })
          ] })
        ] }) })
      ] })
    ] })
  ] });
  const renderUserControl = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-8 border border-teal-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(UserCheck, { className: "w-8 h-8 text-teal-600" }),
        "User Control & Rights Management"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Implementierung der DSGVO-Betroffenenrechte in SaaS-Anwendungen." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
      {
        title: "Data Export",
        icon: Download,
        features: [
          "Vollständiger Datenexport in JSON/CSV",
          "Strukturierte Datenportabilität",
          "Sichere Download-Links",
          "Export-Historie und -Status"
        ]
      },
      {
        title: "Consent Management",
        icon: CheckCircle2,
        features: [
          "Granulare Einverständniserklärungen",
          "Einfache Widerrufsmöglichkeiten",
          "Consent-Historie und -Tracking",
          "Cookie-Banner Integration"
        ]
      },
      {
        title: "Data Deletion",
        icon: Truck,
        features: [
          "Sofortiges Löschen auf Anfrage",
          "Kaskadierendes Löschen in allen Services",
          "Backup-Bereinigung",
          "Löschbestätigung für Benutzer"
        ]
      }
    ].map((feature, index) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(feature.icon, { className: "w-5 h-5 text-teal-600" }),
        feature.title
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: feature.features.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
      ] }, i)) }) })
    ] }, index)) })
  ] });
  const renderSecurityDesign = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8 border border-red-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Lock, { className: "w-8 h-8 text-red-600" }),
        "Security by Design"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Sicherheitsmaßnahmen als fundamentaler Bestandteil der SaaS-Architektur." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
      {
        title: "Encryption at Rest & Transit",
        icon: Key,
        color: "blue",
        features: [
          "AES-256 Verschlüsselung für alle Daten",
          "TLS 1.3 für alle Kommunikation",
          "HSM-basiertes Key Management",
          "Automatische Key Rotation"
        ]
      },
      {
        title: "Zero-Trust Architecture",
        icon: Shield,
        color: "green",
        features: [
          "Microsegmentierung der Netzwerke",
          "Identity-based Access Control",
          "Continuous Verification",
          "Least Privilege Principle"
        ]
      },
      {
        title: "Threat Detection",
        icon: AlertTriangle,
        color: "red",
        features: [
          "Real-time Anomaly Detection",
          "Behavioral Analysis",
          "Automated Incident Response",
          "Threat Intelligence Integration"
        ]
      },
      {
        title: "Audit & Compliance",
        icon: FileCheck,
        color: "purple",
        features: [
          "Comprehensive Audit Logs",
          "Compliance Dashboards",
          "Automated Reporting",
          "Third-party Security Assessments"
        ]
      }
    ].map((security, index) => /* @__PURE__ */ jsxs(Card, { children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(security.icon, { className: `w-5 h-5 text-${security.color}-600` }),
        security.title
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: security.features.map((feature, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" }),
        /* @__PURE__ */ jsx("span", { className: "text-sm", children: feature })
      ] }, i)) }) })
    ] }, index)) })
  ] });
  const renderImplementation = () => /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-100", children: [
      /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Code, { className: "w-8 h-8 text-purple-600" }),
        "Complete Implementation Guide"
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-gray-700 leading-relaxed", children: "Schritt-für-Schritt Anleitung zur Implementierung einer vollständig DSGVO-konformen SaaS-Anwendung mit Privacy by Design Prinzipien." })
    ] }),
    /* @__PURE__ */ jsxs(Card, { className: "p-6", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Construction, { className: "w-5 h-5 text-yellow-600" }),
        "Complete Technology Stack"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border border-yellow-200", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "p-2 bg-yellow-600 rounded-lg", children: /* @__PURE__ */ jsx(Construction, { className: "w-5 h-5 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-bold text-yellow-900", children: "🚀 Complete Technology Stack Transformation" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700", children: "Vom Legacy-Chaos zu Privacy-First Excellence" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-yellow-100 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-yellow-600 mb-1", children: "12" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Privacy-aware" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-yellow-600", children: "Microservices" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-yellow-100 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-green-600 mb-1", children: "100%" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Encrypted" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600", children: "Data at Rest" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg border border-yellow-100 text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-600 mb-1", children: "7" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: "Security Layers" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-purple-600", children: "Defense in Depth" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-4", children: "Production Deployment Checklist" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-800", children: "Pre-Deployment" }),
              [
                "Privacy Impact Assessment abgeschlossen",
                "DSGVO Compliance Review durchgeführt",
                "Security Penetration Tests bestanden",
                "Data Flow Dokumentation vollständig",
                "Incident Response Plan etabliert"
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-600" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
              ] }, i))
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-800", children: "Deployment" }),
              [
                "Kubernetes Security Policies aktiviert",
                "Encryption at Rest konfiguriert",
                "Network Policies implementiert",
                "Monitoring & Alerting konfiguriert",
                "Backup & Recovery getestet"
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Wrench, { className: "w-4 h-4 text-blue-600" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm", children: item })
              ] }, i))
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx("h5", { className: "font-medium text-gray-800", children: "Post-Deployment" }),
              [
                "Privacy Monitoring Dashboard aktiv",
                "User Consent Flows getestet",
                "Data Export/Deletion funktional",
                "Compliance Audits automatisiert",
                "Staff Training abgeschlossen"
              ].map((item, i) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 text-purple-600" }),
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
      /* @__PURE__ */ jsx("title", { children: "SaaS Privacy by Design – DSGVO-native Development" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Privacy-by-Design für SaaS: Zero-Trust Architecture, Data Minimization & GDPR-native APIs. 87% weniger Compliance-Kosten durch Privacy-First Development." }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://datenschutz-assistent.de/wissen/branchen/saas-privacy-design" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "py-20", children: [
      /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-400 mb-6", children: [
            /* @__PURE__ */ jsx(Cloud, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "SaaS Privacy by Design" })
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: [
            "SaaS Privacy by Design",
            /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent block mt-2", children: "DSGVO-native SaaS Development" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 mb-8", children: "Entwickeln Sie SaaS-Anwendungen mit eingebautem Datenschutz von Grund auf. Privacy by Design und Security by Design als fundamentale Architekturprinzipien." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsx(Link, { to: "/wissen/branchen", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:opacity-90 group", children: [
              /* @__PURE__ */ jsx(BookOpen, { className: "mr-2 h-5 w-5" }),
              "Zurück zur Übersicht",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
            ] }) }),
            /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "group", children: [
              /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
              "Implementation Guide",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Card, { className: "mb-12", children: /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 text-center", children: [
          { label: "Privacy", progress: 98 },
          { label: "Security", progress: 96 },
          { label: "Compliance", progress: 97 },
          { label: "Monitoring", progress: 95 }
        ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-lg font-bold text-cyan-600 mb-1", children: [
            item.progress,
            "%"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-600", children: item.label }),
          /* @__PURE__ */ jsx(Progress, { value: item.progress, className: "h-2 mt-2" })
        ] }, index)) }) }) })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-white/95 dark:bg-gray-950/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800 shadow-sm", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsx("nav", { className: "flex items-center justify-start md:justify-center gap-2 overflow-x-auto py-4 scrollbar-hide", children: navigationItems.map((item, index) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => {
            scrollToSection(item.id);
            setActiveSection(item.id);
          },
          className: cn(
            "flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 whitespace-nowrap",
            activeSection === item.id ? "bg-cyan-100 dark:bg-cyan-950/50 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800" : "hover:bg-cyan-50 dark:hover:bg-cyan-950/30 hover:text-cyan-700 dark:hover:text-cyan-400",
            "border",
            activeSection === item.id ? "border-cyan-200 dark:border-cyan-800" : "border-transparent hover:border-cyan-200 dark:hover:border-cyan-800"
          ),
          children: [
            /* @__PURE__ */ jsx(item.icon, { className: cn(
              "h-4 w-4",
              activeSection === item.id && "text-cyan-600 dark:text-cyan-500"
            ) }),
            /* @__PURE__ */ jsx("span", { className: cn(
              "text-sm font-medium",
              activeSection === item.id && "text-cyan-700 dark:text-cyan-400"
            ), children: item.label })
          ]
        },
        item.id
      )) }) }) }) }),
      /* @__PURE__ */ jsx("div", { className: "py-20", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
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
                  /* @__PURE__ */ jsx(item.icon, { className: "h-4 w-4 text-gray-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-700 dark:text-gray-300 group-hover:text-cyan-600 dark:group-hover:text-cyan-400", children: item.label })
                ]
              }
            ) }, item.id)) }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-20", children: [
            /* @__PURE__ */ jsxs("section", { id: "overview", className: "space-y-8 scroll-mt-32", children: [
              /* @__PURE__ */ jsx(
                motion.h2,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { duration: 0.6 },
                  className: "text-3xl font-bold mb-8",
                  children: "SaaS Privacy by Design Überblick"
                }
              ),
              renderOverview()
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
            /* @__PURE__ */ jsxs("section", { id: "architecture", className: "space-y-8 scroll-mt-32", children: [
              /* @__PURE__ */ jsx(
                motion.h2,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { duration: 0.6 },
                  className: "text-3xl font-bold mb-8",
                  children: "Privacy Architecture Framework"
                }
              ),
              renderArchitecture()
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
            /* @__PURE__ */ jsxs("section", { id: "data-minimization", className: "space-y-8 scroll-mt-32", children: [
              /* @__PURE__ */ jsx(
                motion.h2,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { duration: 0.6 },
                  className: "text-3xl font-bold mb-8",
                  children: "Data Minimization Strategien"
                }
              ),
              renderDataMinimization()
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
            /* @__PURE__ */ jsxs("section", { id: "user-control", className: "space-y-8 scroll-mt-32", children: [
              /* @__PURE__ */ jsx(
                motion.h2,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { duration: 0.6 },
                  className: "text-3xl font-bold mb-8",
                  children: "User Control & Transparency"
                }
              ),
              renderUserControl()
            ] }),
            /* @__PURE__ */ jsx("div", { className: "w-full h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" }),
            /* @__PURE__ */ jsxs("section", { id: "security-design", className: "space-y-8 scroll-mt-32", children: [
              /* @__PURE__ */ jsx(
                motion.h2,
                {
                  initial: { opacity: 0, x: -20 },
                  whileInView: { opacity: 1, x: 0 },
                  transition: { duration: 0.6 },
                  className: "text-3xl font-bold mb-8",
                  children: "Security by Design Prinzipien"
                }
              ),
              renderSecurityDesign()
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
                  children: "Implementation Roadmap"
                }
              ),
              renderImplementation()
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mt-12", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-cyan-600" }),
            "Weiterführende Ressourcen"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs(Link, { to: "/wissen/dsgvo", className: "block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "DSGVO Grundlagen" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Rechtliche Grundlagen verstehen" })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/wissen/datenschutz-tools", className: "block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Privacy Tools" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Praktische Implementierungstools" })
            ] }),
            /* @__PURE__ */ jsxs(Link, { to: "/kontakt", className: "block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-medium mb-2", children: "Beratung anfragen" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Individuelle Unterstützung erhalten" })
            ] })
          ] }) })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(
      "button",
      {
        onClick: () => window.scrollTo({ top: 0, behavior: "smooth" }),
        className: "fixed bottom-8 right-8 z-50 p-3 bg-cyan-600 text-white rounded-full shadow-lg hover:bg-cyan-700 transition-all opacity-90 hover:opacity-100",
        "aria-label": "Zurück nach oben",
        children: /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 rotate-[-90deg]" })
      }
    )
  ] });
};
export {
  SaasPrivacyDesignGuide as default
};
