import React from 'react';

export const SecurityStandardsMatrixSeparator: React.FC = () => {
  return (
    <div className="relative h-42 overflow-hidden -my-20 z-10 bg-gradient-to-r from-transparent via-indigo-50/20 to-transparent">
      <svg className="w-full h-full" viewBox="0 0 1200 168" preserveAspectRatio="none">
        <defs>
          <radialGradient id="isoControlGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e24e1b" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#e24e1b" stopOpacity="0"/>
          </radialGradient>
        </defs>
        
        {/* ISO 27001 Control Domains */}
        <g>
          {/* A.5 Policies - 2 Controls */}
          <circle cx="200" cy="84" r="15" fill="url(#isoControlGlow)" className="animate-ping"/>
          <circle cx="200" cy="84" r="8" fill="#e24e1b" opacity="0.9"/>
          <text x="200" y="110" fontSize="10" textAnchor="middle" fill="#e24e1b" opacity="0.7">A.5</text>
          <text x="200" y="122" fontSize="8" textAnchor="middle" fill="#e24e1b" opacity="0.5">2 Controls</text>
          
          {/* A.8 Assets - 10 Controls */}
          <circle cx="400" cy="84" r="18" fill="url(#isoControlGlow)" className="animate-ping" style={{animationDelay: '0.3s'}}/>
          <circle cx="400" cy="84" r="10" fill="#e24e1b" opacity="0.9"/>
          <text x="400" y="110" fontSize="10" textAnchor="middle" fill="#e24e1b" opacity="0.7">A.8</text>
          <text x="400" y="122" fontSize="8" textAnchor="middle" fill="#e24e1b" opacity="0.5">10 Controls</text>
          
          {/* A.12 Operations - 14 Controls */}
          <circle cx="600" cy="84" r="20" fill="url(#isoControlGlow)" className="animate-ping" style={{animationDelay: '0.6s'}}/>
          <circle cx="600" cy="84" r="12" fill="#e24e1b" opacity="0.9"/>
          <text x="600" y="110" fontSize="10" textAnchor="middle" fill="#e24e1b" opacity="0.7">A.12</text>
          <text x="600" y="122" fontSize="8" textAnchor="middle" fill="#e24e1b" opacity="0.5">14 Controls</text>
          
          {/* A.13 Network - 7 Controls */}
          <circle cx="800" cy="84" r="16" fill="url(#isoControlGlow)" className="animate-ping" style={{animationDelay: '0.9s'}}/>
          <circle cx="800" cy="84" r="9" fill="#e24e1b" opacity="0.9"/>
          <text x="800" y="110" fontSize="10" textAnchor="middle" fill="#e24e1b" opacity="0.7">A.13</text>
          <text x="800" y="122" fontSize="8" textAnchor="middle" fill="#e24e1b" opacity="0.5">7 Controls</text>
          
          {/* A.18 Compliance - 7 Controls */}
          <circle cx="1000" cy="84" r="16" fill="url(#isoControlGlow)" className="animate-ping" style={{animationDelay: '1.2s'}}/>
          <circle cx="1000" cy="84" r="9" fill="#e24e1b" opacity="0.9"/>
          <text x="1000" y="110" fontSize="10" textAnchor="middle" fill="#e24e1b" opacity="0.7">A.18</text>
          <text x="1000" y="122" fontSize="8" textAnchor="middle" fill="#e24e1b" opacity="0.5">7 Controls</text>
        </g>
        
        {/* Control connections */}
        <g stroke="#e24e1b" strokeWidth="2" fill="none" opacity="0.4">
          <path d="M215,84 L385,84" className="animate-pulse"/>
          <path d="M418,84 L582,84" className="animate-pulse" style={{animationDelay: '0.2s'}}/>
          <path d="M620,84 L784,84" className="animate-pulse" style={{animationDelay: '0.4s'}}/>
          <path d="M816,84 L984,84" className="animate-pulse" style={{animationDelay: '0.6s'}}/>
        </g>
        
        {/* ISO 27001 Certification Badge */}
        <g transform="translate(580, 40)">
          <rect x="0" y="0" width="40" height="20" rx="4" fill="#e24e1b" opacity="0.2" className="animate-pulse"/>
          <text x="20" y="13" fontSize="8" textAnchor="middle" fill="#e24e1b" fontWeight="bold">ISO 27001</text>
        </g>
        
        {/* Security framework indicators */}
        <g fill="#e24e1b" opacity="0.3">
          <circle cx="150" cy="50" r="3" className="animate-pulse"/>
          <circle cx="250" cy="50" r="3" className="animate-pulse" style={{animationDelay: '0.5s'}}/>
          <circle cx="350" cy="50" r="3" className="animate-pulse" style={{animationDelay: '1s'}}/>
          <circle cx="450" cy="50" r="3" className="animate-pulse" style={{animationDelay: '1.5s'}}/>
          <circle cx="550" cy="50" r="3" className="animate-pulse" style={{animationDelay: '2s'}}/>
          <circle cx="650" cy="50" r="3" className="animate-pulse" style={{animationDelay: '2.5s'}}/>
          <circle cx="750" cy="50" r="3" className="animate-pulse" style={{animationDelay: '3s'}}/>
          <circle cx="850" cy="50" r="3" className="animate-pulse" style={{animationDelay: '3.5s'}}/>
          <circle cx="950" cy="50" r="3" className="animate-pulse" style={{animationDelay: '4s'}}/>
          <circle cx="1050" cy="50" r="3" className="animate-pulse" style={{animationDelay: '4.5s'}}/>
        </g>
      </svg>
    </div>
  );
};