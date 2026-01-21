import React from 'react';
import { FileText, Shield, Zap, CheckCircle, Cloud, Server } from 'lucide-react';
import './FrameworkDeckV10.css';

const SpectrumDeck: React.FC = () => {
    return (
        <div className="v10-slide-container">
            <div className="v10-slide">
                <div className="v10-background-gradient" />
                <div className="v10-header">
                    <h1 className="v10-title">The Compliance Spectrum</h1>
                    <p className="v10-subtitle">From a unified source, a spectrum of specialized standards emerges.</p>
                </div>
                <div className="v10-diagram">
                    <div className="v10-source-node">
                        <FileText size={48} />
                        <h2 className="v10-source-title">GDPR</h2>
                    </div>
                    <div className="v10-grid">
                        <div className="v10-card">
                            <Shield className="v10-icon green" />
                            <h3 className="v10-card-title">ISO 27001</h3>
                            <p className="v10-card-desc">Information Security</p>
                        </div>
                        <div className="v10-card">
                            <Zap className="v10-icon orange" />
                            <h3 className="v10-card-title">EU AI Act</h3>
                            <p className="v10-card-desc">AI Systems Regulation</p>
                        </div>
                        <div className="v10-card">
                            <CheckCircle className="v10-icon blue" />
                            <h3 className="v10-card-title">TISAX</h3>
                            <p className="v10-card-desc">Automotive Security</p>
                        </div>
                        <div className="v10-card">
                            <Cloud className="v10-icon green" />
                            <h3 className="v10-card-title">ISO 27017</h3>
                            <p className="v10-card-desc">Cloud Services</p>
                        </div>
                         <div className="v10-card">
                            <Server className="v10-icon green" />
                            <h3 className="v10-card-title">ISO 27018</h3>
                            <p className="v10-card-desc">PII in Public Clouds</p>
                        </div>
                        <div className="v10-card placeholder" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SpectrumDeck;
