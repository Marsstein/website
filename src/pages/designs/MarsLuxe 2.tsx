import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Sparkles, Shield, Clock, Euro, FileCheck, Brain, CheckCircle2, Users, AlertTriangle } from 'lucide-react';
import './MarsLuxe.css';

const MarsLuxe: React.FC = () => {
  const visionItems = [
    {
      number: 1,
      title: "Komplexität raus, Klarheit rein",
      description: "Automatisierte Audits analysieren Ihre Richtlinien in Sekunden, zeigen Lücken auf und liefern umsetzbare Empfehlungen – validiert von zertifizierten Datenschutz‑ und IT‑Security‑Expert:innen."
    },
    {
      number: 2,
      title: "Sichere Grundlage",
      description: "Unser verschlüsselter Dokument‑Vault hostet Ihre Daten ausschließlich in Europa und der Schweiz, erfüllt ISO 27001 sowie die höchsten Anforderungen der DSGVO."
    },
    {
      number: 3,
      title: "Kontinuierliche Compliance",
      description: "Echtzeit‑Monitoring und automatisierte Scans halten Ihre Organisation wachsam, minimieren Risiken und dokumentieren jede Änderung nachvollziehbar."
    },
    {
      number: 4,
      title: "Wissen, das wirkt",
      description: "Die Marsstein Academy macht Ihr Team zum stärksten Glied in der Datenschutz‑Kette: interaktive Lernmodule, praxisnahe Webinare und Best Practices."
    },
    {
      number: 5,
      title: "Transparenz ohne Vendor‑Lock‑in",
      description: "Klare Preise, exportierbare Daten und 24/7‑Support geben Ihnen die volle Kontrolle über Ihre Compliance‑Reise – egal, ob Start‑up oder Konzern."
    }
  ];

  const stats = [
    { number: "99.7%", label: "Genauigkeit" },
    { number: "24/7", label: "Verfügbarkeit" },
    { number: "85%", label: "Kosteneinsparung" },
    { number: "ISO 27001", label: "Zertifiziert" }
  ];

  return (
    <div className="mars-luxe">
      {/* Header */}
      <header className="luxe-header">
        <div className="luxe-container">
          <nav className="luxe-nav">
            <a href="#" className="luxe-logo">
              Mar<span className="paragraph">§</span>tein
            </a>
            <ul className="luxe-nav-menu">
              <li><a href="#vision">Vision</a></li>
              <li><a href="#plattform">Plattform</a></li>
              <li><a href="#academy">Academy</a></li>
              <li><a href="#preise">Preise</a></li>
            </ul>
            <Button className="luxe-cta-button">Demo anfordern</Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="luxe-hero">
        <div className="luxe-container">
          <h1 className="floating">
            Compliance so <span className="luxe-highlight">selbstverständlich</span><br />
            wie das Speichern einer Datei
          </h1>
          <p>
            Die führende, KI‑gestützte Plattform, die Privacy‑, Sicherheits‑ und AI‑Regulierung 
            in einen nahtlosen Workflow übersetzt – von der ersten Bestandsaufnahme bis zur lückenlosen Audit‑Spur.
          </p>
          <Button className="luxe-cta-button">Plattform entdecken</Button>
        </div>
      </section>

      {/* Vision Section */}
      <section className="luxe-vision-section" id="vision">
        <div className="luxe-container">
          <h2>Unsere Vision</h2>
          <p className="luxe-vision-intro">
            Wir glauben an einen europäischen Digitalraum, in dem Vertrauen, Innovation und Rechtssicherheit Hand in Hand gehen.
          </p>
          
          <div className="luxe-vision-grid">
            {visionItems.map((item) => (
              <Card key={item.number} className="luxe-vision-card">
                <div className="luxe-vision-number">{item.number}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="luxe-stats-section">
        <div className="luxe-container">
          <h2>Vertrauen durch Zahlen</h2>
          <div className="luxe-stats-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="luxe-stat-item">
                <span className="luxe-stat-number">{stat.number}</span>
                <span className="luxe-stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="luxe-footer">
        <div className="luxe-container">
          <div className="luxe-footer-brand">Mar<span className="paragraph">§</span>tein</div>
          <div className="luxe-footer-tagline">Das digitale Rückgrat für europäische Compliance</div>
          <p>© 2024 Marsstein. Alle Rechte vorbehalten.</p>
        </div>
      </footer>
    </div>
  );
};

export default MarsLuxe;