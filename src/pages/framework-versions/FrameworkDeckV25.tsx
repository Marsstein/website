import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV25.css';

const PhasedGanttChartDeck: React.FC = () => {
    return (
        <div className="v25-slide-container">
            <div className="v25-slide">
                <div className="v25-header">
                    <h1 className="v25-title">Compliance Implementation Plan</h1>
                    <p className="v25-subtitle">A phased Gantt chart for strategic framework deployment.</p>
                </div>
                <div className="v25-gantt-chart">
                    <div className="v25-row header">
                        <div>Framework</div>
                        <div>Phase 1: Foundation</div>
                        <div>Phase 2: Core ISMS</div>
                        <div>Phase 3: Specialization</div>
                    </div>
                    {/* GDPR */}
                    <div className="v25-row">
                        <div className="v25-task-name"><FileText /> GDPR</div>
                        <div className="v25-bar-cell"><div className="v25-bar gdpr" style={{ width: '100%' }}></div></div>
                        <div className="v25-bar-cell"></div>
                        <div className="v25-bar-cell"></div>
                    </div>
                     {/* ISO 27001 */}
                    <div className="v25-row">
                        <div className="v25-task-name"><Shield /> ISO 27001</div>
                        <div className="v25-bar-cell"><div className="v25-dep-line"></div></div>
                        <div className="v25-bar-cell"><div className="v25-bar iso" style={{ width: '100%' }}></div></div>
                        <div className="v25-bar-cell"></div>
                    </div>
                    {/* EU AI Act */}
                     <div className="v25-row">
                        <div className="v25-task-name"><Lightbulb /> EU AI Act</div>
                        <div className="v25-bar-cell"><div className="v25-dep-line"></div></div>
                        <div className="v25-bar-cell"><div className="v25-bar ai-act" style={{ width: '80%' }}></div></div>
                        <div className="v25-bar-cell"></div>
                    </div>
                     {/* ISO 27002 */}
                    <div className="v25-row">
                        <div className="v25-task-name"><Layers /> ISO 27002</div>
                        <div className="v25-bar-cell"></div>
                        <div className="v25-bar-cell"><div className="v25-dep-line"></div></div>
                        <div className="v25-bar-cell"><div className="v25-bar iso" style={{ width: '100%' }}></div></div>
                    </div>
                    {/* TISAX */}
                    <div className="v25-row">
                        <div className="v25-task-name"><CheckCircle /> TISAX</div>
                        <div className="v25-bar-cell"></div>
                        <div className="v25-bar-cell"><div className="v25-dep-line"></div></div>
                        <div className="v25-bar-cell"><div className="v25-bar tisax" style={{ width: '70%' }}></div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhasedGanttChartDeck;
