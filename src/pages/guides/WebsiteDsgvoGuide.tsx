import React, { useState, useEffect, useRef } from 'react';
import SEOHead from '@/components/SEOHead';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft,
  Clock,
  Star,
  Download,
  BookOpen,
  Target,
  AlertTriangle,
  Lightbulb,
  FileText,
  Users,
  Scale,
  Lock,
  Eye,
  Gavel,
  Euro,
  Calendar,
  ChevronRight,
  ChevronLeft,
  Share2,
  Bookmark,
  Printer,
  ExternalLink,
  Play,
  Pause,
  RotateCcw,
  CheckCircle,
  AlertCircle,
  Info,
  HelpCircle,
  Zap,
  Brain,
  Award,
  TrendingUp,
  Circle,
  Globe,
  Settings,
  Code,
  MonitorSpeaker,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  Database,
  Wifi,
  MousePointer,
  Monitor,
  Cookie,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  RefreshCw,
  Search,
  Filter,
  SortAsc,
  Grid,
  List,
  Plus,
  Minus,
  X,
  Check,
  Edit3,
  Copy,
  Save,
  Trash2,
  FolderOpen,
  File,
  Image,
  Video,
  Music,
  Download as DownloadIcon,
  Upload,
  Link as LinkIcon,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Bell,
  Notifications,
  UserCheck,
  ShieldCheck,
  BadgeCheck,
  Verified,
  CreditCard,
  ShoppingCart,
  Package,
  Truck,
  MapPin,
  Building,
  Home,
  Office,
  Factory,
  Store,
  Briefcase,
  GraduationCap,
  Heart,
  Smile,
  ThumbsUp,
  Bookmark as BookmarkIcon,
  Flag,
  Tag,
  Hash,
  AtSign,
  Percent,
  DollarSign,
  PoundSterling,
  Yen,
  Bitcoin,
  Zap as ZapIcon,
  Flash,
  Lightning,
  Bolt,
  Flame,
  Snowflake,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  Umbrella,
  Rainbow,
  Sunrise,
  Sunset,
  Mountain,
  Tree,
  Flower,
  Leaf,
  Bug,
  Fish,
  Bird,
  Rabbit,
  Cat,
  Dog,
  Bear,
  Wolf,
  Lion,
  Tiger,
  Elephant,
  Giraffe,
  Penguin,
  Turtle,
  Octopus,
  Crab,
  Snail,
  Butterfly,
  Bee,
  Spider,
  Ant,
  Worm,
  Ladybug,
  Dragonfly,
  Mosquito,
  Fly,
  Beetle,
  Cricket,
  Grasshopper,
  Mantis,
  Moth,
  Caterpillar,
  Cocoon,
  Honeycomb,
  Spiderweb,
  Pawprint,
  Bone,
  Feather
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const WebsiteDsgvoGuide: React.FC = () => {
  // Breadcrumb structured data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://marsstein.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Wissen',
        'item': 'https://marsstein.com/wissen'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Leitfäden',
        'item': 'https://marsstein.com/wissen/leitfaden'
      },
      {
        '@type': 'ListItem',
        'position': 4,
        'name': 'Website DSGVO',
        'item': 'https://marsstein.com/wissen/leitfaden/website-dsgvo'
      }
    ]
  };

  // SEO Meta Data
  const seoData = {
    title: 'Website DSGVO-konform machen - Schritt-für-Schritt Anleitung 2025',
    description: 'Website DSGVO-konform gestalten: Cookie-Banner, Datenschutzerklärung, Analytics rechtssicher umsetzen. ✓ Praxis-Anleitung ✓ Checklisten ✓ Vorlagen',
    canonical: 'https://marsstein.com/wissen/leitfaden/website-dsgvo',
    keywords: 'Website DSGVO, DSGVO Website, Cookie Banner DSGVO, Datenschutzerklärung Website, Website rechtssicher, DSGVO Checkliste Website',
    ogImage: 'https://marsstein.com/images/website-dsgvo-guide.jpg',
    structuredData: {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      'name': 'Website DSGVO-konform machen - Komplette Anleitung',
      'description': 'Schritt-für-Schritt Anleitung zur DSGVO-konformen Gestaltung Ihrer Website mit Cookie-Banner, Datenschutzerklärung und Analytics.',
      'url': 'https://marsstein.com/wissen/leitfaden/website-dsgvo',
      'totalTime': 'PT30M',
      'estimatedCost': {
        '@type': 'MonetaryAmount',
        'currency': 'EUR',
        'minValue': '0',
        'maxValue': '500'
      },
      'supply': [
        {
          '@type': 'HowToSupply',
          'name': 'Website-Zugang'
        },
        {
          '@type': 'HowToSupply',
          'name': 'Cookie-Scanner Tool'
        },
        {
          '@type': 'HowToSupply',
          'name': 'Consent Management Platform'
        }
      ],
      'step': [
        {
          '@type': 'HowToStep',
          'name': 'Cookie-Audit durchführen',
          'text': 'Identifizieren Sie alle Cookies und Tracking-Tools auf Ihrer Website'
        },
        {
          '@type': 'HowToStep',
          'name': 'Cookie-Banner implementieren',
          'text': 'Installieren Sie ein DSGVO-konformes Consent Management System'
        },
        {
          '@type': 'HowToStep',
          'name': 'Datenschutzerklärung erstellen',
          'text': 'Verfassen Sie eine vollständige Datenschutzerklärung nach Art. 13/14 DSGVO'
        },
        {
          '@type': 'HowToStep',
          'name': 'Analytics anpassen',
          'text': 'Konfigurieren Sie Analytics-Tools DSGVO-konform'
        },
        {
          '@type': 'HowToStep',
          'name': 'Formulare prüfen',
          'text': 'Ergänzen Sie Kontaktformulare um Einwilligungscheckboxen'
        },
        {
          '@type': 'HowToStep',
          'name': 'Drittanbieter auditieren',
          'text': 'Prüfen Sie alle externen Services und schließen Sie AVVs ab'
        },
        {
          '@type': 'HowToStep',
          'name': 'Testen und dokumentieren',
          'text': 'Testen Sie die Implementierung und dokumentieren Sie alles'
        }
      ]
    },
    breadcrumbStructuredData
  };
  const [currentChapter, setCurrentChapter] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);
  const [bookmarked, setBookmarked] = useState(false);
  
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });

  const chapters = [
    {
      id: 0,
      title: 'Website-Grundlagen für DSGVO',
      subtitle: 'Rechtlicher Rahmen und Compliance-Anforderungen',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-purple-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-purple-300">Warum Website-DSGVO kritisch ist</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-4">
              Ihre Website ist oft der <strong>erste Berührungspunkt</strong> mit personenbezogenen Daten. 
              Bereits beim ersten Besuch sammeln Sie potentiell Daten durch Cookies, Analytics, 
              Kontaktformulare und mehr.
            </p>
            <div class="bg-purple-500/5 rounded-lg p-4 border-l-4 border-purple-500">
              <p class="text-slate-300 italic">
                "Nach Schätzungen der EU-Kommission sind 95% aller Websites nicht DSGVO-konform."
                - Europäische Kommission, Digital Services Report 2023
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            <div class="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 bg-red-500 rounded-lg">
                  <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                </div>
                <h4 class="font-bold text-white">Höchste Risikokategorie</h4>
              </div>
              <p class="text-slate-300 text-sm mb-3">
                Websites stehen unter besonderer Beobachtung der Aufsichtsbehörden.
              </p>
              <ul class="text-slate-400 text-sm space-y-1">
                <li>• 73% aller DSGVO-Strafen betreffen Websites</li>
                <li>• Durchschnittliches Bußgeld: 2,8 Mio. €</li>
                <li>• Cookie-Banner: 89% fehlerhaft</li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 bg-blue-500 rounded-lg">
                  <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 class="font-bold text-white">Compliance-Bereiche</h4>
              </div>
              <p class="text-slate-300 text-sm mb-3">
                Diese Website-Elemente müssen DSGVO-konform sein:
              </p>
              <ul class="text-slate-400 text-sm space-y-1">
                <li>• Cookie-Banner & Consent Management</li>
                <li>• Datenschutzerklärung</li>
                <li>• Kontaktformulare</li>
                <li>• Analytics & Tracking</li>
                <li>• Drittanbieter-Tools</li>
              </ul>
            </div>
            
            <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 bg-green-500 rounded-lg">
                  <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 class="font-bold text-white">Business Impact</h4>
              </div>
              <p class="text-slate-300 text-sm mb-3">
                DSGVO-konforme Websites bieten klare Vorteile:
              </p>
              <ul class="text-slate-400 text-sm space-y-1">
                <li>• Vertrauen bei Besuchern (+47%)</li>
                <li>• Höhere Conversion Rate (+23%)</li>
                <li>• Besseres SEO-Ranking</li>
                <li>• Rechtssicherheit</li>
              </ul>
            </div>
          </div>

          <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-indigo-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              DSGVO-Website-Audit Checkliste
            </h3>
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-indigo-300">Sofortprüfung (5 Min):</h4>
                <div class="space-y-3">
                  ${[
                    'Cookie-Banner vorhanden und DSGVO-konform?',
                    'Datenschutzerklärung vollständig und aktuell?',
                    'Impressum mit Datenschutzbeauftragten?',
                    'Kontaktformulare mit Einwilligungscheckbox?',
                    'Google Analytics mit IP-Anonymisierung?'
                  ].map((item, index) => `
                    <div class="flex items-start gap-3 p-3 bg-slate-800/60 rounded-lg">
                      <div class="w-6 h-6 border-2 border-indigo-400 rounded-md flex items-center justify-center mt-0.5">
                        <div class="w-3 h-3 bg-indigo-400 rounded-sm opacity-0 hover:opacity-100 transition-opacity cursor-pointer"></div>
                      </div>
                      <div class="text-slate-300 text-sm">${item}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
              
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-purple-300">Detailprüfung (30 Min):</h4>
                <div class="space-y-3">
                  ${[
                    'Consent Management System (CMS) implementiert?',
                    'Drittanbieter-Tools auditiert und dokumentiert?',
                    'Betroffenenrechte auf Website erklärungsweise?',
                    'SSL-Verschlüsselung für alle Formulare?',
                    'Verarbeitungsverzeichnis für Website-Daten?'
                  ].map((item, index) => `
                    <div class="flex items-start gap-3 p-3 bg-slate-800/60 rounded-lg">
                      <div class="w-6 h-6 border-2 border-purple-400 rounded-md flex items-center justify-center mt-0.5">
                        <div class="w-3 h-3 bg-purple-400 rounded-sm opacity-0 hover:opacity-100 transition-opacity cursor-pointer"></div>
                      </div>
                      <div class="text-slate-300 text-sm">${item}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-3 bg-yellow-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-yellow-300">Rechtliche Grundlagen für Websites</h3>
            </div>
            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-yellow-500/5 rounded-lg p-4 border-l-4 border-yellow-500">
                <div class="text-yellow-300 font-semibold mb-2">ePrivacy-Richtlinie</div>
                <div class="text-slate-400 text-sm">
                  Regelt Cookies und elektronische Kommunikation. Wird zur ePrivacy-Verordnung.
                </div>
              </div>
              <div class="bg-orange-500/5 rounded-lg p-4 border-l-4 border-orange-500">
                <div class="text-orange-300 font-semibold mb-2">DSGVO Artikel 6 & 7</div>
                <div class="text-slate-400 text-sm">
                  Rechtsgrundlagen für Datenverarbeitung und Bedingungen für Einwilligung.
                </div>
              </div>
              <div class="bg-red-500/5 rounded-lg p-4 border-l-4 border-red-500">
                <div class="text-red-300 font-semibold mb-2">TTDSG</div>
                <div class="text-slate-400 text-sm">
                  Telekommunikation-Telemedien-Datenschutz-Gesetz (Deutschland) seit Dez. 2021.
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 1,
      title: 'Cookie-Banner & Consent Management',
      subtitle: 'Rechtskonforme Einwilligungssysteme implementieren',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-blue-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                </svg>
              </div>
              Cookie-Kategorien und rechtliche Behandlung
            </h3>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-blue-300">Einwilligung erforderlich:</h4>
                <div class="space-y-3">
                  ${[
                    { name: 'Marketing-Cookies', desc: 'Tracking, Werbung, Retargeting', risk: 'Hoch', color: 'red' },
                    { name: 'Analytics-Cookies', desc: 'Google Analytics, Hotjar, etc.', risk: 'Mittel', color: 'orange' },
                    { name: 'Social Media Cookies', desc: 'Facebook Pixel, Twitter, etc.', risk: 'Hoch', color: 'red' },
                    { name: 'Komfort-Cookies', desc: 'Spracheinstellungen, Themes', risk: 'Niedrig', color: 'yellow' }
                  ].map(cookie => `
                    <div class="bg-slate-800/60 rounded-lg p-4 border border-slate-700/50">
                      <div class="flex items-center justify-between mb-2">
                        <div class="text-white font-semibold">${cookie.name}</div>
                        <div class="text-${cookie.color}-400 text-xs font-bold px-2 py-1 bg-${cookie.color}-500/20 rounded">${cookie.risk}</div>
                      </div>
                      <div class="text-slate-400 text-sm">${cookie.desc}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
              
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-green-300">Keine Einwilligung nötig:</h4>
                <div class="space-y-3">
                  ${[
                    { name: 'Technisch notwendige Cookies', desc: 'Session-Management, Warenkörbe', risk: 'Kein Risiko', color: 'green' },
                    { name: 'Sicherheits-Cookies', desc: 'CSRF-Schutz, Bot-Erkennung', risk: 'Kein Risiko', color: 'green' },
                    { name: 'Load-Balancing Cookies', desc: 'Server-Verteilung', risk: 'Kein Risiko', color: 'green' }
                  ].map(cookie => `
                    <div class="bg-slate-800/60 rounded-lg p-4 border border-slate-700/50">
                      <div class="flex items-center justify-between mb-2">
                        <div class="text-white font-semibold">${cookie.name}</div>
                        <div class="text-${cookie.color}-400 text-xs font-bold px-2 py-1 bg-${cookie.color}-500/20 rounded">${cookie.risk}</div>
                      </div>
                      <div class="text-slate-400 text-sm">${cookie.desc}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">DSGVO-konforme Consent Management Systeme</h3>
            
            <div class="space-y-6">
              <div class="bg-purple-500/5 rounded-lg p-6 border-l-4 border-purple-500">
                <h4 class="text-lg font-semibold text-purple-300 mb-4">Anforderungen an gültige Einwilligung (Art. 7 DSGVO):</h4>
                <div class="grid md:grid-cols-2 gap-4">
                  ${[
                    { req: 'Freiwillig', desc: 'Keine Kopplung an Vertragsabschluss', icon: '🆓' },
                    { req: 'Spezifisch', desc: 'Für jeden Zweck separate Einwilligung', icon: '🎯' },
                    { req: 'Informiert', desc: 'Klare Aufklärung über Datenverwendung', icon: '📋' },
                    { req: 'Eindeutig', desc: 'Aktive Handlung erforderlich (Opt-in)', icon: '✅' },
                    { req: 'Widerrufbar', desc: 'Einfacher Widerruf jederzeit möglich', icon: '🔄' },
                    { req: 'Nachweisbar', desc: 'Dokumentation von Wann, Was, Wie', icon: '📊' }
                  ].map(item => `
                    <div class="flex items-start gap-3 p-3 bg-slate-800/40 rounded-lg">
                      <div class="text-2xl">${item.icon}</div>
                      <div>
                        <div class="text-purple-300 font-semibold">${item.req}</div>
                        <div class="text-slate-400 text-sm">${item.desc}</div>
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>

              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-green-500/10 rounded-lg p-6 border border-green-500/20">
                  <h4 class="text-lg font-semibold text-green-300 mb-4 flex items-center gap-2">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    ✅ Gute Cookie-Banner
                  </h4>
                  <ul class="space-y-2 text-slate-300 text-sm">
                    <li>• Granulare Auswahl möglich</li>
                    <li>• "Ablehnen" genauso prominent wie "Akzeptieren"</li>
                    <li>• Keine Pre-Checks bei nicht-essentiellen Cookies</li>
                    <li>• Klare Kategorisierung der Cookies</li>
                    <li>• Links zu Datenschutzerklärung</li>
                    <li>• Einfacher Widerruf in Datenschutzeinstellungen</li>
                  </ul>
                </div>
                
                <div class="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
                  <h4 class="text-lg font-semibold text-red-300 mb-4 flex items-center gap-2">
                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    ❌ Problematische Banner
                  </h4>
                  <ul class="space-y-2 text-slate-300 text-sm">
                    <li>• Nur "Akzeptieren" Button (Cookie-Walls)</li>
                    <li>• Alle Cookies vorab angehakt</li>
                    <li>• "Weitersurfen = Zustimmung"</li>
                    <li>• Versteckte Ablehnungsoptionen</li>
                    <li>• Unklare oder irreführende Texte</li>
                    <li>• Kein einfacher Widerruf möglich</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Technische Implementierung</h3>
            
            <div class="space-y-6">
              <div class="bg-slate-800/60 rounded-lg p-6">
                <h4 class="text-lg font-semibold text-orange-300 mb-4">Cookie-Consent-Management Setup:</h4>
                <div class="space-y-4">
                  <div class="bg-orange-500/5 rounded-lg p-4 border-l-4 border-orange-500">
                    <div class="text-orange-300 font-semibold mb-2">1. Cookie-Scanning & Inventar</div>
                    <div class="text-slate-400 text-sm mb-3">
                      Identifizieren Sie alle Cookies auf Ihrer Website:
                    </div>
                    <div class="bg-slate-900/60 rounded p-3 font-mono text-sm text-green-400">
                      # Browser DevTools verwenden:<br/>
                      F12 → Application → Cookies<br/>
                      <br/>
                      # Automatische Tools:<br/>
                      - Cookiebot Scanner<br/>
                      - OneTrust Cookie Scanner<br/>
                      - GDPR Cookie Scanner
                    </div>
                  </div>
                  
                  <div class="bg-blue-500/5 rounded-lg p-4 border-l-4 border-blue-500">
                    <div class="text-blue-300 font-semibold mb-2">2. Consent Management Platform (CMP) wählen</div>
                    <div class="grid md:grid-cols-3 gap-3">
                      ${[
                        { name: 'Cookiebot', price: 'SaaS', features: 'Auto-Scanning, IAB TCF 2.0, 40+ Sprachen' },
                        { name: 'OneTrust', price: 'Enterprise', features: 'Enterprise-Level, Vollautomatisierung' },
                        { name: 'Usercentrics', price: 'SaaS', features: 'DACH-fokussiert, einfache Integration' }
                      ].map(tool => `
                        <div class="bg-slate-800/60 rounded p-3">
                          <div class="text-white font-semibold">${tool.name}</div>
                          <div class="text-blue-400 text-sm">${tool.price}</div>
                          <div class="text-slate-400 text-xs mt-1">${tool.features}</div>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                  
                  <div class="bg-green-500/5 rounded-lg p-4 border-l-4 border-green-500">
                    <div class="text-green-300 font-semibold mb-2">3. Integration & Testing</div>
                    <div class="text-slate-400 text-sm mb-3">
                      Beispiel-Integration für Google Analytics:
                    </div>
                    <div class="bg-slate-900/60 rounded p-3 font-mono text-sm text-green-400">
                      // Nur laden wenn Consent gegeben<br/>
                      if (consent.analytics) {<br/>
                      &nbsp;&nbsp;gtag('config', 'GA_MEASUREMENT_ID');<br/>
                      } else {<br/>
                      &nbsp;&nbsp;gtag('config', 'GA_MEASUREMENT_ID', {<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;'anonymize_ip': true,<br/>
                      &nbsp;&nbsp;&nbsp;&nbsp;'storage': 'none'<br/>
                      &nbsp;&nbsp;});<br/>
                      }
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: 'Datenschutzerklärung optimieren',
      subtitle: 'Vollständige und rechtssichere Privacy Policy',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-green-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              Pflichtinhalte der Datenschutzerklärung (Art. 13/14 DSGVO)
            </h3>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-green-300">Grundlegende Informationen:</h4>
                <div class="space-y-3">
                  ${[
                    { item: 'Name und Kontaktdaten des Verantwortlichen', art: 'Art. 13 Abs. 1 lit. a', required: true },
                    { item: 'Kontaktdaten des Datenschutzbeauftragten', art: 'Art. 13 Abs. 1 lit. b', required: true },
                    { item: 'Zwecke und Rechtsgrundlagen der Verarbeitung', art: 'Art. 13 Abs. 1 lit. c', required: true },
                    { item: 'Berechtigte Interessen bei Art. 6 Abs. 1 lit. f', art: 'Art. 13 Abs. 1 lit. d', required: false }
                  ].map(info => `
                    <div class="bg-slate-800/60 rounded-lg p-4 border border-slate-700/50">
                      <div class="flex items-start justify-between mb-2">
                        <div class="text-white font-medium text-sm">${info.item}</div>
                        <div class="text-${info.required ? 'red' : 'yellow'}-400 text-xs font-bold">
                          ${info.required ? 'PFLICHT' : 'BEDINGT'}
                        </div>
                      </div>
                      <div class="text-green-400 text-xs">${info.art}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
              
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-emerald-300">Erweiterte Informationen:</h4>
                <div class="space-y-3">
                  ${[
                    { item: 'Empfänger oder Kategorien von Empfängern', art: 'Art. 13 Abs. 1 lit. e', required: true },
                    { item: 'Drittlandübermittlung und Garantien', art: 'Art. 13 Abs. 1 lit. f', required: false },
                    { item: 'Speicherdauer oder Kriterien', art: 'Art. 13 Abs. 2 lit. a', required: true },
                    { item: 'Betroffenenrechte (Art. 15-22)', art: 'Art. 13 Abs. 2 lit. b', required: true }
                  ].map(info => `
                    <div class="bg-slate-800/60 rounded-lg p-4 border border-slate-700/50">
                      <div class="flex items-start justify-between mb-2">
                        <div class="text-white font-medium text-sm">${info.item}</div>
                        <div class="text-${info.required ? 'red' : 'yellow'}-400 text-xs font-bold">
                          ${info.required ? 'PFLICHT' : 'BEDINGT'}
                        </div>
                      </div>
                      <div class="text-emerald-400 text-xs">${info.art}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Website-spezifische Datenverarbeitungen</h3>
            
            <div class="space-y-6">
              ${[
                {
                  title: 'Web-Analytics (Google Analytics, etc.)',
                  icon: '📊',
                  color: 'blue',
                  details: {
                    zweck: 'Analyse des Nutzerverhaltens, Optimierung der Website',
                    rechtsgrundlage: 'Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)',
                    daten: 'IP-Adresse (anonymisiert), Browserinfo, Verweildauer, besuchte Seiten',
                    speicherdauer: '26 Monate (Google Analytics Standard)',
                    empfänger: 'Google LLC (USA), Übermittlung auf Basis von Standardvertragsklauseln',
                    widerruf: 'Über Cookie-Einstellungen oder Browser-Add-on'
                  }
                },
                {
                  title: 'Kontaktformulare',
                  icon: '📝',
                  color: 'green',
                  details: {
                    zweck: 'Bearbeitung von Anfragen, Kommunikation mit Interessenten',
                    rechtsgrundlage: 'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) oder lit. b (Vertragsanbahnung)',
                    daten: 'Name, E-Mail, Telefon, Nachrichteninhalt, IP-Adresse, Zeitstempel',
                    speicherdauer: '3 Jahre ab letztem Kontakt oder bis zur Löschungsanfrage',
                    empfänger: 'Interne Bearbeitung, ggf. spezialisierte Fachabteilungen',
                    widerruf: 'Per E-Mail an datenschutz@unternehmen.de oder über Kontaktformular'
                  }
                },
                {
                  title: 'Social Media Plugins',
                  icon: '📱',
                  color: 'purple',
                  details: {
                    zweck: 'Social Media Integration, Reichweitensteigerung',
                    rechtsgrundlage: 'Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)',
                    daten: 'IP-Adresse, Browserinfo, Social Media IDs, Interaktionsdaten',
                    speicherdauer: 'Nach den Richtlinien der jeweiligen Plattform',
                    empfänger: 'Facebook, Twitter, LinkedIn, YouTube (USA/Irland)',
                    widerruf: 'Über Cookie-Einstellungen oder direkt bei der Plattform'
                  }
                }
              ].map(section => `
                <div class="bg-${section.color}-500/10 rounded-lg p-6 border border-${section.color}-500/20">
                  <h4 class="text-lg font-semibold text-${section.color}-300 mb-4 flex items-center gap-3">
                    <span class="text-2xl">${section.icon}</span>
                    ${section.title}
                  </h4>
                  <div class="grid md:grid-cols-2 gap-4">
                    ${Object.entries(section.details).map(([key, value]) => `
                      <div class="bg-slate-800/40 rounded p-3">
                        <div class="text-${section.color}-400 font-semibold text-sm capitalize mb-1">
                          ${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:
                        </div>
                        <div class="text-slate-300 text-sm">${value}</div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Betroffenenrechte verständlich erklären</h3>
            
            <div class="grid md:grid-cols-2 gap-6">
              ${[
                {
                  title: 'Auskunftsrecht (Art. 15)',
                  desc: 'Recht auf Kopie aller gespeicherten Daten',
                  example: 'Sie können jederzeit eine Übersicht aller von uns über Sie gespeicherten Daten anfordern.',
                  color: 'blue'
                },
                {
                  title: 'Berichtigungsrecht (Art. 16)',
                  desc: 'Recht auf Korrektur falscher Daten',
                  example: 'Sollten Ihre Daten fehlerhaft sein, korrigieren wir diese umgehend nach Ihrer Mitteilung.',
                  color: 'green'
                },
                {
                  title: 'Löschungsrecht (Art. 17)',
                  desc: 'Recht auf Löschung ("Recht auf Vergessenwerden")',
                  example: 'Sie können die Löschung Ihrer Daten verlangen, sofern keine gesetzlichen Aufbewahrungspflichten bestehen.',
                  color: 'red'
                },
                {
                  title: 'Einschränkungsrecht (Art. 18)',
                  desc: 'Recht auf Einschränkung der Verarbeitung',
                  example: 'Sie können verlangen, dass wir die Verarbeitung Ihrer Daten vorübergehend einschränken.',
                  color: 'yellow'
                },
                {
                  title: 'Datenübertragbarkeit (Art. 20)',
                  desc: 'Recht auf Übertragung der Daten',
                  example: 'Sie erhalten Ihre Daten in einem maschinenlesbaren Format zur Übertragung an andere Anbieter.',
                  color: 'purple'
                },
                {
                  title: 'Widerspruchsrecht (Art. 21)',
                  desc: 'Recht auf Widerspruch gegen Verarbeitung',
                  example: 'Sie können jederzeit der Verarbeitung Ihrer Daten für Direktwerbung widersprechen.',
                  color: 'orange'
                }
              ].map(right => `
                <div class="bg-${right.color}-500/10 rounded-lg p-4 border border-${right.color}-500/20">
                  <h4 class="text-${right.color}-300 font-semibold mb-2">${right.title}</h4>
                  <p class="text-slate-300 text-sm mb-3">${right.desc}</p>
                  <div class="bg-slate-800/60 rounded p-3">
                    <div class="text-slate-400 text-xs mb-1">Beispielformulierung:</div>
                    <div class="text-slate-300 text-sm italic">"${right.example}"</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: 'Analytics & Tracking DSGVO-konform',
      subtitle: 'Google Analytics, Hotjar & Co. rechtssicher einsetzen',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-red-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-red-300">Analytics = Hochrisiko-Bereich</h3>
            </div>
            <div class="space-y-4">
              <p class="text-slate-300 text-lg leading-relaxed">
                Web-Analytics Tools sind der <strong>häufigste Grund für DSGVO-Verstöße</strong>. 
                Besonders US-amerikanische Tools wie Google Analytics stehen unter verschärfter Beobachtung.
              </p>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-red-500/5 rounded-lg p-4 border-l-4 border-red-500">
                  <div class="text-red-300 font-semibold mb-2">Aktuelle Rechtslage:</div>
                  <ul class="text-slate-400 text-sm space-y-1">
                    <li>• Google Analytics 4: Rechtlich umstritten</li>
                    <li>• Mehrere EU-Behörden verhängen Strafen</li>
                    <li>• Schrems II macht US-Tools problematisch</li>
                  </ul>
                </div>
                <div class="bg-orange-500/5 rounded-lg p-4 border-l-4 border-orange-500">
                  <div class="text-orange-300 font-semibold mb-2">Hauptprobleme:</div>
                  <ul class="text-slate-400 text-sm space-y-1">
                    <li>• Datenübertragung in die USA</li>
                    <li>• Unzureichende Anonymisierung</li>
                    <li>• Fehlende Einwilligung</li>
                  </ul>
                </div>
                <div class="bg-yellow-500/5 rounded-lg p-4 border-l-4 border-yellow-500">
                  <div class="text-yellow-300 font-semibold mb-2">Lösungsansätze:</div>
                  <ul class="text-slate-400 text-sm space-y-1">
                    <li>• EU-basierte Analytics-Tools</li>
                    <li>• Server-side Analytics</li>
                    <li>• Vollständige Anonymisierung</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Google Analytics 4 DSGVO-konform konfigurieren</h3>
            
            <div class="space-y-6">
              <div class="bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20">
                <h4 class="text-lg font-semibold text-yellow-300 mb-4 flex items-center gap-2">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                  Rechtliches Risiko minimieren
                </h4>
                <p class="text-slate-300 mb-4">
                  <strong>Wichtiger Hinweis:</strong> Diese Konfiguration reduziert das Risiko, eliminiert es aber nicht vollständig. 
                  Für maximale Rechtssicherheit sollten Sie EU-basierte Alternativen erwägen.
                </p>
              </div>

              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-blue-300">Schritt 1: Datenschutzeinstellungen in GA4</h4>
                <div class="bg-slate-800/60 rounded-lg p-6">
                  <div class="space-y-4">
                    <div class="bg-blue-500/5 rounded-lg p-4 border-l-4 border-blue-500">
                      <div class="text-blue-300 font-semibold mb-2">Datenschutz & Sicherheit → Datenaufbewahrung</div>
                      <ul class="text-slate-400 text-sm space-y-1">
                        <li>• Aufbewahrungsdauer: 2 Monate (statt 14 Monate)</li>
                        <li>• "Daten bei neuer Aktivität zurücksetzen": AUS</li>
                        <li>• Nutzer-ID bei Inaktivität löschen: EIN</li>
                      </ul>
                    </div>
                    
                    <div class="bg-indigo-500/5 rounded-lg p-4 border-l-4 border-indigo-500">
                      <div class="text-indigo-300 font-semibold mb-2">Datensammlung → Erweiterte Einstellungen</div>
                      <ul class="text-slate-400 text-sm space-y-1">
                        <li>• IP-Anonymisierung: automatisch in GA4</li>
                        <li>• Google-Signale: DEAKTIVIEREN</li>
                        <li>• Demografische Daten: DEAKTIVIEREN</li>
                        <li>• Interessenskategorien: DEAKTIVIEREN</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-blue-300">Schritt 2: DSGVO-konforme Implementierung</h4>
                <div class="bg-slate-800/60 rounded-lg p-6">
                  <div class="text-slate-300 mb-4">Implementierung mit Consent Management:</div>
                  <div class="bg-slate-900/60 rounded p-4 font-mono text-sm text-green-400">
                    <!-- Google Tag Manager --><br/>
                    &lt;script&gt;<br/>
                    &nbsp;&nbsp;// Nur laden wenn Analytics-Consent gegeben<br/>
                    &nbsp;&nbsp;if (getCookieConsent('analytics')) {<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;(function(w,d,s,l,i){<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;w[l]=w[l]||[];w[l].push({'gtm.start':<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;new Date().getTime(),event:'gtm.js'});<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var f=d.getElementsByTagName(s)[0],<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;f.parentNode.insertBefore(j,f);<br/>
                    &nbsp;&nbsp;&nbsp;&nbsp;})(window,document,'script','dataLayer','GTM-XXXXXXX');<br/>
                    &nbsp;&nbsp;}<br/>
                    &lt;/script&gt;
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-blue-300">Schritt 3: Auftragsverarbeitung & DPA</h4>
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="bg-blue-500/5 rounded-lg p-4 border-l-4 border-blue-500">
                    <div class="text-blue-300 font-semibold mb-2">Google Ads Data Processing Terms</div>
                    <ul class="text-slate-400 text-sm space-y-1">
                      <li>• Automatisch für GA4-Konten aktiviert</li>
                      <li>• Regelung nach Art. 28 DSGVO</li>
                      <li>• Standardvertragsklauseln für USA-Transfer</li>
                    </ul>
                  </div>
                  <div class="bg-indigo-500/5 rounded-lg p-4 border-l-4 border-indigo-500">
                    <div class="text-indigo-300 font-semibold mb-2">Zusätzliche Maßnahmen</div>
                    <ul class="text-slate-400 text-sm space-y-1">
                      <li>• IP-Adressen in Verarbeitungsverzeichnis dokumentieren</li>
                      <li>• DSFA bei umfangreichem Tracking durchführen</li>
                      <li>• Regelmäßige Löschung alter Daten</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">DSGVO-konforme Analytics-Alternativen</h3>
            
            <div class="grid gap-6">
              ${[
                {
                  name: 'Matomo (ehemals Piwik)',
                  location: 'EU (Deutschland)',
                  price: 'Open Source / Ab 19€/Monat',
                  features: [
                    'Vollständige Datenkontrolle',
                    'DSGVO-konform by design',
                    'On-Premise oder Cloud',
                    'Keine Datenübertragung an Dritte'
                  ],
                  setup: 'Mittel',
                  compliance: 'Sehr hoch',
                  color: 'green'
                },
                {
                  name: 'Plausible Analytics',
                  location: 'EU (Estland)',
                  price: 'Ab 9€/Monat',
                  features: [
                    'Privacy-first Design',
                    'Keine Cookies erforderlich',
                    'Lightweight (< 1KB)',
                    'Open Source'
                  ],
                  setup: 'Einfach',
                  compliance: 'Sehr hoch',
                  color: 'emerald'
                },
                {
                  name: 'Fathom Analytics',
                  location: 'EU/Kanada',
                  price: 'Ab 14€/Monat',
                  features: [
                    '100% DSGVO-konform',
                    'Keine personenbezogenen Daten',
                    'Einfache Bedienung',
                    'Schnelle Ladezeiten'
                  ],
                  setup: 'Einfach',
                  compliance: 'Sehr hoch',
                  color: 'teal'
                },
                {
                  name: 'etracker',
                  location: 'Deutschland',
                  price: 'Ab 19€/Monat',
                  features: [
                    'Deutsche Datenschutzstandards',
                    'TÜV-zertifiziert',
                    'Rechtssichere Konfiguration',
                    'Deutscher Support'
                  ],
                  setup: 'Mittel',
                  compliance: 'Sehr hoch',
                  color: 'blue'
                }
              ].map(tool => `
                <div class="bg-${tool.color}-500/10 rounded-lg p-6 border border-${tool.color}-500/20">
                  <div class="flex items-start justify-between mb-4">
                    <div>
                      <h4 class="text-lg font-semibold text-${tool.color}-300">${tool.name}</h4>
                      <div class="text-slate-400 text-sm">${tool.location}</div>
                    </div>
                    <div class="text-right">
                      <div class="text-${tool.color}-400 font-semibold">${tool.price}</div>
                      <div class="text-slate-400 text-xs">Setup: ${tool.setup}</div>
                    </div>
                  </div>
                  
                  <div class="grid md:grid-cols-2 gap-4">
                    <div>
                      <div class="text-${tool.color}-300 font-semibold mb-2">Features:</div>
                      <ul class="text-slate-400 text-sm space-y-1">
                        ${tool.features.map(feature => `<li>• ${feature}</li>`).join('')}
                      </ul>
                    </div>
                    <div>
                      <div class="text-${tool.color}-300 font-semibold mb-2">DSGVO-Compliance:</div>
                      <div class="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                        ${tool.compliance}
                      </div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Server-Side Analytics & Datenschutz</h3>
            
            <div class="space-y-6">
              <div class="bg-purple-500/5 rounded-lg p-6 border-l-4 border-purple-500">
                <h4 class="text-lg font-semibold text-purple-300 mb-4">Was ist Server-Side Analytics?</h4>
                <p class="text-slate-300 mb-4">
                  Bei Server-Side Analytics werden die Daten nicht direkt vom Browser an den Analytics-Anbieter gesendet, 
                  sondern über Ihren eigenen Server geroutet. Dies bietet mehr Kontrolle und Datenschutz.
                </p>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="bg-slate-800/60 rounded p-4">
                    <div class="text-green-400 font-semibold mb-2">Vorteile:</div>
                    <ul class="text-slate-400 text-sm space-y-1">
                      <li>• Vollständige Datenkontrolle</li>
                      <li>• Filterung sensibler Daten möglich</li>
                      <li>• Bessere Performance</li>
                      <li>• Ad-Blocker umgehen</li>
                    </ul>
                  </div>
                  <div class="bg-slate-800/60 rounded p-4">
                    <div class="text-red-400 font-semibold mb-2">Nachteile:</div>
                    <ul class="text-slate-400 text-sm space-y-1">
                      <li>• Technisch komplexer</li>
                      <li>• Zusätzlicher Server-Aufwand</li>
                      <li>• Entwicklerressourcen erforderlich</li>
                      <li>• Wartung und Updates</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="bg-pink-500/5 rounded-lg p-6 border-l-4 border-pink-500">
                <h4 class="text-lg font-semibold text-pink-300 mb-4">Implementation mit Google Tag Manager Server-Side</h4>
                <div class="space-y-4">
                  <div class="bg-slate-900/60 rounded p-4 font-mono text-sm text-green-400">
                    # 1. GTM Server Container Setup<br/>
                    App Engine / Cloud Run Deployment<br/>
                    <br/>
                    # 2. Client-Side Konfiguration<br/>
                    gtag('config', 'GA_MEASUREMENT_ID', {<br/>
                    &nbsp;&nbsp;'server_container_url': 'https://your-server.com'<br/>
                    });<br/>
                    <br/>
                    # 3. Server-Side Filtering<br/>
                    - IP-Adressen vor Weiterleitung anonymisieren<br/>
                    - PII-Daten herausfiltern<br/>
                    - Consent-Status berücksichtigen
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: 'Drittanbieter-Tools & Compliance',
      subtitle: 'Externe Services DSGVO-konform integrieren',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-orange-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              Drittanbieter-Audit: Compliance-Risiken identifizieren
            </h3>
            
            <div class="space-y-6">
              <p class="text-slate-300 text-lg leading-relaxed">
                Jeder Drittanbieter auf Ihrer Website kann ein <strong>DSGVO-Risiko</strong> darstellen. 
                Sie sind als Website-Betreiber für alle integrierten Services verantwortlich.
              </p>
              
              <div class="grid md:grid-cols-3 gap-6">
                ${[
                  {
                    category: 'Höchstes Risiko',
                    color: 'red',
                    tools: [
                      'Google Analytics',
                      'Facebook Pixel', 
                      'Google Ads Tracking',
                      'Hotjar/FullStory',
                      'Intercom/Zendesk Chat'
                    ]
                  },
                  {
                    category: 'Mittleres Risiko',
                    color: 'yellow',
                    tools: [
                      'YouTube Videos',
                      'Google Maps',
                      'Mailchimp Integration',
                      'HubSpot Forms',
                      'Calendly Booking'
                    ]
                  },
                  {
                    category: 'Geringes Risiko',
                    color: 'green',
                    tools: [
                      'EU-CDNs (Cloudflare EU)',
                      'EU-Hosting',
                      'Lokale Fonts',
                      'Matomo (self-hosted)',
                      'EU-Newsletter-Tools'
                    ]
                  }
                ].map(risk => `
                  <div class="bg-${risk.color}-500/10 rounded-xl p-6 border border-${risk.color}-500/20">
                    <h4 class="text-${risk.color}-300 font-bold text-lg mb-4">${risk.category}</h4>
                    <ul class="space-y-2">
                      ${risk.tools.map(tool => `
                        <li class="text-slate-300 text-sm flex items-center gap-2">
                          <div class="w-2 h-2 bg-${risk.color}-400 rounded-full"></div>
                          ${tool}
                        </li>
                      `).join('')}
                    </ul>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Auftragsverarbeitung & DPA Management</h3>
            
            <div class="space-y-6">
              <div class="bg-blue-500/5 rounded-lg p-6 border-l-4 border-blue-500">
                <h4 class="text-lg font-semibold text-blue-300 mb-4">Was ist ein Data Processing Agreement (DPA)?</h4>
                <p class="text-slate-300 mb-4">
                  Ein DPA regelt die Auftragsverarbeitung nach Art. 28 DSGVO. Jeder Drittanbieter, 
                  der personenbezogene Daten in Ihrem Auftrag verarbeitet, benötigt einen gültigen DPA.
                </p>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="bg-slate-800/60 rounded p-4">
                    <div class="text-blue-300 font-semibold mb-2">DPA muss enthalten:</div>
                    <ul class="text-slate-400 text-sm space-y-1">
                      <li>• Gegenstand und Dauer der Verarbeitung</li>
                      <li>• Art und Zweck der Verarbeitung</li>
                      <li>• Art der personenbezogenen Daten</li>
                      <li>• Kategorien betroffener Personen</li>
                      <li>• Technische und organisatorische Maßnahmen</li>
                    </ul>
                  </div>
                  <div class="bg-slate-800/60 rounded p-4">
                    <div class="text-indigo-300 font-semibold mb-2">Auftragsverarbeiter-Pflichten:</div>
                    <ul class="text-slate-400 text-sm space-y-1">
                      <li>• Weisungsgebundenheit</li>
                      <li>• Vertraulichkeit der Mitarbeiter</li>
                      <li>• Datensicherheit gewährleisten</li>
                      <li>• Unterstützung bei Betroffenenrechten</li>
                      <li>• Meldung von Datenschutzverletzungen</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-indigo-300">DPA-Status der wichtigsten Website-Tools:</h4>
                <div class="space-y-3">
                  ${[
                    {
                      tool: 'Google Analytics / Google Ads',
                      status: 'DPA verfügbar',
                      note: 'Google Ads Data Processing Terms automatisch bei Nutzung',
                      link: 'https://privacy.google.com/businesses/processorterms/',
                      color: 'green'
                    },
                    {
                      tool: 'Facebook Business Tools',
                      status: 'DPA verfügbar',
                      note: 'Meta Data Processing Terms, aktiviert über Business Manager',
                      link: 'https://www.facebook.com/legal/terms/dataprocessing',
                      color: 'green'
                    },
                    {
                      tool: 'Mailchimp',
                      status: 'DPA erforderlich',
                      note: 'Manuell in den Account-Einstellungen aktivieren',
                      link: 'https://mailchimp.com/legal/data-processing-addendum/',
                      color: 'yellow'
                    },
                    {
                      tool: 'HubSpot',
                      status: 'DPA verfügbar',
                      note: 'Automatisch für EU-Kunden, zusätzliche Einstellungen möglich',
                      link: 'https://legal.hubspot.com/dpa',
                      color: 'green'
                    },
                    {
                      tool: 'Intercom',
                      status: 'DPA erforderlich',
                      note: 'Separat beantragen, nicht automatisch aktiviert',
                      link: 'https://www.intercom.com/terms-and-policies#data-processing',
                      color: 'yellow'
                    },
                    {
                      tool: 'Hotjar',
                      status: 'DPA verfügbar',
                      note: 'Standard DPA für alle EU-Kunden',
                      link: 'https://www.hotjar.com/legal/policies/dpa/',
                      color: 'green'
                    }
                  ].map(item => `
                    <div class="bg-slate-800/60 rounded-lg p-4 border border-slate-700/50">
                      <div class="flex items-center justify-between mb-2">
                        <div class="text-white font-semibold">${item.tool}</div>
                        <div class="text-${item.color}-400 text-xs font-bold px-2 py-1 bg-${item.color}-500/20 rounded">
                          ${item.status}
                        </div>
                      </div>
                      <div class="text-slate-400 text-sm mb-2">${item.note}</div>
                      <a href="${item.link}" class="text-${item.color}-400 text-xs hover:underline" target="_blank">
                        DPA-Link →
                      </a>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Drittländer-Übermittlung: USA-Tools absichern</h3>
            
            <div class="space-y-6">
              <div class="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
                <h4 class="text-lg font-semibold text-red-300 mb-4 flex items-center gap-2">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                  </svg>
                  Schrems II und die USA-Problematik
                </h4>
                <p class="text-slate-300 mb-4">
                  Seit dem Schrems II-Urteil des EuGH ist die Übermittlung personenbezogener Daten in die USA rechtlich umstritten. 
                  Das Privacy Shield wurde für ungültig erklärt.
                </p>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="bg-slate-800/60 rounded p-4">
                    <div class="text-red-300 font-semibold mb-2">Problematische Rechtsgrundlagen:</div>
                    <ul class="text-slate-400 text-sm space-y-1">
                      <li>• EU-US Privacy Shield (ungültig seit 2020)</li>
                      <li>• Safe Harbor (bereits 2015 ungültig)</li>
                      <li>• Standardvertragsklauseln allein oft unzureichend</li>
                    </ul>
                  </div>
                  <div class="bg-slate-800/60 rounded p-4">
                    <div class="text-green-300 font-semibold mb-2">Mögliche Absicherungen:</div>
                    <ul class="text-slate-400 text-sm space-y-1">
                      <li>• EU Data Protection Framework (2023)</li>
                      <li>• Standardvertragsklauseln + zusätzliche Garantien</li>
                      <li>• Vollständige Anonymisierung</li>
                      <li>• EU-basierte Alternativen nutzen</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-green-300">Transfer Impact Assessment (TIA) durchführen</h4>
                <div class="bg-green-500/5 rounded-lg p-6 border-l-4 border-green-500">
                  <p class="text-slate-300 mb-4">
                    Für jede Datenübermittlung in Drittländer müssen Sie eine Bewertung durchführen:
                  </p>
                  
                  <div class="space-y-4">
                    ${[
                      {
                        step: '1. Datenkategorien identifizieren',
                        desc: 'Welche personenbezogenen Daten werden übermittelt?',
                        example: 'IP-Adressen, E-Mail-Adressen, Nutzungsverhalten'
                      },
                      {
                        step: '2. Rechtslage im Zielland prüfen',
                        desc: 'Gibt es staatliche Zugriffsmöglichkeiten auf die Daten?',
                        example: 'USA: FISA 702, Cloud Act; China: Cybersecurity Law'
                      },
                      {
                        step: '3. Zusätzliche Garantien bewerten',
                        desc: 'Welche technischen und organisatorischen Maßnahmen sind vorhanden?',
                        example: 'Verschlüsselung, Pseudonymisierung, Anonymisierung'
                      },
                      {
                        step: '4. Gesamtbewertung und Entscheidung',
                        desc: 'Ist ein angemessenes Schutzniveau gewährleistet?',
                        example: 'Transfer fortsetzen, zusätzliche Maßnahmen oder stoppen'
                      }
                    ].map((item, index) => `
                      <div class="flex items-start gap-4 p-4 bg-slate-800/40 rounded-lg">
                        <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ${index + 1}
                        </div>
                        <div>
                          <div class="text-green-300 font-semibold mb-1">${item.step}</div>
                          <div class="text-slate-300 text-sm mb-2">${item.desc}</div>
                          <div class="text-slate-400 text-xs italic">Beispiel: ${item.example}</div>
                        </div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">DSGVO-konforme Tool-Alternativen</h3>
            
            <div class="space-y-6">
              <div class="grid gap-6">
                ${[
                  {
                    category: 'Analytics & Tracking',
                    tools: [
                      { original: 'Google Analytics', alternative: 'Matomo (EU)', benefits: 'Volle Datenkontrolle, DSGVO by design' },
                      { original: 'Hotjar', alternative: 'LogRocket (EU-Server)', benefits: 'EU-Hosting, erweiterte Datenschutzkontrollen' },
                      { original: 'Mixpanel', alternative: 'Plausible Analytics', benefits: 'Keine Cookies, Privacy-first' }
                    ],
                    color: 'blue'
                  },
                  {
                    category: 'Marketing & CRM',
                    tools: [
                      { original: 'Mailchimp', alternative: 'CleverReach (DE)', benefits: 'Deutsche Server, DSGVO-zertifiziert' },
                      { original: 'HubSpot', alternative: 'Pipedrive (EU)', benefits: 'EU-Hosting verfügbar, strenge Compliance' },
                      { original: 'Intercom', alternative: 'Crisp (FR)', benefits: 'EU-basiert, DSGVO-konform' }
                    ],
                    color: 'green'
                  },
                  {
                    category: 'Video & Content',
                    tools: [
                      { original: 'YouTube Embed', alternative: 'Vimeo Pro (EU)', benefits: 'Erweiterte Privacy-Einstellungen' },
                      { original: 'Google Fonts', alternative: 'Self-hosted Fonts', benefits: 'Keine Drittanbieter-Requests' },
                      { original: 'reCAPTCHA', alternative: 'hCaptcha (EU)', benefits: 'EU-Hosting, Privacy-fokussiert' }
                    ],
                    color: 'purple'
                  }
                ].map(category => `
                  <div class="bg-${category.color}-500/10 rounded-lg p-6 border border-${category.color}-500/20">
                    <h4 class="text-${category.color}-300 font-bold text-lg mb-4">${category.category}</h4>
                    <div class="space-y-4">
                      ${category.tools.map(tool => `
                        <div class="bg-slate-800/60 rounded p-4">
                          <div class="flex items-center justify-between mb-2">
                            <div class="text-red-400 font-medium">${tool.original}</div>
                            <div class="text-slate-400">→</div>
                            <div class="text-green-400 font-medium">${tool.alternative}</div>
                          </div>
                          <div class="text-slate-300 text-sm">${tool.benefits}</div>
                        </div>
                      `).join('')}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </div>
      `
    }
  ];

  const filteredChapters = chapters;

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Einsteiger': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100';
      case 'Fortgeschritten': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100';
      case 'Experte': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-100';
    }
  };

  useEffect(() => {
    setIsReading(true);
    const timer = setTimeout(() => setIsReading(false), 3000);
    return () => clearTimeout(timer);
  }, [currentChapter]);

  useEffect(() => {
    const progress = Math.min((currentChapter + 1) / chapters.length * 100, 100);
    setReadingProgress(progress);
  }, [currentChapter, chapters.length]);

  const handleChapterComplete = () => {
    if (!completedChapters.includes(currentChapter)) {
      setCompletedChapters([...completedChapters, currentChapter]);
    }
  };

  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      handleChapterComplete();
      setCurrentChapter(currentChapter + 1);
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
    }
  };

  const currentChapterData = chapters[currentChapter];

  return (
    <>
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        canonical="/wissen/leitfaden/website-dsgvo"
        ogImage="/images/website-dsgvo-guide.jpg"
        ogType="article"
        structuredData={[seoData.structuredData, seoData.breadcrumbStructuredData]}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative py-20"
      >
        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-12">
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-6 border border-purple-500/20"
            >
              <Globe className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">Website DSGVO Guide</span>
              <Shield className="h-5 w-5 text-pink-400" />
            </motion.div>
            
            {/* Breadcrumbs for SEO */}
            <nav aria-label="Breadcrumb" className="mb-6">
              <ol className="flex items-center justify-center space-x-2 text-sm">
                <li>
                  <Link to="/" className="text-slate-400 hover:text-purple-400 transition-colors">Home</Link>
                </li>
                <li className="text-slate-600">/</li>
                <li>
                  <Link to="/wissen" className="text-slate-400 hover:text-purple-400 transition-colors">Wissen</Link>
                </li>
                <li className="text-slate-600">/</li>
                <li>
                  <Link to="/wissen/leitfaden" className="text-slate-400 hover:text-purple-400 transition-colors">Leitfäden</Link>
                </li>
                <li className="text-slate-600">/</li>
                <li className="text-purple-300" aria-current="page">Website DSGVO</li>
              </ol>
            </nav>
            
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
              <span className="text-white">Website</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                DSGVO-konform
              </span>
              <br />
              <span className="text-white">gestalten</span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Cookie-Banner, Privacy Policy, Analytics und mehr - <span className="font-semibold text-purple-300">rechtssicher umsetzen</span> 
              und teure Abmahnungen vermeiden.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-pink-500/20 text-pink-300 border-pink-500/30">
                <Target className="h-3 w-3 mr-1" />
                Fortgeschritten
              </Badge>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Progress Bar */}
      <div className="sticky top-16 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50">
        <div className="container mx-auto max-w-4xl px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm text-slate-400">
              Kapitel {currentChapter + 1} von {chapters.length}
            </div>
            <div className="text-sm text-slate-400">
              {Math.round(readingProgress)}% abgeschlossen
            </div>
          </div>
          <Progress value={readingProgress} className="h-2" />
        </div>
      </div>

      {/* Chapter Navigation */}
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24" style={{ maxHeight: 'calc(100vh - 8rem)', overflowY: 'auto' }}>
              <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 h-fit">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-4">Inhaltsverzeichnis</h3>
                  <div className="space-y-2 max-h-[calc(100vh-16rem)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-slate-800">
                    {chapters.map((chapter, index) => (
                      <motion.button
                        key={chapter.id}
                        whileHover={{ x: 4 }}
                        onClick={() => setCurrentChapter(index)}
                        className={cn(
                          "w-full text-left p-3 rounded-lg transition-all duration-200 border",
                          currentChapter === index
                            ? "bg-purple-500/20 border-purple-500/50 text-purple-300"
                            : "border-slate-700/50 text-slate-400 hover:bg-slate-700/50 hover:text-slate-300"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <div className={cn(
                            "w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold",
                            completedChapters.includes(index)
                              ? "bg-green-500 text-white"
                              : currentChapter === index
                              ? "bg-purple-500 text-white"
                              : "bg-slate-600 text-slate-400"
                          )}>
                            {completedChapters.includes(index) ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : (
                              index + 1
                            )}
                          </div>
                          <div>
                            <div className="font-medium text-sm">{chapter.title}</div>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 mb-8">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{currentChapterData.title}</h2>
                    <p className="text-slate-400">{currentChapterData.subtitle}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-400" />
                    <span className="text-sm text-slate-400">Kapitel {currentChapter + 1}</span>
                  </div>
                </div>

                <div 
                  ref={contentRef}
                  className="prose prose-invert prose-slate max-w-none overflow-x-hidden"
                  dangerouslySetInnerHTML={{ __html: currentChapterData.content }}
                />

                {/* Chapter Navigation */}
                <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-700/50">
                  <Button
                    variant="outline"
                    onClick={prevChapter}
                    disabled={currentChapter === 0}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Vorheriges Kapitel
                  </Button>

                  <div className="flex items-center gap-4">
                    <Button
                      variant="outline"
                      onClick={handleChapterComplete}
                      className={cn(
                        "border-slate-600",
                        completedChapters.includes(currentChapter)
                          ? "bg-green-500/20 border-green-500 text-green-300"
                          : "text-slate-300 hover:bg-slate-700"
                      )}
                    >
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      {completedChapters.includes(currentChapter) ? 'Abgeschlossen' : 'Als abgeschlossen markieren'}
                    </Button>

                    <Button
                      variant="ghost"
                      onClick={() => setBookmarked(!bookmarked)}
                      className="text-slate-400 hover:text-yellow-400"
                    >
                      <Bookmark className={cn("h-4 w-4", bookmarked && "fill-current text-yellow-400")} />
                    </Button>
                  </div>

                  <Button
                    onClick={nextChapter}
                    disabled={currentChapter === chapters.length - 1}
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
                  >
                    Nächstes Kapitel
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Related Guides */}
            <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Weiterführende DSGVO-Leitfäden</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      title: 'DSGVO in 30 Tagen umsetzen',
                      desc: 'Komplette Implementation in einem Monat',
                      link: '/wissen/leitfaden/dsgvo-30-tage',
                      color: 'from-blue-500 to-indigo-500'
                    },
                    {
                      title: 'Data Breach Notfallplan',
                      desc: '72h-Response bei Datenschutzverletzungen',
                      link: '/wissen/leitfaden/data-breach-notfall',
                      color: 'from-red-500 to-pink-500'
                    }
                  ].map((guide, index) => (
                    <Link
                      key={index}
                      to={guide.link}
                      className="block p-4 bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-slate-500 transition-colors group"
                      aria-label={`Weiterlesen: ${guide.title}`}
                    >
                      <div className={cn("w-full h-2 rounded-full bg-gradient-to-r mb-3", guide.color)} />
                      <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors">{guide.title}</h4>
                      <p className="text-slate-400 text-sm">{guide.desc}</p>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* FAQ Schema for better SEO */}
            <Card className="bg-slate-800/80 backdrop-blur-sm border-slate-700/50 mt-6">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-white mb-4">Häufig gestellte Fragen zur Website-DSGVO</h3>
                <div className="space-y-4">
                  <div className="border-b border-slate-700 pb-4">
                    <h4 className="font-medium text-white mb-2">Muss jede Website ein Cookie-Banner haben?</h4>
                    <p className="text-slate-400 text-sm">Nein, nur Websites die nicht-technisch notwendige Cookies verwenden benötigen ein Cookie-Banner mit aktiver Einwilligung.</p>
                  </div>
                  <div className="border-b border-slate-700 pb-4">
                    <h4 className="font-medium text-white mb-2">Wie lange habe ich Zeit für die DSGVO-Umsetzung?</h4>
                    <p className="text-slate-400 text-sm">Die DSGVO gilt seit Mai 2018. Die Umsetzung sollte unverzüglich erfolgen, da bei Verstößen Bußgelder drohen.</p>
                  </div>
                  <div className="pb-4">
                    <h4 className="font-medium text-white mb-2">Was kostet eine DSGVO-konforme Website?</h4>
                    <p className="text-slate-400 text-sm">Die Kosten variieren je nach Komplexität. Ein Cookie-Banner kostet ca. 10-50€/Monat, professionelle Beratung 500-5000€.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          'mainEntity': [
            {
              '@type': 'Question',
              'name': 'Muss jede Website ein Cookie-Banner haben?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Nein, nur Websites die nicht-technisch notwendige Cookies verwenden benötigen ein Cookie-Banner mit aktiver Einwilligung.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Wie lange habe ich Zeit für die DSGVO-Umsetzung?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Die DSGVO gilt seit Mai 2018. Die Umsetzung sollte unverzüglich erfolgen, da bei Verstößen Bußgelder drohen.'
              }
            },
            {
              '@type': 'Question',
              'name': 'Was kostet eine DSGVO-konforme Website?',
              'acceptedAnswer': {
                '@type': 'Answer',
                'text': 'Die Kosten variieren je nach Komplexität. Ein Cookie-Banner kostet ca. 10-50€/Monat, professionelle Beratung 500-5000€.'
              }
            }
          ]
        })}
      </script>

      <Footer />
    </div>
  );
};

export default WebsiteDsgvoGuide;