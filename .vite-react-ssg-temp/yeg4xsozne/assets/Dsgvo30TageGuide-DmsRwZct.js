import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect } from "react";
import { useScroll, motion } from "framer-motion";
import { H as Header } from "./Header-DH34VBbs.js";
import { F as Footer } from "./Footer-BVURW7W2.js";
import { C as Card, c as CardContent } from "./card-OzTRm1Ua.js";
import { B as Button } from "./button-BRnNKcuh.js";
import { B as Badge } from "./badge-DObGNgcP.js";
import { P as Progress } from "./progress-DrWvCKoy.js";
import { Calendar, Rocket, Target, CheckCircle2, Clock, ArrowLeft, Bookmark, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { c as cn } from "../main.mjs";
import { S as SEOHead } from "./SEOHead--NuxG2sb.js";
import "./sheet-CZUPRhKH.js";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "@radix-ui/react-dropdown-menu";
import "./useLanguage-BAIZ-FA5.js";
import "@radix-ui/react-slot";
import "@radix-ui/react-progress";
import "vite-react-ssg";
import "@radix-ui/react-toast";
import "clsx";
import "tailwind-merge";
import "next-themes";
import "sonner";
import "@radix-ui/react-tooltip";
import "@tanstack/react-query";
import "react-helmet-async";
const Dsgvo30TageGuide = () => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [readingProgress, setReadingProgress] = useState(0);
  const [isReading, setIsReading] = useState(false);
  const [completedChapters, setCompletedChapters] = useState([]);
  const [bookmarked, setBookmarked] = useState(false);
  const [checkedTasks, setCheckedTasks] = useState({});
  const contentRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start start", "end end"]
  });
  const chapters = [
    {
      id: 0,
      title: "Woche 1: Bestandsaufnahme",
      subtitle: "Datenflüsse identifizieren und dokumentieren",
      week: 1,
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-4 lg:p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-blue-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-blue-300">Tag 1-2: Vollständige Bestandsaufnahme</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-6">
              Bevor Sie DSGVO-Maßnahmen umsetzen können, müssen Sie <strong>alle Datenverarbeitungen</strong> 
              in Ihrem Unternehmen identifizieren. Dies ist das Fundament für alle weiteren Schritte.
            </p>
            
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-6">
              <div class="bg-blue-500/5 rounded-lg p-4 lg:p-6 border-l-4 border-blue-500">
                <h4 class="text-lg font-semibold text-blue-300 mb-4">🎯 Ziel der Bestandsaufnahme:</h4>
                <ul class="text-slate-400 text-sm space-y-2">
                  <li>• Alle Datenverarbeitungen identifizieren</li>
                  <li>• Datenflüsse zwischen Systemen mapping</li>
                  <li>• Verantwortlichkeiten klären</li>
                  <li>• Risikobereich priorisieren</li>
                  <li>• Compliance-Gaps identifizieren</li>
                </ul>
              </div>
              <div class="bg-indigo-500/5 rounded-lg p-4 lg:p-6 border-l-4 border-indigo-500">
                <h4 class="text-lg font-semibold text-indigo-300 mb-4">📊 Erwartetes Ergebnis:</h4>
                <ul class="text-slate-400 text-sm space-y-2">
                  <li>• Vollständiges Datenverarbeitungs-Inventar</li>
                  <li>• Datenfluss-Diagramme</li>
                  <li>• Risiko-Bewertungsmatrix</li>
                  <li>• Prioritätenliste für Woche 2-4</li>
                  <li>• Projekt-Roadmap</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Tag 1: Datenverarbeitungs-Inventar erstellen</h3>
            
            <div class="space-y-6">
              <div class="bg-green-500/5 rounded-lg p-6 border-l-4 border-green-500">
                <h4 class="text-lg font-semibold text-green-300 mb-4">Schritt 1: Alle Systeme & Anwendungen auflisten</h4>
                <p class="text-slate-300 mb-4">
                  Erstellen Sie eine vollständige Liste aller IT-Systeme, die personenbezogene Daten verarbeiten:
                </p>
                
                <div class="grid md:grid-cols-3 gap-4 mb-6">
                  ${[
        {
          category: "Kern-Geschäftssysteme",
          color: "blue",
          items: [
            "CRM-System (Salesforce, HubSpot)",
            "ERP-System (SAP, Oracle)",
            "HR-System (Personio, BambooHR)",
            "Buchhaltungssoftware",
            "Zeiterfassungssystem",
            "Projektmanagement-Tools"
          ]
        },
        {
          category: "Marketing & Kommunikation",
          color: "purple",
          items: [
            "E-Mail-Marketing (Mailchimp)",
            "Website & Analytics",
            "Social Media Management",
            "Telefon- & Video-Systeme",
            "Chat-Tools (Slack, Teams)",
            "Survey-Tools (Typeform)"
          ]
        },
        {
          category: "IT-Infrastruktur",
          color: "orange",
          items: [
            "Cloud-Speicher (Dropbox, OneDrive)",
            "Backup-Systeme",
            "Security-Tools",
            "Monitoring-Software",
            "Access-Management",
            "Mobile Device Management"
          ]
        }
      ].map((cat) => `
                    <div class="bg-${cat.color}-500/10 rounded-lg p-4 border border-${cat.color}-500/20">
                      <h5 class="text-${cat.color}-300 font-semibold mb-3">${cat.category}</h5>
                      <div class="space-y-2">
                        ${cat.items.map((item) => `
                          <label class="flex items-start gap-3 p-2 bg-slate-800/40 rounded-lg cursor-pointer hover:bg-slate-700/40 transition-colors">
                            <input type="checkbox" class="mt-1 rounded border-slate-600 bg-slate-700 text-${cat.color}-500 focus:ring-${cat.color}-500" onchange="handleTaskCheck('${item.replace(/\s+/g, "_").toLowerCase()}')">
                            <span class="text-slate-300 text-sm">${item}</span>
                          </label>
                        `).join("")}
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>

              <div class="bg-emerald-500/5 rounded-lg p-6 border-l-4 border-emerald-500">
                <h4 class="text-lg font-semibold text-emerald-300 mb-4">Schritt 2: Datentypen kategorisieren</h4>
                <p class="text-slate-300 mb-4">
                  Für jedes System dokumentieren Sie, welche Arten von personenbezogenen Daten verarbeitet werden:
                </p>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  <div class="space-y-4">
                    <h5 class="text-emerald-300 font-semibold">🟢 Standard-Kategorien (Art. 4 Nr. 1 DSGVO):</h5>
                    <div class="space-y-2">
                      ${[
        "Identifikationsdaten (Name, Adresse, E-Mail)",
        "Kontaktdaten (Telefon, E-Mail, Anschrift)",
        "Beschäftigtendaten (Arbeitsvertrag, Gehaltsinfo)",
        "Kundendaten (Bestellhistorie, Präferenzen)",
        "Finanzdaten (Bankverbindung, Rechnungen)",
        "Online-Kennungen (IP-Adressen, Cookies)"
      ].map((item) => `
                        <label class="flex items-start gap-3 p-3 bg-slate-800/40 rounded-lg cursor-pointer hover:bg-slate-700/40 transition-colors">
                          <input type="checkbox" class="mt-1 rounded border-slate-600 bg-slate-700 text-emerald-500 focus:ring-emerald-500">
                          <span class="text-slate-300 text-sm">${item}</span>
                        </label>
                      `).join("")}
                    </div>
                  </div>
                  
                  <div class="space-y-4">
                    <h5 class="text-red-300 font-semibold">🔴 Besondere Kategorien (Art. 9 DSGVO):</h5>
                    <div class="bg-red-500/10 rounded-lg p-4 border border-red-500/20">
                      <div class="text-red-300 text-sm font-medium mb-2">⚠️ Erhöhte Schutzanforderungen!</div>
                      <div class="space-y-2">
                        ${[
        "Gesundheitsdaten (Krankschreibungen, Arztberichte)",
        "Biometrische Daten (Fingerabdrücke, Gesichtserkennung)",
        "Religionsangehörigkeit",
        "Politische Meinungen",
        "Gewerkschaftszugehörigkeit",
        "Sexualorientierung"
      ].map((item) => `
                          <label class="flex items-start gap-3 p-2 bg-slate-800/40 rounded-lg cursor-pointer hover:bg-slate-700/40 transition-colors">
                            <input type="checkbox" class="mt-1 rounded border-slate-600 bg-slate-700 text-red-500 focus:ring-red-500">
                            <span class="text-slate-300 text-sm">${item}</span>
                          </label>
                        `).join("")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Tag 2: Datenfluss-Mapping</h3>
            
            <div class="space-y-6">
              <div class="bg-purple-500/5 rounded-lg p-6 border-l-4 border-purple-500">
                <h4 class="text-lg font-semibold text-purple-300 mb-4">Datenfluss-Diagramm erstellen</h4>
                <p class="text-slate-300 mb-4">
                  Visualisieren Sie, wie personenbezogene Daten durch Ihr Unternehmen fließen:
                </p>
                
                <div class="bg-slate-800/60 rounded-lg p-6 mb-4">
                  <h5 class="text-purple-300 font-semibold mb-3">📈 Beispiel: Kundenregistrierung bis Vertragsabschluss</h5>
                  <div class="space-y-4">
                    ${[
        { step: "1", system: "Website-Formular", data: "Name, E-Mail, Telefon", action: "Datenerhebung" },
        { step: "2", system: "CRM-System", data: "Kundendatensatz anlegen", action: "Speicherung" },
        { step: "3", system: "E-Mail-Marketing", data: "Newsletter-Versand", action: "Übermittlung" },
        { step: "4", system: "ERP-System", data: "Rechnungsstellung", action: "Weiterverarbeitung" },
        { step: "5", system: "Backup-System", data: "Datensicherung", action: "Archivierung" }
      ].map((item) => `
                      <div class="flex items-center gap-4 p-3 bg-slate-700/50 rounded-lg">
                        <div class="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                          ${item.step}
                        </div>
                        <div class="flex-grow grid grid-cols-3 gap-4">
                          <div class="text-purple-300 font-medium">${item.system}</div>
                          <div class="text-slate-300 text-sm">${item.data}</div>
                          <div class="text-pink-400 text-sm">${item.action}</div>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
                
                <div class="bg-pink-500/5 rounded-lg p-4 border-l-4 border-pink-500">
                  <h5 class="text-pink-300 font-semibold mb-2">💡 Mapping-Tools & Templates:</h5>
                  <ul class="text-slate-400 text-sm space-y-1">
                    <li>• Lucidchart / Draw.io für Diagramme</li>
                    <li>• Excel/Google Sheets für Datenfluss-Tabellen</li>
                    <li>• RACI-Matrix für Verantwortlichkeiten</li>
                    <li>• Swimlane-Diagramme für Prozessabläufe</li>
                  </ul>
                </div>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <div class="bg-slate-800/60 rounded-lg p-6">
                  <h5 class="text-purple-300 font-semibold mb-4">🔍 Wichtige Fragen pro System:</h5>
                  <div class="space-y-3">
                    ${[
        "Welche Daten werden erhoben?",
        "Von wem werden sie erhoben?",
        "Wofür werden sie verwendet?",
        "An wen werden sie weitergegeben?",
        "Wie lange werden sie gespeichert?",
        "Wo werden sie gespeichert?",
        "Wer hat Zugriff darauf?",
        "Wie sind sie geschützt?"
      ].map((question) => `
                      <label class="flex items-start gap-3 p-2 bg-slate-700/50 rounded-lg cursor-pointer hover:bg-slate-600/50 transition-colors">
                        <input type="checkbox" class="mt-1 rounded border-slate-600 bg-slate-700 text-purple-500 focus:ring-purple-500">
                        <span class="text-slate-300 text-sm">${question}</span>
                      </label>
                    `).join("")}
                  </div>
                </div>
                
                <div class="bg-slate-800/60 rounded-lg p-6">
                  <h5 class="text-pink-300 font-semibold mb-4">📋 Dokumentations-Template:</h5>
                  <div class="bg-slate-900/60 rounded p-4 font-mono text-sm text-green-400">
                    System: [Name]<br/>
                    Zweck: [Geschäftszweck]<br/>
                    Datentypen: [Liste]<br/>
                    Rechtsgrundlage: [Art. 6 DSGVO]<br/>
                    Speicherdauer: [Zeitraum]<br/>
                    Empfänger: [Intern/Extern]<br/>
                    Drittland: [Ja/Nein]<br/>
                    TOM: [Sicherheitsmaßnahmen]<br/>
                    Betroffene: [Kunden/MA/etc.]<br/>
                    Verantwortlicher: [Person]
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Tag 3-7: Risikobewertung & Priorisierung</h3>
            
            <div class="space-y-6">
              <div class="bg-orange-500/5 rounded-lg p-6 border-l-4 border-orange-500">
                <h4 class="text-lg font-semibold text-orange-300 mb-4">DSGVO-Risiko-Matrix erstellen</h4>
                <p class="text-slate-300 mb-4">
                  Bewerten Sie jede Datenverarbeitung nach Risiko und priorisieren Sie Ihre DSGVO-Maßnahmen:
                </p>
                
                <div class="bg-slate-800/60 rounded-lg p-6 mb-4">
                  <h5 class="text-orange-300 font-semibold mb-4">📊 Risiko-Bewertungskriterien:</h5>
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <h6 class="text-orange-400 font-medium mb-3">Eintrittswahrscheinlichkeit:</h6>
                      <div class="space-y-2">
                        ${[
        { level: "Hoch (3)", desc: "Bekannte Schwachstellen, häufige Zugriffe", color: "red" },
        { level: "Mittel (2)", desc: "Gelegentliche Risiken, normale Nutzung", color: "yellow" },
        { level: "Niedrig (1)", desc: "Seltene Risiken, geschützte Systeme", color: "green" }
      ].map((item) => `
                          <div class="flex items-center gap-3 p-2 bg-slate-700/50 rounded">
                            <div class="w-3 h-3 bg-${item.color}-500 rounded-full"></div>
                            <span class="text-slate-300 text-sm"><strong>${item.level}:</strong> ${item.desc}</span>
                          </div>
                        `).join("")}
                      </div>
                    </div>
                    <div>
                      <h6 class="text-red-400 font-medium mb-3">Schadensausmaß:</h6>
                      <div class="space-y-2">
                        ${[
        { level: "Hoch (3)", desc: "Besondere Kategorien, große Datenmengen", color: "red" },
        { level: "Mittel (2)", desc: "Persönliche Daten, moderate Mengen", color: "yellow" },
        { level: "Niedrig (1)", desc: "Anonyme/pseudonyme Daten", color: "green" }
      ].map((item) => `
                          <div class="flex items-center gap-3 p-2 bg-slate-700/50 rounded">
                            <div class="w-3 h-3 bg-${item.color}-500 rounded-full"></div>
                            <span class="text-slate-300 text-sm"><strong>${item.level}:</strong> ${item.desc}</span>
                          </div>
                        `).join("")}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div class="grid md:grid-cols-3 gap-4">
                  ${[
        { risk: "Kritisch (7-9)", color: "red", action: "Sofortige Maßnahmen erforderlich", priority: "Woche 2" },
        { risk: "Hoch (5-6)", color: "orange", action: "Kurzfristige Behandlung", priority: "Woche 3" },
        { risk: "Mittel (3-4)", color: "yellow", action: "Mittelfristige Planung", priority: "Woche 4" },
        { risk: "Niedrig (1-2)", color: "green", action: "Langfristige Überwachung", priority: "Nach 30 Tagen" }
      ].slice(0, 3).map((item) => `
                    <div class="bg-${item.color}-500/10 rounded-lg p-4 border border-${item.color}-500/20">
                      <h6 class="text-${item.color}-300 font-semibold mb-2">${item.risk}</h6>
                      <div class="text-slate-300 text-sm mb-2">${item.action}</div>
                      <div class="text-${item.color}-400 text-xs font-medium">${item.priority}</div>
                    </div>
                  `).join("")}
                </div>
              </div>

              <div class="bg-red-500/5 rounded-lg p-6 border-l-4 border-red-500">
                <h4 class="text-lg font-semibold text-red-300 mb-4">Woche 1 Checkliste: Abschluss</h4>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <h5 class="text-red-400 font-medium mb-3">✅ Deliverables erstellt:</h5>
                    <div class="space-y-2">
                      ${[
        "Vollständiges System-Inventar",
        "Datentypen-Kategorisierung",
        "Datenfluss-Diagramme",
        "Risiko-Bewertungsmatrix",
        "Prioritäten-Liste für Woche 2-4"
      ].map((item) => `
                        <label class="flex items-start gap-3 p-2 bg-slate-800/40 rounded-lg cursor-pointer hover:bg-slate-700/40 transition-colors">
                          <input type="checkbox" class="mt-1 rounded border-slate-600 bg-slate-700 text-red-500 focus:ring-red-500">
                          <span class="text-slate-300 text-sm">${item}</span>
                        </label>
                      `).join("")}
                    </div>
                  </div>
                  <div>
                    <h5 class="text-red-400 font-medium mb-3">📋 Ready für Woche 2:</h5>
                    <div class="space-y-2">
                      ${[
        "Team informiert über Findings",
        "Kritische Systeme identifiziert",
        "Rechtsgrundlagen-Analyse vorbereitet",
        "Externe Dienstleister kontaktiert",
        "Management-Approval für Phase 2"
      ].map((item) => `
                        <label class="flex items-start gap-3 p-2 bg-slate-800/40 rounded-lg cursor-pointer hover:bg-slate-700/40 transition-colors">
                          <input type="checkbox" class="mt-1 rounded border-slate-600 bg-slate-700 text-red-500 focus:ring-red-500">
                          <span class="text-slate-300 text-sm">${item}</span>
                        </label>
                      `).join("")}
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
      id: 1,
      title: "Woche 2: Rechtsgrundlagen",
      subtitle: "Art. 6 DSGVO für alle Verarbeitungen definieren",
      week: 2,
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-green-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-green-300">Tag 8-10: Rechtsgrundlagen-Audit</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-6">
              Jede Datenverarbeitung braucht eine <strong>explizite Rechtsgrundlage</strong> nach Art. 6 DSGVO. 
              In Woche 2 ordnen Sie jeder identifizierten Verarbeitung die passende Rechtsgrundlage zu.
            </p>
            
            <div class="bg-yellow-500/10 rounded-lg p-6 border border-yellow-500/20 mb-6">
              <div class="flex items-center gap-2 mb-3">
                <svg class="h-5 w-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path>
                </svg>
                <h4 class="text-yellow-300 font-semibold">⚠️ Kritischer Erfolgsfaktor</h4>
              </div>
              <p class="text-slate-300 text-sm">
                <strong>Ohne gültige Rechtsgrundlage ist jede Datenverarbeitung rechtswidrig!</strong> 
                Dies ist einer der häufigsten DSGVO-Verstöße und führt oft zu den höchsten Bußgeldern.
              </p>
            </div>
          </div>

          <div class="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Die 6 Rechtsgrundlagen im Detail</h3>
            
            <div class="space-y-6">
              ${[
        {
          art: "Art. 6 Abs. 1 lit. a",
          title: "Einwilligung",
          icon: "✋",
          color: "green",
          description: "Die betroffene Person hat ihre Einwilligung für spezifische Zwecke gegeben.",
          anwendung: "Newsletter, Marketing, nicht-essentielle Cookies",
          voraussetzungen: [
            "Freiwillig (keine Kopplung)",
            "Spezifisch für jeden Zweck",
            "Informiert (klare Aufklärung)",
            "Eindeutig (aktive Handlung)",
            "Nachweisbar dokumentiert",
            "Jederzeit widerrufbar"
          ],
          vorteile: ["Hohe Legitimation", "Flexibel einsetzbar", "Transparenz"],
          nachteile: ["Kann widerrufen werden", "Nachweis erforderlich", "Aufwändig"],
          praxistipp: "Double-Opt-In für E-Mail-Marketing implementieren"
        },
        {
          art: "Art. 6 Abs. 1 lit. b",
          title: "Vertragserfüllung",
          icon: "📋",
          color: "blue",
          description: "Verarbeitung zur Erfüllung eines Vertrags oder vorvertraglicher Maßnahmen.",
          anwendung: "Kundendaten, Bestellabwicklung, Rechnungsstellung",
          voraussetzungen: [
            "Bestehender Vertrag oder vorvertragliche Maßnahmen",
            "Verarbeitung objektiv erforderlich",
            "Zweckbindung an Vertragserfüllung",
            "Verhältnismäßigkeit gewahrt"
          ],
          vorteile: ["Stabil", "Geschäftlich notwendig", "Kein Widerruf"],
          nachteile: ["Streng zweckgebunden", "Nur für Vertragszwecke"],
          praxistipp: "Klar definieren, welche Daten für Vertragserfüllung erforderlich sind"
        },
        {
          art: "Art. 6 Abs. 1 lit. c",
          title: "Rechtliche Verpflichtung",
          icon: "⚖️",
          color: "purple",
          description: "Verarbeitung zur Erfüllung gesetzlicher Verpflichtungen.",
          anwendung: "Steuerliche Aufbewahrung, Sozialversicherung, Geldwäsche-Prävention",
          voraussetzungen: [
            "Konkrete gesetzliche Grundlage",
            "EU-Recht oder Mitgliedstaatenrecht",
            "Verhältnismäßigkeit",
            "Bestimmtheit der Rechtsgrundlage"
          ],
          vorteile: ["Rechtssicherheit", "Keine Einwilligung nötig", "Klar definiert"],
          nachteile: ["Streng zweckgebunden", "Keine Flexibilität"],
          praxistipp: "Gesetzliche Aufbewahrungsfristen dokumentieren (HGB, AO, etc.)"
        },
        {
          art: "Art. 6 Abs. 1 lit. f",
          title: "Berechtigtes Interesse",
          icon: "⚖️",
          color: "orange",
          description: "Verarbeitung zur Wahrung berechtigter Interessen (bei Interessenabwägung).",
          anwendung: "Direktwerbung, IT-Sicherheit, Betrugsbekämpfung, interne Verwaltung",
          voraussetzungen: [
            "Legitimes Interesse des Verantwortlichen/Dritten",
            "Erforderlichkeit der Verarbeitung",
            "Interessenabwägungstest durchgeführt",
            "Grundrechte überwiegen nicht"
          ],
          vorteile: ["Flexibel einsetzbar", "Geschäftlich relevant", "Praktikabel"],
          nachteile: ["Komplexe Abwägung", "Widerspruchsrecht", "Rechtsunsicherheit"],
          praxistipp: "Dreistufiger Interessenabwägungstest dokumentieren"
        }
      ].map((basis) => `
                <div class="bg-${basis.color}-500/10 rounded-xl p-6 border border-${basis.color}-500/20">
                  <div class="flex items-start gap-4 mb-4">
                    <div class="text-3xl">${basis.icon}</div>
                    <div>
                      <h4 class="text-${basis.color}-300 font-bold text-lg">${basis.title}</h4>
                      <div class="text-${basis.color}-400 text-sm font-mono">${basis.art}</div>
                    </div>
                  </div>
                  
                  <p class="text-slate-300 mb-4">${basis.description}</p>
                  
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4 mb-4">
                    <div class="bg-slate-800/60 rounded p-4">
                      <h5 class="text-${basis.color}-300 font-semibold text-sm mb-2">📍 Typische Anwendung:</h5>
                      <p class="text-slate-300 text-sm">${basis.anwendung}</p>
                    </div>
                    <div class="bg-slate-800/60 rounded p-4">
                      <h5 class="text-${basis.color}-300 font-semibold text-sm mb-2">💡 Praxis-Tipp:</h5>
                      <p class="text-slate-300 text-sm">${basis.praxistipp}</p>
                    </div>
                  </div>
                  
                  <div class="grid md:grid-cols-3 gap-4">
                    <div>
                      <h5 class="text-${basis.color}-400 font-medium text-sm mb-2">✅ Voraussetzungen:</h5>
                      <ul class="text-slate-400 text-xs space-y-1">
                        ${basis.voraussetzungen.map((item) => `<li>• ${item}</li>`).join("")}
                      </ul>
                    </div>
                    <div>
                      <h5 class="text-green-400 font-medium text-sm mb-2">✅ Vorteile:</h5>
                      <ul class="text-slate-400 text-xs space-y-1">
                        ${basis.vorteile.map((item) => `<li>• ${item}</li>`).join("")}
                      </ul>
                    </div>
                    <div>
                      <h5 class="text-red-400 font-medium text-sm mb-2">❌ Nachteile:</h5>
                      <ul class="text-slate-400 text-xs space-y-1">
                        ${basis.nachteile.map((item) => `<li>• ${item}</li>`).join("")}
                      </ul>
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Tag 11-12: Interessenabwägungstest (LIA)</h3>
            
            <div class="space-y-6">
              <div class="bg-purple-500/5 rounded-lg p-6 border-l-4 border-purple-500">
                <h4 class="text-lg font-semibold text-purple-300 mb-4">Wann ist ein LIA erforderlich?</h4>
                <p class="text-slate-300 mb-4">
                  Für Art. 6 Abs. 1 lit. f (berechtigtes Interesse) müssen Sie einen <strong>Legitimate Interest Assessment (LIA)</strong> 
                  durchführen - eine dokumentierte Interessenabwägung.
                </p>
                
                <div class="grid md:grid-cols-3 gap-4">
                  <div class="bg-slate-800/60 rounded p-4">
                    <h5 class="text-purple-300 font-semibold text-sm mb-2">1️⃣ Zwecktest</h5>
                    <ul class="text-slate-400 text-xs space-y-1">
                      <li>• Ist das Interesse legitim?</li>
                      <li>• Ist es hinreichend konkret?</li>
                      <li>• Ist es rechtmäßig?</li>
                      <li>• Entspricht es EU-Grundrechten?</li>
                    </ul>
                  </div>
                  <div class="bg-slate-800/60 rounded p-4">
                    <h5 class="text-purple-300 font-semibold text-sm mb-2">2️⃣ Erforderlichkeitstest</h5>
                    <ul class="text-slate-400 text-xs space-y-1">
                      <li>• Ist die Verarbeitung erforderlich?</li>
                      <li>• Gibt es mildere Mittel?</li>
                      <li>• Ist sie verhältnismäßig?</li>
                      <li>• Ist sie angemessen?</li>
                    </ul>
                  </div>
                  <div class="bg-slate-800/60 rounded p-4">
                    <h5 class="text-purple-300 font-semibold text-sm mb-2">3️⃣ Abwägungstest</h5>
                    <ul class="text-slate-400 text-xs space-y-1">
                      <li>• Welche Grundrechte sind betroffen?</li>
                      <li>• Wie schwer wiegt der Eingriff?</li>
                      <li>• Überwiegen die Interessen?</li>
                      <li>• Besteht Widerspruchsrecht?</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="bg-pink-500/5 rounded-lg p-6 border-l-4 border-pink-500">
                <h4 class="text-lg font-semibold text-pink-300 mb-4">LIA-Template: Direktwerbung per E-Mail</h4>
                <div class="bg-slate-800/60 rounded-lg p-6">
                  <div class="space-y-4">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
                      <div class="bg-slate-700/50 rounded p-4">
                        <h5 class="text-pink-300 font-semibold text-sm mb-2">🎯 Unser berechtigtes Interesse:</h5>
                        <p class="text-slate-300 text-sm">
                          Direktwerbung für eigene ähnliche Produkte an Bestandskunden zur Kundenbindung 
                          und Umsatzsteigerung (§ 7 Abs. 3 UWG).
                        </p>
                      </div>
                      <div class="bg-slate-700/50 rounded p-4">
                        <h5 class="text-orange-300 font-semibold text-sm mb-2">⚖️ Betroffeneninteressen:</h5>
                        <p class="text-slate-300 text-sm">
                          Schutz der Privatsphäre, informationelle Selbstbestimmung, 
                          Schutz vor unerwünschter Werbung.
                        </p>
                      </div>
                    </div>
                    
                    <div class="bg-green-500/10 rounded p-4 border border-green-500/20">
                      <h5 class="text-green-300 font-semibold text-sm mb-2">✅ Abwägungsresultat:</h5>
                      <ul class="text-slate-300 text-sm space-y-1">
                        <li>• Bestandskundenbeziehung rechtfertigt Direktwerbung</li>
                        <li>• Nur ähnliche Produkte (keine fremde Werbung)</li>
                        <li>• Klares Widerspruchsrecht in jeder E-Mail</li>
                        <li>• Möglichkeit zur einfachen Abmeldung</li>
                        <li>• <strong>Ergebnis: Berechtigtes Interesse überwiegt</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Tag 13-14: Rechtsgrundlagen-Matrix erstellen</h3>
            
            <div class="space-y-6">
              <div class="bg-orange-500/5 rounded-lg p-6 border-l-4 border-orange-500">
                <h4 class="text-lg font-semibold text-orange-300 mb-4">System-Rechtsgrundlagen-Mapping</h4>
                <p class="text-slate-300 mb-4">
                  Erstellen Sie für jedes System aus Woche 1 eine Rechtsgrundlagen-Matrix:
                </p>
                
                <div class="overflow-x-auto">
                  <table class="w-full bg-slate-800/60 rounded-lg">
                    <thead class="bg-slate-700/50">
                      <tr class="text-left">
                        <th class="p-3 text-orange-300 font-semibold text-sm">System</th>
                        <th class="p-3 text-orange-300 font-semibold text-sm">Datentyp</th>
                        <th class="p-3 text-orange-300 font-semibold text-sm">Zweck</th>
                        <th class="p-3 text-orange-300 font-semibold text-sm">Rechtsgrundlage</th>
                        <th class="p-3 text-orange-300 font-semibold text-sm">Status</th>
                      </tr>
                    </thead>
                    <tbody class="text-sm">
                      ${[
        { system: "CRM-System", datentyp: "Kundenkontakte", zweck: "Vertragserfüllung", rechtsgrundlage: "Art. 6 Abs. 1 lit. b", status: "OK", color: "green" },
        { system: "Newsletter-Tool", datentyp: "E-Mail-Adressen", zweck: "Marketing", rechtsgrundlage: "Art. 6 Abs. 1 lit. a", status: "Double-Opt-In prüfen", color: "yellow" },
        { system: "Google Analytics", datentyp: "Nutzungsdaten", zweck: "Website-Optimierung", rechtsgrundlage: "Art. 6 Abs. 1 lit. f", status: "LIA erforderlich", color: "red" },
        { system: "HR-System", datentyp: "Mitarbeiterdaten", zweck: "Personalverwaltung", rechtsgrundlage: "Art. 6 Abs. 1 lit. b", status: "OK", color: "green" },
        { system: "Buchhaltung", datentyp: "Rechnungsdaten", zweck: "Gesetzl. Aufbewahrung", rechtsgrundlage: "Art. 6 Abs. 1 lit. c", status: "OK", color: "green" }
      ].map((row) => `
                        <tr class="border-t border-slate-700/50 hover:bg-slate-700/30">
                          <td class="p-3 text-slate-300">${row.system}</td>
                          <td class="p-3 text-slate-400">${row.datentyp}</td>
                          <td class="p-3 text-slate-400">${row.zweck}</td>
                          <td class="p-3 text-slate-400 font-mono text-xs">${row.rechtsgrundlage}</td>
                          <td class="p-3">
                            <span class="text-${row.color}-400 text-xs font-medium px-2 py-1 bg-${row.color}-500/20 rounded">
                              ${row.status}
                            </span>
                          </td>
                        </tr>
                      `).join("")}
                    </tbody>
                  </table>
                </div>
              </div>

              <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                <div class="bg-red-500/5 rounded-lg p-6 border-l-4 border-red-500">
                  <h4 class="text-lg font-semibold text-red-300 mb-4">🚨 Kritische To-Dos identifiziert:</h4>
                  <div class="space-y-3">
                    ${[
        "Systeme ohne Rechtsgrundlage → Sofort stoppen oder Grundlage schaffen",
        "Einwilligungen ohne Double-Opt-In → Nachholen oder löschen",
        "Berechtigte Interessen ohne LIA → Interessenabwägung dokumentieren",
        "Veraltete Einwilligungen → Renewal-Kampagne starten",
        "Drittländer-Transfers ohne Garantien → Standardvertragsklauseln abschließen"
      ].map((item) => `
                      <label class="flex items-start gap-3 p-2 bg-slate-800/40 rounded-lg cursor-pointer hover:bg-slate-700/40 transition-colors">
                        <input type="checkbox" class="mt-1 rounded border-slate-600 bg-slate-700 text-red-500 focus:ring-red-500">
                        <span class="text-slate-300 text-sm">${item}</span>
                      </label>
                    `).join("")}
                  </div>
                </div>
                
                <div class="bg-green-500/5 rounded-lg p-6 border-l-4 border-green-500">
                  <h4 class="text-lg font-semibold text-green-300 mb-4">✅ Quick Wins umsetzen:</h4>
                  <div class="space-y-3">
                    ${[
        "Datenschutzerklärung mit allen Rechtsgrundlagen aktualisieren",
        "Cookie-Banner für korrekte Einwilligungen anpassen",
        "Opt-Out-Links in alle Marketing-E-Mails einbauen",
        "Standard-LIA-Templates für häufige Anwendungsfälle erstellen",
        "Mitarbeiter über neue Rechtsgrundlagen informieren"
      ].map((item) => `
                      <label class="flex items-start gap-3 p-2 bg-slate-800/40 rounded-lg cursor-pointer hover:bg-slate-700/40 transition-colors">
                        <input type="checkbox" class="mt-1 rounded border-slate-600 bg-slate-700 text-green-500 focus:ring-green-500">
                        <span class="text-slate-300 text-sm">${item}</span>
                      </label>
                    `).join("")}
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
      title: "Woche 3: TOM & Dokumentation",
      subtitle: "Technische und organisatorische Maßnahmen implementieren",
      week: 3,
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-indigo-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-indigo-300">Tag 15-17: TOM-Framework aufbauen</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-6">
              Technische und organisatorische Maßnahmen (TOM) nach <strong>Art. 32 DSGVO</strong> sind das Herzstück 
              der Datensicherheit. Sie müssen angemessen, wirksam und nachweislich implementiert sein.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6">
              <div class="bg-indigo-500/5 rounded-lg p-4 lg:p-6 border-l-4 border-indigo-500">
                <h4 class="text-lg font-semibold text-indigo-300 mb-4">🎯 TOM-Ziele (Art. 32 DSGVO):</h4>
                <ul class="text-slate-400 text-sm space-y-2">
                  <li>• <strong>Vertraulichkeit:</strong> Schutz vor unbefugtem Zugriff</li>
                  <li>• <strong>Integrität:</strong> Schutz vor Manipulation und Verfälschung</li>
                  <li>• <strong>Verfügbarkeit:</strong> Gewährleistung der Datenverfügbarkeit</li>
                  <li>• <strong>Belastbarkeit:</strong> Widerstandsfähigkeit der Systeme</li>
                  <li>• <strong>Wiederherstellbarkeit:</strong> Schnelle Datenwiederherstellung</li>
                </ul>
              </div>
              <div class="bg-purple-500/5 rounded-lg p-6 border-l-4 border-purple-500">
                <h4 class="text-lg font-semibold text-purple-300 mb-4">📋 TOM-Kategorien:</h4>
                <ul class="text-slate-400 text-sm space-y-2">
                  <li>• <strong>Zutrittskontrolle:</strong> Physischer Schutz der Systeme</li>
                  <li>• <strong>Zugangskontrolle:</strong> Benutzer-Authentifizierung</li>
                  <li>• <strong>Zugriffskontrolle:</strong> Autorisierung auf Datenebene</li>
                  <li>• <strong>Trennungskontrolle:</strong> Mandantentrennung</li>
                  <li>• <strong>Pseudonymisierung:</strong> Identitätsverschleierung</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">TOM-Katalog: Praktische Umsetzung</h3>
            
            <div class="space-y-8">
              ${[
        {
          category: "Technische Maßnahmen",
          icon: "💻",
          color: "blue",
          measures: [
            {
              name: "Verschlüsselung",
              description: "End-to-End-Verschlüsselung für Daten in Transit und at Rest",
              implementation: "TLS 1.3 für Webverkehr, AES-256 für Dateien, BitLocker für Festplatten",
              priority: "Hoch",
              timeline: "Woche 3"
            },
            {
              name: "Backup & Recovery",
              description: "Automatisierte, getestete Backup-Strategien",
              implementation: "3-2-1-Regel: 3 Kopien, 2 verschiedene Medien, 1 Offsite-Backup",
              priority: "Hoch",
              timeline: "Woche 3"
            },
            {
              name: "Access Controls",
              description: "Multi-Faktor-Authentifizierung und Role-based Access",
              implementation: "MFA für alle Admin-Accounts, RBAC-Matrix, regelmäßige Access Reviews",
              priority: "Kritisch",
              timeline: "Sofort"
            },
            {
              name: "Monitoring & Logging",
              description: "Umfassende Protokollierung aller Zugriffe",
              implementation: "SIEM-System, Alert-Rules, Log-Retention nach rechtlichen Vorgaben",
              priority: "Mittel",
              timeline: "Woche 4"
            }
          ]
        },
        {
          category: "Organisatorische Maßnahmen",
          icon: "👥",
          color: "green",
          measures: [
            {
              name: "Datenschutz-Schulungen",
              description: "Regelmäßige Awareness-Trainings für alle Mitarbeiter",
              implementation: "Jährliche Pflichtschulungen, Phishing-Simulationen, Incident Response Training",
              priority: "Hoch",
              timeline: "Woche 3"
            },
            {
              name: "Incident Response Plan",
              description: "Strukturierte Prozesse für Datenschutzverletzungen",
              implementation: "72h-Meldeprozess, Eskalationsmatrix, Kommunikationspläne",
              priority: "Kritisch",
              timeline: "Woche 3"
            },
            {
              name: "Vendor Management",
              description: "DSGVO-konforme Auftragsverarbeiter-Verträge",
              implementation: "DPA-Templates, Due Diligence Checklisten, regelmäßige Audits",
              priority: "Hoch",
              timeline: "Woche 4"
            },
            {
              name: "Data Governance",
              description: "Klare Rollen und Verantwortlichkeiten",
              implementation: "Data Owner/Steward-Rollen, Datenklassifizierung, Retention Policies",
              priority: "Mittel",
              timeline: "Woche 4"
            }
          ]
        }
      ].map((section) => `
                <div class="bg-${section.color}-500/10 rounded-xl p-6 border border-${section.color}-500/20">
                  <h4 class="text-${section.color}-300 font-bold text-xl mb-6 flex items-center gap-3">
                    <span class="text-2xl">${section.icon}</span>
                    ${section.category}
                  </h4>
                  
                  <div class="grid gap-6">
                    ${section.measures.map((measure) => `
                      <div class="bg-slate-800/60 rounded-lg p-6 border border-slate-700/50">
                        <div class="flex items-start justify-between mb-4">
                          <div>
                            <h5 class="text-white font-semibold text-lg">${measure.name}</h5>
                            <p class="text-slate-300 text-sm">${measure.description}</p>
                          </div>
                          <div class="text-right">
                            <div class="text-${measure.priority === "Kritisch" ? "red" : measure.priority === "Hoch" ? "orange" : "yellow"}-400 text-xs font-bold px-2 py-1 bg-${measure.priority === "Kritisch" ? "red" : measure.priority === "Hoch" ? "orange" : "yellow"}-500/20 rounded mb-1">
                              ${measure.priority}
                            </div>
                            <div class="text-slate-400 text-xs">${measure.timeline}</div>
                          </div>
                        </div>
                        
                        <div class="bg-slate-700/50 rounded p-4">
                          <h6 class="text-${section.color}-400 font-medium text-sm mb-2">🔧 Implementierung:</h6>
                          <p class="text-slate-300 text-sm">${measure.implementation}</p>
                        </div>
                        
                        <div class="mt-4">
                          <label class="flex items-center gap-3 cursor-pointer">
                            <input type="checkbox" class="rounded border-slate-600 bg-slate-700 text-${section.color}-500 focus:ring-${section.color}-500">
                            <span class="text-slate-300 text-sm font-medium">Als implementiert markieren</span>
                          </label>
                        </div>
                      </div>
                    `).join("")}
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Tag 18-19: Verarbeitungsverzeichnis (VVT)</h3>
            
            <div class="space-y-6">
              <div class="bg-purple-500/5 rounded-lg p-6 border-l-4 border-purple-500">
                <h4 class="text-lg font-semibold text-purple-300 mb-4">Art. 30 DSGVO: Dokumentationspflicht</h4>
                <p class="text-slate-300 mb-4">
                  Das Verarbeitungsverzeichnis ist ein <strong>zentrales Compliance-Dokument</strong>, das alle 
                  Datenverarbeitungsaktivitäten Ihres Unternehmens vollständig dokumentiert.
                </p>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="bg-slate-800/60 rounded p-4">
                    <h5 class="text-purple-300 font-semibold text-sm mb-2">📋 Pflichtangaben (Art. 30 Abs. 1):</h5>
                    <ul class="text-slate-400 text-xs space-y-1">
                      <li>• Name und Kontaktdaten des Verantwortlichen</li>
                      <li>• Zwecke der Verarbeitung</li>
                      <li>• Kategorien betroffener Personen</li>
                      <li>• Kategorien personenbezogener Daten</li>
                      <li>• Kategorien von Empfängern</li>
                      <li>• Drittlandübermittlungen</li>
                      <li>• Löschfristen</li>
                      <li>• Beschreibung der TOM</li>
                    </ul>
                  </div>
                  <div class="bg-slate-800/60 rounded p-4">
                    <h5 class="text-pink-300 font-semibold text-sm mb-2">💡 Best Practices:</h5>
                    <ul class="text-slate-400 text-xs space-y-1">
                      <li>• Eine Verarbeitung = Ein VVT-Eintrag</li>
                      <li>• Verwandte Verarbeitungen zusammenfassen</li>
                      <li>• Regelmäßige Updates (mindestens jährlich)</li>
                      <li>• Versionierung und Änderungshistorie</li>
                      <li>• Verlinkung zu relevanten Dokumenten</li>
                      <li>• Einfache Sprache für Aufsichtsbehörden</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="bg-pink-500/5 rounded-lg p-6 border-l-4 border-pink-500">
                <h4 class="text-lg font-semibold text-pink-300 mb-4">VVT-Template: Beispiel "Kundenmanagement"</h4>
                <div class="bg-slate-800/60 rounded-lg p-6">
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                    <div class="space-y-4">
                      <div class="bg-slate-700/50 rounded p-3">
                        <h6 class="text-pink-300 font-semibold text-sm mb-1">1. Verantwortlicher</h6>
                        <p class="text-slate-300 text-sm">
                          MusterGmbH<br/>
                          Max Mustermann (Geschäftsführer)<br/>
                          Musterstraße 1, 12345 Musterstadt<br/>
                          datenschutz@mustergmbh.de
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded p-3">
                        <h6 class="text-pink-300 font-semibold text-sm mb-1">2. Zwecke der Verarbeitung</h6>
                        <p class="text-slate-300 text-sm">
                          Kundenbeziehungsmanagement, Vertragsabwicklung, 
                          Rechnungsstellung, Kundensupport, Direktwerbung
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded p-3">
                        <h6 class="text-pink-300 font-semibold text-sm mb-1">3. Kategorien betroffener Personen</h6>
                        <p class="text-slate-300 text-sm">
                          Kunden, Interessenten, Ansprechpartner bei Firmenkunden
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded p-3">
                        <h6 class="text-pink-300 font-semibold text-sm mb-1">4. Kategorien personenbezogener Daten</h6>
                        <p class="text-slate-300 text-sm">
                          Stammdaten (Name, Adresse, E-Mail, Telefon), 
                          Vertragsdaten, Zahlungsdaten, Kommunikationsdaten
                        </p>
                      </div>
                    </div>
                    
                    <div class="space-y-4">
                      <div class="bg-slate-700/50 rounded p-3">
                        <h6 class="text-pink-300 font-semibold text-sm mb-1">5. Kategorien von Empfängern</h6>
                        <p class="text-slate-300 text-sm">
                          Interne Abteilungen (Vertrieb, Buchhaltung), 
                          Auftragsverarbeiter (CRM-Anbieter, E-Mail-Service), 
                          Behörden (nur bei rechtlicher Verpflichtung)
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded p-3">
                        <h6 class="text-pink-300 font-semibold text-sm mb-1">6. Drittlandübermittlung</h6>
                        <p class="text-slate-300 text-sm">
                          USA (CRM-Anbieter)<br/>
                          Garantien: Standardvertragsklauseln der EU-Kommission<br/>
                          Angemessenheitsbeschluss: EU-US Data Privacy Framework
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded p-3">
                        <h6 class="text-pink-300 font-semibold text-sm mb-1">7. Löschfristen</h6>
                        <p class="text-slate-300 text-sm">
                          Kundendaten: 3 Jahre nach Vertragsende<br/>
                          Rechnungsdaten: 10 Jahre (§ 147 AO)<br/>
                          Marketing-Einwilligungen: Bei Widerruf
                        </p>
                      </div>
                      
                      <div class="bg-slate-700/50 rounded p-3">
                        <h6 class="text-pink-300 font-semibold text-sm mb-1">8. TOM (Verweis auf TOM-Katalog)</h6>
                        <p class="text-slate-300 text-sm">
                          Verschlüsselung (AES-256), Zugangskontrollen (MFA), 
                          Backup-Strategie (3-2-1), Mitarbeiterschulungen
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Tag 20-21: Betroffenenrechte implementieren</h3>
            
            <div class="space-y-6">
              <div class="bg-yellow-500/5 rounded-lg p-6 border-l-4 border-yellow-500">
                <h4 class="text-lg font-semibold text-yellow-300 mb-4">Betroffenenrechte-Prozesse (Art. 15-22 DSGVO)</h4>
                <p class="text-slate-300 mb-4">
                  Implementieren Sie <strong>standardisierte Prozesse</strong> für alle Betroffenenrechte mit 
                  klaren Fristen und Verantwortlichkeiten.
                </p>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  ${[
        {
          title: "Auskunftsrecht (Art. 15)",
          timeline: "1 Monat",
          process: [
            "Identitätsprüfung der betroffenen Person",
            "Vollständige Datensammlung aus allen Systemen",
            "Strukturierte Aufbereitung der Auskunft",
            "Kostenlose Bereitstellung (erste Anfrage)",
            "Dokumentation der Bearbeitung"
          ],
          tools: "Auskunfts-Template, Datenexport-Scripts",
          color: "blue"
        },
        {
          title: "Löschungsrecht (Art. 17)",
          timeline: "1 Monat (unverzüglich)",
          process: [
            "Prüfung der Löschungsvoraussetzungen",
            "Identifikation aller betroffenen Systeme",
            "Berücksichtigung gesetzlicher Aufbewahrungsfristen",
            "Koordinierte Löschung oder Pseudonymisierung",
            "Bestätigung an betroffene Person"
          ],
          tools: "Löschkonzept, Automatisierte Löschskripte",
          color: "red"
        },
        {
          title: "Datenübertragbarkeit (Art. 20)",
          timeline: "1 Monat",
          process: [
            "Prüfung der Anwendbarkeit (Einwilligung/Vertrag)",
            "Export in strukturiertem, maschinenlesbarem Format",
            "Sichere Übertragung an betroffene Person",
            "Auf Wunsch: Direkte Übertragung an anderen Verantwortlichen",
            "Dokumentation des Exports"
          ],
          tools: "Export-APIs, CSV/JSON-Templates",
          color: "green"
        },
        {
          title: "Widerspruchsrecht (Art. 21)",
          timeline: "Unverzüglich",
          process: [
            "Prüfung der Rechtsgrundlage (Art. 6 Abs. 1 lit. e, f)",
            "Einstellung der Verarbeitung (bei Direktwerbung sofort)",
            "Interessenabwägung bei sonstigen Widersprüchen",
            "Kommunikation der Entscheidung",
            "Aktualisierung der Systeme"
          ],
          tools: "Opt-Out-Management, Präferenz-Center",
          color: "purple"
        }
      ].map((right) => `
                    <div class="bg-${right.color}-500/10 rounded-lg p-4 border border-${right.color}-500/20">
                      <div class="flex items-center justify-between mb-3">
                        <h5 class="text-${right.color}-300 font-semibold">${right.title}</h5>
                        <span class="text-${right.color}-400 text-xs font-medium px-2 py-1 bg-${right.color}-500/20 rounded">
                          ${right.timeline}
                        </span>
                      </div>
                      
                      <div class="space-y-3">
                        <div>
                          <h6 class="text-slate-300 font-medium text-sm mb-2">📋 Standardprozess:</h6>
                          <ul class="text-slate-400 text-xs space-y-1">
                            ${right.process.map((step) => `<li>• ${step}</li>`).join("")}
                          </ul>
                        </div>
                        
                        <div class="bg-slate-800/60 rounded p-3">
                          <h6 class="text-${right.color}-400 font-medium text-sm mb-1">🔧 Tools & Templates:</h6>
                          <p class="text-slate-300 text-xs">${right.tools}</p>
                        </div>
                        
                        <label class="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" class="rounded border-slate-600 bg-slate-700 text-${right.color}-500 focus:ring-${right.color}-500">
                          <span class="text-slate-300 text-sm">Prozess implementiert</span>
                        </label>
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>

              <div class="bg-orange-500/5 rounded-lg p-6 border-l-4 border-orange-500">
                <h4 class="text-lg font-semibold text-orange-300 mb-4">Betroffenenrechte-Dashboard aufsetzen</h4>
                <div class="bg-slate-800/60 rounded-lg p-6">
                  <h5 class="text-orange-300 font-semibold mb-4">📊 Monitoring & KPIs:</h5>
                  <div class="grid md:grid-cols-3 gap-4">
                    ${[
        { metric: "Anfragen pro Monat", target: "< 10", status: "Monitor" },
        { metric: "Durchschnittliche Bearbeitungszeit", target: "< 2 Wochen", status: "Optimize" },
        { metric: "Fristüberschreitungen", target: "0%", status: "Critical" },
        { metric: "Automatisierungsgrad", target: "> 80%", status: "Improve" },
        { metric: "Vollständigkeit der Auskünfte", target: "100%", status: "Ensure" },
        { metric: "Beschwerden bei Aufsichtsbehörden", target: "0", status: "Prevent" }
      ].map((kpi) => `
                      <div class="bg-slate-700/50 rounded p-3">
                        <div class="text-orange-400 font-medium text-sm">${kpi.metric}</div>
                        <div class="text-slate-300 text-lg font-bold">${kpi.target}</div>
                        <div class="text-slate-400 text-xs">${kpi.status}</div>
                      </div>
                    `).join("")}
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
      title: "Woche 4: Schulung & Testing",
      subtitle: "Team-Training und Compliance-Tests durchführen",
      week: 4,
      content: `
        <div class="space-y-8">
          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
            <div class="flex items-center gap-3 mb-6">
              <div class="p-3 bg-green-500 rounded-xl">
                <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold text-green-300">Tag 22-25: DSGVO-Awareness-Programm</h3>
            </div>
            <p class="text-slate-300 leading-relaxed text-lg mb-6">
              <strong>Menschen sind das schwächste Glied</strong> in der DSGVO-Compliance-Kette. 
              Woche 4 fokussiert sich auf umfassende Schulungen und praktische Tests aller Prozesse.
            </p>
            
            <div class="grid md:grid-cols-3 gap-6">
              <div class="bg-green-500/5 rounded-lg p-6 border-l-4 border-green-500">
                <h4 class="text-lg font-semibold text-green-300 mb-4">🎯 Schulungsziele:</h4>
                <ul class="text-slate-400 text-sm space-y-2">
                  <li>• DSGVO-Grundlagen verstehen</li>
                  <li>• Rollenspezifische Pflichten kennen</li>
                  <li>• Incident Response beherrschen</li>
                  <li>• Praktische Anwendung üben</li>
                  <li>• Compliance-Kultur etablieren</li>
                </ul>
              </div>
              <div class="bg-emerald-500/5 rounded-lg p-6 border-l-4 border-emerald-500">
                <h4 class="text-lg font-semibold text-emerald-300 mb-4">📊 Messbare Erfolge:</h4>
                <ul class="text-slate-400 text-sm space-y-2">
                  <li>• 100% Teilnahme an Schulungen</li>
                  <li>• >90% Test-Erfolgsquote</li>
                  <li>• <5 Sek. Incident-Response-Zeit</li>
                  <li>• 0 Datenschutzverletzungen</li>
                  <li>• Positive Aufsichtsbehörden-Bewertung</li>
                </ul>
              </div>
              <div class="bg-teal-500/5 rounded-lg p-6 border-l-4 border-teal-500">
                <h4 class="text-lg font-semibold text-teal-300 mb-4">🔄 Kontinuierlich:</h4>
                <ul class="text-slate-400 text-sm space-y-2">
                  <li>• Jährliche Auffrischungsschulungen</li>
                  <li>• Vierteljährliche Phishing-Tests</li>
                  <li>• Monatliche Compliance-Updates</li>
                  <li>• Ad-hoc Incident-Simulationen</li>
                  <li>• Neue Mitarbeiter-Onboarding</li>
                </ul>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Rollenbezogene Schulungsmodule</h3>
            
            <div class="space-y-6">
              ${[
        {
          role: "Alle Mitarbeiter",
          icon: "👥",
          color: "blue",
          duration: "90 Min",
          topics: [
            "DSGVO-Grundlagen und Prinzipien",
            "Was sind personenbezogene Daten?",
            "Umgang mit Kundendaten im Arbeitsalltag",
            "E-Mail-Sicherheit und Phishing-Erkennung",
            "Passwort-Sicherheit und MFA",
            "Incident Reporting - Was tun bei Verdacht?",
            "Clean Desk Policy und physische Sicherheit",
            "Datenschutz im Homeoffice"
          ],
          practical: [
            "Phishing-E-Mail-Erkennung (Simulation)",
            "Sichere Passwort-Erstellung",
            "Datenschutzvorfall melden",
            "Kundendaten-Anfrage bearbeiten"
          ]
        },
        {
          role: "Führungskräfte",
          icon: "👔",
          color: "purple",
          duration: "120 Min",
          topics: [
            "DSGVO-Compliance als Managementaufgabe",
            "Rechtliche Verantwortung und Haftung",
            "Datenschutz-Folgenabschätzung (DSFA)",
            "Vendor Management und Auftragsverarbeitung",
            "Budget und Ressourcen für Datenschutz",
            "Incident Response Leadership",
            "Kommunikation mit Aufsichtsbehörden",
            "Business Continuity bei Datenschutzvorfällen"
          ],
          practical: [
            "DSFA-Workshop für neues Projekt",
            "Krisenmanagement-Simulation",
            "Vendor Due Diligence Review",
            "Budget-Planung für DSGVO-Maßnahmen"
          ]
        },
        {
          role: "IT-Abteilung",
          icon: "💻",
          color: "green",
          duration: "180 Min",
          topics: [
            "Privacy by Design und by Default",
            "Technische und organisatorische Maßnahmen",
            "Verschlüsselung und Pseudonymisierung",
            "Logging und Monitoring für DSGVO",
            "Backup und Disaster Recovery",
            "Cloud Security und Drittlandtransfers",
            "API-Sicherheit und Datenübertragung",
            "Datenlöschung und Anonymisierung"
          ],
          practical: [
            "TOM-Implementierung reviewen",
            "Verschlüsselungsstandards testen",
            "Log-Analyse für Compliance",
            "Data Breach Detection üben"
          ]
        },
        {
          role: "Vertrieb & Marketing",
          icon: "📊",
          color: "orange",
          duration: "120 Min",
          topics: [
            "Rechtmäßige Datenerhebung im Sales",
            "Einwilligungsmanagement für Marketing",
            "Lead-Generierung DSGVO-konform",
            "E-Mail-Marketing und Newsletter",
            "Social Media und Datenschutz",
            "Kundensegmentierung und Profiling",
            "Cross-Border-Sales in EU/Drittländer",
            "Opt-out-Management und Beschwerden"
          ],
          practical: [
            "DSGVO-konforme Lead-Qualifizierung",
            "Cookie-Consent-Management",
            "Newsletter-Einwilligung einholen",
            "Kundenwiderspruch bearbeiten"
          ]
        }
      ].map((module) => `
                <div class="bg-${module.color}-500/10 rounded-xl p-6 border border-${module.color}-500/20">
                  <div class="flex items-start gap-4 mb-6">
                    <div class="text-3xl">${module.icon}</div>
                    <div>
                      <h4 class="text-${module.color}-300 font-bold text-xl">${module.role}</h4>
                      <div class="text-${module.color}-400 text-sm">Schulungsdauer: ${module.duration}</div>
                    </div>
                  </div>
                  
                  <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                    <div>
                      <h5 class="text-${module.color}-300 font-semibold mb-3">📚 Theoretische Inhalte:</h5>
                      <div class="space-y-2">
                        ${module.topics.map((topic) => `
                          <label class="flex items-start gap-3 p-2 bg-slate-800/40 rounded-lg cursor-pointer hover:bg-slate-700/40 transition-colors">
                            <input type="checkbox" class="mt-1 rounded border-slate-600 bg-slate-700 text-${module.color}-500 focus:ring-${module.color}-500">
                            <span class="text-slate-300 text-sm">${topic}</span>
                          </label>
                        `).join("")}
                      </div>
                    </div>
                    
                    <div>
                      <h5 class="text-${module.color}-300 font-semibold mb-3">🛠️ Praktische Übungen:</h5>
                      <div class="space-y-2">
                        ${module.practical.map((exercise) => `
                          <label class="flex items-start gap-3 p-2 bg-slate-800/40 rounded-lg cursor-pointer hover:bg-slate-700/40 transition-colors">
                            <input type="checkbox" class="mt-1 rounded border-slate-600 bg-slate-700 text-${module.color}-500 focus:ring-${module.color}-500">
                            <span class="text-slate-300 text-sm">${exercise}</span>
                          </label>
                        `).join("")}
                      </div>
                    </div>
                  </div>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="bg-gradient-to-br from-red-500/10 to-pink-500/10 border border-red-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Tag 26-28: Incident Response Testing</h3>
            
            <div class="space-y-6">
              <div class="bg-red-500/5 rounded-lg p-6 border-l-4 border-red-500">
                <h4 class="text-lg font-semibold text-red-300 mb-4">🚨 Data Breach Simulation</h4>
                <p class="text-slate-300 mb-4">
                  Testen Sie Ihre <strong>72-Stunden-Response-Fähigkeit</strong> mit realistischen 
                  Datenschutzverletzungs-Szenarien.
                </p>
                
                <div class="grid gap-6">
                  ${[
        {
          scenario: "Phishing-Angriff auf HR-System",
          description: "Ein Mitarbeiter klickt auf eine Phishing-E-Mail und gibt seine Anmeldedaten für das HR-System preis. Der Angreifer hat potentiell Zugriff auf alle Mitarbeiterdaten.",
          impact: "Hoch - Besondere Kategorien (Gesundheitsdaten)",
          timeline: "72h Meldepflicht an Aufsichtsbehörde",
          steps: [
            "Incident Detection (0-15 Min)",
            "Erstbewertung und Eskalation (15-60 Min)",
            "Forensische Analyse (1-6h)",
            "Schadensbewertung (6-12h)",
            "Behördenmeldung (binnen 72h)",
            "Betroffeneninformation (wenn erforderlich)",
            "Maßnahmen zur Schadensbegrenzung"
          ],
          testpoints: [
            "Erkennung durch Monitoring-System",
            "Alarmierung des Incident-Teams",
            "Korrekte Erstbewertung",
            "Timeline-Einhaltung",
            "Vollständigkeit der Dokumentation",
            "Kommunikation mit Stakeholdern"
          ]
        },
        {
          scenario: "Laptop-Diebstahl mit Kundendaten",
          description: "Einem Außendienstmitarbeiter wird der Laptop aus dem Auto gestohlen. Auf der Festplatte befinden sich unverschlüsselte Kundendaten von 500 Kunden.",
          impact: "Mittel - Standarddaten, aber große Anzahl",
          timeline: "72h Meldepflicht, Betroffeneninformation wahrscheinlich",
          steps: [
            "Meldung durch Mitarbeiter (0-2h)",
            "Polizeiliche Anzeige",
            "Technische Analyse der Daten",
            "Risikobewertung für Betroffene",
            "Behördenmeldung",
            "Individuelle Betroffeneninformation",
            "Präventive Maßnahmen umsetzen"
          ],
          testpoints: [
            "Schnelle Meldung durch MA",
            "Inventarisierung betroffener Daten",
            "Risikobewertung Betroffene",
            "Korrekte Behördenmeldung",
            "Angemessene Kommunikation",
            "Lessons Learned Dokumentation"
          ]
        }
      ].map((sim, index) => `
                    <div class="bg-slate-800/60 rounded-lg p-6 border border-slate-700/50">
                      <div class="flex items-start justify-between mb-4">
                        <h5 class="text-red-300 font-bold text-lg">Szenario ${index + 1}: ${sim.scenario}</h5>
                        <div class="text-right">
                          <div class="text-${sim.impact.includes("Hoch") ? "red" : "orange"}-400 text-xs font-bold px-2 py-1 bg-${sim.impact.includes("Hoch") ? "red" : "orange"}-500/20 rounded mb-1">
                            ${sim.impact}
                          </div>
                          <div class="text-slate-400 text-xs">${sim.timeline}</div>
                        </div>
                      </div>
                      
                      <p class="text-slate-300 mb-4">${sim.description}</p>
                      
                      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                        <div>
                          <h6 class="text-red-400 font-semibold mb-3">📋 Response-Schritte:</h6>
                          <div class="space-y-2">
                            ${sim.steps.map((step, stepIndex) => `
                              <label class="flex items-start gap-3 p-2 bg-slate-700/50 rounded-lg cursor-pointer hover:bg-slate-600/50 transition-colors">
                                <input type="checkbox" class="mt-1 rounded border-slate-600 bg-slate-700 text-red-500 focus:ring-red-500">
                                <span class="text-slate-300 text-sm">${stepIndex + 1}. ${step}</span>
                              </label>
                            `).join("")}
                          </div>
                        </div>
                        
                        <div>
                          <h6 class="text-pink-400 font-semibold mb-3">✅ Test-Checkpoints:</h6>
                          <div class="space-y-2">
                            ${sim.testpoints.map((point) => `
                              <label class="flex items-start gap-3 p-2 bg-slate-700/50 rounded-lg cursor-pointer hover:bg-slate-600/50 transition-colors">
                                <input type="checkbox" class="mt-1 rounded border-slate-600 bg-slate-700 text-pink-500 focus:ring-pink-500">
                                <span class="text-slate-300 text-sm">${point}</span>
                              </label>
                            `).join("")}
                          </div>
                        </div>
                      </div>
                    </div>
                  `).join("")}
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">Tag 29-30: Final Audit & Go-Live</h3>
            
            <div class="space-y-6">
              <div class="bg-green-500/5 rounded-lg p-6 border-l-4 border-green-500">
                <h4 class="text-lg font-semibold text-green-300 mb-4">🏁 30-Tage-Compliance-Check</h4>
                <p class="text-slate-300 mb-4">
                  Abschließende <strong>Qualitätssicherung</strong> aller implementierten DSGVO-Maßnahmen 
                  vor dem offiziellen Go-Live.
                </p>
                
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
                  <div>
                    <h5 class="text-green-300 font-semibold mb-3">📊 Compliance-Scorecard:</h5>
                    <div class="space-y-3">
                      ${[
        { area: "Rechtsgrundlagen definiert", weight: "20%", target: "100%", color: "green" },
        { area: "TOM implementiert", weight: "25%", target: "≥90%", color: "green" },
        { area: "Verarbeitungsverzeichnis", weight: "15%", target: "100%", color: "green" },
        { area: "Betroffenenrechte-Prozesse", weight: "20%", target: "100%", color: "green" },
        { area: "Mitarbeiterschulungen", weight: "10%", target: "100%", color: "green" },
        { area: "Incident Response bereit", weight: "10%", target: "100%", color: "green" }
      ].map((item) => `
                        <div class="flex items-center justify-between p-3 bg-slate-800/40 rounded-lg">
                          <div>
                            <div class="text-slate-300 text-sm font-medium">${item.area}</div>
                            <div class="text-slate-400 text-xs">Gewichtung: ${item.weight}</div>
                          </div>
                          <div class="text-right">
                            <div class="text-${item.color}-400 font-bold">${item.target}</div>
                            <label class="inline-flex items-center mt-1">
                              <input type="checkbox" class="rounded border-slate-600 bg-slate-700 text-${item.color}-500 focus:ring-${item.color}-500">
                              <span class="ml-2 text-xs text-slate-400">Erreicht</span>
                            </label>
                          </div>
                        </div>
                      `).join("")}
                    </div>
                  </div>
                  
                  <div>
                    <h5 class="text-emerald-300 font-semibold mb-3">🎯 Go-Live Criteria:</h5>
                    <div class="space-y-3">
                      ${[
        "Alle kritischen Systeme DSGVO-konform",
        "Verarbeitungsverzeichnis vollständig",
        "Incident Response Team trainiert",
        "Betroffenenrechte-Prozesse getestet",
        "Management Sign-off erhalten",
        "Aufsichtsbehörde informiert (optional)",
        "Mitarbeiter geschult und zertifiziert",
        "Kontinuierliche Überwachung etabliert"
      ].map((criteria) => `
                        <label class="flex items-start gap-3 p-2 bg-slate-800/40 rounded-lg cursor-pointer hover:bg-slate-700/40 transition-colors">
                          <input type="checkbox" class="mt-1 rounded border-slate-600 bg-slate-700 text-emerald-500 focus:ring-emerald-500">
                          <span class="text-slate-300 text-sm">${criteria}</span>
                        </label>
                      `).join("")}
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-emerald-500/5 rounded-lg p-6 border-l-4 border-emerald-500">
                <h4 class="text-lg font-semibold text-emerald-300 mb-4">🚀 Nach den 30 Tagen: Kontinuierliche Verbesserung</h4>
                <div class="grid md:grid-cols-3 gap-4">
                  ${[
        {
          timeframe: "Wöchentlich",
          tasks: [
            "Security Monitoring Review",
            "Neue Datenschutzvorfälle bewerten",
            "Betroffenenrechte-Anfragen bearbeiten",
            "Team-Updates zu DSGVO-Änderungen"
          ]
        },
        {
          timeframe: "Monatlich",
          tasks: [
            "Compliance-Dashboard aktualisieren",
            "Vendor-Assessments durchführen",
            "TOM-Wirksamkeit überprüfen",
            "Schulungsbedarfe identifizieren"
          ]
        },
        {
          timeframe: "Jährlich",
          tasks: [
            "Vollständiges DSGVO-Audit",
            "Verarbeitungsverzeichnis überarbeiten",
            "Incident Response Tests",
            "Management Review & Budgetplanung"
          ]
        }
      ].map((period) => `
                    <div class="bg-slate-800/60 rounded p-4">
                      <h5 class="text-emerald-400 font-semibold mb-3">${period.timeframe}</h5>
                      <ul class="text-slate-300 text-sm space-y-1">
                        ${period.tasks.map((task) => `<li>• ${task}</li>`).join("")}
                      </ul>
                    </div>
                  `).join("")}
                </div>
              </div>

              <div class="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 rounded-xl p-6">
                <h4 class="text-lg font-semibold text-blue-300 mb-4 flex items-center gap-3">
                  <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Herzlichen Glückwunsch! 🎉
                </h4>
                <p class="text-slate-300 text-lg">
                  Sie haben erfolgreich ein <strong>umfassendes DSGVO-Compliance-Programm</strong> in nur 30 Tagen implementiert. 
                  Ihr Unternehmen ist jetzt rechtssicher aufgestellt und bereit für die Zukunft.
                </p>
                <div class="mt-4 text-center">
                  <div class="text-green-400 font-bold text-2xl">DSGVO-Compliance: ✅ ERREICHT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
    }
  ];
  useEffect(() => {
    setIsReading(true);
    const timer = setTimeout(() => setIsReading(false), 3e3);
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      SEOHead,
      {
        title: "DSGVO in 30 Tagen – Express-Guide zur Compliance",
        description: "DSGVO-Compliance in 30 Tagen erreichen: Priorisierter Aktionsplan mit täglichen Aufgaben. ✓ Express-Guide ✓ Sofort umsetzbar ✓ Basis-Compliance. Jetzt starten!",
        canonical: "/wissen/leitfaden/dsgvo-30-tage",
        keywords: "dsgvo 30 tage, datenschutz express, compliance schnell, dsgvo sofort umsetzen, datenschutz aktionsplan"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900", style: {
      wordWrap: "break-word",
      overflowWrap: "break-word"
    }, children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx(
        motion.section,
        {
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8 },
          className: "relative py-20 px-4 sm:px-6 lg:px-8",
          children: /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-4xl relative z-10", children: /* @__PURE__ */ jsxs("div", { className: "text-center mb-12", children: [
            /* @__PURE__ */ jsxs(
              motion.div,
              {
                initial: { scale: 0 },
                animate: { scale: 1 },
                transition: { delay: 0.2, type: "spring", stiffness: 200 },
                className: "inline-flex items-center gap-3 px-6 py-3 bg-blue-500/10 backdrop-blur-sm rounded-full mb-6 border border-blue-500/20",
                children: [
                  /* @__PURE__ */ jsx(Calendar, { className: "h-5 w-5 text-blue-400" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-blue-300", children: "30-Tage Implementation" }),
                  /* @__PURE__ */ jsx(Rocket, { className: "h-5 w-5 text-indigo-400" })
                ]
              }
            ),
            /* @__PURE__ */ jsxs("h1", { className: "text-4xl md:text-6xl font-black tracking-tight mb-6", children: [
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "DSGVO in" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent", children: "30 Tagen" }),
              /* @__PURE__ */ jsx("br", {}),
              /* @__PURE__ */ jsx("span", { className: "text-white", children: "umsetzen" })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8", children: [
              /* @__PURE__ */ jsx("span", { className: "font-semibold text-blue-300", children: "Strukturierter Implementierungsplan" }),
              " mit Checklisten, Templates und Zeitplänen für vollständige DSGVO-Compliance."
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-8", children: /* @__PURE__ */ jsxs(Badge, { className: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30", children: [
              /* @__PURE__ */ jsx(Target, { className: "h-3 w-3 mr-1" }),
              "Fortgeschritten"
            ] }) })
          ] }) })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "sticky top-16 z-40 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700/50", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto max-w-4xl px-4 py-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mb-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-400", children: [
            "Woche ",
            currentChapterData.week,
            " - Kapitel ",
            currentChapter + 1,
            " von ",
            chapters.length
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-sm text-slate-400", children: [
            Math.round(readingProgress),
            "% abgeschlossen"
          ] })
        ] }),
        /* @__PURE__ */ jsx(Progress, { value: readingProgress, className: "h-2" })
      ] }) }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto max-w-7xl px-4 py-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-4 gap-6 lg:gap-8", children: [
        /* @__PURE__ */ jsx("div", { className: "lg:col-span-1", children: /* @__PURE__ */ jsx("div", { className: "lg:sticky lg:top-32", children: /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "30-Tage-Plan" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-2", children: chapters.map((chapter, index) => /* @__PURE__ */ jsx(
            motion.button,
            {
              whileHover: { x: 4 },
              onClick: () => setCurrentChapter(index),
              className: cn(
                "w-full text-left p-3 rounded-lg transition-all duration-200 border",
                currentChapter === index ? "bg-blue-500/20 border-blue-500/50 text-blue-300" : "border-slate-700/50 text-slate-400 hover:bg-slate-700/50 hover:text-slate-300"
              ),
              children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                /* @__PURE__ */ jsx("div", { className: cn(
                  "w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold",
                  completedChapters.includes(index) ? "bg-green-500 text-white" : currentChapter === index ? "bg-blue-500 text-white" : "bg-slate-600 text-slate-400"
                ), children: completedChapters.includes(index) ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-4 w-4" }) : `W${chapter.week}` }),
                /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "font-medium text-sm", children: chapter.title }) })
              ] })
            },
            chapter.id
          )) })
        ] }) }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-3", children: [
          /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50 mb-8 overflow-hidden", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4 lg:p-8", children: [
            /* @__PURE__ */ jsx("div", { className: "flex flex-col lg:flex-row lg:items-center justify-between mb-6 gap-4 lg:gap-0", children: /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-2", children: [
                /* @__PURE__ */ jsxs(Badge, { className: "bg-blue-500/20 text-blue-300 border-blue-500/30", children: [
                  "Woche ",
                  currentChapterData.week
                ] }),
                /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4 text-slate-400" }),
                /* @__PURE__ */ jsxs("span", { className: "text-sm text-slate-400", children: [
                  "Kapitel ",
                  currentChapter + 1
                ] })
              ] }),
              /* @__PURE__ */ jsx("h2", { className: "text-3xl font-bold text-white mb-2", children: currentChapterData.title }),
              /* @__PURE__ */ jsx("p", { className: "text-slate-400", children: currentChapterData.subtitle })
            ] }) }),
            /* @__PURE__ */ jsx(
              "div",
              {
                ref: contentRef,
                className: "prose prose-invert prose-slate max-w-none prose-lg overflow-hidden",
                style: {
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                  lineHeight: "1.8",
                  maxWidth: "100%",
                  minWidth: "0"
                },
                dangerouslySetInnerHTML: { __html: currentChapterData.content }
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row items-center justify-between mt-8 lg:mt-12 pt-6 lg:pt-8 border-t border-slate-700/50 gap-4 lg:gap-0", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  variant: "outline",
                  onClick: prevChapter,
                  disabled: currentChapter === 0,
                  className: "border-slate-600 text-slate-300 hover:bg-slate-700",
                  children: [
                    /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 h-4 w-4" }),
                    "Vorherige Woche"
                  ]
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 lg:gap-4 order-first lg:order-none", children: [
                /* @__PURE__ */ jsxs(
                  Button,
                  {
                    variant: "outline",
                    onClick: handleChapterComplete,
                    className: cn(
                      "border-slate-600",
                      completedChapters.includes(currentChapter) ? "bg-green-500/20 border-green-500 text-green-300" : "text-slate-300 hover:bg-slate-700"
                    ),
                    children: [
                      /* @__PURE__ */ jsx(CheckCircle2, { className: "mr-2 h-4 w-4" }),
                      completedChapters.includes(currentChapter) ? "Abgeschlossen" : "Woche abschließen"
                    ]
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "ghost",
                    onClick: () => setBookmarked(!bookmarked),
                    className: "text-slate-400 hover:text-yellow-400",
                    children: /* @__PURE__ */ jsx(Bookmark, { className: cn("h-4 w-4", bookmarked && "fill-current text-yellow-400") })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs(
                Button,
                {
                  onClick: nextChapter,
                  disabled: currentChapter === chapters.length - 1,
                  className: "bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600",
                  children: [
                    "Nächste Woche",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
                  ]
                }
              )
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(Card, { className: "bg-slate-800/80 backdrop-blur-sm border-slate-700/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
            /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-white mb-4", children: "Verwandte Leitfäden" }),
            /* @__PURE__ */ jsx("div", { className: "grid md:grid-cols-2 gap-4", children: [
              {
                title: "Website DSGVO-konform gestalten",
                desc: "Cookie-Banner, Privacy Policy & Consent Management",
                link: "/wissen/leitfaden/website-dsgvo",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Data Breach Notfallplan",
                desc: "72h-Response bei Datenschutzverletzungen",
                link: "/wissen/leitfaden/data-breach-notfall",
                color: "from-red-500 to-pink-500"
              }
            ].map((guide, index) => /* @__PURE__ */ jsxs(
              Link,
              {
                to: guide.link,
                className: "block p-4 bg-slate-700/50 rounded-lg border border-slate-600/50 hover:border-slate-500 transition-colors group",
                children: [
                  /* @__PURE__ */ jsx("div", { className: cn("w-full h-2 rounded-full bg-gradient-to-r mb-3", guide.color) }),
                  /* @__PURE__ */ jsx("h4", { className: "font-semibold text-white group-hover:text-blue-300 transition-colors", children: guide.title }),
                  /* @__PURE__ */ jsx("p", { className: "text-slate-400 text-sm", children: guide.desc })
                ]
              },
              index
            )) })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(Footer, {})
    ] })
  ] });
};
export {
  Dsgvo30TageGuide as default
};
