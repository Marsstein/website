# SEO-Seiten-Übersicht

## Gesamtübersicht
- **Total**: 222 Seiten
- **Mit SEO (laut FinalChecks.tsx)**: ~150+ Seiten
- **Ohne SEO (grep-Analyse)**: 118 Seiten (aber viele davon haben tatsächlich SEO)

## 1. Seiten mit korrektem SEO-Status ✅

### Hauptseiten
- `/` - Homepage (Index)
- `/pricing` - Preise
- `/contact` - Kontakt
- `/impressum` - Impressum
- `/datenschutz` - Datenschutz

### Compliance-Seiten (alle haben SEO)
- `/compliance/dsgvo` - DSGVO Compliance Guide
- `/compliance/eu-ai-act` - EU AI Act Compliance Guide
- `/compliance/iso-27001` - ISO 27001 Compliance Guide
- `/compliance/nis2` - NIS-2 Compliance Guide
- `/compliance/soc-2` - SOC 2 Compliance Guide
- `/compliance/tisax` - TISAX Compliance Guide
- `/compliance/geldwaeschegesetz` - GwG Compliance
- `/compliance/hinweisgeberschutzgesetz` - HinSchG Compliance
- `/compliance/iso-27017` - ISO 27017 Cloud Security
- `/compliance/iso-27018` - ISO 27018 Cloud Privacy

### KI/AI-Seiten (alle haben SEO)
- `/wissen/ki-datenschutz/risikoklassifizierung`
- `/wissen/ki-datenschutz/algorithmic-impact-assessment`
- `/wissen/ki-datenschutz/privacy-preserving-ai`
- `/wissen/ki-datenschutz/federated-learning`
- `/wissen/ki-datenschutz/financial-ai-compliance`
- `/wissen/ki-datenschutz/hr-ai-compliance`
- `/wissen/ki-datenschutz/data-minimization`
- `/wissen/ki-datenschutz/explainable-ai`
- `/wissen/ki-datenschutz/privacy-by-design-ai`
- `/wissen/ki-datenschutz/model-privacy-attacks`

## 2. Seiten mit korrektem NoIndex-Status ✅

### Interne Seiten
- `/dashboard` - Dashboard (NoIndex)
- `/academy` - Academy (NoIndex)
- `/thank-you` - Danke-Seite (NoIndex)

### Assessment-Center (alle NoIndex)
- `/assessment-center/*` - Alle 11 Assessment-Tools

### Test-Seiten (alle NoIndex)
- Alle `/test*` Seiten
- Alle `/approach*` Seiten
- `/diagnostic`, `/ultimate-diagnostic`
- `/simple-test`, `/footer-test`
- `/design-separator-test`

## 3. Problematische Dateien 🚨

### Duplikate - MÜSSEN GELÖSCHT WERDEN (20 Dateien)
Diese Dateien sind exakte Kopien und wurden vermutlich versehentlich mit Leerzeichen im Namen erstellt:
```
/src/pages/designs/AlpineResilience 2.tsx
/src/pages/designs/AppleLifestyle 2.tsx
/src/pages/designs/DesignShowcase 2.tsx
/src/pages/designs/DigitalTrust 2.tsx
/src/pages/designs/FutureLaw 2.tsx
/src/pages/designs/LuxuriousTrust 2.tsx
/src/pages/designs/MarsBlack 2.tsx
/src/pages/designs/MarsLuxe 2.tsx
/src/pages/designs/MarsQuantum 2.tsx
/src/pages/designs/MarssteinCore 2.tsx
/src/pages/designs/MarssteinMidnight 2.tsx
/src/pages/designs/MarssteinProfessional 2.tsx
/src/pages/designs/MarsWhite 2.tsx
/src/pages/designs/MinimalPure 2.tsx
/src/pages/designs/ModernCompliance 2.tsx
/src/pages/designs/NeuralMars 2.tsx
/src/pages/designs/QuantumMars 2.tsx
/src/pages/designs/SwissPrecision 2.tsx
/src/pages/designs/TechInnovation 2.tsx
/src/pages/designs/TechPremium 2.tsx
```

### Backup-Datei - MUSS GELÖSCHT WERDEN (1 Datei)
```
/src/pages/branchen/SaasPrivacyDesignGuide_backup.tsx
```

### Design-Showcases - KEIN SEO NÖTIG (20 Dateien)
Interne Design-Demos, brauchen kein SEO:
```
/src/pages/designs/AlpineResilience.tsx
/src/pages/designs/AppleLifestyle.tsx
... (alle Design-Dateien ohne " 2")
```

## 4. Unklar/Zu prüfen ❓

### Möglicherweise fehlende SEO-Implementierung
Diese Seiten wurden in der grep-Analyse als "ohne SEOHead" gefunden, aber ihr Status in FinalChecks.tsx ist unklar:
- Einige Branchen-Guides (DatenschutzHomeoffice.tsx, DsgvoVereine.tsx)
- Einige spezielle Guides (DataBreachNotfallGuide.tsx, etc.)
- System-Seiten (NotFound.tsx, FinalChecks.tsx)

## Empfohlene Aktionen

1. **🚨 Sofort löschen**: 21 Dateien (20 Duplikate + 1 Backup)
2. **✅ Keine Aktion nötig**: Alle Seiten mit korrektem SEO/NoIndex-Status
3. **📋 Prüfen**: Ca. 20-30 Seiten mit unklarem Status
4. **🎨 NoIndex oder ignorieren**: Design-Showcases (20 Dateien)