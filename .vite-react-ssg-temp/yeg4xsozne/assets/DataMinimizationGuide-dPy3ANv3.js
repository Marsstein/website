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
import { Minimize2, Shield, Brain, Database, List, Workflow, GitBranch, CheckCircle2, Scale, Code, Filter, Server, Clock, Download, AlertCircle, FileCheck, TrendingUp, Activity, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";
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
const DataMinimizationGuide = () => {
  useEffect(() => {
    document.title = "Datenminimierung KI-Modelle – DSGVO-konforme ML-Entwicklung";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Datenminimierung für KI-Systeme: Feature Selection, Smart Sampling & Pipeline-Optimierung. DSGVO-konform entwickeln. Jetzt umsetzen!");
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = "Datenminimierung für KI-Systeme: Feature Selection, Smart Sampling & Pipeline-Optimierung. DSGVO-konform entwickeln. Jetzt umsetzen!";
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
      link.href = "https://dataguard.de/wissen/ki-datenschutz/data-minimization";
      document.head.appendChild(link);
    }
    const ogTags = [
      { property: "og:title", content: "Datenminimierung KI-Modelle – DSGVO-konforme ML-Entwicklung" },
      { property: "og:description", content: "Datenminimierung für KI-Systeme: Feature Selection, Smart Sampling & Pipeline-Optimierung. DSGVO-konform entwickeln. Jetzt umsetzen!" },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://dataguard.de/wissen/ki-datenschutz/data-minimization" }
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
      "headline": "Datenminimierung KI-Modelle – DSGVO-konforme ML-Entwicklung",
      "description": "Datenminimierung für KI-Systeme: Feature Selection, Smart Sampling & Pipeline-Optimierung. DSGVO-konform entwickeln. Jetzt umsetzen!",
      "author": {
        "@type": "Organization",
        "name": "DataGuard"
      },
      "datePublished": "2024-01-15",
      "dateModified": (/* @__PURE__ */ new Date()).toISOString(),
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
  const [activeStage, setActiveStage] = useState(0);
  const [completedSteps, setCompletedSteps] = useState({});
  const [expandedSections, setExpandedSections] = useState({});
  const [selectedTechnique, setSelectedTechnique] = useState("feature-selection");
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
    "feature-selection": {
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
    "data-sampling": {
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
    "model-compression": {
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
    "synthetic-data": {
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
    setCompletedSteps((prev) => ({
      ...prev,
      [stepId]: !prev[stepId]
    }));
  };
  const calculateProgress = (stageIndex) => {
    const stage = implementationStages[stageIndex];
    const completedCount = stage.steps.filter(
      (step) => completedSteps[`${stageIndex}-${step}`]
    ).length;
    return completedCount / stage.steps.length * 100;
  };
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gray-50", itemScope: true, itemType: "https://schema.org/Article", children: [
    /* @__PURE__ */ jsx("meta", { itemProp: "name", content: "Datenminimierung KI-Modelle – DSGVO-konforme ML-Entwicklung" }),
    /* @__PURE__ */ jsx("meta", { itemProp: "description", content: "Datenminimierung für KI-Systeme: Feature Selection, Smart Sampling & Pipeline-Optimierung. DSGVO-konform entwickeln. Jetzt umsetzen!" }),
    /* @__PURE__ */ jsx("meta", { itemProp: "author", content: "DataGuard Experts" }),
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx("section", { className: "relative", children: /* @__PURE__ */ jsxs(
      motion.div,
      {
        ref: containerRef,
        className: "relative bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white overflow-hidden",
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
                  /* @__PURE__ */ jsx(Minimize2, { className: "w-5 h-5" }),
                  /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Data Minimization Guide" })
                ] }),
                /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent", children: "Data Minimization in ML Pipelines" }),
                /* @__PURE__ */ jsx("p", { className: "text-lg sm:text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed px-4", children: "DSGVO-konforme Reduzierung von Personendaten in Machine Learning Workflows durch intelligente Optimierungstechniken" }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
                  /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-white/20 text-white border-white/30", children: [
                    /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 mr-1" }),
                    "DSGVO Art. 5 (1) (c)"
                  ] }),
                  /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-white/20 text-white border-white/30", children: [
                    /* @__PURE__ */ jsx(Brain, { className: "w-4 h-4 mr-1" }),
                    "Privacy by Design"
                  ] }),
                  /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-white/20 text-white border-white/30", children: [
                    /* @__PURE__ */ jsx(Database, { className: "w-4 h-4 mr-1" }),
                    "60-95% Reduktion"
                  ] })
                ] })
              ]
            }
          ) })
        ]
      }
    ) }),
    /* @__PURE__ */ jsxs("main", { className: "container mx-auto px-4 sm:px-6 py-8 sm:py-16", children: [
      /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb", className: "mb-8", children: /* @__PURE__ */ jsxs("ol", { className: "flex items-center space-x-2 text-sm text-gray-600", children: [
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/", className: "hover:text-blue-600", children: "Home" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen", className: "hover:text-blue-600", children: "Wissen" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz", className: "hover:text-blue-600", children: "KI-Datenschutz" }) }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("span", { className: "mx-2", children: "/" }) }),
        /* @__PURE__ */ jsx("li", { className: "text-gray-900 font-medium", children: "Datenminimierung" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "lg:hidden mb-8", children: /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(List, { className: "w-5 h-5" }),
          "Inhaltsverzeichnis"
        ] }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("nav", { "aria-label": "Inhaltsverzeichnis", children: /* @__PURE__ */ jsxs("ul", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#principles-section", className: "text-blue-600 hover:underline", children: "Prinzipien" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#techniques-section", className: "text-blue-600 hover:underline", children: "Techniken" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#implementation-section", className: "text-blue-600 hover:underline", children: "Umsetzung" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#compliance-section", className: "text-blue-600 hover:underline", children: "Compliance" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#monitoring-section", className: "text-blue-600 hover:underline", children: "Monitoring" }) })
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsxs(Tabs, { defaultValue: "principles", className: "space-y-8", children: [
        /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2 lg:grid-cols-5", children: [
          /* @__PURE__ */ jsx(TabsTrigger, { value: "principles", children: "Prinzipien" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "techniques", children: "Techniken" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "implementation", children: "Umsetzung" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "compliance", children: "Compliance" }),
          /* @__PURE__ */ jsx(TabsTrigger, { value: "monitoring", children: "Monitoring" })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "principles", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "principles-section", className: "text-2xl sm:text-3xl font-bold mb-4 scroll-mt-24", children: "Data Minimization Prinzipien" }),
            /* @__PURE__ */ jsxs("p", { className: "text-gray-600 max-w-3xl mx-auto", children: [
              "Vier Kernprinzipien zur systematischen Reduzierung von Personendaten in ML-Pipelines unter Erhaltung der Modellqualität und Compliance mit ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/dsgvo-grundlagen", className: "text-blue-600 hover:underline", children: "DSGVO" }),
              "-Anforderungen. Ergänzend empfehlen wir unsere Guides zu ",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/privacy-preserving-ai", className: "text-blue-600 hover:underline", children: "Privacy-Preserving AI" }),
              " und",
              /* @__PURE__ */ jsx(Link, { to: "/wissen/ki-datenschutz/model-privacy-attacks", className: "text-blue-600 hover:underline", children: " Model Privacy Attacks" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: minimizationPrinciples.map((principle, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-lg transition-shadow", children: [
                /* @__PURE__ */ jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                  /* @__PURE__ */ jsx("div", { className: `p-2 sm:p-3 rounded-lg ${principle.color}`, children: /* @__PURE__ */ jsx(principle.icon, { className: "w-5 h-5 sm:w-6 sm:h-6 text-white" }) }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx(CardTitle, { className: "text-xl", children: principle.title }),
                    /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: principle.description })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Techniken:" }),
                    /* @__PURE__ */ jsx("ul", { className: "space-y-1", children: principle.techniques.map((technique, idx) => /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2 text-sm", children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "w-4 h-4 text-green-500" }),
                      technique
                    ] }, idx)) })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "pt-2 border-t", children: /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-blue-600 border-blue-200", children: [
                    /* @__PURE__ */ jsx(Scale, { className: "w-3 h-3 mr-1" }),
                    principle.compliance
                  ] }) })
                ] })
              ] })
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "techniques", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "techniques-section", className: "text-2xl sm:text-3xl font-bold mb-4 scroll-mt-24", children: "Implementierungstechniken" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Praktische Techniken zur Datenminimierung mit Code-Beispielen und quantifizierten Privacy-Benefits für verschiedene ML-Pipeline-Phasen." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 mb-6", children: Object.entries(techniques).map(([key, technique]) => /* @__PURE__ */ jsx(
            Button,
            {
              variant: selectedTechnique === key ? "default" : "outline",
              onClick: () => setSelectedTechnique(key),
              className: "mb-2",
              children: technique.name
            },
            key
          )) }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsxs(CardHeader, { children: [
              /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Code, { className: "w-5 h-5" }),
                techniques[selectedTechnique].name
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: techniques[selectedTechnique].description })
            ] }),
            /* @__PURE__ */ jsx(CardContent, { className: "space-y-6", children: techniques[selectedTechnique].methods.map((method, index) => /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-blue-500 pl-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                /* @__PURE__ */ jsx("h4", { className: "font-semibold text-lg", children: method.name }),
                /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "bg-green-100 text-green-800", children: [
                  /* @__PURE__ */ jsx(Shield, { className: "w-3 h-3 mr-1" }),
                  method.privacy_benefit
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4 mb-3", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-sm overflow-x-auto", children: /* @__PURE__ */ jsx("code", { children: method.code }) }) })
            ] }, index)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "implementation", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "implementation-section", className: "text-2xl sm:text-3xl font-bold mb-4 scroll-mt-24", children: "Implementation Roadmap" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Schritt-für-Schritt Anleitung zur Implementierung von Data Minimization in bestehende ML-Pipelines mit Zeitplänen und Erfolgsmetriken." })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "space-y-8", children: implementationStages.map((stage, index) => /* @__PURE__ */ jsx(
            motion.div,
            {
              initial: { opacity: 0, x: -20 },
              animate: { opacity: 1, x: 0 },
              transition: { delay: index * 0.1 },
              children: /* @__PURE__ */ jsxs(Card, { className: `${activeStage === index ? "ring-2 ring-blue-500" : ""}`, children: [
                /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4", children: [
                    /* @__PURE__ */ jsx("div", { className: `p-3 rounded-lg ${activeStage === index ? "bg-blue-500" : "bg-gray-200"}`, children: /* @__PURE__ */ jsx(stage.icon, { className: `w-6 h-6 ${activeStage === index ? "text-white" : "text-gray-600"}` }) }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsxs(CardTitle, { className: "text-xl", children: [
                        "Phase ",
                        index + 1,
                        ": ",
                        stage.title
                      ] }),
                      /* @__PURE__ */ jsx("p", { className: "text-gray-600", children: stage.description })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxs(Badge, { variant: "outline", children: [
                      /* @__PURE__ */ jsx(Clock, { className: "w-3 h-3 mr-1" }),
                      stage.duration
                    ] }),
                    /* @__PURE__ */ jsx("div", { className: "mt-2", children: /* @__PURE__ */ jsx(Progress, { value: calculateProgress(index), className: "w-24" }) })
                  ] })
                ] }) }),
                /* @__PURE__ */ jsxs(CardContent, { children: [
                  /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: stage.steps.map((step, stepIndex) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100",
                      onClick: () => toggleStep(`${index}-${step}`),
                      children: [
                        /* @__PURE__ */ jsx(
                          "div",
                          {
                            className: `w-5 h-5 rounded border-2 flex items-center justify-center ${completedSteps[`${index}-${step}`] ? "bg-green-500 border-green-500" : "border-gray-300"}`,
                            children: completedSteps[`${index}-${step}`] && /* @__PURE__ */ jsx(CheckCircle2, { className: "w-3 h-3 text-white" })
                          }
                        ),
                        /* @__PURE__ */ jsx("span", { className: `text-sm ${completedSteps[`${index}-${step}`] ? "line-through text-gray-500" : ""}`, children: step })
                      ]
                    },
                    stepIndex
                  )) }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-2", children: [
                    /* @__PURE__ */ jsx(
                      Button,
                      {
                        size: "sm",
                        onClick: () => setActiveStage(index),
                        variant: activeStage === index ? "default" : "outline",
                        children: "Phase aktivieren"
                      }
                    ),
                    /* @__PURE__ */ jsxs(Button, { size: "sm", variant: "outline", children: [
                      /* @__PURE__ */ jsx(Download, { className: "w-4 h-4 mr-2" }),
                      "Checkliste"
                    ] })
                  ] })
                ] })
              ] })
            },
            index
          )) })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "compliance", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "compliance-section", className: "text-2xl sm:text-3xl font-bold mb-4 scroll-mt-24", children: "DSGVO Compliance Framework" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Rechtliche Anforderungen, Risikobewertung und konkrete Umsetzungsmaßnahmen für DSGVO-konforme Data Minimization in ML-Systemen." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Scale, { className: "w-5 h-5 text-blue-500" }),
                "Rechtliche Anforderungen"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: complianceFramework.legal_requirements.map((req, index) => /* @__PURE__ */ jsxs("div", { className: "border-l-4 border-blue-500 pl-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: req.law }),
                  /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: req.requirement })
                ] }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-gray-600 mb-2", children: req.implementation }),
                /* @__PURE__ */ jsxs("div", { className: "bg-blue-50 p-2 rounded text-sm", children: [
                  /* @__PURE__ */ jsx("strong", { children: "ML Impact:" }),
                  " ",
                  req.ml_impact
                ] })
              ] }, index)) })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(AlertCircle, { className: "w-5 h-5 text-orange-500" }),
                "Risikobewertung"
              ] }) }),
              /* @__PURE__ */ jsx(CardContent, { className: "space-y-4", children: complianceFramework.risk_assessment.map((risk, index) => /* @__PURE__ */ jsxs("div", { className: "border rounded-lg p-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold", children: risk.risk }),
                  /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
                    /* @__PURE__ */ jsx(
                      Badge,
                      {
                        variant: risk.likelihood === "Hoch" ? "destructive" : risk.likelihood === "Mittel" ? "default" : "secondary",
                        className: "text-xs",
                        children: risk.likelihood
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      Badge,
                      {
                        variant: risk.impact === "Hoch" ? "destructive" : "default",
                        className: "text-xs",
                        children: risk.impact
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-sm", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("strong", { className: "text-green-600", children: "Maßnahme:" }),
                    " ",
                    risk.mitigation
                  ] }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("strong", { className: "text-blue-600", children: "Monitoring:" }),
                    " ",
                    risk.monitoring
                  ] })
                ] })
              ] }, index)) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FileCheck, { className: "w-5 h-5 text-green-500" }),
              "Compliance Checkliste"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: [
              "Datenverarbeitungsverzeichnis aktualisiert",
              "Privacy by Design implementiert",
              "Datenminimierung dokumentiert",
              "Löschkonzept definiert",
              "Einwilligungsmanagement angepasst",
              "Betroffenenrechte berücksichtigt",
              "Datenschutz-Folgenabschätzung durchgeführt",
              "Mitarbeiterschulungen aktualisiert",
              "Technische Maßnahmen implementiert"
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
          ] })
        ] }),
        /* @__PURE__ */ jsxs(TabsContent, { value: "monitoring", className: "space-y-8", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsx("h2", { id: "monitoring-section", className: "text-3xl font-bold mb-4 scroll-mt-24", children: "Monitoring & Metriken" }),
            /* @__PURE__ */ jsx("p", { className: "text-gray-600 max-w-3xl mx-auto", children: "Kontinuierliche Überwachung der Data Minimization Implementierung mit automatisierten Metriken und Compliance-Dashboards." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-8", children: [
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Database, { className: "w-5 h-5 text-blue-500" }),
                "Datenvolumen"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Training Data" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "-85%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 15, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "2.3M → 345K Samples" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Feature Count" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "-67%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 33, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "156 → 52 Features" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Storage Usage" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "-78%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 22, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "4.7GB → 1.0GB" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(TrendingUp, { className: "w-5 h-5 text-green-500" }),
                "Model Performance"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Accuracy" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "94.2%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 94, className: "h-2" }),
                  /* @__PURE__ */ jsxs("div", { className: "text-xs text-gray-500", children: [
                    "Target: ",
                    ">",
                    " 90%"
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Training Time" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "-60%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 40, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "8.5h → 3.4h" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Inference Speed" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-blue-500", children: "+125%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 100, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "45ms → 20ms" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs(Card, { children: [
              /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Shield, { className: "w-5 h-5 text-purple-500" }),
                "Privacy Schutz"
              ] }) }),
              /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "PII Reduction" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-purple-500", children: "92%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 92, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Critical compliance metric" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Synthetic Data %" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-green-500", children: "67%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 67, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "Zero real PII exposure" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-center", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-sm", children: "Encryption Coverage" }),
                    /* @__PURE__ */ jsx(Badge, { variant: "default", className: "bg-blue-500", children: "100%" })
                  ] }),
                  /* @__PURE__ */ jsx(Progress, { value: 100, className: "h-2" }),
                  /* @__PURE__ */ jsx("div", { className: "text-xs text-gray-500", children: "All stored data encrypted" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Activity, { className: "w-5 h-5 text-orange-500" }),
              "Automatisiertes Monitoring Setup"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("div", { className: "bg-gray-900 rounded-lg p-4", children: /* @__PURE__ */ jsx("pre", { className: "text-green-400 text-sm overflow-x-auto", children: /* @__PURE__ */ jsx("code", { children: `# Data Minimization Monitoring Pipeline
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
schedule.every().day.at("06:00").do(daily_monitoring_job)` }) }) }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { delay: 0.5 },
          className: "bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mt-16",
          children: [
            /* @__PURE__ */ jsx("h3", { className: "text-2xl font-bold mb-4", children: "Bereit für DSGVO-konforme Data Minimization?" }),
            /* @__PURE__ */ jsx("p", { className: "text-blue-100 mb-6 max-w-2xl mx-auto", children: "Implementieren Sie systematische Datenreduzierung in Ihren ML-Pipelines und erreichen Sie 60-95% weniger Personendaten bei erhaltener Modellqualität." }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-4 justify-center", children: [
              /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "secondary", children: [
                /* @__PURE__ */ jsx(Download, { className: "w-5 h-5 mr-2" }),
                "Implementation Guide"
              ] }),
              /* @__PURE__ */ jsxs(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white hover:text-blue-600", children: [
                /* @__PURE__ */ jsx(MessageSquare, { className: "w-5 h-5 mr-2" }),
                "Beratung anfordern"
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
  DataMinimizationGuide as default
};
