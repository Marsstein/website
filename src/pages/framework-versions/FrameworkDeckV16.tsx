import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV16.css';

const StrategicRoadmapDeck: React.FC = () => {
    return (
        <div className="v16-slide-container">
            <div className="v16-slide">
                <div className="v16-header">
                    <h1 className="v16-title">The Compliance Roadmap</h1>
                    <p className="v16-subtitle">A strategic timeline from foundational regulation to specialized implementation.</p>
                </div>
                <div className="v16-timeline">
                    <div className="v16-timeline-line" />
                    {/* Phase 1 */}
                    <div className="v16-phase">
                        <div className="v16-phase-label">Phase 01: Foundation</div>
                        <div className="v16-milestone gdpr">
                            <div className="v16-milestone-icon"><FileText /></div>
                            <div className="v16-milestone-content">
                                <h3>GDPR</h3>
                                <p>Establish core data protection principles.</p>
                            </div>
                        </div>
                    </div>
                    {/* Phase 2 */}
                    <div className="v16-phase">
                        <div className="v16-phase-label">Phase 02: Core Frameworks</div>
                        <div className="v16-milestone iso">
                            <div className="v16-milestone-icon"><Shield /></div>
                             <div className="v16-milestone-content">
                                <h3>ISO 27001</h3>
                                <p>Implement the Information Security Management System (ISMS).</p>
                            </div>
                        </div>
                         <div className="v16-milestone ai-act">
                            <div className="v16-milestone-icon"><Lightbulb /></div>
                            <div className="v16-milestone-content">
                                <h3>EU AI Act</h3>
                                <p>Address AI-specific risks and requirements.</p>
                            </div>
                        </div>
                    </div>
                    {/* Phase 3 */}
                    <div className="v16-phase">
                        <div className="v16-phase-label">Phase 03: Specialization</div>
                        <div className="v16-milestone iso">
                            <div className="v16-milestone-icon"><Layers /></div>
                             <div className="v16-milestone-content">
                                <h3>ISO 27002</h3>
                                <p>Deploy specific security controls.</p>
                            </div>
                        </div>
                        <div className="v16-milestone tisax">
                            <div className="v16-milestone-icon"><CheckCircle /></div>
                            <div className="v16-milestone-content">
                                <h3>TISAX</h3>
                                <p>Meet automotive industry standards.</p>
                            </div>
                        </div>
                    </div>
                     {/* Phase 4 */}
                    <div className="v16-phase">
                        <div className="v16-phase-label">Phase 04: Cloud Controls</div>
                        <div className="v16-milestone iso small">
                            <div className="v16-milestone-icon"><Cloud /></div>
                             <div className="v16-milestone-content">
                                <h3>ISO 27017</h3>
                            </div>
                        </div>
                        <div className="v16-milestone iso small">
                             <div className="v16-milestone-icon"><Server /></div>
                             <div className="v16-milestone-content">
                                <h3>ISO 27018</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrategicRoadmapDeck;
