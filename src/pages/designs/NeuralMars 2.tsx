import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Zap, 
  Brain, 
  CheckCircle2, 
  ArrowRight, 
  Cpu,
  Database,
  Network,
  Globe,
  Lock,
  Rocket,
  Search,
  Bot,
  Layers,
  Eye,
  Target
} from 'lucide-react';
import './NeuralMars.css';

const NeuralMars: React.FC = () => {
  const [neuralActivity, setNeuralActivity] = useState(0);
  const [marsConnections, setMarsConnections] = useState(0);
  const [quantumStates, setQuantumStates] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNeuralActivity(96.8);
      setMarsConnections(99.2);
      setQuantumStates(94.1);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const neuralCapabilities = [
    {
      icon: Brain,
      title: "Mars Neural Engine",
      description: "Planetarische Neuronetzwerke mit Mars-DNA lernen kontinuierlich aus jeder Compliance-Entscheidung. Synapsen aus Mars-Mineralen für überlegene Rechenkapazität.",
      progress: 96.8,
      color: "mars-neural"
    },
    {
      icon: Eye,
      title: "Cognitive Mars Vision",
      description: "Mars-KI mit omnidirektionaler Rechtserkennung durchdringt alle Compliance-Ebenen. Simultane Analyse aller DACH-Rechtsnormen mit Mars-Präzision.",
      progress: 99.2,
      color: "mars-vision"
    },
    {
      icon: Target,
      title: "Mars Prediction Core",
      description: "Vorausschauende Mars-Intelligenz prognostiziert Rechtsänderungen mit planetarischer Genauigkeit. Neural-Mars-Algorithmen für präventive Compliance.",
      progress: 94.1,
      color: "mars-prediction"
    },
    {
      icon: Network,
      title: "Mars Synaptic Web",
      description: "Interplanetare Synapsen verbinden alle Compliance-Knoten. Mars-Neural-Netzwerk mit Lichtgeschwindigkeits-Kommunikation zwischen den Rechtssphären.",
      progress: 97.5,
      color: "mars-network"
    }
  ];

  const marsTechStack = [
    { name: "Mars Neural Core", status: "mars-neural-active", nodes: 847 },
    { name: "Synaptic Mars Grid", status: "neural-processing", nodes: 1328 },
    { name: "Mars Cognition Engine", status: "mars-thinking", nodes: 3847 },
    { name: "Neural Mars Cluster", status: "distributed", nodes: 956 },
    { name: "Mars Deep Learning", status: "training", nodes: 489 },
    { name: "Quantum Mars Brain", status: "quantum-active", nodes: 734 }
  ];

  const marsNeuralMetrics = [
    { label: "Neural Activity", value: neuralActivity, unit: "%" },
    { label: "Mars Synapses", value: marsConnections, unit: "%" },
    { label: "Quantum States", value: quantumStates, unit: "%" },
    { label: "Cognition Speed", value: 147, unit: "ms" }
  ];

  return (
    <div className="neural-mars">
      {/* Neural Mars Header */}
      <header className="neural-header">
        <div className="neural-container">
          <nav className="neural-nav">
            <div className="neural-logo">
              <div className="neural-core">
                <div className="neural-synapses">
                  <div className="synapse active"></div>
                  <div className="synapse processing"></div>
                  <div className="synapse learning"></div>
                  <div className="synapse thinking"></div>
                </div>
              </div>
              <span className="neural-brand">
                Mar<span className="neural-paragraph">§</span>tein
              </span>
              <div className="neural-tagline">Neural Mars AI</div>
            </div>
            
            <ul className="neural-nav-menu">
              <li><a href="#neural">Neural Mars</a></li>
              <li><a href="#cognition">Mars Cognition</a></li>
              <li><a href="#synaptic">Synaptic Web</a></li>
              <li><a href="#prediction">Mars Prediction</a></li>
            </ul>
            
            <div className="neural-status">
              <div className="neural-activity-display">
                <div className="activity-waves">
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                  <div className="wave"></div>
                </div>
                <div className="neural-label">Neural Activity</div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="neural-hero">
        <div className="neural-container">
          <div className="neural-badge">
            <Brain className="w-4 h-4" />
            Mars-Powered Neural Intelligence
          </div>
          
          <h1 className="neural-title">
            Compliance denkt wie ein Planet
            <span className="neural-highlight">Neural Mars AI</span>
          </h1>
          
          <p className="neural-subtitle">
            Künstliche Mars-Intelligenz mit planetarischen Neuronetzwerken. 
            Wo rote Planet-Neuronen auf blaue Erde-Compliance treffen – die Evolution der kognitiven Rechtsintelligenz.
          </p>

          <div className="neural-hero-actions">
            <Button className="neural-primary-btn">
              <Brain className="w-4 h-4 mr-2" />
              Neural Mars aktivieren
            </Button>
            <Button variant="outline" className="neural-secondary-btn">
              Cognition Demo starten
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Neural Metrics */}
          <div className="neural-metrics">
            {marsNeuralMetrics.map((metric, index) => (
              <div key={index} className="neural-metric-display">
                <div className="neural-metric-value">{metric.value}{metric.unit}</div>
                <div className="neural-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neural Capabilities */}
      <section className="neural-capabilities">
        <div className="neural-container">
          <div className="capabilities-header">
            <Badge className="neural-badge">Neural Mars Technology</Badge>
            <h2>Kognitive Mars-Architektur</h2>
            <p>Wo planetarische Neuronen auf terrestrische Rechtsprechung treffen</p>
          </div>
          
          <div className="capabilities-grid">
            {neuralCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className={`neural-capability-card ${capability.color}`}>
                  <div className="capability-header">
                    <div className="capability-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="capability-progress">
                      <div className="neural-progress-ring">
                        <svg className="progress-circle" viewBox="0 0 36 36">
                          <path
                            className="circle-bg"
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="3"
                          />
                          <path
                            className="neural-circle"
                            strokeDasharray={`${capability.progress}, 100`}
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="3"
                          />
                        </svg>
                        <div className="neural-progress-text">{capability.progress}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-description">{capability.description}</p>
                  
                  <div className="capability-footer">
                    <Progress 
                      value={capability.progress} 
                      className="neural-capability-bar"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neural Network Visualization */}
      <section className="neural-network">
        <div className="neural-container">
          <Card className="neural-network-visualization">
            <div className="network-header">
              <div className="neural-network-icon">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <h3>Mars Neural Cognition Network</h3>
                <p>Live-Visualisierung des planetarischen Bewusstseins-Netzwerks</p>
              </div>
            </div>
            
            <div className="neural-tech-stack">
              {marsTechStack.map((tech, index) => (
                <div key={index} className="neural-tech-node">
                  <div className={`neural-node-status ${tech.status}`}></div>
                  <span className="neural-tech-name">{tech.name}</span>
                  <div className="neural-node-count">{tech.nodes} Neurons</div>
                </div>
              ))}
            </div>
            
            <div className="neural-network-actions">
              <Button variant="outline" className="neural-network-btn">
                <Search className="w-4 h-4 mr-2" />
                Neural Scan
              </Button>
              <Button variant="outline" className="neural-network-btn">
                <Bot className="w-4 h-4 mr-2" />
                Mars Cognition
              </Button>
              <Button variant="outline" className="neural-network-btn">
                <Layers className="w-4 h-4 mr-2" />
                Deep Neural Analysis
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Neural CTA */}
      <section className="neural-cta">
        <div className="neural-container">
          <Card className="neural-cta-hologram">
            <div className="neural-hologram-effect">
              <div className="neural-hologram-waves"></div>
              <div className="cta-content">
                <h2>Bereit für planetarische Intelligenz?</h2>
                <p>
                  Erleben Sie Compliance mit dem Bewusstsein eines Planeten. Wo Mars-Neuronen, 
                  kognitive Synapsen und planetarische KI zur ultimativen Rechtsintelligenz verschmelzen.
                </p>
                
                <div className="cta-actions">
                  <Button className="neural-primary-btn">
                    <Rocket className="w-4 h-4 mr-2" />
                    Neural Mars Interface
                  </Button>
                  <Button variant="outline" className="neural-secondary-btn">
                    Cognition Consultation
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="neural-footer">
        <div className="neural-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="neural-logo">
                <div className="neural-core">
                  <div className="neural-synapses">
                    <div className="synapse active"></div>
                    <div className="synapse processing"></div>
                    <div className="synapse learning"></div>
                    <div className="synapse thinking"></div>
                  </div>
                </div>
                <span className="neural-brand">
                  Mar<span className="neural-paragraph">§</span>tein
                </span>
              </div>
              <p className="footer-tagline">
                Planetary Neural Intelligence
              </p>
            </div>
            
            <div className="footer-tech">
              <div className="neural-tech-indicators">
                <div className="indicator">
                  <div className="indicator-value">∞</div>
                  <div className="indicator-label">Neural Connections</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">10¹⁸</div>
                  <div className="indicator-label">Mars Synapses</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">4847</div>
                  <div className="indicator-label">Cognitive Nodes</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Marsstein. Powered by Mars Neural Intelligence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NeuralMars;