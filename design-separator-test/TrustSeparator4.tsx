import React from 'react';

export const TrustSeparator4: React.FC = () => {
  return (
    <div className="relative h-32 bg-gradient-to-r from-transparent via-orange-50/30 to-transparent overflow-hidden">
      {/* Excellence Grid Pattern */}
      <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
        <defs>
          <pattern id="excellencePattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect width="60" height="60" fill="none" stroke="#f97316" strokeWidth="0.5" opacity="0.3"/>
            <circle cx="30" cy="30" r="2" fill="#f97316" opacity="0.4"/>
          </pattern>
          <radialGradient id="excellenceGlow4" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f97316" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#f97316" stopOpacity="0"/>
          </radialGradient>
        </defs>
        
        {/* Grid Background */}
        <rect width="100%" height="100%" fill="url(#excellencePattern)"/>
        
        {/* Excellence Nodes */}
        <g>
          <circle cx="240" cy="40" r="8" fill="url(#excellenceGlow4)" className="animate-pulse"/>
          <circle cx="360" cy="64" r="10" fill="url(#excellenceGlow4)" className="animate-pulse" style={{animationDelay: '0.3s'}}/>
          <circle cx="480" cy="40" r="8" fill="url(#excellenceGlow4)" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
          <circle cx="600" cy="88" r="6" fill="#f97316" opacity="0.7"/>
          <circle cx="720" cy="64" r="10" fill="url(#excellenceGlow4)" className="animate-pulse" style={{animationDelay: '0.9s'}}/>
          <circle cx="840" cy="40" r="8" fill="url(#excellenceGlow4)" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
          <circle cx="960" cy="88" r="6" fill="#f97316" opacity="0.7"/>
        </g>
        
        {/* Excellence Connections */}
        <g stroke="#f97316" strokeWidth="1" opacity="0.4" fill="none">
          <path d="M240,40 L360,64 L480,40" className="animate-pulse"/>
          <path d="M360,64 L600,88 L720,64" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
          <path d="M720,64 L840,40 L960,88" className="animate-pulse" style={{animationDelay: '1s'}}/>
        </g>
      </svg>
      
      {/* Center Excellence Star */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full border-2 border-orange-300 flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </div>
    </div>
  );
};