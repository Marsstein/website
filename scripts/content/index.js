/**
 * Zentrale Content Registry
 * Verwaltet alle Content-Module für das Pre-Rendering
 */

const compliance = require('./compliance');

module.exports = {
  compliance,
  
  /**
   * Holt den Content für eine bestimmte Route
   * @param {string} route - Die Route (z.B. '/iso-27001-zertifizierung')
   * @returns {object|null} Content-Objekt oder null wenn nicht gefunden
   */
  getContent: (route) => {
    // Suche in allen Kategorien
    for (const category of Object.values(module.exports)) {
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
    for (const category of Object.values(module.exports)) {
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