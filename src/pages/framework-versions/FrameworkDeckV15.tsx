import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV15.css';

const RefinedCatalystDeck: React.FC = () => {
    return (
        <div className="v15-slide-container">
            <div className="v15-slide">
                <div className="v15-header">
                    <h1 className="v15-title">
                        Compliance Catalyst: From <span className="v15-gradient-text">Principle to Practice</span>
                    </h1>
                    <p className="v15-subtitle">Visualizing how GDPR principles catalyze a spectrum of specialized security standards.</p>
                </div>
                <div className="v15-diagram">
                    {/* SVG Connectors */}
                    <svg className="v15-connectors">
                        <defs>
                            <linearGradient id="v15-grad-red" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#e24e1b" />
                                <stop offset="100%" stopColor="#ff6b3d" />
                            </linearGradient>
                             <linearGradient id="v15-grad-green" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#39B37B" />
                                <stop offset="100%" stopColor="#4ade80" />
                            </linearGradient>
                        </defs>
                        {/* GDPR Branches */}
                        <path d="M 200 250 C 300 250, 300 150, 400 150" className="v15-path-red" />
                        <path d="M 200 250 C 300 250, 300 350, 400 350" className="v15-path-red-dashed" />
                        {/* ISO Branch */}
                        <path d="M 620 150 H 700" className="v15-path-green" />
                        {/* TISAX Branch */}
                        <path d="M 620 150 C 650 150, 650 250, 700 250" className="v15-path-green" />
                        {/* ISO2 Branch */}
                         <path d="M 920 150 C 950 150, 950 100, 1000 100" className="v15-path-green" />
                         <path d="M 920 150 C 950 150, 950 200, 1000 200" className="v15-path-green" />
                    </svg>

                    {/* Nodes */}
                    <div className="v15-card-wrapper" style={{ top: '250px', left: '50px' }}>
                        <div className="v15-card large gdpr">
                            <FileText className="v15-icon" />
                            <div className="v15-card-content">
                                <h2 className="v15-card-title">GDPR</h2>
                                <p className="v15-card-desc">Foundational Principle</p>
                            </div>
                        </div>
                    </div>
                     <div className="v15-card-wrapper" style={{ top: '150px', left: '400px' }}>
                        <div className="v15-card iso">
                            <Shield className="v15-icon" />
                            <div className="v15-card-content">
                                <h2 className="v15-card-title">ISO 27001</h2>
                                <p className="v15-card-desc">ISMS Framework</p>
                            </div>
                        </div>
                    </div>
                     <div className="v15-card-wrapper" style={{ top: '350px', left: '400px' }}>
                        <div className="v15-card ai-act">
                            <Lightbulb className="v15-icon" />
                            <div className="v15-card-content">
                                <h2 className="v15-card-title">EU AI Act</h2>
                                <p className="v15-card-desc">AI Regulation</p>
                            </div>
                        </div>
                    </div>
                    <div className="v15-card-wrapper" style={{ top: '150px', left: '700px' }}>
                        <div className="v15-card iso">
                            <Layers className="v15-icon" />
                            <div className="v15-card-content">
                                <h2 className="v15-card-title">ISO 27002</h2>
                                <p className="v15-card-desc">Control Basis</p>
                            </div>
                        </div>
                    </div>
                    <div className="v15-card-wrapper" style={{ top: '250px', left: '700px' }}>
                        <div className="v15-card tisax">
                            <CheckCircle className="v15-icon" />
                            <div className="v15-card-content">
                                <h2 className="v15-card-title">TISAX</h2>
                                <p className="v15-card-desc">Automotive Standard</p>
                            </div>
                        </div>
                    </div>
                    <div className="v15-card-wrapper" style={{ top: '100px', left: '1000px' }}>
                        <div className="v15-card small iso">
                            <Cloud className="v15-icon" />
                            <div className="v15-card-content">
                                <h3 className="v15-card-title">ISO 27017</h3>
                            </div>
                        </div>
                    </div>
                     <div className="v15-card-wrapper" style={{ top: '200px', left: '1000px' }}>
                        <div className="v15-card small iso">
                            <Server className="v15-icon" />
                             <div className="v15-card-content">
                                <h3 className="v15-card-title">ISO 27018</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RefinedCatalystDeck;
