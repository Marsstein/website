// Vercel Edge Function for dynamic OG meta tags
export const config = {
  runtime: 'edge',
};

export default function handler(request) {
  const { searchParams } = new URL(request.url);
  const path = searchParams.get('path') || '/';
  
  // Define meta tags for different routes
  const metaTags = {
    '/': {
      title: 'Marsstein - Compliance & Datenschutz Plattform',
      description: 'Die führende Plattform für DSGVO, ISO 27001, EU AI Act und weitere Compliance-Anforderungen.',
      image: 'https://marsstein.com/og-image-home.jpg'
    },
    '/wissen/rechtsprechung/amazon-luxemburg-2021': {
      title: 'Amazon Luxemburg DSGVO-Bußgeld 2021 | Marsstein',
      description: 'Analyse des Rekord-DSGVO-Bußgelds von 746 Mio. EUR gegen Amazon - Hintergründe, Auswirkungen und Learnings für Unternehmen.',
      image: 'https://marsstein.com/og-image-amazon-case.jpg'
    },
    // Add more routes as needed
  };

  const meta = metaTags[path] || metaTags['/'];
  
  return new Response(
    `<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${meta.title}</title>
  <meta name="description" content="${meta.description}" />
  <meta property="og:title" content="${meta.title}" />
  <meta property="og:description" content="${meta.description}" />
  <meta property="og:image" content="${meta.image}" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${meta.title}" />
  <meta name="twitter:description" content="${meta.description}" />
  <meta name="twitter:image" content="${meta.image}" />
  <script>window.location.href = '${path}';</script>
</head>
<body>Redirecting...</body>
</html>`,
    {
      headers: {
        'content-type': 'text/html;charset=UTF-8',
        'cache-control': 's-maxage=31536000, stale-while-revalidate',
      },
    }
  );
}