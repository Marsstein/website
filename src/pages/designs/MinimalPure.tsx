import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import './MinimalPure.css';

const MinimalPure: React.FC = () => {
  const features = [
    {
      number: 1,
      title: "Komplexität eliminieren",
      description: "Automatisierte Audits analysieren Richtlinien in Sekunden und liefern validierte, umsetzbare Empfehlungen."
    },
    {
      number: 2,
      title: "Europäische Sicherheit",
      description: "Verschlüsselter Dokument-Vault mit ISO 27001 Zertifizierung, gehostet ausschließlich in Europa und der Schweiz."
    },
    {
      number: 3,
      title: "Kontinuierliches Monitoring",
      description: "Echtzeit-Überwachung minimiert Risiken und dokumentiert Änderungen lückenlos für Behörden."
    },
    {
      number: 4,
      title: "Team-Enablement",
      description: "Marsstein Academy mit interaktiven Lernmodulen und praxisnahen Best Practices für Ihr Team."
    },
    {
      number: 5,
      title: "Vollständige Kontrolle",
      description: "Transparente Preise, exportierbare Daten, 24/7-Support – ohne Vendor-Lock-in."
    }
  ];

  const stats = [
    { value: "99.7%", label: "Automatisierungs-Genauigkeit" },
    { value: "24/7", label: "Kontinuierliche Überwachung" },
    { value: "85%", label: "Durchschnittliche Kosteneinsparung" },
    { value: "100%", label: "DSGVO-Konformität" }
  ];

  return (
    <div className="minimal-pure">
      {/* Header */}
      <header className="minimal-header">
        <div className="minimal-container">
          <nav className="minimal-nav">
            <a href="#" className="minimal-logo">
              mar<span className="paragraph">§</span>tein
            </a>
            <ul className="minimal-nav-menu">
              <li><a href="#features">Features</a></li>
              <li><a href="#platform">Platform</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#docs">Docs</a></li>
            </ul>
            <Button className="minimal-cta-button">Get Started</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="minimal-hero">
        <div className="minimal-container">
          <h1>
            Compliance so <span className="minimal-highlight">selbstverständlich</span><br />
            wie das Speichern einer Datei
          </h1>
          <p>
            Die führende, KI‑gestützte Plattform, die Privacy‑, Sicherheits‑ und AI‑Regulierung 
            in einen nahtlosen Workflow übersetzt – von der ersten Bestandsaufnahme bis zur lückenlosen Audit‑Spur.
          </p>
          <div className="minimal-hero-actions">
            <Button className="minimal-cta-button">Platform testen</Button>
            <Button variant="outline" className="minimal-secondary-button">Dokumentation</Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="minimal-grid-section" id="features">
        <div className="minimal-container">
          <div className="minimal-section-header">
            <h2>Einfach. Sicher. Effizient.</h2>
            <p>
              Fünf Prinzipien, die Compliance von einer Belastung zu einem strategischen Vorteil machen.
            </p>
          </div>
          
          <div className="minimal-feature-grid">
            {features.map((feature) => (
              <Card key={feature.number} className="minimal-feature-card">
                <div className="minimal-feature-number">{feature.number}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="minimal-stats-section">
        <div className="minimal-container">
          <div className="minimal-stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="minimal-stat-item">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="minimal-quote-section">
        <div className="minimal-container">
          <blockquote>
            "Wir glauben an einen europäischen Digitalraum, in dem <span className="minimal-highlight">Vertrauen, Innovation und Rechtssicherheit</span> Hand in Hand gehen."
          </blockquote>
        </div>
      </section>

      {/* Footer */}
      <footer className="minimal-footer">
        <div className="minimal-container">
          <div className="minimal-footer-content">
            <div className="minimal-footer-brand">
              <h3>mar<span className="paragraph">§</span>tein</h3>
              <p>
                Das digitale Rückgrat für europäische Compliance. 
                Wir schaffen eine Plattform, die Unternehmen befähigt, 
                Verantwortung zu übernehmen und sich auf ihr Wachstum zu konzentrieren.
              </p>
            </div>
            <div className="minimal-footer-links">
              <h4>Platform</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Integrations</a></li>
                <li><a href="#">API</a></li>
              </ul>
            </div>
          </div>
          <div className="minimal-footer-bottom">
            <p>© 2024 Marsstein. Designed for European compliance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MinimalPure;