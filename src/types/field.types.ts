export type TField =
  | 'rowName'
  | 'salary'
  | 'equipmentCosts'
  | 'overheads'
  | 'estimatedProfit';

export interface IField {
  name: TField;
  value: number | string;
}