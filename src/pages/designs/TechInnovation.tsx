import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Zap, 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Lock,
  Database,
  Network,
  Globe,
  Code2,
  Search,
  Bot,
  Layers,
  Terminal,
  Binary,
  Workflow,
  Activity
} from 'lucide-react';
import './TechInnovation.css';

const TechInnovation: React.FC = () => {
  const [innovationIndex, setInnovationIndex] = useState(0);
  const [techLevel, setTechLevel] = useState(0);
  const [systemPerformance, setSystemPerformance] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setInnovationIndex(96.4);
      setTechLevel(98.7);
      setSystemPerformance(94.9);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  const techCapabilities = [
    {
      icon: Zap,
      title: "Lightning-Fast Processing",
      description: "Hochleistungs-Computing mit Electric Blue Power. Blitzschnelle Compliance-Verarbeitung mit modernster Prozessor-Technologie und optimierten Algorithmen.",
      progress: 98.7,
      color: "electric"
    },
    {
      icon: Code2,
      title: "Advanced API Integration",
      description: "Futuristische API-First Architektur für nahtlose Systemintegration. Modernste Tech-Patterns und Cloud-native Microservices für maximale Skalierbarkeit.",
      progress: 96.4,
      color: "tech"
    },
    {
      icon: Binary,
      title: "Data-Driven Intelligence", 
      description: "Intelligente Datenverarbeitung mit Machine Learning Algorithmen. Real-time Analytics und predictive Compliance für proaktive Rechtssicherheit.",
      progress: 94.9,
      color: "innovation"
    },
    {
      icon: Network,
      title: "Distributed Tech Stack",
      description: "Verteilte Systemarchitektur mit Edge Computing und Load Balancing. Hochverfügbare Tech-Infrastructure für Enterprise-grade Performance.",
      progress: 97.2,
      color: "network"
    }
  ];

  const techStack = [
    { name: "Electric Core Engine", status: "electric-active", nodes: 2147 },
    { name: "Tech Innovation Hub", status: "tech-processing", nodes: 3428 },
    { name: "Data Intelligence Grid", status: "innovation-analyzing", nodes: 5247 },
    { name: "Network Distribution", status: "network-scaling", nodes: 1856 },
    { name: "API Gateway Cluster", status: "electric-optimized", nodes: 2689 },
    { name: "Tech Performance Monitor", status: "tech-monitoring", nodes: 1734 }
  ];

  const techMetrics = [
    { label: "Innovation Index", value: innovationIndex, unit: "%" },
    { label: "Tech Level", value: techLevel, unit: "%" },
    { label: "System Performance", value: systemPerformance, unit: "%" },
    { label: "API Response", value: 12, unit: "ms" }
  ];

  return (
    <div className="tech-innovation">
      {/* Tech Header */}
      <header className="tech-header">
        <div className="tech-container">
          <nav className="tech-nav">
            <div className="tech-logo">
              <div className="electric-core">
                <div className="electric-rings">
                  <div className="ring ring-1"></div>
                  <div className="ring ring-2"></div>
                  <div className="ring ring-3"></div>
                </div>
                <div className="core-center"></div>
                <div className="paragraph-electric">§</div>
              </div>
              <span className="tech-brand">
                Mar<span className="tech-paragraph">§</span>tein
              </span>
              <div className="tech-tagline">Tech Innovation</div>
            </div>
            
            <ul className="tech-nav-menu">
              <li><a href="#electric">Electric Core</a></li>
              <li><a href="#innovation">Innovation</a></li>
              <li><a href="#api">API-First</a></li>
              <li><a href="#performance">Performance</a></li>
            </ul>
            
            <div className="tech-status">
              <div className="innovation-indicators">
                <div className="tech-signals">
                  <div className="signal electric"></div>
                  <div className="signal tech"></div>
                  <div className="signal innovation"></div>
                  <div className="signal network"></div>
                </div>
                <div className="tech-label">Innovation Systems Online</div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="tech-hero">
        <div className="tech-container">
          <div className="tech-badge">
            <Zap className="w-4 h-4" />
            Electric Blue Tech Energy
          </div>
          
          <h1 className="tech-title">
            Compliance mit elektrischer Innovation
            <span className="tech-highlight">Tech Innovation</span>
          </h1>
          
          <p className="tech-subtitle">
            Hochmoderne Tech-Patterns treffen auf Electric Blue Power. 
            Wo futuristische API-Architektur auf blitzschnelle Performance trifft – die Zukunft der Tech-Innovation.
          </p>

          <div className="tech-hero-actions">
            <Button className="tech-primary-btn">
              <Zap className="w-4 h-4 mr-2" />
              Tech Innovation starten
            </Button>
            <Button variant="outline" className="tech-secondary-btn">
              API Documentation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Tech Metrics */}
          <div className="tech-metrics">
            {techMetrics.map((metric, index) => (
              <div key={index} className="tech-metric-display">
                <div className="tech-metric-value">{metric.value}{metric.unit}</div>
                <div className="tech-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Capabilities */}
      <section className="tech-capabilities">
        <div className="tech-container">
          <div className="capabilities-header">
            <Badge className="tech-badge">Futuristic Technology</Badge>
            <h2>Electric Innovation-Architektur</h2>
            <p>Wo Electric Blue Power auf modernste Tech-Patterns trifft</p>
          </div>
          
          <div className="capabilities-grid">
            {techCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className={`tech-capability-card ${capability.color}`}>
                  <div className="capability-header">
                    <div className="capability-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="capability-progress">
                      <div className="tech-progress-ring">
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
                            className="tech-circle"
                            strokeDasharray={`${capability.progress}, 100`}
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="3"
                          />
                        </svg>
                        <div className="tech-progress-text">{capability.progress}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-description">{capability.description}</p>
                  
                  <div className="capability-footer">
                    <Progress 
                      value={capability.progress} 
                      className="tech-capability-bar"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Network Visualization */}
      <section className="tech-network">
        <div className="tech-container">
          <Card className="tech-network-visualization">
            <div className="network-header">
              <div className="tech-network-icon">
                <Network className="w-8 h-8" />
              </div>
              <div>
                <h3>Tech Innovation Network</h3>
                <p>Live-Monitoring des Electric Blue Innovation-Ecosystems</p>
              </div>
            </div>
            
            <div className="tech-tech-stack">
              {techStack.map((tech, index) => (
                <div key={index} className="tech-tech-node">
                  <div className={`tech-node-status ${tech.status}`}></div>
                  <span className="tech-tech-name">{tech.name}</span>
                  <div className="tech-node-count">{tech.nodes} Ops/s</div>
                </div>
              ))}
            </div>
            
            <div className="tech-network-actions">
              <Button variant="outline" className="tech-network-btn">
                <Search className="w-4 h-4 mr-2" />
                Tech Scan
              </Button>
              <Button variant="outline" className="tech-network-btn">
                <Bot className="w-4 h-4 mr-2" />
                Innovation AI
              </Button>
              <Button variant="outline" className="tech-network-btn">
                <Layers className="w-4 h-4 mr-2" />
                Deep Tech Analysis
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Tech CTA */}
      <section className="tech-cta">
        <div className="tech-container">
          <Card className="tech-cta-card">
            <div className="tech-cta-content">
              <div className="cta-content">
                <h2>Bereit für Tech Innovation?</h2>
                <p>
                  Erleben Sie Compliance mit Electric Blue Power und modernsten Tech-Patterns. Wo futuristische 
                  API-Architektur, blitzschnelle Performance und innovative Algorithmen zur ultimativen Tech-Erfahrung verschmelzen.
                </p>
                
                <div className="cta-actions">
                  <Button className="tech-primary-btn">
                    <Zap className="w-4 h-4 mr-2" />
                    Innovation Hub aktivieren
                  </Button>
                  <Button variant="outline" className="tech-secondary-btn">
                    Tech Consultation
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="tech-footer">
        <div className="tech-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="tech-logo">
                <div className="electric-core">
                  <div className="electric-rings">
                    <div className="ring ring-1"></div>
                    <div className="ring ring-2"></div>
                    <div className="ring ring-3"></div>
                  </div>
                  <div className="core-center"></div>
                  <div className="paragraph-electric">§</div>
                </div>
                <span className="tech-brand">
                  Mar<span className="tech-paragraph">§</span>tein
                </span>
              </div>
              <p className="footer-tagline">
                Electric Blue Tech Innovation
              </p>
            </div>
            
            <div className="footer-tech">
              <div className="tech-tech-indicators">
                <div className="indicator">
                  <div className="indicator-value">98.7%</div>
                  <div className="indicator-label">Tech Level</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">12ms</div>
                  <div className="indicator-label">API Response</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">24/7</div>
                  <div className="indicator-label">Innovation Hub</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Marsstein. Powered by Electric Blue Tech Innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechInnovation;