import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Scale, Shield, Users, Clock, Euro, AlertTriangle, CheckCircle, Lock, Globe } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const AgbSoftware: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
        <title>AGB Software | Marsstein GmbH</title>
        <meta name="description" content="Allgemeine Geschäftsbedingungen für SaaS-Vertragswerk - B2B-Software von Marsstein GmbH" />
      </Helmet>
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Marsstein — SaaS-Vertragswerk</h1>

          <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
            <div className="text-sm text-gray-600 mb-8">
              <p className="font-semibold">Stand: 12. November 2025</p>
            </div>

            <section id="inhaltsverzeichnis">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="w-6 h-6 text-primary" />
                Inhaltsverzeichnis
              </h2>
              <div className="bg-gray-50 p-6 rounded-lg space-y-2">
                <ol className="list-decimal list-inside space-y-1 text-gray-700">
                  <li><a href="#hauptvertrag" className="hover:text-primary">Hauptvertrag (MSA/AGB)</a></li>
                  <li><a href="#anlage-1" className="hover:text-primary">Anlage 1: Service-Level-Agreement (SLA)</a></li>
                  <li><a href="#anlage-2" className="hover:text-primary">Anlage 2: Auftragsverarbeitungsvertrag (AVV/DPA)</a></li>
                  <li><a href="#anlage-3" className="hover:text-primary">Anlage 3: Technische und organisatorische Maßnahmen (TOMs)</a></li>
                  <li><a href="#anlage-4" className="hover:text-primary">Anlage 4: Liste der Sub-Prozessoren</a></li>
                  <li><a href="#anlage-5" className="hover:text-primary">Anlage 5: Acceptable-Use-Policy (AUP)</a></li>
                  <li><a href="#anlage-6" className="hover:text-primary">Anlage 6: Beta-/Early-Access-Bedingungen</a></li>
                </ol>
              </div>
            </section>

            <section id="hauptvertrag">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Scale className="w-7 h-7 text-primary" />
                Hauptvertrag (MSA/AGB)
              </h2>

              <div className="space-y-6">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-gray-700"><strong>zwischen</strong></p>
                  <p className="text-gray-700"><strong>Anbieter</strong>: Marsstein GmbH i.G., Bücklestraße 3, 78467 Konstanz, vertreten durch Geschäftsführer Zhihu Chen – „<strong>Anbieter</strong>" –</p>
                  <p className="text-gray-700"><strong>und</strong></p>
                  <p className="text-gray-700"><strong>[Kunde]</strong>: [Firma, Rechtsform, Anschrift] – „<strong>Kunde</strong>".</p>
                </div>

                <div id="1-präambel">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Präambel</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Der Anbieter stellt eine Cloud-Software („<strong>Dienst</strong>") als Software-as-a-Service (SaaS) bereit. Der Kunde nutzt den Dienst zu eigenen geschäftlichen Zwecken. Dieses Dokument regelt die vertraglichen Bedingungen einschließlich Lizenz, Laufzeit, Support, Haftung und Datenschutz.
                  </p>
                </div>

                <div id="2-begriffsbestimmungen">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Begriffsbestimmungen</h3>
                  <p className="text-gray-700 leading-relaxed">
                    „<strong>Verfügbarkeit</strong>", „<strong>Wartungsfenster</strong>", „<strong>Service-Credits</strong>" gemäß <strong>SLA (Anlage 1)</strong>.<br />
                    „<strong>Personenbezogene Daten</strong>", „<strong>Verarbeitung</strong>" gemäß DSGVO.<br />
                    „<strong>AUP</strong>" = Acceptable-Use-Policy (Anlage 5).
                  </p>
                </div>

                <div id="3-vertragsschluss">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Vertragsschluss & Einbeziehung</h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed">
                    <p>(1) <strong>Clickwrap</strong>: Der Kunde akzeptiert diese Bedingungen beim Registrieren durch aktives Anhaken („Ich stimme zu"). Der Anbieter protokolliert Zeitpunkt, Version und Benutzer.</p>
                    <p>(2) <strong>Enterprise-Option</strong>: Alternativ/zusätzlich kann eine Unterzeichnung (PDF/ESign) der Auftragsdokumentation/Order Form erfolgen.</p>
                    <p>(3) Vertragssprache: <strong>Deutsch & Englisch</strong>, bei Widersprüchen gilt <strong>Deutsch</strong>.</p>
                    <p>(4) Abweichende AGB des Kunden gelten nur bei ausdrücklicher, schriftlicher Zustimmung des Anbieters.</p>
                  </div>
                </div>

                <div id="4-leistungsumfang">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Leistungsumfang</h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed">
                    <p>(1) Der Anbieter gewährt eine <strong>nicht-exklusive, nicht übertragbare</strong> Nutzungsberechtigung am Dienst (SaaS).</p>
                    <p>(2) Funktionsumfang gemäß Leistungsbeschreibung/Order Form; Beta-Module separat in Anlage 6. <strong>Angaben zum Funktionsumfang sind keine Beschaffenheitsgarantien</strong>, es sei denn, sie sind <strong>ausdrücklich</strong> als solche bezeichnet.</p>
                    <p>(3) On-Premise ist nicht geschuldet; Quellcode wird nicht überlassen.</p>
                  </div>
                </div>

                <div id="4a-pflichten-des-kunden">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">4a. Pflichten des Kunden</h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed">
                    <p>(1) <strong>Zugang & Sicherheit</strong>: Der Kunde schützt Zugänge durch <strong>individuelle Passwörter</strong> und – soweit verfügbar – <strong>MFA</strong>; <strong>Weitergabe/Pooling</strong> von Zugangsdaten ist untersagt.</p>
                    <p>(2) <strong>Named-User/Seats</strong>: Die Nutzung erfolgt <strong>pro Named-User/Seat</strong>; je Seat darf nur <strong>eine</strong> natürliche Person gleichzeitig aktiv sein; Vertretungen sind zulässig, wenn keine <strong>gleichzeitige</strong> Nutzung erfolgt.</p>
                    <p>(3) <strong>Rechtskonformität</strong>: Der Kunde stellt sicher, dass Inhalte/Uploads <strong>rechtmäßig</strong> sind und über eine <strong>Rechtsgrundlage</strong> (z. B. Art. 6 DSGVO) verfügen; erforderliche <strong>Einwilligungen</strong> werden eingeholt.</p>
                    <p>(4) <strong>Mitwirkung</strong>: Der Kunde stellt erforderliche Informationen und eine <strong>Ansprechperson</strong> bereit und wirkt bei Analysen/Entstörungen mit.</p>
                    <p>(5) <strong>Fehlermeldungen</strong>: Mängel/Störungen werden <strong>unverzüglich</strong> mit <strong>nachvollziehbarer Beschreibung</strong> (Screenshots, Zeitpunkt, URL, Nutzer) an <strong>support@marsstein.ai</strong> gemeldet.</p>
                    <p>(6) <strong>Datensicherung</strong>: Zusätzlich zu Anbietersicherungen hält der Kunde – soweit geschäftlich/gesetzlich geboten – <strong>eigene Exporte/Backups</strong> vor.</p>
                    <p>(7) <strong>Schadsoftwarefreiheit</strong>: Dateien/Datenträger müssen <strong>frei von Schadcode</strong> sein; bei Verstoß <strong>Freistellung</strong> des Anbieters von Drittansprüchen; <strong>Mitverschulden</strong> des Kunden wird anspruchsmindernd berücksichtigt.</p>
                  </div>
                </div>

                <div id="5-nutzungsrechte">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Nutzungsrechte & Restriktionen (AUP-Kern)</h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed">
                    <p>(1) Nutzung nur im gesetzlichen Rahmen; keine sicherheitskritischen Hochrisiko-Szenarien.</p>
                    <p>(2) <strong>Verbot</strong>: unerlaubtes Scraping, Reverse Engineering (ausgenommen zwingendes Recht), Last-/Pen-Tests ohne Zustimmung.</p>
                    <p>(3) <strong>KI-Training</strong>: Der Anbieter trainiert <strong>keine</strong> Modelle auf <strong>Kundendaten</strong>, es sei denn, dies wird ausdrücklich vereinbart.</p>
                    <p>(4) <strong>Exportkontrolle/Sanktionen</strong>: Kunde verpflichtet sich zur Einhaltung einschlägiger Export- und Sanktionsvorgaben.</p>
                    <p>(5) <strong>Named-User-/Seat-Lizenz</strong>: Lizenzen sind personengebunden/seat-bezogen; <strong>Account‑Sharing</strong> ist untersagt; temporäre Vertretungen ohne Parallelnutzung sind zulässig.</p>
                    <p>(6) <strong>Account-Missbrauch</strong> kann zur <strong>sachgerechten Einschränkung/Sperrung</strong> führen (nur soweit rechtlich zulässig und unter Abwägung der Interessen des Kunden).</p>
                  </div>
                </div>

                <div id="6-open-source">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">6. Open-Source-Komponenten</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Enthaltene OSS-Bausteine werden <strong>„as‑is"</strong> bereitgestellt; Lizenzhinweise stellt der Anbieter bereit (z. B. Download-Liste). <strong>Soweit GPL‑Komponenten enthalten sind</strong>, stellt der Anbieter auf Anfrage den entsprechenden <strong>Quellcode</strong> bereit bzw. verweist auf die <strong>Download‑Quelle</strong>.
                  </p>
                </div>

                <div id="7-feedback">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">7. Feedback</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Der Kunde räumt dem Anbieter eine <strong>weltweite, zeitlich unbefristete, gebührenfreie, nicht-exklusive</strong> Lizenz zur Nutzung von Feedback ein (keine Pflicht zur Nutzung).
                  </p>
                </div>

                <div id="8-laufzeit">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" />
                    8. Laufzeit, Kündigung
                  </h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed">
                    <p>(1) <strong>Erstlaufzeit: 12 Monate</strong> ab Vertragsbeginn.</p>
                    <p>(2) <strong>Automatische Verlängerung</strong> um die jeweilige Vorperiode, sofern nicht mit <strong>30 Tagen</strong> Frist zum Periodenende gekündigt.</p>
                    <p>(3) Kündigung aus wichtigem Grund bleibt unberührt (z. B. wesentlicher Verstoß, Zahlungsverzug {'>'} 30 Tage, Insolvenz).</p>
                  </div>
                </div>

                <div id="9-preise">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Euro className="w-5 h-5 text-primary" />
                    9. Preise, Abrechnung, Zahlungsverzug
                  </h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed">
                    <p>(1) <strong>Abrechnung: jährlich im Voraus</strong>; Preise gemäß Order Form, zzgl. USt.</p>
                    <p>(2) <strong>Zahlung per Rechnung/Überweisung</strong> innerhalb von <strong>14 Tagen netto</strong>.</p>
                    <p>(3) <strong>Zahlungsverzug</strong>: <strong>Mahngebühren</strong> nach angemessenem Ermessen.</p>
                    <p>(4) <strong>Preisanpassungen</strong>: <strong>jährlich</strong> mit <strong>30 Tagen</strong> Vorlauf; Widerspruch → außerordentliche Kündigung bis Wirksamkeitsdatum. <em>(Optional: Indexierung nach VPI statt freier Anpassung.)</em></p>
                  </div>
                </div>

                <div id="10-service-level">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    10. Service-Level & Support
                  </h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed">
                    <p>(1) Service-Level gemäß <strong>SLA (Anlage 1)</strong>: <strong>99,5 % Uptime/Monat</strong>, Support <strong>werktags 9–17 Uhr CET</strong>, <strong>P1‑Reaktionszeit 24 h</strong>, geplante Wartung <strong>mit 48 h Vorankündigung</strong>.</p>
                    <p>(2) Service-Credits sind ausschließlicher Rechtsbehelf bei SLA‑Unterschreitung.</p>
                    <p>(3) <strong>Supportkanäle</strong>: <strong>support@marsstein.ai</strong> für P1‑Fälle.</p>
                  </div>
                </div>

                <div id="10a-gewährleistung">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">10a. Gewährleistung</h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed">
                    <p>(1) Der Anbieter hält den Dienst während der Laufzeit in einem zum <strong>vertragsgemäßen Gebrauch geeigneten Zustand</strong> und beseitigt <strong>wesentliche Mängel</strong> im Rahmen der <strong>Nacherfüllung</strong>.</p>
                    <p>(2) <strong>Nacherfüllung</strong>: Bei wesentlichen Mängeln stehen dem Anbieter mindestens <strong>zwei</strong> Nachbesserungsversuche zu; zumutbare <strong>Workarounds</strong> sind zulässig.</p>
                    <p>(3) Die <strong>verschuldensunabhängige Haftung</strong> für anfängliche Mängel gemäß <strong>§ 536a Abs. 1 Alt. 1 BGB</strong> ist <strong>ausgeschlossen</strong>.</p>
                    <p>(4) <strong>Verjährung</strong>: Mängelansprüche verjähren in <strong>12 Monaten</strong> ab Kenntnis bzw. grob fahrlässiger Unkenntnis, soweit gesetzlich zulässig; unberührt bleiben Ansprüche nach § 15 Abs. 1.</p>
                  </div>
                </div>

                <div id="11-datenschutz">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-primary" />
                    11. Datenschutz – Verweis auf AVV
                  </h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed">
                    <p>(1) Rollenmodell: <strong>Kunde = Verantwortlicher</strong>, <strong>Anbieter = Auftragsverarbeiter</strong>.</p>
                    <p>(2) <strong>AVV/DPA (Anlage 2)</strong> ist Bestandteil dieses Vertrags; <strong>TOMs (Anlage 3)</strong> und <strong>Subprozessoren (Anlage 4)</strong> gelten vereinbart.</p>
                    <p>(3) <strong>Datenstandort: EU/EWR-only</strong>. Drittlandtransfers finden nicht statt; falls künftig erforderlich, gelten <strong>SCC 2021/914</strong> + TIA + Zusatzmaßnahmen vorab (siehe AVV).</p>
                  </div>
                </div>

                <div id="12-subunternehmer">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">12. Subunternehmer</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Einsatz gelisteter <strong>Sub‑Prozessoren</strong> ist vorab genehmigt. Änderungen: Information per E‑Mail/In‑App; <strong>Widerspruchsrecht</strong> innerhalb <strong>30 Tagen</strong>; bei fortbestehendem Widerspruch Sonderkündigungsrecht des Kunden.
                  </p>
                </div>

                <div id="13-vertraulichkeit">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    13. Vertraulichkeit
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Beiderseitige Geheimhaltung von Geschäfts-/Betriebsgeheimnissen, mind. 3 Jahre nach Vertragsende.
                  </p>
                </div>

                <div id="14-schutzrechte">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">14. Schutzrechte & Freistellung</h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed">
                    <p>(1) <strong>IP-Inhaberschaft</strong>: Sämtliche Rechte am Dienst verbleiben beim Anbieter; der Kunde erhält das vereinbarte Nutzungsrecht.</p>
                    <p>(2) <strong>IP-Freistellung</strong>: Der Anbieter verteidigt den Kunden gegen Drittansprüche wegen Verletzung gewerblicher Schutzrechte durch den Dienst und stellt von gerichtlich auferlegten Kosten frei (Voraussetzungen: unverzügliche Anzeige, Verteidigungshoheit, Mitwirkung).</p>
                  </div>
                </div>

                <div id="15-haftung">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                    15. Haftung (neu gefasst)
                  </h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed">
                    <p>1. <strong>Unbeschränkte Haftung.</strong> Der Anbieter haftet unbeschränkt (i) bei <strong>Vorsatz</strong>, (ii) für <strong>Schäden aus der Verletzung von Leben, Körper oder Gesundheit</strong>, sowie (iii) nach dem <strong>Produkthaftungsgesetz</strong>.</p>
                    <p>2. <strong>Grobe Fahrlässigkeit.</strong> Bei <strong>grober Fahrlässigkeit</strong> haftet der Anbieter dem Grunde nach; der <strong>Haftungsbetrag</strong> ist – außer in den Fällen von Abs. 1 – auf den <strong>vertragstypischen, vorhersehbaren Schaden</strong> <strong>und</strong> auf den <strong>Haftungshöchstbetrag gemäß Abs. 4</strong> begrenzt.</p>
                    <p>3. <strong>Einfache Fahrlässigkeit / Kardinalpflichten.</strong> Bei <strong>einfach fahrlässiger</strong> Verletzung <strong>vertragswesentlicher Pflichten (Kardinalpflichten)</strong> ist die Haftung auf den <strong>vertragstypischen, vorhersehbaren Schaden</strong> <strong>und</strong> den <strong>Haftungshöchstbetrag gemäß Abs. 4</strong> begrenzt; im Übrigen ist sie ausgeschlossen. Kardinalpflichten sind solche Pflichten, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung die Parteien regelmäßig vertrauen dürfen.</p>
                    <p>4. <strong>Haftungshöchstbetrag (Cap).</strong> Vorbehaltlich Abs. 1 ist die <strong>Gesamthaftung</strong> des Anbieters aus und im Zusammenhang mit diesem Vertrag pro Vertragsjahr auf <strong>100 % der vom Kunden in den letzten 12 Monaten vor dem Schadensereignis gezahlten Entgelte</strong> (bei kürzerer Vertragsdauer anteilig) begrenzt.</p>
                    <p>5. <strong>Ausschluss indirekter Schäden.</strong> <strong>Mittelbare Schäden</strong> und <strong>Folgeschäden</strong> (einschließlich entgangenem Gewinn, Produktions-/Nutzungsausfall, Datenwiederherstellung außerhalb der in § 11/Anlage 3 geregelten Sicherungen) sind <strong>ausgeschlossen</strong>, soweit gesetzlich zulässig.</p>
                    <p>6. <strong>Mitverschulden / Schadensminderung.</strong> Ein Mitverschulden des Kunden (z. B. Verstoß gegen AUP, unterlassene Datensicherung, unzureichende Mitwirkung) ist anspruchsmindernd zu berücksichtigen. Beide Parteien sind verpflichtet, Schäden im Rahmen des Zumutbaren abzuwenden bzw. zu mindern.</p>
                    <p>7. <strong>Verjährung.</strong> Vertragliche Schadensersatzansprüche verjähren in <strong>12 Monaten</strong> ab Kenntnis bzw. grob fahrlässiger Unkenntnis des anspruchsbegründenden Umstands, soweit gesetzlich zulässig; unberührt bleiben Ansprüche nach Abs. 1.</p>
                  </div>
                </div>

                <div id="15a-datenschutz-haftung">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">15a. Datenschutz-spezifische Haftung</h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed">
                    <p>1. <strong>Parteieninterne Risikoverteilung.</strong> Die <strong>gesetzliche Haftung nach Art. 82 DSGVO</strong> gegenüber betroffenen Personen bleibt unberührt. <strong>Zwischen den Parteien</strong> gilt: Für <strong>datenschutzrechtliche Pflichtverletzungen</strong> des Anbieters haftet dieser <strong>innerhalb des Haftungshöchstbetrags (§ 15 Abs. 4)</strong>, es sei denn, es liegt <strong>Vorsatz</strong> oder <strong>grobe Fahrlässigkeit</strong> vor oder ein Fall des § 15 Abs. 1.</p>
                    <p>2. <strong>Behördliche Geldbußen.</strong> <strong>Behördliche Geldbußen</strong> werden vom Anbieter <strong>nicht</strong> ersetzt, <strong>es sei denn</strong> die Geldbuße beruht <strong>ausschließlich</strong> auf einem vom Anbieter zu vertretenden Verstoß; in diesem Fall nur <strong>soweit gesetzlich zulässig</strong> und <strong>höchstens bis zum Haftungshöchstbetrag</strong> nach § 15 Abs. 4.</p>
                    <p>3. <strong>Mitwirkung / Regress.</strong> Trägt der Kunde zur Entstehung eines Datenschutzschadens oder einer Geldbuße bei (z. B. fehlerhafte Weisung, fehlende Rechtsgrundlage, unterlassene Information), mindert dies die Haftung des Anbieters entsprechend. Ansprüche aus Innenausgleich/Regress bleiben vorbehalten.</p>
                    <p>4. <strong>Primat der AVV.</strong> Im Übrigen gilt die <strong>Auftragsverarbeitungs‑Vereinbarung (Anlage 2)</strong>; abweichende Haftungsregelungen dort gehen für rein auftragsverarbeitungsbezogene Sachverhalte vor.</p>
                  </div>
                </div>

                <div id="16-compliance">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">16. Compliance</h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed">
                    <p>(1) <strong>Exportkontrolle/Sanktionen</strong> und <strong>Anti‑Korruptions‑Klausel</strong> gelten.</p>
                    <p>(2) <strong>KI‑Output‑Hinweis</strong> (falls der Dienst KI‑basierte Inhalte generiert): Keine Rechtsberatung; menschliche Endkontrolle obliegt dem Kunden.</p>
                  </div>
                </div>

                <div id="17-referenzen">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">17. Referenzen</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Verwendung von <strong>Name/Logo</strong> des Kunden zu Referenzzwecken <strong>nur nach vorheriger Zustimmung</strong> des Kunden.
                  </p>
                </div>

                <div id="18-änderungen">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">18. Änderungen der Bedingungen</h3>
                  <div className="space-y-2 text-gray-700 leading-relaxed">
                    <p>(1) Der Anbieter kann Bedingungen mit <strong>30 Tagen</strong> Vorlauf ändern.</p>
                    <p>(2) Der Kunde hat ein <strong>Widerspruchsrecht</strong>; setzt er die Nutzung nach dem Wirksamkeitsdatum fort, gelten Änderungen als akzeptiert. Bei Widerspruch: Sonderkündigungsrecht zum Wirksamkeitsdatum.</p>
                  </div>
                </div>

                <div id="19-mitteilungen">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">19. Mitteilungen</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Rechtsverbindliche Mitteilungen erfolgen per <strong>E‑Mail</strong>, <strong>In‑App‑Nachricht</strong> oder <strong>Post</strong> an die zuletzt benannten Kontaktdaten.
                  </p>
                </div>

                <div id="20-abwerbeverbot">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">20. Abwerbeverbot</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Während der Laufzeit und <strong>12 Monate</strong> danach keine aktive Abwerbung von Kernmitarbeitenden der jeweils anderen Partei; angemessene Vertragsstrafe bei Verstoß.
                  </p>
                </div>

                <div id="21-höhere-gewalt">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">21. Höhere Gewalt</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Keine Haftung für Ausfälle durch Ereignisse außerhalb zumutbarer Kontrolle (z. B. Naturereignisse, Ausfälle Dritter, behördliche Maßnahmen).
                  </p>
                </div>

                <div id="22-recht">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    22. Recht & Gerichtsstand
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Anwendbares Recht: <strong>deutsches Recht</strong> (ohne Kollisionsnormen, ohne CISG). Gerichtsstand: <strong>Sitz des Anbieters</strong>.
                  </p>
                </div>

                <div id="23-rangfolge">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">23. Rangfolge</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>MSA/AGB</strong> {'>'} <strong>Order Form/Auftragsdokument</strong> {'>'} <strong>AVV/DPA (Anlage 2)</strong> {'>'} <strong>SLA (Anlage 1)</strong> {'>'} <strong>AUP (Anlage 5)</strong>.
                  </p>
                </div>

                <div id="24-schlussbestimmungen">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">24. Schlussbestimmungen</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Schriftform (inkl. E‑Sign), salvatorische Klausel, kein Verzicht durch Untätigkeit. Übertragungen nur mit Zustimmung, außer bei Konzernumstrukturierung.
                  </p>
                </div>
              </div>
            </section>

            <section id="anlage-1" className="pt-8 border-t-2 border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <CheckCircle className="w-7 h-7 text-primary" />
                Anlage 1: Service-Level-Agreement (SLA)
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Geltung</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dieses SLA gilt für zahlende Tarife des Dienstes (Beta ausgenommen, vgl. Anlage 6).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Verfügbarkeit</h3>
                  <div className="text-gray-700 leading-relaxed space-y-2">
                    <p><strong>Ziel‑Uptime:</strong> <strong>99,5 %</strong> je <strong>Kalendermonat</strong>. <strong>Betriebszeit</strong>: 24×7.</p>
                    <p><strong>Übergabepunkt:</strong> <strong>Routerausgang</strong> des <strong>AWS</strong> des Anbieters.</p>
                    <p><strong>Messpunkt/Referenz:</strong> <strong>status.marsstein.ai</strong>.</p>
                    <p><strong>Nicht‑Verfügbarkeit</strong> liegt vor, wenn der Haupt‑Funktionspfad {'>'} <strong>5 aufeinanderfolgende Minuten</strong> global nicht erreichbar ist.</p>
                    <p><strong>Formel:</strong> Verfügbarkeit = ([Betriebszeit – Ausfallzeit] / Betriebszeit) × 100.</p>
                    <p>Ausgenommen sind <strong>SLA‑Ausschlüsse</strong>.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Service‑Credits</h3>
                  <div className="text-gray-700 leading-relaxed space-y-2">
                    <p>Unterschreitung der Ziel‑Uptime → <strong>Monats‑Credit</strong> auf das Nutzungsentgelt der betroffenen Instanz:</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li>99,49–99,0 % → <strong>5 %</strong></li>
                      <li>98,99–98,0 % → <strong>10 %</strong></li>
                      <li>97,99–97,0 % → <strong>15 %</strong></li>
                      <li>{'<'} 97,0 % → <strong>25 %</strong></li>
                    </ul>
                    <p>Credits sind <strong>innerhalb von 30 Tagen</strong> zu beantragen, nicht auszahlbar; <strong>Deckel: 25 %</strong> pro Monat.</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Support & Reaktionszeiten</h3>
                  <div className="text-gray-700 leading-relaxed space-y-2">
                    <p>Supportzeiten: <strong>werktags 9–17 Uhr CET</strong> via <strong>support@marsstein.ai</strong>.</p>
                    <ul className="list-disc list-inside ml-4 space-y-1">
                      <li><strong>P1 (kritisch, Totalausfall):</strong> <strong>Reaktionszeit 24 Stunden</strong>.</li>
                      <li><strong>P2 (stark beeinträchtigt):</strong> <strong>2 Geschäftstage</strong>.</li>
                      <li><strong>P3 (normal):</strong> <strong>5 Geschäftstage</strong>.</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Wartung</h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>Geplante Wartung</strong> mit mindestens <strong>48 h</strong> Vorankündigung (E‑Mail/In‑App). Wartungsausfälle zählen nicht als Nicht‑Verfügbarkeit.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">6. SLA‑Ausschlüsse</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Force Majeure, Ausfälle in <strong>Kundennetzen/-systemen</strong>, Drittanbieter außerhalb Einflussbereichs, Verstoß gegen AUP, Beta‑Funktionen, Test-/Sandbox‑Umgebungen.
                  </p>
                </div>
              </div>
            </section>

            <section id="anlage-2" className="pt-8 border-t-2 border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Shield className="w-7 h-7 text-primary" />
                Anlage 2: Auftragsverarbeitungsvertrag (AVV/DPA) – Art. 28 DSGVO
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Gegenstand, Dauer, Zweck</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Verarbeitung personenbezogener Daten durch den Anbieter <strong>ausschließlich</strong> zur Bereitstellung des Dienstes für den Kunden; Dauer entspricht der Vertragslaufzeit.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Kategorien von Daten & Betroffenen</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Vom Kunden bereitgestellte Daten (z. B. Stammdaten, Kommunikationsdaten, Inhaltsdaten); Betroffene: Mitarbeiter, Ansprechpartner, Endnutzer des Kunden. Besondere Kategorien nur, wenn ausdrücklich beauftragt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Weisungsrecht</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Der Anbieter verarbeitet nur auf dokumentierte Weisungen des Kunden; gesetzliche Pflichten bleiben unberührt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Vertraulichkeit & Personal</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Mitarbeiter sind auf Vertraulichkeit verpflichtet; Zugriff nach <strong>least‑privilege</strong>, <strong>RBAC</strong>, <strong>MFA</strong>.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Technische und organisatorische Maßnahmen (TOMs)</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Gemäß <strong>Anlage 3</strong>. Anbieter hält TOMs auf dokumentiertem Niveau; wesentliche Änderungen nur, wenn Schutzniveau erhalten bleibt.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">6. Unterauftragsverarbeiter</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Zulässig gemäß <strong>Anlage 4</strong> (genehmigte Liste). Änderungen werden vorab mitgeteilt; Kunde kann binnen <strong>30 Tagen</strong> widersprechen; ggf. Sonderkündigung.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">7. Unterstützungspflichten</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Anbieter unterstützt den Kunden <strong>nach Aufwand/Rate</strong> bei Betroffenenrechten, <strong>DSFA</strong>, Anfragen von Aufsichtsbehörden und bei Sicherheitsvorfällen.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">8. Meldung von Verletzungen</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Sicherheitsvorfälle werden <strong>unverzüglich</strong>, spätestens innerhalb von <strong>48 Stunden</strong>, an die benannte Kontaktstelle des Kunden gemeldet.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">9. Datenstandort & Transfers</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Primärer <strong>Datenstandort EU/EWR</strong>. <strong>Keine Drittlandtransfers</strong>; sollten sie zukünftig erforderlich werden, gelten vorab: <strong>SCC 2021/914</strong>, <strong>TIA</strong>, <strong>zusätzliche Maßnahmen</strong> (Verschlüsselung etc.).
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">10. Nachweise & Audits</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Anbieter stellt geeignete Nachweise (z. B. Policies, Logs, Zertifikate, Pen‑Test‑Zusammenfassungen) bereit. <strong>Remote‑Audit</strong> mittels Fragebogen/Belegen; Vor‑Ort‑Audits nur bei berechtigtem Anlass, mit Vorlauf und <strong>angemessener Kostentragung</strong> durch den Kunden. <strong>Frequenzlimit:</strong> höchstens <strong>1× pro Kalenderjahr</strong>; weitere Audits nach Abstimmung und Kostenerstattung. <strong>Ausschluss</strong> von Informationen ohne Relevanz sowie Schutz von Geschäftsgeheimnissen/anderen Kunden.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">11. Löschung & Rückgabe</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nach Vertragsende: <strong>Export innerhalb von 30 Tagen</strong> in <strong>CSV/JSON</strong> + Dateien; anschließend <strong>Löschung</strong> inkl. Backups nach Löschkonzept, soweit technisch zumutbar. Aufbewahrungspflichten gehen vor.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">12. Subprozessoren außerhalb EU/EWR</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Nur nach vorheriger Information und Abschluss der SCC; Kunde erhält die jeweils aktuelle Liste (Anlage 4/URL).
                  </p>
                </div>
              </div>
            </section>

            <section id="anlage-3" className="pt-8 border-t-2 border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Lock className="w-7 h-7 text-primary" />
                Anlage 3: Technische und organisatorische Maßnahmen (TOMs)
              </h2>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Schutzziele:</strong> Vertraulichkeit, Integrität, Verfügbarkeit, Belastbarkeit.
                </p>

                <ul className="space-y-3 text-gray-700 leading-relaxed">
                  <li><strong>Zugriff & Identität:</strong> MFA, RBAC, least‑privilege, regelmäßige Re‑Zertifizierung von Rechten.</li>
                  <li><strong>Verschlüsselung:</strong> TLS 1.2+ in Transit; <strong>AES‑256 at Rest</strong> (oder Cloud‑Äquivalent). Schlüsselrotation; getrennte Umgebungen.</li>
                  <li><strong>Netz & Plattform:</strong> Firewalls, Security‑Groups, gehärtete Images, Patch‑Management, Anti‑Malware wo sinnvoll.</li>
                  <li><strong>Prozess & Monitoring:</strong> Logging/SIEM, Alarmierung, Vier‑Augen‑Prinzip bei Produktivzugriffen.</li>
                  <li><strong>Backup & Recovery:</strong> Tägliche Backups, regelmäßige Recovery‑Tests, definierte RPO/RTO.</li>
                  <li><strong>Secure‑SDLC:</strong> Code‑Reviews, Dependency‑Scanning, Secrets‑Management.</li>
                  <li><strong>Incident‑Response:</strong> Playbooks, Verantwortlichkeiten, Meldeprozesse (48 h).</li>
                  <li><strong>Lösch-/Aufbewahrung:</strong> Löschkonzepte, Datenminimierung, Pseudonymisierung wo möglich.</li>
                  <li><strong>Lieferkette:</strong> Bewertung Sub‑Prozessoren, vertragliche Zusagen, regelmäßige Reviews.</li>
                </ul>
              </div>
            </section>

            <section id="anlage-4" className="pt-8 border-t-2 border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="w-7 h-7 text-primary" />
                Anlage 4: Liste der Sub‑Prozessoren
              </h2>

              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Bitte ausfüllen bzw. als URL pflegen:
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-gray-50 border border-gray-300 rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 border-b text-left text-gray-700 font-semibold">Anbieter</th>
                        <th className="px-4 py-2 border-b text-left text-gray-700 font-semibold">Zweck</th>
                        <th className="px-4 py-2 border-b text-left text-gray-700 font-semibold">Sitz</th>
                        <th className="px-4 py-2 border-b text-left text-gray-700 font-semibold">Datenstandort</th>
                        <th className="px-4 py-2 border-b text-left text-gray-700 font-semibold">Vertrag (SCC/AVV)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2 border-b text-gray-700">Amazon Web Services (AWS)</td>
                        <td className="px-4 py-2 border-b text-gray-700">Hosting & Infrastructure</td>
                        <td className="px-4 py-2 border-b text-gray-700">Deutschland</td>
                        <td className="px-4 py-2 border-b text-gray-700">EU (Frankfurt)</td>
                        <td className="px-4 py-2 border-b text-gray-700">AVV</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 text-gray-700">…</td>
                        <td className="px-4 py-2 text-gray-700">…</td>
                        <td className="px-4 py-2 text-gray-700">…</td>
                        <td className="px-4 py-2 text-gray-700">…</td>
                        <td className="px-4 py-2 text-gray-700">…</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-gray-700 leading-relaxed">
                  Änderungen werden mind. <strong>30 Tage</strong> vor Wirksamkeit mitgeteilt; Widerspruchsrecht siehe MSA/AVV.
                </p>
              </div>
            </section>

            <section id="anlage-5" className="pt-8 border-t-2 border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <AlertTriangle className="w-7 h-7 text-primary" />
                Anlage 5: Acceptable‑Use‑Policy (AUP)
              </h2>

              <ul className="space-y-3 text-gray-700 leading-relaxed list-disc list-inside">
                <li>Keine rechtswidrigen Inhalte/Verwendungen, keine Verletzung von Rechten Dritter.</li>
                <li>Kein Missbrauch (Spam, DDoS, Mining, unautorisierte Scans).</li>
                <li>Kein Upload schädlicher Software/Code.</li>
                <li>Keine <strong>KI‑Modell‑Trainings</strong> auf <strong>Kundendaten</strong> durch den Anbieter ohne separate Vereinbarung.</li>
                <li>Export-/Sanktions‑Compliance ist einzuhalten.</li>
                <li>Bei Verstoß kann der Anbieter den Zugang einschränken/sperren <em>(nur soweit rechtlich zulässig und vertraglich vereinbart).</em></li>
              </ul>
            </section>

            <section id="anlage-6" className="pt-8 border-t-2 border-gray-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Anlage 6: Beta-/Early‑Access‑Bedingungen</h2>

              <ul className="space-y-3 text-gray-700 leading-relaxed list-disc list-inside">
                <li>Beta‑Module werden <strong>„as‑is"</strong> bereitgestellt, <strong>ohne SLA</strong>; Funktionsänderungen jederzeit.</li>
                <li><strong>Keine Service‑Credits</strong>; Support nach Verfügbarkeit.</li>
                <li>Kunde erteilt <strong>Feedback‑Lizenz</strong> wie in § 7.</li>
                <li>Export der Beta‑Daten auf Anfrage jederzeit möglich; ansonsten gelten die allgemeinen Löschfristen.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AgbSoftware;
