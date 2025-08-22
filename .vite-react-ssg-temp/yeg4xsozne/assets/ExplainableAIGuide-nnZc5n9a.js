import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Link } from "react-router-dom";
import { Eye, Scale, Brain, Shield, List, Lightbulb, BarChart3, GitBranch, CheckCircle2, X, Code, AlertCircle, Database, Settings, ShieldCheck, Activity, FileCheck, Monitor, Download, MessageSquare } from "lucide-react";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "../main.mjs";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-tabs";
import "@radix-ui/react-progress";
const ExplainableAIGuide = () => {
  useEffect(() => {
    document.title = "Explainable AI Guide – DSGVO Art. 22 konforme KI-Systeme";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Implementierung erklärbarer KI für DSGVO Art. 22: LIME, SHAP & Counterfactuals. Compliance-konforme XAI-Lösungen. Jetzt umsetzen!");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Implementierung erklärbarer KI für DSGVO Art. 22: LIME, SHAP & Counterfactuals. Compliance-konforme XAI-Lösungen. Jetzt umsetzen!";
      document.head.appendChild(meta);
    }
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1";
      document.head.appendChild(meta);
    }
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      const link = document.createElement("link");
      link.rel = "canonical";
      link.href = "https://dataguard.de/wissen/ki-datenschutz/explainable-ai";
      document.head.appendChild(link);
    }
    const ogTags = [
      { property: "og:title", content: "Explainable AI Guide – DSGVO Art. 22 konforme KI-Systeme" },
      { property: "og:description", content: "Implementierung erklärbarer KI für DSGVO Art. 22: LIME, SHAP & Counterfactuals. Compliance-konforme XAI-Lösungen. Jetzt umsetzen!" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://dataguard.de/wissen/ki-datenschutz/explainable-ai" }
    ];
    ogTags.forEach((tag) => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!existingTag) {
        const meta = document.createElement("meta");
        meta.setAttribute("property", tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Explainable AI Guide – DSGVO Art. 22 konforme KI-Systeme",
      "description": "Implementierung erklärbarer KI für DSGVO Art. 22: LIME, SHAP & Counterfactuals. Compliance-konforme XAI-Lösungen. Jetzt umsetzen!",
      "author": {
        "@type": "Organization",
        "name": "DataGuard"
      },
      "datePublished": "2024-01-15",
      "dateModified": (/* @__PURE__ */ new Date()).toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://dataguard.de/wissen/ki-datenschutz/explainable-ai"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://dataguard.de/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Wissen",
            "item": "https://dataguard.de/wissen"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "KI-Datenschutz",
            "item": "https://dataguard.de/wissen/ki-datenschutz"
          },
          {
            "@type": "ListItem",
            "position": 4,
            "name": "Explainable AI",
            "item": "https://dataguard.de/wissen/ki-datenschutz/explainable-ai"
          }
        ]
      }
    };
    const scriptTag = document.createElement("script");
    scriptTag.type = "application/ld+json";
    scriptTag.text = JSON.stringify(structuredData);
    document.head.appendChild(scriptTag);
    return () => {
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);
  const [activeMethod, setActiveMethod] = useState("lime");
  const [completedSteps, setCompletedSteps] = useState({});
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedScenario, setSelectedScenario] = useState("credit-scoring");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const xaiMethods = [
    {
      title: "LIME",
      subtitle: "Local Interpretable Model-Agnostic Explanations",
      icon: Lightbulb,
      color: "bg-yellow-500",
      description: "Lokale Erklärungen für einzelne Vorhersagen",
      strengths: ["Model-agnostic", "Intuitive Erklärungen", "Schnelle Implementierung"],
      weaknesses: ["Nur lokale Sicht", "Sampling-abhängig", "Instabilität"],
      use_cases: ["Einzelfallprüfung", "Bias-Detection", "Regulatory Compliance"],
      complexity: "Niedrig",
      article22_compliance: "Hoch"
    },
    {
      title: "SHAP",
      subtitle: "SHapley Additive exPlanations",
      icon: BarChart3,
      color: "bg-blue-500",
      description: "Feature-basierte Beitragsanalyse mit Shapley-Werten",
      strengths: ["Theoretisch fundiert", "Konsistente Erklärungen", "Globale + lokale Sicht"],
      weaknesses: ["Rechenintensiv", "Komplexe Interpretation", "Korrelationseffekte"],
      use_cases: ["Feature-Analyse", "Model Debugging", "Fairness-Assessment"],
      complexity: "Mittel",
      article22_compliance: "Sehr Hoch"
    },
    {
      title: "Attention Maps",
      subtitle: "Neural Network Attention Mechanisms",
      icon: Eye,
      color: "bg-purple-500",
      description: "Visualisierung der Aufmerksamkeit in neuronalen Netzen",
      strengths: ["Natürliche Integration", "Detaillierte Einblicke", "Echtzeit-fähig"],
      weaknesses: ["Nur für Attention-Modelle", "Interpretationsaufwand", "Technisches Know-how"],
      use_cases: ["NLP-Modelle", "Computer Vision", "Sequence-Modelling"],
      complexity: "Hoch",
      article22_compliance: "Mittel"
    },
    {
      title: "Counterfactual Explanations",
      subtitle: "Was-wäre-wenn Szenarien",
      icon: GitBranch,
      color: "bg-green-500",
      description: "Alternative Szenarien für andere Entscheidungen",
      strengths: ["Actionable Insights", "Benutzerfreundlich", "Direkte Handlungsempfehlungen"],
      weaknesses: ["Rechenaufwendig", "Realitätsbezug", "Mehrere Lösungen möglich"],
      use_cases: ["Kreditentscheidungen", "Personalauswahl", "Medizinische Diagnose"],
      complexity: "Mittel",
      article22_compliance: "Sehr Hoch"
    }
  ];
  const art22Requirements = {
    legal_framework: {
      paragraphs: [
        {
          section: "Art. 22 (1)",
          text: "Die betroffene Person hat das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung [...] beruhenden Entscheidung unterworfen zu werden",
          ai_implication: "KI-Systeme müssen explainable sein, wenn sie autonome Entscheidungen treffen"
        },
        {
          section: "Art. 22 (3)",
          text: "Angemessene Maßnahmen zum Schutz der Rechte und Freiheiten sowie der berechtigten Interessen der betroffenen Person",
          ai_implication: "XAI-Methoden als technische Schutzmaßnahme implementieren"
        },
        {
          section: "Erwägungsgrund 71",
          text: "Aussagekräftige Informationen über die involvierte Logik sowie die Tragweite und die angestrebten Auswirkungen",
          ai_implication: "Detaillierte Erklärungen der ML-Modelllogik erforderlich"
        }
      ]
    },
    implementation_requirements: [
      {
        requirement: "Meaningful Information",
        description: "Aussagekräftige Informationen über die Entscheidungslogik",
        xai_methods: ["SHAP", "LIME", "Counterfactuals"],
        implementation: "Feature-Importance + lokale Erklärungen",
        documentation: "Algorithmus-Dokumentation mit Beispielen"
      },
      {
        requirement: "Human Oversight",
        description: "Menschliche Aufsicht und Überprüfungsmöglichkeit",
        xai_methods: ["Attention Maps", "Decision Trees"],
        implementation: "Human-in-the-Loop Interface",
        documentation: "Eskalationsprozesse definieren"
      },
      {
        requirement: "Contest Mechanism",
        description: "Möglichkeit der Anfechtung automatisierter Entscheidungen",
        xai_methods: ["Counterfactual Explanations"],
        implementation: "Appeal-Process mit XAI-Begründungen",
        documentation: "Widerspruchsverfahren dokumentieren"
      },
      {
        requirement: "Impact Assessment",
        description: "Bewertung der Tragweite und Auswirkungen",
        xai_methods: ["Global Feature Importance", "Bias Detection"],
        implementation: "Regelmäßige Fairness-Audits",
        documentation: "Impact-Monitoring Dashboard"
      }
    ]
  };
  const implementationScenarios = {
    "credit-scoring": {
      title: "Kreditscoring System",
      description: "Automatisierte Kreditwürdigkeitsprüfung mit DSGVO Art. 22 Compliance",
      risk_level: "Hoch",
      affected_rights: ["Vertragsabschluss", "Finanzielle Auswirkungen", "Diskriminierungsrisiko"],
      required_xai: ["SHAP für Feature-Importance", "LIME für Einzelerklärungen", "Counterfactuals für Appeals"],
      implementation: {
        data_requirements: [
          "Vollständige Feature-Dokumentation",
          "Bias-Monitoring für geschützte Merkmale",
          "Historische Entscheidungsdaten"
        ],
        technical_setup: [
          "SHAP-Pipeline für globale Erklärungen",
          "LIME-Integration für Kundenanfragen",
          "Counterfactual-Generator für Ablehnungen",
          "Human-Review Dashboard"
        ],
        compliance_measures: [
          "Quarterly Fairness Audits",
          "Automated Bias Detection",
          "Human Appeal Process",
          "Regulatory Reporting"
        ]
      },
      code_example: `# Kreditscoring XAI Pipeline
import shap
import lime
import pandas as pd
from sklearn.ensemble import RandomForestClassifier

class CreditScoringXAI:
    def __init__(self, model, training_data):
        self.model = model
        self.training_data = training_data
        
        # SHAP Explainer für globale Erklärungen
        self.shap_explainer = shap.TreeExplainer(model)
        
        # LIME Explainer für lokale Erklärungen
        self.lime_explainer = lime.lime_tabular.LimeTabularExplainer(
            training_data.values,
            feature_names=training_data.columns,
            class_names=['Abgelehnt', 'Genehmigt'],
            mode='classification'
        )
    
    def explain_decision(self, customer_data, explanation_type='both'):
        """
        DSGVO Art. 22 konforme Entscheidungserklärung
        """
        prediction = self.model.predict_proba([customer_data])[0]
        decision = 'Genehmigt' if prediction[1] > 0.5 else 'Abgelehnt'
        
        explanation = {
            'decision': decision,
            'confidence': max(prediction),
            'customer_id': customer_data.get('customer_id'),
            'timestamp': datetime.now()
        }
        
        if explanation_type in ['both', 'global']:
            # SHAP Werte für Feature-Importance
            shap_values = self.shap_explainer.shap_values(customer_data)
            explanation['global_factors'] = {
                'top_positive_factors': self.get_top_factors(shap_values[1], positive=True),
                'top_negative_factors': self.get_top_factors(shap_values[1], positive=False),
                'feature_importance': dict(zip(self.training_data.columns, shap_values[1]))
            }
        
        if explanation_type in ['both', 'local']:
            # LIME Erklärung für spezifischen Fall
            lime_exp = self.lime_explainer.explain_instance(
                customer_data.values,
                self.model.predict_proba,
                num_features=10
            )
            explanation['local_explanation'] = {
                'key_factors': lime_exp.as_list(),
                'prediction_confidence': lime_exp.predict_proba[1]
            }
        
        # Counterfactual für Ablehnungen (Art. 22 Anforderung)
        if decision == 'Abgelehnt':
            explanation['counterfactual'] = self.generate_counterfactual(customer_data)
        
        return explanation
    
    def generate_counterfactual(self, rejected_customer):
        """
        Was müsste sich ändern für positive Entscheidung?
        Erfüllt DSGVO Art. 22 Anforderung nach aussagekräftigen Informationen
        """
        # Vereinfachtes Counterfactual - in Praxis komplexerer Algorithmus
        feature_changes = []
        
        # Iteriere durch Features und teste Auswirkungen
        for feature in self.training_data.columns:
            if feature == 'customer_id':
                continue
                
            original_value = rejected_customer[feature]
            
            # Teste verschiedene Werte
            test_ranges = self.get_reasonable_feature_range(feature)
            
            for test_value in test_ranges:
                modified_customer = rejected_customer.copy()
                modified_customer[feature] = test_value
                
                new_prediction = self.model.predict_proba([modified_customer])[0]
                
                if new_prediction[1] > 0.5:  # Würde zu Genehmigung führen
                    change = {
                        'feature': feature,
                        'current_value': original_value,
                        'required_value': test_value,
                        'impact': new_prediction[1] - self.model.predict_proba([rejected_customer])[0][1]
                    }
                    feature_changes.append(change)
                    break
        
        return {
            'possible_changes': sorted(feature_changes, key=lambda x: x['impact'], reverse=True)[:3],
            'explanation': "Um eine Kreditgenehmigung zu erhalten, könnten folgende Änderungen hilfreich sein:"
        }
    
    def generate_compliance_report(self, decisions_batch):
        """
        Generiert DSGVO-Compliance Report für Batch von Entscheidungen
        """
        report = {
            'total_decisions': len(decisions_batch),
            'approval_rate': sum(1 for d in decisions_batch if d['decision'] == 'Genehmigt') / len(decisions_batch),
            'bias_analysis': self.analyze_bias(decisions_batch),
            'explanation_coverage': self.check_explanation_completeness(decisions_batch),
            'human_review_cases': [d for d in decisions_batch if d['confidence'] < 0.7]
        }
        
        return report`
    },
    "hiring-ai": {
      title: "AI-basierte Personalauswahl",
      description: "Automatisierte Bewerbungsscreening mit Fairness-Anforderungen",
      risk_level: "Sehr Hoch",
      affected_rights: ["Berufliche Chancen", "Gleichbehandlung", "Persönlichkeitsrechte"],
      required_xai: ["Bias-Detection", "Attention Maps für CV-Analyse", "Decision Trees"],
      implementation: {
        data_requirements: [
          "Anonymisierte Bewerberdaten",
          "Geschützte Merkmale-Monitoring",
          "Erfolgs-Tracking für Validierung"
        ],
        technical_setup: [
          "Multi-Stage Explanation Pipeline",
          "Fairness-Constraints in Model",
          "Human-Recruiter Interface",
          "Appeal-Mechanism"
        ],
        compliance_measures: [
          "AGG-Compliance Monitoring",
          "Quarterly Bias Audits",
          "Candidate Feedback System",
          "Transparent Criteria Communication"
        ]
      }
    },
    "medical-diagnosis": {
      title: "KI-unterstützte Medizinische Diagnose",
      description: "Automatisierte Diagnoseunterstützung mit Life-or-Death Implications",
      risk_level: "Kritisch",
      affected_rights: ["Gesundheit", "Leben", "Medizinische Selbstbestimmung"],
      required_xai: ["Attention Maps für Bildanalyse", "SHAP für Symptom-Gewichtung", "Uncertainty Quantification"],
      implementation: {
        data_requirements: [
          "Vollständige Patientenhistorie",
          "Bildgebungsdaten mit Annotations",
          "Outcome-Tracking für Validierung"
        ],
        technical_setup: [
          "Multi-Modal Explanation System",
          "Uncertainty-Aware Predictions",
          "Doctor-AI Collaboration Interface",
          "Second-Opinion Triggers"
        ],
        compliance_measures: [
          "Medical Device Regulation",
          "Continuous Model Validation",
          "Clinical Trial Documentation",
          "Patient Consent Management"
        ]
      }
    }
  };
  const xaiTechniques = {
    "lime": {
      name: "LIME Implementation",
      description: "Local Interpretable Model-Agnostic Explanations für DSGVO Compliance",
      code: `# LIME für DSGVO Art. 22 Compliance
import lime
import lime.lime_tabular
import numpy as np
import pandas as pd

class DSGVOCompliantLIME:
    def __init__(self, model, training_data, feature_names):
        self.model = model
        self.training_data = training_data
        self.feature_names = feature_names
        
        # LIME Explainer initialisieren
        self.explainer = lime.lime_tabular.LimeTabularExplainer(
            training_data.values,
            feature_names=feature_names,
            class_names=['Negativ', 'Positiv'],
            mode='classification',
            discretize_continuous=True,
            random_state=42
        )
    
    def explain_decision(self, instance, num_features=10):
        """
        Generiert DSGVO-konforme Erklärung für automatisierte Entscheidung
        """
        # LIME Erklärung generieren
        explanation = self.explainer.explain_instance(
            instance.values,
            self.model.predict_proba,
            num_features=num_features,
            top_labels=1
        )
        
        # Strukturierte Ausgabe für DSGVO Compliance
        result = {
            'decision_factors': [],
            'confidence': float(explanation.predict_proba[1]),
            'local_accuracy': explanation.score,
            'explanation_stability': self.measure_stability(instance)
        }
        
        # Top Faktoren extrahieren
        for feature, weight in explanation.as_list():
            factor = {
                'feature': feature,
                'weight': float(weight),
                'impact': 'Positiv' if weight > 0 else 'Negativ',
                'importance': abs(float(weight))
            }
            result['decision_factors'].append(factor)
        
        # Sortiere nach Wichtigkeit
        result['decision_factors'].sort(key=lambda x: x['importance'], reverse=True)
        
        return result
    
    def measure_stability(self, instance, num_samples=50):
        """
        Misst Stabilität der Erklärung für robuste DSGVO-Compliance
        """
        explanations = []
        
        for _ in range(num_samples):
            exp = self.explainer.explain_instance(
                instance.values,
                self.model.predict_proba,
                num_features=len(self.feature_names)
            )
            explanations.append(dict(exp.as_list()))
        
        # Berechne Stabilität als Konsistenz der Feature-Gewichte
        feature_stabilities = {}
        for feature in self.feature_names:
            weights = [exp.get(feature, 0) for exp in explanations]
            feature_stabilities[feature] = 1 - (np.std(weights) / (np.mean(np.abs(weights)) + 1e-8))
        
        return np.mean(list(feature_stabilities.values()))
    
    def generate_human_readable_explanation(self, explanation):
        """
        Wandelt technische Erklärung in verständliche Sprache um
        Erfüllt DSGVO Art. 22 Anforderung nach "aussagekräftigen Informationen"
        """
        decision = 'positiv' if explanation['confidence'] > 0.5 else 'negativ'
        confidence_level = 'sehr hoch' if explanation['confidence'] > 0.8 else 'hoch' if explanation['confidence'] > 0.6 else 'mittel'
        
        text = f"Die automatisierte Entscheidung fiel {decision} aus (Sicherheit: {confidence_level}).\\n\\n"
        text += "Hauptfaktoren für diese Entscheidung:\\n"
        
        for i, factor in enumerate(explanation['decision_factors'][:5]):
            impact_text = "sprach dafür" if factor['impact'] == 'Positiv' else "sprach dagegen"
            text += f"{i+1}. {factor['feature']}: {impact_text} (Gewichtung: {factor['weight']:.3f})\\n"
        
        if explanation['explanation_stability'] < 0.7:
            text += "\\nHinweis: Diese Erklärung zeigt geringe Stabilität. Eine menschliche Überprüfung wird empfohlen."
        
        return text

# Verwendungsbeispiel
def demonstrate_lime_compliance():
    # Beispiel-Setup
    training_data = pd.DataFrame({
        'einkommen': np.random.normal(50000, 15000, 1000),
        'alter': np.random.randint(18, 80, 1000),
        'beschaeftigungsdauer': np.random.randint(0, 40, 1000),
        'bestehende_kredite': np.random.randint(0, 5, 1000)
    })
    
    # LIME Explainer initialisieren
    lime_explainer = DSGVOCompliantLIME(
        model=trained_model,  # Ihr ML-Model
        training_data=training_data,
        feature_names=training_data.columns
    )
    
    # Neue Instanz erklären
    new_customer = pd.Series({
        'einkommen': 45000,
        'alter': 35,
        'beschaeftigungsdauer': 5,
        'bestehende_kredite': 1
    })
    
    explanation = lime_explainer.explain_decision(new_customer)
    human_text = lime_explainer.generate_human_readable_explanation(explanation)
    
    print("DSGVO Art. 22 konforme Erklärung:")
    print(human_text)
    
    return explanation`,
      benefits: [
        "Model-agnostisch - funktioniert mit jedem ML-Modell",
        "Lokale Erklärungen für einzelne Entscheidungen",
        "Intuitive Interpretation für Laien verständlich",
        "Erfüllt DSGVO Art. 22 Anforderungen direkt"
      ],
      challenges: [
        "Kann instabil sein bei wiederholten Erklärungen",
        "Sampling-basiert - nicht deterministisch",
        "Nur lokale Sicht, keine globalen Patterns",
        "Computationally aufwendig für große Datensätze"
      ]
    },
    "shap": {
      name: "SHAP für Art. 22 Compliance",
      description: "Shapley-basierte Erklärungen mit theoretischer Fundierung",
      code: `# SHAP für DSGVO-konforme Entscheidungserklärungen
import shap
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

class DSGVOCompliantSHAP:
    def __init__(self, model, background_data):
        self.model = model
        self.background_data = background_data
        
        # SHAP Explainer je nach Modelltyp
        if hasattr(model, 'predict_proba'):
            # Für Tree-basierte Modelle
            if hasattr(model, 'feature_importances_'):
                self.explainer = shap.TreeExplainer(model)
            else:
                # Für andere Klassifizierer
                self.explainer = shap.KernelExplainer(
                    model.predict_proba, 
                    background_data.sample(100)  # Sample für Performance
                )
        else:
            # Für Regression
            self.explainer = shap.KernelExplainer(model.predict, background_data.sample(100))
    
    def explain_individual_decision(self, instance):
        """
        Einzelne Entscheidung mit SHAP-Werten erklären
        Erfüllt DSGVO Art. 22 Anforderung nach detaillierter Logik
        """
        # SHAP-Werte berechnen
        shap_values = self.explainer.shap_values(instance.values.reshape(1, -1))
        
        # Für Klassifikation: nehme positive Klasse
        if isinstance(shap_values, list):
            shap_values_positive = shap_values[1]
        else:
            shap_values_positive = shap_values
        
        # Strukturierte Erklärung
        explanation = {
            'base_value': float(self.explainer.expected_value[1] if isinstance(self.explainer.expected_value, list) else self.explainer.expected_value),
            'prediction': float(self.model.predict_proba(instance.values.reshape(1, -1))[0][1]),
            'feature_contributions': {},
            'summary': self.generate_summary(instance, shap_values_positive[0])
        }
        
        # Feature-Beiträge
        for i, feature in enumerate(instance.index):
            explanation['feature_contributions'][feature] = {
                'value': float(instance.iloc[i]),
                'shap_value': float(shap_values_positive[0][i]),
                'contribution_type': 'positiv' if shap_values_positive[0][i] > 0 else 'negativ',
                'magnitude': abs(float(shap_values_positive[0][i]))
            }
        
        return explanation
    
    def generate_summary(self, instance, shap_values):
        """
        Generiert verständliche Zusammenfassung der Entscheidungslogik
        """
        # Top positive und negative Faktoren
        feature_impacts = [(instance.index[i], shap_values[i]) for i in range(len(shap_values))]
        positive_factors = sorted([f for f in feature_impacts if f[1] > 0], key=lambda x: x[1], reverse=True)
        negative_factors = sorted([f for f in feature_impacts if f[1] < 0], key=lambda x: x[1])
        
        summary = {
            'top_positive_factors': positive_factors[:3],
            'top_negative_factors': negative_factors[:3],
            'net_contribution': sum(shap_values),
            'decision_boundary': 0.5,
            'explanation_text': self.create_explanation_text(positive_factors, negative_factors, sum(shap_values))
        }
        
        return summary
    
    def create_explanation_text(self, positive_factors, negative_factors, net_contribution):
        """
        Erstellt menschenlesbare Erklärung für DSGVO Compliance
        """
        decision = "Genehmigung" if net_contribution > 0 else "Ablehnung"
        
        text = f"Entscheidung: {decision}\\n\\n"
        text += "Faktoren die FÜR die Genehmigung sprechen:\\n"
        
        for factor, value in positive_factors[:3]:
            text += f"• {factor}: Beitrag von {value:.3f}\\n"
        
        text += "\\nFaktoren die GEGEN die Genehmigung sprechen:\\n"
        for factor, value in negative_factors[:3]:
            text += f"• {factor}: Beitrag von {value:.3f}\\n"
        
        text += f"\\nGesamtbewertung: {net_contribution:.3f}"
        text += f"\\nGrenzwert für Genehmigung: 0.0"
        
        return text
    
    def global_feature_importance(self, sample_size=1000):
        """
        Globale Feature-Wichtigkeit für Modell-Transparenz
        Hilft bei DSGVO Art. 22 Compliance auf Systemebene
        """
        # Sample aus Background-Daten
        sample_data = self.background_data.sample(min(sample_size, len(self.background_data)))
        
        # SHAP-Werte für Sample berechnen
        shap_values = self.explainer.shap_values(sample_data.values)
        
        if isinstance(shap_values, list):
            shap_values = shap_values[1]  # Positive Klasse
        
        # Globale Wichtigkeit als Mittelwert der absoluten SHAP-Werte
        global_importance = np.mean(np.abs(shap_values), axis=0)
        
        feature_importance = {}
        for i, feature in enumerate(sample_data.columns):
            feature_importance[feature] = {
                'global_importance': float(global_importance[i]),
                'average_positive_impact': float(np.mean([val for val in shap_values[:, i] if val > 0] or [0])),
                'average_negative_impact': float(np.mean([val for val in shap_values[:, i] if val < 0] or [0])),
                'usage_frequency': float(np.mean(np.abs(shap_values[:, i]) > 0.001))  # Wie oft Feature relevant ist
            }
        
        return feature_importance
    
    def compliance_report(self, decisions_data):
        """
        Generiert Compliance-Report für regulatorische Anforderungen
        """
        explanations = []
        for _, instance in decisions_data.iterrows():
            exp = self.explain_individual_decision(instance)
            explanations.append(exp)
        
        report = {
            'total_decisions': len(explanations),
            'average_confidence': np.mean([exp['prediction'] for exp in explanations]),
            'explanation_consistency': self.measure_explanation_consistency(explanations),
            'feature_usage_stats': self.analyze_feature_usage(explanations),
            'bias_indicators': self.detect_potential_bias(explanations, decisions_data)
        }
        
        return report
    
    def measure_explanation_consistency(self, explanations):
        """
        Misst Konsistenz der Erklärungen für ähnliche Fälle
        """
        # Vereinfachte Konsistenzmessung
        all_contributions = []
        for exp in explanations:
            contributions = list(exp['feature_contributions'].values())
            all_contributions.append([c['shap_value'] for c in contributions])
        
        # Korrelation zwischen Erklärungen
        if len(all_contributions) > 1:
            correlations = []
            for i in range(len(all_contributions)):
                for j in range(i+1, len(all_contributions)):
                    corr = np.corrcoef(all_contributions[i], all_contributions[j])[0, 1]
                    if not np.isnan(corr):
                        correlations.append(corr)
            
            return np.mean(correlations) if correlations else 0.0
        
        return 1.0

# Demonstration der SHAP-basierten DSGVO Compliance
def demonstrate_shap_compliance():
    # Beispiel-Model und Daten
    from sklearn.ensemble import RandomForestClassifier
    from sklearn.model_selection import train_test_split
    
    # Beispiel-Daten erstellen
    data = pd.DataFrame({
        'einkommen': np.random.normal(50000, 20000, 2000),
        'alter': np.random.randint(18, 80, 2000),
        'beschaeftigungsdauer': np.random.randint(0, 40, 2000),
        'bestehende_kredite': np.random.randint(0, 5, 2000),
        'eigenkapital': np.random.normal(10000, 5000, 2000)
    })
    
    # Künstliches Target erstellen
    y = (data['einkommen'] > 45000) & (data['alter'] > 25) & (data['beschaeftigungsdauer'] > 2)
    
    # Model trainieren
    X_train, X_test, y_train, y_test = train_test_split(data, y, test_size=0.2)
    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)
    
    # SHAP Explainer initialisieren
    shap_explainer = DSGVOCompliantSHAP(model, X_train)
    
    # Einzelne Entscheidung erklären
    test_instance = X_test.iloc[0]
    explanation = shap_explainer.explain_individual_decision(test_instance)
    
    print("DSGVO Art. 22 konforme SHAP-Erklärung:")
    print(explanation['summary']['explanation_text'])
    
    # Globale Feature-Wichtigkeit
    global_importance = shap_explainer.global_feature_importance()
    print("\\nGlobale Feature-Wichtigkeit:")
    for feature, stats in global_importance.items():
        print(f"{feature}: {stats['global_importance']:.3f}")
    
    return explanation, global_importance`,
      benefits: [
        "Theoretisch fundiert durch Shapley-Werte",
        "Konsistente und faire Attributierung",
        "Globale + lokale Erklärbarkeit",
        "Starke mathematische Eigenschaften"
      ],
      challenges: [
        "Rechenintensiv für große Modelle",
        "Komplexe Interpretation für Laien",
        "Korrelationseffekte können verwirrend sein",
        "Requires domain expertise für Interpretation"
      ]
    },
    "counterfactuals": {
      name: "Counterfactual Explanations",
      description: "Was-wäre-wenn Szenarien für actionable insights",
      code: `# Counterfactual Explanations für DSGVO Art. 22
import numpy as np
import pandas as pd
from sklearn.metrics import euclidean_distances
from scipy.optimize import minimize

class CounterfactualExplainer:
    def __init__(self, model, training_data, categorical_features=None):
        self.model = model
        self.training_data = training_data
        self.categorical_features = categorical_features or []
        self.feature_ranges = self._compute_feature_ranges()
    
    def _compute_feature_ranges(self):
        """Berechnet realistische Wertebereiche für Features"""
        ranges = {}
        for column in self.training_data.columns:
            if column in self.categorical_features:
                ranges[column] = list(self.training_data[column].unique())
            else:
                ranges[column] = {
                    'min': float(self.training_data[column].min()),
                    'max': float(self.training_data[column].max()),
                    'std': float(self.training_data[column].std())
                }
        return ranges
    
    def generate_counterfactual(self, instance, desired_outcome=1, max_changes=3):
        """
        Generiert Counterfactual Explanation für DSGVO Art. 22 Compliance
        
        Args:
            instance: Die zu erklärende Instanz
            desired_outcome: Gewünschtes Ergebnis (0 oder 1)
            max_changes: Maximale Anzahl zu ändernder Features
        """
        original_prediction = self.model.predict_proba([instance.values])[0]
        
        if (desired_outcome == 1 and original_prediction[1] > 0.5) or            (desired_outcome == 0 and original_prediction[1] <= 0.5):
            return {
                'message': 'Gewünschtes Ergebnis bereits erreicht',
                'current_prediction': float(original_prediction[1]),
                'changes_needed': []
            }
        
        # Optimierungsbasierte Counterfactual-Generierung
        counterfactual = self._optimize_counterfactual(instance, desired_outcome, max_changes)
        
        if counterfactual is not None:
            changes = self._identify_changes(instance, counterfactual)
            validation = self._validate_counterfactual(counterfactual, desired_outcome)
            
            return {
                'original_prediction': float(original_prediction[1]),
                'counterfactual_prediction': float(validation['prediction']),
                'changes_needed': changes,
                'feasibility_score': self._assess_feasibility(changes),
                'actionable_advice': self._generate_actionable_advice(changes),
                'compliance_note': 'Diese Erklärung erfüllt DSGVO Art. 22 Anforderungen für aussagekräftige Informationen über alternative Entscheidungsszenarien.'
            }
        else:
            return {
                'message': 'Kein realistisches Counterfactual gefunden',
                'suggestions': self._suggest_alternative_approach(instance, desired_outcome)
            }
    
    def _optimize_counterfactual(self, instance, desired_outcome, max_changes):
        """Optimiert Counterfactual mit Constraints"""
        
        def objective(x):
            # Minimiere Distanz zum Original + Penalty für viele Änderungen
            distance = np.sum((x - instance.values) ** 2)
            prediction = self.model.predict_proba([x])[0]
            
            # Prediction Loss: wie weit vom gewünschten Outcome
            if desired_outcome == 1:
                pred_loss = max(0, 0.5 - prediction[1]) * 10
            else:
                pred_loss = max(0, prediction[1] - 0.5) * 10
            
            # Change Penalty: bestraft zu viele Änderungen
            change_penalty = np.sum(np.abs(x - instance.values) > 1e-6) * 0.5
            
            return distance + pred_loss + change_penalty
        
        def constraint_prediction(x):
            """Constraint: Prediction muss gewünschtes Outcome haben"""
            prediction = self.model.predict_proba([x])[0]
            if desired_outcome == 1:
                return prediction[1] - 0.5  # >= 0.5
            else:
                return 0.5 - prediction[1]  # <= 0.5
        
        # Feature-Bounds basierend auf realistischen Werten
        bounds = []
        for i, feature in enumerate(instance.index):
            if feature in self.categorical_features:
                # Für kategoriale Features: nächste verfügbare Werte
                bounds.append((instance.iloc[i], instance.iloc[i]))  # Erstmal unveränderlich
            else:
                feature_range = self.feature_ranges[feature]
                # Erlaubt Änderungen innerhalb 2 Standardabweichungen
                lower = max(feature_range['min'], instance.iloc[i] - 2 * feature_range['std'])
                upper = min(feature_range['max'], instance.iloc[i] + 2 * feature_range['std'])
                bounds.append((lower, upper))
        
        # Optimierung mit Constraints
        constraints = [{'type': 'ineq', 'fun': constraint_prediction}]
        
        try:
            result = minimize(
                objective,
                instance.values,
                method='SLSQP',
                bounds=bounds,
                constraints=constraints,
                options={'maxiter': 1000}
            )
            
            if result.success:
                return pd.Series(result.x, index=instance.index)
            else:
                return None
        except:
            return None
    
    def _identify_changes(self, original, counterfactual):
        """Identifiziert und beschreibt notwendige Änderungen"""
        changes = []
        
        for feature in original.index:
            original_val = original[feature]
            counter_val = counterfactual[feature]
            
            if abs(original_val - counter_val) > 1e-6:
                change = {
                    'feature': feature,
                    'current_value': float(original_val),
                    'required_value': float(counter_val),
                    'change_magnitude': abs(float(counter_val - original_val)),
                    'change_direction': 'increase' if counter_val > original_val else 'decrease',
                    'relative_change': float((counter_val - original_val) / original_val) if original_val != 0 else float('inf')
                }
                changes.append(change)
        
        # Sortiere nach Änderungsgröße
        changes.sort(key=lambda x: x['change_magnitude'], reverse=True)
        return changes
    
    def _assess_feasibility(self, changes):
        """Bewertet die Durchführbarkeit der vorgeschlagenen Änderungen"""
        if not changes:
            return 1.0
        
        feasibility_scores = []
        
        for change in changes:
            feature = change['feature']
            
            # Feasibility basierend auf Feature-Typ
            if feature in ['alter', 'geschlecht']:  # Unveränderliche Features
                feasibility_scores.append(0.0)
            elif feature in ['einkommen', 'beschaeftigungsdauer']:  # Schwer änderbar
                relative_change = abs(change['relative_change'])
                if relative_change < 0.1:  # <10% Änderung
                    feasibility_scores.append(0.8)
                elif relative_change < 0.3:  # <30% Änderung
                    feasibility_scores.append(0.5)
                else:
                    feasibility_scores.append(0.2)
            else:  # Einfacher änderbare Features
                feasibility_scores.append(0.9)
        
        return np.mean(feasibility_scores)
    
    def _generate_actionable_advice(self, changes):
        """Generiert handlungsrelevante Empfehlungen"""
        if not changes:
            return "Keine Änderungen erforderlich."
        
        advice = []
        
        for change in changes[:3]:  # Top 3 wichtigste Änderungen
            feature = change['feature']
            direction = change['change_direction']
            magnitude = change['change_magnitude']
            
            if feature == 'einkommen':
                if direction == 'increase':
                    advice.append(f"Einkommen um {magnitude:.0f}€ erhöhen (z.B. durch Gehaltsverhandlung oder Nebentätigkeit)")
                else:
                    advice.append(f"Einkommen muss nicht reduziert werden")
            elif feature == 'beschaeftigungsdauer':
                if direction == 'increase':
                    advice.append(f"Beschäftigungsdauer um {magnitude:.1f} Jahre verlängern (Jobwechsel vermeiden)")
            elif feature == 'bestehende_kredite':
                if direction == 'decrease':
                    advice.append(f"Anzahl bestehender Kredite um {magnitude:.0f} reduzieren (Kredite ablösen)")
            elif feature == 'eigenkapital':
                if direction == 'increase':
                    advice.append(f"Eigenkapital um {magnitude:.0f}€ erhöhen (Sparen oder Vermögensaufbau)")
        
        return advice
    
    def _validate_counterfactual(self, counterfactual, desired_outcome):
        """Validiert das generierte Counterfactual"""
        prediction = self.model.predict_proba([counterfactual.values])[0]
        
        success = (desired_outcome == 1 and prediction[1] > 0.5) or                  (desired_outcome == 0 and prediction[1] <= 0.5)
        
        return {
            'prediction': float(prediction[1]),
            'success': success,
            'confidence': float(max(prediction))
        }
    
    def batch_counterfactuals(self, instances, desired_outcomes):
        """Generiert Counterfactuals für Batch von Instanzen"""
        results = []
        
        for i, (_, instance) in enumerate(instances.iterrows()):
            desired = desired_outcomes[i] if isinstance(desired_outcomes, list) else desired_outcomes
            counterfactual = self.generate_counterfactual(instance, desired)
            
            results.append({
                'instance_id': i,
                'counterfactual': counterfactual,
                'success': 'changes_needed' in counterfactual
            })
        
        return results

# Demonstration für DSGVO Art. 22 Compliance
def demonstrate_counterfactual_compliance():
    # Beispiel-Setup
    from sklearn.ensemble import RandomForestClassifier
    
    # Beispiel-Daten
    data = pd.DataFrame({
        'einkommen': np.random.normal(45000, 15000, 1000),
        'alter': np.random.randint(25, 65, 1000),
        'beschaeftigungsdauer': np.random.randint(1, 30, 1000),
        'bestehende_kredite': np.random.randint(0, 4, 1000),
        'eigenkapital': np.random.normal(8000, 4000, 1000)
    })
    
    # Target: Kreditwürdigkeit
    y = ((data['einkommen'] > 40000) & 
         (data['beschaeftigungsdauer'] > 2) & 
         (data['bestehende_kredite'] < 3)).astype(int)
    
    # Model trainieren
    model = RandomForestClassifier(n_estimators=50, random_state=42)
    model.fit(data, y)
    
    # Counterfactual Explainer
    cf_explainer = CounterfactualExplainer(model, data)
    
    # Beispiel: Abgelehnter Kreditantrag
    rejected_customer = pd.Series({
        'einkommen': 35000,
        'alter': 28,
        'beschaeftigungsdauer': 1,
        'bestehende_kredite': 3,
        'eigenkapital': 2000
    })
    
    # Counterfactual für Genehmigung generieren
    counterfactual = cf_explainer.generate_counterfactual(rejected_customer, desired_outcome=1)
    
    print("DSGVO Art. 22 konforme Counterfactual Explanation:")
    print(f"Aktuelle Vorhersage: {counterfactual['original_prediction']:.3f}")
    print(f"Vorhersage nach Änderungen: {counterfactual['counterfactual_prediction']:.3f}")
    print("\\nEmpfohlene Änderungen:")
    
    for change in counterfactual['changes_needed']:
        print(f"• {change['feature']}: {change['current_value']:.1f} → {change['required_value']:.1f}")
    
    print("\\nHandlungsempfehlungen:")
    for advice in counterfactual['actionable_advice']:
        print(f"• {advice}")
    
    print(f"\\nDurchführbarkeit: {counterfactual['feasibility_score']:.1%}")
    
    return counterfactual`,
      benefits: [
        "Actionable insights für betroffene Personen",
        "Direkte Erfüllung von DSGVO Art. 22 Anforderungen",
        "Benutzerfreundliche 'Was-wäre-wenn' Szenarien",
        "Unterstützt Widerspruchsverfahren"
      ],
      challenges: [
        "Rechenaufwendige Optimierung",
        "Realitätsnähe der Änderungsvorschläge",
        "Multiple Lösungen möglich",
        "Feasibility-Assessment schwierig"
      ]
    }
  };
  const toggleStep = (stepId) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        ref: containerRef,
        className: "relative bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-900 text-white overflow-hidden",
        style: { y: headerY, opacity: headerOpacity },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20" }),
          /* @__PURE__ */ jsx("div", { className: "relative container mx-auto px-6 py-24", children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8 },
              className: "max-w-4xl mx-auto text-center",
              children: [
                /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8", children: [
                  /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Explainable AI Guide" })
                ] }),
                /* @__PURE__ */ jsx("h1", { className: "text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent", children: "Explainable AI für DSGVO Art. 22" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-purple-100 mb-8 leading-relaxed", children: "Implementierung erklärbarer KI-Systeme zur vollständigen Compliance mit automatisierter Entscheidungsfindung nach DSGVO Artikel 22" }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
                  /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-white/20 text-white border-white/30", children: [
                    /* @__PURE__ */ jsx(Scale, { className: "w-4 h-4 mr-1" }),
                    "DSGVO Art. 22"
                  ] }),
                  /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-white/20 text-white border-white/30", children: [
                    /* @__PURE__ */ jsx(Brain, { className: "w-4 h-4 mr-1" }),
                    "XAI Methods"
                  ] }),
                  /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-white/20 text-white border-white/30", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 mr-1" }),
                    "Legal Compliance"
                  ] })
                ] })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "mb-8", children: /* @__PURE__ */ jsxs("ol", { className: "flex items-center space-x-2 text-sm text-gray-600", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-blue-600", children: "Home" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen", className: "hover:text-blue-600", children: "Wissen" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz", className: "hover:text-blue-600", children: "KI-Datenschutz" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }) }),
        /* @__PURE__ */ jsx("li", { className: "text-gray-900 font-medium", children: "Explainable AI" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:hidden mb-8", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(List, { className: "w-5 h-5" }),
          "Inhaltsverzeichnis"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#methods-section", className: "text-blue-600 hover:underline", children: "XAI Methoden" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#article22-section", className: "text-blue-600 hover:underline", children: "Art. 22 Framework" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#implementation-section", className: "text-blue-600 hover:underline", children: "Implementation" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#scenarios-section", className: "text-blue-600 hover:underline", children: "Use Cases" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#compliance-section", className: "text-blue-600 hover:underline", children: "Compliance" }) })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxs(Tabs, { defaultValue: "methods", className: "space-y-8", children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2 lg:grid-cols-5", children: [
          /* @__PURE__ */ jsx(TabsTrigger, { value: "methods", children: "XAI Methoden" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "article22", children: "Art. 22 Framework" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "implementation", children: "Implementation" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "scenarios", children: "Use Cases" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "compliance", children: "Compliance" })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "methods", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "methods-section", className: "text-3xl font-bold mb-4 scroll-mt-24", children: "Explainable AI Methoden" }),
            /* @__PURE__ */ jsxs("p", { className: "text-gray-600 max-w-3xl mx-auto", children: [
              "Überblick über die wichtigsten XAI-Techniken für ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/dsgvo-grundlagen", className: "text-blue-600 hover:underline", children: "DSGVO" }),
              " Art. 22 Compliance mit Bewertung ihrer Eignung für automatisierte Entscheidungssysteme. Ergänzend empfehlen wir unsere Guides zu",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/algorithmic-impact-assessment", className: "text-blue-600 hover:underline", children: " Algorithmic Impact Assessment" }),
              " und",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/model-privacy-attacks", className: "text-blue-600 hover:underline", children: " Model Privacy Attacks" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: xaiMethods.map((method, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-3", children: [
                    /* @__PURE__ */ jsx("div", { className: `p-3 rounded-lg ${method.color}`, children: /* @__PURE__ */ jsx(method.icon, { className: "w-6 h-6 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: method.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: method.subtitle })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: method.description })
                ] }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-green-600", children: "Stärken:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: method.strengths.map((strength, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                        /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-green-500" }),
                        strength
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2 text-orange-600", children: "Schwächen:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: method.weaknesses.map((weakness, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                        /* @__PURE__ */ jsx(X, { className: "w-3 h-3 text-orange-500" }),
                        weakness
                      ] }, idx)) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Use Cases:" }),
                    /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: method.use_cases.map((useCase, idx) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: useCase }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between pt-3 border-t", children: [
                    /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Komplexität: " }),
                      /* @__PURE__ */ jsx(Badge, { variant: method.complexity === "Niedrig" ? "secondary" : method.complexity === "Mittel" ? "default" : "destructive", children: method.complexity })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "text-sm", children: [
                      /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Art. 22 Eignung: " }),
                      /* @__PURE__ */ jsx(Badge, { variant: method.article22_compliance === "Sehr Hoch" ? "default" : method.article22_compliance === "Hoch" ? "secondary" : "outline", children: method.article22_compliance })
                    ] })
                  ] })
                ] })
              ] })
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "article22", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "article22-section", className: "text-3xl font-bold mb-4 scroll-mt-24", children: "DSGVO Art. 22 Framework" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Detaillierte Analyse der rechtlichen Anforderungen und deren technische Umsetzung durch Explainable AI Methoden für vollständige Compliance." })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Scale, { className: "w-5 h-5 text-blue-500" }),
              "Rechtlicher Rahmen - DSGVO Art. 22"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-6", children: art22Requirements.legal_framework.paragraphs.map((paragraph, index) => /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-blue-500 pl-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold text-lg", children: paragraph.section }),
                /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "Rechtlicher Text" })
              ] }),
              /* @__PURE__ */ jsxs("blockquote", { className: "text-gray-700 italic mb-3 bg-gray-50 p-3 rounded", children: [
                '"',
                paragraph.text,
                '"'
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-3 rounded", children: [
                /* @__PURE__ */ jsx("strong", { className: "text-blue-800", children: "KI-Implikation:" }),
                /* @__PURE__ */ jsx("p", { className: "text-blue-700 mt-1", children: paragraph.ai_implication })
              ] })
            ] }, index)) })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: art22Requirements.implementation_requirements.map((req, index) => /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: req.requirement }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: req.description })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Geeignete XAI-Methoden:" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: req.xai_methods.map((method, idx) => /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-purple-500", children: method }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Technische Umsetzung:" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 bg-gray-50 p-3 rounded", children: req.implementation })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Dokumentation:" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: req.documentation })
              ] })
            ] })
          ] }, index)) })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "implementation", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "implementation-section", className: "text-3xl font-bold mb-4 scroll-mt-24", children: "Technische Implementierung" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Praktische Code-Beispiele und Implementierungsanleitungen für DSGVO-konforme Explainable AI Systeme mit verschiedenen XAI-Methoden." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: Object.entries(xaiTechniques).map(([key, technique]) => /* @__PURE__ */ jsx(
            Button,
            {
              variant: activeMethod === key ? "default" : "outline",
              onClick: () => setActiveMethod(key),
              className: "mb-2",
              children: technique.name.split(" ")[0]
            },
            key
          )) }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Code, { className: "w-5 h-5" }),
                xaiTechniques[activeMethod].name
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: xaiTechniques[activeMethod].description })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-sm overflow-x-auto", children: /* @__PURE__ */ jsx("code", { children: xaiTechniques[activeMethod].code }) }) }),
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-green-600", children: "Vorteile:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: xaiTechniques[activeMethod].benefits.map((benefit, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5" }),
                    benefit
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-orange-600", children: "Herausforderungen:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: xaiTechniques[activeMethod].challenges.map((challenge, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-orange-500 mt-0.5" }),
                    challenge
                  ] }, idx)) })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "scenarios", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "scenarios-section", className: "text-3xl font-bold mb-4 scroll-mt-24", children: "Praxisszenarien & Use Cases" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Reale Anwendungsszenarien für Explainable AI in automatisierten Entscheidungssystemen mit spezifischen Compliance-Anforderungen." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: Object.entries(implementationScenarios).map(([key, scenario]) => /* @__PURE__ */ jsx(
            Button,
            {
              variant: selectedScenario === key ? "default" : "outline",
              onClick: () => setSelectedScenario(key),
              className: "mb-2",
              children: scenario.title
            },
            key
          )) }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: implementationScenarios[selectedScenario].title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: implementationScenarios[selectedScenario].description })
              ] }),
              /* @__PURE__ */ jsxs(
                Badge,
                {
                  variant: implementationScenarios[selectedScenario].risk_level === "Kritisch" ? "destructive" : implementationScenarios[selectedScenario].risk_level === "Sehr Hoch" ? "destructive" : implementationScenarios[selectedScenario].risk_level === "Hoch" ? "default" : "secondary",
                  children: [
                    implementationScenarios[selectedScenario].risk_level,
                    " Risiko"
                  ]
                }
              )
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Betroffene Rechte:" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: implementationScenarios[selectedScenario].affected_rights.map((right, idx) => /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-red-600 border-red-200", children: [
                  /* @__PURE__ */ jsx(AlertCircle, { className: "w-3 h-3 mr-1" }),
                  right
                ] }, idx)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Erforderliche XAI-Methoden:" }),
                /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: implementationScenarios[selectedScenario].required_xai.map((method, idx) => /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-blue-500", children: method }, idx)) })
              ] }),
              implementationScenarios[selectedScenario].implementation && /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Datenanforderungen:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: implementationScenarios[selectedScenario].implementation.data_requirements.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(Database, { className: "w-3 h-3 text-blue-500" }),
                    req
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Technisches Setup:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: implementationScenarios[selectedScenario].implementation.technical_setup.map((setup, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(Settings, { className: "w-3 h-3 text-green-500" }),
                    setup
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Compliance-Maßnahmen:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: implementationScenarios[selectedScenario].implementation.compliance_measures.map((measure, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(ShieldCheck, { className: "w-3 h-3 text-purple-500" }),
                    measure
                  ] }, idx)) })
                ] })
              ] }),
              selectedScenario === "credit-scoring" && implementationScenarios[selectedScenario].code_example && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Implementierungsbeispiel:" }),
                /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-sm overflow-x-auto", children: /* @__PURE__ */ jsx("code", { children: implementationScenarios[selectedScenario].code_example }) }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "compliance", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "compliance-section", className: "text-3xl font-bold mb-4 scroll-mt-24", children: "Compliance Dashboard" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Überwachung und Validierung der DSGVO Art. 22 Compliance mit automatisierten Metriken und Reporting-Funktionen." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5 text-blue-500" }),
                "Erklärungsqualität"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Verständlichkeit" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "94%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 94, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "User Comprehension Score" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Stabilität" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-blue-500", children: "87%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 87, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Erklärungskonsistenz" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Vollständigkeit" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-purple-500", children: "92%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 92, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Feature Coverage" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Scale, { className: "w-5 h-5 text-green-500" }),
                "Art. 22 Compliance"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Meaningful Information" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "✓" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 100, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Aussagekräftige Erklärungen" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Human Oversight" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "✓" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 100, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Menschliche Aufsicht" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Contest Mechanism" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "✓" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 100, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Widerspruchsverfahren" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Activity, { className: "w-5 h-5 text-orange-500" }),
                "System Performance"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Explanation Latency" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "125ms" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 85, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Durchschnittliche Antwortzeit" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Coverage Rate" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-blue-500", children: "98.7%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 98.7, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Erfolgreiche Erklärungen" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Human Appeals" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "2.3%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 2.3, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Manuelle Überprüfungen" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileCheck, { className: "w-5 h-5 text-green-500" }),
              "DSGVO Art. 22 Compliance Checkliste"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
              "Automatisierte Entscheidung identifiziert",
              "Bedeutsame Erklärungen implementiert",
              "Menschliche Aufsicht eingerichtet",
              "Widerspruchsverfahren definiert",
              "Dokumentation vollständig",
              "Betroffenenrechte respektiert",
              "XAI-Methoden validiert",
              "Performance-Monitoring aktiv",
              "Bias-Detection implementiert",
              "Appeal-Process dokumentiert",
              "Mitarbeiterschulungen durchgeführt",
              "Regulatorische Berichte erstellt"
            ].map((item, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100",
                onClick: () => toggleStep(`compliance-${index}`),
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `w-5 h-5 rounded border-2 flex items-center justify-center ${completedSteps[`compliance-${index}`] ? "bg-green-500 border-green-500" : "border-gray-300"}`,
                      children: completedSteps[`compliance-${index}`] && /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: `text-sm ${completedSteps[`compliance-${index}`] ? "line-through text-gray-500" : ""}`, children: item })
                ]
              },
              index
            )) }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Monitor, { className: "w-5 h-5 text-purple-500" }),
              "Automatisiertes Compliance Monitoring"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-sm overflow-x-auto", children: /* @__PURE__ */ jsx("code", { children: `# DSGVO Art. 22 Compliance Monitoring
