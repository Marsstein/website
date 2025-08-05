import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  UserCheck,
  Shield, 
  Lock, 
  Eye,
  Users,
  CheckCircle2,
  ArrowRight,
  Download,
  MessageSquare,
  Settings,
  Code,
  FileText,
  AlertCircle,
  Scale,
  Clock,
  Star,
  TrendingUp,
  Activity,
  Target,
  Workflow,
  FileCheck,
  Building2,
  Database,
  Network,
  Server,
  Key,
  Fingerprint,
  Monitor,
  Gauge,
  Lightbulb,
  Wrench,
  Construction,
  Blocks,
  CircuitBoard,
  Bot,
  Sparkles,
  BarChart3,
  PieChart,
  LineChart,
  HelpCircle,
  Info,
  X,
  ChevronDown,
  Plus,
  Minus,
  Edit3,
  Trash2,
  Copy,
  RotateCcw,
  Save
} from 'lucide-react';

const KiEinwilligungsmanagement = () => {
  const [activeScenario, setActiveScenario] = useState('ml-training');
  const [completedSteps, setCompletedSteps] = useState({});
  const [selectedConsentType, setSelectedConsentType] = useState('granular');
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
    'ml-training': {
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
    'personalization': {
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
    'automated-decisions': {
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
    'granular': {
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
    'blanket': {
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
    'tiered': {
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
    setCompletedSteps(prev => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <motion.div 
        ref={containerRef}
        className="relative bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden"
        style={{ y: headerY, opacity: headerOpacity }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-6 py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
              <UserCheck className="w-5 h-5" />
              <span className="font-medium">KI-Einwilligungsmanagement</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent">
              KI-Einwilligungsmanagement
            </h1>
            <p className="text-xl lg:text-2xl text-cyan-100 mb-8 leading-relaxed">
              Spezielle Anforderungen an Einwilligungen für KI-basierte Datenverarbeitung mit granularer Kontrolle und DSGVO-Compliance
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <UserCheck className="w-4 h-4 mr-1" />
                Granulare Kontrolle
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="w-4 h-4 mr-1" />
                DSGVO-konform
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Settings className="w-4 h-4 mr-1" />
                Dynamic Consent
              </Badge>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <Tabs defaultValue="requirements" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="requirements">Anforderungen</TabsTrigger>
            <TabsTrigger value="scenarios">Use Cases</TabsTrigger>
            <TabsTrigger value="types">Consent-Typen</TabsTrigger>
            <TabsTrigger value="implementation">Implementation</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
          </TabsList>

          {/* Consent Requirements */}
          <TabsContent value="requirements" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">KI-spezifische Einwilligungsanforderungen</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Sechs zentrale Anforderungen für DSGVO-konforme Einwilligungen bei 
                KI-basierter Datenverarbeitung und automatisierten Entscheidungssystemen.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {consentRequirements.map((requirement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4 mb-3">
                        <div className={`p-3 rounded-lg ${requirement.color}`}>
                          <requirement.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{requirement.title}</CardTitle>
                          <p className="text-sm text-gray-500">{requirement.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-600">{requirement.description}</p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Anforderungen:</h4>
                        <ul className="space-y-1">
                          {requirement.requirements.map((req, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-3 border-t bg-cyan-50 p-3 rounded">
                        <h4 className="font-semibold text-cyan-800 mb-2">KI-Besonderheit:</h4>
                        <p className="text-sm text-cyan-700">{requirement.ai_specific}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Use Case Scenarios */}
          <TabsContent value="scenarios" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">KI-Einwilligungs-Szenarien</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Spezifische Einwilligungsanforderungen für verschiedene KI-Anwendungsbereiche 
                mit praktischen Implementierungsansätzen und Compliance-Überlegungen.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(consentScenarios).map(([key, scenario]) => (
                <Button
                  key={key}
                  variant={activeScenario === key ? "default" : "outline"}
                  onClick={() => setActiveScenario(key)}
                  className="mb-2"
                >
                  {scenario.title}
                </Button>
              ))}
            </div>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">{consentScenarios[activeScenario].title}</CardTitle>
                    <p className="text-gray-600">{consentScenarios[activeScenario].description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Badge variant="outline">
                      {consentScenarios[activeScenario].complexity}
                    </Badge>
                    <Badge variant="secondary">
                      <Clock className="w-3 h-3 mr-1" />
                      {consentScenarios[activeScenario].duration}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">Consent-Herausforderungen:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {consentScenarios[activeScenario].consent_challenges.map((challenge, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm bg-orange-50 p-2 rounded">
                        <AlertCircle className="w-4 h-4 text-orange-500" />
                        {challenge}
                      </div>
                    ))}
                  </div>
                </div>

                {consentScenarios[activeScenario].implementation && (
                  <>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold mb-3">Consent Flow:</h4>
                        <ul className="space-y-2">
                          {consentScenarios[activeScenario].implementation.consent_flow.map((step, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm">
                              <div className="w-5 h-5 rounded-full bg-cyan-500 text-white text-xs flex items-center justify-center mt-0.5">
                                {idx + 1}
                              </div>
                              {step}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {consentScenarios[activeScenario].implementation.technical_measures && (
                        <div>
                          <h4 className="font-semibold mb-3">Technische Maßnahmen:</h4>
                          <ul className="space-y-1">
                            {consentScenarios[activeScenario].implementation.technical_measures.map((measure, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm">
                                <Settings className="w-3 h-3 text-blue-500" />
                                {measure}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {consentScenarios[activeScenario].implementation.compliance_aspects && (
                        <div>
                          <h4 className="font-semibold mb-3">Compliance-Aspekte:</h4>
                          <ul className="space-y-1">
                            {consentScenarios[activeScenario].implementation.compliance_aspects.map((aspect, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-sm">
                                <Scale className="w-3 h-3 text-green-500" />
                                {aspect}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* Code Example for ML Training */}
                    {activeScenario === 'ml-training' && consentScenarios[activeScenario].code_example && (
                      <div>
                        <h4 className="font-semibold mb-3">Implementierungsbeispiel:</h4>
                        <div className="bg-gray-900 rounded-lg p-4">
                          <pre className="text-green-400 text-sm overflow-x-auto">
                            <code>{consentScenarios[activeScenario].code_example}</code>
                          </pre>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Consent Types */}
          <TabsContent value="types" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Consent-Management Ansätze</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Verschiedene Ansätze für das Management von KI-Einwilligungen mit 
                jeweiligen Vor- und Nachteilen für User Experience und Compliance.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(consentTypes).map(([key, type]) => (
                <Button
                  key={key}
                  variant={selectedConsentType === key ? "default" : "outline"}
                  onClick={() => setSelectedConsentType(key)}
                  className="mb-2"
                >
                  {type.name}
                </Button>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserCheck className="w-5 h-5" />
                  {consentTypes[selectedConsentType].name}
                </CardTitle>
                <p className="text-gray-600">{consentTypes[selectedConsentType].description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">Vorteile:</h4>
                    <ul className="space-y-2">
                      {consentTypes[selectedConsentType].advantages.map((advantage, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                          {advantage}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">Herausforderungen:</h4>
                    <ul className="space-y-2">
                      {consentTypes[selectedConsentType].challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <AlertCircle className="w-4 h-4 text-orange-500 mt-0.5" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Implementation Example for Granular Consent */}
                {selectedConsentType === 'granular' && consentTypes[selectedConsentType].implementation_example && (
                  <div>
                    <h4 className="font-semibold mb-3">Implementierungsbeispiel:</h4>
                    <div className="bg-gray-900 rounded-lg p-4">
                      <pre className="text-green-400 text-sm overflow-x-auto">
                        <code>{consentTypes[selectedConsentType].implementation_example}</code>
                      </pre>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Implementation Guide */}
          <TabsContent value="implementation" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Implementierungsleitfaden</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Schritt-für-Schritt Anleitung zur Implementierung eines DSGVO-konformen 
                KI-Einwilligungsmanagement-Systems mit technischen Komponenten.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="w-5 h-5 text-blue-500" />
                    Technische Architektur
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      "Consent Management API",
                      "User Preference Engine",
                      "ML Pipeline Integration", 
                      "Audit & Compliance Layer",
                      "Dynamic Consent Updates",
                      "Cross-System Synchronization"
                    ].map((component, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-2 bg-blue-50 rounded">
                        <div className="w-6 h-6 rounded bg-blue-500 text-white text-xs flex items-center justify-center">
                          {idx + 1}
                        </div>
                        <span className="text-sm font-medium">{component}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Workflow className="w-5 h-5 text-green-500" />
                    Implementierungsphasen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      { phase: "Requirements Analysis", duration: "1-2 Wochen" },
                      { phase: "Consent UI/UX Design", duration: "2-3 Wochen" },
                      { phase: "Backend API Development", duration: "3-4 Wochen" },
                      { phase: "ML Pipeline Integration", duration: "2-3 Wochen" },
                      { phase: "Testing & Validation", duration: "2 Wochen" },
                      { phase: "Deployment & Monitoring", duration: "1 Woche" }
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between p-2 bg-green-50 rounded">
                        <span className="text-sm font-medium">{item.phase}</span>
                        <Badge variant="outline" className="text-xs">
                          {item.duration}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Integration Checklist */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-purple-500" />
                  Integration Checkliste
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
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
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                      onClick={() => toggleStep(`implementation-${index}`)}
                    >
                      <div 
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          completedSteps[`implementation-${index}`] 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300'
                        }`}
                      >
                        {completedSteps[`implementation-${index}`] && (
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className={`text-sm ${
                        completedSteps[`implementation-${index}`] 
                          ? 'line-through text-gray-500' 
                          : ''
                      }`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance & Monitoring */}
          <TabsContent value="compliance" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Compliance & Monitoring</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Kontinuierliche Überwachung der Einwilligungsqualität und 
                Compliance-Validierung für KI-Einwilligungsmanagement-Systeme.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <UserCheck className="w-5 h-5 text-blue-500" />
                    Consent Metriken
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Consent Rate</span>
                      <Badge variant="default" className="bg-green-500">73%</Badge>
                    </div>
                    <Progress value={73} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Granularity Level</span>
                      <Badge variant="default" className="bg-blue-500">High</Badge>
                    </div>
                    <Progress value={85} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Withdrawal Rate</span>
                      <Badge variant="secondary">4.2%</Badge>
                    </div>
                    <Progress value={4.2} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-green-500" />
                    DSGVO Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Art. 7 Compliance</span>
                      <Badge variant="default" className="bg-green-500">✓</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Granularity</span>
                      <Badge variant="default" className="bg-green-500">✓</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Transparency</span>
                      <Badge variant="default" className="bg-green-500">✓</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-orange-500" />
                    System Health
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">API Response Time</span>
                      <Badge variant="secondary">45ms</Badge>
                    </div>
                    <Progress value={90} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Consent Sync Rate</span>
                      <Badge variant="default" className="bg-blue-500">99.8%</Badge>
                    </div>
                    <Progress value={99.8} className="h-2" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Audit Coverage</span>
                      <Badge variant="default" className="bg-purple-500">100%</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Compliance Audit */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-green-500" />
                  KI-Einwilligung Compliance Audit
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
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
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                      onClick={() => toggleStep(`audit-${index}`)}
                    >
                      <div 
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          completedSteps[`audit-${index}`] 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300'
                        }`}
                      >
                        {completedSteps[`audit-${index}`] && (
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className={`text-sm ${
                        completedSteps[`audit-${index}`] 
                          ? 'line-through text-gray-500' 
                          : ''
                      }`}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-8 text-white text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">
            Bereit für DSGVO-konformes KI-Einwilligungsmanagement?
          </h3>
          <p className="text-emerald-100 mb-6 max-w-2xl mx-auto">
            Implementieren Sie granulare, transparente und benutzerfreundliche 
            Einwilligungssysteme für KI-basierte Datenverarbeitung.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Download className="w-5 h-5 mr-2" />
              Consent Management Toolkit
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-emerald-600">
              <MessageSquare className="w-5 h-5 mr-2" />
              Implementierungsberatung
            </Button>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default KiEinwilligungsmanagement;