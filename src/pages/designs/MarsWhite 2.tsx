import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Target, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Lock,
  Globe,
  Zap,
  Users,
  Star,
  Search,
  Settings,
  FileCheck,
  TrendingUp,
  Layers,
  Bot
} from 'lucide-react';
import './MarsWhite.css';

const MarsWhite: React.FC = () => {
  const [complianceStrength, setComplianceStrength] = useState(0);
  const [systemPurity, setSystemPurity] = useState(0);
  const [operationalClarity, setOperationalClarity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplianceStrength(98.7);
      setSystemPurity(99.1);
      setOperationalClarity(97.4);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const marsWhiteCapabilities = [
    {
      icon: Target,
      title: "Precision Compliance",
      description: "Kristallklare Compliance-Prozesse mit chirurgischer Präzision. Jeder Schritt transparent, jede Regel eindeutig, jedes Ergebnis messbar.",
      progress: 98.7,
      color: "precision"
    },
    {
      icon: Shield,
      title: "Pure Protection",
      description: "Unverfälschter Schutz durch reine Technologie. Klare Sicherheitsstrukturen ohne Kompromisse, transparente Prozesse ohne Verwirrung.",
      progress: 99.1,
      color: "purity"
    },
    {
      icon: Award,
      title: "Excellence Standard",
      description: "Der neue Maßstab für Compliance-Exzellenz. Höchste Standards in reinster Form, ohne Ablenkung durch Überflüssiges.",
      progress: 97.4,
      color: "excellence"
    },
    {
      icon: Zap,
      title: "Swift Clarity",
      description: "Blitzschnelle Klarheit in allen Compliance-Fragen. Sofortige Antworten, unmittelbare Lösungen, absolute Transparenz.",
      progress: 96.8,
      color: "clarity"
    }
  ];

  const marsWhiteOperations = [
    { name: "Core Compliance Engine", status: "precision-active", metric: "98.7%" },
    { name: "Pure Security Layer", status: "purity-secured", metric: "99.1%" },
    { name: "Excellence Monitor", status: "excellence-optimized", metric: "97.4%" },
    { name: "Clarity Dashboard", status: "clarity-analyzing", metric: "96.8%" },
    { name: "Mars Control Center", status: "precision-commanding", metric: "99.3%" },
    { name: "White Operations Hub", status: "purity-coordinating", metric: "98.9%" }
  ];

  const marsWhiteMetrics = [
    { label: "Compliance Strength", value: complianceStrength, unit: "%" },
    { label: "System Purity", value: systemPurity, unit: "%" },
    { label: "Operational Clarity", value: operationalClarity, unit: "%" },
    { label: "Response Time", value: 0.3, unit: "s" }
  ];

  return (
    <div className="mars-white">
      {/* Mars White Header */}
      <header className="mars-white-header">
        <div className="mars-white-container">
          <nav className="mars-white-nav">
            <div className="mars-white-logo">
              <div className="mars-target">
                <div className="target-rings">
                  <div className="target-ring outer"></div>
                  <div className="target-ring middle"></div>
                  <div className="target-ring inner"></div>
                </div>
                <div className="target-center">
                  <div className="paragraph-mars">§</div>
                </div>
              </div>
              <span className="mars-white-brand">
                Mar<span className="mars-white-paragraph">§</span>tein
              </span>
              <div className="mars-white-tagline">Pure Precision</div>
            </div>
            
            <ul className="mars-white-nav-menu">
              <li><a href="#precision">Precision</a></li>
              <li><a href="#purity">Purity</a></li>
              <li><a href="#excellence">Excellence</a></li>
              <li><a href="#clarity">Clarity</a></li>
            </ul>
            
            <div className="mars-white-status">
              <div className="precision-indicators">
                <div className="status-lights">
                  <div className="status-light precision"></div>
                  <div className="status-light purity"></div>
                  <div className="status-light excellence"></div>
                  <div className="status-light clarity"></div>
                </div>
                <div className="mars-white-label">All Systems Pure</div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mars-white-hero">
        <div className="mars-white-container">
          <div className="mars-white-badge">
            <Target className="w-4 h-4" />
            Pure Mars Precision
          </div>
          
          <h1 className="mars-white-title">
            Compliance in reinster Form
            <span className="mars-white-highlight">Pure Excellence</span>
          </h1>
          
          <p className="mars-white-subtitle">
            Kristallklare Compliance ohne Kompromisse. Wo Mars-Power auf reine Perfektion trifft – 
            für Unternehmen, die das Beste erwarten und verdienen.
          </p>

          <div className="mars-white-hero-actions">
            <Button className="mars-white-primary-btn">
              <Target className="w-4 h-4 mr-2" />
              Pure Experience starten
            </Button>
            <Button variant="outline" className="mars-white-secondary-btn">
              Präzision erleben
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mars White Metrics */}
          <div className="mars-white-metrics">
            {marsWhiteMetrics.map((metric, index) => (
              <div key={index} className="mars-white-metric-display">
                <div className="mars-white-metric-value">{metric.value}{metric.unit}</div>
                <div className="mars-white-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mars White Capabilities */}
      <section className="mars-white-capabilities">
        <div className="mars-white-container">
          <div className="capabilities-header">
            <Badge className="mars-white-badge">Pure Mars Technology</Badge>
            <h2>Reinste Compliance-Exzellenz</h2>
            <p>Wo Mars-Kraft auf kristallklare Perfektion trifft</p>
          </div>
          
          <div className="capabilities-grid">
            {marsWhiteCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className={`mars-white-capability-card ${capability.color}`}>
                  <div className="capability-header">
                    <div className="capability-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="capability-progress">
                      <div className="mars-white-progress-ring">
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
                            className="mars-white-circle"
                            strokeDasharray={`${capability.progress}, 100`}
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="3"
                          />
                        </svg>
                        <div className="mars-white-progress-text">{capability.progress}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-description">{capability.description}</p>
                  
                  <div className="capability-footer">
                    <Progress 
                      value={capability.progress} 
                      className="mars-white-capability-bar"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mars White Operations */}
      <section className="mars-white-operations">
        <div className="mars-white-container">
          <Card className="mars-white-operations-visualization">
            <div className="operations-header">
              <div className="mars-white-operations-icon">
                <Settings className="w-8 h-8" />
              </div>
              <div>
                <h3>Mars White Operations</h3>
                <p>Kristallklare Übersicht aller Compliance-Systeme</p>
              </div>
            </div>
            
            <div className="mars-white-operations-stack">
              {marsWhiteOperations.map((operation, index) => (
                <div key={index} className="mars-white-operation-node">
                  <div className={`mars-white-node-status ${operation.status}`}></div>
                  <span className="mars-white-operation-name">{operation.name}</span>
                  <div className="mars-white-operation-metric">{operation.metric}</div>
                </div>
              ))}
            </div>
            
            <div className="mars-white-operations-actions">
              <Button variant="outline" className="mars-white-operations-btn">
                <Search className="w-4 h-4 mr-2" />
                Precision Scan
              </Button>
              <Button variant="outline" className="mars-white-operations-btn">
                <Bot className="w-4 h-4 mr-2" />
                Pure Assistant
              </Button>
              <Button variant="outline" className="mars-white-operations-btn">
                <Layers className="w-4 h-4 mr-2" />
                Full Analysis
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Mars White CTA */}
      <section className="mars-white-cta">
        <div className="mars-white-container">
          <Card className="mars-white-cta-card">
            <div className="mars-white-cta-content">
              <div className="cta-content">
                <h2>Bereit für Pure Excellence?</h2>
                <p>
                  Erleben Sie Compliance in ihrer reinsten Form. Wo Mars-Power auf kristallklare Perfektion trifft – 
                  für Unternehmen, die keine Kompromisse eingehen.
                </p>
                
                <div className="cta-actions">
                  <Button className="mars-white-primary-btn">
                    <Target className="w-4 h-4 mr-2" />
                    Pure Precision aktivieren
                  </Button>
                  <Button variant="outline" className="mars-white-secondary-btn">
                    Excellence Consultation
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mars-white-footer">
        <div className="mars-white-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="mars-white-logo">
                <div className="mars-target">
                  <div className="target-rings">
                    <div className="target-ring outer"></div>
                    <div className="target-ring middle"></div>
                    <div className="target-ring inner"></div>
                  </div>
                  <div className="target-center">
                    <div className="paragraph-mars">§</div>
                  </div>
                </div>
                <span className="mars-white-brand">
                  Mar<span className="mars-white-paragraph">§</span>tein
                </span>
              </div>
              <p className="footer-tagline">
                Pure Mars Precision & Excellence
              </p>
            </div>
            
            <div className="footer-operations">
              <div className="mars-white-operations-indicators">
                <div className="indicator">
                  <div className="indicator-value">98.7%</div>
                  <div className="indicator-label">Compliance Strength</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">99.1%</div>
                  <div className="indicator-label">System Purity</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">24/7</div>
                  <div className="indicator-label">Pure Operations</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Marsstein. Pure Mars Precision & Excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarsWhite;