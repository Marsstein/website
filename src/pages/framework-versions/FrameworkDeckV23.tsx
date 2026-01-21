import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb, ArrowDown } from 'lucide-react';
import './FrameworkDeckV23.css';

const VerticalCascadeDeck: React.FC = () => {
    return (
        <div className="v23-slide-container">
            <div className="v23-slide">
                 <div className="v23-header">
                    <h1 className="v23-title">The Compliance Cascade</h1>
                    <p className="v23-subtitle">A top-down architectural view of framework dependencies.</p>
                </div>
                <div className="v23-cascade">
                    {/* Tier 1 */}
                    <div className="v23-tier">
                        <div className="v23-card large gdpr">
                            <FileText />
                            <h3>GDPR</h3>
                        </div>
                    </div>
                    <div className="v23-connector"><ArrowDown /></div>
                    {/* Tier 2 */}
                    <div className="v23-tier">
                        <div className="v23-card iso"><Shield /><h3>ISO 27001</h3></div>
                        <div className="v23-card ai-act"><Lightbulb /><h3>EU AI Act</h3></div>
                    </div>
                    <div className="v23-connector"><ArrowDown /></div>
                    {/* Tier 3 */}
                    <div className="v23-tier">
                        <div className="v23-card iso"><Layers /><h3>ISO 27002</h3></div>
                        <div className="v23-card tisax"><CheckCircle /><h3>TISAX</h3></div>
                    </div>
                    <div className="v23-connector"><ArrowDown /></div>
                    {/* Tier 4 */}
                    <div className="v23-tier">
                        <div className="v23-card small iso"><Cloud /><span>ISO 27017</span></div>
                        <div className="v23-card small iso"><Server /><span>ISO 27018</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VerticalCascadeDeck;
