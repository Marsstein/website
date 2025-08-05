import React from 'react';

export const DataMatrixSeparator: React.FC = () => {
  return (
    <div className="relative h-28 overflow-hidden -my-14 z-10">
      <svg className="w-full h-full" viewBox="0 0 1200 112" preserveAspectRatio="none">
        <defs>
          <pattern id="dataMatrixGrid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="1" height="20" fill="#e24e1b" opacity="0.2"/>
            <rect x="0" y="0" width="20" height="1" fill="#e24e1b" opacity="0.2"/>
          </pattern>
        </defs>
        
        {/* Matrix background */}
        <rect width="1200" height="112" fill="url(#dataMatrixGrid)"/>
        
        {/* Data cells */}
        <g>
          {[...Array(12)].map((_, i) => (
            <rect 
              key={i}
              x={100 * i}
              y="36"
              width="40"
              height="40"
              rx="4"
              fill="#e24e1b"
              opacity="0"
              className="animate-pulse"
              style={{animationDelay: `${i * 0.2}s`, animationDuration: '2.4s'}}
            >
              <animate attributeName="opacity" values="0;0.6;0" dur="2.4s" repeatCount="indefinite" begin={`${i * 0.2}s`}/>
            </rect>
          ))}
        </g>
        
        {/* Connection lines */}
        <g stroke="#e24e1b" strokeWidth="1" fill="none" opacity="0.4">
          <path d="M0,56 L1200,56" strokeDasharray="5,5">
            <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite"/>
          </path>
        </g>
      </svg>
    </div>
  );
};