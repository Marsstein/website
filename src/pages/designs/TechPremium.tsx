import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import './TechPremium.css';

const TechPremium: React.FC = () => {
  const features = [
    {
      number: 1,
      title: "Intelligent Automation",
      description: "KI-gestützte Analyse von Richtlinien mit maschinellem Lernen. Automatisierte Gap-Analyse und validierte Empfehlungen durch zertifizierte Security-Experten."
    },
    {
      number: 2,
      title: "Zero-Trust Architecture",
      description: "End-to-End verschlüsselter Dokument-Vault mit ISO 27001 Zertifizierung. Europäisches Hosting mit höchsten DSGVO-Standards und EU AI Act Compliance."
    },
    {
      number: 3,
      title: "Real-Time Monitoring",
      description: "Kontinuierliche Compliance-Überwachung mit automatischen Scans. Proaktive Risikominimierung und lückenlose Audit-Trail-Dokumentation."
    },
    {
      number: 4,
      title: "Adaptive Learning",
      description: "Marsstein Academy mit KI-personalisierten Lernpfaden. Interaktive Sicherheits-Trainings und kontinuierliche Skill-Entwicklung für Teams."
    },
    {
      number: 5,
      title: "API-First Platform",
      description: "Vollständig offene APIs ohne Vendor-Lock-in. Nahtlose Integration in bestehende Tech-Stacks mit 100% Datenportabilität und 24/7 DevOps-Support."
    }
  ];

  const stats = [
    { value: "99.7%", label: "ML Accuracy Rate" },
    { value: "99.9%", label: "Platform Uptime" },
    { value: "85%", label: "Cost Reduction" },
    { value: "<100ms", label: "API Response Time" }
  ];

  return (
    <div className="tech-premium">
      {/* Header */}
      <header className="tech-header">
        <div className="tech-container">
          <nav className="tech-nav">
            <a href="#" className="tech-logo">
              <div className="tech-logo-icon">M</div>
              Mar<span className="paragraph">§</span>tein
            </a>
            <ul className="tech-nav-menu">
              <li><a href="#platform">Platform</a></li>
              <li><a href="#solutions">Solutions</a></li>
              <li><a href="#resources">Resources</a></li>
              <li><a href="#enterprise">Enterprise</a></li>
            </ul>
            <Button className="tech-cta-button">Start Free Trial</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="tech-hero">
        <div className="tech-container">
          <Badge className="tech-hero-badge">
            ◆ KI-Powered Compliance Platform
          </Badge>
          <h1>
            Compliance so <span className="tech-gradient-text">selbstverständlich</span><br />
            wie das Speichern einer Datei
          </h1>
          <p>
            Die führende, KI‑gestützte Plattform, die Privacy‑, Sicherheits‑ und AI‑Regulierung 
            in einen nahtlosen Workflow übersetzt – von der ersten Bestandsaufnahme bis zur lückenlosen Audit‑Spur.
          </p>
          <div className="tech-hero-actions">
            <Button className="tech-cta-button">Platform Demo</Button>
            <Button variant="outline" className="tech-secondary-button">Architecture Guide</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="tech-features-section" id="platform">
        <div className="tech-container">
          <div className="tech-section-header">
            <Badge className="tech-badge">Core Features</Badge>
            <h2>Enterprise-Grade Compliance</h2>
            <p>
              Fünf technologische Säulen, die Compliance-Komplexität in strategische Vorteile verwandeln.
            </p>
          </div>
          
          <div className="tech-features-grid">
            {features.map((feature) => (
              <Card key={feature.number} className="tech-feature-card">
                <div className="tech-feature-icon">{feature.number}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="tech-stats-section">
        <div className="tech-container tech-stats-container">
          <div className="tech-stats-header">
            <h2>Performance Metrics</h2>
            <p>Messbare Ergebnisse für Enterprise-Kunden</p>
          </div>
          <div className="tech-stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="tech-stat-item">
                <span className="tech-stat-number">{stat.value}</span>
                <span className="tech-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="tech-cta-section">
        <div className="tech-container">
          <Card className="tech-cta-card">
            <h2>Ready for Enterprise Compliance?</h2>
            <p>
              Schließen Sie sich führenden europäischen Unternehmen an und transformieren Sie 
              Ihre Compliance-Strategie mit unserer KI-gestützten Platform.
            </p>
            <div className="tech-hero-actions">
              <Button className="tech-cta-button">Enterprise Demo</Button>
              <Button variant="outline" className="tech-secondary-button">Technical Specs</Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="tech-footer">
        <div className="tech-container">
          <div className="tech-footer-brand">
            <div className="tech-footer-logo">
              Mar<span className="paragraph">§</span>tein
            </div>
            <div className="tech-footer-tagline">
              European Compliance Infrastructure
            </div>
          </div>
          <div className="tech-footer-bottom">
            <p>© 2024 Marsstein. Built for European digital sovereignty.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TechPremium;