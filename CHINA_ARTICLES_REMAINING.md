# Verbleibende China-Artikel Updates

## Status: 3 von 13 Artikeln haben Breadcrumbs + Related Articles

### ✅ Bereits aktualisiert:
1. **Artikel15DsgvoAuskunftsrechtChina** - `/artikel-15-dsgvo-auskunftsrecht-china`
2. **DsgvoAmazonSellersChina** - `/dsgvo-amazon-sellers-china`
3. **DeepseekDsgvo** - `/deepseek-dsgvo`

### ⏳ Noch zu aktualisieren (10 Artikel):

4. **DsgvoTikTokShopChina** - `/dsgvo-tiktok-shop-china`
5. **EuVertreterChina** - `/eu-vertreter-china`
6. **JointVentureChinaDatenschutz** - `/joint-venture-china-datenschutz`
7. **ChinaInvestitionenDsgvoScreening** - `/china-investitionen-dsgvo-screening`
8. **ChinaSccVsEuScc** - `/china-scc-vs-eu-scc`
9. **DsgvoWeChatAlipayChina** - `/dsgvo-wechat-alipay-china`
10. **DsgvoDouyinChina** - `/dsgvo-douyin-china`
11. **DsgvoB2BHerstellerChina** - `/dsgvo-b2b-hersteller-china`
12. **PiplGdprChina** - `/pipl-gdpr-china`
13. **CnGdpr** - `/dsgvo-china` (Produktseite - optional)

---

## Update-Pattern für jeden Artikel:

### Schritt 1: Imports hinzufügen

```typescript
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { getRelatedArticles } from "@/data/chinaArticles";
```

### Schritt 2: Breadcrumbs einfügen

Direkt nach dem öffnenden `<div className="relative mx-auto max-w-7xl px-6 lg:px-8">` im Hero-Section:

```typescript
<Breadcrumbs
  items={[
    { label: 'Wissen', href: '/wissen' },
    { label: 'China & DSGVO', href: '/wissen/china' },
    { label: '[ARTIKEL_TITEL]' }  // z.B. 'TikTok Shop', 'EU-Vertreter', etc.
  ]}
  className="mb-8"
/>
```

### Schritt 3: Related Articles einfügen

Direkt vor `<Footer />`:

```typescript
<RelatedArticles articles={getRelatedArticles('[ARTICLE_ID]')} />
```

**Article IDs** (aus `/src/data/chinaArticles.ts`):
- `'tiktok-shop'`
- `'eu-vertreter'`
- `'joint-venture'`
- `'investitionen'`
- `'scc'`
- `'wechat-alipay'`
- `'douyin'`
- `'b2b-hersteller'`
- `'pipl-gdpr'`

---

## Vollständiges Beispiel

Siehe `src/pages/DsgvoAmazonSellersChina.tsx` für vollständige Implementierung:

**Import Section (Zeile 28-32):**
```typescript
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { RelatedArticles } from "@/components/RelatedArticles";
import { getRelatedArticles } from "@/data/chinaArticles";
```

**Breadcrumbs (Zeile 149-156):**
```typescript
<Breadcrumbs
  items={[
    { label: 'Wissen', href: '/wissen' },
    { label: 'China & DSGVO', href: '/wissen/china' },
    { label: 'Amazon Sellers' }
  ]}
  className="mb-8"
/>
```

**Related Articles (Zeile 1145):**
```typescript
<RelatedArticles articles={getRelatedArticles('amazon-sellers')} />
```

---

## Schnell-Kommando zum Testen

Nach jedem Update:

```bash
# Dev-Server läuft bereits auf: http://localhost:8083/
# Teste die spezifische Seite, z.B.:
# http://localhost:8083/dsgvo-tiktok-shop-china
# http://localhost:8083/eu-vertreter-china
```

---

## Komponenten-Dateien

- **Breadcrumbs Component:** `src/components/Breadcrumbs.tsx`
- **RelatedArticles Component:** `src/components/RelatedArticles.tsx`
- **Artikel-Daten:** `src/data/chinaArticles.ts`

---

## Priority-Reihenfolge (nach Popularität):

1. ✅ DeepSeek (bereits erledigt)
2. ✅ Amazon Sellers (bereits erledigt)
3. **TikTok Shop** - nächste Priorität
4. **WeChat/Alipay** - hoher Traffic
5. **Douyin**
6. **EU-Vertreter** - rechtlich wichtig
7. Rest nach Bedarf

---

**Status:** Grundstruktur komplett implementiert. Verbleibende Updates sind rein repetitiv nach dem oben beschriebenen Pattern.
