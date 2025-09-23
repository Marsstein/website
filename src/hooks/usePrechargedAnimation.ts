import { useEffect, useRef, useCallback } from 'react';

interface PrechargeConfig {
  elements?: string[]; // CSS selectors for elements to precharge
  animations?: string[]; // Animation names to precharge
  images?: string[]; // Image URLs to preload
  priority?: 'high' | 'low';
}

export const usePrechargedAnimation = (config: PrechargeConfig = {}) => {
  const {
    elements = [],
    animations = [],
    images = [],
    priority = 'high'
  } = config;
  
  const isPrecharged = useRef(false);
  const animationFrameId = useRef<number>();
  
  // Force GPU acceleration on elements
  const enableGPUAcceleration = useCallback(() => {
    elements.forEach(selector => {
      const els = document.querySelectorAll(selector);
      els.forEach(el => {
        if (el instanceof HTMLElement) {
          // Force GPU layer creation
          el.style.willChange = 'transform, opacity';
          el.style.transform = 'translateZ(0)';
          el.style.backfaceVisibility = 'hidden';
          el.style.perspective = '1000px';
          
          // Trigger layout calculation
          void el.offsetHeight;
        }
      });
    });
  }, [elements]);
  
  // Preload images for smooth loading
  const preloadImages = useCallback(() => {
    images.forEach(src => {
      const img = new Image();
      img.src = src;
      if (priority === 'high') {
        img.loading = 'eager';
      }
    });
  }, [images, priority]);
  
  // Warm up animations by triggering a hidden animation cycle
  const warmUpAnimations = useCallback(() => {
    const warmupDiv = document.createElement('div');
    warmupDiv.style.position = 'absolute';
    warmupDiv.style.opacity = '0';
    warmupDiv.style.pointerEvents = 'none';
    warmupDiv.style.width = '1px';
    warmupDiv.style.height = '1px';
    warmupDiv.style.overflow = 'hidden';
    warmupDiv.setAttribute('aria-hidden', 'true');
    
    document.body.appendChild(warmupDiv);
    
    // Trigger each animation
    animations.forEach(animationName => {
      warmupDiv.style.animation = `${animationName} 0.001s`;
    });
    
    // Force a reflow to ensure animations are processed
    void warmupDiv.offsetHeight;
    
    // Clean up after a frame
    requestAnimationFrame(() => {
      document.body.removeChild(warmupDiv);
    });
  }, [animations]);
  
  // Prime the render pipeline
  const primeRenderPipeline = useCallback(() => {
    // Force a few animation frames to warm up the pipeline
    let count = 0;
    const prime = () => {
      if (count < 3) {
        count++;
        animationFrameId.current = requestAnimationFrame(prime);
      }
    };
    animationFrameId.current = requestAnimationFrame(prime);
  }, []);
  
  useEffect(() => {
    if (!isPrecharged.current) {
      // Run all optimizations
      enableGPUAcceleration();
      preloadImages();
      warmUpAnimations();
      primeRenderPipeline();
      
      isPrecharged.current = true;
    }
    
    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [enableGPUAcceleration, preloadImages, warmUpAnimations, primeRenderPipeline]);
  
  // Return helper functions for manual optimization
  return {
    forceGPU: enableGPUAcceleration,
    isPrecharged: isPrecharged.current,
    optimizeElement: (element: HTMLElement) => {
      element.style.willChange = 'transform, opacity';
      element.style.transform = 'translateZ(0)';
      element.style.backfaceVisibility = 'hidden';
      element.style.contain = 'layout style paint';
    }
  };
};