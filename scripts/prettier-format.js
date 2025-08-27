/**
 * Alternative: Prettier-basierte HTML-Formatierung
 * Nutzt Prettier für konsistente Formatierung
 */

import prettier from 'prettier';

export async function formatHTMLWithPrettier(html, options = {}) {
  try {
    const formatted = await prettier.format(html, {
      parser: 'html',
      printWidth: 100,
      tabWidth: 2,
      useTabs: false,
      singleQuote: false,
      bracketSpacing: true,
      htmlWhitespaceSensitivity: 'css',
      endOfLine: 'lf',
      ...options
    });
    
    return formatted;
  } catch (error) {
    console.warn('Prettier formatting failed, returning original HTML:', error.message);
    return html;
  }
}

/**
 * Konfiguration für verschiedene Umgebungen
 */
export const prettierConfigs = {
  development: {
    printWidth: 100,
    tabWidth: 2,
    // Behalte mehr Whitespace für bessere Lesbarkeit
    htmlWhitespaceSensitivity: 'ignore'
  },
  production: {
    printWidth: 120,
    tabWidth: 2,
    // Kompakter für Production
    htmlWhitespaceSensitivity: 'css'
  }
};

/**
 * Installationshinweis:
 * npm install --save-dev prettier
 */