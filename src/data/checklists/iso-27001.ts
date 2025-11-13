import { ChecklistConfig } from '@/components/Checklist';

export const iso27001Checklist: ChecklistConfig = {
  title: 'ISO 27001 Compliance Checkliste',
  description: 'Checkliste für die Implementierung eines Informationssicherheits-Managementsystems nach ISO 27001',
  sections: [
    {
      title: 'Kontext der Organisation (Kapitel 4)',
      items: [
        {
          id: 'kontext-1',
          text: 'Externe und interne Themen identifiziert',
        },
        {
          id: 'kontext-2',
          text: 'Interessierte Parteien und deren Anforderungen dokumentiert',
        },
        {
          id: 'kontext-3',
          text: 'Anwendungsbereich des ISMS definiert',
        },
        {
          id: 'kontext-4',
          text: 'ISMS etabliert, implementiert, aufrechterhalten und kontinuierlich verbessert',
        },
      ],
    },
    {
      title: 'Führung (Kapitel 5)',
      items: [
        {
          id: 'fuehrung-1',
          text: 'Informationssicherheitspolitik erstellt und kommuniziert',
        },
        {
          id: 'fuehrung-2',
          text: 'Rollen, Verantwortlichkeiten und Befugnisse zugewiesen',
        },
        {
          id: 'fuehrung-3',
          text: 'Verpflichtung der obersten Leitung dokumentiert',
        },
      ],
    },
    {
      title: 'Planung (Kapitel 6)',
      items: [
        {
          id: 'planung-1',
          text: 'Risikobeurteilungsprozess etabliert',
          subItems: [
            {
              id: 'planung-1-1',
              text: 'Risikokriterien definiert',
            },
            {
              id: 'planung-1-2',
              text: 'Risikoakzeptanzkriterien festgelegt',
            },
            {
              id: 'planung-1-3',
              text: 'Risikobeurteilung durchgeführt',
            },
          ],
        },
        {
          id: 'planung-2',
          text: 'Risikobehandlungsplan erstellt',
          subItems: [
            {
              id: 'planung-2-1',
              text: 'Risikobehandlungsoptionen ausgewählt',
            },
            {
              id: 'planung-2-2',
              text: 'Controls zur Risikobehandlung bestimmt',
            },
            {
              id: 'planung-2-3',
              text: 'Anwendbarkeitserklärung (Statement of Applicability) erstellt',
            },
          ],
        },
        {
          id: 'planung-3',
          text: 'Informationssicherheitsziele definiert',
        },
      ],
    },
    {
      title: 'Unterstützung (Kapitel 7)',
      items: [
        {
          id: 'unterstuetzung-1',
          text: 'Ressourcen für ISMS bereitgestellt',
        },
        {
          id: 'unterstuetzung-2',
          text: 'Kompetenzen des Personals sichergestellt',
          subItems: [
            {
              id: 'unterstuetzung-2-1',
              text: 'Schulungsbedarf ermittelt',
            },
            {
              id: 'unterstuetzung-2-2',
              text: 'Security Awareness Schulungen durchgeführt',
            },
          ],
        },
        {
          id: 'unterstuetzung-3',
          text: 'Interne und externe Kommunikation geregelt',
        },
        {
          id: 'unterstuetzung-4',
          text: 'Dokumentierte Information erstellt und gesteuert',
        },
      ],
    },
    {
      title: 'Betrieb (Kapitel 8)',
      items: [
        {
          id: 'betrieb-1',
          text: 'Betriebliche Planung und Steuerung implementiert',
        },
        {
          id: 'betrieb-2',
          text: 'Informationssicherheitsrisikobeurteilung durchgeführt',
        },
        {
          id: 'betrieb-3',
          text: 'Risikobehandlungsplan umgesetzt',
        },
      ],
    },
    {
      title: 'Bewertung der Leistung (Kapitel 9)',
      items: [
        {
          id: 'bewertung-1',
          text: 'Überwachung, Messung, Analyse und Bewertung durchgeführt',
        },
        {
          id: 'bewertung-2',
          text: 'Interne Audits geplant und durchgeführt',
          subItems: [
            {
              id: 'bewertung-2-1',
              text: 'Auditprogramm etabliert',
            },
            {
              id: 'bewertung-2-2',
              text: 'Auditkompetenz sichergestellt',
            },
            {
              id: 'bewertung-2-3',
              text: 'Auditergebnisse dokumentiert',
            },
          ],
        },
        {
          id: 'bewertung-3',
          text: 'Management-Review durchgeführt',
        },
      ],
    },
    {
      title: 'Verbesserung (Kapitel 10)',
      items: [
        {
          id: 'verbesserung-1',
          text: 'Nichtkonformitäten und Korrekturmaßnahmen dokumentiert',
        },
        {
          id: 'verbesserung-2',
          text: 'Kontinuierliche Verbesserung des ISMS sichergestellt',
        },
      ],
    },
    {
      title: 'Annex A Controls (Auswahl)',
      items: [
        {
          id: 'controls-1',
          text: 'A.5: Organisatorische Controls',
          subItems: [
            {
              id: 'controls-1-1',
              text: 'Informationssicherheitsrichtlinien',
            },
            {
              id: 'controls-1-2',
              text: 'Rollen und Verantwortlichkeiten',
            },
          ],
        },
        {
          id: 'controls-2',
          text: 'A.6: People Controls',
          subItems: [
            {
              id: 'controls-2-1',
              text: 'Screening von Mitarbeitern',
            },
            {
              id: 'controls-2-2',
              text: 'Vertraulichkeitsvereinbarungen',
            },
          ],
        },
        {
          id: 'controls-3',
          text: 'A.7: Physical Controls',
          subItems: [
            {
              id: 'controls-3-1',
              text: 'Physische Sicherheitsbereiche',
            },
            {
              id: 'controls-3-2',
              text: 'Zutrittskontrolle',
            },
          ],
        },
        {
          id: 'controls-4',
          text: 'A.8: Technological Controls',
          subItems: [
            {
              id: 'controls-4-1',
              text: 'Zugriffssteuerung',
            },
            {
              id: 'controls-4-2',
              text: 'Verschlüsselung',
            },
            {
              id: 'controls-4-3',
              text: 'Backup und Recovery',
            },
            {
              id: 'controls-4-4',
              text: 'Logging und Monitoring',
            },
          ],
        },
      ],
    },
  ],
  branding: {
    companyName: 'Marsstein',
    website: 'marsstein.ai',
  },
};
