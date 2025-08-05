import React from 'react';

export const KnowledgeConstellationSeparator: React.FC = () => {
  return (
    <div className="relative h-32 overflow-hidden -my-16 z-10 bg-gradient-to-r from-transparent via-amber-50/10 to-transparent">
      <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
        <defs>
          <filter id="knowledgeStarGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Constellation connections */}
        <g stroke="#fbbf24" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="2,4">
          <path d="M150,80 L280,50 L400,70 L520,40 L650,65 L780,45 L900,75 L1050,55"/>
        </g>
        
        {/* Knowledge stars */}
        <g fill="#fbbf24" filter="url(#knowledgeStarGlow)">
          <circle cx="150" cy="80" r="3" opacity="0.9" className="animate-pulse"/>
          <circle cx="280" cy="50" r="4" opacity="1" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
          <circle cx="400" cy="70" r="3" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
          <circle cx="520" cy="40" r="5" opacity="1" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
          <circle cx="650" cy="65" r="3" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.8s'}}/>
          <circle cx="780" cy="45" r="4" opacity="0.9" className="animate-pulse" style={{animationDelay: '1s'}}/>
          <circle cx="900" cy="75" r="3" opacity="0.8" className="animate-pulse" style={{animationDelay: '1.2s'}}/>
          <circle cx="1050" cy="55" r="4" opacity="0.9" className="animate-pulse" style={{animationDelay: '1.4s'}}/>
        </g>
        
        {/* Twinkling effect */}
        <g fill="#fff" opacity="0.8">
          <circle cx="520" cy="40" r="1">
            <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite"/>
          </circle>
          <circle cx="780" cy="45" r="1">
            <animate attributeName="opacity" values="0;0.8;0" dur="2s" repeatCount="indefinite" begin="1s"/>
          </circle>
        </g>
      </svg>
    </div>
  );
};