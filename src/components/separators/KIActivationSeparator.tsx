import React from 'react';

export const KIActivationSeparator: React.FC = () => {
  return (
    <div className="relative h-32 overflow-hidden mt-10 -mb-16 z-10">
      <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
        <defs>
          <radialGradient id="kiActivation" cx="50%" cy="50%" r="40%">
            <stop offset="0%" stopColor="#e24e1b" stopOpacity="1">
              <animate attributeName="stopOpacity" values="1;0.3;1" dur="3s" repeatCount="indefinite"/>
            </stop>
            <stop offset="100%" stopColor="#ff6b3d" stopOpacity="0"/>
          </radialGradient>
        </defs>
        
        {/* Bursting neural connections */}
        <g stroke="#e24e1b" strokeWidth="2" fill="none" opacity="0.6">
          <path d="M600,64 L400,30 M600,64 L800,30 M600,64 L350,64 M600,64 L850,64 M600,64 L400,98 M600,64 L800,98" className="animate-pulse"/>
        </g>
        
        {/* Central burst */}
        <circle cx="600" cy="64" r="20" fill="url(#kiActivation)" className="animate-ping"/>
        
        {/* Satellite nodes */}
        <g fill="#e24e1b" opacity="0.8">
          <circle cx="400" cy="30" r="6" className="animate-pulse"/>
          <circle cx="800" cy="30" r="6" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
          <circle cx="350" cy="64" r="6" className="animate-pulse" style={{animationDelay: '1s'}}/>
          <circle cx="850" cy="64" r="6" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
          <circle cx="400" cy="98" r="6" className="animate-pulse" style={{animationDelay: '2s'}}/>
          <circle cx="800" cy="98" r="6" className="animate-pulse" style={{animationDelay: '2.5s'}}/>
        </g>
      </svg>
    </div>
  );
};