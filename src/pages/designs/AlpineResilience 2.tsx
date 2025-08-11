import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Mountain, 
  Brain, 
  CheckCircle2, 
  ArrowRight, 
  Cpu,
  Database,
  Network,
  Globe,
  Lock,
  Award,
  Search,
  Bot,
  Layers,
  TreePine,
  Snowflake,
  Target
} from 'lucide-react';
import './AlpineResilience.css';

const AlpineResilience: React.FC = () => {
  const [resilienceIndex, setResilienceIndex] = useState(0);
  const [aiIntegration, setAiIntegration] = useState(0);
  const [sustainabilityScore, setSustainabilityScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setResilienceIndex(98.7);
      setAiIntegration(96.4);
      setSustainabilityScore(94.2);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const alpineCapabilities = [
    {
      icon: Mountain,
      title: "Alpine Data Sovereignty",
      description: "Schweizer Datenschutz-Standards kombiniert mit KI-Präzision. Ihre Daten bleiben in den sicheren Alpen-Rechenzentren, geschützt durch Granit und Gesetz.",
      progress: 98.7,
      color: "glacier"
    },
    {
      icon: Brain,
      title: "AI-Enhanced Compliance",
      description: "Künstliche Intelligenz mit der Zuverlässigkeit Schweizer Uhrmacher. Neuronale Netzwerke verstehen Rechtsnormen mit alpiner Präzision.",
      progress: 96.4,
      color: "pine"
    },
    {
      icon: TreePine,
      title: "Sustainable Legal Tech",
      description: "Umweltfreundliche Compliance-Technologie powered by Schweizer Wasserkraft. Nachhaltige Rechtsintelligenz für grüne Unternehmen.",
      progress: 94.2,
      color: "pine-green"
    },
    {
      icon: Shield,
      title: "Fortress Security",
      description: "Sicherheit wie eine Schweizer Bank-Festung. Multi-Layer Protection mit Alpen-Hardware und KI-gestützter Bedrohungserkennung.",
      progress: 99.1,
      color: "granite"
    }
  ];

  const alpineTechStack = [
    { name: "Alpine AI Core", status: "mountain-active", nodes: 847 },
    { name: "Glacier Data Lake", status: "glacier-processing", nodes: 1328 },
    { name: "Pine Forest Neural Net", status: "pine-learning", nodes: 2847 },
    { name: "Granite Security Layer", status: "granite-secured", nodes: 956 },
    { name: "Swiss Quantum Cluster", status: "quantum-encrypted", nodes: 489 },
    { name: "Hydro-Powered Edge", status: "hydro-active", nodes: 634 }
  ];

  const alpineMetrics = [
    { label: "Resilience Index", value: resilienceIndex, unit: "%" },
    { label: "AI Integration", value: aiIntegration, unit: "%" },
    { label: "Sustainability", value: sustainabilityScore, unit: "%" },
    { label: "Response Time", value: 47, unit: "ms" }
  ];

  return (
    <div className="alpine-resilience">
      {/* Alpine Header */}
      <header className="alpine-header">
        <div className="alpine-container">
          <nav className="alpine-nav">
            <div className="alpine-logo">
              <div className="mountain-peak">
                <div className="peak-layers">
                  <div className="peak-snow"></div>
                  <div className="peak-rock"></div>
                  <div className="peak-base"></div>
                </div>
                <div className="paragraph-peak">§</div>
              </div>
              <span className="alpine-brand">
                Mar<span className="alpine-paragraph">§</span>tein
              </span>
              <div className="alpine-tagline">Alpine AI Resilience</div>
            </div>
            
            <ul className="alpine-nav-menu">
              <li><a href="#alpine">Alpine AI</a></li>
              <li><a href="#resilience">Resilience</a></li>
              <li><a href="#sustainability">Sustainability</a></li>
              <li><a href="#security">Fortress Security</a></li>
            </ul>
            
            <div className="alpine-status">
              <div className="alpine-indicators">
                <div className="indicator-mountains">
                  <div className="mountain-indicator active"></div>
                  <div className="mountain-indicator processing"></div>
                  <div className="mountain-indicator secured"></div>
                </div>
                <div className="alpine-label">Alpine Systems Online</div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="alpine-hero">
        <div className="alpine-container">
          <div className="alpine-badge">
            <Mountain className="w-4 h-4" />
            Swiss AI-Powered Resilience
          </div>
          
          <h1 className="alpine-title">
            Compliance stark wie die Alpen
            <span className="alpine-highlight">Alpine AI Resilience</span>
          </h1>
          
          <p className="alpine-subtitle">
            Schweizer Zuverlässigkeit trifft auf KI-Innovation. 
            Wo Alpen-Datensouveränität auf neuronale Netzwerke trifft – die Evolution der nachhaltigen Rechtsintelligenz.
          </p>

          <div className="alpine-hero-actions">
            <Button className="alpine-primary-btn">
              <Mountain className="w-4 h-4 mr-2" />
              Alpine AI aktivieren
            </Button>
            <Button variant="outline" className="alpine-secondary-btn">
              Resilience Demo starten
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Alpine Metrics */}
          <div className="alpine-metrics">
            {alpineMetrics.map((metric, index) => (
              <div key={index} className="alpine-metric-display">
                <div className="alpine-metric-value">{metric.value}{metric.unit}</div>
                <div className="alpine-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alpine Capabilities */}
      <section className="alpine-capabilities">
        <div className="alpine-container">
          <div className="capabilities-header">
            <Badge className="alpine-badge">Alpine Technology</Badge>
            <h2>Schweizer KI-Resilience Architektur</h2>
            <p>Wo Alpen-Stärke auf künstliche Intelligenz trifft</p>
          </div>
          
          <div className="capabilities-grid">
            {alpineCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className={`alpine-capability-card ${capability.color}`}>
                  <div className="capability-header">
                    <div className="capability-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="capability-progress">
                      <div className="alpine-progress-ring">
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
                            className="alpine-circle"
                            strokeDasharray={`${capability.progress}, 100`}
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="3"
                          />
                        </svg>
                        <div className="alpine-progress-text">{capability.progress}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-description">{capability.description}</p>
                  
                  <div className="capability-footer">
                    <Progress 
                      value={capability.progress} 
                      className="alpine-capability-bar"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Alpine Network Visualization */}
      <section className="alpine-network">
        <div className="alpine-container">
          <Card className="alpine-network-visualization">
            <div className="network-header">
              <div className="alpine-network-icon">
                <Cpu className="w-8 h-8" />
              </div>
              <div>
                <h3>Alpine Resilience Network</h3>
                <p>Live-Visualisierung des Schweizer KI-Resilience-Netzwerks</p>
              </div>
            </div>
            
            <div className="alpine-tech-stack">
              {alpineTechStack.map((tech, index) => (
                <div key={index} className="alpine-tech-node">
                  <div className={`alpine-node-status ${tech.status}`}></div>
                  <span className="alpine-tech-name">{tech.name}</span>
                  <div className="alpine-node-count">{tech.nodes} Nodes</div>
                </div>
              ))}
            </div>
            
            <div className="alpine-network-actions">
              <Button variant="outline" className="alpine-network-btn">
                <Search className="w-4 h-4 mr-2" />
                Alpine Scan
              </Button>
              <Button variant="outline" className="alpine-network-btn">
                <Bot className="w-4 h-4 mr-2" />
                Swiss AI Assistant
              </Button>
              <Button variant="outline" className="alpine-network-btn">
                <Layers className="w-4 h-4 mr-2" />
                Resilience Analysis
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Alpine CTA */}
      <section className="alpine-cta">
        <div className="alpine-container">
          <Card className="alpine-cta-card">
            <div className="alpine-cta-content">
              <div className="cta-content">
                <h2>Bereit für Alpine Resilience?</h2>
                <p>
                  Erleben Sie Compliance mit Schweizer Präzision und KI-Power. Wo Alpen-Datensouveränität, 
                  nachhaltige Technologie und künstliche Intelligenz zur ultimativen Resilience verschmelzen.
                </p>
                
                <div className="cta-actions">
                  <Button className="alpine-primary-btn">
                    <Mountain className="w-4 h-4 mr-2" />
                    Alpine Interface starten
                  </Button>
                  <Button variant="outline" className="alpine-secondary-btn">
                    Swiss Consultation
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="alpine-footer">
        <div className="alpine-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="alpine-logo">
                <div className="mountain-peak">
                  <div className="peak-layers">
                    <div className="peak-snow"></div>
                    <div className="peak-rock"></div>
                    <div className="peak-base"></div>
                  </div>
                  <div className="paragraph-peak">§</div>
                </div>
                <span className="alpine-brand">
                  Mar<span className="alpine-paragraph">§</span>tein
                </span>
              </div>
              <p className="footer-tagline">
                Swiss Alpine AI Resilience
              </p>
            </div>
            
            <div className="footer-tech">
              <div className="alpine-tech-indicators">
                <div className="indicator">
                  <div className="indicator-value">98.7%</div>
                  <div className="indicator-label">Resilience Index</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">100%</div>
                  <div className="indicator-label">Swiss Hosted</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">0</div>
                  <div className="indicator-label">Downtime Hours</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Marsstein. Powered by Alpine AI Resilience.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AlpineResilience;