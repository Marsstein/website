import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV30.css';

const NeuralSynapseDeck: React.FC = () => {
    return (
        <div className="v30-slide-container">
            <div className="v30-slide">
                <div className="v30-header">
                    <h1 className="v30-title">The Compliance Network</h1>
                    <p className="v30-subtitle">An interconnected system of regulatory and security frameworks.</p>
                </div>
                <div className="v30-network-area">
                    {/* SVG Paths */}
                    <svg className="v30-synapses" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid meet">
                        <path d="M 150 250 H 400" />
                        <path d="M 400 250 C 400 150, 400 150, 550 150" />
                        <path d="M 400 250 C 400 350, 400 350, 550 350" />
                        <path d="M 550 150 H 700" />
                        <path d="M 700 150 C 700 100, 700 100, 850 100" />
                        <path d="M 700 150 C 700 200, 700 200, 850 200" />
                    </svg>

                    {/* Nodes */}
                    <div className="v30-node-wrapper" style={{ left: '12.5%', top: '50%' }}>
                        <div className="v30-node core"><FileText /></div>
                    </div>
                     <div className="v30-node-wrapper" style={{ left: '33.33%', top: '50%' }}>
                        <div className="v30-node relay" />
                    </div>
                     <div className="v30-node-wrapper" style={{ left: '45.83%', top: '30%' }}>
                        <div className="v30-node"><Shield /></div>
                    </div>
                    <div className="v30-node-wrapper" style={{ left: '45.83%', top: '70%' }}>
                        <div className="v30-node"><Lightbulb /></div>
                    </div>
                     <div className="v30-node-wrapper" style={{ left: '58.33%', top: '30%' }}>
                        <div className="v30-node relay" />
                    </div>
                    <div className="v30-node-wrapper" style={{ left: '70.83%', top: '20%' }}>
                        <div className="v30-node small"><Cloud /></div>
                    </div>
                    <div className="v30-node-wrapper" style={{ left: '70.83%', top: '40%' }}>
                        <div className="v30-node small"><Server /></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NeuralSynapseDeck;
