import React from 'react';

export const TrustSeparator2: React.FC = () => {
  return (
    <div className="relative h-32 bg-gradient-to-r from-transparent via-emerald-50/30 to-transparent overflow-hidden">
      {/* Shield Network Pattern */}
      <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
        <defs>
          <radialGradient id="shieldGlow2" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
          </radialGradient>
          <linearGradient id="networkLine2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0"/>
            <stop offset="50%" stopColor="#10b981" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#10b981" stopOpacity="0"/>
          </linearGradient>
        </defs>
        
        {/* Network Lines */}
        <g stroke="url(#networkLine2)" strokeWidth="1.5" fill="none" className="animate-pulse">
          <path d="M200,64 L400,44 L600,64 L800,44 L1000,64"/>
          <path d="M250,84 L450,64 L650,84 L850,64 L1050,84" style={{animationDelay: '0.5s'}}/>
          <path d="M150,44 L350,84 L550,44 L750,84 L950,44" style={{animationDelay: '1s'}}/>
        </g>
        
        {/* Shield Nodes */}
        <g>
          <circle cx="400" cy="44" r="8" fill="url(#shieldGlow2)" className="animate-ping"/>
          <circle cx="600" cy="64" r="10" fill="url(#shieldGlow2)" className="animate-ping" style={{animationDelay: '0.3s'}}/>
          <circle cx="800" cy="44" r="8" fill="url(#shieldGlow2)" className="animate-ping" style={{animationDelay: '0.6s'}}/>
          <circle cx="450" cy="64" r="6" fill="#10b981" opacity="0.7"/>
          <circle cx="650" cy="84" r="6" fill="#10b981" opacity="0.7"/>
          <circle cx="850" cy="64" r="6" fill="#10b981" opacity="0.7"/>
        </g>
      </svg>
      
      {/* Center Shield Network */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 bg-white rounded-full border-2 border-emerald-300 flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          {/* Network Indicators */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-emerald-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
      </div>
    </div>
  );
};