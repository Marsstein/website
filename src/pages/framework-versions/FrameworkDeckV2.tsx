import React from 'react';
import './FrameworkDeckV2.css';

const FrameworkDeckV2: React.FC = () => {
    return (
        <div className="slide-container-v2">
            <div className="slide-v2">
                <div className="title-v2">Compliance Frameworks</div>
                <div className="diagram-v2">
                    <div className="box-v2 gdpr-v2">GDPR</div>
                    <div className="line-v2"></div>
                    <div className="branch-container-v2">
                        <div className="branch-v2">
                            <div className="box-v2 iso-v2">ISO 27001</div>
                            <div className="line-v2 horizontal-v2"></div>
                            <div className="box-v2 tisax-v2">TISAX</div>
                        </div>
                        <div className="branch-v2">
                            <div className="box-v2 ai-act-v2">EU AI Act</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FrameworkDeckV2;
