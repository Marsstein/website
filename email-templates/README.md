# Loops.so Email Templates

Diese Dokumentation beschreibt alle E-Mail-Templates für das Marsstein Kontaktformular.

## 📋 Übersicht

Das System verwendet **5 Email Templates**:
- 2 interne Benachrichtigungen (an Marsstein Team)
- 2 Kundenbestätigungen (an Form-Absender)
- 1 Newsletter-Bestätigung (an Newsletter-Abonnenten)

## 🔑 Template IDs

### Intern (an info@marsstein.ai)
| Template | ID | Subject |
|----------|----|---------|
| **Internal Contact Notification** | `cmhnd1lr2htdh0w0i31yq80yh` | 🔔 Neue Kontaktanfrage von {firstName} ({company}) |
| **Internal Demo Notification** | `cmhndmcvdi5gp2f0i0cns6vag` | 🎯 DEMO REQUEST: {firstName} von {company} |

### Kunde (an Form-Absender)
| Template | ID | Subject |
|----------|----|---------|
| **Customer Contact Confirmation** | `cmhndojpfik7h340itbqwhrbl` | ✅ Danke für Ihre Anfrage, {firstName}! |
| **Customer Demo Confirmation** | `cmhndrbzagoww1q0iwkuk0lnw` | 🎯 {firstName}, Ihre Demo wartet auf Sie! |

### Newsletter
| Template | ID | Subject |
|----------|----|---------| | **Newsletter Confirmation** | `cmhnh1zeujtoo0z0i7q52wcih` | ✅ Willkommen beim Marsstein Compliance Newsletter! |

## 📨 Template Dateien

