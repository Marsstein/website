import posthog from 'posthog-js';

declare global {
  interface Window {
    beam?: (path: string) => void;
  }
}

export const initializePostHog = () => {
  if (typeof window !== 'undefined') {
    posthog.init('phc_VD40IEcKzwwg3HK9j3jBoeOB9E7nZBsDS9FF01SEYwY', {
      api_host: 'https://eu.i.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: {
        dom_event_allowlist: ['click', 'change', 'submit'],
        url_allowlist: ['marsstein.ai/beta', 'marsstein.ai/', 'marsstein.ai'],
        element_allowlist: ['button', 'a', 'input', 'select', 'textarea', 'label'],
        css_selector_allowlist: ['[data-ph-capture]'],
      },
      session_recording: {
        maskAllInputs: true,
        maskTextSelector: '[data-private]',
        recordCrossOriginIframes: false,
      },
      disable_session_recording: false,
      enable_recording_console_log: false,
    });
  }
};

export interface TrackingEventMetadata {
  [key: string]: string | number | boolean | undefined;
}

export const trackEvent = (
  eventName: string,
  metadata?: TrackingEventMetadata
) => {
  if (typeof window === 'undefined') return;

  if (window.beam) {
    const beamPath = `/events/${eventName.toLowerCase().replace(/\s+/g, '-')}`;
    window.beam(beamPath);
  }

  posthog.capture(eventName, metadata);

  if (import.meta.env.DEV) {
    console.log('[Analytics]', eventName, metadata);
  }
};

export const trackPageView = (pageName: string, metadata?: TrackingEventMetadata) => {
  trackEvent('page_view', {
    page: pageName,
    ...metadata,
  });
};

export const trackButtonClick = (
  buttonName: string,
  location: string,
  metadata?: TrackingEventMetadata
) => {
  trackEvent('button_click', {
    button_name: buttonName,
    location,
    ...metadata,
  });
};

export const trackFormEvent = (
  formName: string,
  action: 'started' | 'field_completed' | 'abandoned' | 'submitted' | 'error',
  metadata?: TrackingEventMetadata
) => {
  trackEvent(`form_${action}`, {
    form_name: formName,
    ...metadata,
  });
};

export const trackSectionView = (sectionName: string, metadata?: TrackingEventMetadata) => {
  trackEvent('section_viewed', {
    section: sectionName,
    ...metadata,
  });
};

export const trackScrollDepth = (depth: number, page: string) => {
  trackEvent('scroll_depth', {
    depth_percentage: depth,
    page,
  });
};

export const trackAnimationView = (animationName: string, metadata?: TrackingEventMetadata) => {
  trackEvent('animation_viewed', {
    animation: animationName,
    ...metadata,
  });
};

export const trackExitIntent = (metadata?: TrackingEventMetadata) => {
  trackEvent('exit_intent', metadata);
};

export const identifyUser = (
  userId: string,
  traits?: {
    email?: string;
    name?: string;
    company?: string;
    [key: string]: string | number | boolean | undefined;
  }
) => {
  posthog.identify(userId, traits);
};

export const resetUser = () => {
  posthog.reset();
};

export const trackUserPath = (
  fromSection: string,
  toSection: string,
  metadata?: TrackingEventMetadata
) => {
  trackEvent('user_path', {
    from: fromSection,
    to: toSection,
    ...metadata,
  });
};

export const trackRageClick = (
  elementName: string,
  clickCount: number,
  metadata?: TrackingEventMetadata
) => {
  trackEvent('rage_click', {
    element: elementName,
    click_count: clickCount,
    ...metadata,
  });
};

export const trackDeadClick = (
  elementName: string,
  metadata?: TrackingEventMetadata
) => {
  trackEvent('dead_click', {
    element: elementName,
    ...metadata,
  });
};

export const getSessionReplayUrl = () => {
  if (typeof window === 'undefined') return null;
  return posthog.get_session_replay_url();
};

export { posthog };
