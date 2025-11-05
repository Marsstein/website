import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Only fix these specific cities
const citiesToFix = ['Dresden', 'Karlsruhe', 'Ulm', 'Heidelberg', 'Leipzig', 'Mannheim'];

function cityNameToPascal(cityName) {
  return cityName
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/\s+/g, '')
    .replace(/-/g, '');
}

console.log('Fixing FAQ 6 links for remaining cities...\n');

citiesToFix.forEach((cityName) => {
  const componentName = `ExternerDatenschutzbeauftragter${cityNameToPascal(cityName)}`;
  const filePath = path.join(__dirname, 'src', 'pages', `${componentName}.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${componentName}.tsx - Skipping`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if FAQ 6 link already exists
  if (content.match(/Ja, wir kennen die Besonderheiten der\{' '\}\s*<Link to="\/dsgvo"/)) {
    console.log(`✓ ${cityName} - FAQ 6 link already exists, skipping`);
    return;
  }

  // More flexible pattern - matches any state authority name
  const faq6AnswerPattern = /("Ja, wir kennen die Besonderheiten der ([A-Za-z\s\-äöüÄÖÜ]+) und haben bereits zahlreiche Unternehmen in der Region [^"]+ erfolgreich DSGVO-konform aufgestellt\.")/;

  const faq6Match = content.match(faq6AnswerPattern);

  if (faq6Match) {
    const stateAuthority = faq6Match[2].trim();
    const faq6AnswerOld = faq6Match[1];
    const faq6AnswerNew = `(<>
        Ja, wir kennen die Besonderheiten der{' '}
        <Link to="/dsgvo" className="text-[#e24e1b] hover:underline">
          ${stateAuthority}
        </Link>
        {' '}und haben bereits zahlreiche Unternehmen in der Region ${cityName} erfolgreich DSGVO-konform aufgestellt.
      </>)`;

    content = content.replace(faq6AnswerOld, faq6AnswerNew);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ ${cityName} - Added FAQ 6 link (${stateAuthority})`);
  } else {
    console.log(`⚠️  ${cityName} - FAQ 6 pattern not found`);
  }
});

console.log('\n✅ FAQ 6 fix complete!');
