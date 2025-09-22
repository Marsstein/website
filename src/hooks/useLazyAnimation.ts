import { useEffect, useRef, useState } from 'react';

interface LazyAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useLazyAnimation = (options: LazyAnimationOptions = {}) => {
  const {
    threshold = 0.1,
    rootMargin = '50px',
    triggerOnce = true
  } = options;

  const [isInView, setIsInView] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Skip if already triggered and triggerOnce is true
    if (triggerOnce && hasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const inView = entry.isIntersecting;
        setIsInView(inView);
        
        if (inView && triggerOnce) {
          setHasTriggered(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce, hasTriggered]);

  // Add CSS classes for lazy animation
  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.classList.add('lazy-animate');
    
    if (isInView || (triggerOnce && hasTriggered)) {
      element.classList.add('in-view');
    } else {
      element.classList.remove('in-view');
    }
  }, [isInView, hasTriggered, triggerOnce]);

  return {
    ref: elementRef,
    isInView: isInView || (triggerOnce && hasTriggered),
    hasTriggered
  };
};