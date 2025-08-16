import React from 'react';
import { Mail, MapPin, User, Building } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const Impressum: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-12">Impressum</h1>

        <div className="bg-white shadow-lg rounded-lg p-8 space-y-8">
          {/* Angaben gemäß § 5 TMG */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Angaben gemäß § 5 TMG</h2>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <User className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p className="text-gray-700">Zhihu Chen</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p className="text-gray-700">Jakobstr. 10</p>
                  <p className="text-gray-700">78464 Konstanz</p>
                </div>
              </div>
            </div>
          </section>

          {/* Kontakt */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Kontakt</h2>
            <div className="flex items-start space-x-3">
              <Mail className="w-5 h-5 text-gray-600 mt-1" />
              <div>
                <p className="text-gray-700">E-Mail: jayson@marsstein.ai</p>
              </div>
            </div>
          </section>

          {/* Verantwortlich für den Inhalt */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <div className="space-y-2">
              <p className="text-gray-700">Zhihu Chen</p>
              <p className="text-gray-700">Jakobstr. 10</p>
              <p className="text-gray-700">78464 Konstanz</p>
            </div>
          </section>

          {/* Haftungsausschluss */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Haftungsausschluss (Disclaimer)</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Haftung für Inhalte</h3>
                <p className="text-gray-600 leading-relaxed">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Haftung für Links</h3>
                <p className="text-gray-600 leading-relaxed">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Urheberrecht</h3>
                <p className="text-gray-600 leading-relaxed">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
              </div>
            </div>
          </section>

          {/* Streitschlichtung */}
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Streitschlichtung</h2>
            <p className="text-gray-600 leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;