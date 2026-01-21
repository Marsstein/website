import React from 'react';
import { FileText, Shield, Zap, CheckCircle, Cloud, Server } from 'lucide-react';
import './FrameworkDeckV8.css';

const ConstellationDeck: React.FC = () => {
    return (
        <div className="v8-slide-container">
            <div className="v8-slide">
                <div className="v8-stars-bg" />
                <div className="v8-header">
                    <h1 className="v8-title">Compliance Constellation</h1>
                    <p className="v8-subtitle">Navigating the interconnected framework ecosystem.</p>
                </div>

                <div className="v8-diagram">
                    {/* Central Node */}
                    <div className="v8-node-wrapper center">
                        <div className="v8-node gdpr">
                            <FileText size={40} />
                            <div className="v8-node-content">
                                <span className="v8-node-title">GDPR</span>
                                <span className="v8-node-desc">Core Privacy Standard</span>
                            </div>
                        </div>
                    </div>

                    {/* Tier 1 Nodes */}
                    <div className="v8-node-wrapper iso">
                        <div className="v8-node">
                            <Shield size={32} />
                             <div className="v8-node-content">
                                <span className="v8-node-title">ISO 27001</span>
                                <span className="v8-node-desc">Security Management</span>
                            </div>
                        </div>
                    </div>
                    <div className="v8-node-wrapper ai-act">
                        <div className="v8-node">
                            <Zap size={32} />
                             <div className="v8-node-content">
                                <span className="v8-node-title">EU AI Act</span>
                                <span className="v8-node-desc">AI Regulation</span>
                            </div>
                        </div>
                    </div>

                    {/* Tier 2 Nodes */}
                    <div className="v8-node-wrapper tisax">
                        <div className="v8-node small">
                            <CheckCircle size={24} />
                             <div className="v8-node-content">
                                <span className="v8-node-title">TISAX</span>
                            </div>
                        </div>
                    </div>
                     <div className="v8-node-wrapper iso-17">
                        <div className="v8-node small">
                            <Cloud size={24} />
                             <div className="v8-node-content">
                                <span className="v8-node-title">ISO 27017</span>
                            </div>
                        </div>
                    </div>
                    <div className="v8-node-wrapper iso-18">
                        <div className="v8-node small">
                            <Server size={24} />
                             <div className="v8-node-content">
                                <span className="v8-node-title">ISO 27018</span>
                            </div>
                        </div>
                    </div>
                    
                    {/* Connectors */}
                    <svg className="v8-connectors">
                        {/* GDPR -> ISO */}
                        <line x1="400" y1="275" x2="250" y2="400" />
                        {/* GDPR -> AI Act */}
                        <line x1="400" y1="275" x2="550" y2="400" />
                        {/* ISO -> TISAX */}
                        <line x1="250" y1="400" x2="150" y2="525" />
                         {/* ISO -> 27017 */}
                        <line x1="250" y1="400" x2="250" y2="525" />
                        {/* ISO -> 27018 */}
                        <line x1="250" y1="400" x2="350" y2="525" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default ConstellationDeck;