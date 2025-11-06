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
  Settings,
  Database,
  Building2,
  UserCheck,
  ShieldCheck,
  BadgeCheck,
  FileCheck,
  Clipboard,
  ClipboardCheck,
  Timer,
  Rocket,
  Flag,
  MapPin,
  Globe,
  Smartphone,
  Tablet,
  Laptop,
  Server,
  Wifi,
  Monitor,
  BarChart3,
  PieChart,
  LineChart,
  Activity,
  RefreshCw,
  Search,
  Filter,
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
  Upload,
  Link as LinkIcon,
  Mail,
  Phone,
  MessageSquare,
  Send,
  Bell,
  CreditCard,
  ShoppingCart,
  Package,
  Truck,
  Building,
  Home,
  Briefcase,
  GraduationCap,
  Heart,
  Coffee,
  Headphones,
  Camera,
  Mic,
  Volume2,
  VolumeX,
  Battery,
  Power,
  MoreHorizontal,
  MoreVertical,
  Maximize,
  Minimize,
  Move,
  RotateCw,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Quote,
  Code2,
  Terminal,
  Layers,
  Layout,
  Archive,
  Inbox,
  Send as SendIcon,
  Reply,
  ReplyAll,
  Forward,
  Paperclip,
  AtSign,
  Hash,
  DollarSign,
  Percent,
  Calculator,
  TrendingDown,
  BarChart,
  BarChart2,
  Circle
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DataBreachNotfallGuide: React.FC = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [completedChapters, setCompletedChapters] = useState<number[]>([]);
  const [bookmarked, setBookmarked] = useState(false);
  const [checkedItems, setCheckedItems] = useState<{[key: string]: boolean}>({});
  
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });

  const chapters = [
    {
      id: 0,
      title: 'Sofortmaßnahmen: Die ersten 72 Stunden',
      subtitle: 'Kritische Schritte zur Schadensbegrenzung',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-red-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-red-300">DSGVO-Meldepflicht: 72-Stunden-Regel</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-6">
              Nach Artikel 33 DSGVO müssen Datenschutzverletzungen <strong>innerhalb von 72 Stunden</strong> nach Kenntniserlangung 
              an die zuständige Aufsichtsbehörde gemeldet werden. Bei Verzögerung drohen Bußgelder bis zu 10 Millionen Euro 
              oder 2% des weltweiten Jahresumsatzes.
            </p>
            
            <div class="grid md:grid-cols-3 gap-4 mb-6">
              <div class="bg-red-500/10 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-red-400 mb-2">0-2h</div>
                <div class="text-sm text-slate-300">Incident Detection & Initial Response</div>
              </div>
              <div class="bg-orange-500/10 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-orange-400 mb-2">2-24h</div>
                <div class="text-sm text-slate-300">Investigation & Documentation</div>
              </div>
              <div class="bg-yellow-500/10 rounded-lg p-4 text-center">
                <div class="text-2xl font-bold text-yellow-400 mb-2">24-72h</div>
                <div class="text-sm text-slate-300">Official Notification & Communication</div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white flex items-center gap-3">
              <div class="p-2 bg-red-500 rounded-lg">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              Phase 1: Sofortige Reaktion (0-2 Stunden)
            </h3>
            
            <div class="space-y-4">
              <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                  1. Incident Response Team aktivieren
                </h4>
                <div class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="activate-team" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors">
                      Datenschutzbeauftragten (DSB) informieren
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="notify-it" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors">
                      IT-Sicherheitsteam benachrichtigen
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="inform-legal" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors">
                      Rechtsabteilung/externe Anwaltskanzlei kontaktieren
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="management-brief" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors">
                      Geschäftsführung/Management informieren
                    </span>
                  </label>
                </div>
              </div>

              <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <div class="w-2 h-2 bg-orange-500 rounded-full"></div>
                  2. Schadensbegrenzung einleiten
                </h4>
                <div class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="contain-breach" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors">
                      Datenleck abdichten (Systemzugang sperren, Netzwerk isolieren)
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="preserve-evidence" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors">
                      Beweise sichern (Logs, Screenshots, Zeitstempel)
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="assess-scope" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors">
                      Umfang der Verletzung grob einschätzen
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="backup-systems" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors">
                      Backup-Systeme aktivieren (falls nötig)
                    </span>
                  </label>
                </div>
              </div>

              <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  3. Erste Dokumentation
                </h4>
                <div class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="incident-log" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors">
                      Incident-Log starten (Zeitpunkt der Entdeckung dokumentieren)
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="initial-assessment" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors">
                      Erste Einschätzung der betroffenen Daten notieren
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="timeline-start" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors">
                      Zeitstrahl der Ereignisse beginnen
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-xl p-6">
            <h4 class="text-lg font-bold text-blue-300 mb-4 flex items-center gap-2">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Wichtige Kontakte bereithalten
            </h4>
            <div class="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <div class="font-semibold text-white mb-2">Aufsichtsbehörden:</div>
                <ul class="space-y-1 text-slate-300">
                  <li>• Bundesbeauftragte für Datenschutz (BfDI)</li>
                  <li>• Landesbeauftragte für Datenschutz</li>
                  <li>• EU-Partner-Behörden (bei grenzüberschreitender Verarbeitung)</li>
                </ul>
              </div>
              <div>
                <div class="font-semibold text-white mb-2">Interne Kontakte:</div>
                <ul class="space-y-1 text-slate-300">
                  <li>• Datenschutzbeauftragter</li>
                  <li>• IT-Sicherheitsbeauftragter</li>
                  <li>• Rechtsabteilung/Anwalt</li>
                  <li>• PR/Kommunikationsabteilung</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 1,
      title: 'Detaillierte Analyse und Untersuchung',
      subtitle: 'Umfassende Bewertung des Sicherheitsvorfalls',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-blue-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-blue-300">Systematische Incident-Analyse</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg">
              Eine gründliche Untersuchung ist entscheidend für die korrekte Meldung und zukünftige Prävention. 
              Die Analyse muss alle Aspekte der Datenschutzverletzung erfassen und dokumentieren.
            </p>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white flex items-center gap-3">
              <div class="p-2 bg-blue-500 rounded-lg">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
              1. Ursachenforschung und technische Analyse
            </h3>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h4 class="text-lg font-bold text-white mb-4">Technische Untersuchung</h4>
                  <div class="space-y-3">
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="log-analysis" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Server- und Anwendungslogfiles analysieren
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="network-analysis" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Netzwerkverkehr und Firewall-Logs prüfen
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="system-integrity" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Systemintegrität überprüfen (Malware-Scan)
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="access-analysis" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Zugriffsprotokolle und Benutzeraktivitäten auswerten
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="vulnerability-check" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Sicherheitslücken identifizieren
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h4 class="text-lg font-bold text-white mb-4">Umfang der Verletzung</h4>
                  <div class="space-y-3">
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="data-categories" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Kategorien betroffener Daten ermitteln
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="person-count" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Anzahl betroffener Personen bestimmen
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="data-sensitivity" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Sensibilität der Daten bewerten
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="geographic-scope" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Geografischen Umfang feststellen
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="timeline-breach" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Zeitraum der Verletzung eingrenzen
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white flex items-center gap-3">
              <div class="p-2 bg-purple-500 rounded-lg">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              2. Risikobewertung und Auswirkungsanalyse
            </h3>

            <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h4 class="text-lg font-bold text-white mb-6">Risiko-Matrix zur Bewertung</h4>
              
              <div class="grid grid-cols-4 gap-2 mb-6 text-sm">
                <div class="bg-slate-700 p-3 rounded text-center font-semibold text-white">Kriterium</div>
                <div class="bg-green-500/20 p-3 rounded text-center font-semibold text-green-300">Niedrig</div>
                <div class="bg-yellow-500/20 p-3 rounded text-center font-semibold text-yellow-300">Mittel</div>
                <div class="bg-red-500/20 p-3 rounded text-center font-semibold text-red-300">Hoch</div>
                
                <div class="bg-slate-700/50 p-3 rounded text-white">Datensensibilität</div>
                <div class="bg-green-500/10 p-3 rounded text-slate-300 text-xs">Öffentliche Daten</div>
                <div class="bg-yellow-500/10 p-3 rounded text-slate-300 text-xs">Personenbezogene Daten</div>
                <div class="bg-red-500/10 p-3 rounded text-slate-300 text-xs">Besondere Kategorien</div>
                
                <div class="bg-slate-700/50 p-3 rounded text-white">Anzahl Betroffene</div>
                <div class="bg-green-500/10 p-3 rounded text-slate-300 text-xs">< 100 Personen</div>
                <div class="bg-yellow-500/10 p-3 rounded text-slate-300 text-xs">100-10.000</div>
                <div class="bg-red-500/10 p-3 rounded text-slate-300 text-xs">> 10.000</div>
                
                <div class="bg-slate-700/50 p-3 rounded text-white">Potenzielle Schäden</div>
                <div class="bg-green-500/10 p-3 rounded text-slate-300 text-xs">Minimale Auswirkung</div>
                <div class="bg-yellow-500/10 p-3 rounded text-slate-300 text-xs">Identitätsdiebstahl möglich</div>
                <div class="bg-red-500/10 p-3 rounded text-slate-300 text-xs">Erhebliche Schäden</div>
              </div>

              <div class="space-y-4">
                <h5 class="text-md font-bold text-white">Zu bewertende Faktoren:</h5>
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="financial-risk" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Finanzielle Risiken für Betroffene
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="identity-theft" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Identitätsdiebstahl-Potenzial
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="reputation-damage" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Reputationsschäden
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="discrimination-risk" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Diskriminierungsrisiko
                      </span>
                    </label>
                  </div>
                  <div class="space-y-2">
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="psychological-harm" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Psychische Belastung
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="physical-safety" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Physische Sicherheitsrisiken
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="legal-consequences" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Rechtliche Konsequenzen
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="business-impact" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Geschäftsauswirkungen
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white flex items-center gap-3">
              <div class="p-2 bg-green-500 rounded-lg">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              3. Vollständige Dokumentation
            </h3>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 class="text-lg font-bold text-white mb-4">Technische Dokumentation</h4>
                <div class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="system-architecture" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Systemarchitektur-Diagramm erstellen
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="data-flow" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Datenfluss dokumentieren
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="security-measures" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Sicherheitsmaßnahmen auflisten
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="evidence-collection" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Beweise sammeln und sichern
                    </span>
                  </label>
                </div>
              </div>

              <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 class="text-lg font-bold text-white mb-4">Rechtliche Dokumentation</h4>
                <div class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="legal-basis" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Rechtsgrundlagen der Verarbeitung dokumentieren
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="consent-status" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Einwilligungsstatus prüfen
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="processor-agreements" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Auftragsverarbeitungsverträge prüfen
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="international-transfers" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Internationale Datenübermittlungen bewerten
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: 'Meldepflichten und Behördenkommunikation',
      subtitle: 'Ordnungsgemäße Meldung nach Art. 33 und 34 DSGVO',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-purple-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-purple-300">DSGVO-konforme Meldungen</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-6">
              Die ordnungsgemäße Meldung an Aufsichtsbehörden und betroffene Personen ist rechtlich verpflichtend 
              und muss spezifische Informationen enthalten. Eine unvollständige oder verspätete Meldung kann zu 
              erheblichen Bußgeldern führen.
            </p>
            
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-purple-500/10 rounded-lg p-4">
                <h4 class="font-bold text-purple-300 mb-2">Art. 33 DSGVO - Behördenmeldung</h4>
                <ul class="text-sm text-slate-300 space-y-1">
                  <li>• Frist: 72 Stunden nach Kenntniserlangung</li>
                  <li>• Immer erforderlich bei Risiko für Rechte und Freiheiten</li>
                  <li>• Detaillierte Angaben zu Art und Umfang</li>
                </ul>
              </div>
              <div class="bg-pink-500/10 rounded-lg p-4">
                <h4 class="font-bold text-pink-300 mb-2">Art. 34 DSGVO - Benachrichtigung Betroffener</h4>
                <ul class="text-sm text-slate-300 space-y-1">
                  <li>• Nur bei hohem Risiko erforderlich</li>
                  <li>• Unverzüglich, verständliche Sprache</li>
                  <li>• Ausnahmen bei technischen Schutzmaßnahmen</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white flex items-center gap-3">
              <div class="p-2 bg-purple-500 rounded-lg">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 0h6m-6 0l-2 13h10l-2-13m-6 0h6m0 0l2 13H6l2-13z"></path>
                </svg>
              </div>
              1. Meldung an die Aufsichtsbehörde (Art. 33 DSGVO)
            </h3>

            <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h4 class="text-lg font-bold text-white mb-6">Pflichtangaben der Behördenmeldung</h4>
              
              <div class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <h5 class="text-md font-bold text-purple-300">Grundlegende Informationen</h5>
                    <div class="space-y-3">
                      <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" id="breach-nature" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                        <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                          Art der Datenschutzverletzung beschreiben
                        </span>
                      </label>
                      <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" id="data-categories-affected" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                        <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                          Kategorien betroffener personenbezogener Daten
                        </span>
                      </label>
                      <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" id="person-categories" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                        <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                          Kategorien betroffener Personen
                        </span>
                      </label>
                      <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" id="approximate-numbers" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                        <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                          Ungefähre Anzahl betroffener Personen und Datensätze
                        </span>
                      </label>
                    </div>
                  </div>

                  <div class="space-y-4">
                    <h5 class="text-md font-bold text-purple-300">Folgen und Maßnahmen</h5>
                    <div class="space-y-3">
                      <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" id="likely-consequences" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                        <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                          Wahrscheinliche Folgen der Verletzung
                        </span>
                      </label>
                      <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" id="measures-taken" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                        <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                          Ergriffene oder vorgeschlagene Maßnahmen
                        </span>
                      </label>
                      <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" id="mitigation-measures" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                        <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                          Maßnahmen zur Schadensbegrenzung
                        </span>
                      </label>
                      <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" id="contact-details" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                        <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                          Kontaktdaten für weitere Informationen
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="bg-purple-500/10 rounded-lg p-4 border border-purple-500/20">
                  <h5 class="text-md font-bold text-purple-300 mb-3">Mustermeldung - Struktur</h5>
                  <div class="bg-slate-900/50 rounded p-4 text-sm text-slate-300 space-y-2">
                    <div><strong>1. Verantwortlicher:</strong> [Firmenname, Anschrift, Kontaktdaten]</div>
                    <div><strong>2. Datenschutzbeauftragter:</strong> [Name, Kontaktdaten]</div>
                    <div><strong>3. Art der Verletzung:</strong> [Vertraulichkeit, Integrität, Verfügbarkeit]</div>
                    <div><strong>4. Zeitpunkt:</strong> [Wann eingetreten, wann entdeckt]</div>
                    <div><strong>5. Betroffene Daten:</strong> [Kategorien, Anzahl Datensätze]</div>
                    <div><strong>6. Betroffene Personen:</strong> [Kategorien, ungefähre Anzahl]</div>
                    <div><strong>7. Folgen:</strong> [Risiken für Rechte und Freiheiten]</div>
                    <div><strong>8. Maßnahmen:</strong> [Sofortmaßnahmen, Prävention]</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white flex items-center gap-3">
              <div class="p-2 bg-pink-500 rounded-lg">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              2. Benachrichtigung betroffener Personen (Art. 34 DSGVO)
            </h3>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 class="text-lg font-bold text-white mb-4">Wann ist eine Benachrichtigung erforderlich?</h4>
                <div class="space-y-4">
                  <div class="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                    <h5 class="text-green-300 font-semibold mb-2">Benachrichtigung ERFORDERLICH bei:</h5>
                    <ul class="text-sm text-slate-300 space-y-1">
                      <li>• Hohem Risiko für Rechte und Freiheiten</li>
                      <li>• Möglichen erheblichen nachteiligen Auswirkungen</li>
                      <li>• Identitätsdiebstahl oder Betrug möglich</li>
                      <li>• Finanzielle Verluste wahrscheinlich</li>
                      <li>• Rufschädigung zu befürchten</li>
                    </ul>
                  </div>
                  
                  <div class="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <h5 class="text-red-300 font-semibold mb-2">Ausnahmen (keine Benachrichtigung):</h5>
                    <ul class="text-sm text-slate-300 space-y-1">
                      <li>• Technische Schutzmaßnahmen (z.B. Verschlüsselung)</li>
                      <li>• Nachträgliche Maßnahmen reduzieren Risiko</li>
                      <li>• Unverhältnismäßiger Aufwand (über 500€/Person)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 class="text-lg font-bold text-white mb-4">Pflichtinhalte der Benachrichtigung</h4>
                <div class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="clear-description" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Klare und verständliche Beschreibung der Verletzung
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="dpo-contact" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Kontaktdaten des Datenschutzbeauftragten
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="likely-consequences-individuals" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Beschreibung wahrscheinlicher Folgen
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="measures-description" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Ergriffene oder vorgeschlagene Abhilfemaßnahmen
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="protection-recommendations" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Empfehlungen zum Schutz vor Folgeschäden
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white flex items-center gap-3">
              <div class="p-2 bg-blue-500 rounded-lg">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              3. Internationale und grenzüberschreitende Meldungen
            </h3>

            <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h4 class="text-lg font-bold text-white mb-6">Zuständigkeiten bei grenzüberschreitender Verarbeitung</h4>
              
              <div class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-4">
                    <h5 class="text-md font-bold text-blue-300">Federführende Aufsichtsbehörde</h5>
                    <div class="space-y-3">
                      <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" id="main-establishment" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                        <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                          Hauptniederlassung in der EU identifizieren
                        </span>
                      </label>
                      <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" id="lead-authority" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                        <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                          Federführende Aufsichtsbehörde bestimmen
                        </span>
                      </label>
                      <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" id="one-stop-shop" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                        <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                          One-Stop-Shop-Mechanismus anwenden
                        </span>
                      </label>
                    </div>
                  </div>

                  <div class="space-y-4">
                    <h5 class="text-md font-bold text-blue-300">Betroffene Aufsichtsbehörden</h5>
                    <div class="space-y-3">
                      <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" id="concerned-authorities" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                        <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                          Alle betroffenen Aufsichtsbehörden identifizieren
                        </span>
                      </label>
                      <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" id="parallel-notification" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                        <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                          Parallele Information sicherstellen
                        </span>
                      </label>
                      <label class="flex items-center gap-3 cursor-pointer group">
                        <input type="checkbox" id="cooperation-process" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                        <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                          Kooperationsverfahren befolgen
                        </span>
                      </label>
                    </div>
                  </div>
                </div>

                <div class="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20">
                  <h5 class="text-md font-bold text-blue-300 mb-3">Wichtige EU-Aufsichtsbehörden</h5>
                  <div class="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div class="font-semibold text-white mb-1">Deutschland</div>
                      <div class="text-slate-300">BfDI, Landesbeauftragte</div>
                    </div>
                    <div>
                      <div class="font-semibold text-white mb-1">Österreich</div>
                      <div class="text-slate-300">Datenschutzbehörde (DSB)</div>
                    </div>
                    <div>
                      <div class="font-semibold text-white mb-1">Frankreich</div>
                      <div class="text-slate-300">CNIL</div>
                    </div>
                    <div>
                      <div class="font-semibold text-white mb-1">Niederlande</div>
                      <div class="text-slate-300">Autoriteit Persoonsgegevens</div>
                    </div>
                    <div>
                      <div class="font-semibold text-white mb-1">Irland</div>
                      <div class="text-slate-300">DPC</div>
                    </div>
                    <div>
                      <div class="font-semibold text-white mb-1">Italien</div>
                      <div class="text-slate-300">Garante</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white flex items-center gap-3">
              <div class="p-2 bg-green-500 rounded-lg">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              4. Musterschreiben und Vorlagen
            </h3>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 class="text-lg font-bold text-white mb-4">Vorlage: Behördenmeldung</h4>
                <div class="bg-slate-900/50 rounded p-4 text-xs text-slate-300 space-y-3">
                  <div>
                    <strong>Betreff:</strong> Meldung einer Datenschutzverletzung gemäß Art. 33 DSGVO
                  </div>
                  <div>
                    <strong>1. Verantwortlicher:</strong><br/>
                    [Unternehmensname]<br/>
                    [Vollständige Adresse]<br/>
                    [Kontaktdaten]
                  </div>
                  <div>
                    <strong>2. Datenschutzbeauftragter:</strong><br/>
                    [Name und Kontaktdaten]
                  </div>
                  <div>
                    <strong>3. Beschreibung der Datenschutzverletzung:</strong><br/>
                    Art: [Vertraulichkeit/Integrität/Verfügbarkeit]<br/>
                    Zeitpunkt: [Wann eingetreten, wann entdeckt]<br/>
                    Ursache: [Technischer Fehler/Menschliches Versagen/Cyberangriff]
                  </div>
                  <div>
                    <strong>4. Betroffene Daten und Personen:</strong><br/>
                    Datenkategorien: [...]<br/>
                    Personenkategorien: [...]<br/>
                    Ungefähre Anzahl: [...]
                  </div>
                  <div>
                    <strong>5. Wahrscheinliche Folgen:</strong><br/>
                    [Risikobewertung]
                  </div>
                  <div>
                    <strong>6. Ergriffene Maßnahmen:</strong><br/>
                    [Sofortmaßnahmen und Prävention]
                  </div>
                </div>
              </div>

              <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 class="text-lg font-bold text-white mb-4">Vorlage: Betroffenenbenachrichtigung</h4>
                <div class="bg-slate-900/50 rounded p-4 text-xs text-slate-300 space-y-3">
                  <div>
                    <strong>Betreff:</strong> Wichtige Information zu Ihren personenbezogenen Daten
                  </div>
                  <div>
                    <strong>Sehr geehrte Damen und Herren,</strong>
                  </div>
                  <div>
                    wir müssen Sie über einen Sicherheitsvorfall informieren, der Ihre personenbezogenen Daten betreffen könnte.
                  </div>
                  <div>
                    <strong>Was ist passiert?</strong><br/>
                    [Verständliche Beschreibung des Vorfalls]
                  </div>
                  <div>
                    <strong>Welche Daten sind betroffen?</strong><br/>
                    [Spezifische Datenkategorien]
                  </div>
                  <div>
                    <strong>Was haben wir unternommen?</strong><br/>
                    [Sofortmaßnahmen und Prävention]
                  </div>
                  <div>
                    <strong>Was können Sie tun?</strong><br/>
                    [Konkrete Handlungsempfehlungen]
                  </div>
                  <div>
                    <strong>Kontakt:</strong><br/>
                    Bei Fragen wenden Sie sich an:<br/>
                    [Kontaktdaten Datenschutzbeauftragter]
                  </div>
                  <div>
                    Mit freundlichen Grüßen<br/>
                    [Unterschrift]
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
      title: 'Nachbearbeitung und Prävention',
      subtitle: 'Lessons Learned und Verbesserung der Sicherheit',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/20 rounded-xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-green-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-green-300">Kontinuierliche Verbesserung</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg">
              Die Nachbearbeitung eines Datenschutzvorfalls ist genauso wichtig wie die unmittelbare Reaktion. 
              Systematische Analyse, Dokumentation und Präventionsmaßnahmen stärken die langfristige Datensicherheit 
              und demonstrieren den Aufsichtsbehörden proaktives Compliance-Management.
            </p>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white flex items-center gap-3">
              <div class="p-2 bg-green-500 rounded-lg">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
              </div>
              1. Post-Incident-Review und Lessons Learned
            </h3>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 class="text-lg font-bold text-white mb-4">Systematische Nachanalyse</h4>
                <div class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="timeline-analysis" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Detaillierte Zeitanalyse erstellen
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="root-cause" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Root-Cause-Analyse durchführen
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="response-effectiveness" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Wirksamkeit der Reaktion bewerten
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="communication-review" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Kommunikationsabläufe analysieren
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="decision-quality" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Qualität der Entscheidungsfindung prüfen
                    </span>
                  </label>
                </div>
              </div>

              <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 class="text-lg font-bold text-white mb-4">Stakeholder-Feedback</h4>
                <div class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="team-feedback" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Feedback des Incident-Response-Teams
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="management-input" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Input von Management und Geschäftsführung
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="external-advisors" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Bewertung durch externe Berater
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="affected-parties" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Rückmeldungen betroffener Personen
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="authority-feedback" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Feedback der Aufsichtsbehörde
                    </span>
                  </label>
                </div>
              </div>
            </div>

            <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h4 class="text-lg font-bold text-white mb-6">5-Why-Analyse Framework</h4>
              
              <div class="space-y-4">
                <div class="bg-slate-900/50 rounded p-4">
                  <div class="text-white font-semibold mb-2">Beispiel: Unerlaubter Datenzugriff</div>
                  <div class="space-y-2 text-sm text-slate-300">
                    <div><strong>1. Warum</strong> konnte auf sensible Daten zugegriffen werden?</div>
                    <div class="ml-4">→ Das Benutzerkonto hatte zu weitreichende Berechtigungen</div>
                    
                    <div><strong>2. Warum</strong> hatte das Konto zu weitreichende Berechtigungen?</div>
                    <div class="ml-4">→ Bei der Einrichtung wurde das Prinzip der minimalen Berechtigung nicht befolgt</div>
                    
                    <div><strong>3. Warum</strong> wurde das Prinzip nicht befolgt?</div>
                    <div class="ml-4">→ Es gab keine klaren Richtlinien für Berechtigungsvergabe</div>
                    
                    <div><strong>4. Warum</strong> gab es keine klaren Richtlinien?</div>
                    <div class="ml-4">→ Der Berechtigungsprozess war nicht dokumentiert</div>
                    
                    <div><strong>5. Warum</strong> war der Prozess nicht dokumentiert?</div>
                    <div class="ml-4">→ Managementverantwortlichkeiten waren nicht klar definiert</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white flex items-center gap-3">
              <div class="p-2 bg-blue-500 rounded-lg">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                </svg>
              </div>
              2. Verbesserung der Sicherheitsmaßnahmen
            </h3>

            <div class="space-y-6">
              <div class="grid md:grid-cols-3 gap-6">
                <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
                    Technische Maßnahmen
                  </h4>
                  <div class="space-y-3">
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="access-controls" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Zugriffskontrollen verstärken
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="encryption-upgrade" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Verschlüsselung implementieren/verbessern
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="monitoring-systems" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Monitoring-Systeme ausbauen
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="backup-systems" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Backup-Systeme optimieren
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="network-security" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Netzwerksicherheit verstärken
                      </span>
                    </label>
                  </div>
                </div>

                <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                    Organisatorische Maßnahmen
                  </h4>
                  <div class="space-y-3">
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="policy-updates" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Richtlinien aktualisieren
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="process-improvement" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Prozesse optimieren
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="roles-responsibilities" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Rollen und Verantwortlichkeiten klären
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="incident-procedures" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Incident-Verfahren verbessern
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="vendor-management" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Vendor-Management stärken
                      </span>
                    </label>
                  </div>
                </div>

                <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                  <h4 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                    Personelle Maßnahmen
                  </h4>
                  <div class="space-y-3">
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="training-programs" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Schulungsprogramme erweitern
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="awareness-campaigns" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Awareness-Kampagnen starten
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="expert-consultation" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Externe Expertise einbinden
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="team-expansion" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Team-Kapazitäten erweitern
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="regular-audits" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Regelmäßige Audits planen
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white flex items-center gap-3">
              <div class="p-2 bg-yellow-500 rounded-lg">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              3. Aktualisierung von Notfallplänen
            </h3>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 class="text-lg font-bold text-white mb-4">Notfallplan-Updates</h4>
                <div class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="scenario-updates" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Neue Szenarien in Notfallplan aufnehmen
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="contact-lists" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Kontaktlisten aktualisieren
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="escalation-paths" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Eskalationswege optimieren
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="communication-templates" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Kommunikationsvorlagen überarbeiten
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="testing-schedule" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Testplan für Notfallübungen erstellen
                    </span>
                  </label>
                </div>
              </div>

              <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
                <h4 class="text-lg font-bold text-white mb-4">Schulung und Simulation</h4>
                <div class="space-y-3">
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="tabletop-exercises" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Tabletop-Übungen durchführen
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="red-team-exercises" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Red-Team-Übungen organisieren
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="cross-functional-training" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Abteilungsübergreifende Schulungen
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="external-workshops" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Externe Workshops und Seminare
                    </span>
                  </label>
                  <label class="flex items-center gap-3 cursor-pointer group">
                    <input type="checkbox" id="certification-programs" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                    <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                      Zertifizierungsprogramme für Mitarbeiter
                    </span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-6">
            <h3 class="text-2xl font-bold text-white flex items-center gap-3">
              <div class="p-2 bg-indigo-500 rounded-lg">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              4. Monitoring und kontinuierliche Überwachung
            </h3>

            <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700">
              <h4 class="text-lg font-bold text-white mb-6">Langfristige Überwachungsstrategie</h4>
              
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-4">
                  <h5 class="text-md font-bold text-indigo-300">Technisches Monitoring</h5>
                  <div class="space-y-3">
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="siem-deployment" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        SIEM-System implementieren/erweitern
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="automated-alerts" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Automatisierte Alarmsysteme einrichten
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="vulnerability-scanning" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Regelmäßige Vulnerability-Scans
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="penetration-testing" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Penetrationstests planen
                      </span>
                    </label>
                  </div>
                </div>

                <div class="space-y-4">
                  <h5 class="text-md font-bold text-indigo-300">Compliance-Monitoring</h5>
                  <div class="space-y-3">
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="privacy-audits" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Regelmäßige Datenschutz-Audits
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="policy-compliance" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Richtlinien-Compliance überprüfen
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="training-effectiveness" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Schulungseffektivität messen
                      </span>
                    </label>
                    <label class="flex items-center gap-3 cursor-pointer group">
                      <input type="checkbox" id="kpi-tracking" class="w-4 h-4 rounded border-slate-600 text-blue-500 focus:ring-blue-500">
                      <span class="text-slate-300 group-hover:text-white transition-colors text-sm">
                        Datenschutz-KPIs verfolgen
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div class="mt-6 bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20">
                <h5 class="text-md font-bold text-indigo-300 mb-3">Wichtige KPIs für Datenschutz-Monitoring</h5>
                <div class="grid md:grid-cols-2 gap-4 text-sm">
                  <div class="space-y-1">
                    <div class="text-white font-semibold">Reaktionszeiten:</div>
                    <ul class="text-slate-300 space-y-1">
                      <li>• Zeit bis zur Incident-Erkennung</li>
                      <li>• Zeit bis zur ersten Reaktion</li>
                      <li>• Zeit bis zur Behördenmeldung</li>
                      <li>• Zeit bis zur Schadensbegrenzung</li>
                    </ul>
                  </div>
                  <div class="space-y-1">
                    <div class="text-white font-semibold">Qualitätsindikatoren:</div>
                    <ul class="text-slate-300 space-y-1">
                      <li>• Vollständigkeit der Dokumentation</li>
                      <li>• Anzahl nachträglicher Korrekturen</li>
                      <li>• Betroffenenzufriedenheit</li>
                      <li>• Behördenfeedback-Score</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-xl p-6">
            <h4 class="text-lg font-bold text-green-300 mb-4 flex items-center gap-2">
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Abschließende Empfehlungen
            </h4>
            <div class="grid md:grid-cols-3 gap-4 text-sm">
              <div>
                <div class="font-semibold text-white mb-2">Dokumentation:</div>
                <ul class="space-y-1 text-slate-300">
                  <li>• Vollständige Incident-Dokumentation archivieren</li>
                  <li>• Lessons-Learned-Report erstellen</li>
                  <li>• Rechtfertigungsnachweis für Aufsichtsbehörde</li>
                </ul>
              </div>
              <div>
                <div class="font-semibold text-white mb-2">Kontinuität:</div>
                <ul class="space-y-1 text-slate-300">
                  <li>• Regelmäßige Plan-Updates</li>
                  <li>• Jährliche Notfallübungen</li>
                  <li>• Kontinuierliche Mitarbeiterschulung</li>
                </ul>
              </div>
              <div>
                <div class="font-semibold text-white mb-2">Verbesserung:</div>
                <ul class="space-y-1 text-slate-300">
                  <li>• Präventive Sicherheitsmaßnahmen</li>
                  <li>• Technologie-Updates</li>
                  <li>• Externe Expertise nutzen</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ];

  const handleChapterComplete = (chapterId: number) => {
    setCompletedChapters(prev => 
      prev.includes(chapterId) 
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  useEffect(() => {
    const handleScroll = () => {
      if (contentRef.current) {
        const scrolled = window.scrollY;
        const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
        const progress = (scrolled / maxScroll) * 100;
        setReadingProgress(Math.min(progress, 100));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentChapter]);

  useEffect(() => {
    const handleCheckboxChange = (e: Event) => {
      const target = e.target as HTMLInputElement;
      if (target.type === 'checkbox') {
        setCheckedItems(prev => ({
          ...prev,
          [target.id]: target.checked
        }));
      }
    };

    document.addEventListener('change', handleCheckboxChange);
    return () => document.removeEventListener('change', handleCheckboxChange);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-red-500 rounded-xl">
                <AlertTriangle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                Data Breach Notfallplan
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-4xl mx-auto">
              Professioneller Leitfaden für die DSGVO-konforme Behandlung von Datenschutzverletzungen. 
              Von Sofortmaßnahmen bis zur langfristigen Prävention.
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
              <Badge variant="outline" className="bg-orange-500/10 border-orange-500/20 text-orange-300">
                <Target className="h-4 w-4 mr-2" />
                Notfallmanagement
              </Badge>
              <Badge variant="outline" className="bg-blue-500/10 border-blue-500/20 text-blue-300">
                <Shield className="h-4 w-4 mr-2" />
                Compliance-Niveau: Experte
              </Badge>
              <Badge variant="outline" className="bg-purple-500/10 border-purple-500/20 text-purple-300">
                <Users className="h-4 w-4 mr-2" />
                4 Kapitel
              </Badge>
            </div>

          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <Card className="bg-slate-800/50 border-slate-700 mb-6">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Fortschritt</h3>
                    <Progress value={readingProgress} className="mb-4" />
                    <p className="text-sm text-slate-300 mb-4">
                      {Math.round(readingProgress)}% abgeschlossen
                    </p>
                    
                    <div className="space-y-3">
                      {chapters.map((chapter, index) => (
                        <button
                          key={chapter.id}
                          onClick={() => setCurrentChapter(index)}
                          className={cn(
                            "w-full text-left p-3 rounded-lg transition-all duration-200",
                            currentChapter === index
                              ? "bg-blue-500/20 border border-blue-500/30 text-blue-300"
                              : "bg-slate-700/30 border border-slate-600/30 text-slate-300 hover:bg-slate-700/50"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            {completedChapters.includes(chapter.id) ? (
                              <CheckCircle className="h-5 w-5 text-green-400" />
                            ) : (
                              <div className="w-5 h-5 border-2 border-slate-500 rounded-full" />
                            )}
                            <div>
                              <div className="font-semibold text-sm">{chapter.title}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-slate-700">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-white mb-4">Schnellaktionen</h3>
                    <div className="space-y-3">
                      <Button
                        onClick={() => setBookmarked(!bookmarked)}
                        variant="outline"
                        size="sm"
                        className="w-full justify-start"
                      >
                        <Bookmark className={cn("h-4 w-4 mr-2", bookmarked && "fill-current")} />
                        {bookmarked ? "Gespeichert" : "Speichern"}
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Download className="h-4 w-4 mr-2" />
                        PDF Download
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Printer className="h-4 w-4 mr-2" />
                        Drucken
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start">
                        <Share2 className="h-4 w-4 mr-2" />
                        Teilen
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-3">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-8" ref={contentRef}>
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h2 className="text-3xl font-bold text-white mb-2">
                        {chapters[currentChapter].title}
                      </h2>
                      <p className="text-lg text-slate-300">
                        {chapters[currentChapter].subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="bg-blue-500/10 border-blue-500/20 text-blue-300">
                        <Clock className="h-4 w-4 mr-2" />
                        Kapitel {currentChapter + 1}
                      </Badge>
                      <Button
                        onClick={() => handleChapterComplete(chapters[currentChapter].id)}
                        variant={completedChapters.includes(chapters[currentChapter].id) ? "default" : "outline"}
                        size="sm"
                      >
                        {completedChapters.includes(chapters[currentChapter].id) ? (
                          <CheckCircle className="h-4 w-4 mr-2" />
                        ) : (
                          <Circle className="h-4 w-4 mr-2" />
                        )}
                        {completedChapters.includes(chapters[currentChapter].id) ? "Abgeschlossen" : "Als abgeschlossen markieren"}
                      </Button>
                    </div>
                  </div>

                  <div 
                    className="prose prose-slate prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: chapters[currentChapter].content }}
                  />

                  <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-700">
                    <Button
                      onClick={() => setCurrentChapter(Math.max(0, currentChapter - 1))}
                      disabled={currentChapter === 0}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Vorheriges Kapitel
                    </Button>

                    <div className="flex items-center gap-2">
                      <span className="text-sm text-slate-400">
                        Kapitel {currentChapter + 1} von {chapters.length}
                      </span>
                    </div>

                    <Button
                      onClick={() => setCurrentChapter(Math.min(chapters.length - 1, currentChapter + 1))}
                      disabled={currentChapter === chapters.length - 1}
                      className="flex items-center gap-2"
                    >
                      Nächstes Kapitel
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {currentChapter === chapters.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-8"
                >
                  <Card className="bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20">
                    <CardContent className="p-8 text-center">
                      <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Herzlichen Glückwunsch!
                      </h3>
                      <p className="text-slate-300 mb-6">
                        Sie haben den Data Breach Notfallplan erfolgreich abgeschlossen. 
                        Sie sind nun bestens vorbereitet auf Datenschutzverletzungen und können 
                        im Ernstfall professionell und DSGVO-konform reagieren.
                      </p>
                      <div className="flex flex-wrap items-center justify-center gap-4">
                        <Button asChild>
                          <Link to="/wissen/dsgvo-leitfaeden">
                            <BookOpen className="h-4 w-4 mr-2" />
                            Weitere Leitfäden
                          </Link>
                        </Button>
                        <Button variant="outline">
                          <Download className="h-4 w-4 mr-2" />
                          Zertifikat herunterladen
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
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
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Datenpannen automatisch managen
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Reagieren Sie bei Datenpannen sofort mit unserem automatischen Incident-Response-System. 72-Stunden-Frist einhalten, Meldungen erstellen und alle Beteiligten koordinieren.
                  </p>
                  <Button
                    size="lg"
                    className="bg-orange-600 hover:bg-orange-700 text-white"
                    onClick={() => window.location.href = '/features'}
                  >
                    Incident-Management ansehen
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
  );
};

export default DataBreachNotfallGuide;