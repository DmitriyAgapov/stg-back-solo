// Interface automatically generated by schemas-to-ts

import { Product } from '../../../api/product/content-types/product/product';
import { Product_Plain } from '../../../api/product/content-types/product/product';

export interface ResultRow {
  product?: { data: Product };
  thickness?: string;
  quanity?: number;
}
export interface ResultRow_Plain {
  product?: Product_Plain;
  thickness?: string;
  quanity?: number;
}

export interface ResultRow_NoRelations {
  product?: number;
  thickness?: string;
  quanity?: number;
}
