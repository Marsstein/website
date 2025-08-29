#!/usr/bin/env node

/**
 * Migration script to extract existing content from monolithic file
 * to modular structure
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Mapping of routes to file paths
const contentMapping = {
  '/iso-27001-zertifizierung': 'compliance/iso27001',
  '/iso-27017-zertifizierung': 'compliance/iso27017',
  '/iso-27018-zertifizierung': 'compliance/iso27018',
  '/soc2-zertifizierung': 'compliance/soc2',
};

// Read the monolithic file
console.log('📖 Reading monolithic content file...');
const monolithicFile = readFileSync(
  join(__dirname, 'prerender-react-content-full.js'),
  'utf-8'
);

// Extract fullPageContent object using regex
console.log('🔍 Extracting content objects...');
const contentMatches = monolithicFile.matchAll(/['"]([^'"]+)['"]\s*:\s*\(\)\s*=>\s*\({\s*title:\s*['"]([^'"]+)['"],\s*description:\s*['"]([^'"]+)['"],\s*content:\s*`([\s\S]*?)`\s*}\)/g);

let migratedCount = 0;
const exportStatements = [];

for (const match of contentMatches) {
  const [fullMatch, route, title, description, content] = match;
  
  if (contentMapping[route]) {
    const [category, filename] = contentMapping[route].split('/');
    
    // Create directory if it doesn't exist
    const dirPath = join(__dirname, 'content', category);
    if (!existsSync(dirPath)) {
      mkdirSync(dirPath, { recursive: true });
    }
    
    // Create the module content
    const moduleContent = `/**
 * ${title}
 * Auto-migrated from monolithic file
 */

export default {
  title: '${title.replace(/'/g, "\\'")}',
  description: '${description.replace(/'/g, "\\'")}',
  content: \`${content}\`
};`;
    
    // Write the file
    const filePath = join(__dirname, 'content', `${contentMapping[route]}.js`);
    writeFileSync(filePath, moduleContent);
    
    console.log(`✅ Migrated: ${route} → ${contentMapping[route]}.js`);
    
    // Prepare export statement for index.js
    const exportName = filename.replace(/-/g, '');
    exportStatements.push({
      category,
      statement: `export { default as ${exportName} } from './${category}/${filename}.js';`
    });
    
    migratedCount++;
  }
}

// Update index.js with new exports
if (exportStatements.length > 0) {
  console.log('📝 Updating content/index.js...');
  
  let indexContent = readFileSync(join(__dirname, 'content/index.js'), 'utf-8');
  
  // Group by category
  const groupedExports = exportStatements.reduce((acc, { category, statement }) => {
    if (!acc[category]) acc[category] = [];
    acc[category].push(statement);
    return acc;
  }, {});
  
  // Update exports for each category
  Object.entries(groupedExports).forEach(([category, statements]) => {
    const categoryComment = `// ${category.charAt(0).toUpperCase() + category.slice(1)} Pages`;
    const exportSection = statements.join('\\n');
    
    // Find and update the section
    const sectionRegex = new RegExp(`(\\/\\/ ${category.charAt(0).toUpperCase() + category.slice(1)}.*?Pages)[\\s\\S]*?(?=\\n\\n|\\/\\/|$)`, 'g');
    
    if (indexContent.match(sectionRegex)) {
      indexContent = indexContent.replace(sectionRegex, `$1\\n${exportSection}\\n`);
    }
  });
  
  writeFileSync(join(__dirname, 'content/index.js'), indexContent);
}

// Create updated prerender-react-content-full.js
console.log('🔧 Creating updated build script...');

const updatedBuildScript = `#!/usr/bin/env node

/**
 * Full React Content Prerendering - Modular Version
 * Now uses modular content files instead of monolithic structure
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';
import { promisify } from 'util';
import prettier from 'prettier';
import * as pageContents from './content/index.js';

const execAsync = promisify(exec);
const __dirname = dirname(fileURLToPath(import.meta.url));

// Load routes
const routes = JSON.parse(
  readFileSync(join(__dirname, '..', 'prerender-routes-simple.json'), 'utf-8')
);

// Route mapping for incorrect routes
const routeMapping = {
  '/dsgvo-compliance': '/dsgvo',
  '/eu-ai-act-compliance': '/eu-ai-act',
};

// Map routes to content
const fullPageContent = {
  '/iso-27001-zertifizierung': () => pageContents.iso27001,
  '/iso-27017-zertifizierung': () => pageContents.iso27017,
  '/iso-27018-zertifizierung': () => pageContents.iso27018,
  '/soc2-zertifizierung': () => pageContents.soc2,
  // Add more mappings as content is created
};

// Keep the rest of the build logic unchanged...
${monolithicFile.substring(monolithicFile.indexOf('/**\\n * Get content for a specific route'))}`;

writeFileSync(
  join(__dirname, 'prerender-react-content-full-modular.js'),
  updatedBuildScript
);

console.log(`
✨ Migration completed!
   - Migrated ${migratedCount} pages to modular structure
   - Updated content/index.js with exports
   - Created prerender-react-content-full-modular.js

Next steps:
1. Review the migrated files in scripts/content/
2. Test the build with: npm run build:react-content-full
3. Replace the old build script when ready
`);