interface IData {
    equipmentCosts:	number;
    estimatedProfit: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    overheads: number;
    parentId: number | null;
    rowName: string;
    salary: number;
    supportCosts: number;
}

export interface ITableData {
  data: IData | null;
  level: 1 | 2 | 3;
  isRowEdit?: boolean;
}
