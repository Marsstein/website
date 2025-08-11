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
  Layers
} from 'lucide-react';
import './MarsQuantum.css';

const MarsQuantum: React.FC = () => {
  const [quantumProgress, setQuantumProgress] = useState(0);
  const [aiPredictions, setAiPredictions] = useState(0);
  const [blockchainNodes, setBlockchainNodes] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuantumProgress(94.7);
      setAiPredictions(98.3);
      setBlockchainNodes(99.1);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const quantumCapabilities = [
    {
      icon: Brain,
      title: "Mars Cognitive Engine",
      description: "Planetarische KI-Systeme mit Mars-Rechenpower verstehen Compliance-Gesetze mit der Präzision interplanetarer Navigation und adaptieren sich an galaktische Rechtsnormen.",
      progress: 97.3,
      color: "mars"
    },
    {
      icon: Database,
      title: "Quantum Mars Database",
      description: "Quantenverschränkte Datenbanken nutzen Mars-Mineralien für Superposition-Computing. Parallele Realitäten der Rechtsprechung werden simultan analysiert.",
      progress: 94.7,
      color: "quantum"
    },
    {
      icon: Network,
      title: "Interplanetary Blockchain",
      description: "Mars-Erde Blockchain-Netzwerk mit Lichtgeschwindigkeits-Synchronisation. Unveränderliche Compliance-Records zwischen den Planeten.",
      progress: 99.1,
      color: "network"
    },
    {
      icon: Rocket,
      title: "Predictive Mars Analytics",
      description: "Künstliche Intelligenz prognostiziert Rechtsänderungen mit Mars-Orbital-Algorithmen. Präventive Compliance für die nächste Zivilisation.",
      progress: 98.3,
      color: "mars"
    }
  ];

  const marsTechStack = [
    { name: "Mars Quantum Core", status: "mars-active", nodes: 147 },
    { name: "Neural Mars Networks", status: "processing", nodes: 328 },
    { name: "Interplanetary Chain", status: "verified", nodes: 2847 },
    { name: "Mars Edge Computing", status: "distributed", nodes: 456 },
    { name: "Quantum Mars Learning", status: "training", nodes: 189 },
    { name: "Mars Cryptography", status: "encrypted", nodes: 634 }
  ];

  const marsMetrics = [
    { label: "Mars Quantum", value: quantumProgress, unit: "%" },
    { label: "AI Predictions", value: aiPredictions, unit: "%" },
    { label: "Mars Network", value: blockchainNodes, unit: "%" },
    { label: "Neural Speed", value: 247, unit: "ms" }
  ];

  return (
    <div className="mars-quantum">
      {/* Mars Quantum Header */}
      <header className="mars-header">
        <div className="mars-container">
          <nav className="mars-nav">
            <div className="mars-logo">
              <div className="mars-core">
                <div className="mars-particles">
                  <div className="mars-particle"></div>
                  <div className="mars-particle"></div>
                  <div className="mars-particle"></div>
                </div>
              </div>
              <span className="mars-brand">
                Mar<span className="mars-paragraph">§</span>tein
              </span>
              <div className="mars-tagline">Quantum Mars Tech</div>
            </div>
            
            <ul className="mars-nav-menu">
              <li><a href="#quantum">Mars Quantum</a></li>
              <li><a href="#blockchain">Mars Chain</a></li>
              <li><a href="#neural">Neural Mars</a></li>
              <li><a href="#interplanetary">Mars Compliance</a></li>
            </ul>
            
            <div className="mars-status">
              <div className="status-grid">
                <div className="status-dot mars-active"></div>
                <div className="status-dot processing"></div>
                <div className="status-dot standby"></div>
              </div>
              <div className="mars-label">Mars Network Online</div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mars-hero">
        <div className="mars-container">
          <div className="mars-badge">
            <Zap className="w-4 h-4" />
            Mars-Powered Quantum Intelligence
          </div>
          
          <h1 className="mars-title">
            Compliance aus einer anderen Welt
            <span className="mars-highlight">Powered by Mars</span>
          </h1>
          
          <p className="mars-subtitle">
            Interplanetarische Rechtsintelligenz mit Mars-Quantentechnologie. 
            Wo rote Planeten-Power auf blaue Erde-Compliance trifft – die Zukunft der galaktischen Rechtskonformität.
          </p>

          <div className="mars-hero-actions">
            <Button className="mars-primary-btn">
              <Brain className="w-4 h-4 mr-2" />
              Mars Interface aktivieren
            </Button>
            <Button variant="outline" className="mars-secondary-btn">
              Quantum Mars Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mars Metrics */}
          <div className="mars-metrics">
            {marsMetrics.map((metric, index) => (
              <div key={index} className="mars-metric-display">
                <div className="mars-metric-value">{metric.value}{metric.unit}</div>
                <div className="mars-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mars Capabilities */}
      <section className="mars-capabilities">
        <div className="mars-container">
          <div className="capabilities-header">
            <Badge className="mars-badge">Mars Quantum Technology</Badge>
            <h2>Interplanetare Compliance-Architektur</h2>
            <p>Wo Mars-Technologie auf Erd-Rechtsprechung trifft</p>
          </div>
          
          <div className="capabilities-grid">
            {quantumCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className={`mars-capability-card ${capability.color}`}>
                  <div className="capability-header">
                    <div className="capability-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="capability-progress">
                      <div className="mars-progress-ring">
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
                            className="mars-circle"
                            strokeDasharray={`${capability.progress}, 100`}
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="3"
                          />
                        </svg>
                        <div className="mars-progress-text">{capability.progress}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-description">{capability.description}</p>
                  
                  <div className="capability-footer">
                    <Progress 
                      value={capability.progress} 
                      className="mars-capability-bar"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mars Neural Network */}
      <section className="mars-network">
        <div className="mars-container">
          <Card className="mars-network-visualization">
            <div className="network-header">
              <div className="mars-network-icon">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <h3>Mars Legal Intelligence Network</h3>
                <p>Echtzeit-Visualisierung des interplanetaren Compliance-Netzwerks</p>
              </div>
            </div>
            
            <div className="mars-tech-stack">
              {marsTechStack.map((tech, index) => (
                <div key={index} className="mars-tech-node">
                  <div className={`mars-node-status ${tech.status}`}></div>
                  <span className="mars-tech-name">{tech.name}</span>
                  <div className="mars-node-count">{tech.nodes} Nodes</div>
                </div>
              ))}
            </div>
            
            <div className="mars-network-actions">
              <Button variant="outline" className="mars-network-btn">
                <Search className="w-4 h-4 mr-2" />
                Mars Scan
              </Button>
              <Button variant="outline" className="mars-network-btn">
                <Bot className="w-4 h-4 mr-2" />
                Mars AI Assistant
              </Button>
              <Button variant="outline" className="mars-network-btn">
                <Layers className="w-4 h-4 mr-2" />
                Quantum Analysis
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Mars CTA */}
      <section className="mars-cta">
        <div className="mars-container">
          <Card className="mars-cta-hologram">
            <div className="mars-hologram-effect">
              <div className="mars-hologram-lines"></div>
              <div className="cta-content">
                <h2>Bereit für die Mars Legal-Tech Revolution?</h2>
                <p>
                  Entdecken Sie Compliance jenseits der Erdatmosphäre. Wo Mars-Quantentechnologie, 
                  interplanetare Netzwerke und galaktische KI zur ultimativen Rechtsintelligenz verschmelzen.
                </p>
                
                <div className="cta-actions">
                  <Button className="mars-primary-btn">
                    <Rocket className="w-4 h-4 mr-2" />
                    Mars Interface starten
                  </Button>
                  <Button variant="outline" className="mars-secondary-btn">
                    Interplanetary Consultation
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mars-footer">
        <div className="mars-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="mars-logo">
                <div className="mars-core">
                  <div className="mars-particles">
                    <div className="mars-particle"></div>
                    <div className="mars-particle"></div>
                    <div className="mars-particle"></div>
                  </div>
                </div>
                <span className="mars-brand">
                  Mar<span className="mars-paragraph">§</span>tein
                </span>
              </div>
              <p className="footer-tagline">
                Interplanetary Legal Intelligence
              </p>
            </div>
            
            <div className="footer-tech">
              <div className="mars-tech-indicators">
                <div className="indicator">
                  <div className="indicator-value">∞</div>
                  <div className="indicator-label">Mars Quantum States</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">10¹⁵</div>
                  <div className="indicator-label">Neural Connections</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">3847</div>
                  <div className="indicator-label">Mars Nodes</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Marsstein. Powered by Mars Quantum Intelligence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarsQuantum;