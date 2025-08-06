import React from 'react';

export const AIRiskSpectrumSeparator: React.FC = () => {
  return (
    <div className="relative h-40 overflow-hidden -my-20 z-10">
      <svg className="w-full h-full" viewBox="0 0 1200 160" preserveAspectRatio="none">
        <defs>
          <linearGradient id="aiRiskSpectrum" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#dc2626" stopOpacity="0.9"/>
            <stop offset="25%" stopColor="#ea580c" stopOpacity="0.8"/>
            <stop offset="50%" stopColor="#e24e1b" stopOpacity="0.7"/>
            <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#16a34a" stopOpacity="0.5"/>
          </linearGradient>
        </defs>
        
        {/* Risk spectrum wave */}
        <path d="M0,80 Q300,40 600,80 Q900,120 1200,80" 
              stroke="url(#aiRiskSpectrum)" 
              strokeWidth="8" 
              fill="none" 
              className="animate-pulse"/>
        
        {/* Risk level indicators */}
        <g>
          <rect x="100" y="60" width="180" height="40" rx="20" fill="#dc2626" opacity="0.3" className="animate-pulse"/>
          <rect x="320" y="65" width="140" height="30" rx="15" fill="#ea580c" opacity="0.3" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
          <rect x="500" y="70" width="100" height="20" rx="10" fill="#e24e1b" opacity="0.3" className="animate-pulse" style={{animationDelay: '1s'}}/>
          <rect x="640" y="75" width="60" height="10" rx="5" fill="#16a34a" opacity="0.3" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
        </g>
        
        {/* Abstract AI nodes */}
        <g>
          <circle cx="190" cy="80" r="8" fill="#dc2626" className="animate-ping"/>
          <circle cx="390" cy="80" r="6" fill="#ea580c" className="animate-ping" style={{animationDelay: '0.3s'}}/>
          <circle cx="550" cy="80" r="7" fill="#e24e1b" className="animate-ping" style={{animationDelay: '0.6s'}}/>
          <circle cx="670" cy="80" r="5" fill="#16a34a" className="animate-ping" style={{animationDelay: '0.9s'}}/>
        </g>
        
        {/* Timeline markers */}
        <g fill="#e24e1b" opacity="0.6">
          <rect x="898" y="120" width="2" height="20" className="animate-pulse"/>
          <rect x="998" y="120" width="2" height="20" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
          <rect x="1098" y="120" width="2" height="20" className="animate-pulse" style={{animationDelay: '1s'}}/>
        </g>
      </svg>
    </div>
  );
};