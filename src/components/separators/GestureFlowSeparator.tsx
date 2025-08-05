import React from 'react';

export const GestureFlowSeparator: React.FC = () => {
  return (
    <div className="relative h-32 overflow-hidden -my-16 z-10">
      <svg className="w-full h-full" viewBox="0 0 1200 128" preserveAspectRatio="none">
        <defs>
          <linearGradient id="gestureFlowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" stopOpacity="0"/>
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#06b6d4" stopOpacity="0"/>
          </linearGradient>
        </defs>
        
        {/* Gesture paths */}
        <g stroke="url(#gestureFlowGrad)" strokeWidth="3" fill="none">
          <path d="M100,64 Q300,44 500,64 Q700,84 900,64 Q1050,44 1100,64">
            <animate attributeName="stroke-dasharray" values="0,1200;600,600;1200,0" dur="4s" repeatCount="indefinite"/>
          </path>
        </g>
        
        {/* Gesture indicators */}
        <g>
          <circle cx="100" cy="64" r="4" fill="#06b6d4" opacity="0.8">
            <animateMotion dur="4s" repeatCount="indefinite">
              <mpath href="#gestureFlowPath"/>
            </animateMotion>
          </circle>
          <circle cx="300" cy="44" r="3" fill="#e24e1b" opacity="0.6">
            <animateMotion dur="4s" repeatCount="indefinite" begin="1s">
              <mpath href="#gestureFlowPath"/>
            </animateMotion>
          </circle>
          <circle cx="700" cy="84" r="3" fill="#06b6d4" opacity="0.6">
            <animateMotion dur="4s" repeatCount="indefinite" begin="2s">
              <mpath href="#gestureFlowPath"/>
            </animateMotion>
          </circle>
        </g>
        
        <defs>
          <path id="gestureFlowPath" d="M100,64 Q300,44 500,64 Q700,84 900,64 Q1050,44 1100,64" fill="none"/>
        </defs>
      </svg>
    </div>
  );
};