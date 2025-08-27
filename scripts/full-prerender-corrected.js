import puppeteer from 'puppeteer';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import prettier from 'prettier';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Format HTML for better readability using Prettier
 */
async function formatHTML(html) {
  try {
    const formatted = await prettier.format(html, {
      parser: 'html',
      printWidth: 120,
      tabWidth: 2,
      useTabs: false,
      singleQuote: false,
      bracketSpacing: true,
      htmlWhitespaceSensitivity: 'css',
      endOfLine: 'lf',
      semi: true,
      arrowParens: 'avoid'
    });
    return formatted;
  } catch (error) {
    console.warn('⚠️  Prettier formatting failed, using fallback formatter:', error.message);
    return html;
  }
}

/**
 * HTML Optimierungen
 */
function optimizeHtml(html, route) {
  // Entferne Development-spezifische Scripts
  html = html.replace(/<script.*?\/\/@vite\/client.*?<\/script>/g, '');
  
  // Entferne inline styles die animations blockieren
  html = html.replace(/style="opacity:\s*0[^"]*"/g, '');
  html = html.replace(/style="[^"]*transform:\s*translate[^"]*"/g, '');
  
  // Fix encoding issues
  html = html
    .replace(/Ã¤/g, 'ä')
    .replace(/Ã¶/g, 'ö')
    .replace(/Ã¼/g, 'ü')
    .replace(/ÃŸ/g, 'ß');

  return html;
}

// Handle SIGTERM gracefully
process.on('SIGTERM', () => {
  console.log('\nReceived SIGTERM, cleaning up...');
  process.exit(0);
});

// CORRECTED Routes based on actual App.tsx - only pages with SEO implementation
const routes = [
  // Homepage
  { path: '/', waitForSelector: 'h1' },

  // Main compliance pages (all have SEO)
  { path: '/dsgvo', waitForSelector: 'h1' }, // DsgvoCompliance
  { path: '/eu-ai-act', waitForSelector: 'h1' }, // EuAiActCompliance
  { path: '/nis2-compliance', waitForSelector: 'h1' }, // Nis2Compliance
  { path: '/iso-27001-zertifizierung', waitForSelector: 'h1' }, // Iso27001Compliance
  { path: '/soc2-zertifizierung', waitForSelector: 'h1' }, // Soc2Compliance
  { path: '/tisax-compliance', waitForSelector: 'h1' }, // TisaxCompliance
  { path: '/tisax-zertifizierung', waitForSelector: 'h1' }, // TisaxCompliance (alt)
  { path: '/iso-27017-compliance', waitForSelector: 'h1' }, // Iso27017Compliance
  { path: '/iso-27017-zertifizierung', waitForSelector: 'h1' }, // Iso27017Compliance (alt)
  { path: '/iso-27018-compliance', waitForSelector: 'h1' }, // Iso27018Compliance
  { path: '/iso-27018-zertifizierung', waitForSelector: 'h1' }, // Iso27018Compliance (alt)
  { path: '/geldwaeschegesetz', waitForSelector: 'h1' }, // GeldwaeschegesetzCompliance
  { path: '/hinweisgeberschutzgesetz', waitForSelector: 'h1' }, // HinweisgeberschutzCompliance
  { path: '/kdg', waitForSelector: 'h1' }, // KdgCompliance
  { path: '/dsg-ekd', waitForSelector: 'h1' }, // DsgEkdCompliance
  
  // Assessment & Tools (have SEO)
  { path: '/tools', waitForSelector: 'h1' }, // Tools
  { path: '/assessment-center', waitForSelector: 'h1' }, // AssessmentCenter
  { path: '/tools/compliance-ai-assistant', waitForSelector: 'h1' }, // ComplianceAIAssistant
  { path: '/tools/cookie-management', waitForSelector: 'h1' }, // CookieManagementTool
  { path: '/tools/dsgvo-compliance-scorecard', waitForSelector: 'h1' }, // DsgvoComplianceScorecard
  { path: '/tools/dsgvo-email-template-generator', waitForSelector: 'h1' }, // DsgvoEmailTemplateGenerator
  
  // Assessment tools (have SEO)
  { path: '/assessment-center/ai-governance-check', waitForSelector: 'h1' }, // AIGovernanceCheck
  { path: '/assessment-center/ai-risk-assessment', waitForSelector: 'h1' }, // AIRiskAssessment
  { path: '/assessment-center/algorithmic-impact-assessment', waitForSelector: 'h1' }, // AlgorithmicImpactAssessment
  { path: '/assessment-center/dsgvo-compliance-checklist', waitForSelector: 'h1' }, // DSGVOComplianceChecklist
  { path: '/assessment-center/isms-maturity-assessment', waitForSelector: 'h1' }, // ISMSMaturityAssessment
  { path: '/assessment-center/soc2-readiness-assessment', waitForSelector: 'h1' }, // SOC2ReadinessAssessment
  { path: '/assessment-center/breach-response-checklist', waitForSelector: 'h1' }, // BreachResponseChecklist
  { path: '/assessment-center/cookie-compliance-audit', waitForSelector: 'h1' }, // CookieComplianceAudit
  { path: '/assessment-center/datenschutz-readiness-assessment', waitForSelector: 'h1' }, // DataPrivacyReadinessAssessment
  { path: '/assessment-center/vendor-assessment-template', waitForSelector: 'h1' }, // VendorAssessmentTemplate
  
  // Legal cases (have SEO)
  { path: '/wissen/rechtsprechung/schrems-ii', waitForSelector: 'h1' }, // SchremsIICase
  { path: '/wissen/rechtsprechung/amazon-luxemburg-2021', waitForSelector: 'h1' }, // AmazonLuxembourgCase
  { path: '/wissen/rechtsprechung/facebook-fanpage', waitForSelector: 'h1' }, // FacebookFanpageCase
  { path: '/wissen/rechtsprechung/google-analytics-austria', waitForSelector: 'h1' }, // GoogleAnalyticsAustriaCase
  { path: '/wissen/rechtsprechung/google-fonts-muenchen', waitForSelector: 'h1' }, // GoogleFontsMunichCase
  { path: '/wissen/rechtsprechung/meta-irland-2024', waitForSelector: 'h1' }, // MetaIrlandCase
  { path: '/wissen/rechtsprechung/whatsapp-irland-2021', waitForSelector: 'h1' }, // WhatsAppIrelandCase
  
  // Industry pages (have SEO)
  { path: '/branchen', waitForSelector: 'h1' }, // Industries
  { path: '/branchen/automotive', waitForSelector: 'h1' }, // Automotive
  { path: '/branchen/e-commerce', waitForSelector: 'h1' }, // ECommerce
  { path: '/branchen/energie', waitForSelector: 'h1' }, // Energy
  { path: '/branchen/finanzdienstleister', waitForSelector: 'h1' }, // FinancialServices
  { path: '/branchen/gesundheitswesen', waitForSelector: 'h1' }, // Healthcare
  { path: '/branchen/lebensmittel', waitForSelector: 'h1' }, // Food
  { path: '/branchen/logistik', waitForSelector: 'h1' }, // Logistics
  { path: '/branchen/produktion', waitForSelector: 'h1' }, // Manufacturing
  { path: '/branchen/saas-unternehmen', waitForSelector: 'h1' }, // SaaS
  
  // Industry knowledge pages (have SEO)
  { path: '/wissen/branchen/gesundheitswesen-dsgvo', waitForSelector: 'h1' }, // HealthcareDsgvoGuide
  { path: '/wissen/branchen/healthcare-ai-compliance', waitForSelector: 'h1' }, // HealthcareAiComplianceGuide
  { path: '/wissen/branchen/insurtech-compliance', waitForSelector: 'h1' }, // InsurtechComplianceGuide
  { path: '/wissen/branchen/proptech-compliance', waitForSelector: 'h1' }, // PropTechCompliance
  { path: '/wissen/branchen/travel-compliance', waitForSelector: 'h1' }, // TravelComplianceGuide
  { path: '/wissen/branchen/edtech-privacy', waitForSelector: 'h1' }, // EdtechPrivacyGuide
  
  // Guide pages that HAVE SEO (we added recently)
  { path: '/wissen/dsgvo/grundlagen', waitForSelector: 'h1' }, // DsgvoBasicsGuide - SEO added
  { path: '/compliance/iso-27001', waitForSelector: 'h1' }, // Iso27001Guide - SEO added
  { path: '/wissen/leitfaden/betroffenenrechte', waitForSelector: 'h1' }, // BetroffenenrechteGuide
  { path: '/wissen/leitfaden/dsfa-durchfuehrung', waitForSelector: 'h1' }, // DsfaDurchfuehrungGuide
  { path: '/wissen/leitfaden/dsgvo-30-tage', waitForSelector: 'h1' }, // Dsgvo30TageGuide
  { path: '/wissen/leitfaden/dsgvo-grundlagen', waitForSelector: 'h1' }, // DsgvoBasicsGuide
  { path: '/wissen/leitfaden/tom-massnahmen', waitForSelector: 'h1' }, // TomMassnahmenGuide
  { path: '/wissen/leitfaden/verarbeitungsverzeichnis', waitForSelector: 'h1' }, // VerarbeitungsverzeichnisGuide
  { path: '/wissen/leitfaden/data-breach-notfall', waitForSelector: 'h1' }, // DataBreachNotfallGuide
  { path: '/wissen/leitfaden/website-dsgvo', waitForSelector: 'h1' }, // WebsiteDsgvoGuide
  
  // Knowledge base pages that HAVE SEO
  { path: '/wissen', waitForSelector: 'h1' }, // Knowledge index
  { path: '/wissen/dsgvo', waitForSelector: 'h1' }, // DSGVO knowledge
  { path: '/wissen/compliance-frameworks', waitForSelector: 'h1' }, // ComplianceFrameworks
  { path: '/wissen/ki-compliance', waitForSelector: 'h1' }, // KI Compliance
  { path: '/wissen/cybersecurity', waitForSelector: 'h1' }, // Cybersecurity
  { path: '/wissen/risk-management', waitForSelector: 'h1' }, // RiskManagement
  { path: '/wissen/dsgvo-leitfaeden', waitForSelector: 'h1' }, // DSGVO Guides
  
  // Other important pages
  { path: '/academy', waitForSelector: 'h1' }, // AcademyPage
  { path: '/pricing', waitForSelector: 'h1' }, // PricingPage
  { path: '/contact', waitForSelector: 'h1' }, // ContactPage
  { path: '/dashboard', waitForSelector: 'h1' }, // DashboardPage
  { path: '/thank-you', waitForSelector: 'h1' } // ThankYou
];

// Start preview server
console.log('🚀 Starting preview server...');
const previewProcess = spawn('npm', ['run', 'preview'], {
  stdio: 'pipe',
  shell: true
});

// Wait for server to start
await new Promise(resolve => setTimeout(resolve, 5000));

// Function to prerender a single route
async function prerenderRoute(route) {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set German locale
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'language', {
        get: function() { return 'de-DE'; }
      });
      Object.defineProperty(navigator, 'languages', {
        get: function() { return ['de-DE', 'de']; }
      });
    });
    
    // Set viewport for consistent rendering
    await page.setViewport({ width: 1920, height: 1080 });
    
    console.log(`📄 Prerendering: ${route.path}`);
    
    // Navigate to the route
    await page.goto(`http://localhost:4173${route.path}`, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });
    
    // Wait for content to load
    if (route.waitForSelector) {
      await page.waitForSelector(route.waitForSelector, { timeout: 10000 });
    }
    
    // Wait for React app to fully hydrate
    await page.waitForFunction(() => {
      // Check if React root is mounted
      const root = document.getElementById('root');
      return root && root.children.length > 0;
    }, { timeout: 10000 });
    
    // Wait for React Helmet to update meta tags
    console.log('   Waiting for meta tags to update...');
    
    // Give React Helmet plenty of time to update all tags
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 5000)));
    
    // Wait for all React Helmet tags to be present
    try {
      await page.waitForFunction(() => {
        // Check for essential SEO tags
        const hasDescription = document.querySelector('meta[name="description"][data-rh="true"]');
        const hasOgTitle = document.querySelector('meta[property="og:title"][data-rh="true"]');
        const hasOgDescription = document.querySelector('meta[property="og:description"][data-rh="true"]');
        const hasCanonical = document.querySelector('link[rel="canonical"][data-rh="true"]');
        const hasTitle = document.title && document.title !== 'Marsstein';
        
        return hasDescription && hasOgTitle && hasOgDescription && hasCanonical && hasTitle;
      }, { timeout: 10000 });
      
    } catch (e) {
      console.warn(`⚠️  Some SEO tags may be missing for ${route.path}`);
    }
    
    // Additional wait to ensure all updates are complete
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000)));
    
    // Get the fully rendered HTML
    let html = await page.content();
    
    // Debug: Check if meta tags are captured
    const title = await page.title();
    const metaDescription = await page.$eval('meta[name="description"]', el => el.content).catch(() => 'No description found');
    const ogTitle = await page.$eval('meta[property="og:title"]', el => el.content).catch(() => 'No og:title found');
    const canonicalUrl = await page.$eval('link[rel="canonical"]', el => el.href).catch(() => 'No canonical found');
    
    console.log(`   Title: ${title}`);
    console.log(`   Description: ${metaDescription}`);
    console.log(`   OG Title: ${ogTitle}`);
    console.log(`   Canonical: ${canonicalUrl}`);
    
    // Optimize HTML first
    html = optimizeHtml(html, route.path);
    
    // Then format HTML for better readability with Prettier
    html = await formatHTML(html);
    
    // Create directory structure
    const outputPath = join(__dirname, '..', 'dist', route.path.slice(1));
    mkdirSync(outputPath, { recursive: true });
    
    // Write the HTML file with proper UTF-8 encoding
    writeFileSync(join(outputPath, 'index.html'), html, { encoding: 'utf8' });
    
    console.log(`✅ Prerendered: ${route.path}`);
    
  } catch (error) {
    console.error(`❌ Failed to prerender ${route.path}:`, error.message);
  } finally {
    await browser.close();
  }
}

// Prerender all routes
console.log('🎯 Starting prerendering process...\n');
console.log(`📊 Total routes to prerender: ${routes.length}\n`);

for (const route of routes) {
  await prerenderRoute(route);
}

// Kill the preview server
previewProcess.kill('SIGTERM');

// Force kill after a short delay to ensure cleanup
setTimeout(() => {
  process.exit(0);
}, 1000);

console.log(`\n✨ Prerendered ${routes.length} routes successfully!`);
console.log('📦 Build complete with full HTML content for SEO.');