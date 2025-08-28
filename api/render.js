/**
 * Vercel Edge Function für Server-Side Rendering
 */

export const config = {
  runtime: 'edge',
};

const seoData = {
  '/': {
    title: 'Marsstein - KI-native Compliance Platform | DSGVO, ISO 27001 & EU AI Act',
    description: 'Revolutionäre KI-gestützte Compliance-Platform für DSGVO, ISO 27001, EU AI Act. Automatisieren Sie Ihre Compliance-Prozesse im DACH-Raum.',
  },
  '/dsgvo': {
    title: 'DSGVO Compliance Software | Automatisierte Datenschutz-Lösung',
    description: 'Automatisierte DSGVO-Compliance mit KI. Datenschutz-Folgenabschätzung, Verarbeitungsverzeichnis und Betroffenenanfragen in einer Lösung.',
  },
  '/eu-ai-act': {
    title: 'EU AI Act Compliance | KI-Risikobewertung & Compliance Management',
    description: 'Vollständige EU AI Act Compliance. Automatische Risikoklassifizierung, Dokumentation und kontinuierliches Monitoring für KI-Systeme.',
  },
  // Weitere Routen...
};

export default async function handler(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  
  // Hole SEO-Daten für die Route
  const seo = seoData[path] || {
    title: 'Marsstein - Compliance made simple',
    description: 'Die KI-native Compliance Platform für moderne Unternehmen im DACH-Raum.',
  };
  
  // Basis HTML mit SEO-Tags
  const html = `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${seo.title}</title>
  <meta name="description" content="${seo.description}">
  
  <!-- Open Graph Tags -->
  <meta property="og:title" content="${seo.title}">
  <meta property="og:description" content="${seo.description}">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://marsstein.ai${path}">
  <meta property="og:image" content="https://marsstein.ai/og-image.png">
  
  <!-- Twitter Card Tags -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${seo.title}">
  <meta name="twitter:description" content="${seo.description}">
  <meta name="twitter:image" content="https://marsstein.ai/og-image.png">
  
  <!-- Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Marsstein",
    "description": "${seo.description}",
    "url": "https://marsstein.ai",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "EUR"
    }
  }
  </script>
  
  <!-- Preload Assets -->
  <link rel="preload" href="/assets/index.js" as="script">
  <link rel="preload" href="/assets/index.css" as="style">
  
  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="/JLogoMarsstein.svg">
  <link rel="icon" type="image/png" href="/logomarsstein.png">
</head>
<body>
  <div id="root"></div>
  
  <!-- Load React App -->
  <script type="module" src="/assets/index.js"></script>
  <link rel="stylesheet" href="/assets/index.css">
</body>
</html>`;

  return new Response(html, {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}