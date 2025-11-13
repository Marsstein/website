# Marsstein — SaaS-Vertragswerk (Markdown, DE/B2B)

*Stand: 12. November 2025 (integrierte Fassung)*

> **Hinweis (kein Rechtsrat):** Dieses Vertragswerk ist eine praxisorientierte Musterbasis für B2B‑SaaS in Deutschland/EU. Eine finale rechtliche Prüfung durch eine/n Fachanwält:in für IT‑Recht wird dringend empfohlen. Platzhalter in **[eckigen Klammern]** bitte ausfüllen.

---

## Inhaltsverzeichnis

1. [Hauptvertrag (MSA/AGB)](#hauptvertrag-msaagb)  
   1. [Präambel](#1-präambel)  
   2. [Begriffsbestimmungen](#2-begriffsbestimmungen)  
   3. [Vertragsschluss & Einbeziehung](#3-vertragsschluss--einbeziehung)  
   4. [Leistungsumfang](#4-leistungsumfang)  
   4a. [Pflichten des Kunden](#4a-pflichten-des-kunden)  
   5. [Nutzungsrechte & Restriktionen (AUP-Kern)](#5-nutzungsrechte--restriktionen-aup-kern)  
   6. [Open-Source-Komponenten](#6-open-source-komponenten)  
   7. [Feedback](#7-feedback)  
   8. [Laufzeit, Kündigung](#8-laufzeit-kündigung)  
   9. [Preise, Abrechnung, Zahlungsverzug](#9-preise-abrechnung-zahlungsverzug)  
   10. [Service-Level & Support](#10-service-level--support)  
   10a. [Gewährleistung](#10a-gewährleistung)  
   11. [Datenschutz – Verweis auf AVV](#11-datenschutz--verweis-auf-avv)  
   12. [Subunternehmer](#12-subunternehmer)  
   13. [Vertraulichkeit](#13-vertraulichkeit)  
   14. [Schutzrechte & Freistellung](#14-schutzrechte--freistellung)  
   15. [Haftung (neu gefasst)](#15-haftung-neu-gefasst)  
   15a. [Datenschutz-spezifische Haftung](#15a-datenschutz-spezifische-haftung)  
   16. [Compliance](#16-compliance)  
   17. [Referenzen](#17-referenzen)  
   18. [Änderungen der Bedingungen](#18-änderungen-der-bedingungen)  
   19. [Mitteilungen](#19-mitteilungen)  
   20. [Abwerbeverbot](#20-abwerbeverbot)  
   21. [Höhere Gewalt](#21-höhere-gewalt)  
   22. [Recht & Gerichtsstand](#22-recht--gerichtsstand)  
   23. [Rangfolge](#23-rangfolge)  
   24. [Schlussbestimmungen](#24-schlussbestimmungen)
2. [Anlage 1: Service-Level-Agreement (SLA)](#anlage-1-service-level-agreement-sla)
3. [Anlage 2: Auftragsverarbeitungsvertrag (AVV/DPA)](#anlage-2-auftragsverarbeitungsvertrag-avvdpa)
4. [Anlage 3: Technische und organisatorische Maßnahmen (TOMs)](#anlage-3-technische-und-organisatorische-massnahmen-toms)
5. [Anlage 4: Liste der Sub-Prozessoren](#anlage-4-liste-der-sub-prozessoren)
6. [Anlage 5: Acceptable-Use-Policy (AUP)](#anlage-5-acceptable-use-policy-aup)
7. [Anlage 6: Beta-/Early-Access-Bedingungen](#anlage-6-beta-early-access-bedingungen)
8. [Anlage 7: EU Data Act Addendum (kurz)](#anlage-7-eu-data-act-addendum-kurz)

---

## Hauptvertrag (MSA/AGB)

**zwischen**  
**[Anbieter]**: [Firmenname, Rechtsform (GmbH), Anschrift, HRB, USt-IdNr.], vertreten durch [vertretungsberechtigte Person] – „**Anbieter**“ –  
**und**  
**[Kunde]**: [Firma, Rechtsform, Anschrift] – „**Kunde**“.

### 1. Präambel
Der Anbieter stellt eine Cloud-Software („**Dienst**“) als Software-as-a-Service (SaaS) bereit. Der Kunde nutzt den Dienst zu eigenen geschäftlichen Zwecken. Dieses Dokument regelt die vertraglichen Bedingungen einschließlich Lizenz, Laufzeit, Support, Haftung und Datenschutz.

### 2. Begriffsbestimmungen
„**Verfügbarkeit**“, „**Wartungsfenster**“, „**Service-Credits**“ gemäß **SLA (Anlage 1)**.  
„**Personenbezogene Daten**“, „**Verarbeitung**“ gemäß DSGVO.  
„**AUP**“ = Acceptable-Use-Policy (Anlage 5).

### 3. Vertragsschluss & Einbeziehung
(1) **Clickwrap**: Der Kunde akzeptiert diese Bedingungen beim Registrieren durch aktives Anhaken („Ich stimme zu“). Der Anbieter protokolliert Zeitpunkt, Version und Benutzer.  
(2) **Enterprise-Option**: Alternativ/zusätzlich kann eine Unterzeichnung (PDF/ESign) der Auftragsdokumentation/Order Form erfolgen.  
(3) Vertragssprache: **Deutsch & Englisch**, bei Widersprüchen gilt **Deutsch**.  
(4) Abweichende AGB des Kunden gelten nur bei ausdrücklicher, schriftlicher Zustimmung des Anbieters.

### 4. Leistungsumfang
(1) Der Anbieter gewährt eine **nicht-exklusive, nicht übertragbare** Nutzungsberechtigung am Dienst (SaaS).  
(2) Funktionsumfang gemäß Leistungsbeschreibung/Order Form; Beta-Module separat in Anlage 6. **Angaben zum Funktionsumfang sind keine Beschaffenheitsgarantien**, es sei denn, sie sind **ausdrücklich** als solche bezeichnet.  
(3) On-Premise ist nicht geschuldet; Quellcode wird nicht überlassen.

### 4a. Pflichten des Kunden
(1) **Zugang & Sicherheit**: Der Kunde schützt Zugänge durch **individuelle Passwörter** und – soweit verfügbar – **MFA**; **Weitergabe/Pooling** von Zugangsdaten ist untersagt.  
(2) **Named-User/Seats**: Die Nutzung erfolgt **pro Named-User/Seat**; je Seat darf nur **eine** natürliche Person gleichzeitig aktiv sein; Vertretungen sind zulässig, wenn keine **gleichzeitige** Nutzung erfolgt.  
(3) **Rechtskonformität**: Der Kunde stellt sicher, dass Inhalte/Uploads **rechtmäßig** sind und über eine **Rechtsgrundlage** (z. B. Art. 6 DSGVO) verfügen; erforderliche **Einwilligungen** werden eingeholt.  
(4) **Mitwirkung**: Der Kunde stellt erforderliche Informationen und eine **Ansprechperson** bereit und wirkt bei Analysen/Entstörungen mit.  
(5) **Fehlermeldungen**: Mängel/Störungen werden **unverzüglich** mit **nachvollziehbarer Beschreibung** (Screenshots, Zeitpunkt, URL, Nutzer) an **[support@[domain]]** bzw. das **[Ticket‑Portal]** gemeldet.  
(6) **Datensicherung**: Zusätzlich zu Anbietersicherungen hält der Kunde – soweit geschäftlich/gesetzlich geboten – **eigene Exporte/Backups** vor.  
(7) **Schadsoftwarefreiheit**: Dateien/Datenträger müssen **frei von Schadcode** sein; bei Verstoß **Freistellung** des Anbieters von Drittansprüchen; **Mitverschulden** des Kunden wird anspruchsmindernd berücksichtigt.

### 5. Nutzungsrechte & Restriktionen (AUP-Kern)
(1) Nutzung nur im gesetzlichen Rahmen; keine sicherheitskritischen Hochrisiko-Szenarien.  
(2) **Verbot**: unerlaubtes Scraping, Reverse Engineering (ausgenommen zwingendes Recht), Last-/Pen-Tests ohne Zustimmung.  
(3) **KI-Training**: Der Anbieter trainiert **keine** Modelle auf **Kundendaten**, es sei denn, dies wird ausdrücklich vereinbart.  
(4) **Exportkontrolle/Sanktionen**: Kunde verpflichtet sich zur Einhaltung einschlägiger Export- und Sanktionsvorgaben.  
(5) **Named-User-/Seat-Lizenz**: Lizenzen sind personengebunden/seat-bezogen; **Account‑Sharing** ist untersagt; temporäre Vertretungen ohne Parallelnutzung sind zulässig.  
(6) **Account-Missbrauch** kann zur **sachgerechten Einschränkung/Sperrung** führen (nur soweit rechtlich zulässig und unter Abwägung der Interessen des Kunden).

### 6. Open-Source-Komponenten
Enthaltene OSS-Bausteine werden **„as‑is“** bereitgestellt; Lizenzhinweise stellt der Anbieter bereit (z. B. Download-Liste). **Soweit GPL‑Komponenten enthalten sind**, stellt der Anbieter auf Anfrage den entsprechenden **Quellcode** bereit bzw. verweist auf die **Download‑Quelle**.

### 7. Feedback
Der Kunde räumt dem Anbieter eine **weltweite, zeitlich unbefristete, gebührenfreie, nicht-exklusive** Lizenz zur Nutzung von Feedback ein (keine Pflicht zur Nutzung).

### 8. Laufzeit, Kündigung
(1) **Erstlaufzeit: 12 Monate** ab Vertragsbeginn.  
(2) **Automatische Verlängerung** um die jeweilige Vorperiode, sofern nicht mit **30 Tagen** Frist zum Periodenende gekündigt.  
(3) Kündigung aus wichtigem Grund bleibt unberührt (z. B. wesentlicher Verstoß, Zahlungsverzug > 30 Tage, Insolvenz).

### 9. Preise, Abrechnung, Zahlungsverzug
(1) **Abrechnung: jährlich im Voraus**; Preise gemäß Order Form, zzgl. USt.  
(2) **Zahlung per Rechnung/Überweisung** innerhalb von **14 Tagen netto**.  
(3) **Zahlungsverzug**: **Mahngebühren** nach angemessenem Ermessen.  
(4) **Preisanpassungen**: **jährlich** mit **30 Tagen** Vorlauf; Widerspruch → außerordentliche Kündigung bis Wirksamkeitsdatum. *(Optional: Indexierung nach VPI statt freier Anpassung.)*

### 10. Service-Level & Support
(1) Service-Level gemäß **SLA (Anlage 1)**: **99,5 % Uptime/Monat**, Support **werktags 9–17 Uhr CET**, **P1‑Reaktionszeit 24 h**, geplante Wartung **mit 48 h Vorankündigung**.  
(2) Service-Credits sind ausschließlicher Rechtsbehelf bei SLA‑Unterschreitung.  
(3) **Supportkanäle**: **[support@[domain]]**, **[Helpdesk‑URL]**, optional **[Notfall‑Hotline]** für P1‑Fälle.

### 10a. Gewährleistung
(1) Der Anbieter hält den Dienst während der Laufzeit in einem zum **vertragsgemäßen Gebrauch geeigneten Zustand** und beseitigt **wesentliche Mängel** im Rahmen der **Nacherfüllung**.  
(2) **Nacherfüllung**: Bei wesentlichen Mängeln stehen dem Anbieter mindestens **zwei** Nachbesserungsversuche zu; zumutbare **Workarounds** sind zulässig.  
(3) Die **verschuldensunabhängige Haftung** für anfängliche Mängel gemäß **§ 536a Abs. 1 Alt. 1 BGB** ist **ausgeschlossen**.  
(4) **Verjährung**: Mängelansprüche verjähren in **12 Monaten** ab Kenntnis bzw. grob fahrlässiger Unkenntnis, soweit gesetzlich zulässig; unberührt bleiben Ansprüche nach § 15 Abs. 1.

### 11. Datenschutz – Verweis auf AVV
(1) Rollenmodell: **Kunde = Verantwortlicher**, **Anbieter = Auftragsverarbeiter**.  
(2) **AVV/DPA (Anlage 2)** ist Bestandteil dieses Vertrags; **TOMs (Anlage 3)** und **Subprozessoren (Anlage 4)** gelten vereinbart.  
(3) **Datenstandort: EU/EWR-only**. Drittlandtransfers finden nicht statt; falls künftig erforderlich, gelten **SCC 2021/914** + TIA + Zusatzmaßnahmen vorab (siehe AVV).

### 12. Subunternehmer
Einsatz gelisteter **Sub‑Prozessoren** ist vorab genehmigt. Änderungen: Information per E‑Mail/In‑App; **Widerspruchsrecht** innerhalb **[30] Tagen**; bei fortbestehendem Widerspruch Sonderkündigungsrecht des Kunden.

### 13. Vertraulichkeit
Beiderseitige Geheimhaltung von Geschäfts-/Betriebsgeheimnissen, mind. 3 Jahre nach Vertragsende.

### 14. Schutzrechte & Freistellung
(1) **IP-Inhaberschaft**: Sämtliche Rechte am Dienst verbleiben beim Anbieter; der Kunde erhält das vereinbarte Nutzungsrecht.  
(2) **IP-Freistellung**: Der Anbieter verteidigt den Kunden gegen Drittansprüche wegen Verletzung gewerblicher Schutzrechte durch den Dienst und stellt von gerichtlich auferlegten Kosten frei (Voraussetzungen: unverzügliche Anzeige, Verteidigungshoheit, Mitwirkung).

### 15. Haftung (neu gefasst)
1. **Unbeschränkte Haftung.** Der Anbieter haftet unbeschränkt (i) bei **Vorsatz**, (ii) für **Schäden aus der Verletzung von Leben, Körper oder Gesundheit**, sowie (iii) nach dem **Produkthaftungsgesetz**.  
2. **Grobe Fahrlässigkeit.** Bei **grober Fahrlässigkeit** haftet der Anbieter dem Grunde nach; der **Haftungsbetrag** ist – außer in den Fällen von Abs. 1 – auf den **vertragstypischen, vorhersehbaren Schaden** **und** auf den **Haftungshöchstbetrag gemäß Abs. 4** begrenzt.  
3. **Einfache Fahrlässigkeit / Kardinalpflichten.** Bei **einfach fahrlässiger** Verletzung **vertragswesentlicher Pflichten (Kardinalpflichten)** ist die Haftung auf den **vertragstypischen, vorhersehbaren Schaden** **und** den **Haftungshöchstbetrag gemäß Abs. 4** begrenzt; im Übrigen ist sie ausgeschlossen. Kardinalpflichten sind solche Pflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung die Parteien regelmäßig vertrauen dürfen.  
4. **Haftungshöchstbetrag (Cap).** Vorbehaltlich Abs. 1 ist die **Gesamthaftung** des Anbieters aus und im Zusammenhang mit diesem Vertrag pro Vertragsjahr auf **100 % der vom Kunden in den letzten 12 Monaten vor dem Schadensereignis gezahlten Entgelte** (bei kürzerer Vertragsdauer anteilig) begrenzt.  
5. **Ausschluss indirekter Schäden.** **Mittelbare Schäden** und **Folgeschäden** (einschließlich entgangenem Gewinn, Produktions-/Nutzungsausfall, Datenwiederherstellung außerhalb der in § 11/Anlage 3 geregelten Sicherungen) sind **ausgeschlossen**, soweit gesetzlich zulässig.  
6. **Mitverschulden / Schadensminderung.** Ein Mitverschulden des Kunden (z. B. Verstoß gegen AUP, unterlassene Datensicherung, unzureichende Mitwirkung) ist anspruchsmindernd zu berücksichtigen. Beide Parteien sind verpflichtet, Schäden im Rahmen des Zumutbaren abzuwenden bzw. zu mindern.  
7. **Verjährung.** Vertragliche Schadensersatzansprüche verjähren in **12 Monaten** ab Kenntnis bzw. grob fahrlässiger Unkenntnis des anspruchsbegründenden Umstands, soweit gesetzlich zulässig; unberührt bleiben Ansprüche nach Abs. 1.

### 15a. Datenschutz-spezifische Haftung
1. **Parteieninterne Risikoverteilung.** Die **gesetzliche Haftung nach Art. 82 DSGVO** gegenüber betroffenen Personen bleibt unberührt. **Zwischen den Parteien** gilt: Für **datenschutzrechtliche Pflichtverletzungen** des Anbieters haftet dieser **innerhalb des Haftungshöchstbetrags (§ 15 Abs. 4)**, es sei denn, es liegt **Vorsatz** oder **grobe Fahrlässigkeit** vor oder ein Fall des § 15 Abs. 1.  
2. **Behördliche Geldbußen.** **Behördliche Geldbußen** werden vom Anbieter **nicht** ersetzt, **es sei denn** die Geldbuße beruht **ausschließlich** auf einem vom Anbieter zu vertretenden Verstoß; in diesem Fall nur **soweit gesetzlich zulässig** und **höchstens bis zum Haftungshöchstbetrag** nach § 15 Abs. 4.  
3. **Mitwirkung / Regress.** Trägt der Kunde zur Entstehung eines Datenschutzschadens oder einer Geldbuße bei (z. B. fehlerhafte Weisung, fehlende Rechtsgrundlage, unterlassene Information), mindert dies die Haftung des Anbieters entsprechend. Ansprüche aus Innenausgleich/Regress bleiben vorbehalten.  
4. **Primat der AVV.** Im Übrigen gilt die **Auftragsverarbeitungs‑Vereinbarung (Anlage 2)**; abweichende Haftungsregelungen dort gehen für rein auftragsverarbeitungsbezogene Sachverhalte vor.

### 16. Compliance
(1) **Exportkontrolle/Sanktionen** und **Anti‑Korruptions‑Klausel** gelten.  
(2) **KI‑Output‑Hinweis** (falls der Dienst KI‑basierte Inhalte generiert): Keine Rechtsberatung; menschliche Endkontrolle obliegt dem Kunden.

### 17. Referenzen
Verwendung von **Name/Logo** des Kunden zu Referenzzwecken **nur nach vorheriger Zustimmung** des Kunden.

### 18. Änderungen der Bedingungen
(1) Der Anbieter kann Bedingungen mit **30 Tagen** Vorlauf ändern.  
(2) Der Kunde hat ein **Widerspruchsrecht**; setzt er die Nutzung nach dem Wirksamkeitsdatum fort, gelten Änderungen als akzeptiert. Bei Widerspruch: Sonderkündigungsrecht zum Wirksamkeitsdatum.

### 19. Mitteilungen
Rechtsverbindliche Mitteilungen erfolgen per **E‑Mail**, **In‑App‑Nachricht** oder **Post** an die zuletzt benannten Kontaktdaten.

### 20. Abwerbeverbot
Während der Laufzeit und **12 Monate** danach keine aktive Abwerbung von Kernmitarbeitenden der jeweils anderen Partei; angemessene Vertragsstrafe bei Verstoß.

### 21. Höhere Gewalt
Keine Haftung für Ausfälle durch Ereignisse außerhalb zumutbarer Kontrolle (z. B. Naturereignisse, Ausfälle Dritter, behördliche Maßnahmen).

### 22. Recht & Gerichtsstand
Anwendbares Recht: **deutsches Recht** (ohne Kollisionsnormen, ohne CISG). Gerichtsstand: **Sitz des Anbieters**.

### 23. Rangfolge
**MSA/AGB** > **Order Form/Auftragsdokument** > **AVV/DPA (Anlage 2)** > **SLA (Anlage 1)** > **AUP (Anlage 5)**.  
Das **EU Data Act Addendum (Anlage 7)** hat **nur insoweit Vorrang**, wie dies zur **Einhaltung des Data Act** erforderlich ist.

### 24. Schlussbestimmungen
Schriftform (inkl. E‑Sign), salvatorische Klausel, kein Verzicht durch Untätigkeit. Übertragungen nur mit Zustimmung, außer bei Konzernumstrukturierung.

---

## Anlage 1: Service-Level-Agreement (SLA)

### 1. Geltung
Dieses SLA gilt für zahlende Tarife des Dienstes (Beta ausgenommen, vgl. Anlage 6).

### 2. Verfügbarkeit
**Ziel‑Uptime:** **99,5 %** je **Kalendermonat**. **Betriebszeit**: 24×7.  
**Übergabepunkt:** **Routerausgang** des **[Hosting‑Providers]** des Anbieters.  
**Messpunkt/Referenz:** **[Status‑Seite/Monitoring‑System]**.  
**Nicht‑Verfügbarkeit** liegt vor, wenn der Haupt‑Funktionspfad > **5 aufeinanderfolgende Minuten** global nicht erreichbar ist.  
**Formel:** Verfügbarkeit = ([Betriebszeit – Ausfallzeit] / Betriebszeit) × 100.  
Ausgenommen sind **SLA‑Ausschlüsse**.

### 3. Service‑Credits
Unterschreitung der Ziel‑Uptime → **Monats‑Credit** auf das Nutzungsentgelt der betroffenen Instanz:  
- 99,49–99,0 % → **5 %**  
- 98,99–98,0 % → **10 %**  
- 97,99–97,0 % → **15 %**  
- < 97,0 % → **25 %**  
Credits sind **innerhalb von 30 Tagen** zu beantragen, nicht auszahlbar; **Deckel: 25 %** pro Monat.

### 4. Support & Reaktionszeiten
Supportzeiten: **werktags 9–17 Uhr CET** via **[Support‑E‑Mail/Helpdesk]**.  
**P1 (kritisch, Totalausfall):** **Reaktionszeit 24 Stunden**.  
**P2 (stark beeinträchtigt):** **2 Geschäftstage**.  
**P3 (normal):** **5 Geschäftstage**.

### 5. Wartung
**Geplante Wartung** mit mindestens **48 h** Vorankündigung (E‑Mail/In‑App). Wartungsausfälle zählen nicht als Nicht‑Verfügbarkeit.

### 6. SLA‑Ausschlüsse
Force Majeure, Ausfälle in **Kundennetzen/-systemen**, Drittanbieter außerhalb Einflussbereichs, Verstoß gegen AUP, Beta‑Funktionen, Test-/Sandbox‑Umgebungen.

---

## Anlage 2: Auftragsverarbeitungsvertrag (AVV/DPA) – Art. 28 DSGVO

### 1. Gegenstand, Dauer, Zweck
Verarbeitung personenbezogener Daten durch den Anbieter **ausschließlich** zur Bereitstellung des Dienstes für den Kunden; Dauer entspricht der Vertragslaufzeit.

### 2. Kategorien von Daten & Betroffenen
Vom Kunden bereitgestellte Daten (z. B. Stammdaten, Kommunikationsdaten, Inhaltsdaten); Betroffene: Mitarbeiter, Ansprechpartner, Endnutzer des Kunden. Besondere Kategorien nur, wenn ausdrücklich beauftragt.

### 3. Weisungsrecht
Der Anbieter verarbeitet nur auf dokumentierte Weisungen des Kunden; gesetzliche Pflichten bleiben unberührt.

### 4. Vertraulichkeit & Personal
Mitarbeiter sind auf Vertraulichkeit verpflichtet; Zugriff nach **least‑privilege**, **RBAC**, **MFA**.

### 5. Technische und organisatorische Maßnahmen (TOMs)
Gemäß **Anlage 3**. Anbieter hält TOMs auf dokumentiertem Niveau; wesentliche Änderungen nur, wenn Schutzniveau erhalten bleibt.

### 6. Unterauftragsverarbeiter
Zulässig gemäß **Anlage 4** (genehmigte Liste). Änderungen werden vorab mitgeteilt; Kunde kann binnen **[30] Tagen** widersprechen; ggf. Sonderkündigung.

### 7. Unterstützungspflichten
Anbieter unterstützt den Kunden **nach Aufwand/Rate** bei Betroffenenrechten, **DSFA**, Anfragen von Aufsichtsbehörden und bei Sicherheitsvorfällen.

### 8. Meldung von Verletzungen
Sicherheitsvorfälle werden **unverzüglich**, spätestens innerhalb von **48 Stunden**, an die benannte Kontaktstelle des Kunden gemeldet.

### 9. Datenstandort & Transfers
Primärer **Datenstandort EU/EWR**. **Keine Drittlandtransfers**; sollten sie zukünftig erforderlich werden, gelten vorab: **SCC 2021/914**, **TIA**, **zusätzliche Maßnahmen** (Verschlüsselung etc.).

### 10. Nachweise & Audits
Anbieter stellt geeignete Nachweise (z. B. Policies, Logs, Zertifikate, Pen‑Test‑Zusammenfassungen) bereit. **Remote‑Audit** mittels Fragebogen/Belegen; Vor‑Ort‑Audits nur bei berechtigtem Anlass, mit Vorlauf und **angemessener Kostentragung** durch den Kunden. **Frequenzlimit:** höchstens **1× pro Kalenderjahr**; weitere Audits nach Abstimmung und Kostenerstattung. **Ausschluss** von Informationen ohne Relevanz sowie Schutz von Geschäftsgeheimnissen/anderen Kunden.

### 11. Löschung & Rückgabe
Nach Vertragsende: **Export innerhalb von 30 Tagen** in **CSV/JSON** + Dateien; anschließend **Löschung** inkl. Backups nach Löschkonzept, soweit technisch zumutbar. Aufbewahrungspflichten gehen vor.

### 12. Subprozessoren außerhalb EU/EWR
Nur nach vorheriger Information und Abschluss der SCC; Kunde erhält die jeweils aktuelle Liste (Anlage 4/URL).

---

## Anlage 3: Technische und organisatorische Maßnahmen (TOMs)

**Schutzziele:** Vertraulichkeit, Integrität, Verfügbarkeit, Belastbarkeit.

- **Zugriff & Identität:** MFA, RBAC, least‑privilege, regelmäßige Re‑Zertifizierung von Rechten.  
- **Verschlüsselung:** TLS 1.2+ in Transit; **AES‑256 at Rest** (oder Cloud‑Äquivalent). Schlüsselrotation; getrennte Umgebungen.  
- **Netz & Plattform:** Firewalls, Security‑Groups, gehärtete Images, Patch‑Management, Anti‑Malware wo sinnvoll.  
- **Prozess & Monitoring:** Logging/SIEM, Alarmierung, Vier‑Augen‑Prinzip bei Produktivzugriffen.  
- **Backup & Recovery:** Tägliche Backups, regelmäßige Recovery‑Tests, definierte RPO/RTO.  
- **Secure‑SDLC:** Code‑Reviews, Dependency‑Scanning, Secrets‑Management.  
- **Incident‑Response:** Playbooks, Verantwortlichkeiten, Meldeprozesse (48 h).  
- **Lösch-/Aufbewahrung:** Löschkonzepte, Datenminimierung, Pseudonymisierung wo möglich.  
- **Lieferkette:** Bewertung Sub‑Prozessoren, vertragliche Zusagen, regelmäßige Reviews.

---

## Anlage 4: Liste der Sub‑Prozessoren

Bitte ausfüllen bzw. als URL pflegen:

| Anbieter | Zweck | Sitz | Datenstandort | Vertrag (SCC/AVV) |
| --- | --- | --- | --- | --- |
| [Cloud‑Provider] | Hosting | [EU‑Land] | EU | AVV |
| [E‑Mail/Helpdesk] | Support | [EU] | EU | AVV |
| … | … | … | … | … |

Änderungen werden mind. **30 Tage** vor Wirksamkeit mitgeteilt; Widerspruchsrecht siehe MSA/AVV.

---

## Anlage 5: Acceptable‑Use‑Policy (AUP)

- Keine rechtswidrigen Inhalte/Verwendungen, keine Verletzung von Rechten Dritter.  
- Kein Missbrauch (Spam, DDoS, Mining, unautorisierte Scans).  
- Kein Upload schädlicher Software/Code.  
- Keine **KI‑Modell‑Trainings** auf **Kundendaten** durch den Anbieter ohne separate Vereinbarung.  
- Export-/Sanktions‑Compliance ist einzuhalten.  
- Bei Verstoß kann der Anbieter den Zugang einschränken/sperren *(nur soweit rechtlich zulässig und vertraglich vereinbart).*  

---

## Anlage 6: Beta-/Early‑Access‑Bedingungen

- Beta‑Module werden **„as‑is“** bereitgestellt, **ohne SLA**; Funktionsänderungen jederzeit.  
- **Keine Service‑Credits**; Support nach Verfügbarkeit.  
- Kunde erteilt **Feedback‑Lizenz** wie in § 7.  
- Export der Beta‑Daten auf Anfrage jederzeit möglich; ansonsten gelten die allgemeinen Löschfristen.

---

## Anlage 7: EU Data Act Addendum (kurz)

**Version:** [Datum einfügen] **Bezug:** Verordnung (EU) 2023/2854 („**Data Act**“)  
Dieses Addendum ergänzt den Hauptvertrag (MSA/AGB). **Vorrang** hat es **nur**, soweit dies zur **Einhaltung des Data Act** erforderlich ist; im Übrigen gelten MSA/AGB.

### 1. Anwendungsbereich und Begriffe
1.1 Dieses Addendum gilt für die Bereitstellung des **[Produktname]** als **SaaS** gegenüber Kunden in der EU.  
1.2 **Exportierbare Daten** sind alle beim Kunden anfallenden oder vom Kunden erzeugten Daten (einschl. Metadaten), soweit nach Data Act übertragbar; **ausgenommen** sind Geschäftsgeheimnisse des Anbieters und Informationen, deren Offenlegung den Dienst oder die Sicherheit gefährden würde.

### 2. Wechsel (Switch) und Exit
2.1 **Einleitung.** Der Kunde kann mit **[30–90] Tagen** Vorlauf per Mitteilung an **[Kontaktadresse]** einen **Wechsel** zu einem anderen Anbieter oder einen **Exit** (ohne Wechsel) initiieren.  
2.2 **Format & Schnittstellen.** Der Anbieter stellt exportierbare Daten während der Übergangsphase in **gängigen, maschinenlesbaren und interoperablen Formaten** (mind. **CSV/JSON**, ggf. Dateien) über **Self‑Service** oder **bereitgestellte Schnittstellen** zur Verfügung.  
2.3 **Übergangszeit & Abruf.** Der Anbieter unterstützt den Wechsel **bis zu 30 Tagen** ab Mitteilung; auf begründete Anfrage kann die Unterstützung **angemessen verlängert** werden (max. **7 Monate**), soweit technisch erforderlich. Nach Abschluss der Unterstützung hat der Kunde **weitere 30 Tage** zum Datenabruf.  
2.4 **Löschung.** Nach Abschluss des Wechsels bzw. des Abrufs **löscht** der Anbieter exportierbare Daten gemäß Löschkonzept und bestätigt die Löschung, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen.

### 3. Sicherheit und Kontinuität
3.1 Während des Wechsels/Exits erbringt der Anbieter die vertraglichen Leistungen **mit der gebotenen Sorgfalt** fort und hält das **Sicherheitsniveau** aufrecht; bekannte Risiken einer Unterbrechung werden dem Kunden **klar kommuniziert**.  
3.2 Datenübertragungen erfolgen **verschlüsselt** und unter Anwendung der **TOMs** (Anlage 3).

### 4. Entgelte während des Wechsels
4.1 **Bis 12. Januar 2027** werden etwaige **Wechsel-/Exit‑Entgelte** **reduziert** bzw. **nicht berechnet**, soweit und solange dies der Data Act verlangt. Danach dürfen angemessene, **tatsächlich angefallene Aufwände** für **über den gesetzlichen Mindestumfang hinausgehende** Unterstützungsleistungen berechnet werden (**Stundensatz [€ …]**); reine **Daten‑Egress/-Exportgebühren** werden nicht erhoben.  
4.2 Bereits vertraglich vereinbarte **laufende Nutzungsentgelte** bleiben unberührt.

### 5. Drittlandsbezug / Anbieterwechsel
Wechsel zu Anbietern außerhalb der EU/EWR liegen in der **Verantwortung des Kunden** (insb. Datenschutz- und Exportkontroll‑Vorgaben). Der Anbieter unterstützt im **angemessenen Umfang** (Abschnitt 2/3), ohne eine rechtliche Bewertung der Zielumgebung zu schulden.

### 6. Sonstiges
6.1 Dieses Addendum begründet **keine Rechte am Quellcode**, keine Pflicht zur Offenlegung von **Geschäftsgeheimnissen** des Anbieters und keine Bereitstellung **proprietärer interner Tools**.  
6.2 Im Konfliktfall gehen **zwingende Data‑Act‑Vorgaben** den MSA/AGB vor; im Übrigen bleibt der Vertrag unverändert.  
6.3 **Behördenzugriffe & Transparenz**: Der Anbieter hält eine **Policy** zum Umgang mit behördlichen Zugriffsersuchen bereit (rechtliche Prüfung, Ablehnung unzulässiger Ersuchen, Benachrichtigung des Kunden soweit zulässig) und erstellt **aggregierte Transparenzberichte** über Ersuchen betreffend nicht‑personenbezogene Daten.

---

**Platzhalter-Checkliste (ausfüllen):**  
- [ ] Anbieter-Identität (Firma, HRB, USt‑IdNr., Anschrift, Vertretung)  
- [ ] Gerichtsstand (Sitz des Anbieters)  
- [ ] Support‑Kontakt (E‑Mail/Helpdesk/Hotline) & **Status‑Seite**  
- [ ] Sub‑Prozessoren‑Tabelle (Anlage 4) oder URL  
- [ ] Data‑Act‑Angaben (Anlage 7: Produktname, Kontaktadresse, Vorlauf [30–90 Tage], Stundensatz)

