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
import { RefreshCw, Building2, FileText, Shield, Users, BarChart3, Award, CheckCircle, TrendingUp, AlertTriangle, Lightbulb, CheckCircle2, Clipboard, ChevronRight, Download, BookOpen, Settings, Hash, Info, ArrowLeft, Target, ArrowRight, Star, XCircle } from "lucide-react";
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
const AIGovernanceCheck = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Assessment",
    "name": "AI Governance Check",
    "description": "Überprüfen Sie Ihre KI-Governance-Strukturen und -Prozesse für verantwortungsvolle KI-Entwicklung",
    "educationalLevel": "Professional",
    "url": "https://marsstein.com/assessment-center/ai-governance-check"
  };
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [result, setResult] = useState(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const questions = [
    {
      id: "governance_structure",
      category: "Governance-Struktur",
      question: "Wie ist die AI Governance in Ihrem Unternehmen organisiert?",
      explanation: "Eine klare Governance-Struktur ist fundamental für verantwortungsvolle KI-Entwicklung",
      options: [
        {
          id: "no_structure",
          text: "Keine formale AI Governance-Struktur vorhanden",
          maturityLevel: "basic",
          points: 1,
          explanation: "Grundlegende Governance-Mechanismen müssen erst etabliert werden"
        },
        {
          id: "informal_guidelines",
          text: "Informelle Richtlinien und Ad-hoc-Entscheidungen",
          maturityLevel: "developing",
          points: 2,
          explanation: "Erste Ansätze vorhanden, aber strukturierte Formalisierung erforderlich"
        },
        {
          id: "formal_committee",
          text: "AI Ethics Committee oder Governance Board etabliert",
          maturityLevel: "defined",
          points: 3,
          explanation: "Solide Grundstruktur mit definierten Verantwortlichkeiten"
        },
        {
          id: "integrated_governance",
          text: "Integrierte AI Governance in alle Geschäftsprozesse",
          maturityLevel: "managed",
          points: 4,
          explanation: "Systematische Integration in Unternehmensprozesse"
        },
        {
          id: "adaptive_governance",
          text: "Adaptive, lernende Governance mit kontinuierlicher Optimierung",
          maturityLevel: "optimized",
          points: 5,
          explanation: "Höchste Reifegrad mit selbstoptimierenden Governance-Mechanismen"
        }
      ]
    },
    {
      id: "policies_procedures",
      category: "Richtlinien & Verfahren",
      question: "Wie umfassend sind Ihre AI-spezifischen Richtlinien und Verfahren?",
      explanation: "Dokumentierte Richtlinien bilden das Fundament für konsistente AI Governance",
      options: [
        {
          id: "no_policies",
          text: "Keine spezifischen AI-Richtlinien vorhanden",
          maturityLevel: "basic",
          points: 1,
          explanation: "Grundlegende Policy-Entwicklung erforderlich"
        },
        {
          id: "basic_policies",
          text: "Grundlegende AI-Richtlinien für einzelne Bereiche",
          maturityLevel: "developing",
          points: 2,
          explanation: "Erste Richtlinien vorhanden, aber Ausbau notwendig"
        },
        {
          id: "comprehensive_policies",
          text: "Umfassende AI-Richtlinien für alle relevanten Bereiche",
          maturityLevel: "defined",
          points: 3,
          explanation: "Solide Policy-Basis mit breiter Abdeckung"
        },
        {
          id: "integrated_procedures",
          text: "Integrierte Verfahren mit regelmäßiger Überprüfung und Anpassung",
          maturityLevel: "managed",
          points: 4,
          explanation: "Systematische Verfahrensintegration mit Monitoring"
        },
        {
          id: "dynamic_policies",
          text: "Dynamische, selbstaktualierende Richtlinien basierend auf Learnings",
          maturityLevel: "optimized",
          points: 5,
          explanation: "Fortschrittlichste Policy-Verwaltung mit kontinuierlicher Adaptation"
        }
      ]
    },
    {
      id: "risk_management",
      category: "Risikomanagement",
      question: "Wie handhaben Sie AI-spezifische Risiken in Ihrem Unternehmen?",
      explanation: "Systematisches Risikomanagement ist essentiell für sichere AI-Implementierung",
      options: [
        {
          id: "no_risk_mgmt",
          text: "Keine systematische AI-Risikobewertung",
          maturityLevel: "basic",
          points: 1,
          explanation: "Risikomanagement-Framework muss entwickelt werden"
        },
        {
          id: "basic_risk_assessment",
          text: "Grundlegende Risikoidentifikation bei AI-Projekten",
          maturityLevel: "developing",
          points: 2,
          explanation: "Erste Risikobewertung vorhanden, aber Systematisierung nötig"
        },
        {
          id: "formal_risk_framework",
          text: "Formelles AI-Risikomanagement-Framework implementiert",
          maturityLevel: "defined",
          points: 3,
          explanation: "Strukturiertes Risikomanagement mit definierten Prozessen"
        },
        {
          id: "integrated_monitoring",
          text: "Integriertes Monitoring mit automatisierten Risiko-Alerts",
          maturityLevel: "managed",
          points: 4,
          explanation: "Proaktives Risikomanagement mit kontinuierlicher Überwachung"
        },
        {
          id: "predictive_risk_mgmt",
          text: "Predictive Risk Management mit KI-gestützter Risikovorhersage",
          maturityLevel: "optimized",
          points: 5,
          explanation: "Fortschrittlichstes Risikomanagement mit prädiktiven Capabilities"
        }
      ]
    },
    {
      id: "accountability_responsibility",
      category: "Verantwortlichkeit",
      question: "Wie sind Verantwortlichkeiten für AI-Systeme in Ihrem Unternehmen geregelt?",
      explanation: "Klare Verantwortlichkeiten gewährleisten Accountability bei AI-Entscheidungen",
      options: [
        {
          id: "unclear_responsibility",
          text: "Unklare oder keine definierten Verantwortlichkeiten",
          maturityLevel: "basic",
          points: 1,
          explanation: "Grundlegende Verantwortlichkeitsstrukturen müssen etabliert werden"
        },
        {
          id: "project_level_responsibility",
          text: "Projektebene: AI-Projektleiter sind verantwortlich",
          maturityLevel: "developing",
          points: 2,
          explanation: "Erste Verantwortlichkeiten definiert, aber Ausbau erforderlich"
        },
        {
          id: "role_based_responsibility",
          text: "Rollenbasierte Verantwortlichkeiten mit klaren Zuständigkeiten",
          maturityLevel: "defined",
          points: 3,
          explanation: "Strukturierte Verantwortlichkeitsverteilung implementiert"
        },
        {
          id: "end_to_end_accountability",
          text: "End-to-End Accountability mit Lifecycle-Management",
          maturityLevel: "managed",
          points: 4,
          explanation: "Umfassende Verantwortlichkeit über gesamten AI-Lebenszyklus"
        },
        {
          id: "adaptive_accountability",
          text: "Adaptive Accountability mit dynamischen Verantwortlichkeiten",
          maturityLevel: "optimized",
          points: 5,
          explanation: "Höchste Stufe mit selbstanpassenden Verantwortlichkeitsstrukturen"
        }
      ]
    },
    {
      id: "transparency_explainability",
      category: "Transparenz & Erklärbarkeit",
      question: "Wie transparent sind Ihre AI-Systeme für Stakeholder?",
      explanation: "Transparenz schafft Vertrauen und ermöglicht verantwortungsvolle AI-Nutzung",
      options: [
        {
          id: "black_box_systems",
          text: 'AI-Systeme sind größtenteils "Black Boxes"',
          maturityLevel: "basic",
          points: 1,
          explanation: "Grundlegende Transparenz-Mechanismen müssen entwickelt werden"
        },
        {
          id: "basic_documentation",
          text: "Grundlegende Dokumentation von AI-Systemen vorhanden",
          maturityLevel: "developing",
          points: 2,
          explanation: "Erste Transparenz-Ansätze, aber Verbesserung nötig"
        },
        {
          id: "stakeholder_transparency",
          text: "Transparenz für verschiedene Stakeholder-Gruppen implementiert",
          maturityLevel: "defined",
          points: 3,
          explanation: "Strukturierte Transparenz mit zielgruppenspezifischer Information"
        },
        {
          id: "interactive_explainability",
          text: "Interaktive Erklärbarkeits-Tools für Nutzer verfügbar",
          maturityLevel: "managed",
          points: 4,
          explanation: "Fortgeschrittene Transparenz mit benutzerfreundlichen Tools"
        },
        {
          id: "adaptive_transparency",
          text: "Adaptive Transparenz basierend auf Kontext und Nutzerbedürfnissen",
          maturityLevel: "optimized",
          points: 5,
          explanation: "Höchste Transparenz mit kontextadaptiven Erklärungen"
        }
      ]
    },
    {
      id: "human_oversight",
      category: "Menschliche Aufsicht",
      question: "Wie ist die menschliche Kontrolle über AI-Systeme organisiert?",
      explanation: "Human Oversight ist entscheidend für verantwortungsvolle AI-Governance",
      options: [
        {
          id: "minimal_oversight",
          text: "Minimale oder keine systematische menschliche Aufsicht",
          maturityLevel: "basic",
          points: 1,
          explanation: "Grundlegende Oversight-Mechanismen müssen etabliert werden"
        },
        {
          id: "reactive_oversight",
          text: "Reaktive Überwachung bei Problemen oder Beschwerden",
          maturityLevel: "developing",
          points: 2,
          explanation: "Erste Oversight-Strukturen, aber proaktive Ansätze nötig"
        },
        {
          id: "systematic_monitoring",
          text: "Systematisches Monitoring mit definierten Interventionspunkten",
          maturityLevel: "defined",
          points: 3,
          explanation: "Strukturierte Überwachung mit klaren Eingriffsregeln"
        },
        {
          id: "intelligent_oversight",
          text: "Intelligente Oversight mit KI-unterstützter Anomalie-Erkennung",
          maturityLevel: "managed",
          points: 4,
          explanation: "Fortgeschrittene Überwachung mit technologischer Unterstützung"
        },
        {
          id: "adaptive_human_ai_collaboration",
          text: "Adaptive Mensch-KI-Kollaboration mit dynamischer Kontrolle",
          maturityLevel: "optimized",
          points: 5,
          explanation: "Optimale Balance zwischen menschlicher Kontrolle und AI-Automatisierung"
        }
      ]
    },
    {
      id: "training_awareness",
      category: "Training & Bewusstsein",
      question: "Wie umfassend ist das AI Governance Training in Ihrem Unternehmen?",
      explanation: "Mitarbeiter-Training ist fundamental für erfolgreiche AI Governance Implementierung",
      options: [
        {
          id: "no_training",
          text: "Kein spezifisches AI Governance Training vorhanden",
          maturityLevel: "basic",
          points: 1,
          explanation: "Grundlegende Trainings-Programme müssen entwickelt werden"
        },
        {
          id: "basic_awareness",
          text: "Grundlegende AI-Awareness-Sessions für Schlüsselpersonal",
          maturityLevel: "developing",
          points: 2,
          explanation: "Erste Trainings-Ansätze, aber Ausbau erforderlich"
        },
        {
          id: "role_specific_training",
          text: "Rollenspezifische Trainings für verschiedene Zielgruppen",
          maturityLevel: "defined",
          points: 3,
          explanation: "Strukturierte Trainings mit zielgruppenspezifischen Inhalten"
        },
        {
          id: "continuous_learning",
          text: "Kontinuierliche Lernprogramme mit regelmäßigen Updates",
          maturityLevel: "managed",
          points: 4,
          explanation: "Systematische Weiterbildung mit aktuellen Entwicklungen"
        },
        {
          id: "adaptive_learning_ecosystem",
          text: "Adaptives Lern-Ökosystem mit personalisierten Trainings-Pfaden",
          maturityLevel: "optimized",
          points: 5,
          explanation: "Fortschrittlichstes Lernsystem mit individueller Anpassung"
        }
      ]
    },
    {
      id: "compliance_monitoring",
      category: "Compliance & Monitoring",
      question: "Wie überwachen Sie die Einhaltung von AI Governance Standards?",
      explanation: "Kontinuierliches Compliance-Monitoring gewährleistet nachhaltige Governance",
      options: [
        {
          id: "no_monitoring",
          text: "Keine systematische Compliance-Überwachung",
          maturityLevel: "basic",
          points: 1,
          explanation: "Grundlegende Monitoring-Systeme müssen implementiert werden"
        },
        {
          id: "periodic_audits",
          text: "Periodische interne Audits und Überprüfungen",
          maturityLevel: "developing",
          points: 2,
          explanation: "Erste Compliance-Checks, aber kontinuierliches Monitoring nötig"
        },
        {
          id: "systematic_compliance_tracking",
          text: "Systematisches Compliance-Tracking mit KPIs und Metriken",
          maturityLevel: "defined",
          points: 3,
          explanation: "Strukturiertes Monitoring mit messbaren Indikatoren"
        },
        {
          id: "automated_compliance_monitoring",
          text: "Automatisiertes Compliance-Monitoring mit Real-time-Alerts",
          maturityLevel: "managed",
          points: 4,
          explanation: "Fortgeschrittenes Monitoring mit proaktiven Benachrichtigungen"
        },
        {
          id: "predictive_compliance_management",
          text: "Predictive Compliance Management mit Trend-Analyse",
          maturityLevel: "optimized",
          points: 5,
          explanation: "Höchstes Niveau mit prädiktiver Compliance-Vorhersage"
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
            categoryScores[category] = { score: 0, maxScore: 0, maturityLevel: "basic" };
          }
          categoryScores[category].score += selectedOption.points;
          categoryScores[category].maxScore += Math.max(...question.options.map((opt) => opt.points));
          totalScore += selectedOption.points;
        }
      }
      maxTotalScore += Math.max(...question.options.map((opt) => opt.points));
    });
    const maturityPercentage = totalScore / maxTotalScore * 100;
    let overallMaturity;
    let complianceStatus;
    if (maturityPercentage <= 20) {
      overallMaturity = "basic";
      complianceStatus = "critical";
    } else if (maturityPercentage <= 40) {
      overallMaturity = "developing";
      complianceStatus = "action_needed";
    } else if (maturityPercentage <= 60) {
      overallMaturity = "defined";
      complianceStatus = "action_needed";
    } else if (maturityPercentage <= 80) {
      overallMaturity = "managed";
      complianceStatus = "compliant";
    } else {
      overallMaturity = "optimized";
      complianceStatus = "compliant";
    }
    const recommendations = [];
    const nextSteps = [];
    const improvementAreas = [];
    const strengths = [];
    Object.entries(categoryScores).forEach(([category, data]) => {
      const categoryPercentage = data.score / data.maxScore * 100;
      if (categoryPercentage < 40) {
        improvementAreas.push(category);
      } else if (categoryPercentage >= 80) {
        strengths.push(category);
      }
    });
    if (answers["governance_structure"] === "no_structure" || answers["governance_structure"] === "informal_guidelines") {
      recommendations.push("Etablierung einer formalen AI Governance-Struktur mit klaren Rollen und Verantwortlichkeiten");
      nextSteps.push("Gründung eines AI Ethics Committee oder Governance Board");
    }
    if (answers["policies_procedures"] === "no_policies" || answers["policies_procedures"] === "basic_policies") {
      recommendations.push("Entwicklung umfassender AI-spezifischer Richtlinien und Verfahren");
      nextSteps.push("Erstellung eines AI Policy Frameworks für alle relevanten Bereiche");
    }
    if (answers["risk_management"] === "no_risk_mgmt" || answers["risk_management"] === "basic_risk_assessment") {
      recommendations.push("Implementierung eines systematischen AI-Risikomanagement-Frameworks");
      nextSteps.push("Durchführung einer umfassenden AI-Risikoanalyse");
    }
    if (answers["accountability_responsibility"] === "unclear_responsibility" || answers["accountability_responsibility"] === "project_level_responsibility") {
      recommendations.push("Definition klarer Verantwortlichkeiten und Accountability-Strukturen");
      nextSteps.push("Erstellung einer RACI-Matrix für AI-Governance-Prozesse");
    }
    if (answers["transparency_explainability"] === "black_box_systems" || answers["transparency_explainability"] === "basic_documentation") {
      recommendations.push("Verbesserung der AI-Transparenz durch Explainable AI-Technologien");
      nextSteps.push("Implementierung von AI-Erklärbarkeitswerkzeugen für Stakeholder");
    }
    if (answers["human_oversight"] === "minimal_oversight" || answers["human_oversight"] === "reactive_oversight") {
      recommendations.push("Stärkung der menschlichen Aufsicht durch systematische Monitoring-Mechanismen");
      nextSteps.push("Entwicklung von Human-in-the-Loop-Verfahren für kritische AI-Entscheidungen");
    }
    if (answers["training_awareness"] === "no_training" || answers["training_awareness"] === "basic_awareness") {
      recommendations.push("Ausbau der AI Governance-Trainings für alle relevanten Mitarbeitergruppen");
      nextSteps.push("Entwicklung rollenspezifischer AI-Trainings-Programme");
    }
    if (answers["compliance_monitoring"] === "no_monitoring" || answers["compliance_monitoring"] === "periodic_audits") {
      recommendations.push("Einführung kontinuierlicher Compliance-Monitoring-Systeme");
      nextSteps.push("Implementierung automatisierter Compliance-Tracking-Tools");
    }
    if (overallMaturity === "basic" || overallMaturity === "developing") {
      recommendations.unshift("Aufbau einer grundlegenden AI Governance-Infrastruktur als Fundament");
      nextSteps.unshift("Priorisierung der kritischsten Governance-Lücken");
    } else if (overallMaturity === "defined") {
      recommendations.unshift("Integration und Automatisierung bestehender Governance-Prozesse");
      nextSteps.unshift("Entwicklung von KPIs zur Messung der Governance-Effektivität");
    } else if (overallMaturity === "managed") {
      recommendations.unshift("Optimierung und kontinuierliche Verbesserung der Governance-Prozesse");
      nextSteps.unshift("Implementierung von Best Practices und Benchmarking");
    }
    return {
      overallMaturity,
      score: totalScore,
      maxScore: maxTotalScore,
      categoryScores,
      recommendations: recommendations.slice(0, 6),
      nextSteps: nextSteps.slice(0, 6),
      improvementAreas,
      strengths,
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
      }, 2500);
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
  const getMaturityColor = (level) => {
    switch (level) {
      case "basic":
        return "text-red-600 bg-red-100 border-red-200";
      case "developing":
        return "text-orange-600 bg-orange-100 border-orange-200";
      case "defined":
        return "text-yellow-600 bg-yellow-100 border-yellow-200";
      case "managed":
        return "text-blue-600 bg-blue-100 border-blue-200";
      case "optimized":
        return "text-green-600 bg-green-100 border-green-200";
      default:
        return "text-gray-600 bg-gray-100 border-gray-200";
    }
  };
  const getMaturityIcon = (level) => {
    switch (level) {
      case "basic":
        return XCircle;
      case "developing":
        return AlertTriangle;
      case "defined":
        return Info;
      case "managed":
        return CheckCircle;
      case "optimized":
        return Star;
      default:
        return Info;
    }
  };
  if (isCalculating) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        SEOHead,
        {
          title: "KI-Governance Check – Reifegrad-Bewertung",
          description: "AI Governance Check: Bewerten Sie Ihre KI-Governance-Strukturen. ✓ Verantwortungsvolle KI ✓ Reifegrad-Analyse ✓ Handlungsempfehlungen. Jetzt testen!",
          canonical: "/assessment-center/ai-governance-check",
          keywords: "AI Governance Check, KI-Governance, Responsible AI, KI-Ethik, KI-Management",
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
          /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-gray-900 dark:text-white mb-4", children: "AI Governance Assessment wird ausgewertet..." }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300 mb-8", children: "Wir analysieren Ihre AI Governance-Strukturen und erstellen einen detaillierten Reifegrad-Report mit spezifischen Verbesserungsempfehlungen." }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4 animate-pulse" }),
              /* @__PURE__ */ jsx("span", { children: "Governance-Strukturen bewerten..." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4 animate-pulse" }),
              /* @__PURE__ */ jsx("span", { children: "Richtlinien und Verfahren prüfen..." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx(Shield, { className: "h-4 w-4 animate-pulse" }),
              /* @__PURE__ */ jsx("span", { children: "Risikomanagement analysieren..." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx(Users, { className: "h-4 w-4 animate-pulse" }),
              /* @__PURE__ */ jsx("span", { children: "Verantwortlichkeiten bewerten..." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-2 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4 animate-pulse" }),
              /* @__PURE__ */ jsx("span", { children: "Compliance-Reifegrad bestimmen..." })
            ] })
          ] })
        ] }) }) })
      ] })
    ] });
  }
  if (showResults && result) {
    const MaturityIcon = getMaturityIcon(result.overallMaturity);
    const maturityLabels = {
      basic: "Grundstufe",
      developing: "Entwickelnd",
      defined: "Definiert",
      managed: "Gesteuert",
      optimized: "Optimiert"
    };
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        SEOHead,
        {
          title: "KI-Governance Check – Reifegrad-Bewertung",
          description: "AI Governance Check: Bewerten Sie Ihre KI-Governance-Strukturen. ✓ Verantwortungsvolle KI ✓ Reifegrad-Analyse ✓ Handlungsempfehlungen. Jetzt testen!",
          canonical: "/assessment-center/ai-governance-check",
          keywords: "AI Governance Check, KI-Governance, Responsible AI, KI-Ethik, KI-Management",
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
                  getMaturityColor(result.overallMaturity)
                ), children: [
                  /* @__PURE__ */ jsx(MaturityIcon, { className: "h-6 w-6" }),
                  /* @__PURE__ */ jsxs("span", { className: "font-semibold", children: [
                    "Reifegrad: ",
                    maturityLabels[result.overallMaturity]
                  ] })
                ] }),
                /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4", children: "AI Governance Check" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto", children: "Detaillierte Analyse Ihrer AI Governance-Strukturen und -Prozesse" })
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
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Governance Score" }),
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
                    result.overallMaturity === "basic" ? "text-red-600" : result.overallMaturity === "developing" ? "text-orange-600" : result.overallMaturity === "defined" ? "text-yellow-600" : result.overallMaturity === "managed" ? "text-blue-600" : "text-green-600"
                  ), children: maturityLabels[result.overallMaturity] }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Reifegrad" })
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
                /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-6", children: "Reifegrad nach Governance-Bereichen" }),
                /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-6", children: Object.entries(result.categoryScores).map(([category, data], index) => {
                  const percentage = data.score / data.maxScore * 100;
                  const level = percentage <= 20 ? "basic" : percentage <= 40 ? "developing" : percentage <= 60 ? "defined" : percentage <= 80 ? "managed" : "optimized";
                  return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                      /* @__PURE__ */ jsx("h3", { className: "font-semibold text-gray-900 dark:text-white", children: category }),
                      /* @__PURE__ */ jsxs(Badge, { className: getMaturityColor(level), children: [
                        data.score,
                        "/",
                        data.maxScore
                      ] })
                    ] }),
                    /* @__PURE__ */ jsx(Progress, { value: percentage, className: "mb-2" }),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-600 dark:text-gray-400", children: [
                      maturityLabels[level],
                      " (",
                      Math.round(percentage),
                      "%)"
                    ] })
                  ] }) }, category);
                }) })
              ]
            }
          ),
          (result.strengths.length > 0 || result.improvementAreas.length > 0) && /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "grid md:grid-cols-2 gap-6 mb-12",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.4 },
              children: [
                result.strengths.length > 0 && /* @__PURE__ */ jsxs(Card, { className: "border-green-200 dark:border-green-800", children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-green-700 dark:text-green-300", children: [
                    /* @__PURE__ */ jsx(Award, { className: "h-5 w-5" }),
                    "Stärken"
                  ] }) }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: result.strengths.map((strength, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-green-500 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: strength })
                  ] }, index)) }) })
                ] }),
                result.improvementAreas.length > 0 && /* @__PURE__ */ jsxs(Card, { className: "border-orange-200 dark:border-orange-800", children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-orange-700 dark:text-orange-300", children: [
                    /* @__PURE__ */ jsx(TrendingUp, { className: "h-5 w-5" }),
                    "Verbesserungsbereiche"
                  ] }) }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-2", children: result.improvementAreas.map((area, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-orange-500 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: area })
                  ] }, index)) }) })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "grid md:grid-cols-2 gap-6 mb-12",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: 0.5 },
              children: [
                /* @__PURE__ */ jsxs(Card, { children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-500" }),
                    "Empfehlungen"
                  ] }) }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: result.recommendations.map((rec, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4 text-green-500 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: rec })
                  ] }, index)) }) })
                ] }),
                /* @__PURE__ */ jsxs(Card, { children: [
                  /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(Clipboard, { className: "h-5 w-5 text-blue-500" }),
                    "Nächste Schritte"
                  ] }) }),
                  /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: result.nextSteps.map((step, index) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 text-blue-500 mt-1 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: step })
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
              transition: { delay: 0.6 },
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
                      "Governance Report downloaden"
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
                      /* @__PURE__ */ jsx(BookOpen, { className: "h-5 w-5" }),
                      "Improvement Roadmap erstellen"
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
        title: "KI-Governance Check – Reifegrad-Bewertung",
        description: "AI Governance Check: Bewerten Sie Ihre KI-Governance-Strukturen. ✓ Verantwortungsvolle KI ✓ Reifegrad-Analyse ✓ Handlungsempfehlungen. Jetzt testen!",
        canonical: "/assessment-center/ai-governance-check",
        keywords: "AI Governance Check, KI-Governance, Responsible AI, KI-Ethik, KI-Management",
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
                /* @__PURE__ */ jsx(Settings, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "AI Governance Check" })
              ] }),
              /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4", children: "AI Governance Reifegrad bewerten" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8", children: "Evaluieren Sie systematisch den Reifegrad Ihrer AI Governance-Strukturen und erhalten Sie konkrete Handlungsempfehlungen zur Verbesserung." }),
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
                const MaturityIcon = getMaturityIcon(option.maturityLevel);
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
                          ), children: /* @__PURE__ */ jsx(MaturityIcon, { className: cn(
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
                                    getMaturityColor(option.maturityLevel)
                                  ),
                                  children: option.maturityLevel === "basic" ? "Grundstufe" : option.maturityLevel === "developing" ? "Entwickelnd" : option.maturityLevel === "defined" ? "Definiert" : option.maturityLevel === "managed" ? "Gesteuert" : "Optimiert"
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
  AIGovernanceCheck as default
};
