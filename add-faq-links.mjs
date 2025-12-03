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

console.log('Adding FAQ contextual links to all city pages...\n');

cityData.forEach((city) => {
  const componentName = `ExternerDatenschutzbeauftragter${cityNameToPascal(city.cityName)}`;
  const filePath = path.join(__dirname, 'src', 'pages', `${componentName}.tsx`);

  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${componentName}.tsx - Skipping`);
    return;
  }

  let content = fs.readFileSync(filePath, 'utf8');

  // Check if FAQ 6 link already exists (most reliable check)
  if (content.match(/Ja, wir kennen die Besonderheiten der\{' '\}\s*<Link to="\/dsgvo"/)) {
    console.log(`✓ ${city.cityName} - FAQ links already complete, skipping`);
    return;
  }

  // Pattern 1: FAQ 1 - Add cost comparison link
  const faq1QuestionPattern = `"Warum einen externen Datenschutzbeauftragten in ${city.cityName}?"`;
  const faq1AnswerOld = `"Als ${city.cityName}er Unternehmen profitieren Sie von regionaler Nähe bei gleichzeitig niedrigeren Kosten (ab 29€/Monat) im Vergleich zu einem internen DSB. Wir kennen die lokalen Gegebenheiten und typischen Branchen in ${city.cityName}."`;

  const faq1AnswerNew = `(<>
        Als ${city.cityName}er Unternehmen profitieren Sie von regionaler Nähe bei gleichzeitig{' '}
        <Link to="/wissen/kosten/externer-datenschutzbeauftragter-kosten" className="text-[#e24e1b] hover:underline">
          niedrigeren Kosten
        </Link>
        {' '}(ab 29€/Monat) im Vergleich zu einem internen DSB. Wir kennen die lokalen Gegebenheiten und typischen Branchen in ${city.cityName}.
      </>)`;

  // Pattern 2: FAQ 4 - Add pricing link
  const faq4QuestionPattern = `"Was kostet ein externer DSB in ${city.cityName}?"`;
  const faq4AnswerOld = `"Ab 29€/Monat für kleine Unternehmen (bis 20 MA), 95€/Monat für mittlere Unternehmen (bis 50 MA). Alle Leistungen inklusive - keine regionalen Aufschläge für ${city.cityName}."`;

  const faq4AnswerNew = `(<>
        Ab 29€/Monat für kleine Unternehmen (bis 20 MA), 95€/Monat für mittlere Unternehmen (bis 50 MA). Alle Leistungen inklusive - keine regionalen Aufschläge für ${city.cityName}.{' '}
        <Link to="/preise" className="text-[#e24e1b] hover:underline">
          Alle Pakete im Überblick
        </Link>.
      </>)`;

  // Pattern 3: FAQ 6 - Add DSGVO compliance link (flexible pattern for all state authorities including hyphens)
  const faq6AnswerPattern = /("Ja, wir kennen die Besonderheiten der ([A-Za-z\s\-]+) und haben bereits zahlreiche Unternehmen in der Region [^"]+ erfolgreich DSGVO-konform aufgestellt\.")/;

  const faq6Match = content.match(faq6AnswerPattern);
  let stateAuthority = '';
  if (faq6Match) {
    stateAuthority = faq6Match[2]; // e.g., "BayLDA", "LfD Niedersachsen", etc.
  }

  let modified = false;

  // Apply FAQ 1 changes
  if (content.includes(faq1AnswerOld)) {
    content = content.replace(faq1AnswerOld, faq1AnswerNew);
    modified = true;
  }

  // Apply FAQ 4 changes
  if (content.includes(faq4AnswerOld)) {
    content = content.replace(faq4AnswerOld, faq4AnswerNew);
    modified = true;
  }

  // Apply FAQ 6 changes
  if (stateAuthority && faq6Match) {
    const faq6AnswerOld = faq6Match[1];
    const faq6AnswerNew = `(<>
        Ja, wir kennen die Besonderheiten der{' '}
        <Link to="/dsgvo" className="text-[#e24e1b] hover:underline">
          ${stateAuthority}
        </Link>
        {' '}und haben bereits zahlreiche Unternehmen in der Region ${city.cityName} erfolgreich DSGVO-konform aufgestellt.
      </>)`;

    content = content.replace(faq6AnswerOld, faq6AnswerNew);
    modified = true;
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ ${city.cityName} - Added FAQ contextual links`);
  } else {
    console.log(`⚠️  ${city.cityName} - No FAQ patterns matched, skipping`);
  }
});

console.log('\n✅ All city pages processed for FAQ links!');
