import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV13.css';

const StrategicDossierDeck: React.FC = () => {
    return (
        <div className="v13-slide-container">
            <div className="v13-slide">
                <div className="v13-background-pattern" />
                <div className="v13-header">
                    <h1 className="v13-title">Strategic Compliance Dossier</h1>
                    <p className="v13-subtitle">An executive overview of the compliance architecture.</p>
                </div>
                <div className="v13-grid">
                    {/* Connectors */}
                    <svg className="v13-connectors">
                        <defs>
                            <linearGradient id="v13-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="var(--brand-red)" />
                                <stop offset="100%" stopColor="var(--brand-green)" />
                            </linearGradient>
                            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                                <polygon points="0 0, 10 3.5, 0 7" fill="rgba(255, 255, 255, 0.4)" />
                            </marker>
                        </defs>
                        {/* GDPR to ISO & AI */}
                        <path d="M 220 250 H 380" markerEnd="url(#arrowhead)" />
                        <path d="M 220 250 C 280 250, 280 480, 380 480" markerEnd="url(#arrowhead)" strokeDasharray="8 8" />
                        {/* ISO to ISO2 & TISAX */}
                        <path d="M 620 150 H 780" markerEnd="url(#arrowhead)" />
                        <path d="M 620 150 C 680 150, 680 300, 780 300" markerEnd="url(#arrowhead)" />
                        {/* ISO2 to children */}
                        <path d="M 1020 150 H 1180" markerEnd="url(#arrowhead)" />
                    </svg>
                    
                    {/* Column 1 */}
                    <div className="v13-card" style={{ gridArea: '2 / 1 / 3 / 2' }}>
                        <div className="v13-card-eyebrow">Foundation</div>
                        <h2 className="v13-card-title"><FileText /> GDPR</h2>
                        <p className="v13-card-desc">The regulatory cornerstone for data protection in the EU.</p>
                    </div>

                    {/* Column 2 */}
                    <div className="v13-card" style={{ gridArea: '1 / 2 / 2 / 3' }}>
                        <div className="v13-card-eyebrow">ISMS</div>
                        <h2 className="v13-card-title"><Shield /> ISO 27001</h2>
                        <p className="v13-card-desc">Framework for information security management.</p>
                    </div>
                     <div className="v13-card" style={{ gridArea: '3 / 2 / 4 / 3' }}>
                        <div className="v13-card-eyebrow">Innovation</div>
                        <h2 className="v13-card-title"><Lightbulb /> EU AI Act</h2>
                        <p className="v13-card-desc">Risk-based regulation for artificial intelligence.</p>
                    </div>

                     {/* Column 3 */}
                    <div className="v13-card" style={{ gridArea: '1 / 3 / 2 / 4' }}>
                        <div className="v13-card-eyebrow">Control Basis</div>
                        <h2 className="v13-card-title"><Layers /> ISO 27002</h2>
                        <p className="v13-card-desc">Extensive catalog of security controls.</p>
                    </div>
                     <div className="v13-card" style={{ gridArea: '2 / 3 / 3 / 4' }}>
                        <div className="v13-card-eyebrow">Automotive</div>
                        <h2 className="v13-card-title"><CheckCircle /> TISAX</h2>
                        <p className="v13-card-desc">Security standard for the automotive industry.</p>
                    </div>

                     {/* Column 4 */}
                    <div className="v13-card small" style={{ gridArea: '1 / 4 / 2 / 5' }}>
                        <h3 className="v13-card-title small"><Cloud /> ISO 27017</h3>
                    </div>
                     <div className="v13-card small" style={{ gridArea: '2 / 4 / 2 / 5' }}>
                        <h3 className="v13-card-title small"><Server /> ISO 27018</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategicDossierDeck;
