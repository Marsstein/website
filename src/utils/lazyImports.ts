import { lazy } from 'react';

const loadEmailJS = () => import('@emailjs/browser');

let emailjsPromise: Promise<typeof import('@emailjs/browser')> | null = null;

export const getEmailJS = () => {
  if (!emailjsPromise) {
    emailjsPromise = loadEmailJS();
  }
  return emailjsPromise;
};

export const lazyLoadEmailJS = (callback: () => void) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        getEmailJS();
        observer.disconnect();
        callback();
      }
    });
  });
  
  return observer;
};