export default {
  route: '/wissen/branchen/datenschutz-homeoffice',
  title: 'Datenschutz Homeoffice',
  description: 'DSGVO-konforme Heimarbeit - Sicherer Umgang mit Firmendaten zu Hause',
  content: `
    <div class="min-h-screen bg-background">
      <section class="relative min-h-[80vh] flex items-center justify-center">
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-pink-900/20" ></div>
        <div class="relative z-10 container mx-auto px-4 text-center">
          <Badge class="mb-4" variant="secondary">Datenschutz Homeoffice</Badge>
          <h1>
            <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Homeoffice &
            </span><br />Datenschutz
          </h1>
          <p class="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            DSGVO-konforme Heimarbeit - Sicherer Umgang mit Firmendaten zu Hause
          </p>
          <Button size="lg" class="bg-gradient-to-r from-purple-600 to-pink-600">
            Homeoffice-Guide <ArrowRight class="ml-2 h-5 w-5" ></ArrowRight>
          </Button>
        </div>
      </section>

      <div class="container mx-auto px-4 py-12">
        <div>
          {[
            { icon: Laptop, title: 'Sichere Arbeitsplätze', desc: 'DSGVO-konforme Homeoffice-Einrichtung' },
            { icon: Wifi, title: 'Netzwerk-Sicherheit', desc: 'Sichere Internetverbindungen und VPN' },
            { icon: Lock, title: 'Datenzugriff', desc: 'Kontrollierter Zugang zu Firmendaten' }
          ].map((item, i) => (
            <Card key={i} class="p-6">
              <item.icon class="h-12 w-12 text-purple-500 mb-4" ></item>
              <h3 class="text-xl font-semibold mb-2">{item.title}</h3>
              <p class="text-muted-foreground">{item.desc}</p>
            </Card>
          ))}
        </div>

        <Card class="p-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 text-white">
          <h3 class="text-3xl font-bold mb-4">Homeoffice DSGVO-sicher?</h3>
          <p class="text-xl mb-6">Schützen Sie Firmendaten in der Heimarbeit</p>
          <Button size="lg" variant="secondary">
            Homeoffice-Audit <ArrowRight class="ml-2 h-5 w-5" ></ArrowRight>
          </Button>
        </Card>
      </div>
    </div>`
};