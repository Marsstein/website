import React from 'react';

export const TrustSeparator5: React.FC = () => {
  return (
    <div className="relative h-32 bg-gradient-to-r from-transparent via-cyan-50/30 to-transparent overflow-hidden">
      {/* Innovation Neural Network */}
      <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
        <defs>
          <radialGradient id="neuralGlow5" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="synapseFlow5" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.2"/>
            <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.2"/>
          </linearGradient>
        </defs>
        
        {/* Neural Connections */}
        <g stroke="url(#synapseFlow5)" strokeWidth="2" fill="none" className="animate-pulse">
          <path d="M150,50 Q300,30 450,50 Q600,70 750,50 Q900,30 1050,50"/>
          <path d="M200,78 Q350,58 500,78 Q650,98 800,78" style={{animationDelay: '0.5s'}}/>
          <path d="M120,94 Q270,74 420,94 Q570,114 720,94" style={{animationDelay: '1s'}}/>
        </g>
        
        {/* Neural Nodes */}
        <g>
          <circle cx="300" cy="40" r="6" fill="url(#neuralGlow5)" className="animate-ping"/>
          <circle cx="450" cy="50" r="8" fill="url(#neuralGlow5)" className="animate-ping" style={{animationDelay: '0.7s'}}/>
          <circle cx="600" cy="60" r="6" fill="url(#neuralGlow5)" className="animate-ping" style={{animationDelay: '1.4s'}}/>
          <circle cx="750" cy="50" r="8" fill="url(#neuralGlow5)" className="animate-ping" style={{animationDelay: '0.3s'}}/>
          <circle cx="900" cy="40" r="6" fill="url(#neuralGlow5)" className="animate-ping" style={{animationDelay: '1.1s'}}/>
          
          <circle cx="350" cy="68" r="4" fill="#06b6d4" opacity="0.7"/>
          <circle cx="500" cy="88" r="4" fill="#06b6d4" opacity="0.7"/>
          <circle cx="650" cy="108" r="4" fill="#06b6d4" opacity="0.7"/>
        </g>
        
        {/* Data Pulses */}
        <g>
          <circle cx="0" cy="50" r="3" fill="#06b6d4" className="animate-bounce">
            <animateMotion dur="6s" repeatCount="indefinite">
              <mpath href="#neuralPath1"/>
            </animateMotion>
          </circle>
          <circle cx="0" cy="78" r="2" fill="#0ea5e9" className="animate-bounce" style={{animationDelay: '2s'}}>
            <animateMotion dur="8s" repeatCount="indefinite">
              <mpath href="#neuralPath2"/>
            </animateMotion>
          </circle>
        </g>
        
        {/* Hidden paths for motion */}
        <defs>
          <path id="neuralPath1" d="M150,50 Q300,30 450,50 Q600,70 750,50 Q900,30 1050,50" fill="none"/>
          <path id="neuralPath2" d="M200,78 Q350,58 500,78 Q650,98 800,78" fill="none"/>
        </defs>
      </svg>
      
      {/* Center Innovation Brain */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full border-2 border-cyan-300 flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
          </svg>
        </div>
      </div>
    </div>
  );
};