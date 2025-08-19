import React from 'react';
import { Shield, Lock, UserCheck, Mail, Globe, Server, FileText, AlertTriangle } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Datenschutz: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Datenschutzerklärung</h1>

        <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
          {/* Einleitung */}
          <section>
            <p className="text-gray-700 leading-relaxed mb-4">
              Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer Onlinepräsenzen, wie z.B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet als "Onlineangebot").
            </p>
            <p className="text-gray-600 text-sm">
              Stand: {new Date().toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </section>

          {/* Verantwortlicher */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <UserCheck className="w-6 h-6 text-primary" />
              Verantwortlicher
            </h2>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">Zhihu Chen</p>
              <p className="text-gray-700">Jakobstr. 10</p>
              <p className="text-gray-700">78464 Konstanz</p>
              <p className="text-gray-700 mt-2">E-Mail: jayson@marsstein.ai</p>
            </div>
          </section>

          {/* Übersicht der Verarbeitungen */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6 text-primary" />
              Übersicht der Verarbeitungen
            </h2>
            <p className="text-gray-700 mb-4">
              Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer Verarbeitung zusammen und verweist auf die betroffenen Personen.
            </p>
            
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Arten der verarbeiteten Daten</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Bestandsdaten (z.B. Namen, Adressen)</li>
                  <li>Kontaktdaten (z.B. E-Mail, Telefonnummern)</li>
                  <li>Inhaltsdaten (z.B. Eingaben in Onlineformularen)</li>
                  <li>Nutzungsdaten (z.B. besuchte Webseiten, Interesse an Inhalten, Zugriffszeiten)</li>
                  <li>Meta-/Kommunikationsdaten (z.B. Geräte-Informationen, IP-Adressen)</li>
                  <li>Beschäftigtendaten (z.B. Berufsbezeichnung, Abteilung)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Kategorien betroffener Personen</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Interessenten</li>
                  <li>Kommunikationspartner</li>
                  <li>Nutzer (z.B. Webseitenbesucher, Nutzer von Onlinediensten)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">Zwecke der Verarbeitung</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Kontaktanfragen und Kommunikation</li>
                  <li>Verwaltung und Beantwortung von Anfragen</li>
                  <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
                  <li>Direktmarketing (z.B. per E-Mail)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Rechtsgrundlagen */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6 text-primary" />
              Maßgebliche Rechtsgrundlagen
            </h2>
            <p className="text-gray-700 mb-4">
              Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben in Ihrem bzw. unserem Wohn- oder Sitzland gelten können.
            </p>

            <div className="space-y-3">
              <div className="border-l-4 border-primary pl-4">
                <p className="font-semibold text-gray-800">Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</p>
                <p className="text-gray-600 text-sm">Die betroffene Person hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten für einen spezifischen Zweck oder mehrere bestimmte Zwecke gegeben.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <p className="font-semibold text-gray-800">Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO)</p>
                <p className="text-gray-600 text-sm">Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich.</p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <p className="font-semibold text-gray-800">Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</p>
                <p className="text-gray-600 text-sm">Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen oder eines Dritten erforderlich.</p>
              </div>
            </div>
          </section>

          {/* Sicherheitsmaßnahmen */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Lock className="w-6 h-6 text-primary" />
              Sicherheitsmaßnahmen
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der unterschiedlichen Eintrittswahrscheinlichkeit und des Ausmaßes der Bedrohung der Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
            </p>
            <p className="text-gray-700 mt-3">
              Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung der Verfügbarkeit und ihrer Trennung.
            </p>
          </section>

          {/* Übermittlung von Daten */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Globe className="w-6 h-6 text-primary" />
              Übermittlung von personenbezogenen Daten
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass die Daten an andere Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt oder sie ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z.B. mit IT-Aufgaben beauftragte Dienstleister oder Anbieter von Diensten und Inhalten, die in eine Webseite eingebunden werden, gehören. In solchen Fall beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.
            </p>
          </section>

          {/* Internationale Datentransfers */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Server className="w-6 h-6 text-primary" />
              Datenverarbeitung in Drittländern
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Sofern wir Daten in einem Drittland (d.h., außerhalb der Europäischen Union (EU), des Europäischen Wirtschaftsraums (EWR)) verarbeiten oder die Verarbeitung im Rahmen der Inanspruchnahme von Diensten Dritter oder der Offenlegung bzw. Übermittlung von Daten an andere Personen, Stellen oder Unternehmen stattfindet, erfolgt dies nur im Einklang mit den gesetzlichen Vorgaben.
            </p>
          </section>

          {/* Löschung von Daten */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-primary" />
              Löschung von Daten
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Die von uns verarbeiteten Daten werden nach Maßgabe der gesetzlichen Vorgaben gelöscht, sobald deren zur Verarbeitung erlaubten Einwilligungen widerrufen werden oder sonstige Erlaubnisse entfallen (z.B. wenn der Zweck der Verarbeitung dieser Daten entfallen ist oder sie für den Zweck nicht erforderlich sind).
            </p>
            <p className="text-gray-700 mt-3">
              Sofern die Daten nicht gelöscht werden, weil sie für andere und gesetzlich zulässige Zwecke erforderlich sind, wird deren Verarbeitung auf diese Zwecke beschränkt. D.h., die Daten werden gesperrt und nicht für andere Zwecke verarbeitet.
            </p>
          </section>

          {/* Kontaktaufnahme */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <Mail className="w-6 h-6 text-primary" />
              Kontaktaufnahme
            </h2>
            <p className="text-gray-700 mb-4">
              Bei der Kontaktaufnahme mit uns (z.B. per Kontaktformular, E-Mail, Telefon oder via soziale Medien) werden die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
            </p>

            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Verarbeitete Daten im Kontaktformular:</h3>
              <ul className="list-disc list-inside text-blue-800 space-y-1">
                <li>Vorname und Nachname</li>
                <li>E-Mail-Adresse</li>
                <li>Telefonnummer (optional)</li>
                <li>Firma/Unternehmen</li>
                <li>Position/Jobtitel (optional)</li>
                <li>Anzahl der Mitarbeiter (optional)</li>
                <li>Nachrichteninhalt</li>
                <li>Newsletter-Anmeldung (optional)</li>
              </ul>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-gray-700"><strong>Zwecke:</strong> Kontaktanfragen und Kommunikation, Verwaltung und Beantwortung von Anfragen</p>
              <p className="text-gray-700"><strong>Rechtsgrundlagen:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b) DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f) DSGVO)</p>
            </div>
          </section>

          {/* Newsletter */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Newsletter und elektronische Benachrichtigungen</h2>
            <p className="text-gray-700 mb-4">
              Wir versenden Newsletter, E-Mails und weitere elektronische Benachrichtigungen (nachfolgend "Newsletter") nur mit der Einwilligung der Empfänger oder einer gesetzlichen Erlaubnis.
            </p>
            
            <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
              <p className="text-yellow-800">
                <strong>Double-Opt-In:</strong> Die Anmeldung zu unserem Newsletter erfolgt in einem sogenannten Double-Opt-In-Verfahren. Sie erhalten nach der Anmeldung eine E-Mail, in der Sie um die Bestätigung Ihrer Anmeldung gebeten werden.
              </p>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-gray-700"><strong>Inhalte:</strong> Informationen zu unseren Leistungen, Compliance-Updates, Veranstaltungen</p>
              <p className="text-gray-700"><strong>Rechtsgrundlagen:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)</p>
              <p className="text-gray-700"><strong>Widerrufsmöglichkeiten:</strong> Sie können den Empfang unseres Newsletters jederzeit kündigen, d.h. Ihre Einwilligungen widerrufen, bzw. dem weiteren Empfang widersprechen. Einen Link zur Kündigung des Newsletters finden Sie am Ende eines jeden Newsletters.</p>
            </div>
          </section>

          {/* Dienste und Provider */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Eingesetzte Dienste und Diensteanbieter</h2>
            
            <div className="space-y-4">
              <div className="border-l-4 border-gray-300 pl-4">
                <h3 className="font-semibold text-gray-800">EmailJS</h3>
                <p className="text-gray-600">Versand von E-Mails über Kontaktformular</p>
                <p className="text-gray-600 text-sm">Anbieter: EmailJS, Datenschutzerklärung: https://www.emailjs.com/legal/privacy-policy/</p>
              </div>
            </div>
          </section>

          {/* Rechte der betroffenen Personen */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Rechte der betroffenen Personen</h2>
            <p className="text-gray-700 mb-4">
              Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">Widerspruchsrecht</p>
                  <p className="text-gray-600 text-sm">Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden personenbezogenen Daten Widerspruch einzulegen.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">Widerrufsrecht bei Einwilligungen</p>
                  <p className="text-gray-600 text-sm">Sie haben das Recht, erteilte Einwilligungen jederzeit zu widerrufen.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">Auskunftsrecht</p>
                  <p className="text-gray-600 text-sm">Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">Berichtigungsrecht</p>
                  <p className="text-gray-600 text-sm">Sie haben das Recht, die Berichtigung oder Vervollständigung Sie betreffender unrichtiger oder unvollständiger Daten zu verlangen.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">Löschungsrecht</p>
                  <p className="text-gray-600 text-sm">Sie haben das Recht, die unverzügliche Löschung Sie betreffender Daten zu verlangen.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">Einschränkungsrecht</p>
                  <p className="text-gray-600 text-sm">Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">Datenübertragbarkeit</p>
                  <p className="text-gray-600 text-sm">Sie haben das Recht, Sie betreffende Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                <div>
                  <p className="font-medium">Beschwerderecht</p>
                  <p className="text-gray-600 text-sm">Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Begriffsdefinitionen */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Begriffsdefinitionen</h2>
            <p className="text-gray-700 mb-4">
              In diesem Abschnitt erhalten Sie eine Übersicht über die in dieser Datenschutzerklärung verwendeten Begrifflichkeiten.
            </p>

            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold text-gray-800">Personenbezogene Daten</p>
                <p className="text-gray-600 text-sm">"Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.</p>
              </div>

              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold text-gray-800">Verantwortlicher</p>
                <p className="text-gray-600 text-sm">"Verantwortlicher" ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.</p>
              </div>

              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold text-gray-800">Verarbeitung</p>
                <p className="text-gray-600 text-sm">"Verarbeitung" ist jeder mit oder ohne Hilfe automatisierter Verfahren ausgeführte Vorgang im Zusammenhang mit personenbezogenen Daten.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;