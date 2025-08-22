import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { C as Checkbox } from "./checkbox-BNCkAJgi.js";
import { AlertTriangle, Eye, MessageSquare, FileText, CheckCircle, ChevronRight, Star, Calendar, Timer, PauseCircle, PlayCircle, Phone, Download, Users, Clock, Info, Lightbulb, Gavel, AlertCircle, Mail, Scale, Shield } from "lucide-react";
import { c as cn } from "../main.mjs";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-checkbox";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const BreachResponseChecklist = () => {
  const [completedItems, setCompletedItems] = useState(/* @__PURE__ */ new Set());
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [activePhase, setActivePhase] = useState("immediate");
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [expandedItems, setExpandedItems] = useState(/* @__PURE__ */ new Set());
  const timelinePhases = [
    {
      id: "immediate",
      title: "Sofortmaßnahmen (0-1 Stunden)",
      color: "from-red-500 to-red-600",
      bgColor: "bg-red-50 dark:bg-red-950/20",
      borderColor: "border-red-200 dark:border-red-800",
      icon: AlertTriangle,
      description: "Erste kritische Schritte zur Schadensbegrenzung",
      items: [
        {
          id: "incident_detected",
          title: "Vorfall entdeckt und dokumentiert",
          description: "Zeitpunkt, Art und Umfang der Datenschutzverletzung festhalten",
          timeframe: "Sofort",
          responsible: "IT-Team/Entdecker",
          critical: true,
          tips: [
            "Genaue Uhrzeit und Datum der Entdeckung notieren",
            "Ersten Verdacht nicht ignorieren - jede Anomalie ernst nehmen",
            "Screenshots und Logs als Beweismittel sichern"
          ],
          legalBasis: "Art. 33 Abs. 1 DSGVO",
          consequences: "Ohne sofortige Dokumentation erschwert sich die spätere Meldung an die Aufsichtsbehörde"
        },
        {
          id: "containment",
          title: "Schadensbegrenzung eingeleitet",
          description: "Weitere Datenverluste verhindern, betroffene Systeme isolieren",
          timeframe: "< 30 Min",
          responsible: "IT-Security",
          critical: true
        },
        {
          id: "incident_team_alerted",
          title: "Incident Response Team benachrichtigt",
          description: "Alle relevanten internen Stakeholder informieren",
          timeframe: "< 30 Min",
          responsible: "Incident Manager",
          critical: true
        },
        {
          id: "dsb_informed",
          title: "Datenschutzbeauftragten informiert",
          description: "DSB über Vorfall in Kenntnis setzen (falls vorhanden)",
          timeframe: "< 60 Min",
          responsible: "Management",
          critical: true
        }
      ]
    },
    {
      id: "assessment",
      title: "Bewertung & Analyse (1-6 Stunden)",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50 dark:bg-orange-950/20",
      borderColor: "border-orange-200 dark:border-orange-800",
      icon: Eye,
      description: "Detaillierte Analyse des Vorfalls und der Auswirkungen",
      items: [
        {
          id: "impact_assessment",
          title: "Auswirkungen bewerten",
          description: "Art, Umfang und Schwere der Datenschutzverletzung bestimmen",
          timeframe: "1-3 Std",
          responsible: "DSB/Legal",
          critical: true
        },
        {
          id: "affected_data_identified",
          title: "Betroffene Daten identifiziert",
          description: "Welche personenbezogenen Daten sind betroffen? Kategorien und Menge",
          timeframe: "2-4 Std",
          responsible: "IT/DSB",
          critical: true
        },
        {
          id: "affected_persons_count",
          title: "Anzahl betroffener Personen ermittelt",
          description: "Wie viele Personen sind von der Verletzung betroffen?",
          timeframe: "2-4 Std",
          responsible: "IT/DSB",
          critical: true
        },
        {
          id: "notification_requirement_assessed",
          title: "Meldepflicht geprüft",
          description: "Bewertung ob Meldung an Aufsichtsbehörde/Betroffene erforderlich",
          timeframe: "3-6 Std",
          responsible: "DSB/Legal",
          critical: true
        }
      ]
    },
    {
      id: "notification",
      title: "Meldungen (6-72 Stunden)",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      borderColor: "border-blue-200 dark:border-blue-800",
      icon: MessageSquare,
      description: "Gesetzlich vorgeschriebene Meldungen und Kommunikation",
      items: [
        {
          id: "authority_notification_prepared",
          title: "Meldung an Aufsichtsbehörde vorbereitet",
          description: "Vollständige Dokumentation für Behördenmeldung erstellen",
          timeframe: "< 72 Std",
          responsible: "DSB/Legal",
          critical: true
        },
        {
          id: "authority_notified",
          title: "Aufsichtsbehörde benachrichtigt",
          description: "Formelle Meldung gemäß Art. 33 DSGVO (falls erforderlich)",
          timeframe: "< 72 Std",
          responsible: "DSB",
          critical: true
        },
        {
          id: "affected_persons_notification_prepared",
          title: "Benachrichtigung der Betroffenen vorbereitet",
          description: "Kommunikationsstrategie und -inhalte für betroffene Personen",
          timeframe: "< 72 Std",
          responsible: "DSB/PR",
          critical: false
        },
        {
          id: "affected_persons_notified",
          title: "Betroffene Personen benachrichtigt",
          description: "Information der betroffenen Personen (falls erforderlich)",
          timeframe: "Unverzüglich",
          responsible: "DSB/Customer Service",
          critical: false
        }
      ]
    },
    {
      id: "investigation",
      title: "Untersuchung & Dokumentation (72+ Stunden)",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/20",
      borderColor: "border-purple-200 dark:border-purple-800",
      icon: FileText,
      description: "Vollständige Aufarbeitung und Dokumentation",
      items: [
        {
          id: "root_cause_analysis",
          title: "Ursachenanalyse durchgeführt",
          description: "Detaillierte Untersuchung der Entstehungsursachen",
          timeframe: "3-7 Tage",
          responsible: "IT/DSB",
          critical: false
        },
        {
          id: "incident_documented",
          title: "Vorfall vollständig dokumentiert",
          description: "Komplette Dokumentation für interne Aufzeichnungen",
          timeframe: "5-10 Tage",
          responsible: "DSB",
          critical: false
        },
        {
          id: "preventive_measures_identified",
          title: "Präventionsmaßnahmen identifiziert",
          description: "Maßnahmen zur Verhinderung ähnlicher Vorfälle definieren",
          timeframe: "7-14 Tage",
          responsible: "IT/DSB",
          critical: false
        },
        {
          id: "lessons_learned_documented",
          title: "Lessons Learned dokumentiert",
          description: "Erkenntnisse und Verbesserungen für Zukunft festhalten",
          timeframe: "14-21 Tage",
          responsible: "Management/DSB",
          critical: false
        }
      ]
    },
    {
      id: "followup",
      title: "Nachbereitung & Verbesserung (21+ Tage)",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50 dark:bg-green-950/20",
      borderColor: "border-green-200 dark:border-green-800",
      icon: CheckCircle,
      description: "Langfristige Maßnahmen und Prozessverbesserungen",
      items: [
        {
          id: "security_measures_implemented",
          title: "Sicherheitsmaßnahmen implementiert",
          description: "Identifizierte Verbesserungen umsetzen und testen",
          timeframe: "1-3 Monate",
          responsible: "IT",
          critical: false
        },
        {
          id: "procedures_updated",
          title: "Verfahren aktualisiert",
          description: "Incident Response Verfahren basierend auf Erkenntnissen überarbeiten",
          timeframe: "1-2 Monate",
          responsible: "DSB/Management",
          critical: false
        },
        {
          id: "training_conducted",
          title: "Schulungen durchgeführt",
          description: "Mitarbeiterschulungen zu neuen Verfahren und Erkenntnissen",
          timeframe: "2-3 Monate",
          responsible: "HR/DSB",
          critical: false
        },
        {
          id: "compliance_review",
          title: "Compliance-Review abgeschlossen",
          description: "Überprüfung der gesamten Datenschutz-Compliance",
          timeframe: "3-6 Monate",
          responsible: "DSB/Audit",
          critical: false
        }
      ]
    }
  ];
  const toggleItemExpansion = (itemId) => {
    setExpandedItems((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };
  const startSimulation = () => {
    setSimulationRunning(true);
    setElapsedTime(0);
  };
  const formatElapsedTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor(seconds % 3600 / 60);
    const remainingSeconds = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };
  const toggleItem = (itemId) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(itemId)) {
      newCompleted.delete(itemId);
    } else {
      newCompleted.add(itemId);
    }
    setCompletedItems(newCompleted);
  };
  const totalItems = timelinePhases.reduce((sum, phase) => sum + phase.items.length, 0);
  const completedCount = completedItems.size;
  const criticalItems = timelinePhases.flatMap((phase) => phase.items.filter((item) => item.critical));
  const completedCritical = criticalItems.filter((item) => completedItems.has(item.id)).length;
  const emergencyContacts = [
    { role: "IT-Notfall-Hotline", contact: "+49 XXX XXXX-111", available: "24/7" },
    { role: "Datenschutzbeauftragter", contact: "dsb@unternehmen.de", available: "Werktags 9-17h" },
    { role: "Geschäftsführung", contact: "+49 XXX XXXX-001", available: "24/7" },
    { role: "Rechtsabteilung", contact: "legal@unternehmen.de", available: "Werktags 9-18h" }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Breach Response Checklist – 72-Stunden DSGVO Notfallplan",
        description: "Notfall-Checkliste für Datenpannen: Schritt-für-Schritt in 72h. Meldepflichten, Kommunikation, Schadensbegrenzung. ✓ DSGVO-konform ✓ Sofort einsetzbar. Jetzt downloaden!",
        canonical: "/assessment-center/breach-response-checklist",
        keywords: "breach response checklist, datenpanne notfallplan, 72 stunden dsgvo, data breach response, notfallcheckliste"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950", children: [
      /* @__PURE__ */ jsxs("section", { className: "pt-24 pb-16 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10", children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-red-500/10 to-transparent rounded-full blur-3xl" }) }),
        /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6", children: [
            /* @__PURE__ */ jsx(Link, { to: "/resources", className: "hover:text-brand-red transition-colors", children: "Resources" }),
            /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: "Breach-Response-Checklist" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl shadow-lg", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-8 w-8 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx(Badge, { className: "bg-red-100 text-red-700 border-red-200 mb-3", children: "72h-Notfallplan" }),
              /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4", children: "Breach-Response-Checklist" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 mb-4", children: "Strukturierter 72-Stunden-Notfallplan bei Datenschutzverletzungen und Sicherheitsvorfällen" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-500", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-500 fill-current" }),
                  /* @__PURE__ */ jsx("span", { children: "4.9 (3.156 Downloads)" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: "Aktualisiert: Januar 2025" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Timer, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: "Kritische 72h-Timeline" })
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "pb-8", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(Card, { className: "mb-8 border-2 border-red-200 dark:border-red-800 bg-gradient-to-r from-red-50 via-orange-50 to-yellow-50 dark:from-red-950/20 dark:via-orange-950/20 dark:to-yellow-950/20", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Timer, { className: "h-6 w-6 text-red-600" }),
          "Incident-Timer & Meldepflicht"
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-red-600 mb-2", children: formatElapsedTime(elapsedTime) }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Vergangene Zeit" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-orange-600 mb-2", children: "72h" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Meldepflicht an Aufsichtsbehörde" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-yellow-600 mb-2", children: "ASAP" }),
              /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Information der Betroffenen" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-center gap-4", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                onClick: startSimulation,
                disabled: simulationRunning,
                className: "bg-red-600 hover:bg-red-700 text-white",
                children: simulationRunning ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(PauseCircle, { className: "mr-2 h-4 w-4" }),
                  "Incident läuft"
                ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(PlayCircle, { className: "mr-2 h-4 w-4" }),
                  "Incident-Simulation starten"
                ] })
              }
            ),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Simuliert einen echten Vorfall zur Übung" })
          ] })
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ jsx("section", { className: "pb-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
          /* @__PURE__ */ jsx(Card, { className: "border-2 border-red-200 dark:border-red-800", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-red-600 mb-2", children: [
              completedCritical,
              "/",
              criticalItems.length
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Kritische Schritte" })
          ] }) }),
          /* @__PURE__ */ jsx(Card, { className: "border-2 border-blue-200 dark:border-blue-800", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-blue-600 mb-2", children: [
              completedCount,
              "/",
              totalItems
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Gesamtfortschritt" })
          ] }) }),
          /* @__PURE__ */ jsx(Card, { className: "border-2 border-green-200 dark:border-green-800", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6 text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-green-600 mb-2", children: [
              Math.round(completedCount / totalItems * 100),
              "%"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Vollständigkeit" })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-8 border-2 border-orange-200 dark:border-orange-800", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 text-orange-700 dark:text-orange-300", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-6 w-6" }),
            "Notfall-Kontakte"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: emergencyContacts.map((contact, index) => /* @__PURE__ */ jsxs("div", { className: "p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-800", children: [
            /* @__PURE__ */ jsx("div", { className: "font-semibold text-gray-900 dark:text-white mb-1", children: contact.role }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-1", children: contact.contact }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-orange-600 dark:text-orange-400", children: contact.available })
          ] }, index)) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: () => setShowEmailForm(true),
            className: "bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
            children: [
              /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
              "Vollständige Checkliste als PDF herunterladen"
            ]
          }
        ) })
      ] }) }) }),
      /* @__PURE__ */ jsx("section", { className: "pb-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "space-y-8", children: timelinePhases.map((phase, phaseIndex) => /* @__PURE__ */ jsxs(Card, { className: cn("border-2", phase.borderColor), children: [
        /* @__PURE__ */ jsx(CardHeader, { className: cn("rounded-t-lg", phase.bgColor), children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: cn(
            "p-3 rounded-xl bg-gradient-to-r shadow-lg",
            phase.color
          ), children: /* @__PURE__ */ jsx(phase.icon, { className: "h-6 w-6 text-white" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-xl text-gray-900 dark:text-white", children: phase.title }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: phase.description })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-lg font-bold text-gray-900 dark:text-white", children: [
              phase.items.filter((item) => completedItems.has(item.id)).length,
              "/",
              phase.items.length
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "abgeschlossen" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: phase.items.map((item, itemIndex) => {
          var _a;
          return /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "p-4 rounded-xl border transition-all duration-200 hover:shadow-md",
                item.critical ? "bg-red-50 dark:bg-red-950/10 border-red-200 dark:border-red-800" : "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700",
                completedItems.has(item.id) ? "opacity-75" : ""
              ),
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    checked: completedItems.has(item.id),
                    onCheckedChange: () => toggleItem(item.id),
                    className: "mt-1"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-2", children: [
                    /* @__PURE__ */ jsx("h4", { className: cn(
                      "font-semibold text-gray-900 dark:text-white",
                      completedItems.has(item.id) ? "line-through" : ""
                    ), children: item.title }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 ml-4", children: [
                      item.critical && /* @__PURE__ */ jsx(Badge, { className: "bg-red-100 text-red-700 border-red-200 text-xs", children: "Kritisch" }),
                      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: item.timeframe })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-2", children: item.description }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs text-gray-500", children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsx(Users, { className: "h-3 w-3" }),
                        /* @__PURE__ */ jsxs("span", { children: [
                          "Verantwortlich: ",
                          item.responsible
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                        /* @__PURE__ */ jsx(Clock, { className: "h-3 w-3" }),
                        /* @__PURE__ */ jsx("span", { children: item.timeframe })
                      ] })
                    ] }),
                    item.tips && /* @__PURE__ */ jsx(
                      Button,
                      {
                        variant: "ghost",
                        size: "sm",
                        onClick: () => toggleItemExpansion(item.id),
                        className: "text-gray-500 hover:text-gray-700 h-6 w-6 p-0",
                        children: /* @__PURE__ */ jsx(Info, { className: "h-4 w-4" })
                      }
                    )
                  ] }),
                  expandedItems.has(item.id) && item.tips && /* @__PURE__ */ jsxs("div", { className: "mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg border border-gray-200 dark:border-gray-700 space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                        /* @__PURE__ */ jsx(Lightbulb, { className: "h-4 w-4 text-yellow-600" }),
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-sm text-gray-900 dark:text-white", children: "Umsetzungstipps" })
                      ] }),
                      /* @__PURE__ */ jsx("div", { className: "space-y-1", children: (_a = item.tips) == null ? void 0 : _a.map((tip, tipIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                        /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-yellow-500 rounded-full mt-2 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-600 dark:text-gray-400", children: tip })
                      ] }, tipIndex)) })
                    ] }),
                    item.legalBasis && /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                        /* @__PURE__ */ jsx(Gavel, { className: "h-4 w-4 text-blue-600" }),
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-sm text-gray-900 dark:text-white", children: "Rechtsgrundlage" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-blue-800 dark:text-blue-200 bg-blue-50 dark:bg-blue-950/20 p-2 rounded", children: item.legalBasis })
                    ] }),
                    item.consequences && /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                        /* @__PURE__ */ jsx(AlertCircle, { className: "h-4 w-4 text-red-600" }),
                        /* @__PURE__ */ jsx("h5", { className: "font-semibold text-sm text-gray-900 dark:text-white", children: "Konsequenzen bei Nicht-Beachtung" })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-xs text-red-800 dark:text-red-200 bg-red-50 dark:bg-red-950/20 p-2 rounded", children: item.consequences })
                    ] })
                  ] })
                ] })
              ] })
            },
            item.id
          );
        }) }) })
      ] }, phase.id)) }) }) }) }),
      showEmailForm && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxs(Card, { className: "max-w-lg w-full", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-brand-red" }),
          "Notfallplan herunterladen"
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: "Erhalten Sie die vollständige Breach-Response-Checkliste als PDF sowie Vorlagen für Meldungen und Kommunikation." }),
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
              /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Unternehmen (optional)" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: "w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent",
                  placeholder: "Ihr Unternehmen"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
              /* @__PURE__ */ jsx(Checkbox, { id: "privacy", className: "mt-1" }),
              /* @__PURE__ */ jsx("label", { htmlFor: "privacy", className: "text-xs text-gray-600 dark:text-gray-400", children: "Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu." })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  type: "submit",
                  className: "flex-1 bg-brand-red hover:bg-brand-red/90 text-white",
                  children: [
                    /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
                    "PDF herunterladen"
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
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx(Card, { className: "border-2 border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-950/20", children: /* @__PURE__ */ jsx(CardContent, { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
        /* @__PURE__ */ jsx(Scale, { className: "h-6 w-6 text-yellow-600 mt-1 flex-shrink-0" }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h3", { className: "font-bold text-yellow-800 dark:text-yellow-200 mb-2", children: "Rechtlicher Hinweis" }),
          /* @__PURE__ */ jsx("p", { className: "text-sm text-yellow-700 dark:text-yellow-300 mb-4", children: "Diese Checkliste dient als Orientierungshilfe und ersetzt keine individuelle Rechtsberatung. Die konkreten Meldepflichten und -fristen können je nach Einzelfall variieren. Konsultieren Sie bei einem tatsächlichen Vorfall umgehend Ihren Datenschutzbeauftragten oder Rechtsanwalt." }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
            /* @__PURE__ */ jsx(Link, { to: "/contact?source=breach-response", children: /* @__PURE__ */ jsxs(Button, { className: "bg-yellow-600 hover:bg-yellow-700 text-white", children: [
              /* @__PURE__ */ jsx(Shield, { className: "mr-2 h-4 w-4" }),
              "Notfall-Beratung anfordern"
            ] }) }),
            /* @__PURE__ */ jsx(Link, { to: "/resources", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "border-yellow-600 text-yellow-700 hover:bg-yellow-600 hover:text-white", children: [
              /* @__PURE__ */ jsx(FileText, { className: "mr-2 h-4 w-4" }),
              "Weitere Compliance-Tools"
            ] }) })
          ] })
        ] })
      ] }) }) }) }) }) })
    ] })
  ] });
};
export {
  BreachResponseChecklist
};
