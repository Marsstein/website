import { useEffect, useRef, useCallback } from 'react';
import {
  trackEvent,
  trackButtonClick,
  trackFormEvent,
  trackSectionView,
  trackScrollDepth,
  trackAnimationView,
  trackExitIntent,
  trackUserPath,
  trackRageClick,
  trackDeadClick,
  TrackingEventMetadata,
} from '@/lib/analytics';

export const useTracking = () => {
  return {
    trackEvent,
    trackButtonClick,
    trackFormEvent,
    trackSectionView,
    trackScrollDepth,
    trackAnimationView,
    trackExitIntent,
  };
};

export const useSectionTracking = (
  sectionName: string,
  metadata?: TrackingEventMetadata
) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasTracked.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            trackSectionView(sectionName, metadata);
            hasTracked.current = true;
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [sectionName, metadata]);

  return ref;
};

export const useScrollDepthTracking = (pageName: string) => {
  const trackedDepths = useRef<Set<number>>(new Set());

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = Math.round((scrollTop / docHeight) * 100);

      const depths = [25, 50, 75, 100];
      depths.forEach((depth) => {
        if (scrollPercent >= depth && !trackedDepths.current.has(depth)) {
          trackedDepths.current.add(depth);
          trackScrollDepth(depth, pageName);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pageName]);
};

export const useFormTracking = (formName: string) => {
  const formStarted = useRef(false);
  const fieldCompletions = useRef<Set<string>>(new Set());
  const formData = useRef<Record<string, any>>({});

  const trackFormStart = useCallback(() => {
    if (!formStarted.current) {
      trackFormEvent(formName, 'started');
      formStarted.current = true;
    }
  }, [formName]);

  const trackFieldCompletion = useCallback(
    (fieldName: string, value: any) => {
      if (!fieldCompletions.current.has(fieldName) && value) {
        fieldCompletions.current.add(fieldName);
        formData.current[fieldName] = value;
        trackFormEvent(formName, 'field_completed', { field: fieldName });
      }
    },
    [formName]
  );

  const trackFormSubmit = useCallback(
    (success: boolean, error?: string) => {
      if (success) {
        trackFormEvent(formName, 'submitted', {
          fields_completed: Array.from(fieldCompletions.current).join(','),
          total_fields: fieldCompletions.current.size,
        });
      } else {
        trackFormEvent(formName, 'error', {
          error: error || 'unknown',
        });
      }
    },
    [formName]
  );

  const trackFormAbandonment = useCallback(() => {
    if (formStarted.current) {
      const completedFields = Array.from(fieldCompletions.current);
      if (completedFields.length > 0) {
        trackFormEvent(formName, 'abandoned', {
          fields_completed: completedFields.join(','),
          completion_rate: (completedFields.length / 4) * 100,
        });
      }
    }
  }, [formName]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      trackFormAbandonment();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => window.removeEventListener('beforeunload', handleBeforeUnload);
  }, [trackFormAbandonment]);

  return {
    trackFormStart,
    trackFieldCompletion,
    trackFormSubmit,
    trackFormAbandonment,
  };
};

export const useExitIntentTracking = (metadata?: TrackingEventMetadata) => {
  const hasTracked = useRef(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasTracked.current) {
        trackExitIntent(metadata);
        hasTracked.current = true;
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [metadata]);
};

export const useAnimationTracking = (animationName: string) => {
  const ref = useRef<HTMLDivElement>(null);
  const hasTracked = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element || hasTracked.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasTracked.current) {
            trackAnimationView(animationName, {
              viewport_height: window.innerHeight,
              scroll_position: window.scrollY,
            });
            hasTracked.current = true;
          }
        });
      },
      { threshold: 0.3 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animationName]);

  return ref;
};

export const usePathTracking = () => {
  const lastSection = useRef<string | null>(null);
  const sectionTimestamps = useRef<Map<string, number>>(new Map());

  const trackSectionTransition = useCallback((newSection: string) => {
    const now = Date.now();
    const previous = lastSection.current;

    if (previous && previous !== newSection) {
      const timeSpent = sectionTimestamps.current.get(previous)
        ? now - (sectionTimestamps.current.get(previous) || now)
        : 0;

      trackUserPath(previous, newSection, {
        time_in_previous_section: Math.round(timeSpent / 1000),
        timestamp: new Date().toISOString(),
      });
    }

    lastSection.current = newSection;
    sectionTimestamps.current.set(newSection, now);
  }, []);

  return { trackSectionTransition };
};

export const useRageClickDetection = () => {
  const clickCounts = useRef<Map<string, { count: number; timestamp: number }>>(
    new Map()
  );

  const detectRageClick = useCallback((elementId: string, elementName: string) => {
    const now = Date.now();
    const existing = clickCounts.current.get(elementId);

    if (existing && now - existing.timestamp < 1000) {
      const newCount = existing.count + 1;
      clickCounts.current.set(elementId, { count: newCount, timestamp: now });

      if (newCount >= 3) {
        trackRageClick(elementName, newCount);
        clickCounts.current.delete(elementId);
      }
    } else {
      clickCounts.current.set(elementId, { count: 1, timestamp: now });
    }
  }, []);

  return { detectRageClick };
};

export const useDeadClickDetection = () => {
  const trackedElements = useRef<Set<string>>(new Set());

  const detectDeadClick = useCallback((elementId: string, elementName: string) => {
    if (!trackedElements.current.has(elementId)) {
      setTimeout(() => {
        const element = document.getElementById(elementId);
        if (element && !element.hasAttribute('href') && !element.onclick) {
          trackDeadClick(elementName);
          trackedElements.current.add(elementId);
        }
      }, 100);
    }
  }, []);

  return { detectDeadClick };
};
