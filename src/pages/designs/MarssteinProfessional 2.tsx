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
  Briefcase,
  Scale,
  Crown,
  Compass
} from 'lucide-react';
import './MarssteinProfessional.css';

const MarssteinProfessional: React.FC = () => {
  const [complianceScore, setComplianceScore] = useState(0);
  const [auditSuccess, setAuditSuccess] = useState(0);
  const [riskReduction, setRiskReduction] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplianceScore(98.9);
      setAuditSuccess(97.3);
      setRiskReduction(96.8);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const professionalCapabilities = [
    {
      icon: Briefcase,
      title: "Professional Excellence",
      description: "Höchste professionelle Standards mit Dunkelblau-Violett Eleganz. Executive-Level Compliance für Führungskräfte mit königlicher Ausstrahlung.",
      progress: 98.9,
      color: "professional"
    },
    {
      icon: Scale,
      title: "Legal Authority",
      description: "Violette Rechtsautorität mit königlicher Macht. Unerschütterliche Rechtssicherheit mit der Würde und Kraft einer Krone.",
      progress: 97.3,
      color: "authority"
    },
    {
      icon: Crown,
      title: "Executive Crown",
      description: "Königliche Compliance-Herrschaft in Violett-Tönen. C-Level Leadership mit imperialer Ausstrahlung und absoluter Kontrolle.",
      progress: 96.8,
      color: "crown"
    },
    {
      icon: Compass,
      title: "Strategic Navigation",
      description: "Strategische Führung durch Compliance-Königreiche. Präzise Navigation mit königlicher Weitsicht und professioneller Exzellenz.",
      progress: 97.9,
      color: "navigation"
    }
  ];

  const professionalServices = [
    { name: "Executive Shield", status: "professional-active", metric: "98.9%" },
    { name: "Legal Crown Engine", status: "authority-commanding", metric: "97.3%" },
    { name: "Royal Compliance", status: "crown-reigning", metric: "96.8%" },
    { name: "Strategic Compass", status: "navigation-guiding", metric: "97.9%" },
    { name: "Imperial Analytics", status: "professional-processing", metric: "98.1%" },
    { name: "Sovereign Vault", status: "authority-secured", metric: "99.4%" }
  ];

  const professionalMetrics = [
    { label: "Professional Score", value: complianceScore, unit: "%" },
    { label: "Legal Authority", value: auditSuccess, unit: "%" },
    { label: "Executive Shield", value: riskReduction, unit: "%" },
    { label: "Royal Uptime", value: 99.98, unit: "%" }
  ];

  return (
    <div className="marsstein-professional">
      {/* Marsstein Professional Header */}
      <header className="marsstein-professional-header">
        <div className="marsstein-professional-container">
          <nav className="marsstein-professional-nav">
            <div className="marsstein-professional-logo">
              <div className="professional-crown">
                <div className="crown-structure">
                  <div className="crown-base"></div>
                  <div className="crown-peaks">
                    <div className="peak peak-1"></div>
                    <div className="peak peak-2"></div>
                    <div className="peak peak-3"></div>
                    <div className="peak peak-4"></div>
                    <div className="peak peak-5"></div>
                  </div>
                  <div className="crown-gems">
                    <div className="gem gem-center"></div>
                    <div className="gem gem-left"></div>
                    <div className="gem gem-right"></div>
                  </div>
                </div>
                <div className="professional-paragraph">§</div>
              </div>
              <span className="marsstein-professional-brand">
                MAR§TEIN
              </span>
              <div className="marsstein-professional-tagline">Professional. Royal. Sovereign.</div>
            </div>
            
            <ul className="marsstein-professional-nav-menu">
              <li><a href="#professional">Professional</a></li>
              <li><a href="#authority">Authority</a></li>
              <li><a href="#crown">Crown</a></li>
              <li><a href="#navigation">Navigation</a></li>
            </ul>
            
            <div className="marsstein-professional-status">
              <div className="professional-indicators">
                <div className="royal-bars">
                  <div className="bar professional-bar"></div>
                  <div className="bar authority-bar"></div>
                  <div className="bar crown-bar"></div>
                  <div className="bar navigation-bar"></div>
                </div>
                <div className="marsstein-professional-label">Royal Status</div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="marsstein-professional-hero">
        <div className="marsstein-professional-container">
          <div className="marsstein-professional-badge">
            <Crown className="w-4 h-4" />
            Professional Excellence mit Royal Authority
          </div>
          
          <h1 className="marsstein-professional-title">
            Compliance für die Führungsebene
            <span className="marsstein-professional-highlight">Royal. Sovereign.</span>
          </h1>
          
          <p className="marsstein-professional-subtitle">
            Wo Professional Excellence auf Royal Authority trifft. Marsstein Professional - 
            die königliche Lösung für C-Level Compliance mit imperialer Ausstrahlung.
          </p>

          <div className="marsstein-professional-hero-actions">
            <Button className="marsstein-professional-primary-btn">
              <Crown className="w-4 h-4 mr-2" />
              Royal starten
            </Button>
            <Button variant="outline" className="marsstein-professional-secondary-btn">
              Authority erkunden
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Professional Metrics */}
          <div className="marsstein-professional-metrics">
            {professionalMetrics.map((metric, index) => (
              <div key={index} className="marsstein-professional-metric-display">
                <div className="marsstein-professional-metric-value">{metric.value}{metric.unit}</div>
                <div className="marsstein-professional-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Capabilities */}
      <section className="marsstein-professional-capabilities">
        <div className="marsstein-professional-container">
          <div className="capabilities-header">
            <Badge className="marsstein-professional-badge">Royal × Professional Power</Badge>
            <h2>Königliche Compliance-Exzellenz</h2>
            <p>Professional Standards mit Royal Authority</p>
          </div>
          
          <div className="capabilities-grid">
            {professionalCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className={`marsstein-professional-capability-card ${capability.color}`}>
                  <div className="capability-header">
                    <div className="capability-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="capability-progress">
                      <div className="marsstein-professional-progress-ring">
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
                            className="marsstein-professional-circle"
                            strokeDasharray={`${capability.progress}, 100`}
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="3"
                          />
                        </svg>
                        <div className="marsstein-professional-progress-text">{capability.progress}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-description">{capability.description}</p>
                  
                  <div className="capability-footer">
                    <Progress 
                      value={capability.progress} 
                      className="marsstein-professional-capability-bar"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Professional Systems */}
      <section className="marsstein-professional-systems">
        <div className="marsstein-professional-container">
          <Card className="marsstein-professional-systems-visualization">
            <div className="systems-header">
              <div className="marsstein-professional-systems-icon">
                <Compass className="w-8 h-8" />
              </div>
              <div>
                <h3>Royal Command System</h3>
                <p>Professional Excellence mit Crown Authority</p>
              </div>
            </div>
            
            <div className="marsstein-professional-systems-stack">
              {professionalServices.map((service, index) => (
                <div key={index} className="marsstein-professional-system-node">
                  <div className={`marsstein-professional-node-status ${service.status}`}></div>
                  <span className="marsstein-professional-system-name">{service.name}</span>
                  <div className="marsstein-professional-system-metric">{service.metric}</div>
                </div>
              ))}
            </div>
            
            <div className="marsstein-professional-systems-actions">
              <Button variant="outline" className="marsstein-professional-systems-btn">
                <Search className="w-4 h-4 mr-2" />
                Royal Scan
              </Button>
              <Button variant="outline" className="marsstein-professional-systems-btn">
                <Scale className="w-4 h-4 mr-2" />
                Legal Authority
              </Button>
              <Button variant="outline" className="marsstein-professional-systems-btn">
                <Crown className="w-4 h-4 mr-2" />
                Crown Control
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Professional CTA */}
      <section className="marsstein-professional-cta">
        <div className="marsstein-professional-container">
          <Card className="marsstein-professional-cta-card">
            <div className="marsstein-professional-cta-content">
              <div className="cta-content">
                <h2>Bereit für Royal Authority?</h2>
                <p>
                  Steigen Sie auf zum Compliance-Königreich. Wo Professional Excellence auf 
                  Royal Authority trifft - für Führungskräfte, die königliche Standards erwarten.
                </p>
                
                <div className="cta-actions">
                  <Button className="marsstein-professional-primary-btn">
                    <Crown className="w-4 h-4 mr-2" />
                    Krone aufsetzen
                  </Button>
                  <Button variant="outline" className="marsstein-professional-secondary-btn">
                    Royal werden
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="marsstein-professional-footer">
        <div className="marsstein-professional-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="marsstein-professional-logo">
                <div className="professional-crown">
                  <div className="crown-structure">
                    <div className="crown-base"></div>
                    <div className="crown-peaks">
                      <div className="peak peak-1"></div>
                      <div className="peak peak-2"></div>
                      <div className="peak peak-3"></div>
                      <div className="peak peak-4"></div>
                      <div className="peak peak-5"></div>
                    </div>
                    <div className="crown-gems">
                      <div className="gem gem-center"></div>
                      <div className="gem gem-left"></div>
                      <div className="gem gem-right"></div>
                    </div>
                  </div>
                  <div className="professional-paragraph">§</div>
                </div>
                <span className="marsstein-professional-brand">
                  MAR§TEIN
                </span>
              </div>
              <p className="footer-tagline">
                Professional. Royal. Sovereign.
              </p>
            </div>
            
            <div className="footer-services">
              <div className="marsstein-professional-systems-indicators">
                <div className="indicator">
                  <div className="indicator-value">98.9%</div>
                  <div className="indicator-label">Professional Excellence</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">👑</div>
                  <div className="indicator-label">Royal Authority</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">∞</div>
                  <div className="indicator-label">Sovereign Power</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Marsstein Professional. Royal Authority. Sovereign Excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarssteinProfessional;