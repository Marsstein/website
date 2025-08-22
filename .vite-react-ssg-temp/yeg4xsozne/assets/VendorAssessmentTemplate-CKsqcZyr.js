import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "react-router-dom";
import { B as Button } from "./button-BRnNKcuh.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { I as Input } from "./input-6XZgwDxx.js";
import { C as Checkbox } from "./checkbox-BNCkAJgi.js";
import { R as RadioGroup, a as RadioGroupItem } from "./radio-group-DlgdBxCs.js";
import { L as Label } from "./label-CtFE5ecu.js";
import { ChevronRight, Users, Star, Calendar, BarChart3, Building, Plus, Eye, Trash2, Activity, Lightbulb, Server, Shield, Scale, Download, Mail, AlertTriangle, ArrowRight, FileText, CheckCircle, XCircle } from "lucide-react";
import { c as cn } from "../main.mjs";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "@radix-ui/react-checkbox";
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
const VendorAssessmentTemplate = () => {
  var _a, _b;
  const [vendors, setVendors] = useState([
    { id: "1", name: "", category: "", riskLevel: "" }
  ]);
  const [currentVendor, setCurrentVendor] = useState(0);
  const [assessmentData, setAssessmentData] = useState({});
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [completedVendors, setCompletedVendors] = useState(/* @__PURE__ */ new Set());
  const [assessmentStep, setAssessmentStep] = useState("overview");
  const assessmentCategories = [
    {
      id: "basic_info",
      title: "Grundlegende Informationen",
      icon: Building,
      color: "from-blue-500 to-cyan-500",
      description: "Allgemeine Angaben zum Dienstleister",
      criteria: [
        {
          id: "company_name",
          title: "Vollständiger Firmenname",
          type: "text",
          required: true,
          description: "Rechtlicher Name des Unternehmens"
        },
        {
          id: "business_address",
          title: "Geschäftsadresse",
          type: "text",
          required: true,
          description: "Vollständige Geschäftsadresse"
        },
        {
          id: "contact_person",
          title: "Datenschutz-Ansprechpartner",
          type: "text",
          required: true,
          description: "Name und Kontaktdaten des Datenschutzverantwortlichen"
        },
        {
          id: "service_description",
          title: "Beschreibung der Dienstleistung",
          type: "textarea",
          required: true,
          description: "Detaillierte Beschreibung der erbrachten Services"
        }
      ]
    },
    {
      id: "data_processing",
      title: "Datenverarbeitung",
      icon: Server,
      color: "from-green-500 to-teal-500",
      description: "Art und Umfang der Datenverarbeitung",
      criteria: [
        {
          id: "data_categories",
          title: "Kategorien personenbezogener Daten",
          type: "multiselect",
          required: true,
          options: [
            "Stammdaten (Name, Adresse)",
            "Kontaktdaten (E-Mail, Telefon)",
            "Beschäftigtendaten",
            "Vertragsdaten",
            "Zahlungsdaten",
            "Protokolldaten",
            "Besondere Kategorien (Art. 9 DSGVO)"
          ],
          description: "Welche Arten personenbezogener Daten werden verarbeitet?"
        },
        {
          id: "processing_purposes",
          title: "Zwecke der Verarbeitung",
          type: "multiselect",
          required: true,
          options: [
            "Vertragserfüllung",
            "Kundenbetreuung",
            "Marketing/Werbung",
            "Analyse/Statistik",
            "IT-Services",
            "Buchhaltung",
            "Personalverwaltung"
          ],
          description: "Für welche Zwecke werden die Daten verarbeitet?"
        },
        {
          id: "data_subjects",
          title: "Betroffene Personengruppen",
          type: "multiselect",
          required: true,
          options: [
            "Kunden",
            "Interessenten",
            "Beschäftigte",
            "Geschäftspartner",
            "Website-Besucher",
            "Sonstige"
          ],
          description: "Welche Personengruppen sind betroffen?"
        },
        {
          id: "data_volume",
          title: "Ungefährer Datenumfang",
          type: "radio",
          required: true,
          options: [
            { value: "low", label: "Gering (< 1.000 Datensätze)", points: 1 },
            { value: "medium", label: "Mittel (1.000 - 10.000)", points: 2 },
            { value: "high", label: "Hoch (10.000 - 100.000)", points: 3 },
            { value: "very_high", label: "Sehr hoch (> 100.000)", points: 4 }
          ],
          description: "Wie viele Datensätze werden etwa verarbeitet?"
        }
      ]
    },
    {
      id: "security_measures",
      title: "Sicherheitsmaßnahmen",
      icon: Shield,
      color: "from-purple-500 to-pink-500",
      description: "Technische und organisatorische Maßnahmen",
      criteria: [
        {
          id: "encryption",
          title: "Verschlüsselung",
          type: "radio",
          required: true,
          options: [
            { value: "none", label: "Keine Verschlüsselung", points: 0 },
            { value: "basic", label: "Basis-Verschlüsselung", points: 2 },
            { value: "advanced", label: "Erweiterte Verschlüsselung", points: 3 },
            { value: "end_to_end", label: "Ende-zu-Ende-Verschlüsselung", points: 4 }
          ],
          description: "Welche Verschlüsselungsverfahren werden eingesetzt?"
        },
        {
          id: "access_controls",
          title: "Zugriffskontrolle",
          type: "radio",
          required: true,
          options: [
            { value: "basic", label: "Einfache Passwörter", points: 1 },
            { value: "mfa", label: "Mehrfaktor-Authentifizierung", points: 3 },
            { value: "rbac", label: "Rollenbasierte Zugriffskontrolle", points: 4 },
            { value: "zero_trust", label: "Zero-Trust-Architektur", points: 5 }
          ],
          description: "Wie ist die Zugriffskontrolle implementiert?"
        },
        {
          id: "certifications",
          title: "Zertifizierungen",
          type: "multiselect",
          required: false,
          options: [
            "ISO 27001",
            "SOC 2",
            "BSI IT-Grundschutz",
            "Cloud Security Alliance",
            "TISAX",
            "Andere"
          ],
          description: "Welche Sicherheitszertifizierungen besitzt der Anbieter?"
        },
        {
          id: "incident_response",
          title: "Incident Response Verfahren",
          type: "radio",
          required: true,
          options: [
            { value: "none", label: "Keine dokumentierten Verfahren", points: 0 },
            { value: "basic", label: "Grundlegende Verfahren", points: 2 },
            { value: "documented", label: "Dokumentierte Verfahren", points: 3 },
            { value: "tested", label: "Getestete und zertifizierte Verfahren", points: 4 }
          ],
          description: "Wie ist das Incident Response Management aufgestellt?"
        }
      ]
    },
    {
      id: "compliance",
      title: "Compliance & Rechtliches",
      icon: Scale,
      color: "from-orange-500 to-red-500",
      description: "Rechtliche Aspekte und Compliance-Status",
      criteria: [
        {
          id: "gdpr_compliance",
          title: "DSGVO-Konformität",
          type: "radio",
          required: true,
          options: [
            { value: "unknown", label: "Unbekannt/Keine Angaben", points: 0 },
            { value: "claimed", label: "Wird behauptet", points: 1 },
            { value: "documented", label: "Dokumentiert nachgewiesen", points: 3 },
            { value: "certified", label: "Extern zertifiziert", points: 4 }
          ],
          description: "Wie ist der DSGVO-Compliance-Status?"
        },
        {
          id: "dpa_signed",
          title: "Auftragsverarbeitungsvertrag (AVV)",
          type: "radio",
          required: true,
          options: [
            { value: "no", label: "Nicht vorhanden", points: 0 },
            { value: "template", label: "Standard-Template", points: 2 },
            { value: "customized", label: "Individuell angepasst", points: 3 },
            { value: "legal_reviewed", label: "Rechtlich geprüft", points: 4 }
          ],
          description: "Status des Auftragsverarbeitungsvertrags?"
        },
        {
          id: "data_location",
          title: "Datenverarbeitungsort",
          type: "radio",
          required: true,
          options: [
            { value: "unknown", label: "Unbekannt", points: 0 },
            { value: "eu", label: "EU/EWR", points: 4 },
            { value: "adequate", label: "Angemessenheitsbeschluss", points: 3 },
            { value: "safeguards", label: "Mit geeigneten Garantien", points: 2 },
            { value: "third_country", label: "Drittland ohne Schutz", points: 0 }
          ],
          description: "Wo werden die Daten verarbeitet?"
        },
        {
          id: "subprocessors",
          title: "Unterauftragsverarbeiter",
          type: "radio",
          required: true,
          options: [
            { value: "none", label: "Keine Unterauftragsverarbeiter", points: 4 },
            { value: "documented", label: "Vollständig dokumentiert", points: 3 },
            { value: "partially", label: "Teilweise dokumentiert", points: 1 },
            { value: "unknown", label: "Unbekannt", points: 0 }
          ],
          description: "Wie ist der Umgang mit Unterauftragsverarbeitern?"
        }
      ]
    }
  ];
  const addVendor = () => {
    const newId = (vendors.length + 1).toString();
    setVendors([...vendors, { id: newId, name: "", category: "", riskLevel: "" }]);
  };
  const removeVendor = (index) => {
    if (vendors.length > 1) {
      const newVendors = vendors.filter((_, i) => i !== index);
      setVendors(newVendors);
      if (currentVendor >= newVendors.length) {
        setCurrentVendor(newVendors.length - 1);
      }
    }
  };
  const updateVendor = (index, field, value) => {
    const newVendors = [...vendors];
    newVendors[index] = { ...newVendors[index], [field]: value };
    setVendors(newVendors);
  };
  const updateAssessmentData = (criteriaId, value) => {
    const vendorId = vendors[currentVendor].id;
    setAssessmentData((prev) => ({
      ...prev,
      [vendorId]: {
        ...prev[vendorId],
        [criteriaId]: value
      }
    }));
  };
  const calculateRiskScore = (vendorId) => {
    const data = assessmentData[vendorId] || {};
    let totalPoints = 0;
    let maxPoints = 0;
    assessmentCategories.forEach((category) => {
      category.criteria.forEach((criteria) => {
        if (criteria.type === "radio" && criteria.options) {
          const value = data[criteria.id];
          const option = criteria.options.find((opt) => opt.value === value);
          if (option) {
            totalPoints += option.points;
          }
          maxPoints += Math.max(...criteria.options.map((opt) => opt.points));
        }
      });
    });
    return maxPoints > 0 ? totalPoints / maxPoints * 100 : 0;
  };
  const getRiskLevel = (score) => {
    if (score >= 80) return { level: "Niedrig", color: "text-green-600", bgColor: "bg-green-50", icon: CheckCircle };
    if (score >= 60) return { level: "Mittel", color: "text-yellow-600", bgColor: "bg-yellow-50", icon: AlertTriangle };
    if (score >= 40) return { level: "Hoch", color: "text-orange-600", bgColor: "bg-orange-50", icon: AlertTriangle };
    return { level: "Sehr Hoch", color: "text-red-600", bgColor: "bg-red-50", icon: XCircle };
  };
  const currentVendorData = assessmentData[(_a = vendors[currentVendor]) == null ? void 0 : _a.id] || {};
  const riskScore = calculateRiskScore((_b = vendors[currentVendor]) == null ? void 0 : _b.id);
  const riskLevel = getRiskLevel(riskScore);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "Vendor Assessment Template – Lieferanten DSGVO-Bewertung",
        description: "Strukturierte Lieferanten-Bewertung: Datenschutz, IT-Sicherheit, Compliance systematisch prüfen. ✓ Bewertungsmatrix ✓ Risiko-Scoring ✓ Vorlagen. Jetzt Partner bewerten!",
        canonical: "/assessment-center/vendor-assessment-template",
        keywords: "vendor assessment template, lieferantenbewertung dsgvo, auftragsverarbeiter bewertung, supplier assessment"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950", children: [
      /* @__PURE__ */ jsxs("section", { className: "pt-24 pb-16 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 -z-10", children: /* @__PURE__ */ jsx("div", { className: "absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-indigo-500/10 to-transparent rounded-full blur-3xl" }) }),
        /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-6", children: [
            /* @__PURE__ */ jsx(Link, { to: "/resources", className: "hover:text-brand-red transition-colors", children: "Resources" }),
            /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" }),
            /* @__PURE__ */ jsx("span", { children: "Vendor-Assessment-Template" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4 mb-6", children: [
            /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl shadow-lg", children: /* @__PURE__ */ jsx(Users, { className: "h-8 w-8 text-white" }) }),
            /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsx(Badge, { className: "bg-indigo-100 text-indigo-700 border-indigo-200 mb-3", children: "Systematische Dienstleister-Bewertung" }),
              /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4", children: "Vendor-Assessment-Template" }),
              /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-600 dark:text-gray-300 mb-4", children: "Strukturierte Bewertung und Auswahl DSGVO-konformer Auftragsverarbeiter und Dienstleister" }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-sm text-gray-500", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 text-yellow-500 fill-current" }),
                  /* @__PURE__ */ jsx("span", { children: "4.8 (1.678 Downloads)" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: "Aktualisiert: Januar 2025" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                  /* @__PURE__ */ jsx(BarChart3, { className: "h-4 w-4" }),
                  /* @__PURE__ */ jsx("span", { children: "Automatische Risikobewertung" })
                ] })
              ] })
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "pb-16", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs(Card, { className: "mb-8 border-2 border-indigo-200 dark:border-indigo-800", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(Building, { className: "h-6 w-6 text-indigo-600" }),
              "Dienstleister verwalten"
            ] }),
            /* @__PURE__ */ jsxs(
              Button,
              {
                onClick: addVendor,
                className: "bg-gradient-to-r from-indigo-500 to-blue-500 text-white",
                size: "sm",
                children: [
                  /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
                  "Hinzufügen"
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-4", children: vendors.map((vendor, index) => /* @__PURE__ */ jsx("div", { className: cn(
            "p-4 rounded-lg border-2 transition-all duration-200",
            currentVendor === index ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/20" : "border-gray-200 dark:border-gray-700 hover:border-indigo-300"
          ), children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex-1 grid grid-cols-1 md:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Firmenname",
                  value: vendor.name,
                  onChange: (e) => updateVendor(index, "name", e.target.value),
                  className: "bg-white dark:bg-gray-800"
                }
              ),
              /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: "Kategorie (z.B. Cloud-Provider)",
                  value: vendor.category,
                  onChange: (e) => updateVendor(index, "category", e.target.value),
                  className: "bg-white dark:bg-gray-800"
                }
              ),
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: assessmentData[vendor.id] && /* @__PURE__ */ jsx("div", { className: cn(
                "px-2 py-1 rounded text-xs font-medium",
                getRiskLevel(calculateRiskScore(vendor.id)).bgColor,
                getRiskLevel(calculateRiskScore(vendor.id)).color
              ), children: getRiskLevel(calculateRiskScore(vendor.id)).level }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: currentVendor === index ? "default" : "outline",
                  size: "sm",
                  onClick: () => setCurrentVendor(index),
                  children: /* @__PURE__ */ jsx(Eye, { className: "h-4 w-4" })
                }
              ),
              vendors.length > 1 && /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  onClick: () => removeVendor(index),
                  className: "text-red-600 hover:text-red-700",
                  children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" })
                }
              )
            ] })
          ] }) }, vendor.id)) }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-8 border-2 border-indigo-200 dark:border-indigo-800 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-indigo-950/20 dark:via-gray-900 dark:to-purple-950/20", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Activity, { className: "h-6 w-6 text-indigo-600" }),
            "Assessment-Dashboard"
          ] }) }),
          /* @__PURE__ */ jsxs(CardContent, { children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-6 mb-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-indigo-600 mb-2", children: vendors.filter((v) => v.name).length }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Registrierte Vendor" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-green-600 mb-2", children: completedVendors.size }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Vollständig bewertet" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-orange-600 mb-2", children: vendors.filter((v, i) => v.name && calculateRiskScore(v.id) < 60).length }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Hohe Risiken" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-4xl font-bold text-blue-600 mb-2", children: [
                  Math.round(vendors.filter((v) => v.name).reduce((sum, v) => sum + calculateRiskScore(v.id), 0) / Math.max(1, vendors.filter((v) => v.name).length)),
                  "%"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Durchschnittlicher Score" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3 items-center justify-center", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  onClick: () => setShowTips(!showTips),
                  variant: "outline",
                  size: "sm",
                  className: "border-indigo-200 text-indigo-700 hover:bg-indigo-50",
                  children: [
                    /* @__PURE__ */ jsx(Lightbulb, { className: "mr-2 h-4 w-4" }),
                    showTips ? "Tipps ausblenden" : "Assessment-Tipps anzeigen"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  onClick: addVendor,
                  size: "sm",
                  className: "bg-indigo-600 hover:bg-indigo-700 text-white",
                  children: [
                    /* @__PURE__ */ jsx(Plus, { className: "mr-2 h-4 w-4" }),
                    "Vendor hinzufügen"
                  ]
                }
              )
            ] }),
            showTips && /* @__PURE__ */ jsx("div", { className: "mt-6 p-4 bg-yellow-50 dark:bg-yellow-950/20 rounded-lg border border-yellow-200 dark:border-yellow-800", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(Lightbulb, { className: "h-5 w-5 text-yellow-600 mt-0.5" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h5", { className: "font-semibold text-yellow-900 dark:text-yellow-100 mb-2", children: "Assessment-Tipps" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm text-yellow-800 dark:text-yellow-200", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-yellow-500 rounded-full mt-2 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("p", { children: "Beginnen Sie mit kritischen Dienstleistern (Cloud-Provider, Payment-Services)" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-yellow-500 rounded-full mt-2 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("p", { children: "Fordern Sie Zertifizierungen und Compliance-Dokumente an" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "w-1 h-1 bg-yellow-500 rounded-full mt-2 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("p", { children: "Überprüfen Sie die Bewertung jährlich oder bei Vertragsänderungen" })
                  ] })
                ] })
              ] })
            ] }) })
          ] })
        ] }),
        vendors[currentVendor] && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsxs(Card, { className: "mb-8 border-2 border-purple-200 dark:border-purple-800", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsx(BarChart3, { className: "h-6 w-6 text-purple-600" }),
              "Risikobewertung: ",
              vendors[currentVendor].name || "Unbenannt"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-3xl font-bold text-purple-600 mb-2", children: [
                    Math.round(riskScore),
                    "%"
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Compliance-Score" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsxs("div", { className: cn("flex items-center justify-center gap-2 text-lg font-bold mb-2", riskLevel.color), children: [
                    /* @__PURE__ */ jsx(riskLevel.icon, { className: "h-5 w-5" }),
                    riskLevel.level
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Risikostufe" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold text-purple-600 mb-2", children: Object.keys(currentVendorData).length }),
                  /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600 dark:text-gray-400", children: "Bewertete Kriterien" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Assessment-Fortschritt" }),
                  /* @__PURE__ */ jsxs("span", { className: "text-sm font-bold text-purple-600", children: [
                    Math.round(Object.keys(currentVendorData).length / assessmentCategories.reduce((sum, cat) => sum + cat.criteria.length, 0) * 100),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "w-full bg-purple-200 dark:bg-purple-800 rounded-full h-2", children: /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "bg-purple-600 h-2 rounded-full transition-all duration-300",
                    style: { width: `${Object.keys(currentVendorData).length / assessmentCategories.reduce((sum, cat) => sum + cat.criteria.length, 0) * 100}%` }
                  }
                ) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-6", children: assessmentCategories.map((category, categoryIndex) => /* @__PURE__ */ jsxs(Card, { className: "border-2 border-gray-200 dark:border-gray-700", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
              /* @__PURE__ */ jsx("div", { className: cn(
                "p-3 rounded-xl bg-gradient-to-r shadow-lg",
                category.color
              ), children: /* @__PURE__ */ jsx(category.icon, { className: "h-6 w-6 text-white" }) }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: category.title }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400 mt-1", children: category.description })
              ] })
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-6", children: category.criteria.map((criteria, criteriaIndex) => /* @__PURE__ */ jsxs("div", { className: "p-4 bg-gray-50 dark:bg-gray-800 rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 dark:text-white", children: criteria.title }),
                  criteria.required && /* @__PURE__ */ jsx(Badge, { className: "bg-red-100 text-red-700 border-red-200 text-xs", children: "Pflicht" })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 dark:text-gray-400", children: criteria.description })
              ] }),
              criteria.type === "text" && /* @__PURE__ */ jsx(
                Input,
                {
                  placeholder: `${criteria.title} eingeben...`,
                  value: currentVendorData[criteria.id] || "",
                  onChange: (e) => updateAssessmentData(criteria.id, e.target.value),
                  className: "bg-white dark:bg-gray-700"
                }
              ),
              criteria.type === "textarea" && /* @__PURE__ */ jsx(
                "textarea",
                {
                  placeholder: `${criteria.title} beschreiben...`,
                  value: currentVendorData[criteria.id] || "",
                  onChange: (e) => updateAssessmentData(criteria.id, e.target.value),
                  className: "w-full p-3 border border-gray-300 rounded-lg bg-white dark:bg-gray-700 dark:border-gray-600",
                  rows: 3
                }
              ),
              criteria.type === "radio" && criteria.options && /* @__PURE__ */ jsx(
                RadioGroup,
                {
                  value: currentVendorData[criteria.id] || "",
                  onValueChange: (value) => updateAssessmentData(criteria.id, value),
                  className: "space-y-2",
                  children: criteria.options.map((option) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700", children: [
                    /* @__PURE__ */ jsx(RadioGroupItem, { value: option.value, id: `${criteria.id}_${option.value}` }),
                    /* @__PURE__ */ jsx(
                      Label,
                      {
                        htmlFor: `${criteria.id}_${option.value}`,
                        className: "flex-1 cursor-pointer text-gray-900 dark:text-white",
                        children: option.label
                      }
                    ),
                    /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded", children: [
                      option.points,
                      " Pkt."
                    ] })
                  ] }, option.value))
                }
              ),
              criteria.type === "multiselect" && criteria.options && /* @__PURE__ */ jsx("div", { className: "space-y-2", children: criteria.options.map((option) => /* @__PURE__ */ jsxs("div", { className: "flex items-center space-x-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700", children: [
                /* @__PURE__ */ jsx(
                  Checkbox,
                  {
                    checked: (currentVendorData[criteria.id] || []).includes(option),
                    onCheckedChange: (checked) => {
                      const current = currentVendorData[criteria.id] || [];
                      const updated = checked ? [...current, option] : current.filter((item) => item !== option);
                      updateAssessmentData(criteria.id, updated);
                    }
                  }
                ),
                /* @__PURE__ */ jsx(Label, { className: "flex-1 cursor-pointer text-gray-900 dark:text-white", children: option })
              ] }, option)) })
            ] }, criteria.id)) }) })
          ] }, category.id)) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center mt-8", children: /* @__PURE__ */ jsxs(
          Button,
          {
            onClick: () => setShowEmailForm(true),
            className: "bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
            size: "lg",
            children: [
              /* @__PURE__ */ jsx(Download, { className: "mr-2 h-4 w-4" }),
              "Bewertungsreport als PDF herunterladen"
            ]
          }
        ) })
      ] }) }) }),
      showEmailForm && /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4", children: /* @__PURE__ */ jsxs(Card, { className: "max-w-lg w-full", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Mail, { className: "h-6 w-6 text-brand-red" }),
          "Vendor-Assessment-Report"
        ] }) }),
        /* @__PURE__ */ jsxs(CardContent, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 mb-6", children: "Erhalten Sie Ihren vollständigen Vendor-Assessment-Report mit Risikobewertungen, Handlungsempfehlungen und Musterverträgen als PDF." }),
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
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("label", { className: "text-sm font-medium text-gray-700 dark:text-gray-300", children: "Anzahl zu bewertender Dienstleister" }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "number",
                  className: "w-full p-3 mt-1 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent",
                  placeholder: "z.B. 5",
                  min: "1"
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
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "py-16 bg-gray-50 dark:bg-gray-900", children: /* @__PURE__ */ jsx("div", { className: "container px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsx("div", { className: "text-center mb-8", children: /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold text-gray-900 dark:text-white mb-4", children: "Warum Vendor-Assessments kritisch sind" }) }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-8", children: [
          /* @__PURE__ */ jsxs(Card, { className: "text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 bg-red-100 dark:bg-red-900/30 rounded-lg mb-4", children: /* @__PURE__ */ jsx(Scale, { className: "h-6 w-6 text-red-600" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 dark:text-white mb-2", children: "Rechtliche Verpflichtung" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Art. 28 DSGVO verpflichtet zur sorgfältigen Auswahl und regelmäßigen Überprüfung von Auftragsverarbeitern." })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg mb-4", children: /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 text-orange-600" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 dark:text-white mb-2", children: "Haftungsprinzip" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Sie haften für Datenschutzverstöße Ihrer Dienstleister als wären es Ihre eigenen." })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "text-center p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]", children: [
            /* @__PURE__ */ jsx("div", { className: "inline-flex p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mb-4", children: /* @__PURE__ */ jsx(Shield, { className: "h-6 w-6 text-blue-600" }) }),
            /* @__PURE__ */ jsx("h4", { className: "font-semibold text-gray-900 dark:text-white mb-2", children: "Risikominimierung" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 dark:text-gray-400 text-sm", children: "Systematische Bewertung reduziert Compliance-Risiken und potenzielle Bußgelder erheblich." })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
          /* @__PURE__ */ jsx(Link, { to: "/contact?source=vendor-assessment", children: /* @__PURE__ */ jsxs(Button, { className: "bg-brand-red hover:bg-brand-red/90 text-white shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group", children: [
            /* @__PURE__ */ jsx(Users, { className: "mr-2 h-5 w-5" }),
            "Vendor-Assessment-Beratung buchen",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/resources", children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "border-2 border-gray-300 dark:border-gray-600 hover:border-brand-red hover:text-brand-red transition-all duration-300", children: [
            /* @__PURE__ */ jsx(FileText, { className: "mr-2 h-5 w-5" }),
            "Weitere Compliance-Tools"
          ] }) })
        ] }) })
      ] }) }) })
    ] })
  ] });
};
export {
  VendorAssessmentTemplate
};
