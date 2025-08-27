# On-Page SEO Anleitung & Checkliste (.md)
*Praxisnah, mit messbaren Kriterien für jede Seite.*

---

## Quick-Audit (10 Punkte)
- [ ] **Zielkeyword & Suchintention** definiert (1 Hauptziel je Seite)
- [ ] **Title** ~50–60 Zeichen / ~580 px; einzigartig & klickstark
- [ ] **Meta-Description** ~150–160 Zeichen; Nutzen + Call-to-Action
- [ ] **H1** genau 1×; klare H-Struktur (H2 → H3 …)
- [ ] **URL** kurz, sprechend, lowercase, Bindestriche, ≤ 60 Zeichen
- [ ] **Content** einzigartig, Intent-Fit, ausreichende Tiefe
- [ ] **Interne Links** (kontextuell + Breadcrumbs), keine Orphan Pages
- [ ] **Bilder** WebP/AVIF, Alt-Texte, feste Dimensionen, Lazy-Load
- [ ] **Indexierung** sauber (Canonicals, robots, Sitemap), Status 200, keine Redirect-Ketten
- [ ] **Core Web Vitals (mobil)**: LCP < 2,5 s · INP < 200 ms · CLS < 0,1

---

## 1) Ziel & Keyword-Strategie
- Primär-Keyword + 2–4 semantische Nebenbegriffe (kein Keyword-Stuffing).
- Suchintention (Informational/Transactional/Navigational/Local) prüfen.
- Seite auf **ein Ziel** optimieren (Kannibalisierung vermeiden).

## 2) URL & Informationsarchitektur
- Kurz, sprechend, *-* als Trenner, lowercase, Umlaute vermeiden (ae/oe/ue).
- Konsistente Trailing-Slash-Policy (alle mit `/` oder alle ohne).
- Wichtige Seiten ≤ 3 Klicks von der Startseite; **Breadcrumbs** aktiv.
- Parameter-/Filter-URLs **nicht** indexieren (noindex oder Canonical auf Hauptseite).

## 3) Title & Meta-Description
**Title**
- Länge: **~50–60 Zeichen** (≈ 580 px). Keyword möglichst nach vorne.
- Formeln (Beispiele):
  - `Hauptkeyword – primärer Nutzen | Marke`
  - `Dienstleistung in {Stadt} – {USP/KPI} | Marke`

**Meta-Description**
- Länge: **~150–160 Zeichen**; 1–2 Benefits + **CTA**.
- Natürlich schreiben, kein Keyword-Stopfen.

**Häufige Fehler**
- Duplicate Titles/Descriptions, abgeschnittene Snippets, Marke doppelt.

## 4) Überschriftenstruktur (H1–H6)
- **1× H1** (Seiten-Thema). Danach H2 für Hauptabschnitte, H3 für Unterpunkte.
- Keine Hierarchie-Sprünge (nicht H1 → H3 ohne H2).
- Überschriften scanbar, verständlich, relevante Begriffe **natürlich** enthalten.
- Empfehlung: H1 ~30–65 Zeichen.

## 5) Content-Qualität & Struktur
- Einzigartig, **Intent fit**: Kernfrage früh beantworten, dann vertiefen.
- Einleitung: Warum diese Seite? **Above-the-fold** klarer Nutzen.
- Struktur: Problem → Lösung → Belege (Daten, Cases, Beispiele).
- **Formatierung:** kurze Absätze, Listen, Tabellen, FAQs, Sprungmarken/TOC.
- **Medien-Mix:** Bilder, Diagramme, Videos.
- **E-E-A-T:** Autor:in, Qualifikation, Datum, Quellen, Kontakt, Impressum.

## 6) Interne Verlinkung
- 3–8 **kontextuelle Links** je längerem Content; beschreibende Ankertexte.
- **Hub/Cluster-Modell:** Pillar-Seite ↔ thematisch verknüpfte Detailseiten.
- **Breadcrumbs** (`schema.org/BreadcrumbList`).
- Alte Artikel regelmäßig aktualisieren und auf neue relevante Seiten verlinken.
- Keine toten Seiten (ohne eingehende Links); Broken Links fixen.

## 7) Medien (Bilder/Video)
- **Formate:** WebP/AVIF (Fallback JPG/PNG).
- **Größe:** in Layoutgröße exportieren; `width` & `height` im HTML setzen (CLS).
- **Lazy-Loading** für Below-the-fold; kritische Bilder **nicht** lazy.
- **Alt-Text:** 5–15 Wörter, beschreibend, Keyword ggf. natürlich.
- **Dateinamen:** keyword-beschreibend (z. B. `catering-konstanz-buffet.webp`).
- **Video:** Poster-Bild, lazy, keine Autoplay-Tonspur, Untertitel.

