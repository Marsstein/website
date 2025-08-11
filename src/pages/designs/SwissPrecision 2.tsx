import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  Clock, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Award,
  FileCheck,
  Gauge,
  Lock,
  Users
} from 'lucide-react';
import './SwissPrecision.css';

const SwissPrecision: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [activeMetric, setActiveMetric] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetric(prev => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const precisionMetrics = [
    {
      label: "Compliance Accuracy",
      value: 99.97,
      icon: Target,
      description: "Präzision in der Rechtskonformität"
    },
    {
      label: "Processing Time",
      value: 98.5,
      icon: Clock,
      description: "Optimierte Verarbeitungsgeschwindigkeit"
    },
    {
      label: "Security Standard",
      value: 100,
      icon: Shield,
      description: "Schweizer Sicherheitsstandards"
    },
    {
      label: "Client Satisfaction",
      value: 96.8,
      icon: Award,
      description: "Kundenzufriedenheit & Service"
    }
  ];

  const visionPillars = [
    {
      number: "01",
      title: "Präzise Automatisierung",
      description: "Schweizer Uhrmacher-Präzision in der Compliance-Automatisierung. Jeder Prozess wird mit mathematischer Genauigkeit optimiert und kontinuierlich kalibriert für maximale Effizienz.",
      icon: Target
    },
    {
      number: "02", 
      title: "Höchste Sicherheitsstandards",
      description: "Banking-Grade Verschlüsselung nach Schweizer Standard. Multi-Layer Security Architecture mit Zero-Trust-Prinzipien und kontinuierlicher Penetration Testing durch zertifizierte Experten.",
      icon: Lock
    },
    {
      number: "03",
      title: "Kontinuierliche Überwachung",
      description: "24/7 Real-Time Monitoring mit präventiver Risikodetektion. Automatische Anomalie-Erkennung und sofortige Compliance-Adjustierung durch Machine Learning Algorithmen.",
      icon: Gauge
    },
    {
      number: "04",
      title: "Expertenwissen Integration",
      description: "Direkter Zugang zu zertifizierten DACH-Rechtsexperten. Kombinierte Expertise aus Schweizer Präzision, deutscher Gründlichkeit und österreichischer Innovation.",
      icon: Users
    },
    {
      number: "05",
      title: "Vollständige Transparenz",
      description: "Kristallklare Dokumentation und nachvollziehbare Audit-Trails. Jeder Compliance-Schritt wird präzise dokumentiert und ist jederzeit für Behörden und Stakeholder verfügbar.",
      icon: FileCheck
    }
  ];

  return (
    <div className="swiss-precision">
      {/* Precision Header */}
      <header className="swiss-header">
        <div className="swiss-container">
          <nav className="swiss-nav">
            <div className="swiss-logo">
              <div className="swiss-logo-mark">
                <div className="precision-dot"></div>
              </div>
              <span className="swiss-brand">
                Mar<span className="swiss-paragraph">§</span>tein
              </span>
            </div>
            
            <ul className="swiss-nav-menu">
              <li><a href="#precision">Präzision</a></li>
              <li><a href="#standards">Standards</a></li>
              <li><a href="#expertise">Expertise</a></li>
              <li><a href="#audit">Audit</a></li>
            </ul>
            
            <div className="swiss-time">
              <div className="time-display">
                {currentTime.toLocaleTimeString('de-CH', { 
                  timeZone: 'Europe/Zurich',
                  hour12: false 
                })} CET
              </div>
              <div className="time-label">Swiss Time</div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="swiss-hero">
        <div className="swiss-container">
          <div className="precision-badge">
            <div className="badge-dot"></div>
            Swiss Precision Engineering
          </div>
          
          <h1 className="swiss-title">
            Compliance mit der Präzision
            <span className="swiss-highlight">einer Schweizer Uhr</span>
          </h1>
          
          <p className="swiss-subtitle">
            DACH-Compliance-Engineering nach höchsten Schweizer Qualitätsstandards. 
            Präzise, zuverlässig und mit der Genauigkeit, die Ihr Unternehmen verdient.
          </p>

          <div className="swiss-hero-actions">
            <Button className="swiss-primary-btn">
              <Target className="w-4 h-4 mr-2" />
              Präzisions-Analyse starten
            </Button>
            <Button variant="outline" className="swiss-secondary-btn">
              Swiss Standards erkunden
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Precision Metrics */}
      <section className="swiss-metrics">
        <div className="swiss-container">
          <div className="metrics-header">
            <h2>Präzisions-Metriken</h2>
            <p>Gemessen nach Schweizer Qualitätsstandards</p>
          </div>
          
          <div className="metrics-grid">
            {precisionMetrics.map((metric, index) => {
              const Icon = metric.icon;
              const isActive = activeMetric === index;
              
              return (
                <Card key={index} className={`metric-card ${isActive ? 'active' : ''}`}>
                  <div className="metric-icon">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="metric-value">{metric.value}%</div>
                  <div className="metric-label">{metric.label}</div>
                  <Progress 
                    value={metric.value} 
                    className="metric-progress"
                  />
                  <div className="metric-description">{metric.description}</div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision Pillars */}
      <section className="swiss-vision">
        <div className="swiss-container">
          <div className="vision-header">
            <Badge className="vision-badge">Swiss Engineering</Badge>
            <h2>Fünf Säulen der Präzision</h2>
            <p>Nach dem Vorbild Schweizer Ingenieurskunst entwickelt</p>
          </div>
          
          <div className="vision-timeline">
            {visionPillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="marker-number">{pillar.number}</div>
                    <div className="marker-icon">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <Card className="timeline-content">
                    <h3>{pillar.title}</h3>
                    <p>{pillar.description}</p>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Swiss Quality Seal */}
      <section className="swiss-quality">
        <div className="swiss-container">
          <Card className="quality-seal">
            <div className="seal-content">
              <div className="seal-icon">
                <Award className="w-12 h-12" />
              </div>
              <h3>Schweizer Qualitätssiegel</h3>
              <p>
                Zertifiziert nach höchsten Schweizer Standards für Datenschutz, 
                Sicherheit und Compliance-Engineering.
              </p>
              <div className="quality-badges">
                <Badge className="quality-badge">ISO 27001</Badge>
                <Badge className="quality-badge">Swiss Hosted</Badge>
                <Badge className="quality-badge">FINMA Ready</Badge>
                <Badge className="quality-badge">Banking Grade</Badge>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="swiss-footer">
        <div className="swiss-container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="swiss-logo">
                <div className="swiss-logo-mark">
                  <div className="precision-dot"></div>
                </div>
                <span className="swiss-brand">
                  Mar<span className="swiss-paragraph">§</span>tein
                </span>
              </div>
              <p className="footer-tagline">
                Swiss Precision Compliance Engineering
              </p>
            </div>
            
            <div className="footer-info">
              <div className="swiss-coordinates">
                <div>47.3769° N, 8.5417° E</div>
                <div>Zürich, Switzerland</div>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>© 2024 Marsstein. Engineered in Switzerland.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SwissPrecision;