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
  Key,
  Server,
  Wifi,
  MonitorSpeaker,
  AlertOctagon,
  Layers,
  Code,
  Activity,
  Cpu,
  HardDrive,
  Network,
  Smartphone,
  ShieldCheck,
  FileShield,
  UserShield,
  LockKeyhole
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const TomMassnahmenGuide: React.FC = () => {
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
      title: 'TOM-Grundlagen & Rechtlicher Rahmen',
      subtitle: 'Art. 32 DSGVO verstehen',
      readTime: '12 Min',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-4 lg:p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-blue-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-blue-300">Was sind TOM?</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-4">
              <strong>Technische und organisatorische Maßnahmen (TOM)</strong> sind das Rückgrat jedes Datenschutzkonzepts. 
              Sie stellen sicher, dass personenbezogene Daten angemessen geschützt und Betroffenenrechte gewährleistet werden.
            </p>
            <div class="bg-blue-500/5 rounded-lg p-4 border-l-4 border-blue-500">
              <p class="text-slate-300 italic">
                "Der Verantwortliche [...] trifft [...] geeignete technische und organisatorische Maßnahmen, 
                um ein dem Risiko angemessenes Schutzniveau zu gewährleisten." - Art. 32 Abs. 1 DSGVO
              </p>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 bg-green-500 rounded-lg">
                  <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-green-300">Technische Maßnahmen</h4>
              </div>
              <ul class="space-y-2 text-slate-300">
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Verschlüsselung & Pseudonymisierung
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Zugangs- und Zugriffskontrollen
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Backup- und Recovery-Systeme
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  Monitoring & Logging
                </li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 bg-purple-500 rounded-lg">
                  <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-purple-300">Organisatorische Maßnahmen</h4>
              </div>
              <ul class="space-y-2 text-slate-300">
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  Schulungen & Sensibilisierung
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  Berechtigungskonzepte
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  Incident Response Prozesse
                </li>
                <li class="flex items-center gap-2">
                  <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  Richtlinien & Verfahren
                </li>
              </ul>
            </div>
          </div>

          <div class="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-4">
              <div class="p-2 bg-orange-500 rounded-lg">
                <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.865-.833-2.635 0L4.179 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <h4 class="text-lg font-semibold text-orange-300">Rechtliche Anforderungen</h4>
            </div>
            <p class="text-slate-300 mb-4">
              TOM müssen den Stand der Technik, Implementierungskosten und die Art, den Umfang, 
              die Umstände und Zwecke der Verarbeitung sowie die unterschiedliche Eintrittswahrscheinlichkeit 
              und Schwere des Risikos berücksichtigen.
            </p>
            <div class="grid md:grid-cols-4 gap-4 text-center">
              <div class="bg-orange-500/10 rounded-lg p-3">
                <div class="text-sm font-semibold text-orange-300">Stand der Technik</div>
              </div>
              <div class="bg-orange-500/10 rounded-lg p-3">
                <div class="text-sm font-semibold text-orange-300">Kosten-Nutzen</div>
              </div>
              <div class="bg-orange-500/10 rounded-lg p-3">
                <div class="text-sm font-semibold text-orange-300">Risikobewertung</div>
              </div>
              <div class="bg-orange-500/10 rounded-lg p-3">
                <div class="text-sm font-semibold text-orange-300">Angemessenheit</div>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 1,
      title: 'Technische Sicherheitsmaßnahmen',
      subtitle: 'IT-Security & Datenschutz',
      readTime: '15 Min',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl p-4 lg:p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-cyan-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-cyan-300">Verschlüsselung als Grundpfeiler</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-6">
              Verschlüsselung ist eine der wichtigsten technischen Maßnahmen. Sie schützt Daten sowohl 
              <strong>in Ruhe (at rest)</strong> als auch <strong>bei der Übertragung (in transit)</strong> 
              und <strong>während der Verarbeitung (in use)</strong>.
            </p>

            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-cyan-500/10 rounded-xl p-6 border border-cyan-500/20">
                <div class="flex items-center gap-2 mb-4">
                  <div class="p-2 bg-cyan-500 rounded-lg">
                    <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-cyan-300">At Rest</h4>
                </div>
                <p class="text-slate-300 text-sm mb-3">Schutz gespeicherter Daten</p>
                <ul class="text-xs text-slate-400 space-y-1">
                  <li>• Festplattenverschlüsselung (AES-256)</li>
                  <li>• Datenbankverschlüsselung</li>
                  <li>• Backup-Verschlüsselung</li>
                  <li>• File-Level Encryption</li>
                </ul>
              </div>

              <div class="bg-green-500/10 rounded-xl p-6 border border-green-500/20">
                <div class="flex items-center gap-2 mb-4">
                  <div class="p-2 bg-green-500 rounded-lg">
                    <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-green-300">In Transit</h4>
                </div>
                <p class="text-slate-300 text-sm mb-3">Schutz bei Datenübertragung</p>
                <ul class="text-xs text-slate-400 space-y-1">
                  <li>• TLS 1.3 (HTTPS)</li>
                  <li>• VPN-Tunneling</li>
                  <li>• S/MIME für E-Mail</li>
                  <li>• API-Verschlüsselung</li>
                </ul>
              </div>

              <div class="bg-purple-500/10 rounded-xl p-6 border border-purple-500/20">
                <div class="flex items-center gap-2 mb-4">
                  <div class="p-2 bg-purple-500 rounded-lg">
                    <svg class="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                  <h4 class="font-semibold text-purple-300">In Use</h4>
                </div>
                <p class="text-slate-300 text-sm mb-3">Schutz bei Verarbeitung</p>
                <ul class="text-xs text-slate-400 space-y-1">
                  <li>• Homomorphic Encryption</li>
                  <li>• Secure Enclaves</li>
                  <li>• Memory Encryption</li>
                  <li>• Zero-Knowledge Proofs</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-indigo-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9l-1 1L7 17v-2h-.757l-1.048-1.048A.5.5 0 015 13.5v-1A5.5 5.5 0 0110.5 7 2 2 0 0115 7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-indigo-300">Zugangs- und Zugriffskontrolle</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-indigo-300">Authentifizierung</h4>
                <div class="space-y-3">
                  <div class="bg-indigo-500/10 rounded-lg p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <div class="w-2 h-2 bg-indigo-400 rounded-full"></div>
                      <span class="font-medium text-indigo-300">Multi-Faktor-Authentifizierung (MFA)</span>
                    </div>
                    <p class="text-slate-300 text-sm">Mindestens zwei unabhängige Faktoren: Wissen, Besitz, Biometrie</p>
                  </div>
                  
                  <div class="bg-indigo-500/10 rounded-lg p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <div class="w-2 h-2 bg-indigo-400 rounded-full"></div>
                      <span class="font-medium text-indigo-300">Single Sign-On (SSO)</span>
                    </div>
                    <p class="text-slate-300 text-sm">Zentrale Authentifizierung mit SAML, OAuth 2.0 oder OpenID Connect</p>
                  </div>

                  <div class="bg-indigo-500/10 rounded-lg p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <div class="w-2 h-2 bg-indigo-400 rounded-full"></div>
                      <span class="font-medium text-indigo-300">Passwort-Richtlinien</span>
                    </div>
                    <p class="text-slate-300 text-sm">Komplexitätsanforderungen, regelmäßige Änderungen, Passwort-Manager</p>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-purple-300">Autorisierung</h4>
                <div class="space-y-3">
                  <div class="bg-purple-500/10 rounded-lg p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span class="font-medium text-purple-300">Role-Based Access Control (RBAC)</span>
                    </div>
                    <p class="text-slate-300 text-sm">Berechtigungen basierend auf Rollen und Verantwortlichkeiten</p>
                  </div>
                  
                  <div class="bg-purple-500/10 rounded-lg p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span class="font-medium text-purple-300">Principle of Least Privilege</span>
                    </div>
                    <p class="text-slate-300 text-sm">Minimale erforderliche Berechtigungen für Aufgabenerfüllung</p>
                  </div>

                  <div class="bg-purple-500/10 rounded-lg p-4">
                    <div class="flex items-center gap-2 mb-2">
                      <div class="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span class="font-medium text-purple-300">Regelmäßige Berechtigungsprüfung</span>
                    </div>
                    <p class="text-slate-300 text-sm">Quartalsweise Überprüfung und Anpassung von Zugriffsrechten</p>
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
              <h3 class="text-xl font-bold text-emerald-300">Logging & Monitoring</h3>
            </div>

            <div class="grid md:grid-cols-3 gap-4">
              <div class="bg-emerald-500/10 rounded-lg p-4">
                <h4 class="font-semibold text-emerald-300 mb-3">Security Logging</h4>
                <ul class="text-slate-300 text-sm space-y-2">
                  <li>• Anmelde-/Abmeldeereignisse</li>
                  <li>• Fehlgeschlagene Authentifizierung</li>
                  <li>• Berechtigungsänderungen</li>
                  <li>• Datenzugriffe</li>
                  <li>• Systemkonfigurationsänderungen</li>
                </ul>
              </div>

              <div class="bg-teal-500/10 rounded-lg p-4">
                <h4 class="font-semibold text-teal-300 mb-3">Real-time Monitoring</h4>
                <ul class="text-slate-300 text-sm space-y-2">
                  <li>• SIEM-Integration</li>
                  <li>• Anomalie-Erkennung</li>
                  <li>• Intrusion Detection</li>
                  <li>• Data Loss Prevention</li>
                  <li>• Automated Alerting</li>
                </ul>
              </div>

              <div class="bg-cyan-500/10 rounded-lg p-4">
                <h4 class="font-semibold text-cyan-300 mb-3">Log-Management</h4>
                <ul class="text-slate-300 text-sm space-y-2">
                  <li>• Zentrale Log-Sammlung</li>
                  <li>• Sichere Log-Speicherung</li>
                  <li>• Integritätsschutz</li>
                  <li>• Aufbewahrungsfristen</li>
                  <li>• Forensische Analyse</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 2,
      title: 'Organisatorische Sicherheitsmaßnahmen',
      subtitle: 'Prozesse, Richtlinien & Personal',
      readTime: '12 Min',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-violet-500/10 to-purple-500/10 border border-violet-500/20 rounded-xl p-4 lg:p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-violet-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-violet-300">Personal & Verantwortlichkeiten</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-6">
              Organisatorische Maßnahmen stellen sicher, dass Menschen, Prozesse und Richtlinien 
              zusammenwirken, um ein <strong>nachhaltiges Schutzniveau</strong> zu gewährleisten.
            </p>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-violet-500/10 rounded-xl p-6 border border-violet-500/20">
                <div class="flex items-center gap-3 mb-4">
                  <div class="p-2 bg-violet-500 rounded-lg">
                    <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold text-violet-300">Schulung & Sensibilisierung</h4>
                </div>
                <ul class="space-y-3 text-slate-300">
                  <li class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span class="font-medium">Onboarding-Training</span>
                      <p class="text-sm text-slate-400">DSGVO-Grundlagen für neue Mitarbeiter</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span class="font-medium">Regelmäßige Schulungen</span>
                      <p class="text-sm text-slate-400">Jährliche Auffrischung und Updates</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span class="font-medium">Phishing-Simulationen</span>
                      <p class="text-sm text-slate-400">Praktische Security Awareness</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 bg-violet-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span class="font-medium">Rollenspezifische Trainings</span>
                      <p class="text-sm text-slate-400">Angepasst an Verantwortlichkeiten</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="bg-purple-500/10 rounded-xl p-6 border border-purple-500/20">
                <div class="flex items-center gap-3 mb-4">
                  <div class="p-2 bg-purple-500 rounded-lg">
                    <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 003.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                    </svg>
                  </div>
                  <h4 class="text-lg font-semibold text-purple-300">Vertragsmanagement</h4>
                </div>
                <ul class="space-y-3 text-slate-300">
                  <li class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span class="font-medium">Vertraulichkeitsvereinbarungen</span>
                      <p class="text-sm text-slate-400">NDAs für alle Mitarbeiter</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span class="font-medium">Auftragsverarbeitungsverträge</span>
                      <p class="text-sm text-slate-400">AVV nach Art. 28 DSGVO</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span class="font-medium">Vendor Assessments</span>
                      <p class="text-sm text-slate-400">Regelmäßige Lieferanten-Prüfungen</p>
                    </div>
                  </li>
                  <li class="flex items-start gap-2">
                    <div class="w-1.5 h-1.5 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <span class="font-medium">Exit-Strategien</span>
                      <p class="text-sm text-slate-400">Sichere Beendigung von Verträgen</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-amber-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-amber-300">Richtlinien & Verfahren</h3>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-amber-500/10 rounded-lg p-4">
                <h4 class="font-semibold text-amber-300 mb-4">Datenschutz-Governance</h4>
                <ul class="text-slate-300 text-sm space-y-2">
                  <li class="flex items-center gap-2">
                    <svg class="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                    Datenschutzrichtlinie
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                    Privacy-by-Design Policy
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                    Löschkonzept
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="h-3 w-3 text-amber-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                    Betroffenenrechte-Verfahren
                  </li>
                </ul>
              </div>

              <div class="bg-orange-500/10 rounded-lg p-4">
                <h4 class="font-semibold text-orange-300 mb-4">IT-Sicherheit</h4>
                <ul class="text-slate-300 text-sm space-y-2">
                  <li class="flex items-center gap-2">
                    <svg class="h-3 w-3 text-orange-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                    Information Security Policy
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="h-3 w-3 text-orange-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                    Incident Response Plan
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="h-3 w-3 text-orange-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                    Backup & Recovery Verfahren
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="h-3 w-3 text-orange-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                    Change Management
                  </li>
                </ul>
              </div>

              <div class="bg-red-500/10 rounded-lg p-4">
                <h4 class="font-semibold text-red-300 mb-4">Betriebsführung</h4>
                <ul class="text-slate-300 text-sm space-y-2">
                  <li class="flex items-center gap-2">
                    <svg class="h-3 w-3 text-red-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                    Clean Desk Policy
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="h-3 w-3 text-red-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                    Mobile Device Management
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="h-3 w-3 text-red-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                    Home Office Richtlinien
                  </li>
                  <li class="flex items-center gap-2">
                    <svg class="h-3 w-3 text-red-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"/>
                    </svg>
                    Besuchermanagement
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-rose-500/10 to-pink-500/10 border border-rose-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-rose-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.865-.833-2.635 0L4.179 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-rose-300">Incident Management</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-rose-300">Notfallverfahren</h4>
                <div class="space-y-3">
                  <div class="bg-rose-500/10 rounded-lg p-4 border border-rose-500/20">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-rose-500 text-white text-xs px-2 py-1 rounded">SCHRITT 1</span>
                      <span class="font-medium text-rose-300">Erkennung & Klassifizierung</span>
                    </div>
                    <p class="text-slate-300 text-sm">Automatische und manuelle Incident-Erkennung, Schweregrad-Bewertung</p>
                  </div>
                  
                  <div class="bg-rose-500/10 rounded-lg p-4 border border-rose-500/20">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-rose-500 text-white text-xs px-2 py-1 rounded">SCHRITT 2</span>
                      <span class="font-medium text-rose-300">Eindämmung & Schadensbegrenzung</span>
                    </div>
                    <p class="text-slate-300 text-sm">Sofortige Maßnahmen zur Verhinderung weiterer Schäden</p>
                  </div>

                  <div class="bg-rose-500/10 rounded-lg p-4 border border-rose-500/20">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-rose-500 text-white text-xs px-2 py-1 rounded">SCHRITT 3</span>
                      <span class="font-medium text-rose-300">Behördenmeldung & Kommunikation</span>
                    </div>
                    <p class="text-slate-300 text-sm">72h-Meldung an Aufsichtsbehörde, Betroffenen-Information</p>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-pink-300">Recovery & Lessons Learned</h4>
                <div class="space-y-3">
                  <div class="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-pink-500 text-white text-xs px-2 py-1 rounded">SCHRITT 4</span>
                      <span class="font-medium text-pink-300">Wiederherstellung</span>
                    </div>
                    <p class="text-slate-300 text-sm">Systemwiederherstellung, Datenintegrität prüfen</p>
                  </div>
                  
                  <div class="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-pink-500 text-white text-xs px-2 py-1 rounded">SCHRITT 5</span>
                      <span class="font-medium text-pink-300">Post-Incident Review</span>
                    </div>
                    <p class="text-slate-300 text-sm">Ursachenanalyse, Verbesserungsmaßnahmen ableiten</p>
                  </div>

                  <div class="bg-pink-500/10 rounded-lg p-4 border border-pink-500/20">
                    <div class="flex items-center gap-2 mb-2">
                      <span class="bg-pink-500 text-white text-xs px-2 py-1 rounded">SCHRITT 6</span>
                      <span class="font-medium text-pink-300">Dokumentation & Reporting</span>
                    </div>
                    <p class="text-slate-300 text-sm">Vollständige Incident-Dokumentation für Compliance</p>
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
      title: 'Risikobasierte TOM-Auswahl',
      subtitle: 'Angemessenheit & Risikobewertung',
      readTime: '10 Min',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-4 lg:p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-red-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-red-300">Risikoorientierte TOM-Bewertung</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-6">
              Die Auswahl geeigneter TOM muss <strong>risikoorientiert</strong> erfolgen. Je höher das Risiko für die 
              Rechte und Freiheiten natürlicher Personen, desto umfangreichere Schutzmaßnahmen sind erforderlich.
            </p>

            <div class="bg-gradient-to-r from-red-500/5 to-orange-500/5 rounded-xl p-6 border border-red-500/10">
              <h4 class="text-lg font-semibold text-red-300 mb-4">Risikofaktoren nach DSGVO</h4>
              <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div class="text-center p-4 bg-red-500/10 rounded-lg">
                  <div class="text-2xl mb-2">🎯</div>
                  <div class="font-semibold text-red-300 text-sm">Art der Daten</div>
                  <div class="text-xs text-slate-400 mt-1">Sensitivität & Kategorien</div>
                </div>
                <div class="text-center p-4 bg-orange-500/10 rounded-lg">
                  <div class="text-2xl mb-2">📊</div>
                  <div class="font-semibold text-orange-300 text-sm">Umfang</div>
                  <div class="text-xs text-slate-400 mt-1">Anzahl Betroffener</div>
                </div>
                <div class="text-center p-4 bg-yellow-500/10 rounded-lg">
                  <div class="text-2xl mb-2">⚙️</div>
                  <div class="font-semibold text-yellow-300 text-sm">Umstände</div>
                  <div class="text-xs text-slate-400 mt-1">Verarbeitungskontext</div>
                </div>
                <div class="text-center p-4 bg-pink-500/10 rounded-lg">
                  <div class="text-2xl mb-2">🎪</div>
                  <div class="font-semibold text-pink-300 text-sm">Zweck</div>
                  <div class="text-xs text-slate-400 mt-1">Verarbeitungszweck</div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-emerald-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-emerald-300">Risiko-Matrix für TOM-Auswahl</h3>
            </div>

            <div class="overflow-x-auto">
              <table class="w-full">
                <thead>
                  <tr class="border-b border-emerald-500/20">
                    <th class="text-left p-4 text-emerald-300 font-semibold">Risikostufe</th>
                    <th class="text-left p-4 text-emerald-300 font-semibold">Schadensausmaß</th>
                    <th class="text-left p-4 text-emerald-300 font-semibold">Empfohlene TOM</th>
                    <th class="text-left p-4 text-emerald-300 font-semibold">Beispiele</th>
                  </tr>
                </thead>
                <tbody class="text-slate-300">
                  <tr class="border-b border-emerald-500/10">
                    <td class="p-4">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span class="font-medium text-green-300">Niedrig</span>
                      </div>
                    </td>
                    <td class="p-4 text-sm">Geringe Auswirkungen auf Betroffene</td>
                    <td class="p-4 text-sm">Basis-TOM ausreichend</td>
                    <td class="p-4 text-sm">Newsletter-Anmeldung, öffentliche Kontaktdaten</td>
                  </tr>
                  <tr class="border-b border-emerald-500/10">
                    <td class="p-4">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <span class="font-medium text-yellow-300">Mittel</span>
                      </div>
                    </td>
                    <td class="p-4 text-sm">Spürbare Nachteile möglich</td>
                    <td class="p-4 text-sm">Erweiterte TOM erforderlich</td>
                    <td class="p-4 text-sm">Kundendatenbank, Mitarbeiterdaten</td>
                  </tr>
                  <tr class="border-b border-emerald-500/10">
                    <td class="p-4">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span class="font-medium text-orange-300">Hoch</span>
                      </div>
                    </td>
                    <td class="p-4 text-sm">Erhebliche Nachteile wahrscheinlich</td>
                    <td class="p-4 text-sm">Umfassende TOM notwendig</td>
                    <td class="p-4 text-sm">Gesundheitsdaten, Finanzdaten</td>
                  </tr>
                  <tr>
                    <td class="p-4">
                      <div class="flex items-center gap-2">
                        <div class="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <span class="font-medium text-red-300">Sehr Hoch</span>
                      </div>
                    </td>
                    <td class="p-4 text-sm">Schwerwiegende Folgen zu erwarten</td>
                    <td class="p-4 text-sm">Höchste TOM-Standards</td>
                    <td class="p-4 text-sm">Biometrische Daten, Profiling, KI-Systeme</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 bg-blue-500 rounded-lg">
                  <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-blue-300">Stand der Technik</h4>
              </div>
              <p class="text-slate-300 text-sm mb-4">
                TOM müssen dem aktuellen Stand der Technik entsprechen und sich kontinuierlich weiterentwickeln.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span class="text-slate-300">Aktuelle Verschlüsselungsstandards</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span class="text-slate-300">Best-Practice Sicherheitslösungen</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span class="text-slate-300">Anerkannte Industriestandards</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                  <span class="text-slate-300">Regelmäßige Technologie-Updates</span>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
              <div class="flex items-center gap-3 mb-4">
                <div class="p-2 bg-purple-500 rounded-lg">
                  <svg class="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-semibold text-purple-300">Kosten-Nutzen-Bewertung</h4>
              </div>
              <p class="text-slate-300 text-sm mb-4">
                TOM müssen wirtschaftlich verhältnismäßig sein und dürfen nicht unverhältnismäßig belastend werden.
              </p>
              <div class="space-y-3">
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <span class="text-slate-300">Implementierungskosten</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <span class="text-slate-300">Betriebskosten</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <span class="text-slate-300">Risikoreduktion</span>
                </div>
                <div class="flex items-center gap-2 text-sm">
                  <div class="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                  <span class="text-slate-300">Geschäftsauswirkungen</span>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-yellow-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-yellow-300">TOM-Bewertungsprozess</h3>
            </div>

            <div class="grid md:grid-cols-5 gap-4">
              <div class="text-center">
                <div class="bg-yellow-500/20 rounded-xl p-4 mb-3">
                  <div class="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white font-bold text-sm">1</span>
                  </div>
                  <h5 class="font-semibold text-yellow-300 text-sm">Risiko identifizieren</h5>
                </div>
                <p class="text-slate-400 text-xs">Datenarten, Betroffene, Verarbeitungszwecke analysieren</p>
              </div>

              <div class="text-center">
                <div class="bg-orange-500/20 rounded-xl p-4 mb-3">
                  <div class="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white font-bold text-sm">2</span>
                  </div>
                  <h5 class="font-semibold text-orange-300 text-sm">Risiko bewerten</h5>
                </div>
                <p class="text-slate-400 text-xs">Eintrittswahrscheinlichkeit und Schwere bestimmen</p>
              </div>

              <div class="text-center">
                <div class="bg-red-500/20 rounded-xl p-4 mb-3">
                  <div class="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white font-bold text-sm">3</span>
                  </div>
                  <h5 class="font-semibold text-red-300 text-sm">TOM auswählen</h5>
                </div>
                <p class="text-slate-400 text-xs">Angemessene technische und organisatorische Maßnahmen definieren</p>
              </div>

              <div class="text-center">
                <div class="bg-purple-500/20 rounded-xl p-4 mb-3">
                  <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white font-bold text-sm">4</span>
                  </div>
                  <h5 class="font-semibold text-purple-300 text-sm">Implementieren</h5>
                </div>
                <p class="text-slate-400 text-xs">TOM umsetzen und in Betrieb nehmen</p>
              </div>

              <div class="text-center">
                <div class="bg-blue-500/20 rounded-xl p-4 mb-3">
                  <div class="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span class="text-white font-bold text-sm">5</span>
                  </div>
                  <h5 class="font-semibold text-blue-300 text-sm">Überwachen</h5>
                </div>
                <p class="text-slate-400 text-xs">Wirksamkeit kontinuierlich überprüfen und anpassen</p>
              </div>
            </div>
          </div>
        </div>
      `
    },
    {
      id: 4,
      title: 'TOM-Dokumentation & Nachweis',
      subtitle: 'Compliance & Auditierung',
      readTime: '8 Min',
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-4 lg:p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-indigo-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-indigo-300">Rechenschaftspflicht & Nachweis</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-6">
              Art. 5 Abs. 2 DSGVO verlangt von Verantwortlichen den <strong>Nachweis der Compliance</strong>. 
              Eine strukturierte TOM-Dokumentation ist dabei unerlässlich für die Rechenschaftspflicht.
            </p>
            <div class="bg-indigo-500/5 rounded-lg p-4 border-l-4 border-indigo-500">
              <p class="text-slate-300 italic">
                "Der Verantwortliche ist für die Einhaltung des Absatzes 1 verantwortlich und muss dessen Einhaltung nachweisen können (Rechenschaftspflicht)." - Art. 5 Abs. 2 DSGVO
              </p>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-green-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-green-300">TOM-Dokumentations-Framework</h3>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-green-300">Dokumentationsinhalte</h4>
                <div class="space-y-3">
                  <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                    <div class="flex items-center gap-2 mb-2">
                      <svg class="h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="font-medium text-green-300">TOM-Katalog</span>
                    </div>
                    <p class="text-slate-300 text-sm">Vollständige Auflistung aller implementierten Maßnahmen</p>
                  </div>
                  
                  <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                    <div class="flex items-center gap-2 mb-2">
                      <svg class="h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="font-medium text-green-300">Risikobewertung</span>
                    </div>
                    <p class="text-slate-300 text-sm">Begründung für die Auswahl spezifischer TOM</p>
                  </div>

                  <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                    <div class="flex items-center gap-2 mb-2">
                      <svg class="h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="font-medium text-green-300">Implementierungsnachweis</span>
                    </div>
                    <p class="text-slate-300 text-sm">Belege für die ordnungsgemäße Umsetzung</p>
                  </div>

                  <div class="bg-green-500/10 rounded-lg p-4 border border-green-500/20">
                    <div class="flex items-center gap-2 mb-2">
                      <svg class="h-4 w-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span class="font-medium text-green-300">Wirksamkeitsprüfung</span>
                    </div>
                    <p class="text-slate-300 text-sm">Regelmäßige Tests und Überprüfungen</p>
                  </div>
                </div>
              </div>

              <div class="space-y-4">
                <h4 class="text-lg font-semibold text-emerald-300">Dokumentationsstruktur</h4>
                <div class="bg-emerald-500/10 rounded-lg p-4 border border-emerald-500/20">
                  <div class="space-y-3 text-sm">
                    <div class="flex items-center gap-2">
                      <span class="bg-emerald-500 text-white px-2 py-1 rounded text-xs">1</span>
                      <span class="text-emerald-300 font-medium">Überblick & Verantwortlichkeiten</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="bg-emerald-500 text-white px-2 py-1 rounded text-xs">2</span>
                      <span class="text-emerald-300 font-medium">Technische Maßnahmen</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="bg-emerald-500 text-white px-2 py-1 rounded text-xs">3</span>
                      <span class="text-emerald-300 font-medium">Organisatorische Maßnahmen</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="bg-emerald-500 text-white px-2 py-1 rounded text-xs">4</span>
                      <span class="text-emerald-300 font-medium">Kontrollen & Tests</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="bg-emerald-500 text-white px-2 py-1 rounded text-xs">5</span>
                      <span class="text-emerald-300 font-medium">Incident Management</span>
                    </div>
                    <div class="flex items-center gap-2">
                      <span class="bg-emerald-500 text-white px-2 py-1 rounded text-xs">6</span>
                      <span class="text-emerald-300 font-medium">Kontinuierliche Verbesserung</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-blue-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-blue-300">TOM-Audit & Prüfung</h3>
            </div>

            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-blue-500/10 rounded-lg p-4">
                <h4 class="font-semibold text-blue-300 mb-4 flex items-center gap-2">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 8l2 2 4-4"></path>
                  </svg>
                  Interne Audits
                </h4>
                <ul class="text-slate-300 text-sm space-y-2">
                  <li>• Quartalsweise TOM-Überprüfung</li>
                  <li>• Penetrationstests</li>
                  <li>• Vulnerability Assessments</li>
                  <li>• Access-Rights Reviews</li>
                  <li>• Policy Compliance Checks</li>
                </ul>
              </div>

              <div class="bg-cyan-500/10 rounded-lg p-4">
                <h4 class="font-semibold text-cyan-300 mb-4 flex items-center gap-2">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                  Externe Prüfungen
                </h4>
                <ul class="text-slate-300 text-sm space-y-2">
                  <li>• Datenschutz-Audits</li>
                  <li>• ISO 27001 Zertifizierung</li>
                  <li>• SOC2 Type II Reports</li>
                  <li>• Behördliche Prüfungen</li>
                  <li>• Third-Party Assessments</li>
                </ul>
              </div>

              <div class="bg-teal-500/10 rounded-lg p-4">
                <h4 class="font-semibold text-teal-300 mb-4 flex items-center gap-2">
                  <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                  Kontinuierliches Monitoring
                </h4>
                <ul class="text-slate-300 text-sm space-y-2">
                  <li>• SIEM-basierte Überwachung</li>
                  <li>• Automated Compliance Checks</li>
                  <li>• KPI-Dashboards</li>
                  <li>• Incident Tracking</li>
                  <li>• Performance Metrics</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-6">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-purple-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-purple-300">TOM-Management Best Practices</h3>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div class="bg-purple-500/10 rounded-lg p-4 text-center">
                <div class="text-3xl mb-3">📋</div>
                <h4 class="font-semibold text-purple-300 mb-2 text-sm">Zentrale Verwaltung</h4>
                <p class="text-slate-400 text-xs">TOM-Register als Single Source of Truth</p>
              </div>

              <div class="bg-pink-500/10 rounded-lg p-4 text-center">
                <div class="text-3xl mb-3">🔄</div>
                <h4 class="font-semibold text-pink-300 mb-2 text-sm">Regelmäßige Updates</h4>
                <p class="text-slate-400 text-xs">Kontinuierliche Anpassung an neue Risiken</p>
              </div>

              <div class="bg-rose-500/10 rounded-lg p-4 text-center">
                <div class="text-3xl mb-3">👥</div>
                <h4 class="font-semibold text-rose-300 mb-2 text-sm">Stakeholder-Einbindung</h4>
                <p class="text-slate-400 text-xs">IT, Legal, Business einbeziehen</p>
              </div>

              <div class="bg-violet-500/10 rounded-lg p-4 text-center">
                <div class="text-3xl mb-3">📊</div>
                <h4 class="font-semibold text-violet-300 mb-2 text-sm">Metriken & KPIs</h4>
                <p class="text-slate-400 text-xs">Messbare Erfolgsindikatoren definieren</p>
              </div>
            </div>

            <div class="mt-6 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg p-4 border border-purple-500/10">
              <h4 class="font-semibold text-purple-300 mb-3">TOM-Lifecycle Management</h4>
              <div class="flex flex-wrap gap-2">
                <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Planung</span>
                <span class="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs">Implementierung</span>
                <span class="px-3 py-1 bg-rose-500/20 text-rose-300 rounded-full text-xs">Betrieb</span>
                <span class="px-3 py-1 bg-violet-500/20 text-violet-300 rounded-full text-xs">Überwachung</span>
                <span class="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs">Optimierung</span>
                <span class="px-3 py-1 bg-pink-500/20 text-pink-300 rounded-full text-xs">Ablösung</span>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ];

  // Scroll Progress Calculation
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
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
              <Link to="/wissen" className="text-slate-400 hover:text-blue-300 transition-colors">Wissen</Link>
              <ChevronRight className="h-4 w-4 text-slate-500" />
              <Link to="/wissen/dsgvo" className="text-slate-400 hover:text-blue-300 transition-colors">DSGVO</Link>
              <ChevronRight className="h-4 w-4 text-slate-500" />
              <span className="text-blue-300">TOM-Maßnahmen</span>
            </div>

            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full mb-8 border border-blue-500/20"
            >
              <Shield className="h-5 w-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">TOM-Leitfaden</span>
              <Settings className="h-5 w-5 text-indigo-400" />
            </motion.div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6">
              <span className="text-white">Technische &</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Organisatorische
              </span>
              <br />
              <span className="text-white">Maßnahmen</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
              Comprehensive Guide für die Implementierung angemessener <span className="font-semibold text-blue-300">Sicherheitsmaßnahmen</span> nach Art. 32 DSGVO
            </p>

            {/* Guide Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 rounded-full backdrop-blur-sm">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-slate-300">45 Min Lesezeit</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 rounded-full backdrop-blur-sm">
                <Target className="h-4 w-4 text-green-400" />
                <span className="text-sm text-slate-300">Fortgeschritten</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 rounded-full backdrop-blur-sm">
                <BookOpen className="h-4 w-4 text-purple-400" />
                <span className="text-sm text-slate-300">{chapters.length} Kapitel</span>
              </div>
              <button
                onClick={() => setBookmarked(!bookmarked)}
                className="flex items-center gap-2 px-4 py-2 bg-slate-800/60 rounded-full backdrop-blur-sm hover:bg-slate-700/60 transition-colors"
              >
                <Bookmark className={cn("h-4 w-4", bookmarked ? "text-yellow-400 fill-current" : "text-slate-400")} />
                <span className="text-sm text-slate-300">Merken</span>
              </button>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setIsReading(true)}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-8 py-4 text-lg font-semibold"
              >
                <Play className="mr-2 h-5 w-5" />
                Guide starten
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-blue-500/30 hover:border-blue-400 text-blue-300 hover:bg-blue-500/10 px-8 py-4 text-lg font-semibold"
              >
                <Download className="mr-2 h-5 w-5" />
                PDF herunterladen
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
                <Link to="/wissen" className="text-slate-400 hover:text-blue-300 transition-colors">Wissen</Link>
                <ChevronRight className="h-4 w-4 text-slate-500" />
                <Link to="/wissen/dsgvo" className="text-slate-400 hover:text-blue-300 transition-colors">DSGVO</Link>
                <ChevronRight className="h-4 w-4 text-slate-500" />
                <span className="text-blue-300">TOM-Maßnahmen</span>
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
                <span>{currentChapterData.readTime} Lesezeit</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span>2,134 Leser</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span>4.8 Bewertung</span>
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
                              <div className="text-xs opacity-75">{chapter.readTime}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-slate-700">
                      <div className="text-sm text-slate-400 mb-2">Gesamtfortschritt</div>
                      <Progress value={(completedChapters.length / chapters.length) * 100} className="h-2 mb-2" />
                      <div className="text-xs text-slate-400">
                        {Math.round((completedChapters.length / chapters.length) * 100)}% • {chapters.reduce((total, chapter) => total + parseInt(chapter.readTime), 0)} Min gesamt
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
                      className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white"
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

      {/* Related Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-blue-900/30">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Weiterführende Leitfäden
            </span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "DSFA durchführen",
                description: "Datenschutz-Folgenabschätzung Schritt für Schritt",
                link: "/wissen/leitfaden/dsfa-durchfuehrung",
                icon: FileCheck,
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Verarbeitungsverzeichnis",
                description: "VVT nach Art. 30 DSGVO erstellen",
                link: "/wissen/leitfaden/verarbeitungsverzeichnis",
                icon: Database,
                color: "from-green-500 to-emerald-500"
              },
              {
                title: "Betroffenenrechte",
                description: "Umsetzung der Art. 15-22 DSGVO",
                link: "/wissen/leitfaden/betroffenenrechte",
                icon: UserCheck,
                color: "from-orange-500 to-red-500"
              }
            ].map((guide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-slate-800/80 backdrop-blur-sm border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className={cn(
                      "inline-flex p-3 rounded-2xl bg-gradient-to-r mb-4",
                      guide.color
                    )}>
                      <guide.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-semibold mb-3 text-white">{guide.title}</h4>
                    <p className="text-slate-300 mb-6">{guide.description}</p>
                    <Button asChild className={cn(
                      "w-full bg-gradient-to-r text-white border-0",
                      guide.color
                    )}>
                      <Link to={guide.link}>
                        Leitfaden öffnen
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TomMassnahmenGuide;