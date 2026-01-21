import React from 'react';
import { FileText, Shield, Zap, CheckCircle, Cloud, Server, ArrowDown } from 'lucide-react';
import './FrameworkDeckV9.css';

const CommandCenterDeck: React.FC = () => {
    return (
        <div className="v9-slide-container">
            <div className="v9-slide">
                <div className="v9-header">
                    <h1 className="v9-title">Compliance Command Center</h1>
                    <p className="v9-subtitle">An organized, top-down view of the compliance hierarchy.</p>
                </div>

                <div className="v9-diagram">
                    {/* Foundational Tier */}
                    <div className="v9-tier">
                        <div className="v9-card large gdpr">
                            <div className="v9-card-header">
                                <FileText />
                                <h2 className="v9-card-title">GDPR</h2>
                                <span className="v9-badge primary">Foundation</span>
                            </div>
                            <p className="v9-card-desc">The cornerstone of data privacy, establishing the core principles for all subsequent frameworks.</p>
                        </div>
                    </div>

                    <div className="v9-connector">
                        <ArrowDown size={32} />
                    </div>

                    {/* Primary Tier */}
                    <div className="v9-tier">
                        <div className="v9-card iso">
                            <div className="v9-card-header">
                                <Shield />
                                <h2 className="v9-card-title">ISO 27001</h2>
                                <span className="v9-badge secondary">Security</span>
                            </div>
                            <p className="v9-card-desc">The international standard for information security management systems (ISMS).</p>
                        </div>
                        <div className="v9-card ai-act">
                            <div className="v9-card-header">
                                <Zap />
                                <h2 className="v9-card-title">EU AI Act</h2>
                                <span className="v9-badge accent">Innovation</span>
                            </div>
                            <p className="v9-card-desc">A risk-based approach to regulating artificial intelligence systems.</p>
                        </div>
                    </div>
                    
                    <div className="v9-connector-multiple">
                        <div className="v9-line-down"></div>
                        <div className="v9-line-across"></div>
                    </div>

                    {/* Specialized Tier */}
                    <div className="v9-tier">
                        <div className="v9-card small tisax">
                             <div className="v9-card-header small">
                                <CheckCircle size={16}/>
                                <h3 className="v9-card-title small">TISAX</h3>
                            </div>
                        </div>
                        <div className="v9-card small iso">
                             <div className="v9-card-header small">
                                <Cloud size={16}/>
                                <h3 className="v9-card-title small">ISO 27017</h3>
                            </div>
                        </div>
                        <div className="v9-card small iso">
                             <div className="v9-card-header small">
                                <Server size={16}/>
                                <h3 className="v9-card-title small">ISO 27018</h3>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CommandCenterDeck;