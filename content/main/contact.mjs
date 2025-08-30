export default {
  route: '/contact',
  title: 'Contact',
  description: 'Wir helfen Ihnen bei allen Fragen rund um Compliance, Datenschutz und Informationssicherheit.',
  content: `
    <>
      
      
      <Header ></Header>
      
      <div class="min-h-screen bg-gradient-to-b from-white to-[#F5F6F8] pt-32 pb-16">
        <div>
          {/* Header */}
          <div class="text-center mb-16">
            <h1>
              Sprechen Sie mit unseren <span class="text-[#e24e1b]">Experten</span>
            </h1>
            <p class="text-xl text-[#474747] max-w-3xl mx-auto leading-relaxed">
              Wir helfen Ihnen bei allen Fragen rund um Compliance, Datenschutz und Informationssicherheit. 
              <span class="font-semibold">Kostenlose Erstberatung inklusive.</span>
            </p>
          </div>

          <div>
            {/* Contact Form */}
            <div>
              <h2 class="text-3xl font-bold text-[#232323] mb-8">
                Senden Sie uns eine Nachricht
              </h2>
              <form class="space-y-6">
                <div>
                  <div>
                    <label for="firstName" class="block text-sm font-medium text-[#474747] mb-2">
                      Vorname *
                    </label>
                    <input>
                  </div>
                  <div>
                    <label for="lastName" class="block text-sm font-medium text-[#474747] mb-2">
                      Nachname *
                    </label>
                    <input>
                  </div>
                </div>

                <div>
                  <label for="email" class="block text-sm font-medium text-[#474747] mb-2">
                    E-Mail *
                  </label>
                  <input>
                </div>

                <div>
                  <label for="company" class="block text-sm font-medium text-[#474747] mb-2">
                    Unternehmen
                  </label>
                  <input>
                </div>

                <div>
                  <label for="topic" class="block text-sm font-medium text-[#474747] mb-2">
                    Thema *
                  </label>
                  <select>
                    <option>Bitte wählen</option>
                    <option value="dsgvo">DSGVO Compliance</option>
                    <option value="iso27001">ISO 27001 Zertifizierung</option>
                    <option value="ai-act">EU AI Act</option>
                    <option value="demo">Produkt Demo</option>
                    <option value="other">Sonstiges</option>
                  </select>
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-[#474747] mb-2">
                    Nachricht *
                  </label>
                  <textarea></textarea>
                </div>

                <div class="flex items-start">
                  <input>
                  <label for="privacy" class="ml-3 text-sm text-[#474747]">
                    Ich habe die Datenschutzerklärung gelesen und stimme der Verarbeitung meiner Daten zu. *
                  </label>
                </div>

                <button>
                  Nachricht senden
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <div>
                <h2 class="text-3xl font-bold text-[#232323] mb-8">
                  Direkter Kontakt
                </h2>
                
                <div class="space-y-8">
                  <div class="flex items-start group">
                    <div>
                      <svg class="w-6 h-6 text-[#e24e1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h3 class="font-semibold text-[#232323] text-lg">E-Mail</h3>
                      <p class="text-[#474747] font-medium">info@marsstein.ai</p>
                      <p class="text-sm text-[#474747] opacity-80">Antwort innerhalb von 24 Stunden</p>
                    </div>
                  </div>

                  <div class="flex items-start group">
                    <div>
                      <svg class="w-6 h-6 text-[#e24e1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h3 class="font-semibold text-[#232323] text-lg">Telefon</h3>
                      <p class="text-[#474747] font-medium">+4917670560292</p>
                      <p class="text-sm text-[#474747] opacity-80">Mo-Fr 9:00-18:00 Uhr</p>
                    </div>
                  </div>

                  <div class="flex items-start group">
                    <div>
                      <svg class="w-6 h-6 text-[#e24e1b]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" ></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" ></path>
                      </svg>
                    </div>
                    <div class="ml-4">
                      <h3 class="font-semibold text-[#232323] text-lg">Adresse</h3>
                      <p class="text-[#474747] font-medium">
                        Marsstein GmbH i.G.<br />
                        Bücklestraße 3<br />
                        78467 Konstanz
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-gradient-to-br from-[#e24e1b]/10 to-[#f97316]/10 rounded-2xl p-10 border border-[#e24e1b]/20">
                <div class="flex items-center mb-6">
                  <div class="p-3 bg-[#e24e1b] rounded-full">
                    <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" ></path>
                    </svg>
                  </div>
                  <h3 class="text-2xl font-semibold text-[#232323] ml-4">
                    Kostenlose Erstberatung
                  </h3>
                </div>
                <p class="text-[#474747] mb-6 text-lg">
                  Vereinbaren Sie ein unverbindliches Beratungsgespräch mit unseren Compliance-Experten.
                </p>
                <ul class="space-y-3 text-[#474747]">
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-[#39B37B] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" ></path>
                    </svg>
                    <span class="font-medium">30 Minuten Expertengespräch</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-[#39B37B] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" ></path>
                    </svg>
                    <span class="font-medium">Individuelle Lösungsvorschläge</span>
                  </li>
                  <li class="flex items-center">
                    <svg class="w-5 h-5 text-[#39B37B] mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" ></path>
                    </svg>
                    <span class="font-medium">Unverbindlich & kostenlos</span>
                  </li>
                </ul>
                <button>
                  Termin vereinbaren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer ></Footer>
    </>`
};