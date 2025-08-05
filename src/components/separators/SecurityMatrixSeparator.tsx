import React from 'react';

export const SecurityMatrixSeparator: React.FC = () => {
  return (
    <div className="relative h-36 overflow-hidden -my-18 z-10">
      <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
        <defs>
          <radialGradient id="securityMatrixGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e24e1b" stopOpacity="1"/>
            <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
          </radialGradient>
          <pattern id="securityMatrixGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#e24e1b" opacity="0.3"/>
          </pattern>
        </defs>
        
        {/* Security grid background */}
        <rect width="1200" height="144" fill="url(#securityMatrixGrid)" opacity="0.4"/>
        
        {/* Security nodes */}
        <g>
          <circle cx="240" cy="72" r="18" fill="url(#securityMatrixGlow)" opacity="0.7" className="animate-ping"/>
          <circle cx="480" cy="72" r="16" fill="url(#securityMatrixGlow)" opacity="0.7" className="animate-ping" style={{animationDelay: '0.4s'}}/>
          <circle cx="720" cy="72" r="20" fill="url(#securityMatrixGlow)" opacity="0.7" className="animate-ping" style={{animationDelay: '0.8s'}}/>
          <circle cx="960" cy="72" r="17" fill="url(#securityMatrixGlow)" opacity="0.7" className="animate-ping" style={{animationDelay: '1.2s'}}/>
        </g>
        
        {/* Security connections */}
        <g stroke="#e24e1b" strokeWidth="2" fill="none" opacity="0.5">
          <line x1="258" y1="72" x2="462" y2="72" className="animate-pulse"/>
          <line x1="498" y1="72" x2="702" y2="72" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
          <line x1="738" y1="72" x2="942" y2="72" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
        </g>
        
        {/* Abstract security barriers */}
        <g stroke="#e24e1b" strokeWidth="1" fill="none" opacity="0.3">
          <circle cx="240" cy="72" r="35" className="animate-pulse">
            <animate attributeName="r" values="35;45;35" dur="3s" repeatCount="indefinite"/>
          </circle>
          <circle cx="720" cy="72" r="40" className="animate-pulse" style={{animationDelay: '1s'}}>
            <animate attributeName="r" values="40;50;40" dur="2.5s" repeatCount="indefinite"/>
          </circle>
        </g>
      </svg>
    </div>
  );
};