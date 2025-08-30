/**
 * Zentrale Content Registry (ES6)
 * Verwaltet alle Content-Module für das Pre-Rendering
 */

import compliance from './compliance/index.mjs';
import branchen from './branchen/index.mjs';
import wissen from './wissen/index.mjs';
import assessmentCenter from './assessment-center/index.mjs';
import tools from './tools/index.mjs';
import main from './main/index.mjs';

// Für Unterverzeichnisse
import wissenBranchen from './wissen/branchen/index.mjs';
import wissenLeitfaden from './wissen/leitfaden/index.mjs';
import wissenRechtsprechung from './wissen/rechtsprechung/index.mjs';

export default {
  compliance,
  branchen,
  wissen,
  assessmentCenter,
  tools,
  main,
  wissenBranchen,
  wissenLeitfaden,
  wissenRechtsprechung,
  
  /**
   * Holt den Content für eine bestimmte Route
   * @param {string} route - Die Route (z.B. '/iso-27001-zertifizierung')
   * @returns {object|null} Content-Objekt oder null wenn nicht gefunden
   */
  getContent: (route) => {
    // Suche in allen Kategorien
    const registry = { 
      compliance, 
      branchen, 
      wissen, 
      assessmentCenter, 
      tools, 
      main,
      wissenBranchen,
      wissenLeitfaden,
      wissenRechtsprechung
    };
    
    for (const category of Object.values(registry)) {
      if (typeof category === 'function') continue;
      
      for (const page of Object.values(category)) {
        if (page && page.route === route) {
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
    const registry = { 
      compliance, 
      branchen, 
      wissen, 
      assessmentCenter, 
      tools, 
      main,
      wissenBranchen,
      wissenLeitfaden,
      wissenRechtsprechung
    };
    
    for (const category of Object.values(registry)) {
      if (typeof category === 'function') continue;
      
      for (const page of Object.values(category)) {
        if (page && page.route) {
          routes.push(page.route);
        }
      }
    }
    return routes;
  }
};