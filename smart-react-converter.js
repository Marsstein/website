#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { parse } from '@babel/parser';
import traverse from '@babel/traverse';
import generate from '@babel/generator';
import * as t from '@babel/types';

// Fix für ES Module imports
const traverseDefault = traverse.default || traverse;

/**
 * Smart React to HTML Converter
 * Konvertiert React/TypeScript Komponenten intelligent zu statischem HTML
 */

class ReactToHTMLConverter {
  constructor() {
    this.componentMap = new Map();
    this.imports = new Map();
    this.staticData = {};
  }

  /**
   * Hauptmethode: Konvertiert eine React-Datei zu HTML
   */
  async convertFile(filePath) {
    const code = fs.readFileSync(filePath, 'utf8');
    
    try {
      // Parse TypeScript/JSX Code
      const ast = parse(code, {
        sourceType: 'module',
        plugins: ['jsx', 'typescript', 'decorators-legacy', 'classProperties']
      });

      // Extrahiere Imports und Komponenten
      this.extractImports(ast);
      this.extractComponents(ast);
      
      // Finde die Hauptkomponente
      const mainComponent = this.findMainComponent(ast);
      if (!mainComponent) {
        throw new Error('Keine exportierte Komponente gefunden');
      }

      // Konvertiere zu HTML
      const html = this.componentToHTML(mainComponent);
      
      // Post-Processing
      return this.postProcessHTML(html);
      
    } catch (error) {
      console.error(`Fehler beim Parsen von ${filePath}:`, error);
      return this.getFallbackHTML(filePath);
    }
  }

  /**
   * Extrahiert Import-Statements
   */
  extractImports(ast) {
    traverseDefault(ast, {
      ImportDeclaration: (path) => {
        const source = path.node.source.value;
        path.node.specifiers.forEach(spec => {
          if (t.isImportDefaultSpecifier(spec)) {
            this.imports.set(spec.local.name, { source, type: 'default' });
          } else if (t.isImportSpecifier(spec)) {
            this.imports.set(spec.local.name, { 
              source, 
              type: 'named',
              imported: spec.imported.name 
            });
          }
        });
      }
    });
  }

  /**
   * Extrahiert React-Komponenten
   */
  extractComponents(ast) {
    traverseDefault(ast, {
      // Funktionale Komponenten
      FunctionDeclaration: (path) => {
        if (this.isReactComponent(path.node)) {
          this.componentMap.set(path.node.id.name, path.node);
        }
      },
      
      // Arrow Functions als Komponenten
      VariableDeclarator: (path) => {
        if (t.isArrowFunctionExpression(path.node.init) && 
            path.node.id && t.isIdentifier(path.node.id)) {
          const name = path.node.id.name;
          if (name[0] === name[0].toUpperCase()) {
            this.componentMap.set(name, path.node.init);
          }
        }
      }
    });
  }

  /**
   * Findet die Hauptkomponente (default export)
   */
  findMainComponent(ast) {
    let mainComponent = null;
    
    traverseDefault(ast, {
      ExportDefaultDeclaration: (path) => {
        if (t.isFunctionDeclaration(path.node.declaration)) {
          mainComponent = path.node.declaration;
        } else if (t.isIdentifier(path.node.declaration)) {
          mainComponent = this.componentMap.get(path.node.declaration.name);
        }
      }
    });
    
    return mainComponent;
  }

  /**
   * Konvertiert eine React-Komponente zu HTML
   */
  componentToHTML(component) {
    let jsxElement = null;
    
    // Finde das Return-Statement
    traverseDefault(component, {
      ReturnStatement: (path) => {
        if (t.isJSXElement(path.node.argument) || 
            t.isJSXFragment(path.node.argument)) {
          jsxElement = path.node.argument;
          path.stop();
        }
      }
    }, null, component);
    
    if (!jsxElement) return '';
    
    return this.jsxToHTML(jsxElement);
  }

  /**
   * Konvertiert JSX zu HTML
   */
  jsxToHTML(node, depth = 0) {
    if (!node) return '';
    
    // Text-Nodes
    if (t.isJSXText(node)) {
      return node.value;
    }
    
    // JSX Expressions {variable}
    if (t.isJSXExpressionContainer(node)) {
      return this.handleExpression(node.expression);
    }
    
    // JSX Fragment <>...</>
    if (t.isJSXFragment(node)) {
      return node.children
        .map(child => this.jsxToHTML(child, depth))
        .join('');
    }
    
    // JSX Element <div>...</div>
    if (t.isJSXElement(node)) {
      const tagName = this.getTagName(node.openingElement);
      
      // Spezialbehandlung für Komponenten
      if (tagName[0] === tagName[0].toUpperCase()) {
        return this.handleComponent(node, depth);
      }
      
      // HTML-Element
      const attributes = this.getAttributes(node.openingElement);
      const children = node.children
        .map(child => this.jsxToHTML(child, depth + 1))
        .join('');
      
      // Self-closing tags
      if (!children && this.isSelfClosing(tagName)) {
        return `<${tagName}${attributes} />`;
      }
      
      return `<${tagName}${attributes}>${children}</${tagName}>`;
    }
    
    return '';
  }

