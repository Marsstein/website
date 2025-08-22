import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { motion, AnimatePresence } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Brain, Target, Lightbulb, CheckCircle2, ArrowRight, Download, FileText, RefreshCw, Users, Info, ArrowLeft, XCircle, AlertTriangle, CheckCircle } from "lucide-react";
import { c as cn } from "../main.mjs";
import "react-helmet-async";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "react-router-dom";
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
const AIRiskAssessment = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Assessment",
    "name": "EU AI Act Risk Assessment",
    "description": "Bewerten Sie das Risiko Ihres KI-Systems nach EU AI Act Kriterien und erhalten Sie Handlungsempfehlungen",
    "educationalLevel": "Professional",
    "url": "https://marsstein.com/assessment-center/ai-risk-assessment"
  };
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const questions = [
    {
      id: "ai_purpose",
      category: "Grundlagen",
      question: "Wofür setzen Sie Ihr KI-System primär ein?",
      explanation: "Der Anwendungsbereich ist entscheidend für die Risikoeinstufung nach EU AI Act",
      options: [
        {
          id: "general_purpose",
          text: "Allgemeine Anwendungen (z.B. Chatbots, Content-Erstellung)",
          riskLevel: "minimal",
          points: 1,
          explanation: "Geringe regulatorische Anforderungen, hauptsächlich Transparenzpflichten"
        },
        {
          id: "business_optimization",
          text: "Geschäftsoptimierung (z.B. Empfehlungen, Prozessautomatisierung)",
          riskLevel: "limited",
          points: 2,
          explanation: "Mittlere Anforderungen mit Fokus auf Transparenz und Fairness"
        },
        {
          id: "critical_infrastructure",
          text: "Kritische Infrastruktur (z.B. Energieversorgung, Verkehr)",
          riskLevel: "high",
          points: 4,
          explanation: "Hohe Risikokategorie - umfassende Compliance-Anforderungen erforderlich"
        },
        {
          id: "prohibited_use",
          text: "Social Scoring, Massenüberwachung oder Manipulation",
          riskLevel: "unacceptable",
          points: 5,
          explanation: "VERBOTEN - Diese Anwendungen sind in der EU nicht erlaubt"
        }
      ],
      helpText: "Der EU AI Act klassifiziert KI-Systeme nach ihrem Risikopotential. Je höher das Risiko, desto strenger die Auflagen."
    },
    {
      id: "data_sensitivity",
      category: "Daten & Privacy",
      question: "Welche Art von Daten verarbeitet Ihr KI-System?",
      explanation: "Sensible Daten erhöhen das Risiko und die Compliance-Anforderungen erheblich",
      options: [
        {
          id: "anonymous_data",
          text: "Anonyme/aggregierte Daten ohne Personenbezug",
          riskLevel: "minimal",
          points: 1,
          explanation: "Niedrigste Risikostufe - minimale Datenschutzrisiken"
        },
        {
          id: "personal_data",
          text: "Personenbezogene Daten (Namen, E-Mails, etc.)",
          riskLevel: "limited",
          points: 2,
          explanation: "DSGVO-Compliance erforderlich - mittleres Risiko"
        },
        {
          id: "sensitive_data",
          text: "Besondere Kategorien (Gesundheit, Ethnie, Religion)",
          riskLevel: "high",
          points: 4,
          explanation: "Höchste Datenschutzanforderungen - strenge Auflagen"
        },
        {
          id: "biometric_data",
          text: "Biometrische Daten zur Identifikation",
          riskLevel: "unacceptable",
          points: 5,
          explanation: "Potentiell verboten - nur in sehr spezifischen Ausnahmefällen erlaubt"
        }
      ],
      helpText: "Biometrische Systeme und sensible Daten unterliegen besonderen Beschränkungen im EU AI Act."
    },
    {
      id: "decision_impact",
      category: "Auswirkungen",
      question: "Welche Auswirkungen haben die KI-Entscheidungen auf Menschen?",
      explanation: "Je größer der Einfluss auf Menschenleben, desto höher die Regulierung",
      options: [
        {
          id: "informational",
          text: "Nur Informationen/Empfehlungen - Menschen entscheiden final",
          riskLevel: "minimal",
          points: 1,
          explanation: "Geringes Risiko da menschliche Kontrolle erhalten bleibt"
        },
        {
          id: "business_decisions",
          text: "Geschäftsentscheidungen (Preise, Angebote, Marketing)",
          riskLevel: "limited",
          points: 2,
          explanation: "Mittleres Risiko - Transparenz und Fairness wichtig"
        },
        {
          id: "life_affecting",
          text: "Lebenswichtige Entscheidungen (Jobs, Kredite, Gesundheit)",
          riskLevel: "high",
          points: 4,
          explanation: "Hohes Risiko - strikte Governance und Überwachung erforderlich"
        },
        {
          id: "safety_critical",
          text: "Sicherheitskritische Entscheidungen (Leben und Tod)",
          riskLevel: "high",
          points: 5,
          explanation: "Höchstes Risiko - umfassende Sicherheitsmaßnahmen obligatorisch"
        }
      ],
      helpText: "Systeme die wichtige Lebensentscheidungen beeinflussen werden als Hochrisiko-KI eingestuft."
    },
    {
      id: "human_oversight",
      category: "Kontrolle & Governance",
      question: "Wie ist die menschliche Aufsicht über Ihr KI-System organisiert?",
      explanation: "Menschliche Kontrolle ist ein Kernprinzip des EU AI Act",
      options: [
        {
          id: "full_human_control",
          text: "Vollständige menschliche Kontrolle - KI nur als Hilfsmittel",
          riskLevel: "minimal",
          points: 1,
          explanation: "Optimal - Menschen behalten volle Entscheidungsgewalt"
        },
        {
          id: "human_in_loop",
          text: "Human-in-the-loop - Menschen prüfen wichtige Entscheidungen",
          riskLevel: "limited",
          points: 2,
          explanation: "Gute Balance zwischen Automatisierung und Kontrolle"
        },
        {
          id: "human_on_loop",
          text: "Human-on-the-loop - Menschen überwachen das System",
          riskLevel: "high",
          points: 3,
          explanation: "Erhöhtes Risiko - menschliche Eingriffsmöglichkeiten müssen gewährleistet sein"
        },
        {
          id: "fully_automated",
          text: "Vollautomatisch ohne direkte menschliche Überwachung",
          riskLevel: "high",
          points: 4,
          explanation: "Hohes Risiko - nur bei unkritischen Anwendungen zulässig"
        }
      ],
      helpText: "Der EU AI Act verlangt angemessene menschliche Aufsicht je nach Risikoklasse."
    },
    {
      id: "transparency",
      category: "Transparenz",
      question: "Wie transparent ist Ihr KI-System für Nutzer?",
      explanation: "Transparenz ist entscheidend für Vertrauen und Compliance",
      options: [
        {
          id: "full_transparency",
          text: "Vollständig transparent - Nutzer wissen immer, dass sie mit KI interagieren",
          riskLevel: "minimal",
          points: 1,
          explanation: "Beste Praxis - erfüllt alle Transparenzanforderungen"
        },
        {
          id: "clear_disclosure",
          text: "Klare Kennzeichnung als KI-System mit Erklärungen",
          riskLevel: "limited",
          points: 2,
          explanation: "Gute Compliance - ausreichend für die meisten Anwendungen"
        },
        {
          id: "limited_disclosure",
          text: "Begrenzte Information über KI-Nutzung",
          riskLevel: "high",
          points: 3,
          explanation: "Compliance-Risiko - Transparenz muss verbessert werden"
        },
        {
          id: "no_disclosure",
          text: "Keine Information über KI-Einsatz für Nutzer",
          riskLevel: "unacceptable",
          points: 4,
          explanation: "Nicht compliant - Transparenzpflicht wird verletzt"
        }
      ],
      helpText: "Nutzer müssen über KI-Einsatz informiert werden - das ist eine Grundanforderung."
    },
    {
      id: "bias_fairness",
      category: "Fairness & Bias",
      question: "Wie gehen Sie mit Bias und Fairness in Ihrem KI-System um?",
      explanation: "Diskriminierung durch KI ist ein zentrales Risiko im EU AI Act",
      options: [
        {
          id: "comprehensive_testing",
          text: "Umfassende Bias-Tests und Fairness-Metriken implementiert",
          riskLevel: "minimal",
          points: 1,
          explanation: "Excellente Praxis - proaktive Diskriminierungsprävention"
        },
        {
          id: "basic_testing",
          text: "Grundlegende Tests auf offensichtliche Diskriminierung",
          riskLevel: "limited",
          points: 2,
          explanation: "Ausreichend für viele Anwendungen - sollte ausgebaut werden"
        },
        {
          id: "awareness_no_testing",
          text: "Bewusstsein für Bias vorhanden, aber keine systematischen Tests",
          riskLevel: "high",
          points: 3,
          explanation: "Risiko - Tests müssen implementiert werden"
        },
        {
          id: "no_consideration",
          text: "Bias und Fairness wurden noch nicht berücksichtigt",
          riskLevel: "high",
          points: 4,
          explanation: "Hohes Compliance-Risiko - sofortige Maßnahmen erforderlich"
        }
      ],
      helpText: "Bias-Testing ist besonders wichtig bei Systemen die Menschen kategorisieren oder bewerten."
    }
  ];
  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((sum, answerId) => {
      const question = questions.find((q) => answers[q.id] === answerId);
      const option = question == null ? void 0 : question.options.find((opt) => opt.id === answerId);
      return sum + ((option == null ? void 0 : option.points) || 0);
    }, 0);
    const maxScore = questions.length * 5;
    const categories = ["Grundlagen", "Daten & Privacy", "Auswirkungen", "Kontrolle & Governance", "Transparenz", "Fairness & Bias"];
    const categoryScores = {};
    categories.forEach((category) => {
      const categoryQuestions = questions.filter((q) => q.category === category);
      const categoryScore = categoryQuestions.reduce((sum, question) => {
        const answerId = answers[question.id];
        const option = question.options.find((opt) => opt.id === answerId);
        return sum + ((option == null ? void 0 : option.points) || 0);
      }, 0);
      const categoryMaxScore = categoryQuestions.length * 5;
      const riskPercentage2 = categoryScore / categoryMaxScore * 100;
      let riskLevel = "minimal";
      if (riskPercentage2 > 80) riskLevel = "unacceptable";
      else if (riskPercentage2 > 60) riskLevel = "high";
      else if (riskPercentage2 > 30) riskLevel = "limited";
      categoryScores[category] = {
        score: categoryScore,
        maxScore: categoryMaxScore,
        riskLevel
      };
    });
    const riskPercentage = totalScore / maxScore * 100;
    let overallRisk = "minimal";
    let complianceStatus = "compliant";
    if (riskPercentage > 80) {
      overallRisk = "unacceptable";
      complianceStatus = "critical";
    } else if (riskPercentage > 60) {
      overallRisk = "high";
      complianceStatus = "action_needed";
    } else if (riskPercentage > 30) {
      overallRisk = "limited";
      complianceStatus = "action_needed";
    } else {
      complianceStatus = "compliant";
    }
    const recommendations = [];
    const nextSteps = [];
    if (overallRisk === "unacceptable") {
      recommendations.push("🚨 Kritisch: Ihr KI-System fällt möglicherweise unter verbotene Praktiken");
      recommendations.push("Sofortiger Stopp der Entwicklung/des Einsatzes empfohlen");
      recommendations.push("Rechtliche Beratung dringend erforderlich");
      nextSteps.push("System-Architekt sofort kontaktieren");
      nextSteps.push("Compliance-Anwalt beauftragen");
      nextSteps.push("Alternative Lösungsansätze entwickeln");
    } else if (overallRisk === "high") {
      recommendations.push("⚠️ Hoch-Risiko System: Umfassende Compliance-Maßnahmen erforderlich");
      recommendations.push("CE-Kennzeichnung und Konformitätsbewertung notwendig");
      recommendations.push("Risikomanagementsystem implementieren");
      recommendations.push("Menschliche Aufsicht verstärken");
      nextSteps.push("Compliance-Team aufbauen");
      nextSteps.push("Risikomanagementsystem designen");
      nextSteps.push("Dokumentation vervollständigen");
      nextSteps.push("Testing und Validierung ausbauen");
    } else if (overallRisk === "limited") {
      recommendations.push("📋 Begrenzte Risiken: Transparenz- und Fairness-Maßnahmen nötig");
      recommendations.push("Nutzerinformation über KI-Einsatz sicherstellen");
      recommendations.push("Bias-Testing implementieren");
      nextSteps.push("Transparenz-Guidelines entwickeln");
      nextSteps.push("Fairness-Metriken einführen");
      nextSteps.push("Nutzer-Interface überarbeiten");
    } else {
      recommendations.push("✅ Minimales Risiko: Grundlegende Transparenz ausreichend");
      recommendations.push("Weiterhin bewährte Praktiken befolgen");
      recommendations.push("Monitoring der Regulierungsentwicklung");
      nextSteps.push("Dokumentation aktuell halten");
      nextSteps.push("Periodische Überprüfung planen");
    }
    return {
      overallRisk,
      score: totalScore,
      maxScore,
      categoryScores,
      recommendations,
      nextSteps,
      complianceStatus
    };
  };
  const handleAnswer = (questionId, optionId) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optionId }));
  };
  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCalculating(true);
      setTimeout(() => {
        const calculatedResult = calculateResult();
        setResult(calculatedResult);
        setIsCalculating(false);
        setShowResults(true);
      }, 2e3);
    }
  };
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };
  const resetAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setResult(null);
    setIsCalculating(false);
  };
  const getRiskColor = (risk) => {
    switch (risk) {
      case "minimal":
        return "text-green-600 bg-green-100";
      case "limited":
        return "text-yellow-600 bg-yellow-100";
      case "high":
        return "text-orange-600 bg-orange-100";
      case "unacceptable":
        return "text-red-600 bg-red-100";
      default:
        return "text-gray-600 bg-gray-100";
    }
  };
  const getRiskIcon = (risk) => {
    switch (risk) {
      case "minimal":
        return CheckCircle;
      case "limited":
        return Info;
      case "high":
        return AlertTriangle;
      case "unacceptable":
        return XCircle;
      default:
        return Info;
    }
  };
  const progress = (currentStep + 1) / questions.length * 100;
  const currentQuestion = questions[currentStep];
  const selectedAnswer = answers[currentQuestion == null ? void 0 : currentQuestion.id];
  if (isCalculating) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        SEOHead,
        {
          title: "KI-Risiko Assessment – EU AI Act Bewertung",
          description: "EU AI Act Risk Assessment: Bewerten Sie das Risiko Ihres KI-Systems nach EU AI Act. ✓ Risikoeinstufung ✓ Compliance-Check ✓ Handlungsempfehlungen. Jetzt testen!",
          canonical: "/assessment-center/ai-risk-assessment",
          keywords: "EU AI Act Assessment, KI-Risiko Bewertung, AI Risk Assessment, KI Compliance, EU AI Act Risiko",
          structuredData
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950 dark:via-gray-900 dark:to-pink-950", children: [
        /* @__PURE__ */ jsx(Header, {}),
        /* @__PURE__ */ jsx("div", { className: "pt-24 pb-16 px-4", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl", children: /* @__PURE__ */ jsx(Card, { className: "text-center p-12", children: /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              animate: { rotate: 360 },
              transition: { duration: 2, repeat: Infinity, ease: "linear" },
              className: "mx-auto mb-6",
              children: /* @__PURE__ */ jsx(Brain, { className: "h-16 w-16 text-purple-600" })
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-4", children: "Analysiere Ihr KI-System..." }),
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: "Unsere AI-Experten bewerten Ihre Antworten nach EU AI Act Kriterien" }),
          /* @__PURE__ */ jsx(Progress, { value: 75, className: "w-full max-w-md mx-auto" })
        ] }) }) }) })
      ] })
    ] });
  }
  if (showResults && result) {
    const RiskIcon = getRiskIcon(result.overallRisk);
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        SEOHead,
        {
          title: "KI-Risiko Assessment – EU AI Act Bewertung",
          description: "EU AI Act Risk Assessment: Bewerten Sie das Risiko Ihres KI-Systems nach EU AI Act. ✓ Risikoeinstufung ✓ Compliance-Check ✓ Handlungsempfehlungen. Jetzt testen!",
          canonical: "/assessment-center/ai-risk-assessment",
          keywords: "EU AI Act Assessment, KI-Risiko Bewertung, AI Risk Assessment, KI Compliance, EU AI Act Risiko",
          structuredData
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950 dark:via-gray-900 dark:to-pink-950", children: [
        /* @__PURE__ */ jsx(Header, {}),
        /* @__PURE__ */ jsx("div", { className: "pt-24 pb-16 px-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-6xl", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              className: "text-center mb-12",
              children: [
                /* @__PURE__ */ jsxs(Badge, { className: cn("mb-4 px-4 py-2 text-lg", getRiskColor(result.overallRisk)), children: [
                  /* @__PURE__ */ jsx(RiskIcon, { className: "w-5 h-5 mr-2" }),
                  result.overallRisk === "minimal" && "Minimales Risiko",
                  result.overallRisk === "limited" && "Begrenztes Risiko",
                  result.overallRisk === "high" && "Hohes Risiko",
                  result.overallRisk === "unacceptable" && "Inakzeptables Risiko"
                ] }),
                /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4", children: "Ihr AI Risk Assessment" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto", children: "Basierend auf Ihren Antworten haben wir Ihr KI-System nach EU AI Act Kriterien bewertet" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Target, { className: "h-5 w-5 text-purple-600" }),
                  "Gesamtbewertung"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
                    /* @__PURE__ */ jsxs("span", { className: "text-3xl font-bold text-gray-900 dark:text-white", children: [
                      result.score,
                      " / ",
                      result.maxScore,
                      " Punkte"
                    ] }),
                    /* @__PURE__ */ jsxs(Badge, { className: cn("px-3 py-1", getRiskColor(result.overallRisk)), children: [
                      Math.round(result.score / result.maxScore * 100),
                      "% Risiko"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Progress,
                    {
                      value: result.score / result.maxScore * 100,
                      className: "mb-4"
                    }
                  ),
                  /* @__PURE__ */ jsxs("p", { className: "text-gray-600 dark:text-gray-400", children: [
                    result.complianceStatus === "compliant" && "Ihr System entspricht den grundlegenden EU AI Act Anforderungen.",
                    result.complianceStatus === "action_needed" && "Handlungsbedarf: Einige Bereiche benötigen Verbesserungen für vollständige Compliance.",
                    result.complianceStatus === "critical" && "Kritisch: Sofortige Maßnahmen erforderlich um EU AI Act Compliance zu erreichen."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(BarChart3, { className: "h-5 w-5 text-purple-600" }),
                  "Bewertung nach Kategorien"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: Object.entries(result.categoryScores).map(([category, score]) => {
                  const percentage = score.score / score.maxScore * 100;
                  const CategoryIcon = getRiskIcon(score.riskLevel);
                  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                    /* @__PURE__ */ jsx(CategoryIcon, { className: cn(
                      "h-5 w-5",
                      score.riskLevel === "minimal" ? "text-green-600" : score.riskLevel === "limited" ? "text-yellow-600" : score.riskLevel === "high" ? "text-orange-600" : "text-red-600"
                    ) }),
                    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-1", children: [
                        /* @__PURE__ */ jsx("span", { className: "font-medium text-gray-900 dark:text-white", children: category }),
                        /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                          score.score,
                          "/",
                          score.maxScore
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx(Progress, { value: percentage, className: "h-2" })
                    ] })
                  ] }, category);
                }) }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-purple-600" }),
                  "Empfehlungen"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: result.recommendations.map((rec, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-700 dark:text-gray-300", children: rec })
                ] }, index)) }) })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-purple-600" }),
                  "Nächste Schritte"
                ] }) }),
                /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: result.nextSteps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-full flex items-center justify-center text-sm font-medium", children: index + 1 }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: step })
                ] }, index)) }) })
              ] }),
              /* @__PURE__ */ jsxs(Card, { children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Download, { className: "h-5 w-5 text-purple-600" }),
                  "Report & Actions"
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs(Button, { className: "w-full bg-purple-600 hover:bg-purple-700 text-white", children: [
                    /* @__PURE__ */ jsx(FileText, { className: "mr-2 h-4 w-4" }),
                    "Detailreport herunterladen"
                  ] }),
                  /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", onClick: resetAssessment, children: [
                    /* @__PURE__ */ jsx(RefreshCw, { className: "mr-2 h-4 w-4" }),
                    "Neues Assessment"
                  ] }),
                  /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "w-full", children: [
                    /* @__PURE__ */ jsx(Users, { className: "mr-2 h-4 w-4" }),
                    "Experten-Beratung buchen"
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "pt-6", children: /* @__PURE__ */ jsxs("div", { className: "text-center space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-2xl font-bold text-purple-600", children: [
                  Math.round((result.maxScore - result.score) / result.maxScore * 100),
                  "%"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Compliance-Potenzial" })
              ] }) }) })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(Footer, {})
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "KI-Risiko Assessment – EU AI Act Bewertung",
        description: "EU AI Act Risk Assessment: Bewerten Sie das Risiko Ihres KI-Systems nach EU AI Act. ✓ Risikoeinstufung ✓ Compliance-Check ✓ Handlungsempfehlungen. Jetzt testen!",
        canonical: "/assessment-center/ai-risk-assessment",
        keywords: "EU AI Act Assessment, KI-Risiko Bewertung, AI Risk Assessment, KI Compliance, EU AI Act Risiko",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-950 dark:via-gray-900 dark:to-pink-950", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("section", { className: "pt-24 pb-16 px-4", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-4xl text-center", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            className: "mb-8",
            children: [
              /* @__PURE__ */ jsxs(Badge, { className: "mb-4 bg-purple-100 text-purple-700 px-4 py-2", children: [
                /* @__PURE__ */ jsx(Target, { className: "w-4 h-4 mr-2" }),
                "EU AI Act Risk Assessment"
              ] }),
              /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6", children: "Ist Ihr KI-System EU AI Act konform?" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8", children: "Finden Sie in 5 Minuten heraus, welche Compliance-Anforderungen für Ihr KI-System gelten. Kostenlos und ohne Verpflichtung." })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center mb-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: [
              "Frage ",
              currentStep + 1,
              " von ",
              questions.length
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
              Math.round(progress),
              "% abgeschlossen"
            ] })
          ] }),
          /* @__PURE__ */ jsx(Progress, { value: progress, className: "w-full" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "pb-16 px-4", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl", children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(
        motion.div,
        {
          initial: { opacity: 0, x: 20 },
          animate: { opacity: 1, x: 0 },
          exit: { opacity: 0, x: -20 },
          transition: { duration: 0.3 },
          children: /* @__PURE__ */ jsxs(Card, { className: "shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm", children: [
            /* @__PURE__ */ jsxs(CardHeader, { className: "text-center pb-6", children: [
              /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "mb-4 w-fit mx-auto", children: currentQuestion.category }),
              /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4", children: currentQuestion.question }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 max-w-2xl mx-auto", children: currentQuestion.explanation })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const RiskIcon = getRiskIcon(option.riskLevel);
                return /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    whileHover: { scale: 1.02 },
                    whileTap: { scale: 0.98 },
                    className: cn(
                      "p-6 rounded-xl border-2 cursor-pointer transition-all duration-200",
                      isSelected ? "border-purple-500 bg-purple-50 dark:bg-purple-900/20" : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
                    ),
                    onClick: () => handleAnswer(currentQuestion.id, option.id),
                    children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                      /* @__PURE__ */ jsx("div", { className: cn(
                        "p-2 rounded-lg",
                        isSelected ? "bg-purple-100 dark:bg-purple-800" : "bg-gray-100 dark:bg-gray-800"
                      ), children: /* @__PURE__ */ jsx(RiskIcon, { className: cn(
                        "h-5 w-5",
                        isSelected ? "text-purple-600 dark:text-purple-400" : option.riskLevel === "minimal" ? "text-green-600" : option.riskLevel === "limited" ? "text-yellow-600" : option.riskLevel === "high" ? "text-orange-600" : "text-red-600"
                      ) }) }),
                      /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                          /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 dark:text-white", children: option.text }),
                          /* @__PURE__ */ jsxs(Badge, { className: cn("text-xs", getRiskColor(option.riskLevel)), children: [
                            option.riskLevel === "minimal" && "Minimal",
                            option.riskLevel === "limited" && "Begrenzt",
                            option.riskLevel === "high" && "Hoch",
                            option.riskLevel === "unacceptable" && "Kritisch"
                          ] })
                        ] }),
                        /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: option.explanation })
                      ] })
                    ] })
                  },
                  option.id
                );
              }),
              currentQuestion.helpText && /* @__PURE__ */ jsx("div", { className: "mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                /* @__PURE__ */ jsx(Info, { className: "h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm text-blue-700 dark:text-blue-300", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Hinweis:" }),
                  " ",
                  currentQuestion.helpText
                ] })
              ] }) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-6 pt-0", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "outline",
                  onClick: handlePrevious,
                  disabled: currentStep === 0,
                  className: "flex items-center gap-2",
                  children: [
                    /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
                    "Zurück"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  onClick: handleNext,
                  disabled: !selectedAnswer,
                  className: "flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white",
                  children: [
                    currentStep === questions.length - 1 ? "Ergebnis anzeigen" : "Weiter",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              )
            ] }) })
          ] })
        },
        currentStep
      ) }) }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  AIRiskAssessment as default
};
