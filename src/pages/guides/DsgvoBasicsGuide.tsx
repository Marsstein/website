import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
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
  Circle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DsgvoBasicsGuide: React.FC = () => {
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
      title: 'Was ist die DSGVO?',
      subtitle: 'Grundlagen, Geschichte und rechtlicher Rahmen',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-4 lg:p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-blue-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-blue-300">Offizielle Definition</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-4">
              Die <strong>Datenschutz-Grundverordnung (DSGVO)</strong> oder auf Englisch <strong>General Data Protection Regulation (GDPR)</strong> 
              ist eine Verordnung der Europäischen Union (EU) zur Vereinheitlichung der Regeln zur Verarbeitung personenbezogener Daten 
              durch natürliche und juristische Personen.
            </p>
            <div class="bg-blue-500/5 rounded-lg p-4 border-l-4 border-blue-500">
              <p class="text-slate-300 italic">
                "Verordnung (EU) 2016/679 des Europäischen Parlaments und des Rates vom 27. April 2016 zum Schutz natürlicher Personen 
                bei der Verarbeitung personenbezogener Daten, zum freien Datenverkehr und zur Aufhebung der Richtlinie 95/46/EG"
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <div class="p-2 bg-green-500 rounded-lg">
                  <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                Wichtige Eckdaten
              </h3>
              <div class="space-y-3">
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <div class="text-green-400 font-semibold">Inkrafttreten:</div>
                  <div class="text-slate-300">25. Mai 2016</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <div class="text-green-400 font-semibold">Anwendung seit:</div>
                  <div class="text-slate-300">25. Mai 2018</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <div class="text-green-400 font-semibold">Artikel:</div>
                  <div class="text-slate-300">99 Artikel in 11 Kapiteln</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <div class="text-green-400 font-semibold">Geltungsbereich:</div>
                  <div class="text-slate-300">Alle 27 EU-Mitgliedstaaten + EWR</div>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <div class="p-2 bg-purple-500 rounded-lg">
                  <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                Historischer Kontext
              </h3>
              <div class="bg-slate-800/60 rounded-lg p-4 space-y-3">
                <div class="text-purple-400 font-semibold">Vor der DSGVO:</div>
                <ul class="text-slate-300 space-y-2 ml-4">
                  <li class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    EU-Datenschutzrichtlinie 95/46/EG von 1995
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    28 verschiedene nationale Umsetzungen
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    Fragmentierter Rechtsrahmen
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                    Schwache Durchsetzung und niedrige Bußgelder
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h3 class="text-3xl font-bold text-white">Die vier Hauptziele der DSGVO</h3>
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="p-3 bg-green-500 rounded-xl">
                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
                <h4 class="font-bold text-white text-lg">1. Bürgerschutz revolutionieren</h4>
              </div>
              <p class="text-slate-300 mb-4 leading-relaxed">
                Stärkung der Rechte von EU-Bürgern mit konkreten, durchsetzbaren Ansprüchen.
              </p>
              <div class="space-y-3">
                <div class="bg-green-500/5 rounded-lg p-3 border-l-4 border-green-500">
                  <div class="font-semibold text-green-300 mb-2">Neue Betroffenenrechte:</div>
                  <ul class="text-slate-400 text-sm space-y-1">
                    <li>✓ Recht auf Vergessenwerden (Art. 17)</li>
                    <li>✓ Datenportabilität (Art. 20)</li>
                    <li>✓ Widerspruch gegen Profiling (Art. 22)</li>
                    <li>✓ Schadenersatz bei Verstößen (Art. 82)</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="p-3 bg-blue-500 rounded-xl">
                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 class="font-bold text-white text-lg">2. Rechtliche Harmonisierung</h4>
              </div>
              <p class="text-slate-300 mb-4 leading-relaxed">
                Ein einheitliches Datenschutzrecht für den digitalen EU-Binnenmarkt.
              </p>
              <div class="bg-blue-500/5 rounded-lg p-3 border-l-4 border-blue-500">
                <div class="font-semibold text-blue-300 mb-2">Vorher vs. Nachher:</div>
                <div class="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <div class="text-red-400 font-medium">Vorher:</div>
                    <div class="text-slate-400">28 verschiedene Gesetze</div>
                  </div>
                  <div>
                    <div class="text-green-400 font-medium">Nachher:</div>
                    <div class="text-slate-400">1 einheitliche Verordnung</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="p-3 bg-purple-500 rounded-xl">
                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 class="font-bold text-white text-lg">3. Durchsetzung mit Zähnen</h4>
              </div>
              <p class="text-slate-300 mb-4 leading-relaxed">
                Drastisch erhöhte Bußgelder sorgen für ernsthafte Beachtung.
              </p>
              <div class="bg-purple-500/5 rounded-lg p-3 border-l-4 border-purple-500">
                <div class="font-semibold text-purple-300 mb-2">Bußgeld-Kategorien:</div>
                <div class="space-y-2 text-sm">
                  <div class="text-slate-400">Kategorie 1: Bis zu <span class="text-orange-400 font-semibold">10 Mio. € oder 2% des Jahresumsatzes</span></div>
                  <div class="text-slate-400">Kategorie 2: Bis zu <span class="text-red-400 font-semibold">20 Mio. € oder 4% des Jahresumsatzes</span></div>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="p-3 bg-orange-500 rounded-xl">
                  <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"></path>
                  </svg>
                </div>
                <h4 class="font-bold text-white text-lg">4. Globaler Geltungsbereich</h4>
              </div>
              <p class="text-slate-300 mb-4 leading-relaxed">
                Weltweite Anwendung bei Verarbeitung von EU-Bürgerdaten.
              </p>
              <div class="bg-orange-500/5 rounded-lg p-3 border-l-4 border-orange-500">
                <div class="font-semibold text-orange-300 mb-2">Betroffene Unternehmen:</div>
                <div class="text-slate-400 text-sm space-y-1">
                  <div>• US-Tech-Giganten (Google, Facebook, etc.)</div>
                  <div>• Asiatische E-Commerce-Plattformen</div>
                  <div>• Jede Website mit EU-Besuchern</div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-indigo-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              Struktureller Aufbau der DSGVO
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              ${[
                { kapitel: 'I', title: 'Allgemeine Bestimmungen', artikel: 'Art. 1-4', beschreibung: 'Sachlicher und räumlicher Anwendungsbereich, Begriffsbestimmungen' },
                { kapitel: 'II', title: 'Grundsätze', artikel: 'Art. 5-11', beschreibung: 'Rechtmäßigkeit, Transparenz, Zweckbindung, Datenminimierung' },
                { kapitel: 'III', title: 'Betroffenenrechte', artikel: 'Art. 12-23', beschreibung: 'Auskunft, Berichtigung, Löschung, Widerspruch, Portabilität' },
                { kapitel: 'IV', title: 'Verantwortlicher/Auftragsverarbeiter', artikel: 'Art. 24-43', beschreibung: 'Pflichten, Datenschutz-Folgenabschätzung, Datenschutzbeauftragte' },
                { kapitel: 'V', title: 'Datenübermittlung Drittländer', artikel: 'Art. 44-49', beschreibung: 'Angemessenheitsbeschlüsse, Standardvertragsklauseln' },
                { kapitel: 'VI', title: 'Unabhängige Aufsichtsbehörden', artikel: 'Art. 51-59', beschreibung: 'Einrichtung, Unabhängigkeit, Aufgaben und Befugnisse' },
                { kapitel: 'VII', title: 'Zusammenarbeit und Kohärenz', artikel: 'Art. 60-76', beschreibung: 'One-Stop-Shop, Kohärenzverfahren, Europäischer Datenschutzausschuss' },
                { kapitel: 'VIII', title: 'Rechtsbehelfe, Haftung, Sanktionen', artikel: 'Art. 77-84', beschreibung: 'Beschwerderecht, Schadenersatz, Bußgelder' },
                { kapitel: 'IX-XI', title: 'Sondervorschriften', artikel: 'Art. 85-99', beschreibung: 'Meinungs-/Informationsfreiheit, Verarbeitung zu besonderen Zwecken' }
              ].map(item => `
                <div class="bg-slate-800/60 rounded-lg p-4 border border-slate-700/50">
                  <div class="text-indigo-400 font-bold text-lg mb-1">Kapitel ${item.kapitel}</div>
                  <div class="text-white font-semibold mb-2">${item.title}</div>
                  <div class="text-indigo-300 text-sm mb-2">${item.artikel}</div>
                  <div class="text-slate-400 text-sm">${item.beschreibung}</div>
                </div>
              `).join('')}
            </div>
          </div>

          <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-3 bg-yellow-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-yellow-300">Territorialer Anwendungsbereich (Art. 3)</h3>
            </div>
            <div class="space-y-4">
              <p class="text-slate-300 leading-relaxed">
                Die DSGVO gilt <strong>nicht nur für EU-Unternehmen</strong>, sondern für alle Organisationen weltweit, 
                die unter die folgenden Kriterien fallen:
              </p>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                <div class="bg-yellow-500/5 rounded-lg p-4 border-l-4 border-yellow-500">
                  <div class="text-yellow-300 font-semibold mb-2">Niederlassungsprinzip (Art. 3 Abs. 1):</div>
                  <div class="text-slate-400 text-sm">
                    Verarbeitung personenbezogener Daten durch eine Niederlassung eines Verantwortlichen oder 
                    Auftragsverarbeiters in der Union.
                  </div>
                </div>
                <div class="bg-orange-500/5 rounded-lg p-4 border-l-4 border-orange-500">
                  <div class="text-orange-300 font-semibold mb-2">Marktortprinzip (Art. 3 Abs. 2):</div>
                  <div class="text-slate-400 text-sm space-y-1">
                    <div>a) Angebot von Waren/Dienstleistungen an Betroffene in der EU</div>
                    <div>b) Beobachtung des Verhaltens von Personen in der EU</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 1,
      title: 'Die 7 Grundprinzipien',
      subtitle: 'Art. 5 DSGVO - Das Fundament des Datenschutzes',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div class="p-2 bg-blue-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              Das Herzstück der DSGVO
            </h3>
            <p class="text-xl text-slate-300 leading-relaxed mb-4">
              Artikel 5 der DSGVO definiert sieben fundamentale Grundsätze, die bei <strong>jeder einzelnen Verarbeitung</strong> 
              personenbezogener Daten eingehalten werden müssen. Diese Prinzipien sind nicht verhandelbar.
            </p>
            <div class="bg-blue-500/5 rounded-lg p-4 border-l-4 border-blue-500">
              <p class="text-slate-300 italic">
                „Personenbezogene Daten müssen auf rechtmäßige Weise, nach Treu und Glauben und in einer 
                für die betroffene Person nachvollziehbaren Weise verarbeitet werden.“ - Art. 5 Abs. 1 lit. a DSGVO
              </p>
            </div>
          </div>

          <div class="space-y-8">
            <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  1
                </div>
                <div class="flex-grow">
                  <h4 class="text-2xl font-bold text-white mb-4">Rechtmäßigkeit, Treu und Glauben, Transparenz</h4>
                  <p class="text-slate-300 mb-6 text-lg leading-relaxed">
                    Die Verarbeitung muss auf einer der sechs Rechtsgrundlagen des Art. 6 basieren, 
                    ethisch vertretbar sein und für Betroffene nachvollziehbar dokumentiert werden.
                  </p>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-6">
                    <div class="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                      <div class="text-blue-300 font-semibold mb-2">Rechtmäßigkeit</div>
                      <div class="text-slate-400 text-sm">
                        Genaue Rechtsgrundlage aus Art. 6 DSGVO identifizieren und dokumentieren
                      </div>
                    </div>
                    <div class="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                      <div class="text-cyan-300 font-semibold mb-2">Treu und Glauben</div>
                      <div class="text-slate-400 text-sm">
                        Faire Verarbeitung ohne Missbrauch des Vertrauensverhältnisses
                      </div>
                    </div>
                    <div class="bg-blue-400/10 rounded-lg p-4 border border-blue-400/20">
                      <div class="text-blue-400 font-semibold mb-2">Transparenz</div>
                      <div class="text-slate-400 text-sm">
                        Klare, verständliche Information über alle Verarbeitungsvorgänge
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-blue-500/5 rounded-lg p-4 border-l-4 border-blue-500">
                    <div class="font-semibold text-blue-300 mb-2">Praktische Umsetzung:</div>
                    <ul class="text-slate-400 text-sm space-y-1">
                      <li>✓ Verständliche Datenschutzerklärung ohne Juristendeutsch</li>
                      <li>✓ Verwendungszweck vor Datenerhebung erklären</li>
                      <li>✓ Keine versteckten Datenverarbeitungen</li>
                      <li>✓ Regelmäßige Prüfung der Rechtsgrundlage</li>
                    </ul>
                  </div>
                  
                  <div class="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <div class="text-red-300 font-semibold mb-2">⚠️ Häufige Fallstricke:</div>
                    <ul class="text-slate-400 text-sm space-y-1">
                      <li>• Unklare oder mehrdeutige Datenschutzerklärungen</li>
                      <li>• Nachträgliche Änderung des Verwendungszwecks ohne Information</li>
                      <li>• Versteckte Datensammlung durch Cookies oder Tracking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  2
                </div>
                <div class="flex-grow">
                  <h4 class="text-2xl font-bold text-white mb-4">Zweckbindung (Purpose Limitation)</h4>
                  <p class="text-slate-300 mb-6 text-lg leading-relaxed">
                    Daten dürfen nur für die ursprünglich festgelegten, eindeutigen und legitimen Zwecke 
                    verarbeitet werden. Zweckänderungen sind nur unter strengen Voraussetzungen erlaubt.
                  </p>
                  
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
                    <div class="space-y-4">
                      <div class="text-green-300 font-semibold text-lg">Erlaubte Zwecke:</div>
                      <div class="space-y-3">
                        <div class="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                          <div class="text-green-300 font-medium">Festgelegt</div>
                          <div class="text-slate-400 text-sm">Klar definiert, nicht vage formuliert</div>
                        </div>
                        <div class="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                          <div class="text-green-300 font-medium">Eindeutig</div>
                          <div class="text-slate-400 text-sm">Keine Mehrdeutigkeit oder Interpretationsspielraum</div>
                        </div>
                        <div class="bg-green-500/10 rounded-lg p-3 border border-green-500/20">
                          <div class="text-green-300 font-medium">Legitim</div>
                          <div class="text-slate-400 text-sm">Rechtlich und ethisch vertretbar</div>
                        </div>
                      </div>
                    </div>
                    
                    <div class="space-y-4">
                      <div class="text-red-300 font-semibold text-lg">Zweckänderung prüfen:</div>
                      <div class="bg-slate-800/60 rounded-lg p-4">
                        <div class="text-slate-300 font-medium mb-3">Kompatibilitätstest (Art. 6 Abs. 4):</div>
                        <ul class="text-slate-400 text-sm space-y-2">
                          <li>1. Verbindung zwischen ursprünglichem und neuem Zweck</li>
                          <li>2. Kontext der Datenerhebung</li>
                          <li>3. Art der personenbezogenen Daten</li>
                          <li>4. Mögliche Folgen für Betroffene</li>
                          <li>5. Geeignete Garantien</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-green-500/5 rounded-lg p-4 border-l-4 border-green-500">
                    <div class="font-semibold text-green-300 mb-2">Praxis-Beispiele:</div>
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                      <div>
                        <div class="text-green-400 font-medium mb-1">✓ Zulässig:</div>
                        <div class="text-slate-400 text-sm">
                          Newsletter-Daten für Produktankündigungen der gleichen Kategorie
                        </div>
                      </div>
                      <div>
                        <div class="text-red-400 font-medium mb-1">✗ Unzulässig:</div>
                        <div class="text-slate-400 text-sm">
                          Kunden-E-Mails für Werbung von Drittunternehmen verkaufen
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  3
                </div>
                <div class="flex-grow">
                  <h4 class="text-2xl font-bold text-white mb-4">Datenminimierung (Data Minimisation)</h4>
                  <p class="text-slate-300 mb-6 text-lg leading-relaxed">
                    Nur die Daten erheben und verarbeiten, die für den angegebenen Zweck 
                    <strong>tatsächlich erforderlich</strong> sind. „Nice to have“ reicht nicht!
                  </p>
                  
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-6">
                    <div class="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                      <div class="text-purple-300 font-semibold mb-2">Dem Zweck angemessen</div>
                      <div class="text-slate-400 text-sm">
                        Daten müssen in Relation zum Verarbeitungszweck stehen
                      </div>
                    </div>
                    <div class="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20">
                      <div class="text-pink-300 font-semibold mb-2">Erheblich</div>
                      <div class="text-slate-400 text-sm">
                        Daten müssen wichtig für die Zweckerreichung sein
                      </div>
                    </div>
                    <div class="bg-purple-400/10 rounded-lg p-4 border border-purple-400/20">
                      <div class="text-purple-400 font-semibold mb-2">Begrenzt</div>
                      <div class="text-slate-400 text-sm">
                        Nur das Minimum an erforderlichen Daten
                      </div>
                    </div>
                  </div>
                  
                  <div class="bg-slate-800/60 rounded-lg p-6 mb-6">
                    <h5 class="text-lg font-semibold text-white mb-4">Praktisches Vorgehen:</h5>
                    <div class="space-y-4">
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">1</div>
                        <div>
                          <div class="text-purple-300 font-medium">Zweck genau definieren</div>
                          <div class="text-slate-400 text-sm">Was genau soll erreicht werden?</div>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">2</div>
                        <div>
                          <div class="text-purple-300 font-medium">Erforderliche Daten identifizieren</div>
                          <div class="text-slate-400 text-sm">Welche Daten sind wirklich nötig?</div>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">3</div>
                        <div>
                          <div class="text-purple-300 font-medium">Erhebung auf Minimum reduzieren</div>
                          <div class="text-slate-400 text-sm">Alle „nice-to-have“ Felder entfernen</div>
                        </div>
                      </div>
                      <div class="flex items-start gap-3">
                        <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">4</div>
                        <div>
                          <div class="text-purple-300 font-medium">Regelmäßig überprüfen</div>
                          <div class="text-slate-400 text-sm">Sind alle erhobenen Daten noch erforderlich?</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                    <div class="bg-green-500/5 rounded-lg p-4 border-l-4 border-green-500">
                      <div class="text-green-300 font-semibold mb-2">✓ Gute Praxis:</div>
                      <ul class="text-slate-400 text-sm space-y-1">
                        <li>• Online-Shop: Name, Adresse, E-Mail für Bestellung</li>
                        <li>• Newsletter: Nur E-Mail-Adresse</li>
                        <li>• Kontaktformular: Nur relevante Felder</li>
                      </ul>
                    </div>
                    <div class="bg-red-500/5 rounded-lg p-4 border-l-4 border-red-500">
                      <div class="text-red-300 font-semibold mb-2">✗ Problematisch:</div>
                      <ul class="text-slate-400 text-sm space-y-1">
                        <li>• Geburtsdatum für Newsletter-Anmeldung</li>
                        <li>• Telefonnummer für E-Book-Download</li>
                        <li>• Adresse für rein digitale Services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-red-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-red-300">Alle 7 Grundsätze sind verpflichtend!</h3>
            </div>
            <div class="space-y-4">
              <p class="text-slate-300 text-lg leading-relaxed">
                Diese Grundsätze sind <strong>nicht optional oder verhandelbar</strong>! Sie bilden das absolute 
                Fundament der DSGVO und müssen bei jeder einzelnen Datenverarbeitung eingehalten werden.
              </p>
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <div class="bg-red-500/5 rounded-lg p-4 border-l-4 border-red-500">
                  <div class="text-red-300 font-semibold mb-2">Konsequenzen bei Verstößen:</div>
                  <ul class="text-slate-400 text-sm space-y-1">
                    <li>• Bußgelder bis 20 Mio. € oder 4% des Jahresumsatzes</li>
                    <li>• Anordnung zur Verarbeitungseinstellung</li>
                    <li>• Schadenersatzforderungen von Betroffenen</li>
                    <li>• Reputationsschäden und Vertrauensverlust</li>
                  </ul>
                </div>
                <div class="bg-orange-500/5 rounded-lg p-4 border-l-4 border-orange-500">
                  <div class="text-orange-300 font-semibold mb-2">Best Practice Tipp:</div>
                  <div class="text-slate-400 text-sm">
                    Erstellen Sie für jede Verarbeitungstätigkeit eine Checkliste aller 7 Grundsätze 
                    und prüfen Sie diese regelmäßig. Dokumentieren Sie Ihre Compliance!
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6">
            <h3 class="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <div class="p-2 bg-indigo-500 rounded-lg">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              Quick Reference: Die 7 Grundsätze im Überblick
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              ${[
                { num: '1', name: 'Rechtmäßigkeit', color: 'blue' },
                { num: '2', name: 'Zweckbindung', color: 'green' },
                { num: '3', name: 'Datenminimierung', color: 'purple' },
                { num: '4', name: 'Richtigkeit', color: 'orange' },
                { num: '5', name: 'Speicherbegrenzung', color: 'red' },
                { num: '6', name: 'Sicherheit', color: 'indigo' },
                { num: '7', name: 'Rechenschaftspflicht', color: 'teal' }
              ].map(item => `
                <div class="bg-${item.color}-500/10 border border-${item.color}-500/20 rounded-lg p-3 text-center">
                  <div class="text-${item.color}-400 font-bold text-lg">${item.num}</div>
                  <div class="text-slate-300 text-sm font-medium">${item.name}</div>
                </div>
              `).join('')}
            </div>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: 'Rechtsgrundlagen Art. 6',
      subtitle: 'Die 6 Erlaubnistatbestände für Datenverarbeitung',
      content: `
        <div class="space-y-6">
          <p class="text-xl text-slate-300 leading-relaxed">
            Bevor Sie personenbezogene Daten verarbeiten können, brauchen Sie eine <strong>Rechtsgrundlage</strong>. 
            Artikel 6 DSGVO nennt sechs mögliche Rechtsgrundlagen.
          </p>

          <div class="grid gap-4">
            ${[
              {
                letter: 'a',
                title: 'Einwilligung',
                description: 'Die betroffene Person hat ausdrücklich eingewilligt.',
                usage: '45%',
                examples: ['Newsletter-Anmeldung', 'Cookie-Consent', 'Marketing-Einwilligung'],
                pros: ['Einfach verständlich', 'Hohe Legitimation'],
                cons: ['Kann jederzeit widerrufen werden', 'Nachweis erforderlich'],
                color: 'green'
              },
              {
                letter: 'b',
                title: 'Vertragserfüllung',
                description: 'Verarbeitung ist zur Erfüllung eines Vertrags erforderlich.',
                usage: '30%',
                examples: ['Kundendaten für Bestellung', 'Rechnungserstellung', 'Lieferung'],
                pros: ['Stabil', 'Geschäftlich notwendig'],
                cons: ['Nur für Vertragszwecke', 'Zweckbindung'],
                color: 'blue'
              },
              {
                letter: 'c',
                title: 'Rechtliche Verpflichtung',
                description: 'Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich.',
                usage: '15%',
                examples: ['Steuerliche Aufbewahrung', 'Geldwäscheprävention', 'Sozialversicherung'],
                pros: ['Gesetzlich vorgeschrieben', 'Keine Wahl'],
                cons: ['Streng zweckgebunden', 'Nur für gesetzliche Zwecke'],
                color: 'purple'
              },
              {
                letter: 'f',
                title: 'Berechtigtes Interesse',
                description: 'Verarbeitung ist zur Wahrung berechtigter Interessen erforderlich.',
                usage: '8%',
                examples: ['Direktwerbung', 'IT-Sicherheit', 'Betrugsbekämpfung'],
                pros: ['Flexibel einsetzbar', 'Geschäftlich relevant'],
                cons: ['Interessenabwägung nötig', 'Widerspruchsrecht'],
                color: 'orange'
              }
            ].map(item => `
              <div class="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
                <div class="flex items-start gap-4">
                  <div class="flex-shrink-0 w-12 h-12 bg-${item.color}-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                    ${item.letter}
                  </div>
                  <div class="flex-grow">
                    <div class="flex items-center justify-between mb-2">
                      <h4 class="text-lg font-semibold text-white">${item.title}</h4>
                      <div class="text-sm text-${item.color}-400 font-medium">${item.usage} der Fälle</div>
                    </div>
                    <p class="text-slate-300 mb-4">${item.description}</p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-4">
                      <div>
                        <h5 class="text-sm font-semibold text-slate-200 mb-2">Beispiele:</h5>
                        <ul class="space-y-1">
                          ${item.examples.map(ex => `<li class="text-sm text-slate-300">• ${ex}</li>`).join('')}
                        </ul>
                      </div>
                      <div>
                        <h5 class="text-sm font-semibold text-green-400 mb-2">Vorteile:</h5>
                        <ul class="space-y-1">
                          ${item.pros.map(pro => `<li class="text-sm text-slate-300">✓ ${pro}</li>`).join('')}
                        </ul>
                      </div>
                      <div>
                        <h5 class="text-sm font-semibold text-red-400 mb-2">Nachteile:</h5>
                        <ul class="space-y-1">
                          ${item.cons.map(con => `<li class="text-sm text-slate-300">✗ ${con}</li>`).join('')}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-blue-300 mb-4">💡 Praxis-Tipp: Rechtsgrundlagen dokumentieren</h3>
            <div class="space-y-3">
              <p class="text-slate-300">
                Dokumentieren Sie für jeden Verarbeitungszweck die gewählte Rechtsgrundlage:
              </p>
              <div class="bg-slate-800/60 rounded-lg p-4">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 text-sm">
                  <div>
                    <div class="text-blue-300 font-medium">Zweck</div>
                    <div class="text-slate-300">Newsletter-Versand</div>
                  </div>
                  <div>
                    <div class="text-blue-300 font-medium">Rechtsgrundlage</div>
                    <div class="text-slate-300">Art. 6 Abs. 1 lit. a (Einwilligung)</div>
                  </div>
                  <div>
                    <div class="text-blue-300 font-medium">Nachweis</div>
                    <div class="text-slate-300">Double-Opt-In Protokoll</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: 'Betroffenenrechte',
      subtitle: 'Was müssen Sie gewährleisten?',
      content: `
        <div class="space-y-6">
          <p class="text-xl text-slate-300 leading-relaxed">
            Die DSGVO stärkt die Rechte der betroffenen Personen erheblich. Als Verantwortlicher 
            müssen Sie diese Rechte <strong>kostenfrei und innerhalb eines Monats</strong> erfüllen.
          </p>

          <div class="grid gap-4">
            ${[
              {
                article: 'Art. 15',
                right: 'Auskunftsrecht',
                description: 'Recht auf Auskunft über verarbeitete Daten',
                frequency: 'Sehr häufig',
                complexity: 'Mittel',
                deadline: '1 Monat',
                actions: ['Alle Daten auflisten', 'Verarbeitungszwecke nennen', 'Empfänger benennen', 'Speicherdauer angeben']
              },
              {
                article: 'Art. 16',
                right: 'Recht auf Berichtigung',
                description: 'Recht auf Korrektur falscher Daten',
                frequency: 'Häufig',
                complexity: 'Niedrig',
                deadline: '1 Monat',
                actions: ['Falsche Daten korrigieren', 'Empfänger informieren', 'Nachweis dokumentieren']
              },
              {
                article: 'Art. 17',
                right: 'Recht auf Löschung',
                description: 'Recht auf Löschung ("Recht auf Vergessenwerden")',
                frequency: 'Häufig',
                complexity: 'Hoch',
                deadline: '1 Monat',
                actions: ['Löschpflicht prüfen', 'Daten löschen', 'Empfänger informieren', 'Backups berücksichtigen']
              },
              {
                article: 'Art. 20',
                right: 'Datenportabilität',
                description: 'Recht auf Datenübertragung',
                frequency: 'Selten',
                complexity: 'Hoch',
                deadline: '1 Monat',
                actions: ['Strukturierte Daten bereitstellen', 'Maschinenlesbares Format', 'Direkte Übertragung ermöglichen']
              }
            ].map(item => `
              <div class="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
                <div class="flex items-start justify-between mb-4">
                  <div>
                    <h4 class="text-lg font-semibold text-white">${item.right}</h4>
                    <p class="text-blue-400 text-sm">${item.article} DSGVO</p>
                  </div>
                  <div class="text-right">
                    <div class="text-sm text-slate-400">Häufigkeit</div>
                    <div class="text-sm font-medium text-slate-200">${item.frequency}</div>
                  </div>
                </div>
                
                <p class="text-slate-300 mb-4">${item.description}</p>
                
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-4">
                  <div class="bg-green-500/10 rounded-lg p-3">
                    <div class="text-green-400 text-sm font-medium">Frist</div>
                    <div class="text-slate-200">${item.deadline}</div>
                  </div>
                  <div class="bg-yellow-500/10 rounded-lg p-3">
                    <div class="text-yellow-400 text-sm font-medium">Komplexität</div>
                    <div class="text-slate-200">${item.complexity}</div>
                  </div>
                  <div class="bg-blue-500/10 rounded-lg p-3">
                    <div class="text-blue-400 text-sm font-medium">Kosten</div>
                    <div class="text-slate-200">Kostenfrei</div>
                  </div>
                </div>

                <div>
                  <h5 class="text-sm font-semibold text-slate-200 mb-2">Erforderliche Maßnahmen:</h5>
                  <ul class="space-y-1">
                    ${item.actions.map(action => `<li class="text-sm text-slate-300 flex items-center gap-2">
                      <svg class="h-4 w-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      ${action}
                    </li>`).join('')}
                  </ul>
                </div>
              </div>
            `).join('')}
          </div>

          <div class="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-red-300 mb-4">⚠️ Rechtliche Konsequenzen</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
              <div>
                <h4 class="font-medium text-white mb-2">Bei Missachtung drohen:</h4>
                <ul class="space-y-1 text-sm text-slate-300">
                  <li>• Bußgelder bis 20 Mio. € oder 4% des Jahresumsatzes</li>
                  <li>• Schadensersatzansprüche</li>
                  <li>• Reputationsschäden</li>
                  <li>• Abmahnungen</li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-white mb-2">Empfohlene Vorbereitung:</h4>
                <ul class="space-y-1 text-sm text-slate-300">
                  <li>• Standardprozesse definieren</li>
                  <li>• Templates erstellen</li>
                  <li>• Systeme vorbereiten</li>
                  <li>• Team schulen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: 'Sanktionen & Bußgelder',
      subtitle: 'Was passiert bei Verstößen?',
      content: `
        <div class="space-y-6">
          <p class="text-xl text-slate-300 leading-relaxed">
            Die DSGVO sieht drakonische Strafen vor. Verstöße können existenzbedrohend werden - 
            daher ist Compliance kein "Nice-to-have", sondern <strong>überlebenswichtig</strong>.
          </p>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            <div class="bg-gradient-to-br from-red-900/40 to-red-800/40 rounded-xl p-6 border border-red-500/30">
              <h3 class="text-xl font-bold text-red-300 mb-4">🚨 Bußgeld-Kategorien</h3>
              <div class="space-y-4">
                <div class="bg-red-500/10 rounded-lg p-4">
                  <h4 class="font-semibold text-red-300 mb-2">Kategorie 1: Bis 10 Mio. €</h4>
                  <p class="text-sm text-slate-300 mb-2">oder 2% des Jahresumsatzes</p>
                  <ul class="text-sm text-slate-300 space-y-1">
                    <li>• Verstöße gegen Verarbeitungsgrundsätze</li>
                    <li>• Missachtung von Betroffenenrechten</li>
                    <li>• Datentransfer-Verstöße</li>
                  </ul>
                </div>
                <div class="bg-red-600/10 rounded-lg p-4">
                  <h4 class="font-semibold text-red-300 mb-2">Kategorie 2: Bis 20 Mio. €</h4>
                  <p class="text-sm text-slate-300 mb-2">oder 4% des Jahresumsatzes</p>
                  <ul class="text-sm text-slate-300 space-y-1">
                    <li>• Verarbeitung ohne Rechtsgrundlage</li>
                    <li>• Verletzung von Design-Prinzipien</li>
                    <li>• Missachtung von Anordnungen</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-slate-800/60 rounded-xl p-6">
              <h3 class="text-xl font-bold text-slate-200 mb-4">📊 Bußgeld-Faktoren</h3>
              <div class="space-y-3">
                ${[
                  { factor: 'Art, Schwere und Dauer', weight: 'Hoch', color: 'red' },
                  { factor: 'Vorsätzlichkeit/Fahrlässigkeit', weight: 'Hoch', color: 'red' },
                  { factor: 'Anzahl betroffener Personen', weight: 'Mittel', color: 'orange' },
                  { factor: 'Höhe des Schadens', weight: 'Mittel', color: 'orange' },
                  { factor: 'Kooperationsbereitschaft', weight: 'Niedrig', color: 'green' },
                  { factor: 'Vorherige Verstöße', weight: 'Hoch', color: 'red' }
                ].map(item => `
                  <div class="flex items-center justify-between">
                    <span class="text-sm text-slate-300">${item.factor}</span>
                    <span class="text-xs px-2 py-1 rounded-full bg-${item.color}-500/20 text-${item.color}-300">${item.weight}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-yellow-300 mb-4">💰 Reale Bußgeld-Beispiele (2024)</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              <div class="bg-slate-800/60 rounded-lg p-4">
                <div class="text-2xl font-bold text-red-400">1,2 Mrd. €</div>
                <div class="text-sm text-slate-300">Meta Ireland (2023)</div>
                <div class="text-xs text-slate-400">Datentransfer in die USA</div>
              </div>
              <div class="bg-slate-800/60 rounded-lg p-4">
                <div class="text-2xl font-bold text-red-400">746 Mio. €</div>
                <div class="text-sm text-slate-300">Amazon (2021)</div>
                <div class="text-xs text-slate-400">Unzulässige Datenverarbeitung</div>
              </div>
              <div class="bg-slate-800/60 rounded-lg p-4">
                <div class="text-2xl font-bold text-red-400">60 Mio. €</div>
                <div class="text-sm text-slate-300">H&M (2020)</div>
                <div class="text-xs text-slate-400">Mitarbeiterüberwachung</div>
              </div>
            </div>
          </div>

          <div class="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 class="text-lg font-semibold text-green-300 mb-4">✅ Schutz vor Bußgeldern</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
              <div>
                <h4 class="font-medium text-white mb-2">Präventive Maßnahmen:</h4>
                <ul class="space-y-1 text-sm text-slate-300">
                  <li class="flex items-center gap-2">
                    <svg class="h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    DSGVO-Compliance systematisch umsetzen
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Regelmäßige Datenschutz-Audits
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Mitarbeiter-Schulungen
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    Datenschutz-Management-System
                  </li>
                </ul>
              </div>
              <div>
                <h4 class="font-medium text-white mb-2">Im Ernstfall:</h4>
                <ul class="space-y-1 text-sm text-slate-300">
                  <li class="flex items-center gap-2">
                    <svg class="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Sofortige Schadensbegrenzung
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Proaktive Kommunikation mit Behörden
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Rechtliche Beratung einholen
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="h-4 w-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Dokumentation aller Maßnahmen
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ];

  // Update reading progress based on scroll
  useEffect(() => {
    const updateProgress = () => {
      const progress = scrollYProgress.get() * 100;
      setReadingProgress(Math.min(progress, 100));
    };

    const unsubscribe = scrollYProgress.onChange(updateProgress);
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Mark chapter as completed when reaching end
  useEffect(() => {
    if (readingProgress > 90 && !completedChapters.includes(currentChapter)) {
      setCompletedChapters(prev => [...prev, currentChapter]);
    }
  }, [readingProgress, currentChapter, completedChapters]);

  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      setReadingProgress(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setReadingProgress(0);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const currentChapterData = chapters[currentChapter];
  const overallProgress = ((currentChapter + (readingProgress / 100)) / chapters.length) * 100;

  return (
    <>
      <SEOHead
        title="DSGVO Grundlagen 2024 – Verständlicher Leitfaden"
        description="DSGVO einfach erklärt: Grundprinzipien, Betroffenenrechte, Dokumentationspflichten & praktische Umsetzung. ✓ Anfängerfreundlich ✓ Mit Checklisten. Jetzt lernen!"
        canonical="/wissen/dsgvo/grundlagen"
        keywords="DSGVO Grundlagen, Datenschutz-Grundverordnung, GDPR Basics, Datenschutz Leitfaden"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" style={{
        wordWrap: 'break-word',
        overflowWrap: 'break-word'
      }}>
        <Header />
      
      {/* Fixed Reading Progress */}
      <div className="fixed top-16 left-0 right-0 z-40 bg-slate-900/90 backdrop-blur-sm border-b border-slate-800">
        <div className="container mx-auto max-w-7xl px-4 py-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-4">
              <Badge className="bg-green-500/20 text-green-300">
                <Shield className="h-3 w-3 mr-1" />
                DSGVO Grundlagen
              </Badge>
              <div className="text-sm text-slate-400">
                Kapitel {currentChapter + 1} von {chapters.length}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-slate-400">
                {Math.round(overallProgress)}% abgeschlossen
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setBookmarked(!bookmarked)}
                  className={bookmarked ? "text-yellow-400" : "text-slate-400"}
                >
                  <Bookmark className={cn("h-4 w-4", bookmarked && "fill-current")} />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
          <Progress value={overallProgress} className="h-2" />
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Chapter Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{currentChapterData.title}</h1>
                <p className="text-xl text-blue-300">{currentChapterData.subtitle}</p>
              </div>
            </div>
            
            {completedChapters.includes(currentChapter) && (
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <CheckCircle className="h-4 w-4" />
                <span>Abgeschlossen</span>
              </div>
            )}
          </motion.div>

          {/* Chapter Navigation Sidebar */}
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-8">
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-40">
                <Card className="bg-slate-800/60 border-slate-700/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-white mb-4">Kapitel</h3>
                    <div className="space-y-3">
                      {chapters.map((chapter, index) => (
                        <button
                          key={chapter.id}
                          onClick={() => setCurrentChapter(index)}
                          className={cn(
                            "w-full text-left p-3 rounded-lg transition-all duration-200",
                            index === currentChapter 
                              ? "bg-blue-500/20 border border-blue-500/30 text-blue-300" 
                              : "hover:bg-slate-700/50 text-slate-300"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                              completedChapters.includes(index) 
                                ? "bg-green-500 text-white"
                                : index === currentChapter
                                ? "bg-blue-500 text-white"
                                : "bg-slate-700 text-slate-400"
                            )}>
                              {completedChapters.includes(index) ? (
                                <CheckCircle className="h-4 w-4" />
                              ) : (
                                index + 1
                              )}
                            </div>
                            <div className="flex-grow">
                              <div className="text-sm font-medium">{chapter.title}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-slate-700">
                      <div className="text-sm text-slate-400 mb-2">Gesamtfortschritt</div>
                      <Progress value={overallProgress} className="h-2 mb-2" />
                      <div className="text-xs text-slate-400">
                        {Math.round(overallProgress)}% abgeschlossen
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Chapter Content */}
            <div className="lg:col-span-3">
              <motion.div
                key={currentChapter}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4 }}
                ref={contentRef}
              >
                <Card className="bg-slate-800/60 border-slate-700/50 mb-8 overflow-hidden">
                  <CardContent className="p-4 lg:p-8">
                    <div 
                      className="prose prose-invert prose-blue max-w-none prose-lg overflow-hidden"
                      style={{
                        wordBreak: 'break-word',
                        overflowWrap: 'break-word',
                        lineHeight: '1.8',
                        maxWidth: '100%',
                        minWidth: '0'
                      }}
                      dangerouslySetInnerHTML={{ __html: currentChapterData.content }}
                    />
                  </CardContent>
                </Card>

                {/* Chapter Navigation */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0">
                  <Button
                    variant="outline"
                    onClick={prevChapter}
                    disabled={currentChapter === 0}
                    className="border-slate-600 text-slate-300 hover:bg-slate-700"
                  >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Vorheriges Kapitel
                  </Button>

                  <div className="flex items-center gap-3 lg:gap-4 order-first lg:order-none">
                    <Badge className="bg-slate-700 text-slate-200">
                      {currentChapter + 1} / {chapters.length}
                    </Badge>
                    {completedChapters.includes(currentChapter) && (
                      <Badge className="bg-green-500/20 text-green-300">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Abgeschlossen
                      </Badge>
                    )}
                  </div>

                  {currentChapter < chapters.length - 1 ? (
                    <Button
                      onClick={nextChapter}
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
                    >
                      Nächstes Kapitel
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      asChild
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                    >
                      <Link to="/wissen/leitfaden/dsgvo-30-tage">
                        Nächster Leitfaden
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Von Theorie zur Praxis
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Jetzt wo Sie die DSGVO-Grundlagen kennen: Setzen Sie Ihr Wissen mit unserer Software in die Praxis um. Automatisierte Compliance statt manuelle Dokumentation.
                  </p>
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={() => window.location.href = '/features'}
                  >
                    Software-Features ansehen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
};

export default DsgvoBasicsGuide;