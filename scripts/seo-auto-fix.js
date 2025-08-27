import { readFileSync, writeFileSync } from 'fs';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Pages to exclude from SEO (test pages, internal tools, etc.)
const EXCLUDE_PATTERNS = [
  /test/i,
  /design-showcase/i,
  /diagnostic/i,
  /simple-test/i,
  /approach\d/i,
  /^\/(designs)\//,
  /footer-test/i,
  /not-found/i,
  /404/i,
  /dashboard/i,  // Protected pages
  /admin/i       // Admin pages
];

// Function to check if page should have SEO
function shouldHaveSEO(filePath, route) {
  const fileName = basename(filePath);
  
  // Check exclusion patterns
  for (const pattern of EXCLUDE_PATTERNS) {
    if (pattern.test(fileName) || pattern.test(route)) {
      return false;
    }
  }
  
  // Include all other pages
  return true;
}

// Function to generate SEO data based on file name and route
function generateSEOData(fileName, route) {
  // Convert file name to readable title
  const baseName = fileName.replace('.tsx', '').replace('.jsx', '');
  const title = baseName
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/^./, str => str.toUpperCase())
    .replace(/Dsgvo/g, 'DSGVO')
    .replace(/Iso/g, 'ISO')
    .replace(/Nis/g, 'NIS')
    .replace(/Soc/g, 'SOC')
    .replace(/Ai/g, 'AI')
    .replace(/Ki/g, 'KI')
    .replace(/Kdg/g, 'KDG')
    .replace(/Dsg/g, 'DSG');
  
  // Generate description based on title
  const description = `${title} - Compliance & Datenschutz Expertise von Marsstein. Erfahren Sie mehr über ${title.toLowerCase()}.`;
  
  // Generate canonical URL
  const canonical = route === '/' ? '/' : route.replace(/\/$/, '');
  
  return {
    title: `${title} | Marsstein`,
    description: description.substring(0, 160), // Limit to 160 chars
    canonical
  };
}

// Function to add SEOHead to a component
function addSEOHead(filePath, seoData) {
  let content = readFileSync(filePath, 'utf-8');
  
  // Check if already has SEOHead
  if (content.includes('<SEOHead')) {
    console.log(`✅ Already has SEO: ${filePath}`);
    return false;
  }
  
  // Add import if not present
  if (!content.includes('import SEOHead') && !content.includes('import { SEOHead }')) {
    // Find the last import statement
    const importMatch = content.match(/(import[\s\S]*?from\s+['"][^'"]+['"];?\n)/g);
    if (importMatch) {
      const lastImport = importMatch[importMatch.length - 1];
      const lastImportIndex = content.lastIndexOf(lastImport);
      content = content.slice(0, lastImportIndex + lastImport.length) + 
                "import SEOHead from '@/components/SEOHead';\n" +
                content.slice(lastImportIndex + lastImport.length);
    }
  }
  
  // Find the main return statement
  const returnMatch = content.match(/return\s*\(\s*\n?\s*(<[^>]+)/);
  if (returnMatch) {
    const returnIndex = content.indexOf(returnMatch[0]);
    const insertPoint = returnIndex + returnMatch[0].length - returnMatch[1].length;
    
    const seoComponent = `<>
      <SEOHead
        title="${seoData.title}"
        description="${seoData.description}"
        canonical="${seoData.canonical}"
      />
      `;
    
    // Insert SEOHead and wrap in fragment if needed
    let before = content.slice(0, insertPoint);
    let after = content.slice(insertPoint);
    
    // Check if we need to close the fragment
    const needsFragmentClose = !after.trim().startsWith('<>');
    if (needsFragmentClose) {
      // Find the end of the component
      const componentEnd = after.lastIndexOf('</div>');
      if (componentEnd !== -1) {
        after = after.slice(0, componentEnd + 6) + '\n    </>' + after.slice(componentEnd + 6);
      }
    }
    
    content = before + seoComponent + after;
  }
  
  writeFileSync(filePath, content);
  console.log(`✅ Added SEO to: ${filePath}`);
  return true;
}

// Main function to fix SEO across all pages
async function fixAllSEO() {
  try {
    const reportPath = join(__dirname, '..', 'seo-audit-report.json');
    const report = JSON.parse(readFileSync(reportPath, 'utf-8'));
    
    const pagesToFix = report.pages.filter(page => {
      return !page.hasSEOHeadUsage && shouldHaveSEO(page.file, page.route);
    });
    
    console.log(`\n🔧 Fixing SEO for ${pagesToFix.length} pages...\n`);
    
    let fixed = 0;
    let skipped = 0;
    
    for (const page of pagesToFix) {
      const fullPath = join(__dirname, '..', 'src', page.file);
      const seoData = generateSEOData(page.fileName, page.route);
      
      console.log(`\n📄 Processing: ${page.fileName}`);
      console.log(`   Route: ${page.route}`);
      console.log(`   Title: ${seoData.title}`);
      
      const wasFixed = addSEOHead(fullPath, seoData);
      if (wasFixed) {
        fixed++;
      } else {
        skipped++;
      }
    }
    
    console.log(`\n✨ SEO Fix Complete!`);
    console.log(`   Fixed: ${fixed} pages`);
    console.log(`   Skipped: ${skipped} pages`);
    console.log(`   Excluded: ${report.pages.length - pagesToFix.length} pages\n`);
    
  } catch (error) {
    console.error('Error fixing SEO:', error);
  }
}

// Add option to fix specific pages only
const args = process.argv.slice(2);
if (args.includes('--dry-run')) {
  console.log('🔍 Dry run mode - no files will be modified\n');
  // Just show what would be fixed
  const reportPath = join(__dirname, '..', 'seo-audit-report.json');
  const report = JSON.parse(readFileSync(reportPath, 'utf-8'));
  
  const pagesToFix = report.pages.filter(page => {
    return !page.hasSEOHeadUsage && shouldHaveSEO(page.file, page.route);
  });
  
  console.log('Pages that would be fixed:');
  pagesToFix.forEach(page => {
    console.log(`- ${page.file} (${page.route})`);
  });
  
} else {
  fixAllSEO();
}