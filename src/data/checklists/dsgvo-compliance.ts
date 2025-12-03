import { ChecklistConfig } from '@/components/Checklist';

export const dsgvoComplianceChecklist: ChecklistConfig = {
  title: 'DSGVO Compliance Checkliste',
  description: 'Umfassende Checkliste für die Einhaltung der Datenschutz-Grundverordnung (DSGVO)',
  sections: [
    {
      title: 'Grundlegende Anforderungen',
      items: [
        {
          id: 'grundlagen-1',
          text: 'Datenschutzbeauftragter (DSB) benannt (falls erforderlich)',
        },
        {
          id: 'grundlagen-2',
          text: 'Verzeichnis von Verarbeitungstätigkeiten (VVT) erstellt',
          subItems: [
            {
              id: 'grundlagen-2-1',
              text: 'Zwecke der Datenverarbeitung dokumentiert',
            },
            {
              id: 'grundlagen-2-2',
              text: 'Kategorien betroffener Personen erfasst',
            },
            {
              id: 'grundlagen-2-3',
              text: 'Kategorien personenbezogener Daten erfasst',
            },
            {
              id: 'grundlagen-2-4',
              text: 'Empfänger von Daten dokumentiert',
            },
          ],
        },
        {
          id: 'grundlagen-3',
          text: 'Rechtsgrundlagen für alle Verarbeitungen identifiziert',
        },
        {
          id: 'grundlagen-4',
          text: 'Datenschutz-Folgenabschätzung (DSFA) durchgeführt (falls erforderlich)',
        },
      ],
    },
    {
      title: 'Transparenz & Information',
      items: [
        {
          id: 'transparenz-1',
          text: 'Datenschutzerklärung erstellt und veröffentlicht',
          subItems: [
            {
              id: 'transparenz-1-1',
              text: 'Kontaktdaten des Verantwortlichen angegeben',
            },
            {
              id: 'transparenz-1-2',
              text: 'Zwecke und Rechtsgrundlagen beschrieben',
            },
            {
              id: 'transparenz-1-3',
              text: 'Speicherdauer oder Kriterien angegeben',
            },
            {
              id: 'transparenz-1-4',
              text: 'Betroffenenrechte aufgelistet',
            },
            {
              id: 'transparenz-1-5',
              text: 'Widerrufsrecht bei Einwilligung erklärt',
            },
          ],
        },
        {
          id: 'transparenz-2',
          text: 'Cookie-Banner implementiert (falls Cookies verwendet werden)',
        },
        {
          id: 'transparenz-3',
          text: 'Informationspflichten bei Datenerhebung erfüllt',
        },
      ],
    },
    {
      title: 'Betroffenenrechte',
      items: [
        {
          id: 'rechte-1',
          text: 'Prozess für Auskunftsanfragen (Art. 15 DSGVO) implementiert',
        },
        {
          id: 'rechte-2',
          text: 'Prozess für Berichtigung (Art. 16 DSGVO) implementiert',
        },
        {
          id: 'rechte-3',
          text: 'Prozess für Löschung (Art. 17 DSGVO) implementiert',
        },
        {
          id: 'rechte-4',
          text: 'Prozess für Einschränkung der Verarbeitung (Art. 18 DSGVO) implementiert',
        },
        {
          id: 'rechte-5',
          text: 'Prozess für Datenübertragbarkeit (Art. 20 DSGVO) implementiert',
        },
        {
          id: 'rechte-6',
          text: 'Prozess für Widerspruch (Art. 21 DSGVO) implementiert',
        },
      ],
    },
    {
      title: 'Technische & Organisatorische Maßnahmen (TOMs)',
      items: [
        {
          id: 'toms-1',
          text: 'Verschlüsselung personenbezogener Daten implementiert',
          subItems: [
            {
              id: 'toms-1-1',
              text: 'Daten bei der Übertragung verschlüsselt (TLS/SSL)',
            },
            {
              id: 'toms-1-2',
              text: 'Daten im Ruhezustand verschlüsselt',
            },
          ],
        },
        {
          id: 'toms-2',
          text: 'Zugriffskontrolle implementiert',
          subItems: [
            {
              id: 'toms-2-1',
              text: 'Benutzerauthentifizierung eingerichtet',
            },
            {
              id: 'toms-2-2',
              text: 'Rollenbasierte Zugriffskontrolle (RBAC) implementiert',
            },
            {
              id: 'toms-2-3',
              text: 'Logging und Monitoring von Zugriffen aktiviert',
            },
          ],
        },
        {
          id: 'toms-3',
          text: 'Backup- und Recovery-Prozesse etabliert',
        },
        {
          id: 'toms-4',
          text: 'Pseudonymisierung und Anonymisierung wo möglich eingesetzt',
        },
        {
          id: 'toms-5',
          text: 'Regelmäßige Sicherheitsupdates und Patches durchgeführt',
        },
      ],
    },
    {
      title: 'Auftragsverarbeitung & Drittländer',
      items: [
        {
          id: 'avv-1',
          text: 'Auftragsverarbeitungsverträge (AVV) mit allen Dienstleistern abgeschlossen',
        },
        {
          id: 'avv-2',
          text: 'TOMs der Auftragsverarbeiter geprüft',
        },
        {
          id: 'avv-3',
          text: 'Drittlandtransfers identifiziert und dokumentiert',
        },
        {
          id: 'avv-4',
          text: 'Angemessene Garantien für Drittlandtransfers sichergestellt (z.B. SCC)',
        },
      ],
    },
    {
      title: 'Datenschutz-Vorfälle',
      items: [
        {
          id: 'vorfaelle-1',
          text: 'Prozess für Meldung von Datenschutzverletzungen etabliert',
        },
        {
          id: 'vorfaelle-2',
          text: 'Verfahren zur Benachrichtigung der Aufsichtsbehörde (innerhalb 72h) definiert',
        },
        {
          id: 'vorfaelle-3',
          text: 'Verfahren zur Benachrichtigung betroffener Personen definiert',
        },
        {
          id: 'vorfaelle-4',
          text: 'Dokumentation von Datenschutzverletzungen eingerichtet',
        },
      ],
    },
    {
      title: 'Schulung & Awareness',
      items: [
        {
          id: 'schulung-1',
          text: 'Mitarbeiter im Datenschutz geschult',
        },
        {
          id: 'schulung-2',
          text: 'Datenschutzrichtlinien für Mitarbeiter erstellt',
        },
        {
          id: 'schulung-3',
          text: 'Vertraulichkeitsverpflichtungen von Mitarbeitern eingeholt',
        },
        {
          id: 'schulung-4',
          text: 'Regelmäßige Datenschutz-Awareness-Kampagnen durchgeführt',
        },
      ],
    },
  ],
  branding: {
    companyName: 'Marsstein',
    website: 'marsstein.ai',
  },
};
