import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Sparkles, 
  Heart, 
  CheckCircle2, 
  ArrowRight, 
  Lock,
  Globe,
  Zap,
  Users,
  Star,
  Leaf,
  Moon,
  Sun,
  Play,
  Award,
  Smile,
  Coffee,
  Home
} from 'lucide-react';
import './AppleLifestyle.css';

const AppleLifestyle: React.FC = () => {
  const [complianceHealth, setComplianceHealth] = useState(0);
  const [userSatisfaction, setUserSatisfaction] = useState(0);
  const [systemHarmony, setSystemHarmony] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setComplianceHealth(97.8);
      setUserSatisfaction(98.4);
      setSystemHarmony(96.9);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const lifestyleCapabilities = [
    {
      icon: Heart,
      title: "Compliance that Cares",
      description: "Compliance, die sich um Sie kümmert. Intelligente Automatisierung, die Ihre Arbeitsweise versteht und sich nahtlos in Ihren Alltag integriert.",
      progress: 97.8,
      color: "wellness"
    },
    {
      icon: Sparkles,
      title: "Effortless Excellence",
      description: "Mühelos professionell. Compliance-Prozesse so elegant und intuitiv gestaltet, dass sie zur natürlichen Erweiterung Ihrer Arbeitsweise werden.",
      progress: 98.4,
      color: "elegance"
    },
    {
      icon: Leaf,
      title: "Sustainable Security",
      description: "Nachhaltige Sicherheit für eine bessere Zukunft. Umweltbewusste Technologie mit minimaler Belastung und maximaler Effizienz.",
      progress: 96.9,
      color: "sustainability"
    },
    {
      icon: Globe,
      title: "Global Harmony",
      description: "Weltweite Harmonisierung Ihrer Compliance-Standards. Ein System, das überall funktioniert und lokale Besonderheiten respektiert.",
      progress: 95.6,
      color: "harmony"
    }
  ];

  const lifestyleExperiences = [
    { name: "Morning Compliance Check", status: "wellness-active", experience: "Peaceful Start" },
    { name: "Intelligent Work Flow", status: "elegance-optimized", experience: "Effortless Progress" },
    { name: "Sustainable Operations", status: "sustainability-running", experience: "Mindful Computing" },
    { name: "Evening Security Review", status: "harmony-complete", experience: "Restful Confidence" },
    { name: "Weekend Peace of Mind", status: "wellness-standby", experience: "True Relaxation" },
    { name: "Lifestyle Integration", status: "elegance-active", experience: "Natural Flow" }
  ];

  const lifestyleMetrics = [
    { label: "Compliance Health", value: complianceHealth, unit: "%" },
    { label: "User Satisfaction", value: userSatisfaction, unit: "%" },
    { label: "System Harmony", value: systemHarmony, unit: "%" },
    { label: "Daily Joy Index", value: 9.7, unit: "/10" }
  ];

  return (
    <div className="apple-lifestyle">
      {/* Apple Header */}
      <header className="apple-header">
        <div className="apple-container">
          <nav className="apple-nav">
            <div className="apple-logo">
              <div className="lifestyle-sphere">
                <div className="sphere-glow"></div>
                <div className="sphere-core">
                  <div className="paragraph-lifestyle">§</div>
                </div>
                <div className="sphere-rings">
                  <div className="ring wellness"></div>
                  <div className="ring elegance"></div>
                  <div className="ring sustainability"></div>
                </div>
              </div>
              <span className="apple-brand">
                Mar<span className="apple-paragraph">§</span>tein
              </span>
              <div className="apple-tagline">Designed by Life</div>
            </div>
            
            <ul className="apple-nav-menu">
              <li><a href="#wellness">Wellness</a></li>
              <li><a href="#elegance">Elegance</a></li>
              <li><a href="#sustainability">Sustainability</a></li>
              <li><a href="#harmony">Harmony</a></li>
            </ul>
            
            <div className="apple-experience">
              <div className="lifestyle-indicators">
                <div className="experience-dots">
                  <div className="dot wellness-dot"></div>
                  <div className="dot elegance-dot"></div>
                  <div className="dot sustainability-dot"></div>
                  <div className="dot harmony-dot"></div>
                </div>
                <div className="apple-label">Life in Balance</div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="apple-hero">
        <div className="apple-container">
          <div className="apple-badge">
            <Heart className="w-4 h-4" />
            Designed for Life
          </div>
          
          <h1 className="apple-title">
            Compliance, die Ihr Leben
            <span className="apple-highlight">bereichert</span>
          </h1>
          
          <p className="apple-subtitle">
            Erleben Sie Compliance neu. Nicht als Belastung, sondern als natürliche Erweiterung 
            Ihres Arbeitslebens. Elegant, intuitiv und menschlich.
          </p>

          <div className="apple-hero-actions">
            <Button className="apple-primary-btn">
              <Play className="w-4 h-4 mr-2" />
              Experience starten
            </Button>
            <Button variant="outline" className="apple-secondary-btn">
              Mehr erfahren
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Lifestyle Metrics */}
          <div className="apple-metrics">
            {lifestyleMetrics.map((metric, index) => (
              <div key={index} className="apple-metric-display">
                <div className="apple-metric-value">{metric.value}{metric.unit}</div>
                <div className="apple-metric-label">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifestyle Capabilities */}
      <section className="apple-capabilities">
        <div className="apple-container">
          <div className="capabilities-header">
            <Badge className="apple-badge">Human-Centered Design</Badge>
            <h2>Compliance als Lifestyle</h2>
            <p>Wo Technologie auf menschliche Bedürfnisse trifft</p>
          </div>
          
          <div className="capabilities-grid">
            {lifestyleCapabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card key={index} className={`apple-capability-card ${capability.color}`}>
                  <div className="capability-header">
                    <div className="capability-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="capability-progress">
                      <div className="apple-progress-ring">
                        <svg className="progress-circle" viewBox="0 0 36 36">
                          <path
                            className="circle-bg"
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="2"
                          />
                          <path
                            className="apple-circle"
                            strokeDasharray={`${capability.progress}, 100`}
                            d="M18 2.0845
                               a 15.9155 15.9155 0 0 1 0 31.831
                               a 15.9155 15.9155 0 0 1 0 -31.831"
                            fill="none"
                            strokeWidth="2"
                          />
                        </svg>
                        <div className="apple-progress-text">{capability.progress}%</div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="capability-title">{capability.title}</h3>
                  <p className="capability-description">{capability.description}</p>
                  
                  <div className="capability-footer">
                    <Progress 
                      value={capability.progress} 
                      className="apple-capability-bar"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lifestyle Experience */}
      <section className="apple-experience-section">
        <div className="apple-container">
          <Card className="apple-experience-visualization">
            <div className="experience-header">
              <div className="apple-experience-icon">
                <Coffee className="w-8 h-8" />
              </div>
              <div>
                <h3>Daily Life Integration</h3>
                <p>Compliance, die sich Ihrem Rhythmus anpasst</p>
              </div>
            </div>
            
            <div className="apple-experience-stack">
              {lifestyleExperiences.map((experience, index) => (
                <div key={index} className="apple-experience-node">
                  <div className={`apple-node-status ${experience.status}`}></div>
                  <span className="apple-experience-name">{experience.name}</span>
                  <div className="apple-experience-mood">{experience.experience}</div>
                </div>
              ))}
            </div>
            
            <div className="apple-experience-actions">
              <Button variant="outline" className="apple-experience-btn">
                <Sun className="w-4 h-4 mr-2" />
                Morning Flow
              </Button>
              <Button variant="outline" className="apple-experience-btn">
                <Moon className="w-4 h-4 mr-2" />
                Evening Peace
              </Button>
              <Button variant="outline" className="apple-experience-btn">
                <Home className="w-4 h-4 mr-2" />
                Work-Life Balance
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Apple CTA */}
      <section className="apple-cta">
        <div className="apple-container">
          <Card className="apple-cta-card">
            <div className="apple-cta-content">
              <div className="cta-content">
                <h2>Bereit für ein neues Compliance-Erlebnis?</h2>
                <p>
                  Entdecken Sie, wie Compliance zu einem natürlichen Teil Ihres Lebens wird. 
                  Elegant, mühelos und menschlich – designed by life, powered by technology.
                </p>
                
                <div className="cta-actions">
                  <Button className="apple-primary-btn">
                    <Heart className="w-4 h-4 mr-2" />
                    Lifestyle Experience starten
                  </Button>
                  <Button variant="outline" className="apple-secondary-btn">
                    Personal Demo buchen
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="apple-footer">
        <div className="apple-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="apple-logo">
                <div className="lifestyle-sphere">
                  <div className="sphere-glow"></div>
                  <div className="sphere-core">
                    <div className="paragraph-lifestyle">§</div>
                  </div>
                  <div className="sphere-rings">
                    <div className="ring wellness"></div>
                    <div className="ring elegance"></div>
                    <div className="ring sustainability"></div>
                  </div>
                </div>
                <span className="apple-brand">
                  Mar<span className="apple-paragraph">§</span>tein
                </span>
              </div>
              <p className="footer-tagline">
                Designed by Life. Powered by Love.
              </p>
            </div>
            
            <div className="footer-experience">
              <div className="apple-experience-indicators">
                <div className="indicator">
                  <div className="indicator-value">97.8%</div>
                  <div className="indicator-label">Daily Joy</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">∞</div>
                  <div className="indicator-label">Life Quality</div>
                </div>
                <div className="indicator">
                  <div className="indicator-value">24/7</div>
                  <div className="indicator-label">Peace of Mind</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Marsstein. Designed by Life. Crafted with Love.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AppleLifestyle;