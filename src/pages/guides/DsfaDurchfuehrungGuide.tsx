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
  Settings,
  Database,
  Globe,
  Building2,
  UserCheck,
  FileCheck,
  Search,
  UserX,
  AlertOctagon,
  BarChart3,
  PieChart,
  Activity,
  Layers,
  Filter,
  FileSearch,
  ClipboardCheck,
  XCircle,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';

const DsfaDurchfuehrungGuide: React.FC = () => {
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
      title: 'DSFA-Grundlagen & Anwendungsbereich',
      subtitle: 'Wann ist eine DSFA erforderlich?',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-4 lg:p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-purple-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-purple-300">Was ist eine DSFA?</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-4">
              Die <strong>Datenschutz-Folgenabschätzung (DSFA)</strong> ist ein systematisches Verfahren zur Bewertung 
              und Minimierung von Datenschutzrisiken bei Verarbeitungen, die ein hohes Risiko für die Rechte und 
              Freiheiten natürlicher Personen zur Folge haben können.
            </p>
            <div class="bg-purple-500/5 rounded-lg p-4 border-l-4 border-purple-500">
              <p class="text-slate-300 italic">
                "Hat eine Form der Verarbeitung [...] voraussichtlich ein hohes Risiko für die Rechte und Freiheiten 
                natürlicher Personen zur Folge, so führt der Verantwortliche vorab eine Abschätzung der Folgen der 
                vorgesehenen Verarbeitungsvorgänge für den Schutz personenbezogener Daten durch." - Art. 35 Abs. 1 DSGVO
              </p>
            </div>
          </div>

          <div class="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-red-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.865-.833-2.635 0L4.179 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-red-300">Wann ist eine DSFA zwingend erforderlich?</h3>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-red-500/10 rounded-xl p-4 border border-red-500/20">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-2 h-2 bg-red-400 rounded-full"></div>
                  <h4 class="font-semibold text-red-300">Systematische Bewertung</h4>
                </div>
                <p class="text-slate-300 text-sm mb-3">
                  Systematische und umfassende Bewertung persönlicher Aspekte natürlicher Personen, 
                  die sich auf automatisierte Verarbeitung einschließlich Profiling gründet.
                </p>
                <div class="text-xs text-slate-400">
                  <span class="font-semibold">Beispiele:</span> Scoring, automatisierte Kreditprüfung, 
                  Personalauswahl mittels KI
                </div>
              </div>

              <div class="bg-orange-500/10 rounded-xl p-4 border border-orange-500/20">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <h4 class="font-semibold text-orange-300">Besondere Kategorien</h4>
                </div>
                <p class="text-slate-300 text-sm mb-3">
                  Umfangreiche Verarbeitung besonderer Kategorien personenbezogener Daten 
                  oder von Daten über strafrechtliche Verurteilungen.
                </p>
                <div class="text-xs text-slate-400">
                  <span class="font-semibold">Beispiele:</span> Gesundheitsdaten-Plattformen, 
                  Personaldossiers mit Gesundheitsinformationen
                </div>
              </div>

              <div class="bg-yellow-500/10 rounded-xl p-4 border border-yellow-500/20">
                <div class="flex items-center gap-2 mb-3">
                  <div class="w-2 h-2 bg-yellow-400 rounded-full"></div>
                  <h4 class="font-semibold text-yellow-300">Systematische Überwachung</h4>
                </div>
                <p class="text-slate-300 text-sm mb-3">
                  Systematische umfangreiche Überwachung öffentlich zugänglicher Bereiche.
                </p>
                <div class="text-xs text-slate-400">
                  <span class="font-semibold">Beispiele:</span> Videoüberwachung mit Gesichtserkennung, 
                  Smart City Projekte mit Tracking
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-blue-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-blue-300">DSFA-Schwellwert-Test</h3>
            </div>
            
            <p class="text-slate-300 mb-6">
              Prüfen Sie systematisch, ob Ihre Verarbeitung eine DSFA erfordert:
            </p>

            <div class="space-y-4">
              <div class="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                <div class="flex items-start gap-3">
                  <div class="p-2 bg-blue-500 rounded-lg flex-shrink-0 mt-1">
                    <span class="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-blue-300 mb-2">Blacklist-Prüfung</h4>
                    <p class="text-slate-300 text-sm mb-2">
                      Steht Ihre Verarbeitung auf der <strong>Blacklist der Aufsichtsbehörde</strong>? 
                      In Deutschland führt jede Landesbehörde eine Liste DSFA-pflichtiger Verarbeitungen.
                    </p>
                    <div class="text-xs text-slate-400">
                      ✓ Wenn JA → DSFA ist zwingend erforderlich
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
                <div class="flex items-start gap-3">
                  <div class="p-2 bg-indigo-500 rounded-lg flex-shrink-0 mt-1">
                    <span class="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-indigo-300 mb-2">Risikofaktoren-Check</h4>
                    <p class="text-slate-300 text-sm mb-2">
                      Treffen mindestens <strong>zwei der folgenden Kriterien</strong> zu?
                    </p>
                    <div class="grid grid-cols-2 gap-2 text-xs text-slate-400">
                      <div>• Bewertung oder Scoring</div>
                      <div>• Automatisierte Entscheidungsfindung</div>
                      <div>• Systematische Überwachung</div>
                      <div>• Besondere Datenkategorien</div>
                      <div>• Große Datenmengen</div>
                      <div>• Datenabgleich/-verknüpfung</div>
                      <div>• Vulnerable Gruppen</div>
                      <div>• Innovative Technologie</div>
                    </div>
                    <div class="text-xs text-slate-400 mt-2">
                      ✓ Wenn JA → DSFA ist wahrscheinlich erforderlich
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                <div class="flex items-start gap-3">
                  <div class="p-2 bg-purple-500 rounded-lg flex-shrink-0 mt-1">
                    <span class="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 class="font-semibold text-purple-300 mb-2">Whitelist-Prüfung</h4>
                    <p class="text-slate-300 text-sm mb-2">
                      Gibt es für Ihre Verarbeitung bereits eine <strong>Whitelist-Eintragung</strong> 
                      oder einen vergleichbaren Präzedenzfall?
                    </p>
                    <div class="text-xs text-slate-400">
                      ✓ Wenn JA → DSFA ist möglicherweise nicht erforderlich (aber Dokumentation empfohlen)
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 bg-green-500 rounded-lg">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-green-300">Best Practice Tipp</h4>
            </div>
            <p class="text-slate-300 text-sm">
              <strong>Im Zweifel: DSFA durchführen!</strong> Eine "unnötige" DSFA schadet nicht und zeigt proaktive 
              Compliance-Haltung. Das Unterlassen einer erforderlichen DSFA kann hingegen zu erheblichen Bußgeldern führen.
            </p>
          </div>
        </div>
      `
    },
    {
      id: 1,
      title: 'DSFA-Vorbereitung & Projektplanung',
      subtitle: 'Strukturierter Ansatz für erfolgreiche Durchführung',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4 lg:p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-cyan-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-cyan-300">DSFA-Team zusammenstellen</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-6">
              Eine erfolgreiche DSFA erfordert <strong>interdisziplinäre Zusammenarbeit</strong>. 
              Stellen Sie ein Team aus verschiedenen Fachbereichen zusammen.
            </p>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-cyan-500/10 rounded-lg p-4">
                <div class="text-center mb-3">
                  <div class="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-cyan-300 text-sm">Projektleiter</h4>
                </div>
                <ul class="text-xs text-slate-400 space-y-1">
                  <li>• Koordination & Planung</li>
                  <li>• Stakeholder-Management</li>
                  <li>• Risiko-Kommunikation</li>
                </ul>
              </div>

              <div class="bg-blue-500/10 rounded-lg p-4">
                <div class="text-center mb-3">
                  <div class="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-blue-300 text-sm">Datenschutzbeauftragter</h4>
                </div>
                <ul class="text-xs text-slate-400 space-y-1">
                  <li>• Rechtliche Bewertung</li>
                  <li>• DSGVO-Compliance</li>
                  <li>• Methodische Beratung</li>
                </ul>
              </div>

              <div class="bg-indigo-500/10 rounded-lg p-4">
                <div class="text-center mb-3">
                  <div class="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-indigo-300 text-sm">IT-Security</h4>
                </div>
                <ul class="text-xs text-slate-400 space-y-1">
                  <li>• Technische Risiken</li>
                  <li>• Sicherheitsmaßnahmen</li>
                  <li>• Vulnerability Assessment</li>
                </ul>
              </div>

              <div class="bg-purple-500/10 rounded-lg p-4">
                <div class="text-center mb-3">
                  <div class="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-purple-300 text-sm">Fachbereich</h4>
                </div>
                <ul class="text-xs text-slate-400 space-y-1">
                  <li>• Business-Anforderungen</li>
                  <li>• Prozess-Know-how</li>
                  <li>• Praktische Umsetzung</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-amber-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 8l2 2 4-4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-amber-300">DSFA-Projektplan</h3>
            </div>

            <div class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-amber-500/10 rounded-lg p-4">
                  <h4 class="font-semibold text-amber-300 mb-4">Phase 1: Initiierung (Woche 1)</h4>
                  <ul class="text-slate-300 text-sm space-y-2">
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      Kick-off Meeting durchführen
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      Team zusammenstellen & Rollen definieren
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      Projektscope & Zeitplan festlegen
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
                      Erste Dokumente sammeln
                    </li>
                  </ul>
                </div>

                <div class="bg-orange-500/10 rounded-lg p-4">
                  <h4 class="font-semibold text-orange-300 mb-4">Phase 2: Analyse (Woche 2-3)</h4>
                  <ul class="text-slate-300 text-sm space-y-2">
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      Verarbeitungsprozess detailliert beschreiben
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      Stakeholder-Interviews führen
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      Datenflüsse dokumentieren
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
                      Technische Architektur verstehen
                    </li>
                  </ul>
                </div>

                <div class="bg-red-500/10 rounded-lg p-4">
                  <h4 class="font-semibold text-red-300 mb-4">Phase 3: Bewertung (Woche 4-5)</h4>
                  <ul class="text-slate-300 text-sm space-y-2">
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                      Risiken identifizieren & bewerten
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                      Betroffenenrechte analysieren
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                      Schutzmaßnahmen bewerten
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-red-400 rounded-full"></div>
                      Restrisiko ermitteln
                    </li>
                  </ul>
                </div>

                <div class="bg-green-500/10 rounded-lg p-4">
                  <h4 class="font-semibold text-green-300 mb-4">Phase 4: Maßnahmen (Woche 6)</h4>
                  <ul class="text-slate-300 text-sm space-y-2">
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      Zusätzliche Schutzmaßnahmen entwickeln
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      Implementierungsplan erstellen
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      DSB-Stellungnahme einholen
                    </li>
                    <li class="flex items-center gap-2">
                      <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                      DSFA-Bericht finalisieren
                    </li>
                  </ul>
                </div>
              </div>

              <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg p-4 border border-blue-500/20">
                <h4 class="font-semibold text-blue-300 mb-3">Kritische Erfolgsfaktoren</h4>
                <div class="grid md:grid-cols-3 gap-4 text-sm">
                  <div class="text-slate-300">
                    <div class="font-medium text-blue-300 mb-1">💡 Frühzeitiger Start</div>
                    <div class="text-xs text-slate-400">DSFA vor Entwicklungsbeginn durchführen</div>
                  </div>
                  <div class="text-slate-300">
                    <div class="font-medium text-purple-300 mb-1">🤝 Stakeholder-Einbindung</div>
                    <div class="text-xs text-slate-400">Alle Beteiligten aktiv einbeziehen</div>
                  </div>
                  <div class="text-slate-300">
                    <div class="font-medium text-indigo-300 mb-1">📋 Strukturierte Methodik</div>
                    <div class="text-xs text-slate-400">Bewährte Frameworks verwenden</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-emerald-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-emerald-300">Benötigte Dokumentation & Tools</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <h4 class="font-semibold text-emerald-300">Eingangsdokumente</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20">
                    <div class="flex items-center gap-2 mb-1">
                      <svg class="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="font-medium text-emerald-300">Verarbeitungsverzeichnis</span>
                    </div>
                    <p class="text-slate-400 text-xs">Bestehende VVT-Einträge für die Verarbeitung</p>
                  </div>
                  
                  <div class="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20">
                    <div class="flex items-center gap-2 mb-1">
                      <svg class="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="font-medium text-emerald-300">Prozessdokumentation</span>
                    </div>
                    <p class="text-slate-400 text-xs">Detaillierte Beschreibung der Verarbeitungsschritte</p>
                  </div>

                  <div class="bg-emerald-500/10 rounded-lg p-3 border border-emerald-500/20">
                    <div class="flex items-center gap-2 mb-1">
                      <svg class="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="font-medium text-emerald-300">TOM-Dokumentation</span>
                    </div>
                    <p class="text-slate-400 text-xs">Bestehende technische und organisatorische Maßnahmen</p>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h4 class="font-semibold text-teal-300">Empfohlene Tools</h4>
                <div class="space-y-2 text-sm">
                  <div class="bg-teal-500/10 rounded-lg p-3 border border-teal-500/20">
                    <div class="flex items-center gap-2 mb-1">
                      <svg class="h-4 w-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                      <span class="font-medium text-teal-300">DSFA-Template</span>
                    </div>
                    <p class="text-slate-400 text-xs">Strukturierte Vorlage der Aufsichtsbehörde</p>
                  </div>
                  
                  <div class="bg-teal-500/10 rounded-lg p-3 border border-teal-500/20">
                    <div class="flex items-center gap-2 mb-1">
                      <svg class="h-4 w-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                      <span class="font-medium text-teal-300">Risiko-Matrix</span>
                    </div>
                    <p class="text-slate-400 text-xs">Systematische Risikobewertung und -dokumentation</p>
                  </div>

                  <div class="bg-teal-500/10 rounded-lg p-3 border border-teal-500/20">
                    <div class="flex items-center gap-2 mb-1">
                      <svg class="h-4 w-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2-2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                      </svg>
                      <span class="font-medium text-teal-300">Stakeholder-Register</span>
                    </div>
                    <p class="text-slate-400 text-xs">Übersicht aller beteiligten Parteien und Experten</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ];

  // Continue with remaining chapters...
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  useEffect(() => {
    const progress = Math.round(scrollYProgress.get() * 100);
    setReadingProgress(progress);
  }, [scrollYProgress]);

  useEffect(() => {
    if (readingProgress > 80 && !completedChapters.includes(currentChapter)) {
      setCompletedChapters(prev => [...prev, currentChapter]);
    }
  }, [readingProgress, currentChapter, completedChapters]);

  const nextChapter = () => {
    if (currentChapter < chapters.length - 1) {
      setCurrentChapter(currentChapter + 1);
      setReadingProgress(0);
    }
  };

  const prevChapter = () => {
    if (currentChapter > 0) {
      setCurrentChapter(currentChapter - 1);
      setReadingProgress(0);
    }
  };

  const currentChapterData = chapters[currentChapter];

  return (
    <>
      <SEOHead
        title="DSFA Durchführung – Datenschutz-Folgenabschätzung Leitfaden"
        description="Datenschutz-Folgenabschätzung (DSFA) professionell durchführen: Wann nötig, wie umsetzen, Dokumentation. ✓ Schritt-für-Schritt ✓ Vorlagen ✓ Praxisbeispiele. Jetzt DSFA starten!"
        canonical="/wissen/leitfaden/dsfa-durchfuehrung"
        keywords="dsfa durchführung, datenschutz folgenabschätzung, dpia guide, art 35 dsgvo, risikobewertung datenschutz"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
      

      {/* Hero Section */}
      <motion.section 
        style={{ y }}
        className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 mb-6 text-sm">
              <Link to="/wissen" className="text-slate-400 hover:text-purple-300 transition-colors">Wissen</Link>
              <ChevronRight className="h-4 w-4 text-slate-500" />
              <Link to="/wissen/dsgvo" className="text-slate-400 hover:text-purple-300 transition-colors">DSGVO</Link>
              <ChevronRight className="h-4 w-4 text-slate-500" />
              <span className="text-purple-300">DSFA durchführen</span>
            </div>

            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-purple-500/10 backdrop-blur-sm rounded-full mb-8 border border-purple-500/20"
            >
              <FileCheck className="h-5 w-5 text-purple-400" />
              <span className="text-sm font-semibold text-purple-300">DSFA-Leitfaden</span>
              <BarChart3 className="h-5 w-5 text-pink-400" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              <span className="text-white">Datenschutz-</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Folgenabschätzung
              </span>
              <br />
              <span className="text-white">durchführen</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Schritt-für-Schritt Anleitung für eine <span className="font-semibold text-purple-300">systematische DSFA</span> nach Art. 35 DSGVO
            </p>

            {/* Guide Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 rounded-full backdrop-blur-sm">
                <Target className="h-4 w-4 text-pink-400" />
                <span className="text-sm text-slate-300">Fortgeschritten</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 rounded-full backdrop-blur-sm">
                <BookOpen className="h-4 w-4 text-red-400" />
                <span className="text-sm text-slate-300">{chapters.length} Kapitel</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsReading(true)}
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 text-lg font-semibold"
              >
                <Play className="mr-2 h-5 w-5" />
                Guide starten
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-purple-500/30 hover:border-purple-400 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                DSFA-Template
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Chapter Content */}
      <section ref={contentRef} className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          {/* Chapter Header */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-sm">
                <Link to="/wissen" className="text-slate-400 hover:text-purple-300 transition-colors">Wissen</Link>
                <ChevronRight className="h-4 w-4 text-slate-500" />
                <Link to="/wissen/dsgvo" className="text-slate-400 hover:text-purple-300 transition-colors">DSGVO</Link>
                <ChevronRight className="h-4 w-4 text-slate-500" />
                <span className="text-purple-300">DSFA durchführen</span>
              </div>
              <div className="flex items-center gap-2">
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-400 hover:text-white">
                  <Share2 className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-400 hover:text-white">
                  <Printer className="h-4 w-4" />
                </Button>
                <Button size="sm" variant="outline" className="border-slate-600 text-slate-400 hover:text-white">
                  <Download className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              {currentChapterData.title}
            </h2>
            <p className="text-xl text-slate-300 mb-6">
              {currentChapterData.subtitle}
            </p>
            
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Kapitel {currentChapter + 1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>987 Leser</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>4.6 Bewertung</span>
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
                              ? "bg-purple-500/20 border border-purple-500/30 text-purple-300" 
                              : "hover:bg-slate-700/50 text-slate-300"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                              completedChapters.includes(index) 
                                ? "bg-green-500 text-white"
                                : index === currentChapter
                                ? "bg-purple-500 text-white"
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
                      <Progress value={(completedChapters.length / chapters.length) * 100} className="h-2 mb-2" />
                      <div className="text-xs text-slate-400">
                        {Math.round((completedChapters.length / chapters.length) * 100)}% abgeschlossen
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
                      className="bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    >
                      Nächstes Kapitel
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
                      <CheckCircle2 className="h-4 w-4 mr-2" />
                      Guide abgeschlossen
                    </Button>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

        <Footer />
      </div>
    </>
  );
};

export default DsfaDurchfuehrungGuide;