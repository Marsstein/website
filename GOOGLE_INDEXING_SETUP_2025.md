# Google Indexing API Setup 2025 - Aktualisierte Version

**Stand:** 18. November 2025
**URLs:** 196 (aus scripts/sitemap.js)
**Methode:** Google Apps Script (OAuth 2.0, kein Service Account Key nötig)

---

## 🚀 Quick Start (5 Minuten)

### 1. Apps Script erstellen

1. Öffne [script.google.com](https://script.google.com)
2. Klicke "Neues Projekt"
3. Benenne es: **"Marsstein Indexing API 2025"**

### 2. Code einfügen

1. Lösche den vorhandenen Code (`function myFunction() {}`)
2. Öffne die Datei: [scripts/google-apps-script-indexing-2025.js](scripts/google-apps-script-indexing-2025.js)
3. **Kopiere den GESAMTEN Inhalt** (Cmd+A, Cmd+C)
4. Füge ihn in Google Apps Script ein (Cmd+V)
5. Klicke "Speichern" (Disketten-Symbol oder Cmd+S)

### 3. Manifest (appsscript.json) einfügen

1. In Apps Script: Klicke links auf "Projekteinstellungen" (Zahnrad)
2. Aktiviere: **"appsscript.json-Manifestdatei im Editor anzeigen"**
3. Gehe zurück zum "Editor"
4. Klicke links auf `appsscript.json`
5. Lösche den vorhandenen Inhalt
6. Kopiere den Inhalt aus: [scripts/appsscript-manifest-2025.json](scripts/appsscript-manifest-2025.json)
7. Füge ihn ein und klicke "Speichern"

### 4. GCP Projekt verknüpfen

**WICHTIG:** Nutze ein **persönliches GCP Projekt** (ohne Organization Policy!)

1. Gehe zu [console.cloud.google.com](https://console.cloud.google.com)
2. **Erstelle ein neues Projekt:**
   - Name: z.B. "Marsstein Indexing"
   - **Organisation:** "Keine Organisation" auswählen (wichtig!)
3. Notiere dir die **Projektnummer** (steht im Dashboard)
4. Navigation → "APIs & Dienste" → "Bibliothek"
5. Suche: **"Web Search Indexing API"**
6. Klicke "Aktivieren"
7. Zurück zu Apps Script → Projekteinstellungen (Zahnrad)
8. Scrolle zu "Google Cloud Platform (GCP) Projekt"
9. Klicke "Projekt ändern"
10. Gib deine **GCP Projekt-Nummer** ein
11. Klicke "Projekt festlegen"

### 5. Erste Autorisierung

1. Wähle im Dropdown oben: **`setupScript`**
2. Klicke "Ausführen" (Play-Symbol)
3. **Google fragt nach Berechtigung:**
   - Klicke "Berechtigungen prüfen"
   - Wähle deinen Google Account (muss Owner in Search Console sein!)
   - Google warnt: "Diese App wurde nicht überprüft" → Klicke "Erweitert"
   - Klicke "Zu Marsstein Indexing API 2025 wechseln (unsicher)"
   - Klicke "Zulassen"
4. Warte 10 Sekunden
5. Öffne "Ausführungsprotokoll" (unten): Sollte "✅ OAuth token obtained successfully" zeigen

### 6. Search Console Berechtigung prüfen

**KRITISCH:** Dein Google Account muss **Owner** (Inhaber) in Search Console sein!

1. Gehe zu [search.google.com/search-console](https://search.google.com/search-console)
2. Wähle Property: **`marsstein.ai`**
3. Einstellungen → Nutzer und Berechtigungen
4. Prüfe: Ist dein Account als **"Inhaber"** aufgeführt?
   - ❌ "Nutzer mit vollständigem Zugriff" reicht NICHT
   - ✅ Muss "Inhaber" sein

---

## 🎯 Empfohlener Workflow

### Tag 1: Status prüfen + High-Priority submitten

#### Schritt 1: High-Priority Status checken (~3 Minuten)
```
Funktion: checkHighPriorityStatus()
```
- Prüft Status aller wichtigen URLs (Priorität >= 0.8)
- Zeigt dir welche noch nie submitted wurden
- **Kein Submit, nur Check** → völlig safe

**Was du siehst:**
```
✅ Submitted: 12
⚠️  Never submitted: 58
```

#### Schritt 2: High-Priority URLs submitten (~2 Minuten)
```
Funktion: submitHighPriority()
```
- Submitted alle High-Priority URLs (Priorität >= 0.8)
- ~70 URLs, sortiert nach Priorität
- Respektiert 200 URLs/Tag Limit

**Was du siehst:**
```
✅ Successfully submitted: 70
📊 Total today: 70/200
```

---

### Tag 2: Vollständigen Status-Check

#### Schritt 3: Alle URLs checken (~10 Minuten)
```
Funktion: checkAllIndexingStatus()
```
- Prüft Status ALLER 196 URLs
- Dauert ~10 Minuten (200ms pro URL)
- Zeigt dir die Top 20 fehlenden URLs

**Was du siehst:**
```
Total URLs: 196
✅ Submitted via Indexing API: 70
⚠️  Never submitted: 126
❌ Errors: 0
```

#### Schritt 4: Fehlende URLs submitten (~3 Minuten)
```
Funktion: submitMissingUrls()
```
- Prüft erst welche URLs noch nie submitted wurden
- Submitted dann NUR die fehlenden (sortiert nach Priorität)
- Intelligenter als `submitAll()` → kein Doppel-Submit

**Was du siehst:**
```
Found 126 URLs that were never submitted
📋 Processing 100 URLs (Quota: 130/200)
✅ Successfully submitted: 100
⏭️ Remaining URLs: 26
```

---

### Tag 3: Rest submitten

#### Schritt 5: Restliche URLs
```
Funktion: submitMissingUrls()
```
- Einfach nochmal ausführen
- Submitted die letzten 26 URLs

**Was du siehst:**
```
Found 26 URLs that were never submitted
📋 Processing 26 URLs (Quota: 200/200)
✅ Successfully submitted: 26
```

---

## 📊 Verfügbare Funktionen

### Check-Funktionen (Safe, nur Status-Abfrage)

#### `checkHighPriorityStatus()`
- Prüft Status der wichtigsten URLs (Priorität >= 0.8)
- ~70 URLs
- Dauer: ~3 Minuten
- **Empfohlen als erstes**

#### `checkAllIndexingStatus()`
- Prüft Status ALLER 196 URLs
- Dauer: ~10 Minuten
- Zeigt Top 20 fehlende URLs

#### `checkHomepage()`
- Prüft nur die Homepage
- Schneller Test ob alles funktioniert

### Submit-Funktionen

#### `submitHighPriority()`
- Submitted URLs mit Priorität >= 0.8
- ~70 URLs
- **Empfohlen für Tag 1**

#### `submitMissingUrls()` ⭐ **EMPFOHLEN**
- Prüft erst welche URLs fehlen
- Submitted dann nur die fehlenden
- Intelligenter als `submitAll()`

#### `submitAll()`
- Submitted ALLE 196 URLs (sortiert nach Priorität)
- Achtung: submitted auch bereits submittete URLs nochmal

### Reporting-Funktionen

#### `showStats()`
- Zeigt Statistiken (heute submitted, Quota, etc.)
- Schneller Überblick

#### `generateIndexReport()`
- Erstellt CSV-Report mit allen URLs
- Dauer: ~10 Minuten
- CSV zum Kopieren in Google Sheets

---

## ⚡ Intelligente Features

### Automatisches Rate Limiting
- Max. 200 URLs pro Tag
- Script speichert Status automatisch
- Fortsetzung am nächsten Tag möglich

### Prioritäts-basiertes Sorting
Alle Submit-Funktionen sortieren nach Priorität:
1. Priorität 1.0 (Homepage)
2. Priorität 0.9 (Hauptseiten)
3. Priorität 0.8 (Wichtige Seiten)
4. ...

### Smart Submission
`submitMissingUrls()` ist intelligent:
1. Prüft erst welche URLs noch nie submitted wurden
2. Submitted dann nur die fehlenden
3. Vermeidet Doppel-Submissions
4. Spart Quota

---

## 📈 Monitoring & Verifizierung

### 1. Apps Script Logs
- Nach jeder Ausführung: "Ausführungsprotokoll" (unten) öffnen
- Zeigt detaillierte Logs

### 2. Google Search Console
- [search.google.com/search-console](https://search.google.com/search-console)
- Sektion "Abdeckung" oder "Seiten"
- Nach 1-2 Tagen sollten indexierte Seiten steigen

### 3. Site-Befehl in Google
```
site:marsstein.ai
```
- Zeigt alle indexierten Seiten
- Vorher/Nachher Vergleich

---

## 🔧 Troubleshooting

### "Exception: Request failed... returned code 403"

**Problem:** Indexing API nicht aktiviert oder Apps Script nicht mit GCP verknüpft

**Lösung:**
1. Prüfe ob "Web Search Indexing API" in GCP aktiviert ist
2. Prüfe ob Apps Script mit dem richtigen GCP Projekt verknüpft ist
3. Prüfe OAuth Scopes in `appsscript.json`

### "Not authorized" oder "Permission denied"

**Problem:** Dein Google Account ist nicht Owner in Search Console

**Lösung:**
1. Gehe zu [search.google.com/search-console](https://search.google.com/search-console)
2. Wähle Property `marsstein.ai`
3. Einstellungen → Nutzer und Berechtigungen
4. Dein Account muss als **"Inhaber"** (nicht nur "Nutzer") aufgeführt sein

### "Quota exceeded"

**Problem:** Tageslimit (200 URLs) erreicht

**Lösung:**
- Warte bis morgen
- Status bleibt gespeichert
- Einfach Funktion nochmal ausführen

### Logs zeigen nichts

**Lösung:**
1. Warte 10-30 Sekunden nach Ausführung
2. Klicke "Ausführungsprotokoll" (unten)
3. Oder: View → "Ausführungen" → Klicke auf letzte Ausführung

---

## 🎯 Best Practices

### ✅ DO's

1. **Start mit Status-Check:** Erst `checkHighPriorityStatus()` ausführen
2. **Intelligente Submission:** Nutze `submitMissingUrls()` statt `submitAll()`
3. **Monitoring:** Nach 2-3 Tagen Search Console checken
4. **Regelmäßig:** Wöchentlich `checkHighPriorityStatus()` ausführen
5. **Bei neuen Seiten:** Sofort nach Deployment submitten

### ❌ DON'Ts

1. **Nicht übertreiben:** Nicht täglich alle URLs re-submitten
2. **Kein Spam:** Nur bei echten Änderungen re-submitten
3. **Geduld:** Indexierung dauert trotzdem Stunden/Tage
4. **Nicht überschätzen:** Indexing API ≠ besseres Ranking

---

## 📋 URLs-Übersicht

**Total:** 196 URLs

**Prioritäten-Verteilung:**
- **1.0:** 1 URL (Homepage)
- **0.9:** 6 URLs (preise, features, dsgvo, eu-ai-act, dsgvo-audit)
- **0.8:** ~60 URLs (Hauptseiten, Städte-DSB, Compliance)
- **0.7:** ~75 URLs (Guides, Wissen, Branchen)
- **0.6:** ~48 URLs (Detail-Guides)
- **0.5:** ~6 URLs (Demo-Seiten, Tools)

**High-Priority (>= 0.8):** ~70 URLs
**Empfohlen für Tag 1 Submit**

---

## 🔐 Sicherheit

✅ **Kein API Key im Code** → OAuth statt Keys
✅ **Google-hosted** → Läuft in Google's Infrastruktur
✅ **Scoped Permissions** → Nur Indexing API Zugriff
✅ **Audit Logs** → Alle Ausführungen sind geloggt
✅ **Persönliches GCP Projekt** → Keine Organization Policy Einschränkungen

---

## 📞 Support

Bei Problemen:
1. Prüfe [Troubleshooting](#troubleshooting)
2. Logs checken: "Ausführungsprotokoll"
3. Execution Log: View → "Ausführungen"

---

## 🔄 Updates

**Wenn neue URLs hinzukommen:**

1. URLs in [scripts/sitemap.js](scripts/sitemap.js) hinzufügen
2. Dieses Apps Script aktualisieren (routes Array)
3. `submitMissingUrls()` ausführen → submitted automatisch nur die neuen

**Script-Version:** 2025-11-18
**Letzte Synchronisation:** sitemap.js mit 196 URLs
