# 🚀 Google Indexing Quick Start

**3-Tages-Plan für 196 URLs**

---

## 📦 Was du brauchst

1. ✅ Google Account mit **Owner**-Rechten in Search Console für `marsstein.ai`
2. ✅ 15 Minuten Zeit für Setup
3. ✅ Persönliches GCP Projekt (ohne Organization Policy)

---

## 🎯 Tag 1: Setup + High-Priority (30 Minuten)

### 1. Apps Script erstellen (10 Min)

```
1. Öffne: https://script.google.com
2. "Neues Projekt" → Name: "Marsstein Indexing API 2025"
3. Code aus scripts/google-apps-script-indexing-2025.js kopieren + einfügen
4. appsscript.json aus scripts/appsscript-manifest-2025.json kopieren + einfügen
5. Mit persönlichem GCP Projekt verknüpfen (Projektnummer)
6. "Web Search Indexing API" in GCP aktivieren
```

### 2. Autorisierung (5 Min)

```
1. Funktion wählen: setupScript
2. "Ausführen" → Berechtigung erteilen
3. Log prüfen: "✅ OAuth token obtained successfully"
```

### 3. Status prüfen (3 Min)

```
Funktion: checkHighPriorityStatus()

Zeigt z.B.:
✅ Submitted: 5
⚠️  Never submitted: 65
```

### 4. High-Priority submitten (2 Min)

```
Funktion: submitHighPriority()

Result:
✅ Successfully submitted: 70
📊 Total today: 70/200
```

**✅ Tag 1 fertig!** ~70 wichtigste URLs sind submitted

---

## 🎯 Tag 2: Vollständiger Check + Submission (20 Minuten)

### 5. Alle URLs checken (10 Min)

```
Funktion: checkAllIndexingStatus()

Result:
Total URLs: 196
✅ Submitted: 70
⚠️  Never submitted: 126
```

### 6. Fehlende URLs submitten (3 Min)

```
Funktion: submitMissingUrls()

Result:
Found 126 URLs that were never submitted
✅ Successfully submitted: 100
⏭️ Remaining URLs: 26
📊 Total today: 100/200
```

**✅ Tag 2 fertig!** 170 von 196 URLs sind submitted

---

## 🎯 Tag 3: Rest submitten (5 Minuten)

### 7. Letzte URLs submitten

```
Funktion: submitMissingUrls()

Result:
Found 26 URLs that were never submitted
✅ Successfully submitted: 26
📊 Total today: 26/200
```

**🎉 FERTIG!** Alle 196 URLs sind submitted

---

## 📊 Verifizierung (Tag 4-5)

### Search Console checken

```
1. Öffne: https://search.google.com/search-console
2. Property: marsstein.ai
3. Sektion: "Abdeckung" oder "Seiten"
4. Indexierte Seiten sollten steigen
```

### Google Site-Check

```
Google Suche: site:marsstein.ai
Zeigt alle indexierten Seiten
```

---

## 🔥 Schnell-Referenz: Funktionen

| Funktion | Was | Dauer | Wann |
|----------|-----|-------|------|
| `setupScript()` | Autorisierung | 1 Min | Einmalig |
| `checkHighPriorityStatus()` | Status Top-URLs | 3 Min | Tag 1 |
| `submitHighPriority()` | Submit Top-URLs | 2 Min | Tag 1 |
| `checkAllIndexingStatus()` | Status alle URLs | 10 Min | Tag 2 |
| `submitMissingUrls()` | Submit fehlende | 3 Min | Tag 2+3 |
| `showStats()` | Statistiken | 1 Sek | Jederzeit |

---

## ⚠️ Wichtige Limits

- **200 URLs pro Tag** → Automatisch getracked
- **100 URLs pro Batch** → Automatisch gesplittet
- **200ms zwischen Requests** → Eingebaut

---

## 🆘 Schnelle Hilfe

**403 Error?**
→ Indexing API in GCP aktivieren

**Not authorized?**
→ Muss Owner (nicht nur User) in Search Console sein

**Quota exceeded?**
→ Bis morgen warten, Fortschritt ist gespeichert

**Keine Logs?**
→ "Ausführungsprotokoll" (unten) öffnen

---

## 📁 Dateien

- **Apps Script Code:** [scripts/google-apps-script-indexing-2025.js](scripts/google-apps-script-indexing-2025.js)
- **Manifest:** [scripts/appsscript-manifest-2025.json](scripts/appsscript-manifest-2025.json)
- **Vollständige Anleitung:** [GOOGLE_INDEXING_SETUP_2025.md](GOOGLE_INDEXING_SETUP_2025.md)

---

## ✨ Pro-Tipps

1. **Immer mit Check starten** → `checkHighPriorityStatus()` vor Submit
2. **submitMissingUrls() bevorzugen** → Intelligenter als submitAll()
3. **Wöchentlich checken** → High-Priority URLs re-submitten bei Änderungen
4. **Geduld haben** → Indexierung dauert 1-7 Tage
5. **Monitoring** → Nach 3 Tagen Search Console checken

---

**Los geht's! 🚀**

Öffne [script.google.com](https://script.google.com) und starte mit dem Setup!
