import React from 'react';

export const TrustShieldNetworkSeparator: React.FC = () => {
  return (
    <div className="relative h-36 overflow-hidden -my-18 z-10 bg-gradient-to-r from-transparent via-green-50/10 to-transparent">
      <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
        <defs>
          <radialGradient id="trustShieldGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#16a34a" stopOpacity="0.9"/>
            <stop offset="70%" stopColor="#16a34a" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#16a34a" stopOpacity="0"/>
          </radialGradient>
        </defs>
        
        {/* Shield hexagons */}
        <g fill="url(#trustShieldGrad)" stroke="#16a34a" strokeWidth="1" opacity="0.6">
          <polygon points="250,52 270,72 250,92 210,92 190,72 210,52" className="animate-pulse"/>
          <polygon points="450,52 470,72 450,92 410,92 390,72 410,52" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
          <polygon points="650,52 670,72 650,92 610,92 590,72 610,52" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
          <polygon points="850,52 870,72 850,92 810,92 790,72 810,52" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
        </g>
        
        {/* Trust connections */}
        <g stroke="#16a34a" strokeWidth="2" fill="none" opacity="0.4">
          <path d="M270,72 L390,72 M470,72 L590,72 M670,72 L790,72"/>
        </g>
        
        {/* Trust indicators */}
        <g fill="#16a34a">
          <circle cx="230" cy="72" r="4" opacity="0.9" className="animate-ping"/>
          <circle cx="430" cy="72" r="4" opacity="0.9" className="animate-ping" style={{animationDelay: '0.5s'}}/>
          <circle cx="630" cy="72" r="4" opacity="0.9" className="animate-ping" style={{animationDelay: '1s'}}/>
          <circle cx="830" cy="72" r="4" opacity="0.9" className="animate-ping" style={{animationDelay: '1.5s'}}/>
        </g>
      </svg>
    </div>
  );
};