import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Crown, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Lock,
  Database,
  Network,
  Globe,
  Star,
  Search,
  Bot,
  Layers,
  FileCheck,
  TrendingUp,
  Users,
  Gem
} from 'lucide-react';
import './LuxuriousTrust.css';

const LuxuriousTrust: React.FC = () => {
  const [trustIndex, setTrustIndex] = useState(0);
  const [premiumLevel, setPremiumLevel] = useState(0);
  const [exclusiveAccess, setExclusiveAccess] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTrustIndex(98.9);
      setPremiumLevel(96.7);
      setExclusiveAccess(99.2);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const luxuriousCapabilities = [
    {
      icon: Crown,
      title: "Executive Trust Suite",
      description: "Exklusive Premium-Compliance für C-Level Executives. Persönlicher Service, vertrauliche Beratung und höchste Diskretion für Ihre strategischen Entscheidungen.",
      progress: 98.9,
      color: "premium"
    },
    {
      icon: Gem,
      title: "Platinum Security Standards",
      description: "Banking-Grade Verschlüsselung mit Luxus-Service-Level. Ihre sensiblen Daten erhalten den Schutz, den sie verdienen – diskret und zuverlässig.",
      progress: 99.2,
      color: "luxury"
    },
    {
      icon: Award,
      title: "White-Glove Compliance",
      description: "Persönlicher Compliance-Concierge für individuelle Betreuung. Maßgeschneiderte Lösungen mit dem Service-Level einer Privatbank.",
      progress: 96.7,
      color: "elegance"
    },
    {
      icon: Star,
      title: "Elite Advisory Network",
      description: "Exklusiver Zugang zu Top-Rechtsexperten und Compliance-Strategen. Ihr persönliches Netzwerk für strategische Rechtsberatung auf höchstem Niveau.",
      progress: 97.8,
      color: "excellence"
    }
  ];

  const luxuriousTechStack = [
    { name: "Executive Command Center", status: "premium-active", nodes: 1847 },
    { name: "Platinum Security Vault", status: "luxury-secured", nodes: 2928 },
    { name: "White-Glove Service API", status: "elegance-processing", nodes: 4247 },
    { name: "Elite Advisory Portal", status: "excellence-consulting", nodes: 1456 },
    { name: "Premium Analytics Suite", status: "premium-optimized", nodes: 2189 },
    { name: "Luxury Reporting Engine", status: "luxury-active", nodes: 1634 }
  ];

  const luxuriousMetrics = [
    { label: "Trust Index", value: trustIndex, unit: "%" },
    { label: "Premium Level", value: premiumLevel, unit: "%" },
    { label: "Exclusive Access", value: exclusiveAccess, unit: "%" },
    { label: "Response Time", value: 15, unit: "min" }
  ];

  return (
    <div className="luxurious-trust">
      {/* Luxurious Header */}
      <header className="luxurious-header">
        <div className="luxurious-container">
          <nav className="luxurious-nav">
            <div className="luxurious-logo">
              <div className="trust-crown">
                <div className="crown-gems">
                  <div className="gem ruby"></div>
                  <div className="gem diamond"></div>
                  <div className="gem sapphire"></div>
                  <div className="gem emerald"></div>
                </div>
                <div className="crown-base"></div>
                <div className="paragraph-crown">§</div>
              </div>
              <span className="luxurious-brand">
                Mar<span className="luxurious-paragraph">§</span>tein
              </span>
              <div className="luxurious-tagline">Luxurious Trust</div>
            </div>
            
            <ul className="luxurious-nav-menu">
              <li><a href="#executive">Executive Suite</a></li>
              <li><a href="#platinum">Platinum Service</a></li>
              <li><a href="#concierge">White-Glove</a></li>
              <li><a href="#elite">Elite Advisory</a></li>
            </ul>
            
            <div className="luxurious-status">
              <div className="trust-indicators">
                <div className="luxury-meters">
                  <div className="luxury-meter premium"></div>
                  <div className="luxury-meter luxury"></div>
                  <div className="luxury-meter elegance"></div>
                  <div className="luxury-meter excellence"></div>
                </div>
                <div className="luxurious-label">Premium Services Active</div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="luxurious-hero">
        <div className="luxurious-container">
          <div className="luxurious-badge">
            <Crown className="w-4 h-4" />
            Premium Executive Trust
          </div>
          
          <h1 className="luxurious-title">
            Compliance mit aristokratischer Eleganz
            <span className="luxurious-highlight">Luxurious Trust</span>
          </h1>
          
          <p className="luxurious-subtitle">
            Exklusive Compliance-Services für anspruchsvolle Unternehmer. 
            Wo Premium-Qualität auf diskrete Professionalität trifft – für Executives, die das Beste erwarten.
          </p>

          <div className="luxurious-hero-actions">
            <Button className="luxurious-primary-btn">
              <Crown className="w-4 h-4 mr-2" />
              Executive Suite aktivieren
            </Button>
            <Button variant="outline" className="luxurious-secondary-btn">
              Premium Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Luxurious Metrics */}
          <div className="luxurious-metrics">
            {luxuriousMetrics.map((metric, index) => (
              <div key={index} className="luxurious-metric-display">
                <div className="luxurious-metric-value">{metric.value}{metric.unit}</div>
                <div className="luxurious-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxurious Capabilities */}
      <section className="luxurious-capabilities">
        <div className="luxurious-container">
          <div className="capabilities-header">
            <Badge className="luxurious-badge">Premium Excellence</Badge>
            <h2>Exklusive Trust-Architektur</h2>
            <p>Wo aristokratische Eleganz auf moderne Compliance-Technologie trifft</p>
          </div>
          
          <div className="capabilities-grid">
            {luxuriousCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className={`luxurious-capability-card ${capability.color}`}>
                  <div className="capability-header">
                    <div className="capability-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="capability-progress">
                      <div className="luxurious-progress-ring">
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
                            className="luxurious-circle"
                            strokeDasharray={`${capability.progress}, 100`}
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="3"
                          />
                        </svg>
                        <div className="luxurious-progress-text">{capability.progress}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-description">{capability.description}</p>
                  
                  <div className="capability-footer">
                    <Progress 
                      value={capability.progress} 
                      className="luxurious-capability-bar"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Luxurious Network Visualization */}
      <section className="luxurious-network">
        <div className="luxurious-container">
          <Card className="luxurious-network-visualization">
            <div className="network-header">
              <div className="luxurious-network-icon">
                <Network className="w-8 h-8" />
              </div>
              <div>
                <h3>Premium Trust Network</h3>
                <p>Exklusive Übersicht des Elite-Compliance-Ökosystems</p>
              </div>
            </div>
            
            <div className="luxurious-tech-stack">
              {luxuriousTechStack.map((tech, index) => (
                <div key={index} className="luxurious-tech-node">
                  <div className={`luxurious-node-status ${tech.status}`}></div>
                  <span className="luxurious-tech-name">{tech.name}</span>
                  <div className="luxurious-node-count">{tech.nodes} Premium</div>
                </div>
              ))}
            </div>
            
            <div className="luxurious-network-actions">
              <Button variant="outline" className="luxurious-network-btn">
                <Search className="w-4 h-4 mr-2" />
                Executive Scan
              </Button>
              <Button variant="outline" className="luxurious-network-btn">
                <Bot className="w-4 h-4 mr-2" />
                Premium Concierge
              </Button>
              <Button variant="outline" className="luxurious-network-btn">
                <Layers className="w-4 h-4 mr-2" />
                Elite Analysis
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Luxurious CTA */}
      <section className="luxurious-cta">
        <div className="luxurious-container">
          <Card className="luxurious-cta-card">
            <div className="luxurious-cta-content">
              <div className="cta-content">
                <h2>Bereit für Luxurious Trust?</h2>
                <p>
                  Erleben Sie Compliance-Service auf höchstem Niveau. Wo aristokratische Eleganz, 
                  diskrete Professionalität und Premium-Technologie zur ultimativen Executive-Erfahrung verschmelzen.
                </p>
                
                <div className="cta-actions">
                  <Button className="luxurious-primary-btn">
                    <Crown className="w-4 h-4 mr-2" />
                    Executive Membership
                  </Button>
                  <Button variant="outline" className="luxurious-secondary-btn">
                    Premium Consultation
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="luxurious-footer">
        <div className="luxurious-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="luxurious-logo">
                <div className="trust-crown">
                  <div className="crown-gems">
                    <div className="gem ruby"></div>
                    <div className="gem diamond"></div>
                    <div className="gem sapphire"></div>
                    <div className="gem emerald"></div>
                  </div>
                  <div className="crown-base"></div>
                  <div className="paragraph-crown">§</div>
                </div>
                <span className="luxurious-brand">
                  Mar<span className="luxurious-paragraph">§</span>tein
                </span>
              </div>
              <p className="footer-tagline">
                Premium Executive Trust & Sophistication
              </p>
            </div>
            
            <div className="footer-tech">
              <div className="luxurious-tech-indicators">
                <div className="indicator">
                  <div className="indicator-value">98.9%</div>
                  <div className="indicator-label">Trust Index</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">24/7</div>
                  <div className="indicator-label">Concierge Service</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">VIP</div>
                  <div className="indicator-label">Executive Access</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Marsstein. Premium Executive Trust & Sophistication.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LuxuriousTrust;