import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV28.css';

const BotanicalGrowthDeck: React.FC = () => {
    return (
        <div className="v28-slide-container">
            <div className="v28-slide">
                <div className="v28-header">
                    <h1 className="v28-title">Compliance Ecosystem Growth</h1>
                    <p className="v28-subtitle">From a foundational root, a framework of standards blossoms.</p>
                </div>
                <div className="v28-garden-area">
                    {/* SVG Paths */}
                    <svg className="v28-vines" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid meet">
                        <path d="M 100 450 C 200 450, 250 200, 400 200" />
                        <path d="M 400 200 C 550 200, 550 200, 700 200" />
                        <path d="M 700 200 C 850 200, 850 150, 1000 150" />
                        <path d="M 700 200 C 850 200, 850 250, 1000 250" />
                        <path d="M 400 200 C 550 200, 550 350, 700 350" />
                    </svg>

                    {/* Nodes */}
                    <div className="v28-node-wrapper" style={{ left: '8.33%', top: '75%' }}>
                        <div className="v28-node root">
                            <FileText />
                            <h3>GDPR</h3>
                        </div>
                    </div>
                     <div className="v28-node-wrapper" style={{ left: '33.33%', top: '33.33%' }}>
                        <div className="v28-node branch">
                            <Shield />
                            <h3>ISO 27001</h3>
                        </div>
                    </div>
                    <div className="v28-node-wrapper" style={{ left: '58.33%', top: '33.33%' }}>
                        <div className="v28-node branch">
                           <Layers />
                           <h3>ISO 27002</h3>
                        </div>
                    </div>
                     <div className="v28-node-wrapper" style={{ left: '58.33%', top: '58.33%' }}>
                        <div className="v28-node fruit">
                           <CheckCircle />
                           <h3>TISAX</h3>
                        </div>
                    </div>
                     <div className="v28-node-wrapper" style={{ left: '83.33%', top: '25%' }}>
                        <div className="v28-node fruit small">
                           <Cloud />
                           <span>ISO 27017</span>
                        </div>
                    </div>
                     <div className="v28-node-wrapper" style={{ left: '83.33%', top: '41.67%' }}>
                        <div className="v28-node fruit small">
                           <Server />
                           <span>ISO 27018</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BotanicalGrowthDeck;
