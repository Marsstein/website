/**
 * Server-Side Rendering für SEO-Seiten
 * Rendert React-Komponenten mit React Helmet zu statischem HTML
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { HelmetProvider } from 'react-helmet-async';
// History wird nicht benötigt für StaticRouter

// Wir müssen den App dynamisch importieren, nachdem wir die Environment vorbereitet haben
let App;

/**
 * Initialisiert die SSR-Umgebung
 */
export async function initSSR() {
  // Mock Browser-APIs für SSR
  global.window = {
    location: { href: '', pathname: '/' },
    navigator: { userAgent: '' },
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
    matchMedia: () => ({ matches: false, addListener: () => {}, removeListener: () => {} }),
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    scrollTo: () => {}
  };
  
  global.document = {
    createElement: () => ({ style: {} }),
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    addEventListener: () => {},
    removeEventListener: () => {}
  };
  
  global.navigator = { userAgent: '' };
  global.requestAnimationFrame = cb => setTimeout(cb, 0);
  global.cancelAnimationFrame = id => clearTimeout(id);
  
  // Dynamisch App importieren
  const AppModule = await import('../src/App.jsx');
  App = AppModule.default;
}

/**
 * Rendert eine einzelne Route zu HTML mit React Helmet Daten
 * @param {string} pathname - Die Route die gerendert werden soll
 * @returns {Object} - HTML und Head-Daten
 */
export async function renderSEOPage(pathname) {
  if (!App) {
    await initSSR();
  }
  
  const helmetContext = {};
  
  try {
    // App zu String rendern
    const appHtml = renderToString(
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={pathname}>
          <App />
        </StaticRouter>
      </HelmetProvider>
    );
    
    // Helmet Daten extrahieren
    const { helmet } = helmetContext;
    
    return {
      html: appHtml,
      head: {
        title: helmet.title.toString(),
        meta: helmet.meta.toString(),
        link: helmet.link.toString(),
        script: helmet.script.toString(),
        noscript: helmet.noscript.toString(),
        style: helmet.style.toString()
      }
    };
  } catch (error) {
    console.error(`Error rendering ${pathname}:`, error);
    // Fallback auf statische Daten
    return {
      html: '<div id="root-ssr-error"></div>',
      head: {
        title: '<title>Marsstein - Compliance Platform</title>',
        meta: '',
        link: '',
        script: '',
        noscript: '',
        style: ''
      }
    };
  }
}

/**
 * Batch-Rendering für mehrere Routen
 * @param {Array} routes - Array von Routen
 * @returns {Map} - Map mit Route als Key und Render-Ergebnis als Value
 */
export async function renderMultiplePages(routes) {
  const results = new Map();
  
  // Initialisierung einmal durchführen
  await initSSR();
  
  for (const route of routes) {
    console.log(`  SSR: Rendering ${route}...`);
    const result = await renderSEOPage(route);
    results.set(route, result);
  }
  
  return results;
}