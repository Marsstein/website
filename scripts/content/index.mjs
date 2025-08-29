/**
 * Zentrale Content Registry (ES6)
 * Verwaltet alle Content-Module für das Pre-Rendering
 */

import compliance from './compliance/index.mjs';

export default {
  compliance,
  
  /**
   * Holt den Content für eine bestimmte Route
   * @param {string} route - Die Route (z.B. '/iso-27001-zertifizierung')
   * @returns {object|null} Content-Objekt oder null wenn nicht gefunden
   */
  getContent: (route) => {
    // Suche in allen Kategorien
    const registry = { compliance };
    for (const category of Object.values(registry)) {
      if (typeof category === 'function') continue;
      
      for (const page of Object.values(category)) {
        if (page.route === route) {
          return page;
        }
      }
    }
    return null;
  },
  
  /**
   * Gibt alle verfügbaren Routen zurück
   * @returns {string[]} Array mit allen Routen
   */
  getAllRoutes: () => {
    const routes = [];
    const registry = { compliance };
    for (const category of Object.values(registry)) {
      if (typeof category === 'function') continue;
      
      for (const page of Object.values(category)) {
        if (page.route) {
          routes.push(page.route);
        }
      }
    }
    return routes;
  }
};