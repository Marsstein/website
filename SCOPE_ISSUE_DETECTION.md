# Anleitung: Scope-Probleme in React-Komponenten finden

## Problem
Variablen (wie `maturityLabels`) werden innerhalb von bedingten Blöcken (`if (showResults)`) definiert, aber außerhalb verwendet.

## Methoden zur Erkennung

### ✅ Methode 1: TypeScript Type Checking (Beste Methode)
```bash
npx tsc --noEmit
```

**Warum das funktioniert:**
- TypeScript erkennt, wenn Variablen außerhalb ihres Scopes verwendet werden
- Zeigt Fehler wie: `Cannot find name 'maturityLabels'`

**Vorteil:** Findet 100% der Scope-Probleme vor dem Build

---

### ✅ Methode 2: ESLint mit strikten Regeln
```bash
npm run lint
```

Stelle sicher, dass ESLint konfiguriert ist mit:
```json
{
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "no-undef": "error"
  }
}
```

---

### ✅ Methode 3: Build testen
```bash
npm run build
```

**Warum das funktioniert:**
- Vite/React kompiliert alle Komponenten
- Runtime-Fehler werden in der Console angezeigt
- Aber: Fehler erscheinen erst, wenn die Seite aufgerufen wird

**Nachteil:** Findet nur Fehler auf besuchten Seiten

---

### ✅ Methode 4: Manuelle Code-Review-Patterns

Suche nach diesen Mustern:

#### Pattern 1: Labels in Results-Blöcken
```bash
grep -n "const.*Labels.*=.*{" src/pages/**/*.tsx
```

Dann prüfe, ob die Variable auch außerhalb des `if (showResults)` Blocks verwendet wird.

#### Pattern 2: Icons/Configs in bedingten Blöcken
```bash
grep -rn "if.*showResults\|if.*result" src/pages --include="*.tsx" -A 10 | grep "const "
```

#### Pattern 3: Verwendung vor Definition
```bash
# Für jede Datei mit einem *Labels Objekt:
grep -n "Labels\[" src/pages/assessment-center/*.tsx
```

Vergleiche Zeilennummern: Definition vs. Verwendung

---

### ✅ Methode 5: Automatisierte Test-Coverage

Teste jede Assessment-Seite manuell:

```bash
# Starte Dev-Server
npm run dev

# Besuche jede URL und prüfe die Console auf Fehler:
http://localhost:8080/assessment-center/isms-maturity-assessment
http://localhost:8080/assessment-center/soc2-readiness-assessment
http://localhost:8080/assessment-center/nis2-compliance-check
http://localhost:8080/assessment-center/ai-governance-check
http://localhost:8080/assessment-center/iso-27001-readiness-check
http://localhost:8080/assessment-center/security-controls-audit
http://localhost:8080/assessment-center/algorithmic-impact-assessment
http://localhost:8080/assessment-center/ai-risk-assessment
```

---

## Verdächtige Dateien (bereits identifiziert)

Diese Dateien haben `*Labels` Konstanten und sollten überprüft werden:

1. ✅ **ISMSMaturityAssessment.tsx** - BEHOBEN
   - `maturityLabels` verschoben nach oben

2. ⚠️ **NIS2ComplianceCheck.tsx** (Zeile 749, 757)
   - `complianceLabels`, `entityLabels`
   - Status: Zu prüfen

3. ⚠️ **SOC2ReadinessAssessment.tsx** (Zeile 742)
   - `readinessLabels`
   - Status: Zu prüfen

4. ⚠️ **AIGovernanceCheck.tsx** (Zeile 697)
   - `maturityLabels`
   - Status: Scheint OK (nur in Results verwendet)

5. ⚠️ **SecurityControlsAudit.tsx** (Zeile 721)
   - `implementationLabels`
   - Status: Zu prüfen

6. ⚠️ **AlgorithmicImpactAssessment.tsx** (Zeile 595)
   - `impactLabels`
   - Status: Zu prüfen

7. ⚠️ **ISO27001ReadinessCheck.tsx** (Zeile 702)
   - `readinessLabels`
   - Status: Zu prüfen

---

## Empfohlenes Vorgehen

### Kurzfristig (Jetzt):
```bash
# 1. TypeScript Check
npx tsc --noEmit --skipLibCheck

# 2. ESLint Check
npm run lint

# 3. Build Test
npm run build
```

### Mittelfristig:
1. Füge Pre-commit Hook hinzu:
   ```bash
   npm install --save-dev husky
   npx husky init
   echo "npx tsc --noEmit" > .husky/pre-commit
   ```

2. Aktiviere Vercel Preview Checks:
   - Settings → Git → Enable "Check for build errors on every commit"

### Langfristig:
- Schreibe Unit Tests für alle Assessment-Komponenten
- Nutze Playwright/Cypress für E2E-Tests aller Seiten

---

## Quick Fix Template

Wenn du ein Scope-Problem findest:

```typescript
// ❌ Falsch:
if (showResults && result) {
  const myLabels = { ... };
  // ...
}
// Später außerhalb:
<Badge>{myLabels[level]}</Badge> // Error!

// ✅ Richtig:
const myLabels = { ... }; // Am Anfang der Komponente

if (showResults && result) {
  // Kann jetzt myLabels verwenden
}
// Und auch hier:
<Badge>{myLabels[level]}</Badge> // ✅
```