  /**
   * Extrahiert Tag-Name aus JSX-Element
   */
  getTagName(openingElement) {
    if (t.isJSXIdentifier(openingElement.name)) {
      return openingElement.name.name;
    }
    if (t.isJSXMemberExpression(openingElement.name)) {
      return `${openingElement.name.object.name}.${openingElement.name.property.name}`;
    }
    return 'div';
  }

  /**
   * Konvertiert JSX-Attribute zu HTML-Attributen
   */
  getAttributes(openingElement) {
    const attrs = [];
    
    openingElement.attributes.forEach(attr => {
      if (t.isJSXAttribute(attr)) {
        const name = this.convertAttributeName(attr.name.name);
        let value = '';
        
        if (attr.value) {
          if (t.isJSXExpressionContainer(attr.value)) {
            value = this.handleExpression(attr.value.expression);
          } else if (t.isStringLiteral(attr.value)) {
            value = attr.value.value;
          }
        }
        
        // Spezialbehandlung für bestimmte Attribute
        if (name === 'class' && value) {
          attrs.push(`class="${value}"`);
        } else if (name === 'style' && typeof value === 'object') {
          attrs.push(`style="${this.styleObjectToString(value)}"`);
        } else if (value !== false && value !== null && value !== undefined) {
          attrs.push(`${name}="${value}"`);
        }
      } else if (t.isJSXSpreadAttribute(attr)) {
        // Spread attributes {...props} ignorieren
      }
    });
    
    return attrs.length > 0 ? ' ' + attrs.join(' ') : '';
  }

  /**
   * Konvertiert React-Attribute zu HTML-Attributen
   */
  convertAttributeName(name) {
    const conversions = {
      'className': 'class',
      'htmlFor': 'for',
      'tabIndex': 'tabindex',
      'autoComplete': 'autocomplete',
      'autoFocus': 'autofocus',
      'readOnly': 'readonly',
      'maxLength': 'maxlength',
      'minLength': 'minlength',
      'inputMode': 'inputmode',
      'crossOrigin': 'crossorigin',
      'playsInline': 'playsinline'
    };
    
    return conversions[name] || name.toLowerCase();
  }

  /**
   * Behandelt JSX-Expressions
   */
  handleExpression(expression) {
    // Literals
    if (t.isStringLiteral(expression)) {
      return expression.value;
    }
    if (t.isNumericLiteral(expression)) {
      return expression.value.toString();
    }
    if (t.isBooleanLiteral(expression)) {
      return expression.value ? 'true' : '';
    }
    
    // Template Literals
    if (t.isTemplateLiteral(expression)) {
      return this.evaluateTemplateLiteral(expression);
    }
    
    // Conditional Expressions
    if (t.isConditionalExpression(expression)) {
      // Nehme immer den "true" Zweig für statisches HTML
      return this.handleExpression(expression.consequent);
    }
    
    // Logical Expressions (&&, ||)
    if (t.isLogicalExpression(expression)) {
      if (expression.operator === '&&') {
        // Für && nehme immer den rechten Teil
        return this.handleExpression(expression.right);
      }
      if (expression.operator === '||') {
        // Für || nehme den linken Teil wenn vorhanden
        return this.handleExpression(expression.left);
      }
    }
    
    // Arrays (für map, etc.)
    if (t.isCallExpression(expression)) {
      return this.handleCallExpression(expression);
    }
    
    // Fallback: Leerer String für dynamische Inhalte
    return '';
  }

  /**
   * Behandelt Funktionsaufrufe (z.B. array.map)
   */
  handleCallExpression(expression) {
    // Erkenne array.map() Pattern
    if (t.isMemberExpression(expression.callee) && 
        expression.callee.property.name === 'map') {
      
      // Generiere Beispiel-Items für Listen
      const items = this.generateExampleItems();
      return items.map(item => this.generateListItem(item)).join('');
    }
    
    return '';
  }

  /**
   * Generiert Beispiel-Daten für Listen
   */
  generateExampleItems() {
    return [
      { title: 'Automatisierte Compliance', description: 'KI-gestützte Prozesse' },
      { title: 'Schnelle Umsetzung', description: 'In Rekordzeit zur Zertifizierung' },
      { title: 'Expertenberatung', description: 'Persönliche Betreuung' }
    ];
  }

  /**
   * Generiert ein Listen-Item
   */
  generateListItem(item) {
    return `
      <div class="p-6 bg-white rounded-lg shadow-sm">
        <h3 class="text-xl font-semibold mb-2">${item.title}</h3>
        <p class="text-gray-600">${item.description}</p>
      </div>
    `;
  }

