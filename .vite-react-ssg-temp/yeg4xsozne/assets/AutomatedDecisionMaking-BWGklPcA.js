import { jsxs, jsx } from "react/jsx-runtime";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Helmet } from "react-helmet-async";
import { Workflow, Scale, Bot, Eye, FileText, Building2, CheckCircle2, AlertTriangle, Settings, Monitor, Clock, FileCheck, Download, BarChart3, ShieldCheck, Activity, MessageSquare, ArrowRight, Shield } from "lucide-react";
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
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-tabs";
import "@radix-ui/react-progress";
const AutomatedDecisionMaking = () => {
  useEffect(() => {
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1";
      document.head.appendChild(meta);
    }
  }, []);
  const [activeFramework, setActiveFramework] = useState("gdpr-art22");
  const [completedSteps, setCompletedSteps] = useState({});
  const [selectedDecisionType, setSelectedDecisionType] = useState("credit-scoring");
  const [expandedSections, setExpandedSections] = useState({});
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Automated Decision Making – DSGVO Art. 22 & EU AI Act",
    "description": "DSGVO-konforme automatisierte Entscheidungsfindung: Art. 22 Compliance, EU AI Act Anforderungen & XAI Implementation. Jetzt rechtssicher umsetzen!",
    "author": {
      "@type": "Organization",
      "name": "MarsJonas"
    },
    "publisher": {
      "@type": "Organization",
      "name": "MarsJonas",
      "logo": {
        "@type": "ImageObject",
        "url": "https://marsjonas.com/logo.png"
      }
    },
    "datePublished": "2024-01-15",
    "dateModified": "2024-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://marsjonas.com/ki/automated-decision-making"
    }
  };
  const complianceFrameworks = [
    {
      title: "DSGVO Art. 22 Compliance",
      subtitle: "Automatisierte Entscheidungsfindung",
      icon: Scale,
      color: "bg-blue-500",
      description: "Rechtskonforme automatisierte Entscheidungen nach DSGVO",
      requirements: [
        "Ausschließlich automatisierte Verarbeitung identifizieren",
        "Rechtliche Grundlage oder explizite Einwilligung",
        "Angemessene Maßnahmen zum Schutz der Rechte",
        "Aussagekräftige Informationen über involvierte Logik"
      ],
      key_obligations: "Transparenz, menschliche Aufsicht, Widerspruchsrecht"
    },
    {
      title: "EU AI Act Compliance",
      subtitle: "High-Risk AI Systems",
      icon: Bot,
      color: "bg-purple-500",
      description: "EU AI Act Anforderungen für risiko-behaftete KI-Systeme",
      requirements: [
        "Risikoklassifizierung und Impact Assessment",
        "Robuste Governance und Qualitätsmanagement",
        "Umfassende Dokumentation und Aufzeichnungen",
        "Transparenz und Bereitstellung von Informationen"
      ],
      key_obligations: "CE-Kennzeichnung, Konformitätsbewertung, Post-Market Monitoring"
    },
    {
      title: "Algorithmic Accountability",
      subtitle: "Transparenz und Fairness",
      icon: Eye,
      color: "bg-green-500",
      description: "Rechenschaftspflicht für algorithmische Entscheidungssysteme",
      requirements: [
        "Bias-Detection und Fairness-Assessment",
        "Explainable AI für kritische Entscheidungen",
        "Kontinuierliches Monitoring der Entscheidungsqualität",
        "Audit-Trail für alle automatisierten Entscheidungen"
      ],
      key_obligations: "Algorithmus-Audits, Diskriminierungsschutz, Public Accountability"
    },
    {
      title: "Sector-Specific Compliance",
      subtitle: "Branchenspezifische Anforderungen",
      icon: Building2,
      color: "bg-orange-500",
      description: "Spezielle Compliance-Anforderungen je nach Anwendungsbereich",
      requirements: [
        "Finanzsektor: MiFID II, CRD IV, Basel III",
        "Gesundheitswesen: MDR, IVDR, FDA Guidelines",
        "Personalwesen: AGG, BetrVG, Arbeitsrecht",
        "Kreditwesen: CRR, KWG, Schufa-Richtlinien"
      ],
      key_obligations: "Sektor-spezifische Zulassungen, Specialized Audits, Industry Standards"
    }
  ];
  const decisionTypes = {
    "credit-scoring": {
      title: "Kreditwürdigkeitsprüfung",
      description: "Automatisierte Bewertung der Kreditwürdigkeit von Antragstellern",
      risk_level: "Hoch",
      legal_basis: "Berechtigtes Interesse + Einwilligung für bestimmte Daten",
      affected_rights: ["Vertragsabschluss", "Finanzielle Chancen", "Wirtschaftliche Teilhabe"],
      compliance_requirements: {
        gdpr_art22: [
          "Explizite Information über automatisierte Entscheidung",
          "Aussagekräftige Informationen über Bewertungslogik",
          "Recht auf menschliche Intervention gewähren",
          "Recht auf Anfechtung und Erläuterung"
        ],
        technical_measures: [
          "Explainable AI für Ablehnungen implementieren",
          "Bias-Detection für geschützte Merkmale",
          "Human-in-the-Loop für Grenzfälle",
          "Audit-Log aller Entscheidungen"
        ],
        documentation: [
          "Algorithmus-Dokumentation erstellen",
          "Datenquellen und Features dokumentieren",
          "Validierungsstudien durchführen",
          "Impact Assessment dokumentieren"
        ]
      },
      implementation_example: `# DSGVO Art. 22 konforme Kreditprüfung
import datetime
import logging
from typing import Dict, List, Optional, Tuple
from dataclasses import dataclass
from enum import Enum
import numpy as np
import pandas as pd

class DecisionType(Enum):
    APPROVED = "approved"
    REJECTED = "rejected"
    MANUAL_REVIEW = "manual_review"

class ExplanationType(Enum):
    POSITIVE_FACTORS = "positive_factors"
    NEGATIVE_FACTORS = "negative_factors"
    COUNTERFACTUAL = "counterfactual"
    FEATURE_IMPORTANCE = "feature_importance"

@dataclass
class CreditDecision:
    application_id: str
    applicant_id: str
    decision: DecisionType
    confidence_score: float
    risk_score: float
    decision_timestamp: datetime.datetime
    explanation: Dict
    human_review_required: bool
    appeal_rights_info: Dict
    
class GDPRCompliantCreditScoring:
    """
    DSGVO Art. 22 konforme Kreditwürdigkeitsprüfung mit 
    eingebauter Transparenz und Rechenschaftspflicht
    """
    
    def __init__(self, model, explainer, audit_logger):
        self.model = model
        self.explainer = explainer  # SHAP, LIME, etc.
        self.audit_logger = audit_logger
        self.decision_thresholds = {
            'auto_approve': 0.8,    # Automatische Genehmigung
            'auto_reject': 0.3,     # Automatische Ablehnung  
            'manual_review': (0.3, 0.8)  # Manuelle Prüfung erforderlich
        }
        
    def process_credit_application(self, application_data: Dict) -> CreditDecision:
        """
        Hauptfunktion für DSGVO-konforme Kreditprüfung
        """
        
        # 1. Eingangsdaten validieren und vorverarbeiten
        processed_data = self._preprocess_application(application_data)
        
        # 2. Automatisierte Entscheidung treffen
        risk_prediction = self.model.predict_proba([processed_data])[0]
        risk_score = risk_prediction[1]  # Wahrscheinlichkeit für "Risiko"
        
        # 3. Entscheidung basierend auf Schwellenwerten
        decision, confidence = self._determine_decision(risk_score)
        
        # 4. Erklärung der Entscheidung generieren (Art. 22 Anforderung)
        explanation = self._generate_explanation(
            processed_data, 
            risk_score, 
            decision
        )
        
        # 5. Prüfung ob manuelle Überprüfung erforderlich
        human_review_required = self._requires_human_review(
            decision, 
            confidence, 
            application_data
        )
        
        # 6. Rechtsinformationen für Betroffene
        appeal_rights = self._generate_appeal_rights_info(decision)
        
        # 7. Audit-Protokoll erstellen
        self._log_decision_audit(
            application_data['applicant_id'],
            processed_data,
            risk_score,
            decision,
            explanation
        )
        
        # 8. DSGVO-konforme Decision-Struktur zurückgeben
        credit_decision = CreditDecision(
            application_id=application_data['application_id'],
            applicant_id=application_data['applicant_id'],
            decision=decision,
            confidence_score=confidence,
            risk_score=risk_score,
            decision_timestamp=datetime.datetime.now(),
            explanation=explanation,
            human_review_required=human_review_required,
            appeal_rights_info=appeal_rights
        )
        
        return credit_decision
    
    def _generate_explanation(self, data: np.ndarray, risk_score: float, decision: DecisionType) -> Dict:
        """
        Generiert aussagekräftige Erklärung der Entscheidungslogik
        Erfüllt DSGVO Art. 22 Anforderung nach "meaningful information"
        """
        
        # SHAP-Werte für Feature-Importance berechnen
        shap_values = self.explainer.shap_values(data.reshape(1, -1))[1]
        
        feature_names = ['einkommen', 'beschaeftigungsdauer', 'bestehende_kredite', 
                        'eigenkapital', 'alter', 'familienstand']
        
        # Top positive und negative Faktoren identifizieren
        feature_importance = list(zip(feature_names, shap_values))
        positive_factors = sorted([f for f in feature_importance if f[1] > 0], 
                                key=lambda x: x[1], reverse=True)[:3]
        negative_factors = sorted([f for f in feature_importance if f[1] < 0], 
                                key=lambda x: x[1])[:3]
        
        explanation = {
            'decision_summary': self._create_decision_summary(decision, risk_score),
            'key_factors': {
                'positive': [
                    {
                        'factor': factor[0],
                        'impact': float(factor[1]),
                        'explanation': self._get_factor_explanation(factor[0], factor[1], 'positive')
                    } for factor in positive_factors
                ],
                'negative': [
                    {
                        'factor': factor[0], 
                        'impact': float(factor[1]),
                        'explanation': self._get_factor_explanation(factor[0], factor[1], 'negative')
                    } for factor in negative_factors
                ]
            },
            'algorithmic_logic': {
                'model_type': 'Random Forest Classifier',
                'decision_criteria': 'Statistische Bewertung basierend auf historischen Kreditdaten',
                'data_sources': ['Einkommensnachweise', 'Schufa-Auskunft', 'Kontodaten', 'Selbstangaben'],
                'decision_boundary': f'Risiko-Score: {risk_score:.3f} (Schwellenwert: {self.decision_thresholds})'
            },
            'transparency_note': 'Diese Entscheidung wurde vollautomatisch getroffen. Sie haben das Recht auf menschliche Überprüfung und Erläuterung.'
        }
        
        # Counterfactual für Ablehnungen hinzufügen
        if decision == DecisionType.REJECTED:
            explanation['counterfactual'] = self._generate_counterfactual_explanation(data)
        
        return explanation
    
    def _create_decision_summary(self, decision: DecisionType, risk_score: float) -> str:
        """Erstellt verständliche Entscheidungszusammenfassung"""
        
        if decision == DecisionType.APPROVED:
            return f"Ihr Kreditantrag wurde genehmigt. Basierend auf unserer automatisierten Bewertung zeigen Sie ein geringes Ausfallrisiko (Risiko-Score: {risk_score:.1%})."
        
        elif decision == DecisionType.REJECTED:
            return f"Ihr Kreditantrag wurde abgelehnt. Unsere automatisierte Bewertung ergab ein zu hohes Ausfallrisiko (Risiko-Score: {risk_score:.1%})."
        
        else:
            return f"Ihr Kreditantrag wird manuell geprüft. Die automatisierte Bewertung ergab einen mittleren Risiko-Score ({risk_score:.1%}), der eine individuelle Beurteilung erfordert."
    
    def _get_factor_explanation(self, factor_name: str, impact: float, direction: str) -> str:
        """Erklärt die Auswirkung einzelner Faktoren verständlich"""
        
        explanations = {
            'einkommen': {
                'positive': 'Ihr stabiles Einkommen wirkt sich positiv auf die Kreditwürdigkeit aus.',
                'negative': 'Das angegebene Einkommen ist für die gewünschte Kreditsumme möglicherweise zu niedrig.'
            },
            'beschaeftigungsdauer': {
                'positive': 'Ihre lange Beschäftigungsdauer zeigt berufliche Stabilität.',
                'negative': 'Die kurze Beschäftigungsdauer erhöht das Ausfallrisiko.'
            },
            'bestehende_kredite': {
                'positive': 'Ihre bisherige Kredithistorie ist positiv.',
                'negative': 'Bestehende Kreditverpflichtungen erhöhen das Gesamtrisiko.'
            },
            'eigenkapital': {
                'positive': 'Vorhandenes Eigenkapital reduziert das Kreditrisiko.',
                'negative': 'Geringes Eigenkapital erhöht die Abhängigkeit vom Kredit.'
            }
        }
        
        return explanations.get(factor_name, {}).get(direction, 
            f'Faktor {factor_name} hat {direction}e Auswirkung auf die Entscheidung.')
    
    def _generate_counterfactual_explanation(self, data: np.ndarray) -> Dict:
        """
        Erstellt Counterfactual-Erklärung: Was müsste sich ändern für positive Entscheidung?
        Wichtig für DSGVO Art. 22 - gibt Betroffenen actionable Information
        """
        
        # Vereinfachtes Counterfactual - in Praxis: komplexere Algorithmen
        feature_names = ['einkommen', 'beschaeftigungsdauer', 'bestehende_kredite', 
                        'eigenkapital', 'alter', 'familienstand']
        
        current_values = dict(zip(feature_names, data))
        
        # Simuliere Verbesserungsvorschläge
        improvements = []
        
        if current_values['einkommen'] < 3000:
            improvements.append({
                'factor': 'Einkommen',
                'current_value': f"{current_values['einkommen']:.0f}€",
                'target_value': '3.500€+',
                'improvement': 'Ein höheres monatliches Einkommen würde Ihre Kreditchancen erheblich verbessern.'
            })
        
        if current_values['beschaeftigungsdauer'] < 2:
            improvements.append({
                'factor': 'Beschäftigungsdauer',
                'current_value': f"{current_values['beschaeftigungsdauer']:.1f} Jahre",
                'target_value': '2+ Jahre',
                'improvement': 'Eine längere Beschäftigungsdauer bei Ihrem aktuellen Arbeitgeber würde Stabilität zeigen.'
            })
        
        if current_values['bestehende_kredite'] > 2:
            improvements.append({
                'factor': 'Bestehende Kredite',
                'current_value': f"{current_values['bestehende_kredite']:.0f}",
                'target_value': '≤ 2',
                'improvement': 'Das Reduzieren bestehender Kreditverpflichtungen würde Ihr Profil verbessern.'
            })
        
        return {
            'message': 'Folgende Verbesserungen könnten zu einer positiven Kreditentscheidung führen:',
            'improvements': improvements,
            'note': 'Diese Vorschläge basieren auf statistischen Mustern und garantieren keine zukünftige Genehmigung.',
            'reapplication_info': 'Sie können nach 6 Monaten erneut einen Antrag stellen.'
        }
    
    def _generate_appeal_rights_info(self, decision: DecisionType) -> Dict:
        """
        Informiert über Rechte nach DSGVO Art. 22
        """
        
        base_rights = {
            'right_to_explanation': {
                'description': 'Sie haben das Recht auf eine Erläuterung der automatisierten Entscheidung.',
                'how_to_exercise': 'Kontaktieren Sie unseren Kundenservice unter datenschutz@bank.de',
                'response_time': '30 Tage'
            },
            'right_to_human_review': {
                'description': 'Sie haben das Recht, eine Überprüfung durch eine natürliche Person zu verlangen.',
                'how_to_exercise': 'Schriftlicher Antrag auf manuelle Prüfung',
                'response_time': '14 Tage'
            },
            'right_to_contest': {
                'description': 'Sie haben das Recht, die Entscheidung anzufechten.',
                'how_to_exercise': 'Widerspruch mit Begründung einreichen',
                'response_time': '30 Tage'
            }
        }
        
        if decision == DecisionType.REJECTED:
            base_rights['right_to_rectification'] = {
                'description': 'Falls die Entscheidung auf falschen Daten basiert, können Sie eine Berichtigung verlangen.',
                'how_to_exercise': 'Nachweis korrekter Daten vorlegen',
                'response_time': '30 Tage'
            }
        
        return {
            'your_rights': base_rights,
            'contact_info': {
                'data_protection_officer': 'dpo@bank.de',
                'customer_service': '+49 800 123456',
                'postal_address': 'Datenschutzbeauftragte, Musterbank AG, 12345 Musterstadt'
            },
            'supervisory_authority': {
                'name': 'Zuständige Datenschutzaufsichtsbehörde',
                'contact': 'Je nach Bundesland - siehe www.bfdi.bund.de'
            }
        }
    
    def _requires_human_review(self, decision: DecisionType, confidence: float, application_data: Dict) -> bool:
        """
        Bestimmt ob menschliche Überprüfung erforderlich ist
        """
        
        # Automatisch bei mittlerer Konfidenz
        if decision == DecisionType.MANUAL_REVIEW:
            return True
        
        # Bei niedriger Konfidenz
        if confidence < 0.7:
            return True
        
        # Bei besonderen Umständen (z.B. hohe Kreditsumme)
        if application_data.get('loan_amount', 0) > 100000:
            return True
        
        # Bei geschützten Merkmalen (zusätzliche Vorsicht)
        if application_data.get('age', 100) < 25 or application_data.get('age', 0) > 65:
            return True
        
        return False
    
    def _log_decision_audit(self, applicant_id: str, data: np.ndarray, 
                          risk_score: float, decision: DecisionType, explanation: Dict):
        """
        Umfassendes Audit-Logging für Compliance
        """
        
        audit_record = {
            'timestamp': datetime.datetime.now(),
            'applicant_id': applicant_id,
            'decision': decision.value,
            'risk_score': risk_score,
            'model_version': 'credit_model_v2.1',
            'input_features': data.tolist(),
            'explanation_provided': True,
            'human_review_triggered': explanation.get('human_review_required', False),
            'legal_basis': 'GDPR Art. 6(1)(f) - Legitimate Interest',
            'automated_decision': True,  # GDPR Art. 22 relevant
            'data_sources': explanation['algorithmic_logic']['data_sources']
        }
        
        self.audit_logger.log_credit_decision(audit_record)
    
    def generate_transparency_report(self, start_date: datetime.date, end_date: datetime.date) -> Dict:
        """
        Generiert Transparenzbericht für automatisierte Entscheidungen
        Wichtig für organisatorische Rechenschaftspflicht
        """
        
        # In Praxis: Daten aus Audit-Logs aggregieren
        report = {
            'report_period': {'start': start_date, 'end': end_date},
            'total_applications': 15420,
            'automated_decisions': {
                'total': 15420,
                'approved': 8234,
                'rejected': 4567,
                'manual_review': 2619
            },
            'decision_accuracy': {
                'precision': 0.89,
                'recall': 0.91,
                'f1_score': 0.90,
                'validation_date': '2024-01-15'
            },
            'fairness_metrics': {
                'demographic_parity': 0.95,
                'equal_opportunity': 0.93,
                'bias_detected': False,
                'protected_attributes_analysis': 'Completed - No significant bias'
            },
            'human_interventions': {
                'total_reviews': 2619,
                'decisions_overturned': 234,
                'overturn_rate': 0.089,
                'most_common_reasons': [
                    'Additional income verification',
                    'Special circumstances consideration',
                    'Credit history context'
                ]
            },
            'appeals_and_complaints': {
                'total_appeals': 45,
                'appeals_upheld': 12,
                'average_resolution_time_days': 18,
                'complaint_categories': {
                    'explanation_quality': 15,
                    'decision_accuracy': 20,
                    'process_fairness': 10
                }
            },
            'compliance_status': {
                'gdpr_art22_compliant': True,
                'explanation_coverage': '100%',
                'human_review_available': True,
                'appeal_process_functional': True,
                'last_compliance_audit': '2024-01-01'
            }
        }
        
        return report

# Verwendung des DSGVO-konformen Kreditprüfungssystems
def demonstrate_gdpr_compliant_credit_scoring():
    # System initialisieren (vereinfacht)
    credit_scoring = GDPRCompliantCreditScoring(
        model=None,  # Trained ML model
        explainer=None,  # SHAP explainer
        audit_logger=None  # Audit logging system
    )
    
    # Beispiel-Kreditantrag
    application = {
        'application_id': 'APP_2024_001234',
        'applicant_id': 'CUST_987654',
        'loan_amount': 25000,
        'einkommen': 2800,
        'beschaeftigungsdauer': 1.5,
        'bestehende_kredite': 1,
        'eigenkapital': 5000,
        'alter': 32,
        'familienstand': 'ledig'
    }
    
    # DSGVO-konforme Kreditprüfung durchführen
    decision = credit_scoring.process_credit_application(application)
    
    print(f"Kreditentscheidung: {decision.decision.value}")
    print(f"Risiko-Score: {decision.risk_score:.3f}")
    print(f"Erklärung bereitgestellt: {len(decision.explanation) > 0}")
    print(f"Menschliche Überprüfung erforderlich: {decision.human_review_required}")
    print(f"Rechtsinformationen bereitgestellt: {len(decision.appeal_rights_info) > 0}")
    
    return decision

# Demonstration ausführen
credit_decision = demonstrate_gdpr_compliant_credit_scoring()
print("\\nGDPR Art. 22 konforme Kreditprüfung abgeschlossen")`
    },
    "hiring-algorithms": {
      title: "KI-basierte Personalauswahl",
      description: "Automatisierte Screening und Bewertung von Bewerbern",
      risk_level: "Sehr Hoch",
      legal_basis: "Einwilligung + AGG-Compliance",
      affected_rights: ["Berufschancen", "Gleichbehandlung", "Persönlichkeitsrechte"],
      compliance_requirements: {
        gdpr_art22: [
          "Explizite Einwilligung für automatisierte Bewertung",
          "Transparenz über Bewertungskriterien",
          "Recht auf menschliche Überprüfung",
          "Diskriminierungsschutz gewährleisten"
        ]
      }
    },
    "insurance-assessment": {
      title: "Versicherungsrisikobewertung",
      description: "Automatisierte Bewertung von Versicherungsrisiken und Prämien",
      risk_level: "Hoch",
      legal_basis: "Berechtigtes Interesse + Vertragsdurchführung",
      affected_rights: ["Versicherungsschutz", "Prämienhöhe", "Vertragsabschluss"],
      compliance_requirements: {
        gdpr_art22: [
          "Transparenz über Risikofaktoren",
          "Nachvollziehbare Prämienberechnung",
          "Widerspruchsmöglichkeiten",
          "Diskriminierungsverbote beachten"
        ]
      }
    },
    "fraud-detection": {
      title: "Betrugsdetection",
      description: "Automatisierte Erkennung betrügerischer Transaktionen",
      risk_level: "Mittel-Hoch",
      legal_basis: "Berechtigtes Interesse",
      affected_rights: ["Transaktionsfreiheit", "Kontosperrung", "Reputationsschäden"],
      compliance_requirements: {
        gdpr_art22: [
          "Sofortige Benachrichtigung bei Kontosperrung",
          "Schnelle manuelle Überprüfungsmöglichkeit",
          "Transparenz über Detection-Kriterien",
          "Minimierung von False Positives"
        ]
      }
    }
  };
  const complianceSteps = [
    {
      title: "Legal Assessment",
      icon: Scale,
      description: "Rechtliche Einordnung der automatisierten Entscheidung",
      duration: "1-2 Wochen",
      tasks: [
        "DSGVO Art. 22 Anwendbarkeit prüfen",
        "Rechtsgrundlage identifizieren",
        "Betroffenenrechte analysieren",
        "Sector-spezifische Anforderungen bewerten"
      ],
      deliverables: [
        "Legal Assessment Report",
        "Compliance Requirements Matrix",
        "Risk Assessment Document",
        "Implementation Roadmap"
      ]
    },
    {
      title: "Technical Implementation",
      icon: Settings,
      description: "Technische Umsetzung der Compliance-Anforderungen",
      duration: "4-6 Wochen",
      tasks: [
        "Explainable AI implementieren",
        "Human-in-the-Loop Systeme einrichten",
        "Audit-Logging konfigurieren",
        "Bias-Detection entwickeln"
      ],
      deliverables: [
        "XAI Integration",
        "Decision Audit System",
        "Human Review Interface",
        "Fairness Monitoring Dashboard"
      ]
    },
    {
      title: "Process Integration",
      icon: Workflow,
      description: "Integration in bestehende Geschäftsprozesse",
      duration: "2-3 Wochen",
      tasks: [
        "Decision Workflows anpassen",
        "Mitarbeiterschulungen durchführen",
        "Appeal-Prozesse etablieren",
        "Customer Communication optimieren"
      ],
      deliverables: [
        "Updated Process Documentation",
        "Training Materials",
        "Appeal Process Guide",
        "Customer Information Templates"
      ]
    },
    {
      title: "Monitoring & Validation",
      icon: Monitor,
      description: "Kontinuierliche Überwachung und Validierung",
      duration: "Ongoing",
      tasks: [
        "Performance Monitoring einrichten",
        "Compliance Audits durchführen",
        "Feedback-Loops implementieren",
        "Continuous Improvement etablieren"
      ],
      deliverables: [
        "Monitoring Dashboard",
        "Compliance Reports",
        "Performance Metrics",
        "Improvement Recommendations"
      ]
    }
  ];
  const toggleStep = (stepId) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };
  const calculatePhaseProgress = (phaseIndex) => {
    const phase = complianceSteps[phaseIndex];
    const completedCount = phase.tasks.filter(
      (task) => completedSteps[`${phaseIndex}-${task}`]
    ).length;
    return completedCount / phase.tasks.length * 100;
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "Automated Decision Making – DSGVO Art. 22 & EU AI Act" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "DSGVO-konforme automatisierte Entscheidungsfindung: Art. 22 Compliance, EU AI Act Anforderungen & XAI Implementation. Jetzt rechtssicher umsetzen!" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://marsjonas.com/ki/automated-decision-making" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify(structuredData) })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        ref: containerRef,
        className: "relative bg-gradient-to-br from-amber-900 via-orange-800 to-red-900 text-white overflow-hidden",
        style: { y: headerY, opacity: headerOpacity },
        children: [
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/20" }),
          /* @__PURE__ */ jsxs("div", { className: "relative container mx-auto px-6 py-24", children: [
            /* @__PURE__ */ jsx("nav", { className: "flex mb-8", "aria-label": "Breadcrumb", children: /* @__PURE__ */ jsxs("ol", { className: "inline-flex items-center space-x-1 md:space-x-3", children: [
              /* @__PURE__ */ jsx("li", { className: "inline-flex items-center", children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "inline-flex items-center text-sm font-medium text-white/70 hover:text-white", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 mr-2", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { d: "M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" }) }),
                "Home"
              ] }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-white/50", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" }) }),
                /* @__PURE__ */ jsx(Link, { to: "/ki", className: "ml-1 text-sm font-medium text-white/70 hover:text-white md:ml-2", children: "KI & Innovation" })
              ] }) }),
              /* @__PURE__ */ jsx("li", { "aria-current": "page", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
                /* @__PURE__ */ jsx("svg", { className: "w-6 h-6 text-white/50", fill: "currentColor", viewBox: "0 0 20 20", children: /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z", clipRule: "evenodd" }) }),
                /* @__PURE__ */ jsx("span", { className: "ml-1 text-sm font-medium text-white md:ml-2", children: "Automated Decision Making" })
              ] }) })
            ] }) }),
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { opacity: 0, y: 30 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.8 },
                className: "max-w-4xl mx-auto text-center",
                children: [
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8", children: [
                    /* @__PURE__ */ jsx(Workflow, { className: "w-5 h-5" }),
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "ADM Compliance Guide" })
                  ] }),
                  /* @__PURE__ */ jsx("h1", { className: "text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent", children: "Automated Decision-Making Compliance" }),
                  /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-orange-100 mb-8 leading-relaxed", children: "Vollständiger Leitfaden für rechtskonforme automatisierte Entscheidungsfindung nach DSGVO Art. 22 und EU AI Act" }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
                    /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-white/20 text-white border-white/30", children: [
                      /* @__PURE__ */ jsx(Scale, { className: "w-4 h-4 mr-1" }),
                      "DSGVO Art. 22"
                    ] }),
                    /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-white/20 text-white border-white/30", children: [
                      /* @__PURE__ */ jsx(Bot, { className: "w-4 h-4 mr-1" }),
                      "EU AI Act"
                    ] }),
                    /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-white/20 text-white border-white/30", children: [
                      /* @__PURE__ */ jsx(Eye, { className: "w-4 h-4 mr-1" }),
                      "Algorithmic Accountability"
                    ] })
                  ] })
                ]
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsxs(Card, { className: "mb-12 bg-orange-50 border-orange-200", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-orange-600" }),
          "Inhaltsverzeichnis"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("nav", { "aria-label": "Table of contents", children: /* @__PURE__ */ jsxs("ol", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#frameworks", className: "text-orange-700 hover:text-orange-900 hover:underline flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "1." }),
            " Compliance Frameworks für ADM"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#decision-types", className: "text-orange-700 hover:text-orange-900 hover:underline flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "2." }),
            " Typen automatisierter Entscheidungen"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#implementation", className: "text-orange-700 hover:text-orange-900 hover:underline flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "3." }),
            " ADM Compliance Implementation"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#monitoring", className: "text-orange-700 hover:text-orange-900 hover:underline flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "4." }),
            " Monitoring & Validation"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#compliance-validation", className: "text-orange-700 hover:text-orange-900 hover:underline flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "5." }),
            " Compliance Validation & Auditing"
          ] }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("a", { href: "#related-topics", className: "text-orange-700 hover:text-orange-900 hover:underline flex items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "6." }),
            " Verwandte Themen"
          ] }) })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxs(Tabs, { defaultValue: "frameworks", className: "space-y-8", children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2 lg:grid-cols-5", children: [
          /* @__PURE__ */ jsx(TabsTrigger, { value: "frameworks", children: "Frameworks" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "decision-types", children: "Decision Types" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "implementation", children: "Implementation" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "monitoring", children: "Monitoring" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "compliance", children: "Compliance" })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "frameworks", className: "space-y-8", id: "frameworks", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Compliance Frameworks für ADM" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Übergreifende rechtliche und regulatorische Frameworks für automatisierte Entscheidungsfindung mit spezifischen Anforderungen und Umsetzungsrichtlinien." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: complianceFrameworks.map((framework, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-3", children: [
                    /* @__PURE__ */ jsx("div", { className: `p-3 rounded-lg ${framework.color}`, children: /* @__PURE__ */ jsx(framework.icon, { className: "w-6 h-6 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: framework.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: framework.subtitle })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: framework.description })
                ] }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Kern-Anforderungen:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: framework.requirements.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                      req
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "pt-3 border-t bg-orange-50 p-3 rounded", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-orange-800 mb-2", children: "Zentrale Pflichten:" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-orange-700", children: framework.key_obligations })
                  ] })
                ] })
              ] })
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "decision-types", className: "space-y-8", id: "decision-types", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Typen automatisierter Entscheidungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Verschiedene Kategorien automatisierter Entscheidungsfindung mit spezifischen Compliance-Anforderungen und Implementierungsbeispielen." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: Object.entries(decisionTypes).map(([key, type]) => /* @__PURE__ */ jsx(
            Button,
            {
              variant: selectedDecisionType === key ? "default" : "outline",
              onClick: () => setSelectedDecisionType(key),
              className: "mb-2",
              children: type.title
            },
            key
          )) }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: decisionTypes[selectedDecisionType].title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: decisionTypes[selectedDecisionType].description })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: /* @__PURE__ */ jsxs(
                Badge,
                {
                  variant: decisionTypes[selectedDecisionType].risk_level === "Sehr Hoch" ? "destructive" : decisionTypes[selectedDecisionType].risk_level === "Hoch" ? "default" : "secondary",
                  children: [
                    decisionTypes[selectedDecisionType].risk_level,
                    " Risiko"
                  ]
                }
              ) })
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Rechtliche Grundlage:" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm bg-blue-50 p-3 rounded text-blue-800", children: decisionTypes[selectedDecisionType].legal_basis })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Betroffene Rechte:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: decisionTypes[selectedDecisionType].affected_rights.map((right, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "w-3 h-3 text-orange-500" }),
                    right
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Compliance Status:" }),
                  /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                      "DSGVO Art. 22 konform"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                      "Transparenz implementiert"
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                      "Human Review verfügbar"
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "DSGVO Art. 22 Anforderungen:" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: decisionTypes[selectedDecisionType].compliance_requirements.gdpr_art22.map((req, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2 text-sm bg-gray-50 p-3 rounded", children: [
                  /* @__PURE__ */ jsx(Scale, { className: "w-4 h-4 text-blue-500 mt-0.5" }),
                  req
                ] }, idx)) })
              ] }),
              selectedDecisionType === "credit-scoring" && decisionTypes[selectedDecisionType].implementation_example && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Implementierungsbeispiel:" }),
                /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-sm overflow-x-auto", children: /* @__PURE__ */ jsx("code", { children: decisionTypes[selectedDecisionType].implementation_example }) }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "implementation", className: "space-y-8", id: "implementation", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "ADM Compliance Implementation" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Strukturierter Implementierungsprozess für DSGVO-konforme automatisierte Entscheidungsfindung mit konkreten Schritten und Deliverables." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: complianceSteps.map((step, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: "p-3 rounded-lg bg-orange-500", children: /* @__PURE__ */ jsx(step.icon, { className: "w-6 h-6 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs(CardTitle, { className: "text-xl", children: [
                        "Phase ",
                        index + 1,
                        ": ",
                        step.title
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: step.description })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3 mr-1" }),
                      step.duration
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Progress, { value: calculatePhaseProgress(index), className: "w-24" }) })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Aufgaben:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: step.tasks.map((task, idx) => /* @__PURE__ */ jsxs(
                        "li",
                        {
                          className: "flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded",
                          onClick: () => toggleStep(`${index}-${task}`),
                          children: [
                            /* @__PURE__ */ jsx(
                              "div",
                              {
                                className: `w-4 h-4 rounded border-2 flex items-center justify-center ${completedSteps[`${index}-${task}`] ? "bg-green-500 border-green-500" : "border-gray-300"}`,
                                children: completedSteps[`${index}-${task}`] && /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-white" })
                              }
                            ),
                            /* @__PURE__ */ jsx("span", { className: `text-sm ${completedSteps[`${index}-${task}`] ? "line-through text-gray-500" : ""}`, children: task })
                          ]
                        },
                        idx
                      )) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Deliverables:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: step.deliverables.map((deliverable, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                        /* @__PURE__ */ jsx(FileCheck, { className: "w-4 h-4 text-blue-500" }),
                        deliverable
                      ] }, idx)) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", children: [
                      /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
                      "Phase Template"
                    ] }),
                    /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", children: [
                      /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4 mr-2" }),
                      "Checkliste"
                    ] })
                  ] })
                ] })
              ] })
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "monitoring", className: "space-y-8", id: "monitoring", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "ADM Monitoring & Validation" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Kontinuierliche Überwachung automatisierter Entscheidungssysteme mit Performance-Metriken, Fairness-Assessments und Compliance-Validierung." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(BarChart3, { className: "w-5 h-5 text-blue-500" }),
                "Decision Metrics"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Decision Accuracy" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "94.2%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 94.2, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "False Positive Rate" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "3.1%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 3.1, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Human Review Rate" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-blue-500", children: "12.5%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 12.5, className: "h-2" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(ShieldCheck, { className: "w-5 h-5 text-purple-500" }),
                "Fairness & Bias"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Demographic Parity" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "0.95" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 95, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Equal Opportunity" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "0.93" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 93, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Bias Detection" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "None" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 100, className: "h-2" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Scale, { className: "w-5 h-5 text-orange-500" }),
                "Compliance Status"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "DSGVO Art. 22" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "✓" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 100, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Explanation Coverage" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "100%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 100, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Appeal Process" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "Active" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 100, className: "h-2" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Activity, { className: "w-5 h-5 text-green-500" }),
              "Automatisiertes Monitoring System"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-sm overflow-x-auto", children: /* @__PURE__ */ jsx("code", { children: `# ADM Compliance Monitoring System
import logging
import numpy as np
from datetime import datetime, timedelta
from typing import Dict, List, Optional
from dataclasses import dataclass

@dataclass
class ComplianceAlert:
    alert_type: str
    severity: str
    message: str
    timestamp: datetime
    affected_decisions: int
    remediation_required: bool

class ADMComplianceMonitor:
    """
    Kontinuierliches Monitoring für automatisierte Entscheidungssysteme
    Überwacht DSGVO Art. 22 Compliance und EU AI Act Anforderungen
    """
    
    def __init__(self):
        self.alerts = []
        self.compliance_thresholds = {
            'explanation_coverage': 0.99,
            'human_review_availability': 1.0,
            'decision_accuracy': 0.85,
            'demographic_parity': 0.8,
            'false_positive_rate': 0.1,
            'response_time_explanation': 30,  # seconds
            'appeal_resolution_time': 2880  # minutes (48 hours)
        }
    
    def monitor_decision_quality(self, decisions_batch: List[Dict]) -> Dict:
        """Überwacht Qualität der automatisierten Entscheidungen"""
        
        total_decisions = len(decisions_batch)
        explained_decisions = sum(1 for d in decisions_batch if d.get('explanation_provided', False))
        human_reviewable = sum(1 for d in decisions_batch if d.get('human_review_available', False))
        
        metrics = {
            'total_decisions': total_decisions,
            'explanation_coverage': explained_decisions / total_decisions if total_decisions > 0 else 0,
            'human_review_coverage': human_reviewable / total_decisions if total_decisions > 0 else 0,
            'average_confidence': np.mean([d.get('confidence', 0) for d in decisions_batch]),
            'low_confidence_rate': sum(1 for d in decisions_batch if d.get('confidence', 1) < 0.7) / total_decisions
        }
        
        # Compliance-Checks
        if metrics['explanation_coverage'] < self.compliance_thresholds['explanation_coverage']:
            self.create_alert(
                'GDPR_ART22_VIOLATION',
                'HIGH',
                f"Explanation coverage {metrics['explanation_coverage']:.2%} below threshold",
                affected_decisions=total_decisions - explained_decisions
            )
        
        if metrics['human_review_coverage'] < self.compliance_thresholds['human_review_availability']:
            self.create_alert(
                'HUMAN_REVIEW_UNAVAILABLE',
                'CRITICAL',
                "Human review not available for all decisions",
                affected_decisions=total_decisions - human_reviewable
            )
        
        return metrics
    
    def assess_algorithmic_fairness(self, decisions_data: Dict) -> Dict:
        """Bewertet algorithmische Fairness und Bias"""
        
        # Demographic Parity Assessment
        protected_groups = decisions_data.get('protected_attributes', {})
        fairness_metrics = {}
        
        for attribute, groups in protected_groups.items():
            group_approval_rates = {}
            
            for group, group_data in groups.items():
                approvals = sum(1 for d in group_data if d['decision'] == 'approved')
                total = len(group_data)
                group_approval_rates[group] = approvals / total if total > 0 else 0
            
            # Demographic Parity: max difference between group approval rates
            approval_rates = list(group_approval_rates.values())
            demographic_parity = 1 - (max(approval_rates) - min(approval_rates))
            
            fairness_metrics[attribute] = {
                'demographic_parity': demographic_parity,
                'group_rates': group_approval_rates
            }
            
            # Alert bei Bias-Detection
            if demographic_parity < self.compliance_thresholds['demographic_parity']:
                self.create_alert(
                    'ALGORITHMIC_BIAS_DETECTED',
                    'HIGH',
                    f"Demographic parity violation for {attribute}: {demographic_parity:.3f}",
                    affected_decisions=sum(len(data) for data in groups.values())
                )
        
        return fairness_metrics
    
    def validate_explanation_quality(self, explanations_sample: List[Dict]) -> Dict:
        """Validiert Qualität der bereitgestellten Erklärungen"""
        
        quality_metrics = {
            'total_explanations': len(explanations_sample),
            'average_explanation_length': np.mean([len(exp.get('text', '')) for exp in explanations_sample]),
            'feature_coverage': self._assess_feature_coverage(explanations_sample),
            'comprehensibility_score': self._assess_comprehensibility(explanations_sample),
            'counterfactual_coverage': sum(1 for exp in explanations_sample if 'counterfactual' in exp) / len(explanations_sample)
        }
        
        # Qualitäts-Alerts
        if quality_metrics['comprehensibility_score'] < 0.7:
            self.create_alert(
                'EXPLANATION_QUALITY_LOW',
                'MEDIUM',
                f"Explanation comprehensibility below threshold: {quality_metrics['comprehensibility_score']:.2f}",
                affected_decisions=len(explanations_sample)
            )
        
        return quality_metrics
    
    def monitor_human_intervention_rate(self, intervention_data: List[Dict]) -> Dict:
        """Überwacht Rate und Qualität menschlicher Interventionen"""
        
        total_interventions = len(intervention_data)
        successful_interventions = sum(1 for i in intervention_data if i.get('outcome') == 'decision_changed')
        
        intervention_metrics = {
            'total_interventions': total_interventions,
            'intervention_success_rate': successful_interventions / total_interventions if total_interventions > 0 else 0,
            'average_intervention_time': np.mean([i.get('processing_time_minutes', 0) for i in intervention_data]),
            'intervention_categories': self._categorize_interventions(intervention_data)
        }
        
        # Warnung bei hoher Interventionsrate (könnte auf Systemprobleme hinweisen)
        recent_decisions = self._get_recent_decisions_count()
        intervention_rate = total_interventions / recent_decisions if recent_decisions > 0 else 0
        
        if intervention_rate > 0.2:  # Mehr als 20% Interventionen
            self.create_alert(
                'HIGH_INTERVENTION_RATE',
                'MEDIUM',
                f"Human intervention rate unusually high: {intervention_rate:.2%}",
                affected_decisions=total_interventions
            )
        
        return intervention_metrics
    
    def create_alert(self, alert_type: str, severity: str, message: str, affected_decisions: int = 0):
        """Erstellt Compliance-Alert"""
        
        alert = ComplianceAlert(
            alert_type=alert_type,
            severity=severity,
            message=message,
            timestamp=datetime.now(),
            affected_decisions=affected_decisions,
            remediation_required=severity in ['HIGH', 'CRITICAL']
        )
        
        self.alerts.append(alert)
        
        # Logging für Audit-Trail
        logging.warning(f"ADM Compliance Alert: {alert_type} - {message}")
        
        # Bei kritischen Alerts: sofortige Benachrichtigung
        if severity == 'CRITICAL':
            self._send_immediate_notification(alert)
    
    def generate_compliance_dashboard(self) -> Dict:
        """Generiert Compliance-Dashboard für Management"""
        
        recent_alerts = [a for a in self.alerts if a.timestamp > datetime.now() - timedelta(days=7)]
        
        dashboard = {
            'compliance_status': 'COMPLIANT' if len([a for a in recent_alerts if a.severity == 'CRITICAL']) == 0 else 'NON_COMPLIANT',
            'total_alerts_7d': len(recent_alerts),
            'critical_alerts': len([a for a in recent_alerts if a.severity == 'CRITICAL']),
            'alert_categories': self._categorize_alerts(recent_alerts),
            'remediation_queue': [a for a in recent_alerts if a.remediation_required],
            'compliance_score': self._calculate_compliance_score(),
            'next_audit_date': datetime.now() + timedelta(days=90),
            'regulatory_reporting_due': datetime.now() + timedelta(days=30)
        }
        
        return dashboard
    
    def _calculate_compliance_score(self) -> float:
        """Berechnet Overall Compliance Score"""
        recent_critical_alerts = len([a for a in self.alerts 
                                     if a.timestamp > datetime.now() - timedelta(days=30) 
                                     and a.severity == 'CRITICAL'])
        
        base_score = 100
        penalty = min(recent_critical_alerts * 10, 50)  # Max 50 Punkte Abzug
        
        return max(base_score - penalty, 0) / 100

# Monitoring System Demo
monitor = ADMComplianceMonitor()

# Beispiel: Decision Quality Monitoring
sample_decisions = [
    {'decision': 'approved', 'confidence': 0.92, 'explanation_provided': True, 'human_review_available': True},
    {'decision': 'rejected', 'confidence': 0.85, 'explanation_provided': True, 'human_review_available': True},
    {'decision': 'approved', 'confidence': 0.65, 'explanation_provided': False, 'human_review_available': True}
]

quality_metrics = monitor.monitor_decision_quality(sample_decisions)
print(f"Decision Quality Metrics: {quality_metrics}")

# Compliance Dashboard
dashboard = monitor.generate_compliance_dashboard()
print(f"Compliance Status: {dashboard['compliance_status']}")
print(f"Compliance Score: {dashboard['compliance_score']:.2%}")
print(f"Active Alerts: {dashboard['total_alerts_7d']}")` }) }) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "compliance", className: "space-y-8", id: "compliance-validation", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Compliance Validation & Auditing" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Systematische Validierung der ADM-Compliance mit Audit-Checklisten, regulatorischen Anforderungen und kontinuierlicher Überwachung." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(FileCheck, { className: "w-5 h-5 text-green-500" }),
                "DSGVO Art. 22 Audit"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                "Automatisierte Entscheidung identifiziert",
                "Rechtmäßigkeitsgrundlage vorhanden",
                "Aussagekräftige Informationen bereitgestellt",
                "Menschliche Aufsicht implementiert",
                "Anfechtungsmöglichkeit gewährleistet",
                "Widerspruchsrecht respektiert",
                "Angemessene Schutzmaßnahmen etabliert",
                "Dokumentation vollständig"
              ].map((item, index) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "flex items-center gap-3 p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100",
                  onClick: () => toggleStep(`gdpr-audit-${index}`),
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: `w-5 h-5 rounded border-2 flex items-center justify-center ${completedSteps[`gdpr-audit-${index}`] ? "bg-green-500 border-green-500" : "border-gray-300"}`,
                        children: completedSteps[`gdpr-audit-${index}`] && /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-white" })
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: `text-sm ${completedSteps[`gdpr-audit-${index}`] ? "line-through text-gray-500" : ""}`, children: item })
                  ]
                },
                index
              )) }) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Bot, { className: "w-5 h-5 text-purple-500" }),
                "EU AI Act Compliance"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                "Risikoklassifizierung durchgeführt",
                "Qualitätsmanagementsystem etabliert",
                "Risikomanagementsystem implementiert",
                "Datengovernance sichergestellt",
                "Transparenzpflichten erfüllt",
                "Robustheit und Genauigkeit validiert",
                "Menschliche Aufsicht gewährleistet",
                "CE-Kennzeichnung vorbereitet"
              ].map((item, index) => /* @__PURE__ */ jsxs(
                "div",
                {
                  className: "flex items-center gap-3 p-2 bg-gray-50 rounded cursor-pointer hover:bg-gray-100",
                  onClick: () => toggleStep(`ai-act-audit-${index}`),
                  children: [
                    /* @__PURE__ */ jsx(
                      "div",
                      {
                        className: `w-5 h-5 rounded border-2 flex items-center justify-center ${completedSteps[`ai-act-audit-${index}`] ? "bg-green-500 border-green-500" : "border-gray-300"}`,
                        children: completedSteps[`ai-act-audit-${index}`] && /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-white" })
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { className: `text-sm ${completedSteps[`ai-act-audit-${index}`] ? "line-through text-gray-500" : ""}`, children: item })
                  ]
                },
                index
              )) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileText, { className: "w-5 h-5 text-blue-500" }),
              "Regulatorisches Reporting"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-blue-50 rounded-lg", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800", children: "Quarterly Reports" }),
                  /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-blue-600 mt-2", children: "4" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-600", children: "Compliance-Berichte erstellt" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-green-50 rounded-lg", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-green-800", children: "Audit Readiness" }),
                  /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-green-600 mt-2", children: "98%" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-green-600", children: "Dokumentation vollständig" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "text-center p-4 bg-purple-50 rounded-lg", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-purple-800", children: "Incident Reports" }),
                  /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-purple-600 mt-2", children: "0" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm text-purple-600", children: "Compliance-Verletzungen" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-4", children: [
                /* @__PURE__ */ jsxs(Button, { children: [
                  /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
                  "Compliance Report"
                ] }),
                /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
                  /* @__PURE__ */ jsx(FileText, { className: "w-4 h-4 mr-2" }),
                  "Audit Documentation"
                ] }),
                /* @__PURE__ */ jsxs(Button, { variant: "outline", children: [
                  /* @__PURE__ */ jsx(Activity, { className: "w-4 h-4 mr-2" }),
                  "Metrics Dashboard"
                ] })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5 },
          className: "bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white text-center mt-16",
          children: [
            /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-4", children: "Bereit für compliant automatisierte Entscheidungsfindung?" }),
            /* @__PURE__ */ jsx("p", { className: "text-amber-100 mb-6 max-w-2xl mx-auto", children: "Implementieren Sie rechtskonforme ADM-Systeme mit vollständiger DSGVO Art. 22 und EU AI Act Compliance für maximale Transparenz und Rechtssicherheit." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
              /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "secondary", children: [
                /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 mr-2" }),
                "ADM Compliance Toolkit"
              ] }),
              /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white hover:text-amber-600", children: [
                /* @__PURE__ */ jsx(MessageSquare, { className: "w-5 h-5 mr-2" }),
                "Regulatorische Beratung"
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("section", { className: "mt-16", id: "related-topics", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Verwandte Themen" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Bot, { className: "w-5 h-5 text-purple-600" }),
              "AI Ethics & Bias Management"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Ethische KI-Entwicklung und systematisches Bias-Management für faire automatisierte Entscheidungen." }),
              /* @__PURE__ */ jsxs(Link, { to: "/ki/ai-ethics", className: "text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1", children: [
                "Mehr erfahren ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-blue-600" }),
              "Data Protection by Design"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Datenschutz von Anfang an in automatisierte Entscheidungssysteme integrieren." }),
              /* @__PURE__ */ jsxs(Link, { to: "/datenschutz/privacy-by-design", className: "text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1", children: [
                "Mehr erfahren ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5 text-green-600" }),
              "Explainable AI (XAI)"
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { children: [
              /* @__PURE__ */ jsx("p", { className: "text-gray-600 mb-4", children: "Transparente und nachvollziehbare KI-Entscheidungen für maximale Compliance." }),
              /* @__PURE__ */ jsxs(Link, { to: "/ki/explainable-ai", className: "text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1", children: [
                "Mehr erfahren ",
                /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  AutomatedDecisionMaking as default
};
