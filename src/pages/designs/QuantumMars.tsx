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
  Atom,
  Infinity
} from 'lucide-react';
import './QuantumMars.css';

const QuantumMars: React.FC = () => {
  const [quantumEntanglement, setQuantumEntanglement] = useState(0);
  const [marsQuantumStates, setMarsQuantumStates] = useState(0);
  const [superposition, setSuperposition] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setQuantumEntanglement(99.7);
      setMarsQuantumStates(97.4);
      setSuperposition(95.8);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const quantumCapabilities = [
    {
      icon: Atom,
      title: "Mars Quantum Entanglement",
      description: "Verschränkte Mars-Teilchen ermöglichen sofortige Compliance-Kommunikation zwischen Planeten. Quantensuperposition aller möglichen Rechtszustände gleichzeitig.",
      progress: 99.7,
      color: "quantum-mars"
    },
    {
      icon: Infinity,
      title: "Infinite Mars Computation",
      description: "Unendliche Mars-Rechenpower durch Quantenparallelismus. Alle möglichen Compliance-Szenarien werden simultan in Mars-Quantenrealitäten berechnet.",
      progress: 97.4,
      color: "quantum-infinite"
    },
    {
      icon: Database,
      title: "Mars Quantum Memory",
      description: "Quantenspeicher aus Mars-Kristallen speichert alle Rechtszustände in Superposition. Schrödingers Compliance - gleichzeitig konform und nicht-konform.",
      progress: 95.8,
      color: "quantum-memory"
    },
    {
      icon: Network,
      title: "Quantum Mars Grid",
      description: "Interplanetares Quantennetzwerk verbindet alle Rechtssysteme des Universums. Mars-Quantentunneling für sofortigen Compliance-Transfer.",
      progress: 98.6,
      color: "quantum-grid"
    }
  ];

  const quantumTechStack = [
    { name: "Mars Quantum Core", status: "quantum-entangled", nodes: 1447 },
    { name: "Superposition Engine", status: "quantum-active", nodes: 2328 },
    { name: "Mars Qubit Array", status: "entangled", nodes: 4847 },
    { name: "Quantum Mars Tunnel", status: "tunneling", nodes: 1956 },
    { name: "Mars Wave Function", status: "collapsed", nodes: 889 },
    { name: "Quantum Mars Field", status: "superposed", nodes: 1234 }
  ];

  const quantumMetrics = [
    { label: "Quantum Entanglement", value: quantumEntanglement, unit: "%" },
    { label: "Mars Qubits", value: marsQuantumStates, unit: "%" },
    { label: "Superposition", value: superposition, unit: "%" },
    { label: "Tunnel Speed", value: 0.47, unit: "c" }
  ];

  return (
    <div className="quantum-mars">
      {/* Quantum Mars Header */}
      <header className="quantum-header">
        <div className="quantum-container">
          <nav className="quantum-nav">
            <div className="quantum-logo">
              <div className="quantum-field">
                <div className="quantum-particles">
                  <div className="quantum-particle entangled"></div>
                  <div className="quantum-particle superposed"></div>
                  <div className="quantum-particle tunneling"></div>
                  <div className="quantum-particle collapsed"></div>
                </div>
                <div className="mars-core-quantum"></div>
              </div>
              <span className="quantum-brand">
                Mar<span className="quantum-paragraph">§</span>tein
              </span>
              <div className="quantum-tagline">Quantum Mars Reality</div>
            </div>
            
            <ul className="quantum-nav-menu">
              <li><a href="#quantum">Quantum Mars</a></li>
              <li><a href="#entanglement">Entanglement</a></li>
              <li><a href="#superposition">Superposition</a></li>
              <li><a href="#tunneling">Mars Tunnel</a></li>
            </ul>
            
            <div className="quantum-status">
              <div className="quantum-state-display">
                <div className="quantum-orbits">
                  <div className="orbit orbit-1">
                    <div className="electron"></div>
                  </div>
                  <div className="orbit orbit-2">
                    <div className="electron"></div>
                  </div>
                  <div className="orbit orbit-3">
                    <div className="electron"></div>
                  </div>
                </div>
                <div className="quantum-label">Quantum State Active</div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="quantum-hero">
        <div className="quantum-container">
          <div className="quantum-badge">
            <Atom className="w-4 h-4" />
            Mars-Powered Quantum Reality
          </div>
          
          <h1 className="quantum-title">
            Compliance in Quantensuperposition
            <span className="quantum-highlight">Quantum Mars Engine</span>
          </h1>
          
          <p className="quantum-subtitle">
            Interplanetare Quantenrealität mit Mars-Verschränkung. 
            Wo rote Quantenteilchen auf blaue Compliance-Wellen treffen – die Evolution der multidimensionalen Rechtsintelligenz.
          </p>

          <div className="quantum-hero-actions">
            <Button className="quantum-primary-btn">
              <Atom className="w-4 h-4 mr-2" />
              Quantum Mars aktivieren
            </Button>
            <Button variant="outline" className="quantum-secondary-btn">
              Superposition Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Quantum Metrics */}
          <div className="quantum-metrics">
            {quantumMetrics.map((metric, index) => (
              <div key={index} className="quantum-metric-display">
                <div className="quantum-metric-value">{metric.value}{metric.unit}</div>
                <div className="quantum-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quantum Capabilities */}
      <section className="quantum-capabilities">
        <div className="quantum-container">
          <div className="capabilities-header">
            <Badge className="quantum-badge">Quantum Mars Technology</Badge>
            <h2>Multidimensionale Quantum-Architektur</h2>
            <p>Wo Mars-Quanten auf Erd-Compliance in Superposition treffen</p>
          </div>
          
          <div className="capabilities-grid">
            {quantumCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className={`quantum-capability-card ${capability.color}`}>
                  <div className="capability-header">
                    <div className="capability-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="capability-progress">
                      <div className="quantum-progress-ring">
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
                            className="quantum-circle"
                            strokeDasharray={`${capability.progress}, 100`}
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="3"
                          />
                        </svg>
                        <div className="quantum-progress-text">{capability.progress}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-description">{capability.description}</p>
                  
                  <div className="capability-footer">
                    <Progress 
                      value={capability.progress} 
                      className="quantum-capability-bar"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quantum Network Visualization */}
      <section className="quantum-network">
        <div className="quantum-container">
          <Card className="quantum-network-visualization">
            <div className="network-header">
              <div className="quantum-network-icon">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <h3>Mars Quantum Reality Network</h3>
                <p>Live-Visualisierung des multidimensionalen Quantennetzwerks</p>
              </div>
            </div>
            
            <div className="quantum-tech-stack">
              {quantumTechStack.map((tech, index) => (
                <div key={index} className="quantum-tech-node">
                  <div className={`quantum-node-status ${tech.status}`}></div>
                  <span className="quantum-tech-name">{tech.name}</span>
                  <div className="quantum-node-count">{tech.nodes} Qubits</div>
                </div>
              ))}
            </div>
            
            <div className="quantum-network-actions">
              <Button variant="outline" className="quantum-network-btn">
                <Search className="w-4 h-4 mr-2" />
                Quantum Scan
              </Button>
              <Button variant="outline" className="quantum-network-btn">
                <Bot className="w-4 h-4 mr-2" />
                Mars Quantum AI
              </Button>
              <Button variant="outline" className="quantum-network-btn">
                <Layers className="w-4 h-4 mr-2" />
                Superposition Analysis
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Quantum CTA */}
      <section className="quantum-cta">
        <div className="quantum-container">
          <Card className="quantum-cta-hologram">
            <div className="quantum-hologram-effect">
              <div className="quantum-hologram-field"></div>
              <div className="cta-content">
                <h2>Bereit für Quantenrealität?</h2>
                <p>
                  Entdecken Sie Compliance in allen möglichen Zuständen gleichzeitig. Wo Mars-Quantenverschränkung, 
                  multidimensionale Superposition und interplanetare Tunneling zur ultimativen Quantenrealität verschmelzen.
                </p>
                
                <div className="cta-actions">
                  <Button className="quantum-primary-btn">
                    <Rocket className="w-4 h-4 mr-2" />
                    Quantum Mars Interface
                  </Button>
                  <Button variant="outline" className="quantum-secondary-btn">
                    Superposition Consultation
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="quantum-footer">
        <div className="quantum-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="quantum-logo">
                <div className="quantum-field">
                  <div className="quantum-particles">
                    <div className="quantum-particle entangled"></div>
                    <div className="quantum-particle superposed"></div>
                    <div className="quantum-particle tunneling"></div>
                    <div className="quantum-particle collapsed"></div>
                  </div>
                  <div className="mars-core-quantum"></div>
                </div>
                <span className="quantum-brand">
                  Mar<span className="quantum-paragraph">§</span>tein
                </span>
              </div>
              <p className="footer-tagline">
                Mars Quantum Reality Intelligence
              </p>
            </div>
            
            <div className="footer-tech">
              <div className="quantum-tech-indicators">
                <div className="indicator">
                  <div className="indicator-value">∞</div>
                  <div className="indicator-label">Quantum States</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">10²³</div>
                  <div className="indicator-label">Mars Qubits</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">5847</div>
                  <div className="indicator-label">Entangled Pairs</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Marsstein. Powered by Mars Quantum Reality.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QuantumMars;