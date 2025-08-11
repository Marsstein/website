import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  CheckCircle, 
  Users, 
  FileCheck, 
  TrendingUp, 
  ArrowRight, 
  Lock,
  Globe,
  Award,
  Star,
  Search,
  Settings,
  Layers,
  Bot,
  Target,
  Zap
} from 'lucide-react';
import './MarssteinCore.css';

const MarssteinCore: React.FC = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [auditSuccess, setAuditSuccess] = useState(0);
  const [riskReduction, setRiskReduction] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplianceScore(98.4);
      setAuditSuccess(96.7);
      setRiskReduction(94.2);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const coreCapabilities = [
    {
      icon: Shield,
      title: "Sicherheit & Schutz",
      description: "Felsfeste Compliance-Sicherheit mit kraftvoller Verteidigung. Marsstein verbindet römische Stärke mit steinerner Beständigkeit für ultimative Rechtssicherheit.",
      progress: 98.4,
      color: "security"
    },
    {
      icon: CheckCircle,
      title: "Klarheit & Präzision",
      description: "Kristallklare Compliance-Prozesse mit präziser Geometrie. Jeder Audit-Schritt transparent und nachvollziehbar für maximale Rechtskonformität.",
      progress: 96.7,
      color: "clarity"
    },
    {
      icon: TrendingUp,
      title: "Zukunftsfähigkeit",
      description: "Fortschrittliche Compliance-Technologie für morgige Herausforderungen. Innovation trifft auf bewährte Stabilität für nachhaltigen Erfolg.",
      progress: 94.2,
      color: "future"
    },
    {
      icon: Users,
      title: "Partnerschaftlich",
      description: "Gemeinsam stark - kompetente Begleitung auf Augenhöhe. Marsstein steht für vertrauensvolle Zusammenarbeit und nachhaltige Partnerschaften.",
      progress: 97.1,
      color: "partnership"
    }
  ];

  const coreServices = [
    { name: "Compliance Vault", status: "security-active", metric: "98.4%" },
    { name: "Audit Engine", status: "clarity-optimized", metric: "96.7%" },
    { name: "Future Analytics", status: "future-processing", metric: "94.2%" },
    { name: "Partner Portal", status: "partnership-connected", metric: "97.1%" },
    { name: "Risk Monitor", status: "security-scanning", metric: "95.8%" },
    { name: "Compliance Academy", status: "clarity-teaching", metric: "98.9%" }
  ];

  const coreMetrics = [
    { label: "Compliance Score", value: complianceScore, unit: "%" },
    { label: "Audit Success", value: auditSuccess, unit: "%" },
    { label: "Risk Reduction", value: riskReduction, unit: "%" },
    { label: "Uptime", value: 99.9, unit: "%" }
  ];

  return (
    <div className="marsstein-core">
      {/* Marsstein Core Header */}
      <header className="marsstein-core-header">
        <div className="marsstein-core-container">
          <nav className="marsstein-core-nav">
            <div className="marsstein-core-logo">
              <div className="mars-shield">
                <div className="shield-geometry">
                  <div className="shield-outer"></div>
                  <div className="shield-middle"></div>
                  <div className="shield-inner"></div>
                </div>
                <div className="shield-core">
                  <div className="check-mark">✓</div>
                </div>
              </div>
              <span className="marsstein-core-brand">
                MARSSTEIN
              </span>
              <div className="marsstein-core-tagline">Compliance. Felsfest. Fortschrittlich.</div>
            </div>
            
            <ul className="marsstein-core-nav-menu">
              <li><a href="#sicherheit">Sicherheit</a></li>
              <li><a href="#klarheit">Klarheit</a></li>
              <li><a href="#zukunft">Zukunft</a></li>
              <li><a href="#partnerschaft">Partnerschaft</a></li>
            </ul>
            
            <div className="marsstein-core-status">
              <div className="core-indicators">
                <div className="status-segments">
                  <div className="segment security"></div>
                  <div className="segment clarity"></div>
                  <div className="segment future"></div>
                  <div className="segment partnership"></div>
                </div>
                <div className="marsstein-core-label">Alle Systeme Aktiv</div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="marsstein-core-hero">
        <div className="marsstein-core-container">
          <div className="marsstein-core-badge">
            <Shield className="w-4 h-4" />
            Felsfeste Compliance-Sicherheit
          </div>
          
          <h1 className="marsstein-core-title">
            Compliance auf festem Fundament
            <span className="marsstein-core-highlight">Felsfest. Fortschrittlich.</span>
          </h1>
          
          <p className="marsstein-core-subtitle">
            Marsstein vereint kraftvollen Schutz mit verlässlicher Basis. Wo römische Stärke auf 
            steinerne Beständigkeit trifft – für Compliance, die Generationen überdauert.
          </p>

          <div className="marsstein-core-hero-actions">
            <Button className="marsstein-core-primary-btn">
              <Shield className="w-4 h-4 mr-2" />
              Compliance starten
            </Button>
            <Button variant="outline" className="marsstein-core-secondary-btn">
              Fundament erkunden
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Core Metrics */}
          <div className="marsstein-core-metrics">
            {coreMetrics.map((metric, index) => (
              <div key={index} className="marsstein-core-metric-display">
                <div className="marsstein-core-metric-value">{metric.value}{metric.unit}</div>
                <div className="marsstein-core-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="marsstein-core-capabilities">
        <div className="marsstein-core-container">
          <div className="capabilities-header">
            <Badge className="marsstein-core-badge">Markenkern & Leitmotiv</Badge>
            <h2>Felsfeste Compliance-Architektur</h2>
            <p>Kraftvoller Schutz trifft auf verlässliche Basis</p>
          </div>
          
          <div className="capabilities-grid">
            {coreCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className={`marsstein-core-capability-card ${capability.color}`}>
                  <div className="capability-header">
                    <div className="capability-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="capability-progress">
                      <div className="marsstein-core-progress-ring">
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
                            className="marsstein-core-circle"
                            strokeDasharray={`${capability.progress}, 100`}
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="3"
                          />
                        </svg>
                        <div className="marsstein-core-progress-text">{capability.progress}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-description">{capability.description}</p>
                  
                  <div className="capability-footer">
                    <Progress 
                      value={capability.progress} 
                      className="marsstein-core-capability-bar"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="marsstein-core-services">
        <div className="marsstein-core-container">
          <Card className="marsstein-core-services-visualization">
            <div className="services-header">
              <div className="marsstein-core-services-icon">
                <Settings className="w-8 h-8" />
              </div>
              <div>
                <h3>Compliance-Orbit System</h3>
                <p>Kontinuierliche Überwachung aller Compliance-Bereiche</p>
              </div>
            </div>
            
            <div className="marsstein-core-services-stack">
              {coreServices.map((service, index) => (
                <div key={index} className="marsstein-core-service-node">
                  <div className={`marsstein-core-node-status ${service.status}`}></div>
                  <span className="marsstein-core-service-name">{service.name}</span>
                  <div className="marsstein-core-service-metric">{service.metric}</div>
                </div>
              ))}
            </div>
            
            <div className="marsstein-core-services-actions">
              <Button variant="outline" className="marsstein-core-services-btn">
                <Search className="w-4 h-4 mr-2" />
                System Scan
              </Button>
              <Button variant="outline" className="marsstein-core-services-btn">
                <Bot className="w-4 h-4 mr-2" />
                Compliance Assistant
              </Button>
              <Button variant="outline" className="marsstein-core-services-btn">
                <Layers className="w-4 h-4 mr-2" />
                Vollständige Analyse
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Core CTA */}
      <section className="marsstein-core-cta">
        <div className="marsstein-core-container">
          <Card className="marsstein-core-cta-card">
            <div className="marsstein-core-cta-content">
              <div className="cta-content">
                <h2>Bereit für felsfeste Compliance?</h2>
                <p>
                  Erleben Sie Compliance auf steinerner Basis. Wo kraftvoller Schutz auf verlässliche 
                  Beständigkeit trifft – für Unternehmen, die auf Generationen bauen.
                </p>
                
                <div className="cta-actions">
                  <Button className="marsstein-core-primary-btn">
                    <Shield className="w-4 h-4 mr-2" />
                    Fundament legen
                  </Button>
                  <Button variant="outline" className="marsstein-core-secondary-btn">
                    Partnerschaft starten
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="marsstein-core-footer">
        <div className="marsstein-core-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="marsstein-core-logo">
                <div className="mars-shield">
                  <div className="shield-geometry">
                    <div className="shield-outer"></div>
                    <div className="shield-middle"></div>
                    <div className="shield-inner"></div>
                  </div>
                  <div className="shield-core">
                    <div className="check-mark">✓</div>
                  </div>
                </div>
                <span className="marsstein-core-brand">
                  MARSSTEIN
                </span>
              </div>
              <p className="footer-tagline">
                Compliance. Felsfest. Fortschrittlich.
              </p>
            </div>
            
            <div className="footer-services">
              <div className="marsstein-core-services-indicators">
                <div className="indicator">
                  <div className="indicator-value">98.4%</div>
                  <div className="indicator-label">Compliance Score</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">24/7</div>
                  <div className="indicator-label">Überwachung</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">∞</div>
                  <div className="indicator-label">Beständigkeit</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Marsstein. Compliance. Felsfest. Fortschrittlich.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarssteinCore;