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
  link?: string;
  linkLabel?: string;
  content: string;
}

export interface SystemMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  link?: string;
  linkLabel?: string;
}
