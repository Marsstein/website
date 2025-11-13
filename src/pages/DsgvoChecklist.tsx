import { Helmet } from 'react-helmet-async';
import { Checklist } from '@/components/Checklist';
import { dsgvoComplianceChecklist } from '@/data/checklists/dsgvo-compliance';
import { ShieldCheck, FileCheck, Scale } from 'lucide-react';

export default function DsgvoChecklist() {
  return (
    <>
      <Helmet>
        <title>DSGVO Compliance Checkliste | Marsstein</title>
        <meta
          name="description"
          content="Interaktive DSGVO Compliance Checkliste zum Abhaken und als PDF Download. Stellen Sie sicher, dass Ihr Unternehmen alle Anforderungen der Datenschutz-Grundverordnung erfüllt."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 blur-2xl opacity-20 rounded-full"></div>
                <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 p-4 rounded-2xl">
                  <ShieldCheck className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
              DSGVO Compliance Checkliste
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Interaktive Checkliste zur Überprüfung Ihrer DSGVO-Compliance. Haken Sie erledigte
              Punkte ab und laden Sie Ihre individuelle Checkliste als PDF herunter.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <FileCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Interaktiv</h3>
                <p className="text-sm text-slate-600">
                  Haken Sie erledigte Punkte direkt ab und verfolgen Sie Ihren Fortschritt
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <ShieldCheck className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Umfassend</h3>
                <p className="text-sm text-slate-600">
                  Alle wichtigen DSGVO-Anforderungen in einer übersichtlichen Liste
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4 mx-auto">
                  <Scale className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">PDF Export</h3>
                <p className="text-sm text-slate-600">
                  Laden Sie Ihre personalisierte Checkliste als PDF herunter
                </p>
              </div>
            </div>
          </div>

          <Checklist config={dsgvoComplianceChecklist} />

          <div className="mt-12 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-3">
              Brauchen Sie Unterstützung bei der DSGVO-Compliance?
            </h3>
            <p className="text-slate-700 mb-4">
              Unsere Experten helfen Ihnen dabei, alle Anforderungen der DSGVO zu erfüllen und
              Ihre Datenschutzprozesse zu optimieren. Von der Erstellung des Verzeichnisses von
              Verarbeitungstätigkeiten bis zur Implementierung technischer Maßnahmen.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Jetzt Beratung anfragen
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
