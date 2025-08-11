import React from 'react';
import { useParallax } from '@/hooks/useScrollAnimation';

interface ParallaxBackgroundProps {
  children?: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ 
  children, 
  speed = 0.5, 
  className = '' 
}) => {
  const offset = useParallax(speed);

  return (
    <div 
      className={`relative ${className}`}
      style={{
        transform: `translateY(${offset}px)`,
        willChange: 'transform'
      }}
    >
      {children}
    </div>
  );
};