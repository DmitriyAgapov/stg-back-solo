// Interface automatically generated by schemas-to-ts

import { Seo } from '../../../../components/shared/interfaces/Seo';
import { Product } from '../../../product/content-types/product/product';
import { Seo_Plain } from '../../../../components/shared/interfaces/Seo';
import { Product_Plain } from '../../../product/content-types/product/product';
import { Seo_NoRelations } from '../../../../components/shared/interfaces/Seo';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export interface ProductCategory {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title?: string;
    shortText?: string;
    text?: string;
    seo?: Seo;
    products: { data: Product[] };
    slug?: string;
    locale: string;
    localizations?: { data: ProductCategory[] };
  };
}
export interface ProductCategory_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  shortText?: string;
  text?: string;
  seo?: Seo_Plain;
  products: Product_Plain[];
  slug?: string;
  locale: string;
  localizations?: ProductCategory[];
}

export interface ProductCategory_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  shortText?: string;
  text?: string;
  seo?: Seo_NoRelations;
  products: number[];
  slug?: string;
  locale: string;
  localizations?: ProductCategory[];
}

export interface ProductCategory_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  shortText?: string;
  text?: string;
  seo?: Seo_Plain;
  products: AdminPanelRelationPropertyModification<Product_Plain>;
  slug?: string;
  locale: string;
  localizations?: ProductCategory[];
}
