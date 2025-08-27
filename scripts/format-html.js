/**
 * HTML Formatter für bessere Lesbarkeit im View-Source
 */

export function formatHTML(html, options = {}) {
  const {
    indentSize = 2,
    maxLineLength = 120,
    preserveWhitespaceInContent = true,
    formatForProduction = false
  } = options;

  // Wenn Production-Mode, nur minimale Formatierung
  if (formatForProduction) {
    return html
      .replace(/<\/head>/g, '</head>\n')
      .replace(/<body/g, '\n<body')
      .replace(/<\/body>/g, '\n</body>')
      .replace(/<\/html>/g, '\n</html>');
  }

  // Pretty-print HTML für bessere Lesbarkeit
  let formatted = html;
  let indentLevel = 0;
  const indent = ' '.repeat(indentSize);

  // Selbstschließende Tags
  const selfClosingTags = ['meta', 'link', 'img', 'input', 'br', 'hr', 'area', 'base'];
  
  // Inline-Tags die nicht umgebrochen werden sollten
  const inlineTags = ['span', 'a', 'strong', 'em', 'code', 'small', 'sub', 'sup'];

  // Schritt 1: Basis-Formatierung
  formatted = formatted
    // Entferne existierende Whitespaces zwischen Tags
    .replace(/>\s+</g, '><')
    // Füge Zeilenumbrüche nach wichtigen Tags hinzu
    .replace(/<\/(head|body|html|div|section|article|header|footer|main|nav|aside)>/gi, '</$1>\n')
    .replace(/<(head|body|html|div|section|article|header|footer|main|nav|aside)([^>]*)>/gi, '\n<$1$2>')
    // Meta-Tags und Links
    .replace(/<(meta|link)([^>]*)>/gi, '\n<$1$2>')
    // Titel
    .replace(/<title>/gi, '\n<title>')
    .replace(/<\/title>/gi, '</title>')
    // Scripts und Styles
    .replace(/<script([^>]*)>/gi, '\n<script$1>')
    .replace(/<\/script>/gi, '</script>\n')
    .replace(/<style([^>]*)>/gi, '\n<style$1>')
    .replace(/<\/style>/gi, '</style>\n');

  // Schritt 2: Intelligente Einrückung
  const lines = formatted.split('\n');
  const formattedLines = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) continue;

    // Prüfe ob schließendes Tag
    if (line.startsWith('</')) {
      indentLevel = Math.max(0, indentLevel - 1);
    }

    // Füge Einrückung hinzu
    if (line) {
      formattedLines.push(indent.repeat(indentLevel) + line);
    }

    // Prüfe ob öffnendes Tag (nicht selbstschließend)
    const tagMatch = line.match(/^<([a-zA-Z]+)([^>]*)>/);
    if (tagMatch) {
      const tagName = tagMatch[1].toLowerCase();
      const tagContent = tagMatch[2];
      
      // Erhöhe Einrückung nur wenn nicht selbstschließend oder inline
      if (!selfClosingTags.includes(tagName) && 
          !inlineTags.includes(tagName) &&
          !tagContent.endsWith('/')) {
        // Prüfe ob Tag auf gleicher Zeile geschlossen wird
        if (!line.includes(`</${tagName}>`)) {
          indentLevel++;
        }
      }
    }
  }

  // Schritt 3: Spezielle Formatierung für React-Content
  formatted = formattedLines.join('\n');
  
  // Formatiere lange Klassennamen
  formatted = formatted.replace(/class="([^"]+)"/g, (match, classes) => {
    if (classes.length > maxLineLength) {
      const classList = classes.split(' ');
      const chunks = [];
      let currentChunk = [];
      
      for (const cls of classList) {
        currentChunk.push(cls);
        if (currentChunk.join(' ').length > maxLineLength - 20) {
          chunks.push(currentChunk.join(' '));
          currentChunk = [];
        }
      }
      if (currentChunk.length) {
        chunks.push(currentChunk.join(' '));
      }
      
      return `class="${chunks.join('\n' + ' '.repeat(8))}"`; 
    }
    return match;
  });

  // Schritt 4: Finale Bereinigung
  formatted = formatted
    // Entferne doppelte Leerzeilen
    .replace(/\n\n+/g, '\n\n')
    // Stelle sicher, dass Datei mit Newline endet
    .replace(/\n*$/, '\n');

  return formatted;
}

/**
 * Formatiert spezielle React/JSX Attribute
 */
export function formatReactAttributes(html) {
  // Formatiere data-Attribute auf mehrere Zeilen wenn zu lang
  return html.replace(/(<[^>]+)(data-[^=]+="[^"]+")([^>]*>)/g, (match, start, dataAttr, end) => {
    if (match.length > 120) {
      return `${start}\n  ${dataAttr}${end}`;
    }
    return match;
  });
}

/**
 * Fügt Debug-Kommentare hinzu
 */
export function addDebugComments(html, route) {
  const timestamp = new Date().toISOString();
  const debugInfo = `
<!-- 
  Prerendered: ${timestamp}
  Route: ${route}
  Build: ${process.env.NODE_ENV || 'development'}
-->`;

  return html.replace('</head>', `${debugInfo}\n</head>`);
}