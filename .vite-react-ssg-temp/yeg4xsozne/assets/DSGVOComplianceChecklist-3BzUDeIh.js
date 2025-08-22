import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { C as Checkbox } from "./checkbox-BNCkAJgi.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { FileText, Users, Shield, BarChart3, ChevronRight, CheckSquare, Star, Calendar, Download, Zap, AlertTriangle, Lightbulb, Timer, Scale, ChevronDown, Info, BookOpen, ExternalLink, Target, HelpCircle, CheckCircle, Mail, ArrowRight, Minus, XCircle } from "lucide-react";
import { c as cn } from "../main.mjs";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-checkbox";
import "@radix-ui/react-progress";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const DSGVOComplianceChecklist = () => {
  const [completedItems, setCompletedItems] = useState(/* @__PURE__ */ new Set());
  const [expandedSections, setExpandedSections] = useState(/* @__PURE__ */ new Set(["grundlagen"]));
  const [expandedItems, setExpandedItems] = useState(/* @__PURE__ */ new Set());
  const [showEmailForm, setShowEmailForm] = useState(false);
  const checklistSections = [
    {
      id: "grundlagen",
      title: "Grundlagen & Dokumentation",
      icon: FileText,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50 dark:bg-blue-950/20",
      description: "Fundamentale Dokumentationspflichten nach DSGVO",
      completionTip: "Diese Grundlagen sind die Basis für alle weiteren Compliance-Maßnahmen",
      items: [
        {
          id: "verarbeitungsverzeichnis",
          title: "Verzeichnis der Verarbeitungstätigkeiten erstellt",
          description: "Art. 30 DSGVO - Vollständige Dokumentation aller Datenverarbeitungen mit Zwecken, Kategorien und Rechtsgrundlagen",
          priority: "critical",
          category: "Dokumentation",
          effort: "Hoch (8-16h)",
          legalBasis: "Art. 30 DSGVO",
          penalty: "Bis zu 2% des Jahresumsatzes",
          tips: [
            "Verwenden Sie strukturierte Templates für konsistente Dokumentation",
            "Aktualisieren Sie das Verzeichnis mindestens halbjährlich",
            "Beziehen Sie alle Abteilungen in die Dokumentation ein"
          ],
          resources: [
            "Muster-Verzeichnis der Aufsichtsbehörden",
            "Branchenspezifische Vorlagen",
            "Automatisierte Erfassungstools"
          ]
        },
        {
          id: "datenschutzerklaerung",
          title: "Datenschutzerklärung aktualisiert und vollständig",
          description: "Art. 13, 14 DSGVO - Transparente, verständliche Information über alle Datenverarbeitungen",
          priority: "critical",
          category: "Information",
          effort: "Mittel (4-8h)",
          legalBasis: "Art. 13, 14 DSGVO",
          penalty: "Bis zu 4% des Jahresumsatzes",
          tips: [
            "Verwenden Sie einfache, verständliche Sprache",
            "Strukturieren Sie die Informationen logisch",
            "Aktualisieren Sie bei jeder Änderung der Datenverarbeitung"
          ],
          resources: [
            "Generator für Datenschutzerklärungen",
            "Rechtliche Musterformulierungen",
            "Branchenspezifische Beispiele"
          ]
        },
        {
          id: "rechtsgrundlagen",
          title: "Rechtsgrundlagen für jede Verarbeitung definiert",
          description: "Art. 6 DSGVO - Eindeutige rechtliche Basis für alle Datenverarbeitungen dokumentiert und nachweisbar",
          priority: "critical",
          category: "Rechtliches",
          effort: "Mittel (6-12h)",
          legalBasis: "Art. 6 DSGVO",
          penalty: "Bis zu 4% des Jahresumsatzes",
          tips: [
            "Prüfen Sie die Angemessenheit der gewählten Rechtsgrundlage",
            "Dokumentieren Sie die Interessenabwägung bei Art. 6 (1) f",
            "Berücksichtigen Sie die Widerrufsmöglichkeit bei Einwilligungen"
          ],
          resources: [
            "Entscheidungsbaum für Rechtsgrundlagen",
            "Muster-Interessenabwägung",
            "Einwilligungsvorlagen"
          ]
        },
        {
          id: "auftragsverarbeitung",
          title: "Auftragsverarbeitungsverträge abgeschlossen",
          description: "Art. 28 DSGVO - Rechtskonforme Verträge mit allen Dienstleistern, die personenbezogene Daten verarbeiten",
          priority: "high",
          category: "Verträge",
          effort: "Hoch (pro Vertrag 2-4h)",
          legalBasis: "Art. 28 DSGVO",
          penalty: "Bis zu 4% des Jahresumsatzes",
          tips: [
            "Führen Sie ein Verzeichnis aller Auftragsverarbeiter",
            "Prüfen Sie die TOM der Dienstleister regelmäßig",
            "Regeln Sie Unterauftragsverarbeitung explizit"
          ],
          resources: [
            "Muster-AVV der Aufsichtsbehörden",
            "Checkliste für Dienstleister-Prüfung",
            "Vertragsmanagement-Tools"
          ]
        },
        {
          id: "loeschkonzept",
          title: "Löschkonzept implementiert",
          description: "Art. 17 DSGVO - Systematische, automatisierte Löschung nicht mehr benötigter personenbezogener Daten",
          priority: "high",
          category: "Datenmanagement",
          effort: "Hoch (12-20h)",
          legalBasis: "Art. 17 DSGVO",
          penalty: "Bis zu 4% des Jahresumsatzes",
          tips: [
            "Definieren Sie klare Aufbewahrungsfristen für jede Datenkategorie",
            "Implementieren Sie automatisierte Löschprozesse",
            "Dokumentieren Sie alle Löschvorgänge audit-sicher"
          ],
          resources: [
            "Aufbewahrungsfristen-Tabelle",
            "Automatisierte Löschtools",
            "Löschprotokoll-Vorlagen"
          ]
        },
        {
          id: "datenschutzfolgen",
          title: "Datenschutz-Folgenabschätzung (DSFA) bei Hochrisiko-Verarbeitungen",
          description: "Art. 35 DSGVO - Systematische Bewertung von Verarbeitungen mit hohem Risiko für Betroffene",
          priority: "high",
          category: "Bewertung",
          effort: "Hoch (8-16h pro DSFA)",
          legalBasis: "Art. 35 DSGVO",
          penalty: "Bis zu 4% des Jahresumsatzes",
          tips: [
            "Nutzen Sie die Liste der Aufsichtsbehörden für Hochrisiko-Verarbeitungen",
            "Beziehen Sie den Datenschutzbeauftragten ein",
            "Dokumentieren Sie Abhilfemaßnahmen"
          ],
          resources: [
            "DSFA-Vorlagen der Aufsichtsbehörden",
            "Risikobewertungs-Tools",
            "Branchenspezifische DSFA-Beispiele"
          ]
        }
      ]
    },
    {
      id: "betroffenenrechte",
      title: "Betroffenenrechte",
      icon: Users,
      color: "from-green-500 to-teal-500",
      items: [
        {
          id: "auskunftsrecht",
          title: "Prozess für Auskunftsersuchen etabliert",
          description: "Art. 15 DSGVO - Systematische Bearbeitung von Auskunftsanfragen",
          priority: "critical",
          category: "Betroffenenrechte"
        },
        {
          id: "berichtigung",
          title: "Berichtigungsverfahren implementiert",
          description: "Art. 16 DSGVO - Korrektur fehlerhafter personenbezogener Daten",
          priority: "high",
          category: "Betroffenenrechte"
        },
        {
          id: "loeschung",
          title: "Löschungsverfahren etabliert",
          description: 'Art. 17 DSGVO - "Recht auf Vergessenwerden" umgesetzt',
          priority: "critical",
          category: "Betroffenenrechte"
        },
        {
          id: "datenportabilitaet",
          title: "Datenportabilität ermöglicht",
          description: "Art. 20 DSGVO - Export personenbezogener Daten in strukturiertem Format",
          priority: "medium",
          category: "Betroffenenrechte"
        },
        {
          id: "widerspruch",
          title: "Widerspruchsrecht implementiert",
          description: "Art. 21 DSGVO - Möglichkeit zum Widerspruch gegen Verarbeitung",
          priority: "high",
          category: "Betroffenenrechte"
        }
      ]
    },
    {
      id: "sicherheit",
      title: "Technische & Organisatorische Maßnahmen",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
      items: [
        {
          id: "verschluesselung",
          title: "Verschlüsselung implementiert",
          description: "Art. 32 DSGVO - Verschlüsselung bei Übertragung und Speicherung",
          priority: "critical",
          category: "Technisch"
        },
        {
          id: "zugriffskontrolle",
          title: "Zugriffskontrolle etabliert",
          description: "Art. 32 DSGVO - Beschränkung des Zugriffs auf autorisierte Personen",
          priority: "critical",
          category: "Technisch"
        },
        {
          id: "backups",
          title: "Backup- und Recovery-Verfahren implementiert",
          description: "Art. 32 DSGVO - Wiederherstellbarkeit personenbezogener Daten",
          priority: "high",
          category: "Technisch"
        },
        {
          id: "protokollierung",
          title: "Logging und Monitoring aktiv",
          description: "Art. 32 DSGVO - Überwachung und Protokollierung von Datenverarbeitungen",
          priority: "high",
          category: "Technisch"
        },
        {
          id: "incident_response",
          title: "Incident Response Plan erstellt",
          description: "Art. 33, 34 DSGVO - Verfahren bei Datenschutzverletzungen",
          priority: "critical",
          category: "Organisatorisch"
        }
      ]
    },
    {
      id: "governance",
      title: "Datenschutz-Governance",
      icon: BarChart3,
      color: "from-orange-500 to-red-500",
      items: [
        {
          id: "dsb_benannt",
          title: "Datenschutzbeauftragter benannt (falls erforderlich)",
          description: "Art. 37 DSGVO - Bestellung und Aufgaben des Datenschutzbeauftragten",
          priority: "critical",
          category: "Personal"
        },
        {
          id: "schulungen",
          title: "Mitarbeiterschulungen durchgeführt",
          description: "Art. 32 DSGVO - Sensibilisierung und Weiterbildung der Mitarbeiter",
          priority: "high",
          category: "Personal"
        },
        {
          id: "richtlinien",
          title: "Datenschutzrichtlinien erstellt",
          description: "Interne Regelungen und Verfahrensanweisungen",
          priority: "high",
          category: "Organisatorisch"
        },
        {
          id: "dsfa_prozess",
          title: "DSFA-Prozess etabliert",
          description: "Art. 35 DSGVO - Datenschutz-Folgenabschätzung bei Hochrisiko-Verarbeitungen",
          priority: "medium",
          category: "Prozesse"
        }
      ]
    }
  ];
  const toggleItem = (itemId) => {
    const newCompleted = new Set(completedItems);
    if (newCompleted.has(itemId)) {
      newCompleted.delete(itemId);
    } else {
      newCompleted.add(itemId);
    }
    setCompletedItems(newCompleted);
  };
  const toggleSection = (sectionId) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(sectionId)) {
      newExpanded.delete(sectionId);
    } else {
      newExpanded.add(sectionId);
    }
    setExpandedSections(newExpanded);
  };
  const toggleItemDetails = (itemId) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId);
    } else {
      newExpanded.add(itemId);
    }
    setExpandedItems(newExpanded);
  };
  const totalItems = checklistSections.reduce((sum, section) => sum + section.items.length, 0);
  const completedCount = completedItems.size;
  const progressPercentage = completedCount / totalItems * 100;
  const getPriorityIcon = (priority) => {
    switch (priority) {
      case "critical":
        return /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4 text-red-500" });
      case "high":
        return /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-orange-500" });
      case "medium":
        return /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4 text-yellow-500" });
      default:
        return /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 text-gray-500" });
    }
  };
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "critical":
        return "bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800";
      case "high":
        return "bg-orange-50 dark:bg-orange-950/20 border-orange-200 dark:border-orange-800";
      case "medium":
        return "bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-800";
      default:
        return "bg-gray-50 dark:bg-gray-950/20 border-gray-200 dark:border-gray-800";
    }
  };
  const getComplianceLevel = () => {
    if (progressPercentage >= 90) return { level: "Exzellent", color: "text-green-600", icon: CheckCircle };
    if (progressPercentage >= 70) return { level: "Gut", color: "text-orange-500", icon: CheckCircle };
    if (progressPercentage >= 50) return { level: "Ausreichend", color: "text-yellow-500", icon: Minus };
    return { level: "Mangelhaft", color: "text-red-500", icon: XCircle };
  };
  const complianceLevel = getComplianceLevel();
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950", children: [
    /* @__PURE__ */ jsxs("section", { className: "pt-24 pb-16 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10", children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-transparent rounded-full blur-3xl" }) }),
      /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6", children: [
          /* @__PURE__ */ jsx(Link, { to: "/resources", className: "hover:text-brand-red transition-colors", children: "Resources" }),
          /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { children: "DSGVO-Compliance-Checkliste" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
          /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl shadow-lg", children: /* @__PURE__ */ jsx(CheckSquare, { className: "h-8 w-8 text-white" }) }),
          /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsx(Badge, { className: "bg-blue-100 text-blue-700 border-blue-200 mb-3", children: "47-Punkte Selbstaudit" }),
            /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4", children: "DSGVO-Compliance-Checkliste 2025" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 mb-4", children: "Systematische Überprüfung aller DSGVO-Anforderungen für vollständige Compliance" }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-500", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-500 fill-current" }),
                /* @__PURE__ */ jsx("span", { children: "4.9 (2.847 Downloads)" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
                /* @__PURE__ */ jsx("span", { children: "Aktualisiert: Januar 2025" })
              ] })
            ] })
          ] })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "pb-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(Card, { className: "mb-8 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-blue-950/20 dark:via-gray-900 dark:to-cyan-950/20", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-blue-600" }),
        "Ihr DSGVO-Compliance-Status"
      ] }) }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-4xl font-bold text-blue-600 mb-2", children: [
              completedCount,
              /* @__PURE__ */ jsxs("span", { className: "text-2xl text-gray-400", children: [
                "/",
                totalItems
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Punkte abgehakt" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: cn("text-4xl font-bold mb-2", complianceLevel.color), children: [
              Math.round(progressPercentage),
              "%"
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Compliance-Grad" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxs("div", { className: cn("flex items-center justify-center gap-2 text-xl font-bold mb-2", complianceLevel.color), children: [
              /* @__PURE__ */ jsx(complianceLevel.icon, { className: "h-6 w-6" }),
              complianceLevel.level
            ] }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Bewertung" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-green-600 mb-2", children: checklistSections.reduce(
              (sum, section) => sum + section.items.filter((item) => item.priority === "critical" && completedItems.has(item.id)).length,
              0
            ) }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Kritische erledigt" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4 mb-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Gesamtfortschritt" }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold text-blue-600", children: [
              Math.round(progressPercentage),
              "%"
            ] })
          ] }),
          /* @__PURE__ */ jsx(Progress, { value: progressPercentage, className: "h-4" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 items-center justify-center", children: [
          /* @__PURE__ */ jsxs(
            Button,
            {
              onClick: () => setShowEmailForm(true),
              className: "bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
              size: "lg",
              children: [
                /* @__PURE__ */ jsx(Download, { className: "mr-2 h-5 w-5" }),
                "PDF-Checkliste herunterladen"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              variant: "outline",
              size: "lg",
              className: "border-2 border-blue-200 text-blue-700 hover:bg-blue-50 dark:border-blue-800 dark:text-blue-300",
              children: [
                /* @__PURE__ */ jsx(Zap, { className: "mr-2 h-5 w-5" }),
                "Express-Audit buchen"
              ]
            }
          )
        ] })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsxs(Card, { className: "mb-8 border-2 border-red-200 dark:border-red-800 bg-gradient-to-br from-red-50 via-white to-orange-50 dark:from-red-950/20 dark:via-gray-900 dark:to-orange-950/20", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-red-600" }),
        "Risikoanalyse & Priorisierung"
      ] }) }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-red-600 mb-2", children: checklistSections.reduce(
              (sum, section) => sum + section.items.filter((item) => item.priority === "critical" && !completedItems.has(item.id)).length,
              0
            ) }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-2", children: "Kritische Punkte offen" }),
            /* @__PURE__ */ jsx(Badge, { variant: "destructive", className: "text-xs", children: "Sofortiger Handlungsbedarf" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-orange-600 mb-2", children: checklistSections.reduce(
              (sum, section) => sum + section.items.filter((item) => item.priority === "high" && !completedItems.has(item.id)).length,
              0
            ) }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-2", children: "Hohe Priorität offen" }),
            /* @__PURE__ */ jsx(Badge, { className: "bg-orange-100 text-orange-700 border-orange-200 text-xs", children: "Zeitnah umsetzen" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-purple-600 mb-2", children: "4%" }),
            /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400 mb-2", children: "Max. Bußgeld-Potenzial" }),
            /* @__PURE__ */ jsx(Badge, { className: "bg-purple-100 text-purple-700 border-purple-200 text-xs", children: "Des Jahresumsatzes" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 dark:text-white mb-4", children: "Fortschritt nach Bereichen" }),
          checklistSections.map((section) => {
            const sectionCompleted = section.items.filter((item) => completedItems.has(item.id)).length;
            const sectionTotal = section.items.length;
            const sectionProgress = sectionCompleted / sectionTotal * 100;
            return /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(section.icon, { className: "h-4 w-4 text-gray-600" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: section.title })
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold text-gray-600", children: [
                  sectionCompleted,
                  "/",
                  sectionTotal
                ] })
              ] }),
              /* @__PURE__ */ jsx(Progress, { value: sectionProgress, className: "h-2" })
            ] }, section.id);
          })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-8 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-600 mt-0.5" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 dark:text-white mb-2", children: "Nächste Schritte" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mb-3", children: "Beginnen Sie mit den kritischen Punkten. Diese haben das höchste Bußgeldrisiko und sollten prioritär bearbeitet werden." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2", children: [
              /* @__PURE__ */ jsxs(Button, { size: "sm", className: "bg-red-600 hover:bg-red-700 text-white", children: [
                /* @__PURE__ */ jsx(Timer, { className: "h-4 w-4 mr-2" }),
                "Kritische zuerst"
              ] }),
              /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", children: [
                /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4 mr-2" }),
                "Rechtliche Beratung"
              ] })
            ] })
          ] })
        ] }) })
      ] })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "pb-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsx("div", { className: "max-w-4xl mx-auto", children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: checklistSections.map((section, sectionIndex) => /* @__PURE__ */ jsxs(Card, { className: "border-2 border-gray-200 dark:border-gray-700", children: [
      /* @__PURE__ */ jsx(
        CardHeader,
        {
          className: "cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors",
          onClick: () => toggleSection(section.id),
          children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                section.color
              ), children: /* @__PURE__ */ jsx(section.icon, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: section.title }),
                /* @__PURE__ */ jsxs("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: [
                  section.items.filter((item) => completedItems.has(item.id)).length,
                  " von ",
                  section.items.length,
                  " abgeschlossen"
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                Progress,
                {
                  value: section.items.filter((item) => completedItems.has(item.id)).length / section.items.length * 100,
                  className: "w-20 h-2"
                }
              ),
              expandedSections.has(section.id) ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-5 w-5 text-gray-500" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-5 w-5 text-gray-500" })
            ] })
          ] })
        }
      ),
      expandedSections.has(section.id) && /* @__PURE__ */ jsx(CardContent, { className: "pt-0", children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: section.items.map((item, itemIndex) => {
        var _a, _b;
        return /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "rounded-xl border-2 transition-all duration-300 hover:shadow-lg",
              getPriorityColor(item.priority),
              completedItems.has(item.id) ? "opacity-75" : "",
              expandedItems.has(item.id) ? "ring-2 ring-blue-200 dark:ring-blue-800" : ""
            ),
            children: [
              /* @__PURE__ */ jsx("div", { className: "p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
                /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    checked: completedItems.has(item.id),
                    onCheckedChange: () => toggleItem(item.id),
                    className: "mt-1.5"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-3", children: [
                    /* @__PURE__ */ jsx("h4", { className: cn(
                      "text-lg font-bold text-gray-900 dark:text-white leading-tight",
                      completedItems.has(item.id) ? "line-through" : ""
                    ), children: item.title }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 ml-4", children: [
                      getPriorityIcon(item.priority),
                      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: item.category })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-4 leading-relaxed", children: item.description }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4 mb-4", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-sm text-gray-500", children: [
                      /* @__PURE__ */ jsx(Scale, { className: "h-4 w-4" }),
                      /* @__PURE__ */ jsx("span", { children: item.legalBasis })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-sm text-gray-500", children: [
                      /* @__PURE__ */ jsx(Timer, { className: "h-4 w-4" }),
                      /* @__PURE__ */ jsx("span", { children: item.effort })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-sm text-red-600", children: [
                      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-4 w-4" }),
                      /* @__PURE__ */ jsx("span", { children: item.penalty })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs(
                    Button,
                    {
                      variant: "outline",
                      size: "sm",
                      onClick: () => toggleItemDetails(item.id),
                      className: "mb-4",
                      children: [
                        /* @__PURE__ */ jsx(Info, { className: "h-4 w-4 mr-2" }),
                        expandedItems.has(item.id) ? "Weniger Details" : "Mehr Details & Tipps",
                        expandedItems.has(item.id) ? /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 ml-2" }) : /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4 ml-2" })
                      ]
                    }
                  )
                ] })
              ] }) }),
              expandedItems.has(item.id) && /* @__PURE__ */ jsxs("div", { className: "border-t bg-gray-50 dark:bg-gray-800/50 p-6 space-y-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-600" }),
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 dark:text-white", children: "Umsetzungstipps" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "space-y-2", children: (_a = item.tips) == null ? void 0 : _a.map((tip, tipIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: tip })
                  ] }, tipIndex)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
                    /* @__PURE__ */ jsx(BookOpen, { className: "h-5 w-5 text-blue-600" }),
                    /* @__PURE__ */ jsx("h5", { className: "font-semibold text-gray-900 dark:text-white", children: "Hilfreiche Ressourcen" })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: (_b = item.resources) == null ? void 0 : _b.map((resource, resourceIndex) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded-lg border", children: [
                    /* @__PURE__ */ jsx(ExternalLink, { className: "h-4 w-4 text-blue-500 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm text-gray-700 dark:text-gray-300", children: resource })
                  ] }, resourceIndex)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 pt-4 border-t", children: [
                  /* @__PURE__ */ jsxs(Button, { size: "sm", className: "bg-blue-600 hover:bg-blue-700 text-white", children: [
                    /* @__PURE__ */ jsx(Target, { className: "h-4 w-4 mr-2" }),
                    "Template herunterladen"
                  ] }),
                  /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", children: [
                    /* @__PURE__ */ jsx(HelpCircle, { className: "h-4 w-4 mr-2" }),
                    "Beratung anfragen"
                  ] }),
                  completedItems.has(item.id) && /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", className: "text-green-600 border-green-200", children: [
                    /* @__PURE__ */ jsx(CheckCircle, { className: "h-4 w-4 mr-2" }),
                    "Erledigt"
                  ] })
                ] })
              ] })
            ]
          },
          item.id
        );
      }) }) })
    ] }, section.id)) }) }) }) }),
    showEmailForm && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxs(Card, { className: "max-w-lg w-full", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-brand-red" }),
        "PDF-Download"
      ] }) }),
      /* @__PURE__ */ jsxs(CardContent, { children: [
        /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: "Erhalten Sie die vollständige 47-Punkte DSGVO-Checkliste als PDF sowie exklusive Compliance-Updates direkt in Ihr Postfach." }),
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
            /* @__PURE__ */ jsx("label", { htmlFor: "privacy", className: "text-xs text-gray-600 dark:text-gray-400", children: "Ich stimme der Verarbeitung meiner Daten gemäß der Datenschutzerklärung zu. Ich kann der Nutzung jederzeit widersprechen." })
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
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-4", children: "Benötigen Sie Unterstützung bei der Umsetzung?" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 dark:text-gray-300 mb-8", children: "Unsere DSGVO-Experten helfen Ihnen bei der vollständigen Implementierung aller Compliance-Anforderungen." }),
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsx(Link, { to: "/contact?source=checklist", children: /* @__PURE__ */ jsxs(
          Button,
          {
            size: "lg",
            className: "bg-brand-red hover:bg-brand-red/90 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group",
            children: [
              /* @__PURE__ */ jsx(Users, { className: "mr-2 h-5 w-5" }),
              "Kostenlose Beratung buchen",
              /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx(Link, { to: "/resources", children: /* @__PURE__ */ jsxs(
          Button,
          {
            variant: "outline",
            size: "lg",
            className: "border-2 border-gray-300 dark:border-gray-600 hover:border-brand-red hover:text-brand-red transition-all duration-300",
            children: [
              /* @__PURE__ */ jsx(CheckSquare, { className: "mr-2 h-5 w-5" }),
              "Weitere Checklisten"
            ]
          }
        ) })
      ] })
    ] }) }) })
  ] });
};
export {
  DSGVOComplianceChecklist
};
