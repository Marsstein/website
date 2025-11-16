export interface Expert {
  name: string;
  company?: string;
  bio: string;

  slug: string;
  avatar: string;

  dsbSince: number;
  aiQualified: boolean;

  qualifications: string[];
  additionalEducation?: string;

  industries: string[];

  location: string;
  phone?: string;
  email: string;
  website?: string;
  languages: string[];

  availability?: string;
}

export const experts: Expert[] = [
  {
    name: 'Dr. Sarah Weber',
    company: 'Weber Datenschutz',
    bio: 'Weber Datenschutz berät Krankenhäuser, MedTech-Startups und Pharmaunternehmen in allen Bereichen des Datenschutzrechts inkl. Bestellung als DSB. Die Spezialisierung auf Healthcare und die umfassende medizinische Ausbildung garantieren die bestmögliche Unterstützung bei medizinischen Digitalisierungsthemen.',
    slug: 'sarah-weber',
    avatar: '👩‍⚕️',

    dsbSince: 2013,
    aiQualified: true,

    qualifications: ['CIPP/E', 'GDD-zertifiziert', 'ISO 27001 Lead Auditor'],
    additionalEducation: 'Dr. med., Master IT-Recht & Datenschutz',

    industries: ['Healthcare', 'MedTech', 'Pharma'],

    location: 'Hamburg',
    phone: '+49 40 1234567',
    email: 'sarah.weber@marsstein.com',
    website: 'https://weber-datenschutz.de',
    languages: ['DE', 'EN'],

    availability: 'Sofort verfügbar'
  },

  {
    name: 'Maximilian Schmidt',
    company: 'Schmidt Datenschutz & Compliance',
    bio: 'Schmidt Datenschutz berät FinTech-Startups und etablierte Banken in allen Bereichen des Datenschutzrechts inkl. Bestellung als DSB. Die Spezialisierung auf Finanzdienstleister und BaFin-Anforderungen garantiert die bestmögliche Unterstützung bei Payment-Systemen und Open Banking.',
    slug: 'maximilian-schmidt',
    avatar: '👨‍💼',

    dsbSince: 2015,
    aiQualified: false,

    qualifications: ['CIPP/E', 'CIPM', 'BaFin-zertifiziert', 'ISO 27001 Lead Auditor'],
    additionalEducation: 'Master Banking & Finance, Certified Compliance Officer',

    industries: ['FinTech', 'Banking', 'Insurance', 'Payment'],

    location: 'Frankfurt am Main',
    phone: '+49 69 9876543',
    email: 'maximilian.schmidt@marsstein.com',
    languages: ['DE', 'EN', 'FR'],

    availability: 'Ab Q2 2025'
  },

  {
    name: 'Laura Hoffmann',
    company: 'Hoffmann E-Commerce Datenschutz',
    bio: 'Hoffmann E-Commerce Datenschutz berät Online-Shops und Marketplace-Anbieter in allen Bereichen des Datenschutzrechts inkl. Bestellung als DSB. Die Spezialisierung auf Digital Marketing und Cookie-Management garantiert die bestmögliche Unterstützung bei datenschutzkonformem Tracking.',
    slug: 'laura-hoffmann',
    avatar: '👩‍💻',

    dsbSince: 2017,
    aiQualified: true,

    qualifications: ['CIPP/E', 'GDD-zertifiziert', 'Google Analytics Certified'],
    additionalEducation: 'Master E-Commerce, Marketing Automation Specialist',

    industries: ['E-Commerce', 'Retail', 'Marketing'],

    location: 'München',
    email: 'laura.hoffmann@marsstein.com',
    website: 'https://hoffmann-datenschutz.de',
    languages: ['DE', 'EN'],

    availability: 'Sofort verfügbar'
  },

  {
    name: 'Thomas Becker',
    company: 'Becker Cloud & SaaS Compliance',
    bio: 'Becker Cloud Compliance berät SaaS-Anbieter und Cloud-Plattformen in allen Bereichen des Datenschutzrechts inkl. Bestellung als DSB. Die technische Expertise und Erfahrung mit AWS, Azure und GCP garantiert die bestmögliche Unterstützung bei Cloud-nativen Architekturen.',
    slug: 'thomas-becker',
    avatar: '👨‍💻',

    dsbSince: 2014,
    aiQualified: true,

    qualifications: ['CIPP/E', 'CIPT', 'AWS Security Specialty', 'ISO 27001 Lead Auditor'],
    additionalEducation: 'M.Sc. Computer Science, SOC 2 Auditor',

    industries: ['SaaS', 'Cloud', 'Software', 'Tech'],

    location: 'Berlin',
    phone: '+49 30 5555666',
    email: 'thomas.becker@marsstein.com',
    languages: ['DE', 'EN'],

    availability: 'Sofort verfügbar'
  },

  {
    name: 'Prof. Dr. Anna Müller',
    company: 'Müller Industrie 4.0 Datenschutz',
    bio: 'Müller Industrie Datenschutz berät Produktionsunternehmen und Automotive-Zulieferer in allen Bereichen des Datenschutzrechts inkl. Bestellung als DSB. Die akademische Expertise und TISAX-Zertifizierung garantiert die bestmögliche Unterstützung bei IoT und vernetzten Produktionsanlagen.',
    slug: 'anna-mueller',
    avatar: '👩‍🏫',

    dsbSince: 2010,
    aiQualified: false,

    qualifications: ['CIPP/E', 'ISO 27001 Lead Auditor', 'IEC 62443 Expert', 'TISAX Assessor'],
    additionalEducation: 'Prof. Dr.-Ing., Habilitation IT-Sicherheit',

    industries: ['Manufacturing', 'Automotive', 'IoT', 'Industrie 4.0'],

    location: 'Stuttgart',
    email: 'anna.mueller@marsstein.com',
    languages: ['DE', 'EN', 'IT'],

    availability: 'Ab März 2025'
  },

  {
    name: 'Dr. Johannes Lehmann',
    company: 'Kanzlei Lehmann - IT-Recht & Datenschutz',
    bio: 'Kanzlei Lehmann berät Unternehmen in allen Bereichen des Datenschutzrechts inkl. Bestellung als DSB. Die juristische Expertise als Fachanwalt für IT-Recht und Erfahrung in der Vertretung vor Aufsichtsbehörden garantiert die bestmögliche Unterstützung bei rechtlich komplexen Fragestellungen und Bußgeldverfahren.',
    slug: 'johannes-lehmann',
    avatar: '⚖️',

    dsbSince: 2011,
    aiQualified: false,

    qualifications: ['Rechtsanwalt', 'Fachanwalt IT-Recht', 'CIPP/E', 'GDD-zertifiziert'],
    additionalEducation: 'Dr. jur., LL.M. IT-Recht & Datenschutz',

    industries: ['Legal', 'LegalTech', 'Consulting'],

    location: 'Köln',
    phone: '+49 221 7777888',
    email: 'johannes.lehmann@marsstein.com',
    website: 'https://kanzlei-lehmann.de',
    languages: ['DE', 'EN'],

    availability: 'Begrenzte Kapazität'
  }
];

export const getExpertBySlug = (slug: string): Expert | undefined => {
  return experts.find(expert => expert.slug === slug);
};

export const getExpertsByIndustry = (industry: string): Expert[] => {
  if (industry === 'all') return experts;
  return experts.filter(expert =>
    expert.industries.some(ind => ind.toLowerCase().includes(industry.toLowerCase()))
  );
};

export const getExpertsByQualification = (qualification: string): Expert[] => {
  if (qualification === 'all') return experts;
  return experts.filter(expert =>
    expert.qualifications.some(qual => qual.toLowerCase().includes(qualification.toLowerCase()))
  );
};

export const getAIQualifiedExperts = (): Expert[] => {
  return experts.filter(expert => expert.aiQualified);
};
