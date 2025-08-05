import React from 'react';

export const FirewallGridSeparator: React.FC = () => {
  return (
    <div className="relative h-36 overflow-hidden -my-18 z-10">
      <svg className="w-full h-full" viewBox="0 0 1200 144" preserveAspectRatio="none">
        <defs>
          <pattern id="firewallGridPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="60" height="60" fill="none" stroke="#e24e1b" strokeWidth="1" opacity="0.2"/>
            <rect x="10" y="10" width="40" height="40" fill="#e24e1b" opacity="0.1" className="animate-pulse"/>
          </pattern>
        </defs>
        
        {/* Grid background */}
        <rect width="1200" height="144" fill="url(#firewallGridPattern)"/>
        
        {/* Active firewall zones */}
        <g>
          <rect x="240" y="42" width="120" height="60" rx="5" fill="none" stroke="#e24e1b" strokeWidth="2" opacity="0.8" className="animate-pulse"/>
          <rect x="540" y="42" width="120" height="60" rx="5" fill="none" stroke="#e24e1b" strokeWidth="2" opacity="0.8" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
          <rect x="840" y="42" width="120" height="60" rx="5" fill="none" stroke="#e24e1b" strokeWidth="2" opacity="0.8" className="animate-pulse" style={{animationDelay: '1s'}}/>
        </g>
        
        {/* Scanning beams */}
        <g stroke="#e24e1b" strokeWidth="2" opacity="0.6">
          <line x1="0" y1="72" x2="40" y2="72">
            <animate attributeName="x1" values="0;1160;0" dur="8s" repeatCount="indefinite"/>
            <animate attributeName="x2" values="40;1200;40" dur="8s" repeatCount="indefinite"/>
          </line>
        </g>
      </svg>
    </div>
  );
};