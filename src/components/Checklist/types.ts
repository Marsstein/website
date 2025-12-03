export interface ChecklistItem {
  id: string;
  text: string;
  checked?: boolean;
  subItems?: ChecklistItem[];
}

export interface ChecklistSection {
  title: string;
  items: ChecklistItem[];
}

export interface ChecklistConfig {
  title: string;
  description?: string;
  sections: ChecklistSection[];
  branding?: {
    companyName?: string;
    website?: string;
    logo?: string;
  };
}
