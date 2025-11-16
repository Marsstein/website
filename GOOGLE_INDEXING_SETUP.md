# Google Indexing API Setup Guide

Dieses Guide erklärt, wie du die Google Indexing API für marsstein.ai einrichtest und verwendest.

## ⚠️ Wichtige Hinweise

- **Offiziell nur für Job Postings & Livestream Videos**: Google erlaubt die Indexing API offiziell nur für JobPosting und BroadcastEvent (Livestream) strukturierte Daten
- **Inoffizieller Einsatz**: In der Praxis funktioniert sie auch für normale Webseiten, verstößt aber gegen Googles Richtlinien
- **Rate Limits**: 200 URLs pro Tag, 200 Anfragen pro Minute
- **Kein Ranking-Boost**: Die API beschleunigt nur die Indexierung, nicht das Ranking

## Schritt 1: Google Cloud Console Setup

### 1.1 Projekt erstellen
1. Gehe zu [console.cloud.google.com](https://console.cloud.google.com)
2. Klicke oben links auf "Projekt auswählen" → "Neues Projekt"
3. Name: `marsstein-indexing` (oder beliebig)
4. Klicke "Erstellen"

### 1.2 Indexing API aktivieren
1. Im Google Cloud Projekt: Navigation → "APIs & Dienste" → "Bibliothek"
2. Suche nach "Indexing API"
3. Klicke auf "Web Search Indexing API"
4. Klicke "Aktivieren"

### 1.3 Service Account erstellen
1. Navigation → "APIs & Dienste" → "Anmeldedaten"
2. Klicke "Anmeldedaten erstellen" → "Dienstkonto"
3. Details:
   - **Name**: `marsstein-indexing-bot`
   - **Beschreibung**: `Service account for Google Indexing API`
4. Klicke "Erstellen und fortfahren"
5. **Rolle**: Wähle "Projekt" → "Inhaber" (Owner)
6. Klicke "Fertig"

### 1.4 JSON-Key herunterladen
1. Klicke auf das neu erstellte Dienstkonto
2. Tab "Schlüssel" → "Schlüssel hinzufügen" → "Neuen Schlüssel erstellen"
3. Format: **JSON**
4. Klicke "Erstellen"
5. **WICHTIG**: Datei wird heruntergeladen als `[projekt-id]-[hash].json`

## Schritt 2: Google Search Console Integration

### 2.1 Service Account Email kopieren
1. Im Google Cloud Projekt → "APIs & Dienste" → "Anmeldedaten"
2. Klicke auf dein Dienstkonto
3. Kopiere die **E-Mail-Adresse** (Format: `marsstein-indexing-bot@[projekt-id].iam.gserviceaccount.com`)

### 2.2 Als Owner in Search Console hinzufügen
1. Gehe zu [search.google.com/search-console](https://search.google.com/search-console)
2. Wähle deine Property: `marsstein.ai`
3. Linkes Menü → "Einstellungen" → "Nutzer und Berechtigungen"
4. Klicke "Nutzer hinzufügen"
5. **E-Mail-Adresse**: Service Account Email einfügen
6. **Berechtigung**: **Inhaber**
7. Klicke "Hinzufügen"

## Schritt 3: Lokale Installation

### 3.1 JSON-Key platzieren
1. Benenne die heruntergeladene JSON-Datei um zu: `google-service-account.json`
2. Platziere sie im **Root-Verzeichnis** des Projekts: `/Users/jonaskruger/Mars25/Website/google-service-account.json`
3. **Wichtig**: Diese Datei ist bereits in `.gitignore` und wird NICHT committed

### 3.2 Environment Variable prüfen
Die Variable ist bereits konfiguriert in `.env.development` und `.env.production`:

```bash
GOOGLE_SERVICE_ACCOUNT_KEY_PATH="./google-service-account.json"
```

### 3.3 Dependencies installieren
```bash
npm install
```

Das Package `googleapis` wurde bereits zu `package.json` hinzugefügt.

## Verwendung

### Verfügbare Kommandos

#### 1. Alle URLs indexieren (sortiert nach Priorität)
```bash
npm run indexing:all
```
- Verarbeitet ALLE URLs aus der Sitemap
- Sortiert nach Priorität (höchste zuerst)
- Respektiert 200 URLs/Tag Limit
- Automatisches Rate Limiting

#### 2. Nur High-Priority URLs (>= 0.8)
```bash
npm run indexing:high-priority
```
- Nur URLs mit Priorität >= 0.8
- ~80 URLs (Homepage, Hauptseiten, wichtige Guides)
- Ideal für erste Indexierung

#### 3. Status einer URL prüfen
```bash
npm run indexing:check "https://marsstein.ai/dsgvo"
```
- Zeigt den aktuellen Indexing-Status einer URL
- Gibt Metadaten zurück (letzter Submit, Status, etc.)

#### 4. URL aus Index löschen
```bash
npm run indexing:delete "https://marsstein.ai/alte-seite"
```
- Entfernt eine URL aus dem Google Index
- Nur für gelöschte/nicht mehr verfügbare Seiten

#### 5. Statistiken anzeigen
```bash
npm run indexing:stats
```
- Zeigt heutige Quota-Nutzung
- Anzahl erfolgreich submitteter URLs
- Fehlgeschlagene URLs

## Workflow-Empfehlung

### Erste Indexierung
```bash
# Tag 1: High-Priority URLs
npm run indexing:high-priority

# Tag 2: Restliche URLs (automatisch fortgesetzt)
npm run indexing:all

# Tag 3+: Falls mehr als 200 URLs
npm run indexing:all
```

### Bei neuen Seiten
```bash
# Nach Deployment neuer Seiten
npm run indexing:all
```

### Regelmäßige Updates
```bash
# Wöchentlich: High-Priority Pages aktualisieren
npm run indexing:high-priority
```

## Technische Details

### Rate Limiting
- **Pro Tag**: 200 URLs
- **Pro Minute**: 200 Requests
- **Batch Size**: 100 URLs pro Durchlauf
- Script speichert Status in `scripts/.indexing-status.json`

### Status-Tracking
Das Script trackt automatisch:
- Datum des letzten Runs
- Anzahl heute submitteter URLs
- Erfolgreich submittete URLs (lifetime)
- Fehlgeschlagene URLs

### Fehlerbehandlung
- Automatische Retry-Logik (eingebaut in googleapis)
- Detailliertes Error-Logging
- Fortsetzung bei Quota-Erreichen am nächsten Tag

## Monitoring & Verifizierung

### 1. Google Search Console
- Performance → Abdeckung
- Nach 1-2 Tagen sollten indexierte Seiten steigen

### 2. Site-Befehl in Google
```
site:marsstein.ai
```
- Zeigt alle indexierten Seiten
- Vorher/Nachher Vergleich

### 3. Script-Statistiken
```bash
npm run indexing:stats
```

## Troubleshooting

### "GOOGLE_SERVICE_ACCOUNT_KEY_PATH environment variable is not set"
- Prüfe, ob `google-service-account.json` im Root liegt
- Prüfe `.env.development` oder `.env.production`

### "Permission denied" oder 403 Fehler
- Service Account Email muss als Owner in Search Console sein
- Warte 5-10 Minuten nach Hinzufügen in Search Console

### "Quota exceeded"
- Maximales Tageslimit (200 URLs) erreicht
- Warte bis morgen, Script speichert Fortschritt

### URLs werden nicht indexiert
- Prüfe mit `npm run indexing:check <url>`
- Indexing API != Ranking
- Kann 1-7 Tage dauern bis sichtbar in Search Console

## Best Practices

1. **Nicht übertreiben**: Nur bei wichtigen Updates re-submiten
2. **Priorität nutzen**: High-Priority zuerst
3. **Monitoring**: Regelmäßig Stats checken
4. **Geduld**: Indexierung dauert trotzdem Stunden/Tage
5. **Sitemap beibehalten**: Indexing API ergänzt, ersetzt nicht die Sitemap

## Sicherheit

- ✅ `google-service-account.json` ist in `.gitignore`
- ✅ Service Account hat nur Indexing-Rechte (kein Zugriff auf andere Google Services)
- ✅ JSON-Key niemals committen oder teilen
- ✅ Bei Leak: Key sofort in Google Cloud Console widerrufen

## Weitere Ressourcen

- [Google Indexing API Docs](https://developers.google.com/search/apis/indexing-api/v3/quickstart)
- [googleapis Node.js Client](https://github.com/googleapis/google-api-nodejs-client)
- [Google Search Console](https://search.google.com/search-console)

## Support

Bei Problemen:
1. Prüfe [Troubleshooting](#troubleshooting)
2. Check Google Cloud Console Logs
3. Siehe `scripts/.indexing-status.json` für Details
