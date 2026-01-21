import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV24.css';

const TimelineInfographicDeck: React.FC = () => {
    return (
        <div className="v24-slide-container">
            <div className="v24-slide">
                <div className="v24-header">
                    <h1 className="v24-title">Compliance Journey</h1>
                    <p className="v24-subtitle">A chronological perspective on framework implementation.</p>
                </div>
                <div className="v24-timeline">
                    <div className="v24-line" />
                    {/* Item 1 */}
                    <div className="v24-item">
                        <div className="v24-dot gdpr" />
                        <div className="v24-content">
                            <h3>GDPR Foundation</h3>
                            <p>Establish the core principles of data privacy.</p>
                        </div>
                    </div>
                     {/* Item 2 */}
                    <div className="v24-item">
                        <div className="v24-dot iso" />
                        <div className="v24-content">
                            <h3>ISO 27001 / EU AI Act</h3>
                            <p>Implement ISMS and address AI-specific risks.</p>
                        </div>
                    </div>
                     {/* Item 3 */}
                    <div className="v24-item">
                        <div className="v24-dot iso" />
                        <div className="v24-content">
                            <h3>ISO 27002 & TISAX</h3>
                            <p>Apply detailed controls and industry-specific standards.</p>
                        </div>
                    </div>
                     {/* Item 4 */}
                    <div className="v24-item">
                        <div className="v24-dot iso" />
                        <div className="v24-content">
                            <h3>Cloud Specialization</h3>
                            <p>Implement ISO 27017/27018 for cloud environments.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TimelineInfographicDeck;
