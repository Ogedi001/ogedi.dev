export interface System {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  metrics?: {
    label: string;
    value: string;
    description: string;
  }[];
  content: string;
}

export interface SystemMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
}
