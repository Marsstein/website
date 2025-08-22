import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import { motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent, a as CardHeader, b as CardTitle } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { RefreshCw, Activity, Users, Scale, Eye, Lightbulb, CheckCircle2, ArrowRight, ChevronRight, Shield, Download, FileText, BarChart3, Hash, Info, CheckCircle, ArrowLeft, Target, AlertOctagon, AlertTriangle } from "lucide-react";
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
const AlgorithmicImpactAssessment = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Assessment",
    "name": "Algorithmic Impact Assessment",
    "description": "Bewerten Sie die gesellschaftlichen Auswirkungen Ihrer algorithmischen Entscheidungssysteme",
    "educationalLevel": "Professional",
    "url": "https://marsstein.com/assessment-center/algorithmic-impact-assessment"
  };
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const questions = [
    {
      id: "algorithm_scope",
      category: "Anwendungsbereich",
      question: "Welchen gesellschaftlichen Bereich betrifft Ihr Algorithmus primär?",
      explanation: "Der Anwendungsbereich bestimmt die potenzielle gesellschaftliche Reichweite der Auswirkungen",
      options: [
        {
          id: "internal_processes",
          text: "Interne Geschäftsprozesse (HR, Finanzen, Operations)",
          impactLevel: "low",
          points: 1,
          explanation: "Begrenzte gesellschaftliche Auswirkungen, hauptsächlich unternehmensintern"
        },
        {
          id: "customer_services",
          text: "Kundenservice und Produktempfehlungen",
          impactLevel: "medium",
          points: 2,
          explanation: "Moderate Auswirkungen auf Nutzerverhalten und Wahlmöglichkeiten"
        },
        {
          id: "public_services",
          text: "Öffentliche Dienstleistungen (Gesundheit, Bildung, Soziales)",
          impactLevel: "high",
          points: 4,
          explanation: "Erhebliche Auswirkungen auf grundlegende Lebensbereiche der Bürger"
        },
        {
          id: "justice_security",
          text: "Justiz, Sicherheit oder demokratische Prozesse",
          impactLevel: "critical",
          points: 5,
          explanation: "Kritische Auswirkungen auf Rechtsstaatlichkeit und gesellschaftliche Grundordnung"
        }
      ]
    },
    {
      id: "affected_population",
      category: "Betroffene Personen",
      question: "Wie viele Personen sind von Ihrem Algorithmus betroffen?",
      explanation: "Die Anzahl betroffener Personen bestimmt die Skalierung der gesellschaftlichen Auswirkungen",
      options: [
        {
          id: "small_group",
          text: "Weniger als 1.000 Personen",
          impactLevel: "low",
          points: 1,
          explanation: "Begrenzte Reichweite mit lokalisierten Auswirkungen"
        },
        {
          id: "medium_group",
          text: "1.000 - 10.000 Personen",
          impactLevel: "medium",
          points: 2,
          explanation: "Moderate Reichweite mit regionalen Auswirkungen"
        },
        {
          id: "large_group",
          text: "10.000 - 100.000 Personen",
          impactLevel: "high",
          points: 3,
          explanation: "Große Reichweite mit überregionalen Auswirkungen"
        },
        {
          id: "mass_population",
          text: "Mehr als 100.000 Personen",
          impactLevel: "critical",
          points: 4,
          explanation: "Massenhafte Betroffenheit mit gesellschaftsweiten Auswirkungen"
        }
      ]
    },
    {
      id: "vulnerable_groups",
      category: "Vulnerable Gruppen",
      question: "Betrifft Ihr Algorithmus besonders schutzbedürftige Personengruppen?",
      explanation: "Vulnerable Gruppen benötigen besonderen Schutz vor algorithmischen Entscheidungen",
      options: [
        {
          id: "no_vulnerable",
          text: "Nein, keine besonderen Gruppen betroffen",
          impactLevel: "low",
          points: 0,
          explanation: "Standardschutzmaßnahmen ausreichend"
        },
        {
          id: "economic_vulnerable",
          text: "Wirtschaftlich Benachteiligte oder Arbeitsuchende",
          impactLevel: "medium",
          points: 2,
          explanation: "Erhöhte Aufmerksamkeit für faire Behandlung erforderlich"
        },
        {
          id: "protected_characteristics",
          text: "Personen mit geschützten Merkmalen (Alter, Geschlecht, Ethnizität)",
          impactLevel: "high",
          points: 3,
          explanation: "Besondere Anti-Diskriminierungsmaßnahmen notwendig"
        },
        {
          id: "highly_vulnerable",
          text: "Kinder, Menschen mit Behinderungen oder andere hochvulnerable Gruppen",
          impactLevel: "critical",
          points: 4,
          explanation: "Höchste Schutzstandards und zusätzliche Sicherungsmaßnahmen erforderlich"
        }
      ]
    },
    {
      id: "decision_consequences",
      category: "Entscheidungsfolgen",
      question: "Welche Konsequenzen haben die algorithmischen Entscheidungen für Betroffene?",
      explanation: "Die Schwere der Konsequenzen bestimmt das Risikopotenzial für die Betroffenen",
      options: [
        {
          id: "minor_convenience",
          text: "Geringfügige Auswirkungen (z.B. Produktempfehlungen, Werbung)",
          impactLevel: "low",
          points: 1,
          explanation: "Minimale Auswirkungen auf Lebensqualität oder Wahlmöglichkeiten"
        },
        {
          id: "service_access",
          text: "Zugang zu Services oder Dienstleistungen",
          impactLevel: "medium",
          points: 2,
          explanation: "Moderate Auswirkungen auf Zugangsmöglichkeiten und Komfort"
        },
        {
          id: "financial_impact",
          text: "Finanzielle Auswirkungen (Kredite, Versicherungen, Gehalt)",
          impactLevel: "high",
          points: 3,
          explanation: "Erhebliche Auswirkungen auf wirtschaftliche Situation"
        },
        {
          id: "fundamental_rights",
          text: "Grundrechte und Lebensperspektiven (Gesundheit, Freiheit, Bildung)",
          impactLevel: "critical",
          points: 4,
          explanation: "Schwerwiegende Auswirkungen auf fundamentale Lebensbereiche"
        }
      ]
    },
    {
      id: "bias_fairness",
      category: "Fairness & Bias",
      question: "Wie bewerten Sie das Bias- und Diskriminierungsrisiko Ihres Algorithmus?",
      explanation: "Algorithmische Verzerrungen können zu unfairer Behandlung führen",
      options: [
        {
          id: "low_bias_risk",
          text: "Niedriges Risiko - neutrale Daten und getestete Fairness",
          impactLevel: "low",
          points: 1,
          explanation: "Umfassende Bias-Tests durchgeführt, faire Ergebnisse validiert"
        },
        {
          id: "moderate_bias_risk",
          text: "Moderates Risiko - teilweise sensible Daten verwendet",
          impactLevel: "medium",
          points: 2,
          explanation: "Einige Bias-Indikatoren vorhanden, Monitoring implementiert"
        },
        {
          id: "high_bias_risk",
          text: "Hohes Risiko - historische oder demografische Daten als Basis",
          impactLevel: "high",
          points: 3,
          explanation: "Signifikante Bias-Risiken identifiziert, Mitigationsmaßnahmen erforderlich"
        },
        {
          id: "critical_bias_risk",
          text: "Kritisches Risiko - bekannte Verzerrungen oder Diskriminierungspotenzial",
          impactLevel: "critical",
          points: 4,
          explanation: "Hohe Wahrscheinlichkeit unfairer Behandlung, umfassende Überarbeitung nötig"
        }
      ]
    },
    {
      id: "transparency_explainability",
      category: "Transparenz & Erklärbarkeit",
      question: "Wie transparent und erklärbar sind die Entscheidungen Ihres Algorithmus?",
      explanation: "Transparenz ermöglicht Vertrauen und Nachvollziehbarkeit algorithmischer Entscheidungen",
      options: [
        {
          id: "fully_transparent",
          text: "Vollständig transparent - alle Faktoren nachvollziehbar",
          impactLevel: "low",
          points: 0,
          explanation: "Betroffene können Entscheidungen vollständig verstehen und nachvollziehen"
        },
        {
          id: "partially_transparent",
          text: "Teilweise transparent - Hauptfaktoren bekannt",
          impactLevel: "medium",
          points: 1,
          explanation: "Grundlegende Entscheidungskriterien sind verfügbar"
        },
        {
          id: "limited_transparency",
          text: "Begrenzte Transparenz - nur Ergebnis kommuniziert",
          impactLevel: "high",
          points: 2,
          explanation: "Entscheidungsprozess größtenteils intransparent"
        },
        {
          id: "black_box",
          text: "Black Box - keine Erklärung der Entscheidungslogik",
          impactLevel: "critical",
          points: 3,
          explanation: "Vollständig intransparente Entscheidungen ohne Nachvollziehbarkeit"
        }
      ]
    },
    {
      id: "human_oversight",
      category: "Menschliche Aufsicht",
      question: "Welches Maß an menschlicher Kontrolle gibt es über algorithmische Entscheidungen?",
      explanation: "Menschliche Aufsicht gewährleistet Verantwortlichkeit und Korrekturmöglichkeiten",
      options: [
        {
          id: "human_in_loop",
          text: "Mensch entscheidet - Algorithmus unterstützt nur",
          impactLevel: "low",
          points: 0,
          explanation: "Vollständige menschliche Kontrolle über finale Entscheidungen"
        },
        {
          id: "human_on_loop",
          text: "Menschliche Überprüfung bei kritischen Fällen",
          impactLevel: "medium",
          points: 1,
          explanation: "Automatische Entscheidungen mit menschlicher Oversight bei Bedarf"
        },
        {
          id: "limited_oversight",
          text: "Begrenzte menschliche Kontrolle - nur bei Beschwerden",
          impactLevel: "high",
          points: 2,
          explanation: "Reaktive menschliche Intervention nur nach Problemen"
        },
        {
          id: "fully_automated",
          text: "Vollautomatisch - keine routinemäßige menschliche Kontrolle",
          impactLevel: "critical",
          points: 3,
          explanation: "Algorithmus entscheidet autonom ohne regelmäßige menschliche Aufsicht"
        }
      ]
    },
    {
      id: "data_quality",
      category: "Datenqualität & -repräsentativität",
      question: "Wie bewerten Sie die Qualität und Repräsentativität Ihrer Trainingsdaten?",
      explanation: "Datenqualität beeinflusst direkt die Fairness und Genauigkeit algorithmischer Entscheidungen",
      options: [
        {
          id: "high_quality_representative",
          text: "Hohe Qualität - repräsentativ für alle Zielgruppen",
          impactLevel: "low",
          points: 0,
          explanation: "Umfassende, ausgewogene Datenbasis ohne erkennbare Lücken"
        },
        {
          id: "good_quality_minor_gaps",
          text: "Gute Qualität - kleinere Repräsentationslücken",
          impactLevel: "medium",
          points: 1,
          explanation: "Solide Datenbasis mit identifizierten und adressierten Schwachstellen"
        },
        {
          id: "moderate_quality_gaps",
          text: "Moderate Qualität - signifikante Datenlücken vorhanden",
          impactLevel: "high",
          points: 2,
          explanation: "Relevante Unterrepräsentation bestimmter Gruppen oder Szenarien"
        },
        {
          id: "poor_quality_biased",
          text: "Niedrige Qualität - stark verzerrte oder unvollständige Daten",
          impactLevel: "critical",
          points: 3,
          explanation: "Systematische Datenprobleme mit hohem Bias-Potenzial"
        }
      ]
    }
  ];
  const calculateResult = () => {
    const categoryScores = {};
    let totalScore = 0;
    let maxTotalScore = 0;
    questions.forEach((question) => {
      const answer = answers[question.id];
      if (answer) {
        const selectedOption = question.options.find((opt) => opt.id === answer);
        if (selectedOption) {
          const category = question.category;
          if (!categoryScores[category]) {
            categoryScores[category] = { score: 0, maxScore: 0, impactLevel: "low" };
          }
          categoryScores[category].score += selectedOption.points;
          categoryScores[category].maxScore += Math.max(...question.options.map((opt) => opt.points));
          totalScore += selectedOption.points;
        }
      }
      maxTotalScore += Math.max(...question.options.map((opt) => opt.points));
    });
    const impactPercentage = totalScore / maxTotalScore * 100;
    let overallImpact;
    let complianceStatus;
    if (impactPercentage <= 25) {
      overallImpact = "low";
      complianceStatus = "compliant";
    } else if (impactPercentage <= 50) {
      overallImpact = "medium";
      complianceStatus = "action_needed";
    } else if (impactPercentage <= 75) {
      overallImpact = "high";
      complianceStatus = "action_needed";
    } else {
      overallImpact = "critical";
      complianceStatus = "critical";
    }
    const recommendations = [];
    const nextSteps = [];
    const mitigationStrategies = [];
    if (answers["algorithm_scope"] === "public_services" || answers["algorithm_scope"] === "justice_security") {
      recommendations.push("Implementierung verstärkter Governance-Mechanismen für den öffentlichen Sektor");
      nextSteps.push("Abstimmung mit relevanten Aufsichtsbehörden");
    }
    if (answers["vulnerable_groups"] !== "no_vulnerable") {
      recommendations.push("Entwicklung spezifischer Schutzmaßnahmen für vulnerable Gruppen");
      mitigationStrategies.push("Implementierung von Fairness-Constraints im Algorithmus");
    }
    if (answers["bias_fairness"] === "high_bias_risk" || answers["bias_fairness"] === "critical_bias_risk") {
      recommendations.push("Durchführung umfassender Bias-Audits und Implementierung von Debiasing-Techniken");
      mitigationStrategies.push("Einführung kontinuierlicher Fairness-Monitoring-Systeme");
    }
    if (answers["transparency_explainability"] === "limited_transparency" || answers["transparency_explainability"] === "black_box") {
      recommendations.push("Entwicklung von Explainable AI-Komponenten für bessere Nachvollziehbarkeit");
      nextSteps.push("Implementation von automatisierten Erklärungssystemen");
    }
    if (answers["human_oversight"] === "fully_automated" || answers["human_oversight"] === "limited_oversight") {
      recommendations.push("Einführung menschlicher Aufsichtsmechanismen und Interventionsmöglichkeiten");
      mitigationStrategies.push("Implementierung von Human-in-the-Loop-Verfahren bei kritischen Entscheidungen");
    }
    if (answers["data_quality"] === "moderate_quality_gaps" || answers["data_quality"] === "poor_quality_biased") {
      recommendations.push("Verbesserung der Datenqualität und -repräsentativität durch gezieltes Datensammlung");
      nextSteps.push("Durchführung einer umfassenden Datenaudit");
    }
    if (overallImpact === "high" || overallImpact === "critical") {
      recommendations.push("Entwicklung eines umfassenden Algorithmic Impact Management Plans");
      nextSteps.push("Einrichtung eines interdisziplinären Ethics Board");
      mitigationStrategies.push("Regelmäßige Stakeholder-Konsultationen und Impact-Reviews");
    }
    return {
      overallImpact,
      score: totalScore,
      maxScore: maxTotalScore,
      categoryScores,
      recommendations,
      nextSteps,
      mitigationStrategies,
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
        const result2 = calculateResult();
        setResult(result2);
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
  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setResult(null);
    setIsCalculating(false);
  };
  const currentQuestion = questions[currentStep];
  const selectedAnswer = answers[currentQuestion == null ? void 0 : currentQuestion.id];
  const progress = (currentStep + 1) / questions.length * 100;
  const getImpactColor = (level) => {
    switch (level) {
      case "low":
        return "text-green-600 bg-green-100 border-green-200";
      case "medium":
        return "text-yellow-600 bg-yellow-100 border-yellow-200";
      case "high":
        return "text-orange-600 bg-orange-100 border-orange-200";
      case "critical":
        return "text-red-600 bg-red-100 border-red-200";
      default:
        return "text-gray-600 bg-gray-100 border-gray-200";
    }
  };
  const getImpactIcon = (level) => {
    switch (level) {
      case "low":
        return CheckCircle;
      case "medium":
        return Info;
      case "high":
        return AlertTriangle;
      case "critical":
        return AlertOctagon;
      default:
        return Info;
    }
  };
  if (isCalculating) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        SEOHead,
        {
          title: "Algorithmic Impact Assessment – Folgenabschätzung",
          description: "Algorithmic Impact Assessment: Bewerten Sie gesellschaftliche Auswirkungen algorithmischer Systeme. ✓ Bias-Prüfung ✓ Fairness ✓ Transparenz. Jetzt testen!",
          canonical: "/assessment-center/algorithmic-impact-assessment",
          keywords: "Algorithmic Impact Assessment, AIA, Algorithmen Folgenabschätzung, KI Fairness, Bias Detection",
          structuredData
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950", children: [
        /* @__PURE__ */ jsx(Header, {}),
        /* @__PURE__ */ jsx("div", { className: "pt-24 pb-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
          /* @__PURE__ */ jsx(
            motion.div,
            {
              className: "mb-8",
              animate: { rotate: 360 },
              transition: { duration: 2, repeat: Infinity, ease: "linear" },
              children: /* @__PURE__ */ jsx(RefreshCw, { className: "h-16 w-16 text-brand-red mx-auto" })
            }
          ),
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "Algorithmic Impact Assessment wird berechnet..." }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300 mb-8", children: "Wir analysieren die gesellschaftlichen Auswirkungen Ihres Algorithmus und erstellen einen detaillierten Impact-Report mit Handlungsempfehlungen." }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx(Activity, { className: "h-4 w-4 animate-pulse" }),
              /* @__PURE__ */ jsx("span", { children: "Gesellschaftliche Auswirkungen bewerten..." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 animate-pulse" }),
              /* @__PURE__ */ jsx("span", { children: "Vulnerable Gruppen analysieren..." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4 animate-pulse" }),
              /* @__PURE__ */ jsx("span", { children: "Fairness-Risiken identifizieren..." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4 animate-pulse" }),
              /* @__PURE__ */ jsx("span", { children: "Transparenz-Level prüfen..." })
            ] })
          ] })
        ] }) }) })
      ] })
    ] });
  }
  if (showResults && result) {
    const ImpactIcon = getImpactIcon(result.overallImpact);
    const impactLabels = {
      low: "Geringer Impact",
      medium: "Moderater Impact",
      high: "Hoher Impact",
      critical: "Kritischer Impact"
    };
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        SEOHead,
        {
          title: "Algorithmic Impact Assessment – Folgenabschätzung",
          description: "Algorithmic Impact Assessment: Bewerten Sie gesellschaftliche Auswirkungen algorithmischer Systeme. ✓ Bias-Prüfung ✓ Fairness ✓ Transparenz. Jetzt testen!",
          canonical: "/assessment-center/algorithmic-impact-assessment",
          keywords: "Algorithmic Impact Assessment, AIA, Algorithmen Folgenabschätzung, KI Fairness, Bias Detection",
          structuredData
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950", children: [
        /* @__PURE__ */ jsx(Header, {}),
        /* @__PURE__ */ jsx("div", { className: "pt-24 pb-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto", children: [
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "text-center mb-12",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              children: [
                /* @__PURE__ */ jsxs("div", { className: cn(
                  "inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 mb-6",
                  getImpactColor(result.overallImpact)
                ), children: [
                  /* @__PURE__ */ jsx(ImpactIcon, { className: "h-6 w-6" }),
                  /* @__PURE__ */ jsx("span", { className: "font-semibold", children: impactLabels[result.overallImpact] })
                ] }),
                /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4", children: "Algorithmic Impact Assessment" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Detaillierte Analyse der gesellschaftlichen Auswirkungen Ihres Algorithmus" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "grid md:grid-cols-3 gap-6 mb-12",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.2 },
              children: [
                /* @__PURE__ */ jsx(Card, { className: "text-center", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-2", children: [
                    result.score,
                    "/",
                    result.maxScore
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Impact Score" }),
                  /* @__PURE__ */ jsx(
                    Progress,
                    {
                      value: result.score / result.maxScore * 100,
                      className: "mt-3"
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsx(Card, { className: "text-center", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsx("div", { className: cn(
                    "text-3xl font-bold mb-2",
                    result.overallImpact === "low" ? "text-green-600" : result.overallImpact === "medium" ? "text-yellow-600" : result.overallImpact === "high" ? "text-orange-600" : "text-red-600"
                  ), children: impactLabels[result.overallImpact] }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Gesamtbewertung" })
                ] }) }),
                /* @__PURE__ */ jsx(Card, { className: "text-center", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                  /* @__PURE__ */ jsx("div", { className: cn(
                    "text-3xl font-bold mb-2",
                    result.complianceStatus === "compliant" ? "text-green-600" : result.complianceStatus === "action_needed" ? "text-yellow-600" : "text-red-600"
                  ), children: result.complianceStatus === "compliant" ? "Konform" : result.complianceStatus === "action_needed" ? "Handlung nötig" : "Kritisch" }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Compliance Status" })
                ] }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "mb-12",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.3 },
              children: [
                /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-6", children: "Bewertung nach Kategorien" }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: Object.entries(result.categoryScores).map(([category, data], index) => {
                  const percentage = data.score / data.maxScore * 100;
                  const level = percentage <= 25 ? "low" : percentage <= 50 ? "medium" : percentage <= 75 ? "high" : "critical";
                  return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 dark:text-white", children: category }),
                      /* @__PURE__ */ jsxs(Badge, { className: getImpactColor(level), children: [
                        data.score,
                        "/",
                        data.maxScore
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx(Progress, { value: percentage, className: "mb-2" }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: [
                      Math.round(percentage),
                      "% Impact Level"
                    ] })
                  ] }) }, category);
                }) })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "grid md:grid-cols-3 gap-6 mb-12",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4 },
              children: [
                /* @__PURE__ */ jsxs(Card, { children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-500" }),
                    "Empfehlungen"
                  ] }) }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: result.recommendations.slice(0, 4).map((rec, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-500 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: rec })
                  ] }, index)) }) })
                ] }),
                /* @__PURE__ */ jsxs(Card, { children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(ArrowRight, { className: "h-5 w-5 text-blue-500" }),
                    "Nächste Schritte"
                  ] }) }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: result.nextSteps.slice(0, 4).map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-blue-500 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: step })
                  ] }, index)) }) })
                ] }),
                /* @__PURE__ */ jsxs(Card, { children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-5 w-5 text-green-500" }),
                    "Mitigationsstrategien"
                  ] }) }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: result.mitigationStrategies.slice(0, 4).map((strategy, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 text-green-500 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: strategy })
                  ] }, index)) }) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5 },
              children: [
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    onClick: handleRestart,
                    variant: "outline",
                    size: "lg",
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ jsx(RefreshCw, { className: "h-5 w-5" }),
                      "Erneut bewerten"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    className: "bg-brand-red hover:bg-brand-red/90 text-white flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ jsx(Download, { className: "h-5 w-5" }),
                      "Impact Report downloaden"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "lg",
                    variant: "outline",
                    className: "flex items-center gap-2",
                    children: [
                      /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5" }),
                      "Mitigation Plan erstellen"
                    ]
                  }
                )
              ]
            }
          )
        ] }) }) }),
        /* @__PURE__ */ jsx(Footer, {})
      ] })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Algorithmic Impact Assessment – Folgenabschätzung",
        description: "Algorithmic Impact Assessment: Bewerten Sie gesellschaftliche Auswirkungen algorithmischer Systeme. ✓ Bias-Prüfung ✓ Fairness ✓ Transparenz. Jetzt testen!",
        canonical: "/assessment-center/algorithmic-impact-assessment",
        keywords: "Algorithmic Impact Assessment, AIA, Algorithmen Folgenabschätzung, KI Fairness, Bias Detection",
        structuredData
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950", children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("div", { className: "pt-24 pb-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(
          motion.div,
          {
            className: "text-center mb-12",
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            children: [
              /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 mb-6", children: [
                /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Algorithmic Impact Assessment" })
              ] }),
              /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4", children: "Gesellschaftliche Auswirkungen bewerten" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8", children: "Analysieren Sie die gesellschaftlichen Auswirkungen Ihres Algorithmus systematisch und entwickeln Sie Strategien zur Risikominimierung." }),
              /* @__PURE__ */ jsxs("div", { className: "max-w-md mx-auto", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-2", children: [
                  /* @__PURE__ */ jsx("span", { children: "Fortschritt" }),
                  /* @__PURE__ */ jsxs("span", { children: [
                    currentStep + 1,
                    " von ",
                    questions.length
                  ] })
                ] }),
                /* @__PURE__ */ jsx(Progress, { value: progress, className: "h-2" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            exit: { opacity: 0, x: -20 },
            className: "mb-8",
            children: /* @__PURE__ */ jsxs(Card, { className: "border-2 border-gray-200 dark:border-gray-700", children: [
              /* @__PURE__ */ jsxs(CardHeader, { className: "pb-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
                  /* @__PURE__ */ jsx("div", { className: "p-2 bg-brand-red/10 rounded-lg", children: /* @__PURE__ */ jsx(Hash, { className: "h-5 w-5 text-brand-red" }) }),
                  /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-brand-red border-brand-red/30", children: currentQuestion.category })
                ] }),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl text-gray-900 dark:text-white mb-3", children: currentQuestion.question }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-300 leading-relaxed", children: currentQuestion.explanation }),
                currentQuestion.helpText && /* @__PURE__ */ jsx("div", { className: "mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-800 dark:text-blue-200", children: currentQuestion.helpText })
                ] }) })
              ] }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: currentQuestion.options.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const ImpactIcon = getImpactIcon(option.impactLevel);
                return /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    whileHover: { scale: 1.01 },
                    whileTap: { scale: 0.99 },
                    children: /* @__PURE__ */ jsx(
                      "button",
                      {
                        onClick: () => handleAnswer(currentQuestion.id, option.id),
                        className: cn(
                          "w-full p-4 rounded-xl border-2 text-left transition-all duration-200",
                          isSelected ? "border-brand-red bg-brand-red/5 shadow-md" : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-sm"
                        ),
                        children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                          /* @__PURE__ */ jsx("div", { className: cn(
                            "p-2 rounded-lg flex-shrink-0",
                            isSelected ? "bg-brand-red/10" : "bg-gray-100 dark:bg-gray-800"
                          ), children: /* @__PURE__ */ jsx(ImpactIcon, { className: cn(
                            "h-5 w-5",
                            isSelected ? "text-brand-red" : "text-gray-500"
                          ) }) }),
                          /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
                            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                              /* @__PURE__ */ jsx("span", { className: "font-semibold text-gray-900 dark:text-white", children: option.text }),
                              /* @__PURE__ */ jsx(
                                Badge,
                                {
                                  className: cn(
                                    "text-xs",
                                    getImpactColor(option.impactLevel)
                                  ),
                                  children: option.impactLevel === "low" ? "Niedrig" : option.impactLevel === "medium" ? "Mittel" : option.impactLevel === "high" ? "Hoch" : "Kritisch"
                                }
                              )
                            ] }),
                            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 leading-relaxed", children: option.explanation })
                          ] }),
                          /* @__PURE__ */ jsx("div", { className: cn(
                            "flex items-center justify-center w-6 h-6 rounded-full border-2 flex-shrink-0",
                            isSelected ? "border-brand-red bg-brand-red" : "border-gray-300 dark:border-gray-600"
                          ), children: isSelected && /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-white" }) })
                        ] })
                      }
                    )
                  },
                  option.id
                );
              }) }) })
            ] })
          },
          currentStep
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: handlePrevious,
              disabled: currentStep === 0,
              variant: "outline",
              size: "lg",
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx(ArrowLeft, { className: "h-4 w-4" }),
                "Zurück"
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-500 dark:text-gray-400", children: [
            "Frage ",
            currentStep + 1,
            " von ",
            questions.length
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: handleNext,
              disabled: !selectedAnswer,
              size: "lg",
              className: "bg-brand-red hover:bg-brand-red/90 text-white flex items-center gap-2",
              children: currentStep === questions.length - 1 ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(Target, { className: "h-4 w-4" }),
                "Assessment abschließen"
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                "Weiter",
                /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })
              ] })
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  AlgorithmicImpactAssessment as default
};
