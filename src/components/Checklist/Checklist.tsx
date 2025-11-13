import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { Download, CheckCircle2, Circle } from 'lucide-react';
import { ChecklistPDF } from './ChecklistPDF';
import { ChecklistConfig, ChecklistItem } from './types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface ChecklistProps {
  config: ChecklistConfig;
  className?: string;
}

export const Checklist = ({ config, className }: ChecklistProps) => {
  const [checklistState, setChecklistState] = useState<ChecklistConfig>(config);

  const toggleItem = (sectionIdx: number, itemId: string, subItemId?: string) => {
    setChecklistState((prev) => {
      const newSections = [...prev.sections];
      const section = newSections[sectionIdx];
      const item = section.items.find((i) => i.id === itemId);

      if (!item) return prev;

      if (subItemId) {
        const subItem = item.subItems?.find((s) => s.id === subItemId);
        if (subItem) {
          subItem.checked = !subItem.checked;
        }
      } else {
        item.checked = !item.checked;
      }

      return { ...prev, sections: newSections };
    });
  };

  const getProgress = () => {
    let total = 0;
    let checked = 0;

    checklistState.sections.forEach((section) => {
      section.items.forEach((item) => {
        total++;
        if (item.checked) checked++;
        if (item.subItems) {
          item.subItems.forEach((subItem) => {
            total++;
            if (subItem.checked) checked++;
          });
        }
      });
    });

    return { total, checked, percentage: total > 0 ? Math.round((checked / total) * 100) : 0 };
  };

  const progress = getProgress();

  return (
    <div className={cn('space-y-6', className)}>
      <Card className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-900 mb-2">
              {checklistState.title}
            </h2>
            {checklistState.description && (
              <p className="text-slate-600">{checklistState.description}</p>
            )}
            <div className="mt-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 bg-slate-100 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-blue-600 h-full transition-all duration-500 ease-out"
                    style={{ width: `${progress.percentage}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-slate-700 min-w-[80px]">
                  {progress.checked} / {progress.total} ({progress.percentage}%)
                </span>
              </div>
            </div>
          </div>
          <PDFDownloadLink
            document={<ChecklistPDF config={checklistState} />}
            fileName={`${checklistState.title.toLowerCase().replace(/\s+/g, '-')}.pdf`}
          >
            {({ loading }) => (
              <Button
                variant="default"
                size="lg"
                disabled={loading}
                className="ml-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800"
              >
                <Download className="w-4 h-4 mr-2" />
                {loading ? 'Generiere PDF...' : 'Als PDF downloaden'}
              </Button>
            )}
          </PDFDownloadLink>
        </div>

        <div className="space-y-8">
          {checklistState.sections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="text-lg font-semibold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                {section.title}
              </h3>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <div key={item.id}>
                    <ChecklistItemComponent
                      item={item}
                      onToggle={() => toggleItem(sectionIdx, item.id)}
                    />
                    {item.subItems && (
                      <div className="ml-8 mt-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <ChecklistItemComponent
                            key={subItem.id}
                            item={subItem}
                            isSubItem
                            onToggle={() => toggleItem(sectionIdx, item.id, subItem.id)}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

interface ChecklistItemComponentProps {
  item: ChecklistItem;
  isSubItem?: boolean;
  onToggle: () => void;
}

const ChecklistItemComponent = ({ item, isSubItem, onToggle }: ChecklistItemComponentProps) => {
  return (
    <button
      onClick={onToggle}
      className={cn(
        'w-full flex items-start gap-3 p-3 rounded-lg transition-all group',
        'hover:bg-slate-50 active:bg-slate-100',
        item.checked && 'bg-blue-50/50'
      )}
    >
      {item.checked ? (
        <CheckCircle2 className={cn(
          'flex-shrink-0 mt-0.5 text-blue-600',
          isSubItem ? 'w-4 h-4' : 'w-5 h-5'
        )} />
      ) : (
        <Circle className={cn(
          'flex-shrink-0 mt-0.5 text-slate-300 group-hover:text-slate-400',
          isSubItem ? 'w-4 h-4' : 'w-5 h-5'
        )} />
      )}
      <span className={cn(
        'text-left transition-all',
        isSubItem ? 'text-sm' : 'text-base',
        item.checked ? 'text-slate-400 line-through' : 'text-slate-700 group-hover:text-slate-900'
      )}>
        {item.text}
      </span>
    </button>
  );
};
