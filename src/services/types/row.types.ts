export interface IRow {
  id?: number;
  rowName: string;
  total?: number;
  salary: number;
  machineOperatorSalary: number;
  mimExploitation: number;
  materials: number;
  mainCosts: number;
  supportCosts: number;
  equipmentCosts:	number;
  overheads: number;
  estimatedProfit: number;
  parentId: number | null;
  child?: IRow[];
};
