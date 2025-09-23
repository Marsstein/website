import React from 'react';
import { useSEO } from '@/hooks/useSEO';

interface SEOWrapperProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  canonical?: string;
}

export const SEOWrapper: React.FC<SEOWrapperProps> = ({
  children,
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonical
}) => {
  // Use the SEO hook with custom config if provided
  useSEO({
    ...(title && { title }),
    ...(description && { description }),
    ...(keywords && { keywords }),
    ...(ogTitle && { ogTitle }),
    ...(ogDescription && { ogDescription }),
    ...(ogImage && { ogImage }),
    ...(canonical && { canonical })
  });

  return <>{children}</>;
};