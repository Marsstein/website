import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV21.css';

const BlueprintGridDeck: React.FC = () => {
    return (
        <div className="v21-slide-container">
            <div className="v21-slide">
                <div className="v21-grid-bg" />
                <div className="v21-header">
                    <h1 className="v21-title">Compliance Blueprint</h1>
                    <p className="v21-subtitle">A structured analysis of the compliance framework architecture.</p>
                </div>
                <div className="v21-main-grid">
                    {/* GDPR */}
                    <div className="v21-card" style={{ gridArea: '1 / 1 / 3 / 2'}}>
                        <div className="v21-card-header">
                            <FileText />
                            <h3>GDPR</h3>
                        </div>
                        <p>Establishes the foundational principles of data privacy and security.</p>
                    </div>
                    {/* ISO 27001 */}
                    <div className="v21-card" style={{ gridArea: '1 / 2 / 2 / 3'}}>
                         <div className="v21-card-header">
                            <Shield />
                            <h3>ISO 27001</h3>
                        </div>
                    </div>
                    {/* EU AI Act */}
                    <div className="v21-card" style={{ gridArea: '2 / 2 / 3 / 3'}}>
                         <div className="v21-card-header">
                            <Lightbulb />
                            <h3>EU AI Act</h3>
                        </div>
                    </div>
                    {/* ISO 27002 */}
                    <div className="v21-card" style={{ gridArea: '1 / 3 / 2 / 4'}}>
                         <div className="v21-card-header">
                            <Layers />
                            <h3>ISO 27002</h3>
                        </div>
                    </div>
                    {/* TISAX */}
                    <div className="v21-card" style={{ gridArea: '2 / 3 / 3 / 4'}}>
                         <div className="v21-card-header">
                            <CheckCircle />
                            <h3>TISAX</h3>
                        </div>
                    </div>
                    {/* ISO 27017 */}
                    <div className="v21-card small" style={{ gridArea: '1 / 4 / 2 / 5'}}>
                        <div className="v21-card-header small">
                            <Cloud />
                            <h4>ISO 27017</h4>
                        </div>
                    </div>
                    {/* ISO 27018 */}
                    <div className="v21-card small" style={{ gridArea: '2 / 4 / 2 / 5'}}>
                        <div className="v21-card-header small">
                            <Server />
                            <h4>ISO 27018</h4>
                        </div>
                    </div>

                    {/* Connectors */}
                    <svg className="v21-connectors">
                        <path d="M 320 250 H 420" />
                        <path d="M 640 125 H 740" />
                        <path d="M 640 375 H 740" />
                        <path d="M 960 125 H 1060" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default BlueprintGridDeck;
