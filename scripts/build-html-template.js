/**
 * HTML Template Builder für SSR
 * Erstellt vollständige HTML-Dokumente mit React Helmet Daten
 */

import prettier from 'prettier';

/**
 * Erstellt ein vollständiges HTML-Dokument mit SSR-Content und Helmet-Daten
 * @param {Object} options - Build-Optionen
 * @param {string} options.html - Gerenderte React App HTML
 * @param {Object} options.head - React Helmet Head-Daten
 * @param {Object} options.assets - Asset-Pfade (CSS, JS)
 * @param {string} options.route - Aktuelle Route
 * @returns {string} - Formatiertes HTML-Dokument
 */
export async function buildHTMLTemplate({ html, head, assets, route = '/' }) {
  // Basis-Template mit React Helmet Daten
  const template = `
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ${head.title}
    ${head.meta}
    ${head.link}
    
    <!-- Preload critical assets -->
    <link rel="preload" href="${assets.css}" as="style">
    <link rel="preload" href="${assets.js}" as="script" type="module" crossorigin>
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/JLogoMarsstein.svg">
    <link rel="icon" type="image/png" href="/logomarsstein.png">
    
    <!-- Styles -->
    <link rel="stylesheet" href="${assets.css}">
    ${head.style}
    
    <!-- Additional meta tags -->
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">
    <meta name="language" content="German">
    <meta name="revisit-after" content="7 days">
    <meta name="distribution" content="web">
    
    ${head.script}
</head>
<body>
    ${head.noscript}
    <div id="root">${html}</div>
    
    <!-- React hydration script -->
    <script type="module" crossorigin src="${assets.js}"></script>
    
    <!-- Fallback for no JS -->
    <noscript>
        <style>
            .noscript-message {
                padding: 20px;
                text-align: center;
                font-family: Arial, sans-serif;
                max-width: 600px;
                margin: 50px auto;
            }
        </style>
        <div class="noscript-message">
            <h1>JavaScript erforderlich</h1>
            <p>Diese Seite benötigt JavaScript für die volle Funktionalität.</p>
            <p>Bitte aktivieren Sie JavaScript in Ihrem Browser.</p>
        </div>
    </noscript>
</body>
</html>
  `;
  
  // HTML mit Prettier formatieren
  try {
    const formatted = await prettier.format(template, {
      parser: 'html',
      printWidth: 120,
      tabWidth: 2,
      useTabs: false,
      singleQuote: false,
      bracketSpacing: true,
      htmlWhitespaceSensitivity: 'css',
      endOfLine: 'lf'
    });
    
    return formatted;
  } catch (error) {
    console.warn('⚠️  Prettier formatting failed:', error.message);
    return template;
  }
}

/**
 * Extrahiert und säubert den Title-Tag
 * @param {string} titleString - React Helmet title string
 * @returns {string} - Gesäuberter Titel
 */
export function extractTitle(titleString) {
  const match = titleString.match(/<title[^>]*>(.*?)<\/title>/);
  return match ? match[1] : 'Marsstein - Compliance Platform';
}

/**
 * Kombiniert mehrere Meta-Tag-Strings und entfernt Duplikate
 * @param {string} helmetMeta - React Helmet meta tags
 * @param {Object} additionalMeta - Zusätzliche Meta-Daten
 * @returns {string} - Kombinierte Meta-Tags
 */
export function combineMetaTags(helmetMeta, additionalMeta = {}) {
  // Parse existing meta tags
  const existingMeta = new Map();
  const metaRegex = /<meta\s+([^>]+)>/g;
  let match;
  
  while ((match = metaRegex.exec(helmetMeta)) !== null) {
    const attributes = match[1];
    const nameMatch = attributes.match(/name="([^"]+)"/);
    const propertyMatch = attributes.match(/property="([^"]+)"/);
    const key = nameMatch ? nameMatch[1] : propertyMatch ? propertyMatch[1] : null;
    
    if (key) {
      existingMeta.set(key, match[0]);
    }
  }
  
  // Add additional meta tags if not already present
  for (const [key, content] of Object.entries(additionalMeta)) {
    if (!existingMeta.has(key)) {
      const tag = key.startsWith('og:') || key.startsWith('twitter:') 
        ? `<meta property="${key}" content="${content}">`
        : `<meta name="${key}" content="${content}">`;
      existingMeta.set(key, tag);
    }
  }
  
  return Array.from(existingMeta.values()).join('\n    ');
}