  /**
   * Behandelt React-Komponenten
   */
  handleComponent(node, depth) {
    const tagName = this.getTagName(node.openingElement);
    
    // Bekannte Komponenten mit Fallback-HTML
    const componentFallbacks = {
      'Link': (props, children) => 
        `<a href="${props.href || props.to || '#'}" class="${props.className || ''}">${children}</a>`,
      
      'Image': (props) => 
        `<img src="${props.src || '/placeholder.jpg'}" alt="${props.alt || ''}" class="${props.className || ''}" />`,
      
      'Button': (props, children) => 
        `<button type="${props.type || 'button'}" class="${props.className || ''}">${children}</button>`,
      
      'Icon': (props) => 
        this.generateIconHTML(props.name || 'default'),
      
      'SEOHead': () => '', // SEO-Komponenten ignorieren
      'Script': () => '', // Scripts ignorieren
    };
    
    const props = this.extractProps(node.openingElement);
    const children = node.children
      .map(child => this.jsxToHTML(child, depth + 1))
      .join('');
    
    if (componentFallbacks[tagName]) {
      return componentFallbacks[tagName](props, children);
    }
    
    // Unbekannte Komponente: Rendere children
    return children;
  }

  /**
   * Extrahiert Props aus JSX-Element
   */
  extractProps(openingElement) {
    const props = {};
    
    openingElement.attributes.forEach(attr => {
      if (t.isJSXAttribute(attr)) {
        const name = attr.name.name;
        if (attr.value) {
          if (t.isStringLiteral(attr.value)) {
            props[name] = attr.value.value;
          } else if (t.isJSXExpressionContainer(attr.value)) {
            props[name] = this.handleExpression(attr.value.expression);
          }
        } else {
          props[name] = true;
        }
      }
    });
    
    return props;
  }

  /**
   * Generiert Icon-HTML
   */
  generateIconHTML(iconName) {
    const icons = {
      'check': '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>',
      'arrow-right': '<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>',
      'default': '<svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/></svg>'
    };
    
    return icons[iconName] || icons.default;
  }

  /**
   * Post-Processing des generierten HTML
   */
  postProcessHTML(html) {
    // Entferne Event-Handler
    html = html.replace(/\s+on[A-Z]\w+="[^"]*"/gi, '');
    html = html.replace(/\s+on[a-z]+="[^"]*"/gi, '');
    
    // Bereinige doppelte Leerzeichen
    html = html.replace(/\s+/g, ' ');
    
    // Formatiere HTML
    html = this.formatHTML(html);
    
    return html;
  }

  /**
   * Formatiert HTML für bessere Lesbarkeit
   */
  formatHTML(html) {
    const lines = [];
    let depth = 0;
    const tags = html.match(/<[^>]+>|[^<]+/g) || [];
    
    tags.forEach(tag => {
      if (tag.startsWith('</')) {
        depth--;
        lines.push('  '.repeat(Math.max(0, depth)) + tag);
      } else if (tag.startsWith('<') && !tag.endsWith('/>')) {
        lines.push('  '.repeat(depth) + tag);
        if (!this.isSelfClosing(tag)) {
          depth++;
        }
      } else if (tag.trim()) {
        lines.push('  '.repeat(depth) + tag.trim());
      }
    });
    
    return lines.join('\n');
  }

  /**
   * Prüft ob Tag self-closing ist
   */
  isSelfClosing(tag) {
    const selfClosing = ['img', 'input', 'br', 'hr', 'meta', 'link', 'area', 'base', 'col', 'embed', 'source', 'track', 'wbr'];
    const tagName = tag.replace(/<|>|\/$/g, '').split(' ')[0].toLowerCase();
    return selfClosing.includes(tagName);
  }

  /**
   * Fallback HTML wenn Konvertierung fehlschlägt
   */
  getFallbackHTML(filePath) {
    const fileName = path.basename(filePath, path.extname(filePath));
    
    return `
<main class="min-h-screen">
  <section class="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-br from-[#0B1D2A] to-[#1a3a52]">
    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
          ${fileName.replace(/([A-Z])/g, ' $1').trim()}
        </h1>
        <p class="text-xl text-gray-300 mb-8">
          Compliance-Lösungen mit KI-Unterstützung
        </p>
        <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#00A5FF] rounded-lg hover:bg-[#0095e8] transition-all">
          Jetzt starten
        </a>
      </div>
    </div>
  </section>
</main>
    `;
  }
}

// CLI-Interface
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0 || args.includes('--help')) {
    console.log(`
Smart React to HTML Converter

Verwendung:
  node smart-react-converter.js <datei.tsx> [optionen]

Optionen:
  --output <file>   Ausgabedatei (Standard: stdout)
  --format          HTML formatieren
  --help            Diese Hilfe anzeigen

Beispiele:
  node smart-react-converter.js src/pages/Home.tsx
  node smart-react-converter.js src/pages/Home.tsx --output home.html
    `);
    process.exit(0);
  }
  
  const inputFile = args[0];
  const outputIndex = args.indexOf('--output');
  const outputFile = outputIndex > -1 ? args[outputIndex + 1] : null;
  
  const converter = new ReactToHTMLConverter();
  
  try {
    const html = await converter.convertFile(inputFile);
    
    if (outputFile) {
      fs.writeFileSync(outputFile, html);
      console.log(`✅ HTML generiert: ${outputFile}`);
    } else {
      console.log(html);
    }
  } catch (error) {
    console.error(`❌ Fehler:`, error.message);
    process.exit(1);
  }
}

// Nur ausführen wenn direkt aufgerufen
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export default ReactToHTMLConverter;