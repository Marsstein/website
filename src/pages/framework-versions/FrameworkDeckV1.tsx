import React from 'react';
import './FrameworkDeckV1.css';

const FrameworkDeck: React.FC = () => {
    return (
        <div className="slide-container">
            <div className="slide">
                <div className="title">Compliance Frameworks</div>
                <div className="diagram">
                    <div className="box gdpr">GDPR</div>
                    <div className="arrows">
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                        <div className="arrow"></div>
                    </div>
                    <div className="branches">
                        <div className="branch">
                            <div className="box iso">ISO 27001</div>
                            <div className="arrow"></div>
                            <div className="box tisax">TISAX</div>
                        </div>
                        <div className="branch">
                            <div className="box ai-act">EU AI Act</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrameworkDeck;
