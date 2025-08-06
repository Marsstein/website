import React from 'react';

export const TrustSeparator1: React.FC = () => {
  return (
    <div className="relative h-32 bg-gradient-to-r from-transparent via-blue-50/30 to-transparent overflow-hidden">
      {/* Trust Chain Animation */}
      <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
        <defs>
          <linearGradient id="chainGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.1"/>
            <stop offset="50%" stopColor="#1d4ed8" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#1e40af" stopOpacity="0.1"/>
          </linearGradient>
        </defs>
        
        {/* Chain Links */}
        <g stroke="url(#chainGradient1)" strokeWidth="2" fill="none">
          <ellipse cx="300" cy="64" rx="30" ry="15" className="animate-pulse" style={{animationDelay: '0s'}}/>
          <ellipse cx="360" cy="64" rx="30" ry="15" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
          <ellipse cx="420" cy="64" rx="30" ry="15" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
          <ellipse cx="480" cy="64" rx="30" ry="15" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
          <ellipse cx="540" cy="64" rx="30" ry="15" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
          
          <ellipse cx="600" cy="64" rx="30" ry="15" className="animate-pulse" style={{animationDelay: '1s'}}/>
          <ellipse cx="660" cy="64" rx="30" ry="15" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
          <ellipse cx="720" cy="64" rx="30" ry="15" className="animate-pulse" style={{animationDelay: '1.4s'}}/>
          <ellipse cx="780" cy="64" rx="30" ry="15" className="animate-pulse" style={{animationDelay: '1.6s'}}/>
          <ellipse cx="840" cy="64" rx="30" ry="15" className="animate-pulse" style={{animationDelay: '1.8s'}}/>
          <ellipse cx="900" cy="64" rx="30" ry="15" className="animate-pulse" style={{animationDelay: '2s'}}/>
        </g>
        
        {/* Connection Lines */}
        <g stroke="#3b82f6" strokeWidth="1" opacity="0.3">
          <line x1="330" y1="64" x2="330" y2="64" className="animate-pulse"/>
          <line x1="390" y1="64" x2="390" y2="64" className="animate-pulse"/>
          <line x1="450" y1="64" x2="450" y2="64" className="animate-pulse"/>
        </g>
      </svg>
      
      {/* Center Trust Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-white rounded-full border-2 border-blue-300 flex items-center justify-center shadow-lg">
          <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  );
};