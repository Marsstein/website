import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useEffect, useState, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, a as CardHeader, b as CardTitle, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { T as Tabs, a as TabsList, c as TabsTrigger, b as TabsContent } from "./tabs-D6V8SE6X.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { UserCheck, Shield, Settings, Home, ChevronRight, BookOpen, Info, Target, Code, Scale, ArrowRight, RotateCcw, Eye, X, FileCheck, CheckCircle2, Clock, AlertCircle, Workflow, Activity, Download, MessageSquare, Bot, Database, Building2 } from "lucide-react";
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
const KiEinwilligungsmanagement = () => {
  useEffect(() => {
    const metaViewport = document.querySelector('meta[name="viewport"]');
    if (!metaViewport) {
      const meta = document.createElement("meta");
      meta.name = "viewport";
      meta.content = "width=device-width, initial-scale=1";
      document.head.appendChild(meta);
    }
  }, []);
  const [activeScenario, setActiveScenario] = useState("ml-training");
  const [completedSteps, setCompletedSteps] = useState({});
  const [selectedConsentType, setSelectedConsentType] = useState("granular");
  const [expandedSections, setExpandedSections] = useState({});
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);
  const consentRequirements = [
    {
      title: "Informierte Einwilligung",
      subtitle: "DSGVO Art. 7 Anforderungen",
      icon: Info,
      color: "bg-blue-500",
      description: "Vollständige Information über KI-Verarbeitung vor Einwilligung",
      requirements: [
        "Zweck der KI-Verarbeitung klar beschreiben",
        "Art der verwendeten Algorithmen erklären",
        "Automatisierte Entscheidungsfindung offenlegen",
        "Datenquellen und -kategorien benennen"
      ],
      ai_specific: "KI-Modelle erfordern besondere Transparenz über Inferenz-Logik"
    },
    {
      title: "Granulare Einwilligung",
      subtitle: "Zweckspezifische Kontrolle",
      icon: Settings,
      color: "bg-green-500",
      description: "Separate Einwilligungen für verschiedene KI-Anwendungen",
      requirements: [
        "Getrennte Opt-ins für ML-Training und Inferenz",
        "Spezifische Einwilligung für Profiling",
        "Separate Zustimmung für Datenverknüpfung",
        "Individuelle Kontrolle über Algorithmus-Features"
      ],
      ai_specific: "Jeder ML-Use-Case benötigt separate Einwilligungsbasis"
    },
    {
      title: "Dynamische Einwilligung",
      subtitle: "Adaptive Consent Management",
      icon: RotateCcw,
      color: "bg-purple-500",
      description: "Anpassung der Einwilligung basierend auf KI-Evolution",
      requirements: [
        "Re-Consent bei Modell-Updates",
        "Benachrichtigung bei neuen Datenquellen",
        "Zustimmung für erweiterte Algorithmus-Features",
        "Kontinuierliche Consent-Validierung"
      ],
      ai_specific: "KI-Systeme entwickeln sich - Einwilligungen müssen mitziehen"
    },
    {
      title: "Explainable Consent",
      subtitle: "Verständliche Zustimmung",
      icon: Eye,
      color: "bg-orange-500",
      description: "Einfache Erklärung komplexer KI-Verarbeitung",
      requirements: [
        "Laienverständliche Algorithmus-Beschreibung",
        "Visuelle Darstellung der Datenverarbeitung",
        "Beispiele für KI-Entscheidungen",
        "Transparente Risiko-Kommunikation"
      ],
      ai_specific: "Black-Box Algorithmen brauchen White-Box Erklärungen"
    },
    {
      title: "Widerrufbare Einwilligung",
      subtitle: "Right to Withdraw",
      icon: X,
      color: "bg-red-500",
      description: "Einfacher und vollständiger Widerruf der KI-Verarbeitung",
      requirements: [
        "Ein-Klick Widerruf für alle KI-Anwendungen",
        "Sofortiger Stopp der Datenverarbeitung",
        "Löschung aus ML-Trainingsdaten",
        "Deaktivierung personalisierter Modelle"
      ],
      ai_specific: "Widerruf muss auch trainierte Modelle betreffen"
    },
    {
      title: "Consent Proof",
      subtitle: "Nachweisbare Zustimmung",
      icon: FileCheck,
      color: "bg-indigo-500",
      description: "Lückenlose Dokumentation aller Einwilligungsschritte",
      requirements: [
        "Timestamp-basierte Consent-Historie",
        "Proof-of-Consent für alle Datenverarbeitungen",
        "Audit-Trail für Consent-Änderungen",
        "Compliance-Reports für Aufsichtsbehörden"
      ],
      ai_specific: "KI-Compliance erfordert maschinenlesbare Consent-Nachweise"
    }
  ];
  const consentScenarios = {
    "ml-training": {
      title: "ML-Model Training",
      description: "Einwilligungsmanagement für Machine Learning Trainingsdaten",
      complexity: "Hoch",
      duration: "15-20 Min",
      consent_challenges: [
        "Zweckbindung bei verschiedenen ML-Experimenten",
        "Re-Consent bei Modell-Updates",
        "Anonymisierung vs. Personalisierung",
        "Cross-Validation und Daten-Splits"
      ],
      implementation: {
        consent_flow: [
          "Aufklärung über ML-Training Purpose",
          "Granulare Zustimmung für Datenverwendung",
          "Opt-in für experimentelle Algorithmen",
          "Einwilligung für Modell-Personalisierung"
        ],
        technical_measures: [
          "Consent-basierte Daten-Tagging",
          "Automated Consent Validation",
          "ML-Pipeline Integration",
          "Consent-Change Notification System"
        ],
        compliance_aspects: [
          "DSGVO Art. 6 (1) (a) Rechtmäßigkeit",
          "Art. 7 Bedingungen der Einwilligung",
          "Art. 21 Widerspruchsrecht",
          "Transparenzpflichten nach Art. 12-14"
        ]
      },
      code_example: `# ML-Training Consent Management System
import uuid
import datetime
from typing import Dict, List, Optional, Set
from dataclasses import dataclass, field
from enum import Enum

class ConsentStatus(Enum):
    PENDING = "pending"
    GRANTED = "granted"
    WITHDRAWN = "withdrawn"
    EXPIRED = "expired"

class MLPurpose(Enum):
    TRAINING = "model_training"
    VALIDATION = "model_validation"
    TESTING = "model_testing"
    PERSONALIZATION = "personalization"
    PROFILING = "user_profiling"
    RECOMMENDATION = "recommendation"

@dataclass
class ConsentRecord:
    user_id: str
    consent_id: str = field(default_factory=lambda: str(uuid.uuid4()))
    timestamp: datetime.datetime = field(default_factory=datetime.datetime.now)
    purposes: Set[MLPurpose] = field(default_factory=set)
    data_categories: Set[str] = field(default_factory=set)
    status: ConsentStatus = ConsentStatus.PENDING
    expiry_date: Optional[datetime.datetime] = None
    withdrawal_date: Optional[datetime.datetime] = None
    consent_version: str = "1.0"
    processing_legal_basis: str = "Art. 6 (1) (a) GDPR"
    
class MLConsentManager:
    """
    Consent Management System speziell für ML-Training
    """
    
    def __init__(self):
        self.consent_records: Dict[str, List[ConsentRecord]] = {}
        self.purpose_descriptions = {
            MLPurpose.TRAINING: "Training von Machine Learning Modellen zur Verbesserung unserer Services",
            MLPurpose.VALIDATION: "Validierung und Qualitätssicherung der ML-Modelle",
            MLPurpose.TESTING: "Testing und Performance-Messung der Algorithmen",
            MLPurpose.PERSONALIZATION: "Personalisierte Inhalte und Empfehlungen basierend auf Ihren Präferenzen",
            MLPurpose.PROFILING: "Erstellung von Nutzerprofilen für bessere Service-Qualität",
            MLPurpose.RECOMMENDATION: "Automatisierte Empfehlungen basierend auf ML-Algorithmen"
        }
        
    def request_ml_consent(self, 
                          user_id: str, 
                          purposes: List[MLPurpose],
                          data_categories: List[str],
                          retention_period_days: int = 365) -> str:
        """
        Fordert spezifische ML-Einwilligung an
        """
        
        # Consent Record erstellen
        consent_record = ConsentRecord(
            user_id=user_id,
            purposes=set(purposes),
            data_categories=set(data_categories),
            expiry_date=datetime.datetime.now() + datetime.timedelta(days=retention_period_days)
        )
        
        # User-spezifische Consent-Historie
        if user_id not in self.consent_records:
            self.consent_records[user_id] = []
        
        self.consent_records[user_id].append(consent_record)
        
        # Consent-Anfrage generieren
        consent_request = self._generate_consent_request(consent_record)
        
        return consent_request
    
    def _generate_consent_request(self, consent_record: ConsentRecord) -> str:
        """
        Generiert benutzerfreundliche Consent-Anfrage
        """
        
        request_text = f"""
EINWILLIGUNGSERKLÄRUNG FÜR KI/ML-VERARBEITUNG

Liebe/r Nutzer/in,

wir möchten Ihre Daten für folgende KI-basierte Zwecke verwenden:

VERARBEITUNGSZWECKE:
"""
        
        for purpose in consent_record.purposes:
            description = self.purpose_descriptions.get(purpose, "Unbekannter Zweck")
            request_text += f"• {purpose.value}: {description}\\n"
        
        request_text += f"""
BETROFFENE DATENKATEGORIEN:
{', '.join(consent_record.data_categories)}

RECHTLICHE BASIS:
{consent_record.processing_legal_basis}

SPEICHERDAUER:
Bis {consent_record.expiry_date.strftime('%d.%m.%Y')} oder bis zum Widerruf

IHRE RECHTE:
• Sie können diese Einwilligung jederzeit widerrufen
• Der Widerruf berührt nicht die Rechtmäßigkeit der bisherigen Verarbeitung
• Bei Widerruf werden Ihre Daten aus zukünftigen ML-Trainings ausgeschlossen
• Bereits trainierte Modelle können nicht rückwirkend "verlernt" werden

CONSENT ID: {consent_record.consent_id}

□ JA, ich willige in die beschriebene Datenverarbeitung ein
□ NEIN, ich lehne die Datenverarbeitung ab

Für weitere Informationen siehe unsere Datenschutzerklärung.
"""
        
        return request_text
    
    def grant_consent(self, consent_id: str) -> bool:
        """
        Erteilt Einwilligung für spezifische Consent ID
        """
        consent_record = self._find_consent_record(consent_id)
        
        if consent_record and consent_record.status == ConsentStatus.PENDING:
            consent_record.status = ConsentStatus.GRANTED
            consent_record.timestamp = datetime.datetime.now()
            
            # Audit-Log
            self._log_consent_action(consent_id, "GRANTED")
            
            return True
        
        return False
    
    def withdraw_consent(self, user_id: str, consent_id: Optional[str] = None) -> Dict:
        """
        Widerruft Einwilligung (spezifisch oder alle)
        """
        user_consents = self.consent_records.get(user_id, [])
        withdrawn_consents = []
        
        for consent in user_consents:
            if consent_id is None or consent.consent_id == consent_id:
                if consent.status == ConsentStatus.GRANTED:
                    consent.status = ConsentStatus.WITHDRAWN
                    consent.withdrawal_date = datetime.datetime.now()
                    withdrawn_consents.append(consent.consent_id)
                    
                    # Audit-Log
                    self._log_consent_action(consent.consent_id, "WITHDRAWN")
        
        # ML-Pipeline über Widerruf informieren
        withdrawal_impact = self._assess_withdrawal_impact(user_id, withdrawn_consents)
        
        return {
            'withdrawn_consents': withdrawn_consents,
            'impact_assessment': withdrawal_impact,
            'next_steps': [
                "Daten werden aus zukünftigen ML-Trainings ausgeschlossen",
                "Personalisierte Modelle werden deaktiviert",
                "Historische Trainingsdaten bleiben in bereits trainierten Modellen",
                "Neue Datensammlung für diesen User wird gestoppt"
            ]
        }
    
    def validate_ml_processing_consent(self, 
                                      user_id: str, 
                                      purpose: MLPurpose,
                                      data_category: str) -> Dict:
        """
        Validiert ob Consent für spezifische ML-Verarbeitung vorliegt
        """
        user_consents = self.consent_records.get(user_id, [])
        
        valid_consents = []
        for consent in user_consents:
            if (consent.status == ConsentStatus.GRANTED and 
                purpose in consent.purposes and 
                data_category in consent.data_categories and
                (consent.expiry_date is None or consent.expiry_date > datetime.datetime.now())):
                
                valid_consents.append(consent)
        
        return {
            'consent_valid': len(valid_consents) > 0,
            'valid_consents': [c.consent_id for c in valid_consents],
            'legal_basis': valid_consents[0].processing_legal_basis if valid_consents else None,
            'expiry_date': min([c.expiry_date for c in valid_consents if c.expiry_date]) if valid_consents else None
        }
    
    def get_consent_status_dashboard(self, user_id: str) -> Dict:
        """
        Erstellt Consent-Status Dashboard für User
        """
        user_consents = self.consent_records.get(user_id, [])
        
        status_summary = {
            'total_consents': len(user_consents),
            'active_consents': len([c for c in user_consents if c.status == ConsentStatus.GRANTED]),
            'withdrawn_consents': len([c for c in user_consents if c.status == ConsentStatus.WITHDRAWN]),
            'expired_consents': len([c for c in user_consents if c.status == ConsentStatus.EXPIRED])
        }
        
        purpose_breakdown = {}
        for consent in user_consents:
            if consent.status == ConsentStatus.GRANTED:
                for purpose in consent.purposes:
                    if purpose.value not in purpose_breakdown:
                        purpose_breakdown[purpose.value] = {
                            'description': self.purpose_descriptions.get(purpose),
                            'consent_date': consent.timestamp,
                            'expiry_date': consent.expiry_date,
                            'can_withdraw': True
                        }
        
        return {
            'user_id': user_id,
            'status_summary': status_summary,
            'active_purposes': purpose_breakdown,
            'consent_history': [
                {
                    'consent_id': c.consent_id,
                    'timestamp': c.timestamp,
                    'status': c.status.value,
                    'purposes': [p.value for p in c.purposes],
                    'data_categories': list(c.data_categories)
                } for c in user_consents
            ]
        }
    
    def _find_consent_record(self, consent_id: str) -> Optional[ConsentRecord]:
        """Findet Consent Record by ID"""
        for user_consents in self.consent_records.values():
            for consent in user_consents:
                if consent.consent_id == consent_id:
                    return consent
        return None
    
    def _assess_withdrawal_impact(self, user_id: str, withdrawn_consent_ids: List[str]) -> Dict:
        """Bewertet Impact des Consent-Widerrufs auf ML-Systeme"""
        
        # Vereinfachte Impact-Bewertung
        impact = {
            'affected_models': ['recommendation_model', 'personalization_model'],
            'data_exclusion_required': True,
            'model_retraining_needed': False,  # Bei großen Datasets meist nicht nötig
            'personalization_disabled': True,
            'estimated_service_degradation': 'Minimal - hauptsächlich weniger Personalisierung'
        }
        
        return impact
    
    def _log_consent_action(self, consent_id: str, action: str):
        """Audit-Logging für Consent-Aktionen"""
        log_entry = {
            'timestamp': datetime.datetime.now(),
            'consent_id': consent_id,
            'action': action,
            'ip_address': 'xxx.xxx.xxx.xxx',  # In Praxis: echte IP
            'user_agent': 'Browser/App Info'   # In Praxis: echte User-Agent
        }
        
        # In Praxis: In secure Audit-Log schreiben
        print(f"CONSENT AUDIT: {log_entry}")

# Demonstration des ML Consent Management Systems
def demonstrate_ml_consent_system():
    # Consent Manager initialisieren
    consent_manager = MLConsentManager()
    
    # ML-Consent für User anfordern
    user_id = "user_12345"
    
    consent_request = consent_manager.request_ml_consent(
        user_id=user_id,
        purposes=[MLPurpose.TRAINING, MLPurpose.PERSONALIZATION, MLPurpose.RECOMMENDATION],
        data_categories=['browsing_history', 'purchase_data', 'demographic_info'],
        retention_period_days=180
    )
    
    print("Generated Consent Request:")
    print(consent_request)
    
    # Consent erteilen (simuliert)
    consent_id = consent_manager.consent_records[user_id][0].consent_id
    consent_granted = consent_manager.grant_consent(consent_id)
    print(f"\\nConsent granted: {consent_granted}")
    
    # Consent-Validierung für ML-Processing
    validation_result = consent_manager.validate_ml_processing_consent(
        user_id=user_id,
        purpose=MLPurpose.TRAINING,
        data_category='browsing_history'
    )
    
    print(f"\\nML Processing Consent Valid: {validation_result['consent_valid']}")
    
    # User Dashboard
    dashboard = consent_manager.get_consent_status_dashboard(user_id)
    print("\\nUser Consent Dashboard:")
    print(f"Active Consents: {dashboard['status_summary']['active_consents']}")
    print(f"Active Purposes: {list(dashboard['active_purposes'].keys())}")
    
    # Consent widerrufen
    withdrawal_result = consent_manager.withdraw_consent(user_id)
    print(f"\\nWithdrawal completed: {len(withdrawal_result['withdrawn_consents'])} consents withdrawn")
    print(f"Impact: {withdrawal_result['impact_assessment']['personalization_disabled']}")

# System demonstrieren
demonstrate_ml_consent_system()`
    },
    "personalization": {
      title: "KI-Personalisierung",
      description: "Einwilligung für personalisierte KI-Services und Algorithmen",
      complexity: "Mittel",
      duration: "10-15 Min",
      consent_challenges: [
        "Granulare Kontrolle über Personalisierungs-Features",
        "Transparenz über verwendete Daten",
        "Balance zwischen Privacy und Service-Qualität",
        "Dynamic Consent bei Feature-Updates"
      ],
      implementation: {
        consent_flow: [
          "Feature-spezifische Einwilligungsoptionen",
          "Datenkategorien-Matrix für Personalisierung",
          "Algorithmus-Transparenz und Erklärungen",
          "Personalisierungsgrad-Einstellungen"
        ]
      }
    },
    "automated-decisions": {
      title: "Automatisierte Entscheidungen",
      description: "DSGVO Art. 22 konforme Einwilligung für automatisierte Entscheidungsfindung",
      complexity: "Sehr Hoch",
      duration: "20-25 Min",
      consent_challenges: [
        "Meaningful Information über Entscheidungslogik",
        "Right to Human Review einräumen",
        "Explainable AI für Transparenz",
        "Appeal-Prozess implementieren"
      ],
      implementation: {
        consent_flow: [
          "Detaillierte Aufklärung über Automatisierung",
          "Explizite Zustimmung zu automatisierten Entscheidungen",
          "Opt-in für Profiling-basierte Entscheidungen",
          "Einwilligung für algorithmus-basierte Bewertungen"
        ]
      }
    }
  };
  const consentTypes = {
    "granular": {
      name: "Granulare Einwilligung",
      description: "Detaillierte Kontrolle über jeden Aspekt der KI-Verarbeitung",
      advantages: [
        "Maximale Nutzerkontrolle",
        "DSGVO-konforme Zweckbindung",
        "Transparente Datenverwendung",
        "Reduziertes Compliance-Risiko"
      ],
      challenges: [
        "Komplexe User Experience",
        "Consent Fatigue bei Nutzern",
        "Technische Implementierung aufwendig",
        "Höhere Ablehnungsrate möglich"
      ],
      implementation_example: `# Granulares Consent Management Interface
class GranularConsentInterface:
    """
    Interface für granulare KI-Einwilligungen mit detaillierter Kontrolle
    """
    
    def __init__(self):
        self.consent_categories = {
            'data_collection': {
                'name': 'Datensammlung',
                'subcategories': {
                    'behavioral_data': 'Verhaltensdaten (Klicks, Navigation)',
                    'demographic_data': 'Demografische Daten',
                    'preference_data': 'Präferenzen und Einstellungen',
                    'interaction_data': 'Interaktionsdaten mit unserem Service'
                }
            },
            'ml_processing': {
                'name': 'ML-Verarbeitung',
                'subcategories': {
                    'model_training': 'Training von Machine Learning Modellen',
                    'pattern_recognition': 'Mustererkennung in Ihren Daten',
                    'predictive_analytics': 'Vorhersage-Analysen',
                    'clustering_analysis': 'Gruppierung ähnlicher Nutzer'
                }
            },
            'automated_decisions': {
                'name': 'Automatisierte Entscheidungen',
                'subcategories': {
                    'content_filtering': 'Automatische Inhaltsfilterung',
                    'recommendation_engine': 'Empfehlungsalgorithmen',
                    'risk_assessment': 'Automatisierte Risikobewertung',
                    'pricing_algorithms': 'Algorithmische Preisgestaltung'
                }
            },
            'data_sharing': {
                'name': 'Datenfreigabe',
                'subcategories': {
                    'partner_sharing': 'Teilen mit Geschäftspartnern',
                    'analytics_providers': 'Analytics-Dienstleister',
                    'ml_service_providers': 'ML-as-a-Service Anbieter',
                    'research_purposes': 'Wissenschaftliche Forschung'
                }
            }
        }
    
    def generate_granular_consent_form(self, user_id: str) -> Dict:
        """
        Generiert granulares Einwilligungsformular
        """
        consent_form = {
            'user_id': user_id,
            'form_version': '2.1',
            'categories': [],
            'estimated_completion_time': '8-12 Minuten',
            'privacy_impact_preview': True
        }
        
        for category_id, category in self.consent_categories.items():
            category_form = {
                'category_id': category_id,
                'category_name': category['name'],
                'description': self._get_category_description(category_id),
                'required': self._is_category_required(category_id),
                'subcategories': []
            }
            
            for subcat_id, subcat_name in category['subcategories'].items():
                subcategory_form = {
                    'subcategory_id': subcat_id,
                    'name': subcat_name,
                    'detailed_explanation': self._get_detailed_explanation(subcat_id),
                    'data_examples': self._get_data_examples(subcat_id),
                    'purpose_justification': self._get_purpose_justification(subcat_id),
                    'retention_period': self._get_retention_period(subcat_id),
                    'third_party_sharing': self._involves_third_party_sharing(subcat_id),
                    'user_benefit': self._get_user_benefit(subcat_id),
                    'opt_out_consequences': self._get_opt_out_consequences(subcat_id),
                    'default_state': False  # Opt-in required
                }
                
                category_form['subcategories'].append(subcategory_form)
            
            consent_form['categories'].append(category_form)
        
        return consent_form
    
    def _get_detailed_explanation(self, subcategory_id: str) -> str:
        """Detaillierte Erklärung für jede Unterkategorie"""
        explanations = {
            'behavioral_data': 'Wir analysieren, wie Sie unsere Website nutzen (welche Seiten Sie besuchen, wie lange Sie bleiben, worauf Sie klicken). Diese Daten helfen uns, die Benutzerfreundlichkeit zu verbessern.',
            'model_training': 'Ihre Daten werden verwendet, um unsere KI-Algorithmen zu trainieren und zu verbessern. Dabei werden Muster in den Daten erkannt, um bessere Vorhersagen und Empfehlungen zu ermöglichen.',
            'recommendation_engine': 'Basierend auf Ihren Präferenzen und dem Verhalten ähnlicher Nutzer erstellen wir automatisierte Empfehlungen für Produkte, Inhalte oder Services.',
            'partner_sharing': 'Wir teilen bestimmte Daten mit vertrauenswürdigen Partnern, um Ihnen erweiterte Services anbieten zu können. Partner sind vertraglich zur Einhaltung des Datenschutzes verpflichtet.'
        }
        
        return explanations.get(subcategory_id, 'Detaillierte Erklärung für diese Verarbeitungsart.')
    
    def process_granular_consent_response(self, user_id: str, consent_response: Dict) -> Dict:
        """
        Verarbeitet granulare Einwilligungsantwort
        """
        
        consent_matrix = {}
        privacy_settings = {}
        enabled_features = []
        disabled_features = []
        
        for category_response in consent_response['categories']:
            category_id = category_response['category_id']
            consent_matrix[category_id] = {}
            
            for subcat_response in category_response['subcategories']:
                subcat_id = subcat_response['subcategory_id']
                consent_granted = subcat_response.get('consent_granted', False)
                
                consent_matrix[category_id][subcat_id] = {
                    'consent_granted': consent_granted,
                    'timestamp': datetime.datetime.now(),
                    'consent_version': consent_response.get('form_version', '2.1')
                }
                
                if consent_granted:
                    enabled_features.extend(self._get_enabled_features(subcat_id))
                else:
                    disabled_features.extend(self._get_disabled_features(subcat_id))
        
        # Privacy-Settings ableiten
        privacy_settings = self._derive_privacy_settings(consent_matrix)
        
        # Service-Impact berechnen
        service_impact = self._calculate_service_impact(consent_matrix)
        
        return {
            'user_id': user_id,
            'consent_matrix': consent_matrix,
            'privacy_settings': privacy_settings,
            'enabled_features': enabled_features,
            'disabled_features': disabled_features,
            'service_impact': service_impact,
            'next_steps': [
                'Einstellungen werden in Ihrem Profil gespeichert',
                'Sie können diese Einstellungen jederzeit ändern',
                'Änderungen werden sofort wirksam',
                'Sie erhalten eine Bestätigungs-E-Mail'
            ]
        }
    
    def generate_consent_dashboard(self, user_id: str, consent_matrix: Dict) -> Dict:
        """
        Erstellt benutzerfreundliches Consent-Dashboard
        """
        
        dashboard = {
            'user_id': user_id,
            'last_updated': datetime.datetime.now(),
            'privacy_score': self._calculate_privacy_score(consent_matrix),
            'personalization_level': self._calculate_personalization_level(consent_matrix),
            'categories': []
        }
        
        for category_id, category_consents in consent_matrix.items():
            granted_count = sum(1 for consent in category_consents.values() if consent['consent_granted'])
            total_count = len(category_consents)
            
            category_dashboard = {
                'category_id': category_id,
                'category_name': self.consent_categories[category_id]['name'],
                'consent_rate': granted_count / total_count if total_count > 0 else 0,
                'granted_subcategories': granted_count,
                'total_subcategories': total_count,
                'impact_on_experience': self._get_category_impact(category_id, granted_count, total_count),
                'recommended_action': self._get_category_recommendation(category_id, granted_count, total_count)
            }
            
            dashboard['categories'].append(category_dashboard)
        
        return dashboard

# Verwendung des granularen Consent-Systems
granular_consent = GranularConsentInterface()

# Consent-Formular generieren
consent_form = granular_consent.generate_granular_consent_form("user_98765")
print(f"Granular Consent Form mit {len(consent_form['categories'])} Kategorien generiert")

# Beispiel-Response verarbeiten
example_response = {
    'categories': [
        {
            'category_id': 'ml_processing',
            'subcategories': [
                {'subcategory_id': 'model_training', 'consent_granted': True},
                {'subcategory_id': 'pattern_recognition', 'consent_granted': True},
                {'subcategory_id': 'predictive_analytics', 'consent_granted': False}
            ]
        }
    ],
    'form_version': '2.1'
}

processing_result = granular_consent.process_granular_consent_response("user_98765", example_response)
print(f"Consent verarbeitet: {len(processing_result['enabled_features'])} Features aktiviert")`
    },
    "blanket": {
      name: "Blanket Consent",
      description: "Umfassende Einwilligung für alle KI-Verarbeitungen",
      advantages: [
        "Einfache User Experience",
        "Geringere Abbruchrate",
        "Schnelle Implementierung",
        "Weniger technische Komplexität"
      ],
      challenges: [
        "DSGVO-Compliance fraglich",
        "Mangelnde Zweckbindung",
        "Intransparente Datenverwendung",
        "Hohes rechtliches Risiko"
      ]
    },
    "tiered": {
      name: "Tiered Consent",
      description: "Abgestufte Einwilligung mit verschiedenen Service-Leveln",
      advantages: [
        "Balance zwischen Granularität und UX",
        "Klare Service-Differenzierung",
        "Flexible Implementierung",
        "Gute Compliance-Eigenschaften"
      ],
      challenges: [
        "Komplexe Service-Matrix",
        "Pricing-Implikationen",
        "Feature-Abhängigkeiten",
        "Consent-Upgrade Management"
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
    /* @__PURE__ */ jsxs(Helmet, { children: [
      /* @__PURE__ */ jsx("title", { children: "KI-Einwilligungsmanagement – DSGVO-konforme Consent-Systeme" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Granulare Consent-Systeme für KI & ML: Dynamic Consent, Purpose Binding & Automated Validation. DSGVO Art. 7 konform. Jetzt implementieren!" }),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: "https://datenschutzexperte.de/ki/ki-einwilligungsmanagement" }),
      /* @__PURE__ */ jsx("meta", { property: "og:title", content: "KI-Einwilligungsmanagement – DSGVO-konforme Consent-Systeme" }),
      /* @__PURE__ */ jsx("meta", { property: "og:description", content: "Granulare Consent-Systeme für KI & ML: Dynamic Consent, Purpose Binding & Automated Validation. DSGVO Art. 7 konform." }),
      /* @__PURE__ */ jsx("meta", { property: "og:type", content: "article" }),
      /* @__PURE__ */ jsx("meta", { property: "og:url", content: "https://datenschutzexperte.de/ki/ki-einwilligungsmanagement" }),
      /* @__PURE__ */ jsx("meta", { name: "robots", content: "index, follow" }),
      /* @__PURE__ */ jsx("script", { type: "application/ld+json", children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "KI-Einwilligungsmanagement – DSGVO-konforme Consent-Systeme",
        "description": "Granulare Consent-Systeme für KI & ML: Dynamic Consent, Purpose Binding & Automated Validation. DSGVO Art. 7 konform.",
        "datePublished": "2025-01-20",
        "dateModified": (/* @__PURE__ */ new Date()).toISOString(),
        "author": {
          "@type": "Organization",
          "name": "Datenschutzexperte.de"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Datenschutzexperte.de",
          "logo": {
            "@type": "ImageObject",
            "url": "https://datenschutzexperte.de/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://datenschutzexperte.de/ki/ki-einwilligungsmanagement"
        }
      }) })
    ] }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsxs(
      motion.div,
      {
        ref: containerRef,
        className: "relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden",
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
                  /* @__PURE__ */ jsx(UserCheck, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "KI-Einwilligungsmanagement" })
                ] }),
                /* @__PURE__ */ jsx("h1", { className: "text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent", children: "KI-Einwilligungsmanagement" }),
                /* @__PURE__ */ jsx("p", { className: "text-xl lg:text-2xl text-cyan-100 mb-8 leading-relaxed", children: "Spezielle Anforderungen an Einwilligungen für KI-basierte Datenverarbeitung mit granularer Kontrolle und DSGVO-Compliance" }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
                  /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-white/20 text-white border-white/30", children: [
                    /* @__PURE__ */ jsx(UserCheck, { className: "w-4 h-4 mr-1" }),
                    "Granulare Kontrolle"
                  ] }),
                  /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-white/20 text-white border-white/30", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 mr-1" }),
                    "DSGVO-konform"
                  ] }),
                  /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-white/20 text-white border-white/30", children: [
                    /* @__PURE__ */ jsx(Settings, { className: "w-4 h-4 mr-1" }),
                    "Dynamic Consent"
                  ] })
                ] })
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsx("nav", { className: "bg-white border-b", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-6 py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm text-gray-600", children: [
      /* @__PURE__ */ jsxs(Link, { to: "/", className: "hover:text-emerald-600 flex items-center gap-1", children: [
        /* @__PURE__ */ jsx(Home, { className: "w-4 h-4" }),
        "Home"
      ] }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" }),
      /* @__PURE__ */ jsx(Link, { to: "/ki", className: "hover:text-emerald-600", children: "KI & Datenschutz" }),
      /* @__PURE__ */ jsx(ChevronRight, { className: "w-4 h-4" }),
      /* @__PURE__ */ jsx("span", { className: "text-gray-900 font-medium", children: "KI-Einwilligungsmanagement" })
    ] }) }) }),
    /* @__PURE__ */ jsx("div", { className: "bg-gray-50 border-b", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 py-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsx(BookOpen, { className: "w-5 h-5 text-emerald-600" }),
        /* @__PURE__ */ jsx("h2", { className: "text-lg font-semibold", children: "Inhaltsverzeichnis" })
      ] }),
      /* @__PURE__ */ jsxs("nav", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
        /* @__PURE__ */ jsxs("a", { href: "#anforderungen", className: "flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Info, { className: "w-5 h-5 text-emerald-600" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-900", children: "Anforderungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "KI-spezifische Einwilligungsanforderungen" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#use-cases", className: "flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Target, { className: "w-5 h-5 text-emerald-600" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-900", children: "Use Cases" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Praktische Anwendungsszenarien" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#consent-typen", className: "flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(UserCheck, { className: "w-5 h-5 text-emerald-600" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-900", children: "Consent-Typen" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Verschiedene Einwilligungsansätze" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#implementation", className: "flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Code, { className: "w-5 h-5 text-emerald-600" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-900", children: "Implementation" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Technische Umsetzung" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#compliance", className: "flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(Scale, { className: "w-5 h-5 text-emerald-600" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-900", children: "Compliance" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Monitoring & Validierung" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("a", { href: "#weiterführende-themen", className: "flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsx("div", { className: "w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center", children: /* @__PURE__ */ jsx(ArrowRight, { className: "w-5 h-5 text-emerald-600" }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("h3", { className: "font-medium text-gray-900", children: "Weiterführende Themen" }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Verwandte Artikel & Ressourcen" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-6 py-16", children: [
      /* @__PURE__ */ jsxs(Tabs, { defaultValue: "requirements", className: "space-y-8", children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2 lg:grid-cols-5", children: [
          /* @__PURE__ */ jsx(TabsTrigger, { value: "requirements", children: "Anforderungen" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "scenarios", children: "Use Cases" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "types", children: "Consent-Typen" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "implementation", children: "Implementation" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "compliance", children: "Compliance" })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "requirements", className: "space-y-8", id: "anforderungen", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "KI-spezifische Einwilligungsanforderungen" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Sechs zentrale Anforderungen für DSGVO-konforme Einwilligungen bei KI-basierter Datenverarbeitung und automatisierten Entscheidungssystemen." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: consentRequirements.map((requirement, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsxs(CardHeader, { className: "pb-4", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-3", children: [
                    /* @__PURE__ */ jsx("div", { className: `p-3 rounded-lg ${requirement.color}`, children: /* @__PURE__ */ jsx(requirement.icon, { className: "w-6 h-6 text-white" }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: requirement.title }),
                      /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-500", children: requirement.subtitle })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: requirement.description })
                ] }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Anforderungen:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: requirement.requirements.map((req, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                      req
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "pt-3 border-t bg-cyan-50 p-3 rounded", children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold text-cyan-800 mb-2", children: "KI-Besonderheit:" }),
                    /* @__PURE__ */ jsx("p", { className: "text-sm text-cyan-700", children: requirement.ai_specific })
                  ] })
                ] })
              ] })
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "scenarios", className: "space-y-8", id: "use-cases", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "KI-Einwilligungs-Szenarien" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Spezifische Einwilligungsanforderungen für verschiedene KI-Anwendungsbereiche mit praktischen Implementierungsansätzen und Compliance-Überlegungen." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: Object.entries(consentScenarios).map(([key, scenario]) => /* @__PURE__ */ jsx(
            Button,
            {
              variant: activeScenario === key ? "default" : "outline",
              onClick: () => setActiveScenario(key),
              className: "mb-2",
              children: scenario.title
            },
            key
          )) }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl", children: consentScenarios[activeScenario].title }),
                /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: consentScenarios[activeScenario].description })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                /* @__PURE__ */ jsx(Badge, { variant: "outline", children: consentScenarios[activeScenario].complexity }),
                /* @__PURE__ */ jsxs(Badge, { variant: "secondary", children: [
                  /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3 mr-1" }),
                  consentScenarios[activeScenario].duration
                ] })
              ] })
            ] }) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Consent-Herausforderungen:" }),
                /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-2", children: consentScenarios[activeScenario].consent_challenges.map((challenge, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm bg-orange-50 p-2 rounded", children: [
                  /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-orange-500" }),
                  challenge
                ] }, idx)) })
              ] }),
              consentScenarios[activeScenario].implementation && /* @__PURE__ */ jsxs(Fragment, { children: [
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-6", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Consent Flow:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: consentScenarios[activeScenario].implementation.consent_flow.map((step, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx("div", { className: "w-5 h-5 rounded-full bg-cyan-500 text-white text-xs flex items-center justify-center mt-0.5", children: idx + 1 }),
                      step
                    ] }, idx)) })
                  ] }),
                  consentScenarios[activeScenario].implementation.technical_measures && /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Technische Maßnahmen:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: consentScenarios[activeScenario].implementation.technical_measures.map((measure, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(Settings, { className: "w-3 h-3 text-blue-500" }),
                      measure
                    ] }, idx)) })
                  ] }),
                  consentScenarios[activeScenario].implementation.compliance_aspects && /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Compliance-Aspekte:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: consentScenarios[activeScenario].implementation.compliance_aspects.map((aspect, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(Scale, { className: "w-3 h-3 text-green-500" }),
                      aspect
                    ] }, idx)) })
                  ] })
                ] }),
                activeScenario === "ml-training" && consentScenarios[activeScenario].code_example && /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Implementierungsbeispiel:" }),
                  /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-sm overflow-x-auto", children: /* @__PURE__ */ jsx("code", { children: consentScenarios[activeScenario].code_example }) }) })
                ] })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "types", className: "space-y-8", id: "consent-typen", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Consent-Management Ansätze" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Verschiedene Ansätze für das Management von KI-Einwilligungen mit jeweiligen Vor- und Nachteilen für User Experience und Compliance." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: Object.entries(consentTypes).map(([key, type]) => /* @__PURE__ */ jsx(
            Button,
            {
              variant: selectedConsentType === key ? "default" : "outline",
              onClick: () => setSelectedConsentType(key),
              className: "mb-2",
              children: type.name
            },
            key
          )) }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(UserCheck, { className: "w-5 h-5" }),
                consentTypes[selectedConsentType].name
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: consentTypes[selectedConsentType].description })
            ] }),
            /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-green-600", children: "Vorteile:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: consentTypes[selectedConsentType].advantages.map((advantage, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500 mt-0.5" }),
                    advantage
                  ] }, idx)) })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3 text-orange-600", children: "Herausforderungen:" }),
                  /* @__PURE__ */ jsx("ul", { className: "space-y-2", children: consentTypes[selectedConsentType].challenges.map((challenge, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2 text-sm", children: [
                    /* @__PURE__ */ jsx(AlertCircle, { className: "w-4 h-4 text-orange-500 mt-0.5" }),
                    challenge
                  ] }, idx)) })
                ] })
              ] }),
              selectedConsentType === "granular" && consentTypes[selectedConsentType].implementation_example && /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-3", children: "Implementierungsbeispiel:" }),
                /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-sm overflow-x-auto", children: /* @__PURE__ */ jsx("code", { children: consentTypes[selectedConsentType].implementation_example }) }) })
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "implementation", className: "space-y-8", id: "implementation", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Implementierungsleitfaden" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Schritt-für-Schritt Anleitung zur Implementierung eines DSGVO-konformen KI-Einwilligungsmanagement-Systems mit technischen Komponenten." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Code, { className: "w-5 h-5 text-blue-500" }),
                "Technische Architektur"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                "Consent Management API",
                "User Preference Engine",
                "ML Pipeline Integration",
                "Audit & Compliance Layer",
                "Dynamic Consent Updates",
                "Cross-System Synchronization"
              ].map((component, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-2 bg-blue-50 rounded", children: [
                /* @__PURE__ */ jsx("div", { className: "w-6 h-6 rounded bg-blue-500 text-white text-xs flex items-center justify-center", children: idx + 1 }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: component })
              ] }, idx)) }) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Workflow, { className: "w-5 h-5 text-green-500" }),
                "Implementierungsphasen"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: /* @__PURE__ */ jsx("div", { className: "space-y-3", children: [
                { phase: "Requirements Analysis", duration: "1-2 Wochen" },
                { phase: "Consent UI/UX Design", duration: "2-3 Wochen" },
                { phase: "Backend API Development", duration: "3-4 Wochen" },
                { phase: "ML Pipeline Integration", duration: "2-3 Wochen" },
                { phase: "Testing & Validation", duration: "2 Wochen" },
                { phase: "Deployment & Monitoring", duration: "1 Woche" }
              ].map((item, idx) => /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between p-2 bg-green-50 rounded", children: [
                /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: item.phase }),
                /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: item.duration })
              ] }, idx)) }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileCheck, { className: "w-5 h-5 text-purple-500" }),
              "Integration Checkliste"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
              "Consent Management System Setup",
              "User Consent Interface entwickelt",
              "ML Pipeline Consent-Checks integriert",
              "Granulare Einwilligungsoptionen",
              "Dynamic Consent Updates implementiert",
              "Widerrufsmechanismen funktionsfähig",
              "Audit-Logging konfiguriert",
              "Cross-System Synchronisation",
              "Compliance-Reporting automatisiert",
              "User Dashboard implementiert",
              "Mobile Consent-Experience optimiert",
              "Performance & Security getestet"
            ].map((item, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100",
                onClick: () => toggleStep(`implementation-${index}`),
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `w-5 h-5 rounded border-2 flex items-center justify-center ${completedSteps[`implementation-${index}`] ? "bg-green-500 border-green-500" : "border-gray-300"}`,
                      children: completedSteps[`implementation-${index}`] && /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: `text-sm ${completedSteps[`implementation-${index}`] ? "line-through text-gray-500" : ""}`, children: item })
                ]
              },
              index
            )) }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "compliance", className: "space-y-8", id: "compliance", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-4", children: "Compliance & Monitoring" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Kontinuierliche Überwachung der Einwilligungsqualität und Compliance-Validierung für KI-Einwilligungsmanagement-Systeme." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(UserCheck, { className: "w-5 h-5 text-blue-500" }),
                "Consent Metriken"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Consent Rate" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "73%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 73, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Granularity Level" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-blue-500", children: "High" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 85, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Withdrawal Rate" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "4.2%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 4.2, className: "h-2" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Scale, { className: "w-5 h-5 text-green-500" }),
                "DSGVO Compliance"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Art. 7 Compliance" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "✓" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 100, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Granularity" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "✓" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 100, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Transparency" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "✓" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 100, className: "h-2" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Activity, { className: "w-5 h-5 text-orange-500" }),
                "System Health"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "API Response Time" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "45ms" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 90, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Consent Sync Rate" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-blue-500", children: "99.8%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 99.8, className: "h-2" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Audit Coverage" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-purple-500", children: "100%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 100, className: "h-2" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileCheck, { className: "w-5 h-5 text-green-500" }),
              "KI-Einwilligung Compliance Audit"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
              "Informierte Einwilligung gewährleistet",
              "Granulare Kontrollen implementiert",
              "Zweckbindung durchgesetzt",
              "Widerruf-Mechanismen funktional",
              "Consent-Dokumentation vollständig",
              "ML-Pipeline Integration validiert",
              "Dynamic Consent Updates aktiv",
              "Cross-System Synchronisation",
              "Audit-Trail lückenlos",
              "User Experience optimiert",
              "Mobile Consent funktional",
              "Compliance-Reporting automatisiert"
            ].map((item, index) => /* @__PURE__ */ jsxs(
              "div",
              {
                className: "flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100",
                onClick: () => toggleStep(`audit-${index}`),
                children: [
                  /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: `w-5 h-5 rounded border-2 flex items-center justify-center ${completedSteps[`audit-${index}`] ? "bg-green-500 border-green-500" : "border-gray-300"}`,
                      children: completedSteps[`audit-${index}`] && /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-white" })
                    }
                  ),
                  /* @__PURE__ */ jsx("span", { className: `text-sm ${completedSteps[`audit-${index}`] ? "line-through text-gray-500" : ""}`, children: item })
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
          className: "bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center mt-16",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Bereit für DSGVO-konformes KI-Einwilligungsmanagement?" }),
            /* @__PURE__ */ jsx("p", { className: "text-emerald-100 mb-6 max-w-2xl mx-auto", children: "Implementieren Sie granulare, transparente und benutzerfreundliche Einwilligungssysteme für KI-basierte Datenverarbeitung." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
              /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "secondary", children: [
                /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 mr-2" }),
                "Consent Management Toolkit"
              ] }),
              /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white hover:text-emerald-600", children: [
                /* @__PURE__ */ jsx(MessageSquare, { className: "w-5 h-5 mr-2" }),
                "Implementierungsberatung"
              ] })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-16 border-t pt-16", id: "weiterführende-themen", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Weiterführende Themen" }),
        /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsx(Link, { to: "/ki/ki-datenschutzfolgenabschaetzung", className: "group", children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors", children: /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-blue-600" }) }),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "KI-Datenschutzfolgenabschätzung" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Systematische Bewertung der Datenschutzrisiken bei KI-Systemen gemäß DSGVO Art. 35" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-blue-600 font-medium", children: [
              "Mehr erfahren ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/ki/ki-transparenz", className: "group", children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors", children: /* @__PURE__ */ jsx(Eye, { className: "w-5 h-5 text-green-600" }) }),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "KI-Transparenz & Erklärbarkeit" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Explainable AI und transparente Kommunikation von KI-Entscheidungen" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-green-600 font-medium", children: [
              "Mehr erfahren ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/ki/automatisierte-entscheidungen", className: "group", children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors", children: /* @__PURE__ */ jsx(Bot, { className: "w-5 h-5 text-purple-600" }) }),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Automatisierte Entscheidungen" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "DSGVO Art. 22 konforme Gestaltung automatisierter Entscheidungsprozesse" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-purple-600 font-medium", children: [
              "Mehr erfahren ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/ki/ki-training-datenschutz", className: "group", children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors", children: /* @__PURE__ */ jsx(Database, { className: "w-5 h-5 text-orange-600" }) }),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "KI-Training & Datenschutz" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Datenschutzkonforme Gestaltung von ML-Trainingsprozessen und Datenpipelines" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-orange-600 font-medium", children: [
              "Mehr erfahren ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/ki/ki-audit", className: "group", children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors", children: /* @__PURE__ */ jsx(FileCheck, { className: "w-5 h-5 text-red-600" }) }),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "KI-Audit & Compliance" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Systematische Prüfung und Zertifizierung von KI-Systemen" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-red-600 font-medium", children: [
              "Mehr erfahren ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsx(Link, { to: "/ki/ki-governance", className: "group", children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow", children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-3", children: [
                /* @__PURE__ */ jsx("div", { className: "p-2 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors", children: /* @__PURE__ */ jsx(Building2, { className: "w-5 h-5 text-indigo-600" }) }),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "KI-Governance Framework" })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600", children: "Organisatorische Strukturen für verantwortungsvolle KI-Entwicklung" })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center text-indigo-600 font-medium", children: [
              "Mehr erfahren ",
              /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4 ml-2" })
            ] }) })
          ] }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
export {
  KiEinwilligungsmanagement as default
};
