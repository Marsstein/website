import React from 'react';

export const TrustSeparator3: React.FC = () => {
  return (
    <div className="relative h-32 bg-gradient-to-r from-transparent via-purple-50/30 to-transparent overflow-hidden">
      {/* Verification Flow */}
      <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
        <defs>
          <linearGradient id="flowGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1"/>
            <stop offset="50%" stopColor="#6366f1" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1"/>
          </linearGradient>
          <radialGradient id="nodeGlow3" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0"/>
          </radialGradient>
        </defs>
        
        {/* Flow Arrow Path */}
        <g stroke="url(#flowGradient3)" strokeWidth="3" fill="none" className="animate-pulse">
          <path d="M150,64 Q300,44 450,64 Q600,84 750,64 Q900,44 1050,64"/>
          <path d="M200,84 Q350,64 500,84 Q650,104 800,84" style={{animationDelay: '0.5s'}}/>
        </g>
        
        {/* Verification Checkpoints */}
        <g>
          <circle cx="300" cy="54" r="6" fill="url(#nodeGlow3)" className="animate-ping"/>
          <circle cx="450" cy="64" r="8" fill="url(#nodeGlow3)" className="animate-ping" style={{animationDelay: '0.4s'}}/>
          <circle cx="600" cy="74" r="6" fill="url(#nodeGlow3)" className="animate-ping" style={{animationDelay: '0.8s'}}/>
          <circle cx="750" cy="64" r="8" fill="url(#nodeGlow3)" className="animate-ping" style={{animationDelay: '1.2s'}}/>
          <circle cx="900" cy="54" r="6" fill="url(#nodeGlow3)" className="animate-ping" style={{animationDelay: '1.6s'}}/>
        </g>
        
        {/* Moving Verification Signal */}
        <circle cx="0" cy="64" r="4" fill="#8b5cf6" className="animate-bounce">
          <animateMotion dur="4s" repeatCount="indefinite">
            <mpath href="#verificationPath"/>
          </animateMotion>
        </circle>
        
        {/* Hidden path for motion */}
        <defs>
          <path id="verificationPath" d="M150,64 Q300,44 450,64 Q600,84 750,64 Q900,44 1050,64" fill="none"/>
        </defs>
      </svg>
      
      {/* Center Verification Badge */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full border-2 border-purple-300 flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};