import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  Lock,
  Database,
  Network,
  Globe,
  Award,
  Search,
  Bot,
  Layers,
  FileCheck,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react';
import './ModernCompliance.css';

const ModernCompliance: React.FC = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [automationLevel, setAutomationLevel] = useState(0);
  const [riskReduction, setRiskReduction] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplianceScore(97.3);
      setAutomationLevel(94.8);
      setRiskReduction(89.6);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const complianceCapabilities = [
    {
      icon: Shield,
      title: "Trust & Stability Foundation",
      description: "Bewährte Compliance-Grundlagen mit modernster Technologie. Vertrauen durch Stabilität, Innovation durch bewährte Standards.",
      progress: 97.3,
      color: "trust"
    },
    {
      icon: Zap,
      title: "Automated Risk Management",
      description: "Intelligente Automatisierung für Risikomanagement und Compliance-Überwachung. Moderne Effizienz mit menschlicher Kontrolle.",
      progress: 94.8,
      color: "energy"
    },
    {
      icon: FileCheck,
      title: "Comprehensive Auditing",
      description: "Vollständige Audit-Trails und Dokumentation nach höchsten Standards. Transparenz und Nachvollziehbarkeit in jedem Prozess.",
      progress: 96.1,
      color: "audit"
    },
    {
      icon: Users,
      title: "Stakeholder Integration",
      description: "Nahtlose Integration aller Stakeholder in den Compliance-Prozess. Kollaboration und Kommunikation im Zentrum.",
      progress: 92.7,
      color: "collaboration"
    }
  ];

  const modernTechStack = [
    { name: "Core Compliance Engine", status: "trust-active", nodes: 1247 },
    { name: "Risk Assessment AI", status: "energy-processing", nodes: 2328 },
    { name: "Audit Trail System", status: "audit-verified", nodes: 3847 },
    { name: "Stakeholder Portal", status: "collaboration-active", nodes: 1956 },
    { name: "Automated Reporting", status: "trust-secured", nodes: 889 },
    { name: "Compliance Dashboard", status: "energy-optimized", nodes: 1434 }
  ];

  const modernMetrics = [
    { label: "Compliance Score", value: complianceScore, unit: "%" },
    { label: "Automation Level", value: automationLevel, unit: "%" },
    { label: "Risk Reduction", value: riskReduction, unit: "%" },
    { label: "Response Time", value: 24, unit: "h" }
  ];

  return (
    <div className="modern-compliance">
      {/* Modern Header */}
      <header className="modern-header">
        <div className="modern-container">
          <nav className="modern-nav">
            <div className="modern-logo">
              <div className="compliance-shield">
                <div className="shield-layers">
                  <div className="shield-core"></div>
                  <div className="shield-ring"></div>
                  <div className="shield-outer"></div>
                </div>
                <div className="paragraph-symbol">§</div>
              </div>
              <span className="modern-brand">
                Mar<span className="modern-paragraph">§</span>tein
              </span>
              <div className="modern-tagline">Modern Compliance</div>
            </div>
            
            <ul className="modern-nav-menu">
              <li><a href="#compliance">Compliance</a></li>
              <li><a href="#automation">Automation</a></li>
              <li><a href="#auditing">Auditing</a></li>
              <li><a href="#reporting">Reporting</a></li>
            </ul>
            
            <div className="modern-status">
              <div className="compliance-indicators">
                <div className="status-bars">
                  <div className="status-bar trust"></div>
                  <div className="status-bar energy"></div>
                  <div className="status-bar audit"></div>
                  <div className="status-bar collaboration"></div>
                </div>
                <div className="modern-label">All Systems Operational</div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="modern-hero">
        <div className="modern-container">
          <div className="modern-badge">
            <Shield className="w-4 h-4" />
            Trusted Modern Compliance
          </div>
          
          <h1 className="modern-title">
            Compliance mit Vertrauen und Stabilität
            <span className="modern-highlight">Modern Standards</span>
          </h1>
          
          <p className="modern-subtitle">
            Bewährte Compliance-Grundlagen treffen auf moderne Technologie. 
            Wo Vertrauen auf Innovation trifft – die Evolution professioneller Rechtskonformität.
          </p>

          <div className="modern-hero-actions">
            <Button className="modern-primary-btn">
              <Shield className="w-4 h-4 mr-2" />
              Compliance starten
            </Button>
            <Button variant="outline" className="modern-secondary-btn">
              Standards erkunden
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Modern Metrics */}
          <div className="modern-metrics">
            {modernMetrics.map((metric, index) => (
              <div key={index} className="modern-metric-display">
                <div className="modern-metric-value">{metric.value}{metric.unit}</div>
                <div className="modern-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Capabilities */}
      <section className="modern-capabilities">
        <div className="modern-container">
          <div className="capabilities-header">
            <Badge className="modern-badge">Professional Standards</Badge>
            <h2>Moderne Compliance-Architektur</h2>
            <p>Wo bewährte Standards auf innovative Technologie treffen</p>
          </div>
          
          <div className="capabilities-grid">
            {complianceCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className={`modern-capability-card ${capability.color}`}>
                  <div className="capability-header">
                    <div className="capability-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="capability-progress">
                      <div className="modern-progress-ring">
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
                            className="modern-circle"
                            strokeDasharray={`${capability.progress}, 100`}
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="3"
                          />
                        </svg>
                        <div className="modern-progress-text">{capability.progress}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-description">{capability.description}</p>
                  
                  <div className="capability-footer">
                    <Progress 
                      value={capability.progress} 
                      className="modern-capability-bar"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modern Network Visualization */}
      <section className="modern-network">
        <div className="modern-container">
          <Card className="modern-network-visualization">
            <div className="network-header">
              <div className="modern-network-icon">
                <Network className="w-8 h-8" />
              </div>
              <div>
                <h3>Modern Compliance Network</h3>
                <p>Live-Übersicht des integrierten Compliance-Ökosystems</p>
              </div>
            </div>
            
            <div className="modern-tech-stack">
              {modernTechStack.map((tech, index) => (
                <div key={index} className="modern-tech-node">
                  <div className={`modern-node-status ${tech.status}`}></div>
                  <span className="modern-tech-name">{tech.name}</span>
                  <div className="modern-node-count">{tech.nodes} Processes</div>
                </div>
              ))}
            </div>
            
            <div className="modern-network-actions">
              <Button variant="outline" className="modern-network-btn">
                <Search className="w-4 h-4 mr-2" />
                System Scan
              </Button>
              <Button variant="outline" className="modern-network-btn">
                <Bot className="w-4 h-4 mr-2" />
                Compliance Assistant
              </Button>
              <Button variant="outline" className="modern-network-btn">
                <Layers className="w-4 h-4 mr-2" />
                Full Analysis
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Modern CTA */}
      <section className="modern-cta">
        <div className="modern-container">
          <Card className="modern-cta-card">
            <div className="modern-cta-content">
              <div className="cta-content">
                <h2>Bereit für moderne Compliance?</h2>
                <p>
                  Entdecken Sie Compliance-Standards, die Vertrauen schaffen. Wo bewährte Methoden 
                  auf innovative Technologie treffen – für professionelle Rechtskonformität auf höchstem Niveau.
                </p>
                
                <div className="cta-actions">
                  <Button className="modern-primary-btn">
                    <Shield className="w-4 h-4 mr-2" />
                    Standards implementieren
                  </Button>
                  <Button variant="outline" className="modern-secondary-btn">
                    Professional Consultation
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="modern-footer">
        <div className="modern-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="modern-logo">
                <div className="compliance-shield">
                  <div className="shield-layers">
                    <div className="shield-core"></div>
                    <div className="shield-ring"></div>
                    <div className="shield-outer"></div>
                  </div>
                  <div className="paragraph-symbol">§</div>
                </div>
                <span className="modern-brand">
                  Mar<span className="modern-paragraph">§</span>tein
                </span>
              </div>
              <p className="footer-tagline">
                Modern Professional Compliance
              </p>
            </div>
            
            <div className="footer-tech">
              <div className="modern-tech-indicators">
                <div className="indicator">
                  <div className="indicator-value">97.3%</div>
                  <div className="indicator-label">Compliance Score</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">99.9%</div>
                  <div className="indicator-label">System Uptime</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">24/7</div>
                  <div className="indicator-label">Support Available</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Marsstein. Professional Compliance Standards.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernCompliance;