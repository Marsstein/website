import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV29.css';

const RiverDeltaDeck: React.FC = () => {
    return (
        <div className="v29-slide-container">
            <div className="v29-slide">
                <div className="v29-map-area">
                    {/* SVG Paths */}
                    <svg className="v29-rivers" viewBox="0 0 1200 500" preserveAspectRatio="xMidYMid meet">
                        <path className="main-river" d="M 50 250 H 300" />
                        <path className="main-river" d="M 300 250 C 400 250, 400 150, 500 150" />
                        <path className="main-river dashed" d="M 300 250 C 400 250, 400 350, 500 350" />
                        <path className="distributary" d="M 500 150 H 700" />
                        <path className="distributary" d="M 700 150 C 800 150, 800 100, 900 100" />
                        <path className="distributary" d="M 700 150 C 800 150, 800 200, 900 200" />
                    </svg>

                    {/* Nodes */}
                    <div className="v29-node-wrapper" style={{ left: '4.17%', top: '50%' }}>
                        <div className="v29-node source"><FileText /><span>GDPR</span></div>
                    </div>
                     <div className="v29-node-wrapper" style={{ left: '41.67%', top: '30%' }}>
                        <div className="v29-node"><Shield /><span>ISO 27001</span></div>
                    </div>
                     <div className="v29-node-wrapper" style={{ left: '41.67%', top: '70%' }}>
                        <div className="v29-node"><Lightbulb /><span>EU AI Act</span></div>
                    </div>
                     <div className="v29-node-wrapper" style={{ left: '58.33%', top: '30%' }}>
                        <div className="v29-node"><Layers /><span>ISO 27002</span></div>
                    </div>
                     <div className="v29-node-wrapper" style={{ left: '75%', top: '20%' }}>
                        <div className="v29-node small"><Cloud /><span>ISO 27017</span></div>
                    </div>
                     <div className="v29-node-wrapper" style={{ left: '75%', top: '40%' }}>
                        <div className="v29-node small"><Server /><span>ISO 27018</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiverDeltaDeck;
