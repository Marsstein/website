import React, { useState, useEffect, useRef } from 'react';
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
  UserCheck,
  Edit3,
  Trash2,
  FileDown,
  Search,
  UserX,
  Settings,
  Database,
  Mail,
  Phone,
  AlertOctagon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const BetroffenenrechteGuide: React.FC = () => {
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
      title: 'Übersicht & Grundlagen',
      subtitle: 'Die 8 zentralen Betroffenenrechte',
      readTime: '10 Min',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-4 lg:p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-blue-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-blue-300">Paradigmenwechsel im Datenschutz</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-4">
              Die DSGVO hat einen fundamentalen Wandel eingeleitet: <strong>Datenhoheit liegt bei den Betroffenen</strong>, 
              nicht bei den Unternehmen. Personen haben konkrete, durchsetzbare Ansprüche auf Transparenz, Kontrolle und 
              Selbstbestimmung über ihre Daten.
            </p>
            <div class="bg-blue-500/5 rounded-lg p-4 border-l-4 border-blue-500">
              <p class="text-slate-300 italic">
                "Die Grundsätze und Vorschriften zum Schutz natürlicher Personen bei der Verarbeitung ihrer personenbezogenen 
                Daten sollten gewährleisten, dass ihre Grundrechte und Grundfreiheiten [...] gewahrt bleiben." 
                - Erwägungsgrund 2 DSGVO
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
                Zentrale Charakteristika
              </h3>
              <div class="space-y-3">
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <div class="text-green-400 font-semibold">Kostenfrei</div>
                  <div class="text-slate-300">Alle Rechte müssen unentgeltlich erfüllt werden</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <div class="text-green-400 font-semibold">Fristgebunden</div>
                  <div class="text-slate-300">Standard: 1 Monat, max. 3 Monate bei Komplexität</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <div class="text-green-400 font-semibold">Schriftlich</div>
                  <div class="text-slate-300">Anträge und Antworten dokumentiert</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <div class="text-green-400 font-semibold">Extraterritorial</div>
                  <div class="text-slate-300">Gilt auch für Nicht-EU-Unternehmen</div>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <div class="p-2 bg-purple-500 rounded-lg">
                  <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                Die 8 Betroffenenrechte
              </h3>
              <div class="grid grid-cols-1 gap-2">
                ${[
                  { art: '13/14', name: 'Informationsrecht', icon: 'info' },
                  { art: '15', name: 'Auskunftsrecht', icon: 'search' },
                  { art: '16', name: 'Berichtigungsrecht', icon: 'edit' },
                  { art: '17', name: 'Löschungsrecht', icon: 'trash' },
                  { art: '18', name: 'Einschränkung der Verarbeitung', icon: 'lock' },
                  { art: '20', name: 'Datenübertragbarkeit', icon: 'download' },
                  { art: '21', name: 'Widerspruchsrecht', icon: 'hand' },
                  { art: '22', name: 'Automatisierte Entscheidungen', icon: 'cpu' }
                ].map((right, idx) => `
                  <div class="bg-slate-800/60 rounded-lg p-3 flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <span class="text-purple-400 font-semibold text-sm">Art. ${right.art}</span>
                      <span class="text-slate-300">${right.name}</span>
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-3 bg-red-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-red-300">Bußgeldrisiken bei Missachtung</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                <div class="text-red-300 font-semibold mb-2">Bußgelder</div>
                <ul class="text-slate-400 text-sm space-y-1">
                  <li>• Bis zu 20 Mio. € oder 4% des Jahresumsatzes</li>
                  <li>• Zusätzliche Zwangsgelder möglich</li>
                  <li>• Wiederholte Verstöße = höhere Strafen</li>
                </ul>
              </div>
              <div class="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20">
                <div class="text-pink-300 font-semibold mb-2">Weitere Risiken</div>
                <ul class="text-slate-400 text-sm space-y-1">
                  <li>• Schadensersatzansprüche</li>
                  <li>• Reputationsschäden</li>
                  <li>• Abmahnungen durch Mitbewerber</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 1,
      title: 'Informationsrecht (Art. 13 & 14)',
      subtitle: 'Proaktive Transparenzpflicht',
      readTime: '12 Min',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 class="text-2xl font-bold text-white mb-4">Das proaktive Recht auf transparente Information</h3>
            <p class="text-xl text-slate-300 leading-relaxed mb-4">
              Das Informationsrecht bildet die Grundlage aller anderen Betroffenenrechte. Ohne transparente Information 
              können Betroffene ihre Rechte nicht wahrnehmen.
            </p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- Art. 13 -->
            <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
              <h4 class="text-xl font-bold text-green-300 mb-4 flex items-center gap-2">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                Art. 13: Direkte Erhebung
              </h4>
              <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20 mb-4">
                <p class="text-slate-300 text-sm">
                  Wenn Sie Daten direkt beim Betroffenen erheben (z.B. Kontaktformular, Registrierung)
                </p>
              </div>
              <div class="space-y-3">
                <div class="text-green-300 font-semibold">Zeitpunkt der Information:</div>
                <div class="bg-slate-800/60 rounded-lg p-3">
                  <p class="text-slate-400 text-sm">Bei Erhebung der Daten (sofort!)</p>
                </div>
              </div>
            </div>

            <!-- Art. 14 -->
            <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
              <h4 class="text-xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
                Art. 14: Indirekte Erhebung
              </h4>
              <div class="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20 mb-4">
                <p class="text-slate-300 text-sm">
                  Wenn Sie Daten von Dritten erhalten (z.B. Adresskauf, Datenübermittlung)
                </p>
              </div>
              <div class="space-y-3">
                <div class="text-purple-300 font-semibold">Zeitpunkt der Information:</div>
                <div class="bg-slate-800/60 rounded-lg p-3 space-y-1">
                  <p class="text-slate-400 text-sm">• Innerhalb angemessener Frist (max. 1 Monat)</p>
                  <p class="text-slate-400 text-sm">• Bei erster Kommunikation</p>
                  <p class="text-slate-400 text-sm">• Bei Weitergabe an Dritte</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Pflichtinformationen -->
          <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">📋 Pflichtinformationen nach Art. 13/14</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <h4 class="text-indigo-300 font-semibold">Grundinformationen:</h4>
                <div class="space-y-2">
                  <div class="flex items-start gap-2">
                    <svg class="h-5 w-5 text-indigo-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div class="text-slate-300 text-sm">Identität und Kontaktdaten des Verantwortlichen</div>
                  </div>
                  <div class="flex items-start gap-2">
                    <svg class="h-5 w-5 text-indigo-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div class="text-slate-300 text-sm">Kontaktdaten des Datenschutzbeauftragten</div>
                  </div>
                  <div class="flex items-start gap-2">
                    <svg class="h-5 w-5 text-indigo-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div class="text-slate-300 text-sm">Zwecke und Rechtsgrundlage der Verarbeitung</div>
                  </div>
                  <div class="flex items-start gap-2">
                    <svg class="h-5 w-5 text-indigo-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div class="text-slate-300 text-sm">Empfänger oder Kategorien von Empfängern</div>
                  </div>
                </div>
              </div>
              <div class="space-y-3">
                <h4 class="text-purple-300 font-semibold">Zusätzliche Informationen:</h4>
                <div class="space-y-2">
                  <div class="flex items-start gap-2">
                    <svg class="h-5 w-5 text-purple-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div class="text-slate-300 text-sm">Drittlandübermittlung und Garantien</div>
                  </div>
                  <div class="flex items-start gap-2">
                    <svg class="h-5 w-5 text-purple-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div class="text-slate-300 text-sm">Speicherdauer oder Kriterien</div>
                  </div>
                  <div class="flex items-start gap-2">
                    <svg class="h-5 w-5 text-purple-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div class="text-slate-300 text-sm">Alle Betroffenenrechte (Art. 15-22)</div>
                  </div>
                  <div class="flex items-start gap-2">
                    <svg class="h-5 w-5 text-purple-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div class="text-slate-300 text-sm">Beschwerderecht bei Aufsichtsbehörde</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Nur bei Art. 14 -->
            <div class="mt-6 p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
              <h4 class="text-purple-300 font-semibold mb-2">📌 Zusätzlich bei Art. 14 (indirekte Erhebung):</h4>
              <ul class="text-slate-400 text-sm space-y-1">
                <li>• Kategorien der verarbeiteten Daten</li>
                <li>• Quelle der personenbezogenen Daten</li>
                <li>• Information über öffentliche Zugänglichkeit</li>
              </ul>
            </div>
          </div>

          <!-- Praxis-Beispiel -->
          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">💡 Praxis-Beispiel: Datenschutzerklärung Website</h3>
            <div class="bg-slate-800/60 rounded-lg p-6">
              <pre class="text-sm text-slate-300 whitespace-pre-wrap">## Verantwortlicher
Mustermann GmbH, Beispielstraße 123, 12345 Berlin
E-Mail: datenschutz@mustermann.de, Tel: +49 30 12345678

## Datenschutzbeauftragter
Dr. Anna Schmidt, datenschutz@mustermann.de

## Datenverarbeitung: Kontaktformular
<strong>Zweck</strong>: Bearbeitung Ihrer Anfrage und Kontaktaufnahme
<strong>Rechtsgrundlage</strong>: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)
<strong>Empfänger</strong>: Keine Weitergabe an Dritte
<strong>Speicherdauer</strong>: 3 Jahre nach Bearbeitung der Anfrage
<strong>Ihre Rechte</strong>: Sie haben das Recht auf Auskunft, Berichtigung, Löschung...</pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: 'Auskunftsrecht (Art. 15)',
      subtitle: 'Das meistgenutzte Betroffenenrecht',
      readTime: '15 Min',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div class="p-2 bg-blue-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              Das umfassende Recht auf Transparenz
            </h3>
            <p class="text-xl text-slate-300 leading-relaxed">
              Das Auskunftsrecht ist das <strong>meistgenutzte Betroffenenrecht</strong> und gibt Personen Anspruch 
              auf vollständige Transparenz über ihre Datenverarbeitung.
            </p>
          </div>

          <!-- Auskunftspflichtige Informationen -->
          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">📋 Auskunftspflichtige Informationen</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="space-y-3">
                <h4 class="text-green-300 font-semibold">Grundlegende Informationen:</h4>
                <div class="space-y-2">
                  ${[
                    'Bestätigung, ob Daten verarbeitet werden',
                    'Zwecke der Verarbeitung',
                    'Kategorien personenbezogener Daten',
                    'Empfänger oder Kategorien',
                    'Geplante Speicherdauer'
                  ].map(item => `
                    <div class="flex items-start gap-2">
                      <svg class="h-5 w-5 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div class="text-slate-300 text-sm">${item}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
              <div class="space-y-3">
                <h4 class="text-emerald-300 font-semibold">Zusätzliche Informationen:</h4>
                <div class="space-y-2">
                  ${[
                    'Betroffenenrechte (Art. 16-22)',
                    'Beschwerderecht bei Aufsichtsbehörde',
                    'Quelle der Daten (wenn nicht vom Betroffenen)',
                    'Automatisierte Entscheidungsfindung',
                    'Kopie der verarbeiteten Daten'
                  ].map(item => `
                    <div class="flex items-start gap-2">
                      <svg class="h-5 w-5 text-emerald-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <div class="text-slate-300 text-sm">${item}</div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <!-- Musterprozess -->
          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">🔄 Musterprozess: Auskunftsanfrage bearbeiten</h3>
            <div class="space-y-6">
              <!-- Phase 1 -->
              <div class="bg-purple-500/10 rounded-lg p-6 border border-purple-500/20">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <h4 class="text-xl font-bold text-purple-300">Phase 1: Eingang und Identitätsprüfung (1-3 Tage)</h4>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div class="bg-slate-800/60 rounded-lg p-4">
                    <ul class="text-slate-400 text-sm space-y-2">
                      <li>📨 Anfrage entgegennehmen</li>
                      <li>🆔 Identität prüfen</li>
                      <li>📅 Frist notieren (1 Monat)</li>
                      <li>👤 Bearbeiter bestimmen</li>
                    </ul>
                  </div>
                  <div class="bg-purple-500/5 rounded-lg p-4 border-l-4 border-purple-500">
                    <div class="text-purple-300 font-semibold mb-2">💡 Tipp:</div>
                    <p class="text-slate-400 text-sm">
                      Nutzen Sie ein standardisiertes Ticketsystem für die Bearbeitung!
                    </p>
                  </div>
                </div>
              </div>

              <!-- Phase 2 -->
              <div class="bg-pink-500/10 rounded-lg p-6 border border-pink-500/20">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <h4 class="text-xl font-bold text-pink-300">Phase 2: Datensammlung (5-15 Tage)</h4>
                </div>
                <div class="space-y-3">
                  <div class="bg-slate-800/60 rounded-lg p-4">
                    <div class="text-pink-300 font-semibold mb-2">Systematische Suche in:</div>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                      <div class="bg-pink-500/10 rounded p-2 text-slate-300">🔍 Datenbanken</div>
                      <div class="bg-pink-500/10 rounded p-2 text-slate-300">📧 E-Mail-System</div>
                      <div class="bg-pink-500/10 rounded p-2 text-slate-300">📁 Dateisystem</div>
                      <div class="bg-pink-500/10 rounded p-2 text-slate-300">☁️ Cloud-Services</div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Phase 3 -->
              <div class="bg-purple-500/10 rounded-lg p-6 border border-purple-500/20">
                <div class="flex items-center gap-3 mb-4">
                  <div class="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <h4 class="text-xl font-bold text-purple-300">Phase 3: Aufbereitung und Antwort (3-7 Tage)</h4>
                </div>
                <div class="space-y-3">
                  <div class="bg-slate-800/60 rounded-lg p-4">
                    <ul class="text-slate-400 text-sm space-y-2">
                      <li>📝 Strukturierte Auskunft erstellen</li>
                      <li>🔒 Rechte Dritter prüfen</li>
                      <li>📧 Fristgerechte Übermittlung</li>
                      <li>📁 Dokumentation für Nachweis</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Praxis-Template -->
          <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">📝 Praxis-Template: Auskunftserteilung</h3>
            <div class="bg-slate-800/60 rounded-lg p-6">
              <pre class="text-sm text-slate-300 whitespace-pre-wrap">Sehr geehrte/r [Name],

vielen Dank für Ihre Anfrage vom [Datum] bezüglich der Auskunft über 
die Verarbeitung Ihrer personenbezogenen Daten.

## Bestätigung der Verarbeitung
Ja, wir verarbeiten personenbezogene Daten zu Ihrer Person.

## Verarbeitungstätigkeiten

<strong>1. Kundenverwaltung</strong>
- Zweck: Vertragsabwicklung und Kundenbetreuung
- Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)
- Daten: Name, Anschrift, E-Mail, Telefon, Kundennummer
- Speicherdauer: 10 Jahre nach Vertragsende (§ 147 AO)
- Empfänger: Steuerberater Müller & Partner

<strong>2. Newsletter</strong>
- Zweck: Versendung von Produktinformationen
- Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
- Daten: E-Mail-Adresse, Anmeldedatum
- Speicherdauer: Bis zum Widerruf
- Empfänger: Newsletter-Tool "MailChimp" (USA, Angemessenheitsbeschluss)

## Ihre Rechte
Sie haben das Recht auf Berichtigung, Löschung, Einschränkung...

[Anhang: Kopie Ihrer Daten als PDF]</pre>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: 'Löschung & Berichtigung',
      subtitle: 'Art. 16 & 17 DSGVO umsetzen',
      readTime: '10 Min',
      content: `
        <div class="space-y-8">
          <!-- Berichtigungsrecht -->
          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-green-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                </svg>
              </div>
              Recht auf Berichtigung (Art. 16)
            </h3>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="space-y-4">
                <h4 class="text-green-300 font-semibold">Wann greift das Berichtigungsrecht?</h4>
                <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <ul class="text-slate-300 space-y-2">
                    <li>• <strong>Unrichtige Daten</strong>: Faktisch falsche Informationen</li>
                    <li>• <strong>Unvollständige Daten</strong>: Fehlende relevante Angaben</li>
                    <li>• <strong>Veraltete Daten</strong>: Nicht mehr aktuelle Informationen</li>
                  </ul>
                </div>
              </div>
              
              <div class="space-y-4">
                <h4 class="text-emerald-300 font-semibold">Pflichten des Verantwortlichen</h4>
                <div class="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
                  <ul class="text-slate-300 space-y-2">
                    <li>✅ Unverzügliche Berichtigung</li>
                    <li>✅ Vervollständigung unvollständiger Daten</li>
                    <li>✅ Benachrichtigung aller Empfänger</li>
                    <li>✅ Dokumentation der Änderungen</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Praxis-Beispiel -->
            <div class="mt-6 bg-slate-800/60 rounded-lg p-6">
              <h5 class="text-green-300 font-semibold mb-3">💡 Praxis-Beispiel: Adressänderung</h5>
              <div class="space-y-3 text-sm">
                <div class="bg-green-500/5 rounded p-3 border-l-4 border-green-500">
                  <p class="text-slate-300">
                    <strong>Antrag:</strong> "Bitte korrigieren Sie meine Adresse von 'Alte Straße 1' zu 'Neue Straße 15'"
                  </p>
                </div>
                <div class="text-slate-400">
                  <strong>Bearbeitung:</strong>
                  <ol class="list-decimal list-inside mt-2 space-y-1">
                    <li>Identität prüfen</li>
                    <li>Daten in allen Systemen aktualisieren</li>
                    <li>Dienstleister informieren</li>
                    <li>Änderung dokumentieren</li>
                    <li>Bestätigung an Betroffenen</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <!-- Löschungsrecht -->
          <div class="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-red-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                </svg>
              </div>
              Recht auf Löschung / "Recht auf Vergessenwerden" (Art. 17)
            </h3>

            <!-- Löschungsgründe -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div class="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
                <h4 class="text-red-300 font-semibold mb-4">✅ Löschungsgründe (Art. 17 Abs. 1)</h4>
                <ul class="text-slate-300 text-sm space-y-2">
                  <li>• Daten nicht mehr erforderlich</li>
                  <li>• Widerruf der Einwilligung</li>
                  <li>• Widerspruch ohne überwiegende Gründe</li>
                  <li>• Unrechtmäßige Verarbeitung</li>
                  <li>• Rechtliche Löschpflicht</li>
                  <li>• Kinder-Daten bei Online-Diensten</li>
                </ul>
              </div>
              
              <div class="bg-pink-500/10 rounded-lg p-6 border border-pink-500/20">
                <h4 class="text-pink-300 font-semibold mb-4">❌ Ausnahmen (Art. 17 Abs. 3)</h4>
                <ul class="text-slate-300 text-sm space-y-2">
                  <li>• Meinungs- und Informationsfreiheit</li>
                  <li>• Rechtliche Verpflichtungen</li>
                  <li>• Öffentliches Interesse</li>
                  <li>• Geltendmachung von Rechtsansprüchen</li>
                  <li>• Wissenschaftliche Forschung</li>
                </ul>
              </div>
            </div>

            <!-- Komplexer Fall -->
            <div class="bg-slate-800/60 rounded-lg p-6">
              <h5 class="text-red-300 font-semibold mb-4">🔍 Komplexer Fall: Löschung nach Vertragsende</h5>
              <div class="space-y-4">
                <div class="bg-red-500/5 rounded p-4 border-l-4 border-red-500">
                  <p class="text-slate-300">
                    <strong>Antrag:</strong> Kunde kündigt Vertrag und fordert vollständige Löschung aller Daten
                  </p>
                </div>
                
                <div class="space-y-3">
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">1</div>
                    <div>
                      <div class="text-red-300 font-medium">Prüfung</div>
                      <ul class="text-slate-400 text-sm mt-1 space-y-1">
                        <li>✅ Vertrag beendet → Zweck entfallen</li>
                        <li>❌ ABER: Aufbewahrungspflicht nach HGB/AO (10 Jahre)</li>
                        <li>❌ ABER: Mögliche Gewährleistungsansprüche (2 Jahre)</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">2</div>
                    <div>
                      <div class="text-pink-300 font-medium">Lösung</div>
                      <ul class="text-slate-400 text-sm mt-1 space-y-1">
                        <li>• Löschung nicht aufbewahrungspflichtiger Daten</li>
                        <li>• Einschränkung der Verarbeitung für Rest</li>
                        <li>• Automatische Löschung nach Fristablauf</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">3</div>
                    <div>
                      <div class="text-red-300 font-medium">Antwort</div>
                      <div class="bg-slate-700/50 rounded p-3 mt-2">
                        <p class="text-slate-300 text-sm italic">
                          "Ihre Marketingdaten wurden gelöscht. Vertragsdaten werden 
                          aufgrund gesetzlicher Aufbewahrungsfristen bis [Datum] gespeichert, 
                          aber nur für rechtliche Zwecke verwendet."
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Best Practices -->
          <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">🎯 Best Practices für Löschung & Berichtigung</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
                <h4 class="text-indigo-300 font-semibold mb-3">Löschkonzept erstellen</h4>
                <ul class="text-slate-400 text-sm space-y-2">
                  <li>• Löschfristen pro Datenkategorie definieren</li>
                  <li>• Automatisierte Löschprozesse implementieren</li>
                  <li>• Backup-Systeme einbeziehen</li>
                  <li>• Regelmäßige Löschläufe durchführen</li>
                </ul>
              </div>
              <div class="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                <h4 class="text-purple-300 font-semibold mb-3">Änderungsmanagement</h4>
                <ul class="text-slate-400 text-sm space-y-2">
                  <li>• Zentrale Stammdatenverwaltung</li>
                  <li>• Synchronisation aller Systeme</li>
                  <li>• Änderungshistorie führen</li>
                  <li>• Empfänger automatisch informieren</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: 'Weitere Betroffenenrechte',
      subtitle: 'Einschränkung, Portabilität, Widerspruch & Automatisierung',
      readTime: '12 Min',
      content: `
        <div class="space-y-8">
          <!-- Einschränkung der Verarbeitung -->
          <div class="bg-gradient-to-r from-orange-500/10 to-amber-500/10 border border-orange-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-orange-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                </svg>
              </div>
              Recht auf Einschränkung (Art. 18)
            </h3>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="bg-orange-500/10 rounded-lg p-6 border border-orange-500/20">
                <h4 class="text-orange-300 font-semibold mb-4">Wann einschränken?</h4>
                <ul class="text-slate-300 space-y-2">
                  <li>✅ Richtigkeit wird bestritten (während Prüfung)</li>
                  <li>✅ Unrechtmäßig, aber keine Löschung gewünscht</li>
                  <li>✅ Daten für Rechtsansprüche benötigt</li>
                  <li>✅ Widerspruch eingelegt (während Prüfung)</li>
                </ul>
              </div>
              
              <div class="bg-amber-500/10 rounded-lg p-6 border border-amber-500/20">
                <h4 class="text-amber-300 font-semibold mb-4">Was bedeutet "Einschränkung"?</h4>
                <div class="space-y-3">
                  <div class="text-slate-300">
                    <strong>Erlaubt:</strong> Speicherung
                  </div>
                  <div class="text-slate-300">
                    <strong>Verboten:</strong> Weitere Verarbeitung
                  </div>
                  <div class="text-slate-400 text-sm">
                    Ausnahmen: Mit Einwilligung, für Rechtsansprüche, zum Schutz anderer
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Datenportabilität -->
          <div class="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-blue-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                </svg>
              </div>
              Datenübertragbarkeit (Art. 20)
            </h3>

            <div class="mb-6 bg-blue-500/10 rounded-lg p-6 border border-blue-500/20">
              <h4 class="text-blue-300 font-semibold mb-4">Voraussetzungen</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="bg-slate-800/60 rounded-lg p-3 text-center">
                  <div class="text-blue-400 mb-1">✅</div>
                  <div class="text-slate-300 text-sm">Einwilligung oder Vertrag</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-3 text-center">
                  <div class="text-blue-400 mb-1">✅</div>
                  <div class="text-slate-300 text-sm">Automatisierte Verarbeitung</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-3 text-center">
                  <div class="text-blue-400 mb-1">✅</div>
                  <div class="text-slate-300 text-sm">Vom Betroffenen bereitgestellt</div>
                </div>
              </div>
            </div>

            <!-- Praxis-Beispiel -->
            <div class="bg-slate-800/60 rounded-lg p-6">
              <h5 class="text-cyan-300 font-semibold mb-4">💡 Praxis-Beispiel: Social Media Wechsel</h5>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <div class="text-cyan-300 font-medium mb-2">Bereitstellung durch Plattform A:</div>
                  <ul class="text-slate-400 text-sm space-y-1">
                    <li>📁 Profildaten (Name, Geburtsdatum)</li>
                    <li>📁 Inhalte (Posts, Fotos)</li>
                    <li>📁 Kontakte (Freundesliste)</li>
                    <li>📁 Aktivitäten (Likes, Shares)</li>
                  </ul>
                </div>
                <div>
                  <div class="text-cyan-300 font-medium mb-2">Format & Übertragung:</div>
                  <ul class="text-slate-400 text-sm space-y-1">
                    <li>📄 Format: JSON/XML/CSV</li>
                    <li>🔄 Direkt an Plattform B (wenn möglich)</li>
                    <li>⏰ Zeitrahmen: Max. 1 Monat</li>
                    <li>💰 Kosten: Grundsätzlich kostenfrei</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Widerspruchsrecht -->
          <div class="bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-purple-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"></path>
                </svg>
              </div>
              Widerspruchsrecht (Art. 21)
            </h3>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="bg-purple-500/10 rounded-lg p-6 border border-purple-500/20">
                <h4 class="text-purple-300 font-semibold mb-4">Standard-Widerspruch (Art. 21 Abs. 1)</h4>
                <div class="space-y-3">
                  <div class="text-slate-300">
                    <strong>Anwendung:</strong> Bei berechtigten Interessen
                  </div>
                  <div class="text-slate-300">
                    <strong>Bedingung:</strong> Besondere Situation
                  </div>
                  <div class="text-slate-300">
                    <strong>Folge:</strong> Interessenabwägung erforderlich
                  </div>
                </div>
              </div>
              
              <div class="bg-violet-500/10 rounded-lg p-6 border border-violet-500/20">
                <h4 class="text-violet-300 font-semibold mb-4">Direktwerbung (Art. 21 Abs. 2)</h4>
                <div class="space-y-3">
                  <div class="text-slate-300">
                    <strong>Anwendung:</strong> Jede Direktwerbung
                  </div>
                  <div class="text-slate-300">
                    <strong>Bedingung:</strong> Keine (absolutes Recht!)
                  </div>
                  <div class="text-slate-300">
                    <strong>Folge:</strong> Sofortige Einstellung
                  </div>
                </div>
              </div>
            </div>

            <!-- Beispiel -->
            <div class="mt-6 bg-slate-800/60 rounded-lg p-6">
              <h5 class="text-purple-300 font-semibold mb-3">🚫 Beispiel: Widerspruch gegen Profiling</h5>
              <div class="bg-purple-500/5 rounded p-4 border-l-4 border-purple-500">
                <p class="text-slate-300 mb-3">
                  <strong>Antrag:</strong> "Ich widerspreche der Erstellung von Kundenprofilen für Werbezwecke"
                </p>
                <div class="text-slate-400 text-sm">
                  <strong>Maßnahmen:</strong>
                  <ol class="list-decimal list-inside mt-2 space-y-1">
                    <li>Stopp aller Profiling-Aktivitäten</li>
                    <li>Löschung der Werbeprofile</li>
                    <li>Kennzeichnung "Widerspruch Direktwerbung"</li>
                    <li>Technische Sperren implementieren</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <!-- Automatisierte Entscheidungen -->
          <div class="bg-gradient-to-r from-red-500/10 to-rose-500/10 border border-red-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-red-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              Schutz vor automatisierten Entscheidungen (Art. 22)
            </h3>

            <div class="mb-6 bg-red-500/10 rounded-lg p-6 border border-red-500/20">
              <h4 class="text-red-300 font-semibold mb-4">Was ist verboten?</h4>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <div class="text-red-400 font-semibold mb-2">Vollautomatisiert</div>
                  <div class="text-slate-400 text-sm">Ohne menschliche Beteiligung</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <div class="text-red-400 font-semibold mb-2">Rechtswirkung</div>
                  <div class="text-slate-400 text-sm">Oder erhebliche Beeinträchtigung</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <div class="text-red-400 font-semibold mb-2">Beispiele</div>
                  <div class="text-slate-400 text-sm">Kredit-Scoring, Bewerbungs-KI</div>
                </div>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="bg-rose-500/10 rounded-lg p-6 border border-rose-500/20">
                <h4 class="text-rose-300 font-semibold mb-4">Ausnahmen (erlaubt wenn):</h4>
                <ul class="text-slate-300 space-y-2">
                  <li>✅ Für Vertrag erforderlich</li>
                  <li>✅ Gesetzlich erlaubt mit Schutzmaßnahmen</li>
                  <li>✅ Mit ausdrücklicher Einwilligung</li>
                </ul>
              </div>
              
              <div class="bg-red-500/10 rounded-lg p-6 border border-red-500/20">
                <h4 class="text-red-300 font-semibold mb-4">Schutzmaßnahmen:</h4>
                <ul class="text-slate-300 space-y-2">
                  <li>✅ Transparenz über Logik</li>
                  <li>✅ Recht auf menschliche Intervention</li>
                  <li>✅ Recht auf Meinungsäußerung</li>
                  <li>✅ Recht auf Anfechtung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 5,
      title: 'Praktische Umsetzung',
      subtitle: 'Prozesse, Tools und Compliance',
      readTime: '10 Min',
      content: `
        <div class="space-y-8">
          <!-- Prozessdesign -->
          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-blue-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              Prozessdesign und Organisation
            </h3>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="bg-blue-500/10 rounded-lg p-6 border border-blue-500/20">
                <h4 class="text-blue-300 font-semibold mb-4">📧 Zentrale Anlaufstelle</h4>
                <ul class="text-slate-300 space-y-2">
                  <li>• Einheitliche E-Mail: betroffenenrechte@firma.de</li>
                  <li>• Telefon-Hotline für dringende Fälle</li>
                  <li>• Online-Formular auf Website</li>
                  <li>• Postanschrift für schriftliche Anträge</li>
                </ul>
              </div>
              
              <div class="bg-indigo-500/10 rounded-lg p-6 border border-indigo-500/20">
                <h4 class="text-indigo-300 font-semibold mb-4">👥 Interne Verantwortlichkeiten</h4>
                <ul class="text-slate-300 space-y-2">
                  <li>• Erstbearbeiter: Identitätsprüfung</li>
                  <li>• Fachbearbeiter: Datensammlung je Bereich</li>
                  <li>• Qualitätsprüfer: Vollständigkeitskontrolle</li>
                  <li>• DSB: Fachaufsicht und rechtliche Prüfung</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Fristenmanagement -->
          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-green-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              Fristenmanagement
            </h3>

            <div class="mb-6 bg-green-500/10 rounded-lg p-6 border border-green-500/20">
              <h4 class="text-green-300 font-semibold mb-4">⏰ Standard-Fristen</h4>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="bg-slate-800/60 rounded-lg p-3 text-center">
                  <div class="text-green-400 font-semibold">Informationsrecht</div>
                  <div class="text-2xl font-bold text-white">Sofort</div>
                  <div class="text-slate-400 text-sm">Bei Erhebung</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-3 text-center">
                  <div class="text-emerald-400 font-semibold">Andere Rechte</div>
                  <div class="text-2xl font-bold text-white">1 Monat</div>
                  <div class="text-slate-400 text-sm">Ab Antrag</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-3 text-center">
                  <div class="text-green-400 font-semibold">Komplexe Fälle</div>
                  <div class="text-2xl font-bold text-white">+2 Monate</div>
                  <div class="text-slate-400 text-sm">Mit Begründung</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-3 text-center">
                  <div class="text-emerald-400 font-semibold">Benachrichtigung</div>
                  <div class="text-2xl font-bold text-white">1 Monat</div>
                  <div class="text-slate-400 text-sm">Bei Verlängerung</div>
                </div>
              </div>
            </div>

            <!-- Fristenkalkulator -->
            <div class="bg-slate-800/60 rounded-lg p-6">
              <h5 class="text-green-300 font-semibold mb-4">📅 Praxis-Tool: Fristenkalkulator</h5>
              <div class="space-y-3">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label class="text-slate-300 text-sm">Antragseingang:</label>
                    <input type="date" class="mt-1 w-full bg-slate-700 border-slate-600 rounded-lg px-3 py-2 text-white" />
                  </div>
                  <div>
                    <label class="text-slate-300 text-sm">Standard-Frist:</label>
                    <input type="text" value="[+1 Monat]" readonly class="mt-1 w-full bg-slate-700/50 border-slate-600 rounded-lg px-3 py-2 text-green-400" />
                  </div>
                </div>
                <div class="mt-4 p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                  <h6 class="text-green-300 font-semibold mb-2">Status-Tracking:</h6>
                  <div class="space-y-2">
                    <label class="flex items-center gap-3 text-slate-300">
                      <input type="checkbox" class="w-5 h-5 rounded border-slate-600 bg-slate-800 text-green-500" />
                      <span>Eingang bestätigt</span>
                    </label>
                    <label class="flex items-center gap-3 text-slate-300">
                      <input type="checkbox" class="w-5 h-5 rounded border-slate-600 bg-slate-800 text-green-500" />
                      <span>Identität geprüft</span>
                    </label>
                    <label class="flex items-center gap-3 text-slate-300">
                      <input type="checkbox" class="w-5 h-5 rounded border-slate-600 bg-slate-800 text-green-500" />
                      <span>Daten gesammelt</span>
                    </label>
                    <label class="flex items-center gap-3 text-slate-300">
                      <input type="checkbox" class="w-5 h-5 rounded border-slate-600 bg-slate-800 text-green-500" />
                      <span>Versand erfolgt</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Identitätsprüfung -->
          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-purple-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"></path>
                </svg>
              </div>
              Stufenmodell der Identitätsprüfung
            </h3>

            <div class="space-y-4">
              <!-- Stufe 1 -->
              <div class="bg-purple-500/10 rounded-lg p-6 border border-purple-500/20">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <h4 class="text-purple-300 font-semibold">Stufe 1: Einfache Prüfung (unkritische Daten)</h4>
                </div>
                <ul class="text-slate-300 space-y-1 ml-11">
                  <li>✅ Name und Geburtsdatum</li>
                  <li>✅ E-Mail-Adresse (bei Online-Kunden)</li>
                  <li>✅ Letzte bekannte Adresse</li>
                </ul>
              </div>

              <!-- Stufe 2 -->
              <div class="bg-pink-500/10 rounded-lg p-6 border border-pink-500/20">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <h4 class="text-pink-300 font-semibold">Stufe 2: Verstärkte Prüfung (sensible Daten)</h4>
                </div>
                <ul class="text-slate-300 space-y-1 ml-11">
                  <li>✅ Kopie Personalausweis</li>
                  <li>✅ Zusätzliche persönliche Informationen</li>
                  <li>✅ Verifizierung über bekannte Kontaktwege</li>
                </ul>
              </div>

              <!-- Stufe 3 -->
              <div class="bg-purple-500/10 rounded-lg p-6 border border-purple-500/20">
                <div class="flex items-center gap-3 mb-3">
                  <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <h4 class="text-purple-300 font-semibold">Stufe 3: Höchste Sicherheit (Hochrisikodaten)</h4>
                </div>
                <ul class="text-slate-300 space-y-1 ml-11">
                  <li>✅ Notariell beglaubigte Kopie</li>
                  <li>✅ Persönliche Vorsprache oder Video-Ident</li>
                  <li>✅ Bevollmächtigung bei Vertretung</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Tools und Software -->
          <div class="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 border border-indigo-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-indigo-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              Empfohlene Tools und Software
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-indigo-500/10 rounded-lg p-6 border border-indigo-500/20">
                <h4 class="text-indigo-300 font-semibold mb-4">Enterprise-Lösungen</h4>
                <ul class="text-slate-300 space-y-2">
                  <li>• OneTrust Privacy Management</li>
                  <li>• TrustArc Privacy Platform</li>
                  <li>• Privacyidea</li>
                  <li>• DataGuard</li>
                </ul>
              </div>
              
              <div class="bg-blue-500/10 rounded-lg p-6 border border-blue-500/20">
                <h4 class="text-blue-300 font-semibold mb-4">Integration & Minimal-Setup</h4>
                <ul class="text-slate-300 space-y-2">
                  <li>• Salesforce Privacy Center</li>
                  <li>• Microsoft Dynamics</li>
                  <li>• Excel/Google Sheets mit Makros</li>
                  <li>• Open-Source GDPR-Tools</li>
                </ul>
              </div>
            </div>
          </div>

          <!-- KPIs -->
          <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-yellow-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              KPIs und Erfolgsmessung
            </h3>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div class="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20 text-center">
                <div class="text-3xl font-bold text-yellow-400">15-25</div>
                <div class="text-yellow-300 font-semibold">Tage</div>
                <div class="text-slate-400 text-sm">Ø Bearbeitungszeit Auskunft</div>
              </div>
              <div class="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20 text-center">
                <div class="text-3xl font-bold text-orange-400">&gt;95%</div>
                <div class="text-orange-300 font-semibold">Fristeneinhaltung</div>
                <div class="text-slate-400 text-sm">Bei professioneller Organisation</div>
              </div>
              <div class="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20 text-center">
                <div class="text-3xl font-bold text-yellow-400">50-200€</div>
                <div class="text-yellow-300 font-semibold">Kosten/Antrag</div>
                <div class="text-slate-400 text-sm">Je nach Komplexität</div>
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
  const totalReadTime = chapters.reduce((sum, chapter) => sum + parseInt(chapter.readTime), 0);
  const overallProgress = ((currentChapter + (readingProgress / 100)) / chapters.length) * 100;

  return (
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
              <Badge className="bg-teal-500/20 text-teal-300">
                <UserCheck className="h-3 w-3 mr-1" />
                Betroffenenrechte
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
              <div className="p-3 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-xl">
                <UserCheck className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{currentChapterData.title}</h1>
                <p className="text-xl text-teal-300">{currentChapterData.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{currentChapterData.readTime} Lesezeit</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>1,789 Leser</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>4.7 Bewertung</span>
              </div>
              {completedChapters.includes(currentChapter) && (
                <div className="flex items-center gap-2 text-green-400">
                  <CheckCircle className="h-4 w-4" />
                  <span>Abgeschlossen</span>
                </div>
              )}
            </div>
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
                              ? "bg-teal-500/20 border border-teal-500/30 text-teal-300" 
                              : "hover:bg-slate-700/50 text-slate-300"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                              completedChapters.includes(index) 
                                ? "bg-green-500 text-white"
                                : index === currentChapter
                                ? "bg-teal-500 text-white"
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
                              <div className="text-xs opacity-75">{chapter.readTime}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-slate-700">
                      <div className="text-sm text-slate-400 mb-2">Gesamtfortschritt</div>
                      <Progress value={overallProgress} className="h-2 mb-2" />
                      <div className="text-xs text-slate-400">
                        {Math.round(overallProgress)}% • {totalReadTime} Min gesamt
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
                      className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                    >
                      Nächstes Kapitel
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      asChild
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                    >
                      <Link to="/wissen/dsgvo-leitfaeden">
                        Zurück zur Übersicht
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

      <Footer />
    </div>
  );
};

export default BetroffenenrechteGuide;