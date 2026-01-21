import React from 'react';
import { FileText, Shield, Layers, Cloud, Server, ArrowRight, Lightbulb, CheckCircle } from 'lucide-react';
import './FrameworkDeckV11.css';

const HierarchicalFlowDeck: React.FC = () => {
    return (
        <div className="v11-slide-container">
            <div className="v11-slide">
                <div className="v11-header">
                    <h1 className="v11-title">Compliance Flowchart: Control Basis</h1>
                    <p className="v11-subtitle">Understanding the foundational and derived compliance frameworks.</p>
                </div>

                <div className="v11-diagram">
                    {/* DSGVO Node */}
                    <div className="v11-node-column">
                        <div className="v11-node large gdpr">
                            <FileText size={36} />
                            <h2 className="v11-node-main-title">DSGVO / GDPR</h2>
                            <p className="v11-node-description">General Data Protection Regulation</p>
                        </div>
                    </div>

                    {/* Connectors from GDPR */}
                    <div className="v11-connector-group">
                        <div className="v11-connector solid"></div>
                        <div className="v11-connector dashed with-label">
                            <span className="v11-connector-label">if PII processed</span>
                        </div>
                    </div>

                    {/* ISO 27001 & EU AI Act Column */}
                    <div className="v11-node-column multi-row">
                        <div className="v11-node large iso27001">
                            <Shield size={36} />
                            <h2 className="v11-node-main-title">ISO/IEC 27001</h2>
                            <p className="v11-node-description">ISMS</p>
                        </div>
                        <div className="v11-gap-filler"></div>
                        <div className="v11-node large ai-act">
                            <Lightbulb size={36} />
                            <h2 className="v11-node-main-title">EU AI Act</h2>
                            <p className="v11-node-description">Artificial Intelligence Regulation</p>
                        </div>
                    </div>

                    {/* Connectors from ISO 27001 */}
                    <div className="v11-connector-group vertical-split">
                        <div className="v11-connector solid half-top"></div>
                        <div className="v11-connector solid half-bottom"></div>
                    </div>

                    {/* ISO 27002 & TISAX Column */}
                    <div className="v11-node-column multi-row">
                        <div className="v11-node large iso27002">
                            <Layers size={36} />
                            <h2 className="v11-node-main-title">ISO/IEC 27002</h2>
                            <p className="v11-node-description">Controls / Code of Practice</p>
                        </div>
                        <div className="v11-gap-filler"></div>
                        <div className="v11-node large tisax">
                            <CheckCircle size={36} />
                            <h2 className="v11-node-main-title">TISAX</h2>
                            <p className="v11-node-description">(VDA ISA / ENX)</p>
                        </div>
                    </div>

                    {/* Connectors from ISO 27002 to other ISOs */}
                    <div className="v11-connector-group vertical-split-isos">
                        <div className="v11-connector solid top-iso"></div>
                        <div className="v11-connector solid mid-iso"></div>
                        <div className="v11-connector solid bottom-iso"></div>
                    </div>

                    {/* ISO 27017, ISO 27018 Column */}
                    <div className="v11-node-column multi-row">
                        <div className="v11-node small iso27017">
                            <Cloud size={24} />
                            <h3 className="v11-node-main-title">ISO/IEC 27017</h3>
                            <p className="v11-node-description small">Cloud Controls</p>
                        </div>
                        <div className="v11-node small iso27018">
                            <Server size={24} />
                            <h3 className="v11-node-main-title">ISO/IEC 27018</h3>
                            <p className="v11-node-description small">PII in Public Cloud</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HierarchicalFlowDeck;