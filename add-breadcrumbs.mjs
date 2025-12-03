import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cityData = JSON.parse(fs.readFileSync(path.join(__dirname, 'city-data.json'), 'utf8'));

function cityNameToPascal(cityName) {
  return cityName
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/\s+/g, '')
    .replace(/-/g, '');
}

const breadcrumbSection = (cityName, citySlug) => {
  return `
      {/* Breadcrumb Navigation */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm">
            <Link
              to="/"
              className="text-gray-600 hover:text-[#e24e1b] transition-colors"
            >
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link
              to="/externer-datenschutzbeauftragter"
              className="text-gray-600 hover:text-[#e24e1b] transition-colors"
            >
              Externer Datenschutzbeauftragter
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-semibold">${cityName}</span>
          </nav>
        </div>
      </section>
`;
};

const breadcrumbSchema = (cityName, citySlug) => {
  return `      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://marsstein.ai/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Externer Datenschutzbeauftragter",
            "item": "https://marsstein.ai/externer-datenschutzbeauftragter"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "${cityName}",
            "item": "https://marsstein.ai/externer-datenschutzbeauftragter-${citySlug}"
          }
        ]
      }`;
};

console.log('Adding breadcrumb navigation to all city pages...\n');

cityData.forEach((city) => {
  const componentName = `ExternerDatenschutzbeauftragter${cityNameToPascal(city.cityName)}`;
  const filePath = path.join(__dirname, 'src', 'pages', `${componentName}.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${componentName}.tsx - Skipping`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if breadcrumb already exists
  if (content.includes('Breadcrumb Navigation')) {
    console.log(`✓ ${city.cityName} - Breadcrumb already exists, skipping`);
    return;
  }

  // 1. Add breadcrumb HTML after <Header /> and before first <section>
  const headerMarker = '<Header />';
  const firstSectionMarker = '\n\n      <section className="relative py-32';

  if (!content.includes(headerMarker)) {
    console.log(`⚠️  ${city.cityName} - Could not find Header marker, skipping`);
    return;
  }

  const breadcrumbHtml = breadcrumbSection(city.cityName, city.citySlug);
  content = content.replace(
    headerMarker + firstSectionMarker,
    headerMarker + breadcrumbHtml + firstSectionMarker
  );

  // 2. Add BreadcrumbList schema to structured data @graph array
  // Find the closing of the @graph array (before the last closing bracket of FAQPage)
  const graphEndMarker = '    ]\n  };';

  if (!content.includes(graphEndMarker)) {
    console.log(`⚠️  ${city.cityName} - Could not find @graph end marker, skipping schema`);
    return;
  }

  const breadcrumbSchemaCode = ',\n' + breadcrumbSchema(city.cityName, city.citySlug);
  content = content.replace(
    graphEndMarker,
    breadcrumbSchemaCode + '\n    ]\n  };'
  );

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Added breadcrumb to: ${city.cityName}`);
});

console.log('\n✅ All city pages updated with breadcrumb navigation!');
