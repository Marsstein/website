#!/usr/bin/env node

/**
 * Content Generator using templates
 * Quickly create new pages with consistent structure
 */

import { writeFileSync, mkdirSync, existsSync, readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { generateCompliancePage } from './templates/compliance-template.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Page configurations
const pageConfigs = {
  tisax: {
    standard: 'TISAX',
    fullName: 'Automotive Security für Zulieferer & OEMs',
    heroTitle: 'TISAX® Automotive',
    heroSubtitle: 'Security Standard',
    description: 'Werden Sie Teil der deutschen Automotive-Lieferkette mit TISAX®. VDA ISA 6.0-konforme Informationssicherheit für Automotive-Unternehmen.',
    keywords: ['TISAX', 'VDA ISA', 'Automotive Security', 'TISAX Zertifizierung', 'Automobilindustrie'],
    badge: 'TISAX® Compliance',
    badgeIcon: 'car',
    primaryColor: 'red',
    secondaryColor: 'orange',
    
    painPoints: [
      {
        icon: 'car',
        title: 'Automotive Supply Chain Security',
        description: 'TISAX®-konforme Sicherheit für die komplexe Automotive-Lieferkette mit hunderten von Zulieferern und Partnern.',
        impact: 'Kritisch',
        example: 'OEM-Supplier Integration, Tier-1/2/3 Supplier Management, Connected Car Data Protection'
      },
      {
        icon: 'lock',
        title: 'Vertrauliche Automotive-Daten',
        description: 'Schutz hochsensibler Fahrzeugdaten, Entwicklungsinformationen und Produktionsgeheimnisse nach VDA ISA Standards.',
        impact: 'Kritisch',
        example: 'Vehicle Development Data, Production Processes, Autonomous Driving Algorithms, Battery Technology'
      },
      {
        icon: 'shield',
        title: 'Connected Vehicle Cybersecurity',
        description: 'Cybersecurity für vernetzte Fahrzeuge, V2X-Kommunikation und Over-the-Air-Updates nach ISO/SAE 21434.',
        impact: 'Hoch',
        example: 'V2V/V2I Communication, OTA Update Security, In-Vehicle Network Security, Telematics Protection'
      },
      {
        icon: 'users',
        title: 'Automotive Partnership Compliance',
        description: 'TISAX®-Assessment und -Zertifizierung für Geschäftsbeziehungen mit deutschen OEMs und Tier-1-Suppliern.',
        impact: 'Hoch',
        example: 'OEM Vendor Assessments, Joint Venture Security, Cross-Border Automotive Partnerships'
      }
    ],
    
    solutions: [
      {
        title: 'TISAX® Assessment & Certification',
        description: 'Vollständige TISAX®-Vorbereitung und -Zertifizierung nach VDA ISA 6.0 Standards',
        features: [
          'VDA ISA 6.0 Gap Analysis und Remediation',
          'TISAX® Assessment Vorbereitung und Begleitung',
          'Automotive-spezifische Security Controls',
          'Supplier Onboarding und Integration'
        ],
        icon: 'shield',
        color: 'from-red-500 to-orange-600'
      },
      {
        title: 'Automotive Cybersecurity Framework',
        description: 'ISO/SAE 21434-konforme Cybersecurity für Connected Vehicles und Automotive-Systeme',
        features: [
          'Vehicle Cybersecurity Management System (CSMS)',
          'Cybersecurity Risk Assessment für Fahrzeuge',
          'Secure Development Lifecycle für Automotive',
          'Incident Response für Connected Vehicles'
        ],
        icon: 'car',
        color: 'from-blue-500 to-indigo-600'
      },
      {
        title: 'Supply Chain Security Governance',
        description: 'Umfassende Security Governance für die Automotive-Lieferkette',
        features: [
          'Multi-Tier Supplier Risk Management',
          'Automotive Data Protection Framework',
          'Cross-Border Compliance Management',
          'Continuous Supplier Monitoring'
        ],
        icon: 'users',
        color: 'from-green-500 to-teal-600'
      }
    ],
    
    benefits: [
      {
        title: 'Market Access',
        description: 'Zugang zum deutschen Automotive-Markt',
        metric: '100%',
        detail: 'der deutschen OEMs erfordern TISAX®'
      },
      {
        title: 'Competitive Advantage',
        description: 'Wettbewerbsvorsprung durch TISAX® Zertifizierung',
        metric: '65%',
        detail: 'höhere Erfolgsrate bei Automotive-Ausschreibungen'
      },
      {
        title: 'Risk Reduction',
        description: 'Drastische Reduktion von Cybersecurity-Risiken',
        metric: '80%',
        detail: 'weniger sicherheitsrelevante Vorfälle'
      },
      {
        title: 'Operational Excellence',
        description: 'Verbesserte Sicherheitsprozesse und -kultur',
        metric: '45%',
        detail: 'Effizienzsteigerung bei Security Operations'
      }
    ],
    
    ctaTitle: 'Ihr Weg in die deutsche Automotive-Lieferkette',
    ctaDescription: 'Werden Sie Teil der deutschen Automotive-Industrie mit TISAX® Zertifizierung. Unsere Automotive-Security-Experten begleiten Sie zur erfolgreichen VDA ISA 6.0 Compliance.'
  },
  
  // Add more page configurations here...
};

// Generate page from configuration
function generatePage(configName) {
  const config = pageConfigs[configName];
  if (!config) {
    console.error(`❌ Configuration '${configName}' not found!`);
    return;
  }
  
  console.log(`🚀 Generating ${config.standard} page...`);
  
  // Generate content using template
  const pageContent = generateCompliancePage(config);
  
  // Determine output path based on standard
  const category = 'compliance'; // Could be dynamic based on config
  const filename = configName;
  
  // Create directory if needed
  const dirPath = join(__dirname, 'content', category);
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
  
  // Create module file
  const moduleContent = `/**
 * ${pageContent.title}
 * Generated using compliance template
 */

export default {
  title: '${pageContent.title.replace(/'/g, "\\'")}',
  description: '${pageContent.description.replace(/'/g, "\\'")}',
  keywords: '${pageContent.keywords}',
  content: \`${pageContent.content}\`
};`;
  
  // Write file
  const filePath = join(dirPath, `${filename}.js`);
  writeFileSync(filePath, moduleContent);
  
  console.log(`✅ Generated: ${filePath}`);
  
  // Update index.js
  updateIndexFile(category, filename);
}

// Update the central index.js file with new export
function updateIndexFile(category, filename) {
  const indexPath = join(__dirname, 'content', 'index.js');
  let indexContent = readFileSync(indexPath, 'utf-8');
  
  const exportName = filename.replace(/-/g, '');
  const exportStatement = `export { default as ${exportName} } from './${category}/${filename}.js';`;
  
  // Check if export already exists
  if (indexContent.includes(exportStatement)) {
    console.log('ℹ️  Export already exists in index.js');
    return;
  }
  
  // Find the right section to add the export
  const categorySection = `// ${category.charAt(0).toUpperCase() + category.slice(1)} Pages`;
  const sectionIndex = indexContent.indexOf(categorySection);
  
  if (sectionIndex !== -1) {
    // Find the next section or end of exports
    const nextSectionMatch = indexContent.substring(sectionIndex + categorySection.length).match(/\n\n\/\//);
    const insertIndex = nextSectionMatch 
      ? sectionIndex + categorySection.length + nextSectionMatch.index
      : sectionIndex + categorySection.length;
    
    // Insert the export
    indexContent = indexContent.substring(0, insertIndex) + 
      '\n' + exportStatement + 
      indexContent.substring(insertIndex);
    
    writeFileSync(indexPath, indexContent);
    console.log('✅ Updated index.js with new export');
  } else {
    console.warn('⚠️  Could not find category section in index.js');
  }
}

// CLI handling
const args = process.argv.slice(2);
const configName = args[0];

if (!configName) {
  console.log(`
Usage: node generate-content.js <config-name>

Available configurations:
${Object.keys(pageConfigs).map(name => `  - ${name}`).join('\n')}

Example:
  node generate-content.js tisax
  `);
} else {
  generatePage(configName);
}

// Export for programmatic use
export { generatePage, pageConfigs };