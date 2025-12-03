# Checklist Component

Wiederverwendbare Checklisten-Komponente mit PDF-Download-Funktionalität.

## Features

- ✅ Interaktive Checkboxen zum Abhaken
- 📊 Fortschrittsanzeige in Prozent
- 📄 PDF-Download mit professionellem Layout
- 🎨 Vollständig styled mit TailwindCSS
- 🔄 Unterstützung für verschachtelte Sub-Items
- 📱 Responsive Design

## Installation

Die Komponente nutzt `@react-pdf/renderer` für die PDF-Generierung:

```bash
npm install @react-pdf/renderer
```

## Verwendung

### 1. Checklisten-Konfiguration erstellen

Erstelle eine Datei in `src/data/checklists/`:

```typescript
import { ChecklistConfig } from '@/components/Checklist';

export const myChecklist: ChecklistConfig = {
  title: 'Meine Checkliste',
  description: 'Beschreibung der Checkliste',
  sections: [
    {
      title: 'Sektion 1',
      items: [
        {
          id: 'item-1',
          text: 'Erstes Item',
        },
        {
          id: 'item-2',
          text: 'Zweites Item mit Sub-Items',
          subItems: [
            {
              id: 'item-2-1',
              text: 'Sub-Item 1',
            },
            {
              id: 'item-2-2',
              text: 'Sub-Item 2',
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
```

### 2. Checkliste in einer Page verwenden

```tsx
import { Checklist } from '@/components/Checklist';
import { myChecklist } from '@/data/checklists/my-checklist';

export default function MyChecklistPage() {
  return (
    <div className="container mx-auto py-12">
      <Checklist config={myChecklist} />
    </div>
  );
}
```

## API

### ChecklistConfig

```typescript
interface ChecklistConfig {
  title: string;
  description?: string;
  sections: ChecklistSection[];
  branding?: {
    companyName?: string;
    website?: string;
    logo?: string;
  };
}
```

### ChecklistSection

```typescript
interface ChecklistSection {
  title: string;
  items: ChecklistItem[];
}
```

### ChecklistItem

```typescript
interface ChecklistItem {
  id: string;
  text: string;
  checked?: boolean;
  subItems?: ChecklistItem[];
}
```

## Beispiele

Siehe:
- `src/data/checklists/dsgvo-compliance.ts` - DSGVO Compliance Checkliste
- `src/data/checklists/iso-27001.ts` - ISO 27001 Compliance Checkliste
- `src/pages/DsgvoChecklist.tsx` - Beispiel-Seite

## Styling

Die Komponente nutzt TailwindCSS und shadcn/ui Komponenten:
- `Card` für das Container-Layout
- `Button` für den PDF-Download-Button
- `lucide-react` Icons für visuelle Elemente

Das PDF-Layout ist in `ChecklistPDF.tsx` definiert und kann angepasst werden.

## PDF-Anpassungen

Um das PDF-Layout zu ändern, bearbeite `src/components/Checklist/ChecklistPDF.tsx`:

- **Schriftarten**: Nutzt Google Fonts (Inter)
- **Farben**: Anpassbar über StyleSheet
- **Layout**: React-PDF StyleSheet Syntax
