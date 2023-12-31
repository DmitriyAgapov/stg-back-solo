// Interface automatically generated by schemas-to-ts

import { Media } from '../../../common/schemas-to-ts/Media';

export interface DefaultCard {
  text?: string;
  description?: string;
  image?: { data: Media };
  link?: string;
}
export interface DefaultCard_Plain {
  text?: string;
  description?: string;
  image?: Media;
  link?: string;
}

export interface DefaultCard_NoRelations {
  text?: string;
  description?: string;
  image?: number;
  link?: string;
}

