import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { TrendingUp, Scale, CheckSquare, Shield, AlertTriangle, Code, BookOpen, Building, Clock, Zap, Eye, Activity, Euro, Ban, AlertCircle, TrendingDown, Lightbulb, CheckCircle2, MapPin, Link, Network, ArrowRight, Users, CreditCard, ChevronDown, FileText, Brain, Sparkles, Target, Settings, BarChart3, Square, Search, Layers, FileCheck, Download, Calendar } from "lucide-react";
import { Link as Link$1 } from "react-router-dom";
import { c as cn } from "../main.mjs";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-tabs";
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
const FinancialAICompliance = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSection, setExpandedSection] = useState(null);
  const [checkedItems, setCheckedItems] = useState(/* @__PURE__ */ new Set());
  const [complianceScore, setComplianceScore] = useState(0);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  useEffect(() => {
    document.title = "Financial AI Compliance – MiFID II & Basel Framework Guide";
    const metaDescription = "Umfassender Guide für KI-Compliance im Finanzsektor: MiFID II, Basel III/IV, PCI DSS Anforderungen und praktische Umsetzung.";
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
    canonicalLink.setAttribute("href", `${window.location.origin}/wissen/ki-datenschutz/financial-ai-compliance`);
    const ogTags = [
      { property: "og:title", content: "Financial AI Compliance – MiFID II & Basel Framework Guide" },
      { property: "og:description", content: metaDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `${window.location.origin}/wissen/ki-datenschutz/financial-ai-compliance` }
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
    { id: "regulatory-landscape", label: "Regulatorik", icon: Scale },
    { id: "algorithmic-trading", label: "Algorithmic Trading", icon: TrendingUp },
    { id: "risk-management", label: "Risk Management", icon: AlertTriangle },
    { id: "compliance-framework", label: "Compliance Framework", icon: CheckSquare },
    { id: "implementation", label: "Implementation", icon: Code }
  ];
  const regulatoryFramework = [
    {
      regulation: "MiFID II (2014/65/EU)",
      scope: "EU-weite Finanzmarktregulierung",
      relevance: "Algorithmic Trading, Best Execution, Market Making",
      keyRequirements: [
        "Algorithm Definition und Dokumentation",
        "Risk Controls und Circuit Breakers",
        "Market Making Obligations",
        "Best Execution Requirements",
        "Real-time Monitoring und Reporting",
        "Business Continuity Planning"
      ],
      aiSpecificRules: [
        "Algorithmus muss klar definiert und dokumentiert sein",
        "Kontinuierliche Überwachung erforderlich",
        "Kill Switches und Risk Limits mandatory",
        "Human Oversight bei kritischen Entscheidungen",
        "Backtesting und Stress Testing",
        "Regelmäßige Algorithm Reviews"
      ],
      penalties: "Bis zu 5 Mio. € oder 10% des Jahresumsatzes",
      implementations: "Seit 2018 voll wirksam",
      icon: Scale,
      color: "from-blue-500 to-cyan-500",
      complexity: "Hoch"
    },
    {
      regulation: "Basel III/IV Framework",
      scope: "Internationale Bankenregulierung",
      relevance: "Credit Risk, Operational Risk, Model Risk Management",
      keyRequirements: [
        "Model Risk Management (SR 11-7)",
        "Model Validation und Governance",
        "Stress Testing Requirements",
        "Capital Adequacy Assessment",
        "Liquidity Risk Management",
        "Operational Risk Framework"
      ],
      aiSpecificRules: [
        "ML Models gelten als High-Risk Models",
        "Independent Model Validation erforderlich",
        "Model Interpretability Requirements",
        "Continuous Model Monitoring",
        "Model Performance Backtesting",
        "Documentation Standards für AI Models"
      ],
      penalties: "Regulatory Sanctions, Capital Add-ons",
      implementations: "Schrittweise bis 2028",
      icon: Building,
      color: "from-green-500 to-teal-500",
      complexity: "Sehr Hoch"
    },
    {
      regulation: "PCI DSS (Payment Card Industry)",
      scope: "Zahlungskartenindustrie",
      relevance: "Fraud Detection, Payment Processing, Data Security",
      keyRequirements: [
        "Secure Network Architecture",
        "Cardholder Data Protection",
        "Vulnerability Management",
        "Access Control Measures",
        "Network Monitoring",
        "Information Security Policy"
      ],
      aiSpecificRules: [
        "AI Models dürfen keine Cardholder Data leaken",
        "Encryption von ML Training Data",
        "Secure AI Model Deployment",
        "AI System Access Controls",
        "Model Inference Logging",
        "AI Incident Response Procedures"
      ],
      penalties: "Fines bis zu $500k per Incident",
      implementations: "Version 4.0 seit 2022",
      icon: CreditCard,
      color: "from-purple-500 to-pink-500",
      complexity: "Mittel"
    },
    {
      regulation: "GDPR/DSGVO Art. 22",
      scope: "EU Datenschutzgrundverordnung",
      relevance: "Automated Decision Making, Profiling, Credit Scoring",
      keyRequirements: [
        "Recht auf menschliche Intervention",
        "Aussagekräftige Informationen über Logik",
        "Recht auf Erklärung",
        "Recht auf Widerspruch",
        "Angemessene Schutzmaßnahmen",
        "Regelmäßige Überprüfung"
      ],
      aiSpecificRules: [
        "Explainable AI für automatisierte Entscheidungen",
        "Human-in-the-Loop bei rechtlichen Auswirkungen",
        "Privacy by Design für AI Systems",
        "Data Minimization für Training Data",
        "Right to Rectification für AI Decisions",
        "Impact Assessments für High-Risk AI"
      ],
      penalties: "Bis zu 20 Mio. € oder 4% des Jahresumsatzes",
      implementations: "Seit 2018 voll wirksam",
      icon: Shield,
      color: "from-orange-500 to-red-500",
      complexity: "Hoch"
    }
  ];
  const algorithmicTradingRequirements = [
    {
      category: "Algorithm Definition & Documentation",
      description: "Vollständige Beschreibung und Dokumentation der Trading-Algorithmen",
      requirements: [
        "Algorithmus-Logik und Entscheidungsparameter",
        "Risk Parameters und Limits",
        "Market Data Dependencies",
        "Execution Logic und Order Types",
        "Performance Metrics und KPIs",
        "Version Control und Change Management"
      ],
      aiSpecificConsiderations: [
        "Model Architecture Documentation",
        "Training Data Specifications",
        "Feature Engineering Documentation",
        "Model Performance Metrics",
        "Hyperparameter Documentation",
        "Model Interpretability Methods"
      ],
      implementationSteps: [
        "Technical Documentation erstellen",
        "Business Logic dokumentieren",
        "Risk Framework definieren",
        "Testing Procedures etablieren",
        "Change Management Prozesse",
        "Regulatory Reporting Setup"
      ],
      toolsAndTechnologies: [
        "Algorithm Documentation Platforms",
        "Version Control Systems (Git)",
        "Model Registry Solutions",
        "API Documentation Tools",
        "Compliance Management Systems",
        "Audit Trail Technologies"
      ],
      commonChallenges: [
        "Black Box Models erklärbar machen",
        "Dynamic Model Updates dokumentieren",
        "Real-time Documentation Updates",
        "Technical vs. Business Documentation",
        "Multi-jurisdictional Requirements",
        "Legacy System Integration"
      ],
      icon: FileText
    },
    {
      category: "Risk Controls & Circuit Breakers",
      description: "Technische Sicherungsmaßnahmen zur Risikobegrenzung",
      requirements: [
        "Pre-trade Risk Controls",
        "Real-time Position Monitoring",
        "Automatic Kill Switches",
        "Price und Volume Limits",
        "Market Impact Controls",
        "Latency Monitoring"
      ],
      aiSpecificConsiderations: [
        "Model Drift Detection",
        "Anomaly Detection Systems",
        "Confidence Thresholds",
        "Model Performance Monitoring",
        "Data Quality Checks",
        "Adversarial Attack Detection"
      ],
      implementationSteps: [
        "Risk Framework Design",
        "Technical Infrastructure Setup",
        "Monitoring Systems Implementation",
        "Alert und Escalation Procedures",
        "Testing und Validation",
        "Incident Response Planning"
      ],
      toolsAndTechnologies: [
        "Real-time Risk Engines",
        "Market Data Platforms",
        "Alert Management Systems",
        "Circuit Breaker Technologies",
        "Performance Monitoring Tools",
        "Incident Management Platforms"
      ],
      commonChallenges: [
        "Latency vs. Risk Control Trade-offs",
        "False Positive Management",
        "Market Regime Changes",
        "Cross-Asset Risk Aggregation",
        "Real-time Model Validation",
        "Regulatory Reporting Speed"
      ],
      icon: AlertTriangle
    },
    {
      category: "Market Making & Liquidity Provision",
      description: "Pflichten für algorithmische Market Making Aktivitäten",
      requirements: [
        "Kontinuierliche Quote-Bereitstellung",
        "Maximum Spread Requirements",
        "Minimum Quote Size",
        "Quote Response Time",
        "Market Stress Procedures",
        "Withdrawal Notifications"
      ],
      aiSpecificConsiderations: [
        "Dynamic Spread Optimization",
        "Inventory Risk Management",
        "Market Microstructure Learning",
        "Adverse Selection Detection",
        "Quote Skewing Algorithms",
        "Liquidity Prediction Models"
      ],
      implementationSteps: [
        "Market Making Strategy Definition",
        "Infrastructure Setup",
        "Risk Management Integration",
        "Regulatory Compliance Checks",
        "Performance Monitoring",
        "Stress Testing Implementation"
      ],
      toolsAndTechnologies: [
        "Market Making Platforms",
        "Order Management Systems",
        "Risk Management Solutions",
        "Market Data Analytics",
        "Latency Monitoring Tools",
        "Regulatory Reporting Systems"
      ],
      commonChallenges: [
        "Profitability vs. Obligations Balance",
        "Market Volatility Management",
        "Technology Infrastructure Costs",
        "Regulatory Changes Adaptation",
        "Cross-Market Coordination",
        "Inventory Risk Optimization"
      ],
      icon: TrendingUp
    },
    {
      category: "Best Execution & Transaction Reporting",
      description: "Bestmögliche Ausführung und Transparenz-Anforderungen",
      requirements: [
        "Best Execution Policy",
        "Transaction Cost Analysis",
        "Venue Selection Criteria",
        "Execution Quality Reports",
        "Post-Trade Transparency",
        "Client Reporting"
      ],
      aiSpecificConsiderations: [
        "AI-driven Venue Selection",
        "Dynamic Execution Strategies",
        "Transaction Cost Prediction",
        "Market Impact Optimization",
        "Execution Quality Metrics",
        "Algorithmic Performance Analysis"
      ],
      implementationSteps: [
        "Best Execution Framework",
        "TCA System Implementation",
        "Reporting Infrastructure",
        "Quality Assurance Processes",
        "Client Communication Setup",
        "Continuous Improvement Loop"
      ],
      toolsAndTechnologies: [
        "Transaction Cost Analysis Tools",
        "Execution Management Systems",
        "Market Data Platforms",
        "Reporting und Analytics Tools",
        "Performance Attribution Systems",
        "Client Portal Solutions"
      ],
      commonChallenges: [
        "Multi-dimensional Optimization",
        "Real-time Decision Making",
        "Data Quality und Availability",
        "Client Expectation Management",
        "Regulatory Interpretation",
        "Technology Integration Complexity"
      ],
      icon: Target
    }
  ];
  const riskManagementFramework = [
    {
      riskType: "Model Risk",
      definition: "Risiko von finanziellen Verlusten durch fehlerhafte oder unpassende Modelle",
      specificToAI: [
        "Overfitting und Generalization Gaps",
        "Data Drift und Concept Drift",
        "Adversarial Attacks auf Models",
        "Black Box Interpretability Issues",
        "Training Data Bias",
        "Model Performance Degradation"
      ],
      mitigationStrategies: [
        "Independent Model Validation",
        "Continuous Model Monitoring",
        "A/B Testing für Model Updates",
        "Shadow Mode Deployment",
        "Model Ensemble Approaches",
        "Regular Model Retraining"
      ],
      governanceRequirements: [
        "Model Risk Committee",
        "Model Inventory Management",
        "Model Documentation Standards",
        "Model Approval Processes",
        "Performance Monitoring KPIs",
        "Model Retirement Procedures"
      ],
      regulatoryGuidance: [
        "Basel III Model Risk Management",
        "SR 11-7 (US Federal Reserve)",
        "EBA Guidelines on Internal Models",
        "BCBS Principles for Sound Stress Testing"
      ],
      icon: Brain,
      severity: "High",
      frequency: "Medium"
    },
    {
      riskType: "Operational Risk",
      definition: "Risiko von Verlusten durch unzureichende oder versagende interne Prozesse",
      specificToAI: [
        "Algorithm Failure oder Malfunctions",
        "Data Pipeline Failures",
        "Model Deployment Errors",
        "Infrastructure Outages",
        "Cybersecurity Vulnerabilities",
        "Human Error in AI Operations"
      ],
      mitigationStrategies: [
        "Robust Testing und Quality Assurance",
        "Redundant System Architecture",
        "Real-time Monitoring und Alerting",
        "Business Continuity Planning",
        "Incident Response Procedures",
        "Regular Disaster Recovery Testing"
      ],
      governanceRequirements: [
        "Operational Risk Framework",
        "Technology Risk Management",
        "Business Continuity Planning",
        "Incident Management Processes",
        "Change Management Controls",
        "Third-Party Risk Management"
      ],
      regulatoryGuidance: [
        "Basel III Operational Risk Framework",
        "EBA Guidelines on ICT Risk Management",
        "PCI DSS for Payment Systems",
        "ISO 31000 Risk Management"
      ],
      icon: Settings,
      severity: "High",
      frequency: "High"
    },
    {
      riskType: "Market Risk",
      definition: "Risiko von Verlusten durch ungünstige Marktpreisbewegungen",
      specificToAI: [
        "Model-based Trading Losses",
        "Market Regime Change Impacts",
        "Liquidity Risk in AI Trading",
        "Concentration Risk durch AI Bias",
        "Flash Crashes durch Algorithmic Trading",
        "Cross-Asset Correlation Breakdown"
      ],
      mitigationStrategies: [
        "Dynamic Risk Limits",
        "Stress Testing und Scenario Analysis",
        "Diversification Strategies",
        "Hedging Mechanisms",
        "Real-time P&L Monitoring",
        "Circuit Breakers und Kill Switches"
      ],
      governanceRequirements: [
        "Market Risk Committee",
        "Risk Limit Framework",
        "Value-at-Risk Models",
        "Stress Testing Programs",
        "Risk Reporting Standards",
        "Portfolio Management Controls"
      ],
      regulatoryGuidance: [
        "Basel III Market Risk Framework",
        "FRTB (Fundamental Review of Trading Book)",
        "MiFID II Risk Management",
        "IOSCO Principles for Financial Benchmarks"
      ],
      icon: TrendingDown,
      severity: "Very High",
      frequency: "High"
    },
    {
      riskType: "Compliance Risk",
      definition: "Risiko von regulatorischen Sanktionen durch Nichteinhaltung von Vorschriften",
      specificToAI: [
        "Algorithmic Trading Compliance Failures",
        "Data Privacy Violations",
        "Discriminatory AI Decisions",
        "Inadequate Model Documentation",
        "Missing Human Oversight",
        "Regulatory Reporting Errors"
      ],
      mitigationStrategies: [
        "Comprehensive Compliance Framework",
        "Regular Regulatory Training",
        "Automated Compliance Monitoring",
        "Legal Review Processes",
        "Regulatory Change Management",
        "External Compliance Audits"
      ],
      governanceRequirements: [
        "Compliance Committee",
        "Regulatory Risk Assessment",
        "Compliance Monitoring Program",
        "Policy Management Framework",
        "Training und Awareness Programs",
        "Incident Reporting Procedures"
      ],
      regulatoryGuidance: [
        "MiFID II Compliance Requirements",
        "GDPR/DSGVO Art. 22",
        "PCI DSS Compliance Standards",
        "Basel III Compliance Framework"
      ],
      icon: Scale,
      severity: "Very High",
      frequency: "Medium"
    }
  ];
  const complianceChecklist = [
    {
      category: "Regulatory Documentation",
      items: [
        "Algorithm-Definition vollständig dokumentiert",
        "Risk Management Framework implementiert",
        "Compliance Policies aktualisiert und genehmigt",
        "Model Validation Procedures etabliert",
        "Regulatory Reporting Processes eingerichtet",
        "Business Continuity Plan erstellt und getestet",
        "Data Protection Impact Assessment durchgeführt",
        "Third-Party Risk Assessments abgeschlossen"
      ],
      weight: 30
    },
    {
      category: "Technical Implementation",
      items: [
        "Pre-trade Risk Controls implementiert",
        "Real-time Monitoring System operativ",
        "Circuit Breakers und Kill Switches getestet",
        "Model Performance Monitoring eingerichtet",
        "Data Quality Checks automatisiert",
        "Backup und Recovery Systeme validiert",
        "Security Controls implementiert und getestet",
        "API und Interface Documentation aktuell"
      ],
      weight: 25
    },
    {
      category: "Governance & Oversight",
      items: [
        "Risk Committee etabliert und aktiv",
        "Model Approval Prozesse definiert",
        "Human Oversight Procedures implementiert",
        "Change Management Framework operativ",
        "Incident Response Procedures getestet",
        "Regular Model Reviews geplant",
        "Compliance Training durchgeführt",
        "External Audit Schedule definiert"
      ],
      weight: 20
    },
    {
      category: "Testing & Validation",
      items: [
        "Backtesting Framework implementiert",
        "Stress Testing Scenarios definiert",
        "Model Validation completed",
        "Penetration Testing durchgeführt",
        "User Acceptance Testing abgeschlossen",
        "Performance Testing validiert",
        "Disaster Recovery Testing erfolgreich",
        "Regulatory Sandbox Testing (falls anwendbar)"
      ],
      weight: 15
    },
    {
      category: "Reporting & Monitoring",
      items: [
        "Daily Risk Reports automatisiert",
        "Regulatory Reporting Templates erstellt",
        "Real-time Dashboard operativ",
        "Exception Reporting eingerichtet",
        "Performance Analytics verfügbar",
        "Audit Trail Logging aktiviert",
        "Client Reporting Capabilities getestet",
        "Management Information System operativ"
      ],
      weight: 10
    }
  ];
  const practicalImplementationGuide = [
    {
      phase: "Assessment & Planning",
      duration: "4-6 Wochen",
      description: "Umfassende Analyse der aktuellen Situation und Compliance-Gaps",
      keyActivities: [
        "Regulatory Landscape Analysis",
        "Current State Assessment",
        "Gap Analysis durchführen",
        "Risk Assessment und Impact Analysis",
        "Implementation Roadmap erstellen",
        "Budget und Resource Planning"
      ],
      deliverables: [
        "Compliance Gap Assessment Report",
        "Regulatory Requirements Matrix",
        "Risk Assessment Documentation",
        "Implementation Roadmap",
        "Resource und Budget Plan",
        "Executive Summary für Management"
      ],
      stakeholders: [
        "Compliance Officer",
        "Risk Manager",
        "Technology Lead",
        "Legal Counsel",
        "Business Unit Heads",
        "External Consultants"
      ],
      successCriteria: [
        "Vollständige Gap Identifikation",
        "Klare Implementation Priorities",
        "Management Buy-in erhalten",
        "Realistic Timeline definiert"
      ],
      icon: Search
    },
    {
      phase: "Framework Design",
      duration: "6-8 Wochen",
      description: "Design der Compliance- und Risk Management Frameworks",
      keyActivities: [
        "Governance Structure Definition",
        "Policy und Procedure Development",
        "Technical Architecture Design",
        "Control Framework Implementation",
        "Monitoring Framework Setup",
        "Reporting Framework Design"
      ],
      deliverables: [
        "Governance Charter",
        "Policy und Procedure Documents",
        "Technical Architecture Blueprint",
        "Control Matrix",
        "Monitoring Framework Specification",
        "Reporting Templates"
      ],
      stakeholders: [
        "Risk Committee",
        "Technology Architecture Team",
        "Legal und Compliance",
        "Business Process Owners",
        "External Advisors"
      ],
      successCriteria: [
        "Comprehensive Framework Design",
        "Regulatory Approval (falls erforderlich)",
        "Technical Feasibility confirmed",
        "Stakeholder Alignment achieved"
      ],
      icon: Layers
    },
    {
      phase: "Technical Implementation",
      duration: "12-16 Wochen",
      description: "Technische Umsetzung der Compliance-Infrastruktur",
      keyActivities: [
        "Risk Control Systems Development",
        "Monitoring Infrastructure Setup",
        "Reporting System Implementation",
        "Integration Testing",
        "Security Implementation",
        "Performance Optimization"
      ],
      deliverables: [
        "Production-ready Systems",
        "Integration Test Results",
        "Security Assessment Report",
        "Performance Benchmarks",
        "User Documentation",
        "Operational Procedures"
      ],
      stakeholders: [
        "Development Team",
        "Infrastructure Team",
        "Security Team",
        "QA Team",
        "Business Users",
        "External Vendors"
      ],
      successCriteria: [
        "All Systems operational",
        "Performance requirements met",
        "Security requirements satisfied",
        "Integration tests passed"
      ],
      icon: Code
    },
    {
      phase: "Testing & Validation",
      duration: "4-6 Wochen",
      description: "Umfassende Tests und Validierung aller Systeme",
      keyActivities: [
        "End-to-End Testing",
        "Stress Testing durchführen",
        "Regulatory Compliance Testing",
        "User Acceptance Testing",
        "Disaster Recovery Testing",
        "Performance Validation"
      ],
      deliverables: [
        "Test Execution Reports",
        "Validation Certificates",
        "Performance Test Results",
        "Compliance Verification",
        "User Acceptance Sign-off",
        "Go-Live Readiness Assessment"
      ],
      stakeholders: [
        "QA Team",
        "Business Users",
        "Compliance Team",
        "Risk Management",
        "External Auditors",
        "Regulatory Contacts"
      ],
      successCriteria: [
        "All tests passed successfully",
        "Regulatory requirements validated",
        "User acceptance achieved",
        "Go-live approval received"
      ],
      icon: CheckSquare
    },
    {
      phase: "Go-Live & Monitoring",
      duration: "Ongoing",
      description: "Produktive Einführung und kontinuierliche Überwachung",
      keyActivities: [
        "Production Deployment",
        "Real-time Monitoring Setup",
        "Incident Response Procedures",
        "Performance Monitoring",
        "Continuous Improvement",
        "Regular Compliance Reviews"
      ],
      deliverables: [
        "Production System",
        "Monitoring Dashboard",
        "Incident Response Plan",
        "Performance Reports",
        "Compliance Status Reports",
        "Improvement Recommendations"
      ],
      stakeholders: [
        "Operations Team",
        "Risk Management",
        "Compliance Officer",
        "Business Management",
        "External Auditors",
        "Regulatory Bodies"
      ],
      successCriteria: [
        "Stable production operation",
        "Compliance objectives met",
        "No regulatory issues",
        "Continuous improvement achieved"
      ],
      icon: Activity
    }
  ];
  const toggleExpanded = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };
  const toggleChecked = (itemId) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(itemId)) {
      newChecked.delete(itemId);
    } else {
      newChecked.add(itemId);
    }
    setCheckedItems(newChecked);
    complianceChecklist.reduce((acc, cat) => acc + cat.items.length, 0);
    const weightedScore = complianceChecklist.reduce((acc, cat) => {
      const categoryChecked = cat.items.filter(
        (_, idx) => newChecked.has(`${complianceChecklist.indexOf(cat)}-${idx}`)
      ).length;
      return acc + categoryChecked / cat.items.length * cat.weight;
    }, 0);
    setComplianceScore(weightedScore);
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-b from-gray-50 to-white", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs("div", { ref: heroRef, className: "relative overflow-hidden bg-gradient-to-br from-gray-900 via-green-900 to-blue-900", children: [
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          style: { y, opacity },
          className: "absolute inset-0",
          children: [
            /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[url('/grid.svg')] opacity-10" }),
            /* @__PURE__ */ jsx("div", { className: "absolute top-20 left-10 w-72 h-72 bg-green-500 rounded-full blur-3xl opacity-30" }),
            /* @__PURE__ */ jsx("div", { className: "absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20" })
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
            /* @__PURE__ */ jsx("div", { className: "flex items-center justify-center mb-6", children: /* @__PURE__ */ jsx("div", { className: "p-4 bg-gradient-to-br from-green-600 to-blue-600 rounded-2xl shadow-2xl", children: /* @__PURE__ */ jsx(TrendingUp, { className: "w-16 h-16 text-white" }) }) }),
            /* @__PURE__ */ jsx("h1", { id: "financial-ai-compliance", className: "text-5xl font-bold text-white mb-6", children: "Financial AI & Algorithmic Trading Rules" }),
            /* @__PURE__ */ jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto mb-8", children: "Navigieren Sie sicher durch die komplexe Regulatorik von KI im Finanzsektor: MiFID II, Basel III, PCI DSS und DSGVO-konforme Algorithmic Trading Systeme" }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(Scale, { className: "w-4 h-4 mr-2" }),
                "4 Regulatory Frameworks"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 mr-2" }),
                "Algorithmic Trading"
              ] }),
              /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "px-4 py-2 text-white border-white/30 bg-white/10", children: [
                /* @__PURE__ */ jsx(CheckSquare, { className: "w-4 h-4 mr-2" }),
                "Compliance Framework"
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
                /* @__PURE__ */ jsx("span", { children: "Financial AI Regulatory Landscape" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#regulatory-landscape",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(Scale, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Regulatory Landscape" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#algorithmic-trading-requirements",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Algorithmic Trading Requirements" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#risk-management-framework",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Risk Management Framework" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#compliance-framework",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(CheckSquare, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Compliance Framework" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#implementation-roadmap",
              className: "flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors p-2 rounded hover:bg-blue-50 min-h-[48px]",
              children: [
                /* @__PURE__ */ jsx(Code, { className: "w-4 h-4 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: "Implementation Roadmap" })
              ]
            }
          )
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "w-full", children: [
      /* @__PURE__ */ jsxs(TabsContent, { value: "overview", className: "space-y-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
          /* @__PURE__ */ jsx("h2", { id: "ueberblick", className: "text-3xl font-bold mb-4", children: "Financial AI Regulatory Landscape" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600 max-w-3xl mx-auto", children: "Der Finanzsektor unterliegt strengen regulatorischen Anforderungen, die sich mit dem Einsatz von KI und algorithmischen Trading-Systemen deutlich verschärfen. Diese Seite hilft Ihnen dabei, compliant und erfolgreich zu bleiben." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: [
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-red-100 bg-gradient-to-br from-red-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "w-5 h-5 text-red-500" }),
              "Regulatory Complexity"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Multiple überlappende Regulierungen mit spezifischen AI-Anforderungen erfordern koordinierte Compliance-Strategien." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Scale, { className: "w-4 h-4 text-blue-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "MiFID II & Algorithmic Trading" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Building, { className: "w-4 h-4 text-green-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Basel III/IV Model Risk" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-purple-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "GDPR Article 22" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-orange-100 bg-gradient-to-br from-orange-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-orange-500" }),
              "Technical Requirements"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Real-time Monitoring, Circuit Breakers und explainable AI sind technische Mindestanforderungen für Financial AI." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Zap, { className: "w-4 h-4 text-yellow-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Real-time Risk Controls" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 text-indigo-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Model Interpretability" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Activity, { className: "w-4 h-4 text-green-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Continuous Monitoring" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Euro, { className: "w-5 h-5 text-blue-500" }),
              "Business Impact"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Non-Compliance kann zu erheblichen Strafen und operationellen Einschränkungen führen." }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Ban, { className: "w-4 h-4 text-red-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Bis zu 10% Jahresumsatz" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-orange-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Licensing Restrictions" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(TrendingDown, { className: "w-4 h-4 text-red-500" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Reputation Damage" })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Lightbulb, { className: "w-5 h-5 text-blue-500" }),
            "Warum Financial AI Compliance kritisch ist"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-green-700", children: "Business Opportunities:" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Competitive Advantage durch konforme AI-Innovation" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Früher Markteintritt in regulierten AI-Bereichen" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Vertrauen von Kunden und Regulatoren" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Reduced regulatory scrutiny" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-red-700", children: "Risk Mitigation:" }),
              /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Vermeidung von Multi-Millionen-Euro Strafen" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Schutz vor License Revocation" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Operational Risk Reduction" })
                ] }),
                /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Legal Liability Protection" })
                ] })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "w-5 h-5" }),
            "Navigation durch diesen Guide"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: tabs.slice(1).map((tab, index) => {
            const Icon = tab.icon;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                onClick: () => setActiveTab(tab.id),
                className: "p-4 border rounded-lg hover:shadow-md transition-shadow text-left",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-100 rounded-lg", children: /* @__PURE__ */ jsx(Icon, { className: "w-5 h-5 text-blue-600" }) }),
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: tab.label })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-sm text-gray-600", children: [
                    index === 0 && "Überblick über MiFID II, Basel III, PCI DSS und GDPR",
                    index === 1 && "Spezifische Anforderungen für Algorithmic Trading",
                    index === 2 && "Model Risk und Operational Risk Management",
                    index === 3 && "Praktisches Compliance Framework",
                    index === 4 && "5-Phasen Implementation Roadmap"
                  ] })
                ]
              },
              tab.id
            );
          }) }) })
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
                to: "/wissen/ki-datenschutz/hr-ai-compliance",
                className: "flex items-center gap-3 p-4 border rounded-lg hover:border-blue-300 hover:shadow-md transition-all min-h-[48px]",
                children: [
                  /* @__PURE__ */ jsx(Users, { className: "w-5 h-5 text-blue-600 flex-shrink-0" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800", children: "HR AI Compliance" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Compliance für KI-Systeme im Personalwesen" })
                  ] }),
                  /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 text-blue-600 flex-shrink-0" })
                ]
              }
            )
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "regulatory-landscape", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { id: "regulatory-landscape", className: "text-3xl font-bold mb-4", children: "Regulatory Landscape" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Die vier wichtigsten Regulierungsrahmen für Financial AI" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: regulatoryFramework.map((regulation, index) => {
          const Icon = regulation.icon;
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
                      regulation.color
                    ), children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                        /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: regulation.regulation }),
                        /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
                          "Komplexität: ",
                          regulation.complexity
                        ] })
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-1", children: regulation.scope }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: regulation.relevance })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "sm",
                      onClick: () => toggleExpanded(`reg-${index}`),
                      children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                        "w-4 h-4 transition-transform",
                        expandedSection === `reg-${index}` && "rotate-180"
                      ) })
                    }
                  )
                ] }) }),
                expandedSection === `reg-${index}` && /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                        /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4" }),
                        "Allgemeine Anforderungen"
                      ] }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: regulation.keyRequirements.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-blue-500 mt-1 flex-shrink-0" }),
                        /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: req })
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "p-4 bg-red-50 rounded-lg", children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-red-800", children: "Penalties" }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-red-700", children: regulation.penalties }),
                      /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-red-600 border-red-300", children: regulation.implementations }) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsxs("h4", { className: "font-semibold mb-3 flex items-center gap-2", children: [
                      /* @__PURE__ */ jsx(Brain, { className: "w-4 h-4 text-purple-500" }),
                      "AI-Spezifische Regeln"
                    ] }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: regulation.aiSpecificRules.map((rule, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(Sparkles, { className: "w-3 h-3 text-purple-500 mt-1 flex-shrink-0" }),
                      /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: rule })
                    ] }, idx)) })
                  ] })
                ] }) })
              ] })
            },
            regulation.regulation
          );
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "algorithmic-trading", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { id: "algorithmic-trading-requirements", className: "text-3xl font-bold mb-4", children: "Algorithmic Trading Requirements" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Spezifische Compliance-Anforderungen für algorithmische Trading-Systeme" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: algorithmicTradingRequirements.map((requirement, index) => {
          const Icon = requirement.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl text-white", children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-xl mb-2", children: requirement.category }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: requirement.description })
                ] })
              ] }),
              /* @__PURE__ */ jsx(
                Button,
                {
                  variant: "ghost",
                  size: "sm",
                  onClick: () => toggleExpanded(`trading-${index}`),
                  children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                    "w-4 h-4 transition-transform",
                    expandedSection === `trading-${index}` && "rotate-180"
                  ) })
                }
              )
            ] }) }),
            expandedSection === `trading-${index}` && /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Tabs, { defaultValue: "requirements", className: "w-full", children: [
              /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-5", children: [
                /* @__PURE__ */ jsx(TabsTrigger, { value: "requirements", children: "Requirements" }),
                /* @__PURE__ */ jsx(TabsTrigger, { value: "ai-considerations", children: "AI-Specific" }),
                /* @__PURE__ */ jsx(TabsTrigger, { value: "implementation", children: "Implementation" }),
                /* @__PURE__ */ jsx(TabsTrigger, { value: "tools", children: "Tools" }),
                /* @__PURE__ */ jsx(TabsTrigger, { value: "challenges", children: "Challenges" })
              ] }),
              /* @__PURE__ */ jsx(TabsContent, { value: "requirements", className: "mt-4", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: requirement.requirements.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: req })
              ] }, idx)) }) }),
              /* @__PURE__ */ jsx(TabsContent, { value: "ai-considerations", className: "mt-4", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: requirement.aiSpecificConsiderations.map((consideration, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                /* @__PURE__ */ jsx(Brain, { className: "w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: consideration })
              ] }, idx)) }) }),
              /* @__PURE__ */ jsx(TabsContent, { value: "implementation", className: "mt-4", children: /* @__PURE__ */ jsx("ol", { className: "space-y-2", children: requirement.implementationSteps.map((step, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
                /* @__PURE__ */ jsx("span", { className: "flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-semibold", children: idx + 1 }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: step })
              ] }, idx)) }) }),
              /* @__PURE__ */ jsx(TabsContent, { value: "tools", className: "mt-4", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-3", children: requirement.toolsAndTechnologies.map((tool, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "justify-start p-2", children: tool }, idx)) }) }),
              /* @__PURE__ */ jsx(TabsContent, { value: "challenges", className: "mt-4", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: requirement.commonChallenges.map((challenge, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                /* @__PURE__ */ jsx(AlertTriangle, { className: "w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" }),
                /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: challenge })
              ] }, idx)) }) })
            ] }) })
          ] }, requirement.category);
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "risk-management", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { id: "risk-management-framework", className: "text-3xl font-bold mb-4", children: "Risk Management Framework" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Umfassendes Risikomanagement für Financial AI Systeme" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: riskManagementFramework.map((risk, index) => {
          const Icon = risk.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "h-full", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-start justify-between mb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl text-white", children: /* @__PURE__ */ jsx(Icon, { className: "w-6 h-6" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: risk.riskType }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2 mt-1", children: [
                    /* @__PURE__ */ jsx(Badge, { variant: risk.severity === "Very High" ? "destructive" : risk.severity === "High" ? "default" : "secondary", children: risk.severity }),
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
                      risk.frequency,
                      " Frequency"
                    ] })
                  ] })
                ] })
              ] }) }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-4", children: risk.definition })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "AI-Spezifische Risiken:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
                  risk.specificToAI.slice(0, 3).map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "w-3 h-3 text-red-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: item })
                  ] }, idx)),
                  risk.specificToAI.length > 3 && /* @__PURE__ */ jsxs("li", { className: "text-xs text-gray-500", children: [
                    "+",
                    risk.specificToAI.length - 3,
                    " weitere..."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Mitigation Strategies:" }),
                /* @__PURE__ */ jsxs("ul", { className: "space-y-1", children: [
                  risk.mitigationStrategies.slice(0, 3).map((strategy, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-xs", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "w-3 h-3 text-green-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: strategy })
                  ] }, idx)),
                  risk.mitigationStrategies.length > 3 && /* @__PURE__ */ jsxs("li", { className: "text-xs text-gray-500", children: [
                    "+",
                    risk.mitigationStrategies.length - 3,
                    " weitere..."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-sm", children: "Regulatory Guidance:" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1", children: risk.regulatoryGuidance.map((guidance, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: guidance }, idx)) })
              ] })
            ] }) })
          ] }, risk.riskType);
        }) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "compliance-framework", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { id: "compliance-framework", className: "text-3xl font-bold mb-4", children: "Compliance Framework" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "Überprüfen Sie Ihre Compliance-Readiness" })
        ] }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-6", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(BarChart3, { className: "w-5 h-5" }),
            "Compliance Score"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm mb-2", children: [
                /* @__PURE__ */ jsx("span", { children: "Gesamt-Compliance" }),
                /* @__PURE__ */ jsxs("span", { children: [
                  Math.round(complianceScore),
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsx(Progress, { value: complianceScore, className: "h-3" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "text-2xl font-bold",
                  complianceScore >= 80 ? "text-green-600" : complianceScore >= 60 ? "text-yellow-600" : "text-red-600"
                ), children: complianceScore >= 80 ? "Excellent" : complianceScore >= 60 ? "Good" : "Needs Work" }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Status" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-blue-600", children: checkedItems.size }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Items Completed" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
                /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-purple-600", children: complianceChecklist.reduce((acc, cat) => acc + cat.items.length, 0) - checkedItems.size }),
                /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-600", children: "Remaining" })
              ] })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-4", children: complianceChecklist.map((category, categoryIndex) => /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: category.category }),
            /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
              "Weight: ",
              category.weight,
              "%"
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: category.items.map((item, itemIndex) => {
            const itemId = `${categoryIndex}-${itemIndex}`;
            return /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsx(
                "button",
                {
                  onClick: () => toggleChecked(itemId),
                  className: "flex-shrink-0 mt-0.5",
                  children: checkedItems.has(itemId) ? /* @__PURE__ */ jsx(CheckSquare, { className: "w-5 h-5 text-green-500" }) : /* @__PURE__ */ jsx(Square, { className: "w-5 h-5 text-gray-400" })
                }
              ),
              /* @__PURE__ */ jsx("span", { className: cn(
                "text-sm",
                checkedItems.has(itemId) ? "line-through text-gray-500" : "text-gray-700"
              ), children: item })
            ] }, itemIndex);
          }) }) })
        ] }, category.category)) })
      ] }),
      /* @__PURE__ */ jsxs(TabsContent, { value: "implementation", className: "space-y-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center mb-8", children: [
          /* @__PURE__ */ jsx("h2", { id: "implementation-roadmap", className: "text-3xl font-bold mb-4", children: "Implementation Roadmap" }),
          /* @__PURE__ */ jsx("p", { className: "text-lg text-gray-600", children: "5-Phasen Ansatz für erfolgreiche Financial AI Compliance" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-6", children: practicalImplementationGuide.map((phase, index) => {
          const Icon = phase.icon;
          return /* @__PURE__ */ jsxs(Card, { className: "overflow-hidden", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "p-3 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl text-white", children: /* @__PURE__ */ jsx(Icon, { className: "w-8 h-8" }) }),
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
                  onClick: () => toggleExpanded(`impl-${index}`),
                  children: /* @__PURE__ */ jsx(ChevronDown, { className: cn(
                    "w-4 h-4 transition-transform",
                    expandedSection === `impl-${index}` && "rotate-180"
                  ) })
                }
              )
            ] }) }),
            expandedSection === `impl-${index}` && /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Key Activities:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: phase.keyActivities.map((activity, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: activity })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Stakeholders:" }),
                  /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: phase.stakeholders.map((stakeholder, idx) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: stakeholder }, idx)) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Deliverables:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: phase.deliverables.map((deliverable, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(FileCheck, { className: "w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: deliverable })
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Success Criteria:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: phase.successCriteria.map((criteria, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(Target, { className: "w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" }),
                    /* @__PURE__ */ jsx("span", { className: "text-gray-700", children: criteria })
                  ] }, idx)) })
                ] })
              ] })
            ] }) })
          ] }, phase.phase);
        }) }),
        /* @__PURE__ */ jsxs(Card, { className: "bg-gradient-to-br from-green-50 to-blue-50 border-2 border-green-200", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5" }),
            "Bereit für den Start?"
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
            /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Beginnen Sie Ihre Financial AI Compliance Journey mit unseren praktischen Tools und Templates." }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs(Button, { className: "bg-gradient-to-r from-green-600 to-blue-600", children: [
                /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
                "Compliance Assessment"
              ] }),
              /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
                /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4 mr-2" }),
                "Implementation Templates"
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
  FinancialAICompliance as default
};
