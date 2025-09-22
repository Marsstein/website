import { useState, useEffect, useMemo } from 'react';

interface DeviceCapabilities {
  supportsHardwareAcceleration: boolean;
  isHighPerformanceDevice: boolean;
  prefersReducedMotion: boolean;
  isLowPowerMode: boolean;
}

interface AnimationConfig {
  duration: number;
  complexity: 'low' | 'medium' | 'high';
  enableFor: 'all' | 'desktop-only' | 'high-performance-only';
}

interface OptimizedAnimationConfig {
  duration: number;
  shouldAnimate: boolean;
  reducedComplexity: boolean;
  gpuAcceleration: boolean;
}

const detectDeviceCapabilities = (): DeviceCapabilities => {
  const canvas = document.createElement('canvas');
  const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
  const supportsHardwareAcceleration = !!gl;

  const isHighPerformanceDevice = 
    navigator.hardwareConcurrency >= 4 && 
    'requestIdleCallback' in window &&
    window.devicePixelRatio <= 2;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  const isLowPowerMode = 'getBattery' in navigator ? false : 
    /Mobi|Android/i.test(navigator.userAgent) && window.devicePixelRatio > 2;

  return {
    supportsHardwareAcceleration,
    isHighPerformanceDevice,
    prefersReducedMotion,
    isLowPowerMode,
  };
};

export const usePerformantAnimation = (config: AnimationConfig): OptimizedAnimationConfig => {
  const [capabilities, setCapabilities] = useState<DeviceCapabilities>({
    supportsHardwareAcceleration: true,
    isHighPerformanceDevice: true,
    prefersReducedMotion: false,
    isLowPowerMode: false,
  });

  useEffect(() => {
    const detectedCapabilities = detectDeviceCapabilities();
    setCapabilities(detectedCapabilities);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => {
      setCapabilities(prev => ({
        ...prev,
        prefersReducedMotion: mediaQuery.matches,
      }));
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const optimizedConfig = useMemo((): OptimizedAnimationConfig => {
    if (capabilities.prefersReducedMotion) {
      return {
        duration: 0,
        shouldAnimate: false,
        reducedComplexity: true,
        gpuAcceleration: false,
      };
    }

    let shouldAnimate = true;
    let duration = config.duration;
    let reducedComplexity = false;

    if (config.enableFor === 'desktop-only' && /Mobi|Android/i.test(navigator.userAgent)) {
      shouldAnimate = false;
    }

    if (config.enableFor === 'high-performance-only' && !capabilities.isHighPerformanceDevice) {
      shouldAnimate = false;
    }

    if (capabilities.isLowPowerMode || !capabilities.isHighPerformanceDevice) {
      duration = Math.min(duration, 300);
      reducedComplexity = config.complexity === 'high';
    }

    if (config.complexity === 'high' && /Mobi|Android/i.test(navigator.userAgent)) {
      reducedComplexity = true;
      duration = duration * 0.7;
    }

    return {
      duration,
      shouldAnimate,
      reducedComplexity,
      gpuAcceleration: capabilities.supportsHardwareAcceleration,
    };
  }, [capabilities, config]);

  return optimizedConfig;
};

export const getOptimizedTransition = (baseTransition: any, optimizedConfig: OptimizedAnimationConfig) => {
  if (!optimizedConfig.shouldAnimate) {
    return { duration: 0 };
  }

  return {
    ...baseTransition,
    duration: optimizedConfig.duration / 1000,
    ease: optimizedConfig.reducedComplexity ? "easeOut" : baseTransition.ease || "easeInOut",
  };
};

export const getOptimizedAnimateProps = (baseAnimate: any, optimizedConfig: OptimizedAnimationConfig) => {
  if (!optimizedConfig.shouldAnimate) {
    return baseAnimate;
  }

  return baseAnimate;
};

export const getGPUAcceleratedStyle = (optimizedConfig: OptimizedAnimationConfig) => {
  if (!optimizedConfig.gpuAcceleration) {
    return {};
  }

  return {
    willChange: 'transform, opacity',
    transform: 'translate3d(0, 0, 0)',
    backfaceVisibility: 'hidden' as const,
    perspective: 1000,
  };
};