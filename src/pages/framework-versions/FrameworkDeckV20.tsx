import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV20.css';

const ExecutiveBriefDeck: React.FC = () => {
    return (
        <div className="v20-slide-container">
            <div className="v20-slide">
                <div className="v20-grid">
                    <div className="v20-main-panel">
                        <div className="v20-tag">Foundation</div>
                        <h1 className="v20-main-title">GDPR</h1>
                        <p className="v20-main-desc">The General Data Protection Regulation serves as the mandatory baseline for data privacy, influencing the scope and requirements of all related security and technology frameworks.</p>
                        <FileText className="v20-main-icon" />
                    </div>
                    <div className="v20-sub-panel">
                        <div className="v20-item">
                            <Shield />
                            <div className="v20-item-content">
                                <h3>ISO 27001</h3>
                                <p>Builds on GDPR's security requirements with a formal ISMS.</p>
                            </div>
                        </div>
                         <div className="v20-item">
                            <Lightbulb />
                            <div className="v20-item-content">
                                <h3>EU AI Act</h3>
                                <p>Extends data governance principles to AI systems.</p>
                            </div>
                        </div>
                        <div className="v20-item">
                            <Layers />
                            <div className="v20-item-content">
                                <h3>ISO 27002</h3>
                                <p>Provides the detailed control set for implementing ISO 27001.</p>
                            </div>
                        </div>
                         <div className="v20-item">
                            <CheckCircle />
                            <div className="v20-item-content">
                                <h3>TISAX</h3>
                                <p>Applies ISO 27002 controls to the automotive sector.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExecutiveBriefDeck;