## 8) Indexierung, Canonicals, Robots, Sitemaps
- **Statuscodes:** Ziel-URL = **200**; Weiterleitungen max. 1 Hop.
- **Canonicals:** absolut, selbstreferenziell; Duplikate auf Hauptversion zeigen.
- **robots.txt:** nur für Crawl-Kontrolle, nicht zum De-Indexieren.
- **Meta Robots:** `index, follow` Standard; `noindex, follow` für dünne/Filter/Thank-you.
- **XML-Sitemap:** nur indexierbare Canonicals; Medien-Anhangseiten ausschließen.
- **Paginierung:** eigene Canonicals pro Seite; saubere `?page=`; Vor/Zurück-Links.
- **Fehlerseiten:** hilfreiche 404 mit Suche/Top-Links; **410** für endgültig entfernt.

## 9) Performance & Core Web Vitals (mobil zuerst)
- Zielwerte: **LCP < 2,5 s · INP < 200 ms · CLS < 0,1**.
- Hebel: Critical CSS, Minify, Schriftarten preload (`font-display: swap`), HTTP/2/3, CDN, Bild-CDN, Caching.
- **JS-Diät:** Unnötige Skripte entfernen/defer; Third-Party minimal.
- **Server:** niedriger TTFB (Edge/Cache), Kompression (gzip/br).

## 10) Mobile, UX & Barrierefreiheit
- **Responsive** mit `meta viewport`.
- **Tap-Targets** ≥ 48 px; ausreichender Kontrast; lesbare Fonts (≥ 16 px).
- Klare CTAs, sichtbarer Above-the-fold-Wert, kein Layout-Shift.
- Saubere Landmark-Struktur (`header/nav/main/footer`), Alt-Texte, Labels.






---

## Praxis-Vorlagen

### Title-Tag Muster
```
Keyword – stärkster Nutzen/Outcome 
Dienstleistung in {Stadt} – {USP/KPI} 
Produktname: wichtigste Spezifikation – {Vorteil} 
```

### Meta-Description Muster (≤ 160 Zeichen)
```
{Produkt/Dienstleistung} für {Zielgruppe}: {2 Benefits in Klartext}. Jetzt {CTA}.
Schnell, zuverlässig, zertifiziert: {Keyword}. Angebot in 24 h – jetzt anfragen!
```

### Interne-Link-Regeln
- Ankertexte beschreibend (kein „hier klicken“).
- Pro 1.000 Wörter 3–6 sinnvolle Kontextlinks.
- Wichtige Seiten aus mind. 5–10 anderen relevanten Seiten verlinken.
- „Related“-Blöcke am Ende langer Artikel; Breadcrumbs überall.

---

## Ausfüllbare Checkliste (Detail)
- [ ] **Keyword & Intent**: Primär-Keyword gewählt; Nebenterme notiert
- [ ] **SERP-Analyse**: Top 5 Ergebnisse & Intent matchen
- [ ] **Title**: 50–60 Zeichen; USP & Keyword vorne
- [ ] **Meta**: 150–160 Zeichen; 2 Benefits + CTA
- [ ] **URL**: kurz, sprechend, konsistente Slashes
- [ ] **H1**: 1×; H2/H3 logisch, keine Sprünge
- [ ] **Interne Links**: 3–8 kontextuelle; Breadcrumbs
- [ ] **Bilder**: WebP/AVIF; Alt-Text; Dimensionen; Lazy
- [ ] **Video**: Poster; Untertitel; kein Autoplay-Ton
- [ ] **Canonicals**: selbstreferenziell; Duplikate gelöst
- [ ] **Meta Robots**: korrekt; Filter/Thin = `noindex, follow`
- [ ] **Sitemap**: nur indexierbare Canonicals gelistet
- [ ] **Statuscodes**: 200; Redirects ≤ 1 Hop
- [ ] **404/410**: hilfreiche 404; 410 bei endgültig entfernt
- [ ] **CWV**: LCP < 2,5 s; INP < 200 ms; CLS < 0,1


---

**Tipp:** Priorisiere zuerst Quick-Audit-Kriterien und CWV (mobil). Kleinere OnPage-Fehler wiegen weniger, wenn Suchintention & Ladezeit top sind.
