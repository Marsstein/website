import React from 'react';

export const RegulatoryBridgeSeparator: React.FC = () => {
  return (
    <div className="relative h-32 overflow-hidden -my-16 z-10">
      <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
        <defs>
          <linearGradient id="regulatoryBridgeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.4"/>
            <stop offset="33%" stopColor="#dc2626" stopOpacity="0.8"/>
            <stop offset="66%" stopColor="#dc2626" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#e24e1b" stopOpacity="0.4"/>
          </linearGradient>
        </defs>
        
        {/* Bridge pillars */}
        <g>
          <rect x="350" y="30" width="12" height="68" rx="6" fill="url(#regulatoryBridgeGrad)" className="animate-pulse"/>
          <rect x="594" y="30" width="12" height="68" rx="6" fill="url(#regulatoryBridgeGrad)" className="animate-pulse" style={{animationDelay: '0.7s'}}/>
          <rect x="838" y="30" width="12" height="68" rx="6" fill="url(#regulatoryBridgeGrad)" className="animate-pulse" style={{animationDelay: '1.4s'}}/>
        </g>
        
        {/* Bridge connections */}
        <g stroke="#e24e1b" strokeWidth="4" fill="none" opacity="0.6">
          <path d="M362,64 Q478,54 594,64" className="animate-pulse"/>
          <path d="M606,64 Q722,54 838,64" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
        </g>
        
        {/* Abstract regulatory symbols */}
        <g fill="#e24e1b" opacity="0.8">
          <circle cx="356" cy="20" r="6" className="animate-ping"/>
          <circle cx="600" cy="20" r="6" className="animate-ping" style={{animationDelay: '0.7s'}}/>
          <circle cx="844" cy="20" r="6" fill="#e24e1b" className="animate-ping" style={{animationDelay: '1.4s'}}/>
        </g>
        
        {/* Connection flow */}
        <g>
          <circle cx="400" cy="64" r="2" fill="#dc2626" className="animate-bounce">
            <animateMotion dur="6s" repeatCount="indefinite">
              <mpath href="#regulatoryBridgePath"/>
            </animateMotion>
          </circle>
        </g>
        
        <defs>
          <path id="regulatoryBridgePath" d="M356,64 Q478,54 600,64 Q722,54 844,64" fill="none"/>
        </defs>
      </svg>
    </div>
  );
};