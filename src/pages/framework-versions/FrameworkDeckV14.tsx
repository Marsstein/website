import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV14.css';

const GrowthCatalystDeck: React.FC = () => {
    return (
        <div className="v14-slide-container">
            <div className="v14-slide">
                <div className="v14-glow-background" />
                <div className="v14-header">
                    <h1 className="v14-title">The Growth Catalyst</h1>
                    <p className="v14-subtitle">From a foundational seed, a compliance ecosystem emerges.</p>
                </div>
                <div className="v14-diagram">
                    {/* SVG Connectors */}
                    <svg className="v14-connectors">
                         <defs>
                            <linearGradient id="v14-grad-gdpr" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#e24e1b" />
                                <stop offset="100%" stopColor="rgba(226, 78, 27, 0.3)" />
                            </linearGradient>
                             <linearGradient id="v14-grad-iso" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#39B37B" />
                                <stop offset="100%" stopColor="rgba(57, 179, 123, 0.3)" />
                            </linearGradient>
                        </defs>
                        {/* GDPR to children */}
                        <path d="M 150 250 C 250 250, 250 125, 350 125" />
                        <path d="M 150 250 C 250 250, 250 375, 350 375" />
                        {/* ISO to children */}
                        <path d="M 350 125 C 450 125, 450 125, 550 125" className="iso-path" />
                        <path d="M 350 125 C 450 125, 450 250, 550 250" className="iso-path" />
                        {/* ISO2 to children */}
                        <path d="M 550 125 C 650 125, 650 75, 750 75" className="iso-path" />
                        <path d="M 550 125 C 650 125, 650 175, 750 175" className="iso-path" />
                    </svg>

                    {/* Nodes */}
                    <div className="v14-node-wrapper" style={{ top: '250px', left: '150px' }}>
                        <div className="v14-node gdpr"><FileText size={32} /><span>GDPR</span></div>
                    </div>
                     <div className="v14-node-wrapper" style={{ top: '125px', left: '350px' }}>
                        <div className="v14-node iso"><Shield size={28} /><span>ISO 27001</span></div>
                    </div>
                     <div className="v14-node-wrapper" style={{ top: '375px', left: '350px' }}>
                        <div className="v14-node ai-act"><Lightbulb size={28} /><span>EU AI Act</span></div>
                    </div>
                     <div className="v14-node-wrapper" style={{ top: '125px', left: '550px' }}>
                        <div className="v14-node iso"><Layers size={24} /><span>ISO 27002</span></div>
                    </div>
                     <div className="v14-node-wrapper" style={{ top: '250px', left: '550px' }}>
                        <div className="v14-node tisax"><CheckCircle size={24} /><span>TISAX</span></div>
                    </div>
                    <div className="v14-node-wrapper" style={{ top: '75px', left: '750px' }}>
                        <div className="v14-node iso small"><Cloud size={20} /><span>ISO 27017</span></div>
                    </div>
                    <div className="v14-node-wrapper" style={{ top: '175px', left: '750px' }}>
                        <div className="v14-node iso small"><Server size={20} /><span>ISO 27018</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrowthCatalystDeck;
