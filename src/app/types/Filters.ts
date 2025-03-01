export enum FILTER_TYPE {
  SELECT = "select",
  TEXT = "text",
}

export interface FilterBase {
  key: string;
  value: string;
}

export interface AvailableItem {
  label: string;
  value: string;
}

export interface SelectFilter extends FilterBase {
  type: FILTER_TYPE.SELECT;
  availableItems: AvailableItem[];
}

export interface TextFilter extends FilterBase {
  type: FILTER_TYPE.TEXT;
}

export type Filter = SelectFilter | TextFilter;
