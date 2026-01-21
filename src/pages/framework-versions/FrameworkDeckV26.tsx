import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV26.css';

const OrganicPathwayDeck: React.FC = () => {
    return (
        <div className="v26-slide-container">
            <div className="v26-slide">
                <div className="v26-header">
                    <h1 className="v26-title">The Compliance Pathway</h1>
                    <p className="v26-subtitle">An organic representation of framework growth and dependency.</p>
                </div>
                <div className="v26-path-area">
                    {/* SVG Paths */}
                    <svg className="v26-paths">
                        <path d="M 100,250 C 250,250 250,150 400,150" />
                        <path d="M 100,250 C 250,250 250,350 400,350" strokeDasharray="8,8"/>
                        <path d="M 400,150 C 550,150 550,150 700,150" />
                        <path d="M 700,150 C 850,150 850,100 1000,100" />
                         <path d="M 700,150 C 850,150 850,200 1000,200" />
                    </svg>
                    {/* Nodes */}
                    <div className="v26-node-wrapper" style={{left: '100px', top: '250px'}}>
                        <div className="v26-node gdpr"><FileText/><span>GDPR</span></div>
                    </div>
                     <div className="v26-node-wrapper" style={{left: '400px', top: '150px'}}>
                        <div className="v26-node iso"><Shield/><span>ISO 27001</span></div>
                    </div>
                    <div className="v26-node-wrapper" style={{left: '400px', top: '350px'}}>
                        <div className="v26-node ai-act"><Lightbulb/><span>EU AI Act</span></div>
                    </div>
                    <div className="v26-node-wrapper" style={{left: '700px', top: '150px'}}>
                        <div className="v26-node iso"><Layers/><span>ISO 27002</span></div>
                    </div>
                     <div className="v26-node-wrapper" style={{left: '1000px', top: '100px'}}>
                        <div className="v26-node small iso"><Cloud/><span>ISO 27017</span></div>
                    </div>
                    <div className="v26-node-wrapper" style={{left: '1000px', top: '200px'}}>
                        <div className="v26-node small iso"><Server/><span>ISO 27018</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganicPathwayDeck;
