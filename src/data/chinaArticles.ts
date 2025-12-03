import {
  ShoppingCart,
  MessageSquare,
  Users,
  Scale,
  TrendingUp,
  Briefcase,
  FileText,
  Globe,
  Building2,
  Cpu
} from 'lucide-react';

export interface ChinaArticle {
  id: string;
  title: string;
  shortTitle: string;
  description: string;
  link: string;
  icon: any;
  category: string;
  readTime: string;
}

export const chinaArticles: ChinaArticle[] = [
  {
    id: 'amazon-sellers',
    title: 'Amazon Sellers & DSGVO China',
    shortTitle: 'Amazon Sellers',
    description: 'Compliance-Pflichten für Amazon-Händler mit China-Lieferanten',
    link: '/dsgvo-amazon-sellers-china',
    icon: ShoppingCart,
    category: 'E-Commerce',
    readTime: '8 Min'
  },
  {
    id: 'tiktok-shop',
    title: 'TikTok Shop & DSGVO',
    shortTitle: 'TikTok Shop',
    description: 'Datenschutz-Anforderungen für TikTok Shop Seller',
    link: '/dsgvo-tiktok-shop-china',
    icon: ShoppingCart,
    category: 'E-Commerce',
    readTime: '7 Min'
  },
  {
    id: 'b2b-hersteller',
    title: 'B2B Hersteller & DSGVO',
    shortTitle: 'B2B Hersteller',
    description: 'DSGVO-Compliance für B2B-Unternehmen mit chinesischen Herstellern',
    link: '/dsgvo-b2b-hersteller-china',
    icon: Building2,
    category: 'Business',
    readTime: '10 Min'
  },
  {
    id: 'wechat-alipay',
    title: 'WeChat & Alipay Datenschutz',
    shortTitle: 'WeChat & Alipay',
    description: 'DSGVO-konforme Nutzung von WeChat und Alipay',
    link: '/dsgvo-wechat-alipay-china',
    icon: MessageSquare,
    category: 'Social Media',
    readTime: '9 Min'
  },
  {
    id: 'douyin',
    title: 'Douyin & Datenschutz',
    shortTitle: 'Douyin',
    description: 'DSGVO-Aspekte bei der Nutzung von Douyin für Marketing',
    link: '/dsgvo-douyin-china',
    icon: MessageSquare,
    category: 'Social Media',
    readTime: '7 Min'
  },
  {
    id: 'deepseek',
    title: 'DeepSeek AI & DSGVO',
    shortTitle: 'DeepSeek AI',
    description: 'Datenschutz-Compliance bei der Nutzung chinesischer KI-Tools',
    link: '/deepseek-dsgvo',
    icon: Cpu,
    category: 'KI & Tech',
    readTime: '12 Min'
  },
  {
    id: 'eu-vertreter',
    title: 'EU-Vertreter für China-Unternehmen',
    shortTitle: 'EU-Vertreter',
    description: 'Anforderungen nach Art. 27 DSGVO',
    link: '/eu-vertreter-china',
    icon: Users,
    category: 'Rechtliches',
    readTime: '10 Min'
  },
  {
    id: 'artikel-15',
    title: 'Artikel 15 DSGVO Auskunftsrecht',
    shortTitle: 'Art. 15 Auskunftsrecht',
    description: 'Umsetzung des Auskunftsrechts bei China-Datenflüssen',
    link: '/artikel-15-dsgvo-auskunftsrecht-china',
    icon: FileText,
    category: 'Rechtliches',
    readTime: '11 Min'
  },
  {
    id: 'scc',
    title: 'China SCC vs. EU SCC',
    shortTitle: 'SCC Vergleich',
    description: 'Vergleich der chinesischen und europäischen Standardvertragsklauseln',
    link: '/china-scc-vs-eu-scc',
    icon: Scale,
    category: 'Rechtliches',
    readTime: '15 Min'
  },
  {
    id: 'pipl-gdpr',
    title: 'PIPL vs. GDPR Vergleich',
    shortTitle: 'PIPL vs. GDPR',
    description: 'Unterschiede zwischen chinesischem PIPL und EU-DSGVO',
    link: '/pipl-gdpr-china',
    icon: Globe,
    category: 'Rechtliches',
    readTime: '14 Min'
  },
  {
    id: 'joint-venture',
    title: 'Joint Ventures & Datenschutz',
    shortTitle: 'Joint Ventures',
    description: 'DSGVO-Compliance bei deutsch-chinesischen Joint Ventures',
    link: '/joint-venture-china-datenschutz',
    icon: Briefcase,
    category: 'Business',
    readTime: '13 Min'
  },
  {
    id: 'investitionen',
    title: 'China Investitionen & DSGVO',
    shortTitle: 'Investitionen',
    description: 'Datenschutz-Screening bei Investitionen',
    link: '/china-investitionen-dsgvo-screening',
    icon: TrendingUp,
    category: 'Business',
    readTime: '12 Min'
  }
];

export const getRelatedArticles = (currentArticleId: string, count: number = 3): ChinaArticle[] => {
  return chinaArticles
    .filter(article => article.id !== currentArticleId)
    .slice(0, count);
};
