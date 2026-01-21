import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV12.css';

const SubwayMapDeck: React.FC = () => {
    return (
        <div className="v12-slide-container">
            <div className="v12-slide">
                <div className="v12-header">
                    <h1 className="v12-title">Compliance Transit Map</h1>
                    <p className="v12-subtitle">Your route from foundational privacy to specialized certification.</p>
                </div>
                <div className="v12-map-area">
                    {/* Lines */}
                    <svg className="v12-lines-svg">
                        <path d="M 150 250 H 350" className="v12-line line-gdpr" />
                        <path d="M 150 250 Q 250 450, 350 450" className="v12-line line-gdpr-dashed" />
                        <path d="M 350 250 H 550" className="v12-line line-iso" />
                        <path d="M 350 250 H 550" className="v12-line line-tisax-base" />
                        <path d="M 550 125 V 250 H 750" className="v12-line line-iso" />
                        <path d="M 550 375 V 250" className="v12-line line-tisax-branch" />
                    </svg>
                    
                    {/* Stations */}
                    <div className="v12-station" style={{ top: '250px', left: '150px' }}>
                        <div className="v12-station-icon-wrapper gdpr"><FileText /></div>
                        <div className="v12-station-label"><strong>GDPR</strong><br/>Foundation</div>
                    </div>
                     <div className="v12-station" style={{ top: '450px', left: '350px' }}>
                        <div className="v12-station-icon-wrapper ai-act"><Lightbulb /></div>
                        <div className="v12-station-label"><strong>EU AI Act</strong><br/>Conditional Link</div>
                    </div>
                     <div className="v12-station" style={{ top: '250px', left: '350px' }}>
                        <div className="v12-station-icon-wrapper iso"><Shield /></div>
                        <div className="v12-station-label"><strong>ISO 27001</strong><br/>ISMS</div>
                    </div>
                    <div className="v12-station" style={{ top: '250px', left: '550px' }}>
                        <div className="v12-station-icon-wrapper iso intersection">
                            <Layers />
                        </div>
                        <div className="v12-station-label"><strong>ISO 27002</strong><br/>Control Basis</div>
                    </div>
                    <div className="v12-station" style={{ top: '375px', left: '550px' }}>
                        <div className="v12-station-icon-wrapper tisax"><CheckCircle /></div>
                        <div className="v12-station-label"><strong>TISAX</strong><br/>Automotive</div>
                    </div>
                    <div className="v12-station" style={{ top: '125px', left: '750px' }}>
                        <div className="v12-station-icon-wrapper iso"><Cloud /></div>
                        <div className="v12-station-label"><strong>ISO 27017</strong><br/>Cloud Controls</div>
                    </div>
                     <div className="v12-station" style={{ top: '250px', left: '750px' }}>
                        <div className="v12-station-icon-wrapper iso"><Server /></div>
                        <div className="v12-station-label"><strong>ISO 27018</strong><br/>Cloud PII</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubwayMapDeck;