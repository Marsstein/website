import React from 'react';

export const QuantumShieldWaveSeparator: React.FC = () => {
  return (
    <div className="relative h-24 overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 1200 96">
        <defs>
          <linearGradient id="quantumWave" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0"/>
            <stop offset="20%" stopColor="#e24e1b" stopOpacity="0.3"/>
            <stop offset="40%" stopColor="#6366f1" stopOpacity="0.6"/>
            <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.8"/>
            <stop offset="60%" stopColor="#6366f1" stopOpacity="0.6"/>
            <stop offset="80%" stopColor="#e24e1b" stopOpacity="0.3"/>
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0"/>
          </linearGradient>
          <radialGradient id="lockGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
          </radialGradient>
        </defs>
        
        {/* Double wave pattern */}
        <path d="M0,48 Q200,20 400,48 T800,48 T1200,48" 
              fill="none" stroke="url(#quantumWave)" strokeWidth="2" opacity="0.8" className="animate-pulse"/>
        <path d="M0,48 Q200,76 400,48 T800,48 T1200,48" 
              fill="none" stroke="url(#quantumWave)" strokeWidth="2" opacity="0.8" className="animate-pulse"/>
        
        {/* Flowing particles */}
        <g>
          <circle cx="100" cy="38" r="2" fill="#e24e1b" opacity="0.6">
            <animate attributeName="cy" values="38;58;38" dur="1.5s" repeatCount="indefinite"/>
            <animateTransform attributeName="transform" type="translate" values="0,0;1100,0" dur="10s" repeatCount="indefinite"/>
          </circle>
          <circle cx="300" cy="58" r="2" fill="#6366f1" opacity="0.6">
            <animate attributeName="cy" values="58;38;58" dur="2s" repeatCount="indefinite"/>
            <animateTransform attributeName="transform" type="translate" values="0,0;900,0" dur="8s" repeatCount="indefinite"/>
          </circle>
          <circle cx="500" cy="38" r="2" fill="#e24e1b" opacity="0.6">
            <animate attributeName="cy" values="38;58;38" dur="1.8s" repeatCount="indefinite"/>
            <animateTransform attributeName="transform" type="translate" values="0,0;700,0" dur="9s" repeatCount="indefinite"/>
          </circle>
        </g>
        
        {/* Enhanced central lock */}
        <g transform="translate(600,48)">
          {/* Glow effect */}
          <circle cx="0" cy="0" r="25" fill="url(#lockGlow)" className="animate-pulse"/>
          
          {/* Lock body */}
          <g transform="scale(1.2)">
            {/* Lock shackle */}
            <path d="M0,-10 C-6,-10 -10,-6 -10,0 L-10,3 L-8,3 L-8,0 C-8,-5 -5,-8 0,-8 C5,-8 8,-5 8,0 L8,3 L10,3 L10,0 C10,-6 6,-10 0,-10 Z" 
                  fill="#e24e1b" opacity="0.9"/>
            {/* Lock body */}
            <rect x="-8" y="3" width="16" height="12" rx="2" fill="#e24e1b" opacity="0.8"/>
            {/* Keyhole */}
            <circle cx="0" cy="8" r="2" fill="#fff" opacity="0.9"/>
            <rect x="-1" y="8" width="2" height="4" fill="#fff" opacity="0.9"/>
          </g>
        </g>
      </svg>
    </div>
  );
};