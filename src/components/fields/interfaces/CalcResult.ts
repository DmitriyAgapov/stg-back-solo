// Interface automatically generated by schemas-to-ts

import { ResultRow } from './ResultRow';
import { ResultRow_Plain } from './ResultRow';
import { ResultRow_NoRelations } from './ResultRow';

export interface CalcResult {
  place?: string;
  item: ResultRow[];
}
export interface CalcResult_Plain {
  place?: string;
  item: ResultRow_Plain[];
}

export interface CalcResult_NoRelations {
  place?: string;
  item: ResultRow_NoRelations[];
}

