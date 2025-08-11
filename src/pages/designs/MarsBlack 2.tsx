import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Flame, 
  Skull, 
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
  Bot,
  Swords,
  Eye
} from 'lucide-react';
import './MarsBlack.css';

const MarsBlack: React.FC = () => {
  const [powerLevel, setPowerLevel] = useState(0);
  const [domination, setDomination] = useState(0);
  const [supremacy, setSupremacy] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPowerLevel(99.8);
      setDomination(98.9);
      setSupremacy(99.3);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const marsBlackCapabilities = [
    {
      icon: Flame,
      title: "Infernal Compliance",
      description: "Unerbittliche Compliance-Power mit der Kraft von Mars und der Tiefe der Dunkelheit. Absolute Kontrolle über alle Regulierungs-Prozesse.",
      progress: 99.8,
      color: "infernal"
    },
    {
      icon: Skull,
      title: "Dark Authority",
      description: "Unbestrittene Autorität in allen Compliance-Fragen. Wo andere versagen, herrschen wir. Totale Dominanz über Regularien und Standards.",
      progress: 98.9,
      color: "authority"
    },
    {
      icon: Swords,
      title: "Combat Readiness",
      description: "Kampfbereit für jede Audit-Schlacht. Unzerstörbare Verteidigung gegen alle Angriffe auf Ihre Compliance-Festung.",
      progress: 99.3,
      color: "combat"
    },
    {
      icon: Eye,
      title: "Absolute Vision",
      description: "Allsehende Überwachung aller Compliance-Aspekte. Nichts entgeht unserer dunklen Macht, kein Risiko bleibt unentdeckt.",
      progress: 97.6,
      color: "vision"
    }
  ];

  const marsBlackSystems = [
    { name: "Infernal Core Engine", status: "infernal-burning", power: "99.8%" },
    { name: "Dark Authority Matrix", status: "authority-commanding", power: "98.9%" },
    { name: "Combat Defense Grid", status: "combat-ready", power: "99.3%" },
    { name: "Vision Surveillance", status: "vision-watching", power: "97.6%" },
    { name: "Mars Domination Hub", status: "infernal-dominating", power: "99.1%" },
    { name: "Shadow Operations", status: "authority-executing", power: "98.4%" }
  ];

  const marsBlackMetrics = [
    { label: "Power Level", value: powerLevel, unit: "%" },
    { label: "Domination", value: domination, unit: "%" },
    { label: "Supremacy", value: supremacy, unit: "%" },
    { label: "Fear Factor", value: 10, unit: "/10" }
  ];

  return (
    <div className="mars-black">
      {/* Mars Black Header */}
      <header className="mars-black-header">
        <div className="mars-black-container">
          <nav className="mars-black-nav">
            <div className="mars-black-logo">
              <div className="mars-skull">
                <div className="skull-flames">
                  <div className="flame flame-1"></div>
                  <div className="flame flame-2"></div>
                  <div className="flame flame-3"></div>
                  <div className="flame flame-4"></div>
                </div>
                <div className="skull-core">
                  <div className="paragraph-infernal">§</div>
                </div>
                <div className="skull-eyes">
                  <div className="eye left-eye"></div>
                  <div className="eye right-eye"></div>
                </div>
              </div>
              <span className="mars-black-brand">
                Mar<span className="mars-black-paragraph">§</span>tein
              </span>
              <div className="mars-black-tagline">Dark Supremacy</div>
            </div>
            
            <ul className="mars-black-nav-menu">
              <li><a href="#infernal">Infernal</a></li>
              <li><a href="#authority">Authority</a></li>
              <li><a href="#combat">Combat</a></li>
              <li><a href="#vision">Vision</a></li>
            </ul>
            
            <div className="mars-black-status">
              <div className="dark-indicators">
                <div className="power-bars">
                  <div className="power-bar infernal"></div>
                  <div className="power-bar authority"></div>
                  <div className="power-bar combat"></div>
                  <div className="power-bar vision"></div>
                </div>
                <div className="mars-black-label">Total Domination</div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mars-black-hero">
        <div className="mars-black-container">
          <div className="mars-black-badge">
            <Flame className="w-4 h-4" />
            Infernal Mars Power
          </div>
          
          <h1 className="mars-black-title">
            Compliance mit dunkler Macht
            <span className="mars-black-highlight">Total Supremacy</span>
          </h1>
          
          <p className="mars-black-subtitle">
            Unbarmherzige Compliance-Dominanz. Wo Mars-Feuer auf absolute Dunkelheit trifft – 
            für Unternehmen, die totale Kontrolle fordern.
          </p>

          <div className="mars-black-hero-actions">
            <Button className="mars-black-primary-btn">
              <Flame className="w-4 h-4 mr-2" />
              Dunkle Macht entfesseln
            </Button>
            <Button variant="outline" className="mars-black-secondary-btn">
              Supremacy erleben
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mars Black Metrics */}
          <div className="mars-black-metrics">
            {marsBlackMetrics.map((metric, index) => (
              <div key={index} className="mars-black-metric-display">
                <div className="mars-black-metric-value">{metric.value}{metric.unit}</div>
                <div className="mars-black-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mars Black Capabilities */}
      <section className="mars-black-capabilities">
        <div className="mars-black-container">
          <div className="capabilities-header">
            <Badge className="mars-black-badge">Infernal Technology</Badge>
            <h2>Dunkle Compliance-Supremacy</h2>
            <p>Wo Mars-Feuer auf absolute Dunkelheit trifft</p>
          </div>
          
          <div className="capabilities-grid">
            {marsBlackCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className={`mars-black-capability-card ${capability.color}`}>
                  <div className="capability-header">
                    <div className="capability-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="capability-progress">
                      <div className="mars-black-progress-ring">
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
                            className="mars-black-circle"
                            strokeDasharray={`${capability.progress}, 100`}
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="3"
                          />
                        </svg>
                        <div className="mars-black-progress-text">{capability.progress}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-description">{capability.description}</p>
                  
                  <div className="capability-footer">
                    <Progress 
                      value={capability.progress} 
                      className="mars-black-capability-bar"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mars Black Systems */}
      <section className="mars-black-systems">
        <div className="mars-black-container">
          <Card className="mars-black-systems-visualization">
            <div className="systems-header">
              <div className="mars-black-systems-icon">
                <Settings className="w-8 h-8" />
              </div>
              <div>
                <h3>Dark Command Center</h3>
                <p>Totalüberwachung aller infernalen Compliance-Systeme</p>
              </div>
            </div>
            
            <div className="mars-black-systems-stack">
              {marsBlackSystems.map((system, index) => (
                <div key={index} className="mars-black-system-node">
                  <div className={`mars-black-node-status ${system.status}`}></div>
                  <span className="mars-black-system-name">{system.name}</span>
                  <div className="mars-black-system-power">{system.power}</div>
                </div>
              ))}
            </div>
            
            <div className="mars-black-systems-actions">
              <Button variant="outline" className="mars-black-systems-btn">
                <Search className="w-4 h-4 mr-2" />
                Dark Scan
              </Button>
              <Button variant="outline" className="mars-black-systems-btn">
                <Bot className="w-4 h-4 mr-2" />
                Infernal AI
              </Button>
              <Button variant="outline" className="mars-black-systems-btn">
                <Layers className="w-4 h-4 mr-2" />
                Total Analysis
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Mars Black CTA */}
      <section className="mars-black-cta">
        <div className="mars-black-container">
          <Card className="mars-black-cta-card">
            <div className="mars-black-cta-content">
              <div className="cta-content">
                <h2>Bereit für totale Supremacy?</h2>
                <p>
                  Entfesseln Sie die dunkle Macht der Mars-Compliance. Wo infernales Feuer auf absolute Kontrolle trifft – 
                  für Unternehmen, die totale Dominanz fordern.
                </p>
                
                <div className="cta-actions">
                  <Button className="mars-black-primary-btn">
                    <Flame className="w-4 h-4 mr-2" />
                    Dunkle Herrschaft beginnen
                  </Button>
                  <Button variant="outline" className="mars-black-secondary-btn">
                    Infernal Consultation
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="mars-black-footer">
        <div className="mars-black-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="mars-black-logo">
                <div className="mars-skull">
                  <div className="skull-flames">
                    <div className="flame flame-1"></div>
                    <div className="flame flame-2"></div>
                    <div className="flame flame-3"></div>
                    <div className="flame flame-4"></div>
                  </div>
                  <div className="skull-core">
                    <div className="paragraph-infernal">§</div>
                  </div>
                  <div className="skull-eyes">
                    <div className="eye left-eye"></div>
                    <div className="eye right-eye"></div>
                  </div>
                </div>
                <span className="mars-black-brand">
                  Mar<span className="mars-black-paragraph">§</span>tein
                </span>
              </div>
              <p className="footer-tagline">
                Infernal Mars Supremacy & Total Control
              </p>
            </div>
            
            <div className="footer-systems">
              <div className="mars-black-systems-indicators">
                <div className="indicator">
                  <div className="indicator-value">99.8%</div>
                  <div className="indicator-label">Power Level</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">∞</div>
                  <div className="indicator-label">Supremacy</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">24/7</div>
                  <div className="indicator-label">Dark Watch</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Marsstein. Infernal Mars Supremacy & Total Control.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MarsBlack;