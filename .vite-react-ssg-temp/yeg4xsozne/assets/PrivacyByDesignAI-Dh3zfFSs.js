import { jsxs, jsx } from "react/jsx-runtime";
import { useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Layers, Shield, Code, Lock, Zap, Network, Eye, Users, CheckCircle2, Target, CircuitBoard, Monitor, Clock, FileCheck, Download, Database, Activity, AlertCircle, MessageSquare } from "lucide-react";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "../main.mjs";
import "vite-react-ssg";
import "react-router-dom";
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
const PrivacyByDesignAI = () => {
  const [activePhase, setActivePhase] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({});
  const [selectedPrinciple, setSelectedPrinciple] = useState("proactive");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const privacyPrinciples = [
    {
      title: "Proactive not Reactive",
      subtitle: "Vorbeugende Maßnahmen",
      icon: Shield,
      color: "bg-blue-500",
      description: "Datenschutz bereits in der Planungsphase berücksichtigen",
      implementation: [
        "Privacy Impact Assessment vor KI-Entwicklung",
        "Threat Modeling für ML-Pipelines",
        "Präventive Anonymisierungsstrategien",
        "Frühzeitige Rechtsprüfung"
      ],
      ai_specific: "KI-Modelle mit eingebauten Privacy-Constraints trainieren"
    },
    {
      title: "Privacy as the Default",
      subtitle: "Datenschutz als Standard",
      icon: Lock,
      color: "bg-green-500",
      description: "Höchste Datenschutzeinstellungen ohne Nutzeraktion",
      implementation: [
        "Minimale Datensammlung standardmäßig aktiviert",
        "Opt-in statt Opt-out für Datenverarbeitung",
        "Automatische Löschfristen implementiert",
        "Verschlüsselung standardmäßig aktiviert"
      ],
      ai_specific: "Federated Learning als Default-Architektur wählen"
    },
    {
      title: "Full Functionality",
      subtitle: "Vollständige Funktionalität",
      icon: Zap,
      color: "bg-purple-500",
      description: "Datenschutz ohne Kompromisse bei der Funktionalität",
      implementation: [
        "Privacy-Preserving ML-Algorithmen nutzen",
        "Homomorphic Encryption für Berechnungen",
        "Secure Multi-Party Computation",
        "Differential Privacy mit optimalen Parametern"
      ],
      ai_specific: "Synthetische Daten mit gleicher statistischer Aussagekraft"
    },
    {
      title: "End-to-End Security",
      subtitle: "Durchgängige Sicherheit",
      icon: Network,
      color: "bg-red-500",
      description: "Sicherheit über den gesamten Datenlebenszyklus",
      implementation: [
        "Verschlüsselung in Transit und at Rest",
        "Sichere Schlüsselverwaltung",
        "Authentifizierung und Autorisierung",
        "Audit-Logs für alle Datenzugriffe"
      ],
      ai_specific: "Model Encryption und sichere Inferenz"
    },
    {
      title: "Visibility and Transparency",
      subtitle: "Sichtbarkeit und Transparenz",
      icon: Eye,
      color: "bg-yellow-500",
      description: "Nachvollziehbare und erklärbare Verarbeitung",
      implementation: [
        "Transparente Algorithmen verwenden",
        "Verständliche Datenschutzerklärungen",
        "Explainable AI implementieren",
        "Regelmäßige Transparenzberichte"
      ],
      ai_specific: "LIME/SHAP für Modellerklärungen integrieren"
    },
    {
      title: "Respect for User Privacy",
      subtitle: "Respekt vor Nutzerprivatsphäre",
      icon: Users,
      color: "bg-indigo-500",
      description: "Nutzerinteressen über Geschäftsinteressen stellen",
      implementation: [
        "Granulare Einwilligungsoptionen",
        "Einfache Widerrufsmöglichkeiten",
        "Datenminimierung konsequent umsetzen",
        "Zweckbindung strikt einhalten"
      ],
      ai_specific: "Right to Explanation für KI-Entscheidungen"
    }
  ];
  const developmentPhases = [
    {
      title: "Requirements & Planning",
      icon: Target,
      description: "Privacy-Anforderungen definieren und planen",
      duration: "2-3 Wochen",
      deliverables: [
        "Privacy Impact Assessment",
        "Data Flow Diagramme",
        "Privacy Requirements Specification",
        "Compliance-Matrix"
      ],
      privacy_tasks: [
        "Identifikation sensibler Daten",
        "Rechtliche Grundlagen prüfen",
        "Privacy-by-Design Architektur entwerfen",
        "Stakeholder-Alignment herstellen"
      ]
    },
    {
      title: "Architecture & Design",
      icon: CircuitBoard,
      description: "Privacy-freundliche KI-Architektur entwickeln",
      duration: "3-4 Wochen",
      deliverables: [
        "System Architecture Document",
        "Privacy Architecture Blueprint",
        "Security Design Patterns",
        "Data Minimization Strategy"
      ],
      privacy_tasks: [
        "Privacy-Preserving Algorithmen auswählen",
        "Anonymisierungskonzepte definieren",
        "Sichere Datenflüsse entwerfen",
        "Encryption-Strategien planen"
      ]
    },
    {
      title: "Implementation",
      icon: Code,
      description: "Privacy-konforme Implementierung der KI-Systeme",
      duration: "6-8 Wochen",
      deliverables: [
        "Privacy-Enhanced ML Models",
        "Secure Data Pipeline",
        "Anonymization Tools",
        "Privacy Monitoring System"
      ],
      privacy_tasks: [
        "Differential Privacy implementieren",
        "Federated Learning Setup",
        "Secure Aggregation programmieren",
        "Privacy Tests entwickeln"
      ]
    },
    {
      title: "Testing & Validation",
      icon: CheckCircle2,
      description: "Umfassende Privacy- und Security-Tests",
      duration: "2-3 Wochen",
      deliverables: [
        "Privacy Test Results",
        "Security Audit Report",
        "Compliance Validation",
        "Performance Benchmarks"
      ],
      privacy_tasks: [
        "Privacy Leakage Tests",
        "Anonymization Quality Assessment",
        "Compliance-Checks durchführen",
        "Penetration Testing"
      ]
    },
    {
      title: "Deployment & Monitoring",
      icon: Monitor,
      description: "Sichere Bereitstellung und kontinuierliches Monitoring",
      duration: "1-2 Wochen",
      deliverables: [
        "Deployment Guide",
        "Monitoring Dashboard",
        "Incident Response Plan",
        "Privacy Metrics"
      ],
      privacy_tasks: [
        "Privacy Monitoring einrichten",
        "Anomalie-Detection konfigurieren",
        "Compliance-Reporting automatisieren",
        "Wartungs-Prozeduren definieren"
      ]
    }
  ];
  const implementationStrategies = {
    "proactive": {
      name: "Proactive Privacy Strategy",
      description: "Vorbeugende Datenschutzmaßnahmen in der KI-Entwicklung",
      techniques: [
        {
          name: "Privacy Impact Assessment (PIA)",
          implementation: "Systematische Bewertung vor Projektbeginn",
          code_example: `# Privacy Impact Assessment für KI-Systeme
class AIPrivacyImpactAssessment:
    def __init__(self, project_name, data_types, processing_purposes):
        self.project_name = project_name
        self.data_types = data_types
        self.processing_purposes = processing_purposes
        self.risk_matrix = {}
        
    def assess_data_sensitivity(self):
        """Bewertung der Datensensitivität"""
        sensitivity_scores = {}
        
        sensitive_categories = {
            'personal_identifiers': 5,
            'financial_data': 4,
            'health_data': 5,
            'biometric_data': 5,
            'location_data': 3,
            'behavioral_data': 3,
            'demographic_data': 2
        }
        
        for data_type in self.data_types:
            category = self.classify_data_category(data_type)
            sensitivity_scores[data_type] = sensitive_categories.get(category, 1)
            
        return sensitivity_scores
    
    def evaluate_processing_risks(self):
        """Bewertung der Verarbeitungsrisiken"""
        risk_factors = {
            'automated_decision_making': 4,
            'profiling': 3,
            'large_scale_processing': 3,
            'systematic_monitoring': 4,
            'data_matching': 3,
            'innovative_technology': 2
        }
        
        processing_risks = {}
        for purpose in self.processing_purposes:
            risk_level = 0
            
            # Automatisierte Entscheidungsfindung?
            if 'decision' in purpose.lower() or 'classification' in purpose.lower():
                risk_level += risk_factors['automated_decision_making']
            
            # Profiling-Aktivitäten?
            if 'profile' in purpose.lower() or 'segment' in purpose.lower():
                risk_level += risk_factors['profiling']
            
            # KI als innovative Technologie
            risk_level += risk_factors['innovative_technology']
            
            processing_risks[purpose] = min(risk_level, 5)  # Max 5
            
        return processing_risks
    
    def generate_mitigation_strategies(self, sensitivity_scores, processing_risks):
        """Generierung von Risikominimierungsstrategien"""
        strategies = []
        
        # Hohe Datensensitivität -> Anonymisierung
        high_sensitivity_data = [dt for dt, score in sensitivity_scores.items() if score >= 4]
        if high_sensitivity_data:
            strategies.append({
                'risk': 'High sensitivity data processing',
                'mitigation': 'Implement k-anonymity or differential privacy',
                'priority': 'High',
                'timeline': '2-3 weeks'
            })
        
        # Automatisierte Entscheidungen -> Explainability
        automated_decisions = [p for p, risk in processing_risks.items() if risk >= 4]
        if automated_decisions:
            strategies.append({
                'risk': 'Automated decision making',
                'mitigation': 'Implement explainable AI (LIME/SHAP)',
                'priority': 'High',
                'timeline': '3-4 weeks'
            })
        
        # Datenminimierung
        strategies.append({
            'risk': 'Data collection scope',
            'mitigation': 'Implement data minimization techniques',
            'priority': 'Medium',
            'timeline': '1-2 weeks'
        })
        
        return strategies
    
    def create_privacy_requirements(self):
        """Erstellt konkrete Privacy-Anforderungen"""
        sensitivity_scores = self.assess_data_sensitivity()
        processing_risks = self.evaluate_processing_risks()
        mitigation_strategies = self.generate_mitigation_strategies(
            sensitivity_scores, processing_risks
        )
        
        requirements = {
            'data_protection': [],
            'technical_measures': [],
            'organizational_measures': [],
            'compliance_requirements': []
        }
        
        # Basierend auf Risikobewertung Requirements generieren
        for strategy in mitigation_strategies:
            if 'anonymity' in strategy['mitigation'] or 'differential privacy' in strategy['mitigation']:
                requirements['technical_measures'].append(
                    f"Implement {strategy['mitigation']} for {strategy['risk']}"
                )
            
            if 'explainable' in strategy['mitigation']:
                requirements['technical_measures'].append(
                    "Implement XAI methods for decision transparency"
                )
                requirements['compliance_requirements'].append(
                    "Ensure GDPR Art. 22 compliance for automated decisions"
                )
        
        return {
            'assessment_results': {
                'sensitivity_scores': sensitivity_scores,
                'processing_risks': processing_risks,
                'overall_risk_level': max(max(sensitivity_scores.values()), 
                                        max(processing_risks.values()) if processing_risks else 1)
            },
            'mitigation_strategies': mitigation_strategies,
            'privacy_requirements': requirements
        }

# Verwendungsbeispiel
pia = AIPrivacyImpactAssessment(
    project_name="Customer Segmentation AI",
    data_types=['email', 'purchase_history', 'demographics', 'behavioral_patterns'],
    processing_purposes=['customer_profiling', 'personalized_recommendations', 'automated_marketing']
)

assessment_result = pia.create_privacy_requirements()
print("PIA Results:", assessment_result)`
        },
        {
          name: "Privacy-First Architecture Design",
          implementation: "Architektur-Patterns für eingebauten Datenschutz",
          code_example: `# Privacy-First KI-Architektur
from abc import ABC, abstractmethod
import numpy as np
from typing import List, Dict, Any
import hashlib

class PrivacyPreservingMLPipeline:
    """
    Privacy-by-Design ML Pipeline mit eingebauten Datenschutzmaßnahmen
    """
    
    def __init__(self, privacy_level='high'):
        self.privacy_level = privacy_level
        self.data_minimizer = DataMinimizer()
        self.anonymizer = DataAnonymizer()
        self.privacy_monitor = PrivacyMonitor()
        self.audit_logger = AuditLogger()
        
    def process_data(self, raw_data, purpose):
        """
        Privacy-konformer Datenverarbeitungsprozess
        """
        # 1. Audit-Log für Datenverarbeitung
        self.audit_logger.log_data_access(raw_data, purpose)
        
        # 2. Zweckbindung prüfen
        if not self._validate_purpose(purpose):
            raise ValueError(f"Purpose '{purpose}' not allowed for this data")
        
        # 3. Datenminimierung anwenden
        minimized_data = self.data_minimizer.minimize_for_purpose(raw_data, purpose)
        
        # 4. Anonymisierung basierend auf Privacy-Level
        if self.privacy_level == 'high':
            anonymized_data = self.anonymizer.k_anonymize(minimized_data, k=5)
        elif self.privacy_level == 'maximum':
            anonymized_data = self.anonymizer.differential_privacy(
                minimized_data, epsilon=0.1
            )
        else:
            anonymized_data = self.anonymizer.pseudonymize(minimized_data)
        
        # 5. Privacy-Monitoring
        privacy_metrics = self.privacy_monitor.assess_privacy_loss(
            raw_data, anonymized_data
        )
        
        if privacy_metrics['privacy_loss'] > 0.3:  # Threshold
            self.audit_logger.log_privacy_alert(privacy_metrics)
        
        return {
            'processed_data': anonymized_data,
            'privacy_metrics': privacy_metrics,
            'processing_metadata': {
                'purpose': purpose,
                'privacy_level': self.privacy_level,
                'minimization_ratio': len(minimized_data) / len(raw_data),
                'anonymization_method': self._get_anonymization_method()
            }
        }
    
    def train_model(self, training_data, model_type='federated'):
        """
        Privacy-preserving model training
        """
        if model_type == 'federated':
            return self._federated_learning(training_data)
        elif model_type == 'differential_private':
            return self._dp_training(training_data)
        else:
            return self._standard_training(training_data)
    
    def _federated_learning(self, data):
        """Federated Learning Implementation"""
        # Simulierte Federated Learning Architektur
        local_models = []
        
        # Data partitioning für verschiedene "Clients"
        num_clients = 5
        data_partitions = np.array_split(data['processed_data'], num_clients)
        
        for i, partition in enumerate(data_partitions):
            # Lokales Training ohne Datenaustausch
            local_model = self._train_local_model(partition)
            local_models.append(local_model)
            
            self.audit_logger.log_federated_training(
                client_id=i, 
                data_size=len(partition),
                model_parameters=len(local_model.get('parameters', []))
            )
        
        # Sichere Aggregation der Modelle
        global_model = self._secure_aggregation(local_models)
        
        return {
            'model': global_model,
            'training_method': 'federated_learning',
            'privacy_guarantees': 'No raw data sharing between clients',
            'num_participants': len(local_models)
        }
    
    def _dp_training(self, data, epsilon=1.0):
        """Differential Privacy Training"""
        # Noise für DP-Training hinzufügen
        noisy_data = self._add_calibrated_noise(
            data['processed_data'], 
            epsilon=epsilon
        )
        
        model = self._train_local_model(noisy_data)
        
        return {
            'model': model,
            'training_method': 'differential_privacy',
            'privacy_guarantees': f'({epsilon}, δ)-differential privacy',
            'noise_scale': self._calculate_noise_scale(epsilon)
        }

class DataAnonymizer:
    """Verschiedene Anonymisierungstechniken"""
    
    def k_anonymize(self, data, k=5):
        """K-Anonymity Implementation"""
        # Vereinfachte K-Anonymity
        return self._generalize_data(data, k)
    
    def differential_privacy(self, data, epsilon=1.0):
        """Differential Privacy Mechanismus"""
        noise_scale = 1.0 / epsilon
        noise = np.random.laplace(0, noise_scale, data.shape)
        return data + noise
    
    def pseudonymize(self, data):
        """Pseudonymisierung sensibler Identifier"""
        pseudonymized = data.copy()
        # Hash-basierte Pseudonymisierung
        for column in ['user_id', 'email', 'name']:
            if column in pseudonymized.columns:
                pseudonymized[column] = pseudonymized[column].apply(
                    lambda x: hashlib.sha256(str(x).encode()).hexdigest()[:16]
                )
        return pseudonymized

class PrivacyMonitor:
    """Kontinuierliches Privacy-Monitoring"""
    
    def assess_privacy_loss(self, original_data, processed_data):
        """Bewertung des Privacy-Verlusts"""
        
        # Verschiedene Privacy-Metriken berechnen
        metrics = {
            'data_reduction_ratio': 1 - (len(processed_data) / len(original_data)),
            'attribute_suppression_rate': self._calculate_suppression_rate(
                original_data, processed_data
            ),
            'k_anonymity_level': self._estimate_k_anonymity(processed_data),
            'privacy_loss': self._calculate_privacy_loss(original_data, processed_data)
        }
        
        return metrics
    
    def _calculate_privacy_loss(self, original, processed):
        """Vereinfachte Privacy-Loss Berechnung"""
        # Mutual Information als Proxy für Privacy-Loss
        if len(original) == 0 or len(processed) == 0:
            return 0.0
        
        # Simulierte Privacy-Loss Berechnung
        structural_similarity = len(processed.columns) / len(original.columns)
        data_similarity = len(processed) / len(original)
        
        privacy_loss = (structural_similarity + data_similarity) / 2
        return min(privacy_loss, 1.0)

# Verwendung der Privacy-First Pipeline
pipeline = PrivacyPreservingMLPipeline(privacy_level='high')

# Datenverarbeitung mit eingebautem Datenschutz
result = pipeline.process_data(
    raw_data=customer_data,
    purpose='product_recommendation'
)

print("Privacy-preserved data processing completed:")
print(f"Privacy loss: {result['privacy_metrics']['privacy_loss']:.3f}")
print(f"Data minimization: {result['processing_metadata']['minimization_ratio']:.3f}")

# Model Training mit Privacy-Garantien
model_result = pipeline.train_model(
    result, 
    model_type='federated'
)

print(f"Model trained with {model_result['training_method']}")
print(f"Privacy guarantees: {model_result['privacy_guarantees']}")`
        }
      ]
    },
    "default": {
      name: "Privacy as Default",
      description: "Standardmäßig höchste Datenschutzeinstellungen",
      techniques: [
        {
          name: "Default Privacy Configuration",
          implementation: "Sichere Standardkonfigurationen für KI-Systeme",
          code_example: `# Privacy-as-Default Konfigurationssystem
import json
from dataclasses import dataclass, asdict
from enum import Enum
from typing import Dict, List, Optional

class PrivacyLevel(Enum):
    MINIMAL = "minimal"
    STANDARD = "standard" 
    HIGH = "high"
    MAXIMUM = "maximum"

@dataclass
class DefaultPrivacyConfig:
    """
    Standardkonfiguration mit maximalem Datenschutz
    """
    # Datensammlung
    data_collection_minimized: bool = True
    collect_only_necessary: bool = True
    automatic_deletion_enabled: bool = True
    retention_period_days: int = 30
    
    # Verarbeitung
    anonymization_required: bool = True
    pseudonymization_enabled: bool = True
    differential_privacy_enabled: bool = True
    epsilon_value: float = 0.1  # Starker Privacy-Schutz
    
    # Speicherung
    encryption_at_rest: bool = True
    encryption_in_transit: bool = True
    key_rotation_enabled: bool = True
    secure_deletion: bool = True
    
    # Zugriff und Sharing
    default_access_denied: bool = True
    require_explicit_consent: bool = True
    no_third_party_sharing: bool = True
    audit_all_access: bool = True
    
    # ML-spezifische Einstellungen
    federated_learning_preferred: bool = True
    model_inversion_protection: bool = True
    membership_inference_protection: bool = True
    explainable_ai_required: bool = True
    
    def to_dict(self) -> Dict:
        return asdict(self)
    
    def apply_privacy_level(self, level: PrivacyLevel):
        """Anpassung der Konfiguration basierend auf Privacy-Level"""
        if level == PrivacyLevel.MAXIMUM:
            self.epsilon_value = 0.01  # Sehr starker Schutz
            self.retention_period_days = 7
            self.anonymization_required = True
            
        elif level == PrivacyLevel.HIGH:
            self.epsilon_value = 0.1
            self.retention_period_days = 30
            self.anonymization_required = True
            
        elif level == PrivacyLevel.STANDARD:
            self.epsilon_value = 0.5
            self.retention_period_days = 90
            self.anonymization_required = False  # Nur Pseudonymisierung
            
        elif level == PrivacyLevel.MINIMAL:
            self.epsilon_value = 1.0
            self.retention_period_days = 365
            self.anonymization_required = False
            self.pseudonymization_enabled = True

class PrivacyConfigManager:
    """Manager für Privacy-Konfigurationen"""
    
    def __init__(self):
        self.default_config = DefaultPrivacyConfig()
        self.current_config = DefaultPrivacyConfig()
    
    def get_default_config(self) -> DefaultPrivacyConfig:
        """Gibt die sichere Standardkonfiguration zurück"""
        return self.default_config
    
    def create_project_config(self, 
                            project_name: str, 
                            data_sensitivity: str = "high",
                            compliance_requirements: List[str] = None) -> DefaultPrivacyConfig:
        """
        Erstellt projektspezifische Konfiguration basierend auf Anforderungen
        """
        config = DefaultPrivacyConfig()
        
        # Anpassung basierend auf Datensensitivität
        if data_sensitivity == "maximum":
            config.apply_privacy_level(PrivacyLevel.MAXIMUM)
        elif data_sensitivity == "high":
            config.apply_privacy_level(PrivacyLevel.HIGH)
        elif data_sensitivity == "standard":
            config.apply_privacy_level(PrivacyLevel.STANDARD)
        else:
            config.apply_privacy_level(PrivacyLevel.MINIMAL)
        
        # Compliance-spezifische Anpassungen
        if compliance_requirements:
            if "GDPR" in compliance_requirements:
                config.require_explicit_consent = True
                config.automatic_deletion_enabled = True
                config.explainable_ai_required = True
                
            if "HIPAA" in compliance_requirements:
                config.encryption_at_rest = True
                config.audit_all_access = True
                config.retention_period_days = min(config.retention_period_days, 180)
                
            if "CCPA" in compliance_requirements:
                config.no_third_party_sharing = True
                config.require_explicit_consent = True
        
        # Konfiguration speichern
        self._save_project_config(project_name, config)
        
        return config
    
    def validate_configuration(self, config: DefaultPrivacyConfig) -> Dict[str, List[str]]:
        """Validiert Privacy-Konfiguration auf Schwachstellen"""
        warnings = []
        errors = []
        
        # Kritische Checks
        if not config.encryption_at_rest:
            errors.append("Encryption at rest ist deaktiviert - Sicherheitsrisiko")
        
        if not config.encryption_in_transit:
            errors.append("Encryption in transit ist deaktiviert - Sicherheitsrisiko")
        
        if config.epsilon_value > 1.0 and config.differential_privacy_enabled:
            warnings.append("Epsilon-Wert > 1.0 bietet schwachen Privacy-Schutz")
        
        if config.retention_period_days > 365:
            warnings.append("Lange Aufbewahrungszeit kann GDPR-Anforderungen verletzen")
        
        if not config.explainable_ai_required and config.require_explicit_consent:
            warnings.append("Explainable AI empfohlen bei Einwilligungsverarbeitung")
        
        # Konsistenz-Checks
        if config.anonymization_required and not config.pseudonymization_enabled:
            warnings.append("Pseudonymisierung als Vorstufe zur Anonymisierung empfehlenswert")
        
        return {
            'errors': errors,
            'warnings': warnings,
            'status': 'valid' if len(errors) == 0 else 'invalid'
        }
    
    def _save_project_config(self, project_name: str, config: DefaultPrivacyConfig):
        """Speichert Projektkonfiguration"""
        config_dict = config.to_dict()
        
        # In Praxis: Datenbank oder verschlüsselte Datei
        config_file = f"privacy_configs/{project_name}_config.json"
        with open(config_file, 'w') as f:
            json.dump(config_dict, f, indent=2)
        
        print(f"Privacy-Konfiguration für {project_name} gespeichert")

# Automatische Privacy-Default Enforcement
class PrivacyEnforcer:
    """Durchsetzung der Privacy-Defaults zur Laufzeit"""
    
    def __init__(self, config: DefaultPrivacyConfig):
        self.config = config
        self.violations = []
    
    def enforce_data_collection(self, data_request: Dict) -> Dict:
        """Durchsetzung der Datensammlungs-Defaults"""
        if not self.config.collect_only_necessary:
            return data_request
        
        # Nur notwendige Felder sammeln
        necessary_fields = data_request.get('necessary_fields', [])
        all_fields = data_request.get('requested_fields', [])
        
        if not necessary_fields:
            self.violations.append("Keine notwendigen Felder definiert")
            return data_request
        
        # Überschüssige Felder entfernen
        filtered_request = data_request.copy()
        filtered_request['requested_fields'] = necessary_fields
        
        removed_fields = set(all_fields) - set(necessary_fields)
        if removed_fields:
            print(f"Privacy-Default: Entferne nicht-notwendige Felder: {removed_fields}")
        
        return filtered_request
    
    def enforce_retention_policy(self, data_age_days: int) -> bool:
        """Durchsetzung der automatischen Löschung"""
        if not self.config.automatic_deletion_enabled:
            return False
        
        if data_age_days > self.config.retention_period_days:
            print(f"Privacy-Default: Daten älter als {self.config.retention_period_days} Tage werden gelöscht")
            return True  # Löschung erforderlich
        
        return False
    
    def enforce_sharing_restrictions(self, sharing_request: Dict) -> bool:
        """Durchsetzung der Sharing-Beschränkungen"""
        if self.config.no_third_party_sharing and sharing_request.get('third_party', False):
            print("Privacy-Default: Third-party sharing blockiert")
            return False  # Sharing nicht erlaubt
        
        if self.config.require_explicit_consent and not sharing_request.get('explicit_consent', False):
            print("Privacy-Default: Explizite Einwilligung erforderlich")
            return False
        
        return True  # Sharing erlaubt

# Demonstration des Privacy-as-Default Systems
def demonstrate_privacy_defaults():
    # Manager initialisieren
    config_manager = PrivacyConfigManager()
    
    # Projektspezifische Konfiguration erstellen
    ai_project_config = config_manager.create_project_config(
        project_name="customer_analytics_ai",
        data_sensitivity="high",
        compliance_requirements=["GDPR", "CCPA"]
    )
    
    print("Privacy-Default Konfiguration:")
    print(f"Datenminimierung: {ai_project_config.data_collection_minimized}")
    print(f"Anonymisierung erforderlich: {ai_project_config.anonymization_required}")
    print(f"Retention Period: {ai_project_config.retention_period_days} Tage")
    print(f"Differential Privacy ε: {ai_project_config.epsilon_value}")
    
    # Konfiguration validieren
    validation_result = config_manager.validate_configuration(ai_project_config)
    print(f"\\nValidierung: {validation_result['status']}")
    if validation_result['warnings']:
        print("Warnungen:", validation_result['warnings'])
    
    # Privacy Enforcer einsetzen
    enforcer = PrivacyEnforcer(ai_project_config)
    
    # Beispiel: Datensammlung einschränken
    data_request = {
        'requested_fields': ['name', 'email', 'age', 'favorite_color', 'purchase_history', 'social_media'],
        'necessary_fields': ['email', 'age', 'purchase_history']  # Nur diese für ML notwendig
    }
    
    filtered_request = enforcer.enforce_data_collection(data_request)
    print(f"\\nGefilterte Datensammlung: {filtered_request['requested_fields']}")
    
    # Beispiel: Retention Policy prüfen
    data_age = 45  # Tage
    should_delete = enforcer.enforce_retention_policy(data_age)
    print(f"Daten nach {data_age} Tagen löschen: {should_delete}")

# Ausführung der Demonstration
demonstrate_privacy_defaults()`
        }
      ]
    }
  };
  const toggleStep = (stepId) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };
  const calculateProgress = (phaseIndex) => {
    const phase = developmentPhases[phaseIndex];
    const completedCount = phase.privacy_tasks.filter(
      (task) => completedSteps[`${phaseIndex}-${task}`]
    ).length;
    return completedCount / phase.privacy_tasks.length * 100;
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        ref: containerRef,
        className: "relative bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 text-white overflow-hidden",
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
                  /* @__PURE__ */ jsx(Layers, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Privacy by Design Guide" })
                ] }),
                /* @__PURE__ */ jsx("h1", { className: "text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-purple-100 bg-clip-text text-transparent", children: "Privacy by Design für AI-Systeme" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-purple-100 mb-8 leading-relaxed", children: "Integration von Datenschutzprinzipien in den gesamten KI-Entwicklungslebenszyklus für maximale Privacy-Compliance von Anfang an" }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
                  /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-white/20 text-white border-white/30", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 mr-1" }),
                    "Privacy First"
                  ] }),
                  /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-white/20 text-white border-white/30", children: [
                    /* @__PURE__ */ jsx(Layers, { className: "w-4 h-4 mr-1" }),
                    "Architecture Design"
                  ] }),
                  /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-white/20 text-white border-white/30", children: [
                    /* @__PURE__ */ jsx(Code, { className: "w-4 h-4 mr-1" }),
                    "Development Lifecycle"
                  ] })
                ] })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsxs(Tabs, { defaultValue: "principles", className: "space-y-8", children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2 lg:grid-cols-5", children: [
          /* @__PURE__ */ jsx(TabsTrigger, { value: "principles", children: "7 Prinzipien" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "lifecycle", children: "Entwicklungs-Lifecycle" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "implementation", children: "Implementation" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "architecture", children: "Architektur" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "monitoring", children: "Monitoring" })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "principles", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Die 7 Privacy by Design Prinzipien" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Cavoukians fundamentale Prinzipien für datenschutzfreundliche Systemarchitekturen, speziell angepasst für KI- und Machine Learning-Systeme." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: privacyPrinciples.map((principle, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-3", children: [
                    /* @__PURE__ */ jsx("div", { className: `p-3 rounded-lg ${principle.color}`, children: /* @__PURE__ */ jsx(principle.icon, { className: "w-6 h-6 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: principle.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: principle.subtitle })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: principle.description })
                ] }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Implementierung:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: principle.implementation.map((item, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                      item
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "pt-3 border-t bg-blue-50 p-3 rounded", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-blue-800 mb-2", children: "KI-spezifisch:" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-blue-700", children: principle.ai_specific })
                  ] })
                ] })
              ] })
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "lifecycle", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Privacy-by-Design Entwicklungslebenszyklus" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Strukturierte Integration von Datenschutzmaßnahmen in jede Phase der KI-Entwicklung mit konkreten Deliverables und Checklisten." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: developmentPhases.map((phase, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: `${activePhase === index ? "ring-2 ring-purple-500" : ""}`, children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: `p-3 rounded-lg ${activePhase === index ? "bg-purple-500" : "bg-gray-200"}`, children: /* @__PURE__ */ jsx(phase.icon, { className: `w-6 h-6 ${activePhase === index ? "text-white" : "text-gray-600"}` }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs(CardTitle, { className: "text-xl", children: [
                        "Phase ",
                        index + 1,
                        ": ",
                        phase.title
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: phase.description })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3 mr-1" }),
                      phase.duration
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Progress, { value: calculateProgress(index), className: "w-24" }) })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Deliverables:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: phase.deliverables.map((deliverable, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                        /* @__PURE__ */ jsx(FileCheck, { className: "w-4 h-4 text-blue-500" }),
                        deliverable
                      ] }, idx)) })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Privacy-Aufgaben:" }),
                      /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: phase.privacy_tasks.map((task, idx) => /* @__PURE__ */ jsxs(
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
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        size: "sm",
                        onClick: () => setActivePhase(index),
                        variant: activePhase === index ? "default" : "outline",
                        children: "Phase aktivieren"
                      }
                    ),
                    /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", children: [
                      /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
                      "Templates"
                    ] })
                  ] })
                ] })
              ] })
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "implementation", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Implementierungsstrategien" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Praktische Code-Beispiele und Implementierungsansätze für Privacy-by-Design Prinzipien in KI-Systemen." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: Object.entries(implementationStrategies).map(([key, strategy]) => /* @__PURE__ */ jsxs(
            Button,
            {
              variant: selectedPrinciple === key ? "default" : "outline",
              onClick: () => setSelectedPrinciple(key),
              className: "mb-2",
              children: [
                strategy.name.split(" ")[0],
                " ",
                strategy.name.split(" ")[1]
              ]
            },
            key
          )) }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Code, { className: "w-5 h-5" }),
                implementationStrategies[selectedPrinciple].name
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: implementationStrategies[selectedPrinciple].description })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-6", children: implementationStrategies[selectedPrinciple].techniques.map((technique, index) => /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-purple-500 pl-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold text-lg", children: technique.name }),
                /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-purple-100 text-purple-800", children: [
                  /* @__PURE__ */ jsx(Layers, { className: "w-3 h-3 mr-1" }),
                  technique.implementation
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 mb-3", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-sm overflow-x-auto", children: /* @__PURE__ */ jsx("code", { children: technique.code_example }) }) })
            ] }, index)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "architecture", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Privacy-First Architekturmuster" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Bewährte Architekturmuster und Design-Patterns für datenschutzfreundliche KI-Systeme mit eingebauten Privacy-Garantien." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Network, { className: "w-5 h-5 text-blue-500" }),
                "Federated Learning Architecture"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Dezentrales Training ohne zentrale Datensammlung" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Lokale Datenverarbeitung" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Sichere Modell-Aggregation" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Differential Privacy Integration" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Lock, { className: "w-5 h-5 text-green-500" }),
                "Homomorphic Encryption"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Berechnungen auf verschlüsselten Daten" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "End-to-End Verschlüsselung" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Sichere Multi-Party Computation" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Zero-Knowledge Proofs" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Database, { className: "w-5 h-5 text-purple-500" }),
                "Privacy-Preserving Data Pipeline"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Datenschutzfreundliche Datenverarbeitung" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Automatische Anonymisierung" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Datenminimierung" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Zweckbindungs-Enforcement" })
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5 text-orange-500" }),
                "Explainable Privacy Architecture"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: "Transparente und erklärbare Privacy-Maßnahmen" }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Privacy-Metriken Dashboard" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Nachvollziehbare Anonymisierung" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Transparente Datennutzung" })
                  ] })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "monitoring", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Privacy Monitoring & Compliance" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Kontinuierliche Überwachung und Validierung der Privacy-by-Design Implementierung mit automatisierten Metriken und Compliance-Checks." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-blue-500" }),
                "Privacy Metriken"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "K-Anonymity Level" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "K=7" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 87, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Differential Privacy ε" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-blue-500", children: "0.1" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 95, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Data Minimization" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-purple-500", children: "78%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 78, className: "h-2" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Activity, { className: "w-5 h-5 text-green-500" }),
                "System Health"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Privacy Compliance" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "98.5%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 98.5, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Encryption Coverage" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-blue-500", children: "100%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 100, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Audit Trail" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-purple-500", children: "Complete" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 100, className: "h-2" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 text-orange-500" }),
                "Alerts & Issues"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Privacy Violations" }),
                  /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "0" })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Data Breaches" }),
                  /* @__PURE__ */ jsx(Badge, { variant: "outline", children: "0" })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "space-y-3", children: /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Compliance Warnings" }),
                  /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "2" })
                ] }) })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileCheck, { className: "w-5 h-5 text-green-500" }),
              "Privacy-by-Design Compliance Checklist"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
              "Privacy Impact Assessment durchgeführt",
              "Datenschutz in Systemarchitektur integriert",
              "Datenminimierung implementiert",
              "Anonymisierungsverfahren etabliert",
              "Verschlüsselung End-to-End aktiviert",
              "Federated Learning konfiguriert",
              "Explainable AI für Transparenz",
              "Automatische Löschfristen gesetzt",
              "Nutzereinwilligungen granular",
              "Audit-Logging vollständig",
              "Privacy-Monitoring aktiv",
              "Incident Response Plan definiert"
            ].map((item, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100",
                onClick: () => toggleStep(`privacy-${index}`),
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `w-5 h-5 rounded border-2 flex items-center justify-center ${completedSteps[`privacy-${index}`] ? "bg-green-500 border-green-500" : "border-gray-300"}`,
                      children: completedSteps[`privacy-${index}`] && /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: `text-sm ${completedSteps[`privacy-${index}`] ? "line-through text-gray-500" : ""}`, children: item })
                ]
              },
              index
            )) }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5 },
          className: "bg-gradient-to-r from-violet-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-16",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Bereit für Privacy-by-Design KI-Entwicklung?" }),
            /* @__PURE__ */ jsx("p", { className: "text-violet-100 mb-6 max-w-2xl mx-auto", children: "Implementieren Sie datenschutzfreundliche KI-Systeme von Grund auf mit eingebauten Privacy-Garantien und vollständiger DSGVO-Compliance." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
              /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "secondary", children: [
                /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 mr-2" }),
                "Privacy-by-Design Toolkit"
              ] }),
              /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white hover:text-violet-600", children: [
                /* @__PURE__ */ jsx(MessageSquare, { className: "w-5 h-5 mr-2" }),
                "Architektur-Beratung"
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 bg-gray-100 rounded-lg p-8", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold mb-6 text-center", children: "Weiterführende KI-Datenschutz Themen" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs("a", { href: "/ki/ki-einwilligungsmanagement", className: "block bg-white rounded-lg p-6 hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-2 text-blue-600", children: "KI-Einwilligungsmanagement" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Granulare Consent-Systeme für AI-basierte Datenverarbeitung nach DSGVO" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "/ki/automated-decision-making", className: "block bg-white rounded-lg p-6 hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-2 text-blue-600", children: "Automated Decision Making" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "DSGVO Art. 22 konforme automatisierte Entscheidungsfindung in KI-Systemen" })
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "/wissen/dsgvo", className: "block bg-white rounded-lg p-6 hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsx("h3", { className: "font-semibold mb-2 text-blue-600", children: "DSGVO Grundlagen" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Datenschutz-Grundverordnung Basics für Unternehmen und Entwickler" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  PrivacyByDesignAI as default
};
