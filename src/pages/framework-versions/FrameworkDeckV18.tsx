import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV18.css';

const OrbitalNetworkDeck: React.FC = () => {
    return (
        <div className="v18-slide-container">
            <div className="v18-slide">
                <div className="v18-stars-bg" />
                <div className="v18-header">
                    <h1 className="v18-title">The Orbital Network</h1>
                    <p className="v18-subtitle">Mapping the gravitational pull of foundational compliance.</p>
                </div>
                <div className="v18-diagram">
                    {/* Orbits */}
                    <div className="v18-orbit" style={{ width: '400px', height: '400px' }}></div>
                    <div className="v18-orbit" style={{ width: '700px', height: '700px' }}></div>

                    {/* Core Node */}
                    <div className="v18-node-wrapper" style={{ top: '50%', left: '50%' }}>
                        <div className="v18-node core">
                            <FileText size={40} />
                            <h3>GDPR</h3>
                        </div>
                    </div>

                    {/* Inner Orbit Nodes */}
                    <div className="v18-node-wrapper" style={{ top: '22%', left: '68%' }}>
                        <div className="v18-node"><Shield /><span>ISO 27001</span></div>
                    </div>
                    <div className="v18-node-wrapper" style={{ top: '78%', left: '32%' }}>
                        <div className="v18-node"><Lightbulb /><span>EU AI Act</span></div>
                    </div>
                    
                    {/* Outer Orbit Nodes */}
                    <div className="v18-node-wrapper" style={{ top: '15%', left: '35%' }}>
                        <div className="v18-node small"><Layers /><span>ISO 27002</span></div>
                    </div>
                     <div className="v18-node-wrapper" style={{ top: '35%', left: '85%' }}>
                        <div className="v18-node small"><CheckCircle /><span>TISAX</span></div>
                    </div>
                     <div className="v18-node-wrapper" style={{ top: '65%', left: '15%' }}>
                        <div className="v18-node small"><Cloud /><span>ISO 27017</span></div>
                    </div>
                     <div className="v18-node-wrapper" style={{ top: '85%', left: '65%' }}>
                        <div className="v18-node small"><Server /><span>ISO 27018</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrbitalNetworkDeck;
