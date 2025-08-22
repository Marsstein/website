import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { Users, Scale, Eye, Shield, Code, Wrench, BookOpen, AlertTriangle, Handshake, UserCheck, Lightbulb, CheckCircle2, MapPin, Link, Network, ArrowRight, Building2, ChevronDown, Briefcase, TestTube, BarChart3, Target, Users2, Brain, Globe, Layers, Database, FileText, Star, Settings, FileCheck, Monitor, Download, Calendar } from "lucide-react";
import { Link as Link$1 } from "react-router-dom";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-tabs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const HRAICompliance = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [biasTestResults, setBiasTestResults] = useState([]);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  useEffect(() => {
    document.title = "HR AI Compliance – BetrVG & AGG konforme KI-Lösungen";
    const metaDescription = "Umfassender Guide für KI-Compliance im HR-Bereich: EU AI Act, BetrVG, AGG Anforderungen, Bias-Tests und praktische Umsetzung.";
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement("meta");
      viewportMeta.setAttribute("name", "viewport");
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.setAttribute("content", "width=device-width, initial-scale=1");
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement("meta");
      descriptionMeta.setAttribute("name", "description");
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute("content", metaDescription);
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", `${window.location.origin}/wissen/ki-datenschutz/hr-ai-compliance`);
    const ogTags = [
      { property: "og:title", content: "HR AI Compliance – BetrVG & AGG konforme KI-Lösungen" },
      { property: "og:description", content: metaDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${window.location.origin}/wissen/ki-datenschutz/hr-ai-compliance` }
    ];
    ogTags.forEach((tag) => {
      let ogMeta = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement("meta");
        ogMeta.setAttribute("property", tag.property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute("content", tag.content);
    });
    const style = document.createElement("style");
    style.textContent = `
      h1, h2, h3, h4, h5, h6 {
        scroll-margin-top: 96px;
      }
      
      @media (max-width: 768px) {
        .mobile-toc-accordion {
          max-height: 300px;
          overflow-y: auto;
        }
        
        body {
          font-size: 16px;
          line-height: 1.6;
        }
        
        a, button {
          min-height: 48px;
          display: flex;
          align-items: center;
        }
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  const tabs = [
    { id: "overview", label: "Überblick", icon: Shield },
    { id: "legal-framework", label: "Rechtslage", icon: Scale },
    { id: "bias-discrimination", label: "Bias & Diskriminierung", icon: Users },
    { id: "transparency", label: "Transparenz & Erklärbarkeit", icon: Eye },
    { id: "implementation", label: "Praktische Umsetzung", icon: Code },
    { id: "compliance-tools", label: "Tools & Tests", icon: Wrench }
  ];
  const legalFramework = [
    {
      law: "EU AI Act (2024)",
      scope: "EU-weite KI-Regulierung",
      relevanceToHR: "High-Risk AI Systems in Employment",
      keyProvisions: [
        "HR AI als High-Risk System klassifiziert",
        "Conformity Assessment vor Deployment",
        "Menschliche Aufsicht zwingend erforderlich",
        "Transparenz und Dokumentationspflichten",
        "Kontinuierliches Monitoring und Testing",
        "CE-Kennzeichnung für HR AI Systeme"
      ],
      hrSpecificRequirements: [
        "Bias Testing für geschützte Merkmale",
        "Erklärbarkeit von Personalentscheidungen",
        "Human-in-the-Loop bei finalen Entscheidungen",
        "Regelmäßige Fairness-Audits",
        "Dokumentation von Training Data",
        "Impact Assessment für Grundrechte"
      ],
      penalties: "Bis zu 35 Mio. € oder 7% des weltweiten Jahresumsatzes",
      effectiveDate: "Stufenweise ab Februar 2025, voll wirksam ab 2027",
      icon: Scale,
      color: "from-blue-500 to-purple-500"
    },
    {
      law: "Allgemeines Gleichbehandlungsgesetz (AGG)",
      scope: "Deutsches Antidiskriminierungsrecht",
      relevanceToHR: "Verbot der Diskriminierung in allen HR-Prozessen",
      keyProvisions: [
        "Schutz vor Diskriminierung nach 8 Merkmalen",
        "Objektive Rechtfertigung bei mittelbarer Diskriminierung",
        "Beweislasterleichterung für Betroffene",
        "Beschwerderecht und Entschädigungsansprüche",
        "Maßregelungsverbot für Beschwerdeführer",
        "Positive Maßnahmen zur Förderung erlaubt"
      ],
      hrSpecificRequirements: [
        "AI darf nicht systematisch benachteiligen",
        "Stellenausschreibungen müssen diskriminierungsfrei sein",
        "Algorithmic Fairness über geschützte Gruppen",
        "Transparenz bei automatisierten Entscheidungen",
        "Beschwerdemechanismen für AI-Entscheidungen",
        "Schulungen zu unbewussten Vorurteilen"
      ],
      penalties: "Entschädigung bis zu 3 Monatsgehältern",
      effectiveDate: "Seit 2006 in Kraft",
      icon: Users,
      color: "from-green-500 to-teal-500"
    },
    {
      law: "DSGVO Artikel 22",
      scope: "Automatisierte Entscheidungsfindung",
      relevanceToHR: "Schutz vor vollautomatisierten HR-Entscheidungen",
      keyProvisions: [
        "Grundsätzliches Verbot automatisierter Entscheidungen",
        "Ausnahmen bei Vertragserfüllung oder Einwilligung",
        "Recht auf menschliche Intervention",
        "Recht auf Erklärung der Entscheidungslogik",
        "Recht auf Anfechtung der Entscheidung",
        "Angemessene Schutzmaßnahmen erforderlich"
      ],
      hrSpecificRequirements: [
        "Human Review bei allen finalen HR-Entscheidungen",
        "Explainable AI für Bewerbungsentscheidungen",
        "Opt-out Möglichkeit für Bewerber",
        "Dokumentation der Entscheidungslogik",
        "Data Protection Impact Assessment",
        "Privacy by Design Implementation"
      ],
      penalties: "Bis zu 20 Mio. € oder 4% des Jahresumsatzes",
      effectiveDate: "Seit Mai 2018 in Kraft",
      icon: Shield,
      color: "from-orange-500 to-red-500"
    },
    {
      law: "Betriebsverfassungsgesetz (BetrVG)",
      scope: "Mitbestimmungsrechte des Betriebsrats",
      relevanceToHR: "Mitbestimmung bei technischen Überwachungseinrichtungen",
      keyProvisions: [
        "§ 87 Abs. 1 Nr. 6 - Mitbestimmung bei Überwachung",
        "§ 94 - Mitbestimmung bei Personalfragebögen",
        "§ 95 - Mitbestimmung bei Auswahlrichtlinien",
        "Informations- und Beratungsrechte",
        "Zustimmungsverweigerung bei Rechtsverstößen",
        "Initiativrecht bei Datenschutz"
      ],
      hrSpecificRequirements: [
        "Betriebsvereinbarung für HR AI erforderlich",
        "Transparenz über AI-Funktionsweise",
        "Schulung der Betriebsratsmitglieder",
        "Regelmäßige Überprüfung der AI-Systeme",
        "Beschwerdemöglichkeiten etablieren",
        "Datenschutz-Folgenabschätzung gemeinsam"
      ],
      penalties: "Bußgeld bis zu 10.000 €, Unterlassungsansprüche",
      effectiveDate: "Kontinuierlich weiterentwickelt seit 1972",
      icon: Handshake,
      color: "from-purple-500 to-pink-500"
    }
  ];
  const biasTestingFramework = [
    {
      biasType: "Statistical Parity",
      description: "Gleiche Positivraten über alle geschützten Gruppen",
      calculation: "P(Ŷ=1|A=a) = P(Ŷ=1|A=b) für alle Gruppen a,b",
      whenToUse: [
        "Stellenausschreibungen und Rekrutierung",
        "Leistungsbeurteilungen",
        "Beförderungsentscheidungen",
        "Gehaltserhöhungen"
      ],
      limitations: [
        "Ignoriert legitime Gruppenunterschiede",
        "Kann zu reverse discrimination führen",
        "Schwierig bei multiplen geschützten Merkmalen"
      ],
      practicalExample: {
        scenario: "Bewerbungsscreening für Software-Engineer Position",
        data: "Männliche Bewerber: 60% positive Rate, Weibliche Bewerber: 45% positive Rate",
        assessment: "Statistical Parity verletzt - Differenz von 15 Prozentpunkten",
        action: "Überprüfung der Feature-Gewichtung und Trainings-Daten erforderlich"
      },
      implementationSteps: [
        "Geschützte Gruppen definieren",
        "Positivraten pro Gruppe berechnen",
        "Statistische Signifikanz testen",
        "Acceptable Threshold definieren (z.B. 80%-Regel)",
        "Monitoring Dashboard einrichten"
      ],
      icon: BarChart3,
      complexity: "Niedrig"
    },
    {
      biasType: "Equalized Odds",
      description: "Gleiche True Positive und False Positive Raten über Gruppen",
      calculation: "P(Ŷ=1|Y=y,A=a) = P(Ŷ=1|Y=y,A=b) für y ∈ {0,1}",
      whenToUse: [
        "Performance-basierte Entscheidungen",
        "Talentidentifikation",
        "Succession Planning",
        "Training und Development Auswahl"
      ],
      limitations: [
        "Benötigt Ground Truth Labels",
        "Komplexer zu interpretieren",
        "Kann bei kleinen Gruppen instabil sein"
      ],
      practicalExample: {
        scenario: "High-Potential Identifikation für Leadership Program",
        data: "TPR: Männer 85%, Frauen 72% | FPR: Männer 12%, Frauen 18%",
        assessment: "Equalized Odds verletzt - unterschiedliche Fehlerraten",
        action: "Kalibrierung des Models für fairere Vorhersagen nötig"
      },
      implementationSteps: [
        "Performance Ground Truth etablieren",
        "Confusion Matrix pro Gruppe erstellen",
        "TPR und FPR Differenzen messen",
        "Post-Processing Kalibrierung anwenden",
        "Kontinuierliches A/B Testing"
      ],
      icon: Target,
      complexity: "Mittel"
    },
    {
      biasType: "Individual Fairness",
      description: "Ähnliche Individuen erhalten ähnliche Behandlung",
      calculation: "d(x₁,x₂) ≤ δ ⟹ |f(x₁) - f(x₂)| ≤ ε",
      whenToUse: [
        "Gehalts- und Vergütungsentscheidungen",
        "Individuelle Leistungsbewertungen",
        "Karriereempfehlungen",
        "Personalisierte Benefits"
      ],
      limitations: [
        'Definition von "Ähnlichkeit" schwierig',
        "Rechenintensiv für große Datensätze",
        "Subjektive Similarity Metrics"
      ],
      practicalExample: {
        scenario: "Gehaltsempfehlung für gleichwertige Positionen",
        data: "Zwei ähnliche Profile: 85k€ vs 92k€ Empfehlung ohne erkennbaren Unterschied",
        assessment: "Individual Fairness verletzt - unerklärliche Gehaltsdifferenz",
        action: "Similarity-basierte Constraints im Model implementieren"
      },
      implementationSteps: [
        "Relevante Similarity Metrics definieren",
        "Pairwise Comparisons durchführen",
        "Fairness Constraints in Training integrieren",
        "Explanation-based Validation",
        "Manual Review für Edge Cases"
      ],
      icon: Users2,
      complexity: "Hoch"
    },
    {
      biasType: "Counterfactual Fairness",
      description: "Entscheidung bleibt gleich in kontrafaktischen Welten",
      calculation: "P(Ŷₐ₌ₐ = y | X = x, A = a) = P(Ŷₐ₌ₐ' = y | X = x, A = a)",
      whenToUse: [
        "Komplexe Karriereentscheidungen",
        "Langfristige Development Planning",
        "Executive Assessments",
        "Critical Role Assignments"
      ],
      limitations: [
        "Kausale Modelle erforderlich",
        "Sehr rechenintensiv",
        "Schwierige Validierung in der Praxis"
      ],
      practicalExample: {
        scenario: "Leadership Assessment für C-Level Position",
        data: "Kandidat X würde bei anderem Geschlecht andere Bewertung erhalten",
        assessment: "Counterfactual Fairness verletzt durch unbewusste Bias",
        action: "Strukturierte Interviews und kausales Reasoning implementieren"
      },
      implementationSteps: [
        "Kausales Graph-Modell entwickeln",
        "Counterfactual Inference implementieren",
        "Domain Expert Validation",
        "Sensitivity Analysis durchführen",
        "Continuous Model Updates"
      ],
      icon: Brain,
      complexity: "Sehr Hoch"
    }
  ];
  const transparencyRequirements = [
    {
      requirement: "Algorithmische Transparenz",
      description: "Offenlegung der grundlegenden Funktionsweise des AI-Systems",
      legalBasis: ["EU AI Act Art. 13", "DSGVO Art. 12-14"],
      targetAudience: "Bewerber, Mitarbeiter, Betriebsrat, Aufsichtsbehörden",
      contentRequirements: [
        "Zweck und Einsatzbereich der AI",
        "Arten der verarbeiteten Daten",
        "Entscheidungslogik in verständlicher Sprache",
        "Mögliche Auswirkungen auf Betroffene",
        "Menschliche Überprüfungsmöglichkeiten",
        "Kontaktdaten für Rückfragen"
      ],
      implementationMethods: [
        "Klare Datenschutzerklärungen",
        "AI-Info-Seiten auf Karriere-Website",
        "Informationsbroschüren für Bewerber",
        "Schulungsmaterialien für HR-Teams",
        "FAQ-Sektion zu AI-Nutzung",
        "Video-Erklärungen des Systems"
      ],
      challenges: [
        "Balance zwischen Transparenz und IP-Schutz",
        "Verständliche Sprache für Laien",
        "Regelmäßige Aktualisierung bei Model-Updates",
        "Mehrsprachige Aufbereitung"
      ],
      bestPractices: [
        "User-friendly Plain Language verwenden",
        "Visualisierungen und Infografiken nutzen",
        "Regelmäßige Feedback-Schleifen mit Nutzern",
        "Proaktive Kommunikation bei Änderungen"
      ],
      icon: Globe
    },
    {
      requirement: "Individuelle Erklärbarkeit",
      description: "Personalisierte Erklärungen für spezifische AI-Entscheidungen",
      legalBasis: ["DSGVO Art. 22", "EU AI Act Art. 86"],
      targetAudience: "Individuelle Bewerber und Mitarbeiter",
      contentRequirements: [
        "Welche Daten zur Entscheidung führten",
        "Gewichtung verschiedener Faktoren",
        "Verbesserungsmöglichkeiten aufzeigen",
        "Alternative Szenarien erläutern",
        "Einspruchsmöglichkeiten erklären",
        "Zeitrahmen für Überprüfungen"
      ],
      implementationMethods: [
        "LIME/SHAP für lokale Erklärungen",
        "Natural Language Explanation Generation",
        "Interactive Dashboards für Betroffene",
        "Personalisierte PDF-Reports",
        "Chatbot für Nachfragen",
        "One-on-One Erklärungsgespräche"
      ],
      challenges: [
        "Technische Komplexität der Erklärungen",
        "Automatisierung vs. menschliche Expertise",
        "Skalierung für große Bewerberzahlen",
        "Konsistenz der Erklärungen"
      ],
      bestPractices: [
        'Kontrastive Erklärungen ("Was wäre wenn...")',
        "Visuelle und numerische Darstellung kombinieren",
        "Actionable Insights für Verbesserungen",
        "Multiple Explanation Levels anbieten"
      ],
      icon: Eye
    },
    {
      requirement: "Prozess-Transparenz",
      description: "Offenlegung der HR-Prozesse mit AI-Unterstützung",
      legalBasis: ["BetrVG § 87", "EU AI Act Art. 13"],
      targetAudience: "Betriebsrat, HR-Teams, Management",
      contentRequirements: [
        "Workflow-Diagramme mit AI-Integration",
        "Entscheidungspunkte und Verantwortlichkeiten",
        "Escalation-Prozesse bei AI-Fehlern",
        "Quality Assurance Maßnahmen",
        "Regular Review und Update Zyklen",
        "Incident Response Procedures"
      ],
      implementationMethods: [
        "Detaillierte Prozessdokumentation",
        "Interaktive Workflow-Visualisierungen",
        "Regular Stakeholder Briefings",
        "Quarterly Process Reviews",
        "Change Management Protokolle",
        "Audit Trail Dokumentation"
      ],
      challenges: [
        "Komplexität der AI-integrierten Prozesse",
        "Change Management bei Updates",
        "Stakeholder Alignment",
        "Compliance Nachweise führen"
      ],
      bestPractices: [
        "Version Control für Prozessdokumentation",
        "Regular Training für alle Stakeholder",
        "Clear Escalation Paths definieren",
        "Continuous Process Improvement"
      ],
      icon: Layers
    },
    {
      requirement: "Datentransparenz",
      description: "Aufklärung über verwendete Daten und deren Herkunft",
      legalBasis: ["DSGVO Art. 13-14", "EU AI Act Art. 10"],
      targetAudience: "Alle Betroffenen, Datenschutzbehörden",
      contentRequirements: [
        "Datenquellen und Herkunft",
        "Datenarten und -kategorien",
        "Speicherdauer und Löschfristen",
        "Datenqualität und Aktualität",
        "Third-Party Datennutzung",
        "Betroffenenrechte und deren Ausübung"
      ],
      implementationMethods: [
        "Umfassende Privacy Notices",
        "Data Lineage Dokumentation",
        "Self-Service Data Access Portals",
        "Regular Data Quality Reports",
        "Automated Data Retention Policies",
        "User-friendly Data Dashboards"
      ],
      challenges: [
        "Komplexe Datenlandschaften dokumentieren",
        "Dynamic Data Sources verwalten",
        "Third-Party Data Compliance",
        "Technical vs. User-friendly Documentation"
      ],
      bestPractices: [
        "Automated Data Discovery Tools nutzen",
        "Plain Language Privacy Policies",
        "Interactive Data Mapping Visualizations",
        "Regular Data Audits durchführen"
      ],
      icon: Database
    }
  ];
  const practicalImplementationGuide = [
    {
      phase: "Legal & Regulatory Assessment",
      duration: "2-3 Wochen",
      description: "Umfassende Bewertung der rechtlichen Anforderungen und Compliance-Gaps",
      keyDeliverables: [
        "Legal Requirements Matrix",
        "Compliance Gap Analysis",
        "Risk Assessment Report",
        "Regulatory Roadmap"
      ],
      activities: [
        "Juristische Beratung zu EU AI Act und AGG",
        "Betriebsrat Early Engagement",
        "Data Protection Impact Assessment Scoping",
        "International Compliance Requirements Review",
        "Industry Best Practices Research",
        "Executive Briefing und Approval"
      ],
      stakeholders: [
        "Legal Counsel",
        "Data Protection Officer",
        "Betriebsrat",
        "HR Leadership",
        "Compliance Team",
        "External Legal Advisors"
      ],
      riskMitigation: [
        "Early Stakeholder Involvement",
        "Conservative Interpretation of unclear Regulations",
        "Regular Legal Updates Integration",
        "Documentation of all Decisions"
      ],
      success_criteria: [
        "Complete Legal Requirements understood",
        "Stakeholder Alignment achieved",
        "Clear Implementation Path defined",
        "Budget und Resources approved"
      ],
      icon: Scale
    },
    {
      phase: "AI System Audit & Documentation",
      duration: "3-4 Wochen",
      description: "Detaillierte Analyse bestehender oder geplanter HR AI Systeme",
      keyDeliverables: [
        "AI System Inventory",
        "Technical Documentation",
        "Data Flow Mapping",
        "Bias Assessment Report"
      ],
      activities: [
        "Current State AI System Analysis",
        "Data Sources und Quality Assessment",
        "Model Architecture Documentation",
        "Training Data Bias Analysis",
        "Performance Metrics Evaluation",
        "Explainability Gap Analysis"
      ],
      stakeholders: [
        "Data Scientists",
        "ML Engineers",
        "HR Analytics Team",
        "IT Architecture",
        "Data Engineering",
        "External AI Auditors"
      ],
      riskMitigation: [
        "Independent Third-Party Validation",
        "Comprehensive Testing auf Multiple Datasets",
        "Cross-functional Review Prozess",
        "Version Control für alle Artefakte"
      ],
      success_criteria: [
        "Complete System Documentation",
        "Bias Testing completed",
        "Technical Debt identified",
        "Remediation Plan created"
      ],
      icon: Brain
    },
    {
      phase: "Fairness & Bias Remediation",
      duration: "4-6 Wochen",
      description: "Implementation von Fairness-Mechanismen und Bias-Reduktion",
      keyDeliverables: [
        "Bias-Free Model Versions",
        "Fairness Testing Framework",
        "Monitoring Dashboard",
        "Validation Reports"
      ],
      activities: [
        "Pre-Processing Data Cleaning",
        "In-Processing Fairness Constraints",
        "Post-Processing Calibration",
        "Comprehensive Bias Testing",
        "Model Performance Validation",
        "A/B Testing Setup"
      ],
      stakeholders: [
        "ML Engineering Team",
        "Data Scientists",
        "HR Subject Matter Experts",
        "Diversity & Inclusion Team",
        "Quality Assurance",
        "External Fairness Experts"
      ],
      riskMitigation: [
        "Multiple Fairness Metrics parallel testen",
        "Conservative Bias Thresholds setzen",
        "Human Validation für Edge Cases",
        "Rollback Strategy für Production"
      ],
      success_criteria: [
        "All Bias Tests passed",
        "Model Performance maintained",
        "Stakeholder Validation completed",
        "Production Deployment ready"
      ],
      icon: Users
    },
    {
      phase: "Transparency & Explainability Implementation",
      duration: "3-5 Wochen",
      description: "Entwicklung von Erklärbarkeits- und Transparenz-Features",
      keyDeliverables: [
        "Explanation Engine",
        "User-Facing Transparency Tools",
        "Documentation Portal",
        "Training Materials"
      ],
      activities: [
        "Explainable AI Models Development",
        "Natural Language Explanation Generation",
        "User Interface Design für Explanations",
        "Automated Documentation Generation",
        "Multi-Language Support Implementation",
        "User Acceptance Testing"
      ],
      stakeholders: [
        "UX/UI Design Team",
        "Frontend Developers",
        "Technical Writers",
        "HR Communications",
        "Training Team",
        "End User Representatives"
      ],
      riskMitigation: [
        "User-Centric Design Approach",
        "Multiple Explanation Formats",
        "Accessibility Compliance",
        "Performance Impact Monitoring"
      ],
      success_criteria: [
        "User-friendly Explanations available",
        "All Transparency Requirements met",
        "Training Materials completed",
        "User Acceptance achieved"
      ],
      icon: Eye
    },
    {
      phase: "Governance & Monitoring Setup",
      duration: "2-3 Wochen",
      description: "Etablierung von Governance-Strukturen und kontinuierlichem Monitoring",
      keyDeliverables: [
        "AI Governance Framework",
        "Monitoring und Alerting System",
        "Incident Response Procedures",
        "Compliance Dashboards"
      ],
      activities: [
        "AI Ethics Committee Establishment",
        "Regular Review Prozesse Definition",
        "Automated Monitoring Implementation",
        "Incident Response Playbooks",
        "Compliance Reporting Automation",
        "Continuous Improvement Framework"
      ],
      stakeholders: [
        "Executive Leadership",
        "AI Ethics Committee",
        "Operations Team",
        "Risk Management",
        "Internal Audit",
        "External Advisors"
      ],
      riskMitigation: [
        "Clear Escalation Procedures",
        "Regular Governance Reviews",
        "External Validation Processes",
        "Comprehensive Audit Trails"
      ],
      success_criteria: [
        "Governance Framework operational",
        "All Monitoring Systems active",
        "Incident Response tested",
        "Compliance Reporting automated"
      ],
      icon: Settings
    }
  ];
  const complianceTools = [
    {
      tool: "Bias Detection & Testing Suite",
      description: "Umfassende Sammlung von Bias-Tests und Fairness-Metriken",
      features: [
        "Statistical Parity Testing",
        "Equalized Odds Analysis",
        "Individual Fairness Validation",
        "Intersectional Bias Detection",
        "Automated Report Generation",
        "Trend Analysis über Zeit"
      ],
      useCases: [
        "Pre-Deployment Model Validation",
        "Regular Production Monitoring",
        "Regulatory Compliance Reporting",
        "A/B Testing von Model Versionen"
      ],
      technicalRequirements: [
        "Python 3.8+",
        "Pandas, NumPy, Scikit-learn",
        "Model-agnostic APIs",
        "Data Export Capabilities"
      ],
      outputs: [
        "Detailed Bias Reports (PDF)",
        "Interactive Dashboards",
        "API für Real-time Monitoring",
        "Regulatory Compliance Certificates"
      ],
      icon: TestTube,
      complexity: "Mittel",
      license: "Enterprise License"
    },
    {
      tool: "Explainable AI Engine",
      description: "Generate automatic explanations für HR AI decisions",
      features: [
        "LIME/SHAP Integration",
        "Natural Language Generation",
        "Visual Explanation Dashboards",
        "Kontrastive Explanations",
        "Multi-Language Support",
        "API für Integration"
      ],
      useCases: [
        "Individual Decision Explanations",
        "Candidate Feedback Generation",
        "HR Team Training",
        "Regulatory Documentation"
      ],
      technicalRequirements: [
        "Model Access via API",
        "Feature Metadata",
        "Performance Monitoring",
        "User Authentication"
      ],
      outputs: [
        "Personalized Explanation Reports",
        "Interactive Web Interface",
        "Email Notifications",
        "Explanation Quality Metrics"
      ],
      icon: Brain,
      complexity: "Hoch",
      license: "SaaS Subscription"
    },
    {
      tool: "Compliance Documentation Generator",
      description: "Automatische Generierung von Compliance-Dokumentation",
      features: [
        "Template-based Document Generation",
        "Regulatory Mapping",
        "Version Control Integration",
        "Multi-stakeholder Reviews",
        "Automated Updates",
        "Approval Workflows"
      ],
      useCases: [
        "EU AI Act Compliance Documentation",
        "DPIA Documentation",
        "Betriebsvereinbarung Templates",
        "Audit Trail Generation"
      ],
      technicalRequirements: [
        "Document Management System",
        "Template Engine",
        "Integration with HR Systems",
        "Digital Signature Support"
      ],
      outputs: [
        "Ready-to-use Compliance Documents",
        "Legal Review Checklists",
        "Stakeholder Communication Plans",
        "Audit Documentation"
      ],
      icon: FileText,
      complexity: "Niedrig",
      license: "Open Source + Premium Support"
    },
    {
      tool: "HR AI Monitoring Dashboard",
      description: "Real-time Monitoring und Alerting für HR AI Systems",
      features: [
        "Real-time Performance Metrics",
        "Bias Drift Detection",
        "Data Quality Monitoring",
        "Custom Alert Configuration",
        "Stakeholder Notifications",
        "Historical Trend Analysis"
      ],
      useCases: [
        "Continuous Model Monitoring",
        "Early Warning für Bias",
        "Performance Degradation Detection",
        "Regulatory Reporting"
      ],
      technicalRequirements: [
        "Model Inference Logs",
        "Database Access",
        "API für External Integrations",
        "Email/Slack Notifications"
      ],
      outputs: [
        "Real-time Dashboards",
        "Automated Alert Emails",
        "Weekly Performance Reports",
        "Compliance Status Updates"
      ],
      icon: Monitor,
      complexity: "Mittel",
      license: "Enterprise SaaS"
    }
  ];
  const toggleExpanded = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  const runBiasTest = (testType) => {
    const mockResults = {
      "statistical_parity": {
        score: Math.random() * 0.4 + 0.6,
        // 0.6-1.0
        groups: ["Male", "Female", "Non-binary"],
        details: "Statistical parity check across gender groups"
      },
      "equalized_odds": {
        score: Math.random() * 0.3 + 0.7,
        // 0.7-1.0
        groups: ["Age <30", "Age 30-50", "Age >50"],
        details: "Equal TPR/FPR across age groups"
      }
    };
    setBiasTestResults((prev) => [...prev, {
      id: Date.now(),
      test: testType,
      result: mockResults[testType] || mockResults.statistical_parity,
      timestamp: (/* @__PURE__ */ new Date()).toLocaleString()
    }]);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { ref: heroRef, className: "relative overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          style: { y, opacity },
          className: "absolute inset-0",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/grid.svg')] opacity-10" }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl opacity-30" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl opacity-20" })
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
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl", children: /* @__PURE__ */ jsx(Users, { className: "w-16 h-16 text-white" }) }) }),
            /* @__PURE__ */ jsx("h1", { id: "hr-ai-compliance", className: "text-5xl font-bold text-white mb-6", children: "HR AI & Bewerbermanagement Compliance" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto mb-8", children: "Rechtskonforme Implementierung von KI in HR-Prozessen: EU AI Act, AGG, DSGVO und BetrVG-konforme Algorithmen für Recruiting, Performance Management und Personalentscheidungen" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(Scale, { className: "w-4 h-4 mr-2" }),
                "4 Legal Frameworks"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 mr-2" }),
                "Bias Testing Tools"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 mr-2" }),
                "Explainable AI"
              ] })
            ] })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b", children: /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: /* @__PURE__ */ jsx(TabsList, { className: "grid w-full grid-cols-6 h-auto p-1", children: tabs.map((tab) => {
      const Icon = tab.icon;
      return /* @__PURE__ */ jsxs(
        TabsTrigger,
        {
          value: tab.id,
          className: "flex flex-col items-center gap-2 py-3 px-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground",
          children: [
            /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs font-medium hidden sm:inline", children: tab.label })
          ]
        },
        tab.id
      );
    }) }) }) }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8", children: /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
      /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(BookOpen, { className: "w-5 h-5" }),
        "Inhaltsverzeichnis"
      ] }) }),
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("nav", { "aria-label": "Inhaltsverzeichnis", className: cn("space-y-2", "md:grid md:grid-cols-2 md:gap-6 md:space-y-0"), children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#ueberblick",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "HR AI Compliance Landscape" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#legal-framework",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(Scale, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Legal Framework für HR AI" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#bias-detection",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Bias Detection & Fairness Testing" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#transparenz",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Transparenz & Erklärbarkeit" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#praktische-umsetzung",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(Code, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Praktische Umsetzung" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#compliance-tools",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(Wrench, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Compliance Tools & Tests" })
              ]
            }
          )
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
      /* @__PURE__ */ jsxs(TabsContent, { value: "overview", className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("h2", { id: "ueberblick", className: "text-3xl font-bold mb-4", children: "HR AI Compliance Landscape" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "Die Verwendung von KI in HR-Prozessen unterliegt strengen rechtlichen Anforderungen. Diese Seite führt Sie durch die komplexe Regulatorik und zeigt praktische Lösungsansätze für compliance-konforme HR AI Systeme." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: [
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-red-100 bg-gradient-to-br from-red-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5 text-red-500" }),
              "Diskriminierung"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-3", children: "AGG und EU AI Act verbieten systematische Benachteiligung geschützter Gruppen" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "8 geschützte Merkmale" }),
                /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "Beweislasterleichterung" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
              /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5 text-blue-500" }),
              "Transparenz"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-3", children: "DSGVO Art. 22 und EU AI Act fordern Erklärbarkeit automatisierter Entscheidungen" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "Explainable AI" }),
                /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "Right to Explanation" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-green-100 bg-gradient-to-br from-green-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
              /* @__PURE__ */ jsx(Handshake, { className: "w-5 h-5 text-green-500" }),
              "Mitbestimmung"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-3", children: "BetrVG § 87 gibt Betriebsräten Mitbestimmungsrechte bei HR AI Systemen" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "Betriebsvereinbarung" }),
                /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "Schulungspflicht" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2 text-lg", children: [
              /* @__PURE__ */ jsx(UserCheck, { className: "w-5 h-5 text-purple-500" }),
              "Human Oversight"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-3", children: "EU AI Act und DSGVO erfordern menschliche Aufsicht bei kritischen HR-Entscheidungen" }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "Human-in-the-Loop" }),
                /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: "Right to Review" })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-200", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Lightbulb, { className: "w-5 h-5 text-yellow-500" }),
            "Warum HR AI Compliance entscheidend ist"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-green-700", children: "Business Benefits:" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Verbesserung der Hiring-Qualität durch faire Algorithmen" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Employer Branding durch verantwortungsvolle AI" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Erhöhte Diversität und Inklusion" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Reduzierte Time-to-Hire bei besseren Ergebnissen" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-red-700", children: "Compliance Risks:" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "AGG-Verstöße: Entschädigung bis 3 Monatsgehälter" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "EU AI Act: Strafen bis 35 Mio. € oder 7% Umsatz" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "DSGVO Art. 22: Bis 20 Mio. € oder 4% Umsatz" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Reputationsschäden und Talentabwanderung" })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5" }),
            "Ihr Weg zur HR AI Compliance"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center", children: /* @__PURE__ */ jsx(Scale, { className: "w-8 h-8 text-blue-600" }) }),
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "1. Legal Assessment" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Verstehen Sie die rechtlichen Anforderungen für Ihren spezifischen Use Case" }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "mt-3",
                  onClick: () => setActiveTab("legal-framework"),
                  children: "Rechtslage erkunden"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center", children: /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-green-600" }) }),
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "2. Bias Testing" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Implementieren Sie umfassende Bias-Tests für faire AI-Entscheidungen" }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "mt-3",
                  onClick: () => setActiveTab("bias-discrimination"),
                  children: "Bias Tests starten"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center", children: /* @__PURE__ */ jsx(Code, { className: "w-8 h-8 text-purple-600" }) }),
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "3. Implementation" }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Setzen Sie compliance-konforme HR AI Systeme mit unseren Tools um" }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "outline",
                  size: "sm",
                  className: "mt-3",
                  onClick: () => setActiveTab("implementation"),
                  children: "Umsetzung planen"
                }
              )
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Link, { className: "w-5 h-5" }),
            "Verwandte KI-Compliance Ressourcen"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs(
              Link$1,
              {
                to: "/wissen/ki-datenschutz/federated-learning",
                className: "flex items-center gap-3 p-4 border rounded-lg hover:border-blue-300 hover:shadow-md transition-all min-h-[48px]",
                children: [
                  /* @__PURE__ */ jsx(Network, { className: "w-5 h-5 text-blue-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800", children: "Federated Learning Guide" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Dezentrale KI-Kollaboration mit Privacy-by-Design" })
                  ] }),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-blue-600 flex-shrink-0" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              Link$1,
              {
                to: "/wissen/ki-datenschutz/financial-ai-compliance",
                className: "flex items-center gap-3 p-4 border rounded-lg hover:border-blue-300 hover:shadow-md transition-all min-h-[48px]",
                children: [
                  /* @__PURE__ */ jsx(Building2, { className: "w-5 h-5 text-blue-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800", children: "Financial AI Compliance" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Regulatorische Anforderungen für KI im Finanzsektor" })
                  ] }),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-blue-600 flex-shrink-0" })
                ]
              }
            )
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "legal-framework", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { id: "legal-framework", className: "text-3xl font-bold mb-4", children: "Legal Framework für HR AI" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Die vier wichtigsten Rechtsrahmen für KI im Personalwesen" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: legalFramework.map((law, index) => {
          const Icon = law.icon;
          return /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.5, delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: cn(
                      "p-3 rounded-xl bg-gradient-to-br text-white",
                      law.color
                    ), children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl mb-1", children: law.law }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-1", children: law.scope }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: law.relevanceToHR })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => toggleExpanded(`law-${index}`),
                      children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                        "w-4 h-4 transition-transform",
                        expandedSection === `law-${index}` && "rotate-180"
                      ) })
                    }
                  )
                ] }) }),
                expandedSection === `law-${index}` && /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Allgemeine Bestimmungen:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: law.keyProvisions.map((provision, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-blue-500 mt-1 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: provision })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-red-800", children: "Sanktionen" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700 mb-2", children: law.penalties }),
                      /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-red-600 border-red-300", children: law.effectiveDate })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Briefcase, { className: "w-4 h-4 text-purple-500" }),
                      "HR-Spezifische Anforderungen"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: law.hrSpecificRequirements.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(Users, { className: "w-3 h-3 text-purple-500 mt-1 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: req })
                    ] }, idx)) })
                  ] })
                ] }) })
              ] })
            },
            law.law
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "bias-discrimination", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { id: "bias-detection", className: "text-3xl font-bold mb-4", children: "Bias Detection & Fairness Testing" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Umfassende Methoden zur Erkennung und Vermeidung von Diskriminierung in HR AI" })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-6", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(TestTube, { className: "w-5 h-5" }),
            "Interactive Bias Testing"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Testen Sie verschiedene Fairness-Metriken für Ihr HR AI System" }),
            /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
              /* @__PURE__ */ jsx(Button, { onClick: () => runBiasTest("statistical_parity"), children: "Statistical Parity Test" }),
              /* @__PURE__ */ jsx(Button, { onClick: () => runBiasTest("equalized_odds"), variant: "outline", children: "Equalized Odds Test" })
            ] }),
            biasTestResults.length > 0 && /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Test Results:" }),
              /* @__PURE__ */ jsx("div", { className: "space-y-3", children: biasTestResults.map((result) => /* @__PURE__ */ jsxs("div", { className: "p-4 border rounded-lg", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: result.test }),
                  /* @__PURE__ */ jsxs(Badge, { variant: result.result.score > 0.8 ? "default" : "destructive", children: [
                    "Score: ",
                    (result.result.score * 100).toFixed(1),
                    "%"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: result.result.details }),
                /* @__PURE__ */ jsx("p", { className: "text-xs text-gray-500 mt-1", children: result.timestamp })
              ] }, result.id)) })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: biasTestingFramework.map((bias, index) => {
          const Icon = bias.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl text-white", children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                    /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: bias.biasType }),
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
                      "Komplexität: ",
                      bias.complexity
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: bias.description }),
                  /* @__PURE__ */ jsx("code", { className: "text-xs bg-gray-100 px-2 py-1 rounded mt-2 block", children: bias.calculation })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => toggleExpanded(`bias-${index}`),
                  children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                    "w-4 h-4 transition-transform",
                    expandedSection === `bias-${index}` && "rotate-180"
                  ) })
                }
              )
            ] }) }),
            expandedSection === `bias-${index}` && /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "use-cases", className: "w-full", children: [
              /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [
                /* @__PURE__ */ jsx(TabsTrigger, { value: "use-cases", children: "Use Cases" }),
                /* @__PURE__ */ jsx(TabsTrigger, { value: "example", children: "Beispiel" }),
                /* @__PURE__ */ jsx(TabsTrigger, { value: "implementation", children: "Implementation" }),
                /* @__PURE__ */ jsx(TabsTrigger, { value: "limitations", children: "Limitationen" })
              ] }),
              /* @__PURE__ */ jsx(TabsContent, { value: "use-cases", className: "mt-4", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: bias.whenToUse.map((useCase, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: useCase })
              ] }, idx)) }) }),
              /* @__PURE__ */ jsx(TabsContent, { value: "example", className: "mt-4", children: /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-4 rounded-lg", children: [
                /* @__PURE__ */ jsx("h5", { className: "font-semibold mb-2", children: "Praxisbeispiel:" }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm mb-2", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Szenario:" }),
                  " ",
                  bias.practicalExample.scenario
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm mb-2", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Daten:" }),
                  " ",
                  bias.practicalExample.data
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm mb-2", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Assessment:" }),
                  " ",
                  bias.practicalExample.assessment
                ] }),
                /* @__PURE__ */ jsxs("p", { className: "text-sm", children: [
                  /* @__PURE__ */ jsx("strong", { children: "Maßnahme:" }),
                  " ",
                  bias.practicalExample.action
                ] })
              ] }) }),
              /* @__PURE__ */ jsx(TabsContent, { value: "implementation", className: "mt-4", children: /* @__PURE__ */ jsx("ol", { className: "space-y-2", children: bias.implementationSteps.map((step, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
                /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold", children: idx + 1 }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: step })
              ] }, idx)) }) }),
              /* @__PURE__ */ jsx(TabsContent, { value: "limitations", className: "mt-4", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: bias.limitations.map((limitation, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: limitation })
              ] }, idx)) }) })
            ] }) })
          ] }, bias.biasType);
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "transparency", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { id: "transparenz", className: "text-3xl font-bold mb-4", children: "Transparenz & Erklärbarkeit" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Erfüllung der Transparenzpflichten nach DSGVO und EU AI Act" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: transparencyRequirements.map((requirement, index) => {
          const Icon = requirement.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-br from-blue-500 to-green-500 rounded-xl text-white", children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-xl mb-2", children: requirement.requirement }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-2", children: requirement.description }),
                  /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: requirement.legalBasis.map((basis, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: basis }, idx)) })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => toggleExpanded(`transparency-${index}`),
                  children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                    "w-4 h-4 transition-transform",
                    expandedSection === `transparency-${index}` && "rotate-180"
                  ) })
                }
              )
            ] }) }),
            expandedSection === `transparency-${index}` && /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "content", className: "w-full", children: [
              /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-4", children: [
                /* @__PURE__ */ jsx(TabsTrigger, { value: "content", children: "Inhalte" }),
                /* @__PURE__ */ jsx(TabsTrigger, { value: "methods", children: "Methoden" }),
                /* @__PURE__ */ jsx(TabsTrigger, { value: "challenges", children: "Herausforderungen" }),
                /* @__PURE__ */ jsx(TabsTrigger, { value: "best-practices", children: "Best Practices" })
              ] }),
              /* @__PURE__ */ jsx(TabsContent, { value: "content", className: "mt-4", children: /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3", children: [
                  "Zielgruppe: ",
                  requirement.targetAudience
                ] }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: requirement.contentRequirements.map((content, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: content })
                ] }, idx)) })
              ] }) }),
              /* @__PURE__ */ jsx(TabsContent, { value: "methods", className: "mt-4", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: requirement.implementationMethods.map((method, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                /* @__PURE__ */ jsx(Wrench, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: method })
              ] }, idx)) }) }),
              /* @__PURE__ */ jsx(TabsContent, { value: "challenges", className: "mt-4", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: requirement.challenges.map((challenge, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: challenge })
              ] }, idx)) }) }),
              /* @__PURE__ */ jsx(TabsContent, { value: "best-practices", className: "mt-4", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: requirement.bestPractices.map((practice, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                /* @__PURE__ */ jsx(Star, { className: "w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: practice })
              ] }, idx)) }) })
            ] }) })
          ] }, requirement.requirement);
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "implementation", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { id: "praktische-umsetzung", className: "text-3xl font-bold mb-4", children: "Praktische Umsetzung" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "5-Phasen Roadmap für compliance-konforme HR AI Implementation" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: practicalImplementationGuide.map((phase, index) => {
          const Icon = phase.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl text-white", children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
                      "Phase ",
                      index + 1
                    ] }),
                    /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: phase.duration })
                  ] }),
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: phase.phase }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600 mt-1", children: phase.description })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => toggleExpanded(`phase-${index}`),
                  children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                    "w-4 h-4 transition-transform",
                    expandedSection === `phase-${index}` && "rotate-180"
                  ) })
                }
              )
            ] }) }),
            expandedSection === `phase-${index}` && /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Key Deliverables:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: phase.keyDeliverables.map((deliverable, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(FileCheck, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: deliverable })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Activities:" }),
                  /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                    phase.activities.slice(0, 3).map((activity, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: activity })
                    ] }, idx)),
                    phase.activities.length > 3 && /* @__PURE__ */ jsxs("li", { className: "text-sm text-gray-500", children: [
                      "+",
                      phase.activities.length - 3,
                      " weitere Activities..."
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Stakeholders:" }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: phase.stakeholders.map((stakeholder, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: stakeholder }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Success Criteria:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: phase.success_criteria.map((criteria, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(Target, { className: "w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: criteria })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Risk Mitigation:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: phase.riskMitigation.slice(0, 2).map((risk, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: risk })
                  ] }, idx)) })
                ] })
              ] })
            ] }) })
          ] }, phase.phase);
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "compliance-tools", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { id: "compliance-tools", className: "text-3xl font-bold mb-4", children: "Compliance Tools & Tests" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Praktische Tools für HR AI Compliance Testing und Monitoring" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: complianceTools.map((tool, index) => {
          const Icon = tool.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl text-white", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: tool.tool }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mt-1", children: [
                    /* @__PURE__ */ jsx(Badge, { variant: "outline", children: tool.complexity }),
                    /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: tool.license })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: tool.description })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Key Features:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
                  tool.features.slice(0, 3).map((feature, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: feature })
                  ] }, idx)),
                  tool.features.length > 3 && /* @__PURE__ */ jsxs("li", { className: "text-xs text-gray-500", children: [
                    "+",
                    tool.features.length - 3,
                    " weitere Features..."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Use Cases:" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: tool.useCases.map((useCase, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: useCase }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Outputs:" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: tool.outputs.slice(0, 2).map((output, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "w-3 h-3 text-blue-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: output })
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "pt-3 border-t", children: /* @__PURE__ */ jsxs(Button, { className: "w-full", size: "sm", children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
                "Tool Request"
              ] }) })
            ] }) })
          ] }, tool.tool);
        }) }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" }),
            "Bereit für HR AI Compliance?"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Starten Sie Ihre HR AI Compliance Journey mit unseren spezialisierten Tools und Services." }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-purple-600 to-blue-600", children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
                "Bias Testing Suite"
              ] }),
              /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
                /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4 mr-2" }),
                "Compliance Templates"
              ] }),
              /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
                /* @__PURE__ */ jsx(Users, { className: "w-4 h-4 mr-2" }),
                "Expert Beratung"
              ] }),
              /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "w-4 h-4 mr-2" }),
                "Workshop buchen"
              ] })
            ] })
          ] }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  HRAICompliance as default
};
