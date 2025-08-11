import { useEffect, useState } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: UseScrollAnimationOptions = {}) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollY = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setScrollY(currentScrollY);
      setLastScrollY(currentScrollY);
    };

    const throttledUpdateScrollY = throttle(updateScrollY, 10);
    
    window.addEventListener('scroll', throttledUpdateScrollY, { passive: true });
    
    return () => window.removeEventListener('scroll', throttledUpdateScrollY);
  }, [lastScrollY]);

  return { scrollY, scrollDirection };
};

export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  options: UseScrollAnimationOptions = {}
) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [elementRef, options.threshold, options.rootMargin, hasAnimated]);

  return { isVisible, hasAnimated };
};

export const useParallax = (speed: number = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const updateOffset = () => {
      setOffset(window.scrollY * speed);
    };

    const throttledUpdateOffset = throttle(updateOffset, 10);
    
    window.addEventListener('scroll', throttledUpdateOffset, { passive: true });
    
    return () => window.removeEventListener('scroll', throttledUpdateOffset);
  }, [speed]);

  return offset;
};

// Utility function for throttling
function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout | null = null;
  let lastExecTime = 0;
  
  return (...args: Parameters<T>) => {
    const currentTime = Date.now();
    
    if (currentTime - lastExecTime > delay) {
      func(...args);
      lastExecTime = currentTime;
    } else {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      
      timeoutId = setTimeout(() => {
        func(...args);
        lastExecTime = Date.now();
      }, delay - (currentTime - lastExecTime));
    }
  };
}