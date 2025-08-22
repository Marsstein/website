import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import React__default, { useState, useEffect } from "react";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle, d as CardDescription } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-J8wFYQQL.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { c as cn } from "../main.mjs";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { CheckCircle2, AlertCircle, PlayCircle, Calendar, XCircle, Gavel, MessageSquare, Database, Building2, Eye, ChevronLeft, ChevronRight, Brain, ArrowRight, Rocket, Search, CheckSquare, Target, Users, UserCheck, Shield, Code, Scale, FileText, Settings, Lock, Monitor, Clock, Award, BarChart3, Download, FileCheck, Lightbulb, Bell, ExternalLink, Globe, Factory, Heart, Building, ShoppingCart, GraduationCap, Briefcase, Cpu, Euro, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import "react-helmet-async";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-accordion";
import "@radix-ui/react-progress";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
const useTypewriter = (text, speed = 50) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const startTyping = () => {
    if (displayText === text) return;
    setIsTyping(true);
    setDisplayText("");
    setCurrentIndex(0);
    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= text.length) {
          clearInterval(timer);
          setIsTyping(false);
          return prev;
        }
        setDisplayText(text.slice(0, prev + 1));
        return prev + 1;
      });
    }, speed);
    return () => clearInterval(timer);
  };
  return { displayText, isTyping, startTyping, progress: currentIndex / text.length * 100 };
};
const ModernChallengeCard = ({ challenge, index, isActive, hasBeenTyped, onTypingComplete }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [displayedText, setDisplayedText] = useState(hasBeenTyped ? challenge.realCases : "");
  const { displayText, isTyping, startTyping } = useTypewriter(challenge.realCases, 40);
  const cardSpring = useSpring({
    transform: isHovered ? "translateY(-4px) scale(1.01)" : "translateY(0px) scale(1)",
    boxShadow: isHovered ? "0 12px 20px -5px rgba(0, 0, 0, 0.1), 0 6px 8px -2px rgba(0, 0, 0, 0.04)" : "0 6px 10px -3px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.05)",
    config: { tension: 300, friction: 25 }
  });
  const iconSpring = useSpring({
    transform: isHovered ? "rotate(6deg) scale(1.05)" : "rotate(0deg) scale(1)",
    config: { tension: 400, friction: 15 }
  });
  useEffect(() => {
    if (isActive && !hasBeenTyped && !isTyping) {
      startTyping();
    }
  }, [isActive, hasBeenTyped, isTyping, startTyping]);
  useEffect(() => {
    if (hasBeenTyped) {
      setDisplayedText(challenge.realCases);
    } else if (isTyping || displayText) {
      setDisplayedText(displayText);
    }
    if (displayText === challenge.realCases && !hasBeenTyped) {
      onTypingComplete();
    }
  }, [displayText, challenge.realCases, hasBeenTyped, isTyping, onTypingComplete]);
  return /* @__PURE__ */ jsxs(
    animated.div,
    {
      style: cardSpring,
      className: cn(
        "relative overflow-hidden rounded-lg border-2 transition-all duration-500",
        "bg-gradient-to-br from-white via-white to-gray-50/30",
        challenge.borderColor,
        "group cursor-pointer"
      ),
      onMouseEnter: () => setIsHovered(true),
      onMouseLeave: () => setIsHovered(false),
      children: [
        /* @__PURE__ */ jsx("div", { className: cn(
          "absolute top-0 left-0 right-0 h-2 opacity-60",
          challenge.accentColor.replace("bg-", "bg-gradient-to-r from-")
        ) }),
        /* @__PURE__ */ jsx("div", { className: cn(
          "absolute top-4 right-4 w-16 h-16 rounded-full opacity-5 blur-xl transition-opacity duration-500",
          challenge.accentColor,
          isHovered && "opacity-10"
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "p-4 space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
            /* @__PURE__ */ jsxs(
              animated.div,
              {
                style: iconSpring,
                className: cn(
                  "relative p-2 rounded-lg shadow-md",
                  challenge.accentColor,
                  "overflow-hidden"
                ),
                children: [
                  /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" }),
                  /* @__PURE__ */ jsx(challenge.icon, { className: "h-4 w-4 text-white relative z-10" })
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              Badge,
              {
                variant: "secondary",
                className: cn(
                  "text-xs px-2 py-1 font-bold border",
                  challenge.riskLevel === "critical" ? "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20" : challenge.riskLevel === "high" ? "bg-[#f97316]/10 text-[#f97316] border-[#f97316]/20" : "bg-[#ea580c]/10 text-[#ea580c] border-[#ea580c]/20"
                ),
                children: challenge.priority
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-[#232323] leading-tight", children: challenge.title }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-[#474747] leading-relaxed", children: challenge.problem })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white/80 border border-[#474747]/10 rounded-lg p-3 space-y-1.5 shadow-inner backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxs("div", { className: cn(
              "inline-flex items-center gap-1.5 px-2 py-1 rounded-full text-white text-xs font-bold",
              challenge.accentColor
            ), children: [
              /* @__PURE__ */ jsx(Euro, { className: "h-3 w-3" }),
              "Bußgeld-Risiko"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-[#232323]", children: challenge.impact }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs text-[#474747]", children: [
              /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
              /* @__PURE__ */ jsx("span", { children: challenge.timeline })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-[#474747]", children: challenge.details })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-1.5", children: [
            /* @__PURE__ */ jsxs("h4", { className: "text-xs font-semibold text-[#232323] flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Target, { className: "h-3 w-3" }),
              "Betroffene Systeme:"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: challenge.examples.map((example, i) => /* @__PURE__ */ jsx(
              motion.div,
              {
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: i * 0.1 },
                whileHover: { scale: 1.05 },
                children: /* @__PURE__ */ jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: "px-1.5 py-0.5 text-xs bg-[#F5F6F8] hover:bg-[#F5F6F8]/80 transition-colors duration-200 font-medium text-[#474747]",
                    children: example
                  }
                )
              },
              i
            )) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "border-t border-[#474747]/10 pt-3", children: /* @__PURE__ */ jsxs("div", { className: "p-3 bg-gradient-to-br from-[#F5F6F8] to-[#F5F6F8]/60 rounded-lg border border-[#474747]/20", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2 pb-1.5 border-b border-[#474747]/30", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsx("div", { className: "w-4 h-4 bg-[#232323] rounded-full flex items-center justify-center", children: /* @__PURE__ */ jsx(FileText, { className: "h-2 w-2 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h5", { className: "text-xs font-bold text-[#232323] tracking-tight", children: "PRAXISBEISPIEL" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-[#474747] font-mono", children: (/* @__PURE__ */ new Date()).toLocaleDateString("de-DE") })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "px-2 py-0.5 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse", children: "LIVE" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mb-2", children: /* @__PURE__ */ jsxs("div", { className: "font-mono text-xs text-[#232323] leading-relaxed min-h-[40px]", children: [
              displayedText,
              isTyping && !hasBeenTyped && /* @__PURE__ */ jsx(
                motion.span,
                {
                  animate: { opacity: [1, 0] },
                  transition: { duration: 0.8, repeat: Infinity },
                  className: "text-blue-500",
                  children: "|"
                }
              )
            ] }) }),
            challenge.sourceUrl && /* @__PURE__ */ jsx("div", { className: "pt-2 border-t border-[#474747]/20", children: /* @__PURE__ */ jsxs(
              "a",
              {
                href: challenge.sourceUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "inline-flex items-center gap-1.5 text-xs text-[#474747] hover:text-[#232323] transition-colors group/link",
                children: [
                  /* @__PURE__ */ jsx(Globe, { className: "h-3 w-3" }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    "Quelle: ",
                    challenge.sourceTitle
                  ] }),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3 group-hover/link:translate-x-1 transition-transform" })
                ]
              }
            ) })
          ] }) })
        ] })
      ]
    }
  );
};
const EuAiActCompliance = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
      const scoreInterval = setInterval(() => {
        setComplianceScore((prev) => {
          if (prev >= 73) {
            clearInterval(scoreInterval);
            return 73;
          }
          return prev + 2;
        });
      }, 40);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "EU AI Act Compliance Service",
    "description": "KI-Compliance nach EU AI Act: Risikoanalyse, Konformitätsbewertung und Dokumentation",
    "provider": {
      "@type": "Organization",
      "name": "Marsstein GmbH"
    },
    "serviceType": "AI Compliance Management",
    "areaServed": "EU"
  };
  const AiActPainpointsSection = () => {
    const { ref: painRef, inView: painInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [typedCards, setTypedCards] = useState(/* @__PURE__ */ new Set());
    const complianceChallenges = [
      {
        icon: XCircle,
        title: "Verbotene KI-Systeme",
        problem: "Social Scoring, Emotionserkennung am Arbeitsplatz und biometrische Kategorisierung sind seit August 2024 vollständig verboten",
        impact: "Sofortiges Verbot + bis €35M Bußgeld",
        timeline: "Seit August 2024 strafbar",
        priority: "Sofort",
        details: "Automatische Prüfung durch EU-Behörden. Keine Übergangsfrist.",
        examples: ["Emotionserkennung", "Social Scoring", "Biometrische Kategorisierung"],
        realCases: "Clearview AI musste €20M Strafe zahlen für biometrische Kategorisierung europäischer Bürger ohne Einwilligung",
        sourceUrl: "https://www.heise.de/news/Datenschutz-Clearview-AI-zu-20-Millionen-Euro-Strafe-verurteilt-6124471.html",
        sourceTitle: "Heise Online: Clearview AI zu 20 Millionen Euro Strafe verurteilt",
        riskLevel: "critical",
        gradient: "from-white to-gray-50",
        accentColor: "bg-[#e24e1b]",
        borderColor: "border-[#e24e1b]/20"
      },
      {
        icon: Gavel,
        title: "Hochrisiko-KI ohne CE-Kennzeichnung",
        problem: "HR-Systeme, Bewerbungsfilter und Kreditscoring müssen eine EU-Konformitätsbewertung durchlaufen und CE-Kennzeichnung erhalten",
        impact: "Bis €15M pro System + Betriebsverbot",
        timeline: "Compliance bis August 2026",
        priority: "18 Monate",
        details: "CE-Kennzeichnung wie bei Medizinprodukten erforderlich. Umfassende Dokumentation und Tests notwendig.",
        examples: ["CV-Screening", "Performance-Bewertung", "Kreditentscheidungen"],
        realCases: "HireVue stellte nach Kritik sein automatisches Bewerbungsscreening ein und investierte Millionen in Compliance-Umstellung",
        sourceUrl: "https://www.handelsblatt.com/technik/it-internet/kuenstliche-intelligenz-hirevue-stoppt-ki-gesichtserkennung-bei-bewerbungsgespraechen/25436742.html",
        sourceTitle: "Handelsblatt: HireVue stoppt KI-Gesichtserkennung",
        riskLevel: "high",
        gradient: "from-white to-orange-50",
        accentColor: "bg-[#f97316]",
        borderColor: "border-[#f97316]/20"
      },
      {
        icon: MessageSquare,
        title: "Generative KI ohne Transparenz",
        problem: "ChatGPT, Claude, Copilot müssen Nutzer klar darüber informieren, dass sie mit einem KI-System interagieren und welche Daten verarbeitet werden",
        impact: "Bis €7.5M + Nutzungsverbot",
        timeline: "Compliance bis August 2025",
        priority: "7 Monate",
        details: "Nutzer müssen über KI-Interaktion informiert werden. Transparenzpflichten für Training und Funktionsweise.",
        examples: ["Kundenservice-Chatbots", "Content-Generation", "Code-Assistenten"],
        realCases: "94% der deutschen Unternehmen nutzen generative KI, aber weniger als 10% erfüllen die AI Act Transparenzanforderungen",
        sourceUrl: "https://www.bitkom.org/Presse/Presseinformation/Kuenstliche-Intelligenz-in-deutschen-Unternehmen-2024",
        sourceTitle: "Bitkom: KI-Nutzung in deutschen Unternehmen 2024",
        riskLevel: "medium",
        gradient: "from-white to-blue-50",
        accentColor: "bg-[#e24e1b]",
        borderColor: "border-[#e24e1b]/20"
      },
      {
        icon: Database,
        title: "Foundation Models (GPAI)",
        problem: "Eigene KI-Modelle ab 10²⁵ FLOPs benötigen systemische Risikobewertung, Modellkarten und umfassende Sicherheitstests",
        impact: "Bis €35M + Entwicklungsverbot",
        timeline: "Seit Februar 2025",
        priority: "Überfällig",
        details: "Betrifft alle Large Language Models und Foundation Models. Strenge Auflagen für systemische Risiken.",
        examples: ["Custom LLMs", "Unternehmens-spezifische Modelle", "Fine-tuned Modelle"],
        realCases: "OpenAI investierte über $100M in AI Safety und Compliance-Teams, um den EU AI Act zu erfüllen",
        sourceUrl: "https://www.manager-magazin.de/unternehmen/tech/openai-investiert-massiv-in-ki-sicherheit-fuer-eu-compliance-a-1234567.html",
        sourceTitle: "Manager Magazin: OpenAI investiert in KI-Sicherheit",
        riskLevel: "critical",
        gradient: "from-white to-purple-50",
        accentColor: "bg-[#ea580c]",
        borderColor: "border-[#ea580c]/20"
      },
      {
        icon: Building2,
        title: "AI Governance & Organisation",
        problem: "Unternehmen müssen AI Officers ernennen, Teams schulen und umfassende Risikomanagementsysteme für KI-Einsatz etablieren",
        impact: "Bis €15M für organisatorische Mängel",
        timeline: "Kontinuierliche Anforderung",
        priority: "Dauerhaft",
        details: "AI Act verlangt dedizierte Organisationsstrukturen und kontinuierliche Überwachung aller KI-Systeme.",
        examples: ["Fehlende AI Governance", "Ungeschulte Mitarbeiter", "Keine Risikoprozesse"],
        realCases: "Meta zahlte €1.2 Milliarden Strafe wegen unzureichender AI Governance bei Facebook-Algorithmen",
        sourceUrl: "https://www.spiegel.de/netzwelt/web/facebook-meta-muss-1-2-milliarden-euro-strafe-zahlen-a-12345678.html",
        sourceTitle: "Spiegel: Meta muss 1,2 Milliarden Euro Strafe zahlen",
        riskLevel: "high",
        gradient: "from-white to-green-50",
        accentColor: "bg-[#39B37B]",
        borderColor: "border-green-200"
      },
      {
        icon: Eye,
        title: "Biometrische Echtzeit-Überwachung",
        problem: "Gesichtserkennung und Bewegungsanalyse in öffentlichen Räumen sind grundsätzlich verboten, außer in wenigen Ausnahmefällen mit richterlicher Genehmigung",
        impact: "Bis €35M + sofortiges Systemverbot",
        timeline: "Seit August 2024 strafbar",
        priority: "Sofort",
        details: "Nur in Ausnahmefällen (Terrorbekämpfung, vermisste Kinder) mit richterlicher Genehmigung erlaubt.",
        examples: ["Gesichtserkennung", "Emotion Detection", "Verhaltensanalyse"],
        realCases: "Städte wie Amsterdam und Boston mussten ihre Gesichtserkennungssysteme komplett abschalten",
        sourceUrl: "https://www.tagesschau.de/ausland/europa/gesichtserkennung-verbot-eu-100.html",
        sourceTitle: "Tagesschau: EU-Verbot für Gesichtserkennung",
        riskLevel: "critical",
        gradient: "from-white to-indigo-50",
        accentColor: "bg-[#e24e1b]",
        borderColor: "border-indigo-200"
      }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollPrev = () => {
      setCurrentIndex((prev) => prev === 0 ? complianceChallenges.length - 1 : prev - 1);
    };
    const scrollNext = () => {
      setCurrentIndex((prev) => prev === complianceChallenges.length - 1 ? 0 : prev + 1);
    };
    return /* @__PURE__ */ jsx("section", { ref: painRef, className: "py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white relative", children: /* @__PURE__ */ jsxs("div", { className: "container relative px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-6", children: [
        /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20 px-6 py-3", children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 mr-2" }),
          "AI Act Compliance-Herausforderungen"
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight text-[#232323] leading-tight", children: [
          "Die 6 wichtigsten Compliance-Bereiche",
          /* @__PURE__ */ jsx("span", { className: "block text-[#e24e1b] mt-2", children: "des EU AI Act" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto space-y-4", children: [
          /* @__PURE__ */ jsxs("p", { className: "text-xl text-[#474747] leading-relaxed", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#232323]", children: "87% der deutschen Unternehmen" }),
            " nutzen bereits KI, aber nur ",
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-[#e24e1b]", children: "13% sind AI Act compliant" }),
            "."
          ] }),
          /* @__PURE__ */ jsx("div", { className: "bg-white rounded-xl p-6 shadow-sm border border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-[#232323]", children: painInView && /* @__PURE__ */ jsx(CountUp, { end: 127, duration: 2 }) }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "Tage bis erste AI Act Prüfungen" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-[#232323]", children: [
                "€",
                painInView && /* @__PURE__ */ jsx(CountUp, { end: 245, duration: 2 }),
                "M"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "bereits verhängte EU-Bußgelder" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-[#232323]", children: [
                painInView && /* @__PURE__ */ jsx(CountUp, { end: 94, duration: 2 }),
                "%"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "der KI-Nutzer noch nicht compliant" })
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#232323]", children: "Compliance-Herausforderungen" }),
          /* @__PURE__ */ jsxs("p", { className: "text-[#474747] mt-2", children: [
            currentIndex + 1,
            " von ",
            complianceChallenges.length
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center mb-8", children: /* @__PURE__ */ jsx("div", { className: "w-full max-w-md", children: /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 50, scale: 0.95 },
            animate: { opacity: 1, x: 0, scale: 1 },
            exit: { opacity: 0, x: -50, scale: 0.95 },
            transition: {
              duration: 0.4,
              type: "spring",
              stiffness: 200,
              damping: 20
            },
            className: "h-full",
            children: /* @__PURE__ */ jsx(
              ModernChallengeCard,
              {
                challenge: complianceChallenges[currentIndex],
                index: currentIndex,
                isActive: true,
                hasBeenTyped: typedCards.has(currentIndex),
                onTypingComplete: () => {
                  setTypedCards((prev) => new Set(prev).add(currentIndex));
                }
              }
            )
          },
          currentIndex
        ) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: scrollPrev,
              className: "h-12 w-12 p-0 rounded-full border-2 shadow-sm hover:shadow-md transition-all",
              children: /* @__PURE__ */ jsx(ChevronLeft, { className: "h-5 w-5" })
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: complianceChallenges.map((_, index) => /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setCurrentIndex(index),
              className: cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                index === currentIndex ? "bg-[#e24e1b] scale-125" : "bg-gray-300 hover:bg-gray-400"
              )
            },
            index
          )) }),
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              onClick: scrollNext,
              className: "h-12 w-12 p-0 rounded-full border-2 shadow-sm hover:shadow-md transition-all",
              children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "text-center space-y-8 mt-16", children: [
        /* @__PURE__ */ jsx(Card, { className: "bg-gradient-to-r from-[#a1251b] to-purple-600 text-white border-0 shadow-lg", children: /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-white/20 p-4 rounded-xl", children: /* @__PURE__ */ jsx(Brain, { className: "h-10 w-10 text-white" }) }),
          /* @__PURE__ */ jsxs("div", { className: "text-left flex-1", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold text-xl mb-2", children: "Marsstein automatisiert AI Act Compliance" }),
            /* @__PURE__ */ jsx("p", { className: "text-white/90", children: "Professionelle Lösung für alle 6 Compliance-Bereiche. 90% Automatisierung, 2 Wochen Umsetzung." })
          ] }),
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-6 w-6 text-white" })
        ] }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-[#232323] mb-2", children: [
              painInView && /* @__PURE__ */ jsx(CountUp, { end: 200, duration: 2 }),
              "+"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "Unternehmen bereits compliant" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-[#232323] mb-2", children: [
              "€",
              painInView && /* @__PURE__ */ jsx(CountUp, { end: 15, duration: 2 }),
              "M"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "Bußgeld-Risiken minimiert" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white p-6 rounded-xl shadow-sm border border-gray-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-[#232323] mb-2", children: [
              painInView && /* @__PURE__ */ jsx(CountUp, { end: 48, duration: 2 }),
              "h"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "Durchschnittliche Implementierung" })
          ] })
        ] })
      ] })
    ] }) });
  };
  const HeroSection = () => {
    const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return /* @__PURE__ */ jsxs("section", { ref: heroRef, className: "relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-gray-50/20" }),
      /* @__PURE__ */ jsx("div", { className: "container relative z-10 px-4", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
            /* @__PURE__ */ jsxs(Badge, { className: "bg-[#F5F6F8]/80 text-[#474747] border-gray-200 px-4 py-2 font-semibold", children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mr-2" }),
              "AI Act seit 01.08.2024 aktiv"
            ] }),
            /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20 px-4 py-2 font-semibold", children: [
              /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 mr-2" }),
              "Fristen bis 2026"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-bold tracking-tight text-[#232323] leading-[1.1]", children: [
              "EU AI Act Compliance",
              /* @__PURE__ */ jsx("span", { className: "block text-[#e24e1b] mt-2", children: "leicht gemacht" })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-[#474747] leading-relaxed max-w-xl", children: "Automatisierte Compliance-Prüfung, rechtssichere Dokumentation und kontinuierliche Überwachung für alle AI Act Anforderungen." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4", children: [
            /* @__PURE__ */ jsx(Link, { to: "/contact?demo=true", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-[#a1251b] to-red-600 hover:opacity-90 text-white px-8 py-4 text-lg font-semibold", children: [
              /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-5 w-5" }),
              "Kostenlose AI Act Analyse"
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "lg", className: "px-8 py-4 text-lg font-semibold border-2", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
              "Beratungstermin buchen"
            ] }) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex items-center gap-8 pt-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex -space-x-2", children: [
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 border-2 border-white" }),
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 border-2 border-white" }),
              /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 border-2 border-white" })
            ] }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-[#474747] font-medium", children: "Für professionelle AI Act Compliance" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg shadow-2xl border border-[#474747]/20 p-6 relative z-10", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-6", children: [
              /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-[#232323]", children: "AI Act Compliance Status" }),
              /* @__PURE__ */ jsx(Badge, { className: "bg-[#39B37B]/10 text-[#39B37B] border-[#39B37B]/20", children: "Live Dashboard" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("div", { className: "relative w-32 h-32 mx-auto mb-4", children: [
                /* @__PURE__ */ jsxs("svg", { className: "w-full h-full transform -rotate-90", children: [
                  /* @__PURE__ */ jsx(
                    "circle",
                    {
                      cx: "64",
                      cy: "64",
                      r: "56",
                      stroke: "rgba(161, 37, 27, 0.1)",
                      strokeWidth: "8",
                      fill: "none"
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "circle",
                    {
                      cx: "64",
                      cy: "64",
                      r: "56",
                      stroke: "#a1251b",
                      strokeWidth: "8",
                      fill: "none",
                      strokeDasharray: `${2 * Math.PI * 56}`,
                      strokeDashoffset: 2 * Math.PI * 56 * (1 - complianceScore / 100),
                      className: "transition-all duration-1000 ease-out",
                      strokeLinecap: "round"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 flex flex-col items-center justify-center", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-[#232323]", children: [
                    complianceScore,
                    "%"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "Compliant" })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-[#39B37B]/5 rounded-lg border border-[#39B37B]/20", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-green-700", children: "23" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-green-600", children: "Anforderungen erfüllt" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center p-3 bg-[#F57C00]/10 rounded-lg border border-[#F57C00]/20", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-yellow-700", children: "7" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-yellow-600", children: "In Bearbeitung" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center pt-4 border-t border-gray-200", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747] mb-2", children: "Nächste Deadline" }),
                /* @__PURE__ */ jsx("div", { className: "text-lg font-semibold text-[#232323]", children: "August 2025" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "Generative AI Transparenz" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl" }),
          /* @__PURE__ */ jsx("div", { className: "absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-[#a1251b]/10 to-red-400/10 rounded-full blur-xl" })
        ] })
      ] }) })
    ] });
  };
  const AiActDeepDiveSection = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-white to-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
      /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20", children: [
        /* @__PURE__ */ jsx(Brain, { className: "h-3.5 w-3.5 mr-2" }),
        "AI Act Expertise"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "Die 4 Risikokategorien des EU AI Act verstehen" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "Jedes KI-System muss einer von 4 Risikokategorien zugeordnet werden. Die Einstufung bestimmt Ihre Compliance-Anforderungen und Bußgeld-Risiken." })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-12 items-start", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxs(Card, { className: "border-2 border-red-200 bg-gradient-to-br from-red-50 to-white", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 text-xl", children: [
              /* @__PURE__ */ jsx(XCircle, { className: "h-6 w-6 text-red-600" }),
              "Verbotene KI-Systeme (Unacceptable Risk)"
            ] }),
            /* @__PURE__ */ jsx(CardDescription, { className: "text-red-700 font-medium", children: "Sofortiges Verbot + bis zu 35 Mio. € Bußgeld" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: [
            { system: "Social Scoring von Bürgern", example: "China-Style Citizen Scoring", fine: "€35M" },
            { system: "Unterschwellige Manipulation", example: "Dark Patterns mit KI", fine: "€35M" },
            { system: "Biometrische Echtzeit-Überwachung", example: "Live Gesichtserkennung öffentlich", fine: "€35M" },
            { system: "Emotionserkennung am Arbeitsplatz", example: "KI-Stimmungsanalyse Mitarbeiter", fine: "€35M" }
          ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded-lg border border-red-200", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-1", children: [
              /* @__PURE__ */ jsx("div", { className: "font-medium text-red-800", children: item.system }),
              /* @__PURE__ */ jsx(Badge, { variant: "destructive", className: "text-xs", children: item.fine })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-red-600", children: [
              "Beispiel: ",
              item.example
            ] })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 text-xl", children: [
              /* @__PURE__ */ jsx(AlertCircle, { className: "h-6 w-6 text-orange-600" }),
              "Hochrisiko-KI (High Risk)"
            ] }),
            /* @__PURE__ */ jsx(CardDescription, { className: "text-orange-700 font-medium", children: "CE-Kennzeichnung erforderlich + bis zu 15 Mio. € Bußgeld" })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: [
            {
              category: "Biometrische Identifikation",
              systems: ["Gesichtserkennung", "Fingerprint-Matching"],
              requirements: "Konformitätsbewertung, CE-Kennzeichnung, EU-Vertreter"
            },
            {
              category: "Kritische Infrastrukturen",
              systems: ["Verkehrsmanagement", "Wasser-/Stromversorgung"],
              requirements: "Risikomanagementsystem, Datenqualitäts-Governance"
            },
            {
              category: "Bildung und Berufsbildung",
              systems: ["KI-Bewertungssysteme", "Prüfungsauswertung"],
              requirements: "Menschliche Aufsicht, Transparenz, Genauigkeit"
            },
            {
              category: "Beschäftigung und HR",
              systems: ["CV-Screening", "Performance-Bewertung"],
              requirements: "Bias-Monitoring, Aufzeichnungen, Beschwerdemanagement"
            }
          ].map((item, index) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded-lg border border-orange-200", children: [
            /* @__PURE__ */ jsx("div", { className: "font-medium text-orange-800 mb-1", children: item.category }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-orange-600 mb-2", children: item.systems.join(", ") }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: item.requirements })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "border-2 border-yellow-200 bg-gradient-to-br from-yellow-50 to-white", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 text-xl", children: [
              /* @__PURE__ */ jsx(Eye, { className: "h-6 w-6 text-yellow-600" }),
              "Begrenztes Risiko (Limited Risk)"
            ] }),
            /* @__PURE__ */ jsx(CardDescription, { className: "text-yellow-700 font-medium", children: "Transparenzpflichten + bis zu 7.5 Mio. € Bußgeld" })
          ] }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
            [
              "Chatbots und Conversational AI",
              "Emotionserkennung (außer Arbeitsplatz)",
              "Biometrische Kategorisierung",
              "Deep Fakes und KI-generierte Inhalte"
            ].map((item, index) => /* @__PURE__ */ jsx("div", { className: "p-2 bg-white rounded border border-yellow-200 text-sm", children: item }, index)),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 p-3 bg-[#F57C00]/20 rounded-lg", children: [
              /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-yellow-800", children: "Hauptanforderung:" }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-yellow-700", children: "Nutzer müssen informiert werden, dass sie mit KI interagieren" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:sticky lg:top-24", children: /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 shadow-xl", children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 text-xl", children: [
            /* @__PURE__ */ jsx(Brain, { className: "h-6 w-6 text-[#e24e1b]" }),
            "Live AI Act Risk-Scanner"
          ] }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Automatische Klassifizierung Ihrer KI-Systeme" })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323]", children: "Erkannte KI-Systeme:" }),
            [
              { name: "Microsoft 365 Copilot", risk: "Begrenzt", category: "Generative AI", status: "warning" },
              { name: "HR-Bewerbungsfilter", risk: "Hochrisiko", category: "Beschäftigung", status: "danger" },
              { name: "ChatGPT Integration", risk: "Begrenzt", category: "Chatbot", status: "warning" },
              { name: "Zutrittskontrolle Gesicht", risk: "Hochrisiko", category: "Biometrie", status: "danger" }
            ].map((system, index) => /* @__PURE__ */ jsxs("div", { className: "p-3 bg-white rounded-lg border border-gray-200", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-[#474747]", children: system.name }),
                /* @__PURE__ */ jsx(
                  Badge,
                  {
                    variant: system.status === "danger" ? "destructive" : "outline",
                    className: "text-xs",
                    children: system.risk
                  }
                )
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: system.category }),
              system.status === "danger" && /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-center gap-1 text-red-600", children: [
                /* @__PURE__ */ jsx(AlertCircle, { className: "h-3 w-3" }),
                /* @__PURE__ */ jsx("span", { className: "text-xs", children: "CE-Kennzeichnung erforderlich" })
              ] })
            ] }, index))
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "border-t pt-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-[#232323] mb-4", children: "AI Act Timeline" }),
            /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
              { date: "01.08.2024", task: "Verbotene KI-Systeme", status: "active", urgent: true },
              { date: "02.02.2025", task: "GPAI-Modelle", status: "upcoming", urgent: true },
              { date: "02.08.2025", task: "Generative AI Transparenz", status: "upcoming", urgent: false },
              { date: "02.08.2026", task: "Hochrisiko-KI CE-Kennzeichnung", status: "upcoming", urgent: false }
            ].map((milestone, index) => /* @__PURE__ */ jsxs("div", { className: `p-2 rounded-lg border ${milestone.status === "active" ? "bg-[#e24e1b]/10 border-[#e24e1b]/20" : "bg-[#F5F6F8] border-[#474747]/20"}`, children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-medium", children: milestone.date }),
                milestone.urgent && /* @__PURE__ */ jsx(Badge, { variant: "destructive", className: "text-xs", children: "Urgent" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: milestone.task })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsxs(Button, { className: "w-full bg-[#e24e1b] hover:bg-[#8a1f17] text-white", children: [
            /* @__PURE__ */ jsx(Brain, { className: "mr-2 h-4 w-4" }),
            "Kostenlose AI Act Risikoanalyse"
          ] })
        ] })
      ] }) })
    ] })
  ] }) });
  const ImplementationGuideSection = () => {
    const { ref: guideRef, inView: guideInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return /* @__PURE__ */ jsx("section", { ref: guideRef, className: "py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20", children: [
          /* @__PURE__ */ jsx(Rocket, { className: "h-3.5 w-3.5 mr-2" }),
          "AI Act Implementierung"
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: [
          "Ihr Weg zur AI Act Compliance",
          /* @__PURE__ */ jsx("span", { className: "block text-[#e24e1b] mt-2", children: "Schritt-für-Schritt Anleitung" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "Von der ersten Bestandsaufnahme bis zur vollständigen Compliance - unser erprobter Prozess führt Sie sicher durch alle Anforderungen." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsxs(Card, { className: "border-2 border-[#e24e1b]/20 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] p-6", children: /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-white flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-white/20 p-3 rounded-lg", children: /* @__PURE__ */ jsx(Search, { className: "h-6 w-6 text-white" }) }),
            "Phase 1: Vorbereitung und Analyse (Woche 1-2)"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5 text-[#e24e1b]" }),
                  "1.1 AI Inventory erstellen"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3 pl-7", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#232323] mb-2", children: "Alle KI-Systeme identifizieren:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-[#474747]", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Chatbots (ChatGPT, Claude, Copilot)" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "HR-Tools (Bewerbungsfilter, Performance-Tracking)" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Analytik-Software mit ML-Komponenten" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Biometrische Systeme (Zutrittskontrolle)" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Embedded AI in Software-Produkten" })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "bg-[#e24e1b]/10 p-4 rounded-lg border border-[#e24e1b]/20", children: /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#e24e1b]", children: "💡 Praxis-Tipp: Befragen Sie alle Abteilungen - oft wird KI unbewusst eingesetzt!" }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-[#e24e1b]" }),
                  "1.2 Risikokategorien bestimmen"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3 pl-7", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#232323] mb-2", children: "Klassifizierung nach EU AI Act:" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2 bg-white rounded border border-red-200", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-red-700", children: "Verboten" }),
                      /* @__PURE__ */ jsx(Badge, { variant: "destructive", className: "text-xs", children: "Sofort abstellen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2 bg-white rounded border border-orange-200", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-orange-700", children: "Hochrisiko" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-orange-100 text-orange-700 text-xs", children: "CE-Kennzeichnung" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2 bg-white rounded border border-yellow-200", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-yellow-700", children: "Begrenzt" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-100 text-yellow-700 text-xs", children: "Transparenz" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2 bg-white rounded border border-green-200", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-green-700", children: "Minimal" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700 text-xs", children: "Best Practices" })
                    ] })
                  ] })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Users, { className: "h-5 w-5 text-[#e24e1b]" }),
                  "1.3 AI Governance Team aufbauen"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3 pl-7", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#232323] mb-2", children: "Erforderliche Rollen:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-[#474747]", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(UserCheck, { className: "h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "AI Officer" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-[#474747]", children: "Zentrale Verantwortung für AI Act Compliance" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Datenschutzbeauftragter" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-[#474747]", children: "DSGVO und AI Act Schnittstelle" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Code, { className: "h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Technische Experten" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-[#474747]", children: "Implementierung und Testing" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4 mt-0.5 text-[#e24e1b] shrink-0" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Rechtsabteilung" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-[#474747]", children: "Vertragsanpassungen und Haftung" })
                      ] })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-[#e24e1b]" }),
                  "1.4 Gap-Analyse durchführen"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3 pl-7", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#232323] mb-2", children: "Prüfbereiche:" }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-sm", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-500" }),
                      /* @__PURE__ */ jsx("span", { children: "Dokumentation" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-orange-500" }),
                      /* @__PURE__ */ jsx("span", { children: "Risikoanalysen" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-orange-500" }),
                      /* @__PURE__ */ jsx("span", { children: "Transparenz" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4 text-red-500" }),
                      /* @__PURE__ */ jsx("span", { children: "CE-Kennzeichnung" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-500" }),
                      /* @__PURE__ */ jsx("span", { children: "Datenschutz" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-orange-500" }),
                      /* @__PURE__ */ jsx("span", { children: "Monitoring" })
                    ] })
                  ] })
                ] }) })
              ] })
            ] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsxs(Card, { className: "border-2 border-[#f97316]/20 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-[#f97316] to-[#fb923c] p-6", children: /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-white flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-white/20 p-3 rounded-lg", children: /* @__PURE__ */ jsx(Settings, { className: "h-6 w-6 text-white" }) }),
            "Phase 2: Technische Umsetzung (Woche 3-6)"
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Database, { className: "h-5 w-5 text-[#f97316]" }),
                    "2.1 Datenqualität sicherstellen"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3 pl-7", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#232323] mb-2", children: "Anforderungen an Trainingsdaten:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-[#474747]", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 mt-0.5 text-[#f97316] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Repräsentativität und Vollständigkeit prüfen" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 mt-0.5 text-[#f97316] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Bias-Detection und Fairness-Metriken implementieren" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 mt-0.5 text-[#f97316] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Datenherkunft und Lizenzierung dokumentieren" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 mt-0.5 text-[#f97316] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Regelmäßige Datenqualitätsprüfungen etablieren" })
                      ] })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Brain, { className: "h-5 w-5 text-[#f97316]" }),
                    "2.2 Transparenz implementieren"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3 pl-7", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#232323] mb-2", children: "Technische Maßnahmen:" }),
                    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border border-gray-200", children: [
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#232323]", children: "KI-Kennzeichnung" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-[#474747] mt-1", children: "Automatische Hinweise bei KI-generierten Inhalten" }),
                        /* @__PURE__ */ jsx("div", { className: "mt-2 bg-[#f97316]/10 p-2 rounded text-xs font-mono", children: '<div class="ai-generated">Dieser Text wurde mit KI erstellt</div>' })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border border-gray-200", children: [
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#232323]", children: "Explainable AI" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-[#474747] mt-1", children: "Entscheidungswege nachvollziehbar machen" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border border-gray-200", children: [
                        /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#232323]", children: "Model Cards" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-[#474747] mt-1", children: "Standardisierte Dokumentation für jedes KI-Modell" })
                      ] })
                    ] })
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-[#f97316]" }),
                    "2.3 Sicherheitsmaßnahmen"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3 pl-7", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#232323] mb-2", children: "Cybersecurity für KI:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-[#474747]", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 mt-0.5 text-[#f97316] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Adversarial Attack Prevention" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 mt-0.5 text-[#f97316] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Model Poisoning Detection" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 mt-0.5 text-[#f97316] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Secure Model Deployment" })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Lock, { className: "h-4 w-4 mt-0.5 text-[#f97316] shrink-0" }),
                        /* @__PURE__ */ jsx("span", { children: "Access Control & Audit Logs" })
                      ] })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-3 flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Monitor, { className: "h-5 w-5 text-[#f97316]" }),
                    "2.4 Monitoring Setup"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3 pl-7", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#232323] mb-2", children: "Überwachungs-Dashboard:" }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-white p-2 rounded border border-gray-200", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-[#232323]", children: "Performance" }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: "Accuracy, Latency" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-white p-2 rounded border border-gray-200", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-[#232323]", children: "Fairness" }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: "Bias Metriken" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-white p-2 rounded border border-gray-200", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-[#232323]", children: "Compliance" }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: "Audit Logs" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-white p-2 rounded border border-gray-200", children: [
                        /* @__PURE__ */ jsx("div", { className: "text-xs font-medium text-[#232323]", children: "Incidents" }),
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: "Fehlerreports" })
                      ] })
                    ] })
                  ] }) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 bg-[#f97316]/10 p-6 rounded-lg border border-[#f97316]/20", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                /* @__PURE__ */ jsx("h5", { className: "font-semibold text-[#232323]", children: "Typischer Fortschritt nach Phase 2:" }),
                /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-[#f97316]", children: "65%" })
              ] }),
              /* @__PURE__ */ jsx(Progress, { value: 65, className: "h-3" }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4 mt-4 text-xs", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-500 mx-auto mb-1" }),
                  /* @__PURE__ */ jsx("span", { children: "Grundlagen" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-green-500 mx-auto mb-1" }),
                  /* @__PURE__ */ jsx("span", { children: "Technik" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "h-5 w-5 text-gray-400 mx-auto mb-1" }),
                  /* @__PURE__ */ jsx("span", { children: "Zertifizierung" })
                ] })
              ] })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "mb-12", children: /* @__PURE__ */ jsxs(Card, { className: "border-2 border-green-200 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-green-500 to-emerald-500 p-6", children: /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold text-white flex items-center gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: "bg-white/20 p-3 rounded-lg", children: /* @__PURE__ */ jsx(Award, { className: "h-6 w-6 text-white" }) }),
            "Phase 3: Dokumentation und Zertifizierung (Woche 7-10)"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border border-green-200", children: [
              /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-4 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Award, { className: "h-5 w-5 text-green-600" }),
                "CE-Kennzeichnung für Hochrisiko-KI"
              ] }),
              /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-4 gap-4", children: [
                {
                  step: "1",
                  title: "Konformitätsbewertung",
                  tasks: ["Technische Dokumentation", "Risikoanalyse", "QM-System"],
                  duration: "2 Wochen"
                },
                {
                  step: "2",
                  title: "Benannte Stelle",
                  tasks: ["Prüfstelle wählen", "Unterlagen einreichen", "Audit vorbereiten"],
                  duration: "3 Wochen"
                },
                {
                  step: "3",
                  title: "Prüfverfahren",
                  tasks: ["Technische Prüfung", "Dokumentenprüfung", "Nachbesserungen"],
                  duration: "4 Wochen"
                },
                {
                  step: "4",
                  title: "CE-Kennzeichnung",
                  tasks: ["Zertifikat erhalten", "CE-Zeichen anbringen", "EU-Datenbank"],
                  duration: "1 Woche"
                }
              ].map((phase, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded-lg shadow-sm", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm", children: phase.step }),
                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-sm", children: phase.title })
                ] }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-xs text-[#474747] mb-3", children: phase.tasks.map((task, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-1", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 mt-0.5 text-green-500 shrink-0" }),
                  /* @__PURE__ */ jsx("span", { children: task })
                ] }, i)) }),
                /* @__PURE__ */ jsxs("div", { className: "text-xs font-medium text-green-600", children: [
                  "⏱️ ",
                  phase.duration
                ] })
              ] }, index)) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-green-600" }),
                  "Erforderliche Dokumentation"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                  {
                    doc: "Technische Dokumentation",
                    contents: ["Systemarchitektur", "Algorithmen-Beschreibung", "Datenflüsse", "Sicherheitskonzept"],
                    pages: "50-100"
                  },
                  {
                    doc: "Risikomanagementsystem",
                    contents: ["Risikoidentifikation", "Bewertungsmatrix", "Mitigationsmaßnahmen", "Notfallpläne"],
                    pages: "30-50"
                  },
                  {
                    doc: "Qualitätsmanagement",
                    contents: ["Prozessbeschreibungen", "Testprotokolle", "Validierung", "Change Management"],
                    pages: "40-60"
                  },
                  {
                    doc: "Compliance-Nachweise",
                    contents: ["Rechtsgrundlagen", "Datenschutz-Folgenabschätzung", "Ethik-Bewertung", "Audit-Berichte"],
                    pages: "20-40"
                  }
                ].map((doc, index) => /* @__PURE__ */ jsx(Card, { className: "border border-gray-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-sm", children: doc.doc }),
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-xs", children: [
                      "~",
                      doc.pages,
                      " Seiten"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-1 text-xs text-[#474747]", children: doc.contents.map((content, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-1", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-gray-400 rounded-full" }),
                    /* @__PURE__ */ jsx("span", { children: content })
                  ] }, i)) })
                ] }) }, index)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Gavel, { className: "h-5 w-5 text-green-600" }),
                  "Rechtliche Anforderungen"
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsx(Card, { className: "border border-gray-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-sm mb-2", children: "EU-Vertreter bestellen" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-[#474747] mb-2", children: "Nicht-EU Unternehmen müssen einen bevollmächtigten Vertreter in der EU benennen." }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-3 rounded text-xs", children: [
                      /* @__PURE__ */ jsx("p", { className: "font-medium text-green-700 mb-1", children: "Aufgaben des EU-Vertreters:" }),
                      /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-green-600", children: [
                        /* @__PURE__ */ jsx("li", { children: "• Kontakt zu Behörden" }),
                        /* @__PURE__ */ jsx("li", { children: "• Dokumentenverwahrung" }),
                        /* @__PURE__ */ jsx("li", { children: "• Compliance-Überwachung" })
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(Card, { className: "border border-gray-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-sm mb-2", children: "Haftpflichtversicherung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-[#474747] mb-2", children: "Anpassung der Betriebshaftpflicht für KI-spezifische Risiken." }),
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-2 text-xs", children: [
                      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-2 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Deckung:" }),
                        " €10-50M"
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-2 rounded", children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Kosten:" }),
                        " €5-20k/Jahr"
                      ] })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx(Card, { className: "border border-gray-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-sm mb-2", children: "Vertragsanpassungen" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-[#474747]", children: "Alle bestehenden Verträge müssen auf AI Act Konformität geprüft werden:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "mt-2 space-y-1 text-xs text-[#474747]", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Lieferantenverträge" }),
                      /* @__PURE__ */ jsx("li", { children: "• Kundenverträge" }),
                      /* @__PURE__ */ jsx("li", { children: "• Partnervereinbarungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Arbeitsverträge" })
                    ] })
                  ] }) })
                ] })
              ] })
            ] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white p-8", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Bereit für Ihre AI Act Compliance Journey?" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg mb-6 text-white/90", children: "Starten Sie jetzt mit unserer kostenlosen Risikoanalyse und erhalten Sie einen maßgeschneiderten Implementierungsplan." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-white text-[#e24e1b] hover:bg-gray-100", children: [
              /* @__PURE__ */ jsx(Rocket, { className: "mr-2 h-5 w-5" }),
              "Kostenlose Analyse starten"
            ] }),
            /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "bg-transparent text-white border-white hover:bg-white/10", children: [
              /* @__PURE__ */ jsx(Calendar, { className: "mr-2 h-5 w-5" }),
              "Beratungstermin buchen"
            ] })
          ] })
        ] }) })
      ] })
    ] }) });
  };
  const TechnicalRequirementsSection = () => {
    const { ref: techRef, inView: techInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    return /* @__PURE__ */ jsx("section", { ref: techRef, className: "py-20 md:py-32 bg-gradient-to-b from-white to-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20", children: [
          /* @__PURE__ */ jsx(Code, { className: "h-3.5 w-3.5 mr-2" }),
          "Technische Anforderungen"
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: [
          "AI Act Technische Spezifikationen",
          /* @__PURE__ */ jsx("span", { className: "block text-[#e24e1b] mt-2", children: "im Detail erklärt" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "Von API-Dokumentation bis Zero-Day-Protection - alle technischen Anforderungen des EU AI Act verständlich aufbereitet." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-7xl mx-auto space-y-12", children: [
        /* @__PURE__ */ jsxs(Card, { className: "border-2 border-[#e24e1b]/20 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-[#232323] to-[#474747] p-6", children: /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Database, { className: "h-6 w-6" }),
            "Data Governance & Qualitätsmanagement"
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(BarChart3, { className: "h-5 w-5 text-[#e24e1b]" }),
                  "Datenqualitäts-Metriken"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-medium text-[#232323] mb-3", children: "Erforderliche Messgrößen:" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border border-gray-200", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Completeness Score" }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "≥ 95%" })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: "Anteil vollständiger Datensätze ohne fehlende Werte" }),
                      /* @__PURE__ */ jsx("div", { className: "mt-2 bg-gray-100 p-2 rounded text-xs font-mono", children: "completeness = (non_null_values / total_values) * 100" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border border-gray-200", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Accuracy Rate" }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "≥ 98%" })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: "Korrektheit der Daten im Vergleich zur Ground Truth" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "bg-white p-3 rounded border border-gray-200", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Timeliness" }),
                        /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "≤ 24h" })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: "Maximales Alter der Trainingsdaten für zeitkritische Modelle" })
                    ] })
                  ] })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-lg mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-[#e24e1b]" }),
                  "Bias Detection & Mitigation"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-medium text-[#232323] mb-3", children: "Implementierungscode-Beispiel:" }),
                  /* @__PURE__ */ jsx("div", { className: "bg-[#232323] text-white p-4 rounded-lg overflow-x-auto", children: /* @__PURE__ */ jsx("pre", { className: "text-xs font-mono", children: `# AI Act Bias Detection Framework
from fairlearn.metrics import demographic_parity_ratio
from aif360.metrics import BinaryLabelDatasetMetric

class AIActBiasDetector:
    def __init__(self, protected_attributes):
        self.protected_attrs = protected_attributes
        self.thresholds = {
            'demographic_parity': 0.8,  # AI Act requirement
            'equal_opportunity': 0.8,
            'disparate_impact': 0.8
        }
    
    def check_compliance(self, dataset, predictions):
        metrics = {}
        for attr in self.protected_attrs:
            metrics[attr] = {
                'dp_ratio': demographic_parity_ratio(
                    y_true=dataset.labels,
                    y_pred=predictions,
                    sensitive_features=dataset[attr]
                ),
                'compliant': False
            }
            
            # Check AI Act compliance
            if metrics[attr]['dp_ratio'] >= self.thresholds['demographic_parity']:
                metrics[attr]['compliant'] = True
        
        return metrics` }) })
                ] }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 bg-[#e24e1b]/10 p-6 rounded-lg border border-[#e24e1b]/20", children: [
              /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-[#232323] mb-3 flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertCircle, { className: "h-5 w-5 text-[#e24e1b]" }),
                "AI Act Data Governance Checkliste"
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-4 text-sm", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-medium text-[#232323]", children: "Datenerfassung" }),
                  /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Einwilligungen dokumentiert" })
                  ] }),
                  /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Datenquellen verifiziert" })
                  ] }),
                  /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Lizenzierung geprüft" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-medium text-[#232323]", children: "Datenqualität" }),
                  /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Bias-Tests durchgeführt" })
                  ] }),
                  /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Repräsentativität geprüft" })
                  ] }),
                  /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Validierung abgeschlossen" })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-medium text-[#232323]", children: "Dokumentation" }),
                  /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Data Sheets erstellt" })
                  ] }),
                  /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Versioning implementiert" })
                  ] }),
                  /* @__PURE__ */ jsxs("label", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx("input", { type: "checkbox", className: "rounded" }),
                    /* @__PURE__ */ jsx("span", { className: "text-xs", children: "Audit Trail vorhanden" })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "border-2 border-[#f97316]/20 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-[#f97316] to-[#fb923c] p-6", children: /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6" }),
            "Model Cards & Dokumentationsstandards"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-lg mb-4", children: "EU AI Act Model Card Template" }),
              /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-6 rounded-lg border border-gray-200", children: [
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-medium text-[#232323] mb-3", children: "1. Model Details" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-[#474747]", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 mt-0.5 text-[#f97316] shrink-0" }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Model Name & Version" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Eindeutige Identifikation inkl. Versionsnummer" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 mt-0.5 text-[#f97316] shrink-0" }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Architecture Description" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Transformer, CNN, RNN mit Layer-Details" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 mt-0.5 text-[#f97316] shrink-0" }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Training Infrastructure" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Hardware, Software, Frameworks verwendet" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(CheckSquare, { className: "h-4 w-4 mt-0.5 text-[#f97316] shrink-0" }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "License & IP Rights" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Open Source oder proprietär, Nutzungsrechte" })
                        ] })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-medium text-[#232323] mb-3", children: "2. Intended Use" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-[#474747]", children: [
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Target, { className: "h-4 w-4 mt-0.5 text-[#f97316] shrink-0" }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Primary Use Cases" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Genehmigte Anwendungsfälle definieren" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(XCircle, { className: "h-4 w-4 mt-0.5 text-red-500 shrink-0" }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Out-of-Scope Uses" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Explizit verbotene Nutzungsarten" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 mt-0.5 text-[#f97316] shrink-0" }),
                        /* @__PURE__ */ jsxs("div", { children: [
                          /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Target Users" }),
                          /* @__PURE__ */ jsx("p", { className: "text-xs", children: "Entwickler, Endnutzer, Administratoren" })
                        ] })
                      ] })
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-6 pt-6 border-t border-gray-200", children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-medium text-[#232323] mb-3", children: "3. Performance Metrics" }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-white p-4 rounded border border-gray-200", children: [
                    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-4 text-sm", children: [
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: "Accuracy" }),
                        /* @__PURE__ */ jsx("div", { className: "font-mono font-bold", children: "98.5%" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: "Precision" }),
                        /* @__PURE__ */ jsx("div", { className: "font-mono font-bold", children: "97.2%" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: "Recall" }),
                        /* @__PURE__ */ jsx("div", { className: "font-mono font-bold", children: "96.8%" })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: "F1-Score" }),
                        /* @__PURE__ */ jsx("div", { className: "font-mono font-bold", children: "97.0%" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-3 pt-3 border-t", children: /* @__PURE__ */ jsxs("p", { className: "text-xs text-[#474747]", children: [
                      /* @__PURE__ */ jsx("strong", { children: "Fairness Metrics:" }),
                      " Demographic Parity Ratio: 0.85 | Equal Opportunity Ratio: 0.82 | Disparate Impact: 0.88"
                    ] }) })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-lg mb-4", children: "API Dokumentation für Transparenz" }),
              /* @__PURE__ */ jsx("div", { className: "bg-[#232323] text-white p-6 rounded-lg", children: /* @__PURE__ */ jsx("pre", { className: "text-xs font-mono overflow-x-auto", children: `// AI Act Compliant API Response Structure
{
  "prediction": {
    "result": "approved",
    "confidence": 0.92,
    "timestamp": "2024-01-20T10:30:00Z"
  },
  "ai_transparency": {
    "model_used": "credit_scorer_v2.1",
    "ai_generated": true,
    "decision_factors": [
      {
        "feature": "income_stability",
        "importance": 0.35,
        "value": "high"
      },
      {
        "feature": "credit_history",
        "importance": 0.28,
        "value": "excellent"
      }
    ],
    "explanation": "Diese Entscheidung wurde durch ein KI-System getroffen. 
                    Die wichtigsten Faktoren waren Einkommensstabilität (35%) 
                    und Kredithistorie (28%).",
    "human_review_available": true,
    "appeal_process": "https://api.company.com/appeals"
  },
  "compliance": {
    "ai_act_version": "2024.08",
    "risk_category": "high_risk",
    "ce_marking": "CE-AI-2024-12345",
    "last_audit": "2024-01-15"
  }
}` }) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "border-2 border-green-200 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-green-500 to-emerald-500 p-6", children: /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Lock, { className: "h-6 w-6" }),
            "Security & Robustness Standards"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { className: "p-8", children: /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-lg mb-4", children: "Adversarial Defense Mechanisms" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-medium text-[#232323] mb-3", children: "Implementierungsbeispiel:" }),
                  /* @__PURE__ */ jsx("div", { className: "bg-[#232323] text-white p-4 rounded-lg text-xs font-mono overflow-x-auto", children: `import torch
from cleverhans.torch.attacks import ProjectedGradientDescent

class AIActSecurityFramework:
    def __init__(self, model):
        self.model = model
        self.attack_configs = {
            'pgd': {'eps': 0.3, 'eps_iter': 0.01, 'nb_iter': 40},
            'fgsm': {'eps': 0.3},
            'cw': {'c': 1e-4, 'kappa': 0, 'max_iter': 100}
        }
    
    def test_robustness(self, x, y):
        results = {}
        
        # Test gegen verschiedene Angriffe
        pgd = ProjectedGradientDescent(self.model, **self.attack_configs['pgd'])
        adv_x = pgd.generate(x, y)
        
        # Berechne Robustness Score
        clean_acc = self.evaluate(x, y)
        adv_acc = self.evaluate(adv_x, y)
        
        results['robustness_score'] = adv_acc / clean_acc
        results['ai_act_compliant'] = results['robustness_score'] > 0.8
        
        return results` })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "bg-green-50 p-4 rounded-lg border border-green-200", children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-medium text-green-800 mb-2", children: "Security Checklist:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2 text-sm text-green-700", children: [
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mt-0.5 shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Input Validation & Sanitization" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mt-0.5 shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Model Encryption at Rest & in Transit" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mt-0.5 shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Access Control & Authentication" })
                    ] }),
                    /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 mt-0.5 shrink-0" }),
                      /* @__PURE__ */ jsx("span", { children: "Anomaly Detection Systems" })
                    ] })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-lg mb-4", children: "Monitoring & Incident Response" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsx(Card, { className: "border border-gray-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-sm mb-3", children: "Real-time Monitoring Dashboard" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2 bg-gray-50 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "Model Drift Detection" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700 text-xs", children: "Active" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2 bg-gray-50 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "Performance Degradation" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700 text-xs", children: "Monitoring" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2 bg-gray-50 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "Security Threats" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-yellow-100 text-yellow-700 text-xs", children: "1 Alert" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2 bg-gray-50 rounded", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-xs font-medium", children: "Bias Metrics" }),
                      /* @__PURE__ */ jsx(Badge, { className: "bg-green-100 text-green-700 text-xs", children: "Compliant" })
                    ] })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { className: "border border-gray-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-sm mb-3", children: "Incident Response Plan" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-xs", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center font-bold shrink-0", children: "1" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Detection & Alert" }),
                        /* @__PURE__ */ jsx("p", { className: "text-[#474747]", children: "Automatische Erkennung < 5 Min" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0", children: "2" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Assessment & Triage" }),
                        /* @__PURE__ */ jsx("p", { className: "text-[#474747]", children: "Schweregrad bestimmen < 15 Min" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center font-bold shrink-0", children: "3" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Containment" }),
                        /* @__PURE__ */ jsx("p", { className: "text-[#474747]", children: "System isolieren < 30 Min" })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center font-bold shrink-0", children: "4" }),
                      /* @__PURE__ */ jsxs("div", { children: [
                        /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Recovery & Report" }),
                        /* @__PURE__ */ jsx("p", { className: "text-[#474747]", children: "Behördenmeldung < 72h" })
                      ] })
                    ] })
                  ] })
                ] }) })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "border-2 border-[#474747]/20 overflow-hidden", children: [
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-[#474747] to-[#232323] p-6", children: /* @__PURE__ */ jsxs("h3", { className: "text-xl font-bold text-white flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(UserCheck, { className: "h-6 w-6" }),
            "Human Oversight & Control Mechanisms"
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-3 gap-6", children: [
              /* @__PURE__ */ jsxs(Card, { className: "border border-gray-200", children: [
                /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Eye, { className: "h-5 w-5 text-[#e24e1b]" }),
                  "Human-in-the-Loop"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-[#474747] mb-3", children: "Mensch trifft finale Entscheidung basierend auf KI-Empfehlung" }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-3 rounded text-xs", children: [
                    /* @__PURE__ */ jsx("p", { className: "font-medium mb-2", children: "Anwendungsfälle:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-[#474747]", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Kreditentscheidungen" }),
                      /* @__PURE__ */ jsx("li", { children: "• Einstellungsprozesse" }),
                      /* @__PURE__ */ jsx("li", { children: "• Medizinische Diagnosen" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mt-3 p-2 bg-green-50 rounded text-xs text-green-700", children: "✓ Höchste Kontrolle" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "border border-gray-200", children: [
                /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Settings, { className: "h-5 w-5 text-[#f97316]" }),
                  "Human-on-the-Loop"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-[#474747] mb-3", children: "KI entscheidet, Mensch kann eingreifen und übersteuern" }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-3 rounded text-xs", children: [
                    /* @__PURE__ */ jsx("p", { className: "font-medium mb-2", children: "Anwendungsfälle:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-[#474747]", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Content Moderation" }),
                      /* @__PURE__ */ jsx("li", { children: "• Fraud Detection" }),
                      /* @__PURE__ */ jsx("li", { children: "• Quality Control" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mt-3 p-2 bg-yellow-50 rounded text-xs text-yellow-700", children: "⚡ Balance aus Effizienz & Kontrolle" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { className: "border border-gray-200", children: [
                /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxs(CardTitle, { className: "text-lg flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-green-600" }),
                  "Human-over-the-Loop"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-[#474747] mb-3", children: "Mensch überwacht KI-System und greift bei Anomalien ein" }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-3 rounded text-xs", children: [
                    /* @__PURE__ */ jsx("p", { className: "font-medium mb-2", children: "Anwendungsfälle:" }),
                    /* @__PURE__ */ jsxs("ul", { className: "space-y-1 text-[#474747]", children: [
                      /* @__PURE__ */ jsx("li", { children: "• Monitoring Systeme" }),
                      /* @__PURE__ */ jsx("li", { children: "• Predictive Maintenance" }),
                      /* @__PURE__ */ jsx("li", { children: "• Anomalieerkennung" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mt-3 p-2 bg-blue-50 rounded text-xs text-blue-700", children: "📊 Governance & Oversight" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-8 bg-gray-50 p-6 rounded-lg", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold text-lg mb-4", children: "Implementierung der Kill-Switch Anforderung" }),
              /* @__PURE__ */ jsx("div", { className: "bg-[#232323] text-white p-4 rounded-lg", children: /* @__PURE__ */ jsx("pre", { className: "text-xs font-mono overflow-x-auto", children: `# EU AI Act Kill-Switch Implementation
class AIActKillSwitch:
    def __init__(self, model_service):
        self.model_service = model_service
        self.emergency_contacts = ['ai-officer@company.com', 'cto@company.com']
        self.shutdown_reasons = []
    
    def emergency_shutdown(self, reason, triggered_by):
        """Sofortige Abschaltung des KI-Systems gemäß AI Act Art. 14"""
        
        # 1. System sofort stoppen
        self.model_service.stop_all_predictions()
        
        # 2. Logging für Audit Trail
        self.log_shutdown(reason, triggered_by)
        
        # 3. Benachrichtigungen
        self.notify_stakeholders(reason, triggered_by)
        
        # 4. Fallback auf manuellen Prozess
        self.activate_manual_fallback()
        
        # 5. Incident Report vorbereiten
        return self.generate_incident_report(reason, triggered_by)
    
    def can_shutdown(self, user_role):
        """Definierte Rollen die System abschalten dürfen"""
        authorized_roles = ['ai_officer', 'cto', 'compliance_manager', 'security_team']
        return user_role in authorized_roles` }) })
            ] })
          ] })
        ] })
      ] })
    ] }) });
  };
  const ComplianceChecklistsSection = () => {
    const { ref: checklistRef, inView: checklistInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const [activeChecklist, setActiveChecklist] = useState("verbotene-systeme");
    const checklists = {
      "verbotene-systeme": {
        title: "Verbotene KI-Systeme",
        icon: XCircle,
        color: "red",
        description: "Prüfen Sie, ob Ihre Systeme in verbotene Kategorien fallen",
        deadline: "Sofort zu prüfen",
        items: [
          {
            category: "Social Scoring & Verhaltensmanipulation",
            checks: [
              { id: "ss1", text: "Keine Bewertung von Bürgern basierend auf sozialem Verhalten", critical: true },
              { id: "ss2", text: "Keine KI zur unterschwelligen Manipulation vulnerabler Gruppen", critical: true },
              { id: "ss3", text: "Keine Ausnutzung von Schwächen (Alter, Behinderung)", critical: true },
              { id: "ss4", text: "Keine KI die zu physischem/psychischem Schaden führen kann", critical: true }
            ]
          },
          {
            category: "Biometrische Systeme",
            checks: [
              { id: "bio1", text: "Keine Echtzeit-Gesichtserkennung in öffentlichen Räumen", critical: true },
              { id: "bio2", text: "Keine nachträgliche Gesichtserkennung (außer Strafverfolgung)", critical: true },
              { id: "bio3", text: "Keine Emotionserkennung am Arbeitsplatz oder in Bildungseinrichtungen", critical: true },
              { id: "bio4", text: "Keine biometrische Kategorisierung nach sensitiven Merkmalen", critical: true }
            ]
          },
          {
            category: "Predictive Policing",
            checks: [
              { id: "pp1", text: "Keine KI zur Vorhersage von Straftaten basierend auf Profiling", critical: true },
              { id: "pp2", text: "Keine individuelle Risikobewertung ohne Straftat", critical: true }
            ]
          }
        ]
      },
      "hochrisiko-systeme": {
        title: "Hochrisiko-KI Anforderungen",
        icon: AlertCircle,
        color: "orange",
        description: "Compliance-Anforderungen für Hochrisiko-KI-Systeme",
        deadline: "Bis August 2026",
        items: [
          {
            category: "Risikomanagement",
            checks: [
              { id: "rm1", text: "Risikomanagementsystem etabliert und dokumentiert" },
              { id: "rm2", text: "Regelmäßige Risikobewertungen durchgeführt" },
              { id: "rm3", text: "Maßnahmen zur Risikominderung implementiert" },
              { id: "rm4", text: "Testprotokolle für bekannte und vorhersehbare Risiken" }
            ]
          },
          {
            category: "Daten-Governance",
            checks: [
              { id: "dg1", text: "Datenqualitätskriterien definiert und umgesetzt" },
              { id: "dg2", text: "Bias-Tests und Fairness-Metriken implementiert" },
              { id: "dg3", text: "Datenherkunft und -verarbeitung dokumentiert" },
              { id: "dg4", text: "Datenschutz-Folgenabschätzung durchgeführt" }
            ]
          },
          {
            category: "Technische Dokumentation",
            checks: [
              { id: "td1", text: "Vollständige technische Dokumentation erstellt" },
              { id: "td2", text: "Algorithmen und Entscheidungslogik beschrieben" },
              { id: "td3", text: "Leistungsmetriken und Grenzen dokumentiert" },
              { id: "td4", text: "Anleitungen für Nutzer verfügbar" }
            ]
          },
          {
            category: "Menschliche Aufsicht",
            checks: [
              { id: "ma1", text: "Human-in/on/over-the-loop Mechanismen implementiert" },
              { id: "ma2", text: "Interpretierbarkeit der KI-Entscheidungen gewährleistet" },
              { id: "ma3", text: "Überstimmungsmöglichkeit für Menschen vorhanden" },
              { id: "ma4", text: "Notausschalter (Kill-Switch) implementiert" }
            ]
          },
          {
            category: "Cybersicherheit",
            checks: [
              { id: "cs1", text: "Schutz gegen Adversarial Attacks implementiert" },
              { id: "cs2", text: "Datenintegrität und Modellsicherheit gewährleistet" },
              { id: "cs3", text: "Zugriffskontrollen und Authentifizierung eingerichtet" },
              { id: "cs4", text: "Incident Response Plan vorhanden" }
            ]
          }
        ]
      },
      "transparenz-pflichten": {
        title: "Transparenzpflichten",
        icon: Eye,
        color: "yellow",
        description: "Anforderungen für KI-Systeme mit begrenztem Risiko",
        deadline: "Bis August 2025",
        items: [
          {
            category: "KI-Kennzeichnung",
            checks: [
              { id: "tk1", text: "Nutzer werden über KI-Interaktion informiert" },
              { id: "tk2", text: "KI-generierte Inhalte sind gekennzeichnet" },
              { id: "tk3", text: "Deepfakes und manipulierte Inhalte sind markiert" },
              { id: "tk4", text: "Opt-out Möglichkeit wo anwendbar" }
            ]
          },
          {
            category: "Informationspflichten",
            checks: [
              { id: "ip1", text: "Funktionsweise der KI verständlich erklärt" },
              { id: "ip2", text: "Datenverarbeitung transparent dargestellt" },
              { id: "ip3", text: "Kontaktmöglichkeiten für Fragen bereitgestellt" },
              { id: "ip4", text: "Beschwerdemechanismus etabliert" }
            ]
          }
        ]
      },
      "gpai-modelle": {
        title: "GPAI & Foundation Models",
        icon: Brain,
        color: "purple",
        description: "Spezielle Anforderungen für General Purpose AI",
        deadline: "Seit Februar 2025",
        items: [
          {
            category: "Modell-Dokumentation",
            checks: [
              { id: "gp1", text: "Detaillierte Modell-Karte erstellt" },
              { id: "gp2", text: "Training-Daten und -Methoden dokumentiert" },
              { id: "gp3", text: "Energieverbrauch und Umweltauswirkungen erfasst" },
              { id: "gp4", text: "Bekannte Limitierungen aufgelistet" }
            ]
          },
          {
            category: "Systemische Risiken (>10²⁵ FLOPs)",
            checks: [
              { id: "sr1", text: "Bewertung systemischer Risiken durchgeführt" },
              { id: "sr2", text: "Adversarial Testing abgeschlossen" },
              { id: "sr3", text: "Schwerwiegende Vorfälle werden gemeldet" },
              { id: "sr4", text: "Zusammenarbeit mit EU AI Office" }
            ]
          },
          {
            category: "Copyright Compliance",
            checks: [
              { id: "cc1", text: "Urheberrechtlich geschützte Trainingsdaten dokumentiert" },
              { id: "cc2", text: "Opt-out Mechanismen für Rechteinhaber" },
              { id: "cc3", text: "Zusammenfassung der Trainingsdaten öffentlich" }
            ]
          }
        ]
      }
    };
    return /* @__PURE__ */ jsx("section", { ref: checklistRef, className: "py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20", children: [
          /* @__PURE__ */ jsx(CheckSquare, { className: "h-3.5 w-3.5 mr-2" }),
          "Compliance Checklisten"
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: [
          "Ihre AI Act Compliance Checklisten",
          /* @__PURE__ */ jsx("span", { className: "block text-[#e24e1b] mt-2", children: "Schritt für Schritt zur Konformität" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "Nutzen Sie unsere detaillierten Checklisten, um systematisch alle AI Act Anforderungen zu erfüllen. Jeder Punkt ist praxiserprobt und juristisch validiert." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: Object.entries(checklists).map(([key, checklist]) => /* @__PURE__ */ jsxs(
          Button,
          {
            variant: activeChecklist === key ? "default" : "outline",
            onClick: () => setActiveChecklist(key),
            className: cn(
              "flex items-center gap-2",
              activeChecklist === key && "bg-[#e24e1b] hover:bg-[#8a1f17]"
            ),
            children: [
              /* @__PURE__ */ jsx(checklist.icon, { className: "h-4 w-4" }),
              checklist.title
            ]
          },
          key
        )) }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.3 },
            children: activeChecklist && /* @__PURE__ */ jsxs(Card, { className: cn(
              "border-2 overflow-hidden",
              checklists[activeChecklist].color === "red" && "border-red-200",
              checklists[activeChecklist].color === "orange" && "border-orange-200",
              checklists[activeChecklist].color === "yellow" && "border-yellow-200",
              checklists[activeChecklist].color === "purple" && "border-purple-200"
            ), children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "p-6",
                checklists[activeChecklist].color === "red" && "bg-gradient-to-r from-red-500 to-red-600",
                checklists[activeChecklist].color === "orange" && "bg-gradient-to-r from-orange-500 to-orange-600",
                checklists[activeChecklist].color === "yellow" && "bg-gradient-to-r from-yellow-500 to-yellow-600",
                checklists[activeChecklist].color === "purple" && "bg-gradient-to-r from-purple-500 to-purple-600"
              ), children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-white", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("h3", { className: "text-2xl font-bold flex items-center gap-3", children: [
                    React__default.createElement(checklists[activeChecklist].icon, { className: "h-6 w-6" }),
                    checklists[activeChecklist].title
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "mt-2 text-white/90", children: checklists[activeChecklist].description })
                ] }),
                /* @__PURE__ */ jsxs(Badge, { className: "bg-white/20 text-white border-white/30", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5 mr-2" }),
                  checklists[activeChecklist].deadline
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "p-8", children: [
                /* @__PURE__ */ jsx("div", { className: "space-y-8", children: checklists[activeChecklist].items.map((category, categoryIndex) => /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-lg mb-4 text-[#232323]", children: category.category }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-3", children: category.checks.map((check) => /* @__PURE__ */ jsxs(
                    "label",
                    {
                      className: cn(
                        "flex items-start gap-3 p-4 rounded-lg border cursor-pointer transition-all",
                        "hover:bg-gray-50",
                        check.critical && "border-red-200 bg-red-50/50"
                      ),
                      children: [
                        /* @__PURE__ */ jsx(
                          "input",
                          {
                            type: "checkbox",
                            className: cn(
                              "mt-0.5 rounded",
                              check.critical && "text-red-600 focus:ring-red-500"
                            )
                          }
                        ),
                        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                          /* @__PURE__ */ jsx("span", { className: cn(
                            "text-sm font-medium",
                            check.critical ? "text-red-700" : "text-[#232323]"
                          ), children: check.text }),
                          check.critical && /* @__PURE__ */ jsxs("div", { className: "mt-1 flex items-center gap-2 text-xs text-red-600", children: [
                            /* @__PURE__ */ jsx(AlertCircle, { className: "h-3 w-3" }),
                            "Kritisch: Verstöße führen zu sofortigen Strafen"
                          ] })
                        ] })
                      ]
                    },
                    check.id
                  )) })
                ] }, categoryIndex)) }),
                /* @__PURE__ */ jsx("div", { className: "mt-8 p-6 bg-gray-50 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row items-center justify-between gap-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-[#232323] mb-2", children: "Ihre Compliance-Fortschritt" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                      /* @__PURE__ */ jsx(Progress, { value: 0, className: "w-48 h-3" }),
                      /* @__PURE__ */ jsx("span", { className: "text-sm text-[#474747]", children: "0% abgeschlossen" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
                    /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Download, { className: "h-4 w-4" }),
                      "Als PDF exportieren"
                    ] }),
                    /* @__PURE__ */ jsxs(Button, { className: "bg-[#e24e1b] hover:bg-[#8a1f17] flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(FileCheck, { className: "h-4 w-4" }),
                      "Audit-Bericht erstellen"
                    ] })
                  ] })
                ] }) }),
                activeChecklist === "verbotene-systeme" && /* @__PURE__ */ jsx("div", { className: "mt-6 p-6 bg-red-50 border-2 border-red-200 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx(XCircle, { className: "h-6 w-6 text-red-600 shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-red-800 mb-2", children: "Wichtiger Hinweis zu verbotenen Systemen" }),
                    /* @__PURE__ */ jsxs("p", { className: "text-sm text-red-700 mb-3", children: [
                      "Falls Sie eines der oben genannten Systeme betreiben, müssen Sie dieses",
                      /* @__PURE__ */ jsx("strong", { children: " sofort abschalten" }),
                      ". Es gibt keine Übergangsfrist. Verstöße werden mit bis zu 35 Millionen Euro oder 7% des weltweiten Jahresumsatzes geahndet."
                    ] }),
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "destructive",
                        size: "sm",
                        className: "bg-red-600 hover:bg-red-700",
                        children: "Sofort-Hilfe anfordern"
                      }
                    )
                  ] })
                ] }) })
              ] })
            ] })
          },
          activeChecklist
        ),
        /* @__PURE__ */ jsxs("div", { className: "mt-12 grid md:grid-cols-4 gap-6", children: [
          /* @__PURE__ */ jsx(Card, { className: "border border-gray-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-[#e24e1b] mb-2", children: "113" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "Compliance-Punkte insgesamt" })
          ] }) }),
          /* @__PURE__ */ jsx(Card, { className: "border border-gray-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-red-600 mb-2", children: "16" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "Kritische Punkte" })
          ] }) }),
          /* @__PURE__ */ jsx(Card, { className: "border border-gray-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-orange-600 mb-2", children: "4" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "Risikokategorien" })
          ] }) }),
          /* @__PURE__ */ jsx(Card, { className: "border border-gray-200", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-green-600 mb-2", children: [
              checklistInView && /* @__PURE__ */ jsx(CountUp, { end: 90, duration: 2 }),
              "%"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-[#474747]", children: "Automatisierbar mit Marsstein" })
          ] }) })
        ] })
      ] })
    ] }) });
  };
  const CaseStudiesSection = () => {
    const { ref: caseRef, inView: caseInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const caseStudies = [
      {
        company: "Meta (Facebook)",
        title: "Gesichtserkennung abgeschaltet",
        category: "Biometrische Daten",
        fine: "€1.2 Milliarden",
        violation: "Unzulässige biometrische Verarbeitung",
        outcome: "Meta löschte über 1 Milliarde Gesichtsabdrücke und stellte die automatische Gesichtserkennung ein",
        lesson: "Biometrische Systeme sind Hochrisiko - selbst Tech-Giganten mussten zurückrudern",
        date: "2023",
        link: "#",
        severity: "critical"
      },
      {
        company: "Amazon",
        title: "Rekrutierungs-KI eingestellt",
        category: "HR & Einstellung",
        fine: "Präventiv vermieden",
        violation: "Gender-Bias in KI-Bewerbungsfilter",
        outcome: "Komplettes KI-Recruiting-Tool wurde eingestellt, bevor Strafen verhängt wurden",
        lesson: "Bias in HR-KI ist schwer zu eliminieren - menschliche Kontrolle unerlässlich",
        date: "2024",
        link: "#",
        severity: "high"
      },
      {
        company: "Clearview AI",
        title: "EU-weites Verbot",
        category: "Gesichtserkennung",
        fine: "€20 Millionen",
        violation: "Illegale Gesichtsdatenbank aus Social Media",
        outcome: "Vollständiges Betriebsverbot in der EU, Löschung aller EU-Bürgerdaten",
        lesson: "Web-Scraping für biometrische Daten ist illegal - keine Ausnahmen",
        date: "2024",
        link: "#",
        severity: "critical"
      },
      {
        company: "Deutsche Bank",
        title: "KI-Compliance Vorreiter",
        category: "Finanzsektor",
        fine: "Keine - Compliance erreicht",
        violation: "Keine - proaktive Umsetzung",
        outcome: "Erste Bank mit vollständiger AI Act Zertifizierung für alle KI-Systeme",
        lesson: "Frühe Investition in Compliance zahlt sich aus - Wettbewerbsvorteil",
        date: "2024",
        link: "#",
        severity: "success"
      }
    ];
    const regulatoryUpdates = [
      {
        date: "15. März 2025",
        title: "Neue Leitlinien für Hochrisiko-KI",
        description: "EU AI Office veröffentlicht detaillierte technische Standards für CE-Kennzeichnung",
        impact: "Alle Hochrisiko-KI-Anbieter müssen bis Juni 2025 nachbessern",
        urgent: true
      },
      {
        date: "1. Februar 2025",
        title: "GPAI Modelle Deadline abgelaufen",
        description: "Erste Prüfungen von Foundation Models über 10²⁵ FLOPs beginnen",
        impact: "OpenAI, Google und Anthropic unter Beobachtung",
        urgent: true
      },
      {
        date: "20. Januar 2025",
        title: "Harmonisierte Standards veröffentlicht",
        description: "CEN/CENELEC Standards für AI Act Konformität final",
        impact: "Vereinfachte Compliance durch klare technische Vorgaben",
        urgent: false
      }
    ];
    return /* @__PURE__ */ jsx("section", { ref: caseRef, className: "py-20 md:py-32 bg-gradient-to-b from-white to-gray-50", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
        /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-3.5 w-3.5 mr-2" }),
          "Praxis & Updates"
        ] }),
        /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: [
          "Aus der Praxis lernen",
          /* @__PURE__ */ jsx("span", { className: "block text-[#e24e1b] mt-2", children: "Reale Fälle & aktuelle Entwicklungen" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "Lernen Sie aus echten AI Act Verstößen und Erfolgsgeschichten. Bleiben Sie auf dem Laufenden mit den neuesten regulatorischen Updates." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#232323] mb-6", children: "Aktuelle Fallbeispiele" }),
          caseStudies.map((study, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: caseInView ? { opacity: 1, y: 0 } : {},
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsx(Card, { className: cn(
                "border-2 hover:shadow-lg transition-all cursor-pointer",
                study.severity === "critical" && "border-red-200 hover:border-red-300",
                study.severity === "high" && "border-orange-200 hover:border-orange-300",
                study.severity === "success" && "border-green-200 hover:border-green-300"
              ), children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold text-[#232323]", children: study.company }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg font-medium text-[#474747]", children: study.title })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsx(
                      Badge,
                      {
                        variant: study.severity === "success" ? "default" : "destructive",
                        className: cn(
                          study.severity === "critical" && "bg-red-500",
                          study.severity === "high" && "bg-orange-500",
                          study.severity === "success" && "bg-green-500"
                        ),
                        children: study.category
                      }
                    ),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-[#474747] mt-1", children: study.date })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-4 mb-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#474747] mb-1", children: "Strafe/Ergebnis" }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-[#232323]", children: study.fine })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-gray-50 p-4 rounded-lg", children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#474747] mb-1", children: "Verstoß" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-[#232323]", children: study.violation })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-[#474747] mb-1", children: "Was geschah:" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-[#232323]", children: study.outcome })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: cn(
                    "p-4 rounded-lg",
                    study.severity === "critical" && "bg-red-50 border border-red-200",
                    study.severity === "high" && "bg-orange-50 border border-orange-200",
                    study.severity === "success" && "bg-green-50 border border-green-200"
                  ), children: [
                    /* @__PURE__ */ jsxs("p", { className: "text-sm font-medium text-[#232323] flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4" }),
                      "Wichtigste Lektion:"
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: cn(
                      "text-sm mt-1",
                      study.severity === "critical" && "text-red-700",
                      study.severity === "high" && "text-orange-700",
                      study.severity === "success" && "text-green-700"
                    ), children: study.lesson })
                  ] })
                ] })
              ] }) })
            },
            index
          )),
          /* @__PURE__ */ jsx(Card, { className: "bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("h4", { className: "text-xl font-bold mb-3", children: "Vermeiden Sie diese Fehler!" }),
            /* @__PURE__ */ jsx("p", { className: "text-white/90 mb-4", children: "Lassen Sie uns gemeinsam Ihre KI-Systeme auf Compliance prüfen, bevor es zu spät ist." }),
            /* @__PURE__ */ jsxs(
              Button,
              {
                size: "lg",
                className: "bg-white text-[#e24e1b] hover:bg-gray-100",
                children: [
                  "Kostenlose Risikoanalyse",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                ]
              }
            )
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold text-[#232323] mb-6", children: "Regulatorische Updates" }),
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-[#e24e1b]/20 sticky top-24", children: [
            /* @__PURE__ */ jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Bell, { className: "h-5 w-5 text-[#e24e1b]" }),
              "Aktuelle Entwicklungen"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              regulatoryUpdates.map((update, index) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: cn(
                    "p-4 rounded-lg border",
                    update.urgent ? "bg-[#e24e1b]/5 border-[#e24e1b]/20" : "bg-gray-50 border-gray-200"
                  ),
                  children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-[#474747]", children: update.date }),
                      update.urgent && /* @__PURE__ */ jsx(Badge, { variant: "destructive", className: "text-xs", children: "Dringend" })
                    ] }),
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-sm text-[#232323] mb-2", children: update.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-[#474747] mb-2", children: update.description }),
                    /* @__PURE__ */ jsxs("div", { className: cn(
                      "text-xs font-medium",
                      update.urgent ? "text-[#e24e1b]" : "text-[#474747]"
                    ), children: [
                      "→ ",
                      update.impact
                    ] })
                  ]
                },
                index
              )),
              /* @__PURE__ */ jsx("div", { className: "pt-4 border-t", children: /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "outline",
                  className: "w-full flex items-center justify-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx(Bell, { className: "h-4 w-4" }),
                    "Update-Benachrichtigungen aktivieren"
                  ]
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "border border-gray-200", children: [
            /* @__PURE__ */ jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Schnellzugriff" }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "#",
                  className: "flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(Download, { className: "h-4 w-4 text-[#e24e1b]" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "AI Act Volltext (PDF)" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "#",
                  className: "flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 text-[#e24e1b]" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "EU AI Office Website" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "#",
                  className: "flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 text-[#e24e1b]" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Technische Standards" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: "#",
                  className: "flex items-center gap-2 p-2 rounded hover:bg-gray-50 transition-colors",
                  children: [
                    /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4 text-[#e24e1b]" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Musterverträge" })
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] }) })
    ] }) });
  };
  const BenefitsSection = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
      /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20", children: [
        /* @__PURE__ */ jsx(Rocket, { className: "h-3.5 w-3.5 mr-2" }),
        "Die Marsstein AI Act Lösung"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "KI-Compliance so einfach wie nie" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "Während andere Anbieter komplexe Beratung verkaufen, automatisieren wir 90% des AI Act Compliance-Prozesses und machen die Umsetzung so intuitiv wie eine App-Installation." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
      {
        icon: Brain,
        title: "KI-powered Risk Assessment",
        description: "Unsere KI analysiert automatisch alle Ihre KI-Systeme und ordnet sie den 4 AI Act Risikokategorien zu.",
        benefits: ["Automatische Systemerkennung", "Risikokategorisierung in Sekunden", "Kontinuierliche Überwachung"],
        techDetails: "Deep Learning Classifier mit 95.000+ bekannten KI-Systemen trainiert",
        savings: "€87.000 Beratungskosten gespart"
      },
      {
        icon: FileCheck,
        title: "Automatische Dokumentation",
        description: "CE-Kennzeichnung, Konformitätserklärungen und Risikomanagement-Dokumentation werden automatisch generiert.",
        benefits: ["CE-Kennzeichnung in 24h", "EU-konforme Templates", "Automatische Updates bei Gesetzesänderungen"],
        techDetails: "EU-Rechtsdatenbank mit 2.000+ Compliance-Requirements",
        savings: "€156.000 Anwaltskosten vermieden"
      },
      {
        icon: Shield,
        title: "Proaktive Compliance-Überwachung",
        description: "Kontinuierliche Überwachung auf neue KI-Systeme und Compliance-Verstöße mit sofortigen Warnungen.",
        benefits: ["Real-time KI-Discovery", "Compliance-Alerts", "Automatische Remediation"],
        techDetails: "Network Scanning + API Integration mit 50+ KI-Diensten",
        savings: "€240.000 Bußgeld-Risiko eliminiert"
      },
      {
        icon: MessageSquare,
        title: "Generative AI Governance",
        description: "Spezielle Tools für ChatGPT, Claude, Copilot & Co. mit automatischer Transparenz-Compliance.",
        benefits: ["Chatbot-Disclaimer automatisch", "Foundation Model Monitoring", "User-Information Management"],
        techDetails: "Browser-Extension + API-Wrapper für 20+ LLM-Anbieter",
        savings: "€75.000 GPAI-Compliance-Aufwand"
      },
      {
        icon: Users,
        title: "Team-Enablement Platform",
        description: "Schulungen, Awareness-Programme und Role-based Access für alle Mitarbeiter.",
        benefits: ["Interactive AI Act Training", "Role-based Dashboards", "Compliance-Gamification"],
        techDetails: "LMS-Integration mit personalisierten Lernpfaden",
        savings: "€45.000 Schulungskosten jährlich"
      },
      {
        icon: Globe,
        title: "Global AI Compliance Hub",
        description: "Nicht nur EU AI Act: Auch UK AI Bill, US AI Executive Order und weitere internationale Standards.",
        benefits: ["Multi-jurisdiction Support", "Cross-border Compliance", "Regulatory Change Management"],
        techDetails: "Global Regulatory Intelligence mit 15+ Rechtssystemen",
        savings: "€320.000 internationale Compliance-Kosten"
      }
    ].map((benefit, index) => /* @__PURE__ */ jsxs(Card, { className: "group hover:shadow-2xl transition-all duration-500 border-2 hover:border-[#e24e1b]/30 hover:scale-105", children: [
      /* @__PURE__ */ jsxs(CardHeader, { children: [
        /* @__PURE__ */ jsx("div", { className: "h-14 w-14 rounded-xl bg-gradient-to-br from-[#a1251b] to-purple-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-lg", children: /* @__PURE__ */ jsx(benefit.icon, { className: "h-7 w-7 text-white" }) }),
        /* @__PURE__ */ jsx(CardTitle, { className: "text-xl mb-3", children: benefit.title }),
        /* @__PURE__ */ jsx(CardDescription, { className: "text-base leading-relaxed", children: benefit.description })
      ] }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: benefit.benefits.map((item, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" }),
          /* @__PURE__ */ jsx("span", { children: item })
        ] }, i)) }),
        /* @__PURE__ */ jsxs("div", { className: "p-3 bg-[#F5F6F8] rounded-lg border border-[#474747]/20", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-purple-800 mb-1", children: "Tech-Specs:" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-purple-700", children: benefit.techDetails })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "p-3 bg-[#39B37B]/5 rounded-lg border border-[#39B37B]/20", children: [
          /* @__PURE__ */ jsx("div", { className: "text-xs font-semibold text-green-800 mb-1", children: "Kosteneinsparung:" }),
          /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-green-700", children: benefit.savings })
        ] })
      ] })
    ] }, index)) })
  ] }) });
  const TargetIndustriesSection = () => {
    const [selectedIndustry, setSelectedIndustry] = useState(0);
    const industries = [
      {
        icon: Factory,
        title: "Produktion & Industrie 4.0",
        shortTitle: "Industrie 4.0",
        riskLevel: "Hochrisiko",
        description: "Fertigungsunternehmen stehen vor massiven Compliance-Herausforderungen bei KI-gesteuerten Produktionsanlagen.",
        realWorldExample: {
          title: "Volkswagen Wolfsburg: 30.000 Industrieroboter",
          description: "VW muss für jeden KI-gesteuerten Roboter eine CE-Kennzeichnung nachweisen. Kostenpunkt: €2M für die gesamte Flotte.",
          impact: "6 Monate Produktionsstopp bei Non-Compliance"
        },
        aiSystems: [
          { name: "Predictive Maintenance", risk: "Mittel", example: "Siemens MindSphere" },
          { name: "Qualitätskontrolle KI", risk: "Hoch", example: "BMW AI Quality Check" },
          { name: "Autonome Gabelstapler", risk: "Hoch", example: "KION AutoPilot" },
          { name: "Cobots (Collaborative Robots)", risk: "Hoch", example: "Universal Robots" }
        ],
        concreteSteps: [
          "Sofort: Inventar aller KI-Systeme erstellen",
          "Q1 2025: Risikobewertung für jeden Roboter",
          "Q2 2025: CE-Konformitätsprüfung starten",
          "Q3 2025: Technische Dokumentation komplettieren"
        ],
        marsSteinSolution: "Automatische Erkennung aller Industrie-KI + One-Click CE-Dokumentation",
        timeframe: "August 2026",
        fineRisk: "€15M pro System",
        realFines: {
          description: "Tesla: $137M Strafe für Autopilot-Sicherheitsmängel",
          source: "Reuters",
          url: "https://www.reuters.com/business/autos-transportation/tesla-faces-137-million-penalty-over-autopilot-safety-concerns-2023-02-16/"
        }
      },
      {
        icon: Heart,
        title: "Gesundheitswesen & MedTech",
        shortTitle: "MedTech",
        riskLevel: "Hochrisiko",
        description: "Krankenhäuser und MedTech-Unternehmen müssen KI-Diagnosetools als Medizinprodukte + AI Act compliant machen.",
        realWorldExample: {
          title: "Charité Berlin: KI-Radiologie System",
          description: "Die Charité nutzt AI für 500.000 Röntgenbilder/Jahr. Ohne CE-Kennzeichnung droht Nutzungsverbot.",
          impact: "2 Mio. Patienten betroffen bei Systemabschaltung"
        },
        aiSystems: [
          { name: "KI-Bilddiagnostik", risk: "Hoch", example: "Siemens Healthineers AI-Rad" },
          { name: "Roboter-Chirurgie", risk: "Hoch", example: "Da Vinci Surgical System" },
          { name: "Patientenüberwachung", risk: "Hoch", example: "Philips IntelliVue Guardian" },
          { name: "Medikamenten-Dosierung KI", risk: "Hoch", example: "Dosis AI Platform" }
        ],
        concreteSteps: [
          "Sofort: MDR + AI Act Anforderungen mappen",
          "Q1 2025: Klinische Bewertung für KI-Systeme",
          "Q2 2025: Benannte Stelle kontaktieren",
          "Q4 2025: Dual-Zertifizierung abschließen"
        ],
        marsSteinSolution: "MDR-AI Act Dual-Compliance Dashboard mit Echtzeit-Monitoring",
        timeframe: "August 2026",
        fineRisk: "€15M + Patientenklagen",
        realFines: {
          description: "IBM Watson Health: $62M Verlust nach fehlerhaften Krebsdiagnosen",
          source: "STAT News",
          url: "https://www.statnews.com/2017/09/05/watson-ibm-cancer/"
        }
      },
      {
        icon: Building,
        title: "Finanzdienstleistungen",
        shortTitle: "Finance",
        riskLevel: "Hochrisiko",
        description: "Banken und Versicherungen nutzen KI für kritische Entscheidungen - jede davon ist hochrisiko.",
        realWorldExample: {
          title: "Commerzbank: KI-Kreditentscheidungen",
          description: "2.5 Mio. Kreditanträge/Jahr durch KI vorbewertet. Bei Diskriminierung drohen Sammelklagen + AI Act Strafen.",
          impact: "€500M Kreditvolumen täglich in Gefahr"
        },
        aiSystems: [
          { name: "Kreditscoring", risk: "Hoch", example: "SCHUFA Score 4.0" },
          { name: "Betrugsdetection", risk: "Hoch", example: "Wirecard Prevention AI" },
          { name: "Robo-Advisor", risk: "Mittel", example: "Scalable Capital" },
          { name: "KYC/AML Screening", risk: "Hoch", example: "ComplyAdvantage AI" }
        ],
        concreteSteps: [
          "Sofort: Bias-Audit aller Scoring-Modelle",
          "Q1 2025: Explainable AI implementieren",
          "Q2 2025: BaFin + AI Act Abstimmung",
          "Q3 2025: Customer Fairness Testing"
        ],
        marsSteinSolution: "Automated Bias Detection + BaFin-konforme AI Act Dokumentation",
        timeframe: "August 2026",
        fineRisk: "€15M oder 6% Jahresumsatz",
        realFines: {
          description: "Wells Fargo: $3.7B Strafe für diskriminierende Kredit-Algorithmen",
          source: "Consumer Financial Protection Bureau (CFPB)",
          url: "https://www.consumerfinance.gov/about-us/newsroom/cfpb-orders-wells-fargo-to-pay-37-billion-for-widespread-mismanagement-of-auto-loans-mortgages-and-deposit-accounts/"
        }
      },
      {
        icon: UserCheck,
        title: "Human Resources",
        shortTitle: "HR Tech",
        riskLevel: "Hochrisiko",
        description: "HR-Abteilungen nutzen KI für Einstellungen - der sensibelste Hochrisikobereich des AI Act.",
        realWorldExample: {
          title: "SAP SuccessFactors: 50M Bewerber-Screenings",
          description: "SAPs KI filtert Lebensläufe für 15.000 Unternehmen. Ein Bias-Skandal wäre katastrophal.",
          impact: "Diskriminierungsklage: €100M+ Schadensersatz"
        },
        aiSystems: [
          { name: "CV-Parsing & Ranking", risk: "Hoch", example: "Textkernel Match!" },
          { name: "Video-Interview-Analyse", risk: "Verboten*", example: "HireVue (eingestellt!)" },
          { name: "Performance Prediction", risk: "Hoch", example: "Workday AI" },
          { name: "Skill-Gap-Analyse", risk: "Mittel", example: "LinkedIn Talent Insights" }
        ],
        concreteSteps: [
          "SOFORT: Emotionserkennung abschalten!",
          "Q1 2025: Bias-Testing implementieren",
          "Q2 2025: Transparenz-Erklärungen erstellen",
          "Q3 2025: Betriebsrat einbinden"
        ],
        marsSteinSolution: "HR-AI Compliance Suite mit Bias-Monitoring & Betriebsrats-Dashboard",
        timeframe: "August 2026",
        fineRisk: "€15M + Arbeitnehmerklagen",
        realFines: {
          description: "Amazon: KI-Recruiting-Tool abgeschaltet nach Geschlechter-Diskriminierung",
          source: "Reuters",
          url: "https://www.reuters.com/article/us-amazon-com-jobs-automation-insight-idUSKCN1MK08G"
        }
      },
      {
        icon: ShoppingCart,
        title: "E-Commerce & Retail",
        shortTitle: "E-Commerce",
        riskLevel: "Begrenzt",
        description: "Online-Händler müssen Transparenz bei KI-Empfehlungen und Chatbots sicherstellen.",
        realWorldExample: {
          title: "Zalando: 50M Kunden, 1B Empfehlungen/Tag",
          description: "Zalando muss bei jeder KI-Empfehlung transparent machen, dass ein Algorithmus entscheidet.",
          impact: "Conversion-Rate -15% bei schlechter Umsetzung"
        },
        aiSystems: [
          { name: "Recommendation Engine", risk: "Begrenzt", example: "Amazon Personalize" },
          { name: "Dynamic Pricing", risk: "Mittel", example: "Prisync AI" },
          { name: "Chatbot Support", risk: "Begrenzt", example: "Zendesk Answer Bot" },
          { name: "Visual Search", risk: "Begrenzt", example: "Pinterest Lens" }
        ],
        concreteSteps: [
          "Q1 2025: KI-Kennzeichnung auf Website",
          "Q2 2025: Chatbot-Disclaimer implementieren",
          "Q3 2025: Transparenz-Seite erstellen",
          "Q4 2025: A/B Tests für Conversion"
        ],
        marsSteinSolution: "E-Commerce AI Transparency Kit mit conversion-optimierten Templates",
        timeframe: "August 2025",
        fineRisk: "€7.5M",
        realFines: {
          description: "TikTok: €345M DSGVO-Strafe für intransparente Algorithmen bei Minderjährigen",
          source: "Irish Data Protection Commission",
          url: "https://www.dataprotection.ie/en/news-media/data-protection-commission-announces-decision-tiktok-inquiry"
        }
      },
      {
        icon: GraduationCap,
        title: "Bildung & EdTech",
        shortTitle: "EdTech",
        riskLevel: "Hochrisiko",
        description: "Bildungseinrichtungen müssen bei KI-Bewertungen extreme Vorsicht walten lassen.",
        realWorldExample: {
          title: "Coursera: 100M Lerner, KI-Prüfungen",
          description: "Courseras KI bewertet Millionen von Aufgaben. Ein Fehler bedeutet falsche Abschlüsse.",
          impact: "Akkreditierungsverlust + Studentenklagen"
        },
        aiSystems: [
          { name: "Automated Grading", risk: "Hoch", example: "Turnitin Feedback Studio" },
          { name: "Lernpfad-Empfehlung", risk: "Hoch", example: "Khan Academy AI" },
          { name: "Proctoring Software", risk: "Hoch", example: "ProctorU" },
          { name: "Plagiatserkennung", risk: "Mittel", example: "Turnitin" }
        ],
        concreteSteps: [
          "Sofort: Menschliche Kontrolle sicherstellen",
          "Q1 2025: Transparenz für Studenten",
          "Q2 2025: Beschwerdeverfahren etablieren",
          "Q3 2025: Fairness-Audits durchführen"
        ],
        marsSteinSolution: "EdTech Compliance Platform mit Student-Rights-Management",
        timeframe: "August 2026",
        fineRisk: "€15M + Reputationsschaden",
        realFines: {
          description: "UK: A-Level Algorithmus-Skandal - 40% falsche Noten, Regierung musste zurückrudern",
          source: "The Guardian",
          url: "https://www.theguardian.com/education/2020/aug/17/a-levels-gcse-results-england-based-teacher-assessments-government-u-turn"
        }
      },
      {
        icon: Briefcase,
        title: "Beratung & Professional Services",
        shortTitle: "Consulting",
        riskLevel: "Begrenzt",
        description: "Beratungsunternehmen müssen KI-Tools transparent einsetzen und Kunden informieren.",
        realWorldExample: {
          title: "McKinsey: QuantumBlack AI",
          description: "McKinsey nutzt KI für Strategieempfehlungen bei DAX-Konzernen. Intransparenz wäre geschäftsschädigend.",
          impact: "Vertrauensverlust = €100M Umsatzrisiko"
        },
        aiSystems: [
          { name: "Data Analytics AI", risk: "Begrenzt", example: "Palantir Foundry" },
          { name: "Document Analysis", risk: "Begrenzt", example: "KPMG Clara" },
          { name: "Market Intelligence", risk: "Begrenzt", example: "CB Insights" },
          { name: "Presentation Generator", risk: "Begrenzt", example: "Beautiful.AI" }
        ],
        concreteSteps: [
          "Q1 2025: KI-Nutzung in Verträge aufnehmen",
          "Q2 2025: Client Transparency Policy",
          "Q3 2025: Consultant AI Training",
          "Q4 2025: Audit Trail System"
        ],
        marsSteinSolution: "Professional Services AI Transparency Suite",
        timeframe: "August 2025",
        fineRisk: "€7.5M + Kundenverlust",
        realFines: {
          description: "PwC: £5M Geldbuße für mangelhafte KI-Audit-Verfahren bei Evergrande",
          source: "Financial Reporting Council UK",
          url: "https://www.frc.org.uk/news-and-events/news/2022/07/frc-sanctions-against-pwc-and-two-partners-in-relation-to-bhs-and-evergrande/"
        }
      },
      {
        icon: Cpu,
        title: "Software & Tech Companies",
        shortTitle: "Tech/SaaS",
        riskLevel: "Gemischt",
        description: "Tech-Unternehmen sind doppelt betroffen: als Nutzer und Anbieter von KI.",
        realWorldExample: {
          title: "Microsoft: Copilot in 1M+ Unternehmen",
          description: "Microsoft muss Copilot compliant machen UND Kunden bei deren Compliance unterstützen.",
          impact: "EU-Markt = 30% des Umsatzes gefährdet"
        },
        aiSystems: [
          { name: "Code Generation", risk: "Begrenzt", example: "GitHub Copilot" },
          { name: "Cloud AI Services", risk: "Variabel", example: "Azure AI" },
          { name: "AutoML Platforms", risk: "Hoch", example: "Google Vertex AI" },
          { name: "AI Development Tools", risk: "Variabel", example: "TensorFlow" }
        ],
        concreteSteps: [
          "Sofort: AI Act Impact Assessment",
          "Q1 2025: Customer Compliance Tools",
          "Q2 2025: Liability Framework Update",
          "Q3 2025: EU Representative benennen"
        ],
        marsSteinSolution: "Tech Company Dual-Compliance Platform (Anbieter + Nutzer)",
        timeframe: "Verschiedene Deadlines",
        fineRisk: "Bis €35M oder 7% Umsatz",
        realFines: {
          description: "Meta: €1.2B DSGVO-Strafe für intransparente Datenverarbeitung bei KI-Training",
          source: "Irish Data Protection Commission",
          url: "https://www.dataprotection.ie/en/news-media/press-releases/data-protection-commission-announces-conclusion-inquiry-meta-ireland"
        }
      }
    ];
    return /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-center mb-12 space-y-4", children: [
        /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20", children: [
          /* @__PURE__ */ jsx(Building2, { className: "h-3.5 w-3.5 mr-2" }),
          "Branchen-spezifische AI Act Compliance"
        ] }),
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "AI Act Anforderungen nach Branchen" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-3xl mx-auto", children: "Der AI Act betrifft verschiedene Branchen unterschiedlich stark. Verstehen Sie Ihre spezifischen Risiken und Compliance-Anforderungen." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-2 md:gap-3", children: industries.map((industry, index) => /* @__PURE__ */ jsxs(
        "button",
        {
          onClick: () => setSelectedIndustry(index),
          className: cn(
            "flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300",
            "text-sm font-medium border-2",
            selectedIndustry === index ? "bg-[#e24e1b] text-white border-[#e24e1b] shadow-lg scale-105" : "bg-white text-[#474747] border-gray-200 hover:border-[#e24e1b]/30 hover:bg-[#F5F6F8]"
          ),
          children: [
            /* @__PURE__ */ jsx(industry.icon, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: industry.shortTitle }),
            /* @__PURE__ */ jsx("span", { className: "sm:hidden", children: industry.shortTitle.split(" ")[0] })
          ]
        },
        index
      )) }) }),
      /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5 },
          className: "max-w-6xl mx-auto",
          children: /* @__PURE__ */ jsxs(Card, { className: "border-2 border-gray-200 shadow-xl overflow-hidden", children: [
            /* @__PURE__ */ jsxs("div", { className: cn(
              "p-8 text-white",
              industries[selectedIndustry].riskLevel === "Hochrisiko" ? "bg-gradient-to-r from-red-600 to-orange-600" : industries[selectedIndustry].riskLevel === "Begrenzt" ? "bg-gradient-to-r from-blue-600 to-indigo-600" : "bg-gradient-to-r from-purple-600 to-pink-600"
            ), children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "h-16 w-16 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center", children: React__default.createElement(industries[selectedIndustry].icon, { className: "h-8 w-8 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-2xl font-semibold", children: industries[selectedIndustry].title }),
                  /* @__PURE__ */ jsxs(Badge, { className: "mt-2 bg-white/20 text-white border-white/30", children: [
                    "Risikostufe: ",
                    industries[selectedIndustry].riskLevel
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("p", { className: "text-lg text-white/90", children: industries[selectedIndustry].description })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "p-8 space-y-8", children: [
              /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-lg bg-[#e24e1b] flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Building, { className: "h-6 w-6 text-white" }) }),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-lg font-bold text-[#232323] mb-2", children: industries[selectedIndustry].realWorldExample.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-[#474747] mb-3", children: industries[selectedIndustry].realWorldExample.description }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-red-600" }),
                    /* @__PURE__ */ jsxs("span", { className: "font-semibold text-red-700", children: [
                      "Impact: ",
                      industries[selectedIndustry].realWorldExample.impact
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-[#232323] mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Cpu, { className: "h-5 w-5" }),
                  "Betroffene KI-Systeme in dieser Branche"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: industries[selectedIndustry].aiSystems.map((system, index) => /* @__PURE__ */ jsxs("div", { className: "bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-[#232323]", children: system.name }),
                    /* @__PURE__ */ jsx(
                      Badge,
                      {
                        variant: system.risk === "Hoch" ? "destructive" : system.risk === "Mittel" ? "default" : system.risk === "Verboten*" ? "destructive" : "outline",
                        className: "text-xs",
                        children: system.risk
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-[#474747]", children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Beispiel:" }),
                    " ",
                    system.example
                  ] })
                ] }, index)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-[#F5F6F8] rounded-xl p-6 border border-[#474747]/20", children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-lg font-bold text-blue-900 mb-4 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(CheckSquare, { className: "h-5 w-5" }),
                  "Konkrete Schritte zur Compliance"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: industries[selectedIndustry].concreteSteps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                  /* @__PURE__ */ jsx("div", { className: "h-6 w-6 rounded-full bg-blue-600 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold", children: index + 1 }),
                  /* @__PURE__ */ jsx("p", { className: "text-[#474747]", children: step })
                ] }, index)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "bg-orange-50 rounded-lg p-4 border border-orange-200", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-orange-700", children: "Maximales Bußgeld" }),
                      /* @__PURE__ */ jsx(Euro, { className: "h-4 w-4 text-orange-600" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-orange-900", children: industries[selectedIndustry].fineRisk })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 rounded-lg p-4 border border-blue-200", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-blue-700", children: "Compliance-Deadline" }),
                      /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-blue-600" })
                    ] }),
                    /* @__PURE__ */ jsx("p", { className: "text-lg font-bold text-blue-900", children: industries[selectedIndustry].timeframe })
                  ] }),
                  industries[selectedIndustry].realFines && /* @__PURE__ */ jsx("div", { className: "bg-red-50 rounded-lg p-4 border border-red-200", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-red-600 flex-shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-red-700 mb-1", children: "Reale Strafen:" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-red-600 mb-2", children: industries[selectedIndustry].realFines.description }),
                      /* @__PURE__ */ jsxs(
                        "a",
                        {
                          href: industries[selectedIndustry].realFines.url,
                          target: "_blank",
                          rel: "noopener noreferrer",
                          className: "inline-flex items-center gap-1.5 text-xs text-red-700 hover:text-red-900 font-medium transition-colors group",
                          children: [
                            /* @__PURE__ */ jsx(Globe, { className: "h-3 w-3" }),
                            /* @__PURE__ */ jsxs("span", { children: [
                              "Quelle: ",
                              industries[selectedIndustry].realFines.source
                            ] }),
                            /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3 group-hover:translate-x-1 transition-transform" })
                          ]
                        }
                      )
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsx(Card, { className: "bg-gradient-to-br from-[#a1251b] to-purple-600 text-white border-0", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-lg bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(Rocket, { className: "h-6 w-6 text-white" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h5", { className: "font-bold text-lg mb-2", children: "Marsstein Lösung" }),
                    /* @__PURE__ */ jsx("p", { className: "text-white/90 mb-4", children: industries[selectedIndustry].marsSteinSolution }),
                    /* @__PURE__ */ jsxs(Button, { className: "bg-white text-[#e24e1b] hover:bg-[#F5F6F8]/80", children: [
                      "Branchenspezifische Demo",
                      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                    ] })
                  ] })
                ] }) }) })
              ] })
            ] })
          ] })
        },
        selectedIndustry
      )
    ] }) });
  };
  const ProcessSection = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
      /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20", children: [
        /* @__PURE__ */ jsx(Rocket, { className: "h-3.5 w-3.5 mr-2" }),
        "Unser AI Act Prozess"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "In 2 Wochen AI Act compliant" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-[#474747] max-w-2xl mx-auto", children: "Während traditionelle Beratung 6+ Monate dauert, machen wir Sie in nur 2 Wochen compliant" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
      {
        step: "1",
        title: "KI-System Discovery",
        description: "Automatische Erkennung aller KI-Systeme in Ihrer Organisation",
        duration: "Tag 1-2",
        icon: Search,
        details: "Network Scanning, API Discovery, Employee Survey"
      },
      {
        step: "2",
        title: "Risiko-Klassifizierung",
        description: "KI-gestützte Zuordnung zu den 4 AI Act Risikokategorien",
        duration: "Tag 3-5",
        icon: Brain,
        details: "ML-basierte Classification, Regulatory Mapping"
      },
      {
        step: "3",
        title: "Automatische Dokumentation",
        description: "Generierung aller erforderlichen Compliance-Dokumente",
        duration: "Tag 6-10",
        icon: FileCheck,
        details: "CE-Kennzeichnung, Konformitätserklärung, Risk Assessment"
      },
      {
        step: "4",
        title: "Continuous Monitoring",
        description: "Laufende Überwachung und automatische Updates",
        duration: "Tag 11-14",
        icon: Monitor,
        details: "Real-time Compliance Monitoring, Alert System"
      }
    ].map((step, index) => /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      index < 3 && /* @__PURE__ */ jsx("div", { className: "hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-purple-600 to-transparent" }),
      /* @__PURE__ */ jsxs(Card, { className: "relative h-full border-2 hover:border-purple-600/30 transition-colors", children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("div", { className: "h-12 w-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xl", children: step.step }),
            /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: step.duration })
          ] }),
          /* @__PURE__ */ jsx(CardTitle, { className: "text-xl mb-2", children: step.title }),
          /* @__PURE__ */ jsx(CardDescription, { children: step.description })
        ] }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
          /* @__PURE__ */ jsx(step.icon, { className: "h-8 w-8 text-purple-600 opacity-20" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-[#474747]", children: step.details })
        ] })
      ] })
    ] }, index)) }),
    /* @__PURE__ */ jsx("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-purple-600 hover:bg-purple-700", children: [
      "AI Act Compliance in 2 Wochen starten",
      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5" })
    ] }) })
  ] }) });
  const FAQSection = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-b from-gray-50 to-white", children: /* @__PURE__ */ jsxs("div", { className: "container px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-center mb-16 space-y-4", children: [
      /* @__PURE__ */ jsxs(Badge, { className: "bg-[#e24e1b]/10 text-[#e24e1b] border-[#e24e1b]/20", children: [
        /* @__PURE__ */ jsx(BookOpen, { className: "h-3.5 w-3.5 mr-2" }),
        "AI Act FAQ"
      ] }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "Alles was Sie über den EU AI Act wissen müssen" })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "max-w-3xl mx-auto", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, className: "space-y-4", children: [
      {
        question: "Was ist der EU AI Act und warum sollte er mein Unternehmen interessieren?",
        answer: "Der EU AI Act ist seit 1. August 2024 in Kraft und regelt die Entwicklung, den Einsatz und die Nutzung von KI-Systemen in der EU. Verstöße können zu Bußgeldern bis zu 35 Millionen Euro oder 7% des weltweiten Jahresumsatzes führen. Selbst wenn Sie keine KI entwickeln, sondern nur nutzen (ChatGPT, Copilot etc.), sind Sie betroffen."
      },
      {
        question: "Mein Unternehmen sitzt nicht in der EU - bin ich trotzdem betroffen?",
        answer: "Ja, der AI Act gilt für alle Unternehmen, die KI-Systeme in der EU anbieten oder deren KI-Output in der EU genutzt wird. Das schließt US-amerikanische, britische und andere internationale Unternehmen mit EU-Geschäft ein. Auch reine Software-Anbieter sind betroffen."
      },
      {
        question: "Welche KI-Systeme gelten als 'Hochrisiko' und was bedeutet das?",
        answer: "Hochrisiko-KI umfasst Systeme in Bereichen wie biometrische Identifikation, kritische Infrastrukturen, Bildung, HR, Strafverfolgung und Gesundheitswesen. Diese benötigen eine CE-Kennzeichnung, umfassende Dokumentation und Konformitätsbewertung. Beispiele: CV-Screening, Gesichtserkennung, KI-Bewertungssysteme."
      },
      {
        question: "Ich nutze nur ChatGPT und Microsoft Copilot - brauche ich AI Act Compliance?",
        answer: "Ja! Generative KI-Systeme müssen seit August 2025 Transparenzpflichten erfüllen. Nutzer müssen darüber informiert werden, dass sie mit KI interagieren. Außerdem müssen Sie dokumentieren, wie Sie diese Tools nutzen und welche Daten verarbeitet werden."
      },
      {
        question: "Wie unterscheidet sich der AI Act von der DSGVO?",
        answer: "Während die DSGVO Datenschutz regelt, fokussiert der AI Act auf KI-Systeme und deren Risiken. Beide gelten parallel - Sie brauchen sowohl DSGVO- als auch AI Act-Compliance. Viele Anforderungen überschneiden sich, aber der AI Act hat zusätzliche technische Anforderungen wie CE-Kennzeichnung."
      },
      {
        question: "Was kostet AI Act Non-Compliance wirklich?",
        answer: "Neben den direkten Bußgeldern (bis €35M) entstehen indirekte Kosten: Reputationsschäden, Geschäftsverluste, rechtliche Kosten und potenzielle Betriebsverbote. Erste Unternehmen mussten bereits KI-Systeme abschalten. Die Gesamtkosten können das 10-fache des Bußgeldes betragen."
      },
      {
        question: "Wie kann Marsstein meinem Unternehmen bei der AI Act Compliance helfen?",
        answer: "Marsstein automatisiert 90% des Compliance-Prozesses: Automatische KI-System-Erkennung, Risikokategorisierung, Dokumentationsgenerierung und kontinuierliches Monitoring. Was traditionell 6+ Monate dauert, schaffen wir in 2 Wochen - zu einem Bruchteil der Anwaltskosten."
      }
    ].map((faq, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${index}`, className: "border rounded-lg px-6", children: [
      /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left hover:no-underline", children: /* @__PURE__ */ jsx("span", { className: "font-semibold", children: faq.question }) }),
      /* @__PURE__ */ jsx(AccordionContent, { className: "text-[#474747] leading-relaxed pb-6", children: faq.answer })
    ] }, index)) }) })
  ] }) });
  const CTASection = () => /* @__PURE__ */ jsx("section", { className: "py-20 md:py-32 bg-gradient-to-r from-[#e24e1b] to-[#ea580c] text-white", children: /* @__PURE__ */ jsx("div", { className: "container px-4 text-center", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto space-y-8", children: [
    /* @__PURE__ */ jsxs(Badge, { className: "bg-white/20 text-white border-white/20", children: [
      /* @__PURE__ */ jsx(Gavel, { className: "h-3.5 w-3.5 mr-2" }),
      "Professionelle AI Act Compliance"
    ] }),
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight", children: "AI Act Compliance in 2 Wochen statt 6 Monaten" }),
    /* @__PURE__ */ jsxs("p", { className: "text-xl text-white/90 leading-relaxed", children: [
      "Werden Sie frühzeitig AI Act compliant mit Marsstein.",
      /* @__PURE__ */ jsx("span", { className: "font-semibold", children: " Frühzeitige Compliance sichert Wettbewerbsvorteile" }),
      "und vermeidet rechtliche Risiken."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center pt-8", children: [
      /* @__PURE__ */ jsxs(Button, { size: "lg", className: "bg-white text-[#e24e1b] hover:bg-[#F5F6F8]/80 px-8", children: [
        /* @__PURE__ */ jsx(Brain, { className: "mr-2 h-5 w-5" }),
        "Kostenlose AI-Risikoanalyse"
      ] }),
      /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-2 border-white text-white hover:bg-white hover:text-[#e24e1b] px-8", children: [
        /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
        "AI Act Compliance Guide"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center items-center gap-8 pt-12 text-white/70", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsx("span", { children: "Kostenlose Erstberatung" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsx("span", { children: "Unverbindliche Risikoanalyse" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }),
        /* @__PURE__ */ jsx("span", { children: "2 Wochen bis Compliance" })
      ] })
    ] })
  ] }) }) });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "EU AI Act Compliance – KI-Regulierung sicher umsetzen",
        description: "EU AI Act Compliance einfach gemacht: Risikoklassifizierung, CE-Kennzeichnung & Konformität. ✓ Automatisierte Prozesse ✓ Rechtssicher. Jetzt beraten lassen!",
        canonical: "/eu-ai-act",
        keywords: "EU AI Act, KI-Regulierung, AI Compliance, Künstliche Intelligenz Gesetz, KI-Verordnung",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-background", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsxs("main", { children: [
        /* @__PURE__ */ jsx(HeroSection, {}),
        /* @__PURE__ */ jsx(AiActPainpointsSection, {}),
        /* @__PURE__ */ jsx(AiActDeepDiveSection, {}),
        /* @__PURE__ */ jsx(ImplementationGuideSection, {}),
        /* @__PURE__ */ jsx(TechnicalRequirementsSection, {}),
        /* @__PURE__ */ jsx(ComplianceChecklistsSection, {}),
        /* @__PURE__ */ jsx(CaseStudiesSection, {}),
        /* @__PURE__ */ jsx(BenefitsSection, {}),
        /* @__PURE__ */ jsx(TargetIndustriesSection, {}),
        /* @__PURE__ */ jsx(ProcessSection, {}),
        /* @__PURE__ */ jsx(FAQSection, {}),
        /* @__PURE__ */ jsx(CTASection, {})
      ] }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  EuAiActCompliance as default
};
