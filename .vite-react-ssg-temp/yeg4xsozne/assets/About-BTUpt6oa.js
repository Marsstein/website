import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { Link } from "react-router-dom";
import { Target, ArrowRight, Lightbulb, Heart, TrendingUp, Rocket, BookOpen, CheckCircle, Award, Globe, Linkedin, Mail } from "lucide-react";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "../main.mjs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
const About = () => {
  const [visibleSections, setVisibleSections] = useState(/* @__PURE__ */ new Set());
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => /* @__PURE__ */ new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );
    const sections = document.querySelectorAll("[data-animate]");
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
    };
  }, []);
  const AnimatedCard = ({ children, className = "", delay = 0, id }) => {
    const isVisible = id ? visibleSections.has(id) : true;
    return /* @__PURE__ */ jsx(
      "div",
      {
        id,
        "data-animate": true,
        className: `transform transition-all duration-1000 ease-out ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"} ${className}`,
        style: { transitionDelay: `${delay}ms` },
        children
      }
    );
  };
  const teamMembers = [
    {
      name: "Jayson Chen",
      role: "Founder & CEO",
      description: "Zertifizierter Datenschutzbeauftragter mit 10 Jahren Erfahrung (u. a. ZF Group). Baut aus Deep-Tech praxisnahe Compliance-Lösungen.",
      linkedin: "#",
      email: "jayson@marsstein.ai"
    },
    {
      name: "Jonas Krüger",
      role: "Founding GTM (Marketing & Sales)",
      description: "Unternehmer & Datenschutzexperte, 8+ Jahre B2B-Growth & SEO. Bringt komplexe Regulierung in klare, messbare Journeys.",
      linkedin: "#",
      email: "jonas@marsstein.ai"
    },
    {
      name: "Javier Ponzo",
      role: "Founding Engineer (Full-Stack)",
      description: "Rails & React. Baut robuste SaaS-Automationen mit Security-Fokus.",
      linkedin: "#",
      email: "javier@marsstein.ai"
    },
    {
      name: "Ilia Fazleev",
      role: "Founding Tech Lead (Backend & Security)",
      description: "18 Jahre Embedded/Safety (ZF, Porsche). Spezialisiert auf sichere, skalierbare Architekturen.",
      linkedin: "#",
      email: "ilia@marsstein.ai"
    },
    {
      name: "Chenwei Zhang",
      role: "Founding AI Engineer",
      description: "Echtzeit-Inference, NN-Optimierung, Perception-Systeme. Übersetzt Forschung in verlässliche Produktfeatures.",
      linkedin: "#",
      email: "chenwei@marsstein.ai"
    }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Über uns - Marsstein | Life's too short for regs." }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "description",
          content: "Lernen Sie das Marsstein-Team kennen. Wir machen EU-Compliance so einfach wie das Speichern einer Datei – mit KI-gestützter GDPR-, ISO 27001- und AI Act-Unterstützung."
        }
      ),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "Marsstein Team, Compliance Experten, GDPR Automatisierung, EU AI Act, Datenschutz Software" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://marsstein.ai/ueber-uns" })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("main", { className: "min-h-screen bg-white", children: [
      /* @__PURE__ */ jsxs("section", { className: "relative py-20 px-4 overflow-hidden", children: [
        /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: "/src/assets/hero-about.png",
              alt: "Marsstein Header",
              className: "w-full h-full object-cover"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#e24e1b]/20 to-[#f97316]/20" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-6xl relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "text-center text-white", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/30", children: [
            /* @__PURE__ */ jsx(Target, { className: "w-4 h-4" }),
            "Über Marsstein"
          ] }),
          /* @__PURE__ */ jsxs("h1", { className: "text-5xl md:text-7xl font-black mb-6 leading-tight", children: [
            "Life's too short",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "text-yellow-200", children: "for regs." })
          ] }),
          /* @__PURE__ */ jsxs("p", { className: "text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-95", children: [
            "Wir machen Compliance so ",
            /* @__PURE__ */ jsx("span", { className: "font-bold underline", children: "selbstverständlich" }),
            "wie das Speichern einer Datei – schnell, sicher, erklärbar."
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-lg mb-10 max-w-3xl mx-auto opacity-90", children: "Marsstein ist die KI-gestützte Plattform, die GDPR, ISO 27001 und den EU-AI-Act in einen klaren Workflow übersetzt." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true", children: /* @__PURE__ */ jsxs(
              Button,
              {
                size: "lg",
                className: "bg-white text-[#e24e1b] hover:bg-gray-100 px-8 py-3 font-semibold",
                children: [
                  "Demo buchen",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5" })
                ]
              }
            ) }),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outline",
                size: "lg",
                className: "border-2 border-white text-white hover:bg-white hover:text-[#e24e1b] px-8 py-3 font-semibold",
                children: "Team kennenlernen"
              }
            )
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs(AnimatedCard, { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: [
            "Warum wir ",
            /* @__PURE__ */ jsx("span", { className: "text-[#e24e1b]", children: "Marsstein" }),
            " bauen"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-[#e24e1b] to-[#f97316] mx-auto rounded-full" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-8 mb-16", children: [
          /* @__PURE__ */ jsx(AnimatedCard, { delay: 200, children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-2xl shadow-lg text-center h-full", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-[#e24e1b] rounded-2xl flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(Lightbulb, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Komplexität raus, Klarheit rein" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: "Europaweite Regulierungen (GDPR, AI Act, ISO 27001) sind wichtig – aber unnötig kompliziert. Wir übersetzen sie in verständliche Workflows." })
          ] }) }),
          /* @__PURE__ */ jsx(AnimatedCard, { delay: 400, children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-2xl shadow-lg text-center h-full", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(Heart, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "SMBs zuerst" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: "Mittelständische Unternehmen tragen den größten Aufwand bei knappsten Ressourcen. Deshalb bauen wir für euch – nicht für Konzerne." })
          ] }) }),
          /* @__PURE__ */ jsx(AnimatedCard, { delay: 600, children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-2xl shadow-lg text-center h-full", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Von Wochen zu Tagen" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 leading-relaxed", children: "Automatisierte Dokumente, Kontrollen & Audit-Vorbereitung – mit Expert·innen im Loop für maximale Qualität." })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(AnimatedCard, { delay: 800, children: /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-2xl p-12 shadow-lg", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-3xl font-bold text-gray-900 mb-8 text-center", children: "Unsere Vision & Mission" }),
          /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-[#e24e1b] to-[#f97316] rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Target, { className: "w-8 h-8 text-white" }) }),
              /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-[#e24e1b] mb-4", children: "Vision" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-700 italic", children: '„Compliance, die sich einfach erledigt."' })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4", children: /* @__PURE__ */ jsx(Rocket, { className: "w-8 h-8 text-white" }) }),
              /* @__PURE__ */ jsx("h4", { className: "text-2xl font-bold text-blue-600 mb-4", children: "Mission" }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-700", children: "Eine EU-/CH-gehostete, KI-native Plattform, die Richtlinien analysiert, Lücken erklärt und Teams sicher zur Zertifizierung führt – mit lückenloser Audit-Spur." })
            ] })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs(AnimatedCard, { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: [
            "Was wir konkret ",
            /* @__PURE__ */ jsx("span", { className: "text-[#e24e1b]", children: "tun" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto mb-6", children: "In 30 Sekunden erklärt – so funktioniert Marsstein" }),
          /* @__PURE__ */ jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-[#e24e1b] to-[#f97316] mx-auto rounded-full" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
          /* @__PURE__ */ jsx(AnimatedCard, { delay: 200, children: /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-8 rounded-2xl border border-blue-100 text-center h-full hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(BookOpen, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Dokument-Generator" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Policies, DPIA, TOM, SCCs – strukturiert, prüfbar und rechtssicher generiert." }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-blue-600 font-medium", children: "Automatisiert" })
          ] }) }),
          /* @__PURE__ */ jsx(AnimatedCard, { delay: 400, children: /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-8 rounded-2xl border border-green-100 text-center h-full hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(CheckCircle, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Kontrollen & Tasks" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Maßnahmen planen, zuweisen, verfolgen – mit lückenloser Dokumentation." }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-green-600 font-medium", children: "Nachverfolgbar" })
          ] }) }),
          /* @__PURE__ */ jsx(AnimatedCard, { delay: 600, children: /* @__PURE__ */ jsxs("div", { className: "bg-purple-50 p-8 rounded-2xl border border-purple-100 text-center h-full hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(Award, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Audit-Vorbereitung" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Evidenzen sammeln, Prüfschritte leiten – Export für Auditor·innen inklusive." }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-purple-600 font-medium", children: "Audit-Ready" })
          ] }) }),
          /* @__PURE__ */ jsx(AnimatedCard, { delay: 800, children: /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-8 rounded-2xl border border-orange-100 text-center h-full hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx("div", { className: "w-16 h-16 bg-[#e24e1b] rounded-2xl flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx(Globe, { className: "w-8 h-8 text-white" }) }),
            /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-4", children: "Multi-Framework" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "GDPR, AI-Act & ISO 27001 – ein Konto, ein Workflow, alle Standards." }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-[#e24e1b] font-medium", children: "All-in-One" })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 bg-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxs(AnimatedCard, { className: "text-center mb-16", children: [
          /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: [
            "Das ",
            /* @__PURE__ */ jsx("span", { className: "text-[#e24e1b]", children: "Team" }),
            " hinter Marsstein"
          ] }),
          /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 max-w-4xl mx-auto mb-6", children: "Fünf Gründer mit über 50 Jahren kombinierter Erfahrung aus Deep-Tech, Compliance und Enterprise-Growth" }),
          /* @__PURE__ */ jsx("div", { className: "w-24 h-1 bg-gradient-to-r from-[#e24e1b] to-[#f97316] mx-auto rounded-full" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12", children: teamMembers.map((member, index) => /* @__PURE__ */ jsx(AnimatedCard, { delay: index * 200, children: /* @__PURE__ */ jsxs("div", { className: "bg-white p-8 rounded-2xl shadow-lg text-center h-full", children: [
          /* @__PURE__ */ jsx("div", { className: "w-20 h-20 bg-gradient-to-br from-[#e24e1b] to-[#f97316] rounded-2xl flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsx("span", { className: "text-white font-bold text-xl", children: member.name.split(" ").map((n) => n[0]).join("") }) }),
          /* @__PURE__ */ jsx("h3", { className: "text-xl font-bold text-gray-900 mb-2", children: member.name }),
          /* @__PURE__ */ jsx("p", { className: "text-[#e24e1b] font-semibold mb-4", children: member.role }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 text-sm mb-6 leading-relaxed", children: member.description }),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-center gap-3", children: [
            /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", className: "h-10 w-10 p-0", children: /* @__PURE__ */ jsx(Linkedin, { className: "w-4 h-4 text-blue-600" }) }),
            /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", className: "h-10 w-10 p-0", children: /* @__PURE__ */ jsx(Mail, { className: "w-4 h-4 text-gray-600" }) })
          ] })
        ] }) }, index)) }),
        /* @__PURE__ */ jsx(AnimatedCard, { delay: 1200, children: /* @__PURE__ */ jsx("div", { className: "bg-white rounded-2xl p-8 shadow-lg", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-[#e24e1b] mb-2", children: "50+" }),
            /* @__PURE__ */ jsx("div", { className: "text-gray-600 font-medium", children: "Jahre Erfahrung" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-blue-600 mb-2", children: "5" }),
            /* @__PURE__ */ jsx("div", { className: "text-gray-600 font-medium", children: "Gründer" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-green-600 mb-2", children: "100%" }),
            /* @__PURE__ */ jsx("div", { className: "text-gray-600 font-medium", children: "Remote-Ready" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-purple-600 mb-2", children: "∞" }),
            /* @__PURE__ */ jsx("div", { className: "text-gray-600 font-medium", children: "Leidenschaft" })
          ] })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsx(AnimatedCard, { className: "text-center mb-16", children: /* @__PURE__ */ jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-gray-900 mb-4", children: [
          "Stimmen unserer ",
          /* @__PURE__ */ jsx("span", { className: "text-[#e24e1b]", children: "Kund:innen" })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [
          /* @__PURE__ */ jsx(AnimatedCard, { delay: 200, children: /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 p-8 rounded-2xl border border-orange-100", children: [
            /* @__PURE__ */ jsx("div", { className: "flex text-orange-400 mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, i)) }),
            /* @__PURE__ */ jsx("blockquote", { className: "text-gray-700 text-lg mb-6", children: '"€80.000 für GDPR-Beratung – langsam und schmerzhaft. Mit Marsstein schaffen wir es in 30 Tagen für €3.600."' }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
              /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-900", children: "CEO" }),
              /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: "Klein Automotive GmbH" })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(AnimatedCard, { delay: 400, children: /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-8 rounded-2xl border border-blue-100", children: [
            /* @__PURE__ */ jsx("div", { className: "flex text-blue-400 mb-4", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsx("svg", { className: "w-5 h-5 fill-current", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" }) }, i)) }),
            /* @__PURE__ */ jsx("blockquote", { className: "text-gray-700 text-lg mb-6", children: '"Die KI-Erklärungen sind klarer als Juristen-Texte. Spart uns jede Woche 10+ Stunden."' }),
            /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
              /* @__PURE__ */ jsx("div", { className: "font-bold text-gray-900", children: "Compliance Officer" }),
              /* @__PURE__ */ jsx("div", { className: "text-gray-600", children: "ATTC" })
            ] })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-20 px-4 bg-gradient-to-r from-[#e24e1b] to-[#f97316]", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-4xl text-center text-white", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Arbeiten bei Marsstein" }),
        /* @__PURE__ */ jsx("p", { className: "text-xl mb-8 opacity-95", children: "Wir verbinden Impact (gesellschaftlich relevante Compliance) mit klarem Produktfokus." }),
        /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6 mb-10", children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-2", children: "Remote-first in Europa" }),
            /* @__PURE__ */ jsx("p", { className: "opacity-90", children: "Regelmäßige Offsites für direkten Austausch" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-2", children: "Saubere Code-Basen" }),
            /* @__PURE__ */ jsx("p", { className: "opacity-90", children: "Kleine Teams mit viel Ownership" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-bold text-lg mb-2", children: "Meaningful Impact" }),
            /* @__PURE__ */ jsx("p", { className: "opacity-90", children: "Compliance für Millionen vereinfachen" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "secondary",
              size: "lg",
              className: "bg-white text-[#e24e1b] hover:bg-gray-100 px-8 py-3 font-semibold",
              children: "Offene Rollen ansehen"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "lg",
              className: "border-2 border-white text-white hover:bg-white hover:text-[#e24e1b] px-8 py-3 font-semibold",
              children: "Initiativ bewerben"
            }
          )
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  About as default
};
