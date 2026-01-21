import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV22.css';

const ChevronFlowDeck: React.FC = () => {
    return (
        <div className="v22-slide-container">
            <div className="v22-slide">
                <div className="v22-header">
                    <h1 className="v22-title">Strategic Compliance Flow</h1>
                    <p className="v22-subtitle">A phased approach from foundational principles to specialized controls.</p>
                </div>
                <div className="v22-chevron-container">
                    {/* Phase 1 */}
                    <div className="v22-chevron-item">
                        <div className="v22-chevron-bg" />
                        <div className="v22-chevron-content">
                            <div className="v22-phase-label">01: Foundation</div>
                            <div className="v22-card">
                                <FileText />
                                <h3>GDPR</h3>
                            </div>
                        </div>
                    </div>
                    {/* Phase 2 */}
                    <div className="v22-chevron-item">
                         <div className="v22-chevron-bg" />
                        <div className="v22-chevron-content">
                            <div className="v22-phase-label">02: Core & AI</div>
                            <div className="v22-card"><Shield /><h3>ISO 27001</h3></div>
                            <div className="v22-card"><Lightbulb /><h3>EU AI Act</h3></div>
                        </div>
                    </div>
                     {/* Phase 3 */}
                    <div className="v22-chevron-item">
                         <div className="v22-chevron-bg" />
                        <div className="v22-chevron-content">
                            <div className="v22-phase-label">03: Controls</div>
                            <div className="v22-card"><Layers /><h3>ISO 27002</h3></div>
                             <div className="v22-card"><CheckCircle /><h3>TISAX</h3></div>
                        </div>
                    </div>
                    {/* Phase 4 */}
                    <div className="v22-chevron-item">
                        <div className="v22-chevron-bg" />
                        <div className="v22-chevron-content">
                             <div className="v22-phase-label">04: Cloud</div>
                             <div className="v22-card small"><Cloud /><span>ISO 27017</span></div>
                             <div className="v22-card small"><Server /><span>ISO 27018</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChevronFlowDeck;
