import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV27.css';

const ArchitecturalBlueprintDeck: React.FC = () => {
    return (
        <div className="v27-slide-container">
            <div className="v27-slide">
                <div className="v27-grid-bg" />
                <div className="v27-header">
                    <h1 className="v27-title">Compliance Architecture Blueprint</h1>
                </div>
                <div className="v27-main-area">
                    {/* Items */}
                    <div className="v27-item" style={{ gridArea: 'gdpr' }}>
                        <FileText />
                        <h3>GDPR</h3>
                        <p>Foundation</p>
                    </div>
                    <div className="v27-item" style={{ gridArea: 'iso1' }}>
                        <Shield />
                        <h3>ISO 27001</h3>
                        <p>ISMS</p>
                    </div>
                    <div className="v27-item" style={{ gridArea: 'ai' }}>
                        <Lightbulb />
                        <h3>EU AI Act</h3>
                        <p>AI Governance</p>
                    </div>
                    <div className="v27-item" style={{ gridArea: 'iso2' }}>
                        <Layers />
                        <h3>ISO 27002</h3>
                        <p>Controls</p>
                    </div>
                    <div className="v27-item" style={{ gridArea: 'tisax' }}>
                        <CheckCircle />
                        <h3>TISAX</h3>
                        <p>Automotive</p>
                    </div>
                    <div className="v27-item small" style={{ gridArea: 'iso17' }}>
                        <Cloud />
                        <h3>ISO 27017</h3>
                    </div>
                    <div className="v27-item small" style={{ gridArea: 'iso18' }}>
                        <Server />
                        <h3>ISO 27018</h3>
                    </div>
                    
                    {/* Connectors */}
                    <svg className="v27-connectors">
                        <path d="M225 250 l100 0" />
                        <path d="M475 125 l100 0" />
                        <path d="M475 375 l100 0" />
                        <path d="M725 125 l100 0" />
                        <path d="M825 125 l0 -50 l100 0" />
                        <path d="M825 125 l0 50 l100 0" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ArchitecturalBlueprintDeck;
