import { useEffect, useState, useCallback } from 'react';
import { usePerformantAnimation } from './usePerformantAnimation';

interface SmoothPageConfig {
  enableParallax: boolean;
  enableStaggeredAnimations: boolean;
  optimizeForMobile: boolean;
  reduceMotionCompliance: boolean;
}

interface ScrollState {
  scrollY: number;
  scrollDirection: 'up' | 'down';
  scrollProgress: number;
  isScrolling: boolean;
  velocity: number;
}

export const useSmoothHomepage = (config: SmoothPageConfig = {
  enableParallax: true,
  enableStaggeredAnimations: true,
  optimizeForMobile: true,
  reduceMotionCompliance: true,
}) => {
  const [scrollState, setScrollState] = useState<ScrollState>({
    scrollY: 0,
    scrollDirection: 'down',
    scrollProgress: 0,
    isScrolling: false,
    velocity: 0,
  });

  const [isLoaded, setIsLoaded] = useState(false);
  const [componentsInView, setComponentsInView] = useState<Set<string>>(new Set());

  const performanceConfig = usePerformantAnimation({
    duration: 1000,
    complexity: 'medium',
    enableFor: 'all'
  });

  // Smooth scroll state management with throttling
  const updateScrollState = useCallback(() => {
    const currentScrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = Math.min(currentScrollY / maxScroll, 1);

    setScrollState(prev => {
      const velocity = currentScrollY - prev.scrollY;
      const direction = velocity > 0 ? 'down' : 'up';

      return {
        scrollY: currentScrollY,
        scrollDirection: direction,
        scrollProgress,
        isScrolling: Math.abs(velocity) > 1,
        velocity: Math.abs(velocity),
      };
    });
  }, []);

  // Optimized scroll handler with requestAnimationFrame
  useEffect(() => {
    let ticking = false;
    let scrollTimeout: NodeJS.Timeout;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollState();
          ticking = false;
        });
        ticking = true;
      }

      // Clear existing timeout and set new one
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        setScrollState(prev => ({ ...prev, isScrolling: false }));
      }, 150);
    };

    // Add smooth scroll behavior to html
    document.documentElement.style.scrollBehavior = 'smooth';

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [updateScrollState]);

  // Page load animation sequence
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Intersection observer for component visibility
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const componentId = entry.target.getAttribute('data-component-id');
        if (componentId) {
          setComponentsInView(prev => {
            const newSet = new Set(prev);
            if (entry.isIntersecting) {
              newSet.add(componentId);
            } else {
              newSet.delete(componentId);
            }
            return newSet;
          });
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0,
      rootMargin: '500px 0px 500px 0px', // Preload 500px before and after viewport
    });

    // Observe all components with data-component-id
    const components = document.querySelectorAll('[data-component-id]');
    components.forEach(component => observer.observe(component));

    return () => observer.disconnect();
  }, [isLoaded]);

  // Get optimized animation props for components
  const getComponentAnimationProps = useCallback((componentId: string, delay: number = 0) => {
    const inView = componentsInView.has(componentId);
    const shouldAnimate = performanceConfig.shouldAnimate && isLoaded;
    
    // Check if element should load immediately
    const element = document.querySelector(`[data-component-id="${componentId}"]`);
    const isImmediate = element?.classList.contains('immediate-load');

    if (!shouldAnimate || isImmediate) {
      return {
        initial: { opacity: 1, y: 0 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0 }
      };
    }

    return {
      initial: { opacity: 0, y: 10 },
      animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 },
      transition: {
        duration: 0.3,
        delay: config.enableStaggeredAnimations ? delay * 0.3 : 0,
        ease: "easeOut",
      }
    };
  }, [componentsInView, performanceConfig, isLoaded, config.enableStaggeredAnimations]);

  // Get parallax transform for background elements
  const getParallaxTransform = useCallback((speed: number = 0.5) => {
    if (!config.enableParallax || !performanceConfig.shouldAnimate) {
      return 'translateZ(0)';
    }

    const translateY = scrollState.scrollY * speed;
    return `translate3d(0, ${translateY}px, 0)`;
  }, [scrollState.scrollY, config.enableParallax, performanceConfig.shouldAnimate]);

  // Get fluid section transition styles
  const getSectionTransition = useCallback((sectionId: string) => {
    const inView = componentsInView.has(sectionId);
    const baseStyle = {
      willChange: performanceConfig.gpuAcceleration ? 'transform, opacity' : 'auto',
      transform: 'translateZ(0)',
    };

    if (!performanceConfig.shouldAnimate) {
      return baseStyle;
    }

    return {
      ...baseStyle,
      opacity: inView ? 1 : 0.9,
      transform: `translateZ(0) translateY(${inView ? 0 : 5}px)`,
      transition: `all ${performanceConfig.duration / 2000}s ease-out`,
    };
  }, [componentsInView, performanceConfig]);

  // Get loading state styles
  const getLoadingStyles = useCallback(() => {
    return {
      opacity: isLoaded ? 1 : 0,
      transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    };
  }, [isLoaded]);

  return {
    scrollState,
    isLoaded,
    componentsInView,
    getComponentAnimationProps,
    getParallaxTransform,
    getSectionTransition,
    getLoadingStyles,
    performanceConfig,
  };
};