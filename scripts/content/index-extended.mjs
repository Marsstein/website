/**
 * Erweiterte Content Registry (ES6)
 * Verwaltet ALLE Content-Module für das Pre-Rendering
 */

import compliance from './compliance/index.mjs';
import branchen from './branchen/index.mjs';
import wissen from './wissen/index.mjs';
import wissenBranchen from './wissen/branchen/index.mjs';
import wissenLeitfaden from './wissen/leitfaden/index.mjs';
import wissenRechtsprechung from './wissen/rechtsprechung/index.mjs';
import assessmentCenter from './assessment-center/index.mjs';
import tools from './tools/index.mjs';
import main from './main/index.mjs';

// Flache Struktur aller Module für einfacheren Zugriff
const allModules = {};

// Funktion zum Hinzufügen von Modulen zur flachen Struktur
const addModules = (modules, prefix = '') => {
  for (const [key, value] of Object.entries(modules)) {
    if (value && value.route) {
      // Nutze die Route als Key für direkten Zugriff
      allModules[value.route] = value;
    }
  }
};

// Füge alle Module hinzu
addModules(compliance);
addModules(branchen);
addModules(wissen);
addModules(wissenBranchen);
addModules(wissenLeitfaden);
addModules(wissenRechtsprechung);
addModules(assessmentCenter);
addModules(tools);
addModules(main);

export default {
  // Original-Struktur beibehalten
  compliance,
  branchen,
  wissen,
  wissenBranchen,
  wissenLeitfaden,
  wissenRechtsprechung,
  assessmentCenter,
  tools,
  main,
  
  // Alle Module flach
  allModules,
  
  /**
   * Holt den Content für eine bestimmte Route
   * @param {string} route - Die Route (z.B. '/iso-27001-zertifizierung')
   * @returns {object|null} Content-Objekt oder null wenn nicht gefunden
   */
  getContent: (route) => {
    // Direkter Zugriff über flache Struktur
    return allModules[route] || null;
  },
  
  /**
   * Gibt alle verfügbaren Routen zurück
   * @returns {string[]} Array mit allen Routen
   */
  getAllRoutes: () => {
    return Object.keys(allModules);
  },
  
  /**
   * Gibt die Anzahl der Module zurück
   * @returns {number} Anzahl der Module
   */
  getModuleCount: () => {
    return Object.keys(allModules).length;
  }
};