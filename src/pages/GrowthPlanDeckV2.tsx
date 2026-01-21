import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Building2, Bot, Zap, ArrowRight, Target, Telescope, Scaling, Globe, ShieldCheck, Search, Handshake, CheckCircle2, Repeat, Milestone, LineChart, Megaphone, Atom, ArrowDown, PieChart, Filter } from 'lucide-react';

const GrowthPlanDeckV2: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <div className="w-full max-w-[1920px] bg-gray-50/70 p-16 flex flex-col gap-16">

        {/* 1. The Source: Market Potential */}
        <section className="text-center">
          <p className="font-semibold text-lg text-[#e24e1b]">Die Quelle</p>
          <h1 className="text-6xl font-bold text-[#232323] mt-4">Ein 2,5 Mrd. € Markt reif für Disruption</h1>
          <p className="text-xl text-gray-600 mt-4 max-w-4xl mx-auto">Der DACH-Markt für DSGVO-Compliance ist fragmentiert und wird von traditionellen, ineffizienten Lösungen dominiert. Wir haben einen klaren Plan, ihn zu erobern.</p>
          <div className="mt-8 flex justify-center gap-8">
            <div className="text-center">
              <PieChart className="h-24 w-24 text-gray-300 mx-auto"/>
              <p className="mt-2 font-bold text-2xl">TAM: €2.5 Mrd.</p>
              <p className="text-gray-500">Gesamter Compliance-Markt DACH</p>
            </div>
            <div className="text-center">
              <PieChart className="h-24 w-24 text-gray-400 mx-auto" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 60%, 0 60%)' }}/>
              <p className="mt-2 font-bold text-2xl">SAM: €900 Mio.</p>
              <p className="text-gray-500">KMUs & Kanzleien mit DSGVO-Bedarf</p>
            </div>
            <div className="text-center">
              <PieChart className="h-24 w-24 text-[#e24e1b] mx-auto" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 15%, 0 15%)' }}/>
              <p className="mt-2 font-bold text-2xl">SOM: €100 Mio.</p>
              <p className="text-gray-500">Unser erreichbarer Markt (Phase 2)</p>
            </div>
          </div>
        </section>

        <div className="text-center"><ArrowDown className="h-12 w-12 text-gray-300 mx-auto animate-bounce"/></div>

        {/* 2. The Inflows: Go-to-Market Engines */}
        <section>
           <header className="text-center mb-10">
            <p className="font-semibold text-lg text-[#e24e1b]">Die Zuflüsse</p>
            <h2 className="text-4xl font-bold text-[#232323]">Zwei spezialisierte Motoren zur Markteroberung</h2>
          </header>
          <div className="grid grid-cols-2 gap-12">
            {/* Engine 1: Inbound */}
            <div className="flex flex-col gap-6 p-8 bg-white rounded-2xl border-2 border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold text-center">Inbound-Motor (Interne DSBs)</h3>
              <div className="p-4 bg-gray-50 rounded-lg"><strong>Persona:</strong> "Stefan", Compliance-Manager, sucht nach Effizienz & Sicherheit.</div>
              <div className="p-4 bg-gray-50 rounded-lg"><strong>Kanäle:</strong> SEO, Content Marketing (Whitepaper, Blog).</div>
              <div className="p-4 bg-gray-50 rounded-lg"><strong>Funnel:</strong> Sucht "DSFA durchführen" → Lädt Guide herunter → Testet Co-Pilot → Bucht SaaS-Abo.</div>
            </div>
            {/* Engine 2: Outbound */}
             <div className="flex flex-col gap-6 p-8 bg-white rounded-2xl border-2 border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold text-center">Outbound-Motor (Externe DSBs)</h3>
              <div className="p-4 bg-gray-50 rounded-lg"><strong>Persona:</strong> "Claudia", Beraterin, sucht nach Skalierbarkeit & neuen Kunden.</div>
              <div className="p-4 bg-gray-50 rounded-lg"><strong>Kanäle:</strong> Direktansprache (LinkedIn), Partner-Netzwerk.</div>
              <div className="p-4 bg-gray-50 rounded-lg"><strong>Funnel:</strong> Sieht Partner-Vorteile → Bucht Demo → Wird Netzwerk-Partner → Skaliert ihr Geschäft.</div>
            </div>
          </div>
        </section>
        
        <div className="text-center"><ArrowDown className="h-12 w-12 text-gray-300 mx-auto animate-bounce"/></div>

        {/* 3. The Vortex: SaaS Core & Flywheel */}
        <section>
            <header className="text-center mb-10">
              <p className="font-semibold text-lg text-[#e24e1b]">Der Vortex</p>
              <h2 className="text-4xl font-bold text-[#232323]">Das sich selbst verstärkende Ökosystem-Schwungrad</h2>
            </header>
            <div className="p-10 bg-white rounded-2xl border-2 border-gray-100 shadow-2xl flex items-center justify-center gap-10 relative">
                 <div className="absolute w-[700px] h-[300px] border-8 border-dashed border-gray-200 rounded-full animate-spin-slow -z-10"></div>
                 <div className="text-center z-10">
                    <Building2 className="h-12 w-12 text-[#e24e1b] mx-auto"/>
                    <p className="font-bold mt-2">Interner DSB (Stefan)</p>
                    <p className="text-sm text-gray-600">...nutzt den Co-Pilot & stellt eine LITL-Anfrage.</p>
                </div>
                <div className="text-center z-10">
                    <ArrowRight className="h-16 w-16 text-gray-400"/>
                    <p className="text-sm font-bold text-[#39B37B] mt-2">Experten-Anfrage</p>
                </div>
                 <div className="text-center z-10">
                    <Users className="h-12 w-12 text-[#474747] mx-auto"/>
                    <p className="font-bold mt-2">Externer DSB (Claudia)</p>
                    <p className="text-sm text-gray-600">...gewinnt einen neuen Mandanten & wächst.</p>
                </div>
                 <div className="text-center z-10">
                    <ArrowRight className="h-16 w-16 text-gray-400"/>
                    <p className="text-sm font-bold text-gray-700 mt-2">Netzwerk-Wert</p>
                </div>
                 <div className="text-center z-10">
                    <Atom className="h-12 w-12 text-[#e24e1b] mx-auto"/>
                    <p className="font-bold mt-2">Die Plattform wird stärker</p>
                    <p className="text-sm text-gray-600">...und zieht mehr Nutzer an.</p>
                </div>
            </div>
        </section>

         <div className="text-center"><ArrowDown className="h-12 w-12 text-gray-300 mx-auto animate-bounce"/></div>

        {/* 4. The Outflow: Exponential Growth */}
        <section>
            <header className="text-center mb-10">
              <p className="font-semibold text-lg text-[#e24e1b]">Der Ausfluss</p>
              <h2 className="text-4xl font-bold text-[#232323]">Exponentielles Wachstum durch Netzwerkeffekte</h2>
            </header>
            <div className="p-10 bg-white rounded-2xl border-2 border-gray-100 shadow-lg">
                <LineChart className="w-full h-64 text-gray-300"/>
                <div className="grid grid-cols-3 text-center mt-4">
                    <div><p className="font-bold">Phase 1</p><p className="text-sm text-gray-500">Validierung</p></div>
                    <div><p className="font-bold">Phase 2</p><p className="text-sm text-gray-500">ARR: €5M+</p></div>
                    <div><p className="font-bold">Phase 3</p><p className="text-sm text-gray-500">ARR: €50M+</p></div>
                </div>
            </div>
        </section>

         <div className="text-center"><ArrowDown className="h-12 w-12 text-gray-300 mx-auto animate-bounce"/></div>

        {/* 5. The Foundation: Strategic Blueprint */}
        <section>
          <header className="text-center mb-10">
            <p className="font-semibold text-lg text-[#e24e1b]">Das Fundament</p>
            <h2 className="text-4xl font-bold text-[#232323]">Unsere Blaupause für die Marktführerschaft</h2>
          </header>
          <div className="grid grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border-2 border-[#39B37B]/50 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Phase 1: Fundament (Heute)</h3>
              <p><strong>Produkt:</strong> DSGVO Co-Pilot V1</p>
              <p><strong>Marketing:</strong> Content/SEO, Aufbau DSB-Netzwerk</p>
              <p className="font-bold text-[#39B37B] mt-2">Meilenstein: Proof of Concept erreicht</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border-2 border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Phase 2: Skalierung (1-2 J.)</h3>
              <p><strong>Produkt:</strong> Self-Service-Onboarding, Partner-API</p>
              <p><strong>Marketing:</strong> + Paid Ads, Sales-Team, Webinare</p>
              <p className="font-bold mt-2">Meilenstein: Marktführer DACH, ARR &gt; €5M</p>
            </div>
            <div className="p-8 bg-white rounded-2xl border-2 border-gray-100 shadow-lg">
               <h3 className="text-2xl font-bold mb-4">Phase 3: Dominanz (3-5 J.)</h3>
              <p><strong>Produkt:</strong> + AI Act, NIS2, ISO 27001 Suite</p>
              <p><strong>Marketing:</strong> Internationale Expansion, Länder-Teams</p>
              <p className="font-bold mt-2">Meilenstein: Europäischer Standard, ARR &gt; €50M</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default GrowthPlanDeckV2;
