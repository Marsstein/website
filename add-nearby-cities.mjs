import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cityData = JSON.parse(fs.readFileSync(path.join(__dirname, 'city-data.json'), 'utf8'));

function cityNameToSlug(cityName) {
  return cityName
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

const nearbyCitiesSection = (nearbyCity) => {
  const cities = nearbyCity.split(', ');
  const cityLinks = cities.map(city => {
    const slug = cityNameToSlug(city);
    return `              <Link
                to="/externer-datenschutzbeauftragter-${slug}"
                className="px-6 py-3 bg-white border-2 border-gray-200 rounded-lg hover:border-[#e24e1b] hover:shadow-md transition-all duration-300 font-semibold text-gray-900 hover:text-[#e24e1b]"
              >
                ${city}
              </Link>`;
  }).join('\n');

  return `
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-[#232323] mb-4">
              Auch verfügbar in Ihrer Nähe
            </h3>
            <p className="text-gray-600 mb-8">
              Externer Datenschutzbeauftragter auch in diesen Städten
            </p>
            <div className="flex flex-wrap justify-center gap-4">
${cityLinks}
            </div>
          </motion.div>
        </div>
      </section>
`;
};

console.log('Adding nearby cities sections to all city pages...\n');

cityData.forEach((city) => {
  const componentName = `ExternerDatenschutzbeauftragter${city.cityName.replace(/[äöüß\s-]/g, (match) => {
    const map = { 'ä': 'ae', 'ö': 'oe', 'ü': 'ue', 'ß': 'ss', ' ': '', '-': '' };
    return map[match] || match;
  })}`;

  const filePath = path.join(__dirname, 'src', 'pages', `${componentName}.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${componentName}.tsx - Skipping`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if nearby cities section already exists
  if (content.includes('Auch verfügbar in Ihrer Nähe')) {
    console.log(`✓ ${city.cityName} - Nearby cities section already exists, skipping`);
    return;
  }

  // Find the position right before the final CTA section
  const finalCTAMarker = '<section className="py-20 bg-gradient-to-br from-[#e24e1b] via-[#ea580c] to-[#e24e1b]">';

  if (!content.includes(finalCTAMarker)) {
    console.log(`⚠️  ${city.cityName} - Could not find final CTA marker, skipping`);
    return;
  }

  // Insert the nearby cities section before the final CTA
  const nearbyCitiesCode = nearbyCitiesSection(city.nearbyCity);
  content = content.replace(finalCTAMarker, nearbyCitiesCode + '\n      ' + finalCTAMarker);

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`✓ Added nearby cities to: ${city.cityName}`);
});

console.log('\n✅ All city pages updated with nearby cities sections!');
