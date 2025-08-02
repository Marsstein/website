import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Lock, 
  Eye, 
  CheckCircle2, 
  ArrowRight, 
  Handshake,
  Fingerprint,
  Globe,
  UserCheck,
  Key,
  Award,
  Clock
} from 'lucide-react';
import './DigitalTrust.css';

const DigitalTrust: React.FC = () => {
  const [trustScore, setTrustScore] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    // Animate trust score on load
    const timer = setTimeout(() => {
      setTrustScore(97.8);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const trustPillars = [
    {
      icon: Shield,
      title: "Transparenz First",
      description: "Vollständige Offenlegung aller Prozesse, Algorithmen und Datenverarbeitungsschritte. Sie wissen jederzeit, was mit Ihren Daten geschieht.",
      trustLevel: "100%",
      color: "emerald"
    },
    {
      icon: Lock,
      title: "Datensouveränität",
      description: "Ihre Daten gehören Ihnen. Vollständige Kontrolle über Speicherort, Zugriff und Verwendung. Jederzeit exportierbar, löschbar und nachverfolgbar.",
      trustLevel: "99.9%",
      color: "blue"
    },
    {
      icon: Eye,
      title: "Audit-Ready",
      description: "Kontinuierliche externe Audits durch unabhängige Prüfer. Alle Sicherheitsmaßnahmen sind öffentlich dokumentiert und nachprüfbar.",
      trustLevel: "98.7%",
      color: "violet"
    },
    {
      icon: Handshake,
      title: "Partnerschaftlich",
      description: "Langfristige Partnerschaften basierend auf Vertrauen und gemeinsamen Werten. Kein Vendor-Lock-in, faire Preise, offene Kommunikation.",
      trustLevel: "96.5%",
      color: "amber"
    },
    {
      icon: UserCheck,
      title: "Menschzentriert",
      description: "Technologie im Dienst des Menschen. Ethische KI-Entwicklung, Barrierefreiheit und intuitive Bedienung stehen im Zentrum unserer Entwicklung.",
      trustLevel: "95.2%",
      color: "rose"
    }
  ];

  const testimonials = [
    {
      quote: "Marsstein hat unser Vertrauen in Compliance-Software wiederhergestellt. Absolute Transparenz und Kontrolle.",
      author: "Dr. Sarah Mueller",
      role: "Chief Privacy Officer",
      company: "Deutsche Bank AG",
      trustRating: 5
    },
    {
      quote: "Endlich eine Lösung, die Vertrauen nicht nur verspricht, sondern täglich unter Beweis stellt.",
      author: "Michael Weber",
      role: "Head of Compliance",
      company: "Siemens Healthcare",
      trustRating: 5
    },
    {
      quote: "Die Transparenz der Prozesse gibt uns die Sicherheit, die wir für unsere kritischen Systeme brauchen.",
      author: "Anna Zimmermann",
      role: "CISO",
      company: "Credit Suisse",
      trustRating: 5
    }
  ];

  const securityBadges = [
    { name: "SOC 2 Type II", verified: true },
    { name: "ISO 27001", verified: true },
    { name: "GDPR Compliant", verified: true },
    { name: "Swiss Hosted", verified: true },
    { name: "End-to-End Encrypted", verified: true },
    { name: "Zero-Knowledge", verified: true }
  ];

  return (
    <div className="digital-trust">
      {/* Trust Header */}
      <header className="trust-header">
        <div className="trust-container">
          <nav className="trust-nav">
            <div className="trust-logo">
              <div className="trust-shield">
                <Shield className="w-6 h-6" />
              </div>
              <span className="trust-brand">
                Mar<span className="trust-paragraph">§</span>tein
              </span>
            </div>
            
            <ul className="trust-nav-menu">
              <li><a href="#transparency">Transparenz</a></li>
              <li><a href="#security">Sicherheit</a></li>
              <li><a href="#partnerships">Partnerships</a></li>
              <li><a href="#audits">Audits</a></li>
            </ul>
            
            <div className="trust-score-display">
              <div className="score-label">Trust Score</div>
              <div className="score-value">{trustScore.toFixed(1)}%</div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="trust-hero">
        <div className="trust-container">
          <div className="hero-trust-badge">
            <Fingerprint className="w-4 h-4" />
            Verified Trust Platform
          </div>
          
          <h1 className="trust-title">
            Vertrauen ist nicht verhandelbar.
            <span className="trust-highlight">Transparenz ist messbar.</span>
          </h1>
          
          <p className="trust-subtitle">
            Die erste Compliance-Plattform, die Vertrauen nicht nur verspricht, sondern durch 
            vollständige Transparenz, kontinuierliche Audits und ethische Standards täglich unter Beweis stellt.
          </p>

          <div className="trust-hero-actions">
            <Button className="trust-primary-btn">
              <Key className="w-4 h-4 mr-2" />
              Vertrauen verifizieren
            </Button>
            <Button variant="outline" className="trust-secondary-btn">
              Transparenz-Report ansehen
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="trust-indicators">
            <div className="indicator">
              <div className="indicator-value">100%</div>
              <div className="indicator-label">Open Source Audits</div>
            </div>
            <div className="indicator">
              <div className="indicator-value">0</div>
              <div className="indicator-label">Data Breaches</div>
            </div>
            <div className="indicator">
              <div className="indicator-value">24/7</div>
              <div className="indicator-label">Security Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Pillars */}
      <section className="trust-pillars">
        <div className="trust-container">
          <div className="pillars-header">
            <Badge className="trust-badge">Trust by Design</Badge>
            <h2>Fünf Säulen des digitalen Vertrauens</h2>
            <p>Vertrauen entsteht durch Taten, nicht durch Worte</p>
          </div>
          
          <div className="pillars-grid">
            {trustPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <Card key={index} className={`trust-pillar-card pillar-${pillar.color}`}>
                  <div className="pillar-header">
                    <div className="pillar-icon">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="pillar-trust-level">{pillar.trustLevel}</div>
                  </div>
                  
                  <h3 className="pillar-title">{pillar.title}</h3>
                  <p className="pillar-description">{pillar.description}</p>
                  
                  <div className="pillar-progress">
                    <Progress 
                      value={parseFloat(pillar.trustLevel)} 
                      className="trust-progress"
                    />
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Proof */}
      <section className="security-proof">
        <div className="trust-container">
          <Card className="security-card">
            <div className="security-header">
              <div className="security-icon">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <h3>Sicherheit durch Verifikation</h3>
                <p>Alle Sicherheitsmaßnahmen sind öffentlich auditiert und nachprüfbar</p>
              </div>
            </div>
            
            <div className="security-badges">
              {securityBadges.map((badge, index) => (
                <div key={index} className="security-badge">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>{badge.name}</span>
                  {badge.verified && <div className="verified-dot"></div>}
                </div>
              ))}
            </div>
            
            <div className="security-actions">
              <Button variant="outline" className="security-btn">
                <Globe className="w-4 h-4 mr-2" />
                Public Security Report
              </Button>
              <Button variant="outline" className="security-btn">
                <Clock className="w-4 h-4 mr-2" />
                Live Security Status
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Trust Testimonials */}
      <section className="trust-testimonials">
        <div className="trust-container">
          <div className="testimonials-header">
            <h2>Vertrauen in Zahlen und Stimmen</h2>
            <p>Was unsere Partner über digitales Vertrauen sagen</p>
          </div>
          
          <Card className="testimonial-card">
            <div className="testimonial-content">
              <div className="testimonial-quote">
                "{testimonials[activeTestimonial].quote}"
              </div>
              
              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-name">{testimonials[activeTestimonial].author}</div>
                  <div className="author-role">{testimonials[activeTestimonial].role}</div>
                  <div className="author-company">{testimonials[activeTestimonial].company}</div>
                </div>
                
                <div className="trust-rating">
                  {[...Array(testimonials[activeTestimonial].trustRating)].map((_, i) => (
                    <CheckCircle2 key={i} className="w-4 h-4 text-green-600" />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="testimonial-indicators">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`indicator-dot ${index === activeTestimonial ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                />
              ))}
            </div>
          </Card>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="trust-cta">
        <div className="trust-container">
          <Card className="cta-card">
            <div className="cta-content">
              <h2>Bereit für echtes digitales Vertrauen?</h2>
              <p>
                Erleben Sie eine Compliance-Plattform, die Vertrauen nicht nur verspricht, 
                sondern durch Transparenz, Sicherheit und ethische Standards täglich beweist.
              </p>
              
              <div className="cta-actions">
                <Button className="trust-primary-btn">
                  <Shield className="w-4 h-4 mr-2" />
                  Trust-Audit anfordern
                </Button>
                <Button variant="outline" className="trust-secondary-btn">
                  Transparenz-Demo buchen
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="trust-footer">
        <div className="trust-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="trust-logo">
                <div className="trust-shield">
                  <Shield className="w-6 h-6" />
                </div>
                <span className="trust-brand">
                  Mar<span className="trust-paragraph">§</span>tein
                </span>
              </div>
              <p className="footer-tagline">
                Digital Trust through Transparency
              </p>
            </div>
            
            <div className="footer-trust">
              <div className="trust-metrics">
                <div className="metric">
                  <div className="metric-value">97.8%</div>
                  <div className="metric-label">Trust Score</div>
                </div>
                <div className="metric">
                  <div className="metric-value">100%</div>
                  <div className="metric-label">Transparency</div>
                </div>
                <div className="metric">
                  <div className="metric-value">0</div>
                  <div className="metric-label">Incidents</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Marsstein. Trust earned daily since 2024.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DigitalTrust;