### 1. internal-contact-notification.mjml
**Zweck:** Interne Benachrichtigung über neue Kontaktanfrage
**Empfänger:** info@marsstein.ai
**Design:** Rote Akzentfarbe (#FF6B35), "NEUE ANFRAGE" Badge
**Inhalt:**
- Kontaktdaten in Box (Name, Email, Telefon, Firma, Thema)
- Nachricht prominent dargestellt
- Newsletter Opt-in Status
- Nächste Schritte Checklist
- "Direkt antworten" Button

### 2. internal-demo-notification.mjml
**Zweck:** Interne Benachrichtigung über Demo-Anfrage (hohe Priorität)
**Empfänger:** info@marsstein.ai
**Design:** Grüne Akzentfarbe (#10B981), "DEMO REQUEST - HOHE PRIORITÄT" Badge
**Inhalt:**
- Kontaktdaten in Box
- Nachricht
- Newsletter Opt-in Status
- Wichtig-Hinweis: Antwort innerhalb 4h während Geschäftszeiten
- Detaillierte Action Items für Demo-Vorbereitung
- "Direkt antworten" Button

### 3. customer-contact-confirmation.mjml
**Zweck:** Bestätigung der Kontaktanfrage für Kunden
**Empfänger:** Form-Absender
**Design:** Orange Akzentfarbe (#FF6B35), freundlicher Ton
**Inhalt:**
- Personalisierte Begrüßung
- Zusammenfassung der eingereichten Daten
- "Was passiert als Nächstes?" Timeline (24h Response)
- Calendly CTA für direkte Terminbuchung
- Marsstein Benefits (95% Zeitersparnis, EU-Datenschutz, etc.)
- Links zu nützlichen Ressourcen (DSGVO-Guide, ISO 27001, EU AI Act)

### 4. customer-demo-confirmation.mjml
**Zweck:** Bestätigung der Demo-Anfrage für Kunden
**Empfänger:** Form-Absender
**Design:** Grüne Akzentfarbe (#10B981), Action-orientiert
**Inhalt:**
- Personalisierte Begrüßung
- **Prominenter Calendly CTA** ganz oben ("Jetzt Demo-Termin buchen")
- Zusammenfassung der Demo-Anfrage
- "Was Sie in der Demo erwartet" (5 Punkte)
- Platform-Highlights (6 Key Features)
- Vorbereitungstipps für optimale Demo
- Alternative: Manuelle Terminvereinbarung (4h Response)
- Links zu Ressourcen zum Vorab-Informieren

### 5. newsletter-confirmation.mjml
**Zweck:** Bestätigung der Newsletter-Anmeldung
**Empfänger:** Newsletter-Abonnent
**Design:** Grüne Akzentfarbe (#10B981), freundlich und informativ
**Inhalt:**
- Erfolgsbestätigung mit Checkmark
- Liste der Newsletter-Benefits (wöchentliche Insights, Sofort-Alerts, Experten-Guides, Templates)
- Top-Ressourcen zum Starten (DSGVO 30-Tage Guide, EU AI Act, Assessment Center)
- Calendly CTA für persönliche Beratung
- Newsletter-Frequenz Info (1x pro Woche montags)
- DSGVO-Hinweis und Abmelde-Link

## 🔧 Data Variables

Alle Templates verwenden folgende Data Variables:

| Variable | Typ | Pflicht | Beschreibung |
|----------|-----|---------|--------------|
| `firstName` | string | ✅ | Vorname |
| `email` | string | ✅ | E-Mail-Adresse |
| `company` | string | ✅ | Firma/Unternehmen |
| `phone` | string | ❌ | Telefonnummer (optional, fallback: "Not provided") |
| `topic` | string | ❌ | Thema/Interesse (optional, fallback: "Not provided") |
| `message` | string | ✅ | Nachrichteninhalt |
| `newsletter` | string | ❌ | Newsletter Opt-in ("Yes" oder "No") |

**Verwendung in MJML:**
```mjml
<mj-text>Hallo {DATA_VARIABLE:firstName}</mj-text>
<mj-text>{DATA_VARIABLE:email}</mj-text>
```

**Verwendung im Betreff:**
```
✅ Danke für Ihre Anfrage, {DATA_VARIABLE:firstName}!
```

## 🚀 Setup in Loops.so Dashboard

### Schritt 1: Template erstellen
1. Login auf [app.loops.so](https://app.loops.so)
2. Navigate zu "Transactional" → "New Email"
3. Name eingeben (z.B. "Internal Contact Notification")
4. MJML Code aus entsprechender `.mjml` Datei kopieren und einfügen

### Schritt 2: Email Details konfigurieren
- **Subject:** Entsprechenden Betreff aus Tabelle oben einfügen
- **From:** Marsstein <info@marsstein.ai>
- **Reply To:** info@marsstein.ai
- **Preview Text:** Leer lassen (wird aus Email-Inhalt generiert)

### Schritt 3: Data Variables hinzufügen
Alle 7 Variables aus der Tabelle oben hinzufügen:
- firstName
- email
- company
- phone
- topic
- message
- newsletter

### Schritt 4: Template ID kopieren
Nach dem Speichern Template ID kopieren (z.B. `cmhnd1lr2htdh0w0i31yq80yh`)

### Schritt 5: Environment Variables aktualisieren
Template IDs in `.env.development` und `.env.production` eintragen.

## 🔄 API Integration

Der Endpoint `/api/contact-submit` sendet automatisch **2 E-Mails** pro Form-Submission:

### Flow:
1. **Contact erstellen** in Loops.so
   ```javascript
   POST https://app.loops.so/api/v1/contacts/create
   ```

2. **Interne Benachrichtigung** senden
   ```javascript
   POST https://app.loops.so/api/v1/transactional
   {
     transactionalId: LOOPS_INTERNAL_CONTACT_TEMPLATE_ID | LOOPS_INTERNAL_DEMO_TEMPLATE_ID,
     email: "info@marsstein.ai",
     dataVariables: { ... }
   }
   ```

3. **Kundenbestätigung** senden
   ```javascript
   POST https://app.loops.so/api/v1/transactional
   {
     transactionalId: LOOPS_CUSTOMER_CONTACT_TEMPLATE_ID | LOOPS_CUSTOMER_DEMO_TEMPLATE_ID,
     email: <user-email>,
     dataVariables: { ... }
   }
   ```

### Error Handling:
- Wenn **interne E-Mail** fehlschlägt: Geloggt, aber Request erfolgreich
- Wenn **Kunden-E-Mail** fehlschlägt: Success Response mit Warning
- Wenn **Contact Creation** fehlschlägt: 500 Error

## 🎨 Design Guidelines

### Farben
- **Contact (Orange):** #FF6B35 (Primary), #F97316 (Hover)
- **Demo (Grün):** #10B981 (Primary), #059669 (Darker)
- **Neutral:** #F3F4F6 (Background), #6B7280 (Text Secondary)
- **Alert:** #FEF3C7 (Warning BG), #92400E (Warning Text)

### Typografie
- **Font:** -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif
- **Body:** 16px, Line Height 1.6
- **Headings:** 18-28px, Font Weight 600-700

### Layout
- **Container Width:** 600px
- **Padding:** 20-30px Standard
- **Border Radius:** 8px für Cards/Buttons
- **Border:** 1px solid für Boxes mit Akzentfarbe

## 📊 Monitoring

### Loops.so Dashboard
Unter "Transactional" → "Metrics" für jedes Template:
- **Sent Count:** Anzahl gesendeter E-Mails
- **Open Rate:** Öffnungsrate (nur Customer Emails relevant)
- **Click Rate:** Click-Through-Rate auf CTAs
- **Error Rate:** Fehlgeschlagene Sends

### Vercel Logs
Backend-Logs in Vercel Dashboard prüfen:
```
Contact creation response: 200
Internal email response: 200
Customer email response: 200
```

## 🔐 Security & Privacy

### DSGVO Compliance
- Alle Daten werden in Loops.so (USA) verarbeitet
- Standardvertragsklauseln (SCC) der EU-Kommission
- Privacy Policy aktualisiert: [/datenschutz](/datenschutz)
- Unsubscribe-Link in allen Customer Emails (automatisch von Loops.so)

### API Key Security
- API Key in Environment Variables (nicht im Code)
- Vercel automatisches Secret Management
- Unterschiedliche Keys für Development/Production möglich

## 🧪 Testing

### Lokales Testing
1. Dev Server starten: `npm run dev`
2. Formular öffnen: `http://localhost:8080/kontakt`
3. Testdaten eingeben
4. Submission → Check Vercel Logs & Loops.so Dashboard

### Test Checklist
- ✅ Beide E-Mails ankommen (intern + Kunde)
- ✅ Alle Data Variables korrekt eingefügt
- ✅ Links funktionieren (Calendly, Ressourcen)
- ✅ Mobile responsive (Email Client Preview)
- ✅ Betreff korrekt mit personalisierten Variables
- ✅ Reply-To funktioniert (Email direkt beantworten)

## 📝 Maintenance

### Template Updates
1. MJML-Datei lokal bearbeiten
2. In Loops.so Dashboard navigieren zu entsprechendem Template
3. MJML Code aktualisieren
4. Preview testen
5. Save & Deploy

### Neue Variables hinzufügen
1. MJML-Datei updaten mit `{DATA_VARIABLE:newVar}`
2. In Loops.so Template Dashboard "Data Variables" hinzufügen
3. `api/contact-submit.ts` updaten: `dataVariables` Object erweitern
4. Testing durchführen

## 🆘 Troubleshooting

### E-Mail kommt nicht an
1. Check Loops.so Dashboard → Metrics (Sent Count)
2. Check Vercel Logs für Error Messages
3. Verify Template IDs in `.env` files
4. Test mit anderer E-Mail-Adresse (Spam-Filter?)

### Variables werden nicht ersetzt
1. Check Loops.so Dashboard → Data Variables richtig konfiguriert?
2. Syntax prüfen: `{DATA_VARIABLE:varName}` (case-sensitive!)
3. Verify `dataVariables` Object in API call

### Styling Probleme
1. MJML Validator nutzen: [mjml.io/try-it-live](https://mjml.io/try-it-live)
2. Email Client Testing: Litmus oder Email on Acid
3. Check mobile Preview in Loops.so Dashboard

---

**Last Updated:** 2025-11-06
**Maintained by:** Marsstein Team
**Contact:** info@marsstein.ai