import logging
from datetime import datetime
import numpy as np
import pandas as pd

class Art22ComplianceMonitor:
    def __init__(self):
        self.compliance_metrics = {}
        self.alerts = []
        
    def monitor_explanation_quality(self, explanations_batch):
        """Überwacht Qualität der Erklärungen"""
        
        # Verständlichkeits-Score
        comprehension_scores = [exp.get('comprehension_score', 0) for exp in explanations_batch]
        avg_comprehension = np.mean(comprehension_scores)
        
        # Stabilitäts-Score
        stability_scores = [exp.get('stability_score', 0) for exp in explanations_batch]
        avg_stability = np.mean(stability_scores)
        
        # Vollständigkeits-Score
        completeness_scores = [exp.get('completeness_score', 0) for exp in explanations_batch]
        avg_completeness = np.mean(completeness_scores)
        
        metrics = {
            'timestamp': datetime.now(),
            'comprehension': avg_comprehension,
            'stability': avg_stability,
            'completeness': avg_completeness,
            'batch_size': len(explanations_batch)
        }
        
        # Alerts für schlechte Qualität
        if avg_comprehension < 0.7:
            self.create_alert("Verständlichkeit unter Grenzwert", metrics)
        if avg_stability < 0.6:
            self.create_alert("Instabile Erklärungen erkannt", metrics)
        if avg_completeness < 0.8:
            self.create_alert("Unvollständige Erklärungen", metrics)
            
        return metrics
    
    def validate_art22_compliance(self, decision_system):
        """Validiert vollständige Art. 22 Compliance"""
        
        compliance_checks = {
            'meaningful_information': self.check_meaningful_information(decision_system),
            'human_oversight': self.check_human_oversight(decision_system),
            'contest_mechanism': self.check_contest_mechanism(decision_system),
            'impact_assessment': self.check_impact_assessment(decision_system),
            'documentation': self.check_documentation(decision_system)
        }
        
        compliance_score = sum(compliance_checks.values()) / len(compliance_checks)
        
        if compliance_score < 1.0:
            failing_checks = [check for check, passed in compliance_checks.items() if not passed]
            self.create_alert(f"Art. 22 Compliance Verletzung: {failing_checks}", compliance_checks)
        
        return {
            'compliance_score': compliance_score,
            'individual_checks': compliance_checks,
            'status': 'COMPLIANT' if compliance_score == 1.0 else 'NON_COMPLIANT',
            'timestamp': datetime.now()
        }
    
    def generate_regulatory_report(self, period_start, period_end):
        """Generiert regulatorischen Bericht für Aufsichtsbehörden"""
        
        report = {
            'reporting_period': {'start': period_start, 'end': period_end},
            'total_decisions': self.get_decision_count(period_start, period_end),
            'explanation_coverage': self.get_explanation_coverage(period_start, period_end),
            'human_review_rate': self.get_human_review_rate(period_start, period_end),
            'appeal_statistics': self.get_appeal_statistics(period_start, period_end),
            'bias_detection_results': self.get_bias_analysis(period_start, period_end),
            'compliance_violations': self.get_violations(period_start, period_end),
            'corrective_actions': self.get_corrective_actions(period_start, period_end)
        }
        
        return report
    
    def real_time_monitoring(self):
        """Echtzeit-Monitoring Dashboard"""
        
        current_metrics = {
            'active_decisions_per_hour': self.get_current_decision_rate(),
            'explanation_latency_p95': self.get_explanation_latency_percentile(95),
            'human_review_queue_size': self.get_human_review_queue_size(),
            'compliance_score_24h': self.get_24h_compliance_score(),
            'alert_count_today': len([a for a in self.alerts if a['date'] == datetime.now().date()])
        }
        
        # Dashboard Updates
        self.update_compliance_dashboard(current_metrics)
        
        return current_metrics

