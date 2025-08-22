import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { I as Input } from "./input-6XZgwDxx.js";
import { Gauge, BarChart3, ShieldCheck, Network, TrendingUp, Users, Shield, Database, Eye, Layers, UserCheck, Workflow, Brain, Sparkles, CircuitBoard, Search, FileText, Code, Scale, FileSearch, ChevronRight, ArrowRight } from "lucide-react";
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
import "react-helmet-async";
const KiDatenschutz = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const categories = [
    { id: "all", name: "Alle Themen", count: 12 },
    { id: "regulation", name: "Regulierung", count: 3 },
    { id: "technical", name: "Technisch", count: 4 },
    { id: "implementation", name: "Implementation", count: 3 },
    { id: "industry", name: "Branchen", count: 2 }
  ];
  const aiTopics = [
    {
      title: "KI-Systeme Risikoklassifizierung",
      description: "Verstehen Sie die vier Risikokategorien des EU AI Acts und deren Auswirkungen auf Compliance-Anforderungen",
      path: "/wissen/ki-datenschutz/risikoklassifizierung",
      icon: Gauge,
      category: "regulation",
      tags: ["EU AI Act", "Risikobewertung", "Compliance"],
      difficulty: "Fortgeschritten",
      readTime: "20 Min",
      color: "from-red-500 to-orange-500",
      highlight: "Pflichtlektüre für KI-Entwickler"
    },
    {
      title: "Algorithmic Impact Assessments",
      description: "Schritt-für-Schritt Anleitung zur Durchführung von Folgenabschätzungen für algorithmische Systeme",
      path: "/wissen/ki-datenschutz/algorithmic-impact-assessment",
      icon: BarChart3,
      category: "regulation",
      tags: ["Impact Assessment", "DSGVO Art. 35", "Dokumentation"],
      difficulty: "Experte",
      readTime: "25 Min",
      color: "from-blue-500 to-purple-500",
      highlight: "Mit Praxis-Templates"
    },
    {
      title: "Privacy-Preserving AI Technologien",
      description: "Moderne Technologien für datenschutzfreundliche KI-Entwicklung und -Deployment",
      path: "/wissen/ki-datenschutz/privacy-preserving-ai",
      icon: ShieldCheck,
      category: "technical",
      tags: ["Verschlüsselung", "Anonymisierung", "PETs"],
      difficulty: "Fortgeschritten",
      readTime: "18 Min",
      color: "from-green-500 to-teal-500"
    },
    {
      title: "Federated Learning & Differential Privacy",
      description: "Dezentrales Lernen und mathematische Privatsphäre-Garantien in der Praxis",
      path: "/wissen/ki-datenschutz/federated-learning",
      icon: Network,
      category: "technical",
      tags: ["Federated Learning", "Differential Privacy", "Dezentral"],
      difficulty: "Experte",
      readTime: "30 Min",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Financial AI & Algorithmic Trading Rules",
      description: "Spezifische Compliance-Anforderungen für KI im Finanzsektor und automatisierten Handel",
      path: "/wissen/ki-datenschutz/financial-ai-compliance",
      icon: TrendingUp,
      category: "industry",
      tags: ["MiFID II", "Algorithmic Trading", "FinTech"],
      difficulty: "Spezialisiert",
      readTime: "22 Min",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "HR AI & Bewerbermanagement",
      description: "Rechtskonforme KI-Nutzung in HR-Prozessen und automatisierten Bewerbungsverfahren",
      path: "/wissen/ki-datenschutz/hr-ai-compliance",
      icon: Users,
      category: "industry",
      tags: ["HR Tech", "Diskriminierung", "AGG"],
      difficulty: "Fortgeschritten",
      readTime: "20 Min",
      color: "from-indigo-500 to-blue-500"
    },
    {
      title: "Model Privacy Attacks & Defense",
      description: "Angriffsvektoren auf ML-Modelle und effektive Verteidigungsstrategien",
      path: "/wissen/ki-datenschutz/model-privacy-attacks",
      icon: Shield,
      category: "technical",
      tags: ["Security", "Model Inversion", "Membership Inference"],
      difficulty: "Experte",
      readTime: "28 Min",
      color: "from-red-600 to-red-500"
    },
    {
      title: "Data Minimization in ML Pipelines",
      description: "Praktische Ansätze zur Datenminimierung in Machine Learning Workflows",
      path: "/wissen/ki-datenschutz/data-minimization",
      icon: Database,
      category: "technical",
      tags: ["Datenminimierung", "ML Pipeline", "Best Practices"],
      difficulty: "Fortgeschritten",
      readTime: "15 Min",
      color: "from-cyan-500 to-blue-500"
    },
    {
      title: "Explainable AI für DSGVO Art. 22",
      description: "Transparenz und Erklärbarkeit automatisierter Entscheidungen nach DSGVO",
      path: "/wissen/ki-datenschutz/explainable-ai",
      icon: Eye,
      category: "regulation",
      tags: ["XAI", "DSGVO Art. 22", "Transparenz"],
      difficulty: "Fortgeschritten",
      readTime: "24 Min",
      color: "from-emerald-500 to-green-500"
    },
    {
      title: "Privacy by Design für AI-Systeme",
      description: "Integration von Datenschutzprinzipien in den KI-Entwicklungslebenszyklus",
      path: "/wissen/ki-datenschutz/privacy-by-design-ai",
      icon: Layers,
      category: "implementation",
      tags: ["Privacy by Design", "Development", "Architecture"],
      difficulty: "Fortgeschritten",
      readTime: "20 Min",
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "KI-Einwilligungsmanagement",
      description: "Spezielle Anforderungen an Einwilligungen für KI-basierte Datenverarbeitung",
      path: "/wissen/ki-datenschutz/ki-einwilligungsmanagement",
      icon: UserCheck,
      category: "implementation",
      tags: ["Einwilligung", "Consent", "User Rights"],
      difficulty: "Mittel",
      readTime: "16 Min",
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "Automated Decision-Making Compliance",
      description: "Vollständiger Leitfaden für rechtskonforme automatisierte Entscheidungsfindung",
      path: "/wissen/ki-datenschutz/automated-decision-making",
      icon: Workflow,
      category: "implementation",
      tags: ["ADM", "Automation", "Compliance"],
      difficulty: "Fortgeschritten",
      readTime: "26 Min",
      color: "from-amber-500 to-orange-500"
    }
  ];
  const filteredTopics = aiTopics.filter((topic) => {
    const matchesSearch = topic.title.toLowerCase().includes(searchQuery.toLowerCase()) || topic.description.toLowerCase().includes(searchQuery.toLowerCase()) || topic.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || topic.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { ref: heroRef, className: "relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          style: { y, opacity },
          className: "absolute inset-0",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/grid.svg')] opacity-10" }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-20" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24", children: /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "text-center",
          children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl shadow-2xl", children: /* @__PURE__ */ jsx(Brain, { className: "w-16 h-16 text-white" }) }) }),
            /* @__PURE__ */ jsx("h1", { className: "text-5xl font-bold text-white mb-6", children: "KI & Datenschutz" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto mb-8", children: "Umfassendes Wissen zu künstlicher Intelligenz, maschinellem Lernen und algorithmischen Systemen im Kontext von Datenschutz und Compliance" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 mr-2" }),
                "EU AI Act Ready"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 mr-2" }),
                "Privacy by Design"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(CircuitBoard, { className: "w-4 h-4 mr-2" }),
                "Technical Deep Dives"
              ] })
            ] })
          ]
        }
      ) }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative flex-1 max-w-md", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" }),
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "text",
            placeholder: "Suche nach KI-Themen...",
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            className: "pl-10"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex gap-2 flex-wrap", children: categories.map((category) => /* @__PURE__ */ jsxs(
        Button,
        {
          variant: selectedCategory === category.id ? "default" : "outline",
          size: "sm",
          onClick: () => setSelectedCategory(category.id),
          className: "relative",
          children: [
            category.name,
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "ml-2 px-1.5 py-0.5 text-xs", children: category.count })
          ]
        },
        category.id
      )) })
    ] }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-4 mb-12", children: [
        /* @__PURE__ */ jsx(Card, { className: "border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Gesamte Guides" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-purple-900", children: "12" })
          ] }),
          /* @__PURE__ */ jsx(FileText, { className: "w-8 h-8 text-purple-500" })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { className: "border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Technische Guides" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-blue-900", children: "4" })
          ] }),
          /* @__PURE__ */ jsx(Code, { className: "w-8 h-8 text-blue-500" })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { className: "border-2 border-green-100 bg-gradient-to-br from-green-50 to-white", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Regulierung" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-green-900", children: "3" })
          ] }),
          /* @__PURE__ */ jsx(Scale, { className: "w-8 h-8 text-green-500" })
        ] }) }) }),
        /* @__PURE__ */ jsx(Card, { className: "border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-white", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Praxis-Templates" }),
            /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-orange-900", children: "15+" })
          ] }),
          /* @__PURE__ */ jsx(FileSearch, { className: "w-8 h-8 text-orange-500" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredTopics.map((topic, index) => {
        const Icon = topic.icon;
        return /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.5, delay: index * 0.1 },
            onMouseEnter: () => setHoveredCard(topic.path),
            onMouseLeave: () => setHoveredCard(null),
            children: /* @__PURE__ */ jsx(Link, { to: topic.path, children: /* @__PURE__ */ jsxs(Card, { className: cn(
              "h-full cursor-pointer transition-all duration-300 border-2",
              hoveredCard === topic.path ? "shadow-2xl scale-105 border-gray-300" : "hover:shadow-lg border-gray-200"
            ), children: [
              /* @__PURE__ */ jsxs(CardHeader, { children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                  /* @__PURE__ */ jsx("div", { className: cn(
                    "p-3 rounded-xl bg-gradient-to-br",
                    topic.color
                  ), children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6 text-white" }) }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: topic.difficulty }),
                    /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: topic.readTime })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-xl mb-2", children: topic.title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mb-4", children: topic.description }),
                topic.highlight && /* @__PURE__ */ jsxs(Badge, { className: "mb-3 bg-gradient-to-r from-purple-600 to-pink-600", children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "w-3 h-3 mr-1" }),
                  topic.highlight
                ] }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: topic.tags.map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: tag }, tag)) })
              ] }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-sm text-gray-500", children: [
                /* @__PURE__ */ jsx("span", { children: "Jetzt lesen" }),
                /* @__PURE__ */ jsx(ChevronRight, { className: cn(
                  "w-4 h-4 ml-1 transition-transform",
                  hoveredCard === topic.path && "translate-x-1"
                ) })
              ] }) })
            ] }) })
          },
          topic.path
        );
      }) }),
      filteredTopics.length === 0 && /* @__PURE__ */ jsxs("div", { className: "text-center py-12", children: [
        /* @__PURE__ */ jsx(Search, { className: "w-12 h-12 text-gray-400 mx-auto mb-4" }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Keine Ergebnisse gefunden" }),
        /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Versuchen Sie es mit anderen Suchbegriffen oder Kategorien" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-16 bg-gradient-to-br from-purple-900 to-blue-900 rounded-3xl p-8 text-white", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx(Sparkles, { className: "w-12 h-12 mx-auto mb-4" }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Bleiben Sie auf dem Laufenden" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg mb-6 text-gray-200", children: "Erhalten Sie wöchentliche Updates zu neuen KI-Regulierungen, Best Practices und technischen Innovationen im Datenschutz" }),
        /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "secondary", className: "bg-white text-purple-900 hover:bg-gray-100", children: [
          "Newsletter abonnieren",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  KiDatenschutz as default
};
