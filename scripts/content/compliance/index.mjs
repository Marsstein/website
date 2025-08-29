/**
 * Compliance Module Export (ES6)
 * Exportiert alle Compliance-bezogenen Seiten
 */

import iso27001 from './iso-27001.mjs';
import iso27017 from './iso-27017.mjs';
import iso27018 from './iso-27018.mjs';
import soc2 from './soc2.mjs';
import tisax from './tisax.mjs';

export default {
  'iso-27001': iso27001,
  'iso-27017': iso27017,
  'iso-27018': iso27018,
  'soc2': soc2,
  'tisax': tisax
};