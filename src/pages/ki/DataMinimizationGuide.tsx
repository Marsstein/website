import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  Database,
  Minimize2, 
  Shield, 
  FileText, 
  Users,
  Building2,
  CheckCircle2,
  ArrowRight,
  Download,
  BookOpen,
  Euro,
  Calendar,
  Activity,
  Brain,
  Lock,
  Eye,
  UserCheck,
  Clipboard,
  FileCheck,
  Zap,
  Settings,
  Globe,
  TrendingUp,
  Clock,
  Star,
  Target,
  Lightbulb,
  Smartphone,
  Wifi,
  Server,
  Code,
  Award,
  Scale,
  Fingerprint,
  Key,
  Monitor,
  Tablet,
  Headphones,
  Mail,
  Phone,
  Search,
  Package,
  Truck,
  AlertCircle,
  Cookie,
  MousePointer,
  BarChart,
  MessageSquare,
  Layers,
  GitBranch,
  RefreshCw,
  Upload,
  HardDrive,
  Network,
  Cpu,
  MemoryStick,
  Webhook,
  Terminal,
  Boxes,
  Construction,
  Wrench,
  Bot,
  CircuitBoard,
  Sparkles,
  Ban,
  CheckSquare,
  X,
  ChevronDown,
  ExternalLink,
  Timer,
  PieChart,
  LineChart,
  BarChart3,
  ShieldCheck,
  FileX,
  UserX,
  Square,
  ThumbsUp,
  ThumbsDown,
  Plus,
  Minus,
  Play,
  Pause,
  RotateCcw,
  Save,
  Edit3,
  Trash2,
  Copy,
  HelpCircle,
  Info,
  Filter,
  Trash,
  Sliders,
  Workflow,
  List
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DataMinimizationGuide = () => {
  useEffect(() => {
    document.title = 'Datenminimierung KI-Modelle – DSGVO-konforme ML-Entwicklung';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Datenminimierung für KI-Systeme: Feature Selection, Smart Sampling & Pipeline-Optimierung. DSGVO-konform entwickeln. Jetzt umsetzen!');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Datenminimierung für KI-Systeme: Feature Selection, Smart Sampling & Pipeline-Optimierung. DSGVO-konform entwickeln. Jetzt umsetzen!';
      document.head.appendChild(meta);
    }

    // Viewport meta tag
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1';
      document.head.appendChild(meta);
    }

    // Add canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      const link = document.createElement('link');
      link.rel = 'canonical';
      link.href = 'https://dataguard.de/wissen/ki-datenschutz/data-minimization';
      document.head.appendChild(link);
    }

    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Datenminimierung KI-Modelle – DSGVO-konforme ML-Entwicklung' },
      { property: 'og:description', content: 'Datenminimierung für KI-Systeme: Feature Selection, Smart Sampling & Pipeline-Optimierung. DSGVO-konform entwickeln. Jetzt umsetzen!' },
      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: 'https://dataguard.de/wissen/ki-datenschutz/data-minimization' }
    ];

    ogTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!existingTag) {
        const meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    // Add JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Datenminimierung KI-Modelle – DSGVO-konforme ML-Entwicklung",
      "description": "Datenminimierung für KI-Systeme: Feature Selection, Smart Sampling & Pipeline-Optimierung. DSGVO-konform entwickeln. Jetzt umsetzen!",
      "author": {
        "@type": "Organization",
        "name": "DataGuard"
      },
      "datePublished": "2024-01-15",
      "dateModified": new Date().toISOString(),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://dataguard.de/wissen/ki-datenschutz/data-minimization"
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
            "name": "Datenminimierung",
            "item": "https://dataguard.de/wissen/ki-datenschutz/data-minimization"
          }
        ]
      }
    };

    const scriptTag = document.createElement('script');
    scriptTag.type = 'application/ld+json';
    scriptTag.text = JSON.stringify(structuredData);
    document.head.appendChild(scriptTag);

    return () => {
      // Cleanup on unmount
      const scriptToRemove = document.querySelector('script[type="application/ld+json"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  const [activeStage, setActiveStage] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({});
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedTechnique, setSelectedTechnique] = useState('feature-selection');
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });
  const headerY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  const minimizationPrinciples = [
    {
      title: "Datensammlung Minimieren",
      icon: Database,
      color: "bg-blue-500",
      description: "Nur notwendige Daten sammeln",
      techniques: [
        "Zielgerichtete Datensammlung",
        "Statistische Stichproben",
        "Synthetische Daten verwenden",
        "Transfer Learning einsetzen"
      ],
      compliance: "DSGVO Art. 5 (1) (c) - Verhältnismäßigkeit"
    },
    {
      title: "Feature Engineering",
      icon: Workflow,
      color: "bg-green-500",
      description: "Relevante Features identifizieren",
      techniques: [
        "Feature Selection Algorithmen",
        "Dimensionsreduktion (PCA, t-SNE)",
        "Correlation Analysis",
        "Mutual Information"
      ],
      compliance: "Privacy by Design Prinzip"
    },
    {
      title: "Pipeline Optimierung",
      icon: GitBranch,
      color: "bg-purple-500",
      description: "Datenmenge über Pipeline reduzieren",
      techniques: [
        "Progressive Data Loading",
        "Incremental Learning",
        "Active Learning",
        "Federated Averaging"
      ],
      compliance: "Speicherbegrenzung nach DSGVO"
    },
    {
      title: "Modell Komprimierung",
      icon: Minimize2,
      color: "bg-orange-500",
      description: "Speicher- und Übertragungsoptimierung",
      techniques: [
        "Model Pruning",
        "Quantization",
        "Knowledge Distillation",
        "Neural Architecture Search"
      ],
      compliance: "Datenminimierung in Produktion"
    }
  ];

  const implementationStages = [
    {
      title: "Data Collection Phase",
      icon: Database,
      description: "Minimierung bereits bei der Datensammlung",
      duration: "2-4 Wochen",
      steps: [
        "Datensammlung Requirements definieren",
        "Minimum Viable Dataset bestimmen",
        "Sampling Strategien implementieren",
        "Automatische Datenvalidierung"
      ]
    },
    {
      title: "Preprocessing Phase", 
      icon: Filter,
      description: "Datenreduktion während Vorverarbeitung",
      duration: "3-5 Wochen",
      steps: [
        "Feature Selection Pipeline",
        "Noise Reduction implementieren",
        "Outlier Detection & Removal",
        "Data Quality Metrics"
      ]
    },
    {
      title: "Training Phase",
      icon: Brain,
      description: "Effizienter Modelltraining mit weniger Daten",
      duration: "4-6 Wochen",
      steps: [
        "Incremental Learning Setup",
        "Early Stopping Kriterien",
        "Regularization Techniken",
        "Hyperparameter Optimization"
      ]
    },
    {
      title: "Deployment Phase",
      icon: Server,
      description: "Produktive Minimierung und Monitoring",
      duration: "2-3 Wochen",
      steps: [
        "Model Compression anwenden",
        "Memory Usage Monitoring",
        "Automated Data Cleanup",
        "Compliance Monitoring"
      ]
    }
  ];

  const techniques = {
    'feature-selection': {
      name: "Feature Selection",
      description: "Automatische Auswahl relevanter Datenfelder",
      methods: [
        {
          name: "Statistical Tests",
          code: `# Chi-Square Test für kategoriale Features
from sklearn.feature_selection import chi2, SelectKBest
from sklearn.preprocessing import LabelEncoder

# Feature Selection
selector = SelectKBest(score_func=chi2, k=10)
X_selected = selector.fit_transform(X_categorical, y)

# Ausgewählte Features anzeigen
selected_features = selector.get_support(indices=True)
feature_names = [features[i] for i in selected_features]`,
          privacy_benefit: "Reduziert personenbezogene Daten um 60-80%"
        },
        {
          name: "Mutual Information",
          code: `# Mutual Information für numerische Features
from sklearn.feature_selection import mutual_info_regression
from sklearn.feature_selection import SelectKBest

# MI-basierte Feature Selection
selector = SelectKBest(
    score_func=mutual_info_regression, 
    k='all'
)
mi_scores = selector.fit(X_numeric, y).scores_

# Top Features auswählen
top_features_idx = np.argsort(mi_scores)[-10:]
X_minimized = X_numeric[:, top_features_idx]`,
          privacy_benefit: "Behält nur informative Features bei"
        }
      ]
    },
    'data-sampling': {
      name: "Smart Sampling",
      description: "Intelligente Reduktion der Datenmenge",
      methods: [
        {
          name: "Stratified Sampling",
          code: `# Stratified Sampling mit sklearn
from sklearn.model_selection import train_test_split

# Proportionale Stichprobe je Klasse
X_sample, _, y_sample, _ = train_test_split(
    X, y, 
    train_size=0.1,  # 10% der Daten
    stratify=y,      # Proportionale Verteilung
    random_state=42
)

# Datenqualität validieren
print(f"Original: {len(X)} samples")
print(f"Sample: {len(X_sample)} samples")
print(f"Reduction: {(1-len(X_sample)/len(X))*100:.1f}%")`,
          privacy_benefit: "90% weniger Personendaten bei gleichbleibender Repräsentativität"
        },
        {
          name: "Active Learning",
          code: `# Active Learning für minimale Annotations
from modAL import ActiveLearner
from sklearn.ensemble import RandomForestClassifier

# Initial kleines Dataset
initial_idx = np.random.choice(len(X), size=100, replace=False)
X_initial, y_initial = X[initial_idx], y[initial_idx]

# Active Learner initialisieren
learner = ActiveLearner(
    estimator=RandomForestClassifier(),
    X_training=X_initial,
    y_training=y_initial
)

# Iterativ informativste Samples hinzufügen
for i in range(10):
    query_idx, query_inst = learner.query(X_unlabeled)
    learner.teach(query_inst, y_true[query_idx])`,
          privacy_benefit: "Minimiert gelabelte Trainingsdaten um 80-95%"
        }
      ]
    },
    'model-compression': {
      name: "Model Compression",
      description: "Reduzierung der Modellgröße nach Training",
      methods: [
        {
          name: "Pruning",
          code: `# Neural Network Pruning mit TensorFlow
import tensorflow as tf
import tensorflow_model_optimization as tfmot

# Pruning während Training
prune_low_magnitude = tfmot.sparsity.keras.prune_low_magnitude

# Pruning Schedule
pruning_params = {
    'pruning_schedule': tfmot.sparsity.keras.ConstantSparsity(0.5, begin_step=0)
}

# Model mit Pruning
model_for_pruning = prune_low_magnitude(model, **pruning_params)
model_for_pruning.compile(optimizer='adam', loss='sparse_categorical_crossentropy')

# Training mit Pruning
model_for_pruning.fit(X_train, y_train, epochs=10)

# Finales komprimiertes Model
final_model = tfmot.sparsity.keras.strip_pruning(model_for_pruning)`,
          privacy_benefit: "50% kleinere Modelle = weniger Datenspeicherung"
        },
        {
          name: "Quantization",
          code: `# Post-Training Quantization
import tensorflow as tf

# Original Model laden
model = tf.keras.models.load_model('original_model.h5')

# TensorFlow Lite Converter
converter = tf.lite.TFLiteConverter.from_keras_model(model)

# Dynamic Range Quantization
converter.optimizations = [tf.lite.Optimize.DEFAULT]

# Quantized Model erstellen
quantized_model = converter.convert()

# Speichern
with open('quantized_model.tflite', 'wb') as f:
    f.write(quantized_model)

print(f"Größenreduktion: {(1-len(quantized_model)/model.count_params())*100:.1f}%")`,
          privacy_benefit: "75% weniger Speicher für Modelldaten"
        }
      ]
    },
    'synthetic-data': {
      name: "Synthetic Data",
      description: "Ersatz echter Personendaten durch synthetische",
      methods: [
        {
          name: "GANs für Tabular Data",
          code: `# Synthetic Data Generation mit CTGAN
from ctgan import CTGAN
import pandas as pd

# Original sensitives Dataset
real_data = pd.read_csv('sensitive_data.csv')

# CTGAN Model trainieren
ctgan = CTGAN(epochs=300)
ctgan.fit(real_data, discrete_columns=['category', 'status'])

# Synthetische Daten generieren
synthetic_data = ctgan.sample(len(real_data))

# Statistische Ähnlichkeit validieren
from scipy import stats
for col in real_data.columns:
    if real_data[col].dtype in ['int64', 'float64']:
        ks_stat, p_value = stats.ks_2samp(real_data[col], synthetic_data[col])
        print(f"{col}: KS-statistic = {ks_stat:.3f}, p-value = {p_value:.3f}")`,
          privacy_benefit: "0% echte Personendaten im ML-Training"
        },
        {
          name: "Differential Privacy Synthesis",
          code: `# DP-basierte synthetische Daten
from diffprivlib.models import GaussianNB
from diffprivlib.tools import make_classification
import numpy as np

# Differentially Private Data Synthesis
def create_dp_synthetic_data(X, y, epsilon=1.0):
    # DP-Gaussian Naive Bayes als Generator
    dp_model = GaussianNB(epsilon=epsilon)
    dp_model.fit(X, y)
    
    # Synthetische Samples generieren
    n_samples = len(X)
    synthetic_X = []
    synthetic_y = []
    
    for class_label in np.unique(y):
        n_class_samples = np.sum(y == class_label)
        class_means = dp_model.theta_[class_label]
        class_vars = dp_model.sigma_[class_label]
        
        # Gaussian Samples mit DP-Parametern
        samples = np.random.normal(
            class_means, 
            np.sqrt(class_vars), 
            (n_class_samples, len(class_means))
        )
        
        synthetic_X.extend(samples)
        synthetic_y.extend([class_label] * n_class_samples)
    
    return np.array(synthetic_X), np.array(synthetic_y)

X_synthetic, y_synthetic = create_dp_synthetic_data(X_real, y_real, epsilon=1.0)`,
          privacy_benefit: "Mathematisch bewiesener Privacy-Schutz"
        }
      ]
    }
  };

  const complianceFramework = {
    legal_requirements: [
      {
        law: "DSGVO Art. 5 (1) (c)",
        requirement: "Datenminimierung",
        implementation: "Nur für Zweck erforderliche Daten verarbeiten",
        ml_impact: "Feature Selection und Data Sampling implementieren"
      },
      {
        law: "DSGVO Art. 25",
        requirement: "Privacy by Design",
        implementation: "Datenschutz bereits in ML-Pipeline-Design einbauen",
        ml_impact: "Standardmäßig minimale Datensammlung"
      },
      {
        law: "DSGVO Art. 17",
        requirement: "Recht auf Löschung",
        implementation: "Daten nach Zweckerfüllung löschen",
        ml_impact: "Automated Data Cleanup nach Training"
      },
      {
        law: "DSGVO Art. 32",
        requirement: "Sicherheit der Verarbeitung",
        implementation: "Angemessene technische Maßnahmen",
        ml_impact: "Verschlüsselung komprimierter Modelle"
      }
    ],
    risk_assessment: [
      {
        risk: "Übersammlung von Daten",
        likelihood: "Hoch",
        impact: "Hoch",
        mitigation: "Automatische Feature Selection",
        monitoring: "Data Volume Tracking"
      },
      {
        risk: "Unnötige Datenspeicherung",
        likelihood: "Mittel",
        impact: "Hoch", 
        mitigation: "Automated Cleanup Pipelines",
        monitoring: "Storage Usage Alerts"
      },
      {
        risk: "Model Overfitting auf sensitive Daten",
        likelihood: "Mittel",
        impact: "Mittel",
        mitigation: "Regularization + Early Stopping",
        monitoring: "Validation Loss Tracking"
      }
    ]
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

  const calculateProgress = (stageIndex) => {
    const stage = implementationStages[stageIndex];
    const completedCount = stage.steps.filter(step => 
      completedSteps[`${stageIndex}-${step}`]
    ).length;
    return (completedCount / stage.steps.length) * 100;
  };

  return (
    <div className="min-h-screen bg-gray-50" itemScope itemType="https://schema.org/Article">
      <meta itemProp="name" content="Datenminimierung KI-Modelle – DSGVO-konforme ML-Entwicklung" />
      <meta itemProp="description" content="Datenminimierung für KI-Systeme: Feature Selection, Smart Sampling & Pipeline-Optimierung. DSGVO-konform entwickeln. Jetzt umsetzen!" />
      <meta itemProp="author" content="DataGuard Experts" />
      <Header />
      
      {/* Hero Section */}
      <section className="relative">
      <motion.div 
        ref={containerRef}
        className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden"
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
              <Minimize2 className="w-5 h-5" />
              <span className="font-medium">Data Minimization Guide</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Data Minimization in ML Pipelines
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed px-4">
              DSGVO-konforme Reduzierung von Personendaten in Machine Learning Workflows durch intelligente Optimierungstechniken
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Shield className="w-4 h-4 mr-1" />
                DSGVO Art. 5 (1) (c)
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Brain className="w-4 h-4 mr-1" />
                Privacy by Design
              </Badge>
              <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                <Database className="w-4 h-4 mr-1" />
                60-95% Reduktion
              </Badge>
            </div>
          </motion.div>
        </div>
      </motion.div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 py-8 sm:py-16">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li>
              <Link to="/" className="hover:text-blue-600">Home</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to="/wissen" className="hover:text-blue-600">Wissen</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li>
              <Link to="/wissen/ki-datenschutz" className="hover:text-blue-600">KI-Datenschutz</Link>
            </li>
            <li>
              <span className="mx-2">/</span>
            </li>
            <li className="text-gray-900 font-medium">Datenminimierung</li>
          </ol>
        </nav>

        {/* Table of Contents for Mobile */}
        <div className="lg:hidden mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <List className="w-5 h-5" />
                Inhaltsverzeichnis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <nav aria-label="Inhaltsverzeichnis">
                <ul className="space-y-2">
                  <li>
                    <a href="#principles-section" className="text-blue-600 hover:underline">Prinzipien</a>
                  </li>
                  <li>
                    <a href="#techniques-section" className="text-blue-600 hover:underline">Techniken</a>
                  </li>
                  <li>
                    <a href="#implementation-section" className="text-blue-600 hover:underline">Umsetzung</a>
                  </li>
                  <li>
                    <a href="#compliance-section" className="text-blue-600 hover:underline">Compliance</a>
                  </li>
                  <li>
                    <a href="#monitoring-section" className="text-blue-600 hover:underline">Monitoring</a>
                  </li>
                </ul>
              </nav>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="principles" className="space-y-8">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="principles">Prinzipien</TabsTrigger>
            <TabsTrigger value="techniques">Techniken</TabsTrigger>
            <TabsTrigger value="implementation">Umsetzung</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="monitoring">Monitoring</TabsTrigger>
          </TabsList>

          {/* Minimization Principles */}
          <TabsContent value="principles" className="space-y-8">
            <div className="text-center mb-12">
              <h2 id="principles-section" className="text-2xl sm:text-3xl font-bold mb-4 scroll-mt-24">Data Minimization Prinzipien</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Vier Kernprinzipien zur systematischen Reduzierung von Personendaten in ML-Pipelines 
                unter Erhaltung der Modellqualität und Compliance mit <Link to="/wissen/dsgvo-grundlagen" className="text-blue-600 hover:underline">DSGVO</Link>-Anforderungen.
                Ergänzend empfehlen wir unsere Guides zu <Link to="/wissen/ki-datenschutz/privacy-preserving-ai" className="text-blue-600 hover:underline">Privacy-Preserving AI</Link> und 
                <Link to="/wissen/ki-datenschutz/model-privacy-attacks" className="text-blue-600 hover:underline"> Model Privacy Attacks</Link>.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {minimizationPrinciples.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="pb-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 sm:p-3 rounded-lg ${principle.color}`}>
                          <principle.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-xl">{principle.title}</CardTitle>
                          <p className="text-gray-600">{principle.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2">Techniken:</h4>
                        <ul className="space-y-1">
                          {principle.techniques.map((technique, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              {technique}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-2 border-t">
                        <Badge variant="outline" className="text-blue-600 border-blue-200">
                          <Scale className="w-3 h-3 mr-1" />
                          {principle.compliance}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Implementation Techniques */}
          <TabsContent value="techniques" className="space-y-8">
            <div className="text-center mb-12">
              <h2 id="techniques-section" className="text-2xl sm:text-3xl font-bold mb-4 scroll-mt-24">Implementierungstechniken</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Praktische Techniken zur Datenminimierung mit Code-Beispielen und 
                quantifizierten Privacy-Benefits für verschiedene ML-Pipeline-Phasen.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {Object.entries(techniques).map(([key, technique]) => (
                <Button
                  key={key}
                  variant={selectedTechnique === key ? "default" : "outline"}
                  onClick={() => setSelectedTechnique(key)}
                  className="mb-2"
                >
                  {technique.name}
                </Button>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-5 h-5" />
                  {techniques[selectedTechnique].name}
                </CardTitle>
                <p className="text-gray-600">{techniques[selectedTechnique].description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {techniques[selectedTechnique].methods.map((method, index) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-lg">{method.name}</h4>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        <Shield className="w-3 h-3 mr-1" />
                        {method.privacy_benefit}
                      </Badge>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 mb-3">
                      <pre className="text-green-400 text-sm overflow-x-auto">
                        <code>{method.code}</code>
                      </pre>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* Implementation Roadmap */}
          <TabsContent value="implementation" className="space-y-8">
            <div className="text-center mb-12">
              <h2 id="implementation-section" className="text-2xl sm:text-3xl font-bold mb-4 scroll-mt-24">Implementation Roadmap</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Schritt-für-Schritt Anleitung zur Implementierung von Data Minimization 
                in bestehende ML-Pipelines mit Zeitplänen und Erfolgsmetriken.
              </p>
            </div>

            <div className="space-y-8">
              {implementationStages.map((stage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className={`${activeStage === index ? 'ring-2 ring-blue-500' : ''}`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-lg ${
                            activeStage === index ? 'bg-blue-500' : 'bg-gray-200'
                          }`}>
                            <stage.icon className={`w-6 h-6 ${
                              activeStage === index ? 'text-white' : 'text-gray-600'
                            }`} />
                          </div>
                          <div>
                            <CardTitle className="text-xl">
                              Phase {index + 1}: {stage.title}
                            </CardTitle>
                            <p className="text-gray-600">{stage.description}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge variant="outline">
                            <Clock className="w-3 h-3 mr-1" />
                            {stage.duration}
                          </Badge>
                          <div className="mt-2">
                            <Progress value={calculateProgress(index)} className="w-24" />
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {stage.steps.map((step, stepIndex) => (
                          <div
                            key={stepIndex}
                            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                            onClick={() => toggleStep(`${index}-${step}`)}
                          >
                            <div 
                              className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                                completedSteps[`${index}-${step}`] 
                                  ? 'bg-green-500 border-green-500' 
                                  : 'border-gray-300'
                              }`}
                            >
                              {completedSteps[`${index}-${step}`] && (
                                <CheckCircle2 className="w-3 h-3 text-white" />
                              )}
                            </div>
                            <span className={`text-sm ${
                              completedSteps[`${index}-${step}`] 
                                ? 'line-through text-gray-500' 
                                : ''
                            }`}>
                              {step}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 flex gap-2">
                        <Button
                          size="sm"
                          onClick={() => setActiveStage(index)}
                          variant={activeStage === index ? "default" : "outline"}
                        >
                          Phase aktivieren
                        </Button>
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4 mr-2" />
                          Checkliste
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Compliance Framework */}
          <TabsContent value="compliance" className="space-y-8">
            <div className="text-center mb-12">
              <h2 id="compliance-section" className="text-2xl sm:text-3xl font-bold mb-4 scroll-mt-24">DSGVO Compliance Framework</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Rechtliche Anforderungen, Risikobewertung und konkrete Umsetzungsmaßnahmen 
                für DSGVO-konforme Data Minimization in ML-Systemen.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Legal Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Scale className="w-5 h-5 text-blue-500" />
                    Rechtliche Anforderungen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {complianceFramework.legal_requirements.map((req, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{req.law}</h4>
                        <Badge variant="outline" className="text-xs">
                          {req.requirement}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{req.implementation}</p>
                      <div className="bg-blue-50 p-2 rounded text-sm">
                        <strong>ML Impact:</strong> {req.ml_impact}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Risk Assessment */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    Risikobewertung
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {complianceFramework.risk_assessment.map((risk, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{risk.risk}</h4>
                        <div className="flex gap-2">
                          <Badge 
                            variant={risk.likelihood === 'Hoch' ? 'destructive' : 
                                   risk.likelihood === 'Mittel' ? 'default' : 'secondary'}
                            className="text-xs"
                          >
                            {risk.likelihood}
                          </Badge>
                          <Badge 
                            variant={risk.impact === 'Hoch' ? 'destructive' : 'default'}
                            className="text-xs"
                          >
                            {risk.impact}
                          </Badge>
                        </div>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div>
                          <strong className="text-green-600">Maßnahme:</strong> {risk.mitigation}
                        </div>
                        <div>
                          <strong className="text-blue-600">Monitoring:</strong> {risk.monitoring}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* Compliance Checklist */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-green-500" />
                  Compliance Checkliste
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    "Datenverarbeitungsverzeichnis aktualisiert",
                    "Privacy by Design implementiert", 
                    "Datenminimierung dokumentiert",
                    "Löschkonzept definiert",
                    "Einwilligungsmanagement angepasst",
                    "Betroffenenrechte berücksichtigt",
                    "Datenschutz-Folgenabschätzung durchgeführt",
                    "Mitarbeiterschulungen aktualisiert",
                    "Technische Maßnahmen implementiert"
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100"
                      onClick={() => toggleStep(`compliance-${index}`)}
                    >
                      <div 
                        className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                          completedSteps[`compliance-${index}`] 
                            ? 'bg-green-500 border-green-500' 
                            : 'border-gray-300'
                        }`}
                      >
                        {completedSteps[`compliance-${index}`] && (
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        )}
                      </div>
                      <span className={`text-sm ${
                        completedSteps[`compliance-${index}`] 
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

          {/* Monitoring & Metrics */}
          <TabsContent value="monitoring" className="space-y-8">
            <div className="text-center mb-12">
              <h2 id="monitoring-section" className="text-3xl font-bold mb-4 scroll-mt-24">Monitoring & Metriken</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                Kontinuierliche Überwachung der Data Minimization Implementierung mit 
                automatisierten Metriken und Compliance-Dashboards.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Data Volume Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-500" />
                    Datenvolumen
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Training Data</span>
                      <Badge variant="secondary">-85%</Badge>
                    </div>
                    <Progress value={15} className="h-2" />
                    <div className="text-xs text-gray-500">
                      2.3M → 345K Samples
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Feature Count</span>
                      <Badge variant="secondary">-67%</Badge>
                    </div>
                    <Progress value={33} className="h-2" />
                    <div className="text-xs text-gray-500">
                      156 → 52 Features
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Storage Usage</span>
                      <Badge variant="secondary">-78%</Badge>
                    </div>
                    <Progress value={22} className="h-2" />
                    <div className="text-xs text-gray-500">
                      4.7GB → 1.0GB
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Model Performance */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    Model Performance
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Accuracy</span>
                      <Badge variant="default" className="bg-green-500">94.2%</Badge>
                    </div>
                    <Progress value={94} className="h-2" />
                    <div className="text-xs text-gray-500">
                      Target: {'>'} 90%
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Training Time</span>
                      <Badge variant="secondary">-60%</Badge>
                    </div>
                    <Progress value={40} className="h-2" />
                    <div className="text-xs text-gray-500">
                      8.5h → 3.4h
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Inference Speed</span>
                      <Badge variant="default" className="bg-blue-500">+125%</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                    <div className="text-xs text-gray-500">
                      45ms → 20ms
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Privacy Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-purple-500" />
                    Privacy Schutz
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">PII Reduction</span>
                      <Badge variant="default" className="bg-purple-500">92%</Badge>
                    </div>
                    <Progress value={92} className="h-2" />
                    <div className="text-xs text-gray-500">
                      Critical compliance metric
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Synthetic Data %</span>
                      <Badge variant="default" className="bg-green-500">67%</Badge>
                    </div>
                    <Progress value={67} className="h-2" />
                    <div className="text-xs text-gray-500">
                      Zero real PII exposure
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Encryption Coverage</span>
                      <Badge variant="default" className="bg-blue-500">100%</Badge>
                    </div>
                    <Progress value={100} className="h-2" />
                    <div className="text-xs text-gray-500">
                      All stored data encrypted
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Automated Monitoring Setup */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-orange-500" />
                  Automatisiertes Monitoring Setup
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-900 rounded-lg p-4">
                  <pre className="text-green-400 text-sm overflow-x-auto">
                    <code>{`# Data Minimization Monitoring Pipeline
import logging
from datetime import datetime
import pandas as pd
from sklearn.metrics import classification_report

class DataMinimizationMonitor:
    def __init__(self):
        self.baseline_metrics = {}
        self.current_metrics = {}
        
    def track_data_reduction(self, original_data, minimized_data):
        """Track data volume reduction metrics"""
        reduction_ratio = 1 - (len(minimized_data) / len(original_data))
        
        metrics = {
            'timestamp': datetime.now(),
            'original_samples': len(original_data),
            'minimized_samples': len(minimized_data),
            'reduction_ratio': reduction_ratio,
            'storage_saved_gb': self.calculate_storage_savings(original_data, minimized_data)
        }
        
        # Alert if reduction is below threshold
        if reduction_ratio < 0.5:  # Less than 50% reduction
            self.send_alert("Data reduction below minimum threshold", metrics)
            
        return metrics
    
    def monitor_model_performance(self, y_true, y_pred):
        """Monitor if minimization impacts model quality"""
        report = classification_report(y_true, y_pred, output_dict=True)
        accuracy = report['accuracy']
        
        # Compare with baseline
        if hasattr(self, 'baseline_accuracy'):
            performance_drop = self.baseline_accuracy - accuracy
            if performance_drop > 0.05:  # 5% drop threshold
                self.send_alert("Model performance degradation detected", {
                    'accuracy_drop': performance_drop,
                    'current_accuracy': accuracy
                })
        
        return report
    
    def compliance_check(self, data_pipeline):
        """Automated GDPR compliance verification"""
        checks = {
            'pii_present': self.detect_pii(data_pipeline.current_data),
            'retention_policy': self.check_retention_compliance(data_pipeline),
            'encryption_status': self.verify_encryption(data_pipeline),
            'deletion_capability': self.test_deletion_mechanism(data_pipeline)
        }
        
        # Generate compliance report
        compliance_score = sum(checks.values()) / len(checks)
        
        if compliance_score < 1.0:
            self.send_alert("Compliance violation detected", checks)
            
        return checks

# Usage in production
monitor = DataMinimizationMonitor()

# Daily monitoring job
def daily_monitoring_job():
    # Track current data state
    metrics = monitor.track_data_reduction(original_dataset, current_dataset)
    
    # Performance monitoring
    performance = monitor.monitor_model_performance(y_test, y_pred)
    
    # Compliance check
    compliance = monitor.compliance_check(ml_pipeline)
    
    # Log all metrics
    logging.info(f"Data Minimization Metrics: {metrics}")
    logging.info(f"Model Performance: {performance}")
    logging.info(f"Compliance Status: {compliance}")

# Schedule daily execution
import schedule
schedule.every().day.at("06:00").do(daily_monitoring_job)`}</code>
                  </pre>
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
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-16"
        >
          <h3 className="text-2xl font-bold mb-4">
            Bereit für DSGVO-konforme Data Minimization?
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Implementieren Sie systematische Datenreduzierung in Ihren ML-Pipelines und erreichen Sie 
            60-95% weniger Personendaten bei erhaltener Modellqualität.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Download className="w-5 h-5 mr-2" />
              Implementation Guide
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <MessageSquare className="w-5 h-5 mr-2" />
              Beratung anfordern
            </Button>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default DataMinimizationGuide;