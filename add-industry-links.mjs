import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cityData = JSON.parse(fs.readFileSync(path.join(__dirname, 'city-data.json'), 'utf8'));

// Industry name to URL mapping
const industryLinks = {
  "Gesundheitswesen": "/branchen/gesundheitswesen",
  "Finanzdienstleister": "/branchen/finanzdienstleister",
  "Versicherungen": "/branchen/finanzdienstleister",
  "Handel & E-Commerce": "/branchen/e-commerce",
  "IT-Dienstleister": "/branchen/saas-unternehmen",
  "IT & Software": "/branchen/saas-unternehmen",
  "IT & Technologie": "/branchen/saas-unternehmen",
  "IT & Start-ups": "/branchen/saas-unternehmen",
  "IT & Telekommunikation": "/branchen/saas-unternehmen",
  "IT & Fintech": "/branchen/saas-unternehmen",
  "Produktionsbetriebe": "/branchen/produktion",
  "Maschinenbau": "/branchen/produktion",
  "Industrieproduktion": "/branchen/produktion",
  "Automotive": "/branchen/automotive",
  "Windenergie & Technik": "/branchen/energie",
  "Energiewirtschaft": "/branchen/energie",
  "Erneuerbare Energien": "/branchen/energie",
  "Energie & Umwelt": "/branchen/energie",
  "Logistik & Transport": "/branchen/logistik",
  "Hafen & Logistik": "/branchen/logistik",
  "Pharma & Biotechnologie": "/wissen/branchen/pharma-compliance",
  "Chemie & Pharma": "/wissen/branchen/pharma-compliance",
};

function cityNameToPascal(cityName) {
  return cityName
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/\s+/g, '')
    .replace(/-/g, '');
}

// Create industry URL mapping object as string for injection
const industryUrlMapString = Object.entries(industryLinks)
  .map(([key, value]) => `'${key}': '${value}'`)
  .join(',\n                    ');

console.log('Adding industry links to all city pages...\n');

cityData.forEach((city) => {
  const componentName = `ExternerDatenschutzbeauftragter${cityNameToPascal(city.cityName)}`;
  const filePath = path.join(__dirname, 'src', 'pages', `${componentName}.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${componentName}.tsx - Skipping`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if industry links already exist
  if (content.includes('industryUrlMap')) {
    console.log(`✓ ${city.cityName} - Industry links already exist, skipping`);
    return;
  }

  // Pattern to find and replace: the entire Card rendering in the .map()
  const oldCardPattern = `                <Card className="h-full border-2 border-gray-200 hover:border-[#e24e1b]/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-xl p-3 w-fit mb-4">
                      <branch.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-[#232323] mb-2">
                      {branch.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {branch.desc}
                    </p>
                  </CardContent>
                </Card>`;

  const newCardPattern = `                {(() => {
                  const industryUrlMap: Record<string, string> = {
                    ${industryUrlMapString}
                  };
                  const branchUrl = industryUrlMap[branch.title];

                  const cardContent = (
                    <Card className={\`h-full border-2 \${branchUrl ? 'border-[#e24e1b]/30 hover:border-[#e24e1b] cursor-pointer hover:shadow-lg' : 'border-gray-200 hover:border-[#e24e1b]/50'} transition-all duration-300\`}>
                      <CardContent className="p-6">
                        <div className="bg-gradient-to-r from-[#e24e1b] to-[#ea580c] rounded-xl p-3 w-fit mb-4">
                          <branch.icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold text-[#232323] mb-2">
                          {branch.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {branch.desc}
                        </p>
                      </CardContent>
                    </Card>
                  );

                  return branchUrl ? (
                    <Link to={branchUrl} className="block">
                      {cardContent}
                    </Link>
                  ) : cardContent;
                })()}`;

  if (content.includes(oldCardPattern)) {
    content = content.replace(oldCardPattern, newCardPattern);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ ${city.cityName} - Added industry link logic`);
  } else {
    console.log(`⚠️  ${city.cityName} - Card pattern not found, skipping`);
  }
});

console.log('\n✅ All city pages processed for industry links!');
