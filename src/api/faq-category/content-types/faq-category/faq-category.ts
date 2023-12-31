// Interface automatically generated by schemas-to-ts

export interface FaqCategory {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title?: string;
    shortText?: string;
    slug?: string;
    locale: string;
    localizations?: { data: FaqCategory[] };
  };
}
export interface FaqCategory_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  shortText?: string;
  slug?: string;
  locale: string;
  localizations?: FaqCategory[];
}

export interface FaqCategory_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  shortText?: string;
  slug?: string;
  locale: string;
  localizations?: FaqCategory[];
}

export interface FaqCategory_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  shortText?: string;
  slug?: string;
  locale: string;
  localizations?: FaqCategory[];
}
