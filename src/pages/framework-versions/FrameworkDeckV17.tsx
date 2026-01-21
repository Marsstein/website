import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb, TrendingUp } from 'lucide-react';
import './FrameworkDeckV17.css';

const CommandDashboardDeck: React.FC = () => {
    return (
        <div className="v17-slide-container">
            <div className="v17-slide">
                <div className="v17-sidebar">
                    <div className="v17-logo">Marsstein</div>
                    <nav className="v17-nav">
                        <a href="#" className="v17-nav-item active">Frameworks</a>
                        <a href="#" className="v17-nav-item">Analytics</a>
                        <a href="#" className="v17-nav-item">Reports</a>
                    </nav>
                </div>
                <div className="v17-main-content">
                    <header className="v17-header">
                        <h1 className="v17-title">Compliance Dashboard</h1>
                        <p className="v17-subtitle">Live status of your compliance architecture.</p>
                    </header>
                    <div className="v17-grid">
                        {/* GDPR */}
                        <div className="v17-card large gdpr">
                            <div className="v17-card-header">
                                <FileText />
                                <h2>GDPR</h2>
                                <span className="v17-badge green">Active</span>
                            </div>
                            <p>Foundation for data privacy and protection.</p>
                            <div className="v17-metric">
                                <TrendingUp size={20} />
                                <span>100% Implemented</span>
                            </div>
                        </div>
                        {/* ISO 27001 */}
                        <div className="v17-card large iso">
                             <div className="v17-card-header">
                                <Shield />
                                <h2>ISO 27001</h2>
                                <span className="v17-badge green">Active</span>
                            </div>
                            <p>ISMS certified and continuously monitored.</p>
                             <div className="v17-metric">
                                <TrendingUp size={20} />
                                <span>98% Control Coverage</span>
                            </div>
                        </div>
                        {/* EU AI Act */}
                        <div className="v17-card large ai-act">
                            <div className="v17-card-header">
                                <Lightbulb />
                                <h2>EU AI Act</h2>
                                <span className="v17-badge orange">In Progress</span>
                            </div>
                            <p>Risk assessment and model governance.</p>
                            <div className="v17-metric">
                                <TrendingUp size={20} />
                                <span>75% Readiness</span>
                            </div>
                        </div>
                        {/* ISO 27002 */}
                         <div className="v17-card">
                             <div className="v17-card-header">
                                <Layers />
                                <h3>ISO 27002</h3>
                            </div>
                            <p>Security controls basis.</p>
                        </div>
                        {/* TISAX */}
                        <div className="v17-card">
                             <div className="v17-card-header">
                                <CheckCircle />
                                <h3>TISAX</h3>
                            </div>
                            <p>Automotive industry compliance.</p>
                        </div>
                        {/* ISO 27017 */}
                        <div className="v17-card">
                             <div className="v17-card-header">
                                <Cloud />
                                <h3>ISO 27017</h3>
                            </div>
                            <p>Cloud security controls.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommandDashboardDeck;
