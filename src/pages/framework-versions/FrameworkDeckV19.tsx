import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, CheckCircle, Lightbulb } from 'lucide-react';
import './FrameworkDeckV19.css';

const LayeredArchitectureDeck: React.FC = () => {
    return (
        <div className="v19-slide-container">
            <div className="v19-slide">
                 <div className="v19-header">
                    <h1 className="v19-title">The Compliance Architecture</h1>
                    <p className="v19-subtitle">A layered perspective on the structure of regulatory frameworks.</p>
                </div>
                <div className="v19-stack">
                    {/* Layer 4 */}
                    <div className="v19-layer-group">
                        <div className="v19-layer small">
                            <Cloud /> ISO 27017
                        </div>
                         <div className="v19-layer small">
                            <Server /> ISO 27018
                        </div>
                    </div>
                     {/* Layer 3 */}
                    <div className="v19-layer-group">
                        <div className="v19-layer medium">
                            <Layers /> ISO 27002: Controls
                        </div>
                         <div className="v19-layer medium">
                            <CheckCircle /> TISAX
                        </div>
                    </div>
                     {/* Layer 2 */}
                    <div className="v19-layer-group">
                        <div className="v19-layer large">
                            <Shield /> ISO/IEC 27001: ISMS
                        </div>
                        <div className="v19-layer large">
                            <Lightbulb /> EU AI Act
                        </div>
                    </div>
                     {/* Layer 1 */}
                    <div className="v19-layer-group">
                        <div className="v19-layer foundation">
                            <FileText /> GDPR: Foundational Regulation
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LayeredArchitectureDeck;
