// Interface automatically generated by schemas-to-ts

import { Product } from '../../../product/content-types/product/product';
import { DefaultCard } from '../../../../components/cards/interfaces/DefaultCard';
import { Media } from '../../../../common/schemas-to-ts/Media';
import { Seo } from '../../../../components/shared/interfaces/Seo';
import { Product_Plain } from '../../../product/content-types/product/product';
import { DefaultCard_Plain } from '../../../../components/cards/interfaces/DefaultCard';
import { Seo_Plain } from '../../../../components/shared/interfaces/Seo';
import { DefaultCard_NoRelations } from '../../../../components/cards/interfaces/DefaultCard';
import { Seo_NoRelations } from '../../../../components/shared/interfaces/Seo';
import { AdminPanelRelationPropertyModification } from '../../../../common/schemas-to-ts/AdminPanelRelationPropertyModification';

export enum Type {
  Basic = 'basic',
  Comfort = 'comfort',
  Premium = 'premium',}

export interface Serie {
  id: number;
  attributes: {
    createdAt: Date;    updatedAt: Date;    publishedAt?: Date;    title?: string;
    type?: Type;
    products?: { data: Product[] };
    Features: DefaultCard[];
    description?: string;
    image?: { data: Media };
    seo?: Seo;
    imglogo?: { data: Media };
    calc_description?: string;
    slug?: string;
    locale: string;
    localizations?: { data: Serie[] };
  };
}
export interface Serie_Plain {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  type?: Type;
  products?: Product_Plain[];
  Features: DefaultCard_Plain[];
  description?: string;
  image?: Media;
  seo?: Seo_Plain;
  imglogo?: Media;
  calc_description?: string;
  slug?: string;
  locale: string;
  localizations?: Serie[];
}

export interface Serie_NoRelations {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  type?: Type;
  products?: number[];
  Features: DefaultCard_NoRelations[];
  description?: string;
  image?: number;
  seo?: Seo_NoRelations;
  imglogo?: number;
  calc_description?: string;
  slug?: string;
  locale: string;
  localizations?: Serie[];
}

export interface Serie_AdminPanelLifeCycle {
  id: number;
  createdAt: Date;  updatedAt: Date;  publishedAt?: Date;  title?: string;
  type?: Type;
  products?: AdminPanelRelationPropertyModification<Product_Plain>;
  Features: DefaultCard_Plain[];
  description?: string;
  image?: AdminPanelRelationPropertyModification<Media>;
  seo?: Seo_Plain;
  imglogo?: AdminPanelRelationPropertyModification<Media>;
  calc_description?: string;
  slug?: string;
  locale: string;
  localizations?: Serie[];
}