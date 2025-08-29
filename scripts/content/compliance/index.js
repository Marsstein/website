/**
 * Compliance Module Export
 * Exportiert alle Compliance-bezogenen Seiten
 */

const iso27001 = require('./iso-27001');
const iso27017 = require('./iso-27017');
const iso27018 = require('./iso-27018');
const soc2 = require('./soc2');

module.exports = {
  'iso-27001': iso27001,
  'iso-27017': iso27017,
  'iso-27018': iso27018,
  'soc2': soc2
};