#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const routes = [
  // === HAUPTSEITEN ===
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/contact', priority: '0.8', changefreq: 'monthly' },
  { url: '/preise', priority: '0.9', changefreq: 'weekly' },
  { url: '/features', priority: '0.9', changefreq: 'weekly' },
  { url: '/features/human-in-the-loop', priority: '0.8', changefreq: 'weekly' },
  { url: '/beta', priority: '0.8', changefreq: 'weekly' },
  { url: '/ueber-uns', priority: '0.8', changefreq: 'monthly' },
  { url: '/datenschutzexperten', priority: '0.8', changefreq: 'weekly' },
  { url: '/campus-founders', priority: '0.7', changefreq: 'monthly' },
  { url: '/dsgvo-compliance-software', priority: '0.8', changefreq: 'weekly' },

  // === EXTERNER DATENSCHUTZBEAUFTRAGTER ===
  { url: '/externer-datenschutzbeauftragter', priority: '0.9', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-oldenburg', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-hannover', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-bremen', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-duesseldorf', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-hamburg', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-hildesheim', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-stuttgart', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-muenchen', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-nuernberg', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-koeln', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-wedemark', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-osnabrueck', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-lueneburg', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-dresden', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-dortmund', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-nrw', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-braunschweig', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-karlsruhe', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-celle', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-magdeburg', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-frankfurt', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-ulm', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-heidelberg', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-leipzig', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-bremerhaven', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-mannheim', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-wolfsburg', priority: '0.7', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-bayern', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-niedersachsen', priority: '0.8', changefreq: 'weekly' },
  { url: '/externer-datenschutzbeauftragter-muenster', priority: '0.7', changefreq: 'weekly' },

  // === REGULIERUNGEN (Hauptseiten) ===
  { url: '/dsgvo', priority: '0.9', changefreq: 'weekly' },
  { url: '/dsgvo-audit', priority: '0.9', changefreq: 'weekly' },
  { url: '/eu-ai-act', priority: '0.9', changefreq: 'weekly' },
  { url: '/eu-data-act', priority: '0.8', changefreq: 'weekly' },
  { url: '/nis2-compliance', priority: '0.8', changefreq: 'weekly' },
  { url: '/hinweisgeberschutzgesetz', priority: '0.8', changefreq: 'weekly' },
  { url: '/geldwaeschegesetz', priority: '0.8', changefreq: 'weekly' },
  { url: '/dsg-ekd', priority: '0.7', changefreq: 'monthly' },
  { url: '/kdg', priority: '0.7', changefreq: 'monthly' },

  // === ZERTIFIZIERUNGEN ===
  { url: '/iso-27001-zertifizierung', priority: '0.8', changefreq: 'weekly' },
  { url: '/soc2-zertifizierung', priority: '0.8', changefreq: 'weekly' },
  { url: '/iso-27017-zertifizierung', priority: '0.7', changefreq: 'weekly' },
  { url: '/iso-27018-zertifizierung', priority: '0.7', changefreq: 'weekly' },
  { url: '/tisax-zertifizierung', priority: '0.7', changefreq: 'weekly' },
  { url: '/zertifizierung/iso-27001', priority: '0.7', changefreq: 'monthly' },
  { url: '/zertifizierung/iso-27017', priority: '0.6', changefreq: 'monthly' },
  { url: '/zertifizierung/iso-27018', priority: '0.6', changefreq: 'monthly' },
  { url: '/zertifizierung/soc2', priority: '0.7', changefreq: 'monthly' },
  { url: '/zertifizierung/tisax', priority: '0.6', changefreq: 'monthly' },

  // === COMPLIANCE GUIDES ===
  { url: '/compliance/iso-27001', priority: '0.7', changefreq: 'monthly' },
  { url: '/compliance/soc-2', priority: '0.7', changefreq: 'monthly' },
  { url: '/compliance/eu-ai-act', priority: '0.7', changefreq: 'monthly' },
  { url: '/compliance/nis2', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/iso-27017', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/iso-27018', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/hinweisgeberschutzgesetz', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/geldwaeschegesetz', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/tisax', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/dsgvo', priority: '0.7', changefreq: 'monthly' },
  { url: '/compliance/dsg-ekd', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/dsg-ekd-guide', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/kdg', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/kdg-guide', priority: '0.6', changefreq: 'monthly' },
  { url: '/compliance/iso-27001-guide', priority: '0.7', changefreq: 'monthly' },

  // === CHINA DSGVO ===
  { url: '/dsgvo-china', priority: '0.8', changefreq: 'weekly' },
  { url: '/dsgvo-amazon-sellers-china', priority: '0.7', changefreq: 'monthly' },
  { url: '/dsgvo-tiktok-shop-china', priority: '0.7', changefreq: 'monthly' },
  { url: '/deepseek-dsgvo', priority: '0.7', changefreq: 'weekly' },
  { url: '/eu-vertreter-china', priority: '0.7', changefreq: 'monthly' },
  { url: '/artikel-15-dsgvo-auskunftsrecht-china', priority: '0.6', changefreq: 'monthly' },
  { url: '/joint-venture-china-datenschutz', priority: '0.6', changefreq: 'monthly' },
  { url: '/china-investitionen-dsgvo-screening', priority: '0.6', changefreq: 'monthly' },
  { url: '/china-scc-vs-eu-scc', priority: '0.6', changefreq: 'monthly' },
  { url: '/dsgvo-wechat-alipay-china', priority: '0.6', changefreq: 'monthly' },
  { url: '/dsgvo-douyin-china', priority: '0.6', changefreq: 'monthly' },
  { url: '/dsgvo-b2b-hersteller-china', priority: '0.6', changefreq: 'monthly' },
  { url: '/pipl-gdpr-china', priority: '0.7', changefreq: 'monthly' },

  // === ASSESSMENT CENTER ===
  { url: '/assessment-center', priority: '0.7', changefreq: 'weekly' },
  { url: '/assessment-center/dsgvo-compliance-checklist', priority: '0.6', changefreq: 'monthly' },
  { url: '/assessment-center/datenschutz-readiness-assessment', priority: '0.6', changefreq: 'monthly' },
  { url: '/assessment-center/breach-response-checklist', priority: '0.6', changefreq: 'monthly' },
  { url: '/assessment-center/cookie-compliance-audit', priority: '0.6', changefreq: 'monthly' },
  { url: '/assessment-center/vendor-assessment-template', priority: '0.6', changefreq: 'monthly' },
  { url: '/assessment-center/ai-risk-assessment', priority: '0.6', changefreq: 'monthly' },
  { url: '/assessment-center/algorithmic-impact-assessment', priority: '0.6', changefreq: 'monthly' },
  { url: '/assessment-center/ai-governance-check', priority: '0.6', changefreq: 'monthly' },
  { url: '/assessment-center/datenschutz-test', priority: '0.5', changefreq: 'monthly' },
  { url: '/assessment-center/dsgvo-kosten-rechner', priority: '0.7', changefreq: 'weekly' },
  { url: '/assessment-center/isms-maturity-assessment', priority: '0.5', changefreq: 'monthly' },
  { url: '/assessment-center/iso-27001-readiness-check', priority: '0.6', changefreq: 'monthly' },
  { url: '/assessment-center/nis2-compliance-check', priority: '0.6', changefreq: 'monthly' },
  { url: '/assessment-center/security-controls-audit', priority: '0.5', changefreq: 'monthly' },
  { url: '/assessment-center/soc2-readiness-assessment', priority: '0.6', changefreq: 'monthly' },

  // === RATGEBER ===
  { url: '/ratgeber/datenschutzbeauftragter-auswahl', priority: '0.7', changefreq: 'monthly' },
  { url: '/ratgeber/sicherheitszertifizierung-auswahl', priority: '0.7', changefreq: 'monthly' },
  { url: '/ratgeber/dsgvo-software-auswahlkriterien', priority: '0.7', changefreq: 'monthly' },

  // === BRANCHEN ===
  { url: '/branchen', priority: '0.7', changefreq: 'weekly' },
  { url: '/branchen/gesundheitswesen', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/gesundheitswesen-dsgvo', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/healthcare-ai-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/finanzdienstleister', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/e-commerce', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/saas', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/saas-unternehmen', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/produktion', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/produktion-datenschutz-guide', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/automotive', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/energie', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/lebensmittel', priority: '0.5', changefreq: 'monthly' },
  { url: '/branchen/logistik', priority: '0.5', changefreq: 'monthly' },
  { url: '/branchen/logistics-compliance', priority: '0.5', changefreq: 'monthly' },
  { url: '/branchen/insurtech-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/proptech-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/travel-compliance', priority: '0.5', changefreq: 'monthly' },
  { url: '/branchen/edtech-privacy', priority: '0.5', changefreq: 'monthly' },
  { url: '/branchen/dsgvo-vereine', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/datenschutz-homeoffice', priority: '0.6', changefreq: 'monthly' },
  { url: '/branchen/pharma-compliance-guide', priority: '0.6', changefreq: 'monthly' },

  // === TOOLS ===
  { url: '/tools', priority: '0.7', changefreq: 'weekly' },
  { url: '/tools/cookie-management', priority: '0.6', changefreq: 'monthly' },
  { url: '/tools/cookie-management-tool', priority: '0.6', changefreq: 'monthly' },
  { url: '/tools/whistleblower-system', priority: '0.6', changefreq: 'monthly' },
  { url: '/tools/whistleblower-system-tool', priority: '0.6', changefreq: 'monthly' },
  { url: '/tools/dsgvo-email-template-generator', priority: '0.5', changefreq: 'monthly' },
  { url: '/tools/dsgvo-compliance-scorecard', priority: '0.5', changefreq: 'monthly' },
  { url: '/tools/compliance-ai-assistant', priority: '0.6', changefreq: 'monthly' },

  // === GUIDES ===
  { url: '/guides/dsgvo-leitfaden', priority: '0.7', changefreq: 'monthly' },
  { url: '/guides/eu-ai-act-leitfaden', priority: '0.7', changefreq: 'monthly' },
  { url: '/guides/nis2-leitfaden', priority: '0.7', changefreq: 'monthly' },
  { url: '/guides/soc2-leitfaden', priority: '0.7', changefreq: 'monthly' },
  { url: '/guides/tisax-leitfaden', priority: '0.7', changefreq: 'monthly' },
  { url: '/guides/geldwaeschegesetz-leitfaden', priority: '0.7', changefreq: 'monthly' },
  { url: '/guides/iso-27017-leitfaden', priority: '0.6', changefreq: 'monthly' },
  { url: '/guides/iso-27018-leitfaden', priority: '0.6', changefreq: 'monthly' },
  { url: '/guides/data-breach-notfall-leitfaden', priority: '0.6', changefreq: 'monthly' },
  { url: '/guides/dsgvo', priority: '0.7', changefreq: 'monthly' },
  { url: '/guides/eu-ai-act', priority: '0.7', changefreq: 'monthly' },
  { url: '/guides/nis2', priority: '0.7', changefreq: 'monthly' },
  { url: '/guides/soc2', priority: '0.7', changefreq: 'monthly' },
  { url: '/guides/tisax', priority: '0.7', changefreq: 'monthly' },
  { url: '/guides/geldwaeschegesetz', priority: '0.7', changefreq: 'monthly' },
  { url: '/guides/iso-27017', priority: '0.6', changefreq: 'monthly' },
  { url: '/guides/iso-27018', priority: '0.6', changefreq: 'monthly' },

  // === KI COMPLIANCE ===
  { url: '/ki/ki-risikoklassifizierung', priority: '0.7', changefreq: 'monthly' },
  { url: '/ki/privacy-by-design-ai', priority: '0.6', changefreq: 'monthly' },
  { url: '/ki/explainable-ai-guide', priority: '0.6', changefreq: 'monthly' },
  { url: '/ki/financial-ai-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/ki/hr-ai-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/ki/algorithmic-impact-assessment-guide', priority: '0.6', changefreq: 'monthly' },
  { url: '/ki/data-minimization-guide', priority: '0.6', changefreq: 'monthly' },
  { url: '/ki/federated-learning-guide', priority: '0.6', changefreq: 'monthly' },
  { url: '/ki/model-privacy-attacks', priority: '0.6', changefreq: 'monthly' },
  { url: '/ki/privacy-preserving-ai', priority: '0.6', changefreq: 'monthly' },

  // === CRISIS MANAGEMENT ===
  { url: '/crisis-management', priority: '0.7', changefreq: 'monthly' },
  { url: '/crisis/security-incident-guide', priority: '0.6', changefreq: 'monthly' },

  // === LEGAL ===
  { url: '/legal/cookie-law-guide', priority: '0.6', changefreq: 'monthly' },
  { url: '/legal/meta-irland-case', priority: '0.5', changefreq: 'monthly' },

  // === WISSEN (Hauptseiten) ===
  { url: '/wissen', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/china', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/china-dsgvo', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/cybersecurity', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/dsgvo', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/ki-datenschutz', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/ki-compliance', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/krisenmanagement', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/rechtsprechung', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/risk-management', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/zertifizierungen', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/dsgvo-leitfaeden', priority: '0.7', changefreq: 'monthly' },
  { url: '/wissen/kosten', priority: '0.7', changefreq: 'weekly' },
  { url: '/wissen/compliance-frameworks', priority: '0.6', changefreq: 'monthly' },

  // === WISSEN LEITFADEN ===
  { url: '/wissen/leitfaden/dsgvo-grundlagen', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/website-dsgvo', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/dsgvo-30-tage', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/data-breach-notfall', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/verarbeitungsverzeichnis', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/betroffenenrechte', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/tom-massnahmen', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/dsfa-durchfuehrung', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/datenschutzbeauftragter', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/leitfaden/datenschutzbeauftragter-ausbildung', priority: '0.7', changefreq: 'monthly' },
  { url: '/wissen/leitfaden/loeschkonzept', priority: '0.6', changefreq: 'monthly' },

  // === WISSEN KOSTEN ===
  { url: '/wissen/kosten/dsgvo-compliance-kosten', priority: '0.7', changefreq: 'monthly' },
  { url: '/wissen/kosten/externer-datenschutzbeauftragter-kosten', priority: '0.7', changefreq: 'monthly' },
  { url: '/wissen/kosten/iso-27001-zertifizierung-kosten', priority: '0.7', changefreq: 'monthly' },

  // === WISSEN ARTIKEL ===
  { url: '/wissen/dsgvo-compliance-luecken', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/interner-dsb-scheitert', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/dsgvo-software-vs-manuell', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/dsgvo-vs-bdsg', priority: '0.8', changefreq: 'weekly' },

  // === WISSEN CHINA ===
  { url: '/wissen/china-dsgvo/artikel-15-dsgvo-auskunftsrecht-china', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/china-dsgvo/dsgvo-amazon-sellers-china', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/china-dsgvo/dsgvo-tiktok-shop-china', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/china-dsgvo/deepseek-dsgvo', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/china-dsgvo/eu-vertreter-china', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/china-dsgvo/joint-venture-china-datenschutz', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/china-dsgvo/china-investitionen-dsgvo-screening', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/china-dsgvo/china-scc-vs-eu-scc', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/china-dsgvo/dsgvo-wechat-alipay-china', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/china-dsgvo/dsgvo-douyin-china', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/china-dsgvo/dsgvo-b2b-hersteller-china', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/china-dsgvo/pipl-gdpr-china', priority: '0.6', changefreq: 'monthly' },

  // === WISSEN BRANCHEN ===
  { url: '/wissen/branchen/automotive-datenschutz', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/datenschutz-arztpraxis', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/datenschutz-betriebsrat', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/datenschutz-homeoffice', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/datenschutz-kindergarten', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/datenschutz-personalwesen', priority: '0.8', changefreq: 'weekly' },
  { url: '/wissen/branchen/datenschutz-pflege', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/dsgvo-vereine', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/dsgvo-vermieter', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/ecommerce-privacy', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/edtech-privacy', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/fintech-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/gesundheitswesen-dsgvo', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/healthcare-ai-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/industrie-40-datenschutz', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/insurtech-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/logistics-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/pharma-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/produktion', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/proptech-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/saas-privacy-design', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/smart-grid-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/branchen/travel-compliance', priority: '0.6', changefreq: 'monthly' },

  // === WISSEN KI-DATENSCHUTZ ===
  { url: '/wissen/ki-datenschutz/algorithmic-impact-assessment', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/automated-decision-making', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/data-minimization', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/explainable-ai', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/federated-learning', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/financial-ai-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/hr-ai-compliance', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/ki-einwilligungsmanagement', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/model-privacy-attacks', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/privacy-by-design-ai', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/privacy-preserving-ai', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/ki-datenschutz/risikoklassifizierung', priority: '0.6', changefreq: 'monthly' },

  // === WISSEN KRISENMANAGEMENT ===
  { url: '/wissen/krisenmanagement/business-continuity', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/krisenmanagement/communication-templates', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/krisenmanagement/compliance-audit-emergency', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/krisenmanagement/data-breach-72h', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/krisenmanagement/gdpr-fine-response', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/krisenmanagement/media-crisis', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/krisenmanagement/security-incident', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/krisenmanagement/vendor-data-breach', priority: '0.6', changefreq: 'monthly' },

  // === WISSEN RECHTSPRECHUNG ===
  { url: '/wissen/rechtsprechung/amazon-luxemburg-2021', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/cookie-law', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/facebook-fanpage', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/google-analytics-austria', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/google-fonts-muenchen', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/meta-irland-2024', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/planet49-cookie', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/schrems-ii', priority: '0.6', changefreq: 'monthly' },
  { url: '/wissen/rechtsprechung/whatsapp-irland-2021', priority: '0.6', changefreq: 'monthly' },

  // === RESOURCES & ACADEMY ===
  { url: '/resources', priority: '0.6', changefreq: 'monthly' },
  { url: '/academy', priority: '0.7', changefreq: 'monthly' }

  // === NOINDEX SEITEN (NICHT in Sitemap) ===
  // /impressum - noindex
  // /datenschutz - noindex
  // /agb-software - noindex
  // /dsgvo-checkliste - noindex
  // /thank-you - noindex (Danke-Seite)
  // /beta/thanks - noindex (Danke-Seite)
  // /zh/* - noindex (Chinesische Seiten)
];

function generateSitemap() {
  console.log('🗺️ Generating XML sitemap for SEO...');

  const baseUrl = 'https://marsstein.ai';
  const currentDate = new Date().toISOString().split('T')[0];

  let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemapXml += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemapXml += `
</urlset>`;

  const distPath = path.join(__dirname, '..', 'dist');
  const publicPath = path.join(__dirname, '..', 'public');
  const distSitemapPath = path.join(distPath, 'sitemap.xml');
  const publicSitemapPath = path.join(publicPath, 'sitemap.xml');

  fs.writeFileSync(distSitemapPath, sitemapXml);
  fs.writeFileSync(publicSitemapPath, sitemapXml);

  console.log(`✅ Sitemap generated: ${routes.length} URLs`);
  console.log(`📍 Locations: ${distSitemapPath} & ${publicSitemapPath}`);
}

generateSitemap();