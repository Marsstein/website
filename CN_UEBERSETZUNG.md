# Chinesische Übersetzung - Komplette Anleitung

**Letzte Aktualisierung**: 2025-10-22
**Sprache**: Vereinfachtes Chinesisch (简体中文)
**Zielmarkt**: Mainland China (1.4 Milliarden Menschen)
**Sprachcode**: `zh-CN`

---

## 📋 Inhaltsverzeichnis

1. [Übersicht](#übersicht)
2. [Architektur-Entscheidung](#architektur-entscheidung)
3. [Schritt-für-Schritt Anleitung](#schritt-für-schritt-anleitung)
4. [Komponenten-Übersetzung](#komponenten-übersetzung)
5. [SEO Best Practices](#seo-best-practices)
6. [Häufige Übersetzungen](#häufige-übersetzungen)
7. [Qualitätskontrolle](#qualitätskontrolle)

---

## Übersicht

### Warum Vereinfachtes Chinesisch?

- **Vereinfachtes Chinesisch (简体中文)**: Mainland China, Singapur - ~95% des chinesischen Marktes
- **Traditionelles Chinesisch (繁體中文)**: Taiwan, Hong Kong, Macau - ~5% des Marktes

**Entscheidung**: Vereinfachtes Chinesisch für maximale Reichweite.

### URL-Struktur

Alle chinesischen Seiten sind unter `/zh/*` erreichbar:

```
Deutsch:     /              → Chinesisch: /zh
Deutsch:     /preise        → Chinesisch: /zh/jiage
Deutsch:     /dsgvo         → Chinesisch: /zh/gdpr
Deutsch:     /ueber-uns     → Chinesisch: /zh/guanyu-women
```

---

## Architektur-Entscheidung

### ❌ Was wir NICHT tun

**Komplexe i18n-Systeme mit separaten Übersetzungsdateien:**

```typescript
// ❌ FALSCH - Zu komplex
// /src/i18n/zh/home.ts
export const zhHome = {
  title: "标题",
  description: "描述"
};

// /src/pages/zh/Home.tsx
import { zhHome } from '@/i18n/zh/home';
<h1>{zhHome.title}</h1>
```

**Warum nicht?**
- Fehleranfällig (Key-Mismatches)
- Schwer zu warten (2 Dateien pro Seite)
- Kompliziert für große Seiten

### ✅ Was wir tun

**Inline-Übersetzung - 1:1 Kopie mit direkter Textübersetzung:**

```typescript
// ✅ RICHTIG - Einfach und direkt
// /src/pages/zh/Home.tsx
<h1>企业合规与数据保护解决方案</h1>
<p>Marsstein - 您的GDPR、ISO 27001、NIS2和欧盟AI法案合规伙伴</p>
```

**Warum?**
- ✅ Einfach und direkt
- ✅ Nur 1 Datei pro Seite
- ✅ Gleiche Struktur wie deutsche Version
- ✅ Leicht zu debuggen
- ✅ Perfekt für große Seiten (1000+ Zeilen)

---

## Schritt-für-Schritt Anleitung

### Option 1: Seite OHNE externe Komponenten (z.B. Pricing)

Für Seiten die alles in einer Datei haben (wie Pricing mit 1251 Zeilen):

#### Schritt 1: Deutsche Datei kopieren

```bash
cp src/pages/Preise.tsx src/pages/zh/Pricing.tsx
```

#### Schritt 2: Komponenten-Namen ändern

```typescript
// Vorher:
const Preise: React.FC = () => {
export default Preise;

// Nachher:
const Pricing: React.FC = () => {
export default Pricing;
```

#### Schritt 3: Import von SEOHead → Helmet

```typescript
// Vorher:
import SEOHead from '@/components/SEOHead';

// Nachher:
import { Helmet } from 'react-helmet-async';
```

#### Schritt 4: SEO Meta-Tags ersetzen

```typescript
// Vorher:
<SEOHead
  title="Preise - MARSSTEIN DSGVO-Compliance Pakete"
  description="Transparente Preise..."
  canonical="/preise"
/>

// Nachher:
<Helmet>
  <title>价格 - MARSSTEIN GDPR合规套餐</title>
  <meta name="description" content="透明的GDPR合规软件定价。月付€69至€449。" />
  <html lang="zh-CN" />
  <meta property="og:locale" content="zh_CN" />
  <meta property="og:title" content="价格 - MARSSTEIN GDPR合规套餐" />
  <link rel="canonical" href="https://marsstein.ai/zh/jiage" />
  <link rel="alternate" hreflang="zh-CN" href="https://marsstein.ai/zh/jiage" />
  <link rel="alternate" hreflang="de" href="https://marsstein.ai/preise" />
  <link rel="alternate" hreflang="en" href="https://marsstein.ai/en/pricing" />
</Helmet>
```

#### Schritt 5: Alle deutschen Texte inline übersetzen

**Texte in JSX:**
```typescript
// Vorher:
<h1>DSGVO-Compliance Pakete</h1>
<p>Wählen Sie das passende Paket</p>

// Nachher:
<h1>GDPR合规套餐</h1>
<p>选择适合您的套餐</p>
```

**Texte in Arrays/Objects:**
```typescript
// Vorher:
const packages = [
  { name: 'STARTER', price: '69' },
  { name: 'PROFESSIONAL', price: '199' }
];

// Nachher:
const packages = [
  { name: '入门版', price: '69' },
  { name: '专业版', price: '199' }
];
```

**Texte in Strings:**
```typescript
// Vorher:
label: "Monatlich kündbar"

// Nachher:
label: "可按月取消"
```

#### Schritt 6: Links anpassen

Alle internen Links auf chinesische Routen ändern:

```typescript
// Vorher:
<Link to="/preise">Preise ansehen</Link>
<Link to="/contact">Kontakt</Link>

// Nachher:
<Link to="/zh/jiage">查看价格</Link>
<Link to="/zh/lianxi">联系我们</Link>
```

#### Schritt 7: Route in App.tsx hinzufügen

```typescript
// In App.tsx
const ZhPricing = lazy(() => import("./pages/zh/Pricing"));

// Im Routing:
<Route path="/zh" element={<ChineseLayout />}>
  <Route index element={<ZhHome />} />
  <Route path="jiage" element={<ZhPricing />} />
</Route>
```

#### Schritt 8: Testen

```bash
# Seite im Browser öffnen
http://localhost:8080/zh/jiage

# HTTP Status prüfen
curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/zh/jiage
# Sollte "200" zurückgeben
```

---

### Option 2: Seite MIT externen Komponenten (z.B. Homepage)

Für Seiten die Komponenten importieren (wie Index.tsx mit HeroSection, ComplianceJourney, etc.):

#### Schritt 1: Hauptseite kopieren und anpassen

```bash
cp src/pages/Index.tsx src/pages/zh/Home.tsx
```

Dann gleiche Schritte wie Option 1 (Namen ändern, SEO anpassen, etc.)

#### Schritt 2: Komponenten-Verzeichnis erstellen

```bash
mkdir -p src/components/zh
```

#### Schritt 3: Jede Komponente einzeln übersetzen

Für jede verwendete Komponente:

**A) Kopieren:**
```bash
cp src/components/HeroSection.tsx src/components/zh/HeroSection.tsx
```

**B) Alle deutschen Texte inline übersetzen:**
```typescript
// Vorher:
const features = [
  { title: "KI-gestützte Analyse", desc: "Automatische Compliance-Bewertung" },
  { title: "DSGVO Ready", desc: "EU-konform nach Standards" }
];

// Nachher:
const features = [
  { title: "AI驱动分析", desc: "自动合规评估" },
  { title: "GDPR就绪", desc: "符合欧盟最新标准" }
];
```

**C) Links anpassen:**
```typescript
// Vorher:
<Link to="/preise">Preise ansehen</Link>

// Nachher:
<Link to="/zh/jiage">查看价格</Link>
```

**D) Hook-Imports entfernen (wenn vorhanden):**
```typescript
// Vorher (wenn die Komponente useLanguage nutzt):
const { t } = useLanguage();
<h1>{t('hero.title')}</h1>

// Nachher (inline):
<h1>合规革命</h1>
```

#### Schritt 4: Imports in Hauptseite aktualisieren

```typescript
// In src/pages/zh/Home.tsx

// Vorher:
import { HeroSection } from '@/components/HeroSection';
import { ComplianceJourney } from '@/components/ComplianceJourney';

// Nachher:
import { HeroSection } from '@/components/zh/HeroSection';
import { ComplianceJourney } from '@/components/zh/ComplianceJourney';
```

#### Schritt 5: Testen

```bash
http://localhost:8080/zh/
```

---

## Komponenten-Übersetzung

### Typische Komponenten-Struktur

**Beispiel: HeroSection.tsx (330 Zeilen)**

#### Bereiche zum Übersetzen:

1. **Daten-Arrays (Zeile 29-34)**
```typescript
const metrics = [
  { label: "隐私政策", value: 95, status: "自动生成" },
  { label: "处理活动记录", value: 88, status: "AI优化" }
];
```

2. **Feature-Listen (Zeile 36-41)**
```typescript
const features = [
  { title: "AI驱动分析", desc: "自动合规评估", badge: "测试版" }
];
```

3. **JSX-Content (Zeile 98-330)**
```typescript
<Badge>AI原生合规平台</Badge>
<h1>合规革命</h1>
<p>首个面向数字时代的AI原生合规平台</p>
<Button>免费测试合规</Button>
```

4. **Links (Zeile 129, 141)**
```typescript
<Link to="/zh/jiage">查看价格</Link>
```

### Welche Komponenten typischerweise übersetzt werden müssen:

| Komponente | Zeilen | Aufwand | Übersetzungs-Typen |
|-----------|--------|---------|-------------------|
| HeroSection | 330 | Hoch | Arrays, JSX, Links |
| ComplianceJourney | ~200 | Mittel | Timeline-Daten, JSX |
| ComplianceAreas | ~150 | Mittel | Cards, Beschreibungen |
| CTASection | ~80 | Niedrig | Buttons, Texte |
| SmartFAQ | ~250 | Hoch | FAQ-Daten, Antworten |

---

## SEO Best Practices

### Vollständiges Helmet-Template für chinesische Seiten:

```typescript
<Helmet>
  {/* Basis Meta-Tags */}
  <title>页面标题 | Marsstein</title>
  <meta name="description" content="页面描述，包含关键词" />
  <html lang="zh-CN" />

  {/* Open Graph */}
  <meta property="og:locale" content="zh_CN" />
  <meta property="og:title" content="页面标题 | Marsstein" />
  <meta property="og:description" content="页面描述" />
  <meta property="og:url" content="https://marsstein.ai/zh/pagename" />
  <meta property="og:type" content="website" />

  {/* Canonical & Alternates */}
  <link rel="canonical" href="https://marsstein.ai/zh/pagename" />
  <link rel="alternate" hreflang="zh-CN" href="https://marsstein.ai/zh/pagename" />
  <link rel="alternate" hreflang="de" href="https://marsstein.ai/pagename" />
  <link rel="alternate" hreflang="en" href="https://marsstein.ai/en/pagename" />
  <link rel="alternate" hreflang="x-default" href="https://marsstein.ai/" />

  {/* Structured Data (optional) */}
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Marsstein",
      "description": "中文描述",
      "inLanguage": "zh-CN"
    })}
  </script>
</Helmet>
```

### Wichtige SEO-Regeln:

1. ✅ **Immer** `lang="zh-CN"` setzen
2. ✅ **Immer** `og:locale="zh_CN"` setzen
3. ✅ **Immer** hreflang für alle Sprachen angeben
4. ✅ Canonical URL auf die chinesische Version setzen
5. ✅ Description auf Chinesisch (50-160 Zeichen)
6. ✅ Title auf Chinesisch (max 60 Zeichen)

---

## Häufige Übersetzungen

### Basis-Begriffe

| Deutsch | Chinesisch | Pinyin |
|---------|-----------|--------|
| DSGVO / GDPR | GDPR合规 | GDPR héguī |
| Datenschutz | 数据保护 | shùjù bǎohù |
| Compliance | 合规 | héguī |
| Automatisierung | 自动化 | zìdònghuà |
| Künstliche Intelligenz | 人工智能 / AI | réngōng zhìnéng |
| Unternehmen | 企业 | qǐyè |
| Lösung | 解决方案 | jiějué fāng'àn |
| Plattform | 平台 | píngtái |
| Sicherheit | 安全 | ānquán |
| Audit | 审计 | shěnjì |

### UI-Elemente

| Deutsch | Chinesisch |
|---------|-----------|
| Jetzt starten | 立即开始 |
| Mehr erfahren | 了解更多 |
| Kontakt aufnehmen | 联系我们 |
| Kostenlos testen | 免费测试 |
| Preise ansehen | 查看价格 |
| Anmelden | 登录 |
| Registrieren | 注册 |
| Weiter | 继续 |
| Zurück | 返回 |
| Abbrechen | 取消 |
| Speichern | 保存 |
| Laden... | 加载中... |

### Package-Namen

| Deutsch | Chinesisch |
|---------|-----------|
| STARTER | 入门版 |
| PROFESSIONAL | 专业版 |
| ENTERPRISE | 企业版 |
| Basic | 基础版 |
| Premium | 高级版 |

### Zeitangaben

| Deutsch | Chinesisch |
|---------|-----------|
| Monatlich | 每月 / 按月 |
| Jährlich | 每年 / 按年 |
| pro Monat | 每月 |
| pro Jahr | 每年 |
| Monatlich kündbar | 可按月取消 |
| Q1 2025 | 2025年第一季度 |
| Q3 2025 | 2025年第三季度 |

### Status & Badges

| Deutsch | Chinesisch |
|---------|-----------|
| Beta | 测试版 |
| Ready | 就绪 |
| In Vorbereitung | 筹备中 |
| Roadmap | 规划中 |
| Live System | 实时系统 |
| Audit-Ready | 审计就绪 |
| KI-Powered / AI-Powered | AI驱动 |

### Compliance-Begriffe

| Deutsch | Chinesisch |
|---------|-----------|
| Datenschutzerklärung | 隐私政策 |
| Verarbeitungsverzeichnis | 处理活动记录 |
| TOM-Dokumentation | TOM文档 |
| Betroffenenanfragen | 数据主体请求 |
| Externer Datenschutzbeauftragter | 外部数据保护官 |
| ISO 27001 | ISO 27001 |
| NIS2 | NIS2 |
| EU AI Act | 欧盟AI法案 |
| Automatisch generiert | 自动生成 |
| Vollautomatisiert | 全自动化 |

---

## Qualitätskontrolle

### Checkliste vor dem Commit:

- [ ] **SEO**: Helmet mit allen Tags (title, description, lang, hreflang, canonical)
- [ ] **Links**: Alle Links zeigen auf `/zh/*` URLs
- [ ] **Komponenten-Name**: Von `German` zu `Chinese` geändert (z.B. `Preise` → `Pricing`)
- [ ] **Export**: `export default NameDerKomponente;` stimmt mit const überein
- [ ] **Imports**: Zeigen auf `/components/zh/` falls Komponenten genutzt werden
- [ ] **HTTP 200**: Seite lädt ohne Fehler im Browser
- [ ] **Keine Console Errors**: DevTools zeigt keine JS-Fehler
- [ ] **Texte vollständig**: Keine deutschen Texte mehr sichtbar (außer Marken-Namen)
- [ ] **Route hinzugefügt**: In `App.tsx` unter `/zh/*`

### Testing-Befehle:

```bash
# HTTP Status prüfen
curl -s -o /dev/null -w "%{http_code}" http://localhost:8080/zh/PAGENAME

# Seite im Browser öffnen
open http://localhost:8080/zh/PAGENAME

# Nach deutschen Wörtern suchen
grep -i "DSGVO\|Datenschutz\|Unternehmen" src/pages/zh/PAGENAME.tsx
```

### Häufige Fehler vermeiden:

❌ **Fehler 1**: Component name mismatch
```typescript
const Preise = () => { ... }
export default Pricing;  // ❌ FALSCH - Namen stimmen nicht überein
```

✅ **Lösung**:
```typescript
const Pricing = () => { ... }
export default Pricing;  // ✅ RICHTIG
```

❌ **Fehler 2**: Links nicht angepasst
```typescript
<Link to="/preise">查看价格</Link>  // ❌ FALSCH - deutscher Link
```

✅ **Lösung**:
```typescript
<Link to="/zh/jiage">查看价格</Link>  // ✅ RICHTIG
```

❌ **Fehler 3**: SEOHead statt Helmet
```typescript
<SEOHead title="..." />  // ❌ FALSCH - alte Komponente
```

✅ **Lösung**:
```typescript
<Helmet>
  <title>...</title>
</Helmet>  // ✅ RICHTIG
```

❌ **Fehler 4**: Canonical zeigt auf deutsche Seite
```typescript
<link rel="canonical" href="https://marsstein.ai/preise" />  // ❌ FALSCH
```

✅ **Lösung**:
```typescript
<link rel="canonical" href="https://marsstein.ai/zh/jiage" />  // ✅ RICHTIG
```

---

## Fortschritt tracken

Alle übersetzten Seiten werden in `CHINESE_TRANSLATION_PROGRESS.md` dokumentiert.

Nach jeder fertigen Seite:

1. Status auf ✅ setzen
2. Notizen hinzufügen (Zeilen, Besonderheiten)
3. Completed-Counter erhöhen

**Beispiel:**

```markdown
| ✅ | Pricing | `/preise` | `/zh/jiage` | 🔴 Critical | 1251 Zeilen, vollständig übersetzt |
```

---

## Zusammenfassung

### Der einfache Workflow:

1. **Kopieren**: `cp src/pages/German.tsx src/pages/zh/Chinese.tsx`
2. **Namen ändern**: Komponenten-Name und Export
3. **SEO anpassen**: SEOHead → Helmet mit chinesischen Meta-Tags
4. **Texte übersetzen**: Alle deutschen Strings inline auf Chinesisch
5. **Links anpassen**: Alle `/path` → `/zh/path`
6. **Route hinzufügen**: In App.tsx
7. **Testen**: HTTP 200 + keine deutschen Texte sichtbar
8. **Dokumentieren**: Progress-Datei aktualisieren

### Warum dieser Ansatz funktioniert:

✅ **Einfach**: Nur 1 Datei pro Seite
✅ **Wartbar**: Gleiche Struktur wie deutsche Version
✅ **Skalierbar**: Funktioniert für Seiten mit 10-1250 Zeilen
✅ **Debuggbar**: Alle Texte direkt sichtbar
✅ **Performant**: Keine Runtime-Übersetzung nötig

---

**Viel Erfolg bei der Übersetzung! 🚀**
