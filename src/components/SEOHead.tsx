import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogImageAlt?: string;
  ogType?: string;
  structuredData?: any;
}

const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  ogImage = '/og-image-marsstein.jpg',
  ogImageAlt = 'Marsstein - Compliance und Datenschutz Lösungen',
  ogType = 'website',
  structuredData
}) => {
  const siteUrl = 'https://marsstein.ai';
  const fullTitle = `${title} | Marsstein`;
  
  // Default organization structured data
  const defaultOrganizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Marsstein GmbH",
    "url": siteUrl,
    "logo": `${siteUrl}/marsstein-logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+4917670560292",
      "contactType": "customer service",
      "availableLanguage": ["German", "English"],
      "email": "info@marsstein.ai"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bücklestraße 3",
      "addressLocality": "Konstanz",
      "postalCode": "78467",
      "addressCountry": "DE"
    },
    "email": "info@marsstein.ai",
    "sameAs": [
      "https://www.linkedin.com/company/marsstein/",
      "https://www.instagram.com/marsstein.ai/"
    ]
  };

  // Merge default organization data with any provided structured data
  const mergedStructuredData = structuredData || defaultOrganizationData;
  
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow,max-image-preview:large" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={`${siteUrl}${canonical}`} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:site_name" content="Marsstein" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical ? `${siteUrl}${canonical}` : siteUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#0B1D2A" />
      
      {/* Additional Icons for better compatibility */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#e24e1b" />
      
      {/* Structured Data */}
      {mergedStructuredData && (
        <script type="application/ld+json">
          {JSON.stringify(mergedStructuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;