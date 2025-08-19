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
  Database,
  ClipboardList,
  Globe,
  Building2,
  UserCheck,
  FileCheck,
  Settings,
  AlertOctagon
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import SEOHead from '@/components/SEOHead';

const VerarbeitungsverzeichnisGuide: React.FC = () => {
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
      title: 'Einführung & Rechtliche Grundlagen',
      subtitle: 'Art. 30 DSGVO verstehen',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-4 lg:p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-blue-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-blue-300">Was ist ein Verarbeitungsverzeichnis?</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-4">
              Das <strong>Verzeichnis von Verarbeitungstätigkeiten (VVT)</strong> ist das zentrale Dokumentationsinstrument 
              der DSGVO und eine der wichtigsten Compliance-Pflichten für jedes Unternehmen. Es bietet einen vollständigen 
              Überblick über alle Datenverarbeitungen in Ihrer Organisation.
            </p>
            <div class="bg-blue-500/5 rounded-lg p-4 border-l-4 border-blue-500">
              <p class="text-slate-300 italic">
                "Jeder Verantwortliche [...] führt ein Verzeichnis aller Verarbeitungstätigkeiten, die ihrer Zuständigkeit unterliegen." 
                - Art. 30 Abs. 1 DSGVO
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
                Warum ist es wichtig?
              </h3>
              <div class="space-y-3">
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <div class="text-green-400 font-semibold">Transparenz schaffen</div>
                  <div class="text-slate-300">Vollständiger Überblick über alle Datenverarbeitungen</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <div class="text-green-400 font-semibold">Rechenschaftspflicht</div>
                  <div class="text-slate-300">Nachweis der DSGVO-Konformität</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <div class="text-green-400 font-semibold">Risiken identifizieren</div>
                  <div class="text-slate-300">Problematische Verarbeitungen erkennen</div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <div class="text-green-400 font-semibold">Compliance-Management</div>
                  <div class="text-slate-300">Grundlage für Audits und Prüfungen</div>
                </div>
              </div>
            </div>
            
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-white flex items-center gap-3">
                <div class="p-2 bg-red-500 rounded-lg">
                  <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                Bußgeldrisiken
              </h3>
              <div class="bg-slate-800/60 rounded-lg p-4 space-y-3">
                <div class="text-red-400 font-semibold">Bei fehlendem Verzeichnis:</div>
                <ul class="text-slate-300 space-y-2 ml-4">
                  <li class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    Bis zu <strong>20 Millionen Euro</strong> Bußgeld
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    Oder <strong>4% des weltweiten Jahresumsatzes</strong>
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    Zusätzliche Zwangsgelder möglich
                  </li>
                  <li class="flex items-start gap-2">
                    <span class="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                    Reputationsschäden und Vertrauensverlust
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-3 bg-yellow-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-yellow-300">Keine Ausnahme für KMU!</h3>
            </div>
            <p class="text-slate-300 leading-relaxed">
              Entgegen einem weit verbreiteten Irrtum gibt es <strong>keine generelle Ausnahme für kleine Unternehmen</strong>. 
              Die Ausnahme in Art. 30 Abs. 5 DSGVO greift nur bei:
            </p>
            <ul class="text-slate-300 space-y-2 mt-4 ml-4">
              <li>• Weniger als 250 Mitarbeitern UND</li>
              <li>• Nur gelegentlicher Verarbeitung UND</li>
              <li>• Keinem Risiko für Betroffene UND</li>
              <li>• Keinen besonderen Datenkategorien</li>
            </ul>
            <p class="text-yellow-300 font-semibold mt-4">
              In der Praxis: 99% aller Unternehmen benötigen ein Verarbeitungsverzeichnis!
            </p>
          </div>
        </div>
      `
    },
    {
      id: 1,
      title: 'Pflichtangaben für Verantwortliche',
      subtitle: 'Art. 30 Abs. 1 DSGVO im Detail',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 class="text-2xl font-bold text-white mb-4">Die 8 Pflichtangaben im Überblick</h3>
            <p class="text-xl text-slate-300 leading-relaxed mb-4">
              Für jede Verarbeitungstätigkeit müssen Sie folgende Informationen dokumentieren:
            </p>
          </div>

          <div class="space-y-8">
            <!-- 1. Kontaktdaten -->
            <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  1
                </div>
                <div class="flex-grow">
                  <h4 class="text-2xl font-bold text-white mb-4">Kontaktdaten</h4>
                  <div class="bg-blue-500/10 rounded-lg p-4 border border-blue-500/20 mb-4">
                    <ul class="space-y-2 text-slate-300">
                      <li>✅ Name und Kontaktdaten des Verantwortlichen</li>
                      <li>✅ Name und Kontaktdaten des Vertreters (falls vorhanden)</li>
                      <li>✅ Name und Kontaktdaten des Datenschutzbeauftragten</li>
                    </ul>
                  </div>
                  <div class="bg-slate-800/60 rounded-lg p-4">
                    <div class="font-semibold text-blue-300 mb-2">Praxis-Beispiel:</div>
                    <div class="text-slate-400 text-sm font-mono">
                      Verantwortlicher: Mustermann GmbH<br/>
                      Anschrift: Max-Planck-Str. 15, 12345 Berlin<br/>
                      Tel: +49 30 12345678<br/>
                      E-Mail: datenschutz@mustermann.de<br/>
                      DSB: Dr. Anna Schmidt, dsb@mustermann.de
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2. Zwecke -->
            <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  2
                </div>
                <div class="flex-grow">
                  <h4 class="text-2xl font-bold text-white mb-4">Zwecke der Verarbeitung</h4>
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                    <div class="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                      <div class="text-red-300 font-semibold mb-2">❌ Schlecht:</div>
                      <ul class="text-slate-400 text-sm space-y-1">
                        <li>• "Kundenverwaltung"</li>
                        <li>• "Administrative Zwecke"</li>
                        <li>• "Geschäftstätigkeit"</li>
                      </ul>
                    </div>
                    <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                      <div class="text-green-300 font-semibold mb-2">✅ Gut:</div>
                      <ul class="text-slate-400 text-sm space-y-1">
                        <li>• "Bearbeitung von Online-Shop Bestellungen"</li>
                        <li>• "Versand wöchentlicher Newsletter"</li>
                        <li>• "Lohnabrechnung für Mitarbeiter"</li>
                      </ul>
                    </div>
                  </div>
                  <div class="bg-green-500/5 rounded-lg p-4 border-l-4 border-green-500">
                    <div class="font-semibold text-green-300 mb-2">Tipp:</div>
                    <div class="text-slate-400 text-sm">
                      Zwecke müssen konkret, spezifisch und nachvollziehbar sein. Vermeiden Sie vage Formulierungen!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 3. Betroffene Personen -->
            <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  3
                </div>
                <div class="flex-grow">
                  <h4 class="text-2xl font-bold text-white mb-4">Kategorien betroffener Personen</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
                    <div class="bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                      <div class="text-purple-300 font-semibold mb-1">Kunden</div>
                      <div class="text-slate-400 text-sm">Käufer, Interessenten, Abonnenten</div>
                    </div>
                    <div class="bg-pink-500/10 rounded-lg p-3 border border-pink-500/20">
                      <div class="text-pink-300 font-semibold mb-1">Mitarbeiter</div>
                      <div class="text-slate-400 text-sm">Beschäftigte, Bewerber, Ehemalige</div>
                    </div>
                    <div class="bg-purple-400/10 rounded-lg p-3 border border-purple-400/20">
                      <div class="text-purple-400 font-semibold mb-1">Partner</div>
                      <div class="text-slate-400 text-sm">Lieferanten, Dienstleister</div>
                    </div>
                  </div>
                  <div class="bg-purple-500/5 rounded-lg p-4 border-l-4 border-purple-500">
                    <div class="font-semibold text-purple-300 mb-2">Wichtig:</div>
                    <div class="text-slate-400 text-sm">
                      Besondere Kategorien wie Minderjährige oder schutzbedürftige Personen gesondert kennzeichnen!
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 4. Datenkategorien -->
            <div class="bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-8">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  4
                </div>
                <div class="flex-grow">
                  <h4 class="text-2xl font-bold text-white mb-4">Kategorien personenbezogener Daten</h4>
                  <div class="space-y-4">
                    <div class="bg-slate-800/60 rounded-lg p-4">
                      <h5 class="text-orange-300 font-semibold mb-3">Strukturierte Übersicht:</h5>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <div class="text-slate-200 font-medium mb-1">Stammdaten</div>
                          <div class="text-slate-400">Name, Adresse, Geburtsdatum</div>
                        </div>
                        <div>
                          <div class="text-slate-200 font-medium mb-1">Kontaktdaten</div>
                          <div class="text-slate-400">E-Mail, Telefon, Fax</div>
                        </div>
                        <div>
                          <div class="text-slate-200 font-medium mb-1">Vertragsdaten</div>
                          <div class="text-slate-400">Kundennummer, Bestellhistorie</div>
                        </div>
                        <div>
                          <div class="text-slate-200 font-medium mb-1">Technische Daten</div>
                          <div class="text-slate-400">IP-Adresse, Browser-Info</div>
                        </div>
                      </div>
                    </div>
                    <div class="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                      <div class="flex items-center gap-2 text-red-300 font-semibold mb-2">
                        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                        </svg>
                        Besondere Kategorien (Art. 9 DSGVO)
                      </div>
                      <div class="text-slate-400 text-sm">
                        Gesundheitsdaten, biometrische Daten, ethnische Herkunft etc. müssen speziell gekennzeichnet werden!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 5. Empfänger -->
            <div class="bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-500/20 rounded-xl p-8">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  5
                </div>
                <div class="flex-grow">
                  <h4 class="text-2xl font-bold text-white mb-4">Kategorien von Empfängern</h4>
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div class="bg-teal-500/10 rounded-lg p-4 border border-teal-500/20">
                      <div class="text-teal-300 font-semibold mb-3">Interne Empfänger</div>
                      <ul class="text-slate-400 text-sm space-y-1">
                        <li>• Fachabteilungen</li>
                        <li>• Tochtergesellschaften</li>
                        <li>• Konzernunternehmen</li>
                      </ul>
                    </div>
                    <div class="bg-cyan-500/10 rounded-lg p-4 border border-cyan-500/20">
                      <div class="text-cyan-300 font-semibold mb-3">Externe Empfänger</div>
                      <ul class="text-slate-400 text-sm space-y-1">
                        <li>• IT-Dienstleister</li>
                        <li>• Marketing-Agenturen</li>
                        <li>• Behörden (bei rechtl. Verpflichtung)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 6. Drittlandübermittlung -->
            <div class="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  6
                </div>
                <div class="flex-grow">
                  <h4 class="text-2xl font-bold text-white mb-4">Übermittlungen in Drittländer</h4>
                  <div class="bg-indigo-500/10 rounded-lg p-4 border border-indigo-500/20 mb-4">
                    <div class="font-semibold text-indigo-300 mb-2">Angaben bei Drittlandübermittlung:</div>
                    <ul class="text-slate-400 space-y-1">
                      <li>✅ Zielländer konkret benennen</li>
                      <li>✅ Rechtsgrundlage für Übermittlung</li>
                      <li>✅ Geeignete Garantien dokumentieren</li>
                    </ul>
                  </div>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div class="bg-slate-800/60 rounded-lg p-3">
                      <div class="text-indigo-300 font-medium">Angemessenheitsbeschluss</div>
                      <div class="text-slate-400">EU-Kommission bestätigt Datenschutzniveau</div>
                    </div>
                    <div class="bg-slate-800/60 rounded-lg p-3">
                      <div class="text-purple-300 font-medium">Standardvertragsklauseln</div>
                      <div class="text-slate-400">Von EU genehmigte Vertragsklauseln</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 7. Löschfristen -->
            <div class="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-8">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  7
                </div>
                <div class="flex-grow">
                  <h4 class="text-2xl font-bold text-white mb-4">Löschfristen</h4>
                  <div class="space-y-3">
                    <div class="bg-yellow-500/10 rounded-lg p-4 border border-yellow-500/20">
                      <h5 class="text-yellow-300 font-semibold mb-2">Typische Löschfristen:</h5>
                      <div class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                        <div class="text-slate-400">
                          <span class="text-slate-200">Kundendaten:</span> 10 Jahre (HGB)
                        </div>
                        <div class="text-slate-400">
                          <span class="text-slate-200">Bewerberdaten:</span> 6 Monate
                        </div>
                        <div class="text-slate-400">
                          <span class="text-slate-200">Mitarbeiterdaten:</span> Bis 10 Jahre
                        </div>
                        <div class="text-slate-400">
                          <span class="text-slate-200">Marketing:</span> Bis Widerruf
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 8. TOM -->
            <div class="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-8">
              <div class="flex items-start gap-6">
                <div class="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
                  8
                </div>
                <div class="flex-grow">
                  <h4 class="text-2xl font-bold text-white mb-4">Technische und organisatorische Maßnahmen</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div class="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                      <div class="text-red-300 font-semibold mb-2">Technische Maßnahmen</div>
                      <ul class="text-slate-400 text-sm space-y-1">
                        <li>• Verschlüsselung</li>
                        <li>• Pseudonymisierung</li>
                        <li>• Zugangskontrolle</li>
                      </ul>
                    </div>
                    <div class="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20">
                      <div class="text-pink-300 font-semibold mb-2">Organisatorische Maßnahmen</div>
                      <ul class="text-slate-400 text-sm space-y-1">
                        <li>• Schulungen</li>
                        <li>• Prozesse</li>
                        <li>• Kontrollen</li>
                      </ul>
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
      title: 'Praktische Umsetzung',
      subtitle: 'Schritt-für-Schritt zum Verarbeitungsverzeichnis',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <h3 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div class="p-2 bg-green-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                </svg>
              </div>
              Der 4-Phasen-Plan
            </h3>
            <p class="text-xl text-slate-300 leading-relaxed">
              Mit diesem strukturierten Ansatz erstellen Sie Ihr Verarbeitungsverzeichnis effizient und vollständig.
            </p>
          </div>

          <div class="space-y-6">
            <!-- Phase 1 -->
            <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-8">
              <div class="flex items-start gap-4 mb-6">
                <div class="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  1
                </div>
                <div>
                  <h4 class="text-xl font-bold text-white mb-2">Phase 1: Vorbereitung (1-2 Wochen)</h4>
                  <p class="text-slate-300">Grundlagen schaffen und Team zusammenstellen</p>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <h5 class="text-blue-300 font-semibold mb-3">📋 Aufgaben:</h5>
                  <ul class="text-slate-400 text-sm space-y-2">
                    <li>✓ Projektteam bilden</li>
                    <li>✓ Zeitplan erstellen</li>
                    <li>✓ Abteilungen identifizieren</li>
                    <li>✓ Templates vorbereiten</li>
                  </ul>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <h5 class="text-indigo-300 font-semibold mb-3">👥 Beteiligte:</h5>
                  <ul class="text-slate-400 text-sm space-y-2">
                    <li>• Geschäftsführung</li>
                    <li>• Datenschutzbeauftragter</li>
                    <li>• IT-Leitung</li>
                    <li>• Abteilungsleiter</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Phase 2 -->
            <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
              <div class="flex items-start gap-4 mb-6">
                <div class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  2
                </div>
                <div>
                  <h4 class="text-xl font-bold text-white mb-2">Phase 2: Datenerhebung (2-4 Wochen)</h4>
                  <p class="text-slate-300">Systematische Erfassung aller Verarbeitungen</p>
                </div>
              </div>
              <div class="space-y-4">
                <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                  <h5 class="text-green-300 font-semibold mb-3">🔍 Vorgehen:</h5>
                  <div class="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    <div class="bg-slate-800/60 rounded-lg p-3">
                      <div class="text-green-300 font-medium mb-1">Interviews</div>
                      <div class="text-slate-400 text-sm">Mit allen Abteilungsleitern</div>
                    </div>
                    <div class="bg-slate-800/60 rounded-lg p-3">
                      <div class="text-emerald-300 font-medium mb-1">System-Inventur</div>
                      <div class="text-slate-400 text-sm">IT-Systeme dokumentieren</div>
                    </div>
                    <div class="bg-slate-800/60 rounded-lg p-3">
                      <div class="text-green-400 font-medium mb-1">Prozessanalyse</div>
                      <div class="text-slate-400 text-sm">Datenflüsse nachvollziehen</div>
                    </div>
                  </div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <h5 class="text-emerald-300 font-semibold mb-2">💡 Praxis-Tipp:</h5>
                  <p class="text-slate-400 text-sm">
                    Nutzen Sie einen standardisierten Fragebogen für die Interviews. 
                    So stellen Sie sicher, dass keine wichtigen Informationen vergessen werden.
                  </p>
                </div>
              </div>
            </div>

            <!-- Phase 3 -->
            <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
              <div class="flex items-start gap-4 mb-6">
                <div class="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  3
                </div>
                <div>
                  <h4 class="text-xl font-bold text-white mb-2">Phase 3: Dokumentation (1-2 Wochen)</h4>
                  <p class="text-slate-300">Strukturierte Erfassung und Qualitätssicherung</p>
                </div>
              </div>
              <div class="bg-purple-500/10 rounded-lg p-6 border border-purple-500/20">
                <h5 class="text-purple-300 font-semibold mb-4">📝 Dokumentationsschritte:</h5>
                <div class="space-y-3">
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">1</div>
                    <div>
                      <div class="text-purple-300 font-medium">Verzeichniseinträge erstellen</div>
                      <div class="text-slate-400 text-sm">Pro Verarbeitungstätigkeit ein Eintrag</div>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">2</div>
                    <div>
                      <div class="text-purple-300 font-medium">Interne Abstimmung</div>
                      <div class="text-slate-400 text-sm">Mit Fachabteilungen validieren</div>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">3</div>
                    <div>
                      <div class="text-purple-300 font-medium">Rechtsprüfung</div>
                      <div class="text-slate-400 text-sm">Durch Datenschutzbeauftragten</div>
                    </div>
                  </div>
                  <div class="flex items-start gap-3">
                    <div class="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">4</div>
                    <div>
                      <div class="text-purple-300 font-medium">Freigabe</div>
                      <div class="text-slate-400 text-sm">Durch Geschäftsführung</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Phase 4 -->
            <div class="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-8">
              <div class="flex items-start gap-4 mb-6">
                <div class="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  4
                </div>
                <div>
                  <h4 class="text-xl font-bold text-white mb-2">Phase 4: Implementierung (1 Woche)</h4>
                  <p class="text-slate-300">Einführung und kontinuierliche Pflege</p>
                </div>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-orange-500/10 rounded-lg p-4 border border-orange-500/20">
                  <h5 class="text-orange-300 font-semibold mb-3">🚀 Einführung:</h5>
                  <ul class="text-slate-400 text-sm space-y-2">
                    <li>✓ Mitarbeiter schulen</li>
                    <li>✓ Prozesse etablieren</li>
                    <li>✓ Verantwortlichkeiten klären</li>
                    <li>✓ Aktualisierung planen</li>
                  </ul>
                </div>
                <div class="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                  <h5 class="text-red-300 font-semibold mb-3">🔄 Kontinuierliche Pflege:</h5>
                  <ul class="text-slate-400 text-sm space-y-2">
                    <li>• Quartalsweise Review</li>
                    <li>• Bei neuen Projekten aktualisieren</li>
                    <li>• Änderungen dokumentieren</li>
                    <li>• Versionskontrolle führen</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Praxis-Beispiel -->
          <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-indigo-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              Vollständiges Praxis-Beispiel
            </h3>
            <div class="bg-slate-800/60 rounded-lg p-6">
              <h4 class="text-indigo-300 font-semibold mb-4">Verarbeitungstätigkeit: "Online-Shop Bestellabwicklung"</h4>
              <div class="space-y-3 text-sm">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <span class="text-indigo-300 font-medium">Verantwortlicher:</span>
                    <div class="text-slate-400">Mustermann GmbH, Berlin</div>
                  </div>
                  <div>
                    <span class="text-indigo-300 font-medium">Zweck:</span>
                    <div class="text-slate-400">Bestellabwicklung und Kundenservice</div>
                  </div>
                  <div>
                    <span class="text-indigo-300 font-medium">Rechtsgrundlage:</span>
                    <div class="text-slate-400">Art. 6 Abs. 1 lit. b DSGVO</div>
                  </div>
                  <div>
                    <span class="text-indigo-300 font-medium">Betroffene:</span>
                    <div class="text-slate-400">Online-Shop Kunden</div>
                  </div>
                  <div>
                    <span class="text-indigo-300 font-medium">Datenkategorien:</span>
                    <div class="text-slate-400">Name, Adresse, E-Mail, Bestelldaten</div>
                  </div>
                  <div>
                    <span class="text-indigo-300 font-medium">Empfänger:</span>
                    <div class="text-slate-400">Versanddienstleister, Zahlungsanbieter</div>
                  </div>
                  <div>
                    <span class="text-indigo-300 font-medium">Drittland:</span>
                    <div class="text-slate-400">USA (PayPal) - Angemessenheitsbeschluss</div>
                  </div>
                  <div>
                    <span class="text-indigo-300 font-medium">Löschfrist:</span>
                    <div class="text-slate-400">10 Jahre (§ 147 AO)</div>
                  </div>
                </div>
                <div class="mt-4 pt-4 border-t border-slate-700">
                  <span class="text-indigo-300 font-medium">TOM:</span>
                  <div class="text-slate-400">SSL-Verschlüsselung, Zugriffskontrolle, regelmäßige Backups</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 3,
      title: 'Häufige Fehler vermeiden',
      subtitle: 'Die 10 kritischsten Fallstricke',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-3 bg-red-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-red-300">Vermeiden Sie diese kostspieligen Fehler!</h3>
            </div>
            <p class="text-slate-300 leading-relaxed">
              Diese Fehler führen regelmäßig zu Bußgeldern und Compliance-Problemen. 
              Lernen Sie aus den Fehlern anderer und vermeiden Sie teure Konsequenzen.
            </p>
          </div>

          <div class="space-y-6">
            <!-- Fehler 1 -->
            <div class="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div class="flex-grow">
                  <h4 class="text-xl font-bold text-red-300 mb-3">Unvollständigkeit</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                      <div class="text-red-300 font-semibold mb-2">❌ Fehler:</div>
                      <p class="text-slate-400 text-sm">Nicht alle Verarbeitungen erfasst, besonders "kleine" Prozesse übersehen</p>
                    </div>
                    <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                      <div class="text-green-300 font-semibold mb-2">✅ Lösung:</div>
                      <p class="text-slate-400 text-sm">Systematische Bestandsaufnahme aller Geschäftsprozesse durchführen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Fehler 2 -->
            <div class="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div class="flex-grow">
                  <h4 class="text-xl font-bold text-red-300 mb-3">Vage Zweckbeschreibungen</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                      <div class="text-red-300 font-semibold mb-2">❌ Fehler:</div>
                      <p class="text-slate-400 text-sm">"Administrative Zwecke", "Geschäftstätigkeit"</p>
                    </div>
                    <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                      <div class="text-green-300 font-semibold mb-2">✅ Lösung:</div>
                      <p class="text-slate-400 text-sm">Spezifische, nachvollziehbare Zweckangaben formulieren</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Fehler 3 -->
            <div class="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div class="flex-grow">
                  <h4 class="text-xl font-bold text-red-300 mb-3">Fehlende Rechtsgrundlagen</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                      <div class="text-red-300 font-semibold mb-2">❌ Fehler:</div>
                      <p class="text-slate-400 text-sm">Rechtsgrundlage nicht angegeben oder falsch zugeordnet</p>
                    </div>
                    <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                      <div class="text-green-300 font-semibold mb-2">✅ Lösung:</div>
                      <p class="text-slate-400 text-sm">Für jeden Zweck passende Rechtsgrundlage aus Art. 6 DSGVO prüfen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Fehler 4 -->
            <div class="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div class="flex-grow">
                  <h4 class="text-xl font-bold text-red-300 mb-3">Drittlandübermittlungen übersehen</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                      <div class="text-red-300 font-semibold mb-2">❌ Fehler:</div>
                      <p class="text-slate-400 text-sm">Cloud-Services in USA nicht als Drittlandübermittlung erkannt</p>
                    </div>
                    <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                      <div class="text-green-300 font-semibold mb-2">✅ Lösung:</div>
                      <p class="text-slate-400 text-sm">Alle Server-Standorte und Dienstleister-Locations prüfen</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Fehler 5 -->
            <div class="bg-slate-800/60 rounded-xl p-6 border border-slate-700/50">
              <div class="flex items-start gap-4">
                <div class="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center text-white font-bold">
                  5
                </div>
                <div class="flex-grow">
                  <h4 class="text-xl font-bold text-red-300 mb-3">Veraltete Informationen</h4>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                      <div class="text-red-300 font-semibold mb-2">❌ Fehler:</div>
                      <p class="text-slate-400 text-sm">Verzeichnis wird nicht aktualisiert, alte Prozesse bleiben drin</p>
                    </div>
                    <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                      <div class="text-green-300 font-semibold mb-2">✅ Lösung:</div>
                      <p class="text-slate-400 text-sm">Regelmäßige Überprüfung (mindestens jährlich) etablieren</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Best Practices -->
          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-green-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              Best Practices für nachhaltigen Erfolg
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                <h4 class="text-green-300 font-semibold mb-3">🔄 Lebendiges Dokument</h4>
                <ul class="text-slate-400 text-sm space-y-2">
                  <li>• Quartalsweise Überprüfung</li>
                  <li>• Automatische Erinnerungen</li>
                  <li>• Change-Management Integration</li>
                  <li>• Versionskontrolle</li>
                </ul>
              </div>
              <div class="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
                <h4 class="text-emerald-300 font-semibold mb-3">👥 Organisatorische Verankerung</h4>
                <ul class="text-slate-400 text-sm space-y-2">
                  <li>• Klare Verantwortlichkeiten</li>
                  <li>• Mitarbeiterschulung</li>
                  <li>• Eskalationswege</li>
                  <li>• Compliance-Reviews</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: 'Tools und Vorlagen',
      subtitle: 'Praktische Hilfsmittel für die Umsetzung',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
            <h3 class="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <div class="p-2 bg-blue-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                </svg>
              </div>
              Empfohlene Software-Lösungen
            </h3>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <!-- Für kleine Unternehmen -->
            <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
              <h4 class="text-xl font-bold text-green-300 mb-4">Für kleine Unternehmen</h4>
              <div class="space-y-3">
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <h5 class="text-green-300 font-semibold mb-2">Microsoft Excel / Google Sheets</h5>
                  <p class="text-slate-400 text-sm mb-2">Kosteneffizient für wenige Verarbeitungen</p>
                  <div class="flex items-center gap-2">
                    <span class="text-green-400">€</span>
                    <span class="text-slate-600">€€€€</span>
                  </div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <h5 class="text-green-300 font-semibold mb-2">Open-Source-Lösungen</h5>
                  <p class="text-slate-400 text-sm mb-2">Privacyidea, DPIA-Tool der CNIL</p>
                  <div class="flex items-center gap-2">
                    <span class="text-green-400">Kostenlos</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Für mittlere/große Unternehmen -->
            <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
              <h4 class="text-xl font-bold text-purple-300 mb-4">Für mittlere/große Unternehmen</h4>
              <div class="space-y-3">
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <h5 class="text-purple-300 font-semibold mb-2">Spezialisierte DSGVO-Tools</h5>
                  <p class="text-slate-400 text-sm mb-2">OneTrust, TrustArc, DataGuard</p>
                  <div class="flex items-center gap-2">
                    <span class="text-purple-400">€€€</span>
                    <span class="text-slate-600">€€</span>
                  </div>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-4">
                  <h5 class="text-pink-300 font-semibold mb-2">Integrierte Compliance-Plattformen</h5>
                  <p class="text-slate-400 text-sm mb-2">ServiceNow GRC, MetricStream</p>
                  <div class="flex items-center gap-2">
                    <span class="text-pink-400">€€€€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Excel Template -->
          <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">📊 Excel-Vorlage: Verarbeitungsverzeichnis</h3>
            <div class="bg-slate-800/60 rounded-lg p-6 overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="border-b border-slate-700">
                    <th class="text-left text-indigo-300 p-2">Nr.</th>
                    <th class="text-left text-indigo-300 p-2">Verarbeitung</th>
                    <th class="text-left text-indigo-300 p-2">Zweck</th>
                    <th class="text-left text-indigo-300 p-2">Rechtsgrundlage</th>
                    <th class="text-left text-indigo-300 p-2">Betroffene</th>
                    <th class="text-left text-indigo-300 p-2">Datenkategorien</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-b border-slate-700/50">
                    <td class="text-slate-400 p-2">001</td>
                    <td class="text-slate-400 p-2">Newsletter</td>
                    <td class="text-slate-400 p-2">Marketing</td>
                    <td class="text-slate-400 p-2">Art. 6 Abs. 1 lit. a</td>
                    <td class="text-slate-400 p-2">Abonnenten</td>
                    <td class="text-slate-400 p-2">E-Mail, Name</td>
                  </tr>
                  <tr class="border-b border-slate-700/50">
                    <td class="text-slate-400 p-2">002</td>
                    <td class="text-slate-400 p-2">Bewerbermgmt</td>
                    <td class="text-slate-400 p-2">Recruiting</td>
                    <td class="text-slate-400 p-2">Art. 6 Abs. 1 lit. b</td>
                    <td class="text-slate-400 p-2">Bewerber</td>
                    <td class="text-slate-400 p-2">CV, Kontakt</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-4 flex items-center gap-4">
              <button class="bg-indigo-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-indigo-600 transition-colors">
                Download Excel-Template
              </button>
              <span class="text-slate-400 text-sm">Enthält alle Pflichtfelder nach Art. 30 DSGVO</span>
            </div>
          </div>

          <!-- Compliance Checkliste -->
          <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">✅ Compliance-Checkliste</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <h4 class="text-yellow-300 font-semibold">Vollständigkeitsprüfung</h4>
                <div class="space-y-2">
                  <label class="flex items-center gap-3 text-slate-300">
                    <input type="checkbox" class="w-5 h-5 rounded border-slate-600 bg-slate-800 text-yellow-500 focus:ring-yellow-500" />
                    <span>Alle Geschäftsprozesse erfasst</span>
                  </label>
                  <label class="flex items-center gap-3 text-slate-300">
                    <input type="checkbox" class="w-5 h-5 rounded border-slate-600 bg-slate-800 text-yellow-500 focus:ring-yellow-500" />
                    <span>Alle IT-Systeme berücksichtigt</span>
                  </label>
                  <label class="flex items-center gap-3 text-slate-300">
                    <input type="checkbox" class="w-5 h-5 rounded border-slate-600 bg-slate-800 text-yellow-500 focus:ring-yellow-500" />
                    <span>Website und Apps einbezogen</span>
                  </label>
                  <label class="flex items-center gap-3 text-slate-300">
                    <input type="checkbox" class="w-5 h-5 rounded border-slate-600 bg-slate-800 text-yellow-500 focus:ring-yellow-500" />
                    <span>Archive und Backups geprüft</span>
                  </label>
                </div>
              </div>
              <div class="space-y-4">
                <h4 class="text-orange-300 font-semibold">Qualitätsprüfung</h4>
                <div class="space-y-2">
                  <label class="flex items-center gap-3 text-slate-300">
                    <input type="checkbox" class="w-5 h-5 rounded border-slate-600 bg-slate-800 text-orange-500 focus:ring-orange-500" />
                    <span>Zwecke spezifisch formuliert</span>
                  </label>
                  <label class="flex items-center gap-3 text-slate-300">
                    <input type="checkbox" class="w-5 h-5 rounded border-slate-600 bg-slate-800 text-orange-500 focus:ring-orange-500" />
                    <span>Rechtsgrundlagen korrekt</span>
                  </label>
                  <label class="flex items-center gap-3 text-slate-300">
                    <input type="checkbox" class="w-5 h-5 rounded border-slate-600 bg-slate-800 text-orange-500 focus:ring-orange-500" />
                    <span>Löschfristen realistisch</span>
                  </label>
                  <label class="flex items-center gap-3 text-slate-300">
                    <input type="checkbox" class="w-5 h-5 rounded border-slate-600 bg-slate-800 text-orange-500 focus:ring-orange-500" />
                    <span>TOM angemessen beschrieben</span>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <!-- Notfall-Checkliste -->
          <div class="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <div class="p-2 bg-red-500 rounded-lg">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              Notfall: Behördenanfrage
            </h3>
            <div class="space-y-4">
              <div class="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                <h4 class="text-red-300 font-semibold mb-3">🚨 Sofortmaßnahmen (1 Stunde)</h4>
                <ul class="text-slate-400 space-y-2">
                  <li>• Krisenstab aktivieren (DSB, GF, Rechtsabteilung)</li>
                  <li>• Frist prüfen und dokumentieren</li>
                  <li>• Vollständigkeit des Verzeichnisses checken</li>
                  <li>• Bei Unsicherheit: Rechtsbeistand kontaktieren</li>
                </ul>
              </div>
              <div class="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20">
                <h4 class="text-pink-300 font-semibold mb-3">📋 Kurzfristige Maßnahmen (1 Tag)</h4>
                <ul class="text-slate-400 space-y-2">
                  <li>• Verzeichnis finalisieren</li>
                  <li>• Interne Abstimmung durchführen</li>
                  <li>• Qualitätsprüfung vornehmen</li>
                  <li>• Kommunikationsstrategie abstimmen</li>
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
        title="Verarbeitungsverzeichnis – DSGVO Anleitung & Vorlagen"
        description="Verarbeitungsverzeichnis nach Art. 30 DSGVO erstellen: Schritt-für-Schritt Anleitung, Vorlagen & Beispiele. ✓ Rechtssicher ✓ Vollständig ✓ Sofort einsetzbar. Jetzt umsetzen!"
        canonical="/wissen/leitfaden/verarbeitungsverzeichnis"
        keywords="verarbeitungsverzeichnis dsgvo, art 30 dsgvo, verarbeitungstätigkeiten dokumentieren, dsgvo vorlage"
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
              <Badge className="bg-orange-500/20 text-orange-300">
                <Database className="h-3 w-3 mr-1" />
                Verarbeitungsverzeichnis
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
              <div className="p-3 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl">
                <ClipboardList className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white">{currentChapterData.title}</h1>
                <p className="text-xl text-orange-300">{currentChapterData.subtitle}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Kapitel {currentChapter + 1}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>2,134 Leser</span>
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
                              ? "bg-orange-500/20 border border-orange-500/30 text-orange-300" 
                              : "hover:bg-slate-700/50 text-slate-300"
                          )}
                        >
                          <div className="flex items-center gap-3">
                            <div className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium",
                              completedChapters.includes(index) 
                                ? "bg-green-500 text-white"
                                : index === currentChapter
                                ? "bg-orange-500 text-white"
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
                      className="bg-gradient-to-r from-orange-500 to-red-500 text-white"
                    >
                      Nächstes Kapitel
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      asChild
                      className="bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                    >
                      <Link to="/wissen/leitfaden/betroffenenrechte">
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

        <Footer />
      </div>
    </>
  );
};

export default VerarbeitungsverzeichnisGuide;