# Verwendung
monitor = Art22ComplianceMonitor()

# Tägliche Compliance-Prüfung
daily_compliance = monitor.validate_art22_compliance(ai_decision_system)
print(f"Compliance Status: {daily_compliance['status']}")

# Echtzeit-Monitoring
real_time_metrics = monitor.real_time_monitoring()
print(f"Aktuelle Metriken: {real_time_metrics}")

# Monatlicher Regulatory Report
monthly_report = monitor.generate_regulatory_report(
    datetime(2024, 1, 1), 
    datetime(2024, 1, 31)
)
print(f"Monatsbericht erstellt: {len(monthly_report['total_decisions'])} Entscheidungen")` }) }) }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5 },
          className: "bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-16",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Bereit für DSGVO-konforme Explainable AI?" }),
            /* @__PURE__ */ jsx("p", { className: "text-indigo-100 mb-6 max-w-2xl mx-auto", children: "Implementieren Sie vollständig compliant automatisierte Entscheidungssysteme mit aussagekräftigen Erklärungen nach DSGVO Art. 22 Standards." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
              /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "secondary", children: [
                /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 mr-2" }),
                "XAI Implementation Guide"
              ] }),
              /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white hover:text-indigo-600", children: [
                /* @__PURE__ */ jsx(MessageSquare, { className: "w-5 h-5 mr-2" }),
                "Compliance Beratung"
              ] })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  ExplainableAIGuide as default
};
