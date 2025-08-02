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
  Zap,
  Moon,
  Eye,
  Orbit
} from 'lucide-react';
import './MarssteinMidnight.css';

const MarssteinMidnight: React.FC = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [auditSuccess, setAuditSuccess] = useState(0);
  const [riskReduction, setRiskReduction] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplianceScore(97.8);
      setAuditSuccess(98.1);
      setRiskReduction(95.9);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const midnightCapabilities = [
    {
      icon: Moon,
      title: "Midnight Intelligence",
      description: "Tiefste Nacht-Analytik mit Aurora-Beleuchtung. Durchdringende Compliance-Intelligenz für komplexeste Herausforderungen im Schatten der Regularien.",
      progress: 97.8,
      color: "midnight"
    },
    {
      icon: Eye,
      title: "Aurora Vision",
      description: "Nordlicht-Klarheit durchleuchtet jede Compliance-Schicht. Kristallklare Sicht auf Risiken mit der Schönheit des Polarlichts.",
      progress: 98.1,
      color: "aurora"
    },
    {
      icon: Orbit,
      title: "Stein-Slice Navigation",
      description: "3D-Steinscheiben rotieren durch Compliance-Dimensionen. Präzise Navigation durch komplexe Regelwerke mit steinerner Beständigkeit.",
      progress: 95.9,
      color: "slice"
    },
    {
      icon: Shield,
      title: "Midnight Protection",
      description: "Nächtlicher Schutz mit Aurora-Kraft. Unerschütterliche Sicherheit in den dunkelsten Stunden der Compliance-Herausforderungen.",
      progress: 96.5,
      color: "protection"
    }
  ];

  const midnightServices = [
    { name: "Aurora Sentinel", status: "midnight-active", metric: "97.8%" },
    { name: "Stone Slice Engine", status: "aurora-rotating", metric: "98.1%" },
    { name: "Midnight Analytics", status: "slice-processing", metric: "95.9%" },
    { name: "Polar Guardian", status: "protection-watching", metric: "96.5%" },
    { name: "Northern Lights AI", status: "aurora-illuminating", metric: "98.7%" },
    { name: "Dark Matter Vault", status: "midnight-secured", metric: "99.2%" }
  ];

  const midnightMetrics = [
    { label: "Midnight Score", value: complianceScore, unit: "%" },
    { label: "Aurora Vision", value: auditSuccess, unit: "%" },
    { label: "Stone Shield", value: riskReduction, unit: "%" },
    { label: "Dark Uptime", value: 99.97, unit: "%" }
  ];

  return (
    <div className="marsstein-midnight">
      {/* Marsstein Midnight Header */}
      <header className="marsstein-midnight-header">
        <div className="marsstein-midnight-container">
          <nav className="marsstein-midnight-nav">
            <div className="marsstein-midnight-logo">
              <div className="midnight-stein">
                <div className="stein-orbit">
                  <div className="orbit-ring outer-ring"></div>
                  <div className="orbit-ring middle-ring"></div>
                  <div className="orbit-ring inner-ring"></div>
                </div>
                <div className="stein-core">
                  <div className="aurora-slice slice-1"></div>
                  <div className="aurora-slice slice-2"></div>
                  <div className="aurora-slice slice-3"></div>
                  <div className="midnight-paragraph">§</div>
                </div>
              </div>
              <span className="marsstein-midnight-brand">
                MAR§TEIN
              </span>
              <div className="marsstein-midnight-tagline">Midnight. Aurora. Eternal.</div>
            </div>
            
            <ul className="marsstein-midnight-nav-menu">
              <li><a href="#midnight">Midnight</a></li>
              <li><a href="#aurora">Aurora</a></li>
              <li><a href="#slice">Stein-Slice</a></li>
              <li><a href="#orbit">Orbit</a></li>
            </ul>
            
            <div className="marsstein-midnight-status">
              <div className="midnight-indicators">
                <div className="aurora-waves">
                  <div className="wave midnight-wave"></div>
                  <div className="wave aurora-wave"></div>
                  <div className="wave slice-wave"></div>
                  <div className="wave orbit-wave"></div>
                </div>
                <div className="marsstein-midnight-label">Aurora Active</div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="marsstein-midnight-hero">
        <div className="marsstein-midnight-container">
          <div className="marsstein-midnight-badge">
            <Moon className="w-4 h-4" />
            Midnight Intelligence mit Aurora-Kraft
          </div>
          
          <h1 className="marsstein-midnight-title">
            Compliance in der Tiefe der Nacht
            <span className="marsstein-midnight-highlight">Aurora. Erwacht.</span>
          </h1>
          
          <p className="marsstein-midnight-subtitle">
            Wo Mitternacht auf Nordlicht trifft. Marsstein Midnight durchleuchtet die dunkelsten 
            Compliance-Herausforderungen mit der strahlenden Kraft der Aurora Borealis.
          </p>

          <div className="marsstein-midnight-hero-actions">
            <Button className="marsstein-midnight-primary-btn">
              <Moon className="w-4 h-4 mr-2" />
              Midnight starten
            </Button>
            <Button variant="outline" className="marsstein-midnight-secondary-btn">
              Aurora erkunden
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Midnight Metrics */}
          <div className="marsstein-midnight-metrics">
            {midnightMetrics.map((metric, index) => (
              <div key={index} className="marsstein-midnight-metric-display">
                <div className="marsstein-midnight-metric-value">{metric.value}{metric.unit}</div>
                <div className="marsstein-midnight-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Midnight Capabilities */}
      <section className="marsstein-midnight-capabilities">
        <div className="marsstein-midnight-container">
          <div className="capabilities-header">
            <Badge className="marsstein-midnight-badge">Midnight × Aurora Power</Badge>
            <h2>Nächtliche Compliance-Aurora</h2>
            <p>Tiefste Intelligenz trifft auf strahlende Klarheit</p>
          </div>
          
          <div className="capabilities-grid">
            {midnightCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className={`marsstein-midnight-capability-card ${capability.color}`}>
                  <div className="capability-header">
                    <div className="capability-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="capability-progress">
                      <div className="marsstein-midnight-progress-ring">
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
                            className="marsstein-midnight-circle"
                            strokeDasharray={`${capability.progress}, 100`}
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="3"
                          />
                        </svg>
                        <div className="marsstein-midnight-progress-text">{capability.progress}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-description">{capability.description}</p>
                  
                  <div className="capability-footer">
                    <Progress 
                      value={capability.progress} 
                      className="marsstein-midnight-capability-bar"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Midnight Systems */}
      <section className="marsstein-midnight-systems">
        <div className="marsstein-midnight-container">
          <Card className="marsstein-midnight-systems-visualization">
            <div className="systems-header">
              <div className="marsstein-midnight-systems-icon">
                <Orbit className="w-8 h-8" />
              </div>
              <div>
                <h3>Midnight Orbit System</h3>
                <p>Aurora-illuminierte Stein-Slice Rotation</p>
              </div>
            </div>
            
            <div className="marsstein-midnight-systems-stack">
              {midnightServices.map((service, index) => (
                <div key={index} className="marsstein-midnight-system-node">
                  <div className={`marsstein-midnight-node-status ${service.status}`}></div>
                  <span className="marsstein-midnight-system-name">{service.name}</span>
                  <div className="marsstein-midnight-system-metric">{service.metric}</div>
                </div>
              ))}
            </div>
            
            <div className="marsstein-midnight-systems-actions">
              <Button variant="outline" className="marsstein-midnight-systems-btn">
                <Search className="w-4 h-4 mr-2" />
                Midnight Scan
              </Button>
              <Button variant="outline" className="marsstein-midnight-systems-btn">
                <Eye className="w-4 h-4 mr-2" />
                Aurora Vision
              </Button>
              <Button variant="outline" className="marsstein-midnight-systems-btn">
                <Orbit className="w-4 h-4 mr-2" />
                Stein-Slice Control
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Midnight CTA */}
      <section className="marsstein-midnight-cta">
        <div className="marsstein-midnight-container">
          <Card className="marsstein-midnight-cta-card">
            <div className="marsstein-midnight-cta-content">
              <div className="cta-content">
                <h2>Bereit für Midnight Aurora?</h2>
                <p>
                  Tauchen Sie ein in die Tiefe der Nacht, wo Aurora-Klarheit die komplexesten 
                  Compliance-Herausforderungen erhellt. Marsstein Midnight - wo Dunkelheit zu Licht wird.
                </p>
                
                <div className="cta-actions">
                  <Button className="marsstein-midnight-primary-btn">
                    <Moon className="w-4 h-4 mr-2" />
                    Midnight aktivieren
                  </Button>
                  <Button variant="outline" className="marsstein-midnight-secondary-btn">
                    Aurora entfesseln
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="marsstein-midnight-footer">
        <div className="marsstein-midnight-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="marsstein-midnight-logo">
                <div className="midnight-stein">
                  <div className="stein-orbit">
                    <div className="orbit-ring outer-ring"></div>
                    <div className="orbit-ring middle-ring"></div>
                    <div className="orbit-ring inner-ring"></div>
                  </div>
                  <div className="stein-core">
                    <div className="aurora-slice slice-1"></div>
                    <div className="aurora-slice slice-2"></div>
                    <div className="aurora-slice slice-3"></div>
                    <div className="midnight-paragraph">§</div>
                  </div>
                </div>
                <span className="marsstein-midnight-brand">
                  MAR§TEIN
                </span>
              </div>
              <p className="footer-tagline">
                Midnight. Aurora. Eternal.
              </p>
            </div>
            
            <div className="footer-services">
              <div className="marsstein-midnight-systems-indicators">
                <div className="indicator">
                  <div className="indicator-value">97.8%</div>
                  <div className="indicator-label">Midnight Intelligence</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">∞</div>
                  <div className="indicator-label">Aurora Power</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">3D</div>
                  <div className="indicator-label">Stein-Slice</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Marsstein Midnight. Aurora erwacht in ewiger Nacht.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarssteinMidnight;