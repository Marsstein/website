import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-DlgdBxCs.js";
import { L as Label } from "./label-CtFE5ecu.js";
import { Shield, FileText, Users, CheckCircle, Clock, BarChart3, Target, Download, RefreshCw, Mail, ChevronRight, Info, BookOpen, Lightbulb, ChevronLeft, Timer, Zap, Award, TrendingUp, AlertTriangle } from "lucide-react";
import { c as cn } from "../main.mjs";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-progress";
import "@radix-ui/react-radio-group";
import "@radix-ui/react-label";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const DataPrivacyReadinessAssessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showQuestionInfo, setShowQuestionInfo] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime] = useState(Date.now());
  const assessmentCategories = [
    {
      id: "governance",
      title: "Datenschutz-Governance",
      icon: Shield,
      color: "from-blue-500 to-cyan-500",
      questions: [
        {
          id: "dsb_appointed",
          question: "Haben Sie einen Datenschutzbeauftragten benannt?",
          context: "Ab 20 Mitarbeitern oder bei Hochrisiko-Verarbeitungen ist ein DSB nach Art. 37 DSGVO verpflichtend.",
          tip: "Ein qualifizierter DSB ist essentiell für die DSGVO-Compliance und reduziert rechtliche Risiken erheblich.",
          options: [
            { value: "3", label: "Ja, intern bestellt und qualifiziert", points: 3 },
            { value: "2", label: "Ja, extern beauftragt", points: 2 },
            { value: "1", label: "Noch in Planung", points: 1 },
            { value: "0", label: "Nein, nicht erforderlich/vorhanden", points: 0 }
          ]
        },
        {
          id: "policies",
          question: "Sind umfassende Datenschutzrichtlinien vorhanden?",
          context: "Interne Richtlinien bilden das Fundament für DSGVO-konforme Datenverarbeitung in Ihrem Unternehmen.",
          tip: "Dokumentierte Prozesse helfen bei Audits und schaffen Klarheit für alle Mitarbeiter.",
          options: [
            { value: "3", label: "Ja, vollständig und aktuell", points: 3 },
            { value: "2", label: "Teilweise vorhanden", points: 2 },
            { value: "1", label: "In Erstellung", points: 1 },
            { value: "0", label: "Nicht vorhanden", points: 0 }
          ]
        },
        {
          id: "training",
          question: "Werden regelmäßige Datenschutzschulungen durchgeführt?",
          options: [
            { value: "3", label: "Ja, jährlich für alle Mitarbeiter", points: 3 },
            { value: "2", label: "Gelegentlich", points: 2 },
            { value: "1", label: "Nur bei Einstellung", points: 1 },
            { value: "0", label: "Keine Schulungen", points: 0 }
          ]
        }
      ]
    },
    {
      id: "documentation",
      title: "Dokumentation & Transparenz",
      icon: FileText,
      color: "from-green-500 to-teal-500",
      questions: [
        {
          id: "processing_records",
          question: "Führen Sie ein Verzeichnis der Verarbeitungstätigkeiten?",
          options: [
            { value: "3", label: "Ja, vollständig und aktuell", points: 3 },
            { value: "2", label: "Teilweise dokumentiert", points: 2 },
            { value: "1", label: "In Erstellung", points: 1 },
            { value: "0", label: "Nicht vorhanden", points: 0 }
          ]
        },
        {
          id: "privacy_notice",
          question: "Ist Ihre Datenschutzerklärung DSGVO-konform?",
          options: [
            { value: "3", label: "Ja, vollständig und regelmäßig überprüft", points: 3 },
            { value: "2", label: "Größtenteils konform", points: 2 },
            { value: "1", label: "Überarbeitung erforderlich", points: 1 },
            { value: "0", label: "Nicht DSGVO-konform", points: 0 }
          ]
        },
        {
          id: "legal_basis",
          question: "Sind Rechtsgrundlagen für alle Verarbeitungen definiert?",
          options: [
            { value: "3", label: "Ja, für alle Verarbeitungen dokumentiert", points: 3 },
            { value: "2", label: "Für die meisten Verarbeitungen", points: 2 },
            { value: "1", label: "Teilweise definiert", points: 1 },
            { value: "0", label: "Nicht definiert", points: 0 }
          ]
        }
      ]
    },
    {
      id: "rights",
      title: "Betroffenenrechte",
      icon: Users,
      color: "from-purple-500 to-pink-500",
      questions: [
        {
          id: "data_subject_requests",
          question: "Haben Sie Prozesse für Betroffenenanfragen etabliert?",
          options: [
            { value: "3", label: "Ja, vollständig automatisiert", points: 3 },
            { value: "2", label: "Ja, manuelle Bearbeitung", points: 2 },
            { value: "1", label: "Grundlegende Prozesse vorhanden", points: 1 },
            { value: "0", label: "Keine Prozesse", points: 0 }
          ]
        },
        {
          id: "deletion_concept",
          question: "Ist ein systematisches Löschkonzept implementiert?",
          options: [
            { value: "3", label: "Ja, automatisierte Löschung", points: 3 },
            { value: "2", label: "Manuelle Löschprozesse", points: 2 },
            { value: "1", label: "Löschkonzept vorhanden, nicht umgesetzt", points: 1 },
            { value: "0", label: "Kein Löschkonzept", points: 0 }
          ]
        },
        {
          id: "data_portability",
          question: "Können Sie Daten in strukturiertem Format exportieren?",
          options: [
            { value: "3", label: "Ja, vollständig automatisiert", points: 3 },
            { value: "2", label: "Ja, manuell möglich", points: 2 },
            { value: "1", label: "Teilweise möglich", points: 1 },
            { value: "0", label: "Nicht möglich", points: 0 }
          ]
        }
      ]
    },
    {
      id: "security",
      title: "Technische Sicherheit",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      questions: [
        {
          id: "encryption",
          question: "Werden personenbezogene Daten verschlüsselt?",
          options: [
            { value: "3", label: "Ja, bei Übertragung und Speicherung", points: 3 },
            { value: "2", label: "Nur bei Übertragung", points: 2 },
            { value: "1", label: "Teilweise verschlüsselt", points: 1 },
            { value: "0", label: "Keine Verschlüsselung", points: 0 }
          ]
        },
        {
          id: "access_control",
          question: "Ist eine granulare Zugriffskontrolle implementiert?",
          options: [
            { value: "3", label: "Ja, rollenbasiert mit regelmäßiger Überprüfung", points: 3 },
            { value: "2", label: "Grundlegende Zugriffskontrollen", points: 2 },
            { value: "1", label: "Einfache Benutzerkonten", points: 1 },
            { value: "0", label: "Keine Zugriffskontrolle", points: 0 }
          ]
        },
        {
          id: "backup_recovery",
          question: "Sind Backup- und Recovery-Verfahren etabliert?",
          options: [
            { value: "3", label: "Ja, getestet und dokumentiert", points: 3 },
            { value: "2", label: "Ja, regelmäßige Backups", points: 2 },
            { value: "1", label: "Unregelmäßige Backups", points: 1 },
            { value: "0", label: "Keine Backups", points: 0 }
          ]
        }
      ]
    }
  ];
  const allQuestions = assessmentCategories.flatMap(
    (category) => category.questions.map((q) => ({ ...q, categoryId: category.id, categoryTitle: category.title }))
  );
  const currentQuestion = allQuestions[currentStep];
  const totalQuestions = allQuestions.length;
  const handleAnswer = (value) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };
  const nextQuestion = () => {
    if (currentStep < totalQuestions - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowResults(true);
        setTimeSpent(Math.round((Date.now() - startTime) / 1e3));
      }, 1500);
    }
  };
  const prevQuestion = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };
  const restartAssessment = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
    setShowEmailForm(false);
    setShowQuestionInfo(false);
    setIsLoading(false);
    setTimeSpent(0);
  };
  const calculateResults = () => {
    const categoryScores = {};
    assessmentCategories.forEach((category) => {
      categoryScores[category.id] = { current: 0, max: 0 };
      category.questions.forEach((question) => {
        const answer = answers[question.id];
        const selectedOption = question.options.find((opt) => opt.value === answer);
        const maxPoints = Math.max(...question.options.map((opt) => opt.points));
        categoryScores[category.id].current += (selectedOption == null ? void 0 : selectedOption.points) || 0;
        categoryScores[category.id].max += maxPoints;
      });
    });
    const totalCurrent = Object.values(categoryScores).reduce((sum, score) => sum + score.current, 0);
    const totalMax = Object.values(categoryScores).reduce((sum, score) => sum + score.max, 0);
    const overallPercentage = totalCurrent / totalMax * 100;
    return { categoryScores, totalCurrent, totalMax, overallPercentage };
  };
  const getMaturityLevel = (percentage) => {
    if (percentage >= 90) return {
      level: "Optimiert",
      color: "text-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      icon: Award,
      description: "Ihre Datenschutz-Compliance ist exzellent aufgestellt."
    };
    if (percentage >= 70) return {
      level: "Erweitert",
      color: "text-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      icon: TrendingUp,
      description: "Solide Basis mit Verbesserungspotential in einzelnen Bereichen."
    };
    if (percentage >= 50) return {
      level: "Entwickelt",
      color: "text-orange-500",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      icon: Target,
      description: "Grundlagen vorhanden, wichtige Bereiche benötigen Aufmerksamkeit."
    };
    if (percentage >= 30) return {
      level: "Beginnend",
      color: "text-yellow-600",
      bgColor: "bg-yellow-50 dark:bg-yellow-950/20",
      icon: Clock,
      description: "Erste Schritte unternommen, systematischer Ausbau erforderlich."
    };
    return {
      level: "Initial",
      color: "text-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      icon: AlertTriangle,
      description: "Dringender Handlungsbedarf für DSGVO-Compliance."
    };
  };
  const results = showResults ? calculateResults() : null;
  const maturityLevel = results ? getMaturityLevel(results.overallPercentage) : null;
  if (showResults && results && maturityLevel) {
    return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950", children: [
      /* @__PURE__ */ jsx("section", { className: "pt-24 pb-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4 mb-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-700 border border-green-200", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: "Assessment abgeschlossen" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 border border-blue-200", children: [
            /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium", children: [
              Math.floor(timeSpent / 60),
              ":",
              (timeSpent % 60).toString().padStart(2, "0"),
              " Min"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6", children: "Ihr Datenschutz-Reifegrad" }),
        /* @__PURE__ */ jsxs("div", { className: cn("inline-flex items-center gap-3 px-6 py-3 rounded-2xl border-2 text-lg font-bold mb-8", maturityLevel.bgColor), children: [
          /* @__PURE__ */ jsx(maturityLevel.icon, { className: cn("h-6 w-6", maturityLevel.color) }),
          /* @__PURE__ */ jsx("span", { className: maturityLevel.color, children: maturityLevel.level }),
          /* @__PURE__ */ jsxs("span", { className: maturityLevel.color, children: [
            "(",
            Math.round(results.overallPercentage),
            "%)"
          ] })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 mb-8", children: maturityLevel.description })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "pb-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(Card, { className: "mb-8 border-2 border-purple-200 dark:border-purple-800", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-purple-600" }),
            "Gesamtergebnis"
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-purple-600 mb-2", children: results.totalCurrent }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Erreichte Punkte" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-4xl font-bold text-purple-600 mb-2", children: [
                  Math.round(results.overallPercentage),
                  "%"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Compliance-Grad" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-purple-600 mb-2", children: results.totalMax }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Maximale Punkte" })
              ] })
            ] }),
            /* @__PURE__ */ jsx(Progress, { value: results.overallPercentage, className: "h-4" })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-8", children: assessmentCategories.map((category) => {
          const categoryScore = results.categoryScores[category.id];
          const categoryPercentage = categoryScore.current / categoryScore.max * 100;
          return /* @__PURE__ */ jsxs(Card, { className: "border-2 border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx("div", { className: cn("p-2 rounded-lg bg-gradient-to-r", category.color), children: /* @__PURE__ */ jsx(category.icon, { className: "h-5 w-5 text-white" }) }),
              /* @__PURE__ */ jsx("span", { className: "text-lg", children: category.title })
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsxs("span", { className: "text-2xl font-bold text-gray-900 dark:text-white", children: [
                  Math.round(categoryPercentage),
                  "%"
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                  categoryScore.current,
                  "/",
                  categoryScore.max,
                  " Punkte"
                ] })
              ] }),
              /* @__PURE__ */ jsx(Progress, { value: categoryPercentage, className: "h-3" })
            ] })
          ] }, category.id);
        }) }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Target, { className: "h-6 w-6 text-brand-red" }),
            "Personalisierte Empfehlungen"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: assessmentCategories.map((category) => ({
            ...category,
            score: results.categoryScores[category.id],
            percentage: results.categoryScores[category.id].current / results.categoryScores[category.id].max * 100
          })).sort((a, b) => a.percentage - b.percentage).slice(0, 2).map((category) => /* @__PURE__ */ jsx("div", { className: "p-4 bg-gray-50 dark:bg-gray-800 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx("div", { className: cn("p-2 rounded-lg bg-gradient-to-r", category.color), children: /* @__PURE__ */ jsx(category.icon, { className: "h-5 w-5 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("h4", { className: "font-semibold text-gray-900 dark:text-white mb-2", children: [
                "Priorität: ",
                category.title
              ] }),
              /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                "Mit ",
                Math.round(category.percentage),
                "% Compliance-Grad bietet dieser Bereich das größte Verbesserungspotential für Ihre DSGVO-Konformität."
              ] })
            ] })
          ] }) }, category.id)) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 items-center justify-center mb-6", children: [
            /* @__PURE__ */ jsxs(
              Button,
              {
                onClick: () => setShowEmailForm(true),
                className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
                size: "lg",
                children: [
                  /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
                  "Detaillierten Report als PDF herunterladen"
                ]
              }
            ),
            /* @__PURE__ */ jsx(Link, { to: "/contact?source=assessment", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "lg", className: "border-2", children: [
              /* @__PURE__ */ jsx(Users, { className: "mr-2 h-4 w-4" }),
              "Kostenlose Compliance-Beratung buchen"
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: restartAssessment,
              variant: "ghost",
              size: "sm",
              className: "text-gray-500 hover:text-gray-700",
              children: [
                /* @__PURE__ */ jsx(RefreshCw, { className: "mr-2 h-4 w-4" }),
                "Assessment wiederholen"
              ]
            }
          )
        ] })
      ] }) }) }),
      showEmailForm && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxs(Card, { className: "max-w-lg w-full", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-brand-red" }),
          "Assessment-Report herunterladen"
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: "Erhalten Sie Ihren detaillierten Compliance-Report mit individuellen Handlungsempfehlungen und Roadmap als PDF." }),
          /* @__PURE__ */ jsxs("form", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "E-Mail-Adresse" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "email",
                  required: true,
                  className: "w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent",
                  placeholder: "ihre.email@unternehmen.de"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Unternehmen" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: "w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent",
                  placeholder: "Ihr Unternehmen"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  type: "submit",
                  className: "flex-1 bg-brand-red hover:bg-brand-red/90 text-white",
                  children: [
                    /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
                    "Report herunterladen"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  type: "button",
                  variant: "outline",
                  onClick: () => setShowEmailForm(false),
                  children: "Abbrechen"
                }
              )
            ] })
          ] })
        ] })
      ] }) })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Datenschutz Readiness Assessment – DSGVO-Bereitschaft prüfen",
        description: "Bewerten Sie Ihre Datenschutz-Bereitschaft interaktiv. Analysieren Sie Prozesse, Dokumentation & TOMs für optimalen Datenschutz. ✓ Kostenlos ✓ Sofortige Auswertung. Jetzt testen!",
        canonical: "/assessment-center/datenschutz-readiness-assessment",
        keywords: "datenschutz readiness assessment, dsgvo bereitschaft prüfen, datenschutz bewertung, privacy assessment"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950", children: [
      /* @__PURE__ */ jsxs("section", { className: "pt-24 pb-16 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10", children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-transparent rounded-full blur-3xl" }) }),
        /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6", children: [
            /* @__PURE__ */ jsx(Link, { to: "/resources", className: "hover:text-brand-red transition-colors", children: "Resources" }),
            /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: "Datenschutz-Readiness-Assessment" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl shadow-lg", children: /* @__PURE__ */ jsx(BarChart3, { className: "h-8 w-8 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx(Badge, { className: "bg-purple-100 text-purple-700 border-purple-200 mb-3", children: "Interaktiver Compliance-Test" }),
              /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4", children: "Datenschutz-Readiness-Assessment" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 mb-4", children: "Ermitteln Sie Ihren DSGVO-Compliance-Reifegrad in nur 5 Minuten" }),
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-4 text-sm text-gray-500", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: "~5 Minuten" })
              ] }) })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "pb-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx(Card, { className: "mb-8 border-2 border-purple-200 dark:border-purple-800", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-600 dark:text-gray-400", children: "Fortschritt" }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm font-medium text-purple-600", children: [
              currentStep + 1,
              " von ",
              totalQuestions
            ] })
          ] }),
          /* @__PURE__ */ jsx(Progress, { value: (currentStep + 1) / totalQuestions * 100, className: "h-3 mb-4" }),
          /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx(Badge, { className: "bg-purple-100 text-purple-700 border-purple-200", children: currentQuestion.categoryTitle }) })
        ] }) }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-8 border-2 border-gray-200 dark:border-gray-700 shadow-lg", children: [
          /* @__PURE__ */ jsxs(CardHeader, { children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-xl mb-4 flex-1", children: currentQuestion.question }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => setShowQuestionInfo(!showQuestionInfo),
                  className: "ml-4 text-gray-500 hover:text-gray-700",
                  children: /* @__PURE__ */ jsx(Info, { className: "h-4 w-4" })
                }
              )
            ] }),
            showQuestionInfo && currentQuestion.context && /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3 mb-3", children: [
                /* @__PURE__ */ jsx(BookOpen, { className: "h-5 w-5 text-blue-600 mt-0.5" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-blue-900 dark:text-blue-100 mb-1", children: "Hintergrund" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-800 dark:text-blue-200", children: currentQuestion.context })
                ] })
              ] }),
              currentQuestion.tip && /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
                /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-600 mt-0.5" }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 dark:text-yellow-100 mb-1", children: "Tipp" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-800 dark:text-yellow-200", children: currentQuestion.tip })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(
            RadioGroup,
            {
              value: answers[currentQuestion.id] || "",
              onValueChange: handleAnswer,
              className: "space-y-4",
              children: currentQuestion.options.map((option, index) => /* @__PURE__ */ jsxs("div", { className: cn(
                "flex items-center space-x-3 p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer group",
                answers[currentQuestion.id] === option.value ? "border-purple-500 bg-purple-50 dark:bg-purple-950/20" : "border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-purple-300"
              ), children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { value: option.value, id: option.value }),
                /* @__PURE__ */ jsx(
                  Label,
                  {
                    htmlFor: option.value,
                    className: "flex-1 cursor-pointer text-gray-900 dark:text-white group-hover:text-purple-700 dark:group-hover:text-purple-300",
                    children: option.label
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: cn(
                  "text-xs px-2 py-1 rounded font-medium",
                  answers[currentQuestion.id] === option.value ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300" : "bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-400"
                ), children: [
                  option.points,
                  " Pkt."
                ] })
              ] }, option.value))
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              onClick: prevQuestion,
              disabled: currentStep === 0,
              className: "flex items-center gap-2",
              children: [
                /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
                "Zurück"
              ]
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-500", children: [
            /* @__PURE__ */ jsx(Timer, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsxs("span", { children: [
              "~",
              Math.max(1, Math.ceil((totalQuestions - currentStep) * 0.5)),
              " Min verbleibend"
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            Button,
            {
              onClick: nextQuestion,
              disabled: !answers[currentQuestion.id] || isLoading,
              className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg transition-all duration-300 flex items-center gap-2 min-w-[140px]",
              size: "lg",
              children: isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(RefreshCw, { className: "h-4 w-4 animate-spin" }),
                "Analysiere..."
              ] }) : currentStep === totalQuestions - 1 ? /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4" }),
                "Ergebnis anzeigen"
              ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                "Weiter",
                /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
              ] })
            }
          )
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-8", children: "Was Sie nach dem Assessment erhalten" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg mb-4", children: /* @__PURE__ */ jsx(Target, { className: "h-6 w-6 text-purple-600" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 dark:text-white mb-2", children: "Personalisierte Bewertung" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Detaillierte Analyse Ihres aktuellen Compliance-Stands mit konkreten Handlungsempfehlungen." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4", children: /* @__PURE__ */ jsx(FileText, { className: "h-6 w-6 text-blue-600" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 dark:text-white mb-2", children: "Implementierungs-Roadmap" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Priorisierte To-Do-Liste mit zeitlichen Empfehlungen für die Umsetzung." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mb-4", children: /* @__PURE__ */ jsx(Zap, { className: "h-6 w-6 text-green-600" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 dark:text-white mb-2", children: "Benchmark-Vergleich" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Vergleich mit anderen Unternehmen Ihrer Branche und Größe." })
          ] })
        ] })
      ] }) }) })
    ] })
  ] });
};
export {
  DataPrivacyReadinessAssessment
};
