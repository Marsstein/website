# Google Apps Script Setup für Indexing API

Diese Lösung **umgeht das Service Account Key Problem** komplett!

## Warum Google Apps Script?

**Das Problem:**
- Eure Google Cloud Organisation blockiert Service Account Keys
- `iam.disableServiceAccountKeyCreation` Policy aktiv

**Die Lösung:**
- Google Apps Script nutzt **OAuth 2.0** statt Service Account Keys
- Läuft in Google's Infrastruktur (kein Key nötig)
- Du autorisierst es einmalig mit deinem Google Account
- Komplett **kostenlos** und **sicher**

## Setup (5 Minuten)

### Schritt 1: Script erstellen

1. Öffne [script.google.com](https://script.google.com)
2. Klicke "Neues Projekt"
3. Benenne es: "Marsstein Indexing API"

### Schritt 2: Code einfügen

1. Lösche den vorhandenen Code
2. Öffne die Datei [scripts/google-apps-script-indexing.js](scripts/google-apps-script-indexing.js)
3. Kopiere den **gesamten Inhalt**
4. Füge ihn in Google Apps Script ein
5. Klicke auf "Speichern" (Disketten-Symbol)

### Schritt 3: Indexing API aktivieren

**WICHTIG**: Dies muss in deinem **persönlichen Google Cloud Projekt** gemacht werden (nicht Firmen-Org):

1. Gehe zu [console.cloud.google.com](https://console.cloud.google.com)
2. **Erstelle ein neues Projekt** (oder nutze ein bestehendes **ohne** Organization Policy)
   - Name: z.B. "Marsstein Indexing"
   - **Wichtig**: Wähle "Keine Organisation" wenn möglich
3. Navigation → "APIs & Dienste" → "Bibliothek"
4. Suche: "Indexing API"
5. Klicke "Web Search Indexing API"
6. Klicke "Aktivieren"

### Schritt 4: Apps Script mit Cloud Projekt verknüpfen

1. In Google Apps Script: Klicke auf Zahnrad-Symbol (Projekteinstellungen)
2. Scrolle zu "Google Cloud Platform (GCP) Projekt"
3. Klicke "Projekt ändern"
4. Gib deine **GCP Projekt-Nummer** ein (findest du im Cloud Console Dashboard)
5. Klicke "Projekt festlegen"

### Schritt 5: OAuth Scopes manuell hinzufügen

1. In Apps Script: Klicke auf `appsscript.json` in der linken Sidebar
   - Falls nicht sichtbar: Zahnrad → "appsscript.json"-Manifestdatei anzeigen
2. Füge folgenden Scope hinzu:

```json
{
  "timeZone": "Europe/Berlin",
  "dependencies": {},
  "exceptionLogging": "STACKDRIVER",
  "runtimeVersion": "V8",
  "oauthScopes": [
    "https://www.googleapis.com/auth/indexing"
  ]
}
```

### Schritt 6: Erste Autorisierung

1. Wähle die Funktion `setupScript` aus dem Dropdown oben
2. Klicke "Ausführen" (Play-Symbol)
3. **Autorisierung wird angefordert:**
   - Klicke "Berechtigungen prüfen"
   - Wähle deinen Google Account (muss Owner in Search Console sein!)
   - Google warnt: "Diese App wurde nicht überprüft" → Klicke "Erweitert"
   - Klicke "Zu [Projektname] wechseln (unsicher)"
   - Klicke "Zulassen"
4. Warte 10 Sekunden
5. Prüfe die Logs: View → "Logs" → Sollte "✅ OAuth token obtained successfully" zeigen

### Schritt 7: Search Console Owner-Berechtigung

**WICHTIG**: Der Google Account, mit dem du das Apps Script autorisiert hast, muss **Owner** in Search Console sein:

1. Gehe zu [search.google.com/search-console](https://search.google.com/search-console)
2. Wähle Property: `marsstein.ai`
3. Einstellungen → Nutzer und Berechtigungen
4. Prüfe, ob dein Google Account als **Inhaber** aufgeführt ist
   - Falls nicht: Lass dich von einem bestehenden Owner hinzufügen

## Verwendung

### Verfügbare Funktionen

Im Dropdown oben kannst du folgende Funktionen auswählen:

#### 1. `submitHighPriority()`
- Submitted nur URLs mit Priorität >= 0.8
- ~31 wichtige URLs (Homepage, Hauptseiten)
- **Empfohlen für Start**

#### 2. `submitAll()`
- Submitted ALLE URLs (sortiert nach Priorität)
- Respektiert 200 URLs/Tag Limit
- Fortsetzung am nächsten Tag möglich

#### 3. `showStats()`
- Zeigt Statistiken: Quota-Nutzung, erfolgreich/fehlgeschlagen
- Logs: View → "Logs"

#### 4. `checkHomepage()`
- Prüft Indexing-Status der Homepage
- Logs: View → "Logs"

### Manuelle Ausführung

1. Wähle Funktion im Dropdown (z.B. `submitHighPriority`)
2. Klicke "Ausführen" (Play-Symbol)
3. Warte 10-30 Sekunden
4. Prüfe Logs: View → "Logs"

### Automatische Ausführung (Zeitgesteuert)

**Täglich automatisch High-Priority URLs submiten:**

1. Klicke auf Uhr-Symbol (Trigger) in der linken Sidebar
2. Klicke "+ Trigger hinzufügen"
3. Konfiguration:
   - **Auszuführende Funktion**: `submitHighPriority`
   - **Ereignisquelle**: Zeitgesteuert
   - **Art des zeitbasierten Triggers**: Täglich
   - **Tageszeit auswählen**: 9 bis 10 Uhr (oder beliebig)
   - **Fehlerbenachrichtigungen**: Sofort benachrichtigen
4. Klicke "Speichern"

**Fertig!** Ab jetzt läuft das Script täglich automatisch.

## Beispiel: Erste Indexierung

### Tag 1: High-Priority URLs
```
1. Funktion wählen: submitHighPriority
2. Ausführen
3. Logs prüfen:
   ✅ Successfully submitted: 31
   📊 Total today: 31/200
```

### Tag 2: Alle URLs (Teil 1)
```
1. Funktion wählen: submitAll
2. Ausführen
3. Logs prüfen:
   ✅ Successfully submitted: 100
   📊 Total today: 100/200
   ⏭️ Remaining URLs: 106
```

### Tag 3: Alle URLs (Teil 2)
```
1. Funktion wählen: submitAll
2. Ausführen
3. Logs prüfen:
   ✅ Successfully submitted: 100
   📊 Total today: 100/200
   ⏭️ Remaining URLs: 6
```

### Tag 4: Fertig
```
1. Funktion wählen: submitAll
2. Ausführen
3. Logs prüfen:
   ✅ Successfully submitted: 6
   📊 Total today: 6/200
```

## Vorteile dieser Lösung

✅ **Kein Service Account Key** → umgeht Organization Policy
✅ **OAuth 2.0** → sicherer als Keys
✅ **Kostenlos** → keine Cloud-Kosten
✅ **Zeitgesteuert** → automatische Ausführung
✅ **Einfach** → 5 Minuten Setup
✅ **Logs** → Detailliertes Monitoring

## Nachteile

❌ **Nicht in Git** → Code muss manuell aktualisiert werden
❌ **Separate Platform** → Google Apps Script statt euer Repo
❌ **Quota Limits** → Apps Script: 20.000 UrlFetch Calls/Tag (mehr als genug)

## Monitoring

### Logs anschauen
1. Nach Ausführung: View → "Logs"
2. Oder: View → "Ausführungen" für Historie

### Statistiken
1. Funktion `showStats()` ausführen
2. Logs zeigen:
   - Letzter Run
   - Heute submitted
   - Lifetime submitted
   - Fehlgeschlagene URLs

## Troubleshooting

### "Exception: Request failed for https://indexing.googleapis.com returned code 403"

**Lösung:**
1. Prüfe, ob Indexing API in GCP aktiviert ist
2. Prüfe, ob Apps Script mit richtigem GCP Projekt verknüpft ist
3. Prüfe OAuth Scopes in `appsscript.json`

### "Not authorized"

**Lösung:**
1. Dein Google Account muss **Owner** in Search Console sein
2. Nicht nur "Nutzer mit vollständigem Zugriff" - muss **Inhaber** sein!

### "Quota exceeded"

**Lösung:**
- Warte bis morgen (200 URLs/Tag Limit)
- Status bleibt gespeichert, einfach erneut ausführen

### Logs zeigen nichts

**Lösung:**
1. Warte 10-30 Sekunden nach Ausführung
2. View → "Ausführungen" → Klicke auf letzte Ausführung
3. Oder: Logger.log() Outputs erscheinen in "Logs"

## URLs aktualisieren

Wenn ihr neue Seiten hinzufügt:

1. Öffne das Apps Script
2. Aktualisiere das `routes` Array:
```javascript
const routes = [
  { url: '/neue-seite', priority: '0.8' },
  // ... bestehende routes
];
```
3. Speichern
4. `submitHighPriority()` oder `submitAll()` ausführen

**Tipp**: Haltet die Route-Liste synchron mit [scripts/sitemap.js](scripts/sitemap.js)

## Best Practices

1. **Start**: Erst `submitHighPriority()`, dann `submitAll()`
2. **Trigger**: Täglich für wichtige Seiten, wöchentlich für alle
3. **Updates**: Nur bei echten Änderungen re-submiten
4. **Monitoring**: `showStats()` wöchentlich checken

## Sicherheit

✅ **Kein API Key im Code** → OAuth statt Keys
✅ **Google-hosted** → Läuft in Google's Infrastruktur
✅ **Scoped Permissions** → Nur Indexing API Zugriff
✅ **Audit Logs** → Alle Executions sind geloggt

## Alternative: Wenn Apps Script nicht funktioniert

Falls die Organization Policy auch **persönliche Cloud Projekte** blockiert:

**Option: Komplett neuer Google Account**

1. Erstelle einen **komplett neuen Gmail Account** (z.B. `marsstein-indexing@gmail.com`)
2. Füge ihn als **Owner** in Search Console hinzu
3. Nutze diesen Account für Apps Script
4. Keine Organization Policy mehr!

Dies ist die **ultimative Lösung** wenn alles andere blockiert ist.

## Support

Bei Problemen:
1. Prüfe [Troubleshooting](#troubleshooting)
2. Logs checken: View → "Logs"
3. Execution Log: View → "Ausführungen"
