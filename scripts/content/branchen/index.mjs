/**
 * Branchen Module Export (ES6)
 * Exportiert alle Branchen-bezogenen Seiten
 */

import branchenOverview from './branchen-overview.mjs';
import automotive from './automotive.mjs';
import ecommerce from './e-commerce.mjs';
import energie from './energie.mjs';
import finanzdienstleister from './finanzdienstleister.mjs';
import gesundheitswesen from './gesundheitswesen.mjs';
import lebensmittel from './lebensmittel.mjs';
import logistik from './logistik.mjs';
import produktion from './produktion.mjs';
import saasUnternehmen from './saas-unternehmen.mjs';

export default {
  'branchen': branchenOverview,
  'automotive': automotive,
  'e-commerce': ecommerce,
  'energie': energie,
  'finanzdienstleister': finanzdienstleister,
  'gesundheitswesen': gesundheitswesen,
  'lebensmittel': lebensmittel,
  'logistik': logistik,
  'produktion': produktion,
  'saas-unternehmen': saasUnternehmen
};